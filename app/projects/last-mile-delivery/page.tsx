import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Last-Mile Delivery Throughput Optimization",
  description: "An independent operations case study using a synthetic van-level dataset, DMAIC, KPI modeling, pilot design, and program governance.",
};

const downloads = [
  {
    index: "01",
    type: "Excel workbook",
    title: "KPI model",
    description: "7,450 synthetic van-day records, data-quality checks, DMAIC analysis, pilot results, a financial model, and operating controls.",
    href: "/downloads/last-mile-delivery/Last_Mile_Delivery_KPI_Model.xlsx",
    label: "Download Excel model",
  },
  {
    index: "02",
    type: "Word document",
    title: "Program case study",
    description: "The complete decision narrative, operating definitions, root-cause logic, rollout governance, risks, and control plan.",
    href: "/downloads/last-mile-delivery/Last_Mile_Delivery_Program_Case_Study.docx",
    label: "Download case study",
  },
  {
    index: "03",
    type: "PowerPoint deck",
    title: "Program overview",
    description: "A concise executive presentation of the evidence model, intervention, results, economics, and scale-up decision.",
    href: "/downloads/last-mile-delivery/Last_Mile_Delivery_Program_Overview.pptx",
    label: "Download presentation",
  },
];

const phases = [
  ["Define", "Frame departure reliability as the operating constraint and set service, labor, and safety guardrails."],
  ["Measure", "Create van-day definitions, reconcile five process stages, and establish a 3,200-observation baseline."],
  ["Analyze", "Trace 60% of dock time to the staging queue and state the causal mechanism as a hypothesis to test."],
  ["Improve", "Model a six-week pilot combining readiness-based release, visual staging, flex roles, and exception ownership."],
  ["Control", "Separate business targets from statistical limits and define WBR, escalation, and rollback mechanisms."],
];

export default function LastMileDeliveryPage() {
  return (
    <>
      <section className="case-hero shell">
        <p className="eyebrow"><span>✦</span> Operations case study · complete</p>
        <div className="case-hero-grid">
          <div>
            <h1>Last-mile delivery throughput optimization.</h1>
            <p className="page-intro">A program case study exploring how a five-station delivery network could reduce departure delays while protecting service, labor, and safety guardrails.</p>
          </div>
          <aside className="case-decision">
            <span>The decision</span>
            <p>Scale the operating changes only after a live validation pilot holds the service and guardrail targets.</p>
          </aside>
        </div>
        <div className="tag-row case-tags"><span className="tag">DMAIC</span><span className="tag">Operations</span><span className="tag">KPI modeling</span><span className="tag">Program governance</span></div>
      </section>

      <section className="case-disclosure">
        <div className="shell disclosure-grid">
          <p className="eyebrow">Evidence boundary</p>
          <p>This is an independent portfolio simulation. Operating records are synthetic, financial benefits are model outputs, and public sources provide context only. No employer data is represented.</p>
        </div>
      </section>

      <section className="shell case-section">
        <div className="case-section-heading">
          <p className="eyebrow"><span>01</span> Modeled outcome</p>
          <h2>A faster departure process with a conservative business case.</h2>
        </div>
        <div className="metric-grid">
          <article><span>Dock-to-departure</span><strong>14.60 → 11.39</strong><small>minutes · 22.0% lower</small></article>
          <article><span>On-time delivery</span><strong>80.2% → 95.6%</strong><small>+15.4 percentage points</small></article>
          <article><span>Overtime</span><strong>20.91 → 9.99</strong><small>hours per van-day · 52.2% lower</small></article>
          <article><span>Year 1 net benefit</span><strong>$406K</strong><small>base case after attribution</small></article>
        </div>
        <p className="case-footnote">These figures describe the internal behavior of the synthetic model. They are not forecasts of results in a live delivery station.</p>
      </section>

      <section className="case-section case-method">
        <div className="shell">
          <div className="case-section-heading split-heading">
            <p className="eyebrow"><span>02</span> Method</p>
            <h2>DMAIC turns the analysis into a controlled operating program.</h2>
          </div>
          <ol className="phase-list">
            {phases.map(([phase, description], index) => (
              <li key={phase}><span>{String(index + 1).padStart(2, "0")}</span><h3>{phase}</h3><p>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell case-section">
        <div className="case-section-heading split-heading">
          <p className="eyebrow"><span>03</span> Operating insight</p>
          <h2>The staging queue is the largest controllable contributor.</h2>
        </div>
        <div className="insight-grid">
          <div className="constraint-visual" aria-label="Staging queue accounts for 60 percent of baseline dock time">
            <span>Share of baseline dock time</span>
            <strong>60%</strong>
            <div><i /></div>
            <small>Staging queue</small>
          </div>
          <div className="prose-block compact-prose">
            <p>The baseline model concentrates excess time in a serial staging queue: one active lane, arrival-order loading, no real-time queue trigger, and no assigned peak response.</p>
            <p>The proposed pilot tests readiness-based release, route-zone staging, two reassigned flex roles, and a five-minute exception clock. Two stable weeks above the service target and within guardrails are required before expansion.</p>
          </div>
        </div>
      </section>

      <section className="case-section case-downloads">
        <div className="shell">
          <div className="case-section-heading split-heading">
            <p className="eyebrow"><span>04</span> Project files</p>
            <h2>Review the model, the written case, or the executive deck.</h2>
          </div>
          <div className="download-grid">
            {downloads.map((item) => (
              <article key={item.title}>
                <div className="download-topline"><span>{item.type}</span><span>{item.index}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="text-link" href={item.href} download>{item.label} <span aria-hidden="true">↓</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta shell case-close">
        <p className="eyebrow"><span>✦</span> The next test</p>
        <h2>Validate the mechanism with live timestamps, a comparison wave, and explicit rollback criteria.</h2>
        <Link className="button primary" href="/projects/">Explore more projects <ArrowIcon /></Link>
      </section>
    </>
  );
}
