import { ShieldCheck, BadgeCheck, Mic, MapPin } from 'lucide-react';
import { clientSections } from '../data/clientsPageData';

// Approved, permission-cleared client list (same source as the /clients
// page) — flattened for the marquee. Do NOT source from the legacy
// clientLogos.js list, which predates the client-permission review.
const approvedLogos = clientSections.flatMap((s) => s.clients);
const track = [...approvedLogos, ...approvedLogos];

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
      <div className="fg-wrap">
        <span className="fg-eyebrow">Trusted &amp; Certified</span>
      </div>

      <div className="trust6-marquee" style={{ marginTop: 28 }}>
        <div className="trust6-track">
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
