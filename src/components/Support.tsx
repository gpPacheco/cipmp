import Image from "next/image";

const supporters = [
  { name: "Benevida", src: "/benevida.png" },
  { name: "JK Da Mineira", src: "/jk.jpeg" },
  { name: "Suco e Amor", src: "/suco.PNG" },
  { name: "Farmácia Cruzeiro", src: "/farmacia_cruzeiro.webp" },
  { name: "Droga Farma", src: "/droga_farma.jpeg" },
  { name: "Rede Bem", src: "/rede_bem.jpeg" },
  { name: "Oficinal", src: "/oficinal.jpeg" },
];

export default function Support() {
  return (
    <section id="apoio" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Parcerias
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Apoiadores
          </h2>

          <p className="mt-4 text-slate-600">
            Empresas e marcas que tornam este congresso possível.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {supporters.map((supporter) => (
            <article
              key={supporter.name}
              className="flex aspect-[4/3] w-[calc(50%-0.75rem)] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)]"
            >
              <Image
                src={supporter.src}
                alt={`Logo ${supporter.name}`}
                width={240}
                height={120}
                className="h-full w-full object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}