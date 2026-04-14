'use client';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface Row {
  feature: string;
  traditional: boolean;
  trueyy: boolean;
}

const ROWS: Row[] = [
  { feature: 'Detects AI overlay tools (InterviewCoder, Cluely)', traditional: false, trueyy: true },
  { feature: 'Captures every open window, not just shared screen', traditional: false, trueyy: true },
  { feature: 'Works with any meeting platform', traditional: false, trueyy: true },
  { feature: 'Real-time alerts during the interview', traditional: false, trueyy: true },
  { feature: 'AI-powered risk scoring per modality', traditional: false, trueyy: true },
  { feature: 'No browser lockdown required', traditional: false, trueyy: true },
  { feature: 'Detects remote desktop access', traditional: true, trueyy: true },
  { feature: 'Records screen activity', traditional: true, trueyy: true },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4CD964]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why{' '}
            <span className="bg-gradient-to-r from-[#4CD964] to-[#6DE884] bg-clip-text text-transparent">
              Trueyy
            </span>
          </h2>
          <p className="text-[#E5E7EB]/70 max-w-xl mx-auto">
            Traditional proctoring tools were built before AI cheating existed. Trueyy was built for it.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl border border-[rgba(76,217,100,0.08)] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] bg-[#122318]">
              <div className="px-5 py-4" />
              <div className="px-3 py-4 text-center border-l border-[rgba(255,255,255,0.04)]">
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Traditional</span>
              </div>
              <div className="px-3 py-4 text-center border-l border-[rgba(76,217,100,0.15)] bg-[#4CD964]/[0.06]">
                <span className="text-xs font-semibold text-[#4CD964] uppercase tracking-wider">Trueyy</span>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className={`grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] ${
                  i % 2 === 0 ? 'bg-[#0B1A10]' : 'bg-[#0F1F14]'
                } ${i === ROWS.length - 1 ? '' : 'border-b border-[rgba(255,255,255,0.03)]'}`}
              >
                <div className="px-5 py-3.5 flex items-center">
                  <span className="text-[13px] text-white/70">{row.feature}</span>
                </div>
                <div className="px-3 py-3.5 flex items-center justify-center border-l border-[rgba(255,255,255,0.04)]">
                  {row.traditional ? (
                    <Check size={16} className="text-white/30" />
                  ) : (
                    <X size={16} className="text-white/15" />
                  )}
                </div>
                <div className="px-3 py-3.5 flex items-center justify-center border-l border-[rgba(76,217,100,0.1)] bg-[#4CD964]/[0.03]">
                  <Check size={16} className="text-[#4CD964]" />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
