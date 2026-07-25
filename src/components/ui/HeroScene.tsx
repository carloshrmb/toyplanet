import Astronaut from "@/components/ui/Astronaut";
import Rocket from "@/components/ui/Rocket";

/**
 * Escena espacial del hero: el cohete es el protagonista al frente
 * (grande, inclinado, flotando con flama encendida), el planeta queda
 * de fondo abajo-izquierda con su órbita, y el astronauta acompaña más
 * pequeño a un lado. Todo vectorial. El movimiento es suave y en loop.
 */

// Estrellitas de 4 puntas distribuidas alrededor de la escena
const STARS = [
  { x: 350, y: 60, s: 1.3 },
  { x: 372, y: 150, s: 0.9 },
  { x: 40, y: 90, s: 1.0 },
  { x: 300, y: 300, s: 1.1 },
  { x: 24, y: 240, s: 0.8 },
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
      {/* Fondo vectorial: planeta + órbita + estrellas (define la altura) */}
      <svg viewBox="0 0 400 440" className="block h-auto w-full" aria-hidden="true">
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

        {STARS.map((p, i) => (
          <Star key={i} {...p} />
        ))}

        {/* Órbita del planeta */}
        <g transform="rotate(-16 108 360)">
          <ellipse
            cx="108"
            cy="360"
            rx="140"
            ry="42"
            fill="none"
            stroke="url(#ringFill)"
            strokeWidth="6"
            opacity="0.55"
          />
        </g>

        {/* Planeta (de fondo, abajo-izquierda) */}
        <circle cx="108" cy="362" r="66" fill="url(#planetFill)" />
        <ellipse cx="86" cy="336" rx="16" ry="10" fill="#8fd3ff" opacity="0.55" />
        <ellipse cx="126" cy="382" rx="22" ry="13" fill="#2e96cf" opacity="0.5" />
        <circle cx="132" cy="336" r="7" fill="#8fd3ff" opacity="0.5" />

        {/* Luna */}
        <circle cx="356" cy="118" r="12" fill="#ffd166" stroke="#fff" strokeWidth="2" />
      </svg>

      {/* Cohete protagonista: inclinación (rotate) + flotación (float) anidadas */}
      <div className="absolute left-[27%] top-[1%] w-[47%]">
        <div className="rotate-[12deg]">
          <div className="animate-float-rocket">
            <Rocket className="w-full drop-shadow-xl" />
          </div>
        </div>
      </div>

      {/* Astronauta acompañante (más pequeño, a un lado) */}
      <div className="absolute bottom-[7%] right-[1%] w-[27%] animate-float">
        <Astronaut className="w-full drop-shadow-lg" />
      </div>
    </div>
  );
}
