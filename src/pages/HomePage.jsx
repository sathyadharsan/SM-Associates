import '../styles/homepage-v6.css';
import ScrollProgressBar from '../components/ScrollProgressBar';
import SectionReveal from '../components/SectionReveal';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustMarqueeSection from '../sections/TrustMarqueeSection';
import GovernanceBandSection from '../sections/GovernanceBandSection';
import MetricsSection from '../sections/MetricsSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import CapabilitiesRadialSection from '../sections/CapabilitiesRadialSection';
import CommandCenterSection from '../sections/CommandCenterSection';
import ComplianceScanSection from '../sections/ComplianceScanSection';
import FaqSection from '../sections/FaqSection';
import FlagshipCtaSection from '../sections/FlagshipCtaSection';

export default function HomePage() {
  return (
    <div className="fg-home">
      <ScrollProgressBar />
      <HeroFlagshipSection />
      <SectionReveal><TrustMarqueeSection /></SectionReveal>
      <SectionReveal><GovernanceBandSection /></SectionReveal>
      <SectionReveal><MetricsSection /></SectionReveal>
      {/* OperatingModelSection relies on position:sticky for its pinned
          scroll filmstrip — a motion wrapper's transform would break that,
          so it's intentionally left unwrapped. */}
      <OperatingModelSection />
      <SectionReveal><CapabilitiesRadialSection /></SectionReveal>
      <SectionReveal><CommandCenterSection /></SectionReveal>
      <SectionReveal><ComplianceScanSection /></SectionReveal>
      <SectionReveal><FaqSection /></SectionReveal>
      <SectionReveal><FlagshipCtaSection /></SectionReveal>
    </div>
  );
}
