import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SyncBuds",
  description: "SyncBudsへのお問い合わせ・スポンサー・パートナーシップのご相談。",
};

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
          <h1 className="text-page-title text-text mb-10">Say hello.</h1>
          <p className="text-sub text-xl leading-relaxed mb-16">
            参加したい方も、一緒に何かをつくりたい方も。
            まずは気軽に声をかけてください。
          </p>

          <section id="form" className="mb-28 scroll-mt-28">
            <ContactForm />
          </section>

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
            <p className="mt-4 text-sm text-sub leading-relaxed">
              フォームがうまく動かないときは、こちらに直接お送りください。
              メンバーとしての参加を検討中の方は、先に{" "}
              <Link
                href="/join"
                className="underline underline-offset-4 hover:text-text transition-colors"
              >
                Join
              </Link>{" "}
              のページもご覧ください。
            </p>
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
