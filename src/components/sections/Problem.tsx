'use client';
import { useEffect, useRef, useState } from 'react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const elRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        let startTime: number | null = null;
        function step(ts: number) {
          if (!startTime) startTime = ts;
          const p = Math.min((ts - startTime) / 1400, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <div ref={elRef} className="stat-num">{value}{suffix}</div>;
}

export function Problem() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="prob-head reveal">
          <span className="kicker">The trust gap</span>
          <h2 className="h2">Remote interviews got easier to fake</h2>
          <p className="lead">
            A polished answer no longer proves much. The hard part is no longer running the interview, it is knowing whether the person on the call actually did the thinking. That gap costs teams real money and real time.
          </p>
        </div>
        <div className="stat-band reveal" data-d="1">
          <div className="stat-cell">
            <CountUp target={67} suffix="%" />
            <p className="stat-lbl">of recruiters say they have caught a candidate using outside help during a remote interview.</p>
          </div>
          <div className="stat-cell">
            <CountUp target={3} suffix="x" />
            <p className="stat-lbl">jump in suspected AI-assisted answers reported across remote hiring since 2023.</p>
          </div>
          <div className="stat-cell">
            <CountUp target={89} suffix="%" />
            <p className="stat-lbl">of hiring teams want a clear integrity signal before they extend an offer.</p>
          </div>
        </div>
        <p className="stat-foot dim">Directional figures drawn from public remote-hiring research.</p>
      </div>
    </section>
  );
}
