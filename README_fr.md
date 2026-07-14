# Playbook Open Science & AI-Scientist

[English](README.md) | [简体中文](README_zh.md) | [Français](README_fr.md) | [日本語](README_ja.md) | [한국어](README_ko.md) | [Español](README_es.md)

Bienvenue dans le **Playbook Open Science & AI-Scientist** ! Il s'agit d'un guide complet et sélectionné détaillant les principaux environnements de travail d'IA scientifique open-source et les plateformes de recherche locales. Il comprend des répertoires de ressources, des guides d'installation étape par étape, des FAQ courantes et des optimisations avancées pour vous aider à propulser votre recherche scientifique avec l'IA.

---

## 🌟 Matrice des ressources AI-Scientist

| Nom du projet | Développeur / Organisation | Site officiel | Dépôt GitHub | Pile technologique | Statut de développement | Domaine cible |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open Science Desktop** | [ai4s-research](https://github.com/ai4s-research) | [openedscience.com](https://openedscience.com) | [open-science](https://github.com/ai4s-research/open-science) | Tauri, Rust, JS/TS | Bêta (Actif) | Sciences générales / Transdisciplinaire |
| **OpenScience** | [synthetic-sciences](https://github.com/synthetic-sciences) | [openscience.sh](https://openscience.sh) | [openscience](https://github.com/synthetic-sciences/openscience) | Node.js, React, Navigateur | Version active | Multidisciplinaire (ML, Bio, Chim, Phys) |
| **Open Science (Alpha)** | [aipoch](https://github.com/aipoch) | [aipoch.com](https://aipoch.com) | [open-science](https://github.com/aipoch/open-science) | Electron, React | Alpha (Stade initial) | Médecine & Sciences de la vie |
| **The AI Scientist** | [Sakana AI](https://sakana.ai) | [sakana.ai](https://sakana.ai) | [AI-Scientist](https://github.com/SakanaAI/AI-Scientist) / [v2](https://github.com/SakanaAI/AI-Scientist-v2) | Python, PyTorch | Recherche académique | Apprentissage automatique / IA |

---

## 🔍 Profils détaillés des projets

### 1. Open Science Desktop (ai4s-research)
Un client de bureau axé sur le local et indépendant du modèle, basé sur Tauri. Il offre un environnement de bureau natif et rapide pour gérer les agents scientifiques et connecter des ressources externes via des serveurs MCP (Model Context Protocol).

*   **Ressources clés** :
    *   **Dépôt principal** : [ai4s-research/open-science](https://github.com/ai4s-research/open-science)
    *   **Site officiel** : [openedscience.com](https://openedscience.com)
    *   **Dépôt de compétences** : [ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
*   **Forces majeures** :
    *   **Haute performance** : L'architecture Tauri garantit une taille de paquet réduite et une faible utilisation de la mémoire.
    *   **Support MCP natif** : Se connecte de manière transparente à tout outil compatible Model Context Protocol.
    *   **Flux de travail complet** : Livré avec des compétences scientifiques standards couvrant l'exploration de sujets, la revue de littérature, la conception d'expériences, la génération d'articles et l'audit d'intégrité.
*   **Limites** : Repose fortement sur l'importation de modules de compétences externes pour les tâches spécifiques à un domaine.

### 2. OpenScience (synthetic-sciences)
Un espace de travail interactif basé sur le web qui combine un runtime d'agent local avec une interface utilisateur de navigateur. Ce projet a été développé par une équipe soutenue par YC et vise une riche fonctionnalité prête à l'emploi.

*   **Ressources clés** :
    *   **Dépôt principal** : [synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience)
    *   **Site officiel** : [openscience.sh](https://openscience.sh)
    *   **Package NPM** : [@synsci/openscience](https://www.npmjs.com/package/@synsci/openscience)
*   **Forces majeures** :
    *   **Nombreuses compétences prêtes à l'emploi** : Comprend plus de 290 compétences prédéfinies et des connecteurs natifs vers plus de 30 bases de données (UniProt, PDB, arXiv, ChEMBL, etc.).
    *   **Forte autonomie** : Coordonne des réseaux d'agents complexes pour évaluer les hypothèses et exécuter du code dans des bacs à sable isolés.
    *   **Support multidisciplinaire** : Environnements préconfigurés pour la biologie, la chimie, la physique et le ML.
*   **Limites** : Pas d'application de bureau native compilée ; fonctionne entièrement dans les onglets de navigateur.

### 3. Open Science (aipoch)
Un client de recherche spécialisé basé sur Electron, conçu spécifiquement pour les secteurs de la biomédecine et des sciences de la vie.

*   **Ressources clés** :
    *   **Dépôt principal** : [aipoch/open-science](https://github.com/aipoch/open-science)
    *   **Site officiel** : [aipoch.com](https://aipoch.com)
    *   **Compétences médicales** : [medical-research-skills](https://github.com/aipoch/medical-research-skills)
*   **Forces majeures** :
    *   **Intégrations biomédicales** : Mises en correspondance d'API directes pour PubMed, ClinVar, GEO et diverses bases de données génétiques.
    *   **Conception coordinateur-sous-agent spécialisée** : La structure s'adapte directement à la conception des essais cliniques, à la modélisation bioinformatique et à l'analyse de la littérature académique.
*   **Limites** : Actuellement en phase alpha précoce ; de nombreuses fonctionnalités sont des espaces réservés ou en cours de développement actif.

---

## 🚀 Installation & Démarrage

### 1. Open Science Desktop (ai4s-research)
1. Allez sur la [page Releases](https://github.com/ai4s-research/open-science/releases) du dépôt GitHub.
2. Téléchargez l'installateur compatible avec votre système d'exploitation (`.dmg` pour macOS, `.exe` pour Windows, `.deb`/`.AppImage` pour Linux).
3. Exécutez l'installateur et lancez l'application.
4. Allez dans **Settings** (Paramètres) et saisissez vos clés API (prend en charge OpenAI, Anthropic, Gemini, DeepSeek, ou des URL locales).
5. Chargez le dépôt par défaut [ai4s-skills](https://github.com/ai4s-research/ai4s-skills) pour déverrouiller les fonctionnalités principales.

### 2. OpenScience (synthetic-sciences)
Prérequis : [Node.js](https://nodejs.org/) (v18 ou supérieur) et npm installés.

*   **Démarrage instantané (Recommandé)** :
    Lancez l'outil directement dans votre terminal sans installation manuelle :
    ```bash
    npx synsci
    ```
*   **Installation globale** :
    Installez globalement sur votre système pour accéder à l'outil à tout moment :
    ```bash
    npm i -g @synsci/openscience
    openscience
    ```
*   **Configuration API** :
    Après avoir exécuté la commande, ouvrez l'URL fournie (par défaut : `http://localhost:3000`) dans votre navigateur pour configurer vos clés API.

### 3. Open Science (aipoch)
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/aipoch/open-science.git
   cd open-science
   ```
2. Installez les dépendances de développement :
   ```bash
   npm install
   ```
3. Exécutez en mode développeur :
   ```bash
   npm start
   ```

---

## ❓ FAQ (Foire Aux Questions)

### Q1 : Mes idées de recherche, mes clés API et mes ensembles de données sont-ils sécurisés ?
Oui. Les trois plateformes privilégient une approche **local-first** (priorité au local). Vos clés API, vos configurations expérimentales, votre cache de littérature et les articles générés sont stockés localement sur votre appareil. Les requêtes aux API LLM sont effectuées directement depuis votre ordinateur, garantissant qu'aucun serveur intermédiaire n'enregistre votre propriété intellectuelle.

### Q2 : Puis-je exécuter ces modèles complètement hors ligne avec des LLM locaux ?
Oui. Comme ces plateformes sont indépendantes du modèle et prennent en charge les points de terminaison d'API standards, vous pouvez facilement les interfacer avec des moteurs d'inférence locaux comme [Ollama](https://ollama.com/) ou [LM Studio](https://lmstudio.ai/). Dirigez simplement l'URL de base de l'API vers votre hôte local (par exemple, `http://localhost:11434/v1`).

### Q3 : Comment créer et importer des compétences personnalisées ?
- **Pour Open Science Desktop (ai4s-research)** : Les compétences sont formatées comme des fichiers JSON/Markdown selon le standard open Agent Skills. Vous pouvez placer vos packages de compétences personnalisées dans votre répertoire local et les lier dans le panneau Paramètres.
- **Pour OpenScience (synthetic-sciences)** : Vous pouvez écrire des plugins personnalisés ou implémenter des outils en utilisant leur SDK TypeScript.

### Q4 : Quelle plateforme me convient le mieux ?
- Choisissez **Open Science Desktop** si vous souhaitez une application native, légère et soignée pour la recherche générale, les résumés de littérature et l'édition.
- Choisissez **OpenScience (synthetic-sciences)** si vous souhaitez une automatisation approfondie et autonome, une exécution de code dans des environnements de bac à sable et un accès natif aux bases de données comme UniProt ou PDB.
- Choisissez **Open Science (aipoch)** si vous effectuez spécifiquement des recherches biomédicales ou génétiques et souhaitez tester le flux de travail clinique à un stade précoce.

---

## 💡 Conseils & Astuces avancés

### 1. Optimisation des coûts et des niveaux de modèle
L'exécution de boucles de recherche autonomes et approfondies peut devenir coûteuse. Optimisez votre stratégie de modèle comme suit :
- **Filtrage & Recherche initiale** : Utilisez des modèles rentables et à haut débit comme `deepseek-chat` (DeepSeek-V3) ou des modèles locaux open-weight pour l'analyse initiale de la littérature, le filtrage des mots-clés et l'orientation des recherches.
- **Synthèse & Rédaction** : Passez à des modèles frontières à haute intelligence comme `claude-3-5-sonnet` ou `gpt-4o` pour le raisonnement approfondi, la rédaction du manuscrit final et l'audit structuré.

### 2. Outils personnalisés avec MCP
Tirez parti du **Model Context Protocol (MCP)** pour connecter directement les plateformes à vos systèmes de fichiers locaux, vos serveurs de bases de données personnalisés ou vos clusters de calcul. Vous pouvez écrire de simples scripts Python ou Node.js à l'aide du SDK MCP pour permettre à l'IA scientifique d'interroger en toute sécurité votre base de données de notes de laboratoire privée.

### 3. Vérification du code généré
Lorsque les agents d'IA génèrent des scripts (par exemple, du code Python pour analyser des fichiers CSV génomiques), vérifiez toujours les journaux d'exécution. Les plateformes comme `OpenScience (synthetic-sciences)` exécutent le code dans un bac à sable Docker, mais vérifier les dépendances ou les formats de schéma de données évitera les erreurs d'exécution lors de tâches de longue durée.

---

## 🤝 Contribution & Licence
Les contributions à ce playbook sont les bienvenues ! N'hésitez pas à ouvrir des tickets (issues) ou à soumettre des demandes d'intégration (pull requests) avec de nouvelles ressources, astuces ou traductions.

Ce projet est sous licence [MIT](LICENSE).
