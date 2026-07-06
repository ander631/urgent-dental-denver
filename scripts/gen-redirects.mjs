/**
 * Emit public/_redirects from the typed redirect map (src/data/redirects.ts).
 * Runs in `prebuild` so the Netlify redirect file always matches the data and
 * is never hand-edited. Node 24 imports the .ts directly (type stripping).
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { REDIRECTS, toNetlifyRedirects } from '../src/data/redirects.ts';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '../public/_redirects');

await writeFile(out, toNetlifyRedirects(), 'utf8');
console.log(`[gen-redirects] wrote ${REDIRECTS.length} rules → public/_redirects`);
