# RL Open Source Daily Digest 2026-03-17

> Generated: 2026-03-16 22:06 UTC | Projects covered: 15

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

The RL open-source ecosystem on 2026-03-17 shows clear stratification between high-activity "LLM/VLM RLHF" stacks and quieter "Classic/Generic RL" frameworks. The dominant narrative across active projects is the transition from text-only LLM alignment to **multimodal reasoning** (VLMs) and the hardening of **distributed infrastructure** (FSDP2, colocation, serverless). There is a noticeable lag in support for the newest model families (Qwen3.5, GLM-4.7), causing friction across multiple codebases.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (6+) | High (8+) | **v0.7.1** | **Dominant.** Leading in multimodal (MTP) and distillation features. |
| **AReaL** | Med (4) | High (8) | None | **Architectural.** Heavy focus on FSDP2, gateways, and colocation. |
| **OpenRLHF** | Low | Med (1 major) | None | **Strategic.** Proposing critical shift from DeepSpeed to FSDP2. |
| **Open Instruct** | Low | Med (4) | None | **Agentic.** Integrating PPO+GAE and sandboxed code environments. |
| **slime** | Med (5) | Low (2) | None | **Churn.** High friction adopting Qwen3.5; exploring CISPO algorithm. |
| **TRL** | Med (2) | Med (6) | None | **Optimization.** Async GRPO and self-distillation (SDPO/SDFT). |
| **ROCK** | Med (3) | Med (3) | None | **Cloud-Native.** Moving toward serverless (FC3) and OSS integration. |
| **ROLL** | Med (3) | Low (2) | None | **Hardware.** Adding NPU support; troubleshooting Qwen3.5. |
| **CleanRL** | Low (1) | None | None | **Maintenance.** Minimal hyperparameter inquiry. |
| **Gymnasium** | None | Low (1) | None | **Maintenance.** MuJoCo rendering fix. |
| **Others** | None | None | None | *PettingZoo, rl_games, SB3, Tianshou, torchtune showed no activity.* |

## Shared Research & Engineering Directions

**Research Directions**
*   **Beyond PPO/GRPO:** Projects are iterating on stability and efficiency. *Open Instruct* merged PPO with GAE into GRPO; *slime* is investigating **CISPO** (Clipped IS-weight Policy Optimization) to handle low-probability token instability; *TRL* is implementing **SDPO** (Self-Distillation Policy Optimization).
*   **On-Policy Distillation:** A clear trend emerging in *verl* and *ROLL* is the use of RL specifically for model compression, using logprobs from teacher models during the RL loop.

**Engineering & Infrastructure**
*   **The Great Migration to FSDP2:** *OpenRLHF* (#1176) and *AReaL* (#1015) are aggressively deprecating DeepSpeed and legacy FSDP in favor of PyTorch-native FSDP2 to support massive MoE models.
*   **Colocation & Communication Bypass:** *AReaL* (#992) and *verl* are optimizing weight updates by bypassing NCCL in favor of direct tensor passing when Rollout and Actor processes share GPUs.
*   **Serverless & Sandboxes:** *ROCK* is integrating Alibaba Function Compute (FC3) for elastic training, while *Open Instruct* introduced `SWERLSandboxEnv` for safe code execution, signaling a push toward agentic/cloud-native RL.

## Differentiation Analysis

*   **verl vs. OpenRLHF:** *verl* is moving fastest on **Multimodal support** (Qwen3-VL, diffusion models via vLLM-Omni) and On-Policy Distillation, positioning itself as the post-training stack for frontier models. *OpenRLHF* is distinguishing itself by tackling the **distributed training substrate**, specifically leading the complex migration to FSDP2 and away from DeepSpeed dependencies.
*   **AReaL vs. TRL:** *AReaL* focuses on **system-level performance** (gateways, RTensor refactors, colocation) for production scale. *TRL* acts as the **algorithmic testbed** for the HuggingFace ecosystem, rapidly iterating on algorithm variants (Async GRPO, SDPO) and VLM-specific alignment fixes.
*   **Cloud/Agentic Niche:** *ROCK* and *Open Instruct* are carving out specific niches—*ROCK* in serverless/cloud-native infrastructure, and *Open Instruct* in "agentic" RL for software engineering via sandboxes.

## Community Momentum & Maturity

*   **The "New Model" Lag:** The ecosystem is currently struggling to catch up with the release of **Qwen3.5**. Users are encountering initialization errors and config mismatches across *slime*, *ROLL*, and *verl*, indicating that RL frameworks remain the bottleneck in the adoption of new foundation models.
*   **Infrastructure Maturity:** The focus has shifted from "implementing PPO" to "solving systems problems" (OOM errors, gradient accumulation bugs, socket leaks). This indicates the field has matured; the primary challenge is no longer the math, but the reliable distributed execution of it at scale.
*   **Quiet Projects:** The total lack of activity in classic RL libraries (*Stable Baselines3*, *Tianshou*, *rl_games*) compared to the high churn in LLM-RL frameworks (*verl*, *AReaL*) suggests a divergence: resources and community attention are overwhelmingly concentrated on LLM post-training optimization.

## Trend Signals

*   **Signal: Distillation is the New RL.** The proliferation of On-Policy Distillation (*verl*, *ROLL*) and Self-Distillation (*TRL*) suggests a pivot: RL infrastructure is increasingly being used not just for reward optimization, but for efficient knowledge transfer and model compression.
*   **Signal: Async is Essential.** Both *TRL* (Async GRPO) and *OpenRLHF* are acknowledging that synchronous generation is a bottleneck for reasoning models. Asynchronous architectures are becoming the default for efficient training.
*   **Signal: Hardware Fragmentation.** *ROLL* adding NPU (Huawei) support and *verl* optimizing for Megatron suggest that the "CUDA-only" era of RLHF is ending, driven by hardware export constraints and the need for specialized accelerators.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL Daily Digest: 2026-03-17

Here is the analysis of today's activity for the **ROLL (Reinforcement Learning Open Optimizer)** framework.

## 1. Today's Highlights
Activity for March 17, 2026, focused heavily on **hardware extensibility** and **backend compatibility**. Key developments include a move to support Huawei NPU architecture and ongoing troubleshooting for Qwen3.5 integration with Megatron-LM.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **NPU Megatron Support:** Discussion continues on backend expansion, specifically regarding Megatron-LM implementations.
*   **Qwen3.5 & Megatron Compatibility:**
    *   **[#372](https://github.com/alibaba/ROLL/issues/372):** Users are reporting errors when attempting to use LoRA with Qwen3.5 on the Megatron backend.
    *   **[#379](https://github.com/alibaba/ROLL/issues/379):** A `TypeError` regarding `Qwen3_5Config` (unexpected `linear_attention_type` argument) is blocking RLVR training workflows for the 4B model variant.
*   **Kernel Optimization:** **[#381](https://github.com/alibaba/ROLL/issues/381)** raised a technical inquiry regarding the compatibility of `torch.compile` with Megatron-LM, specifically when utilizing Pipeline/ Tensor/ Expert Parallelism (PP/TP/EP).

## 4. Key PR Progress
*   **[#380](https://github.com/alibaba/ROLL/pull/380) [WIP] Add NPU Megatron support:** This Work-In-Progress PR introduces `mindspeed` integration to enable Megatron support on NPU (Neural Processing Units), including example YAML configurations.
*   **[#382](https://github.com/alibaba/ROLL/pull/382) Add RLix to notable works:** A documentation update proposing the addition of "RLix" to the project's notable works section in the README.

## 5. Why This Project Matters in Today's RL Landscape
As noted in the recent project update **[#367](https://github.com/alibaba/ROLL/issues/367)**, ROLL is positioning itself as a production-grade infrastructure for Large Language Model (LLM) RL. By refactoring rollouts to be scheduled via **sglang-router** and adding support for **On-Policy Distillation**, the project addresses critical scalability and efficiency bottlenecks. Today’s focus on **NPU support** and **torch.compile** compatibility further solidifies its intent to be a hardware-agnostic, high-performance optimization layer for next-generation foundation models.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem
**Date:** 2026-03-17

## 1. Today's Highlights
The ROCK ecosystem is pivoting towards **Serverless RL** and **Cloud-Native Storage Integration**. Today's activity was dominated by significant new feature proposals to integrate Alibaba Cloud Function Compute (FC3) for sandbox runtime and enhanced OSS (Object Storage Service) capabilities for data handling. Additionally, the community merged support for advanced resource configuration mapping.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Serverless Architecture Proposal #644](https://github.com/alibaba/ROCK/issues/644):** A major feature request to introduce **Alibaba Function Compute (FC3)** as a sandbox runtime provider. This aims to reduce operational overhead and enable auto-scaling for RL sandboxes, moving beyond traditional Docker/Ray/K8s deployments.
*   **[OSS Integration #640](https://github.com/alibaba/ROCK/issues/640):** Request for SDK/API enhancements to allow uploading artifacts directly to a specified OSS path, crucial for centralized experiment logging.
*   **[Versioning #638](https://github.com/alibaba/ROCK/issues/638):** Issue closed regarding the update to version **1.4.1**.

## 4. Key PR Progress
*   **⚡ [Serverless Runtime Support #643](https://github.com/alibaba/ROCK/pull/643):** Implements the FC3 provider requested in Issue #644. Key technical implementations include thread-safe CircuitBreaker patterns for fault tolerance and WebSocket reconnection logic. This is a critical step towards elastic, serverless RL training.
*   **💾 [OSS Upload Utility #641](https://github.com/alibaba/ROCK/pull/641) & [#642](https://github.com/alibaba/ROCK/pull/642):** Two PRs opened by @zhongwen666 to support uploading files to specified OSS buckets, referencing Issue #640.
*   **✅ [Config Mapping Merged #635](https://github.com/alibaba/ROCK/pull/635):** Merged today. Adds support for specifying pool and template mappings via configuration files, improving resource management flexibility.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning workloads grow more compute-intensive, the infrastructure bottleneck often shifts from algorithm design to resource orchestration. ROCK's move to support **Alibaba Function Compute (FC3)** signals a maturing trend in the industry: **Serverless RL**. By abstracting away cluster management and enabling auto-scaling sandboxes, ROCK lowers the barrier to entry for大规模 (large-scale) distributed training, bridging the gap between experimental code and production-grade cloud deployment.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-03-17

## 1. Today's Highlights
Activity in the `slime` repository remains focused on the adoption of next-generation models (Qwen3.5) and resolving environment-specific performance bottlenecks. A key discussion has emerged regarding the removal of "true-on-policy" training modes, indicating a strategic shift in the framework's optimization strategy. Additionally, the community is actively probing the feasibility of integrating new algorithms like CISPO.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The last significant activity suggests ongoing development in the `nightly-dev` branches.

## 3. Important Issues
*   **Qwen3.5 Model Support & Bugs:** High demand (👍 16) for support of the Qwen3.5 series ([#1627](https://github.com/THUDM/slime/issues/1627)). Simultaneously, users are reporting initialization errors when attempting to run Qwen3.5 on recent nightly builds ([#1730](https://github.com/THUDM/slime/issues/1730)).
*   **Architectural Change Inquiry:** User inquiry regarding the removal of "true-on-policy" mode ([#1693](https://github.com/THUDM/slime/issues/1693)), referencing previous work on eliminating numeric differences between training and inference.
*   **Performance Bottlenecks:**
    *   Significant slowdown reported in training custom agents (2 hours/step), pointing to potential inefficiencies in asynchronous rollout generation ([#1332](https://github.com/THUDM/slime/issues/1332)).
    *   OOM errors during the train stage in co-located environments continue to affect users with high rollout counts ([#537](https://github.com/THUDM/slime/issues/537)).
*   **Environment Stability:** Users manual-building environments for GLM-4.7 are facing dependency conflicts with `transformers` versions ([#1706](https://github.com/THUDM/slime/issues/1706)).

## 4. Key PR Progress
*   **[Feature] CISPO Algorithm:** PR [#681](https://github.com/THUDM/slime/pull/681) proposes integrating **CISPO (Clipped IS-weight Policy Optimization)**. This algorithm, derived from the MiniMax-M1 paper, aims to solve limitations in standard PPO/GRPO where low-probability tokens can destabilize training.
*   **[Infra] Megatron Update:** PR [#1729](https://github.com/THUDM/slime/pull/1729) is updating the core Megatron dependencies, likely in preparation for better compatibility with newer model architectures like Qwen3.5 and GLM-4.7.

## 5. Why This Project Matters in Today's RL Landscape
`slime` serves as a critical bridge between high-performance LLM inference engines (like SGLang) and distributed training frameworks (Megatron-LM). The current issues highlight the friction cost of the rapidly evolving LLM ecosystem—specifically, the lag between model releases (Qwen3.5/GLM-4.7) and stable RL infrastructure support. The interest in **CISPO** and the debate over **true-on-policy** training underscore a maturing field moving away from naive PPO implementations toward more stable, mathematically robust policy optimization techniques for massive scale models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-17

## 1. Today's Highlights
The AReaL ecosystem is witnessing a significant push towards **system efficiency and infrastructure hardening**. Key developments include the introduction of a **Rollout Gateway** for better inference serving and substantial progress in **LoRA compatibility** with FSDP2. Meanwhile, the community is actively engaging with advanced resource management, specifically regarding **GPU colocation** for rollout and actor processes.

## 2. Releases
*   **No new releases** cut in the last 24 hours.

## 3. Important Issues
*   **System Architecture (Colocation):** Issue **#992** inquiries about support for sharing GPUs between rollout and actor processes (colocation). This sparked PR **#999**, which proposes bypassing NCCL in favor of direct tensor passing for weight updates in these scenarios.
*   **Multimodal Bugs:** Issue **#1036** reports that RPC transport incorrectly splits multimodal tensors (e.g., `pixel_values`) in multi-image samples because the transport layer assumes standard batch layouts.
*   **Feature Requests:**
    *   **#1028:** Request to support RL training for **LLaVA-OneVision-1.5**.
    *   **#1034:** Inquiry into whether AReaL supports **partial rollouts** in synchronous RL mode.
*   **Stability:** Issue **#1031** (Closed) identified a socket file descriptor leak in `is_port_free()` during bind failures.

## 4. Key PR Progress
**Infrastructure & Architecture:**
*   **Rollout Gateway (New):** PR **#1043** introduces a complete gateway infrastructure (`areal/experimental/gateway/`) with OpenAI-compatible APIs and a data proxy using SGLang.
*   **LoRA & FSDP2:** PR **#1015** implements Phase 1 & 2 of LoRA infrastructure for the Archon engine, resolving deadlocks between FSDP and Tensor Parallelism.
*   **RTensor Refactor:** PR **#1017** is simplifying the `RTensor` abstraction to a single-shard reference and moving data-parallel logic to the train controller to optimize the rollout pipeline.

**Performance & Optimizations:**
*   **Direct Tensor Passing:** PR **#999** adds a weight update mode for colocation scenarios where NCCL is unavailable, allowing direct tensor passing between processes on the same GPU.
*   **Megatron Optimizations:** PR **#1001** optimizes weight update paths in the Megatron engine to reduce overhead in small-scale configurations.
*   **Dependency Upgrades:** PR **#1010** is bumping `sglang`, `vllm`, and `megatron-core`, restructuring Dockerfiles to handle variant-specific Torch compatibility (2.9.1 vs 2.10.0).

**Fixes & Merges:**
*   **Multimodal Fix:** PR **#1038** (Open) addresses the incorrect RPC transport of non-batched multimodal tensors.
*   **Resource Leaks:** PR **#1032** (Merged) fixes socket leaks and traceback error handling in trainers.
*   **LoRA Aliases:** PR **#1039** (Merged) hardens runtime LoRA alias handling for XCCL updates.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a high-performance, production-ready framework for **Large Language Model (LLM) and Multimodal RL**. By solving critical infrastructure challenges—such as **FSDP2/DTensor compatibility** and **GPU colocation efficiency**—it lowers the hardware barrier for training large models. The addition of modular gateways and support for cutting-edge architectures like LLaVA-OneVision demonstrates a commitment to flexibility, making it a vital tool for researchers and engineers pushing the boundaries of agentic workflows and multimodal reasoning.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-17

## 1. Today's Highlights
The TRL ecosystem is actively optimizing for **asynchronous training workflows** and **multimodal robustness**. Key activity today focuses on decoupling training loops (Async GRPO) and hardening Vision-Language Model (VLM) support in DPO. Additionally, there is a notable push to integrate new research algorithms like **SDPO** (Self-Distillation Policy Optimization) and **SDFT**.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **Performance Bottleneck in GRPO ([#3195](huggingface/trl Issue #3195)):**
    User `@edbeeching` highlights that generation remains a bottleneck for 7B-scale reasoning models using DeepSpeed. This ongoing discussion emphasizes the need for efficiency improvements addressed by the new Async PRs.
*   **DPO & FSDP2 Instability ([#4812](huggingface/trl Issue #4812)):**
    A critical bug causing failures when combining DPO with FSDP2 was closed. This suggests recent merges have stabilized distributed training configurations.

## 4. Key PR Progress
**Algorithm & Architecture:**
*   **Async GRPO ([#5293](huggingface/trl PR #5293)):** A new PR aims to introduce asynchronous capabilities to Group Relative Policy Optimization, potentially solving the generation bottleneck identified in Issue #3195.
*   **SDPO Trainer ([#4935](huggingface/trl PR #4935)):** Implements Self-Distillation Policy Optimization, leveraging high-reward trajectories for dense learning signals.
*   **Experimental SDFT ([#4941](huggingface/trl PR #4941)):** Continues development on Self-Distillation Fine-Tuning capabilities.

**Multimodal (VLM) Fixes:**
*   **DPO VLM Truncation Support ([#5284](huggingface/trl PR #5284)):** Fixes regression where `max_length` truncation failed to align side-inputs (token types) for Vision-Language Models.
*   **VLM Training Corruption Fix ([#5286](huggingface/trl PR #5286)):** Prevents data corruption by explicitly disabling the `keep_end` truncation mode for VLMs.

**Infrastructure & Refactoring:**
*   **LoRA/PEFT Fix ([#5292](huggingface/trl PR #5292)):** Resolves a conflict where reference adapters crashed when using `target_parameters` (essential for Transformers 5.x MoE layers).
*   **Agent Guidelines ([#5294](huggingface/trl PR #5294)):** Introduced coding standards to prevent AI agents from overusing `hasattr`/`getattr`, improving code robustness.
*   **Online DPO Cleanup ([#5291](huggingface/trl PR #5291)):** Simplified dataloader logic by removing custom overrides in favor of standard configuration flags.

## 5. Why This Project Matters in Today's RL Landscape
TRL remains the central hub for production-ready Reinforcement Learning from Human Feedback (RLHF). Today's activity demonstrates a maturing ecosystem that is moving beyond text-only LLMs to support **Vision-Language Models** and **Reasoning models** (via GRPO). The shift toward asynchronous implementations (Async GRPO) and self-distillation techniques (SDPO/SDFT) indicates that the field is currently prioritizing **training efficiency** and **compute optimization** over the introduction of entirely new loss functions.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-17

### 1. Today's Highlights
Activity on the OpenRLHF repository was moderate but significant, marked by a major architectural proposal in the Pull Requests and a specific compatibility inquiry regarding the Qwen3.5 model. No new official releases were deployed today.

### 2. Releases
*   **None.** No new tags or release versions were published in the last 24 hours.

### 3. Important Issues
*   **Qwen3.5 Compatibility Inquiry (#1194) [CLOSED]**
    *   **Details:** A user reported runtime errors while attempting to train `Qwen3.5-4b` using version `openrlhf-0.9.5`. The error occurred during the PPO training phase via Ray (`train_ppo_ray.py`).
    *   **Status:** The issue was created on 2026-03-15 and closed promptly on 2026-03-16 without comment discussion, suggesting the resolution might have been user-specific or identified as a usage error rather than a core bug.
    *   **Link:** [Issue #1194](https://github.com/OpenRLHF/OpenRLHF/issues/1194)

### 4. Key PR Progress
*   **Architecture Shift: FSDP2 Integration & DeepSpeed Deprecation (#1176) [OPEN]**
    *   **Details:** This PR represents a significant infrastructure overhaul (succeeding PR #1115). It proposes removing DeepSpeed dependencies in favor of native FSDP2 (Fully Sharded Data Parallel v2) support.
    *   **Significance:** This move aligns with broader industry trends of reducing reliance on DeepSpeed due to complexity and adopting PyTorch-native sharding for better stability and scalability in distributed RLHF workloads.
    *   **Status:** Updated on 2026-03-16, indicating active development or review.
    *   **Link:** [PR #1176](https://github.com/OpenRLHF/OpenRLHF/pull/1176)

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a critical infrastructure project for the AI community as it bridges the gap between high-level RL algorithms and distributed Large Language Model (LLM) training. The proposed shift to **FSDP2** in PR #1176 is particularly timely; as model sizes scale (evidenced by user interest in Qwen3.5), the ecosystem requires more robust, native PyTorch solutions for memory management and distributed training, moving away from the brittle nature of older DeepSpeed integrations.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-17

## 1. Today's Highlights
The **verl** ecosystem shows robust activity with the release of **v0.7.1**, marking a significant milestone in RLHF infrastructure. The update focuses heavily on **Megatron-LM support**, specifically enhancing Multi-Token Prediction (MTP) and R3 router replay capabilities. Concurrently, the open-source community is driving a major push towards **On-Policy Distillation** and multi-modal RL, evidenced by multiple new PRs integrating vLLM-Omni and Atropos environments.

## 2. Releases
*   **[v0.7.1](https://github.com/verl-project/verl/releases/tag/v0.7.1)**
    *   **Highlights:** Integrated R3 router replay support with vLLM and SGLang; Added MTP (Multi-Token Prediction) training support for SFT and RL workflows in the Megatron engine.

## 3. Important Issues
*   **Roadmap & Architecture:** Issue **[#4880](https://github.com/verl-project/verl/issues/4880)** (26Q1 Roadmap) outlines the transition to a new default model engine, deprecating the legacy engine and achieving feature parity for LoRA/PEFT.
*   **Training Stability:** Issue **[#2738](https://github.com/verl-project/verl/issues/2738)** reports sudden entropy spikes during GRPO training on mathematical tasks, leading to crashes. This remains a critical open investigation for PPO-class algorithms.
*   **Multi-Modal Bugs:**
    *   **[#5554](https://github.com/verl-project/verl/issues/5554):** `position_ids` dimension mismatch when batching video samples of varying durations in Qwen3-VL.
    *   **[#5603](https://github.com/verl-project/verl/issues/5603):** Missing conversion support for `Qwen3_5ForConditionalGeneration` Megatron checkpoints to HuggingFace format.
*   **Performance & Memory:**
    *   **[#5625](https://github.com/verl-project/verl/issues/5625):** Identified incorrect `loss_scale_factor` in legacy FSDP when using gradient accumulation with token-mean mode.
    *   **[#5607](https://github.com/verl-project/verl/issues/5607):** Process hang in vLLM rollout for Dense/MoE models when `DP>1` in async mode.

## 4. Key PR Progress
*   **Algorithmic Advances:**
    *   **[#5592](https://github.com/verl-project/verl/pull/5592) & [#5164](https://github.com/verl-project/verl/pull/5164):** Introduction of **On-Policy Distillation** (single and multi-teacher) using vLLM servers for logprobs, supporting both LLM and VLM.
    *   **[#5520](https://github.com/verl-project/verl/pull/5520):** Integration with **Atropos** RL environments, connecting verl's GRPO pipeline with external environment loops.
*   **Infrastructure & Optimizations:**
    *   **[#5616](https://github.com/verl-project/verl/pull/5616):** Adds **vLLM-Omni** as a rollout backend, enabling diffusion-based image generation models in RLHF.
    *   **[#5619](https://github.com/verl-project/verl/pull/5619):** Optimizes vLLM weight synchronization via double buffering to reduce transfer overhead.
    *   **[#5626](https://github.com/verl-project/verl/pull/5626):** Fixes the critical loss scaling bug in FSDP token-mean mode (resolving Issue #5625).
    *   **[#5617](https://github.com/verl-project/verl/pull/5617):** Fixes VRAM leaks in Megatron checkpoint saving by clearing CUDA cache post-save.
    *   **[#5599](https://github.com/verl-project/verl/pull/5599):** Restores Qwen3.5 LoRA & MTP support via Megatron-Bridge.

## 5. Why This Project Matters in Today's RL Landscape
As RLHF (Reinforcement Learning from Human Feedback) becomes the standard for aligning Large Language Models (LLMs) and Vision-Language Models (VLMs), **verl** is establishing itself as a critical high-performance infrastructure layer. By decoupling the training engine (supporting both FSDP and complex Megatron tensor parallelism) from the rollout engine (seamlessly integrating vLLM and SGLang), verl solves the "systems mismatch" that often plagues RL research. Today's updates, featuring **On-Policy Distillation** and **vLLM-Omni**, signal a maturation from standard PPO/GRPO training towards more complex paradigms like multi-modal generation and model compression via distillation, positioning verl as a central hub for next-generation post-training stacks.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-17

### 1. Today's Highlights
Activity in the Open Instruct ecosystem focused heavily on infrastructure robustness and expanding Reinforcement Learning capabilities. Key updates include the integration of **PPO with Generalized Advantage Estimation (GAE)** into the GRPO workflow and significant improvements to **offline distillation** and **sandboxed code execution** environments. Additionally, several engineering patches were introduced to mitigate HuggingFace API rate limits and improve alerting systems.

### 2. Releases
No new releases were recorded for 2026-03-17.

### 3. Important Issues
No issues were updated in the last 24 hours.

### 4. Key PR Progress
*   **PPO & GRPO Convergence:** PR [#1462](https://github.com/allenai/open-instruct/pull/1462) introduces PPO-style training with a learned value model (GAE) to `grpo_fast.py`. This bridges the gap between GRPO (group-normalized rewards) and traditional PPO, offering new config options like `use_value_model`, `gamma`, and `gae_lambda`.
*   **Sandboxed RL Environments:** PR [#1492](https://github.com/allenai/open-instruct/pull/1492) adds `SWERLSandboxEnv`, a Docker-based environment for per-sample task evaluation. This is critical for safe tool-use and code generation training.
*   **Infrastructure & Scale:**
    *   PR [#1528](https://github.com/allenai/open-instruct/pull/1528) resolves distributed training crashes caused by HuggingFace API rate limits by pre-downloading models via `snapshot_download` before Ray actor spawning.
    *   PR [#1398](https://github.com/allenai/open-instruct/pull/1398) (Closed) and [#1399](https://github.com/allenai/open-instruct/pull/1399) (Open) advance the "GRPO olmo-core" initiative, wrapping OLMo-core training infrastructure for distributed Ray execution.
*   **Offline Distillation:** PR [#1525](https://github.com/allenai/open-instruct/pull/1525) (Closed) landed compression helpers for logit capture, setting the stage for full offline distillation support using vLLM.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct continues to serve as a critical bridge between high-performance pre-training frameworks (OLMo/vLLM) and applied post-training RL techniques. By unifying **PPO** and **GRPO** methodologies within a single codebase and hardening **distributed training infrastructure**, the project is lowering the barrier to entry for complex RLHF (Reinforcement Learning from Human Feedback) experiments. The addition of sandboxed environments specifically tailored for software engineering tasks (`SWERL`) highlights a shift toward **agentic RL**, where safety and isolation are paramount.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# Reinforcement Learning Daily Digest: CleanRL
**Date:** 2026-03-17

### 1. Today's Highlights
Activity on the CleanRL repository was minimal over the last 24 hours, with **0 Pull Requests** and **0 New Releases**. The sole update involved maintenance on a single issue regarding **Phantom Quantum Networks (PQN)** hyperparameters, which was closed yesterday.

### 2. Releases
*   **No new releases** recorded for this date.

### 3. Important Issues
*   **[#543 PQN's hyperparameters for classic control](https://github.com/vwxyzjn/cleanrl/issues/543)** [CLOSED]
    *   **Context:** User @alirezakazemipour inquired about the specific hyperparameter choices for PQN in classic control environments, noting these were absent from the original paper.
    *   **Significance:** This highlights a common gap between implementation details in code versus academic literature, specifically regarding the translation of PQN (a distributed RL algorithm) to simpler control tasks.

### 4. Key PR Progress
*   **No active progress:** No Pull Requests were updated or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a critical infrastructure project in the Reinforcement Learning ecosystem. In an era where RL implementations are often obfuscated by complex framework bindings or "spaghetti code," CleanRL provides **high-fidelity, single-file implementations**. This structural simplicity is essential for reproducibility and education, allowing researchers to audit algorithms like PQN down to the specific hyperparameter choices, as evidenced by Issue #543.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-03-17

### 1. Today's Highlights
Activity in the Gymnasium repository was minimal over the last 24 hours, with no new issues or releases recorded. The sole update involved the closure of a specific bug fix related to MuJoCo rendering compatibility.

### 2. Releases
*   **None:** No new stable or pre-release versions were tagged in the last 24 hours.

### 3. Important Issues
*   **None:** No new community concerns or bug reports were raised during this period.

### 4. Key PR Progress
The repository saw one specific maintenance update regarding its MuJoCo integration:
*   **[#1542 [CLOSED] fix(envs): fix typo in mujoco_rendering solver iterations](https://github.com/Farama-Foundation/Gymnasium/pull/1542)**
    *   **Author:** @wikiwiki1006
    *   **Summary:** Resolved an `AttributeError` in `mujoco_rendering.py` caused by attempting to access `self.data.solver_niter`. The code was updated to use `solver_iter`, aligning with the API changes in recent versions of MuJoCo.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API specification for single-agent reinforcement learning. While the API itself is stable, maintenance PRs like **#1542** are critical for the ecosystem. They ensure seamless interoperability with modern versions of underlying physics engines like MuJoCo, preventing "dependency drift" where legacy code breaks against current libraries.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>