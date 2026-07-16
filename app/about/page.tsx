import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A technical foundation, a wider field of view." intro="I’m interested in the space between disciplines: where engineering meets business, operations meets customer experience, and careful analysis becomes action." />
      <section className="shell editorial-grid">
        <aside className="margin-note">The short version<br /><span>Systems thinker. Practical operator. Lifelong student.</span></aside>
        <div className="prose-block">
          <h2>How I approach the work</h2>
          <p>My background in chemical engineering taught me to look for constraints, flows, feedback loops, and risk. Those habits travel well. I use them to understand organizations, services, markets, and the choices that hold them together.</p>
          <p>I’m building toward work that combines analytical depth with commercial and human judgment—across operations, project and program management, marketing, startups, and energy.</p>
          <blockquote>Start with the system. Stay close to the people inside it. Make the next decision clearer.</blockquote>
          <h2>What you’ll find here</h2>
          <p>Projects are where I test a method. Essays are where I develop an argument. Notes hold the useful fragments that are not finished yet. Together, they make the work legible—not just the outcome, but the thinking behind it.</p>
          <Link className="text-link" href="/projects/">See the work <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
