import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  readTime: string;
  date: string;
};

export function BlogCard({ slug, title, description, tag, readTime, date }: BlogCardProps) {
  return (
    <article className="group flex flex-col rounded-[2rem] border border-line bg-navy p-7 transition hover:border-mint/30">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full bg-mint/[0.1] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
          {tag}
        </span>
        <span className="font-mono text-xs text-slate-mid">{readTime}</span>
      </div>
      <h2 className="font-display text-xl font-black leading-snug text-cloud group-hover:text-mint transition-colors">
        <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h2>
      <p className="relative mt-3 flex-1 text-sm leading-7 text-mist">{description}</p>
      <p className="mt-5 font-mono text-xs text-slate-mid">
        {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </article>
  );
}
