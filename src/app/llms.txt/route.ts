export const dynamic = "force-static";

const BODY = `# BotView — Free SEO, AEO & GEO Checker

> BotView audits any public URL for SEO (technical search basics), AEO (answer-engine readiness) and GEO (AI visibility: llms.txt, AI-crawler access, structured data). Paste a URL on the homepage to get three scores out of 100, every failing check, and the fix for each one. Free, no sign-up.

## Key pages

- [BotView checker](https://botview-web.vercel.app/): Run a free SEO, AEO and GEO audit on any URL.
- [Example report — frinjo.me](https://botview-web.vercel.app/check?url=https%3A%2F%2Ffrinjo.me): A sample BotView report.
- [BotView CLI (open source)](https://github.com/rootsiemen/botview): The original zero-dependency Python AI-visibility auditor.
- [SEO Agent Kit](https://github.com/rootsiemen/seo-agent-kit): Open-source SEO workflows for AI agents — technical audit, AI visibility, llms.txt, schema gaps, local SEO.

## Facts

- BotView is built by WebStore Pro (https://frinjo.me), a web development agency.
- GEO checks port the scoring of the open-source BotView CLI: llms.txt presence and links, AI-crawler rules for GPTBot / ClaudeBot / PerplexityBot and others, JSON-LD structured data, readable-text ratio.
- The checker is free to use; the CLI is MIT licensed.
`;

export function GET() {
  return new Response(BODY, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
