# RL Open Source Daily Digest 2026-07-21

> Generated: 2026-07-20 22:17 UTC | Projects covered: 15

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
The Reinforcement Learning open-source ecosystem on 2026-07-21 shows a clear bifurcation of focus areas, driven by the demands of Large Language Model (LLM) and Multi-Modal alignment. 
*   **LLM/Multimodal Infrastructure:** Massive engineering momentum is concentrated in post-training frameworks (`verl`, `TRL`, `slime`, `AReaL`). These projects are solving severe distributed systems bottlenecks related to disaggregated inference, memory management, and massive weight synchronization for PPO/GRPO.
*   **RL Simulation & Environments:** Lower-level simulation APIs (`Gymnasium`, `PettingZoo`) are focusing on stability, visual overhauls, and hardware acceleration (e.g., JAX, MJX).
*   **Production Platforms:** Orchestrators like `ROCK` are dedicated to cluster resilience, sandbox lifecycle management, and observability to keep long-running RLHF jobs alive.

## Activity Comparison

*Note: Metrics reflect the 24-hour snapshot provided.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 59 | 22 | 0 | Extreme velocity in distributed memory optimization, FSDP2/MoE scaling, and multi-hardware support. |
| **TRL** | 6 | 12+ | 0 | Massive architectural refactor; formalizing on-policy distillation and hardening GRPO. |
| **ROCK** | 10 | 13 | 0 | Stabilizing RL orchestration; enhancing sandbox lifecycles and Admin networking. |
| **AReaL** | 3 | 7 | 0 | Rapid patching of PPO data pipelines and critical SSRF security vulnerabilities. |
| **slime** | 1 | 10 | 0 | Deep integration of custom hardware (MUSA) and high-throughput rollout transport (RDMA). |
| **Gymnasium** | 3 | 5 | 0 | Core stability fixes for AsyncVectorEnv and MuJoCo rendering; improving JAX wrappers. |
| **PettingZoo** | 0 | 8 | 0 | API modernization (unified env registry) and physics rendering overhauls. |
| **Open Instruct** | 1 | 1 | 0 | Low volume, high impact; expanding to alternative silicon (Ascend NPU). |
| **CleanRL, OpenRLHF, rl_games, ROLL, SB3, Tianshou, torchtune** | 0 | 0 | 0 | *No activity in the last 24 hours.* |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **On-Policy Distillation & GRPO:** As seen in `TRL` (consolidating `DistillationTrainer`) and `verl` (handling GRPO replay buffers), the field is standardizing on-policy methods over off-policy mixing, specifically optimizing Group Relative Policy Optimization (GRPO) by filtering "dead" (zero-variance) rollout groups.
*   **Multi-Turn & Agentic RL:** Moving beyond single-turn prompt generation, frameworks are aggressively building out pipelines for multi-turn tool-calling trajectories and dynamic environments (`verl`, `AReaL` Arena Stream integration).

**Engineering & Infrastructure Signals**
*   **Hardware Diversification (The Anti-Nvidia Push):** A massive shared effort to stabilize RL workloads on alternative silicon. `verl`, `Open Instruct`, `AReaL`, and `slime` are all explicitly merging backend support or fixing critical bugs for Huawei Ascend NPUs, AMD ROCm, and Moore Threads MUSA.
*   **Disaggregated Rollout Memory Triage:** The "GPU memory wall" is being dismantled via highly optimized sleep/wake cycles for KV caches, sharded delta weight synchronization over NCCL/RDMA, and deferred gradient syncing (`verl`, `slime`, `AReaL`).
*   **Silent Data Corruption Prevention:** As models scale to 235B+ parameters, strict "fail-closed" data validation is being implemented in PPO pipelines to prevent malformed log-probs and token-prefix mismatches from ruining weeks of compute (`AReaL`, `verl`).

## Differentiation Analysis
*   **Algorithmic APIs vs. Systems Engineering:** `TRL` focuses on clean, accessible algorithmic implementations for the Hugging Face ecosystem, heavily refactoring trainer APIs and dataset formats. In contrast, `verl`, `slime`, and `AReaL` are operating at the raw metal level—managing tensor parallelism (TP), context parallelism (CP), Megatron-LM bridges, and vLLM/SGLang hot-weight updates.
*   **Abstraction Layers:** `ROCK` differentiates itself by ignoring model algorithms entirely to solve distributed platform engineering—specifically keeping Ray clusters alive and managing thousands of stateful sandboxes.
*   **Classical vs. LLM RL:** While LLM frameworks dominate today's velocity, `Gymnasium` and `PettingZoo` remain focused on physics fidelity, framebuffers, and strict turn-order management, which are foundational for non-LLLM (or LLM-tool) agents.

## Community Momentum & Maturity
*   **Strict Governance:** Projects are tightening contribution pipelines. `TRL` is enforcing branch protection rulesets to prevent direct commits to `main`, while `ROCK` is enforcing strict AES key management.
*   **Rapid Security Response:** `AReaL` demonstrated mature, enterprise-grade responsiveness by immediately patching an SSRF vulnerability in its model registry endpoint within the 24-hour window.
*   **Documentation Maturation:** Both `PettingZoo` and `Gymnasium` are dedicating core maintainer time to visual documentation—`PettingZoo` migrating to a unified env registry, `Gymnasium` replacing random-agent GIFs with trained SB3 policies to set accurate baselines for newcomers.

## Trend Signals
*   **Compute Export Constraints are Working:** The sheer volume of PRs targeting Huawei Ascend NPUs and domestic Chinese GPUs (Moore Threads MUSA) indicates that open-source RL ecosystems are aggressively decoupling from NVIDIA-only roadmaps to serve global compute constraints.
*   **The Rise of "Hot-Weight" Rollouts:** Synchronous training is becoming a bottleneck. Frameworks are pivoting to asynchronous paradigms where inference engines (vLLM/SGLang) receive delta weights via RDMA/Mooncake or NCCL without dropping their KV caches.
*   **FP8 Standardization:** FP8 is moving from pre-training into complex RLHF workloads. `AReaL`'s integration of Megatron FP8 weight transfer to AWEX inference mode without BF16 dequantization signals a new baseline for RL throughput.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK (alibaba/ROCK) Reinforcement Learning ecosystem.

# 📊 ROCK RL Ecosystem Daily Digest — 2026-07-21

## 1. Today's Highlights
Today's development was heavily focused on **Sandbox stability** and **Admin service observability & security**. The community successfully merged a series of critical bug fixes addressing sandbox lifecycle transitions and connection health. Concurrently, new features were introduced to optimize Admin multi-worker networking via `SO_REUSEPORT` and enforce strict AES key management.

- **Issues:** 10 updated (7 closed, 3 new)
- **Pull Requests:** 13 updated (8 merged/closed, 5 new)
- **Releases:** 0 new releases.

## 2. Releases
* **No new releases** were cut in the last 24 hours. 
* *Note:* Versioned documentation for **ROCK v1.10** (English and Simplified Chinese) was successfully merged and registered in Docusaurus, indicating a v1.10.x release stabilization phase. ([PR #1270](https://github.com/alibaba/ROCK/pull/1270))

## 3. Important Issues

**Newly Opened:**
* **[#1266](https://github.com/alibaba/ROCK/issues/1266) [Admin/Perf]: Use `SO_REUSEPORT` per-worker listeners.** Addresses an accept-load bottleneck when Uvicorn spawns multiple workers from a single parent socket.
* **[#1265](https://github.com/alibaba/ROCK/issues/1265) [Admin/Security]: Load AES encryption key exclusively from YAML.** Closes a potential misconfiguration vector where keys could be dynamically rotated via Nacos or auto-generated at runtime, which could result in hidden deployment inconsistencies.
* **[#1263](https://github.com/alibaba/ROCK/issues/1263) [Sandbox/Perf]: Support per-sandbox automatic archive and delete deadlines.** Proposes configurable lifecycles to optimize compute resource utilization in long-running RL clusters.

**Recently Resolved:**
* **[#1255](https://github.com/alibaba/ROCK/issues/1255) [Resilience]: Unhealthy Ray Client connections.** ROCK Admin long-lived connections will now automatically detect and recover from Ray Head/GCS restarts.
* **[#1257](https://github.com/alibaba/ROCK/issues/1257) & [#1238](https://github.com/alibaba/ROCK/issues/1238) [Sandbox SDK]: API response inconsistencies.** Fixed issues where disk quotas were missing from the `StartResponse` and empty statuses were returned during pending-to-running transitions.

## 4. Key PR Progress

**Merged / Completed:**
* **[PR #1256](https://github.com/alibaba/ROCK/pull/1256) - Recover Unhealthy Ray Client Connections:** Implements a 60-second health probe checking both local initialization and cluster RPCs, automatically triggering the serialized retry path if sessions die.
* **[PR #1261](https://github.com/alibaba/ROCK/pull/1261) - Preserve Exception Tracebacks:** Fixes a critical logging blind spot where `StandardFormatter` dropped `exc_info`. Tracebacks are now preserved and configurable via YAML.
* **[PR #1247](https://github.com/alibaba/ROCK/pull/1247) - Guard Pending Status Transitions:** Fixes a race condition where concurrent status refreshes caused `SandboxManager.get_status` to fail when advancing from `Pending` to `Running`.

**Newly Proposed:**
* **[PR #1268](https://github.com/alibaba/ROCK/pull/1268) - Enforce YAML AES Key:** Moves `aes_encrypt_key` to top-level YAML and fails Admin startup if missing.
* **[PR #1267](https://github.com/alibaba/ROCK/pull/1267) - Uvicorn `SO_REUSEPORT`:** Implements `_create_reuse_port_socket` to enable kernel-level load balancing across multiplexed Admin workers.
* **[PR #1262](https://github.com/alibaba/ROCK/pull/1262) - Persistent OpenSandbox Sessions:** Implements `create_session`, `run_in_session`, and `close_session` via the official SDK, persisting mappings in Redis with owner-checked reservations to ensure continuity across Admin workers.

## 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning—particularly with the rise of LLM-driven RLHF and multi-agent systems—infrastructure reliability is the primary bottleneck. RL workloads require maintaining thousands of stateful sandboxes and distributed compute graphs over long horizons. 

ROCK’s activity today perfectly illustrates the engineering required to stabilize RL at scale:
1. **Compute Graph Resilience:** Auto-recovering Ray client connections ([PR #1256](https://github.com/alibaba/ROCK/pull/1256)) ensures that distributed RL training survives node failures and GCS restarts without dropping experiments.
2. **Resource Optimization:** Implementing strict sandbox lifecycles and 50G default quotas ([Issue #1263](https://github.com/alibaba/ROCK/issues/1263)) prevents "zombie" environments from exhausting cluster memory, a notoriously difficult problem in high-throughput environment simulation.
3. **Observability:** Fixing log tracebacks ([PR #1261](https://github.com/alibaba/ROCK/pull/1261)) and pending-state reporting ([PR #1247](https://github.com/alibaba/ROCK/pull/1247)) gives researchers the granular, real-time feedback required to debug environment reward loops and container pulls.

By solving these foundational platform challenges, ROCK allows data scientists to focus strictly on reward modeling and policy optimization rather than distributed systems engineering.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for `THUDM/slime` on 2026-07-21.

### 1. Today's Highlights
Slime shows active development focused on **inference engine integration, MoE weight updates, and hardware compatibility**. Today’s updates highlight the project's ongoing efforts to stabilize weight broadcasting during async training, fix tensor parallelism (TP) edge cases, and expand backend support for emerging hardware and complex multimodal architectures. 

### 2. Releases
* **None:** No new releases were published in the last 24 hours.

### 3. Important Issues
* **[Issue #2222](https://github.com/THUDM/slime/issues/2222) - TP-based gibberish output on SGLang after weight conversion:** 
  A user reported a critical inference degradation when deploying Qwen3.5-27B. After converting HF weights to `torch_dist` and back to HF for SGLang deployment, the model exclusively outputs repeated `'！'` characters under `tp=4` or `tp=8`. The model functions normally at `tp=1/2`. This suggests a potential weight-sharding or conversion mismatch during high-TP rollouts that needs investigation.

### 4. Key PR Progress
**Architecture & Hardware Support**
* **[PR #2216](https://github.com/THUDM/slime/pull/2216):** Adds backend-aware MUSA (Moore Threads GPU) support, centralizing device management while preserving the standard CUDA execution path.
* **[PR #2075](https://github.com/THUDM/slime/pull/2075):** Implements support for Qwen3.5-VL (dense + MoE) via NVIDIA Megatron-Bridge.
* **[PR #1709](https://github.com/THUDM/slime/pull/1709):** Introduces Mooncake RDMA transport for rollout data, optimizing high-throughput data transfer.

**Training & Rollout Bug Fixes**
* **[PR #2224](https://github.com/THUDM/slime/pull/2224):** Fixes an edge case where resuming async non-colocate training with a reference model caused the first `update_weights()` call to broadcast reference weights instead of actor weights.
* **[PR #2221](https://github.com/THUDM/slime/pull/2221):** Backports output-gate slicing for Megatron to fix failures when `num_query_groups < tensor_model_parallel_size`.
* **[PR #2192](https://github.com/THUDM/slime/pull/2192) & [PR #2193](https://github.com/THUDM/slime/pull/2193):** Addresses MoE-specific weight update bugs. #2192 fixes FlashInfer MoE block-layout restoration after BF16 hot updates, and #2193 preserves the expert axis during GLU rechunking. 
* **[PR #2223](https://github.com/THUDM/slime/pull/2223) [CLOSED]:** A closed attempt to fix the `--save-hf` functionality.

### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) scale to massive sizes and complex architectures (like Mixture of Experts and Vision-Language), the bottleneck in Reinforcement Learning (RLHF/GRPO) has shifted from model training to **rollout/inference orchestration**. 

Slime acts as a crucial bridge in this ecosystem, tightly coupling distributed training frameworks (like Megatron-LM) with high-throughput inference engines (like SGLang). The PRs tracked today—ranging from RDMA data transport for rollouts, FlashInfer MoE hot-updates, to Mooncake/MUSA hardware support—demonstrate that Slime is solving the most pressing infrastructural challenges in modern RL: achieving seamless, zero-overhead weight synchronization between the training actor and the inference engine without breaking tensor-parallelism sharding rules.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# 📊 RL Open-Source Ecosystem Digest: AReaL
**Date:** 2026-07-21 | **Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

## 1. Today's Highlights
AReaL experienced a highly active day focused on **system robustness and security**, driven by rapid community bug reporting and immediate patching. Key developments include hardening PPO data pipelines against malformed provider evidence, patching a critical Server-Side Request Forgery (SSRF) vulnerability in the inference data proxy, and advancing native FP8/Ascend hardware support.

## 2. Releases
*   **New Releases:** 0
*   *Note:* The repository remains on its current stable track, with active development consolidated into open feature and bug-fix branches.

## 3. Important Issues
The community identified three critical issues in the last 24 hours, spanning data correctness and infrastructure security:
*   **Data Pipeline Correctness:** 
    *   [Issue #1552](https://github.com/areal-project/AReaL/issues/1552): Malformed provider sampling evidence can infiltrate PPO rollouts, potentially corrupting logprob projections and token IDs.
    *   [Issue #1551](https://github.com/areal-project/AReaL/issues/1551): The experimental `concat` path erroneously reuses parent evidence across token-prefix mismatches, risking silent generation-state corruption.
*   **Security Vulnerability:**
    *   [Issue #1549](https://github.com/areal-project/AReaL/issues/1549): An unauthenticated `register_model` endpoint in the inference-service data proxy allows threat actors to perform SSRF attacks by feeding arbitrary upstream URLs into the internal model registry.

## 4. Key PR Progress
Developers demonstrated rapid turnaround, opening highly targeted PRs to address the reported issues and expand infrastructure compatibility:
*   **Security & Correctness Fixes:**
    *   [PR #1550](https://github.com/areal-project/AReaL/pull/1550): Instantly mitigates the SSRF vulnerability by requiring an admin key for `/register_model`.
    *   [PR #1554](https://github.com/areal-project/AReaL/pull/1554): Resolves Issue #1552 by adding "fail-closed" validation for non-finite or positionally inconsistent evidence across both vLLM and general providers.
    *   [PR #1553](https://github.com/areal-project/AReaL/pull/1553): Resolves Issue #1551 by enforcing strict parent token prefix preservation before recursive tensor projections in the experimental concat path.
*   **Feature Integrations:**
    *   [PR #1547](https://github.com/areal-project/AReaL/pull/1547): Adds a highly requested **Arena Stream rollout integration**, enabling online dataset discovery and task management for SWE rollouts.
*   **Performance & Hardware Compatibility:**
    *   [PR #1406](https://github.com/areal-project/AReaL/pull/1406): Brings **Megatron FP8 weight transfer** to the AWEX mode, eliminating costly BF16 dequantization and synchronizing `scale_inv` outputs with SGLang.
    *   [PR #962](https://github.com/areal-project/AReaL/pull/962): Resolves a persistent VLM training bug on the Ascend hardware branch.
*   **Merged Updates:** [PR #1497](https://github.com/areal-project/AReaL/pull/1497) (Closed/Merged) successfully aligned Context Parallelism (CP) metrics and Tensor Parallelism (TP) grad norm metadata in the Megatron engine.

## 5. Why This Project Matters in Today's RL Landscape
As RLHF/RLAIF scales to massive trillion-parameter models, the bottleneck shifts from the RL algorithms themselves to distributed systems engineering. AReaL is establishing itself as a critical open-source infrastructure layer by directly tackling these frontier challenges:
1.  **Multi-Engine Orchestration:** Natively bridging high-performance training backbones (Megatron) with high-throughput inference engines (vLLM, SGLang) while managing complex states (e.g., FP8 transfers, CP/TP metrics).
2.  **Environment Diversity:** Expanding rollout capabilities to dynamic, agentic environments (Arena Stream) and diverse hardware backends (Ascend), reflecting the industry's pivot from static text RL towards agentic and multimodal pipelines.
3.  **Production-Grade Reliability:** Today's rapid patching of PPO data contracts and proxy vulnerabilities highlights a mature engineering culture. In large-scale RL, silent data corruption (e.g., malformed logprobs) can ruin days of compute; AReaL's strict "fail-closed" data validation makes it a highly dependable framework for enterprise-scale research.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily digest for the TRL (Transformer Reinforcement Learning) repository.

### 1. Today's Highlights
The TRL ecosystem saw a massive structural pivot on **2026-07-20**, driven primarily by Hugging Face maintainer `qgallouedec`. The core focus was a massive refactor of the `DistillationTrainer` to stabilize on-policy logit distillation—a technique now standard in frontier models like DeepSeek-V4, GLM-5, and Qwen3.x. Additionally, critical FSDP2/DeepSpeed bugs affecting `precompute_ref_log_probs` in DPO/KTO trainers were addressed, and repository governance was tightened to enforce PR-only commits to `main`.

### 2. Releases
No new releases were cut in the last 24 hours.

### 3. Important Issues
*   **Distillation Trainer Stabilization ([#6449](https://github.com/huggingface/trl/issues/6449)):** With 5 experimental trainers for logit distillation and 0 stable, a major refactor has been kicked off to consolidate and promote `DistillationTrainer` to a stable API.
*   **FSDP2 Precompute Crashes ([#6470](https://github.com/huggingface/trl/issues/6470)):** A critical device mismatch bug was reported where `precompute_ref_log_probs=True` crashes under FSDP2 because the reference forward runs before the model is prepared (params remain on CPU).
*   **Multi-GPU KTO Test Coverage ([#6471](https://github.com/huggingface/trl/issues/6471)):** A call to add distributed (DDP/Zero2/Zero3) test coverage for KTO reference log-prob precomputation to match recent DPO fixes. 
*   **Single-Rollout Asynchronous Optimization ([#6473](https://github.com/huggingface/trl/issues/6473)):** Feature request to implement a new asynchronous optimization method based on [arXiv:2607.07508](https://arxiv.org/abs/2607.07508).
*   **Repo Governance ([#6462](https://github.com/huggingface/trl/issues/6462)):** Maintainers are pushing for strict branch protection rulesets after a direct commit to `main` required an emergency reversion.
*   **Excluding Dead Groups in GRPO ([#6367](https://github.com/huggingface/trl/issues/6367) - CLOSED):** A highly relevant feature discussion on modifying GRPO's loss denominator to exclude zero-variance/dead groups (where all sampled completions receive the same reward), which bloats the loss denominator under binary reward models.

### 4. Key PR Progress
*   **The `DistillationTrainer` Refactor Sequence:** A staggering **12 PRs** were pushed today to systematically refactor distillation. 
    *   **Phase 1 (Cleanup):** Extracted the teacher-server path to `ServerDistillationTrainer` ([#6454](https://github.com/huggingface/trl/pull/6454)), removed top-k support ([#6456](https://github.com/huggingface/trl/pull/6456)), and replaced tokenizer identity checks with vocab size checks ([#6457](https://github.com/huggingface/trl/pull/6457)).
    *   **Phase 2 (On-Policy Pivot):** Deprecated the `lmbda` off-policy mixing parameter ([#6458](https://github.com/huggingface/trl/pull/6458), [#6460](https://github.com/huggingface/trl/pull/6460)). The trainer is now explicitly *always on-policy*.
    *   **Phase 3 (Dataset Alignment):** Transitioned datasets from conversational `messages` to a GRPO-shaped `prompt` column format ([#6461](https://github.com/huggingface/trl/pull/6461), [#6474](https://github.com/huggingface/trl/pull/6474)).
    *   *See the full tracker here: [#6449](https://github.com/huggingface/trl/issues/6449).*
*   **DeepSpeed/DPO Precompute Fixes ([#6403](https://github.com/huggingface/trl/pull/6403) - CLOSED):** Fixed the `precompute_ref_log_probs=True` crash under DeepSpeed ZeRO-3 for DPO (and implicitly KTO) by deferring precompute until after model preparation.
*   **Preference Data Prefix Extraction Fixes ([#6433](https://github.com/huggingface/trl/pull/6433), [#6472](https://github.com/huggingface/trl/pull/6472) - CLOSED):** Squashed bugs in `extract_prompt` and `apply_chat_template` that silently dropped leading tokens from `chosen` sequences when prompt common prefixes shrank.
*   **LiquidAI LFM2 Support ([#6428](https://github.com/huggingface/trl/pull/6428) - OPEN):** Added architecture support and testing for LFM2 and LFM2.5, which currently see ~1,000 weekly runs via HF telemetry.
*   **Online DPO Eval Crash Fix ([#6122](https://github.com/huggingface/trl/pull/6122) - OPEN):** Overrides `prediction_step` in `OnlineDPOTrainer` to prevent `TypeError` crashes when `eval_strategy="steps"` is utilized.

### 5. Why This Project Matters in Today's RL Landscape
As we move deeper into the post-pretraining era, pure supervised fine-tuning (SFT) is no longer sufficient to squeeze reasoning capabilities out of LLMs. TRL is quickly adapting to the frontier demands of 2026—specifically **on-policy distillation** and **GRPO scaling**. 

The aggressive, systematic refactor of the `DistillationTrainer` seen today proves that the open-source community is rapidly formalizing the exact training methodologies used by proprietary titans (DeepSeek, Qwen). By converging distillation, DPO, and GRPO under unified, strictly on-policy dataset formats and resolving FSDP2/DeepSpeed distributed memory bottlenecks, TRL continues to democratize state-of-the-art alignment.

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

Here is the RL ecosystem daily digest for `verl` based on the July 21, 2026 data snapshot.

# 📊 verl RL Daily Digest — 2026-07-21

## 1. Today's Highlights
* **High Development Velocity:** The `verl` ecosystem saw 22 active PRs and 59 issue updates in the last 24 hours, indicating rapid iteration in scaling complex Reinforcement Learning (RL) workloads.
* **Performance & Architecture Push:** A massive focus is currently on compute and memory efficiency. Key new PRs target deferred gradient syncs, device-host synchronization reduction, and highly optimized weight synchronization for large-scale FSDP2 and MoE architectures.
* **Hardware & Backend Maturation:** Significant engineering effort is being channeled into stabilizing RL training and inference on non-NVIDIA hardware (specifically Ascend NPU) and streamlining Async PPO paradigms.

## 2. Releases
* **None.** No new official releases were published in the last 24 hours. Development remains concentrated in the `master` branch via active PRs.

## 3. Important Issues
Developers are actively reporting and resolving edge cases in distributed training and multi-modal agentic RL:
* **Multi-Turn & Agentic RL Inconsistencies:** [Issue #3720](https://github.com/volcengine/verl/issues/3720) (👍 6) highlights a critical tokenization mismatch between training and inference in multi-turn rollout loops. Additionally, [Issue #3697](https://github.com/volcengine/verl/issues/3697) points to the SGLang rollout engine normalizing outputs and stripping tool-call JSON trajectories.
* **Algorithmic Stability at Scale:** Training large MoE models with multi-turn tool calling (up to 235B parameters) is producing NCCL Broadcast Timeouts ([Issue #3704](https://github.com/volcengine/verl/issues/3704)). Meanwhile, resuming Vision-Language Model (VLM) PPO training is leading to sudden, dramatic spikes in KL loss ([Issue #3693](https://github.com/volcengine/verl/issues/3693)).
* **Hardware & Infrastructure Edge Cases:** AMD MI210 clusters are throwing HIP invalid device function errors during RL rollouts ([Issue #3680](https://github.com/volcengine/verl/issues/3680)), while Megatron-LM backends are experiencing Ray CPU OOMs due to log-prob calculations unnecessarily upcasting `bfloat16` to `float32` ([Issue #3650](https://github.com/volcengine/verl/issues/3650)).
* **Roadmap Tracking - Sharded Delta Weight Sync:** [Issue #7060](https://github.com/volcengine/verl/issues/7060) is tracking the recently merged NCCL-based sharded delta weight sync, a major architectural leap for disaggregated rollout efficiency.

## 4. Key PR Progress
The contributor base is heavily focused on systemic performance bottlenecks and architectural extensions:
* **Training Performance Optimizations:** Three highly impactful PRs were updated today: 
  * [PR #7095](https://github.com/volcengine/verl/pull/7095) introduces deferred gradient synchronization during FSDP micro-batch accumulation, drastically cutting down unnecessary reduce-scatter operations.
  * [PR #7096](https://github.com/volcengine/verl/pull/7096) defers scalar metric materialization (`.item()`), mitigating expensive device-to-host synchronization points.
  * [PR #7097](https://github.com/volcengine/verl/pull/7097) optimizes dynamic batching by reusing jagged rows, preventing repetitive tensor unbinding.
* **Async PPO & Rollout Memory Management:** [PR #7082](https://github.com/volcengine/verl/pull/7082) unifies V1 ReplayBuffer eviction/refill handling for DAPO-filtered and failed rollout groups. Alongside this, [PR #6991](https://github.com/volcengine/verl/pull/6991) refines vLLM sleep modes to release only KV cache memory while keeping rollout weights resident, optimizing the sleep/wake cycle.
* **Advanced Context & Attention Scaling:** [PR #6689](https://github.com/volcengine/verl/pull/6689) (Draft) proposes integrating prefix-tree MAGI attention for shared-prefix deduplication in SFT and GRPO. [PR #6555](https://github.com/volcengine/verl/pull/6555) introduces dynamic context parallelism.
* **Hardware-Specific Fixes (Ascend NPU):** [PR #7086](https://github.com/volcengine/verl/pull/7086) resolves an MoE communication state bug following L2 sleep/wake cycles on Ascend NPUs. [PR #7077](https://github.com/volcengine/verl/pull/7077) fixes a critical checkpoint saving crash when utilizing FSDP2 CPU Offload policies on Ascend hardware.

## 5. Why This Project Matters in Today's RL Landscape
As the industry shifts from static pre-training to inference-time compute and reasoning (e.g., OpenAI o1, Claude 3.5), the bottleneck has moved to Post-Training (RLHF/GRPO). `verl` has positioned itself as a critical piece of open-source infrastructure because it tackles the exact engineering nightmares currently facing applied RL labs:
1. **Surviving Multi-Turn & Agentic Complexity:** Standard single-turn RL is no longer enough. `verl` is actively building robust pipelines for multi-turn tool-calling trajectories interacting with engines like SGLang and vLLM.
2. **Hardware-Level Memory Triage:** As shown by the sleep/wake KV cache optimizations and sharded delta syncs, `verl` is solving the GPU memory wall—allowing massive LLMs (70B+) to alternate between training and inference on the same accelerator grid without OOM crashes.
3. **Cross-Platform Scalability:** By aggressively patching bugs for NVIDIA, AMD ROCm, and Huawei Ascend architectures simultaneously, `verl` is preventing hardware vendor lock-in, making it a highly adaptable choice for global AI labs navigating compute export constraints.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL Ecosystem Daily Digest: Open Instruct**
**Date:** 2026-07-21

### 1. Today's Highlights
Activity in the `open-instruct` repository over the last 24 hours is low-volume but highly strategic. The ecosystem is focused on hardware extensibility and deep-dive model reproduction. A new Pull Request introducing Ascend NPU support marks a significant step toward hardware vendor diversification, while the ongoing discussion around OLMo-3 reproduction highlights the community's demand for transparent, end-to-end instruction-tuning pipelines.

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **[#1756](https://github.com/allenai/open-instruct/issues/1756) [OPEN] How to reproduce the OLMo 3 SFT stage and obtain OLMo-3-7B-Instruct?**
    *   **Author:** JaydencoolCC (Updated: 2026-07-20 | 👍: 0 | Comments: 2)
    *   **Summary:** A user is seeking clarification on the exact configurations and checkpoints required to reproduce the `OLMo-3-7B-Instruct` model. Specifically, the user is asking whether running the repository's default SFT script with a specified `BASE_CKPT` will yield the exact instruct model, pointing to a need for clearer documentation on intermediate training states and data curation.

### 4. Key PR Progress
*   **[#1781](https://github.com/allenai/open-instruct/pull/1781) [OPEN] feat: add Ascend NPU training support**
    *   **Author:** addsubmuldiv (Updated: 2026-07-20 | 👍: 0)
    *   **Summary:** This PR introduces compatibility for Huawei Ascend NPUs (Neural Processing Units). As AI compute demands scale, adapting RLHF/SFT frameworks to run efficiently on non-NVIDIA silicon is critical. This PR signifies an active community effort to decouple `open-instruct` from proprietary GPU ecosystems, though it is currently awaiting review and comments.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a cornerstone of the open-source post-training ecosystem. While today's updates are incremental, they address two of the most pressing bottlenecks in modern Reinforcement Learning and alignment: **compute hardware lock-in** and **reproducibility**. By integrating Ascend NPU support (PR #1781), the project enables researchers to leverage alternative, highly parallelized hardware for computationally expensive RLHF workloads. Simultaneously, the ongoing community inquiries into OLMo-3 reproduction (Issue #1756) underscore the field's persistent challenge in moving from "available code" to true end-to-end state reproduction—a vital requirement for rigorous, evidence-based RL research.

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

Here is your RL Ecosystem Daily Digest for Gymnasium.

### 1. Today's Highlights
Activity over the last 24 hours was highly focused on **vector environment stability** and **MuJoCo rendering configurations**. A notable community initiative to improve documentation with real (trained) RL policies is also gaining momentum. No new releases were cut today, but bug triaging resulted in several key fixes being merged.

### 2. Releases
*   **None:** No new versions were released in the last 24 hours. 

### 3. Important Issues
*   **[Bug] Autoreset crash in `AsyncVectorEnv` ([#1445](https://github.com/Farama-Foundation/Gymnasium/issues/1445))**
    *   *Updated:* 2026-07-20
    *   *Insight:* This ongoing bug report details a crash during `AsyncVectorEnv` autoresetting, where reward, truncation, and termination data are incorrectly cast as non-numpy array types. This was directly addressed by PR [#1643](https://github.com/Farama-Foundation/Gymnasium/pull/1643) today.
*   **[Question] MuJoCo ignoring XML offscreen dimensions ([#1607](https://github.com/Farama-Foundation/Gymnasium/issues/1607))** 
    *   *Updated:* 2026-07-20 (Closed)
    *   *Insight:* A user reported that `MujocoEnv` ignores the `offwidth` and `offheight` parameters defined in the XML file when instantiating custom renderers (e.g., for drone cameras). This was confirmed and fixed via PR [#1642](https://github.com/Farama-Foundation/Gymnasium/pull/1642).
*   **[Help Wanted] Doc Site Gifs Showing Real Policies ([#1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610))**
    *   *Updated:* 2026-07-19
    *   *Insight:* Maintainers are requesting community PRs to replace documentation GIFs of random, untrained agents with those using basic trained policies (e.g., via SB3) for Classic Control, Box2D, and MuJoCo environments. 

### 4. Key PR Progress
*   **[Merged] Fix `AsyncVectorEnv` NEXT_STEP autoreset reward/done dtypes ([#1643](https://github.com/Farama-Foundation/Gymnasium/pull/1643))**
    *   Resolves Issue #1445. It fixes a type-mismatch crash where autoresetting workers returned scalar zero rewards while sibling environments returned `ndarray` rewards.
*   **[Merged] Fix `MujocoEnv` shrinking XML-declared offscreen framebuffer ([#1642](https://github.com/Farama-Foundation/Gymnasium/pull/1642))**
    *   Resolves Issue #1607. Stops `_initialize_simulation()` from unconditionally clobbering larger custom XML framebuffer sizes with the default 480x480 render window size.
*   **[Open] Add `params` argument to `FuncEnv.__init__` and update JAX wrappers ([#1506](https://github.com/Farama-Foundation/Gymnasium/pull/1506))**
    *   A significant architectural update allowing `FuncEnv` callers to supply explicit parameter instances, improving how shared parameters are forwarded through scalar and vector JAX adapters.
*   **[Open] Use a trained-policy GIF for CarRacing ([#1646](https://github.com/Farama-Foundation/Gymnasium/pull/1646))**
    *   Directly addresses Issue #1610. Swaps the documentation's random-agent GIF for CarRacing with a trained Stable-Baselines3 (SB3) policy.
*   **[Open] Add vector environment step benchmark ([#1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640))**
    *   Introduces `benchmark_step_vector` to measure individual vector-environment steps per second, specifically tested during MJX (MuJoCo XLA) environment testing.

### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for RL in Python, Gymnasium acts as the bridge between research algorithms and physics simulators. Today's digest highlights two massive pain points in modern RL engineering: **hardware acceleration (JAX)** and **vectorized throughput**. 

By actively fixing data-type edge cases in `AsyncVectorEnv` and allowing fine-grained parameter passing in JAX-based `FuncEnv`, the maintainers are ensuring that researchers can reliably run thousands of parallel environments without silent pipeline crashes. Furthermore, the community's effort to showcase trained policies in the documentation reflects a maturing ecosystem focused on usability and setting clear baseline expectations for newcomers.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL daily digest for PettingZoo based on the provided GitHub data.

### 1. Today's Highlights
* **Major API Transition:** PettingZoo has officially closed two key PRs ([#1404](https://github.com/Farama-Foundation/PettingZoo/pull/1404), [#1403](https://github.com/Farama-Foundation/PettingZoo/pull/1403)) to deprecate the old environment creation API in favor of a unified environment registry. 
* **Visual & Physics Overhaul:** Significant open-source community effort is being directed toward refining classic environments, specifically overhauling rendering for `pursuit` and `hanabi`, and fixing collision physics in `cooperative_pong`.

### 2. Releases
* **No new releases** were published in the last 24 hours. However, PR [#1404](https://github.com/Farama-Foundation/PettingZoo/pull/1404) included a version bump, suggesting a new release incorporating the new env registry is imminent.

### 3. Important Issues
* **No active issues** were updated in the last 24 hours. The development focus remains entirely on merging pending PRs to stabilize the codebase. 

### 4. Key PR Progress
**Merged / Closed (API & Documentation):**
* [PR #1404](https://github.com/Farama-Foundation/PettingZoo/pull/1404) **[CLOSED]**: Migrated all documentation, MyST configs, and tutorials to the new environment registry. Fixed broken links and bumped the project version.
* [PR #1403](https://github.com/Farama-Foundation/PettingZoo/pull/1403) **[CLOSED]**: Formally deprecated the legacy environment creation API (as announced in issue #1392) and fixed a bug where the `parallel_env` registry contained non-existent entries.

**Active Developments (Bug Fixes & Enhancements):**
* [PR #1400](https://github.com/Farama-Foundation/PettingZoo/pull/1400) **[OPEN]**: A critical architectural fix for `AgentSelector`. Previously, `reinit()` stored the agent order list *by reference*, meaning accidental caller-side mutations could corrupt the turn order. This PR gives `AgentSelector` ownership by copying the list.
* [PR #1398](https://github.com/Farama-Foundation/PettingZoo/pull/1398) **[OPEN]**: Fixes a physics glitch in `cooperative_pong` (v7) where ball collision resolution snapped the ball to the surface, discarding overshoot distance and disrupting continuous trajectory calculations. 
* [PR #1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380) **[OPEN]**: Adds graphical PyGame rendering to `hanabi` using commissioned pixel-art cards, parsing state directly from the underlying OpenSpiel string representation. 
* [PR #1399](https://github.com/Farama-Foundation/PettingZoo/pull/1399) **[OPEN]**: Reverts `pursuit` agents from circles back to filled squares to restore the environment's visual style from before its PyGame port.
* [PR #1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393) **[OPEN]**: Introduces a `center_box_size=(width, height)` argument to `pursuit`, allowing users to configure the center obstacle size (including completely obstacle-free maps) instead of relying on hardcoded proportions.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the industry-standard benchmarking suite for Multi-Agent Reinforcement Learning (MARL), analogous to what Gymnasium is for single-agent RL. 

Today's updates highlight a maturing MARL ecosystem. By deprecating legacy APIs in favor of a standardized `env registry`, Farama-Foundation is drastically reducing boilerplate friction for researchers spinning up complex multi-agent environments. Furthermore, community contributions fixing list-reference bugs in `AgentSelector` (crucial for alternating turn-based games like Hanabi or Chess) and refining environment physics ensure that benchmarked MARL algorithms are evaluated on mathematically sound, deterministic environments rather than being thrown off by underlying API bugs.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>