import { ease, lerp } from "./motion";

/* 3つの解決方法を表す光。壁が開ききる手前で現れ、中央へ寄りながら色が混ざる。
   グレー（puffs[0]）から3色へクロスフェードするので、色は「人が関わってから」つく。 */
const PUFF_COLORS = [
  [180, 180, 180], // 合流前の無彩色
  [27, 158, 196],  // リアルを届ける
  [142, 73, 211],  // 仲間と出会う
  [245, 126, 65],  // 経験を未来へ
] as const;

/** 128px の柔らかい円を1度だけ焼いておく。毎フレーム createRadialGradient すると数十個分の確保が走る */
function bakePuffs() {
  return PUFF_COLORS.map((rgb) => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d");
    if (g) {
      const fade = g.createRadialGradient(64, 64, 0, 64, 64, 64);
      fade.addColorStop(0, `rgba(${rgb},1)`);
      fade.addColorStop(0.45, `rgba(${rgb},.55)`);
      fade.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = fade;
      g.fillRect(0, 0, 128, 128);
    }
    return c;
  });
}

export type LightField = {
  resize: (w: number, h: number) => void;
  draw: (ms: number, progress: number, reduced: boolean) => void;
};

export function createLightField(canvas: HTMLCanvasElement): LightField | null {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const puffs = bakePuffs();
  let w = 0;
  let h = 0;

  return {
    resize(width, height) {
      w = width;
      h = height;
      // 長辺 1100px 相当まで解像度を落とす。ぼやけた光なので等倍で描く必要がない
      const d = Math.min(1, 1100 / Math.max(w, h));
      canvas.width = Math.round(w * d);
      canvas.height = Math.round(h * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
    },

    draw(ms, progress, reduced) {
      ctx.clearRect(0, 0, w, h);
      const reveal = ease((progress - 0.6) / 0.1);
      if (!reveal) return;

      const merge = ease((progress - 0.77) / 0.21);
      const color = ease((progress - 0.81) / 0.17);
      const t = reduced ? 0 : ms * 0.000075;
      const mobile = w < 701;

      ctx.globalCompositeOperation = "multiply";

      for (let k = 0; k < 3; k++) {
        const sx = mobile ? w * 0.5 : w * (0.23 + k * 0.27);
        const sy = mobile ? h * (0.36 + k * 0.17) : h * 0.52;
        const angle = (k * Math.PI * 2) / 3 + t;
        const cx = lerp(sx, w * 0.5 + Math.cos(angle) * w * 0.065, merge);
        const cy = lerp(sy, h * 0.51 + Math.sin(angle) * h * 0.07, merge);
        const radius = lerp(Math.min(w, h) * 0.15, Math.min(w, h) * 0.4, merge);

        for (let j = 0; j < 18; j++) {
          const a = j * 2.399 + k * 1.4 + t * (j % 2 ? 1 : -1);
          const r = radius * (0.12 + (j % 7) * 0.075);
          const x = cx + Math.cos(a) * r * (0.3 + merge * 0.7);
          const y = cy + Math.sin(a * 1.17) * r;
          const size = radius * (0.38 + (j % 5) * 0.06);
          const alpha = reveal * (0.033 + merge * 0.03);
          ctx.globalAlpha = alpha * (1 - color);
          ctx.drawImage(puffs[0], x - size, y - size, size * 2, size * 2);
          ctx.globalAlpha = alpha * color;
          ctx.drawImage(puffs[k + 1], x - size, y - size, size * 2, size * 2);
        }
        ctx.globalAlpha = 1;

        // 合流前は中心が白く光る。3つが別々の光であることを見せる
        const gl = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.5);
        gl.addColorStop(0, `rgba(255,255,255,${0.9 * reveal * (1 - merge)})`);
        gl.addColorStop(1, "rgba(255,255,255,0)");
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = gl;
        ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
        ctx.globalCompositeOperation = "multiply";
      }

      ctx.globalCompositeOperation = "source-over";
    },
  };
}
