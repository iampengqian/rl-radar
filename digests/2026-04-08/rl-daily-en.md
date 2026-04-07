# RL Open Source Daily Digest 2026-04-08

> Generated: 2026-04-07 22:09 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-04-08 shows clear stratification between "LLM Post-Training" frameworks and "Classical RL" libraries. The dominant activity is concentrated in frameworks adapting Reinforcement Learning for Large Language Models (LLMs), specifically targeting Qwen3.5 and Llama4 architectures. These projects are aggressively iterating on infrastructure to support heterogeneous hardware (NPU/AMD), efficient inference (FP8), and agentic workflows. In contrast, traditional RL libraries (Stable Baselines3, CleanRL, Gymnasium) remain dormant or focused on minor maintenance, indicating a shift in community focus toward LLM alignment.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 16 | 32 | 0 | **High** - Roadmap alignment, major architectural cleanup, NPU support. |
| **TRL** | 3+ | 10+ | 0 | **High** - Aggressive push on Tool Calling/Agent templates and Distillation. |
| **AReaL** | 1+ | 13 | 0 | **High** - Infrastructure refactor (IPC, Backend decoupling), MARL features. |
| **slime** | 11 | 10 | 0 | **Medium** - Focus on NPU, legacy GPU support, and MoE context parallelism. |
| **ROCK** | 3 | 6 | 0 | **Medium** - CI stability and observability (OTLP metrics). |
| **Open Instruct** | 1 | 5 | 0 | **Medium** - DeepSpeed checkpointing fixes and SWE-agent environments. |
| **ROLL** | 1 | 2 | 0 | **Low** - MoE instability debugging and error handling refactor. |
| **OpenRLHF** | 0 | 2 | 0 | **Low** - Algorithmic expansion (Evolutionary Strategies). |
| **Stable Baselines3**| 1 | 0 | 0 | **Low** - Single inquiry on custom feature extractors. |
| **Others** | 0 | 0 | 0 | **Dormant** - CleanRL, Gymnasium, PettingZoo, Tianshou, torchtune. |

## Shared Research & Engineering Directions

### Research & Algorithmic Trends
*   **Evolutionary & Black-Box Optimization:** OpenRLHF proposed integrating high-performance Evolutionary Strategies (ES) as an alternative to gradient-based alignment, reflecting a trend toward hybrid training methods for LLMs.
*   **On-Policy Distillation:** Both TRL (`DistillationTrainer`) and verl (OPD with SGLang) are standardizing "online" distillation techniques where a teacher model guides the RL policy during training.
*   **Agentic RL & Tool Use:** TRL is standardizing chat templates for tool calling (Qwen3-VL, GLM-4-MoE), while Open Instruct introduced `SWERLSandboxEnv` for code-execution agents, signaling a shift from static text generation to interactive environments.

### Engineering & Infrastructure Trends
*   **Hardware Agnosticism (NPU & Legacy GPU):** There is a concerted effort to break NVIDIA's monopoly. **verl** and **slime** both merged significant patches for Ascend NPU support, while **slime** added fallbacks for older GPUs (A100/RTX 4090) to handle head-dimension limits.
*   **Low Precision & Memory Optimization:** FP8 utilization is a priority across the board. **verl** is tackling FP8 inference in rollouts, while **slime** is debugging FP8 quantization for massive models (GLM4.7-355B).
*   **Backend Decoupling:** Projects are moving away from monolithic dependencies. **AReaL** split vLLM/SGLang dependencies, and **verl** removed 3,000+ lines of legacy worker code to unify backends.
*   **Inter-Process Communication (IPC):** **AReaL** introduced zero-copy SharedMemory IPC, and **slime** proposed delta compression for weight syncs, directly targeting the throughput bottlenecks in distributed RL.

## Differentiation Analysis

*   **verl vs. OpenRLHF vs. TRL (The Alignment Stack):**
    *   **verl** is positioning itself as the "Production OS" for RLHF, focusing heavily on architectural cleanup (removing legacy workers) and cross-platform hardware support (NPUs). It targets distributed systems engineers.
    *   **TRL** acts as the "Agile Researcher's Toolkit," focusing on rapid integration of new model families (GPT-OSS, GLM-4-MoE) and standardizing agent interactions via templates.
    *   **OpenRLHF** is exploring "Algorithmic Frontiers," differentiating by adding Evolutionary Strategies alongside standard PPO/DPO.

*   **AReaL vs. ROCK (Infrastructure Specialists):**
    *   **AReaL** is optimizing the "Data Plane" (IPC, memory sharing, decoupled engines) to maximize throughput for single-controller training.
    *   **ROCK** focuses on the "Control Plane" (Observability, K8s integration, Sandbox metadata), catering to enterprise deployment and stability.

*   **slime (THUDM):** Distinguishes itself by tackling "Frontier Model Scaling" problems specifically for MoE architectures (Qwen3.5) and non-standard hardware, acting as a testbed for massive-scale models before they become mainstream.

## Community Momentum & Maturity
*   **Momentum Leaders:** **verl** and **TRL** show the highest velocity. **verl** demonstrates "Maturing Scale" (cleaning up technical debt for v0.9), while **TRL** shows "Expanding Scope" (adding distillation and tool-calling).
*   **Emerging Contenders:** **AReaL** and **slime** are gaining traction by solving hard systems problems (NPU support, IPC) that generic frameworks avoid.
*   **Mature/Stable:** **Stable Baselines3** and **Gymnasium** are in maintenance mode. The lack of activity is not a negative signal but rather an indicator of stability for classical RL tasks, which are distinct from the chaotic development pace of LLM RL.

## Trend Signals
1.  **The Rise of the "Agent" Abstraction:** The convergence of tool-calling templates (TRL) and sandbox environments (Open Instruct) indicates that 2026 is the year RL frameworks officially pivot from "Reward Modeling" to "Agent Training."
2.  **FP8 as the New Standard:** The proliferation of FP8-related issues and PRs (verl, slime) suggests that BF16 is becoming insufficient for the memory/compute requirements of 100B+ parameter models.
3.  **NPU Ecosystem Breakout:** The simultaneous addition of NPU support in verl and slime suggests a weakening reliance on CUDA-only ecosystems, likely driven by hardware supply constraints or cost optimization in China (Ascend NPUs).
4.  **Sandboxing for Code RL:** The integration of Dockerized code execution environments (SWERL in Open Instruct) signals that "Code" is becoming the primary domain for verifying RL rewards objectively, moving away from subjective preference modeling.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL (2026-04-08)

Here is the daily analysis for the **ROLL (RL Open Language Learning)** ecosystem.

## 1. Today's Highlights
The ROLL ecosystem saw significant activity regarding **extensibility and stability**. A new visualization backend integration ([Trackio](https://github.com/gradio-apps/trackio)) was successfully merged, and a critical refactor was proposed to replace brittle `assert` statements with a robust custom exception system. Meanwhile, users are actively testing the limits of the Qwen3.5-35B MoE architecture using MCore adapters.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Bug] MoE Training Instability with Mcore-Adapter** (Issue [#416](https://github.com/alibaba/ROLL/issues/416))
    *   **Context:** A user reported errors when fine-tuning `Qwen3.5-35B-A3B` (Mixture of Experts) with `batch_size > 1`.
    *   **Technical Detail:** The configuration utilizes 4 GPUs with `EXPERT_MODEL_PARALLEL_SIZE=4`. The failure occurs specifically during LoRA SFT via `mcore-adapter`, suggesting potential memory overhead or graph fragmentation issues when handling larger batch sizes in the expert parallel dimension.

## 4. Key PR Progress
*   **[MERGED] Trackio Integration** (PR [#404](https://github.com/alibaba/ROLL/pull/404))
    *   **Summary:** This PR finalizes the integration of `Trackio` as an alternative experiment tracker. It offers a lightweight, offline-first API compatible with Wandb, with visualization hosted via Hugging Face Spaces. This reduces dependency on external SaaS platforms.
    *   **Status:** Merged on 2026-04-07.

*   **[OPEN] Refactoring Error Handling** (PR [#414](https://github.com/alibaba/ROLL/pull/414))
    *   **Summary:** A major refactor aiming to strip out generic `assert` statements in favor of a new structured exception system (`roll/utils/exceptions.py`).
    *   **Impact:** This will provide better context for debugging distributed training failures—a critical improvement for production-level RL pipelines where root cause analysis is often difficult.

## 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and advanced MoE architectures, **infrastructure robustness** becomes the bottleneck. ROLL (developed by Alibaba) bridges the gap between raw model capabilities and scalable training.

*   **MoE Support:** The issues reported today regarding `Qwen3.5-35B` highlight the complexity of tuning MoE models with RL. ROLL is one of the few frameworks actively tackling the integration of MoE parallelism with RL workflows.
*   **Observability:** The integration of lightweight tools like Trackio signals a trend toward **self-hosted, privacy-preserving experiment tracking**, essential for enterprise RL adoption.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK (2026-04-08)

Here is the analysis of the ROCK (Reinforcement Learning with Knowledge and Operations) ecosystem for April 8, 2026.

## 1. Today's Highlights
The ROCK ecosystem is currently focused on **infrastructure stability and observability**. The community identified and proposed a fix for a broken CI pipeline caused by an upstream dependency issue. Simultaneously, there is a marked push towards enhancing system observability, specifically regarding disk usage metrics and moving monitoring processes to dedicated subprocesses (`rocklet`).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **CI Instability Identified ([#746](https://github.com/alibaba/ROCK/issues/746)):**
    *   **Details:** The GitHub Actions CI test flow is currently broken.
    *   **Impact:** Blocks current development validation.
*   **Observability Enhancements:**
    *   **Worker Metrics ([#741](https://github.com/alibaba/ROCK/issues/741)):** Request for `rocklet` to report disk usage (docker root dir & log dir) via OTLP.
    *   **Performance Optimization ([#739](https://github.com/alibaba/ROCK/issues/739)):** Proposal to decouple sandbox metrics reporting by moving it to a `rocklet` subprocess, likely to reduce latency or interference in the main training loop.

## 4. Key PR Progress
*   **Critical Fixes:**
    *   **[OPEN] [CI Fix] ([#745](https://github.com/alibaba/ROCK/pull/745)):** Proposed fix for the broken CI by pinning `langgraph-prebuilt` to version 1.0.8. This addresses the upstream breakage noted in Issue #746.
*   **Feature Implementations:**
    *   **[OPEN] [OTLP Metrics] ([#742](https://github.com/alibaba/ROCK/pull/742)):** Implements worker-level disk usage metrics (closing #741).
    *   **[OPEN] [Architecture Refactor] ([#740](https://github.com/alibaba/ROCK/pull/740)):** Moves sandbox metrics reporting to a `rocklet` subprocess (closing #739).
*   **Infrastructure & Persistence:**
    *   **[OPEN] [Metadata Persistence] ([#730](https://github.com/alibaba/ROCK/pull/730)):** Introduces support for persisting sandbox metadata to a database.
    *   **[OPEN] [K8s Refactor] ([#744](https://github.com/alibaba/ROCK/pull/744)) & [Info Fix] ([#743](https://github.com/alibaba/ROCK/pull/743)):** Continued work on refactoring the K8s API client informer and fixing sandbox info retrieval (related to #712).
    *   **[CLOSED] [User Agent] ([#670](https://github.com/alibaba/ROCK/pull/670)):** Merged modification to the K8s client user agent for better audit log clarity.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from isolated research scripts to massive, distributed production systems, the bottleneck shifts from algorithm design to **infrastructure scalability**. Today's activity in ROCK highlights a mature RL platform:
1.  **Operational Maturity:** The integration of OTLP metrics and `rocklet` subprocess management reflects a system designed for high-availability and low-latency monitoring, essential for large-scale training clusters.
2.  **Ecosystem Resilience:** The rapid response to the `langgraph` dependency issue demonstrates a robust maintenance workflow, crucial for enterprises relying on these libraries for production AI agents.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-04-08

## 1. Today's Highlights
Activity in the `slime` repository remains high with 11 issues and 10 PRs updated. The focus is heavily on **infrastructure scalability** (NPU support, non-Docker installation) and **compatibility with new model architectures**, specifically **Qwen3.5** (MoE and VLM variants) and **Gemma 4**. Significant strides were made in fixing context parallelism for MoE models and enabling RL training on older GPU architectures.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Usability Demand:** There is strong community demand (+4 👍) for **non-Docker installation support** ([#1793](https://github.com/THUDM/slime/issues/1793)), indicating users are struggling to deploy `slime` in restricted or custom environments.
*   **Qwen3.5 & Vision Issues:** Users are encountering initialization errors with Qwen3.5 ([#1730](https://github.com/THUDM/slime/issues/1730)) and conversion errors regarding `vision_model` parameters ([#1815](https://github.com/THUDM/slime/issues/1815)).
*   **FP8 Rollout Incompatibility:** A significant bug was reported regarding FP8 rollout for GLM4.7-355B, where SGLang’s block FP8 quantization conflicts with partition sizes ([#1796](https://github.com/THUDM/slime/issues/1796)).

## 4. Key PR Progress
*   **Qwen3.5 MoE Optimization:** PR [#1816](https://github.com/THUDM/slime/pull/1816) (Closed/Merged) introduced a hybrid Context Parallelism v1 path for Qwen3.5 MoE, optimizing zigzag CP shards into contiguous per-rank sequences.
*   **Hardware Compatibility:**
    *   **NPU Support:** PR [#1750](https://github.com/THUDM/slime/pull/1750) merged patches for Ascend NPU compatibility, covering the training stack from Megatron to SGLang.
    *   **Legacy GPU Support:** PR [#1808](https://github.com/THUDM/slime/pull/1808) adds a fallback to `flash_attn` for Qwen3.5 on pre-Hopper GPUs (e.g., A100, RTX 4090) to handle `head_dim=256` limitations in Transformer Engine.
*   **Performance & Correctness:**
    *   PR [#1806](https://github.com/THUDM/slime/pull/1806) proposes **delta compression for weight sync**, potentially significantly reducing communication overhead in distributed RL.
    *   PR [#1809](https://github.com/THUDM/slime/pull/1809) fixed a critical `TypeError` regarding missing `position_ids` in log-prob forward steps.

## 5. Why This Project Matters in Today's RL Landscape
`slime` is positioning itself as a cutting-edge framework for large-scale LLM post-training. Today's activity highlights two critical trends in the RL ecosystem:
1.  **Hardware Agnosticism:** By merging NPU support and fixing issues for pre-Hopper GPUs, the project is democratizing access to large-scale RL training beyond the latest H100 clusters.
2.  **Efficient Scaling:** The development of delta compression ([#1806](https://github.com/THUDM/slime/pull/1806)) and advanced MoE context parallelism ([#1816](https://github.com/THUDM/slime/pull/1816)) addresses the massive computational cost of RLHF, making frontier model training cheaper and faster.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-04-08

## 1. Today's Highlights
Activity on the AReaL repository surged today with **13 updated Pull Requests**, signaling a major push towards infrastructure flexibility and multi-backend support. The core focus is on decoupling dependencies (separating vLLM/SGLang) and optimizing inter-process communication (IPC). A critical bug regarding Multimodal (MM) cache desynchronization was identified and immediately addressed in PR #1144.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[#1143 [Bug] MM Cache Desynchronization](https://github.com/inclusionAI/AReaL/issues/1143)**
    *   **Summary:** A consistency issue was reported where `pause_generation(clear_cache=True)` clears the engine receiver's cache but fails to clear the frontend renderer's cache. This leads to potential crashes or state mismatches during rollout pauses.
    *   **Impact:** Affects stability in multimodal RL workflows; fix already proposed in PR #1144.

## 4. Key PR Progress

### Infrastructure & Performance
*   **[#1133 SharedMemory IPC Fast-path](https://github.com/inclusionAI/AReaL/pull/1133)** (Reviewed): Introduces zero-copy inter-process tensor transfer via POSIX SharedMemory for `RTensor` shards on the same node. This bypasses HTTP overhead, significantly optimizing data throughput for single-controller training.
*   **[#1120 Distributed Data Loading Service](https://github.com/inclusionAI/AReaL/pull/1120)** (Open): Implements a controller/router/worker architecture for distributed data loading, cleaning up stale arguments and improving RPC guards.

### Engine & Backend Flexibility
*   **[#1141 Split vLLM/SGLang Dependencies](https://github.com/inclusionAI/AReaL/pull/1141)** (Open): A strategic move to split dependency management into `pyproject.vllm.toml` and `pyproject.toml` (SGLang). This decouples the backends, reducing environment bloat and CI complexity.
*   **[#1140 FSDP Engine `from_pretrained`](https://github.com/inclusionAI/AReaL/pull/1140)** (Open): Decouples `FSDPEngine` from the rigid config dataclass system, allowing direct engine construction—a boost for usability and debugging.
*   **[#1123 LoRA RL-Training in Megatron](https://github.com/inclusionAI/AReaL/pull/1123)** (Closed): Merged support for LoRA fine-tuning via a `megatron-bridge`, essential for scaling multi-node MoE models.

### Workflow & Bugfixes
*   **[#1144 Fix vLLM MM Cache Sync](https://github.com/inclusionAI/AReaL/pull/1144)** (Open): Directly addresses Issue #1143 by ensuring both renderer and engine caches are cleared synchronously during generation pauses.
*   **[#1129 MARL Phase 1](https://github.com/inclusionAI/AReaL/pull/1129)** (Updated): Ongoing work on Multi-Agent Reinforcement Learning infrastructure, adding per-agent reward grouping and specialized verifiers for math reasoning.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **hardware-aware, agnostic RL infrastructure** rather than just a training library. By optimizing IPC paths (#1133) and decoupling inference backends like vLLM and SGLang (#1141), the project addresses the two biggest bottlenecks in modern LLM RL: **throughput latency** and **environment rigidity**. The integration of MARL workflows (#1129) and scalable engines like Megatron (#1123) confirms its trajectory towards becoming a full-stack solution for training next-generation, reasoning-capable agents.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Transformer Reinforcement Learning)
**Date:** 2026-04-08

## 1. Today's Highlights
Activity in the TRL ecosystem today is dominated by a massive architectural push towards **Tool Calling** and **Agent training**. There is a concerted effort to standardize chat templates across major model families (Qwen3-VL, GLM-4-MoE, GPT-OSS) to support structured tool use. Concurrently, several "cleanup" PRs were merged to deprecate legacy features (truncation modes), streamlining the codebase for future stability.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **FSDP Compatibility with GKD:** Users are reporting `RuntimeError` regarding device placement when combining `GKDTrainer` with FSDP (Fully Sharded Data Parallel), indicating a lingering distributed training bug. ([#2580](huggingface/trl Issue #2580))
*   **GRPO Training Instability:** Users flagged issues where `GRPOTrainer` results in zero loss and rewards, pointing to potential configuration or data formatting pitfalls in the pipeline. ([#3452](huggingface/trl Issue #3452))
*   **Documentation Request:** A call for clearer hardware requirements in the "Quick Start" guide to prevent OOM errors for new users. ([#4968](huggingface/trl Issue #4968))

## 4. Key PR Progress
### Feature: Tool Calling & Agent Training
*   **Template Standardization:** Refactored chat templates from inline strings to `.jinja` files ([#5459](huggingface/trl PR #5459)) and added support for `&#123;&#37; generation &#37;&#125;` markers required for `assistant_only_loss` ([#5470](huggingface/trl PR #5470)).
*   **Model Support:** Opened PRs to support tool calling for **Qwen3-VL** ([#5469](huggingface/trl PR #5469)), **GLM-4-MoE** ([#5463](huggingface/trl PR #5463)), and **GPT-OSS** ([#5464](huggingface/trl PR #5464)).
*   **RLOO Integration:** Extending tool calling support to `RLOOTrainer` ([#5395](huggingface/trl PR #5395)).

### Core Training Enhancements
*   **Distillation:** Introduction of a new `DistillationTrainer` supporting on-policy distillation and mixed JSD loss ([#5407](huggingface/trl PR #5407)).
*   **DPO Improvements:** Added length-normalized sigmoid loss to `DPOTrainer` (aligned with Tulu-3/OLMo) ([#5406](huggingface/trl PR #5406)).
*   **VLM Support:** `GOLDTrainer` is receiving support for Vision Language Models (VLMs) ([#5461](huggingface/trl PR #5461)).

### Merged / Maintenance
*   **Deprecations:** Merged PRs to deprecate the `keep_end` truncation mode ([#5465](huggingface/trl PR #5465)) and remove unused truncation parameters ([#5467](huggingface/trl PR #5467)).
*   **Docs:** Added hardware requirement notes to the quickstart guide ([#5472](huggingface/trl PR #5472)).

## 5. Why This Project Matters in Today's RL Landscape
TRL is evolving beyond standard RLHF into a comprehensive framework for **Agentic RL**. Today's focus on standardizing tool-calling templates across diverse architectures (MoE, VLMs) signals a shift toward training models that can interact with external environments reliably. By integrating advanced techniques like on-policy distillation and length-normalized DPO, TRL remains the central bridge between cutting-edge RL research and production-ready LLM fine-tuning.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-04-08

### 1. Today's Highlights
OpenRLHF is expanding its algorithmic suite beyond standard Reinforcement Learning from Human Feedback. The most significant activity involves a new proposal for high-performance Evolutionary Strategies (ES). Meanwhile, standard maintenance continues with automated tooling updates.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
No new issues were opened or updated.

### 4. Key PR Progress
*   **[OPEN] Fast Evolutionary Algorithm Support ([#1214](https://github.com/OpenRLHF/OpenRLHF/pull/1214))**
    *   **Author:** DavidKoplow
    *   **Summary:** A new feature proposal introducing Evolutionary Strategies (ES) to the framework. The author claims this implementation is **10-30x faster** than the baseline presented in *arXiv:2509.24372*.
    *   **Technical Detail:** The performance gain is achieved via reversible floating-point addition/subtraction using upcasting.
    *   **Status:** Open for review.

*   **[CLOSED] Pre-commit suggestions ([#1215](https://github.com/OpenRLHF/OpenRLHF/pull/1215))**
    *   **Author:** pre-commit-ci[bot]
    *   **Summary:** Automated maintenance PR updating linters.
    *   **Updates:** `autoflake` (v2.3.1 → v2.3.3), `isort` (7.0.0 → 8.0.1), and `black` (25.12.0 → 26.3.1).
    *   **Status:** Merged/Closed.

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a critical infrastructure project in the Large Language Model (LLM) alignment stack. While originally focused on PPO and DPO, the introduction of **Evolutionary Strategies (PR #1214)** signals a growing trend in 2026: hybridizing gradient-based RL with black-box optimization techniques to escape local optima and improve training stability. High-performance implementations of ES allow for massive parallelization, making them a viable alternative or supplement to traditional gradient descent in post-training workflows.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-04-08

## 1. Today's Highlights
The verl ecosystem is actively advancing towards the **v0.9 / 26Q2 roadmap**, with a strong focus on **hardware compatibility (NPU)**, **architecture cleanup (removing legacy workers)**, and **performance optimization (FP8, Async)**. Key activity includes 16 issue updates and 32 PR updates. The community is pushing for better support of Agent abstractions and large-scale model training (Qwen3.5, Llama4).

## 2. Releases
*   **No new releases** detected in the last 24 hours. The project appears to be in a heavy development phase towards the next major milestone outlined in the 26Q2 roadmap.

## 3. Important Issues
*   **[Roadmap] 26Q2 Strategy ([#5836](https://github.com/verl-project/verl/issues/5836))**
    *   The community is aligning on the Q2 roadmap. Key pillars include **Megatron FSDP enabling**, **Low precision training (MXFP8/NVFP4)**, and **Qwen 3.5 LoRA support**. This issue serves as the central hub for tracking these high-level architectural changes.
*   **[RFC] Agent Abstractions ([#5790](https://github.com/verl-project/verl/issues/5790))**
    *   A significant proposal (👍 14) to introduce **AgentFramework** and **Trajectory Gateway**. This aims to decouple agent lifecycle management from reward computation, signaling verl's expansion from pure RL fine-tuning into full agent training pipelines.
*   **[Performance] FP8 Inference in Rollouts ([#1803](https://github.com/verl-project/verl/issues/1803))**
    *   Resurfaced discussion on using **FP8** for vLLM rollouts to reduce the 70% time cost currently dominated by BF16 operations in GRPO iterations.
*   **[Bug] Memory & Compatibility**
    *   A **20GB host memory leak** was identified in `save_checkpoint` with the Megatron backend on GB200s ([#5665](https://github.com/verl-project/verl/issues/5665)).
    *   Compatibility issues reported for **Qwen3.5 35B A3B** resume functions ([#5892](https://github.com/verl-project/verl/issues/5892)) and **CUDA 12.6** installations ([#5883](https://github.com/verl-project/verl/issues/5883)).

## 4. Key PR Progress
*   **Architecture Cleanup**
    *   **[#5890](https://github.com/verl-project/verl/pull/5890):** Proposes removing 3,000+ lines of legacy code (`fsdp_workers.py`, `megatron_workers.py`) in favor of the new unified `engine_workers`. This is a critical step for maintainability.
*   **NPU & Hardware Support**
    *   **[#5904](https://github.com/verl-project/verl/pull/5904):** Fixes attention mask shapes for VLM+Megatron on **NPUs**.
    *   **[#5680](https://github.com/verl-project/verl/pull/5680):** Adds `mindspeedllm` backend engine support for **NPU** devices.
*   **Feature Enhancements**
    *   **[#5897](https://github.com/verl-project/verl/pull/5897):** Adds **SGLang** support as a teacher server for Online Policy Distillation (OPD), diversifying inference backend options beyond vLLM.
    *   **[#5899](https://github.com/verl-project/verl/pull/5899):** Fixes a `RuntimeError` in metric computation when dealing with empty tensors (aborted samples).
    *   **[#5895](https://github.com/verl-project/verl/pull/5895):** Resolves a deadlock in Multi-Token Prediction (MTP) loss when using Context Parallelism > 1.

## 5. Why This Project Matters in Today's RL Landscape
verl is solidifying its position as a production-grade, distributed RL framework capable of handling the next generation of LLMs (Qwen3.5, Llama4). Today’s activity highlights a critical transition: moving from experimental features to **robust, multi-backend infrastructure** (supporting both NVIDIA and NPU) and **cleaning up technical debt** (legacy workers). The focus on **FP8 and Agent abstractions** directly addresses the scalability bottlenecks currently facing the industry, making verl a critical project to watch for deploying large-scale RLHF and Agent training systems.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the **RL Daily Digest** for **Open Instruct** (2026-04-08).

### 1. Today's Highlights
Activity on **2026-04-08** focused heavily on infrastructure robustness and environment expansion. The maintainers merged a critical patch for multi-GPU DeepSpeed checkpointing (fixing a state-loading logic error) while advancing discussions on integrating Reverb-style replay buffers and dedicated SFT implementations via OLMo-core.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **[CLOSED] Multi-GPU Checkpointing Bug (#1262):**
    *   **Context:** This issue highlighted a failure in `grpo_fast.py` where the dataloader state reload used a hardcoded path (`global_0/state.pt`), causing crashes during DeepSpeed multi-GPU runs.
    *   **Resolution:** This issue was likely resolved by the merge of PR #1589.
    *   **Link:** [Issue #1262](https://github.com/allenai/open-instruct/issues/1262)

### 4. Key PR Progress
*   **[MERGED] Fix DeepSpeed Checkpoint State Path (#1589):**
    *   Fixes a hardcoded path bug in `main()` that prevented correct state reloading in multi-GPU setups. The logic now correctly parses DeepSpeed’s `latest` file and directory structure (`global_step{N}/mp_rank_00_model_states.pt`).
    *   **Author:** Chessing234
    *   **Link:** [PR #1589](https://github.com/allenai/open-instruct/pull/1589)
*   **[MERGED] Qwen3.5 VLM Support (#1568):**
    *   Integrates support for Qwen 3.5 Vision-Language Models, including bumps to `vllm`, `transformers`, and `liger` kernels, alongside `flash-linear-attention` optimizations.
    *   **Author:** hamishivi
    *   **Link:** [PR #1568](https://github.com/allenai/open-instruct/pull/1568)
*   **[OPEN] Reverb-style Replay Buffers (#1583):**
    *   Proposes refactoring `DataPreparationActor` to act as a configurable replay buffer, drawing architectural inspiration from DeepMind’s **Reverb**. This signals a shift toward more standard RL data handling patterns.
    *   **Author:** finbarrtimbers
    *   **Link:** [PR #1583](https://github.com/allenai/open-instruct/pull/1583)
*   **[OPEN] OLMo-core SFT Implementation (#1579):**
    *   Introduces `olmo_core_finetune.py` to bridge the efficiency gap between OLMo-core and legacy SFT scripts, aiming to replace inefficient fine-tuning pipelines.
    *   **Author:** finbarrtimgers
    *   **Link:** [PR #1579](https://github.com/allenai/open-instruct/pull/1579)
*   **[OPEN] SWERL Sandbox Environment (#1492):**
    *   Adds `SWERLSandboxEnv`, a Docker-based RL environment for software engineering tasks (SWE-bench style) that uses a `submit` tool for per-sample test suite evaluation.
    *   **Author:** hamishivi
    *   **Link:** [PR #1492](https://github.com/allenai/open-instruct/pull/1492)

### 5. Why This Project Matters in Today's RL Landscape
**Open Instruct** continues to serve as a critical bridge between static Large Language Models and dynamic, agentic RL workflows. Today's updates underscore a maturation of the library:
1.  **Hardware Reliability:** The DeepSpeed fixes ensure that GRPO (Group Relative Policy Optimization) and other RL algorithms scale reliably beyond single-GPU prototypes.
2.  **Agentic Capabilities:** The introduction of `SWERLSandboxEnv` positions the library at the forefront of **Code RL**, moving beyond text generation to executable, sandboxed problem solving.
3.  **Architecture Modernization:** The move toward Reverb-style buffers and OLMo-core integration indicates a convergence between traditional RL infrastructure (replay buffers) and modern LLM training paradigms (high-throughput SFT).

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (2026-04-08)

## 1. Today's Highlights
Activity on the **Stable Baselines3 (SB3)** repository was minimal over the last 24 hours, with no new code contributions or releases. The sole update was a user inquiry regarding advanced customization of feature extractors, specifically focusing on hybrid training approaches for custom architectures.

## 2. Releases
**No new releases** were recorded in the last 24 hours.
*   *Current Context:* Users should continue to use the latest stable release for production environments.

## 3. Important Issues
*   **Custom Feature Extractor Training Strategies**
    *   **Issue:** [#2238](https://github.com/DLR-RM/stable-baselines3/issues/2238)
    *   **Status:** Open
    *   **Summary:** User **jvoids** inquired about the feasibility of partially training a custom `FeatureExtractor` within the SB3 framework. The goal is to enforce specific deterministic behaviors in parts of the network rather than training the entire extractor as a "black box" end-to-end via the RL algorithm.
    *   **Analysis:** This touches on the flexibility of the SB3 architecture regarding hybrid models (combining supervised learning components with RL policy updates).

## 4. Key PR Progress
**No activity.** There were no pull requests created, updated, or merged in the last 24 hours.

## 5. Why This Project Matters in Today's RL Landscape
Despite the quiet daily cycle, **Stable Baselines3** remains the industry standard for reliable, implementation-verified Reinforcement Learning algorithms. Its strict adherence to reproducible results and clean Python API makes it the go-to starting point for both academic research and industrial RL applications. Questions regarding **FeatureExtractors** (as seen in Issue #2238) highlight the ecosystem's shift toward complex, multimodal inputs (e.g., combining CNNs or Transformers with standard RL policies), an area where SB3’s modular policy architecture continues to provide essential utility.

</details>