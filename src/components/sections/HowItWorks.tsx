'use client';
import { STEPS } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#0D1F13] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4CD964]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4CD964]/10 border border-[#4CD964]/20 text-[#4CD964] text-xs font-semibold tracking-wider uppercase mb-4">
            Simple Setup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">How It Works</h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-base leading-relaxed">
            Get started in minutes. Trueyy integrates seamlessly with Zoom to provide real-time interview monitoring.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-4 gap-5 relative">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="relative group">
                  {/* Card */}
                  <div className="relative z-10 text-center p-6 rounded-2xl bg-[#0B1A10]/60 border border-white/[0.04] hover:border-[#4CD964]/20 transition-all duration-300 hover:bg-[#0B1A10]/80">
                    {/* Icon circle */}
                    <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#4CD964]/15 to-[#4CD964]/5 border border-[#4CD964]/20 flex items-center justify-center mx-auto mb-5 group-hover:border-[#4CD964]/40 group-hover:from-[#4CD964]/20 transition-all duration-300">
                      <Icon size={28} className="text-[#4CD964]" strokeWidth={1.5} />
                    </div>

                    {/* Step label */}
                    <div className="text-[10px] font-bold text-[#4CD964]/70 tracking-[0.2em] uppercase mb-2">
                      Step {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
