import { MessageSquareWarning, FileSpreadsheet } from 'lucide-react';
import LegalPageShell from './LegalPageShell';
import { site } from '../config/site';

const complaintDataRows = [
  { source: 'Directly from Investors' },
  { source: 'SEBI (SCORES)' },
  { source: 'Other Sources (if any)' },
] as const;

const zeroComplaintMetrics = {
  pendingLastMonth: 0,
  received: 0,
  resolved: 0,
  totalPending: 0,
  pendingOver3Months: 0,
  avgResolutionDays: 0,
};

/** e.g. current May → "April 2026", current July → "June 2026" */
function getPreviousMonthLabel(date = new Date()): string {
  const previousMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  return previousMonth.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
}

const GrievanceBoardPage = () => {
  const complaintDataMonthLabel = getPreviousMonthLabel();

  return (
    <LegalPageShell title="Grievance Board" lastUpdated="May 14, 2026" icon={MessageSquareWarning}>
      <section className="space-y-4">
        <p>
          {site.companyLegalName} is committed to resolving client grievances in a fair and timely manner. If you have a
          complaint regarding our research services, billing, or conduct, please use the channels below.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600">
            <FileSpreadsheet className="h-5 w-5 text-white" aria-hidden />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Complaint Data</h2>
            <p className="text-sm text-gray-500 mt-0.5">Data for the month – {complaintDataMonthLabel}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-gray-700">
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">Sr. No.</th>
                  <th className="px-3 py-3 font-semibold min-w-[140px]">Received From</th>
                  <th className="px-3 py-3 font-semibold text-center whitespace-nowrap">
                    Pending at the end of Last Month
                  </th>
                  <th className="px-3 py-3 font-semibold text-center">Received</th>
                  <th className="px-3 py-3 font-semibold text-center">Resolved*</th>
                  <th className="px-3 py-3 font-semibold text-center whitespace-nowrap">Total Pending#</th>
                  <th className="px-3 py-3 font-semibold text-center whitespace-nowrap">
                    Pending complaints &gt; 3 months
                  </th>
                  <th className="px-3 py-3 font-semibold text-center whitespace-nowrap">
                    Average Resolution time^ (in days)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {complaintDataRows.map((row, index) => (
                  <tr key={row.source} className="text-gray-800">
                    <td className="px-3 py-3 text-center font-medium">{index + 1}</td>
                    <td className="px-3 py-3">{row.source}</td>
                    <td className="px-3 py-3 text-center">{zeroComplaintMetrics.pendingLastMonth}</td>
                    <td className="px-3 py-3 text-center">{zeroComplaintMetrics.received}</td>
                    <td className="px-3 py-3 text-center">{zeroComplaintMetrics.resolved}</td>
                    <td className="px-3 py-3 text-center">{zeroComplaintMetrics.totalPending}</td>
                    <td className="px-3 py-3 text-center">{zeroComplaintMetrics.pendingOver3Months}</td>
                    <td className="px-3 py-3 text-center">{zeroComplaintMetrics.avgResolutionDays}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
          <li>* Resolved: Complaints resolved during the current month</li>
          <li># Total Pending: Pending complaints at the end of current month</li>
          <li>^ Average Resolution time: Average time taken to resolve complaints in days</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">How to lodge a grievance</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Email{' '}
            <a href={`mailto:${site.complianceOfficerEmail}`} className="text-blue-600 hover:underline">
              {site.complianceOfficerEmail}
            </a>{' '}
            with your name, registered mobile number, and a brief description of the issue.
          </li>
          <li>
            Call{' '}
            <a href={`tel:${site.officerPhone}`} className="text-blue-600 hover:underline">
              {site.officerPhoneDisplay}
            </a>{' '}
            during business hours and ask for the compliance desk.
          </li>
          <li>
            For unresolved matters, you may escalate through the SEBI SCORES portal as per applicable SEBI guidelines.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Compliance officer</h2>
        <ul className="list-none space-y-1">
          <li>
            <strong>Name:</strong> {site.complianceOfficerName}
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${site.complianceOfficerEmail}`} className="text-blue-600 hover:underline">
              {site.complianceOfficerEmail}
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href={`tel:${site.officerPhone}`} className="text-blue-600 hover:underline">
              {site.officerPhoneDisplay}
            </a>
          </li>
          <li>
            <strong>Address:</strong> {site.addressLine}
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Expected resolution timeline</h2>
        <p>
          We aim to acknowledge grievances within 3 business days and provide a substantive response within 15 business
          days, subject to complexity and regulatory requirements.
        </p>
      </section>
    </LegalPageShell>
  );
};

export default GrievanceBoardPage;
