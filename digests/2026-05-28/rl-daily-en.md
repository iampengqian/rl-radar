# RL Open Source Daily Digest 2026-05-28

> Generated: 2026-05-27 22:29 UTC | Projects covered: 15

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
The reinforcement learning open-source landscape on May 28, 2026, shows a distinct two-tier architecture: a highly active top tier focused on the systems-level challenges of Large Language Model (LLM) post-training, and a quieter bottom tier maintaining classic algorithmic and single-agent tooling. The dominant theme across the ecosystem is infrastructure hardening. As post-training paradigms like GRPO and complex agentic workflows become standard, the bottleneck has shifted from algorithmic design to distributed compute orchestration, memory management, and multi-backend hardware compatibility.

## Activity Comparison
Activity today was heavily concentrated in LLM post-training and scaling infrastructure. Classic RL and MARL libraries either saw no activity or focused strictly on minor maintenance.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 11 | 38 | 0 | Critical focus on heterogeneous hardware support and sequence parallelism. |
| **ROCK** | 9 | 8 | 0 | Enterprise-scale cluster survival, disk governance, and sandbox lifecycle. |
| **TRL** | 5 | 13 | 1 (v1.5.1) | AsyncGRPO stabilization, DeepSpeed ZeRO-3 integration, and chat templates. |
| **slime** | 3 | 17 | 0 | Agentic coding RL structuring and GPU colocation memory management. |
| **AReaL** | 3 | 6 | 0 | Inference-training co-design, silent convergence bugs, and CUDA IPC. |
| **Open Instruct** | 0 | 9 | 0 | GRPO evaluation reliability and advanced curriculum sampling. |
| **PettingZoo** | 0 | 5 | 0 | Security patching and MARL environment reproducibility. |
| **Stable Baselines3** | 1 | 1 | 0 | Resolving Gymnasium API wrapper dimension edge cases. |
| **torchtune** | 0 | 2 | 0 | Distributed logging and DPO import maintenance. |
| **Gymnasium** | 0 | 1 | 0 | Pygame rendering performance optimization. |
| *Others* | *0* | *0* | *0* | *No activity for CleanRL, OpenRLHF, rl_games, ROLL, Tianshou.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Agentic RL & Sandboxes:** Frameworks are rapidly evolving to support tool-using agents. `slime` heavily refactored its `coding_agent_rl` base, while `ROCK` introduced native Dockerfile-to-sandbox initialization and deletion workflows, signaling a shift toward complex, isolated environment interactions.
*   **Advanced Alignment Algorithms:** GRPO continues to dominate post-training R&D. `TRL` is pushing "padding-free" AsyncGRPO, `Open Instruct` introduced a difficulty curriculum sampler and TV divergence filtering for GRPO, and `AReaL` implemented on-policy distillation using dedicated inference engines.

**Engineering & Infrastructure Signals**
*   **GPU Colocation & Memory Management:** Managing VRAM between massive training graphs and inference engines on the same node is a primary concern. `AReaL` implemented CUDA IPC for FSDP/SGLang colocated weight updates, `slime` fixed SGLang memory draining crashes, and `verl` added failover mechanisms to restore KV caches.
*   **Hardware & Backend Heterogeneity:** Expanding compute support is critical. `verl` actively integrated Ascend NPUs and tackled RTX 5090 peer-to-peer failures, while `AReaL` and `verl` both worked on Prefill-Decode (PD) disaggregation and custom weight-syncing backends (Ray RDT).
*   **Cluster Survival & SRE at Scale:** Large-scale distributed RL is hitting infrastructure limits. `ROCK` implemented multi-stage Ray log cleanup and on-demand SRE APIs to prevent disk exhaustion, highlighting the operational maturity required for modern RLHF.

## Differentiation Analysis
The active projects clearly segment themselves by their abstraction layer and target workflow in the modern RL stack:

*   **The "RL Middleware" Layer (`verl`, `AReaL`):** These frameworks are building highly flexible compute graphs designed to decouple training (Megatron, FSDP2) from inference (vLLM, SGLang). They differentiate by focusing on extreme scale, hardware heterogeneity, and high-speed weight synchronization technologies (CUDA IPC, Ray RDT).
*   **The Model Ecosystem Hubs (`TRL`, `torchtune`):** These libraries focus on tight integration with their respective foundational frameworks (Hugging Face and PyTorch). They differentiate by prioritizing out-of-the-box algorithmic support (DPO, KTO, GRPO) and accessibility, ensuring the latest post-training algorithms work seamlessly across multi-GPU setups (e.g., DeepSpeed ZeRO-3).
*   **The Orchestration & Sandbox Layer (`ROCK`, `slime`):** These projects differentiate by managing the execution environment rather than the core training loop. `ROCK` acts as enterprise-grade infrastructure for massive, ephemeral sandbox orchestration, while `slime` bridges Megatron training with high-throughput inference for agentic workflows.
*   **The Classic RL Standard (`Gymnasium`, `SB3`, `PettingZoo`):** These projects occupy the foundational algorithmic and single/multi-agent API layer. Their differentiation lies in absolute stability and reproducibility rather than cutting-edge LLM integrations.

## Community Momentum & Maturity
The ecosystem displays a stark contrast in momentum. Post-training frameworks (`verl`, `TRL`, `AReaL`) are experiencing explosive, rapid iteration driven by the demands of LLM reasoning capabilities. Their issue trackers are filled with complex, systems-level distributed compute problems. 

Conversely, classic RL libraries (`Gymnasium`, `SB3`, `PettingZoo`) demonstrate extreme maturity. They have minimal activity because they have achieved high stability. Their updates consist of precise security patches, performance optimizations (like stripping unused Pygame subsystems), and ensuring backward compatibility with evolving core APIs. Meanwhile, several historically prominent projects (`CleanRL`, `Tianshou`, `rl_games`) currently show zero momentum, suggesting a community-wide pivot of developer bandwidth toward LLM-centric alignment infrastructure.

## Trend Signals
1.  **Convergence of Training and Inference Engines:** The strict separation between training frameworks and inference servers is collapsing. The standard architecture is becoming a colocated setup where inference engines (vLLM, SGLang) act as rollout workers within the training loop, necessitating complex VRAM management and IPC weight updates.
2.  **Silent Bugs are the New Bottleneck:** As systems become highly distributed, silent failures are emerging as critical threats. `AReaL` fixed a bug where FSDP bf16 silently degraded loss convergence by 3x, and `TRL` fixed an issue where GRPO importance sampling ratios exploded without warning. 
3.  **The Rise of Day-2 RL Operations:** Scaling RLHF beyond a few nodes requires dedicated Site Reliability Engineering (SRE). The emergence of automated log cleanup, disk governance APIs, and fault-tolerant checkpointing indicates that large-scale RL is transitioning from a research exercise to an enterprise engineering discipline.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily open-source reinforcement learning ecosystem digest for ROCK (alibaba/ROCK) on 2026-05-28.

### 1. Today's Highlights
Activity on 2026-05-28 was heavily dominated by **infrastructure robustness and resource governance**. Key focus areas include:
*   **Automated Disk & Log Governance:** A massive push to implement deferred archiving, multi-stage Ray log cleanup, and on-demand SRE cleanup APIs to prevent worker node disk exhaustion during large-scale RL training.
*   **Sandbox Lifecycle Enhancements:** Introduction of sandbox deletion and restart capabilities, alongside fixes for state tracking bugs that disrupted billing and archival tasks.
*   **Performance & SDK Refinements:** Significant speedups for cross-region dataset listing and the addition of Dockerfile-to-sandbox initialization.

### 2. Releases
*   **No new releases** were cut today. The community continues to iterate on features and patches following the v1.8.0 release (2026-05-21).

### 3. Important Issues
**Resource & Disk Governance (SRE & Infrastructure)**
*   **[#1024](https://github.com/alibaba/ROCK/issues/1024) DB-driven SandboxLogArchiveTask:** Proposes shifting from file-based sentinels to the database as the source of truth for aging and archiving stopped sandbox logs to OSS.
*   **[#1028](https://github.com/alibaba/ROCK/issues/1028) RayLogCleanupTask:** Introduces a 4-stage, PID-aware cleanup mechanism for live `session_latest/logs` to prevent Ray worker logs from overwhelming disk space.
*   **[#1026](https://github.com/alibaba/ROCK/issues/1026) Admin ops-jobs API:** Requests a multi-pod safe API to allow SREs to manually trigger scheduler cleanup tasks during disk emergencies without waiting for the 24h cycle.
*   **[#1030](https://github.com/alibaba/ROCK/issues/1030) Harbor job name sanitization:** Flags an issue where slash-separated names break downstream systems expecting flat identifiers.

**Sandbox Lifecycle & Metrics**
*   **[#1032](https://github.com/alibaba/ROCK/issues/1032) Support sandbox delete:** Proposes a `/delete` endpoint and background scan to clean up Docker containers left behind by stopped sandboxes.
*   **[#1018](https://github.com/alibaba/ROCK/issues/1018) Missing `stop_time` bug:** Highlights that `SandboxManager.stop()` skips writing `stop_time` if `start_time` is missing, leaving 771 production rows in an ambiguous state.
*   **[#1010](https://github.com/alibaba/ROCK/issues/1010) Slow cross-region `rock datasets list`:** Reports 20-30s+ latency when querying cross-region OSS buckets due to a lack of concurrency.

### 4. Key PR Progress
**Merged / Closed (Ready for Prod)**
*   **[#1036](https://github.com/alibaba/ROCK/pull/1036):** Added v1.8.x documentation detailing sandbox large-scale concurrent creation benchmarks (1k to 16k concurrency) and the ROCK scheduler user guide.
*   **[#1017](https://github.com/alibaba/ROCK/pull/1017):** Fixed a critical metrics bug where `rocklet` reported host memory instead of container cgroup memory usage (`psutil` replaced with cgroup metrics).
*   **[#1021](https://github.com/alibaba/ROCK/pull/1021):** Fixed a state machine regression where sandbox expiration reasons (`EXPIRED` vs `MANUAL`) were dropped during the `stop()` chain.

**Open (Under Active Review)**
*   **[#1038](https://github.com/alibaba/ROCK/pull/1038):** Implemented the sandbox `/delete` endpoint and auto-delete background scan.
*   **[#1025](https://github.com/alibaba/ROCK/pull/1025) & [#1029](https://github.com/alibaba/ROCK/pull/1029):** The new DB-driven `SandboxLogArchiveTask` and the 4-stage `RayLogCleanupTask`.
*   **[#1027](https://github.com/alibaba/ROCK/pull/1027):** The `ops-jobs` API for on-demand scheduler task execution.
*   **[#967](https://github.com/alibaba/ROCK/pull/967):** Performance optimization replacing `-exec rm` with native `-delete` in `FileCleanupTask`, integrated with new path safety guards.
*   **[#931](https://github.com/alibaba/ROCK/pull/931):** Introduced `Image.from_dockerfile()`, allowing the SDK to natively build and start sandboxes straight from a Dockerfile.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning requires orchestrating thousands of ephemeral, highly isolated environments (sandboxes) in parallel. As RL scales, **disk I/O and resource leakage** become critical bottlenecks that can halt entire training clusters. 

Today's activity in the ROCK ecosystem highlights a maturation phase vital for enterprise RL: **focusing on cluster survival at scale**. By implementing granular log rotation (specifically handling complex frameworks like Ray), enforcing strict cgroup container metrics, and replacing manual SSH interventions with robust SRE APIs, ROCK is solving the exact "day-two operations" problems that plague large-scale distributed RL. Combined with SDK ergonomics (like native Dockerfile support), these improvements allow AI engineers to spend less time managing infrastructure deadlocks and more time iterating on agent architectures.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: THUDM/slime
**Date:** 2026-05-28

Here is the daily digest for the `THUDM/slime` repository, a framework heavily focused on distributed reinforcement learning training and inference infrastructure.

### 1. Today's Highlights
The `slime` ecosystem saw highly active development over the past 24 hours with 17 updated Pull Requests and 3 new Issues. The core themes for today are:
*   **Stabilizing Coding Agent RL:** A massive structural refactor and bug-fixing effort was merged for the `coding_agent_rl` sandbox and middleware handling.
*   **Distributed Infrastructure Fixes:** Critical patches were submitted for GPU colocation placement groups and SGLang memory management.
*   **New Backend Support:** Introduction of the `FlashQLA` backend for Qwen Gated DeltaNet models.

### 2. Releases
*   **No new releases** were cut in the last 24 hours.

### 3. Important Issues
*   **OOM in Retool Example ([#1951](https://github.com/THUDM/slime/issues/1951)):** A user reported a critical `torch.OutOfMemoryError` (attempting to allocate 58.15 GiB) when running the `retool` example on a 4x H200 node setup after 20-50 steps. This may be tied to memory clearing logic between training and rollout phases.
*   **Environment Variable Typo ([#1966](https://github.com/THUDM/slime/issues/1966)):** Author `Chasing1020` identified that the codebase incorrectly uses `PYTHONBUFFERED` instead of the valid Python env var `PYTHONUNBUFFERED`, causing stdout/stderr buffering to silently fail to disable. 
*   **Micro-batch Scheduling Question ([#1964](https://github.com/THUDM/slime/issues/1964)):** A user inquired about the architectural necessity of sharing the same micro-batch schedule between logprob computation and training, asking if discrepancies cause accuracy degradation.

### 4. Key PR Progress
**Merged / Closed (12 PRs):**
*   **Agent RL Refactoring:** PRs [#1956](https://github.com/THUDM/slime/pull/1956), [#1957](https://github.com/THUDM/slime/pull/1957), [#1958](https://github.com/THUDM/slime/pull/1958), [#1960](https://github.com/THUDM/slime/pull/1960), and [#1961](https://github.com/THUDM/slime/pull/1961) by `zhuzilin` completely restructured the `coding_agent_rl` base, created a dedicated `slime/agent/` directory, and added corresponding documentation.
*   **Middleware & SGLang Pipeline Fixes:** PR [#1954](https://github.com/THUDM/slime/pull/1954) fixed a hard assert crash in SGLang's `release_memory_occupation` by ensuring straggler requests are drained before memory is freed. PR [#1953](https://github.com/THUDM/slime/pull/1953) added exponential backoff to the `/flush_cache` endpoint to prevent silent CPU spinning.
*   **Trajectory Logic:** PR [#1963](https://github.com/THUDM/slime/pull/1963) fixed errors in trajectory merging logic.
*   **Testing Infra:** PR [#1959](https://github.com/THUDM/slime/pull/1959) introduced `forge_load`, allowing memory testing to replay dumped rollouts while keeping SGLang alive, bypassing real generation.

**Open (5 PRs):**
*   **Colocate GPU Allocation Fix ([#1950](https://github.com/THUDM/slime/pull/1950)):** Fixes the root cause of Issue #1896, dropping an incorrect addition of critic GPUs to `rollout_num_gpus` in colocate mode that previously caused placement group crashes.
*   **FlashQLA Backend ([#1947](https://github.com/THUDM/slime/pull/1947)):** Adds `FlashQLA` support for Qwen3.5/Qwen3-Next Megatron plugins, optimizing distributed communication memory guards.
*   **Env Var Typo Fix ([#1967](https://github.com/THUDM/slime/pull/1967)):** The direct fix for Issue #1966, correcting the `PYTHONUNBUFFERED` string.
*   **Debug Data Pathing ([#1922](https://github.com/THUDM/slime/pull/1922)):** Prevents multi-GPU processes from overwriting the same debug file by auto-appending `{rollout_id}` and `{rank}` to the save path template.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—dominated by Large Reasoning Models (e.g., OpenAI o1, DeepSeek-R1) and agentic coding frameworks—infrastructure is the main bottleneck. `Slime` operates exactly where modern RL meets large-scale distributed systems: bridging Megatron-based training with high-throughput inference engines like SGLang. 

Today's digest highlights this precise need. The framework is actively solving the "colocation problem" (managing VRAM gracefully between massive training graphs and inference engines on the same GPU node). Furthermore, the heavy iteration on `coding_agent_rl` shows that `slime` is positioning itself not just as a standard PPO/GRPO trainer, but as a robust execution engine for tool-using, sandbox-environment agents (like SWE-bench solvers), which represent the absolute frontier of RL application in 2026.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-28

Here is the daily brief on the AReaL (inclusionAI) reinforcement learning ecosystem.

## 1. Today's Highlights
The AReaL ecosystem is seeing intense development in **inference-training co-design** and **fault tolerance**. The most critical update is the merging of a patch to resolve a silent FSDP bf16 optimizer state bug that degraded late-stage SFT loss convergence by ~3×. Meanwhile, the community is actively pushing infrastructure boundaries with Prefill-Decode (PD) disaggregation, on-policy distillation, and high-speed weight-syncing backends (CUDA IPC, Ray RDT).

## 2. Releases
**No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **[CLOSED] FSDP bf16 Optimizer State Bug** ([#1292](https://github.com/inclusionAI/AReaL/issues/1292)): A critical issue where `torch.optim.AdamW` silently inherited bf16 dtypes for optimizer states (`exp_avg`, `exp_avg_sq`) instead of fp32 when using FSDP. This caused late-stage convergence to plateau at roughly 3× the loss of DeepSpeed-Z3/Megatron. *Resolved via PR #1369.*
*   **[OPEN] DeepSeek-V4 Fault Tolerance** ([#1279](https://github.com/inclusionAI/AReaL/issues/1279)): A `call-for-contribution` issue to implement preemptible, fault-tolerant inference service logic inspired by the DeepSeek-V4 infrastructure within AReaL's API.
*   **[OPEN] Megatron + Qwen3.5 Training Error** ([#1317](https://github.com/inclusionAI/AReaL/issues/1317)): Users are hitting errors when integrating MTP (Multi-Token Prediction) arguments for Qwen3.5 using the Megatron backend via `mbridge`. 

## 4. Key PR Progress
*   **`fix(fsdp): maintain fp32 master weights for AdamW`** ([#1369](https://github.com/inclusionAI/AReaL/issues/1369)) [CLOSED/MERGED]: The definitive fix for Issue #1292. It decouples parameter storage dtype from forward/backward compute dtypes, ensuring proper fp32 master weights for FSDP.
*   **`feat: Support PD Disaggregation`** ([#1364](https://github.com/inclusionAI/AReaL/issues/1364)) [OPEN]: Implements Prefill-Decode disaggregation (currently DP=2, TP=1) on the `RolloutControllerV2` architecture, optimizing inference gateway routing and worker registries.
*   **`feat(awex): FSDP colocate weight update via CUDA IPC`** ([#1361](https://github.com/inclusionAI/AReaL/issues/1361)) [OPEN]: Brings high-speed CUDA IPC weight transfers to FSDP-trained models updating SGLang inference weights on shared GPUs, closing the performance gap with the existing Megatron colocate path.
*   **`feat(experimental): integrate Ray RDT for weight syncing`** ([#1305](https://github.com/inclusionAI/AReaL/issues/1305)) [OPEN]: Introduces a Ray Direct Transport (RDT) backend to optimize shard selection and RPC weight pulling for distributed RL weight synchronization.
*   **`feat: on-policy distillation using RolloutEngine`** ([#1368](https://github.com/inclusionAI/AReaL/issues/1368)) [OPEN]: Refactors distillation to use a dedicated inference-side teacher (vLLM/SGLang) rather than a train-engine path, significantly reducing VRAM overhead. 
*   **`chore: add 0516 community meeting materials`** ([#1371](https://github.com/inclusionAI/AReaL/issues/1371)) [OPEN]: Administrative update adding community meeting notes and setting the agenda for the upcoming 2026-05-30 biweekly sync.

## 5. Why This Project Matters in Today's RL Landscape
In the modern RLHF/post-training landscape, the bottleneck has shifted from the RL algorithms themselves to **systems-level infrastructure**—specifically, how efficiently massive models can transition between inference (rollouts) and training (weight updates). 

Today's AReaL digest perfectly reflects this industry shift. The resolution of the silent bf16 dtype bug (#1292) highlights the extreme precision sensitivity required for stable RL fine-tuning at scale. Furthermore, the open PRs focusing on PD disaggregation (#1364), CUDA IPC colocated weight updates (#1361), and on-policy distillation (#1368) demonstrate that AReaL is aggressively tackling the highest priorities in post-training systems: maximizing GPU utilization, reducing memory overhead, and eliminating the network/serialization bottlenecks between generation and optimization.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (huggingface/trl) — 2026-05-28

## 1. Today's Highlights
- **v1.5.1 Released**: A targeted patch release that gates trainer telemetry via an explicit class-name allowlist, preventing custom or subclassed trainers from being misreported. ([v1.5.1 Changelog](https://github.com/huggingface/trl/compare/v1.5.0...v1.5.1))
- **AsyncGRPO Takes Center Stage**: AsyncGRPO remains the primary focus of active development, receiving major updates to NCCL weight synchronization, padding-free training, rollout worker scaling, and vLLM checkpoint loading.
- **DeepSpeed & Chunked SFT Stabilization**: Two PRs address critical bugs in `loss_type="chunked_nll"` under DeepSpeed ZeRO-3 and add support for non-standard output projections (e.g., GPTNeoX), significantly improving multi-GPU SFT reliability.

## 2. Releases
- **[v1.5.1](https://github.com/huggingface/trl/releases/tag/v1.5.1)**
  - **🔒 Gate trainer telemetry on an explicit class-name allowlist** ([PR #5851](https://github.com/huggingface/trl/pull/5851)): Replaces the fragile `cls.__module__.startswith("trl.")` check with a hardcoded allowlist (`_TELEMETRY_TRAINERS`). Custom subclasses are now safely categorized as `trl/other` in telemetry.

## 3. Important Issues
- **AsyncGRPO NCCL Fallback on PCIe GPUs** ([Issue #5865](https://github.com/huggingface/trl/issues/5865)): User requests topology-aware NCCL fallback for AsyncGRPO weight sync. Currently, multi-GPU setups lacking NVLink/peer-to-peer access silently fail or hang. Proposed solution involves auto-setting `NCCL_P2P_DISABLE=1` and `NCCL_SHM_DISABLE=1`.
- **AsyncGRPO vLLM Checkpoint Inefficiency** ([Issue #5863](https://github.com/huggingface/trl/issues/5863)): Restoring from a checkpoint triggers recomputation of vLLM inference for all previously processed batches, severely bottlenecking fault-tolerance and resume workflows.
- **Tracking: Generation Markers for Chat Templates** ([Issue #5471](https://github.com/huggingface/trl/issues/5471)): Tracking issue for adding `&#123;&#37; generation &#37;&#125;` / `&#123;&#37; endgeneration &#37;&#125;` markers required for `assistant_only_loss=True`. This is actively being resolved (see PRs below).
- **GRPO vLLM Importance Sampling Explosion** ([Issue #4772](https://github.com/huggingface/trl/issues/4772)): Reports a divergence bug where `vllm_importance_sampling_ratio` can explode during GRPO training with vLLM importance sampling correction enabled.

## 4. Key PR Progress
### AsyncGRPO & Performance
- **Padding-free training in AsyncGRPO** ([PR #5854](https://github.com/huggingface/trl/pull/5854)): Replaces the padded `(B, max_len)` forward pass with a memory-efficient concatenated `(1, total_real_tokens)` sequence, making padding-free the default and only mode.
- **Rollout worker aiohttp scaling** ([PR #5861](https://github.com/huggingface/trl/pull/5861)): Sets the aiohttp connection limit to `max(100, max_inflight_tasks)` to prevent bottlenecking in distributed rollout workers.

### SFT & DeepSpeed ZeRO-3
- **Fix `loss_type="chunked_nll"` under ZeRO-3** ([PR #5873](https://github.com/huggingface/trl/pull/5873)): Resolves a crash where `lm_head.weight` is read directly, bypassing DeepSpeed's pre-forward allgather hooks. On non-owning ranks, the 0-element shard caused a matmul failure.
- **Support non-lm_head output projections** ([PR #5857](https://github.com/huggingface/trl/pull/5857)): Uses `get_output_embeddings()` API instead of hardcoded `model.lm_head`, unlocking chunked loss for GPTNeoX and similar architectures.

### Training Chat Templates
- **Add Idefics3 and SmolVLM training templates** ([PR #5871](https://github.com/huggingface/trl/pull/5871), [PR #5868](https://github.com/huggingface/trl/pull/5868)): Adds chat templates with proper `&#123;&#37; generation &#37;&#125;` markers for `assistant_only_loss` support in multimodal models.

### DPO/KTO Alignment & Bugfixes
- **KTO/DPO Refactor Continues**: A series of PRs by @albertvillanova standardize KTO behavior to match DPO—aligning ref log probability naming ([PR #5856](https://github.com/huggingface/trl/pull/5856)), adding `remove_unused_columns` support ([PR #5866](https://github.com/huggingface/trl/pull/5866)), and fixing `train_sampling_strategy` for `apo_zero_unpaired` ([PR #5872](https://github.com/huggingface/trl/pull/5872)).
- **DPO Vision Dataset Guard** ([PR #5867](https://github.com/huggingface/trl/pull/5867)): Raises an explicit error for `precompute_ref_log_probs=True` with vision datasets, preventing silent correctness failures.
- **Self-Distillation Refactor** ([PR #5862](https://github.com/huggingface/trl/pull/5862)): Proposes decoupling SDPO and SDFT as independent trainers, removing a cumbersome base class abstraction.

## 5. Why This Project Matters in Today's RL Landscape
TRL has evolved far beyond basic PPO; it is now the central hub for post-training techniques in the Hugging Face ecosystem. Today's activity underscores three key trends:

1. **Hardware Adaptability**: The AsyncGRPO NCCL fallback issue and padding-free training PRs highlight the community's push to run distributed RL efficiently across heterogeneous (including PCIe-only) GPU clusters.
2. **Post-Training as the Bottleneck**: The focus on GRPO, DPO, and KTO stabilizations (especially around DeepSpeed ZeRO-3 and vLLM integrations) reflects a broader industry truth: RLHF/post-training infrastructure is now more complex than pretraining. Fixing chunked loss sync bugs is critical for keeping training stable.
3. **Structured Generation for Fine-Tuning**: The addition of generation markers across model families ensures that masked loss computation (`assistant_only_loss`) works out-of-the-box, reducing the boilerplate needed to fine-tune with high-fidelity RL signals.

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

# RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-05-28 | **Project:** [verl-project/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
Verl experienced a highly active day with **38 updated Pull Requests** and **11 updated Issues**, highlighting rapid iteration across its distributed training backends. Key focus areas include critical bug fixes for Megatron distillation and sequence parallelism, robust improvements to checkpointing workflows, and continued expansion of hardware accelerator support (Ascend NPUs) and third-party engines (vLLM, SGLang). 

## 2. Releases
*   **New Releases:** None.

## 3. Important Issues
Developers reported several critical blockers and architectural queries today:
*   **FSDP Memory Leak & Hardware Compatibility:** A critical memory leak causing Ray OOM during FSDP2 rollout weight sync was reported in [Issue #6468](https://github.com/verl-project/verl/issues/6468). Additionally, [Issue #2803](https://github.com/verl-project/verl/issues/2803) details a persistent CUDA failure 217 (peer access unsupported) on the new **RTX 5090** GPUs during FSDP state dict updates.
*   **Sequence Parallelism & Qwen 3.5:** Users are hitting dimensional mismatch errors when training Qwen 3.5 models with Ulysses Sequence Parallelism (`sp > 1`), documented in [Issue #5762](https://github.com/verl-project/verl/issues/5762) and [Issue #6486](https://github.com/verl-project/verl/issues/6486).
*   **Chat Template Logic:** Multi-turn agent loops are susceptible to a system prompt extraction bug where `[:-0]` slicing returns an empty list ([Issue #6477](https://github.com/verl-project/verl/issues/6477)), alongside failures on alternating-role templates ([Issue #6500](https://github.com/verl-project/verl/issues/6500)).
*   **Ascend NPU Architecture:** A query regarding the Ascend HCCL checkpoint engine implementation was raised, specifically questioning why the backend registry uses the string `"nccl"` rather than `"hccl"` and why `BroadcastOperation` lacks an async thread pool ([Issue #6425](https://github.com/verl-project/verl/issues/6425)).

## 4. Key PR Progress
Today's PRs focused heavily on system stability, configuration alignment, and backend extensions:
*   **Megatron & Distillation Fixes:** [PR #6506](https://github.com/verl-project/verl/pull/6506) fixed a major shape mismatch bug ([Issue #6492](https://github.com/verl-project/verl/issues/6492)) in Megatron OPD top-k distillation for BSHD preprocessing.
*   **Checkpointing & Rollout Resiliency:** [PR #6510](https://github.com/verl-project/verl/pull/6510) introduced failover mechanisms to restore KV cache and resume generation after checkpoint update failures. [PR #6507](https://github.com/verl-project/verl/pull/6507) wires `global_steps` into checkpoint engine hooks.
*   **Backend & Rollout Engine Upgrades:** SGLang was upgraded to v0.5.12 ([PR #6435](https://github.com/verl-project/verl/pull/6435)), and a fix for `EADDRINUSE` port conflicts when launching multiple SGLang replicas was submitted ([PR #6448](https://github.com/verl-project/verl/pull/6448)). vLLM received a fix for null rollout seeds ([PR #6503](https://github.com/verl-project/verl/pull/6503)).
*   **Hardware Expansion (Ascend):** Integration continues with a bump to Megatron 016 for Ascend ([PR #6374](https://github.com/verl-project/verl/pull/6374)) and added Qwen3-VL-30B mbridge launch scripts ([PR #6504](https://github.com/verl-project/verl/pull/6504)).

## 5. Why This Project Matters in Today's RL Landscape
As post-training paradigms (like RLHF, GRPO, and distillation) become the primary drivers of LLM reasoning capabilities, the underlying infrastructure must support complex, heterogeneous distributed compute graphs. Verl is establishing itself as a highly flexible "RL middleware" for this era. Today's activity proves its necessity: by actively unifying disparate inference backends (vLLM, SGLang), training paradigms (FSDP2, Megatron), and emerging hardware accelerators (Nvidia RTX 5090, Ascend NPUs), verl drastically reduces the engineering friction required to scale RL workflows on modern, diverse GPU clusters.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

### RL Open-Source Ecosystem Daily Digest: `torchtune`
**Date:** 2026-05-28

#### 1. Today's Highlights
Activity in the `torchtune` repository over the past 24 hours has been focused entirely on maintenance and bug fixing, with no new issues, comments, or releases. Two open Pull Requests were updated, targeting distributed logging initialization bugs and missing imports in Reinforcement Learning from Human Feedback (RLHF) loss functions.

#### 2. Releases
*   **None** (0 new releases in the last 24 hours).

#### 3. Important Issues
*   **None** (0 new or updated issues in the last 24 hours).

#### 4. Key PR Progress
*   **[OPEN] [PR #2964](https://github.com/pytorch/torchtune/pull/2964) - `fix(logging): use RANK env var in log_rank_zero before dist init`**
    *   *Author:* kratos0718
    *   *Details:* Addresses a distributed logging edge case where `log_rank_zero` fell back to `rank=0` for all processes if `dist.is_initialized()` was `False` (specifically before `setup()` calls `init_process_group`). This previously caused `config.log_config` to print the full configuration on every rank rather than just rank zero. The fix relies on the `RANK` environment variable prior to explicit distributed initialization.
*   **[OPEN] [PR #2965](https://github.com/pytorch/torchtune/pull/2965) - `Fix missing imports in rlhf/loss/dpo.py`**
    *   *Author:* tmacd-meta
    *   *Details:* A straightforward import fix for Direct Preference Optimization (DPO) loss calculations, resolving `NameError` or `ImportError` bugs that would crash RLHF/DPO training pipelines.

#### 5. Why This Project Matters in Today's RL Landscape
As the RL ecosystem shifts heavily toward alignment techniques like RLHF and DPO, the underlying training infrastructure must support faultless multi-node distributed execution. `torchtune` remains a critical repository for the community because it bridges high-level LLM fine-tuning recipes with native PyTorch scalability. Though today's updates are minor maintenance patches, they represent the necessary maturation of the toolchain: fixing distributed logging race-conditions (PR #2964) ensures cleaner debugging and reduced stdout overhead, while fixing DPO import paths (PR #2965) guarantees stability for practitioners running state-of-the-art preference optimization.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-05-28

## 1. Today's Highlights
Activity over the last 24 hours shows a strong focus on tooling reliability and evaluation correctness for post-training pipelines. Nine pull requests were updated, highlighting active development in checkpoint management, curriculum sampling, and evaluation constraint fixing. Notably, contributor **Chessing234** pushed several critical bug fixes for evaluation scripts, while **TimDettmers** introduced better checkpoint management for training runs.

## 2. Releases
* **No new releases** were published today.

## 3. Important Issues
* **No active issues** were updated in the last 24 hours.

## 4. Key PR Progress
Significant pull request activity indicates rapid iteration on GRPO (Group Relative Policy Optimization) and evaluation infrastructure:

* **Checkpoint Management & Scaling:** In [PR #1701](https://github.com/allenai/open-instruct/pull/1701), **TimDettmers** wires `keep_last_n_checkpoints` across SFT, DPO, and GRPO training paths, ensuring efficient storage management during long training runs.
* **GRPO Evaluation Infrastructure:** **mnoukhov** expanded GRPO capabilities by integrating `olmo-eval beaker launch` directly into `grpo.py` and `grpo_fast.py` via [PR #1698](https://github.com/allenai/open-instruct/pull/1698). 
* **Advanced RL Sampling & Filtering:** 
  * **undfined** opened [PR #1692](https://github.com/allenai/open-instruct/pull/1692) to introduce a difficulty curriculum sampler, a key technique for improving sample efficiency in RL fine-tuning.
  * **mnoukhov**'s [PR #1681](https://github.com/allenai/open-instruct/pull/1681) (recently closed) introduced gradient masking based on Total Variation (TV) divergence (TVPO), filtering out low-quality token updates.
* **Evaluation & Script Correctness:** 
  * **Chessing234** identified and patched faulty substring matching in `validate_choice` using regex word boundaries ([PR #1700](https://github.com/allenai/open-instruct/pull/1700)).
  * Fixed reversed operands in `validate_choice` logic across eval scripts ([PR #1699](https://github.com/allenai/open-instruct/pull/1699) and closed [PR #1651](https://github.com/allenai/open-instruct/pull/1651)).
* **Tooling and Quality Assurance:** **finbarrtimbers** improved repo health by expanding type-checking coverage ([PR #1688](https://github.com/allenai/open-instruct/pull/1688), closed) and standardizing CSV handling/pathing in benchmark generators ([PR #1684](https://github.com/allenai/open-instruct/pull/1684)).

## 5. Why This Project Matters in Today's RL Landscape
As the AI community shifts heavily toward Reinforcement Learning from Human Feedback (RLHF) and post-training alignment, the stability of underlying training and evaluation frameworks is critical. Today's updates to **Open Instruct** reflect a maturing RL ecosystem: contributors are moving beyond naive implementations toward robust, production-grade infrastructure. 

Implementations like TV divergence filtering (VACO/TVPO) and difficulty curriculum sampling represent the cutting edge of RL sample efficiency. Concurrently, fixing faulty evaluation metrics (like `validate_choice` false positives) and managing checkpoint limits across SFT/DPO/GRPO pipelines are exactly the engineering hurdles required to scale large language models reliably without silent reward-hacking or evaluation failures.

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

### 1. Today's Highlights
For May 28, 2026, the Gymnasium repository experienced minimal structural changes but featured a highly targeted performance optimization Pull Request. Activity consisted of 0 new issues, 0 new releases, and 1 updated PR focused on rendering efficiency.

### 2. Releases
No new releases were deployed today. The repository maintains its current stable version.

### 3. Important Issues
There are no new or updated issues to report in the last 24 hours. 

### 4. Key PR Progress
*   **Performance Optimization in Pygame Rendering:** 
    *   **PR:** [Farama-Foundation/Gymnasium #1586](https://github.com/Farama-Foundation/Gymnasium/pull/1586) (Status: OPEN)
    *   **Author:** @midhunxavier
    *   **Summary:** This PR proposes replacing the blanket `pygame.init()` call with `pygame.display.init()` (and `pygame.font.init()` specifically where text rendering is required) across all environments and wrappers. 
    *   **Technical Impact:** `pygame.init()` initializes *all* available Pygame subsystems (audio mixers, joysticks, CDROM), which are largely unnecessary for standard RL visual state rendering. This refactor reduces computational overhead and memory footprint, which is particularly beneficial for high-throughput, massively parallel RL training loops.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent reinforcement learning in Python. As the RL field matures in 2026, the bottleneck frequently shifts from algorithmic computation to environment throughput. Optimizations like the one proposed in PR #1586 are critical; stripping unnecessary subsystem initializations (like audio or joystick modules) directly accelerates environment stepping times. This allows researchers and engineers to maximize hardware utilization during large-scale distributed training runs, proving that foundational API maintenance is just as vital as novel algorithmic research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# RL Open-Source Daily Digest: PettingZoo
**Date:** 2026-05-28 | **Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

Here is your daily brief on the multi-agent reinforcement learning (MARL) ecosystem.

### 1. Today's Highlights
Activity over the last 24 hours shows a strong focus on maintenance, bug squashing, and developer experience for PettingZoo. While no new issues or releases were published today, five existing Pull Requests received updates. Key themes include patching environment physics, resolving seeding reproducibility bugs, addressing a medium-severity security vulnerability, and expanding environment wrappers.

### 2. Releases
*   **No new releases** detected in the last 24 hours.

### 3. Important Issues
*   **0 new issues** were opened or updated in the last 24 hours. 
*(Note: Several PRs pushed today address long-standing issues, such as PR #1336 which targets ball physics in issue #1289).*

### 4. Key PR Progress
Several significant pull requests saw updates today, highlighting active quality assurance by the community:

*   **[Security] Path Traversal Patch ([PR #1338](https://github.com/Farama-Foundation/PettingZoo/pull/1338))**: A medium-severity security patch fixing a path traversal vulnerability in the `get_image()` function within `knights_archers_zombies`. 
*   **[Bug Fix] Gin Rummy Seeding ([PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335))**: Fixes a critical reproducibility bug where `reset(seed=...)` silently reverted `knock_reward` and `gin_reward` to RLCard defaults (fixes #1312). This is a vital fix for researchers requiring strict seeding.
*   **[Bug Fix] Pong Physics ([PR #1336](https://github.com/Farama-Foundation/PettingZoo/pull/1336))**: Resolves a bug in Cooperative Pong where wall bounce physics were not behaving as expected (fixes #1289).
*   **[Feature] RecordVideo Wrappers ([PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306))**: Introduces a direct port of the `RecordVideo` wrapper from Gymnasium to PettingZoo. This streamlines MARL visualization without requiring dependencies on third-party libraries like SB3 or TorchRL.
*   **[Refactor] Knights Archers Zombies V11 ([PR #1297](https://github.com/Farama-Foundation/PettingZoo/pull/1297))**: A massive overhaul replacing multiple fragmented observation parameters (`vector_state`, `use_typemasks`) with a unified `obs_method`, alongside spawning bug fixes.

### 5. Why This Project Matters in Today's RL Landscape
As the standard multi-agent counterpart to Gymnasium, PettingZoo remains a foundational piece of the Farama Foundation's RL infrastructure. Today's digest highlights exactly *why* this project is critical: standardizing multi-agent environments isn't just about providing algorithms; it's about guaranteeing **reproducibility** and **security**. 

Fixes like PR #1335 (gin_rummy seeding) ensure that MARL researchers can trust their experimental baselines, while security patches like PR #1338 ensure that standardizing observation spaces and graphical assets doesn't introduce attack vectors into ML pipelines. Combined with quality-of-life features like native video recording (PR #1306), PettingZoo continues to lower the barrier to entry for robust MARL research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 — 2026-05-28

## 1. Today's Highlights
Activity on the Stable Baselines3 (SB3) repository over the last 24 hours was highly focused, with minimal noise and a clear thematic priority: **resolving compatibility edge cases between SB3's preprocessing assumptions and modern Gymnasium wrappers**. The spotlight is on how SB3 handles stacked image observations.

## 2. Releases
**None.** 
No new versions or patches were released in the past 24 hours. The repository maintainers are currently managing community contributions and bug tracking rather than rolling out new builds.

## 3. Important Issues
*   **[Bug & Documentation]: `is_image_space` breaks with Gymnasium's `FrameStackObservation`**
    *   **Issue:** [#2090](https://github.com/DLR-RM/stable-baselines3/issues/2090)
    *   **Author:** fracapuano (Updated: 2026-05-27 | Comments: 6)
    *   **Summary:** The utility function `is_image_space` in `stable_baselines3.common.preprocessing` fails to correctly identify image spaces when Gymnasium's native `FrameStackObservation` is applied. Because the wrapper introduces a new *leading* dimension (e.g., an RGB image shape `(3, 64, 64)` becomes `(2, 3, 64, 64)` when stacking 2 frames), it violates SB3's expected shape heuristics for image channels, causing downstream errors in feature extraction (like NatureCNN). 

## 4. Key PR Progress
*   **[Documentation Fix]: Warning against naive usage of `FrameStackObservation`**
    *   **Pull Request:** [#2258](https://github.com/DLR-RM/stable-baselines3/pull/2258)
    *   **Author:** midhunxavier (Created/Updated: 2026-05-27)
    *   **Summary:** Directly addressing the ongoing discussion in Issue #2090, this PR proposes adding explicit warnings to SB3's custom-environment documentation. It alerts users that `FrameStackObservation` alters spatial dimensions in ways that confuse SB3's `is_image_space` checks, advising alternative wrapping strategies or manual space handling to ensure CNNs receive correctly shaped tensors.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, modular, and easy-to-use Reinforcement Learning algorithms. As the underlying Gymnasium (formerly OpenAI Gym) API continues to evolve independently, subtle breaking changes—such as dimension transpositions in observation wrappers—can quietly break established RL pipelines. The focused work on Issues like #2090 and PRs like #2258 highlights SB3's continued commitment to stability. By rigorously documenting these edge cases, the maintainers ensure that researchers and engineers deploying vision-based RL agents (which rely heavily on frame-stacking for temporal dynamics) can avoid silent training failures.

</details>