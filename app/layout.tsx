import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Projecto Mukanda • Quadro Angolano de Competências Digitais (AngoComp)',
  description: 'Plataforma oficial de transparência, diagnóstico psicométrico e inclusão digital em Angola. Investigação aplicada promovida pela ACITE.',
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
      <body className="min-h-screen flex flex-col bg-[#FCFBF9] text-slate-800 antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
