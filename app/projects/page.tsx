import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = content.filter((item) => item.kind === "project");
  return (
    <>
      <PageHero eyebrow="Projects" title="Learning by making the problem visible." intro="Case studies and experiments across operations, strategy, markets, and energy. Each project starts with a decision—not a tool—and shows the path from evidence to recommendation." />
      <section className="shell listing-section">
        <div className="filter-row" aria-label="Project topics"><span className="filter active">All work</span><span className="filter">Operations</span><span className="filter">Energy</span><span className="filter">Markets</span><span className="filter">Systems</span></div>
        <div className="card-grid two-column">
          {projects.map((item) => <div id="last-mile" key={item.title}><ContentCard item={item} /></div>)}
          <article className="content-card ghost-card">
            <div className="card-topline"><span>Next study</span><span>05</span></div>
            <h3>Energy-market go-to-market analysis</h3>
            <p>A decision-focused study connecting technical feasibility, customer needs, market structure, and an actionable launch path.</p>
            <div className="tag-row"><span className="tag">Energy</span><span className="tag">Markets</span><span className="tag">Strategy</span></div>
          </article>
        </div>
        <div className="method-strip">
          <p className="eyebrow"><span>✦</span> A simple project standard</p>
          <div><strong>01 / Frame</strong><span>What decision needs to become clearer?</span></div>
          <div><strong>02 / Investigate</strong><span>What does the evidence support?</span></div>
          <div><strong>03 / Recommend</strong><span>What would I do next, and why?</span></div>
        </div>
      </section>
    </>
  );
}
