import FunCard, { type FunColor } from "@/components/ui/FunCard";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights: {
  emoji: string;
  title: string;
  text: string;
  color: FunColor;
}[] = [
  {
    emoji: "🎪",
    title: "Juegos para todas las edades",
    text: "Albercas de pelotas, resbaladillas, túneles, botes de agua y zona arcade para peques de 1 a 12 años.",
    color: "blue",
  },
  {
    emoji: "🛡️",
    title: "Diversión segura",
    text: "Áreas diseñadas para niños y calcetines antiderrapantes obligatorios para jugar.",
    color: "green",
  },
  {
    emoji: "🎂",
    title: "Eventos a tu medida",
    text: "Paquetes completos con anfitrión y comida, o un festejo sencillo sin reservación.",
    color: "yellow",
  },
  {
    emoji: "📅",
    title: "Abierto todos los días",
    text: "De 11:00 AM a 6:30 PM, con acceso sin límite de tiempo.",
    color: "orange",
  },
];

export default function About() {
  return (
    <section id="quienes-somos" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Quiénes somos"
          title="Un mundo de diversión"
          subtitle="Un espacio donde los niños y las niñas juegan, imaginan y celebran, mientras las familias comparten momentos que se convierten en recuerdos inolvidables. Más de 15 años creando sonrisas y recuerdos para miles de familias."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <FunCard key={item.title} color={item.color}>
              <span className="text-4xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm opacity-95">{item.text}</p>
            </FunCard>
          ))}
        </div>
      </div>
    </section>
  );
}
