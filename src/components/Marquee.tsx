export default function Marquee() {
  const row1 =
    "Podologia · Biomecânica · Ortopedia · Dermatologia · Diabetes · Inovação · Tecnologia · Saúde Pública · Reabilitação · Cirurgia";
  const row2 =
    "Laser · Órteses · Diagnóstico · Prevenção · Pesquisa Clínica · IA em Saúde · Fisioterapia · Anatomia · Angiologia · Neurologia";

  return (
    <section className="py-16 overflow-hidden select-none">
      {/* Row 1 — left */}
      <div className="relative flex whitespace-nowrap mb-4">
        <div className="animate-marquee-left flex gap-12 text-xl sm:text-2xl font-semibold text-zinc-500 tracking-wide">
          <span>{row1}</span>
          <span>{row1}</span>
        </div>
      </div>
      {/* Row 2 — right */}
      <div className="relative flex whitespace-nowrap">
        <div className="animate-marquee-right flex gap-12 text-xl sm:text-2xl font-semibold text-zinc-500 tracking-wide">
          <span>{row2}</span>
          <span>{row2}</span>
        </div>
      </div>
    </section>
  );
}
