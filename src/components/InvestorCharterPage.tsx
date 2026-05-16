import { BookOpen } from 'lucide-react';
import LegalPageShell from './LegalPageShell';
import { site } from '../config/site';

const InvestorCharterPage = () => {
  return (
    <LegalPageShell title="Investor Charter" lastUpdated="May 14, 2026" icon={BookOpen}>
      <section className="space-y-4">
        <p>
          This Investor Charter outlines the standards of service, rights, and responsibilities for clients of{' '}
          {site.companyLegalName} (&quot;{site.brandName}&quot;), a SEBI-registered Research Analyst (Reg. No.{' '}
          {site.sebiRegistrationNo}).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Our commitment to you</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Research and recommendations based on diligent analysis and applicable regulations.</li>
          <li>Clear disclosure of registration status, fees, and risks associated with securities markets.</li>
          <li>Responsive support during market hours through approved communication channels.</li>
          <li>Fair treatment of all subscribers without discrimination.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Your responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate contact and KYC information when subscribing to services.</li>
          <li>Read research reports, risk disclosures, and terms before acting on any recommendation.</li>
          <li>Understand that past performance does not guarantee future results.</li>
          <li>Raise grievances promptly through the channels listed on our Grievance Board page.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>
          Principal officer: {site.principalName} |{' '}
          <a href={`mailto:${site.principalEmail}`} className="text-blue-600 hover:underline">
            {site.principalEmail}
          </a>{' '}
          |{' '}
          <a href={`tel:${site.officerPhone}`} className="text-blue-600 hover:underline">
            {site.officerPhoneDisplay}
          </a>
        </p>
        <p>
          Registered address: {site.addressLine}
        </p>
      </section>
    </LegalPageShell>
  );
};

export default InvestorCharterPage;
