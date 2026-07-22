import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Compliance | Trueyy',
  description:
    'How Trueyy supports GDPR, biometric-privacy laws, the EU AI Act, and fair-hiring obligations — consent-first, no biometric identification, encrypted with configurable retention, human-in-the-loop.',
  alternates: { canonical: 'https://www.trueyy.com/compliance' },
  robots: { index: true, follow: true },
};

export default function CompliancePage() {
  return (
    <LegalPage title="Compliance" updated="June 2026">
      <p>
        Trueyy is built so that monitoring a candidate for integrity stays on the
        right side of privacy and fair-hiring law. The core design choices —{' '}
        <strong>consent-first, no biometric identification, encrypted storage
        with short configurable retention, and a human on every decision</strong>
        {' '}&mdash; are what keep it defensible across jurisdictions.
      </p>

      <h2>Data minimisation by design</h2>
      <p>
        We collect the least data needed to do the job: app/window focus, paste
        timing, keystroke cadence, and process scans, plus interview audio
        (transcribed) and periodic screenshots. We don&rsquo;t record the live
        meeting video, and we don&rsquo;t use biometric identification. Reading
        integrity signals rather than identifying people biometrically keeps the
        product out of the strictest biometric-identifier regimes and embodies
        the GDPR&rsquo;s minimisation and privacy-by-design principles.
      </p>

      <h2>GDPR</h2>
      <ul>
        <li><strong>Lawful basis &amp; transparency:</strong> candidates are informed of exactly what is monitored before a session, supporting a clear basis to process.</li>
        <li><strong>Data-subject rights:</strong> access, correction, and deletion requests are supported (directed through the hiring organisation as controller).</li>
        <li><strong>Configurable retention</strong> per organisation, and encryption in transit and at rest.</li>
        <li><strong>Sub-processors &amp; transfers</strong> bound by data-protection terms and appropriate transfer safeguards.</li>
      </ul>

      <h2>Biometric-privacy laws</h2>
      <p>
        Laws such as Illinois&rsquo; BIPA and similar Texas/Washington statutes
        regulate biometric <em>identifiers</em> — face geometry and voiceprints.
        Because Trueyy reads ordinary device telemetry rather than biometric
        identifiers, it avoids that category. Where any feature could touch
        biometrics, it is opt-in with explicit notice and consent.
      </p>

      <h2>EU AI Act</h2>
      <p>
        AI used for recruitment and to evaluate behaviour is classified as
        high-risk under the EU AI Act. Trueyy is designed to support deployer
        obligations: candidate transparency, logging, accuracy, and — critically
        — <strong>human oversight</strong>. Trueyy informs the decision; a person
        makes it.
      </p>

      <h2>Fair hiring &amp; human oversight</h2>
      <p>
        A score is an input, not a verdict. Trueyy is built to be used with a
        human in the loop and weighed alongside other evidence, consistent with
        EEOC/DOJ guidance that the employer — not the vendor — owns the decision,
        and that selection tools must be used without unlawful disparate impact
        and with accommodations.
      </p>

      <h2>Recording &amp; consent</h2>
      <p>
        Because interviews can span jurisdictions, the safe default is explicit
        notice and consent before any recording. Trueyy&rsquo;s no-stored-video
        architecture keeps the footprint small and the wiretap exposure low.
      </p>

      <h2>Security &amp; certifications</h2>
      <p>
        Consent flows, data-subject request handling, configurable retention, and
        audit logs are built in. Our security program is designed to support
        GDPR and SOC 2 requirements (SOC 2 in progress). See the{' '}
        <a href="/security">Security &amp; Privacy overview</a>.
      </p>

      <h2>Documentation</h2>
      <p>
        A Data Processing Agreement, sub-processor list, and security overview are
        available to customers on request.
      </p>

      <h2>Contact</h2>
      <p>
        Compliance, DPA, or security questions? Reach us via our{' '}
        <a href="/contact">contact form</a>.
      </p>

      <hr />
      <p>
        This page summarises our approach and is general information, not legal
        advice. Requirements vary by jurisdiction — confirm your obligations with
        counsel.
      </p>
    </LegalPage>
  );
}
