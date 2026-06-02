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
    <section id="temas" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Temas das Palestras
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Grade Científica
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Conteúdos atualizados e aplicáveis à prática clínica apresentados
            durante o 1º Congresso do Interior Paulista de Medicina e Podologia.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            {themes.map((theme, index) => (
              <div
                key={theme}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                  {index + 1}
                </span>

                <p className="text-sm leading-relaxed text-slate-700">
                  {theme}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}