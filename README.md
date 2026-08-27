# Projecto Mukanda — Website Oficial & Plataforma de Transparência

> **Quadro Angolano de Competências Digitais (AngoComp)**  
> **Entidade Proponente:** Academia de Ciências Sociais e Tecnologias (ACITE)  
> **Coordenação Geral:** Eng. Benone Marcos, PhD  
> **Hospedagem & Deployment:** Vercel (CI/CD Automático via GitHub Actions)  

---

## 🌟 Visão Geral

Este repositório contém a plataforma web oficial do **Projecto Mukanda**, uma investigação aplicada de escala nacional destinada a diagnosticar, avaliar psicometricamente e certificar a literacia digital da população angolana em 3 províncias piloto (**Luanda, Huíla e Uíge**).

### 🚀 Funcionalidades Principais:
1. **Apresentação Institucional & Filosofia Mukanda:** História, fundamentação no referencial europeu *DigComp 2.2*, epistemologia dos *Tusona* e os 6 pacotes de trabalho (WP1 a WP6).
2. **Painel de Transparência & Entregáveis:** Acompanhamento público em tempo real de metas, cronograma de 48 meses (2026–2029), princípios FAIR e salvaguardas éticas/confidenciais.
3. **Auto-Diagnóstico AngoComp Online:** Ferramenta interactiva com 15 itens calibrados nas 5 dimensões de competência, cálculo de pontuação instantâneo, feedback pedagógico e classificação por níveis (A1 a C2).
4. **Portal de Recrutamento & Convocatórias:** Formulário digital com validação para inquiridores de campo, formadores multiplicadores e assistentes estatísticos com emissão de código de rastreio (`MUK-CAND-2026-XXXX`).
5. **Repositório de Questionários Científicos (WP1):** Acesso estruturado aos inquéritos populacionais, escolares e empresariais.
6. **Validador de Certificados AngoComp:** Consulta e validação de autenticidade académica de diplomas.
7. **Marca & Media Kit:** Download dos manuais de identidade visual (PDF), logótipos vectoriais (SVG), infográficos e paleta cromática.
8. **Canal de Ética & Integridade:** Envio confidencial/anónimo de comunicações e sugestões à comissão de ética.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **UI & Estilos:** [Tailwind CSS](https://tailwindcss.com/) com Paleta Oficial Mukanda (Terracotta `#C2410C`, Índigo `#0F2C59`, Ouro `#F59E0B`, Esmeralda `#059669`)
- **Tipografia:** Space Grotesk (Display / Títulos) & Inter (Corpo Editorial)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **CI/CD & Deploy:** GitHub Actions + Vercel

---

## 💻 Desenvolvimento Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🚀 CI/CD & Deploy no Vercel

O repositório possui uma GitHub Action configurada em `.github/workflows/deploy.yml` que executa automaticamente o build e o deploy para a Vercel a cada `push` ou `merge` para o ramo `main`.

### Segredos Necessários no GitHub (Repository Secrets):
- `VERCEL_TOKEN`: Token de autenticação da Vercel (obtido em *Account Settings > Tokens*).
- `VERCEL_ORG_ID`: ID da organização / equipa na Vercel.
- `VERCEL_PROJECT_ID`: ID do projecto na Vercel.
