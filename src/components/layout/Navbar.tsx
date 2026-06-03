'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/features', label: 'Product' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/security', label: 'Security' },
  { href: '/comparison', label: 'Compare' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 12); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (navOpen) document.body.classList.add('nav-open');
    else document.body.classList.remove('nav-open');
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav">
          <Link className="brand" href="/">
            <span className="dot" />
            Trueyy
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link className="btn btn--primary nav-cta-mobile" href="/demo" onClick={() => setNavOpen(false)}>
              Book a demo
            </Link>
          </nav>
          <div className="nav-right">
            <Link className="btn btn--primary nav-cta-desktop" href="/demo">
              Book a demo <span className="arw">&rarr;</span>
            </Link>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(o => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
