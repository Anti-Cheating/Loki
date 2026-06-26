import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Trueyy',
  description:
    'How Trueyy collects, uses, and protects data. Consent-first interview monitoring — no video stored, device-level signals only, configurable retention, GDPR-aligned.',
  alternates: { canonical: 'https://trueyy.com/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        This Privacy Policy explains how Trueyy (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects, uses, shares, and protects information when
        you use our website and our interview-integrity product. We built Trueyy
        consent-first: candidates are told exactly what is observed before a
        session begins, and we never store interview video.
      </p>

      <h2>Who this applies to</h2>
      <p>
        This policy covers two groups: <strong>customers</strong> (recruiters,
        interviewers, and admins who use the Trueyy dashboard) and{' '}
        <strong>candidates</strong> whose interviews are monitored with Trueyy by
        one of our customers. For candidate data, the hiring organisation is the
        data controller and Trueyy acts as a processor on their behalf.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account data</strong> (customers): name, work email, company,
          and authentication details.
        </li>
        <li>
          <strong>Interview integrity signals</strong> (candidates): device-level
          signals during a monitored session — application/window focus events,
          paste activity, keystroke timing, gaze patterns, and process scans.
        </li>
        <li>
          <strong>Usage &amp; technical data</strong>: log data, device/browser
          info, and cookies needed to run and secure the service.
        </li>
      </ul>
      <p>
        <strong>We do not store interview video or audio recordings.</strong>{' '}
        Video stays inside the meeting platform (Zoom, Google Meet, Microsoft
        Teams). Trueyy only receives derived device signals.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To provide interview-integrity scoring and the customer dashboard.</li>
        <li>To authenticate users, secure the service, and prevent abuse.</li>
        <li>To support, improve, and troubleshoot the product.</li>
        <li>To meet legal and regulatory obligations.</li>
      </ul>
      <p>
        We do not sell personal data, and we do not use candidate integrity
        signals for advertising.
      </p>

      <h2>Legal bases (GDPR)</h2>
      <p>
        Where the GDPR applies, processing relies on one or more lawful bases:
        performance of a contract, legitimate interests (running and securing the
        service), legal obligation, and — where appropriate — consent.
        Candidates are informed before monitoring begins.
      </p>

      <h2>Sharing &amp; sub-processors</h2>
      <p>
        We share data with vetted sub-processors strictly to operate the service
        (e.g. cloud hosting, storage, email delivery, and the meeting platforms
        you connect). Each is bound by data-protection terms. A current list of
        sub-processors is available on request.
      </p>

      <h2>Retention</h2>
      <p>
        Retention of session signal data is{' '}
        <strong>configurable per organisation</strong>. Account data is kept for
        the life of the account and a limited period afterwards as required for
        legal, security, and accounting purposes.
      </p>

      <h2>Security</h2>
      <p>
        Data is encrypted in transit and at rest. Access is role-based and
        logged. Our security posture is designed to support GDPR and SOC 2
        requirements; see our{' '}
        <a href="/security">Security &amp; Privacy overview</a>.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct,
        delete, or port your data, and to object to or restrict certain
        processing. Candidates should direct requests to the hiring organisation
        (the controller); we support customers in fulfilling them. To exercise
        rights or ask a question, use our{' '}
        <a href="/contact">contact form</a>.
      </p>

      <h2>International transfers</h2>
      <p>
        Where data is transferred across borders, we use appropriate safeguards
        such as Standard Contractual Clauses.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. Material changes will be
        reflected by the &ldquo;Last updated&rdquo; date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Reach us via our{' '}
        <a href="/contact">contact form</a>.
      </p>
    </LegalPage>
  );
}
