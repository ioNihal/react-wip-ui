import { readFileSync } from 'node:fs';

// Verify the dist was produced
const indexJs = readFileSync('dist/index.js', 'utf8');
const indexMjs = readFileSync('dist/index.mjs', 'utf8');

console.log(`dist/index.js  — ${(Buffer.byteLength(indexJs, 'utf8') / 1024).toFixed(1)} kB`);
console.log(`dist/index.mjs — ${(Buffer.byteLength(indexMjs, 'utf8') / 1024).toFixed(1)} kB`);
console.log('Build artifacts ready.');
