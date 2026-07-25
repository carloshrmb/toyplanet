/**
 * Cohete ilustrado (vectorial) para el hero. La flama de la base
 * usa la clase `animate-flame` para parpadear como fuego encendido.
 * El movimiento de flotación se aplica desde afuera (contenedor con
 * `animate-float-rocket`), para poder combinarlo con la inclinación.
 */
export default function Rocket({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 210" className={className} role="img" aria-label="Cohete de Toy Planet">
      {/* Flama animada (detrás de la tobera) */}
      <g className="animate-flame">
        <path d="M38 156 Q50 208 62 156 Q50 180 38 156 Z" fill="#ff8a3d" />
        <path d="M43 156 Q50 194 57 156 Q50 176 43 156 Z" fill="#ffd166" />
      </g>

      {/* Aletas */}
      <path d="M32 118 C14 138 12 152 17 160 L34 144 Z" fill="#f26e1d" />
      <path d="M68 118 C86 138 88 152 83 160 L66 144 Z" fill="#f26e1d" />

      {/* Cuerpo */}
      <path
        d="M50 6 C64 18 70 46 70 80 C70 112 67 140 60 152 L40 152 C33 140 30 112 30 80 C30 46 36 18 50 6 Z"
        fill="#ffffff"
        stroke="#8fcdf9"
        strokeWidth="3"
      />

      {/* Punta */}
      <path d="M50 6 C60 16 66 38 67 58 L33 58 C34 38 40 16 50 6 Z" fill="#ff8a3d" />
      {/* Franja bajo la punta */}
      <rect x="32.5" y="58" width="35" height="7" rx="3" fill="#e63946" />

      {/* Ventana */}
      <circle cx="50" cy="94" r="14" fill="#cdeafd" stroke="#3fa9f5" strokeWidth="4" />
      <path
        d="M43 90 Q50 84 57 90"
        stroke="#ffffff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Tobera */}
      <path d="M41 150 L59 150 L55 163 L45 163 Z" fill="#3fa9f5" />
    </svg>
  );
}
