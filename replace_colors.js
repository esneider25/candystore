const fs = require('fs');
const files = ['js/app.js', 'js/components.js', 'js/admin.js'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Fix old teal/green color to electric cyan
    content = content.replace(/rgba\(\s*0\s*,\s*229\s*,\s*195/g, 'rgba(0, 210, 255');
    
    // Fix old orange color to candy pink
    content = content.replace(/rgba\(\s*255\s*,\s*183\s*,\s*77/g, 'rgba(255, 0, 127');
    content = content.replace(/#ffb74d/gi, '#ff007f');

    fs.writeFileSync(f, content, 'utf8');
    console.log(`Fixed colors in ${f}`);
  }
});
