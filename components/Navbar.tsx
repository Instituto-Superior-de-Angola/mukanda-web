'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Compass, 
  BarChart3, 
  CheckCircle2, 
  FileText, 
  Users, 
  Download, 
  ShieldCheck, 
  Mail,
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre o Projecto', href: '/sobre', icon: Compass },
    { name: 'Transparência & Progresso', href: '/transparencia', icon: BarChart3 },
    { name: 'Diagnóstico Online', href: '/diagnostico', icon: CheckCircle2, highlight: true },
    { name: 'Questionários WP1', href: '/questionarios', icon: FileText },
    { name: 'Recrutamento', href: '/recrutamento', icon: Users },
    { name: 'Marca & Media', href: '/marca', icon: Download },
    { name: 'Validador', href: '/validar', icon: ShieldCheck },
    { name: 'Contacto', href: '/contacto', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#071326]/90 backdrop-blur-md border-b border-white/10 text-white">
      {/* Top micro bar with ACITE / Institutional Flag */}
      <div className="bg-[#0A192F] text-xs py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-mukanda-emerald animate-pulse"></span>
            <span className="font-semibold text-mukanda-gold-light tracking-wider">ACITE ANGOLA</span>
            <span className="hidden sm:inline text-slate-400">| Academia de Ciências Sociais e Tecnologias • Instituto Superior de Angola</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline font-mono">Quadro Angolano de Competências Digitais (AngoComp)</span>
            <Link href="/transparencia" className="hover:text-mukanda-gold transition-colors flex items-center gap-1 font-semibold text-mukanda-gold">
              <span>Painel de Transparência</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mukanda-terracotta-light to-mukanda-terracotta p-2 shadow-lg shadow-mukanda-terracotta/20 flex items-center justify-center transform group-hover:scale-105 transition-all">
              {/* Stylized Sona Matrix Logo Icon */}
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <circle cx="50" cy="50" r="12" fill="#0F2C59" stroke="#FFF" strokeWidth="3" />
                <path d="M 50 15 C 30 15, 15 30, 15 50 C 15 70, 35 80, 50 90 L 50 75 C 38 68, 30 58, 30 50 C 30 38, 38 30, 50 30 Z" fill="#FFF" opacity="0.9" />
                <path d="M 50 15 C 70 15, 85 30, 85 50 C 85 70, 65 80, 50 90 L 50 75 C 62 68, 70 58, 70 50 C 70 38, 62 30, 50 30 Z" fill="#F59E0B" />
                <circle cx="50" cy="15" r="4" fill="#F59E0B" />
                <circle cx="15" cy="50" r="4" fill="#FFF" />
                <circle cx="85" cy="50" r="4" fill="#38BDF8" />
                <circle cx="50" cy="90" r="4" fill="#10B981" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-wider text-white">MUKANDA</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-mukanda-gold text-mukanda-indigo-dark">2.0</span>
              </div>
              <p className="text-xs text-slate-300 font-medium tracking-tight">Quadro Angolano de Competências Digitais</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    link.highlight 
                      ? 'bg-gradient-to-r from-mukanda-terracotta to-mukanda-terracotta-light text-white font-semibold shadow-md shadow-mukanda-terracotta/20 hover:brightness-110' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F2C59] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  link.highlight
                    ? 'bg-mukanda-terracotta text-white font-bold'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 text-mukanda-gold" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
