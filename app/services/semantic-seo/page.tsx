import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Semantic SEO Implementation",
  description: "Entity mapping, topic architecture, schema, internal linking, and content clusters for brands that want stronger topical authority.",
  alternates: { canonical: "/services/semantic-seo" },
};

const deliverables = [
  "Entity and topic model",
  "Service-to-industry page matrix",
  "Internal-link graph",
  "FAQ and glossary layer",
  "Structured data plan",
  "Content cluster briefs",
];

export default function SemanticSeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema("semantic-seo")} />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">Semantic SEO implementation</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">Make your expertise easier for humans and search engines to understand.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Semantic SEO turns scattered services, blogs, and FAQs into a connected authority system with clear entities, page relationships, and intent-led content.</p>
          <div className="mt-8"><Button href="/contact">Build entity roadmap</Button></div>
        </div>
      </section>
      <Section eyebrow="System build" title="The semantic foundation">
        <div className="grid gap-5 md:grid-cols-3">
          {deliverables.map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white">{item}</div>)}
        </div>
      </Section>
    </>
  );
}
