# 오픈 사이언스 & AI 사이언티스트 플레이북 (Open Science & AI-Scientist Playbook)

[English](README.md) | [简体中文](README_zh.md) | [Français](README_fr.md) | [日本語](README_ja.md) | [한국어](README_ko.md) | [Español](README_es.md)

**오픈 사이언스 & AI 사이언티스트 플레이북**에 오신 것을 환영합니다! 이 가이드는 주요 오픈소스 AI 과학 연구 워크벤치와 로컬 우선(local-first) 연구 플랫폼을 상세히 다루는 종합적이고 엄선된 안내서입니다. AI를 활용하여 과학 연구의 효율성을 극대화할 수 있도록 리소스 모음, 단계별 설치 안내, 자주 묻는 질문(Q&A), 그리고 고급 최적화 팁을 제공합니다.

---

## 🌟 AI-Scientist 리소스 매트릭스

| 프로젝트명 | 개발자 / 조직 | 공식 웹사이트 | GitHub 저장소 | 주요 기술 스택 | 개발 상태 | 대상 분야 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open Science Desktop** | [ai4s-research](https://github.com/ai4s-research) | [openedscience.com](https://openedscience.com) | [open-science](https://github.com/ai4s-research/open-science) | Tauri, Rust, JS/TS | 베타 (활성) | 일반 과학 / 학제간 연구 |
| **OpenScience** | [synthetic-sciences](https://github.com/synthetic-sciences) | [openscience.sh](https://openscience.sh) | [openscience](https://github.com/synthetic-sciences/openscience) | Node.js, React, 브라우저 | 정식 릴리즈 (활성) | 다학제 (ML, 바이오, 화학, 물리) |
| **Open Science (Alpha)** | [aipoch](https://github.com/aipoch) | [aipoch.com](https://aipoch.com) | [open-science](https://github.com/aipoch/open-science) | Electron, React | 알파 (초기 단계) | 의학 및 생명 과학 |
| **The AI Scientist** | [Sakana AI](https://sakana.ai) | [sakana.ai](https://sakana.ai) | [AI-Scientist](https://github.com/SakanaAI/AI-Scientist) / [v2](https://github.com/SakanaAI/AI-Scientist-v2) | Python, PyTorch | 학술 연구 | 머신러닝 / AI 연구 |

---

## 🔍 주요 프로젝트 상세 프로필

### 1. Open Science Desktop (ai4s-research)
Tauri 프레임워크를 기반으로 구축된 로컬 우선, 모델 독립적(model-agnostic) 데스크톱 클라이언트입니다. 과학 연구용 에이전트를 효율적으로 관리하고 표준 Model Context Protocol (MCP) 서버를 통해 외부 자원과 연결할 수 있는 빠르고 네이티브한 데스크톱 환경을 제공합니다.

*   **주요 리소스**:
    *   **메인 저장소**: [ai4s-research/open-science](https://github.com/ai4s-research/open-science)
    *   **공식 웹사이트**: [openedscience.com](https://openedscience.com)
    *   **핵심 스킬셋 저장소**: [ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
*   **주요 강점**:
    *   **뛰어난 성능**: Tauri 기반 아키텍처로 파일 크기가 작고 메모리 사용량이 극히 적습니다.
    *   **네이티브 MCP 지원**: Model Context Protocol 규격을 준수하는 모든 도구와 원활하게 연결됩니다.
    *   **포괄적인 워크플로우**: 주제 탐색, 문헌 검토, 실험 설계, 논문 작성, 연구 진실성 감사(academic integrity audit)에 이르는 표준 과학 스킬 패키지가 내장되어 있습니다.
*   **한계**: 특정 도메인의 전문적인 작업을 수행하려면 외부 스킬 모듈을 별도로 임포트해야 하는 의존도가 높습니다.

### 2. OpenScience (synthetic-sciences)
로컬 에이전트 런타임과 브라우저 기반 사용자 인터페이스를 결합한 웹 기반의 인터랙티브 워크스페이스입니다. Y Combinator의 투자를 받은 팀이 개발하였으며, 설치 즉시 풍부한 기능을 바로 사용할 수 있도록 설계되었습니다.

*   **주요 리소스**:
    *   **메인 저장소**: [synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience)
    *   **공식 웹사이트**: [openscience.sh](https://openscience.sh)
    *   **NPM 패키지**: [@synsci/openscience](https://www.npmjs.com/package/@synsci/openscience)
*   **주요 강점**:
    *   **풍부한 내장 스킬**: 290개 이상의 사전 정의된 스킬과 30개 이상의 공인 데이터베이스(UniProt, PDB, arXiv, ChEMBL 등) 연동을 기본 지원합니다.
    *   **강력한 자율성**: 복잡한 에이전트 네트워크를 조율하여 가설을 검증하고, 격리된 샌드박스에서 코드를 안전하게 실행합니다.
    *   **다양한 학문 분야 지원**: 생물학, 화학, 물리학, 머신러닝에 사전 최적화된 템플릿 환경을 제공합니다.
*   **한계**: 별도의 설치형 데스크톱 앱이 없으며, 브라우저 탭을 통해서만 사용할 수 있습니다.

### 3. Open Science (aipoch)
생물의학 및 생명 과학 분야 연구자를 위해 특별히 설계된 Electron 기반의 전문 연구용 클라이언트입니다.

*   **주요 리소스**:
    *   **메인 저장소**: [aipoch/open-science](https://github.com/aipoch/open-science)
    *   **공식 웹사이트**: [aipoch.com](https://aipoch.com)
    *   **의학 스킬셋**: [medical-research-skills](https://github.com/aipoch/medical-research-skills)
*   **주요 강점**:
    *   **의생명 과학 데이터베이스 통합**: PubMed, ClinVar, GEO 및 다양한 유전체 데이터베이스에 직접 연동할 수 있는 API 매핑을 네이티브로 탑재했습니다.
    *   **조율-하위 에이전트 설계**: 임상 시험 설계, 생물정보학 모델링, 학술 문헌 분석 등 전문 연구 흐름에 직관적으로 부합하는 구조를 가집니다.
*   **한계**: 현재 초기 알파 단계로, 많은 핵심 기능들이 개발 중이거나 뼈대(placeholder)만 잡혀 있는 상태입니다.

---

## 🚀 설치 및 시작하기

### 1. Open Science Desktop (ai4s-research)
1. 저장소의 [Releases 페이지](https://github.com/ai4s-research/open-science/releases)로 이동합니다.
2. 사용 중인 운영체제에 맞는 설치 파일을 다운로드합니다 (macOS: `.dmg`, Windows: `.exe`, Linux: `.deb`/`.AppImage`).
3. 설치 파일을 실행하고 앱을 켭니다.
4. **Settings (설정)**으로 이동하여 API 키를 입력합니다 (OpenAI, Anthropic, Gemini, DeepSeek 또는 로컬 대형 모델 지원).
5. 기본 [ai4s-skills](https://github.com/ai4s-research/ai4s-skills)를 연동하여 연구 핵심 기능들을 활성화합니다.

### 2. OpenScience (synthetic-sciences)
사전 요구사항: [Node.js](https://nodejs.org/) (v18 이상) 및 npm이 설치되어 있어야 합니다.

*   **일회성 실행 (추천)**:
    다운로드 및 설치 과정 없이 터미널에서 즉시 실행합니다:
    ```bash
    npx synsci
    ```
*   **글로벌 설치**:
    시스템에 전역 설치하여 언제든지 명령어로 호출할 수 있게 합니다:
    ```bash
    npm i -g @synsci/openscience
    openscience
    ```
*   **API 구성**:
    명령어 실행 후 브라우저에 표시되는 주소(기본값: `http://localhost:3000`)로 접속하여 API 키를 구성합니다.

### 3. Open Science (aipoch)
1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/aipoch/open-science.git
   cd open-science
   ```
2. 개발 의존성 패키지를 설치합니다:
   ```bash
   npm install
   ```
3. 개발자 모드로 실행합니다:
   ```bash
   npm start
   ```

---

## ❓ 자주 묻는 질문 (Q&A)

### Q1: 제 연구 아이디어, API 키, 그리고 연구 데이터셋은 안전한가요?
안전합니다. 소개된 세 플랫폼 모두 **로컬 우선(local-first)** 접근 방식을 지향합니다. API 키, 실험 환경 설정, 수집된 문헌 및 생성된 논문 파일은 모두 사용자의 개인 기기에 로컬로만 저장됩니다. LLM API로 가는 요청 또한 사용자의 컴퓨터에서 직접 전송되므로, 중간에 정보를 가로채거나 기록하는 중간 서버가 존재하지 않습니다.

### Q2: 로컬 LLM을 사용해 오프라인으로 완전히 구동할 수 있나요?
가능합니다. 플랫폼들이 모델 독립적으로 설계되어 표준 API 규격을 지원하므로, [Ollama](https://ollama.com/)나 [LM Studio](https://lmstudio.ai/) 같은 로컬 추론 엔진과 연동할 수 있습니다. 설정 창에서 API Base URL을 로컬 호스트 주소(예: `http://localhost:11434/v1`)로 지정하기만 하면 됩니다.

### Q3: 나만의 맞춤형 스킬을 만들고 연동하려면 어떻게 하나요?
- **Open Science Desktop (ai4s-research)**: 스킬은 open Agent Skills 표준을 따르는 JSON/Markdown 파일로 구성됩니다. 작성한 커스텀 스킬 폴더를 로컬 경로에 두고 설정 패널에서 연결할 수 있습니다.
- **OpenScience (synthetic-sciences)**: 자체 제공하는 TypeScript SDK를 활용해 맞춤형 플러그인을 개발하거나 도구를 확장할 수 있습니다.

### Q4: 저에게 가장 적합한 플랫폼은 무엇인가요?
- 일반적인 연구 활동, 문헌 요약 및 문서 작성에 적합한 깔끔하고 가벼운 설치형 프로그램을 찾으신다면 **Open Science Desktop**을 선택하세요.
- 고도의 자율 제어 및 전 자동화, 격리된 샌드박스 내부에서의 코드 검증, UniProt 또는 PDB와 같은 전문 생물/화학 데이터베이스 연동이 핵심이라면 **OpenScience (synthetic-sciences)**를 선택하세요.
- 의생명 과학 및 유전학 분야에 특화되어 있고 전문적인 생물정보학 파이프라인과 의료 문헌 분석을 앞서 경험해보고 싶다면 **Open Science (aipoch)**를 선택하세요.

---

## 💡 고급 활용 팁 & 트릭

### 1. 비용 및 모델 등급 최적화
전체 연구 루프를 자동으로 오랫동안 구동하면 API 요금이 크게 누적될 수 있습니다. 다음 모델 계층화 전략을 권장합니다:
- **초기 탐색 및 문헌 필터링 단계**: 문헌 데이터의 1차 파싱, 키워드 추출, 작업 분류 등에는 처리 속도가 빠르고 단가가 저렴한 `deepseek-chat` (DeepSeek-V3)이나 로컬 오픈소스 모델을 활용합니다.
- **종합 및 논문 작성 단계**: 심층적 추론, 논문 최종 작성, 그리고 학술적 검증 단계에는 `claude-3-5-sonnet` 또는 `gpt-4o` 등 지능 수준이 가장 높은 프론티어 모델로 전환합니다.

### 2. MCP를 활용한 개인 도구 연동
**Model Context Protocol (MCP)**을 도입하여 플랫폼을 로컬 파일 시스템, 사내 데이터 서버, 또는 고성능 컴퓨팅(HPC) 클러스터와 직접 연결할 수 있습니다. MCP SDK를 사용하여 파이썬이나 Node.js로 작성한 간단한 스크립트로 AI 연구원이 실험실의 비공개 연구 노트를 안전하게 검색하도록 허용할 수 있습니다.

### 3. 생성된 코드 안전 검증
AI 에이전트가 데이터 처리 스크립(예: 유전체 CSV를 파싱하기 위한 파이썬 코드)를 작성하는 경우, 반드시 실행 로그를 모니터링해야 합니다. `OpenScience` 등의 플랫폼은 Docker 샌드박스 내부에서 코드를 안전하게 실행하지만, 시간이 오래 걸리는 연산을 수행하기 전에 필요한 패키지 의존성이나 데이터 형태를 미리 검토해 두면 연산이 도중에 멈추는 불상사를 방지할 수 있습니다.

---

## 🤝 기여 및 라이선스
이 플레이북을 개선하기 위한 모든 기여를 환영합니다! 유용한 리소스, 새로운 팁, 또는 오역 수정사항이 있다면 언제든지 Issue를 열거나 Pull Request를 제출해 주세요.

본 프로젝트는 [MIT 라이선스](LICENSE)로 관리되고 있습니다.
