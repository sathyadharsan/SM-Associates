import { useEffect } from 'react';
import Lenis from 'lenis';
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
// Operating Model -> Coverage (map) -> Case Studies -> Why Us -> FAQ -> CTA.
// Coverage map sits before Case Studies so the network-scale proof lands
// before the results narrative. Metrics keeps its exact existing design
// (untouched, per instruction). Operating Model and Coverage intentionally
// restored to their original scroll-pinned filmstrip / full interactive
// Leaflet map designs.
export default function HomePage() {
  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync scroll-based plugins/animations on update if needed
    lenis.on('scroll', () => {
      // triggers framer-motion scroll updates if active
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="fg-home">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow--1" />
      <div className="ambient-glow ambient-glow--2" />
      <div className="ambient-glow ambient-glow--3" />
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
      <SectionReveal><CommandCenterSection /></SectionReveal>
      <SectionReveal><CaseStudiesPreviewSection /></SectionReveal>
      <SectionReveal><WhySmAssociatesSection /></SectionReveal>
      <SectionReveal><FaqSection /></SectionReveal>
      <SectionReveal><FlagshipCtaSection /></SectionReveal>
    </div>
  );
}
