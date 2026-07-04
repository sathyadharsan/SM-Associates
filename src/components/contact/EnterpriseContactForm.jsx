import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const ORG_TYPES = ['Bank', 'NBFC', 'Housing Finance Company', 'Fintech / Digital Lender', 'ARC', 'Insurance', 'Other Financial Institution'];
const SERVICES = ['Collections & Recovery', 'Field Verification (CPV)', 'Legal & SARFAESI Support', 'Asset Repossession & Auction', 'Due Diligence & Investigation', 'Manpower Sourcing', 'Facility Management', 'Other / Not Sure Yet'];
const PORTFOLIO_TYPES = ['Credit Cards', 'Personal Loans', 'Home Loans', 'Auto / Two-Wheeler Loans', 'Business / SME Loans', 'Microfinance / Group Loans', 'Mixed Portfolio', 'Other'];
const PORTFOLIO_SIZES = ['Under ₹10 Cr', '₹10 Cr – ₹50 Cr', '₹50 Cr – ₹200 Cr', '₹200 Cr – ₹500 Cr', 'Above ₹500 Cr'];
const CONTACT_METHODS = ['Phone Call', 'Email', 'WhatsApp'];
const CONTACT_TIMES = ['Morning (9 AM – 12 PM)', 'Afternoon (12 PM – 4 PM)', 'Evening (4 PM – 6:30 PM)'];

const fieldBase =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13.5px] text-slate-800 placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100';

function Field({ label, required, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
        {label}{required && <span className="text-brand-500"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function EnterpriseContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-white py-20 sm:py-24" id="enquiry">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-500">Request a Consultation</span>
          <h2 className="mt-3 font-sora text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Start an enterprise enquiry</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
            Tell us about your portfolio and requirement — our leadership team reviews every enquiry personally before responding with a structured proposal.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-card mt-12 overflow-hidden rounded-[26px] p-6 sm:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
              </span>
              <h3 className="mt-6 font-sora text-xl font-bold text-slate-900">Consultation request received</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                Thank you. A member of our enterprise team will reach out using your preferred contact method within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <input required type="text" className={fieldBase} placeholder="e.g. Priya Ramanathan" />
                </Field>
                <Field label="Designation" required>
                  <input required type="text" className={fieldBase} placeholder="e.g. Head of Collections" />
                </Field>
                <Field label="Company Name" required>
                  <input required type="text" className={fieldBase} placeholder="Institution name" />
                </Field>
                <Field label="Organization Type" required>
                  <select required className={fieldBase} defaultValue="">
                    <option value="" disabled>Select organization type</option>
                    {ORG_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Official Email" required>
                  <input required type="email" className={fieldBase} placeholder="name@company.com" />
                </Field>
                <Field label="Mobile Number" required>
                  <input required type="tel" className={fieldBase} placeholder="+91 XXXXX XXXXX" />
                </Field>
                <Field label="City" required>
                  <input required type="text" className={fieldBase} placeholder="City" />
                </Field>
                <Field label="State" required>
                  <input required type="text" className={fieldBase} placeholder="State" />
                </Field>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Service Required" required>
                  <select required className={fieldBase} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Portfolio Type">
                  <select className={fieldBase} defaultValue="">
                    <option value="" disabled>Select portfolio type</option>
                    {PORTFOLIO_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>
                <Field label="Approximate Portfolio Size" className="sm:col-span-2">
                  <select className={fieldBase} defaultValue="">
                    <option value="" disabled>Select an approximate range</option>
                    {PORTFOLIO_SIZES.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Preferred Contact Method">
                  <select className={fieldBase} defaultValue="">
                    <option value="" disabled>Select preferred method</option>
                    {CONTACT_METHODS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Contact Time">
                  <select className={fieldBase} defaultValue="">
                    <option value="" disabled>Select preferred time</option>
                    {CONTACT_TIMES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Business Requirement" required>
                <textarea required rows={4} className={fieldBase} placeholder="Briefly describe your requirement — portfolio scope, geography, timelines, or specific challenges." />
              </Field>

              <label className="flex items-start gap-3 text-[12.5px] leading-relaxed text-slate-500">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-500 focus:ring-brand-400"
                />
                I agree to the <a href="/about" className="font-semibold text-brand-600 underline underline-offset-2">Privacy Policy</a> and consent to being contacted regarding this enquiry.
              </label>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <p className="flex items-center gap-2 text-[11.5px] font-semibold text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" /> Confidential submission · No obligation
                </p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-brand-600 hover:shadow-enterpriseHover sm:w-auto"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
