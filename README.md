# Open Science & AI-Scientist Playbook

[English](README.md) | [简体中文](README_zh.md) | [Français](README_fr.md) | [日本語](README_ja.md) | [한국어](README_ko.md) | [Español](README_es.md)

Welcome to the **Open Science & AI-Scientist Playbook**! This is a curated, comprehensive guide detailing the leading open-source AI scientist workbenches and local-first research platforms. It features resource directories, step-by-step installation guides, common FAQs, and advanced optimizations to help you supercharge your scientific research with AI.

---

## 🌟 The AI-Scientist Resource Matrix

| Project Name | Developer / Organization | Official Website | GitHub Repository | Primary Tech Stack | Development Status | Target Domain |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open Science Desktop** | [ai4s-research](https://github.com/ai4s-research) | [openedscience.com](https://openedscience.com) | [open-science](https://github.com/ai4s-research/open-science) | Tauri, Rust, JS/TS | Beta (Active) | General Science / Cross-disciplinary |
| **OpenScience** | [synthetic-sciences](https://github.com/synthetic-sciences) | [openscience.sh](https://openscience.sh) | [openscience](https://github.com/synthetic-sciences/openscience) | Node.js, React, Browser | Active Release | Multi-disciplinary (ML, Bio, Chem, Phys) |
| **Open Science (Alpha)** | [aipoch](https://github.com/aipoch) | [aipoch.com](https://aipoch.com) | [open-science](https://github.com/aipoch/open-science) | Electron, React | Alpha (Early Stage) | Medicine & Life Sciences |
| **The AI Scientist** | [Sakana AI](https://sakana.ai) | [sakana.ai](https://sakana.ai) | [AI-Scientist](https://github.com/SakanaAI/AI-Scientist) / [v2](https://github.com/SakanaAI/AI-Scientist-v2) | Python, PyTorch | Academic Research | Machine Learning / AI Research |

---

## 🔍 Core Project Profiles

### 1. Open Science Desktop (ai4s-research)
A local-first, model-agnostic desktop client built on Tauri. It delivers a fast, native desktop environment for managing scientific agents and connecting external resources through standard Model Context Protocol (MCP) servers.

*   **Key Resources**:
    *   **Main Repo**: [ai4s-research/open-science](https://github.com/ai4s-research/open-science)
    *   **Official Website**: [openedscience.com](https://openedscience.com)
    *   **Core Skillset Repository**: [ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
*   **Key Strengths**:
    *   **High Performance**: Tauri-based architecture ensures small bundle size and low memory usage.
    *   **Native MCP Support**: Seamlessly connects to any Model Context Protocol compliant tool.
    *   **Comprehensive Workflow**: Pre-packaged with standard scientific skills spanning topic exploration, literature review, experiment design, paper generation, and integrity checks.
*   **Limitations**: Relies heavily on importing external skill modules for specific domain tasks.

### 2. OpenScience (synthetic-sciences)
A web-based interactive workspace that bundles a local agent runtime with a browser-based user interface. This project was developed by a YC-backed team and targets rich out-of-the-box functionality.

*   **Key Resources**:
    *   **Main Repo**: [synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience)
    *   **Official Website**: [openscience.sh](https://openscience.sh)
    *   **NPM Package**: [@synsci/openscience](https://www.npmjs.com/package/@synsci/openscience)
*   **Key Strengths**:
    *   **Massive Out-of-the-Box Skills**: Includes 290+ predefined skills and native connectors to over 30 databases (UniProt, PDB, arXiv, ChEMBL, etc.).
    *   **Strong Autonomy**: Coordinates complex agent networks to evaluate hypotheses and run code in isolated sandboxes.
    *   **Multi-Disciplinary Support**: Preconfigured environments for biology, chemistry, physics, and ML.
*   **Limitations**: No native compiled desktop app; operates entirely in browser tabs.

### 3. Open Science (aipoch)
An Electron-based specialized research client specifically designed for the biomedical and life sciences sectors.

*   **Key Resources**:
    *   **Main Repo**: [aipoch/open-science](https://github.com/aipoch/open-science)
    *   **Official Website**: [aipoch.com](https://aipoch.com)
    *   **Medical Skillset**: [medical-research-skills](https://github.com/aipoch/medical-research-skills)
*   **Key Strengths**:
    *   **Biomedical Integrations**: Direct API mappings for PubMed, ClinVar, GEO, and various genetic databases.
    *   **Specialized Coordinator-Subagent Design**: Structure maps directly onto clinical trial design, bioinformatic modeling, and academic literature analysis.
*   **Limitations**: Currently in early alpha; many features are placeholders or under active construction.

---

## 🚀 Installation & Getting Started

### 1. Open Science Desktop (ai4s-research)
1. Go to the [Releases page](https://github.com/ai4s-research/open-science/releases) of the repository.
2. Download the installer compatible with your operating system (`.dmg` for macOS, `.exe` for Windows, `.deb`/`.AppImage` for Linux).
3. Run the installer and launch the app.
4. Navigate to **Settings** and input your API keys (supports OpenAI, Anthropic, Gemini, DeepSeek, or local URLs).
5. Load the default [ai4s-skills](https://github.com/ai4s-research/ai4s-skills) to unlock core features.

### 2. OpenScience (synthetic-sciences)
Prerequisites: [Node.js](https://nodejs.org/) (v18 or higher) and npm installed.

*   **Instant Start (Recommended)**:
    Run the tool directly in your terminal without manual installation:
    ```bash
    npx synsci
    ```
*   **Global Installation**:
    Install globally on your system to access the tool anytime:
    ```bash
    npm i -g @synsci/openscience
    openscience
    ```
*   **API Configuration**:
    After running the command, open the provided URL (default: `http://localhost:3000`) in your browser to configure your API keys.

### 3. Open Science (aipoch)
1. Clone the repository:
   ```bash
   git clone https://github.com/aipoch/open-science.git
   cd open-science
   ```
2. Install development dependencies:
   ```bash
   npm install
   ```
3. Run in developer mode:
   ```bash
   npm start
   ```

---

## ❓ Q&A (Frequently Asked Questions)

### Q1: Are my research ideas, API keys, and datasets secure?
Yes. All three platforms prioritize a **local-first** approach. Your API keys, experimental configurations, literature cache, and generated papers are stored locally on your device. Requests to LLM APIs are made directly from your computer, ensuring no intermediate servers record your intellectual property.

### Q2: Can I run these models completely offline using local LLMs?
Yes. Because these platforms are model-agnostic and support standard API endpoints, you can easily interface them with local inference engines like [Ollama](https://ollama.com/) or [LM Studio](https://lmstudio.ai/). Simply direct the API base URL to your local host (e.g., `http://localhost:11434/v1`).

### Q3: How do I create and import custom skills?
- **For Open Science Desktop (ai4s-research)**: Skills are formatted as JSON/Markdown files following the open Agent Skills standard. You can place your custom skill packages in your local directory and link them in the Settings panel.
- **For OpenScience (synthetic-sciences)**: You can write custom plugins or implement tools using their TypeScript SDK.

### Q4: Which platform is right for me?
- Choose **Open Science Desktop** if you want a polished, lightweight, native application for general research, literature summaries, and editing.
- Choose **OpenScience (synthetic-sciences)** if you want deep, hands-off automation, code execution in sandbox environments, and native access to databases like UniProt or PDB.
- Choose **Open Science (aipoch)** if you are specifically doing biomedical research or genetics and want to test the early clinical workflow pipeline.

---

## 💡 Advanced Tips & Tricks

### 1. Cost & Model Tier Optimization
Running deep autonomous research loops can get expensive. Optimize your model strategy as follows:
- **Initial Search, Ingestion & Routing**: Use highly cost-effective, state-of-the-art "Flash" and "Mini" models. For example, use **Gemini 2.5 Flash** (ideal for digesting large-context literature and PDFs due to its 1M+ token window) or **GPT-4o mini** and **Claude 3.5 Haiku** for high-throughput sub-agent orchestration, keyword extraction, and workflow routing.
- **Synthesizing & Writing**: Swap to high-intelligence frontier models like **Claude 3.5 Sonnet** or **GPT-4o** only when performing final deep reasoning, writing the final manuscript, or executing structured auditing.

### 2. Custom Tooling with MCP
Leverage the **Model Context Protocol (MCP)** to connect the platforms directly to your local file systems, custom database servers, or computing clusters. You can write simple Python or Node.js scripts using the MCP SDK to let the AI scientist query your private lab notebook database safely.

### 3. Verification of Generated Code
When AI agents generate scripts (e.g., Python code to parse genomic CSVs), always check the execution logs. Platforms like `OpenScience (synthetic-sciences)` run code in a Docker sandbox, but double-checking dependencies or data schema formats will prevent runtime errors during long-running tasks.

---

## 🤝 Contributing & License
We welcome contributions to this playbook! Feel free to open issues or submit pull requests with new resources, tips, or translations.

This project is open-sourced under the [MIT License](LICENSE).
