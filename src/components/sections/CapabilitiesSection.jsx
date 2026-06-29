import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.capabilities: [{title, desc, bullets[], businessOutcome}]`.
// Numbered circular badge on each card, matching the approved visual reference.
export default function CapabilitiesSection({ content }) {
  const items = content.capabilities;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.capabilities;

  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{content.capabilitiesHeading || defaults.heading}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-7 w-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-none">{i + 1}</span>
                <h3 className="font-bold text-slate-900">{c.title}</h3>
              </div>
              <ul className="space-y-1.5 mb-4">
                {c.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 flex-none" />
                    <span>{s.trim()}.</span>
                  </li>
                ))}
              </ul>
              {Array.isArray(c.bullets) && c.bullets.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 flex-none" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {c.businessOutcome && (
                <p className="text-xs font-semibold text-blue-600 border-t border-slate-200 pt-3">{c.businessOutcome}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
