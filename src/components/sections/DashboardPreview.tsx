'use client';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ── Typed text — characters appear one by one ────────────────────────
function TypedLine({ text, delay, time }: { text: string; delay: number; time: string }) {
  return (
    <div className="flex gap-2">
      <motion.span
        className="text-[9px] text-[rgba(255,255,255,0.3)] font-mono w-10 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        {time}
      </motion.span>
      <span className="text-[10px] text-[#E5E7EB]">
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

// ── Circular risk gauge ──────────────────────────────────────────────
function RiskGauge({ score, delay }: { score: number; delay: number }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  const pct = score / 100;
  const color = score >= 60 ? '#f59e0b' : score >= 40 ? '#4CD964' : '#4CD964';

  return (
    <div className="flex flex-col items-center">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
        <motion.circle
          cx="24" cy="24" r={r}
          fill="none" stroke={color} strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={{ delay, duration: 1.2, ease: 'easeOut' }}
          transform="rotate(-90 24 24)"
        />
        <motion.text
          x="24" y="26"
          textAnchor="middle"
          fill={color}
          className="text-[11px] font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        >
          {score}
        </motion.text>
      </svg>
      <span className="text-[7px] text-[rgba(255,255,255,0.35)] mt-0.5">Risk Score</span>
    </div>
  );
}

export function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-[#0D1F13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Real-Time Command Center
          </h2>
          <p className="text-[#E5E7EB] max-w-2xl mx-auto">
            Live risk scores, AI tool alerts, app activity, and screenshot analysis — all in one view. Know exactly when a candidate opens ChatGPT, switches to a cheat sheet, or pastes from an external source.
          </p>
        </AnimatedSection>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Glow */}
          <motion.div
            className="absolute -inset-8 rounded-3xl blur-3xl"
            style={{ background: 'radial-gradient(ellipse at center, rgba(76,217,100,0.08) 0%, transparent 70%)' }}
            animate={isInView ? { opacity: [0.4, 0.7, 0.4] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Dashboard container — scales in */}
          <motion.div
            className="relative bg-[#0B1A10] rounded-2xl border border-[rgba(76,217,100,0.15)] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <motion.div
              className="bg-[#0B1A10] px-4 py-2.5 border-b border-[rgba(76,217,100,0.1)] flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#4CD964]"
                  animate={isInView ? { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-semibold text-white">Technical Interview - John Smith</span>
                <motion.span
                  className="text-[10px] text-[#4CD964] font-semibold ml-2"
                  animate={isInView ? { opacity: [1, 0.3, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIVE
                </motion.span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.1)]" />
                <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.1)]" />
                <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.1)]" />
              </div>
            </motion.div>

            <div className="flex">
              {/* Main area */}
              <div className="flex-1 p-4 min-h-[300px] sm:min-h-[360px]">
                {/* Transcript — typed lines */}
                <motion.div
                  className="bg-[#122318] rounded-lg p-3 mb-3 border border-[rgba(76,217,100,0.06)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {isInView && (
                    <div className="space-y-1.5">
                      <TypedLine time="2:34" text={`"...so I would approach this by first analyzing the data structures..."`} delay={0.8} />
                      <TypedLine time="2:41" text={`"...and then implementing a hash map for O(1) lookups..."`} delay={2.2} />
                      <motion.div
                        className="flex gap-1 items-center pt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                      >
                        {[0, 0.2, 0.4].map((d) => (
                          <motion.div
                            key={d}
                            className="w-1 h-1 rounded-full bg-[#4CD964]/50"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: d }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Meeting area with scan effect */}
                <motion.div
                  className="bg-[#122318] rounded-xl flex-1 min-h-[180px] sm:min-h-[220px] flex items-center justify-center border border-[rgba(76,217,100,0.06)] relative overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4CD964]/15 to-transparent"
                    animate={isInView ? { top: ['5%', '95%', '5%'] } : {}}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Fake participant grid */}
                  <div className="grid grid-cols-2 gap-2 p-6 w-full max-w-[280px]">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="bg-[rgba(255,255,255,0.02)] rounded-lg aspect-video border border-[rgba(255,255,255,0.04)] flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-[rgba(255,255,255,0.04)]" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.div
                className="w-48 sm:w-56 bg-[#0B1A10] border-l border-[rgba(76,217,100,0.1)] p-3 space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* Risk gauge */}
                <div className="flex justify-center">
                  {isInView && <RiskGauge score={73} delay={1.0} />}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { v: '45', l: 'Session', c: '#4CD964' },
                    { v: 'MED', l: 'Risk', c: '#f59e0b' },
                    { v: '12', l: 'Windows', c: '#E5E7EB' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.l}
                      className="bg-[#122318] rounded-md p-1.5 text-center"
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                    >
                      <div className="text-[10px] font-bold" style={{ color: s.c }}>{s.v}</div>
                      <div className="text-[6px] text-[rgba(255,255,255,0.3)]">{s.l}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart — path draws */}
                <motion.div
                  className="bg-[#122318] rounded-md p-1.5"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.0 }}
                >
                  <svg viewBox="0 0 120 24" className="w-full h-5">
                    <motion.path
                      d="M0,18 Q15,16 30,14 T60,10 T90,13 T120,8"
                      fill="none" stroke="#4CD964" strokeWidth="1.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ delay: 1.4, duration: 1.5, ease: 'easeInOut' }}
                    />
                    {/* Glow trace */}
                    <motion.path
                      d="M0,18 Q15,16 30,14 T60,10 T90,13 T120,8"
                      fill="none" stroke="#4CD964" strokeWidth="3" strokeLinecap="round" opacity="0.15"
                      filter="blur(2px)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.15 } : {}}
                      transition={{ delay: 1.4, duration: 1.5, ease: 'easeInOut' }}
                    />
                  </svg>
                </motion.div>

                {/* Modality bars */}
                <div className="space-y-1.5">
                  <motion.div
                    className="text-[8px] font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.5 }}
                  >
                    Modality
                  </motion.div>
                  {[
                    { l: 'Apps', s: 65, c: '#f59e0b', r: 'HIGH' },
                    { l: 'Keys', s: 30, c: '#4CD964', r: 'LOW' },
                    { l: 'Voice', s: 15, c: '#4CD964', r: 'LOW' },
                  ].map((m, i) => (
                    <div key={m.l}>
                      <div className="flex justify-between mb-0.5">
                        <span className="text-[8px] text-[rgba(255,255,255,0.5)]">{m.l}</span>
                        <motion.span
                          className="text-[8px] font-bold"
                          style={{ color: m.c }}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: 1.8 + i * 0.15 }}
                        >
                          {m.r}
                        </motion.span>
                      </div>
                      <div className="h-1 bg-[#0D1F13] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: m.c }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${m.s}%` } : {}}
                          transition={{ delay: 1.6 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alerts — spring in */}
                <div className="space-y-1">
                  <motion.div
                    className="text-[8px] font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.0 }}
                  >
                    Alerts
                  </motion.div>
                  {[
                    { label: 'AI TOOLS', color: '#F87171', bg: 'rgba(248,113,113,0.06)', border: 'rgba(248,113,113,0.12)', count: '1' },
                    { label: 'PASTE', color: '#FB923C', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.12)', count: '5+' },
                  ].map((a, i) => (
                    <motion.div
                      key={a.label}
                      className="rounded px-1.5 py-1 flex items-center gap-1.5"
                      style={{ backgroundColor: a.bg, border: `1px solid ${a.border}` }}
                      initial={{ x: 30, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 2.2 + i * 0.2, type: 'spring', stiffness: 200, damping: 20 }}
                    >
                      <motion.div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: a.color }}
                        animate={isInView ? { opacity: [1, 0.3, 1] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <span className="text-[7px] font-semibold" style={{ color: a.color }}>{a.label}</span>
                      <span className="text-[7px] text-[rgba(255,255,255,0.3)] ml-auto">{a.count}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Callout labels */}
          <motion.div
            className="hidden lg:block absolute -right-36 top-16"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#4CD964] font-medium">Live Risk Score</span>
              <motion.div
                className="h-px bg-[#4CD964]/40"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
            </div>
          </motion.div>
          <motion.div
            className="hidden lg:block absolute -right-36 top-56"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 2.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#F87171] font-medium">Instant Alerts</span>
              <motion.div
                className="h-px bg-[#F87171]/40"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ delay: 2.6, duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
