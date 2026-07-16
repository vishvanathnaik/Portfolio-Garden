import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import type { ContentItem } from "@/lib/content";

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <article className="content-card">
      <div className="card-topline">
        <span>{item.status}</span>
        <span>{item.index}</span>
      </div>
      <h3><Link href={item.href}>{item.title}</Link></h3>
      <p>{item.description}</p>
      <div className="card-footer">
        <div className="tag-row">
          {item.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}
        </div>
        <Link className="round-arrow" href={item.href} aria-label={`View ${item.title}`}><ArrowIcon /></Link>
      </div>
    </article>
  );
}
