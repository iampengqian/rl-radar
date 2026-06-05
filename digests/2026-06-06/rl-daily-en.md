# RL Open Source Daily Digest 2026-06-06

> Generated: 2026-06-05 22:22 UTC | Projects covered: 15

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
The reinforcement learning open-source landscape on 2026-06-06 is defined by intense engineering velocity concentrated in a few massive distributed post-training frameworks, while foundational RL libraries experience a period of dormancy. 

The active projects—**verl, TRL, AReaL, slime, ROLL**, and **ROCK**—are squarely focused on solving the compute and memory bottlenecks of aligning massive Mixture-of-Experts (MoE) and hybrid-attention models. The dominant themes of the day are hardware heterogeneity (expanding AMD ROCm and Huawei Ascend NPU support), infrastructure optimization (building asynchronous pipelines and sparse weight syncing), and stabilizing complex distributed training setups for next-generation architectures like Qwen3.5 and Gemma-4. 

Meanwhile, standard algorithmic libraries (CleanRL, rl_games, OpenRLHF) are in maintenance phases, focused on dependency modernization and CI stability.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 14 | 47 | 0 | Heavy scaling focus (MoE, CP>1, ROCm, Async infra) |
| **TRL** | ~2 | 11 | 0 | Async GRPO, VLM alignment, algorithmic innovation |
| **AReaL** | 2 | 12 | 0 | Qwen3.5 support, PEFT/LoRA lifecycle, inference backends |
| **slime** | 2 | 6 | 0 | Memory optimization, FLOPs-aware batching |
| **ROCK** | 2 | 1 | 0 | K8s cluster reliability, sandbox orchestration |
| **ROLL** | 0 | 2 | 0 | Ascend NPU CI/CD and Megatron integration |
| **open-instruct** | 0 | 2 | 0 | Hybrid model architecture (GDN) readiness |
| **OpenRLHF** | 0 | 1 | 0 | Algorithmic innovation (REBEL loss) |
| **CleanRL** | 0 | 1 | 0 | JAX CI/dependency maintenance |
| **rl_games** | 0 | 1 | 0 | Apple MPS support, NumPy 2.x migration |
| *Others (Gymnasium, PettingZoo, SB3, Tianshou, torchtune)* | *0* | *0* | *0* | *Dormant / No activity* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Algorithmic Efficiency in Alignment:** A clear push toward sample-efficient, offline-adjacent algorithms is emerging. TRL introduced A\*-PO (Optimal Advantage Regression), OpenRLHF proposed a REBEL-inspired reward-gap regression loss, and AllenAI's `open-instruct` is optimizing DPO workflows.
*   **Transition to Hybrid Architectures:** Research is moving past standard dense Transformers. Frameworks are rushing to support models featuring Gated Delta Net (GDN) and hybrid-attention layers (Qwen3.5, OLMo3).

**Engineering & Infrastructure Signals**
*   **Mitigating the Weight-Sync Bottleneck:** Asynchronous RL (e.g., Async GRPO, PPO) is heavily constrained by inference/training weight synchronization. The ecosystem is attacking this via sparse weight patching over HF buckets (TRL), CUDA-IPC FP8 transfers (AReaL), Ray Direct Transport (AReaL), and custom `TransferQueues` (verl).
*   **Surviving the Memory Wall:** With 64K+ context lengths and massive MoEs, peak memory is a critical blocker. Frameworks are responding with FLOPs-aware dynamic batching (slime), chunked gather-logsumexp operations to prevent OOM (verl), and fused autograd functions (slime).
*   **Hardware Fragmentation:** To escape CUDA constraints, major frameworks are aggressively building CI pipelines and runtime fixes for AMD MI355X (ROCm) and Huawei Ascend NPUs (MindSpeed).
*   **Expanding Multimodal RL:** Post-training is expanding beyond text. TRL is standardizing Vision-Language Model (VLM) support for DPO/KTO, verl is debugging multimodal data handlers, and slime is exploring Text-to-Speech (TTS) integrations.

## Differentiation Analysis

*   **verl vs. TRL vs. AReaL (The Distributed Orchestration Tier):** These three are solving the same distributed post-training problems but with different architectural flavors. **verl** is acting as the de facto layer for Megatron-LM scaling and extreme context-parallels. **TRL** remains tightly integrated with the Hugging Face ecosystem, prioritizing accessible LoRA, VLMs, and rapid algorithm integration (A\*-PO). **AReaL** is distinguishing itself via deep inference-engine decoupling (vLLM vs. SGLang) and cutting-edge PEFT/LoRA lifecycle management for RL.
*   **slime vs. open-instruct (The Compute-Efficiency Tier):** These projects are targeting raw MFU (Model FLOPs Utilization). **slime** is hyper-focused on memory-saving autograd hacks and dynamic batching, while **open-instruct** acts as the bridge for experimental Flash Linear Attention (FLA) and hybrid model configurations into standard DPO.
*   **ROCK vs. ROLL (The Enterprise Orchestration Tier):** Alibaba’s twins focus on infrastructure at scale. **ROCK** differentiates on cluster reliability and Kubernetes sandbox management, whereas **ROLL** focuses on the highly specialized task of porting distributed RL workloads to alternative hardware (Ascend NPUs).
*   **CleanRL vs. OpenRLHF (The Accessible RL Tier):** **OpenRLHF** provides production-ready, parameterized alignment pipelines (PPO/DPO), whereas **CleanRL** focuses solely on readable, single-file baselines.

## Community Momentum & Maturity

*   **Maturation of the Distributed Stack:** Projects like verl, TRL, and AReaL show signs of maturing beyond rapid prototyping. This is evidenced by the closing of long-standing governance PRs (AReaL), implementing fault-tolerance for silent failures (verl), and fixing checkpoint resumability (TRL).
*   **Enterprise Overhead:** ROCK and ROLL highlight the "enterprise maturity" phase of RL, where engineering effort is spent not on new math, but on K8s CRD exception handling, database fallbacks, and hardware-specific CI pipelines.
*   **Maintenance Mode for Classic Algorithms:** Foundational libraries like CleanRL and rl_games are stable, requiring only dependency bumps (JAX, NumPy 2.x, Apple MPS) to remain viable for researchers.

## Trend Signals

*   **Hybrid Attention is the New MoE:** Just as frameworks finished stabilizing Mixture-of-Experts (MoE), the sudden requirement for Gated Delta Net (GDN) and hybrid attention support (driven by Qwen3.5 and OLMo3) is creating a new wave of urgent refactors across the ecosystem.
*   **The Rise of Asynchronous RL:** The transition from synchronous training loops to fully asynchronous pipelines (using Ray, custom queues, and sparse updates) is accelerating, signaling that future scaling gains in RLHF will come from systems engineering rather than purely algorithmic tweaks.
*   **Post-Training goes Multi-Modal:** Text-only post-training is becoming commoditized; the bleeding edge is rapidly shifting toward standardizing RLHF/VLM alignment (DPO/KTO for Vision) and exploring audio/TTS reasoning.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for June 6, 2026.

### 1. Today's Highlights
ROLL (Alibaba’s Reinforcement Learning Open-source Library) is experiencing a significant push towards Ascend NPU ecosystem integration. Activity over the last 24 hours has been exclusively focused on expanding hardware compatibility and Continuous Integration (CI) pipelines. Two substantial feature PRs are currently active, aiming to port ROLL’s execution, testing, and advanced training paradigms (like Megatron scaling and DPO) to Huawei Ascend architecture. 

### 2. Releases
*   **No new releases** were published in the last 24 hours. The project's latest stable release remains unchanged.

### 3. Important Issues
*   **No new issues or updates** were reported in the last 24 hours. The lack of bug reports suggests that recent development efforts are currently focused on feature expansion and infrastructure rather than patching existing code.

### 4. Key PR Progress
Both open PRs reflect a strategic, ongoing effort to decouple ROLL from pure GPU reliance by building out the Ascend NPU toolchain:

*   **[PR #454](https://github.com/alibaba/ROLL/pull/454) `feat: add npu ci yaml and fix tests`** (Authored by `UsernameFull`)
    *   *Status:* Open (Updated 2026-06-05)
    *   *Summary:* Establishes the foundational CI pipeline for Ascend NPU execution. It introduces a new GitHub Actions workflow (`ci-npu-test.yml`) for CPU unit tests and NPU runtime execution, alongside necessary test compatibility fixes.
*   **[PR #456](https://github.com/alibaba/ROLL/pull/456) `[feat] Support ascend mindspeed&megatron and add CI tests`** (Authored by `shun001`)
    *   *Status:* Open (Updated 2026-06-05)
    *   *Summary:* A heavy-duty feature PR that builds on prior NPU work (incorporating elements of PR #380). It integrates MindSpeed-based NPU initialization, fixes platform detection, updates optimizer/offload compatibility for Megatron, and handles NPU-specific attention masks. Notably, it also includes a Qwen3 DPO Megatron example configuration.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, the primary bottleneck for scaling RL from RLHF (Reinforcement Learning from Human Feedback) to advanced, reasoning-heavy LLM post-training is compute availability. 

ROLL is designed as a high-throughput, highly scalable RL training framework. Today's focus on integrating **MindSpeed and Megatron for Ascend NPUs** signals a critical industry trend: to train massive models using RL algorithms (like DPO), teams must distribute workloads across heterogeneous hardware environments. By actively building NPU CI pipelines and optimizer offload compatibility, ROLL is positioning itself as a hardware-agnostic, enterprise-grade orchestration layer crucial for next-generation LLM alignment.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for 2026-06-06, based on the alibaba/ROCK repository activity.

### 1. Today's Highlights
Activity on the ROCK framework over the last 24 hours was highly focused on infrastructure reliability and cluster stability. The primary focus was on hardening the Kubernetes sandbox orchestration layer, specifically addressing how the system handles orphaned Custom Resource Definitions (CRDs) and cleaning up residual logging directories. 

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
Two bug reports were updated, both submitted by contributor `zhangjaycee`, highlighting edge cases in resource management and cleanup:
*   **[CLOSED] Unhandled K8s 404 Errors ([#1067](https://github.com/alibaba/ROCK/issues/1067)):** Previously, if a sandbox existed in the database/Redis but its corresponding K8s BatchSandbox CRD had been manually deleted, `K8sOperator.get_status()` would leak a raw `ApiException(404)` to the client rather than handling it gracefully.
*   **[OPEN] Ineffective Directory Exclusion ([#1069](https://github.com/alibaba/ROCK/issues/1069)):** A bug was identified in `FileCleanupTask._build_cleanup_command()`. The script currently uses `find` with both `-depth` and `-prune` to clean up empty directories. Because `-prune` becomes a no-op when `-depth` is specified in GNU `find`, the `exclude_dirs` parameter is effectively ignored, risking the accidental deletion of critical empty directories (like `docker`).

### 4. Key PR Progress
*   **[CLOSED] Fix K8s CRD exception handling ([#1068](https://github.com/alibaba/ROCK/pull/1068)):** This merged PR successfully resolves Issue #1067. The `K8sOperator.get_status()` method now properly catches the K8s API 404 exception and returns `None`. This aligns its behavior with the `RayOperator` and allows `SandboxManager` to safely fall back to the database state, significantly improving fault tolerance.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning workloads scale from single-node experimentation to massive distributed training and inference, compute orchestration becomes a critical bottleneck. Projects like Alibaba's ROCK are essential because they bridge the gap between RL algorithms and underlying infrastructure (like Kubernetes and Ray). 

Today's updates perfectly illustrate the maturity required in modern RL tooling: shifting focus from basic algorithmic execution to robust cluster management. By fixing CRD state-desync issues (PR #1068) and ensuring safe file system cleanups (Issue #1069), ROCK prevents silent infrastructure failures and zombie processes. This allows RL engineers to run thousands of parallel evaluation sandboxes without needing to manually babysit K8s namespaces or worry about cluster degradation.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily digest for the reinforcement learning ecosystem, focusing on the `THUDM/slime` repository.

### 1. Today's Highlights
Activity on `THUDM/slime` remains highly focused on infrastructure scaling and compute efficiency. Today's updates highlight active development in FLOPs-aware dynamic batching, aggressive peak memory optimizations for PPO utilities, and expanding hardware/model support (NVFP4, Gemma4). 

### 2. Releases
No new releases were published on 2026-06-06.

### 3. Important Issues
*   **SGLang-Omni Integration Inquiry ([#2023](https://github.com/THUDM/slime/issues/2023)):** A user inquired about the future roadmap for integrating `sglang-omni` with Slime for Text-to-Speech (TTS) model training. This indicates growing community interest in extending Slime's RL capabilities beyond standard text modalities.
*   **Qwen3 Tool Calling Parser Failure ([#2019](https://github.com/THUDM/slime/issues/2019)):** Users are currently experiencing an `Unsupported tool_call_parser: qwen3` error during generation. This suggests a compatibility gap in the latest Qwen3 utility functions that needs patching for RL tool-use/agentic training.

### 4. Key PR Progress
*   **FLOPs-Balanced Micro-Batching ([#2017](https://github.com/THUDM/slime/pull/2017)):** Introduces `--balance-by-flops` for micro-batch partitioning. Instead of standard token-count balancing, it estimates compute using `coeff * L + L²` per sample to accurately account for the quadratic cost of attention mechanisms during dynamic batching.
*   **PPO Memory Optimization ([#2011](https://github.com/THUDM/slime/pull/2011)):** Fuses log-prob and entropy computation into a single autograd Function. This avoids keeping two clones of logits in memory and allows the backward pass to reuse Megatron's activation checkpoints, significantly reducing peak memory usage.
*   **Infrastructure & Logging Updates:** 
    *   PR [#2024](https://github.com/THUDM/slime/pull/2024) fixes a silent hanging issue by adding progress logging while waiting for Ray placement groups to resolve.
    *   PR [#2005](https://github.com/THUDM/slime/pull/2005) continues active refactoring of the trajectory manager.
    *   PR [#2021](https://github.com/THUDM/slime/pull/2021) (Closed/Merged) adds support for `update_from_disk`.
*   **Model & Hardware Expansion:** Ongoing work in PR [#1505](https://github.com/THUDM/slime/pull/1505) is pushing to support the NVFP4 quantization format for the Slime RL process, while PR [#1855](https://github.com/THUDM/slime/pull/1855) finalizes support for Gemma4 (26B-A4B MoE and 31B dense models).

### 5. Why This Project Matters in Today's RL Landscape
As post-training and Reinforcement Learning from Human Feedback (RLHF) become the dominant compute bottlenecks for frontier LLMs, frameworks like `slime` are forced to optimize heavily for distributed training constraints. Today's PR activity perfectly encapsulates the current needs of the open-source RL landscape: 
1.  **Overcoming the Compute Wall:** Fusing operations to save peak memory ([#2011](https://github.com/THUDM/slime/pull/2011)) and utilizing FLOPs-aware batch partitioning ([#2017](https://github.com/THUDM/slime/pull/2017)) are critical for scaling PPO without running into Out-Of-Memory (OOM) errors. 
2.  **Hardware Adaptation:** Integrating NVFP4 support ensures that RL post-training can leverage the latest low-precision formats to maintain throughput. 
3.  **Diverse Architecture Support:** Adding native handling for Mixture-of-Experts (MoE) like Gemma 26B-A4B validates the framework's readiness for modern, non-dense transformer architectures.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-06-06

## 1. Today's Highlights
Activity on **AReaL** (`github.com/inclusionAI/AReaL`) remains high with 12 pull requests updated in the last 24 hours. The focus is squarely on **next-generation model support (Qwen3.5, LoRA, FP8)**, **inference backend diversity (vLLM, SGLang)**, and **experimental distributed systems (Ray RDT, Archon DTA)**. Two long-standing community governance PRs were closed, signaling a maturing project structure.

## 2. Releases
**No new releases** were cut in the last 24 hours. 

## 3. Important Issues
Two open issues saw updates, highlighting edge cases in distributed training and precision handling:
*   **#1298 [BUG]:** `clear_batches()` crashes on non-data-parallel head ranks when Tensor/Pipeline Parallelism > 1. This is a known regression from PR #1282 affecting multi-node setups. ([Issue #1298](https://github.com/inclusionAI/AReaL/issues/1298))
*   **#1359 [Feature]:** Request for FP8 weight transfer support in the `awex` colocated CUDA-IPC path. Currently, `fp8_direct_convert` is hardcoded to `False` in the Megatron adapter, presenting a bottleneck for high-throughput FP8 training. ([Issue #1359](https://github.com/inclusionAI/AReaL/issues/1359))

## 4. Key PR Progress
Significant engineering velocity is visible across inference, training, and infra components:

**Architecture & Model Support:**
*   **#1384:** Adds critical Megatron-bridge support for **Qwen3.5** (dense and MoE), specifically adapting to its new Gated Delta Net (GDN) hybrid-attention architecture. ([PR #1384](https://github.com/inclusionAI/AReaL/pull/1384))
*   **#1391:** Consolidates Dynamic Token Alignment (DTA) into the experimental Archon path, including trie construction and microbatch fixes. ([PR #1391](https://github.com/inclusionAI/AReaL/pull/1391))

**Inference Backends & Orchestration:**
*   **#1389:** Introduces **R3 (Rollout Routing Replay)** support for the **vLLM** backend (requires vLLM >= 0.22.0). ([PR #1389](https://github.com/inclusionAI/AReaL/pull/1389))
*   **#1387 [CLOSED]:** Fixed a critical bug where v2 inference service's data proxy passed RTensors instead of localized trajectories, crashing the controller. ([PR #1387](https://github.com/inclusionAI/AReaL/pull/1387))
*   **#1360:** Hugging Face's `trackio` is extended for rollout trace logging, boosting experiment observability. ([PR #1360](https://github.com/inclusionAI/AReaL/pull/1360))

**RL Algorithms & Training Loop Fixes:**
*   **#1392:** Fixes a silent bug in online GRPO where `group_size > 1` caused unrelated conversations to merge, breaking advantage normalization. ([PR #1392](https://github.com/inclusionAI/AReaL/pull/1392))
*   **#1233 & #1385:** Major pushes to stabilize **LoRA** for RL. PR #1233 implements disk-based incremental LoRA sync for FSDP/SGLang, while PR #1385 fixes adapter unload lifecycles for co-resident LoRA RL training. ([PR #1233](https://github.com/inclusionAI/AReaL/pull/1233), [PR #1385](https://github.com/inclusionAI/AReaL/pull/1385))
*   **#1305:** Integration of **Ray RDT (Ray Direct Transport)** for faster, RPC-based weight syncing. ([PR #1305](https://github.com/inclusionAI/AReaL/pull/1305))

**Project Management:**
*   **#1390 & #1386 [CLOSED]:** Updated the 2026 Roadmap (Q2/H2) and migrated community governance files to a dedicated external repository. ([PR #1390](https://github.com/inclusionAI/AReaL/pull/1390), [PR #1386](https://github.com/inclusionAI/AReaL/pull/1386))

## 5. Why This Project Matters in Today's RL Landscape
As LLMs shift toward Mixture-of-Experts (MoE) and hybrid attention architectures (e.g., Qwen3.5), post-training RL (like GRPO) faces massive distributed systems bottlenecks. AReaL is aggressively solving the exact problems dominating the open-source RL frontier: **mitigating weight-sync overhead via advanced transports (Ray RDT, CUDA-IPC FP8)** and **decoupling inference/training lifecycles for PEFT (LoRA)**. By unifying distributed engines (Megatron, FSDP) with blazing-fast inference backends (vLLM, SGLang) under a single scalable RL workflow, AReaL remains a critical infrastructure backbone for the next generation of open-source reasoning models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-06-06

## 1. Today's Highlights
The TRL ecosystem is experiencing a surge in architectural improvements focused on **efficiency and multimodal scaling**. The most prominent themes today include:
*   **Next-Gen Async GRPO:** Significant engineering efforts are underway to optimize `AsyncGRPO` for distributed environments, introducing sparse weight synchronization and LoRA support.
*   **Multimodal Alignment:** A massive push to natively support Vision-Language Models (VLMs) across preference training pipelines (DPO, KTO).
*   **New RL Algorithms:** The introduction of A\*-PO (Optimal Advantage Regression) hints at a shift toward more sample-efficient reasoning techniques. 

## 2. Releases
*   **None** (0 new releases in the last 24 hours). The repository is likely in an active feature-freeze/integration phase, given the high volume of structural PRs.

## 3. Important Issues
*   **Proposal for A\*-PO Integration ([#5935](https://github.com/huggingface/trl/issues/5935)):** Author `raghulchandramouli` proposed adding an experimental `A2POTrainer`. Based on the paper *"Accelerating RL for LLM Reasoning with Optimal Advantage Regression"*, it optimizes standard KL-regularized RL with binary verifiable rewards. This PR was instantly matched with an implementation (see PR #5940).
*   **Async vLLM Weight Sync Bottleneck:** Historically, syncing policy weights to the vLLM server in `AsyncGRPO` incurred massive overhead. A closed discussion in [#3648](https://github.com/huggingface/trl/issues/3648) highlighted previous impossibilities with vLLM 0.9.1, setting the stage for today's sparse-update PRs.

## 4. Key PR Progress
*   **Async GRPO Performance Upgrades:** 
    *   **[#5937](https://github.com/huggingface/trl/pull/5937) - Sparse Delta Sync:** Implements sparse weight synchronization for `AsyncGRPO`. Instead of broadcasting the full model, it detects changed bf16 weights and sends sparse safetensors patches over HF Buckets—a massive IO optimization.
    *   **[#5896](https://github.com/huggingface/trl/pull/5896) - LoRA Support:** Adds `peft_config` integration to `AsyncGRPOTrainer`, including a weight sync merge/unmerge cycle.
    *   **[#5911](https://github.com/huggingface/trl/pull/5911) - Checkpoint Resume Fix:** Fixes a bug where resuming from a checkpoint triggered redundant, expensive vLLM inference rollouts for already-seen data batches.
*   **Multimodal / VLM Alignment Scaling:**
    *   **[#5943](https://github.com/huggingface/trl/pull/5943):** Extends Liger Kernel compatibility to Vision datasets in DPO, invoking the full model backbone for vision inputs.
    *   **[#5939](https://github.com/huggingface/trl/pull/5939):** Porting VLM support to `KTOTrainer`, mirroring the DPO implementation.
*   **New Algorithms & Loss Functions:**
    *   **[#5940](https://github.com/huggingface/trl/pull/5940) - Experimental A2PO:** The implementation of the A\*-PO algorithm (Offline V\* estimation + on-policy single-generation regression).
    *   **[#5952](https://github.com/huggingface/trl/pull/5952) - Weighted NLL for SFT:** Introduces `loss_type="weighted_nll"` to `SFTTrainer`, allowing per-sample loss scaling via a `"weight"` column. This bridges the gap between pure SFT and full RLHF by upweighting high-quality samples.
*   **Distributed Training Fixes:**
    *   **[#5934](https://github.com/huggingface/trl/pull/5934):** Fixed a DDP gradient sync issue caused by unwrapping student models too early when using `use_liger_gkd_loss` in GKD and GOLD trainers.

## 5. Why This Project Matters in Today's RL Landscape
Today's pull requests reflect the cutting-edge requirements of post-training large language models. As the field moves beyond basic instruction tuning, the computational cost of RLHF (like PPO/GRPO) has become a primary bottleneck. TRL's current trajectory—specifically **sparse weight syncing ([#5937](https://github.com/huggingface/trl/pull/5937))** and **optimal advantage regression ([#5940](https://github.com/huggingface/trl/pull/5940))**—demonstrates that the open-source community is aggressively solving the "inference-compute bottleneck" of on-policy learning. 

Furthermore, the standardization of VLM support across DPO and KTO ensures that the next generation of multimodal reasoning models will have access to the same robust alignment tools that text-only models currently enjoy.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-06-06

### 1. Today's Highlights
Activity in the OpenRLHF repository over the last 24 hours was minimal but highly focused on algorithmic innovation. No new releases were published, and no issues were raised. The sole update comes from a promising new Pull Request that proposes integrating offline reward-gap regression into the standard Direct Preference Optimization (DPO) pipeline.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **None.** Zero issues were opened, closed, or updated in the past 24 hours, indicating a stable codebase or a period of focused development.

### 4. Key PR Progress
*   **[#1247 Added REBEL-inspired offline reward-gap regression loss to DPO trainer](https://github.com/OpenRLHF/OpenRLHF/pull/1247)** 
    *   **Author:** LeoPhilly
    *   **Status:** Open
    *   **Details:** This PR introduces an offline reward-gap regression loss based on the [REBEL framework](https://arxiv.org/abs/2404.16767). It integrates as an opt-in feature to the existing DPO trainer via the `--model.rebel_enable` flag, scaled by the `--model.eta` parameter. This approach aims to improve preference alignment by directly regressing relative rewards rather than relying purely on standard classification-style DPO losses.

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a foundational framework in the Reinforcement Learning from Human Feedback (RLHF) ecosystem, valued for its scalable and production-ready implementations of PPO and DPO. Today's PR #1247 is a prime example of the project's importance: it serves as a rapid bridge between cutting-edge alignment research and applied machine learning. By efficiently adapting concepts like REBEL's relative reward regression into accessible, parameterized pipelines (`--model.rebel_enable`), OpenRLHF enables applied researchers and engineers to seamlessly test and deploy next-generation LLM alignment techniques without building training loops from scratch.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-06-06  
**Project:** [volcengine/verl](https://github.com/volcengine/verl)  
**Activity:** 14 Issues | 47 Pull Requests | 0 New Releases

---

## 1. Today's Highlights
The verl ecosystem saw heavy iteration today, driven by scaling optimizations for large language models and expanding hardware parity. 
*   **Hardware & Scaling:** Big pushes toward AMD/ROCm support, alongside critical bug fixes for Context Parallelism (`CP>1`) and Expert Parallelism (`DP>1 + EP`).
*   **Next-Gen Architectures:** Multiple PRs and issues revolve around stabilizing support for newer MoE models like Qwen3.5-35B-A3B and Gemma-4, particularly concerning Megatron-Bridge compatibility.
*   **Async Infrastructure:** Introduction of a new `TransferQueue` architecture to replace Ray's `MessageQueue` for fully asynchronous RL pipelines, minimizing training bottlenecks.

## 2. Releases
*   **None** – No new official releases were cut today. The community remains focused on merging upstream architectural improvements.

## 3. Important Issues
*   **Qwen3.5 MoE Architecture Unsupported ([#6627](https://github.com/verl-project/verl/issues/6627)):** Training fails for `Qwen3.5-35B-A3B` due to an unregistered model type (`qwen3_5_moe`) in the `mbridge` module. This highlights a gap between newer model releases and Megatron-LM backend support.
*   **Context Parallelism `grad_norm` Explosion ([#6609](https://github.com/verl-project/verl/issues/6609)):** Using Context Parallelism (`CP>1`) with MoE and `use_remove_padding=True` causes `actor/grad_norm` to spike into the thousands, degrading validation scores.
*   **Prefix-Tree Shared Attention RFC ([#6401](https://github.com/verl-project/verl/issues/6401)):** A highly upvoted (👍 5) feature request to optimize multi-turn/multi-trajectory RL (like GRPO) by avoiding redundant recomputation of shared prefix tokens. 
*   **AMD/ROCm Roadmap ([#6590](https://github.com/verl-project/verl/issues/6590)):** Published a 26Q2/Q3 roadmap to close the hardware parity gap for AMD MI355X and DeepSeek-V2/V3 training on ROCm.
*   **Multimodal Data Handling Bugs ([#6623](https://github.com/verl-project/verl/issues/6623), [#6599](https://github.com/verl-project/verl/issues/6599)):** Ongoing friction regarding data formatting, specifically the framework currently expecting `PIL.Image` or bytes rather than supporting direct image paths for vision-language models.

## 4. Key PR Progress
*   **`TransferQueue` for Fully Async Workflows ([PR #6628](https://github.com/verl-project/verl/pull/6628)):** Migrates the data transport channel from Ray `MessageQueue` to `TransferQueue (TQ)`, reusing `main_ppo_sync.py`'s PPOTrainer to streamline async training loops.
*   **Chunked Gather-Logsumexp to Prevent OOM ([PR #6593](https://github.com/verl-project/verl/pull/6593)):** Prevents Out-Of-Memory crashes during 64K+ long-context distillation by chunking the student `log_softmax + gather` operation, bypassing the need to materialize a massive `[N, V]` tensor.
*   **Megatron Precision & Optimizer Alignments ([PR #6526](https://github.com/verl-project/verl/pull/6526), [PR #6635](https://github.com/verl-project/verl/pull/6635)):** Fixes optimizer offloading when `use_precision_aware_optimizer=True` and aligns gradient bucket/Adam moments with the model dtype (BF16), reducing memory overhead by up to 3x.
*   **Fixing Silent Failures in Sync Training ([PR #6519](https://github.com/verl-project/verl/pull/6519) / [Issue #6437](https://github.com/verl-project/verl/issues/6437)):** Prevents `main_ppo_sync.py` from silently training on partial rollout batches if an agent-loop failure occurs.
*   **MTP Config & Fixes ([PR #6626](https://github.com/verl-project/verl/pull/6626), [PR #6464](https://github.com/verl-project/verl/pull/6464)):** Properly propagates disabled Multi-Token Prediction (MTP) configurations to Megatron-Bridge providers and clamps `num_tokens=0` to prevent `NaN` losses.

## 5. Why This Project Matters in Today's RL Landscape
As of 2026, the adoption of Post-training (RLHF/GRPO) on massive MoE models (Qwen3.5, DeepSeek-V3) has moved from experimental to essential. **verl** is establishing itself as the de facto distributed orchestration layer for this shift. 

Today's digest reveals the exact technical bottlenecks the AI industry is facing: context length scaling (`CP>1` bugs, chunked OOM fixes) and hardware independence (ROCm roadmaps, Ascend CI fixes). By aggressively optimizing Megatron-LM integrations and rewriting core transport layers (like moving to `TransferQueue`), verl is solving the critical memory and compute overheads required to run the next generation of autonomous, multi-turn RL agents at scale.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL daily digest for the AllenAI `open-instruct` ecosystem.

### 1. Today's Highlights
Activity on 2026-06-06 was characterized by zero new releases or issues, but significant forward momentum in Pull Requests. Core contributor `finbarrtimbers` advanced two interconnected PRs aimed at integrating hybrid model architectures (specifically featuring GDN layers) into the `olmo-core` training scripts, alongside optimizations for Direct Preference Optimization (DPO). 

### 2. Releases
* **None.** No new versions or tags were published in the last 24 hours.

### 3. Important Issues
* **None.** No new issues were opened or updated, suggesting a stable codebase for current users while new hybrid features are actively staged in PRs.

### 4. Key PR Progress
Two open PRs are currently laying the groundwork for hybrid model support:
* **[PR #1715](https://github.com/allenai/open-instruct/pull/1715) [OPEN]:** Introduces foundational infrastructure for hybrid models in `open-instruct` scripts. Notable technical requirements include selective module checkpointing (explicitly bypassing the GDN layer), bumping the FLA (Flash Linear Attention) version, and adding an explicit `tilelang` dependency.
* **[PR #1713](https://github.com/allenai/open-instruct/pull/1713) [OPEN]:** Integrates hybrid support directly into the `olmo-core` DPO (`dpo.py`) trainer. This PR bumps `olmo-core` to utilize the `olmo3_hybrid_7B` config, introduces Hugging Face → olmo-core hybrid weight conversion, and packs DPO microbatches to substantially improve Model FLOPs Utilization (MFU).

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning from Human Feedback (RLHF) and post-training landscape, optimizing Direct Preference Optimization (DPO) workflows is critical for compute efficiency. `open-instruct` remains a vital open-source bellwether because it bridges cutting-edge research architectures with production-ready infrastructure. The current focus on **GDN-based hybrid models** and **Flash Linear Attention (FLA)** represents a broader industry shift away from standard Transformers toward faster, more memory-efficient architectures for RL alignment. By actively solving hardware-aware training bottlenecks (like improving MFU via microbatch packing and selective state checkpointing), AllenAI is ensuring that complex RLHF techniques remain computationally accessible to the open-source community.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL Daily Digest: 2026-06-06

## 1. Today's Highlights
Activity in the CleanRL repository over the last 24 hours was minimal but focused on critical maintenance. No new issues, releases, or user-facing features were introduced. The sole activity centers on a targeted pull request aimed at fixing broken continuous integration (CI) pipelines caused by obsolete dependency resolution.

## 2. Releases
**None.** 
No new versions or tags were released today.

## 3. Important Issues
**None.** 
Zero issues were opened or updated in the past 24 hours.

## 4. Key PR Progress
*   **[fix: refresh jax extra dependency pins](https://github.com/vwxyzjn/cleanrl/pull/554)**
    *   **Author:** Mr-Neutr0n
    *   **Status:** Open
    *   **Details:** This PR addresses a critical dependency resolution failure in the project's `jax` extras. The currently pinned versions (specifically `jaxlib==0.4.7`) have been removed or superseded on the PyPI index, causing the project's CI to fail before tests can even execute. The PR proposes bumping the pinned versions of the core JAX ecosystem (`jax`, `jaxlib`, `flax`, `optax`, and `chex`) to modern, resolvable versions.

## 5. Why This Project Matters in Today's RL Landscape
CleanRL plays a vital role in the modern reinforcement learning ecosystem by providing **high-quality single-file implementations** of complex RL algorithms. 

In an era where RL libraries are increasingly becoming heavily abstracted, "spaghetti-code" frameworks (which obscure algorithmic logic behind layers of file structures and base classes), CleanRL stands out for its commitment to readability and minimalism. Because it strips away boilerplate, it serves as an essential baseline for researchers, students, and engineers who need to rapidly prototype, debug, or understand the mathematical translation of algorithms into code (like PPO, DQN, or SAC). Maintaining its CI and dependencies—such as the JAX updates in PR #554—is crucial to ensuring the repo remains a reliable, plug-and-play standard for the community.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

### RL Open-Source Ecosystem Daily Digest: `rl_games`
**Date:** 2026-06-06

#### 1. Today's Highlights
Activity for `Denys88/rl_games` over the past 24 hours has been minimal, with zero new issues, zero new releases, and a single Pull Request update. The primary focus of the day is the closure of a significant PR that brings Apple Silicon compatibility and modernized dependency support to the framework. 

#### 2. Releases
No new releases were published today. The project remains on its current stable version.

#### 3. Important Issues
No new issues were opened or updated in the last 24 hours. The codebase appears stable, and users are currently operating without unresolved immediate blockers.

#### 4. Key PR Progress
*   **[#351 Apple MPS support + envpool 1.2.5](https://github.com/Denys88/rl_games/pull/351)** [CLOSED]
    *   **Author:** Denys88
    *   **Summary:** This PR successfully integrates Apple Metal Performance Shaders (MPS) support and upgrades the `envpool` dependency to version 1.2.5. 
    *   **Technical Details:** To achieve MPS compatibility, the PR addresses hard failures caused by Apple's lack of `float64` (double precision) support. Core modifications were made to running mean and standard deviation calculations (specifically in `rl_games/algos_torch/running_mean_std.py`) to ensure float32 enforcement. Additionally, the upgrade to `envpool` 1.2.5 introduces compatibility with NumPy 2.x, aligning the environment vectorization layer with modern Python data stack standards. A missing documentation file (`docs/ENVPOOL.md`) was also restored.

#### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a highly regarded, lightweight benchmarking framework widely used for rapid prototyping and baseline testing of deep reinforcement learning algorithms. 

The merging and closure of PR #351 highlight a critical ongoing trend in the open-source RL ecosystem: **hardware fragmentation and dependency modernization**. 
1.  **Hardware Heterogeneity:** As researchers and developers increasingly shift from standard CUDA GPUs to Apple Silicon (M1/M2/M3/M4 chips) for local prototyping, frameworks must adapt to non-CUDA API constraints (such as MPS lacking `float64` operations). 
2.  **Ecosystem Upgrades:** The transition to `NumPy 2.x` has caused massive ripple effects across the scientific Python ecosystem. By ensuring `envpool` compatibility with NumPy 2.x, `rl_games` prevents dependency conflicts in modern RL environments, ensuring seamless vectorized environment execution without forcing users to maintain legacy Python environments.

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