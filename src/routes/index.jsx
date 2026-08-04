import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

// HomePage stays eagerly imported — it's the landing route and lazy-loading
// it would delay first paint. Every other page is code-split via React.lazy
// so first-time visitors only download the route they're on; the Suspense
// boundary lives in SiteLayout around <Outlet />, keeping header/footer
// visible while a chunk loads.
import HomePage from '../pages/HomePage';

// About
const CompanyOverviewPage = lazy(() => import('../pages/about/CompanyOverviewPage'));

// Services
const ServicesIndex = lazy(() => import('../pages/services/ServicesIndex'));

// Industries
const IndustriesIndex = lazy(() => import('../pages/industries/IndustriesIndex'));

// Platform
const RecoveryOperationsIndex = lazy(() => import('../pages/recovery-operations/RecoveryOperationsIndex'));
const RecoveryOsPage = lazy(() => import('../pages/recovery-operations/RecoveryOsPage'));
const WorkflowAutomationPage = lazy(() => import('../pages/recovery-operations/WorkflowAutomationPage'));
const FieldOperationsPage = lazy(() => import('../pages/recovery-operations/FieldOperationsPage'));
const ComplianceMonitoringPage = lazy(() => import('../pages/recovery-operations/ComplianceMonitoringPage'));
const OperationsRecoveryAnalyticsPage = lazy(() => import('../pages/recovery-operations/RecoveryAnalyticsPage'));
const AiRecoveryPage = lazy(() => import('../pages/recovery-operations/AiRecoveryPage'));

// Insights
const InsightsIndex = lazy(() => import('../pages/insights/InsightsIndex'));
const CaseStudiesPage = lazy(() => import('../pages/insights/CaseStudiesPage'));
const BlogPage = lazy(() => import('../pages/insights/BlogPage'));
const NewsUpdatesPage = lazy(() => import('../pages/insights/NewsUpdatesPage'));

// Others
const ClientsPage = lazy(() => import('../pages/ClientsPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const LegalPolicyPage = lazy(() => import('../pages/LegalPolicyPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<CompanyOverviewPage />} />
        <Route path="/about/leadership" element={<Navigate to="/about" replace />} />
        <Route path="/about/history" element={<Navigate to="/about" replace />} />
        <Route path="/about/why-sm-associates" element={<Navigate to="/about" replace />} />
        <Route path="/about/clientele" element={<Navigate to="/about" replace />} />
        <Route path="/about/compliance" element={<Navigate to="/about" replace />} />

        {/* Services — Only Service Landing Page */}
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/*" element={<Navigate to="/services" replace />} />

        {/* Industries — Only Industries Landing Page */}
        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/industries/*" element={<Navigate to="/industries" replace />} />

        {/* Platform */}
        <Route path="/platform" element={<RecoveryOperationsIndex />} />
        <Route path="/platform/recovery-os" element={<RecoveryOsPage />} />
        <Route path="/platform/workflow-automation" element={<WorkflowAutomationPage />} />
        <Route path="/platform/field-operations" element={<FieldOperationsPage />} />
        <Route path="/platform/compliance-monitoring" element={<ComplianceMonitoringPage />} />
        <Route path="/platform/recovery-analytics" element={<OperationsRecoveryAnalyticsPage />} />
        <Route path="/platform/ai-recovery" element={<AiRecoveryPage />} />

        {/* Insights */}
        <Route path="/insights" element={<InsightsIndex />} />
        <Route path="/insights/case-studies" element={<CaseStudiesPage />} />
        <Route path="/insights/blog" element={<BlogPage />} />
        <Route path="/insights/news" element={<NewsUpdatesPage />} />

        {/* Others & Legal Policies */}
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Legal Policies */}
        <Route path="/privacy-policy" element={<LegalPolicyPage />} />
        <Route path="/cookie-policy" element={<LegalPolicyPage />} />
        <Route path="/terms-of-use" element={<LegalPolicyPage />} />
        <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />

        {/* Catch-all — must stay last */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
