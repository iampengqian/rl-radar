# RL Open Source Daily Digest 2026-04-22

> Generated: 2026-04-21 22:12 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem on April 22, 2026, is defined by a stark divide between the rapid, heavy engineering required for LLM post-training (RLHF/GRPO) and the stable, maintenance-mode of classical RL libraries. The majority of active development is concentrated in post-training orchestration frameworks (verl, TRL, AReaL, OpenRLHF, slime, Open Instruct) and enterprise-grade environment managers (ROCK, ROLL). These projects are aggressively tackling distributed systems bottlenecks—specifically inference-training communication overhead, hardware scaling, and memory efficiency. Meanwhile, standard single-agent and algorithm libraries (Stable Baselines3, Gymnasium, CleanRL, Tianshou) experienced minimal to no activity, reflecting their mature status in the current AI lifecycle.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 14 | 41 | 0 | **Critical** architecture overhauls, multi-modal/diffusion RL, multi-platform support. |
| **TRL** | 3 | 19 | 0 | **High** memory optimization, async GRPO hardening, rapid integration of new algorithms (TPO, SD-Zero). |
| **ROCK** | 9 | 14 | 0 | **High** serverless infrastructure elasticity, enterprise sandbox isolation, Windows support. |
| **AReaL** | 3 | 6 | 0 | **Medium** Inference-training integration, bridge refactoring, cross-engine NCCL P2P scaling. |
| **Open Instruct** | 0 | 9 | 0 | **Medium** Data pipeline optimization, novel policy gradient implementations (DAPO, DPG). |
| **slime** | 3 | 4 | 0 | **Medium** DDP pipeline stabilization, GLM-5 integration, ARM/Grace-Blackwell hardware expansion. |
| **OpenRLHF** | 3 | 0 | 0 | **Low** Dependency breakage (PyTorch 2.10, Transformers), feature requests for multimodal rewards. |
| **ROLL** | 1 | 1 | 0 | **Low** Strategic push for verifiable reasoning (CoT) environments via Atropos integration. |
| **Gymnasium** | 1 | 1 | 0 | **Minimal** Environment customizability enhancements and static typing fixes. |
| **Stable Baselines3** | 1 | 0 | 0 | **Minimal** Routine documentation UI/UX maintenance. |
| **Others*** | 0 | 0 | 0 | **Dormant** No activity. |

*\*CleanRL, PettingZoo, rl\_games, Tianshou, and torchtune recorded zero activity in the last 24 hours.*

## Shared Research & Engineering Directions

**Research Signals**
*   **Advanced Alignment Algorithms:** The ecosystem is moving beyond standard PPO/DPO. TRL integrated Target Policy Optimization (TPO) and Self-Distillation Zero (SD-Zero), while Open Instruct introduced the "Delightful Policy Gradient" (per-token advantage gating) and DAPO.
*   **Verifiable & Multi-modal RL:** There is a clear shift toward complex reasoning. ROLL is integrating Atropos for verifiable Chain-of-Thought (CoT) reasoning, verl is decoupling diffusion architectures for native multi-modal generation RL, and OpenRLHF users are actively requesting multimodal reward models.

**Engineering & Infrastructure Signals**
*   **Inference-Training Integration:** The biggest bottleneck in post-training is the weight-sync overhead between inference and training engines. AReaL implemented cross-engine NCCL P2P syncing, verl optimized asynchronous drain loops, and Open Instruct fixed critical distributed checkpoint resumption bugs.
*   **VRAM & Compute Efficiency:** Projects are racing to optimize memory footprints. TRL achieved a 50% VRAM reduction via chunked cross-entropy loss, verl resolved OOM errors via tensor chunking, and Open Instruct achieved a 9.4x speedup in SFT tokenization using numpy memory mapping.
*   **Hardware & Platform Agnosticism:** Frameworks are decoupling from pure NVIDIA/CUDA dependencies. verl introduced a plugin system for Ascend NPU/CPUs (FlagOS), and slime expanded Docker support to ARM-based Grace-Blackwell architectures.
*   **Serverless & Agentic Sandboxing:** To manage costs for agentic tool-use, ROCK transitioned to serverless sandboxing via Alibaba Cloud Function Compute with strict disk quotas and session-level VPC isolation.

## Differentiation Analysis

*   **End-to-End Alignment Frameworks (TRL, verl):** TRL differentiates itself through rapid algorithmic inclusion and deep, accessible HuggingFace/vLLM integration (e.g., speculative decoding, chunked losses). Conversely, verl is positioning itself as a hyper-scalable, production-grade orchestration layer, focusing on massive architectural overhauls (deprecating legacy workers) and multi-backend hardware support.
*   **Inference-Training Orchestration (AReaL, slime):** While TRL and verl focus on the broader pipeline, AReaL is heavily optimized for low-level distributed communication (e.g., FSDP-to-SGLang weight syncing). Slime acts as a specialized, high-performance bridge between Megatron-scale distributed training and specific frontier models (GLM-5, Qwen3).
*   **Enterprise Environment Orchestration (ROCK vs. ROLL):** Both Alibaba-backed projects address environment execution, but ROCK focuses on enterprise-grade infrastructure elasticity (serverless compute, container disk quotas), whereas ROLL is targeting the algorithmic environment layer, specifically bridging the gap for verifiable reasoning environments (Atropos).
*   **Classical vs. LLM RL:** A vast functional gap exists. Gymnasium and Stable Baselines3 represent the mature, stabilized era of single-agent RL. They are focused on API standardization and documentation, serving educational and traditional control-task roles, completely insulated from the distributed inference-training chaos of LLM frameworks.

## Community Momentum & Maturity
The LLM post-training space (verl, TRL, AReaL) is characterized by extreme momentum and high burn-down rates for infrastructure issues, though it remains heavily reliant on unstable upstream dependencies like PyTorch 2.10 and `transformers>=5.0` (as seen in OpenRLHF and verl bug reports). Contribution quality is highly technical and systems-oriented. 

In contrast, the classical RL ecosystem (Gymnasium, SB3) is in a mature maintenance phase. Activity here is sparse, driven by community volunteers focusing on UI/docs or strict type-checking rather than core algorithmic changes. Projects with zero activity (CleanRL, Tianshou, torchtune) indicate either stable satisfaction with current releases or a community pivot away from traditional modular RL libraries toward all-in-one post-training suites.

## Trend Signals
1.  **The Rise of Verifiable RL:** The integration of environments like Atropos into orchestration layers like ROLL signals that the next frontier in post-training is moving beyond subjective human preference (RLHF) toward deterministic, verifiable logic and coding tasks.
2.  **Inference is the New Bottleneck:** The overwhelming focus on speculative decoding, async weight syncing, and rollout interruptibility indicates that generating rollouts is currently vastly more expensive and complex than updating weights in the RLHF loop.
3.  **Hardware Fragmentation:** The explicit moves by verl and slime to support Ascend NPU and ARM/Grace-Blackwell architectures signal that the open-source community is preparing for a non-NVIDIA-dominated hardware future in AI data centers.
4.  **Death of Monolithic Training Scripts:** The architectural refactors across verl (engine workers), AReaL (decoupled backends), and TRL (refactored KTO data collation) show that modularity and dynamic resource allocation are becoming mandatory for scaling RL workflows.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

### RL Open-Source Ecosystem Daily Digest: ROLL 
**Date:** 2026-04-22 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

---

#### 1. Today's Highlights
The ROLL framework is seeing a focused community push to expand its environment capabilities into verifiable reasoning. In the last 24 hours, developer **RUFFY-369** submitted a paired Issue and Pull Request proposing the native integration of [Atropos](https://github.com/NousResearch/atropos) (by NousResearch). This signals a strategic, grassroots effort to position ROLL as a foundational orchestration layer for advanced Chain-of-Thought (CoT) reinforcement learning.

#### 2. Releases
*   **No new releases** were cut in the past 24 hours.

#### 3. Important Issues
*   **[#427 [OPEN] Add Atropos Integration](https://github.com/alibaba/ROLL/issues/427)**
    *   **Context:** Proposes adding official support and examples for Atropos within the ROLL framework.
    *   **Significance:** Atropos is emerging as a critical environment for verifiable reasoning tasks. Integrating it would directly enable ROLL users to train models using RL on verifiable Chain-of-Thought (CoT) datasets, bridging the gap between standard RLHF and complex, logic-driven reward signals.

#### 4. Key PR Progress
*   **[#426 [OPEN] ROLL with Atropos environments](https://github.com/alibaba/ROLL/pull/426)**
    *   **Context:** A functional PR submitted alongside Issue #427. 
    *   **Implementation Details:** Rather than a simple wrapper, this PR introduces a modular "Universal Reward Bridge." This acts as a configurable agentic adapter, translating reward signals from Atropos environments into the ROLL framework natively. 
    *   **Status:** Currently open and awaiting maintainer review.

#### 5. Why This Project Matters in Today's RL Landscape
As the AI field shifts its focus from foundational pre-training to post-training reasoning capabilities (e.g., OpenAI's o1/o3 series, open-source reasoning models), the infrastructure for **Verifiable RL** is becoming paramount. ROLL is establishing itself not just as a distributed RL training framework, but as an orchestration layer capable of handling complex, agentic environments. 

By potentially merging PR #426, ROLL would offer a plug-and-play solution for reasoning-centric RL (CoT). This lowers the engineering barrier for researchers aiming to train LLMs on math, coding, and logic tasks where outcomes can be deterministically verified, keeping the project highly relevant in the rapidly evolving post-training RL landscape.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK open-source project for April 22, 2026:

# RL Ecosystem Daily Digest: ROCK (alibaba/ROCK)
**Date:** 2026-04-22

### 1. Today's Highlights
Yesterday was a highly active day for the ROCK (Robust Open Continuous Knowledge) framework, driven by 14 updated PRs and 9 issues. The core development focus was heavily centered on **infrastructure elasticity and reliability**. Key themes include the major push towards integrating **Alibaba Cloud Function Compute (FC)** for serverless sandboxing, crucial bug fixes for **WebSocket proxy routing**, expanded OS compatibility with **Windows PowerShell support**, and the introduction of new **Dataset SDK/CLI utilities** for benchmark management. 

### 2. Releases
No new official releases were tagged in the last 24 hours.

### 3. Important Issues
*   **Serverless Sandbox Architecture (Issues [#868](https://github.com/alibaba/ROCK/issues/868), [#869](https://github.com/alibaba/ROCK/issues/869), [#870](https://github.com/alibaba/ROCK/issues/870)):** Author `insight-bit` opened and closed a series of issues detailing the architecture for session-level environment variables, VPC settings, and a new FC Operator pattern. This marks a shift from a "single-function multi-session" model to independent function deployments per session, giving RL environments isolated networking and credentials.
*   **WebSocket Proxy Header Loss ([#865](https://github.com/alibaba/ROCK/issues/865)):** `Issac-Newton` identified a critical issue where the `websocket_proxy()` was dropping `Origin` and auth headers (e.g., `Authorization`, `Cookie`) during the upstream handshake, which breaks authenticated multi-hop RL environment connections.
*   **Cross-Platform Support ([#862](https://github.com/alibaba/ROCK/issues/862)):** A feature request by `yangzhao02` to natively support Windows OS, a key step toward local development standardization for Windows-based researchers.
*   **Sandbox Disk Limitation ([#653](https://github.com/alibaba/ROCK/issues/653)):** An older enhancement request for container rootfs disk limits was officially closed, aligning with the merged storage optimization PRs.

### 4. Key PR Progress
*   **[Merged] Disk Quota Enforcement:** PR [#860](https://github.com/alibaba/ROCK/pull/860) (and backport [#872](https://github.com/alibaba/ROCK/pull/872)) by `zhangjaycee` successfully implemented container rootfs disk limits via Docker `storage-opt`, preventing runaway RL environments from consuming node disk space.
*   **[Merged] Dataset & OSS Integration:** PR [#859](https://github.com/alibaba/ROCK/pull/859) by `dengwx2026` added `rock.sdk.envhub.datasets` and concurrent upload capabilities via `oss2`, standardizing how RL benchmark datasets are stored in Alibaba Cloud OSS.
*   **[Open] Windows PowerShell Support:** PR [#861](https://github.com/alibaba/ROCK/pull/861) bypasses Unix-only Python packages and introduces Windows PowerShell execution support for sandbox operations.
*   **[Open] FC3 Provider & Operator:** PR [#643](https://github.com/alibaba/ROCK/pull/643) (Provider) and PR [#867](https://github.com/alibaba/ROCK/pull/867) (Operator) introduce FC3 deployment modes, complete with thread-safe CircuitBreakers and WebSocket reconnection logic for fault-tolerant serverless training.
*   **[Open] Upstream Proxy & TZ Fixes:** PR [#866](https://github.com/alibaba/ROCK/pull/866) implements whitelisting for headers in proxy handshakes, while PR [#864](https://github.com/alibaba/ROCK/pull/864) injects the standard `TZ` environment variable into Docker containers to fix frontend UI timestamp discrepancies.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning (particularly for LLM alignment and complex multi-agent systems) requires massive distributed compute and high-fidelity sandboxes for code execution/tool-use evaluation. ROCK’s current development trajectory highlights two major pain points in the current RL landscape: **infrastructure cost management** and **environment state isolation**. 

By advancing serverless sandbox execution via Alibaba Cloud Function Compute, ROCK is actively addressing the cold-start and idle-cost problems inherent in always-on RL training clusters. Furthermore, strict sandbox limits (disk quotas) and session-level isolation (VPC/Env vars) ensure that single-step tool-use errors or data leaks do not collapse entire training runs. Combined with the new OSS Dataset SDK, ROCK is positioning itself as a highly resilient, enterprise-grade orchestration layer capable of scaling from local Windows workstations to massive, serverless distributed training clusters.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-04-22

## 1. Today's Highlights
Activity on the `slime` repository over the last 24 hours was heavily focused on **infrastructure stability and model compatibility**. Key developments include critical bug patches for distributed data parallel (DDP) training and a rapid reversion of a recent partitioning fallback, signaling active debugging in the training pipeline. Additionally, there is a strong community push to integrate **GLM-5** SFT capabilities and expand hardware support to ARM-based architectures.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **DDP Partitioning Crash:** [Issue #1838](https://github.com/THUDM/slime/issues/1838) reports a critical `ValueError` crash during `get_batch`. The function `_get_capped_partitions` generates empty micro-batch partitions when `num_microbatches` is all-reduced across DP ranks. This is currently the most pressing pipeline bug.
*   **Qwen3-VL Inference Anomaly:** [Issue #1850](https://github.com/THUDM/slime/issues/1850) highlights an issue where Qwen3-VL-4B-instruct models served via slime's Dockerized sglang server fail to process images correctly, outputting `????` or hallucinated text. 
*   **Megatron Bridge Module Missing:** [Issue #1711](https://github.com/THUDM/slime/issues/1711) remains open regarding a `ModuleNotFoundError` for `peft_bridge.py` when attempting to integrate the Qwen 35 Megatron bridge.

## 4. Key PR Progress
*   **Pipeline Revert:** [PR #1848](https://github.com/THUDM/slime/pull/1848) (Closed/Merged) reverted PR #1823 ("Add fallback for get_seqlen_balanced_partitions"). This action directly correlates with the ongoing DDP partitioning bugs highlighted in Issue #1838, indicating that the previous fallback logic introduced unforeseen instabilities.
*   **GLM-5 SFT Integration:** Two competing efforts are live to add multi-turn SFT loss masking for GLM-5: [PR #1824](https://github.com/THUDM/slime/pull/1824) (Closed) and [PR #1844](https://github.com/THUDM/slime/pull/1844) (Open). PR #1844 introduces specific handling for GLM role-token delimiters (``/``) and tool calls, along with unit tests.
*   **Hardware Expansion:** [PR #1835](https://github.com/THUDM/slime/pull/1835) (Closed/Merged) brings Docker build support for the NVIDIA DGX Spark (GB10 / Project Digits), enabling aarch64/arm64 compilation targeting `sm_121a` (Grace CPU + Blackwell GPU).

## 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning from Human Feedback (RLHF) and alignment pipelines require orchestration frameworks capable of handling massive distributed training workloads, complex inference servers, and seamless multi-modal data flows. `slime` serves as a critical infrastructure bridge between high-performance training frameworks (like Megatron) and top-tier LLM/VLM families (GLM, Qwen). 

Today's digest underscores a common growing pain in the open-source RL ecosystem: **maintaining distributed stability across rapidly evolving architectures**. The prompt reverts and DDP partitioning bugs show that scaling sequence-balanced micro-batches across diverse GPU clusters remains a non-trivial challenge. Furthermore, the integration of GLM-5 and fixes for Qwen3-VL inference demonstrate the project's pivotal role in keeping the open-source community equipped with day-zero alignment tooling for frontier models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for April 22, 2026.

### 1. Today's Highlights
The AReaL ecosystem saw significant activity focused on **inference-training integration and performance scaling**. Key themes include optimizing distributed communication during weight updates, addressing critical data corruption bugs in vLLM bridges, and improving Megatron-based training efficiency. The maintainer team also expanded, welcoming new maintainers to support the project's growing infrastructure.

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **Critical vLLM Bridge Bug ([#1222](https://github.com/inclusionAI/AReaL/issues/1222)):** Discovered during a refactor, `VLLMBridgeBackend` currently drops accumulated tokens for chat/vision requests during abort/resubmit cycles and mutates `ModelRequest`. Tagged as *High Severity*, this directly impacts RL data integrity during rollouts.
*   **SFT Token Duplication ([#1202](https://github.com/inclusionAI/AReaL/issues/1202)):** A consistently reproducible bug where the single-controller SFT workflow erroneously duplicates training tokens.
*   **Call for Contribution ([#1217](https://github.com/inclusionAI/AReaL/issues/1217)):** Tagged as a `good first issue`, the project is looking for help to refactor the HTTP inference service to enable connection pooling (client reuse) and parallelization, replacing anti-pattern sequential network calls.

### 4. Key PR Progress
*   **Architecture & Refactoring:**
    *   [#1221](https://github.com/inclusionAI/AReaL/pull/1221) **[CLOSED]:** Successfully merged a pure structural refactor that breaks the monolithic `data_proxy/backend.py` into distinct SGLang and vLLM submodules. This lays the groundwork for advanced weight-sync features.
    *   [#1140](https://github.com/inclusionAI/AReaL/pull/1140): Progress on decoupling the `FSDPEngine` from config dataclasses by implementing a `from_pretrained` constructor.
*   **Training & Scaling Performance:**
    *   [#1214](https://github.com/inclusionAI/AReaL/pull/1214): Introduced an `awex` backend to enable cross-engine weight synchronization via NCCL P2P directly between FSDP training workers and SGLang inference servers—a massive throughput upgrade for RL loops. 
    *   [#1223](https://github.com/inclusionAI/AReaL/pull/1223): Added Context-Parallel (CP) local cross-entropy loss for Megatron-based SFT, eliminating expensive all-gather operations across CP ranks.
    *   [#1162](https://github.com/inclusionAI/AReaL/pull/1162): Implements Pipeline Parallelism (`pp_size > 1`) for the SGLang inference backend, coordinating seamlessly across Megatron, FSDP, and Archon engines.
*   **Examples & Ecosystem:**
    *   [#1224](https://github.com/inclusionAI/AReaL/pull/1224): Added a Terminal Bench 1.0 training example, adapting the SETA workflow to train terminal agents within the AReaL framework.
    *   [#1206](https://github.com/inclusionAI/AReaL/pull/1206): **[High Priority]** Core dependency upgrades across the board, including Megatron-core (0.16.0 → 0.17.0) and SGLang (0.5.9 → 0.5.10.post1).
*   **Maintainability:**
    *   [#1220](https://github.com/inclusionAI/AReaL/pull/1220) **[CLOSED]:** Onboarded new project maintainers.

### 5. Why This Project Matters in Today's RL Landscape
In modern post-training and RLHF, the primary bottleneck is no longer just compute—it's the communication overhead between the inference engine (generating rollouts) and the training engine (updating weights). AReaL is tackling this exact pain point head-on. By actively implementing NCCL P2P weight synchronization ([#1214](https://github.com/inclusionAI/AReaL/pull/1214)) and breaking down inference/training boundaries across multiple backends like FSDP, Megatron, and SGLang ([#1162](https://github.com/inclusionAI/AReaL/pull/1162), [#1221](https://github.com/inclusionAI/AReaL/pull/1221)), AReaL is establishing itself as a critical, hardware-conscious orchestration layer for next-generation, large-scale LLM reasoning agents.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL Daily Digest: 2026-04-22

Here is the daily breakdown of activity for Hugging Face's `trl` library. 

## 1. Today's Highlights
The TRL ecosystem is seeing massive momentum in **post-training optimization methods** and **resource-efficient training**. Key themes today include:
*   **VRAM Optimization:** Major pushes to reduce GPU memory footprints via chunked cross-entropy loss.
*   **Alignment Algorithm Expansion:** Introduction of new trainers like Target Policy Optimization (TPO) and Self-Distillation Zero (SD-Zero).
*   **Async Infrastructure Hardening:** Critical bug fixes and LoRA support for `AsyncGRPOTrainer`, alongside breaking changes to legacy vLLM support.

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
Developers are actively requesting deeper integrations for inference speedups and custom loss weighting:
*   **Speculative Decoding Support ([#5604](https://github.com/huggingface/trl/issues/5604)):** A highly requested feature to expose vLLM's `speculative_config` in `trl vllm-serve` to speed up generation during GRPO/OnlineDPO training without users needing to fork the serve script.
*   **Sample Weights for DPO ([#5613](https://github.com/huggingface/trl/issues/5613)):** A feature request to allow passing precomputed dataset weights (e.g., a `sample_weight` column) directly into `DPOTrainer` to scale per-example loss before batch aggregation.
*   **AsyncGRPO Tokenizer Bug ([#5498](https://github.com/huggingface/trl/issues/5498) - Closed):** Fixed an issue where `AsyncGRPOTrainer` ignored the provided `processing_class` and unnecessarily reloaded the tokenizer from `model_name`.

## 4. Key PR Progress
Nineteen pull requests were updated, signaling rapid development across SFT, distillation, and GRPO paradigms:

*   **Memory & Efficiency:**
    *   [PR #5575](https://github.com/huggingface/trl/pull/5575): Implements chunked cross-entropy loss for SFT, reportedly reducing VRAM usage by up to **50%**.
    *   [PR #5617](https://github.com/huggingface/trl/pull/5617): Fixes an SFT metric mismatch where entropy was incorrectly averaged over padding tokens instead of ignored label tokens.
*   **New Algorithms & Trainers:**
    *   [PR #5591](https://github.com/huggingface/trl/pull/5591): Adds the [Target Policy Optimization (TPO)](https://huggingface.co/papers/2604.06159) trainer as a GRPO-family loss wrapper. (Note: This supersedes the experimental [PR #5506](https://github.com/huggingface/trl/pull/5506)).
    *   [PR #5609](https://github.com/huggingface/trl/pull/5609): Implements "Self-Distillation Zero", turning binary rewards into dense supervision via a two-stage self-revision process.
*   **Async GRPO & Infrastructure:**
    *   [PR #5610](https://github.com/huggingface/trl/pull/5610): Brings **LoRA support** to `AsyncGRPO`, utilizing HTTP reloads instead of NCCL to sync parameters with vLLM.
    *   [PR #5549](https://github.com/huggingface/trl/pull/5549 - Closed/Merged): Officially drops support for legacy vLLM 0.11, paving the way to require vLLM 0.18+ for native weight syncing.
*   **Codebase Refactoring:**
    *   [PR #5612](https://github.com/huggingface/trl/pull/5612): Major refactoring of `KTOTrainer` to align with modern DPO architecture, replacing the two-pass tokenization pipeline with a single pass and a dedicated `DataCollatorForKTO`.

## 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/post-training landscape, the bottleneck has shifted from pure algorithmic design to **inference-compute efficiency** and **infrastructure scaling**. TRL's latest updates reflect this industry pivot. 

By aggressively integrating vLLM features (like speculative decoding in [#5605](https://github.com/huggingface/trl/pull/5605)) and optimizing memory pathways (chunked losses, distillation NaN fixes), TRL is lowering the hardware barrier for complex online RL algorithms like GRPO. Furthermore, the rapid inclusion of algorithms like TPO and SD-Zero demonstrates TRL's crucial role as the definitive open-source bridge between cutting-edge AI research and production-ready alignment pipelines.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-04-22 | **Focus Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

### 1. Today's Highlights
The OpenRLHF repository experienced a quiet day regarding code changes (zero PRs or releases) but saw active, high-level technical discussions in the issue tracker. The primary focus for maintainers and contributors revolves around resolving dependency breaking changes—specifically, navigating incompatibilities with newer versions of Hugging Face `transformers` and the newly released PyTorch 2.10. 

### 2. Releases
No new releases were published today.

### 3. Important Issues
Three issues were updated in the past 24 hours, highlighting critical dependency management challenges and upcoming feature requests:

*   **[Compatibility] PyTorch 2.10 Breaks DeepSpeed LoRA Training** 
    In [Issue #1225](https://github.com/OpenRLHF/OpenRLHF/issues/1225), user `allen-dc` identified a critical breaking change in PyTorch 2.10. DeepSpeed’s `_configure_optimizer` filters out empty param groups in place. However, because the LR scheduler captures `base_lrs` before `strategy.prepare()` executes, a length mismatch occurs, triggering PyTorch 2.10's newly enforced `strict=True` in its `zip` logic. This currently halts LoRA training workflows.
*   **[Compatibility] Transformer Version Breaks `ring_flash_attn`**
    Initially reported a few days ago and updated today, [Issue #1222](https://github.com/OpenRLHF/OpenRLHF/issues/1222) (Closed) tracks an import failure in `ring_flash_attn_utils.py` caused by recent updates to the `transformers` library. This is a key dependency for fast attention mechanisms in distributed RL.
*   **[Feature Request] Multimodal Reward Models**
    In [Issue #1224](https://github.com/OpenRLHF/OpenRLHF/issues/1224), user `spirit-moon-fly` inquired about support and official training scripts for Multimodal Reward Models, signaling strong community demand to expand OpenRLHF beyond text-only reward modeling.

### 4. Key PR Progress
No pull requests were opened, updated, or merged in the last 24 hours. Given the critical nature of Issue #1225, the ecosystem should expect a hotfix PR addressing the PyTorch 2.10 `LRScheduler` mismatch in the near future.

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF is a foundational framework for training Large Language Models (LLMs) using Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO). As the RL landscape shifts rapidly toward multimodal AI and complex alignment techniques, projects like OpenRLHF serve as the critical bridge between cutting-edge research and production-ready distributed training. 

Today's issues perfectly illustrate the realities of the current open-source RL ecosystem: while the community pushes for advanced capabilities like multimodal reward models, framework developers are locked in a constant battle to maintain stability against rapid upstream updates from PyTorch and Hugging Face. Fixing these low-level optimizer and attention bugs is essential to ensure that distributed RLHF training remains stable and scalable for the broader AI engineering community.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Daily Digest: verl
**Date:** 2026-04-22

Here is the daily update for the **[verl-project/verl](https://github.com/volcengine/verl)** repository.

## 1. Today's Highlights
The verl ecosystem saw a massive surge in activity today with **41 PRs updated and 14 Issues active**. The core themes revolve around advancing the **Q2 2026 Roadmap**—specifically deprecating legacy workers—and making significant architectural leaps in multi-modal/diffusion RL training, fully asynchronous training pipelines, and multi-hardware platform support. 

## 2. Releases
**No new releases** were cut today.

## 3. Important Issues
*   **Q2 2026 Roadmaps Finalized:** 
    *   The broader **[verl 26Q2 roadmap (#5836)](https://github.com/verl-project/verl/issues/5836)** is taking shape, focusing on Megatron FSDP, low-precision training (MXFP8/NVFP4), and Qwen 3.5 LoRA support.
    *   The **[Multi-modal Generation RL Roadmap (#5755)](https://github.com/verl-project/verl/issues/5755)** outlines critical vLLM-Omni enhancements (Cross-request batching, TP/DP support) for advanced generation tasks.
*   **Silent Training Failure with `transformers>=5.0`:** A critical bug report ([#6080](https://github.com/verl-project/verl/issues/6080)) notes that `critic/rewards/mean` silently drops to `0.0` when using the latest `transformers` library, breaking GRPO training without throwing errors.
*   **Sequence Parallelism Bug for Qwen-3.5:** Users are reporting tensor shape mismatches when enabling SP for long-context multi-turn agentic RL on Qwen-3.5, whereas Qwen-3 functions correctly ([#6094](https://github.com/verl-project/verl/issues/6094)).
*   **RFC: Rollout Skipping:** A proposal ([#5998](https://github.com/verl-project/verl/issues/5998)) to introduce a unified managed skipping system to bypass key functions dynamically, aiming to massively improve debugging efficiency during training phases.

## 4. Key PR Progress
*   **Architecture & Roadmap Execution:**
    *   **[PR #5890](https://github.com/verl-project/verl/pull/5890) [CLOSED]:** Successfully removed legacy `fsdp_workers.py` and `megatron_workers.py` (over 3000 lines deleted), completing a major v0.9 roadmap milestone by fully migrating to the newer `engine_workers` architecture.
    *   **[PR #6042](https://github.com/verl-project/verl/pull/6042) [OPEN]:** Decoupled LLM and diffusion configs/losses to pave the way for native diffusion algorithm integrations in verl.
*   **Memory & Infrastructure Optimizations:**
    *   **[PR #6091](https://github.com/verl-project/verl/pull/6091) & [PR #5963](https://github.com/verl-project/verl/pull/5963):** Resolved weight synchronization bottlenecks by chunking large tensors (like embeddings) and auto-adjusting `update_weights_bucket_megabytes`, preventing CUDA OOM errors during rollout checkpointing.
    *   **[PR #6086](https://github.com/verl-project/verl/pull/6086):** Introduced a Platform Plugin System and **FlagOS multi-chip backend**, expanding verl's hardware acceleration beyond NVIDIA to Ascend NPU and CPUs.
*   **Fully Async & Agentic Training:**
    *   **[PR #6056](https://github.com/verl-project/verl/pull/6056) & [PR #6044](https://github.com/verl-project/verl/pull/6044):** Enabled Online Policy Distillation (OPD) and Generative/Discriminative Reward Models (GenRM/DisRM) for fully asynchronous training modes.
    *   **[PR #6090](https://github.com/verl-project/verl/pull/6090):** Made the `FullyAsyncRollouter` drain loop interruptible, allowing faster dispatch for idle replicas without waiting on long-tail tasks.

## 5. Why This Project Matters in Today's RL Landscape
As the LLM landscape aggressively shifts toward complex reasoning models (e.g., GRPO) and multi-modal agentic workflows, memory efficiency and training orchestration have become massive bottlenecks. Today's activity in the verl project demonstrates its positioning as a cutting-edge, production-ready RLHF/post-training framework. 

By deprecating legacy workers, decoupling diffusion architectures, and introducing granular asynchronous resource management (interruptible drains, standalone reward models), verl is actively solving the "GPU starvation" and OOM problems that plague multi-turn RL. Furthermore, the introduction of abstraction layers for Ascend NPU and FlagOS highlights a broader industry trend: next-generation post-training infrastructure must be hardware-agnostic to scale economically.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct Ecosystem — 2026-04-22

## 1. Today's Highlights
Activity in the last 24 hours was exclusively centered on Pull Requests (9 updated), with zero new issues or releases. The day's focus was heavily bifurcated between **data/tokenization pipeline optimization** and **core RL algorithm/engineering enhancements**, highlighted by the introduction of a novel Policy Gradient loss and a massive 9.4x speedup in SFT data processing.

## 2. Releases
None.

## 3. Important Issues
No issues were updated or created in the last 24 hours.

## 4. Key PR Progress

### Algorithmic & RL Training Enhancements
*   **New RL Loss Function:** [PR #1628](https://github.com/allenai/open-instruct/pull/1628) (OPEN) introduces the "Delightful Policy Gradient" (Osband 2026) to GRPO, implementing per-token advantage gating via `sigmoid(advantage * surprisal)`.
*   **DAPO Integration:** [PR #1632](https://github.com/allenai/open-instruct/pull/1632) (CLOSED) adds a Qwen3 Dynamic Advantage Policy Optimization (DAPO) script.
*   **Offline Distillation:** [PR #1629](https://github.com/allenai/open-instruct/pull/1629) (OPEN) continues the multi-part rollout of the student offline distillation training pipeline using DistillKit.
*   **Training Infrastructure Fixes:** [PR #1627](https://github.com/allenai/open-instruct/pull/1627) (CLOSED) patched a critical weight sync bug where checkpoint resumption incorrectly initialized actor weights, and [PR #1616](https://github.com/allenai/open-instruct/pull/1616) (CLOSED) simplified asynchronous `model_step` logic in `vllm_utils.py` for weight broadcasting.

### Data Processing & Tokenization
*   **Major Performance Gain:** [PR #1631](https://github.com/allenai/open-instruct/pull/1631) (OPEN) achieves a 9.4x speedup in the SFT tokenization loop by utilizing HuggingFace's `.with_format('numpy')` to bypass inefficient Python row extraction.
*   **Checkpoint Resiliency:** [PR #1633](https://github.com/allenai/open-instruct/pull/1633) (OPEN) replaces fragile single-file JSON checkpoints with an incremental binary format (`_checkpoint_token_ids.bin`, etc.) for robust tokenization resumption.
*   **Codebase Modularization:** [PR #1622](https://github.com/allenai/open-instruct/pull/1622) (OPEN) extracts HF-to-OLMo-core numpy mmap conversion into a dedicated library module (`open_instruct/numpy_dataset_conversion.py`) for downstream reuse.

## 5. Why This Project Matters in Today's RL Landscape
As RL (specifically RLHF, GRPO, and DAPO) becomes the primary differentiator in frontier LLM post-training, the engineering bottleneck has shifted from pure algorithmic research to **systems-level throughput and training stability**. Today's activity in Open Instruct perfectly reflects this industry trend. 

By heavily optimizing the offline data conversion pipeline (e.g., 9.4x tokenization speedups via numpy memory-mapping in [PR #1631](https://github.com/allenai/open-instruct/pull/1631)) and fixing tricky distributed infrastructure bugs (like weight syncs on checkpoint resume in [PR #1627](https://github.com/allenai/open-instruct/pull/1627)), Open Instruct is tackling the exact hardware-integration friction that dictates training cluster utilization and cost. Furthermore, the rapid implementation of cutting-edge techniques like "Delightful Policy Gradients" and offline distillation solidifies this repository's role as a crucial, production-ready bridge between theoretical RL research and applied LLM development.

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
**Date:** 2026-04-22

### 1. Today's Highlights
Activity in the Farama-Foundation/Gymnasium repository over the past 24 hours was moderate but highly focused on extensibility and code quality. The community submitted one notable feature proposal to enhance environment transition dynamics and one quality-of-life pull request to improve static type checking. No new releases were deployed.

### 2. Releases
* **No new releases** recorded for 2026-04-22.

### 3. Important Issues
* **[Proposal] Add fully tunable transition dynamics to `LunarLander`** ([Issue #1559](https://github.com/Farama-Foundation/Gymnasium/issues/1559))
  * **Author:** maxanisimov
  * **Summary:** A proposal to extend the `LunarLander` environment with explicit kwargs to control transition dynamics. This would allow users to easily tune physical coefficients, adjust stochasticity, or switch to a strictly deterministic mode without needing to maintain custom forks or subclasses. 
  * **Analyst Take:** If implemented, this would be a significant boon for reproducibility and hyperparameter sensitivity analysis in RL research, providing finer control over a historically foundational benchmark environment.

### 4. Key PR Progress
* **Fix incorrect `TypeVar` use in `core` for `RenderFrame`** ([PR #1560](https://github.com/Farama-Foundation/Gymnasium/pull/1560))
  * **Author:** jorenham
  * **Summary:** Addresses a static typing bug where the `RenderFrame` type variable was used as a return type without being bound. Previously interpreted as `Any` by type-checkers, this PR corrects the `TypeVar` usage, ensuring proper type-safety and improved IDE support for environment rendering methods.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium (the spiritual successor to OpenAI Gym) remains the foundational application programming interface (API) for single-agent reinforcement learning. In the current RL landscape—where agents are becoming increasingly complex (e.g., the rise of RLHF in LLMs and advanced offline RL)—having a standardized, type-safe, and highly configurable baseline environment suite is critical. Today's updates highlight the project's ongoing maturity: the community is actively refining type strictness to support modern Python development workflows, while simultaneously pushing for the deep customizability of physical parameters required for rigorous, reproducible scientific benchmarking.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (SB3)
**Date:** 2026-04-22

## 1. Today's Highlights
Activity in the Stable Baselines3 (SB3) repository over the past 24 hours has been minimal, with zero new pull requests or releases. The focus remains on project maintenance and documentation quality, highlighted by an ongoing, community-driven effort to resolve a UI/UX bug in the official documentation. 

## 2. Releases
**No new releases** were published in the last 24 hours. The ecosystem remains stable on the current version.

## 3. Important Issues
A single documentation bug is currently under active discussion:
*   **[#2245] [Bug]: Left navigation moves when right content scrolls**
    *   **Author:** dvcodebase
    *   **Status:** Open
    *   **Link:** [DLR-RM/stable-baselines3 Issue #2245](https://github.com/DLR-RM/stable-baselines3/issues/2245)
    *   **Summary:** A UI glitch is causing the left-sided table of contents to shift erroneously when the user scrolls through the main content on the right. The issue author has proactively investigated the root cause and volunteered to submit a patch. 
    *   **Analyst Take:** While minor, navigation bugs impair the readability of API documentation. High-quality documentation is critical for lower-friction onboarding in RL frameworks, making this community contribution a valuable maintenance win.

## 4. Key PR Progress
**No activity.** There were **0** pull requests updated or created within the last 24 hours. The author of Issue #2245 mentioned they are preparing a PR, so reviewers should expect a documentation-focused pull request in the near future.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains a foundational pillar in the reinforcement learning open-source ecosystem. While newer frameworks often prioritize cutting-edge, complex research paradigms, SB3 continues to be the "gold standard" for applied RL and education. Its strict adherence to clean, readable code, comprehensive documentation, and reliable, bug-free implementations of core algorithms (like PPO, SAC, and TD3) makes it the default go-to library for benchmarking and production deployments. Today's focus on fixing a documentation bug underscores the project's enduring commitment to a seamless, enterprise-grade user experience.

</details>