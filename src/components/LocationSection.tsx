"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function LocationSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="localizacao" className="py-16 sm:py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Local do Evento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Onde aconteceu
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base max-w-sm mx-auto">
            Pádua Faria Advogados · Franca, SP · 22 de agosto de 2026
          </p>
        </div>

        {/* Centered video card */}
        <div className="mx-auto max-w-sm">
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-border bg-card">
            {/* Badge */}
            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
              Espaço oficial
            </div>

            {/* Mute toggle */}
            <button
              type="button"
              aria-label={muted ? "Ativar áudio" : "Desativar áudio"}
              onClick={toggleMute}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 shadow-lg border border-slate-200/70 hover:bg-white transition-colors"
            >
              {muted ? (
                <VolumeX size={20} className="text-slate-900" />
              ) : (
                <Volume2 size={20} className="text-slate-900" />
              )}
            </button>

            {/* Video */}
            <div className="aspect-[9/16] w-full overflow-hidden">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted={muted}
                playsInline
                preload="metadata"
              >
                <source src="/locall.mp4" type="video/mp4" />
                <source src="/local.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                Pádua Faria Advogados · Franca – SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}