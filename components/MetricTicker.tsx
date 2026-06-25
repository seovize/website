const metrics = [
  { value: "20+", label: "Years experience" },
  { value: "$2M+", label: "Client ad spend managed" },
  { value: "6", label: "Service lanes" },
  { value: "90", label: "Day semantic SEO plan" },
  { value: "4", label: "Texas cities" },
  { value: "100%", label: "Founder-led strategy" },
  { value: "AEO", label: "AI engine optimized" },
  { value: "GEO", label: "Generative engine ready" },
];

export function MetricTicker() {
  return (
    <div className="overflow-hidden border-y border-line/60 bg-navy py-4">
      <div className="flex animate-[ticker_30s_linear_infinite] gap-0 whitespace-nowrap">
        {[...metrics, ...metrics].map((m, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 px-8">
            <span className="font-mono text-sm font-bold text-cloud">{m.value}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-mid">{m.label}</span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
