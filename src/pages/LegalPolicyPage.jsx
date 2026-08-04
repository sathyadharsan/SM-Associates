import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Cookie, FileText, ArrowLeft, Download, Mail } from 'lucide-react';

const TABS = [
  { id: 'privacy-policy', label: 'Privacy Policy', path: '/privacy-policy', icon: Lock },
  { id: 'cookie-policy', label: 'Cookie Policy', path: '/cookie-policy', icon: Cookie },
  { id: 'terms-of-use', label: 'Terms of Use', path: '/terms-of-use', icon: FileText },
];

export default function LegalPolicyPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine initial tab based on path
  const getActiveTabFromPath = (pathname) => {
    if (pathname.includes('cookie')) return 'cookie-policy';
    if (pathname.includes('terms')) return 'terms-of-use';
    return 'privacy-policy';
  };

  const [activeTab, setActiveTab] = useState(() => getActiveTabFromPath(location.pathname));

  useEffect(() => {
    setActiveTab(getActiveTabFromPath(location.pathname));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-20 font-sans">
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200/80 pt-10 pb-12 shadow-xs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#0072bc] transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#0072bc] mb-3">
                <ShieldCheck className="h-3.5 w-3.5" />
                Enterprise Compliance & Legal Framework
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {activeTab === 'privacy-policy' && 'Privacy Policy'}
                {activeTab === 'cookie-policy' && 'Cookie Policy'}
                {activeTab === 'terms-of-use' && 'Terms of Use'}
              </h1>
              <p className="mt-2 text-sm text-slate-500 font-medium">
                Effective Date: January 2026 • Compliant with RBI Guidelines & ISO/IEC 27001 Data Security Standards
              </p>
            </div>

          </div>

          {/* Tab Navigation Pill Bar */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pt-2 pb-0">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab)}
                  className={`flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer ${
                    isActive
                      ? 'border-[#0072bc] text-[#0072bc] bg-blue-50/40 rounded-t-xl'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-t-xl'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-[#0072bc]' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main Document Body */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">

          <AnimatePresence mode="wait">
            {activeTab === 'privacy-policy' && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    1. Information We Collect & Data Governance
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    SM Associates Risk Management Pvt Ltd (&quot;SM Associates&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) respects the privacy and confidentiality of borrowers, institutional lenders, and website users. In our capacity as an empanelled recovery management agency for scheduled commercial banks, NBFCs, and financial institutions, we collect and process data strictly under authorization and in compliance with RBI Fair Practices Code and statutory laws.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 font-medium list-disc list-inside pt-2">
                    <li><strong className="text-slate-900">Empanelled Portfolio Data:</strong> Name, contact numbers, address, loan account details, outstanding balances, and repayment telemetry shared by lending partners.</li>
                    <li><strong className="text-slate-900">Verification & Field Telemetry:</strong> Geotagged timestamps, field visit logs, digital verification photos, and GPS audit trails captured by IIBF DRA certified agents.</li>
                    <li><strong className="text-slate-900">Call Audit Telemetry:</strong> 100% recorded call logs and IVR interactions conducted via our centralized secure call center infrastructure.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    2. How We Use Collected Information
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    All collected information is utilized solely for legitimate institutional recovery, debt resolution, SARFAESI notice serving, and identity verification purposes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="font-bold text-slate-900 text-sm">Portfolio Resolution</div>
                      <div className="text-xs text-slate-500 mt-1">Executing soft collections, field visits, and amicable NPA recovery schedules.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="font-bold text-slate-[#0072bc] text-sm">Regulatory Compliance & Audits</div>
                      <div className="text-xs text-slate-500 mt-1">Providing auditable call recordings and geotagged field reports to bank audit committees.</div>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    3. Information Security & ISO 27001 Protocol
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    SM Associates operates under strict <strong className="text-slate-900">ISO/IEC 27001 Information Security Management Systems</strong> standards. Data stored within our enterprise cloud infrastructure is encrypted using AES-256 at rest and TLS 1.3 in transit. We maintain role-based access control (RBAC), multi-factor authentication (MFA), and zero-trust perimeter network security.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    4. Data Retention & Third-Party Non-Disclosure
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    We <strong className="text-slate-900">never sell, rent, or trade</strong> borrower or partner information to third-party brokers or marketing agencies. Data is retained only for the duration specified under banking mandate contracts or statutory requirement limitations, after which it undergoes secure cryptographic purge.
                  </p>
                </section>

                <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">Data Protection Officer Contact</div>
                    <div className="text-xs text-slate-600 mt-0.5">For privacy inquiries or compliance verification, contact our DPO office.</div>
                  </div>
                  <a
                    href="mailto:smarmpl.ho@gmail.com"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0072bc] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors shrink-0"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>smarmpl.ho@gmail.com</span>
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === 'cookie-policy' && (
              <motion.div
                key="cookie"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    1. Overview of Cookie Usage
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    This Cookie Policy explains how SM Associates uses cookies, web beacons, and telemetry tokens when you visit our website or interact with our portal. Cookies help us optimize platform performance, maintain session security, and analyze aggregate visitor traffic.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    2. Types of Cookies We Deploy
                  </h2>
                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-900 text-sm">Essential & Security Cookies</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-[#0072bc] px-2.5 py-0.5 rounded-full">Always Active</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Required for core website navigation, authentication tokens, CSRF protection, and load balancing across operational servers.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-900 text-sm">Analytics & Telemetry Cookies</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">Performance</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Collect anonymized statistics regarding page view latency, error tracking, and user navigation paths to help us enhance system responsiveness.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    3. Managing Your Cookie Preferences
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    You can control or disable non-essential cookies at any time through your browser settings. Please note that disabling essential cookies may impact specific portal features or security authentication states.
                  </p>
                </section>
              </motion.div>
            )}

            {activeTab === 'terms-of-use' && (
              <motion.div
                key="terms"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    1. Agreement & Operational Scope
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    By accessing or using the services, website, or portal of SM Associates Risk Management Pvt Ltd, you agree to be bound by these Terms of Use and all applicable Indian laws and regulatory frameworks, including guidelines issued by the Reserve Bank of India (RBI) and the SARFAESI Act, 2002.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    2. Institutional Code of Conduct & Fair Recovery Practice
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    SM Associates operates under strict adherence to RBI Fair Practices Code for Lenders and Debt Recovery Agents:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 font-medium list-disc list-inside pt-2">
                    <li>All field recovery personnel hold valid IIBF Debt Recovery Agent (DRA) certification.</li>
                    <li>No harassment, abusive language, or non-permitted calling hours (7:00 AM – 7:00 PM standard limit enforced).</li>
                    <li>All customer contacts, visits, and recovery receipts are logged with digital verification trails.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    3. Intellectual Property Rights
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    All website contents, trade names, brand assets, operational frameworks, and proprietary software interfaces are the exclusive intellectual property of SM Associates Risk Management Pvt Ltd. Unauthorized copying or redistribution is strictly prohibited.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section className="space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                    4. Governing Law & Jurisdiction
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    These terms are governed by the laws of India. Any legal proceedings or disputes arising out of or related to our services shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-slate-900">Chennai, Tamil Nadu, India</strong>.
                  </p>
                </section>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
