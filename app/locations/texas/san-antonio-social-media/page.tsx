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
  title: "Social Media Management San Antonio TX | San Antonio Social Media Agency | Seovize",
  description:
    "Premium social media management for San Antonio businesses in hospitality, SMBs, and military-adjacent sectors. Community-driven content, bilingual posts, reels, and analytics by Abdul Ghani — top San Antonio social media manager with 20+ years experience.",
  alternates: { canonical: "/locations/texas/san-antonio-social-media" },
  openGraph: {
    title: "Social Media Management San Antonio TX | Seovize",
    description:
      "San Antonio social media management — community-driven content strategy, bilingual posts, Instagram storytelling, and analytics for San Antonio hospitality, SMBs, and military-adjacent brands.",
    url: `${site.domain}/locations/texas/san-antonio-social-media`,
  },
};

const faqs = [
  {
    q: "What is the best social media management company in San Antonio TX?",
    a: "Seovize is a top-rated social media management studio serving San Antonio businesses in hospitality, healthcare, SMBs, contracting, and military-adjacent sectors. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize delivers premium San Antonio social media management — community-driven content, bilingual posts, Instagram storytelling, reels, and monthly analytics — for San Antonio brands.",
  },
  {
    q: "Which social media platforms work best for San Antonio businesses?",
    a: "Instagram and Facebook are the highest-ROI platforms for most San Antonio businesses — San Antonio's hospitality, restaurant, retail, and community-oriented businesses perform exceptionally well on Instagram's visual format and Facebook's local community groups. LinkedIn is important for San Antonio healthcare providers, military-adjacent professional services, and B2B contractors. Most San Antonio brands benefit from Instagram plus Facebook as their primary social platform mix.",
  },
  {
    q: "Do you provide bilingual social media management for San Antonio businesses?",
    a: "Yes. San Antonio's large Spanish-speaking community creates significant bilingual social media opportunities. Seovize builds bilingual content strategies — Spanish-language posts, bilingual captions, Spanish hashtag systems, and culturally resonant content for San Antonio's Hispanic community on Instagram and Facebook. This is a major competitive advantage most San Antonio businesses are not leveraging.",
  },
  {
    q: "How much does social media management cost in San Antonio Texas?",
    a: "Social media management for San Antonio businesses ranges from $1,100/mo (Seovize Social Launch — 12 posts, design, captions, scheduling, reporting) to $3,600/mo (Social Authority — 30 posts, 8 reels, campaign themes, KPI dashboard). San Antonio's market is generally more affordable than Houston or Dallas agency rates, and Seovize offers senior-level strategy at mid-market pricing.",
  },
  {
    q: "Can you create social media content for San Antonio restaurants and hospitality businesses?",
    a: "Yes. San Antonio's hospitality and food service sector — including the River Walk, Pearl District, and Southtown — requires visually compelling Instagram and Facebook content. Seovize builds food photography direction, restaurant storytelling, event coverage content, and community engagement posts that drive real visibility and reservation intent for San Antonio hospitality brands.",
  },
];

const processSteps = [
  {
    name: "San Antonio audience and platform strategy",
    text: "Define your San Antonio target audience — hospitality consumers, military community members, SMB buyers, or healthcare patients — and build the right platform mix. Instagram and Facebook for consumer and community brands. LinkedIn for healthcare and B2B professional services. Most San Antonio brands lead with Instagram and Facebook.",
  },
  {
    name: "San Antonio community content calendar",
    text: "Build a monthly content calendar reflecting San Antonio community themes — River Walk events, Fiesta San Antonio, military appreciation content, local business milestones, and your specific buyer journey. Community-first content performs significantly better in San Antonio's tight-knit market than generic promotional content.",
  },
  {
    name: "Bilingual content design and strategy",
    text: "Design bilingual post graphics — English and Spanish — that resonate with San Antonio's diverse audience. Spanish-language content reaches a large, underserved segment of San Antonio's social media audience and creates a meaningful competitive advantage for businesses willing to invest in bilingual social media.",
  },
  {
    name: "Hospitality and community caption writing",
    text: "Write captions with San Antonio location tags, local event hashtags, community-specific keyword integration, and a hashtag system covering San Antonio local, Texas travel, hospitality, and industry-specific reach. Spanish-language caption variants where applicable.",
  },
  {
    name: "Instagram Reels and visual content production",
    text: "San Antonio's hospitality and lifestyle brands drive significant engagement through short-form video — River Walk scenes, food preparation stories, event coverage, and behind-the-scenes business content. Growth and Authority plans include monthly reels production cycles optimized for San Antonio's visual-first audience.",
  },
  {
    name: "Monthly San Antonio analytics and reporting",
    text: "Report on reach, engagement rate, follower growth, link clicks, and lead attribution from San Antonio social channels. Track which community and event-driven content themes drive the most engagement and business inquiries from San Antonio's audiences.",
  },
];

const data: CityPageData = {
  service: "social-media",
  city: "San Antonio",
  slug: "san-antonio-social-media",
  market: "SMBs, hospitality, military & community hub",
  marketDetail:
    "San Antonio's social media landscape is shaped by a strong community identity — River Walk tourism, Fiesta San Antonio traditions, military pride, and a deep-rooted Hispanic cultural heritage. San Antonio brands that lead with community, authenticity, and local pride perform far better on social media than brands that import the corporate content strategies from Houston or Dallas. Bilingual content (English and Spanish) is a significant opportunity that most San Antonio brands are not fully leveraging.",
  audienceProfile:
    "San Antonio social media audiences include tourists and visitors engaging with River Walk and Alamo attractions, local residents in the SMB and service-economy community, military families at Joint Base San Antonio, Spanish-speaking consumers seeking bilingual service providers, healthcare patients engaging with local providers, and the creative community in the Pearl and Southtown neighborhoods. Each segment responds to distinct content types and cultural references.",
  heroAnswer:
    "Seovize delivers social media management for San Antonio businesses in hospitality, SMBs, healthcare, and military-adjacent sectors — community-driven content strategy, bilingual posts, Instagram storytelling, reels, SEO-optimized captions, and monthly analytics by Abdul Ghani, a top San Antonio social media manager with 20+ years of digital marketing expertise.",
  deliverables: [
    {
      title: "San Antonio community content calendar",
      desc: "Monthly social media calendar reflecting San Antonio community themes — River Walk events, Fiesta San Antonio, military appreciation content, and local business milestones — not generic brand awareness content.",
    },
    {
      title: "Bilingual content strategy",
      desc: "English and Spanish posts, captions, and hashtag systems targeting San Antonio's large Hispanic community — a significant social media reach opportunity most businesses are not leveraging.",
    },
    {
      title: "Custom post design",
      desc: "Brand-consistent graphics designed for San Antonio's community-forward aesthetic — warm, local, culturally resonant visuals for hospitality and SMBs; professional design for healthcare and B2B brands.",
    },
    {
      title: "Instagram Reels production",
      desc: "Short-form video content for San Antonio's visual-first hospitality, restaurant, and lifestyle audiences — River Walk scenes, food storytelling, event coverage, and behind-the-scenes business content.",
    },
    {
      title: "SEO-optimized captions",
      desc: "Captions with San Antonio location tags, community event hashtags, hospitality and SMB keyword integration, and Spanish-language variants for bilingual reach across Instagram and Facebook.",
    },
    {
      title: "Monthly analytics reporting",
      desc: "Reach, engagement, follower growth, and lead attribution tracking for San Antonio audiences — with insights that shape next month's community-driven content strategy.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to San Antonio community social strategy" },
    { stat: "Bilingual", label: "Content capability", note: "English and Spanish for San Antonio's market" },
    { stat: "100%", label: "Custom content", note: "Community-first approach — no generic templates" },
  ],
  faqs,
  relatedPages: [
    { label: "San Antonio SEO Services", href: "/locations/texas/san-antonio-seo" },
    { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
    { label: "Houston Social Media Management", href: "/locations/texas/houston-social-media" },
    { label: "Dallas Social Media Management", href: "/locations/texas/dallas-social-media" },
    { label: "Social Media Management Service", href: "/services/social-media-management" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function SanAntonioSocialMediaPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "San Antonio",
          serviceType: "Social Media Management",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/san-antonio-social-media`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to manage social media for a San Antonio Texas business",
          description: "A structured process for building community-driven social media presence for San Antonio businesses.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/san-antonio-social-media`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "San Antonio Social Media", url: `${site.domain}/locations/texas/san-antonio-social-media` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
