import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Landmark, Home, Users, CreditCard, Shield, Scale, Briefcase } from 'lucide-react';
import { industriesOverview } from '../data/flagshipHomeData';

const iconMap = {
  'Banking & Financial Institutions': Landmark,
  'Non-Banking Financial Companies': Building2,
  'Housing Finance Companies': Home,
  'Microfinance Institutions': Users,
  'Fintech & Digital Lenders': CreditCard,
  'Asset Reconstruction Companies': Scale,
  'Insurance Providers': Shield,
  'Commercial & SME Lenders': Briefcase,
};

export default function IndustriesServedSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-b border-slate-200/90 relative overflow-hidden" id="industries">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Compact Section Header */}
        <div className="fg-section-header">
          <span className="fg-section-eyebrow">
            WHO WE SERVE
          </span>
          <h2 className="fg-section-title">
            Built for regulated lenders, at scale.
          </h2>
          <p className="fg-section-subtitle">
            Deploying specialised recovery frameworks, certified field teams, and legal enforcement calibrated for 8 regulated lender segments.
          </p>
        </div>

        {/* Compact 4x2 Segment Grid (Zero wasted gap) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industriesOverview.map((ind, i) => {
            const Icon = iconMap[ind.name] || Landmark;
            const segNum = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={ind.href || '/industries'}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200 bg-slate-50/50 p-5 hover:bg-white hover:border-[#0072bc]/40 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0072bc]/10 text-[#0072bc] shrink-0">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                        SEG-{segNum}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">{ind.name}</h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-normal line-clamp-2">{ind.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#0072bc] font-mono uppercase tracking-wider group-hover:underline">
                      Explore Segment
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#0072bc] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
