'use client';
import { useState } from 'react';

const ITEMS = [
  {
    q: 'How does Trueyy detect cheating during an interview?',
    a: 'Trueyy runs quietly beside the live call and reads device-level signals like app and window switching, clipboard activity, AI assistant patterns, and reading behavior. It weighs them together, scores each moment, and shows your interviewer a clear timeline rather than a single noisy alert.',
  },
  {
    q: 'Does the candidate need to install anything heavy?',
    a: 'No. Candidates join through a lightweight browser session with clear consent. The interviewer sees the integrity signals on their own dashboard, so the candidate experience stays simple.',
  },
  {
    q: 'Which video platforms does it work with?',
    a: 'Trueyy is built to sit beside the calls you already run on Zoom, Google Meet, and Microsoft Teams, so you do not have to move your interviews onto a new platform.',
  },
  {
    q: 'Will candidates feel like they are being spied on?',
    a: 'They are told up front what is monitored and why. Trueyy is designed to confirm honest work, not to punish nerves. Most candidates appreciate a process that protects the people who are not cutting corners.',
  },
  {
    q: 'Is Trueyy compliant with privacy regulations?',
    a: 'Yes. Trueyy is built privacy-first with encryption in transit and at rest, consent prompts, and retention controls designed to support GDPR and SOC 2 requirements.',
  },
  {
    q: 'When can my team start using it?',
    a: 'Trueyy is rolling out to early-access teams now. Book a demo and we will get you set up, walk through a live session, and share early-access pricing.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)}>
        {q}
        <span className="pm" />
      </button>
      <div className="faq-a" style={{ maxHeight: open ? '400px' : undefined }}>
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq-wrap">
        <div className="reveal">
          <span className="kicker">Questions, answered</span>
          <h2 className="h2">What teams ask before they switch</h2>
        </div>
        <div className="faq reveal" data-d="1">
          {ITEMS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
