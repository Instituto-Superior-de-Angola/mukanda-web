#!/usr/bin/env node
/**
 * Verificador da identidade visual do Projecto Mukanda.
 *
 * Regras derivadas de identidade_visual/MANUAL_IDENTIDADE_VISUAL.md e da skill
 * `identidade-visual`. Executado localmente (`npm run verificar:marca`) e no CI.
 *
 * Sai com código 1 se encontrar violações — o que reprova o Pull Request.
 */
import { readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { readdirSync, statSync } from 'node:fs';

const RAIZ = process.cwd();
const DIRECTORIOS = ['app', 'components', 'lib'];
const EXTENSOES = ['.ts', '.tsx'];

/** Paleta do manual + variantes de ecrã homologadas (desvio D-01) + neutros técnicos. */
const CORES_PERMITIDAS = new Set([
  // Manual (impressão)
  '#C2410C', '#0F2C59', '#F59E0B', '#059669', '#F8F6F0', '#1E293B', '#071326',
  // Dimensões AngoComp (infográfico)
  '#FF6B35', '#38BDF8', '#10B981', '#A855F7',
  // Variantes de ecrã
  '#A9543A', '#C0704F', '#8A4029', '#1C3557', '#2B4A72', '#132741',
  '#A07B2C', '#C4A059', '#7E5F1E', '#2F6F55', '#3F8A6B',
  '#FBFAF7', '#FFFFFF', '#F4F2ED', '#E3E0D8', '#CFCABE',
  '#16212E', '#44505E', '#6C7784',
]);

const PADROES_PROIBIDOS = [
  { re: /bg-gradient-to-/, msg: 'gradiente decorativo (fora do registo institucional)' },
  { re: /\bblur-(?:2xl|3xl)\b/, msg: 'desfoque decorativo de fundo' },
  { re: /\bglass-(?:panel|dark|card)/, msg: 'glassmorphism (retirado da identidade)' },
  { re: /\bglow-(?:gold|terracotta)\b/, msg: 'brilho colorido (retirado da identidade)' },
  { re: /\banimate-float\b/, msg: 'animação flutuante (retirada da identidade)' },
  { re: /\bdrop-shadow\b/, msg: 'sombra projectada não homologada' },
  { re: /\b(?:text|bg|border)-slate-\d+\b/, msg: 'utilitário Tailwind cru — usar tokens (ink, paper, subtle, line)' },
  { re: /Instituto Superior de Angola/i, msg: 'designação retirada: a proponente é a ACITE' },
];

function ficheiros(dir) {
  const base = join(RAIZ, dir);
  let saida = [];
  let entradas;
  try {
    entradas = readdirSync(base);
  } catch {
    return saida;
  }
  for (const entrada of entradas) {
    const caminho = join(base, entrada);
    if (statSync(caminho).isDirectory()) {
      saida = saida.concat(ficheiros(join(dir, entrada)));
    } else if (EXTENSOES.some((e) => entrada.endsWith(e))) {
      saida.push(caminho);
    }
  }
  return saida;
}

const violacoes = [];

for (const dir of DIRECTORIOS) {
  for (const caminho of ficheiros(dir)) {
    const rel = relative(RAIZ, caminho);
    const linhas = readFileSync(caminho, 'utf8').split('\n');

    linhas.forEach((linha, i) => {
      const n = i + 1;

      // 1. Cores fora da paleta
      for (const encontrado of linha.matchAll(/#[0-9A-Fa-f]{6}\b/g)) {
        const hex = encontrado[0].toUpperCase();
        if (!CORES_PERMITIDAS.has(hex)) {
          violacoes.push({ rel, n, msg: `cor ${hex} fora da paleta institucional`, linha });
        }
      }

      // 2. Padrões proibidos
      for (const { re, msg } of PADROES_PROIBIDOS) {
        if (re.test(linha)) violacoes.push({ rel, n, msg, linha });
      }

      // 3. Tipografia declarada fora da folha de estilo
      if (/font-family\s*:/.test(linha)) {
        violacoes.push({ rel, n, msg: 'font-family fora de globals.css — usar font-display/body/mono', linha });
      }
    });
  }
}

// 4. Ortografia pré-Acordo de 1990 em texto de interface
const ORTOGRAFIA = [
  [/\bprojeto\b/gi, 'projecto'],
  [/\batual(?:mente)?\b/gi, 'actual / actualmente'],
  [/\bação\b/gi, 'acção'],
  [/\bdireção\b/gi, 'direcção'],
  [/\bconceção\b/gi, 'concepção'],
];
for (const caminho of ficheiros('lib/i18n/dictionaries')) {
  const rel = relative(RAIZ, caminho);
  if (!rel.includes('pt.ts')) continue; // regra ortográfica só se aplica ao português
  readFileSync(caminho, 'utf8').split('\n').forEach((linha, i) => {
    for (const [re, correcto] of ORTOGRAFIA) {
      if (re.test(linha)) {
        violacoes.push({ rel, n: i + 1, msg: `ortografia pós-AO90 — usar «${correcto}»`, linha });
      }
    }
  });
}

if (violacoes.length === 0) {
  console.log('✓ Identidade visual: sem violações.');
  process.exit(0);
}

console.error(`\n✗ Identidade visual: ${violacoes.length} violação(ões)\n`);
for (const v of violacoes) {
  console.error(`  ${v.rel}:${v.n}  ${v.msg}`);
  console.error(`      ${v.linha.trim().slice(0, 110)}`);
}
console.error('\nRegras: identidade_visual/MANUAL_IDENTIDADE_VISUAL.md');
console.error('Skill:  .claude/skills/identidade-visual/SKILL.md\n');
process.exit(1);
