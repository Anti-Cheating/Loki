export function Features() {
  return (
    <section className="section" id="detection">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: '62ch' }}>
          <span className="kicker">Multi-signal detection</span>
          <h2 className="h2">One signal can lie. Together they don&apos;t.</h2>
          <p className="lead">
            No single tell proves a candidate is cheating. Trueyy reads several signals at once and weighs them against each other, so an honest pause never looks the same as a hidden assistant feeding answers.
          </p>
        </div>
        <div className="det-grid">
          <article className="card reveal" data-d="1">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
              </svg>
            </div>
            <h3>AI assistant use</h3>
            <p>Spots the rhythm of answers piped in from an AI tool, including the tell-tale lag between a question and a suspiciously complete reply.</p>
          </article>
          <article className="card reveal" data-d="2">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 21h8M12 18v3M7 9l3 3-3 3" />
              </svg>
            </div>
            <h3>App &amp; window switching</h3>
            <p>Notices when focus leaves the interview for another app or a hidden window mid-answer, and logs exactly when it happened.</p>
          </article>
          <article className="card reveal" data-d="3">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="8" y="2" width="8" height="4" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
            </div>
            <h3>Clipboard activity</h3>
            <p>Catches large pastes that arrive faster than anyone could type, a common sign of pre-written or generated answers.</p>
          </article>
          <article className="card reveal" data-d="4">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
              </svg>
            </div>
            <h3>Reading behavior</h3>
            <p>Reads gaze and timing patterns that suggest a candidate is reading from a script or a second screen instead of speaking freely.</p>
          </article>
          <article className="card reveal" data-d="1">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v18M5 8l7-5 7 5M5 8v8l7 5 7-5V8" />
              </svg>
            </div>
            <h3>Second-device signals</h3>
            <p>Surfaces patterns that point to a phone or extra monitor just out of frame, where help is most often hiding.</p>
          </article>
          <article className="card reveal" data-d="2">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 12h4l3 8 4-16 3 8h4" />
              </svg>
            </div>
            <h3>Answer cadence</h3>
            <p>Models how a person naturally builds an answer, so unnatural fluency and perfect structure stand out instead of slipping by.</p>
          </article>
        </div>
        <div className="center" style={{ marginTop: '34px' }}>
          <a className="btn btn--ghost" href="#command">
            See the command center <span className="arw">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
