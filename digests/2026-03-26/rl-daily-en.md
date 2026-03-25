# RL Open Source Daily Digest 2026-03-26

> Generated: 2026-03-25 22:07 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-26 displays a clear bifurcation between **LLM/VLM post-training frameworks** (verl, TRL, OpenRLHF, slime, AReaL, Open Instruct) and **traditional/agent RL infrastructure** (SB3, rl_games, ROLL, ROCK).

The LLM RLHF sector is hyper-active, aggressively tackling **multimodality (VLMs)**, **hardware efficiency (FP8/GB200)**, and **architectural simplification (removing DeepSpeed/Ray)**. Meanwhile, traditional RL libraries (SB3, rl_games) are in a maintenance/optimization phase, focusing on API stability and hardware interoperability. A distinct trend toward "Agentic RL" is emerging, with frameworks like ROLL and verl integrating external environment loops and tool-use capabilities.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 19 | 40 | 0 | **High.** Ecosystem expansion (Atropos) + critical GB200/stability work. |
| **TRL** | 3+ | 8+ | 0 | **High.** Intense focus on Multimodal (VLM) & Async GRPO architectures. |
| **AReaL** | 4 | 5 | 0 | **High.** Performance engineering (FP8) and vLLM modernization. |
| **slime** | 3 | 4 | 0 | **Medium.** Addressing VLM memory bottlenecks and pipeline breaks. |
| **OpenRLHF** | 1 | 3+ | 1 (v0.9.8) | **High.** Major architectural shift to FSDP2; removing DeepSpeed. |
| **Open Instruct** | 0 | 5 | 0 | **Medium.** Algorithmic refinement (GRPO + PPO convergence). |
| **ROCK** | 1 | 3 | 0 | **Medium.** Cloud/Serverless integration and proxy flexibility. |
| **ROLL** | 2 | 2 | 0 | **Medium.** External environment integration (OpenReward). |
| **rl_games** | 2 | 2 | 0 | **Low.** Focused maintenance on SAC stability. |
| **SB3** | 3 | 1 | 0 | **Low.** API modernization (Gymnasium alignment) and hardware support. |
| **CleanRL** | 0 | 0 | 0 | *None.* |
| **Gymnasium** | 0 | 0 | 0 | *None.* |
| **PettingZoo** | 0 | 0 | 0 | *None.* |
| **Tianshou** | 0 | 0 | 0 | *None.* |
| **torchtune** | 0 | 0 | 0 | *None.* |

## Shared Research & Engineering Directions

**Research Directions**
*   **Multimodal & Video RL:** The most prominent research theme is the shift from text-only RLHF to Vision-Language Models (VLMs). TRL, verl, and slime are heavily focused on fixing VLM training instabilities, supporting video inputs, and handling high-resolution image data without causing hangs or OOM errors.
*   **Agentic Workflows:** There is a concerted move toward "agentic" RL. TRL is refactoring for "environment factories" that return images/text, while verl is integrating **Atropos** for multi-turn rollouts and ROLL is connecting to **OpenReward** for containerized agentic tasks.
*   **Algorithmic Convergence:** Projects are blending the efficiency of GRPO (Group Relative Policy Optimization) with the stability of PPO. **Open Instruct** is explicitly adding value model support to GRPO, and **TRL** is implementing Self-Distillation Policy Optimization (SDPO).

**Engineering & Infrastructure Signals**
*   **Distributed Backend Migration:** A major architectural trend is the move away from complex third-party distributed runtimes. **OpenRLHF** is aggressively removing DeepSpeed in favor of PyTorch native **FSDP2**, and **AReaL** is ripping out custom hooks to align with native **vLLM** flows.
*   **Hardware Efficiency & Precision:** To handle massive models, frameworks are adopting lower precision and new hardware support. **AReaL** introduced **FP8 blockwise training**, and **verl** is working on **GB200** (aarch64) support.
*   **Async & Memory Optimization:** "Async" architectures are becoming standard to decouple inference from training. TRL and AReaL are both refining asynchronous rollout pipelines to prevent memory leaks and improve throughput.

## Differentiation Analysis

*   **verl vs. TRL (The LLM RLHF Leaders):**
    *   **verl** is positioning itself as the infrastructure layer for *scale* and *hardware agnosticism*, focusing heavily on NVIDIA GB200, Ascend NPUs, and integration with external environments (Atropos).
    *   **TRL** acts as the bridge between Hugging Face ecosystems and production, focusing on developer experience, ease of use for VLMs (Qwen3-VL), and "out-of-the-box" trainers like AsyncGRPO.
*   **OpenRLHF vs. Open Instruct (The "Clean" Stack):**
    *   **OpenRLHF** is pursuing a "CleanRLHF" philosophy by stripping out Ray/DeepSpeed dependencies to rely purely on PyTorch FSDP2, appealing to users who want native hardware compatibility without abstraction overhead.
    *   **Open Instruct** serves as the stable, transparent academic backbone for the OLMo ecosystem, focusing on rigorous metric logging (TIS ratios) and documentation rather than aggressive architectural refactoring.
*   **ROCK vs. ROLL (Alibaba Ecosystem):**
    *   **ROCK** focuses on the *infrastructure layer* (cloud runtimes, proxies, serverless containers).
    *   **ROLL** focuses on the *training layer* and external interoperability (connecting to OpenReward, visualization backends).

## Community Momentum & Maturity

*   **verl & TRL** currently hold the momentum in the LLM alignment space. Both are seeing high PR velocity (40 and 8+ respectively) driven by the immediate demands of training VLMs and reasoning models.
*   **SB3 & rl_games** show signs of high maturity and stability. Activity is limited to maintenance (fixing SAC initialization) and API hygiene (Gymnasium alignment). They are "finished" products compared to the rapidly evolving LLM stacks.
*   **OpenRLHF** is in a transitional maturity phase. The decision to remove DeepSpeed (PR #1176) suggests a community-driven "correction" to simplify the stack, which may cause short-term friction but indicates a maturing codebase becoming more self-reliant.

## Trend Signals

1.  **The Rise of "Agent-Ready" RL:** The integration of Atropos (verl), OpenReward (ROLL), and Tool Use (TRL) signals that 2026 is the year RL frameworks move beyond static datasets to dynamic, multi-turn environment interaction.
2.  **The Death of DeepSpeed in RL:** OpenRLHF's migration to FSDP2 and verl's focus on FSDP optimizations indicate a broad industry shift away from DeepSpeed dependency in favor of PyTorch-native distributed primitives for RL workloads.
3.  **Precision Warfare:** The introduction of FP8 training in AReaL suggests that as model sizes balloon, 16-bit training is becoming too memory-intensive, pushing the frontier down to 8-bit precision for RL fine-tuning.
4.  **Visualization Fragmentation:** ROLL's proposal to support Trackio (offline-first visualization) reflects a growing dissatisfaction with cloud-locked tools like Wandb among open-source communities.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL
**Date:** 2026-03-26 | **Repository:** alibaba/ROLL

## 1. Today's Highlights
The ROLL ecosystem is actively expanding its interoperability with third-party visualization tools and external agentic environments. Key activity includes a proposal to integrate **Trackio** for offline-first experiment tracking and a significant pull request connecting ROLL to the **OpenReward** platform. Conversely, users are reporting critical connectivity issues with the latest Docker registry images.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Docker Registry Connectivity Failure ([#400](https://github.com/alibaba/ROLL/issues/400))**
    User reports indicate that pulling the complex dependency stack image (`torch2.10.0` + `vLLM 0.16.0` + `megatron-core`) fails due to connection errors with the Alibaba registry (`roll-registry.cn-hangzhou.cr.aliyuncs.com`). This blocks environment setup for the latest framework versions.

*   **Proposal: Trackio Visualization Backend ([#402](https://github.com/alibaba/ROLL/issues/402))**
    A feature request to integrate [Trackio](https://github.com/gradio-app/trackio), a lightweight, offline-first alternative to Wandb. This would allow ROLL experiments to be visualized via Hugging Face Spaces, reducing reliance on cloud-dependent logging tools.

## 4. Key PR Progress
*   **[OPEN] Integration with OpenReward Environments ([#401](https://github.com/alibaba/ROLL/pull/401))**
    Author: @shamanez. This PR introduces **OpenReward** as a first-class environment backend. It enables RL training on containerized agentic tasks hosted on the OpenReward platform, specifically demonstrating capabilities with the *EndlessTerminals* task. This moves ROLL towards standardized, external benchmark evaluation.

*   **[CLOSED] Config Typo Fix ([#399](https://github.com/alibaba/ROLL/pull/399))**
    Author: @joeyzyz. A maintenance PR correcting a typo in `run_onpolicy_distill_pipeline.sh`.

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape (2026), the shift from isolated training loops to interconnected ecosystems is critical. ROLL is demonstrating this evolution through **PR #401** by bridging the gap between training frameworks and distributed evaluation platforms like OpenReward. This allows researchers to train agents on diverse, containerized tasks without rewriting environment wrappers. Simultaneously, the discussion around **Issue #402** highlights the community's desire for flexible, decentralized experiment tracking (via Hugging Face Spaces) rather than locked-in proprietary solutions.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL Daily Digest for **2026-03-26**.

### 1. Today's Highlights
Activity on **alibaba/ROCK** focused heavily on enhancing infrastructure flexibility and cloud integration. Key developments include expanding proxy capabilities to support custom ports and advancing serverless runtime support via Alibaba Cloud Function Compute.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **[Feature] Enhanced Proxy Flexibility (#665)**
    *   **Author:** @xdlkc
    *   **Summary:** Identified limitations in the current proxy implementation where the WebSocket endpoint is hardcoded to `Port 8080`. The issue requests support for user-specified ports to facilitate connections to various services (Jupyter, VS Code Server) and full HTTP method support.
    *   **Link:** [alibaba/ROCK #665](https://github.com/alibaba/ROCK/issues/665)

### 4. Key PR Progress
*   **WebSocket & HTTP Proxy Upgrade (#666)**
    *   **Author:** @xdlkc
    *   **Status:** Open
    *   **Details:** Directly addresses Issue #665. Implements an optional `port` query parameter for WebSocket proxies and updates the HTTP proxy to support all HTTP methods. Invalid ports are handled via WebSocket close code 1008.
    *   **Link:** [alibaba/ROCK #666](https://github.com/alibaba/ROCK/pull/666)

*   **Alibaba Function Compute Serverless Runtime (#643)**
    *   **Author:** @insight-bit
    *   **Status:** Updated (Active)
    *   **Details:** A significant feature addition introducing Alibaba Cloud Function Compute 3.0 (FC3) as a sandbox runtime provider. Includes support for Custom Runtime/Container modes, thread-safe CircuitBreakers for fault tolerance, and WebSocket reconnection mechanisms.
    *   **Link:** [alibaba/ROCK #643](https://github.com/alibaba/ROCK/pull/643)

*   **Image Pull Task Implementation (#664)**
    *   **Author:** @zhongwen666
    *   **Status:** Open
    *   **Details:** Adds functionality for image pull tasks (refs #662), likely improving the container provisioning workflow within the ROCK ecosystem.
    *   **Link:** [alibaba/ROCK #664](https://github.com/alibaba/ROCK/pull/664)

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from isolated scripts to scalable, distributed systems, **ROCK** serves as a critical infrastructure layer. By refining **proxy capabilities** (allowing seamless access to internal tools like VS Code) and integrating **serverless providers** like Alibaba Function Compute, ROCK is lowering the barrier to creating reproducible, cloud-native RL environments. This shift allows researchers to focus on algorithm design rather than infrastructure management, accelerating the deployment of complex RL agents.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-26

## 1. Today's Highlights
The **slime** ecosystem saw significant activity regarding **Vision-Language Models (VLMs)** and **Multimodal On-Policy Distillation (OPD)**. Key developments include the closure of a PR enabling lazy loading for VLMs to save memory and a new open PR addressing multimodal OPD support. However, the project is currently experiencing a pipeline blockage with missing nightly Docker images.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Bug] VLM Weight Sync Failure:** Issue [#1673](https://github.com/THUDM/slime/issues/1673) reports that `UpdateWeightFromDistributed` corrupts weights for VLM models in non-colocate mode, causing the SGLang inference engine to crash.
*   **[Bug] Missing Nightly Docker Images:** Issue [#1763](https://github.com/THUDM/slime/issues/1763) notes that nightly builds have been missing from Docker Hub since March 21 (`nightly-dev-20260320a` is the latest).
*   **[Performance] Context Parallelism Optimization:** Issue [#1062](https://github.com/THUDM/slime/issues/1062) (Good First Issue) highlights a 2x training time increase with `cp=2`. The community suggests optimizing communication by calculating local loss rather than gathering entropy/logp.

## 4. Key PR Progress
*   **Merged/Closed:**
    *   **Lazy Multimodal Load:** PR [#1623](https://github.com/THUDM/slime/pull/1623) (closed) introduced `--lazy-multimodal-load` to defer image processing to rollout time, preventing OOM errors during the initialization of large VLM datasets.
    *   **Internal Sync:** PR [#1765](https://github.com/THUDM/slime/pull/1765) synchronized internal bugfixes.
*   **Open/Updated:**
    *   **Multimodal OPD Support:** PR [#1760](https://github.com/THUDM/slime/pull/1760) aims to fix [#1758](https://github.com/THUDM/slime/issues/1758), adding support for passing image information during On-Policy Distillation for VLMs.
    *   **MLflow Integration:** PR [#1591](https://github.com/THUDM/slime/pull/1591) proposes a modular tracking interface with MLflow backend support.

## 5. Why This Project Matters in Today's RL Landscape
**Slime** serves as a critical bridge between large-scale LLM/VLM architectures (like **Qwen3-VL** and **GLM-4.5**) and production-grade inference engines (like **SGLang**). Today's updates emphasize the community's push toward **Multimodal RLHF**, addressing specific memory bottlenecks and communication overheads involved in training massive vision-language models. The focus on "lazy loading" and "context parallelism" optimization reflects the cutting-edge challenges of scaling RL on multi-billion parameter architectures.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-26

## 1. Today's Highlights
The AReaL ecosystem shows significant activity in system optimization and training stability. Key developments include a move toward native vLLM integration for inference control, the introduction of FP8 blockwise training support, and improved asynchronous training configurations. The community is actively addressing hardware compatibility (ARM64) and environment handling.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Roadmap] 2026 Q1 Milestones** (#907): Active tracking continues for the Q1 roadmap, inviting community contribution on planned enhancements.
*   **[Feature] Auto-scaling Inference Engines** (#1086): Proposes dynamic scaling of inference workers in Single-Controller mode to optimize resource usage during RL rollouts.
*   **[Refactor] vLLM Server Modernization** (#1090): Calls for replacing the custom `abort_all_reqs` hook with vLLM's native `pause-generation` flow to improve stability during weight updates.
*   **[Question] ARM64 Docker Support** (#1085): Users reported missing ARM64 images for `areal-runtime`, highlighting a gap in cross-platform support.

## 4. Key PR Progress
*   **vLLM Refactor** (#1091): Implements the native `pause_generation` flow (paired with Issue #1090), removing custom engine patches to align with upstream vLLM standards.
*   **FP8 Training Support** (#1087): Introduces FP8 blockwise (128×128) training in `ArchonEngine` with MoE support, achieving loss convergence within 3% of BF16 baselines.
*   **Advanced Rollout Correction** (#1084): Adds Geometric-RS and Token-TIS/MIS importance sampling modes to handle off-policy drift in decoupled training scenarios.
*   **Unified Rejection Sampling** (#1088): Refactors async training configs to unify importance weight capping and masking strategies.
*   **Performance & Platform**:
    *   (#1077) Fixes RPC batch fetching for large multimodal batches (High Priority).
    *   (#1083) [Closed] Added NUMA CPU affinity binding to reduce latency in GPU-CPU data transfer.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a high-performance, production-ready framework for large-scale RLHF. By aggressively integrating **FP8 training** and refining **vLLM interoperability**, the project addresses the two biggest bottlenecks in modern RL: memory efficiency and inference latency. The focus on sophisticated **importance sampling techniques** (#1084) also indicates a shift toward more robust, stable training regimes necessary for complex reasoning models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-26

## 1. Today's Highlights
The TRL ecosystem is undergoing a significant architectural evolution, shifting focus from basic LLM fine-tuning to **complex, multimodal RL workflows**. Activity over the last 24 hours highlights three major trends:
*   **Multimodal Expansion:** Intense development focus on Vision-Language Models (VLMs) like Qwen3-VL, specifically fixing critical bugs in GRPO trainers and adding support for new vision keys (`pixel_position_ids`).
*   **Async Architectures:** Continued refactoring of the `AsyncGRPOTrainer` to support memory-efficient training and structured rollout pipelines.
*   **Tooling & Governance:** Improvements to the contributor experience (PR templates) and debugging tools (logging conversations rather than flat text).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Feature] Video Inputs for VLMs ([#5373](huggingface/trl Issue #5373))**
    *   A new feature request aims to decouple video inputs from image inputs for models like Qwen3-VL. Currently, the dataset schema restricts inputs to an "images" key, limiting video training capabilities.
*   **[Bug] GRPO with Tool Use ([#5366](huggingface/trl Issue #5366))**
    *   Users are encountering reproduction issues when fine-tuning `Qwen3-0.6B` with GRPO using a Python REPL tool.
*   **[Bug] vLLM Server Hanging with High-Res Images ([#5361](huggingface/trl Issue #5361))**
    *   Multimodal RL training hangs in `vllm-mode="server"` when passing high-resolution images (e.g., 1080p), requiring manual resizing. This works in "colocate" mode, indicating a server-side processing bottleneck.

## 4. Key PR Progress
*   **Multimodal & GRPO Enhancements**
    *   **Fix Critical IndexError:** PR [#5364](huggingface/trl PR #5364) resolves a training crash in `GRPOTrainer` when using multimodal models (Qwen3-VL) where chat content contains `None` values.
    *   **New Vision Keys:** PR [#5374](huggingface/trl PR #5374) adds support for `pixel_position_ids`, preparing TRL for upcoming VLM architectures.
    *   **Multimodal Tool Responses:** PR [#5323](huggingface/trl PR #5323) enables `environment_factory` tools to return images + text, essential for VLM agents.

*   **Performance & Architecture (Async GRPO)**
    *   **Memory Efficiency:** PR [#5349](huggingface/trl PR #5349) introduces a chunked LM head to `AsyncGRPOTrainer`, preventing the materialization of massive logits tensors during log-prob computation.
    *   **Rollout Refactoring:** PR [#5318](huggingface/trl PR #5318) restructures the async rollout pipeline using dataclasses (`RolloutCompletion`, `TurnRecord`) to replace parallel arrays, improving code maintainability for complex agent loops.

*   **Core Trainer Refactors**
    *   **DPO Cleanup:** PRs [#5369](huggingface/trl PR #5369) and [#5372](huggingface/trl PR #5372) simplify DPO tokenization and standardize truncation logic (removing `truncation_mode`).
    *   **New Algorithms:** PR [#4935](huggingface/trl PR #4935) proposes a **Self-Distillation Policy Optimization (SDPO)** trainer, leveraging high-reward trajectories for dense learning signals.

## 5. Why This Project Matters in Today's RL Landscape
TRL has established itself as the bridge between state-of-the-art RL research and production-ready LLM post-training. Today's digest reveals a critical maturation step: **the transition from text-only RLHF to Multimodal Agent RL**. By solving specific infrastructure issues—such as video input handling, high-resolution image processing in vLLM, and memory-efficient async rollouts—TRL is enabling the next generation of "agentic" models that can see, act, and reason within complex environments. The focus on *AsyncGRPO* and *SDPO* further signals a shift toward more sample-efficient and stable training algorithms required for these larger, multimodal architectures.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-26

## 1. Today's Highlights
OpenRLHF has released **version 0.9.8**, featuring significant refactoring of the `Experience` class and generation parameters. Concurrently, the project is actively restructuring its distributed training backend, showing intent to fully integrate FSDP2 and remove DeepSpeed dependencies through a series of aggressive PR updates.

## 2. Releases
### **v0.9.8**
This update focuses on codebase hygiene and metric handling.
*   **Refactoring:** The `Experience` class has been restructured ([9c5d260](https://github.com/OpenRLHF/OpenRLHF/commit/9c5d260)).
*   **Token Handling:** Refactored logic for `max_len` and `max_new_tokens` alongside evaluation metrics ([d0e088b](https://github.com/OpenRLHF/OpenRLHF/commit/d0e088b)).
*   **Feature:** Added support for negative length handling.

## 3. Important Issues
### **[Roadmap] OpenRLHF Development Roadmap (#568)**
*   **Status:** Open
*   **Context:** This issue outlines the strategic shift towards "CleanRLHF," prioritizing performance optimization while maintaining ease of use.
*   **Key Milestones:** The roadmap tracks the removal of Ray dependencies in `ppo_trainer.py` and the implementation of a "Single Controller" architecture.
*   **Link:** [Issue #568](https://github.com/OpenRLHF/OpenRLHF/issues/568)

## 4. Key PR Progress
The repository is undergoing a significant backend transition regarding distributed training.
*   **[OPEN] feat: add the support of fsdp2 and remove deepspeed (#1176):** A major PR proposing the migration from DeepSpeed to PyTorch FSDP2. This remains open and active.
    *   **Link:** [PR #1176](https://github.com/OpenRLHF/OpenRLHF/pull/1176)
*   **Management of #1176:** Two auxiliary PRs ([#1205](https://github.com/OpenRLHF/OpenRLHF/pull/1205) and [#1204](https://github.com/OpenRLHF/OpenRLHF/pull/1204)) were opened and immediately closed. These appear to be administrative actions (rebasing/squashing) used to manage the complex merge history of the FSDP2 migration against the latest `main` branch.

## 5. Why This Project Matters in Today's RL Landscape
OpenRLHF is positioning itself as the definitive "CleanRLHF" alternative to heavily abstracted frameworks like RL4LMs or the now-deprecated parts of DeepSpeed-Chat. By decoupling Ray and removing DeepSpeed in favor of native PyTorch FSDP2, the project is betting on **reduced dependency overhead** and **native hardware compatibility** as the primary drivers for future LLM alignment workflows. This shift reflects a broader industry trend toward standardizing on PyTorch native distributed primitives rather than third-party optimization engines.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-26

## 1. Today's Highlights
The **verl** ecosystem saw significant activity today with **40 PR updates** and **19 issue discussions**. Key themes include:
*   **Ecosystem Expansion:** Progress on integrating external environments like **Atropos** and new **Generative Recommendation** capabilities.
*   **Hardware & Perf:** Critical fixes for **GB200 support**, memory leaks in Megatron backends, and performance optimizations for FSDP.
*   **Advanced Algorithms:** Ongoing work on **Multi-Teacher Distillation** and **FlowGRPO** for image generation.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Bounty] Atropos Integration ([#1782](https://github.com/verl-project/verl/issues/1782)):**
    A $2500 bounty issue remains open for integrating the **Atropos** RL environment (by Nous Research), aiming to enable multi-turn/multi-agent rollouts.
*   **GB200 Architecture Support ([#3468](https://github.com/verl-project/verl/issues/3468)):**
    Users are requesting official support for **NVIDIA GB200** (aarch64), noting difficulties with current x86-only Docker setups.
*   **Critical Training Instabilities:**
    *   **NCCL Timeouts:** Random crashes during PPO `compute_log_prob` ([#5750](https://github.com/verl-project/verl/issues/5750)).
    *   **CPU OOM:** Validation process causing Out of Memory errors on CPU ([#3349](https://github.com/verl-project/verl/issues/3349)).
    *   **TMA Descriptor Error:** Intermittent "Failed to initialize the TMA descriptor 700" during Qwen3-VL training ([#4006](https://github.com/verl-project/verl/issues/4006)).
*   **Feature Request: Generative Recommendation ([#5715](https://github.com/verl-project/verl/issues/5715)):**
    Proposal to support generative rec models (e.g., MiniOneRec) using semantic IDs.

## 4. Key PR Progress
*   **Feature: Atropos Integration ([#5514](https://github.com/verl-project/verl/pull/5514)):**
    Implements the integration of the Atropos environment with verl's GRPO pipeline, linking directly to the bounty issue above.
*   **Feature: Multi-Teacher On-Policy Distillation ([#5164](https://github.com/verl-project/verl/pull/5164)):**
    Active development on distilling Qwen3-VL using multiple teachers.
*   **Perf: FSDP Optimization ([#5753](https://github.com/verl-project/verl/pull/5753)):**
    Fixes redundant `to(cuda)` calls and garbage collection in `_context_switch` to speed up training steps when offloading is disabled.
*   **Fix: Megatron Memory Leak ([#5751](https://github.com/verl-project/verl/pull/5751)):**
    Reclaims host memory leaked by `dist_checkpointing` write buckets (fixes ~13GB RSS leak).
*   **Feature: FlowGRPO for Images ([#5716](https://github.com/verl-project/verl/pull/5716) & [#5713](https://github.com/verl-project/verl/pull/5713)):**
    Adding diffusion agent loops and image-based rewards to support **QwenImage** training.
*   **Chore: Dependency Bump ([#5752](https://github.com/verl-project/verl/pull/5752)):**
    Bumps `sglang` from 0.5.2 to 0.5.9, likely addressing rollout stability issues.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is establishing itself as a critical infrastructure layer for **post-training LLMs**, specifically addressing the complex engineering challenges of **RLHF (Reinforcement Learning from Human Feedback)** and **GRPO (Group Relative Policy Optimization)** at scale.

*   **Hardware Agnosticism:** Today's activity regarding GB200 and Ascend (NPU) support highlights verl's push beyond standard x86/CUDA setups, essential for leveraging next-gen AI supercomputers.
*   **Complex Architectures:** The work on Multi-Teacher Distillation and external environment loops (Atropos/RemoteAgentLoop) moves the ecosystem beyond simple single-turn RL, enabling sophisticated agentic workflows and multi-modal reasoning.
*   **Stability Focus:** The volume of bug fixes regarding memory leaks and NCCL timeouts underscores the difficulty of stable distributed RL training, a barrier verl is actively lowering for the open-source community.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-26

## 1. Today's Highlights
Activity in the last 24 hours focused on enhancing the **GRPO (Group Relative Policy Optimization)** algorithm and expanding documentation for the OLMo-core training stack. Key developments include the integration of Truncated Importance Sampling (TIS) metrics and progress toward merging PPO-style value model support into the GRPO fast path.

## 2. Releases
No new releases were recorded for 2026-03-26.

## 3. Important Issues
No issues were created or updated in the last 24 hours.

## 4. Key PR Progress
Five PRs saw updates, highlighting a shift toward stabilizing advanced RLHF techniques:

*   **[OPEN] Logging Enhancements for GRPO:** PR [#1558](https://github.com/allenai/open-instruct/pull/1558) introduces logging for `val/tis_ratio` and `val/tis_clipfrac` in the `grpo_fast` workload. This aligns the codebase with `rlzero-open-instruct` standards and includes unit tests for metric aggregation.
*   **[CLOSED] Documentation Overhaul:** PR [#1548](https://github.com/allenai/open-instruct/pull/1548) merged, significantly expanding documentation for DPO, GRPO, and SFT. It now includes OLMo-core debug scripts (local, multi-node) and references for Olmo 3 7B.
*   **[OPEN] PPO + Value Model Integration:** PR [#1462](https://github.com/allenai/open-instruct/pull/1462) remains active. This "WIP" update adds support for learned value models and GAE (Generalized Advantage Estimation) to `grpo_fast.py`, effectively bridging the gap between PPO and GRPO methodologies.
*   **[OPEN] Hybrid Model Benchmarks:** PR [#1425](https://github.com/allenai/open-instruct/pull/1425) saw renewed activity to enable benchmarking with hybrid models.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct serves as the technical backbone for the **OLMo (Open Language Model)** ecosystem. By standardizing implementations of SFT, DPO, and specifically GRPO, this project provides a transparent, production-grade alternative to proprietary LLM training stacks. The current work on merging **value model support (PPO)** with **GRPO** is particularly significant, as it offers researchers finer control over advantage estimation without abandoning the efficiency of group-relative rewards.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-03-26

## 1. Today's Highlights
The **rl_games** repository saw focused maintenance today, specifically targeting the **Soft Actor-Critic (SAC)** algorithm. The lead maintainer (Denys88) closed two significant issues regarding network initialization and persistence capabilities. The updates ensure greater stability for SAC implementations and introduce quality-of-life features for long-term training sessions.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Bug: SAC Network Initialization (#337)** [CLOSED]
    *   **Details:** Users encountered an `AttributeError` in `rl_games/algos_torch/network_builder.py` (line 994). The `self.has_cnn` property was accessed in `__init__` but never initialized within the `SACBuilder.Network.load` method.
    *   **Link:** [Issue #337](https://github.com/Denys88/rl_games/issues/337)
*   **Feature: SAC Replay Buffer Persistence (#339)** [CLOSED]
    *   **Details:** A user inquiry regarding the ability to save and reload the replay buffer between training sessions to resume learning without losing experience data.
    *   **Link:** [Issue #339](https://github.com/Denys88/rl_games/issues/339)

## 4. Key PR Progress
*   **Fix: Missing `has_cnn` in SAC Network Builder (#338)** [CLOSED]
    *   **Summary:** Resolves the crash identified in #337 by initializing `has_cnn` and `cnn` properties within `SACBuilder.Network.load`, aligning with the `A2CBuilder` pattern.
    *   **Link:** [PR #338](https://github.com/Denys88/rl_games/pull/338)
*   **Feature: Optional Replay Buffer Save/Load for SAC (#340)** [CLOSED]
    *   **Summary:** Introduces a `save_replay_buffer: True` configuration option. It implements `state_dict` / `load_state_dict` for `VectorizedReplayBuffer`, allowing automatic restoration of experience data from checkpoints (backward compatible).
    *   **Link:** [PR #340](https://github.com/Denys88/rl_games/pull/340)

## 5. Why This Project Matters in Today's RL Landscape
**rl_games** remains a critical high-performance benchmark in the Reinforcement Learning ecosystem, widely used for training agents in complex physics simulations (Isaac Gym, Brax) and computer games. While newer architectures emerge, its efficient implementation of PPO and SAC makes it a standard baseline for continuous control. Today's updates fixing **SAC network building** and adding **replay buffer persistence** are vital for researchers conducting long-horizon training tasks where hardware interruptions previously meant significant data loss.

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

# RL Daily Digest: Stable Baselines3 (2026-03-26)

## 1. Today's Highlights
Activity on Stable Baselines3 (SB3) remains focused on architectural scalability and API modernization. Key discussions today center on decoupling hardware execution (training vs. inference) and aligning the `VecEnv` interface with the current Gymnasium standard. There is continued interest in low-level buffer customization to support advanced RL research.

## 2. Releases
**None.** No new stable or nightly releases were recorded in the last 24 hours.

## 3. Important Issues
*   **Native Multi-Device Support ([#2194](https://github.com/DLR-RM/stable-baselines3/issues/2194))**
    A proposal to decouple training and inference devices is gaining traction. The feature requests native API support (e.g., `train_device` vs `inference_device`) to streamline workflows where policy inference happens on edge hardware (CPUs/microcontrollers) while training occurs on accelerators (GPUs/TPUs).

*   **Buffer Modularity via Dataclasses ([#2202](https://github.com/DLR-RM/stable-baselines3/issues/2202))**
    A request to transition buffer return types (`ReplayBufferSamples`, `RolloutBufferSamples`) from `NamedTuple` to `dataclass`. This change would enable subclassing, allowing researchers to extend buffer data structures with custom metadata without wrapping the entire object.

*   **Intel Extension for PyTorch ([#1564](https://github.com/DLR-RM/stable-baselines3/issues/1564))**
    Long-standing feature request (revived today) to integrate **Intel Extension for PyTorch (IPEX)**. The goal is to optimize CPU-bound training and inference performance for users relying on Intel architecture.

## 4. Key PR Progress
*   **Gymnasium Alignment for VecEnv ([#2223](https://github.com/DLR-RM/stable-baselines3/pull/2223))**
    This PR modifies the `VecEnv.reset()` signature to return `(obs, infos)`, strictly aligning with the Gymnasium API standard.
    *   *Status:* Open; flagged for "PR template not filled" and potential LLM generation, requiring maintainer review before merging.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the industry standard for reliable, modular Reinforcement Learning implementations. While newer libraries focus on distributed compute, SB3 continues to serve as the primary "reference implementation" for standard algorithms (PPO, SAC, TD3). Today's focus on **dataclass buffers** and **flexible device placement** highlights the ecosystem's evolution toward supporting highly customized, hardware-aware RL loops rather than just monolithic training scripts.

</details>