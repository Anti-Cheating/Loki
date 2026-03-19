'use client';
import { SECURITY_FEATURES } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export function Security() {
  return (
    <section id="security" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Security &amp; Privacy First
          </h2>
          <p className="text-[#E5E7EB] max-w-2xl mx-auto">
            We take data protection seriously. Trueyy is built with transparency and security at its core.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {SECURITY_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <div className="bg-[#122318] rounded-2xl border border-[rgba(76,217,100,0.08)] p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#4CD964]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-[#4CD964]" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-[rgba(255,255,255,0.5)]">{feature.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
