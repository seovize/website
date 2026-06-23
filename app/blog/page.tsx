import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | SEO, Semantic SEO & Social Media Insights",
  description: "Practical guides and strategy articles on semantic SEO, social media management, local SEO, and content marketing for growth-focused businesses.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Insights</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            SEO &amp; Social Media Resources
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
            Practical guides on semantic SEO, social media management, local SEO, and content strategy — written for service businesses, not just SEO practitioners.
          </p>
        </div>
      </section>

      <Section eyebrow="All articles">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              tag={post.tag}
              readTime={post.readTime}
              date={post.date}
            />
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Want strategy, not just articles?"
        subhead="Book a Growth Roadmap — a structured review of your search visibility, content gaps, and social media presence. Free, no obligation."
        primaryLabel="Get a Growth Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
