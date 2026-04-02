import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';

copyFileSync('src/styles/index.css', 'dist/index.css');

for (const file of ['dist/index.js', 'dist/index.mjs']) {
  const contents = readFileSync(file, 'utf8');
  if (!contents.startsWith('"use client";') && !contents.startsWith("'use client';")) {
    writeFileSync(file, `"use client";\n${contents}`);
  }
}
