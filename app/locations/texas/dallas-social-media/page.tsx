import type { Metadata } from "next";
import { CityServicePage, type CityPageData } from "@/components/CityServicePage";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqSchema,
  howToSchema,
  speakableSchema,
} from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Management Dallas TX | Dallas Social Media Agency | Seovize",
  description:
    "Premium social media management for Dallas businesses in corporate, real estate, and DFW B2B sectors. Post design, LinkedIn authority content, reels, SEO captions, and analytics by Abdul Ghani — top Dallas social media manager with 20+ years experience.",
  alternates: { canonical: "/locations/texas/dallas-social-media" },
  openGraph: {
    title: "Social Media Management Dallas TX | Seovize",
    description:
      "Dallas social media management — premium content strategy, post design, LinkedIn authority content, and analytics for DFW corporate, real estate, and B2B brands.",
    url: `${site.domain}/locations/texas/dallas-social-media`,
  },
};

const faqs = [
  {
    q: "What is the best social media management company in Dallas TX?",
    a: "Seovize is a top-rated social media management studio serving Dallas businesses in corporate, real estate, B2B, and professional services. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize delivers premium social media management — post design, LinkedIn authority content, reels, SEO-optimized captions, scheduling, and monthly analytics — for DFW brands.",
  },
  {
    q: "Which social media platforms work best for Dallas businesses?",
    a: "LinkedIn is the highest-ROI platform for Dallas's corporate and B2B brands — DFW hosts 24 Fortune 500 companies whose buyers actively research on LinkedIn. Instagram and Facebook work well for Dallas real estate, hospitality, restaurants, and retail. Most Dallas B2B brands benefit from LinkedIn as the primary platform plus Instagram for brand personality content.",
  },
  {
    q: "How much does social media management cost in Dallas Texas?",
    a: "Social media management for Dallas businesses ranges from $1,100/mo (Seovize Social Launch — 12 posts, design, captions, scheduling, reporting) to $3,600/mo (Social Authority — 30 posts, 8 reels, campaign themes, KPI dashboard). Large Dallas agencies typically charge $3,000–$8,000+/mo. Seovize provides senior-level strategy at mid-market rates.",
  },
  {
    q: "Can you manage LinkedIn content for Dallas corporate and B2B brands?",
    a: "Yes. LinkedIn is the core platform for Dallas corporate and B2B social media strategy. Seovize builds executive thought leadership content, corporate brand storytelling, employee advocacy posts, industry insight content, and lead generation sequences for Dallas's corporate audience — all with SEO-optimized captions and strategic hashtag systems targeting DFW professional audiences.",
  },
  {
    q: "Do you create real estate social media content for Dallas agents and brokers?",
    a: "Yes. Dallas real estate social media includes property listings content, neighborhood feature posts, market insight content, client testimonial storytelling, and Instagram Reels tours — all designed around the Dallas real estate buyer and seller journey. We build content systems that generate consistent brand visibility and inbound leads for DFW agents and brokers.",
  },
];

const processSteps = [
  {
    name: "Dallas audience and platform strategy",
    text: "Analyze your Dallas target audience — corporate buyers, real estate prospects, DFW SMB consumers — and identify the right platform mix. Corporate and B2B brands prioritize LinkedIn. Real estate and hospitality brands need Instagram. Most DFW brands need 2–3 platforms with distinct content strategies per channel.",
  },
  {
    name: "DFW content calendar and themes",
    text: "Build a monthly content calendar reflecting Dallas market themes: DFW business news, real estate market updates, Dallas cultural moments, industry conferences, and your specific buyer journey milestones. Each content theme is mapped to a specific business outcome.",
  },
  {
    name: "Brand-consistent visual design",
    text: "Design post graphics matching your brand identity for DFW's sophisticated corporate audience. Professional, credibility-forward design for B2B and corporate brands. High-production lifestyle imagery for real estate, hospitality, and consumer brands.",
  },
  {
    name: "LinkedIn and cross-platform caption writing",
    text: "Write captions with semantic intent, DFW location tags, corporate and industry keyword integration, and a hashtag system covering corporate Dallas, real estate Texas, and industry-specific tags. LinkedIn captions follow a distinct structure optimized for professional audience engagement.",
  },
  {
    name: "Scheduling, publishing, and platform SEO",
    text: "Optimize LinkedIn profile SEO, Instagram bio and highlights, and Facebook business page completeness. Publish at times optimal for DFW corporate and professional audiences. B2B LinkedIn content performs best Tuesday–Thursday morning in the central time zone.",
  },
  {
    name: "Monthly Dallas analytics and reporting",
    text: "Report on reach, engagement rate, follower growth, link clicks, and lead attribution from Dallas social channels. Track which DFW-specific content themes drive the most profile visits and inbound contact requests each month.",
  },
];

const data: CityPageData = {
  service: "social-media",
  city: "Dallas",
  slug: "dallas-social-media",
  market: "Corporate, real estate & DFW B2B hub",
  marketDetail:
    "Dallas's social media landscape is shaped by its corporate identity — 24 Fortune 500 companies, a massive real estate market, and sophisticated B2B buyers who engage heavily on LinkedIn. Dallas consumers also respond strongly to Instagram for real estate, hospitality, and lifestyle brands. The DFW Metroplex's diverse demographics create opportunities for Spanish-language social content targeting Dallas's large Hispanic community.",
  audienceProfile:
    "Dallas social media audiences include corporate marketing teams at DFW Fortune 500 companies, real estate agents and buyers in the Metroplex, B2B professional services decision-makers, restaurant and hospitality consumers in Uptown and Deep Ellum, and Dallas's growing startup and creative economy. Each segment requires a distinct platform, content tone, and publishing cadence.",
  heroAnswer:
    "Seovize delivers social media management for Dallas businesses in corporate, real estate, B2B, and professional services — premium content strategy, LinkedIn authority content, post design, reels, SEO-optimized captions, and monthly analytics by Abdul Ghani, a top Dallas social media manager with 20+ years of digital marketing expertise.",
  deliverables: [
    {
      title: "DFW content calendar",
      desc: "Monthly social media calendar reflecting Dallas market themes — DFW business news, real estate cycles, corporate milestones, and your specific buyer journey — not generic awareness content.",
    },
    {
      title: "LinkedIn authority content",
      desc: "Executive thought leadership, corporate brand storytelling, and B2B authority content for Dallas's LinkedIn-dominated corporate and professional services audience.",
    },
    {
      title: "Custom post design",
      desc: "Professional, brand-consistent graphics designed for DFW's corporate audience. Credibility-forward for B2B brands; high-production visual content for real estate and hospitality.",
    },
    {
      title: "SEO-optimized captions",
      desc: "Captions with Dallas location tags, corporate keyword integration, real estate terminology, and a strategic hashtag system covering Dallas business, DFW real estate, and industry-specific reach.",
    },
    {
      title: "Real estate content systems",
      desc: "Property listing posts, neighborhood features, market insight content, and Instagram Reels tours for Dallas real estate agents and brokers — designed around the DFW buyer journey.",
    },
    {
      title: "Monthly analytics reporting",
      desc: "Reach, engagement, follower growth, and lead attribution tracking for Dallas audiences — with insights that shape the next month's DFW content strategy.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to Dallas corporate social strategy" },
    { stat: "DFW", label: "Market coverage", note: "Dallas, Fort Worth, and all Metroplex suburbs" },
    { stat: "100%", label: "Custom content", note: "No templates — real design systems per brand" },
  ],
  faqs,
  relatedPages: [
    { label: "Dallas SEO Services", href: "/locations/texas/dallas-seo" },
    { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
    { label: "Houston Social Media Management", href: "/locations/texas/houston-social-media" },
    { label: "Austin Social Media Management", href: "/locations/texas/austin-social-media" },
    { label: "Social Media Management Service", href: "/services/social-media-management" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function DallasSocialMediaPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "Dallas",
          serviceType: "Social Media Management",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/dallas-social-media`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to manage social media for a Dallas Texas business",
          description: "A structured process for building social media presence in the DFW market.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/dallas-social-media`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "Dallas Social Media", url: `${site.domain}/locations/texas/dallas-social-media` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
