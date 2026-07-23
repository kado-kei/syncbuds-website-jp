// 幾何アクセント：同心円・円弧・ドットグリッド（静的・低コントラスト）
// セクションの隅にさりげなく置く上質なディテール。

type GeoAccentsProps = {
  variant?: "rings" | "dots" | "arc";
  className?: string;
};

export default function GeoAccents({
  variant = "rings",
  className = "",
}: GeoAccentsProps) {
  if (variant === "dots") {
    return (
      <svg
        aria-hidden
        className={`pointer-events-none ${className}`}
        width="160"
        height="160"
        fill="none"
      >
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={6 + c * 22}
              cy={6 + r * 22}
              r={1.4}
              fill="#0B0B0C"
              fillOpacity={0.18}
            />
          ))
        )}
      </svg>
    );
  }

  if (variant === "arc") {
    return (
      <svg
        aria-hidden
        className={`pointer-events-none ${className}`}
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
      >
        <path
          d="M 20 300 A 280 280 0 0 1 300 20"
          stroke="#0B0B0C"
          strokeOpacity={0.14}
          strokeWidth={1}
        />
        <path
          d="M 60 300 A 240 240 0 0 1 300 60"
          stroke="#0B0B0C"
          strokeOpacity={0.1}
          strokeWidth={1}
        />
      </svg>
    );
  }

  // rings
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      width="360"
      height="360"
      viewBox="0 0 360 360"
      fill="none"
    >
      {[180, 140, 100, 60].map((r, i) => (
        <circle
          key={r}
          cx={180}
          cy={180}
          r={r}
          stroke="#0B0B0C"
          strokeOpacity={0.13 - i * 0.02}
          strokeWidth={1}
        />
      ))}
    </svg>
  );
}
