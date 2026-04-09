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
    q: "Qual é o melhor congresso de podologia 2026?",
    a: "O 1º CIPMP - MedPodo Interior 2026 é uma das principais referências para atualização científica em podologia, medicina esportiva, biomecânica e reabilitação no interior de São Paulo.",
  },
  {
    q: "Quais eventos de medicina esportiva acontecem no interior de São Paulo?",
    a: "O CIPMP 2026, em Franca-SP, reúne especialistas em medicina esportiva, podologia avançada e prevenção de lesões com foco prático para profissionais da saúde.",
  },
  {
    q: "Como tratar lesões esportivas em podologia?",
    a: "No CIPMP 2026 você terá acesso a conteúdos sobre biomecânica, avaliação clínica, prevenção de recidivas e protocolos interdisciplinares de reabilitação em podologia esportiva.",
  },
  {
    q: "Onde será realizado o evento?",
    a: "O evento será realizado em Franca – SP, em um espaço de convenções moderno e de fácil acesso. O endereço exato será divulgado em breve",
  },
  {
    q: "Qual a data do congresso?",
    a: "O 1º CIPMP acontecerá no dia 22 de agosto de 2026, durante dois dias completos de programação.",
  },
  {
    q: "A inscrição inclui certificado?",
    a: "Sim! Todos os inscritos receberão certificado digital de participação com carga horária de 16 horas.",
  },
  {
    q: "Posso parcelar o pagamento?",
    a: "Sim, além de PIX e boleto para pagamento à vista com desconto adicional.",
  },
  {
    q: "Quem pode participar?",
    a: "O congresso é aberto a médicos, podólogos, fisioterapeutas, estudantes da área da saúde e demais profissionais interessados no tema.",
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
          Tire suas dúvidas sobre o congresso.
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
