import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | SyncBuds",
  description: "SyncBudsとの共催・スポンサーシップ・パートナーシップについて。",
};

const challenges = [
  {
    title: "情報格差",
    description:
      "渡航前から現地に至るまで、信頼できる情報にアクセスできず、不正確な情報や搾取的なサービスに巻き込まれる若者がいます。",
  },
  {
    title: "孤立",
    description:
      "異国で頼れる仲間やメンターがいない環境で、挑戦を続けることが難しくなり、早期帰国や目標の断念につながっています。",
  },
  {
    title: "機会の不平等",
    description:
      "経済力・語学力・ネットワークの差によって、実践経験を積む場やキャリア接続の機会を得られない若者がいます。",
  },
];

const partnerTypes = [
  {
    title: "共催イベント",
    description:
      "キャリアセミナー・ワークショップ・交流イベントを共同で企画・開催。厳選された若者との直接的な接点を持てます。",
  },
  {
    title: "スポンサーシップ / PR",
    description:
      "メディア（Instagram / Web / note）を通じた採用広報・ブランド認知。120+のコミュニティと信頼関係のある日本人コミュニティへのリーチを提供。",
  },
  {
    title: "採用連携",
    description:
      "海外経験を持つ若手人材との接点。Co-op・インターン・新卒採用に向けた連携。Ryugaku+を通じた採用パイプライン構築が可能です。",
  },
];

const merits = [
  "現在120名以上、2年で1,000名以上へ拡大予定の確実な優秀人材パイプライン",
  "現地日本人向けメディア「バンクーバーおすすめ」との連携による採用広報",
  "CSR・社会貢献文脈での発信素材の提供（情報格差解決への貢献）",
  "若者のリアルな声・ストーリーを活用したオーセンティックなコンテンツ制作",
  "バンクーバー在住の日本人コミュニティとの深い信頼関係・ブランド安心感",
  "Ryugaku+プロダクトの発展に関わる影響力：今の選択が数千人の未来を変える",
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-44 pb-40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
            Partners
          </p>
          <h1 className="text-page-title text-text mb-10">
            3,000+の日本人が
            <br />
            毎年、バンクーバーへ。
          </h1>
          <p className="text-sub text-xl leading-relaxed mb-28 max-w-xl">
            多くが情報格差に直面し、搾取的なサービスに巻き込まれます。
            <span className="font-semibold">SyncBudsはその対抗策。</span>
            優秀な若者を見つけ、育成し、採用機会を創出するプラットフォーム。
          </p>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              The Challenge
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              SyncBudsが取り組む課題
            </h3>
            <div className="space-y-6">
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className="bg-surface rounded-2xl p-8"
                >
                  <h4 className="font-sans text-xl font-bold text-text mb-3">{c.title}</h4>
                  <p className="text-sub text-base leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Partnership Models
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              協業・スポンサーの形
            </h3>
            <div className="space-y-10">
              {partnerTypes.map((p, i) => (
                <div key={p.title} className="flex gap-8 items-start">
                  <span className="font-sans text-3xl text-text font-extralight w-10 flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-sans text-xl font-bold text-text mb-2">{p.title}</h4>
                    <p className="text-sub text-base leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Track Record
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              過去の共催・協力実績
            </h3>
            <div className="bg-surface rounded-2xl p-8">
              <h4 className="font-sans text-xl font-bold text-text mb-3">
                Robert Walters × SyncBuds キャリアセミナー
              </h4>
              <p className="text-sub text-base leading-relaxed">
                グローバル人材紹介企業Robert Waltersと共催したキャリアセミナー。
                バンクーバー在住の若手日本人を対象に、海外経験を活かしたキャリア設計について議論。
                参加者に直接的なキャリア接続の機会を提供しました。
              </p>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Ryugaku+ Platform
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              スケーリングプロダクト
            </h3>
            <div className="bg-surface rounded-2xl p-8">
              <p className="text-sub text-base leading-relaxed mb-4">
                Ryugaku+は、海外の日本人を搾取的なエージェントから守り、優秀な若者と企業を直結させるプラットフォームです。
              </p>
              <p className="text-sub text-base leading-relaxed">
                パートナー企業は、採用連携を通じてこのプロダクトの構築に関わることができます。
                今から関わることで、数年後の1,000s+のネットワークに影響力を持ちます。
              </p>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Why Partner With Us
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              パートナーのメリット
            </h3>
            <ul className="space-y-5">
              {merits.map((m) => (
                <li key={m} className="flex gap-4 items-start text-text/85 text-lg leading-relaxed">
                  <span className="text-sub mt-1.5 flex-shrink-0">—</span>
                  {m}
                </li>
              ))}
            </ul>
          </section>

          <section className="pt-16 border-t border-border text-center">
            <h3 className="font-sans text-3xl font-bold text-text mb-6">
              一緒に、次世代を支えませんか。
            </h3>
            <p className="text-sub text-lg mb-12 leading-relaxed">
              スポンサーシップ・共催・採用連携について。
              カナダで最も急成長中の日本人タレントセグメントにリーチする、その方法を一緒に考えましょう。
            </p>
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-5">
              お問い合わせ <span>→</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
