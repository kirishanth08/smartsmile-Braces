const fs = require('fs');
const path = require('path');

function createSimplePDF(title, subtitle, sections) {
  let streamText = 'BT\n';
  streamText += '/F2 20 Tf\n36 740 Td\n(' + escapePDF(title) + ') Tj\n';
  streamText += '/F1 11 Tf\n0 -24 Td\n(' + escapePDF(subtitle) + ') Tj\n';
  streamText += '0 -18 Td\n(SmartSmile Orthodontic & Braces Clinic -- Official Resource) Tj\n';
  streamText += '0 -14 Td\n(---------------------------------------------------------------------------------) Tj\n';
  streamText += '0 -22 Td\n';

  for (const sec of sections) {
    streamText += '/F2 13 Tf\n(' + escapePDF(sec.heading) + ') Tj\n0 -16 Td\n';
    streamText += '/F1 10 Tf\n';
    for (const item of sec.items) {
      streamText += '(' + escapePDF(item) + ') Tj\n0 -14 Td\n';
    }
    streamText += '0 -10 Td\n';
  }

  streamText += '/F1 9 Tf\n0 -20 Td\n(SmartSmile Orthodontics -- Call: +1 800-555-7645 -- Web: smartsmile.clinic) Tj\n';
  streamText += 'ET';

  function escapePDF(str) {
    return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  }

  const streamLen = Buffer.byteLength(streamText, 'utf-8');

  const pdfParts = [
    '%PDF-1.4\n',
    '1 0 obj\n<< /Type /Catalog /Pages 3 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Outlines /Count 0 >>\nendobj\n',
    '3 0 obj\n<< /Type /Pages /Kids [4 0 R] /Count 1 >>\nendobj\n',
    '4 0 obj\n<< /Type /Page /Parent 3 0 R /MediaBox [0 0 612 792] /Contents 7 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
    '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
    '7 0 obj\n<< /Length ' + streamLen + ' >>\nstream\n' + streamText + '\nendstream\nendobj\n'
  ];

  let currentOffset = 0;
  const offsets = [0];
  let header = '%PDF-1.4\n';
  currentOffset += Buffer.byteLength(header, 'latin1');

  for (let i = 1; i <= 7; i++) {
    offsets.push(currentOffset);
    currentOffset += Buffer.byteLength(pdfParts[i], 'latin1');
  }

  let xref = 'xref\n0 8\n0000000000 65535 f \n';
  for (let i = 1; i <= 7; i++) {
    const offStr = String(offsets[i]).padStart(10, '0');
    xref += offStr + ' 00000 n \n';
  }

  const trailer = 'trailer\n<< /Size 8 /Root 1 0 R >>\nstartxref\n' + currentOffset + '\n%%EOF\n';

  return Buffer.from(pdfParts.join('') + xref + trailer, 'latin1');
}

const docsDir = path.join(__dirname, 'smartsmile', 'assets', 'docs');
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

// 1. Recipe Book
const recipePdf = createSimplePDF(
  'SmartSmile: Braces-Friendly Recipe Book',
  '50 Nutritious Soft-Food Meals Safe for Brackets & Archwires',
  [
    { heading: '1. Smoothies & Power Breakfasts', items: ['- Berry Banana Greek Yogurt Puree (calcium and protein packed)', '- Mango Avocado Spinach Green Smoothie with chia gel', '- Warm Spiced Apple Oatmeal Bowl with cinnamon and honey'] },
    { heading: '2. Comforting Soups & Nourishing Broths', items: ['- Roasted Butternut Squash & Sweet Coconut Ginger Soup', '- Silken Potato Leek Soup with blended mild cheddar', '- Herbal Chicken Bone Broth with steamed shredded greens'] },
    { heading: '3. Delicious Soft Main Dishes', items: ['- Creamy Ricotta and Spinach Stuffed Jumbo Pasta Shells', '- Tender Slow-Braised Chicken with whipped sweet potato', '- Fresh Oven-Baked Lemon Salmon with cauliflower mash'] },
    { heading: '4. Essential Eating Advice with Braces', items: ['- Never bite into whole apples or hard rolls; slice into small pieces', '- Avoid popcorn kernels, sticky taffy, whole nuts, and chewing ice', '- Rinse with water immediately and brush with soft bristles after meals'] }
  ]
);
fs.writeFileSync(path.join(docsDir, 'SmartSmile-Braces-Recipe-Book.pdf'), recipePdf);

// 2. Aligner Tracker
const alignerPdf = createSimplePDF(
  'SmartSmile: Clear Aligner Wear Tracker',
  '22-Hour Daily Compliance Log & Care Protocols',
  [
    { heading: '1. Daily Wear Target & Rules', items: ['- Wear your aligners 20 to 22 hours every single day', '- Remove aligners only when consuming meals or hot beverages', '- Rinse trays before re-inserting and clean thoroughly twice daily'] },
    { heading: '2. Weekly Compliance Log', items: ['[ ] Monday:    Meal Out 1.5 hrs | Total Wear 22.5 hrs -- Status: Optimal', '[ ] Tuesday:   Meal Out 1.8 hrs | Total Wear 22.2 hrs -- Status: Optimal', '[ ] Wednesday: Meal Out 1.6 hrs | Total Wear 22.4 hrs -- Status: Optimal', '[ ] Thursday:  Meal Out 2.0 hrs | Total Wear 22.0 hrs -- Status: Optimal', '[ ] Friday:    Meal Out 1.7 hrs | Total Wear 22.3 hrs -- Status: Optimal', '[ ] Saturday:  Meal Out 2.1 hrs | Total Wear 21.9 hrs -- Status: Compliant', '[ ] Sunday:    Meal Out 1.8 hrs | Total Wear 22.2 hrs -- Status: Optimal'] },
    { heading: '3. Next Stage Switch Checklist', items: ['- Change to next scheduled tray set right before bed', '- Use aligner seating chewies for 5 minutes around entire arch', '- If tray does not seat snugly, contact clinic at +1 800-555-7645'] }
  ]
);
fs.writeFileSync(path.join(docsDir, 'SmartSmile-Aligner-Wear-Checklist.pdf'), alignerPdf);

// 3. Retainer Guide
const retainerPdf = createSimplePDF(
  'SmartSmile: Retainer Lifetime Care Guide',
  'Clinical Protocol to Protect and Preserve Your Smile',
  [
    { heading: '1. Why Retention is Vital for Life', items: ['- Teeth have natural biological memory and can drift without retention', '- Wear full-time (22 hrs/day) for 3 months, then every night indefinitely', '- Replacement retainers should be ordered if lost or showing cracks'] },
    { heading: '2. Cleaning and Sanitizing', items: ['- Gently brush retainers with lukewarm water and mild liquid soap', '- Never use boiling water or microwaves -- high heat destroys tray form', '- Soak in retainer effervescent cleaner tablets twice each week'] },
    { heading: '3. Storage & Safe Handling', items: ['- Always keep retainers in your hard-shell case when not in your mouth', '- Keep out of reach of domestic pets who are attracted to saliva scents', '- Bring retainers to all 6-month routine dental cleaning appointments'] }
  ]
);
fs.writeFileSync(path.join(docsDir, 'SmartSmile-Retainer-Care-Guide.pdf'), retainerPdf);

console.log('PDFs generated successfully in smartsmile/assets/docs!');
