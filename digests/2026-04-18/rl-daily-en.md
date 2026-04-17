# RL Open Source Daily Digest 2026-04-18

> Generated: 2026-04-17 22:09 UTC | Projects covered: 15

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
The open-source Reinforcement Learning ecosystem on April 18, 2026, is characterized by a distinct two-tier dynamic. The top tier—comprising LLM post-training frameworks like TRL, verl, AReaL, and Slime—is experiencing hyper-growth, aggressively iterating on distributed infrastructure, multimodal support, and advanced reasoning algorithms (like GRPO and self-play). The second tier—foundational algorithm and environment libraries like Stable Baselines3, Gymnasium, CleanRL, and rl_games—is in a mature maintenance phase, focused on API standardization, edge-case bug fixes, and mathematical rigor. 

Today’s activity heavily skews toward solving the massive compute and orchestration bottlenecks involved in aligning large-scale foundation models, while the broader traditional RL sector prioritizes stability and documentation.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **TRL** | 3 | 31 | 1 (v1.2.0) | Major architectural consolidation; VLM focus. |
| **verl** | 8 | 27 | 0 | Aggressive hardware expansion (ROCm/NPU) and async GenRM. |
| **AReaL** | 5 | 6+ | 0 | RPC/vLLM stabilization; MoE and multi-reward support. |
| **ROCK** | 2 | 5 | 0 | v1.6.0 prep; TS SDK integration and security patching. |
| **Open Instruct** | 0 | 7 | 0 | Advancing agentic coding RL (SWERL) and DR training. |
| **Slime** | 1 | 4 | 0 | Distributed weight-sync compression and FP16 stability. |
| **rl_games** | 2 | 1 | 0 | MJLab (MuJoCo) vectorized environment integration. |
| **Gymnasium** | 0 | 2 | 0 | API standardization (MDP transition fixes, wrapper utils). |
| **Stable Baselines3** | 1 | 1 | 0 | Patching Gymnasium `Discrete` space `start` offset bug. |
| **CleanRL** | 0 | 1 | 0 | Correcting core algorithm documentation (PPO naming). |
| **ROLL** | 1 | 1 | 0 | NPU Megatron support and OpenReward integration. |
| *Inactives* | *0* | *0* | *0* | *No activity: OpenRLHF, PettingZoo, Tianshou, torchtune.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Self-Distillation & Advanced Post-Training:** TRL's release of the `SSDTrainer` (Simple Self-Distillation) and verl's groundwork for Multi-Teacher On-Policy Distillation (MOPD) highlight an industry-wide shift from basic pairwise RLHF toward iterative self-play and distillation to compress reasoning capabilities.
*   **Multimodal & Diffusion RL:** Frameworks are moving decisively beyond text. verl introduced *FlowGRPO* for diffusion models and BAGEL support for multi-modal image generation, while TRL spent significant effort patching Vision-Language Model (VLM) chat templates and parsing.
*   **Verifiable & Agentic Environments:** RL is branching into tool-use and software engineering. Open Instruct advanced its Docker-based *SWERLSandboxEnv* for agentic coding tasks, while Slime integrated RLVE (400+ deterministic verifiable tasks) to scale RLVR (RL with Verifiable Rewards).
*   **Multi-Objective Reward Modeling:** Moving away from single scalar rewards, AReaL proposed structured reward outputs (grouping helpfulness, safety, etc.), and verl integrated Generative Reward Models (GenRM) into its fully async pipeline.

**Engineering & Infrastructure Signals**
*   **Hardware Diversification (Beyond NVIDIA):** Escaping GPU vendor lock-in is a primary engineering concern. ROLL and verl both pushed PRs for Huawei Ascend NPU support, while verl specifically optimized its fully async FSDP2 training for AMD MI300X (ROCm).
*   **Weight Synchronization & I/O Bottlenecks:** Distributed inference/training loops generate massive checkpoint overhead. Slime introduced delta compression for colocated weight syncs, and AReaL proposed sparse delta encoding to reduce checkpoint transfer volumes by up to 100x.
*   **Async Distributed Architectures:** Projects are decoupling generation from training. verl and AReaL are heavily focused on stabilizing "Fully Async" pipelines and fixing race conditions (e.g., Ray ObjectRef serialization, vLLM LoRA route 404s).
*   **Evolving API Compliance:** Lower-level frameworks are ensuring compliance with modernized environment APIs. Stable Baselines3 patched handling for Gymnasium's offset `Discrete` spaces, and Gymnasium itself introduced a utility to mathematically validate custom environment wrappers.

## Differentiation Analysis

*   **LLM Post-Training Titans (TRL vs. verl vs. AReaL):** While all three target large-scale alignment, their strategies diverge. **TRL** acts as the accessible, HuggingFace-ecosystem hub, focusing on algorithmic variety (KTO, DPO, TPO) and accessibility. **verl** is positioning itself as the ultimate hardware-agnostic distributed engine, heavily prioritizing inference backend decoupling (vLLM, TRT-LLM) and heterogeneous cluster support. **AReaL** is differentiating through robust multi-agent RL (MARL) and cutting-edge MoE (Mixture-of-Experts) LoRA scaling.
*   **RL Orchestration vs. Algorithmic Implementation (ROCK vs. CleanRL/SB3):** **ROCK** and **ROLL** act as orchestration layers solving cluster management, containerization (HarborJobs), and multi-tenant security. Conversely, **CleanRL** and **Stable Baselines3** remain intentionally scoped to single-node, highly interpretable algorithmic implementations, prioritizing educational value and strict mathematical reproducibility.
*   **Physics/Robotics vs. Language (rl_games vs. Open Instruct):** **rl_games** continues to optimize for high-throughput vectorized physics simulation (MuJoCo MJX/MJLab), whereas **Open Instruct** optimizes for LLM environment interaction (tool-calling, bash execution). The underlying vectorization needs are converging, but the domain targets remain vastly different.

## Community Momentum & Maturity

*   **Hyper-growth & Corporate Backing (TRL, verl, AReaL):** Backed by major AI entities (HuggingFace, Volcengine/Volcano, inclusionAI), these projects show open-source velocity matching commercial software. They handle massive PR volumes daily and are rapidly derisking frontier research (like self-distillation and GRPO) for production use.
*   **Mature Standardization (Gymnasium, SB3):** These projects exhibit mature governance. Activity is restricted to highly granular, mathematically precise bug fixes (like Taxi MDP transition dynamics) and standardizing developer tooling. They serve as the reliable bedrock upon which the higher-level frameworks are built.
*   **Orchestration Maturation (ROCK):** The push for TypeScript SDKs and enterprise-grade security patches (e.g., Dockerfile path-traversal mitigation) indicates that RL infrastructure is evolving from experimental Python scripts to enterprise-ready, full-stack platforms.

## Trend Signals

1.  **The Shift to Verifiable Agentic RL:** The focus is moving from static preference datasets to dynamic RL where models interact with verifiable environments (SWE-bench, RLVE). Expect rapid consolidation around standardized tool-use environments.
2.  **Generative Reward Models (GenRM):** Explicitly modeling reward pipelines using generative models (rather than simple regression) is gaining rapid traction, promising more nuanced alignment. 
3.  **The Defragmentation of Accelerators:** With AMD MI300X and Ascend NPU patches merging across multiple frameworks, the open-source RL ecosystem is preemptively hedging against NVIDIA hardware scarcity, signaling a future where distributed GRPO/PPO runs natively across mixed-hardware clusters.
4.  **Checkpoint I/O as the Next Frontier:** As context lengths and model sizes explode, standard checkpointing is becoming a critical distributed bottleneck. Expect delta compression and memory-sharing techniques (like NCCL/CuMem optimizations) to become standard framework features by Q3 2026.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROLL 
**Date:** 2026-04-18 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

Here is your daily brief on the ROLL (Reinforcement Learning Open Loop) framework ecosystem.

### 1. Today's Highlights
Activity over the past 24 hours indicates ongoing, targeted maintenance and hardware expansion for the ROLL framework. The community and contributors are focused on two major verticals: integrating novel reward-signal infrastructures and expanding hardware accelerator compatibility beyond standard GPUs.

### 2. Releases
* **No new releases** were published in the last 24 hours. 

### 3. Important Issues
* **[CLOSED] Add OpenReward Integration** ([#405](https://github.com/alibaba/ROLL/issues/405))
  * **Author:** shamanez
  * **Summary:** A recently closed issue proposing official integration or example implementations for [OpenReward](https://openreward.ai/). 
  * **Significance:** The discussion highlights OpenReward as a growing necessity in the RL tech stack, specifically addressing scalable reward modeling and evaluation pipelines—critical bottlenecks in aligning and training large language models. The closure of this issue suggests the maintainers have either accepted the premise or it is being actioned behind the scenes.

### 4. Key PR Progress
* **[OPEN] feat: Add npu megatron support** ([#380](https://github.com/alibaba/ROLL/pull/380))
  * **Author:** UsernameFull
  * **Summary:** This active PR introduces support for Huawei Ascend NPU devices using the Megatron-Core backend.
  * **Key Technical Changes:** Modifies platform detection priority (specifically within `roll/platforms/__init__.py`) to seamlessly map ROLL's execution loops onto Ascend hardware.
  * **Significance:** This is a critical infrastructure PR. Multi-hardware support (particularly for NPUs) is essential for international AI infrastructure resilience, allowing developers to train massive RL workloads outside the traditional GPU ecosystem.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, paradigms like RLHF (Reinforcement Learning from Human Feedback) and GRPO are heavily constrained by hardware bottlenecks and brittle reward pipelines. ROLL remains a pivotal open-source framework because it directly attacks these scaling limitations. 

Today's issue and PR activity perfectly encapsulate the project's roadmap: **hardware diversification** (via NPU/Megatron mapping to avoid vendor lock-in) and **orchestration flexibility** (integrating with modern evaluation/reward engines like OpenReward). Together, these developments position ROLL as a highly adaptable, scalable training scaffold for next-generation foundation models.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROCK 
**Date:** 2026-04-18 | **Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

## 1. Today's Highlights
The ROCK ecosystem experienced a highly active day focused on hardening its TypeScript SDK, resolving critical configuration bugs, and patching security vulnerabilities. The core maintainer team successfully finalized and merged the documentation for the anticipated **v1.6.0 release**, which introduces major architectural refactors to the Job module. 

## 2. Releases
*   **Official Tags:** No new GitHub releases were cut in the last 24 hours.
*   **Documentation Prep:** The groundwork for the official **v1.6.0** release was finalized and merged today. ([PR #841](https://github.com/alibaba/ROCK/pull/841))

## 3. Important Issues
*   **TS SDK CI Reliability ([Issue #838](https://github.com/alibaba/ROCK/issues/838)):** A bug was reported in `rock/ts-sdk/src/model/client.test.ts` where uncleaned timers cause Jest worker process leaks during forced exits. This is a critical fix for developer experience and CI stability.
*   **Experiment Configuration Leak ([Issue #834](https://github.com/alibaba/ROCK/issues/834)):** Addressed a logical flaw in `JobConfig._sync_experiment_id`. Previously, if `JobConfig.experiment_id` was set but the `environment.experiment_id` was `None`, the ID failed to propagate, leading to orphaned or untracked RL environment runs. *(Status: Closed via PR)*

## 4. Key PR Progress
*   **[MERGED] v1.6.0 Documentation ([PR #841](https://github.com/alibaba/ROCK/pull/841)):** Merged Docusaurus updates adding `version-1.6.x` (EN + zh-Hans). The release notes highlight 23 PRs including the major `Job`/`Operator`/`Executor`/`Trial` module refactor, BashJob/HarborJob additions, and EnvHub rework.
*   **[OPEN] TS SDK Integration & Fixes ([PR #842](https://github.com/alibaba/ROCK/pull/842), [PR #839](https://github.com/alibaba/ROCK/pull/839)):** `guoj14` submitted an integration test workflow for the TS SDK alongside a targeted fix to clean up the leaked timers identified in Issue #838.
*   **[OPEN] Security Patch ([PR #836](https://github.com/alibaba/ROCK/pull/836)):** Addressed a high-severity path traversal / untrusted input vulnerability in `dockerfile_builder.py`. The fix prevents the `build_terminal_bench` method from writing files using untrusted keys directly to host paths.
*   **[MERGED] Experiment ID Sync ([PR #835](https://github.com/alibaba/ROCK/pull/835)):** Resolved Issue #834 by restructuring the validator condition to always sync `experiment_id` to the environment layer when present at the job level.
*   **[MERGED] TS SDK Unit Tests ([PR #796](https://github.com/alibaba/ROCK/pull/796)):** The foundational unit test workflow for the TypeScript SDK was officially merged.

## 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning research is heavily bottlenecked by infrastructure—managing compute nodes, containerized environments, and massive experiment matrices. ROCK is solving this by acting as a robust, scalable RL orchestration layer. 

Today's updates are highly representative of the project's current trajectory: 
1. **Expanding Language Support:** The push to stabilize the TS SDK (PRs [#796](https://github.com/alibaba/ROCK/pull/796), [#842](https://github.com/alibaba/ROCK/pull/842)) indicates an effort to democratize RL infrastructure beyond the traditional Python ecosystem, targeting frontend and full-stack tooling. 
2. **Enterprise Readiness:** The v1.6.0 Job module refactor and security patches (like the Dockerfile path-traversal fix in [PR #836](https://github.com/alibaba/ROCK/pull/836)) show that ROCK is maturing from an experimental framework into an enterprise-grade platform capable of safely handling multi-tenant RL workloads and Harbor container registries.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: THUDM/Slime
**Date:** 2026-04-18

### 1. Today's Highlights
Activity in the Slime repository over the past 24 hours highlights a strong focus on training stability and infrastructure efficiency. Key developments include critical bug fixes for mixed-precision training and dynamic batching, alongside promising new feature implementations for distributed weight synchronization and environment scaling. 

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **Policy Collapse with TIS in Search-R1 ([#1533](https://github.com/THUDM/slime/issues/1533)):**
    A ongoing issue reported by *Teglacer* details a policy collapse resulting in gibberish rollouts during the early training phases of a 3B Search-R1 model. The instability occurs specifically when Trajectory/Token Importance Sampling (TIS) is enabled. This is a critical watchpoint for researchers utilizing advanced importance sampling techniques in search-optimized LLMs.

### 4. Key PR Progress
*   **Fix Double Gradient Unscaling in FP16 ([#1842](https://github.com/THUDM/slime/pull/1842)) [OPEN]:** 
    Author *jthomy* identified a critical bug where `optimizer.prepare_grads()` is called twice per training step when using FP16. Because Megatron's `MixedPrecisionOptimizer` calls this internally, the explicit call in `train_one_step` causes a doubly unscaled gradient update, posing severe risks to FP16 training stability.
*   **Delta Compression for Weight Sync ([#1806](https://github.com/THUDM/slime/pull/1806)) [OPEN]:** 
    Author *nanjiangwill* introduced a feature enabling delta compression for both colocated and non-colocated weight synchronization. This is a major infrastructure upgrade aimed at drastically reducing the communication overhead in distributed RL.
*   **SFT Max-Length Filtering for Messages ([#1841](https://github.com/THUDM/slime/pull/1841)) [OPEN]:** 
    Author *none0663* extended long-sample filtering to support `messages`-style prompts using chat-template tokenization. This prevents overlong sequences from bypassing the filter and violating `max_tokens_per_gpu` budgets during dynamic batching.
*   **Add RLVE Environment Support ([#1020](https://github.com/THUDM/slime/pull/1020)) [CLOSED]:** 
    A previously submitted PR by *jbarnes850* aiming to integrate RLVE (Scaling Up Reinforcement Learning for Language Models with Adaptive Verifiable Environments)—which provides 400+ deterministic verifiable tasks—was updated and closed today.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) become the de facto standards for post-training LLMs, training efficiency and stability are the primary bottlenecks. The activity in Slime reflects the cutting-edge needs of the RL ecosystem: 
1. **Infrastructure Scalability:** PRs like [#1806](https://github.com/THUDM/slime/pull/1806) (delta compression) show a direct push toward making large-scale distributed RL more cost-effective and faster.
2. **Multi-Task Versatility:** Integrating massive verifiable environment suites (like RLVE in [#1020](https://github.com/THUDM/slime/pull/1020)) is essential for moving away from single-domain RL towards generalist models.
3. **Fine-Grained Training Dynamics:** Issues like [#1533](https://github.com/THUDM/slime/issues/1533) and fixes in [#1842](https://github.com/THUDM/slime/pull/1842) highlight the community's ongoing battle to stabilize complex algorithms (e.g., Importance Sampling, FP16 mixed-precision) in massive distributed setups.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-04-18

## 1. Today's Highlights
Activity on the inclusionAI/AReaL repository remains high, driven primarily by infrastructure robustness and scaling up for complex RL workflows. 
*   **Bug Squashing:** Contributor `Wangxiaoxiaoa` identified and patched three critical RPC and vLLM routing bugs in a single day, significantly stabilizing the distributed training and inference runtime.
*   **Multi-Reward RL:** A new feature proposal and corresponding PR were introduced to support structured reward outputs, reflecting a broader industry trend toward nuanced, multi-objective RLHF.
*   **MoE & MARL Advancements:** Ongoing work on Multi-Agent RL (MARL) and Mixture-of-Experts (MoE) LoRA training saw continued discussion and progression.

## 2. Releases
No new releases were deployed today. The development focus remains squarely on merging infrastructure improvements and bug fixes. 

## 3. Important Issues
*   **Structured Rewards for Multi-Objective RL:** [Issue #1196](https://github.com/inclusionAI/AReaL/issues/1196) [OPEN] proposes adding structured reward outputs and grouped reward aggregation. This is a crucial evolution for the framework, allowing users to natively handle multi-reward RL workflows (e.g., combining helpfulness, safety, and formatting scores) rather than relying on a single scalar reward.
*   **vLLM LoRA Route 404s:** [Issue #1193](https://github.com/inclusionAI/AReaL/issues/1193) [OPEN] highlights a race condition where vLLM LoRA runtime weight updates invalidate versioned model routes, causing rollout request failures. 
*   **Disk-Based Weight Update Optimization:** [Issue #1125](https://github.com/inclusionAI/AReaL/issues/1125) [OPEN] proposes sparse delta encoding for disk-based weight updates. Given that >98% of bf16 parameters remain identical between RL steps, this compression could reduce checkpoint transfer volume by 50-100×.
*   **RPC Serialization & Device Handling:** [Issue #1194](https://github.com/inclusionAI/AReaL/issues/1194) [CLOSED] and [Issue #1195](https://github.com/inclusionAI/AReaL/issues/1195) [CLOSED] reported crashes related to `ray.ObjectRef` JSON serialization and integer device ID detection, respectively. Both were swiftly resolved.

## 4. Key PR Progress
*   **MoE LoRA Support Merged:** [PR #1159](https://github.com/inclusionAI/AReaL/pull/1159) [CLOSED] by `gursimar` successfully introduces LoRA support for Megatron Mixture-of-Experts (MoE) models. Crucially, it enables cross-node LoRA training using Megatron + vLLM, unlocking massive scaling potential for MoE fine-tuning.
*   **Multi-Reward Implementation:** [PR #1200](https://github.com/inclusionAI/AReaL/pull/1200) [OPEN] opens the implementation for the aforementioned multi-reward workflow (Issue #1196), overhauling the reward interface to support structured components.
*   **vLLM & RPC Bugfixes:** Three rapid-fire PRs from `Wangxiaoxiaoa` resolved today's bug reports: [PR #1197](https://github.com/inclusionAI/AReaL/pull/1197) (vLLM routing fix), [PR #1198](https://github.com/inclusionAI/AReaL/pull/1198) (Ray Object Ref serialization), and [PR #1199](https://github.com/inclusionAI/AReaL/pull/1199) (Integer device ID handling).
*   **External Model API Support:** [PR #1183](https://github.com/inclusionAI/AReaL/pull/1183) [OPEN] advances the ability to route chat completions to external OpenAI-compatible APIs through AReaL's unified gateway, enabling interaction caching and reward assignment for third-party models.
*   **Governance Updates:** [PR #1201](https://github.com/inclusionAI/AReaL/pull/1201) [CLOSED] officially onboarded `@CormickKneey` as a project maintainer and codeowner for the experimental agent service.

## 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts from standard supervised fine-tuning (SFT) to advanced Reinforcement Learning from Human Feedback (RLHF) and self-play reasoning (e.g., GRPO), the underlying distributed infrastructure becomes the primary bottleneck. AReaL is positioning itself as a highly robust, production-grade framework for these exact workloads. 

Today's updates demonstrate the engineering maturity required for modern RL: supporting **Mixture-of-Experts (MoE) architectures** across distributed nodes, optimizing massive **checkpoint transfer I/O** (as proposed in #1125), and building flexible **multi-reward APIs**. By stabilizing the vLLM/Ray distributed runtime and decoupling weight updates from inference routing, AReaL is actively solving the exact latency and scaling bottlenecks that currently hinder open-source post-training efforts.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL Ecosystem — 2026-04-18

## 1. Today's Highlights
The TRL (Transformer Reinforcement Learning) library has seen a significant surge in activity with **31 PRs updated** alongside a major new release. The primary focus of the day is **architectural consolidation and alignment**, led by core maintainer `@qgallouedec`. Efforts are heavily concentrated on robust Vision-Language Model (VLM) support, distillation framework refactoring, and systematically aligning the `KTOTrainer` internals with `DPOTrainer`. 

## 2. Releases
*   **[v1.2.0](https://github.com/huggingface/trl/releases)**: The standout feature of this release is the introduction of **`SSDTrainer` (Simple Self-Distillation)**. This experimental trainer allows models to distill knowledge into themselves, a technique increasingly used to compress reasoning capabilities and stabilize RLHF fine-tuning over long training runs.

## 3. Important Issues
With only **3 issues updated**, maintainers are keeping the backlog tight:
*   **Feature: Entropy Regularization for GRPO** ([#5584](https://github.com/huggingface/trl/issues/5584)): A proposal to add explicit entropy coefficients and optional scheduling to `GRPOTrainer`. This is a critical technical request, as entropy regularization prevents premature mode collapse and encourages better exploration during RL fine-tuning.
*   **Bug: VLM Server Hangs** ([#5361](https://github.com/huggingface/trl/issues/5361)): Users running multimodal RL training (e.g., GRPO with Qwen-VL) are experiencing severe hangs in vLLM server mode when passing high-resolution images, necessitating manual resizing workarounds.
*   **Bug: Qwen 3.5 Incompatibility** ([#5585](https://github.com/huggingface/trl/issues/5585)): The new `DistillationTrainer` crashes with Qwen3.5 models due to a nested `config.vocab_size` attribute issue. 

## 4. Key PR Progress
Today's PRs reflect a massive push for code consistency, VLM compatibility, and dropping legacy tech debt:

*   **Self-Distillation & Experimental Methods:**
    *   **[OPEN] [#5573](https://github.com/huggingface/trl/pull/5573)**: A major refactor of self-distillation trainers (`sdpo`/`sdft`), unifying shared lifecycle logic into a `BaseSelfDistillationTrainer`.
    *   **[OPEN] [#5506](https://github.com/huggingface/trl/pull/5506)**: Introduces an experimental `TPOTrainer` (Token-level Policy Optimization).
    *   **[OPEN] [#5026](https://github.com/huggingface/trl/pull/5026)**: Adds support for MaxRL.
*   **KTO-DPO Alignment:** Maintainer `@albertvillanova` opened/closed a rapid-fire series of PRs to make `KTOTrainer` structurally consistent with `DPOTrainer`. Key merges include dataset preparation ([#5579](https://github.com/huggingface/trl/pull/5579), [#5587](https://github.com/huggingface/trl/pull/5587)), processing class initialization ([#5578](https://github.com/huggingface/trl/pull/5578)), and model tagging ([#5582](https://github.com/huggingface/trl/pull/5582)). An open PR for FSDP support in KTO ([#5583](https://github.com/huggingface/trl/pull/5583)) is also in flight.
*   **VLM & Chat Template Robustness:** Core maintainer `@qgallouedec` submitted a tight cluster of PRs ensuring tool calling and chat templates work flawlessly with Vision Models. Highlights include reverting VLM support in `parse_response` to keep it strictly tokenizer-only ([#5561](https://github.com/huggingface/trl/pull/5561)), properly accepting processors in `get_training_chat_template` ([#5560](https://github.com/huggingface/trl/pull/5560)), and fixing prefix preservation at the token level ([#5559](https://github.com/huggingface/trl/pull/5559)). 
*   **Infrastructure & Testing:** 
    *   **[OPEN] [#5549](https://github.com/huggingface/trl/pull/5549)**: Dropped support for legacy vLLM 0.11, paving the way to require vLLM 0.18+ (which natively supports weight syncing).
    *   **[OPEN] [#5574](https://github.com/huggingface/trl/pull/5574) / [#5586](https://github.com/huggingface/trl/pull/5586)**: Added specific chat templates and tiny test models for the newer `Qwen3-4B-Instruct-2507`.
    *   **[OPEN] [#5580](https://github.com/huggingface/trl/pull/5580)**: Updated AsyncGRPO examples with tested hyperparameters for smaller models, fixing a bug where previous configs resulted in 0 reward/loss.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to be the open-source backbone of post-training alignment. Today's activity perfectly illustrates the maturation of the RL/LLM ecosystem:
1. **The Shift to Self-Distillation:** The release of `SSDTrainer` in v1.2.0 acknowledges that modern post-training relies heavily on self-play and iterative distillation, moving beyond simple pairwise human feedback.
2. **Multimodal RL is Here:** The intense focus on VLM processors, chat template parsing, and image-resolution bugs shows that Reinforcement Learning from Human Feedback (RLHF) is no longer just a text-domain affair; aligning Vision-Language Models is now a primary production use case.
3. **Scalability & Backend Integration:** By aggressively pruning legacy vLLM versions to support native weight synchronization, TRL is solving the distributed generation bottleneck that plagues large-scale GRPO/PPO training.

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

# RL Open-Source Daily Digest: verl
**Date:** 2026-04-18 | **Project:** [verl-project/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
The verl ecosystem is seeing heavy momentum toward heterogeneous hardware support and multi-modal RL architectures. Activity over the last 24 hours (27 PRs, 8 Issues) was dominated by expanding Fully Async training capabilities to Generative Reward Models (GenRM), adding native ROCm (AMD MI300X) and Ascend NPU compatibility, and introducing new diffusion-based RL training paradigms (FlowGRPO). 

## 2. Releases
**No new releases** were published in the last 24 hours. The community is actively tracking the [verl 26Q2 Roadmap (#5836)](https://github.com/verl-project/verl/issues/5836) (👍 14), which outlines upcoming features like Megatron-FSDP enabling and NVFP4 low-precision training.

## 3. Important Issues
*   **Hardware & Architecture Bottlenecks:** 
    *   [Issue #6010](https://github.com/verl-project/verl/issues/6010): Users are reporting extremely slow `update_actor` times (~800s/step) when running GRPO + FSDP2 with Qwen3-4B on Ascend 910B.
    *   [Issue #5762](https://github.com/verl-project/verl/issues/5762): Sequence Parallelism (SP) is currently failing for Qwen 3.5 due to tensor size mismatches.
*   **Feature Requests & Infrastructure:** 
    *   [Issue #5949](https://github.com/verl-project/verl/issues/5949): Requests support for GenRM in the Fully Async pipeline, noting that the current rollout hardcodes `self.use_rm = False`. (Addressed in today's PRs).
    *   [Issue #4837](https://github.com/verl-project/verl/issues/4837): A lingering SIGSEGV crash in `ncclCuMemHostEnable()` post-model loading continues to draw attention (👍 3).

## 4. Key PR Progress
**Expanding Fully Async Capabilities:**
*   [PR #6044](https://github.com/verl-project/verl/pull/6044): **Enables GenRM/DisRM support** in fully async training, allowing standalone GPU-based reward models.
*   [PR #6046](https://github.com/verl-project/verl/pull/6046): Fixes `routed_experts` merging during partial rollout resume for MoE models in fully async mode.
*   [PR #6036](https://github.com/verl-project/verl/pull/6036): Major fix enabling **Fully Async FSDP2 training on AMD ROCm (MI300X)**. 

**Algorithmic & Engine Expansions:**
*   [PR #6042](https://github.com/verl-project/verl/pull/6042) & [PR #5951](https://github.com/verl-project/verl/pull/5951): Introduces structural refactors and the new **FlowGRPO trainer**, decoupling LLM and diffusion configs to support diffusion-oriented RL.
*   [PR #5947](https://github.com/verl-project/verl/pull/5947): Adds RL rollout support for **BAGEL** (thinker + DiT) models via `vLLMOmniHttpServer`, advancing multi-modal image generation RL.
*   [PR #5834](https://github.com/verl-project/verl/pull/5834): Lays the groundwork for **Multi-Teacher On-Policy Distillation (MOPD)** by adding server managers and configs for multiple teacher models.
*   [PR #5992](https://github.com/verl-project/verl/pull/5992): Brings inter-node inference support to the TRT-LLM rollout backend.

## 5. Why This Project Matters in Today's RL Landscape
As post-training paradigms (like RLHF/GRPO) scale to massive MoEs and multi-modal architectures, inference-engine bottlenecks during rollout become the primary training constraint. 

verl is establishing itself as the industry-standard distributed RL framework by decoupling the training loop from specific inference backends and hardware. Today's digest highlights a critical strategic shift: verl is aggressively moving beyond standard NVIDIA setups to optimize for AMD MI300X and Ascend 910B clusters. Furthermore, the integration of advanced RL architectures like FlowGRPO and multi-teacher distillation (MOPD) signals that verl is preparing the infrastructure for the next generation of diffusion-based reasoning and agentic models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct Ecosystem
**Date:** 2026-04-18 | **Project:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity over the last 24 hours shows no new issues, no new releases, but a steady stream of 7 pull requests being updated. The focus is split between expanding reinforcement learning infrastructure for agentic coding tasks, advancing Direct Reinforcement (DR) training methodologies, and squashing several critical bugs in benchmarking and constraint validation utilities.

## 2. Releases
**None.** 
No new version tags or releases were published in the last 24 hours.

## 3. Important Issues
**None.** 
0 issues were created or updated in the past 24 hours. 

## 4. Key PR Progress
*Note: Several of these PRs were created prior to the last 24 hours but received significant updates today.*

*   **Agentic RL Infrastructure:** Long-running PR [#1492](https://github.com/allenai/open-instruct/pull/1492) (`SWERLSandboxEnv`) received updates. This is a critical addition that implements a `submit` tool for running per-task test suites inside Docker containers, bridging the gap between LLMs and software engineering RL environments. 
*   **DR Tülu Replication:** Authored by `hamishivi`, PR [#1609](https://github.com/allenai/open-instruct/pull/1609) introduces a script for DR Tülu training with Qwen 3.5 and evolving rubrics. It also brings robustness updates for tool-calling rollouts and environment pool sizing. This PR was **closed** today.
*   **SFT Parity Checks:** PR [#1620](https://github.com/allenai/open-instruct/pull/1620) was opened to ensure exact training parity between `open_instruct/olmo_core_finetune.py` and a pure olmo-core SFT loop, prompted by divergence observed in a recent Beaker reference experiment.
*   **Utility Bug Fixes (Author: `Chessing234`):**
    *   **Cost Tracking:** [PR #1618](https://github.com/allenai/open-instruct/pull/1618) fixes a 10x cost undercount in `judge_utils.py` where the `gpt-4o` output price was missing a zero.
    *   **Constraint Validation:** [PR #1615](https://github.com/allenai/open-instruct/pull/1615) fixes a logic error in `validate_choice` where operands in a substring check were swapped, breaking IFEval constraints. Additionally, [PR #1612](https://github.com/allenai/open-instruct/pull/1612) (now **closed**) fixed `verify_sentence_constraint` to recognize `!` as a sentence terminator.
    *   **Benchmarking:** [PR #1619](https://github.com/allenai/open-instruct/pull/1619) fixes `save_benchmark_results_to_csv`, which previously failed to write a header row on the first run.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct serves as the open-source engine for Ai2’s post-training alignment and RL research. Today's activity highlights a broader shift in the open-source RL landscape: moving beyond basic Reinforcement Learning from Human Feedback (RLHF) toward **agentic, tool-using environments** (like the Docker-based SWERL environment) and **advanced reward modeling** (like evolving rubrics and Direct Reinforcement). Furthermore, the focus on exact parity with lower-level training loops ([#1620](https://github.com/allenai/open-instruct/pull/1620)) and the patching of strict evaluation constraints ([#1615](https://github.com/allenai/open-instruct/pull/1615), [#1612](https://github.com/allenai/open-instruct/pull/1612)) demonstrate the ecosystem's maturation—proving that reproducibility and exact metric tracking remain critical as RL-based LLM training becomes increasingly complex.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL Daily Digest: 2026-04-18

## 1. Today's Highlights
The CleanRL repository experienced a quiet 24 hours with no new releases or active issues. The only activity comes from a highly focused documentation Pull Request aimed at improving the accuracy of the PPO and PQN algorithm references.

## 2. Releases
**None.** 
No new version tags or releases were published today.

## 3. Important Issues
**None.** 
There were 0 active or updated issues in the past 24 hours.

## 4. Key PR Progress
*   **[OPEN] [#549 docs: fix PPO title, variable typo, baselines URL, and PQN doc URL](https://github.com/vwxyzjn/cleanrl/pull/549)**
    *   **Author:** mturan33
    *   **Summary:** This PR addresses four distinct documentation inaccuracies. Most notably, it corrects a fundamental typo in the PPO documentation header (`docs/rl-algorithms/ppo.md`), accurately renaming "Proximal Policy *Gradient*" to "Proximal Policy *Optimization*" to reflect the true name of Schulman et al.'s 2017 algorithm. It also resolves variable typos and fixes broken/outdated URLs for baseline comparisons and PQN documentation.

## 5. Why This Project Matters in Today's RL Landscape
CleanRL occupies a vital niche in the reinforcement learning ecosystem by providing high-quality, single-file, dependency-minimal implementations of complex RL algorithms. While modern RL engineering trends toward heavily abstracted, distributed frameworks (e.g., Ray RLlib, ACME), CleanRL serves as an essential bridge for researchers, students, and engineers who need to quickly audit, understand, and modify algorithmic internals without navigating complex object-oriented boilerplate. 

Meticulous documentation PRs like #549 are critical to this project's mission. Because practitioners rely on CleanRL to learn the exact mechanics of foundational algorithms like PPO, ensuring absolute precision in mathematical terminology and algorithm naming prevents the propagation of misconceptions in the broader AI research community.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-04-18 | **Project:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

## 1. Today's Highlights
The `rl_games` repository saw moderate activity over the past 24 hours, driven entirely by community feature requests and environment integration refinements. The spotlight is on a newly closed Pull Request introducing native support for the **MJLab (MuJoCo Lab)** environment, signaling a timely expansion of the library's high-performance vectorized environment capabilities. Meanwhile, the community is actively requesting more flexible training termination callbacks and reporting a potential environment instantiation bottleneck during batch evaluation.

## 2. Releases
**No new releases** were recorded in the last 24 hours. 

## 3. Important Issues
*   **Environment Scaling Bottleneck in Batch Play:** User `ASDAlexander77` reported a critical breaking point when evaluating environments. The evaluation crashes or exhibits erratic behavior (specifically with SAC) when scaling beyond 41 parallel environments. This suggests a possible memory/vectorization limit or an IPC bottleneck in the current batch play implementation.
    *   **Status:** Open | [View Issue #349](https://github.com/Denys88/rl_games/issues/349)
*   **Demand for Custom Early Stopping:** A feature request was opened advocating for custom interruption/early-stopping logic during training. Currently, the library halts training based strictly on reward thresholds or fixed epoch counts. The user proposes callback hooks to halt training upon reaching arbitrary, user-defined goals.
    *   **Status:** Open | [View Issue #348](https://github.com/Denys88/rl_games/issues/348)

## 4. Key PR Progress
*   **[CLOSED] Add MJLab (MuJoCo Lab) environment support:** Authored by the repository maintainer (`Denys88`), this PR was recently closed after successfully integrating MJLab. 
    *   **Implementation:** It introduces a dedicated vectorized environment wrapper (`rl_games/envs/mjlab_vecenv.py`) that outputs plain tensor observations and handles bounded action spaces. 
    *   **Deliverables:** Includes PPO configuration files for Go1 and G1 velocity tracking, a registered `mjlab` env type, and a new `run_mjlab.py` entry point.
    *   **Status:** Closed | [View PR #347](https://github.com/Denys88/rl_games/pull/347)

## 5. Why This Project Matters in Today's RL Landscape
In the modern RL ecosystem, high-throughput GPU-accelerated training is rapidly becoming the standard. The integration of **MJLab** via [PR #347](https://github.com/Denys88/rl_games/pull/347) positions `rl_games` perfectly within the current wave of massively parallel physics simulation (trendset by platforms like Isaac Gym and MuJoCo MJX). Because `rl_games` is fundamentally optimized for speed (often acting as the foundational algorithmic backend for NVIDIA's Isaac Gym benchmark suites), maintaining robust, tensor-efficient vectorized wrappers is critical. Addressing the scaling bottleneck found in [Issue #349](https://github.com/Denys88/rl_games/issues/349) will be essential to ensure the library remains reliable as researchers push the boundaries of parallel environment counts on modern hardware.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-04-18 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours was focused entirely on Pull Request maintenance, with zero new issues opened and no new releases. Two open PRs saw updates: a highly specific MDP transition bug fix for the Taxi environment, and a proposed utility for standardizing environment wrappers.

### 2. Releases
No new releases were recorded today. 

### 3. Important Issues
No issues were created or updated in the last 24 hours. 

### 4. Key PR Progress
*   **[OPEN] Fix asymmetric transition dynamics in rainy Taxi environment ([PR #1533](https://github.com/Farama-Foundation/Gymnasium/pull/1533))**
    *   *Author:* jashshah999
    *   *Summary:* Addresses a critical mathematical bug in the stochastic ("rainy") Taxi environment where transition dynamics were computed asymmetrically based on movement direction. This fix ensures the environment correctly models a proper Markov Decision Process (MDP) by resolving the asymmetric treatment of blocked main moves.
    *   *Status:* Originally opened in Feb 2026, saw activity yesterday.

*   **[OPEN] Add wrapper checker utility ([PR #1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556))**
    *   *Author:* Jatin-Shihora
    *   *Summary:* Introduces a `check_wrapper()` utility function to validate custom wrapper implementations against Gymnasium's API standards. This acts as a much-needed parallel to the existing `check_env()` function, allowing developers to programmatically verify that their wrappers correctly handle inner environments.
    *   *Status:* Opened earlier this month and updated yesterday.

### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for single-agent reinforcement learning in Python, Gymnasium's reliability is critical for reproducible RL research. Today's updates highlight the project's ongoing maturation: 
1. **Meticulous Environment Fidelity:** PR #1533 demonstrates the community's commitment to mathematical rigor. Asymmetric transitions in stochastic environments can silently invalidate RL benchmarks, leading to false conclusions about agent performance. 
2. **Tooling and Developer Experience:** PR #1556 reflects the ecosystem's shift toward robust developer tooling. By standardizing wrapper validation, Gymnasium ensures that environment modifications (like frame-stacking or reward shaping) remain interoperable across the broader RL algorithmic ecosystem (e.g., Stable-Baselines3, CleanRL).

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Open-Source Daily Digest: Stable Baselines3
**Date:** 2026-04-18

### 1. Today's Highlights
Activity on the Stable Baselines3 (SB3) repository over the last 24 hours was highly focused, featuring a single but critical bug report regarding discrete action spaces and an immediate corresponding pull request to patch the issue. No new releases were deployed today.

### 2. Releases
*   **None** – No new versions or patches were released in the last 24 hours.

### 3. Important Issues
*   **Bug: Incorrect action bounds for offset discrete spaces ([#2241](https://github.com/DLR-RM/stable-baselines3/issues/2241))**
    *   **Author:** tgasla
    *   **Summary:** SB3 currently ignores the `start` parameter in `gym.spaces.Discrete(n, start=X)`. The library outputs actions in the range `[0, n)` instead of the intended `[start, start+n)`. This results in agents outputting invalid actions if the environment's action space does not begin at 0. 

### 4. Key PR Progress
*   **Fix: Handling of start offset in discrete action spaces ([#2242](https://github.com/DLR-RM/stable-baselines3/pull/2242))**
    *   **Author:** tgasla
    *   **Summary:** Opened on 2026-04-17, this PR directly addresses and closes Issue #2241. It modifies the library's internal action handling to correctly map sampled actions to the offset bounds of the discrete action space. The PR is currently awaiting review and merging.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains a foundational tool in the reinforcement learning ecosystem due to its emphasis on clean, readable, and highly stable implementations of standard RL algorithms. While newer frameworks push the boundaries of distributed computing or bleeding-edge algorithms, SB3 serves as the de facto standard for reproducible baselines, academic research, and applied RL. Bugs like the one identified in [#2241](https://github.com/DLR-RM/stable-baselines3/issues/2241) highlight the growing pains of evolving API standards (like Gymnasium's `start` parameter for `Discrete` spaces), making community-driven maintenance essential for preserving the strict reliability that SB3 is known for.

</details>