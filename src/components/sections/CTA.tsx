'use client';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-[#0D1F13] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#4CD964]/5 rounded-3xl blur-2xl" />
            <div className="relative bg-[#122318] rounded-2xl border border-[rgba(76,217,100,0.15)] p-10 sm:p-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Trust Your{' '}
                <span className="bg-gradient-to-r from-[#4CD964] to-[#6DE884] bg-clip-text text-transparent">
                  Interviews
                </span>{' '}
                Again?
              </h2>
              <p className="text-[#E5E7EB] max-w-xl mx-auto mb-8">
                Join forward-thinking companies using Trueyy to ensure interview integrity and hire with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-xl bg-[#4CD964] text-[#0B1A10] hover:bg-[#3CB853] transition-colors"
                >
                  Book a Demo <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:sales@trueyy.com"
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-xl border border-[rgba(255,255,255,0.15)] text-[#E5E7EB] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
