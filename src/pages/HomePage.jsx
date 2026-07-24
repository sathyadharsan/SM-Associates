import { useEffect } from 'react';
import { initHomeCinematic } from '../animation/homeCinematic';
import '../styles/homepage-v6.css';
import SectionReveal from '../components/SectionReveal';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustedCertifiedSection from '../sections/TrustedCertifiedSection';
import MetricsSection from '../sections/MetricsSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import EndToEndPlatformArchitectureSection from '../sections/EndToEndPlatformArchitectureSection';
import DiagnosisSection from '../sections/DiagnosisSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import IndustriesServedSection from '../sections/IndustriesServedSection';
import CommandCenterSection from '../sections/CommandCenterSection';
import CaseStudiesPreviewSection from '../sections/CaseStudiesPreviewSection';
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
      <HeroFlagshipSection />
      <SectionReveal><MetricsSection /></SectionReveal>
      <OperatingModelSection />
      <SectionReveal><EndToEndPlatformArchitectureSection /></SectionReveal>
      <SectionReveal><DiagnosisSection /></SectionReveal>
      <SectionReveal><ServicesOverviewSection /></SectionReveal>
      <SectionReveal><IndustriesServedSection /></SectionReveal>
      <SectionReveal><CommandCenterSection /></SectionReveal>
      <TrustedCertifiedSection />
      <SectionReveal><CaseStudiesPreviewSection /></SectionReveal>
      <SectionReveal><WhySmAssociatesSection /></SectionReveal>
      <SectionReveal><FaqSection /></SectionReveal>
      <SectionReveal><FlagshipCtaSection /></SectionReveal>
    </div>
  );
}
