import fs from 'fs';
import path from 'path';

const filePath = 'c:/sm Associates/src/data/pages/industries.js';
const content = fs.readFileSync(filePath, 'utf-8');

let output = '';

const regex = /'([a-zA-Z0-9_-]+)'\s*:\s*\{/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const key = match[1];
  const startIndex = match.index;
  
  const nextRegex = /'([a-zA-Z0-9_-]+)'\s*:\s*\{/g;
  nextRegex.lastIndex = startIndex + match[0].length;
  const nextMatch = nextRegex.exec(content);
  const endIndex = nextMatch ? nextMatch.index : content.length;
  
  const block = content.substring(startIndex, endIndex);
  
  const titleMatch = block.match(/title\s*:\s*'([^']+)'/);
  const subtitleMatch = block.match(/subtitle\s*:\s*'([^']+)'/);
  const descMatch = block.match(/description\s*:\s*'([^']+)'/);
  
  const overviewMatch = block.match(/overview\s*:\s*\{([^}]+)\}/);
  let heading = '';
  let subheading = '';
  let summary = '';
  
  if (overviewMatch) {
    const ob = overviewMatch[1];
    const hm = ob.match(/heading\s*:\s*'([^']+)'/);
    const shm = ob.match(/subheading\s*:\s*'([^']+)'/);
    const sm = ob.match(/summary\s*:\s*'([^']+)'/);
    if (hm) heading = hm[1];
    if (shm) subheading = shm[1];
    if (sm) summary = sm[1];
  }
  
  output += `KEY: ${key}\n`;
  if (titleMatch) output += `  title: '${titleMatch[1]}'\n`;
  if (subtitleMatch) output += `  subtitle: '${subtitleMatch[1]}'\n`;
  if (descMatch) output += `  description: '${descMatch[1]}'\n`;
  if (heading) output += `  heading: '${heading}'\n`;
  if (subheading) output += `  subheading: '${subheading}'\n`;
  if (summary) output += `  summary: '${summary}'\n\n`;
}

fs.writeFileSync('c:/sm Associates/scratch/industries_metadata.txt', output, 'utf-8');
console.log('Wrote industries metadata to scratch/industries_metadata.txt');
