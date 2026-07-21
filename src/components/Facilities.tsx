import PhotoCard from "@/components/ui/PhotoCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilityPhotos } from "@/data/site";

/** Rotaciones decorativas alternadas para el efecto de collage */
const ROTATIONS = ["rotate-1", "-rotate-1", "rotate-0", "-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "rotate-0"];

export default function Facilities() {
  return (
    <section id="instalaciones" className="bg-cielo-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Instalaciones"
          title="Explora nuestro planeta de juegos"
          subtitle="Así se ve la diversión por dentro: fotos reales de nuestras instalaciones."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {facilityPhotos.map((photo, i) => (
            <PhotoCard key={photo.src} photo={photo} rotate={ROTATIONS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
