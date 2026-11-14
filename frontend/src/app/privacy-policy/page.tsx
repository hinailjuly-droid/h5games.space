import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | h5games',
  description: 'Learn how h5games collects, uses, and safeguards user information, including our Google AdSense and cookie disclosures.',
  alternates: {
    canonical: 'https://h5games.space/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-2">
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: November 13, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">1. Introduction</h2>
          <p>
            At <strong>h5games</strong> (accessible at <span className="font-mono text-blue-600">https://h5games.space</span>), the privacy of our visitors is of paramount importance. This Privacy Policy outlines the types of information collected and recorded by h5games and how we use it.
          </p>
          <p>
            h5games operates as an open generative AI prompt discovery directory and educational knowledge base. We do not require account creation, login credentials, or personal identity submission to access our prompt collections and tutorials.
          </p>
        </section>

        {/* Section 2: AdSense & Third-Party Cookies */}
        <section className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">2. Google AdSense & Cookie Disclosures</h2>
          <p>
            h5games uses Google AdSense and third-party advertising partners to serve advertisements when you visit our website. These companies may use cookies, web beacons, and similar tracking technologies to serve ads based on your prior visits to this website or other websites on the Internet:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google DART Cookie:</strong> Google, as a third-party vendor, uses cookies to serve ads on h5games. Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visits to our site and/or other sites on the Internet.
            </li>
            <li>
              <strong>Opt-Out Options:</strong> Users may opt out of personalized advertising by visiting Google&apos;s Ads Settings (<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.google.com/settings/ads</a>) or by visiting the Network Advertising Initiative opt-out page (<a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">networkadvertising.org</a>).
            </li>
          </ul>
        </section>

        {/* Section 3: Data We Do Not Collect */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">3. Data We Do Not Collect</h2>
          <p>
            Because h5games does not operate mandatory user registrations, subscription paywalls, or credit card processing, we do not collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Personal names or physical addresses (unless voluntarily submitted via our contact form).</li>
            <li>Payment card credentials, banking details, or billing records.</li>
            <li>Social security numbers or government identification.</li>
          </ul>
        </section>

        {/* Section 4: Log Files & Anonymous Analytics */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">4. Log Files & Analytics</h2>
          <p>
            Like most modern web services, h5games utilizes standard log files and privacy-focused server analytics. The information inside log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and click counts. This data is not linked to any personally identifiable information and is used solely for analyzing trends, administering the site, and ensuring server security.
          </p>
        </section>

        {/* Section 5: GDPR & CCPA Rights */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">5. GDPR & CCPA Privacy Rights</h2>
          <p>
            Depending on your location, you may possess rights under the European Union General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA), including the right to request disclosure of collected data categories, request deletion of voluntarily submitted contact data, and request non-discrimination for exercising privacy rights.
          </p>
          <p>
            To exercise any of these rights, please contact us via our <a href="/contact" className="text-blue-600 underline">Contact Page</a>.
          </p>
        </section>

        {/* Section 6: Children's Privacy */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">6. Children&apos;s Information</h2>
          <p>
            h5games does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will promptly remove such records.
          </p>
        </section>
      </div>
    </div>
  );
}
