import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

const ogImage = { url: '/trueyy-logo-new.svg', width: 1200, height: 630, alt: 'Trueyy Sub-processors' };

const LAST_UPDATED = '5 July 2026';

export const metadata: Metadata = {
  title: 'Sub-processors | Trueyy',
  description: 'The third-party services Trueyy uses to deliver interview integrity monitoring, the data each one handles, and where it is processed.',
  alternates: { canonical: 'https://trueyy.com/sub-processors' },
  openGraph: {
    title: 'Sub-processors | Trueyy',
    description: 'The third-party services Trueyy uses, the data each handles, and where it is processed.',
    url: 'https://trueyy.com/sub-processors',
    siteName: 'Trueyy',
    type: 'website',
    images: [ogImage],
  },
};

type Row = { name: string; data: string; purpose: string; region: string };

const SUBPROCESSORS: Row[] = [
  { name: 'Deepgram', data: 'Interview audio', purpose: 'Speech-to-text transcription', region: 'United States' },
  { name: 'OpenAI', data: 'Transcripts, app & window metadata, screenshots', purpose: 'AI analysis of interview activity and screen context', region: 'United States' },
  { name: 'Cloudflare R2', data: 'Screenshots, audio, avatars', purpose: 'Encrypted object storage', region: 'Asia' },
  { name: 'Razorpay', data: 'Billing contact, payment metadata', purpose: 'Payment processing', region: 'India' },
  { name: 'Resend', data: 'Name, email', purpose: 'Transactional email', region: 'United States' },
  { name: 'Zoom', data: 'Meeting & participant metadata', purpose: 'Video meeting hosting', region: 'United States' },
  { name: 'Google', data: 'Account identity', purpose: 'Sign-in (OAuth)', region: 'United States' },
  { name: 'Cloud database & cache', data: 'All service data at rest', purpose: 'Primary data storage & queue', region: 'Asia' },
];

export default function SubProcessorsPage() {
  return (
    <>
      <style>{`
        .reg-scroll { overflow-x: auto; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }
        .reg { width: 100%; border-collapse: collapse; min-width: 680px; font-size: 0.94rem; }
        .reg th, .reg td { text-align: left; padding: 14px 18px; border-bottom: 1px solid var(--line-soft); vertical-align: top; }
        .reg thead th { font-size: 0.78rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-mut); background: var(--bg-2); }
        .reg tbody tr:last-child td { border-bottom: none; }
        .reg td.name { font-weight: 600; color: var(--text); white-space: nowrap; }
        .reg td.region { color: var(--text-mut); white-space: nowrap; }
        .reg td.data, .reg td.purpose { color: var(--text-mut); }
        .doc-prose { max-width: 68ch; }
        .doc-prose h2 { margin: 40px 0 12px; }
        .doc-prose p { color: var(--text-mut); margin-bottom: 14px; }
      `}</style>
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap">
            <p className="crumb reveal"><Link href="/">Home</Link> / <Link href="/security">Security</Link> / <span>Sub-processors</span></p>
            <span className="kicker reveal">Trust and compliance</span>
            <h1 className="display reveal" data-d="1">Sub-processors</h1>
            <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
              To deliver interview integrity monitoring, Trueyy relies on a small set of vetted third-party services. This page lists each one, the data it handles, and where that data is processed.
            </p>
            <p className="reveal" data-d="3" style={{ marginTop: '14px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="doc-prose reveal" data-d="1">
              <h2 className="h2">What is a sub-processor?</h2>
              <p>A sub-processor is a third-party company that processes personal data <strong>on Trueyy&apos;s behalf</strong> to help us provide the service. When you use Trueyy, some data is shared with these providers strictly for the functions described below.</p>
              <h2 className="h2">How we vet them</h2>
              <p>Before engaging any sub-processor, we assess its security and data-protection practices and put a written contract in place requiring it to process personal data only to provide services to Trueyy, in line with applicable data-protection law. Each provider receives only the data it needs for its function.</p>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <h2 className="h2 reveal" data-d="1" style={{ marginBottom: '20px' }}>List of sub-processors</h2>
            <div className="reg-scroll reveal" data-d="2">
              <table className="reg">
                <thead>
                  <tr><th>Sub-processor</th><th>Data handled</th><th>Purpose of processing</th><th>Region</th></tr>
                </thead>
                <tbody>
                  {SUBPROCESSORS.map((r) => (
                    <tr key={r.name}>
                      <td className="name">{r.name}</td>
                      <td className="data">{r.data}</td>
                      <td className="purpose">{r.purpose}</td>
                      <td className="region">{r.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="doc-prose reveal" data-d="1">
              <h2 className="h2">International transfers</h2>
              <p>Primary storage (database and files) is hosted in <strong>Asia</strong>; some analysis providers operate in the United States. For candidates in the EEA or UK, transfers outside their region are covered by <strong>Standard Contractual Clauses</strong>, supported by encryption in transit and at rest and least-privilege access.</p>
              <h2 className="h2">Updates to this page</h2>
              <p>We keep this list current. Before adding or replacing a sub-processor, we give customers <strong>advance notice</strong>. Under our Data Processing Agreement, a customer may reasonably <strong>object in writing within 30 days</strong> of an update on legitimate data-protection grounds.</p>
              <p>A full Data Processing Agreement is available to customers on request.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band reveal">
              <div className="glow" />
              <h2 className="h2" style={{ marginBottom: '16px' }}>Questions about how we handle data?</h2>
              <p className="lead" style={{ margin: '0 auto 30px' }}>
                We&apos;re happy to walk your security and legal stakeholders through our sub-processors, transfers, and our DPA.
              </p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <BookDemoButton className="btn btn--primary btn--lg">Request our DPA <span className="arw">&rarr;</span></BookDemoButton>
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
