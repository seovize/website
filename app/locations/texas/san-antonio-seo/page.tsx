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
  title: "SEO Services San Antonio Texas | Top San Antonio SEO Company | Seovize",
  description:
    "Top San Antonio SEO company delivering local SEO, semantic content, and service-area page systems for San Antonio SMBs, hospitality, healthcare, and contractor businesses. Expert strategy by Abdul Ghani, 20+ years experience.",
  alternates: { canonical: "/locations/texas/san-antonio-seo" },
  openGraph: {
    title: "SEO Services San Antonio Texas | Seovize",
    description:
      "San Antonio SEO services — local SEO, service-area page systems, bilingual content strategy, and schema markup for San Antonio hospitality, healthcare, SMBs, and contractor businesses.",
    url: `${site.domain}/locations/texas/san-antonio-seo`,
  },
};

const faqs = [
  {
    q: "What is the best SEO company in San Antonio Texas?",
    a: "Seovize is a top-rated San Antonio SEO company delivering local SEO, service-area page systems, and entity-first content architecture for San Antonio businesses in hospitality, healthcare, SMBs, and contracting. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize delivers real San Antonio market knowledge — not boilerplate city page SEO.",
  },
  {
    q: "How does local SEO work for San Antonio small businesses?",
    a: "San Antonio local SEO combines dedicated service-area pages targeting San Antonio neighborhoods (Stone Oak, Alamo Heights, Southtown, Helotes), LocalBusiness schema with San Antonio areaServed markup, local citation building across San Antonio directories, and Google Business Profile optimization for businesses with legitimate GBP eligibility.",
  },
  {
    q: "Can San Antonio businesses rank locally without a physical storefront?",
    a: "Yes. Many San Antonio service businesses — contractors, consultants, cleaning services, home services — operate across San Antonio without a central storefront. Seovize builds ethical service-area SEO using LocalBusiness schema with areaServed (no fake address), service-area landing pages for San Antonio neighborhoods, and citation strategies designed for mobile and remote service businesses.",
  },
  {
    q: "Do you provide bilingual SEO for San Antonio businesses?",
    a: "Yes. San Antonio's large Spanish-speaking population creates bilingual SEO opportunities that most agencies ignore. Seovize can build bilingual content strategies — Spanish-language service pages, bilingual meta optimization, and Spanish-language citation building — to reach San Antonio's Hispanic community through organic search.",
  },
  {
    q: "How long does SEO take to work in San Antonio?",
    a: "San Antonio is generally a lower-competition SEO market than Houston or Dallas for most service categories, which means faster ranking timelines. Most San Antonio clients see meaningful movement within 45–75 days for mid-competition terms. Highly competitive San Antonio niches — law firms, plumbers, HVAC — require 3–5 months for significant organic growth.",
  },
];

const processSteps = [
  {
    name: "San Antonio market and competitor audit",
    text: "Audit current San Antonio search visibility, identify keyword gaps in hospitality, healthcare, contracting, and SMB categories, and benchmark against top San Antonio competitors. San Antonio is generally less competitive than Houston or Dallas — faster ranking opportunities exist for businesses with strong on-page optimization.",
  },
  {
    name: "San Antonio keyword cluster mapping",
    text: "Map San Antonio-specific keyword clusters per page — 'SEO company San Antonio', 'local SEO San Antonio TX', and service-specific variations for hospitality, healthcare, contracting, and SMB categories. Include bilingual keyword opportunities for Spanish-language search intent.",
  },
  {
    name: "Entity-first content for San Antonio market",
    text: "Build semantic content connecting your brand, services, and San Antonio market context — the Alamo City identity, military community, River Walk tourism, and Texas Medical Center South's healthcare network. San Antonio-specific entities strengthen relevance signals for local search.",
  },
  {
    name: "San Antonio LocalBusiness schema deployment",
    text: "Deploy ProfessionalService schema with San Antonio areaServed City markup, plus neighborhood-level service area targeting for Stone Oak, Alamo Heights, Helotes, and other San Antonio MSA areas. Add FAQPage, HowTo, Speakable, and BreadcrumbList schema across all San Antonio pages.",
  },
  {
    name: "San Antonio neighborhood landing pages",
    text: "Build service-area pages for San Antonio's key neighborhoods and suburbs: North San Antonio, Stone Oak, Alamo Heights, Southtown, Helotes, Schertz, New Braunfels. Each page has unique market context — not the same boilerplate copy repeated across every San Antonio neighborhood.",
  },
  {
    name: "Monthly San Antonio rank tracking and optimization",
    text: "Track San Antonio keyword rankings weekly. Report monthly on organic traffic, impressions, CTR, and local search visibility. San Antonio's growing economy means new competitors enter the SEO space frequently — monthly optimization keeps rankings compounding forward.",
  },
];

const data: CityPageData = {
  service: "seo",
  city: "San Antonio",
  slug: "san-antonio-seo",
  market: "SMBs, hospitality, military & healthcare hub",
  marketDetail:
    "San Antonio is the seventh-largest city in the United States and one of the fastest-growing economies in Texas — driven by a booming tourism sector (River Walk, Alamo), Joint Base San Antonio (the largest U.S. military installation), a rapidly expanding healthcare sector (UT Health San Antonio), and a thriving SMB community. San Antonio's SEO landscape is generally less competitive than Houston or Dallas, creating strong ranking opportunities for businesses that invest in professional optimization.",
  audienceProfile:
    "San Antonio SEO targets SMB owners across hospitality, food service, retail, and contracting sectors; military veterans and active-duty personnel seeking local services; healthcare providers at UT Health San Antonio and Methodist Healthcare; real estate professionals in the fast-growing northern suburbs; and the city's large Spanish-speaking community seeking bilingual service providers. San Antonio buyers respond strongly to local credibility signals, community involvement, and clear service-area positioning.",
  heroAnswer:
    "Seovize delivers SEO services for San Antonio businesses in hospitality, healthcare, SMBs, and contracting — local SEO, service-area page systems, bilingual content strategy, and schema markup by Abdul Ghani, a top San Antonio SEO expert with 20+ years of digital marketing expertise. Real San Antonio market knowledge, not generic city page templates.",
  deliverables: [
    {
      title: "San Antonio keyword universe",
      desc: "Comprehensive keyword map covering San Antonio hospitality, healthcare, contracting, SMB, and bilingual (English/Spanish) search terms — segmented by neighborhood, buyer intent, and competition level.",
    },
    {
      title: "San Antonio service-area page system",
      desc: "Individual landing pages for San Antonio neighborhoods and suburbs — Stone Oak, Alamo Heights, Southtown, Helotes, Schertz, New Braunfels — each with unique content and LocalBusiness schema.",
    },
    {
      title: "Bilingual content strategy",
      desc: "Spanish-language service pages, bilingual meta optimization, and Spanish-language citation building for San Antonio's large Hispanic community — a significant organic search opportunity most agencies ignore.",
    },
    {
      title: "San Antonio LocalBusiness schema",
      desc: "ProfessionalService schema with San Antonio areaServed markup, plus FAQPage, HowTo, Service, and BreadcrumbList schema across all San Antonio pages.",
    },
    {
      title: "San Antonio citation building",
      desc: "Consistent NAP citations across San Antonio business directories, military community platforms, hospitality databases, and healthcare-adjacent directories to reinforce local authority signals.",
    },
    {
      title: "Monthly San Antonio SEO reporting",
      desc: "Rank tracking for San Antonio target terms in English and Spanish, organic traffic trends, GSC data, and featured snippet monitoring — reported monthly.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years SEO expertise", note: "Applied to San Antonio local market strategy" },
    { stat: "Bilingual", label: "Content capability", note: "English and Spanish SEO for San Antonio's market" },
    { stat: "100%", label: "Founder-led strategy", note: "No junior account managers" },
  ],
  faqs,
  relatedPages: [
    { label: "San Antonio Social Media Management", href: "/locations/texas/san-antonio-social-media" },
    { label: "Texas SEO Services Hub", href: "/locations/texas/seo-services" },
    { label: "Houston SEO Services", href: "/locations/texas/houston-seo" },
    { label: "Dallas SEO Services", href: "/locations/texas/dallas-seo" },
    { label: "Local SEO Service", href: "/services/local-seo" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function SanAntonioSeoPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "San Antonio",
          serviceType: "SEO Services",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/san-antonio-seo`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to get SEO results for a San Antonio Texas business",
          description: "A structured process for ranking San Antonio businesses in local and organic search.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/san-antonio-seo`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "San Antonio SEO", url: `${site.domain}/locations/texas/san-antonio-seo` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
