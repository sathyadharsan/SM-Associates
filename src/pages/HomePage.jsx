import { useEffect } from 'react';
import { initHomeCinematic } from '../animation/homeCinematic';
import '../styles/homepage-v6.css';
import SectionReveal from '../components/SectionReveal';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustedCertifiedSection from '../sections/TrustedCertifiedSection';
import MetricsSection from '../sections/MetricsSection'; // kept for other pages
import SayHelloShowcaseSection from '../sections/SayHelloShowcaseSection';
import BentoWorkflowSection from '../sections/BentoWorkflowSection';
import SolutionComparisonSection from '../sections/SolutionComparisonSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import EnterpriseServicesSection from '../sections/EnterpriseServicesSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import IndustriesServedSection from '../sections/IndustriesServedSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import FaqSection from '../sections/FaqSection';
// ── Premium Upgrades ──────────────────────────────────────────────
import StatsCounterSection from '../sections/StatsCounterSection';
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

      {/* 2. Empanelments & Trusted Partners Marquee */}
      <TrustedCertifiedSection />

      {/* 3. Awards & Certifications Strip */}
      <SectionReveal>
        <AwardsCertificationsSection />
      </SectionReveal>

      {/* 4. Operating Principles — centered scroll-sweep manifesto */}
      <BrandManifestoSection />

      {/* 6. Core Recovery Services Overview */}
      <SectionReveal>
        <ServicesOverviewSection />
      </SectionReveal>

      {/* 7. Sector Specialisation & Regulated Lender Segments */}
      <SectionReveal>
        <IndustriesServedSection />
      </SectionReveal>

      {/* 8. Recovery Operating Model: End-to-End Accountable Lifecycle */}
      <OperatingModelSection />

      {/* 9. Unified Command Center & Mobile Field Technology */}
      <SectionReveal>
        <SayHelloShowcaseSection />
      </SectionReveal>

      {/* 10. Client Testimonials Carousel */}
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      {/* 11. Institutional Comparison Matrix */}
      <SectionReveal>
        <SolutionComparisonSection />
      </SectionReveal>

      {/* 12. Automated Workflows & RBI Compliance Bento Grid */}
      <SectionReveal>
        <BentoWorkflowSection />
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
