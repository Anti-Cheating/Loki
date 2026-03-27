'use client';
import { FEATURES } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Multi-Modal Detection{' '}
            <span className="bg-gradient-to-r from-[#4CD964] to-[#6DE884] bg-clip-text text-transparent">
              Engine
            </span>
          </h2>
          <p className="text-[#E5E7EB] max-w-2xl mx-auto">
            Trueyy analyzes behavior across eight different modalities simultaneously, providing comprehensive coverage that single-signal systems miss.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            // Alternate direction: even from left, odd from right
            // On mobile (single col) all come from bottom
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, x: isEven ? -30 : 30, y: 10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
              >
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-[#4CD964]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full bg-[#122318] rounded-2xl border border-[rgba(76,217,100,0.08)] p-5 hover:border-[rgba(76,217,100,0.2)] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#4CD964]/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[#4CD964]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-xs text-[rgba(255,255,255,0.5)] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
