const posts = [
  { label: "SEO audit", tag: "SEO" },
  { label: "Growth map", tag: "Strategy" },
  { label: "Reel hooks", tag: "Social" },
  { label: "Case study", tag: "Proof" },
  { label: "Content sprint", tag: "Content" },
  { label: "Topic cluster", tag: "Semantic" },
  { label: "Brand proof", tag: "Trust" },
  { label: "Analytics", tag: "Data" },
  { label: "Lead path", tag: "CRO" },
];

export function CreativeShowcase() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-navy p-5 shadow-2xl">
      <div className="absolute -right-20 -top-24 h-60 w-60 rounded-full bg-mint/[0.18] blur-3xl" />
      <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-orange/[0.14] blur-3xl" />
      <div className="relative grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <div className="grid grid-cols-3 gap-3">
          {posts.map((post, index) => (
            <div
              key={post.label}
              className="aspect-square rounded-2xl border border-line bg-obsidian p-4 transition hover:-translate-y-1 hover:border-mint/30"
            >
              <div className="mb-3 h-1.5 w-8 rounded-full bg-mint" />
              <p className="text-xs font-bold text-cloud">{post.label}</p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-slate-mid">
                {post.tag} · {index + 1}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] border border-line bg-obsidian p-5">
          <div className="mx-auto h-[520px] max-w-[260px] rounded-[2rem] border-[8px] border-navy bg-gradient-to-br from-navy via-obsidian to-obsidian p-5 shadow-2xl">
            <div className="mb-6 mx-auto h-5 w-20 rounded-full bg-line" />
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-mint">Seovize system</p>
            <h3 className="mt-4 font-display text-2xl font-black leading-tight text-cloud">
              Content that supports search.
            </h3>
            <p className="mt-4 text-xs leading-5 text-mist">
              Social designs, captions, reels, and pages connected to one measurable growth story.
            </p>
            <div className="mt-6 grid gap-2.5">
              <div className="rounded-xl border border-line bg-navy p-3 text-xs text-mist">SEO caption layer</div>
              <div className="rounded-xl bg-orange p-3 text-xs font-bold text-cloud">Book a strategy call →</div>
              <div className="rounded-xl border border-line bg-navy p-3 text-xs text-mist">Monthly content sprint</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
