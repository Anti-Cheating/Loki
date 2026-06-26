import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service | Trueyy',
  description:
    'The terms that govern your use of Trueyy — accounts, acceptable use, intellectual property, disclaimers, and liability.',
  alternates: { canonical: 'https://trueyy.com/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of Trueyy&rsquo;s website and products (the &ldquo;Service&rdquo;).
        By creating an account or using the Service, you agree to these Terms. If
        you are agreeing on behalf of an organisation, you represent that you
        have authority to bind it.
      </p>

      <h2>The Service</h2>
      <p>
        Trueyy provides real-time interview-integrity monitoring and analysis for
        remote interviews. Features may change over time as we improve the
        product. Use of the Service also depends on third-party meeting platforms
        that you choose to connect.
      </p>

      <h2>Accounts</h2>
      <ul>
        <li>You must provide accurate information and keep your credentials secure.</li>
        <li>You are responsible for activity under your account.</li>
        <li>You must be authorised to use the Service for your organisation.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service unlawfully or to monitor people without proper notice and a lawful basis.</li>
        <li>Reverse engineer, resell, or circumvent the Service or its security.</li>
        <li>Upload malware, interfere with the Service, or attempt unauthorised access.</li>
        <li>Use the Service to make solely automated decisions about people without appropriate human review.</li>
      </ul>
      <p>
        As a customer, you are responsible for using Trueyy fairly and in
        compliance with applicable employment, privacy, and anti-discrimination
        laws — including informing candidates and keeping a human in the loop on
        any decision.
      </p>

      <h2>Customer data</h2>
      <p>
        You retain ownership of the data you and your candidates provide. You
        grant us the rights needed to operate the Service. Our handling of
        personal data is described in our{' '}
        <a href="/privacy">Privacy Policy</a>, and a Data Processing Agreement is
        available for customers who need one.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Trueyy and its software, content, and trademarks are owned by us or our
        licensors. These Terms do not grant you any rights to our IP except the
        limited right to use the Service.
      </p>

      <h2>Fees</h2>
      <p>
        Paid plans are billed as described in your order or plan. Fees are
        non-refundable except where required by law or expressly stated.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Trueyy surfaces signals and scores to <em>assist</em> human judgement; it
        does not by itself prove cheating, and a single flag is never a verdict.
        The Service is provided &ldquo;as is&rdquo; without warranties of any
        kind to the maximum extent permitted by law.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Trueyy is not liable for
        indirect, incidental, special, or consequential damages, and our total
        liability is limited to the amounts you paid for the Service in the 12
        months before the claim.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        access for breach of these Terms or to protect the Service. On
        termination, your right to use the Service ends.
      </p>

      <h2>Governing law &amp; changes</h2>
      <p>
        These Terms are governed by the laws specified in your agreement with us.
        We may update these Terms; material changes are reflected by the
        &ldquo;Last updated&rdquo; date above, and continued use means acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Reach us via our{' '}
        <a href="/contact">contact form</a>.
      </p>
    </LegalPage>
  );
}
