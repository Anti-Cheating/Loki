'use client';
import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[rgba(76,217,100,0.08)] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors"
      >
        <span className="text-sm font-medium text-white pr-4">{question}</span>
        <ChevronDown
          size={16}
          className={`text-[rgba(255,255,255,0.4)] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 pb-4">
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#E5E7EB]">
            Everything you need to know about Trueyy.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <StaggerItem key={item.question}>
              <FAQItem question={item.question} answer={item.answer} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
