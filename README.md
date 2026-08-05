# Base UAPA Astro

Plantilla base para crear **Unidades de Aprendizaje Autodirigido (UAPA)** utilizando Astro y componentes reutilizables.

## 📚 ¿Qué es este proyecto?

Este es un template que permite crear UAPAs de manera eficiente mediante la componetización, incluyendo:

- 🧩 **Componentes reutilizables** para actividades, evaluaciones y recursos
- 🎨 **Estilos UNAM/CUAIEED** preconfigurados  
- 📱 **Diseño responsivo** con Bootstrap 5
- ⚡ **Performance optimizado** con Astro
- 🔧 **Configuración centralizada** para fácil personalización

## 🚀 Estructura del Proyecto

```text
/
├── public/                 # Recursos estáticos
│   ├── css/               # Estilos base y Bootstrap
│   ├── js/                # Scripts del cliente
│   ├── img/               # Imágenes base
│   └── evaluacion/        # Recursos de evaluación
├── src/
│   ├── components/        # Componentes Astro reutilizables
│   ├── config/            # Configuración de contenidos
│   ├── layouts/           # Layout base
│   └── pages/             # Páginas del sitio
└── docs/                  # Documentación y guías
```

## � Archivo de Ejemplo

El template incluye `src/pages/index-ejemplo.astro` con:

- ✅ Todos los componentes implementados y funcionando
- ✅ Ejemplos de uso de recursos (acordeones, actividades, etc.)
- ✅ Estructura completa de una UAPA
- ✅ Configuración desde `uapa-config.ts`

> **Nota**: No hay `index.astro` en el template para evitar conflictos al crear nuevos proyectos.

## �🛠️ Uso como Template

### Crear nuevo proyecto UAPA

1. **Desde GitHub**: Clic en "Use this template" → "Create a new repository"
2. **Clonar y configurar**:

```bash
git clone https://github.com/tu-usuario/nueva-uapa.git
cd nueva-uapa
npm install
```

3. **Crear archivo principal**:
   - Renombrar `src/pages/index-ejemplo.astro` → `src/pages/index.astro`
   - O usar como referencia para crear tu propio `index.astro`

4. **Personalizar contenido** en `src/config/`

### Actualizar desde template base

```bash
# Copiar script de actualización
cp scripts/update-from-template.sh ./

# Ejecutar cuando haya actualizaciones
./update-from-template.sh
```

## 🧞 Comandos

| Comando           | Acción                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Instalar dependencias                     |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construir para producción en `./dist/`   |
| `npm run preview` | Previsualizar build local                 |

## 📖 Documentación

- **[Flujo de Trabajo](./docs/WORKFLOW.md)** - Cómo usar el template y actualizaciones
- **[Guía Git Upstream](./docs/GIT-UPSTREAM-GUIDE.md)** - Configuración de remotes
- **[Configuración Centralizada](./ConfigCentralizada-Guide.md)** - Personalización de contenidos
- **[ResourceLoader](./ResourceLoader-Guide.md)** - Carga de recursos dinámicos
- **[Guía de integración de contenido UAPA](./docs/GUIA-INTEGRACION-CONTENIDO-UAPA.md)** - Integración fiel de un DOCX usando los componentes y recursos existentes

## 🤝 Contribuir

Este template es mantenido por **SUAyED-FacMed**. Para reportar bugs o sugerir mejoras, abre un issue en el repositorio.

---

Desarrollado con ❤️ para la comunidad educativa UNAM
