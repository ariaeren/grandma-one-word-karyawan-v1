import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Exactly one word, with a single trailing newline, on every run.
const ENTRY = 'Robotu';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), `${ENTRY}\n`, {
  encoding: 'utf8',
  flag: 'w',
});
