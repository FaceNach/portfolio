# Imágenes de proyectos

Una carpeta por proyecto, con el mismo nombre que el `slug` en
`src/i18n/dataEs.ts`. Hasta 3 archivos por proyecto.

```
src/imagenes/
  api-inventario/
    1.png
    2.png
  gateway-pagos/
    1.png
```

Y en el diccionario:

```ts
{
  slug: "api-inventario",
  images: ["1.png", "2.png"],
}
```

El orden de `images` es el orden del carrusel. `images: []` muestra el
placeholder "sin captura" — el sitio compila igual sin ninguna imagen.

## Por qué van acá y no en `public/`

Astro procesa lo que está en `src/`: convierte a WebP, genera varios anchos y
escribe `width`/`height` en el HTML para que no haya salto de layout al cargar.
En `public/` se copiarían crudas, sin tocar.

Traducido a peso: 26 capturas PNG sin optimizar son ~20 MB en el repo, y git
guarda cada versión para siempre. Las mismas procesadas quedan en ~2,5 MB.

**Guardá los originales en PNG o JPG y dejá que Astro haga el resto.** No hace
falta que los optimices a mano.

## Qué poner cuando el proyecto no tiene pantalla

Sirve cualquier cosa legible a ~1280px de ancho: una captura de código, la
salida de una consola, un diagrama de arquitectura, un fragmento de esquema.
En un sitio que ya parece un monitor de fósforo, una terminal se ve más nativa
que la captura de un navegador.
