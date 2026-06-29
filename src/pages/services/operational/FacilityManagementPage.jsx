import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function FacilityManagementPage() {
  return <EnterpriseServiceTemplate content={getPageContent('facility-management')} />;
}
