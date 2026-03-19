import {
  Bot,
  Keyboard,
  Mic,
  Layers,
  Gauge,
  FileText,
  ClipboardCopy,
  Camera,
  Calendar,
  Video,
  Shield,
  BarChart3,
  Eye,
  Lock,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: 'AI Tool Detection',
    description: 'Detects ChatGPT, Copilot, Cluely, InterviewCoder, and 20+ AI platforms in real-time.',
  },
  {
    icon: Keyboard,
    title: 'Keystroke Analysis',
    description: 'Track copy/paste frequency, typing cadence, and suspicious input patterns.',
  },
  {
    icon: Mic,
    title: 'Voice Pattern Analysis',
    description: 'Identify reading patterns, AI-generated speech, and coached responses.',
  },
  {
    icon: Layers,
    title: 'App Switching Detection',
    description: 'See every app opened, browser tab created, and window switch during the interview.',
  },
  {
    icon: Gauge,
    title: 'Real-time Risk Scoring',
    description: 'Live 0-100 risk score with per-modality breakdown updated every 30 seconds.',
  },
  {
    icon: FileText,
    title: 'Live Transcript',
    description: 'Real-time speech-to-text transcription powered by Deepgram Nova-2.',
  },
  {
    icon: ClipboardCopy,
    title: 'Clipboard Monitoring',
    description: 'Track paste events with escalating severity thresholds and source detection.',
  },
  {
    icon: Camera,
    title: 'Screenshot Analysis',
    description: 'On-demand screen capture with AI-powered visual content analysis.',
  },
];

export interface Step {
  icon: LucideIcon;
  number: number;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    icon: Calendar,
    number: 1,
    title: 'Schedule',
    description: 'Create an interview session and share the secure meeting link with your candidate.',
  },
  {
    icon: Video,
    number: 2,
    title: 'Join',
    description: 'Candidate joins the embedded Zoom meeting directly within the Trueyy platform.',
  },
  {
    icon: Eye,
    number: 3,
    title: 'Monitor',
    description: 'AI analyzes behavior across apps, keystrokes, voice, and screen in real-time.',
  },
  {
    icon: BarChart3,
    number: 4,
    title: 'Report',
    description: 'Get a comprehensive risk assessment with evidence and per-modality breakdown.',
  },
];

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const STATS: Stat[] = [
  {
    value: '67%',
    label: 'Use AI Tools',
    description: 'of candidates use AI assistance tools during remote technical interviews.',
  },
  {
    value: '3x',
    label: 'Fraud Increase',
    description: 'increase in interview fraud reported by hiring managers since 2023.',
  },
  {
    value: '89%',
    label: 'Undetectable',
    description: 'of hiring managers say they cannot reliably detect AI-assisted answers.',
  },
];

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const PRICING: PricingTier[] = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'For small teams getting started with interview integrity.',
    features: [
      '10 interviews per month',
      'AI tool detection',
      'Keystroke monitoring',
      'Email risk reports',
      'Basic analytics dashboard',
    ],
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For growing teams that need comprehensive monitoring.',
    features: [
      'Unlimited interviews',
      'All detection modalities',
      'Real-time analytics dashboard',
      'Voice pattern analysis',
      'On-demand screenshot analysis',
      'API access',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced security requirements.',
    features: [
      'Everything in Professional',
      'Custom integrations (ATS, HRIS)',
      'Dedicated account manager',
      'SLA guarantee',
      'SSO / SAML authentication',
      'Custom risk thresholds',
      'On-premise deployment option',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How does Trueyy detect AI tool usage?',
    answer: 'Trueyy monitors active applications and window titles in real-time, cross-referencing against a database of 50+ known AI tools, cheating platforms, and code assistance services. This includes ChatGPT, GitHub Copilot, Cluely, InterviewCoder, FinalRound AI, and many more.',
  },
  {
    question: 'Do candidates know they are being monitored?',
    answer: 'Yes, transparency is core to our approach. Candidates are informed before the interview that monitoring is active. They go through a consent flow and permission setup before joining the meeting.',
  },
  {
    question: 'What happens if the risk score is high?',
    answer: 'Interviewers see a real-time risk score and detailed breakdown during the interview. High-risk indicators are flagged immediately with specific evidence — which apps were opened, what was pasted, and voice anomalies detected. The interviewer decides how to act on the data.',
  },
  {
    question: 'Is candidate data secure?',
    answer: 'All data is encrypted in transit and at rest. Screen captures are stored in secure cloud storage (R2) with time-limited access. Session data is retained only for the duration specified in your organization\'s policy.',
  },
  {
    question: 'How accurate is the voice analysis?',
    answer: 'Voice analysis uses a combination of heuristic checks and LLM-powered analysis to detect reading patterns, unusually structured responses, and AI-generated speech markers. The system provides confidence levels and avoids false positives by requiring multiple corroborating signals.',
  },
  {
    question: 'Can Trueyy integrate with our existing ATS?',
    answer: 'Yes, our Professional and Enterprise plans include API access for integrating with popular Applicant Tracking Systems. Enterprise customers get dedicated integration support for custom workflows.',
  },
  {
    question: 'What if a candidate has legitimate reasons for app switching?',
    answer: 'Trueyy categorizes detected applications by risk level. IDEs and coding tools expected in technical interviews are treated differently from AI chatbots. The risk engine considers context — a developer opening VS Code during a coding interview is low risk, while opening ChatGPT is high risk.',
  },
];

export const SECURITY_FEATURES = [
  {
    icon: Eye,
    title: 'Transparent Monitoring',
    description: 'Candidates are fully informed and consent to monitoring before the interview begins.',
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'End-to-end encryption for all captured data, with secure cloud storage and time-limited access.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Ready',
    description: 'GDPR-ready data handling with configurable retention policies. SOC 2 Type II compliance in progress.',
  },
];
