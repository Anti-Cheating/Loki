import Link from 'next/link';
import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';

/**
 * Shared chrome for the legal pages (Privacy / Terms / Compliance).
 * Reuses the article prose styling so the long-form copy matches the
 * Resources articles. Content is passed as children.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <PageScrollReveal />
      <main id="main-content">
        <article className="article">
          <div className="wrap article-wrap">
            <p className="crumb reveal">
              <Link href="/">Home</Link> / <span>{title}</span>
            </p>
            <h1 className="article-title reveal">{title}</h1>
            <p className="post-meta reveal">Last updated {updated}</p>

            <div className="article-body reveal">
              {children}
            </div>

            <hr />
            <p className="post-meta">
              Questions? <Link href="/contact">Contact us</Link> ·{' '}
              <Link href="/security">Security &amp; Privacy overview →</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
