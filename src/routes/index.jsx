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
const CollectionsCategoryPage = lazy(() => import('../pages/services/CollectionsCategoryPage'));
const LegalCategoryPage = lazy(() => import('../pages/services/LegalCategoryPage'));
const VerificationCategoryPage = lazy(() => import('../pages/services/VerificationCategoryPage'));
const AssetCategoryPage = lazy(() => import('../pages/services/AssetCategoryPage'));
const InvestigationCategoryPage = lazy(() => import('../pages/services/InvestigationCategoryPage'));
const OperationalCategoryPage = lazy(() => import('../pages/services/OperationalCategoryPage'));
const CpvServicesPage = lazy(() => import('../pages/services/verification/CpvServicesPage'));
const ResidenceVerificationPage = lazy(() => import('../pages/services/verification/ResidenceVerificationPage'));
const OfficeVerificationPage = lazy(() => import('../pages/services/verification/OfficeVerificationPage'));
const BusinessVerificationPage = lazy(() => import('../pages/services/verification/BusinessVerificationPage'));
const DocumentVerificationPage = lazy(() => import('../pages/services/verification/DocumentVerificationPage'));
const PdcCollectionsPage = lazy(() => import('../pages/services/collections/PdcCollectionsPage'));
const EarlyStageCollectionsPage = lazy(() => import('../pages/services/collections/EarlyStageCollectionsPage'));
const SoftCollectionsPage = lazy(() => import('../pages/services/collections/SoftCollectionsPage'));
const HardCollectionsPage = lazy(() => import('../pages/services/collections/HardCollectionsPage'));
const FieldCollectionsPage = lazy(() => import('../pages/services/collections/FieldCollectionsPage'));
const DebtRecoveryPage = lazy(() => import('../pages/services/collections/DebtRecoveryPage'));
const ChequeBounceNoticesPage = lazy(() => import('../pages/services/legal-recovery/ChequeBounceNoticesPage'));
const SarfaesiSupportPage = lazy(() => import('../pages/services/legal-recovery/SarfaesiSupportPage'));
const PossessionSupportPage = lazy(() => import('../pages/services/legal-recovery/PossessionSupportPage'));
const LegalCoordinationPage = lazy(() => import('../pages/services/legal-recovery/LegalCoordinationPage'));
const LitigationSupportPage = lazy(() => import('../pages/services/legal-recovery/LitigationSupportPage'));
const VehicleRepossessionPage = lazy(() => import('../pages/services/asset-recovery/VehicleRepossessionPage'));
const AssetTracingPage = lazy(() => import('../pages/services/asset-recovery/AssetTracingPage'));
const AssetRecoveryPage = lazy(() => import('../pages/services/asset-recovery/AssetRecoveryPage'));
const AuctionCoordinationPage = lazy(() => import('../pages/services/asset-recovery/AuctionCoordinationPage'));
const ValuationServicesPage = lazy(() => import('../pages/services/asset-recovery/ValuationServicesPage'));
const CustodianServicesPage = lazy(() => import('../pages/services/asset-recovery/CustodianServicesPage'));
const DueDiligencePage = lazy(() => import('../pages/services/investigation/DueDiligencePage'));
const SkipTracingPage = lazy(() => import('../pages/services/investigation/SkipTracingPage'));
const AddressTracingPage = lazy(() => import('../pages/services/investigation/AddressTracingPage'));
const ContactVerificationPage = lazy(() => import('../pages/services/investigation/ContactVerificationPage'));
const FraudInvestigationPage = lazy(() => import('../pages/services/investigation/FraudInvestigationPage'));
const PortfolioManagementPage = lazy(() => import('../pages/services/specialized/PortfolioManagementPage'));
const NpaManagementPage = lazy(() => import('../pages/services/specialized/NpaManagementPage'));
const ResolutionStrategyPage = lazy(() => import('../pages/services/specialized/ResolutionStrategyPage'));
const NpaRecoveryPage = lazy(() => import('../pages/services/specialized/NpaRecoveryPage'));
const RecoveryAnalyticsPage = lazy(() => import('../pages/services/specialized/RecoveryAnalyticsPage'));
const RecoveryConsultingPage = lazy(() => import('../pages/services/specialized/RecoveryConsultingPage'));
const CallCentrePage = lazy(() => import('../pages/services/operational/CallCentrePage'));
const ManpowerPage = lazy(() => import('../pages/services/operational/ManpowerPage'));
const FacilityManagementPage = lazy(() => import('../pages/services/operational/FacilityManagementPage'));
const LiaisingPage = lazy(() => import('../pages/services/operational/LiaisingPage'));

// Industries
const IndustriesIndex = lazy(() => import('../pages/industries/IndustriesIndex'));
const BankingPage = lazy(() => import('../pages/industries/BankingPage'));
const NbfcPage = lazy(() => import('../pages/industries/NbfcPage'));
const HousingFinancePage = lazy(() => import('../pages/industries/HousingFinancePage'));
const MicrofinancePage = lazy(() => import('../pages/industries/MicrofinancePage'));
const FintechPage = lazy(() => import('../pages/industries/FintechPage'));
const ArcPage = lazy(() => import('../pages/industries/ArcPage'));
const CommercialLendingPage = lazy(() => import('../pages/industries/CommercialLendingPage'));
const InsurancePage = lazy(() => import('../pages/industries/InsurancePage'));
const VehicleFinancePage = lazy(() => import('../pages/industries/VehicleFinancePage'));
const GoldLoanPage = lazy(() => import('../pages/industries/GoldLoanPage'));
const RetailProductsPage = lazy(() => import('../pages/industries/products/RetailProductsPage'));
const AutoProductsPage = lazy(() => import('../pages/industries/products/AutoProductsPage'));
const SmeProductsPage = lazy(() => import('../pages/industries/products/SmeProductsPage'));
const AgriProductsPage = lazy(() => import('../pages/industries/products/AgriProductsPage'));
const JewelProductsPage = lazy(() => import('../pages/industries/products/JewelProductsPage'));
const EducationProductsPage = lazy(() => import('../pages/industries/products/EducationProductsPage'));

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

        {/* Services */}
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/collections" element={<CollectionsCategoryPage />} />
        <Route path="/services/legal-recovery" element={<LegalCategoryPage />} />
        <Route path="/services/verification" element={<VerificationCategoryPage />} />
        <Route path="/services/asset-recovery" element={<AssetCategoryPage />} />
        <Route path="/services/investigation" element={<InvestigationCategoryPage />} />
        <Route path="/services/operational" element={<OperationalCategoryPage />} />
        {/* Verification */}
        <Route path="/services/verification/cpv-services" element={<CpvServicesPage />} />
        <Route path="/services/verification/residence-verification" element={<ResidenceVerificationPage />} />
        <Route path="/services/verification/office-verification" element={<OfficeVerificationPage />} />
        <Route path="/services/verification/business-verification" element={<BusinessVerificationPage />} />
        <Route path="/services/verification/document-verification" element={<DocumentVerificationPage />} />
        {/* Collections */}
        <Route path="/services/collections/pdc-collections" element={<PdcCollectionsPage />} />
        <Route path="/services/collections/early-stage" element={<EarlyStageCollectionsPage />} />
        <Route path="/services/collections/soft-collections" element={<SoftCollectionsPage />} />
        <Route path="/services/collections/hard-collections" element={<HardCollectionsPage />} />
        <Route path="/services/collections/field-collections" element={<FieldCollectionsPage />} />
        <Route path="/services/collections/debt-recovery" element={<DebtRecoveryPage />} />
        {/* Legal */}
        <Route path="/services/legal-recovery/cheque-bounce-notices" element={<ChequeBounceNoticesPage />} />
        <Route path="/services/legal-recovery/sarfaesi-support" element={<SarfaesiSupportPage />} />
        <Route path="/services/legal-recovery/possession-support" element={<PossessionSupportPage />} />
        <Route path="/services/legal-recovery/legal-coordination" element={<LegalCoordinationPage />} />
        <Route path="/services/legal-recovery/litigation-support" element={<LitigationSupportPage />} />
        {/* Asset */}
        <Route path="/services/asset-recovery/vehicle-repossession" element={<VehicleRepossessionPage />} />
        <Route path="/services/asset-recovery/asset-tracing" element={<AssetTracingPage />} />
        <Route path="/services/asset-recovery/asset-recovery" element={<AssetRecoveryPage />} />
        <Route path="/services/asset-recovery/auction-coordination" element={<AuctionCoordinationPage />} />
        <Route path="/services/asset-recovery/valuation-services" element={<ValuationServicesPage />} />
        <Route path="/services/asset-recovery/custodian-services" element={<CustodianServicesPage />} />
        {/* Investigation */}
        <Route path="/services/investigation/due-diligence" element={<DueDiligencePage />} />
        <Route path="/services/investigation/skip-tracing" element={<SkipTracingPage />} />
        <Route path="/services/investigation/address-tracing" element={<AddressTracingPage />} />
        <Route path="/services/investigation/contact-verification" element={<ContactVerificationPage />} />
        <Route path="/services/investigation/fraud-investigation" element={<FraudInvestigationPage />} />
        {/* Specialized */}
        <Route path="/services/specialized/portfolio-management" element={<PortfolioManagementPage />} />
        <Route path="/services/specialized/npa-management" element={<NpaManagementPage />} />
        <Route path="/services/specialized/resolution-strategy" element={<ResolutionStrategyPage />} />
        <Route path="/services/specialized/npa-recovery" element={<NpaRecoveryPage />} />
        <Route path="/services/specialized/recovery-analytics" element={<RecoveryAnalyticsPage />} />
        <Route path="/services/specialized/recovery-consulting" element={<RecoveryConsultingPage />} />
        {/* Operational */}
        <Route path="/services/operational/call-centre" element={<CallCentrePage />} />
        <Route path="/services/operational/manpower" element={<ManpowerPage />} />
        <Route path="/services/operational/facility-management" element={<FacilityManagementPage />} />
        <Route path="/services/operational/liaising" element={<LiaisingPage />} />

        {/* Industries */}
        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/industries/banking" element={<BankingPage />} />
        <Route path="/industries/nbfc" element={<NbfcPage />} />
        <Route path="/industries/housing-finance" element={<HousingFinancePage />} />
        <Route path="/industries/microfinance" element={<MicrofinancePage />} />
        <Route path="/industries/fintech" element={<FintechPage />} />
        <Route path="/industries/arc" element={<ArcPage />} />
        <Route path="/industries/commercial-lending" element={<CommercialLendingPage />} />
        <Route path="/industries/insurance" element={<InsurancePage />} />
        <Route path="/industries/vehicle-finance" element={<VehicleFinancePage />} />
        <Route path="/industries/gold-loan" element={<GoldLoanPage />} />
        {/* Products */}
        <Route path="/industries/products/retail" element={<RetailProductsPage />} />
        <Route path="/industries/products/auto" element={<AutoProductsPage />} />
        <Route path="/industries/products/sme" element={<SmeProductsPage />} />
        <Route path="/industries/products/agri" element={<AgriProductsPage />} />
        <Route path="/industries/products/jewel" element={<JewelProductsPage />} />
        <Route path="/industries/products/education" element={<EducationProductsPage />} />

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

        {/* Others */}
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Catch-all — must stay last */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
