// 数字は定義を分けて出す。「170名」が現役なのか累計なのかが伝わらないと、
// 企業側からは水増しに見える。値はすべて社内の実測値。
const stats = [
  { num: "2024", label: "年 設立", note: "カナダ・BC州登録の非営利団体" },
  { num: "170+", label: "運営参加メンバー", note: "設立からの延べ人数" },
  { num: "6,000+", label: "インスタグラムフォロワー", note: "バンクーバーおすすめ" },
];

export default function Stats() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-14 md:py-8 md:px-8 text-center"
            >
              <span className="text-stat-num text-text">{stat.num}</span>
              <span className="mt-4 text-xs text-sub font-sans tracking-[0.2em] uppercase">
                {stat.label}
              </span>
              <span className="mt-2 text-xs text-sub/60 leading-relaxed">{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
