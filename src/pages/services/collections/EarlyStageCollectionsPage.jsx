import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function EarlyStageCollectionsPage() {
  return <EnterpriseServiceTemplate content={getPageContent('early-stage-collections')} />;
}
