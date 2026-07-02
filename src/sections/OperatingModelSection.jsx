import { useEffect, useRef } from 'react';
import { operatingModelStages } from '../data/flagshipHomeData';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// ---------------------------------------------------------------------------
// Stage visuals — detailed, flat "operations UI" vignettes rendered as inline
// SVG. All case IDs, amounts and timestamps are illustrative sample data
// (same convention as HeroDashboardVisual), NOT company-wide claims.
// Palette: ink #0F172A · sub #64748B · blue #3366FF · tints #C7D7FF/#E0E8FF.
// ---------------------------------------------------------------------------

const MONO = { fontFamily: 'var(--mono, ui-monospace, SFMono-Regular, monospace)' };
const INK = '#0F172A';
const SUB = '#64748B';
const BLUE = '#3366FF';
const T1 = '#C7D7FF';
const T2 = '#E0E8FF';
const LINE = '#E2E8F0';
const GREEN = '#10B981';
const AMBER = '#F59E0B';

function Svg({ children, label }) {
  return (
    <div className="pv" style={{ inset: 0 }}>
      <svg viewBox="0 0 400 600" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label={label}>
        {children}
      </svg>
    </div>
  );
}

/* 01 — Portfolio Allocation: book splits down an allocation rail to branches */
function PvAlloc() {
  const branches = [
    { y: 220, name: 'CHN-04 · Chennai', sla: 'SLA 48H', load: 34 },
    { y: 340, name: 'MDU-02 · Madurai', sla: 'SLA 72H', load: 22 },
    { y: 460, name: 'KOC-01 · Kochi', sla: 'SLA 72H', load: 18 },
  ];
  return (
    <Svg label="Portfolio being segmented and routed to branches">
      <rect x="100" y="36" width="220" height="118" rx="12" fill="#fff" stroke={LINE} />
      <text x="120" y="64" fontSize="9.5" fill={SUB} style={MONO}>INCOMING BOOK</text>
      <text x="120" y="92" fontSize="21" fontWeight="700" fill={INK}>2,400</text>
      <text x="188" y="92" fontSize="9.5" fill={SUB} style={MONO}>ACCOUNTS</text>
      <rect x="120" y="106" width="180" height="8" rx="4" fill={T2} />
      <rect x="120" y="106" width="118" height="8" rx="4" fill={BLUE} />
      <text x="120" y="132" fontSize="8.5" fill={SUB} style={MONO}>RISK-SEGMENTED · GEO-ROUTED</text>

      <line x1="88" y1="154" x2="88" y2="500" stroke={T1} strokeWidth="2" />
      <path d="M100 154 C 88 154, 88 170, 88 190" fill="none" stroke={T1} strokeWidth="2" />
      {[0, 1, 2].map((d) => (
        <circle key={d} r="4" fill={BLUE}>
          <animateMotion dur="3.2s" begin={`${d * 1.05}s`} repeatCount="indefinite" path="M88 170 L88 500" />
        </circle>
      ))}

      {branches.map((b) => (
        <g key={b.name}>
          <circle cx="88" cy={b.y + 40} r="6" fill="#fff" stroke={BLUE} strokeWidth="2" />
          <line x1="94" y1={b.y + 40} x2="112" y2={b.y + 40} stroke={T1} strokeWidth="2" />
          <rect x="112" y={b.y} width="252" height="86" rx="11" fill="#fff" stroke={LINE} />
          <circle cx="140" cy={b.y + 30} r="13" fill={T2} />
          <text x="140" y={b.y + 34.5} fontSize="11" fontWeight="700" fill={BLUE} textAnchor="middle" style={MONO}>{b.name.slice(0, 1)}</text>
          <text x="162" y={b.y + 27} fontSize="11" fontWeight="600" fill={INK} style={MONO}>{b.name}</text>
          <text x="162" y={b.y + 44} fontSize="9.5" fill={SUB} style={MONO}>{b.load} accounts assigned</text>
          <rect x="162" y={b.y + 54} width="68" height="17" rx="8.5" fill={T2} />
          <text x="196" y={b.y + 66} fontSize="8.5" fontWeight="700" fill={BLUE} textAnchor="middle" style={MONO}>{b.sla}</text>
        </g>
      ))}
    </Svg>
  );
}

/* 02 — Field Verification: map with geo pin, verification checklist below */
function PvVerify() {
  const checks = ['Address verified', 'Asset condition logged', 'Borrower status met'];
  return (
    <Svg label="GPS-verified field visit with checklist">
      <rect x="36" y="30" width="328" height="252" rx="12" fill="#fff" stroke={LINE} />
      <g stroke="#EEF2F7" strokeWidth="2">
        <path d="M36 110 H364 M36 210 H364 M130 30 V282 M250 30 V282" fill="none" />
      </g>
      <rect x="58" y="128" width="56" height="66" rx="5" fill={T2} opacity="0.65" />
      <rect x="150" y="46" width="80" height="48" rx="5" fill={T2} opacity="0.4" />
      <rect x="272" y="128" width="70" height="66" rx="5" fill={T2} opacity="0.5" />
      <rect x="150" y="228" width="80" height="40" rx="5" fill={T2} opacity="0.45" />

      <circle cx="190" cy="156" r="14" fill="none" stroke={BLUE} strokeWidth="2">
        <animate attributeName="r" values="10;40" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <path d="M190 132 c -12 0 -19 8.5 -19 19 c 0 14 19 33 19 33 c 0 0 19 -19 19 -33 c 0 -10.5 -7 -19 -19 -19" fill={BLUE} />
      <circle cx="190" cy="151" r="7" fill="#fff" />
      <rect x="222" y="140" width="118" height="20" rx="10" fill={INK} opacity="0.88" />
      <text x="281" y="153.5" fontSize="8.5" fill="#fff" textAnchor="middle" style={MONO}>GPS MATCH · LOCKED</text>

      <rect x="36" y="304" width="328" height="262" rx="12" fill="#fff" stroke={LINE} />
      <text x="56" y="332" fontSize="9.5" fill={SUB} style={MONO}>FIELD VISIT · CASE-4471</text>
      <rect x="286" y="318" width="58" height="18" rx="9" fill={T2} />
      <text x="315" y="330.5" fontSize="8" fontWeight="700" fill={BLUE} textAnchor="middle" style={MONO}>11:42 IST</text>

      {checks.map((c, i) => (
        <g key={c}>
          <rect x="56" y={348 + i * 54} width="288" height="42" rx="9" fill="#F8FAFC" stroke={LINE} />
          <circle cx="80" cy={369 + i * 54} r="10" fill={GREEN} opacity="0.14" />
          <path d={`M75 ${369 + i * 54} l 3.6 4 l 6.6 -7.8`} fill="none" stroke={GREEN} strokeWidth="2.4" strokeLinecap="round" />
          <text x="100" y={373 + i * 54} fontSize="11" fill={INK}>{c}</text>
        </g>
      ))}
      <line x1="56" y1="524" x2="344" y2="524" stroke={LINE} />
      <text x="56" y="546" fontSize="9" fill={SUB} style={MONO}>13.0827°N 80.2707°E · GEO-TAGGED PHOTO ✓</text>
    </Svg>
  );
}

/* 03 — Borrower Engagement: recorded contact log with compliant-hours chip */
function PvEngage() {
  const rows = [
    { y: 128, t: '10:12', dur: '04:18', label: 'Outbound · Recorded' },
    { y: 226, t: '12:47', dur: '02:55', label: 'Outbound · Recorded' },
    { y: 324, t: '16:05', dur: '06:31', label: 'Settlement discussed' },
    { y: 422, t: '17:30', dur: '01:12', label: 'Follow-up scheduled' },
  ];
  const wave = [6, 13, 20, 11, 23, 15, 8, 19, 13, 22, 10, 16];
  return (
    <Svg label="Recorded, time-stamped borrower contact log">
      <rect x="30" y="36" width="340" height="528" rx="14" fill="#fff" stroke={LINE} />
      <text x="52" y="70" fontSize="9.5" fill={SUB} style={MONO}>CONTACT LOG · CASE-4458</text>
      <rect x="238" y="54" width="112" height="22" rx="11" fill={T2} />
      <circle cx="254" cy="65" r="3.6" fill={BLUE} />
      <text x="264" y="69" fontSize="8.5" fontWeight="700" fill={BLUE} style={MONO}>100% RECORDED</text>

      {rows.map((r, ri) => (
        <g key={r.y}>
          <rect x="52" y={r.y - 24} width="296" height="74" rx="10" fill="#F8FAFC" stroke={LINE} />
          <text x="70" y={r.y} fontSize="11" fontWeight="600" fill={INK} style={MONO}>{r.t}</text>
          <g>
            {wave.map((h, i) => (
              <rect key={i} x={124 + i * 11} y={r.y - 4 - h / 2} width="5.5" height={h} rx="2.75" fill={ri === 1 ? BLUE : T1}>
                {ri === 1 && (
                  <animate attributeName="height" values={`${h};${Math.max(4, 26 - h)};${h}`} dur="1.4s" begin={`${i * 0.08}s`} repeatCount="indefinite" />
                )}
                {ri === 1 && (
                  <animate attributeName="y" values={`${r.y - 4 - h / 2};${r.y - 4 - Math.max(4, 26 - h) / 2};${r.y - 4 - h / 2}`} dur="1.4s" begin={`${i * 0.08}s`} repeatCount="indefinite" />
                )}
              </rect>
            ))}
          </g>
          <text x="272" y={r.y} fontSize="9.5" fill={SUB} style={MONO}>{r.dur}</text>
          <text x="70" y={r.y + 30} fontSize="9.5" fill={SUB}>{r.label}</text>
          <path d={`M330 ${r.y + 24} l 4 4.4 l 7 -8`} fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}

      <rect x="52" y="500" width="296" height="34" rx="17" fill={T2} />
      <text x="200" y="521.5" fontSize="10" fontWeight="700" fill={BLUE} textAnchor="middle" style={MONO}>CALLING WINDOW 08:00–19:00 · LOCKED</text>
    </Svg>
  );
}

/* 04 — Legal & SARFAESI: notice document + statutory step rail */
function PvLegal() {
  const steps = [
    { x: 90, l1: 'SEC 13(2)', l2: 'Day 0 · Served', state: 'done' },
    { x: 200, l1: 'SEC 13(4)', l2: 'Day 60+ · Active', state: 'active' },
    { x: 310, l1: 'AUCTION', l2: 'Sale notice', state: 'next' },
  ];
  return (
    <Svg label="SARFAESI notice and statutory timeline">
      <g transform="rotate(-2.5 200 210)">
        <rect x="98" y="44" width="204" height="330" rx="10" fill="#fff" stroke={LINE} />
        <rect x="120" y="70" width="96" height="10" rx="5" fill={BLUE} opacity="0.85" />
        <rect x="120" y="94" width="160" height="6" rx="3" fill={T2} />
        <rect x="120" y="108" width="138" height="6" rx="3" fill={T2} />
        {[140, 156, 172, 188, 204, 220, 236].map((y, i) => (
          <rect key={y} x="120" y={y} width={i % 2 ? 148 : 160} height="6" rx="3" fill="#EEF2F7" />
        ))}
        <rect x="120" y="264" width="108" height="6" rx="3" fill="#EEF2F7" />
        <line x1="120" y1="330" x2="220" y2="330" stroke={SUB} strokeWidth="1.2" />
        <text x="120" y="348" fontSize="8.5" fill={SUB} style={MONO}>AUTHORISED OFFICER</text>
      </g>
      <g transform="rotate(-12 296 356)">
        <circle cx="296" cy="356" r="40" fill="#fff" stroke={BLUE} strokeWidth="2.6" />
        <circle cx="296" cy="356" r="32" fill="none" stroke={BLUE} strokeWidth="1" strokeDasharray="3.5 3.5" />
        <text x="296" y="352" fontSize="12" fontWeight="700" fill={BLUE} textAnchor="middle" style={MONO}>SEC</text>
        <text x="296" y="368" fontSize="12" fontWeight="700" fill={BLUE} textAnchor="middle" style={MONO}>13(2)</text>
      </g>

      <text x="56" y="452" fontSize="9.5" fill={SUB} style={MONO}>STATUTORY TIMELINE</text>
      <line x1="90" y1="496" x2="310" y2="496" stroke={LINE} strokeWidth="2.5" />
      <line x1="90" y1="496" x2="200" y2="496" stroke={BLUE} strokeWidth="2.5" />
      {steps.map((s) => (
        <g key={s.l1}>
          {s.state === 'done' && (
            <g>
              <circle cx={s.x} cy="496" r="12" fill={BLUE} />
              <path d={`M${s.x - 5.4} 496 l 3.8 4.2 l 7 -8`} fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
            </g>
          )}
          {s.state === 'active' && (
            <g>
              <circle cx={s.x} cy="496" r="12" fill="#fff" stroke={BLUE} strokeWidth="2.6" />
              <circle cx={s.x} cy="496" r="5.5" fill={BLUE} />
              <circle cx={s.x} cy="496" r="12" fill="none" stroke={BLUE} strokeWidth="2">
                <animate attributeName="r" values="12;24" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
          {s.state === 'next' && <circle cx={s.x} cy="496" r="11" fill="#fff" stroke={LINE} strokeWidth="2.6" />}
          <text x={s.x} y="534" fontSize="10.5" fontWeight="700" fill={s.state === 'next' ? SUB : INK} textAnchor="middle" style={MONO}>{s.l1}</text>
          <text x={s.x} y="551" fontSize="8.5" fill={SUB} textAnchor="middle" style={MONO}>{s.l2}</text>
        </g>
      ))}
    </Svg>
  );
}

/* 05 — Resolution & Recovery: reconciliation ledger + recovery curve */
function PvResolve() {
  const rows = [
    { y: 108, id: 'CASE-4406', amt: '₹4.2 L', tag: 'SETTLED', color: GREEN },
    { y: 152, id: 'CASE-4391', amt: '₹1.8 L', tag: 'OTS', color: AMBER },
    { y: 196, id: 'CASE-4380', amt: '₹6.5 L', tag: 'REALISED', color: GREEN },
    { y: 240, id: 'CASE-4372', amt: '₹2.1 L', tag: 'SETTLED', color: GREEN },
  ];
  return (
    <Svg label="Reconciled settlements and rising recovery curve">
      <rect x="36" y="36" width="328" height="288" rx="12" fill="#fff" stroke={LINE} />
      <text x="56" y="66" fontSize="9.5" fill={SUB} style={MONO}>RECONCILIATION · DAILY</text>
      {rows.map((r) => (
        <g key={r.id}>
          <text x="56" y={r.y} fontSize="10.5" fontWeight="600" fill={INK} style={MONO}>{r.id}</text>
          <text x="176" y={r.y} fontSize="10.5" fill={SUB} style={MONO}>{r.amt}</text>
          <rect x="256" y={r.y - 13} width="88" height="21" rx="10.5" fill={r.color} opacity="0.13" />
          <text x="300" y={r.y + 1.5} fontSize="8.5" fontWeight="700" fill={r.color} textAnchor="middle" style={MONO}>{r.tag}</text>
          <line x1="56" y1={r.y + 16} x2="344" y2={r.y + 16} stroke="#F1F5F9" />
        </g>
      ))}
      <rect x="56" y="272" width="288" height="36" rx="9" fill="#F8FAFC" stroke={LINE} />
      <text x="72" y="294.5" fontSize="10" fontWeight="700" fill={INK} style={MONO}>CREDITED TO LENDER A/C · T+1 ✓</text>

      <rect x="36" y="348" width="328" height="218" rx="12" fill="#fff" stroke={LINE} />
      <text x="56" y="378" fontSize="9.5" fill={SUB} style={MONO}>RECOVERY CURVE · BUCKET ROLLBACK ▲</text>
      <path d="M64 528 L64 400 M64 528 L340 528" stroke={LINE} strokeWidth="1.2" />
      <path d="M64 512 L112 494 L160 476 L208 442 L256 418 L304 400 L336 388" fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
      <path d="M64 512 L112 494 L160 476 L208 442 L256 418 L304 400 L336 388 L336 528 L64 528 Z" fill={BLUE} opacity="0.07" />
      <circle cx="336" cy="388" r="5.5" fill={BLUE}>
        <animate attributeName="r" values="5.5;8;5.5" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </Svg>
  );
}

/* 06 — Reporting & Audit: lender dashboard + immutable audit trail */
function PvReport() {
  const bars = [58, 78, 64, 94, 84, 112];
  const trail = [
    { t: '09:14', e: 'Visit logged · geo-tag' },
    { t: '11:02', e: 'Notice served · scan' },
    { t: '14:38', e: 'Payment reconciled' },
  ];
  return (
    <Svg label="Lender dashboard with immutable audit trail">
      <rect x="36" y="36" width="328" height="300" rx="12" fill="#fff" stroke={LINE} />
      <text x="56" y="64" fontSize="9.5" fill={SUB} style={MONO}>LENDER DASHBOARD · LIVE</text>
      {[
        { x: 56, v: '1,284', k: 'ACTIVE' },
        { x: 158, v: '47', k: 'RESOLVED' },
        { x: 260, v: '9.2d', k: 'AVG TAT' },
      ].map((k) => (
        <g key={k.k}>
          <rect x={k.x} y="78" width="90" height="56" rx="9" fill="#F8FAFC" stroke={LINE} />
          <text x={k.x + 14} y="104" fontSize="14" fontWeight="700" fill={INK} style={MONO}>{k.v}</text>
          <text x={k.x + 14} y="122" fontSize="8" fill={SUB} style={MONO}>{k.k}</text>
        </g>
      ))}
      <text x="56" y="168" fontSize="9" fill={SUB} style={MONO}>RESOLUTION TREND</text>
      {bars.map((h, i) => (
        <rect key={i} x={56 + i * 48} y={310 - h} width="30" rx="4" height={h} fill={i === bars.length - 1 ? BLUE : T1}>
          <animate attributeName="height" values={`0;${h}`} dur="0.9s" begin={`${i * 0.12}s`} fill="freeze" />
          <animate attributeName="y" values={`310;${310 - h}`} dur="0.9s" begin={`${i * 0.12}s`} fill="freeze" />
        </rect>
      ))}

      <rect x="36" y="360" width="328" height="206" rx="12" fill={INK} />
      <text x="56" y="390" fontSize="9.5" fill="#94A3B8" style={MONO}>AUDIT TRAIL</text>
      <rect x="252" y="376" width="92" height="20" rx="10" fill="rgba(51,102,255,0.25)" />
      <text x="298" y="389.5" fontSize="8.5" fontWeight="700" fill="#7C9EFF" textAnchor="middle" style={MONO}>IMMUTABLE</text>
      {trail.map((r, i) => (
        <g key={r.t}>
          <circle cx="66" cy={420 + i * 42} r="4" fill={BLUE} />
          {i < trail.length - 1 && <line x1="66" y1={426 + i * 42} x2="66" y2={456 + i * 42} stroke="#334155" strokeWidth="1.6" />}
          <text x="82" y={417 + i * 42} fontSize="9.5" fill="#CBD5E1" style={MONO}>{r.t}</text>
          <text x="132" y={417 + i * 42} fontSize="9" fill="#94A3B8" style={MONO}>{r.e}</text>
        </g>
      ))}
      <line x1="56" y1="536" x2="344" y2="536" stroke="#334155" />
      <path d="M56 550 l 4.6 5 l 8.4 -9.6" fill="none" stroke={GREEN} strokeWidth="2.4" strokeLinecap="round" />
      <text x="78" y="555" fontSize="9" fill="#94A3B8" style={MONO}>REGULATOR-READY · EXPORT PACK</text>
    </Svg>
  );
}

const visualMap = { alloc: PvAlloc, verify: PvVerify, engage: PvEngage, legal: PvLegal, resolve: PvResolve, report: PvReport };

export default function OperatingModelSection() {
  const pinWrapRef = useRef(null);
  const filmstripRef = useRef(null);
  const stageRef = useRef(null);
  const railBarRef = useRef(null);
  const maxShiftRef = useRef(0);

  useEffect(() => {
    const pinWrap = pinWrapRef.current;
    const strip = filmstripRef.current;
    if (!pinWrap || !strip) return;

    const measure = () => {
      const firstPanel = strip.querySelector('.panel6');
      const pw = firstPanel ? firstPanel.offsetWidth : 0;
      const pad = Math.max(20, (window.innerWidth - pw) / 2);
      strip.style.paddingLeft = `${pad}px`;
      strip.style.paddingRight = `${pad}px`;
      maxShiftRef.current = Math.max(0, strip.scrollWidth - window.innerWidth);
    };

    const update = () => {
      const total = pinWrap.offsetHeight - window.innerHeight;
      const p = clamp(-pinWrap.getBoundingClientRect().top / (total || 1), 0, 1);
      strip.style.transform = `translateX(${-p * maxShiftRef.current}px)`;
      if (stageRef.current) stageRef.current.textContent = String(clamp(Math.floor(p * 6) + 1, 1, 6)).padStart(2, '0');
      if (railBarRef.current) railBarRef.current.style.width = `${p * 100}%`;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    };
    const onResize = () => { measure(); update(); };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="model6" id="model">
      <div className="pin-wrap" ref={pinWrapRef} style={{ height: '280vh' }}>
        <div className="pin-stage">
          <div className="model6-head">
            <div className="fg-wrap">
              <div>
                <span className="fg-eyebrow">The Recovery Operating Model</span>
                <h2 style={{ marginTop: 14 }}>One accountable lifecycle.</h2>
              </div>
              <div className="model6-ctr">STAGE <b ref={stageRef}>01</b> / 06</div>
            </div>
          </div>

          <div className="filmstrip6" ref={filmstripRef}>
            {operatingModelStages.map((stage) => {
              const Visual = visualMap[stage.visual];
              return (
                <div className="panel6" key={stage.no}>
                  <div>
                    <div className="p-big">{stage.no}</div>
                    <h3>{stage.title}</h3>
                    <p>{stage.desc}</p>
                    <div className="tags">{stage.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                  <div className="panel6-vis"><Visual /></div>
                  <div className="p-no">{stage.tag}</div>
                </div>
              );
            })}
          </div>

          <div className="model6-rail">
            <div className="fg-wrap">
              <span className="rail-lbl">ALLOCATE</span>
              <span className="rail-bar"><i ref={railBarRef} /></span>
              <span className="rail-lbl">AUDIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
