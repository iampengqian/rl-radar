# RL Open Source Daily Digest 2026-06-27

> Generated: 2026-06-26 22:22 UTC | Projects covered: 15

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
The June 27, 2026 digest reveals a Reinforcement Learning (RL) ecosystem polarized between two major frontiers: massive-scale LLM post-training (RLHF/GRPO) and agentic/multi-turn RL, alongside steady maintenance of foundational classic RL environments. 
* **LLM Post-Training:** Dominated by intense engineering efforts to scale Group Relative Policy Optimization (GRPO), Mixture of Experts (MoE), and inference-training colocation across heterogeneous hardware (AMD, Ascend).
* **Classic & MARL Foundations:** Projects like Gymnasium and PettingZoo are aggressively shedding legacy technical debt (e.g., dropping Python 3.9, NumPy 1.x, and migrating from Box2D to Pymunk) to ensure future stability.
* **Agentic & Tool-Using RL:** Rapid convergence across LLM frameworks (TRL, verl, OpenRLHF) toward multi-turn agent loops, tool-calling termination, and code-environment benchmarks (SWE-bench).

## Activity Comparison
*Note: The following projects reported zero activity in the last 24 hours and are excluded from the daily strategic focus: rl_games, Stable Baselines3, Tianshou, torchtune.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 4 | 8+ | 1 (v1.7.0) | Massive VRAM optimizations; pushing async GRPO and agentic workflows. |
| **verl** | 4 | 8+ | 0 | Scaling complex architectures (MoE, Context Parallelism) and multimodal RL. |
| **AReaL** | 1 | 16 | 0 | "RL-as-a-Service" architecture; expanding into multi-modal Diffusion RL. |
| **slime** | 3 | 6 | 0 | Aggressive integration of multimodal (Qwen3.5-VL) and MoE model support. |
| **Gymnasium** | 4 | 3 | 0 | Forcing compatibility with Python 3.14, NumPy 2.0, and Pymunk. |
| **PettingZoo** | 2 | 5 | 0 | Dropping Python 3.9; optimizing MARL rendering and state APIs. |
| **ROCK** | 0 | 5 | 0 | Infrastructure scaling; serverless integration and sandbox archiving. |
| **ROLL** | 1 | 2 | 0 | Hardware-specific optimizations for Huawei Ascend NPUs. |
| **Open Instruct**| 0 | 2 | 0 | Hybrid algorithm development (On-Policy Distillation + GRPO). |
| **CleanRL** | 1 | 0 | 0 | Identifying edge-case GAE bugs in Envpool Atari integrations. |
| **OpenRLHF** | 0 | 1 | 0 | Refining token-length penalties for agentic/action-masked RLHF. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals:**
* **GRPO Standardization & Adaptation:** GRPO has clearly become the default baseline for LLM RL. Frameworks are now iterating on next-gen GRPO variants (e.g., Async GRPO in TRL, GRPO for MoE in ROLL/AReaL).
* **Hybrid RL & Imitation:** Multiple projects (verl, Open Instruct, AReaL) are integrating On-Policy Self-Distillation (OPSD) / Multi-Teacher Distillation, blending RL exploration with supervised signal stability.
* **Multimodal & Diffusion RL:** Expanding RL beyond text. AReaL is testing RL for Diffusion models, while verl and slime are building pipelines for Vision-Language Models (VL) and video reasoning.
* **Agentic Multi-Turn RL:** Shifting from static prompt-response pairs to multi-turn loops that preserve `<think>` blocks, utilize tool-calling termination, and integrate coding benchmarks.

**Engineering & Infrastructure Signals:**
* **Inference-Training Co-location:** Heavy focus on optimizing the shared GPU memory pool between training engines (FSDP/Megatron) and inference engines (vLLM/SGLang). Fixing sync hangs, memory leaks (OOMs), and LoRA adapter syncing are top priorities.
* **Hardware Heterogeneity:** Preparing frameworks for non-NVIDIA silicon. verl and ROLL are aggressively patching frameworks for AMD MI250X and Huawei Ascend NPUs (CANN/MindSpeed).
* **Distributed Systems Optimization:** Introduction of Prefill-Decode (PD) disaggregation, pluggable rollout routing, and FP8 weight transfers to prevent communication bottlenecks in 100B+ scale models.

## Differentiation Analysis
* **TRL vs. verl:** TRL remains the accessible, research-friendly framework focused on hackability and fast iteration (evidenced by single-line QLoRA setups and memory optimizations). Conversely, verl is positioning itself as the rigid, production-grade engine explicitly targeting 100B+ distributed architectures (Megatron CP, Ulysses SP).
* **Alibaba's Ecosystem Fork (AReaL, ROLL, ROCK):** Alibaba is developing a highly specialized, full-stack RL cloud. *ROCK* provides the serverless/plumbing infrastructure, *ROLL* optimizes the low-level hardware layer (Ascend NPUs), and *AReaL* delivers the high-level "RL-as-a-Service" algorithms.
* **Classic RL vs. LLM RL:** A stark contrast in bug types and PR focus. Classic/MARL projects (Gymnasium, CleanRL, PettingZoo) are hunting low-level environment logic bugs (e.g., GAE dummy transitions, Pymunk ports) and dependency modernization. LLM RL projects are battling distributed networking hangs, GPU VRAM fragmentation, and MoE gradient explosions.

## Community Momentum & Maturity
* **Farama Foundation (Gymnasium/PettingZoo):** Demonstrating highly mature, proactive maintenance. They are deliberately breaking legacy compatibility (dropping NumPy 1.x and Python 3.9) to prevent future technical debt, ensuring long-term stability for downstream MARL algorithms.
* **HuggingFace (TRL):** Experiencing massive user momentum, reflected by rapid feature shipping (v1.7.0 release). However, this velocity brings scale-related friction, seen in the open issues regarding vLLM colocate crashes and multi-GPU PEFT hanging.
* **AI Giants (Alibaba/ByteDance):** verl, slime, and AReaL show highly centralized, corporate-driven momentum. Their issue trackers reflect enterprise-scale growing pains (multi-node LUMI-G clusters, H200 memory spikes) rather than individual researcher bug reports.

## Trend Signals
* **Silicon Diversification:** The reliance on Nvidia GPUs is actively fracturing. The heavy integration of AMD and Ascend NPU support in frameworks like verl and ROLL signals that sovereign AI and hardware diversification are now primary concerns for RL scaling.
* **The "Agentic Penalty" is Being Solved:** Frameworks are differentiating between generation tokens and tool/environment tokens (OpenRLHF's PR #1246). This precise action-masking is a prerequisite for reliable, cost-effective autonomous agents.
* **RL Paradigm Shift:** The industry is moving away from pure, reward-maximizing RLHF towards test-time compute, multi-turn agentic loops, and hybrid self-distillation. Frameworks that do not support asynchronous generation and tool-environment interaction will rapidly lose relevance.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL Open-Source Ecosystem Daily Digest: June 27, 2026**
**Project:** ROLL (alibaba/ROLL)

### 1. Today’s Highlights
*   **Ascend NPU Ecosystem Maturation:** The past 24 hours show concentrated development on Huawei Ascend NPU support. The project is systematically integrating both vLLM-Ascend and Megatron/MindSpeed pathways.
*   **Hardware-Aware RL Pipelines:** Updates reflect a broader industry trend of optimizing RL frameworks for heterogeneous hardware, specifically updating dependencies for CANN 9.0.0 and PyTorch 2.9.0.
*   **Community Engagement on Advanced Architectures:** Users are actively inquiring about training cutting-edge architectures, specifically Mixture-of-Experts (MoE) models like Qwen 3.6 using GRPO.

### 2. Releases
*   **No New Releases:** No official releases were published in the last 24 hours. Development remains focused on merging architectural features and hardware backend updates. 

### 3. Important Issues
*   **[Issue #449](https://github.com/alibaba/ROLL/issues/449) [CLOSED]: Support for Qwen 3.6 MoE GRPO Training**
    *   **Author:** chenlongxiabc
    *   **Summary:** A user requested support and reference scripts for GRPO (Group Relative Policy Optimization) training of the Qwen 3.6 MoE architecture. The issue was formally closed yesterday, indicating that the framework has either successfully resolved this or provided the necessary documentation/scripts for advanced MoE RLHF.

### 4. Key PR Progress
*   **[PR #466](https://github.com/alibaba/ROLL/pull/466) [CLOSED]: Ascend NPU Documentation Update**
    *   **Author:** UsernameFull
    *   **Summary:** This PR successfully aligned Ascend NPU Dockerfiles, CI, examples, and documentation with the current FSDP2 + vLLM-Ascend backend. It officially brings the environment up to speed with PyTorch 2.9.0, CANN 9.0.0, vLLM 0.18.0, and triton-ascend 3.2.1. 
*   **[PR #456](https://github.com/alibaba/ROLL/pull/456) [OPEN]: Ascend MindSpeed & Megatron Support + CI Tests**
    *   **Author:** shun001
    *   **Summary:** A major ongoing feature PR that introduces MindSpeed-based NPU initialization, Megatron optimizer/offload compatibility, and NPU-specific attention mask handling. It also introduces CI workflows and Qwen3 DPO Megatron example configs, showing a strong push toward Megatron-based RL training on NPUs.

### 5. Why This Project Matters in Today’s RL Landscape
As Reinforcement Learning (particularly RLHF/GRPO) becomes the bottleneck for aligning massive LLMs and MoEs, framework versatility across compute backends is critical. ROLL’s recent development trajectory—specifically its aggressive integration of FSDP2, vLLM, and Megatron specifically tailored for Ascend NPUs—demonstrates a strategic pivot toward hardware-agnostic, high-throughput RL. By supporting cutting-edge models (Qwen 3.6 MoE) and alternative silicon infrastructure, ROLL is positioning itself as a highly adaptable, production-ready framework for sovereign and large-scale AI labs navigating GPU shortages.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for alibaba/ROCK based on the provided GitHub data.

# 📊 RL Open-Source Ecosystem Daily Digest: 2026-06-27
**Project:** alibaba/ROCK 

## 1. Today's Highlights
Activity in the last 24 hours has been entirely focused on engineering momentum, with **5 Pull Requests** updated and zero new issues or releases. The core updates center on expanding dataset interoperability (benchmark parsing), refining sandbox lifecycle management (archiving), improving infrastructure deployment (serverless and container mirroring), and enhancing operational observability (time logging).

## 2. Releases
* **None** (No new releases in the last 24 hours).

## 3. Important Issues
* **None** (0 issues opened or updated in the last 24 hours, indicating a stable codebase or a focus shift to active feature development).

## 4. Key PR Progress
Developers merged efforts across infrastructure, data handling, and platform operations:

* **Dataset & Evaluation APIs ([PR #1171](https://github.com/alibaba/ROCK/pull/1171))**
  * *Author:* `jake11-oho`
  * *Progress:* Major SDK enhancement introducing generic pagination (`PageResult[T]`), granular query APIs, and task file operations. Crucially, it adds pluggable format parsers for standard LLM/agent evaluation benchmarks like **PinchBench**, **SWE-bench**, and **TB2**, vastly simplifying dataset ingestion for RL fine-tuning.
* **Infrastructure & Operations ([PR #867](https://github.com/alibaba/ROCK/pull/867), [PR #1174](https://github.com/alibaba/ROCK/pull/1174))**
  * *Progress:* Long-running serverless integration ([#867](https://github.com/alibaba/ROCK/pull/867) by `insight-bit`) adding Alibaba Function Compute operator support saw updates. Furthermore, a new feature ([#1174](https://github.com/alibaba/ROCK/pull/1174) by `zhongwen666`) introduces time logging, essential for tracking computational overhead during long RL training runs.
* **Sandbox Lifecycle Management ([PR #1095](https://github.com/alibaba/ROCK/pull/1095))**
  * *Author:* `zhangjaycee`
  * *Progress:* Deep architectural update integrating an archive lifecycle into the sandbox state machine (adding `archiving` / `archived` states). This is critical for managing storage costs and state persistence for RL environments.
* **Documentation ([PR #1169](https://github.com/alibaba/ROCK/pull/1169))**
  * *Author:* `jake11-oho`
  * *Progress:* Added bilingual (EN/CN) user guides for the `rock image mirror` command, documenting cross-region registry replication (Singapore to Shanghai) which aids distributed RL teams in pulling training images locally.

## 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning ecosystem—particularly with the rise of RLHF and agentic RL for LLMs—managing the lifecycle of ephemeral compute environments and evaluation datasets is a massive bottleneck. 

Today's updates to ROCK highlight its critical role as **infrastructure glue**. By integrating serverless runtimes (Function Compute) and formalizing sandbox state machines (archive lifecycle), ROCK directly addresses the high-cost, high-compute demands of RL workloads. Furthermore, the addition of native parsers for standard benchmarks (SWE-bench, etc.) in [PR #1171](https://github.com/alibaba/ROCK/pull/1171) positions ROCK not just as a training platform, but as a standardized evaluation harness, bridging the gap between raw model training and automated benchmarking.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for `THUDM/slime` based on the provided GitHub data. 

# 📅 RL Daily Digest: THUDM/slime
**Date:** 2026-06-27

### 1. Today's Highlights
- **Architecture & Model Expansions:** Massive momentum in multimodal and MoE support. PRs landed today adding full RL pipelines for **Gemma4** (dense & MoE) ([PR #2135](https://github.com/THUDM/slime/pull/2135)) and **Qwen3.5-VL** via Megatron-Bridge ([PR #2075](https://github.com/THUDM/slime/pull/2075)).
- **Distributed Training Fixes:** Addressed critical synchronization bottlenecks in colocated weight syncing ([PR #2134](https://github.com/THUDM/slime/pull/2134)) and resolved an Out-of-Memory (OOM) issue tied to SGLang during long-running training jobs ([Issue #1136](https://github.com/THUDM/slime/issues/1136)).
- **Performance Optimizations:** Significant compute savings proposed by bypassing entropy gradient computation when not needed ([PR #2130](https://github.com/THUDM/slime/pull/2130)).

### 2. Releases
**None** (No new releases in the last 24 hours). The ecosystem activity remains entirely focused on `main` branch development and upcoming feature integrations.

### 3. Important Issues
- **Multi-head MTP Crashes ([#2131](https://github.com/THUDM/slime/issues/2131)):** Training crashes during per-step logging when enabling Multi-Token Prediction (MTP) with more than 1 layer (`--mtp-num-layers > 1`) due to a hardcoded single-MTP-layer assumption. 
- **SGLang OOM During Stable Training ([#1136](https://github.com/THUDM/slime/issues/1136)):** Users are experiencing Out-Of-Memory errors halfway through training, specifically related to SGLang engine HTTP generation/abort requests during rollout.
- **Eval-Only Mode Failure ([#1785](https://github.com/THUDM/slime/issues/1785)):** Attempting to run an evaluation-only test using `train.py` with `num_rollout == 0` triggers an error instead of successfully routing to the eval manager.

### 4. Key PR Progress
- **[PR #2135](https://github.com/THUDM/slime/pull/2135): feat(gemma4):** Integrates Gemma4 dense and 26B-A4B MoE variants, including HF conversions, loss-masking, and native GSM8K RL recipes.
- **[PR #2134](https://github.com/THUDM/slime/pull/2134): fix: Empty colocated weight buckets:** Fixes a distributed training crash by correctly handling empty local chunks in `_send_to_colocated_engine`, preventing premature failures before Gloo gather operations.
- **[PR #2132](https://github.com/THUDM/slime/pull/2132): fix(mtp):** Immediate patch for Issue #2131, enabling dynamic multi-head MTP loss logging.
- **[PR #2130](https://github.com/THUDM/slime/pull/2130): perf: Entropy gradients:** Skips computationally expensive `[num_tokens, vocab]` entropy graph calculations when `entropy_coef == 0`, vastly reducing memory overhead.
- **[PR #2090](https://github.com/THUDM/slime/pull/2090): feat(loss):** Refactors `pg_loss` aggregation to natively support prompt-group normalization and fixed-divisor normalization without relying on fragile custom reducers.
- **[PR #2075](https://github.com/THUDM/slime/pull/2075): feat: Qwen3.5-VL support:** Registers official Megatron-Bridge adapters to enable RL training for Qwen3.5 dense and MoE Vision-Language models.

### 5. Why This Project Matters in Today's RL Landscape
The recent PR trajectory of `slime` highlights the exact frontier of the Reinforcement Learning ecosystem in mid-2026:
1. **Agent-Ready RL:** The inclusion of `coding_agent_rl` in the examples directory ([PR #2133](https://github.com/THUDM/slime/pull/2133)) shows a direct pivot from static RLHF towards end-to-end, environment-based agentic training (e.g., SWE-bench style coding agents).
2. **Complex Architecture Support:** The aggressive addition of Vision-Language Models (Qwen3.5-VL) and Mixture-of-Experts (Gemma4 MoE) via Megatron-Bridge reflects the industry's demand for RL frameworks that can handle trillion-parameter, multimodal base models. 
3. **Inference-Training Co-location:** Fixes surrounding SGLang engine memory leaks and colocated weight bucket syncing demonstrate the critical engineering required to maintain stable online RLHF/RLAIF loops, where the inference engine and training engine must share the same physical GPU memory pool efficiently.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning ecosystem digest for AReaL.

# 🧠 AReaL RL Daily Digest — 2026-06-27

An analyst's overview of the latest updates in the AReaL (inclusionAI) reinforcement learning open-source ecosystem.

## 1. Today's Highlights
* **Architectural Expansions:** Significant work is being pushed to expand AReaL’s capabilities beyond standard LLM RLHF. Key PRs target **Diffusion RL post-training** ([#1410](https://github.com/areal-project/AReaL/pull/1410)), **Multi-Teacher On-Policy Distillation** ([#1400](https://github.com/areal-project/AReaL/pull/1400)), and **PD Disaggregation** for optimizing rollout memory/compute bounds ([#1364](https://github.com/areal-project/AReaL/pull/1364)).
* **Infrastructure & CLI Overhaul:** A major effort to modularize AReaL into a service-oriented architecture is underway, with three new CLI scaffolding PRs ([#1440](https://github.com/areal-project/AReaL/pull/1440), [#1435](https://github.com/areal-project/AReaL/pull/1435), [#1434](https://github.com/areal-project/AReaL/pull/1434)) and a new HTTP-based Ray Scheduler ([#1441](https://github.com/areal-project/AReaL/pull/1441)).
* **MoE & Hardware Optimization:** Continued hardening of Mixture-of-Experts (MoE) pipelines, including native FP8 weight transfers ([#1406](https://github.com/areal-project/AReaL/pull/1406)) and LoRA GRPO training for massive MoE models like Qwen3.6-35B-A3B ([#1444](https://github.com/areal-project/AReaL/pull/1444)).

## 2. Releases
* **None** (0 new releases in the last 24 hours). The project appears to be in an active development/integration phase, accumulating features for a future minor or major version bump.

## 3. Important Issues
* **#1442 [bug] [BUG] attn_impl=sdpa silently produces wrong logp with packed sequences on FSDP+HF backend** | *Author: BaodenAyane*
  * **Analysis:** A critical edge-case bug for distributed training. When using PyTorch's SDPA attention implementation with packed sequences across Fully Sharded Data Parallel (FSDP) and HuggingFace backends, the model silently outputs incorrect log probabilities (`logp`). Silent numerical errors in RL are highly destructive, as they corrupt the Advantage/Trust-Region calculations before the user realizes it.
  * **Link:** [areal-project/AReaL Issue #1442](https://github.com/areal-project/AReaL/issues/1442)

## 4. Key PR Progress
A total of **16 PRs** saw updates today. Notable advancements include:

**Algorithmic & Model Support:**
* **[#1444](https://github.com/areal-project/AReaL/pull/1444):** Adds GRPO (Group Relative Policy Optimization) training for Qwen3.6-35B-A3B MoE models using LoRA on a single 8×A800 node.
* **[#1417](https://github.com/areal-project/AReaL/pull/1417) / [#1443](https://github.com/areal-project/AReaL/pull/1443):** Refines PPO actor loss aggregation. Instead of relying on a global token mean (which biases training toward longer sequences), PR #1443 makes the distributed reduction contract explicit in the API.
* **[#1410](https://github.com/areal-project/AReaL/pull/1410):** Phase 1 PoC for RL post-training of Diffusion models (SD1.5 + LoRA + REINFORCE), expanding AReaL from text-only into multi-modal generation RL.

**Systems, Scaling & Infrastructure:**
* **[#1364](https://github.com/areal-project/AReaL/pull/1364):** Implements Prefill-Decode (PD) Disaggregation (`DP=2(1P1D),TP=n`). This splits the inference engine to speed up rollout generation, a crucial optimization for RL scaling.
* **[#1406](https://github.com/areal-project/AReaL/pull/1406):** Enables Megatron FP8 weight transfer in AWEX colocate mode, avoiding implicit dequantization to BF16 and saving massive memory/communication overhead.
* **[#1441](https://github.com/areal-project/AReaL/pull/1441):** Replaces the Ray-native scheduler path with an HTTP-based RPC Ray Scheduler using subprocess-managed workers, enabling better proxy workload management.

**Robustness & Bug Fixes:**
* **[#1426](https://github.com/areal-project/AReaL/pull/1426):** Fixes a hung verification thread in `MathVerifyWorker.verify` where `future.result(timeout=...)` failed to actually terminate the stuck thread pool.
* **[#1432](https://github.com/areal-project/AReaL/pull/1432):** Resolves a `KeyError` in the `DistributedStatsTracker` when exporting single-key metadata with reset.

## 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/RLAIF ecosystem, frameworks generally fall into two categories: research-heavy but hard to scale (e.g., TRL), or highly optimized but rigid (e.g., NeMo-Aligner). 

AReaL is actively positioning itself as the **bridge for production-scale, heterogeneous model alignment**. Today's PR traffic proves this: the project is simultaneously solving high-level algorithmic bottlenecks (token-biased loss aggregation in PPO), exploring next-gen modalities (Diffusion RL), and aggressively optimizing the distributed systems layer (FP8 memory transfers, PD disaggregation, MoE Megatron bridges). 

By introducing service-oriented CLIs for training, inference, and agent rollouts (e.g., the OpenClaw agent runtime in [#1383](https://github.com/areal-project/AReaL/pull/1383)), AReaL is moving toward a full-stack "RL-as-a-Service" architecture, making it a critical project to watch for engineers training trillion-parameter or MoE models in 2026.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily digest for the TRL (Transformer Reinforcement Learning) library.

### 1. Today's Highlights
* **Massive VRAM Optimization Released:** TRL v1.7.0 ships, making `"chunked_nll"` the default loss type for `SFTTrainer`, cutting peak VRAM usage by ~30% (up to 50% for large-vocab models).
* **Major QLoRA & Alignment Refactors:** A series of PRs by core maintainer `qgallouedec` significantly streamline QLoRA initialization and align the experimental `KTOTrainer` API/collators with `DPOTrainer`. 
* **Async GRPO & Agentic Enhancements:** Continuous heavy development in async GRPO packing, multi-environment support, and tool-calling termination logic, cementing TRL as the premier framework for RL-driven agents.

### 2. Releases
* **[v1.7.0](https://github.com/huggingface/trl/releases)** 
  * **Feature:** `SFTTrainer` now defaults to `loss_type="chunked_nll"`. This drastically reduces memory overhead, allowing practitioners to train larger models or use bigger batch sizes without hardware upgrades.

### 3. Important Issues
* **GRPO + vLLM Instability:** Issue [#6166](https://github.com/huggingface/trl/issues/6166) reports a crash in `GRPOTrainer` with `vllm_mode="colocate"` when vLLM outputs a `NaN` token logprob. The current null-check fails to prevent `None` from being passed into `torch.tensor()`. 
* **PEFT + vLLM Colocate Hanging:** Issue [#3671](https://github.com/huggingface/trl/issues/3671) (Closed) detailed hanging behavior when combining GRPO, vLLM colocate, and PEFT on multi-GPU setups. 
* **Feature Request - LoRA Adapter Syncing:** Issue [#5975](https://github.com/huggingface/trl/issues/5975) requests an adapter-only vLLM LoRA sync for `GRPOTrainer` to avoid the massive overhead of merging and sending full model weights during training.
* **Feature Request - Agent Termination:** Issue [#5389](https://github.com/huggingface/trl/issues/5389) asks for a "stop-tool" termination mechanism for GRPO agent loops, allowing a designated tool to signal the end of an episode.

### 4. Key PR Progress
* **QLoRA Streamlining:** [PR #6157](https://github.com/huggingface/trl/pull/6157) introduces a top-level `quantization_config` argument to `SFTTrainer`, `DPOTrainer`, and `GRPOTrainer`, removing the need for hacky `model_init_kwargs` overrides. 
* **KTO & DPO Alignment:** A flurry of PRs ([#6178](https://github.com/huggingface/trl/pull/6178), [#6182](https://github.com/huggingface/trl/pull/6182), [#6183](https://github.com/huggingface/trl/pull/6183)) unify the data collators and align the experimental `KTOTrainer` signatures and docstrings perfectly with `DPOTrainer`.
* **Async GRPO Upgrades:** [PR #6092](https://github.com/huggingface/trl/pull/6092) introduces packing-aware dynamic batching to AsyncGRPO. [PR #6072](https://github.com/huggingface/trl/pull/6072) fixes state observation resetting for stochastic environments. [PR #6001](https://github.com/huggingface/trl/pull/6001) & [PR #6002](https://github.com/huggingface/trl/pull/6002) build out the foundation for per-example multi-environment GRPO training.
* **New Algorithms:** [PR #6123](https://github.com/huggingface/trl/pull/6123) implements Adaptive Beta-DPO (arXiv:2407.08639), allowing the β parameter to dynamically adapt based on batch-level response separation.

### 5. Why This Project Matters in Today's RL Landscape
With the industry-wide shift towards test-time compute, inference scaling, and tool-using LLM agents, standard supervised fine-tuning is no longer sufficient. TRL is actively bridging the gap between traditional RLHF and agentic workflows. Today's updates—specifically the focus on `vLLM` colocate setups, multi-environment async generation, and memory-efficient training (v1.7.0)—prove that TRL is adapting to meet the massive compute and architectural demands of modern post-training pipelines.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Daily Digest: OpenRLHF
**Date:** 2026-06-27

### 1. Today's Highlights
Activity in the OpenRLHF repository over the past 24 hours was focused and incremental, characterized by a single ongoing Pull Request update. There were no new issues reported, new releases published, or newly opened PRs, indicating a period of maintenance or integration for existing work.

### 2. Releases
*   **None** (Last 24 hours)

### 3. Important Issues
*   **None** (No issues created or updated in the last 24 hours)

### 4. Key PR Progress
*   **[PR #1246](https://github.com/OpenRLHF/OpenRLHF/pull/1246) Fix overlong penalty action token length** by `Jiang020609`
    *   **Status:** Open (Updated: 2026-06-26)
    *   **Summary:** This PR addresses [Issue #1243](https://github.com/OpenRLHF/OpenRLHF/issues/1243) to resolve miscalculations in overlong penalty logic. By utilizing `action_mask`, the fix ensures that non-trainable tokens (specifically tool/agent response tokens) are accurately excluded from the trainable response length accounting. 
    *   **Validation:** Includes standard validation via `pytest` and `pre_commit` for `length_penalty.py`.

### 5. Why This Project Matters in Today's RL Landscape
As large language models (LLMs) increasingly operate as autonomous agents and tool-users, accurately accounting for token usage during Reinforcement Learning from Human Feedback (RLHF) becomes critical. PR #1246 highlights a key technical nuance in modern RL architectures: separating environmental/intermediate tokens (tool responses) from the model's own actionable outputs. By refining `length_penalty` mechanisms, OpenRLHF ensures that agents are trained and penalized based strictly on their own generative length, preventing skewed reward signals. This makes OpenRLHF a highly relevant framework for developing precise, controllable, and cost-efficient tool-augmented LLMs in 2026.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL ecosystem daily digest for **verl** (github.com/volcengine/verl) on 2026-06-27.

### 1. Today's Highlights
verl is seeing intense community activity focused on scaling complex RL architectures, specifically addressing multi-node networking bugs, multimodal training expansions, and hardware adaptations (Ascend NPU/AMD GPUs). The ecosystem is actively pushing the boundaries of Group Relative Policy Optimization (GRPO) and Context Parallelism (CP) with Megatron and FSDP backends. 

### 2. Releases
* **No new releases** in the last 24 hours. The project remains on its development track (currently `0.8.0.dev0` as seen in recent bug reports).

### 3. Important Issues
**Scaling & Infrastructure Bottlenecks:**
* **Multi-node Rollout Failures:** Users report critical failures when scaling vLLM rollouts across multiple nodes, specifically on diverse hardware setups like the LUMI-G AMD MI250X cluster ([#6856](https://github.com/verl-project/verl/issues/6856)). 
* **Megatron MoE + CP Instability:** Training Mixture of Experts (MoE) models with Megatron under Context Parallelism (`CP > 1`) causes massive `grad_norm` explosions and performance degradation ([#6609](https://github.com/verl-project/verl/issues/6609)).
* **GPU Memory Spikes:** Intermittent, large memory spikes during GRPO training on H200 clusters remain an open investigation for users fine-tuning large models ([#456](https://github.com/verl-project/verl/issues/456)).

**Algorithm & Multi-turn Agent Challenges:**
* **Multi-turn Thinking Models:** A highly engaged discussion centers on how to manage chat templates in multi-turn GRPO without stripping prior-turn `<think>` blocks from models like Qwen3.5, a vital feature for agentic coding tasks ([#6854](https://github.com/verl-project/verl/issues/6854)).

### 4. Key PR Progress
**Algorithmic & Feature Expansions:**
* **Pluggable Load Balancing:** Introduction of a modular routing system for rollout requests, allowing custom strategies like `global_sticky_inflight` to optimize inference load ([#6712](https://github.com/verl-project/verl/pull/6712)).
* **Multimodal GRPO Training:** Added comprehensive preprocessing and GRPO training scripts for image and video reasoning datasets (`Open-R1` and `TinyLLaVA-Video-R1`) ([#6849](https://github.com/verl-project/verl/pull/6849)).
* **OPSD Support:** Initial groundwork laid for On-Policy Self-Distillation (OPSD), enabling a privileged-context teacher scoring system ([#6833](https://github.com/verl-project/verl/pull/6833)).

**Critical Bug Fixes & Optimizations:**
* **vLLM Multi-node Profiling:** Fixed a crashing bug where `start_profile/stop_profile` broadcast to non-master nodes during multi-node inference ([#6861](https://github.com/verl-project/verl/pull/6861)).
* **FSDP & Ulysses Sequence Parallelism:** Patched linear attention sequence boundary sharing for Qwen3.5 under FSDP remove-padding, ensuring correct state isolation ([#6660](https://github.com/verl-project/verl/pull/6660)). Fixed an FSDP crash when fusing log probs with padding removal disabled ([#6846](https://github.com/verl-project/verl/pull/6846)).
* **SGLang Seed Collisions:** Resolved deterministic sampling seed collisions in SGLang agent rollouts, ensuring different responses in the same GRPO batch remain distinct ([#6857](https://github.com/verl-project/verl/pull/6857)).

### 5. Why This Project Matters in Today's RL Landscape
As the industry shifts from static pre-training to dynamic, reasoning-heavy post-training (e.g., R1-style paradigms), **verl** has solidified its position as an elite, production-grade RL framework. Today's digest highlights exactly why verl is critical to the current open-source landscape:
1. **Hardware & Backend Fidelity:** It is aggressively bridging the gap between research algorithms and distributed engineering. The focus on FSDP Ulysses SP, Megatron CP, and cross-platform support (AMD MI250X, Ascend NPUs) shows verl is solving the exact infrastructure bottlenecks preventing enterprises from training 100B+ reasoning models efficiently.
2. **Complex Agentic RL:** By actively solving multi-turn conversational RL (managing `<think>` blocks across turns) and integrating self-distillation (OPSD), verl provides the open-source community with access to cutting-edge algorithms required to train next-generation autonomous agents.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

### 📊 RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-06-27
**Repository:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

#### 1. Today's Highlights
*   **Quiet Operations:** Zero new issues, zero closed issues, and zero new releases in the last 24 hours. The repository is currently in a steady development/maintenance phase.
*   **Algorithmic Expansion:** Activity is entirely driven by Pull Requests, specifically focusing on expanding the GRPO (Group Relative Policy Optimization) toolkit and branching strategies.

#### 2. Releases
*   **None.** No new tags or releases were published in the last 24 hours.

#### 3. Important Issues
*   **None.** There is no active issue traffic to report. The backlog remains clear, indicating stable upstream usage or that current development discussions are happening exclusively in PR threads. 

#### 4. Key PR Progress
Two open PRs were updated yesterday, highlighting active internal and external algorithmic contributions:
*   **[PR #1740](https://github.com/allenai/open-instruct/pull/1740) [OPEN] Add On-Policy Distillation (OPD) for OLMo-core GRPO**
    *   **Author:** farhatkevin
    *   **Summary:** Introduces a reusable teacher-scoring and distillation-loss layer to the OLMo-core GRPO stack. The student model retains on-policy exploration (sampling its own rollouts), while a frozen teacher model scores the exact prefixes visited by the student. The learner then regressively updates the student toward the teacher's output distribution.
    *   **Significance:** A strong technical blend of RL and imitation learning, crucial for efficient model alignment and capability transfer without losing the student's on-policy exploration benefits.
*   **[PR #1741](https://github.com/allenai/open-instruct/pull/1741) [OPEN] Checking main's conflicts with the Tmax branch**
    *   **Author:** shatu
    *   **Summary:** Infrastructure/branch management PR assessing merge conflicts between `main` and the `Tmax` development branch.
    *   **Significance:** Indicates ongoing background work to integrate specialized experimental branches (potentially related to max-token sequence handling or custom truncation algorithms) into the main codebase.

#### 5. Why This Project Matters in Today's RL Landscape
As the open-source community pivots heavily toward Reinforcement Learning from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) to train instruction-tuned models, **Open Instruct** serves as AI2's foundational, transparent framework for these post-training pipelines. 

The introduction of **On-Policy Distillation (OPD) in PR #1740** perfectly captures the current frontier of RL research: moving beyond pure reward-maximizing RL toward hybrid approaches. By combining the sample efficiency and safety of expert distillation with the exploratory boundary-pushing of on-policy RL, Open Instruct is enabling developers to train smaller, highly capable student models (like OLMo) using cutting-edge, compute-efficient alignment strategies.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 🤖 RL Ecosystem Daily Digest: CleanRL
**Date:** 2026-06-27
**Repository:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

### 1. Today's Highlights
Activity in the CleanRL repository over the last 24 hours has been minimal but highly targeted, featuring zero new pull requests, zero releases, and a single newly opened issue. The focus of the day centers entirely on identifying a critical transition-handling bug in Envpool integrations for PPO Atari benchmarks.

### 2. Releases
**None.** 
There have been no new tags or releases pushed in the last 24 hours. The project maintains its current stable version.

### 3. Important Issues
*   **#562 [OPEN] GAE Bug for Envpool: Dummy Step Leak** 
    *   **Author:** dillonmsandhu
    *   **Summary:** A newly identified bug affects all PPO Atari scripts utilizing `envpool`. The issue highlights `envpool`'s abnormal handling of terminal states. Specifically, it generates a "dummy" transition (`State: S_{T-1} -> ...`) immediately following a `done=True` signal. This artificial step links the terminal state directly to the start state, which erroneously corrupts the Generalized Advantage Estimation (GAE) calculations.
    *   **Link:** [vwxyznz/cleanrl Issue #562](https://github.com/vwxyzjn/cleanrl/issues/562)

### 4. Key PR Progress
**None.** 
There are currently 0 open pull requests with updates or reviews in the last 24 hours. The community has yet to submit a patch for the Envpool GAE bug mentioned above.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a vital infrastructure project in the reinforcement learning ecosystem due to its strict commitment to single-file implementations. In an era where RL research is frequently plagued by heavily abstracted, "black-box" libraries that obscure algorithmic mechanics, CleanRL provides high-quality, single-file PPO, DQN, and SAC implementations. 

Today's Issue #562 perfectly illustrates the project's value: because the code is flat and readable, researchers can easily inspect and trace low-level environment-level edge cases (like Envpool's dummy state transitions) directly to their impact on advantage estimation, an often-impossible task in deeply encapsulated frameworks.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-06-27

### 1. Today's Highlights
Gymnasium is undergoing a significant infrastructure and dependency modernization phase. The community is actively tackling Python 3.14 compatibility, migrating away from stale physics engines, and refining CI workflows to enforce strict dependency versioning. 

### 2. Releases
**No new releases** were published in the last 24 hours. The repository remains on its latest stable version while core development focuses on merging next-generation compatibility and physics engine PRs.

### 3. Important Issues
Developers and maintainers are focused on resolving CI friction and planning major architectural shifts:
*   **Physics Engine Migration:** Marked as `[help wanted]`, [Issue #1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597) proposes porting all Box2D environments to Pymunk. Box2D's Python bindings have been unmaintained for ~6 years, whereas Pymunk offers active maintenance and better documentation.
*   **`ty` Pre-commit Friction:** Two overlapping issues from user *Trenza1ore* highlight CI pain points with the new `ty` type checker. [Issue #1599](https://github.com/Farama-Foundation/Gymnasium/issues/1599) suggests ignoring impossible-to-resolve `ty` warnings to prevent blocking PRs, while [Issue #1600](https://github.com/Farama-Foundation/Gymnasium/issues/1600) reports a bug where `ty` fails to recognize optional modules (causing 100+ import warnings).
*   **CI NumPy Versioning Bug:** [Issue #1605](https://github.com/Farama-Foundation/Gymnasium/issues/1605) points out a flaw in the "Run PyTest" GitHub workflow where `ARG NUMPY_VERSION` was declared before the `FROM` Docker instruction. This resulted in the CI always installing the latest NumPy, completely bypassing intended tests for NumPy 1.x.
*   **Frozen Lake Customization:** [Issue #1364](https://github.com/Farama-Foundation/Gymnasium/issues/1364) (ongoing) requests the ability to pass custom reward structures into `FrozenLakeEnv` without modifying the underlying source code, a highly requested feature for researchers testing novel reward shaping.

### 4. Key PR Progress
Three pivotal pull requests were opened today, directly addressing the issues above:
*   **[PR #1603](https://github.com/Farama-Foundation/Gymnasium/pull/1603) by *RewardGuard*:** Drops support for NumPy 1.x entirely (`numpy >= 2.0.0`) and officially adds Python 3.14 support. This effectively mitigates the NumPy 1.x wheel absence for newer Python versions.
*   **[PR #1604](https://github.com/Farama-Foundation/Gymnasium/pull/1604) by *Trenza1ore*:** Fixes the `ty` pre-commit hook by switching to the official `astral-sh/ty-pre-commit` and setting `error-on-warning = false`. It also adds a `box2d-py` fallback for Python 3.14 compatibility.
*   **[PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602) by *Lonny154*:** The first tangible step toward the Box2D migration. This draft PR introduces a proof-of-concept `LunarLander` built entirely in Pymunk, featuring reproducible seeded terrain generation and constrained landing thrusters.

### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for single-agent Reinforcement Learning environments, Gymnasium’s stability is critical for thousands of downstream RL libraries (e.g., Stable-Baselines3, CleanRL). Today's digest reveals a healthy, proactive maintenance strategy: rather than waiting for legacy dependencies (like Box2D or NumPy 1.x) to break entirely, the maintainers are aggressively forcing compatibility with bleeding-edge tools (Python 3.14, Pymunk, NumPy 2.0+). The potential migration to Pymunk, in particular, ensures that classic continuous control RL environments remain accessible, performant, and bug-free for future iterations of RL research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL open-source ecosystem daily digest for PettingZoo.

# 🐾 PettingZoo RL Daily Digest — 2026-06-27

### 1. Today's Highlights
PettingZoo is actively iterating on codebase health and environment mechanics. Over the last 24 hours, the maintainers successfully merged community contributions to resolve two long-standing environment issues (dropping Python 3.9 and adding `.state()` support to Pursuit). Concurrently, the team is aggressively improving rendering efficiency (rlcard) and tightening static analysis (Ruff).

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **[#1358](https://github.com/Farama-Foundation/PettingZoo/issues/1358) [CLOSED] Remove Python 3.9 support:** Maintainers officially ended support for Python 3.9, aligning the library's dependency tree with modern Python features (now requiring `>= 3.10`). 
*   **[#1334](https://github.com/Farama-Foundation/PettingZoo/issues/1334) [CLOSED] [Proposal] Add .state() support for Pursuit environment:** A call for community contributions to expose the global state in the Pursuit environment has been successfully resolved, fixing a gap in Centralized Training for Multi-Agent RL.

### 4. Key PR Progress
*   **[#1375](https://github.com/Farama-Foundation/PettingZoo/pull/1375) [CLOSED] Remove Python 3.9 support:** Drops Python 3.9 from `pyproject.toml` and updates CI test matrices (`linux-test.yml`, `macos-test.yml`, etc.), explicitly shifting CI targets to Python 3.10+.
*   **[#1342](https://github.com/Farama-Foundation/PettingZoo/pull/1342) [CLOSED] Add state() support to the pursuit environment:** Implements the `state()` and `state_space` API for Pursuit by extracting the first three channels (wall map, pursuer counts) from the internal `model_state` grid.
*   **[#1372](https://github.com/Farama-Foundation/PettingZoo/pull/1372) [CLOSED] Scale down rlcard card images to their rendered resolution:** A massive performance and memory optimization for classic card games (`leduc_holdem`, `texas_holdem`, etc.). Replaces oversized 444×616 assets with properly scaled images that match the renderer's native resolution.
*   **[#1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376) [OPEN] Increase ruff strictness and apply mechanical autofixes:** Extends static analysis by enabling additional Ruff rulesets on top of the default pyflakes (`F`) and pycodestyle (`E4/E7/E9`) baselines.
*   **[#1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368) [OPEN] Fix Hanabi observation layout documentation:** Addresses documentation drift for Hanabi's complex observation space (#1301), notably leveraging LLM tools (Codex/Claude) for automated review of the layout updates.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the de facto standard API for Multi-Agent Reinforcement Learning (MARL) within the Farama Foundation ecosystem. Today's updates perfectly illustrate the project's dual focus: maintaining foundational API infrastructure and reducing friction for researchers. 

By systematically adding `.state()` returns to environments like Pursuit, PettingZoo ensures seamless compatibility with centralized critic algorithms (like MAPPO and QMIX) which require access to global states. Meanwhile, aggressively dropping legacy Python versions and increasing linter strictness reduces technical debt, allowing researchers to build robust, high-performance MARL baselines without wrestling with environment-level rendering bugs or memory bloat.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>