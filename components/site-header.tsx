"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "@/components/icons";
import { navigation } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="wordmark" href="/" aria-label="Vishvanath Naik, home">
          <span className="wordmark-mark">VN</span>
          <span>Vishvanath Naik</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">
          <span className="sr-only">Toggle navigation</span>
          <MenuIcon />
        </button>
        <nav id="site-nav" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link className={pathname === item.href ? "is-active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="contact-link" href="/contact/" onClick={() => setOpen(false)}>Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
