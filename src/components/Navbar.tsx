"use client";

import { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg backdrop-blur-xl"
          : "bg-white/60 backdrop-blur-md"
      } rounded-full px-4 sm:px-6 py-3 flex items-center gap-4 sm:gap-6 max-w-2xl w-[95%] sm:w-auto`}
    >
      {/* Logo */}
      <a href="#" className="font-bold text-primary text-base sm:text-lg whitespace-nowrap tracking-tight">
        CIPMP
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
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg p-5 flex flex-col gap-4 sm:hidden">
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
