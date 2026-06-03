import { NextResponse } from 'next/server';

const content = `# Trueyy — Full site content

> Real-time interview integrity monitoring for remote hiring teams.

---

## Hero

Catch what the interview can't show you.

Remote candidates can read from a second screen, run an AI assistant off camera, or paste answers in seconds. Trueyy watches the signals you miss and gives your interviewers a clear, honest read on every conversation.

Works inside Zoom, Meet and Teams. No clunky candidate install. Privacy-first by design.

---

## The trust gap

Remote interviews got easier to fake.

A polished answer no longer proves much. The hard part is no longer running the interview, it is knowing whether the person on the call actually did the thinking. That gap costs teams real money and real time.

- 67% of recruiters say they have caught a candidate using outside help during a remote interview.
- 3x jump in suspected AI-assisted answers reported across remote hiring since 2023.
- 89% of hiring teams want a clear integrity signal before they extend an offer.

---

## How it works

Four steps, zero friction for your interviewers. Trueyy slots into the way you already hire. Set it up once, then let it run in the background of every call.

1. Schedule — Drop a Trueyy link into the calendar invite. Nothing changes about how your team books the interview.
2. Connect — The candidate joins through the browser. Consent is clear and the session opens right beside your video call.
3. Monitor — Trueyy reads device-level signals as the conversation happens and quietly scores the moments that matter.
4. Review — Every session ends with a plain-language timeline and an integrity score you can attach to the scorecard.

---

## Multi-signal detection

One signal can lie. Together they don't.

No single tell proves a candidate is cheating. Trueyy reads several signals at once and weighs them against each other, so an honest pause never looks the same as a hidden assistant feeding answers.

### AI assistant use
Spots the rhythm of answers piped in from an AI tool, including the tell-tale lag between a question and a suspiciously complete reply.

### App and window switching
Notices when focus leaves the interview for another app or a hidden window mid-answer, and logs exactly when it happened.

### Clipboard activity
Catches large pastes that arrive faster than anyone could type, a common sign of pre-written or generated answers.

### Reading behavior
Reads gaze and timing patterns that suggest a candidate is reading from a script or a second screen instead of speaking freely.

### Second-device signals
Surfaces patterns that point to a phone or extra monitor just out of frame, where help is most often hiding.

### Answer cadence
Models how a person naturally builds an answer, so unnatural fluency and perfect structure stand out instead of slipping by.

---

## Command center

See the read while the interview is still happening.

Trueyy turns raw signals into something your interviewer can actually use in the moment. A calm live feed, a single integrity score, and a timeline they can scrub through after the call. No guesswork, no gut feeling.

- A live integrity score that updates as the conversation moves.
- Time-stamped flags you can jump straight to afterward.
- A shareable summary that drops onto the candidate scorecard.

---

## Why Trueyy

Built for live interviews, not locked-down exams.

Old-school proctoring was made for timed tests. It locks browsers and watches faces. Live hiring conversations need something that reads intent, not just movement.

Capability comparison:
- Runs during a live two-way interview: Traditional proctoring No, Trueyy Yes
- Detects AI assistant use in real time: Traditional proctoring Limited, Trueyy Yes
- Works inside Zoom, Meet and Teams: Traditional proctoring No, Trueyy Yes
- Weighs several signals together: Traditional proctoring Rule-based, Trueyy Yes
- Light footprint for the candidate: Traditional proctoring Heavy, Trueyy Yes
- Plain-language timeline after the call: Traditional proctoring No, Trueyy Yes

---

## Security and privacy

Honest monitoring, handled with care.

Watching for cheating should never mean treating candidates badly. Trueyy is built to be transparent with people and strict with their data.

### Transparent by default
Candidates are told what is being monitored before the interview starts. No hidden tracking, no surprises.

### Encrypted end to end
Session data is encrypted in transit and at rest. You control how long it lives and who on your team can see it.

### Compliance ready
Built around GDPR and SOC 2 expectations, with consent flows and retention controls baked in from the start.

---

## Frequently asked questions

### How does Trueyy detect cheating during an interview?
Trueyy runs quietly beside the live call and reads device-level signals like app and window switching, clipboard activity, AI assistant patterns, and reading behavior. It weighs them together, scores each moment, and shows your interviewer a clear timeline rather than a single noisy alert.

### Does the candidate need to install anything heavy?
No. Candidates join through a lightweight browser session with clear consent. The interviewer sees the integrity signals on their own dashboard, so the candidate experience stays simple.

### Which video platforms does it work with?
Trueyy is built to sit beside the calls you already run on Zoom, Google Meet, and Microsoft Teams, so you do not have to move your interviews onto a new platform.

### Will candidates feel like they are being spied on?
They are told up front what is monitored and why. Trueyy is designed to confirm honest work, not to punish nerves. Most candidates appreciate a process that protects the people who are not cutting corners.

### Is Trueyy compliant with privacy regulations?
Yes. Trueyy is built privacy-first with encryption in transit and at rest, consent prompts, and retention controls designed to support GDPR and SOC 2 requirements.

### When can my team start using it?
Trueyy is rolling out to early-access teams now. Book a demo and we will get you set up, walk through a live session, and share early-access pricing.

---

## Early access

Trueyy is launching soon. Join the waitlist for early access and founding member pricing.

Sign up at: https://trueyy.com/#waitlist

---

© ${new Date().getFullYear()} Trueyy. All rights reserved.
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
