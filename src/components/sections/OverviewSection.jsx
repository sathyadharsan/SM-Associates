import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.overview: {heading, subheading, summary, outcomes[], useCases[]}`.
export default function OverviewSection({ content }) {
  const overview = content.overview;
  if (!overview) return null;
  const defaults = SECTION_DEFAULTS.overview;

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp} className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
            <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3 mb-2">{overview.heading}</h2>
            {overview.subheading && <p className="text-blue-600 font-semibold mb-5">{overview.subheading}</p>}
            <p className="text-slate-600 leading-relaxed">{overview.summary}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {(overview.outcomes || []).map((o) => (
              <div key={o.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mb-2" />
                <h4 className="font-bold text-sm text-slate-900 mb-1">{o.title}</h4>
                <ul className="space-y-1.5 mt-2">
                  {o.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-none" />
                      <span>{s.trim()}.</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {(overview.useCases || []).map((u) => (
              <div key={u.title} className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-bold text-sm text-slate-900 mb-1">{u.title}</h4>
                <ul className="space-y-1.5 mt-2">
                  {u.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 flex-none" />
                      <span>{s.trim()}.</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
