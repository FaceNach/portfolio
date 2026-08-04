# Portfolio — Ignacio Gunst

Personal portfolio. A single static page, in Spanish and English, styled as an
amber terminal.

**English** · [Español](#español)

---

## English

### What this is

A one-page portfolio built with Astro and shipped as static HTML. It has five
sections — hero, about, stack, projects and contact — and is served in two
languages from the same source.

Two decisions shaped most of the rest:

- **No UI framework.** No islands, no React. The four interactive pieces (scroll
  spy, project accordion, copy-to-clipboard, scroll percentage) are inline
  vanilla scripts. The build emits **zero JavaScript files**.
- **No hardcoded text.** Every string lives in `src/i18n/`. Components read the
  dictionary for the current locale, so adding a language means adding one file.

### Tech stack

| | |
|---|---|
| Framework | Astro 7, static output |
| Language | TypeScript |
| Styles | Tailwind CSS v4, configured in CSS with `@theme` |
| Icons | simple-icons, plus a few hand-drawn paths |
| Fonts | IBM Plex Mono and IBM Plex Sans, self-hosted via Astro's font API |
| Type checking | `@astrojs/check`, runs as part of the build |
| Testing | Vitest: unit tests, data-integrity checks and a build smoke test |
| Package manager | pnpm |

### Project structure

```text
src/
├── i18n/
│   ├── dataEs.ts          all Spanish content, and the shape of the Dict type
│   ├── dataEn.ts          the English mirror, typed as Dict
│   ├── index.ts           resolves the dictionary for the current locale
│   └── buildDate.ts       build-date formatter shared by both dictionaries
├── data/
│   ├── tech.ts            logo catalogue, keyed by technology name
│   ├── icons.ts           hand-drawn paths, sprite ids, path minifier
│   └── sections.ts        section ids and their nav labels
├── components/
│   ├── Header.astro       fixed top nav, scroll spy, language switch
│   ├── Hero.astro         name, role, animated background
│   ├── AmbientLog.astro   drifting log lines, generated at build time
│   ├── About.astro
│   ├── Stack.astro        grouped list plus two logo marquees
│   ├── TechMarquee.astro
│   ├── Projects.astro     one <details> row per project
│   ├── Contact.astro      email is base64-encoded at build time
│   ├── StatusBar.astro    fixed bottom status line, no links
│   ├── IconSprite.astro   every <symbol>, defined once
│   ├── Icon.astro         <svg><use href="#..."></svg>
│   └── CrtOverlay.astro   scanlines and vignette
├── layouts/
│   └── Layout.astro       head, hreflang alternates, skip link
├── pages/
│   └── [...locale].astro  generates / and /en/ from one file
└── styles/
    └── global.css         palette, keyframes, custom utilities
```

### How the pieces fit

**Content and locale.** `dataEs.ts` is both the Spanish content and the schema —
`Dict` is its inferred type, and `dataEn.ts` is typed against it. If a key is
missing in one language, `astro check` fails the build instead of rendering
`undefined`. Both pages come out of `src/pages/[...locale].astro`, so there is no
duplicate page file to keep in sync.

**Icons.** Every logo is defined once as a `<symbol>` in `IconSprite.astro` and
referenced with `<use>`. Only icons actually used by the stack or by a project
are emitted. `trimPath()` rounds path coordinates to two decimals at build time,
which is worth roughly 18% of the page's compressed weight.

**The two technology lists are not the same list.** `data/tech.ts` is a catalogue
answering "does this technology have a logo". `stack.groups` in the dictionaries
answers "is this part of my stack". The marquee derives from the second one, so
adding a logo for a project does not quietly add it to the stack.

**Email.** The address is never emitted in plain text. It is base64-encoded at
build time and decoded in the browser on click, with a fallback for browsers
without the clipboard API.

### Running it

```sh
pnpm install
pnpm dev        # dev server
pnpm check      # type check on its own
pnpm test       # unit and data-integrity tests
pnpm test:build # build, then smoke-test the built output
pnpm build      # type check, then build to dist/
pnpm preview    # serve the built output
pnpm deploy     # publish dist/ to Cloudflare
```

Needs Node 22.12 or newer. The build produces plain static files, so any static
host works.

### Deploy

The site runs on Cloudflare Workers as an assets-only Worker: `wrangler.jsonc`
points at `dist/`, and no adapter is involved — the Cloudflare adapter is only
needed for on-demand rendering.

Cloudflare is connected to this repository, so deploys are automatic. A push to
`main` builds and publishes to production; a push to any other branch uploads a
preview version with its own URL. The build image needs `PNPM_VERSION` set to 11
or newer, because `pnpm-workspace.yaml` uses pnpm 11 settings.

`.github/workflows/test.yml` runs the type check and the tests on every push and
pull request. It does not deploy anything and does not block the Cloudflare
build — it only marks the commit.

---

## Español

### De qué va

Portfolio de una sola página hecho con Astro y publicado como HTML estático.
Tiene cinco secciones — hero, sobre, stack, proyectos y contacto — y sale en dos
idiomas desde el mismo código.

Dos decisiones marcaron el resto:

- **Sin framework de UI.** No hay islas ni React. Las cuatro cosas interactivas
  (sección activa según el scroll, el desplegable de proyectos, copiar el mail y
  el porcentaje de scroll) son scripts vanilla inline. El build no emite **ningún
  archivo JavaScript**.
- **Ningún texto hardcodeado.** Todas las cadenas viven en `src/i18n/`. Los
  componentes leen el diccionario del idioma actual, así que agregar un idioma es
  agregar un archivo.

### Tecnologías

| | |
|---|---|
| Framework | Astro 7, salida estática |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4, configurado en CSS con `@theme` |
| Iconos | simple-icons, más algunos paths dibujados a mano |
| Fuentes | IBM Plex Mono e IBM Plex Sans, self-hosteadas con la API de Astro |
| Chequeo de tipos | `@astrojs/check`, corre como parte del build |
| Tests | Vitest: unitarios, de integridad de datos y un smoke test del build |
| Gestor de paquetes | pnpm |

### Estructura

```text
src/
├── i18n/
│   ├── dataEs.ts          todo el contenido en español, y la forma del tipo Dict
│   ├── dataEn.ts          el espejo en inglés, tipado como Dict
│   ├── index.ts           resuelve el diccionario del idioma actual
│   └── buildDate.ts       formateo de la fecha de build, compartido
├── data/
│   ├── tech.ts            catálogo de logos, indexado por tecnología
│   ├── icons.ts           paths dibujados a mano, ids del sprite, minificador
│   └── sections.ts        ids de sección y sus etiquetas de navegación
├── components/
│   ├── Header.astro       nav fijo arriba, sección activa, cambio de idioma
│   ├── Hero.astro         nombre, rol, fondo animado
│   ├── AmbientLog.astro   log en deriva, generado en tiempo de build
│   ├── About.astro
│   ├── Stack.astro        lista agrupada más dos cintas de logos
│   ├── TechMarquee.astro
│   ├── Projects.astro     una fila <details> por proyecto
│   ├── Contact.astro      el mail va en base64 desde el build
│   ├── StatusBar.astro    status line fijo abajo, sin links
│   ├── IconSprite.astro   cada <symbol>, definido una sola vez
│   ├── Icon.astro         <svg><use href="#..."></svg>
│   └── CrtOverlay.astro   scanlines y viñeta
├── layouts/
│   └── Layout.astro       head, alternates hreflang, skip link
├── pages/
│   └── [...locale].astro  genera / y /en/ desde un solo archivo
└── styles/
    └── global.css         paleta, keyframes, utilidades propias
```

### Cómo encajan las piezas

**Contenido e idioma.** `dataEs.ts` es a la vez el contenido en español y el
esquema — `Dict` es su tipo inferido, y `dataEn.ts` está tipado contra él. Si
falta una clave en un idioma, `astro check` corta el build en vez de renderizar
`undefined`. Las dos páginas salen de `src/pages/[...locale].astro`, así que no
hay archivos de página duplicados que mantener sincronizados.

**Iconos.** Cada logo se define una sola vez como `<symbol>` en
`IconSprite.astro` y se referencia con `<use>`. Solo se emiten los iconos que usa
el stack o algún proyecto. `trimPath()` redondea las coordenadas de los paths a
dos decimales en el build, lo que vale cerca del 18% del peso comprimido de la
página.

**Las dos listas de tecnologías no son la misma lista.** `data/tech.ts` es un
catálogo que responde "¿esta tecnología tiene logo?". `stack.groups` en los
diccionarios responde "¿esto es parte de mi stack?". La cinta se deriva de la
segunda, así que agregar un logo para un proyecto no lo mete en el stack sin
querer.

**Mail.** La dirección nunca se emite en texto plano. Va codificada en base64
desde el build y se decodifica en el navegador al hacer click, con un respaldo
para navegadores sin la API de portapapeles.

### Cómo levantarlo

```sh
pnpm install
pnpm dev        # servidor de desarrollo
pnpm check      # solo el chequeo de tipos
pnpm test       # tests unitarios y de integridad de datos
pnpm test:build # buildea y prueba el resultado del build
pnpm build      # chequea tipos y buildea a dist/
pnpm preview    # sirve lo buildeado
pnpm deploy     # publica dist/ en Cloudflare
```

Necesita Node 22.12 o superior. El build genera archivos estáticos comunes, así
que sirve cualquier hosting estático.

### Deploy

El sitio corre en Cloudflare Workers como un Worker de solo assets:
`wrangler.jsonc` apunta a `dist/` y no hay adapter de por medio — el adapter de
Cloudflare hace falta solo para render on-demand.

Cloudflare está conectado a este repositorio, así que los deploys son
automáticos. Un push a `main` buildea y publica a producción; un push a
cualquier otra rama sube una versión de preview con su propia URL. La imagen de
build necesita `PNPM_VERSION` en 11 o superior, porque `pnpm-workspace.yaml` usa
opciones de pnpm 11.

`.github/workflows/test.yml` corre el chequeo de tipos y los tests en cada push
y cada pull request. No despliega nada ni frena el build de Cloudflare — solo
marca el commit.
