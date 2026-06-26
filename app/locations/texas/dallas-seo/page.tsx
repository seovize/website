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
  title: "SEO Services Dallas Texas | Top Dallas SEO Company | Seovize",
  description:
    "Top Dallas SEO company delivering semantic SEO, local content, and service-area page systems for Dallas–Fort Worth businesses in corporate, real estate, and B2B sectors. Expert strategy by Abdul Ghani, 20+ years experience.",
  alternates: { canonical: "/locations/texas/dallas-seo" },
  openGraph: {
    title: "SEO Services Dallas Texas | Seovize",
    description:
      "Dallas SEO services — semantic content architecture, DFW service-area pages, schema markup, and local citation building for corporate, real estate, and B2B brands in the Dallas–Fort Worth Metroplex.",
    url: `${site.domain}/locations/texas/dallas-seo`,
  },
};

const faqs = [
  {
    q: "What is the best SEO company in Dallas Texas?",
    a: "Seovize is a top-rated Dallas SEO company delivering semantic SEO, service-area page systems, and entity-first content architecture for DFW businesses. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize specializes in Dallas corporate, real estate, B2B, and professional services SEO — delivered remotely with real Dallas market knowledge.",
  },
  {
    q: "How competitive is SEO in Dallas Texas?",
    a: "Dallas is one of the most competitive SEO markets in Texas. The DFW Metroplex hosts Fortune 500 headquarters (AT&T, Toyota, Neiman Marcus), a booming real estate sector, and sophisticated B2B buyers who research multiple vendors before engaging. Outranking competitors in Dallas requires semantic SEO, topical authority depth, and strong entity signals — not just keyword optimization.",
  },
  {
    q: "How does local SEO work for a Dallas service-area business?",
    a: "Dallas service-area SEO combines dedicated landing pages for DFW neighborhoods (Plano, Frisco, McKinney, Irving, Arlington), LocalBusiness schema with Dallas/Fort Worth areaServed markup, local citation building across DFW directories, and semantic content targeting Dallas buyer intent — all without requiring a physical office in every service area.",
  },
  {
    q: "Can a Dallas real estate business rank locally with SEO?",
    a: "Yes. Dallas real estate is one of the highest-value local SEO opportunities in Texas. Seovize builds service-area pages targeting Dallas neighborhoods, suburban markets (Plano, Frisco, Allen), and property types. Combined with entity-first content and real estate schema, this creates a sustainable organic presence that outperforms paid search over time.",
  },
  {
    q: "How long does SEO take to work in Dallas?",
    a: "Lower-competition Dallas terms typically see ranking movement within 60–90 days. Competitive niches — corporate services, real estate, law firms in the DFW Metroplex — require 4–6 months for meaningful organic growth. Semantic SEO with topical cluster architecture produces more defensible, lasting results than keyword-focused campaigns.",
  },
];

const processSteps = [
  {
    name: "DFW market and competitor analysis",
    text: "Audit your current Dallas search visibility and benchmark against top DFW competitors. Identify keyword gaps in corporate, real estate, B2B, and professional services sectors. Map which DFW service areas (Plano, Frisco, Irving, Arlington) represent the highest ranking opportunity.",
  },
  {
    name: "Dallas keyword cluster mapping",
    text: "Map Dallas-specific keyword clusters per page — 'SEO company Dallas Texas', 'local SEO Dallas TX', 'DFW digital marketing', and industry-specific variations. Assign each cluster a dedicated URL to prevent cannibalization and maximize clarity for Google's indexing.",
  },
  {
    name: "Entity-first content for Dallas market",
    text: "Build semantic content tying your brand, services, founder expertise, and Dallas market context into a structured knowledge graph. Include Dallas-specific entities (DFW Metroplex, Uptown, Deep Ellum, Las Colinas), NLP co-occurrence terms, and Dallas buyer intent signals.",
  },
  {
    name: "DFW LocalBusiness schema deployment",
    text: "Deploy ProfessionalService schema with Dallas and Fort Worth areaServed City markup. Layer Service, FAQPage, HowTo, Speakable, and BreadcrumbList schema across all Dallas pages. Validate against Google Rich Results Test and Search Console.",
  },
  {
    name: "DFW neighborhood landing page system",
    text: "Build dedicated pages for key DFW markets: Dallas, Plano, Frisco, McKinney, Irving, Arlington, Fort Worth. Each page has unique market context — not boilerplate copy — targeting the distinct buyer profile for each DFW suburb.",
  },
  {
    name: "Monthly Dallas rank tracking and reporting",
    text: "Track Dallas and DFW keyword rankings weekly. Report monthly on organic traffic, GSC impressions, CTR, and featured snippet appearances. Adjust Dallas content strategy each sprint based on SERP movement and competitor shifts.",
  },
];

const data: CityPageData = {
  service: "seo",
  city: "Dallas",
  slug: "dallas-seo",
  market: "Corporate, real estate & DFW B2B hub",
  marketDetail:
    "Dallas–Fort Worth is one of the most economically dynamic markets in the United States — home to 24 Fortune 500 companies, the fastest-growing real estate market in Texas, and a massive B2B professional services ecosystem. SEO in Dallas is intensely competitive: corporate buyers conduct extensive vendor research, real estate consumers compare dozens of listings and agents, and B2B decision-makers evaluate multiple service providers before contacting any vendor.",
  audienceProfile:
    "Dallas SEO targets corporate marketing teams at DFW Fortune 500 companies, real estate agents and brokers in the Metroplex, B2B professional services buyers, law firm decision-makers, healthcare marketing teams, and the DFW SMB community across Plano, Frisco, McKinney, Allen, and the suburbs. Dallas buyers are research-intensive and respond to E-E-A-T signals, case studies, and expert authority content.",
  heroAnswer:
    "Seovize delivers SEO services for Dallas businesses in corporate, real estate, B2B, and professional services — semantic content architecture, DFW service-area page systems, entity-first optimization, and schema markup by Abdul Ghani, a top Dallas SEO expert with 20+ years of digital marketing expertise. Remote delivery, real DFW market knowledge.",
  deliverables: [
    {
      title: "DFW keyword universe",
      desc: "Comprehensive keyword map covering Dallas corporate, real estate, B2B, legal, and professional services terms — segmented by DFW service area, buyer intent, and competitive difficulty.",
    },
    {
      title: "DFW service-area page system",
      desc: "Individual landing pages for Dallas, Plano, Frisco, McKinney, Irving, Arlington, Fort Worth — each with unique content and LocalBusiness schema targeting the specific market area.",
    },
    {
      title: "Entity-first content architecture",
      desc: "Content that connects your brand, services, and Dallas market context into a knowledge graph. Every page covers the full semantic topic space — not just target keywords.",
    },
    {
      title: "Dallas LocalBusiness schema",
      desc: "ProfessionalService schema with Dallas/DFW areaServed markup, plus FAQPage, HowTo, Service, and BreadcrumbList schema across all Dallas pages.",
    },
    {
      title: "DFW citation building",
      desc: "Consistent NAP citations across Dallas business directories, DFW chamber listings, industry databases, and real estate or corporate sector platforms.",
    },
    {
      title: "Monthly Dallas SEO reporting",
      desc: "Rank tracking for Dallas and DFW target terms, organic traffic trends, GSC data, CTR analysis, and featured snippet monitoring — reported monthly with sprint priorities.",
    },
  ],
  processSteps,
  stats: [
    { stat: "20+", label: "Years SEO expertise", note: "Applied to Dallas–Fort Worth market strategy" },
    { stat: "DFW", label: "Service-area coverage", note: "Dallas, Fort Worth, and all Metroplex suburbs" },
    { stat: "100%", label: "Founder-led strategy", note: "No junior account managers" },
  ],
  faqs,
  relatedPages: [
    { label: "Dallas Social Media Management", href: "/locations/texas/dallas-social-media" },
    { label: "Texas SEO Services Hub", href: "/locations/texas/seo-services" },
    { label: "Houston SEO Services", href: "/locations/texas/houston-seo" },
    { label: "Austin SEO Services", href: "/locations/texas/austin-seo" },
    { label: "Semantic SEO Service", href: "/services/semantic-seo" },
    { label: "Texas Hub", href: "/locations/texas" },
  ],
};

export default function DallasSeoPage() {
  return (
    <>
      <JsonLd
        data={cityServiceSchema({
          city: "Dallas",
          serviceType: "SEO Services",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/dallas-seo`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to get SEO results for a Dallas Texas business",
          description: "A structured process for ranking Dallas businesses in organic search.",
          steps: processSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/dallas-seo`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "Dallas SEO", url: `${site.domain}/locations/texas/dallas-seo` },
        ])}
      />
      <CityServicePage data={data} />
    </>
  );
}
