import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vishvanathnaik.com"),
  title: { default: "Vishvanath Naik — Research, Operations & Sustainability", template: "%s — Vishvanath Naik" },
  description: "Independent research and project support for startups and SMEs across urban impact, market research, operations, program management, and sustainability reporting.",
  openGraph: {
    title: "Vishvanath Naik — Research, Operations & Sustainability",
    description: "Research and project support connecting markets, operations, urban systems, and credible sustainability evidence.",
    url: "https://vishvanathnaik.com",
    siteName: "Vishvanath Naik",
    type: "website",
  },
  twitter: { card: "summary", title: "Vishvanath Naik — Research, Operations & Sustainability", description: "Research and project support for startups and SMEs." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="site-frame">
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Vishvanath Naik", url: "https://vishvanathnaik.com", homeLocation: { "@type": "Place", name: "Berlin, Germany" }, knowsAbout: ["Chemical engineering", "Marketing", "Operations", "Customer research", "Growth strategy", "Energy", "Artificial intelligence"] }) }} />
      </body>
    </html>
  );
}
