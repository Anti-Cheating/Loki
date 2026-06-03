export function Security() {
  return (
    <section className="section" id="security">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker kicker--center">Security &amp; privacy</span>
          <h2 className="h2">Honest monitoring, handled with care</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Watching for cheating should never mean treating candidates badly. Trueyy is built to be transparent with people and strict with their data.
          </p>
        </div>
        <div className="grid-3" style={{ marginTop: '48px' }}>
          <div className="card reveal" data-d="1">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>Transparent by default</h3>
            <p>Candidates are told what is being monitored before the interview starts. No hidden tracking, no surprises.</p>
          </div>
          <div className="card reveal" data-d="2">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
            </div>
            <h3>Encrypted end to end</h3>
            <p>Session data is encrypted in transit and at rest. You control how long it lives and who on your team can see it.</p>
          </div>
          <div className="card reveal" data-d="3">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3>Compliance ready</h3>
            <p>Built around GDPR and SOC 2 expectations, with consent flows and retention controls baked in from the start.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
