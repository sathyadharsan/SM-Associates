/**
 * ComplianceStorySection — Split Accent Layout
 * ─────────────────────────────────────────────────────────────────────
 * Redesigned from scroll-driven story to a dark 2-column split layout:
 * Left: bold headline + descriptor + 2 stat pills
 * Right: 4 compliance pillars as stacked icon cards
 * Dark theme (#0a1628) maintained for visual contrast on the page.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ClipboardCheck, Scale, UserCheck, Check, ShieldCheck, RotateCw, ArrowRight } from 'lucide-react';
import { complianceAssurance } from '../data/servicesLandingData';

const iconMap = { Lock, ClipboardCheck, Scale, UserCheck };

const FRONT_POINTS = {
  'Data Handling & Confidentiality': [
    'Need-to-know borrower data access',
    'Mandate-specific executive NDAs',
    'Zero un-authorized data export',
  ],
  'Audit-Trail Discipline': [
    'Geotagged & timestamped field visits',
    '100% recorded tele-outreach logs',
    'Exportable bank-ready audit history',
  ],
  'Regulatory Alignment': [
    'RBI Fair Practices Code adherence',
    '100% IIBF DRA certified workforce',
    'Strict SARFAESI statutory conduct',
  ],
  'Engagement & Reporting Structure': [
    'Single institutional Nodal Officer',
    'Weekly review & MIS cadence',
    'Structured 3-tier escalation matrix',
  ],
};

const FLIP_DETAILS = {
  'Data Handling & Confidentiality': {
    subtitle: 'Institutional Security Protocol',
    highlights: [
      'ISO 27001 Certified & AES-256 Encrypted',
      'Role-based access control (RBAC)',
      'Zero local device storage for field officers',
      'Automated post-mandate data purge',
    ],
  },
  'Audit-Trail Discipline': {
    subtitle: 'Field Execution Verification',
    highlights: [
      'Real-time GPS verification on every visit',
      '100% recorded call logs & transcripts',
      'Automated daily bank-ready MIS packs',
      'Independent internal quality sign-off',
    ],
  },
  'Regulatory Alignment': {
    subtitle: 'Statutory Conduct Framework',
    highlights: [
      'RBI Fair Practices & SARFAESI compliant',
      'IIBF DRA Certified & police verified staff',
      'Strict 08 AM – 07 PM contacting hours',
      'Institutional borrower grievance channel',
    ],
  },
  'Engagement & Reporting Structure': {
    subtitle: 'Operational Hierarchy & SLA',
    highlights: [
      'Single point of contact for bank leads',
      'Executive weekly & monthly health reviews',
      '3-tier legal workout escalation matrix',
      'Transparent fee model with 0 hidden costs',
    ],
  },
};

const pillarVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] },
  }),
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const STAT_PILLS = [
  { value: 'RBI', label: 'Fair Practices Code' },
  { value: 'IIBF', label: 'Certified Agents' },
  { value: 'SARFAESI', label: 'Authorized' },
  { value: 'ISO 27001', label: 'Data Standards' },
];

function PillarCard({ pillar, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[pillar.icon] || Lock;
  const backContent = FLIP_DETAILS[pillar.title];
  const frontPoints = FRONT_POINTS[pillar.title] || pillar.points;

  return (
    <motion.div
      custom={index}
      variants={pillarVariants}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      className="group relative cursor-pointer min-h-[265px]"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-full w-full rounded-3xl"
      >
        {/* FRONT SIDE (White First Enterprise Card) */}
        <div
          className={`flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 group-hover:border-[#0072bc]/50 group-hover:shadow-[0_12px_40px_rgba(0,114,188,0.12)] ${
            isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0072bc]/10 text-[#0072bc] border border-[#0072bc]/20">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h4 className="text-base font-extrabold tracking-tight text-slate-900 font-sora">
                  {pillar.title}
                </h4>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 border border-slate-200 group-hover:bg-[#0072bc] group-hover:text-white transition-colors">
                <RotateCw size={12} />
              </span>
            </div>

            <ul className="space-y-2.5 pt-1">
              {frontPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-[13px] font-medium leading-normal text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0072bc]/10 text-[#0072bc]">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-[11.5px] font-bold text-[#0072bc]">
            <span>Hover / Tap to view detailed framework</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* BACK SIDE (Corporate Deep Blue Gradient Accent Card) */}
        <div
          className={`absolute inset-0 flex h-full flex-col justify-between rounded-3xl border border-[#0072bc] bg-gradient-to-br from-[#004b80] via-[#0072bc] to-[#003865] p-6 sm:p-7 text-white shadow-2xl shadow-[#0072bc]/30 ${
            isFlipped ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200">
                  {backContent.subtitle}
                </span>
                <h4 className="text-base font-extrabold tracking-tight text-white font-sora">
                  {pillar.title}
                </h4>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white border border-white/30">
                <RotateCw size={12} className="rotate-180" />
              </span>
            </div>

            <ul className="space-y-2 pt-1">
              {backContent.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[12.5px] font-medium leading-normal text-sky-50">
                  <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <ShieldCheck size={10} />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3 text-[11px] font-semibold text-sky-100">
            <span>Hover away / Tap to flip back</span>
            <span className="text-white font-mono text-[10px] font-bold bg-white/15 px-2 py-0.5 rounded-full">VERIFIED SLA</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ComplianceStorySection() {
  return (
    <section
      className="relative z-30 overflow-hidden bg-white py-20 sm:py-28 border-t border-slate-200/60"
      aria-label="Compliance & Data Security"
    >

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── HEADER: Centered Headline + Descriptor + Stat Pills ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-3xl text-center mb-14 sm:mb-16"
        >
          <motion.span
            variants={leftVariants}
            className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full border border-[#0072bc]/20"
          >
            <ShieldCheck size={14} />
            Enterprise Governance
          </motion.span>

          <motion.h2
            variants={leftVariants}
            className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px] font-sora"
          >
            Every engagement runs under enterprise governance.
          </motion.h2>

          <motion.p
            variants={leftVariants}
            className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600"
          >
            Data, conduct and statutory compliance are not review-cycle items — they are continuous, embedded operating standards across every mandate we run.
          </motion.p>

          {/* Certification / framework pills row */}
          <motion.div variants={leftVariants} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {STAT_PILLS.map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 shadow-xs"
              >
                <span className="font-mono text-xs font-extrabold text-[#0072bc]">
                  {pill.value}
                </span>
                <span className="text-[10.5px] font-semibold text-slate-500">
                  {pill.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── 4 COMPLIANCE CARDS GRID (2x2) ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {complianceAssurance.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
