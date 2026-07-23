import React from 'react';
import { clientSections } from '../data/clientsPageData';
import RichIcon from '../components/sections/shared/RichIcon';

// Approved, permission-cleared client list
const approvedLogos = clientSections.flatMap((s) => s.clients);
const sortedLogos = [...approvedLogos].sort((a, b) => a.name.localeCompare(b.name));

const MAX_PER_ROW = 12;
const ROW_COUNT = Math.max(4, Math.ceil(sortedLogos.length / MAX_PER_ROW));
const chunkSize = Math.ceil(sortedLogos.length / ROW_COUNT);
const logoRows = Array.from({ length: ROW_COUNT }, (_, i) =>
  sortedLogos.slice(i * chunkSize, (i + 1) * chunkSize)
).filter((row) => row.length > 0);

// Confirmed, management-approved trust facts with Storyset-style RichIcon vector artwork
const FACTS = [
  { artType: 'compliance', v: 'ISO/IEC 27001', k: 'Certified Information Security', color: '#0072bc' },
  { artType: 'mission', v: 'IIBF DRA', k: 'Certified Field Recovery Teams', color: '#0072bc' },
  { artType: 'dialer', v: '100%', k: 'Call Recording & Audit Trail', color: '#0072bc' },
  { artType: 'trace', v: 'GPS-Enabled', k: 'Ground Operations', color: '#0072bc' },
];

export default function TrustedCertifiedSection() {
  return (
    <section className="tc7 bg-white py-24 border-b border-slate-200/90 relative overflow-hidden" id="trust">
      <div className="fg-wrap tc7-head text-center max-w-4xl mx-auto mb-14">
        <span className="fg-eyebrow text-xs font-mono font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-4 py-2 rounded-full inline-block mb-3 border border-[#0072bc]/20">
          TRUSTED &amp; CERTIFIED
        </span>
        <h2 className="tc7-title text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
          Banks, NBFCs and Fintechs backing our execution.
        </h2>
      </div>

      <div className="trust6-rows mb-16 opacity-90">
        {logoRows.map((row, r) => {
          const track = [...row, ...row];
          return (
            <div className="trust6-marquee" key={r}>
              <div
                className={`trust6-track${r % 2 === 1 ? ' trust6-track--rev' : ''}`}
                style={{ animationDuration: `${40 + r * 8}s` }}
              >
                {track.map((client, i) => (
                  <span className="tlogo bg-white border border-slate-200 p-3 rounded-2xl shadow-xs" key={`${client.slug}-${i}`}>
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                    />
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACTS.map((f) => (
            <div
              key={f.v}
              className="flex items-center gap-4 p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0072bc]/40 transition-all duration-300 group"
            >
              <div className="p-2 rounded-2xl bg-[#0072bc]/10 border border-[#0072bc]/20 shrink-0">
                <RichIcon type={f.artType} size={40} />
              </div>
              <div>
                <span className="block text-lg font-extrabold text-slate-900 tracking-tight">{f.v}</span>
                <span className="block text-xs font-mono font-medium text-slate-500 mt-1">{f.k}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
