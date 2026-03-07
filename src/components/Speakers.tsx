"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronLeft, ChevronRight } from "lucide-react";

interface Speaker {
  name: string;
  specialty: string;
  bg: string;
}

const speakers: Speaker[] = [
  {
    name: "Dra. Camila Ribeiro",
    specialty: "Dermatologia Podológica",
    bg: "linear-gradient(135deg, #f9a8d4, #c4b5fd, #93c5fd)",
  },
  {
    name: "Dr. André Martins",
    specialty: "Ortopedia & Biomecânica",
    bg: "linear-gradient(135deg, #fcd34d, #fb923c, #f87171)",
  },
  {
    name: "Prof. Lucas Almeida",
    specialty: "Fisioterapia Esportiva",
    bg: "linear-gradient(135deg, #7dd3fc, #60a5fa, #818cf8)",
  },
  {
    name: "Dra. Juliana Costa",
    specialty: "Cirurgia Podológica",
    bg: "linear-gradient(135deg, #5eead4, #6ee7b7, #86efac)",
  },
  {
    name: "Dr. Rafael Souza",
    specialty: "Angiologia Clínica",
    bg: "linear-gradient(135deg, #c4b5fd, #a78bfa, #e879f9)",
  },
  {
    name: "Dra. Fernanda Lima",
    specialty: "Endocrinologia & Diabetes",
    bg: "linear-gradient(135deg, #f9a8d4, #fda4af, #fca5a5)",
  },
  {
    name: "Dr. Paulo Henrique",
    specialty: "Tecnologia em Saúde",
    bg: "linear-gradient(135deg, #67e8f9, #7dd3fc, #93c5fd)",
  },
  {
    name: "Dra. Beatriz Nunes",
    specialty: "Pesquisa Clínica",
    bg: "linear-gradient(135deg, #bef264, #86efac, #5eead4)",
  },
];

const VISIBLE = 3;

export default function Speakers() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = speakers.length;

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  };

  const visibleSpeakers = Array.from({ length: VISIBLE }, (_, i) => ({
    ...speakers[(index + i) % total],
    uid: (index + i) % total,
  }));

  return (
    <section id="palestrantes" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Palestrantes
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Profissionais referência em suas áreas compartilhando conhecimento de ponta.
        </p>

        <div className="mt-14 flex items-center gap-4">
          {/* Botão anterior */}
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white/80 hover:bg-white shadow-sm transition-all hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {visibleSpeakers.map((s, i) => (
                  <div
                    key={s.uid}
                    className={`group rounded-2xl shadow-md border border-border bg-white cursor-pointer ${
                      i > 0 ? "hidden sm:block" : ""
                    }`}
                    style={{ overflow: "visible" }}
                  >
                    {/* Foto — somente ela sobe no hover */}
                    <div
                      className="rounded-t-2xl overflow-hidden h-64 flex items-end justify-center transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:shadow-xl"
                      style={{ background: s.bg }}
                    >
                      <div className="mb-6 w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/90">
                        <User size={52} />
                      </div>
                    </div>

                    {/* Informações fixas */}
                    <div className="p-5 text-center bg-white rounded-b-2xl">
                      <h3 className="font-bold tracking-wide text-sm uppercase text-foreground">
                        {s.name}
                      </h3>
                      <p className="text-muted text-xs mt-1 uppercase tracking-widest">
                        {s.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botão próximo */}
          <button
            onClick={next}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white/80 hover:bg-white shadow-sm transition-all hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots de navegação */}
        <div className="mt-8 flex justify-center gap-2">
          {speakers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "1.5rem" : "0.5rem",
                backgroundColor: i === index ? "var(--color-primary)" : "var(--color-border)",
              }}
              aria-label={`Palestrante ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
