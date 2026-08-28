/**
 * Configuração do Next.js — Projecto Mukanda.
 * Cabeçalhos de segurança conforme .claude/skills/auditoria-seguranca/SKILL.md §4.
 */

/**
 * Política de segurança de conteúdo.
 *
 * `unsafe-inline` em `style-src` é exigido pelo Next para os estilos críticos injectados na
 * renderização; `unsafe-inline` em `script-src` cobre os scripts de arranque do Next.
 * `unsafe-eval` está deliberadamente ausente. As fontes externas limitam-se ao Google Fonts,
 * usado por `app/globals.css`.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "manifest-src 'self'",
  'upgrade-insecure-requests',
].join('; ');

const cabecalhosSeguranca = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'off' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Não anunciar a tecnologia e a versão do servidor.
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: cabecalhosSeguranca,
      },
      {
        // As respostas das rotas de API nunca são guardadas em cache partilhada.
        source: '/api/:path*',
        headers: [{ key: 'Cache-Control', value: 'no-store, max-age=0' }],
      },
    ];
  },
};

export default nextConfig;
