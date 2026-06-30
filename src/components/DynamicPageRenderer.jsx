import React from 'react';
import { useLocation } from 'react-router-dom';
import { getPageContent } from '../data/pagesContent';

// About Layouts
import { CompanyOverviewLayout } from './layouts/AboutLayouts';

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
  if (activePath.startsWith('/about') || pageId === 'company-overview' || pageId === 'leadership' || pageId === 'history' || pageId === 'why-sm-associates' || pageId === 'clientele' || pageId === 'compliance') {
    return <CompanyOverviewLayout content={content} />;
  }

  // 3. INDUSTRIES CATEGORIES
  if (activePath.startsWith('/industries')) {
    return <IndustryLayout content={content} />;
  }

  // 4. PLATFORM / OPERATIONS
  if (activePath.startsWith('/platform') || pageId === 'recovery-os') {
    return <IndustryLayout content={content} />;
  }

  // 5. COVERAGE / STATES
  if (activePath.startsWith('/coverage')) {
    return <CoverageLayout content={content} />;
  }

  // 6. INSIGHTS / BLOG
  if (activePath.startsWith('/insights') || pageId === 'insights') {
    return <InsightsLayout content={content} />;
  }

  // Fallback default layout
  return <CompanyOverviewLayout content={content} />;
}
