"use client";

// ─── Embaixadora do evento ────────────────────────────────────────────────────
// Bruna Letícia removida permanentemente.
// e2.PNG não é mais referenciado neste componente.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";

interface Ambassador {
  name: string;
  photo: string;
}

const ambassadors: Ambassador[] = [
  {
    name: "Nádia Andrade",
    photo: "/e3.PNG", // e2.PNG removido — use outra imagem se necessário
  },
];

export default function Ambassadors() {
  return (
    <section id="embaixadores" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
            Embaixadora do evento
          </h2>
        </div>

        <div className="mt-16 flex justify-center">
          {ambassadors.map((ambassador) => (
            <article
              key={ambassador.name}
              className="group flex flex-col items-center w-full max-w-xs"
              itemScope
              itemType="https://schema.org/Person"
              title={`${ambassador.name} | Embaixadora do 1º CIPMP - 2026`}
            >
              <meta itemProp="knowsAbout" content="medicina do esporte" />
              <meta itemProp="knowsAbout" content="podologia" />

              <div className="relative w-full aspect-square rounded-[20px] overflow-visible -mb-8 transition-transform duration-300 ease-out group-hover:-translate-y-3">
                <Image
                  src={ambassador.photo}
                  alt={`${ambassador.name} - Embaixadora do evento`}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover scale-[1.3] -translate-y-8 transition-transform duration-300 ease-out group-hover:scale-[1.4] group-hover:-translate-y-10 rounded-[20px]"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>

              <div className="text-center pt-12 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] uppercase tracking-[0.05em] leading-snug">
                  {ambassador.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
