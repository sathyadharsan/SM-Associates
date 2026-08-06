/**
 * TechnologyStorySection — Interactive Banking Command Center
 * ─────────────────────────────────────────────────────────────────────
 * High-tech 2-column interactive platform terminal:
 * Left: Interactive vertical capability selector (01 - 08)
 * Right: Dark glassmorphism banking monitor mockup with real-time dynamic widgets
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Workflow,
  PieChart,
  BarChart3,
  LayoutDashboard,
  MapPin,
  FileText,
  Search,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Terminal,
  Layers,
  ChevronRight,
  Cpu,
} from 'lucide-react';
import { technologyCapabilities } from '../data/servicesLandingData';

const iconMap = {
  Workflow,
  PieChart,
  BarChart3,
  LayoutDashboard,
  MapPin,
  FileText,
  Search,
  ShieldCheck,
};

// Rich interactive metadata for the dark platform monitor
const MONITOR_DATA = [
  {
    title: 'Digital Recovery Workflows',
    badge: 'AUTOMATED PIPELINE',
    metrics: [
      { label: 'Logged Stages', value: '12 Active' },
      { label: 'Handoff Loss', value: '0.0%' },
      { label: 'Auto-Trigger Rate', value: '98.4%' },
    ],
    pipeline: ['Case Allocation', 'Risk Scoring', 'Notice Dispatch', 'Field Action', 'Resolution'],
    logs: [
      'SYSTEM: Case #SM-8492 allocated to Region-S4',
      'WORKFLOW: Auto-triggered Stage 2 Notice dispatch',
      'AUDIT: Multi-channel outreach logged with timestamp',
    ],
  },
  {
    title: 'Portfolio Segmentation',
    badge: 'RISK SCORING ENGINE',
    metrics: [
      { label: 'Risk Buckets', value: '6 Tiers' },
      { label: 'Propensity Index', value: '94.2/100' },
      { label: 'Geo Coverage', value: 'Pan-India' },
    ],
    buckets: [
      { name: 'Bucket 1 (1-30 DPD)', percent: 45, color: '#0072bc' },
      { name: 'Bucket 2 (31-60 DPD)', percent: 30, color: '#0284c7' },
      { name: 'Bucket 3 (61-90 DPD)', percent: 15, color: '#0369a1' },
      { name: 'NPA / Hard Recovery', percent: 10, color: '#e11d48' },
    ],
    logs: [
      'ALGORITHM: Portfolio #P-402 segmented by recovery propensity',
      'ALLOCATION: High-value accounts routed to senior DRA squad',
    ],
  },
  {
    title: 'Recovery Analytics',
    badge: 'RESOLUTION METRICS',
    metrics: [
      { label: 'Tracked KPIs', value: '32+ Metrics' },
      { label: 'Data Latency', value: 'Real-Time' },
      { label: 'Resolution Uplift', value: '+24.6%' },
    ],
    analytics: [
      { label: 'Portfolio Roll-Rate Reduction', value: '38.5%' },
      { label: 'Field Visit Conversion Rate', value: '72.1%' },
      { label: 'Collateral Liquidation Delta', value: '+19.4%' },
    ],
    logs: [
      'ANALYTICS: Resolution trend calculation completed for Q3',
      'INSIGHT: Bucket 2 conversion rate reached peak at Day 14',
    ],
  },
  {
    title: 'Performance Dashboards',
    badge: 'LIVE OPERATIONAL VIEW',
    metrics: [
      { label: 'Active Field Officers', value: '140+' },
      { label: 'Today\'s Visits', value: '312 Logged' },
      { label: 'Resolution Rate', value: '81.4%' },
    ],
    dashboardGrid: [
      { title: 'Allocated Books', val: '₹480+ Cr' },
      { title: 'Field Check-Ins', val: '100% Geo-Staging' },
      { title: 'Escalations', val: '0 Unresolved' },
      { title: 'Payment PTPs', val: '₹14.2 L Today' },
    ],
    logs: ['DASHBOARD: Synchronized 142 field terminal streams', 'LIVE: Executive MIS summary updated'],
  },
  {
    title: 'GPS-Enabled Field Operations',
    badge: 'GEO-STAMP VERIFICATION',
    metrics: [
      { label: 'Geo Precision', value: '±3 Meters' },
      { label: 'Self-Reporting', value: '0% (Disabled)' },
      { label: 'Verification', value: 'Timestamped' },
    ],
    locationView: {
      coords: '13.0827° N, 80.2707° E',
      status: 'VERIFIED ON-SITE',
      address: 'Industrial Corridor Zone 4, Chennai',
      time: '12:42:09 IST',
    },
    logs: [
      'GPS LOCK: Officer #DRA-104 location verified at target site',
      'TIMESTAMP: Photo & digital signature cryptographically sealed',
    ],
  },
  {
    title: 'Centralised Reporting',
    badge: 'AUTOMATED MIS PACKS',
    metrics: [
      { label: 'Schedule Cadence', value: 'Daily / Weekly' },
      { label: 'Format Compatibility', value: 'PDF/XLS/API' },
      { label: 'Audit Readiness', value: '100% Instant' },
    ],
    reports: [
      'Daily Portfolio Liquidation Summary',
      'SARFAESI Statutory Compliance Pack',
      'Field DRA Conduct Audit Stream',
    ],
    logs: [
      'REPORTING: Generated automated institutional MIS pack',
      'DELIVERY: Encrypted report transmitted to partner portal',
    ],
  },
  {
    title: 'Case Tracking',
    badge: 'FULL LIFECYCLE HISTORY',
    metrics: [
      { label: 'Event Retention', value: 'Permanent' },
      { label: 'Contact Logs', value: '100% Recorded' },
      { label: 'Search Speed', value: '<2ms Instant' },
    ],
    caseTimeline: [
      { time: '09:30 AM', event: 'Borrower Contacted via Verified Channel' },
      { time: '11:15 AM', event: 'Doorstep Verification Logged with Geo-Stamp' },
      { time: '02:45 PM', event: 'Statutory Notice Section 13(2) Executed' },
      { time: '05:20 PM', event: 'Repayment Plan Signed & Logged' },
    ],
    logs: ['CASE FILE #8492: Complete audit log exported for review'],
  },
  {
    title: 'Compliance Monitoring',
    badge: 'CONTINUOUS GOVERNANCE',
    metrics: [
      { label: 'Sampling Rate', value: 'Zero (100% Checked)' },
      { label: 'RBI Guidelines', value: 'Fully Aligned' },
      { label: 'Conduct Breaches', value: '0 Violations' },
    ],
    complianceChecks: [
      { rule: 'RBI Fair Practices Code', status: 'PASS 100%' },
      { rule: 'Direct Recovery Agent Certification (IIBF)', status: 'VERIFIED' },
      { rule: 'Call & Visit Hours Enforcement (08:00 - 19:00)', status: 'ACTIVE LOCK' },
      { rule: 'Data Confidentiality & NDA Scoping', status: 'ENCRYPTED' },
    ],
    logs: ['GOVERNANCE: Continuous audit engine running with 0 exceptions'],
  },
];

export default function TechnologyStorySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCap = technologyCapabilities[activeIdx];
  const monitor = MONITOR_DATA[activeIdx];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-28" aria-label="Technology Driven Recovery Operations">
      {/* Background radial glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,114,188,0.15) 0%, transparent 70%)' }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,114,188,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0072bc]/30 bg-[#0072bc]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#3d9ed6]">
            <Cpu size={14} />
            Proprietary Architecture
          </div>
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[38px]">
            Technology Driven Recovery Operations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">
            Click or select any platform capability to inspect its real-time operational monitor, workflow logic, and audit integrity.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-transparent to-[#3d9ed6]/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#3d9ed6] shadow-sm shadow-[#3d9ed6]/60" />
            <div className="h-0.5 w-10 rounded-full bg-gradient-to-l from-transparent to-[#3d9ed6]/60" />
          </div>
        </div>

        {/* ── 2-COLUMN COMMAND CENTER ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">

          {/* ── LEFT COLUMN: Interactive Capability Menu (01 - 08) ── */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5">
            {technologyCapabilities.map((cap, idx) => {
              const Icon = iconMap[cap.icon] || Workflow;
              const isActive = idx === activeIdx;

              return (
                <button
                  key={cap.title}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group relative flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-[#0072bc] bg-[#0072bc]/15 shadow-lg shadow-[#0072bc]/15'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                  }`}
                >
                  {/* Left active vertical indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[#0072bc]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5 pl-2">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? 'bg-[#0072bc] text-white'
                          : 'bg-white/10 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-[#3d9ed6]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`text-[14.5px] font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                          {cap.title}
                        </h3>
                      </div>
                      <p className="line-clamp-1 text-[12px] text-slate-400">
                        {cap.desc}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform duration-300 ${
                      isActive ? 'translate-x-1 text-[#3d9ed6]' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: Dark Banking Terminal / Monitor Screen ── */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#0b1329] shadow-2xl shadow-black/80">
              
              {/* TERMINAL TOP HEADER BAR */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] font-semibold text-slate-400">
                    <Terminal size={13} className="text-[#3d9ed6]" />
                    SM-TECH ENGINE // PLATFORM MONITOR
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10.5px] font-bold text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  SYSTEM ONLINE
                </div>
              </div>

              {/* TERMINAL BODY CONTENT (Dynamic per Active Capability) */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCap.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    {/* Active Title + Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3d9ed6]">
                          CAPABILITY {String(activeIdx + 1).padStart(2, '0')} OF 08
                        </span>
                        <h3 className="mt-1 text-2xl font-black text-white">
                          {activeCap.title}
                        </h3>
                      </div>
                      <span className="rounded-full border border-[#0072bc]/40 bg-[#0072bc]/20 px-3.5 py-1 font-mono text-[10.5px] font-bold text-[#3d9ed6]">
                        {monitor.badge}
                      </span>
                    </div>

                    {/* Key Metrics Row */}
                    <div className="grid grid-cols-3 gap-3">
                      {monitor.metrics.map((m) => (
                        <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center">
                          <div className="font-mono text-[17px] font-extrabold text-white sm:text-[20px]">
                            {m.value}
                          </div>
                          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* DYNAMIC VISUAL WIDGET PER CAPABILITY */}
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                      
                      {/* Pipeline Visual (Workflows) */}
                      {monitor.pipeline && (
                        <div>
                          <div className="mb-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>WORKFLOW STAGE PIPELINE</span>
                            <span className="text-[#3d9ed6]">AUTOMATED EXECUTION</span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            {monitor.pipeline.map((stage, sIdx) => (
                              <div key={stage} className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 rounded-xl border border-[#0072bc]/40 bg-[#0072bc]/20 px-3 py-1.5 text-[11.5px] font-bold text-white">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#3d9ed6]" />
                                  {stage}
                                </div>
                                {sIdx < monitor.pipeline.length - 1 && (
                                  <ChevronRight size={14} className="text-slate-600 hidden sm:block" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bucket Visual (Segmentation) */}
                      {monitor.buckets && (
                        <div>
                          <div className="mb-3 text-[11px] font-mono text-slate-400">
                            RISK BUCKET DISTRIBUTION MATRIX
                          </div>
                          <div className="space-y-2.5">
                            {monitor.buckets.map((b) => (
                              <div key={b.name} className="space-y-1">
                                <div className="flex justify-between text-[12px] font-medium text-slate-300">
                                  <span>{b.name}</span>
                                  <span className="font-mono font-bold text-white">{b.percent}%</span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                                  <div
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{ width: `${b.percent}%`, backgroundColor: b.color }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Analytics Visual */}
                      {monitor.analytics && (
                        <div>
                          <div className="mb-3 text-[11px] font-mono text-slate-400">
                            RESOLUTION PERFORMANCE IMPACT
                          </div>
                          <div className="space-y-2.5">
                            {monitor.analytics.map((a) => (
                              <div key={a.label} className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-[13px]">
                                <span className="text-slate-300">{a.label}</span>
                                <span className="font-mono font-bold text-emerald-400">{a.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Dashboard Grid */}
                      {monitor.dashboardGrid && (
                        <div className="grid grid-cols-2 gap-2.5">
                          {monitor.dashboardGrid.map((d) => (
                            <div key={d.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                              <span className="text-[10.5px] font-semibold text-slate-400">{d.title}</span>
                              <p className="mt-1 font-mono text-[15px] font-black text-white">{d.val}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Location Map Simulation */}
                      {monitor.locationView && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="flex items-center gap-1 text-[#3d9ed6]">
                              <MapPin size={13} />
                              {monitor.locationView.coords}
                            </span>
                            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-emerald-400 font-bold">
                              {monitor.locationView.status}
                            </span>
                          </div>
                          <div className="rounded-xl bg-white/5 p-3 text-[12.5px] text-slate-300">
                            📍 Location: <strong className="text-white">{monitor.locationView.address}</strong>
                            <div className="mt-1 font-mono text-[11px] text-slate-400">Timestamp: {monitor.locationView.time}</div>
                          </div>
                        </div>
                      )}

                      {/* Reports */}
                      {monitor.reports && (
                        <div className="space-y-2">
                          <div className="text-[11px] font-mono text-slate-400 mb-2">INSTITUTIONAL MIS PACKS</div>
                          {monitor.reports.map((r) => (
                            <div key={r} className="flex items-center gap-2 text-[12.5px] text-slate-200">
                              <CheckCircle2 size={14} className="text-[#3d9ed6]" />
                              {r}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Timeline */}
                      {monitor.caseTimeline && (
                        <div className="space-y-2">
                          <div className="text-[11px] font-mono text-slate-400 mb-2">ACCOUNT CHRONOLOGY STREAM</div>
                          {monitor.caseTimeline.map((t) => (
                            <div key={t.event} className="flex items-center gap-3 text-[12px]">
                              <span className="font-mono text-[11px] text-[#3d9ed6]">{t.time}</span>
                              <span className="text-slate-300">{t.event}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Compliance Checks */}
                      {monitor.complianceChecks && (
                        <div className="space-y-2">
                          <div className="text-[11px] font-mono text-slate-400 mb-2">STATUTORY RULES ENFORCED</div>
                          {monitor.complianceChecks.map((c) => (
                            <div key={c.rule} className="flex items-center justify-between text-[12px] rounded bg-white/5 p-2">
                              <span className="text-slate-300">{c.rule}</span>
                              <span className="font-mono font-bold text-emerald-400 text-[11px]">{c.status}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>

                    {/* REAL-TIME SYSTEM LOG STREAM */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-[11px]">
                      <div className="mb-2 flex items-center justify-between text-slate-500">
                        <span className="flex items-center gap-1.5 text-[#3d9ed6]">
                          <Activity size={12} className="animate-pulse" />
                          REAL-TIME AUDIT STREAM
                        </span>
                        <span>LIVE LOGS</span>
                      </div>
                      <div className="space-y-1 text-slate-400">
                        {monitor.logs.map((log, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2">
                            <span className="text-[#3d9ed6]">&gt;</span>
                            <span className="text-slate-300">{log}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* TERMINAL FOOTER BAR */}
              <div className="border-t border-white/10 bg-white/5 px-6 py-3 text-center font-mono text-[11px] text-slate-400">
                SM ASSOCIATES PLATFORM ENGINE · 100% AUDIT-LOGGED RECOVERY INFRASTRUCTURE
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
