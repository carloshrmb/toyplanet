/**
 * Datos del negocio en un solo lugar para que el contenido
 * sea fácil de actualizar sin tocar los componentes.
 */

export const business = {
  name: "Toy Planet",
  slogan: "¡Niños en un mundo de diversión!",
  ages: "1 a 12 años",
  address: "Presa Valsequillo 911, Las Quintas, Culiacán, Sinaloa, 80060",
  phoneDisplay: "01 667 715 0888",
  phoneHref: "tel:+526677150888",
  schedule: "Todos los días · 12:00 PM – 8:00 PM",
  instagram: "toyplanetcln",
  instagramUrl: "https://www.instagram.com/toyplanetcln",
  facebookUrl: "https://www.facebook.com/toyplanetcln",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Presa+Valsequillo+911,+Las+Quintas,+80060+Culiac%C3%A1n,+Sinaloa&output=embed",
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Presa+Valsequillo+911,+Las+Quintas,+80060+Culiac%C3%A1n,+Sinaloa",
};

export type Attraction = {
  name: string;
  emoji: string;
  description: string;
  /** Tono del placeholder mientras llegan las fotos reales */
  tone: "cielo" | "grape" | "sunset";
};

export const attractions: Attraction[] = [
  {
    name: "Alberca de pelotas",
    emoji: "🎈",
    description: "Miles de pelotas de colores para saltar, nadar y hundirse en diversión.",
    tone: "cielo",
  },
  {
    name: "Isla Pirata",
    emoji: "🏴‍☠️",
    description: "Aventuras de piratas con obstáculos, escondites y mucha imaginación.",
    tone: "sunset",
  },
  {
    name: "Eurobongie",
    emoji: "🤸",
    description: "Saltos y maromas seguras con arnés, ¡hasta tocar el cielo!",
    tone: "grape",
  },
  {
    name: "Mini Tirolesa",
    emoji: "🚀",
    description: "Un vuelo emocionante y seguro diseñado para los más pequeños.",
    tone: "cielo",
  },
  {
    name: "Pared de Rapel",
    emoji: "🧗",
    description: "Escalada con equipo de seguridad para pequeños grandes aventureros.",
    tone: "sunset",
  },
  {
    name: "Laberinto y Resbaladilla",
    emoji: "🌀",
    description: "Túneles, retos y una gran resbaladilla como recompensa final.",
    tone: "grape",
  },
  {
    name: "Área Didáctica",
    emoji: "🎨",
    description: "Juegos que estimulan la creatividad y el aprendizaje de los peques.",
    tone: "cielo",
  },
  {
    name: "Toy House",
    emoji: "🏠",
    description: "Una casita de juego donde la imaginación es la única regla.",
    tone: "sunset",
  },
  {
    name: "Toy Princess",
    emoji: "👑",
    description: "El rincón real para princesas y príncipes del planeta Toy.",
    tone: "grape",
  },
];

/** Precios reales de acceso (confirmados por el negocio) */
export const accessPricing = [
  {
    concept: "Acceso niños",
    price: "$280",
    detail: "Sin límite de tiempo, ¡juegan todo lo que quieran!",
  },
  {
    concept: "Acceso adultos",
    price: "$50",
    detail: "Acompaña a tus peques dentro del área de juegos.",
  },
  {
    concept: "Calcetines antiderrapantes",
    price: "$60",
    detail: "Obligatorios para jugar. Disponibles en recepción.",
  },
];

export type PartyPackage = {
  name: string;
  price: string;
  isExample: boolean;
  highlight?: boolean;
  tagline: string;
  includes: string[];
};

/** "Festejar sin paquete" es precio real; los paquetes con
 *  decoración son EJEMPLOS y están marcados como tales. */
export const partyPackages: PartyPackage[] = [
  {
    name: "Festeja sin paquete",
    price: "Desde $300",
    isExample: false,
    tagline: "Tú traes la decoración y el pastel, nosotros la diversión.",
    includes: [
      "Trae tu propia decoración y pastel",
      "Solo pagas el acceso al área de juegos",
      "Acceso sin límite de tiempo para los niños",
      "Ideal para festejos sencillos y espontáneos",
    ],
  },
  {
    name: "Paquete Básico",
    price: "$4,500*",
    isExample: true,
    tagline: "Lo esencial para una fiesta sin complicaciones.",
    includes: [
      "Acceso para 10 niños sin límite de tiempo",
      "Mesa de festejo con decoración sencilla",
      "Invitaciones digitales personalizadas",
      "Apoyo de nuestro personal durante el evento",
    ],
  },
  {
    name: "Paquete Estándar",
    price: "$6,900*",
    isExample: true,
    highlight: true,
    tagline: "El favorito: decoración temática y alimentos incluidos.",
    includes: [
      "Acceso para 15 niños sin límite de tiempo",
      "Decoración temática a elegir",
      "Alimentos y bebidas para los niños",
      "Invitaciones digitales personalizadas",
      "Anfitrión dedicado para tu evento",
    ],
  },
  {
    name: "Paquete Premium",
    price: "$9,900*",
    isExample: true,
    tagline: "La experiencia completa en el planeta Toy.",
    includes: [
      "Acceso para 20 niños sin límite de tiempo",
      "Decoración premium con montaje especial",
      "Alimentos para niños y adultos",
      "Experiencia Toy Princess o show de animación",
      "Anfitrión dedicado y coordinación completa",
    ],
  },
];

export type MenuItem = {
  name: string;
  emoji: string;
  description: string;
  isExample: boolean;
};

export const menuItems: MenuItem[] = [
  {
    name: "Baguette de pollo",
    emoji: "🥖",
    description: "Baguette recién hecho de pollo, acompañado de papas fritas.",
    isExample: false,
  },
  {
    name: "Hamburguesa de res",
    emoji: "🍔",
    description: "Jugosa hamburguesa de res con papas fritas.",
    isExample: false,
  },
  {
    name: "Nuggets con papas",
    emoji: "🍗",
    description: "El clásico favorito de los peques, con papas fritas.",
    isExample: true,
  },
  {
    name: "Hot dog",
    emoji: "🌭",
    description: "Hot dog estilo fiesta con papas fritas.",
    isExample: true,
  },
  {
    name: "Dedos de queso",
    emoji: "🧀",
    description: "Crujientes por fuera, con queso derretido por dentro.",
    isExample: true,
  },
];

/** Enlaces del menú de navegación (anclas de la one-page) */
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Atracciones", href: "#atracciones" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Menú", href: "#menu" },
  { label: "Ubicación", href: "#ubicacion" },
];
