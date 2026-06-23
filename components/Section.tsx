import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  variant?: "default" | "navy";
  id?: string;
};

export function Section({ eyebrow, title, intro, children, variant = "default", id }: SectionProps) {
  const bg = variant === "navy" ? "bg-navy" : "";

  return (
    <section id={id} className={`px-5 py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-mint">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-black tracking-tight text-cloud md:text-5xl">{title}</h2>
            )}
            {intro && (
              <p className="mt-5 text-lg leading-8 text-mist">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
