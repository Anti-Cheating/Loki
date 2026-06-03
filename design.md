# Trueyy — Design System

Landing site for the Trueyy interview integrity platform. Next.js 16 App Router, Tailwind v4 (Preflight only), custom CSS design system via oklch tokens.

---

## Dev server

```
npm run dev   →  http://localhost:3001
npm run build
npm start
```

---

## Color tokens

Defined in `src/app/globals.css` as CSS custom properties on `:root`.

| Token | Value | Use |
|---|---|---|
| `--bg` | `oklch(0.15 0.012 158)` | Page background |
| `--bg-2` | `oklch(0.18 0.014 158)` | Footer, secondary surfaces |
| `--surface` | `oklch(0.205 0.016 158)` | Cards, panels |
| `--surface-2` | `oklch(0.235 0.018 158)` | Elevated cards |
| `--line` | `oklch(0.30 0.020 158)` | Strong borders |
| `--line-soft` | `oklch(0.26 0.016 158)` | Subtle dividers |
| `--green` | `oklch(0.84 0.19 150)` | Brand accent, CTAs, signals |
| `--green-dim` | `oklch(0.74 0.16 150)` | Muted green states |
| `--green-deep` | `oklch(0.45 0.12 150)` | Hover border color |
| `--green-glow` | `oklch(0.84 0.19 150 / 0.18)` | Glow shadows |
| `--flag` | `oklch(0.68 0.20 28)` | Risk / flagged state |
| `--amber` | `oklch(0.82 0.15 78)` | Warning / medium risk |
| `--text` | `oklch(0.97 0.008 158)` | Primary text |
| `--text-mut` | `oklch(0.74 0.014 158)` | Muted text |
| `--text-dim` | `oklch(0.60 0.014 158)` | Dimmed / metadata |

---

## Typography

Three fonts loaded from Google Fonts via `layout.tsx`.

| Variable | Font | Use |
|---|---|---|
| `--font-display` | Space Grotesk | Headings, brand, kickers, buttons |
| `--font-body` | Hanken Grotesk | Body text, paragraphs |
| `--font-mono` | JetBrains Mono | Labels, timestamps, nav links, code |

### Type scale

| Class | Size | Notes |
|---|---|---|
| `.display` | `clamp(2.6rem, 6.2vw, 5.1rem)` | Hero H1 only |
| `.h2` | `clamp(2rem, 3.6vw, 3.1rem)` | Section headings |
| `.lead` | `clamp(1.05rem, 1.5vw, 1.28rem)` | Section subheads, max 60ch |
| `.kicker` | `0.78rem` mono, 0.16em tracking, uppercase | Section labels |
| body | `17px` | Base, 1.6 line-height |

All headings: `text-wrap: balance`, `letter-spacing: -0.02em`.

---

## Easing

```css
--ease: cubic-bezier(0.22, 1, 0.36, 1)
```

Used throughout for enters (ease-out feel). Exit animations should be faster — override with shorter duration, same curve.

---

## Layout

```css
--maxw: 1200px   /* .wrap max-width */
--radius: 14px   /* card radius */
--radius-sm: 9px /* input, small card radius */
```

`.section` padding: `104px 0` (desktop), `76px 0` (≤820px).

Breakpoints: `1000px` (two-column collapses), `820px` (single column, mobile nav), `520px` (footer reflow).

---

## Components

### `.card`

```css
background: var(--surface);
border: 1px solid var(--line-soft);
border-radius: var(--radius);
padding: 28px;
overflow: hidden;   /* needed for ::before top-edge highlight */
```

**Top-edge highlight** (`::before`): 1px gradient line at the top, hidden at rest, opacity 1 on hover. Signals the card is interactive without relying on color alone.

**Hover state**: `translateY(-4px)`, green border tint, `box-shadow: 0 20px 60px -20px oklch(0.84 0.19 150 / 0.12)`.

**`.card--featured`**: Green-tinted background gradient + persistent top-edge highlight. Used for the AI fingerprinting bento card.

### `.btn`

Font: Space Grotesk mono. `min-height: 44px`. `touch-action: manipulation`.

Active state: `scale(0.97)` at 100ms — tactile press feedback.

| Variant | Style |
|---|---|
| `.btn--primary` | Green fill, dark text, hover lifts with glow shadow |
| `.btn--ghost` | Transparent, border, hover turns green + subtle tint |
| `.btn--lg` | `17px 28px` padding, `1rem` font |

### `.badge-trust`

Small pill badge with a green dot indicator. Used in hero and feature cards for GDPR, SOC 2, tool names, etc.

```html
<span class="badge-trust"><span class="bt-dot"></span> GDPR ready</span>
```

### `.kicker`

Mono label with a glowing green square before it. `.kicker--center` centers it.

### `.reveal`

Scroll-reveal animation: `opacity: 0 → 1`, `translateY(22px → 0)`, 700ms ease-out. Triggered by `IntersectionObserver` in `PageContent.tsx`. Stagger via `data-d="1|2|3|4"` (80ms increments).

Respects `prefers-reduced-motion` — reveals are instant when motion is reduced.

---

## Section-specific layouts

### Hero

`padding: 168px 0 96px`. p5.js canvas behind copy (CDN-loaded, instance mode). Canvas has signal nodes, red flag pulses, and a scan sweep.

Trust badges row below hero-meta: GDPR, SOC 2, No video stored, Consent-first.

Headline accent uses `.tx-gradient` (multi-stop green gradient, `-webkit-text-fill-color: transparent`).

### Features — bento grid (`.det-bento`)

3-column grid, two special slots:
- **AI fingerprinting card** (`bento-tall`, `card--featured`): spans 2 rows. Shows named tool badges (ChatGPT, Claude, Gemini, Cluely, InterviewCoder).
- **Answer structure card** (`bento-wide`): spans 2 columns.
- **Link card** (`.det-cta-card`): takes the remaining 1-column slot, links to `#command`.

Responsive: collapses to 2-col at 1000px (tall → normal height), 1-col at 820px.

### Command center

Two-column grid: copy left (`cc-copy`), live panel right (`cc-panel`). Panel has a live clock (counting up via `setInterval`), integrity ring (conic-gradient), and a color-coded signal feed (`ok` / `warn` / `flag`).

### Comparison table (`.cmp`)

3-column: Feature | Traditional proctoring | Trueyy.

Trueyy column has a green `border-top: 2px solid var(--green)` on the header cell and a tinted background — visual hierarchy cue that this is the recommended option.

### Waitlist form (`.form-card`)

Input `min-height: 44px`. Focus state: green border + `box-shadow: 0 0 0 3px oklch(0.84 0.19 150 / 0.12)`.

### CTA band

Full-width border-radius band. Top-edge gradient line (brighter than cards). Large glow blob (700×400px) centered above. `border-color: oklch(0.84 0.19 150 / 0.25)`.

---

## Accessibility

- **Skip link**: `.skip-link` fixed top-left, visible only on `:focus`. Target: `#main-content` on `<main>`.
- **Focus rings**: `:focus-visible` global — 2px green outline, 3px offset. Overridden to `border-radius: 7px` on buttons/links.
- **Motion**: `prefers-reduced-motion: reduce` disables all animations and transitions globally.
- **Kicker dots**: decorative, `aria-hidden` not needed (they're `::before` pseudo-elements).
- **Canvas**: `aria-hidden="true"` on `#hero-canvas`.
- **Nav toggle**: `aria-label="Toggle menu"` on the hamburger button.
- **Command center panel**: `role="img" aria-label="Trueyy live monitoring dashboard"`.

---

## SEO / AEO

- Metadata in `src/app/layout.tsx`: title template, description, keywords, OG, Twitter card.
- JSON-LD: `Organization`, `SoftwareApplication`, `HowTo` (4 steps), `FAQPage` (8 Q&A).
- `public/llms.txt`: llmstxt.org spec index with key facts for LLMs.
- `src/app/llms-full.txt/route.ts`: dynamic route returning full prose as `text/plain`.
- `public/sitemap.xml` and `public/robots.txt` via Next.js route handlers.

---

## File map

```
src/
  app/
    globals.css          — full design system (tokens, layout, components, sections)
    layout.tsx           — Metadata, JSON-LD, Google Fonts
    page.tsx             — renders <PageContent />
    llms-full.txt/
      route.ts           — dynamic prose dump for LLMs
  components/
    PageContent.tsx      — scroll reveal init, section order
    layout/
      Navbar.tsx         — fixed header, scroll state, mobile nav, skip link
      Footer.tsx         — 4-col grid, traffic-light dots
    sections/
      Hero.tsx           — p5.js canvas, gradient headline, trust badges
      Marquee.tsx        — infinite scroll of platform names with dot separators
      Problem.tsx        — count-up stats (IntersectionObserver)
      HowItWorks.tsx     — 4-step cards
      Features.tsx       — bento grid with tall + wide + CTA cards
      DashboardPreview.tsx — live clock, integrity ring, signal feed
      Comparison.tsx     — 9-row capability table
      Security.tsx       — 6-card grid (2 rows of 3)
      Waitlist.tsx       — form with success/error states
      FAQ.tsx            — accordion (9 items), CSS max-height transition
      CTA.tsx            — closing band
public/
  llms.txt              — llmstxt.org spec index
```
