import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useMagnetic } from '../hooks/useMagnetic';

export default function FlagshipCtaSection() {
  const [cardRef, cardIn] = useReveal();
  const primaryRef = useMagnetic();
  const secondaryRef = useMagnetic();

  return (
    <section className="cta6" id="cta">
      <div className="fg-wrap">
        <div ref={cardRef} className={`cta6-card fg-r ${cardIn ? 'in' : ''}`}>
          <div className="cta6-grid-deco" />
          <div className="cta6-glow" />
          <div className="cta6-inner">
            <div className="cta6-status">ALL SYSTEMS READY</div>
            <h2>Put your recovery<br />on infrastructure.</h2>
            <p>
              Bring us a book. We&apos;ll return a recovery plan, a coverage map and a compliance framework — before you commit to anything.
            </p>
            <div className="cta6-actions">
              <Link ref={primaryRef} className="fg-btn fg-btn-p" to="/contact">
                Request a Consultation <ArrowRight size={16} className="arr" />
              </Link>
              <a ref={secondaryRef} className="fg-btn fg-btn-s" href="#model">Review Operating Model</a>
            </div>
            <div className="cta6-assure">Confidential portfolio review · No obligation · Response within 48 hours</div>
          </div>
        </div>
      </div>
    </section>
  );
}
