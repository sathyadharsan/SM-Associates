import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import SectionHeader from '../components/SectionHeader';
import { kpis } from '../data/homeData';

// ── Shared micro-components ────────────────────────────────────────

function Sparkline({ bars, color = '#0072bc', height = 32 }) {
  return (
    <div className="flex items-end gap-[3px]" style={{ height }}>
      {bars.map((h, i) => (
        <div
          key={i}
          className="rounded-sm flex-1"
          style={{
            height: `${h}%`,
            background: color,
            opacity: 0.22 + (i / bars.length) * 0.78,
            transition: 'height 0.6s ease',
          }}
        />
      ))}
    </div>
  );
}

function RingProgress({ pct, color = '#0072bc', size = 52 }) {
  const r = (size - 7) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth={6} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={6}
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
      />
    </svg>
  );
}

function DeltaBadge({ label, color, up = true }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold whitespace-nowrap"
      style={{ background: `${color}15`, color }}
    >
      <span>{up ? '▲' : '▼'}</span>
      {label}
    </span>
  );
}

// ── Per-card premium data augmentation ────────────────────────────
const cardMeta = [
  // Large card: 24+ Years
  {
    color: '#0072bc', bars: [38, 50, 62, 56, 72, 80, 94], ring: 92,
    delta: 'Est. 2000', category: 'Legacy', accent: 'bg-brand-500 text-brand-500',
  },
  // Tall card: 1,200+ Professionals
  {
    color: '#0072bc', bars: [42, 55, 50, 65, 60, 74, 88], ring: 88,
    delta: '+18% YoY', category: 'Workforce', accent: 'bg-brand-500 text-brand-500',
  },
  // Wide card: Tamil Nadu Wide (no value)
  {
    color: '#0072bc', bars: [55, 60, 58, 68, 72, 78, 85], ring: 78,
    delta: 'Pan South', category: 'Coverage', accent: 'bg-brand-500 text-brand-500',
  },
  // Standard: 20+ Banks & NBFCs
  {
    color: '#0072bc', bars: [45, 52, 60, 55, 68, 76, 90], ring: 90,
    delta: '+12 New', category: 'Partners', accent: 'bg-brand-500 text-brand-500',
  },
  // Standard: 5 Core Verticals
  {
    color: '#0072bc', bars: [40, 48, 55, 52, 62, 68, 80], ring: 80,
    delta: 'Full Suite', category: 'Services', accent: 'bg-cyan-50 text-cyan-700',
  },
];

const bentoClasses = {
  large:    'lg:col-span-6 lg:row-span-2',
  tall:     'lg:col-span-3 lg:row-span-2',
  wide:     'lg:col-span-6',
  standard: 'lg:col-span-3',
};

export default function KPISection() {
  return (
    <section className="bg-[#f4f6fb] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Operational Scale. Measurable Trust."
          title="Two decades of recovery and risk operations excellence."
          description="A field-led and technology-enabled risk operations partner with deep experience across recovery, collections, repossession, auctions, verification and legal coordination."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {kpis.map((kpi, index) => {
            const cls = bentoClasses[kpi.size] || bentoClasses.standard;
            const meta = cardMeta[index] || cardMeta[0];
            const isLarge = kpi.size === 'large';
            const isTall  = kpi.size === 'tall';
            const isWide  = kpi.size === 'wide';
            const isFeatured = isLarge || isTall;

            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
                className={`relative overflow-hidden rounded-[24px] border group cursor-default ${cls}`}
                style={{
                  background: isFeatured ? '#0a0e1a' : '#ffffff',
                  borderColor: isFeatured ? 'rgba(255,255,255,0.07)' : '#e8edf4',
                  boxShadow: isFeatured
                    ? `0 24px 60px -12px rgba(10,14,26,0.45), 0 0 0 1px rgba(255,255,255,0.05)`
                    : '0 4px 20px -4px rgba(10,14,26,0.08)',
                }}
              >
                {/* ── Colored top accent stripe ── */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: meta.color }}
                />

                {/* ── Hover glow overlay ── */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 60% 0%, ${meta.color}${isFeatured ? '22' : '0e'}, transparent 65%)`,
                  }}
                />

                {/* ── Background grid (featured only) ── */}
                {isFeatured && (
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(${meta.color} 1px, transparent 1px), linear-gradient(90deg, ${meta.color} 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />
                )}

                <div className={`relative h-full flex flex-col ${isFeatured ? 'p-8' : 'p-6'}`}>

                  {/* ── Header row: category badge + delta ── */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${meta.accent}`}
                      style={isFeatured ? { background: `${meta.color}22`, color: meta.color } : {}}
                    >
                      {meta.category}
                    </span>
                    <DeltaBadge label={meta.delta} color={meta.color} />
                  </div>

                  {/* ── Main metric: value + ring ── */}
                  <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex flex-col justify-center">
                      {kpi.value ? (
                        <>
                          <div
                            className="font-extrabold tracking-[-0.045em] leading-none"
                            style={{
                              fontSize: isLarge ? 'clamp(52px, 6vw, 80px)'
                                       : isTall  ? 'clamp(44px, 4.5vw, 64px)'
                                       : 'clamp(32px, 3vw, 44px)',
                              color: isFeatured ? '#ffffff' : '#0a0e1a',
                            }}
                          >
                            <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
                          </div>
                          <p
                            className="mt-3 font-semibold leading-snug"
                            style={{
                              fontSize: isFeatured ? 16 : 14,
                              color: isFeatured ? 'rgba(255,255,255,0.75)' : '#1e293b',
                            }}
                          >
                            {kpi.label}
                          </p>
                        </>
                      ) : (
                        <>
                          <div
                            className="font-extrabold tracking-[-0.04em] leading-none"
                            style={{
                              fontSize: 'clamp(28px, 3vw, 40px)',
                              color: meta.color,
                            }}
                          >
                            {kpi.label}
                          </div>
                          <p className="mt-2 text-sm text-slate-500 font-medium">Coverage Zone</p>
                        </>
                      )}

                      <p
                        className="mt-3 leading-relaxed max-w-sm"
                        style={{
                          fontSize: 13,
                          color: isFeatured ? 'rgba(255,255,255,0.48)' : '#64748b',
                        }}
                      >
                        {kpi.description}
                      </p>
                    </div>

                    {/* Ring progress (right side) */}
                    <div className="relative flex-shrink-0 self-start mt-1">
                      <RingProgress
                        pct={meta.ring}
                        color={meta.color}
                        size={isFeatured ? 64 : 52}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center font-bold"
                        style={{
                          fontSize: isFeatured ? 11 : 9,
                          color: meta.color,
                        }}
                      >
                        {meta.ring}%
                      </div>
                    </div>
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
