import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <span className="dot" />
              Trueyy
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
            <Link href="/demo">Book a demo</Link>
            <Link href="/demo">Contact</Link>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <Link href="/security">Privacy</Link>
            <Link href="/security">Terms</Link>
            <Link href="/security">Compliance</Link>
          </div>
        </div>
        <div className="foot-bot">
          <span>&copy; {new Date().getFullYear()} Trueyy. All rights reserved.</span>
          <span className="lights">
            <i style={{ background: 'var(--flag)' }} />
            <i style={{ background: 'var(--amber)' }} />
            <i style={{ background: 'var(--green)' }} />
          </span>
        </div>
      </div>
    </footer>
  );
}
