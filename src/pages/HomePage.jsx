import { useEffect } from 'react';
import { initHomeCinematic } from '../animation/homeCinematic';
import '../styles/homepage-v6.css';
import SectionReveal from '../components/SectionReveal';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustedCertifiedSection from '../sections/TrustedCertifiedSection';
import ClientLogoMarqueeSection from '../sections/ClientLogoMarqueeSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import EnterpriseServicesSection from '../sections/EnterpriseServicesSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import IndustriesServedSection from '../sections/IndustriesServedSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import FaqSection from '../sections/FaqSection';
import CommandCenterSection from '../sections/CommandCenterSection';
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
      {/* ── Global Premium UI Scroll Progress Indicator ── */}
      <ScrollProgressBar />

      {/* 1. Institutional Flagship Hero */}
      <HeroFlagshipSection />

      {/* 2. Key Performance Indicators & Trust Metrics */}
      <TrustedCertifiedSection />

      {/* 3. Empanelled Institutional Lenders & Client Logos */}
      <SectionReveal>
        <ClientLogoMarqueeSection />
      </SectionReveal>

      {/* 4. Governance, ISO & IIBF Certification Badges */}
      <AwardsCertificationsSection />

      {/* 5. Operating Principles & Brand Vision */}
      <BrandManifestoSection />

      {/* 6. Comprehensive Recovery Services & Solutions Showcase */}
      <ServicesOverviewSection />

      {/* 7. Industry Verticals & Regulated Lender Segments */}
      <SectionReveal>
        <IndustriesServedSection />
      </SectionReveal>

      {/* 8. End-to-End Accountable Recovery Operating Model */}
      <OperatingModelSection />

      {/* 9. Regional Branch Network & Command Center Telemetry Map */}
      <SectionReveal>
        <CommandCenterSection />
      </SectionReveal>

      {/* 10. Documented Institutional Case Studies & Resolution Proof */}
      <SectionReveal>
        <CaseStudiesSection />
      </SectionReveal>

      {/* 11. Empanelled Client Testimonials & Institutional Feedback */}
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      {/* 12. Frequently Asked Questions & Compliance Clarity */}
      <SectionReveal>
        <FaqSection />
      </SectionReveal>

      {/* 13. High-Conversion Institutional Mandate CTA */}
      <CtaSection />
    </div>
  );
}
