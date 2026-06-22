const posts = [
  "SEO audit",
  "Growth map",
  "Reel hooks",
  "Case study",
  "Content sprint",
  "Topic cluster",
  "Brand proof",
  "Analytics",
  "Lead path",
];

export function CreativeShowcase() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
      <div className="absolute -right-20 -top-24 h-60 w-60 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <div className="grid grid-cols-3 gap-3">
          {posts.map((post, index) => (
            <div
              key={post}
              className="aspect-square rounded-3xl border border-white/10 bg-slate-900 p-4 transition hover:-translate-y-1 hover:bg-slate-800"
            >
              <div className="mb-3 h-2 w-10 rounded-full bg-teal-300" />
              <p className="text-sm font-bold text-white">{post}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">Post {index + 1}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-5">
          <div className="mx-auto h-[520px] max-w-[260px] rounded-[2rem] border-[10px] border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 p-5 shadow-2xl">
            <div className="mb-6 h-6 w-24 rounded-full bg-slate-800 mx-auto" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-200">Featured system</p>
            <h3 className="mt-5 text-3xl font-black leading-tight text-white">Creative content that supports search.</h3>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Social designs, captions, reels, and landing pages connected to one measurable growth story.
            </p>
            <div className="mt-8 grid gap-3">
              <div className="rounded-2xl bg-white/10 p-4 text-sm text-white">SEO caption layer</div>
              <div className="rounded-2xl bg-teal-300 p-4 text-sm font-bold text-slate-950">Book a strategy call</div>
              <div className="rounded-2xl bg-white/10 p-4 text-sm text-white">Monthly content sprint</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
