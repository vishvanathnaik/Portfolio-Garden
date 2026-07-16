import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <>
      <PageHero eyebrow="Writing" title="Essays for thinking in public." intro="Longer arguments about industry, organizations, markets, and the forces that connect them. The aim is not hot takes; it’s clearer questions and durable understanding." />
      <section className="shell listing-section article-list">
        {content.filter((item) => item.kind === "essay").map((item) => (
          <article id="guyana" className="feature-article" key={item.title}>
            <div className="article-number">{item.index}</div>
            <div><p className="eyebrow">{item.status}</p><h2>{item.title}</h2><p>{item.description}</p><div className="tag-row">{item.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}</div></div>
            <Link className="round-arrow" href={item.href} aria-label={`Read ${item.title}`}><ArrowIcon /></Link>
          </article>
        ))}
        <div className="empty-state"><span>In the margins</span><h3>More essays are taking shape.</h3><p>Current threads include German industry, operational reliability, customer insight, and the political economy of energy.</p></div>
      </section>
    </>
  );
}
