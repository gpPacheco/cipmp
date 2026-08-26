"use client";

import Image from "next/image";
import { Camera, ExternalLink, HandHelping, Sparkles, Download, ArrowUpRight } from "lucide-react";

export interface AccessibilityAndGalleryProps {
  librasPhotoUrl?: string;
  photosAlbumUrl?: string;
  className?: string;
}

export default function AccessibilityAndGallery({
  librasPhotoUrl = "/interprete-libras.jpg",
  photosAlbumUrl = "https://artur75.pixieset.com/1ocipmpfotosoficiais/",
  className = "",
}: AccessibilityAndGalleryProps) {
  return (
    <section
      id="acessibilidade-e-galeria"
      className={`relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            <Sparkles size={12} className="text-primary animate-pulse" />
            Destaques &amp; Memórias
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Inclusão e Memórias do CIPMP 2026
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base max-w-xl mx-auto">
            Compromisso com a acessibilidade universal e acesso ao acervo fotográfico completo em alta resolução.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
          {/* ── CARD 1: Acessibilidade & Libras ── */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/50 p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:shadow-2xl hover:border-emerald-300">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800 mb-6 border border-emerald-200/60">
                <HandHelping size={14} className="text-emerald-700" />
                Acessibilidade &amp; Inclusão
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                Comunicação para Todos:{" "}
                <span className="text-emerald-700">Tradução Simultânea em Libras</span>
              </h3>

              {/* Text */}
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                O 1º CIPMP garantiu tradução simultânea em Língua Brasileira de Sinais (Libras) em 100%
                das palestras e momentos científicos. Uma iniciativa indispensável para assegurar a
                participação plena de profissionais e estudantes surdos ou com deficiência auditiva,
                reafirmando que a ciência e a saúde pertencem a todas as pessoas.
              </p>
            </div>

            {/* Photo Card with Frame */}
            <div className="mt-8 relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-950 shadow-md group">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={librasPhotoUrl}
                  alt="Intérprete de Libras durante a tradução simultânea no CIPMP 2026"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating caption on image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Cobertura Integral
                    </p>
                    <p className="text-sm font-bold text-white drop-shadow-sm">
                      Tradução em tempo real no palco principal
                    </p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300">
                    <HandHelping size={16} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 2: Acervo Completo de Fotos ── */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-900 p-6 sm:p-8 md:p-10 shadow-2xl text-white overflow-hidden transition-all duration-300 hover:border-slate-700">
            {/* Subtle glow circle inside */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            />

            <div>
              {/* Top Tags & Stats */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white border border-white/15 backdrop-blur-md">
                  <Camera size={14} className="text-primary-300" />
                  Álbum Oficial
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-200 border border-primary/30">
                  <Sparkles size={12} />
                  +100 GB de memórias
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Acesse o Álbum Oficial do Evento
              </h3>

              {/* Text */}
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Todas as fotos e momentos capturados em alta resolução estão disponíveis para visualização
                e download. Reviva cada palestra, interação nos estandes, networking e a celebração desse marco
                da medicina e podologia.
              </p>

              {/* Feature Highlights Grid */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Download size={14} />
                    Download Gratuito
                  </div>
                  <p className="text-xs text-slate-400">
                    Arquivos em alta definição prontos para salvar e compartilhar
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Camera size={14} />
                    Galeria Completa
                  </div>
                  <p className="text-xs text-slate-400">
                    Cobertura de todos os palestrantes, público e bastidores
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Block */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <a
                href={photosAlbumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-pulse flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:bg-primary-dark active:scale-[0.98]"
              >
                <span>Ver Todas as Fotos</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <p className="mt-3 text-center text-[11px] text-slate-400">
                Plataforma oficial Pixieset · Acesso livre e ilimitado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
