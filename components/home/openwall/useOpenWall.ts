"use client";

import { useCallback, useEffect, useRef } from "react";
import { createLightField } from "./lightField";
import { clamp, follow, opacityAt, openingAt, stops } from "./motion";

/** シーン数。パネル・ナビ・opacityAt のレンジ数と一致していること */
export const SCENE_COUNT = 5;

/**
 * スクロール位置を「壁の開口率」に変換し、壁・パネル・光を同じ進行に同期させる。
 *
 * CSS変数は :root ではなく .story 要素に書く。演出はページの一部でしかないので、
 * ドキュメント全体に --opening のような一般名を撒かない。
 */
/** @param activeClass CSS Modules はクラス名をハッシュ化するので、JS からトグルする名前は呼び出し側が渡す */
export function useOpenWall(activeClass: string) {
  const storyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const percentRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);
  const navRef = useRef<(HTMLButtonElement | null)[]>([]);

  const goToScene = useCallback((i: number) => {
    const story = storyRef.current;
    if (!story) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: story.offsetTop + stops[i] * (story.offsetHeight - window.innerHeight),
      behavior: reduced ? "instant" : "smooth",
    });
  }, []);

  useEffect(() => {
    const story = storyRef.current;
    const stage = stageRef.current;
    if (!story || !stage) return;

    const field = canvasRef.current ? createLightField(canvasRef.current) : null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const storyEl = story;
    const stageEl = stage;

    let progress = 0;
    let target = 0;
    let scrollDistance = 1;
    let storyTop = 0;
    let lastStep = -1;
    let raf = 0;
    let lastTime = 0;
    let ambientTime = 0;
    // 演出が画面外に出てもアンビエントの光は回り続ける（progress が1のまま）。
    // 下に続くセクションを読んでいる間ずっと rAF を焚かないよう、可視性で止める
    let onScreen = true;

    function render() {
      const open = openingAt(progress);
      storyEl.style.setProperty("--opening", String(open));
      // 開き始めの数%で壁の縁を立ち上げる。0のままだと縁が唐突に現れる
      storyEl.style.setProperty("--edge", String(Math.min(1, open * 7)));
      storyEl.style.setProperty("--progress", String(progress));
      if (percentRef.current) percentRef.current.textContent = String(Math.round(open * 100));

      let strongest = 0;
      panelsRef.current.forEach((el, i) => {
        if (!el) return;
        const a = opacityAt(i, progress);
        el.style.opacity = String(a);
        // 上下に動かさず、奥から近づけてぼかしを解く。「壁の向こうの情報が届く」感覚
        const depth = reduced.matches ? 0 : (1 - a) * 140;
        el.style.transform = depth > 0 ? `perspective(1000px) translateZ(-${depth}px)` : "none";
        el.style.filter = depth > 0 ? `blur(${(1 - a) * 2.5}px)` : "none";
        el.classList.toggle(activeClass, a > 0);
        // 読めない位置のパネルにフォーカスやスクリーンリーダーが入らないようにする
        el.inert = a < 0.5;
        el.setAttribute("aria-hidden", a < 0.5 ? "true" : "false");
        if (a > opacityAt(strongest, progress)) strongest = i;
      });

      if (strongest !== lastStep) {
        navRef.current.forEach((el, i) => {
          if (!el) return;
          if (i === strongest) el.setAttribute("aria-current", "step");
          else el.removeAttribute("aria-current");
        });
        lastStep = strongest;
      }
    }

    function wake() {
      if (!raf && onScreen && !reduced.matches && !document.hidden) {
        raf = requestAnimationFrame(frame);
      }
    }

    function frame(t: number) {
      raf = 0;
      const dt = lastTime ? Math.min(50, t - lastTime) : 16.67;
      lastTime = t;
      ambientTime += dt;
      const before = progress;
      progress = follow(progress, target, dt);
      if (Math.abs(progress - target) < 0.00001) progress = target;
      if (before !== progress) render();
      field?.draw(ambientTime, progress, reduced.matches);
      // 追いついても、光が漂う区間（60%以降）はアニメーションを回し続ける
      if (Math.abs(progress - target) > 0.00001 || progress > 0.6) wake();
      else lastTime = 0;
    }

    function update() {
      target = clamp((window.scrollY - storyTop) / scrollDistance);
      if (reduced.matches) {
        progress = target;
        render();
        field?.draw(0, progress, true);
      } else {
        wake();
      }
    }

    function resize() {
      field?.resize(window.innerWidth, window.innerHeight);
      scrollDistance = Math.max(1, storyEl.offsetHeight - stageEl.offsetHeight);
      storyTop = storyEl.getBoundingClientRect().top + window.scrollY;
      update();
    }

    function start() {
      cancelAnimationFrame(raf);
      raf = 0;
      lastTime = 0;
      if (reduced.matches) {
        progress = target;
        render();
        field?.draw(0, progress, true);
      } else {
        wake();
      }
    }

    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else {
        cancelAnimationFrame(raf);
        raf = 0;
        lastTime = 0;
      }
    });
    visibility.observe(stageEl);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", start);
    reduced.addEventListener("change", start);

    resize();
    progress = target;
    render();
    start();

    return () => {
      visibility.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", start);
      reduced.removeEventListener("change", start);
    };
    // activeClass は CSS Modules のビルド時定数で、再実行の必要がない。
    // ここで再購読するとスクロール中に rAF が張り直される
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { storyRef, stageRef, canvasRef, percentRef, panelsRef, navRef, goToScene };
}
