import React from 'react';
import HeroSection from '../sections/HeroSection';
import KpiSection from '../sections/KpiSection';
import CentralizedSystemManagementSection from '../sections/CentralizedSystemManagementSection';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import VerticalTabsSection from '../sections/VerticalTabsSection';
import WhyItMattersSection from '../sections/WhyItMattersSection';
import OverviewSection from '../sections/OverviewSection';
import ChallengesSection from '../sections/ChallengesSection';
import LifecycleSection from '../sections/LifecycleSection';
import OutcomesSection from '../sections/OutcomesSection';
import IndustriesSection from '../sections/IndustriesSection';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

// Orchestrates the Enterprise Content Template for a service page with "One Hero Graphic" Rule.
export default function EnterpriseServiceTemplate({ content }) {
  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] overflow-x-hidden font-inter">
      <HeroSection content={content} />
      <KpiSection content={content} />
      
      <CapabilitiesSection content={content} />
      <VerticalTabsSection content={content} />
      <WhyItMattersSection content={content} />
      <OverviewSection content={content} />
      
      {/* ── CRISP MINIMAL RISK LANDSCAPE GRID (Clean 2-Column Stripe Style) ── */}
      <ChallengesSection content={content} />
      
      <LifecycleSection content={content} />
      <OutcomesSection content={content} />
      <IndustriesSection content={content} />
      <FAQSection content={content} />
      <CTASection content={content} />
    </div>
  );
}
