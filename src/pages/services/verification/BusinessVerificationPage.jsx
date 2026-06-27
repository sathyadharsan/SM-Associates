import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function BusinessVerificationPage() {
  return <EnterpriseServiceTemplate content={getPageContent('business-verification')} />;
}
