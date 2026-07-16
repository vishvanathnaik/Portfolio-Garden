import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <>
      <PageHero eyebrow="Writing" title="Ideas at the intersection of engineering and business." intro="Essays connecting my engineering foundation with marketing, operations, growth, startups, and energy. These pieces are in development and are labelled accordingly." />
      <section className="shell listing-section article-list">
        {content.filter((item) => item.kind === "essay").map((item) => (
          <article id={item.href.split("#")[1]} className="feature-article" key={item.title}>
            <div className="article-number">{item.index}</div>
            <div><p className="eyebrow">{item.status}</p><h2>{item.title}</h2><p>{item.description}</p><div className="tag-row">{item.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}</div></div>
            <span className="article-state" aria-label="Writing in progress">Growing</span>
          </article>
        ))}
      </section>
    </>
  );
}
