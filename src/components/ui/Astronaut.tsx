/**
 * Mascota astronauta de Toy Planet (elemento firma del sitio).
 * Aparece flotando en el hero y como easter egg en la
 * confirmación del formulario de cotización.
 */
export default function Astronaut({ className = "h-40 w-40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label="Astronauta de Toy Planet">
      {/* Mochila espacial */}
      <rect x="55" y="80" width="90" height="80" rx="22" fill="#cdeafd" />

      {/* Piernas */}
      <rect x="70" y="150" width="24" height="48" rx="12" fill="#ffffff" stroke="#8fcdf9" strokeWidth="3" />
      <rect x="106" y="150" width="24" height="48" rx="12" fill="#ffffff" stroke="#8fcdf9" strokeWidth="3" />
      <ellipse cx="82" cy="202" rx="16" ry="10" fill="#ff8a3d" />
      <ellipse cx="118" cy="202" rx="16" ry="10" fill="#ff8a3d" />

      {/* Brazo izquierdo (saludando) */}
      <path
        d="M62 105 Q30 95 28 68"
        stroke="#ffffff"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M62 105 Q30 95 28 68" stroke="#8fcdf9" strokeWidth="26" strokeLinecap="round" fill="none" opacity="0.25" />
      <circle cx="28" cy="64" r="13" fill="#ff8a3d" />

      {/* Brazo derecho */}
      <path
        d="M138 105 Q165 118 168 142"
        stroke="#ffffff"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="169" cy="146" r="13" fill="#ff8a3d" />

      {/* Cuerpo */}
      <rect x="60" y="90" width="80" height="80" rx="28" fill="#ffffff" stroke="#8fcdf9" strokeWidth="3" />
      {/* Panel de control del pecho */}
      <rect x="82" y="118" width="36" height="26" rx="8" fill="#e9f5ff" stroke="#8fcdf9" strokeWidth="2.5" />
      <circle cx="92" cy="131" r="4" fill="#ff8a3d" />
      <circle cx="108" cy="131" r="4" fill="#8e7ce8" />

      {/* Casco */}
      <circle cx="100" cy="62" r="44" fill="#ffffff" stroke="#8fcdf9" strokeWidth="3" />
      {/* Visor con carita feliz */}
      <circle cx="100" cy="62" r="32" fill="#0e2a6b" />
      <circle cx="88" cy="58" r="4.5" fill="#ffffff" />
      <circle cx="112" cy="58" r="4.5" fill="#ffffff" />
      <path d="M88 72 Q100 82 112 72" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Brillo del casco */}
      <path d="M72 40 Q80 28 94 26" stroke="#8fcdf9" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Antena */}
      <line x1="100" y1="18" x2="100" y2="8" stroke="#8fcdf9" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="6" r="5" fill="#ffd166" />
    </svg>
  );
}
