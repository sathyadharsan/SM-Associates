import { useState } from 'react';
import IndiaCoverageMap from '../components/coverage/IndiaCoverageMap';
import LocationPanel from '../components/coverage/LocationPanel';
import { locations as allLocations } from '../data/LocationData';

// SM Associates is a South India operation, Chennai HQ — these are the
// only real offices in scope for this section (excludes the Pune/
// Ahmedabad/Jaipur/Lucknow entries in the shared data set, which are
// North/West India and out of scope here).
const SOUTH_IDS = ['chennai', 'bengaluru', 'hyderabad', 'coimbatore', 'madurai', 'trichy', 'salem', 'tirunelveli', 'kochi'];
const southLocations = allLocations.filter((l) => SOUTH_IDS.includes(l.id));
const SOUTH_STATES = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];

export default function CommandCenterSection() {
  const activeMode = 'coverage';
  const [activeId, setActiveId] = useState(null);
  const [hoverId, setHoverId] = useState(null);

  const activeLocation = activeId ? southLocations.find((l) => l.id === activeId) : null;

  return (
    <section className="cmd6-light" id="cmd" style={{ background: '#fff', padding: '120px 0' }}>
      <div className="fg-wrap">
        <div style={{ marginBottom: 44 }}>
          <span className="fg-eyebrow">South India Operations</span>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,48px)', marginTop: 18 }}>
            Chennai-led command,<br />built for the South.
          </h2>
          <p style={{ marginTop: 16, fontSize: 17, color: 'var(--ink-2)', maxWidth: '56ch' }}>
            19 branches across {SOUTH_STATES.join(', ')} — coordinated from Chennai HQ
            through the {southLocations.length} regional hubs shown here. Select a hub to see its coverage.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start">
          <IndiaCoverageMap
            locations={southLocations}
            activeMode={activeMode}
            activeId={activeId}
            hoverId={hoverId}
            onHover={setHoverId}
            onSelect={setActiveId}
          />
          <LocationPanel location={activeLocation} locations={southLocations} states={SOUTH_STATES} />
        </div>
      </div>
    </section>
  );
}
