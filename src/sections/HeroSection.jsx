import { motion } from 'framer-motion';
import { ArrowRight, Trophy, ShieldCheck, BadgeCheck } from 'lucide-react';
import { FlowButton } from '../components/ui/flow-button';

const B = '#0072bc';
const C = {
  ink:     '#0a0e1a',
  sub:     '#536070',
  muted:   '#8d9aaa',
  border:  '#e2e8f0',
  surface: '#f6f8fb',
};

const trustCards = [
  {
    icon: Trophy,
    title: "Voted India's Leading Recovery Firm",
    sub: 'in Tamil Nadu',
    copy: 'A reputation built on two decades of disciplined, compliant recovery execution.',
  },
  {
    icon: ShieldCheck,
    title: 'RBI & SARFAESI Compliant',
    sub: 'Industry experts in recovery law',
    copy: 'Every engagement structured around regulatory and legal compliance.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted by 20+ Banks & NBFCs',
    sub: 'Operating since 2000',
    copy: 'Empanelled with leading nationalized banks and lending institutions.',
  },
];

// ─── Cinematic aurora background ───────────────────────────────────
function AuroraBackground() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: 40 + Math.random() * 55,
    size: 1 + Math.random() * 2,
    dur: 14 + Math.random() * 16,
    delay: Math.random() * -20,
    op: 0.25 + Math.random() * 0.45,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base white */}
      <div className="absolute inset-0" style={{ background: '#ffffff' }} />

      {/* Soft aurora blobs — much lower opacity on white */}
      <div className="aurora-a absolute left-[10%] top-[-10%] h-[600px] w-[600px] rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(0, 114, 188,0.10), transparent 70%)' }} />
      <div className="aurora-b absolute right-[5%] top-[5%] h-[520px] w-[520px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(0, 114, 188,0.08), transparent 70%)' }} />
      <div className="aurora-c absolute left-[35%] top-[30%] h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)' }} />
      <div className="aurora-a absolute bottom-[-15%] right-[20%] h-[460px] w-[460px] rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)', animationDelay: '-8s' }} />

      {/* Fading technical grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(#0072bc 1px, transparent 1px), linear-gradient(90deg, #0072bc 1px, transparent 1px)',
        backgroundSize: '54px 54px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)',
      }} />

      {/* Floating particles — soft blue */}
      {particles.map(p => (
        <span
          key={p.id}
          className="hero-particle absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: '#0072bc',
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            '--p-op': p.op * 0.5,
          }}
        />
      ))}
    </div>
  );
}

const Seq = ({ children, stagger = 0.09, delay = 0 }) => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
  >
    {children}
  </motion.div>
);
const Fade = ({ children, y = 16, className = '' }) => (
  <motion.div
    className={className}
    variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
  >
    {children}
  </motion.div>
);

// ── Mini Sparkline bars (CSS-only, no external deps) ────────────────
function Sparkline({ bars, color }) {
  return (
    <div className="flex items-end gap-[3px]" style={{ height: 28 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          className="rounded-sm flex-1 transition-all duration-300"
          style={{
            height: `${h}%`,
            background: color,
            opacity: 0.28 + (i / bars.length) * 0.72,
          }}
        />
      ))}
    </div>
  );
}

// ── SVG Circular progress ring ─────────────────────────────────────
function RingProgress({ pct, color, size = 44 }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e8edf4" strokeWidth={4.5} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={4.5}
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 1.2s ease' }}
      />
    </svg>
  );
}

// ── Premium hero metric cards data ─────────────────────────────────
const heroStats = [
  {
    value: '25+',
    label: 'Years in Recovery',
    sub: 'Since 2000',
    color: '#0072bc',
    bars: [38, 50, 58, 52, 68, 80, 95],
    ring: 92,
    delta: 'Est. 2000',
  },
  {
    value: '19',
    label: 'Branch Offices',
    sub: 'South India Network',
    color: '#0072bc',
    bars: [48, 58, 52, 66, 64, 76, 88],
    ring: 76,
    delta: 'All Active',
  },
  {
    value: '5+',
    label: 'States Covered',
    sub: 'TN · KA · KL · AP · TS',
    color: '#0072bc',
    bars: [28, 42, 38, 52, 58, 62, 74],
    ring: 60,
    delta: 'Expanding',
  },
  {
    value: '100+',
    label: 'Partner Banks & NBFCs',
    sub: 'Institutional Trust',
    color: '#0072bc',
    bars: [52, 58, 66, 63, 72, 84, 98],
    ring: 98,
    delta: '+12 YoY',
  },
];

function HeroStatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
      className="relative bg-white rounded-2xl border overflow-hidden group cursor-default shadow-md hover:shadow-xl transition-all duration-300"
      style={{
        borderColor: '#cbd5e1',
      }}
    >
      {/* Dual-tone top telemetry accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0072bc] via-cyan-500 to-[#0072bc]" />

      {/* Hover radial cyan/blue telemetry glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 114, 188, 0.15), transparent 70%)' }}
      />

      <div className="p-4 flex flex-col gap-2.5">
        {/* Row 1: Big value + Ring */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <div
              className="font-extrabold tracking-tight leading-none text-slate-900"
              style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
            >
              {stat.value}
            </div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1.5 text-[#0072bc]">
              {stat.label}
            </div>
          </div>
          <div className="relative flex-shrink-0 mt-0.5">
            <RingProgress pct={stat.ring} color={stat.color} size={42} />
            <div
              className="absolute inset-0 flex items-center justify-center font-extrabold"
              style={{ fontSize: 9, color: stat.color }}
            >
              {stat.ring}%
            </div>
          </div>
        </div>

        {/* Row 3: Sub label + delta badge */}
        <div className="flex items-center justify-between gap-1 mt-0.5 pt-1 border-t border-slate-100">
          <span className="text-[11px] text-slate-500 font-semibold truncate">{stat.sub}</span>
          <span
            className="flex-shrink-0 inline-flex items-center gap-1 text-[9px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap bg-[#0072bc]/10 text-[#0072bc]"
          >
            ↑ {stat.delta}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const go = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ paddingTop: '76px', background: '#ffffff' }}
    >

      {/* ═══ Cinematic white hero backdrop ═══ */}
      <div className="relative">
        <AuroraBackground />

        {/* ── Hero content ── */}
        <div className="relative mx-auto max-w-[1360px] px-6 py-20 lg:px-10 lg:py-28">
          <Seq>
            <Fade y={16}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0072bc]/10 border border-[#0072bc]/20 text-[#0072bc] text-xs font-extrabold mb-6 shadow-2xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0072bc] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0072bc]" />
                </span>
                <span className="uppercase tracking-wider">LIVE TELEMETRY: 24/7 CPV & RECOVERY DISPATCH ACTIVE • PAN-SOUTH INDIA</span>
              </div>
            </Fade>

            <Fade y={20}>
              <h1
                className="font-sora font-extrabold"
                style={{
                  fontSize: 'clamp(36px, 4.4vw, 64px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.08,
                  color: C.ink,
                  maxWidth: '720px',
                }}
              >
                Full-Stack Recovery &amp;<br />
                <span style={{ color: B }}>Risk Management</span> for<br />
                Growing Financial Institutions.
              </h1>
            </Fade>

            <Fade y={14}>
              <p className="mt-6 max-w-[480px] text-[15px] leading-[1.75]" style={{ color: C.sub }}>
                We build compliant, field-ready recovery operations that target your portfolio's exact needs — SARFAESI, collections and legal coordination.
              </p>
            </Fade>

            <Fade y={10}>
              <div className="mt-8">
                <FlowButton
                  href="#contact"
                  onClick={go('#contact')}
                  text="Schedule a Consultation"
                />
              </div>
            </Fade>
          </Seq>
        </div>

        {/* Spacer so floating cards have room to overlap */}
        <div className="h-[64px] lg:h-[78px]" />
      </div>

      {/* ═══ Floating trust cards — overlap dark/light boundary ═══ */}
      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10" style={{ marginTop: '-110px' }}>
        <div className="grid gap-4 sm:grid-cols-3">
          {trustCards.map(({ icon: Icon, title, sub, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl border bg-white p-5 shadow-[0_20px_50px_-12px_rgba(10,14,26,0.18)]"
              style={{ borderColor: C.border }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${B}12` }}>
                  <Icon className="h-4.5 w-4.5" style={{ color: B }} />
                </div>
                <div>
                  <p className="text-[14px] font-bold leading-snug" style={{ color: C.ink }}>{title}</p>
                  <p className="text-[12px] font-semibold" style={{ color: B }}>{sub}</p>
                </div>
              </div>
              <p className="mt-3 text-[12.5px] leading-[1.6]" style={{ color: C.sub }}>{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ Premium Dashboard KPI Metric Cards ═══ */}
      <div className="mt-12 lg:mt-16" style={{ borderTop: `1px solid ${C.border}`, background: '#f6f8fb' }}>
        <div className="mx-auto max-w-[1360px] px-6 py-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStats.map((stat, i) => (
              <HeroStatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
