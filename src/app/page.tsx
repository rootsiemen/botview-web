import { SectionHead, btnPrimary, card, eyebrowBadge } from "@/components/ui";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is a GEO checker?",
    a: "A GEO (Generative Engine Optimization) checker audits whether AI search engines can crawl, read and cite your site. It checks llms.txt, AI-crawler rules in robots.txt, structured data and readable text, and scores them out of 100.",
  },
  {
    q: "What is the difference between SEO, AEO and GEO?",
    a: "SEO is visibility in classic search results. AEO is being the direct answer (featured snippets, FAQ schema, answer-shaped content). GEO is visibility inside AI-generated answers. BotView scores all three separately because a site can be strong in one and invisible in another.",
  },
  {
    q: "Is BotView free?",
    a: (
      <>
        Yes — the web checker is free, and the original command-line BotView auditor is
        open source (MIT) on{" "}
        <a className="text-orange-700 font-semibold" href="https://github.com/rootsiemen/botview">
          GitHub
        </a>
        .
      </>
    ),
  },
  {
    q: "What is llms.txt?",
    a: "A Markdown file at your site root that gives AI crawlers a clean map of your key pages and facts. BotView checks that it exists, starts with a heading, and links to at least three key pages.",
  },
  {
    q: "How do I fix a low score?",
    a: "Every failing check in a BotView report comes with a one-line fix. Work from the top: red (fail) items first, then amber (warn). Most sites gain the most from three fixes — unblocking AI crawlers, adding an llms.txt, and adding entity (Organization/WebSite) schema.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO + CHECKER */}
      <section id="top" className="bg-orange-50 dot-grid py-16 sm:py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className={eyebrowBadge}>Free · No sign-up · Instant report</span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-stone-900 leading-tight">
            See your site the way <span className="text-gold-gradient">Google &amp; AI</span> see it
          </h1>
          <p className="mt-5 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Paste any URL and get three scores out of 100 — <strong>SEO</strong>,{" "}
            <strong>AEO</strong> and <strong>GEO (AI visibility)</strong> — with every
            failing check and the fix for each one.
          </p>
          <form
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            action="/check"
            method="get"
          >
            <input
              type="text"
              name="url"
              placeholder="https://your-website.com"
              required
              autoComplete="url"
              inputMode="url"
              className="flex-1 rounded-full border border-stone-300 bg-white px-6 py-3.5 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
            <button type="submit" className={`${btnPrimary} justify-center`}>
              Check my site →
            </button>
          </form>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-stone-600">
            <span>
              Try:{" "}
              <a className="font-semibold text-orange-700" href="/check?url=https%3A%2F%2Ffrinjo.me">
                frinjo.me
              </a>
            </span>
            <span>
              <a className="font-semibold text-orange-700" href="/check?url=https%3A%2F%2Figaf.me">
                igaf.me
              </a>
            </span>
            <span>
              <a className="font-semibold text-orange-700" href="/check?url=https%3A%2F%2Fexample.com">
                example.com
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* WHAT IT CHECKS */}
      <section id="what" className="py-16 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead
            eyebrow="The audit"
            title="What does BotView check?"
            sub="Three visibilities, scored separately — because a site can rank on Google and still be invisible to AI."
          />
          <div className="grid gap-5 md:grid-cols-3 text-left">
            <div className={card}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700 mb-3">SEO</p>
              <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                Can Google find and rank it?
              </h3>
              <p className="text-stone-600 leading-relaxed">
                HTTPS and status codes, title and meta description, canonical, exactly one
                H1 and a sane heading order, image alt text, internal links, robots.txt,
                sitemap, OpenGraph tags and content depth.
              </p>
            </div>
            <div className={card}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700 mb-3">AEO</p>
              <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                Will it be the answer?
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Answer Engine Optimization: FAQ/HowTo schema, question-style headings,
                short answer-shaped paragraphs right under them, and lists or tables that
                are easy for an engine to lift and quote.
              </p>
            </div>
            <div className={card}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700 mb-3">GEO</p>
              <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                Can AI read and cite it?
              </h3>
              <p className="text-stone-600 leading-relaxed">
                The BotView original: llms.txt, whether GPTBot, ClaudeBot and PerplexityBot
                are allowed in robots.txt, JSON-LD entity schema, and how much readable
                text an LLM actually gets from the raw HTML.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DARK EXPLAINER */}
      <section className="py-16 sm:py-20 bg-stone-950 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-orange-400 text-center">
            Why it matters
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center">
            Why do AI crawlers matter for my website?
          </h2>
          <p className="mt-6 text-stone-300 leading-relaxed">
            More searches now end inside an AI answer than on a results page. When
            ChatGPT, Claude or Perplexity answers a question about your niche, it cites
            the sites its crawlers could actually read. A site that blocks GPTBot in
            robots.txt, hides its content behind JavaScript, or ships no structured data
            is invisible in those answers — no matter how well it ranks on Google.
            BotView puts all three visibilities side by side so you fix the weakest one
            first.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3 text-left">
            <div className="rounded-3xl border border-stone-800 bg-stone-900 p-8">
              <div className="font-display text-4xl font-bold text-orange-400">8</div>
              <p className="mt-2 text-stone-400 text-sm">
                AI crawlers checked in your robots.txt — GPTBot, ClaudeBot, PerplexityBot
                and more.
              </p>
            </div>
            <div className="rounded-3xl border border-stone-800 bg-stone-900 p-8">
              <div className="font-display text-4xl font-bold text-orange-400">25+</div>
              <p className="mt-2 text-stone-400 text-sm">
                Individual checks across SEO, AEO and GEO — each with a one-line fix.
              </p>
            </div>
            <div className="rounded-3xl border border-stone-800 bg-stone-900 p-8">
              <div className="font-display text-4xl font-bold text-orange-400">0</div>
              <p className="mt-2 text-stone-400 text-sm">
                Sign-ups, paywalls or tracking. Paste a URL, get a report, share the link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 bg-stone-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-stone-200 bg-stone-50/60 open:bg-white open:shadow-md transition group px-6 py-4"
              >
                <summary className="font-bold text-stone-900 cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-stone-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#top" className={btnPrimary}>
              Run a free check →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
