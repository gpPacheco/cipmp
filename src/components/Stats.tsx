"use client";

import { useEffect, useRef } from "react";
import { Users, Clock, Handshake, Mic } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <Mic size={28} />, value: 9, suffix: "+", label: "Palestrantes" },
  { icon: <Clock size={28} />, value: 12, suffix: "h", label: "De conteúdo" },
  { icon: <Handshake size={28} />, value: 3, suffix: "+", label: "Grandes empresas parceiras" },
  { icon: <Users size={28} />, value: 150, suffix: "+", label: "Público esperado" },
];

function animateValue(
  el: HTMLElement,
  end: number,
  suffix: string,
  duration: number
) {
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
    el.textContent = start + suffix;
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
            animateValue(el, end, suffix, 1500);
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
    <section
      id="stats"
      ref={sectionRef}
      className="py-12 sm:py-16 px-6"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold tracking-tight mb-8">
        A CIPMP em números
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl border border-border bg-card/50"
            >
              <div className="text-primary">{s.icon}</div>
              <span
                className="text-3xl sm:text-4xl font-bold text-foreground"
                data-count={s.value}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </span>
              <span className="text-muted text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            O Futuro da Medicina e Podologia
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Onde a ciência encontra a prática clínica.
          </p>
          <a
          target="_blank"
            href="https://www.sympla.com.br/evento/1-cipmp---congresso-do-interior-paulista-de-medicina-e-podologia/3367218"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-white font-semibold transition-colors duration-300 hover:bg-primary-dark active:scale-[0.98]"
          >
            Inscreva-se agora
          </a>
        </div>
      </div>
    </section>
  );
}
