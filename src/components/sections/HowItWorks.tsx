'use client';
import { STEPS } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0D1F13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-[#E5E7EB] max-w-2xl mx-auto">
            Get started in minutes. Trueyy integrates seamlessly with Zoom to provide real-time interview monitoring.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#4CD964]/20 via-[#4CD964]/40 to-[#4CD964]/20" />

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="relative text-center">
                  {/* Number circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#4CD964]/10 border border-[#4CD964]/30 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-[#4CD964]" />
                  </div>
                  <div className="text-xs font-bold text-[#4CD964] mb-1">STEP {step.number}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[rgba(255,255,255,0.5)]">{step.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
