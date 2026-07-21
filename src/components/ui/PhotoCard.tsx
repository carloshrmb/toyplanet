import Image from "next/image";
import type { GalleryPhoto } from "@/data/site";

/**
 * Tarjeta de foto vertical con marco blanco redondeado y etiqueta.
 * Las fotos reales son retrato (739×960), por eso el aspecto 3/4.
 */
export default function PhotoCard({
  photo,
  rotate = "",
  priority = false,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: {
  photo: GalleryPhoto;
  /** Clase de rotación decorativa, ej. "rotate-2" */
  rotate?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={`group overflow-hidden rounded-3xl bg-white p-2 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ${rotate}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="px-2 py-2.5 text-center text-sm font-bold text-ink-900">
        {photo.label}
      </figcaption>
    </figure>
  );
}
