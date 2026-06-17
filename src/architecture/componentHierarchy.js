export const componentHierarchy = {
  app: 'App.jsx',
  router: 'src/routes/index.jsx',
  layout: 'src/layouts/SiteLayout.jsx',
  header: 'src/layouts/Header.jsx',
  footer: 'src/layouts/Footer.jsx',
  page: 'src/pages/HomePage.jsx',
  sections: [
    {
      name: 'HeroSection',
      file: 'src/sections/HeroSection.jsx',
      children: ['SectionEyebrow', 'HeroCopy', 'PrimaryCTA', 'SecondaryCTA', 'TrustBadgeGrid', 'FinancialIllustration']
    },
    {
      name: 'KPISection',
      file: 'src/sections/KPISection.jsx',
      children: ['SectionHeader', 'KPIGrid', 'KPIStatCard', 'AnimatedCounter']
    },
    {
      name: 'WhySection',
      file: 'src/sections/WhySection.jsx',
      children: ['SectionHeader', 'ValuePropositionGrid', 'ValuePropositionCard']
    },
    {
      name: 'ServicesSection',
      file: 'src/sections/ServicesSection.jsx',
      children: ['SectionHeader', 'ServiceBentoGrid', 'ServiceCard', 'Button']
    },
    {
      name: 'IndustriesSection',
      file: 'src/sections/IndustriesSection.jsx',
      children: ['SectionHeader', 'IndustryCarousel', 'IndustryCard']
    },
    {
      name: 'CapabilitiesTabsSection',
      file: 'src/sections/CapabilitiesTabsSection.jsx',
      children: ['SectionHeader', 'VerticalTabs', 'TabNavigation', 'TabContentPanel']
    },
    {
      name: 'ProcessFlowSection',
      file: 'src/sections/ProcessFlowSection.jsx',
      children: ['SectionHeader', 'TimelineFlow', 'ProcessStepCard']
    },
    {
      name: 'ProductsSection',
      file: 'src/sections/ProductsSection.jsx',
      children: ['SectionHeader', 'ProductGrid', 'ProductCard']
    },
    {
      name: 'ClientTrustSection',
      file: 'src/sections/ClientTrustSection.jsx',
      children: ['SectionHeader', 'LogoCarousel', 'ClientLogoCard']
    },
    {
      name: 'TestimonialsSection',
      file: 'src/sections/TestimonialsSection.jsx',
      children: ['SectionHeader', 'TestimonialCarousel', 'TestimonialCard']
    },
    {
      name: 'ContactCTASection',
      file: 'src/sections/ContactCTASection.jsx',
      children: ['CTAHeading', 'CTAButtons', 'CTAVisualCards']
    }
  ],
  sharedComponents: [
    {
      name: 'Button',
      file: 'src/components/Button.jsx',
      purpose: 'Primary and secondary enterprise CTA component'
    },
    {
      name: 'SectionHeader',
      file: 'src/components/SectionHeader.jsx',
      purpose: 'Reusable eyebrow, headline and paragraph block'
    },
    {
      name: 'FinancialIllustration',
      file: 'src/components/FinancialIllustration.jsx',
      purpose: 'Custom fintech dashboard visual built without external images'
    },
    {
      name: 'AnimatedCounter',
      file: 'src/components/AnimatedCounter.jsx',
      purpose: 'Scroll-triggered KPI counter'
    }
  ],
  data: 'src/data/homeData.js',
  icons: 'src/utils/icons.jsx',
  architecture: 'src/architecture'
};

export const architecturePrinciples = [
  'One homepage route with reusable sections',
  'No image dependency for hero visuals',
  'Lucide React for lightweight premium icons',
  'Framer Motion for reveal, counters, tabs, marquee and hover interactions',
  'Tailwind utilities for responsive enterprise layouts',
  'React Router DOM for production routing structure',
  'White-first visual system with navy typography and gold accents',
  'Bento grids for capability storytelling',
  'Glassmorphism cards for measurable trust signals'
];
