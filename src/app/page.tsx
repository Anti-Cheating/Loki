import type { Metadata } from 'next';
import PageContent from '@/components/PageContent';

const siteUrl = 'https://trueyy.com';
const ogImage = { url: '/trueyy-logo-new.svg', width: 1200, height: 630, alt: 'Trueyy — Interview Integrity Platform' };

export const metadata: Metadata = {
  title: 'Trueyy | Detect AI Cheating in Live Remote Interviews',
  description: 'Trueyy detects Cluely, InterviewCoder, ChatGPT, and other AI tools during live remote interviews. Real-time integrity scoring for Zoom, Google Meet, and Microsoft Teams.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Trueyy | Detect AI Cheating in Live Remote Interviews',
    description: 'Cluely, InterviewCoder, ChatGPT — Trueyy reads every signal they leave behind. Know the score before you extend the offer.',
    url: siteUrl,
    siteName: 'Trueyy',
    type: 'website',
    locale: 'en_US',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trueyy | AI Cheating Detection for Live Interviews',
    description: 'Detects Cluely, InterviewCoder, and 50+ AI tools during live Zoom, Meet, and Teams interviews. No candidate install.',
    creator: '@trueyy',
    images: ['/trueyy-logo-new.svg'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Trueyy detect AI tool use during a live interview?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trueyy reads device-level signals from the candidate\'s browser session: which apps are in focus, what is being pasted and how fast, gaze patterns through the webcam, and the structural signature of answers as they are typed or spoken. These signals are weighed against each other every 30 seconds. Your interviewer sees the result as a live integrity score.' },
    },
    {
      '@type': 'Question',
      name: 'Which AI tools does Trueyy specifically detect?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trueyy has recognition patterns for ChatGPT, Claude, Gemini, GitHub Copilot, Cluely, and InterviewCoder. Detection is based on structural output signatures, not keyword lists, so prompt rewrites do not defeat it.' },
    },
    {
      '@type': 'Question',
      name: 'Does the candidate need to install anything?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Candidates join through a standard browser tab with a consent screen before anything starts. Nothing is downloaded or installed.' },
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
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Consent flows, data-subject request handling, configurable retention windows, and audit logs are built in. The architecture is designed to support GDPR and SOC 2 requirements. No video is stored on Trueyy servers.' },
    },
    {
      '@type': 'Question',
      name: 'Can Trueyy accommodate candidates with disabilities?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Signals like slower typing speed or atypical gaze patterns can be calibrated at the session level. Sessions can be flagged for manual review with relevant context attached.' },
    },
    {
      '@type': 'Question',
      name: 'When can my team start using Trueyy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trueyy is accepting early-access teams now. Book a 30-minute demo and we will run a mock session live, walk you through the dashboard, and share founding-cohort pricing that stays locked in as the product matures.' },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageContent />
    </>
  );
}
