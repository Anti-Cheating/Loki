export function Security() {
  return (
    <section className="section" id="security">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker kicker--center">Security and privacy</span>
          <h2 className="h2">Monitoring candidates is not the same as surveilling them</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            There is a real difference between knowing what a candidate&apos;s device was doing and watching their face through a camera for signs of distress. Trueyy is the first thing, firmly.
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
            <h3>Consent before anything</h3>
            <p>Candidates see exactly what Trueyy observes, in plain language, before the session opens. The list is specific. Nothing is buried in a privacy policy.</p>
          </div>
          <div className="card reveal" data-d="2">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
            </div>
            <h3>No video on our servers</h3>
            <p>Trueyy reads device signals. Video stays inside Zoom, Meet, or Teams. Nothing is recorded, stored, or analyzed on Trueyy infrastructure.</p>
          </div>
          <div className="card reveal" data-d="3">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3>GDPR and SOC 2 ready</h3>
            <p>Consent flows, audit logs, and data-subject request tooling are part of the product from day one. Not add-ons. Not planned for a future release.</p>
          </div>
          <div className="card reveal" data-d="1">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <line x1="12" y1="15" x2="12" y2="18" />
              </svg>
            </div>
            <h3>End-to-end encryption</h3>
            <p>All signal data is encrypted in transit and at rest. Only team members you authorize can access a session log. Access is logged and auditable.</p>
          </div>
          <div className="card reveal" data-d="2">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <h3>You control retention</h3>
            <p>Your organization sets how long session data lives. You can configure per-team retention windows and delete individual sessions on request at any time.</p>
          </div>
          <div className="card reveal" data-d="3">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Candidate review path</h3>
            <p>Candidates who believe a flag was incorrect can request a formal review. The process is documented and runs through your HR team, not ours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
