import { useState } from 'react';
import {
  Landmark, Building2, BadgeCheck, PhoneCall, Search, FileSearch,
  Cpu, Users, Warehouse, Gavel, Scale, Shield, Workflow,
} from 'lucide-react';

// SM Associates Recovery Operations Network.
// Architecture: nodes are HTML (crisp icons + labels, easy hover/focus),
// connection lines are a single SVG layer underneath using the same
// percentage coordinate space (viewBox 0-100, preserveAspectRatio none,
// non-scaling strokes) — so the whole graph is fluid at any size with
// zero layout math in JS. Float/pulse are pure CSS (GPU, gated behind
// prefers-reduced-motion); scroll-reveal is driven externally by GSAP
// targeting .tcx-node / .tcx-line.

const NODES = [
  { id: 'os', label: 'Recovery OS', icon: Workflow, x: 50, y: 50, core: true },
  { id: 'bank', label: 'Banking Partners', icon: Landmark, x: 16, y: 10 },
  { id: 'nbfc', label: 'NBFCs', icon: Building2, x: 50, y: 6 },
  { id: 'comp', label: 'Compliance', icon: BadgeCheck, x: 84, y: 10 },
  { id: 'tele', label: 'Tele Calling', icon: PhoneCall, x: 7, y: 36 },
  { id: 'fraud', label: 'Fraud Investigation', icon: FileSearch, x: 27, y: 27 },
  { id: 'ai', label: 'AI Monitoring', icon: Cpu, x: 73, y: 26 },
  { id: 'verif', label: 'Verification', icon: Search, x: 93, y: 34 },
  { id: 'field', label: 'Field Collections', icon: Users, x: 10, y: 64 },
  { id: 'asset', label: 'Asset Recovery', icon: Warehouse, x: 90, y: 62 },
  { id: 'sarf', label: 'SARFAESI', icon: Gavel, x: 22, y: 88 },
  { id: 'legal', label: 'Legal Coordination', icon: Scale, x: 50, y: 94 },
  { id: 'sec', label: 'Security & Custodian', icon: Shield, x: 78, y: 88 },
];

// Every capability connects to the core; a few quiet cross-links add
// organic texture without clutter.
const LINKS = [
  ...NODES.filter((n) => !n.core).map((n) => ['os', n.id]),
  ['bank', 'nbfc'],
  ['tele', 'field'],
  ['sarf', 'legal'],
  ['legal', 'sec'],
  ['ai', 'comp'],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function RecoveryNetworkViz() {
  const [active, setActive] = useState(null);

  const isNodeLit = (id) =>
    active !== null &&
    (id === active || LINKS.some(([a, b]) => (a === active && b === id) || (b === active && a === id)));

  return (
    <div className="tcx-viz-stage" aria-label="SM Associates recovery operations network diagram" role="img">
      <svg
        className="tcx-viz-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {LINKS.map(([a, b]) => {
          const na = byId[a];
          const nb = byId[b];
          const lit = active !== null && (a === active || b === active);
          return (
            <line
              key={`${a}-${b}`}
              className={`tcx-line${lit ? ' lit' : ''}`}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {NODES.map((n, i) => {
        const Icon = n.icon;
        return (
          <div
            key={n.id}
            className={`tcx-node${n.core ? ' core' : ''}${isNodeLit(n.id) ? ' lit' : ''}${active && !isNodeLit(n.id) ? ' dim' : ''}`}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Inner wrapper carries the idle float so it never fights the
                GSAP reveal transform on the outer node. */}
            <div className="tcx-node-inner" style={{ animationDelay: `${(i % 5) * -1.7}s`, animationDuration: `${6 + (i % 4) * 1.3}s` }}>
              <span className="tcx-node-circle"><Icon size={n.core ? 22 : 17} strokeWidth={1.8} /></span>
              <span className="tcx-node-label">{n.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
