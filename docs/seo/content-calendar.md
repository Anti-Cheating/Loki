# Trueyy Content Calendar — 8 Weeks (Jul 14 – Sep 3, 2026)

Companion to [`keyword-map.md`](./keyword-map.md). This is the publish schedule and the
per-article brief each post is built from. Every entry is written to be handed
directly to a deep-research agent (`/deep-research`) that produces the draft `.mdx`.

## Cadence & rules
- **2 articles/week**, published **Tuesday & Thursday**.
- Each new article is a `.mdx` file in `src/content/resources/` — it auto-flows into
  the sitemap, `/resources` index, and `BlogPosting` schema (pipeline already built).
- **Word count:** supporting articles 1,500+; pillar pages 2,500+.
- **Every article must include:** 2+ cited external stats (real, linked sources);
  an FAQ section (3–5 Q&As); internal links to `/demo` + at least one `/features`
  anchor + one sibling article in its cluster; a closing CTA to `/demo`.
- **No cannibalization:** these 16 topics are distinct from the 7 existing posts.
  Where a new post is adjacent to an existing one, it **links** to it, never repeats it.
- **Slug = filename** (kebab-case, no `.mdx` in links).
- Front-loaded: highest-intent, most-winnable terms (tool detection + "vs") ship first;
  the Cluster B pillar ships Week 1 so later posts can link up to it.

## Clusters (see keyword-map.md for the full target-query map)
- **A — "Detect <tool>"** — bottom-funnel, highest intent, lowest competition.
- **B — Interview-integrity guides** — mid-funnel; anchored by a pillar page.
- **C — "vs / alternatives"** — commercial intent, comparison shoppers.

---

## The schedule

| # | Date | Day | Cluster | Working title (H1) | Slug | Primary target query |
|---|------|-----|---------|--------------------|------|----------------------|
| 1 | Jul 14 | Tue | A | How to detect Cluely in interviews | `detect-cluely-interviews` | how to detect Cluely in interviews |
| 2 | Jul 16 | Thu | **B — PILLAR** | The complete guide to remote interview integrity (2026) | `remote-interview-integrity-guide` | remote interview integrity |
| 3 | Jul 21 | Tue | A | Interview Coder detection: a hiring team's guide | `detect-interview-coder` | interview coder detection |
| 4 | Jul 23 | Thu | C | Trueyy vs Proctorio: which fits live interviews? | `trueyy-vs-proctorio` | trueyy vs proctorio / proctorio for interviews |
| 5 | Jul 28 | Tue | A | How to detect AI meeting assistants & note-takers in interviews | `detect-ai-meeting-assistants` | detect ai note taker in interview |
| 6 | Jul 30 | Thu | C | The best AI interview cheating detection tools (2026) | `best-ai-cheating-detection-tools` | best ai interview cheating detection tools |
| 7 | Aug 4 | Tue | A | How to detect AI use in coding & technical interviews | `detect-ai-coding-interviews` | detect ai in coding interview |
| 8 | Aug 6 | Thu | B | How to stop cheating in remote interviews | `stop-cheating-remote-interviews` | how to stop cheating in remote interviews |
| 9 | Aug 11 | Tue | C | Trueyy vs HackerRank proctoring | `trueyy-vs-hackerrank` | hackerrank proctoring alternative |
| 10 | Aug 13 | Thu | B | Interview cheating red flags: the signals to watch for | `interview-cheating-red-flags` | interview cheating red flags |
| 11 | Aug 18 | Tue | A | How to detect screen-sharing & remote-access tools in interviews | `detect-remote-access-tools` | detect remote access in interview |
| 12 | Aug 20 | Thu | C | Live-interview proctoring alternatives | `live-interview-proctoring-alternatives` | interview proctoring alternatives |
| 13 | Aug 25 | Tue | B | What to do when you suspect a candidate is using AI | `suspect-candidate-using-ai` | candidate using ai in interview what to do |
| 14 | Aug 27 | Thu | B | How to write an AI-use policy for your interviews (+ template) | `ai-use-policy-interviews` | interview ai use policy |
| 15 | Sep 1 | Tue | B | AI in hiring: what candidates can fairly use vs what crosses the line | `ai-in-hiring-fair-use` | is it cheating to use ai in an interview |
| 16 | Sep 3 | Thu | B | Remote vs onsite interviews: where cheating actually happens | `remote-vs-onsite-cheating` | remote vs onsite interview cheating |

---

## Per-article briefs (deep-research handoff)

> Hand one block at a time to `/deep-research`. Each block is self-contained. The agent
> returns a drafted article body; a human adds frontmatter + does a final edit pass.

### 1. `detect-cluely-interviews` — How to detect Cluely in interviews
- **Intent:** informational→commercial. Cornerstone of Cluster A.
- **Cover:** what Cluely is (undetectable AI meeting overlay, a16z-funded); why it evades
  screen-share/recording; concrete signals it leaves (answer latency + structure, gaze
  off-camera, paste cadence, audio/desktop artifacts); a step-by-step detection checklist;
  where automated integrity monitoring fits.
- **Cited stats:** Cluely funding; % of candidates using real-time AI in interviews.
- **Links:** → `/features`, → `/demo`, → article #2 (pillar), → existing `spot-ai-assisted-answers`.
- **1,600 words.**

### 2. `remote-interview-integrity-guide` — The complete guide to remote interview integrity (PILLAR)
- **Intent:** informational. Cluster B hub — the page other B posts link up to.
- **Cover:** define interview integrity in the AI era; the threat landscape (tools,
  prevalence); a framework (deter → detect → decide) with a human in the loop;
  fairness & candidate experience; legal/consent basics (link out, don't duplicate the
  GDPR post); how to choose tooling. Include a table of contents.
- **Cited stats:** 2+ prevalence/trust stats (Resume Genius 2026, Checkr/Greenhouse surveys).
- **Links:** → every Cluster A & C article as they publish (update this page monthly),
  → `/features`, → `/how-it-works`, → `/demo`.
- **2,600 words.** Mark as the featured resource once live.

### 3. `detect-interview-coder` — Interview Coder detection: a hiring team's guide
- **Intent:** commercial. Cover what Interview Coder is (invisible coding-interview
  assistant), what it targets (LeetCode-style rounds), detection signals specific to
  coding interviews (paste velocity, solution "shape", tab/app focus), and mitigation.
- **Cited stats:** coding-interview cheating prevalence; tool adoption.
- **Links:** → article #7 (coding interviews), → `/features`, → `/demo`.
- **1,600 words.**

### 4. `trueyy-vs-proctorio` — Trueyy vs Proctorio: which fits live interviews?
- **Intent:** commercial comparison. Frame honestly: Proctorio = exam/test lockdown;
  Trueyy = live two-way interviews. Comparison table (reuse the `/comparison` capability
  rows). Say plainly which tool wins for which job. No strawman.
- **Cited stats:** at least one on exam-proctoring limitations for live interviews.
- **Links:** → `/comparison`, → `/features`, → `/demo`, → article #6.
- **1,500 words.**

### 5. `detect-ai-meeting-assistants` — Detecting AI meeting assistants & note-takers
- **Intent:** informational. Otter, Read AI, Fireflies, Cluely-style overlays that join
  or listen to calls. How they appear (bots in the participant list, desktop audio
  capture, second-device listening), and how to spot/handle them.
- **Links:** → article #1, → `/features`, → `/demo`.
- **1,500 words.**

### 6. `best-ai-cheating-detection-tools` — Best AI interview cheating detection tools (2026)
- **Intent:** commercial listicle (high volume). Neutral roundup of the category
  (Trueyy + honest mention of proctoring tools, code-plagiarism checkers, live-monitoring
  options), with a selection-criteria section. Position Trueyy for the live-interview use
  case without trashing others.
- **Links:** → `/comparison`, → articles #4 & #9, → `/demo`.
- **1,800 words.**

### 7. `detect-ai-coding-interviews` — Detecting AI use in coding & technical interviews
- **Intent:** informational. Copilot, Cursor, ChatGPT, Interview Coder in technical
  rounds; signals (impossible velocity, idiomatic-but-inconsistent code, narration gaps);
  interview-design tactics that make cheating harder.
- **Links:** → article #3, → `/features`, → `/demo`.
- **1,600 words.**

### 8. `stop-cheating-remote-interviews` — How to stop cheating in remote interviews
- **Intent:** informational (broad). Practical playbook: process design + tooling + human
  judgment. Links up to the pillar (#2).
- **Links:** → article #2, → `/features`, → `/demo`.
- **1,600 words.**

### 9. `trueyy-vs-hackerrank` — Trueyy vs HackerRank proctoring
- **Intent:** commercial comparison. HackerRank = assessment platform w/ proctoring;
  Trueyy = live interview integrity. Where each fits; comparison table. Honest.
- **Links:** → `/comparison`, → article #6, → `/demo`.
- **1,500 words.**

### 10. `interview-cheating-red-flags` — Interview cheating red flags
- **Intent:** informational (broad, shareable). A scannable list of behavioral + technical
  red flags, each with "what it might mean / what it doesn't." Explicitly caution against
  false positives (protects honest candidates — on-brand).
- **Links:** → article #13, → `/features`, → `/demo`.
- **1,500 words.**

### 11. `detect-remote-access-tools` — Detecting screen-sharing & remote-access tools
- **Intent:** informational. TeamViewer/AnyDesk/parsec-style remote help, second devices,
  virtual cameras. Signals and handling.
- **Links:** → article #1, → `/features`, → `/demo`.
- **1,500 words.**

### 12. `live-interview-proctoring-alternatives` — Live-interview proctoring alternatives
- **Intent:** commercial. For teams who tried exam proctoring and found it wrong for
  interviews. Category overview + criteria + where Trueyy fits.
- **Links:** → `/comparison`, → articles #4 & #9, → `/demo`.
- **1,600 words.**

### 13. `suspect-candidate-using-ai` — What to do when you suspect a candidate is using AI
- **Intent:** informational (practical). A calm, fair decision playbook: verify before
  accusing, follow-up question techniques, how to use an integrity timeline, when to
  advance vs re-interview. Ties to `reading-integrity-timeline` (existing).
- **Links:** → existing `reading-integrity-timeline`, → article #10, → `/demo`.
- **1,600 words.**

### 14. `ai-use-policy-interviews` — How to write an AI-use policy for your interviews (+ template)
- **Intent:** informational + link bait (copy-paste template earns links/bookmarks).
  What to allow/disallow, how to disclose to candidates, consent, enforcement.
- **Links:** → existing `monitoring-privacy-line` (GDPR), → article #2, → `/demo`.
- **1,700 words.**

### 15. `ai-in-hiring-fair-use` — What candidates can fairly use vs what crosses the line
- **Intent:** informational (nuanced/opinion, brand-building). Where's the line: AI for
  prep/résumé vs live in-interview feeding. Balanced, candidate-respecting.
- **Links:** → existing `honor-system-broken`, → article #2, → `/demo`.
- **1,500 words.**

### 16. `remote-vs-onsite-cheating` — Remote vs onsite: where cheating actually happens
- **Intent:** informational. Data-driven comparison; debunks "just go onsite" as a fix.
- **Cited stats:** remote-vs-onsite fraud/cheating data.
- **Links:** → article #2, → `/features`, → `/demo`.
- **1,500 words.**

---

## Refresh the 7 existing posts (in parallel, ~1/week, no calendar slot)
Light optimization passes — add internal links to the new cluster articles, refresh stats,
tighten titles/meta. Priority order:
1. `spot-ai-assisted-answers` (featured) → link to #1, #5, #7, #11.
2. `why-cheating-surged` → refresh with 2026 data; becomes a stats reference for #16.
3. `fair-interview-process` → link to pillar #2 and #14.
4. `monitoring-privacy-line` → link from #14 (policy) and pillar.
5. `reading-integrity-timeline` → link from #13.
6. `protecting-agency-reputation`, `honor-system-broken` → interlink to pillar + #15.

## Monthly maintenance
- Update the **pillar (#2)** with links to every new cluster article as it ships.
- Re-check **Search Console** queries: any phrase getting impressions but ranking 8–20 →
  promote to its own article or strengthen the existing one. Add winners to keyword-map.md.
- Track: published count, indexed count (GSC), impressions, clicks, avg position per cluster.
