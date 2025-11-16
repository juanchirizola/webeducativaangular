# 🌐 Web Educativa sobre Angular

Una página web educativa moderna e interactiva que explica qué es Angular, sus características principales y cuenta con una trivia interactiva para poner a prueba tus conocimientos.

## 📋 Descripción

Este proyecto es una aplicación web desarrollada con Angular que tiene como objetivo educar sobre el framework Angular de manera visual y entretenida. Incluye:

- **Introducción a Angular**: Explicación clara y concisa sobre qué es Angular y para qué sirve
- **Características y Ventajas**: Presentación visual de las principales características del framework
- **Trivia Interactiva**: Sistema de preguntas y respuestas con feedback inmediato, contador de puntaje y temporizador

## ✨ Características

### Requerimientos Mínimos ✅
- ✅ Introducción a Angular
- ✅ Características o ventajas (8 características principales)
- ✅ Trivia con mínimo 5 preguntas (incluye 7 preguntas)
- ✅ Feedback visual para respuestas correctas/incorrectas
- ✅ Diseño atractivo con colores modernos, fuentes elegantes y disposición profesional
- ✅ Código fuente en repositorio con README descriptivo

### Características Opcionales 🌟
- ✅ Contador de puntaje en tiempo real
- ✅ Temporizador por pregunta (60 segundos)
- ✅ Animaciones y efectos visuales suaves
- ✅ Diseño completamente responsive (adaptativo a móviles, tablets y desktop)
- ✅ Barra de progreso visual
- ✅ Estadísticas detalladas al finalizar la trivia
- ✅ Mensajes motivacionales según el rendimiento

## 🚀 Tecnologías Utilizadas

- **Angular 17**: Framework principal
- **TypeScript**: Lenguaje de programación
- **SCSS**: Estilos con preprocesador
- **Angular Animations**: Animaciones fluidas
- **HTML5/CSS3**: Estructura y estilos modernos

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/web-educativa-angular.git
cd web-educativa-angular
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:4200`

## 🏗️ Construcción para Producción

Para generar una versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/web-educativa-angular`.

## 📱 Publicación en GitHub Pages

Para publicar el sitio en GitHub Pages:

1. Construye el proyecto:
```bash
npm run build
```

2. Instala angular-cli-ghpages:
```bash
npm install -g angular-cli-ghpages
```

3. Publica en GitHub Pages:
```bash
npx angular-cli-ghpages --dir=dist/web-educativa-angular
```

O configura GitHub Actions para despliegue automático.

## 🎨 Características del Diseño

- **Paleta de colores moderna**: Gradientes púrpura/azul con acentos en rojo Angular
- **Tipografía**: Fuente Poppins de Google Fonts
- **Animaciones suaves**: Transiciones y efectos visuales en todos los componentes
- **Responsive Design**: Adaptable a todos los tamaños de pantalla
- **UI/UX intuitiva**: Navegación clara y feedback visual inmediato

## 📂 Estructura del Proyecto

```
web-educativa-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── intro/              # Componente de introducción
│   │   │   ├── caracteristicas/    # Componente de características
│   │   │   └── trivia/             # Componente de trivia interactiva
│   │   ├── app.component.*         # Componente principal
│   │   └── ...
│   ├── assets/                     # Recursos estáticos
│   ├── styles.scss                 # Estilos globales
│   └── index.html                  # HTML principal
├── angular.json                    # Configuración de Angular
├── package.json                    # Dependencias del proyecto
└── README.md                       # Este archivo
```

## 🎯 Funcionalidades de la Trivia

- **7 preguntas** sobre Angular con opciones múltiples
- **Feedback inmediato** al seleccionar una respuesta
- **Explicaciones** para cada respuesta correcta
- **Sistema de puntuación**: 10 puntos por respuesta correcta
- **Temporizador**: 60 segundos por pregunta
- **Estadísticas finales**: Resumen de respuestas correctas, incorrectas y puntaje total
- **Mensajes motivacionales** según el rendimiento

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como una aplicación educativa para demostrar conocimientos de Angular, incluyendo:

- Componentes standalone
- TypeScript
- SCSS y diseño responsive
- Animaciones de Angular
- Gestión de estado en componentes
- Event binding y data binding

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de hacer un fork del proyecto y enviar un pull request.

## 📧 Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando Angular

