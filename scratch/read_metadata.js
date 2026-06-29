import fs from 'fs';
import path from 'path';

const files = [
  'asset.js',
  'investigation.js',
  'operational.js',
  'specialized.js',
  'industries.js'
];

const srcDir = 'c:/sm Associates/src/data/pages';
let output = '';

files.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) {
    output += `File not found: ${filePath}\n`;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  output += `\n=========================================\nFILE: ${file}\n=========================================\n`;
  
  const regex = /"([a-zA-Z0-9_-]+)"\s*:\s*\{/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1];
    const startIndex = match.index;
    
    const nextRegex = /"([a-zA-Z0-9_-]+)"\s*:\s*\{/g;
    nextRegex.lastIndex = startIndex + match[0].length;
    const nextMatch = nextRegex.exec(content);
    const endIndex = nextMatch ? nextMatch.index : content.length;
    
    const block = content.substring(startIndex, endIndex);
    
    const titleMatch = block.match(/"title"\s*:\s*"([^"]+)"/);
    const subtitleMatch = block.match(/"subtitle"\s*:\s*"([^"]+)"/);
    const descMatch = block.match(/"description"\s*:\s*"([^"]+)"/);
    const headingMatch = block.match(/"heading"\s*:\s*"([^"]+)"/);
    const subheadingMatch = block.match(/"subheading"\s*:\s*"([^"]+)"/);
    const summaryMatch = block.match(/"summary"\s*:\s*"([^"]+)"/);
    
    output += `KEY: ${key}\n`;
    if (titleMatch) output += `  title: ${titleMatch[1]}\n`;
    if (subtitleMatch) output += `  subtitle: ${subtitleMatch[1]}\n`;
    if (descMatch) output += `  description: ${descMatch[1]}\n`;
    if (headingMatch) output += `  heading: ${headingMatch[1]}\n`;
    if (subheadingMatch) output += `  subheading: ${subheadingMatch[1]}\n`;
    if (summaryMatch) output += `  summary: ${summaryMatch[1]}\n`;
  }
});

fs.writeFileSync('c:/sm Associates/scratch/metadata_dump.txt', output, 'utf-8');
console.log('Successfully written metadata to scratch/metadata_dump.txt');
