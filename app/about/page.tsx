import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SyncBuds",
  description: "SyncBudsのミッション・ビジョン・8つの原則・運営体制について。",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-44 pb-40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">About</p>
          <h1 className="text-page-title text-text mb-10">
            挑戦の連鎖を、
            <br />
            作り続ける。
          </h1>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-8 font-sans">
              SyncBudsとは
            </h2>
            <div className="space-y-6 text-text/85 text-lg md:text-xl leading-relaxed">
              <p>
                バンクーバー発。海外で挑戦する日本の若者が、情報格差や孤立に苦しまずに済むように。
                <span className="font-semibold">Impact-driven talentをエンパワーするコミュニティ</span>です。
              </p>
              <p>
                留学生・Co-op生・若手社会人が、メディア運営・イベント企画・Web制作・営業など
                実践プロジェクトを通じてスキルを磨き、キャリアにつなげています。
              </p>
              <p>
                受け取る側ではなく、自ら動く側に立つ。その姿勢を持つすべての人に、実践機会と仲間を届けます。
              </p>
            </div>
          </section>

          <section className="mb-28 py-20 border-t border-b border-border">
            <div className="space-y-16 text-center">
              <div>
                <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
                  Mission
                </p>
                <p className="text-sub-heading text-text leading-tight">
                  挑戦に伴走し、
                  <br />
                  挑戦機会を生み出し続ける。
                </p>
              </div>
              <div className="w-px h-16 bg-border mx-auto" />
              <div>
                <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
                  Vision
                </p>
                <p className="text-sub-heading text-text leading-tight">
                  挑戦者を生み出す
                  <br />
                  永久機関をつくる。
                </p>
              </div>
            </div>
            <div className="mt-16 text-center max-w-2xl mx-auto">
              <p className="text-base text-sub leading-relaxed mb-6">
                一回限りの支援ではなく、永続する仕組みを作ること。
                それが私たちの使命であり、どんな判断に迷っても戻る場所。
              </p>
              <p className="text-sm text-sub/80">
                正しい場所に、正しい価値を届ける。優秀なタレントと機会を、情報格差のない世界へ。
              </p>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-8 font-sans">
              Founder
            </h2>

            <div className="relative aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden bg-surface mb-12">
              <Image
                src="/images/founder/kei-portrait.png"
                alt="Kei Kadowaki — Founder"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>

            <div className="text-center mb-12">
              <h3 className="text-sub-heading text-text mb-2">
                Kei Kadowaki
              </h3>
              <p className="text-base text-sub">Founder / Director</p>
            </div>

            <div className="space-y-6 text-text/85 text-lg md:text-xl leading-loose">
              <p>
                一人でバンクーバーに来た日、知ってる人は誰もいませんでした。
              </p>
              <p>
                海外で挑戦したくて来たけど、信頼できる情報がない。搾取的なサービスに巻き込まれる人も見た。
                頼れる先輩がいない。何から始めればいいかわからない。
                そういう人が一人でも減れば、という気持ちがSyncBudsの出発点です。
              </p>
              <p>
                でも今は、もっと大きいことを信じています。
                挑戦する人のエネルギーが、日本と世界を強くする。
                挑戦した人が、次の挑戦者を支える側に回る。
                その循環を作りたい。
              </p>
              <p>
                完璧じゃなくていい。失敗してもいい。
                「本気でやろうとしている」その姿勢だけ、持ってきてほしいです。
              </p>
            </div>
          </section>

          <section className="mb-28 py-16 border-t border-b border-border">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-12 font-sans text-center">
              SyncBuds in Numbers
            </h2>
            <div className="grid grid-cols-3 gap-10 text-center">
              {[
                { num: "6", label: "期生" },
                { num: "120+", label: "累計参加メンバー" },
                { num: "Vancouver", label: "拠点" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="text-stat-num text-text">{s.num}</span>
                  <p className="mt-3 text-xs text-sub tracking-[0.2em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-section-title text-text mb-6">Our Operating Principles</h2>
            <p className="text-base text-sub mb-12 max-w-2xl">
              これらは美しい理想ではなく、実際にどう動くかの約束です。
              SyncBudsを他の組織と違う場所にしているもの。
            </p>
            <ol className="space-y-10">
              {[
                ["まずは生み出す側に立つ", "受け取ることを目的にせず、自分から動き、価値を生み出す。"],
                ["選択肢は増やす、狭めない", "情報を囲い込んで特定の選択肢に誘導することは、若者の可能性を奪うことと同じ。"],
                ["情報は開く", "一人の挑戦から得た学びは、次の挑戦者のための公共財。"],
                ["全員が挑戦者", "「支援する側」と「支援される側」はいない。代表も含め、全員が挑戦者として走る。"],
                ["開拓してから、手渡す", "受け取ったまま渡すのではなく、自分が拓いた地点を積み上げてから渡す。"],
                ["機会の不平等に向き合う", "環境のせいで諦める若者を、少しずつ減らしていく。"],
                ["数より深さ", "1人の挑戦者の物語の濃さが、次の100人を呼び込む。"],
                ["本気で関わる人だけが、運営になる", "適当に続ける場所ではない。本気の人が本気でいられるために、関わり方の階層を明確にする。"],
              ].map(([title, desc], i) => (
                <li key={i} className="flex gap-8 items-start">
                  <span className="font-sans text-3xl text-text font-extralight w-10 flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-xl font-bold text-text mb-2">{title}</h3>
                    <p className="text-sub text-base leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-8 font-sans">
              Organization
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-8">運営体制</h3>
            <div className="space-y-5 text-text/85 text-lg leading-relaxed">
              <p>
                SyncBudsは、代表を含むコアメンバーと、各プロジェクトのチームメンバーで構成されています。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {[
                  { name: "Vancouver Osusume", desc: "メディアプラットフォーム＆タレント育成" },
                  { name: "Ryugaku+", desc: "就職プレイスフォーム（スケーリング事業）" },
                  { name: "Ecosystem PR", desc: "組織発信＆採用広報" },
                  { name: "Sponsors / Sales", desc: "パートナーシップ＆収益基盤" },
                  { name: "Engagement", desc: "メンバー開発＆1on1サポート" },
                ].map((team) => (
                  <div
                    key={team.name}
                    className="px-6 py-4 bg-surface rounded-xl text-base text-text"
                  >
                    <p className="font-semibold mb-2">{team.name}</p>
                    <p className="text-sm text-sub">{team.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Registration
            </h2>
            <div className="text-base text-sub leading-relaxed space-y-2">
              <p>SyncBuds Marketing Association</p>
              <p>Registered in British Columbia, Canada</p>
              <p>Vancouver, BC</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
