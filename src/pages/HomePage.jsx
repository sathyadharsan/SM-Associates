import '../styles/homepage-v6.css';
import ScrollProgressBar from '../components/ScrollProgressBar';
import SectionReveal from '../components/SectionReveal';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustedCertifiedSection from '../sections/TrustedCertifiedSection';
import MetricsSection from '../sections/MetricsSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import IndustriesServedSection from '../sections/IndustriesServedSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import CaseStudiesPreviewSection from '../sections/CaseStudiesPreviewSection';
import CommandCenterSection from '../sections/CommandCenterSection';
import WhySmAssociatesSection from '../sections/WhySmAssociatesSection';
import FaqSection from '../sections/FaqSection';
import FlagshipCtaSection from '../sections/FlagshipCtaSection';

// Home Page Architecture Refinement (production pass):
// Hero -> Trusted & Certified -> Metrics -> Services -> Industries ->
// Operating Model -> Case Studies -> Coverage (map) -> Why Us -> FAQ -> CTA.
// Metrics keeps its exact existing design (untouched, per instruction).
// Operating Model and Coverage intentionally restored to their original
// scroll-pinned filmstrip / full interactive Leaflet map designs.
export default function HomePage() {
  return (
    <div className="fg-home">
      <ScrollProgressBar />
      <HeroFlagshipSection />
      <SectionReveal><TrustedCertifiedSection /></SectionReveal>
      <SectionReveal><MetricsSection /></SectionReveal>
      <SectionReveal><ServicesOverviewSection /></SectionReveal>
      <SectionReveal><IndustriesServedSection /></SectionReveal>
      {/* OperatingModelSection relies on position:sticky for its pinned
          scroll filmstrip — a motion wrapper's transform would break that,
          so it's intentionally left unwrapped. */}
      <OperatingModelSection />
      <SectionReveal><CaseStudiesPreviewSection /></SectionReveal>
      <SectionReveal><CommandCenterSection /></SectionReveal>
      <SectionReveal><WhySmAssociatesSection /></SectionReveal>
      <SectionReveal><FaqSection /></SectionReveal>
      <SectionReveal><FlagshipCtaSection /></SectionReveal>
    </div>
  );
}
