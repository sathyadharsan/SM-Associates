import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function DueDiligencePage() {
  return <EnterpriseServiceTemplate content={getPageContent('due-diligence')} />;
}
