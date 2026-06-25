type Props = { className?: string };

function SeoIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="22" cy="22" r="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="m33 33 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M16 26l3-3 3 3 4-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SemanticSeoIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="5" fill="currentColor"/>
      <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="39" cy="9" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="9" cy="39" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="39" cy="39" r="4" stroke="currentColor" strokeWidth="2"/>
      <line x1="13" y1="13" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="35" y1="13" x2="28" y2="20" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="13" y1="35" x2="20" y2="28" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="35" y1="35" x2="28" y2="28" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function SocialIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M14 4h20a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H26l-8 6v-6h-4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="18" cy="15" r="2" fill="currentColor"/>
      <circle cx="24" cy="15" r="2" fill="currentColor"/>
      <circle cx="30" cy="15" r="2" fill="currentColor"/>
      <path d="M8 28c0 5.5 4.5 10 10 10h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3"/>
    </svg>
  );
}

function LocalSeoIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M24 4C17.4 4 12 9.4 12 16c0 10.5 12 26 12 26s12-15.5 12-26c0-6.6-5.4-12-12-12z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="24" cy="16" r="4" fill="currentColor"/>
      <ellipse cx="24" cy="44" rx="9" ry="2.5" stroke="currentColor" strokeWidth="1.5" opacity=".3"/>
    </svg>
  );
}

function ContentIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <rect x="7" y="4" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M7 12h28" stroke="currentColor" strokeWidth="1.5" opacity=".4"/>
      <line x1="13" y1="20" x2="29" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="13" y1="26" x2="29" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="13" y1="32" x2="23" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="38" cy="36" r="8" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2"/>
      <path d="M35 36l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WebDesignIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M4 16h40" stroke="currentColor" strokeWidth="1.5" opacity=".4"/>
      <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity=".5"/>
      <circle cx="15" cy="12" r="1.5" fill="currentColor" opacity=".5"/>
      <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity=".5"/>
      <line x1="18" y1="44" x2="30" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="12" y="22" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="26" y1="23" x2="36" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="26" y1="27" x2="34" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

import type { ReactElement } from "react";

const iconMap: Record<string, (p: Props) => ReactElement> = {
  "seo": SeoIcon,
  "semantic-seo": SemanticSeoIcon,
  "social-media-management": SocialIcon,
  "local-seo": LocalSeoIcon,
  "content-marketing": ContentIcon,
  "website-design": WebDesignIcon,
};

type ServiceIconProps = {
  slug: string;
  size?: number;
  className?: string;
};

export function ServiceIcon({ slug, size = 40, className = "" }: ServiceIconProps) {
  const Icon = iconMap[slug];
  if (!Icon) return null;
  return (
    <Icon
      className={`text-mint ${className}`}
    />
  );
}
