import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export const metadata: Metadata = { title: "Notes" };

export default function NotesPage() {
  const notes = content.filter((item) => item.kind === "note");
  return (
    <>
      <PageHero eyebrow="Notes" title="Small pieces, loosely joined." intro="Working notes, observations, diagrams, and questions. Some are seedlings. Some will become essays or projects. All are allowed to change as I learn." link={{ href: "/mind-map/", label: "Preview the future mind map" }} />
      <section className="shell notes-grid listing-section">
        {notes.map((item) => (
          <article id="process-strategy" className="paper-note" key={item.title}><p className="note-meta">{item.status} · {item.index}</p><h2>{item.title}</h2><p>{item.description}</p><div className="tag-row">{item.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}</div><span className="tape" aria-hidden="true" /></article>
        ))}
        <article className="paper-note"><p className="note-meta">Observation · 02</p><h2>Metrics are compressed stories</h2><p>A measure looks objective, but it always contains choices about whose experience counts, over what time, and toward which decision.</p><div className="tag-row"><span className="tag">Operations</span><span className="tag">People</span></div><span className="tape" aria-hidden="true" /></article>
        <article className="paper-note"><p className="note-meta">Question · 03</p><h2>Where does technical value become customer value?</h2><p>Exploring the translation layer between better performance on paper and a reason for someone to adopt, pay, or change behavior.</p><div className="tag-row"><span className="tag">Markets</span><span className="tag">Energy</span></div><span className="tape" aria-hidden="true" /></article>
      </section>
    </>
  );
}
