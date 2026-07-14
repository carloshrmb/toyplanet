import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/data/site";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.22-1-.48-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 2.7a7.1 7.1 0 1 0 0 14.2 7.1 7.1 0 0 0 0-14.2zm0 11.7a4.6 4.6 0 1 1 0-9.2 4.6 4.6 0 0 1 0 9.2zm7.3-11.9a1.66 1.66 0 1 1-3.32 0 1.66 1.66 0 0 1 3.32 0z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

export default function Location() {
  return (
    <section id="ubicacion" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Ubicación y contacto"
          title="Ven a visitarnos"
          subtitle="Estamos en el corazón de Las Quintas. ¡Te esperamos todos los días!"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Datos de contacto */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-3xl border border-cielo-200 bg-cielo-100/40 p-6">
              <span className="text-3xl" aria-hidden="true">📍</span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">Dirección</h3>
                <p className="mt-1 text-ink-600">{business.address}</p>
                <a
                  href={business.mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-bold text-cielo-600 hover:underline"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-cielo-200 bg-cielo-100/40 p-6">
              <span className="text-3xl" aria-hidden="true">📞</span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">Teléfono</h3>
                <a
                  href={business.phoneHref}
                  className="mt-1 inline-block text-lg font-bold text-cielo-600 hover:underline"
                >
                  {business.phoneDisplay}
                </a>
                <p className="mt-1 text-sm text-ink-600">
                  Llámanos para reservar o resolver cualquier duda.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-cielo-200 bg-cielo-100/40 p-6">
              <span className="text-3xl" aria-hidden="true">🕐</span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">Horario</h3>
                <p className="mt-1 text-ink-600">{business.schedule}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-cielo-200 bg-cielo-100/40 p-6">
              <span className="text-3xl" aria-hidden="true">💬</span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">Síguenos</h3>
                <div className="mt-3 flex gap-3">
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-grape-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-grape-700"
                  >
                    <InstagramIcon />@{business.instagram}
                  </a>
                  <a
                    href={business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-cielo-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-cielo-600"
                  >
                    <FacebookIcon />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa embebido */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src={business.mapsEmbedUrl}
              title="Mapa de ubicación de Toy Planet"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
