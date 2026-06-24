import { useEffect, useRef } from 'react';
import { ArrowRight, Search, TrendingUp, UserSearch, Shield, Warehouse, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useMagnetic } from '../hooks/useMagnetic';
import { heroServiceCards } from '../data/flagshipHomeData';

const iconMap = { TrendingUp, Search, UserSearch, Shield, Warehouse };

// Fixed scatter of soft drifting "bokeh" dots filling the outer/corner
// space around the ring, so the right side reads as a full depth scene
// rather than empty white space around a single centered object.
const BOKEH = [
  { left: '6%', top: '10%', size: 11, bx: '12px', by: '16px', dur: '7s', delay: '0s' },
  { left: '88%', top: '6%', size: 15, bx: '-14px', by: '11px', dur: '8.5s', delay: '-2s' },
  { left: '93%', top: '66%', size: 9, bx: '-9px', by: '-17px', dur: '6.5s', delay: '-1s' },
  { left: '3%', top: '76%', size: 13, bx: '15px', by: '-11px', dur: '9s', delay: '-3.5s' },
  { left: '22%', top: '92%', size: 8, bx: '10px', by: '-13px', dur: '7.5s', delay: '-0.6s' },
  { left: '72%', top: '90%', size: 10, bx: '-11px', by: '-9px', dur: '8s', delay: '-4s' },
  { left: '96%', top: '34%', size: 12, bx: '-15px', by: '13px', dur: '6.8s', delay: '-2.6s' },
  { left: '10%', top: '38%', size: 7, bx: '13px', by: '9px', dur: '9.5s', delay: '-1.4s' },
];

const lerp = (a, b, t) => a + (b - a) * t;
const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export default function HeroFlagshipSection() {
  const orbRef = useRef(null);
  const canvasRef = useRef(null);
  const coreRef = useRef(null);
  const lineRefs = useRef([]);

  const [subRef, subIn] = useReveal();
  const [actionsRef, actionsIn] = useReveal();
  const [pillarsRef, pillarsIn] = useReveal();
  const [scrollRef, scrollIn] = useReveal();
  const ctaPrimaryRef = useMagnetic();
  const ctaSecondaryRef = useMagnetic();

  // Headline lines slide up into place on mount.
  useEffect(() => {
    if (reducedMotion()) return;
    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transform = 'translateY(110%)';
      el.style.transition = 'transform 1s cubic-bezier(0.22,1,0.36,1)';
      el.style.transitionDelay = `${260 + i * 120}ms`;
    });
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        lineRefs.current.forEach((el) => { if (el) el.style.transform = 'translateY(0)'; });
      })
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  // Canvas particle field orbiting behind the cube.
  useEffect(() => {
    const canvas = canvasRef.current;
    const orb = orbRef.current;
    if (!canvas || !orb || reducedMotion()) return;

    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = orb.offsetWidth; canvas.height = orb.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 90 }, () => ({
      angle: Math.random() * Math.PI * 2,
      r: 110 + Math.random() * 200,
      speed: (Math.random() > 0.5 ? 1 : -1) * (0.003 + Math.random() * 0.006),
      size: Math.random() * 2.4 + 0.6,
      opacity: Math.random() * 0.5 + 0.25,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.02 + Math.random() * 0.03,
      wobbleAmp: Math.random() * 14 + 4,
    }));

    let raf;
    const draw = () => {
      const W = canvas.width, H = canvas.height, cx = W / 2, cy = H * 0.48;
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.angle += p.speed;
        p.wobble += p.wobbleSpeed;
        const x = cx + Math.cos(p.angle) * (p.r + Math.sin(p.wobble) * p.wobbleAmp);
        const y = cy + Math.sin(p.angle) * (p.r * 0.38 + Math.sin(p.wobble) * p.wobbleAmp * 0.4);
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(91,130,255,0.9)';
        ctx.fillStyle = `rgba(91,130,255,${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, []);

  // Mouse parallax across depth layers + a subtle 3D tilt on the cube.
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || reducedMotion()) return;

    const depthEls = Array.from(orb.querySelectorAll('[data-depth]'));
    let ox = 0, oy = 0, cx = 0, cy = 0, raf;

    const onMove = (e) => {
      const r = orb.getBoundingClientRect();
      ox = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      oy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    };
    const onLeave = () => { ox = 0; oy = 0; };

    orb.addEventListener('mousemove', onMove, { passive: true });
    orb.addEventListener('mouseleave', onLeave);

    const tick = () => {
      cx = lerp(cx, ox, 0.09);
      cy = lerp(cy, oy, 0.09);
      depthEls.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '1');
        el.style.transform = `translate(${(cx * 12 * depth).toFixed(1)}px, ${(cy * 8 * depth).toFixed(1)}px)`;
      });
      if (coreRef.current) {
        coreRef.current.style.transform = `rotateX(${(-cy * 9).toFixed(2)}deg) rotateY(${(cx * 9).toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      orb.removeEventListener('mousemove', onMove);
      orb.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero6" id="hero">
      <div className="hero6-bg" />
      <div className="fg-wrap">
        <div className="hero6-grid">
          <div>
            <div className="hero6-eyebrow"><span className="live-dot" />India&apos;s Recovery Operations Infrastructure Platform</div>
            <h1 className="hero6-h1">
              <span className="ln"><span ref={(el) => (lineRefs.current[0] = el)}>Building Stronger</span></span>
              <span className="ln"><span ref={(el) => (lineRefs.current[1] = el)}>Financial Foundations</span></span>
              <span className="ln"><span ref={(el) => (lineRefs.current[2] = el)} className="accent">Every Single Day.</span></span>
            </h1>
            <p ref={subRef} className={`hero6-sub fg-r ${subIn ? 'in' : ''}`}>
              End-to-end recovery operations backed by technology, compliance and 22+ years of field excellence. We don&apos;t just recover — we resolve, enforce and restore.
            </p>
            <div ref={actionsRef} className={`hero6-actions fg-r ${actionsIn ? 'in' : ''}`}>
              <a ref={ctaPrimaryRef} className="fg-btn fg-btn-p" href="#cta">Partner With Us <ArrowRight size={16} className="arr" /></a>
              <a ref={ctaSecondaryRef} className="fg-btn fg-btn-s" href="#cap">Explore Capabilities <ArrowRight size={16} className="arr" /></a>
            </div>
            <div ref={pillarsRef} className={`hero6-pillars fg-r ${pillarsIn ? 'in' : ''}`}>
              <span>ETHICS</span><span className="sep">·</span><span>EXPERTISE</span><span className="sep">·</span><span>EXECUTION</span>
            </div>
            <div ref={scrollRef} className={`hero6-scroll fg-r ${scrollIn ? 'in' : ''}`}>
              <span className="bar" />Scroll to explore
            </div>
          </div>

          <div>
            <div className="orb6" ref={orbRef}>
              <div className="orb6-glow" data-depth="0.2"><i /><i /><i /><i /><i /></div>
              <div className="orb6-bokeh" data-depth="0.7">
                {BOKEH.map((d, i) => (
                  <i
                    key={i}
                    style={{
                      left: d.left, top: d.top, width: d.size, height: d.size,
                      '--bx': d.bx, '--by': d.by,
                      animationDuration: d.dur, animationDelay: d.delay,
                    }}
                  />
                ))}
              </div>
              <canvas ref={canvasRef} id="orb-canvas" />
              <div className="orb6-bg" />

              <div className="orb6-dish" data-depth="0.55">
                <svg viewBox="0 0 640 420" fill="none">
                  <defs>
                    <radialGradient id="fg-platform-fill" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="rgba(160,185,255,0.2)" />
                      <stop offset="70%" stopColor="rgba(140,170,255,0.06)" />
                      <stop offset="100%" stopColor="rgba(140,170,255,0)" />
                    </radialGradient>
                    <linearGradient id="fg-ring-tube" x1="0" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(91,130,255,0)" />
                      <stop offset="20%" stopColor="rgba(120,155,255,0.55)" />
                      <stop offset="50%" stopColor="rgba(200,218,255,0.92)" />
                      <stop offset="80%" stopColor="rgba(120,155,255,0.55)" />
                      <stop offset="100%" stopColor="rgba(91,130,255,0)" />
                    </linearGradient>
                    <linearGradient id="fg-ring-highlight" x1="0" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.95)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <filter id="fg-ring-blur" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="4.5" />
                    </filter>
                  </defs>

                  {/* glass platform floor */}
                  <ellipse cx="320" cy="210" rx="300" ry="190" fill="url(#fg-platform-fill)" />

                  {/* soft shadow of the ring, blurred, for tube depth */}
                  <ellipse cx="320" cy="216" rx="290" ry="184" fill="none" stroke="rgba(70,100,210,0.3)" strokeWidth="20" filter="url(#fg-ring-blur)" />

                  {/* main glass tube ring */}
                  <ellipse cx="320" cy="210" rx="290" ry="184" fill="none" stroke="url(#fg-ring-tube)" strokeWidth="13" strokeLinecap="round" />

                  {/* specular highlight rim catching the light */}
                  <ellipse cx="320" cy="203" rx="288" ry="180" fill="none" stroke="url(#fg-ring-highlight)" strokeWidth="2" opacity="0.85" />

                  {/* secondary inner ring */}
                  <ellipse cx="320" cy="210" rx="205" ry="130" fill="none" stroke="rgba(150,180,255,0.32)" strokeWidth="1.5" />

                  {/* base disc nearest the cube */}
                  <ellipse cx="320" cy="210" rx="125" ry="79" fill="rgba(255,255,255,0.62)" stroke="rgba(190,210,255,0.78)" strokeWidth="1" />

                  {/* rotating energy arcs sweeping around the ring */}
                  <ellipse cx="320" cy="210" rx="290" ry="184" fill="none" stroke="#7fa0ff" strokeWidth="3" strokeLinecap="round" strokeDasharray="110 1410" opacity="0.6" className="fg-ring-arc-a" />
                  <ellipse cx="320" cy="210" rx="290" ry="184" fill="none" stroke="#c2d4ff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="55 1465" opacity="0.5" className="fg-ring-arc-b" />

                  <path id="fg-ring-path" d="M30,210 A290,184 0 1,1 610,210" fill="none" />
                  <text fontSize="10" fill="rgba(51,102,255,0.42)">
                    <textPath href="#fg-ring-path" startOffset="8%" fontFamily="IBM Plex Mono, monospace" letterSpacing="9">
                      ETHICS · EXPERTISE · EXECUTION · INTEGRITY · COMPLIANCE ·
                    </textPath>
                  </text>

                  {/* orbital particle trails — a lead dot plus fading ghost trailers */}
                  {[0, 1, 2].map((i) => (
                    <g key={i}>
                      {[0, 1, 2, 3].map((j) => (
                        <circle
                          key={j}
                          r={5 - j}
                          fill={j === 0 ? '#5b82ff' : '#a8c0ff'}
                          opacity={0.95 - j * 0.22}
                          style={j === 0 ? { filter: 'drop-shadow(0 0 7px rgba(91,130,255,0.95))' } : undefined}
                        >
                          <animateMotion dur={`${7 + i * 1.6}s`} repeatCount="indefinite" rotate="auto" begin={`${i * -2.4 - j * 0.14}s`}>
                            <mpath href="#fg-ring-path" />
                          </animateMotion>
                        </circle>
                      ))}
                    </g>
                  ))}
                </svg>
              </div>

              <div className="orb6-core" ref={coreRef}>
                <div className="orb6-box">
                  <span className="orb6-sm">SM</span>
                  <span className="orb6-label">ASSOCIATES</span>
                </div>
                <div className="orb6-pulse" />
              </div>

              {heroServiceCards.map((card) => {
                const Icon = iconMap[card.icon];
                return (
                  <div
                    key={card.name}
                    className="scard"
                    data-depth={card.depth}
                    style={{ ...card.style, animation: `${card.float} ${card.dur}s ease-in-out infinite` }}
                  >
                    <div className="scard-ico"><Icon size={16} /></div>
                    <div className="scard-name">{card.name}<br />{card.name2}</div>
                  </div>
                );
              })}

              <div className="orb6-badge" data-depth="0.4">
                <ShieldCheck size={15} />
                Compliant. Transparent. Accountable. Always.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
