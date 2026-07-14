import { useState } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  FileText, 
  Download, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface Agent {
  name: string;
  url: string;
  developer: string;
  release: string;
  positioning: string;
  deployment: string;
}

const agents: Agent[] = [
  { name: "Claude Science", url: "https://www.anthropic.com/claude", developer: "Anthropic", release: "2026.6", positioning: "General Scientific AI Workspace", deployment: "Local + Cloud" },
  { name: "Omic (Omic AI)", url: "https://omic.ai/", developer: "Omic AI", release: "2025", positioning: "Biological Superintelligence / Drug Discovery", deployment: "SaaS + Private On-Premises" },
  { name: "Biomni", url: "https://biomni.stanford.edu", developer: "Stanford (Chinese team)", release: "2026.7", positioning: "General Biomedical Agent", deployment: "Claude Platform, Enterprise" },
  { name: "ScienceOS", url: "https://scienceos.ai/", developer: "Independent", release: "2025.8", positioning: "Literature Review & Research Agent", deployment: "SaaS (Cloud)" },
  { name: "The AI Scientist", url: "https://github.com/SakanaAI/AI-Scientist", developer: "Sakana AI (Japan)", release: "2024.8", positioning: "Automated End-to-End Scientific Discovery", deployment: "Open-source, Python (GitHub)" },
  { name: "Co-Scientist", url: "https://deepmind.google/discover/blog/introducing-co-scientist-using-ai-agents-for-scientific-hypothesis-generation/", developer: "Google DeepMind", release: "2026.5", positioning: "Multi-agent Hypothesis Generation", deployment: "Gemini for Science (By request)" },
  { name: "EvoScientist", url: "https://github.com/EvoScientist/EvoScientist", developer: "Independent", release: "2026.3", positioning: "Self-evolving Multi-agent Research Framework", deployment: "Open-source, PyPI" },
  { name: "Agent Laboratory", url: "https://github.com/SamuelSchmidgall/AgentLaboratory", developer: "AMD + Johns Hopkins", release: "2025.1", positioning: "Full-workflow Autonomous Research", deployment: "Open-source (Supports CPU/GPU)" },
  { name: "BioNeMo Agent Toolkit", url: "https://github.com/NVIDIA-BioNeMo/bionemo-agent-toolkit", developer: "NVIDIA", release: "2026.6", positioning: "Life Sciences Agent Orchestration", deployment: "NVIDIA NIM (Local or Cloud)" },
  { name: "LUMI-lab", url: "https://pharmacy.utoronto.ca/bowen-li", developer: "University of Toronto", release: "2025.2", positioning: "AI-driven Physical Lab (mRNA)", deployment: "Physical Laboratory Integration" },
  { name: "Autoscience", url: "https://www.autoscience.ai/", developer: "Autoscience", release: "2026.3", positioning: "Autonomous AI Research Laboratory", deployment: "Managed Service for Enterprise" },
  { name: "OmicOS Science", url: "https://github.com/omicverse", developer: "Local Team", release: "2026.7", positioning: "Genomics Analysis & AI Workbench", deployment: "App Store (Local + Cloud)" },
  { name: "SciMaster", url: "https://scimaster.bohrium.com/", developer: "DeepVerse + SJTU", release: "2025.7", positioning: "General Scientific Agent", deployment: "Bohr Platform (SaaS + Private)" },
  { name: "MolClaw", url: "https://github.com/InternScience/MolClaw", developer: "Shanghai AI Lab + PKU", release: "2026.5", positioning: "Drug Screening Agent", deployment: "Collaborative Academic Deploy" },
  { name: "Yayi AI-Scientist", url: "https://yayi.wenge.com", developer: "Wenge + CAS", release: "2025.7", positioning: "Literature Research Assistant", deployment: "SaaS Platform" },
  { name: "MoleculeOS (MOS)", url: "https://mos.moleculemind.com/login", developer: "MoleculeMind", release: "2026.7", positioning: "AI Biopharma Research Operating System", deployment: "Enterprise Platform" },
  { name: "MindSpore Science Agent", url: "https://github.com/mindspore-ai/mindscience", developer: "Huawei", release: "2026.4", positioning: "Scientific Machine Learning Agent", deployment: "Open-source, MindSpore" },
  { name: "ElementsClaw", url: "https://arxiv.org/abs/2604.23758", developer: "Alibaba DAMO + UCAS", release: "2026.7", positioning: "Superconducting Material Discovery", deployment: "Open Database / Predictive Agent" },
  { name: "Pangshi Agent Factory", url: "https://scienceone.cn/", developer: "CAS", release: "2025.11", positioning: "Research Agent Generation Platform", deployment: "CAS Pangshi Platform" },
  { name: "\"Dasheng\" Sci-Agent", url: "https://www.sais.com.cn/", developer: "SAIS + Fudan Univ", release: "2026.3", positioning: "System-level High-initiative Scientific Agent", deployment: "Xinghe Qizhi Platform" },
  { name: "BioMedAgent", url: "https://github.com/BOBQWERA/BioMedAgent", developer: "Academic Group", release: "2026.4", positioning: "Biomedical Data Analysis Agent", deployment: "Academic Paper Replication" },
  { name: "OmicsClaw", url: "https://github.com/TianGzlab/OmicsClaw", developer: "Tsinghua AI4Life Lab", release: "2026.3", positioning: "Multi-omics AI Agent", deployment: "Docker-based (OpenClaw)" },
];

const langData = {
  en: {
    title: "AI-Scientist Playbook",
    subtitle: "The definitive guide to deploying autonomous AI agents and local-first workbenches in scientific research.",
    intro: "Welcome to the AI-Scientist Playbook! This curated guide outlines leading AI scientist platforms, prompt templates, and troubleshooting steps to supercharge your laboratory research workflows.",
    comparison: "Client Comparison",
    viewFiles: "Workspace Templates",
    promptsTitle: "Claude Science-Style Prompt Hub",
    principlesTitle: "Key Operational Principles",
    prerequisites: "Tooling Prerequisites",
    pipelines: "Standard Research Pipeline",
    searchPlaceholder: "Search agents by name, developer, or positioning...",
    copyBtn: "Copy",
    copiedBtn: "Copied!",
    promptList: [
      {
        title: "1. Systematic Literature Review",
        desc: "Perform a comprehensive search and build a literature matrix matching criteria.",
        code: `Please perform a systematic literature survey on the topic: "AI-assisted medical imaging for lung nodule screening".
Requirements:
1. Extract search query terms (English keywords, synonyms, MeSH terms).
2. Retrieve literature from arXiv, PubMed, Semantic Scholar, and Crossref published in the last 5 years.
3. Retain only papers with valid DOI, PMID, or arXiv IDs.
4. Compile a survey matrix with columns: Paper Name, Year, Core Task, Datasets, Methodology, Performance Metrics, Findings, and Limitations.
5. Summarize 3 research gaps and propose 3 potential paper directions.
6. Place any unverified citations in a section labeled "Pending Verification".`
      },
      {
        title: "2. Reproducing Paper Experiments",
        desc: "Strictly reproduce an open-source model or methodology from git.",
        code: `Clone the repository at https://github.com/example/reproducible-paper.git.
Execute the validation pipeline to reproduce Figure 4 (Accuracy comparison).
Guidelines:
1. Initialize the run inside a clean Docker/Conda environment.
2. Read the README.md and INSTALL.md files before running any scripts.
3. If dependencies fail, identify the correct versions and write a patch script.
4. Do not modify the core model architecture.
5. Log the commands, errors, and fixes in runs/reproduction_log.md.
6. Produce a table comparing your results with the published figures.`
      }
    ]
  },
  zh: {
    title: "AI-Scientist Playbook",
    subtitle: "科研人员和实验室部署自主 AI 智能体与本地优先工作台的权威指南。",
    intro: "欢迎来到 AI-Scientist 智能体指南！本手册系统整理了领先的科研 Agent 平台、提示词模板和常见环境排障步骤，旨在帮助实验室全面提升科研效率。",
    comparison: "科研客户端对比",
    viewFiles: "科研工作区模板",
    promptsTitle: "Claude Science 风格提示词库",
    principlesTitle: "核心使用原则",
    prerequisites: "科研软件栈准备",
    pipelines: "标准科研流水线",
    searchPlaceholder: "搜索智能体名称、开发方或定位...",
    copyBtn: "复制",
    copiedBtn: "已复制!",
    promptList: [
      {
        title: "1. 系统性文献综述与检索",
        desc: "自动提取搜索关键词并在多数据库中检索并导出文献矩阵。",
        code: `请针对以下主题进行系统性的文献调研："利用 AI 辅助医疗影像进行肺结节筛查"。
要求：
1. 提取检索关键词（英文关键词、同义词、MeSH 主题词）。
2. 检索 arXiv、PubMed、Semantic Scholar 和 Crossref 近 5 年发表的文献。
3. 仅保留包含有效 DOI、PMID 或 arXiv ID 的论文。
4. 整理文献矩阵，包含以下列：文献名称、年份、核心任务、数据集、方法学、性能指标、研究结论、局限性。
5. 总结 3 个现有研究空白，并提出 3 个潜在的论文切入方向。
6. 将未经验证的文献引用放入“待验证”部分。`
      },
      {
        title: "2. 论文实验结果复现",
        desc: "在本地沙箱中克隆代码并自动修复依赖，复现论文中的图表指标。",
        code: `克隆以下仓库：https://github.com/example/reproducible-paper.git。
运行验证流水线以复现论文中的图表 Figure 4（准确率对比图）。
规范：
1. 在干净的 Docker 或 Conda 环境中初始化运行。
2. 运行任何脚本前先完整阅读 README.md 和 INSTALL.md。
3. 若依赖安装失败，自主排查并自动编写依赖修补脚本。
4. 严禁修改核心模型架构。
5. 将所有执行命令、错误及修复方案记录在 runs/reproduction_log.md 中。
6. 生成一个对比表格，将你的复现结果与原论文发表指标进行对照。`
      }
    ]
  },
  fr: {
    title: "AI-Scientist Playbook",
    subtitle: "Le guide définitif pour déployer des agents IA autonomes et des espaces de travail locaux en recherche scientifique.",
    intro: "Bienvenue dans le AI-Scientist Playbook ! Ce guide présente les plateformes d'agents IA, des modèles de prompts et des guides de dépannage pour booster vos flux de travail de recherche.",
    comparison: "Comparaison des Clients",
    viewFiles: "Modèles d'Espace de Travail",
    promptsTitle: "Hub de Prompts Style Claude Science",
    principlesTitle: "Principes Opérationnels Clés",
    prerequisites: "Prérequis Logiciels",
    pipelines: "Flux de Travail de Recherche Standard",
    searchPlaceholder: "Rechercher des agents par nom, développeur...",
    copyBtn: "Copier",
    copiedBtn: "Copié !",
    promptList: [
      {
        title: "1. Revue de Littérature Systématique",
        desc: "Rechercher et organiser la littérature dans une matrice structurée.",
        code: `Veuillez effectuer une recherche documentaire systématique sur le thème : "AI-assisted medical imaging for lung nodule screening".
Exigences:
1. Extraire les termes de recherche (mots-clés en anglais, synonymes, termes MeSH).
2. Récupérer la littérature sur arXiv, PubMed, Semantic Scholar et Crossref publiée au cours des 5 dernières années.
3. Conserver uniquement les articles disposant d'un DOI, PMID ou ID arXiv valide.
4. Compiler une matrice avec les colonnes : Titre de l'article, Année, Tâche principale, Données, Méthodologie, Métriques, Résultats, Limites.
5. Synthétiser 3 lacunes de recherche et proposer 3 directions d'articles potentielles.
6. Placer les citations non vérifiées dans une section intitulée "En attente de vérification".`
      },
      {
        title: "2. Reproduction d'Expériences",
        desc: "Cloner et exécuter un code open-source pour reproduire un graphique.",
        code: `Clonez le dépôt à l'adresse https://github.com/example/reproducible-paper.git.
Exécutez le pipeline de validation pour reproduire la Figure 4.
Directives:
1. Initialisez l'exécution dans un environnement Docker/Conda propre.
2. Lisez les fichiers README.md et INSTALL.md avant de lancer des scripts.
3. Si les dépendances échouent, identifiez les versions correctes et écrivez un script de correction.
4. Ne modifiez pas l'architecture du modèle central.
5. Enregistrez les commandes, erreurs et correctifs dans runs/reproduction_log.md.
6. Produisez un tableau comparant vos résultats aux chiffres publiés.`
      }
    ]
  },
  ja: {
    title: "AI-Scientist Playbook",
    subtitle: "科学研究における自律型AIエージェントとローカルファーストのワークベンチのデプロイガイド。",
    intro: "AI-Scientist プレイブックへようこそ！本ガイドでは、主要なAI研究プラットフォーム、プロンプトテンプレート、およびトラブルシューティングを掲載しています。",
    comparison: "クライアント比較",
    viewFiles: "ワークスペーステンプレート",
    promptsTitle: "Claude Science スタイルプロンプト集",
    principlesTitle: "中心的な運用原則",
    prerequisites: "推奨ソフトウェア環境",
    pipelines: "標準的な科学研究プロセス",
    searchPlaceholder: "エージェント名、開発元などで検索...",
    copyBtn: "コピー",
    copiedBtn: "コピー完了!",
    promptList: [
      {
        title: "1. 系統的文献調査と文献マトリクス",
        desc: "指定されたテーマに沿って主要データベースから論文情報を収集し、表を作成します。",
        code: `次のテーマに関する系統的文献調査を実行してください：「AIを活用した肺結節スクリーニングの医療画像処理」。
要件：
1. 検索クエリ用語（英語のキーワード、類義語、MeSH用語）を抽出する。
2. 過去5年間に発行されたarXiv、PubMed、Semantic Scholar、Crossrefの文献を取得する。
3. 有効なDOI、PMID、またはarXiv IDを持つ論文のみを保持する。
4. 文献マトリクス（列名：論文名、発行年、コアタスク、データセット、手法、評価指標、知見、限界）を作成する。
5. 現在の研究ギャップを3つ要約し、3つの潜在的な論文執筆の方向性を提案する。
6. 未検証の引用文献は「要検証」セクションに配置する。`
      },
      {
        title: "2. 論文実験の再現",
        desc: "GitHubからコードをクローンし、サンドボックス環境で図表を再現します。",
        code: `https://github.com/example/reproducible-paper.git のリポジトリをクローンしてください。
検証パイプラインを実行して、論文内の Figure 4（正確性の比較）を再現します。
ガイドライン：
1. クリーンなDockerまたはConda環境内で実行を初期化します。
2. スクリプトを実行する前に、README.mdとINSTALL.mdファイルを熟読する。
3. 依存関係のインストールに失敗した場合は、正しいバージョンを特定してパッチスクリプトを作成する。
4. コアモデルのアーキテクチャを変更してはならない。
5. 実行コマンド、エラー、および修正内容を runs/reproduction_log.md に記録する。
6. 再現された結果と論文に掲載されている指標を比較する表を作成する。`
      }
    ]
  },
  ko: {
    title: "AI-Scientist Playbook",
    subtitle: "과학 연구 분야에서 자율형 AI 에이전트 및 로컬 우선 작업대를 배포하기 위한 안내서.",
    intro: "AI-Scientist 플레이북에 오신 것을 환영합니다! 본 가이드는 주요 AI 연구 플랫폼, 프롬프트 템플릿, 그리고 트러블슈팅 가이드를 제공합니다.",
    comparison: "클라이언트 비교",
    viewFiles: "작업 공간 템플릿",
    promptsTitle: "Claude Science 스타일 프롬프트 허브",
    principlesTitle: "핵심 운영 원칙",
    prerequisites: "도구 설치 요구사항",
    pipelines: "표준 연구 프로세스",
    searchPlaceholder: "에이전트 이름, 개발사 등으로 검색...",
    copyBtn: "복사",
    copiedBtn: "복사됨!",
    promptList: [
      {
        title: "1. 체계적 문헌 조사 및 매트릭스 작성",
        desc: "주제어와 매칭되는 신뢰성 높은 문헌을 자동 검색하고 표로 작성합니다.",
        code: `다음 주제에 대한 체계적인 문헌 조사를 수행하십시오: "폐결절 선별 검사를 위한 AI 지원 의료 영상".
요구사항:
1. 검색 쿼리 용어(영어 키워드, 동의어, MeSH 용어)를 추출합니다.
2. 최근 5년간 발표된 arXiv, PubMed, Semantic Scholar, Crossref 문헌을 검색합니다.
3. 유효한 DOI, PMID 또는 arXiv ID가 있는 논문만 선별합니다.
4. 논문명, 연도, 핵심 과제, 데이터셋, 방법론, 평가 지표, 주요 발견, 한계점 컬럼을 포함하는 분석 매트릭스를 작성합니다.
5. 3가지 연구 공백을 요약하고 향후 연구 방향 3가지를 제시합니다.
6. 확인되지 않은 인용 문헌은 "검증 보류" 섹션에 분류합니다.`
      },
      {
        title: "2. 논문 실험 및 수치 재현",
        desc: "로컬 샌드박스에서 코드를 실행해 논문의 성능 지표와 그래프를 재현합니다.",
        code: `https://github.com/example/reproducible-paper.git 에서 리포지토리를 클론하십시오.
검증 파이프라인을 실행하여 논문의 Figure 4(정확도 비교)를 재현합니다.
가이드라인:
1. 깨끗한 Docker 또는 Conda 환경에서 실행을 초기화합니다.
2. 스크립트를 실행하기 전에 README.md 및 INSTALL.md 파일을 완전히 읽으십시오.
3. 종속성 설치 오류 발생 시 올바른 버전을 찾아서 패치 스크립트를 직접 작성합니다.
4. 모델의 핵심 아키텍처는 절대 변경하지 마십시오.
5. 명령어, 오류 및 수정 내역을 runs/reproduction_log.md에 상세히 기록합니다.
6. 재현 결과 수치와 논문에 공표된 지표를 상호 비교하는 테이블을 작성합니다.`
      }
    ]
  },
  es: {
    title: "AI-Scientist Playbook",
    subtitle: "La guía definitiva para desplegar agentes autónomos de IA y entornos locales en la investigación científica.",
    intro: "¡Bienvenido al AI-Scientist Playbook! Esta guía recopila las principales plataformas de IA científica, plantillas de prompts y resolución de problemas para potenciar tu laboratorio.",
    comparison: "Comparación de Clientes",
    viewFiles: "Plantillas de Trabajo",
    promptsTitle: "Hub de Prompts Estilo Claude Science",
    principlesTitle: "Principios Operativos Clave",
    prerequisites: "Prerrequisitos de Software",
    pipelines: "Flujo de Trabajo Estándar de Investigación",
    searchPlaceholder: "Buscar agentes por nombre, desarrollador...",
    copyBtn: "Copiar",
    copiedBtn: "¡Copiado!",
    promptList: [
      {
        title: "1. Revisión Sistemática de Literatura",
        desc: "Busca y cataloga literatura clave en una matriz estructurada con DOI.",
        code: `Por favor, realice un estudio sistemático de la literatura sobre el tema: "AI-assisted medical imaging for lung nodule screening".
Requisitos:
1. Extraer términos de consulta (palabras clave en inglés, sinónimos, términos MeSH).
2. Recuperar literatura de arXiv, PubMed, Semantic Scholar y Crossref publicada en los últimos 5 años.
3. Conservar únicamente artículos con DOI, PMID o ID de arXiv válidos.
4. Compilar una matriz con las columnas: Nombre del artículo, Año, Tarea principal, Conjuntos de datos, Metodología, Métricas de rendimiento, Hallazgos y Limitaciones.
5. Resumir 3 brechas de investigación y proponer 3 direcciones potenciales para artículos.
6. Colocar cualquier cita no verificada en una sección etiquetada como "Pendiente de verificación".`
      },
      {
        title: "2. Reproducción de Experimentos",
        desc: "Clona y ejecuta el código en un entorno aislado para replicar gráficos.",
        code: `Clone el repositorio en https://github.com/example/reproducible-paper.git.
Ejecute el flujo de trabajo de validación para reproducir la Figura 4.
Directrices:
1. Inicie la ejecución dentro de un entorno Docker/Conda limpio.
2. Lea los archivos README.md e INSTALL.md antes de ejecutar cualquier script.
3. Si fallan las dependencias, identifique las versiones correctas y escriba un script de corrección.
4. No modifique la arquitectura del modelo central.
5. Registre los comandos, errores y soluciones en runs/reproduction_log.md.
6. Produzca una tabla que compare sus resultados con los publicados.`
      }
    ]
  }
};

const mcpConfigExample = `{
  "mcpServers": {
    "pubmed-central": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-pubmed"],
      "env": { "NCBI_API_KEY": "YOUR_NCBI_API_KEY_HERE" }
    },
    "materials-project": {
      "command": "python3",
      "args": ["-m", "mcp_materials_project"],
      "env": { "MP_API_KEY": "YOUR_MATERIALS_PROJECT_API_KEY_HERE" }
    },
    "local-filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/workspace"]
    }
  }
}`;

export default function App() {
  const [activeLang, setActiveLang] = useState<keyof typeof langData>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const t = langData[activeLang];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.positioning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white pb-24 overflow-x-hidden font-body">
      
      {/* Navigation Bar */}
      <nav className="relative z-10 flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-border/50">
        <div 
          className="text-3xl tracking-tight text-foreground select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs font-sans ml-0.5">®</sup>
        </div>
        
        {/* Nav Links (hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground transition-colors">Home</a>
          <a href="#ecosystem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Studio</a>
          <a href="#playbook" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Journal</a>
          <a href="#footer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Reach Us</a>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => {
            const el = document.getElementById('playbook');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-300 transform hover:scale-[1.03]"
        >
          Begin AI for science Journey
        </button>
      </nav>

      {/* Cinematic Hero Section */}
      <header className="relative flex flex-col justify-center items-center text-center px-6 min-h-[70vh] max-w-4xl mx-auto z-10">
        <h1 
          className="text-6xl md:text-8xl tracking-tight leading-none mb-6 animate-fade-rise text-white font-normal"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          AI-Scientist Playbook
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-rise-delay leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex flex-row gap-4 animate-fade-rise-delay-2">
          <a
            href="#ecosystem"
            className="liquid-glass px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03] text-foreground"
          >
            Explore Agent Ecosystem
          </a>
          <a
            href="#playbook"
            className="bg-white text-[#001f3f] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
          >
            Read Playbook
          </a>
        </div>
      </header>

      {/* Language Toggle & Intro */}
      <section id="playbook" className="max-w-7xl mx-auto px-6 py-12 border-t border-border/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h2 className="text-4xl tracking-tight text-white mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {t.title}
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              {t.intro}
            </p>
          </div>
          
          {/* Language selection pill */}
          <div className="flex flex-wrap gap-1 p-1 bg-white/5 rounded-full border border-border/40 backdrop-blur-sm">
            {(Object.keys(langData) as Array<keyof typeof langData>).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeLang === lang 
                    ? "bg-white text-[#001f3f] shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Multi-lingual Core Playbook Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Column 1: Principles */}
          <div className="p-8 rounded-3xl border border-border/40 bg-white/[0.02] backdrop-blur-lg flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center border border-border/50 mb-6">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {t.principlesTitle}
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Not a Search Engine</strong>: Workbenches execute complex local code and verify data structures, not just simple chat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Break Down Lifecycle</strong>: Split target workflows: Survey → Code Design → local Run → Figures → LaTeX manuscript → Integrity Audit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Intermediate Verification</strong>: Always output structured formats (`results.json`, `.bib`, `.csv`) at each step.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-border/40 mt-6 flex justify-between items-center text-xs text-muted-foreground">
              <span>Scientific Workflow Compliance</span>
              <span className="text-white font-mono">v1.2.0</span>
            </div>
          </div>

          {/* Column 2: Prompt Hub */}
          <div className="lg:col-span-2 p-8 rounded-3xl border border-border/40 bg-white/[0.02] backdrop-blur-lg">
            <h3 className="text-2xl text-white mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {t.promptsTitle}
            </h3>
            
            <div className="space-y-6">
              {t.promptList.map((prompt, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-border/40 bg-white/[0.01]">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-white">{prompt.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{prompt.desc}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(prompt.code, `prompt-${idx}`)}
                      className="p-2 rounded-lg border border-border/50 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                      title={t.copyBtn}
                    >
                      {copiedText === `prompt-${idx}` ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                  <pre className="text-xs font-mono bg-black/30 p-4 rounded-xl border border-border/30 text-muted-foreground overflow-x-auto leading-relaxed max-h-48 whitespace-pre-wrap">
                    {prompt.code}
                  </pre>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Ecosystem Interactive Table Dashboard */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h2 className="text-5xl text-white mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Landscape of Deployable Agents
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Filter and search through the 22 leading scientific frameworks and LLM-driven research coordinators ready for lab deployment.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white/5 border border-border/50 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-muted-foreground focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto rounded-3xl border border-border/40 bg-white/[0.01] backdrop-blur-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold tracking-wider text-muted-foreground uppercase bg-white/[0.02]">
                <th className="py-5 px-6">Agent Name</th>
                <th className="py-5 px-6">Developer</th>
                <th className="py-5 px-6">Release</th>
                <th className="py-5 px-6">Core Positioning</th>
                <th className="py-5 px-6">Deployment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20 text-sm">
              {filteredAgents.length > 0 ? (
                filteredAgents.map((agent, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-white">
                      <a 
                        href={agent.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 hover:underline decoration-white/30"
                      >
                        {agent.name}
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      </a>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{agent.developer}</td>
                    <td className="py-4 px-6 text-muted-foreground font-mono">{agent.release}</td>
                    <td className="py-4 px-6 text-white/90">{agent.positioning}</td>
                    <td className="py-4 px-6 text-muted-foreground">{agent.deployment}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-muted-foreground">
                    <AlertCircle className="h-8 w-8 mx-auto mb-3 opacity-50" />
                    No agents matched your search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Downloads / Templates Center */}
      <section id="templates" className="max-w-7xl mx-auto px-6 py-12 border-t border-border/30">
        <h2 className="text-4xl text-white mb-10 text-center" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Downloads & Templates Center
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Template 1: literature_matrix_template.csv */}
          <div className="p-6 rounded-3xl border border-border/40 bg-white/[0.01] flex flex-col justify-between h-[340px]">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-border/50 mb-6">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Literature Survey Matrix</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structured CSV template to catalog papers, dataset descriptions, methods, key performance metrics, and DOIs.
              </p>
            </div>
            
            <div className="flex gap-3">
              <a
                href="templates/literature_matrix_template.csv"
                download
                className="flex-1 text-center py-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" /> Download CSV
              </a>
              <button
                onClick={() => handleCopy("Paper Name,Year,Core Task,Datasets,Methodology,Performance Metrics,Findings,Limitations,DOI/PMID/arXiv ID", "csv")}
                className="p-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white"
              >
                {copiedText === "csv" ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Template 2: experiment_plan_template.md */}
          <div className="p-6 rounded-3xl border border-border/40 bg-white/[0.01] flex flex-col justify-between h-[340px]">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-border/50 mb-6">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Experiment Plan Template</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Standardized markdown schema to design hypotheses, track models, log execution runs, and document data audits.
              </p>
            </div>
            
            <div className="flex gap-3">
              <a
                href="templates/experiment_plan_template.md"
                download
                className="flex-1 text-center py-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" /> Download MD
              </a>
              <button
                onClick={() => handleCopy("# Scientific Experiment Plan\n- Hypothesis:\n- Datasets:\n- Models:\n- Run Logs:", "plan")}
                className="p-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white"
              >
                {copiedText === "plan" ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Template 3: mcp_config_example.json */}
          <div className="p-6 rounded-3xl border border-border/40 bg-white/[0.01] flex flex-col justify-between h-[340px]">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-border/50 mb-6">
                <Terminal className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">MCP Config Example</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                JSON configuration file enabling quick local setup for PubMed, SQLite, local filesystems, and GitHub.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => handleCopy(mcpConfigExample, "mcp")}
                className="flex-1 py-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 text-white"
              >
                {copiedText === "mcp" ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-400" /> Copied config!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy JSON Config
                  </>
                )}
              </button>
              <a
                href="examples/mcp_config_example.json"
                download
                className="p-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white"
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Understated Cinematic Footer */}
      <footer id="footer" className="max-w-7xl mx-auto px-8 pt-24 pb-12 border-t border-border/20 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
        <div>
          <span className="text-white mr-1.5 font-semibold">Velorah®</span> 
          <span>© 2026 Benjamin J. Hou. All rights reserved.</span>
        </div>
        
        <div className="flex gap-6">
          <a href="CONTRIBUTING.md" className="hover:text-white transition-colors">Contributing Guidelines</a>
          <a href="LICENSE" className="hover:text-white transition-colors">MIT License</a>
          <a href="https://github.com/Benjamin-JHou/openscience-playbook" className="hover:text-white transition-colors inline-flex items-center gap-1">
            GitHub Repository <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </footer>

    </div>
  );
}
