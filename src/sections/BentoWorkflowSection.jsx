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
            {/* Background graphic elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0072bc]/5 rounded-full blur-3xl pointer-events-none" />

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
          <div className="bento-card bg-slate-50 min-h-[300px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Easy, automated resolution
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Give your team a unified dashboard to manage early-stage soft collections, hard recovery, and NPA resolution with automated escalation rules.
              </p>
            </div>

            {/* Mini Dashboard Widget preview */}
            <div className="mt-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                <span>Monitor & Manage</span>
                <span className="text-indigo-600">Active</span>
              </div>
              <div className="text-2xl font-black text-slate-900 mt-1">₹375,902,000</div>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-indigo-600 h-full w-[78%]" />
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Right Card */}
          <div className="bento-card bg-slate-50 min-h-[300px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Grow the network around your portfolio
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Deploy 1,000+ certified field officers across 5 states, supported by specialized advocate panels and recovery strategists.
              </p>
            </div>

            {/* Avatar Wheel Visual */}
            <div className="avatar-wheel-wrap mt-4">
              <div className="avatar-node bg-indigo-600 left-[50%] -translate-x-[50%] top-0">
                SM
              </div>
              <div className="avatar-node bg-blue-500 left-4 bottom-2">
                FO
              </div>
              <div className="avatar-node bg-emerald-500 right-4 bottom-2">
                LEG
              </div>
              <div className="avatar-node bg-purple-500 left-[50%] -translate-x-[50%] bottom-0">
                AUD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
