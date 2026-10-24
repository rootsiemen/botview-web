"use client";

import { useEffect, useState } from "react";
import type { AuditResult, CategoryResult, Check } from "@/lib/audit";

function tone(score: number): { text: string; bar: string } {
  if (score >= 80) return { text: "text-green-600", bar: "bg-green-500" };
  if (score >= 50) return { text: "text-amber-500", bar: "bg-amber-400" };
  return { text: "text-red-500", bar: "bg-red-500" };
}

function ScoreCard({ label, score, big }: { label: string; score: number; big?: boolean }) {
  const t = tone(score);
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-sm">
      <div className={`font-display font-bold ${t.text} ${big ? "text-6xl" : "text-5xl"}`}>
        {score}
      </div>
      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-500">
        {label} · /100
      </div>
      <div className="mt-3 h-2 rounded-full bg-stone-100 overflow-hidden">
        <div className={`h-full rounded-full ${t.bar}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}

function CheckRow({ c }: { c: Check }) {
  const icon = c.status === "pass" ? "✓" : c.status === "warn" ? "!" : "✗";
  const cls =
    c.status === "pass" ? "text-green-600" : c.status === "warn" ? "text-amber-500" : "text-red-500";
  return (
    <div className="flex gap-3 py-3 border-b border-stone-100 last:border-0">
      <div className={`font-bold w-5 flex-none text-center ${cls}`}>{icon}</div>
      <div>
        <span className="font-semibold text-stone-900">{c.name}</span>{" "}
        <span className="text-stone-500 text-sm">— {c.detail}</span>
        {c.status !== "pass" && c.fix ? (
          <div className="text-sm text-orange-800 mt-0.5">Fix: {c.fix}</div>
        ) : null}
      </div>
    </div>
  );
}

function Category({
  title,
  score,
  blurb,
  cat,
}: {
  title: string;
  score: number;
  blurb: string;
  cat: CategoryResult;
}) {
  return (
    <section className="py-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
        {title} — <span className={tone(score).text}>{score}/100</span>
      </h2>
      <p className="mt-2 text-stone-600">{blurb}</p>
      <div className="mt-4 rounded-3xl border border-stone-200 bg-white px-6 py-2">
        {cat.checks.map((c) => (
          <CheckRow key={c.name} c={c} />
        ))}
      </div>
    </section>
  );
}

export default function Report({ url }: { url: string }) {
  const [data, setData] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/api/audit?url=${encodeURIComponent(url)}`);
        const json = (await res.json()) as AuditResult;
        if (!alive) return;
        if (json.error) setError(json.error);
        else setData(json);
      } catch {
        if (alive) setError("Could not run the audit — network error. Please try again.");
      }
    })();
    return () => {
      alive = false;
    };
  }, [url]);

  if (error) {
    return (
      <section className="py-16 sm:py-24 bg-orange-50 dot-grid">
        <div className="max-w-2xl mx-auto px-4">
          <div className="rounded-3xl border border-red-200 bg-white p-8">
            <h1 className="font-display text-2xl font-bold text-stone-900">
              Couldn&apos;t check that URL
            </h1>
            <p className="mt-3 text-stone-600">{error}</p>
            <p className="mt-4">
              <a href="/" className="font-semibold text-orange-700">
                ← Check another URL
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
  if (!data) {
    return (
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center text-stone-500 text-lg">
          🔍 Auditing <span className="font-semibold text-stone-800">{url}</span> — fetching
          the page, robots.txt, sitemap and llms.txt…
        </div>
      </section>
    );
  }

  const botEntries = Object.entries(data.aiBots);
  return (
    <>
      <section className="bg-orange-50 dot-grid py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] bg-orange-600 text-white rounded-full px-3 py-1 mb-4">
            BotView Report
          </span>
          <h1
            className="font-display text-2xl sm:text-4xl font-bold text-stone-900"
            style={{ wordBreak: "break-all" }}
          >
            {data.finalUrl}
          </h1>
          <p className="mt-3 text-sm text-stone-500">
            Checked {new Date(data.fetchedAt).toLocaleString()} ·{" "}
            <a href="/" className="font-semibold text-orange-700">
              Check another URL
            </a>
          </p>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-8 text-left">
            <ScoreCard label="Overall" score={data.scores.overall} big />
            <ScoreCard label="SEO" score={data.scores.seo} />
            <ScoreCard label="AEO" score={data.scores.aeo} />
            <ScoreCard label="GEO · AI visibility" score={data.scores.geo} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 divide-y divide-stone-100">
        <Category
          title="SEO"
          score={data.scores.seo}
          blurb="Technical basics: can search engines crawl, index and rank this page?"
          cat={data.categories.seo}
        />
        <Category
          title="AEO"
          score={data.scores.aeo}
          blurb="Answer readiness: is the content shaped so an engine can quote it as the answer?"
          cat={data.categories.aeo}
        />
        <Category
          title="GEO — AI visibility"
          score={data.scores.geo}
          blurb="The BotView original: can ChatGPT, Claude and Perplexity read and cite this site?"
          cat={data.categories.geo}
        />

        {botEntries.length > 0 && (
          <section className="py-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              AI crawler access
            </h2>
            <p className="mt-2 text-stone-600">What this site&apos;s robots.txt tells each AI crawler:</p>
            <div className="mt-4 overflow-x-auto rounded-3xl border border-stone-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="px-5 py-3 font-bold text-stone-900">Crawler</th>
                    <th className="px-5 py-3 font-bold text-stone-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {botEntries.map(([bot, verdict]) => (
                    <tr key={bot} className="border-t border-stone-100">
                      <td className="px-5 py-2.5 font-medium text-stone-800">{bot}</td>
                      <td
                        className={`px-5 py-2.5 font-semibold ${
                          verdict === "blocked" ? "text-red-500" : "text-green-600"
                        }`}
                      >
                        {verdict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {data.schemaTypes.length > 0 && (
              <p className="mt-4 text-stone-600">
                Structured data found:{" "}
                <strong className="text-stone-900">{data.schemaTypes.join(", ")}</strong>
              </p>
            )}
          </section>
        )}
      </div>
    </>
  );
}
