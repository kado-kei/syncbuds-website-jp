// ============================================================
// お問い合わせフォームの受け口（Cloudflare Pages Function）
// ------------------------------------------------------------
// リポジトリ直下の functions/ は Cloudflare Pages が自動で拾い、
// https://syncbuds.jp/api/contact として動く。
// Next の静的書き出し（out/）とは別枠なので output:"export" のままで動く。
//
// 必要な環境変数（Cloudflare Pages ダッシュボード → Settings → 環境変数）:
//   SLACK_WEBHOOK_URL … Slack Workflow Builder の Webhook トリガー URL（Secret として登録）
//   BACKUP_WEBHOOK_URL … 控え用 Google Apps Script の Web アプリ URL（Secret として登録）
//   BACKUP_TOKEN       … 上のスクリプトと共通の合言葉（Secret）。form-backup/README.md 参照
//
// Workflow Builder 側の設定手順は functions/README.md を参照。
// Webhook トリガーには「変数」を事前定義する必要があり、ここで送る JSON の
// キー名（name / email / category / affiliation / message）と完全に一致させること。
// Incoming Webhook と違い Block Kit（blocks）は受け取れず、フラットな文字列だけを渡す。
//
// スパム対策は「軽め」構成:
//   1. honeypot（人間には見えない入力欄。埋まっていたら黙って成功を返す）
//   2. 最短入力時間（3秒未満の送信は自動入力とみなす）
//   3. Origin チェック（他サイトからの投稿を弾く）
//   4. 長さ・形式のサーバ側バリデーション
// 実際に荒らされたら Turnstile を足す。
// ============================================================

interface Env {
  SLACK_WEBHOOK_URL?: string;
  /** 控えの受け口（Google Apps Script の Web アプリ URL）。未設定なら控えは送らない */
  BACKUP_WEBHOOK_URL?: string;
  /** 上の受け口に付ける合言葉。Apps Script 側のスクリプトプロパティ SECRET と同じ値 */
  BACKUP_TOKEN?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

/** フォームのプルダウンと必ず一致させること */
const CATEGORIES = [
  "メンバーとして参加したい",
  "スポンサー・協業のご相談",
  "取材・メディア",
  "その他",
] as const;

const LIMITS = {
  name: 100,
  email: 200,
  affiliation: 200,
  message: 4000,
} as const;

/** 要件の最低文字数。Kei 指定 */
const MESSAGE_MIN = 50;

/** bot が即座に送信してくるのを弾く閾値 */
const MIN_ELAPSED_MS = 3000;

const ALLOWED_ORIGINS = [
  "https://syncbuds.jp",
  "https://www.syncbuds.jp",
  "http://localhost:3000",
  "http://localhost:8788",
];

/** 絵文字や結合文字を1文字として数える（[...str] だと結合絵文字がずれるため） */
function charCount(value: string): number {
  return [...new Intl.Segmenter("ja", { granularity: "grapheme" }).segment(value)].length;
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

type Errors = Record<string, string>;

function validate(input: Record<string, unknown>): { errors: Errors; clean: Record<string, string> } {
  const errors: Errors = {};
  const get = (k: string) => (typeof input[k] === "string" ? (input[k] as string).trim() : "");

  const name = get("name");
  const email = get("email");
  const category = get("category");
  const affiliation = get("affiliation");
  const message = get("message");

  if (!name) errors.name = "お名前を入力してください。";
  else if (charCount(name) > LIMITS.name) errors.name = `お名前は${LIMITS.name}文字以内で入力してください。`;

  if (!email) errors.email = "メールアドレスを入力してください。";
  else if (email.length > LIMITS.email) errors.email = "メールアドレスが長すぎます。";
  // 厳密な RFC 準拠は狙わない。明らかな誤りだけ弾く。
  else if (!/^[^\s@]+@[^\s@.]+\.[^\s@]+$/.test(email)) errors.email = "メールアドレスの形式を確認してください。";

  if (!category) errors.category = "カテゴリを選択してください。";
  else if (!(CATEGORIES as readonly string[]).includes(category)) errors.category = "カテゴリの値が不正です。";

  if (affiliation && charCount(affiliation) > LIMITS.affiliation) {
    errors.affiliation = `ご所属は${LIMITS.affiliation}文字以内で入力してください。`;
  }

  const messageLen = charCount(message);
  if (!message) errors.message = "ご要件を入力してください。";
  else if (messageLen < MESSAGE_MIN) errors.message = `ご要件は${MESSAGE_MIN}文字以上で入力してください（現在${messageLen}文字）。`;
  else if (messageLen > LIMITS.message) errors.message = `ご要件は${LIMITS.message}文字以内で入力してください。`;

  return { errors, clean: { name, email, category, affiliation, message } };
}

// Slack Workflow Builder の Webhook トリガーへ渡す変数名。
// Workflow Builder 側の「変数を追加」で、この5つを完全一致（大小文字・スペルとも）で
// 作成すること。ここが一致していないと、Slack 側は 200 を返すのに変数が空欄で届く
// （エラーにならないので気づきにくい）。
function slackWorkflowPayload(c: Record<string, string>, meta: { country: string; userAgent: string }) {
  return {
    name: c.name,
    email: c.email,
    category: c.category,
    affiliation: c.affiliation || "（未記入）",
    // Workflow Builder のメッセージステップ内で参照しやすいよう、
    // ご要件と付帯情報（返信先・国・UA）を1つの変数にまとめておく。
    message: `${c.message}\n\n---\n返信先: ${c.email} ／ ${meta.country} ／ ${meta.userAgent.slice(0, 80)}`,
  };
}

/** Slack Workflow へ通知する。届いたら true */
async function notifySlack(
  env: Env,
  clean: Record<string, string>,
  meta: { country: string; userAgent: string },
): Promise<boolean> {
  if (!env.SLACK_WEBHOOK_URL) return false;
  try {
    const res = await fetch(env.SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackWorkflowPayload(clean, meta)),
    });
    if (!res.ok) {
      console.error("Slack への通知に失敗", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("Slack への通知に失敗", err);
    return false;
  }
}

/**
 * 控えを Google Apps Script へ送る（contact@syncbuds.ca へのメールとスプレッドシート記録）。
 * Slack が壊れていても問い合わせが残るようにするための二重化。
 * Apps Script は 302 で結果を返すので redirect: "follow" にする（実行は 302 の前に済んでいる）。
 */
async function sendBackup(
  env: Env,
  clean: Record<string, string>,
  meta: { country: string; userAgent: string },
): Promise<boolean> {
  if (!env.BACKUP_WEBHOOK_URL || !env.BACKUP_TOKEN) return false;
  try {
    const res = await fetch(env.BACKUP_WEBHOOK_URL, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        token: env.BACKUP_TOKEN,
        site: "syncbuds.jp",
        ...clean,
        country: meta.country,
        userAgent: meta.userAgent.slice(0, 200),
        receivedAt: new Date().toISOString(),
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
    if (!res.ok || data.ok !== true) {
      console.error("控えの送信に失敗", res.status, JSON.stringify(data));
      return false;
    }
    return true;
  } catch (err) {
    console.error("控えの送信に失敗", err);
    return false;
  }
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  // --- Origin チェック（他サイトに埋め込まれたフォームからの投稿を弾く） ---
  const origin = request.headers.get("Origin");
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return json({ ok: false, error: "invalid_origin" }, 403);
  }

  let input: Record<string, unknown>;
  try {
    input = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // --- honeypot: 人間には見えない欄。埋まっていたら bot ---
  // 攻撃者に検知を悟らせないため、成功したふりをして 200 を返す。
  if (typeof input.company === "string" && input.company.trim() !== "") {
    return json({ ok: true }, 200);
  }

  // --- 最短入力時間 ---
  const elapsed = Number(input.elapsedMs);
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_ELAPSED_MS) {
    return json({ ok: true }, 200);
  }

  const { errors, clean } = validate(input);
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, errors }, 422);
  }

  const canBackup = Boolean(env.BACKUP_WEBHOOK_URL && env.BACKUP_TOKEN);
  if (!env.SLACK_WEBHOOK_URL && !canBackup) {
    // 設定漏れを送信者のせいにしない。ログに出して、本人にはメール導線を案内する。
    console.error("SLACK_WEBHOOK_URL も BACKUP_WEBHOOK_URL/BACKUP_TOKEN も未設定のため通知できませんでした");
    return json({ ok: false, error: "not_configured" }, 503);
  }

  const meta = {
    country: request.headers.get("CF-IPCountry") || "不明",
    userAgent: request.headers.get("User-Agent") || "不明",
  };

  // Slack と控え（メール＋スプレッドシート）は並行して送る。
  // どちらか片方でも届いていれば、送信者にはエラーを見せない（問い合わせを失わないため）。
  const [slackOk, backupOk] = await Promise.all([
    notifySlack(env, clean, meta),
    sendBackup(env, clean, meta),
  ]);

  if (!slackOk && !backupOk) {
    return json({ ok: false, error: "notify_failed" }, 502);
  }

  return json({ ok: true }, 200);
};

/** POST 以外は受けない */
export const onRequest = async ({ request }: PagesContext): Promise<Response> => {
  if (request.method === "POST") {
    // onRequestPost が優先されるためここには来ないが、念のため
    return json({ ok: false, error: "unhandled" }, 500);
  }
  return json({ ok: false, error: "method_not_allowed" }, 405);
};
