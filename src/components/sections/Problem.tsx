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
          <span className="kicker">The real cost of a bad hire</span>
          <h2 className="h2">You hired their prompts. Not them.</h2>
          <p className="lead">
            An answer that arrives in two seconds and covers every edge case perfectly is not impressive. It is suspicious. The signals that separate a sharp candidate from a well-prompted one are in the session data. Most teams never look at them.
          </p>
        </div>
        <div className="stat-band reveal" data-d="1">
          <div className="stat-cell">
            <CountUp target={72} suffix="%" />
            <p className="stat-lbl">of hiring managers suspect they have extended an offer to a candidate who used AI or outside help during the live interview.</p>
          </div>
          <div className="stat-cell">
            <CountUp target={4} suffix="x" />
            <p className="stat-lbl">surge in AI-assisted interview cheating reports since GPT-4 became widely available, with no sign of the trend reversing.</p>
          </div>
          <div className="stat-cell">
            <CountUp target={47} suffix="K" />
            <p className="stat-lbl">dollar average cost of replacing a wrong technical hire once onboarding, lost productivity, and rehire expenses are totalled.</p>
          </div>
        </div>
        <p className="stat-foot dim">Based on published remote hiring research and industry surveys, 2024-2025.</p>
      </div>
    </section>
  );
}
