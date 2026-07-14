import SectionHeading from "@/components/ui/SectionHeading";
import { menuItems } from "@/data/site";

export default function FoodMenu() {
  return (
    <section id="menu" className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Menú"
          title="Combustible para pequeños astronautas"
          subtitle="Platillos recién preparados para recargar energía entre misión y misión."
        />

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="flex items-center gap-5 rounded-3xl border border-cielo-200 bg-cielo-100/40 p-5 transition-shadow hover:shadow-md"
            >
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm"
                aria-hidden="true"
              >
                {item.emoji}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-ink-900">{item.name}</h3>
                  {item.isExample && (
                    <span className="rounded-full bg-grape-100 px-2.5 py-0.5 text-xs font-bold text-grape-700">
                      Platillo de ejemplo
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-600">
          Pregunta por precios y menú completo en recepción. Los platillos marcados como
          ejemplo son sugerencias para esta propuesta.
        </p>
      </div>
    </section>
  );
}
