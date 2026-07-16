import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export const metadata: Metadata = { title: "Reading" };

export default function ReadingPage() {
  return (
    <>
      <PageHero eyebrow="Reading" title="A shelf with notes in the margins." intro="Books and papers that are changing how I see systems, organizations, economics, energy, and people. These are reading notes—not endorsements or final verdicts." />
      <section className="shell listing-section bookshelf">
        {content.filter((item) => item.kind === "reading").map((item) => (
          <article id="fog-around-money" className="book-row" key={item.title}>
            <div className="book-spine"><span>Bernd Senf</span></div>
            <div><p className="eyebrow">{item.status}</p><h2>{item.title}</h2><p>{item.description}</p><p className="reading-question"><strong>Reading question:</strong> Which parts explain the mechanics well, and where do the interpretations diverge from mainstream monetary economics?</p></div>
          </article>
        ))}
        <div className="shelf-line" />
      </section>
    </>
  );
}
