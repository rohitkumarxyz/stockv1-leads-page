import { AlertTriangle } from 'lucide-react';
import LegalPageShell from './LegalPageShell';
import { site } from '../config/site';

const DisclaimerPage = () => {
  return (
    <LegalPageShell title="Disclaimer" lastUpdated="May 14, 2026" icon={AlertTriangle}>
      <section className="space-y-4">
        <p className="font-semibold text-gray-900">Important</p>
        <p>
          All content on this website and communications from {site.companyLegalName} (&quot;{site.brandName}&quot;) is
          for informational and educational purposes only. It does not constitute an offer or solicitation to buy or
          sell any security.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">No guarantees</h2>
        <p>
          Securities markets are subject to risk. {site.brandName} does not assure or guarantee returns. You should
          consult your financial, tax, and legal advisors before acting on any information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">SEBI registration</h2>
        <p>
          Research is published under SEBI Research Analyst registration {site.sebiRegistrationNo}. BSE Enlistment No.:{' '}
          {site.bseEnlistmentNo}.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Third-party platforms and payments</h2>
        <p>
          Payment or subscription links may redirect to third-party checkout pages (for example, profile or payment
          aggregators). {site.brandName} is not responsible for the availability, security, or terms of those external
          sites.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {site.brandName} and its representatives disclaim liability for any
          direct or indirect loss arising from use of this website or reliance on its content.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>
          Questions about this disclaimer:{' '}
          <a href={`mailto:${site.email}`} className="text-blue-600 hover:underline">
            {site.email}
          </a>{' '}
          |{' '}
          <a href={`tel:${site.salesPhone}`} className="text-blue-600 hover:underline">
            {site.salesPhoneDisplay}
          </a>
        </p>
      </section>
    </LegalPageShell>
  );
};

export default DisclaimerPage;
