export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker kicker--center">How it works</span>
          <h2 className="h2">Four steps. Your interviewers do one of them.</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Trueyy fits into the hiring process you already run. Set it up once, then let it run silently in the background of every call while your team focuses on the conversation.
          </p>
        </div>
        <div className="steps">
          <div className="step card reveal" data-d="1">
            <span className="step-no">01</span>
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <h3>Schedule</h3>
            <p>Drop a Trueyy link into the calendar invite alongside the Zoom or Meet link. Nothing else changes about how your team books the interview.</p>
          </div>
          <div className="step card reveal" data-d="2">
            <span className="step-no">02</span>
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 10l4.5-2.5v9L15 14" />
                <rect x="3" y="6" width="12" height="12" rx="2" />
              </svg>
            </div>
            <h3>Connect</h3>
            <p>The candidate clicks their link, reads what is being monitored and why, and consents before anything starts. The session opens beside the video call. No download required.</p>
          </div>
          <div className="step card reveal" data-d="3">
            <span className="step-no">03</span>
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
              </svg>
            </div>
            <h3>Monitor</h3>
            <p>Trueyy reads device signals as the conversation runs and scores integrity every 30 seconds. Your interviewer sees a live feed without having to ask the candidate anything different.</p>
          </div>
          <div className="step card reveal" data-d="4">
            <span className="step-no">04</span>
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
              </svg>
            </div>
            <h3>Review</h3>
            <p>The session ends with a plain-language timeline, a final integrity score, and a shareable summary that attaches directly to the candidate scorecard in your ATS.</p>
          </div>
        </div>
        <div className="center" style={{ marginTop: '34px' }}>
          <a className="btn btn--ghost" href="#detection">
            Explore every detection layer <span className="arw">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
