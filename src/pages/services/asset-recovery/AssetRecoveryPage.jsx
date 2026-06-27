import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function AssetRecoveryPage() {
  return <EnterpriseServiceTemplate content={getPageContent('asset-recovery')} />;
}
