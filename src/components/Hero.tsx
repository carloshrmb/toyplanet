import HeroScene from "@/components/ui/HeroScene";
import StarField from "@/components/ui/StarField";
import WaveDivider from "@/components/ui/WaveDivider";
import { business } from "@/data/site";

export default function Hero() {
  // -mt-24 (96px) extiende el fondo azul por detrás del header flotante
  // (pt-4 + barra h-20 = 96px), para que el azul se vea alrededor del header.
  return (
    <section
      id="inicio"
      className="relative -mt-24 overflow-hidden bg-gradient-to-b from-cielo-300 via-cielo-400 to-cielo-600"
    >
      {/* Puntos blancos titilando en la parte superior */}
      <StarField />

      {/* Sol suave decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-star-300/50 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-10 pt-36 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20 lg:pt-40">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
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
              className="w-full rounded-full bg-[#25D366] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-[#1ebe5b] sm:w-auto"
            >
              WhatsApp {business.phoneDisplay}
            </a>
          </div>

          {/* Datos rápidos como texto simple (sin cajitas) */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-ink-900 lg:justify-start">
            <span>🕐 {business.schedule}</span>
            <span>🧒 Niños de {business.ages}</span>
            <span>📍 Las Quintas, Culiacán</span>
          </div>
        </div>

        {/* Escena espacial: cohete protagonista + planeta + astronauta */}
        <HeroScene className="mx-auto w-full max-w-md" />
      </div>

      <WaveDivider fill="fill-white" />
    </section>
  );
}
