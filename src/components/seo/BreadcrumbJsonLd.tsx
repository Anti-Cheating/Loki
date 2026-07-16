const SITE_URL = 'https://www.trueyy.com';

export type Crumb = {
  /** Visible label — must match the on-page breadcrumb text. */
  name: string;
  /** Absolute or site-relative URL for this crumb. */
  href: string;
};

/**
 * Emits a schema.org BreadcrumbList as JSON-LD. Render it alongside the
 * visible breadcrumb on a page; the `name`s must match the visible text so
 * the structured data reflects what the user sees.
 */
export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.href.startsWith('http') ? crumb.href : `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
