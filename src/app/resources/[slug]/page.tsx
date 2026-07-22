import fs from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageScrollReveal } from '@/components/layout/PageScrollReveal';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { ShareButtons } from '@/components/ui/ShareButtons';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/resources');
const SITE = 'https://www.trueyy.com';
const DEFAULT_OG_IMAGE = `${SITE}/trueyy-logo-bg.png`;
const TWITTER_HANDLE = '@trueyyhq';

// Schema.org / OpenGraph datetimes want full ISO 8601 with a timezone.
// Frontmatter stores date-only "YYYY-MM-DD" (and `updated` as "YYYY-MM"); widen
// a valid date to UTC midnight, else return undefined so the caller can fall back.
const toIsoDateTime = (v?: string) =>
  v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? `${v}T00:00:00+00:00` : undefined;

// Social images must be absolute URLs.
const toAbsUrl = (p?: string) => (p ? (p.startsWith('http') ? p : `${SITE}${p}`) : undefined);

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
  // SEO overrides — all optional, with sensible fallbacks. `metaTitle` is the
  // <title> tag and is intentionally distinct from the on-page H1 (`title`);
  // set it per article for a search-optimized title. og*/twitter* fields let a
  // post override social cards independently.
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  tags?: string[];
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
  return { content, frontmatter, source };
}

// Pull Q&A pairs out of an article's "## FAQ" / "## Frequently asked questions"
// section so we can emit FAQPage structured data. Each "### question" is followed
// by its answer up to the next "### " (or the end of the section).
function extractFaqs(source: string): { question: string; answer: string }[] {
  const body = source.replace(/^---[\s\S]*?\n---\s*/, '');
  const faqs: { question: string; answer: string }[] = [];
  let inFaq = false;
  let question: string | null = null;
  let answerLines: string[] = [];

  const flush = () => {
    if (question) {
      const answer = answerLines
        .join(' ')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // markdown links -> text
        .replace(/[*_`#>]/g, '')                 // strip common markdown
        .replace(/\s+/g, ' ')
        .trim();
      if (answer) faqs.push({ question, answer });
    }
    question = null;
    answerLines = [];
  };

  for (const line of body.split('\n')) {
    const h2 = /^##\s+(.+)/.exec(line);       // H2 only (### won't match: 3rd char is '#')
    if (h2) {
      if (inFaq) flush();
      inFaq = /^(?:frequently asked questions|faqs?)\b/i.test(h2[1].trim());
      continue;
    }
    if (!inFaq) continue;
    const h3 = /^###\s+(.+)/.exec(line);
    if (h3) {
      flush();
      question = h3[1].trim();
      continue;
    }
    if (question) answerLines.push(line);
  }
  flush();
  return faqs;
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
  const url = `${SITE}/resources/${slug}`;

  // The <title> (meta title) is deliberately different from the on-page H1
  // (fm.title): use fm.metaTitle when set, otherwise brand the H1.
  const metaTitle = fm.metaTitle ?? `${fm.title} | Trueyy`;
  const metaDescription = fm.metaDescription ?? fm.excerpt;

  const ogTitle = fm.ogTitle ?? metaTitle;
  const ogDescription = fm.ogDescription ?? metaDescription;
  const hasArticleImage = !!(fm.ogImage || fm.image);
  const ogImageUrl = toAbsUrl(fm.ogImage) ?? toAbsUrl(fm.image) ?? DEFAULT_OG_IMAGE;
  const twitterImageUrl = toAbsUrl(fm.twitterImage) ?? ogImageUrl;

  const published = toIsoDateTime(fm.date) ?? fm.date;
  const modified = toIsoDateTime(fm.updated) ?? published;
  const author = fm.author ?? 'Trueyy Team';

  return {
    // `absolute` bypasses the root "%s | Trueyy" template so the title isn't double-branded.
    title: { absolute: metaTitle },
    description: metaDescription,
    keywords: fm.tags,
    authors: [{ name: author }],
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: 'Trueyy',
      locale: 'en_US',
      type: 'article',
      publishedTime: published,
      modifiedTime: modified,
      authors: [author],
      images: [
        hasArticleImage
          ? { url: ogImageUrl, width: 1672, height: 941, alt: fm.imageAlt ?? fm.title }
          : { url: ogImageUrl, alt: 'Trueyy' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fm.twitterTitle ?? ogTitle,
      description: fm.twitterDescription ?? ogDescription,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [twitterImageUrl],
    },
    other: { 'twitter:url': url },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const fm = article.frontmatter;
  const url = `${SITE}/resources/${slug}`;
  const publishedIso = toIsoDateTime(fm.date) ?? fm.date;
  // Keep the structured data in lockstep with the page metadata (same
  // description + image resolution).
  const schemaImage = toAbsUrl(fm.ogImage) ?? toAbsUrl(fm.image) ?? DEFAULT_OG_IMAGE;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: fm.title,
    description: fm.metaDescription ?? fm.excerpt,
    image: schemaImage,
    datePublished: publishedIso,
    dateModified: toIsoDateTime(fm.updated) ?? publishedIso,
    author: { '@type': 'Organization', name: fm.author ?? 'Trueyy Team' },
    publisher: {
      '@type': 'Organization',
      name: 'Trueyy',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/trueyy-logo-new.svg` },
    },
    articleSection: fm.category,
    ...(fm.tags?.length ? { keywords: fm.tags.join(', ') } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  };

  // FAQPage schema, auto-built from the article's FAQ section (if it has one).
  const faqs = extractFaqs(article.source);
  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Resources', href: '/resources' },
          { name: fm.category, href: `/resources/${slug}` },
        ]}
      />
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
            <ShareButtons url={url} title={fm.title} />
            {fm.image && (
              <img className="article-hero reveal" data-d="2" src={fm.image} alt={fm.imageAlt || fm.title} width={1672} height={941} />
            )}
            <div className="article-body">{article.content}</div>
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
