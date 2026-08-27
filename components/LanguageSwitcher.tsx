'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import { LANGUAGES } from '@/lib/i18n/languages';
import { Language } from '@/lib/i18n/types';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'compact' | 'full' | 'inline';
  className?: string;
}

export default function LanguageSwitcher({ variant = 'compact', className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentMeta = LANGUAGES[language] || LANGUAGES.pt;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
        {(Object.keys(LANGUAGES) as Language[]).map((code) => {
          const meta = LANGUAGES[code];
          const isActive = language === code;
          return (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-md transition-colors ${
                isActive
                  ? 'bg-mukanda-indigo text-white font-semibold shadow-xs'
                  : 'bg-white text-ink-soft hover:text-ink hover:bg-subtle border border-line'
              }`}
              title={`${meta.name} — ${meta.region}`}
            >
              <span>{meta.flag}</span>
              <span>{meta.nativeName}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-ink-soft hover:text-ink bg-white hover:bg-subtle border border-line rounded-md transition-colors"
      >
        <span className="text-sm">{currentMeta.flag}</span>
        <span className="font-semibold text-ink">{currentMeta.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-64 rounded-lg bg-white border border-line shadow-lg py-1.5 z-50 animate-in fade-in-50 zoom-in-95">
          <div className="px-3 py-1.5 border-b border-line text-[11px] font-semibold text-ink-muted uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-mukanda-indigo" />
            <span>Línguas de Angola</span>
          </div>

          <div className="py-1">
            {(Object.keys(LANGUAGES) as Language[]).map((code) => {
              const meta = LANGUAGES[code];
              const isSelected = language === code;

              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLanguage(code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-mukanda-indigo/5 text-mukanda-indigo font-semibold'
                      : 'text-ink-soft hover:text-ink hover:bg-subtle'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{meta.flag}</span>
                    <div>
                      <div className="font-medium text-ink flex items-center gap-1.5">
                        <span>{meta.nativeName}</span>
                        {meta.code !== 'pt' && (
                          <span className="text-[10px] px-1 py-0.2 rounded bg-mukanda-gold/15 text-mukanda-terracotta font-mono font-bold">
                            {meta.code.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-ink-muted leading-tight mt-0.5">
                        {meta.region}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-mukanda-indigo shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="px-3 py-1.5 border-t border-line text-[10px] text-ink-muted bg-subtle/50">
            Tradução adaptada às províncias de Luanda, Huíla e Uíge
          </div>
        </div>
      )}
    </div>
  );
}
