import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

const ogImage = { url: '/trueyy-logo-new.svg', width: 1200, height: 630, alt: 'Trueyy Resources' };

export const metadata: Metadata = {
  title: 'Resources | Trueyy Interview Integrity',
  description: 'Plain, useful reading on interview integrity and modern remote hiring. Guides on detecting AI-assisted answers, GDPR compliance, and running a fair process.',
  alternates: { canonical: 'https://trueyy.com/resources' },
  openGraph: {
    title: 'Resources | Trueyy Interview Integrity',
    description: 'Plain, useful reading on interview integrity and modern remote hiring. Guides on detecting AI-assisted answers, GDPR compliance, and running a fair process.',
    url: 'https://trueyy.com/resources',
    siteName: 'Trueyy',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | Trueyy',
    description: 'Guides on detecting AI cheating, GDPR compliance, and running a fair remote interview process.',
    images: ['/trueyy-logo-new.svg'],
  },
};

const POSTS = [
  {
    cat: 'Playbook',
    title: 'A fair interview process that still catches cheating',
    body: 'You can protect honest candidates without turning the interview into an interrogation. A practical framework for hiring teams who want both.',
    time: '8 min read',
    datePublished: '2025-03-10',
    author: 'Trueyy Team',
  },
  {
    cat: 'Trends',
    title: 'Why remote interview cheating surged after 2023',
    body: 'AI assistants made it easy and nearly invisible. We break down what changed, which tools are most used, and why old proctoring stopped working.',
    time: '6 min read',
    datePublished: '2025-04-02',
    author: 'Trueyy Team',
  },
  {
    cat: 'For agencies',
    title: 'Protecting your reputation when you place candidates',
    body: 'One bad placement can cost an agency a client. How integrity signals protect the trust your business runs on, without adding friction to the process.',
    time: '7 min read',
    datePublished: '2025-04-18',
    author: 'Trueyy Team',
  },
  {
    cat: 'Compliance',
    title: 'Monitoring interviews without crossing a privacy line',
    body: 'What you can and cannot do under GDPR, and how to keep candidates informed and comfortable without turning consent into a legal formality.',
    time: '9 min read',
    datePublished: '2025-05-05',
    author: 'Trueyy Team',
  },
  {
    cat: 'How-to',
    title: 'Reading an integrity timeline like a pro',
    body: 'A score is a starting point. The real story is in the timeline. Here is how to read one and turn it into a confident hiring decision.',
    time: '5 min read',
    datePublished: '2025-05-20',
    author: 'Trueyy Team',
  },
  {
    cat: 'Opinion',
    title: 'The interview is not broken. The honor system is.',
    body: 'Why the answer is not more surveillance, but better signals and a process that respects the people sitting in the call.',
    time: '4 min read',
    datePublished: '2025-06-01',
    author: 'Trueyy Team',
  },
];

const SLUGS = [
  'fair-interview-process',
  'why-cheating-surged',
  'protecting-agency-reputation',
  'monitoring-privacy-line',
  'reading-integrity-timeline',
  'honor-system-broken',
];

const articleListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Trueyy Resources — Interview Integrity Guides',
  itemListElement: POSTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Article',
      headline: p.title,
      description: p.body,
      datePublished: p.datePublished,
      author: { '@type': 'Organization', name: p.author },
      publisher: { '@type': 'Organization', name: 'Trueyy', url: 'https://trueyy.com' },
    },
  })),
};

export default function ResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }} />
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="wrap">
            <p className="crumb reveal"><Link href="/">Home</Link> / <span>Resources</span></p>
            <span className="kicker reveal">Resources</span>
            <h1 className="display reveal" data-d="1">
              Hire fair. <span className="tx-gradient">Stay sharp.</span>
            </h1>
            <p className="lead reveal" data-d="2" style={{ marginTop: '22px' }}>
              Plain, useful reading on interview integrity and modern remote hiring. No fluff, no scare tactics, just what is actually changing and what you can do about it.
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <article className="post-feature reveal">
              <img className="post-thumb" src="/marketing/resource-featured.png" alt="How to spot AI-assisted answers in a live interview" width={1672} height={941} loading="lazy" />
              <div className="post-body">
                <span className="post-cat">Guide</span>
                <h3>How to spot AI-assisted answers in a live interview</h3>
                <p className="muted">Candidates using Cluely, ChatGPT, or InterviewCoder leave a pattern, even when the answers sound great. Here is what to listen for, what to ask, and how to tell a thoughtful pause from a hidden prompt.</p>
                <p className="post-meta">12 min read &middot; Updated this month</p>
                <Link className="btn btn--ghost" style={{ marginTop: '22px', alignSelf: 'flex-start' }} href="/resources/spot-ai-assisted-answers">
                  Read the guide <span className="arw">&rarr;</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="post-grid">
              {POSTS.map((p, i) => (
                <Link key={p.title} className="post-card reveal" href={`/resources/${SLUGS[i]}`} data-d={String((i % 3) + 1)}>
                  <img className="post-thumb" src={`/marketing/resource-${i + 1}.png`} alt={p.title} width={1672} height={941} loading="lazy" />
                  <div className="post-body">
                    <span className="post-cat">{p.cat}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <p className="post-meta">{p.time}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="cta-band reveal">
              <div className="glow" />
              <h2 className="h2" style={{ marginBottom: '16px' }}>Want this in your inbox?</h2>
              <p className="lead" style={{ margin: '0 auto 28px' }}>
                One useful note a month on interview integrity and hiring. No spam, easy to leave anytime.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PageScrollReveal />
    </>
  );
}
