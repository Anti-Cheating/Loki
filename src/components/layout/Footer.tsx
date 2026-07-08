'use client';
import Link from 'next/link';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <img src="/trueyy-logo-light.svg" alt="Trueyy" className="nav-logo" />
            </Link>
            <p>Real-time interview integrity for remote hiring teams that care about a fair process.</p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <Link href="/features">Detection</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/comparison">Compare</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/resources">Resources</Link>
            <Link href="/security">Security</Link>
            <BookDemoButton asAnchor>Book a demo</BookDemoButton>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/sub-processors">Sub-processors</Link>
          </div>
        </div>
        <div className="foot-bot">
          <span>&copy; {new Date().getFullYear()} Trueyy. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
