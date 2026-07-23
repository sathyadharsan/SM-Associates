import React from 'react';
import CapabilityServiceTemplate from '../../../components/templates/CapabilityServiceTemplate';
import { getCollectionsContent } from '../../../data/collectionsContent';

export default function SoftCollectionsPage() {
  return <CapabilityServiceTemplate content={getCollectionsContent('soft-collections')} />;
}
