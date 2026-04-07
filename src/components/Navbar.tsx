"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 z-50 flex w-[92%] sm:w-auto sm:max-w-2xl -translate-x-1/2 items-center gap-2 sm:gap-4 rounded-full bg-white/85 px-3 sm:px-6 py-2 sm:py-3 shadow-lg backdrop-blur-xl"
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
        <a
          href="#palestrantes"
          className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors"
        >
          Palestrantes
        </a>
        <a
          href="#patrocinadores"
          className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors"
        >
          Patrocinadores
        </a>
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
          <a
            href="#palestrantes"
            className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Palestrantes
          </a>
          <a
            href="#patrocinadores"
            className="text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Patrocinadores
          </a>
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
  );
}
