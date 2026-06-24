import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

const ogImage = { url: '/trueyy-logo-new.svg', width: 1200, height: 630, alt: 'Trueyy Detection Features' };

export const metadata: Metadata = {
  title: 'Detection Features | How Trueyy Catches AI Cheating in Interviews',
  description: 'Six signal layers running in real time: AI tool fingerprinting, app focus tracking, paste velocity, gaze patterns, off-screen device signals, and answer structure analysis.',
  alternates: { canonical: 'https://trueyy.com/features' },
  openGraph: {
    title: 'Detection Features | How Trueyy Catches AI Cheating in Interviews',
    description: 'Six signal layers running in real time: AI tool fingerprinting, app focus tracking, paste velocity, gaze patterns, off-screen device signals, and answer structure analysis.',
    url: 'https://trueyy.com/features',
    siteName: 'Trueyy',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Detection Features | Trueyy',
    description: 'Six real-time signal layers that catch AI tool use, paste velocity, app switching, and scripted answers during live interviews.',
    images: ['/trueyy-logo-new.svg'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the six signal layers Trueyy monitors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trueyy monitors: (1) AI tool fingerprinting — detecting ChatGPT, Cluely, InterviewCoder and others by output signature; (2) app and window focus — logging every context switch with a timestamp; (3) paste velocity — catching answers that appear faster than any person can type; (4) gaze patterns — detecting reading behaviour from webcam signals; (5) off-screen device signals — identifying secondary devices in the session; (6) answer structure analysis — flagging responses that are too polished or complete to be live.' },
    },
    {
      '@type': 'Question',
      name: 'How does Trueyy detect Cluely specifically?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trueyy detects Cluely through its AI tool fingerprinting layer, which reads the structural signature of answers — the timing gap between a question and a suspiciously complete reply, the paste pattern, and the rhythm of a conversation that has AI feeding responses in real time.' },
    },
    {
      '@type': 'Question',
      name: 'Does Trueyy work if the candidate uses a phone as a second device?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The off-screen device signal layer detects indicators of secondary device use — unusual audio reflections, head angle patterns, and timing anomalies consistent with reading from a second screen.' },
    },
  ],
};

const FEATURES = [
  {
    kicker: 'AI tool fingerprinting',
    heading: 'When the answer is being typed somewhere else',
    body: 'The most common form of interview cheating right now is a hidden AI tool feeding answers in real time. Trueyy reads the rhythm of a conversation and notices the small gap between a question and a suddenly complete reply. When responses arrive cleaner and faster than any person could build them from scratch, the pattern gets logged. Cluely, ChatGPT, Claude, Gemini, InterviewCoder — they all leave a trace.',
    checks: ['Detects the prompt-and-paste delay signature', 'Reads answer structure that is too clean to be live'],
    flip: false,
  },
  {
    kicker: 'App and window focus',
    heading: 'Attention that leaves the room mid-answer',
    body: 'Candidates rarely cheat by staring at the camera. They glance at another window, a chat thread, or a doc just off to the side. Trueyy tracks when focus leaves the interview session and for how long, then ties each context switch to the exact moment in the conversation. Quick glances stay in context. Long lookups get flagged.',
    checks: ['Logs every focus change with a timestamp', 'Separates a brief glance from a sustained lookup'],
    flip: true,
  },
  {
    kicker: 'Paste velocity',
    heading: 'Answers that appear faster than anyone can type',
    body: 'A 200-word block of text pasted in 0.3 seconds was not typed. Trueyy watches for paste events that exceed any plausible human input rate and marks them so you can review exactly what came in, how long it was, and when. Pre-written answers and AI-generated text both leave this signature.',
    checks: ['Catches bulk pastes that arrive during answers', 'Distinguishes a quick paste from natural typing rhythm'],
    flip: false,
  },
  {
    kicker: 'Reading gaze patterns',
    heading: 'Speaking freely versus reading from a script',
    body: 'People who know their material talk in a different rhythm than people reading off a screen. Eyes tracking a fixed invisible line look different from eyes that move freely around a face. Trueyy models gaze direction and pacing to tell the difference between a candidate thinking out loud and one reciting lines from a second monitor. No camera lockdown required.',
    checks: ['Reads gaze and pacing patterns without face tracking', 'Flags steady off-screen reading, not honest thinking pauses'],
    flip: true,
  },
  {
    kicker: 'Off-screen device signals',
    heading: 'Help loves to hide just out of frame',
    body: 'A phone propped behind the laptop or an extra monitor just to the left is where most outside help actually lives. Trueyy surfaces the patterns that point to a second device in play: specific audio artifacts, ambient light changes, and response timing gaps. These surface as low-confidence signals in the feed, not as accusations.',
    checks: ['Surfaces likely second-screen and second-device behavior', 'Ties the signal to the exact moment it appears in the call'],
    flip: false,
  },
  {
    kicker: 'Answer structure analysis',
    heading: 'How a real answer gets built',
    body: 'People reason out loud. They start, correct themselves, circle back, and occasionally contradict what they said a sentence ago. That is what thinking sounds like. Trueyy learns what that natural shape looks like, so answers that arrive perfectly structured and unnaturally fluent stand out instead of sailing past an interviewer who is busy listening.',
    checks: ['Models natural reasoning patterns across conversation', 'Highlights answers that are too tidy to be built in the moment'],
    flip: true,
  },
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export default function FeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap">
            <p className="crumb reveal"><Link href="/">Home</Link> / <span>Product</span></p>
            <span className="kicker reveal">Detection layers</span>
            <h1 className="display reveal" data-d="1">
              Six signals. One <span className="tx-gradient">honest score.</span>
            </h1>
            <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
              A single tell can fool you. A confident candidate who pauses is not cheating, and a nervous one who looks away is not hiding a screen. Trueyy reads several signals at once and weighs them together, so the noise drops out and the real pattern stands up.
            </p>
            <div className="inline-stats reveal" data-d="3">
              <div><div className="stat-num">6</div><p className="stat-lbl">signal layers</p></div>
              <div><div className="stat-num">&lt;1s</div><p className="stat-lbl">to surface a flag</p></div>
              <div><div className="stat-num">3</div><p className="stat-lbl">platforms supported</p></div>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            {FEATURES.map((f, i) => (
              <div key={f.kicker}>
                {i > 0 && <hr className="hairline" />}
                <div className={`feat-row reveal${f.flip ? ' flip' : ''}`}>
                  <div className="feat-text">
                    <span className="kicker">{f.kicker}</span>
                    <h2 className="h3">{f.heading}</h2>
                    <p className="muted" style={{ marginTop: '14px' }}>{f.body}</p>
                    <ul className="feat-list">
                      {f.checks.map(c => (
                        <li key={c} className="checkrow">
                          <span className="ck">{CHECK_ICON}</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="feat-media">
                    <div className="ph">{f.kicker} — product visual</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band reveal">
              <div className="glow" />
              <h2 className="h2" style={{ marginBottom: '16px' }}>See every layer working together</h2>
              <p className="lead" style={{ margin: '0 auto 30px' }}>
                The signals are strong on their own. Together they give you a read you can trust. Book a demo and watch them line up on a real call.
              </p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <BookDemoButton className="btn btn--primary btn--lg">Book a demo <span className="arw">&rarr;</span></BookDemoButton>
                <Link className="btn btn--ghost btn--lg" href="/comparison">Compare with proctoring</Link>
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
