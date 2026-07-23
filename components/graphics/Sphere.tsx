// 黒〜濃グレーの3D球体（CSS放射グラデーション）
// 洗練された幾何モチーフ。白背景に浮かぶ上質なオーブ。

type SphereProps = {
  className?: string;
  /** 直径(px) */
  size?: number;
  /** 不透明度 */
  opacity?: number;
  /** ぼかし(px) — 大きいほど奥行き感 */
  blur?: number;
};

export default function Sphere({
  className = "",
  size = 280,
  opacity = 1,
  blur = 0,
}: SphereProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined,
        background:
          "radial-gradient(circle at 32% 28%, #6c6c74 0%, #2a2a2e 38%, #0b0b0c 78%)",
        boxShadow:
          "inset -8px -10px 30px rgba(0,0,0,0.55), 0 30px 60px rgba(11,11,12,0.18)",
      }}
    />
  );
}
