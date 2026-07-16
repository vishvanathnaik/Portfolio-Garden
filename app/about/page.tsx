import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { approach, education } from "@/lib/profile";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An engineering foundation, applied to customers and business systems."
        intro="I’m a chemical engineering graduate from NITK Surathkal with experience spanning market research, program management, customer insight, and frontline operations. I’m now based in Berlin and focused on research-led marketing, growth, operations, and energy opportunities."
      />
      <section className="shell editorial-grid">
        <aside className="margin-note">The short version<br /><span>Systems thinker. Practical operator. Lifelong student.</span></aside>
        <div className="prose-block">
          <h2>From technical systems to commercial questions</h2>
          <p>Studying chemical engineering at the National Institute of Technology Karnataka taught me to break complex problems into components, work with imperfect information, and balance performance against real constraints.</p>
          <p>At Dime Klear, an early-stage water-filtration startup, I applied SWOT, PESTLE, and Porter’s Five Forces to assess industry dynamics, identify target customer segments, and support marketing outreach. That experience moved me closer to the customer and commercial questions behind technical products.</p>
          <p>As a Junior Program Manager at Rupeek, I conducted customer research, tracked performance metrics, and worked with cross-functional teams on customer-facing programs. My current role at Wolt in Berlin adds a frontline operating perspective: strategy and customer promises only matter when they hold up in daily execution.</p>
          <blockquote>Start with the system. Stay close to the people inside it. Make the next decision clearer.</blockquote>
          <h2>How I work</h2>
          <div className="approach-list">
            {approach.map((item) => (
              <div className="approach-item" key={item.index}>
                <span>{item.index}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </div>
            ))}
          </div>
          <h2>Education</h2>
          <p><strong>{education.degree}</strong><br />{education.institution}<br />{education.period}</p>
          <div className="inline-actions">
            <Link className="button primary" href="/resume/">View résumé</Link>
            <Link className="text-link" href="/projects/">See the work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
