# Scientific Experiment Plan

This template is designed to plan and execute scientific experiments using AI research agents. Keep this document in your local workspace and let the agent update its progress.

---

## 1. Metadata
- **Project Name**: 
- **Lead Researcher**: 
- **Date**: 
- **Target Venue/Journal**: 

## 2. Hypothesis & Objectives
- **Core Hypothesis**: *State what you expect to prove or disprove.*
- **Key Objectives**:
  1. 
  2. 
  3. 

## 3. Data Description
- **Source**: *e.g., Public DB, Lab Measurement, Simulation*
- **File Path in Workspace**: `workspace/data/...`
- **Fields / Features**:
- **Preprocessing Steps Required**: 

## 4. Methodology & Models
- **Baseline Models**: 
- **Proposed Method**: 
- **Evaluation Metrics**: *e.g., R-squared, RMSE, Accuracy, F1-score*

## 5. Execution Pipeline (Checklist)
- [ ] Parse and clean input dataset
- [ ] Establish performance baseline
- [ ] Run experimental models
- [ ] Run statistical significance tests
- [ ] Save visual plots to `figures/`
- [ ] Export results summary to `results/`

## 6. Logs & Run Records
*Log each run, indicating date, command, model, metrics, and outcomes.*

| Run ID | Date | Models/Parameters | Key Metric Score | Logs/Outputs |
| :--- | :--- | :--- | :--- | :--- |
| RUN_01 | | Baseline | | |
| RUN_02 | | Proposed | | |

## 7. Integrity & Traceability Check
- [ ] Are all data points traceable to raw CSV files?
- [ ] Did you separate measured facts from statistical interpretation?
- [ ] Are the code files saved in a reproducible sandbox/container environment?
