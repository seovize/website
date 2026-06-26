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
  title: "SEO Services Austin Texas | Top Austin SEO Company | Seovize",
  description:
    "Top Austin SEO company delivering semantic SEO, content architecture, and service-area page systems for Austin tech, SaaS, and startup brands. Expert strategy by Abdul Ghani, 20+ years experience.",
  alternates: { canonical: "/locations/texas/austin-seo" },
  openGraph: {
    title: "SEO Services Austin Texas | Seovize",
    description:
      "Austin SEO services — semantic content architecture, tech-sector keyword strategy, schema markup, and entity-first optimization for Austin SaaS, startup, and creative economy brands.",
    url: `${site.domain}/locations/texas/austin-seo`,
  },
};

const faqs = [
  {
    q: "What is the best SEO company in Austin Texas?",
    a: "Seovize is a top-rated Austin SEO company delivering semantic SEO, entity-first content architecture, and service-area page systems for Austin tech, SaaS, startup, and creative economy brands. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize builds SEO systems that match Austin's research-first, skeptic-buyer culture — no keyword stuffing, real topical authority.",
  },
  {
    q: "How does SEO work for Austin tech and SaaS companies?",
    a: "Austin SaaS and tech SEO focuses on topical authority content clusters, long-form educational content, pillar pages for core product categories, and entity-first optimization that builds brand authority in Google's knowledge graph. Austin's tech buyers research extensively before converting — SEO must cover the full information architecture of your product category, not just feature pages.",
  },
  {
    q: "How competitive is SEO in Austin Texas?",
    a: "Austin is one of the fastest-growing and most competitive SEO markets in the U.S. With Dell, Oracle, Apple, Google, and hundreds of VC-backed startups in the city, Austin's digital marketing landscape is sophisticated. Competing in Austin requires semantic SEO depth, topical authority, E-E-A-T signals, and expert-authored content — surface-level optimization does not work in this market.",
  },
  {
    q: "Can you help an Austin startup rank for competitive SaaS keywords?",
    a: "Yes. Seovize specializes in semantic SEO for Austin SaaS startups — building topical authority through content clusters, pillar pages, thought leadership content, and structured data that positions your brand as the authoritative source in your product category. This is how Austin startups build durable organic traffic without depending entirely on paid search.",
  },
  {
    q: "How long does SEO take to work in Austin?",
    a: "For lower-competition Austin terms, ranking movement typically appears within 60–90 days. Competitive Austin SaaS, tech, or legal markets require 4–6 months for meaningful organic growth. Building topical authority — which is essential in Austin's sophisticated market — is a 6–12 month investment that compounds significantly over time.",
  },
];

const processSteps = [
  {
    name: "Austin market and competitor landscape audit",
    text: "Audit current Austin search visibility and benchmark against Austin tech, SaaS, and startup competitors. Identify topical gaps in your content architecture — Austin's tech buyers expect category-wide coverage, not just product pages.",
  },
  {
    name: "Austin keyword cluster and topic architecture",
    text: "Map Austin-specific keyword clusters to dedicated pages — 'SEO services Austin TX', 'Austin SEO company', and SaaS or startup-specific variations. Build topic clusters covering the full semantic space of your category, not just primary keywords.",
  },
  {
    name: "Entity-first content for Austin's tech market",
    text: "Build semantic content tying your brand, founder expertise, services, and Austin market context into a structured knowledge graph. Austin's research-first buyers demand genuine topical depth — every page must demonstrate expert authority through comprehensive coverage.",
  },
  {
    name: "Austin LocalBusiness and structured data deployment",
    text: "Deploy ProfessionalService schema targeting Austin with areaServed City markup. For SaaS and tech brands, layer in Software Application or Product schema where applicable. Add FAQPage, HowTo, Speakable, and BreadcrumbList across all Austin pages.",
  },
  {
    name: "Austin content cluster and pillar page system",
    text: "Build pillar pages for core Austin topic areas and supporting cluster pages for subtopics. This is the primary authority signal for Austin's tech market — Google and AI systems both reward comprehensive topical coverage with higher rankings and featured snippet eligibility.",
  },
  {
    name: "Monthly Austin rank tracking and optimization",
    text: "Track Austin and SaaS keyword rankings weekly. Report monthly on organic traffic, impressions, CTR, and featured snippet appearances. Austin's tech market moves fast — content refresh cycles need to keep pace with category evolution and competitor content production.",
  },
];

const data: CityPageData = {
  service: "seo",
  city: "Austin",
  slug: "austin-seo",
  market: "Tech, SaaS & startup capital of Texas",
  marketDetail:
    "Austin is the fastest-growing tech city in the United States — home to Dell, Oracle, Apple, Google, Tesla, and hundreds of VC-backed SaaS startups. Austin's tech economy creates a uniquely sophisticated SEO environment: buyers are research-intensive, skeptical of surface-level content, and expect topical authority depth before engaging any vendor. Austin is also home to a thriving creative economy, hospitality sector, and university community that create diverse SEO opportunities beyond tech.",
  audienceProfile:
    "Austin SEO targets SaaS founders and product marketing teams, tech startup growth leads, B2B buyers at Austin enterprise companies, creative agency decision-makers, real estate investors in the East Austin market, and University of Texas-adjacent education and nonprofit organizations. Austin buyers have higher content expectations than most markets — thin content and keyword stuffing are immediately dismissed.",
  heroAnswer:
    "Seovize delivers SEO services for Austin businesses in tech, SaaS, startups, and creative economy brands — semantic content architecture, topical authority systems, entity-first optimization, and schema markup by Abdul Ghani, a top Austin SEO expert with 20+ years of digital marketing expertise. Built for Austin's research-first buyer culture.",
  deliverables: [
    {
      title: "Austin topical authority map",
      desc: "Comprehensive topic cluster architecture covering the full semantic space of your Austin market category — pillar pages, cluster content, and supporting resources that build genuine subject-matter authority.",
    },
    {
      title: "Austin keyword universe",
      desc: "Keyword map covering Austin tech, SaaS, startup, and creative economy search terms — segmented by intent, competition level, and content type required for ranking in Austin's sophisticated market.",
    },
    {
      title: "Entity-first content architecture",
      desc: "Content that connects your brand, founder expertise, product category, and Austin market context into a structured knowledge graph — the foundation of durable Austin rankings.",
    },
    {
      title: "Austin LocalBusiness and tech schema",
      desc: "ProfessionalService or SoftwareApplication schema targeting Austin, plus FAQPage, HowTo, Article, Speakable, and BreadcrumbList schema across all Austin pages.",
    },
    {
      title: "Austin pillar and cluster page system",
      desc: "Pillar pages for core Austin service or product categories, with supporting cluster pages covering subtopics, use cases, and buyer questions — building the topical depth Austin buyers expect.",
    },
    {
      title: "Monthly Austin SEO reporting",
      desc: "Rank tracking for Austin and SaaS/tech target terms, organic traffic trends, content performance data, and featured snippet monitoring — reported monthly with next-sprint optimization priorities.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years SEO expertise", note: "Applied to Austin tech and SaaS market strategy" },
    { stat: "Topical", label: "Authority system", note: "Pillar + cluster architecture for Austin's market" },
    { stat: "100%", label: "Founder-led strategy", note: "No junior account managers — direct expert access" },
  ],
  faqs,
  relatedPages: [
    { label: "Austin Social Media Management", href: "/locations/texas/austin-social-media" },
    { label: "Texas SEO Services Hub", href: "/locations/texas/seo-services" },
    { label: "Dallas SEO Services", href: "/locations/texas/dallas-seo" },
    { label: "Houston SEO Services", href: "/locations/texas/houston-seo" },
    { label: "Semantic SEO Service", href: "/services/semantic-seo" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function AustinSeoPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "Austin",
          serviceType: "SEO Services",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/austin-seo`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to get SEO results for an Austin Texas business",
          description: "A structured process for ranking Austin tech, SaaS, and startup businesses in organic search.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/austin-seo`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "Austin SEO", url: `${site.domain}/locations/texas/austin-seo` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
