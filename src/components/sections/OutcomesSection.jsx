import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

export default function OutcomesSection({ content }) {
  const items = content.outcomes;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.outcomes;

  return (
    <section className="py-20 lg:py-28 bg-[#fafbfc] border-y border-slate-200/80 relative overflow-hidden" id="outcomes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1.5 rounded-full inline-block mb-3">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-1">{content.outcomesHeading || defaults.heading}</h2>
        </motion.div>

        {/* ── Audit Evidence Showcase ── */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden divide-y divide-slate-100">
          {items.map((o, i) => (
            <motion.div
              key={o.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-start gap-4 flex-1">
                <span className="w-10 h-10 rounded-xl bg-[#0072bc]/10 text-[#0072bc] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={20} />
                </span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0072bc]">
                      OUTCOME RESULT 0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{o.title}</h3>
                  <ul className="space-y-1">
                    {o.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc] mt-1.5 flex-none" />
                        <span>{s.trim()}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {o.value && (
                <div className="md:border-l md:border-slate-100 md:pl-6 flex flex-col items-start md:items-end flex-shrink-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">MEASURED BENCHMARK</span>
                  <span className="text-sm font-bold text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    {o.value}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

