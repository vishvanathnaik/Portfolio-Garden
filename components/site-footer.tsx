import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">Vishvanath Naik</p>
          <p className="muted">A living portfolio of work, questions, and connections.</p>
        </div>
        <div className="footer-links">
          <Link href="/about/">About</Link>
          <Link href="/projects/">Projects</Link>
          <Link href="/writing/">Writing</Link>
          <Link href="/resume/">Résumé</Link>
          <Link href="/contact/">Contact</Link>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          {site.facebook ? <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a> : null}
        </div>
        <div className="footer-meta">
          <p>Built thoughtfully in Berlin.</p>
          <p>© {new Date().getFullYear()} Vishvanath Naik</p>
        </div>
      </div>
    </footer>
  );
}
