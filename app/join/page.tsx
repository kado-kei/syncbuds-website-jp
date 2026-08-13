import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import WatercolorAccent from "@/components/graphics/WatercolorAccent";

export const metadata: Metadata = {
  title: "Join Us | SyncBuds",
  description: "SyncBudsのメンバーとして参加する方法。未経験OK、英語力不問。",
};

const teams = [
  {
    name: "Vancouver Osusume IG",
    desc: "Instagramで現地情報を発信。写真・動画・コンテンツ制作のスキルが身につく。",
    impact: "来たばかりの人が、最初の一歩を踏み出すきっかけをつくる。",
  },
  {
    name: "Vancouver Osusume WEB",
    desc: "公式サイトの企画・制作・運用。Web制作・デザインの実践経験を積める。",
    impact: "信頼できる情報に、誰でもたどり着ける場所をつくる。",
  },
  {
    name: "Engagement",
    desc: "イベント企画・コミュニティ運営・新メンバーのオンボーディング。人をつなぐ役割。",
    impact: "新しく入った人が、ひとりで悩まずに始められる状態をつくる。",
  },
  {
    name: "Sponsors / Sales",
    desc: "スポンサー企業との連携・営業。ビジネス開発・商談の実践ができる。",
    impact: "活動を続けられるだけの収益をつくり、次の期に手渡す。",
  },
  {
    name: "Ryugaku+",
    desc: "留学生向けプラットフォームの開発・運営。エンジニアリング・プロダクト開発に参加。",
    impact: "情報がないせいで損をする人を、ひとりずつ減らしていく。",
  },
];

const benefits = [
  {
    title: "実践経験",
    desc: "授業やインターンではなく、リアルなプロジェクトでスキルを磨く。",
    meta: "Web・コンテンツ・ビジネス開発のスキル獲得",
  },
  {
    title: "つくる側に立つ経験",
    desc: "支援する / されるの関係ではなく、対等な作り手として動く。",
    meta: "原則4「全員が挑戦者」",
  },
  {
    title: "次に渡していく関係",
    desc: "前の期のメンバーが今のメンバーを支えている。あなたも次の期に手渡す側になる。",
    meta: "帰国したあとも、つながりは続く",
  },
];

const faqs = [
  {
    q: "未経験でも参加できますか？",
    a: "はい。ほとんどのメンバーが未経験から始めています。大切なのはスキルではなく、本気で取り組む姿勢です。",
  },
  {
    q: "英語力はどのくらい必要ですか？",
    a: "特別な英語力は必要ありません。チーム内は日本語がメインです。英語力を伸ばしたい方も歓迎です。",
  },
  {
    q: "Co-op前や渡航前でも参加できますか？",
    a: "はい。渡航前からオンラインで参加しているメンバーもいます。日本にいながらでも活動を始められます。",
  },
  {
    q: "どのくらいの時間が必要ですか？",
    a: "週5〜10時間程度が目安です。フルタイムの仕事や学業と両立しているメンバーが大半です。",
  },
  {
    q: "途中から参加しても大丈夫ですか？",
    a: "はい。期の途中からの参加も可能です。オンボーディングでしっかりサポートします。",
  },
  {
    q: "他のコミュニティと何が違いますか？",
    a: "私たちは「支援する側」「支援される側」という階層を作りません。全員が対等な作り手です。用意されたものを受け取るのではなく、一緒に次の機会をつくる側に立ちます。",
  },
  {
    q: "SyncBuds卒業後はどうなりますか？",
    a: "つながりは続きます。前の期のメンバーが、今の期のメンバーの相談に乗っています。卒業したあとも、次の期に何かを手渡す側でいられる。それが私たちのモデルです。",
  },
];

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="pt-44 pb-40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">Join</p>
          <h1 className="text-page-title jp-fit [--chars:12] text-text mb-10">
            機会の差を、埋めていく。
            <br />
            次に続く人の道をつくる。
          </h1>
          <p className="text-sub text-xl leading-relaxed mb-28">
            誰かに用意された機会を受け取るのではなく、仲間と一緒に次の機会をつくる側に立ちます。
            <br />
            完璧じゃなくていい。失敗してもいい。
            「本気でやろうとしている」その姿勢だけ、持ってきてください。
          </p>

          <section className="relative mb-28 overflow-hidden">
            <WatercolorAccent
              color="blue"
              variant="wash"
              opacity={0.03}
              className="absolute -top-20 -right-28 w-[350px] h-[350px]"
            />
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans relative">
              Who We Welcome
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-8 relative">
              こんな人を歓迎しています
            </h3>
            <ul className="space-y-4 relative">
              {[
                "海外で何かに挑戦したい人",
                "スキルを実践で身につけたい人",
                "同じ志を持つ仲間とつながりたい人",
                "未経験だけど、本気で取り組みたい人",
                "帰国後のキャリアに活かせる経験を積みたい人",
                "社会的インパクトを重視する人（本気度は必須）",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start text-text/85 text-lg leading-relaxed">
                  <span className="text-sub mt-1 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Teams
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              参加できるチーム
            </h3>
            <div className="space-y-5">
              {teams.map((t) => (
                <div
                  key={t.name}
                  className="bg-surface rounded-2xl p-8"
                >
                  <h4 className="font-sans text-xl font-bold text-text mb-2">{t.name}</h4>
                  <p className="text-sub text-base leading-relaxed mb-4">{t.desc}</p>
                  <p className="text-sm text-text/70 italic border-l-2 border-text/30 pl-4">
                    {t.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mb-28 overflow-hidden">
            <WatercolorAccent
              color="magenta"
              variant="splash"
              opacity={0.035}
              className="absolute -bottom-16 -left-20 w-[240px] h-[240px]"
            />
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans relative">
              What You Gain
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10 relative">
              SyncBudsで得られる経験
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
              {benefits.map((b) => (
                <div key={b.title}>
                  <h4 className="font-sans text-xl font-bold text-text mb-3">{b.title}</h4>
                  <p className="text-sub text-base leading-relaxed mb-3">{b.desc}</p>
                  <p className="text-xs text-sub/70 uppercase tracking-[0.15em]">{b.meta}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Commitment
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-8">
              活動頻度・参加条件
            </h3>
            <div className="space-y-5 text-text/85 text-lg leading-relaxed">
              <p>週5〜10時間程度の活動を想定しています。フルタイムの仕事・学業との両立が可能です。</p>
              <p>特別なスキルや経験は不要。<span className="font-semibold">本気で取り組む意欲</span>があれば、どなたでも歓迎します。</p>
              <p>ただし、私たちは慎重です。ミッション・価値観・コミットメントについて、実務テストと面接で確認させてください。</p>
              <p>活動期間は原則1期（約6ヶ月）。継続参加も可能です。</p>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              How to Join
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              参加までの流れ
            </h3>
            <div className="space-y-10">
              {[
                { step: "01", title: "応募フォームを提出", desc: "なぜ SyncBuds か、何をやりたいのか、教えてください。3〜5分で完了します。" },
                { step: "02", title: "1次面接（オンライン）", desc: "ミッション・価値観・コミットメント。SyncBuds への適合度を確認します。実務テストもあります。" },
                { step: "03", title: "チームオンボーディング", desc: "チームに合流。小さく始めて、少しずつ任される範囲を広げていきます。" },
              ].map((s) => (
                <div key={s.step} className="flex gap-8 items-start">
                  <span className="font-sans text-4xl text-text font-extralight w-12 flex-shrink-0">{s.step}</span>
                  <div>
                    <h4 className="font-sans text-xl font-bold text-text mb-2">{s.title}</h4>
                    <p className="text-sub text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              FAQ
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              よくある質問
            </h3>
            <div className="divide-y divide-border">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-8">
                  <h4 className="font-sans text-lg font-bold text-text mb-3">{faq.q}</h4>
                  <p className="text-sub text-base leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center pt-16 border-t border-border">
            <h3 className="text-section-title jp-fit [--chars:10] text-text mb-6">
              ここから、始めよう。
            </h3>
            <p className="text-sub text-lg mb-12 leading-relaxed">
              まずは話を聞くだけでも大丈夫です。
              <br />
              本気で関わる準備ができたら、ここから始めましょう。
            </p>
            {/* カテゴリを「メンバーとして参加したい」で開く */}
            <Link href="/contact?type=join#form" className="btn-primary text-xl !px-12 !py-6">
              応募する <span className="text-xl">→</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
