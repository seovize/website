import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Seovize proof format for SEO, social media, and conversion website systems.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">Case studies</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white md:text-7xl">Proof should show scope, action, and outcome.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Replace placeholder portfolio blocks with named proof assets, screenshots, dates, deliverables, and measurable business context.</p>
        </div>
      </section>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-bold text-teal-300">{study.metric}</p>
              <h2 className="mt-4 text-2xl font-black text-white">{study.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{study.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
