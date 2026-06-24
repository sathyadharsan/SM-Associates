import { Play } from 'lucide-react';
import { outcomes } from '../data/flagshipHomeData';

// Reuses the same vetted, anonymized client quotes already used in
// OutcomesSection — no new quotes are invented here. Each card is an
// honest placeholder (no real video file yet): the "Video" tag and play
// icon mark where real footage drops in later without any layout change.
export default function TestimonialVideoSection() {
  return (
    <section className="tv6" id="testimonials">
      <div className="fg-wrap">
        <div style={{ marginBottom: 44 }}>
          <span className="fg-eyebrow">Client Voices</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>
            Hear it from the<br />institutions we serve.
          </h2>
        </div>

        <div className="tv6-grid">
          {outcomes.map((o) => (
            <div className="tv6-card" key={o.title}>
              <div className="tv6-thumb">
                <span className="tv6-thumb-tag">Video — Coming Soon</span>
                <div className="tv6-play"><Play size={20} fill="currentColor" /></div>
              </div>
              <div className="tv6-body">
                <p className="tv6-quote">&ldquo;{o.quote}&rdquo;</p>
                <div className="tv6-who">{o.who}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
