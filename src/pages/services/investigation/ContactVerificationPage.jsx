import React from 'react';
import EnterpriseServiceTemplate from '../../../components/templates/EnterpriseServiceTemplate';
import { getPageContent } from '../../../data/pagesContent';

export default function ContactVerificationPage() {
  return <EnterpriseServiceTemplate content={getPageContent('contact-verification')} />;
}
