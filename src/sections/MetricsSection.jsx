import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import { metrics } from '../data/flagshipHomeData';
import { Layers, ShieldCheck, Sparkles, Building2, Users, MapPin, PieChart, Network, Award } from 'lucide-react';
import { serifHeading } from '../components/sections/shared/typography';

/* ═══════════════════════════════════════════════════════
   CARD 1 — 25+ YRS · Legacy Timeline
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
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0e1a] border border-slate-700/80 group cursor-default h-full flex flex-col p-6 shadow-2xl"
    >
      {/* Top Luminous Cyan Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072bc] via-[#38bdf8] to-[#0072bc]" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#0072bc]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Award className="w-3 h-3 text-amber-400" />
              LEGACY · EST. 2000
            </span>
            <span className="text-[10px] font-extrabold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
              Quarter-Century
            </span>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-white">
                  <span ref={ref}>{display}</span>
                </span>
                <span className="text-3xl font-black text-[#38bdf8]">{m.suffix}</span>
              </div>
              <div className="text-sm font-extrabold text-slate-200 mt-2">{m.label}</div>
            </div>

            {/* Glowing Ring Badge */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                <circle cx="32" cy="32" r="26" fill="none" stroke="#38bdf8" strokeWidth="6"
                  strokeDasharray={`${(25/26)*163.36} 163.36`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs font-black text-white leading-none">25</span>
                <span className="text-[8px] text-amber-400 font-extrabold">YRS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline strip */}
        <div className="mt-6">
          <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden mb-3 border border-slate-700">
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: '98%' }}
              viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0072bc] via-[#38bdf8] to-[#10b981] rounded-full"
            />
          </div>
          <div className="flex justify-between">
            {years.map(y => (
              <div key={y} className="flex flex-col items-center gap-1">
                <div className={`w-0.5 h-2 ${y <= now ? 'bg-[#38bdf8]' : 'bg-slate-700'}`} />
                <span className={`text-[9.5px] font-black ${y <= now ? 'text-sky-300' : 'text-slate-500'}`}>{y}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-300 leading-relaxed pt-3 border-t border-slate-800">{m.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 2 — 19 Branches · State Column Bar Chart
═══════════════════════════════════════════════════════ */
function CardNetwork({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const stateBranches = [
    { abbr: 'TN', name: 'Tamil Nadu',     count: 10, pct: 100, color: 'from-[#0072bc] to-[#38bdf8]' },
    { abbr: 'KA', name: 'Karnataka',      count: 4,  pct: 40,  color: 'from-[#2563eb] to-[#60a5fa]' },
    { abbr: 'KL', name: 'Kerala',         count: 2,  pct: 20,  color: 'from-[#059669] to-[#34d399]' },
    { abbr: 'AP', name: 'Andhra Pradesh', count: 2,  pct: 20,  color: 'from-[#d97706] to-[#fbbf24]' },
    { abbr: 'TS', name: 'Telangana',      count: 1,  pct: 10,  color: 'from-[#e11d48] to-[#fb7185]' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 group cursor-default h-full p-6 shadow-xl flex flex-col justify-between"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#38bdf8]" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full border border-[#0072bc]/20 flex items-center gap-1.5">
            <Building2 className="w-3 h-3 text-[#0072bc]" />
            BRANCH NETWORK
          </span>
          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            ● Live Hubs
          </span>
        </div>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl font-black tracking-tight leading-none text-slate-900">
            <span ref={ref}>{display}</span>
          </span>
          <div className="flex flex-col ml-1.5">
            <span className="text-sm font-extrabold text-slate-800 leading-tight">Regional Offices</span>
            <span className="text-xs text-[#0072bc] font-bold">South India Command</span>
          </div>
        </div>

        {/* Multi-Color State Column Bar Chart */}
        <div className="flex items-end justify-between gap-2 my-2" style={{ height: 84 }}>
          {stateBranches.map((s, i) => (
            <div key={s.abbr} className="flex flex-col items-center gap-1.5 flex-1">
              <span className="text-[10px] font-black text-slate-900">{s.count}</span>
              <div className="w-full rounded-t-xl overflow-hidden relative bg-slate-100" style={{ height: 58 }}>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className={`absolute bottom-0 left-0 right-0 rounded-t-xl bg-gradient-to-t ${s.color}`}
                />
              </div>
              <span className="text-[9.5px] font-black text-slate-600">{s.abbr}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 mt-4">{m.desc}</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 3 — 1,500+ Workforce · Team Tiers Bar
═══════════════════════════════════════════════════════ */
function CardWorkforce({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const tiers = [
    { label: 'Field Officers', pct: 62, color: 'bg-gradient-to-r from-[#0072bc] to-[#3b82f6]', badge: '#0072bc' },
    { label: 'Supervisors',    pct: 22, color: 'bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]', badge: '#7c3aed' },
    { label: 'Operations',     pct: 16, color: 'bg-gradient-to-r from-[#059669] to-[#10b981]', badge: '#059669' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 group cursor-default h-full p-6 shadow-xl flex flex-col justify-between"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 flex items-center gap-1.5">
            <Users className="w-3 h-3 text-purple-600" />
            FIELD WORKFORCE
          </span>
          <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
            DRA Certified
          </span>
        </div>

        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-5xl font-black tracking-tight leading-none text-slate-900">
            <span ref={ref}>{display}</span>
          </span>
          <span className="text-2xl font-black text-purple-600">{m.suffix}</span>
        </div>
        <div className="text-xs font-extrabold text-slate-700">{m.label}</div>

        {/* Stacked Multi-Color Horizontal Bar */}
        <div className="mt-4 rounded-xl overflow-hidden h-4 flex gap-1 p-0.5 bg-slate-100 border border-slate-200">
          {tiers.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ width: 0 }} whileInView={{ width: `${t.pct}%` }}
              viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
              className={`rounded-lg ${t.color}`}
              title={`${t.label}: ${t.pct}%`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 space-y-2">
          {tiers.map(t => (
            <div key={t.label} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.badge }} />
                <span className="font-bold text-slate-700">{t.label}</span>
              </div>
              <span className="font-extrabold text-slate-900">{t.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 mt-4">{m.desc}</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 4 — 5 States · State Coverage Fill Bars
═══════════════════════════════════════════════════════ */
function CardCoverage({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const states = [
    { name: 'Tamil Nadu',       abbr: 'TN', pct: 95, color: 'from-[#0072bc] to-[#38bdf8]' },
    { name: 'Karnataka',        abbr: 'KA', pct: 78, color: 'from-[#2563eb] to-[#60a5fa]' },
    { name: 'Kerala',           abbr: 'KL', pct: 62, color: 'from-[#059669] to-[#34d399]' },
    { name: 'Andhra Pradesh',   abbr: 'AP', pct: 55, color: 'from-[#d97706] to-[#fbbf24]' },
    { name: 'Telangana',        abbr: 'TS', pct: 50, color: 'from-[#e11d48] to-[#fb7185]' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 group cursor-default h-full p-6 shadow-xl flex flex-col justify-between"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#059669] to-[#34d399]" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-emerald-600" />
            REGIONAL COVERAGE
          </span>
          <span className="text-[10px] font-extrabold text-emerald-700">South India</span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-5xl font-black tracking-tight leading-none text-slate-900">
            <span ref={ref}>{display}</span>
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-slate-800 leading-tight">Key States</span>
            <span className="text-xs text-emerald-700 font-bold">100% Penetration</span>
          </div>
        </div>

        {/* Per-state colorful progress bars */}
        <div className="space-y-2.5">
          {states.map((s, i) => (
            <div key={s.abbr} className="flex items-center gap-2.5">
              <span className="w-7 text-[10px] font-black text-slate-700 text-center flex-none">
                {s.abbr}
              </span>
              <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/60">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
              <span className="text-[10px] font-extrabold text-slate-900 w-8 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 5 — 1M+ Accounts · Concentric Portfolio Rings
═══════════════════════════════════════════════════════ */
function CardScale({ m }) {
  const segments = [
    { label: 'Retail Loans', pct: 82, color: '#0072bc', r: 58, strokeW: 9 },
    { label: 'Auto Loans',   pct: 64, color: '#7c3aed', r: 45, strokeW: 8 },
    { label: 'Housing',      pct: 48, color: '#059669', r: 32, strokeW: 7 },
    { label: 'MSME',         pct: 35, color: '#f59e0b', r: 19, strokeW: 6 },
  ];
  const cx = 72, cy = 72;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 group cursor-default h-full p-6 shadow-xl flex flex-col justify-between"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072bc] via-[#7c3aed] to-[#059669]" />

      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full border border-[#0072bc]/20 flex items-center gap-1.5">
            <PieChart className="w-3 h-3 text-[#0072bc]" />
            PORTFOLIO SCALE
          </span>
          <span className="text-[10px] font-extrabold text-[#0072bc] bg-[#0072bc]/10 px-2 py-0.5 rounded-full">
            ↑ Growing
          </span>
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-black tracking-tight leading-none text-slate-900">
            1
          </span>
          <span className="text-2xl font-black text-[#0072bc]">M+</span>
          <span className="text-xs font-bold text-slate-600 ml-1.5">{m.label}</span>
        </div>

        {/* Concentric Multi-Color SVG Rings */}
        <div className="flex items-center gap-3 my-2">
          <div className="relative flex-shrink-0" style={{ width: 136, height: 136 }}>
            <svg viewBox="0 0 144 144" width="136" height="136">
              {segments.map((s, i) => {
                const circ = 2 * Math.PI * s.r;
                const dash = (s.pct / 100) * circ;
                return (
                  <g key={s.label}>
                    <circle cx={cx} cy={cy} r={s.r} fill="none" stroke="#f1f5f9" strokeWidth={s.strokeW} />
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
              <circle cx={cx} cy={cy} r={8} fill="#0072bc" opacity={0.9} />
              <text x={cx} y={cy + 3} textAnchor="middle" style={{ fontSize: 6, fontWeight: 900, fill: 'white' }}>
                1M
              </text>
            </svg>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            {segments.map(s => (
              <div key={s.label} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="font-bold text-slate-700">{s.label}</span>
                </div>
                <span className="font-extrabold" style={{ color: s.color }}>{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 mt-4">{m.desc}</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CARD 6 — 100+ Partners · Network Node Graph
═══════════════════════════════════════════════════════ */
function CardPartners({ m }) {
  const [ref, display] = useCounter({ to: m.value });
  const nodes = [
    { x: 75,  y: 30,  label: 'SM Hub',  r: 18, color: '#0072bc' },
    { x: 28,  y: 75,  label: 'Banks',   r: 14, color: '#2563eb' },
    { x: 122, y: 75,  label: 'NBFCs',   r: 13, color: '#7c3aed' },
    { x: 18,  y: 120, label: 'ARCs',    r: 11, color: '#059669' },
    { x: 75,  y: 115, label: 'FinTech', r: 11, color: '#f59e0b' },
    { x: 130, y: 120, label: 'MFIs',    r: 10, color: '#ec4899' },
  ];
  const edges = [[0,1],[0,2],[0,3],[0,4],[1,3],[2,5],[0,5]];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.25 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 group cursor-default h-full p-6 shadow-xl flex flex-col justify-between"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#ec4899]" />

      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full border border-[#0072bc]/20 flex items-center gap-1.5">
            <Network className="w-3 h-3 text-[#0072bc]" />
            INSTITUTIONAL PARTNERS
          </span>
          <span className="text-[10px] font-extrabold text-[#0072bc]">Empannelled</span>
        </div>

        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-5xl font-black tracking-tight leading-none text-slate-900">
                <span ref={ref}>{display}</span>
              </span>
              <span className="text-2xl font-black text-[#0072bc]">{m.suffix}</span>
            </div>
            <div className="text-xs font-extrabold text-slate-700 mt-1">{m.label}</div>
          </div>

          {/* Multi-Color Network Node SVG */}
          <div className="flex-shrink-0">
            <svg viewBox="0 0 150 140" width="115" height="110">
              {edges.map(([a, b], i) => (
                <motion.line
                  key={i}
                  x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
                  stroke="#0072bc" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="3 3"
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
                    fill={n.color}
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 400, delay: 0.4 + i * 0.08 }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                  <text x={n.x} y={n.y + 3} textAnchor="middle" style={{ fontSize: 7, fontWeight: 900, fill: 'white' }}>
                    {i === 0 ? 'SM' : ''}
                  </text>
                  <text x={n.x} y={n.y + n.r + 9} textAnchor="middle" style={{ fontSize: 7.5, fill: '#475569', fontWeight: 800 }}>
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100">
        <div className="flex flex-wrap gap-1.5">
          {['Banks', 'NBFCs', 'ARCs', 'HFCs', 'MFIs'].map(tag => (
            <span key={tag} className="text-[9.5px] font-black px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2.5">{m.desc}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════ */
export default function MetricsSection() {
  const [m0, m1, m2, m3, m4, m5] = metrics;

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-t border-b border-slate-200/90 relative overflow-hidden font-inter" id="metrics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            INFRASTRUCTURE AT SCALE
          </span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Operational Depth, Measured in the Field
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Quantifiable institutional standing built over 25+ years of continuous banking recovery and legal enforcement.
          </p>
        </div>

        {/* ── 3×2 Equal-Height Luxury Cards Matrix ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <div className="flex flex-col h-full"><CardLegacy m={m0} /></div>
          <div className="flex flex-col h-full"><CardNetwork m={m1} /></div>
          <div className="flex flex-col h-full"><CardWorkforce m={m2} /></div>
          <div className="flex flex-col h-full"><CardCoverage m={m3} /></div>
          <div className="flex flex-col h-full"><CardScale m={m4} /></div>
          <div className="flex flex-col h-full"><CardPartners m={m5} /></div>
        </div>

      </div>
    </section>
  );
}
