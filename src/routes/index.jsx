import { Route, Routes } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import HomePage from '../pages/HomePage';
import ServicesIndex from '../pages/services/ServicesIndex';
import PreDisbursalPage from '../pages/services/PreDisbursalPage';
import PostDisbursalPage from '../pages/services/PostDisbursalPage';
import FraudControlPage from '../pages/services/FraudControlPage';
import SarfaesiPage from '../pages/services/SarfaesiPage';
import LegalServicesPage from '../pages/services/LegalServicesPage';
import FieldCollectionsPage from '../pages/services/FieldCollectionsPage';
import YardManagementPage from '../pages/services/YardManagementPage';
import ManpowerSolutionsPage from '../pages/services/ManpowerSolutionsPage';
import IndustriesIndex from '../pages/industries/IndustriesIndex';
import BankingPage from '../pages/industries/BankingPage';
import NbfcPage from '../pages/industries/NbfcPage';
import HousingFinancePage from '../pages/industries/HousingFinancePage';
import ArcPage from '../pages/industries/ArcPage';
import FintechPage from '../pages/industries/FintechPage';
import InsurancePage from '../pages/industries/InsurancePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/pre-disbursal" element={<PreDisbursalPage />} />
        <Route path="/services/post-disbursal" element={<PostDisbursalPage />} />
        <Route path="/services/fraud-control" element={<FraudControlPage />} />
        <Route path="/services/sarfaesi" element={<SarfaesiPage />} />
        <Route path="/services/legal" element={<LegalServicesPage />} />
        <Route path="/services/field-collections" element={<FieldCollectionsPage />} />
        <Route path="/services/yard-management" element={<YardManagementPage />} />
        <Route path="/services/manpower" element={<ManpowerSolutionsPage />} />
      </Route>
      <Route path="/industries" element={<IndustriesIndex />} />
      <Route path="/industries/banking" element={<BankingPage />} />
      <Route path="/industries/nbfc" element={<NbfcPage />} />
      <Route path="/industries/housing-finance" element={<HousingFinancePage />} />
      <Route path="/industries/arc" element={<ArcPage />} />
      <Route path="/industries/fintech" element={<FintechPage />} />
      <Route path="/industries/insurance" element={<InsurancePage />} />
    </Routes>
  );
}