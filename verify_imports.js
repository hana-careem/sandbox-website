const fs=require('fs'),path=require('path'),cp=require('child_process');
const files=cp.execSync("find app components -name '*.jsx' -o -name '*.js'").toString().trim().split('\n');
const exts=['','.jsx','.js','.ts','.tsx','/index.jsx','/index.js'];
let problems=0;
for(const f of files){
  const src=fs.readFileSync(f,'utf8');
  const re=/from\s+['"](\.[^'"]+)['"]/g; let m;
  while((m=re.exec(src))){
    const rel=m[1]; const base=path.resolve(path.dirname(f),rel);
    const ok=exts.some(e=>fs.existsSync(base+e));
    if(!ok){problems++;console.log('MISSING import "'+rel+'" in '+f);}
  }
}
console.log(problems===0?'OK: all relative imports resolve':problems+' unresolved import(s)');
