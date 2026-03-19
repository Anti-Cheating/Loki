'use client';
import { PRICING } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0D1F13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#E5E7EB] max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative h-full flex flex-col rounded-2xl border p-6 ${
                  tier.highlighted
                    ? 'bg-[#122318] border-[#4CD964]/30 shadow-lg shadow-[#4CD964]/5'
                    : 'bg-[#122318] border-[rgba(76,217,100,0.08)]'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#4CD964] text-[#0B1A10] text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
                  <p className="text-xs text-[rgba(255,255,255,0.5)] mb-4">{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    {tier.period && <span className="text-sm text-[rgba(255,255,255,0.4)]">{tier.period}</span>}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check size={14} className="text-[#4CD964] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#E5E7EB]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block text-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-[#4CD964] text-[#0B1A10] hover:bg-[#3CB853]'
                      : 'border border-[rgba(76,217,100,0.3)] text-[#4CD964] hover:bg-[rgba(76,217,100,0.08)]'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
