import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function PossessionSupportPage() {
  return <EnterpriseServiceTemplate content={getPageContent('possession-support')} />;
}
