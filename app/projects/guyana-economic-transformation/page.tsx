import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Guyana’s Resource-Led Economic Transformation",
  description: "An independent portfolio case study evaluating commercial opportunity, public value, resilience, and delivery governance in Guyana’s resource-led transformation.",
};

const downloads = [
  {
    index: "01",
    type: "Excel workbook",
    title: "Scenario model",
    description: "An auditable portfolio model comparing three allocation pathways, decision scores, downside sensitivities, and management triggers.",
    href: "/downloads/guyana-economic-transformation/Guyana_Economic_Transformation_Model.xlsx",
    label: "Download Excel model",
  },
  {
    index: "02",
    type: "Word document",
    title: "Portfolio case study",
    description: "The complete narrative covering context, analytical lenses, commercial opportunity, public value, implementation, governance, and risk controls.",
    href: "/downloads/guyana-economic-transformation/Guyana_Economic_Transformation_Case_Study.docx",
    label: "Download case study",
  },
  {
    index: "03",
    type: "PowerPoint deck",
    title: "Executive overview",
    description: "A 16-slide executive presentation of the evidence, transformation logic, strategic pathways, recommendation, roadmap, and controls.",
    href: "/downloads/guyana-economic-transformation/Guyana_Economic_Transformation_Overview.pptx",
    label: "Download presentation",
  },
  {
    index: "04",
    type: "PDF presentation",
    title: "Preview-friendly deck",
    description: "A browser-friendly PDF edition of the executive overview for quick review without PowerPoint.",
    href: "/downloads/guyana-economic-transformation/Guyana_Economic_Transformation_Overview_Readable.pdf",
    label: "Open PDF deck",
  },
];

const lenses = [
  ["Commercial opportunity", "Test whether investment builds productivity, competitive firms, supplier capability, and non-oil exports."],
  ["Public value", "Connect spending to skills, services, inclusion, affordability, and measurable outcomes for people and places."],
  ["Long-term resilience", "Protect fiscal buffers while strengthening diversification, climate resilience, institutions, and data quality."],
  ["Program delivery", "Turn the recommendation into sequenced workstreams, accountable governance, stage gates, and operating controls."],
];

export default function GuyanaEconomicTransformationPage() {
  return (
    <>
      <section className="case-hero shell">
        <p className="eyebrow"><span>✦</span> Energy case study · published 24 July 2026</p>
        <div className="case-hero-grid">
          <div>
            <h1>Guyana’s resource-led economic transformation.</h1>
            <p className="page-intro">An independent portfolio study asking how petroleum revenue can be converted into commercial capability, public value, and long-term resilience.</p>
          </div>
          <aside className="case-decision">
            <span>The recommendation</span>
            <p>Use a Balanced Transformation portfolio as the default, with a transparent downside trigger that shifts new commitments toward higher savings.</p>
          </aside>
        </div>
        <div className="tag-row case-tags"><span className="tag">Energy strategy</span><span className="tag">Scenario modeling</span><span className="tag">Program management</span><span className="tag">Public value</span></div>
      </section>

      <section className="case-disclosure">
        <div className="shell disclosure-grid">
          <p className="eyebrow">Evidence boundary</p>
          <p>This is independent portfolio analysis based solely on public sources. The scenarios, scoring coefficients, triggers, and recommendations are author-designed; they are not government policy, an ExxonMobil plan, investment advice, or a forecast.</p>
        </div>
      </section>

      <section className="shell case-section">
        <div className="case-section-heading">
          <p className="eyebrow"><span>01</span> Context</p>
          <h2>Rapid growth creates a conversion challenge, not only a spending opportunity.</h2>
        </div>
        <div className="metric-grid">
          <article><span>Real GDP growth</span><strong>19.3%</strong><small>2025 · public evidence</small></article>
          <article><span>Non-oil GDP growth</span><strong>14.3%</strong><small>2025 · public evidence</small></article>
          <article><span>NRF balance</span><strong>US$3.25B</strong><small>end-2025</small></article>
          <article><span>Installed capacity</span><strong>900K+ bpd</strong><small>after Yellowtail startup</small></article>
        </div>
        <p className="case-footnote">These figures establish the scale and momentum of the opportunity. They do not, by themselves, demonstrate improved welfare, delivery capacity, or long-term competitiveness.</p>
      </section>

      <section className="case-section case-method">
        <div className="shell">
          <div className="case-section-heading split-heading">
            <p className="eyebrow"><span>02</span> Analytical lenses</p>
            <h2>The model evaluates conversion quality across business, society, resilience, and execution.</h2>
          </div>
          <ol className="phase-list">
            {lenses.map(([lens, description], index) => (
              <li key={lens}><span>{String(index + 1).padStart(2, "0")}</span><h3>{lens}</h3><p>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell case-section">
        <div className="case-section-heading split-heading">
          <p className="eyebrow"><span>03</span> Portfolio decision</p>
          <h2>Balanced Transformation offers the strongest all-round conversion logic.</h2>
        </div>
        <div className="insight-grid">
          <div className="constraint-visual" aria-label="Balanced Transformation is the recommended default pathway">
            <span>Recommended default</span>
            <strong>Balanced</strong>
            <div><i style={{ width: "75%" }} /></div>
            <small>Capability, public value, and resilience</small>
          </div>
          <div className="prose-block compact-prose">
            <p>The recommended pathway combines productivity infrastructure with human capital, export-oriented diversification, climate resilience, and stronger institutions while continuing to accumulate a fiscal buffer.</p>
            <p>A rolling downside trigger re-sequences new discretionary commitments if the petroleum-revenue outlook falls below 80% of the reference path or the modeled buffer falls below US$2 billion.</p>
          </div>
        </div>
      </section>

      <section className="case-section case-downloads">
        <div className="shell">
          <div className="case-section-heading split-heading">
            <p className="eyebrow"><span>04</span> Project files</p>
            <h2>Review the model, written case study, or executive presentation.</h2>
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
        <p className="eyebrow"><span>✦</span> Core conclusion</p>
        <h2>Maximize the quality of conversion—not the speed of spending alone.</h2>
        <Link className="button primary" href="/projects/">Explore more projects <ArrowIcon /></Link>
      </section>
    </>
  );
}
