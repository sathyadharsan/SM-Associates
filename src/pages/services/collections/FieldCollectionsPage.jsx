import React from 'react';
import CapabilityServiceTemplate from '../../../components/templates/CapabilityServiceTemplate';
import { getCollectionsContent } from '../../../data/collectionsContent';

export default function FieldCollectionsPage() {
  return <CapabilityServiceTemplate content={getCollectionsContent('field-collections')} />;
}
