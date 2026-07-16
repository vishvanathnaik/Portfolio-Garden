import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { topics } from "@/lib/content";

export const metadata: Metadata = { title: "Mind Map" };

export default function MindMapPage() {
  return (
    <>
      <PageHero eyebrow="Mind map · preview" title="Follow a thread through the garden." intro="This future view will connect every project, essay, note, and book by the ideas they share. The first taxonomy is already in place." />
      <section className="shell mindmap-preview">
        <div className="mindmap-center">Vishvanath&apos;s<br />field notes</div>
        {topics.map((topic, index) => <Link className={`mindmap-topic mindmap-${index + 1}`} href={`/notes/?topic=${topic.name.toLowerCase()}`} key={topic.name}><strong>{topic.name}</strong><span>{topic.description}</span></Link>)}
      </section>
    </>
  );
}
