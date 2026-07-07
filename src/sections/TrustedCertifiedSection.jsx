import { ShieldCheck, BadgeCheck, Mic, MapPin } from 'lucide-react';
import { clientSections } from '../data/clientsPageData';

// Approved, permission-cleared client list (same source as the /clients
// page) — flattened for the marquee. Do NOT source from the legacy
// clientLogos.js list, which predates the client-permission review.
const approvedLogos = clientSections.flatMap((s) => s.clients);

// A-Z order so the wall reads left-to-right, top-to-bottom like a directory —
// row 1 starts with the alphabetically-first client, the final row ends
// with the alphabetically-last one.
const sortedLogos = [...approvedLogos].sort((a, b) => a.name.localeCompare(b.name));

// Caps how many logos share one marquee row — once the roster grows past
// that, another row is added automatically instead of cramming the extras
// into the existing rows. Always at least 2 rows.
const MAX_PER_ROW = 16;
const ROW_COUNT = Math.max(2, Math.ceil(sortedLogos.length / MAX_PER_ROW));
const chunkSize = Math.ceil(sortedLogos.length / ROW_COUNT);
const logoRows = Array.from({ length: ROW_COUNT }, (_, i) =>
  sortedLogos.slice(i * chunkSize, (i + 1) * chunkSize)
).filter((row) => row.length > 0);

// Confirmed, management-approved trust facts only.
const FACTS = [
  { icon: ShieldCheck, v: 'ISO/IEC 27001', k: 'Certified Information Security' },
  { icon: BadgeCheck, v: 'IIBF DRA', k: 'Certified Field Recovery Teams' },
  { icon: Mic, v: '100%', k: 'Call Recording & Audit Trail' },
  { icon: MapPin, v: 'GPS-Enabled', k: 'Ground Operations' },
];

export default function TrustedCertifiedSection() {
  return (
    <section className="tc7" id="trust">
      <div className="fg-wrap tc7-head">
        <span className="fg-eyebrow">Trusted &amp; Certified</span>
        <h2 className="tc7-title">Banks, NBFCs and fintechs already backing our execution.</h2>
        <span className="tc7-underline" aria-hidden="true" />
      </div>

      <div className="trust6-rows" style={{ marginTop: 28 }}>
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
                      alt={client.name}
                      onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                    />
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fg-wrap">
        <div className="tc7-facts">
          {FACTS.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.v} className="tc7-fact" style={{ borderLeft: i > 0 ? '1px solid var(--line)' : 'none' }}>
                <span className="tc7-fact-ico"><Icon size={18} /></span>
                <span>
                  <span className="tc7-fact-v">{f.v}</span>
                  <span className="tc7-fact-k">{f.k}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
