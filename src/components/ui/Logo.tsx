import Image from "next/image";

/**
 * Logo oficial de Toy Planet (logo-v2, PNG con fondo transparente).
 * Al ser transparente se integra tanto sobre el header blanco como
 * sobre el footer azul, sin necesidad de recuadro.
 * `className` controla el tamaño (altura fija + w-auto conserva la proporción).
 */
export default function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-v2.png"
      alt="Toy Planet — Niños en un mundo de diversión"
      width={1563}
      height={1563}
      priority
      className={className}
      sizes="200px"
    />
  );
}
