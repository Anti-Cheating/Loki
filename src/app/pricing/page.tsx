import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'Pricing & Early Access | Trueyy Interview Integrity',
  description: 'Trueyy is opening to a small group of early-access teams. Free pilot for up to 25 interviews. Founding-member pricing locked in at signup.',
  alternates: { canonical: 'https://trueyy.com/pricing' },
};

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

const FAQS = [
  {
    q: 'Is there really a free pilot?',
    a: 'Yes. The Starter pilot lets one team run up to 25 monitored interviews with the full detection stack, so you can judge Trueyy on your own candidates before any money changes hands.',
  },
  {
    q: 'Why is pricing custom right now?',
    a: 'We are in early access and working out pricing with the first teams using it. That keeps the number fair to how you actually hire, whether that is a steady weekly flow or a seasonal spike.',
  },
  {
    q: 'What does founding-member pricing mean?',
    a: 'Teams that join during early access lock in their rate and keep it after we launch publicly, even as we add features and raise list prices for new customers.',
  },
  {
    q: 'Do you offer agency volume terms?',
    a: 'Yes. Staffing agencies run a lot of interviews, so we put together volume terms that match. Tell us your monthly interview count and we will come back with something that works.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap center">
            <p className="crumb reveal" style={{ textAlign: 'center' }}><Link href="/">Home</Link> / <span>Pricing</span></p>
            <span className="kicker kicker--center reveal">Early access</span>
            <h1 className="display reveal" data-d="1" style={{ margin: '0 auto' }}>Get in before launch</h1>
            <p className="lead reveal" data-d="2" style={{ margin: '22px auto 0' }}>
              Trueyy is opening up to a small group of early-access teams. Join now, lock in founding-member pricing, help shape the roadmap, and get direct support from the people building it.
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="price-grid">
              <div className="price-card reveal" data-d="1">
                <p className="price-name">Starter</p>
                <p className="price-amt">Free<small> pilot</small></p>
                <p className="price-desc">One team kicking the tires on real interviews.</p>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Up to 25 monitored interviews</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>All six detection layers</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Integrity timeline and score</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Email support</span></div>
                <Link className="btn btn--ghost" href="/demo">Start a pilot</Link>
              </div>
              <div className="price-card featured reveal" data-d="2">
                <span className="price-badge">Most popular</span>
                <p className="price-name">Growth</p>
                <p className="price-amt">Custom</p>
                <p className="price-desc">Staffing agencies and hiring teams running interviews every week.</p>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Unlimited monitored interviews</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Team dashboard and shared reviews</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>ATS and calendar integrations</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Priority support and onboarding</span></div>
                <Link className="btn btn--primary" href="/demo">Book a demo</Link>
              </div>
              <div className="price-card reveal" data-d="3">
                <p className="price-name">Enterprise</p>
                <p className="price-amt">Let&apos;s talk</p>
                <p className="price-desc">People ops teams with security, scale, and compliance needs.</p>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Everything in Growth</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>SSO, audit logs, role controls</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Custom retention and DPA</span></div>
                <div className="checkrow"><span className="ck">{CHECK_ICON}</span><span>Dedicated account manager</span></div>
                <Link className="btn btn--ghost" href="/demo">Contact sales</Link>
              </div>
            </div>
            <p className="stat-foot dim center" style={{ marginTop: '24px' }}>
              Final pricing is set with each early-access team. No public per-seat number yet, and founding members keep their rate after launch.
            </p>
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
              <h2 className="h2" style={{ marginBottom: '16px' }}>Lock in founding-member pricing</h2>
              <p className="lead" style={{ margin: '0 auto 30px' }}>
                Spots in early access are limited so we can support every team properly. Book a demo and we will get you started.
              </p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <Link className="btn btn--primary btn--lg" href="/demo">Book a demo <span className="arw">&rarr;</span></Link>
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

