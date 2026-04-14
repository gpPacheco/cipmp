import Image from "next/image";

const sponsors = [
  { name: "Cuore", src: "/Logo_CUORE.png", logoHeightClass: "h-18 sm:h-22" },
  { name: "Humecta", src: "/logo humecta.png", logoHeightClass: "h-24 sm:h-28" },
  { name: "Qben", src: "/logo Qben .png", logoHeightClass: "h-26 sm:h-30" },
  { name: "Anatofeet", src: "/Logo_Anatofeet.png", logoHeightClass: "h-26 sm:h-30" },
];

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="relative py-12 sm:py-16 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-16 -bottom-16 opacity-[0.05]">
          <Image
            src="/logo_evento.png"
            alt="Marca d'água do congresso"
            width={520}
            height={180}
            className="h-auto w-[min(58vw,520px)]"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="mt-6 text-4xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Patrocinadores
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="px-6 py-6 flex items-center justify-center"
            >
              <Image
                src={sponsor.src}
                alt={`Logo ${sponsor.name}`}
                width={220}
                height={88}
                className={`${sponsor.logoHeightClass} w-auto object-contain`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
