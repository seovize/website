import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Next.js Website Design & Conversion Pages",
  description: "Modern Next.js and Tailwind websites built for SEO, speed, trust, conversion, and Vercel deployment.",
  alternates: { canonical: "/services/website-design" },
};

export default function WebsiteDesignPage() {
  return (
    <>
      <JsonLd data={serviceSchema("website-design")} />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">Website design</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">A modern website should look creative and sell clearly.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">We build fast marketing sites and landing pages with clean UI/UX, SEO metadata, semantic structure, conversion sections, and Vercel-ready deployment.</p>
          <div className="mt-8"><Button href="/contact">Plan website rebuild</Button></div>
        </div>
      </section>
      <Section eyebrow="Included" title="Production-ready website foundations">
        <div className="grid gap-5 md:grid-cols-3">
          {["Next.js App Router", "Tailwind design system", "Metadata + OG setup", "Sitemap and robots", "JSON-LD schema", "Vercel analytics ready"].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white">{item}</div>)}
        </div>
      </Section>
    </>
  );
}
