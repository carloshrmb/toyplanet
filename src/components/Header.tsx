"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

/**
 * Header flotante: una barra blanca redondeada y elevada (shadow-lg),
 * separada de los bordes de la pantalla, sticky en la parte superior.
 * El fondo azul de la página se ve alrededor. El padding vertical del
 * header (pt-4) + la altura de la barra (h-20) = 96px; el hero usa
 * -mt-24 para que su fondo azul quede por detrás.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        {/* Barra flotante */}
        <div className="flex h-20 items-center justify-between gap-4 rounded-2xl bg-white px-4 shadow-lg sm:px-6">
          <a href="#inicio" aria-label="Toy Planet — inicio">
            <Logo className="h-16 w-auto" />
          </a>

          {/* Navegación de escritorio */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-ink-900 transition-colors hover:text-cielo-600"
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
            className="rounded-lg p-2 text-ink-900 lg:hidden"
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

        {/* Menú desplegable mobile (tarjeta flotante, absoluta para no
            alterar la altura del header) */}
        {open && (
          <nav
            className="absolute inset-x-0 top-full z-50 mt-2 rounded-2xl bg-white p-4 shadow-lg lg:hidden"
            aria-label="Navegación móvil"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-bold text-ink-900 transition-colors hover:bg-cielo-100 hover:text-cielo-600"
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
      </div>
    </header>
  );
}
