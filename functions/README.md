# お問い合わせフォームの受け口

`functions/` は Cloudflare Pages が自動で拾うディレクトリ。Next の静的書き出し（`out/`）とは別枠で動くので、`output: "export"` のままサーバー処理を足せる。

- `functions/api/contact.ts` → `https://syncbuds.jp/api/contact`

送信内容は Slack の **Workflow Builder**（Webhook トリガー）に流している。メールもスプレッドシートも使っていない。

---

## 動かすのに必要な設定（Keiの作業）

### 1. Slack で Workflow を作る

Incoming Webhook ではなく Workflow Builder を使う（すでに Workflow Trigger の URL が発行されているため、それに合わせてコード側を作ってある）。

1. Slack で `⚡ ツール` → 「ワークフロー」→「新しいワークフローを作成」
2. トリガーを **「Webhook」** にする
3. 「変数を追加」で、次の **5つを完全一致する名前**で作る（順不同・型はすべてテキスト）
   - `name`
   - `email`
   - `category`
   - `affiliation`
   - `message`

   ここが1文字でもズレると、Slack は成功扱い（200）を返すのに変数が空欄で届く。エラーにならないので気づきにくい。

4. ステップを追加 →「メッセージを送信する」を選び、送信先チャンネルを選ぶ（`#c-application-form` が既にあるのでそこが自然）
5. メッセージ本文に、上で作った変数を挿入する。例:

   ```
   【syncbuds.jp お問い合わせ】{{category}} / {{name}}

   メール: {{email}}
   ご所属: {{affiliation}}

   {{message}}
   ```

6. ワークフローを公開（Publish）する
7. トリガーの設定画面に戻り、「Webhook URL をコピー」で `https://hooks.slack.com/triggers/...` を取得する

このURLを知っている人は誰でもこのワークフローを起動できる。GitHubにも Slack にも貼らないこと。**すでに一度チャットで共有されている場合は、そのURLは使わずトリガーを再発行すること**（Webhookトリガーの設定画面から再生成できる）。

### 2. Cloudflare Pages に環境変数として登録する

Cloudflare ダッシュボード → Workers & Pages → 該当プロジェクト → Settings → Variables and Secrets

- 変数名: `SLACK_WEBHOOK_URL`
- 値: 手順1でコピーした Workflow の Webhook URL
- 種類: **Secret**（暗号化。Plaintext にしない）
- Production と Preview の両方に入れる

**「デプロイし直す」について:** このリポジトリは GitHub 連携なので、通常は push すれば自動でビルドされる。今回のように環境変数だけを追加した場合は新しい push が無いので、自動では反映されない。反映させるには次のどちらかをやる。

- Cloudflare ダッシュボード → 対象プロジェクト → **Deployments** タブ → 一番上（最新）のデプロイの `...` メニュー → **Retry deployment**
- または、何でもいいので1行コミットして push する（変数を使い始めるこの作業自体をコミットしてもよい）

「デプロイ」ボタンを探す必要はない。Retry で十分。

### 3. 動作確認

本番の `/contact` から実際に1件送って、Slackに届くか見る。届かない場合は Cloudflare の該当デプロイの Functions ログを見る。

未設定のまま送信されると、フォームは HTTP 503 を受けて「送信先の設定がまだ完了していません」と出し、メールでの連絡を案内する。送信者に無言で失敗させない作りにしてある。

---

## 入力項目

フォーム側は `components/contact/ContactForm.tsx`。

| 項目 | 必須 | 制限 |
|---|---|---|
| お名前 | 必須 | 100文字以内 |
| メールアドレス | 必須 | 形式チェックあり |
| カテゴリ | 必須 | プルダウン（4種） |
| ご所属 | 任意 | 200文字以内 |
| ご要件 | 必須 | 50文字以上・4000文字以内 |

カテゴリの選択肢は `functions/api/contact.ts` の `CATEGORIES` と `ContactForm.tsx` の `CATEGORIES` の**両方**に定義がある。片方だけ変えるとサーバー側で弾かれるので、必ず揃えること。

`/contact?type=join` のようにクエリを付けると、カテゴリが選択済みで開く（`join` / `partner` / `media`）。Join と Partners の CTA はこれを使っている。

---

## スパム対策

今は「軽め」の構成。追加の外部サービスもトークンも要らない。

1. honeypot — 人間には見えない `company` 欄。埋まっていたら破棄する。攻撃者に気づかせないため、レスポンスは成功（200）を返す
2. 最短入力時間 — フォーム表示から3秒未満の送信は自動入力とみなして破棄する
3. Origin チェック — syncbuds.jp 以外からの投稿は 403
4. サーバー側バリデーション — 長さと形式をすべてサーバーでも検証する（クライアントだけに任せない）

実際に荒らされ始めたら、次の順で足すのが早い。

- Cloudflare ダッシュボードの WAF → Rate limiting rules で `/api/contact` に「同一IPから10分5回まで」などを設定する（コード変更なし）
- それでも足りなければ Turnstile を入れる（フォームとFunctionの両方に数行）

---

## ローカルでの動かし方

Next の dev サーバー（`npm run dev`）は Pages Functions を動かさないので、フォームのUIは見えても送信は 404 になる。送信まで通して試すには wrangler を使う。

```bash
npm run build && npx wrangler pages dev out --port 8788 --binding SLACK_WEBHOOK_URL=<テスト用のWebhook>
```

Slackを汚したくないときは、受け取った内容を表示するだけのローカルサーバーを立てて、そのURLを `--binding` に渡せばよい。Workflow Trigger は素の POST を受け取れるので、モックサーバー側の実装を変える必要はない。
