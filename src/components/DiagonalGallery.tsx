"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/galeria/foto-1.jpg",
    alt: "Materiais ortopédicos, palmilhas e anatomia do pé no CIPMP 2026",
    tag: "Prática Clínica",
    title: "Inovação & Biomecânica",
    description: "Exposição de tecnologias e recursos modernos",
  },
  {
    id: 2,
    src: "/galeria/foto-2.jpg",
    alt: "Palestrante no palco do congresso CIPMP 2026",
    tag: "Científico",
    title: "Palcos & Conhecimento",
    description: "Grandes nomes da medicina e podologia",
  },
  {
    id: 3,
    src: "/galeria/foto-3.jpg",
    alt: "Participantes registrando momentos do evento no celular",
    tag: "Comunidade",
    title: "Networking & Memórias",
    description: "Conexões reais e registros inesquecíveis",
  },
  {
    id: 4,
    src: "/galeria/foto-4.jpg",
    alt: "Auditório lotado com público celebrando o encerramento do CIPMP 2026",
    tag: "Encerramento",
    title: "Auditório & Energia",
    description: "Uma edição histórica com mais de 100 participantes",
  },
];

export default function DiagonalGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/50 to-background"
      />

      {/* Header */}
      <div className="mx-auto max-w-5xl mb-12 sm:mb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-4">
          <Sparkles size={12} className="text-primary animate-pulse" />
          Galeria · Edição 2026
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Momentos que ficaram
        </h2>
        <p className="mt-3 text-muted text-sm sm:text-base max-w-xl mx-auto">
          Clique para ver a cobertura completa de 2026
        </p>
      </div>

      {/* Interactive Accordion - Straight Vertical Columns */}
      <div className="mx-auto max-w-7xl">
        <div
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative flex flex-col md:flex-row h-[620px] md:h-[520px] lg:h-[560px] w-full gap-3 sm:gap-4 p-2.5 sm:p-3.5 rounded-3xl bg-card/60 border border-border/80 shadow-xl shadow-slate-900/5 backdrop-blur-sm"
        >
          {galleryItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const hasActiveHover = hoveredIndex !== null;

            return (
              <Link
                key={item.id}
                href="/edicao-2026"
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                aria-label={`${item.title} - Ver detalhes na Edição 2026`}
                className={`
                  group relative flex-1 overflow-hidden rounded-2xl md:rounded-3xl border border-white/20
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer bg-slate-900
                  ${
                    isHovered
                      ? "md:flex-[2.5] shadow-2xl z-20 brightness-100"
                      : hasActiveHover
                      ? "md:flex-[0.8] opacity-80 brightness-75 grayscale-[30%] z-10"
                      : "md:flex-1 brightness-75 z-10"
                  }
                `}
              >
                {/* Photo container */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={index === 0}
                  className={`
                    object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isHovered ? "scale-105" : "scale-100"}
                  `}
                />

                {/* Gradient overlays */}
                <div
                  className={`
                    absolute inset-0 transition-opacity duration-500
                    bg-gradient-to-t from-black/90 via-black/35 to-black/15
                    ${isHovered ? "opacity-70" : "opacity-85"}
                  `}
                />

                {/* Hover indicator glow on border */}
                <div
                  className={`
                    absolute inset-0 border-2 rounded-2xl md:rounded-3xl transition-opacity duration-500 pointer-events-none
                    ${isHovered ? "border-primary/70 opacity-100" : "border-transparent opacity-0"}
                  `}
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white border border-white/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item.tag}
                  </span>
                </div>

                {/* Top-Right Arrow Icon */}
                <div
                  className={`
                    absolute top-4 right-4 sm:top-6 sm:right-6 z-20
                    flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20
                    transition-all duration-300
                    ${isHovered ? "scale-110 bg-primary text-white border-primary opacity-100" : "opacity-75"}
                  `}
                >
                  <ArrowUpRight size={16} />
                </div>

                {/* Bottom Text Content */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-20 flex flex-col justify-end text-white">
                  <h3
                    className={`
                      font-bold leading-tight tracking-tight transition-all duration-300 text-balance
                      ${isHovered ? "text-lg sm:text-xl lg:text-2xl text-white" : "text-base sm:text-lg text-white/90"}
                    `}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      mt-1.5 text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed transition-all duration-500
                      ${isHovered ? "opacity-100 max-h-16 translate-y-0" : "opacity-75 max-h-12 md:opacity-0 md:max-h-0 md:translate-y-2"}
                    `}
                  >
                    {item.description}
                  </p>

                  {/* Call to action label on hover */}
                  <div
                    className={`
                      mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary-200 transition-all duration-300
                      ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none hidden md:flex"}
                    `}
                  >
                    <span>Explorar retrospectiva</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Global CTA button */}
        <div className="mt-12 text-center">
          <Link
            href="/edicao-2026"
            className="group btn-pulse inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-dark hover:gap-4 active:scale-[0.98]"
          >
            Ver acervo completo da Edição 2026
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
