import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Landmark, Building2, Truck, Router, Layers,
  Workflow, PieChart, BarChart3, LayoutDashboard, MapPin, FileText, Search, ShieldCheck,
  ArrowRight, Check, Sparkles,
} from 'lucide-react';
import {
  capabilityGroups,
  technologyCapabilities,
  futureCapabilities,
  executionSteps,
} from '../../data/servicesLandingData';
import EnterpriseServicesSection from '../../sections/EnterpriseServicesSection';

const iconMap = {
  Landmark, Building2, Truck, Router, Layers,
  Workflow, PieChart, BarChart3, LayoutDashboard, MapPin, FileText, Search, ShieldCheck,
};

const EASE = [0.16, 1, 0.3, 1];

// One reveal vocabulary shared by every section, so the page reads as a single
// composition rather than eight blocks with their own timing.
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-3xl"
    >
      <motion.span
        variants={rise}
        className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0072bc]"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={rise}
        className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[40px]"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p variants={rise} className="mt-4 text-[16.5px] leading-relaxed text-slate-600">
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function ServicesIndex() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-white">
      {/* ═══════════ 1 · HERO ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <span aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#0072bc]/10 blur-[110px]" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-[#0a2540]/[0.07] blur-[110px]" />

        <div className="fg-wrap relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
            <motion.span
              variants={rise}
              className="inline-flex items-center gap-2 rounded-full border border-[#0072bc]/20 bg-white px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0072bc]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
              Enterprise Recovery Operations
            </motion.span>

            <motion.h1
              variants={rise}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl"
            >
              Enterprise Recovery Operations Built for Scale
            </motion.h1>

            <motion.p variants={rise} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              From digital recovery and field operations to legal enforcement, asset recovery and
              AI-powered recovery intelligence, SM Associates delivers end-to-end enterprise recovery
              operations across South India.
            </motion.p>

            <motion.div variants={rise} className="mt-9 flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-shadow hover:shadow-xl hover:shadow-[#0072bc]/30"
              >
                Talk to an Expert
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#enterprise-services"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:border-slate-400"
              >
                Explore Our Capabilities
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 1b · ENTERPRISE SERVICES SHOWCASE ═══════════ */}
      <EnterpriseServicesSection />

      {/* ═══════════ 3 · TECHNOLOGY ═══════════
          (An "Operational Strength" KPI block sat here originally. Removed:
          the homepage Metrics section already carries those same figures —
          25+ years, branch network, field workforce, institutional partners —
          and this page is explicitly meant not to repeat the home page.) */}
      <section className="relative overflow-hidden border-b border-slate-200/90 bg-[#f7f9fc] py-20 sm:py-28">
        <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#0072bc]/[0.08] blur-[110px]" />
        <div className="fg-wrap relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology Driven Recovery Operations"
            title="Recovery runs on a platform, not a call list."
            lead="Every stage is instrumented — allocation, contact, field activity, enforcement and reporting. What the institution sees is the same record the operation runs on."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {technologyCapabilities.map((cap) => {
              const Icon = iconMap[cap.icon] || Workflow;
              return (
                <motion.div
                  key={cap.title}
                  variants={rise}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-xs transition-shadow duration-300 hover:border-[#0072bc]/30 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0072bc]/8 text-[#0072bc] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold leading-snug tracking-tight text-slate-900">{cap.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{cap.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 5 · FUTURE / ROADMAP ═══════════
          Explicitly framed as not-yet-deployed. The banner, the section copy
          and a per-card "Planned" tag all carry that, so no single element
          being missed can let this read as a live capability. */}
      <section className="relative overflow-hidden border-b border-slate-200/90 bg-[#0a2540] py-20 text-white sm:py-28">
        <span aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-[#0072bc]/25 blur-[120px]" />

        <div className="fg-wrap relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl"
          >
            <motion.span
              variants={rise}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/90"
            >
              <Sparkles size={12} strokeWidth={2.5} />
              Roadmap · In Development
            </motion.span>

            <motion.h2
              variants={rise}
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-[40px]"
            >
              The Future of Recovery Operations
            </motion.h2>

            <motion.p variants={rise} className="mt-4 text-[16.5px] leading-relaxed text-white/70">
              SM Associates is investing in a next generation of AI-driven recovery technology. The
              capabilities below are strategic initiatives currently under development — they are not
              yet deployed on client portfolios, and are published here so partners can plan against
              our direction rather than discover it later.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {futureCapabilities.map((item) => (
              <motion.div
                key={item.title}
                variants={rise}
                className="rounded-[24px] border border-white/[0.12] bg-white/[0.06] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.09]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[15px] font-bold leading-snug tracking-tight text-white">{item.title}</h3>
                  <span className="shrink-0 rounded-full border border-white/20 px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider text-white/60">
                    Planned
                  </span>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 6 · HOW WE EXECUTE ═══════════ */}
      <section className="border-b border-slate-200/90 py-20 sm:py-28">
        <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Execute"
            title="One accountable sequence, start to close."
            lead="Every mandate follows the same governed path. No stage is skipped, and each handoff stays inside the same case file."
          />

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {executionSteps.map((step, index) => (
              <motion.li
                key={step.no}
                variants={rise}
                className="relative rounded-[24px] border border-slate-200 bg-white p-6 shadow-xs transition-shadow duration-300 hover:border-[#0072bc]/30 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0072bc] font-mono text-[12px] font-bold text-white">
                    {step.no}
                  </span>
                  {index < executionSteps.length - 1 && (
                    <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-[#0072bc]/30 to-transparent lg:block" />
                  )}
                </div>
                <h3 className="mt-4 text-[15px] font-bold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{step.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ═══════════ 7 · CTA ═══════════ */}
      <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-28">
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 h-[460px] w-[460px] rounded-full bg-[#0072bc]/10 blur-[110px]" />

        <div className="fg-wrap relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.h2
              variants={rise}
              className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[42px]"
            >
              Let&apos;s Build Smarter Recovery Operations
            </motion.h2>
            <motion.p variants={rise} className="mx-auto mt-5 max-w-2xl text-[16.5px] leading-relaxed text-slate-600">
              Whether you require portfolio recovery, secured asset recovery, field operations or
              enterprise recovery transformation, our specialists are ready to help.
            </motion.p>
            <motion.div variants={rise} className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-shadow hover:shadow-xl hover:shadow-[#0072bc]/30"
              >
                Schedule Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:border-slate-400"
              >
                Contact SM Associates
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
