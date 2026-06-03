import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';

export const metadata: Metadata = {
  title: 'Trueyy vs Traditional Proctoring | Interview Integrity Comparison',
  description: 'Exam proctoring tools guard the wrong door. Trueyy was built for live two-way interviews, not locked-down tests. See the full capability comparison.',
  alternates: { canonical: 'https://trueyy.com/comparison' },
};

const ROWS: [string, string, string][] = [
  ['Designed for live two-way interviews', 'No', 'Yes'],
  ['Detects AI tool use in real time', 'Limited', 'Yes'],
  ['Specifically detects Cluely and InterviewCoder', 'No', 'Yes'],
  ['Weighs several signals together', 'Rule-based', 'Yes'],
  ['Runs inside Zoom, Meet, and Teams', 'No', 'Yes'],
  ['Light footprint for candidates', 'Heavy', 'Yes'],
  ['No video stored on third-party servers', 'No', 'Yes'],
  ['Plain-language timeline after the call', 'No', 'Yes'],
  ['Keeps a human in the final decision', 'Varies', 'Yes'],
  ['Built for recruiters, not exam halls', 'No', 'Yes'],
];

export default function ComparisonPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap">
            <p className="crumb reveal"><Link href="/">Home</Link> / <span>Compare</span></p>
            <span className="kicker reveal">Trueyy vs the old way</span>
            <h1 className="display reveal" data-d="1">
              Exam tools watch the screen. <span className="tx-gradient">We read the interview.</span>
            </h1>
            <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
              Most proctoring software was built for timed tests. It locks the browser, snaps webcam photos, and counts tab switches. That made sense for a one-way exam. A live, two-way hiring conversation is a different problem, and it needs a different tool.
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="cmp reveal">
              <div className="cmp-head">
                <div className="cmp-cell cmp-feat">Capability</div>
                <div className="cmp-cell cmp-old">Traditional proctoring</div>
                <div className="cmp-cell cmp-new">Trueyy</div>
              </div>
              <div className="cmp-rows">
                {ROWS.map(([feat, old, neo]) => (
                  <div key={feat} className="cmp-row">
                    <div className="cmp-cell cmp-feat">{feat}</div>
                    <div className="cmp-cell cmp-old"><span className="x">{old}</span></div>
                    <div className="cmp-cell cmp-new"><span className="y">{neo}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2">
              <div className="card reveal" data-d="1">
                <span className="kicker">Why lockdown tools fall short</span>
                <h3 style={{ margin: '14px 0 12px', fontSize: '1.4rem' }}>They guard the wrong door</h3>
                <p className="muted">Locking a browser stops a candidate from opening a tab. It does nothing about a phone propped behind the laptop, a Cluely session on a second device, or answers read from a printed sheet. The cheating moved. Most proctoring tools did not.</p>
              </div>
              <div className="card reveal" data-d="2">
                <span className="kicker">Why Trueyy fits live hiring</span>
                <h3 style={{ margin: '14px 0 12px', fontSize: '1.4rem' }}>It reads intent, not just motion</h3>
                <p className="muted">Trueyy was made for the conversation, not the quiz. It looks at how an answer gets built and where attention goes, then gives your interviewer a read they can actually use while the call is still live. Context, not snapshots.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap center">
            <p className="lead" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              If you run timed certification exams at scale, traditional proctoring still has its place. If you run live interviews and want to know whether the person actually did the thinking, that is exactly what Trueyy is for.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band reveal">
              <div className="glow" />
              <h2 className="h2" style={{ marginBottom: '16px' }}>See the difference on a live call</h2>
              <p className="lead" style={{ margin: '0 auto 30px' }}>
                Book a demo and we will show you what a real-time read looks like next to a static proctoring report.
              </p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <Link className="btn btn--primary btn--lg" href="/demo">Book a demo <span className="arw">&rarr;</span></Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">See early access</Link>
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
