import React from 'react';
import EnterpriseServiceTemplate from '../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../data/pagesContent';

export default function InvestigationCategoryPage() {
  return <EnterpriseServiceTemplate content={getPageContent('services/investigation')} />;
}
