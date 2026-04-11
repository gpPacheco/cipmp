const themes = [
  "Lesoes do pe e das unhas que nao podem ser ignoradas",
  "Mao-pe-boca: abordagem clinica de terapias adjuvantes",
  "Reabilitacao na ruptura total do tendao calcaneo",
  "Deficiencias nutricionais e impacto nas unhas e na cicatrizacao",
  "Caracterizacao dos tipos de tecidos em lesoes e suas coberturas",
];

export default function ThemesSection() {
  return (
    <section id="temas" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur">
            Temas das palestras
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Grade de inovacao
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {themes.map((theme) => (
            <article
              key={theme}
              className="rounded-2xl border border-slate-200/80 bg-linear-to-r from-slate-50 to-white px-6 py-6 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.45)]"
            >
              <p className="border-l-2 border-amber-400 pl-4 text-base font-semibold uppercase tracking-[0.02em] text-slate-900 sm:text-lg">
                {theme}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}