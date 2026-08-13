import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Copy, Check, Clock } from 'lucide-react';
import { PRIMARY_CONTACT, COMPANY } from '../../data/contactOfficesData';

function CopyChip({ value }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10.5px] font-semibold text-slate-500 transition hover:border-brand-400 hover:text-brand-600"
    >
      {copied ? <Check className="h-3 w-3 text-brand-500" /> : <Copy className="h-3 w-3" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

const cards = [
  {
    icon: Phone,
    title: 'Call Us',
    accent: '#0072bc',
    rows: [
      { label: 'Corporate Landline', value: PRIMARY_CONTACT.landline },
      { label: 'HR & Careers Desk', value: PRIMARY_CONTACT.hrHelpdesk },
    ],
    footer: 'Business Hours: Mon–Sat, 9:30 AM – 6:30 PM IST',
    note: 'Enterprise enquiries are typically acknowledged within one business day.',
  },
  {
    icon: Mail,
    title: 'Email Us',
    accent: '#0072bc',
    rows: [
      { label: 'Corporate Office', value: PRIMARY_CONTACT.corporateEmail },
      { label: 'Head Office', value: PRIMARY_CONTACT.headOfficeEmail },
    ],
    footer: 'For department-specific routing, mention it in your enquiry below.',
    note: 'We respond to institutional enquiries within 1–2 business days.',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    accent: '#0072bc',
    rows: [
      { label: 'Corporate Office', value: 'Kotturpuram, Chennai – 600 085' },
      { label: 'Network', value: `${COMPANY.officeCount} offices across ${COMPANY.statesCovered.length} states` },
    ],
    footer: 'Office Hours: Mon–Sat, 9:30 AM – 6:30 PM IST',
    note: 'Business meetings are by appointment — please schedule ahead via the form.',
  },
];

export default function ContactOptionCards() {
  return (
    <section className="relative bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0072bc]">Reach Us Directly</span>
          <h2 className="mt-3 font-sora text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Three ways to start a conversation</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[22px] border border-slate-200/90 bg-white p-7 shadow-xs transition duration-200"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: c.accent }}
                />
                <span
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0072bc]/10 text-[#0072bc]"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 font-sora text-lg font-bold text-slate-900">{c.title}</h3>

                <div className="relative mt-5 space-y-3.5 divide-y divide-slate-100">
                  {c.rows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between gap-3 pt-3.5 first:pt-0">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{r.label}</p>
                        <p className="mt-0.5 text-sm font-medium text-slate-800">{r.value}</p>
                      </div>
                      <CopyChip value={r.value} />
                    </div>
                  ))}
                </div>

                <p className="relative mt-5 flex items-start gap-1.5 text-xs font-medium text-slate-500">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                  {c.footer}
                </p>
                <p className="relative mt-2.5 text-xs leading-relaxed text-slate-400">{c.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
