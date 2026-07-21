import SectionHeading from "@/components/ui/SectionHeading";
import { eventMenu } from "@/data/site";

const columns = [eventMenu.kids, eventMenu.adults, eventMenu.drinks];

/** Menú de alimentos para eventos, separado por niños/adultos/bebidas. */
export default function EventMenu() {
  return (
    <section id="menu" className="bg-cielo-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tone="sunset"
          kicker="Menú para eventos"
          title="Combustible para pequeños astronautas"
          subtitle="Platillos recién preparados para los peques y sus acompañantes."
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title} className="rounded-3xl bg-white p-7 shadow-md">
              <h3 className="text-center font-display text-xl font-bold text-ink-900">
                <span aria-hidden="true">{col.emoji}</span> {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-ink-500">
                    <span className="mt-0.5 text-sunset-500" aria-hidden="true">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl space-y-2 text-center text-sm font-bold text-ink-500">
          {eventMenu.notes.map((note) => (
            <p key={note}>🍟 {note}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
