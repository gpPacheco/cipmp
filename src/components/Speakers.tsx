import Image from "next/image";

interface Speaker {
  name: string;
  specialty: string;
  photo: string;
}

const speakers: Speaker[] = [
  {
    name: "Dra. Camila Ribeiro",
    specialty: "Dermatologia Podológica",
    photo: "/p1.PNG",
  },
  {
    name: "Dr. André Martins",
    specialty: "Ortopedia & Biomecânica",
    photo: "/p2.PNG",
  },
  {
    name: "Prof. Lucas Almeida",
    specialty: "Fisioterapia Esportiva",
    photo: "/p3.PNG",
  },
  {
    name: "Dra. Juliana Costa",
    specialty: "Cirurgia Podológica",
    photo: "/p4.PNG",
  },
  {
    name: "Dr. Rafael Souza",
    specialty: "Angiologia Clínica",
    photo: "/p5.PNG",
  },
  {
    name: "Dra. Fernanda Lima",
    specialty: "Endocrinologia & Diabetes",
    photo: "/p6.PNG",
  },
  {
    name: "Dr. Paulo Henrique",
    specialty: "Tecnologia em Saúde",
    photo: "/p7.PNG",
  },
  {
    name: "Dra. Beatriz Nunes",
    specialty: "Pesquisa Clínica",
    photo: "/p8.PNG",
  },
  {
    name: "Dra. Larissa Menezes",
    specialty: "Neuropatias do pé diabético",
    photo: "/p9.PNG",
  },
  {
    name: "Dr. Thiago Albuquerque",
    specialty: "Ultrassonografia musculoesquelética",
    photo: "/p10.PNG",
  },
  {
    name: "Dra. Valentina Prado",
    specialty: "Reabilitação funcional",
    photo: "/p11.PNG",
  },
  {
    name: "Prof. Renato Sampaio",
    specialty: "Biomecânica aplicada ao esporte",
    photo: "/p12.PNG",
  },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
            Palestrantes confirmados
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed text-pretty">
            Especialistas de medicina e podologia em uma curadoria pensada para prática clínica e tomada de decisão.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {speakers.map((s) => (
            <article key={s.photo} className="group">
              <div className="relative w-full aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src={s.photo}
                  alt={`Foto de ${s.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-base font-semibold text-foreground tracking-[-0.01em] text-balance">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed text-pretty">
                  {s.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
