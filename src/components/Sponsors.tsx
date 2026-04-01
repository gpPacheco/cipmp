import Image from "next/image";
import Marquee from "@/components/Marquee";

const sponsors = [
  { name: "Qben", src: "/logo Qben .png" },
  { name: "Humecta", src: "/logo humecta.png" },
];

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="relative py-24 sm:py-32 px-6 overflow-hidden">
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
          <Image
            src="/logo_evento.png"
            alt="Logo principal do evento"
            width={220}
            height={72}
            className="h-14 w-auto mx-auto"
            priority
          />
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Patrocinadores
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed text-pretty">
            Marcas que acreditam na integração entre medicina e podologia para elevar a qualidade do cuidado clínico.
          </p>
        </div>

        <div className="mt-10">
          <Marquee />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="group rounded-2xl border border-border/70 bg-white/45 px-8 py-10 flex items-center justify-center transition-all duration-300 hover:border-primary/40 hover:bg-white/70"
            >
              <Image
                src={sponsor.src}
                alt={`Logo ${sponsor.name}`}
                width={220}
                height={88}
                className="h-16 w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
