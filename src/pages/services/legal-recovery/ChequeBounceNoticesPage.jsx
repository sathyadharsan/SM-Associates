import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function ChequeBounceNoticesPage() {
  return <EnterpriseServiceTemplate content={getPageContent('cheque-bounce-notices')} />;
}
