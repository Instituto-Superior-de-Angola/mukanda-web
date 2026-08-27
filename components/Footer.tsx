import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Globe, MapPin, Award, BookOpen, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071326] text-slate-300 border-t border-white/10">
      {/* Upper Footer: Key Institutional & Partners Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About & Ancestral Manifesto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-mukanda-terracotta flex items-center justify-center text-white font-bold font-display text-xl shadow">
                M
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">PROJECTO MUKANDA</h3>
                <p className="text-xs text-mukanda-gold-light">Quadro Angolano de Competências Digitais</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Investigação aplicada multidisciplinar promovida pela <strong>ACITE</strong> para diagnóstico, 
              avaliação psicométrica e inclusão digital em Angola, inspirada no saber milenar da iniciação Mukanda e na matriz matemática Lusona.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex flex-col gap-1.5 font-mono">
              <span className="flex items-center gap-1.5 text-mukanda-gold">
                <ShieldCheck className="w-4 h-4 text-mukanda-emerald" />
                <span>Protocolo FAIR &amp; Ética Científica</span>
              </span>
              <span className="text-slate-400">Horizonte: Julho 2026 – Julho 2029 (48 Meses)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Navegação &amp; Módulos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-mukanda-gold transition-colors flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-mukanda-terracotta" />
                  <span>Sobre a ACITE &amp; AngoComp</span>
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="hover:text-mukanda-gold transition-colors flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-mukanda-emerald" />
                  <span>Painel de Transparência &amp; Metas</span>
                </Link>
              </li>
              <li>
                <Link href="/diagnostico" className="hover:text-mukanda-gold transition-colors flex items-center gap-2 font-semibold text-mukanda-gold-light">
                  <Award className="w-3.5 h-3.5 text-mukanda-gold" />
                  <span>Auto-Diagnóstico AngoComp</span>
                </Link>
              </li>
              <li>
                <Link href="/questionarios" className="hover:text-mukanda-gold transition-colors flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-mukanda-terracotta" />
                  <span>Questionários Online (WP1)</span>
                </Link>
              </li>
              <li>
                <Link href="/recrutamento" className="hover:text-mukanda-gold transition-colors flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-mukanda-emerald" />
                  <span>Recrutamento &amp; Inscrições</span>
                </Link>
              </li>
              <li>
                <Link href="/marca" className="hover:text-mukanda-gold transition-colors flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-mukanda-gold" />
                  <span>Manual de Identidade &amp; Media</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Territories */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Províncias Piloto (WP1–WP6)
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-mukanda-terracotta/40 transition-all">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-mukanda-terracotta"></span>
                  <span>LUANDA — Metropolitano</span>
                </div>
                <p className="text-slate-400 mt-1">1.000 cidadãos certificados • 50 formadores • Foco em serviços digitais e cibersegurança.</p>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-mukanda-gold/40 transition-all">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-mukanda-gold"></span>
                  <span>HUÍLA — Urbano Interior</span>
                </div>
                <p className="text-slate-400 mt-1">800 cidadãos certificados • 35 formadores • Foco académico e integração comunitária.</p>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-mukanda-emerald/40 transition-all">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-mukanda-emerald"></span>
                  <span>UÍGE — Predominantemente Rural</span>
                </div>
                <p className="text-slate-400 mt-1">700 cidadãos certificados • 35 formadores • Inclusão agrária e literacia de base.</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Institutional Anchor */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Coordenação &amp; Contacto
            </h4>
            <p className="text-xs text-slate-400">
              <strong>Investigador Principal:</strong><br />
              Eng. Benone Marcos, PhD
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-mukanda-terracotta shrink-0 mt-0.5" />
                <span>Academia de Ciências Sociais e Tecnologias (ACITE) • Luanda, Angola</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mukanda-gold shrink-0" />
                <a href="mailto:investigacao@acite.ao" className="hover:text-white transition-colors">investigacao@acite.ao</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-mukanda-emerald shrink-0" />
                <a href="https://mukanda.acite.ao" className="hover:text-white transition-colors">www.mukanda.acite.ao</a>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/validar" 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-mukanda-indigo text-xs text-mukanda-gold-light border border-mukanda-gold/30 hover:bg-mukanda-indigo-light transition-all font-semibold"
              >
                <ShieldCheck className="w-4 h-4 text-mukanda-gold" />
                <span>Verificar Certificado AngoComp</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Partners and Sponsors Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-slate-400 text-center font-semibold mb-4">
            Financiamento, Parcerias Científicas &amp; Cooperação Institucional Prevista
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-400">
            <span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 hover:text-white transition-colors">ACITE (Proponente Única)</span>
            <span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 hover:text-white transition-colors">FUNDECIT / MESCTI</span>
            <span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 hover:text-white transition-colors">União Europeia (Programa CAP4)</span>
            <span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 hover:text-white transition-colors">UNESCO</span>
            <span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 hover:text-white transition-colors">INE Angola</span>
            <span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 hover:text-white transition-colors">Sector Privado de Telecomunicações</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-[#040D1B] py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Projecto MUKANDA — ACITE (Instituto Superior de Angola). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/transparencia" className="hover:text-mukanda-gold transition-colors">Política de Transparência</Link>
            <Link href="/sobre" className="hover:text-mukanda-gold transition-colors">Privacidade &amp; Dados FAIR</Link>
            <Link href="/contacto" className="hover:text-mukanda-gold transition-colors">Canal de Ética</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
