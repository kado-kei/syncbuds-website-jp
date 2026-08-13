<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# デプロイ先は Cloudflare Pages

`main` に push すると自動でビルドされ、syncbuds.jp に出る。ビルドで使う Node は `.node-version` に固定してある。

**この値を、手元の `node -v` と違うメジャーバージョンにしないこと。** npm のメジャーバージョンがズレると、片方が書いた `package-lock.json` をもう片方が「package.json と同期していない」と判断し、`npm ci` が落ちてデプロイできなくなる（2026年8月に実際に起きた）。Node を上げるときは、手元も同じバージョンに上げてから `package-lock.json` を作り直す。

`functions/` は Pages Functions として動く。Next の静的書き出し（`out/`）とは別枠なので、`output: "export"` のままサーバー処理を置ける。詳細は `functions/README.md`。
