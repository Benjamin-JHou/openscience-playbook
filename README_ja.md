# オープンサイエンス & AIサイエンティスト プレイブック

[English](README.md) | [简体中文](README_zh.md) | [Français](README_fr.md) | [日本語](README_ja.md) | [한국어](README_ko.md) | [Español](README_es.md)

**オープンサイエンス & AIサイエンティスト プレイブック**へようこそ！本書は、主要なオープンソースのAIサイエンティスト・ワークベンチおよびローカルファーストの科学研究プラットフォームについてまとめた、総合的かつ厳選されたガイドです。AIを活用して科学研究を加速させるための、リソース一覧、ステップバイステップのインストールガイド、よくある質問（Q&A）、および高度な最適化テクニックを掲載しています。

---

## 🌟 AIサイエンティスト リソースマトリクス

| プロジェクト名 | 開発者 / 組織 | 公式サイト | GitHubリポジトリ | 主要技術スタック | 開発状況 | 対象領域 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open Science Desktop** | [ai4s-research](https://github.com/ai4s-research) | [openedscience.com](https://openedscience.com) | [open-science](https://github.com/ai4s-research/open-science) | Tauri, Rust, JS/TS | ベータ (活発) | 一般科学 / 異分野融合研究 |
| **OpenScience** | [synthetic-sciences](https://github.com/synthetic-sciences) | [openscience.sh](https://openscience.sh) | [openscience](https://github.com/synthetic-sciences/openscience) | Node.js, React, ブラウザ | リリース済 (活発) | 多分野 (ML, バイオ, 化学, 物理) |
| **Open Science (Alpha)** | [aipoch](https://github.com/aipoch) | [aipoch.com](https://aipoch.com) | [open-science](https://github.com/aipoch/open-science) | Electron, React | アルファ (初期段階) | 医学 & ライフサイエンス |
| **The AI Scientist** | [Sakana AI](https://sakana.ai) | [sakana.ai](https://sakana.ai) | [AI-Scientist](https://github.com/SakanaAI/AI-Scientist) / [v2](https://github.com/SakanaAI/AI-Scientist-v2) | Python, PyTorch | 学術研究 | 機械学習 / AI研究 |

---

## 🔍 主要プロジェクトの詳細

### 1. Open Science Desktop (ai4s-research)
Tauri上に構築された、ローカルファーストかつモデルアグノスティック（モデルに依存しない）なデスクトップクライアント。科学系エージェントを管理し、標準的なModel Context Protocol (MCP)サーバーを介して外部リソースに接続するための、高速でネイティブなデスクトップ環境を提供します。

*   **重要リソース**：
    *   **メインリポジトリ**：[ai4s-research/open-science](https://github.com/ai4s-research/open-science)
    *   **公式サイト**：[openedscience.com](https://openedscience.com)
    *   **スキルセットリポジトリ**：[ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
*   **主な強み**：
    *   **高いパフォーマンス**：Tauriベースのアーキテクチャにより、軽量なパッケージサイズと極めて低いメモリ使用量を実現。
    *   **ネイティブなMCPサポート**：Model Context Protocol準拠のあらゆるツールとシームレスに接続可能。
    *   **包括的なワークフロー**：テーマ選定、文献レビュー、実験設計、論文作成、整合性監査（アカデミック・インテグリティ）をカバーする標準的な科学スキルパッケージをプリインストール。
*   **制限事項**：特定ドメインのタスクには、外部スキルモジュールのインポートへの依存度が高い。

### 2. OpenScience (synthetic-sciences)
ローカルのエージェント・ランタイムとブラウザベースのUIを組み合わせた、Webベースのインタラクティブなワークスペース。YC支援チームによって開発され、初期状態で豊富な機能を提供することを目指しています。

*   **重要リソース**：
    *   **メインリポジトリ**：[synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience)
    *   **公式サイト**：[openscience.sh](https://openscience.sh)
    *   **NPMパッケージ**：[@synsci/openscience](https://www.npmjs.com/package/@synsci/openscience)
*   **主な強み**：
    *   **豊富なビルトインスキル**：290以上の事前定義スキルと、30以上の主要データベース（UniProt、PDB、arXiv、ChEMBLなど）へのネイティブコネクタを搭載。
    *   **強力な自律性**：複雑なエージェントネットワークを調整し、隔離されたサンドボックス環境で仮説評価やコード実行を実行。
    *   **多分野サポート**：生物学、化学、物理学、機械学習向けに構成済みの環境を用意。
*   **制限事項**：ネイティブなデスクトップアプリはなく、すべてブラウザのタブ内で動作。

### 3. Open Science (aipoch)
バイオ医学およびライフサイエンス分野向けに特別に設計された、Electronベースの専門研究用クライアント。

*   **重要リソース**：
    *   **メインリポジトリ**：[aipoch/open-science](https://github.com/aipoch/open-science)
    *   **公式サイト**：[aipoch.com](https://aipoch.com)
    *   **医学スキルセット**：[medical-research-skills](https://github.com/aipoch/medical-research-skills)
*   **主な強み**：
    *   **バイオ医学インテグレーション**：PubMed、ClinVar、GEO、および各種遺伝子データベースへの直接的なAPIマッピングを提供。
    *   **協調・専門エージェント設計**：臨床試験設計、バイオインフォマティクスモデリング、学術文献分析などのワークフローに直結したエージェント構成。
*   **制限事項**：現在は初期アルファ段階にあり、多くの機能は開発中またはプレースホルダーの状態。

---

## 🚀 インストール & クイックスタート

### 1. Open Science Desktop (ai4s-research)
1. リポジトリの [Releases ページ](https://github.com/ai4s-research/open-science/releases) にアクセスします。
2. お使いのOSに対応するインストーラー（macOS用 `.dmg`、Windows用 `.exe`、Linux用 `.deb`/`.AppImage`）をダウンロードします。
3. インストーラーを実行してアプリを起動します。
4. **Settings（設定）** に移動し、APIキー（OpenAI、Anthropic、Gemini、DeepSeek、またはローカルのエンドポイントに対応）を入力します。
5. デフォルトの [ai4s-skills](https://github.com/ai4s-research/ai4s-skills) を読み込んで、主要機能を有効化します。

### 2. OpenScience (synthetic-sciences)
前提条件：[Node.js](https://nodejs.org/) (v18以上) および npmがインストールされていること。

*   **クイックスタート (推奨)**：
    ローカルへの手動インストールなしで、ターミナルで直接起動します：
    ```bash
    npx synsci
    ```
*   **グローバルインストール**：
    システム全体にインストールして、いつでも実行できるようにします：
    ```bash
    npm i -g @synsci/openscience
    openscience
    ```
*   **API設定**：
    起動後、ブラウザで指定されたURL（デフォルト：`http://localhost:3000`）を開き、APIキーを設定します。

### 3. Open Science (aipoch)
1. リポジトリをクローンします：
   ```bash
   git clone https://github.com/aipoch/open-science.git
   cd open-science
   ```
2. 開発用依存関係をインストールします：
   ```bash
   npm install
   ```
3. 開発者モードで実行します：
   ```bash
   npm start
   ```

---

## ❓ Q&A (よくある質問)

### Q1: 研究アイデア、APIキー、データセットのセキュリティは確保されていますか？
はい。3つのプラットフォームはすべて**ローカルファースト**を優先しています。APIキー、実験構成、文献キャッシュ、生成された論文などはすべてお使いのデバイスにローカル保存されます。LLM APIへのリクエストはPCから直接送信され、第三者のサーバーを経由しません。

### Q2: ローカルLLMを使用して、完全オフラインで動作させることは可能ですか？
可能です。これらのプラットフォームはモデルアグノスティックであり、標準的なAPIエンドポイントに対応しているため、[Ollama](https://ollama.com/) や [LM Studio](https://lmstudio.ai/) などのローカル推論エンジンと簡単に連携できます。APIのベースURLをローカルのアドレス（例: `http://localhost:11434/v1`）に設定するだけです。

### Q3: カスタムスキルを作成してインポートするにはどうすればよいですか？
- **Open Science Desktop (ai4s-research) の場合**：スキルは、open Agent Skills標準に準拠したJSON/Markdownファイルとして構成されます。ローカルディレクトリにスキルパッケージを配置し、設定パネルからリンクします。
- **OpenScience (synthetic-sciences) の場合**：TypeScript SDKを使用して、カスタムプラグインの作成やツールの実装を行うことができます。

### Q4: どのプラットフォームを選ぶべきですか？
- 一般的な研究、文献の要約、編集作業に適した、洗練された軽量なデスクトップアプリを求める場合は、**Open Science Desktop** をお選びください。
- 深い自律自動化、サンドボックス環境でのコード実行、UniProtやPDBなどの専門データベースへの直接アクセスが必要な場合は、**OpenScience (synthetic-sciences)** をお選びください。
- バイオ医学や遺伝学の研究に特化し、臨床・バイオインフォ系の初期ワークフローを試したい場合は、**Open Science (aipoch)** をお選びください。

---

## 💡 高度な活用テクニック

### 1. コストとモデル階層の最適化
自律的な科学研究ループを長時間実行すると、API料金が高額になる場合があります。以下のようなモデル階層化戦略を推奨します：
- **探索、データ取り込み & タスクルーティング**：コスト効率が極めて高く、高性能な最新の「Flash」および「Mini」モデルの利用を推奨します。例えば、100万トークン以上のコンテキスト窓を持つ **Gemini 2.5 Flash**（大量の科学文献やPDFの読み込み・要約に最適）や、高スループットのサブエージェント調整、キーワード抽出、ワークフロールーティング用の **GPT-4o mini** や **Claude 3.5 Haiku** を使用します。
- **考察 & 論文執筆**：深い科学的推論、最終的な論文執筆、または構造化された整合性監査を実行する段階でのみ、**Claude 3.5 Sonnet** や **GPT-4o** などの最先端のフロンティアモデルに切り替えます。

### 2. MCPによるカスタムツールの統合
**Model Context Protocol (MCP)** を活用して、プラットフォームをローカルファイルシステム、プライベートデータベース、またはHPCクラスターに接続します。MCP SDKを使って簡単なPythonやNode.jsスクリプトを記述することで、AIサイエンティストが研究室の非公開データベースを安全に検索できるようになります。

### 3. 生成コードの検証
AIエージェントがスクリプト（ゲノムCSVファイルを解析するPythonコードなど）を生成した際は、必ず実行ログを確認してください。`OpenScience` などのプラットフォームはコードを隔離されたDockerサンドボックス内で実行しますが、実行時間が長いタスクを開始する前に依存ライブラリやデータ形式を確認しておくことで、エラーによる中断を防ぐことができます。

---

## 🤝 貢献 & ライセンス
本プレイブックへの貢献を歓迎します！新しいリソース、ヒント、または翻訳の追加について、Issueの起票やPull Requestの送信をいつでもお待ちしております。

本プロジェクトは [MIT ライセンス](LICENSE) に基づいてオープンソースとして提供されています。
