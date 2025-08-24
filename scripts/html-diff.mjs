#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Simple HTML diff utility: build before & after into temp dirs and compare structural differences.
 * Usage: node scripts/html-diff.mjs <oldDir> <newDir>
 * Only reports added/removed/changed HTML files and line-level diffs ignoring pure whitespace changes.
 */
import { readdirSync, readFileSync, statSync } from 'fs';
import { relative, resolve, join } from 'path';

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

const [oldDir, newDir] = process.argv.slice(2).map(p => resolve(p || ''));
if (!oldDir || !newDir) {
  console.error('Usage: node scripts/html-diff.mjs <oldDir> <newDir>');
  process.exit(1);
}

function normalize(html) {
  return html
    .replace(/\r/g, '')
    .split('\n')
    .map(l => l.trimEnd())
    .join('\n');
}

const oldFiles = walk(oldDir);
const newFiles = walk(newDir);
const relOld = new Set(oldFiles.map(f => relative(oldDir, f)));
const relNew = new Set(newFiles.map(f => relative(newDir, f)));

const added = [...relNew].filter(r => !relOld.has(r));
const removed = [...relOld].filter(r => !relNew.has(r));
const common = [...relNew].filter(r => relOld.has(r));

const changes = [];
for (const r of common) {
  const a = normalize(readFileSync(join(oldDir, r), 'utf8'));
  const b = normalize(readFileSync(join(newDir, r), 'utf8'));
  if (a !== b) {
    // quick line difference summary
    const aLines = a.split('\n');
    const bLines = b.split('\n');
    let diffLines = 0;
    const len = Math.max(aLines.length, bLines.length);
    for (let i = 0; i < len; i++) {
      if (aLines[i] !== bLines[i]) diffLines++;
      if (diffLines > 10) break; // cap
    }
    changes.push({ file: r, diffLines });
  }
}

const summary = {
  added,
  removed,
  changed: changes,
};

if (!added.length && !removed.length && !changes.length) {
  console.log('HTML structural diff: no changes.');
} else {
  console.log('HTML structural diff summary');
  if (added.length) console.log(' Added:', added);
  if (removed.length) console.log(' Removed:', removed);
  if (changes.length) {
    for (const c of changes) console.log(` Changed: ${c.file} (~${c.diffLines} differing lines)`);
  }
  console.log('\nJSON:\n' + JSON.stringify(summary, null, 2));
}
