import React from 'react';
import { Users, Award, MapPin, Calendar, Database, FileCheck } from 'lucide-react';

export default function StatsTicker() {
  const stats = [
    {
      label: "Cidadãos a Certificar",
      value: "2.500",
      description: "Formação & avaliação AngoComp",
      icon: Award,
      color: "text-mukanda-terracotta-light",
      border: "border-mukanda-terracotta/30",
    },
    {
      label: "Formadores Multiplicadores",
      value: "120",
      description: "Capacitação de professores e instrutores",
      icon: Users,
      color: "text-mukanda-gold",
      border: "border-mukanda-gold/30",
    },
    {
      label: "Províncias Piloto",
      value: "3",
      description: "Luanda (Metro), Huíla (Urbano), Uíge (Rural)",
      icon: MapPin,
      color: "text-mukanda-emerald-light",
      border: "border-mukanda-emerald/30",
    },
    {
      label: "Horizonte de Execução",
      value: "48 M",
      description: "Julho de 2026 a Julho de 2029",
      icon: Calendar,
      color: "text-sky-400",
      border: "border-sky-400/30",
    },
    {
      label: "Amostra Linha de Base (WP1)",
      value: "1.500",
      description: "Inquérito representativo nacional",
      icon: FileCheck,
      color: "text-amber-400",
      border: "border-amber-400/30",
    },
    {
      label: "Dados Científicos FAIR",
      value: "100%",
      description: "Repositório aberto & auditável",
      icon: Database,
      color: "text-purple-400",
      border: "border-purple-400/30",
    },
  ];

  return (
    <div className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl bg-[#0F2C59]/90 backdrop-blur-md border ${stat.border} shadow-xl hover:scale-105 transition-all text-white`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">WP1-6</span>
              </div>
              <div className={`font-display font-black text-2xl sm:text-3xl ${stat.color} tracking-tight`}>
                {stat.value}
              </div>
              <div className="font-semibold text-xs text-white mt-1 line-clamp-1">{stat.label}</div>
              <div className="text-[10.5px] text-slate-300 mt-0.5 line-clamp-1">{stat.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
