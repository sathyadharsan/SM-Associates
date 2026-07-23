import React from 'react';
import CapabilityServiceTemplate from '../../../components/templates/CapabilityServiceTemplate';
import { getCollectionsContent } from '../../../data/collectionsContent';

export default function DebtRecoveryPage() {
  return <CapabilityServiceTemplate content={getCollectionsContent('debt-recovery')} />;
}
