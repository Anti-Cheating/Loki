# Sticky Table of Contents — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a sticky, left-side, scroll-tracking table of contents (H2 only, desktop-only) to every resource article.

**Architecture:** `extractToc()` parses the raw MDX for H2s and slugs them with `github-slugger`; `rehype-slug` gives the rendered `<h2>`s matching `id`s; a client `TableOfContents` component renders the list with IntersectionObserver scrollspy; the article template becomes a 2-column grid (TOC | article), TOC hidden below `lg`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `next-mdx-remote` (compileMDX), `rehype-slug`, `github-slugger`, `@playwright/test` (already a devDependency) for tests.

## Global Constraints

- Branch: `feat/article-toc` (already created off `main`; the spec is committed here).
- Shared template only: `src/app/resources/[slug]/page.tsx` — affects all resource articles.
- H2 headings only. TOC hidden below the `lg` breakpoint (1024px).
- TOC link `id`s MUST match rendered heading `id`s exactly (same `github-slugger` algorithm, document order).
- Sticky offset below the existing navbar: `top: 104px`; headings get `scroll-margin-top: 104px`.
- No new runtime deps beyond `rehype-slug` + `github-slugger`.
- Dev server runs on port 3001 (`next dev -p 3001`).

---

## File Structure

| File | Responsibility | Task |
|---|---|---|
| `package.json` | add `rehype-slug`, `github-slugger` deps | 1 |
| `src/lib/toc.ts` | `extractToc(source) → {id,text}[]` | 1 |
| `playwright.config.ts` | test runner config (testDir + webServer) | 1 |
| `tests/toc.spec.ts` | unit tests for `extractToc` | 1 |
| `src/components/article/TableOfContents.tsx` | client TOC + scrollspy | 2 |
| `src/app/resources/[slug]/page.tsx` | rehype-slug, return source, compute toc, 2-col layout | 3 |
| `src/app/globals.css` | grid, sticky, active, scroll-margin, responsive | 4 |
| `tests/article-toc.spec.ts` | browser tests (links resolve, sticky, scrollspy, mobile hidden) | 5 |

---

## Task 1: `extractToc` + deps + unit tests

**Files:**
- Modify: `package.json` (deps)
- Create: `src/lib/toc.ts`
- Create: `playwright.config.ts`
- Create: `tests/toc.spec.ts`

**Interfaces:**
- Produces: `export type TocItem = { id: string; text: string }` and `export function extractToc(source: string): TocItem[]`.

- [ ] **Step 1: Install dependencies**

Run:
```bash
npm install rehype-slug github-slugger
```
Expected: both added to `dependencies`; lockfile updated.

- [ ] **Step 2: Create `playwright.config.ts`**

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3001',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  use: { baseURL: 'http://localhost:3001' },
});
```

- [ ] **Step 3: Write the failing unit tests — `tests/toc.spec.ts`**

```ts
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
```

- [ ] **Step 4: Run the tests to verify they fail**

Run: `npx playwright test tests/toc.spec.ts`
Expected: FAIL — `Cannot find module '../src/lib/toc'`.

- [ ] **Step 5: Implement `src/lib/toc.ts`**

```ts
import GithubSlugger from 'github-slugger';

export type TocItem = { id: string; text: string };

export function extractToc(source: string): TocItem[] {
  // Strip leading YAML frontmatter so its lines are never scanned.
  let body = source;
  if (body.startsWith('---')) {
    const close = body.indexOf('\n---', 3);
    if (close !== -1) {
      const nl = body.indexOf('\n', close + 1);
      body = nl !== -1 ? body.slice(nl + 1) : '';
    }
  }

  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;

  for (const line of body.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    // exactly H2: two hashes then whitespace (## foo). Excludes # and ###+.
    const m = line.match(/^##\s+(.+?)\s*#*\s*$/);
    if (m) {
      const text = m[1].trim();
      items.push({ id: slugger.slug(text), text });
    }
  }
  return items;
}
```

- [ ] **Step 6: Run the tests to verify they pass**

Run: `npx playwright test tests/toc.spec.ts`
Expected: 4 passed.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json src/lib/toc.ts playwright.config.ts tests/toc.spec.ts
git commit -m "feat(toc): extractToc + deps + unit tests"
```

---

## Task 2: `TableOfContents` client component

**Files:**
- Create: `src/components/article/TableOfContents.tsx`

**Interfaces:**
- Consumes: `TocItem[]` (shape `{ id: string; text: string }`) from Task 1.
- Produces: `export function TableOfContents({ items }: { items: { id: string; text: string }[] }): React.ReactElement | null`.

- [ ] **Step 1: Create the component**

```tsx
'use client';
import { useEffect, useState } from 'react';

type TocItem = { id: string; text: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!items.length || !('IntersectionObserver' in window)) return;
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 }
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [items]);

  if (!items.length) return null;

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
    setActiveId(id);
  };

  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc-label">On this page</p>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={i.id === activeId ? 'is-active' : undefined}
              aria-current={i.id === activeId ? 'location' : undefined}
              onClick={(e) => onClick(e, i.id)}
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 2: Verify it type-checks**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/article/TableOfContents.tsx
git commit -m "feat(toc): TableOfContents client component with scrollspy"
```

---

## Task 3: Wire into the article template

**Files:**
- Modify: `src/app/resources/[slug]/page.tsx`

**Interfaces:**
- Consumes: `extractToc` (Task 1), `TableOfContents` (Task 2).
- `getArticle` now also returns `source` (the raw MDX string).

- [ ] **Step 1: Add imports** (top of file, with the other imports)

```ts
import rehypeSlug from 'rehype-slug';
import { extractToc } from '@/lib/toc';
import { TableOfContents } from '@/components/article/TableOfContents';
```

- [ ] **Step 2: Make `getArticle` return the raw source and add rehype-slug**

Replace the `compileMDX` call and return inside `getArticle`:
```ts
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true, mdxOptions: { rehypePlugins: [rehypeSlug] } },
  });
  return { content, frontmatter, source };
```

- [ ] **Step 3: Compute the TOC in the page component**

After `const fm = article.frontmatter;`, add:
```ts
  const toc = extractToc(article.source);
```

- [ ] **Step 4: Restructure the layout to two columns**

Replace the existing `<div className="wrap article-wrap"> … </div>` block with:
```tsx
          <div className="wrap article-layout">
            <TableOfContents items={toc} />
            <div className="article-main">
              <p className="crumb reveal">
                <Link href="/">Home</Link> / <Link href="/resources">Resources</Link> / <span>{fm.category}</span>
              </p>
              <span className="post-cat reveal">{fm.category}</span>
              <h1 className="article-title reveal" data-d="1">{fm.title}</h1>
              <p className="post-meta reveal" data-d="2">{fm.readTime} &middot; {fm.author}</p>
              {fm.image && (
                <img className="article-hero reveal" data-d="2" src={fm.image} alt={fm.imageAlt || fm.title} width={1672} height={941} />
              )}
              <div className="article-body">{article.content}</div>
              <hr className="hairline" style={{ margin: '44px 0 26px' }} />
              <Link className="btn btn--ghost" href="/resources">&larr; All resources</Link>
            </div>
          </div>
```

- [ ] **Step 5: Verify build + that IDs and the TOC nav render**

Run:
```bash
npm run build && (npm run dev >/tmp/toc-dev.log 2>&1 &) ; sleep 9
curl -s http://localhost:3001/resources/monitoring-privacy-line | grep -c '<nav class="toc"'
curl -s http://localhost:3001/resources/monitoring-privacy-line | grep -oE '<h2 id="[^"]+"' | head -3
```
Expected: build succeeds; first `curl` prints `1` (TOC nav present); second prints `<h2 id="…">` lines (headings now have ids).

- [ ] **Step 6: Commit**

```bash
git add "src/app/resources/[slug]/page.tsx"
git commit -m "feat(toc): render sticky TOC beside article, add heading ids"
```

---

## Task 4: Layout + sticky CSS

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Styles the classes emitted by Tasks 2–3: `.article-layout`, `.article-main`, `.toc`, `.toc-label`, `.toc a`, `.toc a.is-active`.

- [ ] **Step 1: Append the TOC styles**

Add near the article styles (after the `/* article (resources/[slug]) */` section):
```css
/* article table of contents */
.article-layout { display: grid; grid-template-columns: minmax(0, 1fr); }
.article-main { min-width: 0; }
.toc { display: none; }
.article-body h2 { scroll-margin-top: 104px; }

@media (min-width: 1024px) {
  .article-layout {
    grid-template-columns: 240px minmax(0, 760px);
    gap: 48px;
    justify-content: center;
    align-items: start;
  }
  .toc {
    display: block;
    position: sticky;
    top: 104px;
    align-self: start;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
  }
  .toc-label {
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--text-muted, rgba(255,255,255,.5));
    margin-bottom: 12px;
  }
  .toc ul { list-style: none; margin: 0; padding: 0; }
  .toc li { margin: 0 0 6px; }
  .toc a {
    display: block;
    font-size: 14px;
    line-height: 1.4;
    padding: 4px 0 4px 12px;
    border-left: 2px solid transparent;
    color: var(--text-secondary, rgba(255,255,255,.7));
    text-decoration: none;
    transition: color .15s, border-color .15s;
  }
  .toc a:hover { color: var(--text, #fff); }
  .toc a.is-active {
    color: var(--accent, #4CD964);
    border-left-color: var(--accent, #4CD964);
    font-weight: 600;
  }
}
```

> Note: if the existing article layout already centered `.article-wrap` at a specific max-width, this keeps the article column at 760px to match. Adjust the `760px` if the current article measure differs — check `.article-wrap` in `globals.css` first and match it.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style(toc): sticky sidebar layout, active state, responsive hide"
```

---

## Task 5: Browser verification

**Files:**
- Create: `tests/article-toc.spec.ts`

**Interfaces:**
- Consumes the running site (webServer from `playwright.config.ts`, Task 1).

- [ ] **Step 1: Write the browser tests**

```ts
import { test, expect } from '@playwright/test';

const ARTICLE = '/resources/monitoring-privacy-line';

test('every TOC link points at a real heading id', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(ARTICLE);
  const hrefs = await page.locator('.toc a').evaluateAll((as) =>
    as.map((a) => (a as HTMLAnchorElement).getAttribute('href')!)
  );
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) {
    const id = href.replace(/^#/, '');
    await expect(page.locator(`#${CSS.escape(id)}`)).toHaveCount(1);
  }
});

test('TOC is sticky and visible on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(ARTICLE);
  const toc = page.locator('.toc');
  await expect(toc).toBeVisible();
  await expect(toc).toHaveCSS('position', 'sticky');
});

test('scrollspy highlights the section in view', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(ARTICLE);
  const third = page.locator('.article-body h2').nth(2);
  const id = await third.getAttribute('id');
  await third.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await expect(page.locator(`.toc a[href="#${id}"]`)).toHaveClass(/is-active/);
});

test('TOC is hidden on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(ARTICLE);
  await expect(page.locator('.toc')).toBeHidden();
});
```

- [ ] **Step 2: Run the browser tests**

Run: `npx playwright test tests/article-toc.spec.ts`
Expected: 4 passed (webServer boots the dev server automatically).

- [ ] **Step 3: Full build sanity**

Run: `npm run build`
Expected: succeeds; all `/resources/[slug]` routes prerender.

- [ ] **Step 4: Commit**

```bash
git add tests/article-toc.spec.ts
git commit -m "test(toc): browser tests for links, sticky, scrollspy, mobile"
```

---

## Self-Review Notes

- **Spec coverage:** extractToc+deps (T1), component+scrollspy (T2), template/rehype-slug/layout (T3), CSS/sticky/responsive/scroll-margin (T4), all spec test cases (T5). ✅
- **Type consistency:** `TocItem {id,text}` identical across `toc.ts`, `TableOfContents`, and the page. `extractToc(source)` and `getArticle` returning `source` line up. ✅
- **No placeholders:** every step has concrete code/commands + expected output. ✅
- **Slug-match invariant** (the one real risk) is guarded two ways: same `github-slugger` in `extractToc`, `rehype-slug` on render, and T5's "every TOC link points at a real heading id" test fails loudly if they ever diverge.
- **Ordering:** T1→T2→T3→T4→T5. T3 depends on T1+T2; T5 depends on all. CSS (T4) before browser tests (T5) so sticky/hidden assertions hold.
