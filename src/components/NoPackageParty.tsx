import Astronaut from "@/components/ui/Astronaut";
import SectionHeading from "@/components/ui/SectionHeading";
import { noPackageParty } from "@/data/site";

/** Opción de festejo sencillo de $300 sobre el acceso, sin reservación. */
export default function NoPackageParty() {
  return (
    <section id="festeja-sin-paquete" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tone="grape"
          kicker="Festeja sin paquete"
          title={`Un festejo sencillo por ${noPackageParty.price}`}
          subtitle={noPackageParty.description}
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-cielo-200 bg-cielo-50 p-7">
              <h3 className="font-display text-lg font-bold text-ink-900">✅ Sí puedes traer</h3>
              <ul className="mt-4 space-y-3">
                {noPackageParty.allowed.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-ink-500">
                    <span className="mt-0.5 text-cielo-500" aria-hidden="true">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-grape-100 bg-grape-100/50 p-7">
              <h3 className="font-display text-lg font-bold text-ink-900">🚫 No está permitido</h3>
              <ul className="mt-4 space-y-3">
                {noPackageParty.notAllowed.map((item) => (
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

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-sunset-100 p-5">
            <span className="text-2xl" aria-hidden="true">
              📌
            </span>
            <p className="font-bold text-ink-900">{noPackageParty.note}</p>
          </div>

          {/* Mascota acompañando la sección */}
          <div className="absolute -left-24 top-1/3 hidden animate-float xl:block">
            <Astronaut className="h-32 w-32 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
