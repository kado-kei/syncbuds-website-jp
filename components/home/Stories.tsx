import Image from "next/image";
import Link from "next/link";
import { featuredMembers } from "@/data/members";

const stories = featuredMembers;

export default function Stories() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs text-sub uppercase tracking-[0.2em] mb-4 font-sans">
              Stories
            </p>
            <h2 className="text-section-title text-text">Our Buds</h2>
          </div>
          <Link
            href="/stories"
            className="text-sm text-sub hover:text-text transition-colors underline underline-offset-4 self-start md:self-auto"
          >
            ストーリーを見る →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.id}`}
              className="group bg-bg rounded-3xl p-10 flex flex-col gap-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-text text-lg leading-relaxed flex-1">
                &ldquo;{story.comment}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface flex-shrink-0">
                  <Image
                    src={story.photo}
                    alt={story.name}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text">{story.name}</p>
                  <p className="text-xs text-sub">{story.role}</p>
                </div>
                <span className="text-sub group-hover:text-text group-hover:translate-x-1 transition-all">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
