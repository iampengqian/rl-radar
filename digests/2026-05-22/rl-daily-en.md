# RL Open Source Daily Digest 2026-05-22

> Generated: 2026-05-21 22:26 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem is experiencing a clear bifurcation. Activity is intensely concentrated on post-training and RLHF infrastructure for Large Language Models (LLMs) and Vision-Language Models (VLMs), driven by the global push to train reasoning models (e.g., OpenAI o1/o3 equivalents) and agentic frameworks. Conversely, traditional reinforcement learning libraries (Stable Baselines3, CleanRL, Tianshou, rl_games) and standard environments (Gymnasium, PettingZoo) are experiencing low-to-zero activity, highlighting an industry-wide pivot from general RL research towards large-scale LLM alignment systems.

## Activity Comparison
Activity was dominated by verl and TRL, both of which are actively fixing critical multi-modal training bugs and scaling distributed infrastructure. Alibaba's ROCK was the only project to ship a new release. CleanRL, PettingZoo, rl_games, Stable Baselines3, Tianshou, and torchtune recorded zero activity.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 26 | 45 | 0 | High. Consolidating agentic RL and Ascend NPU backend support. |
| **TRL** | 9 | 23 | 0 | High. Fixing critical VLM training bugs and GIL bottlenecks. |
| **AReaL** | 8 | 7 | 0 | Medium. Overhauling distributed RL controllers and weight syncing. |
| **ROCK** | 3 | 4 | 1 | Medium. Hardening sandbox infrastructure (v1.8.0 release). |
| **slime** | 0 | 9 | 0 | Medium. Proactive scaling via variable batch sizes and new MoE support. |
| **Gymnasium** | 2 | 1 | 0 | Low. Maintenance and MuJoCo documentation updates. |
| **ROLL** | 1 | 1 | 0 | Low. Documentation updates and hiring; integration queries. |
| **OpenRLHF** | 0 | 1* | 0 | Low. *Stalled activity, but addressing a critical RCE security flaw. |
| **Open Instruct** | 0 | 1 | 0 | Low. Friction reduction for local distributed debug runs. |

## Shared Research & Engineering Directions

**Research Signals:**
*   **Agentic RL & Tool Calling:** There is a universal shift from single-turn RLHF to multi-turn, long-horizon agent training. verl, ROLL, and AReaL are heavily focused on integrating tool-calling loops and Tool-Integrated Reasoning (TIR) into rollouts.
*   **Expanding to Alternative Alignment Paradigms:** Frameworks are branching out from standard PPO/GRPO. verl is implementing a native DPO pipeline, while TRL is aligning its KTO implementation and exploring weighted SFT/DPO for mixed-quality datasets.
*   **Frontier Model Support:** Ecosystems are rushing to support massive, sparse Mixture-of-Experts (MoE) models. Notable integrations include verl debugging Qwen3.5/3.6 MoE architectures and slime adding full support for the 256-expert MiniMax-M2.5.

**Engineering & Infrastructure Signals:**
*   **Async & Distributed Rollouts:** Moving away from Python threads to bypass GIL bottlenecks is a top priority. TRL is migrating workers to spawned child processes, while AReaL is overhauling its controller architecture for better async reward handling.
*   **Memory & Weight Transfer Optimizations:** As models scale, syncing weights between inference and training engines is a major bottleneck. Projects are integrating Ray Direct Transport (AReaL), fixing DeepSpeed ZeRO-3 + vLLM memory leaks (TRL), and exploring FP8 CUDA-IPC transfers (AReaL).
*   **Hardware Diversification:** To bypass GPU compute bottlenecks, verl is aggressively pushing hardware-agnostic scaling, specifically targeting Huawei Ascend NPUs and Intel XPUs.

## Differentiation Analysis
*   **Full-Stack LLM Alignment (verl, TRL):** These projects act as comprehensive frameworks. TRL dominates the HuggingFace/DeepSpeed ecosystem with tight model integration, while verl positions itself as the de facto standard for massive, hardware-agnostic RLHF and agentic training.
*   **Deep Systems Infrastructure (AReaL, slime):** These frameworks focus on the unglamorous "plumbing" of large-scale RL—optimizing Megatron-scale checkpointing, validating strict GPU placement groups, and managing high-throughput inference/acting transitions.
*   **Orchestration & Sandbox (ROCK, ROLL):** Alibaba's ROCK and ROLL differentiate by focusing on the cloud-native orchestration layer. They provide the state machines, Kubernetes quotas, and sandbox environments necessary to deploy RL pipelines at an enterprise level without crashing cluster nodes.
*   **Security & Local Iteration (OpenRLHF, Open Instruct):** OpenRLHF is currently prioritizing supply-chain security (patching dataset RCE vulnerabilities), whereas Open Instruct focuses on the "inner dev loop"—making local, non-containerized distributed Ray debugging painless for researchers.
*   **Traditional RL Environments (Gymnasium):** Firmly cemented in the classical ML era, Gymnasium focuses on maintaining standard APIs and simulation fidelity (e.g., MuJoCo physics) rather than LLM alignment.

## Community Momentum & Maturity
*   **Maturation of LLM RL:** The nature of the issues and PRs across verl, TRL, and slime shows a community dealing with production-level scaling problems (e.g., OOM mitigation, silent data corruption in MoEs, disk quota leaks) rather than prototyping new algorithms.
*   **Security Awareness:** The identification of arbitrary code execution vulnerabilities via `trust_remote_code=True` in OpenRLHF marks a turning point where the open-source RL community recognizes the security implications of massive, decentralized data ingestion.
*   **Sporadic Documentation Gaps:** While core systems are scaling rapidly, developer onboarding is lagging. Issues in ROLL and Gymnasium highlight a distinct need for better tutorials on coding agent integration and new MuJoCo environments.

## Trend Signals
*   **Prefix-Tree Shared Attention:** The highly upvoted RFC in verl to pack shared prefixes in GRPO training could soon become a standard optimization for multi-turn agentic RL, massively reducing redundant recomputation.
*   **Enterprise Adoption of Sandbox Orchestration:** The implementation of strict `SandboxStateMachines` and K8s disk quotas in ROCK signals that large-scale RL is moving out of pure research phases and into enterprise-grade, billable SaaS environments.
*   **The GPU alternatives are here:** The active merging of Ascend NPU support and the exploration of FP8 weight transfers indicate that 2026 is the year large-scale RL training fundamentally decouples from strict NVIDIA GPU dependency.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for May 22, 2026, based on the ROLL repository activity.

### 1. Today's Highlights
Activity on the Alibaba/ROLL repository over the past 24 hours shows a steady but quiet day, dominated by documentation updates and community integration queries. A documentation PR was successfully merged to support project hiring efforts, while an older community issue regarding environment integration continues to seek resolution. 

### 2. Releases
*   **No new releases** were cut in the last 24 hours. The project remains on its latest stable version.

### 3. Important Issues
*   **[OPEN] Query on ROCK Coding Agent Integration ([#361](https://github.com/alibaba/ROLL/issues/361))**
    *   **Context:** Opened originally in early March by user `shamanez`, this issue saw updated activity yesterday. The author is requesting a concrete tutorial or example for integrating ROCK's coding environment with ROLL, noting that their independent attempts have been unsuccessful. 
    *   **Analyst Take:** With 2 comments and counting, this highlights a documentation gap in the ecosystem. As RL for coding tasks (e.g., training LLM agents via RLHF) becomes a dominant paradigm, accessible environment integration guides are critical for open-source adoption.

### 4. Key PR Progress
*   **[CLOSED] Docs: Add Careers Page ([#448](https://github.com/alibaba/ROLL/pull/448))**
    *   **Context:** Opened and subsequently closed yesterday by contributor `kkkky123`. 
    *   **Details:** This PR introduced two commits adding a dedicated careers page to the ROLL documentation and embedding external application links. While not a core algorithmic update, it signals active scaling and investment by the team behind the framework.

### 5. Why This Project Matters in Today's RL Landscape
**ROLL (RL for Original and Large Language Models)** represents a critical shift in the open-source reinforcement learning ecosystem: the transition from traditional RL (e.g., robotics, gaming) to scalable infrastructure specifically designed for training and aligning Large Language Models (LLMs) and autonomous agents. 

The inquiry in Issue #361 regarding the "ROCK coding agent" is highly symptomatic of current RL trends. Post-2024, the frontier of open-source RL has pivoted heavily toward **agentive workflows**—using RL to fine-tune LLMs that can interact with coding environments, execute commands, and solve software engineering tasks. Frameworks like ROLL are essential because they provide the distributed, high-throughput infrastructure required to handle the massive rollout and reward calculation bottlenecks inherent in LLM alignment. Maintaining robust documentation for these complex environment integrations will be the key to unlocking broader community adoption.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for ROCK:

# RL Daily Digest: Alibaba/ROCK
**Date:** 2026-05-22

### 1. Today's Highlights
Activity on Alibaba's ROCK (Resource Orchestration and Comprehensive Knowledge) platform remains highly focused on infrastructure hardening and resource management. The maintainers officially shipped **v1.8.0**, while the daily development pipeline saw significant architectural refactoring with the introduction of a `SandboxStateMachine` and crucial feature expansions like K8s disk quota limits. 

### 2. Releases
*   **[v1.8.0](https://github.com/alibaba/ROCK/releases)**: The latest stable release brings several backend improvements, including the removal of the `need_database` marker, critical fixes for sandbox `_get_user_info` metrics, fetching sandbox images from `meta_store` rather than in-memory dictionaries, and enhancements to the scheduler.

### 3. Important Issues
*   **Silent OSS Upload Failures (Resolved):** [Issue #991](https://github.com/alibaba/ROCK/issues/991) highlighted a bug where `wget -c` caused `Sandbox.upload_by_path` to silently skip overwriting existing target paths in OSS. (Resolved via PR #992).
*   **Image Cleanup Gaps:** [Issue #995](https://github.com/alibaba/ROCK/issues/995) reports that the recently merged dangling-layer/BuildKit prune into `ImageCleanupTask` silently skips pruning after its initial run.
*   **K8s Disk Quotas Request:** [Issue #993](https://github.com/alibaba/ROCK/issues/993) requests the ability to set disk quota limits in K8s operator sandboxes (using both pool and template modes), noting that current constraints are limited to CPU and memory.

### 4. Key PR Progress
*   **Lifecycle Architecture:** [PR #988](https://github.com/alibaba/ROCK/pull/988) introduces a formal `SandboxStateMachine` (`not_exist` → `pending` → `running` → `stopped`). This is a critical refactor for standardizing sandbox lifecycle management, billing, and teardowns.
*   **K8s Disk Quotas:** [PR #994](https://github.com/alibaba/ROCK/pull/994) actively implements the requested disk quota support (closing #993) by adding a `disk: str = ""` field to the K8s `PoolConfig`.
*   **Granular Disk Monitoring:** [PR #983](https://github.com/alibaba/ROCK/pull/983) splits the monolithic `system.disk` metric into three independent gauges (`rootfs`, `log`, `dind`) to enable precise Grafana alerting without losing backward compatibility.
*   **Database Resilience:** [PR #987](https://github.com/alibaba/ROCK/pull/987) adds a retry mechanism for `SandboxTable` operations to gracefully handle stale connections following database restarts.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning requires massive, highly dynamic distributed compute. In large-scale RL training, sandbox environments are spun up and torn down by thousands of concurrent actors, which puts immense strain on cluster disk space, database connections, and orchestration state management. 

Today's updates in ROCK directly solve these infrastructure bottlenecks. The addition of K8s disk quotas and granular disk monitoring prevents runaway training logs or container layers from crashing worker nodes. Meanwhile, the transition to a strict `SandboxStateMachine` ensures robust state tracking and accurate billing. By stabilizing the orchestration layer, ROCK allows RL researchers to scale their algorithms without getting bogged down by infrastructure-level IO failures or resource leaks.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Ecosystem Daily Digest: slime
**Date:** 2026-05-22 | **Project:** [THUDM/slime](https://github.com/THUDM/slime)

## 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours was exclusively focused on pull requests (9 updated), with no new issues, bug reports, or releases. The development pulse indicates a strong push toward **infrastructure robustness** (GPU placement validation), **hardware efficiency** (variable batch sizes), and **ecosystem interoperability** (Trackio integration and MiniMax support). 

## 2. Releases
No new releases were recorded for 2026-05-22.

## 3. Important Issues
No new issues or updated issues in the past 24 hours. The PR pipeline appears to be driven by proactive feature development and internal testing rather than community bug reports.

## 4. Key PR Progress
Several significant contributions are currently shaping the training and rollout capabilities of the framework:

*   **Variable Global Batch Size Training:** Author `zhuzilin` is actively working on supporting variable global batch sizes for Megatron-backed training. PR [[#1930](https://github.com/THUDM/slime/pull/1930)] was closed and quickly superseded by [[#1933](https://github.com/THUDM/slime/pull/1933)] (`[run-ci-megatron] [2/N]...`), pointing to an ongoing structural refactor to optimize large-scale distributed training.
*   **Rollout Engine GPU Validation:** Author `fmh66` submitted [[#1934](https://github.com/THUDM/slime/pull/1934)], which adds explicit GPU placement boundary checks in `ServerGroup.start_engines()` before creating SGLang Ray actors. This replaces an earlier draft ([[#1931](https://github.com/THUDM/slime/pull/1931)]) and is crucial for preventing cryptic runtime failures in multi-node clusters.
*   **Critic Value Temperature Fix:** PR [[#1928](https://github.com/THUDM/slime/pull/1928)] by `Baiyu-Su` fixes a leaky abstraction where `rollout_temperature` was incorrectly applied to critic value-head outputs during shared `get_responses()` calls, ensuring proper scalar prediction integrity.
*   **New Model Plugin: MiniMax-M2.5:** Author `xs1997zju` introduced [[#1929](https://github.com/THUDM/slime/pull/1929)], adding full integration for the 256-expert, top-8 routed MiniMax-M2.5 model, including custom `SelfAttention` with full-dimension QK Norm and Tensor Parallel (TP) gather/scatter.
*   **Experiment Tracking & Debugging:** 
    *   `abidlabs` openened [[#1935](https://github.com/THUDM/slime/pull/1935)] to integrate Trackio (Hugging Face's local-first tracking library) as an alternative to W&B/TensorBoard.
    *   `wlf-darkmatter` updated [[#1922](https://github.com/THUDM/slime/pull/1922)], which fixes a distributed debug data overwrite bug by auto-appending `rollout_id` and `rank` to save paths.
*   **Memory Optimization:** A minor but notable closed PR [[#1932](https://github.com/THUDM/slime/pull/1932)] attempted to address host memory constraints.

## 5. Why This Project Matters in Today's RL Landscape
Modern reinforcement learning from human feedback (RLHF) and reasoning model training are heavily bottlenecked by distributed infrastructure orchestration—specifically, aligning massive inference rollouts (like SGLang/Ray actors) with gigantic training clusters (like Megatron). 

Today's activity in `slime` highlights exactly why this project is a key bellwether for the RL ecosystem: it is doing the unglamorous, highly complex work of bridging LLM inference and RL training. By implementing variable global batch sizes and validating strict GPU placement groups before engine startup, `slime` directly tackles the most common source of wasted compute hours in large-scale RL: silent failures and out-of-memory crashes during the transition between acting and learning phases. Furthermore, the rapid integration of cutting-edge Mixture-of-Experts (MoE) architectures like MiniMax-M2.5 ensures the framework remains immediately applicable to the next generation of frontier models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-22

Here is the daily briefing for the **inclusionAI/AReaL** repository, summarizing the top 8 issues and 7 pull requests updated in the last 24 hours.

## 1. Today's Highlights
*   **Infrastructure Overhaul:** Significant activity in core RL infrastructure, including a "controller v2" refactor and backports for HTTP/async reward handling cleanup.
*   **Weight Transfer Optimization:** A strong focus on speeding up weight synchronization, with new integrations for Ray Direct Transport (RDT) and requests for FP8 support in the colocated CUDA-IPC path.
*   **Bug Squashing:** The community is addressing a silent data corruption bug in online rollout modes and patching recently exposed config fields (like `async_save`) that were throwing `NotImplementedError`s.

## 2. Releases
*   **No new releases** were published today. 

## 3. Important Issues

*   **Silent Data Corruption in Online Rollouts:** User `CuritisSun` reported that using `rollout.agent.mode='online'` with `group_size > 1` silently produces incorrect groups, a critical catch for anyone running online RL training loops. ([#1304](https://github.com/inclusionAI/AReaL/issues/1304))
*   **Stale Regression in Distributed Setup:** A known bug ([#1298](https://github.com/inclusionAI/AReaL/issues/1298)) where `clear_batches()` crashes on non-DP-head ranks when Tensor/Model Parallelism > 1 is still awaiting a definitive fix.
*   **FP8 Colocated Transfers:** Maintainer `guozhihao-224` opened a feature request ([#1359](https://github.com/inclusionAI/AReaL/issues/1359)) to support FP8 weight transfers in the AWEX colocated CUDA-IPC path, which currently hardcodes FP8 conversion off. (An accidental duplicate issue, #1358, was immediately closed).
*   **Megatron Checkpointing:** Issue [#1355](https://github.com/inclusionAI/AReaL/issues/1355) flags that `MegatronEngineConfig.async_save` is exposed to users but crashes with a `NotImplementedError`.
*   **Architectural Decoupling:** An open discussion ([#1283](https://github.com/inclusionAI/AReaL/issues/1283)) proposes decoupling sandbox backends from the public namespace to better support Tool-Integrated Reasoning (TIR) workflows.

## 4. Key PR Progress

*   **Async Megatron Checkpointing:** Authored by `dingzhiqiang`, PR [#1356](https://github.com/inclusionAI/AReaL/pull/1356) resolves issue #1355 by properly wiring up `MegatronCheckpointManager` to use `AsyncCallsQueue`, enabling non-blocking checkpoint saves.
*   **Ray RDT Weight Syncing:** PR [#1305](https://github.com/inclusionAI/AReaL/pull/1305) introduces an experimental weight-syncing backend utilizing Ray Direct Transport (RDT), featuring a new FSDP adapter and IW scheduler bridge.
*   **Controller & Infra V2:** Maintainer `sitabulaixizawaluduo` pushed three infra-focused PRs today: a controller v2 refactor ([#1354](https://github.com/inclusionAI/AReaL/pull/1354)), an RL infra cleanup backport improving async rewards and HTTP client unification ([#1353](https://github.com/inclusionAI/AReaL/pull/1353)), and a quick CI fix for missing fields in controller tests ([#1357](https://github.com/inclusionAI/AReaL/pull/1357)).
*   **Agent Services & Examples:** PR [#1266](https://github.com/inclusionAI/AReaL/pull/1266) adds new runtime-oriented agent service APIs alongside experimental Tau2 and Claude examples.

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—dominated by massive LLM reasoning models (like OpenAI o1/o3 and DeepSeek-R1)—the bottleneck has shifted from algorithmic design to distributed systems engineering. AReaL represents the cutting-edge of open-source infrastructures tackling this bottleneck. 

Today's activity perfectly highlights this systemic focus: reconciling Megatron-scale distributed checkpointing, implementing CUDA-IPC/Ray weight transfers for rapid parameter updates, and building resilient controller architectures. For researchers and engineers training large reasoning models using RL, AReaL provides the critical, battle-tested systems layer required to scale from single-node experiments to massive, multi-node agent deployments.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL Daily Digest: 2026-05-22

## 1. Today's Highlights
Activity on the TRL (Transformer Reinforcement Learning) repository saw a high volume of updates with **23 PRs** and **9 Issues** active in the last 24 hours, with no new version releases. The day was heavily focused on stability and architectural improvements for Vision Language Models (VLMs), specifically addressing CI memory constraints (OOMs) and fixing training bugs for the Gemma and Qwen model families. Additionally, core architectural changes were proposed to offload asynchronous rollout generation from threads to separate processes to bypass GIL bottlenecks.

## 2. Releases
**None.** No new stable or patch releases were cut today.

## 3. Important Issues
*   **VLM Training Silently Corrupted:** Issue [#5785](https://github.com/huggingface/trl/issues/5785) highlighted a critical bug where opposite padding directions in `GRPOTrainer` silently corrupted multimodal context for VLMs. (Closed via PR #5789).
*   **Gemma 3 Token Type IDs:** Issue [#5807](https://github.com/huggingface/trl/issues/5807) reported that `SFTTrainer` crashed when fine-tuning Gemma 3 text-only models due to missing `token_type_ids` in the default data collator.
*   **Feature Requests - Weighted SFT & DPO:** The community is actively pushing for granular sample weighting. Issue [#5761](https://github.com/huggingface/trl/issues/5761) proposed **Weighted SFT** (scaling loss per token/sequence for mixed-quality data), and Issue [#5613](https://github.com/huggingface/trl/issues/5613) requested support for dataset-provided sample weights in `DPOTrainer`.
*   **CI Instability:** OOM errors in CI are causing test flakes, as noted in Issue [#5750](https://github.com/huggingface/trl/issues/5750).

## 4. Key PR Progress
*   **Async GRPO Architecture Overhaul:** PR [#5749](https://github.com/huggingface/trl/pull/5749) introduces a massive performance improvement by moving the `AsyncRolloutWorker` from a thread to a spawned child process, preventing the autograd engine from competing for the GIL during parsing/reward computation.
*   **Memory-Efficient vLLM + ZeRO-3:** PR [#5766](https://github.com/huggingface/trl/pull/5766) optimizes PEFT/LoRA weight synchronization, fixing out-of-memory errors when gathering parameters under DeepSpeed ZeRO-3.
*   **Gemma 3 Fix:** PR [#5809](https://github.com/huggingface/trl/pull/5809) quickly resolved the Gemma 3 training crash by patching the data collator to emit `token_type_ids`.
*   **VLM Bug Fixes:** Multiple merges stabilized VLM training, including fixing padding misalignment ([#5789](https://github.com/huggingface/trl/pull/5789)), fixing Qwen2.5-VL and Qwen3-VL vision encoder index out-of-range errors ([#5805](https://github.com/huggingface/trl/pull/5805), [#5779](https://github.com/huggingface/trl/pull/5779)), and adding a dedicated `Qwen3VLGRPOTrainer` ([#4529](https://github.com/huggingface/trl/pull/4529)). 
*   **CI Health:** PR [#5767](https://github.com/huggingface/trl/pull/5767) reduced `per_device_train_batch_size` in GRPO/RLOO VLM tests to combat persistent CI OOM errors.
*   **Metric Handling & KTO Alignment:** PR [#5811](https://github.com/huggingface/trl/pull/5811) fixed a `KeyError` bug with `metric_for_best_model`, and PR [#5810](https://github.com/huggingface/trl/pull/5810) began aligning `KTOTrainer`'s compute loss flow with `DPOTrainer`.

## 5. Why This Project Matters in Today's RL Landscape
As the open-source ecosystem shifts heavily toward complex reasoning models and Vision-Language Models (VLMs), TRL remains the foundational framework for production-level fine-tuning. Today's activity demonstrates the intense engineering effort required to make RLHF/PPO scale effectively. By resolving critical GIL bottlenecks in asynchronous generation ([PR #5749](https://github.com/huggingface/trl/pull/5749)) and optimizing memory footprints for vLLM + DeepSpeed ZeRO-3 ([PR #5766](https://github.com/huggingface/trl/pull/5766)), TRL is actively enabling developers to train massive multimodal models on distributed hardware without hitting Python-level throughput ceilings or silent data corruption issues.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-05-22

Here is the daily brief on the [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) repository.

### 1. Today's Highlights
The OpenRLHF repository observed minimal day-to-day operational activity over the last 24 hours, with zero new releases, zero new issues, and no merged PRs. However, an open Pull Request from earlier this week highlights a critical security vulnerability regarding arbitrary code execution in the project's dataset loading pipeline. 

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **No new or updated issues** were recorded in the last 24 hours.

### 4. Key PR Progress
While activity is slow today, a critical security patch remains open and warrants attention from maintainers and enterprise users:

*   **[OPEN] Security: Arbitrary Code Execution via trust_remote_code=True in Dataset Loading ([PR #1241](https://github.com/OpenRLHF/OpenRLHF/pull/1241))**
    *   **Author:** tuanaiseo
    *   **Summary:** This PR addresses a severe security vulnerability in the `blending_datasets` function located in `openrlhf/datasets/utils.py`. Currently, the function utilizes `trust_remote_code=True` when loading datasets from local or remote repositories that contain Python scripts (`.py` files or directories). This configuration opens the door for arbitrary code execution, allowing malicious actors to execute untrusted code simply by compromising a dataset repository. The PR aims to mitigate this remote code execution (RCE) attack vector.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily towards Reinforcement Learning from Human Feedback (RLHF) and its variants (RLAIF, DPO) to align Large Language Models (LLMs), OpenRLHF serves as a critical, production-ready open-source framework. It provides highly scalable, distributed training capabilities that bridge the gap between theoretical RL research and enterprise-scale model alignment. 

Today's highlighted PR (#1241) underscores a maturing ecosystem. As RL pipelines become increasingly complex and rely on vast, decentralized datasets (such as Hugging Face hubs), securing the data ingestion layer is paramount. Patching vulnerabilities like `trust_remote_code=True` RCEs ensures that researchers and corporations can safely fine-tune models without exposing their infrastructure to supply-chain attacks via compromised datasets.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl-project/verl
**Date:** 2026-05-22 | **Issues Updated:** 26 | **PRs Updated:** 45 | **New Releases:** 0

## 1. Today's Highlights
The verl ecosystem is experiencing a significant surge in activity, primarily driven by the maturation of **multi-turn Agent RL training** and expanding **multi-hardware backend support** (particularly Ascend NPUs). The community is actively fixing critical training stability bugs—specifically entropy collapse/explosion in GRPO and reasoning parser edge cases in MoE models—while proposing forward-looking architectural RFCs like Prefix-Tree Shared Attention and a unified DPO pipeline.

## 2. Releases
No new releases were cut in the last 24 hours. The ecosystem remains focused on merging upstream fixes and finalizing enhancements for the next stable iteration.

## 3. Important Issues
Several critical bugs and architectural discussions were updated today:

*   **Multi-Turn Agent RL Instability:** Users are reporting crashes during tool-calling RL training for MoE models (e.g., Qwen3.5/Qwen3.6 35B-A3B) due to malformed tool calls ([#6252](https://github.com/verl-project/verl/issues/6252)). A missing "reasoning parser" to strip `<think blocks>` before tool extraction has been identified as the root cause ([#6424](https://github.com/verl-project/verl/issues/6424)).
*   **Training Stability (Entropy Collapse/Explosion):** Mathematical GRPO training is suffering from sudden unexpected increases in entropy ([#2738](https://github.com/verl-project/verl/issues/2738)), while MoE models like Qwen3.5-35B-A3B are experiencing entropy collapse ([#5953](https://github.com/verl-project/verl/issues/5953)). Additionally, gradient norms are hitting NaNs when Sequence Parallelism is enabled for Qwen3.6-35B ([#6431](https://github.com/verl-project/verl/issues/6431)).
*   **Ascend NPU Ecosystem Expansion:** A 2026Q2 roadmap confirms native NPU support for MoE, VLM, and Agent scenarios ([#5526](https://github.com/verl-project/verl/issues/5526)). The community is also soliciting contributions for Ascend-specific recipes ([#6439](https://github.com/verl-project/verl/issues/6439)), though developers raised concerns about implementation bugs in the HCCL checkpoint engine ([#6425](https://github.com/verl-project/verl/issues/6425)).
*   **Performance RFC - Prefix-Tree Shared Attention:** A highly upvoted RFC proposes packing shared prefixes in GRPO/n-trajectory training to avoid redundant recomputation, which could massively speed up multi-turn RL ([#6401](https://github.com/verl-project/verl/issues/6401)).

## 4. Key PR Progress
Today's PRs focus heavily on Agent loop robustness, hardware scaling, and new training paradigms:

*   **[Agent Loop & Tool Calling]** 
    *   [`[rollout, agent-loop] feat: add reasoning parser...`](https://github.com/verl-project/verl/pull/6434): Fixes a critical pipeline flaw by stripping `<think blocks>` before tool extraction, resolving crashes in reasoning models like Qwen3.
    *   [`[rollout, tool] feat: add experimental agent framework and gateway runtime`](https://github.com/verl-project/verl/pull/6299): Introduces a robust, experimental multi-turn agent-style rollout gateway.
*   **[Training Paradigms & CI]** 
    *   [`[trainer] feat: DPO dataset and collator (1/n)`](https://github.com/verl-project/verl/pull/6441): The first step towards natively integrating Direct Preference Optimization (DPO) into verl.
    *   `[ckpt, model] fix: save LoRA train metadata...` ([#6409](https://github.com/verl-project/verl/pull/6409)) and `[fully_async] fix: initialize _dump_executor...` ([#6438](https://github.com/verl-project/verl/pull/6438)) resolve silent failures in PEFT/LoRA and async weight-syncing.
*   **[Hardware & Backend Scaling]**
    *   [`[Ascend] [megatron] feat: ascend bump into megatron 016`](https://github.com/verl-project/verl/pull/6374): Bumps Ascend NPU support to the latest Megatron core.
    *   [`[sglang, one_step_off] fix: add free_cache_engine guard`](https://github.com/verl-project/verl/pull/6442): Fixes a `KeyError: 'kv_cache'` crash during NCCL weight syncing in async trainers using SGLang.
    *   `[megatron,rollout] fix: align MTP loss and rollout metrics` ([#6432](https://github.com/verl-project/verl/pull/6432)): Isolates LM head logic to fix Multi-Token Prediction (MTP) training.

## 5. Why This Project Matters in Today's RL Landscape
verl is rapidly consolidating its position as the *de facto* open-source infrastructure for post-training and RLHF. Today's digest reveals two major industry trends reflected in verl's development:

1.  **The Shift to Agentic RL:** Single-turn RLHF is no longer enough. The bulk of verl's current bugs and PRs revolve around multi-turn "tool-calling" and "agent loops." Fixing the reasoning parser ([PR #6434](https://github.com/verl-project/verl/pull/6434)) and addressing train/serve mismatches ([Issue #5576](https://github.com/verl-project/verl/issues/5576)) show that the community is actively solving the complexities oflong-horizon generative agents.
2.  **Hardware-Agnostic RL:** As GPU compute bottlenecks tighten, verl is leading the charge in vendor diversification. The active integration of Intel XPUs ([Issue #6403](https://github.com/verl-project/verl/issues/6403)) and Huawei Ascend NPUs (via Megatron core bumps and HCCL fixes) demonstrates a strategic push to enable massive-scale RL training across global silicon architectures.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-05-22
**Project:** Open Instruct ([allenai/open-instruct](https://github.com/allenai/open-instruct))

## 1. Today's Highlights
The Open Instruct repository saw minimal broad activity over the last 24 hours but received a targeted technical contribution aimed at improving the local development experience for Reinforcement Learning (RL) practitioners. No new releases or issue updates were recorded.

## 2. Releases
*   **No new releases** were published today.

## 3. Important Issues
*   **None.** Zero issues were created or updated in the last 24 hours.

## 4. Key PR Progress
*   **[#1696 [OPEN] Export setuptools-scm pretend version in debug launch scripts](https://github.com/allenai/open-instruct/pull/1696)**
    *   **Author:** mnoukhov
    *   **Summary:** This PR modifies 45 local debug launch scripts (`scripts/train/debug/**/*.sh`) to explicitly export `SETUPTOOLS_SCM_PRETEND_VERSION_FOR_OPEN_INSTRUCT=0.0.0+debug`. 
    *   **Technical Impact:** It resolves a local environment friction point where `setuptools-scm` fails to dynamically infer the package version outside of the standard Dockerized environment. By mirroring the Docker environment's versioning, it ensures Ray-based distributed RL debug runs initialize correctly without forcing developers to build containers for rapid local testing.

## 5. Why This Matters in Today's RL Landscape
While infrastructure fixes may seem mundane, they are vital velocity multipliers in the modern RL landscape. Contemporary RL for LLMs relies heavily on complex distributed orchestration frameworks like Ray, which can be notoriously difficult to configure in local, non-containerized environments. By lowering the friction for local debug runs, this PR allows researchers and engineers to iterate on RL algorithms (like PPO or GRPO) much faster. Projects like Open Instruct serve as foundational toolkits for post-training and alignment, and streamlining the developer loop ensures that experimental RL ideas can be prototyped and validated rapidly before scaling to large GPU clusters.

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

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-05-22 | **Focus:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

Here is your daily briefing on the latest developments in the standard RL API repository.

### 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours was focused on MuJoCo-based environments, specifically regarding physics simulation bugs and documentation expansion. The repository saw moderate community engagement with **2 active issues** and **1 recently closed PR**. No new software releases were deployed.

### 2. Releases
*   **Status:** No new releases recorded for 2026-05-22. 

### 3. Important Issues
Two issues saw updates today, both highlighting the complexities of physics-based reinforcement learning environments:

*   **[Bug] Physics Penetration in Pusher-v5:** Issue [#1576](https://github.com/Farama-Foundation/Gymnasium/issues/1576) reports a collision detection failure where the robot arm bypasses physical constraints and penetrates objects instead of pushing them. This is a critical reminder of the simulation-to-reality (sim2real) gaps that can occur even in modern MuJoCo environments.
*   **[Enhancement] MuJoCo Tutorials Call:** Issue [#846](https://github.com/Farama-Foundation/Gymnasium/issues/846) remains a focal point for community contributions. Initially opened in late 2023, it outlines the need for comprehensive tutorials alongside the upcoming `MuJoCo-v5` rollout. The issue specifically requests guides on loading custom quadruped and robot arm models.

### 4. Key PR Progress
*   **[Docs] HalfCheetah-v5 Tutorial (Closed):** PR [#1582](https://github.com/Farama-Foundation/Gymnasium/pull/1582) was closed today. Submitted to add an introductory tutorial for the `HalfCheetah-v5` environment, the quick closure indicates either a pivot in documentation strategy or a need for the author to refine the PR to meet the repo's strict documentation standards. 

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium continues to be the bedrock API for the Reinforcement Learning open-source community. Today's data highlights two ongoing technical struggles in the RL landscape:
1.  **Simulation Fidelity:** As noted in Issue [#1576](https://github.com/Farama-Foundation/Gymnasium/issues/1576), robust physics simulation (like collision dynamics in MuJoCo) remains a non-trivial challenge. Accurate baseline environments are crucial for researchers to benchmark continuous control algorithms without fighting sim artifacts.
2.  **Onboarding Barriers:** The push for `MuJoCo-v5` documentation (Issue [#846](https://github.com/Farama-Foundation/Gymnasium/issues/846)) reflects the ecosystem's need for accessible entry points. As MuJoCo becomes increasingly open-source and standard in academic research, lowering the barrier to entry for custom environment design is vital for the next generation of robotic RL research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>