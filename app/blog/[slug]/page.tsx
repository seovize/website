import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/site";

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

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

          <div className="mt-12 rounded-[2rem] border border-line bg-navy p-8">
            <p className="text-sm font-semibold text-mint mb-3">Article in progress</p>
            <p className="text-mist leading-7">
              Full article content for this topic is being written and will be published shortly. Sign up for updates or contact us for immediate guidance on this topic.
            </p>
          </div>
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
