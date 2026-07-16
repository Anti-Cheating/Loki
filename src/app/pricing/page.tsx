import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { PricingCards } from '@/components/ui/PricingCards';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

export const metadata: Metadata = {
  title: 'Pricing | Trueyy Interview Integrity',
  description: 'Start free with 3 monitored interviews. Starter at ₹10,000/mo for 10 interviews. Growth at ₹1,50,000/mo for 300 interviews. 20% off on annual plans.',
  alternates: { canonical: 'https://www.trueyy.com/pricing' },
  openGraph: {
    title: 'Pricing | Trueyy Interview Integrity',
    description: 'Start free with 3 interviews. Starter at ₹10,000/mo. Growth at ₹1,50,000/mo. Save 20% on annual billing.',
    url: 'https://www.trueyy.com/pricing',
    siteName: 'Trueyy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Trueyy',
    description: 'Start free with 3 interviews. Starter at ₹10,000/mo. Growth at ₹1,50,000/mo. Save 20% on annual billing.',
  },
};

const FAQS = [
  {
    q: 'What is included in the free Trial?',
    a: 'The Trial plan gives your team 3 one-time monitored interviews, up to 3 interviewer seats, and 60 minutes per interview — no credit card required. It is the same full detection stack as the paid plans so you can judge Trueyy on real candidates.',
  },
  {
    q: 'What does the Starter plan include?',
    a: '10 interviews per month, up to 10 interviewer seats, 100 minutes per interview, ATS integrations, and 24/7 chat support. Additional interviews can be added at ₹1,000 each (minimum 100). Starter costs ₹10,000/month or ₹96,000/year (₹8,000/month).',
  },
  {
    q: 'What does the Growth plan include?',
    a: '300 interviews per month, up to 100 interviewer seats, 100 minutes per interview, ATS integrations, and 24/7 chat plus a shared account manager. Additional interviews are available at ₹500 each. Growth costs ₹1,50,000/month or ₹14,40,000/year (₹1,20,000/month).',
  },
  {
    q: 'Is there a discount for annual billing?',
    a: 'Yes — both Starter and Growth are 20% cheaper on an annual plan. Starter drops from ₹10,000/month to ₹8,000/month (₹96,000/year). Growth drops from ₹1,50,000/month to ₹1,20,000/month (₹14,40,000/year).',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]} />
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap">
            <p className="crumb reveal"><Link href="/">Home</Link> / <span>Pricing</span></p>
            <span className="kicker reveal">Simple pricing</span>
            <h1 className="display reveal" data-d="1">Start free. Scale as you hire.</h1>
            <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
              Try Trueyy with 3 real interviews at no cost. When you are ready to run more, pick a plan that fits your team size and volume.
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <PricingCards />
          </div>
        </section>

        <section className="section">
          <div className="wrap faq-wrap">
            <div className="reveal">
              <span className="kicker">Pricing questions</span>
              <h2 className="h2">Fair answers, no surprises</h2>
            </div>
            <div className="reveal" data-d="1">
              <FAQAccordion items={FAQS} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band reveal">
              <div className="glow" />
              <h2 className="h2" style={{ marginBottom: '16px' }}>Not sure which plan fits?</h2>
              <p className="lead" style={{ margin: '0 auto 30px' }}>
                Book a 30-minute demo and we will walk you through the right plan for your interview volume and team size.
              </p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <BookDemoButton className="btn btn--primary btn--lg">Book a demo <span className="arw">&rarr;</span></BookDemoButton>
                <a className="btn btn--ghost btn--lg" href="https://app.trueyy.com" target="_blank" rel="noopener noreferrer">Start free trial</a>
              </div>
              <p className="post-meta" style={{ marginTop: '20px' }}>
                Need a custom plan or have a question? <Link href="/contact">Contact us &rarr;</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PageScrollReveal />
    </>
  );
}
