const { transform } = require('./node_modules/sucrase');
const fs = require('fs');
const cp = require('child_process');
const files = cp.execSync("find app components -name '*.jsx' -o -name '*.js'").toString().trim().split('\n');
let bad = 0;
for (const f of files) {
  try {
    transform(fs.readFileSync(f,'utf8'), { transforms:['jsx','imports'], jsxRuntime:'automatic' });
  } catch(e) {
    bad++;
    console.log('BAD '+f+' :: '+e.message.split('\n')[0]);
  }
}
console.log(bad===0 ? 'OK: all '+files.length+' files parsed cleanly' : bad+' file(s) with syntax errors');
