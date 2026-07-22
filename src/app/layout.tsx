import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Toy Planet | Salón de juegos y eventos infantiles en Culiacán",
  description:
    "¡Niños en un mundo de diversión! Salón de juegos y eventos infantiles para niños de 1 a 12 años en Las Quintas, Culiacán. Albercas de pelotas, resbaladillas, zona arcade y paquetes de fiesta. Abierto todos los días de 11:00 AM a 6:30 PM.",
  keywords: [
    "salón de fiestas infantiles Culiacán",
    "juegos infantiles Culiacán",
    "fiestas infantiles",
    "Toy Planet",
  ],
  openGraph: {
    title: "Toy Planet | ¡Niños en un mundo de diversión!",
    description:
      "Salón de juegos y eventos infantiles en Culiacán, Sinaloa. Cotiza la fiesta de tus peques.",
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#d0ecfa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
