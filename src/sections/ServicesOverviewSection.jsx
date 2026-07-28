import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall, Gavel, Search, FileSearch, Warehouse, RefreshCw, ArrowRight } from 'lucide-react';
import { servicesOverview } from '../data/flagshipHomeData';

const iconMap = { PhoneCall, Gavel, Search, FileSearch, Warehouse, RefreshCw };

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
        className="flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
      >
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0072bc] mb-6 transition-transform duration-300 group-hover:scale-105">
            <Icon size={24} strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">{s.name}</h3>
          <p className="mt-2.5 text-sm text-slate-500 leading-relaxed font-normal">{s.desc}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[12.5px] font-bold text-[#0072bc]">
            Explore Service
          </span>
          <ArrowRight size={15} className="text-[#0072bc] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
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
          <h2 className="fg-section-title">Six Portfolio Management Capabilities. One Reliable Partner.</h2>
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
