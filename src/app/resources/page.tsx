import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { getAllArticles } from '@/lib/resources';

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | Trueyy',
    description: 'Guides on detecting AI cheating, GDPR compliance, and running a fair remote interview process.',
  },
};

export default async function ResourcesPage() {
  const posts = await getAllArticles();

  const FEATURED_SLUG = 'spot-ai-assisted-answers';
  const featured = posts.find((p) => p.slug === FEATURED_SLUG);
  const gridPosts = posts.filter((p) => p.slug !== FEATURED_SLUG);

  const articleListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trueyy Resources — Interview Integrity Guides',
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Article',
        headline: p.title,
        description: p.excerpt,
        datePublished: p.date,
        author: { '@type': 'Organization', name: p.author },
        publisher: { '@type': 'Organization', name: 'Trueyy', url: 'https://trueyy.com' },
      },
    })),
  };

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
              <img className="post-thumb" src={featured?.image} alt={featured?.title} width={1672} height={941} loading="lazy" />
              <div className="post-body">
                <span className="post-cat">Guide</span>
                <h3>{featured?.title}</h3>
                <p className="muted">{featured?.excerpt}</p>
                <p className="post-meta">{featured?.readTime}</p>
                <Link className="btn btn--ghost" style={{ marginTop: '22px', alignSelf: 'flex-start' }} href={`/resources/${FEATURED_SLUG}`}>
                  Read the guide <span className="arw">&rarr;</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="post-grid">
              {gridPosts.map((p, i) => (
                <Link key={p.slug} className="post-card reveal" href={`/resources/${p.slug}`} data-d={String((i % 3) + 1)}>
                  <img className="post-thumb" src={p.image ?? `/marketing/resource-${i + 1}.webp`} alt={p.title} width={1672} height={941} loading="lazy" />
                  <div className="post-body">
                    <span className="post-cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <p className="post-meta">{p.readTime}</p>
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
