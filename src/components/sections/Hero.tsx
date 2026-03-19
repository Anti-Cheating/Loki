'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

function DashboardMockup() {
  return (
    <div className="relative animate-float">
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-[#4CD964]/5 rounded-3xl blur-2xl" />

      <div className="relative bg-[#122318] rounded-2xl border border-[rgba(76,217,100,0.15)] p-4 w-full max-w-sm shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4CD964] animate-pulse-dot" />
            <span className="text-xs font-semibold text-[#E5E7EB]">Risk Analytics</span>
          </div>
          <span className="text-[10px] text-[rgba(255,255,255,0.4)]">LIVE</span>
        </div>

        {/* Score row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          <div className="bg-[#0D1F13] rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-[#f59e0b]">73</div>
            <div className="text-[9px] text-[rgba(255,255,255,0.4)]">Recent</div>
          </div>
          <div className="bg-[#0D1F13] rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-[#4CD964]">45</div>
            <div className="text-[9px] text-[rgba(255,255,255,0.4)]">Session</div>
          </div>
          <div className="bg-[#0D1F13] rounded-lg p-2 text-center">
            <div className="text-[10px] font-bold text-[#f59e0b] mt-1">MEDIUM</div>
            <div className="text-[9px] text-[rgba(255,255,255,0.4)] mt-0.5">Risk</div>
          </div>
          <div className="bg-[#0D1F13] rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-[#E5E7EB]">12</div>
            <div className="text-[9px] text-[rgba(255,255,255,0.4)]">Windows</div>
          </div>
        </div>

        {/* Chart placeholder */}
        <div className="bg-[#0D1F13] rounded-lg p-2 mb-3">
          <svg viewBox="0 0 200 40" className="w-full h-8">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4CD964" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4CD964" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,30 Q20,28 40,25 T80,18 T120,22 T160,12 T200,15" fill="none" stroke="#4CD964" strokeWidth="1.5" />
            <path d="M0,30 Q20,28 40,25 T80,18 T120,22 T160,12 T200,15 V40 H0 Z" fill="url(#chartGrad)" />
          </svg>
        </div>

        {/* Modality bars */}
        <div className="space-y-2">
          {[
            { label: 'Apps', score: 65, color: '#f59e0b' },
            { label: 'Keystrokes', score: 30, color: '#4CD964' },
            { label: 'Voice', score: 15, color: '#4CD964' },
          ].map((m) => (
            <div key={m.label} className="flex items-center gap-2">
              <span className="text-[9px] text-[rgba(255,255,255,0.5)] w-14">{m.label}</span>
              <div className="flex-1 h-1.5 bg-[#0B1A10] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${m.score}%`, backgroundColor: m.color }}
                />
              </div>
              <span className="text-[9px] font-mono" style={{ color: m.color }}>{m.score}</span>
            </div>
          ))}
        </div>

        {/* Pulse alert */}
        <div className="mt-3 bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.15)] rounded-lg px-2 py-1.5 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F87171]" />
          <span className="text-[9px] font-semibold text-[#F87171]">AI TOOLS</span>
          <span className="text-[9px] text-[rgba(255,255,255,0.4)] ml-auto">ChatGPT</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4CD964]/10 border border-[#4CD964]/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4CD964] animate-pulse-dot" />
                <span className="text-xs font-medium text-[#4CD964]">Now in Beta</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                Interview Intelligence That{' '}
                <span className="bg-gradient-to-r from-[#4CD964] to-[#6DE884] bg-clip-text text-transparent">
                  Catches
                </span>{' '}
                What You Can&apos;t
              </h1>

              <p className="text-lg text-[#E5E7EB] leading-relaxed mb-8 max-w-lg">
                AI-powered monitoring that detects cheating in real-time during live remote interviews. Know exactly when candidates use AI tools, switch apps, or read from scripts.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-[#4CD964] text-[#0B1A10] hover:bg-[#3CB853] transition-colors"
                >
                  Book a Demo <ArrowRight size={16} />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-[rgba(76,217,100,0.3)] text-[#4CD964] hover:bg-[rgba(76,217,100,0.08)] transition-colors"
                >
                  <Play size={14} /> See How It Works
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
