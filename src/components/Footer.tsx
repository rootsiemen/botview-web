export default function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-600 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <span className="flex items-center text-[26px] leading-none">🔍</span>
            <span className="font-display font-bold text-stone-700 tracking-[0.06em] text-xl ml-2">
              Bot<span className="text-orange-600">View</span>
            </span>
          </div>
          <p className="text-sm max-w-sm text-stone-500">
            See your website the way search engines — and AI — see it. Free SEO, AEO and
            GEO audits with a fix for every failing check.
          </p>
          <p className="text-sm mt-4 text-stone-500">
            Built by{" "}
            <a href="https://frinjo.me" className="hover:text-orange-600 transition font-semibold">
              WebStore Pro
            </a>{" "}
            — websites that sell, built in days, not months.
          </p>
        </div>
        <div>
          <h3 className="text-stone-900 font-bold mb-4 text-sm uppercase tracking-wider">Our Tools</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-orange-600 transition">
                BotView — SEO, AEO &amp; GEO Checker
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rootsiemen/botview"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-600 transition"
              >
                BotView CLI (open source)
              </a>
            </li>
            <li>
              <a
                href="https://frinjo.me/seo-agent-kit"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-600 transition"
              >
                SEO Agent Kit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-stone-900 font-bold mb-4 text-sm uppercase tracking-wider">WebStore Pro</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://frinjo.me" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">
                frinjo.me
              </a>
            </li>
            <li>
              <a href="https://frinjo.me/services" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="https://frinjo.me/contact" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-5 text-xs text-stone-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} BotView by WebStore Pro. The CLI is MIT licensed and open source.</span>
          <span>SEO · AEO · GEO — one free check.</span>
        </div>
      </div>
    </footer>
  );
}
