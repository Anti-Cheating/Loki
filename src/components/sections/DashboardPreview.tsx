'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function TypedLine({ text, delay, time }: { text: string; delay: number; time: string }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <motion.span
        style={{ fontSize: '9px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', width: '40px', flexShrink: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        {time}
      </motion.span>
      <span style={{ fontSize: '10px', color: 'var(--text)' }}>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + i * 0.015, duration: 0.01 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </div>
  );
}

function RiskGauge({ score, delay, isInView }: { score: number; delay: number; isInView: boolean }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  const pct = score / 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
        <motion.circle
          cx="24" cy="24" r={r}
          fill="none"
          style={{ stroke: 'var(--amber)' }}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={isInView ? { strokeDashoffset: c * (1 - pct) } : {}}
          transition={{ delay, duration: 1.2, ease: 'easeOut' }}
          transform="rotate(-90 24 24)"
        />
        <motion.text
          x="24" y="26"
          textAnchor="middle"
          style={{ fill: 'var(--amber)', fontSize: '11px', fontWeight: 'bold' } as React.CSSProperties}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.4 }}
        >
          {score}
        </motion.text>
      </svg>
      <span style={{ fontSize: '7px', color: 'var(--text-dim)', marginTop: '2px' }}>Risk Score</span>
    </div>
  );
}

export function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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

          {/* Left copy — unchanged */}
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

          {/* Right: animated panel */}
          <div ref={ref} className="cc-panel reveal" data-d="1" role="img" aria-label="Trueyy live monitoring dashboard" style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Top bar — same as before */}
            <div className="cc-bar">
              <span className="cc-live">
                <i className="live-dot" /> Live session
              </span>
              <span className="cc-time">{clock}</span>
            </div>

            {/* Animated body */}
            <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>

              {/* Main area: transcript + meeting tiles */}
              <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

                {/* Transcript */}
                <motion.div
                  style={{ background: 'var(--surface)', borderRadius: '10px', padding: '12px', border: '1px solid var(--line-soft)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {isInView && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <TypedLine time="2:34" text={`"...first analyzing the data structures..."`} delay={0.8} />
                      <TypedLine time="2:41" text={`"...hash map for O(1) lookups..."`} delay={2.2} />
                      <motion.div
                        style={{ display: 'flex', gap: '4px', alignItems: 'center', paddingTop: '4px' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                      >
                        {[0, 0.2, 0.4].map((d) => (
                          <motion.div
                            key={d}
                            style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--green)' }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: d }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Meeting tiles with scan line */}
                <motion.div
                  style={{ background: 'var(--surface)', borderRadius: '10px', flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', border: '1px solid var(--line-soft)', position: 'relative', overflow: 'hidden' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <motion.div
                    style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, oklch(0.84 0.19 150 / 0.18), transparent)' }}
                    animate={isInView ? { top: ['5%', '95%', '5%'] } : {}}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '20px', width: '100%', maxWidth: '220px', margin: '0 auto' }}>
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        style={{ background: 'var(--bg-2)', borderRadius: '8px', aspectRatio: '16/9', border: '1px solid var(--line-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
                      >
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--line)' }} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar — animated right pane from master */}
              <motion.div
                style={{ width: '168px', background: 'var(--bg-2)', borderLeft: '1px solid var(--line-soft)', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexShrink: 0 }}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* Risk gauge */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <RiskGauge score={73} delay={1.0} isInView={isInView} />
                </div>

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                  {[
                    { v: '45', l: 'Session', c: 'var(--green)' },
                    { v: 'MED', l: 'Risk', c: 'var(--amber)' },
                    { v: '12', l: 'Windows', c: 'var(--text)' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.l}
                      style={{ background: 'var(--surface)', borderRadius: '6px', padding: '5px', textAlign: 'center' }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                    >
                      <div style={{ fontSize: '10px', fontWeight: 'bold', color: stat.c }}>{stat.v}</div>
                      <div style={{ fontSize: '6px', color: 'var(--text-dim)' }}>{stat.l}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated chart */}
                <motion.div
                  style={{ background: 'var(--surface)', borderRadius: '6px', padding: '6px' }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.0 }}
                >
                  <svg viewBox="0 0 120 24" style={{ width: '100%', height: '20px' }}>
                    <motion.path
                      d="M0,18 Q15,16 30,14 T60,10 T90,13 T120,8"
                      fill="none"
                      style={{ stroke: 'var(--green)' }}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ delay: 1.4, duration: 1.5, ease: 'easeInOut' }}
                    />
                    <motion.path
                      d="M0,18 Q15,16 30,14 T60,10 T90,13 T120,8"
                      fill="none"
                      style={{ stroke: 'var(--green)', opacity: 0.15 }}
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ delay: 1.4, duration: 1.5, ease: 'easeInOut' }}
                    />
                  </svg>
                </motion.div>

                {/* Modality bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <motion.div
                    style={{ fontSize: '8px', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.5 }}
                  >
                    Modality
                  </motion.div>
                  {[
                    { l: 'Apps', s: 65, c: 'var(--amber)', r: 'HIGH' },
                    { l: 'Keys', s: 30, c: 'var(--green)', r: 'LOW' },
                    { l: 'Voice', s: 15, c: 'var(--green)', r: 'LOW' },
                  ].map((mod, i) => (
                    <div key={mod.l}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                        <span style={{ fontSize: '8px', color: 'var(--text-dim)' }}>{mod.l}</span>
                        <motion.span
                          style={{ fontSize: '8px', fontWeight: 'bold', color: mod.c }}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: 1.8 + i * 0.15 }}
                        >
                          {mod.r}
                        </motion.span>
                      </div>
                      <div style={{ height: '4px', background: 'var(--bg)', borderRadius: '999px', overflow: 'hidden' }}>
                        <motion.div
                          style={{ height: '100%', borderRadius: '999px', background: mod.c }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${mod.s}%` } : {}}
                          transition={{ delay: 1.6 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alerts */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <motion.div
                    style={{ fontSize: '8px', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.0 }}
                  >
                    Alerts
                  </motion.div>
                  {[
                    { label: 'AI TOOLS', color: 'var(--flag)', bg: 'oklch(0.68 0.20 28 / 0.06)', border: 'oklch(0.68 0.20 28 / 0.18)', count: '1' },
                    { label: 'PASTE', color: 'var(--amber)', bg: 'oklch(0.82 0.15 78 / 0.06)', border: 'oklch(0.82 0.15 78 / 0.18)', count: '5+' },
                  ].map((alert, i) => (
                    <motion.div
                      key={alert.label}
                      style={{ borderRadius: '6px', padding: '4px 6px', display: 'flex', alignItems: 'center', gap: '6px', background: alert.bg, border: `1px solid ${alert.border}` }}
                      initial={{ x: 30, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 2.2 + i * 0.2, type: 'spring', stiffness: 200, damping: 20 }}
                    >
                      <motion.div
                        style={{ width: '4px', height: '4px', borderRadius: '50%', background: alert.color, flexShrink: 0 }}
                        animate={isInView ? { opacity: [1, 0.3, 1] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <span style={{ fontSize: '7px', fontWeight: 600, color: alert.color }}>{alert.label}</span>
                      <span style={{ fontSize: '7px', color: 'var(--text-dim)', marginLeft: 'auto' }}>{alert.count}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
