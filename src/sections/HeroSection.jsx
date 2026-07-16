import { motion } from 'framer-motion';
import { ArrowRight, Trophy, ShieldCheck, BadgeCheck } from 'lucide-react';

const B = '#3366FF';
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
        style={{ background: 'radial-gradient(circle, rgba(51,102,255,0.10), transparent 70%)' }} />
      <div className="aurora-b absolute right-[5%] top-[5%] h-[520px] w-[520px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)' }} />
      <div className="aurora-c absolute left-[35%] top-[30%] h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)' }} />
      <div className="aurora-a absolute bottom-[-15%] right-[20%] h-[460px] w-[460px] rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)', animationDelay: '-8s' }} />

      {/* Fading technical grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(#3366FF 1px, transparent 1px), linear-gradient(90deg, #3366FF 1px, transparent 1px)',
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
            background: '#3366FF',
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
                <a
                  href="#contact"
                  onClick={go('#contact')}
                  className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-[13.5px] font-semibold transition hover:bg-blue-50"
                  style={{ borderColor: B, color: C.ink }}
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" style={{ color: B }} />
                </a>
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

      {/* ═══ Stats strip ═══ */}
      <div className="mt-12 lg:mt-16" style={{ borderTop: `1px solid ${C.border}`, background: C.surface }}>
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-6 py-6 sm:grid-cols-4">
            {/* Verified Corporate Profile facts only — the previous values
                (24+ yrs, ₹500Cr+, 1,200+, 98%) conflicted with the homepage
                metrics and had no source in the approved knowledge base. */}
            {[
              { v: '25+',  l: 'Years in Recovery'       },
              { v: '19',   l: 'Branch Offices'          },
              { v: '5+',   l: 'States Covered'          },
              { v: '100+', l: 'Institutional Partners'  },
            ].map((s, i) => (
              <motion.div key={s.l}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="text-center sm:text-left">
                <p className="text-[20px] font-extrabold tracking-[-0.025em]" style={{ color: C.ink }}>{s.v}</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.13em]" style={{ color: C.muted }}>{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
