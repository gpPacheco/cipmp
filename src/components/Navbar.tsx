"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="relative flex w-full max-w-fit items-center justify-between gap-4 sm:gap-6 rounded-full bg-white/95 px-5 sm:px-7 py-2.5 sm:py-3 shadow-xl shadow-slate-900/10 backdrop-blur-2xl border border-slate-200/70">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/favicon.png"
            alt="Logo CIPMP"
            width={152}
            height={44}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <span className="flex items-center gap-1.5 text-muted text-xs sm:text-sm font-medium whitespace-nowrap">
            <MapPin size={13} className="text-primary/70 shrink-0" />
            Franca – SP
          </span>

          <div className="h-4 w-px bg-slate-200/80" aria-hidden="true" />

          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            Início
          </Link>
          <Link
            href="/edicao-2026"
            className="text-xs sm:text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            Edição 2026
          </Link>
          <Link
            href="/edicao-2026#palestrantes"
            className="text-xs sm:text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            Palestrantes
          </Link>
          <Link
            href="/edicao-2026#patrocinadores"
            className="text-xs sm:text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            Patrocinadores
          </Link>

          <Link
            href="/edicao-2026"
            className="bg-primary text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-sm hover:shadow whitespace-nowrap shrink-0"
          >
            Retrospectiva 2026
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-foreground p-1 rounded-full hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[calc(100vw-2rem)] max-w-sm flex flex-col gap-2 rounded-3xl bg-white/98 p-5 shadow-2xl backdrop-blur-xl border border-slate-200/80 md:hidden z-50">
            <span className="flex items-center gap-1.5 text-muted text-xs font-medium pb-2 border-b border-slate-100 whitespace-nowrap">
              <MapPin size={13} className="text-primary/70" />
              Franca – SP
            </span>
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary py-2 transition-colors whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/edicao-2026"
              className="text-sm font-medium text-foreground/80 hover:text-primary py-2 transition-colors whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              Edição 2026
            </Link>
            <Link
              href="/edicao-2026#palestrantes"
              className="text-sm font-medium text-foreground/80 hover:text-primary py-2 transition-colors whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              Palestrantes
            </Link>
            <Link
              href="/edicao-2026#patrocinadores"
              className="text-sm font-medium text-foreground/80 hover:text-primary py-2 transition-colors whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              Patrocinadores
            </Link>
            <Link
              href="/edicao-2026"
              className="bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-primary-dark transition-colors text-center whitespace-nowrap mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Retrospectiva 2026
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
