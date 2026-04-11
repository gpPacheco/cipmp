"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const address = [
  "Franca, SP",
  "Pádua Faria Advogados",
  "Av. São Vicente, 5811 - Três Colinas",
];

const mapUrl = "https://www.google.com/maps?q=P%C3%A1dua%20Faria%20Advogados%2C%20Av.%20S%C3%A3o%20Vicente%2C%205811%20-%20Tr%C3%AAs%20Colinas%2C%20Franca%20-%20SP&z=16&output=embed";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur">
            Localizacao
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Onde a inovacao acontece
          </h2>
        </div>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.28 }}
            className="mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="h-full rounded-3xl bg-linear-to-br from-slate-200/70 via-white to-slate-200/50 p-px shadow-2xl shadow-slate-900/10">
              <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-200/50 bg-white/75 backdrop-blur-md">
                <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                  Vídeo da localização
                </div>

                <div className="aspect-9/16 w-full overflow-hidden">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/locall.mp4" type="video/mp4" />
                    <source src="/local.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/40 via-slate-950/10 to-transparent px-5 py-5 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                    Espaço oficial do congresso
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.28 }}
            className="grid gap-4"
          >
            <div className="rounded-3xl bg-linear-to-br from-slate-200/70 via-white to-slate-200/50 p-px shadow-2xl shadow-slate-900/10">
              <div className="aspect-video overflow-hidden rounded-[1.7rem] border border-slate-200/50 bg-white/75 backdrop-blur-md">
                <iframe
                  title="Mapa interativo da localizacao do congresso em Franca, SP"
                  src={mapUrl}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-950 text-white">
                  <MapPin size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Endereco
                  </p>
                  {address.map((line, index) => (
                    <p key={index} className="mt-1 text-sm leading-6 text-slate-700 md:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=P%C3%A1dua%20Faria%20Advogados%2C%20Av.%20S%C3%A3o%20Vicente%2C%205811%20-%20Tr%C3%AAs%20Colinas%2C%20Franca%20-%20SP"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98]"
                >
                  Como chegar
                  <ArrowRight size={16} strokeWidth={2} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}