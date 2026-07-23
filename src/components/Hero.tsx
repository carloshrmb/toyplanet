import HeroScene from "@/components/ui/HeroScene";
import Sparkles from "@/components/ui/Sparkles";
import WaveDivider from "@/components/ui/WaveDivider";
import { business } from "@/data/site";

export default function Hero() {
  // -mt-24 (96px) extiende el fondo azul por detrás del header flotante
  // (pt-4 + barra h-20 = 96px), para que el azul se vea alrededor del header.
  return (
    <section
      id="inicio"
      className="relative -mt-24 overflow-hidden bg-gradient-to-b from-cielo-300 via-cielo-200 to-cielo-100"
    >
      <Sparkles />

      {/* Sol suave decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-star-300/50 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-10 pt-36 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20 lg:pt-40">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-white/70 px-4 py-1.5 text-sm font-bold text-cielo-700">
            🪐 Salón de juegos y eventos infantiles · Culiacán
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
            ¡Niños en un mundo de <span className="text-sunset-500">diversión!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-500 lg:mx-0">
            Albercas de pelotas, resbaladillas, zona arcade y un área de
            eventos lista para celebrar a tus peques de {business.ages}.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#cotizacion"
              className="w-full rounded-full bg-sunset-500 px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-sunset-500/30 transition-all hover:bg-sunset-600 hover:shadow-2xl sm:w-auto"
            >
              Cotiza tu evento
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border-2 border-cielo-600 px-8 py-4 text-center text-lg font-bold text-cielo-700 transition-colors hover:bg-white/60 sm:w-auto"
            >
              WhatsApp {business.phoneDisplay}
            </a>
          </div>

          {/* Datos rápidos que los papás buscan primero */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-bold text-ink-900 lg:justify-start">
            <span className="rounded-full bg-white/70 px-4 py-2">🕐 {business.schedule}</span>
            <span className="rounded-full bg-white/70 px-4 py-2">🧒 Niños de {business.ages}</span>
            <span className="rounded-full bg-white/70 px-4 py-2">📍 Las Quintas, Culiacán</span>
          </div>
        </div>

        {/* Escena ilustrada: planeta con anillos + astronauta (sin foto real) */}
        <HeroScene className="mx-auto w-full max-w-md" />
      </div>

      <WaveDivider fill="fill-white" />
    </section>
  );
}
