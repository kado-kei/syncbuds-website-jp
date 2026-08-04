import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-surface">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-page-title jp-fit [--chars:5] text-text mb-8">
          挑戦を、
          <br />
          始めよう。
        </h2>
        <p className="text-sub text-lg md:text-xl mb-16 leading-relaxed">
          まずは話を聞くだけでも大丈夫です。
          <br />
          一歩踏み出す準備ができたら、ここから始めましょう。
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/join" className="btn-primary text-xl !px-12 !py-6">
            Join Us <span className="text-xl">→</span>
          </Link>
          <Link href="/partners" className="btn-outline text-xl !px-12 !py-6">
            Partner With Us <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
