"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroObrigado() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background px-6 py-20 text-center"
    >
      {/* Subtle grid matching globals.css */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,32,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(22,32,42,0.025) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Soft radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[36rem] w-[56rem] rounded-full bg-primary/5 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-teal/5 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo_evento.png"
            alt="Logo CIPMP 2026"
            width={480}
            height={140}
            className="h-auto w-[min(80vw,480px)]"
            priority
          />
        </div>

        {/* Edition badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          1ª Edição · 22 de agosto de 2026 · Franca, SP
        </div>

        {/* Giant headline without period */}
        <h1 className="text-[clamp(4rem,17vw,13rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] text-foreground">
          OBRIGADO
        </h1>

        {/* "Nos vemos em" + solid black "2027" */}
        <div className="mt-4 flex flex-col items-center gap-1 select-none" aria-label="Nos vemos em 2027">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            Nos vemos em
          </span>
          <p className="text-[clamp(3.5rem,14vw,11rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] text-black">
            2027
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 mb-8 h-px w-20 bg-border" />

        {/* Subtitle */}
        <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-muted">
          A edição de 2026 chegou ao fim. Foram dias inesquecíveis. Agradecemos
          a todos os participantes, palestrantes e parceiros por tornarem o
          CIPMP&nbsp;2026 histórico.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/edicao-2026"
            className="group btn-pulse inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-dark hover:gap-4 active:scale-[0.98]"
          >
            Confira a Edição 2026
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href="#galeria"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 text-sm font-semibold text-foreground/70 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:text-foreground"
          >
            Ver Galeria
          </a>
        </div>
      </div>

      {/* Bottom fade into the rest of the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
