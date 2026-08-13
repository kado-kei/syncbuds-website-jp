import WatercolorAccent from "@/components/graphics/WatercolorAccent";

const challenges = [
  {
    title: "情報格差",
    description:
      "海外に来たばかりの日本人は、信頼できる情報にアクセスしにくい。不正確な情報や搾取的なサービスに巻き込まれるリスクがある。",
    color: "blue" as const,
  },
  {
    title: "孤立",
    description:
      "異国の地で頼れる人がいない。言語・文化の壁に加え、同じ志を持つ仲間と出会う機会が限られている。",
    color: "magenta" as const,
  },
  {
    title: "機会の不平等",
    description:
      "環境や経済力の差で、挑戦のチャンスすら得られない若者がいる。実践経験を積む場所がなく、キャリアにつながらない。",
    color: "violet" as const,
  },
];

export default function WhySection() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
          Why SyncBuds
        </p>
        <h2 className="text-section-title jp-fit [--chars:13] text-text mb-20">
          なぜSyncBudsが必要なのか
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {challenges.map((c) => (
            <div
              key={c.title}
              className="relative p-10 overflow-hidden"
            >
              <WatercolorAccent
                color={c.color}
                variant="splash"
                opacity={0.04}
                className="absolute -top-10 -right-10 w-[180px] h-[180px]"
              />
              <h3 className="font-sans text-2xl font-bold text-text mb-4 relative">
                {c.title}
              </h3>
              <p className="text-sub text-base leading-relaxed relative">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
