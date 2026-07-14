# Toy Planet — Sitio web (demo)

Sitio one-page para **Toy Planet**, salón de juegos y eventos infantiles en
Culiacán, Sinaloa. Propuesta de diseño lista para mostrar al cliente.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/data/site.ts` — **todo el contenido del sitio** (precios, atracciones,
  menú, contacto). Editar aquí para actualizar textos y precios.
- `src/components/` — secciones de la página (Hero, Atracciones, Paquetes,
  Menú, Cotización, Ubicación, Footer) y `ui/` con piezas reutilizables
  (logo, astronauta, estrellas, ondas divisorias).
- `src/app/` — layout (tipografías y metadata) y página principal.

## Pendientes para producción

- Reemplazar los placeholders de atracciones con fotos reales
  (`src/components/Attractions.tsx`, usar `next/image`).
- Sustituir el logo SVG aproximado por el archivo oficial
  (`src/components/ui/Logo.tsx`).
- Conectar el formulario de cotización a un backend o servicio de correo
  (`src/components/QuoteForm.tsx` — hoy solo muestra confirmación visual).
- Confirmar precios e inclusiones de los paquetes marcados como ejemplo
  (`src/data/site.ts`).
