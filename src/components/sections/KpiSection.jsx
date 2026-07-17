import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { resolveIcon } from './shared/icons';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Premium accent palette — rotated per card
const ACCENTS = [
  { color: '#3366FF', bg: 'rgba(51,102,255,0.08)',  bars: [42, 55, 60, 52, 68, 78, 92] },
  { color: '#16A34A', bg: 'rgba(22,163,74,0.08)',   bars: [38, 50, 58, 66, 62, 74, 88] },
  { color: '#7C3AED', bg: 'rgba(124,58,237,0.08)',  bars: [48, 60, 54, 68, 72, 80, 90] },
  { color: '#C8922A', bg: 'rgba(200,146,42,0.08)',  bars: [34, 46, 52, 58, 64, 70, 82] },
  { color: '#0891B2', bg: 'rgba(8,145,178,0.08)',   bars: [44, 56, 62, 58, 70, 76, 86] },
  { color: '#E11D48', bg: 'rgba(225,29,72,0.08)',   bars: [36, 48, 56, 62, 68, 72, 84] },
];

// Mini CSS sparkline
function Sparkline({ bars, color }) {
  return (
    <div className="flex items-end gap-[3px]" style={{ height: 24 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          className="rounded-sm flex-1"
          style={{
            height: `${h}%`,
            background: color,
            opacity: 0.2 + (i / bars.length) * 0.8,
          }}
        />
      ))}
    </div>
  );
}

// SVG ring progress
function RingProgress({ pct, color, size = 48 }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e8edf4" strokeWidth={5.5} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={5.5}
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
      />
    </svg>
  );
}

// Reads `content.kpiCards: [{icon, title, value}]`.
// Premium dashboard-style KPI cards with ring, sparkline, delta badge, and colored accent.
export default function KpiSection({ content }) {
  const items = content.kpiCards;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.kpi;

  return (
    <section className="py-24 bg-[#f4f6fb] border-y border-slate-100 relative overflow-hidden">
      {/* Subtle radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(51,102,255,0.04),_transparent_55%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">

        {/* Section header */}
        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.15 }} variants={fUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
            {content.kpiEyebrow || defaults.eyebrow}
          </span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-1">
            {content.kpiHeading || defaults.heading}
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-[15px]">
            {content.kpiSubheading || defaults.subheading}
          </p>
        </motion.div>

        {/* KPI card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((k, i) => {
            const Icon  = resolveIcon(k.icon);
            const meta  = ACCENTS[i % ACCENTS.length];
            const isDraft = k.value?.includes('[DRAFT]');

            return (
              <motion.div
                key={k.title}
                initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.15 }} variants={fUp}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 360, damping: 20 } }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-[#e8edf4] bg-white group cursor-default"
                style={{
                  boxShadow: '0 4px 20px -4px rgba(10,14,26,0.07)',
                }}
              >
                {/* Colored top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: meta.color }} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${meta.color}0d, transparent 65%)` }}
                />

                <div className="p-6 flex flex-col gap-4 relative">
                  {/* Row 1: Icon badge + ring */}
                  <div className="flex items-start justify-between">
                    <div
                      className="h-11 w-11 rounded-xl flex items-center justify-center shadow-sm border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: meta.bg, borderColor: `${meta.color}20` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: meta.color }} />
                    </div>
                    <div className="relative">
                      <RingProgress pct={70 + (i * 7) % 28} color={meta.color} size={44} />
                      <div
                        className="absolute inset-0 flex items-center justify-center font-bold"
                        style={{ fontSize: 8, color: meta.color }}
                      >
                        {70 + (i * 7) % 28}%
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Big value */}
                  {k.value && (
                    isDraft ? (
                      <div>
                        <span className="text-2xl font-extrabold text-amber-500">{k.value}</span>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded mt-1 inline-block ml-1">
                          Pending
                        </p>
                      </div>
                    ) : (
                      <span
                        className="text-3xl font-extrabold tracking-tight leading-none"
                        style={{ color: '#0a0e1a' }}
                      >
                        {k.value}
                      </span>
                    )
                  )}

                  {/* Row 3: Title + sub */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">{k.title}</h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mt-1 transition-colors duration-300 group-hover:text-blue-500"
                      style={{ color: '#94a3b8' }}>
                      Enterprise KPI
                    </p>
                  </div>

                  {/* Row 4: Sparkline */}
                  <div className="pt-3" style={{ borderTop: '1px solid #f1f5f9' }}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                        Performance
                      </span>
                      <span className="text-[9px] font-bold" style={{ color: meta.color }}>↑ Growing</span>
                    </div>
                    <Sparkline bars={meta.bars} color={meta.color} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
