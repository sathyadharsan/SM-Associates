import { ShieldCheck, Users, BadgeCheck, Mic, MapPin } from 'lucide-react';

// Confirmed, management-approved trust facts only — this band is the
// homepage's certification strip. Do not add unverified claims here.
const FACTS = [
  { icon: ShieldCheck, v: 'ISO/IEC 27001', k: 'Certified Information Security' },
  { icon: BadgeCheck, v: 'IIBF DRA', k: 'Certified Field Recovery Teams' },
  { icon: Users, v: '1,500+', k: 'Enterprise Workforce' },
  { icon: Mic, v: '100%', k: 'Call Recording & Audit Trail' },
  { icon: MapPin, v: 'GPS-Enabled', k: 'Ground Operations' },
];

export default function GovernanceBandSection() {
  return (
    <section
      id="governance-band"
      style={{ background: '#0F172A', padding: '56px 0' }}
    >
      <div className="fg-wrap">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 28,
          }}
        >
          <div style={{ minWidth: 180 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#F59E0B',
              }}
            >
              Governance & Certification
            </div>
            <div style={{ marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.55)', maxWidth: '24ch', lineHeight: 1.5 }}>
              The controls behind every engagement.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '28px 40px',
              alignItems: 'center',
            }}
          >
            {FACTS.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.v} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: 12,
                      background: 'rgba(51,102,255,0.14)',
                      color: '#7C9EFF',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <span>
                    <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                      {f.v}
                    </span>
                    <span style={{ display: 'block', fontSize: 11.5, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>
                      {f.k}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
