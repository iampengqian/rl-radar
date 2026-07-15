# RL Open Source Daily Digest 2026-07-16

> Generated: 2026-07-15 22:17 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-07-16 is sharply bifurcated between **single-agent/multi-agent environments** (Gymnasium, PettingZoo) and **large-scale LLM/MoE post-training frameworks** (verl, TRL, AReaL, slime, ROLL). While the former focuses on API stabilization and user experience, the latter is tackling severe hardware, memory, and distributed systems bottlenecks required to align next-generation architectures like Vision-Language Models (VLMs) and massive Mixture of Experts (MoE) models.

## Activity Comparison
*Note: Metrics reflect explicit counts provided in the daily digests. Projects not listed in the table (CleanRL, OpenRLHF, rl_games, Stable Baselines3, Tianshou, torchtune) had zero development activity in the last 24 hours.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 5 | 5 | 0 | **High** - Major infrastructure scaling (Hardware expansion, CP, sparse weight sync). |
| **TRL** | 7 | 32 | 0 | **High** - API maturation (Distillation, vLLM alignment, DeepSpeed hardening). |
| **PettingZoo** | 3 | 2 | 0 | **Medium** - Architectural refactoring (SuperSuit deprecation, deep-copy fixes). |
| **ROLL** | 6 | 1 | 0 | **Medium** - VLM/Megatron-core adapter bug squashing. |
| **AReaL** | 2 | 4 | 0 | **Medium** - Roadmap setting (FP8 Megatron, Diffusion RL PoC). |
| **ROCK** | 3 | 2 | 0 | **Medium** - CLI orchestration and distributed system stability. |
| **slime** | 1 | 2 | 0 | **Medium** - Deep troubleshooting of MoE delta weight sync NaN issues. |
| **Gymnasium** | 2 | 2 | 0 | **Low** - Routine maintenance and dependency debloating. |
| **Open Instruct** | 1 | 1 | 0 | **Low** - Hardware readiness (B300/CUDA 13.0 support). |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Knowledge Distillation (KD) as an RL Extension:** TRL (promoting `DistillationTrainer`) and AReaL (proposing cross-tokenizer distillation) are treating KD not just as a compression technique, but as an integral part of the RL/RLHF post-training pipeline.
*   **Expansion Beyond Text (VLMs & Diffusion):** Teams are actively extending RL to other modalities. verl and ROLL are ironing out Vision-Language Model (VLM) support, while AReaL is experimenting with RL post-training for Diffusion models.
*   **Verifiable & Grouped Rewards:** Both AReaL (grouped reward normalization) and Open Instruct/torchtune (MCP scientific evidence tools and REFUTE datasets) highlight a push toward highly granular, verifiable reward signals to improve reasoning and reduce hallucinations.

**Engineering & Infrastructure Signals**
*   **Ultra-Efficient Weight Synchronization:** To overcome communication bottlenecks in disaggregated RL, frameworks are moving away from full-weight broadcasts. verl introduced a sharded delta weight sync engine, while slime is actively debugging NCCL delta transfers for 100B+ MoE models.
*   **Next-Generation Hardware Porting:** There is a massive push to support emerging silicon. Open Instruct is upgrading to CUDA 13.0 for Blackwell Ultra (B300) GPUs, while verl is building compatibility for AMD ROCm and Huawei Ascend NPU.
*   **Megatron Integration & FP8 Adoption:** To fit massive models in memory, frameworks like AReaL, slime, and ROLL are tightly integrating with Megatron-core and adopting FP8 weight transfers to avoid costly BF16 dequantization.

## Differentiation Analysis
*   **The Infrastructure Orchestrators (verl, slime, AReaL, ROLL):** These frameworks are locked in a race to solve distributed systems bottlenecks (MoE memory management, FP8, tensor/expert parallelism). They differentiate by hardware support (e.g., verl's cross-hardware push) and architectural ergonomics (e.g., AReaL's expansion into Diffusion RL).
*   **The Inference-to-Algorithm Bridge (TRL):** TRL uniquely positions itself as the glue between high-throughput inference engines (vLLM) and accessible RL algorithms (GRPO, DPO), prioritizing seamless HuggingFace/Megatron integrations and consumer-grade API stability over bare-metal distributed engineering.
*   **The API & Environment Standardizers (Gymnasium, PettingZoo):** These Farama Foundation projects operate in a completely different lane. Their focus is on researcher ergonomics, API consistency, and visual reproducibility (e.g., phasing out SuperSuit, decoupling PyTorch from default installs) rather than LLM scaling laws.

## Community Momentum & Maturity
*   **High-Throughput Maturation:** The sheer volume of bug fixes in verl, TRL, and ROLL (addressing stale FSDP weights, DeepSpeed ZeRO-3 crashes, and VLM mRoPE misalignments) indicates that large-scale RL post-training is transitioning from a novel research paradigm to an industrialized, hardened pipeline—though it remains highly complex.
*   **Ecosystem Cleanup:** Both TRL (deprecating `DPPOTrainer`) and Gymnasium (removing `torch` from default extras) show mature stewardship, actively cutting technical debt and streamlining dependencies.
*   **Procedural & Agentic RL:** TRL making `train_dataset` optional in favor of `environment_factory`, and ROCK introducing unified job orchestration, reflects a mature shift toward true procedural, environment-driven RL loops over static offline datasets.

## Trend Signals
*   **Sparse Communication is Non-Negotiable:** The days of broadcasting full model weights between training and rollout engines are ending. Delta/sparse weight syncing (verl, slime) and FP8 direct transfers (AReaL) are becoming baseline requirements for trillion-parameter RL.
*   **The Rise of the MoE Bottleneck:** As massive models like Qwen3.5-122B become the default for agentic workflows, fixing numerical instabilities (e.g., NCCL delta NaNs) and routing architecture bugs during multi-turn RL are the new frontier of RL engineering.
*   **Hardware Fragmentation:** The CUDA monopoly is weakening. The simultaneous push for B300 support, AMD ROCm, and Huawei Ascend highlights a strategic industry mandate for hardware-agnostic RL frameworks.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Ecosystem Daily Digest for Alibaba's ROLL (RL Open League) on July 16, 2026.

### 1. Today's Highlights
* **Activity:** Moderate community engagement with 6 issues updated and 1 documentation PR closed in the last 24 hours. No new releases.
* **Focus Areas:** Community discussions are heavily centered around `mcore-adapter` integrations (specifically for Qwen models), VLM (Vision-Language Model) compatibility, and edge cases in distributed training configurations (DeepSpeed Zero3, single-node debugging).

### 2. Releases
* **None.** No new software releases or version tags were published in the last 24 hours.

### 3. Important Issues
Several ongoing issues saw updates today, highlighting active areas of development and troubleshooting:

* **VLM & Mcore-Adapter Compatibility:** Multiple issues indicate ongoing friction when adapting Vision-Language Models (like Qwen2-VL / Qwen2.5-VL) to Megatron-core.
  * **[Issue #418](https://github.com/alibaba/ROLL/issues/418):** Users are hitting a `ValueError` regarding missing `base_model` parameters in `Qwen2_5_VLForConditionalGeneration`.
  * **[Issue #419](https://github.com/alibaba/ROLL/issues/419):** Highlights a structural bug where `mcore-adapter` fails to extract LLM parameters from VLM `hfconfig` because they are nested under `text_config`.
* **Checkpointing in Distributed Setups:** 
  * **[Issue #411](https://github.com/alibaba/ROLL/issues/411):** An ongoing thread regarding checkpoint saving errors when executing LoRA SFT with the `mcore-adapter` on Qwen3.5-35B-A3B.
* **Training Mechanics & Optimizers:**
  * **[Issue #442](https://github.com/alibaba/ROLL/issues/442):** A highly technical bug report noting a mismatch between Learning Rate (LR) scheduler budgeting and consumption in the Megatron actor training path when dynamic batching is enabled.
* **Underlying Framework Integrations:** Older issues regarding DeepSpeed configurations remain active. **[Issue #150](https://github.com/alibaba/ROLL/issues/150)** continues to track a `deepspeed zero3 model_update error`, while **[Issue #316](https://github.com/alibaba/ROLL/issues/316)** deals with single-GPU reference pipeline errors (`AttributeError: 'NoneType'...`).

### 4. Key PR Progress
* **[PR #467](https://github.com/alibaba/ROLL/pull/467) [CLOSED]:** A documentation update integrating guidelines for **Trackio**. This indicates ROLL is actively improving its ecosystem support for third-party experiment tracking and telemetry tools. 

### 5. Why This Project Matters in Today's RL Landscape
As RLHF/RLVR (Reinforcement Learning from Human/AI Feedback) becomes the primary bottleneck for aligning frontier LLMs and VLMs, frameworks like ROLL are critical infrastructure. Today's issue tracker perfectly illustrates the current challenges in the open-source RL ecosystem: 
1. **Bridging Frameworks:** Seamlessly mapping HuggingFace weights to Megatron-core (`mcore-adapter`) for high-throughput RL training.
2. **Expanding Modalities:** The push to stabilize RL training pipelines for multi-modal (Vision-Language) models.
3. **Memory Optimization:** Navigating the complex matrix of distributed training strategies (DeepSpeed Zero-3, Tensor/Expert Parallelism) required to fit massive models (e.g., 35B parameters) within feasible compute bounds.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# 📊 RL Open-Source Ecosystem Daily Digest: 2026-07-16
**Repository:** alibaba/ROCK

### 1. Today's Highlights
The past 24 hours show active maintenance and CLI orchestration enhancements for ROCK. Key activities include closing critical security and stability issues related to encryption keys and indefinite blocking calls, alongside merging unified job execution orchestration for dataset tasks.

### 2. Releases
* **No new releases** in the last 24 hours. 
* *Note:* Preparations for **v1.10.0** are actively underway, focusing on versioned documentation updates. 

### 3. Important Issues
* **[CLOSED] #1249: Silent AES Key Generation Vulnerability**
  * **Focus:** Security & Data Consistency.
  * **Details:** Fixed a flaw where `proxy_service.aes_encrypt_key` was merged from Nacos before sandbox metadata creation. Previously, missing keys triggered silent random key generation by `AESEncryption`, risking inconsistent authorization data across restarts. Keys are now strictly loaded from YAML. ([alibaba/ROCK#1249](https://github.com/alibaba/ROCK/issues/1249))
* **[CLOSED] #1231: Indefinite Blocking in HTTP & Scheduler Workers**
  * **Focus:** Distributed System Stability.
  * **Details:** Resolved a critical deadlock risk where `RemoteSandboxRuntime._request` (`requests.post`) and `BaseTask.run_on_worker(ip)` lacked timeouts. Slow/hung peer nodes no longer stall the SDK or scheduler indefinitely. ([alibaba/ROCK#1231](https://github.com/alibaba/ROCK/issues/1231))
* **[OPEN] #1250: Add ROCK v1.10.0 Versioned Docs**
  * **Focus:** Documentation.
  * **Details:** Tracking issue for adding English and Simplified Chinese snapshots for the upcoming v1.10.0 release. ([alibaba/ROCK#1250](https://github.com/alibaba/ROCK/issues/1250))

### 4. Key PR Progress
* **[CLOSED] #1235: Unified Job Run Orchestration via CLI** by *berstpander*
  * **Focus:** RL Data Pipeline & Orchestration.
  * **Details:** Extended `rock job run` to act as a single entrypoint for single-task, multi-task, and full dataset execution (`--task`, `--tasks`, `--all`). Introduces concurrency control, JSONL progress event tracking, and run/job metadata writes at the CLI level. ([alibaba/ROCK#1235](https://github.com/alibaba/ROCK/pull/1235))
* **[OPEN] #1222: v1.10.0 Documentation Update** by *zhongwen666*
  * **Focus:** Docs site maintenance. 
  * **Details:** Implements the requirements from Issue #1250, adding API/SDK references, getting-started guides, and release notes for both EN/CN doc trees. ([alibaba/ROCK#1222](https://github.com/alibaba/ROCK/pull/1222))

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning workflows scale—particularly with multi-environment rollouts and massive dataset processing—infrastructure reliability is paramount. ROCK's recent updates directly address the hidden bottlenecks of distributed RL training: indefinite network deadlocks (#1231) and silent security failures (#1249). Furthermore, the introduction of unified dataset execution at the CLI level (#1235) highlights the ecosystem's shift toward treating RL data generation and task scheduling as first-class, easily orchestrated citizens, allowing researchers to focus purely on reward optimization rather than distributed plumbing.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 🧠 RL Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-07-16

### 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours was highly focused on backend infrastructure, specifically **MoE (Mixture of Experts) weight synchronization** and **Megatron distributed training stability**. While there are no new releases, maintainers are actively troubleshooting critical numerical stability issues with NCCL delta updates and iterating on CI pipelines.

### 2. Releases
* **No new releases** in the last 24 hours. 
* *Current State:* The project continues to operate on its latest stable version while core infrastructure PRs are vetted.

### 3. Important Issues
* **[OPEN] #2209: Delta weight sync (NCCL) produces NaN weights on Qwen3.5-122B MoE** 
  * **Author:** `leofan-lab`
  * **Summary:** A critical bug occurs when utilizing `--update-weight-mode delta --update-weight-transport nccl`. When training the massive Qwen3.5-122B-A10B (grouped MoE) model, the first delta weight application results in NaN/inf values within the rollout engine. This subsequently crashes the next rollout phase during sampling with a `"probability tensor contains inf/nan"` error. 
  * **Workaround:** Reverting to full-weight sync (`--update-weight-mode full`) restores stability, though at a high communication cost.
  * **🔗 Link:** [THUDM/slime Issue #2209](https://github.com/THUDM/slime/issues/2209)

### 4. Key PR Progress
Megatron-LM integration and CI stability remain the primary focus for core maintainer `zhuzilin`.
* **[CLOSED] #2208: [run-ci-megatron] Support reloading the default process group**
  * **Summary:** Closed today. This PR addressed the ability to reload the default process group in distributed setups, a necessary technical step for recovering from or iterating on distributed training states without restarting the entire cluster.
  * **🔗 Link:** [THUDM/slime PR #2208](https://github.com/THUDM/slime/pull/2208)
* **[OPEN] #2053: [run-ci-megatron] [DON'T MERGE] run CI**
  * **Summary:** An ongoing testing scaffold (updated yesterday) utilized by maintainers to manually trigger and validate the Megatron integration CI pipelines. 
  * **🔗 Link:** [THUDM/slime PR #2053](https://github.com/THUDM/slime/pull/2053)

### 5. Why This Project Matters in Today's RL Landscape
As RLHF/RLAIF scales to trillion-parameter and MoE architectures (like the 122B Qwen model mentioned in Issue #2209), the bottleneck has shifted from the RL algorithms themselves to **system-level distributed orchestration**. 

`slime` sits at the critical intersection of distributed training engines (like Megatron) and inference/rollout engines. The current issue with NCCL delta syncing highlights a broader industry challenge: efficiently transferring massive gradient/weight deltas across GPU clusters during RL loops without introducing floating-point instabilities (NaN/Inf). By tackling complex process group management and optimized weight transport, `slime` is solving the foundational infrastructure problems required to make large-scale post-training of frontier models viable.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

### 1. Today's Highlights
Activity in the last 24 hours focused on **scalability, fine-grained reward control, and cross-domain RL expansion**. The community saw active progress on high-performance distributed training via Megatron FP8 integration and grouped reward normalization. Notably, AReaL is pushing its boundaries beyond standard text models, with active PoC developments in diffusion model RL post-training and agentic session lifecycles.

### 2. Releases
*   **No new releases** in the last 24 hours. The project appears to be in an active development and PR consolidation phase.

### 3. Important Issues
*   **[Roadmap] 2026 H2 Milestones** — [Issue #1381](https://github.com/areal-project/AReaL/issues/1381)
    The core maintainers are actively discussing the H2 2026 roadmap. This issue acts as a central tracker for planned enhancements, guiding contributors to high-impact areas. 
*   **[Feature] Support cross-tokenizer on-policy distillation** — [Issue #1451](https://github.com/areal-project/AReaL/issues/1451)
    A community proposal to enable on-policy distillation between models with different tokenizers. Currently, AReaL assumes a shared tokenizer, and breaking this constraint would significantly advance heterogeneous model compression workflows.

### 4. Key PR Progress
*   **feat(rollout): add grouped reward normalization controls** — [PR #1516](https://github.com/areal-project/AReaL/pull/1516)
    Introduces crucial rollout-time logic: normalizing rewards across `n_samples` from the same prompt and dropping partial groups if rollouts fail, all while preserving original rewards for logging.
*   **Support Megatron FP8 weight transfer in AWEX colocate mode** — [PR #1406](https://github.com/areal-project/AReaL/pull/1406)
    A major infrastructure optimization. It enables FP8 direct transfer in AWEX colocate mode, preventing implicit BF16 dequantization and ensuring memory/communication efficiency for large-scale LLM training.
*   **feat(experimental): Diffusion RL post-training — Phase 1 PoC** — [PR #1410](https://github.com/areal-project/AReaL/pull/1410)
    An exciting experimental addition demonstrating RL post-training for diffusion models (SD1.5 + LoRA + REINFORCE) on a single GPU. This aligns with Issue #1381's Phase 1 roadmap.
*   **[codex] define exact Agent session lifecycle wire protocol** — [PR #1540](https://github.com/areal-project/AReaL/pull/1540) (Closed)
    Defined a V1 JSON boundary for an indivisible Agent session lifecycle, binding operations to a Worker-minted identity. Though closed, it highlights active backend protocol engineering for Agent RL.

### 5. Why This Project Matters in Today's RL Landscape
AReaL is establishing itself as a critical, high-performance backbone for the modern RL ecosystem. While many RL frameworks remain tightly coupled to standard LLM text-generation pipelines, AReaL is actively engineering for the future of artificial intelligence:
1.  **Hardware-Level Efficiency:** PRs like Megatron FP8 support in AWEX colocate mode show a deep commitment to solving the massive memory and communication bottlenecks of distributed RLHF/RLAIF.
2.  **Fine-Grained Algorithmic Control:** The addition of grouped reward normalization reflects the ecosystem's shift toward complex, multi-sample generation strategies (like those used in AlphaGo/PRM workflows) applied to LLMs.
3.  **Expansion Beyond Text:** The experimental work on Diffusion RL and robust Agentic session lifecycles proves that AReaL is positioning itself as a unified, multi-modal, and agentic RL platform for 2026 and beyond.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL open-source ecosystem digest for TRL based on the last 24 hours of activity.

### 1. Today's Highlights
*   **Major API Milestones:** TRL is heavily investing in **Knowledge Distillation (KD)**, promoting `DistillationTrainer` to the stable API and advancing `GOLDTrainer` with tool-calling and cross-tokenizer KD.
*   **vLLM Ecosystem Alignment:** TRL is aggressively updating its vLLM backend support, adding compatibility for vLLM 0.25.x ([PR #6406](https://github.com/huggingface/trl/pull/6406)) while sunsetting older versions ([PR #6404](https://github.com/huggingface/trl/pull/6404)).
*   **Quality Assurance Surge:** A massive engineering effort is underway to harden experimental trainers, specifically addressing `eval_dataset` initialization edge cases across the experimental family (GRPO, DPO, SFT, Online DPO).
*   **Activity Metrics:** 7 issues updated (5 closed) and 32 PRs updated (6 closed) in the last 24 hours.

### 2. Releases
*   **None** scheduled or released in this 24-hour window.

### 3. Important Issues
*   **VLM Colocate Misalignment ([Issue #6401](https://github.com/huggingface/trl/issues/6401)):** A critical bug report was opened regarding `GRPOTrainer` with vLLM colocate mode. When using Qwen3-VL, raw image handoff mis-aligns with vLLM preprocessing, leading to M-RoPE crashes or silent prompt corruption.
*   **New GRPO UP Loss Proposal ([Issue #6407](https://github.com/huggingface/trl/issues/6407)):** A feature request to implement the Unbounded Positive (UP) objective for GRPO from recent ByteDance Seed research, which routes tokens dynamically based on the sign of the advantage.

### 4. Key PR Progress
*   **Distillation & GOLD Enhancements:**
    *   [PR #6405](https://github.com/huggingface/trl/pull/6405) promotes `DistillationTrainer` from experimental to stable, framing it as GRPO with a swapped teacher-KL loss.
    *   [PR #6328](https://github.com/huggingface/trl/pull/6328) adds multi-turn tool-calling support for same-family distillation in `GOLDTrainer`.
    *   [PR #6126](https://github.com/huggingface/trl/pull/6126) integrates X-Token cross-tokenizer knowledge distillation into the GOLD trainer.
*   **RL Infrastructure & DeepSpeed Fixes:**
    *   [PR #6403](https://github.com/huggingface/trl/pull/6403) structurally fixes a long-standing crash where `precompute_ref_log_probs=True` failed under DeepSpeed in DPO and KTO trainers.
    *   [PR #6356](https://github.com/huggingface/trl/pull/6356) forces `use_reentrant=True` for PEFT + ZeRO-3 + gradient checkpointing across all core trainers (DPO, GRPO, RLOO, Reward, KTO) to prevent silent gradient failures.
*   **Agent & Environment Training:**
    *   [PR #6349](https://github.com/huggingface/trl/pull/6349) makes `train_dataset` optional when an `environment_factory` is provided, allowing true procedural/environment-driven RL loops without dummy datasets.
*   **Data Streaming:** [PR #6351](https://github.com/huggingface/trl/pull/6351) officially adds support for iterable (streaming) datasets in `GRPOTrainer` and `RLOOTrainer`.
*   **Deprecations:** [PR #6402](https://github.com/huggingface/trl/pull/6402) removes the experimental `DPPOTrainer` due to high maintenance costs and heavy method overriding.

### 5. Why This Project Matters in Today's RL Landscape
HuggingFace TRL is cementing its position not just as a preference-tuning library, but as the definitive bridge between **generative inference engines (vLLM)** and **complex RL algorithms**. Today's digest reveals a clear strategic shift toward **Knowledge Distillation** (KD), directly mirroring the training recipes of frontier models like DeepSeek-V4 and Qwen3. By stabilizing distillation trainers and natively supporting agentic environments (dropping the need for static dummy datasets), TRL is providing the open-source community with enterprise-grade tools to compress and align massive models efficiently. Furthermore, the rigorous backend updates for DeepSpeed and vLLM highlight that TRL is actively solving the distributed systems bottlenecks required to run GRPO and DPO at billion-parameter scales.

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

Here is the RL ecosystem daily digest for **verl** based on GitHub activities up to 2026-07-16.

### 1. Today's Highlights
*   **Hardware Ecosystem Expansion:** Major pushes for AMD ROCm and Huawei Ascend NPU support, highlighted by an RFC to bring up **DeepSeek V4 GRPO on AMD GPUs** ([PR #7050](https://github.com/volcengine/verl/pull/7050)).
*   **Async Rollout Optimizations:** Introduction of a sharded delta weight sync engine via NCCL, potentially reducing weight transfer payloads by ~97% for disaggregated async training ([PR #6974](https://github.com/volcengine/verl/pull/6974)).
*   **Infrastructure & Observability:** verl is officially integrating **RL-Insight** to provide unified Grafana dashboards for distributed RL state tracing and subsystem metrics ([PR #6680](https://github.com/volcengine/verl/pull/6680)).

### 2. Releases
*   **No new releases** in the last 24 hours. The project continues to track ongoing RFCs and backend integrations for the next iteration.

### 3. Important Issues
*   **Backend & Rollout Stability:** An older but highly active bug reports a `none_dealloc` fatal Python error during DAPO training, pointing to underlying memory management issues during distributed execution ([Issue #2833](https://github.com/volcengine/verl/issues/2833)).
*   **Model-Specific Quirks (Qwen3.5 & Qwen3):** Users report persistent shape mismatches when enabling Sequence Parallelism (SP) for Qwen-3.5 in agent-loop multi-turn RL ([Issue #6094](https://github.com/volcengine/verl/issues/6094)). Additionally, LoRA configurations with higher ranks (e.g., rank=64) on Qwen3.5 are causing vLLM to fail emitting EOS tokens ([Issue #6782](https://github.com/volcengine/verl/issues/6782)).
*   **Agentic Multi-Turn RL:** Developers continue to face environment stability challenges, notably CUDA illegal memory access errors and SGLang rollout timeouts when running tool-intensive, multi-turn RL setups ([Issue #2965](https://github.com/volcengine/verl/issues/2965), [Issue #3008](https://github.com/volcengine/verl/issues/3008)).

### 4. Key PR Progress
*   **[Performance] `delta_sharded` Checkpoint Engine:** [PR #6974](https://github.com/volcengine/verl/pull/6974) introduces a sparse weight-sync mechanism for disaggregated training. Instead of broadcasting full weights, it only syncs the ~1-3% of parameter bytes that changed between steps.
*   **[Architecture] Context Parallelism (CP):** [PR #5594](https://github.com/volcengine/verl/pull/5594) and [PR #6555](https://github.com/volcengine/verl/pull/6555) are actively bringing Context Parallelism (combined with TP/EP) to the Torchtitan engine and introducing dynamic CP for better handling of ultra-long context lengths.
*   **[Bug Fix] FSDP LoRA Stale Weights:** [PR #7014](https://github.com/volcengine/verl/pull/7014) (merged) fixes a critical bug where FSDP LoRA weights were synced from a lazy iterator *after* the merged LoRA context exited, causing outdated weights during rollout.
*   **[Determinism] Generative Reward Models:** [PR #7027](https://github.com/volcengine/verl/pull/7027) enforces deterministic reward paths for user-defined Generative RMs (GRM), crucial for reproducible VLM scoring and exact testing.
*   **[Resilience] NCCL Hang Mitigation:** [PR #7045](https://github.com/volcengine/verl/pull/7045) implements a "fail-fast" mechanism to break infinite silent hangs during the initial NCCL group initialization for checkpoint weight syncing.

### 5. Why This Project Matters in Today's RL Landscape
verl has solidified its position as a premier orchestration framework for large-scale, distributed Reinforcement Learning from Human Feedback (RLHF) and agentic RL. Today's update highlights exactly what the RL community needs most: **cross-hardware portability** (AMD/ROCm and Huawei Ascend), **frictionless long-context training** (via Context and Sequence Parallelism), and **async compute optimization** (sparse weight syncing and disaggregated rollouts). By actively solving infrastructure bottlenecks—such as multi-turn tool execution errors, memory management for MoE models like DeepSeek V4, and stale weight broadcasting—verl is dramatically lowering the barrier for teams training complex, multi-modal reasoning agents at scale.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

**RL Ecosystem Daily Digest: torchtune**
**Date:** 2026-07-16

### 1. Today's Highlights
Activity in the `torchtune` repository over the past 24 hours has been minimal, with zero new merges, releases, or active pull requests. The sole update involves a recently opened issue discussing a new evaluation paradigm for science-oriented model tuning. 

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **#2972 [OPEN] Eval resource: REFUTE for science-oriented tuning checks**
    *   **Author:** connerlambden
    *   **Summary:** A community member introduced "REFUTE," a new evaluation dataset (hosted on Hugging Face) paired with an evaluation framework (`refute-inspect`). The resource is designed specifically to benchmark and verify the scientific accuracy of fine-tuned models. The author notes the issue can be "closed freely," suggesting it is primarily an informational resource for the community rather than an active development task.
    *   **Link:** [meta-pytorch/torchtune Issue #2972](https://github.com/meta-pytorch/torchtune/issues/2972)

### 4. Key PR Progress
*   **No active pull requests.** There are currently 0 PRs awaiting review, update, or merging in the repository. Development throughput appears to be on a temporary pause.

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning from Human Feedback (RLHF) and AI alignment landscape, the bottleneck is increasingly shifting from base model pre-training to highly efficient, verifiable fine-tuning. `torchtune` is a critical piece of open-source infrastructure because it provides researchers with flexible, native PyTorch recipes for LLM fine-tuning. 

Today's highlighted issue regarding the **REFUTE** dataset underscores a vital trend in the RL ecosystem: **verifiable reward signals**. As models are tuned using RL techniques (like PPO or Direct Preference Optimization), high-quality, domain-specific evaluation datasets are required to act as reward models or benchmark environments. Tools that verify scientific accuracy are essential for preventing hallucinations and ensuring that RL-tuned models remain grounded in factual data.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the daily reinforcement learning ecosystem digest for Open Instruct.

### 1. Today's Highlights
*   **Next-Gen Hardware Support:** The project is actively upgrading its RL training stack to support next-generation Blackwell Ultra (B300) GPUs via a transition to CUDA 13.0.
*   **Agentic Tooling Expansion:** Community interest is growing around integrating structured scientific evidence retrieval (BGPT MCP) for tool-calling, instruction-tuned models.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **#1757 [OPEN] Science tool for agents: BGPT MCP evidence search** | *Author: connerlambden*
    *   **Summary:** A proposal/request to integrate the **BGPT** MCP (Model Context Protocol) and REST API. This tool is designed to return structured experimental evidence (methods, results, limitations, and DOI) for instruction-tuned models utilizing tool-calling capabilities. 
    *   **Link:** [allenai/open-instruct Issue #1757](https://github.com/allenai/open-instruct/issues/1757)

### 4. Key PR Progress
*   **#1758 [OPEN] Upgrade to CUDA 13.0 for B300 support on ai2/holmes** | *Author: mnoukhov*
    *   **Summary:** A critical infrastructure update that makes GRPO (`open_instruct/grpo.py`) and the broader training stack compatible with the new B300 (Blackwell Ultra) GPUs on the `ai2/holmes` cluster. The PR formally transitions the Linux stack from CUDA 12.8 to CUDA 13.0, updating the base Docker images accordingly.
    *   **Link:** [allenai/open-instruct PR #1758](https://github.com/allenai/open-instruct/pull/1758)

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—increasingly dominated by efficient post-training algorithms like GRPO (Group Relative Policy Optimization)—hardware readiness and tool-augmented agents dictate the pace of innovation. 

PR #1758 demonstrates Open Instruct's commitment to maintaining cutting-edge infrastructure. By immediately adapting the GRPO training stack for Blackwell Ultra (B300) architectures via CUDA 13.0, the project ensures that researchers can leverage next-generation cluster compute without pipeline interruptions. Meanwhile, Issue #1757 highlights the ecosystem's natural progression toward complex, agentic workflows, where instruction-tuned models require robust MCP integrations to interact with structured, real-world data (like peer-reviewed scientific evidence). Open Instruct continues to provide a vital, transparent bridge between low-level GPU orchestration and high-level agentic RL behavior.

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

# RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-16  
**Repository:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours was focused on environment maintenance and dependency optimization. The community identified and quickly patched a UI rendering bug in `CarRacing v3`, while ongoing discussions highlight a strong demand for lightweight, CPU-friendly installations. 

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Important Issues
*   🔴 **[Bug] CarRacing v3 HUD Score Overflow** ([Issue #1638](https://github.com/Farama-Foundation/Gymnasium/issues/1638))  
    *Author: @paradite*  
    **Summary:** The bottom-left HUD score in `CarRacing v3` is overflowing the screen frame. The bug originates from a Python string formatting issue where `f"{self.reward:04}"` sets a minimum width but fails to limit decimal precision. This causes long floating-point numbers (e.g., `23.590909090909083`) to clip off-screen. 
*   ⚪ **[Spam/Off-topic] Scientific Claim Dataset** ([Issue #1637](https://github.com/Farama-Foundation/Gymnasium/issues/1637))  
    *Author: @connerlambden*  
    **Summary:** An off-topic issue sharing an LLM evaluation dataset. The author acknowledged it was not related to RL and requested it be closed.

### 4. Key PR Progress
*   🛠️ **Fix CarRacing HUD score overflow** ([PR #1639](https://github.com/Farama-Foundation/Gymnasium/pull/1639))  
    *Author: @Fstarnb*  
    **Summary:** A rapid community response to Issue #1638. The fix updates the string formatter to `f"{self.reward:04.0f}"`, correctly rendering the score as a fixed-width integer and matching the expected demo output.
*   ⚙️ **Remove `torch` from `[all]` extra** ([PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617))  
    *Author: @Functionhx*  
    **Summary:** Updated today, this PR tackles environment bloat by removing PyTorch from the default `[all]` installation extras. Because PyTorch's PyPI default pulls massive `nvidia-cuda-*` packages, CPU-only users face heavy, unnecessary downloads. JAX remains in `[all]` as its default is CPU-only. Users requiring PyTorch will now explicitly use `gymnasium[all,torch]`.

### 5. Why This Project Matters in Today's RL Landscape
Even on quiet days without major releases, Gymnasium remains the de facto standard API for single-agent reinforcement learning environments. Today's PR activity perfectly illustrates the project's maturity: maintainers and contributors are shifting from building core features to refining the developer experience (DevEx). 

The PR to decouple PyTorch from the standard `[all]` install ([PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617)) is highly indicative of modern RL engineering trends. As the ecosystem matures, managing complex dependencies (like CUDA toolkits vs. CPU-only deployments) and ensuring lightweight, modular installations is critical for scaling RL research and production pipelines.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the daily digest for the PettingZoo ecosystem based on the provided GitHub data.

### 1. Today's Highlights
* **Rendering Overhaul:** Significant progress on visual documentation, specifically merging pixel-art rendering for Hanabi ([PR #1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380)).
* **Bounty Closed:** The $200 bounty for a functional KAZ (Knights and Zombies) policy has been awarded/closed ([Issue #1381](https://github.com/Farama-Foundation/PettingZoo/issues/1381)).
* **Core Architecture Refactoring:** Maintainers are pushing to migrate environment wrappers natively into PettingZoo, phasing out the `SuperSuit` dependency ([Issue #1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)).

### 2. Releases
* **None.** No new releases or version bumps were published in the last 24 hours. The project remains in its current stable development cycle. 

### 3. Important Issues
* **[enhancement, help wanted] Migration to `pettingzoo.wrappers` ([#1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)):** A major architectural shift. Maintainers want to deprecate `SuperSuit` and port wrappers directly into `pettingzoo.wrappers` to align with the `gymnasium.wrappers` API. The community is invited to submit port PRs.
* **[bug] State loss on copy/pickle operations ([#1307](https://github.com/Farama-Foundation/PettingZoo/issues/1307)):** A critical bug for algorithm developers. `copy.deepcopy(env)` and pickling reset critical state variables (board, legal moves). This creates roadblocks for checkpointing and Monte Carlo Tree Search (MCTS) implementations.
* **[enhancement] Flexibility with `_was_dead_step` ([#1262](https://github.com/Farama-Foundation/PettingZoo/issues/1262)):** Proposes modifications to how `AECEnv` handles agent dropout, aiming for more flexible control over inactive agents. 

### 4. Key PR Progress
* **Add pygame rendering to Hanabi ([#1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380)):** Submitted by `RewardGuard` to close [Issue #1379](https://github.com/Farama-Foundation/PettingZoo/issues/1379). This transitions Hanabi from basic `ansi`/text output to full graphical rendering using a newly commissioned pixel-art card set. It achieves this by parsing the OpenSpiel state string.
* **Add configurable center obstacle size to Pursuit ([#1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393)):** Introduces a `center_box_size=(width, height)` argument to the Pursuit environment. This includes map validation and allows users to easily toggle obstacle sizes or create obstacle-free maps.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo continues to act as the industry standard API for Multi-Agent Reinforcement Learning (MARL), serving as the multi-agent counterpart to Gymnasium. However, this digest highlights a clear transitional phase for the library. By overhauling visual renderings (moving away from raw text outputs), incentivizing baseline policy generation for complex environments like KAZ, and actively refactoring to ingest `SuperSuit` capabilities natively, the Farama Foundation is doubling down on API standardization, visual reproducibility, and researcher ergonomics. Addressing structural bugs like environment deep-copying (#1307) is crucial for the next generation of MARL algorithms, particularly those relying on complex state-search and environment parallelization.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>