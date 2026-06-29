export const site = {
  name: "Seovize",
  domain: "https://seovize.com",
  email: "seovizeofficial@gmail.com",
  tagline: "Build authority. Capture demand.",
  description:
    "Semantic SEO, social media management, and conversion-ready website systems for U.S. growth-focused brands.",
  twitterHandle: "@seovizeofficial",
};

export const navItems = [
  { label: "Services", href: "/services/seo" },
  { label: "Semantic SEO", href: "/services/semantic-seo" },
  { label: "Social Media", href: "/services/social-media-management" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "seo",
    title: "SEO Services",
    eyebrow: "Search visibility",
    description:
      "Technical SEO, service-page optimization, content systems, internal linking, schema, and reporting built to increase qualified organic demand.",
    outcomes: ["Cleaner site architecture", "Higher-intent content", "Stronger conversion paths"],
    price: "From $1,250/mo",
    href: "/services/seo",
    icon: "search",
    deliverables: [
      "Technical SEO audit and fix list",
      "Keyword universe and opportunity map",
      "Homepage + 5 service-page optimizations",
      "Monthly content briefs and refreshes",
      "Internal linking and schema implementation",
      "GA4 + Google Search Console setup and monthly report",
    ],
    faqs: [
      { q: "How long before I see results?", a: "Most clients see meaningful ranking movement within 60–90 days for lower-competition terms. Competitive niches typically take 4–6 months for significant organic growth." },
      { q: "Do you write the content too?", a: "Yes. All SEO plans include content briefs and page rewrites. Growth and Authority plans include fully written pages each month." },
      { q: "What makes your SEO different?", a: "We focus on semantic structure — not just keywords. Pages are built around entity clarity, buyer intent, and content architecture, which produces more durable rankings than keyword stuffing." },
    ],
  },
  {
    slug: "semantic-seo",
    title: "Semantic SEO",
    eyebrow: "Entity authority",
    description:
      "Topic mapping, entity-led page architecture, FAQ layers, service taxonomies, structured data, and internal-link graphs for long-term authority.",
    outcomes: ["Entity/topic map", "Service + industry matrix", "Schema-ready content clusters"],
    price: "From $2,200/mo",
    href: "/services/semantic-seo",
    icon: "graph",
    deliverables: [
      "Entity and topic map for your brand and services",
      "Service-page architecture and content taxonomy",
      "FAQ layer and structured data implementation",
      "Internal linking graph and anchor-text strategy",
      "Semantic content briefs aligned to buyer intent",
      "Monthly schema audit and structured data refinement",
    ],
    faqs: [
      { q: "What is semantic SEO?", a: "Semantic SEO is the practice of building page content and site architecture around entities (who/what/where) and topic clusters rather than isolated keywords — so search engines understand exactly what you do and who you serve." },
      { q: "Is semantic SEO different from regular SEO?", a: "Yes. Traditional SEO optimizes for specific keywords. Semantic SEO builds a topic model so your site has clear authority on an entire subject area, which produces broader, more defensible rankings." },
      { q: "Who needs semantic SEO most?", a: "Expert-led and service-led businesses — consultants, agencies, law firms, healthcare providers, and B2B companies — where authority signals matter more than volume." },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    eyebrow: "Local visibility",
    description:
      "Google Business Profile optimization, local citation building, service-area pages, local schema, and review systems for businesses competing in specific geographic markets.",
    outcomes: ["Google Business Profile optimized", "Local citation consistency", "Service-area page system"],
    price: "From $950/mo",
    href: "/services/local-seo",
    icon: "map",
    deliverables: [
      "Google Business Profile audit and optimization",
      "Local citation audit and consistency fix",
      "Service-area page strategy and creation",
      "Local schema markup (LocalBusiness, Service)",
      "Review acquisition strategy and templates",
      "Monthly local rank tracking and reporting",
    ],
    faqs: [
      { q: "Do I need a physical address for local SEO?", a: "Not necessarily. Service-area businesses can rank locally without a storefront. We build ethical service-area SEO strategies that don't require a fake address." },
      { q: "How important is Google Business Profile?", a: "It is the single highest-impact local SEO asset for most businesses. A fully optimized GBP (photos, posts, reviews, Q&A, services) dramatically increases map-pack visibility." },
      { q: "Can you help a Texas business rank locally?", a: "Yes. We specialize in Texas service-area SEO — including dedicated location pages, local content, and citation strategies for Texas markets." },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    eyebrow: "Creative demand",
    description:
      "Premium content planning, post design, captions, short-form reels, scheduling, platform SEO, analytics, and brand storytelling across social channels.",
    outcomes: ["Consistent visual identity", "SEO-optimized captions", "Monthly performance reports"],
    price: "From $1,100/mo",
    href: "/services/social-media-management",
    icon: "social",
    deliverables: [
      "Monthly content calendar and strategy",
      "Custom-designed post graphics and templates",
      "SEO-optimized captions and hashtag strategy",
      "Short-form reels scripting and editing",
      "Scheduling and publishing across platforms",
      "Monthly analytics report and performance review",
    ],
    faqs: [
      { q: "Which platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, TikTok, and X (Twitter). Most plans focus on 2–3 platforms depending on your audience." },
      { q: "Do you create video content?", a: "Yes. Our Growth and Authority plans include reels editing. We work from your raw footage or provide scripted direction for content creation." },
      { q: "How do you measure social media success?", a: "We track reach, engagement rate, follower growth, profile visits, link clicks, and lead attribution where measurable — not just vanity metrics." },
    ],
  },
  {
    slug: "website-design",
    title: "Website Design",
    eyebrow: "Conversion design",
    description:
      "Fast, modern Next.js websites and landing pages designed around trust, speed, SEO, and strong buyer journeys.",
    outcomes: ["Modern UI/UX", "SEO-ready pages", "Vercel deployment"],
    price: "Custom quote",
    href: "/services/website-design",
    icon: "design",
    deliverables: [
      "Brand strategy and messaging review",
      "Wireframes and UX architecture",
      "Custom Next.js + Tailwind design system",
      "SEO-optimized page structure and metadata",
      "Vercel deployment and performance setup",
      "Post-launch audit and support period",
    ],
    faqs: [
      { q: "Why Next.js instead of WordPress?", a: "Next.js sites are significantly faster, more secure, and easier to maintain at scale. Vercel deployment means instant global edge performance and automatic SSL." },
      { q: "What does a website project cost?", a: "Most marketing site projects range from $4,500 to $12,000+ depending on page count, complexity, and content production. We provide a detailed quote after an initial scoping call." },
      { q: "Do you do redesigns of existing sites?", a: "Yes. We handle full redesigns from WordPress, Wix, Squarespace, or any platform to a modern Next.js stack." },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    eyebrow: "Authority content",
    description:
      "Strategic blog content, pillar pages, comparison articles, industry guides, and resource pages that build topical authority and generate qualified organic traffic.",
    outcomes: ["Topical authority content", "Organic traffic growth", "Lead-generating resources"],
    price: "From $800/mo",
    href: "/services/content-marketing",
    icon: "content",
    deliverables: [
      "Content strategy and editorial calendar",
      "Keyword-mapped article briefs",
      "SEO-optimized long-form articles (2–4/month)",
      "Pillar pages and topic cluster architecture",
      "Internal linking recommendations",
      "Content performance reporting",
    ],
    faqs: [
      { q: "How many articles per month?", a: "Plans start at 2 articles per month and scale to 6–8 for Authority plans. All articles are fully written, SEO-optimized, and ready to publish." },
      { q: "What topics do you cover?", a: "We write about your industry, your services, and buyer-intent topics that your ideal customers are searching. No generic filler content." },
      { q: "Does content marketing work for local businesses?", a: "Yes — especially for service businesses. Local and industry-specific content builds trust, answers buyer questions, and creates ranking opportunities beyond your service pages." },
    ],
  },
];

export const seoPackages = [
  {
    name: "Launch SEO",
    price: "$1,250/mo",
    bestFor: "New SMB sites, local services, low-content websites",
    features: [
      "Technical mini-audit",
      "Keyword map",
      "Homepage + 5 page optimizations",
      "2 content briefs per month",
      "2 content refreshes per month",
      "GA4/GSC setup and monthly report",
    ],
  },
  {
    name: "Growth SEO",
    price: "$2,500/mo",
    bestFor: "Established service brands and multi-service SMBs",
    featured: true,
    features: [
      "Full audit and keyword universe",
      "Service-page architecture",
      "4 content briefs per month",
      "2 new or rewritten pages per month",
      "Internal linking + schema implementation",
      "Biweekly checkpoint and dashboard",
    ],
  },
  {
    name: "Authority SEO",
    price: "$4,500/mo",
    bestFor: "Competitive niches and content-led growth",
    features: [
      "Full technical roadmap",
      "6 content briefs per month",
      "4 new/rewritten pages per month",
      "Topic clusters and light authority outreach",
      "Quarterly competitor refresh",
      "Priority reporting and strategy calls",
    ],
  },
];

export const socialPackages = [
  {
    name: "Social Launch",
    price: "$1,100/mo",
    features: ["12 posts/mo", "4 story sets", "Captions + scheduling", "Monthly analytics"],
  },
  {
    name: "Social Growth",
    price: "$2,100/mo",
    featured: true,
    features: ["20 posts/mo", "6 reels edits", "Content calendar", "Platform SEO + report deck"],
  },
  {
    name: "Social Authority",
    price: "$3,600/mo",
    features: ["24–30 posts/mo", "8 reels edits", "Campaign themes", "A/B hooks + KPI dashboard"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "We map your offer, audience, competitors, content gaps, and conversion path before any production starts.",
  },
  {
    title: "Architect",
    text: "We build the service-page map, semantic topic model, content calendar, social pillars, and reporting KPIs.",
  },
  {
    title: "Produce",
    text: "We create pages, posts, briefs, visuals, captions, schema, and landing-page sections with QA baked in.",
  },
  {
    title: "Optimize",
    text: "We review search data, social analytics, buyer behavior, and conversion signals to refine the next sprint.",
  },
];

export const caseStudies = [
  {
    title: "Local Service SEO Architecture",
    metric: "+70% modeled organic growth window",
    text: "A semantic service-page rebuild designed to improve crawlability, topic coverage, and buyer clarity across local landing pages.",
    tag: "SEO",
  },
  {
    title: "Social Content System",
    metric: "30-day creative calendar",
    text: "Premium post design, SEO captions, reels direction, scheduling, and monthly reporting for consistent brand visibility.",
    tag: "Social Media",
  },
  {
    title: "Conversion Website Rebuild",
    metric: "Next.js + Vercel stack",
    text: "A fast marketing site with metadata, sitemap, robots, structured content, and focused CTAs for qualified leads.",
    tag: "Web Design",
  },
];

export const industries = [
  {
    slug: "law-firms",
    title: "Law Firms",
    description: "SEO and content systems for attorneys who need to rank for competitive legal service terms and build trust before the call.",
    href: "/industries/law-firms",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Local SEO, social media, and content for agents and brokers competing in fast-moving geographic markets.",
    href: "/industries/real-estate",
  },
  {
    slug: "med-spas",
    title: "Med Spas",
    description: "Premium social media management, local SEO, and content for aesthetic practices ready to grow their digital presence.",
    href: "/industries/med-spas",
  },
  {
    slug: "consultants",
    title: "Consultants",
    description: "Thought leadership content, semantic SEO, and social systems for independent consultants building authority at scale.",
    href: "/industries/consultants",
  },
  {
    slug: "contractors",
    title: "Contractors",
    description: "Local SEO, Google Business Profile, and service-area pages for home service and construction businesses.",
    href: "/industries/contractors",
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    description: "Social media management, local SEO, and Google Business Profile for restaurants growing their dine-in and delivery presence.",
    href: "/industries/restaurants",
  },
];

export const blogPosts = [
  {
    slug: "what-is-semantic-seo",
    title: "What Is Semantic SEO? A Practical Guide for Service Businesses",
    description: "Semantic SEO builds topic authority by connecting entities, not just targeting keywords. Here is how it works and why it matters for service businesses.",
    tag: "Semantic SEO",
    readTime: "8 min read",
    date: "2026-01-15",
  },
  {
    slug: "social-media-manager-texas",
    title: "What Does a Social Media Manager Do for Texas Businesses?",
    description: "A breakdown of what a professional social media manager actually delivers — content planning, design, captions, scheduling, and reporting — for Texas small businesses.",
    tag: "Social Media",
    readTime: "6 min read",
    date: "2026-01-22",
  },
  {
    slug: "seo-vs-social-media-small-business",
    title: "SEO vs Social Media for Small Business: Which Should You Prioritize?",
    description: "Both build visibility, but they work differently. Here is how to decide which channel to invest in first — and when to combine them.",
    tag: "Strategy",
    readTime: "7 min read",
    date: "2026-02-01",
  },
  {
    slug: "local-seo-without-physical-address",
    title: "How Service-Area Businesses Can Win at Local SEO Without a Storefront",
    description: "You do not need a physical address to rank locally. Here is how to build an ethical, effective local SEO strategy as a remote or mobile service business.",
    tag: "Local SEO",
    readTime: "9 min read",
    date: "2026-02-10",
  },
  {
    slug: "content-calendar-texas-small-business",
    title: "How to Build a Social Media Content Calendar for a Texas Small Business",
    description: "A step-by-step process for planning 30 days of social media content that reflects your brand, serves your audience, and supports local visibility.",
    tag: "Social Media",
    readTime: "10 min read",
    date: "2026-02-18",
  },
  {
    slug: "how-many-keywords-should-i-use-for-seo",
    title: "How Many Keywords Should I Use for SEO? (2026 Answer)",
    description: "The short answer: focus on one primary keyword per page, supported by 3–5 semantically related terms. Here is the full framework — and why keyword count is the wrong question.",
    tag: "SEO",
    readTime: "7 min read",
    date: "2026-03-05",
  },
  {
    slug: "how-long-does-it-take-to-learn-seo",
    title: "How Long Does It Take to Learn SEO? A Realistic Breakdown",
    description: "You can learn the foundations of SEO in 3 months. Professional-level SEO proficiency takes 12–18 months. Here is what to expect at every stage.",
    tag: "SEO",
    readTime: "8 min read",
    date: "2026-03-12",
  },
  {
    slug: "reciprocal-links-seo",
    title: "Reciprocal Links in SEO: Do They Help or Hurt Rankings in 2026?",
    description: "Reciprocal links are not automatically bad — but link exchanges that exist purely to game rankings are. Here is how Google evaluates them and how to link safely.",
    tag: "SEO",
    readTime: "6 min read",
    date: "2026-03-20",
  },
  {
    slug: "seo-slug-guide",
    title: "What Is an SEO Slug? How to Write URL Slugs That Rank",
    description: "An SEO slug is the URL-safe part of a page address that tells Google and users what the page is about. Here is how to write slugs that improve both rankings and click-through rate.",
    tag: "SEO",
    readTime: "5 min read",
    date: "2026-03-28",
  },
  {
    slug: "social-media-management-cost-texas",
    title: "How Much Does Social Media Management Cost in Texas? (2026 Pricing Guide)",
    description: "Social media management in Texas costs $500–$8,000+/month depending on who you hire and what's included. Here is the complete 2026 pricing breakdown for small businesses — freelancers vs studios vs agencies.",
    tag: "Social Media",
    readTime: "9 min read",
    date: "2026-04-08",
  },
  {
    slug: "best-social-media-management-texas-small-business",
    title: "Best Social Media Management for Small Business in Texas (2026)",
    description: "What separates the social media management that actually grows Texas small businesses from the kind that just burns the budget? A frank guide to what works, what doesn't, and how to choose the right approach for your market.",
    tag: "Social Media",
    readTime: "11 min read",
    date: "2026-05-14",
  },
  {
    slug: "how-often-small-business-post-social-media",
    title: "How Often Should a Small Business Post on Social Media? (2026 Answer)",
    description: "The honest answer: it depends on the platform — but there are specific frequencies that research and practice confirm for small businesses. Here is the complete breakdown by platform, industry, and business type.",
    tag: "Social Media",
    readTime: "8 min read",
    date: "2026-05-28",
  },
];

export const homepageFaqs = [
  { q: "What makes Seovize different from a typical SEO agency?", a: "We focus on semantic SEO and message architecture — not just keyword rankings. Our work connects search structure, content clarity, and social systems into one coherent growth strategy rather than treating each channel as a separate silo." },
  { q: "Do you work with small businesses?", a: "Yes. Most of our clients are SMBs, expert-led service firms, and growth-stage brands that need a focused strategy — not a bloated agency retainer covering 12 different things poorly." },
  { q: "How does the pricing work?", a: "We offer monthly retainer packages for SEO, semantic SEO, and social media management. Website design projects are quoted by scope. You can view our starting pricing on the pricing page." },
  { q: "Do you work with Texas businesses?", a: "Yes. We serve Texas businesses remotely — including service-area SEO, local content, and social media management tailored to Texas markets and industries." },
  { q: "How do I get started?", a: "The best first step is a Growth Roadmap — a structured review of your current search visibility, content gaps, and conversion path. Use the contact form or email us directly to schedule one." },
];

export const texasData = {
  headline: "Serving Texas Businesses",
  subhead: "Remote SEO and social media systems for Texas service businesses, SMBs, and growth-stage brands.",
  positioning: "Seovize is a remote-first studio. We serve Texas businesses through dedicated service-area SEO, Texas-specific content, and social media management — without a physical office requirement.",
  services: ["Social media management", "Local SEO", "Semantic SEO", "Content marketing", "Website design"],
  industries: ["Law firms", "Real estate", "Med spas", "Restaurants", "Contractors", "Consultants"],
  cities: [
    {
      name: "Austin",
      slug: "austin",
      market: "Tech, startups & creative brands",
      description: "Austin's tech-driven economy demands SEO and social strategies built around B2B SaaS, startup growth, and a research-first buyer base that discovers through Google and LinkedIn before contacting any vendor.",
      topKeywords: ["social media management Austin", "SEO services Austin Texas", "digital marketing Austin TX"],
    },
    {
      name: "Dallas",
      slug: "dallas",
      market: "Corporate, real estate & B2B",
      description: "Dallas is one of the most competitive markets in Texas — Fortune 500 companies, a booming real estate sector, and sophisticated B2B buyers who evaluate multiple vendors before engaging.",
      topKeywords: ["social media management Dallas", "SEO company Dallas Texas", "real estate social media Dallas"],
    },
    {
      name: "Houston",
      slug: "houston",
      market: "Energy, healthcare & professional services",
      description: "Houston's energy sector, world-class medical center, and professional services firms need SEO and content built for high-value buyers with long research cycles.",
      topKeywords: ["social media management Houston", "SEO services Houston TX", "local SEO Houston Texas"],
    },
    {
      name: "San Antonio",
      slug: "san-antonio",
      market: "SMBs, contractors & hospitality",
      description: "San Antonio's fast-growing economy — driven by tourism, military, healthcare, and a thriving SMB sector — rewards local SEO and consistent social media visibility.",
      topKeywords: ["social media management San Antonio", "SEO San Antonio Texas", "local SEO San Antonio TX"],
    },
  ],
};

export const founder = {
  name: "Abdul Ghani",
  fullName: "Sardar Abdul Ghani",
  title: "Founder & Senior SEO Specialist",
  linkedin: "https://www.linkedin.com/in/sardarabdulghani",
  experience: "20+",
  snippet: "Abdul Ghani is an expert digital marketing strategist, semantic SEO specialist, and the founder of Seovize. Recognized as a top local SEO expert serving Texas businesses remotely, he specializes in entity-first content architecture, Google Ads optimization, Meta Ads, and social media management for service-led and expert-driven brands.",
  bio: "Abdul Ghani is a digital marketing specialist with 20+ years of experience in semantic SEO, local search optimization, Google Ads, Meta advertising, and social media management. He founded Seovize to bring entity-first SEO strategy and premium social media systems to U.S. growth-focused brands — with a particular focus on helping Texas businesses build search authority and social presence without relying on outdated keyword tactics.",
  expertise: [
    { area: "Semantic SEO", desc: "Entity mapping, topic cluster architecture, NLP-optimized content, structured data, and internal link graph systems designed for long-term search authority that survives algorithm updates." },
    { area: "Local SEO", desc: "Google Business Profile optimization, local citation building, service-area page systems, and map-pack ranking strategies for Texas and U.S. businesses — including ethical remote-service positioning." },
    { area: "Google Ads / PPC", desc: "Campaign architecture, keyword bidding strategy, Quality Score optimization, ad copy testing, and ROAS-focused account management for lead generation campaigns." },
    { area: "Meta Ads", desc: "Facebook Pixel implementation, custom audience segmentation, dynamic creative testing, full-funnel ad mapping, and conversion tracking for B2C and B2B lead generation." },
    { area: "Social Media Management", desc: "Premium content production — post design, SEO-optimized captions, reels direction, content calendars, platform SEO, and monthly analytics reporting for consistent brand growth." },
    { area: "WordPress & Shopify", desc: "Core Web Vitals optimization, technical SEO implementation, plugin performance audits, structured data, and conversion-focused page builds for both platforms." },
  ],
  knowsAbout: [
    "Search Engine Optimization",
    "Semantic SEO",
    "Entity-Based SEO",
    "Topical Authority",
    "Local SEO",
    "Google Business Profile",
    "Social Media Management",
    "Google Ads",
    "Facebook Advertising",
    "Instagram Marketing",
    "Meta Ads",
    "Shopify Optimization",
    "WordPress Development",
    "Content Marketing",
    "Schema Markup",
    "AI Engine Optimization (AEO)",
    "Generative Engine Optimization (GEO)",
  ],
};

export const semanticKeywordClusters = [
  {
    cluster: "Best Social Media Manager in Texas",
    intent: "Hire — Texas social media",
    primary: "best social media manager in Texas",
    supporting: [
      "hire social media manager Texas",
      "top social media manager Texas",
      "social media management company Texas",
      "social media agency Texas",
      "best digital marketing agency Texas",
      "professional social media manager Texas",
    ],
    lsiEntities: ["content strategy", "ROI", "community management", "Instagram Reels", "content calendar", "lead generation", "brand storytelling"],
    page: "/locations/texas/social-media-manager",
    heading: { h1: "Social Media Manager for Texas Businesses", h2s: ["What a social media manager does for Texas businesses", "Agency vs freelancer for Texas social media", "Social media management pricing in Texas", "How to choose the best social media manager"] },
  },
  {
    cluster: "Top Local SEO Expert in Texas",
    intent: "Hire — Texas SEO",
    primary: "top local SEO expert in Texas",
    supporting: [
      "best SEO company in Texas",
      "local SEO services Texas",
      "SEO expert Texas",
      "Texas SEO specialist",
      "top SEO consultant Texas",
      "SEO agency Texas small business",
    ],
    lsiEntities: ["Google Business Profile", "map pack", "service area pages", "local citations", "schema markup", "Core Web Vitals", "organic traffic"],
    page: "/locations/texas/seo-services",
    heading: { h1: "SEO Services for Texas Businesses", h2s: ["Texas local SEO strategy breakdown", "Service-area SEO without a fake address", "Texas city-by-city SEO guide", "What results to expect"] },
  },
  {
    cluster: "Who is Abdul Ghani",
    intent: "Entity disambiguation",
    primary: "who is Abdul Ghani",
    supporting: [
      "Abdul Ghani SEO expert",
      "Abdul Ghani digital marketing",
      "Seovize founder",
      "Sardar Abdul Ghani marketing manager",
      "Abdul Ghani semantic SEO",
    ],
    lsiEntities: ["Seovize", "founder", "Texas", "SEO specialist", "social media manager", "20 years experience", "Google Ads", "Meta Ads"],
    page: "/about",
    heading: { h1: "About Abdul Ghani — Founder of Seovize", h2s: ["20+ years of digital marketing expertise", "What Seovize was built to solve", "Services and specializations", "Texas market focus and remote methodology"] },
  },
  {
    cluster: "Semantic SEO Services",
    intent: "Learn + Hire — Semantic SEO",
    primary: "semantic SEO services",
    supporting: [
      "what is semantic SEO",
      "semantic SEO strategy",
      "entity-based SEO",
      "topical authority SEO",
      "NLP content optimization",
      "semantic SEO for service businesses",
    ],
    lsiEntities: ["entity graph", "Knowledge Graph", "NLP", "topic clusters", "structured data", "FAQPage schema", "internal linking", "information gain"],
    page: "/services/semantic-seo",
    heading: { h1: "Semantic SEO Implementation", h2s: ["What semantic SEO is and why it matters", "Entity mapping and topic architecture", "Schema and structured data implementation", "How semantic SEO works for service businesses"] },
  },
];
