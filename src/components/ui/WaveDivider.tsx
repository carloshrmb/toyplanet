/**
 * Divisor de sección en forma de onda. `fill` recibe una clase
 * de Tailwind (ej. "fill-white") con el color de la sección
 * que viene DESPUÉS de la onda; `flip` la voltea verticalmente.
 */
export default function WaveDivider({
  fill = "fill-white",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-12 w-full sm:h-16 md:h-20 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        className={fill}
        d="M0,48 C240,95 480,0 720,32 C960,64 1200,90 1440,40 L1440,90 L0,90 Z"
      />
    </svg>
  );
}
