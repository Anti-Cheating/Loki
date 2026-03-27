# Loki - Trueyy Marketing Website

The public-facing marketing and landing page for **Trueyy**, an AI-powered interview integrity platform that detects cheating in real-time during remote interviews.

Part of the Trueyy platform:
- **Falcon** — Electron + React desktop client
- **Cortex** — Node.js/Express backend (BullMQ, Prisma, Socket.io,LLM)
- **Sentinel** — Python screen monitor (PyInstaller binary)
- **Loki** — Next.js marketing website _(this repo)_

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | 12 | Scroll animations & transitions |
| Lucide React | 0.577 | Icon library |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
cd Loki
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000) with hot reload.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
Loki/
  src/
    app/
      layout.tsx              # Root layout, metadata, Google Fonts (Inter)
      page.tsx                # Home page entry (dynamic import)
      globals.css             # Tailwind theme, custom animations, grid pattern
    components/
      PageContent.tsx         # Main orchestrator composing all sections
      layout/
        Navbar.tsx            # Sticky nav, blur-on-scroll, mobile hamburger
        Footer.tsx            # 4-column footer with links & social icons
      sections/
        Hero.tsx              # Headline + CTAs + CSS dashboard mockup
        Problem.tsx           # 3 stat cards (cheating epidemic data)
        HowItWorks.tsx        # 4-step flow (Schedule > Join > Monitor > Report)
        Features.tsx          # 8-card grid of detection modalities
        DashboardPreview.tsx  # Full CSS mockup of the analytics panel
        Security.tsx          # Privacy & compliance cards
        Pricing.tsx           # 3-tier pricing (Starter/Professional/Enterprise)
        FAQ.tsx               # 7-item accordion
        CTA.tsx               # Final call-to-action
      ui/
        TruoyyLogo.tsx        # Inline SVG logo component
        AnimatedSection.tsx   # Reusable scroll-reveal wrappers
    hooks/
      useScrollPosition.ts    # Scroll Y tracking for navbar effect
    lib/
      constants.ts            # All static data (nav, features, FAQ, pricing, stats)
  next.config.mjs
  postcss.config.mjs
  tsconfig.json
  package.json
```

---

## Page Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navbar** | Sticky header, transparent on top, backdrop-blur on scroll, mobile menu |
| 2 | **Hero** | "Interview Intelligence That Catches What You Can't" + dashboard visual |
| 3 | **Problem** | Stats: 67% use AI tools, 3x fraud increase, 89% undetectable |
| 4 | **How It Works** | 4 steps: Schedule, Join, Monitor, Report |
| 5 | **Features** | 8 detection modalities (AI tools, keystrokes, voice, apps, risk scoring, transcript, clipboard, screenshots) |
| 6 | **Dashboard Preview** | CSS-only mockup of the real analytics panel with scores, modality bars, alerts |
| 7 | **Security** | Transparent monitoring, encryption, compliance |
| 8 | **Pricing** | Starter $99/mo, Professional $299/mo, Enterprise custom |
| 9 | **FAQ** | 7 questions with animated accordion |
| 10 | **CTA** | "Ready to Trust Your Interviews Again?" |
| 11 | **Footer** | Product, Company, Legal links + social icons |

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#0B1A10` | Page background |
| Surface | `#122318` | Cards, sections |
| Surface Alt | `#0D1F13` | Alternating section backgrounds |
| Accent | `#4CD964` | CTAs, highlights, brand green |
| Accent Hover | `#3CB853` | Button hover state |
| Text | `#FFFFFF` | Headings |
| Text Secondary | `#E5E7EB` | Body text |
| Text Muted | `rgba(255,255,255,0.5)` | Captions, labels |
| Border | `rgba(76,217,100,0.12)` | Subtle card borders |

### Typography

- **Font**: Inter (Google Fonts) — weights 400-900
- **Responsive sizing**: Mobile-first with `sm`, `md`, `lg`, `xl` breakpoints

### Animations

- **Scroll-reveal**: Fade-in-up on viewport entry via Framer Motion `whileInView`
- **Stagger**: Cascading card entrance (0.1s delay per item)
- **Glow**: Pulsing green glow on featured elements
- **Float**: Subtle Y-axis float on dashboard mockup
- **Pulse dot**: Status indicator animation

---

## Content Management

All static content is centralized in `src/lib/constants.ts`:

- `NAV_LINKS` — Navigation items
- `FEATURES` — 8 detection modalities with icons & descriptions
- `STEPS` — How It Works flow
- `STATS` — Problem section statistics
- `PRICING` — 3 pricing tiers with features
- `FAQ_ITEMS` — 7 questions and answers
- `SECURITY_FEATURES` — Privacy & compliance cards

To update any content, edit this single file.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Auto-detects Next.js — zero config needed
4. No environment variables required (static site)

### Other Platforms

Any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Docker (`npm run build && npm start`)

---

## Key Architecture Decisions

| Decision | Reason |
|---|---|
| `ssr: false` dynamic import | Avoids Framer Motion + Node.js localStorage SSR conflict |
| Next.js 14 (not 15) | Stable with Node.js 25, avoids SSR localStorage bug |
| Single constants file | Easy content updates without touching components |
| CSS-only dashboard mockup | No images needed, scales perfectly, matches real app design |
| Google Fonts via `<link>` | Avoids `next/font` SSR issues in sandboxed environments |
| Tailwind v4 `@theme` | Custom CSS variables for the dark green palette |

---

## Scripts

| Script | Command | Description |
|---|---|---|
| Dev | `npm run dev` | Start dev server on port 3000 |
| Build | `npm run build` | Production build |
| Start | `npm start` | Run production server |
| Lint | `npm run lint` | ESLint check |

---

## Related Repositories

| Repo | Purpose |
|---|---|
| [Falcon](https://github.com/Anti-Cheating/Falcon) | Electron desktop client |
| [Cortex](https://github.com/Anti-Cheating/Cortex) | Node.js backend API |
| [Sentinel](https://github.com/Anti-Cheating/Sentinel) | Python screen monitor |
