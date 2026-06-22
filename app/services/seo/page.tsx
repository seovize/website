import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { serviceSchema } from "@/lib/schema";
import { seoPackages } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO Services for Growth-Focused Brands",
  description: "Technical SEO, service-page optimization, content strategy, schema, internal linking, and monthly reporting for SMB and professional-service brands.",
  alternates: { canonical: "/services/seo" },
};

export default function SeoServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">SEO services</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">SEO that fixes structure before chasing traffic.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">We improve crawlability, commercial page quality, metadata, internal links, content coverage, and conversion paths so organic traffic has a business purpose.</p>
          <div className="mt-8"><Button href="/contact">Request SEO roadmap</Button></div>
        </div>
      </section>
      <Section eyebrow="Deliverables" title="What is included">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Technical audit and priority fixes",
            "Keyword and search-intent map",
            "Service-page rewrites and metadata",
            "Schema and internal linking",
            "Content briefs and refreshes",
            "Monthly dashboard and call",
          ].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white">{item}</div>)}
        </div>
      </Section>
      <Section eyebrow="SEO packages" title="Choose the right growth level">
        <PricingCards items={seoPackages} />
      </Section>
    </>
  );
}
