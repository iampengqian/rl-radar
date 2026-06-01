# RL Open Source Daily Digest 2026-06-02

> Generated: 2026-06-01 22:41 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem on 2026-06-02 was defined by a high-velocity push toward productionizing large-scale LLM post-training. Activity was heavily concentrated among six major frameworks—**verl, ROCK, TRL, slime, AReaL,** and **Open Instruct**—which are aggressively iterating on multi-turn Agentic RL, advanced distributed memory management, and hardware optimization. 

Simultaneously, Alibaba’s **ROLL** project underscored a growing industry focus on vendor-agnostic hardware support, specifically targeting Huawei Ascend NPUs. Conversely, stalwart general-purpose RL libraries (CleanRL, Gymnasium, Stable Baselines3, Tianshou, etc.) experienced zero activity, highlighting a clear bifurcation in the ecosystem: active development has overwhelmingly shifted toward LLM-focused post-training infrastructure, leaving traditional RL environments in a mature, dormant phase.

## Activity Comparison
Development efforts were intensely focused on a small cohort of LLM post-training frameworks. Below is the breakdown of the day's repository activity:

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 7 | 36 | 1 (v0.8.0) | Pushing frontier MoE/Agent architectures; critical sec/bug fixes. |
| **ROCK** | 11 | 23 | 1 (v1.8.3) | Ephemeral RL compute orchestration; GPU sandbox mgmt. |
| **TRL** | 11 | 18 | 0 | Transitioning core trainers to async execution; VLM fixes. |
| **slime** | 3 | 7 | 0 | Stabilizing multi-agent rollouts; SGLang/Megatron bridging. |
| **AReaL** | 3 | 3 | 0 | FP8 quantization rollouts; establishing late-2026 roadmap. |
| **Open Instruct** | 0 | 2 | 0 | Resolving distributed multi-node GRPO deadlocks. |
| **ROLL** | 0 | 1 | 0 | Adding Ascend NPU CI pipelines for hardware abstraction. |
| *Others* | 0 | 0 | 0 | *CleanRL, Gymnasium, OpenRLHF, PettingZoo, rl_games, SB3, Tianshou, torchtune saw no activity.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Transition to Agentic RL:** Multiple projects are actively moving beyond static, single-turn preference tuning (standard PPO/DPO). TRL proposed natively integrating environment-owned datasets for Agent RL, while verl and slime both explored Temporal Curriculum for Multi-turn Agent On-Policy Distillation (TCOD).
*   **Algorithmic Refinements for GRPO:** GRPO is rapidly becoming the standard for LLM post-training, but frameworks are actively patching baseline biases (TRL) and resolving distributed deadlocks to stabilize it (Open Instruct).

**Engineering & Infrastructure Signals**
*   **Async and Decoupled Rollouts:** To bypass Python GIL constraints and optimize GPU utilization, frameworks are decoupling inference from training. TRL shifted rollout generation to spawned processes, while verl introduced a standalone Log Prob Server.
*   **Hybrid Precision and Quantization:** Maximizing compute efficiency is paramount. AReaL implemented FP8 block-wise quantization for FSDP+SGLang rollouts, and verl pushed NVFP4 QAT training support. 
*   **Massive MoE/VL Memory Management:** Frameworks are racing to support colossal sparse-activation models. verl and slime focused on dynamic context parallelism, RAM CPU offloading, and SGLang tensor formatting for massive models like Qwen3-VL-235B and Qwen3-30B-A3B.

## Differentiation Analysis
*   **verl** is positioning itself as the bleeding-edge framework for massive frontier models. With v0.8.0, its focus on hybrid parallelism (Megatron-FSDP) and novel architectures (GatedDeltaNet, MXFP8) makes it highly suited for enterprise-scale foundational labs.
*   **TRL** serves as the accessible, community-driven bridge. Its current focus on resolving DeepSpeed integrations, VLM tokenization bugs, and standardizing `AsyncGRPOTrainer` makes it the go-to for researchers needing flexible, HuggingFace-native alignment tools.
*   **ROCK** functions as the cloud-native orchestrator. Rather than training algorithms, it is differentiating by solving cluster ephemeral compute management, specifically by exposing granular GPU/accelerator configurations in its RL sandboxes.
*   **slime** and **AReaL** are heavily optimized for the SGLang/Megatron inference-training pipeline. They are differentiated by their deep integration with low-level hardware optimizations (e.g., FP8 rollouts, gradient fusion bridges) for H100 clusters.
*   **ROLL** is isolating its focus on hardware extensibility, actively doing the heavy lifting required to make open-source RL vendor-agnostic by integrating Ascend NPUs.

## Community Momentum & Maturity
The ecosystem is demonstrating clear signs of production-grade maturation. 
*   **Proactive Security and Bug Fixes:** Projects are swiftly addressing severe vulnerabilities. Notably, verl patched an arbitrary code execution flaw via an `eval()` call in tool parsers, and fixed memory leaks in routing—issues typical of frameworks transitioning from academic tools to production environments.
*   **Infrastructure Hardening:** Ecosystem players are streamlining dependencies and distributed states. ROCK refactored its `start/stop` lifecycle logic and pruned legacy dependencies, while Open Instruct fixed multi-node metric reduction hangs.
*   **Long-term Vision:** AReaL's publication of its H2 2026 milestones indicates robust project governance and sustained corporate backing, giving enterprise users confidence in the framework's longevity.

## Trend Signals
1.  **The Decline of Generalist RL Repos:** Traditional RL frameworks (Gymnasium, SB3, PettingZoo) have stagnated compared to the hyper-active LLM post-training repos. Talent and compute are overwhelmingly flowing into LLM alignment.
2.  **Hardware Diversification:** GPU scarcity is driving architectural changes. ROLL’s integration of Ascend NPUs and verl’s focus on aggressive quantization (NVFP4/W4A16) signal that the industry expects to run massive RL workloads on heterogeneous, constrained hardware.
3.  **Rise of the "LLM-as-Judge" Ecosystem:** Open Instruct's addition of MiniMax-M3 pricing telemetry reveals that automated LLM judging (RLAIF) is becoming a formalized, cost-tracked operational pipeline rather than an ad-hoc research experiment.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for June 2, 2026:

# RL Open-Source Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-06-02

### 1. Today's Highlights
Activity on the ROLL (Open RL) repository over the past 24 hours was focused entirely on backend infrastructure and hardware extensibility. A single Work-in-Progress (WIP) Pull Request was submitted to integrate Huawei Ascend NPU (Neural Processing Unit) support into the project's continuous integration pipeline. No new releases were cut, and no new issues were reported.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **Total activity:** 0 issues updated.
*   *Analysis:* The lack of new bug reports or feature requests suggests a stable current codebase or a development cycle currently heavily weighted toward internal feature branching.

### 4. Key PR Progress
*   **[#454 [WIP] feat: add npu ci yaml and fix tests](https://github.com/alibaba/ROLL/pull/454)** by `UsernameFull`
    *   **Status:** Open
    *   **Summary:** This PR establishes a dedicated GitHub Actions workflow for Ascend NPU CI (`ci-npu-test`) and updates the existing test suite and runtime compatibility to ensure seamless model execution on NPU hardware.
    *   **Scope:** 1 commit, 53 changed files. 
    *   *Analyst Note:* The 53 changed files indicate a significant undertaking, likely involving backend abstraction modifications to ensure RL training loops and environment rollouts communicate effectively with the Ascend architecture.

### 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning landscape—especially following the widespread adoption of RLHF (Reinforcement Learning from Human Feedback) and GRPO (Group Relative Policy Optimization) for LLM post-training—hardware scalability is the primary bottleneck. Large-scale RL is notoriously memory-intensive and computationally expensive. 

Projects like Alibaba's **ROLL** are critical because they provide high-throughput, distributed RL frameworks capable of handling massive parameter counts. Today's focus on **Ascend NPU integration ([PR #454](https://github.com/alibaba/ROLL/pull/454))** highlights a broader industry shift in 2026: moving away from a purely GPU-dependent ecosystem. By actively testing and ensuring compatibility across diverse hardware accelerators, ROLL is positioning itself as a versatile, vendor-agnostic infrastructure necessary for global, cost-effective LLM alignment.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for June 1-2, 2026, based on activity in the ROCK repository.

# RL Ecosystem Daily Digest: 2026-06-02
**Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK) 

## 1. Today's Highlights
The ROCK (RL via Cloud Computing) ecosystem experienced a high-velocity 24 hours with **23 PRs updated, 11 Issues processed, and 1 new release**. The development focus was heavily bifurcated between **infrastructure stability** (fixing critical metadata write paths, DB-driven state management, and OSS dependency bugs) and **hardware flexibility** (introducing granular GPU/accelerator configurations for RL sandboxes).

## 2. Releases
*   **[v1.8.3](https://github.com/alibaba/ROCK/compare/v1.8.1...v1.8.3)**: Released recently. This patch update likely incorporates the recent scheduler and bug fixes tracked in the backlog.

## 3. Important Issues
*   **Critical Dependency Fix (Bug):** [Issue #1049](https://github.com/alibaba/ROCK/issues/1049) identified a severe compatibility issue where `oss2` (Alibaba Cloud Object Storage SDK) defaulted to version 2.1.1, breaking several APIs.
*   **Sandbox Lifecycle Bugs:** [Issue #1018](https://github.com/alibaba/ROCK/issues/1018) highlighted that `SandboxManager.stop()` failed to write `stop_time` if `start_time` was missing, leaving 771 production rows in a broken state. Also, [Issue #1030](https://github.com/alibaba/ROCK/issues/1030) noted that Harbor job names were incorrectly preserving path separators (`/`), breaking downstream systems.
*   **GPU/Accelerator Configs (Enhancement):** [Issue #1044](https://github.com/alibaba/ROCK/issues/1044) requested exposing `num_gpus` and `accelerator_type` directly in the Sandbox SDK config, moving away from a single global CPU isolation switch.
*   **Dependency Slimming (Enhancement):** [Issue #1052](https://github.com/alibaba/ROCK/issues/1052) proposed removing the obsolete `uuid` dependency and moving `jinja2` to admin extras to streamline the core SDK.

## 4. Key PR Progress
*   **Sandbox Start Refactor:** [PR #1051](https://github.com/alibaba/ROCK/pull/1051) (Open) refactors `start()` to delegate to `start_async()`, unifying the meta store write logic and fixing the missing `start_time` bug.
*   **GPU Support Rollout:** [PR #1047](https://github.com/alibaba/ROCK/pull/1047) (Closed/Merged) implements the SDK parameters for `num_gpus` and `accelerator_type`. Documentation support was also merged via [PR #1046](https://github.com/alibaba/ROCK/pull/1046).
*   **OSS Version Gating:** [PR #1055](https://github.com/alibaba/ROCK/pull/1055) (Open) and [PR #1048](https://github.com/alibaba/ROCK/pull/1048) (Closed) aggressively bump the minimum `oss2` version to `>=2.19.1` to resolve the breaking API changes.
*   **Sandbox Auto-Delete:** [PR #1038](https://github.com/alibaba/ROCK/pull/1038) (Open) introduces a `/delete` endpoint and background scan for automated sandbox teardown.
*   **Scheduler Cleanup Overhauls:** Merged [PR #1029](https://github.com/alibaba/ROCK/pull/1029) (4-stage cleanup for Ray logs) and [PR #1025](https://github.com/alibaba/ROCK/pull/1025) (DB-driven log archival replacing clunky sentinel files).
*   **Core Dependency Pruning:** [PR #1053](https://github.com/alibaba/ROCK/pull/1053) successfully dropped the legacy `uuid` package in favor of Python 3.10+ stdlib, cleaning up the dependency tree.

## 5. Why This Project Matters in Today's RL Landscape
Training Reinforcement Learning agents at scale requires immense, ephemeral, and fault-tolerant compute orchestration. Today's updates to ROCK illustrate a maturing RL infrastructure:
1.  **Granular Hardware Orchestration:** By adding granular GPU/accelerator flags directly into the sandbox SDK, ROCK aligns with the modern RL paradigm where heterogeneous compute (CPUs for environmental stepping, GPUs for neural net inference/training) must be dynamically allocated.
2.  **Fault-Tolerant Training Environments:** RL training loops are notoriously brittle. PRs like the `start()` refactor and the DB-driven state cleanup ensure that if an environment crashes, its metadata and logs are cleanly archived, allowing training resume-logic to function correctly without leaking resources.
3.  **Scalable Data I/O:** The updates to Ray log cleanups and the `rock storage get` CLI endpoint highlight a focus on distributed data hygiene, ensuring that thousands of parallel RL workers don't overwhelm the storage backend with orphaned logs.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for **2026-06-02**.

### 1. Today's Highlights
The **slime** (THUDM) repository saw significant activity today with 7 active Pull Requests and 3 updated Issues, highlighting a strong community focus on stabilizing multi-agent reinforcement learning rollouts, expanding model architecture support, and fixing edge cases in distributed RL training infrastructure. 

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **Multi-Agent GRPO Advantage Crash** ([#1976](https://github.com/THUDM/slime/issues/1976)): A critical bug where GRPO advantage computation crashes with `NoneType` due to missing old-policy log probabilities in the multi-agent rollout pipeline. *Status: Closed via PR [#1995].*
*   **Proposal: TCOD for Multi-Turn Agents** ([#2002](https://github.com/THUDM/slime/issues/2002)): A proposal to integrate **TCOD** (Temporal Curriculum On-Policy Distillation), a published method (arXiv:2604.24005), to extend slime's existing single-turn on-policy distillation into multi-turn agentic frameworks. 
*   **RAM OOM with Optimizer CPU Offload** ([#1851](https://github.com/THUDM/slime/issues/1851)): Closed investigation into 1TB RAM `OutOfMemoryError` during step 2 of training Qwen3-30B-A3B on 8xH100s using `--optimizer-cpu-offload`.

### 4. Key PR Progress
*   **Multi-Agent Logprob Preservation** ([#1995](https://github.com/THUDM/slime/pull/1995)): Fixes the aforementioned Issue #1976 by ensuring token-level rollout logprobs from SGLang are preserved and correctly consumed by the GRPO training script. 
*   **Rollout Length Overflow Fix** ([#2003](https://github.com/THUDM/slime/pull/2003)): Prevents `response_length` overflow when ABORTED samples are pushed back to the data buffer by clamping `max_new_tokens` on retry.
*   **SGLang GPT-OSS Weight Conversion** ([#2004](https://github.com/THUDM/slime/pull/2004)): Fixes the Megatron-to-HF raw converter for non-colocate paths by emitting fused expert tensors specifically formatted for SGLang.
*   **Megatron Bridge Gradient Fusion** ([#1999](https://github.com/THUDM/slime/pull/1999)): Fixes a silent override in the `megatron.bridge` provider where CLI flags for `--no-gradient-accumulation-fusion` were ignored in favor of APEX CUDA availability.
*   **GLM5 SFT Integration** ([#1844](https://github.com/THUDM/slime/pull/1844)): Expands slime's SFT capabilities by introducing a GLM5-specific loss mask and stop markers for tool-call versus standard assistant turns.
*   **Docs & Debugging** ([#2001](https://github.com/THUDM/slime/pull/2001), [#2000](https://github.com/THUDM/slime/pull/2000)): Added a step-by-step interactive debug tutorial for custom rollout functions and patched broken example links in the agent documentation.

### 5. Why This Project Matters in Today's RL Landscape
Slime continues to cement itself as a robust, production-ready framework for large-scale LLM post-training. Today's updates reflect the broader RL ecosystem's shift from standard single-turn RLHF toward **complex, multi-turn agentic workflows** (evidenced by TCOD proposals and multi-agent GRPO patches). Furthermore, PRs focusing on SGLang tensor formatting, Megatron distributed bridge overrides, and CPU offloading for massive MoE architectures (like Qwen3-30B-A3B) demonstrate that slime is actively tackling the very real systems bottlenecks required to train frontier models on clusters like the H100.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL Daily Digest: 2026-06-02

Here is the daily open-source reinforcement learning ecosystem update for **AReaL** (inclusionAI). 

## 1. Today's Highlights
Activity over the past 24 hours indicates strong forward momentum for AReaL's infrastructure. The community and maintainers are actively mapping out the project's trajectory through the end of 2026, while core contributors are pushing significant enhancements to hardware efficiency (FP8 support) and observability (trace logging).

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
The project's strategic roadmap is expanding, clearly signaling long-term commitment and opening new avenues for community contributions.
*   **[Roadmap] 2026 H2 Milestones** ([#1381](https://github.com/areal-project/AReaL/issues/1381)): Opened just yesterday, this issue outlines the development targets for the second half of 2026. It currently has 0 comments, suggesting it is fresh and ready for community input.
*   **[Roadmap] 2026 Q2 Milestones** ([#1302](https://github.com/areal-project/AReaL/issues/1302)): Still active and currently tracking ongoing features through July 31, 2026. This issue has garnered 8 comments, indicating ongoing strategic discussion among contributors.

## 4. Key PR Progress
Three substantial pull requests saw updates today, focusing on performance optimization, distributed training fixes, and MLOps integration:

*   **Feat: Full FP8 implementation with FSDP+SGLang** ([#1379](https://github.com/areal-project/AReaL/pull/1379)): A major performance PR submitted by ZiyiTsang. It introduces FP8 block-wise quantization specifically for SGLang rollouts while maintaining BF16 for FSDP training. This hybrid approach quantizes weights online before the NCCL broadcast, a crucial step for maximizing memory efficiency and throughput on modern GPUs.
*   **fix(trainer): Skip controller-side CUDA sync** ([#1377](https://github.com/areal-project/AReaL/pull/1377)): Authored by Adiactive, this PR addresses a distributed training inefficiency. It removes unnecessary `CUDA synchronize()` calls on pure orchestrator processes in single-controller modes during checkpoint saves (`_save_hf`), reducing pipeline stalls.
*   **Add rollout trace logging with `trackio`** ([#1360](https://github.com/areal-project/AReaL/pull/1360)): Opened by abidlabs, this PR extends AReaL’s existing Trackio metrics backend to support full Trace Logging. This leverages Hugging Face's local-first experiment tracking library, significantly improving debugging and observability for complex RL rollout trajectories.

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—dominated by the alignment and post-training of Large Language Models (LLMs)—compute efficiency and distributed scaling are the primary bottlenecks. AReaL’s latest PR activity directly addresses these industry pain points. 

The implementation of **FP8 rollouts with SGLang and FSDP** ([#1379](https://github.com/areal-project/AReaL/pull/1379)) highlights a sophisticated understanding of LLM infrastructure, allowing inference and training workloads to operate at mixed precisions without bottlenecking at the network broadcast layer. Combined with better observability via **Hugging Face Trackio** ([#1360](https://github.com/areal-project/AReaL/pull/1360)) and a clearly defined **2026 H2 roadmap** ([#1381](https://github.com/areal-project/AReaL/issues/1381)), AReaL is positioning itself as a highly optimized, enterprise-grade open-source framework for large-scale RLHF and reasoning model training.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL 
**Date:** 2026-06-02 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Activity in the TRL ecosystem over the last 24 hours shows a strong strategic push toward **asynchronous reinforcement learning**, **infrastructure scalability**, and **algorithmic optimizations**. The community was highly active with 18 updated Pull Requests (mostly focusing on `AsyncGRPOTrainer` and memory optimization) and 11 Issues. A notable architectural RFC was proposed to natively integrate environment-driven Agent RL into the training loop.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
- **RFC: Environment-Owned Datasets for Agent RL ([#5903](https://github.com/huggingface/trl/issues/5903)**): Maintainer *qgallouedec* proposed a significant architectural shift for `GRPOTrainer` and `AsyncGRPOTrainer`. Instead of the trainer sampling prompts from a static dataset, this RFC suggests letting the environment own and generate the dataset dynamically, paving the way for robust Agent RL training.
- **DeepSpeed ZeRO-3 + GRPO Incompatibility ([#4535](https://github.com/huggingface/trl/issues/4535)**): A bug report highlighted that `GRPOTrainer` crashes during training when utilizing Accelerate mixed with DeepSpeed ZeRO-3, pointing to lingering issues in distributed RL workloads.
- **Checkpoint Resumption Failures in PPO/RLOO ([#2657](https://github.com/huggingface/trl/issues/2657)**): A user reported that `resume_from_checkpoint` fails in online trainers (PPO/RLOO), revealing a critical missing mechanism in TRL's distributed training fault tolerance.
- **CI Gradient Mismatch ([#5874](https://github.com/huggingface/trl/issues/5874)**): Automated tests failed due to a gradient mismatch on `embed_tokens` when running with minimum dependency versions, swiftly addressed in PR [#5898](https://github.com/huggingface/trl/pull/5898).

## 4. Key PR Progress
- **AsyncGRPOTrainer Enhancements:** Significant work went into making async training production-ready. 
  - **Moved to Processes:** PR [#5749](https://github.com/huggingface/trl/pull/5749) moves rollout generation to a spawned child process, preventing the autograd engine from competing for the Python GIL.
  - **PEFT/LoRA Support:** PR [#5896](https://github.com/huggingface/trl/pull/5896) adds crucial weight sync merge/unmerge cycles for LoRA adapters in an async setting.
  - **ProcessorMixin:** PR [#5895](https://github.com/huggingface/trl/pull/5895) fixes `AsyncGRPOTrainer` for VLMs by supporting `ProcessorMixin` alongside standard text tokenizers.
  - **Async Networking:** PR [#5861](https://github.com/huggingface/trl/pull/5861) increased the `aiohttp` connection limit to handle high-throughput inflight tasks.
- **Memory Optimization in KTO & SFT:** 
  - PR [#5901](https://github.com/huggingface/trl/pull/5901) and [#5900](https://github.com/huggingface/trl/pull/5900) align KTO with DPO by adding activation offloading to CPU and disabling gradient checkpointing for reference forward passes. 
  - PR [#5897](https://github.com/huggingface/trl/pull/5897) optimizes `SFTTrainer` by merging entropy and accuracy computations, eliminating a redundant `logits` copy.
- **VLM Training Fixes:** PR [#5904](https://github.com/huggingface/trl/pull/5904) resolved a challenging bug where tokenizers truncated image placeholders during `max_length` truncation, causing feature-token mismatches in models like Qwen3.5.
- **Algorithmic Refinements:** 
  - PR [#5905](https://github.com/huggingface/trl/pull/5905) fixed off-by-one errors in the experimental GOLD trainer's `ULDLoss` to properly adhere to Bayes' rule.
  - PR [#5902](https://github.com/huggingface/trl/pull/5902) fixed a baseline bias in GRPO/RLOO by correctly excluding `None` (unscorable) reward completions from the advantage baseline calculation.

## 5. Why This Project Matters in Today's RL Landscape
As the field pivots from static offline alignment (standard DPO) toward dynamic, agentic workflows, the technical complexity of RLHF infrastructure has skyrocketed. TRL remains at the absolute center of this transition. Today's digest reveals that the library is rapidly evolving from a simple "trainer wrapper" into a highly distributed, asynchronous RL engine capable of managing its own rollout workers, handling VLM architectures natively, and interfacing directly with external game environments. By actively resolving memory bottlenecks (offloading, Liger-Kernel integration) and distributed training hurdles (DeepSpeed, vLLM weight syncing), TRL is lowering the hardware ceiling required to train next-generation reasoning models.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Daily Digest: verl
**Date:** 2026-06-02 | **Project:** [verl-project/verl](https://github.com/volcengine/verl)

Here is your daily brief on the latest developments in the verl reinforcement learning ecosystem.

## 1. Today's Highlights
- **Major Release:** verl **v0.8.0** is officially out, introducing significant Megatron-backend upgrades, including Megatron-FSDP mode and Qwen3.5 MTP support.
- **Multi-Turn & Agent Focus:** Several new RFCs and PRs signal a strong architectural push toward multi-turn agent workflows, culminating in proposals for Agent Abstractions and Temporal Curriculum (TCOD).
- **Hardware & Architecture Optimizations:** High activity around novel architectures (GatedDeltaNet, GLM MoE with Dynamic Sparse Attention) and quantization (MXFP8, FP8 W8A8, NVFP4 QAT).

## 2. Releases
### [v0.8.0](https://github.com/volcengine/verl/releases/tag/v0.8.0)
This version expands verl's distributed training and hardware efficiency capabilities.
**Training/Megatron Highlights:**
- **Megatron-FSDP Mode** (#5423) for hybrid backend parallelism.
- **Dynamic Context Parallelism** (#5057) and support for BSHD format (#5826).
- **Qwen3.5 MTP SFT/RL** (#5898) support.
- Checkpointing now supports HF PEFT format (#5575).
- **NVFP4 (W4A16) QAT training** via ModelOpt (#5254).

## 3. Important Issues
*7 issues updated in the last 24h.*

**Agent & Trajectory Abstractions:**
- **[RFC] Agent Abstractions and Trajectory Gateway** ([#5790](https://github.com/verl-project/verl/issues/5790)): A highly popular RFC (👍22) proposing a standardized `AgentFramework` and `TrajectoryGateway` to decouple agent lifecycles from reward computation.
- **[RFC] TCOD: Temporal Curriculum for Multi-turn Agent On-Policy Distillation** ([#6552](https://github.com/verl-project/verl/issues/6552)): Proposes integrating temporal curriculum learning into verl’s OPD core for complex multi-turn environments.

**Performance & Architecture:**
- **Colocated Checkpoint Engine for MoE/VLs** ([#6225](https://github.com/verl-project/verl/issues/6225)): Requested by the Qwen Business Group for efficiently training massive models (e.g., Qwen3.5-35B-A3B, Qwen3-VL-235B) using colocated Megatron + SGLang setups.
- **Decoupled Speculation for SGLang** ([#5559](https://github.com/verl-project/verl/issues/5559)): Proposes using decoupled speculative decoding to accelerate the rollout phase in LLM post-training.

**Critical Bugs:**
- **vLLM + Qwen3.5 Failures:** Multiple reports of Qwen3.5 failing to train with vLLM, including illegal memory access errors in FSDP2 ([#6549](https://github.com/verl-project/verl/issues/6549), [#6563](https://github.com/verl-project/verl/issues/6563)).
- **Tokenizer Bug:** `initialize_system_prompt` errors when chat templates aren't strictly append-only ([#6501](https://github.com/verl-project/verl/issues/6501)).

## 4. Key PR Progress
*36 PRs updated; top contributing areas include rollout robustness, quantization, and distributed memory management.*

**Architectural & Scaling Improvements:**
- **Generic Remote Backend Abstraction** ([#6422](https://github.com/verl-project/verl/pull/6422)): Introduces a generic abstraction for remote backends, starting with ArcticRL.
- **Standalone Log Prob Server** ([#5990](https://github.com/verl-project/verl/pull/5990)): Decouples `old_log_probs` computation from the actor training engine to avoid saving/restoring actor weights.

**New Model & Attention Support:**
- **GLM MoE with Dynamic Sparse Attention (DSA)** ([#6525](https://github.com/verl-project/verl/pull/6525)): Adds monkey-patching and MLA FLOPs estimation for FSDP training.
- **GatedDeltaNet (GDN) with Packed THD Sequence Parallelism** ([#6559](https://github.com/verl-project/verl/pull/6559)): Enables hybrid architectures (like Qwen3.5) to pass sequence boundaries correctly under Megatron.
- **Qwen3.5 MFU FLOPs Estimation** ([#6389](https://github.com/verl-project/verl/pull/6389)): Accurately accounts for GDN projection and hybrid attention in dense/MoE MLPs.

**Critical Security & Bug Fixes (by @fuergaosi233):**
- **Arbitrary Code Execution in Qwen3 Tool Parser** ([#6542](https://github.com/verl-project/verl/pull/6542)): Removes a dangerous `eval()` call on untrusted model outputs.
- **NaiveRouter Memory Leak** ([#6544](https://github.com/verl-project/verl/pull/6544)): Ensures worker counts are released after request failures.
- **Reward Score KeyErrors** ([#6545](https://github.com/verl-project/verl/pull/6545)): Unions `reward_extra_info` keys across samples to prevent crashes.

## 5. Why This Project Matters in Today's RL Landscape
verl's recent velocity highlights a massive industry shift in the RL/Open-Source ecosystem: **the transition from static, single-turn preference tuning (like standard PPO/DPO) toward dynamic, multi-turn Agentic RL.** 

By aggressively supporting large-scale, sparse-activation models (MoEs like Qwen3-VL-235B) and hybrid architectures (GatedDeltaNet), verl is lowering the barrier to aligning massive, frontier models. Furthermore, the prompt resolution of security flaws (like tool parser code execution) and memory leaks demonstrates the maturation of post-training frameworks from experimental research tools into robust, production-grade infrastructure.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct Ecosystem
**Date:** 2026-06-02

## 1. Today's Highlights
Activity in the AllenAI `open-instruct` repository over the last 24 hours was driven entirely by pull requests (2 updated, 0 issues or releases). The focus was on infrastructure stability—specifically resolving a critical distributed training deadlock in Group Relative Policy Optimization (GRPO)—and expanding evaluation utility support for newly released LLM judges. 

## 2. Releases
No new releases were published on 2026-06-02.

## 3. Important Issues
No issues were opened, closed, or updated in the last 24 hours.

## 4. Key PR Progress
*   **[#1708 Fix GRPO OLMo-core bookkeeping PG deadlock + Qwen3 parity tweaks](https://github.com/allenai/open-instruct/pull/1708)** `[OPEN]`
    *   **Author:** finbarrtimbers
    *   **Summary:** This PR addresses a severe distributed training bottleneck. It resolves a process group (PG) deadlock in GRPO training triggered by OLMo-core's metric logging behavior. Specifically, it fixes a scenario where `_log_metrics` skips submission if metrics are empty on certain ranks, causing a `reduce_metrics` hang. This is a crucial fix for researchers running multi-node RLHF/GRPO workloads.
*   **[#1712 feat: add MiniMax-M3 to judge price table](https://github.com/allenai/open-instruct/pull/1712)** `[OPEN]`
    *   **Author:** octo-patch
    *   **Summary:** A utility enhancement that registers the new MiniMax-M3 flagship model (`input: 0.6`, `output: 2.4`) into the judge pricing table (`judge_utils.py`). This ensures accurate cost tracking when utilizing M3 as an automated RL reward/judge model in `ground_truth_utils.py`.

## 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning from Human Feedback (RLHF) and post-training paradigms (like GRPO and DPO) rely heavily on robust, distributed infrastructure and scalable evaluation pipelines. Today's updates to `open-instruct` perfectly highlight the two main battlegrounds in open-source RL:
1.  **Training Stability at Scale:** As RL moves from single-GPU PPO experiments to massive distributed GRPO training runs, low-level distributed deadlocks (like the metric reduction bug in PR #1708) become critical project blockers. Fixing these synchronizations is vital for keeping multi-node training clusters efficient.
2.  **Cost-Efficient Evaluation:** Using LLMs as automated judges (RLAIF) is now standard practice, but token costs can bottleneck iteration cycles. Adding pricing telemetry for frontier models like MiniMax-M3 (PR #1712) allows researchers to precisely calculate and constrain the financial overhead of RL reward modeling.

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

No activity in the last 24 hours.

</details>