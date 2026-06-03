export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#">
              <span className="dot" />
              Trueyy
            </a>
            <p>Real-time interview integrity for remote hiring teams that care about a fair process.</p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href="#detection">Detection</a>
            <a href="#how">How it works</a>
            <a href="#why">Compare</a>
            <a href="#waitlist">Pricing</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#faq">Resources</a>
            <a href="#security">Security</a>
            <a href="#waitlist">Book a demo</a>
            <a href="#waitlist">Contact</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a href="#security">Privacy</a>
            <a href="#security">Terms</a>
            <a href="#security">Compliance</a>
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
