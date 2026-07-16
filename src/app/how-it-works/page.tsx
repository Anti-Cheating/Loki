import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { BookDemoButton } from '@/components/ui/BookDemoButton';
import { HeroVideo } from '@/components/ui/HeroVideo';

export const metadata: Metadata = {
  title: 'How Trueyy Works | Real-Time Interview Integrity Monitoring',
  description: 'Four steps to a clear, honest read on every live remote interview. Schedule, connect, monitor device-level signals, and review a plain-language timeline after every call.',
  alternates: { canonical: 'https://trueyy.com/how-it-works' },
  openGraph: {
    title: 'How Trueyy Works | Real-Time Interview Integrity Monitoring',
    description: 'Four steps to a clear, honest read on every live remote interview. Schedule, connect, monitor device-level signals, and review a plain-language timeline after every call.',
    url: 'https://trueyy.com/how-it-works',
    siteName: 'Trueyy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Trueyy Works | Trueyy',
    description: 'Four steps: schedule, connect, monitor, review. Real-time integrity scoring for every live remote interview.',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Trueyy monitors a live remote interview',
  description: 'A four-step process that fits into the hiring workflow you already use.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Schedule', text: 'Drop a Trueyy link into the calendar invite alongside the Zoom or Meet link. Nothing else changes about how your team books the interview.' },
    { '@type': 'HowToStep', position: 2, name: 'Connect', text: 'The candidate clicks their link, reads what is being monitored and why, and consents before anything starts. No download required.' },
    { '@type': 'HowToStep', position: 3, name: 'Monitor', text: 'Trueyy reads device signals as the conversation runs and scores integrity every 30 seconds. Your interviewer sees a live feed.' },
    { '@type': 'HowToStep', position: 4, name: 'Review', text: 'The session ends with a plain-language timeline, a final integrity score, and a shareable summary that attaches to the candidate scorecard.' },
  ],
};

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

const STEPS = [
  {
    no: '01',
    heading: 'Schedule the interview the way you always do',
    body: 'Drop a Trueyy link into the calendar invite alongside your usual video call. Recruiters do not learn a new tool and candidates do not jump through extra hoops. If you book interviews through Greenhouse, Lever, or a shared calendar, nothing about that changes. One extra link in the invite. That is it.',
  },
  {
    no: '02',
    heading: 'The candidate joins, with consent up front',
    body: 'When the candidate opens the link, they see a short, plain note about what Trueyy monitors and why. There is no download and no driver to install. They read the consent screen, the session opens beside the video call, and the interview starts the same way it always has.',
  },
  {
    no: '03',
    heading: 'Trueyy reads the signals in real time',
    body: 'As the interview happens, Trueyy watches device-level activity: app and window switching, clipboard paste velocity, and AI assistant signatures from tools like Cluely and ChatGPT. It does not raise an alarm over a single odd moment. It weighs the signals together and scores the moments that actually matter, every 30 seconds.',
  },
  {
    no: '04',
    heading: 'You review a plain-language timeline',
    body: 'The moment the call ends, the interviewer gets a single integrity score and a timeline they can scrub through. Each flag is time-stamped and written in plain language anyone can understand. Attach it to the scorecard, share it with the panel, and make the call with real evidence behind you instead of a gut feeling.',
  },
];

// step-N.webp person-led images staged in /public/marketing. Add the step number as each lands.
const READY_STEPS = new Set<number>([1, 2, 3, 4]);

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'How it works', href: '/how-it-works' }]} />
      <Navbar />
      <main id="main-content">
        <section className="page-hero page-hero--split">
          <div className="wrap">
            <div>
              <p className="crumb reveal"><Link href="/">Home</Link> / <span>How it works</span></p>
              <span className="kicker reveal">How it works</span>
              <h1 className="display reveal" data-d="1">
                A clear read on every <span className="tx-gradient">live interview</span>
              </h1>
              <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
                Trueyy was built to disappear into the way you already hire. It runs in the background of the call, reads the signals a human interviewer cannot track, and hands back something simple you can act on. Here is the whole flow, start to finish.
              </p>
            </div>
            <div className="reveal" data-d="2">
              <HeroVideo youtubeId="dfS_zz8NrFY" title="The Trueyy Journey: Interview integrity monitoring walkthrough" />
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            {STEPS.map((s, i) => (
              <div key={s.no}>
                {i > 0 && <hr className="hairline" />}
                <div className={`feat-row reveal${i % 2 === 1 ? ' flip' : ''}`}>
                  <div className="feat-text">
                    <div className="tl-no" style={{ marginBottom: '12px' }}>{s.no}</div>
                    <h2 className="h3">{s.heading}</h2>
                    <p className="muted" style={{ marginTop: '14px' }}>{s.body}</p>
                  </div>
                  <div className="feat-media">
                    {READY_STEPS.has(i + 1) ? (
                      <img
                        className="feat-shot"
                        src={`/marketing/step-${i + 1}.webp`}
                        alt={`${s.heading} — a Trueyy interviewer using the product`}
                        width={1536}
                        height={1024}
                        loading="lazy"
                      />
                    ) : (
                      <div className="ph">Step {s.no} — product visual</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="callout reveal">
              <span className="kicker">What you get back</span>
              <p style={{ marginTop: '12px', fontSize: '1.1rem' }}>
                Trueyy never tells you who to hire. It gives your team a clear, evidence-backed read so the decision stays with you. You see what happened, when it happened, and how confident the system is. Then you decide.
              </p>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap center">
            <div className="reveal">
              <span className="kicker kicker--center">Set up in minutes</span>
              <h2 className="h2" style={{ marginTop: '14px' }}>Three things that stay easy</h2>
            </div>
            <div className="grid-3" style={{ marginTop: '48px', textAlign: 'left' }}>
              <div className="card reveal" data-d="1">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3>No new platform</h3>
                <p>Keep running interviews on Zoom, Meet, or Teams. Trueyy sits beside them instead of replacing them. Your team never has to learn a new video tool.</p>
              </div>
              <div className="card reveal" data-d="2">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3>No training day</h3>
                <p>The dashboard reads like a feed. Most interviewers understand it the first time they see a live session. If they can read a chat log, they can read Trueyy.</p>
              </div>
              <div className="card reveal" data-d="3">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <h3>No messy reports</h3>
                <p>One score, one timeline, one summary. It drops straight onto your existing candidate scorecard. No exports, no reformatting, no lost context.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band reveal">
              <div className="glow" />
              <h2 className="h2" style={{ marginBottom: '16px' }}>Watch it read a real interview</h2>
              <p className="lead" style={{ margin: '0 auto 30px' }}>
                Book a short walkthrough and we will run a live session with you so you can see the full flow end to end before anything else.
              </p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <BookDemoButton className="btn btn--primary btn--lg">Book a demo <span className="arw">&rarr;</span></BookDemoButton>
                <Link className="btn btn--ghost btn--lg" href="/features">See detection layers</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PageScrollReveal />
    </>
  );
}
