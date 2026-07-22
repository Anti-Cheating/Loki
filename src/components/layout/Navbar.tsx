"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/features", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/security", label: "Security" },
  { href: "/comparison", label: "Compare" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (navOpen) document.body.classList.add("nav-open");
    else document.body.classList.remove("nav-open");
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        {/* Utility bar */}
        <div className="util-bar">
          <div className="util-bar-left">
            {/* Announcement slot — add content here when needed */}
          </div>
          <div className="util-bar-right">
            <a
              className="util-login"
              href="https://app.trueyy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.547 8l-4.195 4.195 1.12 1.12L11.786 8 6.471 2.685l-1.12 1.12L9.548 8z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="wrap nav">
          <Link className="brand" href="/">
            <img src="/trueyy-logo-light.svg" alt="Trueyy" className="nav-logo" />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "active" : ""}
                onClick={() => setNavOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              className="btn btn--primary nav-cta-mobile"
              href="https://app.trueyy.com/signup"
              rel="noopener"
              onClick={() => setNavOpen(false)}
            >
              Start free trial
            </a>
          </nav>
          <div className="nav-right">
            <a
              className="btn btn--primary nav-cta-desktop"
              href="https://app.trueyy.com/signup"
              rel="noopener"
            >
              Start free trial <span className="arw">&rarr;</span>
            </a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((o) => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
