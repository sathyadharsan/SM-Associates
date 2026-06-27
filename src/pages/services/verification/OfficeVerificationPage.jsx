import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function OfficeVerificationPage() {
  return <EnterpriseServiceTemplate content={getPageContent('office-verification')} />;
}
