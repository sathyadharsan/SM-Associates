import '../styles/homepage-v6.css';
import ScrollProgressBar from '../components/ScrollProgressBar';
import HeroFlagshipSection from '../sections/HeroFlagshipSection';
import TrustMarqueeSection from '../sections/TrustMarqueeSection';
import MetricsSection from '../sections/MetricsSection';
import OperatingModelSection from '../sections/OperatingModelSection';
import CapabilitiesRadialSection from '../sections/CapabilitiesRadialSection';
import CommandCenterSection from '../sections/CommandCenterSection';
import RecoveryOsArchitectureSection from '../sections/RecoveryOsArchitectureSection';
import OutcomesSection from '../sections/OutcomesSection';
import TestimonialVideoSection from '../sections/TestimonialVideoSection';
import ComplianceScanSection from '../sections/ComplianceScanSection';
import FaqSection from '../sections/FaqSection';
import FlagshipCtaSection from '../sections/FlagshipCtaSection';

export default function HomePage() {
  return (
    <div className="fg-home">
      <ScrollProgressBar />
      <HeroFlagshipSection />
      <TrustMarqueeSection />
      <MetricsSection />
      <OperatingModelSection />
      <CapabilitiesRadialSection />
      <CommandCenterSection />
      <RecoveryOsArchitectureSection />
      <OutcomesSection />
      <TestimonialVideoSection />
      <ComplianceScanSection />
      <FaqSection />
      <FlagshipCtaSection />
    </div>
  );
}
