import React from 'react';
import { ShieldCheck, Award, Headset, MapPin } from 'lucide-react';
import { clientSections } from '../data/clientsPageData';

// Approved, permission-cleared client list
const approvedLogos = clientSections.flatMap((s) => s.clients);
const sortedLogos = [...approvedLogos].sort((a, b) => a.name.localeCompare(b.name));

const MAX_PER_ROW = 12;
const ROW_COUNT = Math.max(4, Math.ceil(sortedLogos.length / MAX_PER_ROW));
const chunkSize = Math.ceil(sortedLogos.length / ROW_COUNT);
const logoRows = Array.from({ length: ROW_COUNT }, (_, i) =>
  sortedLogos.slice(i * chunkSize, (i + 1) * chunkSize)
).filter((row) => row.length > 0);

// Confirmed, management-approved trust facts with clean premium vector icons
const FACTS = [
  { Icon: ShieldCheck, v: 'ISO/IEC 27001', k: 'Certified Information Security' },
  { Icon: Award, v: 'IIBF DRA', k: 'Certified Field Recovery Teams' },
  { Icon: Headset, v: '100%', k: 'Call Recording & Audit Trail' },
  { Icon: MapPin, v: 'GPS-Enabled', k: 'Ground Operations' },
];

export default function TrustedCertifiedSection() {
  return (
    <section className="tc7 bg-white py-10 sm:py-12 relative overflow-hidden" id="trust">
      <div className="fg-wrap tc7-head text-center max-w-5xl mx-auto mb-8 px-4">
        <span className="fg-eyebrow text-[11px] font-mono font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3.5 py-1.5 rounded-full inline-block mb-2.5 border border-[#0072bc]/20">
          TRUSTED &amp; CERTIFIED
        </span>
        <h2 className="tc7-title text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Banks, NBFCs and Fintechs Already Backing Our Execution
        </h2>
      </div>

      <div className="trust6-rows mb-8 opacity-90">
        {logoRows.map((row, r) => {
          const track = [...row, ...row];
          return (
            <div className="trust6-marquee" key={r}>
              <div
                className={`trust6-track${r % 2 === 1 ? ' trust6-track--rev' : ''}`}
                style={{ animationDuration: `${40 + r * 8}s` }}
              >
                {track.map((client, i) => (
                  <span className="tlogo bg-white border border-slate-200 p-2.5 rounded-xl shadow-xs" key={`${client.slug}-${i}`}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FACTS.map(({ Icon, v, k }) => (
            <div
              key={v}
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0072bc] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Icon size={20} strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug truncate">{v}</span>
                <span className="block text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 leading-tight truncate">{k}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
