import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 向け静的書き出し（全ページStatic）
  output: "export",
  images: {
    // 静的書き出しでは画像最適化サーバーが無いため unoptimized 必須
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
