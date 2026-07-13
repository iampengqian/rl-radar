# RL Open Source Daily Digest 2026-07-14

> Generated: 2026-07-13 22:15 UTC | Projects covered: 15

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
The RL open-source landscape on 2026-07-14 is sharply bifurcated between large-scale LLM alignment infrastructure and classical/foundational RL tooling. The majority of high-impact activity is concentrated in frameworks managing distributed RLHF/GRPO workloads, agentic memory, and MoE inference synchronization. Conversely, classical RL libraries (Stable Baselines3, Tianshou) and clean educational implementations (CleanRL, OpenRLHF) are experiencing quiet maintenance cycles. A critical unpatched security vulnerability in PyTorch's torchtune also poses an immediate risk to RL training pipelines relying on untrusted YAML configurations.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 59 | 20 | 0 | Q3 roadmap published; intense focus on Agentic RL, multi-backend MoE (DeepSeek V4), and Ascend NPU support. |
| **TRL** | 11 | 30 | 0 | Heavy stabilization; GRPO loss bugs fixed, GOLD distillation added, agentic sandboxing integrated. |
| **AReaL** | 1 | 29 | 0 | Massive 17-PR stack landed for secure agent memory control planes; keyed rollout reproducibility introduced. |
| **Gymnasium** | 1 | 24 | 0 | Core stabilization; strict type safety, vectorization state-mutation fixes, and determinism improvements. |
| **ROCK** | 4 | 6 | 0 | Sandboxing backend integration; strict timeout enforcement to prevent distributed RL worker deadlocks. |
| **PettingZoo** | 3 | 11 | 0 | MARL API robustness; `AgentSelector` state mutation fixed, native video recording added. |
| **slime** | 2 | 2 | 0 | MoE weight hot-update fixes; critical TileLang/SparseMLA NaN gradient isolated in GLM-5.2. |
| **Open Instruct** | 0 | 3 | 0 | RLHF modularity; unified rho-divergence path and checkpoint storage bounding for `grpo_fast`. |
| **ROLL** | 2 | 0 | 0 | Pipeline bottlenecks reported; async GRPO slowness and Diffusion reward model GPU starvation. |
| **rl_games** | 0 | 1 | 0 | PPO data corruption fix for auto-resetting vectorized environments (masking garbage rows). |
| **torchtune** | 1 | 0 | 0 | Critical security escalation: arbitrary code execution via untrusted recipe configs. |
| **OpenRLHF** | 0 | 1 | 0 | Routine maintenance; targeted bug fix. |
| **CleanRL** | 0 | 1 | 0 | Documentation polish. |
| **Stable Baselines3 / Tianshou** | 0 | 0 | 0 | Inactive. |

## Shared Research & Engineering Directions

**Research Signals:**
- **Algorithmic Refinements for GRPO/PPO:** Multiple projects are refining core policy gradients. TRL fixed critical GRPO loss denominator bugs (masking truncated completions), verl added UP-GRPO (unbounded positive asymmetric loss), and Open Instruct introduced a modular rho-divergence path for DPPO.
- **Agentic RL & Tool-Using Environments:** The shift from static RLHF to multi-turn agentic RL is evident. TRL introduced `trl.environments` and `SandboxEnvironment`, AReaL is formalizing causal memory testing, and verl is advancing agent abstractions and prefix caching for multi-turn rollouts.
- **Advanced Distillation:** TRL is integrating cross-tokenizer and IW-OPD distillation into the `GOLDTrainer`, pushing the boundaries of efficient model compression alongside alignment.

**Engineering & Infrastructure Signals:**
- **Distributed Weight Synchronization:** Handling MoE models during inference-training loops remains a massive bottleneck. verl introduced delta weight sync over NCCL, while slime fixed FlashInfer MoE layout restoration after BF16 hot updates.
- **Reproducibility & Determinism:** AReaL plumbed SGLang `sampling_seed` for fully replayable rollouts, and Gymnasium fixed `PYTHONHASHSEED` determinism issues in text charsets.
- **Fault Tolerance & Pipeline Orchestration:** ROCK enforced strict 90-second timeouts to prevent distributed deadlocks, slime added critic checkpoint fallbacks, and Open Instruct bounded intermediate checkpoint storage to prevent disk I/O crashes.

## Differentiation Analysis
- **LLM Alignment Heavyweights (verl, TRL, slime):** verl differentiates via massive multi-backend scaling (Megatron, Ascend, DeepSeek V4) and hardcore distributed systems engineering. TRL acts as the accessible connective tissue between HuggingFace ecosystems and SOTA algorithms. slime focuses deeply on the specific numerical and synchronization nuances of custom kernels (TileLang) and MoE architectures (GLM-5.2).
- **Agentic Infrastructure (AReaL, ROCK):** AReaL is uniquely building a zero-trust security model for distributed agent memory, treating agent state as a networked microservice. ROCK focuses entirely on the orchestration layer, providing sandboxed execution environments and preventing compute deadlocks at dataset scales.
- **Foundational APIs (Gymnasium, PettingZoo, rl_games):** These projects are shedding legacy technical debt. Gymnasium and PettingZoo are enforcing strict typing and eliminating silent state mutations in vectorized/auto-resetting environments, while rl_games directly addressed data corruption in high-throughput simulators like Isaac Gym.
- **Security Risk (torchtune):** Stands out negatively due to a critical unpatched RCE vulnerability in its configuration parser, posing a supply-chain risk to collaborative RL research.

## Community Momentum & Maturity
- **High Velocity & Scaling Pains:** verl (79 updates) and TRL (41 updates) show massive momentum but also exhibit growing pains, with users reporting CPU/GPU OOMs and algorithmic edge cases (e.g., GRPO masking). 
- **Maturing Codebases:** Gymnasium and PettingZoo are shifting from feature development to strict type safety (Pyright/mypy) and API hardening, indicating maturity and long-term stability.
- **Quiescent Maintenance:** CleanRL, OpenRLHF, Stable Baselines3, and Tianshou show very low or zero activity, suggesting they are in stable maintenance phases rather than active architectural iteration.
- **Security Posture:** torchtune's public escalation of an RCE vulnerability after a month of private silence highlights a friction point in open-source security response models within fast-moving AI ecosystems.

## Trend Signals
- **Agentic RL is becoming infrastructure-heavy:** Training LLMs to use tools requires not just new algorithms, but entirely new control planes for memory routing, sandboxing, and multi-turn rollout caching (AReaL, ROCK, verl).
- **MoE Synchronization is the new bottleneck:** As models transition to Mixture-of-Experts (e.g., Qwen3.6 A3B, DeepSeek V4), weight hot-updates between training and inference engines (SGLang, vLLM) are breaking, requiring highly specific low-precision layout transformations (slime, verl).
- **Auto-reset correctness is critical:** With the dominance of GPU-accelerated vectorized environments, handling terminal-to-reset transition rows correctly in PPO/GRPO is a silent but widespread data corruption vector being systematically eliminated (rl_games, Gymnasium, PettingZoo).
- **Config Security:** As RL recipes become complex YAML graphs, frameworks must treat configuration files as untrusted code to prevent arbitrary execution (torchtune).

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL Open-Source Ecosystem Daily Digest: ROLL (alibaba/ROLL)**
**Date:** 2026-07-14

### 1. Today's Highlights
ROLL saw minimal structural codebase changes over the past 24 hours, with zero new pull requests or releases. However, community activity spiked around performance bottlenecks and architectural scaling. Two critical open issues regarding asynchronous RL execution and compute-heavy reward model integration were updated by users.

### 2. Releases
*   **No New Releases.** The repository has not published a new version in the last 24 hours.

### 3. Important Issues
Developers are currently grappling with optimization challenges inherent in scaling asynchronous RL workloads:
*   **[Issue #394](https://github.com/alibaba/ROLL/issues/394): Very slow asynchronous GRPO training on 8×A100.** A user reported severe training bottlenecks when running asynchronous GRPO with Qwen3-8B on an 8×A100 cluster. This highlights ongoing community struggles with synchronizing inference and training phases efficiently in large-scale async setups. *(Updated: 2026-07-13 | 4 comments)*
*   **[Issue #230](https://github.com/alibaba/ROLL/issues/230): Efficient co-training of LLM GRPO with non-LLM (Diffusion) reward models.** A developer highlighted GPU starvation during GRPO training while waiting for compute-heavy Diffusion-based reward evaluations. Despite implementing an async reward server, the reward computation remains a primary pipeline blocker. *(Updated: 2026-07-13 | 1 comment)*

### 4. Key PR Progress
*   **No Active PRs.** There were 0 pull requests updated, merged, or opened in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
As Large Language Model (LLM) alignment shifts heavily toward Group Relative Policy Optimization (GRPO) and complex agnostic reward systems, ROLL occupies a critical space in the open-source ecosystem. The issues highlighted today perfectly illustrate the next major frontier in Reinforcement Learning infrastructure: **decoupling and asynchronous execution**. 

Modern RL pipelines are no longer bottlenecked by the LLM training step itself, but rather by the orchestration of distributed inference (rollouts) and the evaluation latency of diverse, compute-heavy reward models (like Diffusion models). ROLL's focus on asynchronous training architectures makes it a vital testbed for solving the GPU utilization and pipeline-stalling challenges that enterprise AI teams face when scaling RLHF beyond simple text-generation paradigms.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for **ROCK (alibaba/ROCK)** on 2026-07-14.

### 1. Today's Highlights
*   **OpenSandbox Backend Integration Nears Completion:** Phase 1 of the `OpenSandboxOperator` lifecycle backend has been merged, with the proxy-layer execution and file streaming seams submitted in [PR #1233](https://github.com/alibaba/ROCK/pull/1233).
*   **Resilience & Timeout Fixes:** Multiple PRs ([#1237](https://github.com/alibaba/ROCK/pull/1237), [#1232](https://github.com/alibaba/ROCK/pull/1232)) were merged to eliminate indefinite hanging in the scheduler and remote HTTP requests by enforcing strict 90-second timeouts.
*   **Dataset-Scale Orchestration:** A new unified CLI entrypoint is in review ([PR #1235](https://github.com/alibaba/ROCK/pull/1235)) to support multi-task and full dataset runs, moving ROCK closer to a turnkey solution for large-scale RL workflows.

### 2. Releases
*   **None.** No new tags or releases were published in the last 24 hours.

### 3. Important Issues
*   **[Bug] Python SDK Missing Reward Protocol** ([#1214](https://github.com/alibaba/ROCK/issues/1214)): `BashTrial.collect()` currently ignores reward protocol artifacts (`result.json`, `reward.json`). The SDK relies solely on exit codes, causing RL trial scores to incorrectly default to `0.0`. 
*   **[Enhancement] TypeScript SDK Sandbox Lifecycle** ([#1240](https://github.com/alibaba/ROCK/issues/1240)): Requests the addition of archival operations, disk capacity configurations, and typed status responses for stopped sandboxes in the TS SDK.
*   **[Bug] Empty Sandbox Status on Pending** ([#1238](https://github.com/alibaba/ROCK/issues/1238)): `SandboxManager.get_status()` returns empty during the `pending` to `running` transition, hiding crucial container startup progress (e.g., image pulling) from the user.
*   **[Enhancement] Unified Job Orchestration** ([#1234](https://github.com/alibaba/ROCK/issues/1234)): Highlighting the need to upgrade `rock job run` so users don't have to manually enumerate and submit dataset-scale RL tasks one by one.

### 4. Key PR Progress
*   **Merged (Closed):**
    *   [PR #1224](https://github.com/alibaba/ROCK/pull/1224): Fixed critical bugs in the TS SDK's `nohup` process detection that caused large OSS file downloads to fail.
    *   [PR #1237](https://github.com/alibaba/ROCK/pull/1237) & [PR #1232](https://github.com/alibaba/ROCK/pull/1232): Bounded remote HTTP calls and scheduler worker tasks with 90-second timeouts to prevent single stuck workers from blocking the entire concurrency runner.
    *   [PR #1203](https://github.com/alibaba/ROCK/pull/1203): Delivered Phase 1 of the OpenSandbox backend integration (lifecycle management).
*   **In Review (Open):**
    *   [PR #1233](https://github.com/alibaba/ROCK/pull/1233): Implements the Phase 2 proxy backend, routing command, file, and streaming uploads through the OpenSandbox SDK.
    *   [PR #1235](https://github.com/alibaba/ROCK/pull/1235): Implements the unified `rock job run` orchestration for concurrent dataset tasks, including JSONL progress tracking.
    *   [PR #1239](https://github.com/alibaba/ROCK/pull/1239): Fixes the pending status caching issue to surface container startup phases.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning shifts increasingly toward LLM alignment and complex multi-agent systems, the underlying infrastructure bottleneck is no longer just GPU compute—it is **sandbox orchestration and execution reliability**. 

Today's ROCK updates directly address the most critical pain points in large-scale RL:
1.  **Compute Reliability:** When running thousands of RL trials across distributed environments, unresponsive nodes are inevitable. By implementing strict HTTP and worker timeouts ([PR #1237](https://github.com/alibaba/ROCK/pull/1237)), ROCK prevents deadlocks, ensuring that RL training pipelines fail fast and recover gracefully.
2.  **Backend Extensibility:** The integration of the OpenSandbox backend ([PR #1203](https://github.com/alibaba/ROCK/pull/1203), [PR #1233](https://github.com/alibaba/ROCK/pull/1233)) decouples ROCK from specific runtime environments, giving researchers the flexibility to execute safe, containerized code execution required for tool-augmented LLMs.
3.  **Dataset Scale Turnkey Workflows:** The new unified orchestration CLI ([PR #1235](https://github.com/alibaba/ROCK/pull/1235)) eliminates the need for custom wrapper scripts, allowing researchers to natively launch, track, and manage massive dataset-level RL runs.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for `THUDM/slime` on 2026-07-14.

### 1. Today's Highlights
* **Inference & Training Stability Focus:** Today's activity revolves heavily around ensuring reliable checkpoint resumption and fixing weight update mismatches between Slime and SGLang.
* **Critical Forward/Backward Bug Isolated:** A severe NaN gradient issue was reported and isolated within the GLM-5.2 SparseMLA kernel, highlighting the complexities of custom kernel integrations in large-scale RL. 
* **Zero New Releases:** The repository saw no new version tags or releases today, with ongoing development concentrated in open issues and PRs.

### 2. Releases
* **No new releases** were published in the last 24 hours.

### 3. Important Issues
* **[Bug] Garbled output on 2nd rollout with Qwen3.6 35B A3B ([#2091](https://github.com/THUDM/slime/issues/2091))**
  * **Context:** Users report corrupted text generation (garbled code) during the second RL rollout when using `slime-v0.3.0` with the `slimerl/sglang:v0.5.12.post1-cu129` Docker image. Downgrading to `slime-v0.2.4` and `sglang:v0.5.9` resolves the issue, pointing towards a potential regression in the newer SGLang inference engine or its interaction with MoE models.
* **GLM-5.2 SparseMLA TileLang backward returns NaN gradients ([#2201](https://github.com/THUDM/slime/issues/2201))**
  * **Context:** A critical training failure where native Megatron/Slime NaN checks are triggered before data-parallel communication. The root cause has been successfully isolated to the `TileLang` backward kernel inside `slime_plugins/models/glm5/ops/sparse_ml...` operating on finite inputs. 

### 4. Key Pull Requests Progress
* **Add critic load fallback for resuming training ([#2200](https://github.com/THUDM/slime/pull/2200))**
  * **Impact:** Enhances fault tolerance for RL training loops. This PR allows the critic to fall back to the actor's resolved `load` path if its checkpoint is missing, enabling seamless training resumption when the critic is configured with `load == save`.
* **fix(update_weight): restore FlashInfer MoE layout after BF16 hot updates ([#2192](https://github.com/THUDM/slime/pull/2192))**
  * **Impact:** Directly addresses weight synchronization during RL steps. Previously, when performing BF16 weight hot-updates using the `flashinfer_trtllm` MoE backend (e.g., for Qwen3.5/3.6 35B-A3B), SGLang restored block-layout weights to canonical layout. Slime failed to account for this transformation. This PR fixes the `post_process_weights` execution flow, ensuring accurate policy weight broadcasting.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning (specifically RLHF/RLAIF) becomes the dominant paradigm for aligning massive Mixture-of-Experts (MoE) and sparse-attention LLMs, projects like Slime serve as critical infrastructure. Today's digest highlights the exact engineering bottlenecks the open-source community is solving in 2026:
1. **Engine Synchronization:** Managing the complex state transfers between training frameworks (Megatron) and high-throughput inference engines (SGLang), especially during dynamic weight hot-updates.
2. **Hardware-Level Precision:** Navigating low-precision (BF16) numerical instabilities and custom kernel bugs (TileLang/SparseMLA) that trigger NaN gradients across distributed data-parallel nodes.
3. **Fault Tolerance:** Building robust fallback mechanisms for long-running RL pipelines where node failures and missing checkpoints are inevitable.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning ecosystem digest for AReaL. 

# 🧠 AReaL RL Ecosystem Daily Digest — 2026-07-14

## 1. Today's Highlights
Activity in the last 24 hours is dominated by a massive, synchronized push to secure and operationalize Agent Memory architecture, alongside key improvements to RL rollout determinism. There were **29 PRs updated** and **0 new releases**. Contributor `jszzr` spearheaded a 17-PR stack focused on creating a highly secure, scoped, and async memory coordination layer for RL agents.

## 2. Releases
**None.** No new versions were cut in the last 24 hours. The project remains focused on merging architectural overhauls in the `codex` and `rollout` domains.

## 3. Important Issues
*   **[Feature] Keyed (replayable) rollout sampling** by SushantDaga ([Issue #1523](https://github.com/areal-project/AReaL/issues/1523))
    *   **Summary:** Proposes an opt-in, backward-compatible feature to plumb SGLang's per-request `sampling_seed` through AReaL's rollout path. This is highly significant for RL debugging and evaluation, as it enables fully replayable rollout sampling. The corresponding implementation is already under review.

## 4. Key PR Progress

**Reproducible RL Rollouts & Reward Modeling**
*   [PR #1524](https://github.com/areal-project/AReaL/pull/1524): Implements the SGLang per-request `sampling_seed` plumbing proposed in Issue #1523 across both v1 and v2 request builders.
*   [PR #1516](https://github.com/areal-project/AReaL/pull/1516): Introduces grouped reward normalization at rollout time (`reward_normalization` and `drop_incomplete_group`), crucial for stabilizing training when handling `n_samples` per prompt.

**Agent Memory Control Plane & Security Stack (by `jszzr`)** 
A massive stacked PR series defining how agents securely interact with memory in distributed environments:
*   **Identity & Routing:** [PR #1527](https://github.com/areal-project/AReaL/pull/1527) canonicalizes session identity across HTTP hops, while [PR #1528](https://github.com/areal-project/AReaL/pull/1528) authenticates session close operations. 
*   **Authorization & Scoping:** [PR #1522](https://github.com/areal-project/AReaL/pull/1522) defines exact Memory scope grants. [PR #1525](https://github.com/areal-project/AReaL/pull/1525) and [PR #1526](https://github.com/areal-project/AReaL/pull/1526) enforce these grants at Worker admission and add a revocable grant store.
*   **Concurrency & Runtime:** [PR #1513](https://github.com/areal-project/AReaL/pull/1513) adds a Worker-side async memory coordinator that bridges synchronous memory to the Agent Service without blocking the event loop. [PR #1509](https://github.com/areal-project/AReaL/pull/1509) introduces runtime-owned provenance for memory reads.

**Agent Memory Causal Testing & Evaluation**
*   [PR #1512](https://github.com/areal-project/AReaL/pull/1512) & [PR #1514](https://github.com/areal-project/AReaL/pull/1514): Introduce rigorous causal smoke tests for agent memory self-evolution, ensuring that structured facts and counterfactuals are handled correctly without leaking answers.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from static datasets into agentic, tool-using paradigms (e.g., RLHF/RLAIF for agents), **memory management and rollout determinism become critical bottlenecks.** 

Today's AReaL update perfectly highlights the cutting-edge challenges of Agent RL:
1.  **Reproducibility:** The push for keyed rollout sampling ([PR #1524](https://github.com/areal-project/AReaL/pull/1524)) solves a fundamental pain point in RL research—deterministically reproducing inference-time generations to debug reward model feedback.
2.  **Secure Agent Architecture:** The 17-PR memory stack shows that training agents with persistent memory requires an entirely new zero-trust control plane. By isolating memory scopes, authenticating HTTP hops, and pinning assignments, AReaL is building infrastructure that allows agents to learn from memory safely without compromising the distributed training cluster.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL ecosystem daily digest for TRL based on the July 14, 2026 data snapshot.

# 📊 TRL Daily Digest: July 14, 2026

## 1. Today's Highlights
- **Stabilization of Experimental Features:** Heavy cleanup across experimental pipelines, specifically the deprecation/cleanup of `generate_rollout_completions` ([PR #5870](https://github.com/huggingface/trl/pull/5870)) and bug fixes for Async GRPO and DPPO (DeepSeek/Decoupled PPO).
- **Advanced Distillation Arrives in GOLD:** New cross-tokenizer and IW-OPD distillation paths are being merged into the `GOLDTrainer` ([PR #6126](https://github.com/huggingface/trl/pull/6126), [PR #6191](https://github.com/huggingface/trl/pull/6191)).
- **Environment Tooling Expansions:** Introduction of `trl.environments` with a `SandboxEnvironment` ([PR #6358](https://github.com/huggingface/trl/pull/6358)), alongside several fixes to prevent in-place prompt mutation during tool/agent loops.

## 2. Releases
**No new releases** were cut in the last 24 hours. The repository remains highly active with 30 PR updates and 11 issue updates, indicating ongoing preparation for a future release tag.

## 3. Important Issues
- **GRPO Loss Denominator Bugs** ([Issue #6369](https://github.com/huggingface/trl/issues/6369), [Issue #6367](https://github.com/huggingface/trl/issues/6367)): SushantDaga reported two critical discrepancies in GRPO loss calculation. `mask_truncated_completions=True` fails to mask the denominator, and zero-variance/dead groups (where all completions get identical rewards) are not excluded, artificially diluting the loss gradient. 
- **Liger Kernel + DeepSpeed ZeRO-3 Crashes** ([PR #6372](https://github.com/huggingface/trl/pull/6372)): While fixing a bug, it was highlighted that utilizing `use_liger_kernel` with ZeRO-3 currently crashes DPO/KTO trainers due to direct `lm_head.weight` tensor access bypassing DeepSpeed hooks.
- **Tool Calling Usability in RLOO** ([Issue #3520](https://github.com/huggingface/trl/issues/3520) & [PR #5395](https://github.com/huggingface/trl/pull/5395)): Closed issues and PRs today reflect a broader push to ensure BOS token handling and tool-calling integrations are mathematically sound and natively supported across GRPO and RLOO trainers.

## 4. Key PR Progress
- **AsyncGRPO Cleanup Pass:** User `qgallouedec` submitted a massive sweep of PRs ([#6374](https://github.com/huggingface/trl/pull/6374), [#6375](https://github.com/huggingface/trl/pull/6375), [#6376](https://github.com/huggingface/trl/pull/6376), [#6377](https://github.com/huggingface/trl/pull/6377), [#6378](https://github.com/huggingface/trl/pull/6378), [#6379](https://github.com/huggingface/trl/pull/6379)) to align `AsyncGRPOTrainer` configurations, docstrings, and metric aggregations with the stable `GRPOTrainer`.
- **Multi-turn / Agent Safety:** Albert Villanova introduced fixes for `DPPOTrainer` and `GRPOTrainer` ([PR #6364](https://github.com/huggingface/trl/pull/6364), [PR #6366](https://github.com/huggingface/trl/pull/6366)) to stop mutating input prompts in-place when appending environment/tool observations.
- **DPO/KTO Evaluation Fixes:** [PR #6370](https://github.com/huggingface/trl/pull/6370) resolves a crash when using `evaluate()` with dict-based evaluation datasets and `precompute_ref_log_probs=True`.
- **SFT Data Handling:** [PR #6320](https://github.com/huggingface/trl/pull/6320) drops fully-masked examples from SFT batches, preventing graph-connected zero losses that previously provided false safety guarantees in DDP/FSDP setups.

## 5. Why This Project Matters in Today's RL Landscape
As LLM training shifts heavily toward preference alignment (DPO/KTO) and reinforcement learning (GRPO/PPO), TRL is acting as the connective tissue between cutting-edge academic research and production-scale engineering. 

Today's digest illustrates a project maturing to handle agentic workloads (tool-calling integration, sandboxed environments) and multi-modal inputs (audio/vision support). Crucially, TRL is tackling the hard engineering requirements of distributed RL—ensuring memory efficiency, fixing distributed data-parallel metric aggregations, and ensuring compatibility with performance-optimization libraries like Liger Kernel and vLLM. By exposing advanced concepts like `mask_truncated_completions` and cross-tokenizer distillation, TRL is allowing applied ML engineers to iterate on SOTA RL techniques without needing to rewrite core training loops from scratch.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# 🤖 RL Open-Source Daily Digest: 2026-07-14
**Focus Project:** [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

---

### 1. Today's Highlights
Activity in the OpenRLHF repository over the last 24 hours has been focused and low-volume. The ecosystem saw no new feature releases or newly reported issues, but maintainers successfully merged/closed a targeted bug fix ([PR #1264](https://github.com/OpenRLHF/OpenRLHF/pull/1264)), continuing their steady pace of repository maintenance and codebase stabilization.

### 2. Releases
*   **New Releases:** None
*   **Latest Versions:** No new version tags were pushed in the last 24 hours. The project remains on its previous stable release cycle.

### 3. Important Issues
*   **Active Issues (24h):** 0
*   **Summary:** No new issues were reported or updated. The issue tracker is currently quiet, indicating a period of stability following previous updates. 

### 4. Key PR Progress
*   **[CLOSED] [PR #1264: Fix a small issue in OpenRLHF (#1243)](https://github.com/OpenRLHF/OpenRLHF/pull/1264)**
    *   **Author:** bglglzd
    *   **Status:** Closed (Updated 2026-07-13)
    *   **Summary:** A concise, scope-limited bug fix addressing previously reported issue [#1243](https://github.com/OpenRLHF/OpenRLHF/issues/1243). This PR reflects a healthy open-source practice of keeping patches targeted to specific problem areas without introducing unnecessary refactoring or technical debt.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—increasingly dominated by the alignment and fine-tuning of massive Large Language Models (LLMs) via RLHF/RLAIF—frameworks must handle extreme distributed computing scales. **OpenRLHF** remains a critical open-source infrastructure piece because it bridges the gap between standard RL algorithms and large-scale distributed training architectures (e.g., Ray, DeepSpeed, Megatron). 

While today's digest reflects routine maintenance rather than architectural shifts, consistent patching of targeted issues (like PR #1264) is exactly what maintains the reliability needed for practitioners running expensive, multi-node alignment workloads. Keeping the codebase bug-free ensures that researchers can safely iterate on agentic behaviors and complex reward models without framework-level interruptions.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl (2026-07-14)

**Repository:** [volcengine/verl](https://github.com/volcengine/verl)  
**Activity Window:** Last 24h (59 Issues updated, 20 PRs updated, 0 New Releases)

---

### 1. Today's Highlights
- **Q3 Roadmap Published:** verl officially laid out its [26Q3 roadmap](https://github.com/verl-project/verl/issues/6985), prioritizing Megatron low-precision (MXFP8/NVFP4) support, mlite integration, and dropping legacy mbridge.
- **Agentic RL Advancements:** Merged progress on experimental agent frameworks ([PR #6299](https://github.com/verl-project/verl/pull/6299), [PR #7021](https://github.com/verl-project/verl/pull/7021)) and Extra Prefix Cache for agentic rollouts ([PR #6990](https://github.com/verl-project/verl/pull/6990)).
- **DeepSeek V4 & Ascend NPU Support:** Continued expansion of backend compatibility, with GRPO support for DeepSeek V4 ([PR #6473](https://github.com/verl-project/verl/pull/6473)) and critical CI/Docker fixes for Ascend NPUs ([PR #6973](https://github.com/verl-project/verl/pull/6973), [PR #7028](https://github.com/verl-project/verl/pull/7028)).

### 2. Releases
No new releases in the last 24 hours. The project appears to be actively working toward the `v0.8.0` milestone, given the volume of backport and branch-specific PRs (e.g., [PR #7009](https://github.com/verl-project/verl/pull/7009)).

### 3. Important Issues
- **Agentic RL Stability ([#2812](https://github.com/verl-project/verl/issues/2812)):** The highest-commented open issue highlights persistent setup and execution failures in the Agentic RL training examples, indicating friction in this rapidly developing feature area.
- **Memory & Parallelism Bottlenecks:** CPU OOM during FSDP2 rollout weight sync ([#6468](https://github.com/verl-project/verl/issues/6468)) and GPU OOM when scaling `n_gpus_per_node` ([#2820](https://github.com/verl-project/verl/issues/2820)) remain critical blockers for distributed training.
- **Megatron MoE + CP Correctness ([#6609](https://github.com/verl-project/verl/issues/6609)):** Context parallelism (`CP>1`) causes `grad_norm` explosions in MoE models due to a loss normalization mismatch. This was addressed today via [PR #6836](https://github.com/verl-project/verl/pull/6836).
- **Architectural RFCs:** High-impact RFCs are under active discussion, including Agent Abstractions & Trajectory Gateway ([#5790](https://github.com/verl-project/verl/issues/5790)) and communication/memory optimizations via Resharding/Offloading ([#2802](https://github.com/verl-project/verl/issues/2802)).

### 4. Key PR Progress
- **Algorithms:** Added UP-GRPO (Unbounded Positive Asymmetric Policy Loss) as a plug-and-play loss mode ([PR #7022](https://github.com/verl-project/verl/pull/7022)).
- **Distributed Efficiency:** Introduced delta weight sync over NCCL for disaggregated rollouts, cutting weight-sync traffic by targeting only updated BF16 parameters ([PR #6974](https://github.com/verl-project/verl/pull/6974)). Additionally, dynamic resource scaling for fully-async PPO is in the works ([PR #6556](https://github.com/verl-project/verl/pull/6556)).
- **Ascend/NPU Ecosystem:** Multiple fixes landed for Ascend, including Qwen3VL Megatron backend fixes ([PR #7031](https://github.com/verl-project/verl/pull/7031)) and disabling vLLM multimodal cache desync ([PR #6932](https://github.com/verl-project/verl/pull/6932)).
- **Reward Determinism:** Added deterministic reward paths for user-defined generative reward models (GRM) to ensure reproducible VLM scoring ([PR #7027](https://github.com/verl-project/verl/pull/7027)).

### 5. Why This Project Matters in Today's RL Landscape
verl has positioned itself as a leading production-grade framework for large-scale RLHF and agentic RL. Today's digest reveals a project successfully navigating the hardest engineering challenges in modern AI: 
1. **Multi-Backend Scaling:** Supporting Nvidia (FSDP/Megatron), Huawei Ascend, and complex MoE architectures (DeepSeek V4) simultaneously.
2. **Agentic Infrastructure:** Moving beyond standard chatbot RLHF by building dedicated agent abstractions, multi-turn rollout queueing, and prefix caching.
3. **Systems-Level Optimization:** Tackling fundamental bottlenecks in distributed training (e.g., weight sync I/O, CPU/GPU memory overheads, async scheduling) which are the primary barriers to economically training 100B+ parameter models. 

By addressing both cutting-edge algorithm integration (UP-GRPO) and hardcore distributed systems engineering, verl remains a critical open-source asset for the frontier RL community.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# 📊 RL Open-Source Ecosystem Daily Digest
**Date:** 2026-07-14
**Project:** [torchtune](https://github.com/pytorch/torchtune) (PyTorch)

---

### 1. Today's Highlights
Activity in the torchtune repository over the last 24 hours has been minimal, with zero pull requests updated and no new releases. The primary event is the escalation of a critical security vulnerability report regarding arbitrary code execution in recipe configurations.

### 2. Releases
**None.** 
No new versions or patches have been issued in the last 24 hours. 

### 3. Important Issues
- **[OPEN] #2971: Arbitrary code execution via the `_component_` field in an untrusted recipe config**
  - **Author:** geo-chen
  - **Updated:** 2026-07-13
  - **URL:** [meta-pytorch/torchtune Issue #2971](https://github.com/meta-pytorch/torchtune/security/advisories/GHSA-gw63-xxf2-xxcg)
  - **Summary:** A critical security flaw has been formally reported. Loading or validating an untrusted torchtune recipe config file (`.yaml`) allows arbitrary code execution. This occurs because config nodes directly reference Python callables in the `_component_` field. The reporter initially submitted this via a private security advisory on June 10, 2026, but escalated to a public issue due to a lack of response. 

### 4. Key PR Progress
**None.** 
There have been no updates to existing pull requests in the last 24 hours. Given the severity of Issue #2971, the ecosystem should closely monitor for an emergency security patch PR in the near future.

### 5. Why This Project Matters in Today's RL Landscape
torchtune is a critical piece of the PyTorch ecosystem, providing native, high-performance recipes for fine-tuning Large Language Models (LLMs). In the modern Reinforcement Learning (RL) landscape—particularly for RLHF (Reinforcement Learning from Human Feedback) and RLAIF—efficiently fine-tuning base models is a prerequisite before applying preference optimization algorithms like PPO or DPO. 

The security vulnerability highlighted in Issue #2971 is highly relevant to RL practitioners. RL experiments frequently rely on complex, composable YAML configurations to define reward models, policy architectures, and training loops. If untrusted config files can trigger arbitrary code execution via the `_component_` field, it poses a significant supply-chain and infrastructure risk to distributed RL training clusters. Addressing this is crucial to ensure that RL researchers can safely share and execute training recipes across collaborative environments.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

### 📊 RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-07-14  
**Repository:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

#### 1. Today's Highlights
Activity over the last 24 hours has been exclusively focused on codebase enhancements and architectural refactoring, driven entirely by contributor `mnoukhov`. The repository saw zero new issues and zero new releases, but three open Pull Requests. The core theme of today's updates is **RLHF/RLHF infrastructure optimization**—specifically modularizing policy gradient loss paths, introducing DPPO (Diffusion Policy Policy Optimization) via rho-divergence, and optimizing checkpoint storage for large-scale training runs.

#### 2. Releases
*   **No new releases** in the last 24 hours. 

#### 3. Important Issues
*   **None.** There were 0 issues opened or updated in the last 24 hours, indicating a temporary stable period in community troubleshooting and feature requests.

#### 4. Key PR Progress
All activity centers around improving the flexibility and efficiency of the RL training pipeline:

*   **[#1755 [OPEN] Add DPPO via the unified rho-divergence masking paradigm](https://github.com/allenai/open-instruct/pull/1755)** by `mnoukhov`  
    *Summary:* A significant architectural improvement to the policy loss calculation. As an alternative to PR #1745, this refactors the RL loss path to be highly modular across three orthogonal axes (`--loss_fn`, etc.). It implements DPPO using existing ρ-correction machinery rather than relying on special-cased masks, which is a cleaner approach for advanced divergence penalty handling.
*   **[#1754 [OPEN] Add keep_last_n_saves to bound intermediate HF-format model saves](https://github.com/allenai/open-instruct/pull/1754)** by `mnoukhov`  
    *Summary:* A highly practical infrastructure update for `grpo_fast.py`. It introduces the `keep_last_n_saves` argument to `GRPOExperimentConfig` to automatically trim old intermediate checkpoints. This directly addresses a critical pain point in RL fine-tuning: the massive storage I/O and disk space requirements of saving frequent intermediate HuggingFace-format model weights.
*   **[#1753 [OPEN] Checking appworld specific changes compared to agents base](https://github.com/allenai/open-instruct/pull/1753)** by `shatu`  
    *Summary:* A maintenance/diagnostic PR aimed at diffing and isolating specific changes made for the "appworld" environment against the base agent codebase.

#### 5. Why This Project Matters in Today's RL Landscape
As the open-source community continues to push the boundaries of post-training large language models (LLMs), **Open Instruct** serves as a critical, production-ready testbed for RLHF algorithms. Today's PRs highlight two massive scaling challenges in modern RL: 
1. **Code Modularity for New Algorithms:** The unified rho-divergence paradigm (PR #1755) shows the project is evolving beyond rigid, algorithm-specific RL implementations (like standard PPO or GRPO), allowing researchers to easily swap and test new policy-gradient objectives and divergence corrections.
2. **Compute and Storage Efficiency:** RL training is notoriously storage-heavy due to the need for frequent intermediate checkpointing. By bounding intermediate saves (PR #1754), Open Instruct ensures that large-scale distributed training loops don't crash due to disk overflow, making the RL ecosystem more accessible to researchers with standard compute clusters.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 📊 RL Ecosystem Daily Digest: CleanRL
**Date:** 2026-07-14
**Repository:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

### 1. Today's Highlights
CleanRL experienced a quiet 24 hours with no newly reported issues or software releases. The sole activity involves repository maintenance, specifically a recently closed pull request aimed at improving documentation and inline comments. 

### 2. Releases
*   **Status:** No new releases in the last 24 hours.
*   **Latest Stable:** Projects relying on CleanRL should continue tracking the current stable version, as no new operational patches or feature drops have been deployed today.

### 3. Important Issues
*   **Status:** No issues were created, updated, or closed in the last 24 hours. Issue #563 (referenced in the recent PR) appears to have been previously resolved, with no new functional bugs reported by the community today.

### 4. Key PR Progress
*   **[PR #565](https://github.com/vwxyzjn/cleanrl/pull/565) [CLOSED]**: *Polish docs and comments in cleanrl (#563)*
    *   **Author:** [bglglzd](https://github.com/bglglzd)
    *   **Details:** A small-scoped patch designed to clean up documentation and code comments based on the behavior outlined in Issue #563. 
    *   **Analysis:** The closure of this PR indicates that the maintainers have successfully processed these documentation refinements, ensuring the codebase remains highly readable and rigorously documented.

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning ecosystem, algorithmic complexity often obscures fundamental implementation details. CleanRL solves this by providing high-quality, single-file implementations of core RL algorithms (PPO, DQN, SAC, etc.). 

Today's focus on documentation (PR #565) perfectly underscores the project's primary value proposition: **transparency and educational utility**. As the RL landscape shifts toward increasingly complex architectures, CleanRL remains an indispensable benchmarking tool and learning resource for researchers and engineers who need to audit, understand, and modify algorithmic behavior from the ground up without wrestling with abstracted, multi-file spaghetti code.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# 🤖 RL Ecosystem Daily Digest: 2026-07-14
**Project Focus:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

### 1. Today's Highlights
Activity in the `rl_games` repository over the last 24 hours has been highly focused on core algorithmic correctness for vectorized environments. There were no new issues or releases reported, with the sole ecosystem movement centering on a significant PPO bug fix via an in-progress Pull Request.

### 2. Releases
*   **No new releases** in the last 24 hours. 
*   *Latest stable version remains unchanged.*

### 3. Important Issues
*   **0 active issues** updated in the last 24h. 
*   *Note:* The low issue noise could be correlated with the proactive maintenance of edge cases in modern vectorized environments, as seen in today's PR activity.

### 4. Key PR Progress
*   **[PR #362](https://github.com/Denys88/rl_games/pull/362): PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
    *   **Author:** ViktorM
    *   **Status:** [OPEN] (Last updated: 2026-07-13)
    *   **Technical Focus:** This PR addresses a silent but critical data corruption issue in fast auto-resetting environments (e.g., EnvPool, native Gymnasium 1.x vector envs). Previously, the transition row generated during an automatic env reset—where the observation is actually the terminal state of the previous episode—was mistakenly ingested by PPO as valid training data (with garbage actions and filler rewards). The PR implements masking to discard these rows. Additionally, it introduces scalar sigma parameterization to the PPO implementation.

### 5. Why This Project Matters in Today's RL Landscape
As the RL ecosystem heavily shifts toward high-throughput, GPU-accelerated simulation environments (like Isaac Gym, EnvPool, and Brax), managing environment lifecycles via `next_step-autoreset` has become the standard. However, auto-reset introduces terminal-to-reset transition mismatches that can silently corrupt on-policy learning algorithms like PPO. 

By explicitly masking these "garbage rows," `rl_games` continues to mature as a robust, production-grade RL library. It ensures that practitioners training massively parallel agents get mathematically sound policy gradients without having to manually patch environment vectorization quirks at the library level.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-14
**Repository:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

---

### 1. Today's Highlights
Activity over the last 24 hours has been overwhelmingly dominated by Pull Request updates (24 PRs updated), highlighting a strong community focus on core library stabilization. Key engineering themes include major type-safety overhauls, fixing nondeterministic environment behaviors, and resolving vectorization edge-cases.

### 2. Releases
*   **New Releases:** None (0) in the last 24 hours.

### 3. Important Issues
*   **[Proposal] Reward-hacking / reward-audit monitoring wrappers ([#1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619))** | *Status: Closed*
    *   **Context:** A proposal by `Aarav500` to introduce opt-in wrappers for auditing reward signals (e.g., tracking reward-distribution drift, entropy collapse, and reward-function hashing).
    *   **Significance:** As RL models scale, reward specification and reward hacking remain critical roadblocks to alignment. While closed, the 19 comments indicate robust community interest in built-in telemetry for reward auditing.

### 4. Key PR Progress
Developers (`teddytennant`, `Functionhx`, `Ankush0077`) are driving significant improvements to API correctness and low-level environment stability:

*   **Determinism & Type Safety:**
    *   [PR #1626](https://github.com/Farama-Foundation/Gymnasium/pull/1626): Fixes nondeterministic `Text` charset ordering caused by `PYTHONHASHSEED` reliance on `frozenset` iteration, ensuring reproducible sampling across processes.
    *   [PR #1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620): Introduces strict type hints (`mypy --strict` compliance) for core API files (`core.py`, `space.py`, `box.py`).
*   **Vector Environments & Memory Management:**
    *   [PR #1624](https://github.com/Farama-Foundation/Gymnasium/pull/1624): Fixes incorrect return/length reporting in `RecordEpisodeStatistics` when utilizing `SAME_STEP` autoreset semantics.
    *   [PR #1623](https://github.com/Farama-Foundation/Gymnasium/pull/1623): Resolves a state-mutation bug where `SyncVectorEnv` and `AsyncVectorEnv` modified class-level environment metadata.
    *   [PR #1632](https://github.com/Farama-Foundation/Gymnasium/pull/1632) / [PR #1622](https://github.com/Farama-Foundation/Gymnasium/pull/1622): Resolve shared memory typecode crashes (`float16`) and integer overflow vulnerabilities in `MultiDiscrete.contains` for negative bounds.
*   **Asset & Dependency Management:**
    *   [PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617): Removes PyTorch from the `[all]` installation extra, preventing massive unnecessary CUDA package downloads for CPU-only users.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto interface standard for single-agent reinforcement learning. Today's PR pipeline underscores a maturing ecosystem: rather than shipping new environments, maintainers are prioritizing **strict type safety (PEP 483/484), cross-process determinism, and vectorized memory efficiency**. By solving low-level IPC bugs (e.g., shared memory dtypes) and shoring up autoreset logic, Gymnasium ensures that modern distributed RL frameworks (e.g., CleanRL, Tianshou, RLlib) can scale reliably without silently dropping observations or mutating global states.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL open-source ecosystem daily digest for PettingZoo.

# 🐾 PettingZoo RL Daily Digest — 2026-07-14

## 1. Today's Highlights
Activity in the PettingZoo ecosystem over the last 24 hours is highly focused on **environment maintenance, visual overhauls, and API robustness**. There is a strong emphasis on resolving edge-case bugs (Tic Tac Toe logic, Pong physics) and a significant push to modernize environment utilities (adding `RecordVideo` wrappers, graphical rendering for Hanabi). Zero new releases were cut today, but 11 active PRs indicate a heavy development backlog being actively processed.

## 2. Releases
* **None.** No new releases or version tags were published in the last 24 hours.

## 3. Important Issues
* **[CLOSED] Pyright in strict mode** ([#1318](https://github.com/Farama-Foundation/PettingZoo/issues/1318)): A proposal to enforce strict type checking (`typeCheckingMode = "strict"`) has been resolved. This signals a maturation of the codebase's static typing, ensuring higher reliability for downstream multi-agent reinforcement learning (MARL) pipelines.
* **[CLOSED] Interest check: multi-agent reward-hacking environments** ([#1394](https://github.com/Farama-Foundation/PettingZoo/issues/1394)): A community proposal to add environments specifically designed to test proxy reward exploitation. The closure indicates a definitive stance from the maintainers regarding the scope of standard environments.
* **[OPEN] Possible Tic Tac Toe Logical Error** ([#1332](https://github.com/Farama-Foundation/PettingZoo/issues/1332)): A persistent bug report regarding the core `AgentSelector` logic in Tic Tac Toe, which has directly triggered active patches in today's PR pipeline. 

## 4. Key PR Progress
Several critical patches and feature enhancements saw updates today:

**Core API & Bug Fixes**
* **[OPEN] fix: give AgentSelector ownership of its agent order** ([#1400](https://github.com/Farama-Foundation/PettingZoo/pull/1400)): Directly resolves issue #1332 by fixing a `reinit()` bug where agent order lists were stored by reference instead of value, preventing catastrophic state mutation across episodes.
* **[OPEN] Remove spurious api_test warnings** ([#1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391)): Fixes false-positive `UserWarning`s for environments utilizing `Dict`, `Tuple`, or `MultiDiscrete` observation spaces, streamlining the testing experience for custom environments.
* **[OPEN] Fix cooperative_pong ball bounce physics** ([#1398](https://github.com/Farama-Foundation/PettingZoo/pull/1398)): Supersedes #1336 to fix issue #1289. Corrects collision resolution logic where the ball previously lost travel distance when snapping to surfaces.

**Environment Enhancements & Visuals**
* **[OPEN] Add `RecordVideo` wrappers** ([#1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306)): A highly requested feature porting Gymnasium's video recording directly to PettingZoo for both AEC and Parallel environments, reducing reliance on external libraries (like SB3) for basic visualization.
* **[OPEN] Add pygame rendering to Hanabi** ([#1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380)): Brings native pixel-art graphical rendering to Hanabi, a massively popular partially observable MARL benchmark.
* **[OPEN] pursuit: render agents as squares** ([#1399](https://github.com/Farama-Foundation/PettingZoo/pull/1399)) & **Add configurable center obstacle size to Pursuit** ([#1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393)): Visual and mechanical updates to the Pursuit environment, increasing customizability for researchers.

**Benchmarking & Breaking Changes**
* **[OPEN] feat!: remove gin_rummy environment** ([#1397](https://github.com/Farama-Foundation/PettingZoo/pull/1397)): A breaking change that deprecates the Gin Rummy environment entirely, likely due to high maintenance overhead or reliance on outdated dependencies.
* **[OPEN] Add predictive KAZ policy benchmark** ([#1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395)) & **Add evolved KAZ policy demo** ([#1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384)): Introduction of deterministic, predictive vector policies for Knights-Archers-Zombies (KAZ), complete with reproducible search scripts and GIF rendering.

## 5. Why This Project Matters in Today's RL Landscape
In the current MARL landscape, researchers are shifting away from single-agent wrappers toward true multi-agent topologies. PettingZoo remains the de facto standard API for multi-agent environments, acting as the multi-agent counterpart to Gymnasium. 

Today's development activity highlights exactly what the ecosystem needs most: **standardization and reliability**. By tightening static typing (Pyright), resolving silent state mutations (`AgentSelector`), supporting complex observation spaces natively, and adding native video recording, PettingZoo is actively reducing the engineering friction inherent to MARL research. Furthermore, the push to modernize highly complex environments like Hanabi and Cooperative Pong ensures that foundational benchmarks remain accurate and accessible for evaluating next-generation multi-agent algorithms.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>