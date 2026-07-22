import Astronaut from "@/components/ui/Astronaut";

/**
 * Escena ilustrada del hero: un planeta con anillos, lunas y
 * estrellas, con la mascota astronauta flotando al frente.
 * Todo es vectorial (sin fotografías), acorde a la línea espacial
 * de la marca. Reutiliza el componente Astronaut existente.
 */

// Estrellitas de 4 puntas distribuidas alrededor del planeta
const STARS = [
  { x: 40, y: 60, s: 1.1 },
  { x: 330, y: 48, s: 1.4 },
  { x: 360, y: 150, s: 0.9 },
  { x: 60, y: 200, s: 0.8 },
  { x: 300, y: 250, s: 1.1 },
  { x: 24, y: 130, s: 0.7 },
];

function Star({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0,-9 Q2,-2 9,0 Q2,2 0,9 Q-2,2 -9,0 Q-2,-2 0,-9 Z"
      fill="#ffd166"
      stroke="#fff"
      strokeWidth="1.2"
    />
  );
}

export default function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 430" className="h-auto w-full" role="img" aria-label="Planeta y astronauta de Toy Planet">
        <defs>
          <radialGradient id="planetFill" cx="38%" cy="34%" r="75%">
            <stop offset="0%" stopColor="#aedef6" />
            <stop offset="55%" stopColor="#4fb3e8" />
            <stop offset="100%" stopColor="#2e96cf" />
          </radialGradient>
          <linearGradient id="ringFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b3a6ef" />
            <stop offset="50%" stopColor="#9a8ce8" />
            <stop offset="100%" stopColor="#ffa25c" />
          </linearGradient>
        </defs>

        {/* Estrellas de fondo */}
        {STARS.map((p, i) => (
          <Star key={i} {...p} />
        ))}

        {/* Anillo (mitad trasera, detrás del planeta) */}
        <g transform="rotate(-18 200 185)">
          <path
            d="M56 185 A144 40 0 0 1 344 185"
            fill="none"
            stroke="url(#ringFill)"
            strokeWidth="15"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>

        {/* Planeta */}
        <circle cx="200" cy="185" r="92" fill="url(#planetFill)" />
        {/* Cráteres y detalles de superficie */}
        <ellipse cx="168" cy="150" rx="22" ry="14" fill="#8fd3ff" opacity="0.55" />
        <ellipse cx="232" cy="205" rx="30" ry="18" fill="#2e96cf" opacity="0.5" />
        <circle cx="240" cy="140" r="10" fill="#8fd3ff" opacity="0.5" />
        <circle cx="170" cy="210" r="7" fill="#8fd3ff" opacity="0.5" />
        {/* Brillo superior */}
        <path
          d="M150 120 Q170 100 200 100"
          stroke="#eaf7ff"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />

        {/* Anillo (mitad delantera, sobre el planeta) */}
        <g transform="rotate(-18 200 185)">
          <path
            d="M56 185 A144 40 0 0 0 344 185"
            fill="none"
            stroke="url(#ringFill)"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </g>

        {/* Lunas */}
        <circle cx="330" cy="120" r="13" fill="#ffd166" stroke="#fff" strokeWidth="2" />
        <circle cx="70" cy="250" r="10" fill="#ff8a3d" stroke="#fff" strokeWidth="2" />
      </svg>

      {/* Astronauta flotando al frente (mascota firma) */}
      <div className="absolute bottom-0 left-2 animate-float sm:left-6">
        <Astronaut className="h-36 w-36 drop-shadow-xl sm:h-44 sm:w-44" />
      </div>
    </div>
  );
}
