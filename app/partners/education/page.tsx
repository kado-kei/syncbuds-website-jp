import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Partners | SyncBuds",
  description:
    "留学・教育機関の皆さまへ。留学生の挑戦に、学校の外側から伴走するSyncBudsとの協力について。",
};

// 渡航前から帰国前後まで。学校は全体を支え、SyncBudsは目的の設計から現地での伴走を外側から担う。
const stages = [
  {
    label: "渡航前",
    description: "現地の留学生のリアルな声を、渡航前の方にも届けます。",
  },
  {
    label: "到着直後",
    description: "「何のために来たのか」を言葉にする場をつくります。",
  },
  {
    label: "現地での挑戦",
    description: "仲間や先輩とつながり、動き出した挑戦を続けられるようにします。",
  },
  {
    label: "帰国前後",
    description: "経験を次のキャリアへ、そして次の留学生へつなげます。",
  },
];

const strengths = [
  {
    title: "在籍校を問わない",
    description:
      "どの学校の留学生も同じ場に参加できます。学校を越えて、情報や経験を交換できます。",
  },
  {
    title: "運営が留学生自身",
    description:
      "運営は留学生自身です。同じ立場だから話せることがあります。",
  },
  {
    title: "留学が終わっても続く",
    description:
      "留学が終わったあとも、運営や先輩として関わり続けられる場をつくっています。",
  },
];

const projects = [
  {
    title: "目的を言葉にするワークショップ",
    description:
      "渡航直後の学生向けに、先輩留学生が進行する場。「何のために来たのか」を言葉にして、最初の一歩を決めます。",
  },
  {
    title: "先輩座談会",
    description:
      "在学中の学生と先輩が、入学後の半年に何があったかを話します。他校の留学生や卒業生も交えます。",
  },
  {
    title: "学生の声レポート",
    description:
      "学生の困りごとや本音を聞き取り、個人が特定されない形でまとめて学校にお返しします。学校側のご負担は、ご協力のみです。",
  },
  {
    title: "共催のキャリアイベント",
    description:
      "留学中から、帰国後や現地でのキャリアを考える場を共同で開きます。",
  },
];

export default function EducationPartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-44 pb-40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
            <Link
              href="/partners"
              className="hover:text-text transition-colors underline underline-offset-4"
            >
              Partners
            </Link>{" "}
            / Education
          </p>
          <h1 className="text-page-title jp-fit [--chars:12] text-text mb-10">
            留学生の挑戦に、
            <br />
            学校の外側から伴走する。
          </h1>
          <p className="text-sub text-xl leading-relaxed mb-28 max-w-xl">
            SyncBudsは、カナダ・BC州に登録されたNPOです。留学生自身が運営し、
            <span className="font-semibold">目的を持って挑戦する人を増やすこと</span>
            を目指しています。学校の皆さまとは、まず気軽にお話しできる関係から始めたいと考えています。
          </p>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Our View
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              目的を決める前に、留学が終わらないように
            </h3>
            <div className="bg-surface rounded-2xl p-8">
              <p className="text-sub text-base leading-relaxed mb-4">
                留学中の時間の多くは、授業と生活で埋まります。何のために来たのかを言葉にする前に、日々に流されたまま帰国の日を迎える人がいます。
              </p>
              <p className="text-sub text-base leading-relaxed">
                SyncBudsが向き合っているのは、その手前です。目的を考える段階から、現地で動き出し、続けるところまでを、留学生同士の力で支えます。
              </p>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Phases
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              フェーズごとに、SyncBudsがすること
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {stages.map((s, i) => (
                <div key={s.label} className="bg-surface rounded-2xl p-6">
                  <p className="font-sans text-2xl text-text font-extralight mb-3">
                    {i + 1}
                  </p>
                  <h4 className="font-sans text-lg font-bold text-text mb-2">{s.label}</h4>
                  <p className="text-sub text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              What We Can Do
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">
              学校の外側にいるから、できること
            </h3>
            <div className="space-y-10">
              {strengths.map((s, i) => (
                <div key={s.title} className="flex gap-8 items-start">
                  <span className="font-sans text-3xl text-text font-extralight w-10 flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-sans text-xl font-bold text-text mb-2">{s.title}</h4>
                    <p className="text-sub text-base leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Track Record
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-10">実績</h3>
            <div className="space-y-6">
              <div className="bg-surface rounded-2xl p-8">
                <h4 className="font-sans text-xl font-bold text-text mb-3">
                  Cornerstone International Community College of Canada（CICCC）との共催イベント
                </h4>
                <p className="text-sub text-base leading-relaxed">
                  無料開催で約100名、有料開催で約80名が参加しました。
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-8">
                <h4 className="font-sans text-xl font-bold text-text mb-3">
                  Robert Walters Japan との共催セミナー（2026年6月）
                </h4>
                <p className="text-sub text-base leading-relaxed">
                  海外経験を帰国後のキャリアにどうつなげるかをテーマに、オンラインで実施しました。
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-8">
                <h4 className="font-sans text-xl font-bold text-text mb-3">
                  運営の広がり
                </h4>
                <p className="text-sub text-base leading-relaxed">
                  累計170名以上が運営メンバーとして関わってきました。運営するInstagram「バンクーバーおすすめ」のフォロワーは、約6,000人です（2026年7月時点）。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-28">
            <h2 className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Ideas
            </h2>
            <h3 className="font-sans text-3xl font-bold text-text mb-4">
              こんな形で、ご一緒できたら
            </h3>
            <p className="text-sub text-base leading-relaxed mb-10">
              形は決まっていません。学校の状況に合わせて、小さく始めるところから一緒に考えます。
            </p>
            <div className="space-y-6">
              {projects.map((p) => (
                <div key={p.title} className="bg-surface rounded-2xl p-8">
                  <h4 className="font-sans text-xl font-bold text-text mb-3">{p.title}</h4>
                  <p className="text-sub text-base leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-16 border-t border-border text-center">
            <h3 className="font-sans text-3xl font-bold text-text mb-6">
              まずは、気軽にお話しください。
            </h3>
            <p className="text-sub text-lg mb-12 leading-relaxed">
              オンラインで、気軽にお話しできれば嬉しいです。
              堅い提案の場でなくて構いません。
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
