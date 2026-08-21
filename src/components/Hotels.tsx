const hotels = [
  {
    name: "Golden Tower",
    whatsapp: "(16) 3409-1513",
    address:
      "Av. Francisco Paulo Quintanilha Ribeiro, 510 - Parque Francal",
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {hotels.map((hotel) => (
            <article
              key={hotel.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {hotel.name}
              </h3>

              <div className="mt-4 space-y-3 text-slate-700">
                <p>
                  <span className="font-semibold">
                    Reservas via WhatsApp:
                  </span>
                  <br />
                  <a
                    href={`https://wa.me/55${hotel.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:underline"
                  >
                    {hotel.whatsapp}
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Endereço:</span>
                  <br />
                  {hotel.address}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}