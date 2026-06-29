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
  title: "Social Media Management Fort Worth TX | Fort Worth Social Media Agency | Seovize",
  description:
    "Social media management for Fort Worth small businesses — manufacturing, healthcare, TCU community, and West Texas cultural brands. Custom content strategy, post design, reels, and analytics by Abdul Ghani, Fort Worth social media expert with 20+ years experience.",
  alternates: { canonical: "/locations/texas/fort-worth-social-media" },
  openGraph: {
    title: "Social Media Management Fort Worth TX | Seovize",
    description:
      "Fort Worth social media management — premium content strategy, post design, and analytics for manufacturing, healthcare, hospitality, and small business brands in the Fort Worth–Arlington area.",
    url: `${site.domain}/locations/texas/fort-worth-social-media`,
  },
};

const faqs = [
  {
    q: "What is the best social media management company in Fort Worth TX?",
    a: "Seovize is a top-rated social media management studio serving Fort Worth businesses across manufacturing, healthcare, hospitality, retail, and professional services. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize delivers premium social media management — post design, reels, SEO-optimized captions, scheduling, and monthly analytics — for Fort Worth and the broader DFW-West Texas corridor.",
  },
  {
    q: "Which social media platforms work best for Fort Worth businesses?",
    a: "Fort Worth's diverse economic base requires platform strategies by sector. Manufacturing and B2B businesses thrive on LinkedIn for professional authority and referral networks. Healthcare, hospitality, and retail brands perform best on Instagram and Facebook. Fort Worth's strong cultural identity — the Stockyards, Western heritage, Fort Worth Museum District — creates authentic content opportunities that resonate across all platforms with local and tourist audiences.",
  },
  {
    q: "How much does social media management cost in Fort Worth Texas?",
    a: "Social media management for Fort Worth businesses ranges from $1,100/mo (Social Launch — 12 posts, design, captions, scheduling, reporting) to $3,600/mo (Social Authority — 30 posts, 8 reels, campaign themes, KPI dashboard). Seovize provides senior-level strategy at boutique rates — significantly below large DFW agency pricing while delivering the same quality of content and strategy.",
  },
  {
    q: "Can you manage social media for Fort Worth manufacturing and B2B companies?",
    a: "Yes. Fort Worth has one of the strongest manufacturing and industrial bases in Texas — Bell Helicopter (Bell), Lockheed Martin, BNSF Railway, and hundreds of supplier and B2B service businesses. LinkedIn is the primary platform for Fort Worth industrial and manufacturing B2B social media, with content focused on workforce culture, manufacturing expertise, industry thought leadership, and business development.",
  },
  {
    q: "Do you create social media content for Fort Worth hospitality and tourism businesses?",
    a: "Yes. The Fort Worth Stockyards, Sundance Square, the cultural district museums, and the vibrant live music and dining scene create exceptional content opportunities for Fort Worth hospitality brands. We create content that captures Fort Worth's unique Western-meets-modern identity — the authentic Texas character that differentiates Fort Worth hospitality brands from the DFW generic corporate aesthetic.",
  },
];

const processSteps = [
  {
    name: "Fort Worth audience and market analysis",
    text: "Map your Fort Worth target audience — manufacturing buyers, healthcare patients, hospitality guests, retail consumers — and identify the platform mix that reaches them. Fort Worth's market has distinct characteristics from Dallas: stronger manufacturing and industrial base, more authentic Western cultural identity, and a growing healthcare and education sector anchored by TCU and JPS Health Network.",
  },
  {
    name: "Content strategy built for Fort Worth's identity",
    text: "Develop content themes that reflect Fort Worth's authentic character — the Stockyards and Western heritage, the world-class cultural district, the strong manufacturing and working-class identity, and the growing modern urban core. Fort Worth content that leans into authentic local identity consistently outperforms DFW-generic corporate content.",
  },
  {
    name: "Brand-consistent visual design",
    text: "Design post graphics reflecting your brand identity within the Fort Worth aesthetic context. Manufacturing and industrial brands need credibility-forward, professional design. Hospitality and tourism brands benefit from Fort Worth's warm, authentic, Western-coded visual language. Healthcare and education brands need trust-first, clean design.",
  },
  {
    name: "Platform-specific caption and hashtag strategy",
    text: "Write captions with Fort Worth location tags, sector keywords, and a hashtag strategy covering #FortWorthBusiness, #FortWorthTexas, #Stockyards, #FWTX, and industry-specific tags. Different platforms require different caption lengths, tones, and CTAs — we optimize for each.",
  },
  {
    name: "Scheduling for Fort Worth audiences",
    text: "Publish at times optimized for Fort Worth's audience behavior — manufacturing and B2B content performs on LinkedIn Tuesday–Thursday 7–9am CT, consumer content on Instagram and Facebook performs Thursday–Saturday evening. Fort Worth's Central time zone post timing matters for both local and national reach.",
  },
  {
    name: "Monthly analytics and Fort Worth market reporting",
    text: "Report on reach, engagement, follower growth, and lead attribution from Fort Worth social channels. Track which Fort Worth-specific content themes — Western heritage, local business spotlight, sector expertise — drive the most profile visits and inbound inquiries each month.",
  },
];

const data: CityPageData = {
  service: "social-media",
  city: "Fort Worth",
  slug: "fort-worth-social-media",
  market: "Manufacturing, healthcare & Western cultural hub",
  marketDetail:
    "Fort Worth's social media landscape is shaped by two distinct economies: a strong industrial and manufacturing base (Bell, Lockheed Martin, BNSF) with B2B brands that need LinkedIn authority content, and a vibrant hospitality, tourism, and cultural economy anchored by the Stockyards and Museum District where authentic Fort Worth identity drives engagement. The city's Western heritage is not a gimmick — it is a genuine brand differentiator that Fort Worth businesses can leverage for content authenticity that DFW-generic brands cannot replicate.",
  audienceProfile:
    "Fort Worth social media audiences include manufacturing and industrial B2B buyers, healthcare professionals and patients at JPS Health and TCU Health Sciences, hospitality and tourism visitors to the Stockyards and Cultural District, TCU and Texas Wesleyan student and alumni communities, retail and restaurant consumers in the Near Southside and Sundance Square areas, and the growing technology and startup community emerging in Fort Worth's downtown corridor.",
  heroAnswer:
    "Seovize delivers social media management for Fort Worth businesses — premium content strategy, brand-specific post design, and analytics built around Fort Worth's unique market identity. From manufacturing LinkedIn authority to Stockyards-area hospitality content, we help Fort Worth businesses build audiences that convert on Instagram, Facebook, and LinkedIn.",
  deliverables: [
    {
      title: "Fort Worth market content calendar",
      desc: "Monthly social media plan reflecting Fort Worth market themes — Stockyards events, TCU season, healthcare awareness months, BNSF and aerospace industry news, and your business objectives. Content grounded in real Fort Worth market intelligence, not generic awareness topics.",
    },
    {
      title: "LinkedIn manufacturing and B2B content",
      desc: "Professional LinkedIn content for Fort Worth's strong industrial, manufacturing, and B2B business community — workforce culture, industry expertise, thought leadership, and business development content that reaches the professional buyers and partners Fort Worth's industrial economy depends on.",
    },
    {
      title: "Custom post design",
      desc: "On-brand graphics and visual identity for Fort Worth's diverse business landscape — credibility-forward for industrial and B2B, warm and authentic for hospitality and tourism, trust-building for healthcare and professional services.",
    },
    {
      title: "Fort Worth cultural content",
      desc: "Authentic content leveraging Fort Worth's unique Western heritage — Stockyards events, rodeo season, Fort Worth Symphony, Kimbell Museum — that builds genuine local community connection and differentiates your brand from generic DFW corporate content.",
    },
    {
      title: "SEO-optimized captions and hashtags",
      desc: "Captions with Fort Worth location tags, market-specific keywords, and a hashtag strategy covering #FortWorth, #FWTX, #FortWorthBusiness, and sector-specific tags that maximize organic discovery from Fort Worth's local audience.",
    },
    {
      title: "Monthly analytics reporting",
      desc: "Reach, engagement, follower growth, and lead attribution tracking for Fort Worth audiences — with insights mapped to your business development goals and Fort Worth market cycles.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to Fort Worth market strategy" },
    { stat: "DFW+", label: "Market coverage", note: "Fort Worth, Arlington, and the West Texas corridor" },
    { stat: "B2B+B2C", label: "Sector experience", note: "From manufacturing to Stockyards hospitality" },
  ],
  faqs,
  relatedPages: [
    { label: "Dallas Social Media Management", href: "/locations/texas/dallas-social-media" },
    { label: "Texas Social Media Management", href: "/locations/texas/social-media-management" },
    { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
    { label: "Houston Social Media Management", href: "/locations/texas/houston-social-media" },
    { label: "Austin Social Media Management", href: "/locations/texas/austin-social-media" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function FortWorthSocialMediaPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "Fort Worth",
          serviceType: "Social Media Management",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/fort-worth-social-media`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to manage social media for a Fort Worth Texas business",
          description: "A structured process for building social media presence in the Fort Worth market.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/fort-worth-social-media`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "Fort Worth Social Media", url: `${site.domain}/locations/texas/fort-worth-social-media` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
