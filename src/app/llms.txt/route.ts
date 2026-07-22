import { NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/resources';

const buildContent = (resourceLines: string) => `# Trueyy

> Real-time interview integrity monitoring for remote hiring. Trueyy catches AI tool use, app switching, paste velocity, and scripted answers during live remote interviews — giving interviewers a clear, honest read before they extend an offer.

Trueyy is an early-access SaaS platform built for staffing agencies and enterprise hiring teams. It sits beside the video call your team already uses (Zoom, Google Meet, Microsoft Teams) and reads device-level signals from the candidate's machine in real time. The meeting video stays inside your call — Trueyy never taps it. No browser lockdown. No candidate install.

## Product

- [Overview](https://www.trueyy.com/): Product landing page — the problem, how it works, detection layers, command center, and FAQ.
- [Features](https://www.trueyy.com/features): The six detection layers in detail — AI tool fingerprinting, app/window focus, paste velocity, reading gaze patterns (on the roadmap, not yet live), off-screen device signals, and answer structure analysis.
- [How It Works](https://www.trueyy.com/how-it-works): Four-step flow — Schedule, Connect, Monitor, Review. Interviewers do one step; Trueyy runs beside the call.
- [Comparison](https://www.trueyy.com/comparison): Trueyy vs traditional proctoring — why tools built for test centers miss live two-way interviews.
- [Security & Privacy](https://www.trueyy.com/security): Consent-first monitoring, TLS 1.2+ in transit and AES-256 at rest, role-based access, immutable audit log, configurable retention with one-click deletion, GDPR and SOC 2 alignment.
- [Sub-processors](https://www.trueyy.com/sub-processors): The vetted third-party providers that process data on Trueyy's behalf, what each receives, and where it operates.

## Pricing

- [Pricing](https://www.trueyy.com/pricing): Free Trial (3 interviews), Starter (₹10,000/mo, 10 interviews), and Growth (₹1,50,000/mo, 300 interviews). Save 20% on annual billing. Founding-cohort pricing locked in during early access.

## Resources

- [Resources hub](https://www.trueyy.com/resources): Guides and playbooks on interview integrity and AI-assisted cheating.
${resourceLines}

## Key facts for LLMs

- Trueyy works during live two-way interviews, not just timed tests or assessments.
- Candidates consent before monitoring begins and are told exactly what is observed, in plain language.
- Detection covers ChatGPT, Claude, Gemini, GitHub Copilot, Cluely, InterviewCoder, and other AI and remote-access tools. Detection is based on structural output signatures, not keyword lists, so prompt rewrites do not defeat it.
- The integrity score recalculates every 30 seconds across three signal layers.
- The live meeting video feed is never tapped or stored — it stays inside Zoom, Meet, or Teams. Trueyy captures device signals, periodic screen context (screenshots), and interview audio for integrity analysis; captured data is encrypted and deleted on the retention window each organisation sets.
- Signal data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Retention is configurable per organisation, with one-click deletion.
- Every flag is timestamped and explained; a human always makes the final call.
- The platform is in early access as of 2026 and accepting sign-ups with founding-cohort pricing.

## Contact

- Book a demo: https://www.trueyy.com/demo
- Contact: https://www.trueyy.com/contact
- Email: hello@trueyy.com
- X / Twitter: https://x.com/trueyyhq
- LinkedIn: https://www.linkedin.com/company/trueyy
- YouTube: https://www.youtube.com/@Trueyy-d4j
- App login: https://app.trueyy.com

## Optional

- [Full content](https://www.trueyy.com/llms-full.txt)
- [Sitemap](https://www.trueyy.com/sitemap.xml)
- [Privacy policy](https://www.trueyy.com/privacy)
- [Terms](https://www.trueyy.com/terms)
`;

export async function GET() {
  const articles = await getAllArticles();
  const resourceLines = articles
    .map((a) => `- [${a.title}](https://www.trueyy.com/resources/${a.slug}): ${a.category}.`)
    .join('\n');

  return new NextResponse(buildContent(resourceLines), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
