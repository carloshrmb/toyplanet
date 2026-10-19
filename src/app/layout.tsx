import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { business } from "@/data/site";
import "./globals.css";

// Títulos: redondeada y amigable. Body: limpia y legible.
const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

const SITE_TITLE =
  "Toy Planet | Salón de juegos y eventos infantiles en Culiacán";
const SITE_DESCRIPTION =
  "Área de juegos y salón de fiestas infantiles en Culiacán. En Toy Planet los niños de 1 a 12 años disfrutan albercas de pelotas, resbaladillas, arcade y eventos.";
const OG_IMAGE = "/images/fachada-letrero-toyplanet.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: SITE_TITLE,
    template: "%s | Toy Planet",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Toy Planet",
    "salón de fiestas infantiles Culiacán",
    "área de juegos infantil Culiacán",
    "eventos infantiles Culiacán",
    "fiestas infantiles Culiacán",
    "salón de eventos infantiles",
    "alberca de pelotas Culiacán",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: business.url,
    siteName: business.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 739,
        height: 960,
        alt: "Interior de Toy Planet, salón de juegos y fiestas infantiles en Culiacán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#d0ecfa",
};

// Datos estructurados (schema.org) — EntertainmentBusiness.
// Sin geo, precios ni reseñas (no se tienen confirmados).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: business.name,
  description: SITE_DESCRIPTION,
  url: business.url,
  telephone: business.phoneE164,
  image: `${business.url}${OG_IMAGE}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    postalCode: business.postalCode,
    addressCountry: business.addressCountry,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: business.opensAt,
      closes: business.closesAt,
    },
  ],
  sameAs: [business.instagramUrl, business.facebookUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="min-h-full antialiased">
        {/* Datos estructurados JSON-LD para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
