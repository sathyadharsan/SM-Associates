import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    quote: "SM Associates delivered results that our internal team couldn't achieve in 3 years. Their SARFAESI execution and field coordination is unmatched across Tamil Nadu and Karnataka.",
    author: "Senior VP, Recovery",
    company: "Leading Private Sector Bank",
    type: "Banking",
    rating: 5,
    stat: "₹42 Cr Recovered",
    period: "in 8 months",
  },
  {
    quote: "The real-time GPS tracking and daily resolution dashboards gave us complete transparency. We finally had confidence in our field operations. SM Associates is our exclusive recovery partner.",
    author: "Head of Collections",
    company: "Major NBFC — South India",
    type: "NBFC",
    rating: 5,
    stat: "1,200+ Cases",
    period: "resolved in FY24",
  },
  {
    quote: "From NPA identification to physical possession under SARFAESI 13(4), their end-to-end support eliminated the need for multiple vendors. Compliance at every step was impeccable.",
    author: "Legal & Recovery Head",
    company: "Regional Cooperative Bank",
    type: "Banking",
    rating: 5,
    stat: "98% Compliance",
    period: "across all notices",
  },
  {
    quote: "Their field workforce is truly IIBF-certified and operates with a level of professionalism we haven't seen from any DRA. The RBI audit trail they maintain saved us significant regulatory exposure.",
    author: "CRO",
    company: "Top-Tier HFC",
    type: "HFC",
    rating: 5,
    stat: "Zero RBI Flags",
    period: "across 3 audits",
  },
  {
    quote: "SM Associates handled our MSME loan book recovery across 3 states simultaneously. Their 19-branch network meant zero execution gaps — something a single-city DRA could never offer.",
    author: "Portfolio Risk Manager",
    company: "Mid-Market NBFC",
    type: "NBFC",
    rating: 5,
    stat: "3 States",
    period: "simultaneously managed",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (idx) => {
    setDir(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => go(active === 0 ? testimonials.length - 1 : active - 1);
  const next = () => go(active === testimonials.length - 1 ? 0 : active + 1);

  const t = testimonials[active];

  return (
    <section className="py-28 bg-white relative overflow-hidden" id="testimonials">


      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 mb-5">
            <Building2 size={12} /> Client Testimonials
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted by India's<br />
            <span className="text-[#0072bc]">leading lenders</span>
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-lg mx-auto">
            From PSU banks to modern NBFCs — hear what our institutional partners say.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl shadow-2xl shadow-slate-200/80 p-10 md:p-14 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote size={40} className="text-[#0072bc]/20 mb-4" />
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4 flex-wrap">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0072bc] to-[#1a84c8] flex items-center justify-center text-white font-black text-lg shadow-md">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{t.author}</div>
                      <div className="text-slate-400 text-sm">{t.company}</div>
                    </div>
                    <span className="ml-auto text-xs font-bold text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full">
                      {t.type}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 bg-gradient-to-br from-[#0072bc] to-[#003a66] rounded-3xl p-8 text-white text-center min-w-[180px] md:min-w-[220px] shadow-xl shadow-[#0072bc]/25">
                  <div className="text-3xl md:text-4xl font-black leading-none mb-1">{t.stat}</div>
                  <div className="text-[#70bae3] text-sm font-medium mt-1">{t.period}</div>
                  <div className="mt-4 w-10 h-0.5 bg-white/20 mx-auto" />
                  <div className="text-white/60 text-xs mt-3 uppercase tracking-widest">Verified Result</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 h-2.5 bg-[#0072bc]' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-[#0072bc]/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={prev} className="w-12 h-12 rounded-2xl border-2 border-slate-200 hover:border-[#0072bc] hover:bg-[#0072bc] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-2xl bg-[#0072bc] text-white flex items-center justify-center hover:bg-[#005291] transition-colors duration-200 shadow-lg shadow-[#0072bc]/30">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}