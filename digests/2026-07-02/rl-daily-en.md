# RL Open Source Daily Digest 2026-07-02

> Generated: 2026-07-01 22:24 UTC | Projects covered: 15

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
The 2026-07-02 RL ecosystem digest reveals a clear maturation divide. The industry's frontier is dominated by Large Language Model (LLM) and Agent RL frameworks (verl, TRL, AReaL, slime), which are aggressively solving distributed orchestration, weight synchronization, and complex tool-use integration. Meanwhile, classical and single-agent RL environments (Gymnasium, PettingZoo) and foundational tuning libraries (torchtune) are focusing on API standardization and data integrity. Several legacy or component-specific frameworks (CleanRL, Stable Baselines3, OpenRLHF, Tianshou) experienced a period of dormancy today.

## Activity Comparison
The following table summarizes the quantitative engagement across the ecosystem over the last 24 hours. Active projects are listed by descending PR/Issue velocity, while dormant frameworks are grouped.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 21 | 27 | 0 | High-velocity scaling; major push for Ascend NPU hardware agnosticism and rollout efficiency. |
| **TRL** | 7 | 24 | 0 | Core algorithmic stabilization; shifting from standard RLHF to async, agentic GRPO. |
| **AReaL** | 3 | 14 | 1 (v2.0.0) | Major architectural pivot to micro-services; prioritizing agentic SWE-bench integration. |
| **ROCK** | 7 | 8 | 1 (v1.9.6) | Heavy infrastructure layering; optimizing async I/O throughput and cluster resiliency. |
| **slime** | 2 | 7 | 0 | Next-gen networking focus; pioneering RDMA and P2P transport for distributed RL. |
| **torchtune** | 1 | 1 | 0 | Critical data preparation; patching EOS token masking to ensure RL rollout stability. |
| **Gymnasium** | 1 | 2 | 0 | Maintenance and modernization; fixing tutorial anti-patterns and exploring new physics backends. |
| **PettingZoo** | 1 | 1 | 0 | Codebase hygiene; enforcing stricter linting and documentation for MARL standards. |
| **Open Instruct** | 0 | 2 | 0 | Steady, focused development; integrating on-policy distillation and alt-container support. |
| **Others*** | 0 | 0 | 0 | No recent activity (CleanRL, OpenRLHF, rl_games, ROLL, Stable Baselines3, Tianshou). |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **On-Policy Self-Distillation (OPSD):** A prominent shared algorithmic direction, actively integrated into both verl ([PR #6909](https://github.com/volcengine/verl/pull/6909)) and Open Instruct ([PR #1740](https://github.com/allenai/open-instruct/pull/1740)). This reflects an industry push to anchor RL policy updates and prevent reward hacking using frozen teacher distributions.
*   **Asynchronous & Decoupled PPO/GRPO:** Frameworks are heavily refactoring away from monolithic PPO. TRL is refining `AsyncGRPO` for multi-environment support, while AReaL introduced `reuse_train_logp` to bypass proximal forward passes and save compute.
*   **Agentic & Tool-Use RL:** The transition from static text generation to multi-step tool-use RL is a dominant theme. TRL is building per-example environment selection, while AReaL and slime are actively hardcoding end-to-end SWE-bench coding-agent RL workflows.

**Engineering & Infrastructure Signals**
*   **Next-Gen Weight Synchronization:** Distributed RL is moving past standard NCCL broadcast bottlenecks. verl introduced SGLang delta weight syncing, while slime is prototyping P2P shard updates, RDMA (Mooncake TransferEngine), and disk-level delta syncing.
*   **Hardware Diversification:** Frameworks are decoupling from strict CUDA/NVIDIA dependencies. verl had a massive influx of patches stabilizing Huawei Ascend NPUs, while Open Instruct added Podman/DinD support to avoid restrictive container runtimes.
*   **Rollout & Tokenization Stability:** Teams are fixing silent bottlenecks at the data layer. torchtune fixed critical EOS token masking bugs that cause runaway generation, and verl proposed "Partial Rollouts" to prevent worker idling during long Chain-of-Thought.

## Differentiation Analysis
*   **Abstraction Layers:** ROCK acts purely as the underlying orchestrator for distributed containers, whereas frameworks like verl, AReaL, and slime provide the actual RL training loops (Megatron/FSDP/vLLM) running inside those containers. 
*   **Architectural Philosophy:** AReaL's v2.0.0 release highlights a hard pivot to a decoupled micro-service architecture (separating training, inference, agent). Conversely, TRL remains tightly integrated into the Hugging Face `transformers` ecosystem, focusing on developer experience (e.g., native QLoRA config, Liger kernel support) rather than cross-cluster disaggregation.
*   **Target Modalities:** Classical RL libraries (Gymnasium, PettingZoo) are differentiated by their focus on continuous physics control and multi-agent environments (e.g., porting Box2D to Pymunk). In contrast, the LLM-centric frameworks are hyper-focused on discrete token generation, multimodal VLMs (Qwen VLMs), and multi-turn text rollouts.

## Community Momentum & Maturity
*   **High-Velocity Maturity:** verl and TRL show the highest raw PR/Issue throughput, but represent different phases of maturity. TRL is cleaning up experimental dead-ends (deprecating PAPO) and refining core DX, indicating a stabilization phase. verl is in a rapid scaling phase, absorbing bleeding-edge enterprise demands like Ascend NPU compatibility.
*   **Versioned Milestones:** AReaL (v2.0.0) and ROCK (v1.9.6) cutting major/minor releases demonstrates production-level maturity. Both prioritized reliability and lifecycle management in their updates—ROCK via Docker daemon auto-recovery, and AReaL via decoupled, fault-tolerant micro-services.
*   **Standard Bearer Maintenance:** Gymnasium, PettingZoo, and torchtune show lower volume but highly impactful, surgical maintenance. Their communities are heavily focused on preventing "silent errors" (e.g., EOS masking bugs, environment seeding anti-patterns) that would otherwise cascade into massive training failures downstream.

## Trend Signals
*   **The Infrastructure Bottleneck has Shifted:** Raw FLOPs are no longer the primary blocker for RL. The bottleneck has decisively moved to networking (weight sync latency, RDMA adoption) and orchestrating asynchronous inference/training loops to prevent GPU starvation.
*   **The Rise of Sandbox-Agent RL:** SWE-bench and tool-use environments are rapidly becoming standard benchmarks for new RL frameworks. The ability to seamlessly orchestrate ephemeral Docker sandboxes (seen in ROCK, slime, and AReaL) is now a mandatory feature for next-gen LLM agents.
*   **Multimodality is Default:** Support for Vision-Language Models (VLMs), specifically Qwen2/3-VL architectures paired with memory-optimized kernels (Liger), is moving from experimental side-projects to core, out-of-the-box requirements across verl, TRL, and slime.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for **2026-07-02**, focused on the **ROCK (alibaba/ROCK)** platform.

### 1. Today's Highlights
*   **New Release:** ROCK **v1.9.6** is out, introducing critical networking, metadata, and observability improvements for distributed RL workloads.
*   **Platform Reliability:** Automated recovery for Docker daemons and major proxy/network throughput optimizations were the primary focus, resolving persistent bottlenecks in large-scale sandbox deployments.
*   **Ecosystem SDKs:** Significant strides were made in decoupling data management (Datasets, JobViewer) and aligning the TypeScript SDK with the Python SDK, bringing cross-language feature parity.

### 2. Releases
*   **[v1.9.6](https://github.com/alibaba/ROCK/releases/tag/v1.9.6)**
    *   *Sandbox Metadata:* Automatically injects `sandbox_image` and `sandbox_id` into Harbor job labels for better experiment tracking ([PR #1183](https://github.com/alibaba/ROCK/pull/1183)).
    *   *Networking:* Routes sandbox log archives over in-VPC OSS endpoints with public fallback, significantly reducing latency and public bandwidth costs ([PR #1197](https://github.com/alibaba/ROCK/pull/1197)).

### 3. Important Issues
*   **Resiliency & Networking:** 
    *   [Issue #1189](https://github.com/alibaba/ROCK/issues/1189): Addressed the lack of auto-recovery when a Docker daemon exits on a worker node (OOM/crash), which previously caused cascading sandbox failures.
    *   [Issue #1184](https://github.com/alibaba/ROCK/issues/1184) & [Issue #1187](https://github.com/alibaba/ROCK/issues/1187): Decoupled OSS endpoints to separate public SDK access from in-VPC worker traffic, optimizing data transfer paths.
*   **Performance Bottlenecks:** 
    *   [Issue #1200](https://github.com/alibaba/ROCK/issues/1200): Identified that the FastAPI admin service was bottlenecked by default asyncio loops and pure-Python HTTP parsers, capping async I/O throughput.
    *   [Issue #1191](https://github.com/alibaba/ROCK/issues/1191) & [Issue #1193](https://github.com/alibaba/ROCK/issues/1193): Highlighted CPU underutilization and connection pooling inefficiencies in proxy pods running single uvicorn workers.
*   **SDK & Ecosystem Tracking:**
    *   [Issue #1180](https://github.com/alibaba/ROCK/issues/1180): Proposed a unified `JobViewer` SDK and `rock_meta.json` standard to query RL trial artifacts and metadata *after* a sandbox has been destroyed.
    *   [Issue #1170](https://github.com/alibaba/ROCK/issues/1170): Requested a complete overhaul of the Datasets SDK to support pagination, DB-backed metadata, and cross-bucket syncing for interactive benchmark tools.

### 4. Key PR Progress
*   **Admin & Proxy Overhaul (Merged & Open):**
    *   [PR #1201](https://github.com/alibaba/ROCK/pull/1201) (Open): Upgrades the admin service to use `uvloop` and `httptools`.
    *   [PR #1194](https://github.com/alibaba/ROCK/pull/1194) (Closed): Converted proxy modules to an app factory, enabling multi-worker uvicorn deployments. 
    *   [PR #1195](https://github.com/alibaba/ROCK/pull/1195) & [PR #1196](https://github.com/alibaba/ROCK/pull/1196) (Closed): Implemented multi-worker safe log appending and split proxy routing into two long-lived `httpx` clients (RPC vs. Streaming) to reduce connection latency.
*   **Worker Stability (Merged & Open):**
    *   [PR #1190](https://github.com/alibaba/ROCK/pull/1190) (Open): Introduced `DockerHealthTask` to the scheduler, automatically probing and restarting exited Docker daemons.
*   **Data & Lifecycle Management (Open):**
    *   [PR #1095](https://github.com/alibaba/ROCK/pull/1095): Integrated the archive lifecycle (Pending → Running → Stopped → Archiving → Archived → Deleted) directly into the sandbox state machine and reconciler.
    *   [PR #1171](https://github.com/alibaba/ROCK/pull/1171): Added `DatasetMetadataClient` with pure PostgreSQL/SQLite DB-backed metadata management, fully decoupling it from OSS file operations.
*   **Cross-Language SDKs (Closed):**
    *   [PR #1137](https://github.com/alibaba/ROCK/pull/1137): Achieved feature parity for the TypeScript SDK with the Python SDK across 8 modules (bench, job, trial execution), adding 400+ tests.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning requires orchestrating thousands of ephemeral, compute-heavy containers (sandboxes) across distributed environments. When running massive parallel rollouts or training models, the underlying orchestration layer easily becomes a bottleneck. 

Today’s updates to ROCK highlight exactly where the battle for scalable RL is being fought: **infrastructure efficiency**. By automating Docker daemon recovery (preventing node blackholes), adopting `uvloop` for high-throughput async I/O, and optimizing in-VPC data transfers, ROCK ensures that framework overhead remains negligible compared to GPU compute time. Furthermore, the introduction of decoupled, DB-backed metadata clients and cross-language SDK parity (Python/TypeScript) allows researchers to iterate on interactive environments and benchmark datasets seamlessly, without tripping over distributed systems engineering hurdles.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily digest for the slime (THUDM/slime) project.

# 📊 RL Open-Source Daily Digest: THUDM/slime
**Date:** 2026-07-02

### 1. Today's Highlights
The slime ecosystem is experiencing a massive push towards **high-performance distributed transport** and **multi-turn RL robustness**. Over the last 24 hours, maintainers and contributors focused heavily on optimizing weight synchronization (using P2P, RDMA, and delta-checkpointing) for non-colocated training clusters. There is also notable progress in expanding multimodal capabilities (Qwen) and hardening the SWE coding-agent RL runtime. 

### 2. Releases
*   **No new releases** in the last 24 hours. Development remains focused on merging experimental transport and infrastructure PRs.

### 3. Important Issues
*   **Training Hangs on 8× B200 GPUs** | [Issue #1487](https://github.com/THUDM/slime/issues/1487)
    *   *Context:* An ongoing issue highlighting a severe infrastructure bottleneck. Training hangs indefinitely after the rollout phase on 8× NVIDIA B200 GPUs (CP=4, TP=2), with only SGLang health checks logging. This underscores the communication overhead challenges in massive distributed RL setups.
*   **Megatron DSA MLA Indexer Bug for GLM-5** | [Issue #2165](https://github.com/THUDM/slime/issues/2165)
    *   *Context:* A newly opened bug report indicating that the DSA lightning-indexer is using raw queries instead of normalized queries (`q_a_layernorm`), diverging from reference implementations in HF and vLLM. 

### 4. Key PR Progress
**Next-Gen Weight Synchronization & Transport**
*   [PR #2146](https://github.com/THUDM/slime/pull/2146): Adds an opt-in P2P shard weight update path for non-colocated RL training, avoiding expensive `all_gather` + NCCL broadcast overhead.
*   [PR #2159](https://github.com/THUDM/slime/pull/2159) & [PR #1709](https://github.com/THUDM/slime/pull/1709): Introduces experimental **Mooncake TransferEngine/RDMA transport** for full-weight syncs, bypassing traditional NCCL/filesystem bottlenecks.
*   [PR #2089](https://github.com/THUDM/slime/pull/2089): Implements disk-level delta weight sync, shipping only changed bytes between syncs to drastically reduce I/O across clusters.

**Algorithm & Runtime Robustness**
*   [PR #2157](https://github.com/THUDM/slime/pull/2157): Fixes metric computation crashes (`_compute_zero_std_metrics`) when sample rewards are `None` (e.g., aborted multi-turn rollouts).
*   [PR #2161](https://github.com/THUDM/slime/pull/2161): Hardens the SWE coding-agent RL runtime by introducing env-selectable grading protocols and sandbox RPC robustness. 

**Model & Infrastructure Expansions**
*   [PR #2156](https://github.com/THUDM/slime/pull/2156): Adds support for Qwen3.5 MoE INT4-QAT, including runtime Megatron-to-HF weight conversions.
*   [PR #2151](https://github.com/THUDM/slime/pull/2151) *(Closed)*: Fix for IPv6 address bracketing in `torch.distributed` initialization for weight updates.

### 5. Why This Project Matters in Today's RL Landscape
As RL fine-tuning scales from single-node experiments to massive cross-cluster deployments, **weight synchronization** between the trainer and the inference engine (e.g., SGLang) has become the primary bottleneck. Slime is at the cutting edge of solving this exact problem. 

Today's influx of PRs integrating RDMA (Mooncake), P2P shard syncing, and delta-level disk updates shows that slime is building the foundational infrastructure required to train next-generation MoE and large dense models (like GLM-5 and Qwen3.5) across distributed environments. Furthermore, the integration of sandboxed coding-agent RL environments and multi-turn reward handling proves the framework is rapidly adapting to the agentic era of reinforcement learning.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily digest for the AReaL project.

# 📊 AReaL RL Open-Source Daily Digest — 2026-07-02

## 1. Today's Highlights
AReaL officially enters its **v2.0.0 era**, shifting toward a highly decoupled **micro-service architecture** (separating training, inference, and agent services). This release establishes AReaL as a robust, highly scalable framework for complex, end-to-end Reinforcement Learning (RL) workflows, highlighted by the addition of full SWE-bench RL capabilities.

## 2. Releases
*   **v2.0.0** ([GitHub Release](https://github.com/areal-project/AReaL/releases))
    *   **Core Change:** Introduction of a micro-service architecture for [training](https://github.com/areal-project/AReaL/tree/main/areal/v2/training_service), [inference](https://github.com/areal-project/AReaL/tree/main/areal/v2/inference_service), and [agent](https://github.com/areal-project/AReaL/tree/main) workflows.
    *   **Maintenance:** Version bumped from `1.0.4` to `2.0.0` across pyproject files and documentation ([PR #1466](https://github.com/areal-project/AReaL/pull/1466)). 

## 3. Important Issues
*   **[BUG] HF Chat Template Desync in Tool Calls ([#1420](https://github.com/areal-project/AReaL/issues/1420))**
    *   *Problem:* OpenAI-to-HF render path mishandles tool_call arguments (JSON string vs. mapping), causing rollout/train token desync.
    *   *Status:* Actively being addressed in [PR #1463](https://github.com/areal-project/AReaL/pull/1463).
*   **[Refactor] Simplify Advantage Group-Norm ([#1422](https://github.com/areal-project/AReaL/issues/1422))**
    *   *Problem:* Duplicated config knobs (`group_size` vs `gconfig.n_samples`) create silent misconfiguration footguns for reward normalization.
*   **[Feature] Configurable Loss Aggregation ([#1423](https://github.com/areal-project/AReaL/issues/1423))**
    *   *Proposal:* Allow configurable policy-gradient loss aggregation (token / seq / prompt mean) to support methodologies like ScaleRL (§3.2).

## 4. Key PR Progress
A massive merge cycle occurred in the last 24 hours to facilitate the v2.0.0 release (14 PRs closed):

**Agentic & Tool-Use Workflows**
*   [PR #1462](https://github.com/areal-project/AReaL/pull/1462) & [PR #1455](https://github.com/areal-project/AReaL/pull/1455): Added a complete end-to-end **SWE-bench RL training workflow**, integrating AReaL with the AReaL-SWEAgent via the OpenAI-compatible rollout proxy.
*   [PR #1458](https://github.com/areal-project/AReaL/pull/1458): Enhanced the OpenAI proxy with preprocessors and Qwen tool-call parsing for complex agent rollouts.

**RL Algorithm & PPO Optimizations**
*   [PR #1453](https://github.com/areal-project/AReaL/pull/1453) & [PR #1457](https://github.com/areal-project/AReaL/pull/1457): Introduced `reuse_train_logp` for decoupled PPO, saving memory/compute by skipping the extra proximal forward pass.
*   [PR #1454](https://github.com/areal-project/AReaL/pull/1454): Fixed PPO reward normalization to handle variable-size trajectory groups (e.g., filtered out or failed rollouts).

**Distributed Inference & Model Scaling**
*   [PR #1460](https://github.com/areal-project/AReaL/pull/1460): Added Megatron context-parallel (CP) support for forward-only paths and MoE config plumbing.
*   [PR #1373](https://github.com/areal-project/AReaL/pull/1373) *(Open)*: Upcoming support for GLM-5/DeepSeek-V3 architectures across both mbridge and megatron-bridge paths.
*   [PR #1452](https://github.com/areal-project/AReaL/pull/1452) *(Open)*: Proposed cross-tokenizer on-policy distillation (e.g., LLaMA → Qwen).

## 5. Why This Project Matters in Today's RL Landscape
With the transition to a **micro-service architecture** in v2.0.0, AReaL solves a critical bottleneck in modern RL paradigms: bridging heavyweight LLM training infrastructure (Megatron/vLLM) with dynamic, multi-step agentic environments (like SWE-bench). By decoupling the training, inference, and agent loops, AReaL allows researchers to scale complex RL methodologies (such as decoupled PPO, MoE optimization, and tool-use integration) without the traditional fragility of monolithic RLHF scripts. Furthermore, the push toward cross-tokenizer distillation and advanced advantage normalization reflects its alignment with cutting-edge SOTA research demands.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL open-source ecosystem daily digest for TRL.

# 📊 TRL Daily Digest: 2026-07-02
**Repository:** [huggingface/trl](https://github.com/huggingface/trl)
**Activity (Last 24h):** 7 Issues Updated | 24 PRs Updated | 0 New Releases

---

### 1. Today's Highlights
- **Async GRPO & Agentic Tooling:** Significant refactoring is happening around `AsyncGRPO` and multi-environment support, transitioning TRL from standard RLHF towards agentic, tool-use RL training ([PR #6002](https://github.com/huggingface/trl/pull/6002), [PR #6218](https://github.com/huggingface/trl/pull/6218)).
- **Ecosystem Cleanup:** The experimental PAPO (Perception-Aware Policy Optimization) trainer is being deprecated and removed due to zero recent usage, allowing maintainers to focus on core GRPO/DPO stability ([PR #6235](https://github.com/huggingface/trl/pull/6235)).
- **Kernel & Multimodal Support:** Heavy focus on patching integration with the `Liger Kernel` and newer Qwen VLM architectures to ensure memory-efficient, multimodal RL training works out-of-the-box ([PR #6234](https://github.com/huggingface/trl/pull/6234), [PR #6232](https://github.com/huggingface/trl/pull/6232)).

### 2. Releases
- **None** (0 new releases in the last 24 hours).

### 3. Important Issues
- **[Open] Feature: Integrate GTPO into GRPOTrainer ([#5226](https://github.com/huggingface/trl/issues/5226))**
  - **Context:** Proposal to add Group-relative Trajectory-based Policy Optimization (GTPO) as a new loss type. It specifically targets training instability and gradient conflicts present in vanilla GRPO.
- **[Open] Feature: Weighted SFT ([#5761](https://github.com/huggingface/trl/issues/5761))**
  - **Context:** A proposal to implement token-weighted Supervised Fine-Tuning. This allows practitioners to down-weight low-quality tokens in mixed-quality, long-form SFT datasets before RL alignment.
- **[Closed] Multi-GPU sampling for vLLM in GRPO Trainer ([#2706](https://github.com/huggingface/trl/issues/2706))**
  - **Context:** A highly requested feature (15 👍) regarding the limitation of `GRPOConfig.vllm_device` being restricted to a single GPU. Closing this indicates strides have been made in distributed inference/sampling.

### 4. Key PR Progress
- **[Open] Support multiple environments [2/2]: Per-example environment selection ([#6002](https://github.com/huggingface/trl/pull/6002))**
  - *Impact:* Enables a single GRPO dataset to contain examples that map to different toolsets/environments, a critical feature for training generalist RL agents.
- **[Open] Default AsyncGRPO token_budget to vLLM max_model_len ([#6218](https://github.com/huggingface/trl/pull/6218))**
  - *Impact:* Fixes a critical edge-case bug where `per_device_train_batch_size=1` caused samples with non-trivial prompts to be silently dropped during async GRPO training.
- **[Open] Fix missing mm_token_type_ids when training new Qwen VLMs with Liger kernel ([#6234](https://github.com/huggingface/trl/pull/6234))**
  - *Impact:* Extends memory-efficient Liger Kernel support to Qwen3.5's new multimodal token types, enabling cost-effective Vision-Language Model (VLM) RL.
- **[Open] Add `quantization_config` trainer argument ([#6157](https://github.com/huggingface/trl/pull/6157))**
  - *Impact:* Massively improves the Developer Experience (DX) for QLoRA by removing the need for hacky `model_init_kwargs`. Now natively supported across SFT, DPO, GRPO, RLOO, and Reward trainers.
- **[Open] SFT: Truncate during dataset preparation, not collation ([#6155](https://github.com/huggingface/trl/pull/6155))**
  - *Impact:* Performance optimization that moves sequence truncation from the data collator to the cached dataset preparation step, saving compute during SFT.

### 5. Why This Project Matters in Today's RL Landscape
The Reinforcement Learning ecosystem is aggressively shifting away from standard PPO towards Group Relative Policy Optimization (GRPO) and Direct Preference Optimization (DPO) for LLMs. TRL is the central open-source hub operationalizing these research advancements.

Today's digest proves that the frontier of RL isn't just about new loss functions—it's about **infrastructure**. The active PRs show that the community is solving the hard engineering problems of LLM RL: syncing asynchronous vLLM inference with training budgets, enabling multi-tool agentic environments, supporting multimodal Vision-Language Models (VLMs) with optimized kernels (Liger), and streamaining QLoRA for accessible research. By stabilizing these pipelines, TRL remains the definitive bridge between theoretical RL papers and production-ready LLM training.

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

Here is the RL ecosystem daily digest for **verl** (github.com/volcengine/verl) covering activity up to **2026-07-02**.

### 1. Today's Highlights
* **Algorithmic Expansion:** Introduction of On-Policy Self-Distillation (OPSD) and multimodal GRPO training support. 
* **Infrastructure Scaling:** Heavy focus on maximizing cluster utilization with dynamic context parallelism, dynamic resource scaling for async PPO, and SGLang delta weight syncing.
* **NPU & Ascend Momentum:** Massive engineering effort to stabilize and optimize verl for Huawei Ascend NPUs, including adapting vLLM 0.19+ and porting custom Triton kernels for Qwen3.5. 
* **Traffic:** 21 issues updated and 27 PRs updated in the last 24 hours, indicating highly active development.

### 2. Releases
* **None** in the last 24 hours.

### 3. Important Issues
* **Rollout Bottlenecks & Memory Leaks:** [Issue #658](https://github.com/volcengine/verl/issues/658) proposes a shared queue and "Partial Rollouts" for long Chain-of-Thought (CoT) RL to prevent worker idling. Meanwhile, [Issue #630](https://github.com/volcengine/verl/issues/630) tracks a persistent GPU OOM problem tied to frequent checkpoint saving.
* **Multi-Modal & Diverse Backends:** The community is actively requesting megatron backend support for Qwen2-VL ([Issue #636](https://github.com/volcengine/verl/issues/636)) and ARM64 support for Slurm clusters ([Issue #613](https://github.com/volcengine/verl/issues/613)).
* **Hardware-Specific Crashes:** [Issue #6894](https://github.com/volcengine/verl/issues/6894) reports reproducible FSDP2 crashes on Atlas 800T A3 (Ascend NPUs) during GRPO training at step 11, highlighting the bleeding-edge nature of NPU-based RL.
* **Training Dynamics:** [Issue #628](https://github.com/volcengine/verl/issues/628) (Closed) discusses models suddenly generating repetitive "!!!!" tokens during training, while [Issue #651](https://github.com/volcengine/verl/issues/651) questions the continuous increase of KL and Entropy loss in GRPO.

### 4. Key PR Progress
**Algorithms & Recipes**
* [PR #6909](https://github.com/volcengine/verl/pull/6909): Implements **On-Policy Self-Distillation (OPSD)** on top of verl's existing teacher loop, allowing a student model to learn from its own on-policy rollouts. 
* [PR #6849](https://github.com/volcengine/verl/pull/6849) (Closed): Adds crucial multimodal data preprocessing and GRPO training scripts for Open-R1 (images) and TinyLLaVA-Video-R1 (video).

**Performance & Resource Optimization**
* [PR #6901](https://github.com/volcengine/verl/pull/6901): Improves Megatron BSHD path performance by padding micro-batches to the mini-batch max sequence length, reducing redundant cuDNN fused-attention graph builds.
* [PR #6794](https://github.com/volcengine/verl/pull/6794): Introduces **delta weight syncing** for SGLang disaggregated rollouts. By only broadcasting changed BF16 parameters instead of full models, this drastically cuts network overhead during RL weight updates.
* [PR #6556](https://github.com/volcengine/verl/pull/6556): Adds hybrid inference resource dynamic scaling to fully async PPO, solving the issue of idle trainer/rollout nodes.

**Ecosystem & Backend Compatibility**
* **Ascend NPU Ecosystem:** Multiple PRs ([#6881](https://github.com/volcengine/verl/pull/6881), [#6900](https://github.com/volcengine/verl/pull/6900), [#6831](https://github.com/volcengine/verl/pull/6831), [#6911](https://github.com/volcengine/verl/pull/6911)) drop extensive support for Huawei Ascend, including vLLM 0.19+ adaptation, quickstart CI scripts, and Qwen3.5 Triton GDN kernels ([#6908](https://github.com/volcengine/verl/pull/6908)). 
* **Framework Updates:** [PR #6896](https://github.com/volcengine/verl/pull/6896) fixes Qwen3 MoE FSDP weight syncing to ensure compatibility with the upcoming Transformers 5 release. [PR #6913](https://github.com/volcengine/verl/pull/6913) patches a silent gradient corruption bug occurring when using fused kernels.

### 5. Why This Project Matters in Today's RL Landscape
verl has solidified its position as a premier orchestration framework for Large Language Model (LLM) Reinforcement Learning. As the industry shifts from pre-training to complex post-training (R1-style reasoning, multi-modal grounding), the bottleneck has moved from raw FLOPs to distributed orchestration efficiency. 

Today's digest highlights exactly how verl is solving the next generation of RL infrastructure problems:
1. **Minimizing Rollout Idle Time:** By pioneering disaggregated, asynchronous architectures (partial rollouts, dynamic scaling, and delta weight syncing), verl addresses the massive GPU starvation problem typical in RLHF/GRPO loops.
2. **Hardware Agnosticism:** The massive influx of Ascend NPU patches proves verl is decoupling RL frameworks from strict NVIDIA/CUDA dependencies, a vital step for global AI infrastructure diversification. 
3. **Algorithmic Agility:** By supporting frameworks like OPSD and multi-modal GRPO natively, verl allows researchers to iterate on cutting-edge algorithms without needing to rewrite low-level distributed training code.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

**RL Open-Source Ecosystem Daily Digest: torchtune**
**Date:** 2026-07-02

### 1. Today's Highlights
Activity in the `torchtune` repository over the last 24 hours is highly focused on a critical aspect of Reinforcement Learning from Human Feedback (RLHF) and sequence generation: **End-of-Sequence (EOS) token handling**. Both the updated issue and the active PR address tokenizer-level bugs where EOS tokens are improperly appended or incorrectly masked. In RL pipelines, if an LLM is not reliably trained to emit an EOS token, it suffers from generation runaway, severely degrading the quality of trajectories for reward modeling and PPO optimization.

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **[#2478](https://github.com/meta-pytorch/torchtune/issues/2478) [bug, good first issue, community help wanted] Add `add_end_token` to the Gemma Tokenizer**
    *   **Author:** pbontrager (Created: 2025-03-11 | Updated: 2026-07-01)
    *   **Summary:** The Gemma tokenizer currently lacks the `add_end_token` parameter in `tokenize_messages`, a feature already integrated for Llama3. This omission means Gemma architectures lack standardized control over appending EOS tokens during supervised fine-tuning (SFT), which is a prerequisite before alignment phases. The maintainers are actively seeking community contributions for this fix.

### 4. Key PR Progress
*   **[#2967](https://github.com/meta-pytorch/torchtune/pull/2967) [Fix] Qwen tokenizers mask trained EOS out of loss when `max_seq_len` is set (#2792)**
    *   **Author:** yushaosun (Created: 2026-06-28 | Updated: 2026-07-01)
    *   **Summary:** This PR addresses a severe training bug in Qwen2/2.5/3 tokenizers. When `max_seq_len` is enforced, the tokenization logic incorrectly applies a loss mask to the trailing EOS token. Consequently, the model is never penalized for failing to stop generating. This PR correctly modifies the tail end of the mask (`mask[-...]`) to ensure the model learns to predict EOS, resolving issue #2792.

### 5. Why This Project Matters in Today's RL Landscape
In modern RL pipelines (e.g., PPO, GRPO), the quality of the policy update is strictly bound by the quality of the trajectory rollouts. `torchtune` serves as a vital scaffolding tool in the PyTorch ecosystem for fine-tuning LLMs prior to and during RL alignment. 

Today's updates highlight a fundamental rule of RL data preparation: **flawed tokenization breaks generation**. If an SFT model—often the initialization point for an RL policy—is trained with masked or missing EOS tokens, it will not naturally terminate its outputs. This leads to rambling rollouts, artificial max-length truncation penalties, and noisy reward signals, ultimately destabilizing RL training. By continuously patching tokenizer-specific edge cases across diverse model families (Llama, Gemma, Qwen), `torchtune` ensures that researchers can reliably prepare baseline policies for complex alignment tasks.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL Open-Source Ecosystem Daily Digest: 2026-07-02**
**Focus Repository:** Open Instruct (allenai/open-instruct)

### 1. Today's Highlights
Activity in the Open Instruct repository over the last 24 hours is exclusively focused on engineering and infrastructure expansions. Two open Pull Requests saw updates, highlighting a dual push toward advanced training methodologies (On-Policy Distillation) and robust DevOps/containerization (Podman support). There were no new releases or active bug reports in this window.

### 2. Releases
* **None.** No new versions were cut in the last 24 hours.

### 3. Important Issues
* **None.** The issue tracker currently shows 0 items updated in the last 24 hours, indicating a period of stable development without newly reported blockers or bugs.

### 4. Key PR Progress
Two significant PRs were updated, reflecting active development behind the scenes:
* **[PR #1740](https://github.com/allenai/open-instruct/pull/1740) [OPEN] Add On-Policy Distillation (OPD) for OLMo-core GRPO**
  * *Author:* farhatkevin
  * *Summary:* Introduces On-Policy Distillation (OPD) directly into the OLMo-core GRPO stack. The implementation uses a frozen teacher model to score exact trajectory prefixes sampled by the student, applying a distillation loss to regress the student toward the teacher's distribution while keeping the student's standard RL rollout pipeline intact. 
* **[PR #1749](https://github.com/allenai/open-instruct/pull/1749) [OPEN] Add Podman setup scripts**
  * *Author:* hamishivi
  * *Summary:* Enhances the repository's infrastructure tooling by adding Podman/Docker-in-Docker (DinD) setup scripts for Beaker images. This includes container configs, registry mirror helpers, and Podman service sharding, alongside a minor compatibility fix in `mason.py` for Beaker budget handling.

### 5. Why This Project Matters in Today's RL Landscape
As open-source Reinforcement Learning from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) mature, the ecosystem's bottleneck is shifting from basic algorithmic implementation to scalable infrastructure and nuanced alignment techniques. 

**Open Instruct** remains a critical barometer for the open-source RL community. The integration of **On-Policy Distillation (OPD) with GRPO** (PR #1740) directly addresses a major industry trend: stabilizing RL training and preventing reward hacking by anchoring policy updates to teacher distributions. Simultaneously, infrastructure PRs like the **Podman/DinD setup** (PR #1749) highlight the ongoing, grueling engineering work required to distribute and scale RL workloads across heterogeneous compute clusters without relying on proprietary or restrictive container runtimes.

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

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-07-02

### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours focused heavily on documentation accuracy and physics engine modernization. A core discussion regarding proper environment seeding in RL training loops has directly resulted in an active pull request to fix official tutorials. Meanwhile, a draft PR proposing a fundamental backend physics shift for a classic environment has received fresh updates.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **[Question] Inconsistency Between `reset()` Docstring and REINFORCE Tutorial** ([Issue #1468](https://github.com/Farama-Foundation/Gymnasium/issues/1468))
    *   **Status:** Open
    *   **Summary:** User `initsownright` flagged a critical discrepancy between Gymnasium's API documentation and its practical tutorials. The `gym.Env.reset()` docstring advises against passing an integer seed after initialization (to prevent identical PRNG states across episodes), yet the REINFORCE tutorial explicitly calls `env.reset(seed=...)` in the training loop. This highlights a common pitfall that can severely degrade RL training data diversity. 

### 4. Key PR Progress
*   **Update environment seeding code in tutorials** ([PR #1608](https://github.com/Farama-Foundation/Gymnasium/pull/1608))
    *   **Author:** Trenza1ore
    *   **Summary:** Directly addressing the seeding confusion raised in Issue #1468, this PR removes the anti-pattern of calling `env.reset(seed=seed)` at the beginning of every episode. It also updates the reward logging mechanisms in the training documentation to reflect current best practices.
*   **Port lunar lander to pymunk** ([PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602))
    *   **Author:** Lonny154
    *   **Summary:** An ambitious draft PR that prototypes a transition for the classic `LunarLander` environment from Box2D to Pymunk. The current proof-of-concept successfully demonstrates reproducible terrain generation, a lander hull, and constrained thrusters. This points toward a potential modernization of Gymnasium's underlying physics dependencies.

### 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for single-agent reinforcement learning, Gymnasium's documentation serves as the de facto curriculum for new RL researchers and engineers. Resolving seeding inconsistencies (as seen in Issue #1468 and PR #1608) is not merely a cosmetic fix; it is crucial for preventing reproducibility errors and training instabilities caused by non-stationary data distributions. Furthermore, exploring backends like Pymunk (PR #1602) demonstrates the ecosystem's commitment to maintaining lightweight, easily installable, and highly reliable physics simulators, which remain essential for benchmarking continuous control algorithms.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the daily digest for the PettingZoo repository. 

# 🧠 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-02 | **Repository:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. Today's Highlights
Activity in the PettingZoo repository over the last 24 hours has been focused on codebase hygiene and documentation accuracy. While there are no new software releases, maintainers are actively processing a quality-of-life pull request and reviewing a tutorial correction to ensure smoother Multi-Agent Reinforcement Learning (MARL) workflows.

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **[Proposal] Proper initialization of the custom CNN model in the RLlib tutorial** ([Issue #1253](https://github.com/Farama-Foundation/PettingZoo/issues/1253))
    *   **Author:** `jangroter`
    *   **Status:** Open (Updated: 2026-07-01 | 4 Comments)
    *   **Summary:** A proposal to fix the Ray/RLlib tutorial (`rllib_pistonball.py`). The author points out that the custom CNN model is never actually initialized in the current configuration. The proposal suggests either updating the config to explicitly use the custom CNN or removing the dead code entirely to prevent confusion for new users.

### 4. Key PR Progress
*   **Increase ruff strictness and apply mechanical autofixes** ([PR #1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376))
    *   **Author:** `mfornet`
    *   **Status:** Open (Updated: 2026-07-01)
    *   **Summary:** A significant codebase maintenance PR that increases the strictness of the `ruff` linter. Building on a previous baseline (#1350), this PR enables additional rule sets beyond the default pyflakes (`F`) and pycodestyle (`E4/E7/E9`) sets, automatically fixing all newly surfaced findings. This is a crucial step for maintaining code readability and reducing bugs as the project scales.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the industry standard API for Multi-Agent Reinforcement Learning (MARL), acting as the multi-agent equivalent to OpenAI's Gymnasium (also under Farama-Foundation). In today's RL landscape, where research is rapidly shifting from single-agent to complex multi-agent systems (like self-driving, robotics, and LLM agent swarms), having a standardized, reliable environment API is critical. By rigorously maintaining linting standards (as seen in PR #1376) and ensuring real-world integration tutorials with major frameworks like Ray RLlib function perfectly (Issue #1253), PettingZoo lowers the barrier to entry for MARL research and deployment.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>