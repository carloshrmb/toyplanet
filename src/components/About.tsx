import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/data/site";

const highlights = [
  {
    emoji: "🎪",
    title: "9+ atracciones",
    text: "Desde la alberca de pelotas hasta la mini tirolesa: retos y juegos para cada edad.",
  },
  {
    emoji: "🛡️",
    title: "Diversión segura",
    text: "Áreas diseñadas para peques de 1 a 12 años y calcetines antiderrapantes obligatorios.",
  },
  {
    emoji: "🎂",
    title: "Fiestas a tu medida",
    text: "Festeja con paquete completo o trae tu propia decoración y pastel: tú eliges.",
  },
  {
    emoji: "📅",
    title: "Abierto todos los días",
    text: "De 12:00 PM a 8:00 PM, sin límite de tiempo de juego para los niños.",
  },
];

export default function About() {
  return (
    <section id="quienes-somos" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Quiénes somos"
          title="Un pequeño universo hecho para jugar"
          subtitle={`En ${business.name} creemos que cada niño merece su propio planeta de diversión. Somos un salón de juegos y eventos en Las Quintas, Culiacán, donde los peques exploran, saltan y celebran sin límite de tiempo.`}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-cielo-200 bg-cielo-100/50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <span className="text-4xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-ink-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
