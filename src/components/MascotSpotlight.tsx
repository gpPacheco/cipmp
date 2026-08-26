"use client";

import Image from "next/image";

export default function MascotSpotlight() {
  return (
    <section id="mascote" className="relative py-16 sm:py-20 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Identidade do Evento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            O Mascote Oficial do CIPMP
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto text-sm sm:text-base">
            Uma identidade visual única que marcou cada momento da edição 2026.
          </p>
        </div>

        {/* Video + text layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Mascot image */}
          <div className="relative group flex justify-center">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-teal/20 to-primary/10 blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-xl shadow-slate-900/10">
              <Image
                src="/mascote.jpg"
                alt="Mascote oficial do CIPMP 2026 — personagem em formato de pé simpático feito em massinha"
                width={640}
                height={360}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-white text-xs font-medium">
                  Mascote Oficial · CIPMP 2026
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
              Mais que um símbolo —{" "}
              <span className="text-primary">uma personalidade.</span>
            </h3>
            <p className="text-muted leading-relaxed">
              O mascote do 1º CIPMP nasceu como um elemento de originalidade e
              pertencimento. Presente em toda a comunicação visual do evento,
              ele traduz a essência do congresso: a integração entre ciência,
              cuidado e inovação no campo da Podologia e Medicina.
            </p>
            <p className="text-muted leading-relaxed">
              Durante o congresso, o mascote ganhou vida e se tornou um dos
              pontos mais fotografados e comentados pelos participantes —
              reforçando a identidade única de uma edição que ficará marcada
              na memória de todos.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                "Identidade Visual Única",
                "Presença Marcante",
                "Símbolo da Edição 2026",
                "Elemento de Conexão",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
