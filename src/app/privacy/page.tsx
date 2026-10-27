import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Trueyy',
  description:
    'How Trueyy collects, uses, and protects data. Consent-first interview monitoring — the meeting video stays in your call, captured data is encrypted with configurable retention, GDPR-aligned.',
  alternates: { canonical: 'https://www.trueyy.com/privacy' },
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
        session begins, and the live meeting video feed stays inside your
        conferencing tool.
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
          <strong>Interview integrity signals</strong> (candidates): during a
          monitored session — application/window focus events, paste activity,
          keystroke timing, and process scans, plus periodic screen context
          (screenshots) and interview audio, which is transcribed for analysis.
        </li>
        <li>
          <strong>Usage &amp; technical data</strong>: log data, device/browser
          info, and cookies needed to run and secure the service.
        </li>
      </ul>
      <p>
        <strong>The live meeting video feed stays inside your meeting platform</strong>{' '}
        (Zoom, Google Meet, Microsoft Teams) &mdash; we don&rsquo;t record it. To
        analyse integrity, Trueyy does capture interview audio (transcribed) and
        periodic screenshots, which are encrypted and deleted on the retention
        window you set.
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

      <h2>Google user data</h2>
      <p>
        If you connect your Google Calendar, Trueyy requests the{' '}
        <strong>calendar.events</strong> scope together with your email address.
        We use that access for one purpose only: to create a calendar event with
        a Google Meet link for an interview you schedule in Trueyy, to update
        that event if the interview is rescheduled, and to remove it if the
        interview is cancelled. We read your email address so the dashboard can
        show you which Google account is connected.
      </p>
      <p>
        We do not read, index, or store the rest of your calendar, and we do not
        use Google user data to train or improve any AI model. We never sell it,
        never use it for advertising, and never share it with third parties
        except the sub-processors needed to run the service. You can disconnect
        at any time from the Trueyy dashboard, which revokes our access and
        deletes the stored credential.
      </p>
      <p>
        Trueyy&rsquo;s use and transfer of information received from Google APIs
        adheres to the{' '}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
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
