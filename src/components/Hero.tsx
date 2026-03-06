"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      {/* Decorative soft gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />
      </div>

      {/* Event badge */}
      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
        1ª Edição · 2026
      </span>

      {/* Logo / Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl">
        <span className="text-primary">CIPMP</span>{" "}
        <span className="text-teal">–</span>{" "}
        <span className="block sm:inline">MedPodo Interior</span>
      </h1>

      <p className="mt-6 text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
        O 1º Congresso de Integração entre Podologia e Medicina do interior
        paulista. Uma experiência imersiva que une ciência, tecnologia e
        prática clínica — em Franca, SP.
      </p>

      {/* CTA */}
      <a
        href="#inscricao"
        className="btn-pulse mt-10 inline-flex items-center gap-2 bg-primary text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-primary-dark transition-colors"
      >
        Garanta sua vaga
      </a>

      {/* Scroll hint */}
      <button
        onClick={() =>
          document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-16 text-muted animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
