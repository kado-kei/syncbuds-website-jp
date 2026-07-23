import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SyncBuds",
  description: "SyncBudsへのお問い合わせ・スポンサー・パートナーシップのご相談。",
};

const channels = [
  {
    label: "メンバーとして参加したい",
    desc: "海外挑戦する仲間として、運営に参加したい方へ。",
    cta: "応募する",
    href: "/join",
    internal: true,
  },
  {
    label: "スポンサー・協業のご相談",
    desc: "PR案件・スポンサーシップ・パートナーシップについて。",
    cta: "メールする",
    href: "mailto:keikadowaki@syncbuds.ca?subject=【SyncBuds】スポンサー・協業のご相談",
  },
  {
    label: "取材・メディア",
    desc: "取材・掲載のご依頼はこちらから。",
    cta: "メールする",
    href: "mailto:keikadowaki@syncbuds.ca?subject=【SyncBuds】取材・メディアのご依頼",
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/syncbuds.ca" },
  { label: "LinkedIn", href: "https://linkedin.com/company/syncbuds" },
  { label: "X (Twitter)", href: "https://x.com/syncbuds_ca" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-44 pb-40">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
            Contact
          </p>
          <h1 className="text-page-title text-text mb-10">
            Say hello.
          </h1>
          <p className="text-sub text-xl leading-relaxed mb-20">
            参加したい方も、一緒に何かをつくりたい方も。
            まずは気軽に声をかけてください。
          </p>

          <div className="space-y-5 mb-28">
            {channels.map((c) => (
              <div
                key={c.label}
                className="bg-surface rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between"
              >
                <div>
                  <h2 className="font-sans text-xl font-bold text-text mb-2">{c.label}</h2>
                  <p className="text-sub text-base leading-relaxed">{c.desc}</p>
                </div>
                {c.internal ? (
                  <Link href={c.href} className="btn-primary !py-3 !px-6 !text-sm whitespace-nowrap">
                    {c.cta} <span>→</span>
                  </Link>
                ) : (
                  <a href={c.href} className="btn-outline !py-3 !px-6 !text-sm whitespace-nowrap">
                    {c.cta} <span>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-16 mb-20">
            <p className="text-xs text-sub uppercase tracking-[0.2em] mb-4 font-sans">
              Email
            </p>
            <a
              href="mailto:keikadowaki@syncbuds.ca"
              className="text-sub-heading text-text hover:text-sub transition-colors"
            >
              keikadowaki@syncbuds.ca
            </a>
          </div>

          <div className="border-t border-border pt-16">
            <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
              Follow
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-text hover:text-sub transition-colors underline underline-offset-4"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
