import { clientLogos } from '../data/clientLogos';

const track = [...clientLogos, ...clientLogos];

export default function TrustMarqueeSection() {
  return (
    <section className="trust6" id="trust">
      <p className="trust6-label">Trusted by India&apos;s leading financial institutions</p>
      <div className="trust6-marquee">
        <div className="trust6-track">
          {track.map((client, i) => (
            <span className="tlogo" key={`${client.id}-${i}`}>
              <img src={client.logo} alt={client.name} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
