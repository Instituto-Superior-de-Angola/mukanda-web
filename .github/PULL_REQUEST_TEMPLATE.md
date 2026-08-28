## O que muda

<!-- Descrição breve e factual. Uma alteração coerente por PR. -->

## Porquê

<!-- Problema resolvido ou necessidade que origina a alteração. -->

---

## Verificações

Resultado de `npm run verificar` executado localmente:

- [ ] `tipos` — TypeScript sem erros
- [ ] `lint` — ESLint sem erros
- [ ] `verificar:marca` — identidade visual sem violações
- [ ] `verificar:seguranca` — sem segredos e sem vulnerabilidades de nível alto
- [ ] `build` — build de produção conclui

## Identidade visual

- [ ] Sem hexadecimais literais: apenas tokens de design
- [ ] Sem gradientes, desfoques, glassmorphism ou sombras coloridas
- [ ] Tipografia através de `font-display` / `font-body` / `font-mono`
- [ ] Ortografia pré-Acordo de 1990
- [ ] Entidade proponente correcta (ACITE — Academia de Ciências Sociais e Tecnologias)
- [ ] Activos de marca alterados foram propagados a partir de `identidade_visual/assets/`

<!-- Se houver desvio deliberado ao manual, indicar aqui e inscrevê-lo no registo de
     desvios da skill `identidade-visual`. -->

## Segurança

- [ ] Entrada validada por tipo, formato e comprimento (`lib/seguranca/validacao.ts`)
- [ ] Nenhum dado pessoal em logs, respostas de erro ou commits
- [ ] Cabeçalhos de segurança não enfraquecidos
- [ ] Dependências novas justificadas abaixo

### Achados

| Severidade | Ficheiro:linha | Cenário | Estado |
| :--- | :--- | :--- | :--- |
|  |  |  |  |

<!-- «Nenhum achado» é uma conclusão válida — escrevê-la explicitamente. -->

## Internacionalização

- [ ] Não aplicável (sem texto de interface novo)
- [ ] Chaves novas em `lib/i18n/types.ts` e nos quatro dicionários (pt, umb, kmb, kkg)
- [ ] Traduções que carecem de validação por falante nativo assinaladas abaixo

## Notas para quem revê

<!-- O que merece atenção particular. -->
