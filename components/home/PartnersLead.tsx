import Link from "next/link";

export default function PartnersLead() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-surface">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
          For Partners
        </p>
        <h2 className="text-section-title text-text mb-8">
          企業・団体の皆さまへ
        </h2>
        <p className="text-sub text-lg md:text-xl leading-relaxed mb-14 max-w-xl mx-auto">
          SyncBudsは、海外で挑戦する日本の若者を支えるコミュニティです。
          共催・スポンサーシップ・採用広報を通じて、次世代人材と接点を持ちませんか。
        </p>
        <Link href="/partners" className="btn-outline text-lg !px-10 !py-5">
          Partner With Us <span>→</span>
        </Link>
      </div>
    </section>
  );
}
