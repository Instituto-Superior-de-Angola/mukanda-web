# Publicação em produção

## Como o site é publicado

A publicação é feita pela **integração Git do Vercel** (aplicação GitHub instalada no
repositório), não por um workflow do GitHub Actions:

| Evento | O que o Vercel faz |
| :--- | :--- |
| `push` num ramo com Pull Request aberto | Publica uma **pré-visualização** e comenta o URL no PR |
| `push` em `main` (fusão de um PR) | Publica em **produção** |

O estado de cada publicação aparece como *check* «Vercel» no commit e no Pull Request, e
como *deployment* no separador Environments do repositório.

Não existe — nem deve existir — um segundo mecanismo de publicação em Actions. Houve um até
28 de Agosto de 2026 (`deploy.yml`, com `amondnet/vercel-action`), que **nunca chegou a
funcionar**: dependia dos segredos `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`, que
nunca foram configurados. Reprovava em todos os *pushes* para `main` enquanto a integração do
Vercel publicava o site com êxito ao lado. Foi removido.

## Como a produção é protegida

O Vercel publica assim que `main` avança, sem consultar o GitHub Actions. A garantia de que
nada chega a produção sem verificação está, por isso, **antes** da fusão e não depois dela:

1. `main` tem protecção de ramo activa: não aceita *push* directo.
2. A fusão de um Pull Request exige que estas verificações estejam verdes:
   - Tipos, lint e build
   - Identidade visual
   - Segurança
   - Revisão de dependências
   - CodeQL (JavaScript/TypeScript)
3. `main` só avança por fusão de Pull Request. Logo, o que chega a produção passou pelas
   verificações.

Se uma verificação for removida do `ci.yml`, tem de ser removida também da lista de
verificações obrigatórias — e vice-versa. Estão acopladas de propósito.

## Se for preciso voltar a publicar por Actions

Só faz sentido se a integração Git do Vercel for desligada, para não haver duas publicações
concorrentes. Nesse caso seriam necessários três segredos do repositório (`VERCEL_TOKEN`,
`VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) e a desactivação da publicação automática em
`vercel.json` (`git.deploymentEnabled`).
