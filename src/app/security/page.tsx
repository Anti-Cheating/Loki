import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

const ogImage = { url: '/trueyy-logo-new.svg', width: 1200, height: 630, alt: 'Trueyy Security & Privacy' };

export const metadata: Metadata = {
  title: 'Security & Privacy | Trueyy Interview Integrity',
  description: 'Trueyy is built consent-first: candidates always know what is monitored, data is encrypted in transit and at rest, retention is configurable, and deletion is one click. GDPR aligned, SOC 2 in progress.',
  alternates: { canonical: 'https://trueyy.com/security' },
  openGraph: {
    title: 'Security & Privacy | Trueyy Interview Integrity',
    description: 'Trueyy is built consent-first: candidates always know what is monitored, data is encrypted in transit and at rest, retention is configurable, and deletion is one click. GDPR aligned, SOC 2 in progress.',
    url: 'https://trueyy.com/security',
    siteName: 'Trueyy',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & Privacy | Trueyy',
    description: 'Consent-first interview monitoring. Encrypted in transit and at rest, configurable retention, GDPR aligned, SOC 2 in progress.',
    images: ['/trueyy-logo-new.svg'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Trueyy store candidate video recordings?',
      acceptedAnswer: { '@type': 'Answer', text: 'The live meeting video feed stays inside Zoom, Google Meet, or Microsoft Teams — Trueyy does not tap it. For integrity analysis Trueyy does capture device signals, periodic screen context (screenshots), and interview audio (transcribed for analysis). Everything captured is encrypted in transit and at rest and deleted on the retention window you set.' },
    },
    {
      '@type': 'Question',
      name: 'Is Trueyy GDPR compliant?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trueyy is designed to support GDPR compliance. Candidates are informed of exactly what is monitored before the session starts. Consent is explicit. Data retention is configurable per organisation. Data-subject access and deletion requests are supported.' },
    },
    {
      '@type': 'Question',
      name: 'What data does Trueyy collect from candidates?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trueyy captures device-level signals (app focus events, paste activity, keystroke timing), periodic screen context (screenshots), and interview audio, which is transcribed for analysis. The live meeting video feed is not tapped. All captured data is encrypted and deleted on the retention schedule you set.' },
    },
  ],
};

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export default function SecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap">
            <p className="crumb reveal"><Link href="/">Home</Link> / <span>Security</span></p>
            <span className="kicker reveal">Security and privacy</span>
            <h1 className="display reveal" data-d="1">
              Watching for cheating <span className="tx-gradient">without</span> treating people like suspects
            </h1>
            <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
              Integrity monitoring only works if it is fair. Trueyy is built to be honest with candidates and strict with their data. We tell people what is happening, we protect what we collect, and we give your team full control over all of it.
            </p>
            <div className="badges reveal" data-d="3">
              <span className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                </svg>
                GDPR aligned
              </span>
              <span className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                </svg>
                SOC 2 in progress
              </span>
              <span className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                Encrypted by default
              </span>
              <span className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a1.994 1.994 0 0 1-1.414-.586m0 0L11 14h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v4l.586-.586z" />
                </svg>
                Consent-first
              </span>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="grid-3">
              <div className="card reveal" data-d="1">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>Consent before anything</h3>
                <p>Every candidate sees a clear note about what Trueyy monitors before the interview starts. Nothing is hidden, and consent is part of the flow rather than buried in fine print.</p>
              </div>
              <div className="card reveal" data-d="2">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                </div>
                <h3>Encrypted end to end</h3>
                <p>Session data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access is scoped so only the people who should see a session can open it.</p>
              </div>
              <div className="card reveal" data-d="3">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <h3>Compliance ready</h3>
                <p>Trueyy is built around GDPR and SOC 2 expectations, with consent prompts, audit logging, and retention windows you set to match your own policy.</p>
              </div>
              <div className="card reveal" data-d="1">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="3" /><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  </svg>
                </div>
                <h3>The meeting video stays in your call</h3>
                <p>The live meeting video feed stays inside Zoom, Meet, or Teams &mdash; we don&apos;t tap it. Trueyy captures device signals, periodic screen context, and interview audio for integrity analysis; what we capture is encrypted and deleted on the retention window you set.</p>
              </div>
              <div className="card reveal" data-d="2">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3>You control retention</h3>
                <p>Your organization sets how long session data lives. Configure per-team retention windows and delete individual sessions on request at any time.</p>
              </div>
              <div className="card reveal" data-d="3">
                <div className="card-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Candidate review path</h3>
                <p>Candidates who believe a flag was incorrect can request a formal review. The process is documented and runs through your HR team, not ours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap split">
            <div>
              <span className="kicker reveal">Our principles</span>
              <h2 className="h2 reveal" data-d="1" style={{ margin: '14px 0 24px' }}>Five rules we will not bend on</h2>
              <div className="reveal" data-d="2">
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span><strong>Consent comes first.</strong> No candidate is monitored without knowing about it in plain language.</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span><strong>Collect only what matters.</strong> We read integrity signals, not a candidate&apos;s whole life.</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span><strong>You own your data.</strong> Export it, delete it, or set it to expire on a schedule you choose.</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span><strong>No black-box verdicts.</strong> Every flag is explained, so a human always makes the final call.</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span><strong>Security is not a feature.</strong> It is the floor we build everything else on top of.</span></div>
              </div>
            </div>
            <div className="form-card reveal" data-d="2">
              <span className="kicker">Data handling at a glance</span>
              <div style={{ marginTop: '20px' }}>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Encryption in transit (TLS 1.2+) and at rest (AES-256)</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Role-based access and full audit trails</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Configurable retention and one-click deletion</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Data processing agreement available on request</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Meeting video stays in your call; captured signals expire on your schedule</span></div>
              </div>
              <BookDemoButton className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}>
                Talk to us about compliance <span className="arw">&rarr;</span>
              </BookDemoButton>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <span className="kicker reveal">Technical and organisational measures</span>
            <h2 className="h2 reveal" data-d="1" style={{ margin: '14px 0 28px' }}>How we protect the data we handle</h2>
            <div className="grid-3">
              <div className="card reveal" data-d="1"><h3>Access control</h3><p>JWT authentication with refresh-token rotation, role-based access, and least-privilege API keys. Every data query is scoped to the owning company, so tenants never see each other&apos;s data.</p></div>
              <div className="card reveal" data-d="2"><h3>Encryption</h3><p>TLS in transit and encryption at rest across the database and file storage. Network access is restricted to an explicit allowlist.</p></div>
              <div className="card reveal" data-d="3"><h3>Consent enforcement</h3><p>Capture is hard-gated on candidate consent and stops automatically on revoke, session end, or a lapsed heartbeat &mdash; enforced in code, not just policy.</p></div>
              <div className="card reveal" data-d="1"><h3>Accountability</h3><p>An immutable audit log records privileged and data actions, giving you and us a tamper-evident trail.</p></div>
              <div className="card reveal" data-d="2"><h3>Your data rights</h3><p>Configurable retention with automated deletion, plus company-directed candidate erasure &mdash; permanently removing a person&apos;s captured data on request.</p></div>
              <div className="card reveal" data-d="3"><h3>Sub-processors</h3><p>A small, vetted set of providers, each receiving only the data it needs. See the full <Link href="/sub-processors">sub-processor register</Link>.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band reveal">
              <div className="glow" />
              <h2 className="h2" style={{ marginBottom: '16px' }}>Have a security question we did not cover?</h2>
              <p className="lead" style={{ margin: '0 auto 30px' }}>
                The team is happy to walk your security and legal stakeholders through how Trueyy handles data, consent, and incident response.
              </p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <BookDemoButton className="btn btn--primary btn--lg">Book a security review <span className="arw">&rarr;</span></BookDemoButton>
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
