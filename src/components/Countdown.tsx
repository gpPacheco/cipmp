"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock3, Timer } from "lucide-react";

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

const EVENT_DATE = new Date("2026-08-22T08:00:00-03:00");
const INITIAL_TIME_LEFT = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function Countdown() {
  const [time, setTime] = useState(INITIAL_TIME_LEFT);

  const dateLabel = "22 de agosto de 2026";

  useEffect(() => {
    const tick = () => setTime(getTimeLeft(EVENT_DATE));
    const initialId = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);

    return () => {
      window.clearTimeout(initialId);
      window.clearInterval(id);
    };
  }, []);

  return (
    <section className="py-6 px-6">
      <div className="mx-auto max-w-7xl">
        <div className=" p-8 text-center backdrop-blur-sm sm:p-12">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 text-primary mb-6">
            <Timer size={20} />
            <span className="text-sm sm:text-base font-semibold uppercase tracking-widest">
              Contagem regressiva
            </span>
          </div>

          <div className="mx-auto mt-1 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 sm:text-sm">
              <CalendarDays size={15} />
              {dateLabel}
            </span>
          </div>

          {/* Countdown Grid */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
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
                className="flex flex-col items-center bg-primary/5 rounded-xl px-5 py-4 min-w-20"
              >
                <span className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
                  {String(time[key]).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-muted uppercase tracking-wider mt-2">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Footer text */}
          <p className="mt-8 text-sm text-muted uppercase tracking-widest">
            Não perca! Inscrições abertas com valores promocionais
          </p>
        </div>
      </div>
    </section>
  );
}
