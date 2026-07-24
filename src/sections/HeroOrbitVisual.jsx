import { Bot, Smartphone, Radar, Gavel, FileCheck2, BarChart3 } from 'lucide-react';

// Six real capability modules (same set as EndToEndPlatformArchitectureSection)
// orbiting a central hub — visualizes "One Accountable Platform" right in the
// hero, before the visitor ever reaches that section. Structural idea learned
// from studying collekt.ai's hub-and-spoke hero diagram; content, brand color
// and implementation are entirely our own — no visual assets or code copied.
const NODES = [
  { icon: Bot, label: 'AI Assisted Recovery', angle: -90 },
  { icon: Smartphone, label: 'Digital Collections', angle: -30 },
  { icon: Radar, label: 'Field Intelligence', angle: 30 },
  { icon: Gavel, label: 'Legal Recovery', angle: 90 },
  { icon: FileCheck2, label: 'Verification', angle: 150 },
  { icon: BarChart3, label: 'Analytics & Governance', angle: 210 },
];

const RADIUS = 42; // % of stage — node orbit distance from center

export default function HeroOrbitVisual() {
  return (
    <div className="orbit6-stage" role="img" aria-label="SM Associates recovery platform connecting AI Assisted Recovery, Digital Collections, Field Intelligence, Legal Recovery, Verification and Analytics & Governance">
      <div className="orbit6-glow" />
      <div className="orbit6-ring orbit6-ring--outer" />
      <div className="orbit6-ring orbit6-ring--inner" />

      <div className="orbit6-spin" aria-hidden="true">
        <svg className="orbit6-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {NODES.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = 50 + RADIUS * Math.cos(rad);
            const y = 50 + RADIUS * Math.sin(rad);
            return (
              <line key={n.label} x1="50" y1="50" x2={x} y2={y} className="orbit6-line" style={{ animationDelay: `${i * -0.5}s` }} />
            );
          })}
        </svg>

        {NODES.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = 50 + RADIUS * Math.cos(rad);
          const y = 50 + RADIUS * Math.sin(rad);
          const Icon = n.icon;
          return (
            <div key={n.label} className="orbit6-node" style={{ left: `${x}%`, top: `${y}%` }}>
              <div className="orbit6-node-inner">
                <span className="orbit6-node-badge" style={{ animationDelay: `${i * 0.35}s` }}><Icon size={19} strokeWidth={2.4} /></span>
                <span className="orbit6-node-label">{n.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="orbit6-hub">
        <div className="orbit6-hub-pulse" />
        <img src="/sm-logo.png" alt="" />
      </div>
    </div>
  );
}
