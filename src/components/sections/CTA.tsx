export function CTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-band reveal">
          <div className="glow" />
          <span className="kicker kicker--center">Trust your interviews again</span>
          <h2 className="h2" style={{ margin: '14px 0 16px' }}>
            The best candidates don&apos;t need AI to get through your screen
          </h2>
          <p className="lead" style={{ margin: '0 auto 30px' }}>
            Book a 20-minute demo. We will run a mock session live, show you what the dashboard looks like during a real call, and walk you through how the scoring model works.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary btn--lg" href="#waitlist">
              Book a demo <span className="arw">&rarr;</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="#waitlist">
              See early access pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
