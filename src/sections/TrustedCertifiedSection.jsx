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
  { artType: 'mission', v: 'IIBF DRA', k: 'Certified Field Recovery Teams', color: '#059669' },
  { artType: 'dialer', v: '100%', k: 'Call Recording & Audit Trail', color: '#7c3aed' },
  { artType: 'trace', v: 'GPS-Enabled', k: 'Ground Operations', color: '#d97706' },
];

export default function TrustedCertifiedSection() {
  return (
    <section className="tc7 bg-white py-16 border-b border-slate-200/80" id="trust">
      <div className="fg-wrap tc7-head text-center max-w-3xl mx-auto mb-10">
        <span className="fg-eyebrow text-xs font-mono font-bold uppercase tracking-widest text-[#0072bc]">Trusted &amp; Certified</span>
        <h2 className="tc7-title text-3xl font-serif font-bold text-slate-900 mt-2">Banks, NBFCs and fintechs already backing our execution.</h2>
      </div>

      <div className="trust6-rows mb-12">
        {logoRows.map((row, r) => {
          const track = [...row, ...row];
          return (
            <div className="trust6-marquee" key={r}>
              <div
                className={`trust6-track${r % 2 === 1 ? ' trust6-track--rev' : ''}`}
                style={{ animationDuration: `${40 + r * 8}s` }}
              >
                {track.map((client, i) => (
                  <span className="tlogo" key={`${client.slug}-${i}`}>
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
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-1 rounded-2xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                <RichIcon type={f.artType} size={44} />
              </div>
              <div>
                <span className="block text-base font-extrabold text-slate-900 tracking-tight leading-snug">{f.v}</span>
                <span className="block text-xs font-medium text-slate-500 mt-0.5 leading-relaxed">{f.k}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
