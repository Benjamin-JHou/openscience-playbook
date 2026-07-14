# 三个 Open Science 科研工作台项目初稿

本文档对目前社区中备受瞩目的三个开源 AI 科学工作台（AI-Scientist）项目进行了梳理与对比，为科研人员提供选型参考。

---

### 1. Open Science Desktop (由 [ai4s-research](https://github.com/ai4s-research) 出品)

*   **项目 GitHub 仓库**：[ai4s-research/open-science](https://github.com/ai4s-research/open-science)
*   **官方网站**：[openedscience.com](https://openedscience.com)
*   **配套技能库**：[ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)

这是目前桌面端体验最成熟、通用生态最开放的**纯本地桌面工作台**。它基于 [Tauri](https://tauri.app/) 框架开发，体积轻量、运行流畅，原生深度支持 MCP（Model Context Protocol）协议和开放 Agent Skills 标准。

*   **核心优势**：
    *   **完整的科研闭环**：官方自带的 `ai4s-skills` 技能包覆盖了**选题 - 文献检索 - 实验设计 - 论文写作 - 诚信审计**的完整学术链路。
    *   **开箱即用**：全平台（macOS、Windows、Linux）提供预编译的安装包。
    *   **高度开放与可扩展性**：所有符合标准的第三方技能（例如 K-Dense 生信技能库）都可以无缝导入，扩展边界极宽。
*   **适用场景**：适合作为日常科研的主力工作台，在通用科研全流程打磨上最为完善，目前社区活跃度也是最高的。

---

### 2. OpenScience (由 [synthetic-sciences](https://github.com/synthetic-sciences) 出品)

*   **项目 GitHub 仓库**：[synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience)
*   **官方网站**：[openscience.sh](https://openscience.sh)
*   **安装包/分发渠道**：[npm: @synsci/openscience](https://www.npmjs.com/package/@synsci/openscience)

这是一个**内置功能最丰富、端到端自动化能力最强**的浏览器端工作台，由 Y Combinator 孵化团队开发，是近期非常热门的项目。

*   **核心优势**：
    *   **混合运行模式**：采用浏览器工作区 + 本地 Agent 运行时的形态，通过 npm 命令启动后在浏览器中使用。
    *   **海量内置技能与数据库**：内置了 **290+ 个标准化科研技能**，原生对接 **30 个权威科研数据库**。
    *   **跨学科覆盖**：覆盖机器学习（ML）、生物学（Biology）、物理学（Physics）、化学（Chemistry）四大核心领域。
    *   **强自动化执行**：自带专业的子 Agent 和评审 Agent，端到端执行科研任务能力极强，无需额外寻找第三方技能。
*   **局限与不足**：没有独立的桌面客户端，交互界面更偏向 IDE 风格。
*   **适用场景**：适合有一定代码基础、偏好自动化跑任务、且在生信与分子生物学领域有重度需求的科研工作者。

---

### 3. Open Science (由 [aipoch](https://github.com/aipoch) 出品)

*   **项目 GitHub 仓库**：[aipoch/open-science](https://github.com/aipoch/open-science)
*   **官方网站**：[aipoch.com](https://aipoch.com)
*   **配套医疗技能库**：[aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)

这是**垂直医学与生命科学方向**定位最明确的版本，目前整体处于早期 alpha 阶段。

*   **核心优势**：
    *   **Electron 桌面端**：基于 Electron 开发的桌面客户端，设计思路对标 Claude Science 的「协调 Agent + 专科子 Agent」架构。
    *   **深度集成医学数据库**：原生内置了 PubMed、ClinVar、GEO 等权威医学数据库的连接器，从底层架构上就锚定了生信和医学研究场景。
    *   **专属医学技能**：官方规划了数百个医学研究所需的专属技能（可参见 `medical-research-skills` 仓库）。
*   **局限与不足**：目前完成度较低，许多核心功能仍处于开发中，属于早期尝鲜阶段。
*   **适用场景**：适合医学、基因组学与生信领域的开发者和研究人员提前进行技术探索 and 尝鲜，暂不推荐作为日常的主力科研工具。
