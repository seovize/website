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
  title: "SEO Services Houston Texas | Top Houston SEO Company | Seovize",
  description:
    "Top Houston SEO company delivering semantic SEO, local SEO, and service-area page systems for Houston businesses in energy, healthcare, and professional services. Expert strategy by Abdul Ghani, 20+ years experience.",
  alternates: { canonical: "/locations/texas/houston-seo" },
  openGraph: {
    title: "SEO Services Houston Texas | Seovize",
    description:
      "Houston SEO services — semantic content architecture, service-area pages, schema markup, and local citation building for Houston energy, healthcare, and professional services brands.",
    url: `${site.domain}/locations/texas/houston-seo`,
  },
};

const faqs = [
  {
    q: "What is the best SEO company in Houston Texas?",
    a: "Seovize is a top-rated Houston SEO company delivering semantic SEO, local content, and service-area page systems for Houston businesses. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize specializes in entity-first content architecture and Houston-specific SEO for energy, healthcare, professional services, and SMB sectors.",
  },
  {
    q: "How does local SEO work for Houston businesses?",
    a: "Houston local SEO combines service-area page systems targeting specific Houston neighborhoods and buyer intent, LocalBusiness schema markup, Google Business Profile optimization (where eligible), local citation building across Houston directories, and semantic content clusters covering Houston's energy, healthcare, and professional services markets.",
  },
  {
    q: "How much does SEO cost for a Houston business?",
    a: "Houston SEO services typically range from $950/mo for local SEO to $4,500+/mo for full semantic SEO and authority content programs. Seovize SEO plans start at $1,250/mo (Launch SEO) and scale to $4,500/mo (Authority SEO). All plans include technical audits, keyword mapping, service-page optimization, and monthly reporting.",
  },
  {
    q: "Can a Houston service-area business rank locally without a storefront?",
    a: "Yes. Many Houston businesses operate remotely or across multiple service areas. Seovize builds ethical service-area SEO using LocalBusiness schema with areaServed fields, dedicated Houston landing pages, and citation strategies designed for mobile and remote service businesses — no fake address required.",
  },
  {
    q: "How long does SEO take to work in Houston?",
    a: "Most Houston clients see ranking movement within 60–90 days for lower-competition terms. Competitive Houston niches — energy services, healthcare marketing, law firms — typically require 4–6 months for meaningful organic growth. Semantic SEO produces more durable rankings than keyword-only approaches.",
  },
];

const processSteps = [
  {
    name: "Houston market and competitor audit",
    text: "Audit your current Houston search visibility, crawl health, Core Web Vitals, keyword gaps, and competitor positioning. Identify which Houston service areas and sectors represent your highest organic opportunity.",
  },
  {
    name: "Houston keyword cluster mapping",
    text: "Map Houston-specific keyword clusters to individual pages — no cannibalization, clear intent targeting per service area. Target terms like 'SEO services Houston TX', 'Houston SEO company', and industry-specific variations for energy, healthcare, and professional services.",
  },
  {
    name: "Semantic content architecture for Houston",
    text: "Build entity-first content tying your brand, services, Abdul Ghani's expertise, and Houston market context into a structured knowledge graph. Include NLP co-occurrence terms, Houston-specific entities, and semantic headings aligned to buyer intent.",
  },
  {
    name: "LocalBusiness and Service schema implementation",
    text: "Deploy LocalBusiness ProfessionalService schema targeting Houston with areaServed City markup. Add FAQPage, HowTo, Speakable, and BreadcrumbList schema across all Houston pages. Validate with Google Rich Results Test.",
  },
  {
    name: "Houston service-area page creation",
    text: "Build dedicated pages for Houston neighborhoods and sectors — Midtown, The Woodlands, Sugar Land, Katy — with unique market context and city-specific content that differentiates from competitor cookie-cutter location pages.",
  },
  {
    name: "Monthly Houston rank tracking and optimization",
    text: "Track Houston-specific rankings weekly. Report monthly on organic traffic, impressions, CTR, and featured snippet appearances. Optimize based on GSC data each sprint — Houston keyword trends shift with the energy sector cycle.",
  },
];

const data: CityPageData = {
  service: "seo",
  city: "Houston",
  slug: "houston-seo",
  market: "Energy, healthcare & professional services hub",
  marketDetail:
    "Houston is the energy capital of the world — home to more than 4,600 energy companies including Chevron, Shell, and Halliburton — and hosts the Texas Medical Center, the world's largest medical complex. This creates intense B2B competition in SEO: professional services, law firms, and healthcare providers compete heavily for organic search visibility in a market where buyers research extensively before contacting any vendor.",
  audienceProfile:
    "Houston SEO targets B2B decision-makers in the energy sector, healthcare administrators, medical practice managers, law firm marketing teams, real estate professionals, and professional services buyers. Houston buyers conduct deep research before engaging — long-form content, authoritative expertise signals, and structured data all drive higher trust and conversion rates than in consumer markets.",
  heroAnswer:
    "Seovize delivers SEO services for Houston businesses in energy, healthcare, and professional services — semantic content architecture, service-area page systems, entity-first optimization, and schema markup by Abdul Ghani, a top Houston SEO expert with 20+ years of digital marketing expertise. Remote delivery, real Houston market knowledge.",
  deliverables: [
    {
      title: "Houston keyword universe",
      desc: "Comprehensive keyword map covering Houston energy, healthcare, legal, real estate, and professional services search terms — segmented by intent, city area, and buyer stage.",
    },
    {
      title: "Service-area page system",
      desc: "Individual landing pages for Houston, The Woodlands, Sugar Land, Katy, Pearland, and other Houston MSA markets — each with unique content and localized schema markup.",
    },
    {
      title: "Entity-first content architecture",
      desc: "Content that connects your brand, services, and Houston market context into a knowledge graph Google can verify and rank — not keyword stuffing.",
    },
    {
      title: "LocalBusiness schema (Houston)",
      desc: "ProfessionalService schema with Houston-specific areaServed markup, plus FAQPage, HowTo, Service, and BreadcrumbList schema across all Houston pages.",
    },
    {
      title: "Houston citation building",
      desc: "Consistent NAP citations across Houston business directories, industry databases, and energy/healthcare-specific platforms to reinforce local authority signals.",
    },
    {
      title: "Monthly Houston SEO reporting",
      desc: "Rank tracking for all Houston target terms, organic traffic trends, GSC impression data, CTR analysis, and featured snippet monitoring — reported monthly.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years SEO expertise", note: "Applied to Houston market strategy" },
    { stat: "7-step", label: "Houston SEO process", note: "Audit to ranking, structured delivery" },
    { stat: "100%", label: "Founder-led strategy", note: "No account managers — direct expert access" },
  ],
  faqs,
  relatedPages: [
    { label: "Houston Social Media Management", href: "/locations/texas/houston-social-media" },
    { label: "Texas SEO Services Hub", href: "/locations/texas/seo-services" },
    { label: "Dallas SEO Services", href: "/locations/texas/dallas-seo" },
    { label: "Austin SEO Services", href: "/locations/texas/austin-seo" },
    { label: "Semantic SEO Service", href: "/services/semantic-seo" },
    { label: "Local SEO Service", href: "/services/local-seo" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function HoustonSeoPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "Houston",
          serviceType: "SEO Services",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/houston-seo`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to get SEO results for a Houston Texas business",
          description: "A structured process for ranking Houston businesses in organic search.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/houston-seo`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "Houston SEO", url: `${site.domain}/locations/texas/houston-seo` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
