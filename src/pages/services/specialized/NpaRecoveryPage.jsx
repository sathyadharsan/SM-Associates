import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function NpaRecoveryPage() {
  return <EnterpriseServiceTemplate content={getPageContent('npa-recovery')} />;
}
