"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav
        className="relative flex w-[90%] sm:w-fit sm:max-w-3xl items-center gap-3 sm:gap-6 rounded-full bg-white/90 px-4 sm:px-10 py-3 sm:py-4 shadow-xl shadow-slate-900/10 backdrop-blur-2xl border border-slate-200/60"
      >
        {/* Logo */}
        <a href="#hero" className="shrink-0">
          <Image
            src="/favicon.png"
            alt="Logo principal do evento"
            width={152}
            height={44}
            className="h-8 sm:h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4 ml-auto">
          <span className="flex items-center gap-1 text-muted text-xs sm:text-sm">
            <MapPin size={12} />
            Franca – SP
          </span>
          <Link href="#palestrantes" passHref legacyBehavior>
            <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors">Palestrantes</a>
          </Link>
          <Link href="#patrocinadores" passHref legacyBehavior>
            <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors">Patrocinadores</a>
          </Link>
          <Link href="#localizacao" passHref legacyBehavior>
            <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors">Localização</a>
          </Link>
          <Link href="#ingressos" passHref legacyBehavior>
            <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors">Ingressos</a>
          </Link>
          <a
            href="https://www.sympla.com.br/evento/1-cipmp---congresso-do-interior-paulista-de-medicina-e-podologia/3367218"
            className="bg-primary text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full hover:bg-primary-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscreva-se
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden ml-auto text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] flex flex-col gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-xl sm:hidden">
            <span className="flex items-center gap-1 text-muted text-xs">
              <MapPin size={12} />
              Franca – SP
            </span>
            <Link href="#palestrantes" passHref legacyBehavior>
              <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                Palestrantes
              </a>
            </Link>
            <Link href="#ingressos" passHref legacyBehavior>
              <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                Ingressos
              </a>
            </Link>
            <Link href="#localizacao" passHref legacyBehavior>
              <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                Localização
              </a>
            </Link>
            <Link href="#patrocinadores" passHref legacyBehavior>
              <a className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                Patrocinadores
              </a>
            </Link>
            <a
              href="https://www.sympla.com.br/evento/1-cipmp---congresso-do-interior-paulista-de-medicina-e-podologia/3367218"
              className="bg-primary text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-center"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscreva-se
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
