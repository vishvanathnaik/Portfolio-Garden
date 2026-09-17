import Link from "next/link";
import { site } from "@/lib/site";

const services = [
  {
    number: "01",
    kicker: "Understand the landscape",
    title: "Urban Impact & Market Research",
    body: "Research that connects customer behaviour, local context, competitors, and commercial opportunity—especially for businesses operating in cities.",
    items: ["Market & competitor mapping", "Customer and neighbourhood insight", "Positioning & opportunity analysis", "Interview and survey synthesis"],
    offer: "Research Sprint",
    price: "From €249 · 5–7 working days",
    subject: "Urban Impact & Market Research enquiry",
  },
  {
    number: "02",
    kicker: "Improve the system",
    title: "Operations & Program Management",
    body: "Practical analysis for teams dealing with bottlenecks, handoffs, delivery pressure, or a cross-functional project that needs structure.",
    items: ["Process and workflow mapping", "Bottleneck & root-cause analysis", "KPI and reporting design", "Project planning & coordination"],
    offer: "Operations Diagnostic",
    price: "From €349 · scoped to the problem",
    subject: "Operations & Program Management enquiry",
  },
  {
    number: "03",
    kicker: "Organize the evidence",
    title: "ESG & Sustainability Reporting Support",
    body: "Structured support for startups and SMEs that need to gather sustainability information, benchmark their position, and communicate it clearly.",
    items: ["Baseline and readiness review", "Material-topic research", "KPI and data-collection framework", "Report structure & narrative draft"],
    offer: "Sustainability Starter",
    price: "From €399 · tailored scope",
    subject: "ESG & Sustainability Reporting Support enquiry",
  },
];

export default function Home() {
  return (
    <div className="m-site">
      <section className="m-hero m-pad">
        <div className="m-hero-copy m-reveal">
          <p className="m-eyebrow"><span className="m-signal" /> Independent research & project support · Berlin</p>
          <h1>Clearer markets.<br />Stronger operations.<br /><em>Credible impact.</em></h1>
          <p className="m-deck">I help startups and SMEs investigate the questions behind growth, execution, and sustainability—then turn the evidence into decisions people can use.</p>
          <div className="m-actions"><a className="m-button m-button-dark" href="#services">Explore services <span>↓</span></a><a className="m-text-link" href="#contact">Discuss a project <span>↗</span></a></div>
        </div>
        <div className="m-hero-visual m-reveal m-delay">
          <div className="m-image m-berlin" role="img" aria-label="Berlin railway network and TV tower seen from Warschauer Bridge at night"><div className="m-image-caption"><span>FIELD / 01</span><span>BERLIN · SYSTEMS IN MOTION</span></div></div>
          <div className="m-side-note"><span>MY LENS</span><p>Observe the system.<br />Stay close to the people.<br />Make the next move clearer.</p></div>
        </div>
      </section>

      <div className="m-strip" aria-label="Problems I help solve"><span>Market uncertainty</span><i>✦</i><span>Operational friction</span><i>✦</i><span>Sustainability evidence</span><i>✦</i><span>Decision-ready reporting</span></div>

      <section className="m-services m-pad" id="services">
        <div className="m-intro"><p className="m-eyebrow">01 / Services</p><h2>Three ways I can<br /><em>move the work forward.</em></h2><p>Focused, fixed-scope projects for teams that need a rigorous outside perspective—not a vague consulting engagement.</p></div>
        <div className="m-service-list">
          {services.map((service, index) => (
            <article className={`m-service ${index === 2 ? "m-service-featured" : ""}`} key={service.title}>
              <span className="m-service-no">{service.number}</span>
              <div className="m-service-main"><p className="m-kicker">{service.kicker}</p><h3>{service.title}</h3><p>{service.body}</p></div>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="m-offer"><span>ENTRY PROJECT</span><strong>{service.offer}</strong><p>{service.price}</p><a href={`mailto:${site.email}?subject=${encodeURIComponent(service.subject)}`}>Ask about this <span>↗</span></a></div>
            </article>
          ))}
        </div>
        <p className="m-scope">Reporting support covers research, evidence organization, benchmarking, and drafting. It does not replace legal advice, formal assurance, or statutory audit.</p>
      </section>

      <section className="m-fit m-pad">
        <div><p className="m-eyebrow">Best fit</p><h2>Built for teams where<br /><em>systems meet the street.</em></h2></div>
        <div className="m-fit-grid"><div><span>01</span><h3>Climate & energy</h3><p>Technical products that need commercial clarity.</p></div><div><span>02</span><h3>Urban & mobility</h3><p>Businesses shaped by place, movement, and people.</p></div><div><span>03</span><h3>Logistics & retail</h3><p>Frontline operations where promises meet reality.</p></div><div><span>04</span><h3>Industrial SMEs</h3><p>Teams organizing processes and sustainability data.</p></div></div>
      </section>

      <section className="m-work m-pad" id="work">
        <div className="m-intro m-intro-right"><p className="m-eyebrow">02 / Selected work</p><h2>Evidence before<br /><em>the sales pitch.</em></h2><p>Selected experience and portfolio studies showing how I move from a complex question to a practical recommendation.</p></div>
        <article className="m-feature-case">
          <div className="m-image m-wolt" role="img" aria-label="A Wolt courier cycling through Berlin near the Brandenburg Gate"><span className="m-image-label">OPERATIONS / BERLIN</span></div>
          <div className="m-case-copy"><p className="m-case-meta">CASE STUDY · OPERATIONS SYSTEMS</p><h3>Last-mile delivery<br />throughput optimization</h3><p>How could a five-station delivery network reduce departure delays while protecting service, labour, and safety guardrails?</p><dl><div><dt>Question</dt><dd>Where does flow break?</dd></div><div><dt>Method</dt><dd>Process mapping · constraint analysis</dd></div><div><dt>Output</dt><dd>Redesigned operating model</dd></div></dl><Link className="m-text-link" href="/projects/last-mile-delivery/">View the case study <span>↗</span></Link></div>
        </article>
        <div className="m-case-grid">
          <article><p className="m-case-meta">EXPERIENCE · PROGRAM MANAGEMENT</p><span className="m-case-no">01</span><h3>Customer insight meets program execution</h3><p>At Rupeek, customer research, performance tracking, reporting, and cross-functional coordination came together in customer-facing programs.</p><div><span>RUPEEK</span><span>FINTECH</span><span>CUSTOMER RESEARCH</span></div></article>
          <article><p className="m-case-meta">EXPERIENCE · MARKET RESEARCH</p><span className="m-case-no">02</span><h3>Finding a market for water technology</h3><p>At Dime Klear, industry analysis, competitor research, and customer segmentation supported the commercial direction of an early-stage filtration startup.</p><div><span>DIME KLEAR</span><span>WATER</span><span>GO-TO-MARKET</span></div></article>
        </div>
      </section>

      <section className="m-field" id="field-notes">
        <div className="m-image m-field-image" role="img" aria-label="Berlin rail infrastructure and city skyline at blue hour" />
        <div className="m-field-copy"><p className="m-eyebrow">03 / Field Notes</p><p className="m-issue">SYSTEMS / 01 — BERLIN</p><h2>The city is a<br /><em>working system.</em></h2><p className="m-deck">Visual research on mobility, delivery work, neighbourhood commerce, infrastructure, and the people who keep everyday life moving.</p><div className="m-pills"><span>PHOTO ESSAYS</span><span>SHORT EXPLAINERS</span><span>FIELD RESEARCH</span></div><p>Field Notes is the proof-of-thinking layer: original observation and clear explanation, connected back to the commercial questions businesses face.</p><a className="m-button m-button-sky" href={`mailto:${site.email}?subject=Field%20Notes%20collaboration`}>Propose a field brief <span>↗</span></a></div>
      </section>

      <section className="m-about m-pad" id="about">
        <blockquote>“Engineering taught me to understand systems. Working with customers taught me where systems break.”</blockquote>
        <div><p className="m-eyebrow">04 / Why this combination</p><h2>Technical grounding.<br /><em>Commercial attention.</em></h2><p>I’m a Chemical Engineering graduate from NITK Surathkal with experience across market research, program management, customer insight, and frontline operations.</p><p>That path—from water technology to fintech programs to daily operations in Berlin—helps me connect technical detail, human behaviour, and business reality.</p><div className="m-pills m-dark-pills"><span>CHEMICAL ENGINEERING</span><span>RUPEEK</span><span>WOLT</span><span>DIME KLEAR</span></div><Link className="m-text-link" href="/about/">Read my full story <span>↗</span></Link></div>
      </section>

      <section className="m-process m-pad">
        <div className="m-intro"><p className="m-eyebrow">05 / A clear engagement</p><h2>Small enough to start.<br /><em>Useful enough to matter.</em></h2></div>
        <ol><li><span>01</span><div><h3>Frame the decision</h3><p>A short call to define the question, audience, evidence, and boundaries.</p></div></li><li><span>02</span><div><h3>Set the scope</h3><p>You receive a fixed deliverable, timeline, and price before the work begins.</p></div></li><li><span>03</span><div><h3>Build the evidence</h3><p>I research, analyse, and keep the work anchored to the decision at hand.</p></div></li><li><span>04</span><div><h3>Hand over the next move</h3><p>A clear readout, practical recommendations, and an editable final deliverable.</p></div></li></ol>
      </section>

      <section className="m-contact m-pad" id="contact">
        <div><p className="m-eyebrow">Start with one useful question</p><h2>What needs to become<br /><em>clearer?</em></h2><p>Tell me what you are trying to decide, improve, or report. I’ll reply with a suggested first scope—usually a compact research sprint or diagnostic.</p></div>
        <div className="m-contact-card"><p><span className="m-signal" /> Available for selected projects</p><a className="m-email" href={`mailto:${site.email}?subject=Project%20enquiry`}>naik.vishvanath.17<br />@gmail.com <span>↗</span></a><div className="m-socials"><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={site.facebook} target="_blank" rel="noreferrer">Facebook ↗</a><Link href="/resume/">Résumé ↗</Link></div><small>Based in Berlin · Working with teams across Europe</small></div>
      </section>
    </div>
  );
}
