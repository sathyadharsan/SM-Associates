import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { flagshipFaqs } from '../data/flagshipHomeData';

function FaqItem({ faq, open, onToggle }) {
  const innerRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    wrap.style.height = open ? `${inner.offsetHeight}px` : '0';
  }, [open]);

  return (
    <div className={`qa6 ${open ? 'open' : ''}`}>
      <button type="button" onClick={onToggle}>
        <span className="q">{faq.q}</span>
        <span className="pm"><ChevronDown size={14} /></span>
      </button>
      <div className="a" ref={wrapRef}>
        <div className="a-inner" ref={innerRef}>{faq.a}</div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq6" id="faq">
      <div className="fg-wrap">
        <div className="fg-section-header">
          <span className="fg-eyebrow">Questions enterprises ask</span>
          <h2>Before the first mandate.</h2>
        </div>

        <div className="fg-section-card" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="faq6-list" style={{ borderTop: 'none' }}>
            {flagshipFaqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
