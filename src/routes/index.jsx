import { Route, Routes } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import HomePage from '../pages/HomePage';
import AboutIndex from '../pages/about/AboutIndex';
import CompanyOverviewPage from '../pages/about/CompanyOverviewPage';
import VisionMissionPage from '../pages/about/VisionMissionPage';
import LeadershipTeamPage from '../pages/about/LeadershipTeamPage';
import OperationalPresencePage from '../pages/about/OperationalPresencePage';
import ServicesIndex from '../pages/services/ServicesIndex';
import RecoveryServicesPage from '../pages/services/RecoveryServicesPage';
import SarfaesiServicesPage from '../pages/services/SarfaesiServicesPage';
import VerificationServicesPage from '../pages/services/VerificationServicesPage';
import FraudControlPage from '../pages/services/FraudControlPage';
import LegalServicesPage from '../pages/services/LegalServicesPage';
import AuctionServicesPage from '../pages/services/AuctionServicesPage';
import AssetRepossessionPage from '../pages/services/AssetRepossessionPage';
import FieldCollectionsPage from '../pages/services/FieldCollectionsPage';
import IndustriesIndex from '../pages/industries/IndustriesIndex';
import BankingPage from '../pages/industries/BankingPage';
import NbfcPage from '../pages/industries/NbfcPage';
import HousingFinancePage from '../pages/industries/HousingFinancePage';
import FintechPage from '../pages/industries/FintechPage';
import ArcPage from '../pages/industries/ArcPage';
import CapabilitiesIndex from '../pages/capabilities/CapabilitiesIndex';
import RecoveryOsPage from '../pages/capabilities/RecoveryOsPage';
import CollectionsWorkflowPage from '../pages/capabilities/CollectionsWorkflowPage';
import LegalCoordinationPage from '../pages/capabilities/LegalCoordinationPage';
import RiskOperationsPage from '../pages/capabilities/RiskOperationsPage';
import ResourcesIndex from '../pages/resources/ResourcesIndex';
import CaseStudiesPage from '../pages/resources/CaseStudiesPage';
import BlogsPage from '../pages/resources/BlogsPage';
import InsightsPage from '../pages/resources/InsightsPage';
import CareersPage from '../pages/CareersPage';
import ContactPage from '../pages/ContactPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about">
          <Route index element={<AboutIndex />} />
          <Route path="company-overview" element={<CompanyOverviewPage />} />
          <Route path="vision-mission" element={<VisionMissionPage />} />
          <Route path="leadership" element={<LeadershipTeamPage />} />
          <Route path="operational-presence" element={<OperationalPresencePage />} />
        </Route>

        <Route path="/services">
          <Route index element={<ServicesIndex />} />
          <Route path="recovery-services" element={<RecoveryServicesPage />} />
          <Route path="sarfaesi-services" element={<SarfaesiServicesPage />} />
          <Route path="verification-services" element={<VerificationServicesPage />} />
          <Route path="fraud-control" element={<FraudControlPage />} />
          <Route path="legal-services" element={<LegalServicesPage />} />
          <Route path="auction-services" element={<AuctionServicesPage />} />
          <Route path="asset-repossession" element={<AssetRepossessionPage />} />
          <Route path="field-collections" element={<FieldCollectionsPage />} />
        </Route>

        <Route path="/industries">
          <Route index element={<IndustriesIndex />} />
          <Route path="banking" element={<BankingPage />} />
          <Route path="nbfc" element={<NbfcPage />} />
          <Route path="housing-finance" element={<HousingFinancePage />} />
          <Route path="fintech" element={<FintechPage />} />
          <Route path="arc" element={<ArcPage />} />
        </Route>

        <Route path="/capabilities">
          <Route index element={<CapabilitiesIndex />} />
          <Route path="recovery-os" element={<RecoveryOsPage />} />
          <Route path="collections-workflow" element={<CollectionsWorkflowPage />} />
          <Route path="legal-coordination" element={<LegalCoordinationPage />} />
          <Route path="risk-operations" element={<RiskOperationsPage />} />
        </Route>

        <Route path="/resources">
          <Route index element={<ResourcesIndex />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="insights" element={<InsightsPage />} />
        </Route>

        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}