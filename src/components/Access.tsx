import FunCard, { type FunColor } from "@/components/ui/FunCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { accessPricing, noReentryNotice } from "@/data/site";

/** Colores vivos para las 3 tarjetas de acceso (mismo estilo que Quiénes somos) */
const CARD_COLORS: FunColor[] = ["blue", "green", "orange"];

/** Tarifas de acceso general (sin evento) con aviso de no reingreso. */
export default function Access() {
  return (
    <section id="acceso" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Acceso general"
          title="Ven a jugar cualquier día"
          subtitle="Sin reservación y sin límite de tiempo. Solo llega, paga tu acceso y... ¡a divertirse!"
        />

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {accessPricing.map((item, i) => (
            <FunCard key={item.concept} color={CARD_COLORS[i % CARD_COLORS.length]}>
              <span className="text-4xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{item.concept}</h3>
              <p className="mt-2 font-display text-4xl font-extrabold">{item.price}</p>
              <p className="mt-3 text-sm opacity-95">{item.detail}</p>
            </FunCard>
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
