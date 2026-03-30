# RL Open Source Daily Digest 2026-03-31

> Generated: 2026-03-30 22:07 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-31 shows a clear bifurcation. A group of highly active "Agentic & LLM-focused" frameworks (**verl, AReaL, TRL, OpenRLHF, ROLL, slime, Open Instruct, ROCK**) is driving rapid iteration on post-training, multimodal capabilities, and distributed systems. These projects are tackling the complexities of training agents on next-gen hardware (Blackwell, Ascend) with complex data (video, tool-use). Conversely, the "Foundational & General" RL libraries (**CleanRL, Gymnasium, PettingZoo, Stable Baselines3, Tianshou, torchtune, rl_games**) experienced minimal to no activity, suggesting a mature, stable maintenance phase or a shift in developer attention toward the LLM-centric frameworks.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (Roadmap, Hangs, Video Data) | 46 | 0 | **High**. Strategic roadmap (Q2) + critical bug fixes for async/multimodal. |
| **TRL** | Low (Post-v1.0 quiet) | High (v1.0 release cycle) | 1 (v1.0) | **High**. Major release consolidation + new distillation/optimization features. |
| **AReaL** | Medium (NPU bugs, Data issues) | High (Merged: HW support) | 0 | **High**. aggressive hardware abstraction (NPU/IPv6) and perf optimization. |
| **slime** | High (DP Bugs, New Models) | Medium (Async Rollout RFC) | 0 | **Medium-High**. complex debugging for large-scale distributed training. |
| **Open Instruct** | Low | Medium (FlashAttn 4) | 0 | **Medium**. Next-gen hardware prep (Blackwell) and sandboxes. |
| **ROLL** | High (Agentic LR bugs, Crashes) | Low-Medium | 0 | **Medium**. heavily focused on agentic workflow stability. |
| **ROCK** | Low (Feature requests) | Medium (SDK/OSS) | 0 | **Medium**. Ops/Infrastructure expansion (TypeScript SDK). |
| **OpenRLHF** | Medium (Roadmap, Qwen support) | 0 | 1 (v0.9.9) | **Medium**. Release-focused; architectural refactoring. |
| **rl_games** | Medium (SAC stability debate) | 0 | 0 | **Low**. Community troubleshooting over code development. |
| **Others*** | N/A | 0 | 0 | **None**. Stable/Inactive. |

*\*Others include: CleanRL, Gymnasium, PettingZoo, Stable Baselines3, Tianshou, torchtune.*

## Shared Research & Engineering Directions

### Research Signals
*   **Agentic & Multi-turn RL:** There is a unified shift from single-turn RLHF to multi-turn "agentic" workflows. **verl** (Atropos integration), **Open Instruct** (`SWERLSandboxEnv`), and **ROLL** (trajectory-level training) are all building infra for models that use tools and interact with environments over long horizons.
*   **Multimodal Video RL:** Training Vision-Language Models (VLMs) is moving from static images to video. **verl** and **slime** are specifically debugging video data handling and position ID mismatches in Qwen3-VL and similar architectures.
*   **Distillation:** Explicit support for on-policy and offline distillation is appearing across the stack, notably in **TRL** (`DistillationTrainer`) and **Open Instruct** (teacher logits capture), signaling a need for cheaper, efficient model compression.

### Engineering & Infrastructure Signals
*   **Next-Gen Hardware Readiness:** Projects are racing to support new hardware. **Open Instruct** merged Flash Attention 4 for Blackwell GPUs; **AReaL** and **verl** are deep into Ascend NPU support and IPv6 networking.
*   **Async & Distributed Optimization:** To scale training, frameworks are decoupling rollout from training. **slime** and **verl** are refining "async" architectures to prevent pipeline hangs and manage "staleness" in distributed updates.
*   **Inference Engine Integration:** Tight coupling with high-throughput inference engines (vLLM, SGLang, TRT-LLM) is now standard. **AReaL** and **verl** both reported specific PRs to unify backends or fix weight sync issues between training and inference engines.

## Differentiation Analysis
*   **TRL vs. OpenRLHF vs. verl:**
    *   **TRL** is solidifying its position as the accessible, "HuggingFace-native" standard for production RLHF, emphasizing ease of use (v1.0) and memory efficiency.
    *   **OpenRLHF** is positioning itself as the high-performance distributed engine for Ray users, focusing on clean architectural separation (Single Controller).
    *   **verl** is differentiating by acting as a universal "bridge" infrastructure, specifically optimizing the data transfer and weight sync between external inference engines (vLLM/TRT-LLM) and training loops, targeting large-scale agentic workloads.
*   **AReaL vs. ROLL:**
    *   **AReaL** is pursuing aggressive hardware agnosticism (NPUs/Ascend) and low-level memory optimization (FP8), positioning itself as a backend for diverse accelerators.
    *   **ROLL** is focused specifically on the "Ops" of agentic pipelines, tackling the specific lifecycle of tool-calling models (SWE-bench style tasks) rather than just raw throughput.
*   **Open Instruct:** Stands out by strictly tracking frontier hardware (Blackwell/FA4) and providing specialized sandboxed environments (SWE), acting as a research testbed for AllenAI’s OLMo stack.

## Community Momentum & Maturity
*   **LLM-RL is the Active Frontier:** Momentum has decisively shifted to the LLM-centric projects. **verl** (46 PRs) and **TRL** (v1.0 release) command the highest volume of activity. The complexity of issues (e.g., "async hangs," "video tensor mismatches") indicates these communities are solving production-scale scaling problems, not just prototyping.
*   **General RL is Mature/Static:** Libraries like **Gymnasium**, **Stable Baselines3**, and **CleanRL** showed zero activity. This reflects maturity (APIs are stable) but also a potential stagnation or brain-drain as top talent and funding focus on LLM post-training. **rl_games** shows life only via user troubleshooting, lacking active development momentum.

## Trend Signals
*   **The Rise of the "Ops" Layer:** **ROCK**'s introduction of a TypeScript SDK and OSS artifact mirroring signals that RL is becoming a fully fledged DevOps discipline ("RL Ops"), requiring polyglot support and persistent artifact management.
*   **Hardware Fragmentation:** The ecosystem is fracturing along hardware lines. While NVIDIA (Blackwell/FA4) is the default, the intense activity around **Ascend NPU** (in both `verl` and `AReaL`) and platform abstraction indicates a market preparing for a non-NVIDIA future, particularly in regions prioritizing domestic chips.
*   **Staleness Control:** The emergence of explicit "staleness control" mechanisms in **slime** and async discussions in **verl** suggests that purely synchronous RL is becoming a bottleneck for large-scale agents, paving the way for sophisticated eventually-consistent training loops.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL Ecosystem
**Date:** 2026-03-31

## 1. Today's Highlights
Activity in the ROLL ecosystem remains focused on **Agentic RL pipelines** and **Multi-Modal (VL) stability**. The community is actively debugging environment interactions for complex tasks (Sokoban, SWE) while grappling with dependency conflicts between the cutting-edge `vLLM 0.10.2` and `Torch 2.8.0` stacks. Key discussions center on the granularity of training samples (turn-level vs. trajectory-level) in agentic workflows.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Critical Training Crash (Torch 2.8 + vLLM 0.10):** Users report training crashes with `use_kl_loss=True` on `qwen2.5-vl-3B-agentic` when upgrading to Torch 2.8.0/vLLM 0.10.2. The configuration is stable on the older Torch 2.6.0/vLLM 0.8.4 stack.
    *   [Issue #398](https://github.com/alibaba/ROLL/issues/398)
*   **LR Scheduler Bug in Agentic Workflows:** In `AgentNativeStepEnvManager`, the Learning Rate scheduler exhausts its step budget prematurely during long agentic runs, causing the LR to drop to zero mid-training.
    *   [Issue #407](https://github.com/alibaba/ROLL/issues/407)
*   **Feature Request: Trajectory-Level Training:** A proposal to upgrade `AgentNativeStepEnvManager` to support trajectory-level formulation (treating a full agent interaction as one sample) rather than creating one sample per interaction chunk.
    *   [Issue #409](https://github.com/alibaba/ROLL/issues/409)
*   **Qwen3.5 MoE Checkpointing Error:** Users encounter errors when saving checkpoints during LoRA SFT on `Qwen3.5-35B-A3B` using mcore-adapter.
    *   [Issue #411](https://github.com/alibaba/ROLL/issues/411)

## 4. Key PR Progress
*   **[OPEN] OpenReward Integration:** PR aims to integrate [OpenReward](https://openreward.ai) as a native environment, starting with the *EndlessTerminals* task.
    *   [PR #401](https://github.com/alibaba/ROLL/pull/401)
*   **[OPEN] Trackio Integration:** Adding support for the Trackio monitoring tool.
    *   [PR #404](https://github.com/alibaba/ROLL/pull/404)
*   **[CLOSED] Qwen3.5 ROCK Agentic Example:** Merged support for Qwen3.5 native ROCK agentic examples (SWE tasks) and fixed chat-template tokenization paths.
    *   [PR #396](https://github.com/alibaba/ROLL/pull/396)

## 5. Why This Project Matters in Today's RL Landscape
ROLL is positioning itself as a robust infrastructure layer for **post-training and agentic RL**, specifically optimized for Alibaba's Qwen series (including VL and MoE variants). Unlike general-purpose RL libraries, ROLL addresses the specific complexities of long-horizon agentic workflows—such as the balance between step-level and trajectory-level optimization—and integrates tightly with high-throughput inference engines like vLLM. The current surge in bug reports regarding environment managers and complex multi-modal stability highlights the industry's shift from static RLHF toward dynamic, tool-using agents.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK (alibaba/ROCK)
**Date:** 2026-03-31

## 1. Today's Highlights
Activity on the ROCK platform (RL Open Source Ops Center) focused heavily on **Infrastructure & SDK Enhancements** and **Ecosystem Expansion**. Key developments include the introduction of OSS artifact mirroring for jobs, user-defined logging paths, and the stabilization of the TypeScript SDK. There is notable activity around integrating external AI agents (OpenClaw) and improving the developer onboarding experience via documentation updates.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.
*   *Note:* PR #706 updated the README to formally document version history up to **v1.4.7**, suggesting a recent stable baseline is now reflected in the docs.

## 3. Important Issues
*   **[Feature] Harbor OSS Artifact Mirror (#707):** Request to support OSS mirroring for trial outputs within Harbor job configurations. This allows for better persistence and analysis of large-scale RL trial artifacts.
    *   *Status:* Open
    *   *Link:* [alibaba/ROCK Issue #703](https://github.com/alibaba/ROCK/issues/707)
*   **Refactor Rock-Agent Envs (#703):** A structural enhancement (now closed) aimed at refactoring environment handling within the Rock-Agent system.
    *   *Status:* Closed (Resolved by PR #704)
    *   *Link:* [alibaba/ROCK Issue #703](https://github.com/alibaba/ROCK/issues/703)

## 4. Key PR Progress
*   **feat(sdk): Harbor OSS Mirror Support (#708):** Implements `OssMirrorConfig` and `enable_oss_mirror()` for JobConfigs. This is a critical update for users needing to offload trial data to Alibaba Cloud OSS automatically.
    *   *Status:* Open
    *   *Link:* [alibaba/ROCK PR #708](https://github.com/alibaba/ROCK/pull/708)
*   **TypeScript SDK Integration (#492):** A significant ecosystem expansion adding a TypeScript SDK (`rl-rock` on NPM). It supports Sandbox management, file system ops, and dual ESM/CommonJS builds, broadening ROCK's usability beyond Python.
    *   *Status:* Open
    *   *Link:* [alibaba/ROCK PR #492](https://github.com/alibaba/ROCK/pull/492)
*   **User-Defined Logs & Test Fixes:** PRs #700 and #702 address test stability and add custom log paths (`/data/logs/user-defined`), improving debugging capabilities for complex agents.
    *   *Status:* Merged/Closed

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from research to production, **infrastructure orchestration** becomes the primary bottleneck. ROCK addresses this by providing a standardized "Ops" layer for RL—handling sandboxing, job scheduling (Harbor), and artifact management.

Today's updates, specifically the **OSS mirroring** and **TypeScript SDK**, signal that the project is maturing from a pure Python research tool into a **polyglot, production-grade platform**. The integration attempts via OpenClaw also highlight the growing trend of "Agent-for-Agent" tooling, where AI assistants autonomously manage RL infrastructure.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-31

## 1. Today's Highlights
Activity in the `slime` repository remains high with a focus on distributed system stability and expanding multimodal capabilities. The community is actively debugging complex multi-node training setups (specifically involving **Qwen3**, **GLM4.7**, and **Kimi K2.5**) and refining asynchronous RL performance.

## 2. Releases
*   **None** (No new releases detected in the last 24 hours).

## 3. Important Issues
*   **Data Parallelism Bug in Logging:** A new bug ([#1784](https://github.com/THUDM/slime/issues/1784)) causes an `IndexError` during `log_rollout_data` when `--log-correct-samples` is enabled with Data Parallelism (DP) > 1. The root cause is identified as a mismatch in tensor partitioning between `raw_reward` and `response_lengths`.
*   **Megatron Integration Instability:** Users report an assertion failure ([#1779](https://github.com/THUDM/slime/issues/1779)) involving `no_sync_func` on the second training step when using `--overlap-gradients`, suggesting issues with the gradient synchronization context manager.
*   **Model Compatibility:**
    *   **GLM4.7:** Conversion error ([#1780](https://github.com/THUDM/slime/issues/1780)) regarding `Unsupported parameter name` during HF checkpoint conversion.
    *   **Qwen3-VL:** Visual module initialization errors persist in the nightly builds ([#1730](https://github.com/THUDM/slime/issues/1730)).
*   **VLM Distillation Limits:** Users are inquiring about support for On-Policy Distillation (OPD) for Vision-Language Models, specifically passing image data via SGLang endpoints ([#1758](https://github.com/THUDM/slime/issues/1758)).

## 4. Key PR Progress
*   **Enhanced Async Rollout ([#1781](https://github.com/THUDM/slime/pull/1781)):** A significant proposal to upgrade off-policy modes by introducing **staleness control** (tracking policy versions) and **partial rollout support**. This aims to fix sample efficiency issues in `one_step_off` and `fully_async` modes.
*   **Qwen3-VL Fix ([#1727](https://github.com/THUDM/slime/pull/1727)):** Fixes visual weight loading for Qwen3-VL by backporting a name mapping patch from SGLang.
*   **Performance Optimization ([#1485](https://github.com/THUDM/slime/pull/1485)):** *Closed* recently. This PR added concurrent loading for eager datasets to speed up initialization.

## 5. Why This Project Matters
`slime` is establishing itself as a robust framework for large-scale RLHF, specifically targeting the complexities of **asynchronous training** and **multi-modal models**. The latest issues highlight the growing pains of training next-gen LLMs (GLM4.7, Qwen3-VL) across massive clusters (256+ GPUs), where data parallelism logic and checkpoint conversion become critical bottlenecks. The focus on "staleness control" in PRs indicates a maturing approach to distributed RL, moving beyond simple synchronous loops to efficient, fault-tolerant async pipelines.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest | 2026-03-31

## 1. Today's Highlights
The AReaL ecosystem saw significant activity today, focusing heavily on **hardware extensibility** (NPU/Ascend and IPv6 support) and **performance optimization** (FP8 training, Async TP). Key developments include the integration of a new Megatron-Bridge replacing the deprecated `mbridge`, and substantial updates to the experimental inference service stack to support vLLM and SGLang backends.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.
*   *Note:* Development remains focused on the **2026 Q1 Milestones** ([#907](https://github.com/inclusionAI/AReaL/issues/907)), with ongoing work on "Archon" engine enhancements and infrastructure robustness.

## 3. Important Issues
*   **Data Integrity Alert (SFT/Tooling):** User reports indicate the open-sourced SFT dataset lacks `tau2` tool description information, causing model repetition issues ([#1102](https://github.com/inclusionAI/AReaL/issues/1102)).
*   **NPU Training Instability:** A confirmed bug occurs when `kl_ctl > 0` with a reference model on NPU backends ([#1099](https://github.com/inclusionAI/AReaL/issues/1099)).
*   **Performance Roadmap:** New proposals submitted for **Async Tensor Parallelism** ([#1110](https://github.com/inclusionAI/AReaL/issues/1110)) and **Distributed Data Loading** in single-controller mode ([#1111](https://github.com/inclusionAI/AReaL/issues/1111)).

## 4. Key PR Progress
*   **[MERGED] Hardware & Backend Support:**
    *   **Ascend/VLM Support:** Merged multi-turn training for Vision-Language Models (VLMs) on Ascend hardware ([#972](https://github.com/inclusionAI/AReaL/pull/972)).
    *   **Megatron-Bridge:** Replaced deprecated `mbridge` with the new `Megatron-Bridge` adaptation ([#1056](https://github.com/inclusionAI/AReaL/pull/1056)) and fixed initialization syntax errors ([#1107](https://github.com/inclusionAI/AReaL/pull/1107)).
    *   **Platform Abstraction:** Refactored `PerLayerOptimWrapper` to abstract CUDA calls, enabling support for non-CUDA accelerators ([#1108](https://github.com/inclusionAI/AReaL/pull/1108)).
    *   **Network Stack:** Added support for model training in **IPv6-only** environments ([#1072](https://github.com/inclusionAI/AReaL/pull/1072)).

*   **[MERGED] Critical Fixes:**
    *   Fixed a dataloader bug where hardcoding `drop_last=True` prevented accurate evaluation metric calculation ([#1100](https://github.com/inclusionAI/AReaL/pull/1100)).
    *   Fixed edge case in `pad_packed_tensor_dict` where `pad_length=0` corrupted `cu_seqlens` ([#1104](https://github.com/inclusionAI/AReaL/pull/1104)).

*   **[OPEN] Performance & Features:**
    *   **FP8 Training:** Implementing blockwise 128×128 FP8 matmul support via `torchao` for the Archon engine ([#1087](https://github.com/inclusionAI/AReaL/pull/1087)).
    *   **Inference Service:** Completing **vLLM backend** support to achieve feature parity with SGLang ([#1112](https://github.com/inclusionAI/AReaL/pull/1112)).

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **hardware-agnostic, high-performance RL training framework** capable of handling complex LLM and VLM workloads. Today's updates highlight a strategic pivot away from rigid CUDA-only dependencies toward a more flexible platform abstraction (supporting Ascend/NPU and IPv6). By optimizing low-level memory operations (FP8, Async TP) and decoupling weight synchronization from compute (pipelined weight sync in [#1074](https://github.com/inclusionAI/AReaL/pull/1074)), AReaL addresses the critical scalability bottlenecks inherent in distributed RLHF, making it a vital infrastructure for next-gen agentic training.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-31

## 1. Today's Highlights
The TRL ecosystem is buzzing with activity following the **v1.0 Release**. Today’s development focus is split between consolidating the new v1.0 baseline (fixing CI flakiness and documentation) and pushing the envelope on **efficiency and multimodality**. Key trends include memory optimization for distributed training and advanced distillation techniques.

## 2. Releases
*   **TRL v1.0**: The milestone release is now live.
    *   [PR #5409](https://github.com/huggingface/trl/pull/5409) (Closed)

## 3. Important Issues
*   **No new issues** were opened in the last 24 hours, suggesting a stable intake following the major version release.

## 4. Key PR Progress

### 🚀 Features & Algorithmic Improvements
*   **Distillation:** Introduction of `DistillationTrainer` for efficient on-policy distillation.
    *   [PR #5407](https://github.com/huggingface/trl/pull/5407) (Open)
*   **Optimization:** Added a length-normalized sigmoid loss type to the DPO trainer (based on Tulu-3/OLMo).
    *   [PR #5406](https://github.com/huggingface/trl/pull/5406) (Open)
*   **Advanced RL Methods:**
    *   PSPO (Probability Smoothing Policy Optimisation) added as a trust-region alternative to clipping in `GRPOTrainer`.
        *   [PR #4548](https://github.com/huggingface/trl/pull/4548) (Open)
    *   Per-sample tool filtering enabled for `GRPOTrainer`.
        *   [PR #5398](https://github.com/huggingface/trl/pull/5398) (Open)

### 🖼️ Multimodality & VLMs
*   **VLM Training:** `environment_factory` now supports multimodal tool responses (images + text).
    *   [PR #5323](https://github.com/huggingface/trl/pull/5323) (Open)
*   **Chat Templates:** Added support for the second version of the Qwen 3.5 chat template.
    *   [PR #5405](https://github.com/huggingface/trl/pull/5405) (Closed)
*   **Logging:** Added `log_multimodal` parameter to `GRPOConfig` and `RLOOConfig` to manage image logging size.
    *   [PR #5408](https://github.com/huggingface/trl/pull/5408) (Open)

### 🛠️ Performance & Infrastructure
*   **Memory Efficiency:** Implementation of a chunked LM head in `AsyncGRPOTrainer` to avoid materializing large logits tensors.
    *   [PR #5349](https://github.com/huggingface/trl/pull/5349) (Open)
*   **Inference:** vLLM inference support added to Base Self-Distillation Trainer.
    *   [PR #5388](https://github.com/huggingface/trl/pull/5388) (Closed)
*   **CI/Stability:** Multiple fixes for flaky tests (Zero3, FSDP2, Qwen3VL) and CI authentication.
    *   [PR #5403](https://github.com/huggingface/trl/pull/5403), [PR #5404](https://github.com/huggingface/trl/pull/5404), [PR #5397](https://github.com/huggingface/trl/pull/5397) (Closed)

## 5. Why This Project Matters in Today's RL Landscape
TRL v1.0 marks a maturation point for production-grade RLHF. The current PR activity demonstrates a shift from basic PPO implementations to **high-performance, post-training optimization**. By integrating memory-efficient techniques (chunked LM heads), inference acceleration (vLLM), and complex multimodal tool use, TRL is positioning itself as the critical infrastructure for training the next generation of large, agentic Vision-Language Models.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-31

### 1. Today's Highlights
OpenRLHF has rolled out version **v0.9.9**, a significant update focused on architectural optimization. The release introduces major internal refactoring of the RL pipeline and enhancements to Ray communication performance. While no new PRs were merged in the last 24 hours, the community is active with discussions on the development roadmap and compatibility with Qwen 3.5 and Qwen3-VL models.

### 2. Releases
*   **[v0.9.9](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.9.9)**: This release prioritizes internal restructuring and performance optimization.
    *   **Key Changes:** Refactored the RL pipeline (contributed by `@xiaoxigua999`), improved Ray communication speeds, and updated experiment/experience handling and checkpoint management.

### 3. Important Issues
*   **[Roadmap Discussion #568](https://github.com/OpenRLHF/OpenRLHF/issues/568)**: The official roadmap outlines a philosophy balancing high performance with "CleanRLHF" (ease of use). Key completed goals include decoupling `ppo_trainer.py` from Ray and implementing Single Controller architecture.
*   **[Model Support #1194](https://github.com/OpenRLHF/OpenRLHF/issues/1194)**: Users are reporting compatibility errors when training **Qwen 3.5-4b** using `v0.9.5`. The issue suggests potential friction points in the current implementation for newer model architectures.
*   **[Feature Inquiry #1175](https://github.com/OpenRLHF/OpenRLHF/issues/1175)**: There is growing community interest in support for **Qwen3-VL** for GRPO (Group Relative Policy Optimization) training.

### 4. Key PR Progress
*   **No Activity:** There were **0** Pull Requests updated in the last 24 hours. Development momentum appears focused on the recent release branch rather than new merge cycles.

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a critical infrastructure project in the RLHF (Reinforcement Learning from Human Feedback) ecosystem. As AI development shifts heavily towards post-training alignment techniques (like PPO and GRPO) for LLMs and VLMs, OpenRLHF's commitment to **Ray-based distributed training** and **Single Controller** architectures makes it a preferred choice for scaling these workloads. The rapid community requests for Qwen 3.5/VL support highlight its role as a go-to framework for adapting state-of-the-art open-source models.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-31

## 1. Today's Highlights
The verl ecosystem is witnessing a significant push towards **Multi-Modal RL** and **Async Training architectures**. The proposed 2026Q2 roadmap emphasizes vLLM-Omni enhancements, while the community actively integrates diverse environments like Atropos. Activity is high with 46 PRs updated, focusing heavily on infrastructure robustness for video/data handling and hardware compatibility (Ascend NPU, TRT-LLM).

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[RFC] Multi-modal Generation RL 2026Q2 Roadmap** [#5755](https://github.com/verl-project/verl/issues/5755): Maintainer SamitHuang outlined the strategy for the next quarter, prioritizing vLLM-Omni rollout engine enhancements (TP/DP support) and cross-request batching.
*   **[$2500 Bounty] Atropos Integration** [#1782](https://github.com/verl-project/verl/issues/1782): A bounty is open for integrating Nous Research’s Atropos environment, aiming to support multi-turn and multi-agent RL rollouts.
*   **Multi-Modal & Tool-Calling Instability:**
    *   `filter_overlong_prompts` causes tensor mismatches in multiturn settings [#2069](https://github.com/verl-project/verl/issues/2069).
    *   Video data handling breaks in `processor()` when filtering long prompts [#5643](https://github.com/verl-project/verl/issues/5643).
    *   `position_ids` dimension mismatch when mixing video durations [#5554](https://github.com/verl-project/verl/issues/5554).
*   **Async Training Hangs** [#5815](https://github.com/verl-project/verl/issues/5815): Reports indicate the main branch asynchronous training pipeline is entering a hung state.

## 4. Key PR Progress
*   **Atropos & GRPO Integration:** PR [#5520](https://github.com/verl-project/verl/pull/5520) is implementing hooks to connect Atropos environments directly to verl's GRPO pipeline.
*   **Infrastructure & Bug Fixes:**
    *   **FSDP Weight Sync:** PR [#5801](https://github.com/verl-project/verl/pull/5801) fixes a critical mismatch where FSDP registered buffers (e.g., DeepSeek V3 biases) were missed during rollout weight synchronization.
    *   **Qwen3-VL Compatibility:** PR [#5761](https://github.com/verl-project/verl/pull/5761) resolves `ValueError` caused by changing output formats in newer `transformers` versions.
    *   **Ray Workers:** PR [#5635](https://github.com/verl-project/verl/pull/5635) fixes silent scoring failures in `math_verify` by removing `signal.alarm()` calls incompatible with Ray worker threads.
*   **Hardware Support:**
    *   **Ascend NPU:** Several PRs [#5741](https://github.com/verl-project/verl/pull/5741), [#5804](https://github.com/verl-project/verl/pull/5804) are unifying CI and adding docker support for Ascend A2/A3 chips.
    *   **TRT-LLM:** PR [#5631](https://github.com/verl-project/verl/pull/5631) enables Async RL capabilities for TRT-LLM rollouts.

## 5. Why This Project Matters in Today's RL Landscape
As the field moves beyond static supervised fine-tuning, **verl** is positioning itself as the critical infrastructural bridge between high-throughput inference engines (vLLM, SGLang, TRT-LLM) and complex RL algorithms (GRPO, PPO). The current focus on **multi-modal video RL** and **async tool-calling agents** addresses the most pressing engineering bottlenecks in training next-generation "agentic" models. By solving data transfer (zero-copy) and weight synchronization issues across diverse hardware (GPU/NPU), verl is lowering the barrier to entry for large-scale, continuous learning systems.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-31

### 1. Today's Highlights
The Open Instruct ecosystem is actively optimizing for next-generation hardware and advanced RL workflows. Key developments include the integration of **Flash Attention 4** support for Blackwell GPUs (SM 10.0+) and the unification of attention backend detection across SFT, DPO, and GRPO pipelines. Additionally, the project is expanding its capabilities with new **sandboxed RL environments** for code generation tasks and **offline distillation** tooling.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **No updates** in the last 24 hours.

### 4. Key PR Progress
*   **Hardware & Efficiency Optimization:**
    *   [PR #1569](https://github.com/allenai/open-instruct/pull/1569) [CLOSED]: Implements Flash Attention 4 support for Blackwell GPUs and unifies attention backend types. Defaults to FA2 while FA4 learning dynamics are stabilized.
    *   [PR #1567](https://github.com/allenai/open-instruct/pull/1567) [CLOSED]: Refactors attention handling to auto-detect backends (`attn_implementation`) from model config, removing manual CLI flags.
    *   [PR #1327](https://github.com/allenai/open-instruct/pull/1327) [OPEN]: Introduces `olmo_core_finetune.py`, an SFT script wrapping OLMo-core’s efficient infrastructure (FSDP/HSDP, `SkipStepAdamW`) with a standard CLI interface.

*   **RL & Training Workflows:**
    *   [PR #1492](https://github.com/allenai/open-instruct/pull/1492) [OPEN]: Adds `SWERLSandboxEnv`, a Docker-based RL environment for per-sample software engineering tasks with submit-based evaluation.
    *   [PR #1552](https://github.com/allenai/open-instruct/pull/1552) [OPEN]: Aligns `grpo.py` metrics with `grpo_fast.py`, ensuring consistency in KL estimators and policy metrics across training backends.
    *   [PR #1534](https://github.com/allenai/open-instruct/pull/1534) [OPEN]: Advances offline distillation support by adding scripts for capturing teacher logits.

*   **Model Support & CI:**
    *   [PR #1568](https://github.com/allenai/open-instruct/pull/1568) [OPEN]: Enables Qwen3.5 VLM support, defaulting to SPDA where Flash Attention is incompatible.
    *   [PR #1571](https://github.com/allenai/open-instruct/pull/1571) [CLOSED]: Fixes CI timeouts by adding `--no_auto_dataset_cache` to integration tests.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct serves as a critical bridge between frontier model architectures and production-grade RL infrastructure. By standardizing support for **Blackwell GPUs (Flash Attention 4)** and unifying backend abstractions, the project is positioning itself for the next wave of hardware scaling. Furthermore, the introduction of specialized environments like `SWERLSandboxEnv` highlights a shift toward **agentic RL workflows** where models interact with executable sandboxes, moving beyond static preference optimization to dynamic, tool-using paradigms.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

Here is the RL Daily Digest for **2026-03-31**.

### 1. Today's Highlights
Activity for **rl_games** on 2026-03-31 was minimal regarding code changes (0 PRs, 0 Releases) but centered on community troubleshooting. The primary focus was a high-traffic discussion comparing the library's Soft Actor-Critic (SAC) implementation stability against Stable Baselines3 (SB3).

### 2. Releases
*   **None.** No new tags or releases were published in the last 24 hours.

### 3. Important Issues
*   **Potential SAC Implementation Instability:** Issue [#341](https://github.com/Denys88/rl_games/issues/341) remains open with significant community interest (25 comments).
    *   **Context:** A user reported that a custom drone navigation environment converges in 1M steps using SB3 but fails to progress when ported to `rl_games`.
    *   **Significance:** This suggests a potential discrepancy in default hyperparameters or the core implementation of the SAC algorithm in `rl_games` compared to other standard libraries, specifically regarding sample efficiency in continuous control tasks.

### 4. Key PR Progress
*   **None.** No pull requests were updated, opened, or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
**rl_games** remains a critical high-performance reference implementation for Reinforcement Learning, particularly noted for its optimized PyTorch-based PPO (Proximal Policy Optimization). While libraries like SB3 focus on accessibility and modular design, `rl_games` is often preferred by power users for Isaac Gym and Brax simulations due to its speed. However, today's highlighted issue regarding SAC performance underscores the ongoing trade-off in the ecosystem: specialized speed (rl_games) versus the robustness and validation standardization provided by broader libraries (SB3).

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

No activity in the last 24 hours.

</details>