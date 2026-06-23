import React from 'react';
import { useLocation } from 'react-router-dom';
import { getPageContent } from '../data/pagesContent';

// About Layouts
import { 
  CompanyOverviewLayout, 
  LeadershipLayout, 
  HistoryLayout, 
  WhySMAssociatesLayout, 
  ClienteleLayout, 
  ComplianceLayout 
} from './layouts/AboutLayouts';

// Service Layouts
import { 
  VerificationServicesLayout, 
  CollectionsServicesLayout, 
  LegalRecoveryLayout, 
  AssetRecoveryLayout, 
  InvestigationServicesLayout, 
  SpecializedServicesLayout, 
  OperationalServicesLayout 
} from './layouts/ServiceLayouts';

// Other Category Layouts
import { IndustryLayout } from './layouts/IndustryLayout';
import { PlatformLayout } from './layouts/PlatformLayout';
import { CoverageLayout } from './layouts/CoverageLayout';
import { InsightsLayout } from './layouts/InsightsLayout';

// Utility Layouts
import { CareersLayout, ContactLayout, LoginLayout } from './layouts/UtilityLayouts';

export default function DynamicPageRenderer({ pageId }) {
  const location = useLocation();
  const activePath = location.pathname;
  const content = getPageContent(pageId || activePath);

  // 1. UTILITY PAGES
  if (activePath === '/careers' || pageId === 'careers') {
    return <CareersLayout content={content} />;
  }
  if (activePath === '/contact' || pageId === 'contact') {
    return <ContactLayout content={content} />;
  }
  if (activePath === '/login' || pageId === 'login') {
    return <LoginLayout content={content} />;
  }

  // 2. ABOUT PAGES
  if (activePath === '/about' || pageId === 'company-overview') {
    return <CompanyOverviewLayout content={content} />;
  }
  if (activePath === '/about/leadership' || pageId === 'leadership') {
    return <LeadershipLayout content={content} />;
  }
  if (activePath === '/about/history' || pageId === 'history') {
    return <HistoryLayout content={content} />;
  }
  if (activePath === '/about/why-sm-associates' || pageId === 'why-sm-associates') {
    return <WhySMAssociatesLayout content={content} />;
  }
  if (activePath === '/about/clientele' || pageId === 'clientele') {
    return <ClienteleLayout content={content} />;
  }
  if (activePath === '/about/compliance' || pageId === 'compliance') {
    return <ComplianceLayout content={content} />;
  }

  // 3. SERVICES CATEGORIES
  if (activePath.startsWith('/services/verification') || pageId === 'cpv-services') {
    return <VerificationServicesLayout content={content} />;
  }
  if (activePath.startsWith('/services/collections') || pageId === 'field-collections') {
    return <CollectionsServicesLayout content={content} />;
  }
  if (activePath.startsWith('/services/legal-recovery') || pageId === 'sarfaesi-support') {
    return <LegalRecoveryLayout content={content} />;
  }
  if (activePath.startsWith('/services/asset-recovery')) {
    return <AssetRecoveryLayout content={content} />;
  }
  if (activePath.startsWith('/services/investigation') || pageId === 'skip-tracing') {
    return <InvestigationServicesLayout content={content} />;
  }
  if (activePath.startsWith('/services/specialized')) {
    return <SpecializedServicesLayout content={content} />;
  }
  if (activePath.startsWith('/services/operational')) {
    return <OperationalServicesLayout content={content} />;
  }
  if (activePath === '/services') {
    return <SpecializedServicesLayout content={content} />;
  }

  // 4. INDUSTRIES CATEGORIES
  if (activePath.startsWith('/industries')) {
    return <IndustryLayout content={content} />;
  }

  // 5. PLATFORM / OPERATIONS
  if (activePath.startsWith('/recovery-operations') || pageId === 'recovery-os') {
    return <PlatformLayout content={content} />;
  }

  // 6. COVERAGE / STATES
  if (activePath.startsWith('/coverage')) {
    return <CoverageLayout content={content} />;
  }

  // 7. INSIGHTS / BLOG
  if (activePath.startsWith('/insights') || pageId === 'insights') {
    return <InsightsLayout content={content} />;
  }

  // Fallback default layout
  return <VerificationServicesLayout content={content} />;
}
