"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

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

const EVENT_DATE = new Date("2026-08-22T08:00:00");
const INITIAL_TIME_LEFT = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function Countdown() {
  const [time, setTime] = useState(INITIAL_TIME_LEFT);

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
    <section className="py-12 sm:py-1 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="backdrop-blur-sm p-8 sm:p-12 text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 text-primary mb-6">
            <Timer size={20} />
            <span className="text-sm sm:text-base font-semibold uppercase tracking-widest">
              Faltam para o evento
            </span>
          </div>

          {/* Countdown Grid */}
          <div className="mt-8 flex justify-center gap-3 sm:gap-4 flex-wrap">
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
