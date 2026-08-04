"use client";

import { useEffect, useRef, useState } from "react";

/** functions/api/contact.ts の CATEGORIES と必ず一致させること */
const CATEGORIES = [
  "メンバーとして参加したい",
  "スポンサー・協業のご相談",
  "取材・メディア",
  "その他",
] as const;

/** /contact?type=join のように、リンク元からカテゴリを指定できる */
const TYPE_TO_CATEGORY: Record<string, (typeof CATEGORIES)[number]> = {
  join: "メンバーとして参加したい",
  partner: "スポンサー・協業のご相談",
  media: "取材・メディア",
};

const MESSAGE_MIN = 50;

type Errors = Partial<Record<"name" | "email" | "category" | "affiliation" | "message", string>>;
type Status = "idle" | "sending" | "done" | "error";

/** サーバ側と同じ数え方（絵文字を1文字として数える） */
function charCount(value: string): number {
  return [...new Intl.Segmenter("ja", { granularity: "grapheme" }).segment(value)].length;
}

const fieldClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-text " +
  "placeholder:text-sub/50 transition-colors " +
  "focus:border-text focus:outline-none focus:ring-2 focus:ring-text/10";

export default function ContactForm() {
  const [category, setCategory] = useState<string>("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failureNote, setFailureNote] = useState("");

  // bot 対策: フォームが表示されてからの経過時間をサーバへ送る
  const mountedAt = useRef<number>(0);
  const errorSummaryRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
    const type = new URLSearchParams(window.location.search).get("type");
    if (type && TYPE_TO_CATEGORY[type]) setCategory(TYPE_TO_CATEGORY[type]);
  }, []);

  const messageLen = charCount(message);
  const remaining = MESSAGE_MIN - messageLen;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      category: String(fd.get("category") ?? ""),
      affiliation: String(fd.get("affiliation") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""), // honeypot
      elapsedMs: Date.now() - mountedAt.current,
    };

    setStatus("sending");
    setErrors({});
    setFailureNote("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: Errors };

      if (res.ok && data.ok) {
        setStatus("done");
        return;
      }

      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        // 入力エラーは読み上げ・フォーカスの対象にする
        requestAnimationFrame(() => errorSummaryRef.current?.focus());
        return;
      }

      setStatus("error");
      setFailureNote(
        res.status === 503
          ? "送信先の設定がまだ完了していません。お手数ですが下記のメールアドレス宛にご連絡ください。"
          : "送信に失敗しました。時間をおいて再度お試しいただくか、下記のメールアドレス宛にご連絡ください。",
      );
    } catch {
      setStatus("error");
      setFailureNote(
        "通信に失敗しました。ネットワークをご確認のうえ、再度お試しください。",
      );
    }
  }

  if (status === "done") {
    return (
      <div
        className="bg-surface rounded-2xl p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <h2 className="font-sans text-2xl font-bold text-text mb-4">
          送信しました
        </h2>
        <p className="text-sub text-base leading-relaxed">
          内容を確認のうえ、ご記入のメールアドレス宛にご返信します。
          <br />
          数日たっても返信がない場合は、お手数ですが直接メールをお送りください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" && (
        <p
          className="rounded-xl border border-border bg-surface px-5 py-4 text-base text-text"
          role="alert"
        >
          {failureNote}
        </p>
      )}

      {Object.keys(errors).length > 0 && (
        <p
          ref={errorSummaryRef}
          tabIndex={-1}
          className="rounded-xl border border-border bg-surface px-5 py-4 text-base text-text focus:outline-none focus:ring-2 focus:ring-text/10"
          role="alert"
        >
          入力内容をご確認ください。
        </p>
      )}

      <Field label="お名前" htmlFor="name" required error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          className={fieldClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      <Field label="メールアドレス" htmlFor="email" required error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          inputMode="email"
          className={fieldClass}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </Field>

      <Field label="カテゴリ" htmlFor="category" required error={errors.category}>
        <select
          id="category"
          name="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`${fieldClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            // 依存を増やさずに矢印を出す（インラインSVGのdata URI）
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%235F5A6B' stroke-width='1.5'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")",
          }}
          aria-invalid={!!errors.category}
          aria-describedby={errors.category ? "category-error" : undefined}
        >
          <option value="">選択してください</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="ご所属" htmlFor="affiliation" error={errors.affiliation} hint="任意">
        <input
          id="affiliation"
          name="affiliation"
          type="text"
          maxLength={200}
          className={fieldClass}
          placeholder="学校名・会社名など"
          aria-invalid={!!errors.affiliation}
          aria-describedby={errors.affiliation ? "affiliation-error" : undefined}
        />
      </Field>

      <Field
        label="ご要件"
        htmlFor="message"
        required
        error={errors.message}
        hint={`${MESSAGE_MIN}文字以上`}
      >
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={4000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y leading-relaxed`}
          placeholder="どんなご相談か、背景も含めて教えてください。詳しいほど、こちらから返せる内容が具体的になります。"
          aria-invalid={!!errors.message}
          aria-describedby={`message-count${errors.message ? " message-error" : ""}`}
        />
        <p
          id="message-count"
          className={`mt-2 text-xs ${remaining > 0 ? "text-sub" : "text-sub/60"}`}
          aria-live="polite"
        >
          {remaining > 0 ? `あと${remaining}文字` : `${messageLen}文字`}
        </p>
      </Field>

      {/* honeypot: 人間には見えない。bot が埋めたら送信を破棄する */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0 -z-10">
        <label htmlFor="company">この欄は入力しないでください</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary text-lg !px-10 !py-4 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "送信中…" : "送信する"}
          {status !== "sending" && <span>→</span>}
        </button>
        <p className="mt-4 text-xs text-sub/70 leading-relaxed">
          いただいた内容は、ご返信とご相談への対応のみに使用します。
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-2">
        <label htmlFor={htmlFor} className="font-sans text-sm font-bold text-text">
          {label}
        </label>
        {required ? (
          <span className="text-xs text-sub/70">必須</span>
        ) : (
          hint && <span className="text-xs text-sub/70">{hint}</span>
        )}
        {required && hint && <span className="text-xs text-sub/70">{hint}</span>}
      </div>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-text">
          {error}
        </p>
      )}
    </div>
  );
}
