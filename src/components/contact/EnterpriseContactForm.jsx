import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, CheckCircle2, ArrowRight,
  Clock, MessageSquare, ChevronRight, ExternalLink
} from 'lucide-react';
import { FlowButton } from '../ui/flow-button';
import { PRIMARY_CONTACT, COMPANY } from '../../data/contactOfficesData';
import { saveSubmission, createMailtoUrl } from '../../chatbot/leadTransport';

const SERVICES = [
  'Collections & Recovery',
  'Field Verification (CPV)',
  'Legal & SARFAESI Support',
  'Asset Repossession & Auction',
  'Due Diligence & Investigation',
  'Manpower Sourcing',
  'Other / Not Sure Yet',
];

/* ── Direct contact channels ────────────────────────────────────────────── */
const CHANNELS = [
  {
    icon: Phone,
    label: 'Call Us Directly',
    value: PRIMARY_CONTACT.landline,
    sub: 'Mon – Sat · 9:30 AM – 6:30 PM',
    href: `tel:${PRIMARY_CONTACT.landline}`,
    cta: 'Call Now',
    color: '#0072bc',
    bg: 'rgba(0, 114, 188,0.08)',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: PRIMARY_CONTACT.corporateEmail,
    sub: 'We respond within 1 business day',
    href: `mailto:${PRIMARY_CONTACT.corporateEmail}`,
    cta: 'Send Email',
    color: '#0072bc',
    bg: 'rgba(0, 114, 188, 0.08)',
  },
  {
    icon: MapPin,
    label: 'Head Office',
    value: 'Kotturpuram, Chennai – 600 085',
    sub: `${COMPANY.officeCount} offices · ${COMPANY.statesCovered.length} states`,
    href: 'https://www.google.com/maps/search/?api=1&query=Kotturpuram+Chennai',
    cta: 'Get Directions',
    color: '#0072bc',
    bg: 'rgba(0,114,188,0.08)',
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [form, setForm] = useState({ name: '', company: '', phone: '', service: '', message: '' });

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = saveSubmission('contact', form);
    setSubmissionResult({
      id: result.id,
      mailtoUrl: createMailtoUrl('contact', form),
    });
    setSubmitted(true);
  };

  const inputCls =
    'w-full rounded-xl border border-slate-300/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0072bc] focus:outline-none focus:ring-2 focus:ring-[#0072bc]/15';

  return (
    <section id="enquiry" className="relative bg-white py-24 sm:py-32">
      {/* subtle top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ── LEFT: Contact Info ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            {/* eyebrow */}
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#0072bc]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0072bc]/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0072bc]" />
              </span>
              Get in Touch
            </span>

            <h2 className="mt-4 font-sora text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Let&apos;s start a<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #0072bc 0%, #0072bc 100%)' }}
              >
                conversation.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-[15px] leading-7 text-slate-500">
              Reach out directly or fill the form — our leadership team personally reviews every enquiry.
            </p>

            {/* direct contact channels - Image 1 minimalist row design */}
            <div className="mt-10 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
              {/* Office Row */}
              <div className="flex items-center justify-between py-5 text-slate-800">
                <span className="font-medium text-slate-600 text-[15px] sm:text-base">Office</span>
                <p className="text-[15px] sm:text-base font-normal text-slate-800 text-right">
                  Kotturpuram, Chennai – 600 085
                </p>
              </div>

              {/* Email Row */}
              <div className="flex items-center justify-between py-5 text-slate-800">
                <span className="font-medium text-slate-600 text-[15px] sm:text-base">Email</span>
                <a
                  href={`mailto:${PRIMARY_CONTACT.corporateEmail}`}
                  className="text-[15px] sm:text-base font-normal text-slate-800 transition hover:text-[#0072bc] text-right"
                >
                  {PRIMARY_CONTACT.corporateEmail}
                </a>
              </div>

              {/* Phone Row */}
              <div className="flex items-center justify-between py-5 text-slate-800">
                <span className="font-medium text-slate-600 text-[15px] sm:text-base">Phone</span>
                <a
                  href={`tel:${PRIMARY_CONTACT.landline}`}
                  className="text-[15px] sm:text-base font-normal text-slate-800 transition hover:text-[#0072bc] text-right"
                >
                  {PRIMARY_CONTACT.landline}
                </a>
              </div>
            </div>

            {/* Follow Section (Image 1 Style) */}
            <div className="mt-7 flex items-center gap-4">
              <span className="font-bold text-slate-900 text-base">Follow:</span>
              <div className="flex items-center gap-3.5 text-slate-700">
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="text-slate-700 transition hover:text-[#FF0000]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919176954383"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="text-slate-700 transition hover:text-[#25D366]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Compact Form ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div
              className="relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-8 shadow-xs sm:p-10"
            >
              {/* decorative top bar */}
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-[28px]"
                style={{ background: '#0072bc' }}
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0072bc] shadow-md shadow-[#0072bc]/30">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </span>
                    <h3 className="mt-6 font-sora text-xl font-bold text-slate-900">Enquiry Recorded &amp; Queued!</h3>
                    <p className="mt-2 max-w-xs text-xs font-mono text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full border border-[#0072bc]/20">
                      Ref: {submissionResult?.id}
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                      Your mandate inquiry has been logged securely in our enterprise transport queue. Our operational team will contact you within 1 business day.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm">
                      <a
                        href={submissionResult?.mailtoUrl}
                        className="flex-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0072bc] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#005a96] shadow-sm"
                      >
                        <Mail className="h-4 w-4" /> Email Copy (Direct)
                      </a>
                      <a
                        href={`tel:${PRIMARY_CONTACT.landline}`}
                        className="flex-1 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
                      >
                        <Phone className="h-4 w-4" /> Call HQ Now
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <p className="font-sora text-xl font-bold text-slate-900">Send an Enquiry</p>
                      <p className="mt-1 text-xs text-slate-500 font-medium">Takes less than a minute · No obligation</p>
                    </div>

                    {/* Name + Company */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Your Name <span className="text-[#0072bc]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          required
                          type="text"
                          value={form.name}
                          onChange={set('name')}
                          placeholder="e.g. Priya Sharma"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Company <span className="text-[#0072bc]">*</span>
                        </label>
                        <input
                          id="contact-company"
                          required
                          type="text"
                          value={form.company}
                          onChange={set('company')}
                          placeholder="Institution / Bank / NBFC"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Mobile Number <span className="text-[#0072bc]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputCls}
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Service Needed <span className="text-[#0072bc]">*</span>
                      </label>
                      <select
                        id="contact-service"
                        required
                        value={form.service}
                        onChange={set('service')}
                        className={inputCls}
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Brief Requirement <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Describe your portfolio scope, geography or specific challenge…"
                        className={inputCls}
                      />
                    </div>

                    <div className="pt-2">
                      <FlowButton
                        type="submit"
                        text="Send Enquiry"
                        className="w-full justify-center"
                      />
                    </div>

                    <p className="text-center text-[11px] text-slate-400">
                      By submitting you agree to our Privacy Policy · Confidential &amp; Encrypted.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
