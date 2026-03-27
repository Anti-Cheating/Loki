'use client';
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function Waitlist() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setState('success');
      setFormData({ name: '', company: '', email: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setState('error');
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-[#0B1A10] relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Be First in Line
            </h2>
            <p className="text-lg text-[#E5E7EB] max-w-lg mx-auto">
              Trueyy is launching soon. Join the waitlist for early access and founding member pricing.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#4CD964]/5 rounded-3xl blur-2xl" />
            <div className="relative bg-[#122318] rounded-2xl border border-[rgba(76,217,100,0.15)] p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {state !== 'success' ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={state === 'loading'}
                        className="w-full px-4 py-3 bg-[#0D1F13] border border-[rgba(76,217,100,0.15)] rounded-lg text-[#E5E7EB] placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#4CD964] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company / Organisation"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        disabled={state === 'loading'}
                        className="w-full px-4 py-3 bg-[#0D1F13] border border-[rgba(76,217,100,0.15)] rounded-lg text-[#E5E7EB] placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#4CD964] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={state === 'loading'}
                        className="w-full px-4 py-3 bg-[#0D1F13] border border-[rgba(76,217,100,0.15)] rounded-lg text-[#E5E7EB] placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#4CD964] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      />
                    </div>

                    {state === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.15)] rounded-lg"
                      >
                        <p className="text-sm text-[#F87171]">{error}</p>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={state === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[#4CD964] text-[#0B1A10] hover:bg-[#3CB853] disabled:opacity-75 disabled:cursor-not-allowed transition-colors"
                    >
                      {state === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Joining...
                        </>
                      ) : (
                        'Join the Waitlist'
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-8"
                  >
                    <div className="flex justify-center mb-4">
                      <CheckCircle size={48} className="text-[#4CD964]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                    <p className="text-[#E5E7EB]">
                      We'll reach out as soon as Trueyy launches with your early access.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
