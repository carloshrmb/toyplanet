import PhotoCard from "@/components/ui/PhotoCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilityPhotos } from "@/data/site";

/**
 * Galería de instalaciones como carrusel deslizable (swipe horizontal)
 * con scroll-snap: no requiere librerías, funciona con gesto táctil en
 * mobile y con la rueda/arrastre en escritorio. Cada foto es más grande
 * y se alcanza a ver la siguiente para invitar a deslizar.
 */
export default function Facilities() {
  return (
    <section id="instalaciones" className="bg-cielo-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Instalaciones"
          title="Explora nuestro planeta de juegos"
          subtitle="Descubre todo lo que te espera"
        />
      </div>

      {/* Carril deslizable a ancho completo para mejor gesto de swipe */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:gap-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Espaciador para centrar la primera tarjeta dentro del max-w-6xl */}
        <div className="shrink-0 lg:w-[max(0px,calc((100vw-72rem)/2))]" aria-hidden="true" />
        {facilityPhotos.map((photo, i) => (
          <div
            key={photo.src}
            className="w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-[31%]"
          >
            <PhotoCard
              photo={photo}
              priority={i === 0}
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 31vw"
            />
          </div>
        ))}
        <div className="w-4 shrink-0 sm:w-6" aria-hidden="true" />
      </div>

      <p className="mt-2 text-center text-sm font-bold text-cielo-700">
        Desliza para ver más →
      </p>
    </section>
  );
}
