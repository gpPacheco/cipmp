"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 z-50 flex w-[95%] max-w-2xl -translate-x-1/2 items-center gap-4 rounded-full bg-white/85 px-4 py-3 shadow-lg backdrop-blur-xl sm:w-auto sm:px-6 sm:gap-6"
    >
      {/* Logo */}
      <a href="#hero" className="shrink-0">
        <Image
          src="/logo_evento.png"
          alt="Logo principal do evento"
          width={152}
          height={44}
          className="h-9 sm:h-10 w-auto"
          priority
        />
      </a>

      {/* Desktop nav */}
      <div className="hidden sm:flex items-center gap-5 ml-auto">
        <span className="flex items-center gap-1 text-muted text-sm">
          <MapPin size={14} />
          Franca – SP
        </span>
        <a
          href="#palestrantes"
          className="text-sm text-foreground/80 hover:text-primary transition-colors"
        >
          Palestrantes
        </a>
        <a
          href="#patrocinadores"
          className="text-sm text-foreground/80 hover:text-primary transition-colors"
        >
          Patrocinadores
        </a>
        <a
          href="#inscricao"
          className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-dark transition-colors"
        >
          Inscreva-se
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden ml-auto text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 flex flex-col gap-4 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-xl sm:hidden">
          <span className="flex items-center gap-1 text-muted text-sm">
            <MapPin size={14} />
            Franca – SP
          </span>
          <a
            href="#palestrantes"
            className="text-sm text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Palestrantes
          </a>
          <a
            href="#patrocinadores"
            className="text-sm text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Patrocinadores
          </a>
          <a
            href="#inscricao"
            className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-dark transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Inscreva-se
          </a>
        </div>
      )}
    </nav>
  );
}
