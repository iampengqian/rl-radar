# RL Open Source Daily Digest 2026-06-26

> Generated: 2026-06-25 22:26 UTC | Projects covered: 15

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
The June 26, 2026 digest data reveals a stark bifurcation in the reinforcement learning open-source landscape. The center of gravity has shifted entirely toward Large Language Model (LLM) alignment, agentic workflows, and the infrastructure required to scale them. 

Projects are no longer competing solely on algorithmic novelty (like standard PPO implementations), but rather on **systems engineering**—specifically how efficiently they can orchestrate distributed inference (rollouts) and training across massive GPU clusters. Consequently, pure RL libraries (Stable Baselines3, CleanRL, Tianshou) and environments (Gymnasium, PettingZoo) are experiencing low-to-maintenance-level activity, while RLHF/LLM orchestration frameworks (TRL, verl, slime, AReaL, ROCK) are seeing explosive, high-complexity development.

## Activity Comparison
The day's development burden was carried entirely by LLM-focused post-training and orchestration frameworks. 

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 20 | 31 | 0 | API maturation (KTO, QLoRA); battling vLLM/GRPO stability and OOM bottlenecks. |
| **verl** | 3 | 22 | 0 | High-throughput engineering (delta weight sync); expanding to Ascend NPUs and multimodal. |
| **AReaL** | 0 | 12+ | 0 | Core infrastructure overhaul (CLI, PD disaggregation) and agent runtime support. |
| **ROCK** | 7 | 10 | 0 | Scaling sandbox orchestration and cloud-native dataset/sdk management. |
| **slime** | 2 | 15 | 0 | Fixing distributed execution correctness; advancing GRPO/REINFORCE baselines. |
| **PettingZoo** | 4 | 5 | 0 | Maintenance phase; dropping Python 3.9/3.10, migrating to OpenSpiel. |
| **Open Instruct** | 0 | 8 | 0 | Hardening Docker backends for SWE-bench/agentic RL and async rollouts. |
| **Gymnasium** | 4 | 2 | 0 | Engine migrations (Box2D to PyMunk) and Python 3.14 prep. |
| **OpenRLHF** | 0 | 1 | 0 | Quiet day; targeted bug fix for agentic tool-use length penalties. |
| **ROLL** | 0 | 1 | 0 | Quiet; closed long-standing Megatron-critic design PR. |
| **Others** | 0 | 0 | 0 | *CleanRL, rl_games, Stable Baselines3, Tianshou, torchtune* reported zero activity. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Beyond Vanilla PPO:** Frameworks are rapidly adopting and stabilizing alternatives to PPO. TRL is expanding GRPO with entropy regularization, slime is implementing REINFORCE advantage estimators and off-policy IS corrections, and Open Instruct is integrating Distributed Policy Optimization (DPPO).
*   **Agentic RL & Tool-Use:** The ecosystem is shifting from single-turn text generation to multi-step tool use. OpenRLHF and Open Instruct are actively solving how RL algorithms handle tool-response tokens (via action masks and length penalties), while TRL is adding per-example environment selection.
*   **On-Policy Self-Distillation (OPSD):** Frameworks like verl and slime are integrating OPSD to enhance RL pipelines, utilizing privileged-context teacher scoring to stabilize training.

**Engineering & Infrastructure Signals**
*   **Inference-Compute Disaggregation:** Separating prefill (compute-bound) and decode (memory-bound) phases is now a standard optimization. verl, AReaL, and slime are heavily invested in async rollout engines (vLLM, SGLang) and memory offloading to prevent GPU starvation.
*   **Network & Weight Sync Bottlenecks:** Shipping full model weights between rollout and training phases creates massive latency. verl and slime are pioneering delta weight synchronization (shipping only changed parameters) and leveraging transfer backends like Mooncake Store.
*   **Containerized Sandbox Orchestration:** To support "Verifiable Rewards" (e.g., SWE-bench), frameworks are building robust sandbox infrastructure. ROCK and Open Instruct are adding persistent shell environments, state machine tracking, and Docker concurrency semaphores to handle hundreds of parallel agent rollouts.

## Differentiation Analysis
*   **API vs. Distributed OS:** TRL differentiates itself as the accessible bridge for researchers, focusing on clean abstractions (e.g., top-level `quantization_config`, stable KTO API). In contrast, verl, slime, and AReaL operate as low-level Distributed Operating Systems, optimizing physical hardware topologies (NVLink vs. non-NVLink) and network protocols.
*   **Hardware Sovereignty:** While TRL and Open Instruct remain heavily tethered to standard NVIDIA/CUDA setups (battling vLLM OOMs on A100s/H100s), verl is aggressively differentiating by optimizing for alternative accelerators, specifically Huawei Ascend NPUs.
*   **The Orchestration Layer:** Alibaba’s ROCK occupies a unique niche separate from the training loops. It acts purely as a scalable bridge between RL algorithms and Kubernetes/Ray, focusing on sandbox lifecycle management and disk quotas rather than advantage estimation.

## Community Momentum & Maturity
*   **LLM RL is Engineering-Heavy:** The sheer volume of PRs in TRL, verl, and slime dedicated to memory management, NCCL timeouts, and OOM fixes indicates that the community's bottleneck is no longer RL theory, but distributed systems engineering.
*   **Standardizing MARL & Environments:** The Farama Foundation ecosystem (PettingZoo, Gymnasium) is in a mature maintenance phase. By dropping legacy Python versions, absorbing `supersuit`, and migrating to maintained physics engines (PyMunk) or game backends (OpenSpiel), they are ensuring long-term stability for traditional single/multi-agent RL research.
*   **Maturation of Complex Workflows:** The closure of massive, 10-month-long architectural PRs (like ROLL's Megatron-critic integration) and TRL's promotion of KTO to stable signal that LLM post-training frameworks are transitioning from rapid research prototypes to production-grade pipelines.

## Trend Signals
*   **The Rise of the "RL Sandbox":** As models transition from generating text to executing code and using tools, robust sandboxing (ROCK's state machines, Open Instruct's Docker backends) is becoming a core requirement for any前沿 RL framework.
*   **Asynchronous Rollout Degradation:** Open Instruct’s addition of `max_result_age_steps` highlights a new systemic challenge: as asynchronous rollouts take hours to complete, the resulting data becomes "stale" relative to the rapidly updating policy. Frameworks must now build safety mechanisms to drop outdated training data.
*   **Alternative Hardware Readiness:** Global GPU supply chain constraints are actively reshaping open-source development. verl's push for Ascend NPU compatibility and cloud-agnostic storage (`fsspec` integration) signals a definitive industry move toward hardware-agnostic RL stacks.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Ecosystem Daily Digest for ROLL based on the provided GitHub data.

### 📰 RL Ecosystem Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-06-26 | **Project:** ROLL (Alibaba) 

#### 1. Today's Highlights
The ROLL ecosystem experienced a quiet 24 hours with no new issues, releases, or active code merges. The primary activity revolves around the closure of a significant architectural Pull Request (#169) concerning Megatron backend integration for RL critic models. 

#### 2. Releases
*   **None.** There have been no new version tags or releases published in the last 24 hours.

#### 3. Important Issues
*   **None.** There is no active issue traffic to report. The repository currently has 0 open items being tracked within the last day.

#### 4. Key PR Progress
*   **[#169] [CLOSED] WIP: Megatron backend support in critic models**
    *   **Author:** taoluo
    *   **Timeline:** Created on 2025-09-02, updated and closed on 2026-06-25.
    *   **Details:** This PR was closed after an extensive 10-month lifecycle. It outlines the design phase and configuration approach for integrating Megatron backend support specifically for critic models during RLHF/RL training. 
    *   *Note:* The closure of long-standing "Work in Progress" design PRs often indicates a strategic pivot, a merge into a broader internal branch, or a transition to a new architectural approach by the maintainers.
    *   🔗 **URL:** [github.com/alibaba/ROLL/pull/169](https://github.com/alibaba/ROLL/pull/169)

#### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF (Reinforcement Learning from Human Feedback) and LLM post-training landscape, memory efficiency and distributed training are the primary bottlenecks. The now-closed PR #169 highlights ROLL's focus on **Megatron backend integration for critic models**. 

This is highly relevant because modern RL algorithms (like PPO) require keeping both an actor and a critic model in memory alongside their reference counterparts. Integrating Megatron-LM's tensor parallelism is a critical engineering step required to scale critic models to billions of parameters without out-of-memory (OOM) errors. Monitoring ROLL’s trajectory provides vital insights into how large-scale open-source projects are engineering distributed backends to stabilize and accelerate state-of-the-art LLM alignment.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for alibaba/ROCK. 

# 📊 RL Open-Source Daily Digest: June 26, 2026
**Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)
**Activity Window:** Last 24 Hours (7 Issues, 10 PRs, 0 Releases)

---

### 1. Today's Highlights
* **Sandbox State Machine Overhaul:** Major updates to sandbox lifecycle management, introducing historical state tracking and fixing critical state-restart bugs ([PR #1167](https://github.com/alibaba/ROCK/pull/1167), [PR #1095](https://github.com/alibaba/ROCK/pull/1095)).
* **Datasets SDK Expansion:** The Python SDK receives a massive upgrade, adding pagination, file operations, and native parsers for standard RL/benchmark datasets like SWE-bench and PinchBench ([PR #1171](https://github.com/alibaba/ROCK/pull/1171)).
* **Image Registry Mirroring:** A system-wide push to improve multi-region container image resolution, moving away from rigid namespace rewrites and introducing a standard regionless resolver ([PR #1162](https://github.com/alibaba/ROCK/pull/1162), [PR #1173](https://github.com/alibaba/ROCK/pull/1173)).

### 2. Releases
* **None** in the last 24 hours.

### 3. Important Issues
Several feature requests and bug reports highlight the growing pains of scaling RL infrastructure:
* **[Bug] Stale Sandbox Phases ([#1166](https://github.com/alibaba/ROCK/issues/1166)):** Restarting a stopped sandbox incorrectly reports `image_pull` as "running". This breaks orchestration logic that relies on exact state phases.
* **[Feature] State Transition History ([#1165](https://github.com/alibaba/ROCK/issues/1165)):** Request to expose complete state machine transition history in the API to debug complex sandbox lifecycles (e.g., unexpected stops, multiple restarts).
* **[Feature] Smarter Registry Mirroring ([#1161](https://github.com/alibaba/ROCK/issues/1161)):** The current `_apply_image_registry_mirror` blindly overwrites namespaces. The community requests a two-step probe to check the original namespace before falling back to the mirror namespace.
* **[Feature] Enhanced Datasets SDK ([#1170](https://github.com/alibaba/ROCK/issues/1170)):** Current dataset APIs are too basic for interactive exploration and benchmark running, requiring structural format parsing and pagination.

### 4. Key PR Progress
* **[PR #1171](https://github.com/alibaba/ROCK/pull/1171) - Datasets SDK Enhancements:** Introduces `PageResult[T]`, task file operation endpoints (browse/read/download), and pluggable format parsers for major RL evaluation suites.
* **[PR #1137](https://github.com/alibaba/ROCK/pull/1137) - TypeScript SDK Parity:** Brings the TS SDK to feature parity with the Python SDK across 8 modules (bench, job, trial execution). This is crucial for building web-based RL dashboards. 
* **[PR #1167](https://github.com/alibaba/ROCK/pull/1167) - Sandbox Lifecycle Fixes:** Directly addresses Issues #1165 and #1166 by implementing transition history recording and correcting stale phase reporting on restarts.
* **[PR #1095](https://github.com/alibaba/ROCK/pull/1095) - Archive Lifecycle:** Integrates `archiving` and `archived` states into the core sandbox state machine, operator, and reconciler. Vital for cost-saving on idle RL workloads.
* **[PR #977](https://github.com/alibaba/ROCK/pull/977) - Disk Quota & Ray Scheduling:** Introduces user-facing disk quotas mapped to Ray custom resource scheduling (`--resources='{"disk": <bytes>}'`), preventing worker node disk exhaustion during heavy logging/episode saving.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning (especially with approaches like RLHF and Agent training) is fundamentally bottlenecked by compute orchestration and environment state management. ROCK acts as a highly scalable bridge between complex RL algorithms and underlying infrastructure (like Ray and Kubernetes). 

Today's updates specifically solve scaling pain points: **[PR #1095](https://github.com/alibaba/ROCK/pull/1095)** and **[PR #977](https://github.com/alibaba/ROCK/pull/977)** show ROCK maturing its resource management—allowing researchers to archive idle environments to save money and strictly limit disk usage to prevent cluster crashes. Meanwhile, **[PR #1171](https://github.com/alibaba/ROCK/pull/1171)** (Datasets) and **[PR #1137](https://github.com/alibaba/ROCK/pull/1137)** (TS SDK) indicate a strong push toward standardizing the evaluation and UI layers, making it easier to parse benchmark data (like SWE-bench) and manage distributed trials via web interfaces.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for `THUDM/slime`.

# 📊 RL Open-Source Daily Digest: slime (THUDM)
**Date:** 2026-06-26

### 1. Today's Highlights
The slime project shows robust infrastructure hardening today, driven heavily by contributor `EazyReal`. The 15 active PRs focus primarily on three core pillars of Large Language Model Reinforcement Learning (RLHF/RLAIF): **rollout engine stability** (SGLang, Ray), **distributed execution correctness**, and **algorithmic fidelity** (fixing KL divergences, GRPO baselines, and advantage estimation).

### 2. Releases
*   **New Releases:** None (0)
*   The repository remains on its current stable track, with active development concentrated in the `OPEN` PR queue.

### 3. Important Issues
*   **[Bug] Checkpoint Conversion Error for MiniMax M2.7 ([#2129](https://github.com/THUDM/slime/issues/2129))**
    *   *Context:* Users are hitting an error when converting HuggingFace checkpoints of `minimax-m2.7` into the `torch_dist` format required for distributed Megatron training. 
*   **[Question] Data Format for Multi-Turn SFT & Function Calling ([#1810](https://github.com/THUDM/slime/issues/1810))**
    *   *Context:* Community inquiry regarding the official organizational structure for multi-turn SFT and function-calling datasets. This highlights the ecosystem's shift from single-turn PPO to complex, agentic multi-turn RL training.

### 4. Key PR Progress
**Algorithm & RL Theory Enhancements**
*   **[PR #2083](https://github.com/THUDM/slime/pull/2083) [feat]: REINFORCE Advantage Estimator:** Introduces a pure REINFORCE algorithm (`compute_reinforce_loss`), utilizing GRPO group-normalized advantages but removing IS-ratios and clipping. 
*   **[PR #2114](https://github.com/THUDM/slime/pull/2114) [fix]: PPO Raw KL Logging:** Corrects an out-of-place mutation in the PPO per-token reward tensor, ensuring that KL rollout/logging is mathematically accurate.
*   **[PR #2084](https://github.com/THUDM/slime/pull/2084) [feat]: Off-policy IS Correction:** Implements an off-policy Importance Sampling (IS) correction hook comparing the current carrying policy against the rollout policy.
*   **[PR #2062](https://github.com/THUDM/slime/pull/2062) [fix]: GRPO Baselines:** Refactors GRPO group-relative baselines to compute at the *rollout* level rather than the training sample level, properly handling uneven/fanned-out rollouts.

**Inference & Rollout Infrastructure**
*   **[PR #1709](https://github.com/THUDM/slime/pull/1709) [feat]: Mooncake Backend:** Adds Mooncake Store as an optional transfer backend for cross-node rollout data, disaggregating rollout from training.
*   **[PR #2069](https://github.com/THUDM/slime/pull/2069) [fix]: SGLang Connection Pooling:** Optimizes agentic multi-turn rollouts by pooling `aiohttp.ClientSession` across turns rather than opening fresh HTTP connections per generation.
*   **[PR #2015](https://github.com/THUDM/slime/pull/2015) [fix]: Memory Offloading:** Implements a three-phase quiescence transition (pause -> flush -> release) to safely offload inference engine memory without breaking active generation states.
*   **[PR #2059](https://github.com/THUDM/slime/pull/2059) [fix]: Ray Fault Tolerance:** Adds retry logic for transient `ActorUnavailableError` gRPC faults during colocated SGLang engine startup.

### 5. Why This Project Matters in Today's RL Landscape
As LLM scaling shifts from pre-training to post-training, **RL infrastructure is becoming the primary bottleneck**. The PRs updated today perfectly illustrate the current frontier challenges in the RLHF landscape:
1.  **Colocated vs. Disaggregated Inference:** Balancing GPU memory between training compute and inference engines (SGLang) is critical. Slime's work on KV-cache offloading (#2015) and Mooncake integration (#1709) represents the cutting-edge solution for decoupling generation from training.
2.  **Agentic Workloads:** Transitioning from single-turn PPO to multi-turn function calling (#1810) breaks standard data schedulers. Slime is actively patching connection pooling (#2069) and ragged pass@k metrics (#2064) to handle asynchronous, multi-step agent rollouts.
3.  **Algorithmic Diversification:** The ecosystem is moving beyond vanilla PPO. The integration of GRPO normalization tricks, REINFORCE baselines (#2083), and on-policy distillation (#2085) into a unified framework allows researchers to easily ablate advantage estimators on large-scale distributed backends.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is a concise, technical digest for AReaL based on the GitHub telemetry for 2026-06-26.

### 1. Today's Highlights
* **RLHF Infrastructure & CLI Overhaul:** AReaL is seeing massive momentum in developer experience (DevEx), merging foundational CLI scaffolding to support isolated training, inference, and agent services.
* **Next-Gen Rollout Optimizations:** Continued heavy iteration on Prefill-Decode (PD) disaggregation to solve memory-bandwidth bottlenecks during autoregressive generation.
* **Deep Dive into Tokenizer Robustness:** A flurry of bug fixes addressing edge cases in multi-EOS models (e.g., Llama-3, Gemma 4) and byte-level/BPE tokenizers during reward verification and SFT masking.

### 2. Releases
* **None** (0 new releases in the last 24 hours). The team is actively iterating on open PRs, including a pending PyPI publishing workflow ([PR #1404](https://github.com/inclusionAI/AReaL/pull/1404)).

### 3. Important Issues
* **[CLOSED] [Feature] Support PD Disaggregation ([Issue #1329](https://github.com/inclusionAI/AReaL/issues/1329))** 
  * *Context:* Rollout typically dominates LLM training time. This closed issue outlines the integration of Prefill-Decode separation to optimize GPU resource management during rollback, setting the stage for the architecture built in recent PRs.

### 4. Key PR Progress
**Architecture & Tooling**
* **CLI Framework:** [PR #1440](https://github.com/inclusionAI/AReaL/pull/1440) introduces the top-level CLI scaffolding (`areal train`, `areal inf`) to modularize RL pipelines. [PR #1434](https://github.com/inclusionAI/AReaL/pull/1434) and [PR #1435](https://github.com/inclusionAI/AReaL/pull/1435) build on this for inference and training services.
* **PD Disaggregation:** [PR #1364](https://github.com/inclusionAI/AReaL/pull/1364) implements DP=2 (1 Prefill, 1 Decode), TP=n architecture to speed up rollouts by splitting memory-bound decode phases from compute-bound prefill.
* **Agent Runtime:** [PR #1383](https://github.com/inclusionAI/AReaL/pull/1383) adds OpenClaw as a per-session agent runtime, spawning isolated gateways with distinct LLM keys (`sk-sess-*`) for attributable agent RL episodes.
* **MoE Support:** [PR #1372](https://github.com/inclusionAI/AReaL/pull/1372) updates the Bailing-MoE V2.5 family to use dual-bridge adapters (both `mbridge` and `megatron-bridge`).

**Bug Fixes & Algorithm Tuning**
* **Group & Advantage Normalization:** [PR #1413](https://github.com/inclusionAI/AReaL/pull/1413) fixes silent normalization errors by dynamically deriving group norm size from `n_samples` instead of hardcoded configs. [PR #1417](https://github.com/inclusionAI/AReaL/pull/1417) adds configurable policy-gradient loss aggregation (token, sequence, prompt).
* **Tokenizer & Stop Tokens:** [PR #1433](https://github.com/inclusionAI/AReaL/pull/1433) and [PR #1425](https://github.com/inclusionAI/AReaL/pull/1425) fix trailing stop-token handling for multi-EOS models (e.g., Gemma 4, Llama-3) and normalize pad/EOS IDs.
* **SFT Loss Masks:** [PR #1427](https://github.com/inclusionAI/AReaL/pull/1427) corrects GSM8K SFT loss-mask boundaries, resolving prefix mismatch issues in byte-level/BPE tokenizers.
* **CI / Compute Efficiency:** [PR #1438](https://github.com/inclusionAI/AReaL/pull/1438) (Closed/Merged) fixes an OOM bug in `vlm_grpo` CI by pinning tests to `bf16` storage with Kahan summation, allowing tests to run on A100-40G GPUs.

### 5. Why This Project Matters in Today's RL Landscape
In today's RLHF/RLAIF ecosystem, scaling efficiently is the primary bottleneck. AReaL’s current trajectory shows a maturing framework deeply focused on **distributed orchestration and resource optimization**. By aggressively implementing PD disaggregation and adding sophisticated agent runtime tracking (OpenClaw), AReaL is positioning itself as a production-grade OS for training large-scale LLMs and tool-using AI agents, directly addressing the compute inefficiencies that plague memory-bound autoregressive decoding.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL open-source ecosystem daily digest for TRL based on the provided GitHub data.

# 📊 TRL Daily Digest (2026-06-26)
**Repository:** [huggingface/trl](https://github.com/huggingface/trl) | **Activity:** 20 Issues & 31 PRs updated in the last 24h

## 1. Today's Highlights
- **KTO reaches Stable API:** A massive cleanup effort is underway for KTO, spearheaded by PRs to promote it from experimental to stable ([#6175](https://github.com/huggingface/trl/pull/6175)) and align its internal collators/docstrings with DPO ([#6178](https://github.com/huggingface/trl/pull/6178), [#6182](https://github.com/huggingface/trl/pull/6182), [#6183](https://github.com/huggingface/trl/pull/6183)).
- **Streamlined QLoRA & SFT:** QLoRA workflows are getting significantly cleaner with the introduction of native `quantization_config` arguments across all trainers ([#6157](https://github.com/huggingface/trl/pull/6157)) and dataset-level sequence truncation for SFT ([#6155](https://github.com/huggingface/trl/pull/6155)).
- **Advanced GRPO Controls:** Development is actively expanding GRPO capabilities, adding support for entropy regularization to prevent policy collapse ([#6140](https://github.com/huggingface/trl/pull/6140)) and per-example environment selection for agentic RL ([#6002](https://github.com/huggingface/trl/pull/6002)).

## 2. Releases
- **None** (0 new releases in the last 24 hours).

## 3. Important Issues
- **vLLM & AsyncGRPO Inference Deadlocks/OOMs:**
  - [Issue #2923](https://github.com/huggingface/trl/issues/2923) & [Issue #3221](https://github.com/huggingface/trl/issues/3221): Persistent NCCL/Torch distributed timeouts during vLLM integration with GRPO.
  - [Issue #5863](https://github.com/huggingface/trl/issues/5863): `AsyncGRPOTrainer` checkpoints trigger recomputation of all past vLLM requests, severely slowing resumed training. 
- **Hardware & VRAM Ceiling Limits:** Multiple users reported severe Out-of-Memory (OOM) bottlenecks, even on enterprise hardware. E.g., GRPO fine-tuning Qwen3-4B OOMs on an 80GB A100 ([Issue #3456](https://github.com/huggingface/trl/issues/3456)), and Vision SFT for Gemma 3 OOMs on 8xH200s ([Issue #3481](https://github.com/huggingface/trl/issues/3481)).
- **Numerical Instability:** [Issue #6166](https://github.com/huggingface/trl/issues/6166) reports GRPO crashing in `vllm_mode="colocate"` when vLLM returns a `NaN` token logprob, causing downstream `NoneType` inference errors.
- **SFT Regressions:** [Issue #3910](https://github.com/huggingface/trl/issues/3910) identifies that using `max_length` (instead of `max_seq_length`) causes stagnant training losses in versions v0.20.0+.

## 4. Key PR Progress
- **[PR #6139](https://github.com/huggingface/trl/pull/6139):** Adds a barrier on the default process group to fix GRPO + vLLM colocate + PEFT hanging on non-NVLink hardware setups.
- **[PR #6140](https://github.com/huggingface/trl/pull/6140):** Implements static and adaptive entropy regularization for GRPO to encourage exploration and prevent deterministic policy collapse.
- **[PR #6157](https://github.com/huggingface/trl/pull/6157):** Implements a top-level `quantization_config` argument across SFT, DPO, GRPO, RLOO, and Reward trainers, abstracting away manual model loading boilerplate for QLoRA.
- **[PR #6001](https://github.com/huggingface/trl/pull/6001) & [PR #6002](https://github.com/huggingface/trl/pull/6002):** Introduces multi-environment support for GRPO, allowing each dataset batch example to select its own specific agentic tool environment dynamically.
- **[PR #6175](https://github.com/huggingface/trl/pull/6175):** Officially promotes `KTOTrainer` and `KTOConfig` to the stable TRL API.
- **[PR #6178](https://github.com/huggingface/trl/pull/6178):** Unifies data collator architectures across DPO, SFT, Reward, and KTO trainers for better code maintainability.

## 5. Why This Project Matters in Today's RL Landscape
HuggingFace TRL remains the critical bridging framework between state-of-the-art RL research and production-scale deployment. The ongoing shifts in today's issue tracker—specifically the move towards `AsyncGRPO`, `vLLM` integration, and agentic multi-environment support—highlight the ecosystem's race to solve inference-compute bottlenecks. Furthermore, today's heavy PR activity standardizing collators, promoting KTO, and streamlining QLoRA demonstrates TRL's commitment to API maturity. As RL moves from standard PPO towards complex, tool-augmented inference-time paradigms (like DeepSeek's GRPO), TRL serves as the foundational library allowing developers to reliably scale these techniques across distributed hardware topologies.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL Ecosystem Daily Digest for OpenRLHF. 

### 📊 RL Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-06-26

#### 1. Today's Highlights
A relatively quiet day in the OpenRLHF repository, characterized by zero new issues and no new releases. Activity is primarily focused on iterative bug fixing, specifically a merge-ready update to the PPO length penalty logic. 

#### 2. Releases
*   **No new releases** in the last 24 hours.

#### 3. Important Issues
*   **No issues** were created or updated in the last 24 hours. 

#### 4. Key PR Progress
*   **[OPEN] [PR #1246: Fix overlong penalty action token length](https://github.com/OpenRLHF/OpenRLHF/pull/1246)**
    *   **Author:** Jiang020609
    *   **Status:** Updated yesterday (2026-06-25).
    *   **Summary:** This PR addresses a specific edge case in RLHF fine-tuning involving tool-use/reasoning tokens. It modifies the overlong penalty mechanism (resolving Issue #1243) to utilize the `action_mask`. By doing so, tool response tokens are successfully excluded from the trainable response length accounting. 
    *   **Validation:** The author notes that the fix has been validated using `pytest` and `pre-commit` on the `length_penalty.py` utility and its corresponding test suite. 

#### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning from Verifiable Rewards (RLVR) for alignment, OpenRLHF serves as a critical, production-ready open-source framework. 

PR #1246 highlights a broader, critical trend in the modern RL landscape: **Agentic workflows and tool integration**. When LLMs use external tools (like calculators, search engines, or code interpreters), their generation sequences become bloated with tool-response tokens. If RL algorithms (like PPO) naively penalize sequence length or calculate rewards on these un-trainable tool tokens, the policy gradient becomes corrupted. OpenRLHF's continuous refinement of `action_masks` ensures that RL trainers accurately account for *only* the model's actionable outputs, which is essential for training efficient, agentic RL policies in 2026.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL open-source ecosystem daily digest for `verl` (volcengine/verl) on 2026-06-26.

# 📊 verl RL Daily Digest (2026-06-26)

## 1. Today's Highlights
* **Heavy PR Momentum:** 22 Pull Requests saw activity in the last 24 hours, heavily focused on engineering efficiency—specifically **rollout weight synchronization**, **VRAM optimization**, and expanding **Ascend NPU hardware support**.
* **Algorithmic Advancements:** The team is actively implementing **On-Policy Self-Distillation (OPSD)** to enhance RL training pipelines.
* **Ecosystem Expansion:** New native support for multimodal datasets (Open-R1, TinyLLaVA-Video) and object store integrations (`s3://`, `gs://`) are landing in the codebase. 

## 2. Releases
* **No new releases** in the last 24 hours. (The ecosystem appears to be stabilizing after the recent v0.8.0 release, as seen in [PR #6820](https://github.com/volcengine/verl/pull/6820)).

## 3. Important Issues
* **FlashInfer FP16 Instability ([#6847](https://github.com/volcengine/verl/issues/6847)):** A critical bug report was filed regarding corrupted rollouts when using FlashInfer FP16 MoE with `Qwen3-Coder-30B-A3B` in multi-node colocate-async setups on NVIDIA H20 clusters. 
* **Ascend Memory Bottlenecks ([#6770](https://github.com/volcengine/verl/issues/6770)):** OOM errors are being tracked when scaling `train_batch_size` on Ascend NPUs.
* **Ascend Community Tracking ([#6439](https://github.com/volcengine/verl/issues/6439)):** Ongoing epic for community-driven Ascend recipes, highlighting a strong push for alternative hardware compatibility.

## 4. Key PR Progress
* ⚡ **Inference & Sync Optimization:** 
  * [PR #6794](https://github.com/volcengine/verl/pull/6794): Introduces **delta weight synchronization** for SGLang disaggregated rollouts. Instead of broadcasting full parameters, it ships only changed `(position, value)` pairs, drastically cutting network overhead since >99% of BF16 weights remain static during RL.
  * [PR #6837](https://github.com/volcengine/verl/pull/6837): Implements full async SGLang weight broadcasting.
* 🧠 **Training & Memory Enhancements:**
  * [PR #6848](https://github.com/volcengine/verl/pull/6848): Slashes VRAM/compute footprint for On-Policy Distillation (`forward_kl_topk`) by skipping redundant full-vocab `log_probs`.
  * [PR #6833](https://github.com/volcengine/verl/pull/6833): Adds privileged-context teacher scoring for OPSD.
* 🛠️ **Hardware & Ecosystem:**
  * [PR #6850](https://github.com/volcengine/verl/pull/6850): Adds `fsspec` support, allowing direct streaming of training data/weights from S3 and Google Cloud Storage.
  * [PR #6849](https://github.com/volcengine/verl/pull/6849): Adds GRPO training pipelines for image (Open-R1) and video (TinyLLaVA-Video) multimodal datasets.

## 5. Why This Project Matters in Today's RL Landscape
As post-training dominates the AI research cycle, the bottleneck has shifted from basic PPO execution to high-throughput, memory-constrained orchestration of massive models across heterogeneous hardware. **verl is solving the exact meta-problems of modern RLHF/GRPO:** 
1. **Network Bottlenecks:** Delta weight syncing ([PR #6794](https://github.com/volcengine/verl/pull/6794)) tackles the massive latency of broadcasting multi-billion parameter updates during disaggregated rollout loops.
2. **Hardware Sovereignty:** The flurry of Ascend NPU PRs proves verl is becoming a hardware-agnostic safe haven, freeing researchers from NVIDIA's compute monopolies and supply chain constraints. 
3. **Algorithmic Flexibility:** Native support for complex workflows like OPSD, TITO agent rollouts, and multimodal video reasoning keeps verl at the bleeding edge of what production RL labs require today.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL ecosystem daily digest for June 26, 2026.

### 1. Today's Highlights
The Open Instruct repository experienced a high-activity day focused on **infrastructure reliability for RL environments** and **new algorithm integrations**. A major focus was hardening sandbox tooling for agentic RL (specifically for SWE-bench-like tasks) and optimizing asynchronous rollout generation. Notably, no new issues or releases were reported, indicating a focused engineering sprint on backend stability and PR reviews. 

### 2. Releases
* **None** (Last 24 hours)

### 3. Important Issues
* **None** (0 issues updated or opened in the last 24 hours)

### 4. Key PR Progress
A total of 8 PRs saw updates today, predominantly driven by core contributor `hamishivi`:

* **Agentic & SWE-RL Environments:**
  * **[#1492](https://github.com/allenai/open-instruct/pull/1492) [CLOSED]**: Merged/closed the foundational `SWERLSandboxEnv` for per-sample Docker tasks utilizing a `submit`-based evaluation tool.
  * **[#1739](https://github.com/allenai/open-instruct/pull/1739) [OPEN]**: Introduced `SWERLVanilluxSandboxEnv`, a self-contained bash-only sandbox RL environment featuring a persistent shell (preserving `cwd`/`env` across calls) that mirrors the offline "vanillux" solver harness.
  * **[#1732](https://github.com/allenai/open-instruct/pull/1732) [OPEN]**: Hardened the `DockerBackend` by adding cross-process concurrency semaphores, retry logic for transient Docker `APIError`s, and OOM detection—crucial for running hundreds of concurrent containerized rollouts.
* **Async Rollouts & RL Training Mechanics:**
  * **[#1738](https://github.com/allenai/open-instruct/pull/1738) [OPEN]**: Enhanced async GRPO by dropping stale rollout results. Added `max_result_age_steps` to ensure rollouts generated by outdated policies are discarded rather than trained on, preventing off-policy degradation.
  * **[#1733](https://github.com/allenai/open-instruct/pull/1733) [OPEN]**: Implemented the Distributed Policy Optimization (DPPO) policy-loss function (`--loss_fn dppo`), enforcing a trust region via per-token Bernoulli divergence.
  * **[#1729](https://github.com/allenai/open-instruct/pull/1729) [OPEN]**: Increased the default environment pool acquire timeout from 600s to 7200s to prevent spurious failures during long-running sandbox rollouts.
* **Model & SFT Infrastructure:**
  * **[#1734](https://github.com/allenai/open-instruct/pull/1734) [OPEN]**: Passed dataset `tools` columns to `apply_chat_template` during SFT tokenization, properly rendering tool schemas into prompts.
  * **[#1731](https://github.com/allenai/open-instruct/pull/1731) [OPEN]**: Made `ModelDims.from_hf_config` robust for explicit `head_dim` configurations, preventing division errors in composite/VLM models.

### 5. Why This Project Matters in Today's RL Landscape
The landscape of Reinforcement Learning from Human Feedback (RLHF) and agentic RL is rapidly shifting from simple text generation to complex, multi-step tool use and code execution. Open Instruct's latest PRs show a direct response to the engineering bottlenecks this shift creates. 

By fundamentally re-engineering its Docker backend ([#1732](https://github.com/allenai/open-instruct/pull/1732), [#1492](https://github.com/allenai/open-instruct/pull/1492), [#1739](https://github.com/allenai/open-instruct/pull/1739)) and implementing safeguards for asynchronous policy updates ([#1738](https://github.com/allenai/open-instruct/pull/1738)), the project is solving the "RL system design" problem—how to synchronously train models when environment rollouts (like running a test suite) take highly variable amounts of time. Furthermore, the integration of DPPO ([#1733](https://github.com/allenai/open-instruct/pull/1733)) and explicit tool-schema tokenization ([#1734](https://github.com/allenai/open-instruct/pull/1734)) solidifies Open Instruct as a leading open-source testbed for stable, tool-augmented LLM training.

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

Here is the RL open-source ecosystem digest for Gymnasium based on the provided GitHub data.

### 1. Today's Highlights
*   **Focus on Tooling and CI:** The primary focus over the last 24 hours has been on repository maintenance, specifically fixing broken GitHub Actions CI pipelines, resolving strict type-checking configurations (`ty`), and pushing for Python 3.14 compatibility.
*   **Call for Community Support:** Core maintainers (specifically `jkterry1`) have opened multiple `[help wanted]` issues requesting community PRs to resolve CI breaks and execute a major backend physics engine migration.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **CI and Infrastructure Fixes:**
    *   [Issue #1593](https://github.com/Farama-Foundation/Gymnasium/issues/1593): A recent GitHub Actions upgrade broke the CI on the main branch. The maintainers are actively seeking a community PR to restore functionality.
    *   [Issue #1594](https://github.com/Farama-Foundation/Gymnasium/issues/1594): Following recent unblocks, Gymnasium is ready to onboard **Python 3.14** support. 
*   **Engine & Environment Upgrades:**
    *   [Issue #1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597): A proposal to port all Box2D environments to **PyMunk (Chipmunk)**. This is a critical infrastructure move driven by the fact that Box2D Python bindings have been unmaintained for ~6 years, whereas PyMunk is actively supported.
*   **API and Feature Enhancements:**
    *   [Issue #1364](https://github.com/Farama-Foundation/Gymnasium/issues/1364): An open proposal to allow custom reward structures in `FrozenLakeEnv`, enabling researchers to test alternative RL schedules without forking the environment's base code.
*   **Legacy Gym Deprecation:**
    *   [Issue #1457](https://github.com/Farama-Foundation/Gymnasium/issues/1457) *(Closed)*: Notable discussion regarding unsolicited deprecation strings injected into legacy OpenAI Gym releases, warning users to upgrade to Gymnasium for NumPy 2.0 support. 

### 4. Key PR Progress
*   **[PR #1598](https://github.com/Farama-Foundation/Gymnasium/pull/1598) *(Closed)***: Tackled the broken CI pipeline (Issue #1593) with immediate code style and typing fixes. 
*   **[PR #1601](https://github.com/Farama-Foundation/Gymnasium/pull/1601) *(Closed)***: Addressed type-checker noise by configuring pre-commit to skip unresolved-import warnings (Issue #1600), streamlining the developer contribution experience.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto interface standard for single-agent Reinforcement Learning research. The current GitHub activity—specifically the proactive migration from Box2D to PyMunk and the immediate push for Python 3.14 support—highlights a broader trend in the Farama Foundation ecosystem: **sustainable maintenance**. 

By eliminating dependency bottlenecks (like unmaintained physics bindings) and strictly enforcing modern type-checking and CI standards, Gymnasium ensures that downstream RL libraries (e.g., Stable-Baselines3, CleanRL) can rely on a stable, cutting-edge, and frictionless environment API for years to come.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL open-source ecosystem daily digest for PettingZoo.

# 🐾 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-06-26
**Repository:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. Today's Highlights
PettingZoo is undergoing a significant architectural and maintenance phase. Over the past 24 hours, maintainers closed 5 PRs focused on CI stability, type checking, and environment dependency management. Major structural proposals are on the table, including dropping Python 3.9/3.10 support, migrating classic environments to `openspiel`, and phasing out `supersuit` in favor of native wrappers.

### 2. Releases
**None.** No new stable or pre-releases were published in the last 24 hours. 

### 3. Important Issues
*   **Drop Python 3.9/3.10 Support ([#1358](https://github.com/Farama-Foundation/PettingZoo/issues/1358), [#1373](https://github.com/Farama-Foundation/PettingZoo/issues/1373)):** Maintainers are discussing dropping older Python versions. This is driven by `openspiel>=1.6.15` only providing wheels for Python ≥3.11. 
*   **Migrate Classic Environments to OpenSpiel ([#1366](https://github.com/Farama-Foundation/PettingZoo/issues/1366)):** `[Help Wanted]` PettingZoo aims to deprecate its custom logic and reliance on the unmaintained `rlcard` for classic environments, moving backends to `openspiel` via the `shimmy` API conversion layer.
*   **Native Wrappers Migration ([#1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)):** `[Help Wanted]` Proposal to refactor `supersuit` wrappers directly into `pettingzoo.wrappers`, mirroring the standard `gymnasium.wrappers` architecture. The community is encouraged to submit PRs to port wrappers one-by-one.

### 4. Key PR Progress
*   **Consolidated Linting/Formatting ([#1371](https://github.com/Farama-Foundation/PettingZoo/pull/1371)):** `[MERGED/CLOSED]` Replaced `black` and `isort` with `ruff` for both formatting and linting, aligning PettingZoo's toolchain with Gymnasium.
*   **Robust Type Checking ([#1374](https://github.com/Farama-Foundation/PettingZoo/pull/1374)):** `[MERGED/CLOSED]` Parameterized `gymnasium.spaces.Space` generics (e.g., `Space[T]`) to resolve failing Astral `ty` type-checker pre-commit hooks. 
*   **Gin Rummy Reward & Version Bumps ([#1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335), [#1367](https://github.com/Farama-Foundation/PettingZoo/pull/1367)):** `[MERGED/CLOSED]` Fixed a critical bug where `gin_rummy` knock/gin rewards silently reverted to RLCard defaults on `reset(seed=...)`. To reflect this behavioral change, the environment was bumped from `gin_rummy_v4` to `v5`.
*   **MPE2 Import Guidance ([#1370](https://github.com/Farama-Foundation/PettingZoo/pull/1370)):** `[MERGED/CLOSED]` Added graceful error handling directing users to the new `mpe2` package when attempting to import the deprecated `pettingzoo.mpe`.
*   **Hanabi Docs Fix ([#1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368)):** `[OPEN]` Updates Hanabi observation layout documentation (assisted by LLM code review tools).

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains the industry standard API for Multi-Agent Reinforcement Learning (MARL) in Python. Today's digest highlights a crucial maturation step for the Farama Foundation ecosystem: 
1. **Dependency Minimization:** By replacing legacy maintenance-heavy backends (rlcard) with DeepMind's heavily supported `openspiel`, PettingZoo ensures long-term stability for standard games.
2. **API Standardization:** Migrating away from `supersuit` toward native `pettingzoo.wrappers` closely matches the recent design philosophy of single-agent `gymnasium`, lowering the cognitive load for researchers transitioning to multi-agent systems.
3. **Reproducibility:** Fixes like the `gin_rummy` seeded-reset reward bug and strict Python generic typing ensure that empirical MARL results remain reproducible and type-safe.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>