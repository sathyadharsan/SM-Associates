import React from 'react';
import CapabilityServiceTemplate from '../../../components/templates/CapabilityServiceTemplate';
import { getCollectionsContent } from '../../../data/collectionsContent';

export default function EarlyStageCollectionsPage() {
  return <CapabilityServiceTemplate content={getCollectionsContent('early-stage')} />;
}
