# RL Open Source Daily Digest 2026-03-27

> Generated: 2026-03-26 22:02 UTC | Projects covered: 15

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

The RL open-source ecosystem on 2026-03-27 displays a clear bifurcation. A cluster of "Post-Training" frameworks (verl, TRL, OpenRLHF, slime, AReaL, Open Instruct, ROLL) is undergoing rapid, high-velocity evolution driven by the demands of Large Language Models (LLMs) and Vision-Language Models (VLMs). These projects are solving for massive scale, hardware heterogeneity (NPUs/FP8), and multi-modal complexity. In contrast, the "Classic/General RL" cohort (Gymnasium, Stable Baselines3, rl_games, Tianshou) is in a maintenance phase, focusing on stability and API standardization, while the "Agent Infrastructure" layer (ROCK) focuses on Kubernetes-scale orchestration.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (Roadmap & Stability) | High (Diffusion + NPU) | 0 | **Dominant**. Expanding into multi-modal generation (FlowGRPO) and hardware diversity. |
| **TRL** | Medium (NCCL & DAPO) | High (VLMs + Alg correctness) | 0 | **High**. Hardening multimodal RL and fixing core algorithmic discrepancies. |
| **Open Instruct** | 0 | High (15 PRs, FA3 + GRPO) | 0 | **High**. Aggressive infrastructure modernization (vLLM 0.18+, DeepSpeed hooks). |
| **slime** | Medium (Mem leaks + NPU) | High (FP8 + VLM) | 0 | **High**. Pushing hardware limits (NPU/FP8) for Qwen models. |
| **AReaL** | Low (Onboarding) | High (IPv6 + FP8) | 0 | **High**. Scaling infrastructure (IPv6) and training efficiency (FP8). |
| **ROLL** | Medium (Docker + Torch regressions) | Medium (DeepSpeed + LLM Judge) | 0 | **Medium**. Integrating advanced tooling (LLM-as-Judge) and battling dependency drift. |
| **OpenRLHF** | 0 | Medium (FSDP2 pivot) | 0 | **Medium**. Major architectural shift from DeepSpeed to PyTorch-native FSDP2. |
| **ROCK** | Medium (Observability) | Medium (Sandbox + Proxies) | 0 | **Medium**. Maturing orchestration (Image pre-caching, User-Agents). |
| **Gymnasium** | 0 | Low (MuJoCo compat) | 0 | **Low**. Routine maintenance. |
| **rl_games** | Low (SAC bug) | 0 | 0 | **Low**. Troubleshooting algorithm parity. |
| **SB3** | Low (Buffer enhancement) | 0 | 0 | **Low**. Architectural discussions on extensibility. |
| **Others** | 0 | 0 | 0 | **Dormant**. (Tianshou, CleanRL, PettingZoo, torchtune). |

## Shared Research & Engineering Directions

### Research & Algorithms
*   **Multimodal & Diffusion RL:** A decisive shift beyond text-based RLHF. **verl** is implementing `DiffusionAgentLoop` (FlowGRPO) for image/video generation, while **TRL** and **slime** are fixing critical bugs in Vision-Language Model (VLM) training pipelines.
*   **Algorithmic Correctness:** There is a renewed focus on aligning implementations with theoretical papers. **TRL** fixed DAPO loss averaging, and **Open Instruct** added Truncated Importance Sampling (TIS) logging to ensure mathematical rigor in GRPO.
*   **Agentic Reasoning:** Projects are moving toward verifiable rewards. **ROLL** merged "LLM-as-Judge," and **Open Instruct** is developing a `SWERLSandboxEnv` for code execution rewards.

### Engineering & Infrastructure
*   **Hardware Heterogeneity (NPU & FP8):** The ecosystem is breaking NVIDIA's monopoly. **verl**, **slime**, and **ROLL** are actively merging support for Ascend NPUs and MXFP8/FP8 quantization to optimize memory throughput.
*   **Backend Consolidation (FSDP vs DeepSpeed):** **OpenRLHF** is leading a migration away from DeepSpeed toward PyTorch-native FSDP2, while **Open Instruct** and **ROLL** are struggling to stabilize existing DeepSpeed/vLLM stacks against regressions in newer versions (Torch 2.8+).
*   **Distributed Stability:** Solving race conditions and memory leaks in distributed setups is the top priority. **verl** and **slime** are battling NCCL timeouts and weight synchronization bugs, while **AReaL** is implementing IPv6 support for enterprise networking.

## Differentiation Analysis

*   **verl vs. TRL vs. OpenRLHF:**
    *   **verl** is differentiating as the "Hardware & Modality Neutral" OS, supporting Diffusion models and non-NVIDIA hardware (Ascend) aggressively.
    *   **TRL** positions itself as the integrated HuggingFace native solution, prioritizing ease of use for the HF ecosystem (VLMs, SGLang/vLLM integration).
    *   **OpenRLHF** is carving a niche as the "Stability Purist," pivoting to FSDP2 to escape DeepSpeed complexity, targeting users who want a cleaner, PyTorch-native distributed stack.
*   **Infrastructure vs. Training:**
    *   **ROCK** acts as the platform layer (Kubernetes orchestration, sandboxing), distinct from the training logic of **Open Instruct** or **slime**.
    *   **Open Instruct** and **slime** focus specifically on the "Post-Training" niche of LLMs (GRPO/PPO optimizations), whereas **Gymnasium/SB3** serve the broader, non-LLM RL market (robotics, control).

## Community Momentum & Maturity

*   **The LLM-RL Boom:** Projects tied to LLM post-training (verl, TRL, slime, Open Instruct) show high-velocity iteration with 10+ PRs daily, indicating they are in a "growth/maturing" phase where features are added rapidly alongside stability fixes.
*   **The Stability Plateau:** Foundational RL libraries (SB3, Gymnasium, rl_games, Tianshou) have near-zero PR activity and focus on long-term issue maintenance. This indicates these projects are "finished" or stable, serving as reliable infrastructure rather than innovation frontiers.
*   **The Hardware Fracture:** Community momentum is currently clustering around hardware support. Chinese-led projects (verl, slime, AReaL, ROLL) are aggressively supporting domestic hardware (Ascend NPUs) and alternative precision (FP8), creating a distinct hardware ecosystem from Western-centric projects.

## Trend Signals

*   **Signal: The "Post-Training OS" is Emerging:** Frameworks like verl are no longer just "PPO libraries"; they are becoming operating systems that manage inference engines (vLLM/SGLang), diverse hardware (NPU/GPU), and multiple modalities (Text/Vision/Diffusion).
*   **Signal: DeepSpeed Fatigue:** The migration of OpenRLHF to FSDP2 and the constant compatibility issues in Open Instruct/ROLL suggest the community is looking for alternatives to DeepSpeed's complexity and breakage rate.
*   **Signal: Verifiable RL:** The integration of sandboxes (Open Instruct) and LLM-as-Judge (ROLL) signals a shift away from static reward models toward dynamic, environment-based reward signals for agentic training.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL Ecosystem
**Date:** 2026-03-27

## 1. Today's Highlights
The ROLL ecosystem is actively expanding its infrastructure compatibility and tooling integration. Key developments include the integration of **Trackio** for experiment visualization and the merging of critical features like **DeepSpeed SFT support** and **LLM-as-Judge** capabilities. The community is also debugging compatibility issues with the latest `Torch 2.8.0` and `vLLM 0.10.2` stacks.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Training Instability with Latest Torch/vLLM Stack:** Issue [#398](https://github.com/alibaba/ROLL/issues/398) reports that training `qwen2.5-vl-3B-agentic` crashes when using `Torch 2.8.0 + vLLM 0.10.2` with `use_kl_loss=True`. The user notes stability with the older `Torch 2.6.0 + vLLM 0.8.4` stack, suggesting a regression in the newer dependency chain.
*   **Docker Image Availability:** Issue [#400](https://github.com/alibaba/ROLL/issues/400) highlights connection failures when pulling the latest `torch2.10.0 + vLLM0.16.0rc2` Docker images from the Alibaba registry.
*   **Feature Request - Qwen3.5 Agentic Support:** Users are requesting DeepSpeed integration examples for the new Qwen3.5 models (Issue [#395](https://github.com/alibaba/ROLL/issues/395)).

## 4. Key PR Progress
*   **Merged: DeepSpeed SFT & LLM-as-Judge:**
    *   PR [#318](https://github.com/alibaba/ROLL/pull/318) successfully added DeepSpeed SFT support, bridging the gap between Megatron and HuggingFace model strategies.
    *   PR [#364](https://github.com/alibaba/ROLL/pull/364) introduced a Reward Model Cluster to enable **LLM-as-Judge** within RLVR pipelines, moving beyond rule-based rewards.
*   **New Visualization Backend:** PR [#404](https://github.com/alibaba/ROLL/pull/404) (Open) proposes integration with **Trackio**, a lightweight, offline-first alternative to Wandb.
*   **Hardware Expansion:** PR [#380](https://github.com/alibaba/ROLL/pull/380) is a Work-In-Progress adding **NPU Megatron** support, targeting broader hardware adoption.

## 5. Why This Project Matters in Today's RL Landscape
As RL shifts towards complex **Agentic** workflows and **Vision-Language Models (VLMs)**, ROLL is positioning itself as a production-grade framework capable of handling heterogeneous backends (DeepSpeed, Megatron) and advanced reward systems (LLM-as-Judge). The current activity around NPU support and Docker stability reflects a maturing ecosystem focused on accessibility and robust training infrastructure for next-generation large models.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK (alibaba/ROCK)
**Date:** 2026-03-27

## 1. Today's Highlights
Activity on the ROCK platform has been focused on **Sandbox management and observability**. The community and maintainers concentrated on improving the flexibility of sandbox environments, specifically regarding network proxying, metadata identification, and resource cleanup. A significant volume of PR activity (5 out of 7) was dedicated to finalizing the "Image Pull Task" feature, indicating a push towards stabilizing environment provisioning.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **Sandbox Metadata & Observability:**
    *   **[#671](https://github.com/alibaba/ROCK/issues/671):** Request to add `experiment_name` to sandbox details. This addresses a usability pain point where identifying experiments via auto-generated UUIDs is difficult during debugging.
    *   **[#669](https://github.com/alibaba/ROCK/issues/669):** Proposal to set a custom `User-Agent` for the Kubernetes client. This is critical for auditing and distinguishing ROCK-generated requests from generic OpenAPI traffic in cluster logs.
*   **Resource Management:**
    *   **[#672](https://github.com/alibaba/ROCK/issues/672):** Feature request to support "pinned images" in cleanup tasks, preventing essential base images from being garbage collected during automated maintenance.

## 4. Key PR Progress
*   **Merged Features:**
    *   **[#668](https://github.com/alibaba/ROCK/pull/668)** (and related PRs [#663](https://github.com/alibaba/ROCK/pull/663), [#664](https://github.com/alibaba/ROCK/pull/664), [#667](https://github.com/alibaba/ROCK/pull/667)): The **Image Pull Task** feature is now merged/closed. This enhancement optimizes the pre-caching of environment images, reducing startup latency for RL training workers.
*   **Open Development:**
    *   **[#673](https://github.com/alibaba/ROCK/pull/673):** Implements support for pinned images (refs #672).
    *   **[#670](https://github.com/alibaba/ROCK/pull/670):** Implements the custom K8s client User-Agent (refs #669).
    *   **[#666](https://github.com/alibaba/ROCK/pull/666):** significant update to the proxy module. **WebSocket** support now allows user-specified ports, and the **HTTP** proxy has been expanded to support all HTTP methods, moving beyond basic GET/POST.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning scales from single-agent scripts to massive distributed training on Kubernetes, **infrastructure latency** and **observability** become the primary bottlenecks.
*   **Latency:** The "Image Pull Task" updates directly address the "cold start" problem in distributed RL, ensuring that compute nodes spend time training rather than downloading environment docker images.
*   **Observability:** By improving `experiment_name` visibility and `User-Agent` tracking, ROCK is maturing into a production-grade platform where debugging distributed failures becomes tractable.
*   **Connectivity:** Enhancing WebSocket proxy flexibility suggests a move towards more interactive, real-time visualization or control interfaces for sandboxed RL agents.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-27

## 1. Today's Highlights
Activity on the `slime` repository remains high with **7 updated PRs** and **3 active issues**. The focus is heavily on hardware compatibility and model robustness, specifically addressing **NPU support for Qwen3-VL**, **FP8 conversion for Qwen3.5**, and critical memory management bugs in distributed training. Maintenance updates regarding Docker images and routing were also resolved.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **VLM Training Stability in Non-Colocate Mode ([#1673](https://github.com/THUDM/slime/issues/1673)):**
    A significant bug report indicates that `UpdateWeightFromDistributed` fails for Vision-Language Models (VLM) when not running in `--colocate` mode. This results in corrupted weights and crashes SGLang during generation. This issue is critical for distributed training setups where storage and compute are separated.
*   **Memory Leak in Off-Policy GRPO ([#1767](https://github.com/THUDM/slime/issues/1767)):**
    Users are reporting Out-Of-Memory (OOM) errors when running Qwen3-4B with off-policy Retool GRPO. The crash occurs ~37 steps in, suggesting a potential memory leak or accumulation issue in the off-policy replay buffer/trace.
*   **Docker Nightly Build Gap ([#1763](https://github.com/THUDM/slime/issues/1763)):**
    Nightly Docker images were missing from March 21–25. This issue was marked **CLOSED**, indicating a resolution in the CI/CD pipeline.

## 4. Key PR Progress
*   **Hardware Expansion (NPU & FP8):**
    *   [OPEN] [#1750](https://github.com/THUDM/slime/pull/1750): Introduces NPU patches for Qwen3-VL-8B (GRPO & PPO), verified with raw reward curves.
    *   [OPEN] [#1769](https://github.com/THUDM/slime/pull/1769): Adds FP8 conversion support for Qwen3.5, optimizing memory throughput for large-scale RL.
*   **Memory Optimization:**
    *   [CLOSED] [#1692](https://github.com/THUDM/slime/pull/1692): A refactor of Context Parallel (CP) for Qwen3.5 linear attention. By wrapping logic in `custom autograd.Function`, this PR frees all-gathered tensors immediately after the forward pass, significantly reducing memory footprint.
*   **Infrastructure:**
    *   [OPEN] [#1764](https://github.com/THUDM/slime/pull/1764): Adds host memory metrics to the `available_memory` function.
    *   [CLOSED] [#1768](https://github.com/THUDM/slime/pull/1768): Fixed integration for uploading SGLang metrics to Weights & Biases (wandb).
    *   [CLOSED] [#1770](https://github.com/THUDM/slime/pull/1770): Switched SGLang router dependency to `zhuzilin/sgl-router`.

## 5. Why This Project Matters in Today's RL Landscape
The `slime` framework is establishing itself as a frontier platform for **Post-Training** and **RLHF** on large language models (LLMs) and vision-language models (VLMs). Today's digest highlights its aggressive expansion beyond standard NVIDIA GPUs (supporting NPU and FP8 optimizations) and its focus on the complex engineering challenges of distributed RL—specifically **weight synchronization** and **memory management** during long-horizon training (e.g., GRPO). By solving these low-level distributed bugs, `slime` enables stable fine-tuning of next-gen models like Qwen3.5 and Qwen3-VL.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-03-27

## 1. Today's Highlights
Activity on the **AReaL** (inclusionAI/AReaL) repository remains high with **7 updated Pull Requests** and no new releases. The focus is heavily on **infrastructure scalability** (IPv6 support), **training efficiency** (FP8 integration), and **inference stability** (vLLM refactoring and multimodal batch fixes).

## 2. Releases
*   **None** in the last 24 hours.

## 3. Important Issues
*   **[#1016 [OPEN] WeChat QR Code Expiration](https://github.com/inclusionAI/AReaL/issues/1016)**
    *   **Context:** A documentation issue regarding an expired community group QR code.
    *   **Status:** Originally created March 11, updated yesterday. While minor technically, this impacts community onboarding for Chinese developers.

## 4. Key PR Progress
The development pipeline is active, featuring significant external contributions and core engine upgrades:

*   **Infrastructure & Networking:**
    *   **[#1072 IPv6 Support](https://github.com/inclusionAI/AReaL/pull/1072):** Introduces training support for IPv6-only environments, critical for specific cloud providers and isolated internal networks.
    *   **[#1092 Fork Workflow](https://github.com/inclusionAI/AReaL/pull/1092):** Enhances the internal `create-pr` tool to automatically detect fork remotes, smoothing the contributor workflow.

*   **Training & Algorithms:**
    *   **[#1087 FP8 Blockwise Training](https://github.com/inclusionAI/AReaL/pull/1087):** Adds FP8 (128×128 blockwise) support to `ArchonEngine`. Includes HuggingFace checkpoint dequantization and MoE expert dispatch. Validation shows loss convergence within 3% of the BF16 baseline.
    *   **[#1084 Geometric-RS + Token-TIS/MIS](https://github.com/inclusionAI/AReaL/pull/1084):** Implements new importance sampling modes (`geometric_rs_token_tis`/`mis`) to handle off-policy drift in decoupled training scenarios.

*   **Inference & Stability:**
    *   **[#1077 Batch HTTP RTensor](https://github.com/inclusionAI/AReaL/pull/1077) [High Priority]:** Fixes a failure in fetching large multimodal batches (specifically multi-image samples) by batching HTTP requests for shards rather than fetching sequentially.
    *   **[#1091 vLLM Refactor](https://github.com/inclusionAI/AReaL/pull/1091):** Replaces custom `abort_all_reqs` injection with vLLM's native `pause_generation` flow to improve stability during weight updates.
    *   **[#765 LoRA Cleanup Fix](https://github.com/inclusionAI/AReaL/pull/765) [CLOSED]:** Merged fix for a `KeyError` crash during LoRA-based RL fine-tuning.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a production-grade framework for **scalable Reinforcement Learning**. Today's digest highlights a maturing ecosystem that is moving beyond pure algorithm research into **hardware optimization** (FP8 support) and **enterprise deployment** (IPv6 compatibility). The fixes regarding **multimodal batch handling** and **vLLM integration** underscore a commitment to the practical difficulties of running RL on Large Language Models (LLMs) and Vision-Language Models (VLMs), distinguishing it from purely academic codebases.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-03-27

## 1. Today's Highlights
The TRL ecosystem is seeing significant activity in **multimodal RL** and **distributed infrastructure**. Key trends include hardening support for Vision Language Models (VLMs) like Qwen3-VL within GRPO pipelines and resolving critical distributed communication bugs (NCCL) in colocated training setups. Additionally, the community is actively refactoring core loss functions (DAPO, DPO) to align with theoretical papers and improve code maintainability.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **NCCL Ordering in Colocate Mode (#5382):** A critical discussion regarding distributed race conditions when fine-tuning **Qwen3.5 27B** using Trainer Tensor Parallelism (TP) alongside vLLM TP. This highlights the fragility of current memory-optimized colocated RL training strategies.
    *   [View Issue #5382](https://github.com/huggingface/trl/issues/5382)
*   **DAPO Implementation Discrepancy (#5375):** A user flagged that the current DAPO (token-level loss) implementation averages over all tokens in the batch globally, whereas the paper suggests prompt-level averaging.
    *   [View Issue #5375](https://github.com/huggingface/trl/issues/5375)

## 4. Key PR Progress
*   **Algorithm Correctness:**
    *   **[#5381] Fix DAPO token-level loss:** Proposes switching from global batch-level averaging to prompt-level aggregation to match the DAPO paper.
    *   **[#5380] Fix GRPO Tool Handling:** Resolves [#5379](https://github.com/huggingface/trl/issues/5379) by ensuring empty tool lists are passed as `None` to `apply_chat_template`, preventing tokenization crashes.
*   **Multimodal & VLM Advances:**
    *   **[#5376] Dataset `Json` dtype:** Prevents `None` value insertion errors in multimodal/tool-calling datasets.
    *   **[#5323] Multimodal Tool Responses:** Enables `environment_factory` to return images + text for VLM training.
    *   **[#5374] (Closed):** Added support for `pixel_position_ids` for upcoming VLM architectures.
*   **Infrastructure & Optimization:**
    *   **[#5349] Chunked LM Head:** Introduces memory-efficient log-prob computation for `AsyncGRPOTrainer`, preventing OOM errors by avoiding full logits materialization.
    *   **[#5367] vLLM Serve Args:** Exposes `extra_llm_kwargs` in the CLI for advanced vLLM configuration (e.g., `gdn_prefill_backend`).
*   **Code Hygiene:**
    *   **[#5372] & [#5378]:** Removal of the legacy/dead `truncation_mode` parameter from DPO and experimental trainers (BCO, CPO, ORPO) to standardize sequence truncation logic.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to bridge the gap between cutting-edge RL research and production-grade LLM post-training. Today's activity underscores a maturing ecosystem: developers are moving beyond basic PPO implementations toward complex, multimodal RL (VLMs) and high-throughput distributed architectures (vLLM integration). The focus on correcting loss functions (DAPO) and optimizing memory footprints (Chunked LM Head) indicates that TRL is currently optimizing for **numerical stability** and **hardware efficiency**, which are prerequisites for training the next generation of 100B+ parameter reasoning models.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-03-27

## 1. Today's Highlights
Activity on the Tianshou repository was limited to administrative maintenance today. No new issues were reported, and no new code was merged into active branches. The primary activity involved the archival and status updates of historical Pull Requests.

## 2. Releases
**Status:** No new releases detected in the last 24 hours.

## 3. Important Issues
**Status:** No active issues were updated or created in the last 24 hours.

## 4. Key PR Progress
While no active development occurred, two significant historical PRs were updated (likely closed or archived):

*   **[CLOSED] update save_fn in trainer** [#459](https://github.com/thu-ml/tianshou/pull/459)
    *   **Context:** Originally created in Oct 2021.
    *   **Technical Summary:** This PR refactored the trainer loop to move metric calculation (specifically `rew`, `rew_std`, `len`, `len_std`) directly into `collector.collect()` rather than the logger. It also adjusted `save_fn` to trigger at the beginning of the training cycle.
*   **[CLOSED] Add NPG policy** [#344](https://github.com/thu-ml/tianshou/pull/344)
    *   **Context:** Originally created in Apr 2021.
    *   **Technical Summary:** This PR introduced the **Natural Policy Gradient (NPG)** algorithm implementation, referencing issue #338.

## 5. Why This Project Matters in Today's RL Landscape
Tianshou is a prominent open-source Reinforcement Learning library built on PyTorch, known for its high modularity and support for a wide array of algorithms (including PG, DQN, A2C, and NPG). Even during periods of low commit activity, it remains a critical reference implementation for reproducible RL research, particularly regarding structured trainer loops and collector APIs.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-27

### 1. Today's Highlights
OpenRLHF is currently undergoing a significant architectural pivot. Activity in the last 24 hours indicates a strong push towards consolidating Fully Sharded Data Parallel (FSDP) support—specifically FSDP2—potentially at the expense of DeepSpeed. Additionally, new feature work aims to refine the PPO evaluation pipeline by adding automated best-checkpoint selection.

### 2. Releases
*   **None** (No new releases detected in the last 24 hours).

### 3. Important Issues
*   **None** (No issues updated in the last 24 hours).

### 4. Key PR Progress
*   **[Architecture] Migration to FSDP2 and DeepSpeed Deprecation** — [PR #1176](https://github.com/OpenRLHF/OpenRLHF/pull/1176)
    *   **Status:** Open (Updated 2026-03-26)
    *   **Insight:** This PR proposes removing DeepSpeed dependencies in favor of native FSDP2. This reflects a broader industry trend of moving away from DeepSpeed complexity toward PyTorch-native distributed strategies for better stability and compatibility.
*   **[Feature] Best-Checkpoint Selection for PPO** — [PR #1206](https://github.com/OpenRLHF/OpenRLHF/pull/1206)
    *   **Status:** Open (Created 2026-03-26)
    *   **Insight:** Addresses a correctness bug in `pass@k` aggregation. It introduces an opt-in utility to save the "best" checkpoint based on evaluation metrics, reducing the manual overhead of sorting through PPO run artifacts.
*   **[Backend] Generic FSDP Backend Integration** — [PR #1115](https://github.com/OpenRLHF/OpenRLHF/pull/1115)
    *   **Status:** Open (Updated 2026-03-26)
    *   **Insight:** A foundational PR that introduces a `--dist_backend` CLI flag and `FSDPStrategy` class, enabling users to switch between DeepSpeed and FSDP seamlessly.

### 5. Why This Project Matters in Today's RL Landscape
As RLHF (Reinforcement Learning from Human Feedback) remains the dominant paradigm for aligning LLMs, **OpenRLHF** serves as a critical production-grade alternative to the DeepSpeed-Chat ecosystem. The current shift toward **FSDP/FSDP2** in the PRs signals an adaptation to modern hardware constraints (specifically GPU memory optimization) and a desire for a more maintainable, PyTorch-native codebase, making it an essential project to watch for scalable post-training solutions.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-27

## 1. Today's Highlights
The **verl** ecosystem is demonstrating significant expansion beyond standard LLM RL fine-tuning. Today's activity highlights a strategic push into **Multi-modal/Diffusion RL** (Image/Video generation) and **Hardware Heterogeneity** (NPU/Ascend support). The community is actively fixing critical stability bugs (NCCL timeouts, memory leaks) while proposing forward-looking features like **Decoupled Speculation** for accelerated rollouts and **Remote Agent Integration**.

## 2. Releases
*   **No new releases** detected in the last 24 hours.
*   *Note:* The roadmap issues suggest the community is gearing up for the **v0.8.0** milestone, which appears to focus on multi-modal generation and expanded hardware backends.

## 3. Important Issues
*   **[Roadmap] Multi-modal Generation RL 2026Q2** [#5755](https://github.com/verl-project/verl/issues/5755): A major RFC outlining the next quarter's focus on Diffusers backend integration, vLLM-Omni enhancements, and FlowGRPO support for models like QwenImage.
*   **GB200 & NPU Architecture Support** [#3468](https://github.com/verl-project/verl/issues/3468): Ongoing discussions regarding aarch64 support for NVIDIA GB200s, highlighting deployment challenges in non-x86 environments.
*   **Critical Stability Bottlenecks**:
    *   **NCCL Timeout** [#5750](https://github.com/verl-project/verl/issues/5750): Random crashes during `compute_log_prob` are limiting training runs to <8 hours.
    *   **Megatron Memory Leak** [#5665](https://github.com/verl-project/verl/issues/5665): A confirmed 20GB host memory leak after `save_checkpoint` on GB200 clusters.
*   **LoRA & SGLang Incompatibility** [#4065](https://github.com/verl-project/verl/issues/4065): A long-standing bug affecting LoRA adapters with SGLang backends.

## 4. Key PR Progress
*   **Diffusion & Agent Architecture**:
    *   **FlowGRPO Integration** [#5716](https://github.com/verl-project/verl/pull/5716): Introduces `DiffusionAgentLoop` for image/video RL training.
    *   **Atropos Environment Integration** [#5520](https://github.com/verl-project/verl/pull/5520): Hooks verl's GRPO trainer to the external Atropos RL environment.
*   **Hardware & Performance**:
    *   **Ascend NPU MXFP8** [#5756](https://github.com/verl-project/verl/pull/5756): Enables MXFP8 quantization for rollouts on Ascend 950 devices.
    *   **SGLang LoRA Fix** [#5769](https://github.com/verl-project/verl/pull/5769): Wires up correct adapter paths and sleep modes for SGLang engines.
*   **Training Robustness**:
    *   **Metric Scope Fix** [#5767](https://github.com/verl-project/verl/pull/5767): Corrects inflation of loss metrics by scoping accumulators per mini-batch.
    *   **Gradient Checkpoint Offload** [#5363](https://github.com/verl-project/verl/pull/5363): Implements CPU offloading for checkpoint inputs to save VRAM.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is rapidly evolving from a specialized PPO library into a **full-stack post-training operating system**. Unlike early RLHF frameworks confined to text, verl is aggressively bridging the gap between **text-based LLMs and generative vision models** (via Diffusers/FlowGRPO). Furthermore, its deep integration with non-NVIDIA hardware (Ascend NPUs) and distinct inference engines (vLLM, SGLang, TorchTitan) positions it as a critical neutral ground for training the next generation of large-scale, multi-modal agents without vendor lock-in.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-27

### 1. Today's Highlights
The Open Instruct ecosystem saw high velocity maintenance and optimization activity, with **15 PRs updated** and **0 new issues**. The primary focus was on stabilizing the **GRPO (Group Relative Policy Optimization)** pipeline and aligning infrastructure with **vLLM 0.18+** and **FlashAttention 3 (FA3)**. Key themes include retiring deprecated DeepSpeed/vLLM APIs and resolving CUDA 12.x build configurations.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
No new issues were filed. The development pipeline remains focused on clearing technical debt associated with the recent vLLM and DeepSpeed upgrades.

### 4. Key PR Progress

**Infrastructure & Build Stabilization**
*   **CUDA & FA3 Alignment:** Efforts converged on pinning environments to **CUDA 12.8.1** and explicit FlashAttention 3 wheel configurations to resolve architecture mismatch errors.
    *   [PR #1560](https://github.com/allenai/open-instruct/pull/1560) (Merged): Switched Linux x86_64 torch resolution to `cu128` and pinned direct FA3 wheel URLs.
    *   [PR #1562](https://github.com/allenai/open-instruct/pull/1562) (Open): Reverts mistaken CUDA 12.9 upgrade attempt.
*   **vLLM 0.18+ Compatibility:** The codebase is shedding legacy manual configurations in favor of vLLM's native auto-detection features.
    *   [PR #1564](https://github.com/allenai/open-instruct/pull/1564) (Open): Removes stale `VLLM_ATTENTION_BACKEND` env var, relying on vLLM's FA3>FA2>SDPA fallback logic.
    *   [PR #1565](https://github.com/allenai/open-instruct/pull/1565) (Merged): Removed `configure_hf_hub_retry` as HuggingFace Hub now handles retries internally.

**Training Pipeline Enhancements (GRPO & DeepSpeed)**
*   **DeepSpeed Hooks:** [PR #1566](https://github.com/allenai/open-instruct/pull/1566) (Merged) fixed critical hook registration by migrating from the deprecated private `_register_hooks_recursively` to the public `setup_zero_stage3_hooks` API for DeepSpeed 0.18+.
*   **Observability:** [PR #1558](https://github.com/allenai/open-instruct/pull/1558) (Merged) added logging for Truncated Importance Sampling (TIS) ratios and clip fractions in `grpo_fast`.
*   **Eval Optimization:** [PR #1553](https://github.com/allenai/open-instruct/pull/1553) (Open) introduced a priority Ray queue for local evaluations to prevent evaluation starvation during heavy training backlogs.

**Model & Environment Expansion**
*   **Hybrid Models:** [PR #1425](https://github.com/allenai/open-instruct/pull/1425) (Closed) added support for **Olmo-Hybrid** models, including monkey-patches for vLLM Mamba serialization bugs.
*   **RL Sandboxing:** [PR #1492](https://github.com/allenai/open-instruct/pull/1492) (Open) proposed `SWERLSandboxEnv`, a Docker-based environment for per-sample task evaluation using a `submit` tool.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct continues to serve as a critical bridge between static LLM foundational models and agile RL fine-tuning (RLHF). Today's updates highlight a maturing ecosystem:
1.  **Hybrid Architecture Support:** The integration of Mamba/Transformer hybrid models ([PR #1425](https://github.com/allenai/open-instruct/pull/1425)) positions the repo at the forefront of non-Transformer sequence modeling optimization.
2.  **Verifiable RL:** The introduction of sandboxed code execution environments ([PR #1492](https://github.com/allenai/open-instruct/pull/1492)) signals a shift toward "verifiable RL" where agents are trained against deterministic test suites rather than static reward models.
3.  **Hardware Efficiency:** The aggressive refactoring around FlashAttention 3 and DeepSpeed ZeRO-3 hooks demonstrates a commitment to keeping large-scale RL training economically viable on modern CUDA hardware.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

Here is the RL Daily Digest for **2026-03-27**.

### 📊 RL Daily Digest: rl_games
**Date:** 2026-03-27 | **Repository:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

#### 1. Today's Highlights
Activity in the `rl_games` repository remains focused on troubleshooting existing implementations rather than feature expansion. The primary focus is on algorithm performance consistency, specifically regarding Soft Actor-Critic (SAC). No new code was merged or released today.

#### 2. Releases
*   **None.** No new version tags or release assets were published in the last 24 hours.

#### 3. Important Issues
*   **[Potential Bug] SAC Convergence Discrepancy vs. SB3**
    *   **Issue:** [#341 [OPEN] ?: I think something is not OK with SAC algo](https://github.com/Denys88/rl_games/issues/341)
    *   **Context:** A user reported that a custom drone flight environment (motor-level control) converges within 1 million steps using Stable Baselines3 (SB3), but fails to show progress when ported to `rl_games` using the same hyperparameters.
    *   **Analysis:** This suggests a potential divergence in SAC implementation details, action scaling, or exploration noise between the two libraries. The issue has garnered 4 comments since its creation yesterday, indicating active community interest in validating the bug.

#### 4. Key PR Progress
*   **None.** No pull requests were updated, opened, or merged in the last 24 hours.

#### 5. Why This Project Matters in Today's RL Landscape
Despite the lack of recent updates, `rl_games` remains a critical infrastructure component in the RL ecosystem. It is widely regarded as a high-performance, PyTorch-based library optimized for **vectorized environments** and **complex continuous control** (e.g., Isaac Gym and Brax integration). While libraries like SB3 are preferred for stability and ease of use, `rl_games` is often the choice for researchers pushing the limits of simulation throughput on GPUs. Issues like #341 highlight the ongoing challenge of maintaining algorithmic parity across different codebases, a key concern for reproducibility in RL research.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-03-27

### 1. Today's Highlights
Activity on the Gymnasium repository over the last 24 hours was focused entirely on maintenance and quality assurance. Two existing Pull Requests were resolved, highlighting efforts to ensure compatibility with newer versions of the MuJoCo physics engine (v3.5 and v3.6) and general codebase hygiene. No new issues or releases were recorded.

### 2. Releases
No new releases were published on 2026-03-27.

### 3. Important Issues
No issues were updated or created in the last 24 hours.

### 4. Key PR Progress
Maintenance efforts were the primary focus, with two PRs merging fixes related to the MuJoCo test suite:

*   **[CLOSED] Fix spelling in `test_mujoco_v5.py` ([#1550](https://github.com/Farama-Foundation/Gymnasium/pull/1550))**
    *   **Author:** pseudo-rnd-thoughts
    *   **Summary:** Addressed minor technical debt by correcting spelling mistakes and code styling issues within the MuJoCo test files.
*   **[CLOSED] Change action seed for `MuJoCo/test_verify_reward_survive` ([#1549](https://github.com/Farama-Foundation/Gymnasium/pull/1549))**
    *   **Author:** Kallinteris-Andreas
    *   **Summary:** Resolved a compatibility bug where the test `test_verify_reward_survive` failed to generate a terminating scenario required to check `info["reward_survive"]` under MuJoCo versions 3.5 and 3.6. The action seed was updated to ensure validity across these simulator versions.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the industry-standard API for single-agent reinforcement learning. While the API itself is stable, today's updates demonstrate the project's ongoing commitment to **infrastructure durability**. By actively patching test suites to maintain alignment with underlying physics engines like MuJoCo, the maintainers ensure that standard RL benchmarks remain reproducible and reliable for researchers relying on the latest simulation tools.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (2026-03-27)

Here is the analysis for the Stable Baselines3 repository activity over the last 24 hours.

## 1. Today's Highlights
Activity on the repository was minimal regarding code changes (0 PRs, 0 Releases), but showed continued maintenance engagement on long-term architectural improvements. The focus remains on extensibility, specifically regarding data structures used in buffer management.

## 2. Releases
**None.**
No new version tags were published in the last 24 hours.

## 3. Important Issues
A single issue was updated, highlighting a structural limitation in the library's type definitions.

*   **[#2202 [OPEN] [enhancement] Allow subclassing ReplayBufferSamples and RolloutBufferSamples](https://github.com/DLR-RM/stable-baselines3/issues/2202)**
    *   **Context:** Originally opened in Dec 2025, this issue proposes migrating core buffer data structures (`ReplayBufferSamples`, `RolloutBufferSamples`, etc.) from Python `NamedTuple` to `dataclass`.
    *   **Technical Insight:** `NamedTuple` is restrictive regarding inheritance. By converting to `dataclass`es, the library would allow users to subclass these samples to carry custom metadata (e.g., environment-specific masks or additional observations) through the replay pipeline without monkey-patching.
    *   **Status:** The issue received a fresh comment recently, indicating ongoing community interest in customizing buffer handling.

## 4. Key PR Progress
**No activity.**
There were no updates to Pull Requests in the last 24 hours.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 (SB3) remains the industry standard for reliable, PyTorch-based implementations of core Deep Reinforcement Learning algorithms (PPO, SAC, TD3, A2C). While newer frameworks focus on massive scalability or JAX transitions, SB3 is critical for the RL ecosystem because it provides the "scikit-learn experience" for RL—prioritizing stable baselines, extensive documentation, and ease of use for researchers prototyping environments and applied engineers deploying solutions.

</details>