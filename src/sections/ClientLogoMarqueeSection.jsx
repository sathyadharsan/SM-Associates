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
    <section className="relative bg-white py-12 sm:py-16 overflow-hidden">
      {/* Edge gradient overlays for smooth seamless infinite scroll effect */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center flex flex-col items-center justify-center">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight text-center">
          Trusted by India&apos;s Top Scheduled Commercial Banks &amp; NBFCs
        </h3>
      </div>

      {/* Marquee Rows without background card boxes */}
      <div className="trust6-rows opacity-95 space-y-4">
        {/* Row 1 */}
        <div className="trust6-marquee">
          <div className="trust6-track" style={{ animationDuration: '45s' }}>
            {[...row1, ...row1].map((client, i) => (
              <div
                key={`r1-${client.slug}-${i}`}
                className="flex items-center justify-center h-16 w-40 sm:w-52 px-4 shrink-0 transition-all duration-300 group/logo"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-10 sm:max-h-12 max-w-[140px] sm:max-w-[165px] object-contain opacity-85 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-300 filter drop-shadow-xs"
                  style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse) */}
        <div className="trust6-marquee">
          <div className="trust6-track trust6-track--rev" style={{ animationDuration: '50s' }}>
            {[...row2, ...row2].map((client, i) => (
              <div
                key={`r2-${client.slug}-${i}`}
                className="flex items-center justify-center h-16 w-40 sm:w-52 px-4 shrink-0 transition-all duration-300 group/logo"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-10 sm:max-h-12 max-w-[140px] sm:max-w-[165px] object-contain opacity-85 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-300 filter drop-shadow-xs"
                  style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
