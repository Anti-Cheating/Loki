'use client';
import { useState } from 'react';

const ITEMS = [
  {
    q: 'How does Trueyy detect AI tool use during a live interview?',
    a: 'Trueyy reads device-level signals from the candidate\'s browser session: which apps are in focus, what is being pasted and how fast, and the structural signature of answers as they are typed or spoken. These signals are weighed against each other every 30 seconds. Your interviewer sees the result as a live integrity score, not a single noisy alert firing mid-conversation.',
  },
  {
    q: 'Which AI tools does Trueyy specifically detect?',
    a: 'Trueyy has recognition patterns for ChatGPT, Claude, Gemini, GitHub Copilot, Cluely, and InterviewCoder. Detection is based on structural output signatures, not keyword lists, so prompt rewrites do not defeat it. We update detection patterns regularly as new tools enter the market.',
  },
  {
    q: 'Does the candidate need to install anything?',
    a: 'No. Candidates join through a standard browser tab with a consent screen before anything starts. Nothing is downloaded or installed. The monitoring runs through the browser session Trueyy opens alongside the video call.',
  },
  {
    q: 'Which video platforms does it work with?',
    a: 'Trueyy sits beside the calls you already run on Zoom, Google Meet, and Microsoft Teams. The interview happens where it always has. Trueyy is the second tab your team opens on their side.',
  },
  {
    q: 'How does Trueyy handle false positives?',
    a: 'No signal is treated as proof. The score is context. An interviewer who sees a flag at 13:44 can jump to that timestamp, review what was happening, and weigh it alongside everything else they observed in the call. The flag is one input. Your team makes the call.',
  },
  {
    q: 'Will candidates feel like they are being spied on?',
    a: 'They will know exactly what is being observed, because they are told before the session opens. Most candidates are more comfortable with that than with a black-box proctoring tool that locks their browser and records their face without explanation. Transparency and surveillance are not the same thing.',
  },
  {
    q: 'Can Trueyy accommodate candidates with disabilities?',
    a: 'Yes. Signals like slower typing speed can be calibrated at the session level. If a candidate discloses a condition that may affect how specific signals read, the session can be flagged for manual review with the relevant context attached for the hiring team.',
  },
  {
    q: 'Is Trueyy compliant with privacy regulations?',
    a: 'Yes. Consent flows, data-subject request handling, configurable retention windows, and audit logs are built into the product from the start. The architecture is designed to support GDPR and SOC 2 requirements, not patch around them later. No video is stored on Trueyy servers.',
  },
  {
    q: 'When can my team start?',
    a: 'Trueyy is accepting early-access teams now. Book a 30-minute demo and we will run a mock session live, walk you through the dashboard, and share founding-cohort pricing that stays locked in as the product matures.',
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
