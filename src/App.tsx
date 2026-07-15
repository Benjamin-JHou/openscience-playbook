import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  FileText, 
  Download, 
  BookOpen, 
  AlertCircle,
  LayoutGrid,
  List,
  Sparkles,
  Cpu,
  Database,
  ShieldCheck,
  Dna,
  Beaker,
  TrendingUp,
  Stethoscope,
  Map,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';

interface Agent {
  name: string;
  url: string;
  developer: string;
  release: string;
  positioning: string;
  deployment: string;
  category: "Biology" | "Chemistry" | "Materials" | "General" | "Framework";
}

const agents: Agent[] = [
  { name: "Claude Science", url: "https://www.anthropic.com/claude", developer: "Anthropic", release: "2026.6", positioning: "General Scientific AI Workspace", deployment: "Local + Cloud", category: "General" },
  { name: "Omic (Omic AI)", url: "https://omic.ai/", developer: "Omic AI", release: "2025", positioning: "Biological Superintelligence / Drug Discovery", deployment: "SaaS + Private On-Premises", category: "Biology" },
  { name: "Biomni", url: "https://biomni.stanford.edu", developer: "Stanford (Chinese team)", release: "2026.7", positioning: "General Biomedical Agent", deployment: "Claude Platform, Enterprise", category: "Biology" },
  { name: "ScienceOS", url: "https://scienceos.ai/", developer: "Independent", release: "2025.8", positioning: "Literature Review & Research Agent", deployment: "SaaS (Cloud)", category: "General" },
  { name: "The AI Scientist", url: "https://github.com/SakanaAI/AI-Scientist", developer: "Sakana AI (Japan)", release: "2024.8", positioning: "Automated End-to-End Scientific Discovery", deployment: "Open-source, Python (GitHub)", category: "Framework" },
  { name: "Co-Scientist", url: "https://deepmind.google/discover/blog/introducing-co-scientist-using-ai-agents-for-scientific-hypothesis-generation/", developer: "Google DeepMind", release: "2026.5", positioning: "Multi-agent Hypothesis Generation", deployment: "Gemini for Science (By request)", category: "General" },
  { name: "EvoScientist", url: "https://github.com/EvoScientist/EvoScientist", developer: "Independent", release: "2026.3", positioning: "Self-evolving Multi-agent Research Framework", deployment: "Open-source, PyPI", category: "Framework" },
  { name: "Agent Laboratory", url: "https://github.com/SamuelSchmidgall/AgentLaboratory", developer: "AMD + Johns Hopkins", release: "2025.1", positioning: "Full-workflow Autonomous Research", deployment: "Open-source (Supports CPU/GPU)", category: "Framework" },
  { name: "BioNeMo Agent Toolkit", url: "https://github.com/NVIDIA-BioNeMo/bionemo-agent-toolkit", developer: "NVIDIA", release: "2026.6", positioning: "Life Sciences Agent Orchestration", deployment: "NVIDIA NIM (Local or Cloud)", category: "Biology" },
  { name: "LUMI-lab", url: "https://pharmacy.utoronto.ca/bowen-li", developer: "University of Toronto", release: "2025.2", positioning: "AI-driven Physical Lab (mRNA)", deployment: "Physical Laboratory Integration", category: "Biology" },
  { name: "Autoscience", url: "https://www.autoscience.ai/", developer: "Autoscience", release: "2026.3", positioning: "Autonomous AI Research Laboratory", deployment: "Managed Service for Enterprise", category: "General" },
  { name: "OmicOS Science", url: "https://github.com/omicverse", developer: "Local Team", release: "2026.7", positioning: "Genomics Analysis & AI Workbench", deployment: "App Store (Local + Cloud)", category: "Biology" },
  { name: "SciMaster", url: "https://scimaster.bohrium.com/", developer: "DeepVerse + SJTU", release: "2025.7", positioning: "General Scientific Agent", deployment: "Bohr Platform (SaaS + Private)", category: "General" },
  { name: "MolClaw", url: "https://github.com/InternScience/MolClaw", developer: "Shanghai AI Lab + PKU", release: "2026.5", positioning: "Drug Screening Agent", deployment: "Collaborative Academic Deploy", category: "Chemistry" },
  { name: "Yayi AI-Scientist", url: "https://yayi.wenge.com", developer: "Wenge + CAS", release: "2025.7", positioning: "Literature Research Assistant", deployment: "SaaS Platform", category: "General" },
  { name: "MoleculeOS (MOS)", url: "https://mos.moleculemind.com/login", developer: "MoleculeMind", release: "2026.7", positioning: "AI Biopharma Research Operating System", deployment: "Enterprise Platform", category: "Biology" },
  { name: "MindSpore Science Agent", url: "https://github.com/mindspore-ai/mindscience", developer: "Huawei", release: "2026.4", positioning: "Scientific Machine Learning Agent", deployment: "Open-source, MindSpore", category: "Framework" },
  { name: "ElementsClaw", url: "https://arxiv.org/abs/2604.23758", developer: "Alibaba DAMO + UCAS", release: "2026.7", positioning: "Superconducting Material Discovery", deployment: "Open Database / Predictive Agent", category: "Materials" },
  { name: "Pangshi Agent Factory", url: "https://scienceone.cn/", developer: "CAS", release: "2025.11", positioning: "Research Agent Generation Platform", deployment: "CAS Pangshi Platform", category: "Framework" },
  { name: "\"Dasheng\" Sci-Agent", url: "https://www.sais.com.cn/", developer: "SAIS + Fudan Univ", release: "2026.3", positioning: "System-level High-initiative Scientific Agent", deployment: "Xinghe Qizhi Platform", category: "General" },
  { name: "BioMedAgent", url: "https://github.com/BOBQWERA/BioMedAgent", developer: "Academic Group", release: "2026.4", positioning: "Biomedical Data Analysis Agent", deployment: "Academic Paper Replication", category: "Biology" },
  { name: "OmicsClaw", url: "https://github.com/TianGzlab/OmicsClaw", developer: "Tsinghua AI4Life Lab", release: "2026.3", positioning: "Multi-omics AI Agent", deployment: "Docker-based (OpenClaw)", category: "Biology" },
];

const langData = {
  en: {
    subtitle: "The definitive guide to deploying autonomous AI agents, multi-agent frameworks, and local-first scientific workbenches.",
    intro: "Welcome to the AI-Scientist Playbook. Select your language to view customized structured prompts, setup parameters, and vertical skill libraries.",
    comparison: "Client Comparison",
    viewFiles: "Workspace Templates",
    promptsTitle: "Scientific Agent Execution Console",
    principlesTitle: "Core Operating Principles",
    prerequisites: "Prerequisites",
    pipelines: "Standard Research Pipeline",
    searchPlaceholder: "Filter by name, developer, or positioning...",
    copyBtn: "Copy",
    copiedBtn: "Copied!",
    steps: [
      {
        id: "step1",
        label: "01. Literature Survey",
        heading: "Systematic Literature Review Prompt",
        desc: "Perform a comprehensive search and build a literature matrix matching criteria.",
        skills: "literature-survey, semantic-search, crossref-lookup",
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
        id: "step2",
        label: "02. CSV Data Run",
        heading: "Data Analysis & Visualization Prompt",
        desc: "Analyze dataset variables, compile statistics, and output high-quality plots.",
        skills: "data-analysis, plotly-render, pandas-cleanup",
        code: `Analyze the CSV files containing RNA-seq counts and clinical labels in the workspace.
Guidelines:
1. Normalize counts using standard TPM/FPKM algorithms.
2. Clean data and handle missing variables using robust statistical imputation.
3. Run a Differential Gene Expression (DGE) analysis using DESeq2.
4. Generate publication-quality figures: Volcano plot and Heatmap of top 50 genes.
5. Save figures into figures/ directory and compile analysis metrics to results/summary.md.`
      },
      {
        id: "step3",
        label: "03. Experiment Repro",
        heading: "Experiment Reproduction Pipeline",
        desc: "Strictly reproduce an open-source model or methodology from git.",
        skills: "experiment-repro, docker-sandbox, dependency-patcher",
        code: `Clone the repository at https://github.com/example/reproducible-paper.git.
Execute the validation pipeline to reproduce Figure 4 (Accuracy comparison).
Guidelines:
1. Initialize the run inside a clean Docker/Conda environment.
2. Read the README.md and INSTALL.md files before running any scripts.
3. If dependencies fail, identify the correct versions and write a patch script.
4. Do not modify the core model architecture.
5. Log the commands, errors, and fixes in runs/reproduction_log.md.
6. Produce a table comparing your results with the published figures.`
      },
      {
        id: "step4",
        label: "04. Paper Writing",
        heading: "LaTeX Manuscript Drafting Prompt",
        desc: "Synthesize findings and compile formatted LaTeX source files.",
        skills: "manuscript-writer, latex-compiler, bibliography-sync",
        code: `Synthesize the results from results/summary.md into a formal LaTeX manuscript.
Guidelines:
1. Structured sections: Abstract, Introduction, Methodology, Results, and Discussion.
2. Populate the tables with verified numbers from results/data.csv.
3. Reference the volcano plot saved in figures/volcano.png using proper LaTeX figure floats.
4. Auto-generate the bibliography from the literature matrix saved in literature_matrix.csv.
5. Ensure all file paths and citation tags are valid.`
      },
      {
        id: "step5",
        label: "05. Integrity Audit",
        heading: "Scientific Integrity Audit Prompt",
        desc: "Scan files for data inflation, citation validity, and fact-checking.",
        skills: "integrity-auditor, doi-resolver, peer-review-check",
        code: `Audit the scientific integrity of the manuscript at paper.pdf.
Checklist:
1. Verify that all citations are real and correctly resolve via DOI/PMID.
2. Cross-reference numbers in text against results/summary.md to ensure no data inflation.
3. Flag any instances where simulated results are presented as measured laboratory results.
4. Output the results in audit_report.md, categorized by severity (Major, Minor, Informational).`
      }
    ]
  },
  zh: {
    subtitle: "可部署科研智能体平台、多智能体协同框架以及本地优先科学工作台部署的权威指南。",
    intro: "欢迎阅读 AI-Scientist Playbook。选择您的语言以查看定制的结构化提示词、部署参数和垂直技能库。",
    comparison: "科研客户端对比",
    viewFiles: "科研工作区模板",
    promptsTitle: "科研智能体执行控制台",
    principlesTitle: "核心使用原则",
    prerequisites: "科研软件栈准备",
    pipelines: "标准科研流水线",
    searchPlaceholder: "根据智能体名称、开发方或定位筛选...",
    copyBtn: "复制",
    copiedBtn: "已复制!",
    steps: [
      {
        id: "step1",
        label: "01. 文献检索与综述",
        heading: "系统性文献综述提示词",
        desc: "在多个权威数据库中检索指定文献，提取指标并自动输出文献矩阵。",
        skills: "literature-survey, semantic-search, crossref-lookup",
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
        id: "step2",
        label: "02. CSV 数据分析",
        heading: "数据分析与出版级制图提示词",
        desc: "清洗工作区内的 CSV 数据，运行统计分析，并导出高质量图表。",
        skills: "data-analysis, plotly-render, pandas-cleanup",
        code: `分析当前工作区中包含 RNA-seq 表达量及临床标签的 CSV 数据。
规范：
1. 使用标准的 TPM/FPKM 算法对表达量数据进行归一化。
2. 进行数据清洗，并使用鲁棒性统计插补方法处理缺失变量。
3. 使用 DESeq2 运行差异表达基因 (DGE) 分析。
4. 生成出版级图表：火山图以及排名前 50 差异基因的热图。
5. 将图表保存至 figures/ 目录，分析指标整理写入 results/summary.md。`
      },
      {
        id: "step3",
        label: "03. 实验结果复现",
        heading: "自动化实验复现提示词",
        desc: "克隆 GitHub 仓库，在沙箱中自动编译依赖并复现图表数据。",
        skills: "experiment-repro, docker-sandbox, dependency-patcher",
        code: `克隆以下仓库：https://github.com/example/reproducible-paper.git。
运行验证流水线以复现论文中的图表 Figure 4（准确率对比图）。
规范：
1. 在干净的 Docker 或 Conda 环境中初始化运行。
2. 运行任何脚本前先完整阅读 README.md 和 INSTALL.md。
3. 若依赖安装失败，自主排查并自动编写依赖修补脚本。
4. 严禁修改核心模型架构。
5. 将所有执行命令、错误及修复方案记录在 runs/reproduction_log.md 中。
6. 生成一个对比表格，将你的复现结果与原论文发表指标进行对照。`
      },
      {
        id: "step4",
        label: "04. 论文撰写排版",
        heading: "LaTeX 论文草稿撰写提示词",
        desc: "依据实验结果，自动撰写 LaTeX 原稿，并编排格式与交叉引用。",
        skills: "manuscript-writer, latex-compiler, bibliography-sync",
        code: `将 results/summary.md 中的复现结果整理为正式的 LaTeX 论文草稿。
要求：
1. 包含以下结构化部分：Abstract, Introduction, Methodology, Results, Discussion。
2. 使用 results/data.csv 中的验证数据填充表格。
3. 使用 LaTeX 的 figure 浮动格式引入 figures/volcano.png 火山图。
4. 基于 literature_matrix.csv 文献矩阵自动生成 BibTeX 参考文献列表。
5. 确保所有的文件路径和引用标签在编译时均有效。`
      },
      {
        id: "step5",
        label: "05. 科学规范审计",
        heading: "科学规范与数据真实性审计提示词",
        desc: "核验所有引用的真实性，对照原始数据审计是否存在伪造或虚夸。",
        skills: "integrity-auditor, doi-resolver, peer-review-check",
        code: `对 paper.pdf 中的论文草稿执行科学规范与真实性审计。
审计核对表：
1. 验证所有参考文献是否真实存在，并且能够通过 DOI/PMID 正确解析。
2. 交叉核对正文中的所有统计学指标与 results/summary.md 是否一致，确保无数据夸大。
3. 严格标记出所有可能将“模拟仿真结果”误导性表述为“实验室物理测量结果”的文本。
4. 将审计结果输出到 audit_report.md 中，按严重程度（Major, Minor, Informational）进行分类。`
      }
    ]
  },
  fr: {
    subtitle: "Le guide faisant autorité pour déployer des agents IA scientifiques autonomes, des frameworks multi-agents et des workbenches locaux.",
    intro: "Bienvenue dans le AI-Scientist Playbook. Sélectionnez votre langue pour afficher les invites structurées personnalisées, les paramètres de configuration et les compétences.",
    comparison: "Comparaison des Clients",
    viewFiles: "Modèles",
    promptsTitle: "Console d'Exécution des Agents Scientifiques",
    principlesTitle: "Principes Opérationnels Clés",
    prerequisites: "Prérequis",
    pipelines: "Processus de Recherche Standard",
    searchPlaceholder: "Filtrer par nom, développeur...",
    copyBtn: "Copier",
    copiedBtn: "Copié !",
    steps: [
      {
        id: "step1",
        label: "01. Revue de Littérature",
        heading: "Invite pour Revue de Littérature Systématique",
        desc: "Rechercher et organiser la littérature dans une matrice structurée.",
        skills: "literature-survey, semantic-search, crossref-lookup",
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
        id: "step2",
        label: "02. Analyse de Données",
        heading: "Invite d'Analyse et de Visualisation de Données",
        desc: "Nettoyer les données CSV, exécuter des analyses statistiques et générer des graphiques.",
        skills: "data-analysis, plotly-render, pandas-cleanup",
        code: `Analysez les fichiers CSV contenant les comptages RNA-seq et les étiquettes cliniques dans l'espace de travail.
Directives:
1. Normalisez les comptages à l'aide des algorithmes standard TPM/FPKM.
2. Nettoyez les données et gérez les variables manquantes à l'aide d'imputations statistiques robustes.
3. Exécutez une analyse d'expression différentielle des gènes (DGE) en utilisant DESeq2.
4. Générez des graphiques de qualité publication : Volcano plot et Heatmap des 50 premiers gènes.
5. Enregistrez les graphiques dans le dossier figures/ et compilez les métriques dans results/summary.md.`
      }
    ]
  },
  ja: {
    subtitle: "自律型科学用AIエージェント、マルチエージェント協調フレームワーク、およびローカルファーストの環境構築ガイド。",
    intro: "AI-Scientist プレイブックへようこそ。言語を選択して、構造化されたプロンプトや MCP 設定ファイルの例を確認してください。",
    comparison: "クライアント比較",
    viewFiles: "ワークスペーステンプレート",
    promptsTitle: "科学エージェント実行コンソール",
    principlesTitle: "中心的な運用原則",
    prerequisites: "推奨ソフトウェア環境",
    pipelines: "標準的な科学研究プロセス",
    searchPlaceholder: "エージェント名、開発元などでフィルタリング...",
    copyBtn: "コピー",
    copiedBtn: "コピー完了!",
    steps: [
      {
        id: "step1",
        label: "01. 文献調査とまとめ",
        heading: "系統的文献調査プロンプト",
        desc: "系統的な検索を行い、抽出された指標に沿って文献マトリクスを作成します。",
        skills: "literature-survey, semantic-search, crossref-lookup",
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
        id: "step2",
        label: "02. CSV データ処理",
        heading: "データ分析・作図プロンプト",
        desc: "CSVファイルを読み込み、TPM/FPKM標準化を行い、火山図や熱図を出力します。",
        skills: "data-analysis, plotly-render, pandas-cleanup",
        code: `分析当前工作区中包含 RNA-seq 表达量及临床标签的 CSV 数据。
規範：
1. TPM/FPKMの標準的アルゴリズムを用いてカウントデータを正規化する。
2. データクレンジングを行い、統計的手法で欠損値を補完する。
3. DESeq2を用いて遺伝子発現変動解析（DGE）を実行する。
4. 出版レベルの図表（上位50の変動遺伝子の火山図および熱図）を生成する。
5. 生成された図表を figures/ フォルダに保存し、結果のまとめを results/summary.md に記述する。`
      }
    ]
  },
  ko: {
    subtitle: "자율형 AI 과학 연구 에이전트, 멀티 에이전트 협업 프롬프트 및 로컬 기반 연구대 구축 안내서.",
    intro: "AI-Scientist 플레이북에 오신 것을 환영합니다. 언어를 선택하여 논문 작성용 프롬프트 및 복사 가능한 템플릿 목록을 확인하십시오.",
    comparison: "클라이언트 비교",
    viewFiles: "작업 공간 템플릿",
    promptsTitle: "과학 에이전트 실행 콘솔",
    principlesTitle: "핵심 운영 원칙",
    prerequisites: "도구 설치 요구사항",
    pipelines: "표준 연구 프로세스",
    searchPlaceholder: "에이전트명, 개발사 등으로 필터링...",
    copyBtn: "복사",
    copiedBtn: "복사됨!",
    steps: [
      {
        id: "step1",
        label: "01. 문헌 조사 & 요약",
        heading: "체계적 문헌 조사 프롬프트",
        desc: "주제어에 부합하는 학술자료를 검색해 인용 태그를 포함한 정리 표를 추출합니다.",
        skills: "literature-survey, semantic-search, crossref-lookup",
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
        id: "step2",
        label: "02. CSV 데이터 분석",
        heading: "데이터 통계 분석 및 시각화 프롬프트",
        desc: "CSV 데이터를 정규화한 뒤, Volcano Plot 및 Heatmap을 figures/ 디렉토리에 저장합니다.",
        skills: "data-analysis, plotly-render, pandas-cleanup",
        code: `현재 작업 영역 내에 있는 RNA-seq 발현량 및 임상 표지가 담긴 CSV 데이터를 분석하십시오.
지침:
1. TPM/FPKM 알고리즘을 사용해 데이터를 정규화합니다.
2. 결측치를 통계적으로 처리하고 이상치를 제거하는 클렌징을 적용합니다.
3. DESeq2 패키지를 통해 유의미하게 발현이 변한 유전자(DGE) 분석을 수행합니다.
4. Volcano Plot과 Top 50 변동 유전자의 Heatmap을 고해상도로 작도합니다.
5. 생성된 그림 파일은 figures/ 폴더에 저장하고 요약본은 results/summary.md에 기록하십시오.`
      }
    ]
  },
  es: {
    subtitle: "La guía definitiva para desplegar agentes científicos autónomos de IA, frameworks multiagentes y estaciones de trabajo locales.",
    intro: "Bienvenido al AI-Scientist Playbook. Seleccione su idioma para revisar los prompts estructurados y ejemplos de configuración.",
    comparison: "Comparación de Clientes",
    viewFiles: "Plantillas de Trabajo",
    promptsTitle: "Consola de Ejecución del Agente Científico",
    principlesTitle: "Principios Operativos Clave",
    prerequisites: "Prerrequisitos de Software",
    pipelines: "Flujo de Trabajo Estándar de Investigación",
    searchPlaceholder: "Filtrar por nombre, desarrollador...",
    copyBtn: "Copiar",
    copiedBtn: "¡Copiado!",
    steps: [
      {
        id: "step1",
        label: "01. Estudio de Literatura",
        heading: "Prompt de Revisión Sistemática de Literatura",
        desc: "Busca y cataloga literatura clave en una matriz estructurada con DOI.",
        skills: "literature-survey, semantic-search, crossref-lookup",
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
        id: "step2",
        label: "02. Procesamiento de CSV",
        heading: "Prompt de Análisis y Graficación de Datos CSV",
        desc: "Analiza variables de un archivo CSV y genera gráficos usando plotly.",
        skills: "data-analysis, plotly-render, pandas-cleanup",
        code: `Analice los archivos CSV que contienen recuentos de RNA-seq y etiquetas clínicas en el espacio de trabajo.
Directrices:
1. Normalice los recuentos usando algoritmos estándar TPM/FPKM.
2. Limpie los datos e impute variables faltantes con métodos de estadísticas robustas.
3. Ejecute un análisis de expresión génica diferencial (DGE) usando DESeq2.
4. Genere gráficos de calidad para publicación: Volcano plot y Heatmap de los 50 genes principales.
5. Guarde las figuras en figures/ y guarde el resumen en results/summary.md.`
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

const mcpServersList = [
  {
    id: "pubmed",
    name: "PubMed Central MCP",
    desc: "Enables natural language literature searches and full-text PMC retrievals.",
    code: `"pubmed-central": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-pubmed"],
  "env": {
    "NCBI_API_KEY": "YOUR_NCBI_API_KEY_HERE"
  }
}`
  },
  {
    id: "materials",
    name: "Materials Project MCP",
    desc: "Provides access to crystal structures and thermodynamic material parameters.",
    code: `"materials-project": {
  "command": "python3",
  "args": ["-m", "mcp_materials_project"],
  "env": {
    "MP_API_KEY": "YOUR_MATERIALS_PROJECT_API_KEY_HERE"
  }
}`
  },
  {
    id: "fs",
    name: "Local Filesystem MCP",
    desc: "Safely reads and writes project files within a configured directory sandbox.",
    code: `"local-filesystem": {
  "command": "npx",
  "args": [
    "-y", 
    "@modelcontextprotocol/server-filesystem", 
    "/Users/yangzi/Desktop/openscience-playbook/workspace"
  ]
}`
  }
];

// Reusable Scroll Reveal Wrapper
function RevealOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.05 });
    
    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Interactive Magnetic Visual Showcase Card Component
function MagneticCard() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate distance from cursor to center of card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    
    // Threshold check (padding 150px)
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 150) {
      setIsHovered(true);
      // Magnetic strength: 3 (cursor coordinate offset divided by 3)
      setPosition({ x: dx / 3, y: dy / 3 });
    } else {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  // Active transition: transform 0.3s ease-out
  // Inactive transition: transform 0.6s ease-in
  const transitionStyle = isHovered 
    ? "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" 
    : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div 
      className="relative flex justify-center items-center w-full min-h-[220px] sm:min-h-[280px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 animate-fade-portrait pointer-events-auto"
        style={{ 
          transform: `translate3d(calc(-50% + ${position.x}px), ${position.y}px, 0)`,
          transition: transitionStyle
        }}
      >
        {/* Showcase element with linear gradient borders and glows */}
        <div className="gradient-border-glow p-[1.5px] rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-[#000e1b] rounded-2xl p-6 md:p-8 flex flex-col justify-between h-44 sm:h-52 backdrop-blur-md">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-accent uppercase bg-cyan-accent/10 px-2 py-0.5 rounded border border-cyan-accent/20">
                  Active Session
                </span>
                <h3 className="text-lg md:text-xl font-normal text-white mt-3 font-display">
                  PubMed Core-Agent Engine
                </h3>
              </div>
              <div className="h-2 w-2 rounded-full bg-cyan-accent animate-ping"></div>
            </div>
            
            <div className="flex items-center gap-4 text-[10px] sm:text-xs font-mono text-muted-foreground border-t border-white/5 pt-4">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent"></span>
                <span>Literature: Syncing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-accent"></span>
                <span>DGE Runs: 92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeLang, setActiveLang] = useState<keyof typeof langData>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [activeStepId, setActiveStepId] = useState("step1");
  const [activeMcpId, setActiveMcpId] = useState("pubmed");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");
  
  // Navigation states
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Newsletter mockup
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const t = langData[activeLang];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const currentStep = t.steps.find(s => s.id === activeStepId) || t.steps[0];
  const currentMcp = mcpServersList.find(m => m.id === activeMcpId) || mcpServersList[0];

  const categories = ["All", "Biology", "Chemistry", "Materials", "General", "Framework"];

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.positioning.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategoryFilter === "All" || agent.category === activeCategoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Track scroll position to handle Sticky Navigation, Scroll Spy, and FAB
  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky Nav state
      setIsScrolled(window.scrollY > 50);

      // 2. Scroll Spy dynamic highlights
      const sections = ['home', 'playbook', 'workbench', 'ecosystem', 'mcp', 'templates'];
      let currentActive = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-accent/25 selection:text-white pb-24 overflow-x-hidden font-body">
      
      {/* 6. Scroll-to-Top Floating Action Button */}
      <button
        onClick={() => scrollToSection('home')}
        className={`scroll-to-top liquid-glass p-3 rounded-full hover:scale-110 active:scale-95 transition-all text-white border border-white/10 hover:border-cyan-accent/50 group ${isScrolled ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5 text-cyan-accent group-hover:text-white transition-colors" />
      </button>

      {/* 3. Sticky Navigation with Scroll-Blur & Mobile Hamburger */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'nav-scrolled py-3.5' : 'py-6'}`}>
        <div className="flex flex-row justify-between items-center px-8 max-w-7xl mx-auto">
          {/* Project Branding Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl tracking-tight text-white select-none font-semibold cursor-pointer font-display"
          >
            Scientist.AI<sup className="text-xs font-sans ml-0.5 opacity-50">®</sup>
          </div>
          
          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`text-sm font-medium transition-colors hover:text-foreground relative py-1 cursor-pointer ${activeSection === 'home' ? 'text-white' : 'text-muted-foreground'}`}
            >
              Home
              {activeSection === 'home' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-accent rounded-full animate-pulse"></span>}
            </button>
            <button 
              onClick={() => scrollToSection('playbook')} 
              className={`text-sm font-medium transition-colors hover:text-foreground relative py-1 cursor-pointer ${activeSection === 'playbook' ? 'text-white' : 'text-muted-foreground'}`}
            >
              Playbook
              {activeSection === 'playbook' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-accent rounded-full animate-pulse"></span>}
            </button>
            <button 
              onClick={() => scrollToSection('workbench')} 
              className={`text-sm font-medium transition-colors hover:text-foreground relative py-1 cursor-pointer ${activeSection === 'workbench' ? 'text-white' : 'text-muted-foreground'}`}
            >
              Console
              {activeSection === 'workbench' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-accent rounded-full animate-pulse"></span>}
            </button>
            <button 
              onClick={() => scrollToSection('ecosystem')} 
              className={`text-sm font-medium transition-colors hover:text-foreground relative py-1 cursor-pointer ${activeSection === 'ecosystem' ? 'text-white' : 'text-muted-foreground'}`}
            >
              Ecosystem
              {activeSection === 'ecosystem' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-accent rounded-full animate-pulse"></span>}
            </button>
            <button 
              onClick={() => scrollToSection('mcp')} 
              className={`text-sm font-medium transition-colors hover:text-foreground relative py-1 cursor-pointer ${activeSection === 'mcp' ? 'text-white' : 'text-muted-foreground'}`}
            >
              MCP Config
              {activeSection === 'mcp' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-accent rounded-full animate-pulse"></span>}
            </button>
            <button 
              onClick={() => scrollToSection('templates')} 
              className={`text-sm font-medium transition-colors hover:text-foreground relative py-1 cursor-pointer ${activeSection === 'templates' ? 'text-white' : 'text-muted-foreground'}`}
            >
              Templates
              {activeSection === 'templates' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-accent rounded-full animate-pulse"></span>}
            </button>
          </div>

          {/* Contact CTA Button (Desktop) */}
          <button 
            onClick={() => scrollToSection('workbench')}
            className="hidden md:block liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
          >
            Begin AI for science Journey
          </button>

          {/* Hamburger toggle button (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Slide-down Mobile Navigation Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''} flex flex-col justify-center items-center gap-6 px-6`}>
        <button 
          onClick={() => scrollToSection('home')} 
          className={`text-xl font-medium transition-colors py-2 cursor-pointer ${activeSection === 'home' ? 'text-cyan-accent' : 'text-muted-foreground'}`}
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('playbook')} 
          className={`text-xl font-medium transition-colors py-2 cursor-pointer ${activeSection === 'playbook' ? 'text-cyan-accent' : 'text-muted-foreground'}`}
        >
          Playbook
        </button>
        <button 
          onClick={() => scrollToSection('workbench')} 
          className={`text-xl font-medium transition-colors py-2 cursor-pointer ${activeSection === 'workbench' ? 'text-cyan-accent' : 'text-muted-foreground'}`}
        >
          Console
        </button>
        <button 
          onClick={() => scrollToSection('ecosystem')} 
          className={`text-xl font-medium transition-colors py-2 cursor-pointer ${activeSection === 'ecosystem' ? 'text-cyan-accent' : 'text-muted-foreground'}`}
        >
          Ecosystem
        </button>
        <button 
          onClick={() => scrollToSection('mcp')} 
          className={`text-xl font-medium transition-colors py-2 cursor-pointer ${activeSection === 'mcp' ? 'text-cyan-accent' : 'text-muted-foreground'}`}
        >
          MCP Config
        </button>
        <button 
          onClick={() => scrollToSection('templates')} 
          className={`text-xl font-medium transition-colors py-2 cursor-pointer ${activeSection === 'templates' ? 'text-cyan-accent' : 'text-muted-foreground'}`}
        >
          Templates
        </button>

        <button 
          onClick={() => scrollToSection('workbench')}
          className="liquid-glass rounded-full px-8 py-3 text-base font-semibold text-foreground transition-all duration-300 transform hover:scale-[1.03] mt-8 cursor-pointer"
        >
          Begin AI for science Journey
        </button>
      </div>

      {/* Cinematic Hero Section */}
      <header id="home" className="relative flex flex-col justify-center items-center text-center px-6 min-h-[95vh] max-w-7xl mx-auto z-10 pt-28">
        
        {/* 2. Hero Ambient Glow Layer */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] rounded-full bg-cyan-accent/5 filter blur-[100px] ambient-glow-cyan"></div>
          <div className="absolute top-[25%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-accent/4 filter blur-[120px] ambient-glow-purple"></div>
        </div>

        {/* Pulse Capsule Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/95 tracking-widest uppercase font-mono mb-8 animate-fade-nav">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent animate-pulse"></span>
          Autonomous Agent Directory & Setup Guide
        </div>

        {/* Title: delay 0.15, y 40 with Linear Gradient text */}
        <h1 
          className="text-6xl md:text-8xl tracking-tight leading-none mb-6 animate-fade-title font-normal bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent hero-neon-text font-display"
        >
          AI-Scientist Playbook
        </h1>
        
        {/* Left Text / Subtitle: delay 0.35, y 20 */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-text leading-relaxed">
          {t.subtitle}
        </p>

        {/* Contact Button / CTA Section: delay 0.5, y 20 */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-btn z-20">
          <button
            onClick={() => scrollToSection('ecosystem')}
            className="liquid-glass px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03] text-foreground border border-white/10 hover:border-cyan-accent/50 cursor-pointer"
          >
            Explore Agent Ecosystem
          </button>
          <button
            onClick={() => scrollToSection('workbench')}
            className="bg-gradient-to-r from-cyan-accent to-purple-accent text-[#000913] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.03] cursor-pointer"
          >
            Open Interactive Console
          </button>
        </div>

        {/* Portrait / Showcase Card (with Magnet setup): delay 0.6, y 30 */}
        <div className="w-full mt-12">
          <MagneticCard />
        </div>
      </header>

      {/* Vertical Domain Specialties */}
      <RevealOnScroll className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex flex-col items-center text-center">
            <Dna className="h-6 w-6 text-cyan-accent mb-3" />
            <h4 className="text-sm font-medium text-white">Genomics</h4>
          </div>
          <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex flex-col items-center text-center">
            <Beaker className="h-6 w-6 text-purple-accent mb-3" />
            <h4 className="text-sm font-medium text-white">Cheminformatics</h4>
          </div>
          <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex flex-col items-center text-center">
            <Stethoscope className="h-6 w-6 text-cyan-accent mb-3" />
            <h4 className="text-sm font-medium text-white">Clinical/Medicine</h4>
          </div>
          <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex flex-col items-center text-center">
            <TrendingUp className="h-6 w-6 text-purple-accent mb-3" />
            <h4 className="text-sm font-medium text-white">Econometrics</h4>
          </div>
          <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex flex-col items-center text-center col-span-2 md:col-span-1">
            <Map className="h-6 w-6 text-cyan-accent mb-3" />
            <h4 className="text-sm font-medium text-white">Geospatial</h4>
          </div>
        </div>
      </RevealOnScroll>

      {/* Language Toggle & Intro */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="section-gradient-divider mb-12"></div>
      </div>
      
      <section id="playbook" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2 py-0.5 rounded uppercase">01</span>
              <h2 className="text-4xl tracking-tight text-white font-display">
                Handbook Reference Playbook
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xl">
              {t.intro}
            </p>
          </div>
          
          {/* Language selector pill */}
          <div className="flex flex-wrap gap-1 p-1 bg-white/5 rounded-full border border-border/40 backdrop-blur-sm">
            {(Object.keys(langData) as Array<keyof typeof langData>).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeLang === lang 
                    ? "bg-white text-[#000913] shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* Interactive Scientific Workbench IDE */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-gradient-divider mb-12"></div>
      </div>

      <section id="workbench" className="max-w-7xl mx-auto px-6 py-8 scroll-mt-24">
        <RevealOnScroll className="mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2 py-0.5 rounded uppercase">02</span>
            <h2 className="text-4xl tracking-tight text-white font-display">
              {t.promptsTitle}
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="w-full rounded-2xl border border-border/40 bg-white/[0.01] backdrop-blur-lg overflow-hidden">
            
            {/* Mock IDE Titlebar */}
            <div className="px-6 py-4 border-b border-border/40 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                <span className="text-xs font-mono text-muted-foreground ml-4">ai_scientist_workspace.config</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-md border border-border/30">
                <Cpu className="h-3 w-3 text-cyan-accent" /> Connected: Local-Sandbox
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[500px]">
              
              {/* Left sidebar: Steps Selector */}
              <div className="border-r border-border/20 p-6 flex flex-col gap-2 bg-black/10">
                <div className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-4 px-3">
                  Research Pipeline
                </div>
                {t.steps.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStepId(s.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                      activeStepId === s.id
                        ? "bg-white/10 text-white border-l-2 border-cyan-accent pl-3.5"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <span>{s.label}</span>
                    {activeStepId === s.id && <Sparkles className="h-3.5 w-3.5 text-cyan-accent" />}
                  </button>
                ))}
              </div>

              {/* Middle & Right: Code Editor Console */}
              <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-black/20">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-medium text-white">{currentStep.heading}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{currentStep.desc}</p>
                    </div>
                    
                    <button
                      onClick={() => handleCopy(currentStep.code, currentStep.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/50 bg-white/5 hover:bg-white/10 transition-colors text-xs text-muted-foreground hover:text-white cursor-pointer"
                    >
                      {copiedText === currentStep.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy Prompt
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-row gap-4 mb-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-cyan-accent bg-cyan-accent/5 px-2.5 py-1 rounded-md border border-cyan-accent/20">
                      Recommended Skills: {currentStep.skills}
                    </div>
                  </div>

                  {/* Console text area with linear gradient accent border */}
                  <div className="relative rounded-2xl border border-border/45 bg-black/40 overflow-hidden">
                    <div className="flex flex-row font-mono text-xs leading-relaxed p-6 overflow-x-auto text-muted-foreground">
                      {/* Line numbers mockup */}
                      <div className="text-white/20 select-none text-right pr-6 border-r border-border/20 flex flex-col">
                        {currentStep.code.split('\n').map((_, index) => (
                          <span key={index}>{index + 1}</span>
                        ))}
                      </div>
                      {/* Prompt code */}
                      <pre className="pl-6 text-white/90 whitespace-pre-wrap flex-1 overflow-x-auto max-h-[300px]">
                        {currentStep.code}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-6 pt-6 border-t border-border/20">
                  <AlertCircle className="h-4 w-4 shrink-0 text-white/50" />
                  <span>Inject the prompt directly into your local open-source client workspace.</span>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Ecosystem Hub */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-gradient-divider mb-12"></div>
      </div>

      <section id="ecosystem" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2 py-0.5 rounded uppercase">03</span>
              <h2 className="text-4xl text-white font-display">
                Agent Ecosystem Directory
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xl">
              Compare deployable scientific agents across biological models, material synthesis pipelines, and general workflows.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* 5. Live Count Badge */}
            <span className="text-xs bg-cyan-accent/10 border border-cyan-accent/20 px-3 py-1.5 rounded-full text-cyan-accent font-mono font-semibold">
              {filteredAgents.length} {filteredAgents.length === 1 ? 'Agent' : 'Agents'}
            </span>

            {/* View layout toggle */}
            <div className="flex p-0.5 bg-white/5 rounded-lg border border-border/40">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "grid" ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white"
                }`}
                title="Card Grid"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "table" ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white"
                }`}
                title="Interactive Table"
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 md:w-72">
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
        </RevealOnScroll>

        {/* Category Filter Chips */}
        <RevealOnScroll className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategoryFilter === cat
                  ? "bg-white text-[#000913]"
                  : "bg-white/5 text-muted-foreground border border-border/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </RevealOnScroll>

        {/* Dynamic Layout: Grid vs. Table */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent, idx) => (
                <RevealOnScroll 
                  key={idx} 
                  delay={idx * 30} // 5. Stagger delay
                  className="p-6 rounded-2xl border border-border/40 bg-white/[0.01] glow-card flex flex-col justify-between min-h-[220px] hover:border-cyan-accent/30"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-widest text-cyan-accent uppercase bg-cyan-accent/5 px-2 py-0.5 rounded border border-cyan-accent/15">
                        {agent.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{agent.release}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-1.5">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {agent.positioning}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border/10">
                    <span className="text-xs text-muted-foreground">{agent.developer}</span>
                    <a 
                      href={agent.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-semibold text-cyan-accent flex items-center gap-1.5 hover:underline"
                    >
                      Deploy <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </RevealOnScroll>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-muted-foreground border border-border/40 rounded-2xl">
                <AlertCircle className="h-8 w-8 mx-auto mb-3 opacity-50" />
                No agents matched your search or category filter.
              </div>
            )}
          </div>
        ) : (
          <RevealOnScroll>
            <div className="w-full overflow-x-auto rounded-2xl border border-border/40 bg-white/[0.01] backdrop-blur-lg">
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
                      <tr key={idx} className="table-row-hover">
                        <td className="py-4 px-6 font-medium text-white">
                          <a 
                            href={agent.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1.5 text-cyan-accent hover:underline decoration-cyan-accent/30"
                          >
                            {agent.name}
                            <ExternalLink className="h-3 w-3 opacity-80" />
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
          </RevealOnScroll>
        )}
      </section>

      {/* Interactive MCP Configurator Panel */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-gradient-divider mb-12"></div>
      </div>

      <section id="mcp" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <RevealOnScroll className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2 py-0.5 rounded uppercase">04</span>
            <h2 className="text-4xl text-white font-display">
              Model Context Protocol Configurator
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Tweak and verify scientific data nodes in your config file. Copy nodes directly into your workspace profiles.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Config selector pane */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {mcpServersList.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMcpId(m.id)}
                  className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                    activeMcpId === m.id
                      ? "border-cyan-accent bg-cyan-accent/5 text-white"
                      : "border-border/30 hover:border-white/20 hover:bg-white/[0.01] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div>
                    <h4 className="text-sm font-semibold text-white">{m.name}</h4>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono mt-4 text-cyan-accent/60">
                    <Database className="h-3 w-3" /> Connector Node
                  </div>
                </button>
              ))}
            </div>

            {/* Config viewer codeblock: gradient border glow */}
            <div className="lg:col-span-3 rounded-2xl border border-border/40 bg-black/40 p-6 flex flex-col justify-between relative">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-muted-foreground">mcp_config.json</span>
                  <button
                    onClick={() => handleCopy(currentMcp.code, `mcp-${currentMcp.id}`)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border/50 bg-white/5 hover:bg-white/10 transition-colors text-xs text-muted-foreground hover:text-white cursor-pointer"
                  >
                    {copiedText === `mcp-${currentMcp.id}` ? (
                      <>
                        <Check className="h-3 w-3 text-green-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" /> Copy Node
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-xs font-mono text-white/90 overflow-x-auto whitespace-pre leading-relaxed p-4 rounded-xl bg-black/50 border border-border/20">
                  {currentMcp.code}
                </pre>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-6 pt-4 border-t border-border/10">
                <ShieldCheck className="h-4 w-4 text-cyan-accent" />
                <span>Verified sandbox executable parameters.</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Downloads / Templates Center */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-gradient-divider mb-12"></div>
      </div>

      <section id="templates" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <RevealOnScroll className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2 py-0.5 rounded uppercase">05</span>
            <h2 className="text-4xl text-white font-display">
              Downloads & Templates Center
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Template 1: literature_matrix_template.csv */}
          <div className="p-6 rounded-2xl border border-border/40 bg-white/[0.01] glow-card flex flex-col justify-between h-[320px] hover:border-cyan-accent/30">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-border/50 mb-6">
                <FileText className="h-6 w-6 text-cyan-accent" />
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
                className="flex-1 text-center py-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 text-white cursor-pointer"
              >
                <Download className="h-3.5 w-3.5 text-cyan-accent" /> Download CSV
              </a>
              <button
                onClick={() => handleCopy("Paper Name,Year,Core Task,Datasets,Methodology,Performance Metrics,Findings,Limitations,DOI/PMID/arXiv ID", "csv")}
                className="p-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white cursor-pointer"
              >
                {copiedText === "csv" ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Template 2: experiment_plan_template.md */}
          <div className="p-6 rounded-2xl border border-border/40 bg-white/[0.01] glow-card flex flex-col justify-between h-[320px] hover:border-purple-accent/30">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-border/50 mb-6">
                <BookOpen className="h-6 w-6 text-purple-accent" />
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
                className="flex-1 text-center py-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 text-white cursor-pointer"
              >
                <Download className="h-3.5 w-3.5 text-purple-accent" /> Download MD
              </a>
              <button
                onClick={() => handleCopy("# Scientific Experiment Plan\n- Hypothesis:\n- Datasets:\n- Models:\n- Run Logs:", "plan")}
                className="p-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white cursor-pointer"
              >
                {copiedText === "plan" ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Template 3: mcp_config_example.json */}
          <div className="p-6 rounded-2xl border border-border/40 bg-white/[0.01] glow-card flex flex-col justify-between h-[320px] hover:border-cyan-accent/30">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-border/50 mb-6">
                <Terminal className="h-6 w-6 text-cyan-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">MCP Config Example</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                JSON configuration file enabling quick local setup for PubMed, SQLite, local filesystems, and GitHub.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => handleCopy(mcpConfigExample, "mcp")}
                className="flex-1 py-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 text-white cursor-pointer"
              >
                {copiedText === "mcp" ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-400" /> Copied config!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-cyan-accent" /> Copy JSON Config
                  </>
                )}
              </button>
              <a
                href="examples/mcp_config_example.json"
                download
                className="p-2.5 rounded-xl border border-border/50 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white cursor-pointer"
              >
                <Download className="h-4 w-4 text-cyan-accent" />
              </a>
            </div>
          </div>

        </RevealOnScroll>
      </section>

      {/* 7. Enriched Cinematic Footer */}
      <footer id="footer" className="max-w-7xl mx-auto px-8 pt-20 pb-12 border-t border-border/20 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand info */}
          <div className="md:col-span-2">
            <div className="text-2xl text-white select-none font-semibold mb-4 font-display">
              Scientist.AI<sup className="text-xs font-sans ml-0.5 opacity-50">®</sup>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              The definitive resource playbook and workspace configuration templates for deploying autonomous agents and multi-agent pipelines in academic labs.
            </p>
          </div>

          {/* Quick links list */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-accent uppercase mb-4">Resources</h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <button onClick={() => scrollToSection('playbook')} className="text-left hover:text-white transition-colors cursor-pointer">Reference Playbook</button>
              <button onClick={() => scrollToSection('workbench')} className="text-left hover:text-white transition-colors cursor-pointer">Execution Console</button>
              <button onClick={() => scrollToSection('ecosystem')} className="text-left hover:text-white transition-colors cursor-pointer">Agent Directory</button>
              <button onClick={() => scrollToSection('mcp')} className="text-left hover:text-white transition-colors cursor-pointer">MCP Connectors</button>
              <button onClick={() => scrollToSection('templates')} className="text-left hover:text-white transition-colors cursor-pointer">Workspace Templates</button>
            </div>
          </div>

          {/* Subscription / mock watcher input */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-purple-accent uppercase mb-4">Stay Synchronized</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Get notified of new scientific MCP connectors and workflow updates.
            </p>
            {newsletterSubscribed ? (
              <div className="p-3.5 bg-green-500/10 border border-green-500/20 rounded-xl text-xs text-green-400 flex items-center gap-2">
                <Check className="h-4 w-4" /> Thank you for subscribing!
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setNewsletterSubscribed(true);
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="name@institution.edu"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-border/50 rounded-xl px-3 py-2 text-xs text-white placeholder-muted-foreground focus:outline-none focus:border-white/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-white/95 text-[#000913] px-3.5 py-2 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/10 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <span>© 2026 Benjamin J. Hou. All rights reserved.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="inline-flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10 font-mono text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent animate-pulse"></span> Built with React + Vite + Tailwind
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="CONTRIBUTING.md" className="hover:text-white transition-colors">Contributing</a>
            <a href="LICENSE" className="hover:text-white transition-colors">MIT License</a>
            <a 
              href="https://github.com/Benjamin-JHou/openscience-playbook" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
