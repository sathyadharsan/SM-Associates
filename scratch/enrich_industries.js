import fs from 'fs';
import path from 'path';

const srcDir = 'c:/sm Associates/src/data/pages';
const fileName = 'industries.js';
const filePath = path.join(srcDir, fileName);

if (!fs.existsSync(filePath)) {
  console.log(`File not found: ${filePath}`);
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf-8');
let count = 0;

function replaceText(target, replacement) {
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    count++;
  } else {
    console.log(`[WARNING] Target not found: ${target.substring(0, 60)}...`);
  }
}

// 1. banking
replaceText(
  `title: 'Commercial Lenders Navigate Rising NPA Volumes',`,
  `title: 'Schedule Commercial Bank Debt Recovery & NPA Resolution',`
);
replaceText(
  `subtitle: 'Resolving default portfolios through compliant, structured field operations and legal possession management.',`,
  `subtitle: 'Mitigating Gross NPA transition and provisioning drag for Scheduled Commercial Banks (SCBs) through RBI-compliant operations.',`
);
replaceText(
  `description: 'SM Associates Risk Management Pvt. Ltd. acts as a technology-enabled resolution partner, deploying IIBF DRA-certified coordinators and legal advocate panels to protect bank asset quality and release provisioning reserves.',`,
  `description: 'Deploying IIBF DRA-certified field coordinators, automated voice logger networks, and legal panels to accelerate SCB recoveries under strict DOR.ORG.REC.65/21.04.158/2022-23 rules.',`
);
replaceText(
  `heading: 'Enterprise Banking Operations Panel',`,
  `heading: 'SCB Recovery Management: Securing Capital Adequacy Ratios',`
);
replaceText(
  `subheading: 'Strict Governance for Enterprise Banking Books',`,
  `subheading: 'Mitigating Asset Downgrade Velocity and Optimizing Recoveries',`
);
replaceText(
  `summary: 'Public and private banks operate under intense regulatory scrutiny. SM Associates insulates banks from conduct risk by deploying 100% DRA-certified field coordinators, recording 100% of outbound calls, and enforcing strict calling locks (08:00 AM to 07:00 PM). Our legal coordinators specialize in preparing CJM/CMM petitions under Section 14 of the SARFAESI Act, ensuring fast and legally clean collateral foreclosure.',`,
  `summary: 'Scheduled Commercial Banks operate under tight capital adequacy metrics and strict regulatory reviews. SM Associates shields lenders from conduct risk by deploying IIBF DRA-certified coordinators and locking dialer hours strictly between 08:00 AM and 07:00 PM in line with RBI Outsource Directives. Our legal teams specialize in Section 14 CMM/CJM coordination, accelerating possession execution to unlock stressed assets and reduce Gross NPA ratios.',`
);

// 2. fintech
replaceText(
  `title: 'Digital Lenders Require Rapid Sourcing Speed',`,
  `title: 'FinTech Digital Lending Compliance & Tele-Calling',`
);
replaceText(
  `subtitle: 'Verifying candidate profiles and managing early collections through API-driven ground operations.',`,
  `subtitle: 'Enforcing pre-disbursal KYC validations and early collections under RBI Digital Lending Guidelines.',`
);
replaceText(
  `description: 'SM Associates Risk Management Pvt. Ltd. structures pre-disbursal workplace verifications, geolocated residence checks, and compliant tele-calling loops for the speed of modern digital lenders.',`,
  `description: 'API-integrated address verifications, recorded collections tele-calling, and geotagged doorstep checks to secure digital lending books.',`
);
replaceText(
  `heading: 'API-Driven Ground Operations',`,
  `heading: 'Digital Lending Verification: Real-Time Fraud Mitigation',`
);
replaceText(
  `subheading: 'Syncing Digital Collections CRM with Local Branch Dispatch',`,
  `subheading: 'API-Driven Verification Loops and Compliant Tele-Calling',`
);
replaceText(
  `summary: 'FinTech lending operates at extreme speed. SM Associates supports digital lenders by providing API-integrated address verifications and compliant collections dispatch. We import files through secure SFTP or API paths, allocate them instantly to local branch representatives, and deliver geotagged reports with photos within 24 hours, bridging the gap between digital credit and ground reality.',`,
  `summary: 'FinTech lending demands real-time verification and compliance checks to prevent synthetic identity theft. SM Associates provides API-integrated CPV verifications and recorded collections dispatch under the 2025 Digital Lending guidelines. We ingest cases via SFTP/API, allocate to local officers with real-time GPS telemetry, and deliver geo-tagged reports within 24 hours, securing the digital origination loop.',`
);

// 3. nbfc
replaceText(
  `title: 'Diverse Retail Books Demand High Sourcing Density',`,
  `title: 'NBFC Retail Credit Operations & Scale-Based Resolution',`
);
replaceText(
  `subtitle: 'We optimize retail loan collections and vehicle repossessions through decentralized ground networks.',`,
  `subtitle: 'Optimizing collection rollback velocity and vehicle repossessions under the RBI Scale-Based Regulation (SBR) framework.',`
);
replaceText(
  `description: 'SM Associates Risk Management Pvt. Ltd. structures high-volume collections, doorstep payment pickups, and geolocated verifications calibrated to the operational needs of leading NBFC networks.',`,
  `description: 'Deploying decentralized field networks to execute doorstep collections, vehicle pickups, and pre-disbursal verifications for leading NBFC books.',`
);
replaceText(
  `heading: 'Decentralized NBFC Operations Loop',`,
  `heading: 'NBFC Recovery Operations: Navigating Scale-Based Regulations',`
);
replaceText(
  `subheading: 'Maximizing Field Contact Density through Branch Networks',`,
  `subheading: 'Optimizing Doorstep Contact Velocity under Pecuniary SARFAESI Thresholds',`
);
replaceText(
  `summary: 'NBFC retail portfolios demand rapid, cost-efficient doorstep coordination. SM Associates operates 19 branches across 5 states, allowing us to allocate cases to local representatives residing within the same districts. This minimizes travel costs and enables same-day customer contact. We handle the complete lifecycle, from pre-disbursal verifications to physical vehicle repossession, all tracked on our central console.',`,
  `summary: 'NBFC retail portfolios require highly decentralized, compliant doorstep outreach. Operating 19 branches, SM Associates deploys local representatives to verify addresses and collect dues, ensuring same-day contact. We manage the entire recovery cycle under SBR parameters, implementing the statutory ₹20 lakh SARFAESI pecuniary threshold for eligible NBFCs while maintaining complete audit trails.',`
);

// 4. housing-finance
replaceText(
  `title: 'Secured Mortgages Demand Legal Possessions Velocity',`,
  `title: 'Housing Finance Mortgage Foreclosure & SARFAESI Execution',`
);
replaceText(
  `subtitle: 'We expedite SARFAESI foreclosures and property possessions through dedicated legal coordinate desks.',`,
  `subtitle: 'Accelerating symbolic and physical possessions under the NHB Act and Section 13(4)/14 of the SARFAESI Act.',`
);
replaceText(
  `description: 'SM Associates Risk Management Pvt. Ltd. coordinates Section 13 notice servings, Chief Metropolitan Magistrate Section 14 filings, symbolic/physical possessions, and public e-auctions to release banking capital.',`,
  `description: 'Drafting statutory demand notices, securing physical repossession orders from CJM/CMM courts, and coordinating e-auctions for HFC portfolios.',`
);
replaceText(
  `heading: 'Foreclosure Operations Desk',`,
  `heading: 'Mortgage Asset Foreclosure: Securing Eviction Orders',`
);
replaceText(
  `subheading: 'Enforcing Foreclosures with Speed and Legal Precision',`,
  `subheading: 'Executing Possession Orders Under Supreme Court Section 13(8) Precedents',`
);
replaceText(
  `summary: 'Secured mortgages require specialized legal and field coordination. SM Associates operates a dedicated foreclosure desk that drafts and serves Section 13 notices, coordinates petitions before Chief Metropolitan Magistrates (CMM), takes symbolic/physical possession, and manages public auctions. All activities are fully documented with photos and video logs to pre-empt court challenges.',`,
  `summary: 'Secured mortgage recoveries depend on tight adherence to statutory timelines to prevent borrower challenges. SM Associates operates a dedicated foreclosure desk that coordinates Section 13 notice serving, Section 14 magistrate orders, physical possession eviction, and e-auctions. We apply the 2025 M. Rajendran precedent, ensuring composite notices extinguish redemption rights and accelerate sale closure.',`
);

// 5. microfinance
replaceText(
  `title: 'Compliant and Respectful Collections for Microfinance Portfolios',`,
  `title: 'Microfinance Portfolio Compliance & Ethical Outreach',`
);
replaceText(
  `subtitle: 'Ethical Outreach and Code-of-Conduct Enforcement on the Ground',`,
  `subtitle: 'Managing joint-liability group (JLG) collections and rural address validations under strict RBI credit conduct directives.',`
);
replaceText(
  `description: 'Scale soft outbound dialing campaigns and regional field collections designed specifically for microfinance borrowers.',`,
  `description: 'Outbound calling and doorstep coordination designed specifically for SFBs and NBFC-MFIs under Customer Dignity Mandates.',`
);
replaceText(
  `heading: 'Managed Outreach Solutions',`,
  `heading: 'MFI Field Coordination: Maintaining Asset Quality Respectfully',`
);
replaceText(
  `subheading: 'Empathetic and Compliant Outreach for JLG Portfolios',`,
  `subheading: 'Managing Joint Liability Group collections under RBI Customer Protection Rules',`
);
replaceText(
  `summary: 'Microfinance recovery requires balancing resolution rates with strict compliance rules. SM Associates structures JLG collections around certified agents, bilingual scripts, and strict caller logging. Our branch networks cover local districts, enabling discreet and respectful doorstep verifications that maintain lender goodwill.',`,
  `summary: 'Microfinance collections require strict adherence to customer protection guidelines to manage regional delinquency trends. SM Associates structures JLG collections around background-verified, bilingual representatives. We enforce strict caller logs and doorstep visit guidelines, resolving defaults respectfully to protect customer relationships while reducing portfolio stress.',`
);

// 6. arc
replaceText(
  `title: 'Acquired Banking Books Require Forensic Foreclosure enforcements',`,
  `title: 'Asset Reconstruction Company NPA Portfolio Liquidation',`
);
replaceText(
  `subtitle: 'We accelerate stressed asset resolution and public auctions through legal panels and site security.',`,
  `subtitle: 'Expediting stressed asset takeovers, property valuations, and public e-auctions to release locked provisioning capital.',`
);
replaceText(
  `description: 'SM Associates Risk Management Pvt. Ltd. structures physical possessions execution, Government-approved valuations, factory site security guard deployments, and e-auction bidder mobilizations to maximize recovery yields.',`,
  `description: 'Executing physical takeovers, Government-approved reserve valuations, secure custody yard storage, and public auctions for ARC portfolios.',`
);
replaceText(
  `heading: 'Asset Valuation Security Loops',`,
  `heading: 'Stressed Asset Monetization: Securing and Liquidating NPA Portfolios',`
);
replaceText(
  `subheading: 'Securing Value Throughout the NPA Resolution Cycle',`,
  `subheading: 'Managing Foreclosure Auctions under the 2025 Securitisation and Stressed Assets Directions',`
);
replaceText(
  `summary: 'Asset Reconstruction Companies require a recovery partner capable of handling legal, logistics, and security. SM Associates provides end-to-end support for ARC portfolios: taking symbolic possession, deploying ex-defence security guards, conducting panel valuations, and publicizing e-auctions to maximize realization yields.',`,
  `summary: 'ARCs need an operational partner to manage the legal and security logistics of acquired stressed assets. Under the 2025 Securitisation of Stressed Assets Directions, SM Associates provides single-window support: executing physical possessions, deploying security guards, coordinating valuations with panel surveyors, and managing e-auctions to maximize recovery yields.',`
);

// 7. commercial-lending
replaceText(
  `title: 'SME Default Portfolios Require Operations Precision',`,
  `title: 'SME & Corporate Commercial Credit Recovery',`
);
replaceText(
  `subtitle: 'We verify applicant capacity and coordinate commercial legal notice serving.',`,
  `subtitle: 'Conducting on-site inventory audits, corporate promoter checks, and coordinating DRT litigation support.',`
);
replaceText(
  `description: 'SM Associates Risk Management Pvt. Ltd. structures pre-disbursal trade checks, Director DIN registry searches, on-site inventory audits, and DRT coordinate legal notice serving to secure commercial asset quality.',`,
  `description: 'Executing pre-disbursal commercial site checks, trade registry validation (GSTIN/MSME), promoter due diligence, and DRT legal support.',`
);
replaceText(
  `heading: 'Specialized Corporate Recovery Panels',`,
  `heading: 'Commercial Debt Recovery: Resolving SME Defaults',`
);
replaceText(
  `subheading: 'Resolving Commercial Defaults with Legal Rigor and Sourcing',`,
  `subheading: 'Accelerating DRT Applications and Title Investigations under the IBC Framework',`
);
replaceText(
  `summary: 'High-value commercial loans require structured investigations and legal coordination. SM Associates supports corporate lenders by tracing alternative assets of defaulting directors, auditing operating capacity of SME borrowers, and assisting legal teams in filing applications and recovery certificates before Debt Recovery Tribunals (DRT).',`,
  `summary: 'High-value commercial defaults require thorough investigations and coordinated legal pressure. SM Associates supports corporate lenders by tracing alternative assets of defaulting promoters, conducting on-site inventory audits, and preparing court-admissible dossiers. We coordinate panels to file recovery certificates and applications before Debt Recovery Tribunals, speeding up asset monetization.',`
);

// 8. insurance
replaceText(
  `title: 'Claims Fraud Investigation and Verification Support for Insurers',`,
  `title: 'Insurance Special Investigation Unit (SIU) Audits',`
);
replaceText(
  `subtitle: 'On-Ground SIU Audits and Forensic Documentation Checks',`,
  `subtitle: 'Investigating motor, medical, and life claims through independent field verifications and registry checks.',`
);
replaceText(
  `description: 'Investigate suspicious motor, life, and medical insurance claims with certified on-ground investigators and forensic record checkers.',`,
  `description: 'Executing on-site accident checks, medical records audits, and death certificate registry checks to mitigate claims fraud.',`
);
replaceText(
  `heading: 'Forensic Ground Claims Audits',`,
  `heading: 'Insurance Claims Verification: On-Ground SIU Audits',`
);
replaceText(
  `subheading: 'Verifying the Truth Behind Suspicious Claims',`,
  `subheading: 'Mitigating Claims Fraud and Exposing Fictitious Beneficiaries',`
);
replaceText(
  `summary: 'Insurance fraud directly impacts premium margins. SM Associates supports insurers by providing dedicated Special Investigation Unit (SIU) field audits. We conduct on-site accident verifications, check hospital medical records, verify death certificates, and gather local witness statements to provide clear evidentiary files.',`,
  `summary: 'Claims fraud directly impacts insurance premium margins. SM Associates supports insurers with Special Investigation Unit (SIU) field audits. Our investigators conduct accident checks, verify medical records at hospitals, crosscheck death certificates at municipal registries, and gather witness statements to provide clear, court-admissible evidence files.',`
);

// 9. vehicle-finance
replaceText(
  `title: 'Vehicle Collections, Repossession & Yard Custody Operations',`,
  `title: 'Vehicle Finance Recovery & Fenced Yard Custody',`
);
replaceText(
  `subtitle: 'Securing Delinquent Auto and Commercial Fleet Assets',`,
  `subtitle: 'Executing compliant vehicle repossession and yard storage under strict RBI Fair Practice Codes.',`
);
replaceText(
  `description: 'Seize, transport, and secure delinquent auto, commercial, and tractor assets with strict compliance and trained repossession agents.',`,
  `description: 'Deploying DRA-certified agents to locate and repossess delinquent vehicle assets, coordinating yard storage and RTO notifications.',`
);
replaceText(
  `heading: 'Structured Seizure Logistics',`,
  `heading: 'Vehicle Asset Repossession: Managing Seizure Logistics',`
);
replaceText(
  `subheading: 'Ethical and Compliant Vehicle Repossession Operations',`,
  `subheading: 'Coordinating Police Notifications and Fenced Storage Security',`
);
replaceText(
  `summary: 'Vehicle finance defaults require secure logistics and compliance tracking. SM Associates coordinates the complete vehicle foreclosure lifecycle: tracing vehicles, executing repossession, transporting to our secure fenced yards, and handling RTO and auction compliance.',`,
  `summary: 'Vehicle collections require coordinated logistics and regulatory compliance. SM Associates manages the entire repossession process: deploying DRA-certified field coordinators, filing RTO/police notifications, executing peaceful repossessions, and storing assets in our fenced yards to protect resale value before auction.',`
);

// 10. gold-loan
replaceText(
  `title: 'Applicant Verifications and soft collections for Gold Loan Portfolios',`,
  `title: 'Gold Loan Portfolio Validation & Soft Collections',`
);
replaceText(
  `subtitle: 'Bilingual Collections and Local Address Validations',`,
  `subtitle: 'Conducting quick doorstep address verifications and bilingual collection campaigns under strict RBI conduct codes.',`
);
replaceText(
  `description: 'Verify gold loan applicant profiles and manage collections campaigns with strict compliance and trained ground representatives.',`,
  `description: 'Providing pre-disbursal customer validations, local address checks, and compliant billing-reminder tele-calling.',`
);
replaceText(
  `heading: 'Managed Outreach Solutions',`,
  `heading: 'Gold Loan Risk Management: Validating Customer Profiles',`
);
replaceText(
  `subheading: 'Empathetic and Compliant Outreach for Gold Loan Books',`,
  `subheading: 'Managing Local Verifications and Dialer calling under RBI Conduct Mandates',`
);
replaceText(
  `summary: 'Gold loan recovery requires balancing resolution rates with compliance. SM Associates structures gold loan collections around certified agents, bilingual scripts, and strict calling logs. Our branch networks cover local districts, enabling doorstep address verifications that maintain lender goodwill.',`,
  `summary: 'Gold loan portfolios depend on accurate customer verification and compliant reminders. SM Associates structures operations around bilingual calls and rapid address validations. We run pre-disbursal customer checks within local districts and manage soft collection campaigns strictly during regulatory hours, preserving borrower relationships.',`
);

// Products specific checks (retail-products, auto-products, sme-products, agri-products, jewel-products, education-products)
// Let's do the products page targets as well to keep them aligned
replaceText(
  `title: 'Verification & Collections for Retail & Personal Loans',`,
  `title: 'Retail Loan Portfolio CPV & Collections',`
);
replaceText(
  `title: 'On-Site Business and Commercial Establishment Verification',`,
  `title: 'SME Commercial Establishment & Business Verification',`
);
replaceText(
  `title: 'Compliant and Localized Agricultural & Tractor Loan Recoveries',`,
  `title: 'Agricultural & Tractor Loan Recoveries',`
);
replaceText(
  `title: 'Professional and Compliant Education Loan Collections',`,
  `title: 'Education Loan Portfolio Collections & Tracing',`
);

if (count > 0) {
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Successfully completed ${count} replacements in industries.js`);
} else {
  console.log('No replacements completed in industries.js');
}
