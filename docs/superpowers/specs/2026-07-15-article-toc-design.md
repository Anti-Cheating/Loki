# Sticky Table of Contents for Resource Articles — Design

**Date:** 2026-07-15
**Status:** Approved (design)

## Goal

Add a table of contents to every resource article (`/resources/[slug]`): a sidebar on the **left**, **sticky** so it stays in view while scrolling, that lists the article's sections and lets the reader **jump to any section at any time**. It **tracks scroll position** — the current section is highlighted as you read.

## Decisions (locked)

- **Depth:** H2 headings only.
- **Mobile:** hidden below the `lg` breakpoint; article renders full-width. Sidebar shows on wide (desktop) screens only.
- **Scope:** the shared article template, so all resource articles (7 existing + 16 blog) get it at once.
- **Placement:** left column; article to its right.

## Approach

Anchors come from `rehype-slug` (auto-adds GitHub-style `id`s to headings during MDX compile). The TOC list is extracted server-side from the raw MDX source and slugged with `github-slugger` — the **same** algorithm `rehype-slug` uses — so every TOC link target matches its heading `id` exactly, including duplicate-heading disambiguation (`-1`, `-2`).

Rejected alternative: hand-rolled regex IDs applied to both the list and the headings. Risks slug drift between the two and re-implements slugging badly. Not worth it.

## Units

### 1. `src/lib/toc.ts` (new)
```ts
export type TocItem = { id: string; text: string };
export function extractToc(source: string): TocItem[];
```
- Strips MDX frontmatter (the leading `---\n…\n---` block) before scanning.
- Scans line-by-line for H2 headings (`^## ` — exactly two hashes, not `#`/`###`).
- **Skips fenced code blocks**: toggles an `inFence` flag on lines matching ` ``` ` or `~~~` so a `## ` inside a code sample (e.g. the policy-template article) is not treated as a heading.
- Slugs each heading text with a single `GithubSlugger` instance reused across the document (so ordering + duplicate suffixes match `rehype-slug`, which also processes headings in document order).
- Heading text is the raw markdown after `## ` with trailing `#`s and whitespace trimmed; inline markdown (e.g. `` `code` ``, `**bold**`) is left as-is for slugging but the displayed `text` keeps the raw string (articles use plain-text H2s, so this is not a concern in practice).
- Returns `[]` when there are no H2s.

### 2. MDX compile — `src/app/resources/[slug]/page.tsx`
Add `rehype-slug` to the existing `compileMDX` call so rendered `<h2>` elements get `id`s:
```ts
import rehypeSlug from 'rehype-slug';
// …
const { content, frontmatter } = await compileMDX<Frontmatter>({
  source,
  options: { parseFrontmatter: true, mdxOptions: { rehypePlugins: [rehypeSlug] } },
});
```

### 3. `src/components/article/TableOfContents.tsx` (new, client component)
```tsx
'use client';
export function TableOfContents({ items }: { items: { id: string; text: string }[] }): JSX.Element | null;
```
- Returns `null` if `items.length === 0`.
- Renders `<nav className="toc" aria-label="Table of contents">` with a heading label ("On this page") and a `<ul>` of `<a href={'#' + id}>`.
- **Scrollspy:** a single `IntersectionObserver` observes each `#id` heading element; the active item is the last heading whose top has scrolled above a line near the top of the viewport (`rootMargin: '0px 0px -70% 0px'`, so a section becomes active once its heading is in the top ~30% of the viewport). Active `id` held in `useState`; the matching `<a>` gets `aria-current="location"` and a `.is-active` class.
- **Click:** default anchor jump is fine, but add an `onClick` that calls `history.replaceState` + `scrollIntoView({ behavior: 'smooth' })` for smooth scroll without a full hash navigation. Falls back to native anchor if JS is off (links still work — progressive enhancement).
- Observer is created in `useEffect` and disconnected on cleanup. Guarded for `'IntersectionObserver' in window`.

### 4. Template layout — `src/app/resources/[slug]/page.tsx`
- Compute `const toc = extractToc(source)` — requires `getArticle` to also return the raw `source` (add it to the returned object).
- Wrap the existing `.article-wrap` content so the article body sits in a right column and `<TableOfContents items={toc} />` sits in a left column:
```tsx
<div className="wrap article-layout">
  <TableOfContents items={toc} />
  <div className="article-main">
    {/* existing: crumb, category, title, meta, hero, article-body, hr, back link */}
  </div>
</div>
```
- `article-layout` is a CSS grid: `[toc | main]` on `lg+`, single column (TOC hidden) below.

### 5. CSS — `src/app/globals.css`
- `.article-layout`: `display: grid; grid-template-columns: minmax(0, 1fr);` by default (mobile, one column). At `@media (min-width: 1024px)`: `grid-template-columns: 240px minmax(0, 760px); gap: 48px; justify-content: center;`.
- `.toc`: `display: none;` by default; at `lg+` `display: block; position: sticky; top: 104px; align-self: start; max-height: calc(100vh - 140px); overflow-y: auto;`.
- `.toc a`: muted color; `.toc a.is-active`: accent color + subtle left border/weight.
- `.article-body :is(h2)`: `scroll-margin-top: 104px;` so anchored jumps clear the sticky navbar. (Apply to the article headings, matching the sticky `top`.)
- Respect existing tokens/spacing; keep the article max content width consistent with the current `.article-wrap` feel (~760px).

## Data flow

```
mdx source ──> extractToc(source) ──> TocItem[] ──> <TableOfContents items> (client scrollspy)
           └─> compileMDX(+rehype-slug) ──> content with <h2 id="…"> ──> anchors the TOC links point at
```
Both derive slugs from the same `github-slugger` algorithm in document order → IDs always match.

## Edge cases

- **No H2s:** `extractToc` returns `[]`; `TableOfContents` renders `null`; grid still centers the article (the `justify-content: center` + single populated column handles it). Acceptable.
- **`## ` inside a code fence:** skipped by the fence tracker, so it neither appears in the TOC nor (via rehype-slug, which only IDs real headings) causes a mismatch.
- **Duplicate heading text:** single slugger instance → `-1/-2` suffixes match rehype-slug.
- **JS disabled / observer unsupported:** links are plain anchors and still jump; only the active-highlight is lost.
- **Existing articles** (7) — some have few H2s; TOC still works or hides if none.

## Testing

No unit-test runner is configured; verification is build + a Playwright check against the dev server (the project already depends on Playwright, and `chromium` is installed):

1. **Unit-ish (toc extraction):** a one-off Node script imports `extractToc` and asserts the H2 list + slugs for a known article (e.g. `monitoring-privacy-line` → 6 items with expected ids), including a fixture string with a fenced `## ` to prove it's skipped and a duplicate heading to prove `-1` suffixing.
2. **Rendered IDs match:** Playwright loads an article; assert every `toc a[href^="#"]` target resolves to an element with that `id` (no dangling links).
3. **Sticky + scrollspy:** Playwright at a `lg` viewport (e.g. 1280×900); assert `.toc` is visible and `position: sticky`; scroll to the 3rd heading and assert the corresponding `.toc a` gains `.is-active`.
4. **Mobile hidden:** Playwright at 390px width; assert `.toc` is `display: none` and the article is full-width.
5. **Build:** `npm run build` green; all article routes prerender.

## Dependencies

- `rehype-slug` (heading IDs at compile)
- `github-slugger` (matching slugs for the extracted TOC)

Both are small, standard MDX-ecosystem packages. No other runtime additions.

## Out of scope

- `FAQPage` / `BreadcrumbList` structured-data additions (separate follow-up).
- H3 nesting, mobile collapsible TOC, reading-progress bar — not requested (YAGNI).
