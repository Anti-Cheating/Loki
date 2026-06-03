export function Comparison() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker kicker--center">Why Trueyy</span>
          <h2 className="h2">Proctoring tools were built for test centers, not conversations</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Traditional proctoring locks browsers and watches faces. That works for a timed exam where the question is: did this person copy? It does almost nothing for a 45-minute live conversation where the question is: did this person actually think through the problem?
          </p>
        </div>
        <div className="cmp reveal" data-d="1">
          <div className="cmp-head">
            <div className="cmp-cell cmp-feat">Capability</div>
            <div className="cmp-cell cmp-old">Traditional proctoring</div>
            <div className="cmp-cell cmp-new">Trueyy</div>
          </div>
          <div className="cmp-rows">
            {[
              ['Runs during a live two-way interview', 'No', 'Yes'],
              ['Detects AI tool use in real time', 'Limited', 'Yes'],
              ['Works inside Zoom, Meet, and Teams', 'No', 'Yes'],
              ['Specifically detects Cluely and InterviewCoder', 'No', 'Yes'],
              ['Weighs signals together instead of single triggers', 'Rule-based', 'Yes'],
              ['No heavy browser install for candidates', 'Heavy', 'Yes'],
              ['Timestamped session log after the call', 'No', 'Yes'],
              ['No video stored on third-party servers', 'No', 'Yes'],
              ['Consent-first with full candidate disclosure', 'No', 'Yes'],
            ].map(([feat, old, neo]) => (
              <div key={feat} className="cmp-row">
                <div className="cmp-cell cmp-feat">{feat}</div>
                <div className="cmp-cell cmp-old"><span className="x">{old}</span></div>
                <div className="cmp-cell cmp-new"><span className="y">{neo}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="center" style={{ marginTop: '28px' }}>
          <a className="btn btn--ghost" href="#security">
            Read our security approach <span className="arw">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
