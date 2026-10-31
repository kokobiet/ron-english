// Ghép app.html + vocab.js + readings.js thành index.html (chạy: node build.js)
const fs=require('fs');
let app=fs.readFileSync('app.html','utf8');
const v=fs.readFileSync('vocab.js','utf8'), r=fs.readFileSync('readings.js','utf8');
app=app.replace('/*__VOCAB__*/',()=>v).replace('/*__READINGS__*/',()=>r).replace('/*__LESSONS__*/',()=>fs.readFileSync('lessons.js','utf8'));
fs.writeFileSync('artifact.html',app);
const full=`<!doctype html>\n<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n</head><body>\n${app}\n</body></html>\n`;
fs.writeFileSync('../index.html',full);
console.log('ok',full.length);
