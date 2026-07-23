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
    <section className="why6 bg-[#fafbfc] py-20 lg:py-28 border-t border-b border-gray-200/80 relative overflow-hidden" id="why-us">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="fg-section-header mb-14 max-w-3xl text-center mx-auto">
          <span className="fg-eyebrow text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Why SM Associates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What sets the operating<br />model apart.
          </h2>
        </div>

        {/* ── Folded Ribbon / Stepped Value Infographic System ── */}
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Executive Intro Banner */}
          <div className="bg-white border-l-4 border-l-[#0072bc] border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-3xl">
              We bring industrial scale, legal precision, and institutional-grade compliance to recovery operations across South India, protecting lender reputation at every step.
            </p>
            <div className="flex-shrink-0 bg-[#0072bc]/10 border border-[#0072bc]/20 text-[#0072bc] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Award size={16} /> 100% Compliant Guarantee
            </div>
          </div>

          {/* Stepped Ribbon Pillars */}
          <div className="space-y-4 pt-4">
            {whyUsPoints.map((w, i) => {
              const Icon = iconMap[w.icon] || History;
              const color = pillarColors[i % pillarColors.length];

              return (
                <div
                  key={w.title}
                  className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch group hover:border-[#0072bc]/40 transition-colors"
                >
                  {/* Folded Number Tag Banner with Distinct Pillar Color */}
                  <div className={`w-full md:w-48 ${color.bg} text-white p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0`}>
                    <span className="text-3xl font-black opacity-30">0{i + 1}</span>
                    <div className="flex items-center gap-2">
                      <Icon size={20} />
                      <span className="text-xs font-extrabold uppercase tracking-widest">
                        PILLAR 0{i + 1}
                      </span>
                    </div>
                    {/* Ribbon Fold Edge Shadow */}
                    <div className={`hidden md:block absolute -right-3 top-0 bottom-0 w-3 ${color.shadow}`} />
                  </div>

                  {/* Ribbon Body Content (100% Preserved) */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white">
                    <div className="space-y-1.5 max-w-2xl">
                      <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{w.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{w.desc}</p>
                    </div>

                    <div className={`flex items-center gap-1.5 text-xs font-bold ${color.badgeText} ${color.badgeBg} px-3 py-1.5 rounded-lg flex-shrink-0`}>
                      <CheckCircle2 size={14} /> Institutional Standard
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}



