import { test, expect } from '@playwright/test';
import { extractToc } from '../src/lib/toc';

test('extracts H2s and slugs them', () => {
  const src = `---\ntitle: "X"\n---\n## First Section\nbody\n## Second Section\n`;
  expect(extractToc(src)).toEqual([
    { id: 'first-section', text: 'First Section' },
    { id: 'second-section', text: 'Second Section' },
  ]);
});

test('skips ## inside code fences', () => {
  const src = '## Real\n```\n## NotAHeading\n```\n## Also Real\n';
  expect(extractToc(src).map((i) => i.text)).toEqual(['Real', 'Also Real']);
});

test('disambiguates duplicate headings like rehype-slug', () => {
  const src = '## FAQ\n## FAQ\n';
  expect(extractToc(src).map((i) => i.id)).toEqual(['faq', 'faq-1']);
});

test('ignores H1 and H3', () => {
  const src = '# Title\n## Keep\n### Sub\n';
  expect(extractToc(src).map((i) => i.text)).toEqual(['Keep']);
});
