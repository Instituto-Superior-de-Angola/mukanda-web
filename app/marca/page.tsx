import React from 'react';
import { Download, ExternalLink, Sparkles, FileText, Image as ImageIcon, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function MarcaPage() {
  const brandAssets = [
    {
      title: "Manual de Identidade Visual Oficial (PDF)",
      desc: "Documento completo diagramado com regras de aplicação, grids, tipografia, co-branding e normas gráficas.",
      file: "/docs/manual_identidade_visual_mukanda.pdf",
      format: "PDF de Alta Resolução",
      badge: "Documento Oficial"
    },
    {
      title: "Logótipo Principal (Versão Horizontal)",
      desc: "Versão oficial colorida com símbolo, tipografia MUKANDA e subtítulo AngoComp.",
      file: "/assets/logo-mukanda-principal.svg",
      format: "Vector SVG",
      badge: "Uso Primário"
    },
    {
      title: "Logótipo Vertical (Versão Centrada)",
      desc: "Composição vertical para capas, cartazes, crachás e materiais de orientação vertical.",
      file: "/assets/logo-mukanda-vertical.svg",
      format: "Vector SVG",
      badge: "Formato Vertical"
    },
    {
      title: "Isótipo / Símbolo Mukanda Isolado",
      desc: "Símbolo ancestral Sona + nódulos digitais para favicons, avatares e aplicações compactas.",
      file: "/assets/logo-mukanda-simbolo.svg",
      format: "Vector SVG",
      badge: "Ícone & Símbolo"
    },
    {
      title: "Logótipo com Chancela ACITE",
      desc: "Versão protocolar e institucional para relatórios oficiais e apresentações conjuntas.",
      file: "/assets/logo-mukanda-com-chancela-acite.svg",
      format: "Vector SVG",
      badge: "Co-Branding"
    },
    {
      title: "Selo Oficial de Certificação AngoComp",
      desc: "Selo dourado de garantia de proficiência digital para certificados e diplomas.",
      file: "/assets/selo-certificacao-angocomp.svg",
      format: "Vector SVG",
      badge: "Selo de Garantia"
    },
    {
      title: "Infográfico das 5 Dimensões AngoComp",
      desc: "Diagrama infográfico de alta resolução com as 5 áreas de competência.",
      file: "/assets/infografico-dimensoes-angocomp.svg",
      format: "Vector SVG",
      badge: "Diagrama Científico"
    },
    {
      title: "Padrão Decorativo Sona Digital (Pattern)",
      desc: "Textura vectorial contínua inspirada nos desenhos de areia Lusona.",
      file: "/assets/padrao-sona-digital-pattern.svg",
      format: "Vector SVG",
      badge: "Grafismo de Apoio"
    }
  ];

  const colors = [
    { name: "Terracotta Mukanda", hex: "#C2410C", pantone: "7580 C", cmyk: "0, 80, 100, 15", meaning: "Terra ancestral, calor humano, rito tradicional" },
    { name: "Índigo Digital", hex: "#0F2C59", pantone: "281 C", cmyk: "100, 85, 30, 25", meaning: "Rigor científico, soberania de dados, confiança" },
    { name: "Ouro Solar", hex: "#F59E0B", pantone: "137 C", cmyk: "0, 40, 100, 0", meaning: "Excelência, validação psicométrica, certificação" },
    { name: "Verde Futuro", hex: "#059669", pantone: "7725 C", cmyk: "85, 10, 75, 5", meaning: "Inclusão, esperança e impacto societal" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-[#0F2C59] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-mukanda-gold-light text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-mukanda-gold" />
              <span>Identidade Visual, Media Kit &amp; Activos Oficiais</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Marca &amp; Recursos Visuais
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consulte as directrizes de marca, paleta cromática e descarregue os logótipos e o Manual de Identidade Visual oficial da ACITE.
            </p>
          </div>
        </div>

        {/* 1. Download Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs font-mono font-bold text-mukanda-terracotta uppercase">Activos Digitais</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F2C59]">
                Descarregar Logótipos e Documentos
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brandAssets.map((asset, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {asset.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{asset.format}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900">{asset.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{asset.desc}</p>
                </div>

                <a
                  href={asset.file}
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-mukanda-terracotta hover:text-white text-slate-800 text-xs font-bold transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Descarregar Ficheiro ({asset.format})</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Color Palette Swatches */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-mukanda-terracotta uppercase">Cromática Oficial</span>
            <h3 className="font-display font-black text-2xl text-[#0F2C59]">
              Paleta de Cores Institucional
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((c, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-28 w-full" style={{ backgroundColor: c.hex }}></div>
                <div className="p-4 space-y-1 bg-white">
                  <h5 className="font-bold text-sm text-slate-900">{c.name}</h5>
                  <div className="text-xs font-mono text-slate-600 font-bold">{c.hex}</div>
                  <div className="text-[11px] text-slate-500 font-mono">Pantone {c.pantone}</div>
                  <p className="text-[11px] text-slate-600 pt-2 border-t border-slate-100">{c.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
