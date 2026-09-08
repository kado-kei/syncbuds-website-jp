export const clamp = (n: number) => Math.max(0, Math.min(1, n));

/** smootherstep。開き始めと終わりの加速度まで連続するので、壁が「止まって見える」瞬間が出ない */
export const ease = (n: number) => {
  n = clamp(n);
  return n * n * n * (n * (n * 6 - 15) + 10);
};

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ─── 壁の開口率 ─────────────────────────────────────────
   [スクロール進捗, 開口率]。09% までは閉じたまま（課題を読ませる）、
   以降 30% → 70% → 90% → 100% と各シーンに対応して開く。 */
const keyframes: [number, number][] = [
  [0, 0],
  [0.09, 0],
  [0.27, 0.3],
  [0.49, 0.7],
  [0.72, 0.9],
  [1, 1],
];

/* 単調エルミート補間の接線。各点で左右の傾きの調和平均を取るため、
   キーフレームを越えても速度がつながる＝章の切れ目で壁が止まらない。 */
const slopes = keyframes.map(([x, y], i) => {
  if (i === 0 || i === keyframes.length - 1) return 0;
  const [px, py] = keyframes[i - 1];
  const [nx, ny] = keyframes[i + 1];
  const left = (y - py) / (x - px);
  const right = (ny - y) / (nx - x);
  return left * right > 0 ? (2 * left * right) / (left + right) : 0;
});

export function openingAt(p: number) {
  p = clamp(p);
  for (let i = 1; i < keyframes.length; i++) {
    const [a, x] = keyframes[i - 1];
    const [b, y] = keyframes[i];
    if (p <= b) {
      const h = b - a;
      const t = (p - a) / h;
      const t2 = t * t;
      const t3 = t2 * t;
      return (
        (2 * t3 - 3 * t2 + 1) * x +
        (t3 - 2 * t2 + t) * h * slopes[i - 1] +
        (-2 * t3 + 3 * t2) * y +
        (t3 - t2) * h * slopes[i]
      );
    }
  }
  return 1;
}

/* パネルごとの [出現開始, 全開, 減衰開始, 消滅]。
   隣り合うシーンが少し重なるので、読み終わる前に次が立ち上がる。 */
const ranges: [number, number, number, number][] = [
  [0, 0, 0.09, 0.16],
  [0.2, 0.24, 0.31, 0.37],
  [0.41, 0.45, 0.53, 0.59],
  [0.64, 0.68, 0.77, 0.83],
  [0.87, 0.93, 1, 1],
];

export function opacityAt(i: number, p: number) {
  const [a, b, c, d] = ranges[i];
  if (p < a || p > d) return 0;
  if (p < b) return ease((p - a) / (b - a));
  if (p <= c) return 1;
  return 1 - ease((p - c) / (d - c));
}

/** ナビの各ボタンが飛ぶ進捗位置 */
export const stops = [0, 0.27, 0.49, 0.72, 1];

/** 時定数145msの指数追従。フレームレートに依らず同じ速さで追いつく */
export const follow = (current: number, goal: number, dt: number) =>
  lerp(current, goal, 1 - Math.exp(-dt / 145));
