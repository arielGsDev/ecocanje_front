// Genera src/styles/tokens.css a partir de src/design/tokens.json (fuente única del sistema de diseño).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'src/design/tokens.json');
const out = resolve(root, 'src/styles/tokens.css');

const t = JSON.parse(readFileSync(src, 'utf8'));
const vars = [];

const list = (family) => (t[family]?.tokens ?? []);
const colorValue = (v) => (typeof v === 'string' ? v : Object.values(v)[0]);

for (const tok of list('color')) vars.push([tok.name, colorValue(tok.value)]);
for (const fam of ['spacing', 'radius', 'shadow', 'duration', 'easing']) {
  for (const tok of list(fam)) vars.push([tok.name, tok.value]);
}
for (const [name, value] of Object.entries(t.type?.families ?? {})) vars.push([`font-family-${name}`, value]);
for (const group of t.type?.groups ?? []) {
  for (const s of group.styles) {
    vars.push([`${s.name}-size`, s.fontSize]);
    vars.push([`${s.name}-line`, s.lineHeight]);
    vars.push([`${s.name}-weight`, String(s.fontWeight)]);
    if (s.letterSpacing) vars.push([`${s.name}-tracking`, s.letterSpacing]);
  }
}

const body = vars.map(([k, v]) => `  --${k}: ${v};`).join('\n');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, `/* ${t.name}: generado desde src/design/tokens.json. No editar a mano (npm run tokens). */\n:root {\n${body}\n}\n`);
console.log(`tokens.css: ${vars.length} variables`);
