import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function ValuationServicesPage() {
  return <EnterpriseServiceTemplate content={getPageContent('valuation-services')} />;
}
