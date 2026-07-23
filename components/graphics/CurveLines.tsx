"use client";

import { motion } from "framer-motion";

// 細い黒/グレーのベジェ曲線。Heroの1本はゆっくり描画アニメ。
// 洗練された流れるラインで「つながり」を象徴。

type CurveLinesProps = {
  className?: string;
  animate?: boolean;
};

const paths = [
  "M -50 220 C 250 80, 600 360, 1100 140",
  "M -50 300 C 300 180, 650 440, 1100 240",
  "M -50 380 C 350 280, 700 520, 1100 340",
];

export default function CurveLines({
  className = "",
  animate = false,
}: CurveLinesProps) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      viewBox="0 0 1050 560"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((d, i) =>
        animate ? (
          <motion.path
            key={i}
            d={d}
            stroke="#0B0B0C"
            strokeWidth={1}
            strokeOpacity={0.12 - i * 0.025}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, delay: 0.3 + i * 0.25, ease: "easeInOut" }}
          />
        ) : (
          <path
            key={i}
            d={d}
            stroke="#0B0B0C"
            strokeWidth={1}
            strokeOpacity={0.1 - i * 0.02}
          />
        )
      )}
    </svg>
  );
}
