import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://www.trueyy.com';

// Pull an article's real last-modified date from its frontmatter (`updated`
// preferred, else `date`). Accepts YYYY-MM or YYYY-MM-DD. Falls back to the
// build time only if neither parses — so `lastmod` reflects when the *content*
// actually changed, not when the site was last deployed. Stamping every URL
// with the build time (the old behaviour) trains crawlers to distrust lastmod.
function articleLastModified(raw: string, fallback: Date): Date {
  const fm = raw.split(/^---$/m)[1] ?? '';
  const pick = (key: string) =>
    fm.match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}(?:-\\d{2})?)`, 'm'))?.[1];
  const value = pick('updated') ?? pick('date');
  if (!value) return fallback;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? fallback : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages have no tracked content date; the marketing site is actively
  // developed, so the build time is an honest lastmod for these.
  const pages = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/features', priority: 0.9, freq: 'weekly' as const },
    { path: '/how-it-works', priority: 0.9, freq: 'monthly' as const },
    { path: '/comparison', priority: 0.8, freq: 'monthly' as const },
    { path: '/pricing', priority: 0.8, freq: 'weekly' as const },
    { path: '/security', priority: 0.7, freq: 'monthly' as const },
    { path: '/sub-processors', priority: 0.5, freq: 'monthly' as const },
    { path: '/demo', priority: 0.9, freq: 'monthly' as const },
    { path: '/contact', priority: 0.5, freq: 'monthly' as const },
    { path: '/resources', priority: 0.7, freq: 'weekly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = pages.map(({ path: p, priority, freq }) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  const contentDir = path.join(process.cwd(), 'src/content/resources');
  const articleEntries: MetadataRoute.Sitemap = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(contentDir, f), 'utf8');
      return {
        url: `${SITE_URL}/resources/${f.replace(/\.mdx$/, '')}`,
        lastModified: articleLastModified(raw, now),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      };
    });

  return [...staticEntries, ...articleEntries];
}
