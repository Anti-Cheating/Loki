export function Comparison() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker kicker--center">Why Trueyy</span>
          <h2 className="h2">Built for live interviews, not locked-down exams</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Old-school proctoring was made for timed tests. It locks browsers and watches faces. Live hiring conversations need something that reads intent, not just movement.
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
              ['Detects AI assistant use in real time', 'Limited', 'Yes'],
              ['Works inside Zoom, Meet and Teams', 'No', 'Yes'],
              ['Weighs several signals together', 'Rule-based', 'Yes'],
              ['Light footprint for the candidate', 'Heavy', 'Yes'],
              ['Plain-language timeline after the call', 'No', 'Yes'],
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
