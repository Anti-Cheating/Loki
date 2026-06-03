export function Features() {
  return (
    <section className="section" id="detection">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: '62ch' }}>
          <span className="kicker">Six detection layers</span>
          <h2 className="h2">What one signal misses, the next one catches</h2>
          <p className="lead">
            Cheating tools leave traces. Not obvious ones. Subtle ones. Trueyy reads them in combination so a single odd moment stays in context rather than firing a false alarm.
          </p>
        </div>
        <div className="det-bento">
          {/* Tall featured card — AI fingerprinting */}
          <article className="card card--featured bento-tall reveal" data-d="1">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
              </svg>
            </div>
            <h3>AI tool fingerprinting</h3>
            <p>Trueyy recognizes the structural output signatures of ChatGPT, Claude, Gemini, Cluely, and InterviewCoder. Not by flagging certain words. By reading the pattern their outputs leave in a live answer.</p>
            <div className="trust-badges" style={{ marginTop: '20px' }}>
              <span className="badge-trust"><span className="bt-dot" /> ChatGPT</span>
              <span className="badge-trust"><span className="bt-dot" /> Claude</span>
              <span className="badge-trust"><span className="bt-dot" /> Gemini</span>
              <span className="badge-trust"><span className="bt-dot" /> Cluely</span>
              <span className="badge-trust"><span className="bt-dot" /> InterviewCoder</span>
            </div>
          </article>

          {/* App focus */}
          <article className="card reveal" data-d="2">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 21h8M12 18v3M7 9l3 3-3 3" />
              </svg>
            </div>
            <h3>App and window focus</h3>
            <p>When a candidate tabs to another app mid-question, the timestamp lands in the feed. Context switches are logged even when the candidate returns in under a second.</p>
          </article>

          {/* Paste velocity */}
          <article className="card reveal" data-d="3">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="8" y="2" width="8" height="4" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
            </div>
            <h3>Paste velocity</h3>
            <p>A 200-word answer pasted in 0.3 seconds was not typed. Trueyy flags paste events that exceed any plausible human input rate and logs the exact text length and timing.</p>
          </article>

          {/* Gaze patterns */}
          <article className="card reveal" data-d="1">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
              </svg>
            </div>
            <h3>Reading gaze patterns</h3>
            <p>Eyes scanning a fixed invisible line look different from eyes freely watching a speaker. Trueyy distinguishes the two without camera lock or face-tracking software.</p>
          </article>

          {/* Off-screen */}
          <article className="card reveal" data-d="2">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v18M5 8l7-5 7 5M5 8v8l7 5 7-5V8" />
              </svg>
            </div>
            <h3>Off-screen device signals</h3>
            <p>Audio artifacts, ambient light shifts, and timing gaps point to a phone below frame or a monitor just out of shot. These surface as low-confidence signals, not accusations.</p>
          </article>

          {/* Wide — answer structure */}
          <article className="card bento-wide reveal" data-d="3">
            <div className="card-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 12h4l3 8 4-16 3 8h4" />
              </svg>
            </div>
            <h3>Answer structure analysis</h3>
            <p>Someone thinking through a problem builds an answer that meanders slightly. An AI-generated answer arrives in four clean bullet points with exactly parallel structure. Trueyy learns to tell them apart.</p>
          </article>

          {/* CTA card */}
          <a className="det-cta-card reveal" href="#command" data-d="1">
            <p>See all six signals working together in the live command center.</p>
            <span className="btn btn--ghost" style={{ pointerEvents: 'none' }}>
              View dashboard <span className="arw">&rarr;</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
