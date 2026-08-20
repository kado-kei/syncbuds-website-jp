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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur border-b border-border" : "bg-transparent"
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
            className="h-7 w-auto"
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
                    ? "btn-primary !py-2 !px-5 !text-sm"
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
          <span className={`block w-6 h-px bg-text transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-text transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-text transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
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
