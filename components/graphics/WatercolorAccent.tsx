const colorMap = {
  magenta: "var(--color-wc-magenta)",
  blue: "var(--color-wc-blue)",
  yellow: "var(--color-wc-yellow)",
  violet: "var(--color-wc-violet)",
} as const;

type WatercolorColor = keyof typeof colorMap;
type WatercolorVariant = "splash" | "wash" | "stroke";

interface Props {
  color: WatercolorColor;
  variant?: WatercolorVariant;
  opacity?: number;
  className?: string;
}

export default function WatercolorAccent({
  color,
  variant = "splash",
  opacity = 0.12,
  className = "",
}: Props) {
  const fill = colorMap[color];
  const id = `wc-${color}-${variant}`;

  if (variant === "stroke") {
    return (
      <svg
        viewBox="0 0 400 60"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <defs>
          <filter id={`${id}-f`}>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.015"
              numOctaves="3"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          d="M20 30 Q100 15 200 32 T380 28"
          fill="none"
          stroke={fill}
          strokeWidth="6"
          strokeLinecap="round"
          filter={`url(#${id}-f)`}
        />
      </svg>
    );
  }

  if (variant === "wash") {
    return (
      <svg
        viewBox="0 0 300 300"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <defs>
          <filter id={`${id}-f`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves="4"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <ellipse
          cx="150"
          cy="150"
          rx="100"
          ry="80"
          fill={fill}
          filter={`url(#${id}-f)`}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <filter id={`${id}-f`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="3"
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="60" fill={fill} filter={`url(#${id}-f)`} />
    </svg>
  );
}
