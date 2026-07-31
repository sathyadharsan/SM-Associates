import React from 'react';
import { clientSections } from '../data/clientsPageData';

const approvedLogos = clientSections.flatMap((s) => s.clients);
const sortedLogos = [...approvedLogos].sort((a, b) => a.name.localeCompare(b.name));

// Split into 2 smooth infinite rows
const half = Math.ceil(sortedLogos.length / 2);
const row1 = sortedLogos.slice(0, half);
const row2 = sortedLogos.slice(half);

export default function ClientLogoMarqueeSection() {
  return (
    <section className="bg-slate-50/70 py-10 sm:py-12 border-y border-slate-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">
          Trusted by India's Top Scheduled Commercial Banks &amp; NBFCs
        </h3>
      </div>

      {/* Marquee Rows */}
      <div className="trust6-rows opacity-95">
        {/* Row 1 */}
        <div className="trust6-marquee mb-3">
          <div className="trust6-track" style={{ animationDuration: '45s' }}>
            {[...row1, ...row1].map((client, i) => (
              <span
                key={`r1-${client.slug}-${i}`}
                className="tlogo bg-white border border-slate-200/90 p-2.5 sm:p-3 rounded-xl shadow-xs flex items-center justify-center h-14 w-36 sm:w-44 shrink-0 hover:border-[#0072bc] hover:shadow-md transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-9 max-w-[130px] object-contain hover:scale-105 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = 'none';
                  }}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse) */}
        <div className="trust6-marquee">
          <div className="trust6-track trust6-track--rev" style={{ animationDuration: '50s' }}>
            {[...row2, ...row2].map((client, i) => (
              <span
                key={`r2-${client.slug}-${i}`}
                className="tlogo bg-white border border-slate-200/90 p-2.5 sm:p-3 rounded-xl shadow-xs flex items-center justify-center h-14 w-36 sm:w-44 shrink-0 hover:border-[#0072bc] hover:shadow-md transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-9 max-w-[130px] object-contain hover:scale-105 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = 'none';
                  }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
