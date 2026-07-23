import { useEffect, useRef } from 'react';
import { operatingModelStages } from '../data/flagshipHomeData';

// Stage images — content-matched photography replacing SVG vignettes
import img01 from '../assets/operating-model/om-01-allocation.png';
import img02 from '../assets/operating-model/om-02-verification.png';
import img03 from '../assets/operating-model/om-03-engagement.png';
import img04 from '../assets/operating-model/om-04-legal.png';
import img05 from '../assets/operating-model/om-05-resolution.png';
import img06 from '../assets/operating-model/om-06-reporting.png';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// Single-accent brand rule: every stage uses the one brand blue — no
// per-stage hue differentiation (see homepage-v6.css :root).
const STAGE_COLORS = {
  alloc:   '#0072bc',
  verify:  '#0072bc',
  engage:  '#0072bc',
  field:   '#0072bc',
  legal:   '#0072bc',
  resolve: '#0072bc',
  report:  '#0072bc',
};

// Stage image map — 9 stages share 6 real photography assets (no photo
// shoot exists yet for the newer stage split), reused across the closest
// conceptual match rather than left blank.
const STAGE_IMAGES = {
  alloc:   img01,
  verify:  img02,
  engage:  img03,
  field:   img02,
  legal:   img04,
  resolve: img05,
  report:  img06,
};

// Stage image focal-point — face/subject crops per image
const STAGE_POSITION = {
  alloc:   'center center',
  verify:  'center top',
  engage:  'center top',
  field:   'center top',
  legal:   'center center',
  resolve: 'center top',
  report:  'center center',
};

export default function OperatingModelSection() {
  const pinWrapRef = useRef(null);
  const filmstripRef = useRef(null);
  const stageRef = useRef(null);
  const railBarRef = useRef(null);
  const dotsRef = useRef([]);
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
      const currentShift = p * maxShiftRef.current;
      strip.style.transform = `translateX(${-currentShift}px)`;
      
      const viewportCenter = currentShift + (window.innerWidth / 2);
      const panels = Array.from(strip.querySelectorAll('.panel6'));
      
      let stageIdx = 1;
      let minDistance = Infinity;
      
      panels.forEach((panel, i) => {
        const panelCenter = panel.offsetLeft + (panel.offsetWidth / 2);
        const distance = Math.abs(panelCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          stageIdx = i + 1;
        }
      });

      if (stageRef.current) stageRef.current.textContent = String(stageIdx).padStart(2, '0');
      if (railBarRef.current) railBarRef.current.style.width = `${p * 100}%`;
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        dot.classList.toggle('filled', i < stageIdx);
      });
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
      <div className="pin-wrap" ref={pinWrapRef} style={{ height: '780vh' }}>
        <div className="pin-stage">

          {/* ── Header ── */}
          <div className="model6-head">
            <div className="fg-wrap">
              <div className="fg-section-header" style={{ marginBottom: 0 }}>
                <span className="fg-eyebrow">The Recovery Operating Model</span>
                <h2>One accountable lifecycle.</h2>
              </div>
              <div className="model6-ctr">STAGE <b ref={stageRef}>01</b> / 09</div>
            </div>
          </div>

          {/* ── Filmstrip ── */}
          <div className="filmstrip6" ref={filmstripRef}>
            {operatingModelStages.map((stage) => {
              const color = STAGE_COLORS[stage.visual] ?? '#0072bc';
              const img   = STAGE_IMAGES[stage.visual];
              const pos   = STAGE_POSITION[stage.visual] ?? 'center center';
              return (
                <div
                  className="panel6"
                  key={stage.no}
                  style={{ '--stage-c': color }}
                >
                  {/* Left — content */}
                  <div>
                    <div className="p-big">{stage.no}</div>
                    <h3>{stage.title}</h3>
                    <p>{stage.desc}</p>
                    <div className="tags">
                      {stage.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </div>

                  {/* Right — image panel */}
                  <div className="panel6-vis">
                    <img
                      src={img}
                      alt={stage.title}
                      className="panel6-img"
                      style={{ objectPosition: pos }}
                      loading="lazy"
                      draggable={false}
                    />
                    {/* Gradient overlay — dark base for readability of badge */}
                    <div className="panel6-img-overlay" />
                    {/* Stage badge bottom-left of image */}
                    <div className="panel6-img-badge">{stage.tag}</div>
                  </div>

                  {/* Stage tag top-right of card */}
                  <div className="p-no">{stage.tag}</div>
                </div>
              );
            })}
          </div>

          {/* ── Progress rail ── */}
          <div className="model6-rail">
            <div className="fg-wrap">
              <span className="rail-lbl">INTAKE</span>
              <div className="rail-wrap">
                <div className="rail-bar"><i ref={railBarRef} /></div>
                <div className="rail-dots">
                  {operatingModelStages.map((s, i) => (
                    <span
                      key={s.no}
                      className="rail-dot"
                      ref={(el) => (dotsRef.current[i] = el)}
                    />
                  ))}
                </div>
              </div>
              <span className="rail-lbl">CLOSURE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
