import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { IndustryPageTemplate, type IndustryPageData } from "@/components/IndustryPageTemplate";
import { breadcrumbSchema, faqSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SEO for Med Spas | Med Spa SEO & Social Media in Texas | Seovize",
  description:
    "Premium SEO and social media management for med spas and aesthetic practices in Texas — before/after content systems, local SEO for treatment searches, Instagram Reels strategy, and compliant content marketing for Botox, fillers, and body contouring.",
  alternates: { canonical: "/industries/med-spas" },
};

const faqs = [
  { q: "What is the best SEO strategy for med spas in Texas?", a: "Texas med spa SEO focuses on treatment-specific landing pages targeting 'Botox Houston TX', 'lip fillers Austin', 'CoolSculpting Dallas', and similar high-intent local searches. Each page requires unique content with before/after context, treatment FAQ sections, and MedicalBusiness schema with areaServed markup. Instagram and Facebook are the primary social platforms for visual treatment results and new client acquisition." },
  { q: "Can I use before and after photos in med spa SEO content?", a: "Yes, with appropriate disclaimers and within Texas Medical Board and FTC guidelines. Before/after content performs well for organic search (treatment result queries) and social media reach. Seovize ensures all content meets advertising compliance requirements while maximizing SEO and social media visibility for your treatments." },
  { q: "How important is social media for med spa marketing?", a: "Critical. Med spa buyers are highly visual and discovery-driven — Instagram is the primary channel through which Texas med spas acquire new clients. Consistent Reels showing treatment processes, before/after results, and practitioner expertise drive significant new client acquisition. Seovize builds Instagram-first social media systems for aesthetic practices." },
  { q: "How do I compete with large med spa chains in local SEO?", a: "Independent Texas med spas can outrank large chains by building practitioner entity authority — Person schema for named injectors and practitioners — and creating genuine educational content about specific treatments that chains do not invest in. Local content specificity (neighborhood-level targeting, specific practitioner credentials) beats generic franchise SEO in most Texas markets." },
  { q: "Do you understand med spa advertising compliance?", a: "Yes. Seovize builds med spa content within Texas Medical Board guidelines, FTC endorsement rules for testimonials, and FDA regulations on specific treatment claims. We maximize SEO visibility while ensuring all content is compliant with the specific regulatory environment of aesthetic medicine." },
];

const data: IndustryPageData = {
  slug: "med-spas",
  industry: "Med Spas",
  eyebrow: "Med spa SEO & social media",
  heroAnswer:
    "Seovize builds SEO and social media systems for med spas and aesthetic practices in Texas — treatment-specific landing pages for Botox, fillers, and body contouring searches, Instagram Reels content showcasing results, practitioner entity establishment, local SEO with MedicalBusiness schema, and compliant content marketing within Texas Medical Board guidelines.",
  intro:
    "Med spa marketing in Texas requires an intersection of technical SEO expertise and aesthetic content production that most agencies cannot deliver. Treatment searches drive high-intent traffic at significant volume — Texas buyers actively search for specific procedures in their city before booking. Instagram drives new client discovery through visual result content. Seovize builds both systems simultaneously — optimized treatment pages for search, and a monthly Instagram content engine that converts browsers into booked appointments.",
  challenges: [
    { title: "Visual and search-driven discovery", desc: "Med spa buyers discover through Instagram visuals (Reels and before/after posts) AND through Google search ('Botox Houston'). Your marketing system must capture both — most agencies build one or the other, not both effectively." },
    { title: "Practitioner authority signals", desc: "Texas med spa buyers research practitioners by name before booking. Named practitioners with strong entity signals — Person schema, LinkedIn authority, published educational content — convert at significantly higher rates than anonymous spa brands." },
    { title: "Regulatory compliance requirements", desc: "Texas Medical Board rules, FTC testimonial guidelines, and FDA treatment claim restrictions require careful content management. Non-compliant content creates legal exposure even while it ranks." },
  ],
  services: [
    { title: "Treatment landing pages", desc: "Dedicated SEO-optimized pages for each treatment — Botox, dermal fillers, PRP, CoolSculpting, laser treatments — with FAQ sections, before/after context, and MedicalBusiness schema." },
    { title: "Instagram Reels and social content", desc: "Monthly content calendar with treatment process videos, before/after result showcases, practitioner expertise content, and booking CTAs — designed for Instagram's visual discovery algorithm." },
    { title: "Practitioner entity establishment", desc: "Person schema for named injectors and practitioners, LinkedIn profile optimization, and consistent bio content that builds recognizable expert authority in your market." },
    { title: "Local SEO for aesthetic practices", desc: "MedicalBusiness schema with areaServed markup, Google Business Profile optimization, and local citation building across medical and aesthetic directories." },
    { title: "Compliant content marketing", desc: "Educational blog content — 'What to expect from Botox', 'How long do lip fillers last in Texas heat' — that drives organic traffic from research-phase buyers within regulatory compliance guidelines." },
    { title: "Review and reputation management", desc: "Strategy for generating and managing Google and RealSelf reviews — the two highest-influence review platforms for Texas med spa buyer decisions." },
  ],
  processSteps: [
    { name: "Treatment and keyword mapping", text: "Map each treatment to its Texas search demand — treatment-specific terms plus geographic variations. Identify featured snippet opportunities in 'what is' and 'how does' treatment queries." },
    { name: "Practitioner entity setup", text: "Build Person schema for each named practitioner. Optimize LinkedIn profiles. Create practitioner bio pages on the website with credential and specialization content." },
    { name: "Treatment page build", text: "Create or rewrite treatment landing pages with semantic content, FAQ sections, before/after context with compliant disclaimers, and schema markup." },
    { name: "Instagram content system launch", text: "Build monthly Instagram content calendar — Reels production, before/after post formats, practitioner expertise posts, and client education content. Design branded visual templates." },
    { name: "Local SEO deployment", text: "Optimize Google Business Profile with treatment services, before/after photos, and weekly posts. Build MedicalBusiness schema with areaServed for each Texas city served." },
    { name: "Monthly analytics and compliance review", text: "Track treatment page rankings, Instagram reach and follower growth, booking attribution, and review generation. Review all new content for ongoing regulatory compliance." },
  ],
  stats: [
    { stat: "20+", label: "Years digital marketing", note: "Applied to aesthetic and medical practice marketing" },
    { stat: "Compliant", label: "Content approach", note: "All content within Texas Medical Board and FTC guidelines" },
    { stat: "Instagram-first", label: "Social strategy", note: "Reels and visual content optimized for new client discovery" },
  ],
  faqs,
  relatedPages: [
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
    { label: "Houston Social Media", href: "/locations/texas/houston-social-media" },
    { label: "Dallas Social Media", href: "/locations/texas/dallas-social-media" },
    { label: "Austin Social Media", href: "/locations/texas/austin-social-media" },
    { label: "Industries", href: "/industries" },
  ],
};

export default function MedSpasPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(`${site.domain}/industries/med-spas`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Industries", url: `${site.domain}/industries` },
          { name: "Med Spas", url: `${site.domain}/industries/med-spas` },
        ])}
      />
      <IndustryPageTemplate data={data} />
    </>
  );
}
