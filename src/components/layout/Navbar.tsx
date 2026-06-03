'use client';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <a className="brand" href="#">
          <span className="dot" />
          Trueyy
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#detection" onClick={() => setNavOpen(false)}>Product</a>
          <a href="#how" onClick={() => setNavOpen(false)}>How it works</a>
          <a href="#security" onClick={() => setNavOpen(false)}>Security</a>
          <a href="#why" onClick={() => setNavOpen(false)}>Compare</a>
          <a href="#waitlist" onClick={() => setNavOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setNavOpen(false)}>FAQ</a>
          <a className="btn btn--primary nav-cta-mobile" href="#waitlist" onClick={() => setNavOpen(false)}>
            Book a demo
          </a>
        </nav>
        <div className="nav-right">
          <a className="btn btn--primary nav-cta-desktop" href="#waitlist">
            Book a demo <span className="arw">&rarr;</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
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
