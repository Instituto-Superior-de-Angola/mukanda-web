'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  BarChart2, 
  Download, 
  Share2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  dimId: number;
  dimension: string;
  question: string;
  options: {
    text: string;
    points: number; // 0 to 4
  }[];
}

const quizQuestions: Question[] = [
  // Dimensão 1: Informação & Dados
  {
    id: 1,
    dimId: 1,
    dimension: "Informação & Dados",
    question: "Quando recebe uma notícia no WhatsApp com título alarmante sobre um subsídio ou evento em Angola, qual é a sua reacção habitual?",
    options: [
      { text: "Partilho de imediato nos meus grupos para avisar os meus contactos.", points: 1 },
      { text: "Leio e acredito, mas não partilho com ninguém.", points: 2 },
      { text: "Procuro verificar a notícia num jornal oficial ou no portal do ministério antes de partilhar.", points: 4 },
      { text: "Não sei como saber se a notícia é verdadeira ou falsa.", points: 0 }
    ]
  },
  {
    id: 2,
    dimId: 1,
    dimension: "Informação & Dados",
    question: "Como organiza e guarda habitualmente os seus ficheiros, documentos de identificação e fotografias importantes?",
    options: [
      { text: "Guardo apenas na memória interna do telemóvel sem pastas organizadas.", points: 1 },
      { text: "Crio pastas por temas e transfiro cópias para um computador ou pen-drive.", points: 3 },
      { text: "Utilizo serviços de armazenamento em nuvem (Google Drive, OneDrive, etc.) com cópia de segurança automática.", points: 4 },
      { text: "Costumo perder ficheiros com frequência quando mudo de telemóvel.", points: 0 }
    ]
  },
  {
    id: 3,
    dimId: 1,
    dimension: "Informação & Dados",
    question: "Ao pesquisar informação sobre uma oportunidade académica ou de trabalho no Google, como filtra os resultados?",
    options: [
      { text: "Clico sempre no primeiro link que aparece, mesmo que seja um anúncio.", points: 1 },
      { text: "Uso palavras-chave específicas e comparo 2 ou 3 sites com extensão oficial (.gov.ao, .ao, .org).", points: 4 },
      { text: "Peço a um colega para pesquisar por mim.", points: 0 },
      { text: "Leio os resumos do Google e clico no título que parece mais atractivo.", points: 2 }
    ]
  },

  // Dimensão 2: Comunicação & Colaboração
  {
    id: 4,
    dimId: 2,
    dimension: "Comunicação & Colaboração",
    question: "Quando precisa de enviar um documento para uma candidatura ou serviço público por e-mail:",
    options: [
      { text: "Envio uma foto tirada ao papel pelo WhatsApp sem formato padronizado.", points: 1 },
      { text: "Digitalizo em PDF com nome claro, assunto formal e saudação apropriada no corpo do e-mail.", points: 4 },
      { text: "Envio o ficheiro sem assunto e sem mensagem explicativa.", points: 2 },
      { text: "Não tenho conta de e-mail activa.", points: 0 }
    ]
  },
  {
    id: 5,
    dimId: 2,
    dimension: "Comunicação & Colaboração",
    question: "Já participou numa reunião de trabalho, aula ou conferência online através de Zoom, Microsoft Teams ou Google Meet?",
    options: [
      { text: "Sim, participo com frequência, sei partilhar ecrã, usar o chat e moderar áudio/vídeo.", points: 4 },
      { text: "Sim, consigo entrar para assistir, mas tenho dificuldades em ligar o áudio/vídeo.", points: 2 },
      { text: "Já tentei mas não consegui fazer a ligação.", points: 1 },
      { text: "Nunca utilizei plataformas de videoconferência.", points: 0 }
    ]
  },
  {
    id: 6,
    dimId: 2,
    dimension: "Comunicação & Colaboração",
    question: "Como se posiciona em relação à sua privacidade e reputação nas redes sociais (Facebook, LinkedIn, Instagram)?",
    options: [
      { text: "Publico tudo em modo público sem me preocupar com quem vê.", points: 1 },
      { text: "Configuro quem pode ver as minhas publicações e penso no impacto profissional antes de postar.", points: 4 },
      { text: "Não sei onde encontrar as definições de privacidade do meu perfil.", points: 1 },
      { text: "Mantenho perfis profissionais separados dos pessoais e verifico as permissões.", points: 4 }
    ]
  },

  // Dimensão 3: Criação de Conteúdo Digital
  {
    id: 7,
    dimId: 3,
    dimension: "Criação de Conteúdo",
    question: "Precisa de preparar um relatório ou trabalho com texto, tabelas e cabeçalho:",
    options: [
      { text: "Uso Word / Google Docs, aplico estilos de títulos, índices automáticos e paginação.", points: 4 },
      { text: "Escrevo o texto básico mas não sei formatar tabelas ou numeração de páginas.", points: 2 },
      { text: "Escrevo à mão e peço a uma tipografia/cybercafé para digitar.", points: 0 },
      { text: "Uso o bloco de notas do telemóvel.", points: 1 }
    ]
  },
  {
    id: 8,
    dimId: 3,
    dimension: "Criação de Conteúdo",
    question: "Ao utilizar uma imagem, gráfico ou texto encontrado na internet num documento seu:",
    options: [
      { text: "Copio e colo sem mencionar a fonte nem o autor original.", points: 0 },
      { text: "Cito expressamente o autor/fonte e verifico se a imagem tem direitos abertos (Creative Commons).", points: 4 },
      { text: "Acho que tudo o que está no Google pode ser usado livremente sem citar.", points: 1 },
      { text: "Tento alterar a imagem para não perceberem de onde veio.", points: 1 }
    ]
  },
  {
    id: 9,
    dimId: 3,
    dimension: "Criação de Conteúdo",
    question: "Qual é o seu nível de familiaridade com ferramentas de cálculo (Excel, Google Sheets) ou análise de dados simples?",
    options: [
      { text: "Nunca utilizei folhas de cálculo.", points: 0 },
      { text: "Sei inserir dados e fazer contas simples como soma e média.", points: 2 },
      { text: "Crio fórmulas avançadas, gráficos comparativos e filtros de pesquisa.", points: 4 },
      { text: "Consigo apenas abrir tabelas criadas por outros.", points: 1 }
    ]
  },

  // Dimensão 4: Segurança & Privacidade
  {
    id: 10,
    dimId: 4,
    dimension: "Segurança & Privacidade",
    question: "Que tipo de palavra-passe (senha) utiliza habitualmente nas suas contas de e-mail e bancos digitais?",
    options: [
      { text: "O meu nome, data de nascimento ou 123456 repetido em todas as contas.", points: 0 },
      { text: "Uma senha complexa com letras maiúsculas, números e símbolos, diferente para cada serviço.", points: 4 },
      { text: "Uma senha média que uso em quase tudo para não esquecer.", points: 2 },
      { text: "Utilizo autenticação de dois factores (2FA / código por SMS ou app) nas contas principais.", points: 4 }
    ]
  },
  {
    id: 11,
    dimId: 4,
    dimension: "Segurança & Privacidade",
    question: "Recebe uma mensagem SMS ou chamada a dizer que 'ganhou um prémio da operadora' ou que a 'sua conta bancária será bloqueada se não digitar o código':",
    options: [
      { text: "Forneço os dados ou o código recebido para não perder o acesso.", points: 0 },
      { text: "Reconheço imediatamente como tentativa de burla (phishing), bloqueio o número e denuncio.", points: 4 },
      { text: "Fico com dúvidas e ligo para o número que me contactou para perguntar.", points: 1 },
      { text: "Ligo para o canal oficial de atendimento do banco para confirmar.", points: 4 }
    ]
  },
  {
    id: 12,
    dimId: 4,
    dimension: "Segurança & Privacidade",
    question: "Ao conectar o seu computador ou smartphone a uma rede Wi-Fi pública aberta num café ou praça:",
    options: [
      { text: "Conecto e faço compras online ou acesso à minha conta bancária normalmente.", points: 1 },
      { text: "Evito aceder a contas sensíveis ou utilizo uma VPN para cifrar a comunicação.", points: 4 },
      { text: "Não sei que riscos existem em redes abertas.", points: 0 },
      { text: "Uso apenas para ler notícias gerais sem colocar senhas.", points: 3 }
    ]
  },

  // Dimensão 5: Resolução de Problemas
  {
    id: 13,
    dimId: 5,
    dimension: "Resolução de Problemas",
    question: "Quando o seu telemóvel ou computador fica muito lento ou diz 'memória cheia':",
    options: [
      { text: "Fico sem saber o que fazer e pondero comprar outro aparelho.", points: 0 },
      { text: "Limpo a cache das aplicações, apago ficheiros temporários e desinstalo apps não usadas.", points: 4 },
      { text: "Levo a um técnico mesmo para problemas simples.", points: 1 },
      { text: "Reinício o aparelho para ver se resolve.", points: 2 }
    ]
  },
  {
    id: 14,
    dimId: 5,
    dimension: "Resolução de Problemas",
    question: "Quando precisa de aprender a usar um novo aplicativo do Governo ou do trabalho (ex: Portal do Contribuinte, SIGE, App Bancária):",
    options: [
      { text: "Leio as instruções, vejo tutoriais no YouTube e aprendo autonomamente.", points: 4 },
      { text: "Tento mexer por tentativa e erro até conseguir.", points: 3 },
      { text: "Só consigo se alguém estiver ao meu lado a fazer por mim.", points: 1 },
      { text: "Desisto e prefiro ir ao balcão físico.", points: 0 }
    ]
  },
  {
    id: 15,
    dimId: 5,
    dimension: "Resolução de Problemas",
    question: "Em zonas com sinal de internet fraco ou instável, como gere as suas tarefas digitais?",
    options: [
      { text: "Uso modos offline em aplicações, descarrego ficheiros com antecedência e comprimo anexos.", points: 4 },
      { text: "Fico bloqueado e espero até voltar para um local com melhor rede.", points: 1 },
      { text: "Utilizo as configurações de economia de dados do smartphone.", points: 3 },
      { text: "Não sei que é possível usar ferramentas em modo offline.", points: 0 }
    ]
  }
];

export default function DiagnosticQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userProvince, setUserProvince] = useState('Luanda');

  const currentQ = quizQuestions[currentIdx];
  const progressPercent = Math.round(((currentIdx) / quizQuestions.length) * 100);

  const handleSelectOption = (points: number) => {
    setAnswers({ ...answers, [currentQ.id]: points });
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  // Score Calculations
  const calculateResults = () => {
    const dimScores: Record<number, { score: number; max: number; name: string }> = {
      1: { score: 0, max: 12, name: "Informação & Dados" },
      2: { score: 0, max: 12, name: "Comunicação & Colaboração" },
      3: { score: 0, max: 12, name: "Criação de Conteúdo" },
      4: { score: 0, max: 12, name: "Segurança & Privacidade" },
      5: { score: 0, max: 12, name: "Resolução de Problemas" },
    };

    let totalScore = 0;
    const maxTotal = quizQuestions.length * 4; // 60

    quizQuestions.forEach((q) => {
      const pts = answers[q.id] ?? 0;
      dimScores[q.dimId].score += pts;
      totalScore += pts;
    });

    const percentTotal = Math.round((totalScore / maxTotal) * 100);

    let level = "Nível A1/A2 — Básico / Iniciante";
    let levelBadge = "bg-amber-100 text-amber-900 border-amber-300";
    let levelDesc = "Possui noções elementares de navegação e comunicação móvel, mas necessita de formação prática em segurança, verificação de dados e criação de documentos.";

    if (percentTotal >= 75) {
      level = "Nível C1/C2 — Avançado / Perfil Multiplicador";
      levelBadge = "bg-emerald-100 text-emerald-900 border-emerald-300";
      levelDesc = "Demonstra elevada autonomia crítica, rigor na gestão de dados, cibersegurança activa e aptidão para se candidatar como Formador Multiplicador do Projecto Mukanda.";
    } else if (percentTotal >= 45) {
      level = "Nível B1/B2 — Intermédio / Usuário Autónomo";
      levelBadge = "bg-blue-100 text-blue-900 border-blue-300";
      levelDesc = "Executa tarefas digitais correntes com segurança, mas beneficiará dos módulos AngoComp para aprofundar ferramentas de colaboração e produtividade.";
    }

    return { totalScore, maxTotal, percentTotal, dimScores, level, levelBadge, levelDesc };
  };

  if (isCompleted) {
    const res = calculateResults();

    return (
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-10 max-w-4xl mx-auto text-slate-800">
        {/* Certificate Badge Header */}
        <div className="text-center space-y-3 pb-8 border-b border-slate-100">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mukanda-gold to-mukanda-terracotta mx-auto p-4 text-white shadow-xl flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
            Diagnóstico Concluído • Quadro AngoComp (ACITE)
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F2C59]">
            Resultado da Avaliação de Literacia Digital
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border ${res.levelBadge}">
            <Sparkles className="w-4 h-4 text-mukanda-gold" />
            <span>{res.level}</span>
          </div>
        </div>

        {/* Big Score Overview */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 p-6 rounded-2xl bg-[#0F2C59] text-white text-center shadow-lg">
            <span className="text-xs uppercase tracking-wider text-mukanda-gold-light font-mono">Índice Geral</span>
            <div className="font-display font-black text-5xl text-white mt-1">
              {res.percentTotal}<span className="text-2xl text-mukanda-gold">%</span>
            </div>
            <div className="text-xs text-slate-300 mt-2">
              Pontuação: {res.totalScore} de {res.maxTotal} pontos
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-base text-slate-900">
              Diagnóstico Pedagógico do Perfil:
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {res.levelDesc}
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-mukanda-emerald shrink-0" />
              <span>Avaliação compatível com a escala psicométrica do Índice ILDA (WP1–WP2).</span>
            </div>
          </div>
        </div>

        {/* 5 Dimensions Breakdown Progress Bars */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
            Desempenho por Dimensão AngoComp
          </h4>

          <div className="space-y-3">
            {Object.entries(res.dimScores).map(([key, data]) => {
              const dimPercent = Math.round((data.score / data.max) * 100);
              return (
                <div key={key} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>Dimensão {key}: {data.name}</span>
                    <span className="font-mono text-mukanda-indigo">{data.score} / {data.max} pts ({dimPercent}%)</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-mukanda-terracotta to-mukanda-gold h-full rounded-full transition-all"
                      style={{ width: `${dimPercent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Steps & Call to Actions */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir Auto-Avaliação</span>
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/recrutamento"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white text-xs sm:text-sm font-bold shadow-md shadow-mukanda-terracotta/20 transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Inscrever-se para Certificação Oficial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10 max-w-3xl mx-auto">
      
      {/* Top Header & Progress */}
      <div className="mb-6 space-y-3">
        <div className="flex justify-between items-center text-xs font-mono text-slate-500">
          <span className="font-bold text-mukanda-terracotta uppercase">
            Questão {currentIdx + 1} de {quizQuestions.length}
          </span>
          <span>{progressPercent}% Concluído</span>
        </div>

        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-mukanda-terracotta to-mukanda-gold h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
          Dimensão: {currentQ.dimension}
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-8">
        <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F2C59] leading-snug">
          {currentQ.question}
        </h3>
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-8">
        {currentQ.options.map((opt, idx) => {
          const isSelected = answers[currentQ.id] === opt.points;
          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(opt.points)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                isSelected
                  ? 'bg-mukanda-indigo/5 border-mukanda-indigo shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 bg-white'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                isSelected 
                  ? 'border-mukanda-indigo bg-mukanda-indigo text-white' 
                  : 'border-slate-300'
              }`}>
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>
              <span className={`text-xs sm:text-sm font-medium leading-relaxed ${
                isSelected ? 'text-mukanda-indigo font-bold' : 'text-slate-700'
              }`}>
                {opt.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Nav Buttons */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            currentIdx === 0
              ? 'opacity-40 cursor-not-allowed text-slate-400'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          ← Anterior
        </button>

        <button
          onClick={handleNext}
          disabled={answers[currentQ.id] === undefined}
          className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-md ${
            answers[currentQ.id] === undefined
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white shadow-mukanda-terracotta/20'
          }`}
        >
          <span>{currentIdx === quizQuestions.length - 1 ? 'Finalizar Diagnóstico' : 'Próxima Questão'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
