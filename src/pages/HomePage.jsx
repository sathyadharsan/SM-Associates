import { useEffect } from 'react';
import { initHomeCinematic } from '../animation/homeCinematic';
import '../styles/homepage-v6.css';
import SectionReveal from '../components/SectionReveal';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustedCertifiedSection from '../sections/TrustedCertifiedSection';
import ClientLogoMarqueeSection from '../sections/ClientLogoMarqueeSection';
import SolutionComparisonSection from '../sections/SolutionComparisonSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import EnterpriseServicesSection from '../sections/EnterpriseServicesSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import IndustriesServedSection from '../sections/IndustriesServedSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import FaqSection from '../sections/FaqSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CtaSection from '../sections/CtaSection';
import AwardsCertificationsSection from '../sections/AwardsCertificationsSection';
import BrandManifestoSection from '../sections/BrandManifestoSection';
import { ScrollProgressBar } from '../components/PremiumUIEffects';

export default function HomePage() {
  // Scroll cinematic: hero pins and recedes while Trusted & Certified slides
  // up over it, then releases naturally. Desktop + motion-allowed only —
  // returns its own cleanup, so React 18 double-mount is safe.
  useEffect(() => {
    const cleanup = initHomeCinematic();
    return cleanup;
  }, []);

  return (
    <div className="fg-home">
      {/* ── Global Premium Effects ── */}
      <ScrollProgressBar />

      {/* 1. Institutional Hero Banner */}
      <HeroFlagshipSection />

      {/* 2. Empanelments & Trusted Partners KPI Cards */}
      <TrustedCertifiedSection />

      {/* 3. Empanelled Institutional Client Logos */}
      <SectionReveal>
        <ClientLogoMarqueeSection />
      </SectionReveal>

      {/* 3. Awards & Certifications Strip */}
      <SectionReveal>
        <AwardsCertificationsSection />
      </SectionReveal>

      {/* 4. Operating Principles — centered scroll-sweep manifesto */}
      <BrandManifestoSection />

      {/* 6. Core Recovery Services Overview — no SectionReveal wrapper: this
          section pins the page for ~500vh, and SectionReveal's whileInView
          measures visibility as a ratio of the wrapped element's OWN height,
          which never crosses its reveal threshold for something this tall —
          it was permanently stuck at its hidden initial state (opacity:0,
          a residual transform), which also broke position:sticky for every
          descendant (a transformed ancestor changes the sticky containing
          block). The section handles its own reveal/animation internally,
          same as every other pinned section on the site. */}
      <ServicesOverviewSection />

      {/* 7. Sector Specialisation & Regulated Lender Segments */}
      <SectionReveal>
        <IndustriesServedSection />
      </SectionReveal>

      {/* 8. Recovery Operating Model: End-to-End Accountable Lifecycle */}
      <OperatingModelSection />

      {/* 10. Client Testimonials Carousel */}
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      {/* 11. Institutional Comparison Matrix */}
      <SectionReveal>
        <SolutionComparisonSection />
      </SectionReveal>

      {/* 13. Proof of Work & Documented Case Studies Carousel */}
      <SectionReveal>
        <CaseStudiesSection />
      </SectionReveal>

      {/* 14. Frequently Asked Questions & Compliance Clarity */}
      <SectionReveal>
        <FaqSection />
      </SectionReveal>

      {/* 15. Book a Consultation — Premium CTA */}
      <CtaSection />
    </div>
  );
}
