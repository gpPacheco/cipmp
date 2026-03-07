"use client";

import { useEffect, useState } from "react";
import { Tag, Timer } from "lucide-react";

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const diff = target.getTime() - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Set event date to Aug 15, 2026
const EVENT_DATE = new Date("2026-08-15T08:00:00");

export default function Credential() {
  const [time, setTime] = useState(getTimeLeft(EVENT_DATE));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(EVENT_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="inscricao" className="py-24 sm:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl border border-border bg-linear-to-br from-card to-white p-8 sm:p-12 text-center shadow-sm">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-teal/10 text-teal text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Tag size={14} />
            Lote Promocional
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Credenciamento
          </h2>

          <p className="mt-4 text-muted max-w-md mx-auto text-sm sm:text-base">
            Garanta seu lugar com o valor promocional do primeiro lote.
            Vagas limitadas.
          </p>

          {/* Price */}
          <div className="mt-8">
            <span className="text-muted text-sm line-through">R$ 590,00</span>
            <div className="mt-1 text-5xl sm:text-6xl font-extrabold text-primary">
              R$ 390<span className="text-2xl">,00</span>
            </div>
            <span className="text-muted text-xs">1º Lote · Até esgotar</span>
          </div>

          {/* Countdown */}
          <div className="mt-10 flex items-center justify-center gap-2 text-primary">
            <Timer size={18} />
            <span className="text-sm font-medium">Faltam para o evento:</span>
          </div>
          <div className="mt-4 flex justify-center gap-3 sm:gap-4">
            {(
              [
                ["days", "Dias"],
                ["hours", "Hrs"],
                ["minutes", "Min"],
                ["seconds", "Seg"],
              ] as const
            ).map(([key, label]) => (
              <div
                key={key}
                className="flex flex-col items-center bg-primary/5 rounded-xl px-4 py-3 min-w-15"
              >
                <span className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
                  {String(time[key]).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-muted uppercase tracking-wider mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://example.com/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse mt-10 inline-flex items-center gap-2 bg-primary text-white font-semibold px-10 py-4 rounded-full hover:bg-primary-dark transition-colors text-base"
          >
            Inscreva-se agora
          </a>
        </div>
      </div>
    </section>
  );
}
