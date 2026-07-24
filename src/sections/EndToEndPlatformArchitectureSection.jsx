import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Smartphone, Radar, Gavel, FileCheck2, BarChart3, ArrowUpRight } from 'lucide-react';

const MODULES = [
  {
    icon: Bot, span: 'lg:col-span-7', title: 'AI Assisted Recovery',
    desc: 'Outreach opens at machine scale before a single human call is placed.',
    items: ['AI Calling', 'Human Calling', 'WhatsApp', 'SMS', 'Email'],
  },
  {
    icon: Smartphone, span: 'lg:col-span-5', title: 'Digital Collections',
    desc: 'Every payment rail a borrower already uses, reconciled the same day.',
    items: ['UPI', 'PhonePe', 'QR', 'POS', 'Digital Receipts'],
  },
  {
    icon: Radar, span: 'lg:col-span-4', title: 'Field Intelligence',
    desc: 'Doorstep operations, verified — not self-reported.',
    items: ['GPS Tracking', 'Geo-tagged Visits', 'Live Officer Tracking'],
  },
  {
    icon: Gavel, span: 'lg:col-span-4', title: 'Legal Recovery',
    desc: 'Statutory enforcement, inside the timeline, every time.',
    items: ['SARFAESI', 'Section 138', 'Litigation', 'Auction Coordination'],
  },
  {
    icon: FileCheck2, span: 'lg:col-span-4', title: 'Verification Services',
    desc: 'Ground-truth checks before disbursal, not after default.',
    items: ['Residence', 'Office', 'Business', 'CPV', 'Document Verification'],
  },
  {
    icon: BarChart3, span: 'lg:col-span-12', wide: true, title: 'Analytics & Governance',
    desc: 'Live visibility and a regulator-ready record, on every account.',
    items: ['Recovery Dashboard', 'MIS', 'Audit Trail', 'Compliance Monitoring'],
  },
];

function ModuleCard({ mod }) {
  const Icon = mod.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className={`group rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#0072bc]/30 transition-shadow duration-300 ${mod.span}`}
    >
      <div className={`flex ${mod.wide ? 'flex-col sm:flex-row sm:items-start' : 'flex-col'} gap-5 min-w-0`}>
        <div className={`min-w-0 ${mod.wide ? 'sm:w-64 sm:shrink-0' : ''}`}>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0072bc]/8 text-[#0072bc] transition-transform duration-300 group-hover:rotate-6">
            <Icon size={22} strokeWidth={2.2} />
          </span>
          <h3 className="mt-4 text-lg font-extrabold text-slate-900 tracking-tight break-words">{mod.title}</h3>
          <p className="mt-1.5 text-[13px] text-slate-500 leading-relaxed max-w-sm break-words">{mod.desc}</p>
        </div>

        <div className={`min-w-0 flex flex-wrap gap-2 ${mod.wide ? 'sm:flex-1 sm:items-center' : 'mt-1'}`}>
          {mod.items.map((item) => (
            <span
              key={item}
              className="text-[11.5px] font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-3 py-1.5 rounded-full transition-colors duration-200 group-hover:border-[#0072bc]/25 group-hover:bg-[#0072bc]/5 group-hover:text-[#0072bc]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function EndToEndPlatformArchitectureSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-24 bg-[#fafbfc] border-t border-b border-slate-200/90 relative overflow-hidden">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="fg-section-header">
          <span className="fg-section-eyebrow">ENTERPRISE RECOVERY CAPABILITIES</span>
          <h2 className="fg-section-title">Six Modules. One Accountable Platform.</h2>
          <p className="fg-section-subtitle">Every execution capability SM Associates runs — grouped by function, not by feature count.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {MODULES.map((mod) => (
            <ModuleCard key={mod.title} mod={mod} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#0072bc]" />
          <span>Pan-South India · RBI Fair Practices Governed</span>
        </div>
      </div>
    </section>
  );
}
