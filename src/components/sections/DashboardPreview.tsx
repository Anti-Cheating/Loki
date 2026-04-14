'use client';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function DashboardPreview() {
  return (
    <section className="py-24 bg-[#0D1F13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Real-Time Command Center
          </h2>
          <p className="text-[#E5E7EB] max-w-2xl mx-auto">
            See everything happening during the interview in one glance. The analytics sidebar gives you live risk scores, modality breakdowns, and instant alerts.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Glow */}
            <div className="absolute -inset-8 bg-[#4CD964]/5 rounded-3xl blur-3xl" />

            {/* Mock meeting view */}
            <div className="relative bg-[#0B1A10] rounded-2xl border border-[rgba(76,217,100,0.15)] overflow-hidden shadow-2xl">
              {/* Header bar */}
              <div className="bg-[#0B1A10] px-4 py-2.5 border-b border-[rgba(76,217,100,0.1)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4CD964] animate-pulse-dot" />
                  <span className="text-xs font-semibold text-white">Technical Interview - John Smith</span>
                  <span className="text-[10px] text-[#4CD964] font-semibold ml-2">LIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-[rgba(255,255,255,0.06)]" />
                </div>
              </div>

              <div className="flex">
                {/* Main content area */}
                <div className="flex-1 p-4 min-h-[300px] sm:min-h-[360px]">
                  {/* Transcript feed */}
                  <div className="bg-[#122318] rounded-lg p-3 mb-3 border border-[rgba(76,217,100,0.06)]">
                    <div className="space-y-1.5">
                      <div className="flex gap-2">
                        <span className="text-[9px] text-[rgba(255,255,255,0.3)] font-mono w-10 flex-shrink-0">2:34</span>
                        <span className="text-[10px] text-[#E5E7EB]">&quot;...so I would approach this by first analyzing the data structures...&quot;</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[9px] text-[rgba(255,255,255,0.3)] font-mono w-10 flex-shrink-0">2:41</span>
                        <span className="text-[10px] text-[rgba(255,255,255,0.5)]">&quot;...and then implementing a hash map for O(1) lookups...&quot;</span>
                      </div>
                    </div>
                  </div>

                  {/* Meeting area placeholder */}
                  <div className="bg-[#122318] rounded-xl flex-1 min-h-[180px] sm:min-h-[220px] flex items-center justify-center border border-[rgba(76,217,100,0.06)]">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.04)] flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg">🎥</span>
                      </div>
                      <span className="text-[10px] text-[rgba(255,255,255,0.3)]">Meeting Area</span>
                    </div>
                  </div>
                </div>

                {/* Analytics sidebar */}
                <div className="w-48 sm:w-56 bg-[#0B1A10] border-l border-[rgba(76,217,100,0.1)] p-3 space-y-3">
                  {/* Summary stats */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { label: 'Recent', value: '73', color: '#f59e0b' },
                      { label: 'Session', value: '45', color: '#4CD964' },
                      { label: 'Risk', value: 'MED', color: '#f59e0b' },
                      { label: 'Windows', value: '12', color: '#E5E7EB' },
                    ].map((s) => (
                      <div key={s.label} className="bg-[#122318] rounded-md p-1.5 text-center">
                        <div className="text-xs font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-[7px] text-[rgba(255,255,255,0.3)]">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini chart */}
                  <div className="bg-[#122318] rounded-md p-1.5">
                    <svg viewBox="0 0 120 24" className="w-full h-5">
                      <path d="M0,18 Q15,16 30,14 T60,10 T90,13 T120,8" fill="none" stroke="#4CD964" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Modality breakdown */}
                  <div className="space-y-1.5">
                    <div className="text-[8px] font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-wider">Modality</div>
                    {[
                      { label: 'Apps', score: 65, color: '#f59e0b', risk: 'HIGH' },
                      { label: 'Keys', score: 30, color: '#4CD964', risk: 'LOW' },
                      { label: 'Voice', score: 15, color: '#4CD964', risk: 'LOW' },
                    ].map((m) => (
                      <div key={m.label}>
                        <div className="flex justify-between mb-0.5">
                          <span className="text-[8px] text-[rgba(255,255,255,0.5)]">{m.label}</span>
                          <span className="text-[8px] font-bold" style={{ color: m.color }}>{m.risk}</span>
                        </div>
                        <div className="h-1 bg-[#0D1F13] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${m.score}%`, backgroundColor: m.color }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pulse alerts */}
                  <div className="space-y-1">
                    <div className="text-[8px] font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-wider">Alerts</div>
                    <div className="bg-[rgba(248,113,113,0.06)] border border-[rgba(248,113,113,0.12)] rounded px-1.5 py-1 flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-[#F87171]" />
                      <span className="text-[7px] font-semibold text-[#F87171]">AI TOOLS</span>
                      <span className="text-[7px] text-[rgba(255,255,255,0.3)] ml-auto">1</span>
                    </div>
                    <div className="bg-[rgba(251,146,60,0.06)] border border-[rgba(251,146,60,0.12)] rounded px-1.5 py-1 flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-[#FB923C]" />
                      <span className="text-[7px] font-semibold text-[#FB923C]">PASTE</span>
                      <span className="text-[7px] text-[rgba(255,255,255,0.3)] ml-auto">5+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Callout annotations */}
            <div className="hidden lg:block absolute -right-32 top-20 text-right">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#4CD964] font-medium">Live Risk Score</span>
                <div className="w-8 h-px bg-[#4CD964]/40" />
              </div>
            </div>
            <div className="hidden lg:block absolute -right-32 top-52 text-right">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#F87171] font-medium">Instant Alerts</span>
                <div className="w-8 h-px bg-[#F87171]/40" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
