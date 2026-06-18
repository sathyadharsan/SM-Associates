import HeroSection from '../sections/HeroSection';
import ClientLogoCarousel from '../components/ClientLogoCarousel';
import AboutSection from '../sections/AboutSection';
import WhySection from '../sections/WhySection';
import RecoveryOperatingSystemSection from '../sections/RecoveryOperatingSystemSection';
import IndustriesSection from '../sections/IndustriesSection';
import ServicesDetailedSection from '../sections/ServicesDetailedSection';
import ProcessFlowSection from '../sections/ProcessFlowSection';
import TamilNaduCoverageSection from '../sections/TamilNaduCoverageSection';
import TrustSection from '../sections/TrustSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ResourcesSection from '../sections/ResourcesSection';
import CareersSection from '../sections/CareersSection';
import ContactCTASection from '../sections/ContactCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogoCarousel />
      <AboutSection />
      <WhySection />
      <RecoveryOperatingSystemSection />
      <IndustriesSection />
      <ServicesDetailedSection />
      <ProcessFlowSection />
      <TamilNaduCoverageSection />
      <TrustSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CareersSection />
      <ContactCTASection />
    </>
  );
}