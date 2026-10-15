const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('bi-linkedin') && content.includes('bi-youtube')) {
    const newContent = content
      .replace(/\s*<a href="#" class="text-white fs-5" aria-label="LinkedIn"><i class="bi bi-linkedin"><\/i><\/a>/g, '')
      .replace(/\s*<a href="#" class="text-white fs-5" aria-label="YouTube"><i class="bi bi-youtube"><\/i><\/a>/g, '');
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated footer in:', file);
      count++;
    }
  }
}
console.log('Total files updated:', count);
