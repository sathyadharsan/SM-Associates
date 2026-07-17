import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';
import { metrics } from '../data/flagshipHomeData';

/* ═══════════════════════════════════════════════════════
   CARD 1 — 25+ YRS · Legacy Timeline
   Visual: Horizontal year-progress strip 2000 → 2026
═══════════════════════════════════════════════════════ */
function CardLegacy({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const years = [2000, 2005, 2010, 2015, 2020, 2026];
  const now = 2026;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-2xl bg-[#0a0e1a] border border-white/8 group cursor-default h-full flex flex-col"
      style={{ boxShadow: '0 8px 40px -8px rgba(51,102,255,0.35)' }}
    >
      {/* Blue glow */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#3366FF]" />
      <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-[#3366FF]/10 blur-3xl pointer-events-none" />

      <div className="p-6 relative">
        <div className="flex items-start justify-between mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3366FF] bg-[#3366FF]/15 px-2.5 py-1 rounded-full">
              LEGACY · EST. 2000
            </span>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[56px] font-black tracking-[-0.05em] leading-none text-white">
                <span ref={ref}>{display}</span>
              </span>
              <span className="text-2xl font-black text-[#3366FF]">{m.suffix}</span>
            </div>
            <div className="text-sm font-semibold text-white/70 mt-1">{m.label}</div>
          </div>
          {/* Year wheel */}
          <div className="relative w-16 h-16 flex-shrink-0">
            <svg viewBox="0 0 64 64" className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
              <circle cx="32" cy="32" r="26" fill="none" stroke="#3366FF" strokeWidth="7"
                strokeDasharray={`${(25/26)*163.36} 163.36`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] font-bold text-white leading-none">25</span>
              <span className="text-[7px] text-white/40 font-semibold">YRS</span>
            </div>
          </div>
        </div>

        {/* Timeline strip */}
        <div className="mt-2">
          <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: '96%' }}
              viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3366FF] to-[#7C3AED] rounded-full"
            />
          </div>
          <div className="flex justify-between">
            {years.map(y => (
              <div key={y} className="flex flex-col items-center gap-0.5">
                <div className={`w-px h-2 ${y <= now ? 'bg-[#3366FF]/60' : 'bg-white/20'}`} />
                <span className={`text-[9px] font-bold ${y <= now ? 'text-[#3366FF]' : 'text-white/30'}`}>{y}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[12px] text-white/40 leading-relaxed">{m.desc}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 2 — 19 Branches · State Column Bar Chart
   Visual: 5 animated column bars — one per state
═══════════════════════════════════════════════════════ */
function CardNetwork({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const stateBranches = [
    { abbr: 'TN', name: 'Tamil Nadu',     count: 10, pct: 100 },
    { abbr: 'KA', name: 'Karnataka',      count: 4,  pct: 40  },
    { abbr: 'KL', name: 'Kerala',         count: 2,  pct: 20  },
    { abbr: 'AP', name: 'Andhra Pradesh', count: 2,  pct: 20  },
    { abbr: 'TS', name: 'Telangana',      count: 1,  pct: 10  },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-2xl bg-white border border-[#e8edf4] group cursor-default h-full"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#4F46E5]" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.06), transparent 65%)' }}
      />
      <div className="p-5 relative">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] bg-[#4F46E5]/10 px-2.5 py-1 rounded-full">
            BRANCH NETWORK
          </span>
          <span className="text-[10px] font-bold text-[#4F46E5] bg-[#4F46E5]/10 px-2 py-0.5 rounded-full">● Live</span>
        </div>

        {/* Big number */}
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-[46px] font-black tracking-[-0.05em] leading-none text-[#0a0e1a]">
            <span ref={ref}>{display}</span>
          </span>
          <div className="flex flex-col ml-1">
            <span className="text-[11px] font-bold text-slate-700 leading-tight">Offices</span>
            <span className="text-[10px] text-[#4F46E5] font-semibold">South India</span>
          </div>
        </div>

        {/* State column bar chart */}
        <div className="flex items-end justify-between gap-2" style={{ height: 72 }}>
          {stateBranches.map((s, i) => (
            <div key={s.abbr} className="flex flex-col items-center gap-1 flex-1">
              {/* Count label */}
              <span className="text-[10px] font-black text-[#4F46E5]">{s.count}</span>
              {/* Bar */}
              <div className="w-full rounded-t-md overflow-hidden relative" style={{ height: 48, background: '#f1f5f9' }}>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 right-0 rounded-t-md"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(180deg, #4F46E5, #818CF8)'
                      : `rgba(79,70,229,${0.25 + i * 0.05})`,
                  }}
                />
              </div>
              {/* State abbr */}
              <span className="text-[9px] font-black text-slate-500">{s.abbr}</span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 mt-3 leading-relaxed border-t border-slate-100 pt-2">{m.desc}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 3 — 1,500+ Workforce · Person-icon stacked bars
   Visual: Horizontal stacked bar chart showing team tiers
═══════════════════════════════════════════════════════ */
function CardWorkforce({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const tiers = [
    { label: 'Field Officers', pct: 62, color: '#7C3AED' },
    { label: 'Supervisors',    pct: 22, color: '#A78BFA' },
    { label: 'Operations',     pct: 16, color: '#DDD6FE' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-2xl bg-white border border-[#e8edf4] group cursor-default h-full"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#7C3AED]" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.06), transparent 65%)' }}
      />
      <div className="p-5 relative">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 px-2.5 py-1 rounded-full">
          WORKFORCE
        </span>

        <div className="flex items-baseline gap-1 mt-3">
          <span className="text-[42px] font-black tracking-[-0.04em] leading-none text-[#0a0e1a]">
            <span ref={ref}>{display}</span>
          </span>
          <span className="text-lg font-black text-[#7C3AED]">{m.suffix}</span>
        </div>
        <div className="text-[12px] font-bold text-slate-600 mt-0.5">{m.label}</div>

        {/* Stacked horizontal bar */}
        <div className="mt-4 rounded-lg overflow-hidden h-5 flex">
          {tiers.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ width: 0 }} whileInView={{ width: `${t.pct}%` }}
              viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
              style={{ background: t.color, height: '100%' }}
              title={`${t.label}: ${t.pct}%`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-3 flex flex-col gap-1.5">
          {tiers.map(t => (
            <div key={t.label} className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm" style={{ background: t.color }} />
                <span className="text-[10px] text-slate-500 font-medium">{t.label}</span>
              </div>
              <span className="text-[10px] font-bold" style={{ color: t.color }}>{t.pct}%</span>
            </div>
          ))}
        </div>

        <p className="mt-3 text-[11px] text-slate-400 border-t border-slate-100 pt-2">{m.desc}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 4 — 5 States · State coverage pills
   Visual: Each state shown as a colored pill with a
           mini horizontal fill bar
═══════════════════════════════════════════════════════ */
function CardCoverage({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const states = [
    { name: 'Tamil Nadu',       abbr: 'TN', pct: 95, color: '#F59E0B' },
    { name: 'Karnataka',        abbr: 'KA', pct: 78, color: '#C8922A' },
    { name: 'Kerala',           abbr: 'KL', pct: 62, color: '#D97706' },
    { name: 'Andhra Pradesh',   abbr: 'AP', pct: 55, color: '#B45309' },
    { name: 'Telangana',        abbr: 'TS', pct: 50, color: '#92400E' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-2xl bg-white border border-[#e8edf4] group cursor-default h-full"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F59E0B] to-[#C8922A]" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(200,146,42,0.07), transparent 65%)' }}
      />
      <div className="p-5 relative">
        <div className="flex items-start justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8922A] bg-[#C8922A]/10 px-2.5 py-1 rounded-full">
            COVERAGE
          </span>
          <span className="text-[10px] font-bold text-[#C8922A]">South India</span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-[48px] font-black tracking-[-0.05em] leading-none text-[#0a0e1a]">
            <span ref={ref}>{display}</span>
          </span>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-slate-600 leading-tight">States</span>
            <span className="text-[10px] text-[#C8922A] font-semibold">Covered</span>
          </div>
        </div>

        {/* Per-state progress bars */}
        <div className="space-y-2">
          {states.map((s, i) => (
            <div key={s.abbr} className="flex items-center gap-2">
              <span
                className="w-7 text-[9px] font-black text-white rounded px-1 py-0.5 text-center flex-shrink-0"
                style={{ background: s.color }}
              >
                {s.abbr}
              </span>
              <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: s.color }}
                />
              </div>
              <span className="text-[9px] font-bold text-slate-400 w-7 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 5 — 1M+ Accounts · Concentric Portfolio Rings
   Visual: Big number at top + 4 stacked rings below
═══════════════════════════════════════════════════════ */
function CardScale({ m }) {
  const segments = [
    { label: 'Retail Loans', pct: 82, color: '#10B981', r: 58, strokeW: 9 },
    { label: 'Auto Loans',   pct: 64, color: '#34D399', r: 45, strokeW: 8 },
    { label: 'Housing',      pct: 48, color: '#6EE7B7', r: 32, strokeW: 7 },
    { label: 'MSME',         pct: 35, color: '#A7F3D0', r: 19, strokeW: 6 },
  ];
  const cx = 72, cy = 72;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-2xl bg-white border border-[#e8edf4] group cursor-default h-full flex flex-col"
      style={{ boxShadow: '0 4px 24px -4px rgba(16,185,129,0.14)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#10B981]" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.07), transparent 65%)' }}
      />

      <div className="p-5 relative flex flex-col flex-1 gap-3">
        {/* ── Row 1: badge + trend ── */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full">
            PORTFOLIO SCALE
          </span>
          <span className="text-[10px] font-bold text-[#10B981]">↑ Growing</span>
        </div>

        {/* ── Row 2: Big 1M+ number (always visible) ── */}
        <div className="flex items-baseline gap-1">
          <span className="text-[46px] font-black tracking-[-0.05em] leading-none text-[#0a0e1a]">
            1
          </span>
          <span className="text-[24px] font-black text-[#10B981] leading-none">M+</span>
          <span className="text-[12px] font-bold text-slate-500 ml-1 self-end pb-1">{m.label}</span>
        </div>

        {/* ── Row 3: Rings + legend side by side ── */}
        <div className="flex items-center gap-3 flex-1">
          {/* Concentric rings SVG */}
          <div className="relative flex-shrink-0" style={{ width: 144, height: 144 }}>
            <svg viewBox="0 0 144 144" width="144" height="144">
              {segments.map((s, i) => {
                const circ = 2 * Math.PI * s.r;
                const dash = (s.pct / 100) * circ;
                return (
                  <g key={s.label}>
                    <circle cx={cx} cy={cy} r={s.r} fill="none" stroke="#f0fdf4" strokeWidth={s.strokeW} />
                    <motion.circle
                      cx={cx} cy={cy} r={s.r}
                      fill="none" stroke={s.color} strokeWidth={s.strokeW}
                      strokeLinecap="round"
                      initial={{ strokeDasharray: `0 ${circ}` }}
                      whileInView={{ strokeDasharray: `${dash} ${circ - dash}` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.35 + i * 0.15, ease: 'easeOut' }}
                      style={{ transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }}
                    />
                  </g>
                );
              })}
              {/* Center emerald dot */}
              <circle cx={cx} cy={cy} r={8} fill="#10B981" opacity={0.9} />
              <text x={cx} y={cy + 3} textAnchor="middle"
                style={{ fontSize: 6, fontWeight: 800, fill: 'white' }}>
                1M
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2.5 flex-1">
            {segments.map(s => (
              <div key={s.label} className="flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span className="text-[11px] text-slate-500 font-medium leading-tight">{s.label}</span>
                </div>
                <span className="text-[11px] font-bold flex-shrink-0" style={{ color: s.color }}>{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 4: desc ── */}
        <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-100 pt-2.5">
          {m.desc}
        </p>
      </div>
    </motion.div>
  );
}


/* ═══════════════════════════════════════════════════════
   CARD 6 — 100+ Partners · Network node graph
   Visual: Light card with SVG node-connection diagram
═══════════════════════════════════════════════════════ */
function CardPartners({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const nodes = [
    { x: 80,  y: 30,  label: 'Banks',   r: 18, color: '#E11D48' },
    { x: 30,  y: 75,  label: 'NBFCs',   r: 14, color: '#FB7185' },
    { x: 130, y: 75,  label: 'ARCs',    r: 12, color: '#FCA5A5' },
    { x: 20,  y: 125, label: 'HFCs',    r: 11, color: '#FECACA' },
    { x: 80,  y: 115, label: 'FinTech', r: 10, color: '#FDA4AF' },
    { x: 140, y: 122, label: 'Ins.',    r: 9,  color: '#FECDD3' },
  ];
  const edges = [[0,1],[0,2],[0,3],[0,4],[1,3],[2,5],[0,5]];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.25 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-2xl bg-white border border-[#e8edf4] group cursor-default h-full"
      style={{ boxShadow: '0 4px 24px -4px rgba(225,29,72,0.12)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E11D48] to-[#FB7185]" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(225,29,72,0.05), transparent 65%)' }}
      />

      <div className="p-5 relative flex gap-3 h-full">
        {/* Left: number + info */}
        <div className="flex-1 flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D48] bg-[#E11D48]/10 px-2.5 py-1 rounded-full self-start">
            PARTNERS
          </span>
          <div className="mt-3 flex items-baseline gap-0.5">
            <span className="text-[50px] font-black tracking-[-0.05em] leading-none text-[#0a0e1a]">
              <span ref={ref}>{display}</span>
            </span>
            <span className="text-xl font-black text-[#E11D48]">{m.suffix}</span>
          </div>
          <div className="text-[12px] font-bold text-slate-700 mt-1">{m.label}</div>
          <p className="text-[11px] text-slate-400 leading-relaxed mt-2">{m.desc}</p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-1 mt-auto pt-3">
            {['Banks', 'NBFCs', 'ARCs', 'HFCs'].map(tag => (
              <span key={tag} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: node graph SVG */}
        <div className="flex-shrink-0 self-center">
          <svg viewBox="0 0 160 155" width="118" height="115">
            {edges.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
                stroke="#E11D48" strokeWidth="1.2" strokeOpacity="0.18"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
              />
            ))}
            {nodes.map((n, i) => (
              <g key={i}>
                <motion.circle
                  cx={n.x} cy={n.y} r={n.r}
                  fill={n.color} fillOpacity={i === 0 ? 1 : 0.7}
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, delay: 0.4 + i * 0.08 }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
                {i === 0 && (
                  <text x={n.x} y={n.y + 3} textAnchor="middle"
                    style={{ fontSize: 7, fontWeight: 700, fill: 'white' }}>
                    SM
                  </text>
                )}
                <text x={n.x} y={n.y + n.r + 9} textAnchor="middle"
                  style={{ fontSize: 7, fill: '#94a3b8', fontWeight: 600 }}>
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════ */
export default function MetricsSection() {
  // metrics array: [25yrs, 19 branches, 1500 workforce, 5 states, 1M accounts, 100 partners]
  const [m0, m1, m2, m3, m4, m5] = metrics;

  return (
    <section className="metrics6 relative bg-[#f4f6fb]" id="metrics" style={{ padding: '80px 0' }}>
      <div className="fg-wrap">
        {/* Section header */}
        <div className="fg-section-header" style={{ marginBottom: 48 }}>
          <span className="fg-eyebrow">Infrastructure at Scale</span>
          <h2>
            Operational depth,<br />
            <em className="fg-hl">measured in the field.</em>
          </h2>
        </div>

        {/* ── Unified 3×2 equal-height grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '1fr',
          gap: 20,
          alignItems: 'stretch',
        }}>
          <div className="flex flex-col"><CardLegacy m={m0} /></div>
          <div className="flex flex-col"><CardNetwork m={m1} /></div>
          <div className="flex flex-col"><CardWorkforce m={m2} /></div>
          <div className="flex flex-col"><CardCoverage m={m3} /></div>
          <div className="flex flex-col"><CardScale m={m4} /></div>
          <div className="flex flex-col"><CardPartners m={m5} /></div>
        </div>
      </div>
    </section>
  );
}
