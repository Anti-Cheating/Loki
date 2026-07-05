import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://trueyy.com';
  const now = new Date();

  const pages = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/features', priority: 0.9, freq: 'weekly' as const },
    { path: '/how-it-works', priority: 0.9, freq: 'monthly' as const },
    { path: '/comparison', priority: 0.8, freq: 'monthly' as const },
    { path: '/pricing', priority: 0.8, freq: 'weekly' as const },
    { path: '/security', priority: 0.7, freq: 'monthly' as const },
    { path: '/sub-processors', priority: 0.5, freq: 'monthly' as const },
    { path: '/demo', priority: 0.9, freq: 'monthly' as const },
    { path: '/resources', priority: 0.7, freq: 'weekly' as const },
  ];

  return pages.map(({ path, priority, freq }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
