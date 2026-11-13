// Guard for a public repository: fails if anything that looks like a secret
// or a pointer to private infrastructure sneaks into the tree.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'coverage']);
const SKIP_FILES = new Set(['package-lock.json', 'check-public.mjs']);
const BINARY = /\.(png|jpe?g|webp|gif|ico|mp4|webm|splat|woff2?)$/i;

const RULES = [
  [/mongodb(\+srv)?:\/\/[^\s'"]+/i, 'database connection string'],
  [/AKIA[0-9A-Z]{16}/, 'AWS access key id'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, 'private key'],
  [/ENGINE_SHARED_SECRET|X-DT-Signature/i, 'private service contract'],
  [/digitaltwin-dt-(back|landing|manager|user)/i, 'private repository name'],
  [/\.railway\.app|\.amazonaws\.com/i, 'private deployment host'],
  [/\b[0-9a-f]{64}\b/i, '64-char hex (looks like a secret)'],
];

const hits = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (!SKIP_DIRS.has(name)) walk(full);
      continue;
    }
    if (SKIP_FILES.has(name) || BINARY.test(name)) continue;
    const text = readFileSync(full, 'utf8');
    for (const [re, why] of RULES) {
      if (re.test(text)) hits.push(`${relative(root, full).split(sep).join('/')}: ${why}`);
    }
  }
})(root);

if (existsSync(join(root, '.env'))) hits.push('.env file present in the working tree');

if (hits.length) {
  console.error('check:public failed\n' + hits.map((h) => ` - ${h}`).join('\n'));
  process.exit(1);
}
console.log('check:public ok - nothing private found');
