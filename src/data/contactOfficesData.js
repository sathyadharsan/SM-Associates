// ─── Source of truth ───────────────────────────────────────────────────────
// Every fact below (addresses, phone, email, staff count, states) is
// transcribed verbatim from the official printed/PDF "Corporate Profile of
// S M Associates Risk Management Pvt. Ltd." (Knowledge/Corporate Profile...pdf),
// used for bank empanelment submissions. Do not add offices, numbers or
// emails that are not in that document.

export const COMPANY = {
  legalName: 'S M Associates Risk Management Private Limited',
  tagline: 'You can expect more…',
  since: 2000,
  staffCount: '916+',
  yearsStanding: '25+',
  statesCovered: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Telangana', 'Andhra Pradesh', 'Puducherry'],
  officeCount: 20, // 1 HO + 19 branches
  branchCount: 19,
  website: 'www.smassociate.in',
};

export const PRIMARY_CONTACT = {
  landline: '044-4306 0206',
  hrHelpdesk: '+91-91769 54383',
  corporateEmail: 'jebaraj.m@smarmpl.in',
  headOfficeEmail: 'smarmpl.ho@gmail.com',
};

export const LEADERSHIP = [
  { name: 'Shri. M. Jebaraj', role: 'Managing Director', experience: '23+ years', location: 'Egmore, Chennai' },
  { name: 'Shri. P. David Raja', role: 'Director', experience: '23+ years', location: 'Thirunindravur, Tamil Nadu' },
];

// x,y = position (0-100) on the South India coverage map image, using the
// same projection already calibrated in LocationData.js:
//   x = 10 + ((lon − 72) / 13) × 82   [72°E–85°E]
//   y = 5  + ((20 − lat) / 12) × 90   [20°N–8°N]
// City clusters (Chennai: HO+BR1+BR2+BR3, Coimbatore: BR4+BR5) share one marker.
export const officeGroups = [
  {
    state: 'Tamil Nadu',
    cities: [
      {
        id: 'chennai',
        city: 'Chennai',
        x: 60.9, y: 52.7,
        tier: 'hq',
        offices: [
          { code: 'HO', name: 'Head Office', address: 'No. 10/17, East Ellaiamman Koil Street, Kotturpuram, Chennai – 600 085, Tamil Nadu.', landmark: 'Near Kotturpuram Railway Station' },
          { code: 'BR-1', name: 'Chennai Branch 1', address: 'No. 21, 1st Floor, 1st Main Road, Jai Nagar, Arumbakkam, Chennai – 600 106, Tamil Nadu.' },
          { code: 'BR-2', name: 'Chennai Branch 2', address: 'No. 1, Karunanidhi 2nd Street, Kotturpuram, Chennai – 600 085, Tamil Nadu.' },
          { code: 'BR-3', name: 'Chennai Branch 3', address: 'No. F2, Vin Virtusa Homes, No. 84, 5th Street, Rajas Garden, Vanagaram, Chennai – 600 095, Tamil Nadu.', landmark: 'Near Porur Toll Plaza' },
        ],
      },
      {
        id: 'coimbatore',
        city: 'Coimbatore',
        x: 37.2, y: 67.5,
        tier: 'branch',
        offices: [
          { code: 'BR-4', name: 'Coimbatore Branch 4', address: 'No. 437, "Premm Towers", 2nd Floor, Avinashi Road, Pelamedu, Coimbatore – 641 004, Tamil Nadu.', landmark: 'Opp. SMS Hotel' },
          { code: 'BR-5', name: 'Coimbatore Branch 5', address: 'No. 450/1, Trichy Road, Opp. Vasantha Mill, Singanallur, Coimbatore – 641 005, Tamil Nadu.' },
        ],
      },
      {
        id: 'salem', city: 'Salem', x: 38.3, y: 62.6, tier: 'branch',
        offices: [{ code: 'BR-6', name: 'Salem Branch', address: 'PR Residency, No. 6/111-7, 3rd Floor, Bharathi Nagar 4th Cross, Vellakkalpatti, Salem – 636 012, Tamil Nadu.', landmark: 'Near Salem ELCO-SEZ IT Park' }],
      },
      {
        id: 'madurai', city: 'Madurai', x: 38.1, y: 75.6, tier: 'branch',
        offices: [{ code: 'BR-7', name: 'Madurai Branch', address: 'No. 330 & 331, New LIG Colony, K K Nagar, Madurai – 625 020, Tamil Nadu.' }],
      },
      {
        id: 'tirunelveli', city: 'Tirunelveli', x: 35.6, y: 84.7, tier: 'branch',
        offices: [{ code: 'BR-8', name: 'Tirunelveli Branch', address: 'Sri Krishna Complex, No. 98/2, First Floor, Salai Street, Vannarpettai, Tirunelveli – 627 005, Tamil Nadu.' }],
      },
      {
        id: 'tindivanam', city: 'Tindivanam', x: 58.28, y: 63.28, tier: 'branch',
        offices: [{ code: 'BR-9', name: 'Tindivanam Branch', address: 'No. 150, Gingee Road, MGR Nagar, Tindivanam – 604 001, Tamil Nadu.' }],
      },
      {
        id: 'trichy', city: 'Trichy', x: 42.0, y: 69.0, tier: 'branch',
        offices: [{ code: 'BR-10', name: 'Trichy Branch', address: 'No. C-145, NVV Castle, 2nd Floor, 6th Cross, Thillai Nagar, Trichy – 620 018, Tamil Nadu.' }],
      },
      {
        id: 'vellore', city: 'Vellore', x: 54.96, y: 58.1, tier: 'branch',
        offices: [{ code: 'BR-11', name: 'Vellore Branch', address: 'No. 19, 1st Floor, 4th Street, Gopalapuram, Katpadi, Vellore – 632 006, Tamil Nadu.', landmark: 'Near Akshya Hospital & ESI Dispensary' }],
      },
      {
        id: 'dharmapuri', city: 'Dharmapuri', x: 48.87, y: 64.03, tier: 'branch',
        offices: [{ code: 'BR-12', name: 'Dharmapuri Branch', address: 'Door #2/60, N.G.G.O. Colony, Ottapatti, Sub District, Dharmapuri – 636 705, Tamil Nadu.' }],
      },
    ],
  },
  {
    state: 'Kerala',
    cities: [
      {
        id: 'cochin', city: 'Cochin', x: 28.7, y: 76.4, tier: 'branch',
        offices: [{ code: 'BR-13', name: 'Cochin Branch', address: 'SRA-63, Sreekala Byline Road, Near EMC, Vennala P.O., Cochin – 682 028, Kerala.' }],
      },
      {
        id: 'kollam', city: 'Kollam', x: 39.02, y: 88.4, tier: 'branch',
        offices: [{ code: 'BR-14', name: 'Kollam Branch', address: 'KMC 29/1857, Opposite Indialayappan Temple, Ayathil P.O., Kollam – 691 021, Kerala.' }],
      },
    ],
  },
  {
    state: 'Karnataka',
    cities: [
      {
        id: 'bangalore', city: 'Bengaluru', x: 43.5, y: 53.5, tier: 'branch',
        offices: [{ code: 'BR-15', name: 'Bengaluru Branch', address: 'Makam Plaza, 2nd Floor, 3rd Main Road, 18th Cross Road, Malleshwaram, Bengaluru – 560 055, Karnataka.' }],
      },
      {
        id: 'shivamogga', city: 'Shivamogga', x: 32.52, y: 50.53, tier: 'branch',
        offices: [{ code: 'BR-16', name: 'Shivamogga Branch', address: 'Renuka Complex, 1st Floor, Near Bharat Petroleum, Basavveshwar Nagar (Krushi Nagar), Savalanga Road, Shivamogga – 577 204, Karnataka.' }],
      },
    ],
  },
  {
    state: 'Telangana',
    cities: [
      {
        id: 'hyderabad', city: 'Hyderabad', x: 48.9, y: 19.7, tier: 'branch',
        offices: [{ code: 'BR-17', name: 'Hyderabad Branch', address: 'Flat No. F1, Srivijaya Laxmi Classic, MCH No. 7-1-163/1, Plot No. 1, Model Colony, Bahalookhanguda, Erragadda, Hyderabad – 500 038, Telangana.' }],
      },
    ],
  },
  {
    state: 'Andhra Pradesh',
    cities: [
      {
        id: 'vijayawada', city: 'Vijayawada', x: 64.58, y: 31.18, tier: 'branch',
        offices: [{ code: 'BR-18', name: 'Vijayawada Branch', address: '"Jasmine Residency", Flat No. 302, 3rd Floor, Nearby Benz Circle & Novotel Service Road, Vijayawada – 520 008, Andhra Pradesh.' }],
      },
    ],
  },
  {
    state: 'Puducherry',
    cities: [
      {
        id: 'puducherry', city: 'Puducherry', x: 59.42, y: 65.45, tier: 'branch',
        offices: [{ code: 'BR-19', name: 'Puducherry Branch', address: 'Old Door No. 446, New Door No. 152, 1st Floor, Bharathiyar Salai, Ashok Nagar, Lawspet – 605 008, Puducherry.' }],
      },
    ],
  },
];

// Flattened list of every city marker, for the map component.
export const officeCities = officeGroups.flatMap((g) => g.cities.map((c) => ({ ...c, state: g.state })));

export const mapsUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
