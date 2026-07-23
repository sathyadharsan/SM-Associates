import React from 'react';
import RichIcon from '../components/sections/shared/RichIcon';

// Confirmed, management-approved trust facts with Storyset-style RichIcon vector artwork
const FACTS = [
  { artType: 'compliance', v: 'ISO/IEC 27001', k: 'Certified Information Security', color: '#0072bc' },
  { artType: 'mission', v: 'IIBF DRA', k: 'Certified Field Recovery Teams', color: '#059669' },
  { artType: 'dialer', v: '100%', k: 'Call Recording & Audit Trail', color: '#7c3aed' },
  { artType: 'trace', v: 'GPS-Enabled', k: 'Ground Operations', color: '#d97706' },
];

export default function GovernanceBandSection() {
  return (
    <section
      id="governance-band"
      className="bg-white py-14 border-t border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Eyebrow & Title */}
          <div className="min-w-[200px]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0072bc]">
              Governance &amp; Certification
            </span>
            <p className="mt-1 text-sm font-medium text-slate-500 max-w-xs leading-relaxed">
              The controls behind every engagement.
            </p>
          </div>

          {/* 4 Storyset Artwork Fact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
            {FACTS.map((f) => (
              <div
                key={f.v}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-1 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <RichIcon type={f.artType} size={42} />
                </div>
                <div>
                  <span className="block text-sm font-extrabold text-slate-900 tracking-tight leading-snug">
                    {f.v}
                  </span>
                  <span className="block text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
                    {f.k}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
