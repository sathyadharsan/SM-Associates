import React from 'react';
import CapabilityServiceTemplate from '../../../components/templates/CapabilityServiceTemplate';
import { getCollectionsContent } from '../../../data/collectionsContent';

export default function PdcCollectionsPage() {
  return <CapabilityServiceTemplate content={getCollectionsContent('pdc-collections')} />;
}
