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

// Stage accent colors — drive CSS color-mix for tag pills and badge
const STAGE_COLORS = {
  alloc:   '#3366FF',
  verify:  '#16A34A',
  engage:  '#7C3AED',
  legal:   '#E11D48',
  resolve: '#C8922A',
  report:  '#0891B2',
};

// Stage image map
const STAGE_IMAGES = {
  alloc:   img01,
  verify:  img02,
  engage:  img03,
  legal:   img04,
  resolve: img05,
  report:  img06,
};

// Stage image focal-point — face/subject crops per image
const STAGE_POSITION = {
  alloc:   'center center',
  verify:  'center top',
  engage:  'center top',
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
      strip.style.transform = `translateX(${-p * maxShiftRef.current}px)`;
      const stageIdx = clamp(Math.floor(p * 6) + 1, 1, 6);
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
      <div className="pin-wrap" ref={pinWrapRef} style={{ height: '280vh' }}>
        <div className="pin-stage">

          {/* ── Header ── */}
          <div className="model6-head">
            <div className="fg-wrap">
              <div>
                <span className="fg-eyebrow">The Recovery Operating Model</span>
                <h2 style={{ marginTop: 14 }}>One accountable lifecycle.</h2>
              </div>
              <div className="model6-ctr">STAGE <b ref={stageRef}>01</b> / 06</div>
            </div>
          </div>

          {/* ── Filmstrip ── */}
          <div className="filmstrip6" ref={filmstripRef}>
            {operatingModelStages.map((stage) => {
              const color = STAGE_COLORS[stage.visual] ?? '#3366FF';
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
              <span className="rail-lbl">ALLOCATE</span>
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
              <span className="rail-lbl">AUDIT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
