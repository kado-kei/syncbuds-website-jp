"use client";

import Link from "next/link";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-40 bg-surface border-b border-border text-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-10 flex items-center justify-center text-sm">
        <Link
          href="https://www.ryugaku-plus.com/vancouver/app"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sub hover:text-text transition-colors"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-text" />
          <span className="text-text font-medium">Ryugaku+ β版</span>
          <span className="hidden sm:inline">登録受付中</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 md:right-12 text-sub hover:text-text transition-colors"
          aria-label="バナーを閉じる"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
