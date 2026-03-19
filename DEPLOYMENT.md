# Guía de Deployment en GitHub Pages - La Felipa

Esta guía te llevará paso a paso para publicar el sitio web de La Felipa en GitHub Pages.

## Requisitos Previos

- Tener una cuenta en [GitHub](https://github.com)
- Tener Git instalado en tu computadora
- Node.js v16+ instalado

## Pasos para el Deployment

### Paso 1: Preparar el Repositorio Local

1. Abre PowerShell en la carpeta del proyecto:

```bash
cd C:\Users\Ciro\development\la-felipa-web
```

2. Inicializa el repositorio git:

```bash
git init
```

3. Agrega todos los archivos:

```bash
git add .
```

4. Haz el primer commit:

```bash
git commit -m "Initial commit: La Felipa website"
```

5. Renombra la rama a 'main':

```bash
git branch -M main
```

### Paso 2: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) y loguéate
2. Haz click en el ícono `+` en la esquina superior derecha
3. Selecciona "New repository"
4. Rellena los datos:
   - **Repository name:** `la-felipa-web`
   - **Description:** Sitio web de promoción de cabañas en La Cumbrecita
   - **Public:** Dejar marcado (necesario para GitHub Pages gratis)
   - **NO marques** "Add a README file", ".gitignore", o "Choose a license"
5. Haz click en "Create repository"

### Paso 3: Conectar Repositorio Local con GitHub

Después de crear el repositorio, GitHub te mostrará un comando para conectar. Ejecútalo (reemplaza `yourusername` con tu usuario):

```bash
git remote add origin https://github.com/yourusername/la-felipa-web.git
git push -u origin main
```

Cuando te pida credenciales:
- Username: Tu usuario de GitHub
- Password: Tu token de acceso personal (puedes crearlo en GitHub Settings → Developer settings → Personal access tokens)

### Paso 4: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz click en "Settings"
3. En el menú de la izquierda, haz click en "Pages"
4. En la sección "Source":
   - Selecciona la rama: `gh-pages`
   - Selecciona la carpeta: `/ (root)`
5. Haz click en "Save"

### Paso 5: Hacer el Primer Deploy

Ejecuta el siguiente comando en tu terminal:

```bash
npm run deploy
```

Este comando va a:
1. Construir el proyecto
2. Crear la rama `gh-pages`
3. Subir los archivos al repositorio

Este proceso toma 1-2 minutos.

### Paso 6: Verificar el Deploy

Dentro de 2-3 minutos, tu sitio estará disponible en:

```
https://yourusername.github.io/la-felipa-web/
```

Reemplaza `yourusername` con tu usuario de GitHub.

## Para Futuras Actualizaciones

Después del primer deploy, simplemente:

1. Haz cambios en el código
2. Guarda y test localmente: `npm run dev`
3. Agrega los cambios: `git add .`
4. Haz un commit: `git commit -m "Descripción de los cambios"`
5. Haz push: `git push`

El deploy ocurre automáticamente gracias al workflow de GitHub Actions.

O si prefieres, puedes manualmente ejecutar:

```bash
npm run deploy
```

## Solucionar Problemas

### No se ve el sitio después de hacer deploy

- Espera 5-10 minutos
- Borra el caché del navegador (Ctrl+Shift+Delete)
- Verifica que GitHub Pages esté habilitado en Settings → Pages

### Error: "fatal: 'origin' does not appear to be a 'git' repository"

Significa que no hiciste `git remote add origin`. Ejecuta:

```bash
git remote add origin https://github.com/yourusername/la-felipa-web.git
```

### Error: "fatal: The current branch main has no upstream branch"

Ejecuta:

```bash
git push -u origin main
```

### El deploy automático no funciona

Verifica que:
1. El archivo `.github/workflows/deploy.yml` existe
2. Habilitaste GitHub Pages en la rama `gh-pages`
3. Tu red/firewall no bloquea GitHub

## Personalizar tu Deploy

### Cambiar el dominio del homepage

Si en el futuro quieres usar un dominio personalizado:

1. En tu repositorio GitHub → Settings → Pages
2. En "Custom domain", escribe tu dominio (ej: lafelipa.com)
3. Agrega registros DNS en tu proveedor de dominios

### Variables de Entorno

Si necesitas agregar variables secretas más adelante:

1. Ve a Settings → Secrets and variables → Actions
2. Haz click en "New repository secret"
3. Agrega la variable

## Referencia Rápida

```bash
# Desarrollo local
npm run dev          # Inicia servidor local en http://localhost:5173

# Build
npm run build        # Crea la carpeta dist/ optimizada

# Deployment
npm run deploy       # Builds y deploya a GitHub Pages
```

## Comandos Git Útiles

```bash
git status          # Ver cambios no guardados
git log             # Ver historial de commits
git pull            # Descargar cambios remotos
git branch          # Ver ramas actuales
```

---

¡Listo! Tu sitio estará en línea en pocas horas desde que hagas el primer push.
