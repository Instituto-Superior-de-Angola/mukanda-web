#!/usr/bin/env node
/**
 * Verificador de segredos e dados pessoais no código versionado.
 *
 * Complementa (não substitui) a análise do CodeQL e o `npm audit`.
 * Executado localmente (`npm run verificar:segredos`) e no CI.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const RAIZ = process.cwd();
const IGNORAR = new Set(['node_modules', '.next', '.git', 'out', 'dist', 'scripts']);
const EXTENSOES = ['.ts', '.tsx', '.js', '.mjs', '.json', '.yml', '.yaml', '.env', '.html'];

const REGRAS = [
  { nome: 'token do GitHub', re: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/ },
  { nome: 'chave da AWS', re: /\bAKIA[0-9A-Z]{16}\b/ },
  { nome: 'chave privada PEM', re: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { nome: 'token do Vercel', re: /\bvercel_[A-Za-z0-9]{24,}\b/ },
  { nome: 'chave genérica de API', re: /\b(?:api[_-]?key|secret|password|passwd|token)\s*[:=]\s*['"][A-Za-z0-9_\-]{16,}['"]/i },
  { nome: 'segredo exposto ao cliente', re: /NEXT_PUBLIC_[A-Z_]*(?:SECRET|TOKEN|KEY|PASSWORD)/ },
  { nome: 'número de BI angolano em código', re: /\b\d{9}[A-Z]{2}\d{3}\b/ },
];

/** Excepções justificadas: identificadores de demonstração, não segredos. */
const EXCEPCOES = [
  /MUK-[A-Z]{3,4}-\d{4}-[A-Z0-9]{4}/,
  // Gama reservada a exemplos e demonstração: BI que começa por 000 é inválido por
  // construção e nunca corresponde a um documento real.
  /\b000\d{6}[A-Z]{2}\d{3}\b/,
];

function ficheiros(dir = '.') {
  let saida = [];
  for (const entrada of readdirSync(join(RAIZ, dir))) {
    if (IGNORAR.has(entrada) || entrada.startsWith('.git')) continue;
    const relCaminho = join(dir, entrada);
    const abs = join(RAIZ, relCaminho);
    if (statSync(abs).isDirectory()) saida = saida.concat(ficheiros(relCaminho));
    else if (EXTENSOES.some((e) => entrada.endsWith(e))) saida.push(abs);
  }
  return saida;
}

const achados = [];
for (const caminho of ficheiros()) {
  const rel = relative(RAIZ, caminho);
  readFileSync(caminho, 'utf8').split('\n').forEach((linha, i) => {
    if (EXCEPCOES.some((e) => e.test(linha))) return;
    for (const { nome, re } of REGRAS) {
      if (re.test(linha)) achados.push({ rel, n: i + 1, nome });
    }
  });
}

if (achados.length === 0) {
  console.log('✓ Segredos: nada detectado.');
  process.exit(0);
}

console.error(`\n✗ Segredos: ${achados.length} achado(s)\n`);
for (const a of achados) console.error(`  ${a.rel}:${a.n}  ${a.nome}`);
console.error('\nRemover do código E rodar a credencial exposta. Ver .claude/skills/auditoria-seguranca/SKILL.md\n');
process.exit(1);
