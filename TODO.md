# TODO

Estado del portfolio y qué sigue. Escrito al cierre de la sesión del 28/07/2026.

## Dónde está el proyecto

Sitio en Astro + Tailwind v4, una sola página, estático. Estética de terminal
ámbar / sala de sistemas. La paleta viene del mock original y no se tocó.

```
src/
  styles/global.css     paleta en @theme, utilidades phosphor/rise/scroll-amber
  i18n/dataEs.ts        TODO el contenido del sitio, tipado como `Dict`
  data/tech.ts          registro único de tecnologías + logos
  components/
    Hero.astro          banner de sesión, nombre, cursor
    AmbientLog.astro    fondo animado del hero (PLACEHOLDER)
    CrtOverlay.astro    scanlines + viñeta + deriva de brillo
    About.astro
    Stack.astro         lista + dos cintas de logos
    TechMarquee.astro   la cinta (prop `reverse` para la de abajo)
    Projects.astro      lista scrolleable + panel
    Contact.astro
    StatusBar.astro     ruler fijo abajo: sección actual + % de scroll
  imagenes/             capturas de proyectos (ver README ahí adentro)
```

Ningún componente lleva texto hardcodeado: todo sale de `dataEs.ts`.

## Pendientes, por impacto

### 1. Contenido real

Los 10 proyectos de `projectList` son inventados. El campo que más va a mover la
aguja es **`note` ("lo interesante")** de cada uno: el problema difícil, la
decisión de modelado que cambió todo, el número que mejoró. Eso vale más que
cualquier ajuste de tipografía.

`about.body` sigue siendo el párrafo del CV partido en dos. Funciona, pero es
registro de CV, no voz propia.

### 2. Imágenes de proyectos

Van en `src/imagenes/<slug>/`, hasta 3 por proyecto, y se declaran en el campo
`images` del proyecto. Ver `src/imagenes/README.md` para la convención y por qué
van en `src/` y no en `public/`.

El sitio compila con cero imágenes — hoy todos muestran el placeholder "sin
captura".

Para proyectos sin pantalla (backend, integraciones, automatizaciones): sirve
una captura de código, una salida de consola o un diagrama de arquitectura. En
un sitio que ya parece un monitor de fósforo, una terminal se ve más nativa que
la captura de un navegador.

### 3. Inglés

La estructura ya está lista. Falta:

- `src/i18n/en.ts` exportando un objeto del mismo tipo `Dict` (si falta una
  clave, falla el build).
- Config de i18n de Astro: `defaultLocale: "es"`, `prefixDefaultLocale: false`
  → `/` en español, `/en/` en inglés.
- Toggle en la `StatusBar` — hoy hay un `ES` fijo esperando el lugar.
- Detección de idioma del navegador. **Ojo con la trampa:** el sitio es
  estático, así que la detección corre en el cliente y se ve el flash. La
  versión que funciona es detectar una sola vez, guardar en `localStorage`, y
  que el toggle manual siempre gane. Alternativa más suave: no redirigir nunca
  y mostrar un aviso "View in English".
- `hreflang` alternates y el `lang` correcto por página.

### 4. Fondo del hero

`AmbientLog.astro` es un placeholder: log de jobs en deriva, generado con un LCG
de semilla fija (mismo log en cada build, cero assets). Está esperando el
video/GIF. Para reemplazarlo, cambiar ese componente por el `<video>` y mantener
el contenedor (`absolute inset-0`, `aria-hidden`, detrás del contenido).

Si aparece un GIF a pantalla completa: convertirlo a WebM primero, pesa ~10x
menos y se puede pausar.

### 5. Textos míos que Nach nunca aprobó

Están todos en `dataEs.ts`. Si alguno chirría, se cambia ahí:

- `hero.host` → `sistema:ignacio-gunst`
- `hero.lastSession` → `última sesión: 28 jul 2026` (está hardcodeada)
- `about.heading` → "Cómo trabajo"
- `contact.heading` / `contact.body` → "Escribime" / "Si tenés un proyecto…"
- `contact.footer` → "hecho con Astro · sin frameworks de más"

Ya rechazó: "Quién opera esta máquina", "seguí bajando", "Ordenado por cuánto lo
uso, no por cuánto me gusta". El patrón es claro: **nada de copy ingenioso o
personificado.** Plano y descriptivo.

## Decisiones ya tomadas — no volver a abrirlas

- **Sin React.** La interactividad se resuelve con `<script>` vanilla. No hay
  islas ni framework de UI.
- **Se eliminó el marco de "cola de trabajos"** (`JOB 0001`, `ESTADO`,
  `ELAPSED`). Nach lo rechazó explícitamente.
- **Se eliminó el mock de navegador con iframes** del diseño original: la mitad
  de los sitios bloquean el embebido y un proyecto a 640px es ilegible.
- **Nav abajo, no arriba.** La `StatusBar` fija es deliberada.
- **CI/CD se sacó del stack** — era la práctica al lado de la herramienta con la
  que se hace (GitHub Actions).
- **Logos en ámbar monocromo.** Con los colores de marca, veintipico de logos
  corporativos rompen la paleta.

## Perillas y trampas del código

**`Projects.astro` — la constante `PANE`.** Hoy `lg:h-[38rem]`. Está calibrada
para que la derecha entre entera sin scroll (~37,1rem) y para que las 10 filas
de la izquierda (45,6rem) NO entren, porque ahí sí se quiere scroll. **La
ventana útil es 38–45rem:** por debajo scrollea la derecha, por encima deja de
scrollear la izquierda. Si el contenido real es más largo que el placeholder,
va a haber que subirla.

**`[hidden] { display: none !important }` en `global.css`.** No es un parche
suelto: `.flex` y `[hidden]` tienen la misma especificidad, así que sin esa
regla un elemento con `class="flex" hidden` se sigue viendo. Ya causó un bug de
los paneles de proyectos renderizándose todos apilados. No borrar.

**`TechMarquee` — el `-50%`.** El bucle cierra sin salto porque la pista lleva
el set duplicado y cada celda usa `pr-10` en vez de `gap`. Si se cambia a `gap`,
el desplazamiento deja de caer exacto y se ve el salto.

**`src/data/tech.ts` — dos consumidores, dos reglas.** La cinta descarta las
tecnologías sin logo (`TECH_WITH_ICON`); la barra de cada proyecto **no puede
descartar nada** (`techByName`) porque omitir C# de un proyecto hecho en C#
sería mentir sobre el stack — ahí cae a etiqueta de texto.

**Velocidad de las cintas:** `--animate-marquee` en `global.css`, hoy 60s.

## Nota de método

Todo el diseño de esta sesión se hizo **sin verificación visual**: headless
Firefox está bloqueado en el entorno y no se llegó a autorizar Chrome. Las
proporciones de la sección de proyectos están calculadas, no observadas. Si algo
se ve mal, empezar por ahí antes de asumir que el CSS está mal.

Nach no puede mandar capturas desde su lado. Si hace falta ver la página, la
opción es que autorice manejar su Chrome.

## Cómo levantar el proyecto

```
astro dev --background     # arranca
astro dev status           # ver estado
astro dev logs             # ver logs
astro dev stop             # parar
```

Nach corre el server él mismo — no dejarle uno corriendo, le ocupa el puerto.
