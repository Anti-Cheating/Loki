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

test('an H2 followed by a same-text H3 keeps the base slug on the H2 (matches rehype-slug)', () => {
  expect(extractToc('## Is X true?\n### Is X true?\n')).toEqual([{ id: 'is-x-true', text: 'Is X true?' }]);
});

test('a same-text heading before the H2 pushes the H2 to the -1 slug (matches rehype-slug)', () => {
  expect(extractToc('# Repeat\n## Repeat\n').map((i) => i.id)).toEqual(['repeat-1']);
});
