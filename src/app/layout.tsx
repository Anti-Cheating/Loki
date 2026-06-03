import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://trueyy.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trueyy | Real-Time Interview Integrity for Remote Hiring',
    template: '%s | Trueyy',
  },
  description: 'Trueyy catches AI tool use, app switching, clipboard activity, and scripted answers during live remote interviews. Real-time interview integrity monitoring for staffing agencies and enterprise hiring teams.',
  keywords: [
    'interview cheating detection',
    'remote interview monitoring',
    'AI interview proctoring',
    'detect AI cheating in interviews',
    'interview integrity software',
    'live interview monitoring',
    'interview fraud prevention',
    'candidate monitoring software',
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
    title: 'Trueyy | Real-Time Interview Integrity for Remote Hiring',
    description: 'Catch AI tool use, app switching, and scripted answers during live remote interviews. Know the score before you make the offer.',
    url: siteUrl,
    siteName: 'Trueyy',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trueyy | Real-Time Interview Integrity',
    description: 'Real-time integrity signals for live remote interviews.',
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
      description: 'Real-time interview integrity monitoring for remote hiring.',
      sameAs: ['https://twitter.com/trueyy'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Trueyy',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Trueyy monitors live remote interviews and flags AI tool use, app switching, clipboard activity, and reading behavior in real time.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Early access' },
      publisher: { '@id': 'https://trueyy.com/#org' },
    },
    {
      '@type': 'HowTo',
      name: 'How Trueyy monitors a live remote interview',
      description: 'A four-step process that slots into the way you already hire with no friction for interviewers.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Schedule', text: 'Drop a Trueyy link into the calendar invite. Nothing changes about how your team books the interview.' },
        { '@type': 'HowToStep', position: 2, name: 'Connect', text: 'The candidate joins through the browser. Consent is clear and the session opens right beside your video call.' },
        { '@type': 'HowToStep', position: 3, name: 'Monitor', text: 'Trueyy reads device-level signals as the conversation happens and quietly scores the moments that matter.' },
        { '@type': 'HowToStep', position: 4, name: 'Review', text: 'Every session ends with a plain-language timeline and an integrity score you can attach to the scorecard.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does Trueyy detect cheating during an interview?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trueyy runs quietly beside the live call and reads device-level signals like app and window switching, clipboard activity, AI assistant patterns, and reading behavior. It weighs them together, scores each moment, and shows your interviewer a clear timeline rather than a single noisy alert.' },
        },
        {
          '@type': 'Question',
          name: 'Does the candidate need to install anything heavy?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Candidates join through a lightweight browser session with clear consent. The interviewer sees the integrity signals on their own dashboard, so the candidate experience stays simple.' },
        },
        {
          '@type': 'Question',
          name: 'Which video platforms does Trueyy work with?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trueyy is built to sit beside the calls you already run on Zoom, Google Meet, and Microsoft Teams, so you do not have to move your interviews onto a new platform.' },
        },
        {
          '@type': 'Question',
          name: 'Will candidates feel like they are being spied on?',
          acceptedAnswer: { '@type': 'Answer', text: 'They are told up front what is monitored and why. Trueyy is designed to confirm honest work, not to punish nerves. Most candidates appreciate a process that protects the people who are not cutting corners.' },
        },
        {
          '@type': 'Question',
          name: 'Is Trueyy compliant with privacy regulations?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Trueyy is built privacy-first with encryption in transit and at rest, consent prompts, and retention controls designed to support GDPR and SOC 2 requirements.' },
        },
        {
          '@type': 'Question',
          name: 'When can my team start using Trueyy?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trueyy is rolling out to early-access teams now. Book a demo and we will get you set up, walk through a live session, and share early-access pricing.' },
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
