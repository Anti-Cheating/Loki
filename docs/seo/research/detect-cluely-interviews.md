# Research Dossier — detect-cluely-interviews

**Primary query:** how to detect Cluely in interviews
**Secondary:** Cluely detection, is Cluely undetectable, Cluely interview cheating
**Target length:** ~1600 words
**Date compiled:** 2026-07-14

## Verified statistics (fetched and confirmed)

| Stat | Exact figure | Source URL | Fetched |
|---|---|---|---|
| Cluely funding | Raised **$15M** Series A led by **a16z** (June 20 2025), ~$120M valuation, after $5.3M seed | https://techcrunch.com/2025/06/20/cluely-a-startup-that-helps-cheat-on-everything-raises-15m-from-a16z/ | Yes |
| Cluely self-description | "#1 Undetectable AI for Meetings"; "never shows up in shared screens, recordings, or external meeting tools" | https://cluely.com/ | Yes |
| Cluely undetectability mechanism | Overlay stays "invisible on any screen sharing video conferencing software" using GPU-level rendering (DirectX/Metal) | https://docs.cluely.com/feature/undectability | Yes |
| Secret AI use in interviews | **20% (1 in 5)** of 3,617 professionals admitted secretly using AI during interviews; **55%** call it the new norm (Apr 2025, Blind) | https://www.teamblind.com/blog/1-in-5-u-s-professionals-secretly-use-ai-during-job-interviews/ | Yes |
| Suspicion vs. proof gap | **59%** of 3,000 managers suspect AI misrepresentation; only **19%** confident their process would catch a fraud (Checkr via Newsweek) | https://www.newsweek.com/most-managers-suspect-ai-fraud-in-hiring-survey-10477225 | Yes |
| Cluely lag loop | Consistent **3-5 second** processing delay regardless of question difficulty; Fabric flags ~85% cheating probability across 20+ signals | https://fabrichq.ai/blogs/how-to-detect-cluely-in-interviews | Yes |
| Processing pause | AI-assisted candidates "delay answers by 3-5 seconds" | https://www.withsherlock.ai/blog/signs-candidate-using-ai-to-answer-questions-during-live-interview | Yes |

## How Cluely works (verified technical detail)
- Reads the screen via OCR + captures system audio via speech-to-text, feeds an LLM, surfaces answers in a floating overlay.
- Overlay is written to GPU display output (DirectX on Windows, Metal on macOS), below the compositor. Screen-share captures the virtual framebuffer, not the GPU output — so the overlay is invisible in Zoom/Meet/Teams shares and recordings.
- No taskbar entry, no visible window, not in Alt+Tab. Desktop "looks clean."
- Pipeline latency is 3-5s regardless of connection speed — the core behavioral tell.
- Founders Roy Lee + Neel Shanmugam, suspended from Columbia over "Interview Coder"; Cluely grew out of it.

## SERP / competitor angle
Who ranks: Fabric (fabrichq.ai — strongest technical breakdown), Proctaroo, Talview, detectcluely.com, interviewcoder.co ("Is Cluely Detectable?"), Honorlock, Zero Assist.
Gap to fill: most competitor pages are either (a) vendor pages that just say "we detect it, buy us" or (b) block-it/lockdown angles. The gap: a calm, human-first checklist a hiring manager or recruiter can run in a *live remote interview they already do on Zoom/Meet/Teams*, that respects honest candidates and warns about false positives — plus where consent-first real-time monitoring fits. No lockdown, no scare tactics.

## H2 outline
1. Hook — the clean-desktop illusion (screen share isn't the safety net)
2. What Cluely is (undetectable overlay, a16z-funded, grew from Interview Coder)
3. Why it beats screen share and recording (GPU overlay mechanism)
4. Is Cluely undetectable? (yes to the eye, no to behavior)
5. The signals Cluely leaves — latency, structure, gaze, paste cadence, desktop/audio artifacts
6. A step-by-step detection checklist (before / during / after)
7. Where real-time integrity monitoring fits (Trueyy, consent-first)
8. FAQ
9. CTA

## FAQ candidates (PAA-style)
- Is Cluely undetectable?
- Can you see Cluely on a screen share or recording?
- What does Cluely look like to the interviewer?
- Can Trueyy or monitoring detect Cluely without recording video?
- Is it legal / fair to check for Cluely in an interview?

## Keywords
Primary: how to detect Cluely in interviews
Secondary: Cluely detection, is Cluely undetectable, Cluely interview cheating
Supporting: Cluely AI overlay, undetectable AI meeting assistant, detect AI cheating live interview, screen share invisible AI, interview integrity monitoring.

## Internal links required
/demo, /features, /resources/remote-interview-integrity-guide, /resources/spot-ai-assisted-answers
