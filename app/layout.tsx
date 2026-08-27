import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://mukanda.acite.ao'),
  title: {
    default: 'Projecto Mukanda — Quadro Angolano de Competências Digitais (AngoComp)',
    template: '%s · Projecto Mukanda',
  },
  description:
    'Plataforma de acompanhamento público do Projecto Mukanda: concepção, validação psicométrica e pilotagem do Quadro Angolano de Competências Digitais (AngoComp) e do Índice ILDA. Investigação aplicada promovida pela ACITE.',
  keywords: [
    'Literacia Digital Angola', 
    'AngoComp', 
    'Projecto Mukanda', 
    'ACITE', 
    'Índice ILDA', 
    'Competências Digitais', 
    'Luanda', 
    'Huíla', 
    'Uíge',
    'Educação Digital'
  ],
  authors: [{ name: 'ACITE — Academia de Ciências Sociais e Tecnologias' }],
  openGraph: {
    title: 'Projecto Mukanda • Quadro Angolano de Competências Digitais',
    description: 'Concepção, Validação e Pilotagem de um Instrumento Científico para o Diagnóstico e Promoção da Literacia Digital em Angola.',
    url: 'https://mukanda.acite.ao',
    siteName: 'Projecto Mukanda',
    locale: 'pt_AO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo-mukanda-simbolo.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink antialiased">
        <LanguageProvider>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-white focus:border focus:border-line focus:rounded-md focus:text-sm"
          >
            Saltar para o conteúdo principal
          </a>
          <Navbar />
          <main id="conteudo" className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
