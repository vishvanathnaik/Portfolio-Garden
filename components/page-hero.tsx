import Link from "next/link";

export function PageHero({ eyebrow, title, intro, link }: { eyebrow: string; title: string; intro: string; link?: { href: string; label: string } }) {
  return (
    <section className="page-hero shell">
      <p className="eyebrow"><span>✦</span> {eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
      {link ? <Link className="text-link" href={link.href}>{link.label} <span aria-hidden="true">→</span></Link> : null}
    </section>
  );
}
