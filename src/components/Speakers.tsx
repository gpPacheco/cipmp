"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

interface Speaker {
  name: string;
  specialty: string;
}

const speakers: Speaker[] = [
  { name: "Dra. Camila Ribeiro", specialty: "Dermatologia Podológica" },
  { name: "Dr. André Martins", specialty: "Ortopedia & Biomecânica" },
  { name: "Prof. Lucas Almeida", specialty: "Fisioterapia Esportiva" },
  { name: "Dra. Juliana Costa", specialty: "Cirurgia Podológica" },
  { name: "Dr. Rafael Souza", specialty: "Angiologia Clínica" },
  { name: "Dra. Fernanda Lima", specialty: "Endocrinologia & Diabetes" },
  { name: "Dr. Paulo Henrique", specialty: "Tecnologia em Saúde" },
  { name: "Dra. Beatriz Nunes", specialty: "Pesquisa Clínica" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Palestrantes
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Profissionais referência em suas áreas compartilhando conhecimento
          de ponta.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-border bg-card/50 hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User size={36} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{s.name}</h3>
                <p className="text-muted text-sm mt-1">{s.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
