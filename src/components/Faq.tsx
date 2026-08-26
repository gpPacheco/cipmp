"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Onde foi realizado o evento?",
    a: "O evento foi realizado em Franca – SP, no espaço de eventos Pádua Faria Advogados, localizado na Av. São Vicente, 5811 - Três Colinas.",
  },
  {
    q: "Quando aconteceu o 1º CIPMP?",
    a: "O 1º CIPMP aconteceu no dia 22 de agosto de 2026, em Franca – SP.",
  },
  {
    q: "Os participantes receberam certificado?",
    a: "Sim! Todos os inscritos receberam certificado digital de participação com carga horária.",
  },
  {
    q: "Quem participou do congresso?",
    a: "O congresso reuniu médicos, podólogos, fisioterapeutas, estudantes da área da saúde e demais profissionais interessados no tema.",
  },
  {
    q: "O evento teve acessibilidade?",
    a: "Sim! O CIPMP 2026 contou com tradução simultânea em Língua Brasileira de Sinais (Libras) em todas as palestras, reforçando o compromisso com a inclusão e a acessibilidade.",
  },
  {
    q: "Haverá uma próxima edição?",
    a: "Sim! O CIPMP 2027 está em planejamento. Fique de olho nas nossas redes sociais para não perder as novidades.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Perguntas Frequentes
        </h2>
        <p className="mt-4 text-muted">
          Tudo o que você precisa saber sobre a edição 2026.
        </p>
      </div>

      <div className="mt-12 max-w-2xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card/50 overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              {faq.q}
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 text-muted"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-muted text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
