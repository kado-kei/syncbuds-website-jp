import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
          <h1 className="text-page-title jp-fit [--chars:7] text-text mb-10">
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
                バンクーバー発。海外で挑戦する日本の若者が、情報アクセスの壁や孤立に阻まれずに済むように。
                <span className="font-semibold">自分から動く人が、動きやすくなる場所</span>をつくっています。
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
                <p className="text-sub-heading jp-fit [--chars:13] text-text leading-tight">
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
                <p className="text-sub-heading jp-fit [--chars:9] text-text leading-tight">
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
                正しい場所に、正しい価値を届ける。優秀なタレントと機会を、情報アクセスの壁がない世界へ。
              </p>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-8 font-sans">
              Founder
            </h2>

            {/* 以前はこの上にポートレートが入っていて、それに合わせて中央寄せだった。
                写真を外したので、見出しや本文と同じ左寄せに戻している。 */}
            <div className="mb-12">
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
            {/* モバイルで3列にすると「Vancouver」が列幅に収まらず横スクロールが出る。
                トップの Stats と同じく、狭い幅では縦に積む。 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {[
                { num: "6", label: "期", note: "立ち上げからの期数" },
                { num: "120+", label: "累計参加メンバー", note: "設立からの延べ人数" },
                { num: "Vancouver", label: "拠点", note: "British Columbia" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="text-stat-num text-text">{s.num}</span>
                  <p className="mt-3 text-xs text-sub tracking-[0.2em] uppercase">{s.label}</p>
                  <p className="mt-2 text-xs text-sub/60">{s.note}</p>
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
                ["本気で関わる人だけが、運営になる", "適当に続ける場所ではない。本気の人が本気でいられるために、役割と責任の範囲を明確にする。人の上下をつくるという意味ではない。"],
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
                  { name: "Vancouver Osusume", desc: "現地情報の発信と、メンバーが実践を積む場" },
                  { name: "Ryugaku+", desc: "留学生向けプラットフォームの開発・運営" },
                  { name: "Ecosystem PR", desc: "組織としての発信（X / LinkedIn / note）" },
                  { name: "Sponsors / Sales", desc: "スポンサー獲得と、活動を続けるための収益" },
                  { name: "Engagement", desc: "新メンバーのオンボーディングと1on1" },
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
            <dl className="text-base text-sub leading-relaxed grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-8 gap-y-3">
              <dt className="text-sub/70">正式名称</dt>
              <dd className="text-text/85 mb-2 sm:mb-0">SyncBuds Marketing Association</dd>

              <dt className="text-sub/70">法人格</dt>
              <dd className="text-text/85 mb-2 sm:mb-0">
                カナダ・ブリティッシュコロンビア州登録の非営利団体
              </dd>

              <dt className="text-sub/70">所在地</dt>
              <dd className="text-text/85 mb-2 sm:mb-0">Vancouver, British Columbia, Canada</dd>

              <dt className="text-sub/70">代表</dt>
              <dd className="text-text/85 mb-2 sm:mb-0">Kei Kadowaki（門脇 慶）</dd>

              <dt className="text-sub/70">活動領域</dt>
              <dd className="text-text/85 mb-2 sm:mb-0">
                現地情報メディアの運営、コミュニティイベントの企画・運営、
                留学生向けプラットフォームの開発、企業との共催・スポンサーシップ
              </dd>

              <dt className="text-sub/70">連絡先</dt>
              <dd className="text-text/85">
                <a
                  href="mailto:keikadowaki@syncbuds.ca"
                  className="underline underline-offset-4 hover:text-text transition-colors"
                >
                  keikadowaki@syncbuds.ca
                </a>
              </dd>
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
