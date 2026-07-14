import SectionHeading from "@/components/ui/SectionHeading";
import { attractions, type Attraction } from "@/data/site";

/**
 * Placeholder visual mientras llegan las fotos reales.
 * Para usar fotos: sustituir el <div> del gradiente por un
 * <Image> de next/image con la foto de cada atracción.
 */
const toneStyles: Record<Attraction["tone"], string> = {
  cielo: "from-cielo-300 to-cielo-500",
  grape: "from-grape-400 to-grape-500",
  sunset: "from-star-400 to-sunset-500",
};

export default function Attractions() {
  return (
    <section id="atracciones" className="bg-cielo-100/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Instalaciones"
          title="Atracciones para explorar el planeta"
          subtitle="Cada rincón de Toy Planet es una misión distinta: aventura, movimiento e imaginación para peques de 1 a 12 años."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction) => (
            <article
              key={attraction.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Imagen placeholder — reemplazar con fotos reales */}
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${toneStyles[attraction.tone]}`}
              >
                <span
                  className="text-6xl transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  {attraction.emoji}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-space-900/60 px-3 py-1 text-xs font-bold text-white">
                  Foto próximamente
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {attraction.name}
                </h3>
                <p className="mt-2 text-ink-600">{attraction.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-600">
          * Las imágenes mostradas son ilustrativas; se reemplazarán con fotografías reales de
          las instalaciones.
        </p>
      </div>
    </section>
  );
}
