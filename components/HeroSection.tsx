import type { ReactNode } from "react";
import { Button } from "@/components/Button";

type CTA = { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };

type HeroSectionProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  ctas?: CTA[];
  visual?: ReactNode;
  stats?: { value: string; label: string }[];
};

export function HeroSection({ eyebrow, headline, subhead, ctas, visual, stats }: HeroSectionProps) {
  return (
    <section className="noise overflow-hidden px-5 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className={`grid items-center gap-14 ${visual ? "lg:grid-cols-[0.9fr_1.1fr]" : "max-w-4xl"}`}>
          <div>
            {eyebrow && (
              <p className="mb-5 inline-flex rounded-full border border-mint/30 bg-mint/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
              {headline}
            </h1>
            {subhead && (
              <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">{subhead}</p>
            )}
            {ctas && ctas.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-4">
                {ctas.map((cta) => (
                  <Button key={cta.href} href={cta.href} variant={cta.variant ?? "primary"}>
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
            {stats && stats.length > 0 && (
              <div className={`mt-10 grid gap-6 text-sm text-mist ${stats.length <= 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <strong className="font-mono block text-2xl font-bold text-cloud">{s.value}</strong>
                    {s.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          {visual && <div>{visual}</div>}
        </div>
      </div>
    </section>
  );
}
