# Blog Image Manifest

Checklist for generating the 48 blog images (16 articles × 3 each: 1 hero + 2 inline).
Alt text is **already wired into every article's MDX** (hero via frontmatter `imageAlt`,
inline via markdown) — you only need to generate the image files and drop them in.

## How to use
1. `git checkout blog/NN-<slug>` (blog 01 images are already added).
2. Open `docs/seo/image-prompts/<slug>.md` for the full generation prompt of each image.
3. Generate each image, save with the **exact filename** below into `public/marketing/<slug>/`.
4. Commit + push. The MDX already references the paths, so the images appear automatically.

## Art direction (all images)
- Background: near-black dark green `#0B1A10`. Sole accent: `#4CD964` green.
- Clean, modern, editorial illustration. Subtle tech motifs. No baked-in text, no logos.
- **Hero:** landscape ~1672×941. **Inline:** wide banner.
- Export as `.webp`.

## Merge / branch notes
- Branches are stacked. Merge order: **PR #6 → #23 → #7 → #8 → … → #22** (#23 = hero-alt template, any time before the blogs).
- Adding image files to a branch needs a light rebase of its descendants — ask and it gets handled.

---

## 01 · detect-cluely-interviews — `public/marketing/detect-cluely-interviews/`
Prompts: `docs/seo/image-prompts/detect-cluely-interviews.md` · Branch: `blog/01-detect-cluely-interviews` · **images already added ✅**

| File | Alt |
|---|---|
| `hero.webp` | Hidden Cluely AI overlay glowing above a video-call laptop, invisible to screen share, linked to behavioral detection signals |
| `screen-vs-overlay.webp` | Comparison of a clean shared screen versus the translucent Cluely overlay that the camera and screen share cannot capture |
| `signals.webp` | Four signals that reveal Cluely use in interviews: uniform answer latency, over-structured answers, off-screen reading gaze, and paste blocks |

## 02 · remote-interview-integrity-guide — `public/marketing/remote-interview-integrity-guide/`
Prompts: `docs/seo/image-prompts/remote-interview-integrity-guide.md` · Branch: `blog/02-remote-interview-integrity-guide`

| File | Alt |
|---|---|
| `hero.webp` | Two abstract figures face each other in a minimal video-call frame with a glowing green shield-and-scale between them, symbolizing interview integrity. |
| `framework.webp` | A three-stage diagram showing a gate for deterrence, a radar pulse reading signals for detection, and a human figure holding a balanced scale for the decision, linked by a green line. |
| `fairness.webp` | An abstract person sitting calmly beside a translucent green shield, illustrating candidate protection and consent rather than surveillance. |

## 03 · detect-interview-coder — `public/marketing/detect-interview-coder/`
Prompts: `docs/seo/image-prompts/detect-interview-coder.md` · Branch: `blog/03-detect-interview-coder`

| File | Alt |
|---|---|
| `hero.webp` | A dark code editor with a translucent green-edged glass overlay floating above it and a soft green scanning beam, suggesting a hidden AI assistant being detected. |
| `layers.webp` | An isometric stack of three translucent screen layers with a glowing green top pane hidden above the screen-share capture, crossed by a diagonal detection beam. |
| `keystrokes.webp` | Two stacked rhythm lines comparing an irregular, backtracking human typing pattern against a smooth, evenly pulsed line that represents pasted AI output. |

## 04 · trueyy-vs-proctorio — `public/marketing/trueyy-vs-proctorio/`
Prompts: `docs/seo/image-prompts/trueyy-vs-proctorio.md` · Branch: `blog/04-trueyy-vs-proctorio`

| File | Alt |
|---|---|
| `hero.webp` | A split illustration contrasting a locked, padlocked browser window on the left with an open signal waveform connecting two figures on the right. |
| `lockdown-vs-signals.webp` | A padlocked browser window representing exam lockdown shown beside a glowing signal waveform threading between two figures for live signal reading. |
| `signal-timeline.webp` | A horizontal glowing timeline of evenly spaced tick marks rising into calm risk peaks above three faint parallel lanes for app, keystroke, and voice signals. |

## 05 · detect-ai-meeting-assistants — `public/marketing/detect-ai-meeting-assistants/`
Prompts: `docs/seo/image-prompts/detect-ai-meeting-assistants.md` · Branch: `blog/05-detect-ai-meeting-assistants`

| File | Alt |
|---|---|
| `hero.webp` | Abstract video-call tile grid on a dark green background with one anonymous AI note-taker tile marked by a glowing green microphone glyph linked to a note panel. |
| `access-paths.webp` | Diagram of three glowing green pathways converging on a single microphone node, showing an AI assistant joining as a bot, via desktop audio capture, and on a second phone. |
| `reading-gaze.webp` | Illustration of a green scan line tracking across an off-frame screen with regular pulse marks, suggesting a candidate reading answers with machine-regular latency. |

## 06 · best-ai-cheating-detection-tools — `public/marketing/best-ai-cheating-detection-tools/`
Prompts: `docs/seo/image-prompts/best-ai-cheating-detection-tools.md` · Branch: `blog/06-best-ai-cheating-detection-tools`

| File | Alt |
|---|---|
| `hero.webp` | Editorial illustration of four glowing glass panels for AI cheating detection categories, linked by green lines to a central point where a buyer picks a tool. |
| `selection-criteria.webp` | Illustration of a branching green decision path splitting into four endpoints marked with window-lock, waveform, node-graph, and shield icons. |
| `live-interview-signals.webp` | Illustration of a video-call frame beside a translucent panel tracing waveform, paste-burst, and app-activity signals along a pulse timeline. |

## 07 · detect-ai-coding-interviews — `public/marketing/detect-ai-coding-interviews/`
Prompts: `docs/seo/image-prompts/detect-ai-coding-interviews.md` · Branch: `blog/07-detect-ai-coding-interviews`

| File | Alt |
|---|---|
| `hero.webp` | A stylized dark code editor where a smooth AI-generated light ribbon and a jagged, correction-filled human-typed line meet at a glowing green seam. |
| `signals.webp` | An interview timeline showing uneven human keystroke clusters beside an evenly-spaced AI paste burst, with three uniform-latency gaps and one flagged marker glowing green. |
| `design-round.webp` | An abstract puzzle-like code block being reshaped mid-transformation as a green outline traces a new requirement emerging from the old shape. |

## 08 · stop-cheating-remote-interviews — `public/marketing/stop-cheating-remote-interviews/`
Prompts: `docs/seo/image-prompts/stop-cheating-remote-interviews.md` · Branch: `blog/08-stop-cheating-remote-interviews`

| File | Alt |
|---|---|
| `hero.webp` | Editorial illustration of a green-outlined video call window whose answers pass through three layered check panels reading keystroke, voice, and app signals. |
| `adaptive-questions.webp` | Abstract green line diagram of an interview path branching into adaptive follow-up questions, with one branch looping back as a curveball probe. |
| `human-review.webp` | Abstract risk timeline of small bars with one taller bar highlighted in green beneath a magnifier glyph, showing a human pausing to review a flagged moment. |

## 09 · trueyy-vs-hackerrank — `public/marketing/trueyy-vs-hackerrank/`
Prompts: `docs/seo/image-prompts/trueyy-vs-hackerrank.md` · Branch: `blog/09-trueyy-vs-hackerrank`

| File | Alt |
|---|---|
| `hero.webp` | A sealed coding-test window linked by a glowing green signal line to two facing silhouettes in live conversation, showing two stages of one hiring funnel. |
| `funnel.webp` | Two abstract icons connected left to right: a locked coding-assessment window and a waveform reading signals between two people, showing a sequence not a versus. |
| `risk-timeline.webp` | A horizontal risk timeline with a glowing green line rising into calm peaks over three faint lanes for apps, keystrokes, and voice signals. |

## 10 · interview-cheating-red-flags — `public/marketing/interview-cheating-red-flags/`
Prompts: `docs/seo/image-prompts/interview-cheating-red-flags.md` · Branch: `blog/10-interview-cheating-red-flags`

| File | Alt |
|---|---|
| `hero.webp` | Editorial illustration of a remote video interview on a laptop showing a faceless silhouette, ringed by green signal markers with some flagged bright and others muted. |
| `timeline.webp` | Editorial timeline banner where clusters of green risk signals stack tall and bright at two moments while the line stays quiet between them. |
| `signal-vs-noise.webp` | Editorial illustration of two faceless candidate silhouettes whose identical signal clusters glow bright green for a real flag and muted grey for an innocent look-alike. |

## 11 · detect-remote-access-tools — `public/marketing/detect-remote-access-tools/`
Prompts: `docs/seo/image-prompts/detect-remote-access-tools.md` · Branch: `blog/11-detect-remote-access-tools`

| File | Alt |
|---|---|
| `hero.webp` | A green-lit laptop with a faint ghosted second cursor gliding in from off-frame, illustrating an unseen remote hand controlling the machine during an interview. |
| `vectors.webp` | Three abstract green icons connected by hairline threads: overlapping windows for a remote-desktop handoff, a phone tucked below a laptop for a hidden second device, and a lens for a virtual camera feed. |
| `timeline.webp` | A glowing green horizontal timeline with soft node markers and one brighter flagged moment, over faint waveform and keystroke motifs, representing a human-reviewable integrity timeline. |

## 12 · live-interview-proctoring-alternatives — `public/marketing/live-interview-proctoring-alternatives/`
Prompts: `docs/seo/image-prompts/live-interview-proctoring-alternatives.md` · Branch: `blog/12-live-interview-proctoring-alternatives`

| File | Alt |
|---|---|
| `hero.webp` | Editorial illustration contrasting a sealed padlock-shaped browser window as the wrong tool against two open video-call panels linked by a green live-signal waveform. |
| `categories.webp` | Four abstract category tiles on a dark green background showing exam lockdown, code-similarity brackets, an ID face-outline, and a glowing green live audio waveform marked as the interview fit. |
| `risk-timeline.webp` | Abstract risk-timeline visualization on a dark green background with a green line rising and falling across connected nodes, three faint parallel signal tracks, and a human-silhouette marker making the final call. |

## 13 · suspect-candidate-using-ai — `public/marketing/suspect-candidate-using-ai/`
Prompts: `docs/seo/image-prompts/suspect-candidate-using-ai.md` · Branch: `blog/13-suspect-candidate-using-ai`

| File | Alt |
|---|---|
| `hero.webp` | A magnifying glass hovers over a timeline of signal marks, with a few converging into one bright green cluster, beside a calm silhouetted figure at a desk. |
| `probing.webp` | Nested speech-bubble shapes, smooth grey-green on the outside and fragmented accent green inside, showing a confident answer thinning out under deeper follow-up questioning. |
| `decision.webp` | A single luminous path splitting into three diverging routes — one continuing bright green, one looping back, one fading to grey — representing advance, re-interview, or reject. |

## 14 · ai-use-policy-interviews — `public/marketing/ai-use-policy-interviews/`
Prompts: `docs/seo/image-prompts/ai-use-policy-interviews.md` · Branch: `blog/14-ai-use-policy-interviews`

| File | Alt |
|---|---|
| `hero.webp` | A minimal policy card split into an allowed zone and a not-allowed zone, linked by a thin green line to a small consent-handshake glyph on a dark background. |
| `zones.webp` | Three stacked interview-stage lanes — preparation, assessment, and a live conversation — with the permitted lane glowing green while the restricted lanes stay muted grey-green. |
| `consent.webp` | Two abstract silhouettes across a table linked by a luminous green line that passes through a shield-and-checkmark glyph, symbolizing informed consent and disclosure. |

## 15 · ai-in-hiring-fair-use — `public/marketing/ai-in-hiring-fair-use/`
Prompts: `docs/seo/image-prompts/ai-in-hiring-fair-use.md` · Branch: `blog/15-ai-in-hiring-fair-use`

| File | Alt |
|---|---|
| `hero.webp` | Split editorial illustration contrasting calm interview preparation on the left with concealed real-time AI assistance on the right, divided by a glowing green line. |
| `disclosure-test.webp` | A balanced green scale weighing a human brain glyph against an AI chip glyph, illustrating the test of whether AI is doing the work and whether it is disclosed. |
| `honest-majority.webp` | A row of neutral human silhouettes with a single figure gently outlined in accent green under a soft focus ring, representing one flagged moment reviewed carefully rather than a crowd under suspicion. |

## 16 · remote-vs-onsite-cheating — `public/marketing/remote-vs-onsite-cheating/`
Prompts: `docs/seo/image-prompts/remote-vs-onsite-cheating.md` · Branch: `blog/16-remote-vs-onsite-cheating`

| File | Alt |
|---|---|
| `hero.webp` | Split-screen illustration comparing a remote video-call interview with a hidden assistance overlay to an onsite room with an ID check, divided by a green seam of light. |
| `threats.webp` | Two abstract green icons side by side: a chat-overlay feeding thin lines into a call window for real-time AI assistance, and offset semi-transparent face outlines for identity fraud. |
| `coverage-gap.webp` | A horizontal hiring funnel where only the final, rightmost stage sits inside a green protective outline while the earlier, wider remote stages stay dimmed and unguarded. |
