# Toy Planet — Sitio web (demo)

Sitio one-page para **Toy Planet**, salón de juegos y eventos infantiles en
Culiacán, Sinaloa. Propuesta de diseño con fotos reales de las instalaciones,
lista para mostrar al cliente.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/data/site.ts` — **todo el contenido del sitio**: contacto, tarifas de
  acceso, paquetes de eventos, reglamento (qué sí/no ingresar), festeja sin
  paquete, menú y fotos. Editar aquí para actualizar textos y precios.
- `public/images/` — fotos reales de las instalaciones y el área de eventos
  (recortadas de las capturas originales; el zip original queda de respaldo).
- `src/components/` — secciones de la página (Hero, Facilities, Access,
  EventPackages, NoPackageParty, EventMenu, QuoteForm, Location, Footer) y
  `ui/` con piezas reutilizables (logo recreado, astronauta, destellos,
  ondas divisorias, tarjeta de foto).
- `src/app/` — layout (tipografías y metadata) y página principal.

## Pendientes para producción

- Sustituir el logo SVG recreado por el archivo oficial de la marca
  (`src/components/ui/Logo.tsx`).
- Confirmar el precio del Paquete Supreme (marcado con asterisco en
  `src/data/site.ts`).
- Conectar el formulario de cotización a un backend o servicio de correo
  (`src/components/QuoteForm.tsx` — hoy solo muestra confirmación visual).
- Verificar la URL de la página de Facebook (se usa un enlace tentativo).
