import { FileText } from 'lucide-react';
import LegalPageShell from './LegalPageShell';
import { site } from '../config/site';

const DisclosuresPage = () => {
  return (
    <LegalPageShell title="Disclosures" lastUpdated="May 14, 2026" icon={FileText}>
      <section className="space-y-4">
        <p>
          The following disclosures apply to research and recommendation services offered by{' '}
          {site.companyLegalName} (&quot;{site.brandName}&quot;) through this website and associated channels.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">1. About the research analyst</h2>
        <p>
          {site.principalName} is a SEBI-registered Research Analyst (Reg. No. {site.sebiRegistrationNo}). BSE
          Enlistment No.: {site.bseEnlistmentNo}.
        </p>
        <p>
          Registered address: {site.addressLine}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">2. Nature of services</h2>
        <p>
          {site.brandName} provides research-based views and educational information on securities. Recommendations are
          not personalized investment advice unless formally agreed under a separate engagement. Past performance is not
          indicative of future results.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">3. Conflicts of interest</h2>
        <p>
          We maintain internal policies to identify and manage conflicts of interest. {site.principalName} and associates
          shall disclose material interests or holdings in recommended securities where required under applicable
          regulations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">4. Distribution and recipients</h2>
        <p>
          Research is distributed to subscribers and prospects who understand the risks of equity, derivatives, and
          commodity markets. Services are intended for residents of India unless stated otherwise.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">5. Updates</h2>
        <p>
          Disclosures may be updated from time to time. The &quot;Last updated&quot; date on this page reflects the most
          recent revision.
        </p>
      </section>
    </LegalPageShell>
  );
};

export default DisclosuresPage;
