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
      "キャリアセミナー・ワークショップ・交流イベントを共同で企画・開催。海外で挑戦している若手と、直接話せる場をつくります。",
  },
  {
    title: "スポンサーシップ / PR",
    description:
      "メディア（Instagram / Web / note）を通じた採用広報・ブランド認知。バンクーバー在住の日本人コミュニティに届きます。",
  },
  {
    title: "採用連携",
    description:
      "海外経験を持つ若手人材との接点。Co-op・インターン・新卒採用に向けた連携。留学の早い段階から企業を知ってもらう導線をつくれます。",
  },
];

// 数字はすべて社内の実測値。出典は各行の括弧内に持たせている。
const merits = [
  "現地メディア「バンクーバーおすすめ」のInstagramフォロワー6,000人（2026年7月時点）へのリーチ",
  "読者構成は日本49.4%・カナダ45.4%。渡航前の層と現地の層に、同時に届く",
  "平均エンゲージメント率5.38%（Instagramの一般的な目安は1〜3%）。累計保存81,216件",
  "有償PRの実施実績あり（ANA OCS、KAGURA）。PR案件でも反応が落ちない",
  "CSR・社会貢献文脈での発信素材の提供（情報格差の解消への貢献）",
  "現地で活動している若手のリアルな声を使ったコンテンツ制作",
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
          <h1 className="text-page-title jp-fit [--chars:12] text-text mb-10">
            海外に出た日本の若者と、
            <br />
            企業をつなぐ。
          </h1>
          <p className="text-sub text-xl leading-relaxed mb-28 max-w-xl">
            海外に出た若者の多くが、信頼できる情報にたどり着けないまま最初の数ヶ月を消耗します。
            <span className="font-semibold">SyncBudsは、その手前に立つコミュニティです。</span>
            現地で活動している若手と、企業との接点をつくります。
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
                Robert Walters Japan × SyncBuds
                <br />
                オンラインキャリアセミナー「海外経験を、仕事に変える。」
              </h4>
              <p className="text-sm text-sub/80 mb-4 tracking-wide">
                2026年6月7日開催 / 参加確定16名
              </p>
              <p className="text-sub text-base leading-relaxed mb-4">
                Robert Walters Japan のグローバルキャリアコンサルタントを招き、
                海外経験を帰国後のキャリアにどうつなげるかをテーマに実施しました。
              </p>
              <p className="text-sub text-base leading-relaxed">
                参加者は社会人のワーキングホリデー層が50%、Co-op留学生と正規留学生がそれぞれ18.8%。
                申込時に最も多く挙がった悩みは「帰国後のキャリア」で、
                次いで「Co-opの就活」「英語力への不安」でした。
              </p>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Early Reach
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              留学中から、知ってもらう
            </h3>
            <div className="bg-surface rounded-2xl p-8">
              <p className="text-sub text-base leading-relaxed mb-4">
                日本企業の名前を調べ始めるのは、たいてい帰国を意識してからです。
                そこで初めて出てくる会社と、留学の途中からすでに知っている会社とでは、
                選択肢に残る確率が変わります。
              </p>
              <p className="text-sub text-base leading-relaxed">
                SyncBudsは、現地で活動している若手と日常的に接している立場から、
                その早い段階の接点をつくれます。
                イベント・メディア・コミュニティのどこから入るかは、一緒に設計します。
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
              バンクーバーで挑戦している日本の若手と、どうつながるか一緒に考えましょう。
            </p>
            <Link href="/contact?type=partner#form" className="btn-primary text-lg !px-10 !py-5">
              お問い合わせ <span>→</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
