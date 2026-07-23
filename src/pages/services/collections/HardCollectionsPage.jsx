import React from 'react';
import CapabilityServiceTemplate from '../../../components/templates/CapabilityServiceTemplate';
import { getCollectionsContent } from '../../../data/collectionsContent';

export default function HardCollectionsPage() {
  return <CapabilityServiceTemplate content={getCollectionsContent('hard-collections')} />;
}
