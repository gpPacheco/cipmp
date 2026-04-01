const keywords = [
  "Podologia",
  "Saúde",
  "Inovação",
  "Biomecânica",
  "Dermatologia",
  "Prevenção",
  "Tecnologia clínica",
  "Reabilitação",
  "Diabetes",
  "Pesquisa aplicada",
];

export default function Marquee() {
  const loopItems = [...keywords, ...keywords];

  return (
    <div className="ticker-group relative overflow-hidden rounded-2xl border border-border/70 bg-white/55 py-5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />

      <div className="ticker-track flex w-max items-center gap-8 px-6 sm:gap-12">
        {loopItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 text-sm sm:text-base font-medium tracking-[0.08em] text-foreground/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
