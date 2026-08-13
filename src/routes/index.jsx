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

// Future
const FuturePage = lazy(() => import('../pages/FuturePage'));

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

        {/* Future — disabled for launch, redirects to Home */}
        <Route path="/future" element={<Navigate to="/" replace />} />

        {/* Insights */}
        <Route path="/insights" element={<InsightsIndex />} />
        <Route path="/insights/case-studies" element={<CaseStudiesPage />} />
        <Route path="/insights/blog" element={<Navigate to="/insights" replace />} />
        <Route path="/insights/news" element={<Navigate to="/insights" replace />} />

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
