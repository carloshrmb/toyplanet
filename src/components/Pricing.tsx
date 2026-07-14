import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";
import WaveDivider from "@/components/ui/WaveDivider";
import { accessPricing, partyPackages } from "@/data/site";

export default function Pricing() {
  return (
    <section id="paquetes" className="relative bg-space-800">
      <WaveDivider fill="fill-space-800" flip className="-mt-px bg-cielo-100/60" />
      <Stars className="opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          onDark
          kicker="Paquetes y precios"
          title="Elige cómo quieres festejar"
          subtitle="Entrada libre para jugar todos los días, o celebra el cumpleaños de tus peques como tú prefieras."
        />

        {/* Precios de acceso (reales) */}
        <div className="mx-auto mb-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {accessPricing.map((item) => (
            <div
              key={item.concept}
              className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-bold text-cielo-200">{item.concept}</p>
              <p className="mt-2 font-display text-4xl font-extrabold text-star-400">
                {item.price}
              </p>
              <p className="mt-2 text-sm text-cielo-200">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Paquetes de fiesta */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {partyPackages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                pkg.highlight
                  ? "bg-white shadow-2xl ring-4 ring-star-400"
                  : "bg-white/95 shadow-lg"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-star-400 px-4 py-1 text-sm font-bold text-ink-900 shadow">
                  ⭐ Más popular
                </span>
              )}

              <h3 className="font-display text-2xl font-bold text-ink-900">{pkg.name}</h3>
              <p className="mt-1 text-sm text-ink-600">{pkg.tagline}</p>
              <p className="mt-4 font-display text-4xl font-extrabold text-cielo-600">
                {pkg.price}
              </p>

              {pkg.isExample ? (
                <span className="mt-2 inline-block w-fit rounded-full bg-grape-100 px-3 py-1 text-xs font-bold text-grape-700">
                  * Precio de ejemplo, sujeto a confirmación
                </span>
              ) : (
                <span className="mt-2 inline-block w-fit rounded-full bg-cielo-100 px-3 py-1 text-xs font-bold text-cielo-600">
                  Precio vigente
                </span>
              )}

              <ul className="mt-5 flex-1 space-y-3">
                {pkg.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-600">
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
                    : "bg-cielo-100 text-cielo-600 hover:bg-cielo-200"
                }`}
              >
                Cotizar este paquete
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cielo-200">
          * Los paquetes marcados son ejemplos ilustrativos para esta propuesta; los precios e
          inclusiones finales se confirman directamente con Toy Planet.
        </p>
      </div>

      <WaveDivider fill="fill-white" />
    </section>
  );
}
