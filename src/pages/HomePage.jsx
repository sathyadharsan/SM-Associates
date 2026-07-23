import { useEffect } from 'react';
import { initHomeCinematic } from '../animation/homeCinematic';
import '../styles/homepage-v6.css';
import ScrollProgressBar from '../components/ScrollProgressBar';
import SectionReveal from '../components/SectionReveal';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustedCertifiedSection from '../sections/TrustedCertifiedSection';
import MetricsSection from '../sections/MetricsSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import EndToEndPlatformArchitectureSection from '../sections/EndToEndPlatformArchitectureSection';
import IndustriesServedSection from '../sections/IndustriesServedSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import CaseStudiesPreviewSection from '../sections/CaseStudiesPreviewSection';
import CommandCenterSection from '../sections/CommandCenterSection';
import WhySmAssociatesSection from '../sections/WhySmAssociatesSection';
import FaqSection from '../sections/FaqSection';
import FlagshipCtaSection from '../sections/FlagshipCtaSection';

export default function HomePage() {
  useEffect(() => {
    const cleanup = initHomeCinematic();
    return cleanup;
  }, []);

  return (
    <div className="fg-home">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow--1" />
      <div className="ambient-glow ambient-glow--2" />
      <div className="ambient-glow ambient-glow--3" />
      <ScrollProgressBar />
      <HeroFlagshipSection />
      <TrustedCertifiedSection />
      <SectionReveal><MetricsSection /></SectionReveal>
      <SectionReveal><ServicesOverviewSection /></SectionReveal>
      
      {/* ── FLAGSHIP MACRO PLATFORM ARCHITECTURE (Credgenics End-to-End Style) ── */}
      <SectionReveal><EndToEndPlatformArchitectureSection /></SectionReveal>

      <SectionReveal><IndustriesServedSection /></SectionReveal>
      <OperatingModelSection />
      <SectionReveal><CommandCenterSection /></SectionReveal>
      <SectionReveal><CaseStudiesPreviewSection /></SectionReveal>
      <SectionReveal><WhySmAssociatesSection /></SectionReveal>
      <SectionReveal><FaqSection /></SectionReveal>
      <SectionReveal><FlagshipCtaSection /></SectionReveal>
    </div>
  );
}
