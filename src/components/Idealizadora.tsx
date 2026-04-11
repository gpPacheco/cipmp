"use client";

import Image from "next/image";

export default function Idealizadora() {
  return (
    <section id="idealizadora" className="py-6 sm:py-8 px-4 sm:px-3">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
          Idealizadora do evento
        </h2>
        <div className="mt-15 flex flex-col items-center justify-center gap-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <Image
              src="/e3.PNG"
              alt="Rita Pacheco - Idealizadora do evento"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain scale-[1.80] rounded-[20px]"
              style={{ objectPosition: "center 30%" }}
              priority
            />
          </div>
          <div className="mt-0.5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] uppercase tracking-[0.05em] leading-snug">
              Rita Pacheco
            </h3>
            <p className="mt-2 text-base text-muted max-w-xl mx-auto">
              Idealizadora e organizadora do 1º CIPMP. Referência em podologia e medicina preventiva, 
              responsável por conectar profissionais e promover inovação no interior paulista.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
