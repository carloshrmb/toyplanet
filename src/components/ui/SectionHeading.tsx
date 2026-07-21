/**
 * Encabezado de sección reutilizable: chip superior (kicker),
 * título en tipografía display y subtítulo opcional.
 */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  tone = "cielo",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  /** Color del chip: cielo (default), grape o sunset */
  tone?: "cielo" | "grape" | "sunset";
}) {
  const chipTone = {
    cielo: "bg-cielo-500/15 text-cielo-700",
    grape: "bg-grape-100 text-grape-700",
    sunset: "bg-sunset-100 text-sunset-600",
  }[tone];

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className={`inline-block rounded-full px-4 py-1 text-sm font-bold tracking-wide ${chipTone}`}>
        {kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-ink-500">{subtitle}</p>}
    </div>
  );
}
