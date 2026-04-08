"use client";

interface PricingOption {
  title: string;
  price: number;
  description?: string;
  badge?: string;
  featured?: boolean;
  cta: string;
  link: string;
}

const pricingOptions: PricingOption[] = [
  {
    title: "Estudante",
    price: 200,
    description: "Para estudantes da área",
    cta: "Garantir Vaga",
    link: "https://www.sympla.com.br/evento/1-cipmp---congresso-do-interior-paulista-de-medicina-e-podologia/3367218",
  },
  {
    title: "Lote Promocional",
    price: 197,
    badge: "Melhor Preço",
    featured: true,
    cta: "Garantir Vaga",
    link: "https://www.sympla.com.br/evento/1-cipmp---congresso-do-interior-paulista-de-medicina-e-podologia/3367218",
  },
  {
    title: "1º Lote",
    price: 247,
    description: "Acesso premium ao evento",
    cta: "Garantir Vaga",
    link: "https://www.sympla.com.br/evento/1-cipmp---congresso-do-interior-paulista-de-medicina-e-podologia/3367218",
  },
];

export default function Pricing() {
  return (
    <section id="ingressos" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#E1F3FE] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1F6C9F]">
            Acessibilidade
          </span>
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
            Escolha seu Ingresso
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed text-pretty">
            Três opções de acesso ao congresso. Escolha a que melhor se adequa ao seu perfil.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border transition-all duration-300 ease-in-out ${
                option.featured
                  ? "border-[#1F4F8F] bg-white shadow-2xl scale-105"
                  : "border-[#E5E7EB] bg-white/85 shadow-md hover:shadow-lg hover:border-[#1F4F8F]/30"
              }`}
            >
              {/* Badge for featured card */}
              {option.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex bg-[#1F4F8F] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    {option.badge}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className={`p-8 sm:p-10 flex flex-col h-full ${option.featured ? "pt-12" : ""}`}>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] uppercase tracking-[0.05em]">
                  {option.title}
                </h3>

                {/* Description */}
                {option.description && (
                  <p className="mt-2 text-sm text-[#888888] leading-relaxed">
                    {option.description}
                  </p>
                )}

                {/* Price */}
                <div className="mt-8 mb-8 flex items-start gap-1">
                  <span className="text-sm font-semibold text-[#1a1a1a] pt-1">
                    R$
                  </span>
                  <span className="text-5xl sm:text-6xl font-bold text-[#1F4F8F]">
                    {option.price}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out ${
                    option.featured
                      ? "bg-[#1F4F8F] text-white hover:bg-primary-dark hover:scale-105 active:scale-95"
                      : "bg-[#1F4F8F] text-white hover:bg-primary-dark hover:scale-105 active:scale-95"
                  }`}
                >
                  {option.cta}
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted uppercase tracking-widest">
            Está indeciso? Fale com a gente
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0"
            target="_blank"
            className="mt-3 inline-flex text-[#1F4F8F] font-semibold hover:text-primary-dark transition-colors duration-300"
          >
            (16) 99310-8637
          </a>
        </div>
      </div>
    </section>
  );
}
