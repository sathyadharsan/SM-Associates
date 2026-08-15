import React from 'react';
import { Layers, ShieldCheck, Users, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BentoWorkflowSection() {
  return (
    <section className="py-24 bg-white relative" id="bento-workflow">
      <div className="fg-wrap max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14 text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-center">
            Set up a recovery workflow in minutes
          </h2>
          {/* Premium Level Accent Line */}
          <div className="mt-3 mb-2 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
          <p className="text-slate-600 text-lg mt-3 text-center">
            Our framework makes executing institutional recovery seamless. Think of it as a purpose-built resolution engine tailored for compliance, field operations, and legal execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: Top Wide Card */}
          <div className="bento-card bento-card-full bg-white border border-slate-200 text-slate-900 shadow-md min-h-[320px]">

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 h-full">
              <div className="max-w-md">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc]">You make the rules</span>
                <h3 className="text-3xl font-extrabold mt-2 text-slate-900 leading-snug">
                  Automated field assignment &amp; real-time compliance audit
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed font-medium">
                  Every field visit and legal notice is geotagged, timestamped, and logged under strict RBI and ISO/IEC 27001 data protection guidelines.
                </p>
              </div>

              {/* Floating Toast Cards inside Card 1 */}
              <div className="space-y-3 w-full md:w-auto">
                <div className="bento-toast-float bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-full bg-[#0072bc] text-white flex items-center justify-center font-bold">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Physical Verification Complete</div>
                    <div className="text-[10px] text-slate-500 font-medium">GPS Matched · 19 Branches</div>
                  </div>
                </div>

                <div className="bento-toast-float bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-full bg-[#0072bc] text-white flex items-center justify-center font-bold">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">SARFAESI Notice Issued</div>
                    <div className="text-[10px] text-[#0072bc] font-semibold">Under Section 13(2)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Bottom Left Card */}
          <div className="bento-card bg-slate-50 min-h-[300px] border border-slate-200/80 rounded-3xl p-7">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#0072bc]/10 text-[#0072bc] border border-[#0072bc]/20 flex items-center justify-center font-bold mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-sora">
                Easy, automated resolution
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Give your team a unified dashboard to manage early-stage soft collections, hard recovery, and NPA resolution with automated escalation rules.
              </p>
            </div>

            {/* Mini Dashboard Widget preview */}
            <div className="mt-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                <span>Portfolio Under Recovery</span>
                <span className="text-[#0072bc] font-mono">ACTIVE</span>
              </div>
              <div className="text-2xl font-black text-slate-900 mt-1 font-mono">₹485 Cr+</div>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-[#0072bc] h-full w-[85%]" />
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Right Card */}
          <div className="bento-card bg-slate-50 min-h-[300px] border border-slate-200/80 rounded-3xl p-7">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#0072bc]/10 text-[#0072bc] border border-[#0072bc]/20 flex items-center justify-center font-bold mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-sora">
                Grow the network around your portfolio
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Deploy 1,500+ certified field officers across 6 states &amp; UTs, supported by specialized advocate panels and recovery strategists.
              </p>
            </div>

            {/* Executive Network Hub Cards */}
            <div className="mt-6 flex flex-col gap-2.5">
              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0072bc]/10 text-[#0072bc]">
                  <Users size={18} strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-extrabold text-slate-900">1,500+ Certified Field Officers</div>
                  <div className="text-[10.5px] font-semibold text-slate-500">6 States / UTs Coverage across South India</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0072bc]/10 text-[#0072bc]">
                  <ShieldCheck size={18} strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-extrabold text-slate-900">Empanelled Advocates &amp; Audit Panel</div>
                  <div className="text-[10.5px] font-semibold text-slate-500">SARFAESI Enforcement &amp; RBI Compliance Audit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
