'use client';
import { useEffect, useState } from 'react';

export function DashboardPreview() {
  const [seconds, setSeconds] = useState(14 * 60 + 22);

  useEffect(() => {
    const iv = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(iv);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const clock = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  return (
    <section className="section" id="command">
      <div className="wrap">
        <div className="cc-grid">
          <div className="cc-copy reveal">
            <span className="kicker">Your command center</span>
            <h2 className="h2">Know the score before the debrief</h2>
            <p className="lead">
              Trueyy runs a second feed alongside the call. Integrity score updates every 30 seconds. Every flag lands with a timestamp your team can scrub back to. After the call, one click drops the full session log onto the scorecard.
            </p>
            <ul className="cc-list">
              <li className="checkrow">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>
                <span>Integrity score recalculates every 30 seconds across three signal layers.</span>
              </li>
              <li className="checkrow">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>
                <span>Every flag links to a specific timestamp you can scrub to in the session log.</span>
              </li>
              <li className="checkrow">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>
                <span>One-click session summary attaches to any ATS scorecard or hiring workflow.</span>
              </li>
              <li className="checkrow">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>
                <span>Interviewers see the feed live. Nothing needs to be reviewed after the fact to act on it.</span>
              </li>
            </ul>
          </div>

          <div className="cc-panel reveal" data-d="1" role="img" aria-label="Trueyy live monitoring dashboard">
            <div className="cc-bar">
              <span className="cc-live">
                <i className="live-dot" /> Live session
              </span>
              <span className="cc-time">{clock}</span>
            </div>
            <div className="cc-body">
              <div className="cc-video">
                <div className="ph" style={{ minHeight: 0, aspectRatio: '16/10' }}>
                  candidate video tile
                </div>
                <div className="cc-score">
                  <div className="ring">
                    <span className="ring-val">82</span>
                    <span className="ring-lbl">integrity</span>
                  </div>
                </div>
              </div>
              <div className="cc-feed">
                <p className="cc-feed-h">Signal feed</p>
                <div className="cc-row ok">
                  <span className="cc-t">12:02</span>
                  <span className="cc-dot" />
                  <span className="cc-msg">Steady eye contact, natural pacing</span>
                </div>
                <div className="cc-row warn">
                  <span className="cc-t">12:31</span>
                  <span className="cc-dot" />
                  <span className="cc-msg">Brief window switch detected</span>
                </div>
                <div className="cc-row ok">
                  <span className="cc-t">13:08</span>
                  <span className="cc-dot" />
                  <span className="cc-msg">Answer cadence within expected range</span>
                </div>
                <div className="cc-row flag">
                  <span className="cc-t">13:44</span>
                  <span className="cc-dot" />
                  <span className="cc-msg">Large clipboard paste — AI signature match</span>
                </div>
                <div className="cc-row ok">
                  <span className="cc-t">14:10</span>
                  <span className="cc-dot" />
                  <span className="cc-msg">Back on camera, no off-screen signals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
