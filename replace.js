const fs = require('fs');
const files = ['js/data.js', 'js/usuario.js', 'js/app.js', 'js/admin.js'];
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/'AP-'/g, "'CS-'");
  c = c.replace(/"AP-"/g, '"CS-"');
  c = c.replace(/AP-1234/g, 'CS-1234');
  c = c.replace(/AP-OLD-/g, 'CS-OLD-');
  c = c.replace(/\^AP-/g, '^CS-');
  fs.writeFileSync(f, c);
});
console.log('Replaced successfully.');
