@echo off
setlocal enabledelayedexpansion

:menu
cls
echo.
echo ========================================
echo  La Felipa Web - Helper
echo ========================================
echo.
echo 1. Instalar dependencias (npm install)
echo 2. Iniciar servidor de desarrollo (npm run dev)
echo 3. Hacer build para produccion (npm run build)
echo 4. Preview del build (npm run preview)
echo 5. Deploy a GitHub Pages (npm run deploy)
echo 6. Ver archivo QUICKSTART.md
echo 7. Ver archivo DEPLOYMENT.md
echo 0. Salir
echo.
set /p choice="Selecciona una opcion: "

if "%choice%"=="1" (
    echo.
    echo Instalando dependencias...
    npm install
    pause
    goto menu
)

if "%choice%"=="2" (
    echo.
    echo Iniciando servidor de desarrollo...
    echo Abre http://localhost:5173 en tu navegador
    echo Presiona Ctrl+C para detener
    echo.
    npm run dev
    pause
    goto menu
)

if "%choice%"=="3" (
    echo.
    echo Haciendo build para produccion...
    npm run build
    echo.
    echo Build completado! Los archivos estan en la carpeta 'dist'
    pause
    goto menu
)

if "%choice%"=="4" (
    echo.
    echo Previsualizando build...
    echo Abre http://localhost:4173 en tu navegador
    echo Presiona Ctrl+C para detener
    echo.
    npm run preview
    pause
    goto menu
)

if "%choice%"=="5" (
    echo.
    echo Haciendo deploy a GitHub Pages...
    npm run deploy
    echo.
    echo Deploy completado!
    echo Tu sitio estara disponible en: https://yourusername.github.io/la-felipa-web/
    pause
    goto menu
)

if "%choice%"=="6" (
    cls
    type QUICKSTART.md
    echo.
    pause
    goto menu
)

if "%choice%"=="7" (
    cls
    type DEPLOYMENT.md
    echo.
    pause
    goto menu
)

if "%choice%"=="0" (
    exit /b
)

echo Opcion invalida
pause
goto menu
