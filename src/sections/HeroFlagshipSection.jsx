import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useMagnetic } from '../hooks/useMagnetic';
import HeroDashboardVisual from './HeroDashboardVisual';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export default function HeroFlagshipSection() {
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

  return (
    <section className="hero6" id="hero">
      <div className="hero6-bg" />
      <div className="fg-wrap">
        <div className="hero6-grid">
          <div>
            <div className="hero6-eyebrow">
              <span className="live-dot" />
              SOUTH INDIA'S ENTERPRISE RECOVERY OPERATIONS PLATFORM
            </div>
            <h1 className="hero6-h1 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              <span className="ln"><span ref={(el) => (lineRefs.current[0] = el)}>We Don&apos;t Just</span></span>
              <span className="ln"><span ref={(el) => (lineRefs.current[1] = el)}>Recover.</span></span>
              <span className="ln">
                <span ref={(el) => (lineRefs.current[2] = el)} className="accent">
                  We Resolve.
                </span>
              </span>
            </h1>
            <p ref={subRef} className={`hero6-sub fg-r text-lg sm:text-xl text-slate-600 leading-relaxed font-medium mt-6 ${subIn ? 'in' : ''}`}>
              End-to-end debt recovery, field operations, and statutory legal enforcement — powered by AI voicebots, GPS officer dispatch, and 100% RBI compliance governance.
            </p>
            <div ref={actionsRef} className={`hero6-actions fg-r mt-8 flex flex-wrap gap-4 ${actionsIn ? 'in' : ''}`}>
              <a ref={ctaPrimaryRef} className="fg-btn fg-btn-p text-base px-7 py-4 rounded-2xl shadow-xl hover:shadow-2xl" href="#cta">
                Partner With Us <ArrowRight size={18} className="arr" />
              </a>
              <a ref={ctaSecondaryRef} className="fg-btn fg-btn-s text-base px-7 py-4 rounded-2xl border-slate-200" href="#capabilities">
                Explore Capability Modules <ArrowRight size={18} className="arr" />
              </a>
            </div>
            <div ref={pillarsRef} className={`hero6-trust fg-r mt-8 ${pillarsIn ? 'in' : ''}`}>
              <span>25+ Years Operations</span>
              <span>19 Branches · 5 States</span>
              <span>ISO 27001 Certified</span>
              <span>100+ Lenders</span>
            </div>
          </div>

          <div>
            <HeroDashboardVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
