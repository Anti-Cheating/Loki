import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://trueyy.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trueyy | Detect AI Cheating in Live Remote Interviews',
    template: '%s | Trueyy',
  },
  description: 'Trueyy detects Cluely, InterviewCoder, ChatGPT, and other AI tools during live remote interviews. Real-time integrity scoring for Zoom, Google Meet, and Microsoft Teams. No candidate install required.',
  keywords: [
    'detect AI cheating in interviews',
    'Cluely detection',
    'InterviewCoder detection',
    'interview integrity software',
    'remote interview monitoring',
    'live interview AI detection',
    'interview fraud prevention',
    'AI-assisted interview cheating',
    'candidate monitoring software',
    'interview proctoring',
  ],
  authors: [{ name: 'Trueyy' }],
  creator: 'Trueyy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Trueyy | Detect AI Cheating in Live Remote Interviews',
    description: 'Cluely, InterviewCoder, ChatGPT — Trueyy reads every signal they leave behind. Know the score before you extend the offer.',
    url: siteUrl,
    siteName: 'Trueyy',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trueyy | AI Cheating Detection for Live Interviews',
    description: 'Detects Cluely, InterviewCoder, and 50+ AI tools during live Zoom, Meet, and Teams interviews. No candidate install.',
    creator: '@trueyy',
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://trueyy.com/#org',
      name: 'Trueyy',
      url: 'https://trueyy.com/',
      description: 'Real-time AI cheating detection for live remote interviews. Detects Cluely, InterviewCoder, ChatGPT, and 50+ tools during live Zoom, Meet, and Teams conversations.',
      sameAs: ['https://twitter.com/trueyy'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Trueyy',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Trueyy detects AI tool use, paste velocity, app switching, and answer structure anomalies during live remote interviews. Works inside Zoom, Google Meet, and Microsoft Teams without a candidate install.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Early access — founding cohort pricing locked at signup' },
      publisher: { '@id': 'https://trueyy.com/#org' },
    },
    {
      '@type': 'HowTo',
      name: 'How Trueyy monitors a live remote interview',
      description: 'A four-step process that fits into the hiring workflow you already use. Your interviewers do one step.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Schedule', text: 'Drop a Trueyy link into the calendar invite alongside the Zoom or Meet link. Nothing else changes about how your team books the interview.' },
        { '@type': 'HowToStep', position: 2, name: 'Connect', text: 'The candidate clicks their link, reads what is being monitored and why, and consents before anything starts. No download required.' },
        { '@type': 'HowToStep', position: 3, name: 'Monitor', text: 'Trueyy reads device signals as the conversation runs and scores integrity every 30 seconds. Your interviewer sees a live feed.' },
        { '@type': 'HowToStep', position: 4, name: 'Review', text: 'The session ends with a plain-language timeline, a final integrity score, and a shareable summary that attaches to the candidate scorecard.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does Trueyy detect AI tool use during a live interview?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trueyy reads device-level signals from the candidate\'s browser session: which apps are in focus, what is being pasted and how fast, gaze patterns through the webcam, and the structural signature of answers as they are typed or spoken. These signals are weighed against each other every 30 seconds. Your interviewer sees the result as a live integrity score, not a single noisy alert firing mid-conversation.' },
        },
        {
          '@type': 'Question',
          name: 'Which AI tools does Trueyy specifically detect?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trueyy has recognition patterns for ChatGPT, Claude, Gemini, GitHub Copilot, Cluely, and InterviewCoder. Detection is based on structural output signatures, not keyword lists, so prompt rewrites do not defeat it. Detection patterns are updated regularly as new tools emerge.' },
        },
        {
          '@type': 'Question',
          name: 'Does the candidate need to install anything?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Candidates join through a standard browser tab with a consent screen before anything starts. Nothing is downloaded or installed. The monitoring runs through the browser session Trueyy opens alongside the video call.' },
        },
        {
          '@type': 'Question',
          name: 'Which video platforms does Trueyy work with?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trueyy sits beside the calls you already run on Zoom, Google Meet, and Microsoft Teams. The interview happens where it always has. Trueyy is the second tab your team opens on their side.' },
        },
        {
          '@type': 'Question',
          name: 'How does Trueyy handle false positives?',
          acceptedAnswer: { '@type': 'Answer', text: 'No signal is treated as proof. The score is context. An interviewer who sees a flag can jump to that timestamp, review what was happening, and weigh it alongside everything else they observed. The flag is one input. Your team makes the call.' },
        },
        {
          '@type': 'Question',
          name: 'Is Trueyy compliant with privacy regulations?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Consent flows, data-subject request handling, configurable retention windows, and audit logs are built into the product from the start. The architecture is designed to support GDPR and SOC 2 requirements. No video is stored on Trueyy servers.' },
        },
        {
          '@type': 'Question',
          name: 'Can Trueyy accommodate candidates with disabilities?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Signals like slower typing speed or atypical gaze patterns can be calibrated at the session level. If a candidate discloses a condition that may affect how specific signals read, the session can be flagged for manual review with the relevant context attached.' },
        },
        {
          '@type': 'Question',
          name: 'When can my team start using Trueyy?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trueyy is accepting early-access teams now. Book a 20-minute demo and we will run a mock session live, walk you through the dashboard, and share founding-cohort pricing that stays locked in as the product matures.' },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
