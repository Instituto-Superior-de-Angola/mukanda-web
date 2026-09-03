import PageHeader from '@/components/PageHeader';
import React from 'react';
import { Download } from 'lucide-react';

export default function MarcaPage() {

  const brandAssets = [
    {
      title: "Logótipo Principal (Versão Horizontal)",
      desc: `Versão oficial colorida com símbolo, tipografia MUKANDA e subtítulo AngoComp.`,
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

  /**
   * Cromática oficial do manual de identidade (referência para impressão e
   * materiais institucionais) acompanhada da variante aplicada nesta interface,
   * dessaturada para garantir contraste de leitura em ecrã.
   */
  const colors = [
    { name: "Terracota Mukanda", hex: "#C2410C", web: "#A9543A", pantone: "7580 C", cmyk: "0, 80, 100, 15", meaning: "Terra ancestral, calor humano, rito tradicional" },
    { name: "Índigo Digital", hex: "#0F2C59", web: "#1C3557", pantone: "281 C", cmyk: "100, 85, 30, 25", meaning: "Rigor científico, soberania de dados, confiança" },
    { name: "Ouro Solar", hex: "#F59E0B", web: "#A07B2C", pantone: "137 C", cmyk: "0, 40, 100, 0", meaning: "Excelência, validação psicométrica, certificação" },
    { name: "Verde Futuro", hex: "#059669", web: "#2F6F55", pantone: "7725 C", cmyk: "85, 10, 75, 5", meaning: "Inclusão, esperança e impacto societal" }
  ];

  return (
    <>
      <PageHeader
        kicker="Identidade visual e media kit"
        title="Marca e recursos institucionais"
        lead="Directrizes de aplicação da marca, paleta cromática e logótipos do Projecto Mukanda, para uso por parceiros institucionais e órgãos de comunicação social. O manual completo, os modelos de certificado, o selo de certificação e as peças protocolares são facultados pela coordenação mediante pedido fundamentado."
        meta={[
          { label: 'Manual', value: 'Mediante pedido à coordenação' },
          { label: 'Logótipos', value: 'SVG vectorial, todas as variantes' },
          { label: 'Uso', value: 'Mediante respeito pelas directrizes' },
          { label: 'Contacto', value: 'investigacao@acite.ao' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* 1. Download Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <span className="kicker">Activos Digitais</span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
                Descarregar logótipos
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brandAssets.map((asset, idx) => (
              <div key={idx} className="card p-6 hover:border-line-strong transition-all flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xs font-mono font-semibold px-2.5 py-0.5 rounded bg-subtle text-ink-soft">
                      {asset.badge}
                    </span>
                    <span className="text-xs font-semibold text-ink-muted">{asset.format}</span>
                  </div>
                  <h4 className="font-display font-semibold text-lg text-ink">{asset.title}</h4>
                  <p className="text-[0.8125rem] text-ink-soft leading-relaxed">{asset.desc}</p>
                </div>

                <a
                  href={asset.file}
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-subtle hover:bg-mukanda-terracotta hover:text-white text-ink text-xs font-semibold transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Descarregar Ficheiro ({asset.format})</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Color Palette Swatches */}
        <div className="card p-6 sm:p-10 space-y-6">
          <div className="space-y-1">
            <span className="kicker">Cromática oficial</span>
            <h3 className="font-display font-semibold text-2xl text-ink">
              Paleta de cores institucional
            </h3>
            <p className="prose-mukanda max-w-prose pt-2">
              Os valores de referência do manual aplicam-se a impressão e a materiais institucionais.
              Esta interface utiliza variantes dessaturadas das mesmas cores, calibradas para assegurar
              contraste de leitura em ecrã (WCAG AA) sobre fundo claro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((c, idx) => (
              <div key={idx} className="rounded-lg border border-line overflow-hidden">
                <div className="flex h-24 w-full">
                  <div className="flex-1" style={{ backgroundColor: c.hex }} aria-hidden />
                  <div className="w-1/3" style={{ backgroundColor: c.web }} aria-hidden />
                </div>
                <div className="p-4 space-y-2 bg-surface">
                  <h5 className="font-display font-semibold text-[0.9375rem] text-ink">{c.name}</h5>
                  <dl className="text-2xs font-mono text-ink-soft space-y-0.5">
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Manual</dt>
                      <dd>{c.hex}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Ecrã</dt>
                      <dd>{c.web}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Pantone</dt>
                      <dd>{c.pantone}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">CMYK</dt>
                      <dd>{c.cmyk}</dd>
                    </div>
                  </dl>
                  <p className="text-2xs text-ink-soft pt-2 border-t border-line">{c.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
