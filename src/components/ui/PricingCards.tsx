'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" style={{ width: 16, height: 16, flexShrink: 0 }}>
    <path d="M5 12l4 4L19 6" />
  </svg>
);

function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN');
}

const TRIAL_FEATURES = [
  '3 interviews (one-time)',
  'Up to 3 interviewer seats',
  '60 min per interview',
  'Community support',
];

const STARTER_FEATURES = [
  '10 interviews / month',
  'Up to 10 interviewer seats',
  '100 min per interview',
  'Add-on: ₹1,000 / extra interview',
  'ATS integrations',
  '24/7 chat support',
];

const GROWTH_FEATURES = [
  '300 interviews / month',
  'Up to 100 interviewer seats',
  '100 min per interview',
  'Add-on: ₹500 / extra interview',
  'ATS integrations',
  '24/7 chat + shared account manager',
];

export function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className="plan-toggle-wrap">
        <button
          className={`plan-toggle-btn${!yearly ? ' active' : ''}`}
          onClick={() => setYearly(false)}
        >
          Monthly
        </button>
        <button
          className={`plan-toggle-btn${yearly ? ' active' : ''}`}
          onClick={() => setYearly(true)}
        >
          Yearly&nbsp;<span className="save-badge">Save 20%</span>
        </button>
      </div>

      <div className="price-grid">
        {/* Trial */}
        <div className="price-card reveal" data-d="1">
          <p className="price-name">Trial</p>
          <p className="price-amt">Free</p>
          <p className="price-desc">Kick the tires with real candidates before you commit.</p>
          <div className="price-features">
            {TRIAL_FEATURES.map(f => (
              <div key={f} className="checkrow"><span className="ck">{CHECK_ICON}</span><span>{f}</span></div>
            ))}
          </div>
          <a className="btn btn--ghost" href="https://app.trueyy.com" target="_blank" rel="noopener noreferrer">Start free</a>
        </div>

        {/* Starter */}
        <div className="price-card featured reveal" data-d="2">
          <span className="price-badge">Most popular</span>
          <p className="price-name">Starter</p>
          <p className="price-amt">
            {yearly ? fmt(8000) : fmt(10000)}<small>/mo</small>
          </p>
          {yearly && <p className="price-billed">₹96,000 billed annually</p>}
          <p className="price-desc">Hiring teams running a steady flow of interviews every month.</p>
          <div className="price-features">
            {STARTER_FEATURES.map(f => (
              <div key={f} className="checkrow"><span className="ck">{CHECK_ICON}</span><span>{f}</span></div>
            ))}
          </div>
          <a className="btn btn--primary" href="https://app.trueyy.com" target="_blank" rel="noopener noreferrer">Get started</a>
        </div>

        {/* Growth */}
        <div className="price-card reveal" data-d="3">
          <p className="price-name">Growth</p>
          <p className="price-amt">
            {yearly ? fmt(120000) : fmt(150000)}<small>/mo</small>
          </p>
          {yearly && <p className="price-billed">₹14,40,000 billed annually</p>}
          <p className="price-desc">Staffing agencies and large teams running interviews at scale.</p>
          <div className="price-features">
            {GROWTH_FEATURES.map(f => (
              <div key={f} className="checkrow"><span className="ck">{CHECK_ICON}</span><span>{f}</span></div>
            ))}
          </div>
          <BookDemoButton className="btn btn--ghost">Book a demo</BookDemoButton>
        </div>
      </div>
    </div>
  );
}
