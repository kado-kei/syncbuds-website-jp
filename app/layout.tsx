import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "SyncBuds — 情報の壁を、ひらく。",
  description:
    "留学前・留学中・帰国後をつなぐNPO。情報アクセスの壁をなくし、海外に挑戦する日本の若者が自分で未来を選べるように。バンクーバー発、BC州登録の非営利団体。",
  openGraph: {
    title: "SyncBuds — 情報の壁を、ひらく。",
    description:
      "留学前・留学中・帰国後をつなぐNPO。情報アクセスの壁をなくし、海外に挑戦する日本の若者が自分で未来を選べるように。バンクーバー発、BC州登録の非営利団体。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
