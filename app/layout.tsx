import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vishvanathnaik.com"),
  title: { default: "Vishvanath Naik — Systems, stories & useful work", template: "%s — Vishvanath Naik" },
  description: "Portfolio of Vishvanath Naik: projects, experience, essays, and field notes across marketing, operations, engineering, markets, AI, and energy.",
  openGraph: {
    title: "Vishvanath Naik — Systems, stories & useful work",
    description: "Projects and experience connecting engineering, customers, operations, markets, AI, and energy.",
    url: "https://vishvanathnaik.com",
    siteName: "Vishvanath Naik",
    type: "website",
  },
  twitter: { card: "summary", title: "Vishvanath Naik — Systems, stories & useful work", description: "Projects and experience across engineering, marketing, operations, markets, AI, and energy." },
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
