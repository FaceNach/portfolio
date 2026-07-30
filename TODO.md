# TODO

Estado del portfolio y qué sigue. Actualizado al cierre de la sesión del
29/07/2026.

## Dónde está el proyecto

Sitio en Astro + Tailwind v4, una sola página, estático. Estética de terminal
ámbar / sala de sistemas. La paleta viene del mock original y no se tocó.

```
src/
  styles/global.css     paleta en @theme, utilidades phosphor/rise/caret
  i18n/dataEs.ts        TODO el contenido del sitio, tipado como `Dict`
  data/tech.ts          catálogo de logos (NO es la lista del stack, ver abajo)
  data/icons.ts         paths dibujados a mano + el generador de ids del sprite
  data/sections.ts      registro único de secciones navegables (id + label)
  components/
    Header.astro        nav fijo arriba + dueño de la sección actual
    Hero.astro          banner de sesión, nombre, cursor
    AmbientLog.astro    fondo animado del hero (PLACEHOLDER)
    CrtOverlay.astro    scanlines + viñeta + deriva de brillo
    IconSprite.astro    los <symbol> de todos los iconos, una sola vez
    Icon.astro          <svg><use href="#..."></svg>
    About.astro
    Stack.astro         lista + dos cintas de logos
    TechMarquee.astro   la cinta (prop `reverse` para la de abajo)
    Projects.astro      una fila <details> por proyecto, todas cerradas
    Contact.astro
    StatusBar.astro     status line fijo abajo: sección actual + % (sin links)
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

### 2. Inglés

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

### 3. Fondo del hero

`AmbientLog.astro` es un placeholder: log de jobs en deriva, generado con un LCG
de semilla fija (mismo log en cada build, cero assets). Está esperando el
video/GIF. Para reemplazarlo, cambiar ese componente por el `<video>` y mantener
el contenedor (`absolute inset-0`, `aria-hidden`, detrás del contenido).

Si aparece un GIF a pantalla completa: convertirlo a WebM primero, pesa ~10x
menos y se puede pausar.

### 4. Textos míos que Nach nunca aprobó

Están todos en `dataEs.ts`. Si alguno chirría, se cambia ahí:

- `hero.host` → `sistema:ignacio-gunst`
- `hero.lastSession` → `última sesión: <fecha del build>`
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
- **Proyectos va sin capturas y sin maestro-detalle.** Decidido el 29/07/2026.
  Nach no tiene capturas y sacarlas exigía clonar, levantar bases y resucitar
  proyectos viejos (uno es de Unity) para terminar con un PNG que igual no prueba
  nada: en trabajo de backend la captura muestra la carcasa, no la decisión. Sin
  imagen, el panel a la derecha se quedaba sin motivo — existía para alojarla— y
  el maestro-detalle solo aportaba su costo: esconder 9 de cada 10 proyectos
  detrás de un clic que un reclutador que escanea no hace. Se fueron con la
  imagen la constante `PANE`, el malabar con `hidden`, el carrusel y
  `astro:assets`.

  Primero quedó un `<ol>` plano con todo desplegado, y **Nach lo rechazó por
  largo**: 10 proyectos × 250px = 2500px. La versión de ahora es una fila
  `<details>`/`<summary>` por proyecto — nombre y tecnologías siempre visibles,
  el resto se despliega. Baja a ~765px.

  Estuvo un rato con la primera abierta por defecto para que se entendiera que las
  filas se despliegan. **Nach lo sacó**, quiere todas cerradas al entrar.

  Es plegado nativo, sin librería. El único JS es abrir la fila que apunta el
  hash (ver abajo). Si tocás el `<summary>`, ojo con `list-none` +
  `[&::-webkit-details-marker]:hidden`: hacen falta las dos para matar el
  triangulito por defecto, una no alcanza.
- **Cada proyecto tiene su propio anclaje** (`id={project.slug}` en el
  `<details>`). El `slug` había quedado sin consumidor al irse las imágenes; en
  vez de borrarlo ahora sirve para mandarle a alguien un proyecto puntual
  (`/#gateway-pagos`). Lleva `scroll-mt-14` por el header fijo, igual que las
  secciones.

  **Por eso hay un `<script>` en `Projects.astro`.** Un `<details>` cerrado no se
  abre solo al navegarle el fragmento, así que un link profundo caía en una fila
  cerrada y no mostraba nada — un anclaje que no muestra el contenido está roto.
  Son seis líneas: leen el hash, y si apunta a un `HTMLDetailsElement` lo abren y
  scrollean. Escucha `hashchange` además del load, para cuando ya estás en la
  página.
- ~~**Nav abajo, no arriba.**~~ **Revertido el 29/07/2026.** La navegación se
  movió al `Header` fijo arriba. El argumento que la tumbó: Nach construyó el
  sitio y no había registrado la barra de abajo como navegación — si al autor se
  le pasa, a un visitante de 30 segundos también. En desktop una franja fina al
  pie se lee como chrome del navegador, no como contenido. La resolución no fue
  "arriba vs. abajo" sino que la barra hacía **dos trabajos**: mostrar estado y
  navegar. Un status line de verdad (vim, tmux) muestra estado y no tiene links.
  Se separaron: navegación arriba, estado abajo.
- **CI/CD se sacó del stack** — era la práctica al lado de la herramienta con la
  que se hace (GitHub Actions).
- **Logos en ámbar monocromo.** Con los colores de marca, veintipico de logos
  corporativos rompen la paleta.

## Perillas y trampas del código

**`[hidden] { display: none !important }` en `global.css`.** Hoy no la usa nadie
—el maestro-detalle que la necesitaba ya no existe— pero se deja porque es un
default correcto: `.flex` y `[hidden]` tienen la misma especificidad, así que sin
esa regla un elemento con `class="flex" hidden` se sigue viendo. Ya causó un bug
una vez.

**Los iconos son un sprite. Nunca vuelvas a inlinear un `<path>` en un
componente.** `IconSprite.astro` (en el `Layout`, arriba de todo el body) define
cada logo una sola vez como `<symbol>`, y todo el resto los referencia con
`<Icon id={iconId(nombre)} class="..." />`, que rinde `<svg><use href="#..."></svg>`.

Antes cada logo iba inlineado en cada lugar donde aparecía. Como la cinta duplica
el set y hay dos cintas, cada logo se repetía 4 veces, más una por proyecto que lo
usara: **135 paths, 91,6 KB gzippeados**. Con el sprite son 35 paths y **28,8 KB**.

Detalles que importan si lo tocás:

- Los ids salen de `iconId()` en `data/icons.ts` y llevan prefijo `icon-`. El
  prefijo no es decorativo — los `<details>` de proyectos usan `id={slug}`, y sin
  prefijo un icono podría pisarle el anclaje a un proyecto.
- El sprite solo incluye los iconos **usados** (`stack.groups` + el `tech` de cada
  proyecto). Agregar algo a `tech.ts` sin usarlo en ningún lado no pesa nada.
- El `<svg>` del sprite va con `position:absolute;width:0;height:0;overflow:hidden`
  y no con `display:none`. Los dos andan para `<symbol>`, pero este es el patrón
  seguro de siempre.
- El color se hereda por `fill` en el `<svg>` de afuera (`fill-amber/70`,
  `fill-current`). Los `<path>` adentro del `<symbol>` no llevan `fill` propio,
  justamente para que herede. Si le ponés uno, deja de responder al hover.

**`TechMarquee` — el `-50%`.** El bucle cierra sin salto porque la pista lleva
el set duplicado y cada celda usa `pr-10` en vez de `gap`. Si se cambia a `gap`,
el desplazamiento deja de caer exacto y se ve el salto.

**El `name` de un proyecto es un título descriptivo, no el nombre del repo.**
Decidido el 29/07/2026 sobre `wsTicket`, que como título "no dice nada". La fila
de un proyecto tiene que decirle a alguien que escanea qué es la cosa, y para eso
"Sistema de colas de tickets" gana contra el nombre del repositorio.

El nombre real no se pierde igual: `Projects.astro` lo saca del último segmento
de `repo` y lo muestra como etiqueta chica al lado del título. Es derivado, no hay
campo nuevo que mantener, y desaparece solo en los proyectos sin repo.

**`src/data/tech.ts` es un catálogo de logos, NO la lista de tu stack.** Esto es
lo más fácil de romper de todo el proyecto, así que leelo antes de tocarlo.

Están separadas dos preguntas que antes estaban pegadas:

- **¿Existe el logo de esta tecnología?** → `tech.ts`. Crece libre. Que algo esté
  acá no afirma nada sobre Nach; hay entradas como Bun, Zod o Vite que existen
  sólo para que la fila de un proyecto muestre el logo.
- **¿Es parte del stack de Nach?** → `stack.groups` en `dataEs.ts`, curada a mano.

**La cinta se deriva de `stack.groups`**, no del catálogo (`iconsFor(...)` en
`TechMarquee.astro`). Antes salía de `TECH_WITH_ICON`, o sea que *tener logo*
alcanzaba para aparecer en la cinta — y agregar un icono para un proyecto te lo
metía en el stack sin querer. Ya pasó con FFmpeg.

Consecuencia práctica: **para que algo aparezca en la cinta hay que agregarlo a
`stack.groups`, no a `tech.ts`.** Al revés no funciona y es el error esperable.

La barra de cada proyecto sigue sin descartar nada (`techByName`): omitir C# de un
proyecto hecho en C# sería mentir sobre el stack, así que sin logo cae a texto.
Por eso `WebSocket` está en el catálogo con `icon: null` — es un protocolo, nunca
va a tener logo, y así queda declarado en vez de ser un nombre suelto.

**Velocidad de las cintas:** `--animate-marquee` en `global.css`, hoy 60s.

**El cursor del hero es una caja, no el glyph `▊`.** Está dibujado en la utility
`caret` de `global.css` porque las medidas del glyph dependen de qué fuente
terminó cargando, y con `display=swap` eso significaba que cambiaba de forma a
mitad de la carga. Perillas: `width` (grosor), `height` (alto), `margin-left`
(aire), todas en `em` para que sigan al `clamp()` del nombre. El
`animation-delay: 760ms` está calculado para que arranque cuando el `<h1>`
termina de entrar (160ms de `--d` + 550ms de `rise`): si tocás esos dos, tocá
este también.

**El logo del header y `public/favicon.svg` son la misma marca, duplicada.** El
favicon es un SVG con `<text>`; el header la reconstruye con CSS (`size-6`,
`rounded-[5px]`, `bg-ink`, borde `amber/40`) para poder usar la webfont del sitio
y el hover, cosas que un SVG inline no te da. No están enlazados: si cambiás una,
cambiá la otra a mano.

**Header fijo ⇄ `scroll-mt-14` en las secciones.** El header mide `h-10`
(2,5rem); el `scroll-mt-14` (3,5rem) de cada `<section>` es eso más 1rem de
aire. Si cambiás el alto del header, las cuatro secciones van con él o los
títulos quedan tapados al saltar por anclaje.

**El mail no es un link, es un botón que copia — y nunca viaja en claro.** Es
anti-spam, decisión de Nach. `Contact.astro` lo codifica en base64 en el build
(`Buffer.from(...).toString("base64")`) y lo emite en `data-email`; el cliente lo
decodifica con `atob` recién al hacer clic. Verificado: la dirección en claro
aparece **0 veces** en `dist/index.html`. Si alguna vez volvés a poner un
`mailto:` o a imprimir `t.contact.email` en el template, esto se cae y no te vas
a enterar — el chequeo es `grep -c "ignacioijg@gmail" dist/index.html`.

Es un badén, no un muro: frena al scraper que barre `mailto:` y regex de mails,
no a alguien que ejecute el JS. El costo es que sin JS no hay forma de llegar al
mail. Hay respaldo con `execCommand("copy")` para cuando `navigator.clipboard`
no está (contexto no seguro), y si los dos fallan el toast muestra la dirección
para copiarla a mano.

**Los tres items de contacto comparten `itemClass`/`iconClass`/`labelClass`.**
Están declaradas una vez en el frontmatter justamente para que no se puedan
desincronizar — Nach pidió explícitamente que los tres se vean igual. El mail no
lleva `→` y los otros dos sí: la flecha significa "te lleva a otro lado", y el
mail no navega, copia.

**Dos de los tres iconos de contacto están dibujados a mano, en
`src/data/icons.ts`.** No es por capricho: **LinkedIn no existe en
`simple-icons`** —lo sacaron del paquete por un pedido legal de la marca— y para
un `mailto:` genérico el paquete solo trae marcas (Gmail, Mail.ru), no un sobre.
Solo GitHub sale del paquete. El sobre necesita `fill-rule="evenodd"` en el
`<path>`: el pliegue es un calado, sin eso se ve un rectángulo lleno.

**Los iconos de contacto usan `fill-current`, no `fill-amber/70`** como los del
stack. Es a propósito: ahí son links y así el icono acompaña el color del hover
en vez de quedarse quieto mientras el texto cambia.

**La sección actual se calcula por posición de scroll, NO con
`IntersectionObserver`.** La lógica vive en `Header.astro` y publica en dos
lados: `aria-current` de sus links y el texto de `#status-section`. La referencia
al status es opcional a propósito — si se saca el `StatusBar`, el header sigue
andando.

Hubo un `IntersectionObserver` con `rootMargin: "-20% 0px -60% 0px"` y **se sacó
porque estaba roto**. Esa config arma una banda de detección entre el 20% y el
40% del alto de la ventana, y eso falla de dos formas:

- **La última sección nunca se activa.** Al saltar a contacto la página llega al
  tope de scroll, contacto queda pegado abajo de la ventana y la banda cae sobre
  proyectos. Para tocar la banda, la última sección tendría que medir más del 60%
  del alto de la ventana.
- **Cuando dos secciones tocan la banda gana la equivocada**, porque ordenaba por
  `top` ascendente y la sección que ya scrolleaste tiene el `top` más negativo.

La versión de ahora: recorre las secciones en orden y se queda con **la última
cuyo `top` ya cruzó `TRIGGER`** (96px, tiene que ser mayor que los 56px del
`scroll-mt-14` o al hacer clic la sección destino no se marca), con un caso
especial que fuerza la última sección cuando estás al fondo del documento. Ese
caso especial *es* el arreglo del primer bug — no lo saques.

Hay una simulación de la lógica en el historial: da la posición de scroll de cada
anclaje y compara qué sección marca cada versión. Si volvés a tocar esto, conviene
rehacerla antes que probar a ojo.

**La fecha de `hero.lastSession` es la del build, no la del visitante.** El sitio
es estático: `new Date()` corre en `astro build` y queda fija en el HTML hasta el
próximo deploy. Está armada a mano con el array `MESES` en vez de
`toLocaleDateString()` porque esa depende del locale de la máquina que buildea
(en la de Nach daba formato americano, y un runner de CI daría otro). Tampoco
`toISOString()`, que es UTC y después de las 21:00 hora Argentina ya devuelve el
día siguiente.

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
