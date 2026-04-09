"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

interface Speaker {
  name: string;
  specialty: string;
  photo: string;
}

const speakers: Speaker[] = [
  {
    name: "Rogério de Augusto",
    specialty: "Fisioterapeuta Sesi Franca Basquete",
    photo: "/p1.PNG",
  },
  {
    name: "Dr. Marcelo Cruz",
    specialty: "Ortopedia & Traumatologia",
    photo: "/p2.PNG",
  },
  {
    name: "Dra. Maria Eugênia",
    specialty: "Médica Pediatra",
    photo: "/p3.PNG",
  },
  {
    name: "Maristela Borges",
    specialty: "Nutricionista",
    photo: "/p4.PNG",
  },
  // {
  //   name: "Dr. ",
  //   specialty: "",
  //   photo: "/p5.PNG",
  // },
  {
    name: "Dr. Fernando Raymundo",
    specialty: "Médico Vascular",
    photo: "/p6.PNG",
  },
  // {
  //   name: "",
  //   specialty: "",
  //   photo: "/p7.PNG",
  // },
  {
    name: "Haiani Mendes",
    specialty: "Enfermeira Estomoterapeuta",
    photo: "/p8.PNG",
  },
];
  // {
  //   name: "",
  //   specialty: "",
  //   photo: "/p11.PNG",
  // },

export default function Speakers() {
  const speakerCardGradient =
    "bg-gradient-to-r from-[#F4C4A8] to-[#C8D5F0]";
  const autoplayResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: true,
      loop: true,
    },
    [
      Autoplay({
        delay: 2800,
        playOnInit: true,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const handlePointerDown = () => {
      setIsDragging(true);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);
    emblaApi.on("settle", handlePointerUp);

    return () => {
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
      emblaApi.off("settle", handlePointerUp);
    };
  }, [emblaApi]);

  useEffect(() => {
    return () => {
      if (autoplayResumeTimeoutRef.current) {
        clearTimeout(autoplayResumeTimeoutRef.current);
      }
    };
  }, []);

  const handleManualScroll = (direction: "prev" | "next") => {
    const autoplay = emblaApi?.plugins().autoplay;

    autoplay?.stop();

    if (autoplayResumeTimeoutRef.current) {
      clearTimeout(autoplayResumeTimeoutRef.current);
      autoplayResumeTimeoutRef.current = null;
    }

    if (direction === "next") {
      emblaApi?.scrollNext();
    } else {
      emblaApi?.scrollPrev();
    }

    autoplayResumeTimeoutRef.current = setTimeout(() => {
      autoplay?.play();
      autoplayResumeTimeoutRef.current = null;
    }, 6500);
  };

  return (
    <section id="palestrantes" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#E1F3FE] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1F6C9F]">
            Curadoria Científica
          </span>
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
            Palestrantes confirmados
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed text-pretty">
            Especialistas de medicina e podologia em uma curadoria pensada para prática clínica e tomada de decisão.
          </p>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={() => handleManualScroll("prev")}
            disabled={isDragging}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DC] bg-white text-[#243342] shadow-md transition-all hover:border-[#B8BFC8] hover:bg-[#F5F7FA] disabled:opacity-50 sm:left-4 sm:h-12 sm:w-12"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => handleManualScroll("next")}
            disabled={isDragging}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DC] bg-white text-[#243342] shadow-md transition-all hover:border-[#B8BFC8] hover:bg-[#F5F7FA] disabled:opacity-50 sm:right-4 sm:h-12 sm:w-12"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="overflow-visible">
            <div
              ref={emblaRef}
              className={`overflow-visible px-[calc(50%-130px)] sm:px-12 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            >
              <div className="-ml-5 flex items-stretch sm:-ml-6">
              {speakers.map((s) => (
                <article
                  key={s.photo}
                  className="group flex h-full min-w-65 flex-[0_0_auto] pl-5 transition-none sm:pl-6"
                >
                  {/* Card Container with shadow */}
                  <div className="flex h-105 w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                    {/* Image Area with gradient background */}
                    <div
                      className={`relative h-62.5 overflow-hidden border-b border-[#E0E5EC] ${speakerCardGradient}`}
                    >
                      {/* Image positioned to project head above card boundary */}
                      <Image
                        src={s.photo}
                        alt={`Foto de ${s.name}`}
                        fill
                        sizes="260px"
                        className="mt-12 object-cover scale-[1.1] -translate-y-10 transition-transform duration-300 ease-out group-hover:-translate-y-12"
                        style={{ objectPosition: "center 20%" }}
                      />
                    </div>

                    {/* Text Area - White background */}
                    <div className="flex flex-1 flex-col justify-between px-6 py-5 text-center">
                      <h3 className="line-clamp-2 flex min-h-10 items-center justify-center text-sm font-bold uppercase leading-snug tracking-[0.05em] text-[#1a1a1a] text-balance">
                        {s.name}
                      </h3>
                      <p className="mt-3 line-clamp-2 flex min-h-9 items-center justify-center text-[11px] uppercase leading-tight tracking-[0.08em] text-[#6b7280] text-pretty">
                        {s.specialty}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
