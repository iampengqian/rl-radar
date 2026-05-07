# RL Open Source Daily Digest 2026-05-08

> Generated: 2026-05-07 22:18 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem is currently characterized by a stark divide between the high-velocity evolution of LLM post-training infrastructure and the quiet maintenance of foundational algorithm libraries. Activity on 2026-05-08 was overwhelmingly dominated by frameworks orchestrating RL for Large Language Models (RLHF/RLAIF). 

The core focus across the active LLM-RL projects has shifted from basic PPO implementations to solving complex systems bottlenecks: multi-turn agentic workflows, high-throughput MoE training, heterogeneous hardware support, and inference-training colocation. Meanwhile, classic deep RL environments and algorithm suites (e.g., CleanRL, Stable Baselines3) saw zero activity, highlighting a mature plateau in traditional RL tooling compared to the rapid iteration in LLM alignment.

## Activity Comparison

*Active LLM Post-Training & Infrastructure:*

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 13 | 29 | 0 | Agentic abstractions, Ascend NPU support, distributed SP/CP fixes. |
| **TRL** | 4 | 10+ | 0 | MoE scaling to 235B params, async LoRA, compute/memory leak patches. |
| **AReaL** | 4 | 8 | 1 (v1.0.4) | MoE routing replay, zero-copy CUDA IPC, strict 2-approval governance. |
| **Open Instruct** | 1 | 8 | 0 | Deep GRPO observability, FSDP2 attention mismatches, curriculum learning. |
| **ROCK** | 3 | 4 | 0 | Trajectory distillation for agents, sandbox lifecycle state-machines. |
| **ROLL** | 2 | 3 | 0 | Atropos agentic adapter, AMD ROCm double-buffering optimizations. |
| **OpenRLHF** | 1 | 1 | 0 | TokenSpeed rollout engine integration, multi-node Ray failures. |
| **slime** | 1 | 1 | 0 | Delta-compression for weight sync, Qwen3.5 integration bugs. |
| **rl_games** | 0 | 1 | 0 | Custom multi-GPU safe stop-callbacks for PPO/SAC. |
| **Gymnasium** | 0 | 3 | 0 | Overhaul of `VectorEnv` static typing and `TypeVar` variance. |

*No Activity (Grouped):*
*   **CleanRL, PettingZoo, Stable Baselines3, Tianshou, torchtune:** No merges, issues, or releases recorded in the last 24 hours.

## Shared Research & Engineering Directions

**Research Signals**
*   **Advanced On-Policy/Off-Policy Corrections:** Frameworks are moving past naive PPO/GRPO. Open Instruct introduced the IcePop off-policy correction algorithm, and TRL integrated the ICML 2026 Spotlight algorithm *RandOpt*.
*   **Curriculum & Sample Efficiency:** Both Open Instruct and rl_games are building hooks for difficulty-based curriculum sampling, reflecting a need to improve sample efficiency in increasingly expensive RL loops.
*   **Agent & Trajectory Distillation:** With the rise of RLAIF, distilling multi-step trajectories from large teacher models into smaller student policies is becoming standardized (e.g., ROCK's new SWE-bench distillation pipeline).

**Engineering & Infrastructure Signals**
*   **Inference-Training Colocation & Weight Sync:** The most competitive engineering bottleneck is network overhead. AReaL (CUDA IPC zero-copy), slime (Delta compression), and ROLL (Ray Core RDT) are all actively building optimized pipelines to sync weights between training and inference engines.
*   **Mixture-of-Experts (MoE) at Scale:** Stabilizing distributed RL for massive MoE models (like Qwen3.5) is a universal challenge. TRL is tracking MFU for 235B param models, AReaL is implementing routing replay for MoEs, and verl is resolving specific MoE Expert Parallelism bugs.
*   **Agentic RL Infrastructure:** Infrastructure is pivoting to support tool-calling and multi-turn loops. verl introduced a Trajectory Gateway, ROLL integrated Atropos environments, and TRL is refining OpenReward specifications for tool-calling agents.
*   **Hardware Diversification:** The ecosystem is actively breaking NVIDIA's monopoly. Verl is heavily integrating Huawei Ascend NPUs, and ROLL merged explicit AMD ROCm optimizations for distributed updates.

## Differentiation Analysis

*   **Hyper-Scale Orchestration vs. Modular Alignment:** Projects like **verl**, **AReaL**, and **OpenRLHF** are competing directly to build the ultimate monolithic, high-throughput distributed engine for massive clusters. Conversely, **TRL** maintains its edge by acting as a modular bridge, focusing on implementing the newest research algorithms (like RandOpt) and seamlessly integrating with HuggingFace ecosystem standards.
*   **Agentic Sandboxing vs. Distributed Training:** **ROCK** differentiates itself by focusing specifically on the environment side of RLAIF—specifically the safe orchestration of sandboxed tool-using agents. In contrast, frameworks like **slime** and **OpenRLHF** focus entirely on the model/weight side, optimizing rollout engines (like TokenSpeed or vLLM).
*   **API Maturity:** **Gymnasium** operates in a completely different layer of the stack. While LLM projects fight over GPU memory and network fabrics, Gymnasium is focused on the ergonomics of the Python API itself, ensuring strict typing for highly-parallelized traditional RL environments.

## Community Momentum & Maturity

*   **Mature Governance:** **AReaL** codified its maturity today by enforcing a strict 2-approval merge policy and setting up a public Q2 Milestone tracker. This signals a transition from a fast-paced internal tool to a stable, community-facing project.
*   **Corporate Velocity vs. Community Demand:** Projects backed by major tech players (volcengine/verl, alibaba/ROLL, THUDM/slime) show high commit velocity driven by internal needs (e.g., NPU support, custom inference backends). However, they also face the friction of supporting rapidly changing open-weight models, as seen in the immediate user reports of Qwen3.5 integration bugs across verl and slime.
*   **Classic RL Stagnation:** The complete inactivity across standard algorithm suites (CleanRL, SB3, Tianshou) suggests that the center of gravity for open-source RL momentum has entirely shifted toward LLM post-training. 

## Trend Signals

1.  **The Rollout Backend Wars:** The next frontier for LLM RL infrastructure is inference speed during generation. The integration of TokenSpeed in OpenRLHF, TensorRT-LLM in verl, and SGLang in AReaL signals that pluggable, highly optimized rollout engines will become a standard competitive feature.
2.  **From RLHF to RLAIF via Trajectories:** 2026 is seeing the formalization of "Agentic RL." The infrastructure is shifting from scoring single-turn human preferences to executing complex, multi-turn tool-using trajectories (verl's Agent RFC, ROCK's distillation guides).
3.  **The Context/Memory Wall:** As context windows explode, distributed parallelism (Sequence Parallelism, Context Parallelism) is failing under edge cases (e.g., verl's Qwen-3.5 shape mismatches). Solving context-level memory distribution will dictate which frameworks can successfully train next-generation reasoning models.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for May 8, 2026, focusing on the ROLL framework.

### 1. Today's Highlights
Activity on alibaba/ROLL over the last 24 hours indicates a strong push towards heterogeneous hardware support (AMD ROCm) and agentic ecosystem integrations (NousResearch Atropos). The community is actively proposing architectural improvements for distributed weight synchronization and expanding ROLL's application in LLM/VLM reinforcement learning research. 

### 2. Releases
**No new releases** were recorded in the last 24 hours.

### 3. Important Issues
*   **[RFC] Ray Core RDT for Weight Synchronization ([#431](https://github.com/alibaba/ROLL/issues/431))**
    *   *Overview:* An active Request for Comments proposing an upgrade to ROLL's weight synchronization between training and inference engines. The author identifies a bottleneck in the legacy `ccl` broadcast method—specifically a single-GPU source constraint (trainer rank 0)—and suggests integrating Ray Core RDT to streamline collocated and separated synchronization workflows.
*   **Support for Qwen3.5-9B LoRA Pipelines ([#434](https://github.com/alibaba/ROLL/issues/434))**
    *   *Overview:* A user-driven feature request inquiring about native support for LoRA fine-tuning on the newly released Qwen3.5-9B model series, highlighting community demand for adapting ROLL to the latest foundational models.

### 4. Key PR Progress
*   **Integrating Atropos Environments ([#426](https://github.com/alibaba/ROLL/pull/426)) | [OPEN]**
    *   *Overview:* A significant integration PR that introduces [Atropos](https://github.com/NousResearch/atropos) as a modular agentic adapter. It implements a "Universal Reward Bridge," enabling ROLL to seamlessly ingest rewards from diverse Atropos environments, moving the framework closer to natively supporting complex agentic RL tasks.
*   **Optimizing ROCm for `send_recv` and `model_update` ([#424](https://github.com/alibaba/ROLL/pull/424)) | [CLOSED/MERGED]**
    *   *Overview:* This merged PR brings conditional optimizations for AMD GPU (ROCm) architectures. It implements double buffering logic for tensor buckets and adds necessary `dist.barrier()` checks to prevent data overwriting during distributed model updates.
*   **Featured Community Work: Freshness-Aware-PER ([#433](https://github.com/alibaba/ROLL/pull/433)) | [CLOSED/MERGED]**
    *   *Overview:* A documentation update successfully adding the paper "Freshness-Aware Prioritized Experience Replay for LLM/VLM Reinforcement Learning" to the project's "Notable work based on ROLL" section.

### 5. Why This Project Matters in Today's RL Landscape
In the rapidly evolving landscape of post-training and RLHF/RLAIF for LLMs, execution speed and hardware flexibility are critical bottlenecks. ROLL’s ongoing developments demonstrate its maturation into a highly adaptable distributed RL framework. 
*   **Agentic Capabilities:** The integration of Atropos ([#426](https://github.com/alibaba/ROLL/pull/426)) is a strong indicator that ROLL is pivoting to support multi-step, tool-using agentic workflows, which are currently the frontier of LLM research.
*   **Hardware Agnosticism:** The ROCm optimizations ([#424](https://github.com/alibaba/ROLL/pull/424)) show a commitment to breaking Nvidia's monopoly on large-scale RL training by ensuring high performance on AMD clusters.
*   **Cutting-Edge Research:** Community projects like Freshness-Aware-PER ([#433](https://github.com/alibaba/ROLL/pull/433)) prove that ROLL is not just an internal engineering tool, but a robust foundational layer enabling external academic and industrial advancements in Experience Replay mechanisms.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-05-08 | **Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

## 1. Today's Highlights
The ROCK (Resource-Orchestrated Cognitive Kernel) project saw a highly focused day of development, centering on two critical areas: enhancing observability for sandbox environments and expanding platform capabilities for Agent training. 
*   **Bug Squashing:** Two persistent bugs regarding sandbox metrics misreporting were officially resolved and merged.
*   **New Features:** A major new feature for "Trajectory Distillation" was proposed and immediately accompanied by a robust pull request, indicating strong internal alignment.
*   **Infrastructure:** A new state-machine refactor for the Sandbox Manager lifecycle was introduced.

## 2. Releases
*   **None.** No new releases were cut in the last 24 hours.

## 3. Important Issues
*   **[NEW] [#916](https://github.com/alibaba/ROCK/issues/916) [OPEN]: Request for a Trajectory Distillation Best Practice Guide.** With the rising popularity of using powerful Teacher models to generate behavioral data for smaller Student models, contributor *Issac-Newton* formally requested documentation on utilizing the ROCK Job system specifically for this distillation workflow.
*   **[#912](https://github.com/alibaba/ROCK/issues/912) & [#910](https://github.com/alibaba/ROCK/issues/910) [CLOSED]: Metrics Blindspots.** Both issues highlighted critical observability flaws in the `SandboxManager` where `user_info` and `image` metrics defaulted to generic values because the system was reading from transient in-memory dicts rather than the persistent Redis-backed `meta_store`. Both were successfully closed today.

## 4. Key PR Progress
*   **[#917](https://github.com/alibaba/ROCK/pull/917) [OPEN]: Docs & Examples for Trajectory Distillation.** Directly addressing Issue #916, this PR introduces bilingual documentation, configuration templates, and example code. Notably, the author validated the pipeline end-to-end using SWE-bench with a `swe-agent`, demonstrating production readiness.
*   **[#913](https://github.com/alibaba/ROCK/pull/913) [CLOSED] & [#911](https://github.com/alibaba/ROCK/pull/911) [CLOSED]: Metrics Fixes.** These PRs successfully patched the sandbox metrics bugs. The code now fetches `image` data directly from the persistent `meta_store` and fixes the `_get_user_info` decorator's provider logic, ensuring accurate sandbox monitoring across process restarts.
*   **[#915](https://github.com/alibaba/ROCK/pull/915) [OPEN]: Sandbox Lifecycle Refactor.** Contributor *zhangjaycee* introduced a transition-table for the `SandboxManager` lifecycle, replacing ad-hoc state changes with a formalized state machine. This will make sandbox orchestration safer and more predictable.

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, the paradigm is shifting rapidly from static RLHF (Reinforcement Learning from Human Feedback) toward dynamic, agent-based workloads—often referred to as Reinforcement Learning from AI Feedback (RLAIF) or trajectory distillation. 

Today's updates to ROCK reveal exactly how infrastructure must adapt to support this shift:
1.  **Orchestrating Distillation:** ROCK is positioning itself not just as an RL training framework, but as an end-to-end agent data factory. The new trajectory distillation pipeline (PR [#917](https://github.com/alibaba/ROCK/pull/917)) acknowledges that collecting Teacher Agent experiences on complex benchmarks like SWE-bench is now a primary use case for RL engineers.
2.  **High-Fidelity Observability:** As RL training loops become increasingly distributed and reliant on ephemeral, sandboxed tool-using agents (e.g., code interpreters), monitoring becomes a bottleneck. The metrics fixes merged today (PRs [#913](https://github.com/alibaba/ROCK/pull/913), [#911](https://github.com/alibaba/ROCK/pull/911)) and the new lifecycle state machine (PR [#915](https://github.com/alibaba/ROCK/pull/915)) are essential engineering feats required to track exact resource utilization and debug complex agent environments at scale.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-05-08

Here is your daily brief on the `slime` repository, a prominent framework for large-scale reinforcement learning post-training. 

### 1. Today's Highlights
Activity over the past 24 hours indicates ongoing development aimed at optimizing large-scale distributed RL infrastructure. The spotlight is on a significant proposed feature for bandwidth-efficient weight synchronization, alongside active troubleshooting for integrating cutting-edge open-weight models like Qwen3.5.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **[Bug] `NoneType` error when integrating Qwen3.5-9b:** User `cjy0x` reported a crash (`'NoneType' object has no attribute 'megatron_module'`) when attempting to train the `qwen3_5-9b` model. This suggests a potential initialization or compatibility gap in `slime`'s model wrappers for the newest Qwen architecture. 
    *   **Status:** Open | **Reactions:** 0 | **Comments:** 0
    *   **Link:** [THUDM/slime Issue #1894](https://github.com/THUDM/slime/issues/1894)

### 4. Key PR Progress
*   **[WIP] Delta Compression for Weight Sync:** PR #1806 by `nanjiangwill` introduces optional delta-compression for trainer-to-rollout-engine weight synchronization. This is a critical performance optimization for distributed RL. 
    *   **Context:** The author explicitly draws inspiration from recent industry breakthroughs, citing Cursor's *Composer 2* paper and Fireworks' *Frontier RL Is Cheaper Than You Think* research. 
    *   **Impact:** By transmitting only weight deltas (changes) rather than full model states, this feature could drastically reduce network bottlenecks in large-scale RLHF/GRPO pipelines.
    *   **Status:** Open (Created on 2026-04-05, updated yesterday) | **Reactions:** 0
    *   **Link:** [THUDM/slime PR #1806](https://github.com/THUDM/slime/pull/1806)

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward Reinforcement Learning from Human Feedback (RLHF) and advanced reasoning paradigms (like GRPO) to refine LLMs, the computational cost of the "RL step" has become a primary bottleneck. 

The `slime` framework operates precisely in this challenging domain. PR #1806's focus on delta compression aligns directly with the current frontier research goal: achieving scalable, multi-node RL training without choking the network during actor/weight synchronization. Furthermore, Issue #1894 highlights the community's immediate demand to run these expensive RL pipelines on the latest state-of-the-art open-source models (like Qwen3.5), proving that `slime` is actively being utilized as a vehicle for bleeding-edge LLM post-training.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-08

## 1. Today's Highlights
The AReaL ecosystem saw a significant spike in infrastructure and governance activity over the past 24 hours. The maintainers shipped **v1.0.4**, formally established a **2-approval merge policy** for the `main` branch, and published the **2026 Q2 Milestone Tracker**. Under the hood, development is heavily focused on asynchronous RL training stability (MoE routing replay), inference-training colocation (CUDA IPC weight transfers), and advanced tree-attention capabilities. 

## 2. Releases
*   **[v1.0.4](https://github.com/inclusionAI/AReaL/releases/tag/v1.0.4)**
    *   **FSDP Fix:** Resolved an initialization bug for set-valued wrap class names.
    *   **Repo Maintenance:** Reorganized repository figures into `assets/figures/` and added a community meeting folder.

## 3. Important Issues
*   **Roadmap Published:** [Issue #1302](https://github.com/inclusionAI/AReaL/issues/1302) introduces the 2026 Q2 Milestone Tracker, calling for community contributions on planned enhancements through July.
*   **MoE Migration:** [Issue #1260](https://github.com/inclusionAI/AReaL/issues/1260) proposes migrating the primary Megatron integration library from `mbridge` to the official `megatron-bridge`.
*   **Inference/Training Routing Bug:** [Issue #1308 (CLOSED)](https://github.com/inclusionAI/AReaL/issues/1308) flagged a critical bug in `_gather_packed_tree_logprobs` where spurious transition logprobs were appended to the last node in a sequence.
*   **Silent Data Corruption:** [Issue #1304](https://github.com/inclusionAI/AReaL/issues/1304) reported that online rollout mode (`rollout.agent.mode='online'`) silently produces incorrect groups when `group_size > 1`.

## 4. Key PR Progress
*   **Architecture & Infra:**
    *   [PR #1310](https://github.com/inclusionAI/AReaL/pull/1310): Introduces colocated CUDA IPC weight transfers for `awex`, enabling zero-copy weight updates between Megatron training and SGLang inference on the same GPUs.
    *   [PR #1294 (CLOSED)](https://github.com/inclusionAI/AReaL/pull/1294): Optimized controller initialization by running heavyweight post-worker setups in background threads.
*   **Advanced RL Features (WIP/High Priority):**
    *   [PR #1207](https://github.com/inclusionAI/AReaL/pull/1207): Implements Rollout Routing Replay (R3) for MoE models to prevent training instability caused by inference-training routing discrepancies.
    *   [PR #1287](https://github.com/inclusionAI/AReaL/pull/1287): Adds a ZERO1 + Dynamic Tree Attention (DTA) path for the Archon training engine.
    *   [PR #1270](https://github.com/inclusionAI/AReaL/pull/1270): WIP implementation adding support for the Muon optimizer.
    *   [PR #1162](https://github.com/inclusionAI/AReaL/pull/1162): Implements Pipeline Parallelism (PP) for the SGLang inference backend.
*   **CI/CD & Governance:**
    *   [PR #1307 (CLOSED)](https://github.com/inclusionAI/AReaL/pull/1307): Enforced strict 2-maintainer approval and code-owner review policy for merging into `main`.
    *   [PR #1313](https://github.com/inclusionAI/AReaL/pull/1313): Upgraded nightly CI workflows to run actual gsm8k GRPO training jobs in round-robin across FSDP, Megatron, and Archon backends.

## 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and advanced post-training paradigms like GRPO, the bottleneck has shifted from model architecture to **systems-level orchestration**. AReaL is tackling the most pressing hardware-software co-design challenges in the RL landscape today. 

Today's digest reveals aggressive engineering toward **inference-training colocation** (cutting network overhead via CUDA IPC) and **MoE stability** (synchronizing expert routing across async inference and training steps). By standardizing these complex distributed operations and hardening their CI/CD with real training workloads, AReaL is positioning itself as a critical, production-grade framework for the next generation of high-throughput, compute-bound LLM reasoning models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (huggingface/trl) 
**Date:** 2026-05-08

## 1. Today's Highlights
The TRL ecosystem is experiencing a surge in contributions aimed at scaling infrastructure and refining GRPO (Group Relative Policy Optimization) tooling. The main themes for the day are **frontier-scale MoE training optimization**, expanding **tool-calling capabilities** for GRPO agents, and critical patches for **memory leaks and compute waste** in distillation and activation offloading. 

## 2. Releases
No new releases were cut in the last 24 hours.

## 3. Important Issues
*   **Scaling to 30B MoE Long-Context SFT:** A new tracking issue ([#5713](https://github.com/huggingface/trl/issues/5713)) outlines the roadmap for training Qwen3-30B-A3B (up to 235B parameters) at context lengths of 16k to 1M on 8×H100 nodes while maintaining competitive Model FLOPs Utilization (MFU).
*   **Expanding Structed Generation & Rewards:** Two issues highlight upcoming feature expansions for GRPO. Issue [#5724](https://github.com/huggingface/trl/issues/5724) requests first-class support for `response_schema` arguments to bypass template fingerprinting. Meanwhile, [#5727](https://github.com/huggingface/trl/issues/5727) reports a bug where `OpenRewardSpec` fails to discover task-specific `/task_tools` during rollout binding.

## 4. Key PR Progress
*   **Algorithms & Architecture Expansions:**
    *   **New Algo - RandOpt:** Support for the ICML 2026 Spotlight algorithm *RandOpt* (Gaussian random search and ensembling) was introduced in PR [#5719](https://github.com/huggingface/trl/pull/5719).
    *   **GRPO + Tooling:** PR [#5729](https://github.com/huggingface/trl/pull/5729) introduces an OpenReward GRPO notebook and fixes the critical task-specific tool binding bug reported in #5727. 
    *   **LoRA for AsyncGRPO:** PR [#5610](https://github.com/huggingface/trl/pull/5610) bridges a major gap by adding LoRA support for AsyncGRPO using HTTP reload instead of NCCL to resolve vLLM parameter name mismatches.
*   **Performance & Memory Optimizations:**
    *   **Compute Savings:** PR [#5726](https://github.com/huggingface/trl/pull/5726) fixes a massive compute waste in `GKDTrainer` where setting `seq_kd=True` previously generated and discarded 50-100% of teacher outputs.
    *   **Memory Leak Fix:** PR [#5700](https://github.com/huggingface/trl/pull/5700) resolves a >5 GB CUDA memory leak in activation offloading by properly syncing streams and clearing stashes in `OffloadActivations.__exit__`.
    *   **MFU Tracking:** To support issue #5713, PR [#5698](https://github.com/huggingface/trl/pull/5698) adds pure helper functions to compute training FLOPs per token for dense and MoE architectures.
*   **Core Maintenance & Bug Fixes:**
    *   **Deprecations:** PR [#5717](https://github.com/huggingface/trl/pull/5717) drops the deprecated `torch_dtype` kwarg across `from_pretrained` and trainer inits in favor of `dtype`.
    *   **Reward Trainer Fix:** PR [#5722](https://github.com/huggingface/trl/pull/5722) fixes silent data loss in `DataCollatorForPreference` where margin keys were only checked in the first batch example.
    *   **Distillation Fixes:** Alongside the GKD fix, PR [#5725](https://github.com/huggingface/trl/pull/5725) finally implements the unactive `seq_kd` flag in the `GOLDTrainer`.

## 5. Why This Project Matters in Today's RL Landscape
As the post-training landscape shifts heavily toward policy-gradient methods (like GRPO and PPO) over traditional supervised fine-tuning, TRL remains the de-facto open-source bridge between cutting-edge research and production infrastructure. Today's activity perfectly illustrates the current maturation of the RLHF ecosystem:
1.  **Scaling Efficiency:** Moving from toy models to frontier MoE architectures (like Qwen3-30B) requires obsessing over MFU and context lengths, as seen in the new SFT scaling paths.
2.  **Agentic RL:** Integrating structured generation schemas and tool-calling directly into the reward/rollout loops (OpenReward) shows that TRL is rapidly adapting to the shift toward tool-using LLM agents rather than just text-completers. 
3.  **Resource Optimization:** Fixing large-scale memory leaks and wasted forward passes proves that the community is highly focused on the practical, hardware-bound economics of post-training compute.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF — 2026-05-08

## 1. Today's Highlights
Activity in the OpenRLHF repository over the past 24 hours has been highly focused on infrastructure scalability and inference backend flexibility. A new pull request introduces a high-performance rollout engine, while a newly opened issue highlights persistent challenges in distributed multi-node setups.

## 2. Releases
**No new releases** were recorded in the last 24 hours. Development remains focused on merging upstream features and resolving distributed training bugs.

## 3. Important Issues
*   **Multi-Node Ray Compatibility Failure**
    *   **Issue:** [#1236 [OPEN] ray error for multi-nodes training](https://github.com/OpenRLHF/OpenRLHF/issues/1236)
    *   **Context:** A user reported that Ray `2.55.0` fails when attempting multi-node training. The error occurs when launching the hybrid engine via `train_vlm_math_hybrid_engine.sh` using `ray job submit`. 
    *   **Takeaway:** As distributed LLM training clusters scale out, dependency and runtime environment management (specifically with Ray) remain critical pain points for practitioners.

## 4. Key PR Progress
*   **Integration of TokenSpeed for PPO Rollouts**
    *   **PR:** [#1237 [OPEN] Add TokenSpeed-backed PPO rollout engine](https://github.com/OpenRLHF/OpenRLHF/pull/1237)
    *   **Author:** 4teven
    *   **Context:** This PR introduces TokenSpeed as an optional generation backend (`--vllm.rollout_backend tokenspeed`). It implements a `RolloutRayActor`-compatible wrapper to handle generation, weight synchronization, memory control, and cache resets, ensuring output shapes align with existing PPO consumption pipelines.
    *   **Takeaway:** A highly technical and valuable addition. Pluggable rollout engines allow users to bypass vLLM bottlenecks, offering potentially massive throughput improvements for large-scale PPO generation phases.

## 5. Why This Project Matters in Today's RL Landscape
In the modern RLHF ecosystem, the primary bottleneck in RL fine-tuning is no longer just the critic/actor gradient computation, but the *inference speed* during the rollout phase. OpenRLHF’s modular, Ray-based architecture makes it an industry standard for distributed post-training. 

Today's activity perfectly illustrates the project's current trajectory: pushing the boundaries of inference backends (via [#1237](https://github.com/OpenRLHF/OpenRLHF/pull/1237) TokenSpeed integration) to accelerate rollout generation, while simultaneously battling the inherent complexities of distributed compute environments (seen in [#1236](https://github.com/OpenRLHF/OpenRLHF/issues/1236)). OpenRLHF remains a critical barometer for how the open-source community is engineering solutions for large-scale, distributed RL alignment.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-05-08 | **Project:** [volcengine/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
The verl ecosystem experienced high velocity today with **29 active Pull Requests** and **13 updated Issues**. Activity heavily converged on four fronts: expanding Ascend NPU compatibility, refining async/multi-turn agent architectures, resolving distributed training edge-cases (Sequence/Context Parallelism), and modernizing the CI/CD pipeline. 

## 2. Releases
*   **No new releases** were published today.

## 3. Important Issues
*   **[RFC] Agent Abstractions and Trajectory Gateway ([#5790](https://github.com/verl-project/verl/issues/5790)):** A highly popular RFC (18 upvotes) proposing `AgentFramework` to manage agent lifecycles and reward computation. This signals a major architectural shift toward robust, multi-turn agentic RL.
*   **[RFC] Support NCCL Suspend/Resume in Colocated Mode ([#6266](https://github.com/verl-project/verl/issues/6266)):** Proposes suspending idle NCCL communications in colocated training/rollout setups. This is a critical performance optimization for reclaiming GPU memory and network resources during inference phases.
*   **Qwen-3.5 Distributed Parallelism Bugs:** Users reported tensor shape mismatches specifically with Qwen-3.5 when utilizing Sequence Parallelism ([#6094](https://github.com/verl-project/verl/issues/6094)) and requested official support for Context Parallelism ([#5912](https://github.com/verl-project/verl/issues/5912)).

## 4. Key PR Progress
*   **Architecture & Async Paradigms:**
    *   **[#5990](https://github.com/verl-project/verl/pull/5990):** Introduces a standalone `Model Engine Server` for the fully async pipeline, decoupling `old_log_probs` computation from the actor engine to save weight-sync overhead.
    *   **[#6228](https://github.com/verl-project/verl/pull/6228):** Implements multi-output trajectory support for async reward scoring, essential for complex multi-turn agent loops.
*   **Distributed Training & Parallelism Fixes:**
    *   **[#6268](https://github.com/verl-project/verl/pull/6268):** Resolves label misalignment in SP (Sequence Parallelism) fused kernels.
    *   **[#6267](https://github.com/verl-project/verl/pull/6267):** Corrects `position_ids` offsets when Context Parallelism (cp) is activated in the Megatron backend.
    *   **[#5423](https://github.com/verl-project/verl/pull/5423):** Brings Megatron-FSDP hybrid mode to the Megatron backend for both SFT and RL workloads.
*   **Hardware & Model Support:**
    *   **Ascend NPU:** Heavy ongoing integration, with recent fixes for vLLM-Ascend rollout failures ([#6224](https://github.com/verl-project/verl/issues/6224)) and NPU/GPU script unification ([#6164](https://github.com/verl-project/verl/issues/6164)).
    *   **[#6264](https://github.com/verl-project/verl/pull/6264):** Adds a GRPO demo for the massive Qwen3.5-122B-A10B MoE model utilizing VeOmniEngine with Expert Parallelism.
    *   **[#5631](https://github.com/verl-project/verl/pull/5631):** Merges Async RL support for the TensorRT-LLM (TRTLLM) rollout backend.
*   **UX & Tooling:**
    *   **[#6189](https://github.com/verl-project/verl/pull/6189):** Simplifies tool creation by allowing lightweight Python function decorators instead of verbose YAML configurations.

## 5. Why This Project Matters in Today's RL Landscape
As the open-source community rapidly shifts from single-turn RLHF to complex, long-context **agentic RL** (e.g., tool use, multimodal reasoning), infrastructure is the primary bottleneck. Today's activity in the verl repository proves it is uniquely positioned to solve this. 

By actively resolving Sequence/Context parallelism bugs for frontier models like Qwen-3.5, pushing boundaries in async colocated engines (NCCL suspend/resume), and implementing multi-turn abstractions, verl is providing the exact high-throughput, fault-tolerant distributed orchestration needed to train the next generation of autonomous AI agents. Furthermore, its aggressive expansion across GPUs, NPUs, and TRT-LLM ensures hardware-agnostic resilience for global developers.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is your RL ecosystem daily digest for Open Instruct.

# RL Daily Digest: Open Instruct
**Date:** 2026-05-08 | **Project:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 1. Today's Highlights
Activity on May 7th was dominated by batch improvements to the GRPO (Group Relative Policy Optimization) pipeline. The core maintainer ([finbarrtimbers](https://github.com/finbarrtimbers)) focused heavily on observability (adding granular timing and filtering metrics) and robustness (fixing edge cases in filtered-batch resampling). A significant new community contribution also introduces a curriculum learning dataloader.

### 2. Releases
No new releases were cut in the last 24 hours.

### 3. Important Issues
Only one issue was updated. It appears to be an automated/spam ticket referencing an unrelated repository and has already been closed.
*   **[#1639](https://github.com/allenai/open-instruct/issues/1639)** [CLOSED] Spam/miscategorized issue regarding a webpack workflow.

### 4. Key PR Progress
Eight pull requests saw updates today, with a heavy focus on refining the GRPO training loop:

*   **GRPO Robustness & Data Handling:**
    *   **[#1663](https://github.com/allenai/open-instruct/pull/1663)** [OPEN] Restores an emoji to resample warnings and addresses missed review feedback on batch filtering.
    *   **[#1660](https://github.com/allenai/open-instruct/pull/1660)** [CLOSED] Fixes an edge case in `DataPreparationActor` where batches with entirely zero-std rewards caused empty collations. 
    *   **[#1642](https://github.com/allenai/open-instruct/pull/1642)** [OPEN] Crucial fix for `grpo.py` (OLMo-core / FSDP2 path) resolving a step-0 weight sync bug and a critical cross-doc vs intra-doc attention mismatch during recomputation.
*   **RL Observability & Metrics:**
    *   **[#1656](https://github.com/allenai/open-instruct/pull/1656)** [OPEN] Adds `time/per_group_wall_time` metric to track mean generation time, contrasting the existing `time/getting_response` metric which is skewed by tail-latencies.
    *   **[#1657](https://github.com/allenai/open-instruct/pull/1657)** [CLOSED] Bumps filter-rejection logs from DEBUG to INFO and adds `batch/filtered_prompts_pct` to make active-sampling failure modes transparent.
*   **Algorithms & Architecture:**
    *   **[#1650](https://github.com/allenai/open-instruct/pull/1650)** [CLOSED] Implements IcePop and creates a unified interface for off-policy correction.
    *   **[#1661](https://github.com/allenai/open-instruct/pull/1661)** [OPEN] Introduces a WIP difficulty sampling curriculum dataloader and dataset builder (authored by [undfined](https://github.com/undfined)).
*   **Infrastructure / CI:**
    *   **[#1662](https://github.com/allenai/open-instruct/pull/1662)** [CLOSED] Migrated Beaker experiment budgets from the retired `ai2/oe-adapt` to `ai2/oe-omai`.

### 5. Why This Project Matters in Today's RL Landscape
As post-training paradigms (like RLHF and GRPO) become the primary bottleneck and competitive moat for LLM development, the quality of the underlying training infrastructure dictates model success. The progress in today's digest highlights the next evolutionary step for open-source RL frameworks: moving beyond naive implementations to solve complex systems engineering challenges. Fixing vLLM attention mismatches ([#1642](https://github.com/allenai/open-instruct/pull/1642)) and adding granular latency/masking metrics ([#1656](https://github.com/allenai/open-instruct/pull/1656), [#1657](https://github.com/allenai/open-instruct/pull/1657)) are exactly the types of deep, framework-level engineering required to stabilize distributed LLM policy-gradient training at scale. Furthermore, the introduction of off-policy corrections and curriculum learning ([#1650](https://github.com/allenai/open-instruct/pull/1650), [#1661](https://github.com/allenai/open-instruct/pull/1661)) signals that Open Instruct is pushing toward highly sample-efficient, advanced RL methodologies.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

### RL Open-Source Daily Digest: `rl_games`
**Date:** 2026-05-08 | **Project:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

---

#### 1. Today's Highlights
The `rl_games` repository saw a quiet day regarding issue tracking and releases, but featured a highly functional core update. A new Pull Request introduced a flexible early-stopping mechanism, reflecting a continued trend in the RL community toward modular and highly customizable training loops. 

#### 2. Releases
*   **No new releases** were recorded in the last 24 hours.

#### 3. Important Issues
*   **None.** There were 0 active or updated issues in the past 24 hours. 

#### 4. Key PR Progress
*   **[PR #350](https://github.com/Denys88/rl_games/pull/350) [OPEN]**: Add custom stop callback for training 
    *   **Author:** Denys88
    *   **Summary:** This PR introduces an optional `stop_fn(algo) -> bool` callback, allowing users to programmatically terminate training beyond the rigid constraints of `score_to_win`, `max_epochs`, or `max_frames`. The callback is evaluated once per epoch on rank 0 and properly broadcasted to support multi-GPU/distributed environments. It has been integrated into both continuous and discrete Proximal Policy Optimization (PPO), as well as Soft Actor-Critic (SAC). This PR directly resolves issue #348.

#### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a foundational library for high-performance Reinforcement Learning, widely recognized for its speed and efficiency in continuous and discrete control tasks (often benchmarked via Isaac Gym/NVIDIA Omniverse). In the current RL landscape, where distributed multi-GPU training is standard, having safe, rank-aware broadcasting for training interruptions (as implemented in PR #350) is critical. PRs like this enhance the library's extensibility, making it easier for researchers and engineers to implement custom curriculum learning or convergence metrics without hacking the core training loops.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-05-08
**Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on enhancing static type safety and improving developer ergonomics. Contributor **jorenham** drove today's updates, merging two significant typing pull requests and opening a new one aimed at making vectorized environments generic types. There were no new releases or active issue updates.

### 2. Releases
No new releases were recorded today. 

### 3. Important Issues
No issues were created or updated in the past 24 hours.

### 4. Key PR Progress
All attention today was on improving the static typing of Gymnasium's vectorized environments and wrappers:
*   **[OPEN] [#1577 Generic vector env and vector wrapper types](https://github.com/Farama-Foundation/Gymnasium/pull/1577):** Opened today, this PR proposes converting `VectorEnv` and its subclasses into generic types with optional parameters. This addresses `TypeVar` usage issues discussed in previous PRs while maintaining backward compatibility.
*   **[CLOSED] [#1573 Fix typing errors and add missing annotations in `vector.**`](https://github.com/Farama-Foundation/Gymnasium/pull/1573):** Merged today, this PR brought a batch of static typing fixes and expanded type coverage specifically targeting `gymnasium.vector.*` and `gymnasium.vector.utils.*`.
*   **[CLOSED] [#1575 Fix typing errors and add missing annotations in `wrappers.vector.*`](https://github.com/Farama-Foundation/Gymnasium/pull/1575):** Merged today, this companion PR fixed improper `TypeVar` usage patterns (e.g., unbound use, incorrect variance, and missing upper bounds) within the `gymnasium.wrappers.vector.*` submodules.

### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for environment interactions in Reinforcement Learning, Gymnasium's reliability is critical for the broader ML ecosystem. Today's focus on rigorous static typing—especially fixing `TypeVar` variance and introducing generics for `VectorEnv`—reflects a maturing ecosystem. Robust type hinting significantly reduces runtime bugs for downstream practitioners, enables better IDE support/autocompletion, and allows modern type-checkers to seamlessly validate complex, highly-parallelized RL training pipelines before execution.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>