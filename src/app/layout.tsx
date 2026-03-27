import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://trueyy.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trueyy | AI-Powered Interview Integrity Monitoring',
    template: '%s | Trueyy',
  },
  description: 'Detect cheating in real-time during live remote interviews. AI-powered monitoring that catches app switching, AI tool usage, clipboard activity, and reading behavior.',
  keywords: [
    'interview cheating detection',
    'remote interview monitoring',
    'interview proctoring software',
    'anti-cheating interview tool',
    'detect AI cheating in interviews',
    'interview integrity',
    'candidate monitoring',
    'AI interview proctoring',
    'real-time cheating detection',
    'interview fraud prevention',
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
    title: 'Trueyy | AI-Powered Interview Integrity Monitoring',
    description: 'Detect cheating in real-time during live remote interviews. Know exactly when candidates use AI tools, switch apps, or read from scripts.',
    url: siteUrl,
    siteName: 'Trueyy',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trueyy | AI-Powered Interview Integrity',
    description: 'Detect cheating in real-time during live remote interviews.',
    creator: '@trueyy',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
