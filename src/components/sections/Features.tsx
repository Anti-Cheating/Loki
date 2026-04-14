'use client';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import {
  Bot,
  Code2,
  Monitor,
  MessageSquare,
  Search,
  Layers,
  Keyboard,
  Camera,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface DetectionCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  tools: string[];
}

const DETECTIONS: DetectionCard[] = [
  {
    icon: Layers,
    title: 'AI Overlay Tools',
    desc: 'Invisible overlays that feed answers in real-time',
    tools: ['InterviewCoder', 'Cluely', 'Interview Copilot', 'Interview Assistant'],
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    desc: 'AI chatbots open in other windows or tabs',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Microsoft Copilot'],
  },
  {
    icon: Code2,
    title: 'Code Assistants',
    desc: 'AI-powered code completion and generation',
    tools: ['GitHub Copilot', 'Cursor AI', 'Codeium', 'Tabnine', 'Replit AI'],
  },
  {
    icon: Monitor,
    title: 'Remote Access',
    desc: 'Someone else controlling the candidate\u2019s machine',
    tools: ['TeamViewer', 'AnyDesk', 'Chrome Remote Desktop', 'Parsec', 'Splashtop'],
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    desc: 'Messaging apps open during the interview',
    tools: ['Slack', 'Discord', 'Telegram', 'WhatsApp', 'iMessage'],
  },
  {
    icon: Search,
    title: 'Search & Reference',
    desc: 'Looking up answers on external sites',
    tools: ['Google', 'StackOverflow', 'LeetCode', 'GeeksForGeeks', 'GitHub'],
  },
  {
    icon: Keyboard,
    title: 'Clipboard & Keystrokes',
    desc: 'Suspicious copy-paste and typing patterns',
    tools: ['Mass paste detection', 'Typing speed anomalies', 'Clipboard managers', 'Rapid paste bursts'],
  },
  {
    icon: Camera,
    title: 'Screenshot & Voice',
    desc: 'Every window captured and analyzed by AI',
    tools: ['All visible windows', 'Reading detection', 'Voice pattern shifts', 'Screen recording bypass'],
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4CD964]/10 border border-[#4CD964]/20 text-[#4CD964] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4CD964] animate-pulse" />
            50+ tools detected
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Multi-Modal Detection{' '}
            <span className="bg-gradient-to-r from-[#4CD964] to-[#6DE884] bg-clip-text text-transparent">
              Engine
            </span>
          </h2>
          <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">
            Eight detection modalities running simultaneously. Every cheating tool caught — even ones designed to be invisible.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {DETECTIONS.map((card, index) => {
            const Icon = card.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, x: isEven ? -20 : 20, y: 10 },
                  visible: {
                    opacity: 1, x: 0, y: 0,
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
                    <h3 className="text-sm font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-xs text-[rgba(255,255,255,0.5)] leading-relaxed">
                      {card.desc}. Detects {card.tools.slice(0, -1).join(', ')}, and {card.tools[card.tools.length - 1]}.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <p className="text-white/40 text-sm">
            Continuously updated as new cheating tools emerge.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
