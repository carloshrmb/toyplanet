"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

/**
 * Header sticky con navegación por anclas y menú hamburguesa
 * en mobile. El CTA de cotización siempre queda a la vista.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-space-900/95 shadow-lg shadow-space-950/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Toy Planet — inicio">
          <Logo className="h-12 w-auto sm:h-14" />
          <span className="font-display text-xl font-bold text-white sm:text-2xl">
            Toy Planet
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-cielo-200 transition-colors hover:text-star-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotizacion"
            className="rounded-full bg-sunset-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sunset-600 hover:shadow-lg"
          >
            Cotiza tu evento
          </a>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable mobile */}
      {open && (
        <nav
          className="border-t border-white/10 bg-space-900 px-4 pb-6 pt-2 lg:hidden"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 font-bold text-cielo-200 transition-colors hover:bg-white/5 hover:text-star-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotizacion"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-sunset-500 px-5 py-3 text-center font-bold text-white shadow-md transition-colors hover:bg-sunset-600"
          >
            Cotiza tu evento
          </a>
        </nav>
      )}
    </header>
  );
}
