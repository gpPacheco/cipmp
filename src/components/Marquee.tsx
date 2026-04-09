const keywords = [
  "Podologia",
  "Medicina Esportiva",
  "Saúde",
  "Inovação",
  "Biomecânica",
  "Dermatologia",
  "Prevenção",
  "Tecnologia clínica",
  "Reabilitação",
  "Diabetes",
  "Pesquisa aplicada",
  "Anamnese",
  "Ortopodologia",
  "Pé diabético",
  "Prática baseada em evidências",
  "Atualização científica",
  "Congresso médico",
  "Especialização em saúde",
  "Podologia avançada",
  "Prevenção de lesões no esporte",
  "Cuidados com pé diabético",
];

export default function Marquee() {
  const loopSegments = [0, 1];

  return (
    <section aria-label="Palavras relacionadas ao congresso" className="py-6 sm:py-8">
      <div className="overflow-hidden border-y border-[#EAEAEA] bg-[#FBFBFA]">
        <div className="words-marquee-track flex w-max items-center py-4 sm:py-5">
          {loopSegments.map((segment) => (
            <div
              key={segment}
              className="flex min-w-full items-center justify-between gap-6 px-4 sm:gap-10 sm:px-8 md:px-12"
            >
              {keywords.map((item, index) => (
                <span
                  key={`${item}-${segment}-${index}`}
                  className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-[#787774] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
