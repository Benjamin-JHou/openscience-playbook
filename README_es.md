# Manual de Open Science & AI-Scientist (Open Science & AI-Scientist Playbook)

[English](README.md) | [简体中文](README_zh.md) | [Français](README_fr.md) | [日本語](README_ja.md) | [한국어](README_ko.md) | [Español](README_es.md)

¡Bienvenido al **Manual de Open Science & AI-Scientist (Open Science & AI-Scientist Playbook)**! Esta es una guía exhaustiva y seleccionada que detalla los principales entornos de trabajo de IA científica de código abierto y las plataformas de investigación locales. Cuenta con directorios de recursos, guías de instalación paso a paso, preguntas frecuentes comunes (Q&A) y optimizaciones avanzadas para ayudarte a potenciar tu investigación científica mediante la inteligencia artificial.

---

## 🌟 Matriz de recursos de AI-Scientist

| Nombre del proyecto | Desarrollador / Organización | Sitio web oficial | Repositorio GitHub | pila tecnológica principal | Estado de desarrollo | Campo objetivo |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open Science Desktop** | [ai4s-research](https://github.com/ai4s-research) | [openedscience.com](https://openedscience.com) | [open-science](https://github.com/ai4s-research/open-science) | Tauri, Rust, JS/TS | Beta (Activo) | Ciencia general / Interdisciplinario |
| **OpenScience** | [synthetic-sciences](https://github.com/synthetic-sciences) | [openscience.sh](https://openscience.sh) | [openscience](https://github.com/synthetic-sciences/openscience) | Node.js, React, Navegador | Lanzamiento activo | Multidisciplinario (ML, Bio, Quim, Fis) |
| **Open Science (Alpha)** | [aipoch](https://github.com/aipoch) | [aipoch.com](https://aipoch.com) | [open-science](https://github.com/aipoch/open-science) | Electron, React | Alpha (Etapa inicial) | Medicina y Ciencias de la vida |
| **The AI Scientist** | [Sakana AI](https://sakana.ai) | [sakana.ai](https://sakana.ai) | [AI-Scientist](https://github.com/SakanaAI/AI-Scientist) / [v2](https://github.com/SakanaAI/AI-Scientist-v2) | Python, PyTorch | Investigación académica | Aprendizaje automático / IA |

---

## 🔍 Perfiles detallados de los proyectos

### 1. Open Science Desktop (ai4s-research)
Un cliente de escritorio basado en Tauri que prioriza el entorno local y es independiente del modelo. Ofrece un entorno nativo rápido para gestionar agentes científicos y conectar recursos externos mediante servidores estándar Model Context Protocol (MCP).

*   **Recursos clave**:
    *   **Repositorio principal**: [ai4s-research/open-science](https://github.com/ai4s-research/open-science)
    *   **Sitio web oficial**: [openedscience.com](https://openedscience.com)
    *   **Repositorio de habilidades**: [ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
*   **Fortalezas principales**:
    *   **Alto rendimiento**: La arquitectura basada en Tauri garantiza un tamaño reducido del instalador y un consumo de memoria mínimo.
    *   **Soporte nativo de MCP**: Se conecta sin problemas a cualquier herramienta compatible con Model Context Protocol.
    *   **Flujo de trabajo completo**: Incluye de fábrica habilidades científicas para la exploración de temas, revisión de literatura, diseño de experimentos, generación de manuscritos y auditoría de integridad académica.
*   **Limitaciones**: Depende en gran medida de la importación de módulos de habilidades externos para tareas altamente específicas.

### 2. OpenScience (synthetic-sciences)
Un espacio de trabajo interactivo basado en navegador que combina una ejecución de agentes local con una interfaz web. Este proyecto fue desarrollado por un equipo respaldado por Y Combinator y se destaca por sus numerosas funciones integradas.

*   **Recursos clave**:
    *   **Repositorio principal**: [synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience)
    *   **Sitio web oficial**: [openscience.sh](https://openscience.sh)
    *   **Paquete NPM**: [@synsci/openscience](https://www.npmjs.com/package/@synsci/openscience)
*   **Fortalezas principales**:
    *   **Gran variedad de habilidades de fábrica**: Incluye más de 290 habilidades predefinidas y conectores nativos a más de 30 bases de datos científicas oficiales (UniProt, PDB, arXiv, ChEMBL, etc.).
    *   **Alta autonomía**: Coordina redes complejas de subagentes para evaluar hipótesis y ejecutar código en entornos de prueba aislados.
    *   **Multidisciplinario**: Entornos preconfigurados listos para biología, química, física y aprendizaje automático.
*   **Limitaciones**: No cuenta con aplicación de escritorio nativa independiente; funciona en pestañas del navegador.

### 3. Open Science (aipoch)
Un cliente de investigación especializado basado en Electron, diseñado específicamente para los sectores biomédico y de las ciencias de la vida.

*   **Recursos clave**:
    *   **Repositorio principal**: [aipoch/open-science](https://github.com/aipoch/open-science)
    *   **Sitio web oficial**: [aipoch.com](https://aipoch.com)
    *   **Habilidades médicas**: [medical-research-skills](https://github.com/aipoch/medical-research-skills)
*   **Fortalezas principales**:
    *   **Integración biomédica**: Conexión directa mediante API a PubMed, ClinVar, GEO y otras bases de datos genómicas.
    *   **Arquitectura especializada de coordinador y subagentes**: La estructura está diseñada para ajustarse a los ensayos clínicos, modelado bioinformático y análisis de literatura biomédica.
*   **Limitaciones**: Actualmente se encuentra en una versión alpha temprana; muchas características están en desarrollo o son maquetas preliminares.

---

## 🚀 Instalación y primeros pasos

### 1. Open Science Desktop (ai4s-research)
1. Ve a la [página de versiones (Releases)](https://github.com/ai4s-research/open-science/releases) del repositorio.
2. Descarga el instalador compatible con tu sistema operativo (`.dmg` para macOS, `.exe` para Windows, `.deb`/`.AppImage` para Linux).
3. Ejecuta el instalador y abre la aplicación.
4. Dirígete a **Settings (Configuración)** e ingresa tus llaves API (compatible con OpenAI, Anthropic, Gemini, DeepSeek o servidores locales).
5. Carga el paquete predeterminado [ai4s-skills](https://github.com/ai4s-research/ai4s-skills) para habilitar las funciones principales.

### 2. OpenScience (synthetic-sciences)
Requisitos previos: Tener instalados [Node.js](https://nodejs.org/) (versión 18 o superior) y npm.

*   **Inicio rápido (Recomendado)**:
    Ejecuta la herramienta directamente en la terminal sin necesidad de descargarla de manera permanente:
    ```bash
    npx synsci
    ```
*   **Instalación global**:
    Instala de forma global en tu sistema para acceder en cualquier momento:
    ```bash
    npm i -g @synsci/openscience
    openscience
    ```
*   **Configuración de API**:
    Tras iniciar la herramienta, abre la dirección indicada (por defecto: `http://localhost:3000`) en tu navegador para ingresar tus llaves API.

### 3. Open Science (aipoch)
1. Clona el repositorio:
   ```bash
   git clone https://github.com/aipoch/open-science.git
   cd open-science
   ```
2. Instala las dependencias de desarrollo:
   ```bash
   npm install
   ```
3. Ejecuta en modo desarrollador:
   ```bash
   npm start
   ```

---

## ❓ Preguntas frecuentes (Q&A)

### Q1: ¿Mis ideas de investigación, llaves API y conjuntos de datos están seguros?
Sí. Las tres plataformas priorizan un enfoque **local-first** (primero el entorno local). Tus claves API, configuraciones de experimentos, caché de literatura y borradores generados se almacenan localmente en tu ordenador. Las peticiones a las API de inteligencia artificial se realizan directamente desde tu máquina, por lo que ningún servidor intermedio almacena o registra tu propiedad intelectual.

### Q2: ¿Puedo ejecutar estos sistemas sin conexión a Internet utilizando modelos locales?
Sí. Dado que las plataformas son independientes del modelo y admiten puntos de enlace (endpoints) de API estándar, puedes conectarlas a motores de inferencia locales como [Ollama](https://ollama.com/) o [LM Studio](https://lmstudio.ai/). Solo debes dirigir la dirección base de la API hacia tu dirección local (ej. `http://localhost:11434/v1`).

### Q3: ¿Cómo creo e importo habilidades personalizadas?
- **Para Open Science Desktop (ai4s-research)**: Las habilidades se estructuran en archivos JSON/Markdown siguiendo el estándar open Agent Skills. Puedes guardar tus carpetas de habilidades localmente y vincularlas desde el panel de configuración.
- **Para OpenScience (synthetic-sciences)**: Puedes escribir complementos personalizados (plugins) o desarrollar herramientas utilizando su SDK de TypeScript.

### Q4: ¿Cuál es la plataforma más adecuada para mí?
- Elige **Open Science Desktop** si buscas una aplicación nativa ligera, optimizada para tareas generales, síntesis de textos y redacción.
- Elige **OpenScience (synthetic-sciences)** si requieres automatización profunda, ejecución de código en contenedores aislados y consulta nativa de bases de datos como UniProt o PDB.
- Elige **Open Science (aipoch)** si tu investigación se centra en biomedicina o genómica, y deseas evaluar un flujo de trabajo enfocado en este ámbito.

---

## 💡 Consejos y optimizaciones avanzadas

### 1. Estrategia de modelos y control de costos
Ejecutar flujos autónomos prolongados de investigación puede elevar el consumo de API. Sugerimos la siguiente segmentación de modelos:
- **Etapa de filtrado y búsqueda preliminar**: Utiliza modelos de alta velocidad y bajo costo como `deepseek-chat` (DeepSeek-V3) o modelos locales de código abierto para catalogar artículos, extraer palabras clave y clasificar tareas.
- **Etapa de síntesis y redacción académica**: Cambia a modelos de inteligencia avanzada como `claude-3-5-sonnet` o `gpt-4o` al escribir el documento final, realizar razonamientos lógicos o auditorías estructuradas.

### 2. Integración de herramientas mediante MCP
Utiliza **Model Context Protocol (MCP)** para vincular estas plataformas con tu sistema de archivos local, bases de datos internas o clústeres de cómputo. Mediante el SDK de MCP puedes crear scripts sencillos en Python o Node.js que permitan a los agentes consultar tus registros de laboratorio privados de manera segura.

### 3. Supervisión de código generado
Cuando los agentes autónomos escriban scripts (por ejemplo, código de Python para procesar archivos genómicos CSV), revisa detenidamente el historial de ejecución. Aunque plataformas como `OpenScience` corren el código en contenedores Docker seguros, confirmar las dependencias e interfaces de datos de forma manual antes de iniciar tareas de larga duración reduce la probabilidad de errores.

---

## 🤝 Colaboración y Licencia
¡Agradecemos cualquier tipo de contribución a este manual! Siéntete libre de abrir problemas (issues) o enviar solicitudes de cambio (pull requests) para agregar recursos, consejos o traducciones adicionales.

Este proyecto se distribuye bajo la licencia [MIT](LICENSE).
