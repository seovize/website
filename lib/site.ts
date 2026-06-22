export const site = {
  name: "Seovize",
  domain: "https://seovize.com",
  email: "seovizeofficial@gmail.com",
  tagline: "Build authority. Capture demand.",
  description:
    "SEO, semantic SEO, and social media management systems for U.S. growth-focused brands.",
};

export const navItems = [
  { label: "SEO", href: "/services/seo" },
  { label: "Semantic SEO", href: "/services/semantic-seo" },
  { label: "Social Media", href: "/services/social-media-management" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
];

export const services = [
  {
    slug: "seo",
    title: "SEO Services",
    eyebrow: "Search visibility",
    description:
      "Technical SEO, service-page optimization, content systems, internal linking, schema, and reporting built to increase qualified organic demand.",
    outcomes: ["Cleaner site architecture", "Higher-intent content", "Stronger conversion paths"],
    price: "From $1,250/mo",
    href: "/services/seo",
  },
  {
    slug: "semantic-seo",
    title: "Semantic SEO Implementation",
    eyebrow: "Entity authority",
    description:
      "Topic mapping, entity-led page architecture, FAQ layers, service taxonomies, structured data, and internal-link graphs for long-term authority.",
    outcomes: ["Entity/topic map", "Service + industry matrix", "Schema-ready content clusters"],
    price: "From $2,200/mo",
    href: "/services/semantic-seo",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    eyebrow: "Creative demand",
    description:
      "Premium content planning, post design, captions, short-form reels, scheduling, platform SEO, analytics, and brand storytelling across social channels.",
    outcomes: ["Consistent visual identity", "SEO-optimized captions", "Monthly performance reports"],
    price: "From $1,100/mo",
    href: "/services/social-media-management",
  },
  {
    slug: "website-design",
    title: "Website Design & Conversion Pages",
    eyebrow: "Conversion design",
    description:
      "Fast, modern Next.js websites and landing pages designed around trust, speed, SEO, and strong buyer journeys.",
    outcomes: ["Modern UI/UX", "SEO-ready pages", "Vercel deployment"],
    price: "Custom quote",
    href: "/services/website-design",
  },
];

export const seoPackages = [
  {
    name: "Launch SEO",
    price: "$1,250/mo",
    bestFor: "New SMB sites, local services, low-content websites",
    features: [
      "Technical mini-audit",
      "Keyword map",
      "Homepage + 5 page optimizations",
      "2 content briefs per month",
      "2 content refreshes per month",
      "GA4/GSC setup and monthly report",
    ],
  },
  {
    name: "Growth SEO",
    price: "$2,500/mo",
    bestFor: "Established service brands and multi-service SMBs",
    featured: true,
    features: [
      "Full audit and keyword universe",
      "Service-page architecture",
      "4 content briefs per month",
      "2 new or rewritten pages per month",
      "Internal linking + schema implementation",
      "Biweekly checkpoint and dashboard",
    ],
  },
  {
    name: "Authority SEO",
    price: "$4,500/mo",
    bestFor: "Competitive niches and content-led growth",
    features: [
      "Full technical roadmap",
      "6 content briefs per month",
      "4 new/rewritten pages per month",
      "Topic clusters and light authority outreach",
      "Quarterly competitor refresh",
      "Priority reporting and strategy calls",
    ],
  },
];

export const socialPackages = [
  {
    name: "Social Launch",
    price: "$1,100/mo",
    features: ["12 posts/mo", "4 story sets", "Captions + scheduling", "Monthly analytics"],
  },
  {
    name: "Social Growth",
    price: "$2,100/mo",
    featured: true,
    features: ["20 posts/mo", "6 reels edits", "Content calendar", "Platform SEO + report deck"],
  },
  {
    name: "Social Authority",
    price: "$3,600/mo",
    features: ["24–30 posts/mo", "8 reels edits", "Campaign themes", "A/B hooks + KPI dashboard"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "We map your offer, audience, competitors, content gaps, and conversion path before production starts.",
  },
  {
    title: "Architect",
    text: "We build the service-page map, semantic topic model, content calendar, social pillars, and reporting KPIs.",
  },
  {
    title: "Produce",
    text: "We create pages, posts, briefs, visuals, captions, schema, and landing-page sections with QA baked in.",
  },
  {
    title: "Optimize",
    text: "We review search data, social analytics, buyer behavior, and conversion signals to refine the next sprint.",
  },
];

export const caseStudies = [
  {
    title: "Local Service SEO Architecture",
    metric: "+70% modeled organic growth window",
    text: "A semantic service-page rebuild designed to improve crawlability, topic coverage, and buyer clarity across local landing pages.",
  },
  {
    title: "Social Content System",
    metric: "30-day creative calendar",
    text: "Premium post design, SEO captions, reels direction, scheduling, and monthly reporting for consistent brand visibility.",
  },
  {
    title: "Conversion Website Rebuild",
    metric: "Next.js + Vercel stack",
    text: "A fast marketing site with metadata, sitemap, robots, structured content, and focused CTAs for qualified leads.",
  },
];
