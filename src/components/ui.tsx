/** Shared Frinjo/WebStore Pro design helpers — mirrored from frinjo.me. */

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-orange-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">{title}</h2>
      {sub && <p className="mt-4 text-stone-600">{sub}</p>}
    </div>
  );
}

/** CTA button styles shared across pages (same as frinjo.me). */
export const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-orange-400 text-orange-950 font-bold px-7 py-3.5 hover:bg-orange-300 transition shadow-lg shadow-orange-400/20";
export const btnOutline =
  "inline-flex items-center gap-2 rounded-full border-2 border-orange-700 text-orange-800 font-semibold px-7 py-3 hover:border-orange-800 hover:bg-orange-50 transition";
export const btnDark =
  "inline-flex items-center gap-2 rounded-full bg-orange-950 text-white font-bold px-7 py-3.5 hover:bg-orange-900 transition";
export const eyebrowBadge =
  "inline-block text-[11px] font-bold uppercase tracking-[0.15em] bg-orange-600 text-white rounded-full px-3 py-1 mb-4";
export const card =
  "rounded-3xl border border-stone-200 bg-white p-8 hover:shadow-xl hover:border-orange-200 transition";
