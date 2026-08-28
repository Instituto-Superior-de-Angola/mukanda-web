'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Globe, MapPin } from 'lucide-react';
import MukandaMark from '@/components/MukandaMark';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { dict } = useTranslation();

  const navegacao = [
    { label: dict.nav.about, href: '/sobre' },
    { label: dict.nav.transparency, href: '/transparencia' },
    { label: dict.nav.questionnaires, href: '/questionarios' },
    { label: dict.nav.diagnostic, href: '/diagnostico' },
    { label: dict.nav.recruitment, href: '/recrutamento' },
    { label: dict.nav.brand, href: '/marca' },
  ];

  const provincias = [
    { nome: dict.common.luanda, tipo: 'Metropolitano', dados: '1.000 cidadãos · 50 formadores' },
    { nome: dict.common.huila, tipo: 'Urbano interior', dados: '800 cidadãos · 35 formadores' },
    { nome: dict.common.uige, tipo: 'Predominantemente rural', dados: '700 cidadãos · 35 formadores' },
  ];

  const parceiros = [
    'ACITE (entidade proponente)',
    'FUNDECIT / MESCTI',
    'União Europeia — Programa CAP4',
    'UNESCO',
    'INE Angola',
    'Sector privado de telecomunicações',
  ];

  return (
    <footer className="border-t border-line bg-subtle text-ink-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Identificação */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <MukandaMark className="w-11 h-11" />
              <div className="leading-tight">
                <p className="font-display font-semibold text-lg text-ink">{dict.common.projectName}</p>
                <p className="text-2xs text-ink-muted">{dict.common.projectSubtitle}</p>
              </div>
            </div>
            <p className="text-[0.8125rem] leading-relaxed text-ink-soft max-w-sm">
              {dict.footer.aboutText}
            </p>
            <dl className="text-2xs text-ink-muted space-y-1 font-mono pt-1">
              <div className="flex gap-2">
                <dt className="text-ink-soft">Horizonte:</dt>
                <dd>{dict.footer.durationLabel}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-ink-soft">Dados:</dt>
                <dd>{dict.footer.ethicsNotice}</dd>
              </div>
            </dl>

            <div className="pt-2">
              <span className="text-2xs font-semibold text-ink-muted uppercase tracking-wider block mb-1.5">
                {dict.common.selectLanguage}:
              </span>
              <LanguageSwitcher variant="inline" />
            </div>
          </div>

          {/* Navegação */}
          <nav className="lg:col-span-3" aria-label="Navegação de rodapé">
            <h2 className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted pb-2 border-b border-line">
              {dict.footer.navigationHeader}
            </h2>
            <ul className="mt-3 space-y-2 text-[0.8125rem]">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft hover:text-mukanda-indigo transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Territórios */}
          <div className="lg:col-span-2">
            <h2 className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted pb-2 border-b border-line">
              {dict.footer.provincesHeader}
            </h2>
            <ul className="mt-3 space-y-3 text-2xs">
              {provincias.map((p) => (
                <li key={p.nome}>
                  <p className="font-semibold text-ink text-[0.8125rem]">{p.nome}</p>
                  <p className="text-ink-muted">{p.tipo}</p>
                  <p className="text-ink-muted font-mono">{p.dados}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <h2 className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted pb-2 border-b border-line">
              {dict.footer.contactHeader}
            </h2>
            <div className="mt-3 space-y-3 text-[0.8125rem]">
              <p>
                <span className="text-ink-muted text-2xs block uppercase tracking-kicker">{dict.footer.principalInvestigatorLabel}</span>
                <span className="text-ink font-medium">Eng. Benone Marcos, PhD</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" aria-hidden />
                <span>ACITE — Academia de Ciências Sociais e Tecnologias, Luanda</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ink-muted shrink-0" aria-hidden />
                <a href="mailto:investigacao@acite.ao" className="hover:text-mukanda-indigo transition-colors">
                  investigacao@acite.ao
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-ink-muted shrink-0" aria-hidden />
                <a href="https://mukanda.acite.ao" className="hover:text-mukanda-indigo transition-colors">
                  mukanda.acite.ao
                </a>
              </p>
              <Link href="/validar" className="btn-outline text-2xs py-2 mt-1">
                {dict.footer.verifyBadgeBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* Parcerias */}
        <div className="mt-12 pt-8 border-t border-line">
          <h2 className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted text-center">
            {dict.footer.partnersKicker}
          </h2>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-2xs text-ink-soft">
            {parceiros.map((p) => (
              <li key={p} className="whitespace-nowrap">{p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barra legal */}
      <div className="border-t border-line bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-2xs text-ink-muted">
          <p>© {new Date().getFullYear()} {dict.footer.rightsReserved}</p>
          <div className="flex items-center gap-6">
            <Link href="/transparencia" className="hover:text-ink transition-colors">{dict.footer.transparencyPolicy}</Link>
            <Link href="/sobre" className="hover:text-ink transition-colors">{dict.footer.fairPrivacy}</Link>
            <Link href="/contacto" className="hover:text-ink transition-colors">{dict.footer.ethicsChannel}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
