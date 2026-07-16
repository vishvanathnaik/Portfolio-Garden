import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { capabilities, education, experience, research } from "@/lib/profile";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Résumé" };

export default function ResumePage() {
  return (
    <>
      <PageHero eyebrow="Résumé" title="Experience across research, programs, and operations." intro="Chemical engineering graduate with experience generating customer and market insights across fintech, an early-stage water-technology startup, and frontline retail operations." link={{ href: site.resume, label: "Download résumé" }} />
      <section className="shell resume-section">
        <div className="resume-heading"><p className="eyebrow"><span>01</span> Experience</p><h2>Research, programs, and frontline execution.</h2></div>
        <ol className="experience-list">
          {experience.map((item) => (
            <li key={item.company}><div className="experience-meta"><strong>{item.company}</strong><span>{item.period}</span></div><h3>{item.role}</h3><p>{item.details}</p></li>
          ))}
        </ol>
        <div className="resume-split">
          <section><p className="eyebrow"><span>02</span> Education</p><h3>{education.degree}</h3><p>{education.institution}<br />{education.period}</p></section>
          <section><p className="eyebrow"><span>03</span> Selected research</p><h3>{research.title}</h3><p>{research.detail}</p></section>
        </div>
        <section className="capability-section"><p className="eyebrow"><span>04</span> Capabilities</p><h2>A research-led commercial toolkit.</h2><div className="capability-grid">{capabilities.map((item) => <div key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div></section>
      </section>
    </>
  );
}
