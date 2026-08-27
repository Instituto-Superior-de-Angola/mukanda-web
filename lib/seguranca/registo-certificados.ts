/**
 * Registo de certificados AngoComp.
 *
 * ESTADO ACTUAL — DEMONSTRAÇÃO. O registo real de certificados só passa a existir com a
 * certificação dos 2.500 cidadãos no WP4 (2028–2029). Até lá, este módulo serve um conjunto
 * **fechado** de registos de demonstração.
 *
 * Regra de segurança que o governa: a validade de um certificado nunca é inferida do
 * formato ou do prefixo do código. Se o fosse, qualquer pessoa poderia inventar um código
 * `MUK-…` e obter uma confirmação de autenticidade — o serviço tornar-se-ia um oráculo de
 * falsificação. A validade provém sempre de uma entrada explícita neste registo.
 *
 * Os titulares abaixo são fictícios e os números de BI são inválidos por construção
 * (começam por `000`), para que nunca coincidam com documentos reais.
 */

export const FORMATO_CODIGO = /^MUK-\d{4}-\d{4,6}$/;

export interface Certificado {
  code: string;
  recipient: string;
  /** Guardado em formato completo; é sempre mascarado antes de sair para o cliente. */
  biNumber: string;
  level: string;
  hours: string;
  province: string;
  cohort: string;
  issueDate: string;
  status: string;
  issuer: string;
  signatories: string;
}

const EMISSOR = 'ACITE — Academia de Ciências Sociais e Tecnologias';

const REGISTO: Readonly<Record<string, Certificado>> = Object.freeze({
  'MUK-2026-002500': {
    code: 'MUK-2026-002500',
    recipient: 'Titular de Demonstração I',
    biNumber: '000000001LA000',
    level: 'Nível Intermédio B2 (Quadro AngoComp)',
    hours: '60 Horas',
    province: 'Luanda',
    cohort: 'Turma Piloto 01 / 2026',
    issueDate: '15 de Agosto de 2026',
    status: 'VÁLIDO E HOMOLOGADO',
    issuer: EMISSOR,
    signatories: 'Eng. Benone Marcos, PhD (Investigador Principal) e Conselho Científico da ACITE',
  },
  'MUK-2026-000120': {
    code: 'MUK-2026-000120',
    recipient: 'Titular de Demonstração II',
    biNumber: '000000002HU000',
    level: 'Formador(a) Multiplicador(a) AngoComp (Nível C1)',
    hours: '120 Horas',
    province: 'Huíla (Lubango)',
    cohort: 'Capacitação Docente WP3',
    issueDate: '20 de Setembro de 2026',
    status: 'VÁLIDO E HOMOLOGADO',
    issuer: EMISSOR,
    signatories: 'Eng. Benone Marcos, PhD (Investigador Principal) e Conselho Científico da ACITE',
  },
});

/** Códigos de demonstração publicáveis, para a interface poder orientar o utilizador. */
export const CODIGOS_DEMONSTRACAO = Object.keys(REGISTO);

/**
 * Procura um certificado. Devolve `null` para tudo o que não conste do registo —
 * incluindo códigos com formato válido.
 */
export function procurarCertificado(codigo: string): Certificado | null {
  const normalizado = codigo.trim().toUpperCase();
  if (!FORMATO_CODIGO.test(normalizado)) return null;
  return Object.prototype.hasOwnProperty.call(REGISTO, normalizado)
    ? REGISTO[normalizado]
    : null;
}
