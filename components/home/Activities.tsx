import WatercolorAccent from "@/components/graphics/WatercolorAccent";

const activities = [
  {
    title: "Community",
    description: "バンクーバーで挑戦する仲間と出会う場をつくる。",
    color: "blue" as const,
  },
  {
    title: "Media",
    description: "現地情報を届けながら、メンバーが実践経験を積む。",
    color: "yellow" as const,
  },
  {
    title: "Career",
    description: "海外経験を次のキャリアにつなげる機会をつくる。",
    color: "magenta" as const,
  },
];

export default function Activities() {
  return (
    <section className="py-[var(--spacing-section-lg)] bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs text-sub uppercase tracking-[0.2em] mb-6 font-sans">
          Main Activities
        </p>
        <h2 className="text-section-title text-text mb-20">
          主な取り組み
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {activities.map((a) => (
            <div
              key={a.title}
              className="relative bg-surface rounded-3xl p-10 overflow-hidden"
            >
              <WatercolorAccent
                color={a.color}
                variant="wash"
                opacity={0.035}
                className="absolute -bottom-16 -left-16 w-[240px] h-[240px]"
              />
              <h3 className="font-sans text-3xl font-bold text-text mb-4 relative">
                {a.title}
              </h3>
              <p className="text-sub text-base leading-relaxed relative">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
