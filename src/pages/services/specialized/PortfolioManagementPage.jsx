import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function PortfolioManagementPage() {
  return <EnterpriseServiceTemplate content={getPageContent('portfolio-management')} />;
}
