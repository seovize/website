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
  title: "Social Media Management Houston TX | Houston Social Media Agency | Seovize",
  description:
    "Premium social media management for Houston businesses in energy, healthcare, and professional services. Post design, reels, SEO captions, scheduling, and analytics by Abdul Ghani — top Houston social media manager with 20+ years experience.",
  alternates: { canonical: "/locations/texas/houston-social-media" },
  openGraph: {
    title: "Social Media Management Houston TX | Seovize",
    description:
      "Houston social media management — premium content strategy, post design, LinkedIn authority content, and analytics for Houston energy, healthcare, and professional services brands.",
    url: `${site.domain}/locations/texas/houston-social-media`,
  },
};

const faqs = [
  {
    q: "What is the best social media management company in Houston TX?",
    a: "Seovize is a top-rated social media management studio serving Houston businesses in energy, healthcare, hospitality, and professional services. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize delivers premium social media management — post design, reels, SEO-optimized captions, scheduling, and monthly analytics reporting — for Houston brands.",
  },
  {
    q: "Which social media platforms work best for Houston businesses?",
    a: "LinkedIn is the highest-ROI platform for Houston's energy sector, healthcare, and professional services firms — B2B decision-makers actively research vendors on LinkedIn. Instagram works well for Houston hospitality, restaurants, retail, and lifestyle brands. Facebook supports community-based and service-area businesses. Most Houston B2B brands benefit most from LinkedIn plus Instagram.",
  },
  {
    q: "How much does social media management cost for a Houston business?",
    a: "Social media management for Houston businesses typically ranges from $1,100/mo (Seovize Social Launch — 12 posts, design, captions, scheduling) to $3,600/mo (Social Authority — 30 posts, 8 reels, campaign themes, KPI dashboard). Freelancers may charge $500–$1,500/mo with limited capacity. Large Houston agencies start at $3,000–$6,000+/mo.",
  },
  {
    q: "Can you create LinkedIn content for Houston energy and healthcare businesses?",
    a: "Yes. Seovize specializes in B2B LinkedIn content for Houston's energy sector and Texas Medical Center-adjacent healthcare brands. This includes thought leadership posts from executives, sector expertise content, case study storytelling, and profile optimization for B2B buyer trust — all with SEO-optimized captions and strategic hashtag systems.",
  },
  {
    q: "How long does it take to see results from social media management in Houston?",
    a: "Houston businesses typically see consistent brand visibility and engagement growth within the first 30–60 days. Follower growth and measurable lead attribution from social channels typically become clear within 90 days. Houston's B2B markets require longer content cycles — LinkedIn authority builds over 3–6 months of consistent, expert-level publishing.",
  },
];

const processSteps = [
  {
    name: "Houston audience and platform audit",
    text: "Analyze your Houston target audience, current social presence, competitor content strategy, and platform performance data. Identify which platforms drive the highest engagement for your specific Houston market sector — energy, healthcare, professional services, or hospitality.",
  },
  {
    name: "Houston-specific content strategy",
    text: "Build a monthly content calendar mapped to Houston market themes — energy sector news cycles, Texas Medical Center events, Houston business community milestones, and your specific buyer journey. Not generic content — Houston market-aware planning.",
  },
  {
    name: "Brand-consistent post design",
    text: "Design custom post graphics aligned to your brand identity. For Houston energy and healthcare brands, this means professional, credibility-forward visual design — not lifestyle imagery. For hospitality and retail, high-production creative assets.",
  },
  {
    name: "SEO-optimized captions and hashtag strategy",
    text: "Write captions with semantic intent, Houston location tags, industry-specific keyword integration, and a hashtag system covering energy sector, Texas business, Houston-specific, and niche industry tags — driving both social reach and search visibility.",
  },
  {
    name: "Scheduling and publishing optimization",
    text: "Publish at platform-optimal times for Houston business audiences. B2B content performs best Tuesday–Thursday mornings on LinkedIn. Instagram reach peaks in Houston's early evening hours. We manage scheduling natively on each platform.",
  },
  {
    name: "Monthly Houston analytics reporting",
    text: "Report monthly on reach, engagement rate, follower growth, link clicks, and lead attribution for Houston audiences. Track which Houston-specific content themes drive the most business outcomes — not vanity metrics.",
  },
];

const data: CityPageData = {
  service: "social-media",
  city: "Houston",
  slug: "houston-social-media",
  market: "Energy, healthcare & professional services hub",
  marketDetail:
    "Houston's social media landscape is dominated by B2B professional audiences — energy sector executives on LinkedIn, healthcare administrators active on LinkedIn and Facebook, and professional services firms building authority through expert content. Houston's hospitality and restaurant scene is highly visual and Instagram-driven. The city's diverse demographics also create opportunities for bilingual content in the Spanish-speaking Houston community.",
  audienceProfile:
    "Houston social media audiences include energy sector professionals (engineers, executives, procurement teams), Texas Medical Center-adjacent healthcare buyers, real estate professionals in the Galleria and Woodlands markets, restaurant and hospitality consumers in Midtown and downtown, and Houston's growing tech and startup community. Each segment requires a distinct content approach and platform mix.",
  heroAnswer:
    "Seovize delivers social media management for Houston businesses in energy, healthcare, hospitality, and professional services — premium content strategy, post design, LinkedIn authority content, reels, SEO-optimized captions, and monthly analytics by Abdul Ghani, a top Houston social media manager with 20+ years of digital marketing expertise.",
  deliverables: [
    {
      title: "Houston content calendar",
      desc: "Monthly social media calendar mapped to Houston market themes, energy sector news cycles, Texas Medical Center events, and your specific buyer journey — not generic awareness content.",
    },
    {
      title: "Custom post design",
      desc: "Brand-consistent graphics designed for Houston's professional audiences. Credibility-forward for B2B brands; high-production creative for hospitality, retail, and lifestyle brands.",
    },
    {
      title: "LinkedIn authority content",
      desc: "Thought leadership posts, executive positioning content, and sector expertise articles for Houston energy, healthcare, and professional services B2B audiences — the platform where Houston's decision-makers spend time.",
    },
    {
      title: "SEO-optimized captions",
      desc: "Captions with semantic intent, Houston location tags, energy sector and healthcare keyword integration, and a strategic hashtag system covering niche industry and city-level reach.",
    },
    {
      title: "Reels & short-form video",
      desc: "Scripts, direction, and editing for Instagram Reels — particularly effective for Houston hospitality, real estate, and lifestyle brands. Growth and Authority plans include monthly reels production.",
    },
    {
      title: "Monthly analytics report",
      desc: "Reach, engagement, follower growth, link clicks, and lead attribution tracking for Houston audiences — with content performance insights that shape the next month's strategy.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to Houston B2B social strategy" },
    { stat: "2–3", label: "Platforms per client", note: "Focused execution beats platform sprawl" },
    { stat: "100%", label: "Custom content", note: "No templates — real design systems per brand" },
  ],
  faqs,
  relatedPages: [
    { label: "Houston SEO Services", href: "/locations/texas/houston-seo" },
    { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
    { label: "Dallas Social Media Management", href: "/locations/texas/dallas-social-media" },
    { label: "Austin Social Media Management", href: "/locations/texas/austin-social-media" },
    { label: "Social Media Management Service", href: "/services/social-media-management" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function HoustonSocialMediaPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "Houston",
          serviceType: "Social Media Management",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/houston-social-media`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to manage social media for a Houston Texas business",
          description: "A structured process for building social media presence for Houston businesses.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/houston-social-media`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "Houston Social Media", url: `${site.domain}/locations/texas/houston-social-media` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
