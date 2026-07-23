import Link from "next/link";
import { posts } from "@/data/posts";

export default function ReportsPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section className="py-[var(--spacing-section-lg)] bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs text-sub uppercase tracking-[0.2em] mb-4 font-sans">
              Reports
            </p>
            <h2 className="text-section-title text-text">最新レポート</h2>
          </div>
          <Link
            href="/reports"
            className="text-sm text-sub hover:text-text transition-colors underline underline-offset-4 self-start md:self-auto"
          >
            すべてのレポート →
          </Link>
        </div>

        <ul className="divide-y divide-border">
          {latest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/reports/${post.slug}`}
                className="group py-8 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 hover:opacity-80 transition-opacity"
              >
                <span className="text-xs text-sub px-3 py-1 rounded-full border border-border sm:w-36 text-center flex-shrink-0">
                  {post.category}
                </span>
                <span className="font-sans text-xl text-text group-hover:underline underline-offset-4 flex-1">
                  {post.title}
                </span>
                <time className="text-xs text-sub flex-shrink-0">{post.date}</time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
