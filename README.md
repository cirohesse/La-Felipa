# La Felipa - Sitio Web de Cabañas

Sitio web profesional para promocionar cabañas en La Cumbrecita, Córdoba Argentina.

## Requisitos

- Node.js (v25.8.1 o superior)
- npm o yarn

## Instalación

1. Clona o abre el proyecto:
```bash
cd La-Felipa
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Estructura del Proyecto

```
La-Felipa/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Conocenos.jsx
│   │   ├── Servicios.jsx
│   │   └── Footer.jsx
│   ├── styles/           # Archivos CSS
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── public/
│   └── assets/          # Imágenes y logos
├── index.html           # HTML base
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias del proyecto
```

## Build para Producción

Para crear un build optimizado:

```bash
npm run build
```

Esto generará la carpeta `dist/` con los archivos optimizados.

## Deployment en GitHub Pages

### Paso 1: Actualizar el homepage en package.json

Reemplaza `yourusername` con tu usuario de GitHub:

```json
"homepage": "https://yourusername.github.io/La-Felipa/"
```

### Paso 2: Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea un nuevo repositorio llamado `La-Felipa`
2. No inicialices con README, .gitignore o license

### Paso 3: Inicializar git y hacer push

```bash
git init
git add .
git commit -m "Initial commit: La Felipa website"
git branch -M main
git remote add origin https://github.com/yourusername/La-Felipa.git
git push -u origin main
```

### Paso 4: Hacer deploy a GitHub Pages

```bash
npm run deploy
```

Esto construirá el proyecto y lo desplegará automáticamente a GitHub Pages.

### Paso 5: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Abre Settings → Pages
3. En "Source", selecciona la rama `gh-pages`
4. Haz click en Save

Tu sitio estará disponible en: `https://yourusername.github.io/La-Felipa/`

## Personalización

### Modificar el nombre de usuario de GitHub

Antes de hacer deploy, actualiza el archivo `package.json`:

```json
"homepage": "https://TU_USUARIO_AQUI.github.io/La-Felipa/"
```

### Cambiar contenido

Edita los componentes en `src/components/` para cambiar el contenido del sitio.

## Características

- ✨ Responsive design
- 🎨 Diseño moderno y elegante
- 📱 Mobile-first
- ⚡ Optimizado con Vite
- 🚀 Deploy automático en GitHub Pages
- 🔗 Navegación suave

## Colores principales

- Primary: `#8B6F47` (marrón)
- Secondary: `#4A9BA7` (azul)
- Accent: `#D4A574` (dorado)
- Light BG: `#F5F0E8` (crema)

## Contacto

**Teléfono:** +54 11 5881-0770  
**Email:** cabanaslafelipa@gmail.com

---

© 2024 La Felipa | Cabañas en La Cumbrecita
