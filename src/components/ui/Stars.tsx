/**
 * Cielo estelar decorativo para las secciones azul-espacio.
 * Posiciones fijas (no aleatorias) para evitar diferencias
 * entre el render del servidor y el del cliente.
 */
const STARS = [
  { x: 4, y: 18, r: 1.6, d: 0 },
  { x: 11, y: 62, r: 1.1, d: 1.2 },
  { x: 16, y: 30, r: 2.0, d: 0.5 },
  { x: 22, y: 78, r: 1.3, d: 2.1 },
  { x: 27, y: 12, r: 1.2, d: 1.7 },
  { x: 33, y: 48, r: 1.8, d: 0.3 },
  { x: 38, y: 85, r: 1.1, d: 2.6 },
  { x: 44, y: 22, r: 1.5, d: 1.0 },
  { x: 50, y: 65, r: 1.2, d: 0.8 },
  { x: 55, y: 8, r: 2.1, d: 1.9 },
  { x: 61, y: 42, r: 1.3, d: 0.2 },
  { x: 66, y: 74, r: 1.7, d: 2.4 },
  { x: 71, y: 28, r: 1.1, d: 1.4 },
  { x: 77, y: 58, r: 1.9, d: 0.6 },
  { x: 82, y: 15, r: 1.2, d: 2.0 },
  { x: 87, y: 82, r: 1.4, d: 1.1 },
  { x: 92, y: 38, r: 1.8, d: 0.4 },
  { x: 96, y: 68, r: 1.2, d: 2.8 },
];

export default function Stars({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {STARS.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r * 0.28}
          fill="#ffe09a"
          className="animate-twinkle"
          style={{ animationDelay: `${s.d}s` }}
        />
      ))}
    </svg>
  );
}
