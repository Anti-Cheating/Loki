export function CTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-band reveal">
          <div className="glow" />
          <span className="kicker kicker--center">Trust your interviews again</span>
          <h2 className="h2" style={{ margin: '14px 0 16px' }}>
            Hire the person who actually did the work
          </h2>
          <p className="lead" style={{ margin: '0 auto 30px' }}>
            See Trueyy read a live interview in real time. Book a short demo and we will show you exactly what you have been missing.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary btn--lg" href="#waitlist">
              Book a demo <span className="arw">&rarr;</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="#waitlist">
              See early access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
