// Default "Industries Served" segments, shared across every enterprise page
// type (service, future industry/solution pages). A page's content object
// may override this with its own `targetIndustries` array; if it doesn't,
// IndustriesSection falls back to this list so the same 5 approved segments
// (Business.md Target Customers / Industries.md approved segments) aren't
// duplicated inside every individual content file.
export const DEFAULT_TARGET_INDUSTRIES = [
  { name: 'Banking', desc: 'Public and private sector banks verifying retail and commercial loan applicants.' },
  { name: 'NBFC', desc: 'Non-banking finance companies validating borrower profiles across consumer and business lending.' },
  { name: 'Housing Finance', desc: 'Housing finance companies confirming applicant and property-occupant details for mortgage underwriting.' },
  { name: 'Fintech Lending', desc: 'Digital lenders requiring fast, structured ground verification to complement digital KYC.' },
  { name: 'Financial Institutions', desc: 'Broader financial institutions needing independent, on-ground applicant confirmation.' }
];
