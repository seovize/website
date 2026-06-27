import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { IndustryPageTemplate, type IndustryPageData } from "@/components/IndustryPageTemplate";
import { breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO for Consultants | Thought Leadership SEO for Independent Consultants | Seovize",
  description:
    "Semantic SEO and thought leadership content systems for independent consultants building authority at scale — entity establishment, topical authority content, LinkedIn strategy, and featured snippet optimization for consultant-specific search terms.",
  alternates: { canonical: "/industries/consultants" },
};

const faqs = [
  { q: "What is the best SEO strategy for independent consultants?", a: "Independent consultant SEO is fundamentally about entity authority — establishing you as a named expert in your specific domain. The strategy combines: a robust About and expertise page with Person schema, thought leadership content targeting the specific questions your ideal clients search, LinkedIn authority building that reinforces your search entity, and featured snippet optimization for process and framework queries specific to your consulting domain." },
  { q: "How does semantic SEO help consultants build authority?", a: "Semantic SEO helps consultants build topical authority by creating interconnected content clusters that collectively demonstrate expertise across your consulting domain. When Google sees your site consistently answering questions about strategic planning, change management, or whatever your specialization is — and your name appears as the author with consistent entity signals — it recognizes you as an authoritative source and surfaces your content for relevant queries." },
  { q: "Should consultants prioritize LinkedIn or website SEO?", a: "Both. Google's entity recognition for consultants is strengthened when your website Person schema, LinkedIn profile, and external mentions are consistent. LinkedIn content independently ranks in Google for many consultant-specific search terms — 'strategy consultant in Dallas' profiles appear in branded search results. Treat website SEO and LinkedIn as a unified entity-building system, not competing channels." },
  { q: "What content types work best for consultant SEO?", a: "The highest-performing consultant content types are: methodology and framework explainers ('what is a balanced scorecard', 'how to run a strategic planning session'), process guides with numbered steps (featured snippet eligible), case study narratives that demonstrate outcomes without revealing confidential client details, and comparative content ('consulting vs in-house strategy team'). All these formats target the research phase of buyers evaluating whether to hire a consultant." },
  { q: "How long does it take to build consultant authority through SEO?", a: "Consulting authority SEO operates on a 6–12 month horizon for meaningful results. The first 3 months establish entity signals and content infrastructure. Months 4–6 see first-page rankings for specific methodology and thought leadership terms. Months 7–12 see compound growth as topical authority strengthens and entity recognition triggers broader query coverage." },
];

const data: IndustryPageData = {
  slug: "consultants",
  industry: "Consultants",
  eyebrow: "Consultant SEO & thought leadership",
  heroAnswer:
    "Seovize builds semantic SEO and thought leadership content systems for independent consultants — entity establishment via Person schema and LinkedIn authority, topical content clusters covering your consulting domain, featured snippet optimization for methodology and process queries, and a social media system that distributes expertise content to your professional network.",
  intro:
    "Independent consultants compete on expertise. But expertise that is not visible online does not win clients. Seovize builds the digital infrastructure that makes your expertise discoverable — entity establishment that tells Google who you are and what you specialize in, topical authority content that ranks for the specific queries your ideal clients search, and a LinkedIn content system that reaches decision-makers where they spend their professional research time.",
  challenges: [
    { title: "Entity recognition for individual experts", desc: "Consultants are personal brands, not generic service providers. Your SEO strategy must establish you — by name, specialization, and track record — as a recognized entity in your domain. This requires Person schema, LinkedIn authority, and consistent content authorship across platforms." },
    { title: "Long buyer research cycles", desc: "Consulting buyers take 30–90 days from initial research to first contact. Your content must answer questions at every stage of that cycle — awareness questions ('what is change management consulting?') through decision-stage queries ('how to evaluate a strategy consultant')." },
    { title: "Competing with large consultancies", desc: "McKinsey, Deloitte, and BCG dominate generic consulting search terms. Independent consultants win through niche specificity — ranking for specific methodology terms, industry verticals, and geographic markets where large firms have no content advantage." },
  ],
  services: [
    { title: "Consultant entity establishment", desc: "Person schema, LinkedIn profile SEO, and About page architecture that establishes you as a named expert — not an anonymous consulting brand — in Google's Knowledge Graph." },
    { title: "Thought leadership content system", desc: "Monthly content production targeting methodology queries, process questions, and framework explainers in your consulting domain — designed for featured snippet capture and topical authority building." },
    { title: "LinkedIn content management", desc: "Consistent LinkedIn content strategy — expert commentary, methodology posts, industry observations, and case study formats — that builds your professional network's awareness and reinforces search entity signals." },
    { title: "Service page architecture", desc: "Dedicated service pages for each consulting offering — strategy, change management, operations, finance — with specific buyer FAQ sections, process descriptions, and featured snippet answer boxes." },
    { title: "Featured snippet targeting", desc: "Structured answer boxes and HowTo schema targeting the process and methodology questions your consulting domain owns. Consultants who capture featured snippets for specific methodologies see significant inbound query traffic." },
    { title: "Competitor and gap analysis", desc: "Identify the specific queries where large consultancies have no content and independent specialists can rank — the niche intersection of your expertise and overlooked search demand." },
  ],
  processSteps: [
    { name: "Consulting domain and keyword mapping", text: "Map your consulting specialization to specific search queries — methodology terms, industry verticals, process questions. Identify where large consultancies have thin or no content coverage in your domain." },
    { name: "Entity and brand foundation", text: "Build Person schema, optimize LinkedIn for search, and create an authoritative About page with credentials, specialization description, and client profile context." },
    { name: "Content cluster architecture", text: "Design interconnected content cluster mapping your consulting domain — pillar pages for core methodologies, cluster pages for specific questions and use cases, all linking back to your primary service pages." },
    { name: "Content production and featured snippets", text: "Produce monthly thought leadership content with featured snippet architecture — 40–55 word answer boxes for key methodology questions, numbered process lists for HowTo schema eligibility." },
    { name: "LinkedIn content system launch", text: "Build monthly LinkedIn content calendar — expert commentary, methodology explainers, industry observations, and case study fragments. Coordinate with website content to reinforce entity signals." },
    { name: "Performance and authority tracking", text: "Monitor keyword rankings, featured snippet ownership, and LinkedIn engagement growth. Track branded search query growth as entity recognition strengthens over time." },
  ],
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to consultant authority building strategy" },
    { stat: "Entity-first", label: "SEO approach", note: "Person schema, LinkedIn, and content aligned" },
    { stat: "Featured", label: "Snippet targeting", note: "Methodology and process queries prioritized" },
  ],
  faqs,
  relatedPages: [
    { label: "Semantic SEO", href: "/services/semantic-seo" },
    { label: "Content Marketing", href: "/services/content-marketing" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Texas SEO Hub", href: "/locations/texas/seo-services" },
    { label: "Dallas SEO", href: "/locations/texas/dallas-seo" },
    { label: "About Abdul Ghani", href: "/about" },
    { label: "Industries", href: "/industries" },
  ],
};

export default function ConsultantsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("seo")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(`${site.domain}/industries/consultants`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: "Consultants", url: `${site.domain}/industries/consultants` },
        ])}
      />
      <IndustryPageTemplate data={data} />
    </>
  );
}
