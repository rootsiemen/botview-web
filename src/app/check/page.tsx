import { Suspense } from "react";
import type { Metadata } from "next";
import Report from "./Report";

export const metadata: Metadata = {
  title: "Audit Report — BotView SEO, AEO & GEO Checker",
  description: "BotView audit report: SEO, AEO and GEO scores with every check and its fix.",
  robots: { index: false, follow: true },
};

export default async function CheckPage({
  searchParams,
}: {
  searchParams: Promise<{ url?: string }>;
}) {
  const { url } = await searchParams;
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-stone-500">Loading…</div>
      }
    >
      <Report url={url ?? ""} />
    </Suspense>
  );
}
