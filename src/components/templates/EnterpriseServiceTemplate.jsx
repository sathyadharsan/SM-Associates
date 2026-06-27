import React from 'react';
import HeroSection from '../sections/HeroSection';
import WhyItMattersSection from '../sections/WhyItMattersSection';
import OverviewSection from '../sections/OverviewSection';
import KpiSection from '../sections/KpiSection';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import VerticalTabsSection from '../sections/VerticalTabsSection';
import ChallengesSection from '../sections/ChallengesSection';
import LifecycleSection from '../sections/LifecycleSection';
import OutcomesSection from '../sections/OutcomesSection';
import IndustriesSection from '../sections/IndustriesSection';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

// Orchestrates the 12-section Enterprise Content Template for a service
// page. Pure composition — no markup or business logic of its own. Every
// section reads only the generic content fields it needs and renders
// nothing if its data is absent, so a page can omit sections it doesn't
// need without this component changing.
//
// Future page types (EnterpriseIndustryTemplate, EnterpriseSolutionTemplate)
// should compose the same section library in their own order/subset rather
// than duplicating section implementations.
export default function EnterpriseServiceTemplate({ content }) {
  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] overflow-x-hidden font-inter">
      <HeroSection content={content} />
      <KpiSection content={content} />
      <CapabilitiesSection content={content} />
      <VerticalTabsSection content={content} />
      <ChallengesSection content={content} />
      <WhyItMattersSection content={content} />
      <OverviewSection content={content} />
      <LifecycleSection content={content} />
      <OutcomesSection content={content} />
      <IndustriesSection content={content} />
      <FAQSection content={content} />
      <CTASection content={content} />
    </div>
  );
}
