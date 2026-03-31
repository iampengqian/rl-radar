# RL Open Source Daily Digest 2026-04-01

> Generated: 2026-03-31 22:07 UTC | Projects covered: 15

- [ROLL](https://github.com/alibaba/ROLL)
- [ROCK](https://github.com/alibaba/ROCK)
- [slime](https://github.com/THUDM/slime)
- [AReaL](https://github.com/inclusionAI/AReaL)
- [TRL](https://github.com/huggingface/trl)
- [Tianshou](https://github.com/thu-ml/tianshou)
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)
- [verl](https://github.com/volcengine/verl)
- [torchtune](https://github.com/pytorch/torchtune)
- [Open Instruct](https://github.com/allenai/open-instruct)
- [CleanRL](https://github.com/vwxyzjn/cleanrl)
- [rl_games](https://github.com/Denys88/rl_games)
- [Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
- [PettingZoo](https://github.com/Farama-Foundation/PettingZoo)
- [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3)

---

## Cross-Project Comparison

## Ecosystem Overview
The RL open-source ecosystem on 2026-04-01 shows a clear bifurcation between **active post-training/LLM frameworks** and **dormant general-purpose RL libraries**. The primary activity centers on the "Post-Training Wars," where frameworks are competing to become the standard stack for aligning and fine-tuning Large Language Models (LLMs) and expanding into multi-modal/video generation.

Major players (verl, TRL, AReaL, Open Instruct, slime, ROLL) are aggressively shipping features, while foundational libraries (Gymnasium, CleanRL, Stable Baselines3) and niche projects (rl_games, Tianshou) experienced minimal to zero activity.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 13 | 49 | 0 | **High** — Dominant volume. Focus on Video RL (FlowGRPO) & hardware support (NPU/GB200). |
| **Open Instruct** | 0 | 15 | 0 | **Medium** — Architectural refactoring (OLMo-core migration) & Flash Attention 4. |
| **TRL** | 3+ | 6+ | 1 | **High** — Landmark v1.0.0 release (Async GRPO) & efficiency fixes. |
| **AReaL** | 4 | 10+ | 0 | **Medium** — Distributed data loading & FP8 training optimizations. |
| **ROCK** | 2 | 4 | 0 | **Medium** — TypeScript SDK finalization & config validation. |
| **ROLL** | 2 | 2 | 0 | **Low-Medium** — OpenReward integration (Agentic RL) & documentation. |
| **slime** | 4 | 1 | 0 | **Low-Medium** — GLM-5 stability issues & memory OOM fixes. |
| **Gymnasium** | 0 | 1 | 0 | **Low** — Maintenance (type hint fixes). |
| **rl_games** | 1 | 0 | 0 | **Low** — Community discussion on SAC performance; no code changes. |
| **Tianshou** | 0 | 1 | 0 | **Low** — Administrative PR closure. |
| **Others*** | 0 | 0 | 0 | **None** — No activity detected. |

*\*Others include: CleanRL, OpenRLHF, PettingZoo, Stable Baselines3, torchtune.*

## Shared Research & Engineering Directions

### Research Signals
*   **Shift to Multi-Modal & Video RL:** Frameworks are moving beyond text. **verl** introduced FlowGRPO for diffusion/video generation, while **Open Instruct** and **AReaL** pushed updates for Vision-Language Models (Qwen3.5 VLM, SGLang VLM).
*   **Agentic Workflows:** There is a concerted effort to support tool-calling and multi-turn interactions. **TRL** patched tool-calling hangs, **ROLL** integrated OpenReward environments, and **Open Instruct** proposed a Docker-based sandbox for code agents (`SWERLSandboxEnv`).
*   **Algorithmic Diversification:** Pure PPO is being supplemented or replaced. **TRL** and **Open Instruct** are optimizing GRPO (Group Relative Policy Optimization), while **verl** and **TRL** are exploring distillation and new alignment objectives (e.g., length-normalized sigmoid loss).

### Engineering & Infrastructure Signals
*   **Hardware Agnosticism & Optimization:** Projects are racing to support diverse hardware and precision to lower costs. **verl** and **AReaL** focused on NPU (Ascend) support and FP8 training, while **Open Instruct** integrated Flash Attention 4.
*   **Solving the "Generation Bottleneck":** Asynchronous generation is a key theme. **TRL** released Async GRPO, **AReaL** implemented a distributed data service, and **verl** worked on vLLM-Omni updates to decouple inference from training.
*   **Ecosystem Integration:** Libraries are becoming glue layers. **verl** merged NeMo support, **Open Instruct** aligned with OLMo-core, and **ROCK** cemented TypeScript SDK support for production deployments.

## Differentiation Analysis

*   **verl vs. TRL (The Platform War):** **verl** is positioning itself as the high-performance, hardware-agnostic backend for *unified* post-training (Text + Video), evidenced by its heavy focus on NPU/GB200 support and diffusion models. **TRL**, following its v1.0.0 release, is differentiating via *usability and ecosystem integration* (Hugging Face hub), focusing on "production-grade" efficiency through features like sparse weight syncing (Xet buckets) and Async GRPO.
*   **Open Instruct vs. slime (The Architecture Play):** **Open Instruct** is doubling down on standardization, refactoring its entire stack to align with `OLMo-core` native utilities. Conversely, **slime** is targeting the bleeding edge of massive model architectures (GLM-5 / DeepSeek V3), dealing with the immediate pain points of running 100B+ parameter models on heterogeneous clusters.
*   **AReaL vs. ROLL (System vs. Agent):** **AReaL** is focused on *system-level* throughput (data loading, IPC, FP8), treating RL as a distributed systems problem. **ROLL** is focusing on the *application layer* of agents, bridging models to complex environments (Sokoban, OpenReward) and prioritizing accessibility for English-speaking developers.

## Community Momentum & Maturity
*   **Mature & Stable:** **TRL** reached a significant maturity milestone with v1.0.0, signaling readiness for enterprise adoption. **Gymnasium** and **Tianshou** appear to be in maintenance mode, stable but inactive.
*   **Rapid Growth:** **verl** and **Open Instruct** show high PR velocity, indicative of active, maintainer-driven roadmaps (Video RL and OLMo-core migration respectively).
*   **Struggling/Niche:** **rl_games** is seeing friction in its community regarding algorithm parity (SAC performance), while **slime** is facing growing pains related to the complexity of new model architectures (GLM-5).

## Trend Signals
1.  **The Rise of "Video RL":** The integration of diffusion models and video generation (verl's FlowGRPO) suggests the next major frontier for RLHF is moving from text alignment to temporal visual consistency.
2.  **Sandboxed Agentic RL:** The emergence of Docker-based environments (Open Instruct's `SWERLSandboxEnv`, ROLL's OpenReward) signals a shift from static datasets to dynamic evaluation where agents must interact with live environments.
3.  **Decoupling Inference:** The "generation bottleneck" is being actively dismantled. Asynchronous engines and distributed data loaders across TRL, verl, and AReaL indicate that future scaling relies on parallelizing inference and training completely.
4.  **Flash Attention 4:** The immediate adoption of FA4 (Open Instruct) suggests memory bandwidth remains the primary constraint for large-scale training, driving rapid adoption of kernel optimizations.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL Daily Digest
**Date:** 2026-04-01
**Repository:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

---

### 1. Today's Highlights
The ROLL ecosystem is actively expanding its **Agentic RL** capabilities and **global accessibility**. Today's activity highlights a significant integration with the OpenReward platform and efforts to lower the barrier to entry for English-speaking developers through comprehensive architecture guides. Meanwhile, the community is pushing the boundaries of the newly supported **Qwen3.5** model, requesting advanced agentic examples and troubleshooting large-scale distributed training checkpoints.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **[Feature Request] Agentic Pipeline for Qwen3.5** [#406](https://github.com/alibaba/ROLL/issues/406)
    *   **Context:** Following the integration of Qwen3.5, users are requesting an official reference script (`run_agentic_pipeline_sokoban.sh`) to run the Sokoban agentic workflow.
    *   **Impact:** Indicates strong user demand for "out-of-the-box" agentic examples for the latest foundation models.
*   **[Bug] Checkpoint Save Failure in Qwen3.5-35B LoRA SFT** [#411](https://github.com/alibaba/ROLL/issues/411)
    *   **Context:** A training crash is occurring during checkpoint saves when fine-tuning the massive **Qwen3.5-35B-A3B** model using the `mcore-adapter`.
    *   **Impact:** Highlights stability challenges in distributed training setups (EMP=4, TP=1) for dense/large MoE architectures.

### 4. Key PR Progress
*   **[MERGED] Integration with OpenReward Environments** [#401](https://github.com/alibaba/ROLL/pull/401)
    *   **Summary:** This PR establishes [OpenReward](https://openreward.ai) as a first-class agentic environment. It allows ROLL agents to train on containerized tasks like *EndlessTerminals* directly via the OpenReward platform.
    *   **Significance:** massively expands the training task horizon for ROLL agents beyond static datasets.
*   **[OPEN] English Architecture Deep-Dive Guides** [#413](https://github.com/alibaba/ROLL/pull/413)
    *   **Summary:** Introduces a `docs/` directory containing English tutorials on ROLL's runtime, RLVR (RL with Verifiable Rewards), and dataflow, complete with Mermaid diagrams.
    *   **Significance:** A strategic move to broaden the user base by making the complex architecture accessible to non-Chinese speaking researchers.

### 5. Why This Project Matters in Today's RL Landscape
ROLL is positioning itself as a critical infrastructure layer for **Agentic RL** and **post-training** of large language models. By bridging the gap between massive models (like Qwen3.5-35B) and complex environments (like Sokoban or OpenReward), ROLL addresses the industry's shift from "chat" models to "action" models.

Today's activity underscores two major trends:
1.  **Environment Interoperability:** The merger of OpenReward support reflects the need for standardized, containerized benchmarks for Agent training.
2.  **Complexity Management:** As models scale (35B+ parameters) and architectures diversify (MoE, LoRA with Mcore), robust checkpointing and distributed configuration management remain the primary engineering bottlenecks.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem (2026-04-01)

## 1. Today's Highlights
The ROCK ecosystem saw significant activity focused on **configuration robustness** and **SDK maturation**. Key developments include the stabilization of `JobConfig` validation logic to prevent experiment ID mismatches, expanded TypeScript SDK capabilities for logging, and the closure of a major PR introducing a full TypeScript SDK client.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Data Integrity Risk in Redis (#712):** A bug was identified where exceptions during Redis status retrieval could result in empty values overwriting valid sandbox metadata in K8s environments.
    *   *Status:* Open
    *   *Link:* [alibaba/ROCK #712](https://github.com/alibaba/ROCK/issues/712)
*   **SDK Internationalization (#720):** A feature request was opened to translate `JobConfig` field descriptions (namespace/experiment_id) from Chinese to English to improve global accessibility.
    *   *Status:* Open
    *   *Link:* [alibaba/ROCK #720](https://github.com/alibaba/ROCK/issues/720)

## 4. Key PR Progress
*   **[Closed] TypeScript SDK Merged (#492):** A major contribution adding a full TypeScript SDK client (`rl-rock`) has been merged. It supports ESM/CommonJS, sandbox management, file system operations, and built-in Agent frameworks.
    *   *Link:* [alibaba/ROCK PR #492](https://github.com/alibaba/ROCK/pull/492)
*   **[Closed] Strict Config Validation (#717):** Implements strict validation for `experiment_id` and `namespace` in `JobConfig`, preventing "silent" mismatches between Sandbox and Harbor configurations.
    *   *Link:* [alibaba/ROCK PR #717](https://github.com/alibaba/ROCK/pull/717)
*   **[Closed] OSS Integration (#708, #715):** Enhanced Harbor integration with support for OSS artifact mirroring (`OssMirrorConfig`) and OSS environments.
    *   *Links:* [PR #708](https://github.com/alibaba/ROCK/pull/708), [PR #715](https://github.com/alibaba/ROCK/pull/715)
*   **[Open] Enhanced Logging for TS SDK (#711):** Proposed addition of comprehensive log management (list/download) for both active and destroyed sandboxes via the TypeScript SDK.
    *   *Link:* [alibaba/ROCK PR #711](https://github.com/alibaba/ROCK/pull/711)

## 5. Why This Project Matters in Today's RL Landscape
ROCK continues to position itself as a production-grade infrastructure for Reinforcement Learning. Today's updates emphasize **reliability** (fixing silent config mismatches and Redis data corruption) and **accessibility** (full TypeScript support and i18n improvements). By bridging the gap between Python-heavy research environments and production-grade cloud infrastructure (K8s, Harbor, OSS), ROCK lowers the barrier for deploying complex, distributed RL agents.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (2026-04-01)

Here is the analysis of the **THUDM/slime** repository activity for the past 24 hours.

## 1. Today's Highlights
The slime ecosystem is seeing significant activity around **GLM-5** integration and large-scale training stability. Key themes include:
*   **Hardware/Model Compatibility:** Multiple users are encountering issues running the new **GLM-5** (identified as `DeepseekV32ForCausalLM`) on specific hardware configurations (H20 GPUs) and weight formats.
*   **Infrastructure Stability:** A new WIP PR aims to resolve critical "Loss OOM" (Out of Memory) errors during training.
*   **Tooling:** Users are requesting better observability tools (WandB customization) and encountering JSON serialization errors in distributed rollout generation.

## 2. Releases
*   **No new releases** detected in the last 24 hours. The community remains focused on the `main` branch developments and recent version iterations (referenced as v0.2.2/v0.2.3 in issues).

## 3. Important Issues
*   **GLM-5 Training Instability (#1786):** A critical bug report indicates that training **GLM-5** on a 16x8 H20-141G cluster crashes during `offload_train` after the first step. The error manifests in `torch_memory_saver.pause()`, suggesting potential memory management conflicts with the offloading strategy in this specific hardware environment.
    *   *Link:* [Issue #1786](https://github.com/THUDM/slime/issues/1786)
*   **Architecture Support & AutoBridge (#1787):** Users attempting to load GLM-5 weights directly via `--megatron-to-hf-mode bridge` are facing `ValueError: Model architecture 'DeepseekV32ForCausalLM' is not yet supported`. This highlights a gap in the automatic weight conversion plugins for the latest model architectures.
    *   *Link:* [Issue #1787](https://github.com/THUDM/slime/issues/1787)
*   **Rollout Generation Failure (#1790):** Integration with **sglang v0.5.9** is causing a server crash (`503 Service Unavailable`) due to non-compliant JSON floats during rollout.
    *   *Link:* [Issue #1790](https://github.com/THUDM/slime/issues/1790)
*   **Eval-Only Mode Bug (#1785):** The `train.py` script crashes when `num_rollout==0` is set for evaluation-only runs.
    *   *Link:* [Issue #1785](https://github.com/THUDM/slime/issues/1785)

## 4. Key PR Progress
*   **[WIP] Fix Loss OOM (#1788):** Contributor `lilei199908` has opened a draft PR to address Out-Of-Memory errors specifically related to loss calculation. Visual evidence in the PR suggests a successful optimization that allows the process to proceed without memory overflow.
    *   *Status:* Open / Work in Progress
    *   *Link:* [PR #1788](https://github.com/THUDM/slime/pull/1788)

## 5. Why This Project Matters in Today's RL Landscape
**Slime** continues to position itself as a cutting-edge framework for **Reinforcement Learning on Large Language Models (LLMs)**, specifically targeting complex architectures like **GLM-5** and **DeepSeek** variants. The issues logged today reflect the current frontier of RL research: pushing the limits of **heterogeneous GPU clusters** (like H20s) and managing **memory offloading** for massive models. The active development around fixing OOM errors and supporting distinct architectures like `DeepseekV32ForCausalLM` makes slime a critical tool for researchers working on the next generation of reasoning models (e.g., Search-R1).

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-04-01

## 1. Today's Highlights
The AReaL ecosystem saw significant activity today, focusing heavily on **system scalability** and **multi-modal support**. Key developments include the introduction of a distributed data loading architecture to offload training bottlenecks and the integration of FP8 blockwise training. There is also a strong push toward expanding inference backend compatibility with full vLLM support and LoRA integration via Megatron.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Scalability Bottleneck Identified ([#1117](https://github.com/inclusionAI/AReaL/issues/1117)):** A proposal to optimize `RTensor` (remote tensor handles) with caching and IPC backends. This aims to reduce overhead when retrieving tensor metadata from remote processes.
*   **Distributed Data Loading ([#1111](https://github.com/inclusionAI/AReaL/issues/1111)):** Highlighting the cost of centralized data loading in single-controller modes, proposing a dedicated `DataController` to maintain backward compatibility while distributing the workload.
*   **NPU VLM Training Instability ([#1116](https://github.com/inclusionAI/AReaL/issues/1116)):** Users report JSON serialization errors (`JpegImageFile` not serializable) on NPU backends, suggesting a need to backport serialization fixes from `main` to the `ascend` branch.
*   **Multi-Agent Training Proposal ([#1114](https://github.com/inclusionAI/AReaL/issues/1114)):** A feature request to integrate "Dr. MAS" for multi-LLM training scenarios, expanding AReaL's scope beyond single-agent RL.

## 4. Key PR Progress
### New Features & Architectural Improvements
*   **Distributed Data Service ([#1120](https://github.com/inclusionAI/AReaL/pull/1120)):** Implements a 3-tier microservice (Gateway → Router → Worker) to offload dataset processing from trainers to CPU workers.
*   **LoRA RL Training via Megatron ([#1123](https://github.com/inclusionAI/AReaL/pull/1123)):** Enables LoRA fine-tuning within the Megatron backend, bridging weights via `megatron-bridge`.
*   **RTensor Client-Side Caching ([#1122](https://github.com/inclusionAI/AReaL/pull/1122)):** Introduces a fetch buffer to avoid redundant network round-trips during `to_local()` calls, optimizing data locality.
*   **Experiment Tracking ([#1113](https://github.com/inclusionAI/AReaL/pull/1113)):** Adds support for **Trackio** (Hugging Face) as a logging backend.

### Infrastructure & Stability
*   **FP8 Blockwise Training Merged ([#1087](https://github.com/inclusionAI/AReaL/pull/1087)):** **[CLOSED]** Enabled 128×128 FP8 matmuls via `torchao` for the Archon engine, supporting MoE and dense layers with BF16 master weights.
*   **vLLM Backend Parity ([#1112](https://github.com/inclusionAI/AReaL/pull/1112)):** **[CLOSED]** Completed full integration of the vLLM backend into the inference service, achieving feature parity with SGLang.
*   **Online Inference Service ([#1121](https://github.com/inclusionAI/AReaL/pull/1121)):** Adds online rollout support for Human-in-the-loop (HITL) workflows.
*   **VLM Support Fixes ([#1098](https://github.com/inclusionAI/AReaL/pull/1098)):** **[CLOSED]** Restored SGLang VLM training by fixing FSDP parameter mapping.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a high-performance, production-ready framework for **post-training and fine-tuning of Large (and Multi-modal) Language Models**. Today's updates underscore a shift from basic algorithmic support to **system-level optimization**—specifically addressing the "hidden" bottlenecks of RLHF/RL workloads like data loading latency, inter-process communication (IPC), and memory footprint via FP8.

By simultaneously advancing **heterogeneous hardware support** (NPU fixes, FP8) and **inference flexibility** (vLLM, LoRA, Online Rollouts), AReaL is lowering the barrier to entry for complex, distributed RL training loops that require interaction with live environments or human feedback.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-04-01

## 1. Today's Highlights
The TRL ecosystem is buzzing with activity following the landmark release of **v1.0.0**. The focus has shifted toward optimizing GRPO (Group Relative Policy Optimization) and enhancing multimodal/agentic capabilities. Key themes include efficiency gains via vLLM integration, hardware expansion (Neuron), and critical bug fixes for distributed training (ZeRO3).

## 2. Releases
*   **[v1.0.0](https://github.com/huggingface/trl/releases/tag/v1.0.0)**
    *   **Overview:** Major stable release.
    *   **Headline Feature:** Introduction of **Asynchronous GRPO**, decoupling generation to accelerate training loops.
    *   **Blog:** [Hugging Face Blog Post](https://hf.co/blog/trl-v1)

## 3. Important Issues
*   **[Issue #5415](https://github.com/huggingface/trl/issues/5415): Catastrophic Backtracking in `qwen3_schema`**
    *   **Impact:** High. Training hangs indefinitely during GRPO with tool calling when the model generates degenerate (repetitive) completions due to regex backtracking.
    *   **Root Cause:** `parse_response` regex inefficiency.
*   **[Issue #4899](https://github.com/huggingface/trl/issues/4899): ZeRO3 Incompatibility**
    *   **Impact:** High. RLOO and GRPO fail with `IndexError: pop from an empty deque` when using DeepSpeed ZeRO3.
*   **[Issue #5412](https://github.com/huggingface/trl/issues/5412): Redundant vLLM Forward Pass**
    *   **Impact:** Performance. Unnecessary gradient-disabled forward pass computed during on-policy vLLM training.

## 4. Key PR Progress
*   **Efficiency & Infrastructure**
    *   **[PR #5417](https://github.com/huggingface/trl/pull/5417):** Implements sparse delta weight syncing using **Xet buckets** for vLLM (reduces sync size from 1.2GB to ~30MB).
    *   **[PR #5413](https://github.com/huggingface/trl/pull/5413):** Fixes the redundant forward pass for on-policy importance sampling correction.
    *   **[PR #5125](https://github.com/huggingface/trl/pull/5125):** Adds **AWS Neuron** integration for SFT training.
*   **New Capabilities**
    *   **[PR #5407](https://github.com/huggingface/trl/pull/5407):** Introduces `DistillationTrainer` with JSD loss and support for on/off-policy mixing.
    *   **[PR #5411](https://github.com/huggingface/trl/pull/5411):** Adds **JEPO trainer** (Joint Embedding Predictive Architecture?).
    *   **[PR #5398](https://github.com/huggingface/trl/pull/5398):** Enables per-sample tool filtering in GRPO for agentic workflows.
    *   **[PR #5406](https://github.com/huggingface/trl/pull/5406):** Adds length-normalized sigmoid loss (Tulu-3 style) to DPO.

## 5. Why This Project Matters in Today's RL Landscape
TRL v1.0.0 marks a maturation point for production-grade LLM alignment. By solving the "generation bottleneck" via **Asynchronous GRPO** and optimizing distributed memory via **sparse syncing (PR #5417)**, TRL is actively lowering the hardware barrier for advanced RLHF. Furthermore, the rapid patching of tool-calling hangups (Issue #5415) and the introduction of specialized distillation trainers signal a shift from general-purpose RL libraries to highly specialized, high-throughput alignment engines required for the next generation of agentic and multimodal models.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

Here is the RL Daily Digest for **2026-04-01**.

### 1. Today's Highlights
Activity on the Tianshou repository was minimal today, characterized by zero new issues or releases. The sole update involved the administrative closure of a Pull Request related to deterministic policy execution.

### 2. Releases
**None.**
No new stable or beta versions were released in the last 24 hours.

### 3. Important Issues
**None.**
No new bugs, feature requests, or documentation updates were raised by the community in the last 24 hours.

### 4. Key PR Progress
The repository saw maintenance activity on a long-standing code quality proposal.

*   **[CLOSED] [#1066 Using dist.mode instead of logits.argmax](https://github.com/thu-ml/tianshou/pull/1066)**
    *   **Author:** arnaujc91
    *   **Details:** This PR refactored the logic for deterministic action selection. It shifted the implementation from manually selecting `logits.argmax` (the output of the actor network) to utilizing the native `dist.mode` property of the PyTorch distribution object.
    *   **Significance:** This change makes the codebase more compact and adheres to standard PyTorch distribution APIs, likely improving readability and reducing potential sources of error in actor-critic architectures.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a critical infrastructure project in the Reinforcement Learning ecosystem. Unlike higher-level "agent" libraries that abstract away the math, Tianshou provides a highly modular, PyTorch-native framework for pipeline construction. Its value proposition lies in its **BatchEnv** environment handling and efficient replay buffer management. For researchers in 2026, it serves as a bridge between raw algorithm implementation and scalable training, offering the flexibility required for custom SOTA research while handling the heavy lifting of distributed sampling.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-04-01

## 1. Today's Highlights
Activity on the `verl` repository remains high with **49 PRs updated** and **13 Issues active** in the last 24 hours. The focus is clearly shifting toward **Multi-modal RL** (specifically video generation via FlowGRPO) and **infrastructure robustness** (NPU support and checkpointing fixes). Significant effort is also being directed toward integrating external ecosystems like NVIDIA NeMo.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Multi-Modal & Video RL Roadmap:** The [2026 Q2 Roadmap (Issue #5755)](https://github.com/verl-project/verl/issues/5755) outlines major architectural upgrades for the Rollout Engine, including vLLM-Omni enhancements (TP/DP support) and multi-modal generation capabilities.
*   **Critical Hangs & Memory Leaks:**
    *   Users report [asynchronous training hanging (Issue #5815)](https://github.com/verl-project/verl/issues/5815) and [checkpoints stalling during resume on NPU (Issue #5827)](https://github.com/verl-project/verl/issues/5827).
    *   A consistent **20GB host memory leak** was identified in the Megatron backend during checkpointing on GB200 hardware [(Issue #5665)](https://github.com/verl-project/verl/issues/5665).
*   **FSDP Buffer Mismatch:** [Issue #5688](https://github.com/verl-project/verl/issues/5688) highlights a critical mismatch when transferring buffers (e.g., DeepSeek V3 specific biases) from FSDP to rollout engines.

## 4. Key PR Progress
*   **FlowGRPO & Diffusion Models:** [PR #5802](https://github.com/verl-project/verl/pull/5802) introduces the FlowGRPO algorithm and Diffusers+FSDP engine support, signaling a major expansion from LLMs to diffusion-based video generation RL.
*   **Ecosystem Integrations:**
    *   **NVIDIA NeMo:** [PR #5833](https://github.com/verl-project/verl/pull/5833) adds support for NeMo Gym environments, enabling multi-turn/tool-calling agents.
    *   **Ascend NPU:** [PR #5680](https://github.com/verl-project/verl/pull/5680) adds the MindspeedLLM backend, and [PR #5830](https://github.com/verl-project/verl/pull/5830) adapts on-policy distillation for Ascend chips.
*   **Performance & Bug Fixes:**
    *   **vLLM-Omni:** [PR #5809](https://github.com/verl-project/verl/pull/5809) updates to the 0.18.0 release, adding Tensor Parallelism support.
    *   **TP/CP Support:** [PR #5826](https://github.com/verl-project/verl/pull/5826) adds Context Parallelism support for the `bshd` format.
    *   **Metric Accuracy:** [PR #5798](https://github.com/verl-project/verl/pull/5798) (merged) fixed a critical loss denominator bug causing losses to be underestimated by a factor of `dp_size²`.

## 5. Why This Project Matters in Today's RL Landscape
`verl` is evolving rapidly from a pure LLM PPO framework into a **unified post-training platform**. Today's updates demonstrate two key strategic shifts:
1.  **Beyond Text:** The integration of FlowGRPO and vLLM-Omni indicates that `verl` is positioning itself as the go-to open-source stack for **Video Generation RL**, a field currently dominated by proprietary black boxes.
2.  **Hardware Agnosticism:** With extensive fixes for NPU (Ascend) and specialized NVIDIA architectures (GB200), `verl` is decoupling RL workloads from specific hardware vendors, which is crucial for global adoption in 2026.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-04-01

## 1. Today's Highlights
The AllenAI Open Instruct repository saw a significant surge in architectural refactoring today, with **15 PRs updated** and no new issues. The primary focus is a strategic migration toward **OLMo-core native infrastructure**. This involves deprecating legacy training scripts in favor of more efficient, unified implementations for SFT, DPO, and GRPO. Additionally, the ecosystem is expanding its hardware and model support boundaries with updates for Flash Attention 4 and Qwen3.5 Vision-Language Models (VLMs).

## 2. Releases
**None.** (No new releases were tagged in the last 24 hours).

## 3. Important Issues
**No new issues.**
*Analysis:* The lack of new issues amidst heavy PR activity suggests a mature, maintainer-driven development cycle currently focused on internal refactoring and feature stabilization rather than bug triage.

## 4. Key PR Progress

### Architectural Migration to OLMo-core
The core of today's activity revolves around consolidating training utilities to align with the `OLMo-core` framework.
*   **Unified Configs & SFT:** PR [#1576](https://github.com/allenai/open-instruct/pull/1576) extracts shared config dataclasses, while PR [#1579](https://github.com/allenai/open-instruct/pull/1579) introduces a native OLMo-core SFT implementation (`olmo_core_finetune.py`). This marks a shift away from legacy scripts.
*   **Deprecation:** Consequently, the legacy `finetune.py` is receiving a deprecation warning via PR [#1574](https://github.com/allenai/open-instruct/pull/1574).
*   **RL & Alignment Refactoring:**
    *   **DPO:** Refactored to use shared configs in PR [#1577](https://github.com/allenai/open-instruct/pull/1577).
    *   **GRPO:** PR [#1578](https://github.com/allenai/open-instruct/pull/1578) inlined utilities and renamed experiment configs, while PR [#1552](https://github.com/allenai/open-instruct/pull/1552) (closed) aligned metrics between legacy and fast implementations.

### Ecosystem & Infrastructure
*   **Flash Attention 4:** PR [#1580](https://github.com/allenai/open-instruct/pull/1580) adds support for Flash Attention 4, establishing a priority hierarchy (FA4 > FA3 > FA2 > SDPA).
*   **Qwen3.5 VLM:** PR [#1568](https://github.com/allenai/open-instruct/pull/1568) introduces support for Qwen3.5 Vision-Language Models, handling specific compatibility issues with Transformers v5.4.0 and Liger-Kernel.
*   **RL Environments:** PR [#1492](https://github.com/allenai/open-instruct/pull/1492) proposes `SWERLSandboxEnv`, a Docker-based environment for per-sample task evaluation, critical for code generation agents.

### Documentation & Maintenance
*   **Docs:** PR [#1546](https://github.com/allenai/open-instruct/pull/1546) (closed) added documentation for tool use and RL environments, while PR [#1575](https://github.com/allenai/open-instruct/pull/1575) removes stale tool training docs.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct acts as the bleeding-edge implementation layer for the AllenAI OLMo family. Today's digest reveals a critical maturation step: **standardizing the training stack**. By moving SFT, DPO, and GRPO onto shared `OLMo-core` utilities, the project reduces technical debt and ensures that advancements in one algorithm (e.g., GRPO metric improvements) propagate across the entire stack.

The integration of **Flash Attention 4** and **Qwen3.5 VLMs** signals that the project is keeping pace with the rapid hardware and model capability evolution, specifically targeting memory efficiency and multi-modal reasoning. Furthermore, the introduction of **`SWERLSandboxEnv`** highlights a trend toward "agentic RL"—where models must interact with sandboxed environments (like Docker containers) to solve complex tasks like software engineering, moving beyond static preference optimization.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

Here is the RL Daily Digest for **2026-04-01**.

### 1. Today's Highlights
The **rl_games** repository saw minimal structural activity today (no new releases or PRs), but discussion remains highly active regarding algorithm performance parity. A significant ongoing thread comparing **Soft Actor-Critic (SAC)** implementation against Stable Baselines3 (SB3) continues to draw attention, highlighting potential issues in convergence speed for complex continuous control tasks.

### 2. Releases
*   **None** (No new tags or releases published on 2026-04-01).

### 3. Important Issues
*   **Suspected Performance Bottleneck in SAC Implementation**
    *   **Issue:** [#341 [OPEN] ?: I think something is not OK with SAC algo](https://github.com/Denys88/rl_games/issues/341)
    *   **Context:** A user reported that a custom drone navigation environment (motor-only control) converges in 1M iterations using **SB3** but fails to show progress when ported to **rl_games**.
    *   **Community Activity:** This is a high-engagement thread (25 comments updated as of yesterday), suggesting a possible discrepancy in hyperparameter defaults or implementation logic between the two libraries. This is a critical watchpoint for users migrating from SB3.

### 4. Key PR Progress
*   **None** (No pull requests updated in the last 24 hours).

### 5. Why This Project Matters in Today's RL Landscape
**rl_games** is a staple library in the Reinforcement Learning ecosystem, particularly renowned for its high-performance implementation of **PPO** (Proximal Policy Optimization) using PyTorch. It is widely used as the backend for NVIDIA's **Isaac Gym** and various legged robotics research projects. While it excels at大规模 parallel sampling, issues like #341 highlight the ongoing challenge of ensuring that diverse algorithm implementations (like SAC) maintain the same ease-of-use and stability found in more generalized libraries like SB3.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-04-01

### 1. Today's Highlights
Activity on the Gymnasium repository was minimal today, characterized by a complete halt in new issues and no new releases. The sole activity was a technical pull request addressing a type hint regression in the `TransformObservation` wrapper, indicating that maintainers are refining API stability rather than introducing new features.

### 2. Releases
**None.**
No new stable or pre-release versions were published in the last 24 hours.

### 3. Important Issues
**None.**
Zero issues were opened or updated within the reporting period, suggesting a period of stability or reduced user-reported friction.

### 4. Key PR Progress
A single PR was updated, focusing on backward compatibility and correct typing syntax.

*   **[PR #1552](https://github.com/Farama-Foundation/Gymnasium/pull/1552) Fix TransformObservation __init__()**
    *   **Status:** Open
    *   **Author:** solismortis
    *   **Summary:** This fix addresses a regression in the `TransformObservation` wrapper where `observation_space` was incorrectly typed as mandatory. The author corrected the type hint syntax, replacing the pipe operator (`|`) with a default assignment (`=`), ensuring the argument remains optional. This prevents breaking changes in legacy code where the observation space is inferred rather than explicitly passed.

### 5. Why This Project Matters in Today's RL Landscape
As the hard-fork successor to OpenAI Gym, **Gymnasium** remains the foundational layer for nearly all reinforcement learning research. It provides the standard API (the `reset`, `step`, and `render` loop) that connects environments to training algorithms (like PPO or DQN). Fixes like those in PR #1552 are critical; they ensure that the "plumbing" of RL research remains robust and backward-compatible, preventing subtle type errors from halting complex training pipelines.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>