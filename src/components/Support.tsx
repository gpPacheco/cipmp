import Image from "next/image";

const restaurants = [
  { name: "Benevida", src: "/benevida.png" },
  { name: "JK Da Mineira", src: "/JK da mineira.png" },
  { name: "Suco e Amor", src: "/suco e mor.png" },
];

export default function Support() {
  return (
    <section id="apoio" className="py-12 sm:py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Restaurantes Parceiros
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className="flex items-center justify-center"
            >
              <Image
                src={restaurant.src}
                alt={`Logo ${restaurant.name}`}
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}