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

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          type: formData.type,
          message: formData.message,
        }),
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
              <p className="crumb reveal"><Link href="/">Home</Link> / <span>Contact</span></p>
              <span className="kicker reveal">Get in touch</span>
              <h1 className="display reveal" data-d="1" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
                We are <span className="tx-gradient">here to help</span>
              </h1>
              <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
                Questions about pricing, security, compliance, or how Trueyy fits your hiring process? Drop us a note and we will get back to you within one business day.
              </p>
              <div className="reveal" data-d="3" style={{ marginTop: '32px' }}>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Pricing and plan questions</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Security, compliance, and data handling</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Custom terms for agencies and enterprise</span></div>
              </div>
            </div>

            <div className="form-card reveal" data-d="2">
              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" style={{ margin: '0 auto 16px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '10px' }}>Message received</h2>
                  <p className="muted">The Trueyy team will get back to you within one business day.</p>
                </div>
              ) : (
                <>
                  <h2 className="h3" style={{ fontSize: '1.3rem', marginBottom: '6px' }}>Send us a message</h2>
                  <p className="muted" style={{ fontSize: '0.92rem', marginBottom: '22px' }}>We will reply within one business day.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label htmlFor="ct-name">Full name</label>
                      <input id="ct-name" type="text" name="name" required placeholder="Jordan Rivera" value={formData.name} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    <div className="field">
                      <label htmlFor="ct-email">Work email</label>
                      <input id="ct-email" type="email" name="email" required placeholder="jordan@company.com" value={formData.email} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    <div className="field">
                      <label htmlFor="ct-company">Company</label>
                      <input id="ct-company" type="text" name="company" required placeholder="Company name" value={formData.company} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    <div className="field">
                      <label htmlFor="ct-type">Team type</label>
                      <select id="ct-type" name="type" value={formData.type} onChange={handleChange} disabled={state === 'loading'}>
                        <option value="">Select your team type</option>
                        <option>Staffing or recruitment agency</option>
                        <option>Enterprise people ops / HR</option>
                        <option>In-house talent acquisition</option>
                        <option>Hiring manager / engineering lead</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="ct-msg">What can we help with?</label>
                      <textarea id="ct-msg" name="message" rows={4} placeholder="Pricing, security questions, custom terms..." value={formData.message} onChange={handleChange} disabled={state === 'loading'} />
                    </div>
                    {state === 'error' && <p className="form-note" style={{ color: 'var(--flag)' }}>Something went wrong. Email us at <a href="mailto:hello@trueyy.com" className="tx-green">hello@trueyy.com</a> instead.</p>}
                    <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }} disabled={state === 'loading'}>
                      {state === 'loading' ? 'Sending...' : <>Send message <span className="arw">&rarr;</span></>}
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
              Prefer email? Reach us at{' '}
              <a className="tx-green" href="mailto:hello@trueyy.com">hello@trueyy.com</a>
              {' '}and we will get back to you within one business day.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <PageScrollReveal />
    </>
  );
}
