# Guía de Despliegue en GitHub Pages

## Pasos para desplegar tu portfolio:

### 1. Crear el repositorio
- Ve a GitHub y crea un nuevo repositorio
- Nómbralo como `tu-usuario.github.io` (reemplaza `tu-usuario` con tu nombre de usuario de GitHub)
- Marca como público

### 2. Clonar y configurar
\`\`\`bash
git clone https://github.com/tu-usuario/tu-usuario.github.io.git
cd tu-usuario.github.io
\`\`\`

### 3. Copiar archivos del proyecto
- Copia todos los archivos de este proyecto al directorio clonado

### 4. Instalar y construir
\`\`\`bash
npm install
npm run build
\`\`\`

### 5. Configurar GitHub Pages
- Ve a tu repositorio en GitHub
- Settings > Pages
- Source: "Deploy from a branch"
- Branch: `main`
- Folder: `/out`

### 6. Subir cambios
\`\`\`bash
git add .
git commit -m "Initial portfolio deployment"
git push origin main
\`\`\`

### 7. Acceder a tu sitio
Tu portfolio estará disponible en: `https://tu-usuario.github.io`

## Actualizaciones futuras
Para actualizar tu portfolio:
1. Modifica los archivos necesarios
2. Ejecuta `npm run build`
3. Haz commit y push de los cambios
