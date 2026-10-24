import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE = "https://botview-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "BotView — Free SEO, AEO & GEO Checker",
  description:
    "Paste any URL and get a free SEO, AEO and GEO (AI visibility) audit — scores, checks and fixes, the way Google and AI search see your site.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE + "/",
    title: "BotView — Free SEO, AEO & GEO Checker",
    description:
      "Free site audit: SEO score, AEO answer-readiness and GEO AI-visibility score for any URL, with a fix for every failing check.",
    siteName: "BotView",
  },
  twitter: { card: "summary", title: "BotView — Free SEO, AEO & GEO Checker" },
  robots: { index: true, follow: true },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BotView",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE + "/",
  description:
    "Free SEO, AEO and GEO checker. Audits any public URL for technical SEO, answer-engine readiness and AI visibility (llms.txt, AI crawlers, structured data).",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "WebStore Pro", url: "https://frinjo.me" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a GEO checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A GEO (Generative Engine Optimization) checker audits whether AI search engines like ChatGPT, Claude and Perplexity can crawl, read and cite your website. It checks llms.txt, AI-crawler rules in robots.txt, structured data and readable text — BotView's GEO score is out of 100.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between SEO, AEO and GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is visibility in classic search results (Google/Bing). AEO (Answer Engine Optimization) is being the direct answer — featured snippets, FAQ schema and answer-shaped content. GEO is visibility inside AI-generated answers from ChatGPT, Claude and Perplexity. BotView scores all three separately.",
      },
    },
    {
      "@type": "Question",
      name: "Is BotView free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BotView is free to use in the browser, and the original command-line auditor is open source (MIT) on GitHub.",
      },
    },
    {
      "@type": "Question",
      name: "What is llms.txt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "llms.txt is a Markdown file at your site root that gives AI crawlers a clean map of your key pages and facts. Sites without one are harder for AI models to understand and cite.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
