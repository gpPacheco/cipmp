import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import MascotSpotlight from "@/components/MascotSpotlight";
import AccessibilityAndGallery from "@/components/AccessibilityAndGallery";
import Speakers from "@/components/Speakers";
import ThemesSection from "@/components/ThemesSection";
import Idealizadora from "@/components/Idealizadora";
import LocationSection from "@/components/LocationSection";
import Sponsors from "@/components/Sponsors";
import Support from "@/components/Support";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Retrospectiva CIPMP 2026 | Confira como foi o 1º Congresso",
  description:
    "Reviva cada momento do 1º CIPMP - Congresso Interdisciplinar de Podologia e Medicina Preventiva. Palestrantes, métricas, galeria, acessibilidade em Libras e álbum oficial de fotos da edição de 2026 em Franca, SP.",
  openGraph: {
    title: "Retrospectiva CIPMP 2026",
    description:
      "Reviva cada momento do 1º CIPMP 2026. Palestrantes, números, álbum de fotos e galeria do congresso de Podologia e Medicina em Franca, SP.",
    images: [
      {
        url: "/logo_evento.png",
        width: 1200,
        height: 630,
        alt: "Retrospectiva CIPMP 2026",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
};

export default function Edicao2026Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Banner Superior ───────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary pt-32 pb-20 px-6 text-white text-center">
          {/* subtle grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Glow blob */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-[50rem] rounded-full bg-white/10 blur-[80px]"
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm mb-8 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={14} />
              Voltar para o Início
            </Link>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm mb-6">
              Acervo Completo
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.03em] mb-6">
              Retrospectiva
              <br />
              <span
                className="select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(255,255,255,0.5)",
                }}
              >
                CIPMP 2026
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-white/70 text-sm sm:text-base leading-relaxed">
              Reviva cada detalhe do 1º Congresso Interdisciplinar de Podologia e
              Medicina Preventiva. Uma edição histórica realizada em 22 de agosto
              de 2026, em Franca – SP.
            </p>
          </div>

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent"
          />
        </section>

        {/* ── Stats ─────────────────────────────────────────────────── */}
        <Stats />

        {/* ── Mascote ───────────────────────────────────────────────── */}
        <MascotSpotlight />

        {/* ── Acessibilidade (Libras) & Álbum Oficial de Fotos ───────── */}
        <AccessibilityAndGallery />

        {/* ── Palestrantes ──────────────────────────────────────────── */}
        <Speakers />

        {/* ── Temas das Palestras ───────────────────────────────────── */}
        <ThemesSection />

        {/* ── Idealizadora ──────────────────────────────────────────── */}
        <Idealizadora />

        {/* ── Local do Evento (só vídeo) ────────────────────────────── */}
        <LocationSection />

        {/* ── Patrocinadores ────────────────────────────────────────── */}
        <Sponsors />

        {/* ── Apoiadores ────────────────────────────────────────────── */}
        <Support />

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <Faq />
      </main>
      <Footer />
    </>
  );
}
