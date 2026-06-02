import Image from "next/image";

const supporters = [
  { name: "Benevida", src: "/benevida.png" },
  { name: "JK Da Mineira", src: "/jk.png" },
  { name: "Suco e Amor", src: "/suco.png" },
];

export default function Support() {
  return (
    <section id="apoio" className="py-12 sm:py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Apoiadores
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {supporters.map((supporter) => (
            <article
              key={supporter.name}
              className="flex items-center justify-center rounded-xl bg-white p-6 shadow-sm"
            >
              <Image
                src={supporter.src}
                alt={`Logo ${supporter.name}`}
                width={240}
                height={120}
                className="h-24 w-auto object-contain"
                priority
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}