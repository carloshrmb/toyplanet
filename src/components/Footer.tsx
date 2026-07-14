import Logo from "@/components/ui/Logo";
import Stars from "@/components/ui/Stars";
import WaveDivider from "@/components/ui/WaveDivider";
import { business, navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative bg-space-950">
      <WaveDivider fill="fill-space-950" flip className="-mt-px bg-white" />
      <Stars className="opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-auto" />
              <span className="font-display text-xl font-bold text-white">{business.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cielo-200">{business.slogan}</p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <h3 className="font-display text-lg font-bold text-white">Explora</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cielo-200 transition-colors hover:text-star-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-lg font-bold text-white">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-cielo-200">
              <li>{business.address}</li>
              <li>
                <a href={business.phoneHref} className="transition-colors hover:text-star-400">
                  {business.phoneDisplay}
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
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-cielo-200/70">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
          </p>
          <p className="mt-1">Sitio demostrativo — propuesta de diseño web.</p>
        </div>
      </div>
    </footer>
  );
}
