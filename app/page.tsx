import Link from "next/link";
import { Button } from "@/components/Button";
import { CreativeShowcase } from "@/components/CreativeShowcase";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import { caseStudies, processSteps, seoPackages, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="noise overflow-hidden px-5 py-24 md:py-32">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
              SEO + semantic SEO + social media management
            </p>
            <h1 className="font-[var(--font-sora)] text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">
              Build authority. Capture demand.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Seovize helps U.S. growth-focused brands turn websites and social channels into clear, discoverable, conversion-ready growth systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact">Get a growth roadmap</Button>
              <Button href="/pricing" variant="secondary">See packages</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div><strong className="block text-2xl text-white">90</strong>day semantic SEO plan</div>
              <div><strong className="block text-2xl text-white">3</strong>core service lanes</div>
              <div><strong className="block text-2xl text-white">1</strong>search + social system</div>
            </div>
          </div>
          <CreativeShowcase />
        </div>
      </section>

      <Section eyebrow="What we build" title="A sharper service system than a generic agency menu." intro="Your old site tried to sell too many things at once. This structure sells the services buyers can understand, compare, and trust.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={service.href} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-teal-300/50 hover:bg-white/[0.07]">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-300">{service.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-black text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{service.description}</p>
              <p className="mt-6 text-sm font-bold text-orange-300">{service.price}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="Strategy first. Creativity with a commercial reason." intro="Every design, caption, page, and report should connect to search visibility, buyer trust, or lead generation.">
        <div className="grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-lg font-black text-slate-950">{index + 1}</span>
              <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing snapshot" title="Clear packages build trust faster." intro="Use visible pricing as a qualification filter. Keep final proposals custom, but don’t hide the starting point.">
        <PricingCards items={seoPackages} />
      </Section>

      <Section eyebrow="Proof format" title="Show outcomes, not empty portfolio blocks." intro="Replace generic screenshots and placeholder text with result-focused proof cards that explain the problem, scope, action, and result.">
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-bold text-teal-300">{study.metric}</p>
              <h3 className="mt-4 text-2xl font-black text-white">{study.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{study.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-teal-300 to-orange-300 p-10 text-slate-950 md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.28em]">Start here</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Ready to rebuild Seovize into a premium growth brand?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-800">Start with the 90-day rebuild: brand identity, service pages, semantic SEO architecture, social proof system, and Vercel deployment.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white">Book strategy call</Link>
            <a href={`mailto:${site.email}`} className="rounded-full border border-slate-950/20 px-6 py-3 text-sm font-bold">Email Seovize</a>
          </div>
        </div>
      </section>
    </>
  );
}
