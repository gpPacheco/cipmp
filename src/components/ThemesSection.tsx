const themes = [
  "A integração do ortopedista especialista em pé e tornozelo com a podologia",
  "Mão-Pé-Boca: abordagem clínica e terapias adjuvantes",
  "Quando o pé da criança adoece: micoses e parasitoses na prática clínica",
  "O peso do corpo e a saúde dos pés: como a obesidade afeta nossa base de sustentação",
  "Deficiências nutricionais, o que interferem nas unhas e na cicatrização",
  "Quando a Podóloga Salva Vidas: lesões do pé e das unhas que não podem ser ignoradas",
  "Onicomicose: do diagnóstico ao tratamento na Podologia",
  "Pé diabético: prevenção começa na podologia",
  "Caracterizar os tipos de tecidos em lesões e suas respectivas coberturas",
];

export default function ThemesSection() {
  return (
    <section id="temas" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Temas das Palestras
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Grade Científica
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Conteúdos atualizados e aplicáveis à prática clínica,
            apresentados por especialistas convidados durante o
            1º Congresso do Interior Paulista de Medicina e Podologia.
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

                <div className="h-px flex-1 bg-slate-200 transition-colors group-hover:bg-amber-300" />
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