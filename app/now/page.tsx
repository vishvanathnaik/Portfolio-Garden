import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { nowItems } from "@/lib/content";

export const metadata: Metadata = { title: "Now" };

export default function NowPage() {
  return (
    <>
      <PageHero eyebrow="Now · Berlin" title="A snapshot of the present tense." intro="A lightweight record of what has my attention right now. Updated as the season changes." />
      <section className="shell editorial-grid now-page">
        <aside className="margin-note">Last tended<br /><span>July 2026</span></aside>
        <div className="prose-block">
          <h2>Building</h2><p>{nowItems[0]}</p>
          <h2>Investigating</h2><p>{nowItems[1]}</p>
          <h2>Reading</h2><p>{nowItems[2]}</p>
          <h2>Looking for</h2><p>Conversations and opportunities where systems thinking, operational judgment, and commercial curiosity are useful together.</p>
        </div>
      </section>
    </>
  );
}
