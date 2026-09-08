"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact", accent: true },
];

/**
 * @param overOpenWall トップの演出（#open-wall）の上を通る間、ヘッダーを
 *   白抜き＋ mix-blend-mode: difference にする。背景が黒なら白く、白なら黒く出るので、
 *   壁が開いて背景が反転しても読める。scrollY の閾値では対応できない
 *   （黒い壁は 40px を超えてもずっと続く）ため、演出の実寸を測って判定する。
 */
export default function Navbar({ overOpenWall = false }: { overOpenWall?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [overStory, setOverStory] = useState(overOpenWall);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const story = overOpenWall ? document.getElementById("open-wall") : null;
    if (!story) return;
    /* getBoundingClientRect を mount 時に1回測る実装だと、CSS Modules の
       スタイルが当たる前に測って高さ0を読み、以後スクロールするまで直らない。
       IntersectionObserver ならレイアウトが確定した時点で発火し直す。
       上端を -80px（ヘッダーの高さ h-20）削ることで、
       「ヘッダーの帯がまだ演出の上にいるか」をそのまま判定できる。 */
    const io = new IntersectionObserver(([entry]) => setOverStory(entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    });
    io.observe(story);
    return () => io.disconnect();
  }, [overOpenWall]);

  // メニューを開くと自前の背景（白）が出るので、そこでは反転をやめる
  const blend = overStory && !menuOpen;
  const invert = blend;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        blend
          ? "bg-transparent mix-blend-difference"
          : scrolled
            ? "bg-bg/95 backdrop-blur border-b border-border"
            : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo — 正式なブランドアセット。SVGは元データの余白を切り落とし、
            viewBox をロゴの実寸ぴったりに詰めてある（public/images/brand/）。 */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/brand/syncbuds-logo.svg"
            alt="SyncBuds"
            width={959}
            height={199}
            priority
            className={`h-7 w-auto transition-[filter] duration-300 ${
              invert ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  item.accent
                    ? invert
                      ? "btn-outline !py-2 !px-5 !text-sm !border-white !text-white hover:!bg-white hover:!text-black"
                      : "btn-primary !py-2 !px-5 !text-sm"
                    : invert
                      ? "text-sm text-white/70 hover:text-white transition-colors tracking-wide"
                      : "text-sm text-sub hover:text-text transition-colors tracking-wide"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className={`block w-6 h-px ${invert ? "bg-white" : "bg-text"} transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px ${invert ? "bg-white" : "bg-text"} transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px ${invert ? "bg-white" : "bg-text"} transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/98 backdrop-blur border-t border-border">
          <ul className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    item.accent
                      ? "inline-flex px-5 py-2.5 bg-accent text-bg font-medium rounded-full text-sm"
                      : "text-base text-sub hover:text-text transition-colors"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
