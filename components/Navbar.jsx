"use client";

import { useEffect, useState } from "react";
import { ShieldIcon, MenuIcon, ArrowIcon } from "./icons";

const LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#security", label: "Security" },
  { href: "#customers", label: "Customers" },
  { href: "#pricing", label: "Pricing" },
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
        <a href="#top" className="brand" aria-label="Veritrust home">
          <span className="brand-mark">
            <ShieldIcon style={{ width: 20, height: 20, color: "#fff" }} />
          </span>
          Veritrust
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
            href="#"
            className="btn btn-ghost"
            style={{ padding: "11px 20px" }}
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="btn btn-primary"
            style={{ padding: "11px 22px" }}
          >
            Get started
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
