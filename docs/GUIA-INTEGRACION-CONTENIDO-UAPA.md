# Guía para integrar contenido de una UAPA desde un DOCX

Esta guía resume el procedimiento para completar una UAPA Astro a partir de un documento fuente, respetando el contenido académico, el formato editorial y los recursos interactivos existentes.

## Regla principal

El documento fuente define el contenido y la plantilla define la forma de presentarlo.

- No rediseñar la página.
- No crear componentes nuevos si ya existe un recurso equivalente.
- No sustituir recursos por tarjetas, bloques o estilos inventados.
- Mantener el orden, el texto, las cursivas, las negritas y las imágenes indicadas.
- Usar los componentes Astro y los recursos de `public/css/recursos/`.
- Dejar actividades y autoevaluación para el final cuando el encargo lo indique.

## 1. Revisar el proyecto

Antes de editar, ubicar:

```text
src/pages/index.astro                 Página principal de la UAPA
src/components/                       Componentes reutilizables
src/components/ResourceLoader.astro   CSS y JavaScript de recursos
src/pages/_index-ejemplo.astro        Ejemplos de marcado
public/css/recursos/                  Recursos visuales e interactivos
public/img/cont/                      Imágenes del contenido
docs/                                  DOCX fuente y anexos
```

Comandos útiles:

```bash
rg --files -g '*.astro' -g '*.ts' -g '*.md' -g '*.docx'
rg -n 'fichero-hor|fichero-vert|acordeon-horizontal|accordion|triptico' src public
find public/img/cont -maxdepth 1 -type f | sort
git status --short
git diff
```

Revisar también los cambios existentes del usuario antes de reemplazar cualquier bloque.

## 2. Leer el DOCX como fuente editorial

Registrar para cada sección:

1. Título y orden.
2. Párrafos completos.
3. Subtítulos.
4. Negritas y cursivas.
5. Instrucciones como `Insertar recurso`, `DG:`, `Title:` y `Alt:`.
6. Imágenes y pies de figura.
7. Actividades, autoevaluación y referencias que deban reservarse.

Si no están disponibles `soffice`, `pandoc` o `docx2txt`, el DOCX puede inspeccionarse como ZIP/XML en modo de solo lectura:

```bash
python3 - <<'PY'
from zipfile import ZipFile
from xml.etree import ElementTree as ET

archivo = 'docs/ua_ejehipothipof_29jun26.docx'
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

with ZipFile(archivo) as z:
    raiz = ET.fromstring(z.read('word/document.xml'))

for parrafo in raiz.findall('.//w:body//w:p', ns):
    texto = ''.join(n.text or '' for n in parrafo.findall('.//w:t', ns)).strip()
    if texto:
        print(texto)
PY
```

Para reconstruir el formato, revisar las propiedades XML de cada `w:r`:

- `w:b` se convierte en `<strong>...</strong>`.
- `w:i` se convierte en `<em>...</em>`.
- Los subtítulos deben usar el estilo existente de `h3`, no CSS nuevo.

No resumir ni corregir el contenido académico durante la transcripción. Las posibles erratas se anotan para una revisión posterior.

## 3. Mapear instrucciones a recursos existentes

| Instrucción del documento | Marcado o componente |
| --- | --- |
| Fichero horizontal | `section.fichero-hor` |
| Fichero vertical | `section.fichero-vert` |
| Acordeón horizontal | `section.acordeon-horizontal` |
| Acordeón vertical | `section.accordion` |
| Tríptico | `section.contenedor-triptico` |
| Folder de contenidos | `section.contenedor-folder` y `.folder` |
| Hoja con espiral | `section.hoja-espiral` |
| Hojas desordenadas | Componente `HojasDesordenadas` |
| Figura | Componente `Figure` |
| Nota con pin | Marcado existente de `.contenedor-pin` |
| Tabla | Clases de tabla existentes |

Las plantillas se encuentran en `public/css/recursos/`; los ejemplos completos están en `src/pages/_index-ejemplo.astro`. Copiar la estructura del recurso y modificar solamente su contenido.

## 4. Cargar recursos y configurar IDs

Todo recurso usado en la página debe aparecer en `resources` de `Layout`, usando exactamente las claves de `AVAILABLE_RESOURCES`:

```astro
<Layout
  resources={[
    'acordeon-vertical',
    'fichero-vertical',
    'fichero-horizontal',
    'acordeon-horizontal',
    'triptico',
    'hoja-espiral',
    'lista-desplegable',
    'folder-contenidos',
    'hoja-bloc',
    'nota-pin',
  ]}
>
```

Usar IDs únicos y predecibles:

```text
fichero-hor-1, fichero-hor-2, fichero-hor-3
fichero-vert-1
acordeon-horizontal-1, acordeon-horizontal-2
acordeon-vert-1
triptico-1, triptico-2, triptico-3
```

El fichero horizontal se inicializa buscando todos los `section.fichero-hor[id]`. Otros recursos pueden inicializar IDs concretos desde `ResourceLoader.astro`; revisar su bloque `init` antes de agregar uno nuevo. Un ID inexistente no debe romper el resto de la página.

No mezclar clases dentro del atributo `id`. Por ejemplo, `id="acordeon-vert-1 mx-auto"` no coincide con el selector exacto que usa el JavaScript (`section.accordion#acordeon-vert-1`). Las clases van en `class`, por ejemplo `class="accordion mx-auto"`. Para centrar un acordeón y ocupar todo el ancho disponible del contenedor, puede usarse `width: 100%; max-width: 100%; margin: 2rem auto;`.

## 5. Integrar imágenes y placeholders

Verificar cada asset antes de usarlo:

```bash
test -f public/img/cont/8ehht_t3.png && echo 'Existe'
```

Para una imagen disponible, conservar `src`, `alt`, `title` y el pie del documento:

```astro
<Figure
  src="img/cont/8ehht_t3.png"
  alt="Se observa la ruta de secreción de TRH, TSH, T3 y T4."
  title="Eje hipotálamo-hipófisis-tiroides (HHT)"
  width="w-750"
  caption="Figura 6. ... <em>Título de la fuente</em> ..."
/>
```

Si el documento solicita una infografía que no existe en `public/img/cont`, no inventar una imagen ni eliminar el lugar. Dejar un placeholder visible:

```astro
<figure class="w-750 mx-auto my-recursos">
  <div class="border rounded p-4 text-center bg-light">
    <strong>Placeholder de imagen:</strong> Título de la infografía.
  </div>
  <figcaption>Descripción indicada en el documento.</figcaption>
</figure>
```

Reportar al final todos los placeholders pendientes.

## 6. Conservar el formato editorial

No copiar únicamente texto plano:

- Negritas: `<strong>`.
- Cursivas: `<em>`.
- Listas: `<ul>` y `<li>`.
- Subtítulos: `<h3>` con el estilo existente.
- Pies de figura: propiedad `caption` de `Figure`.
- Títulos de sección: propiedad `title` de `Section`.

Ejemplo:

```astro
<p>
  La <strong>TSH</strong> estimula la producción de hormonas tiroideas y el gen
  <em>TRH</em> participa en la regulación del eje.
</p>
```

Revisar especialmente hormonas, células, receptores y etiquetas como `En mujeres:` y `En hombres:`, porque las negritas de bloques largos se pierden con facilidad.

### Subíndices y superíndices

El formato del DOCX también puede contener propiedades de posición vertical. Revisar `w:vertAlign` en los runs XML:

- `val="subscript"` se convierte en `<sub>...</sub>`.
- `val="superscript"` se convierte en `<sup>...</sup>`.

Esto debe revisarse en toda la página, no solamente en el párrafo donde se detectó por primera vez. En este contenido, por ejemplo, las hormonas tiroideas se escriben como `T<sub>3</sub>` y `T<sub>4</sub>`, y también aparecen expresiones como `NH<sub>2</sub>`, `IP<sub>3</sub>` y `Ca<sup>2+</sup>`.

Aplicar la etiqueta también en tablas, acordeones, ficheros y pies de figura. En atributos `alt` y `title` no insertar HTML; usar texto accesible equivalente, como `T3`/`T4` o los caracteres Unicode subindicados si se necesita representar la notación visual.

## 7. Tablas incompletas

Si el documento pide diseñar una tabla, pero no contiene los valores finales, no inventar datos. Mantener encabezados, etiquetas y celdas pendientes con `—`, usando las clases existentes:

```astro
<figure class="tabla-informativa-figure">
  <figcaption class="tabla-informativa-caption text-center">
    <strong>Tabla. Título</strong>
  </figcaption>
  <div class="tabla-informativa-scroll">
    <table class="tabla-informativa">
      <thead><tr><th>Tipo</th><th>Información</th></tr></thead>
      <tbody><tr><th>Primario</th><td>—</td></tr></tbody>
    </table>
  </div>
</figure>
```

Indicar al final qué tablas necesitan revisión académica o tratamiento gráfico.

## 8. Orden de trabajo recomendado

1. Revisar Git y los cambios existentes.
2. Confirmar títulos y orden de secciones.
3. Revisar recursos y plantillas.
4. Verificar imágenes.
5. Integrar una sección completa.
6. Revisar negritas y cursivas.
7. Continuar con la siguiente sección.
8. Añadir conclusiones si aparecen en el documento.
9. Dejar actividades y autoevaluación fuera del alcance si así se solicitó.
10. Compilar y revisar la estructura final.

No crear componentes ni hacer commits o merges salvo que se solicite expresamente.

## 9. Verificación final

```bash
npm run build
git diff --check
```

También revisar:

```bash
rg -n '<Section id=|<Figure|fichero-hor|fichero-vert|acordeon-horizontal|acordeon-vert|triptico|Placeholder' src/pages/index.astro
```

La revisión mínima debe confirmar:

- La compilación termina sin errores.
- Todas las imágenes referenciadas existen.
- Cada recurso tiene el CSS/JS solicitado.
- Los IDs coinciden con los inicializadores.
- Las imágenes están dentro del panel o recurso que indica el documento.
- Las actividades y la autoevaluación no fueron alteradas si estaban fuera del alcance.
- Los placeholders pendientes son visibles y están reportados.

## 10. Resumen de entrega

Indicar qué secciones se completaron, qué recursos se reutilizaron, qué quedó pendiente y qué verificaciones pasaron. No ocultar decisiones tomadas por falta de un asset o de datos en el documento fuente.
