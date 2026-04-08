"use client";

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
  // {
  //   name: "",
  //   specialty: "",
  //   photo: "/p3.PNG",
  // },
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
  const loopSpeakers = [...speakers, ...speakers, ...speakers];
  const speakerCardGradient =
    "bg-gradient-to-r from-[#F4C4A8] to-[#C8D5F0]";

  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidthRef = useRef(0);
  const loopWidthRef = useRef(0);
  const dragStartRef = useRef(0);
  const dragActiveRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

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

  const calculateMetrics = (element: HTMLDivElement) => {
    const cards = element.querySelectorAll("article");
    const firstCard = cards[0] as HTMLElement | undefined;
    const secondCard = cards[1] as HTMLElement | undefined;
    const firstCardOfSecondLoop = cards[speakers.length] as HTMLElement | undefined;

    if (firstCard && secondCard) {
      cardWidthRef.current = secondCard.offsetLeft - firstCard.offsetLeft;
    } else if (firstCard) {
      cardWidthRef.current = firstCard.getBoundingClientRect().width;
    }

    if (firstCard && firstCardOfSecondLoop) {
      loopWidthRef.current = firstCardOfSecondLoop.offsetLeft - firstCard.offsetLeft;
    } else {
      loopWidthRef.current = element.scrollWidth / 3;
    }
  };

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    calculateMetrics(element);
    if (loopWidthRef.current > 0) {
      element.scrollLeft = loopWidthRef.current;
    }

    const resizeObserver = new ResizeObserver(() => {
      calculateMetrics(element);
      element.scrollLeft = normalizeLoopPosition(element.scrollLeft);
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => {
      dragActiveRef.current = true;
      dragStartRef.current = e.clientX;
      setIsDragging(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragActiveRef.current) return;
      const diff = dragStartRef.current - e.clientX;
      element.scrollLeft += diff;
      dragStartRef.current = e.clientX;
      element.scrollLeft = normalizeLoopPosition(element.scrollLeft);
    };

    const handleMouseUp = () => {
      dragActiveRef.current = false;
      setIsDragging(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      dragActiveRef.current = true;
      dragStartRef.current = e.touches[0].clientX;
      setIsDragging(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!dragActiveRef.current) return;
      const diff = dragStartRef.current - e.touches[0].clientX;
      element.scrollLeft += diff;
      dragStartRef.current = e.touches[0].clientX;
      element.scrollLeft = normalizeLoopPosition(element.scrollLeft);
    };

    const handleTouchEnd = () => {
      dragActiveRef.current = false;
      setIsDragging(false);
    };

    element.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleManualScroll = (direction: "prev" | "next") => {
    const element = carouselRef.current;
    if (!element) return;

    const cardWidth =
      Number.isFinite(cardWidthRef.current) && cardWidthRef.current > 0
        ? cardWidthRef.current
        : element.clientWidth;

    const loopWidth = loopWidthRef.current;

    if (!Number.isFinite(cardWidth) || cardWidth <= 0 || !loopWidth) return;

    const normalizedCurrent = normalizeLoopPosition(element.scrollLeft);
    const relativeToLoop = normalizedCurrent - loopWidth;
    const currentIndex = Math.round(relativeToLoop / cardWidth);
    const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    const target = normalizeLoopPosition(loopWidth + nextIndex * cardWidth);

    element.scrollTo({
      left: target,
      behavior: "smooth",
    });
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

          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className={`flex gap-5 overflow-x-scroll px-[calc(50%-130px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-12 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            >
              {loopSpeakers.map((s, index) => (
                <article
                  key={`${s.photo}-${index}`}
                  className="group flex flex-col shrink-0 transition-none"
                  style={{ width: "260px" }}
                >
                  {/* Card Container with shadow */}
                  <div className="rounded-2xl bg-white shadow-sm">
                    {/* Image Area with gradient background */}
                    <div
                      className={`relative aspect-square overflow-hidden rounded-t-2xl border-b border-[#E0E5EC] ${speakerCardGradient}`}
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
                    <div className="px-6 py-5 text-center">
                      <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-[0.05em] leading-snug text-balance">
                        {s.name}
                      </h3>
                      <p className="mt-3 text-[11px] text-[#6b7280] uppercase leading-tight tracking-[0.08em] text-pretty">
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
    </section>
  );
}
