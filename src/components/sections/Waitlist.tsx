'use client';
import { useState, FormEvent } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function Waitlist() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', company: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    setError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
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
    <section className="section" id="waitlist">
      <div className="wrap">
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="center reveal" style={{ marginBottom: '40px' }}>
            <span className="kicker kicker--center">Early access</span>
            <h2 className="h2">Be first in line</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Trueyy is launching soon. Join the waitlist for early access and founding member pricing.
            </p>
          </div>

          <div className="reveal" data-d="1">
            {state === 'success' ? (
              <div className="form-card" style={{ textAlign: 'center', padding: '48px 34px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" style={{ margin: '0 auto' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '10px' }}>
                  You&apos;re on the list!
                </h3>
                <p style={{ color: 'var(--text-mut)' }}>
                  We will reach out as soon as Trueyy launches with your early access details.
                </p>
              </div>
            ) : (
              <form className="form-card" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="wl-name">Full name</label>
                  <input
                    id="wl-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={state === 'loading'}
                  />
                </div>
                <div className="field">
                  <label htmlFor="wl-company">Company</label>
                  <input
                    id="wl-company"
                    type="text"
                    name="company"
                    placeholder="Company or organisation"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={state === 'loading'}
                  />
                </div>
                <div className="field">
                  <label htmlFor="wl-email">Work email</label>
                  <input
                    id="wl-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={state === 'loading'}
                  />
                </div>
                {state === 'error' && (
                  <p className="form-note" style={{ color: 'var(--flag)', marginBottom: '12px' }}>{error}</p>
                )}
                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  disabled={state === 'loading'}
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                >
                  {state === 'loading' ? 'Joining...' : 'Join the waitlist'}
                </button>
                <p className="form-note" style={{ textAlign: 'center', marginTop: '16px' }}>
                  No spam. Early-access pricing locked in at signup.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
