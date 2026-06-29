import fs from 'fs';
import path from 'path';

const srcDir = 'c:/sm Associates/src/data/pages';

function replaceInFile(fileName, replacements) {
  const filePath = path.join(srcDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  let count = 0;
  replacements.forEach(({ target, replacement }) => {
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      count++;
    } else {
      console.log(`[WARNING] In ${fileName}, target not found: ${target.substring(0, 50)}...`);
    }
  });
  if (count > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Successfully completed ${count} replacements in ${fileName}`);
  }
}

// ==========================================
// 1. asset.js Replacements
// ==========================================
replaceInFile('asset.js', [
  // valuation-services
  {
    target: `"subtitle": "Setting a Defensible Price Before Possession or Auction Decisions Are Made",`,
    replacement: `"subtitle": "Approved Reserve Pricing & Project Appraisals",`
  },
  {
    target: `"description": "Providing independent, panel-backed valuation reports for secured assets before enforcement and auction.",`,
    replacement: `"description": "Coordinating property and machinery valuations via Government-approved panel valuers to ensure compliant reserve pricing.",`
  },
  {
    target: `"heading": "Why Independent Valuation Comes Before Enforcement Decisions",`,
    replacement: `"heading": "Asset Valuation: Establishing Compliant Reserve Pricing",`
  },
  {
    target: `"subheading": "A Reserve Price Is Only as Good as the Valuation Behind It",`,
    replacement: `"subheading": "Aligning Portfolio Valuations with IRAC Classification Norms",`
  },
  {
    target: `"summary": "Possession, auction, and resolution decisions all depend on a defensible asset value. Valuation Services coordinates a panel of government-approved valuers, chartered engineers, and registered surveyors to produce property valuations, project appraisals, and mortgage valuations that hold up under audit and court scrutiny. SM Associates structures this around panel empanelment standards and IRAC-aligned reporting, so the reserve price reflects real market conditions, not outdated registry assumptions.",`,
    replacement: `"summary": "Failed auctions and legal disputes often stem from inaccurate reserve pricing. Valuation Services coordinates asset valuations through Government-approved panel valuers, chartered engineers, and registered surveyors. We provide detailed market value, realizable value, and distressed value assessments in compliance with RBI Income Recognition and Asset Classification (IRAC) norms. This independent pricing intelligence protects lenders from under-realization and provides a defensible valuation baseline in court.",`
  },
  // custodian-services
  {
    target: `"subtitle": "Protecting Possessed Assets With Trained Personnel and Disciplined Oversight",`,
    replacement: `"subtitle": "Secure Yard Custody & Perimeter Protection",`
  },
  {
    target: `"description": "Deploying trained security personnel and disciplined custodian protocols to protect possessed assets.",`,
    replacement: `"description": "24/7 guarded, CCTV-monitored storage yards to protect the value and integrity of seized assets.",`
  },
  {
    target: `"heading": "Why Disciplined Custodian Oversight Protects Asset Value",`,
    replacement: `"heading": "Secure Asset Custody: Preventing Value Erosion",`
  },
  {
    target: `"subheading": "A Possessed Asset Still Needs Active Protection, Not Just a Lock",`,
    replacement: `"subheading": "24/7 Guarded Storage for Secured Commercial and Retail Assets",`
  },
  {
    target: `"summary": "Taking possession of an asset is only the beginning — between possession and final resolution, the asset needs disciplined, documented protection. Security & Custodian Services deploys personnel sourced from ex-Defence, paramilitary, Home Guards, and NCC backgrounds, trained in security operations, first aid, firefighting, and emergency response, with surprise audits and documented inspection logs. SM Associates structures this around verifiable deployment records, so clients have confidence the asset is genuinely protected, not just nominally guarded.",`,
    replacement: `"summary": "Possessed vehicles and machinery are vulnerable to theft, vandalism, and environmental decay, directly eroding collateral value. Custodian Services operates a network of secure, fenced custody yards monitored 24/7 by ex-Defence security personnel and CCTV systems. We maintain digital inflow registries, perform weekly audits of stored items, and assist in arranging insurance. This operational care protects the asset's value throughout the foreclosure and auction window, ensuring buyers receive assets in their documented condition.",`
  },
  // vehicle-repossession
  {
    target: `"subtitle": "Seizing, Transporting, and Securing Defaulted Vehicle Assets Compliantly",`,
    replacement: `"subtitle": "Tractor and Commercial Vehicle Secured Asset Pickups",`
  },
  {
    target: `"description": "Seizing and securing defaulted vehicles through compliant, DRA-certified field protocols.",`,
    replacement: `"description": "Executing compliant vehicle repossessions under strict RBI fair practice guidelines and secure custody yard transfers.",`
  },
  {
    target: `"heading": "Why Compliant Seizure Conduct Protects the Lender, Not Just the Asset",`,
    replacement: `"heading": "Mobile Asset Repossession: Ethical Field-Based Asset Pickups",`
  },
  {
    target: `"subheading": "A Repossession Done Wrong Becomes a Liability, Not a Recovery",`,
    replacement: `"subheading": "Mitigating Repossession Risks and Safeguarding Customer Dignity",`
  },
  {
    target: `"summary": "Vehicle repossession sits under specific regulatory scrutiny — how the seizure is conducted matters as much as whether it happens. Vehicle Repossession structures every seizure around DRA-certified agent conduct, pre-seizure RTO and police notification, and geotagged surrender documentation, so the action is both effective and defensible. SM Associates then moves the vehicle into secure, CCTV-monitored yard storage, protecting its value through to auction.",`,
    replacement: `"summary": "Vehicle finance repossessions carry significant reputation and conduct risks. Vehicle Repossession operates under strict RBI Fair Practice Codes. We deploy trained, IIBF-certified field officers to locate defaulted agricultural and commercial vehicles, conduct structured negotiations with borrowers, and execute peaceful repossessions. Every asset is logged with detailed inventory checks, photographed, and transferred to secure, guarded yards, providing lenders with a legally clean, audit-ready operational trail.",`
  },
  // asset-tracing
  {
    target: `"subtitle": "Locating Delinquent Fleet Vehicles and Machinery",`,
    replacement: `"subtitle": "Collateral Mapping & Asset Identification",`
  },
  {
    target: `"description": "Track commercial trucks, agricultural tractors, and leased industrial machinery across district lines using local informant networks.",`,
    replacement: `"description": "Locating unlisted or hidden borrower assets through local intelligence, registries, and field investigations to back litigation.",`
  },
  {
    target: `"heading": "Collateral Tracing Operations Desk",`,
    replacement: `"heading": "Collateral Intelligence: Sourcing Recoverable Assets",`
  },
  {
    target: `"subheading": "Structured Field & Administrative Operational Frameworks",`,
    replacement: `"subheading": "Mitigating Recovery Gaps via Asset Mapping",`
  },
  {
    target: `"summary": "SM Associates deploys localized informant networks to locate and confirm physical collateral coordinates.",`,
    replacement: `"summary": "When high-value accounts default, borrowers frequently conceal or transfer assets to evade recovery. Asset Tracing identifies recoverable collateral to back court complaints and execution petitions. SM Associates combines local field intelligence, neighbor inquiries, and land registry searches to map borrower properties, factories, and vehicles. This intelligence provides legal teams and ARCs with the evidentiary grounding needed to obtain attachment orders, ensuring litigation leads to tangible recovery.",`
  },
  // asset-recovery
  {
    target: `"subtitle": "Securing, Transporting, and Protecting High-Value Secured Assets",`,
    replacement: `"subtitle": "Physical Collateral Enforcement & Possession Coordination",`
  },
  {
    target: `"description": "Securing and protecting high-value industrial and commercial collateral end-to-end.",`,
    replacement: `"description": "On-ground operational support to secure, lock down, and recover physical collateral under SARFAESI guidelines.",`
  },
  {
    target: `"heading": "Why Industrial Asset Recovery Needs Its Own Discipline",`,
    replacement: `"heading": "Securing Collateral: Lockout Operations and Asset Recovery",`
  },
  {
    target: `"subheading": "High-Value Assets Demand More Than a Standard Possession Action",`,
    replacement: `"subheading": "Transitioning Defaulted Properties into Recoverable Inventory",`
  },
  {
    target: `"summary": "Securing a factory or a commercial property involves more moving parts than a standard repossession — site eviction coordination, full inventory documentation, heavy-equipment transit logistics, and ongoing security once the asset is in custody. Asset Recovery manages this full sequence, structured around documented site evictions, detailed inventory logging, and 24/7 monitored custody, so collateral value is protected from the moment of seizure through to liquidation. SM Associates delivers this for the institutions managing the largest, most complex secured assets in their portfolios.",`,
    replacement: `"summary": "Physical recovery is the final operational step in securing the lender’s collateral. Asset Recovery manages the physical lockouts and eviction logistics of commercial, industrial, and residential properties. Working alongside authorized bank officers and police escorts, we coordinate locksmiths, install perimeter guards, and establish custody. This disciplined operational deployment ensures that possessed properties are secured without incident, de-risking the subsequent auction phase.",`
  },
  // auction-coordination
  {
    target: `"subtitle": "Managing Valuation, Publication, and Bidding to Maximize Realization",`,
    replacement: `"subtitle": "Statutory Auction Management & Private Treaty Coordination",`
  },
  {
    target: `"description": "Managing valuation, statutory publication, and bidding to maximize asset realization.",`,
    replacement: `"description": "Drafting public notices, managing e-auction portals, and coordinating bidder turnout to maximize asset realization.",`
  },
  {
    target: `"heading": "Why Auction Execution Determines Whether Possession Pays Off",`,
    replacement: `"heading": "Foreclosure Liquidation: Maximizing Recovered Asset Yields",`
  },
  {
    target: `"subheading": "A Possessed Asset Is Only Worth What the Auction Actually Realizes",`,
    replacement: `"subheading": "Compliant Auction Management Under Section 13(8) Redemption Rules",`
  },
  {
    target: `"summary": "Securing an asset through possession is only half the recovery — the auction determines whether that asset translates into actual recovered capital. Auction Coordination manages independent valuation, statutory notice publication across required media, bidder registration and earnest-money verification, and the e-auction process itself. SM Associates structures this around transparent, audit-trailed bidding administration, so the result is a defensible sale at a realistic market price, not a stalled or disputed auction.",`,
    replacement: `"summary": "Foreclosure auctions must satisfy strict legal requirements to prevent borrowers from challenging the sale. Auction Coordination manages the statutory liquidation lifecycle under the SARFAESI Act. In accordance with the Supreme Court's M. Rajendran (2025) ruling, we coordinate the composite publication (newspaper ads, site affixations, website uploads) that extinguishes redemption rights. We manage e-auction portals, identify potential buyers, and coordinate bidding processes, ensuring a transparent, legally clean transfer of ownership.",`
  }
]);

// ==========================================
// 2. investigation.js Replacements
// ==========================================
replaceInFile('investigation.js', [
  // due-diligence
  {
    target: `"subtitle": "Independent Investigation Before a Lending or Recovery Decision Is Made",`,
    replacement: `"subtitle": "Pre-Empanelment & Corporate Risk Diligence",`
  },
  {
    target: `"description": "Conducting independent borrower, business, and asset investigation ahead of lending or recovery decisions.",`,
    replacement: `"description": "Comprehensive background investigations, promoter checks, and asset mappings to assess corporate default risk.",`
  },
  {
    target: `"heading": "Why Independent Investigation Comes Before the Decision, Not After",`,
    replacement: `"heading": "Promoter & Business Diligence: Preventing Corporate Lending Defaults",`
  },
  {
    target: `"subheading": "A Declared Profile Is Not a Verified One",`,
    replacement: `"subheading": "Mitigating Onboarding Credit Risk through Independent Audits",`
  },
  {
    target: `"summary": "Major lending, recovery, or empanelment decisions are often made on the strength of self-declared information about a borrower, business, or counterparty. Due Diligence closes that gap with independent investigation — cross-checking registries, verifying business and asset claims, and surfacing undisclosed liabilities or disputes before the decision is finalized. SM Associates delivers this as a per-engagement investigation service for Banks, NBFCs, and ARCs who need a verified picture, not a declared one.",`,
    replacement: `"summary": "Corporate and commercial lending requires deep verification of borrower character and financial capacity. Due Diligence conducts background checks on promoters, audits corporate structures, and maps commercial relationships. By analyzing registry filings, checking litigation records across NCLT/DRT forums, and conducting local market inquiries, we identify hidden stress, corporate shell setups, or promoter defaults. This risk intelligence informs empanelment and underwriting committees, protecting lending capital before credit exposure.",`
  },
  // skip-tracing
  {
    target: `"subtitle": "Re-Establishing Contact With Absconding and Hard-to-Reach Borrowers",`,
    replacement: `"subtitle": "Defaulted Borrower Location Tracing",`
  },
  {
    target: `"description": "Re-establishing contact with absconding borrowers through structured digital and ground search.",`,
    replacement: `"description": "Locating untraceable, skipped borrowers and co-obligants through structured data intelligence and local field tracing.",`
  },
  {
    target: `"heading": "Why Untraced Doesn’t Mean Unrecoverable",`,
    replacement: `"heading": "Skip Tracing: Re-establishing Contact with Absent Borrowers",`
  },
  {
    target: `"subheading": "A Cold Account Just Needs the Right Search Method",`,
    replacement: `"subheading": "Mitigating Portfolio Write-offs by Sourcing Relocated Borrowers",`
  },
  {
    target: `"summary": "When a borrower stops responding and their last known address turns out to be invalid, many recovery processes simply stall. Skip Tracing treats this as a structured investigative problem rather than a dead end — cross-checking digital and registry databases, then verifying the most promising leads on the ground. SM Associates structures this around a documented search protocol and a standardized update format, so located borrowers translate into restarted recovery action, not just a found phone number.",`,
    replacement: `"summary": "A significant portion of chronic NPAs is locked in \\"skipped\\" accounts where the borrower has relocated without updating contact details. Skip Tracing re-establishes contact through systematic field investigations and database analysis. Our tracing teams combine local inquiries, voter registry searches, and utility provider checks to locate the borrower's active residential or commercial coordinate. This field tracing respects borrower privacy while restoring communication channels, allowing the collections desk to resume recovery negotiations.",`
  },
  // address-tracing
  {
    target: `"subtitle": "Locating Relocated Defaulters Across Remote Districts",`,
    replacement: `"subtitle": "Unlocatable Address Verification",`
  },
  {
    target: `"description": "Utilize ground verification networks and municipal database searches to locate absconding debtors and verify residential stability.",`,
    replacement: `"description": "Field-based investigations to locate and verify ambiguous, incomplete, or unlocatable addresses.",`
  },
  {
    target: `"heading": "Field Skip-Tracing Desk",`,
    replacement: `"heading": "Address Tracing: Clarifying Portfolio Location Coordinates",`
  },
  {
    target: `"subheading": "Structured Field & Administrative Operational Frameworks",`,
    replacement: `"subheading": "Sourcing Physical Coordinates for Notices and Audits",`
  },
  {
    target: `"summary": "Our ground taskforce cross-checks utility registries and conducts local inquiries to trace missing debtors.",`,
    replacement: `"summary": "Incomplete or outdated addresses prevent lenders from serving statutory demand notices, stalling recovery and foreclosure. Address Tracing deploys field investigators to locate ambiguous or unrecorded sites. By checking village maps, coordinating with local post offices, and interviewing local residents, we reconstruct and verify the exact physical coordinate. This operational mapping ensures notices and legal documents are served, establishing the statutory path for enforcement.",`
  },
  // contact-verification
  {
    target: `"subtitle": "Validating Applicant Contactability and KYC Details",`,
    replacement: `"subtitle": "Customer Contactability Auditing",`
  },
  {
    target: `"description": "Verify applicant phone numbers, alternative references, and contactability profiles prior to credit disbursal.",`,
    replacement: `"description": "Verifying applicant phone numbers, emails, and references to ensure active contactability under KYC guidelines.",`
  },
  {
    target: `"heading": "Contact Forensics Desk",`,
    replacement: `"heading": "Contactability Auditing: Maintaining Active Borrower Connections",`
  },
  {
    target: `"subheading": "Structured Field & Administrative Operational Frameworks",`,
    replacement: `"subheading": "Securing the Outreach Pipeline in Digital and Retail Lending",`
  },
  {
    target: `"summary": "We validate applicant telemetry and contactability through recorded tele-checks and digital verifications.",`,
    replacement: `"summary": "Digital lending guidelines place high emphasis on verifying borrower identity and maintaining clean communication lines. Contact Verification validates declared contact profiles. We perform digital checks, verify reference contacts, and conduct soft verification calls to confirm that phone numbers and email addresses are active and attached to the applicant. This audit protects lenders from fraudulent loan applications and ensures collections teams have direct, compliant channels if defaults occur.",`
  },
  // fraud-investigation
  {
    target: `"subtitle": "Exposing Document Tampering, Shell Networks, and Collusive Lending Schemes",`,
    replacement: `"subtitle": "Lending Portfolio Fraud Auditing",`
  },
  {
    target: `"description": "Exposing document tampering, shell networks, and collusive lending through forensic audit.",`,
    replacement: `"description": "Investigating suspected lending fraud, document forgery rings, and promoter asset diversion schemes.",`
  },
  {
    target: `"heading": "Why Forensic Review Catches What a Standard Check Misses",`,
    replacement: `"heading": "Forensic Fraud Investigation: Protecting Lenders from Coordinated Fraud",`
  },
  {
    target: `"subheading": "Lending Fraud Is a Pattern, Not a Single Red Flag",`,
    replacement: `"subheading": "Investigating Document Forgery and Fictitious Borrower Rings",`
  },
  {
    target: `"summary": "Individual elements of a fraudulent application can each look clean on their own — a registered company name, a property deed, a bank statement. Fraud Investigation looks at the pattern across all of them: cross-checking property registries for duplicate mortgages, physically inspecting business sites for genuine operations, and forensically reviewing documents for tampering. SM Associates structures this as a coordinated forensic audit, so fraud rings and schemes are surfaced as a connected pattern, not missed as isolated, individually-plausible details.",`,
    replacement: `"summary": "Coordinated fraud rings manipulate KYC documents, salary records, and business registries to secure fraudulent disbursements. Fraud Investigation conducts forensic reviews of suspected loan files. We verify document details at source registries, audit workplace existence, and investigate promoter backgrounds for diversion patterns. This investigative reporting helps banks and NBFCs identify fraud loops, file regulatory complaints, and strengthen underwriting-stage controls to prevent future occurrences.",`
  }
]);

// ==========================================
// 3. operational.js Replacements
// ==========================================
replaceInFile('operational.js', [
  // call-centre
  {
    target: `"subtitle": "Scaling Outbound Collections Calling Without Scaling Compliance Risk",`,
    replacement: `"subtitle": "Compliant Omnichannel Tele-Calling Operations",`
  },
  {
    target: `"description": "Scaling compliant outbound collections calling without scaling regulatory risk.",`,
    replacement: `"description": "Regulatory-aligned voice logger operations, predictive calling dialers, and customer service desks for loan collections.",`
  },
  {
    target: `"heading": "Why Outsourced Calling Operations Reduce Risk, Not Just Cost",`,
    replacement: `"heading": "Calling Operations: Managing the Early Collection Pipeline",`
  },
  {
    target: `"subheading": "A Managed Calling Desk Bakes Compliance Into the Operating Model",`,
    replacement: `"subheading": "Ensuring Outbound Compliance Under Strict RBI Calling Directives",`
  },
  {
    target: `"summary": "In-house collections calling means the lender owns every compliance risk directly — calling-hour violations, inconsistent scripts, unrecorded conversations. Call Centre Operations structures outbound calling around recorded lines, calling-hour lockouts, and structured QA review, so compliance is enforced by the system, not by individual agent discipline. SM Associates delivers this as bilingual, scalable calling capacity that plugs directly into the lender’s collections workflow.",`,
    replacement: `"summary": "Outbound collections calling requires strict adherence to calling hours and fair practice codes. Call Centre operations run on advanced VoIP dialers programmed with calling hours limits (08:00 AM - 07:00 PM). All agent communication is recorded, and daily voice logs are archived for 180 days. Our QA team audits calling interactions for tone and scripts conformity, mitigating conduct risk while maximizing customer contact rates and collections yield.",`
  },
  // manpower
  {
    target: `"subtitle": "Trained, Background-Verified Field Staff for Collections and Verification",`,
    replacement: `"subtitle": "BFSI Professional Sourcing",`
  },
  {
    target: `"description": "Supplying background-verified, DRA-certified field staff ready for immediate deployment.",`,
    replacement: `"description": "Providing verified, trained collections, verification, and backend support staff for financial institutions.",`
  },
  {
    target: `"heading": "Why Pre-Vetted, Pre-Trained Field Staff Changes the Deployment Timeline",`,
    replacement: `"heading": "Professional Manpower Sourcing: Scaling Credit Operations Staff",`
  },
  {
    target: `"subheading": "Recruiting and Training Field Staff Takes Time You May Not Have",`,
    replacement: `"subheading": "Providing Vetted, Compliant Talent for Lenders",`
  },
  {
    target: `"summary": "Standing up field collections or verification capacity in-house means recruiting candidates, running background checks, and completing DRA certification training before deployment — a process that can take weeks. Field Workforce Deployment supplies staff who have already cleared this pipeline: background-verified, DRA-certified, and field-ready. SM Associates structures this around documented screening and standardized training, so deployment timelines compress from weeks to days.",`,
    replacement: `"summary": "Lenders face high staff turnover and compliance training hurdles in their collections and credit desks. Manpower Sourcing provides vetted, pre-trained professionals who understand banking operations. We handle recruitment, verify backgrounds, coordinate IIBF DRA certifications, and manage payroll. This staffing support allows banks and NBFCs to scale their field operations quickly with compliant, qualified personnel.",`
  },
  // facility-management
  {
    target: `"subtitle": "Securing Foreclosed Properties and Repossessed Assets",`,
    replacement: `"subtitle": "Asset Protection & Secure Facility Custody",`
  },
  {
    target: `"description": "Deploy ex-military security guards and operate fenced CCTV custody yards to protect foreclosed commercial real estate and repossessed vehicle fleets.",`,
    replacement: `"description": "Providing on-site caretakers, facility security, and environmental upkeep for possessed commercial properties.",`
  },
  {
    target: `"heading": "Custody Yard Security Desk",`,
    replacement: `"heading": "Facility Custody: Safeguarding Possessed Real Estate",`
  },
  {
    target: `"subheading": "Structured Field & Administrative Operational Frameworks",`,
    replacement: `"subheading": "Maintaining Value and Security of Closed Properties",`
  },
  {
    target: `"summary": "SM Associates operates fenced, CCTV-monitored custody yards and deploys security guards to protect institutional assets.",`,
    replacement: `"summary": "Possessed factories, offices, and residential structures require active care to prevent structural deterioration and illegal encroachment. Facility Management deploys caretakers and security guards to possessed properties. We manage power connections, coordinate structural repairs, and conduct regular maintenance audits. This protective care preserves the property's resale value and ensures it remains presentable for prospective auction buyers.",`
  },
  // liaising
  {
    target: `"subtitle": "Coordinating with Magistrates, RTOs, and Local Authorities",`,
    replacement: `"subtitle": "Local Authority Coordination Operations",`
  },
  {
    target: `"description": "Liaise with District Chief Judicial Magistrates, Regional Transport Offices, and police stations to execute legally compliant asset seizures and possessions.",`,
    replacement: `"description": "Coordinating with district administrations, police departments, and municipal authorities to support physical possessions.",`
  },
  {
    target: `"heading": "Institutional Liaison Desk",`,
    replacement: `"heading": "Liaison Operations: Navigating Local Regulatory Protocols",`
  },
  {
    target: `"subheading": "Structured Field & Administrative Operational Frameworks",`,
    replacement: `"subheading": "Securing Public Support for Lawful Asset Possessions",`
  },
  {
    target: `"summary": "Our legal coordinators handle magistrate petitions and police notifications to ensure seamless execution.",`,
    replacement: `"summary": "Physical possessions and eviction operations under Section 14 of the SARFAESI Act require close coordination with district magistrates and local police. Liaising manages this administrative interface. We prepare petitions, coordinate scheduling, secure necessary police escorts, and coordinate public notices. By managing these administrative relationships, we ensure enforcement actions proceed safely and in full alignment with local administrative protocols.",`
  }
]);

// ==========================================
// 4. specialized.js Replacements
// ==========================================
replaceInFile('specialized.js', [
  // resolution-strategy
  {
    target: `"subtitle": "A Tailored Resolution Path for Each Account, Not a One-Size-Fits-All Process",`,
    replacement: `"subtitle": "Tailored Stressed-Asset Resolution Plans",`
  },
  {
    target: `"description": "Designing a dedicated, account-level resolution path combining negotiated settlement and parallel legal action.",`,
    replacement: `"description": "Designing borrower-specific OTS frameworks, structural settlement plans, and parallel enforcement strategies.",`
  },
  {
    target: `"heading": "Why a Dedicated Account Strategy Outperforms a Standard Process",`,
    replacement: `"heading": "Stressed Asset Resolution: Calibrating Recovery Approaches",`
  },
  {
    target: `"subheading": "Some Accounts Settle. Some Need Escalation. Few Need Both at Once.",`,
    replacement: `"subheading": "Maximizing Recoveries through Data-Driven Settlements",`
  },
  {
    target: `"summary": "Not every delinquent account follows the same path to resolution — some respond to a negotiated settlement, others need SARFAESI pressure running in parallel to bring the borrower to the table. Resolution Strategy assigns a dedicated account-level team that investigates borrower and guarantor assets, negotiates settlements, and runs SARFAESI escalation in parallel when needed, rather than waiting for one approach to fail before trying another. SM Associates structures this as a tailored, escalation-ready engagement for accounts where a standard process isn’t converting.",`,
    replacement: `"summary": "One-size-fits-all collections protocols are ineffective for high-value defaults. Resolution Strategy designs account-level recovery plans. We analyze borrower net worth, trace hidden assets, evaluate business cash flows, and formulate settlement (OTS) guidelines. By combining negotiated settlements with parallel legal pressure (SARFAESI or Section 138), we guide accounts toward resolution, maximizing value and minimizing cycle times.",`
  },
  // npa-management
  {
    target: `"subtitle": "One Accountable Partner Across the Entire NPA Lifecycle",`,
    replacement: `"subtitle": "One-Window NPA Portfolio Resolution",`
  },
  {
    target: `"description": "Bundling legal, recovery, valuation, security, and resolution under one accountable mandate.",`,
    replacement: `"description": "Single-point execution of legal notices, field collection, asset possession, custody, valuation, and e-auctions.",`
  },
  {
    target: `"heading": "Why a Single-Window Mandate Outperforms a Fragmented One",`,
    replacement: `"heading": "NPA Lifecycle Resolution: Single-Window Execution",`
  },
  {
    target: `"subheading": "One Accountable Partner Across Legal, Recovery, Valuation, and Security",`,
    replacement: `"subheading": "Replacing Multi-Vendor Fragmentation with Coordinated Portfolio Recovery",`
  },
  {
    target: `"summary": "Resolving a non-performing asset typically touches legal assistance, debt recovery, SARFAESI enforcement, valuation, security, investigation, sale, and settlement facilitation — each often handled by a different vendor. NPA Management bundles all of this under one accountable mandate, so the lender has a single point of contact for the entire NPA lifecycle rather than coordinating five or six separate relationships. SM Associates structures this as an integrated resolution plan with unified execution, drawing on the same capabilities already proven across our individual service lines.",`,
    replacement: `"summary": "Lenders lose significant recovery momentum when they manage separate vendors for notices, field visits, legal filings, repossessions, valuations, and auctions. NPA Management bundles the entire default resolution lifecycle under a single operational SLA. We manage the case file from default analysis to final monetization, ensuring absolute consistency, data compliance, and cycle-time velocity, which directly accelerates provision releases.",`
  },
  // portfolio-management
  {
    target: `"subtitle": "Routing Every Account to the Right Recovery Channel, Not the Same One",`,
    replacement: `"subtitle": "Underwriting Risk & Delinquency Lifecycle Management",`
  },
  {
    target: `"description": "Segmenting and routing delinquent accounts to the recovery channel that fits.",`,
    replacement: `"description": "Structured monitoring of retail and SME lending books to identify early delinquency and optimize recovery resources.",`
  },
  {
    target: `"heading": "Why Portfolio-Level Coordination Outperforms Account-by-Account Effort",`,
    replacement: `"heading": "Portfolio Risk Management: Early Delinquency Detection",`
  },
  {
    target: `"subheading": "Not Every Delinquent Account Needs the Same Treatment",`,
    replacement: `"subheading": "Mitigating Loan-to-Value (LTV) Gaps and Provisioning Locks",`
  },
  {
    target: `"summary": "A portfolio of delinquent accounts isn’t uniform — some respond to a phone call, some need a field visit, and some are already past the point where legal action is the only path forward. Portfolio Management segments the book by risk and behavior signals, then routes each account to the channel most likely to resolve it, all under one coordinated operational SLA. SM Associates structures this with dedicated account oversight and regular performance reporting, so lenders see portfolio-level results, not just isolated case updates.",`,
    replacement: `"summary": "Effective risk management requires continuous monitoring of credit portfolios to catch defaults in early buckets. Portfolio Management offers retail and commercial lending monitoring. We track repayment patterns, analyze LTV changes, and flag accounts entering early default. This risk classification helps collections desks focus on high-risk accounts, accelerating rollback rates and reducing transition to Stage-3 NPAs.",`
  },
  // npa-recovery
  {
    target: `"subtitle": "Resolving Non-Performing Assets Through Coordinated Legal and Asset Action",`,
    replacement: `"subtitle": "Cash-Recovery Campaign Execution",`
  },
  {
    target: `"description": "Resolving non-performing assets through coordinated legal notice and possession action.",`,
    replacement: `"description": "Executing targeted field-recovery and OTS negotiation campaigns for corporate and retail default portfolios.",`
  },
  {
    target: `"heading": "Why NPA Resolution Needs a Coordinated, Sequenced Process",`,
    replacement: `"heading": "NPA Cash Recovery: Accelerating Provision Releases",`
  },
  {
    target: `"subheading": "Notice, Possession, and Auction Are Connected Steps, Not Separate Projects",`,
    replacement: `"subheading": "Deploying Targeted Teams to Secure Cash Resolutions",`
  },
  {
    target: `"summary": "Resolving a non-performing asset moves through statutory notice, possession, and liquidation — and a delay or gap at any one stage stalls the rest. NPA Recovery coordinates this full sequence: legal notice enforcement, District Magistrate petition coordination, physical possession execution, secure custody, and auction support. SM Associates structures this around documented, tracked execution at each stage, so provisioning capital gets released as quickly as the statutory process allows.",`,
    replacement: `"summary": "Transitioning Stage-3 assets into recovered cash is essential to restore capital adequacy ratios. NPA Recovery executes focused on-ground recovery campaigns. Our teams engage defaulted borrowers, conduct OTS settlement meetings, and collect dues. By aligning field activity with regulatory compliance (RBI Fair Practice Codes), we convert non-yielding NPAs back into active cash assets, directly releasing capital reserves and improving bank profitability.",`
  },
  // recovery-analytics
  {
    target: `"subtitle": "Directing Recovery Effort Using Behavior Data, Not Guesswork",`,
    replacement: `"subtitle": "Data-Driven Delinquency Segmentation & Scoring",`
  },
  {
    target: `"description": "Directing recovery effort using borrower behavior data instead of guesswork.",`,
    replacement: `"description": "Utilizing historical collection data and behavior scoring to optimize field route planning and contact propensity.",`
  },
  {
    target: `"heading": "Why Behavior Data Changes How Recovery Campaigns Perform",`,
    replacement: `"heading": "Collections Intelligence: Analytics-Led Recovery Allocation",`
  },
  {
    target: `"subheading": "Not Every Account Is Worth the Same Recovery Effort",`,
    replacement: `"subheading": "Using Behavior Propensity to Direct Field Resources",`
  },
  {
    target: `"summary": "Recovery campaigns improve when effort is directed by data, not spread evenly across every account. Recovery Analytics builds settlement-propensity models from borrower behavior signals, optimizes field-visit routing to reduce wasted travel, and delivers results through a synced operational dashboard. SM Associates structures this as a data layer that plugs into existing collections and field operations, sharpening where effort goes rather than replacing the operations themselves.",`,
    replacement: `"summary": "Unoptimized collection efforts result in high costs and low yields. Recovery Analytics utilizes historical payment telemetry to score accounts based on repayment propensity. We segment the portfolio into automated calling, soft field outreach, or hard legal escalation tracks. This data-driven strategy directs field teams to high-propensity accounts and optimizes travel routes, cutting operational overhead while increasing collection velocity.",`
  },
  // recovery-consulting
  {
    target: `"subtitle": "Designing the Process Before Outsourcing the Execution",`,
    replacement: `"subtitle": "Recovery SOP Design & Compliance Auditing",`
  },
  {
    target: `"description": "Reviewing and redesigning recovery processes before execution is scaled or outsourced.",`,
    replacement: `"description": "Advising bank and NBFC risk committees on recovery policy restructuring, vendor audit frameworks, and compliance.",`
  },
  {
    target: `"heading": "Why Process Design Comes Before Scaling Recovery Operations",`,
    replacement: `"heading": "Recovery Policy Auditing: Building Robust Risk Governance",`
  },
  {
    target: `"subheading": "Outsourcing Execution Doesn’t Fix a Broken Process — It Scales It",`,
    replacement: `"subheading": "Designing Compliant Operating Frameworks for BFSI Regulators",`
  },
  {
    target: `"summary": "Lenders often look to outsource calling or field operations before addressing whether the underlying process — scripts, vendor oversight, compliance alignment — is actually sound. Recovery Strategy Consulting reviews recovery SOPs, audits vendor management practices, and aligns operations with RBI Fair Practices Code expectations before execution scales. SM Associates brings this perspective from decades of operating recovery functions directly, so the advice reflects what actually works on the ground, not just policy theory.",`,
    replacement: `"summary": "Regulated entities must ensure their recovery policies and vendor networks comply with evolving regulatory codes. Recovery Consulting provides policy design and process audit support. We review existing recovery SOPs, draft collections scripts to align with RBI's draft 2026 conduct rules, and design vendor audit frameworks. This consulting alignment ensures lenders maintain high compliance marks and are fully prepared for regulatory audits.",`
  }
]);
