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
  title: "Social Media Management El Paso TX | El Paso Social Media Agency | Seovize",
  description:
    "Social media management for El Paso small businesses — bilingual content strategy, healthcare, military community, border trade, and retail brands. Spanish and English social media by Abdul Ghani, El Paso social media expert with 20+ years experience.",
  alternates: { canonical: "/locations/texas/el-paso-social-media" },
  openGraph: {
    title: "Social Media Management El Paso TX | Seovize",
    description:
      "El Paso social media management — bilingual English/Spanish content strategy, post design, and analytics for healthcare, retail, border trade, and military community businesses in the Sun City.",
    url: `${site.domain}/locations/texas/el-paso-social-media`,
  },
};

const faqs = [
  {
    q: "What is the best social media management company in El Paso TX?",
    a: "Seovize is a top-rated social media management studio serving El Paso businesses with bilingual English/Spanish content strategy. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize delivers premium social media management — culturally informed content, post design, captions in English and Spanish, scheduling, and monthly analytics — for El Paso businesses targeting the Sun City's bicultural audience.",
  },
  {
    q: "Do you offer bilingual social media management for El Paso businesses?",
    a: "Yes. El Paso's unique bicultural market — approximately 80% Hispanic population with deep ties to Ciudad Juárez across the border — requires content that resonates in both English and Spanish cultural contexts. Seovize creates bilingual social media content that authentically speaks to El Paso's bicultural audience: Spanish-language content for Spanish-dominant audiences, English content for bilingual and English-dominant segments, and culturally resonant content for both.",
  },
  {
    q: "Which social media platforms work best for El Paso businesses?",
    a: "Facebook remains the dominant platform for El Paso's consumer market, particularly for the 35+ demographic. Instagram performs strongly for El Paso restaurants, retail, healthcare, and lifestyle brands targeting the 18–45 age range. TikTok has significant penetration in El Paso's younger market and is growing rapidly for food, retail, and entertainment content. LinkedIn serves El Paso's military transition community (Fort Bliss veterans and transitioning service members), healthcare professionals, and border trade businesses.",
  },
  {
    q: "How much does social media management cost in El Paso Texas?",
    a: "Social media management for El Paso businesses ranges from $1,100/mo (Social Launch — 12 posts, bilingual captions, scheduling, reporting) to $3,600/mo (Social Authority — 30 posts, 8 reels, campaign themes, KPI dashboard). Seovize provides senior-level strategy at boutique rates, with bilingual content capability included as a standard part of El Paso market management.",
  },
  {
    q: "How do you target the El Paso military community on social media?",
    a: "Fort Bliss is one of the largest military installations in the United States, making El Paso's military community a significant market segment for everything from housing to healthcare to retail. Military community social media requires understanding of the transition timeline (service members preparing for civilian life), the military spouse market, and the veterans community. LinkedIn is the primary platform for military-to-civilian transition content. Facebook Groups are active for the military family community. Content that speaks specifically to military life in El Paso — PCS moves, on-post resources, veteran business support — builds strong community loyalty.",
  },
];

const processSteps = [
  {
    name: "El Paso market and audience analysis",
    text: "Map your El Paso target audience — identifying the English/Spanish language preference split, cultural context requirements, military vs. civilian demographic, and the border trade vs. domestic market focus. El Paso's bicultural market requires audience segmentation that most agencies outside the border region miss.",
  },
  {
    name: "Bilingual content strategy and calendar",
    text: "Develop a monthly content calendar that serves both English and Spanish-speaking El Paso audiences — with language and cultural tone appropriate to each post. Border market content that ignores Spanish-language audiences reaches only a fraction of El Paso's potential customers.",
  },
  {
    name: "Cultural resonance and brand identity",
    text: "Design post graphics and content angles that resonate with El Paso's bicultural identity — neither culturally generic nor stereotypically 'border content.' Authentic El Paso cultural context (Bowie High School alumni, the Juárez connection, Sun City pride, UTEP Miners fandom) builds genuine community connection.",
  },
  {
    name: "Platform-specific optimization",
    text: "Optimize content for El Paso's platform preferences — Facebook community groups for local engagement, Instagram for visual brand building and the 18–45 market, LinkedIn for military transition, healthcare, and border trade B2B content. Each platform requires different content structure and posting cadence.",
  },
  {
    name: "Border market and seasonal content",
    text: "El Paso's proximity to Ciudad Juárez creates unique content opportunities — cross-border shopping patterns, binational holidays (Día de los Muertos, Cinco de Mayo, Mexican Independence Day), and border trade seasonality that affect consumer behavior in ways that non-border Texas markets don't experience.",
  },
  {
    name: "Monthly analytics and market reporting",
    text: "Report on reach, engagement, and audience growth across El Paso's language segments — tracking whether bilingual content is reaching both English and Spanish audiences effectively, and which cultural content themes drive the most profile visits and business inquiries.",
  },
];

const data: CityPageData = {
  service: "social-media",
  city: "El Paso",
  slug: "el-paso-social-media",
  market: "Bicultural border city · Military · Healthcare hub",
  marketDetail:
    "El Paso is unlike any other Texas city — a bicultural, bilingual border community of 700,000+ with deep ties to Ciudad Juárez across the Rio Grande, one of the largest military installations in the United States (Fort Bliss), and a growing healthcare and education economy anchored by UTEP and University Medical Center. Social media management in El Paso that ignores the bilingual dimension misses 80% of the market. The brands winning in El Paso create content that authentically serves both English and Spanish-speaking audiences without defaulting to generic 'Latino-coded' content that borders feel patronizing.",
  audienceProfile:
    "El Paso social media audiences include the large Spanish-dominant Hispanic consumer market, bilingual English/Spanish professionals across healthcare, education, and government, active duty and transitioning military personnel and families at Fort Bliss, UTEP students and alumni, border trade and import/export business owners, retail and restaurant consumers in the bustling northeast and east El Paso corridors, and the growing tech and entrepreneurship community supported by UTEP's Borderlands Hub.",
  heroAnswer:
    "Seovize delivers social media management for El Paso businesses — bilingual English/Spanish content strategy, culturally resonant post design, and analytics built for the Sun City's unique bicultural market. We help El Paso businesses in healthcare, retail, hospitality, military services, and border trade build authentic local audiences from $1,100/month.",
  deliverables: [
    {
      title: "Bilingual content strategy",
      desc: "Monthly content plan with English and Spanish content appropriate to your El Paso audience segments — language-appropriate captions, culturally resonant themes, and messaging that respects the bicultural identity of the Sun City's market.",
    },
    {
      title: "El Paso cultural content calendar",
      desc: "30-day plan reflecting El Paso's unique cultural calendar — Día de los Muertos, Cinco de Mayo, Mexican Independence Day, UTEP football season, Fort Bliss community events, and the local business milestones that drive El Paso's community engagement.",
    },
    {
      title: "Custom post design",
      desc: "On-brand graphics reflecting El Paso's warm, desert aesthetic and bicultural visual identity. Professional credibility design for healthcare and B2B brands; vibrant, culturally resonant design for hospitality, retail, and community-facing businesses.",
    },
    {
      title: "Military community content",
      desc: "Content tailored to Fort Bliss's active duty, transitioning, veteran, and military family communities — a significant El Paso market segment that requires specific content angles, platform strategy (Facebook, LinkedIn), and cultural understanding.",
    },
    {
      title: "Border market seasonal strategy",
      desc: "Content strategy accounting for El Paso's unique cross-border shopping patterns, binational holiday cycles, and border trade seasonality — opportunities that non-border Texas businesses simply don't experience or know how to leverage.",
    },
    {
      title: "Monthly analytics reporting",
      desc: "Reach, engagement, and language-segment performance tracking for El Paso audiences — with insights on which content performs best across English and Spanish audience segments and which cultural themes drive the most business inquiries.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to El Paso's unique bicultural market" },
    { stat: "EN+ES", label: "Bilingual content", note: "English and Spanish content capability" },
    { stat: "700K+", label: "El Paso market", note: "Sun City's bicultural population reach" },
  ],
  faqs,
  relatedPages: [
    { label: "Texas Social Media Management", href: "/locations/texas/social-media-management" },
    { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
    { label: "Houston Social Media Management", href: "/locations/texas/houston-social-media" },
    { label: "San Antonio Social Media Management", href: "/locations/texas/san-antonio-social-media" },
    { label: "Social Media Management Service", href: "/services/social-media-management" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function ElPasoSocialMediaPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "El Paso",
          serviceType: "Social Media Management",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/el-paso-social-media`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to manage social media for an El Paso Texas business",
          description: "A bilingual, bicultural social media process for the El Paso market.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/el-paso-social-media`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "El Paso Social Media", url: `${site.domain}/locations/texas/el-paso-social-media` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
