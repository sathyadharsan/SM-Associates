import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesToCreate = [
  { path: 'src/pages/about/ClientelePage.jsx', name: 'Our Clientele' },
  { path: 'src/pages/coverage/TelanganaPage.jsx', name: 'Telangana Coverage' },
  { path: 'src/pages/coverage/AndhraPradeshPage.jsx', name: 'Andhra Pradesh Coverage' },
  { path: 'src/pages/coverage/PuducherryPage.jsx', name: 'Puducherry Coverage' },
  { path: 'src/pages/services/operational/CallCentrePage.jsx', name: 'Call Centre Operations' },
  { path: 'src/pages/services/operational/ManpowerPage.jsx', name: 'Manpower Sourcing' },
  { path: 'src/pages/services/operational/FacilityManagementPage.jsx', name: 'Facility Management' },
  { path: 'src/pages/services/operational/LiaisingPage.jsx', name: 'Liaising Services' },
  { path: 'src/pages/industries/products/RetailProductsPage.jsx', name: 'Retail & Personal Loans' },
  { path: 'src/pages/industries/products/AutoProductsPage.jsx', name: 'Auto & Vehicle Loans' },
  { path: 'src/pages/industries/products/SmeProductsPage.jsx', name: 'SME & Business Loans' },
  { path: 'src/pages/industries/products/AgriProductsPage.jsx', name: 'Agricultural & Rural Loans' },
  { path: 'src/pages/industries/products/JewelProductsPage.jsx', name: 'Jewel & Gold Loans' },
  { path: 'src/pages/industries/products/EducationProductsPage.jsx', name: 'Educational Loans' },
];

const template = (name) => `
import React from 'react';

export default function Page() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">${name}</h1>
        <p className="text-gray-500 text-lg">Content architecture pending for this page.</p>
      </div>
    </div>
  );
}
`;

pagesToCreate.forEach((page) => {
  const fullPath = path.join(__dirname, page.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, template(page.name).trim());
    console.log('Created: ', page.path);
  }
});
