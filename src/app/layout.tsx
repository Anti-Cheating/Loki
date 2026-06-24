import type { Metadata } from 'next';
import './globals.css';
import { ClarityInit } from '@/components/Clarity';
import { GoogleAnalytics } from '@next/third-parties/google';

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
    images: [{ url: '/trueyy-logo-new.svg', width: 1200, height: 630, alt: 'Trueyy — Interview Integrity Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trueyy | AI Cheating Detection for Live Interviews',
    description: 'Detects Cluely, InterviewCoder, and 50+ AI tools during live Zoom, Meet, and Teams interviews. No candidate install.',
    creator: '@trueyy',
    images: ['/trueyy-logo-new.svg'],
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
      logo: 'https://trueyy.com/trueyy-logo-new.svg',
      foundingDate: '2024',
      description: 'Real-time AI cheating detection for live remote interviews. Detects Cluely, InterviewCoder, ChatGPT, and 50+ tools during live Zoom, Meet, and Teams conversations.',
      knowsAbout: [
        'AI cheating detection in interviews',
        'Interview integrity monitoring',
        'Cluely detection',
        'InterviewCoder detection',
        'Remote interview proctoring',
        'Live interview AI signals',
        'Paste velocity analysis',
        'Gaze pattern tracking',
      ],
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
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClarityInit />
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
