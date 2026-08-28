# mukanda-web — website e plataforma de transparência

Componente **website** do Projecto Mukanda. Repositório Git próprio, alojado dentro da pasta
do repositório de documentação mas independente dele.

Instruções transversais do projecto: [`../CLAUDE.md`](../CLAUDE.md).
Regras invioláveis (proponente, ortografia, identidade visual, segurança, fluxo Git) valem
aqui **integralmente**.

---

## Pilha

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Vercel.
Sem base de dados: as rotas de API operam sobre registos em memória até ao WP4.

## Mapa

```
app/                    Rotas (App Router) e rotas de API
components/             Componentes de interface
lib/i18n/               Traduções: pt · umb · kmb · kkg
lib/seguranca/          Validação de entrada, mascaramento de dados, registo de certificados
scripts/                Verificadores executados no CI
public/assets/          Cópias dos activos de marca (fonte: ../identidade_visual/assets/)
```

---

## Antes de qualquer alteração

```bash
git switch -c <tipo>/<descricao>     # nunca trabalhar sobre main
```

## Antes de qualquer commit

```bash
npm run verificar
```

Corre, por esta ordem: verificação de tipos → lint → identidade visual → segredos →
`npm audit` → build. Tudo verde, sem excepções.

| Comando | Verifica |
| :--- | :--- |
| `npm run tipos` | TypeScript sem erros |
| `npm run lint` | ESLint (regras Next + TypeScript) |
| `npm run verificar:marca` | Paleta, tipografia, efeitos proibidos, ortografia pré-AO90 |
| `npm run verificar:segredos` | Segredos e dados pessoais em código |
| `npm run verificar:seguranca` | Segredos + `npm audit --audit-level=high` |
| `npm run verificar` | Tudo o acima + build de produção |

---

## Regras do componente

### Design
- **Tokens, nunca hexadecimais.** `mukanda-*`, `ink*`, `paper`, `surface`, `subtle`, `line*`.
- Sem gradientes decorativos, desfoques de fundo, glassmorphism ou sombras coloridas.
- Tipografia: `font-display` (títulos), `font-body` (texto), `font-mono` (dados).
  Métricas e tabelas levam `tabular`.
- Componentes utilitários em `globals.css`: `.card`, `.btn-*`, `.field`, `.kicker`, `.prose-mukanda`.
- Carregar a skill [`identidade-visual`](../.claude/skills/identidade-visual/SKILL.md) antes de decidir.

### Internacionalização
O site serve **quatro** línguas. Texto de interface novo implica, no mesmo commit:
1. nova chave em `lib/i18n/types.ts`;
2. tradução nos quatro dicionários `lib/i18n/dictionaries/{pt,umb,kmb,kkg}.ts`.

Para as línguas nacionais, reutilizar vocabulário já atestado nos próprios dicionários em vez
de inventar termos; assinalar no PR as traduções que carecem de validação por falante nativo.

### Segurança
- Toda a entrada passa por `lib/seguranca/validacao.ts`. Nunca usar `body.campo` directamente.
- Dados pessoais nunca são registados em log nem devolvidos em claro; o número de BI é sempre
  mascarado antes de sair (`mascararBI`).
- A validade de um certificado **nunca** é inferida do formato do código: vem de
  `lib/seguranca/registo-certificados.ts`.
- Cabeçalhos de segurança vivem em `next.config.mjs` — não os enfraquecer para «destravar» algo.
- Carregar a skill [`auditoria-seguranca`](../.claude/skills/auditoria-seguranca/SKILL.md) antes de fechar o PR.

### Activos de marca
`public/assets/` são **cópias**. A fonte é `../identidade_visual/assets/`. Alterar a fonte
primeiro, propagar depois, e referir a propagação no PR.

---

## Entrega

Ramo → `npm run verificar` → auto-revisão do diff → commit → push → `gh pr create` → CI verde
→ revisão humana → merge → publicação automática pela integração Git do Vercel.

Procedimento detalhado: skill [`entrega-git`](../.claude/skills/entrega-git/SKILL.md).
Mecânica da publicação e da protecção de produção: [`.github/PUBLICACAO.md`](.github/PUBLICACAO.md).

**Nunca commitar nem fazer push directamente para `main`** — além de regra, `main` tem
protecção de ramo que o recusa.

A publicação **não** passa pelo GitHub Actions: quem publica é a integração Git do Vercel,
assim que `main` avança. Por isso o portão está na fusão do Pull Request, através das
verificações obrigatórias, e não num workflow posterior.

## Dívida conhecida

| Item | Estado |
| :--- | :--- |
| Registo de certificados em memória, conjunto fechado de demonstração | até ao WP4 (2028–2029) |
| Candidaturas acusadas mas não persistidas | persistência entra com o WP1 |
| Limitação de frequência em memória (por instância) | mitigação na borda quando houver persistência |
| Desvios D-01 (paleta de ecrã) e D-02 (tipografia display) | pendentes de homologação — ver skill `identidade-visual` §7 |
