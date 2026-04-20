'use client';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { Video, Chrome, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Platform {
  icon: LucideIcon;
  name: string;
  desc: string;
}

const PLATFORMS: Platform[] = [
  { icon: Video, name: 'Google Meet', desc: 'Full support' },
  { icon: Video, name: 'Microsoft Teams', desc: 'Full support' },
  { icon: Video, name: 'Zoom', desc: 'Full support' },
  { icon: Globe, name: 'Any Browser', desc: 'Web dashboard' },
  { icon: Globe, name: 'Desktop App', desc: 'Standalone client' },
];

export function Platforms() {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Works with your{' '}
            <span className="bg-gradient-to-r from-[#4CD964] to-[#6DE884] bg-clip-text text-transparent">
              stack
            </span>
          </h2>
          <p className="text-[#E5E7EB]/50 max-w-lg mx-auto text-sm">
            No vendor lock-in. Trueyy works alongside your existing meeting platform and OS.
          </p>
        </AnimatedSection>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {PLATFORMS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
              >
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#122318] border border-[rgba(76,217,100,0.08)] hover:border-[rgba(76,217,100,0.2)] transition-colors">
                  <Icon size={16} className="text-[#4CD964]/60 flex-shrink-0" />
                  <div>
                    <div className="text-[13px] font-medium text-white/80">{p.name}</div>
                    <div className="text-[10px] text-white/30">{p.desc}</div>
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
