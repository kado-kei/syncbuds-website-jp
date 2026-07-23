const stats = [
  { num: "6", label: "期生" },
  { num: "120+", label: "累計参加メンバー" },
  { num: "Vancouver", label: "拠点" },
];

export default function Stats() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-20 md:py-0 md:px-16 text-center"
            >
              <span className="text-stat-num text-text">{stat.num}</span>
              <span className="mt-4 text-xs text-sub font-sans tracking-[0.2em] uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
