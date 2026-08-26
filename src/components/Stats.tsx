"use client";

import { useEffect, useRef } from "react";
import { Users, Camera, Ticket, Mic, HandHelping, Coffee } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  gradient: string;
}

const stats: StatItem[] = [
  {
    icon: <Users size={24} />,
    value: 100,
    suffix: "",
    prefix: "+",
    label: "Participantes presentes",
    gradient: "from-violet-50 to-purple-50 border-violet-100",
  },
  {
    icon: <Camera size={24} />,
    value: 100,
    suffix: " GB",
    prefix: "+",
    label: "De mídia gerada (fotos e vídeos)",
    gradient: "from-rose-50 to-pink-50 border-rose-100",
  },
  {
    icon: <Ticket size={24} />,
    value: 80,
    suffix: "%",
    prefix: "+",
    label: "Dos ingressos totais vendidos",
    gradient: "from-emerald-50 to-teal-50 border-emerald-100",
  },
  {
    icon: <Mic size={24} />,
    value: 9,
    suffix: "",
    prefix: "+",
    label: "Palestrantes especialistas",
    gradient: "from-blue-50 to-indigo-50 border-indigo-100",
  },
  {
    icon: <Coffee size={24} />,
    value: 0,
    suffix: "",
    label: "Coffee Break Premium",
    gradient: "from-amber-50 to-orange-50 border-amber-100",
  },
  {
    icon: <HandHelping size={24} />,
    value: 0,
    suffix: "",
    label: "Tradução Simultânea em Libras",
    gradient: "from-sky-50 to-blue-50 border-sky-100",
  },
];

function animateValue(
  el: HTMLElement,
  end: number,
  suffix: string,
  prefix: string,
  duration: number
) {
  if (end === 0) return; // text-only cards
  let start = 0;
  const range = end;
  const stepTime = Math.max(Math.floor(duration / range), 16);
  const increment = Math.ceil(range / (duration / stepTime));
  const timer = setInterval(() => {
    start += increment;
    if (start >= end) {
      start = end;
      clearInterval(timer);
    }
    el.textContent = prefix + start + suffix;
  }, stepTime);
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    let gsapModule: typeof import("gsap") | null = null;
    let scrollTriggerModule: typeof import("gsap/ScrollTrigger") | null = null;

    const init = async () => {
      gsapModule = await import("gsap");
      scrollTriggerModule = await import("gsap/ScrollTrigger");
      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger);

      if (!sectionRef.current) return;

      scrollTriggerModule.ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (animated.current) return;
          animated.current = true;
          const counters =
            sectionRef.current?.querySelectorAll<HTMLElement>("[data-count]");
          counters?.forEach((el) => {
            const end = parseInt(el.dataset.count || "0", 10);
            const suffix = el.dataset.suffix || "";
            const prefix = el.dataset.prefix || "";
            animateValue(el, end, suffix, prefix, 1500);
          });
        },
      });
    };

    init();

    return () => {
      scrollTriggerModule?.ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-16 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Resultados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            CIPMP 2026 em números
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto text-sm sm:text-base">
            Uma edição histórica que superou todas as expectativas.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`
                flex flex-col gap-3 p-6 sm:p-7 rounded-2xl border bg-gradient-to-br
                ${s.gradient}
                transition-all duration-300 hover:-translate-y-1 hover:shadow-md
              `}
            >
              <div className="text-primary/70">{s.icon}</div>
              {s.value > 0 ? (
                <span
                  className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums"
                  data-count={s.value}
                  data-suffix={s.suffix}
                  data-prefix={s.prefix || ""}
                >
                  {s.prefix || ""}0{s.suffix}
                </span>
              ) : (
                <span className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                  ✓
                </span>
              )}
              <span className="text-muted text-sm leading-snug">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
