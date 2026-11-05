# 🔍 BotView — Free SEO, AEO & GEO Checker

**Live:** https://botview-web.vercel.app — also live on Frinjo: [BotView — AI Visibility Checker](https://frinjo.me/botview)

See your website the way search engines — and AI — see it. Paste any URL and get
three scores out of 100, every failing check, and the fix for each one:

- **SEO** — technical basics: HTTPS, status, title/meta, canonical, headings,
  alt text, internal links, robots.txt, sitemap, OpenGraph, content depth.
- **AEO** — answer readiness: FAQ/HowTo schema, question-style headings,
  direct-answer paragraphs, extractable lists/tables.
- **GEO** — AI visibility, ported from the original
  [BotView CLI](https://github.com/rootsiemen/botview): llms.txt presence and
  links, AI-crawler rules (GPTBot, ClaudeBot, PerplexityBot, …) in robots.txt,
  JSON-LD entity schema, readable-text ratio, server-rendered content.

## Real scores (live audits, 24 Oct 2026)

| Site | SEO | AEO | GEO | Overall |
| --- | --- | --- | --- | --- |
| [frinjo.me](https://botview-web.vercel.app/check?url=https%3A%2F%2Ffrinjo.me) | 100 | 85 | 94 | 93 |
| [igaf.me](https://botview-web.vercel.app/check?url=https%3A%2F%2Figaf.me) | 98 | 20 | 94 | 71 |
| [example.com](https://botview-web.vercel.app/check?url=https%3A%2F%2Fexample.com) | 35 | 10 | 33 | 26 |

## Run it locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## How it works

`src/lib/audit.ts` fetches the submitted page server-side (plus its
`/robots.txt`, `/sitemap.xml`, `/llms.txt` and `/llms-full.txt`), parses the
raw HTML with zero third-party dependencies, and scores 25+ checks grouped
into SEO / AEO / GEO. The GEO point weights (llms.txt 16, crawler access 12,
JSON-LD 10, …) match the original Python BotView so web and CLI scores are
comparable.

## Related

- [BotView CLI](https://github.com/rootsiemen/botview) — the zero-dependency
  Python auditor this web app extends.
- [SEO Agent Kit](https://github.com/rootsiemen/seo-agent-kit) — open-source
  SEO workflows for AI agents.
- Built by [WebStore Pro](https://frinjo.me).

## License

MIT © Muhamad Raza Haider
