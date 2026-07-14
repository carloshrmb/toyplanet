/**
 * Encabezado de sección reutilizable: chip superior (kicker),
 * título en tipografía display y subtítulo opcional.
 */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  onDark = false,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span
        className={`inline-block rounded-full px-4 py-1 text-sm font-bold tracking-wide ${
          onDark ? "bg-white/10 text-star-400" : "bg-cielo-100 text-cielo-600"
        }`}
      >
        {kicker}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold sm:text-4xl ${
          onDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${onDark ? "text-cielo-200" : "text-ink-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
