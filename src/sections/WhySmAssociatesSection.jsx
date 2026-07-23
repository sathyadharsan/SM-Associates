import { History, ShieldCheck, Landmark, CheckCircle2, Award } from 'lucide-react';
import { whyUsPoints } from '../data/flagshipHomeData';

const iconMap = { History, ShieldCheck, Landmark };

const pillarColors = [
  { bg: 'bg-[#0072bc]', shadow: 'bg-[#005f9e]', badgeText: 'text-[#0072bc]', badgeBg: 'bg-[#0072bc]/10' },
  { bg: 'bg-teal-600', shadow: 'bg-teal-700', badgeText: 'text-teal-600', badgeBg: 'bg-teal-600/10' },
  { bg: 'bg-indigo-600', shadow: 'bg-indigo-700', badgeText: 'text-indigo-600', badgeBg: 'bg-indigo-600/10' },
];

export default function WhySmAssociatesSection() {
  return (
    <section className="why6 bg-white py-24 lg:py-32 border-t border-b border-slate-200/90 relative overflow-hidden" id="why-us">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="fg-section-header mb-16 max-w-4xl text-center mx-auto">
          <span className="fg-eyebrow text-xs font-mono font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-4 py-2 rounded-full inline-block mb-3 border border-[#0072bc]/20 shadow-xs">
            ENTERPRISE OPERATING FRAMEWORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Sets Our Operating Model Apart.
          </h2>
          <p className="mt-4 text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Industrial scale, legal enforcement precision, and institutional-grade governance built specifically for Indian financial sector standards.
          </p>
        </div>

        {/* 3 Major Enterprise Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUsPoints.map((w, i) => {
            const Icon = iconMap[w.icon] || History;
            const pilNum = String(i + 1).padStart(2, '0');

            return (
              <div
                key={w.title}
                className="group relative flex flex-col justify-between rounded-[32px] border border-slate-200/90 bg-[#fafbfc] p-8 sm:p-9 shadow-sm hover:shadow-xl hover:border-[#0072bc]/40 transition-all duration-300 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0072bc]/10 text-[#0072bc] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#0072bc] bg-[#0072bc]/8 px-3 py-1 rounded-full border border-[#0072bc]/15">
                      PILLAR-{pilNum}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">{w.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{w.desc}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-700 font-mono">
                  <CheckCircle2 size={16} className="text-[#0072bc]" />
                  <span>Verified Operational Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-[28px] bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold tracking-tight">Need a customized recovery framework for your portfolio?</h4>
            <p className="text-slate-400 text-sm">Deploy pilot teams across 5 South Indian states within 48 hours.</p>
          </div>
          <a href="#cta" className="inline-flex items-center justify-center bg-[#0072bc] hover:bg-blue-600 text-white font-bold text-sm px-7 py-4 rounded-full transition-all duration-200 shrink-0 font-mono shadow-md">
            Request Pilot Proposal &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}



