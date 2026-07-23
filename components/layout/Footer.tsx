import Link from "next/link";

const footerLinks = [
  {
    title: "SyncBuds",
    links: [
      { label: "About", href: "/about" },
      { label: "Stories", href: "/stories" },
      { label: "Reports", href: "/reports" },
      { label: "Partners", href: "/partners" },
      { label: "Join", href: "/join" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { label: "バンクーバーおすすめ", href: "https://instagram.com/vancouverosusume", external: true },
      { label: "Ryugaku+", href: "https://www.ryugaku-plus.com/vancouver/app", external: true },
    ],
  },
  {
    title: "SNS",
    links: [
      { label: "Instagram", href: "https://instagram.com/syncbuds.ca", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/company/syncbuds", external: true },
      { label: "X (Twitter)", href: "https://x.com/syncbuds_ca", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex" aria-label="SyncBuds ホーム">
              <span className="font-sans text-2xl font-bold tracking-tight text-text">
                SyncBuds
              </span>
            </Link>
            <p className="mt-4 text-sm text-sub leading-relaxed">
              バンクーバー発。<br />
              日本人の海外挑戦を支える組織。
            </p>
            <p className="mt-6 text-xs text-sub/60 leading-relaxed">
              BC Registered Organization<br />
              Registered in British Columbia, Canada<br />
              © 2026 SyncBuds Marketing Association
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-medium text-sub uppercase tracking-[0.2em] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={"external" in link ? "_blank" : undefined}
                      rel={"external" in link ? "noopener noreferrer" : undefined}
                      className="text-sm text-sub hover:text-text transition-colors"
                    >
                      {link.label}
                      {"external" in link && (
                        <span className="ml-1 text-xs opacity-40">↗</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
