import SectionHeading from "@/components/ui/SectionHeading";
import { accessPricing, noReentryNotice } from "@/data/site";

/** Tarifas de acceso general (sin evento) con aviso de no reingreso. */
export default function Access() {
  return (
    <section id="acceso" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Acceso general"
          title="Ven a jugar cualquier día"
          subtitle="Sin reservación y sin límite de tiempo: llega, paga tu acceso y a divertirse."
        />

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {accessPricing.map((item) => (
            <div
              key={item.concept}
              className="rounded-3xl border border-cielo-200 bg-cielo-50 p-7 text-center transition-shadow hover:shadow-lg"
            >
              <span className="text-4xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{item.concept}</h3>
              <p className="mt-2 font-display text-4xl font-extrabold text-cielo-600">
                {item.price}
              </p>
              <p className="mt-3 text-sm text-ink-500">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Aviso importante de no reingreso */}
        <div className="mx-auto mt-8 flex max-w-4xl items-start gap-3 rounded-2xl bg-sunset-100 p-5">
          <span className="text-2xl" aria-hidden="true">
            ⚠️
          </span>
          <p className="font-bold text-ink-900">{noReentryNotice}</p>
        </div>
      </div>
    </section>
  );
}
