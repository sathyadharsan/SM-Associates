import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function CpvServicesPage() {
  return <EnterpriseServiceTemplate content={getPageContent('cpv-services')} />;
}
