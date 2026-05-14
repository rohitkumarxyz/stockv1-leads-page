import { Scale } from 'lucide-react';
import LegalPageShell from './LegalPageShell';
import { site } from '../config/site';

const CompliancePage = () => {
  return (
    <LegalPageShell title="Compliance" lastUpdated="May 14, 2026" icon={Scale}>
      <section className="space-y-4">
        <p>
          {site.companyLegalName} (&quot;{site.brandName}&quot;) is committed to operating in line with applicable laws,
          SEBI Research Analyst Regulations, and best practices for investor protection.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">SEBI registration</h2>
        <p>
          Research and recommendations are provided under SEBI Research Analyst registration number{' '}
          <strong>{site.sebiRegistrationNo}</strong> in the name of {site.principalName}.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">BSE enlistment</h2>
        <p>
          BSE Enlistment No.: <strong>{site.bseEnlistmentNo}</strong>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Principal officer</h2>
        <ul className="list-none space-y-1">
          <li>
            <strong>Name:</strong> {site.principalName}
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${site.email}`} className="text-blue-600 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            <strong>Phone (sales):</strong>{' '}
            <a href={`tel:${site.salesPhone}`} className="text-blue-600 hover:underline">
              {site.salesPhoneDisplay}
            </a>
          </li>
          <li>
            <strong>Address:</strong> {site.addressLine}
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Compliance officer</h2>
        <ul className="list-none space-y-1">
          <li>
            <strong>Name:</strong> {site.complianceOfficerName}
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${site.email}`} className="text-blue-600 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            <strong>Phone (sales):</strong>{' '}
            <a href={`tel:${site.salesPhone}`} className="text-blue-600 hover:underline">
              {site.salesPhoneDisplay}
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Grievances</h2>
        <p>
          For service-related queries or complaints, please write to {site.email} or call {site.salesPhoneDisplay}{' '}
          (sales). You may
          also use the SEBI SCORES portal for filing complaints as per SEBI guidelines.
        </p>
      </section>
    </LegalPageShell>
  );
};

export default CompliancePage;
