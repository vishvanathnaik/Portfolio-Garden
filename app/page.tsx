import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { ArrowIcon, SparkIcon } from "@/components/icons";
import { content, nowItems, topics } from "@/lib/content";
import { capabilities, experience } from "@/lib/profile";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>✦</span> Engineer · operator · curious generalist</p>
          <h1>I make sense of <em>complex systems</em>—then turn insight into useful work.</h1>
          <p className="hero-intro">I&apos;m Vishvanath—a chemical engineering graduate with experience across market research, program management, customer insight, and frontline operations.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects/">Explore my work <ArrowIcon /></Link>
            <Link className="button quiet" href="/resume/">View résumé</Link>
          </div>
          <p className="availability"><span>●</span> Based in Berlin · Open to full-time opportunities</p>
        </div>

        <div className="garden-map reveal delay-one" aria-label="A map of connected interests">
          <div className="map-orbit orbit-one" />
          <div className="map-orbit orbit-two" />
          <span className="map-line line-one" />
          <span className="map-line line-two" />
          <span className="map-line line-three" />
          <span className="map-line line-four" />
          {topics.map((topic, index) => (
            <div className={`topic-node node-${index + 1} ${topic.tone}`} key={topic.name}>
              <span>{topic.name}</span>
            </div>
          ))}
          <div className="map-center"><SparkIcon /><span>making<br />connections</span></div>
          <p className="map-caption">A growing map of what I&apos;m learning and building.</p>
        </div>
      </section>

      <section className="intro-strip">
        <div className="shell intro-grid">
          <p className="section-kicker">A portfolio,<br />but also a garden.</p>
          <div>
            <p className="statement">This is a place for finished work <em>and</em> ideas still taking shape.</p>
            <p className="muted measure">The threads run between technical systems and human ones: how organizations operate, how markets move, and how energy choices shape what becomes possible.</p>
          </div>
          <Link className="circle-link" href="/about/" aria-label="Read my story"><span>My story</span><ArrowIcon /></Link>
        </div>
      </section>

      <section className="work-section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>✦</span> Selected work</p>
            <h2>Ideas with their sleeves rolled up.</h2>
          </div>
          <Link className="text-link desktop-link" href="/projects/">View all projects <span aria-hidden="true">→</span></Link>
        </div>
        <div className="card-grid">
          {content.filter((item) => item.featured).map((item) => <ContentCard item={item} key={item.title} />)}
        </div>
        <Link className="text-link mobile-link" href="/projects/">View all projects <span aria-hidden="true">→</span></Link>
      </section>

      <section className="now-section">
        <div className="shell now-grid">
          <div>
            <p className="eyebrow"><span>●</span> Now · Berlin</p>
            <h2>What I&apos;m tending<br />at the moment.</h2>
          </div>
          <ol className="now-list">
            {nowItems.map((item, index) => (
              <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
            ))}
          </ol>
          <Link className="round-arrow large" href="/now/" aria-label="See the now page"><ArrowIcon /></Link>
        </div>
      </section>

      <section className="proof-section shell">
        <div className="section-heading">
          <div><p className="eyebrow"><span>✦</span> Experience & capabilities</p><h2>Engineering discipline,<br />commercial curiosity.</h2></div>
          <Link className="text-link desktop-link" href="/resume/">View full résumé <span aria-hidden="true">→</span></Link>
        </div>
        <div className="proof-grid">
          <ol className="compact-experience">
            {experience.map((item) => <li key={item.company}><span>{item.period}</span><strong>{item.company}</strong><p>{item.role}</p></li>)}
          </ol>
          <div className="compact-capabilities">
            {capabilities.map((item, index) => <div key={item.title}><span>0{index + 1}</span><div><strong>{item.title}</strong><p>{item.detail}</p></div></div>)}
          </div>
        </div>
        <Link className="text-link mobile-link" href="/resume/">View full résumé <span aria-hidden="true">→</span></Link>
      </section>

      <section className="writing-section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>✦</span> From the notebook</p>
            <h2>Writing to understand.</h2>
          </div>
          <Link className="text-link" href="/writing/">Browse all writing <span aria-hidden="true">→</span></Link>
        </div>
        <div className="notebook-list">
          {content.filter((item) => item.kind !== "project").map((item) => (
            <Link className="notebook-row" href={item.href} key={item.title}>
              <span className="notebook-index">{item.index}</span>
              <span className="notebook-kind">{item.kind}</span>
              <strong>{item.title}</strong>
              <span className="notebook-topics">{item.topics.slice(0, 2).join(" · ")}</span>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </section>

      <section className="closing-cta shell">
        <p className="eyebrow"><span>✦</span> A good conversation starts with a question</p>
        <h2>Working on a hard problem<br />at the edge of systems and people?</h2>
        <Link className="button primary" href="/contact/">Let&apos;s compare notes <ArrowIcon /></Link>
      </section>
    </>
  );
}
