# RL Open Source Daily Digest 2026-06-17

> Generated: 2026-06-16 22:35 UTC | Projects covered: 15

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
The 2026 RL open-source ecosystem is undergoing a massive paradigm shift from static, single-turn RLHF towards large-scale agentic workflows, multi-turn tool use, and complex reasoning. Frameworks are moving past standard PPO/GRPO, rapidly integrating advanced variants like DAPO, Dr.GRPO, and CISPO to solve token-level training stability. Concurrently, the infrastructure layer is aggressively adapting to handle massive sparse models (MoE/VLMs) and diverse hardware accelerators (like Huawei Ascend NPUs), driven by the intense memory and compute demands of 100B+ parameter architectures.

## Activity Comparison
The day's development velocity was dominated by Large Language Model (LLM) and infrastructure-centric frameworks, while classic control and single-agent libraries remained quiet.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 15+ | 6+ | 0 | Massive NPU hardware adaptation wave; pushing boundaries of MoE memory limits and async inference. |
| **TRL** | 3+ | 7+ | 0 | Heavy focus on agentic environments and maturing AsyncGRPO; resolving FSDP2 bottlenecks. |
| **AReaL** | 5+ | 8+ | 0 | High contributor velocity; integrating ScaleRL/CISPO and expanding MoE/Diffusion RL support. |
| **slime** | 3 | 6 | 0 | Major architectural rewrite for decoupled rollouts and deep SWE-bench agentic evaluation. |
| **ROCK** | 3 | 6 | 1 (v1.9.1) | Enterprise readiness; K8s CPU overcommitting and LLM tool-call payload stability. |
| **ROLL** | 0 | 2 | 0 | Academic validation (OSDI'26) and ongoing deep backend integration for Ascend NPU. |
| **Open Instruct** | 0 | 1 | 0 | Strategic shift to native FSDP/OLMo-core for 32B GRPO training. |
| **OpenRLHF** | 0 | 1 | 0 | Expanding offline preference optimization with REBEL reward-gap regression. |
| **rl_games** | 0 | 1 | 0 | Enhancing deployment safety via capability manifests in checkpoints. |
| **SB3** | 2 | 0 | 0 | Focus on deployment tracking and robotics safety envelopes. |
| **Gymnasium** | 1 | 0 | 0 | Pushing for deterministic transition dynamics for reproducible benchmarking. |
| **CleanRL, PettingZoo, Tianshou, torchtune** | 0 | 0 | 0 | Inactive / code-freeze period. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Evolution of GRPO/PPO:** Standard GRPO is being heavily iterated upon. Projects are integrating configurable loss aggregations (DAPO, Dr.GRPO) and advanced surrogates (CISPO/ScaleRL) to maintain gradients on clipped tokens and normalize prompt groups effectively.
*   **Agentic Multi-turn RL:** There is a unified push to train models for software engineering (SWE-bench) and tool-use. Frameworks are rushing to support multi-turn environments, continuous tokenization, and dynamic entropy regularization.
*   **MoE & Multimodal Training:** Scaling RL to massive models (e.g., Qwen3.5/3.6, DeepSeek-V3) is forcing frameworks to route MoE auxiliary loss balancing into policy optimizations and support Multi-Token Prediction (MTP) heads.
*   **Beyond Standard LLMs:** Experimental frontiers like Diffusion RL post-training (AReaL) are beginning to appear alongside traditional text models.

**Engineering & Infrastructure Signals**
*   **Hardware Disaggregation & Non-NVIDIA Compute:** There is a massive ecosystem push to support Huawei Ascend NPU (910B / 800I A2) and Cambricon MLU. Frameworks are fixing memory walls and device ID hardcoding to enable heterogeneous compute.
*   **Decoupled & Async Rollouts:** Synchronous training is being abandoned for async architectures. Projects are merging standalone model engine servers, implementing off-policy staleness controls, and utilizing disk-level delta weight syncing to separate inference fleets from training clusters.
*   **K8s & Sandbox Orchestration:** Enterprise RL infrastructure (ROCK) is maturing, allowing CPU overcommitting for spiky rollout workloads and moving to file-based I/O to bypass OS limits on large LLM JSON payloads.

## Differentiation Analysis
*   **Scale vs. Accessibility:** `verl` and `slime` are battling for ultra-large scale, enterprise-level RL workloads, focusing heavily on cross-cluster distributed training and vLLM/SGLang integrations. Conversely, `TRL` maintains its position as the accessible standard for applied open-source RL, prioritizing clean APIs for environment routing and MoE integration within standard HuggingFace pipelines.
*   **Online vs. Offline Preference Optimization:** While `verl`, `TRL`, `AReaL`, and `slime` sprint to perfect online agentic RL, `OpenRLHF` differentiates by refining offline preference optimization (DPO/REBEL), offering highly scalable, simpler alternatives to full RL loops.
*   **Infrastructure vs. Algorithms:** Alibaba’s `ROCK` acts purely as the infrastructure layer (K8s sandboxing, resource bursting), whereas `AReaL` and `Open Instruct` focus strictly on algorithmic math and distributed execution backends.
*   **Classic Control vs. LLM RL:** Libraries like `SB3`, `Gymnasium`, and `rl_games` are completely decoupled from the LLM MoE/NPU arms race. Their differentiation lies in robotics safety (URML integration), deterministic benchmarking, and deployment manifests (capability passthrough).

## Community Momentum & Maturity
Momentum is highly concentrated in the LLM alignment ecosystem. `verl` is experiencing a surge in adoption friction, indicated by heavy issue traffic around non-NVIDIA hardware deployment. `TRL` and `AReaL` show high, structured contributor velocity, rapidly transforming academic papers (ScaleRL, DAPO) into merged production code. `ROCK`'s release of v1.9.1 and `ROLL`'s OSDI'26 paper acceptance signal that large-scale agentic RL infrastructure is crossing the chasm from experimental scripts to enterprise-grade, research-validated platforms. 

## Trend Signals
*   **The War on Memory Walls:** The limits of current GPUs/NPUs are being hit. Expect a near-term standardization of per-expert streaming and memory-safe weight syncing for 300B+ MoE models.
*   **The Asynchronous Standard:** Fully synchronous PPO will soon be considered legacy. "Staleness control" and fully decoupled, async rollout trajectories are becoming baseline requirements for new RL frameworks.
*   **SWE-bench as the Ultimate Benchmark:** Training coding agents is the new frontier; the ability to natively evaluate SWE-bench Verified grades inside the RL sandbox (e.g., `slime`) will dictate which frameworks dominate autonomous coding agent development.
*   **Hardware Diversification:** Reliance on pure CUDA stacks is breaking. Projects without flexible hardware-agnostic model patching (for Ascend, MLU, etc.) will rapidly lose enterprise adoption.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem digest for ROLL based on the recent GitHub activities.

### 1. Today's Highlights
* **Hardware Ecosystem Expansion:** Active development continues on expanding ROLL’s hardware compatibility, specifically targeting Huawei Ascend NPUs via MindSpeed and Megatron integration ([PR #456](https://github.com/alibaba/ROLL/pull/456)).
* **Academic & Production Milestones:** ROLL's underlying architecture demonstrates strong academic traction, evidenced by the merge of updates regarding the OSDI’26 RollArt paper ([PR #461](https://github.com/alibaba/ROLL/pull/461)). 

### 2. Releases
* **No New Releases:** There were no new versioned releases or tags published in the last 24 hours.

### 3. Important Issues
* **Quiet Issue Tracker:** There have been 0 issues opened or updated in the last 24 hours, indicating stable current usage or a shift of active development discussions entirely to PRs.

### 4. Key PR Progress
* **[CLOSED] [PR #461](https://github.com/alibaba/ROLL/pull/461): Add news update for OSDI’26 RollArt paper release**
  * *Author:* gaow0007
  * *Summary:* Closed PR updating the repository's documentation/news to reflect the release of the RollArt paper, which has been accepted to the prestigious OSDI’26 conference.
* **[OPEN] [feat] [PR #456](https://github.com/alibaba/ROLL/pull/456): Support ascend mindspeed&megatron and add CI tests**
  * *Author:* shun001
  * *Summary:* A major ongoing feature PR that significantly broadens ROLL's hardware backend support. It introduces MindSpeed-based NPU initialization, platform detection fixes, NPU-specific attention mask handling, and Megatron optimizer/offload compatibility. It also adds an Ascend MindSpeed CI workflow and a Qwen3 DPO Megatron example config.

### 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO) landscape, compute bottlenecks and hardware vendor lock-in are primary pain points. Alibaba's ROLL remains a critical open-source infrastructure project because it directly addresses these challenges at scale. 

The ongoing work in [PR #456](https://github.com/alibaba/ROLL/pull/456) to integrate Huawei Ascend MindSpeed and Megatron highlights ROLL's commitment to multi-platform, heterogeneous compute support (beyond standard NVIDIA CUDA ecosystems). Furthermore, the upcoming OSDI’26 paper (referenced in [PR #461](https://github.com/alibaba/ROLL/pull/461)) proves that ROLL's distributed RL architecture is not just an engineering byproduct, but a research-validated system pushing the boundaries of highly scalable large language model (LLM) alignment.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# 📊 RL Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-06-17

Here is the daily analytical breakdown of the latest engineering and ecosystem developments in the ROCK (RL Open-source Crucible/Kit) project.

## 1. Today's Highlights
* **New Release:** [v1.9.1](https://github.com/alibaba/ROCK/releases/tag/v1.9.1) shipped, headlined by K8s CPU overcommit support for sandbox deployments.
* **Infrastructure Flexibility:** Decoupling CPU requests from limits allows RL sandboxes to burst above scheduler reservations, drastically improving cluster utilization.
* **API & SDK Maturation:** Heavy focus on client-facing APIs, including temporary ACR credential endpoints, unified platform configs, and fixes for FastAPI error envelopes.
* **Critical Bug Fixes:** Resolved an `Argument list too long` crash during large LLM tool-call payloads and patched a severe race condition in sandbox log cleanup.

## 2. Releases
* **[v1.9.1](https://github.com/alibaba/ROCK/compare/v1.9.0...v1.9.1)**
  * **Core Change:** Introduces support for CPU overcommit via a separate `limit_cpus` parameter on the K8s (fiber / BatchSandbox) deployment path ([PR #1114](https://github.com/alibaba/ROCK/pull/1114)).
  * **Impact:** Previously, K8s containers were strictly bound to their CPU scheduler reservations. Now, `cpus` dictates the scheduler reservation (`requests.cpu`), while the new `limit_cpus` sets the cgroup hard cap (`limits.cpu`), allowing compute-heavy RL rollouts to burst during peak workload phases.

## 3. Important Issues
* **[#1115](https://github.com/alibaba/ROCK/issues/1115) [Bug] `anti-call-llm` crashes on large payloads:** Exposed a critical flaw where passing >100KB LLM tool-call JSON responses as command-line arguments caused an `Argument list too long` OS error.
* **[#1107](https://github.com/alibaba/ROCK/issues/1107) [Bug] `FileCleanupTask` race condition:** Revealed a high-severity production issue where hourly cleanup tasks were silently deleting active sandbox log directories if they were transiently empty between `mkdir` and the first log flush.
* **[#1113](https://github.com/alibaba/ROCK/issues/1113) [Feature] K8s BatchSandbox CPU overcommit:** Addressed the inflexible resource constraints of K8s deployments compared to the Ray path, directly inspiring the v1.9.1 release. 

## 4. Key PR Progress
* **[PR #1120](https://github.com/alibaba/ROCK/pull/1120) / [PR #1116](https://github.com/alibaba/ROCK/pull/1116) fix(model-service):** Successfully resolved the large payload crash by transitioning from shell arguments to file-based transfer for `anti-call-llm` payloads.
* **[PR #1108](https://github.com/alibaba/ROCK/pull/1108) fix(admin):** Guarded the empty-directory deletion in `FileCleanupTask` with `-mmin +max_age_mins`, fixing the log-deletion race condition.
* **[PR #1112](https://github.com/alibaba/ROCK/pull/1112) feat(admin):** Added `GET /acr/credentials` endpoint, enabling SDK/CLI clients to securely fetch 1-hour TTL tokens for pushing/pulling container images.
* **[PR #1111](https://github.com/alibaba/ROCK/pull/1111) feat(admin):** Introduced `GET /server/config` to provide a unified discovery mechanism for platform settings (e.g., image registries, builder images) across SDK and CLI clients.
* **[PR #1058](https://github.com/alibaba/ROCK/pull/1058) fix(common):** Fixed a FastAPI/Pydantic coercion bug that was corrupting the `RockResponse` error envelope shape on typed endpoints.
* **[PR #977](https://github.com/alibaba/ROCK/pull/977) feat(sandbox):** Ongoing work to expose user-facing disk quotas via Ray scheduling and system metrics.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning increasingly intersects with Large Language Models (LLMs) and complex agentic workflows, infrastructure bottlenecking becomes the primary barrier to iteration speed. 

Today's updates in ROCK highlight exactly what is required to run modern RL at scale:
1. **Dynamic Resource Orchestration:** RL workloads are notoriously spiky (e.g., rollout generation vs. policy updates). The new CPU overcommit capability ensures that K8s clusters can handle these bursts without wasting idle compute during quieter phases.
2. **Robust LLM Tool Integration:** By fixing the >100KB payload crash, ROCK acknowledges the reality of modern AI coding/agent tools—LLM outputs (like full-file rewrites) require heavy data transfer, and using file I/O over shell execution is critical for stability.
3. **Enterprise Readiness:** The addition of temporary registry credentials, disk quota metrics, and cross-process sandbox management proves that ROCK is bridging the gap between experimental RL frameworks and production-grade, multi-tenant infrastructure.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 🧠 Slime RL Daily Digest — 2026-06-17

**Repository:** [THUDM/slime](https://github.com/THUDM/slime)  
**Activity (Last 24h):** 4 Issues | 11 PRs | 0 New Releases  

---

## 1. Today's Highlights
The slime ecosystem is experiencing a massive architectural evolution, moving from a rigid, self-contained training loop to a highly modular and distributed framework. Today’s updates are dominated by **cross-cluster/external inference decoupling**, **support for cutting-edge RL algorithms** (DAPO, Dr.GRPO, ScaleRL), and **deep investments in agentic coding evaluation** (SWE-bench).

## 2. Releases
**None.** The project is currently merging foundational architectural changes, indicating a major feature release may be on the horizon.

## 3. Important Issues

*   **[Bug] Qwen3.6 35B A3B Outputting Gibberish on v0.3.0** ([#2091](https://github.com/THUDM/slime/issues/2091))  
    *Highlight:* A critical regression in `v0.3.0`. When running Qwen3.6 35B A3B, the second rollout iteration produces corrupted text (gibberish). The issue is isolated to the newer `sglang:v0.5.12.post1-cu129` image, while `v0.2.4` (`sglang:v0.5.9`) functions normally.
*   **[Feature Request] Qwen3.5 VLM Megatron Bridge Support** ([#2073](https://github.com/THUDM/slime/issues/2073))  
    *Highlight:* Users are actively trying to extend slime to support dense/MoE Vision-Language Models (VLMs) via the Megatron bridge, but are hitting architectural roadblocks.
*   **[RFC] TransferQueue Integration for Data Plane** ([#1971](https://github.com/THUDM/slime/issues/1971))  
    *Highlight:* A proposal to integrate `TransferQueue` as an optional data plane to optimize and asynchronously handle rollout-to-training data transfers.

## 4. Key PR Progress

**Distributed & Asynchronous Infrastructure**
*   **[#2071](https://github.com/THUDM/slime/pull/2071) feat(rollouts): external rollouts endpoint with publish-only weight sync:** Decouples slime from owned rollout backends, allowing it to train against an elastic, externally managed inference fleet.
*   **[#2089](https://github.com/THUDM/slime/pull/2089) Disk-level delta weight sync:** Instead of pushing full checkpoints, this PR ships only the changed bytes (delta) via canonical HF checkpoint directories for cross-cluster training/inference setups.
*   **[#2092](https://github.com/THUDM/slime/pull/2092) fix(fully-async): respect partial_rollout=False:** Fixes a bug where aborted sample groups bypassed the `partial_rollout` flag during fully asynchronous rollouts, violating synchronous path contracts.

**Algorithmic Depth & Loss Customization**
*   **[#2090](https://github.com/THUDM/slime/pull/2090) Add `--loss-aggregation` for ScaleRL modes:** Generalizes `pg_loss` aggregation to support recent breakthrough algorithms like DAPO (per-prompt group average), Dr.GRPO (constant divisor), and global per-token means.
*   **[#2060](https://github.com/THUDM/slime/pull/2060) [CLOSED] feat(loss): add `--pg-loss-divisor`:** Superseded/evolved into PR #2090 to provide a more holistic loss normalization framework.

**Agentic RL & Tooling**
*   **[#2005](https://github.com/THUDM/slime/pull/2005) Refactor coding-agent RL:** A massive ~8k line rewrite of the coding-agent rollout subsystem around a turn-node `TrajectoryManager` and pluggable harness layer.
*   **[#2079](https://github.com/THUDM/slime/pull/2079) feat(coding_agent_rl): add SWE-bench harness evaluation path:** Adds official SWE-bench Verified grading directly into slime's sandbox evaluation via Docker integrations.

## 5. Why This Project Matters in Today's RL Landscape
As RL scales from simple chat models to complex, multi-turn **agentic workflows** and **Mixture-of-Experts (MoE) VLMs**, standard PPO/GRPO training loops are buckling under infrastructure constraints. 

Slime’s current development trajectory reveals exactly what large-scale RL needs today:
1.  **Hardware/Compute Disaggregation:** PRs like disk-level delta syncing ([#2089](https://github.com/THUDM/slime/pull/2089)) and elastic external inference fleets ([#2071](https://github.com/THUDM/slime/pull/2071)) show that RL can no longer assume trainer and rollout engines share the same cluster or hardware pool.
2.  **Algorithmic Flexibility:** The hardcoding of loss functions is dead. Slime is building first-class support for the rapid succession of recent "GRPO successor" papers (Dr.GRPO, DAPO, ScaleRL), acknowledging that loss normalization is the new frontier for solving length and reasoning biases ([#2090](https://github.com/THUDM/slime/pull/2090)).
3.  **Real-world Agentic Evaluation:** The heavy refactoring of coding agents to support SWE-bench ([#2005](https://github.com/THUDM/slime/pull/2005), [#2079](https://github.com/THUDM/slime/pull/2079)) proves that slime is positioning itself as the premier framework for training autonomous software engineering agents.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL based on the provided GitHub data.

# 📊 AReaL RL Ecosystem Daily Digest — 2026-06-17

## 1. Today's Highlights
AReaL experienced a massive surge in active development over the last 24 hours, driven largely by core contributor **EazyReal**, who opened 5 new feature requests and bug reports alongside 5 corresponding Pull Requests. The primary focus is on refining PPO/GRPO group normalization, expanding support for cutting-edge RL algorithms (like CISPO/ScaleRL), and broadening model coverage to include state-of-the-art MoE architectures (Qwen3.6, DeepSeek-V3) and modalities (Diffusion RL).

## 2. Releases
**None** (No new releases in the last 24 hours).

## 3. Important Issues
Several technical issues and proposals highlight the project's trajectory toward more advanced agentic and multi-turn training:
*   **Agentic SWE Training:** User dipta007 opened a discussion requesting examples for GRPO training on multi-turn SWE-bench style tasks, specifically asking about environment wiring and long trajectory management. ([Issue #1394](https://github.com/areal-project/AReaL/issues/1394))
*   **Advanced Algorithm Features:** EazyReal proposed implementing the **CISPO loss surrogate** (from MiniMax-M1 / ScaleRL) to maintain gradients on clipped tokens, as well as a feature for **configurable loss aggregation** (token/seq/prompt mean). ([Issue #1421](https://github.com/areal-project/AReaL/issues/1421), [Issue #1423](https://github.com/areal-project/AReaL/issues/1423))
*   **Tool-Call Desync Bug:** A critical bug was reported where HuggingFace chat templates render assistant tool call arguments as JSON strings instead of mappings, causing rollout/train token desynchronization. ([Issue #1420](https://github.com/areal-project/AReaL/issues/1420))
*   **Group Normalization Fixes:** Issues addressed "footguns" in GRPO/RLOO where fixed strides assumed perfectly filled rollout groups, proposing `min_valid_group_size` to drop underfilled groups. ([Issue #1422](https://github.com/areal-project/AReaL/issues/1422), [Issue #1419](https://github.com/areal-project/AReaL/issues/1419))

## 4. Key PR Progress
Today's PRs feature deep structural improvements to PPO and broad architectural expansions:
*   **Algorithm Enhancements (EazyReal):**
    *   [PR #1412](https://github.com/areal-project/AReaL/pull/1412): Added the CISPO advantage estimator (MiniMax-M1).
    *   [PR #1415](https://github.com/areal-project/AReaL/pull/1415) & [#1416](https://github.com/areal-project/AReaL/pull/1416): Fixed group normalization for partial groups and added `min_valid_group_size`.
    *   [PR #1411](https://github.com/areal-project/AReaL/pull/1411): Patched the OpenAI-to-HF tool-call argument rendering bug.
*   **New Model & Modality Support:**
    *   [PR #1373](https://github.com/areal-project/AReaL/pull/1373): Added GLM-5/DeepSeek-V3 support via `mbridge` and `megatron-bridge`.
    *   [PR #1403](https://github.com/areal-project/AReaL/pull/1403): Made MTP (multi-token-prediction) heads opt-in to enable RL training for Qwen3.6 MoE models.
    *   [PR #1410](https://github.com/areal-project/AReaL/pull/1410): Opened an experimental Phase 1 PoC for **Diffusion RL post-training** (SD1.5 + LoRA + REINFORCE).
*   **Infrastructure & Multi-turn Rollouts:**
    *   [PR #1408](https://github.com/areal-project/AReaL/pull/1408): Improved per-sample version tracking for multi-turn rollouts using loss masks.
    *   [PR #1414](https://github.com/areal-project/AReaL/pull/1414): Fixed a `torch.distributed` hang during weight updates under heavy ops by allowing `batch_isend_irecv` group bypassing.

## 5. Why This Project Matters in Today's RL Landscape
As the open-source RL ecosystem matures beyond basic single-turn RLHF, frameworks are scrambling to support the complexities of frontier model training. AReaL's current development velocity positions it perfectly for the 2026 RL landscape for three reasons:
1.  **Solving Agentic Tool-Call Training:** By fixing HF chat template desync bugs ([PR #1411](https://github.com/areal-project/AReaL/pull/1411)) and improving multi-turn version tracking ([PR #1408](https://github.com/areal-project/AReaL/pull/1408)), AReaL is tackling the notoriously unstable plumbing required for SWE-bench style agentic RL.
2.  **MoE and Multi-Architecture Readiness:** The addition of Qwen3.6 MoE support (handling MTP heads) and DeepSeek-V3/GLM-5 shows readiness to train the industry's most compute-efficient, sparsely activated architectures.
3.  **Cutting-Edge RL Math:** Implementing techniques like CISPO loss surrogates (MiniMax-M1) directly addresses the "zero gradient on clipped tokens" problem inherent in standard PPO/GRPO, offering state-of-the-art training stability to open-source users.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL ecosystem daily digest for TRL based on the provided GitHub data.

# 🥡 RL Daily Digest: HuggingFace TRL 
**Date:** 2026-06-17

## 1. Today's Highlights
- **Focus on Agentic RL & Tooling:** A major theme today is extending `GRPOTrainer` capabilities for multi-environment agentic training, highlighted by the introduction of per-example environment selection ([PR #6002](https://github.com/huggingface/trl/pull/6002)) and a new experimental Harbor integration ([PR #6018](https://github.com/huggingface/trl/pull/6018)).
- **Trainer Performance Enhancements:** Core RLHF trainers are receiving deep architectural optimizations. Notably, MoE auxiliary loss is being ported to GRPO and RLOO ([PR #6083](https://github.com/huggingface/trl/pull/6083)), and padding-free training has been locked in as the default for `AsyncGRPOTrainer` ([PR #5854](https://github.com/huggingface/trl/pull/5854)).
- **FSDP2 Bottlenecks Exposed:** A critical performance bug was filed indicating that TRL’s default `chunked_nll` loss triggers severe all-gather bottlenecks under FSDP2 resharding ([Issue #6076](https://github.com/huggingface/trl/issues/6076)).

## 2. Releases
- **None** (0 new releases in the last 24 hours).

## 3. Important Issues
- **[Bug 🐛 / FSDP2] `chunked_nll` performance regression:** Issue [#6076](https://github.com/huggingface/trl/issues/6076) reports that processing tokens in chunks under FSDP2 with `reshard_after_forward=True` triggers per-chunk all-gathers of `lm_head.weight` during the backward pass. This makes training significantly slower than necessary. 
- **[Enhancement ✨ / GRPO] Adaptive Entropy Control:** Issue [#3320](https://github.com/huggingface/trl/issues/3320) requests the implementation of dynamic entropy regularization (inspired by Skywork's OR1 model) for `GRPOTrainer`, aiming for a target entropy value rather than a static weight.
- **[Bug 🐛 / DAPO] Loss Normalization:** Issue [#5619](https://github.com/huggingface/trl/issues/5619) points out that the DAPO loss type is missing normalization by `current_gradient_accumulation_steps`, potentially destabilizing training across different batch sizes.

## 4. Key PR Progress
- **Advanced Agentic Workflows:** [PR #6002](https://github.com/huggingface/trl/pull/6002) introduces per-example environment selection, allowing datasets to route examples to specific tool environments. [PR #6018](https://github.com/huggingface/trl/pull/6018) adds a lazy-imported experimental integration for the Harbor agentic task suite.
- **AsyncGRPO Maturation:** The `AsyncGRPOTrainer` is seeing heavy iterative improvements. [PR #5749](https://github.com/huggingface/trl/pull/5749) moves the async rollout worker to a separate spawned process to bypass GIL contention between autograd and scoring functions. [PR #5854](https://github.com/huggingface/trl/pull/5854) transitions AsyncGRPO entirely to a padding-free `(1, total_real_tokens)` forward pass.
- **MoE Support for RL:** [PR #6083](https://github.com/huggingface/trl/pull/6083) bridges the gap between SFT and RL by routing MoE load-balancing auxiliary losses into the policy loss calculations for GRPO, RLOO, and AsyncGRPO.
- **Built-in Reward Expansion:** [PR #6058](https://github.com/huggingface/trl/pull/6058) adds a built-in `get_repetition_penalty_reward`, expanding TRL's out-of-the-box rule-based RLVR toolkit.
- **CI / Infrastructure Cleanup:** Several non-runtime bot workflows were cleaned up today, including the removal of the auto-issue labeller ([PR #6052](https://github.com/huggingface/trl/pull/6052)) and the deprecated style bot ([PR #6082](https://github.com/huggingface/trl/pull/6082)).

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to be the bellwether for applied open-source Reinforcement Learning from Human/Feedback (RLHF/RLVR). The developments logged today perfectly encapsulate the field's rapid pivot from static offline preference optimization to **online, tool-augmented RL**. 

By heavily iterating on `AsyncGRPO`, breaking training environment boundaries (per-example routing, Harbor integration), and resolving deep distributed-computing edges (MoE aux losses, FSDP2 chunked memory bottlenecks), TRL is actively building the infrastructure required to train next-generation agentic models. It bridges cutting-edge academic RL literature (e.g., DAPO, dynamic entropy control) with the rigorous systems engineering needed to actually train Mixture-of-Experts (MoE) models at scale.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL open-source ecosystem daily digest for June 17, 2026.

### 1. Today's Highlights
The OpenRLHF repository experienced a quiet day with no newly opened issues or software releases. Activity is currently focused on reviewing and merging algorithmic enhancements, specifically a new pull request integrating the REBEL algorithm into the existing Direct Preference Optimization (DPO) pipelines. 

### 2. Releases
*   **None.** There have been no new releases or version tags in the last 24 hours.

### 3. Important Issues
*   **None.** Zero issues were created or updated in the last 24 hours, indicating a period of stabilization with no newly reported bugs or feature requests from the community.

### 4. Key PR Progress
*   **[OPEN] [PR #1247](https://github.com/OpenRLHF/OpenRLHF/pull/1247): Added REBEL-inspired offline reward-gap regression loss to DPO trainer**
    *   **Author:** `LeoPhelly`
    *   **Status:** Updated yesterday (June 16, 2026) after being initially opened on June 5.
    *   **Technical Summary:** This PR implements an opt-in, offline reward-gap regression loss based on the [REBEL framework](https://arxiv.org/abs/2404.16767) (Reinforcement Learning via Regressing Relative Rewards). It is cleanly integrated into the existing DPO trainer, activated via the `--model.rebel_enable` flag, and tuned using the `--model.eta` parameter. This bridges Relative Reward regression directly into standard preference fine-tuning workflows.

### 5. Why This Project Matters in Today's RL Landscape
As the RLHF (Reinforcement Learning from Human Feedback) landscape matures, the industry has seen a massive shift from complex online RL (like PPO) toward simpler, highly scalable offline preference optimization methods like DPO and its derivatives. 

OpenRLHF serves as a critical, production-ready framework in this ecosystem. By continuously integrating cutting-edge academic variants like REBEL into familiar trainer pipelines, OpenRLHF allows AI engineers to easily benchmark and deploy state-of-the-art alignment techniques without rewriting their core training infrastructure. PRs like #1247 demonstrate the project's commitment to keeping pace with rapid theoretical advancements in LLM alignment.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL ecosystem daily digest for `verl` (volcengine/verl) on 2026-06-17.

### 1. Today's Highlights
* **Hardware Adaptation Surge:** A massive influx of activity centers on Huawei Ascend NPU support (specifically 910B and 800I A2). Over 15 Ascend-related issues were updated or closed today, highlighting a strong user adoption wave but also exposing growing pains in memory optimization and device handling (e.g., hardcoded NPU IDs).
* **Advanced Inference & Rollout Optimization:** Developers are actively merging cutting-edge inference optimizations into the RL pipeline, including EAGLE/EAGLE3 speculative decoding, prefix-tree shared-prefix deduplication (MAGI attention), and continuous tokenization for agentic loops.
* **Algorithmic Expansions:** New policy optimization methods are being integrated to move beyond standard PPO/GRPO, such as CPPO for non-uniform token-level trust regions and asynchronous staleness control strategies.

### 2. Releases
* **None.** No new releases were published in the last 24 hours. The ecosystem currently appears focused on merging upstream features into the `main` branch, with heavy iteration on top of the `v0.7.1` and `v0.8.x` baselines.

### 3. Important Issues
* **Qwen 3.5 & Large MoE Bottlenecks:** Users are hitting systemic memory walls when training massive MoE architectures. Issue [#6691](https://github.com/verl-project/verl/issues/6691) reports that exporting grouped-experts (~8.6GiB) for Megatron-to-SGLang weight syncing causes Out-of-Memory (OOM) errors for 397B models, requesting per-expert streaming. Similarly, Issue [#6563](https://github.com/verl-project/verl/issues/6563) notes instability when training Qwen3.5 with vLLM.
* **Ascend NPU Memory & Throughput Limitations:** A cluster of issues ([#6760](https://github.com/verl-project/verl/issues/6760), [#6747](https://github.com/verl-project/verl/issues/6747), [#6768](https://github.com/verl-project/verl/issues/6768)) highlights severe OOM constraints on 32GB/61GB Ascend chips. Users are struggling to balance `train_batch_size` and sequence lengths to prevent memory溢出 (overflow) and CPU bottlenecks.
* **Codebase Bugs on NPU:** Issue [#6751](https://github.com/verl-project/verl/issues/6751) and [#6756](https://github.com/verl-project/verl/issues/6756) point out that the `get_npu_versions()` utility has hardcoded NPU device IDs (e.g., ID "7"), breaking deployments on single-node or differently configured hardware.

### 4. Key PR Progress
* **Inference Acceleration:** PR [#5925](https://github.com/verl-project/verl/pull/5925) introduces EAGLE/EAGLE3 speculative decoding to drastically speed up vLLM rollouts. Meanwhile, PR [#6689](https://github.com/verl-project/verl/pull/6689) implements MAGI attention via prefix-tree deduplication to optimize shared-prefix compute in SFT and GRPO.
* **Async & Network Optimization:** PR [#5990](https://github.com/verl-project/verl/pull/5990) proposes a standalone `Model Engine Server` to compute `old_log_probs` asynchronously, removing the need to save/restore actor weights. PR [#6778](https://github.com/verl-project/verl/pull/6778) adds off-policy staleness control strategies (`drop` vs `wait`) for asynchronous RL.
* **Hardware & Backend Improvements:** PR [#6777](https://github.com/verl-project/verl/pull/6777) refactors NPU model patching to prevent all-or-nothing import failures, and PR [#6327](https://github.com/verl-project/verl/pull/6327) brings initial support for Cambricon MLU hardware. 
* **Algorithm & Model Support:** PR [#6731](https://github.com/verl-project/verl/pull/6731) integrates CPPO (Cumulative Prefix-divergence Policy Optimization), and PR [#6512](https://github.com/verl-project/verl/pull/6512) heavily upgrades FSDP1/2 compatibility for per-unit LoRA summoning, specifically targeting large multi-stage models like Qwen3-Omni-30B.

### 5. Why This Project Matters in Today's RL Landscape
As post-training becomes the dominant paradigm for unlocking LLM capabilities, `verl` has positioned itself as the de facto open-source framework bridging distributed training (FSDP/Megatron) with high-throughput inference engines (vLLM/SGLang). 

Today's digest reveals two major industry shifts:
1. **The Multi-Hardware Reality:** The sheer volume of Ascend NPU issues indicates that the AI community is aggressively looking for non-NVIDIA alternatives for RLHF/PPO. `verl` is absorbing this friction, transitioning from a GPU-centric tool to a universal hardware-agnostic framework.
2. **The Asynchronous & Agentic Frontier:** Standard synchronous PPO is being phased out in favor of complex agent loops (continuous tokens), asynchronous trajectory generation (staleness control), and multi-modal handling. By actively integrating speculative decoding and memory-safe MoE weight syncing, `verl` is solving the exact compute bottlenecks required to RL-train the next generation of 100B+ reasoning agents.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# 🧠 RL Open-Source Ecosystem Daily Digest: 2026-06-17

**Project Focus:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

---

### 1. Today's Highlights
The Open Instruct repository saw a quiet day in terms of raw volume (0 new issues, 0 releases), but featured a critical infrastructure update. The sole activity revolves around scaling Group Relative Policy Optimization (GRPO) to 32-billion parameter models using native OLMo-core architecture rather than relying solely on DeepSpeed. 

### 2. Releases
*   **No new releases** introduced in the last 24 hours.

### 3. Important Issues
*   **None:** The issue tracker had zero activity in the last 24 hours, suggesting stable current deployments or a temporary lull in user-reported edge cases.

### 4. Key PR Progress
*   **[OPEN] [PR #1726: Add OLMo-core 32B GRPO launch scripts](https://github.com/allenai/open-instruct/pull/1726)** by *mnoukhov*
    *   **Technical Shift:** This PR introduces `scripts/train/olmo3/32b_think_rl_olmocore.sh`. It represents a strategic backend shift, porting the 32B GRPO training pipeline away from DeepSpeed's `grpo_fast.py` to the native OLMo-core `Trainer` (`open_instruct/grpo.py`) utilizing Fully Sharded Data Parallel (FSDP). 
    *   **Implementation:** The launch scripts are designed as faithful ports of existing 32B thinking RL scripts, maintaining argument parity while swapping the underlying distributed execution engine.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct continues to be a foundational pillar in the open-source RLHF/GRPO ecosystem. While early 2025 RL integrations heavily relied on DeepSpeed wrappers (like `grpo_fast.py`) to hack together memory optimizations, the maturation of native FSDP implementations is a critical evolution. 

PR #1726 highlights a broader industry trend: **moving towards native framework orchestration for massive-scale RL**. By validating GRPO at the 32B parameter scale via OLMo-core's native `Trainer`, AI2 is providing the open-source community with robust, maintainable, and transparent distributed RL pipelines. This reduces dependency on third-party optimization hacks and pushes the frontier of reproducible, large-scale reasoning model training.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

Here is the RL ecosystem daily digest for `rl_games` based on the specified data. 

---

# 📊 RL Ecosystem Daily Digest: `rl_games`
**Date:** 2026-06-17 | **Repository:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

### 1. Today's Highlights
Activity in the `rl_games` repository over the last 24 hours was exclusively focused on feature expansion, with no new bug reports or releases. The sole update is a new Pull Request aimed at enhancing checkpoint interoperability for complex RL agent deployments. 

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **None updated.** The issue tracker saw zero activity in the last 24 hours, indicating a period of stability with no newly reported bugs or friction points from the community.

### 4. Key PR Progress
A single, high-utility Pull Request was introduced targeting checkpoint serialization:
*   **[PR #357](https://github.com/Denys88/rl_games/pull/357) [OPEN]: `feat: optional capability_manifest passthrough in the checkpoint`**
  *   **Author:** [idoco2003](https://github.com/idoco2003)
  *   **Summary:** This PR implements a passthrough mechanism for a `capability_manifest:` block within training configs. When declared, `rl_games` will natively store this manifest verbatim inside the checkpoint dictionary upon saving, and successfully restore it upon loading. 
  *   **Codebase Impact:** The implementation spans across both continuous and discrete/discrete-action paradigms, modifying the A2C/PPO agent logic (`a2c_common.py`) as well as the SAC agent logic (`sac_agent.py`). This PR directly addresses and fulfills a feature offer previously discussed in Issue #352.

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning ecosystem, high-throughput simulators (like Isaac Gym / Isaac Lab) heavily rely on `rl_games` for its highly optimized, GPU-accelerated PPO and SAC implementations. 

Today's contribution (PR #357) perfectly reflects a broader industry trend: **model deployment and environment interoperability**. As RL agents are increasingly moved from training environments to deployment (or transferred to different simulation stacks), bounding metadata—like a `capability_manifest`—is crucial. By natively supporting the storage and restoration of these manifests directly within the checkpoint dictionary, `rl_games` is evolving past a pure training loop into a robust framework that safely preserves context, constraints, and capabilities alongside agent weights.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL Ecosystem Daily Digest: Gymnasium** 
**Date:** 2026-06-17

Here is the daily analytical breakdown of the Gymnasium repository activity.

### 1. Today's Highlights
Activity over the past 24 hours has been minimal, consisting entirely of issue triage and discussion rather than code integration. The repository saw 0 new Pull Requests, 0 new releases, and updates to a single ongoing feature request. The focus remains on environment reproducibility and stochasticity controls.

### 2. Releases
*   **No new releases.** 
*   The codebase remains on its latest stable version with no new tags deployed in the last 24 hours.

### 3. Important Issues
*   **[OPEN] #1559: [Proposal] Add fully tunable transition dynamics to LunarLander**
    *   **Author:** maxanisimov
    *   **Updated:** 2026-06-16
    *   **Summary:** This feature proposal requests the integration of explicit transition-dynamics controls into the core `LunarLander` environment. The goal is to allow users to tune or entirely disable stochasticity and physical coefficients (e.g., enabling a fully deterministic mode). 
    *   **Analyst Take:** Allowing these tweaks via standard kwargs rather than forcing users to maintain custom subclasses is a strong technical proposal. It directly addresses a major pain point in RL benchmarking: ensuring deterministic, reproducible evaluation setups.
    *   **Link:** [Farama-Foundation/Gymnasium Issue #1559](https://github.com/Farama-Foundation/Gymnasium/issues/1559)

### 4. Key PR Progress
*   **No PR updates.**
*   There have been 0 pull requests opened, merged, or updated in the last 24 hours. The repository is currently in a code-freeze or low-development cycle for this specific window.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent reinforcement learning environments. In the 2026 RL landscape, where algorithmic complexity and compute scaling dominate, standardizing environment interfaces is critical. 

Today's highlighted issue (#1559) perfectly illustrates Gymnasium's ongoing value to the community: **reproducibility**. As RL researchers grapple with the inherent instability of stochastic environments and complex physics engines, the ability to deterministically toggle environment dynamics—without hacking the source code—is essential for rigorous ablation studies and fair algorithmic benchmarking. Gymnasium's role as a centralized, community-driven hub ensures these standardization efforts benefit the entire ecosystem.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Ecosystem Daily Digest: Stable Baselines3
**Date:** 2026-06-17

### 1. Today's Highlights
Activity in the Stable Baselines3 (SB3) repository over the last 24 hours was exclusively discussion-driven, characterized by a low volume of new issues and no code deployments. The focus was on expanding model interoperability and deployment safety, driven by two recently opened (and LLM-assisted) feature requests.

### 2. Releases
*   **No new releases.** 
*   **No new pull requests.**
The repository is currently experiencing a quiet period in terms of core library commits and versioning.

### 3. Important Issues
Two open issues were updated in the last 24 hours, both initiated by user `idoco2003` and labeled as LLM-generated:

*   **#2263 [Feature Request]: Carry optional user metadata in the saved model zip**
    *   **Summary:** Proposes modifying the SB3 model saving pipeline (`model.save()`) to allow users to append arbitrary, custom metadata into the final `.zip` archive alongside the standard weights, version info, and `system_info.txt`.
    *   **Value:** This would be highly beneficial for MLops tracking, allowing researchers to natively embed run-specific hyperparameters, experiment IDs, or evaluation metrics directly into the model file without needing external tracking databases.
    *   **Link:** [DLR-RM/stable-baselines3 Issue #2263](https://github.com/DLR-RM/stable-baselines3/issues/2263)

*   **#2259 [RFC]: URML - Declaring a trained policy's deployment envelope**
    *   **Summary:** A Request for Comment regarding the integration of URML (an open robot intent language) with SB3 policies. The proposal explores translating a trained SB3 policy into a typed primitive and defining its operational "safety envelope" and capabilities before dispatch to a physical robot.
    *   **Value:** Bridges the gap between state-of-the-art deep RL algorithms and deterministic, verifiable robotics safety frameworks.
    *   **Link:** [DLR-RM/stable-baselines3 Issue #2259](https://github.com/DLR-RM/stable-baselines3/issues/2259)

### 4. Key PR Progress
*   **None.** There have been no updates to existing Pull Requests and no new PRs opened in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains a foundational pillar in the reinforcement learning ecosystem. While cutting-edge research often pushes the boundaries of sample efficiency and algorithmic complexity using raw PyTorch or JAX, SB3 serves as the industry standard for reliable, plug-and-play implementations of canonical algorithms (like PPO, SAC, and A2C). 

Today's issues highlight a broader maturation of the RL landscape: practitioners are no longer just asking *how to train* models, but *how to deploy, track, and constrain them* safely. By providing a standardized API and serialization format, SB3 acts as the critical middleware that connects abstract algorithmic research to applied robotics and production environments.

</details>