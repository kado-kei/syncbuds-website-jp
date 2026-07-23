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
  title: "SyncBuds — 海外で挑戦する若者に、実践機会と仲間を届ける。",
  description:
    "バンクーバー発。留学生・Co-op生・若手社会人が、実践を通じて成長するコミュニティ。Registered in British Columbia.",
  openGraph: {
    title: "SyncBuds — 海外で挑戦する若者に、実践機会と仲間を届ける。",
    description:
      "バンクーバー発。留学生・Co-op生・若手社会人が、実践を通じて成長するコミュニティ。Registered in British Columbia.",
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
