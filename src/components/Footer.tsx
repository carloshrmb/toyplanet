import Logo from "@/components/ui/Logo";
import WaveDivider from "@/components/ui/WaveDivider";
import { business, navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative bg-cielo-700 text-white">
      <WaveDivider fill="fill-cielo-700" flip className="-mt-px bg-white" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo className="h-24 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cielo-100">{business.slogan}</p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <h3 className="font-display text-lg font-bold">Explora</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cielo-100 transition-colors hover:text-star-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#festeja-sin-paquete"
                  className="text-sm text-cielo-100 transition-colors hover:text-star-400"
                >
                  Festeja sin paquete
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-lg font-bold">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-cielo-100">
              <li>{business.address}</li>
              <li>
                <a href={business.phoneHref} className="transition-colors hover:text-star-400">
                  Tel. y WhatsApp: {business.phoneDisplay}
                </a>
              </li>
              <li>{business.schedule}</li>
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-star-400"
                >
                  Instagram: @{business.instagram}
                </a>
              </li>
              <li>
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-star-400"
                >
                  Facebook: {business.facebookLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-cielo-100/80">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
          </p>
          <p className="mt-1">Sitio demostrativo — propuesta de diseño web.</p>
        </div>
      </div>
    </footer>
  );
}
