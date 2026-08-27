"use client";

import { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Users,
  Mic,
  Clock,
  Handshake,
  HeartHandshake,
  TrendingUp,
  Eye,
  Video,
  MessageCircle,
  AtSign,
  DollarSign,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  displayValue: string;
  label: string;
  gradient: string;
  badge?: string;
}

const stats: StatItem[] = [
  {
    icon: <Users size={24} className="text-violet-600" />,
    displayValue: "+130",
    label: "Participantes presenciais",
    gradient: "from-violet-50/90 to-purple-50/70 border-violet-200/80",
    badge: "Público",
  },
  {
    icon: <Mic size={24} className="text-blue-600" />,
    displayValue: "9",
    label: "Palestrantes especialistas",
    gradient: "from-blue-50/90 to-indigo-50/70 border-blue-200/80",
    badge: "Científico",
  },
  {
    icon: <Clock size={24} className="text-sky-600" />,
    displayValue: "+11h",
    label: "De programação científica",
    gradient: "from-sky-50/90 to-cyan-50/70 border-sky-200/80",
    badge: "Imersão",
  },
  {
    icon: <Handshake size={24} className="text-amber-600" />,
    displayValue: "4",
    label: "Patrocinadores oficiais",
    gradient: "from-amber-50/90 to-orange-50/70 border-amber-200/80",
    badge: "Parcerias",
  },
  {
    icon: <HeartHandshake size={24} className="text-emerald-600" />,
    displayValue: "+9",
    label: "Apoiadores institucionais",
    gradient: "from-emerald-50/90 to-teal-50/70 border-emerald-200/80",
    badge: "Apoio",
  },
  {
    icon: <Video size={24} className="text-pink-600" />,
    displayValue: "+40",
    label: "Stories publicados em tempo real",
    gradient: "from-pink-50/90 to-rose-50/70 border-pink-200/80",
    badge: "Ao vivo",
  },
  {
    icon: <TrendingUp size={24} className="text-fuchsia-600" />,
    displayValue: "+6.200",
    label: "Seguidores no Instagram",
    gradient: "from-fuchsia-50/90 to-purple-50/70 border-fuchsia-200/80",
    badge: "Comunidade",
  },
  {
    icon: <Eye size={24} className="text-indigo-600" />,
    displayValue: "+80 mil",
    label: "Visualizações no perfil",
    gradient: "from-indigo-50/90 to-blue-50/70 border-indigo-200/80",
    badge: "Alcance",
  },
  {
    icon: <Video size={24} className="text-rose-600" />,
    displayValue: "+60 mil",
    label: "Visualizações nos Stories",
    gradient: "from-rose-50/90 to-orange-50/70 border-rose-200/80",
    badge: "Engajamento",
  },
  {
    icon: <MessageCircle size={24} className="text-cyan-600" />,
    displayValue: "+2.189",
    label: "Interações registradas",
    gradient: "from-cyan-50/90 to-sky-50/70 border-cyan-200/80",
    badge: "Conexões",
  },
  {
    icon: <AtSign size={24} className="text-yellow-600" />,
    displayValue: "+400",
    label: "Marcações nas redes sociais",
    gradient: "from-yellow-50/90 to-amber-50/70 border-yellow-200/80",
    badge: "Repercussão",
  },
  {
    icon: <DollarSign size={24} className="text-emerald-600" />,
    displayValue: "+ de 60 mil",
    label: "Em negócios gerados",
    gradient: "from-emerald-50/90 to-green-50/70 border-emerald-200/80",
    badge: "Impacto",
  },
  {
    icon: <GraduationCap size={24} className="text-purple-600" />,
    displayValue: "+17",
    label: "Alunos no curso pós-congresso",
    gradient: "from-purple-50/90 to-violet-50/70 border-purple-200/80",
    badge: "Educação",
  },
];

export default function Stats() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 2800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: false,
      duration: 35,
    },
    [autoplayRef.current]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="stats" className="relative py-16 sm:py-24 overflow-hidden w-full">
      {/* Header Container */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-4">
          <Sparkles size={12} className="text-primary animate-pulse" />
          Resultados Oficiais
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          CIPMP 2026 em números
        </h2>
        <p className="mt-3 text-muted text-sm sm:text-base max-w-lg mx-auto">
          Arraste para os lados ou use as setas para navegar pelo impacto da 1ª edição.
        </p>
      </div>

      {/* Full-bleed Edge-to-Edge Infinite Carousel Container */}
      <div className="relative w-full group">
        {/* Centered Left Arrow */}
        <button
          onClick={scrollPrev}
          aria-label="Card anterior"
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-900/10 text-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Centered Right Arrow */}
        <button
          onClick={scrollNext}
          aria-label="Próximo card"
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-900/10 text-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>

        {/* Gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-background via-background/60 to-transparent z-10" />

        {/* Embla Viewport */}
        <div
          className="overflow-hidden w-full cursor-grab active:cursor-grabbing px-6 sm:px-12 md:px-16"
          ref={emblaRef}
        >
          <div className="flex gap-4 sm:gap-5 py-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`
                  flex flex-col justify-between shrink-0 w-[240px] sm:w-[270px] md:w-[290px] h-[210px] sm:h-[220px] p-6 sm:p-7
                  rounded-3xl border bg-gradient-to-br ${s.gradient} shadow-sm backdrop-blur-sm
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40 group/card select-none
                `}
              >
                {/* Card Top: Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 shadow-sm border border-black/5 transition-transform duration-300 group-hover/card:scale-110">
                    {s.icon}
                  </div>
                  {s.badge && (
                    <span className="rounded-full bg-white/80 border border-black/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700 shadow-2xs">
                      {s.badge}
                    </span>
                  )}
                </div>

                {/* Card Bottom: Big Number and Label */}
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-none">
                    {s.displayValue}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-muted leading-snug">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
