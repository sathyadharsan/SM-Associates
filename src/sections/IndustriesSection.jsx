import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { industries } from '../data/homeData';
import { getIcon } from '../utils/icons.jsx';

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const active = industries[activeIndustry];

  const handleScrollTo = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="relative py-20 sm:py-24 lg:py-28" style={{ background: '#f6f8fb' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #0072bc, transparent)' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industry Solutions"
          title="Recovery operations built for every lending segment."
          description="Our operating model is designed for banks, NBFCs, housing finance companies, fintech lenders, ARCs and corporate lending institutions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-gray-200 bg-white p-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {industries.map((industry, index) => (
                <button
                  key={industry.title}
                  onClick={() => setActiveIndustry(index)}
                  className={`flex items-center gap-4 rounded-2xl p-4 text-left transition duration-300 ${
                    activeIndustry === index
                      ? 'shadow-enterprise text-gray-950'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-950'
                  }`}
                  style={activeIndustry === index ? { background: '#0072bc', color: '#ffffff' } : {}}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    activeIndustry === index ? 'bg-white/20' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {getIcon(industry.icon)}
                  </div>
                  <div>
                    <p className="font-bold">{industry.title}</p>
                    <p className={`text-sm ${activeIndustry === index ? 'opacity-70' : 'text-gray-400'}`}>
                      {industry.cta}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -28, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-8 sm:p-10"
            >
              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0072bc, transparent)' }} />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0072bc]/12 text-[#0072bc]">
                  {getIcon(active.icon)}
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.26em] text-[#0072bc]">Industry Solution</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-gray-950">{active.title}</h3>
                <p className="mt-5 text-lg leading-8 text-gray-500">{active.description}</p>

                <div className="mt-8 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
                  {['Recovery', 'Collections', 'Verification'].map(item => (
                    <div key={item} className="flex items-center justify-between py-3.5">
                      <p className="text-sm font-semibold text-slate-800">{item}</p>
                      <p className="text-xs text-slate-500">Operating layer for lender-specific mandates</p>
                    </div>
                  ))}
                </div>

                <a href="#contact" onClick={handleScrollTo('#contact')} className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072bc] transition hover:text-slate-900">
                  Discuss {active.title} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
