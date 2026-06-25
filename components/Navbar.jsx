"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import { MenuIcon, ArrowIcon } from "./icons";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#fair", label: "Fair pricing" },
  { href: "#apps", label: "Apps" },
  { href: "#partners", label: "For stores & riders" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="next. home">
          <Wordmark />
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a
            href="#partners"
            className="btn btn-ghost"
            style={{ padding: "11px 20px" }}
          >
            Partner with us
          </a>
          <a
            href="#download"
            className="btn btn-primary"
            style={{ padding: "11px 22px" }}
          >
            Get the app
            <ArrowIcon style={{ width: 16, height: 16 }} />
          </a>
          <button className="nav-toggle" aria-label="Open menu">
            <MenuIcon style={{ width: 26, height: 26 }} />
          </button>
        </div>
      </div>
    </nav>
  );
}
