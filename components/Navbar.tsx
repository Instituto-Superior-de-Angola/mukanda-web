'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import MukandaMark from '@/components/MukandaMark';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/lib/i18n/LanguageContext';

interface NavItem {
  name: string;
  href: string;
}

interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const { dict } = useTranslation();
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * O menu está organizado em três eixos temáticos, de modo a reduzir o número
   * de destinos de primeiro nível e a tornar explícita a arquitectura do site.
   */
  const groups: NavGroup[] = [
    {
      id: 'projecto',
      label: dict.nav.groupProject,
      items: [
        { name: dict.nav.about, href: '/sobre' },
        { name: dict.nav.transparency, href: '/transparencia' },
        { name: dict.nav.brand, href: '/marca' },
      ],
    },
    {
      id: 'investigacao',
      label: dict.nav.groupResearch,
      items: [
        { name: dict.nav.questionnaires, href: '/questionarios' },
        { name: dict.nav.diagnostic, href: '/diagnostico' },
      ],
    },
    {
      id: 'participar',
      label: dict.nav.groupParticipate,
      items: [
        { name: dict.nav.recruitment, href: '/recrutamento' },
        { name: dict.nav.validator, href: '/validar' },
      ],
    },
  ];

  const directLink: NavItem = { name: dict.nav.contact, href: '/contacto' };

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : Boolean(pathname?.startsWith(href));

  const isGroupActive = (group: NavGroup) => group.items.some((item) => isActive(item.href));

  // Fecha os menus na navegação e ao premir Escape
  useEffect(() => {
    setOpenGroup(null);
    setOpenMobileGroup(null);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenGroup(null);
        setIsOpen(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, []);

  // Abertura por passagem do rato, com pequeno atraso no fecho para permitir
  // o percurso diagonal do cursor até ao painel.
  const hoverOpen = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(id);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 140);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      {/* Barra institucional superior */}
      <div className="hidden md:block border-b border-line bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8 text-2xs text-ink-muted">
            <p className="tracking-kicker uppercase font-semibold truncate">
              {dict.common.institutionFull}
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <p className="font-mono hidden lg:block">{dict.common.officialProgram}</p>
              <div className="border-l border-line pl-3">
                <LanguageSwitcher variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cabeçalho principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem] gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <MukandaMark className="w-10 h-10" />
            <span className="leading-tight">
              <span className="block font-display font-semibold text-xl tracking-tight text-ink">
                {dict.common.projectName}
              </span>
              <span className="hidden sm:block text-2xs text-ink-muted tracking-tight">
                {dict.common.projectSubtitle}
              </span>
            </span>
          </Link>

          {/* Navegação principal (grupos com submenu) */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1"
            aria-label={dict.footer.navigationHeader}
          >
            {groups.map((group) => {
              const expanded = openGroup === group.id;
              return (
                <div
                  key={group.id}
                  className="relative"
                  onMouseEnter={() => hoverOpen(group.id)}
                  onMouseLeave={hoverClose}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() => setOpenGroup(expanded ? null : group.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md border transition-colors ${
                      isGroupActive(group) || expanded
                        ? 'text-mukanda-indigo bg-surface border-line'
                        : 'text-ink-soft hover:text-ink hover:bg-subtle border-transparent'
                    }`}
                  >
                    {group.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>

                  {expanded && (
                    <div className="absolute left-0 top-full pt-2 w-64">
                      <ul className="bg-surface border border-line rounded-lg shadow-raised py-1.5 overflow-hidden">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={isActive(item.href) ? 'page' : undefined}
                              onClick={() => setOpenGroup(null)}
                              className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors ${
                                isActive(item.href)
                                  ? 'text-mukanda-indigo font-medium bg-subtle'
                                  : 'text-ink-soft hover:text-ink hover:bg-subtle'
                              }`}
                            >
                              <span>{item.name}</span>
                              {isActive(item.href) && (
                                <span
                                  className="w-1.5 h-1.5 rounded-full bg-mukanda-terracotta shrink-0"
                                  aria-hidden
                                />
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href={directLink.href}
              aria-current={isActive(directLink.href) ? 'page' : undefined}
              className={`px-3.5 py-2 text-sm font-medium rounded-md border transition-colors ${
                isActive(directLink.href)
                  ? 'text-mukanda-indigo bg-surface border-line'
                  : 'text-ink-soft hover:text-ink hover:bg-subtle border-transparent'
              }`}
            >
              {directLink.name}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Link href="/transparencia" className="btn-primary text-[0.8125rem] py-2">
              {dict.nav.progressDashboard}
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <span className="md:hidden">
              <LanguageSwitcher variant="compact" />
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 rounded-md text-ink-soft hover:bg-subtle"
              aria-expanded={isOpen}
              aria-label={isOpen ? dict.common.close : dict.footer.navigationHeader}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu móvel — acordeão pelos mesmos grupos */}
      {isOpen && (
        <nav className="lg:hidden border-t border-line bg-surface px-4 py-3 space-y-3" aria-label={dict.footer.navigationHeader}>
          <div className="pb-2 border-b border-line flex items-center justify-between">
            <span className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted">
              {dict.common.language}
            </span>
            <LanguageSwitcher variant="inline" />
          </div>

          <ul className="divide-y divide-line">
            {groups.map((group) => {
              const expanded = openMobileGroup === group.id;
              return (
                <li key={group.id}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpenMobileGroup(expanded ? null : group.id)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-ink"
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-ink-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>

                  {expanded && (
                    <ul className="pb-3 pl-3 border-l border-line ml-1 space-y-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                            className={`flex items-center justify-between py-2 text-sm ${
                              isActive(item.href)
                                ? 'text-mukanda-indigo font-medium'
                                : 'text-ink-soft'
                            }`}
                          >
                            <span>{item.name}</span>
                            <ArrowUpRight className="w-4 h-4 text-ink-muted" aria-hidden />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}

            <li>
              <Link
                href={directLink.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(directLink.href) ? 'page' : undefined}
                className={`flex items-center justify-between py-3 text-sm font-medium ${
                  isActive(directLink.href) ? 'text-mukanda-indigo' : 'text-ink'
                }`}
              >
                <span>{directLink.name}</span>
                <ArrowUpRight className="w-4 h-4 text-ink-muted" aria-hidden />
              </Link>
            </li>
          </ul>

          <Link href="/transparencia" onClick={() => setIsOpen(false)} className="btn-primary w-full">
            {dict.nav.progressDashboard}
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </Link>
        </nav>
      )}
    </header>
  );
}
