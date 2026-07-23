"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Menú para visitas normales al salón (distinto del menú de eventos).
 * Muestra la imagen completa del menú y permite ampliarla con un clic
 * en un lightbox sencillo.
 */
const MENU_SRC = "/images/menu-general.png";

export default function MenuGeneral() {
  const [zoom, setZoom] = useState(false);

  // Cerrar el lightbox con la tecla Escape
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <section id="menu-general" className="bg-cielo-100 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          tone="sunset"
          kicker="Menú del día"
          title="Nuestro menú"
          subtitle="Disponible para tu visita al salón de juegos: snacks, baguettes, alitas, hamburguesas, pizza y bebidas."
        />

        {/* Imagen del menú (clic para ampliar) */}
        <button
          type="button"
          onClick={() => setZoom(true)}
          className="group block w-full overflow-hidden rounded-3xl bg-white p-2 shadow-lg ring-1 ring-cielo-200 transition-shadow hover:shadow-xl"
          aria-label="Ampliar el menú"
        >
          <Image
            src={MENU_SRC}
            alt="Menú de Toy Planet para visitas: snacks, baguettes, ensaladas, alitas y boneless, hamburguesas, pizza, combos y bebidas con precios"
            width={1131}
            height={948}
            sizes="(max-width: 1024px) 100vw, 960px"
            className="h-auto w-full rounded-2xl"
          />
          <span className="mt-2 mb-1 block text-center text-sm font-bold text-cielo-700">
            🔍 Toca el menú para ampliarlo
          </span>
        </button>

        <p className="mt-6 text-center text-sm text-ink-500">
          ¿Vas a celebrar? Revisa también nuestro{" "}
          <a href="#menu" className="font-bold text-cielo-600 hover:underline">
            menú para eventos
          </a>
          .
        </p>
      </div>

      {/* Lightbox */}
      {zoom && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/85 p-4 backdrop-blur-sm"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menú ampliado"
        >
          <button
            type="button"
            onClick={() => setZoom(false)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-ink-900 shadow-lg transition-colors hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <Image
            src={MENU_SRC}
            alt="Menú de Toy Planet ampliado"
            width={1131}
            height={948}
            sizes="100vw"
            className="max-h-[90vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
