"use client";

import Image from "next/image";

interface Ambassador {
  name: string;
  photo: string;
}

const ambassadors: Ambassador[] = [
  {
    name: "Bruna Letícia",
    photo: "/e1.PNG",
  },
    {
    name: "Rita Pacheco",
    photo: "/e3.PNG",
  },
  {
    name: "Nádia Andrade",
    photo: "/e2.PNG",
  },
];

export default function Ambassadors() {
  return (
    <section id="embaixadores" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
            Embaixadores do Evento
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed text-pretty">
            Personalidades que representam os valores de excelência, inovação e liderança.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {ambassadors.map((ambassador) => (
            <div
              key={ambassador.name}
              className="group flex flex-col items-center"
            >
              {/* Image Container with gradient and overflow visible */}
              <div className="relative w-full aspect-square rounded-[20px] overflow-visible shadow-xl -mb-8 transition-transform duration-300 ease-out group-hover:-translate-y-3">
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-[20px] bg-linear-to-b from-white via-white to-[#F0F4F8]" />

                {/* Image overlay */}
                <Image
                  src={ambassador.photo}
                  alt={`Foto de ${ambassador.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover scale-[1.3] -translate-y-8 transition-transform duration-300 ease-out group-hover:scale-[1.4] group-hover:-translate-y-10 rounded-[20px]"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>

              {/* Text Container */}
              <div className="text-center pt-12 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] uppercase tracking-[0.05em] leading-snug">
                  {ambassador.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
