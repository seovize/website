import type { Metadata } from "next";
import { CityServicePage, type CityPageData } from "@/components/CityServicePage";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqSchema,
  speakableSchema,
} from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO Services Dallas Texas | Seovize",
  description:
    "Dallas SEO services — semantic SEO, local content, and service-area page systems for Dallas–Fort Worth businesses in corporate, real estate, and B2B sectors. Strategy by Abdul Ghani, 20+ years experience.",
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
    a: "Seovize is a Dallas-focused SEO studio delivering semantic SEO, service-area page systems, and entity-first content architecture for DFW businesses. Founded by Abdul Ghani with 20+ years of digital marketing expertise, Seovize specializes in Dallas corporate, real estate, B2B, and professional services SEO — delivered remotely with real Dallas market knowledge.",
  },
  {
    q: "How competitive is SEO in Dallas Texas?",
    a: "Dallas is one of the most competitive SEO markets in Texas. The DFW Metroplex hosts Fortune 500 headquarters (AT&T, Toyota, Neiman Marcus), a booming real estate sector, and sophisticated B2B buyers who research multiple vendors before engaging. Outranking competitors in Dallas requires semantic SEO, topical authority depth, and strong entity signals — not just keyword optimization.",
  },
  {
    q: "How does local SEO work for a Dallas service-area business?",
    a: "Dallas service-area SEO combines content scoped to the specific DFW neighborhoods and suburbs relevant to your business, ProfessionalService schema with Dallas/Fort Worth areaServed markup (no fake street address), local citation building across DFW directories, and semantic content targeting Dallas buyer intent — all without requiring a physical office in every service area. The specific suburbs covered depend on where your business actually operates.",
  },
  {
    q: "Can a Dallas real estate business rank locally with SEO?",
    a: "Local SEO is a real, well-established channel for Dallas real estate — dedicated service-area content and entity-first structure both help. We don't promise a specific ranking outcome or timeline; results depend on your market, competition, and how many neighborhoods you're realistically targeting.",
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
    name: "DFW schema deployment",
    text: "Deploy ProfessionalService schema with Dallas and Fort Worth areaServed City markup (no fake street address). Layer Service, FAQPage, Speakable, and BreadcrumbList schema across all Dallas pages. Validate against Google's Rich Results Test and Search Console — schema improves how Google parses the page, it doesn't guarantee rich-result display.",
  },
  {
    name: "Service-area content scoped to where you operate",
    text: "Build dedicated content for the specific DFW markets you actually serve — not a blanket page for every suburb regardless of relevance. Each page reflects real market context for that area, not boilerplate copy.",
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
    "Dallas–Fort Worth is one of the largest metro economies in the United States, with a significant concentration of corporate headquarters, a large real estate sector, and a dense B2B professional services ecosystem. SEO in Dallas is intensely competitive: corporate buyers conduct extensive vendor research, real estate consumers compare dozens of listings and agents, and B2B decision-makers evaluate multiple service providers before contacting any vendor.",
  audienceProfile:
    "Dallas SEO targets corporate marketing teams at DFW Fortune 500 companies, real estate agents and brokers in the Metroplex, B2B professional services buyers, law firm decision-makers, healthcare marketing teams, and the DFW SMB community across Plano, Frisco, McKinney, Allen, and the suburbs. Dallas buyers are research-intensive and respond to E-E-A-T signals, case studies, and expert authority content.",
  heroAnswer:
    "Seovize delivers SEO services for Dallas businesses in corporate, real estate, B2B, and professional services — semantic content architecture, DFW service-area page systems, entity-first optimization, and schema markup by Abdul Ghani, a digital marketing strategist with 20+ years of experience. Remote delivery, real DFW market knowledge.",
  deliverables: [
    {
      title: "DFW keyword universe",
      desc: "Comprehensive keyword map covering Dallas corporate, real estate, B2B, legal, and professional services terms — segmented by DFW service area, buyer intent, and competitive difficulty.",
    },
    {
      title: "DFW service-area content",
      desc: "Dedicated content for the DFW markets relevant to your business, each with unique copy and ProfessionalService schema (serviceArea only — no fake address) targeting the specific market area.",
    },
    {
      title: "Entity-first content architecture",
      desc: "Content that connects your brand, services, and Dallas market context into a knowledge graph. Every page covers the full semantic topic space — not just target keywords.",
    },
    {
      title: "Dallas structured data",
      desc: "ProfessionalService schema with Dallas/DFW areaServed markup, plus FAQPage, Service, and BreadcrumbList schema across all Dallas pages — no LocalBusiness address data, since Seovize has no physical Dallas office.",
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
    { stat: "DFW", label: "Service-area coverage", note: "Dallas–Fort Worth Metroplex, remote delivery" },
    { stat: "100%", label: "Founder-led strategy", note: "No junior account managers" },
  ],
  faqs,
  relatedPages: [
    { label: "SEO Services", href: "/services/seo" },
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
