'use client';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function DemoPage() {
  const [state, setState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '', volume: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, company: formData.company }),
      });
      if (!res.ok) throw new Error();
      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap split">
            <div>
              <p className="crumb reveal"><Link href="/">Home</Link> / <span>Book a demo</span></p>
              <span className="kicker reveal">Book a demo</span>
              <h1 className="display reveal" data-d="1" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
                See it read a <span className="tx-gradient">real interview</span>
              </h1>
              <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
                In about 20 minutes we will walk you through a live session, show how the signals stack up, and answer anything your team or your security people want to know. No slide marathon, just the product doing its job.
              </p>
              <div className="reveal" data-d="3" style={{ marginTop: '32px' }}>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>A live walkthrough on a real call, not a canned recording</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Straight answers on privacy, data handling, and compliance</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Founding-member pricing for early-access teams</span></div>
              </div>
            </div>

            <div className="form-card reveal" data-d="2">
              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" style={{ margin: '0 auto 16px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '10px' }}>Request received</h2>
                  <p className="muted">The Trueyy team will reach out within one business day.</p>
                </div>
              ) : (
                <>
                  <h2 className="h3" style={{ fontSize: '1.3rem', marginBottom: '6px' }}>Tell us a little about your team</h2>
                  <p className="muted" style={{ fontSize: '0.92rem', marginBottom: '22px' }}>We will reach out within one business day.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label htmlFor="dm-name">Full name</label>
                      <input id="dm-name" type="text" name="name" required placeholder="Jordan Rivera" value={formData.name} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    <div className="field">
                      <label htmlFor="dm-email">Work email</label>
                      <input id="dm-email" type="email" name="email" required placeholder="jordan@company.com" value={formData.email} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    <div className="field">
                      <label htmlFor="dm-company">Company</label>
                      <input id="dm-company" type="text" name="company" required placeholder="Company name" value={formData.company} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    <div className="field">
                      <label htmlFor="dm-type">Team type</label>
                      <select id="dm-type" name="type" value={formData.type} onChange={handleChange} disabled={state === 'loading'}>
                        <option value="">Select your team type</option>
                        <option>Staffing or recruitment agency</option>
                        <option>Enterprise people ops / HR</option>
                        <option>In-house talent acquisition</option>
                        <option>Hiring manager / engineering lead</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="dm-vol">Interviews per month</label>
                      <select id="dm-vol" name="volume" value={formData.volume} onChange={handleChange} disabled={state === 'loading'}>
                        <option value="">Select a range</option>
                        <option>Fewer than 25</option>
                        <option>25 to 100</option>
                        <option>100 to 500</option>
                        <option>More than 500</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="dm-msg">Anything we should know? (optional)</label>
                      <textarea id="dm-msg" name="message" rows={3} placeholder="What you are hoping to solve" value={formData.message} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    {state === 'error' && <p className="form-note" style={{ color: 'var(--flag)' }}>Something went wrong. Email us at <a href="mailto:hello@trueyy.com" className="tx-green">hello@trueyy.com</a> instead.</p>}
                    <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }} disabled={state === 'loading'}>
                      {state === 'loading' ? 'Sending...' : <>Request my demo <span className="arw">&rarr;</span></>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap center">
            <p className="muted" style={{ maxWidth: '54ch', margin: '0 auto' }}>
              Prefer email? Reach the team at{' '}
              <a className="tx-green" href="mailto:hello@trueyy.com">hello@trueyy.com</a>{' '}
              and we will pick the best time for a walkthrough.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <PageScrollReveal />
    </>
  );
}
