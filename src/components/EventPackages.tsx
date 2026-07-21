import Astronaut from "@/components/ui/Astronaut";
import PhotoCard from "@/components/ui/PhotoCard";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  allowedItems,
  allowedItemsNote,
  eventAreaPhotos,
  eventPackages,
  notAllowedItems,
  packageBaseIncludes,
  packageExtras,
} from "@/data/site";

export default function EventPackages() {
  return (
    <section id="paquetes" className="bg-cielo-200 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Paquetes de eventos"
          title="Celebra su cumpleaños en el planeta Toy"
          subtitle="Elige el paquete que mejor le quede a tu fiesta; nosotros ponemos el anfitrión, la comida y la diversión."
        />

        {/* Lo que incluyen los 3 paquetes */}
        <div className="mx-auto mb-10 max-w-3xl rounded-3xl bg-white/70 p-6 text-center">
          <h3 className="font-display text-lg font-bold text-ink-900">
            Todos los paquetes incluyen
          </h3>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {packageBaseIncludes.map((item) => (
              <li
                key={item}
                className="rounded-full bg-cielo-500/15 px-4 py-1.5 text-sm font-bold text-cielo-700"
              >
                ✦ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Los 3 paquetes */}
        <div className="grid gap-6 md:grid-cols-3">
          {eventPackages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl bg-white p-7 ${
                pkg.highlight ? "shadow-2xl ring-4 ring-star-400" : "shadow-lg"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-star-400 px-4 py-1 text-sm font-bold text-ink-900 shadow">
                  ⭐ Más popular
                </span>
              )}

              <h3 className="font-display text-2xl font-bold text-ink-900">{pkg.name}</h3>
              <p className="mt-3 font-display text-4xl font-extrabold text-cielo-600">
                {pkg.price}
              </p>
              {pkg.priceNote && (
                <p className="mt-1 text-xs font-bold text-ink-500">{pkg.priceNote}</p>
              )}

              <ul className="mt-5 flex-1 space-y-3">
                {pkg.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-500">
                    <span className="mt-0.5 text-cielo-500" aria-hidden="true">
                      ✦
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cotizacion"
                className={`mt-7 rounded-full px-6 py-3 text-center font-bold transition-colors ${
                  pkg.highlight
                    ? "bg-sunset-500 text-white hover:bg-sunset-600"
                    : "bg-cielo-100 text-cielo-700 hover:bg-cielo-200"
                }`}
              >
                Cotizar este paquete
              </a>
            </article>
          ))}
        </div>

        {/* Costos extra */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <span className="font-bold text-ink-900">Costos extra:</span>
          {packageExtras.map((extra) => (
            <span
              key={extra.concept}
              className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-ink-900"
            >
              {extra.concept}: <span className="text-cielo-700">{extra.price}</span>
            </span>
          ))}
        </div>

        {/* Área de eventos (fotos reales) */}
        <div className="mt-16">
          <h3 className="text-center font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Nuestra área de eventos
          </h3>
          <div className="relative mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
            {eventAreaPhotos.map((photo, i) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                rotate={["-rotate-1", "rotate-0", "rotate-1"][i]}
                sizes="(max-width: 768px) 33vw, 240px"
              />
            ))}
            <div className="absolute -right-6 -top-12 hidden animate-float lg:block">
              <Astronaut className="h-28 w-28 drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Qué sí / qué no se puede ingresar */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-lg">
            <h3 className="font-display text-xl font-bold text-ink-900">
              ✅ Qué puedes ingresar a tu evento
            </h3>
            <div className="mt-5 space-y-5">
              {allowedItems.map((group) => (
                <div key={group.category}>
                  <h4 className="font-bold text-cielo-700">
                    <span aria-hidden="true">{group.emoji}</span> {group.category}
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-cielo-100 px-3 py-1 text-sm text-ink-900"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-2xl bg-sunset-100 p-4 text-sm font-bold text-ink-900">
              📌 {allowedItemsNote}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-lg">
            <h3 className="font-display text-xl font-bold text-ink-900">
              🚫 Qué no está permitido ingresar
            </h3>
            <p className="mt-1 text-sm text-ink-500">Aplica con o sin paquete de evento.</p>
            <ul className="mt-5 space-y-3">
              {notAllowedItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-500">
                  <span className="mt-0.5 text-ribbon-500" aria-hidden="true">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
