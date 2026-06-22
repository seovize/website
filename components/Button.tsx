import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-teal-300 text-slate-950 hover:bg-teal-200 shadow-[0_0_45px_rgba(45,212,191,0.25)]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </Link>
  );
}
