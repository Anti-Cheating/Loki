'use client';
import { STATS } from '@/lib/constants';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useCountUp } from '@/hooks/useCountUp';

function AnimatedStatValue({ value }: { value: string }) {
  // Extract numeric part and suffix (e.g. "67%" → 67, "%")
  const match = value.match(/^(\d+)(.*)/);
  if (!match) return <span>{value}</span>;

  const num = parseInt(match[1], 10);
  const suffix = match[2]; // "%" or "x" etc
  const { count, ref } = useCountUp({ end: num, duration: 1.8, delay: 0.2 });

  return (
    <div ref={ref}>
      <span>{count}</span>
      <span>{suffix}</span>
    </div>
  );
}

export function Problem() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Remote Interviews Have a{' '}
            <span className="text-[#F87171]">Trust Problem</span>
          </h2>
          <p className="text-[#E5E7EB] max-w-2xl mx-auto">
            The rise of AI tools has made it nearly impossible to verify candidate authenticity during remote interviews.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4CD964]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative bg-[#122318] rounded-2xl border border-[rgba(76,217,100,0.1)] p-8 text-center">
                  <div className="text-5xl font-bold text-[#4CD964] mb-2">
                    <AnimatedStatValue value={stat.value} />
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">{stat.label}</div>
                  <p className="text-sm text-[rgba(255,255,255,0.5)]">{stat.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
