import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function HardCollectionsPage() {
  return <EnterpriseServiceTemplate content={getPageContent('hard-collections')} />;
}
