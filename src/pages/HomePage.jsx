import HeroSection from '../sections/HeroSection';
import ClientLogoCarousel from '../components/ClientLogoCarousel';
import AboutSection from '../sections/AboutSection';
import RecoveryOperatingSystemSection from '../sections/RecoveryOperatingSystemSection';
import IndustriesSection from '../sections/IndustriesSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessFlowSection from '../sections/ProcessFlowSection';
import TamilNaduCoverageSection from '../sections/TamilNaduCoverageSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactCTASection from '../sections/ContactCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogoCarousel />
      <AboutSection />
      <RecoveryOperatingSystemSection />
      <IndustriesSection />
      <ServicesSection />
      <ProcessFlowSection />
      <TamilNaduCoverageSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
}
