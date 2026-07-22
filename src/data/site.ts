/**
 * Todo el contenido del sitio en un solo lugar: contacto, tarifas,
 * paquetes, reglamento y menú. Editar aquí para actualizar textos
 * y precios sin tocar los componentes.
 */

export const business = {
  name: "Toy Planet",
  slogan: "¡Niños en un mundo de diversión!",
  ages: "1 a 12 años",
  address: "Presa Valsequillo 911, Las Quintas, Culiacán, Sinaloa, 80060",
  phoneDisplay: "667 332 6252",
  phoneHref: "tel:+526673326252",
  whatsappUrl: "https://wa.me/526673326252",
  schedule: "Todos los días · 11:00 AM – 6:30 PM",
  instagram: "toyplanetcln",
  instagramUrl: "https://www.instagram.com/toyplanetcln",
  facebookLabel: "toy planet",
  facebookUrl: "https://www.facebook.com/toyplanetcln",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Presa+Valsequillo+911,+Las+Quintas,+80060+Culiac%C3%A1n,+Sinaloa&output=embed",
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Presa+Valsequillo+911,+Las+Quintas,+80060+Culiac%C3%A1n,+Sinaloa",
};

/* ---------- Instalaciones (fotos reales) ---------- */

export type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
};

export const facilityPhotos: GalleryPhoto[] = [
  {
    src: "/images/instalaciones-alberca-pelotas-resbaladilla.jpeg",
    alt: "Alberca de pelotas con resbaladilla en Toy Planet",
    label: "Alberca de pelotas con resbaladilla",
  },
  {
    src: "/images/instalaciones-alberca-pelotas-mural.jpeg",
    alt: "Alberca de pelotas con mural colorido",
    label: "Alberca de pelotas",
  },
  {
    src: "/images/instalaciones-area-juegos-jirafa.jpeg",
    alt: "Área de juegos con jirafa gigante",
    label: "Área de juegos",
  },
  {
    src: "/images/instalaciones-resbaladillas-color.jpeg",
    alt: "Resbaladillas de colores",
    label: "Resbaladillas",
  },
  {
    src: "/images/instalaciones-alberca-pelotas-azul.jpeg",
    alt: "Alberca de pelotas azules",
    label: "Alberca de pelotas azul",
  },
  {
    src: "/images/instalaciones-botes-agua.jpeg",
    alt: "Botes de agua para los peques",
    label: "Botes de agua",
  },
  {
    src: "/images/instalaciones-arcade-neon.jpeg",
    alt: "Zona arcade con luces neón",
    label: "Zona arcade",
  },
  {
    src: "/images/instalaciones-tunel-tobogan.jpeg",
    alt: "Túnel con tobogán",
    label: "Túnel y tobogán",
  },
];

export const eventAreaPhotos: GalleryPhoto[] = [
  {
    src: "/images/area-eventos-decorada.jpeg",
    alt: "Área de eventos decorada con arco de globos",
    label: "Área de eventos decorada",
  },
  {
    src: "/images/area-eventos-mesas-1.jpeg",
    alt: "Mesas del área de eventos",
    label: "Mesas para tu festejo",
  },
  {
    src: "/images/area-eventos-mesas-2.jpeg",
    alt: "Área de mesas para invitados",
    label: "Espacio para invitados",
  },
];

export const heroPhoto: GalleryPhoto = {
  src: "/images/fachada-letrero-toyplanet.jpeg",
  alt: "Interior de Toy Planet con letrero y área de juegos",
  label: "Nuestras instalaciones",
};

/* ---------- Acceso general ---------- */

export const accessPricing = [
  {
    concept: "Niños",
    price: "$280",
    detail: "Acceso sin límite de tiempo, sin evento.",
    emoji: "🧒",
  },
  {
    concept: "Adultos",
    price: "$50",
    detail: "Acompaña a tus peques dentro del área de juegos.",
    emoji: "🧑",
  },
  {
    concept: "Calcetín antiderrapante",
    price: "$60",
    detail: "Obligatorio para jugar. Puedes traer el tuyo o comprarlo aquí.",
    emoji: "🧦",
  },
];

export const noReentryNotice =
  "No hay reingresos: en caso de salir de las instalaciones, se volverá a cobrar el acceso.";

/* ---------- Paquetes de eventos ---------- */

/** Incluido en los 3 paquetes */
export const packageBaseIncludes = [
  "3 horas programadas de evento",
  "3 horas de anfitrión",
  "Invitación digital",
  "Pulseras de acceso para invitados",
];

export type EventPackage = {
  name: string;
  price: string;
  priceNote?: string;
  highlight?: boolean;
  includes: string[];
};

export const eventPackages: EventPackage[] = [
  {
    name: "Paquete Básico",
    price: "$7,750",
    includes: [
      "15 niños + 5 adultos",
      "Acceso 3 horas",
      "Comida infantil y de adulto",
      "Refresco con refill",
    ],
  },
  {
    name: "Paquete Súper",
    price: "$13,000",
    highlight: true,
    includes: [
      "20 niños + 10 adultos",
      "Acceso 3 horas",
      "Comida infantil y de adulto",
      "Refresco con refill",
      "Pastel para 30 personas",
      "Arco básico de globos",
    ],
  },
  {
    name: "Paquete Supreme",
    price: "$22,000",
    includes: [
      "35 niños + 20 adultos",
      "Acceso 3 horas",
      "Comida infantil y de adulto",
      "Refresco con refill",
      "Pastel para 50 personas",
      "Arco básico de globos",
    ],
  },
];

export const packageExtras = [
  { concept: "Niño adicional", price: "$400" },
  { concept: "Adulto adicional", price: "$300" },
];

/** Qué SÍ se puede ingresar a un evento con paquete */
export const allowedItems = [
  {
    category: "Decoración",
    emoji: "🎈",
    items: [
      "Mamparas",
      "Globos y globos de helio",
      "Centros de mesa",
      "Peluches",
      "Mantelería",
      "Letras decorativas",
    ],
  },
  {
    category: "Snacks",
    emoji: "🍩",
    items: ["Fruta", "Papas", "Donas", "Gelatinas", "Dulces", "Repostería y pasteles"],
  },
  {
    category: "Papelería",
    emoji: "🎉",
    items: [
      "Manteles individuales",
      "Termos",
      "Banderines personalizados",
    ],
  },
  {
    category: "Extras",
    emoji: "🤡",
    items: [
      "1 stand pequeño de snacks (máx. 1.5 m), avisando con anticipación",
      "Pintacaritas y botargas (sujeto a medidas establecidas)",
    ],
  },
];

export const allowedItemsNote =
  "La velita para el pastel y los calcetines antiderrapantes no están incluidos en el paquete.";

/** Qué NO se permite ingresar (ni con paquete ni sin paquete) */
export const notAllowedItems = [
  "Bebidas y alimentos externos (botellas de agua, jugos, aguas de sabor)",
  "Alimentos preparados externos (tacos, sushi, tortas)",
  "Piñatas — no hay espacio para partirlas; solo se permiten como decoración",
  "Helados, bolis o raspados externos",
  "Cañones de confetti o serpentina",
  "Equipos de sonido o visuales externos",
];

/* ---------- Festeja sin paquete ---------- */

export const noPackageParty = {
  price: "$300",
  description:
    "Celebra el mismo día de tu visita, sin reservación: solo pagas el acceso de tus invitados más $300.",
  allowed: [
    "Un mantel desechable o manteles individuales",
    "Globos con helio o bouquet de globos",
    'Un banderín de "Feliz Cumpleaños"',
    "El pastel que quieras (con platos, palita y cubiertos desechables)",
  ],
  notAllowed: [
    "Piñata",
    "Bolsas de dulces",
    "Artículos personalizados (vasos, cajas, accesorios)",
    "Decoración adicional (mamparas, lonas, escenarios)",
  ],
  note: "Las mesas se asignan según cuántas personas hayan pagado su acceso. Sin acceso pagado no se asigna espacio.",
};

/* ---------- Menú para eventos ---------- */

export const eventMenu = {
  kids: {
    title: "Niños",
    emoji: "🧒",
    items: [
      "Rebanada de pizza",
      "Hot dog",
      "Nuggets de pollo",
      "Hamburguesa de res (jr)",
      "Torta de cochinita (jr)",
    ],
  },
  adults: {
    title: "Adultos",
    emoji: "🧑",
    items: [
      "Hamburguesa de res",
      "Hamburguesa de pollo",
      "Torta de cochinita",
      "Baguette de arrachera",
      "Baguette de pollo",
    ],
  },
  drinks: {
    title: "Bebidas",
    emoji: "🥤",
    items: [
      "Refrescos Coca-Cola y de sabor",
      "Opción de cambiar por agua de jamaica (avisando al apartar el evento)",
    ],
  },
  notes: [
    "Todos los platillos incluyen papas a la francesa.",
    "Los baguettes tienen opción de papas o ensalada.",
  ],
};

/* ---------- Navegación ---------- */

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Acceso", href: "#acceso" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Menú", href: "#menu" },
  { label: "Ubicación", href: "#ubicacion" },
];
