const items = [
  "Remote studio",
  "Serving U.S. brands",
  "Semantic SEO systems",
  "Social content",
  "Conversion-ready design",
  "Texas + nationwide",
];

export function TrustStrip() {
  return (
    <div className="border-y border-line/60 bg-navy px-5 py-4">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-2 text-xs text-slate-mid">
              {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-line sm:block" aria-hidden="true" />}
              <span className="uppercase tracking-[0.18em]">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
