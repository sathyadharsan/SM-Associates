import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Zap, BarChart2 } from 'lucide-react';

export default function CardShowcaseCtaSection() {
  const cards = [
    {
      title: 'Keep track of field visits',
      tag: 'Real-time GPS',
      desc: 'Live geo-fenced field officer tracking with instant visit verification.',
      icon: ShieldCheck,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Power of resolution analytics',
      tag: 'Predictive AI',
      desc: 'Identify high-recovery potential accounts and prioritize field actions.',
      icon: BarChart2,
      color: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Full control of compliance',
      tag: 'RBI & ISO 27001',
      desc: 'Audit-ready logs and code-of-conduct enforcement across every branch.',
      icon: Zap,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Flexibility for SARFAESI events',
      tag: 'NPA Resolution',
      desc: 'Seamless legal notices, public auctions, and physical possession management.',
      icon: Sparkles,
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="showcase-cta">
      <div className="fg-wrap max-w-6xl mx-auto px-4">
        {/* Top Horizontal Showcase Banner */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${c.color} text-white flex items-center justify-center font-bold mb-4 shadow-md`}>
                      <IconComp size={20} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {c.tag}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mt-3 leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Centered CTA Block */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[36px] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Subtle glow circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="allset-pill-tag bg-white/10 text-indigo-200 mb-4 inline-block">
              Institutional Partnership
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Give your institution financial resilience and set them up for growth
            </h2>
            <p className="text-indigo-200 text-lg mt-4 font-normal">
              Partner with South India's trusted enterprise recovery team. 25+ years of operational excellence, 19 live branches, 100+ partner institutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a className="allset-btn allset-btn-primary text-base px-8 py-4" href="#cta">
                Schedule a Consultation <span className="allset-btn-icon-circle"><ArrowRight size={16} /></span>
              </a>
              <a className="allset-btn allset-btn-secondary text-base px-8 py-4 !bg-transparent !text-white !border-white/30 hover:!border-white" href="tel:+914424350111">
                <PhoneCall size={16} /> Speak with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
