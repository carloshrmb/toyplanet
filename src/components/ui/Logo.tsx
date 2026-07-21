/**
 * Recreación en SVG del logo real de Toy Planet:
 * "toy planet" en letras tipo burbuja con colores arcoíris sobre
 * un planeta azul con destellos, estrellas amarillas alrededor y
 * cintillo rojo con "UN MUNDO DE DIVERSIÓN".
 * Sustituir por el archivo oficial cuando esté disponible.
 */

// Colores arcoíris de las letras (verde, rojo, azul, amarillo, morado)
const TOY_COLORS = ["#58b947", "#e63946", "#3fa9f5"];
const PLANET_COLORS = ["#ffc93c", "#9a8ce8", "#58b947", "#e63946", "#3fa9f5", "#ffc93c"];

const STAR_POSITIONS = [
  { x: 28, y: 22, s: 1 },
  { x: 172, y: 18, s: 0.8 },
  { x: 14, y: 62, s: 0.7 },
  { x: 186, y: 58, s: 1 },
  { x: 44, y: 8, s: 0.6 },
  { x: 152, y: 4, s: 0.7 },
];

function Star4({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0,-7 Q1.5,-1.5 7,0 Q1.5,1.5 0,7 Q-1.5,1.5 -7,0 Q-1.5,-1.5 0,-7 Z"
      fill="#ffd166"
      stroke="#fff"
      strokeWidth="1"
    />
  );
}

export default function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  const letterStyle = {
    fontFamily: "var(--font-baloo), sans-serif",
    fontWeight: 800,
    paintOrder: "stroke" as const,
    stroke: "#ffffff",
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 200 150"
      className={className}
      role="img"
      aria-label="Toy Planet — Un mundo de diversión"
    >
      {/* Planeta azul con destellos */}
      <circle cx="100" cy="62" r="50" fill="#3fa9f5" stroke="#1f6fa0" strokeWidth="3" />
      <path
        d="M66 40 q14 -8 26 -2 q14 7 26 0 q8 -4 16 0"
        stroke="#8fd3ff"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M62 82 q16 9 32 3 q16 -6 34 3"
        stroke="#8fd3ff"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="76" cy="30" r="4" fill="#ffffff" opacity="0.9" />

      {/* Estrellas amarillas alrededor */}
      {STAR_POSITIONS.map((p, i) => (
        <Star4 key={i} {...p} />
      ))}

      {/* "toy" en letras burbuja */}
      <text x="100" y="58" textAnchor="middle" fontSize="34" strokeWidth="7" style={letterStyle}>
        {["t", "o", "y"].map((ch, i) => (
          <tspan key={i} fill={TOY_COLORS[i]}>
            {ch}
          </tspan>
        ))}
      </text>

      {/* "planet" en letras burbuja */}
      <text x="100" y="92" textAnchor="middle" fontSize="30" strokeWidth="6" style={letterStyle}>
        {["p", "l", "a", "n", "e", "t"].map((ch, i) => (
          <tspan key={i} fill={PLANET_COLORS[i]}>
            {ch}
          </tspan>
        ))}
      </text>

      {/* Cintillo rojo */}
      <path d="M30 118 l14 -7 v22 l-14 -7 z" fill="#c1121f" />
      <path d="M170 118 l-14 -7 v22 l14 -7 z" fill="#c1121f" />
      <path
        d="M40 112 Q100 122 160 112 L160 130 Q100 140 40 130 Z"
        fill="#e63946"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <text
        x="100"
        y="127"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="0.5"
        fontFamily="var(--font-baloo), sans-serif"
      >
        UN MUNDO DE DIVERSIÓN
      </text>
    </svg>
  );
}
