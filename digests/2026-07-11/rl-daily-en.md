# RL Open Source Daily Digest 2026-07-11

> Generated: 2026-07-10 22:19 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem as of mid-2026 is heavily bifurcated into two major fronts: **LLM/VLM alignment at scale** (verl, TRL, AReaL, slime, OpenRLHF, Open Instruct) and **foundational RL environments and traditional algorithms** (PettingZoo, Gymnasium, CleanRL, Tianshou). The LLM RL frameworks are currently dominated by low-level systems engineering—specifically tackling memory bottlenecks, distributed orchestration, and weight synchronization for massive MoE architectures. Meanwhile, the foundational libraries are actively iterating on API standardization, strict typing, and critical alignment safety tooling (reward auditing).

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 93 | 23 | 0 | High momentum in disaggregated rollouts, hardware expansion (Ascend), and delta weight sync. |
| **TRL** | ~5+ | 8+ | 0 | Maturing online RL infrastructure; focus on vLLM integration, streaming datasets, and PEFT/FSDP fixes. |
| **AReaL** | 2 (closed) | 8 | 0 | Aggressive push towards GPU-colocated RL training via AWEX IPC and Megatron MoE routing. |
| **ROCK** | 3 | 6 | 0 | Hardening sandbox resource management (disk quotas) and lifecycle orchestration for agent safety. |
| **slime** | 1 | 5 | 0 | Deep tensor-level fixes for MoE weight updates (FlashInfer/SGLang) and memory management. |
| **OpenRLHF** | 2 | 1 | 0 | Resolved critical DeepSpeed ZeRO-3 gradient flaws in hybrid LLM architectures. |
| **PettingZoo** | 3 | 5 | 0 | API overhaul to match Gymnasium; adding native video recording and safety benchmarking. |
| **Gymnasium** | 1 | 3 | 0 | Quality-of-life updates: strict typing, MuJoCo rendering fixes, and CPU-only dependency optimization. |
| **CleanRL** | 1 | 0 | 0 | Deliberating architectural proposals for reward-hacking monitoring hooks without breaking single-file design. |
| **Open Instruct** | 0 | 1 | 0 | Patching multi-tenant cluster race conditions for single-node Ray initializations. |
| **Tianshou** | 1 | 0 | 0 | Low activity; community focus on proposing reward-hacking safety callbacks. |
| **Inactives** | 0 | 0 | 0 | `rl_games`, `ROLL`, `Stable Baselines3`, and `torchtune` saw zero activity in the last 24 hours. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Reward Hacking & Alignment Safety:** There is a coordinated, ecosystem-wide push (led by a cross-project community member, Aarav500) to integrate reward-hacking onset monitoring in TRL, OpenRLHF, Gymnasium, CleanRL, and Tianshou. This signals a maturation of RL research from basic capability acquisition to robust alignment, entropy-collapse tracking, and reward auditing.
*   **Procedural & Agentic RL:** TRL is shifting towards an "environment-owned" reward and dataset paradigm. Concurrently, ROCK is building specialized sandbox environments, indicating a strong research drift toward long-horizon, tool-using RL agents.
*   **Multimodal & Complex MoE Architectures:** Frameworks are scrambling to support 30B+ parameter MoEs (e.g., Qwen3.5/3.6) and multimodal models. Slime and OpenRLHF are actively fixing routing and gradient computation bugs inherent to these next-gen hybrid architectures.

**Engineering / Infrastructure Signals**
*   **Colocation & Delta Weight Sync:** Disjointed training and inference clusters are becoming obsolete. AReaL (AWEX GPU-IPC), verl (Delta Weight Sync over NCCL), and TRL (AsyncGRPO LoRA via NCCL) are engineering time-sharing and memory-sharing solutions to eliminate the massive I/O bottlenecks of weight transfers.
*   **Distributed Cluster Reliability:** As RL scales, orchestration overhead is a major hurdle. Projects are actively patching Ray race conditions (Open Instruct), optimizing VRAM ceilings during checkpoint saves (verl, slime, AReaL), and tightening DeepSpeed/FSDP interactions (TRL, OpenRLHF).
*   **Ecosystem Dependency Hygiene:** Gymnasium’s removal of PyTorch from its `[all]` extra to prevent CUDA bloat highlights a broader engineering trend toward leaner, CPU-friendly core libraries to speed up CI/CD and multi-tenant cloud deployments.

## Differentiation Analysis
*   **The LLM RL Trainers (verl, TRL, OpenRLHF, slime, AReaL):** While all target LLM alignment, their approaches differ. **verl** and **AReaL** are heavily focused on hardware-level optimizations for ultra-scale models (disaggregation, IPC, Ascend support). **TRL** is prioritizing usability, streaming datasets, and modularity (decoupling environments). **slime** and **OpenRLHF** are acting as rapid-response fixers for low-level integration bugs with inference backends (SGLang, vLLM) and optimizers (ZeRO-3).
*   **The Infrastructure Layer (ROCK):** Differentiates entirely by focusing on the *host* environment rather than the training loop. ROCK’s focus on Docker disk quotas and sandbox lifecycles proves that secure, isolated code execution is a distinct battleground for agentic RL.
*   **The Foundations (Gymnasium, PettingZoo, CleanRL, Tianshou):** These projects differentiate by holding the line on API stability and standardization. PettingZoo unifying with Gymnasium’s `make` API contrasts heavily with the rapid, sometimes breaking, architectural pivots happening in the LLM RL libraries.

## Community Momentum & Maturity
The ecosystem shows clear signs of maturation, transitioning from experimental scripts to production-grade engineering. **verl** dominates raw engineering velocity (93 issues, 23 PRs in a single day), proving its centrality to frontier LLM scaling. Meanwhile, a synchronized community focus on safety—specifically the cross-project requests for reward-hacking telemetry—demonstrates that open-source contributors are proactively addressing the alignment demands of 2026. Foundational projects like **Gymnasium** and **Tianshou** have lower PR volume but maintain high maturity by enforcing strict typing (`mypy --strict`) and debating architectural changes thoroughly before writing code.

## Trend Signals
*   **GPU Time-Sharing over Network Transfer:** The shift from NCCL network broadcasts to localized GPU-IPC (AReaL) and delta-sparse updates (verl) indicates that network bandwidth is maxing out; the future of RL is colocated training and inference.
*   **Orthogonalization of RL Components:** Decoupling environments, reward functions, and trainers (TRL’s environment-owned RFC) will likely become the standard architecture, preventing vendor lock-in and allowing modular scaling.
*   **Safety as a Default Primitive:** The proliferation of reward-auditing wrappers will likely become a default, built-in requirement for all major RL frameworks by 2027, driven by the need to detect specification gaming in advanced LLM reasoning.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL Ecosystem Daily Digest for ROCK. 

# 📊 RL Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-07-11
**Activity:** 3 Issues | 6 PRs | 0 Releases

---

### 1. Today's Highlights
The development velocity around ROCK's infrastructure and sandbox execution environments is accelerating. The primary focus is on hardening sandbox resource management—specifically defaulting disk quotas to 50GB and preventing catastrophic file cleanup collisions with running Docker containers. Additionally, long-term architectural upgrades are progressing, notably the integration of an OpenSandbox lifecycle backend and a decoupled dataset metadata client.

### 2. Releases
❌ **No new releases** published in the last 24 hours.

### 3. Important Issues
*   **[Feature] Default Sandbox Disk Quota to 50G** | [alibaba/ROCK #1225](https://github.com/alibaba/ROCK/issues/1225)
    *   *Author:* @zhangjaycee
    *   *Summary:* Addresses a critical gap where sandbox startup leaves the disk quota unset, making effective disk behavior unpredictable. Proposes a 50G default limit.
*   **[Bug] Protect active container directories during scheduled file cleanup** | [alibaba/ROCK #1227](https://github.com/alibaba/ROCK/issues/1227)
    *   *Author:* @zhongwen666
    *   *Summary:* `FileCleanupTask` currently risks deleting files/directories of running containers when retention thresholds are met. Proposes querying Docker for running containers prior to cleanup and "failing closed" on discovery errors.
*   **[Feature] Environment lifecycle orchestration in McpEnv** | [alibaba/ROCK #1230](https://github.com/alibaba/ROCK/issues/1230)
    *   *Author:* @Timandes
    *   *Summary:* Requests extending `rock.sdk.mcp.McpEnv` to consume ScaffoldHub's `EnvLifecycleFactory`, allowing robust orchestration of environment lifecycles within the existing ROCK runtime flow.

### 4. Key PR Progress
*   **[feat] Default sandbox disk to 50G** | [alibaba/ROCK PR #1226](https://github.com/alibaba/ROCK/pull/1226)
    *   *Status:* Open | *Author:* @zhangjaycee
    *   *Progress:* Direct implementation of Issue #1225 to stabilize sandbox storage behavior.
*   **[fix] Protect active container directories during file cleanup** | [PR #1228](https://github.com/alibaba/ROCK/pull/1228) & [PR #1229](https://github.com/alibaba/ROCK/pull/1229)
    *   *Status:* Closed | *Author:* @zhongwen666
    *   *Progress:* Both PRs addressing Issue #1227 were closed, with #1229 specifically handling the backport to `release/v1.10`. Indicates active merging or iteration in the background to secure container file systems.
*   **[feat] OpenSandboxOperator lifecycle backend (Phase 1)** | [alibaba/ROCK PR #1203](https://github.com/alibaba/ROCK/pull/1203)
    *   *Status:* Open | *Author:* @zpzjzj
    *   *Progress:* Delivers the lifecycle seam for delegating sandbox management and command execution to OpenSandbox via its Python SDK. 
*   **[feat] DatasetMetadataClient for DB-backed metadata** | [alibaba/ROCK PR #1171](https://github.com/alibaba/ROCK/pull/1171)
    *   *Status:* Open | *Author:* @jake11-oho
    *   *Progress:* Massive infrastructural overhaul decoupling metadata from OSS file operations, introducing PostgreSQL/SQLite ORM models and 41 unit tests.
*   **[fix] TS SDK nohup process completion & OSS download path** | [alibaba/ROCK PR #1224](https://github.com/alibaba/ROCK/pull/1224)
    *   *Status:* Open | *Author:* @xdlkc
    *   *Progress:* Fixes critical bugs that caused large RL dataset/model file downloads to fail in the TypeScript SDK by aligning its behavior with the Python SDK.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning requires generating massive amounts of synthetic data and executing arbitrary, sandboxed code for reward modeling and agent evaluation. ROCK provides the critical infrastructure necessary to do this safely and at scale. 

Today's updates perfectly highlight the core challenges of RL infrastructure in 2026: **isolation and resource starvation**. PRs focusing on strict Docker container protection during garbage collection and setting hard 50G disk quotas prevent experimental training runs from stepping on each other or OOM-ing the host machine. Furthermore, the introduction of a robust DB-backed `DatasetMetadataClient` and the `OpenSandboxOperator` shows ROCK's trajectory toward becoming a highly scalable, enterprise-grade orchestration layer for complex, long-horizon RL agent environments.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for July 11, 2026.

### 1. Today's Highlights
The slime project (THUDM/slime) experienced a highly active day focused on infrastructure stabilization and MoE (Mixture of Experts) compatibility. The community merged efforts to fix weight-update mechanisms for modern large-scale architectures (e.g., Qwen3.5/3.6) and resolved distributed training memory management issues, though no new official releases were cut.

### 2. Releases
*   **New Releases:** None (v0 updates in the last 24 hours).

### 3. Important Issues
*   **[Question] Multi-modal weights omitted during training** ([Issue #2194](https://github.com/THUDM/slime/issues/2194))
    *   **Context:** A user reported that while training `qwen3.6-35B-A3b`, the framework only saved the text weights and failed to save the multimodal components. 
    *   **Analyst Takeaway:** As RL pipelines extend from pure text to multimodal LLMs, checkpointing logic must properly handle complex, multi-component architectures. This highlights an ongoing pain point in adapting text-centric RL frameworks to omni-models.

### 4. Key PR Progress
Today's PRs heavily target the `update_weight` and distributed memory mechanics crucial for RLHF/RLAIF at scale:
*   **[OPEN] MoE Expert Axis Preservation** ([PR #2193](https://github.com/THUDM/slime/pull/2193))
    *   Fixes a bug in GLU rechunking logic during TP all-gather. It ensures that the grouped MoE expert axis is preserved during `linear_fc1` tensor operations, which is critical for correctly updating large MoE models during RL loops.
*   **[OPEN] FlashInfer MoE Layout Restoration** ([PR #2192](https://github.com/THUDM/slime/pull/2192))
    *   Fixes BF16 weight hot-updates when using the `flashinfer_trtllm` MoE backend (specifically for Qwen3.5/3.6 35B-A3B). It ensures SGLang properly restores block-layout weights to canonical layout after hot updates.
*   **[CLOSED] Dynamic `torch_memory_saver` Hook** ([PR #2195](https://github.com/THUDM/slime/pull/2195))
    *   Dynamically resolves the `LD_PRELOAD` `.so` library path for `torch_memory_saver`, fixing CUDA compatibility bottlenecks in Ray-distributed environments. 
*   **[OPEN] DeepScaler Reward Logic** ([PR #2116](https://github.com/THUDM/slime/pull/2116))
    *   Corrects an edge-case inconsistency in `get_deepscaler_rule_based_reward`. It ensures the framework correctly parses and grades the `###Response` segment after `</think>` tags, improving accuracy in rule-based RL reward signaling.
*   **[CLOSED] Withdrawn PR** ([PR #2191](https://github.com/THUDM/slime/pull/2191)): Closed on creation; no technical impact.

### 5. Why This Project Matters in Today's RL Landscape
As the RL landscape shifts aggressively toward massive MoE architectures (like Qwen3.6) and inference-backend agnostic training (SGLang, FlashInfer), projects like slime serve as the critical glue. Today's commits show that the real battle in open-source RL is solving low-level hardware and tensor manipulation challenges—specifically memory management (`torch_memory_saver`) and dynamic weight hot-updates. By enabling seamless BF16 weight updates and preserving complex MoE tensor layouts during training, slime is actively reducing the bottleneck between RL training clusters and inference generation engines, a requirement for any viable post-training pipeline in 2026.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Daily Digest: AReaL 
**Date:** 2026-07-11

## 1. Today's Highlights
- **Colocated RL Training Takes Center Stage:** A major PR (#1500) introduces AWEX-based colocated rollout/training, allowing SGLang and Megatron to time-share GPUs via IPC, effectively eliminating disk/NCCL weight transfer bottlenecks.
- **Megatron MoE Routing Enhancements:** Native R3 (Rollout Routing Replay) support (#1496) lands to accurately record and replay MoE expert choices during SGLang rollout and Megatron training.
- **Memory & Stability Fixes:** Several critical merges today target GPU OOM during HF weight saving (#1489) and proxy trajectory splitting caused by upstream timeout retries (#1498).

## 2. Releases
- **No new releases** pushed in the last 24 hours.

## 3. Important Issues
Two older refactor/feature issues were marked closed today after underlying patches shipped:
- **#1359 [CLOSED]:** Support for FP8 weight transfer in the AWEX colocated CUDA-IPC path. (Closed by recent AWEX colocation PRs).
- **#1397 [CLOSED]:** Removal of `megatron_bridge_patches.py` following the upstream megatron-bridge #3143 fix, streamlining Qwen3.5 support.

## 4. Key PR Progress
**Newly Opened:**
- **[#1500] feat(colocate): AWEX-based colocated rollout/training:** Implements the shared-GPU RL training loop integrating SGLang rollout servers and Megatron actors via [AWEX](https://github.com/inclusionAI/asystem-awex) GPU-IPC.
- **[#1496] feat(engine): Native R3 router replay:** Adds Rollout Routing Replay for SGLang + Megatron MoE, validating and packing MoE expert choices into Megatron token order.
- **[#1499] fix(openai): Align proxy tool schemas:** Resolves rendering mismatches between the OpenAI-compatible proxy and sglang's native chat-completions pydantic models.
- **[#1498] fix(proxy): Drop retry-orphan completions:** Prevents trajectory splitting by dropping orphaned completions generated by Agent SDK timeouts/retries.
- **[#1497] fix: Align CP metrics and TP grad norm:** Corrects Megatron `stats_tracker` key syncing and TP grad norm metadata.

**Recently Closed (Merged):**
- **[#1489] fix(mcore): Cap GPU peak during HF save:** Introduces CPU stashing and eager gather release to prevent OOM when saving weights in HF format.
- **[#1493] feat(api): AWEX weight-update type:** Adds the allocation grammar required for hybrid MoE colocated training (e.g., `megatron[actor]:attn:d1p4t4c2|ffn:d1p4e8`).
- **[#1492] feat(sglang): Abort-all & tagged offload:** Adds SGLang protocol primitives necessary for inference servers to yield GPUs during collocated weight updates.

## 5. Why This Project Matters in Today's RL Landscape
As RL fine-tuning scales to massive MoE models (e.g., Qwen3.5/VL series), traditional disjointed actor/rollout deployments suffer from severe weight synchronization bottlenecks across GPU clusters. AReaL's aggressive push towards **colocated/shared-GPU RL training** via AWEX GPU-IPC (#1500, #1493, #1492) directly solves this by time-sharing GPUs between SGLang inference and Megatron training. 

Furthermore, features like native R3 MoE routing replay (#1496) and memory-optimized HF saving (#1489) demonstrate AReaL's focus on the exact technical constraints defining the frontier of LLM/VLM reinforcement learning: expert routing consistency, VRAM ceiling management, and high-throughput orchestration.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL Ecosystem — 2026-07-11

## 1. Today's Highlights
- **vLLM Integration & Performance**: TRL is actively upgrading to vLLM 0.24.0 ([PR #6355](https://github.com/huggingface/trl/pull/6355)) and addressing weight synchronization bugs in colocate mode with sleep mode enabled ([Issue #5312](https://github.com/huggingface/trl/issues/5312)).
- **Environment-Owned RL Paradigm**: A major architectural shift is underway to let environments own rewards and datasets, streamlining procedural RL workflows ([PR #6349](https://github.com/huggingface/trl/pull/6349), [Issue #6354](https://github.com/huggingface/trl/issues/6354)).
- **Distributed Training Hardening**: Several PRs merged to fix PEFT + ZeRO-3 / FSDP1 interactions, preventing mixed-dtype crashes and forcing `use_reentrant=True` across all trainers ([PR #6356](https://github.com/huggingface/trl/pull/6356), [PR #6343](https://github.com/huggingface/trl/pull/6343)).
- **Streaming & Iterable Datasets**: Massive cleanups to ensure KTO, GRPO, and RLOO trainers handle streaming datasets seamlessly across all loss functions ([PR #6335](https://github.com/huggingface/trl/pull/6335), [PR #6338](https://github.com/huggingface/trl/pull/6338)).

## 2. Releases
No new releases in the last 24 hours. The ecosystem remains stable as development focuses on merging experimental trainers and vLLM compatibility updates into the main branch.

## 3. Important Issues
- **vLLM Weight Desync in Sleep Mode** ([#5312](https://github.com/huggingface/trl/issues/5312) - OPEN): GRPO training with `vllm_mode="colocate"` and `vllm_enable_sleep_mode=True` is failing due to weight synchronization issues introduced after [PR #4700](https://github.com/huggingface/trl/pull/4700). Critical for users optimizing VRAM during online RL.
- **Reward-Hacking Monitoring** ([#6350](https://github.com/huggingface/trl/issues/6350) - OPEN): Feature request to add callbacks tracking KL-vs-reference acceleration, entropy collapse, and advantage-distribution drift in GRPO/DPO. A highly relevant addition for robust LLM alignment.
- **Environment-Owned Reward Refactor** ([#5912](https://github.com/huggingface/trl/issues/5912) - CLOSED): RFC closed today to shift reward computation ownership from the trainer to the environment, laying the groundwork for Harbor and OpenReward integrations ([#6354](https://github.com/huggingface/trl/issues/6354)).

## 4. Key PR Progress
- **vLLM 0.24.0 Support** ([#6355](https://github.com/huggingface/trl/pull/6355)): Upgrades TRL to vLLM 0.24.0 with no breaking changes detected for TRL's vLLM surface area.
- **PEFT & DeepSpeed/FSDP Guards** ([#6356](https://github.com/huggingface/trl/pull/6356)) & ([#6343](https://github.com/huggingface/trl/pull/6343)): Propagates `use_reentrant=True` for gradient checkpointing across DPO, GRPO, RLOO, Reward, and KTO. Also fixes a QLoRA + FSDP1 mixed-dtype crash in experimental trainers.
- **AsyncGRPO LoRA Support** ([#6344](https://github.com/huggingface/trl/pull/6344)): Introduces `LoRAWeightTransferClient` to sync only LoRA A/B parameters directly to vLLM via NCCL, enabling efficient async online RL.
- **GOLDTrainer Enhancements** ([#6328](https://github.com/huggingface/trl/pull/6328), [#5725](https://github.com/huggingface/trl/pull/5725)): Adds multi-turn tool-calling support and implements sequence-level knowledge distillation (`seq_kd`) for same-family distillation.
- **Streaming KTO & Eval Unification** ([#6335](https://github.com/huggingface/trl/pull/6335), [#6326](https://github.com/huggingface/trl/pull/6326)): Simplifies KTO KL completion construction into a single batched map for streaming compatibility, and standardizes `DatasetDict`/`IterableDatasetDict` evaluation across stable trainers.

## 5. Why This Project Matters in Today's RL Landscape
As RLHF/GRPO becomes the default for LLM reasoning and alignment, distributed training stability and inference-backend integration are the primary bottlenecks. Today's TRL updates show a targeted effort to mature online RL infrastructure—specifically decoupling reward/data ownership to environments, enabling async LoRA weight syncing via NCCL, and stabilizing vLLM colocate modes. Furthermore, the push for reward-hacking observability and streaming dataset support reflects TRL's transition from a research library into a production-grade framework for agentic and procedural RL fine-tuning.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

Here is the daily digest for the Tianshou Reinforcement Learning ecosystem. 

### 1. Today's Highlights
* **Low Activity:** Tianshou experienced a quiet 24 hours with zero new pull requests, no new releases, and only one new issue logged. 
* **Focus on AI Safety:** The sole community contribution shifted focus toward AI alignment, specifically requesting new mechanisms to detect reward hacking in RL agents.

### 2. Releases
* **No New Releases:** There have been no new official version updates or patches in the last 24 hours. The project remains stable on its current version.

### 3. Important Issues
* **Issue [#1302](https://github.com/thu-ml/tianshou/issues/1302): New feature request: reward-hacking onset monitoring hooks**
  * **Author:** Aarav500
  * **Status:** Open
  * **Summary:** A community member has formally requested a new feature to integrate "reward-hacking onset monitoring hooks" into the Tianshou framework. As RL models become more capable, they often find degenerate policies that exploit flaws in the reward function (reward hacking). This issue proposes adding callback hooks specifically designed to detect and monitor the early onset of such behavior during training, which would be a highly valuable diagnostic tool for RL researchers.

### 4. Key PR Progress
* **No Active PRs:** There were no pull requests updated, merged, or opened in the last 24 hours. Core development appears to be in a planning or dormant phase for the day.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou is a cornerstone of the open-source Reinforcement Learning ecosystem, highly regarded for its lightweight, modular, and highly optimized library built on PyTorch. Unlike monolithic frameworks, Tianshou provides researchers with unparalleled flexibility to prototype custom algorithms (PPO, SAC, DQN, etc.) using high-quality batched vectorized environments. 

Today's feature request for **reward-hacking monitoring hooks** (#1302) perfectly encapsulates Tianshou's role in the modern RL landscape: as a lean, highly adaptable sandbox. As the industry pushes toward AGI and highly capable autonomous agents, safety and alignment (like preventing reward hacking) have become critical frontiers. Tianshou's architecture allows the community to rapidly implement and test these advanced safety mechanisms before they are adopted by heavier production frameworks.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# 🧠 RL Open-Source Ecosystem Daily Digest: 2026-07-11
**Focus Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

### 1. Today's Highlights
The past 24 hours in the OpenRLHF ecosystem were dominated by critical architectural bug fixes for next-generation LLMs. A major gradient computation flaw affecting Qwen3.5-9B+ models under DeepSpeed ZeRO-3 was resolved, ensuring proper weight updates for hybrid decoder architectures. Meanwhile, the community is actively pushing for advanced alignment safety tooling, proposing built-in reward-hacking detection mechanisms for PPO/GRPO.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   🔓 **[CLOSED] #1258: Qwen3.5-9B and above trained under zero3 have most weights frozen** ([Link](https://github.com/OpenRLHF/OpenRLHF/issues/1258))
    *   **Author:** `allen-dc`
    *   **Summary:** Resolved a critical issue where `Actor.__init__`'s use of `set_z3_leaf_modules` interacted poorly with DeepSpeed ZeRO-3 prefetching for Qwen3.5's hybrid decoder architecture (mixing `self_attn` and `linear_attn`). The original workaround inadvertently caused most model weights to remain frozen during training. 
*   🛡️ **[OPEN] #1263: Feature request: reward-hacking onset monitoring hooks during PPO/GRPO training** ([Link](https://github.com/OpenRLHF/OpenRLHF/issues/1263))
    *   **Author:** `Aarav500`
    *   **Summary:** A proposal to integrate monitoring hooks directly into OpenRLHF's PPO/GRPO trainers to detect early signs of reward hacking. The requested metrics include KL-vs-reference acceleration, entropy-collapse trends, and advantage-distribution drift (Wasserstein distance against a rolling baseline).

### 4. Key PR Progress
*   🔀 **[CLOSED] #1261: Fix Qwen3.5 ZeRO-3 frozen weights from set_z3_leaf_modules hybrid detection** ([Link](https://github.com/OpenRLHF/OpenRLHF/pull/1261))
    *   **Author:** `Functionhx`
    *   **Summary:** Successfully resolves Issue #1258. The root cause was identified as `set_z3_leaf_modules` registering `register_full_backward_pre_hook` on hybrid decoder classes, which hijacked gradient computations for inner parameters under ZeRO-3. The fix introduces a `detect_hybrid=False` parameter to bypass this faulty detection while preserving essential Mixture-of-Experts (MoE) leaf marking in `actor.py` and `model.py`.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and advanced preference optimization remain the gold standards for LLM alignment, distributed training frameworks must rapidly adapt to complex, modern architectures. OpenRLHF's swift resolution of the Qwen3.5 ZeRO-3 backward hook conflict highlights the non-trivial engineering required to optimize hybrid attention and MoE models at scale. Furthermore, community requests like Issue #1263 underscore a maturing RL landscape where researchers are moving beyond basic capability training, demanding robust, real-time telemetry to prevent alignment failures (e.g., entropy collapse and reward hacking) during large-scale PPO and GRPO runs.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the concise English digest for 2026-07-11 based on the provided verl project data. 

# Verl RL Daily Digest — 2026-07-11

## 1. Today's Highlights
The verl ecosystem saw intense maintenance and architecture-level updates today. Key advances include the introduction of **Delta Weight Sync** over NCCL for disaggregated rollout paths, critical fixes for **adaptive KL controller state persistence**, and the migration of fully async workflows off legacy `TransferQueue` runtime paths. The project also saw heavy traffic on CI infrastructure, notably adding Ascend hardware support for nightly Megatron/vLLM tests.

## 2. Releases
**None.** No new stable versions or patch releases were published in the last 24 hours.

## 3. Important Issues
Out of **93 issues** updated today, several major architectural and deep-dive discussions stood out:

*   **RL Algorithm & Rollout Stability:**
    *   **[Issue #6967](https://github.com/volcengine/verl/issues/6967):** Discovered a critical timing race in fully async mode where NCCL checkpoint-engine group initialization hangs during the first weight sync.
    *   **[Issue #6781](https://github.com/volcengine/verl/issues/6781):** Daily auto-processing log highlights ongoing systemic triage of rollout bottlenecks.
*   **Algorithmic Depth & Performance:** 
    *   **[Issue #2540](https://github.com/volcengine/verl/issues/2540):** High-engagement discussion (7+ upvotes) on reward calculation nuances in multi-turn interaction systems.
    *   **[Issue #2408](https://github.com/volcengine/verl/issues/2408):** Persisting memory constraints when saving large 30B+ Qwen3 MoE actors in Megatron pipelines.
*   **Legacy Convergence Debugging:**
    *   **[Issue #2453](https://github.com/volcengine/verl/issues/2453):** Evidence that asynchronous vLLM rollout engines are failing to converge as effectively as synchronous engines in GRPO training.

## 4. Key PR Progress
**23 active PRs** were updated today, focusing heavily on system stability and efficient resource utilization:

*   **Checkpoint & Weight Management:**
    *   **[PR #6974](https://github.com/volcengine/verl/pull/6974):** Implements delta weight sync over NCCL for disaggregated rollout, optimizing BF16 weight broadcast by leveraging >99% sparsity in RL step updates.
    *   **[PR #7013](https://github.com/volcengine/verl/pull/7013):** Fixes state persistence for the adaptive KL controller across checkpoint resumes (prevents reverting to initial coefficients).
    *   **[PR #7014](https://github.com/volcengine/verl/pull/7014):** Resolves stale-weight bugs in FSDP LoRA rollouts when merging weights before context exit.
*   **Architecture Refactoring:**
    *   **[PR #6999](https://github.com/volcengine/verl/pull/6999) / [PR #7000](https://github.com/volcengine/verl/pull/7000):** Removes `TransferQueue` runtime paths and restores `RayPPOTrainer` as the default entrypoint to prepare for NeoProto data-plane integration.
    *   **[PR #6933](https://github.com/volcengine/verl/pull/6933):** Migrates fused logprob/entropy computation away from monkey-patching GPT forward passes to proper Megatron output processor hooks.
*   **Hardware & CI Expansion:**
    *   **[PR #6973](https://github.com/volcengine/verl/pull/6973) / [PR #7008](https://github.com/volcengine/verl/pull/7008):** Adds nightly Ascend hardware test compatibility for GRPO Megatron + vLLM pipelines.

## 5. Why This Project Matters in Today's RL Landscape
As foundational models scale into the 30B+ parameter range (e.g., Qwen3 MoE), traditional single-node RL workflows are breaking down under memory and compute constraints. 

Verl is tackling the exact bottlenecks defining today's frontier open-source RL landscape: **1)** Disaggregating rollout engines from training nodes to maximize GPU utilization, **2)** Replacing heavy full-parameter broadcast traffic with delta/sparsity-aware weight synchronization (PR #6974), and **3)** Standardizing compatibility across heterogeneous hardware clusters (Nvidia H100/H200 vs. Ascend). By providing a highly configurable Ray-based trainer that wraps multiple inference backends (vLLM, SGLang, Megatron), verl remains a critical, production-grade open-source framework for scaling LLM and VLM alignment.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL Ecosystem Daily Digest: July 11, 2026**

**1. Today's Highlights**
Activity in the `allenai/open-instruct` repository over the last 24 hours was highly focused on infrastructure reliability. The primary update is an open pull request addressing Ray cluster initialization collisions, a critical operational hurdle when running dense single-node RLHF workloads on shared computing clusters. 

**2. Releases**
No new releases were published in the last 24 hours. 

**3. Important Issues**
No new or updated issues were reported in the last 24 hours. 

**4. Key PR Progress**
*   **[OPEN] PR #1752: Skip ray start in `ray_node_setup.sh` for single-node jobs** ([allenai/open-instruct#1752](https://github.com/allenai/open-instruct/pull/1752))
    *   **Author:** `mnoukhov`
    *   **Summary:** This PR resolves a cluster-level race condition. Previously, if two single-node Beaker jobs were packed onto the same physical machine, both scripts attempted to execute `ray start --head --port=8888`. This collision on a hardcoded Ray port caused immediate startup crashes. The fix leverages `mason.py` to inject a `MASON_NUM_NODES` environment variable into tasks, allowing `ray_node_setup.sh` to dynamically bypass the manual Ray head node initialization for single-node configurations. 
    *   **Impact:** Significantly improves job scheduling efficiency and reduces silent failures for researchers running concurrent, isolated RL fine-tuning tasks on multi-tenant GPU nodes.

**5. Why This Project Matters in Today's RL Landscape**
As LLM alignment increasingly relies on complex paradigms like PPO and DPO, the underlying distributed infrastructure often becomes the primary bottleneck for research velocity. Open Instruct serves as a critical bridge between high-level RL algorithms and massive-scale distributed execution (typically orchestrated via Ray). 

While today's update is a highly specific infrastructure patch, it highlights a systemic reality of the modern RL landscape: **cluster orchestration and resource contention are active battlegrounds.** By optimizing multi-tenant job packing and eliminating port-collision overhead, Open Instruct continues to lower the operational barrier to entry, allowing practitioners to focus on reward modeling and policy optimization rather than DevOps troubleshooting.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 🤖 RL Open-Source Daily Digest: CleanRL
**Date:** 2026-07-11
**Repository:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

### 1. Today's Highlights
Activity in the CleanRL repository over the last 24 hours has been focused on feature design and community discussion rather than code merges. The spotlight is on a newly opened feature request aimed at expanding the framework's safety and monitoring capabilities. There were **0 new pull requests** and **0 new releases**.

### 2. Releases
No new releases were published in the last 24 hours. The repository remains on its current stable version.

### 3. Important Issues
*   **[#563](https://github.com/vwxyzjn/cleanrl/issues/563) [OPEN] Optional monitoring callback for reward-hacking / training-instability signals**
    *   **Author:** Aarav500 (Created: 2026-07-10)
    *   **Summary:** This issue proposes the addition of a standalone `cleanrl_utils/monitors.py` module. Currently, CleanRL algorithms log standard baseline metrics (loss, entropy, KL divergence). This proposal advocates for an *optional, decoupled* callback mechanism specifically designed to flag subtle alignment and training issues—namely **reward hacking** and the onset of training instability. Crucially, the proposer suggests it should not be imported by default in existing algorithm files, strictly adhering to CleanRL's single-file, low-abstraction philosophy.

### 4. Key PR Progress
There has been no pull request activity (updates, merges, or closures) in the past 24 hours. The development pipeline remains quiet as the community deliberates on architectural proposals like Issue #563.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL occupies a vital niche in the modern RL ecosystem by providing high-quality, single-file implementations of core deep reinforcement learning algorithms. At a time when many frameworks (e.g., RLlib, Stable-Baselines3) lean heavily into complex inheritance structures and high abstraction, CleanRL provides unparalleled readability and hackability. 

The proposal in Issue #563 perfectly encapsulates the project's ongoing challenge and value proposition: how to integrate advanced modern RL needs—like detecting reward hacking and ensuring robust alignment—without violating the strict, easy-to-read single-file design that researchers love. How the maintainers and community navigate these feature requests directly impacts how intuitively the next generation of RL practitioners can experiment with and debug state-of-the-art agents.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-11

### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours has been highly technical and quality-of-life focused. The community is actively working to improve environment observability (reward auditing), tighten code safety (strict typing), resolve rendering bugs, and optimize dependency footprints for CPU-only workflows. There were no new releases reported today. 

### 2. Releases
* **None.** No new versions were published in the last 24 hours.

### 3. Important Issues
* **[Proposal] Reward-hacking / reward-audit monitoring wrappers** ([#1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619))
  * **Author:** Aarav500
  * **Summary:** A proposal has been opened to introduce opt-in wrappers designed to audit reward signals during training and rollout. The goal is to track phenomena like reward-distribution drift, entropy collapse, and reward-function versioning/hashing. 
  * **Analyst Take:** As RL models scale, reward hacking remains a critical roadblock. Integrating observational wrappers directly into the standard environment API is a highly practical step toward safer, more transparent RL training pipelines.

### 4. Key PR Progress
* **Remove `torch` from `[all]` extra to avoid nvidia-cuda on CPU-only systems** ([#1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617))
  * **Summary:** Fixes dependency bloat by removing PyTorch from the `[all]` installation extra. Because PyPI defaults to CUDA builds (pulling massive `nvidia-cuda-*` packages), this PR allows CPU-only users to install `gymnasium[all]` cleanly. JAX remains included as its PyPI default is CPU-only. Users needing PyTorch can manually specify `gymnasium[all,torch]`.
* **Add strict type hints for core files** ([#1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620))
  * **Summary:** Improves codebase robustness by adding return type annotations and fixing generic type parameters (`np.ndarray`, `np.dtype`) in `core.py`, `space.py`, and `box.py`. The PR successfully passes `mypy --strict` with zero errors on the targeted files.
* **Fix `default_camera_config` not affecting rendered output** ([#1618](https://github.com/Farama-Foundation/Gymnasium/pull/1618))
  * **Summary:** Resolves a MuJoCo rendering bug where `default_camera_config` was being ignored. The root cause was identified: standard MuJoCo models include a default camera named `"track"`. When no explicit camera ID is passed, the renderer was defaulting to this index (0) rather than applying the custom config.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium serves as the absolute foundational API standard for the Reinforcement Learning ecosystem. When researchers and engineers build custom environments or train state-of-the-art agents, they rely on Gymnasium's interface to connect algorithms to physics simulators (like MuJoCo) and game engines. 

Today's updates perfectly reflect the ecosystem's current maturation phase:
1. **Dependency Management:** As compute environments become increasingly complex, isolating massive GPU dependencies (like CUDA packages) ensures that cloud and CPU-based CI/CD pipelines remain fast and lightweight.
2. **Tooling & Type Safety:** Enforcing `mypy --strict` provides crucial guarantees for downstream library developers (like Stable-Baselines3 or CleanRL) who depend on stable, predictable data structures (`spaces.Box`, etc.).
3. **Alignment & Safety:** The community's interest in a reward-auditing wrapper highlights the field's shifting focus from simply "solving environments" to solving them safely, transparently, and without specification gaming.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL Ecosystem Daily Digest for PettingZoo.

# 🐾 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-11 | **Repository:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. Today's Highlights
PettingZoo is undergoing a significant infrastructure evolution. The most notable updates include a major architectural shift toward a Gymnasium-like environment creation API, the introduction of native video recording wrappers, and active community engagement in benchmarking and environment customization.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   🔧 **API Overhaul Initialized:** Issue [#1392](https://github.com/Farama-Foundation/PettingZoo/issues/1392) announces the deprecation of legacy environment initialization (e.g., `pistonball_v6.env()`) in favor of a unified Gymnasium-like `make` function (e.g., `make("aec", "butterfly/pistonball")`). This is a breaking change designed to standardize the multi-agent API.
*   🛡️ **Safety Testing Proposal:** Issue [#1394](https://github.com/Farama-Foundation/PettingZoo/issues/1394) proposes adding multi-agent reward-hacking environments. This aligns with the growing industry focus on RL safety, alignment, and robustness testing.
*   🏃 **Environment Customization:** Issue [#1382](https://github.com/Farama-Foundation/PettingZoo/issues/1382) requests an argument to control the center box size in the `pursuit` environment, prompting a rapid feature implementation (see PR Progress).

### 4. Key PR Progress
*   🎥 **Native Video Recording:** PR [#1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306) ports the `RecordVideo` wrapper from Gymnasium to PettingZoo, enabling native AEC and parallel environment recording without relying on external library wrappers (like SB3 or TorchRL).
*   🏹 **New Benchmark Policies:** PR [#1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395) introduces a deterministic predictive vector policy for Knights-Archers-Zombies (KAZ), complete with projectile interception logic and a reproducible evaluation script.
*   🧩 **Feature Implementation (Pursuit):** PR [#1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393) directly addresses Issue #1382, adding a `center_box_size` argument to the Pursuit environment for custom map configurations.
*   🐍 **Dependency Maintenance:** PR [#1389](https://github.com/Farama-Foundation/PettingZoo/pull/1389) (Closed) updated `pyproject.toml` to optimize `box2d` dependencies across Python 3.10 through 3.14.
*   📝 **Docs Fix (Hanabi):** PR [#1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368) (Closed) addressed layout documentation for the Hanabi observation space.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains the foundational standard for Multi-Agent Reinforcement Learning (MARL) research. By systematically aligning its API with single-agent Gymnasium (as seen in the new `make` deprecations), Farama-Foundation is drastically lowering the barrier to entry for MARL development. Furthermore, community pushes for natively integrated tools (like `RecordVideo`) and safety-oriented environments (reward-hacking tests) ensure that PettingZoo is adapting to the advanced needs of modern LLM and RLHF alignment research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>