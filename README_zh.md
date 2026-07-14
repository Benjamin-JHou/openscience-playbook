# 开放科学与 AI 科学家使用指南 (Open Science & AI-Scientist Playbook)

[English](README.md) | [简体中文](README_zh.md) | [Français](README_fr.md) | [日本語](README_ja.md) | [한국어](README_ko.md) | [Español](README_es.md)

欢迎来到 **开放科学与 AI 科学家使用指南 (Open Science & AI-Scientist Playbook)**！这是一份精心整理的综合性指南，详细介绍了目前领先的开源 AI 科学家工作台与本地优先的科研平台。其中包含资源汇总、详细的安装指南、常见问答（Q&A）以及高级优化技巧，旨在帮助科研人员利用 AI 提升科研效率。

---

## 🌟 AI-Scientist 资源汇总

| 项目名称 | 开发者 / 组织 | 官方网站 | GitHub 仓库 | 核心技术栈 | 开发状态 | 目标领域 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open Science Desktop** | [ai4s-research](https://github.com/ai4s-research) | [openedscience.com](https://openedscience.com) | [open-science](https://github.com/ai4s-research/open-science) | Tauri, Rust, JS/TS | Beta（活跃） | 通用科学 / 跨学科研究 |
| **OpenScience** | [synthetic-sciences](https://github.com/synthetic-sciences) | [openscience.sh](https://openscience.sh) | [openscience](https://github.com/synthetic-sciences/openscience) | Node.js, React, 浏览器 | 已发布（活跃） | 多学科（机器学习、生物、化学、物理） |
| **Open Science (Alpha)** | [aipoch](https://github.com/aipoch) | [aipoch.com](https://aipoch.com) | [open-science](https://github.com/aipoch/open-science) | Electron, React | Alpha（早期阶段） | 医学与生命科学 |
| **The AI Scientist** | [Sakana AI](https://sakana.ai) | [sakana.ai](https://sakana.ai) | [AI-Scientist](https://github.com/SakanaAI/AI-Scientist) / [v2](https://github.com/SakanaAI/AI-Scientist-v2) | Python, PyTorch | 学术研究 | 机器学习 / AI 研究 |

---

## 🔍 核心项目详情

### 1. Open Science Desktop (ai4s-research)
基于 Tauri 开发的本地优先、模型无关的桌面客户端。它提供了一个快速、原生的桌面环境，用于管理科研 Agent，并支持通过标准的 Model Context Protocol (MCP) 服务连接外部资源。

*   **核心资源**：
    *   **主仓库**：[ai4s-research/open-science](https://github.com/ai4s-research/open-science)
    *   **官方网站**：[openedscience.com](https://openedscience.com)
    *   **科研技能库**：[ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
*   **核心优势**：
    *   **高性能**：基于 Tauri 架构，体积小，内存占用极低。
    *   **原生支持 MCP**：可以无缝连接任何符合 Model Context Protocol 标准的工具。
    *   **完整的工作流**：预装了涵盖选题、文献检索、实验设计、论文生成以及学术诚信审计的完整学术技能包。
*   **局限性**：对于特定垂直领域的任务，较为依赖第三方技能包的导入。

### 2. OpenScience (synthetic-sciences)
这是一个交互式的网页端工作空间，将本地 Agent 运行时与浏览器用户界面结合在一起。该项目由 YC 孵化团队开发，开箱即用功能非常丰富。

*   **核心资源**：
    *   **主仓库**：[synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience)
    *   **官方网站**：[openscience.sh](https://openscience.sh)
    *   **NPM 安装包**：[@synsci/openscience](https://www.npmjs.com/package/@synsci/openscience)
*   **核心优势**：
    *   **海量开箱即用技能**：内置 290+ 个预定义科研技能，原生对接 30 多个权威数据库（如 UniProt、PDB、arXiv、ChEMBL 等）。
    *   **强大的自主性**：能协调复杂的子 Agent 网络，并在隔离的沙箱中执行代码和验证假设。
    *   **多学科支持**：为生物、化学、物理和机器学习配置了成熟的模板环境。
*   **局限性**：没有独立的桌面客户端安装包，需要通过浏览器标签页进行交互。

### 3. Open Science (aipoch)
基于 Electron 开发的专业科研客户端，专门面向生物医学和生命科学领域。

*   **核心资源**：
    *   **主仓库**：[aipoch/open-science](https://github.com/aipoch/open-science)
    *   **官方网站**：[aipoch.com](https://aipoch.com)
    *   **医学技能库**：[medical-research-skills](https://github.com/aipoch/medical-research-skills)
*   **核心优势**：
    *   **医学数据库深度集成**：原生对接 PubMed、ClinVar、GEO 及多种基因组学数据库。
    *   **专属协同架构**：采用“协调 Agent + 专科子 Agent”设计，直接契合临床试验设计、生物信息学建模及医学文献分析等场景。
*   **局限性**：目前处于早期 alpha 阶段，部分核心功能仍处于占位符或积极开发阶段。

---

## 🚀 安装与快速开始

### 1. Open Science Desktop (ai4s-research)
1. 访问 GitHub 仓库的 [Releases 页面](https://github.com/ai4s-research/open-science/releases)。
2. 下载适用于您操作系统的安装包（macOS 为 `.dmg`，Windows 为 `.exe`，Linux 为 `.deb`/`.AppImage`）。
3. 运行安装程序并启动应用。
4. 前往 **Settings (设置)** 并输入您的 API Key（支持 OpenAI、Anthropic、Gemini、DeepSeek 及本地大模型）。
5. 加载默认的 [ai4s-skills](https://github.com/ai4s-research/ai4s-skills) 以解锁科研功能。

### 2. OpenScience (synthetic-sciences)
前置要求：安装了 [Node.js](https://nodejs.org/) (v18 或更高版本) 以及 npm。

*   **一键直启 (推荐)**：
    无需手动安装，直接在终端中运行：
    ```bash
    npx synsci
    ```
*   **全局安装**：
    将工具全局安装在您的系统上，以便随时调用：
    ```bash
    npm i -g @synsci/openscience
    openscience
    ```
*   **配置 API**：
    启动后，在浏览器中打开提示的 URL（默认：`http://localhost:3000`）配置 API 密钥。

### 3. Open Science (aipoch)
1. 克隆仓库：
   ```bash
   git clone https://github.com/aipoch/open-science.git
   cd open-science
   ```
2. 安装开发依赖：
   ```bash
   npm install
   ```
3. 以开发模式运行：
   ```bash
   npm start
   ```

---

## ❓ 常见问答 (Q&A)

### Q1: 我的科研想法、API 密钥以及数据集安全吗？
安全。这三个平台都优先采用**本地优先 (local-first)** 的架构。您的 API 密钥、实验配置、文献缓存和生成的论文均存储在您的本地设备上。与大语言模型 API 的通信是由您的计算机直接发起的，不会经过任何第三方中间服务器。

### Q2: 我可以完全离线运行本地大模型吗？
可以。由于这些平台均支持自定义 API 终结点（Model-Agnostic），您可以直接对接 [Ollama](https://ollama.com/) 或 [LM Studio](https://lmstudio.ai/) 等本地推理引擎。只需将 API Base URL 指向本地地址（例如 `http://localhost:11434/v1`）即可。

### Q3: 如何编写和导入自定义技能？
- **对于 Open Science Desktop (ai4s-research)**：技能是遵循 open Agent Skills 标准的 JSON/Markdown 文件。您可以将自定义技能包存放在本地，并在设置面板中进行关联。
- **对于 OpenScience (synthetic-sciences)**：您可以使用其 TypeScript SDK 编写自定义插件或工具。

### Q4: 我应该选择哪一个平台？
- 如果您需要一个设计精美、轻量且适合通用科研、文献综述和日常写作的桌面应用，请选择 **Open Science Desktop**。
- 如果您需要深度的全自动化执行、在沙箱环境中运行代码、以及原生对接 UniProt 或 PDB 等专业数据库，请选择 **OpenScience (synthetic-sciences)**。
- 如果您专注于生物医学、基因组学研究，并希望体验垂直的临床及生信工作流，请选择 **Open Science (aipoch)**。

---

## 💡 高级使用技巧

### 1. 成本与模型梯队优化
运行全自动科研循环可能会产生较高的 API 费用。建议采用以下梯队化模型策略：
- **筛选与检索阶段**：使用高性价比、高并发的模型如 `deepseek-chat` (DeepSeek-V3) 或本地开源模型，用于文献的初筛、关键词提取和任务路由。
- **推理与写作阶段**：在最终撰写论文、深入推理和结构审计时，切换至顶级模型如 `claude-3-5-sonnet` 或 `gpt-4o`。

### 2. 通过 MCP 接入自定义工具
利用 **Model Context Protocol (MCP)** 可以将平台直接连接至您的本地文件系统、私有数据库或高性能计算集群。您可以使用 MCP SDK 编写简单的 Python 或 Node.js 脚本，使 AI 科学家能够安全地查询您私有的实验记录数据库。

### 3. 代码生成验证
当 AI 智能体生成脚本时（例如用于处理基因组数据的 Python 脚本），请务必检查执行日志。虽然像 `OpenScience` 这样的平台会在隔离的 Docker 沙箱中运行代码，但在执行长时间任务前人工确认依赖库和数据格式能有效避免中断。

---

## 🤝 贡献与许可
欢迎为本指南做出贡献！您可以随时提出 Issue 或提交 Pull Request，补充新的资源、技巧或翻译版本。

本项目采用 [MIT 许可证](LICENSE) 开源。
