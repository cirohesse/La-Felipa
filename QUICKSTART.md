# Guía Rápida de Inicio - La Felipa Web

## Setup Inicial (Primera vez)

```bash
# 1. Ve a la carpeta del proyecto
cd C:\Users\Ciro\development\la-felipa-web

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

## Estructura de Archivos Importantes

```
src/
├── components/
│   ├── Header.jsx        ← Navegación y logo
│   ├── Hero.jsx          ← Sección principal con imagen
│   ├── Conocenos.jsx     ← Historia de La Felipa
│   ├── Servicios.jsx     ← Servicios y comodidades
│   └── Footer.jsx        ← Pie de página
├── styles/
│   ├── index.css         ← Estilos globales
│   ├── App.css
│   ├── Header.css
│   ├── Hero.css
│   ├── Conocenos.css
│   ├── Servicios.css
│   └── Footer.css
└── App.jsx               ← Componente principal

public/assets/            ← Imágenes y logos
```

## Comandos Disponibles

```bash
npm run dev      # Desarrollo local (http://localhost:5173)
npm run build    # Build para producción
npm run preview  # Previsualizar el build
npm run deploy   # Deploy a GitHub Pages
```

## Editar Contenido

### Cambiar texto del header/navegación
- Archivo: `src/components/Header.jsx`

### Cambiar sección "Conocenos"
- Archivo: `src/components/Conocenos.jsx`
- Cambia el texto en la etiqueta `<p>`

### Agregar o quitar servicios
- Archivo: `src/components/Servicios.jsx`
- Modifica el array `servicios`

### Cambiar colores
- Archivo: `src/styles/index.css`
- Busca `:root { --primary-color: ...`
- Colores disponibles:
  - `--primary-color`: Marrón (#8B6F47)
  - `--secondary-color`: Azul (#4A9BA7)
  - `--accent-color`: Dorado (#D4A574)
  - `--light-bg`: Crema (#F5F0E8)

## Agregar Nuevas Imágenes

1. Coloca la imagen en: `public/assets/`
2. En el componente, úsala así:
   ```jsx
   <img src="/la-felipa-web/assets/nombre-de-imagen.jpg" alt="Descripción" />
   ```

## Verificar Cambios

Mientras tengas `npm run dev` ejecutándose:
1. Edita un archivo
2. Guarda (Ctrl+S)
3. Actualiza el navegador (F5)
4. Ves los cambios al instante

## Para Hacer Deploy Final

```bash
# 1. Instala GitHub Pages (si no lo hiciste)
npm install gh-pages --save-dev

# 2. Actualiza el homepage en package.json
#    Cambia "yourusername" por tu usuario de GitHub

# 3. Sube los cambios a Git
git add .
git commit -m "Cambios finales antes de deploy"
git push

# 4. Deploya
npm run deploy
```

Tu sitio estará en: `https://TU_USUARIO.github.io/la-felipa-web/`

## Preguntas Frecuentes

**P: ¿Puedo editar mientras está corriendo npm run dev?**
R: Sí, los cambios aparecen automáticamente sin reiniciar.

**P: ¿Cómo añado más secciones?**
R: Crea un nuevo archivo en `src/components/`, importalo en `App.jsx` y añade una sección con `<section id="...">`.

**P: ¿Cómo cambio las imágenes?**
R: Reemplaza los archivos en `public/assets/` y mantén los mismos nombres, o actualiza las rutas en los componentes.

**P: ¿Qué pasa si algo se rompe?**
R: Ejecuta `npm install` nuevamente y reinicia el servidor.

---

¡Listo para empezar a desarrollar!
