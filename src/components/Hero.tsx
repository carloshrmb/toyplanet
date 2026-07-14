import Astronaut from "@/components/ui/Astronaut";
import Stars from "@/components/ui/Stars";
import WaveDivider from "@/components/ui/WaveDivider";
import { business } from "@/data/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-space-950 via-space-900 to-space-800">
      <Stars />

      {/* Planeta decorativo asomándose en la esquina */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cielo-500/20 blur-sm sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-24 h-40 w-40 rounded-full bg-grape-500/20"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:pb-16 lg:pt-24">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-star-400">
            🪐 Salón de juegos y eventos infantiles · Culiacán
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            ¡Niños en un mundo de{" "}
            <span className="text-star-400">diversión!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cielo-200 lg:mx-0">
            Alberca de pelotas, isla pirata, mini tirolesa y mucho más para
            peques de {business.ages}. Celebra su fiesta en un planeta hecho
            para jugar.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#cotizacion"
              className="w-full rounded-full bg-sunset-500 px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-sunset-600/25 transition-all hover:bg-sunset-600 hover:shadow-2xl sm:w-auto"
            >
              Cotiza tu evento
            </a>
            <a
              href="#atracciones"
              className="w-full rounded-full border-2 border-cielo-300/60 px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:border-star-400 hover:text-star-400 sm:w-auto"
            >
              Conoce las atracciones
            </a>
          </div>

          {/* Datos rápidos que los papás buscan primero */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-bold text-cielo-200 lg:justify-start">
            <span className="rounded-full bg-white/10 px-4 py-2">🕐 {business.schedule}</span>
            <span className="rounded-full bg-white/10 px-4 py-2">🧒 Niños de {business.ages}</span>
            <span className="rounded-full bg-white/10 px-4 py-2">📍 Las Quintas, Culiacán</span>
          </div>
        </div>

        {/* Astronauta flotante: elemento firma del sitio */}
        <div className="hidden justify-center lg:flex">
          <div className="animate-float">
            <Astronaut className="h-72 w-72 drop-shadow-2xl" />
          </div>
        </div>
      </div>

      <WaveDivider fill="fill-white" />
    </section>
  );
}
