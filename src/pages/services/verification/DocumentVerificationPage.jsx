import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function DocumentVerificationPage() {
  return <EnterpriseServiceTemplate content={getPageContent('document-verification')} />;
}
