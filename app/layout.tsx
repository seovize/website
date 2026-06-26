import type { Metadata, Viewport } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-ibm-plex-mono", display: "swap", weight: ["500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Seovize | SEO, Semantic SEO & Social Media Systems",
    template: "%s | Seovize",
  },
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    title: "Seovize | Build authority. Capture demand.",
    description: site.description,
    // Image is provided by app/opengraph-image.tsx (generated PNG) — no SVG.
  },
  twitter: {
    card: "summary_large_image",
    title: "Seovize | SEO, Semantic SEO & Social Media Systems",
    description: site.description,
    // Image is provided by app/twitter-image.tsx (generated PNG).
  },
};

// Separate viewport export (Next.js 16) — themeColor drives the mobile
// browser chrome / status bar color for an app-like feel in both modes.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // extend under notches; pairs with safe-area insets
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1020" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <JsonLd data={organizationSchema()} />
          <JsonLd data={websiteSchema()} />
          <JsonLd data={personSchema()} />
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileActionBar />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
