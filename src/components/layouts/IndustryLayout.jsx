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

export function IndustryLayout({ content }) {
  if (!content) return null;

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] overflow-x-hidden font-inter">
      <HeroSection content={content} />
      <KpiSection content={content} />
      <CapabilitiesSection content={content} />
      <VerticalTabsSection content={content} />
      <WhyItMattersSection content={content} />
      <OverviewSection content={content} />
      <ChallengesSection content={content} />
      <LifecycleSection content={content} />
      <OutcomesSection content={content} />
      <IndustriesSection content={content} />
      <FAQSection content={content} />
      <CTASection content={content} />
    </div>
  );
}
