'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import MukandaMark from '@/components/MukandaMark';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, dict, language } = useTranslation();

  const navLinks = [
    { name: dict.nav.about, href: '/sobre' },
    { name: dict.nav.transparency, href: '/transparencia' },
    { name: dict.nav.questionnaires, href: '/questionarios' },
    { name: dict.nav.diagnostic, href: '/diagnostico' },
    { name: dict.nav.recruitment, href: '/recrutamento' },
    { name: dict.nav.brand, href: '/marca' },
    { name: dict.nav.validator, href: '/validar' },
    { name: dict.nav.contact, href: '/contacto' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      {/* Barra institucional superior */}
      <div className="hidden md:block border-b border-line bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8 text-2xs text-ink-muted">
            <p className="tracking-kicker uppercase font-semibold">
              {dict.common.institutionFull}
            </p>
            <div className="flex items-center gap-4">
              <p className="font-mono">
                {dict.common.officialProgram}
              </p>
              <div className="border-l border-line pl-3">
                <LanguageSwitcher variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cabeçalho principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem] gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <MukandaMark className="w-10 h-10" />
            <span className="leading-tight">
              <span className="block font-display font-semibold text-xl tracking-tight text-ink">
                {dict.common.projectName}
              </span>
              <span className="block text-2xs text-ink-muted tracking-tight">
                {dict.common.projectSubtitle}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`px-3 py-2 text-[0.8125rem] font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-mukanda-indigo bg-white border border-line shadow-2xs'
                    : 'text-ink-soft hover:text-ink hover:bg-subtle border border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <LanguageSwitcher variant="compact" />
            <Link href="/transparencia" className="btn-primary text-[0.8125rem] py-2">
              {dict.nav.progressDashboard}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher variant="compact" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 rounded-md text-ink-soft hover:bg-subtle"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu móvel */}
      {isOpen && (
        <nav className="lg:hidden border-t border-line bg-surface px-4 py-3 space-y-3" aria-label="Navegação móvel">
          <div className="pb-2 border-b border-line flex items-center justify-between">
            <span className="text-2xs font-semibold uppercase tracking-wider text-ink-muted">
              {dict.common.language}:
            </span>
            <LanguageSwitcher variant="inline" />
          </div>

          <ul className="divide-y divide-line">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-3 text-sm font-medium ${
                    isActive(link.href) ? 'text-mukanda-indigo font-semibold' : 'text-ink-soft'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
