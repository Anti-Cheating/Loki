'use client';
import { useState, FormEvent } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p role="status" className="form-note" style={{ textAlign: 'center', color: 'var(--green)' }}>You are on the list. Talk soon.</p>;
  }

  return (
    <form
      className="hero-cta"
      style={{ justifyContent: 'center', maxWidth: '480px', margin: '0 auto', gap: '10px' }}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        aria-label="Email address"
        autoComplete="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          flex: 1, minWidth: '220px',
          background: 'var(--bg)', border: '1px solid var(--line)',
          borderRadius: '10px', padding: '14px 16px',
          color: 'var(--text)', fontFamily: 'var(--font-body)',
        }}
      />
      <button type="submit" className="btn btn--primary">Subscribe</button>
    </form>
  );
}
