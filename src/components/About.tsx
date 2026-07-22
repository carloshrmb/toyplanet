import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/data/site";

const highlights = [
  {
    emoji: "🎪",
    title: "Juegos para todas las edades",
    text: "Albercas de pelotas, resbaladillas, túneles, botes de agua y zona arcade para peques de 1 a 12 años.",
  },
  {
    emoji: "🛡️",
    title: "Diversión segura",
    text: "Áreas diseñadas para niños y calcetines antiderrapantes obligatorios para jugar.",
  },
  {
    emoji: "🎂",
    title: "Eventos a tu medida",
    text: "Paquetes completos con anfitrión y comida, o un festejo sencillo sin reservación.",
  },
  {
    emoji: "📅",
    title: "Abierto todos los días",
    text: "De 11:00 AM a 6:30 PM, con acceso sin límite de tiempo.",
  },
];

export default function About() {
  return (
    <section id="quienes-somos" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Quiénes somos"
          title="Un mundo de diversión en Las Quintas"
          subtitle={`${business.name} es el planeta donde los niños exploran, saltan y celebran. Ven a jugar cualquier día o celebra aquí el cumpleaños de tus peques.`}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-cielo-200 bg-cielo-50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <span className="text-4xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-ink-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
