import { NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/resources';

const buildContent = (resourceLines: string) => `# Trueyy — Full site content

> Real-time interview integrity monitoring for remote hiring teams.

---

## Hero

The candidate is talking to you. Their AI is answering.

Cluely, InterviewCoder, ChatGPT. The tools that ghost-write interviews have gotten disturbingly good. Trueyy reads every signal they leave behind and gives your team a real read before you extend the offer.

Works inside Zoom, Meet and Teams. No candidate install required. Consent-first by design.

---

## The real cost of a bad hire

You hired their prompts. Not them.

An answer that arrives in two seconds and covers every edge case perfectly is not impressive. It is suspicious. The signals that separate a sharp candidate from a well-prompted one are in the session data. Most teams never look at them.

- 72% of hiring managers suspect they have extended an offer to a candidate who used AI or outside help during the live interview.
- 4x surge in AI-assisted interview cheating reports since GPT-4 became widely available, with no sign of the trend reversing.
- $47K typical cost of replacing a wrong technical hire once onboarding, lost productivity, and rehire expenses are totalled.

---

## How it works

Four steps. Your interviewers do one of them.

Trueyy fits into the hiring process you already run. Set it up once, then let it run silently in the background of every call while your team focuses on the conversation.

1. Schedule — Drop a Trueyy link into the calendar invite alongside the Zoom or Meet link. Nothing else changes about how your team books the interview.
2. Connect — The candidate clicks their link, reads what is being monitored and why, and consents before anything starts. The session opens beside the video call. No download required.
3. Monitor — Trueyy reads device signals as the conversation runs and scores integrity every 30 seconds. Your interviewer sees a live feed without having to ask the candidate anything different.
4. Review — The session ends with a plain-language timeline, a final integrity score, and a shareable summary that attaches directly to the candidate scorecard in your ATS.

---

## Six detection layers

What one signal misses, the next one catches.

Cheating tools leave traces. Not obvious ones. Subtle ones. Trueyy reads them in combination so a single odd moment stays in context rather than firing a false alarm.

### AI tool fingerprinting
Trueyy recognizes the structural output signatures of ChatGPT, Claude, Gemini, Cluely, and InterviewCoder. Not by flagging certain words. By reading the pattern their outputs leave in a live answer.

### App and window focus
When a candidate tabs to another app mid-question, the timestamp lands in the feed. Context switches are logged even when the candidate returns to the call in under a second.

### Paste velocity
A 200-word answer pasted in 0.3 seconds was not typed. Trueyy flags paste events that exceed any plausible human input rate and logs the exact text length and timing for review.

### Reading gaze patterns (coming soon)
Eyes scanning a fixed invisible line look different from eyes freely watching a speaker. A planned reading-gaze layer will distinguish the two without a camera lock or face-tracking software. On the roadmap — not yet live.

### Off-screen device signals
Specific audio artifacts, ambient light shifts, and response timing gaps point to a phone below frame or a monitor just out of shot. These surface as low-confidence signals in the feed, not accusations.

### Answer structure analysis
Someone thinking through a problem builds an answer that meanders slightly. An AI-generated answer arrives in four clean bullet points with exactly parallel structure. Trueyy learns to tell them apart.

---

## Your command center

Know the score before the debrief.

Trueyy runs a second feed alongside the call. Integrity score updates every 30 seconds. Every flag lands with a timestamp your team can scrub back to. After the call, one click drops the full session log onto the scorecard.

- Integrity score recalculates every 30 seconds across three signal layers.
- Every flag links to a specific timestamp you can scrub to in the session log.
- One-click session summary attaches to any ATS scorecard or hiring workflow.
- Interviewers see the feed live. Nothing needs to be reviewed after the fact to act on it.

---

## Why Trueyy

Proctoring tools were built for test centers, not conversations.

Traditional proctoring locks browsers and watches faces. That works for a timed exam where the question is: did this person copy? It does almost nothing for a 45-minute live conversation where the question is: did this person actually think through the problem?

Capability comparison:
- Runs during a live two-way interview: Traditional proctoring No, Trueyy Yes
- Detects AI tool use in real time: Traditional proctoring Limited, Trueyy Yes
- Works inside Zoom, Meet, and Teams: Traditional proctoring No, Trueyy Yes
- Specifically detects Cluely and InterviewCoder: Traditional proctoring No, Trueyy Yes
- Weighs signals together instead of single triggers: Traditional proctoring Rule-based, Trueyy Yes
- No heavy browser install for candidates: Traditional proctoring Heavy, Trueyy Yes
- Timestamped session log after the call: Traditional proctoring No, Trueyy Yes
- No video stored on third-party servers: Traditional proctoring No, Trueyy Yes
- Consent-first with full candidate disclosure: Traditional proctoring No, Trueyy Yes

---

## Security and privacy

Monitoring candidates is not the same as surveilling them.

There is a real difference between knowing what a candidate's device was doing and watching their face through a camera for signs of distress. Trueyy is the first thing, firmly.

### Consent before anything
Candidates see exactly what Trueyy observes, in plain language, before the session opens. The list is specific. Nothing is buried in a privacy policy.

### The meeting video stays in your call
The live meeting video feed stays inside Zoom, Meet, or Teams — we don't tap it. Trueyy captures device signals, periodic screen context, and interview audio for integrity analysis; what we capture is encrypted and deleted on the retention window you set.

### GDPR and SOC 2 ready
Consent flows, audit logs, and data-subject request tooling are part of the product from day one. Not add-ons. Not planned for a future release.

### End-to-end encryption
All signal data is encrypted in transit and at rest. Only team members you authorize can access a session log. Access is logged and auditable.

### You control retention
Your organization sets how long session data lives. You can configure per-team retention windows and delete individual sessions on request at any time.

### Candidate review path
Candidates who believe a flag was incorrect can request a formal review. The process is documented and runs through your HR team, not ours.

---

## Frequently asked questions

### How does Trueyy detect AI tool use during a live interview?
Trueyy reads device-level signals from the candidate's browser session: which apps are in focus, what is being pasted and how fast, and the structural signature of answers as they are typed or spoken. These signals are weighed against each other every 30 seconds. Your interviewer sees the result as a live integrity score, not a single noisy alert firing mid-conversation.

### Which AI tools does Trueyy specifically detect?
Trueyy has recognition patterns for ChatGPT, Claude, Gemini, GitHub Copilot, Cluely, and InterviewCoder. Detection is based on structural output signatures, not keyword lists, so prompt rewrites do not defeat it. We update detection patterns regularly as new tools enter the market.

### Does the candidate need to install anything?
No. Candidates join through a standard browser tab with a consent screen before anything starts. Nothing is downloaded or installed. The monitoring runs through the browser session Trueyy opens alongside the video call.

### Which video platforms does it work with?
Trueyy sits beside the calls you already run on Zoom, Google Meet, and Microsoft Teams. The interview happens where it always has. Trueyy is the second tab your team opens on their side.

### How does Trueyy handle false positives?
No signal is treated as proof. The score is context. An interviewer who sees a flag at 13:44 can jump to that timestamp, review what was happening, and weigh it alongside everything else they observed in the call. The flag is one input. Your team makes the call.

### Will candidates feel like they are being spied on?
They will know exactly what is being observed, because they are told before the session opens. Most candidates are more comfortable with that than with a black-box proctoring tool that locks their browser and records their face without explanation. Transparency and surveillance are not the same thing.

### Can Trueyy accommodate candidates with disabilities?
Yes. Signals like slower typing speed can be calibrated at the session level. If a candidate discloses a condition that may affect how specific signals read, the session can be flagged for manual review with the relevant context attached for the hiring team.

### Is Trueyy compliant with privacy regulations?
Yes. Consent flows, data-subject request handling, configurable retention windows, and audit logs are built into the product from the start. The architecture is designed to support GDPR and SOC 2 requirements, not patch around them later. The live meeting video feed is never tapped; captured audio and screenshots are encrypted and deleted on the retention window you set.

### When can my team start?
Trueyy is accepting early-access teams now. Book a 30-minute demo and we will run a mock session live, walk you through the dashboard, and share founding-cohort pricing that stays locked in as the product matures.

---

## Pricing

Start free. Scale as you hire. Founding-cohort pricing locked in during early access. Save 20% on annual billing.

### Trial (free)
- 3 one-time monitored interviews
- Up to 3 interviewer seats
- 60 minutes per interview
- The same full detection stack as the paid plans
- No credit card required

### Starter — ₹10,000/month (₹96,000/year, ~₹8,000/month)
- 10 monitored interviews per month
- Up to 10 interviewer seats
- 100 minutes per interview
- ATS integrations
- 24/7 chat support
- Additional interviews at ₹1,000 each (minimum 100)

### Growth — ₹1,50,000/month (₹14,40,000/year, ~₹1,20,000/month)
- 300 monitored interviews per month
- Up to 100 interviewer seats
- 100 minutes per interview
- ATS integrations
- 24/7 chat support plus a shared account manager
- Additional interviews at ₹500 each

Start a free trial at https://app.trueyy.com. Need agency or enterprise volume terms? Contact us at https://www.trueyy.com/contact.

---

## Resources

Guides and playbooks for hiring teams on interview integrity and AI-assisted cheating. Browse all at https://www.trueyy.com/resources.

${resourceLines}

---

## Sub-processors

Trueyy uses a small, vetted set of sub-processors, each receiving only the data it needs. Full register at https://www.trueyy.com/sub-processors (last updated 5 July 2026).

- Deepgram (United States) — interview audio — speech-to-text transcription
- OpenAI (United States) — transcripts, app & window metadata, screenshots — AI analysis of interview activity and screen context
- Cloudflare R2 (Asia) — screenshots, audio, avatars — encrypted object storage
- Razorpay (India) — billing contact, payment metadata — payment processing
- Resend (United States) — name, email — transactional email
- Zoom (United States) — meeting & participant metadata — video meeting hosting
- Google (United States) — account identity — sign-in (OAuth)
- Cloud database & cache (Asia) — all service data at rest — primary data storage & queue

Primary storage is hosted in Asia; some analysis providers operate in the United States. Transfers outside the EEA or UK are covered by Standard Contractual Clauses, with encryption in transit and at rest and least-privilege access. A full Data Processing Agreement is available to customers on request.

---

## Contact

- Book a demo: https://www.trueyy.com/demo
- Contact form: https://www.trueyy.com/contact
- Email: hello@trueyy.com
- Twitter / X: https://twitter.com/trueyy
- App login: https://app.trueyy.com

The Trueyy team replies within one business day.

---

## Pages

- Home: https://www.trueyy.com/
- Features: https://www.trueyy.com/features
- How it works: https://www.trueyy.com/how-it-works
- Comparison: https://www.trueyy.com/comparison
- Pricing: https://www.trueyy.com/pricing
- Security & privacy: https://www.trueyy.com/security
- Sub-processors: https://www.trueyy.com/sub-processors
- Resources: https://www.trueyy.com/resources
- Book a demo: https://www.trueyy.com/demo
- Contact: https://www.trueyy.com/contact

---

© ${new Date().getFullYear()} Trueyy. All rights reserved.
`;

export async function GET() {
  const articles = await getAllArticles();
  const resourceLines = articles
    .map(
      (a) =>
        `- ${a.title} (${a.category}, ${a.readTime}, ${a.date}) — ${a.excerpt
          .replace(/\s+/g, ' ')
          .trim()} https://www.trueyy.com/resources/${a.slug}`
    )
    .join('\n');

  return new NextResponse(buildContent(resourceLines), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
