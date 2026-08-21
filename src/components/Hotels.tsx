const hotels = [
  {
    name: "Golden Tower",
    whatsapp: "(16) 3409-1513",
    address: "Av. Francisco Paulo Quintanilha Ribeiro, 510 - Parque Francal",
  },
  {
    name: "Comfort Hotel Franca",
    whatsapp: "(16) 99998-1880",
    address: "Av. Miguel Sábio de Mello, 1505 - Parque do Castelo",
  },
  {
    name: "Hotel Dan Inn",
    whatsapp: "(16) 3707-4200",
    address: "Rua Alfredo Tosí, 1088 - Núcleo Agrícola Alpha Franca",
  },
];

export default function PartnerHotels() {
  return (
    <section id="hoteis-parceiros" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Hospedagem
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Hotéis Parceiros
          </h2>

          <p className="mt-4 text-slate-600">
            Opções de hospedagem para os participantes do congresso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {hotels.map((hotel) => (
            <article
              key={hotel.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {hotel.name}
              </h3>

              <div className="mt-4 flex flex-1 flex-col gap-4 text-slate-700">
                <div>
                  <span className="text-sm font-semibold text-slate-500">
                    Reservas via WhatsApp
                  </span>
                  <p className="mt-1">
                    <a
                      href={`https://wa.me/55${hotel.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-amber-600 hover:underline"
                    >
                      {hotel.whatsapp}
                    </a>
                  </p>
                </div>

                <div className="mt-auto">
                  <span className="text-sm font-semibold text-slate-500">
                    Endereço
                  </span>
                  <p className="mt-1 leading-snug">{hotel.address}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}