"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";

interface Speaker {
  name: string;
  specialty: string;
  photo: string;
}

const speakers: Speaker[] = [
  {
    name: "Dra. Camila Ribeiro",
    specialty: "Dermatologia Podológica",
    photo: "/p1.PNG",
  },
  {
    name: "Dr. André Martins",
    specialty: "Ortopedia & Biomecânica",
    photo: "/p2.PNG",
  },
  {
    name: "Prof. Lucas Almeida",
    specialty: "Fisioterapia Esportiva",
    photo: "/p3.PNG",
  },
  {
    name: "Dra. Juliana Costa",
    specialty: "Cirurgia Podológica",
    photo: "/p4.PNG",
  },
  {
    name: "Dr. Rafael Souza",
    specialty: "Angiologia Clínica",
    photo: "/p5.PNG",
  },
  {
    name: "Dra. Fernanda Lima",
    specialty: "Endocrinologia & Diabetes",
    photo: "/p6.PNG",
  },
  {
    name: "Dr. Paulo Henrique",
    specialty: "Tecnologia em Saúde",
    photo: "/p7.PNG",
  },
  {
    name: "Dra. Beatriz Nunes",
    specialty: "Pesquisa Clínica",
    photo: "/p8.PNG",
  },
  {
    name: "Dra. Larissa Menezes",
    specialty: "Neuropatias do pé diabético",
    photo: "/p9.PNG",
  },
  {
    name: "Dr. Thiago Albuquerque",
    specialty: "Ultrassonografia musculoesquelética",
    photo: "/p10.PNG",
  },
  {
    name: "Dra. Valentina Prado",
    specialty: "Reabilitação funcional",
    photo: "/p11.PNG",
  },
  {
    name: "Prof. Renato Sampaio",
    specialty: "Biomecânica aplicada ao esporte",
    photo: "/p12.PNG",
  },
];

export default function Speakers() {
  const loopSpeakers = [...speakers, ...speakers, ...speakers];
  const pastelBackgrounds = [
    "bg-gradient-to-br from-[#D8C5E8] to-[#E8D4C8]",
    "bg-gradient-to-br from-[#C8DDE8] to-[#D8E5F0]",
    "bg-gradient-to-br from-[#D4E8D8] to-[#D8E8D8]",
    "bg-gradient-to-br from-[#E8DCC8] to-[#F0E8D8]",
    "bg-gradient-to-br from-[#DCE5F0] to-[#E8DCP8]",
    "bg-gradient-to-br from-[#E8D4D8] to-[#F0D8E0]",
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const cardWidthRef = useRef(0);
  const loopWidthRef = useRef(0);
  const manualOffsetRef = useRef(0);
  const manualAnimRef = useRef<{
    from: number;
    to: number;
    start: number;
    duration: number;
  } | null>(null);

  const normalizeLoopPosition = (position: number) => {
    const loopWidth = loopWidthRef.current;
    if (!loopWidth) return position;

    let normalized = position;
    const min = loopWidth;
    const max = loopWidth * 2;

    while (normalized >= max) {
      normalized -= loopWidth;
    }

    while (normalized < min) {
      normalized += loopWidth;
    }

    return normalized;
  };

  const calculateCardWidth = (element: HTMLDivElement) => {
    const cards = element.querySelectorAll("article");
    const firstCard = cards[0] as HTMLElement | undefined;
    const secondCard = cards[1] as HTMLElement | undefined;

    if (firstCard && secondCard) {
      cardWidthRef.current = secondCard.offsetLeft - firstCard.offsetLeft;
    } else if (firstCard) {
      cardWidthRef.current = firstCard.getBoundingClientRect().width;
    }

    loopWidthRef.current = element.scrollWidth / 3;
  };

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    calculateCardWidth(element);
    if (loopWidthRef.current > 0) {
      scrollPositionRef.current = loopWidthRef.current;
      element.scrollLeft = scrollPositionRef.current;
    }

    const resizeObserver = new ResizeObserver(() => {
      calculateCardWidth(element);
      scrollPositionRef.current = normalizeLoopPosition(scrollPositionRef.current);
      element.scrollLeft = scrollPositionRef.current;
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    let frameId = 0;
    let lastTimestamp = 0;
    const speedPerSecond = 2;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      let manualStep = 0;
      const anim = manualAnimRef.current;
      if (anim) {
        const progress = Math.min(1, (timestamp - anim.start) / anim.duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentOffset = anim.from + (anim.to - anim.from) * eased;
        manualStep = currentOffset - manualOffsetRef.current;
        manualOffsetRef.current = currentOffset;

        if (progress >= 1) {
          manualAnimRef.current = null;
        }
      }

      const nextPosition = normalizeLoopPosition(
        scrollPositionRef.current + (delta * speedPerSecond) / 1000 + manualStep,
      );

      scrollPositionRef.current = nextPosition;

      element.scrollLeft = scrollPositionRef.current;
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const handleManualScroll = (direction: "prev" | "next") => {
    if (!Number.isFinite(cardWidthRef.current) || cardWidthRef.current <= 0) return;

    const cardWidth = cardWidthRef.current;
    const step = direction === "next" ? cardWidth : -cardWidth;
    const from = manualOffsetRef.current;
    const to = from + step;

    manualAnimRef.current = {
      from,
      to,
      start: performance.now(),
      duration: 280,
    };
  };

  return (
    <section id="palestrantes" className="py-16 sm:py-20 px-4 sm:px-6">
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
            aria-label="Anterior"
            className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DC] bg-white text-[#243342] shadow-md transition-all hover:border-[#B8BFC8] hover:bg-[#F5F7FA] sm:left-4 sm:h-12 sm:w-12"
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
            aria-label="Próximo"
            className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D0D5DC] bg-white text-[#243342] shadow-md transition-all hover:border-[#B8BFC8] hover:bg-[#F5F7FA] sm:right-4 sm:h-12 sm:w-12"
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

          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-scroll px-[calc(50%-130px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-12"
            >
              {loopSpeakers.map((s, index) => (
                <article
                  key={`${s.photo}-${index}`}
                  className="group flex flex-col shrink-0"
                  style={{ width: "260px" }}
                >
                  <div
                    className={`relative aspect-square overflow-hidden rounded-3xl border border-[#E0E5EC] ${pastelBackgrounds[index % pastelBackgrounds.length]} transition-transform duration-300 group-hover:scale-[1.02]`}
                  >
                    <Image
                      src={s.photo}
                      alt={`Foto de ${s.name}`}
                      fill
                      sizes="260px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="pt-5 text-center">
                    <h3 className="text-base font-bold text-foreground uppercase tracking-[-0.01em] text-balance">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-xs text-muted uppercase leading-relaxed tracking-widest text-pretty">
                      {s.specialty}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
