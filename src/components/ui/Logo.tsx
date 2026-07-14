/**
 * Recreación en SVG del logo de Toy Planet:
 * arcoíris + planeta azul + cintillo rojo "Un mundo de diversión".
 * Es el único punto de color "explosivo" del sitio; se puede
 * sustituir por el archivo oficial del logo cuando esté disponible.
 */
export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 100"
      className={className}
      role="img"
      aria-label="Toy Planet — Un mundo de diversión"
    >
      {/* Arcoíris */}
      <g fill="none" strokeLinecap="round">
        <path d="M25 62 A50 50 0 0 1 125 62" stroke="#e63946" strokeWidth="7" />
        <path d="M32 62 A43 43 0 0 1 118 62" stroke="#ff8a3d" strokeWidth="7" />
        <path d="M39 62 A36 36 0 0 1 111 62" stroke="#ffd166" strokeWidth="7" />
        <path d="M46 62 A29 29 0 0 1 104 62" stroke="#7bc950" strokeWidth="7" />
        <path d="M53 62 A22 22 0 0 1 97 62" stroke="#3fa9f5" strokeWidth="7" />
      </g>

      {/* Planeta azul con continentes */}
      <circle cx="75" cy="60" r="24" fill="#3fa9f5" />
      <path
        d="M58 50 q8 -4 14 1 q6 5 14 0 q4 -2 8 1 M56 65 q10 6 20 2 q10 -4 18 2"
        stroke="#8fd3ff"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="75" cy="60" r="24" fill="none" stroke="#0e2a6b" strokeWidth="2.5" />

      {/* Cintillo rojo */}
      <g>
        <path d="M22 74 l10 -5 v16 l-10 -5 z" fill="#c1121f" />
        <path d="M128 74 l-10 -5 v16 l10 -5 z" fill="#c1121f" />
        <rect x="30" y="68" width="90" height="17" rx="4" fill="#e63946" />
        <text
          x="75"
          y="80"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          fill="#ffffff"
          fontFamily="var(--font-baloo), sans-serif"
        >
          Un mundo de diversión
        </text>
      </g>
    </svg>
  );
}
