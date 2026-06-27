import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { IndustryPageTemplate, type IndustryPageData } from "@/components/IndustryPageTemplate";
import { breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO for Law Firms | Legal SEO Services for Texas Attorneys | Seovize",
  description:
    "Semantic SEO and content marketing for law firms competing in high-value legal search terms. Entity-first content architecture, schema markup, and featured snippet optimization for Texas attorneys by Abdul Ghani.",
  alternates: { canonical: "/industries/law-firms" },
};

const faqs = [
  { q: "What is the best SEO strategy for law firms in Texas?", a: "The most effective law firm SEO strategy combines practice area landing pages targeting high-intent keywords ('personal injury attorney Houston'), attorney entity establishment via Person schema and LinkedIn authority, FAQ content targeting questions clients search before contacting a lawyer, and local SEO for the firm's geographic service area. Schema markup — including LegalService, FAQPage, and BreadcrumbList — is essential for rich result eligibility in competitive legal search terms." },
  { q: "Can SEO replace paid ads for law firms?", a: "Organic SEO and paid legal advertising (Google Ads, Local Service Ads) serve different purposes. Paid ads deliver immediate visibility at high cost — legal CPCs often exceed $50–$200 per click. Organic SEO builds sustainable visibility that compounds over time at a fraction of the cost. The most effective law firm marketing strategies use paid ads for immediate lead flow while building organic authority to reduce long-term cost-per-case." },
  { q: "How long does SEO take to show results for law firms?", a: "Law firm SEO typically shows meaningful organic traffic growth within 4–6 months for mid-competition practice areas. Highly competitive terms — personal injury, mass tort, DUI defense in major Texas markets — require 6–12 months of sustained SEO investment. Featured snippet appearances for FAQ content can occur within 30–60 days of publishing well-structured legal answers." },
  { q: "Do you understand attorney advertising compliance rules?", a: "Yes. Seovize builds law firm SEO content within Texas Bar and ABA advertising guidelines. We do not make guarantees of outcomes, do not use client testimonials in jurisdictions where they are prohibited, and do not claim 'best' or 'top' without factual basis. All SEO content respects attorney advertising rules while maximizing search visibility." },
  { q: "What schema markup do law firms need?", a: "Law firms benefit from LegalService schema (service type, jurisdiction, price range), Attorney Person schema with bar membership and practice areas, LocalBusiness or LawFirm schema with areaServed markup, FAQPage schema for common legal questions, and BreadcrumbList schema on all practice area and location pages. Review schema (only with genuine verified reviews) can significantly improve CTR in search results." },
];

const data: IndustryPageData = {
  slug: "law-firms",
  industry: "Law Firms",
  eyebrow: "Legal SEO services",
  heroAnswer:
    "Seovize builds semantic SEO systems for law firms competing in high-value legal search terms — practice area pages targeting injury, divorce, estate, and criminal defense queries, attorney entity establishment via Person schema, FAQ content structured for featured snippets, and local SEO for Texas attorneys without a fake address requirement.",
  intro:
    "Legal SEO is one of the most competitive verticals in search marketing. Personal injury keywords in Houston and Dallas command $50–$200 CPCs in paid search. Organic rankings for practice area terms are contested by established firms with 10-year domain authority advantages. Seovize cuts through this with entity-first content architecture — establishing your attorneys as named experts, building interconnected practice area clusters, and targeting featured snippet opportunities that large firms leave uncontested.",
  challenges: [
    { title: "Extremely high keyword competition", desc: "Personal injury, family law, and criminal defense terms in Houston and Dallas are among the most competitive organic keywords in Texas. Generic keyword pages no longer break through — topical authority and entity establishment are required." },
    { title: "Attorney advertising compliance", desc: "Texas Bar and ABA rules restrict how law firms can market their services — no guaranteed outcomes, no unverified superlatives, careful use of testimonials. SEO content must be effective and compliant simultaneously." },
    { title: "Trust before the call", desc: "Legal buyers research extensively before contacting any attorney. Your SEO strategy must answer the questions they ask during research — not just rank for the final 'attorney near me' query. FAQ content and educational pages drive trust before conversion." },
  ],
  services: [
    { title: "Practice area page architecture", desc: "Dedicated landing pages for each practice area — personal injury, family law, criminal defense, estate planning — with topical authority content, featured snippet answer boxes, and LegalService schema." },
    { title: "Attorney entity establishment", desc: "Person schema, LinkedIn profile optimization, and entity disambiguation for named attorneys. Google understands who your attorneys are — not just what your firm does." },
    { title: "FAQ and educational content", desc: "Answer the questions prospective clients research before calling: 'how long does a personal injury case take', 'what to do after a car accident in Texas'. These pages drive organic traffic from early-funnel searchers who become clients." },
    { title: "Local SEO for Texas law firms", desc: "Service-area page systems for firms operating across Houston, Dallas, Austin, and San Antonio — no fake address requirements. LocalBusiness and LegalService schema with areaServed markup." },
    { title: "Technical SEO audit", desc: "Core Web Vitals, page speed, structured data validation, index coverage, and canonical architecture — critical for law firm sites that have often accumulated technical debt from years of platform changes." },
    { title: "Featured snippet targeting", desc: "Structured answer boxes targeting 'what is' and 'how does' legal questions. Law firms that capture featured snippets for common legal terms see significant traffic from buyers in the research phase." },
  ],
  processSteps: [
    { name: "Practice area and keyword audit", text: "Map your practice areas to the specific search queries your prospective clients use. Identify featured snippet opportunities in FAQ and educational content that major competitors have not captured." },
    { name: "Attorney entity establishment", text: "Build Person schema for named attorneys with bar membership, practice areas, and LinkedIn authority signals. Entity recognition for attorneys significantly improves branded and practice-area search visibility." },
    { name: "Practice area content architecture", text: "Build or rewrite practice area pages with topical authority, structured answer boxes, and FAQPage schema. Each page answers the buyer's key questions and links to related practice areas and educational content." },
    { name: "Local SEO deployment", text: "Deploy LegalService and LocalBusiness schema with Texas city areaServed markup. Build service-area pages for each city the firm actively serves — Houston, Dallas, Austin, San Antonio." },
    { name: "Citation and authority building", text: "Build consistent legal directory citations — Martindale, Avvo, Justia, FindLaw, Texas Bar referral networks. Each citation reinforces domain authority and local search relevance signals." },
    { name: "Monthly rank and compliance review", text: "Track practice area keyword rankings and featured snippet ownership. Review all content for ongoing Texas Bar advertising compliance. Report on organic traffic, impressions, and lead attribution from organic search." },
  ],
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to competitive legal SEO strategy" },
    { stat: "100%", label: "Compliance-aware", note: "All content respects Texas Bar and ABA rules" },
    { stat: "6", label: "Schema types deployed", note: "LegalService, Person, LocalBusiness, FAQ, HowTo, Breadcrumb" },
  ],
  faqs,
  relatedPages: [
    { label: "SEO Services", href: "/services/seo" },
    { label: "Semantic SEO", href: "/services/semantic-seo" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
    { label: "Houston SEO", href: "/locations/texas/houston-seo" },
    { label: "Dallas SEO", href: "/locations/texas/dallas-seo" },
    { label: "Content Marketing", href: "/services/content-marketing" },
    { label: "Industries", href: "/industries" },
  ],
};

export default function LawFirmsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(`${site.domain}/industries/law-firms`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: "Law Firms", url: `${site.domain}/industries/law-firms` },
        ])}
      />
      <IndustryPageTemplate data={data} />
    </>
  );
}
