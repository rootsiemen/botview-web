const linkCls =
  "block px-3 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-stone-600 hover:text-orange-600 transition";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center whitespace-nowrap shrink-0">
          <span className="flex items-center text-[26px] leading-none">🔍</span>
          <span className="font-display font-bold text-stone-700 tracking-[0.06em] text-xl ml-2">
            Bot<span className="text-orange-600">View</span>
          </span>
          <span className="ml-2 text-[10px] font-bold text-orange-600 uppercase tracking-[0.1em] hidden sm:inline">
            by WebStore Pro
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          <a className={linkCls} href="/">
            Checker
          </a>
          <a className={linkCls} href="/#what">
            What it checks
          </a>
          <a className={linkCls} href="/#faq">
            FAQ
          </a>
          <a
            className={linkCls}
            href="https://github.com/rootsiemen/botview"
            target="_blank"
            rel="noreferrer"
          >
            BotView CLI
          </a>
          <a
            className={linkCls}
            href="https://github.com/rootsiemen/seo-agent-kit"
            target="_blank"
            rel="noreferrer"
          >
            SEO Agent Kit
          </a>
        </nav>
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="https://frinjo.me"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 text-white text-sm font-bold uppercase tracking-[0.1em] px-5 py-2.5 hover:bg-orange-500 transition"
          >
            WebStore Pro
          </a>
        </div>
        <a href="/" className="lg:hidden text-sm font-bold uppercase tracking-[0.1em] text-orange-700">
          Check a site
        </a>
      </div>
    </header>
  );
}
