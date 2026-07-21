/**
 * Destellos decorativos (estrellas de 4 puntas y burbujas) para
 * las secciones de cielo. Posiciones fijas para evitar diferencias
 * entre el render del servidor y el del cliente.
 */
const SPARKLES = [
  { x: 6, y: 20, s: 1.0, d: 0, star: true },
  { x: 14, y: 70, s: 0.6, d: 1.4, star: false },
  { x: 24, y: 12, s: 0.7, d: 0.6, star: true },
  { x: 35, y: 82, s: 0.9, d: 2.2, star: true },
  { x: 46, y: 28, s: 0.5, d: 1.0, star: false },
  { x: 58, y: 74, s: 0.7, d: 0.2, star: true },
  { x: 67, y: 14, s: 0.9, d: 1.8, star: true },
  { x: 78, y: 60, s: 0.5, d: 2.6, star: false },
  { x: 88, y: 26, s: 1.0, d: 0.9, star: true },
  { x: 95, y: 76, s: 0.6, d: 1.6, star: true },
];

export default function Sparkles({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {SPARKLES.map((p, i) =>
        p.star ? (
          <path
            key={i}
            transform={`translate(${p.x} ${p.y}) scale(${p.s * 0.35})`}
            d="M0,-7 Q1.5,-1.5 7,0 Q1.5,1.5 0,7 Q-1.5,1.5 -7,0 Q-1.5,-1.5 0,-7 Z"
            fill="#ffd166"
            className="animate-twinkle"
            style={{ animationDelay: `${p.d}s` }}
          />
        ) : (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.s * 0.8}
            fill="#ffffff"
            opacity="0.7"
            className="animate-twinkle"
            style={{ animationDelay: `${p.d}s` }}
          />
        )
      )}
    </svg>
  );
}
