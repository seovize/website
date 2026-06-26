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
    <section id={id} className={`px-5 py-14 md:py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl md:mb-14">
            {eyebrow && (
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cloud md:text-5xl md:leading-[1.1]">{title}</h2>
            )}
            {intro && (
              <p className="mt-4 text-base leading-[1.75] text-mist md:text-lg">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
