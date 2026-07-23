import Link from "next/link";

export default function WhatIs() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-bg">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
          What is SyncBuds
        </p>
        <h2 className="text-section-title text-text mb-10">
          SyncBudsとは
        </h2>
        <div className="space-y-6 text-text/85 text-lg md:text-xl leading-relaxed">
          <p>
            海外に挑戦する日本の若者が、情報格差や孤立に苦しまずに済むように。
          </p>
          <p>
            バンクーバーを拠点に、留学生・Co-op生・若手社会人が
            実践プロジェクトを通じてスキルを磨き、仲間とつながり、キャリアを切り拓くコミュニティです。
          </p>
          <p>
            受け取る側ではなく、自ら動く側に立つ。
            その姿勢を持つすべての人に、実践機会と仲間を届けます。
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 mt-12 text-sm text-sub hover:text-text transition-colors underline underline-offset-4"
        >
          About SyncBuds →
        </Link>
      </div>
    </section>
  );
}
