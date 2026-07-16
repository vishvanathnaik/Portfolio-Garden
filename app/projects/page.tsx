import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = content.filter((item) => item.kind === "project");
  return (
    <>
      <PageHero eyebrow="Projects" title="Projects that turn open questions into structured decisions." intro="A growing collection of research, strategy, and operating work. Portfolio concepts are labelled honestly and will become full case studies as source material and analysis are added." />
      <section className="shell listing-section">
        <div className="filter-row" aria-label="Project topics"><span className="filter active">All work</span><span className="filter">Marketing</span><span className="filter">Growth</span><span className="filter">Operations</span><span className="filter">Strategy</span><span className="filter">Analytics</span><span className="filter">AI</span><span className="filter">Energy</span></div>
        <div className="card-grid">
          {projects.map((item) => <div id={item.href.split("#")[1]} key={item.title}><ContentCard item={item} /></div>)}
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
