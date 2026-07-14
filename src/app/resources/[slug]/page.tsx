import fs from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/resources');

type Frontmatter = {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  updated?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
};

async function getArticle(slug: string) {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  let source: string;
  try {
    source = await fs.readFile(file, 'utf8');
  } catch {
    return null;
  }
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });
  return { content, frontmatter };
}

export async function generateStaticParams() {
  const files = await fs.readdir(CONTENT_DIR);
  return files.filter((f) => f.endsWith('.mdx')).map((f) => ({ slug: f.replace(/\.mdx$/, '') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  const fm = article.frontmatter;
  return {
    title: `${fm.title} | Trueyy`,
    description: fm.excerpt,
    alternates: { canonical: `https://trueyy.com/resources/${slug}` },
    openGraph: { title: fm.title, description: fm.excerpt, type: 'article', url: `https://trueyy.com/resources/${slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const fm = article.frontmatter;
  const siteUrl = 'https://trueyy.com';
  const isIso = (v?: string) => (v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : undefined);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: fm.title,
    description: fm.excerpt,
    datePublished: fm.date,
    dateModified: isIso(fm.updated) ?? fm.date,
    author: { '@type': 'Organization', name: fm.author ?? 'Trueyy Team' },
    publisher: {
      '@type': 'Organization',
      name: 'Trueyy',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/trueyy-logo-new.svg` },
    },
    image: fm.image ? `${siteUrl}${fm.image}` : `${siteUrl}/trueyy-logo-new.svg`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/resources/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main id="main-content">
        <article className="article">
          <div className="wrap article-wrap">
            <p className="crumb reveal">
              <Link href="/">Home</Link> / <Link href="/resources">Resources</Link> / <span>{fm.category}</span>
            </p>
            <span className="post-cat reveal">{fm.category}</span>
            <h1 className="article-title reveal" data-d="1">{fm.title}</h1>
            <p className="post-meta reveal" data-d="2">{fm.readTime} &middot; {fm.author}</p>
            {fm.image && (
              <img className="article-hero reveal" data-d="2" src={fm.image} alt={fm.imageAlt || fm.title} width={1672} height={941} />
            )}
            <div className="article-body reveal" data-d="2">{article.content}</div>
            <hr className="hairline" style={{ margin: '44px 0 26px' }} />
            <Link className="btn btn--ghost" href="/resources">&larr; All resources</Link>
          </div>
        </article>
      </main>
      <Footer />
      <PageScrollReveal />
    </>
  );
}
