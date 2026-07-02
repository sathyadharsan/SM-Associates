import { clientSections } from '../data/clientsPageData';

// Approved, permission-cleared client list (same source as the /clients
// page) — flattened for the marquee. Do NOT source from the legacy
// clientLogos.js list, which predates the client-permission review.
const approvedLogos = clientSections.flatMap((s) => s.clients);
const track = [...approvedLogos, ...approvedLogos];

export default function TrustMarqueeSection() {
  return (
    <section className="trust6" id="trust">
      <p className="trust6-label">Trusted by India&apos;s leading financial institutions</p>
      <div className="trust6-marquee">
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
    </section>
  );
}
