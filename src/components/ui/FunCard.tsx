import type { ReactNode } from "react";

/**
 * Tarjeta ilustrativa de color vivo con destellos en las esquinas y
 * una ola sutil en la parte inferior. Se usa en "Quiénes somos" y
 * "Acceso general" para dar un estilo más lúdico que las tarjetas planas.
 */
export type FunColor = "blue" | "green" | "yellow" | "orange";

const VARIANTS: Record<FunColor, { bg: string; wave: string; dark: boolean }> = {
  blue: { bg: "bg-[#3fa9f5]", wave: "fill-[#2f93d4]", dark: false },
  green: { bg: "bg-[#57b84a]", wave: "fill-[#469a3b]", dark: false },
  yellow: { bg: "bg-[#ffcb3d]", wave: "fill-[#f2b525]", dark: true },
  orange: { bg: "bg-[#ff8a3d]", wave: "fill-[#f06f1e]", dark: false },
};

/** Estrella de 4 puntas (destello decorativo) */
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0 Q13.6 8.4 24 12 Q13.6 15.6 12 24 Q10.4 15.6 0 12 Q10.4 8.4 12 0 Z" />
    </svg>
  );
}

export default function FunCard({
  color,
  children,
}: {
  color: FunColor;
  children: ReactNode;
}) {
  const v = VARIANTS[color];
  return (
    <div
      className={`relative overflow-hidden rounded-3xl px-6 pb-12 pt-7 text-center shadow-lg transition-transform duration-200 hover:-translate-y-1 ${v.bg} ${
        v.dark ? "text-ink-900" : "text-white"
      }`}
    >
      {/* Destellos en las esquinas */}
      <Sparkle className="absolute left-3 top-3 h-5 w-5 opacity-80" />
      <Sparkle className="absolute right-4 top-6 h-3 w-3 opacity-60" />
      <Sparkle className="absolute right-7 bottom-16 h-3.5 w-3.5 opacity-50" />

      {/* Contenido */}
      <div className="relative z-10">{children}</div>

      {/* Ola inferior */}
      <svg
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-7 w-full"
      >
        <path className={v.wave} d="M0,22 C38,42 78,6 118,18 C158,30 186,10 200,16 L200,40 L0,40 Z" />
      </svg>
    </div>
  );
}
