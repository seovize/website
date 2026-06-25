import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Semantic SEO, Social Media & Texas Marketing",
  description: "Expert articles on semantic SEO, local SEO, social media management, and digital marketing strategy from Abdul Ghani, founder of Seovize.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <section className="noise px-5 pb-16 pt-20 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Seovize blog</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Expert-level SEO & social media insights.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            Strategy, frameworks, and tactical guides on semantic SEO, local search, and social media management — written by a 20+ year practitioner, not a content mill.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>
      <CTABanner headline="Want a custom SEO or social media strategy?" subhead="Book a free Growth Roadmap call — a structured review of your search visibility, content gaps, and conversion path." primaryLabel="Get a Growth Roadmap" primaryHref="/contact" />
    </>
  );
}
