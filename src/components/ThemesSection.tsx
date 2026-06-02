const themes = [
  "Lesões do pé e das unhas que não podem ser ignoradas",
  "Mão-pé-boca: abordagem clínica de terapias adjuvantes",
  "Reabilitação na ruptura total do tendão calcâneo",
  "Deficiências nutricionais e impacto nas unhas e na cicatrização",
  "Caracterização dos tipos de tecidos em lesões e suas coberturas",
];

export default function ThemesSection() {
  return (
    <section id="temas" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Temas das palestras
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Grade Científica
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Conteúdos atualizados e aplicáveis à prática clínica,
            apresentados por especialistas convidados.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {themes.map((theme, index) => (
            <article
              key={theme}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="h-px flex-1 bg-slate-200 group-hover:bg-amber-300" />
              </div>

              <h3 className="text-lg font-semibold leading-relaxed text-slate-900">
                {theme}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}