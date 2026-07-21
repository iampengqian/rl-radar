# RL Open Source Daily Digest 2026-07-22

> Generated: 2026-07-21 22:16 UTC | Projects covered: 15

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
The current RL open-source ecosystem is sharply bifurcated into two tiers: highly active, LLM-focused alignment frameworks (verl, TRL, AReaL, ROCK) and stable, traditional component libraries (Gymnasium, rl_games, CleanRL). The overarching theme across active projects is scaling infrastructure to support complex RLHF and Agentic RL workloads. Key drivers include the integration of massive Mixture-of-Experts (MoE) models, hybrid training/inference engine synchronization, and hardware diversification to mitigate GPU shortages. Meanwhile, traditional RL environments and vectorized training libraries are in maintenance or slow-iteration phases, focusing on API correctness and backend acceleration.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 59 | 16 | 0 | High-throughput RDMA checkpointing, multi-modal MoE scaling, NPU support. |
| **TRL** | Active | 10+ | 1 (v1.9.0) | Streaming GRPO, massive API refactor for logit distillation. |
| **AReaL** | 1 | 21 | 0 | Deep PPO/GRPO algorithmic refinement, Megatron memory optimization. |
| **ROCK** | 4 | 4 | 0 | Asynchronous sandbox orchestration, K8s scaling reliability. |
| **torchtune** | 1 | 1 | 0 | Security patching for arbitrary code execution in YAML configs. |
| **OpenRLHF** | 0 | 3 | 0 | Strategic shift toward Intel XPU testing and hardware genericism. |
| **slime** | 1 | 2 | 0 | Agentic tokenization fixes, Multi-Token Prediction (MTP) weight conversion. |
| **Gymnasium** | 0 | 2 | 0 | long-term RFC updates for MJX (XLA) hardware acceleration. |
| **rl_games** | 0 | 1 | 0 | Data integrity patches for PPO vectorized environment auto-resets. |
| **Open Instruct** | 1 | 0 | 0 | Community support for OLMo-3 SFT reproduction. |
| **ROLL** | 1 | 0 | 0 | Community inquiry on Chain-of-Thought formatting for RL. |
| **CleanRL, PettingZoo, SB3, Tianshou** | 0 | 0 | 0 | No activity; stable or dormant phase. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Advanced PPO & GRPO Variants:** Projects are actively refining RL math to address gradient vanishing and reward degradation. AReaL integrated the CISPO (MiniMax-M1) clipping surrogate, while verl and TRL are optimizing group normalization and replay buffers for complex multi-turn Agentic RL and DAPO workloads.
*   **Logit Distillation & Reasoning:** TRL is overhauling its `DistillationTrainer` to align with GRPO, tracking the industry trend of on-policy logit distillation seen in SOTA models (DeepSeek-V4, Qwen3.x) to efficiently transfer reasoning capabilities.
*   **Auto-Reset Data Integrity:** In traditional RL, ensuring data pipeline correctness during vectorized environment auto-resets remains a shared priority, as seen in `rl_games`'s efforts to mask invalid transition states in PPO.

**Engineering & Infrastructure Signals**
*   **Hybrid Engine Synchronization:** Bridging the gap between training (Megatron) and inference (SGLang, vLLM) engines is a top priority. verl introduced RDMA-based checkpoint pushing, while AReaL implemented Rollout Routing Replay (R3) to ensure expert routing choices during generation match backward passes.
*   **Hardware Fragmentation:** To escape NVIDIA/CUDA vendor lock-in, frameworks are rapidly expanding backend support. verl patched Huawei Ascend NPUs, OpenRLHF is upstreaming Intel XPU (oneCCL) tests, and slime fielded active requests for Ascend 910 compatibility.
*   **Sandbox & Environment Orchestration:** Agentic RL requires heavy infrastructure management. ROCK is shifting to asynchronous Docker commits and fixing Ray resource scheduling to prevent timeouts when managing thousands of ephemeral, parallel environments.
*   **Supply Chain Security:** As RL pipelines become highly distributed and config-driven, vulnerability patching is critical. torchtune is actively locking down YAML-based recipe parsing to prevent arbitrary code execution.

## Differentiation Analysis
*   **End-to-End LLM Alignment vs. Distributed Orchestration:** verl, TRL, and AReaL focus on the complete model training cycle (weight updates, gradient calculations, inference syncing). Conversely, ROCK differentiates by acting purely as an infrastructure orchestrator, managing the lifecycle and networking of ephemeral compute environments (sandboxes) without touching the model math itself.
*   **Scale and Target Audience:** TRL targets highly accessible, HuggingFace-integrated workflows for the broader community (evidenced by Qwen 3.5 plug-and-play issues). verl and AReaL cater strictly to elite distributed systems engineers operating 100B+ parameter MoE clusters across massive GPU arrays.
*   **Traditional RL vs. LLM RL:** Gymnasium and rl_games are solving foundational physics simulation and single-agent control problems (MuJoCo XLA, Envpool integrations). This contrasts sharply with the LLM-focused frameworks battling token masking, KV-cache offloading, and tool-calling trajectory routing.

## Community Momentum & Maturity
*   **Hyper-Growth & Scaling Pains:** verl and TRL show massive momentum (59 and 10+ updates respectively). However, this growth exposes operational complexities, such as verl's NCCL timeout deadlocks on 235B models and TRL's integration breakages with newly dropped open-source models like Qwen 3.5.
*   **Maintenance & Stabilization:** OpenRLHF, Gymnasium, and rl_games exhibit high maturity. Their communities are small, targeted, and focused on long-term robustness, hardware testing, and API standardization rather than chasing rapid feature bloat.
*   **Enterprise Readiness:** Projects like AReaL and ROCK show signs of deep enterprise production-hardening. Their PRs address highly specific operational edge cases, such as dropping retry-orphan completions in agentic SDKs and resolving port-binding race conditions in K8s, indicating heavy real-world deployment.

## Trend Signals
*   **The Rise of Agentic Infrastructure:** The ecosystem is moving from static RLHF datasets toward dynamic Agentic RL. This requires entirely new infrastructure stacks capable of managing tool-calling loops, parallel tool execution, and persistent sandbox environments without crashing proxies or corrupting rollout trajectories.
*   **Inference-Compute bottleneck:** Weight synchronization between training and inference engines is replacing compute as the primary bottleneck. Solutions like Mooncake RDMA (verl) and HTTP RPC tensor serialization (AReaL) signal a shift toward hardware-level networking optimizations in standard RL stacks.
*   **Hardware Agility as a Survival Requirement:** The rapid progression of alternative silicon support (Ascend NPU, Intel XPU, AMD) is no longer just an enterprise feature; it is an open-source necessity driven by global GPU supply chain constraints.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL Open-Source Ecosystem Daily Digest: ROLL (alibaba/ROLL)**
**Date:** 2026-07-22

### 1. Today's Highlights
The ROLL (RL Open-source Orchestrator for LLMs) ecosystem experienced a quiet development cycle over the last 24 hours, marked by zero new releases and no active pull requests. Activity was limited to community engagement, specifically a technical inquiry regarding Chain-of-Thought (CoT) data formatting for reinforcement learning fine-tuning. 

### 2. Releases
*   **Status:** No new releases.
*   There have been no updates to the ROLL repository versioning in the last 24 hours, indicating a stable period following previous deployments.

### 3. Important Issues
*   **[#474: How to use CoT format for full fine-tuning of Qwen3.5-0.8B](https://github.com/alibaba/ROLL/issues/474)** [OPEN]
    *   **Created/Updated:** 2026-07-21 by `Peak925`
    *   **Summary:** A user inquired about the correct methodology for formatting CoT training data for a Qwen3.5-0.8B model. The core question is whether ROLL's full-parameter RL fine-tuning requires explicit CoT wrappers (e.g., utilizing `<think>` tags to delineate reasoning steps from final outputs) or if standard instruction-response JSON pairs are sufficient for optimal policy training.
    *   **Action Needed:** Awaiting official maintainer response to clarify ROLL's data preprocessing requirements for reasoning-bound RL tasks.

### 4. Key PR Progress
*   **Status:** 0 active PRs.
*   No new pull requests were opened, updated, or merged in the last 24 hours. The core engineering codebase remains untouched since yesterday's digest.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, the intersection of reinforcement learning and reasoning capabilities (such as CoT) is the defining frontier for Large Language Models. Issue [#474](https://github.com/alibaba/ROLL/issues/474) perfectly highlights ROLL's critical role in this ecosystem. 

While pre-training and standard Supervised Fine-Tuning (SFT) establish baseline competencies, RL is the primary mechanism for models (like Qwen3.5) to develop robust, verifiable reasoning pathways. As the community actively explores how to structure reward signals and training templates around explicit reasoning tags (e.g., `<think>` blocks), frameworks like ROLL are essential. They provide the scalable, high-throughput infrastructure required to execute complex full-parameter RL paradigms—bridging the gap between static model weights and dynamic, self-improving reasoning agents.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-07-22  
**Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)  

## 1. Today's Highlights
The past 24 hours show sustained momentum in enhancing ROCK's orchestration reliability and sandbox lifecycle management. Key activities focus on asynchronous sandbox operations, Kubernetes (K8s) deployment flexibility, and resolving critical Ray resource scheduling bugs.

## 2. Releases
**No new releases** were cut in the last 24 hours. However, the team is actively preparing the documentation snapshot for the upcoming `1.11.x` release (via [Issue #1277](https://github.com/alibaba/ROCK/issues/1277) and [PR #1278](https://github.com/alibaba/ROCK/pull/1278)).

## 3. Important Issues
*   **Sandbox Resource Scheduling Bug ([#1275](https://github.com/alibaba/ROCK/issues/1275) - CLOSED):** A critical issue where `ray.init(address=None)` silently ignored the `resources` parameter, preventing sandbox actors requesting disk quotas from being scheduled. 
*   **Docker Port Scan Race Condition ([#1281](https://github.com/alibaba/ROCK/issues/1281) - OPEN):** A timing flaw in `_get_docker_used_host_ports()` risks discarding valid container port bindings due to a two-step collection process.
*   **Synchronous Image Commit Timeouts ([#1279](https://github.com/alibaba/ROCK/issues/1279) - OPEN):** Large sandbox images are causing synchronous `/commit` requests to exceed proxy timeouts, prompting a shift to an asynchronous architecture.
*   **Auto-Delete Scanner Missing Expired Sandboxes ([#1242](https://github.com/alibaba/ROCK/issues/1242) - CLOSED):** When >1000 stopped sandboxes exist, the `DESC` sorting scanner kept reading newest records, bypassing older expired records entirely. 

## 4. Key PR Progress
*   **[PR #1280](https://github.com/alibaba/ROCK/pull/1280) (OPEN):** Introduces asynchronous Docker commit and push dispatching through the Proxy role via Rocklet, bypassing Ray and Redis state to prevent proxy timeouts.
*   **[PR #1274](https://github.com/alibaba/ROCK/pull/1274) (CLOSED):** Removes hard-coded K8s GPU routing logic and implements a `DefaultTemplateSelector` with wildcard/fuzzy image matching for better cluster adaptability.
*   **[PR #1267](https://github.com/alibaba/ROCK/pull/1267) (CLOSED):** Enhances multi-worker Uvicorn startup by utilizing `SO_REUSEPORT` per-worker listeners, enabling kernel-level load balancing under high connection churn.
*   **[PR #1262](https://github.com/alibaba/ROCK/pull/1262) (OPEN):** Implements persistent OpenSandbox sessions via Redis mapping, enabling session continuity across different Admin workers.

## 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, the bottleneck has shifted from pure algorithmic compute to distributed infrastructure overhead—specifically, the management of thousands of parallel, ephemeral training environments (sandboxes). 

ROCK's latest updates directly address the most glaring pain points in large-scale RL infrastructure:
1.  **Reliable State Management:** Fixing the auto-delete scanner race conditions and transitioning to asynchronous image commits ensures that large-scale environment snapshots don't bottleneck the training loop or crash proxies.
2.  **Ray Integration:** Fixing the Ray custom resource scheduling ([PR #1276](https://github.com/alibaba/ROCK/pull/1276)) is vital for RL researchers utilizing heterogeneous compute (e.g., ensuring specific rollout actors map strictly to allocated disk/GPU limits).
3.  **Scalable Orchestration:** Upgrading K8s template selection and network socket balancing ensures that RL control planes can dynamically scale to handle massive environment churn without degrading cluster stability. 

*By solving these low-level distributed systems challenges, ROCK allows RL practitioners to focus on policy optimization rather than infrastructure firefighting.*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for THUDM/slime.

### 1. Today's Highlights
Activity in the slime repository over the last 24 hours was strictly focused on engineering maintenance and hardware ecosystem expansion. The community saw no new releases but benefited from two targeted bug fixes addressing tokenization and parameter conversion, alongside with a notable community request for domestic hardware support.

### 2. Releases
* **No new releases** were published in the last 24 hours.

### 3. Important Issues
* **[Question] Request for Ascend 910 NPU Support** ([#2225](https://github.com/THUDM/slime/issues/2225))
  * **Author:** `jiakechong1991`
  * **Summary:** A community member initiated a request for slime to support Huawei's domestic Ascend 910 chips. As RL frameworks become increasingly compute-heavy, adapting to diverse hardware architectures (NVIDIA, AMD, and now Ascend) is a critical bottleneck for international and domestic AI development. The issue is currently unanswered.

### 4. Key PR Progress
* **fix(utils): align Qwen tokenization for parallel tool calls** ([#2226](https://github.com/THUDM/slime/pull/2226))
  * **Author:** `looput`
  * **Summary:** Fixes a formatting bug in `gen_multi_turn_loss_mask_qwen`. By grouping consecutive tool messages before passing them to `apply_chat_template`, the PR ensures that the native Qwen2 chat template formatting is preserved. This is crucial for maintaining data quality when fine-tuning agents that rely on parallel tool calling.
* **fix: avoid in-place mutation of param in MTP weight conversion** ([#2227](https://github.com/THUDM/slime/pull/2227))
  * **Author:** `botbikamordehai2-sketch`
  * **Summary:** Addresses a silent bug in `convert_mimo_mtp_param` (related to #2131). When handling `eh_proj.weight`, the previous logic mutated the underlying tensor storage during chunking and concatenation. This fix prevents potential cascading memory/logic errors when parameters are reused in concurrent processes.

### 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning landscape—increasingly dominated by Agentic RL and Multi-Token Prediction (MTP)—frameworks must handle complex, multi-turn tool usage without degrading token masks. PR #2226 highlights slime's active adaptation to advanced agent workflows (parallel tool calling). Furthermore, the focus on correct MTP weight conversion (PR #2227) shows the project is keeping pace with modern architectural shifts beyond standard next-token prediction. Finally, the push for Ascend chip compatibility (Issue #2225) highlights a major trend in the RL ecosystem: mitigating GPU supply chain bottlenecks by expanding framework portability to alternative hardware accelerators.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning ecosystem digest for AReaL.

# 🪐 AReaL RL Daily Digest — 2026-07-22

## 1. Today's Highlights
AReaL experienced a highly active PR review cycle with 21 updates in the last 24 hours and zero new releases. The development focus is heavily skewed toward **inference engine interoperability**, **memory optimization for large-scale training**, and **hardening PPO/GRPO mathematical correctness**. Key contributors (`EazyReal`, `yulangz`) are driving foundational changes to loss aggregation, rollout group normalization, and proxy reliability.

## 2. Releases
*   **No new releases** in the last 24 hours. The ecosystem remains focused on merging feature branches and stabilizing core infrastructure for the next milestone.

## 3. Important Issues
*   **[#619](https://github.com/areal-project/AReaL/issues/619) [CLOSED] [question] SGLang Launch Arguments for AReaL Examples: `--schedule-policy lpm` and `--disable-radix-cache`**
    *   *Context:* Addressed a community query regarding contradictions in SGLang server launch scripts for agentic RL examples (e.g., TIR/math). This highlights the steep learning curve and configuration complexity when orchestrating inference engines alongside RL training loops. 

## 4. Key PR Progress
A massive 21 PRs saw activity today, reflecting a deep maintenance and enhancement phase:

**Performance & Architecture Optimization**
*   **[#1555](https://github.com/areal-project/AReaL/pull/1555) [OPEN] perf: reduce Megatron training memory peaks:** Introduces a rank-aware SFT profiling workflow and significantly reduces memory peaks in the LM Head, vocabulary-parallel loss, and distributed optimizer for Megatron-trained models.
*   **[#1441](https://github.com/areal-project/AReaL/pull/1441) [CLOSED] feat(infra): add HTTP-based Ray Scheduler:** Replaces the Ray-native scheduler path with subprocess-managed RPC workers using HTTP tensor serialization, enabling more robust proxy worker scaling.
*   **[#1428](https://github.com/areal-project/AReaL/pull/1428) [OPEN] feat(logging): add W&B worker GPU system metrics:** Solves a blind spot in single-controller setups by allowing actor/rollout/critic workers to push GPU utilization metrics directly to W&B.

**RLHF & PPO Algorithmic Refinements**
*   **[#1546](https://github.com/areal-project/AReaL/pull/1546) & [#1443](https://github.com/areal-project/AReaL/pull/1443) [OPEN/CLOSED]:** Overhauls the policy-gradient objective. Transitions AReaL away from a hard-coded global token mean to configurable loss aggregation (`token_mean`, etc.) without altering backend implementations.
*   **[#1412](https://github.com/areal-project/AReaL/pull/1412) [CLOSED] feat(ppo): add CISPO loss surrogate:** Integrates the MiniMax-M1 clipping surrogate to solve the issue of zero-gradient tokens that fall outside the standard PPO/GRPO importance-sampling clip band.
*   **Group Normalization Fixes:** Multiple PRs like **[#1415](https://github.com/areal-project/AReaL/pull/1415)** (rejecting implicit partial group norm) and **[#1413](https://github.com/areal-project/AReaL/pull/1413)** (deriving norm size from `n_samples`) ensure mathematical correctness during reward and advantage normalization.

**Rollout & Inference Backend Support**
*   **[#1547](https://github.com/areal-project/AReaL/pull/1547) [OPEN] feat: add Arena Stream rollout integration:** Adds a SWE rollout mode that dynamically discovers datasets, registers AReaL proxies with Arena LLM gateways, and manages task lifecycles.
*   **[#1498](https://github.com/areal-project/AReaL/pull/1498) [OPEN] fix(proxy): drop retry-orphan completions:** Prevents trajectory splitting when upstream Agent SDKs time out and retry, ensuring rollout trajectories remain uncorrupted.
*   **[#1496](https://github.com/areal-project/AReaL/pull/1496) & [#1389](https://github.com/areal-project/AReaL/pull/1389):** Expanding native **R3 (Rollout Routing Replay)** support to both SGLang+Megatron MoE and vLLM (v0.22.0+) backends.
*   **[#1444](https://github.com/areal-project/AReaL/pull/1444) [stale] feat(vlm): Qwen3.6 LoRA GRPO:** Continues pending work to bring LoRA-based GRPO training to Qwen3.6 (27B dense and 35B-A3B MoE) using FSDP.

## 5. Why This Project Matters in Today's RL Landscape
As RL transitions from theoretical game-playing to large-scale language model alignment (RLHF/Agentic RL), the primary bottleneck is no longer just the algorithm—it is the systems engineering. AReaL is actively solving the most pressing infrastructure pain points in the modern RL stack:

1.  **MoE and Distributed Scaling:** By deeply integrating with Megatron and optimizing memory peaks (PR #1555), AReaL enables the efficient training of massive Mixture-of-Experts (MoE) models.
2.  **Inference-Training Consistency:** Features like R3 (Rollout Routing Replay) (PR #1496) bridge the gap between asynchronous rollout engines (vLLM, SGLang) and training engines, ensuring expert routing choices during generation are accurately replayed during the backward pass.
3.  **Algorithmic Diversity:** Providing plug-and-play support for advanced techniques like MiniMax-M1's CISPO (PR #1412) and granular group normalization prevents gradient vanishing and ensures stable alignment training.

AReaL is effectively providing the "plumbing" required to make cutting-edge reinforcement learning research viable at 10B+ parameter scales.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# 📊 RL Open-Source Ecosystem Daily Digest: TRL (HuggingFace)
**Date:** 2026-07-22

## 1. Today's Highlights
- **v1.9.0 Release:** Major update ships native iterable/streaming dataset support for GRPO and RLOO trainers, resolving a long-standing architectural limitation with `RepeatSampler`.
- **Massive API Refactor:** A coordinated 6-PR series has landed to refactor `DistillationTrainer`, aligning its tensor layouts and dataset formats with GRPO in preparation for becoming a stable API.
- **Qwen 3.5 Friction:** Initialization and vLLM integration bugs with the newly released `Qwen3.5` models are currently the most pressing open issues.

## 2. Releases
- **[v1.9.0](https://github.com/huggingface/trl/releases)** 
  - **Feature:** Native iterable / streaming datasets in **GRPO** and **RLOO**. Previously, samplers couldn't attach to iterable datasets (lacking length/indexing) because of the `RepeatSampler` requirement (repeating prompts `num_generations` times across processes). This unlocks memory-efficient, streaming RLHF/GRPO at scale.

## 3. Important Issues
- **Qwen 3.5 + vLLM Integration Failure:** [Issue #5269](https://github.com/huggingface/trl/issues/5269) (🚨 Important) reports a `ValueError` regarding missing module parameters when running GRPO with `Qwen3.5-0.8B` and `vLLM 0.17.0`.
- **SFTTrainer Multimodal Crash:** [Issue #6483](https://github.com/huggingface/trl/issues/6483) highlights a crash during initialization on `Qwen3.5` because the model's `forward` method is wrapped in `functools.partial`, which TRL fails to patch correctly.
- **Stabilizing Distillation:** [Issue #6449](https://github.com/huggingface/trl/issues/6449) outlines the strategic plan to promote `experimental.DistillationTrainer` to a stable API, driven by the industry trend of on-policy logit distillation (seen in recent Qwen3.x, DeepSeek-V4, and GLM-5 releases).
- **Advanced RL Algorithms Demand:** Community members are actively requesting implementations of cutting-edge RL derivatives, including RDPO for cross-dimensional reward correlation ([Issue #5886](https://github.com/huggingface/trl/issues/5886)).

## 4. Key PR Progress
- **DistillationTrainer GRPO-Alignment Series:** Author @qgallouedec merged a massive sequential refactor migrating `DistillationTrainer` to a prompt-only, GRPO-like tensor layout:
  - [PR #6478](https://github.com/huggingface/trl/pull/6478): Fixed a critical loss denominator bug where `num_items_in_batch` counted raw dataloader labels instead of generated completion tokens.
  - [PR #6480](https://github.com/huggingface/trl/pull/6480) & [PR #6474](https://github.com/huggingface/trl/pull/6474): Deprecated `messages`-format datasets and prompt-length config in favor of prompt-only datasets and `max_completion_length`.
  - [PR #6487](https://github.com/huggingface/trl/pull/6487) & [PR #6497](https://github.com/huggingface/trl/pull/6497): Successfully migrated tensor keys to emit and consume `prompt_ids` / `completion_ids` / `completion_mask` instead of legacy `input_ids` / `labels`.
- **Core Trainer Standardization:** @albertvillanova pushed a series of PRs ([#6492](https://github.com/huggingface/trl/pull/6492), [#6493](https://github.com/huggingface/trl/pull/6493), [#6494](https://github.com/huggingface/trl/pull/6494)) to explicitly reject unsupported `train_dataset` types (e.g., dicts) and unify dataset testing across SFT, DPO, GRPO, KTO, and RLOO trainers.
- **Reward Function Robustness:** [PR #5955](https://github.com/huggingface/trl/pull/5955) fixed a crash in `GRPOTrainer` where custom reward callables lacked a `__name__` attribute.
- **Enhanced Observability:** [PR #6491](https://github.com/huggingface/trl/pull/6491) introduces rollout trace logging to `trackio`, logging completion transcripts, advantages, and reward standard deviations.

## 5. Why This Project Matters in Today's RL Landscape
The release of TRL v1.9.0 highlights the project's rapid maturation to meet industrial-scale RL demands. By solving the streaming dataset bottleneck for GRPO and RLOO, HuggingFace is enabling infinitely scalable, memory-bound RLHF for massive foundation models. 

Furthermore, today's heavy focus on refactoring `DistillationTrainer` proves that TRL is closely tracking state-of-the-art industry workflows. As massive models like DeepSeek-V4 and Qwen3.x rely heavily on on-policy logit distillation to transfer reasoning capabilities efficiently, unifying the Distillation and GRPO APIs ensures that researchers and engineers have a unified, stable interface for both reward-based RL and distillation pipelines.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL open-source ecosystem daily digest for July 22, 2026.

### 1. Today's Highlights
OpenRLHF experienced a quiet day in terms of bug reporting and feature releases, but saw highly targeted, strategic engineering progress. The development focus is heavily centered on **multi-hardware compatibility and testing infrastructure**, specifically aiming to solidify support for Intel XPU accelerators and distributed backend flexibility.

### 2. Releases
*   **None.** No new versions or tags were published in the last 24 hours.

### 3. Important Issues
*   **None.** Zero issues were created, updated, or closed in the last 24 hours, indicating a period of stabilization or a shift in developer focus toward internal testing rather than user-driven bug triaging.

### 4. Key PR Progress
Three new Pull Requests were opened by developer `Madhustat`, all dedicated to fortifying OpenRLHF's multi-device distributed testing capabilities:
*   **[PR #1269](https://github.com/OpenRLHF/OpenRLHF/pull/1269) [test: add device-generic distributed backend smoke tests]**
    Introduces a new smoke test (`test_distributed_backend.py`) that verifies the canonical PyTorch distributed backend can initialize and execute two-rank collective operations seamlessly across different hardware devices.
*   **[PR #1268](https://github.com/OpenRLHF/OpenRLHF/pull/1268) [test: run loss aggregation checks on accelerators]**
    Upgrades the existing loss aggregation test suite by explicitly mapping tensors to both CPU and available PyTorch-supported accelerators, ensuring mathematical operations hold integrity outside of default CPU environments.
*   **[PR #1267](https://github.com/OpenRLHF/OpenRLHF/pull/1267) [test: propagate oneCCL log level to Ray workers]**
    Enhances observability for non-NVIDIA hardware. While OpenRLHF currently propagates `NCCL_DEBUG` for NVIDIA/Ray workloads, this PR adds support for propagating `CCL_LOG_LEVEL` for Intel XPU workloads utilizing PyTorch's XCCL backend.

### 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning from Human Feedback (RLHF) landscape, compute bottlenecks are the primary barrier to aligning large language models. OpenRLHF has emerged as a critical open-source tool because of its highly scalable, Ray-based architecture. 

Today's PR updates underscore a vital trend in the AI ecosystem: **hardware fragmentation**. As RL teams face GPU shortages and high costs, diversifying to alternative accelerators (like Intel XPUs) has become a strategic necessity. By systematically replacing hard-coded NCCL dependencies with device-generic logic and extending telemetry (like oneCCL log propagation) to distributed Ray workers, OpenRLHF is doing the foundational engineering required to make cross-platform, large-scale RL training a reality.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL open-source ecosystem daily digest for **verl** (2026-07-22).

### 1. Today's Highlights
verl continues to push the boundaries of high-throughput RL infrastructure. The past 24 hours (59 issues updated, 16 PRs updated) highlight a massive engineering focus on **hybrid backend weight synchronization**, **custom hardware support (Ascend NPU)**, and refining **agentic RL workloads**. The community is actively testing the newly outlined Q3 roadmap, with core maintainers submitting high-impact PRs to optimize Trainer-Rollout memory and communication patterns.

### 2. Releases
*   **No new releases** in the last 24 hours. The project appears to be in a heavy development phase targeting Q3 milestones.

### 3. Important Issues
*   **[Roadmap] [verl 26Q3 roadmap (#6985)](https://github.com/volcengine/verl/issues/6985):** Maintainers have outlined clear Q3 objectives. The focus is shifting towards dropping legacy `mbrige` support, introducing low-precision MXFP8/NVFP4 training, and polishing `mlite` for production readiness.
*   **[Feature] [Agentic RL Support in GPT-OSS (#3794)](https://github.com/volcengine/verl/issues/3794):** A highly discussed thread (26 comments) driven by the LinkedIn Core AI team. They are actively integrating GPT-OSS models for agentic post-training with tool calls using SGLang, highlighting verl's growing dominance in agentic workflows.
*   **[Bug] [DAPO training hangs at second rollout step due to NCCL timeout (#3873)](https://github.com/volcengine/verl/issues/3873):** A critical operational bottleneck when training massive models (Qwen3-VL-235B) using the Megatron + SGLang hybrid strategy. The process hangs during the second rollout iteration, pointing to synchronization deadlocks in distributed setups.
*   **[Bug] [Padding tokens incorrectly included in response mask (#3805)](https://github.com/volcengine/verl/issues/3805):** A foundational data-processing bug where padding tokens contribute to training loss calculations when EOS tokens are absent, which can severely degrade RL reward signals. 

### 4. Key PR Progress
*   **[Performance] [P2P checkpoint engine via Mooncake RDMA (#7108)](https://github.com/volcengine/verl/pull/7108):** A game-changer for distributed RL latency. This PR introduces a `p2p` checkpoint backend that pushes weights from Megatron trainer ranks directly into SGLang rollout engines over RDMA, bypassing the heavy overhead of NCCL process groups.
*   **[Architecture] [V1 trainer support for RemoteBackend plugin (#7102)](https://github.com/volcengine/verl/pull/7102):** Adds support for out-of-process RL backends (training + sampling outside verl core, like Arctic-Platform's DeepSpeed/vLLM stack), significantly expanding verl's interoperability.
*   **[Stability] [V1 replay buffer eviction/refill handling (#7082)](https://github.com/volcengine/verl/pull/7082):** Unifies buffer handling for stale, DAPO-filtered, and failed rollout groups, preventing late trajectory writes. This ensures cleaner policy updates during complex multi-turn rollouts.
*   **[Ecosystem] [Docker: upgrade vLLM and Megatron (#7101)](https://github.com/volcengine/verl/pull/7101):** Bumps core dependencies to `vllm 0.24.0` and `megatron core_v0.18.0`, ensuring compatibility with the latest open-source SOTA models.
*   **[Hardware] [Ascend MoE comm state fix after L2 wake (#7086)](https://github.com/volcengine/verl/pull/7086):** Fixes precision degradation on Ascend NPUs during expert parallelism (EP > 1) when waking from sleep level 2, a crucial optimization for NPU memory management during rollout generation.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily towards Reinforcement Learning from Human Feedback (RLHF) and reasoning-focused post-training (e.g., GRPO, DAPO), **verl** has established itself as one of the most robust, production-ready RL frameworks. 

Today's development activity proves exactly *why* verl is critical to the current landscape:
1. **Decoupling Training and Inference:** By solving the weight synchronization bottleneck between training engines (Megatron) and inference engines (SGLang) via RDMA and sharded delta syncing, verl drastically reduces the idle time of expensive GPU clusters.
2. **Hardware Agnosticism:** Active patching for both NVIDIA (CUDA/NCCL) and Huawei (Ascend NPU) ecosystems makes verl a truly global tool, immune to hardware supply chain constraints.
3. **Pushing the Limits of Scale:** The community is actively testing 235B parameter MoE models (like Qwen3-VL) with complex algorithms like DAPO. verl provides the exact distributed abstractions (FSDP2, VeOmni, tensor parallelism) required to make trillion-parameter RL training mathematically and computationally feasible.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

Here is the daily digest for the PyTorch ecosystem's RL and LLM fine-tuning library, torchtune.

### 1. Today's Highlights
The torchtune ecosystem is currently focused on a critical security remediation. A newly identified Arbitrary Code Execution (ACE) vulnerability via untrusted YAML recipe configs has prompted active patching. The community is moving quickly to implement an allowlist mechanism for module imports to neutralize the threat.

### 2. Releases
* **No new releases** in the last 24 hours.

### 3. Important Issues
* **[Issue #2971](https://github.com/meta-pytorch/torchtune/issues/2971) - Arbitrary code execution via the `_component_` field in an untrusted recipe config**
  * **Status:** Open | **Author:** geo-chen
  * **Details:** A critical vulnerability where loading or validating untrusted `.yaml` config files allows arbitrary code execution. The config node resolves Python callables via `import_module` without security checks, meaning a malicious YAML file could run dangerous callables (e.g., `os.system`). The author escalated the issue publicly after an initial security advisory report went unanswered. 

### 4. Key PR Progress
* **[PR #2973](https://github.com/meta-pytorch/torchtune/pull/2973) - fix(security): restrict recipe `_component_` imports to trusted roots**
  * **Status:** Open | **Author:** Solaris-star
  * **Details:** A direct patch for Issue #2971. This PR restricts multi-part and non-local single-part component paths, ensuring that recipe configs can only resolve to trusted, predefined module roots. This successfully severs the attack vector for malicious top-level code execution during YAML validation.

### 5. Why This Project Matters in Today's RL Landscape
While `torchtune` is primarily recognized for Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO) of LLMs, it is a foundational infrastructure tool for modern Reinforcement Learning (e.g., RLHF/RLAIF workflows). 

In RL pipelines, base models must be frequently initialized, fine-tuned with proxy rewards, and rapidly re-evaluated. The current vulnerability highlights the growing pains of scaling RL infrastructure: as RL workflows become highly distributed and config-driven (often pulling YAML configs from dynamic data sources or multi-agent environments), attack surfaces expand. Patching these import vulnerabilities is crucial to ensuring that RL compute clusters—which operate with high privileges and process massive datasets—remain secure against malicious data poisoning and untrusted config execution.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# 🧠 RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-07-22 | **Repository:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 1. Today's Highlights
Activity in the `open-instruct` repository over the past 24 hours has been minimal, with zero new pull requests, zero new releases, and no newly opened issues. The repository is currently in a maintenance/review phase, with existing community discussions centered around model reproduction.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **[Reproduction Inquiry] [OPEN] How to reproduce the OLMo 3 SFT stage and obtain OLMo-3-7B-Instruct?** ([#1756](https://github.com/allenai/open-instruct/issues/1756))
    *   **Author:** JaydencoolCC
    *   **Activity:** Updated yesterday (2026-07-21) with 3 total comments.
    *   **Summary:** A community member is seeking clarification on the exact configuration and checkpoint paths required to faithfully reproduce the supervised fine-tuning (SFT) stage of the newly released OLMo-3-7B-Instruct model. This highlights the ongoing community demand for reproducible SFT pipelines as the baseline for subsequent RLHF/RLAIF training.

### 4. Key PR Progress
*   **No active PR updates** in the last 24 hours. The development pipeline is currently quiet, with no merges, reviews, or new feature branches submitted today.

### 5. Why This Project Matters in Today's RL Landscape
While today's digest is quiet, [Open Instruct](https://github.com/allenai/open-instruct) remains a critical open-source infrastructure project in the RL and LLM alignment ecosystem. 

*   **The Foundation of RLHF:** As seen in Issue #1756, robust Supervised Fine-Tuning (SFT) is a mandatory precursor to any Reinforcement Learning from Human Feedback (RLHF) or AI Feedback (RLAIF) pipeline. Open Instruct provides the exact, scalable scripts used by AI2 to bridge pretraining and preference tuning.
*   **Fully Open Science:** In a landscape where many "open" models only release model weights, initiatives like OLMo-3 paired with Open Instruct provide the full stack—data, code, and intermediate checkpoints. This allows RL researchers to precisely study the transition from base models to instruction-tuned baselines, enabling more transparent research into alignment algorithms like PPO and DPO.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

### RL Open-Source Ecosystem Daily Digest: `rl_games`
**Date:** 2026-07-22

#### 1. Today's Highlights
The `rl_games` repository experienced a quiet day regarding issue triage and releases, with zero new bug reports or version bumps. However, core algorithmic maintenance continues behind the scenes, highlighted by ongoing refinements to Proximal Policy Optimization (PPO) regarding vectorized environment auto-reset handling.

#### 2. Releases
*   **No new releases** in the last 24 hours.

#### 3. Important Issues
*   **None.** There are currently zero open or recently updated issues, suggesting a period of operational stability for users or a lull in community bug reporting.

#### 4. Key PR Progress
*   **[OPEN] [PR #362: PPO: mask next-step autoreset garbage rows; scalar sigma parametrization](https://github.com/Denys88/rl_games/pull/362)**
    *   **Author:** ViktorM (Created: 2026-07-12, Updated: 2026-07-21)
    *   **Progress:** Active technical review and iteration are underway. 
    *   **Summary:** This PR addresses a critical data pipeline flaw in PPO when interfacing with next-step auto-reset environments (e.g., Envpool, native Gymnasium 1.x vector envs). Previously, the transition row generated during an automatic episode reset—which contains dummy actions, filler rewards, and terminal observations—was being incorrectly ingested into PPO rollouts as valid training data. The PR masks these "garbage rows" to preserve algorithmic integrity. It also completes the PPO half of a broader autoreset correctness initiative, following a prior fix for SAC (commit `b1ed755`). Additionally, it introduces scalar sigma parameterization for action noise exploration.

#### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a foundational, highly optimized library for vectorized Reinforcement Learning, widely utilized in rigorous robotics benchmarks and simulated environments (such as the Isaac Gym / Isaac Lab ecosystem). 

Today's highlighted PR #362 underscores a broader, critical challenge in the modern RL landscape: **environment interface correctness**. As the ecosystem shifts from legacy Gym APIs to Gymnasium 1.x and highly parallelized backends like Envpool, the mechanics of episode termination and auto-resetting have become major sources of silent algorithmic degradation. By rigorously identifying and masking invalid transition states caused by auto-resets, `rl_games` ensures that PPO and SAC policies learn from true environmental dynamics rather than computational artifacts. This type of low-level data integrity maintenance is vital for achieving reproducible, high-performance RL training at scale.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-22
**Repository:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity in the last 24 hours was exclusively focused on long-standing, open Pull Requests. There were no new releases, no new issues created, and no recently merged code. However, two significant PRs saw updates, signaling that maintainers and contributors are actively reviewing and revising major feature implementations. 

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **No new issues** were created or updated in the last 24 hours. The pipeline currently contains 0 active items, suggesting a period of stability or a backlog focus for maintainers.

### 4. Key PR Progress
Two older PRs received updates today, indicating ongoing development behind the scenes:

*   **[PR #1323](https://github.com/Farama-Foundation/Gymnasium/pull/1323) - Add termination condition based on percentage of visited tiles for Car Racing**
    *   *Author:* VincenzoPalma
    *   *Status:* Updated (Created Feb 2025)
    *   *Summary:* Introduces a mechanism to set `terminated = True` in the Car Racing environment once a lap is completed based on a threshold of visited tiles. This resolves [Issue #1269](https://github.com/Farama-Foundation/Gymnasium/issues/1269) and provides researchers with better control over episode horizons in continuous driving tasks.
*   **[PR #834](https://github.com/Farama-Foundation/Gymnasium/pull/834) - [RFC] `MJX` environment prototype (WIP)**
    *   *Author:* Kallinteris-Andreas
    *   *Status:* Updated (Created Dec 2023)
    *   *Summary:* A Request for Comments (RFC) for integrating Google DeepMind's `MJX` (MuJoCo XLA) into Gymnasium. This PR aims to bring hardware-accelerated, vectorized physics simulations to the standard API. The update notes that development is paused pending the release of `mjx==3.2` and updates to Gymnasium's `FuncEnv` architecture.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent Reinforcement Learning environments. While today's digest is quiet regarding new issues or releases, the active iteration on PR #834 highlights a critical trajectory for the RL ecosystem: **hardware acceleration**. 

By prototyping `MJX` integration, Gymnasium is actively working to bridge the gap between its widely adopted Python API and modern, JIT-compiled backends (via XLA). This is essential for the current RL landscape, where sim-to-real research and large-scale parallel training (which MuJoCo MJX and Isaac Lab facilitate) are becoming the baseline requirement for cutting-edge robotics and continuous control research. Keeping the API standardized while backend-agnostic ensures Gymnasium's continued relevance in the fast-evolving deep RL stack.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>