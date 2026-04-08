"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-dvh flex-col items-center justify-start px-4 pt-12 pb-8 text-center sm:px-6 sm:pt-16 sm:pb-10">
      {/* Decorative soft gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-100 w-100 rounded-full bg-teal/5 blur-3xl" />
      </div>

      {/* Event badge */}
      <span className=" mt-10 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
        1ª Edição · 22 de agosto de 2026
      </span>

      <Image
        src="/logo_evento.png"
        alt="Logo principal do evento"
        width={920}
        height={268}
        className="mx-auto h-auto w-[min(96vw,920px)]"
        priority
      />

      <div className="mt-6 grid w-full max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-[1.25rem] bg-white/65 px-5 py-4 text-center ring-1 ring-black/5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">Evento</p>
          <p className="mt-2 text-sm font-semibold tracking-[-0.01em] text-foreground">Congresso do Interior Paulista de Medicina e Podologia</p>
        </div>
        <div className="rounded-[1.25rem] bg-white/65 px-5 py-4 text-center ring-1 ring-black/5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">Local</p>
          <p className="mt-2 text-sm font-semibold tracking-[-0.01em] text-foreground">Franca, SP</p>
        </div>
        <div className="rounded-[1.25rem] bg-white/65 px-5 py-4 text-center ring-1 ring-black/5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">Formato</p>
          <p className="mt-2 text-sm font-semibold tracking-[-0.01em] text-foreground">Imersão em ciência e prática clínica</p>
        </div>
      </div>

      <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.02em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
        Integração entre medicina, podologia e tecnologia aplicada ao cuidado.
      </h1>

      <p className="mt-6 text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
        O 1º Congresso de Integração entre Podologia e Medicina do interior
        paulista. Uma experiência imersiva que une ciência, tecnologia e
        prática clínica em Franca, SP.
      </p>

      {/* CTA */}
      <a
        href="#inscricao"
        className="group btn-pulse mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary-dark active:scale-[0.98]"
      >
        Garanta sua vaga
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105">
          ↗
        </span>
      </a>

      {/* Scroll hint */}
      <button
        onClick={() =>
          document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-10 rounded-md bg-white/70 p-3 text-muted ring-1 ring-black/5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
        aria-label="Rolar para baixo"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m7 14 5 5 5-5" />
        </svg>
      </button>
    </section>
  );
}
