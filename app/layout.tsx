import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vishvanathnaik.com"),
  title: { default: "Vishvanath Naik — Systems, stories & useful work", template: "%s — Vishvanath Naik" },
  description: "Projects, essays, and field notes across engineering, operations, markets, and energy.",
  openGraph: {
    title: "Vishvanath Naik — Systems, stories & useful work",
    description: "An evolving portfolio of projects, essays, and field notes.",
    type: "website",
  },
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
      </body>
    </html>
  );
}
