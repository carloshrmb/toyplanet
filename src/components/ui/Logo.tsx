import Image from "next/image";

/**
 * Logo oficial de Toy Planet (imagen real en public/images).
 * El PNG trae su propio fondo claro; sobre el header blanco se
 * integra sin problema, y en el footer azul va dentro de un
 * contenedor blanco redondeado (ver Footer.tsx).
 * `className` controla el tamaño (altura fija + w-auto conserva la proporción).
 */
export default function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-original.png"
      alt="Toy Planet — Un mundo de diversión"
      width={1252}
      height={1028}
      priority
      className={className}
      sizes="200px"
    />
  );
}
