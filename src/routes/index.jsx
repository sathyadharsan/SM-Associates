import { Route, Routes } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import HomePage from '../pages/HomePage';

// About Pages
import CompanyOverviewPage from '../pages/about/CompanyOverviewPage';
import LeadershipTeamPage from '../pages/about/LeadershipTeamPage';
import CompanyHistoryPage from '../pages/about/CompanyHistoryPage';
import WhySMAssociatesPage from '../pages/about/WhySMAssociatesPage';
import ClientelePage from '../pages/about/ClientelePage';
import ComplianceEthicsPage from '../pages/about/ComplianceEthicsPage';

// Services Pages
import ServicesIndex from '../pages/services/ServicesIndex';
import CpvServicesPage from '../pages/services/verification/CpvServicesPage';
import ResidenceVerificationPage from '../pages/services/verification/ResidenceVerificationPage';
import OfficeVerificationPage from '../pages/services/verification/OfficeVerificationPage';
import BusinessVerificationPage from '../pages/services/verification/BusinessVerificationPage';
import DocumentVerificationPage from '../pages/services/verification/DocumentVerificationPage';
import EarlyStageCollectionsPage from '../pages/services/collections/EarlyStageCollectionsPage';
import SoftCollectionsPage from '../pages/services/collections/SoftCollectionsPage';
import HardCollectionsPage from '../pages/services/collections/HardCollectionsPage';
import FieldCollectionsPage from '../pages/services/collections/FieldCollectionsPage';
import DebtRecoveryPage from '../pages/services/collections/DebtRecoveryPage';
import SarfaesiSupportPage from '../pages/services/legal-recovery/SarfaesiSupportPage';
import PossessionSupportPage from '../pages/services/legal-recovery/PossessionSupportPage';
import LegalCoordinationPage from '../pages/services/legal-recovery/LegalCoordinationPage';
import LitigationSupportPage from '../pages/services/legal-recovery/LitigationSupportPage';
import VehicleRepossessionPage from '../pages/services/asset-recovery/VehicleRepossessionPage';
import AssetTracingPage from '../pages/services/asset-recovery/AssetTracingPage';
import AssetRecoveryPage from '../pages/services/asset-recovery/AssetRecoveryPage';
import AuctionCoordinationPage from '../pages/services/asset-recovery/AuctionCoordinationPage';
import SkipTracingPage from '../pages/services/investigation/SkipTracingPage';
import AddressTracingPage from '../pages/services/investigation/AddressTracingPage';
import ContactVerificationPage from '../pages/services/investigation/ContactVerificationPage';
import FraudInvestigationPage from '../pages/services/investigation/FraudInvestigationPage';
import PortfolioManagementPage from '../pages/services/specialized/PortfolioManagementPage';
import NpaRecoveryPage from '../pages/services/specialized/NpaRecoveryPage';
import RecoveryAnalyticsPage from '../pages/services/specialized/RecoveryAnalyticsPage';
import RecoveryConsultingPage from '../pages/services/specialized/RecoveryConsultingPage';
import CallCentrePage from '../pages/services/operational/CallCentrePage';
import ManpowerPage from '../pages/services/operational/ManpowerPage';
import FacilityManagementPage from '../pages/services/operational/FacilityManagementPage';
import LiaisingPage from '../pages/services/operational/LiaisingPage';

// Industries Pages
import IndustriesIndex from '../pages/industries/IndustriesIndex';
import BankingPage from '../pages/industries/BankingPage';
import NbfcPage from '../pages/industries/NbfcPage';
import HousingFinancePage from '../pages/industries/HousingFinancePage';
import MicrofinancePage from '../pages/industries/MicrofinancePage';
import FintechPage from '../pages/industries/FintechPage';
import ArcPage from '../pages/industries/ArcPage';
import CommercialLendingPage from '../pages/industries/CommercialLendingPage';
import InsurancePage from '../pages/industries/InsurancePage';
import VehicleFinancePage from '../pages/industries/VehicleFinancePage';
import GoldLoanPage from '../pages/industries/GoldLoanPage';
import RetailProductsPage from '../pages/industries/products/RetailProductsPage';
import AutoProductsPage from '../pages/industries/products/AutoProductsPage';
import SmeProductsPage from '../pages/industries/products/SmeProductsPage';
import AgriProductsPage from '../pages/industries/products/AgriProductsPage';
import JewelProductsPage from '../pages/industries/products/JewelProductsPage';
import EducationProductsPage from '../pages/industries/products/EducationProductsPage';

// Recovery Operations
import RecoveryOperationsIndex from '../pages/recovery-operations/RecoveryOperationsIndex';
import RecoveryOsPage from '../pages/recovery-operations/RecoveryOsPage';
import WorkflowAutomationPage from '../pages/recovery-operations/WorkflowAutomationPage';
import FieldOperationsPage from '../pages/recovery-operations/FieldOperationsPage';
import ComplianceMonitoringPage from '../pages/recovery-operations/ComplianceMonitoringPage';
import OperationsRecoveryAnalyticsPage from '../pages/recovery-operations/RecoveryAnalyticsPage'; // Aliased to avoid clash
import AiRecoveryPage from '../pages/recovery-operations/AiRecoveryPage';

// Coverage
import CoverageIndex from '../pages/coverage/CoverageIndex';
import TamilNaduPage from '../pages/coverage/TamilNaduPage';
import KarnatakaPage from '../pages/coverage/KarnatakaPage';
import KeralaPage from '../pages/coverage/KeralaPage';
import TelanganaPage from '../pages/coverage/TelanganaPage';
import AndhraPradeshPage from '../pages/coverage/AndhraPradeshPage';
import PuducherryPage from '../pages/coverage/PuducherryPage';
import BranchNetworkPage from '../pages/coverage/BranchNetworkPage';

// Insights
import InsightsIndex from '../pages/insights/InsightsIndex';
import CaseStudiesPage from '../pages/insights/CaseStudiesPage';
import BlogPage from '../pages/insights/BlogPage';
import NewsUpdatesPage from '../pages/insights/NewsUpdatesPage';

// Others
import CareersPage from '../pages/CareersPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<CompanyOverviewPage />} />
        <Route path="/about/leadership" element={<LeadershipTeamPage />} />
        <Route path="/about/history" element={<CompanyHistoryPage />} />
        <Route path="/about/why-sm-associates" element={<WhySMAssociatesPage />} />
        <Route path="/about/clientele" element={<ClientelePage />} />
        <Route path="/about/compliance" element={<ComplianceEthicsPage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesIndex />} />
        {/* Verification */}
        <Route path="/services/verification/cpv-services" element={<CpvServicesPage />} />
        <Route path="/services/verification/residence-verification" element={<ResidenceVerificationPage />} />
        <Route path="/services/verification/office-verification" element={<OfficeVerificationPage />} />
        <Route path="/services/verification/business-verification" element={<BusinessVerificationPage />} />
        <Route path="/services/verification/document-verification" element={<DocumentVerificationPage />} />
        {/* Collections */}
        <Route path="/services/collections/early-stage" element={<EarlyStageCollectionsPage />} />
        <Route path="/services/collections/soft-collections" element={<SoftCollectionsPage />} />
        <Route path="/services/collections/hard-collections" element={<HardCollectionsPage />} />
        <Route path="/services/collections/field-collections" element={<FieldCollectionsPage />} />
        <Route path="/services/collections/debt-recovery" element={<DebtRecoveryPage />} />
        {/* Legal */}
        <Route path="/services/legal-recovery/sarfaesi-support" element={<SarfaesiSupportPage />} />
        <Route path="/services/legal-recovery/possession-support" element={<PossessionSupportPage />} />
        <Route path="/services/legal-recovery/legal-coordination" element={<LegalCoordinationPage />} />
        <Route path="/services/legal-recovery/litigation-support" element={<LitigationSupportPage />} />
        {/* Asset */}
        <Route path="/services/asset-recovery/vehicle-repossession" element={<VehicleRepossessionPage />} />
        <Route path="/services/asset-recovery/asset-tracing" element={<AssetTracingPage />} />
        <Route path="/services/asset-recovery/asset-recovery" element={<AssetRecoveryPage />} />
        <Route path="/services/asset-recovery/auction-coordination" element={<AuctionCoordinationPage />} />
        {/* Investigation */}
        <Route path="/services/investigation/skip-tracing" element={<SkipTracingPage />} />
        <Route path="/services/investigation/address-tracing" element={<AddressTracingPage />} />
        <Route path="/services/investigation/contact-verification" element={<ContactVerificationPage />} />
        <Route path="/services/investigation/fraud-investigation" element={<FraudInvestigationPage />} />
        {/* Specialized */}
        <Route path="/services/specialized/portfolio-management" element={<PortfolioManagementPage />} />
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

        {/* Recovery Operations */}
        <Route path="/recovery-operations" element={<RecoveryOperationsIndex />} />
        <Route path="/recovery-operations/recovery-os" element={<RecoveryOsPage />} />
        <Route path="/recovery-operations/workflow-automation" element={<WorkflowAutomationPage />} />
        <Route path="/recovery-operations/field-operations" element={<FieldOperationsPage />} />
        <Route path="/recovery-operations/compliance-monitoring" element={<ComplianceMonitoringPage />} />
        <Route path="/recovery-operations/recovery-analytics" element={<OperationsRecoveryAnalyticsPage />} />
        <Route path="/recovery-operations/ai-recovery" element={<AiRecoveryPage />} />

        {/* Coverage */}
        <Route path="/coverage" element={<CoverageIndex />} />
        <Route path="/coverage/tamil-nadu" element={<TamilNaduPage />} />
        <Route path="/coverage/karnataka" element={<KarnatakaPage />} />
        <Route path="/coverage/kerala" element={<KeralaPage />} />
        <Route path="/coverage/telangana" element={<TelanganaPage />} />
        <Route path="/coverage/andhra-pradesh" element={<AndhraPradeshPage />} />
        <Route path="/coverage/puducherry" element={<PuducherryPage />} />
        <Route path="/coverage/branch-network" element={<BranchNetworkPage />} />

        {/* Insights */}
        <Route path="/insights" element={<InsightsIndex />} />
        <Route path="/insights/case-studies" element={<CaseStudiesPage />} />
        <Route path="/insights/blog" element={<BlogPage />} />
        <Route path="/insights/news" element={<NewsUpdatesPage />} />

        {/* Others */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}