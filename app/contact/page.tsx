import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s compare notes." intro="I’m always glad to meet thoughtful people working on operations, markets, energy, technology, or the messy space between them." />
      <section className="shell contact-grid">
        <div className="contact-panel"><span>01</span><h2>Work together</h2><p>Roles, projects, and collaborations where technical understanding needs to become a practical business outcome.</p></div>
        <div className="contact-panel"><span>02</span><h2>Share a thread</h2><p>A book, question, field observation, or idea that connects with something in this garden.</p></div>
        <div className="contact-details">
          <p className="eyebrow"><span>✦</span> Contact details</p>
          <h2>Preferred contact links will live here.</h2>
          <p>This preview intentionally leaves email and social URLs unset until they are verified. Add them once in <code>lib/site.ts</code> before publishing.</p>
          <Link className="text-link" href="/projects/">In the meantime, explore the work <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
