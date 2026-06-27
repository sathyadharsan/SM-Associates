import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function VehicleRepossessionPage() {
  return <EnterpriseServiceTemplate content={getPageContent('vehicle-repossession')} />;
}
