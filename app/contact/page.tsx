import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

const links = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  ...(site.facebook ? [{ label: "Facebook", href: site.facebook }] : []),
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s explore a useful question together." intro="I’m open to full-time opportunities and thoughtful conversations across marketing, growth, operations, strategy, analytics, AI, and energy." />
      <section className="shell contact-grid">
        <div className="contact-panel"><span>01</span><h2>Work together</h2><p>Roles, projects, and collaborations where technical understanding needs to become a practical customer or business outcome.</p></div>
        <div className="contact-panel"><span>02</span><h2>Share a thread</h2><p>A research question, field observation, or idea that connects engineering, customers, markets, and operating reality.</p></div>
        <div className="contact-details">
          <p className="eyebrow"><span>✦</span> {site.location}</p>
          <h2>The most reliable ways to reach me.</h2>
          <p>For roles, research collaborations, or project conversations, email and LinkedIn are the best starting points.</p>
          <div className="contact-links">
            {links.map((link) => <a className="button primary" href={link.href} key={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}
          </div>
        </div>
      </section>
    </>
  );
}
