import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/site";
import { blogContent, type ContentBlock } from "@/lib/blog-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "answer":
      return (
        <div key={index} className="speakable my-8 rounded-[1.5rem] border border-mint/20 bg-navy px-7 py-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-mint">Quick answer</p>
          <p className="text-base leading-8 text-cloud">{block.text}</p>
        </div>
      );
    case "h2":
      return (
        <h2 key={index} className="mt-12 font-display text-2xl font-black tracking-tight text-cloud md:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-8 font-display text-xl font-black text-cloud">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="mt-5 text-base leading-8 text-mist">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="mt-5 space-y-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-7 text-mist">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="mt-5 space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-base leading-7 text-mist">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/[0.12] font-mono text-xs font-bold text-mint">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={index} className="my-8 rounded-[1.5rem] border border-orange/20 bg-navy p-7">
          <p className="mb-3 font-display text-lg font-black text-cloud">{block.title}</p>
          <p className="text-sm leading-7 text-mist">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug];

  return (
    <>
      <JsonLd data={articleSchema(post)} />

      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <article className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="rounded-full bg-mint/[0.1] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
              {post.tag}
            </span>
            <span className="font-mono text-xs text-slate-mid">{post.readTime}</span>
            <span className="font-mono text-xs text-slate-mid">
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>

          <h1 className="font-display text-4xl font-black leading-tight text-cloud md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl leading-9 text-mist">{post.description}</p>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-navy px-5 py-4">
            <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/abdul-ghani.jpg" alt="Abdul Ghani" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold text-cloud">Abdul Ghani</p>
              <p className="text-[10px] text-slate-mid">Founder · Seovize · Semantic SEO Specialist</p>
            </div>
          </div>

          {content ? (
            <div className="mt-8">
              {content.map((block, i) => renderBlock(block, i))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] border border-line bg-navy p-8">
              <p className="text-sm font-semibold text-mint mb-3">Article in progress</p>
              <p className="text-mist leading-7">
                Full article content for this topic is being written and will be published shortly. Contact us for immediate guidance on this topic.
              </p>
            </div>
          )}
        </div>
      </article>

      <CTABanner
        headline="Need help with this topic?"
        subhead="Book a Growth Roadmap — a free structured review of your current SEO and social media presence."
        primaryLabel="Get a Growth Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
