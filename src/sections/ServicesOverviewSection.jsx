import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch, ArrowRight } from 'lucide-react';
import { servicesOverview } from '../data/flagshipHomeData';

const iconMap = { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch };

function ServiceCard({ s, index }) {
  const Icon = iconMap[s.icon] || Search;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Link
        to={s.href}
        className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#0072bc]/30 transition-shadow duration-300"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0072bc]/8 text-[#0072bc] transition-transform duration-300 group-hover:scale-110">
          <Icon size={22} strokeWidth={2.2} />
        </span>
        <h3 className="mt-4 text-base font-extrabold text-slate-900 tracking-tight">{s.name}</h3>
        <p className="mt-1.5 text-[13px] text-slate-500 leading-relaxed flex-1">{s.desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#0072bc]">
          Explore
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}

export default function ServicesOverviewSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-b border-slate-200/90 relative overflow-hidden" id="services">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="fg-section-header">
          <span className="fg-section-eyebrow">SERVICE CATEGORIES</span>
          <h2 className="fg-section-title">Six business divisions, one accountable partner.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesOverview.map((s, i) => (
            <ServiceCard key={s.name} s={s} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/services" className="text-[13px] font-bold text-[#0072bc] hover:underline">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
