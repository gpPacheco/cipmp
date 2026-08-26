"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, HandHelping } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

const slides: Slide[] = [
  {
    src: "/e1.PNG",
    alt: "Foto do evento CIPMP 2026 - Abertura",
    caption: "Abertura oficial do 1º CIPMP",
    tag: "Cerimônia",
  },
  {
    src: "/e3.PNG",
    alt: "Foto do evento CIPMP 2026 - Networking",
    caption: "Conexões e networking entre profissionais",
    tag: "Networking",
  },
  // Libras / Acessibilidade slide
  {
    src: "/e1.PNG",
    alt: "Intérprete de Libras durante palestra do CIPMP 2026",
    caption: "Tradução simultânea em Libras em todas as palestras",
    tag: "Libras & Acessibilidade",
    isAccessibility: true,
  } as Slide & { isAccessibility?: boolean },
];

// Accessibility card inline within carousel
function AccessibilityBadge() {
  return (
    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-emerald-600/90 px-3 py-1.5 backdrop-blur-sm shadow-lg">
      <HandHelping size={14} className="text-white" />
      <span className="text-white text-xs font-semibold tracking-wide">Evento Acessível · Libras</span>
    </div>
  );
}

export default function HighlightsCarousel() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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
    <section id="galeria" className="relative py-16 sm:py-20 overflow-hidden bg-foreground/[0.02]">
      {/* Diagonal stripe decoration top */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-16 -z-10"
        style={{ background: "var(--color-background)", clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Galeria
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Momentos que ficaram
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto text-sm sm:text-base">
            Uma retrospectiva visual do dia que marcou a história da Podologia
            e Medicina no interior paulista.
          </p>
        </div>
      </div>

      {/* Embla carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 px-[max(1.5rem,calc(50%-320px))] sm:px-[max(2rem,calc(50%-380px))]">
            {slides.map((slide, i) => {
              const isActive = i === selectedIndex;
              const typedSlide = slide as Slide & { isAccessibility?: boolean };

              return (
                <div
                  key={i}
                  className={`
                    relative shrink-0 w-[min(90vw,640px)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"}
                  `}
                >
                  {/* Diagonal clip container */}
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/15"
                    style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)" }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={640}
                      height={400}
                      sizes="(max-width: 768px) 90vw, 640px"
                      className="w-full h-auto aspect-[16/10] object-cover"
                      priority={i === 0}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Accessibility badge */}
                    {typedSlide.isAccessibility && <AccessibilityBadge />}

                    {/* Caption */}
                    {slide.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        {slide.tag && (
                          <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
                            {slide.tag}
                          </span>
                        )}
                        <p className="text-white text-sm font-semibold leading-snug drop-shadow-sm">
                          {slide.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Slide anterior"
          className="absolute left-4 sm:left-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Próximo slide"
          className="absolute right-4 sm:right-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-border hover:bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Accessibility highlight block */}
      <div className="max-w-5xl mx-auto px-6 mt-14">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 sm:p-10">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/10" />
          <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-teal-400/10" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 border border-emerald-200">
              <HandHelping size={28} className="text-emerald-700" />
            </div>
            <div className="flex-1">
              <span className="inline-block mb-2 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
                Acessibilidade &amp; Inclusão
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Tradução simultânea em Libras em todo o evento
              </h3>
              <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
                O CIPMP 2026 garantiu cobertura em Língua Brasileira de Sinais (Libras) durante
                todas as palestras, reafirmando seu compromisso com a acessibilidade e a inclusão
                de profissionais e participantes surdos ou com deficiência auditiva.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal stripe decoration bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 -z-10"
        style={{ background: "var(--color-background)", clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
