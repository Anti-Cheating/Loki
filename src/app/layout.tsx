import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trueyy | AI-Powered Interview Integrity',
  description: 'Detect cheating in real-time during remote interviews. AI-powered monitoring for app usage, keystrokes, voice patterns, and screen activity.',
  openGraph: {
    title: 'Trueyy | AI-Powered Interview Integrity',
    description: 'Detect cheating in real-time during remote interviews.',
    type: 'website',
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
