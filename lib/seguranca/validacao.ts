/**
 * Utilitários de validação e protecção de dados pessoais.
 *
 * O Projecto Mukanda recolhe dados de cidadãos (incluindo número de BI) ao abrigo de um
 * protocolo de ética e do plano de gestão de dados FAIR. Nenhuma entrada é usada sem passar
 * por aqui. Ver .claude/skills/auditoria-seguranca/SKILL.md.
 */

/** Limite do corpo de um pedido, em bytes. Acima disto o pedido é rejeitado sem ser lido. */
export const LIMITE_CORPO_BYTES = 16 * 1024;

export interface ResultadoValidacao<T> {
  ok: boolean;
  dados?: T;
  erro?: string;
}

/** Normaliza texto: remove caracteres de controlo, colapsa espaços e apara. */
export function normalizarTexto(valor: unknown, maximo: number): string | null {
  if (typeof valor !== 'string') return null;
  const limpo = valor
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (limpo.length === 0 || limpo.length > maximo) return null;
  return limpo;
}

/** Valida um endereço de correio electrónico de forma conservadora. */
export function validarEmail(valor: unknown): string | null {
  const texto = normalizarTexto(valor, 254);
  if (!texto) return null;
  return /^[^\s@,;:<>()[\]\\]+@[^\s@.]+(\.[^\s@.]+)+$/.test(texto) ? texto.toLowerCase() : null;
}

/** Valida um número de telefone angolano ou internacional, em formato livre controlado. */
export function validarTelefone(valor: unknown): string | null {
  const texto = normalizarTexto(valor, 24);
  if (!texto) return null;
  return /^\+?[\d ()-]{9,24}$/.test(texto) ? texto : null;
}

/**
 * Valida o **formato** do número de bilhete de identidade angolano
 * (9 dígitos + 2 letras da província + 3 dígitos).
 * A autenticidade do documento compete às autoridades competentes.
 */
export function validarBI(valor: unknown): string | null {
  const texto = normalizarTexto(valor, 20);
  if (!texto) return null;
  const compacto = texto.replace(/\s/g, '').toUpperCase();
  return /^\d{9}[A-Z]{2}\d{3}$/.test(compacto) ? compacto : null;
}

/**
 * Mascara um número de BI para apresentação pública.
 * `000000001LA000` passa a `•••••••••LA000`.
 *
 * Um serviço público de verificação nunca deve devolver o documento de identificação
 * completo do titular: bastaria conhecer o código do certificado para o recolher.
 */
export function mascararBI(bi: string): string {
  const compacto = bi.replace(/\s/g, '').toUpperCase();
  if (!/^\d{9}[A-Z]{2}\d{3}$/.test(compacto)) return '•'.repeat(14);
  return '•'.repeat(9) + compacto.slice(9);
}

/** Perfis para os quais o identificador ORCID é pedido no formulário de candidatura. */
export const PERFIS_COM_ORCID = ['formador', 'investigador_jr'] as const;

/**
 * Valida um identificador ORCID.
 *
 * Formato: 16 dígitos em quatro grupos de quatro, sendo o último carácter um dígito de
 * controlo que pode ser `X`. Aceita a forma nua (`0000-0002-1825-0097`) e o URL
 * (`https://orcid.org/0000-0002-1825-0097`), devolvendo sempre a forma nua normalizada.
 *
 * Verifica o dígito de controlo pelo algoritmo ISO 7064 MOD 11-2, especificado pelo ORCID:
 * uma sequência de 16 dígitos arbitrária é recusada, não apenas uma com formato errado.
 */
export function validarORCID(valor: unknown): string | null {
  const texto = normalizarTexto(valor, 60);
  if (!texto) return null;

  const compacto = texto
    .replace(/^https?:\/\/(?:www\.)?orcid\.org\//i, '')
    .replace(/[\s-]/g, '')
    .toUpperCase();

  if (!/^\d{15}[\dX]$/.test(compacto)) return null;

  // ISO 7064 MOD 11-2 sobre os 15 primeiros dígitos.
  let total = 0;
  for (let i = 0; i < 15; i += 1) {
    total = (total + Number(compacto[i])) * 2;
  }
  const resto = total % 11;
  const esperado = (12 - resto) % 11;
  const digitoControlo = esperado === 10 ? 'X' : String(esperado);

  if (compacto[15] !== digitoControlo) return null;

  return `${compacto.slice(0, 4)}-${compacto.slice(4, 8)}-${compacto.slice(8, 12)}-${compacto.slice(12)}`;
}

/** Garante que um valor pertence a um conjunto fechado. */
export function validarEnumeracao<T extends string>(
  valor: unknown,
  permitidos: readonly T[]
): T | null {
  return typeof valor === 'string' && (permitidos as readonly string[]).includes(valor)
    ? (valor as T)
    : null;
}

/**
 * Lê o corpo de um pedido com limite de tamanho, antes de o interpretar como JSON.
 * Evita que um corpo arbitrariamente grande seja carregado em memória.
 */
export async function lerCorpoJson(
  request: Request
): Promise<ResultadoValidacao<Record<string, unknown>>> {
  const declarado = request.headers.get('content-length');
  if (declarado && Number(declarado) > LIMITE_CORPO_BYTES) {
    return { ok: false, erro: 'Pedido demasiado extenso.' };
  }

  const tipo = request.headers.get('content-type') ?? '';
  if (!tipo.includes('application/json')) {
    return { ok: false, erro: 'Formato de pedido não suportado.' };
  }

  const texto = await request.text();
  if (texto.length > LIMITE_CORPO_BYTES) {
    return { ok: false, erro: 'Pedido demasiado extenso.' };
  }

  try {
    const analisado: unknown = JSON.parse(texto);
    if (typeof analisado !== 'object' || analisado === null || Array.isArray(analisado)) {
      return { ok: false, erro: 'Formato de pedido inválido.' };
    }
    return { ok: true, dados: analisado as Record<string, unknown> };
  } catch {
    return { ok: false, erro: 'Formato de pedido inválido.' };
  }
}

/**
 * Limitação de frequência por origem, em memória.
 *
 * Âmbito: é eficaz por instância. Numa implantação com várias instâncias (Vercel
 * serverless) constitui uma primeira barreira, não a defesa completa — a mitigação
 * definitiva far-se-á na borda quando o registo real for introduzido no WP4.
 */
const registoFrequencia = new Map<string, { contagem: number; reinicioEm: number }>();

export function limitarFrequencia(
  chave: string,
  maximo = 5,
  janelaMs = 60_000
): { permitido: boolean; retentarEmSegundos: number } {
  const agora = Date.now();
  const entrada = registoFrequencia.get(chave);

  if (!entrada || agora > entrada.reinicioEm) {
    registoFrequencia.set(chave, { contagem: 1, reinicioEm: agora + janelaMs });
    return { permitido: true, retentarEmSegundos: 0 };
  }

  if (entrada.contagem >= maximo) {
    return {
      permitido: false,
      retentarEmSegundos: Math.max(1, Math.ceil((entrada.reinicioEm - agora) / 1000)),
    };
  }

  entrada.contagem += 1;
  // Poda oportunista, para o mapa não crescer indefinidamente.
  if (registoFrequencia.size > 5_000) {
    for (const [k, v] of registoFrequencia) if (agora > v.reinicioEm) registoFrequencia.delete(k);
  }
  return { permitido: true, retentarEmSegundos: 0 };
}

/** Identifica a origem do pedido, para efeitos de limitação de frequência. */
export function origemDoPedido(request: Request): string {
  const encaminhado = request.headers.get('x-forwarded-for');
  return (
    encaminhado?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'desconhecida'
  );
}

/** Cabeçalhos aplicados a respostas que envolvam dados pessoais ou verificações. */
export const CABECALHOS_SEM_CACHE = {
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff',
} as const;
