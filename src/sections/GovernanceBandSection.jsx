import { ShieldCheck, BadgeCheck, Mic, MapPin } from 'lucide-react';

// Confirmed, management-approved trust facts only — this band is the
// homepage's certification strip. Do not add unverified claims here.
// Workforce headcount is shown once, in the Metrics section below — not
// duplicated here.
const FACTS = [
  { icon: ShieldCheck, v: 'ISO/IEC 27001', k: 'Certified Information Security' },
  { icon: BadgeCheck, v: 'IIBF DRA', k: 'Certified Field Recovery Teams' },
  { icon: Mic, v: '100%', k: 'Call Recording & Audit Trail' },
  { icon: MapPin, v: 'GPS-Enabled', k: 'Ground Operations' },
];

export default function GovernanceBandSection() {
  return (
    <section
      id="governance-band"
      style={{ background: '#fff', padding: '56px 0', borderTop: '1px solid #e8ecf4', borderBottom: '1px solid #e8ecf4' }}
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
                color: '#C8922A',
              }}
            >
              Governance & Certification
            </div>
            <div style={{ marginTop: 8, fontSize: 14, color: '#7b849e', maxWidth: '24ch', lineHeight: 1.5 }}>
              The controls behind every engagement.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {FACTS.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.v}
                  className="gband-fact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '4px 28px',
                    borderLeft: i > 0 ? '1px solid #e8ecf4' : 'none',
                    transition: 'transform .3s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: 12,
                      background: 'rgba(51,102,255,0.09)',
                      color: '#3366FF',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <span>
                    <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#0a0e1a', letterSpacing: '-0.01em' }}>
                      {f.v}
                    </span>
                    <span style={{ display: 'block', fontSize: 11.5, color: '#7b849e', marginTop: 2 }}>
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
