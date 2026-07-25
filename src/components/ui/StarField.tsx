/**
 * Campo de estrellas: pequeños puntos blancos dispersos en la parte
 * superior del hero que titilan en loop. Cada punto tiene un retardo y
 * una duración distintos para que el parpadeo no se sienta sincronizado.
 * Posiciones fijas (no aleatorias) para evitar diferencias entre el
 * render del servidor y el del cliente.
 */
const DOTS = [
  { x: 6, y: 14, s: 3, d: 0.0, dur: 3.1 },
  { x: 15, y: 34, s: 2, d: 1.3, dur: 4.2 },
  { x: 21, y: 8, s: 4, d: 0.6, dur: 3.6 },
  { x: 29, y: 24, s: 2, d: 2.1, dur: 2.8 },
  { x: 37, y: 40, s: 3, d: 0.9, dur: 4.6 },
  { x: 44, y: 12, s: 2, d: 1.7, dur: 3.3 },
  { x: 52, y: 30, s: 3, d: 0.3, dur: 3.9 },
  { x: 59, y: 6, s: 2, d: 2.4, dur: 2.9 },
  { x: 66, y: 22, s: 4, d: 1.1, dur: 4.4 },
  { x: 73, y: 38, s: 2, d: 0.5, dur: 3.2 },
  { x: 80, y: 10, s: 3, d: 1.9, dur: 3.7 },
  { x: 87, y: 28, s: 2, d: 0.8, dur: 4.1 },
  { x: 93, y: 16, s: 3, d: 2.2, dur: 2.7 },
  { x: 97, y: 42, s: 2, d: 1.4, dur: 3.8 },
];

export default function StarField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-2/3">
      {DOTS.map((p, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            animationDelay: `${p.d}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
