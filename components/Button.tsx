import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "md", className = "" }: ButtonProps) {
  const sizeClasses = {
    sm: "min-h-[36px] px-4 py-2 text-xs",
    md: "min-h-[44px] px-6 py-3 text-sm",
    lg: "min-h-[52px] px-8 py-4 text-base",
  };

  const variantClasses = {
    primary: "bg-orange text-cloud font-bold hover:bg-orange/90 dark:shadow-[0_0_45px_rgba(249,115,22,0.28)]",
    secondary: "border border-line bg-navy text-cloud font-semibold hover:bg-navy/80 hover:border-mint/50",
    ghost: "border border-white/20 bg-transparent text-mist font-semibold hover:bg-white/5 hover:text-cloud",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
