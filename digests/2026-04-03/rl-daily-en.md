# RL Open Source Daily Digest 2026-04-03

> Generated: 2026-04-02 22:07 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-04-03 displays a clear bifurcation between **post-training LLM infrastructure** and **foundational RL libraries**. The most intense activity is concentrated in the LLM post-training layer (verl, AReaL, OpenRLHF, slime, Open Instruct), where projects are aggressively competing to optimize distributed backends, hardware support (Ascend NPU, FP8), and scalability for 100B+ parameter models. Meanwhile, foundational libraries (Tianshou, Gymnasium) are in a maintenance or refinement phase, focusing on stability and API standardization. The "Cloud/Platform" layer (ROCK) is maturing toward enterprise-grade reliability.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 11 | 32 | 0 | **High**. Dominant focus on hardware expansion (Ascend) and stabilizing vLLM/Megatron backends. |
| **AReaL** | 2 | 5 | 0 | **High**. Strategic shift toward Multi-Agent RL (MARL) and system-level IPC optimizations. |
| **ROCK** | 2 | 6 | 0 | **Medium**. Focus on infrastructure hardening (Redis persistence, CI) for production reliability. |
| **slime** | 3 | 2 | 0 | **Medium**. Debugging complex FP8/offloading issues for ultra-large models (GLM-5). |
| **Open Instruct** | 0 | 5 | 0 | **Medium**. Integration of native SFT trainers and VLM (Qwen3.5-VL) support. |
| **OpenRLHF** | 0 | 1 | 0 | **Medium**. Single high-impact PR introducing Evolutionary Strategies (ES). |
| **Tianshou** | 1 | 3 | 1 | **Medium**. Maintenance release (v2.0.1) fixing dependency conflicts and TRPO bugs. |
| **Gymnasium** | 1 | 1 | 0 | **Low**. Incremental API enhancements via `ActionRepeat` wrapper. |
| *CleanRL, TRL, SB3, etc.* | 0 | 0 | 0 | **None**. No activity detected. |

## Shared Research & Engineering Directions

**Research Directions**
*   **Evolutionary & Hybrid Optimization:** OpenRLHF’s integration of Evolutionary Strategies (ES) alongside PPO/GRPO suggests a growing trend toward hybrid training paradigms to solve convergence issues in large policy networks.
*   **Multi-Agent & Agentic Workflows:** AReaL’s explicit "Phase 1" MARL roadmap and "Tree Training" fixes indicate a strategic pivot toward multi-agent reasoning and structured agentic workflows, moving beyond single-turn preference optimization.
*   **Temporal Abstraction:** Gymnasium’s `ActionRepeat` wrapper standardizes support for model-based RL architectures (e.g., DreamerV3), acknowledging the need for better temporal granularity control in planning.

**Engineering & Infrastructure Directions**
*   **Hardware Fragmentation:** verl’s aggressive push for **Ascend NPU** parity alongside standard NVIDIA GPU support highlights a shift toward hardware-neutral RL frameworks to mitigate supply chain risks.
*   **Precision & Memory Optimization:** The ecosystem is grappling with the friction of next-gen hardware. **slime** is debugging FP8 block alignment, while **verl** is documenting NVFP4 QAT, indicating that quantization is now a core requirement for training (not just inference) at scale.
*   **Communication Overhead Reduction:** **AReaL** introduced zero-copy IPC and sparse weight synchronization, while **verl** fixed dynamic context parallelism. This signals that the bottleneck has shifted from compute to inter-process/node communication in distributed RL.

## Differentiation Analysis

*   **verl vs. AReaL (The Backend Wars):** While both target distributed post-training, **verl** is differentiating via **multi-backend agility** (vLLM + SGLang + Megatron) and hardware expansion (NPU). **AReaL** is differentiating via **system-level customs**, building specialized IPC and "Tree Training" logic specifically for agentic/multi-agent loops rather than just generic model alignment.
*   **Open Instruct vs. TRL:** **Open Instruct** is carving a niche by deeply integrating the **OLMo-core** native stack and early support for cutting-edge VLMs (Qwen3.5-VL), positioning itself as the go-to for researchers tightly coupled to the AllenAI/HuggingFace model ecosystems, whereas TRL remains quieter.
*   **ROCK vs. Other Frameworks:** Unlike the training frameworks (verl/AReaL), **ROCK** focuses exclusively on the **DevOps/Platform layer** (K8s, Redis persistence, sandboxing). It aims to be the orchestration layer that runs the other frameworks, rather than a competitor in algorithm implementation.

## Community Momentum & Maturity

*   **Maturity (Maintenance Phase):** **Tianshou** and **Gymnasium** demonstrate high maturity through stability-focused updates (dependency pinning, API wrappers) rather than feature explosions.
*   **Velocity (Growth Phase):** **verl** and **AReaL** show the highest velocity, driven by the immediate demands of LLM post-training. Their issue trackers are filled with complex, high-scale distributed system problems rather than basic usage questions.
*   **Stabilization:** **ROCK** is transitioning from a "toolkit" to an "enterprise platform," evidenced by the focus on CI workflows and database persistence.
*   **Risk:** **slime** is facing growing pains; the FP8 alignment issues and Docker tag mismatches suggest that supporting bleeding-edge hardware (H20-141G clusters) is straining their release engineering processes.

## Trend Signals

1.  **The Rise of "System-RL":** The complexity of PRs in verl and AReaL (IPC, tensor parallelism, weight sharding) confirms that the primary challenge in RL has shifted from algorithm design to **systems engineering**. Efficient RL is now a distributed systems problem.
2.  **Hardware Neutrality is Imminent:** With verl’s focus on Ascend NPU support, 2026 is likely the year where major RL frameworks decouple from CUDA-only ecosystems.
3.  **Agentic Architecture Coalescing:** The convergence of "Tree Training" (AReaL), "Sandbox Environments" (Open Instruct), and MARL roadmaps signals that the industry is standardizing on the infrastructure needed for autonomous, long-horizon agents.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK (alibaba/ROCK)
**Date:** 2026-04-03

## 1. Today's Highlights
Activity on the ROCK (Reinforcement Learning and Optimization Cloud Kit) repository focused heavily on infrastructure hardening and bug fixing. Key developments include the resolution of a critical Kubernetes (k8s) data persistence issue and the implementation of new CI workflows for unit testing. There is a clear trend toward stabilizing the platform's metadata handling and developer tooling.

## 2. Releases
*   **None:** No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **[Bug] K8s Sandbox Data Loss Risk (#712):**
    *   **Details:** A flaw was identified where exceptions in retrieving sandbox info from Redis are caught but not raised, returning `None`. This results in valid data in Redis being overwritten by empty values during status updates.
    *   **Status:** Open | [View Issue](https://github.com/alibaba/ROCK/issues/712)
*   **[Enhancement] CI Unit Testing (#735):**
    *   **Details:** A proposal to add unit test tasks to the CI pipeline to improve code quality and stability.
    *   **Status:** Open | [View Issue](https://github.com/alibaba/ROCK/issues/735)

## 4. Key PR Progress
*   **Infrastructure & QA:**
    *   **[OPEN] Add Unit Test Workflow (#736):** Implements the CI tasks requested in #735. [View PR](https://github.com/alibaba/ROCK/pull/736)
    *   **[CLOSED] Restore CI Workflow (#728):** Fixes configuration to allow CI triggers via request. [View PR](https://github.com/alibaba/ROCK/pull/728)
*   **Bug Fixes:**
    *   **[OPEN] Fix K8s Sandbox Info (#713):** Targets the Redis overwrite bug reported in #712. [View PR](https://github.com/alibaba/ROCK/pull/713)
*   **Feature Updates:**
    *   **[OPEN] Persist Sandbox Metadata (#730):** Moves sandbox metadata storage to a database (refs #729). [View PR](https://github.com/alibaba/ROCK/pull/730)
    *   **[CLOSED] Support `oss_deps` for Harbor (#734):** Adds `oss_deps` field to `EnvironmentConfig`, closing #733. [View PR](https://github.com/alibaba/ROCK/pull/734)
    *   **[OPEN] JobConfig Labels (#721):** Adds label support and translates field descriptions to English. [View PR](https://github.com/alibaba/ROCK/pull/721)

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from research notebooks to production environments, **infrastructure reliability** becomes the bottleneck. ROCK addresses this by providing a cloud-native toolkit for scaling RL. Today's focus on **Redis persistence (#712)** and **database metadata storage (#730)** highlights the industry's current challenge: ensuring state consistency and fault tolerance in distributed RL systems. The addition of unit testing CI (#736) further signals the project's maturation from an experimental framework to an enterprise-grade platform.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-04-03

## 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours indicates a strong focus on infrastructure stability and scalability. Key discussions center on **FP8 compatibility issues** with SGLang during large-model rollouts and **deployment inconsistencies** in Docker releases. Additionally, contributors are actively refining Ray integration for distributed training roles.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.
*   *Note:* Users are currently advised to verify commit hashes when pulling the `v0.2.4` Docker image due to a reported tagging mismatch ([Issue #1794](https://github.com/THUDM/slime/issues/1794)).

## 3. Important Issues
*   **FP8 Rollout Incompatibility:** Users running GLM-4.7 (355B) are encountering blocking errors during FP8 rollouts. The issue stems from a misalignment between `output_partition_size` (48) and SGLang’s FP8 quantization block requirement (128).
    *   [Issue #1796](https://github.com/THUDM/slime/issues/1796)
*   **Offloading Instability (GLM-5):** Experiments involving GLM-5 GRPO are crashing at `torch_memory_saver.pause()` during the offload training phase.
    *   [Issue #1786](https://github.com/THUDM/slime/issues/1786)
*   **Installation Requests:** There is rising community demand for robust non-Docker installation support to facilitate usage in restricted environments.
    *   [Issue #1793](https://github.com/THUDM/slime/issues/1793)

## 4. Key PR Progress
*   **Sampling Mask Support:** [PR #1795](https://github.com/THUDM/slime/pull/1795) introduces support for rollout sampling masks, likely enhancing control over action selection or token generation during inference.
*   **Ray Integration Fix:** [PR #1797](https://github.com/THUDM/slime/pull/1797) addresses a bug where the Critic role was incorrectly passed during `RayTrainGroup` creation, potentially preventing correct distributed role assignment.

## 5. Why This Project Matters in Today's RL Landscape
`slime` continues to serve as a critical infrastructure layer for **Post-Training (GRPO)** of Large Language Models (LLMs). Today's activity highlights the engineering challenges of running RL on **ultra-large scale models (100B+ parameters)**. Specifically, the project sits at the bleeding edge of hardware optimization, tackling the friction between **FP8 precision** and efficient memory offloading strategies required to train models like GLM-5 on clusters with high-bandwidth memory (H20-141G).

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-04-03

## 1. Today's Highlights
AReaL demonstrates significant momentum in scaling Reinforcement Learning infrastructure. The primary focus is on **Multi-Agent RL (MARL)** and **system-level optimizations** for large-scale training (Megatron-LM & FSDP). Key developments include the initiation of a MARL roadmap and the introduction of zero-copy IPC optimizations.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Bug] FSDP Incompatibility with Qwen3.5 ([#1132](https://github.com/inclusionAI/AReaL/issues/1132))**
    *   A new bug report indicates that FSDP's `compute_logp` fails when processing Hugging Face Qwen3.5 models due to dictionary handling of `attention_mask`. This affects users attempting to load these specific model weights directly.
*   **[RFC] Omni Model RL Support ([#922](https://github.com/inclusionAI/AReaL/issues/922))**
    *   A significant Feature Request for adding RL support (specifically GRPO) for **Omni multimodal models** (Qwen3-Omni, Qwen2.5-Omni) has been closed. This suggests that multimodal RL capabilities are either implemented or deferred, marking a decision point in the project's roadmap.

## 4. Key PR Progress
Infrastructure scaling and efficiency dominated the commit activity:

*   **MARL Infrastructure ([#1129](https://github.com/inclusionAI/AReaL/pull/1129)):**
    *   Opened by *luzai*, this PR implements "Phase 1" of the Reasoning & MARL roadmap. It introduces data pipelines and verifiers specifically for multi-agent reinforcement learning workflows.
*   **Performance Optimizations:**
    *   **Zero-Copy IPC ([#1133](https://github.com/inclusionAI/AReaL/pull/1133)):** Introduced SharedMemory IPC for `RTensor`, bypassing HTTP overhead for same-node transfers.
    *   **Sparse Weight Sync ([#1127](https://github.com/inclusionAI/AReaL/pull/1127)):** Added hash-based synchronization for FSDP/Archon to skip broadcasting unchanged parameter shards.
*   **Megatron & Agentic Capabilities:**
    *   **LoRA Support ([#1123](https://github.com/inclusionAI/AReaL/pull/1123)):** Enables LoRA RL-training within the Megatron engine.
    *   **Tree Training Fix ([#1135](https://github.com/inclusionAI/AReaL/pull/1135)):** Patched a regression in "tree training" (critical for shared-prefix batches/agentic work) caused by indentation errors in the recent Megatron bridge adaptation.
    *   **Online Rollout Service ([#1121](https://github.com/inclusionAI/AReaL/pull/1121)):** Merged support for online inference services, enabling Human-in-the-loop (HITL) workflows.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a high-performance alternative to standard HF `trl` stacks by focusing on **production-grade scaling**.
1.  **Beyond Single Agent:** The shift toward MARL (Issue #1114/Roadmap) aligns with the industry trend of using multi-agent systems for complex reasoning tasks.
2.  **Efficiency at Scale:** The introduction of custom IPC and sparse synchronization suggests AReaL is optimizing for the high-communication overhead inherent in distributed RL, moving beyond naive distributed training loops.
3.  **Agentic Readiness:** Features like "Tree Training" and "Online Rollout Services" indicate the framework is built specifically for **agentic workflows** (handling tree-structured thoughts and environment interactions) rather than just static preference optimization.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-04-03

Here is the analysis of today's activity for the Tianshou repository.

## 1. Today's Highlights
The Tianshou team has rolled out a critical maintenance patch (**v2.0.1**) to address immediate dependency conflicts. Simultaneously, the maintainers cleared a backlog of significant Pull Requests, merging fixes for TRPO stability and environment collection flexibility.

## 2. Releases
*   **[v2.0.1](https://github.com/thu-ml/tianshou/releases/tag/v2.0.1)**
    *   **Type:** Maintenance Release
    *   **Summary:** This version addresses compatibility issues identified in the `eval` extras, specifically constraining `pandas` to ensure the high-level experiment API functions correctly.

## 3. Important Issues
*   **[#1289 Enabling extra eval produces error due to unconstrained pandas version](https://github.com/thu-ml/tianshou/issues/1289)**
    *   **Status:** Closed (Resolved)
    *   **Impact:** Users running `tianshou[eval]==2.0.0` with a standard environment encountered import errors in the `highlevel.experiment` module.
    *   **Root Cause:** Unconstrained dependency allowed `pandas>=3.0`, which broke the current API usage.
    *   **Resolution:** Addressed in PR #1290 and included in release v2.0.1.

## 4. Key PR Progress
Three significant PRs were closed today, indicating a focus on algorithm correctness and data collection robustness:

*   **[#1290 Constrain pandas to <3](https://github.com/thu-ml/tianshou/pull/1290) [CLOSED]**
    *   Immediate hotfix to resolve the `pandas` incompatibility affecting the experiment builder.
*   **[#1287 fix: restore parameters on TRPO line search failure](https://github.com/thu-ml/tianshou/pull/1287) [CLOSED]**
    *   **Technical Detail:** Corrects a bug in Trust Region Policy Optimization (TRPO). Previously, if the line search failed to satisfy the KL constraint, the policy parameters were left in an invalid state rather than reverting to the pre-update configuration.
*   **[#1127 Feat/collect equal episode num in all envs](https://github.com/thu-ml/tianshou/pull/1127) [CLOSED]**
    *   **Technical Detail:** A long-running feature (initiated in 2024) that refines the collector to ensure equal episode counts across parallel environments, improving batch consistency during training.

## 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a pivotal library in the modern RL ecosystem due to its **modular design** and support for **vectorized environments**. Unlike monolithic frameworks, Tianshou provides fine-grained control over the training loop, making it a preferred choice for researchers implementing complex algorithms like TRPO. Today's update highlights the maintainers' commitment to both **dependency hygiene** (crucial for reproducibility) and **algorithmic correctness** (fixing the TRPO trust region implementation).

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-04-03

### 1. Today's Highlights
Activity on the OpenRLHF repository was focused on architectural expansion rather than maintenance or patch releases. The primary event was the submission of a significant Pull Request aimed at integrating high-performance Evolutionary Strategies (ES), signaling a potential shift toward hybridizing gradient-based RL with evolution-based optimization.

### 2. Releases
No new releases were recorded for 2026-04-03.

### 3. Important Issues
No issues were active or created in the last 24 hours.

### 4. Key PR Progress
*   **[OPEN] Fast Evolutionary Algorithm Support** ([PR #1211](https://github.com/OpenRLHF/OpenRLHF/pull/1211))
    *   **Author:** DavidKoplow
    *   **Summary:** This PR introduces a high-performance implementation of Evolutionary Strategies (ES). The author claims a **10-30x speedup** over the baseline established in a recent paper (arXiv:2509.24372).
    *   **Technical Approach:** The implementation achieves performance gains primarily through **reversible floating-point arithmetic**. By upcasting floating-point numbers, the code enables lossless addition/subtraction, which likely facilitates efficient memory usage or parallelization of the evolutionary loop within the existing OpenRLHF infrastructure.

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF has established itself as a critical infrastructure for post-training and alignment of Large Language Models (LLMs). The introduction of ES capabilities is strategically significant because it addresses the **scalability and stability** challenges inherent in pure Reinforcement Learning from Human Feedback (RLHF).

By potentially integrating ES—which is inherently more parallelizable and robust to sparse rewards—OpenRLHF is moving toward a **hybrid training paradigm**. If merged, this PR would allow practitioners to leverage evolutionary exploration for complex reasoning tasks where traditional policy gradients (like PPO) may struggle with convergence or wall-clock efficiency.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-04-03

## 1. Today's Highlights
The **verl** ecosystem showed significant activity today with **32 PR updates** and **11 issue discussions**. The focus is heavily split between **stabilizing distributed training backends** (specifically Megatron-LM and vLLM integration) and expanding hardware support for **NPU (Ascend)**. Key discussions revolve around the **2026 Q2 Roadmap**, targeting multi-modal generation RL and enhanced model support (e.g., Qwen3.5, DeepSeek-V3.2). A rapid patch cycle was observed for vLLM/SGLang synchronization errors and Megatron loss normalization.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Multi-Modal Generation RL Roadmap (2026 Q2):** Issue [#5755](https://github.com/verl-project/verl/issues/5755) outlines the architecture for the Rollout Engine (vLLM-Omni enhancements, TP/DP support) and generation capabilities.
*   **Training Stability & Performance:**
    *   **Async Training Hangs:** Users report hangs in async training modes in Issue [#5815](https://github.com/verl-project/verl/issues/5815).
    *   **Legacy Megatron Normalization:** Issue [#5863](https://github.com/verl-project/verl/issues/5863) identifies a loss normalization parity bug in the legacy Megatron worker, which was quickly addressed in PRs.
    *   **Parameter Update Latency:** A long-standing performance issue regarding slow parameter updates was updated in Issue [#496](https://github.com/verl-project/verl/issues/496).
*   **Hardware Expansion (Ascend NPU):** The community is actively tracking the "verl on Ascend" roadmap for Q2 2026 in Issue [#5526](https://github.com/verl-project/verl/issues/5526), aiming for feature parity with GPU implementations.

## 4. Key PR Progress
*   **Backend Fixes (Megatron & vLLM):**
    *   PR [#5867](https://github.com/verl-project/verl/pull/5867) (Merged) restored loss normalization parity for the legacy Megatron actor worker.
    *   PR [#5866](https://github.com/verl-project/verl/pull/5866) and [#5865](https://github.com/verl-project/verl/pull/5865) fixed synchronization errors in vLLM caused by SGLang sleep optimization logic.
    *   PR [#5869](https://github.com/verl-project/verl/pull/5869) fixed dynamic context parallel batch splitting and loss normalization for the Megatron engine.
*   **Feature Enhancements:**
    *   PR [#5870](https://github.com/verl-project/verl/pull/5870) unified critic model configs and fixed hanging issues with `tie_word_embeddings=False`.
    *   PR [#5793](https://github.com/verl-project/verl/pull/5793) introduced logging for numeric `reward_extra_info` in training metrics.
*   **Documentation & Hardware:**
    *   PR [#5861](https://github.com/verl-project/verl/pull/5861) added documentation for **NVFP4 QAT** (Quantization-Aware Training) support.
    *   PR [#5871](https://github.com/verl-project/verl/pull/5871) and [#5835](https://github.com/verl-project/verl/pull/5835) added NPU FAQs and long-sequence optimization docs for Qwen3-235B on Ascend.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is establishing itself as a critical infrastructure layer for post-training LLMs, specifically bridging the gap between high-throughput inference engines (vLLM, SGLang, TensorRT-LLM) and distributed training frameworks (Megatron-LM, FSDP).

Today's activity highlights verl's role in **democratizing advanced RL techniques**:
1.  **Multi-Backend Agility:** By simultaneously fixing bugs across vLLM, SGLang, and Megatron, verl ensures developers aren't locked into a single inference/training stack.
2.  **Hardware Neutrality:** The aggressive roadmap for **Ascend NPU** support signifies a shift away from NVIDIA-exclusive RL ecosystems, essential for global AI infrastructure resilience.
3.  **Performance Optimization:** The focus on fine-grained sleeping (PR [#5527](https://github.com/verl-project/verl/pull/5527)), NVFP4 QAT, and dynamic context parallelism indicates a maturity phase focused on squeezing maximum efficiency out of large-scale clusters (e.g., 235B parameter models).

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-04-03

### 1. Today's Highlights
Activity in the last 24 hours focused heavily on infrastructure robustness and expanding model support. Key updates include the introduction of a native OLMo-core Supervised Fine-Tuning (SFT) trainer and the integration of **Qwen3.5-VL** vision-language capabilities. Additionally, the GRPO (Group Relative Policy Optimization) implementation received significant refactoring to streamline utility functions.

### 2. Releases
*   **None** recorded for this period.

### 3. Important Issues
*   **No updates** in the last 24 hours.

### 4. Key PR Progress
*   **[NEW] Native OLMo-core SFT Implementation:** PR [#1579](https://github.com/allenai/open-instruct/pull/1579) introduces `olmo_core_finetune.py`, a new trainer leveraging OLMo-core’s native infrastructure (HFDataLoader, packing collator) alongside single/multi-node debug scripts.
*   **[NEW] Qwen3.5 VLM Support:** PR [#1568](https://github.com/allenai/open-instruct/pull/1568) adds support for Qwen3.5 vision-language models. It defaults to SPDA due to FA3 incompatibilities and includes a Liger-Kernel bump to fix paged attention issues.
*   **[REFACTOR] GRPO Optimization:** PR [#1578](https://github.com/allenai/open-instruct/pull/1578) is refactoring the GRPO trainer by renaming `GRPOExperimentConfig` and inlining utilities (e.g., `mask_logprobs`, `compute_tis_weights`) from `grpo_utils.py` into `grpo_fast.py` for improved performance.
*   **[CLOSED] HSDP Sharding Docs:** PR [#1582](https://github.com/allenai/open-instruct/pull/1582) merged documentation explaining OLMo-core's HSDP sharding across DPO and GRPO trainers, unifying flags across these algorithms.
*   **[WIP] RL Sandbox Environment:** PR [#1492](https://github.com/allenai/open-instruct/pull/1492) continues progress on `SWERLSandboxEnv`, enabling per-sample Docker tasks and submit-based evaluation for code generation agents.

### 5. Why This Project Matters in Today's RL Landscape
As the field moves beyond standard RLHF, **Open Instruct** serves as a critical bridge between upstream model architectures (like Qwen3.5 and OLMo) and advanced post-training techniques (GRPO/DPO). By integrating native SFT trainers and optimizing low-level utility functions for GRPO, this project lowers the barrier to entry for high-performance, distributed training of reasoning and tool-using agents.

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

# RL Daily Digest: Gymnasium
**Date:** 2026-04-03

### 1. Today's Highlights
Activity in the Gymnasium repository focused on enhancing temporal abstraction capabilities. A new Pull Request has been opened to implement an `ActionRepeat` wrapper, directly addressing a long-standing proposal to better support world-model architectures like Dreamer and PlaNet.

### 2. Releases
*   **No new releases** detected in the last 24 hours.

### 3. Important Issues
*   **[#652 [Proposal] Inclusion of ActionRepeat wrapper](https://github.com/Farama-Foundation/Gymnasium/issues/652)**
    *   **Status:** Open (Updated recently)
    *   **Context:** Originally proposed in 2023, this issue advocates for a native wrapper to repeat actions for $n$ steps.
    *   **Impact:** Crucial for model-based RL (e.g., DreamerV3) where temporal aggregation reduces planning complexity and aligns with MuJoCo dynamics.

### 4. Key PR Progress
*   **[#1553 Add ActionRepeat wrapper](https://github.com/Farama-Foundation/Gymnasium/pull/1553)**
    *   **Author:** Lidang-Jiang
    *   **Status:** Open
    *   **Details:** Implements the wrapper requested in Issue #652. It extends `gym.Wrapper` to deterministically repeat the `step()` method, accumulating rewards while abstracting the intermediate time-steps from the agent.
    *   **Technical Note:** The implementation deliberately avoids `ActionWrapper` to modify `step()` semantics directly without altering the action space passed to the underlying environment.

### 5. Why This Project Matters in Today's RL Landscape
As the standard API for single-agent RL, Gymnasium remains the backbone of the open-source ecosystem. While core environment interfaces have stabilized, the addition of wrappers like `ActionRepeat` signals a maturation phase where the library evolves to support specific architectural needs of SOTA model-based algorithms. Standardizing these utilities reduces boilerplate for researchers experimenting with temporal granularity.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>