"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: true,
    },
    [autoplayRef.current]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="stats" className="relative py-16 sm:py-24 overflow-hidden w-full">
      {/* Header Container */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-4">
          <Sparkles size={12} className="text-primary animate-pulse" />
          Resultados Oficiais
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          CIPMP 2026 em números
        </h2>
        <p className="mt-3 text-muted text-sm sm:text-base max-w-lg mx-auto">
          Arraste para os lados e confira os números consolidados que marcaram o sucesso da 1ª edição.
        </p>

        {/* Navigation Arrows Controls */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={scrollPrev}
            aria-label="Card anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:bg-primary hover:text-white hover:border-primary active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs text-muted font-medium px-2">13 métricas de impacto</span>
          <button
            onClick={scrollNext}
            aria-label="Próximo card"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:bg-primary hover:text-white hover:border-primary active:scale-95 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Full-bleed Edge-to-Edge Carousel */}
      <div className="relative w-full">
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Embla Viewport */}
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing px-4 sm:px-8" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-5 py-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`
                  flex flex-col justify-between shrink-0 w-[240px] sm:w-[270px] md:w-[290px] h-[210px] sm:h-[220px] p-6 sm:p-7
                  rounded-3xl border bg-gradient-to-br ${s.gradient} shadow-sm backdrop-blur-sm
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40 group
                `}
              >
                {/* Card Top: Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 shadow-sm border border-black/5 transition-transform duration-300 group-hover:scale-110">
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
