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
            <div className="hero6-eyebrow"><span className="live-dot" />India&apos;s Recovery Operations Infrastructure Platform</div>
            <h1 className="hero6-h1">
              <span className="ln"><span ref={(el) => (lineRefs.current[0] = el)}>We Don&apos;t Just</span></span>
              <span className="ln"><span ref={(el) => (lineRefs.current[1] = el)}>Recover.</span></span>
              <span className="ln">
                <span ref={(el) => (lineRefs.current[2] = el)} className="accent">
                  We Resolve.
                </span>
              </span>
            </h1>
            <p ref={subRef} className={`hero6-sub fg-r ${subIn ? 'in' : ''}`}>
              End-to-end recovery operations backed by technology, compliance and 22+ years of field excellence.
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
            <HeroDashboardVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
