# RL Open Source Daily Digest 2026-06-30

> Generated: 2026-06-29 22:20 UTC | Projects covered: 15

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
The June 30, 2026 digest data reveals a reinforcement learning ecosystem undergoing a massive structural shift. The center of gravity has decisively moved from traditional single-agent environments (Gymnasium, PettingZoo) to distributed, LLM-driven post-training frameworks (verl, TRL, slime, AReaL, ROLL). Within this space, the primary battleground is no longer algorithmic novelty but hardware agnosticism, distributed network optimization, and agentic infrastructure orchestration.

## Activity Comparison
Activity was highly concentrated in a few key frameworks pushing the boundaries of LLM alignment and distributed systems. Foundational API libraries (Gymnasium, PettingZoo, SB3) and several RLHF frameworks (OpenRLHF, CleanRL) experienced quiet maintenance or zero-activity cycles.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 22 | 39 | 0 | Hardware-agnostic scaling (Ascend) & Agentic RL infrastructure. |
| **TRL** | 13 | 46 | 0 | Massive codebase unification, vLLM deadlocks, and MoE scaling. |
| **slime** | 4 | 8 | 0 | Disaggregated RLHF networking and P2P weight sync. |
| **AReaL** | 1 | 7 | 0 | Microservice architecture (v2.0) and MTP-augmented training. |
| **ROCK** | 1 | 3 | 0 | Serverless sandboxing and observability. |
| **Gymnasium** | 0 | 2 | 0 | Type safety and dependency modernization. |
| **PettingZoo** | 0 | 2 | 0 | Codebase health, CI linting, and AI-assisted docs. |
| **ROLL** | 1 | 0 | 0 | RFC proposing optimized KV-cache/data transfer backends. |
| **torchtune** | 1 | 0 | 0 | CI/CD pipeline security and supply-chain hygiene. |
| **SB3** | 1 | 0 | 0 | Bug triage; static maintenance phase. |
| *Others* | 0 | 0 | 0 | *OpenRLHF, Open Instruct, CleanRL, Tianshou, rl_games: No activity.* |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Beyond Standard PPO:** Frameworks are rapidly integrating advanced estimators to stabilize long-context and agentic rollouts. verl is optimizing Online Policy Distillation (OPD), slime is adding pure REINFORCE and Importance Sampling (IS) corrections, and TRL is pushing MoE load-balancing losses in DPO and GRPO.
*   **Next-Gen Prediction Objectives:** AReaL's integration of Multi-Token Prediction (MTP) as an auxiliary loss highlights a shift toward leveraging next-gen architectural tricks (popularized by GPT-style models) to improve RL training efficiency.
*   **Algorithmic Stability:** High focus on preventing policy/routing collapse, evidenced by TRL introducing adaptive entropy regularization specifically for MoE architectures.

**Engineering & Infrastructure Signals**
*   **Disaggregated Compute & Network Bottlenecks:** As models scale, standard colocated setups are hitting physical limits. slime (Shard-level P2P weight sync, `TransferQueue`) and ROLL (Mooncake `DataProto` transfer backend) are fundamentally rethinking networking to reduce the communication overhead between generation and training clusters.
*   **Hardware & Backend Portability:** Ecosystem is aggressively diversifying compute. verl is leading deep integration of Huawei Ascend NPUs alongside NVIDIA GPUs, while TRL and AReaL are streamlining integration with fast inference engines like vLLM and SGLang.
*   **Agentic RL Sandboxing:** RL is moving out of static datasets into dynamic environments. ROCK is pushing serverless sandbox environments via Alibaba Cloud Function Compute, while verl and AReaL are building pluggable rollout routers and dedicated agent services.

## Differentiation Analysis
*   **TRL & verl:** These projects represent the "heavy infrastructure" tier. TRL differentiates through its native HuggingFace integration and deep focus on making massive 70B+ MoE models accessible via memory optimizations (QLoRA, Liger Kernel). verl positions itself as the enterprise-grade, production-ready bridge, uniquely tackling hardware export constraints via deep Ascend NPU support.
*   **slime, AReaL & ROLL:** These frameworks are pioneering the "decoupled microservices" approach to RLHF. They abstract the RL pipeline into distinct inference, training, and agent services. AReaL is formalizing this into unified CLIs, while slime and ROLL are laser-focused on optimizing the networking and memory bottlenecks (KV-cache offloading) inherent to distributed Ray clusters.
*   **ROCK:** Operates at the infrastructure orchestration layer. Rather than providing RL algorithms, ROCK solves the DevOps bottleneck of spinning up, tracking, and tearing down thousands of isolated compute environments for agentic RL rollouts.
*   **Gymnasium, PettingZoo & SB3:** Represent the foundational layer. Their current focus is strictly dependency modernization (Pymunk, strict typing) and stability, serving traditional single/multi-agent RL practitioners rather than the LLM-alignment rush.

## Community Momentum & Maturity
*   **Aggressive Scaling (verl, TRL, slime):** High PR/Issue throughput indicates active, heavily funded engineering teams addressing immediate scaling bottlenecks. The issues being triaged (FSDP2 crashes, Ascend backward passes, vLLM distributed deadlocks) reflect deployments operating at the absolute edge of current hardware capabilities.
*   **Architectural Maturation (AReaL, ROLL, ROCK):** The introduction of CLIs (AReaL), RFCs for custom networking backends (ROLL), and native job SDK tracking (ROCK) signals frameworks transitioning from experimental research codebases to mature, enterprise-ready platforms.
*   **Stable Maintenance (Gymnasium, PettingZoo, SB3):** These communities are in a mature, low-velocity state. They rely on established architectures and are primarily focused on code health, static typing, and CI robustness rather than feature velocity.

## Trend Signals
1.  **The Rise of Agentic Infrastructure:** The transition from static RLHF to dynamic Agentic RL is officially underway. The infrastructure focus has shifted from raw model training to managing external environment sandboxes, agentic HTTP traffic pooling (slime), and serverless burst-scaling (ROCK).
2.  **Inference-Compute Disaggregation:** Monolithic training scripts are dying. The ecosystem is converging on architectures where high-throughput inference engines (vLLM, SGLang) and training backends (Megatron, FSDP) must seamlessly sync weights and route KV-caches over complex network topologies.
3.  **Hardware Sovereignty in RL:** Driven by global export constraints, the monopoly of NVIDIA in RL post-training is actively breaking. Deep, framework-level support for alternative accelerators (like Huawei Ascend CANN) is becoming a primary differentiator for top-tier open-source projects.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL Ecosystem Daily Digest: June 30, 2026**
**Focus Project:** ROLL (alibaba/ROLL)

### 1. Today's Highlights
*   **Architectural RFC Proposal:** A new Request for Comments ([Issue #468](https://github.com/alibaba/ROLL/issues/468)) was logged late yesterday, proposing the integration of an optional "Mooncake" backend for `DataProto` transfers. 
*   **Development Cadence:** No new releases, pull requests, or issue updates were recorded over the last 24 hours, indicating a planning or code-review phase rather than active merging.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **[Issue #468](https://github.com/alibaba/ROLL/issues/468): RFC: Optional Mooncake DataProto Transfer Backend for ROLL** 
    *   **Status:** Open
    *   **Author:** zxpdemonio
    *   **Summary:** This proposal advocates for adding "Mooncake" as an optional backend for transferring `DataProto`—the core data container used for communication between Roll's various Ray actors. This RFC is highly significant as it targets underlying networking and serialization efficiency. Integrating specialized KV-cache or data-transfer backends like Mooncake could drastically reduce network bottlenecks in distributed RL.

### 4. Key PR Progress
*   **None.** No open or closed PRs were updated within the last 24 hours. The community's current focus appears to be on architectural discussion rather than immediate code contributions.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—dominated by Large Language Model (LLM) alignment (RLHF/RLAIF)—the primary bottleneck has shifted from GPU FLOPs to distributed data transfer and memory bandwidth. Projects like ROLL are critical because they manage the orchestration of complex RL pipelines across distributed compute clusters (typically using Ray). 

The proposal to optimize `DataProto` routing via backends like Mooncake (Issue #468) perfectly exemplifies the industry's current trajectory: solving the communication overhead between the generation (actor) and training (critic/reward) models. As context windows and batch sizes grow, optimizing data transfer between distributed nodes is the key enabler for scaling stable RL workloads.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for ROCK based on the provided GitHub data.

### 📊 ROCK RL Ecosystem Daily Digest: 2026-06-30

**1. Today's Highlights**
*   **Infrastructure & Observability Focus:** The past 24 hours show active development in scaling sandbox infrastructure and tracking RL jobs, with 3 PRs updated and 1 Issue closed.
*   **Cloud-Native Sandboxes:** Continued progress on integrating Alibaba Cloud Function Compute (FC) as an alternative compute backend for RL environments.
*   **Registry Resiliency:** A bug fix regarding image mirroring was successfully merged, improving reliability for distributed RL workers pulling container images.

**2. Releases**
*   **No new releases** were published in the last 24 hours.

**3. Important Issues**
*   **[CLOSED] #1161: Probe original namespace before mirror namespace in image registry mirror** ([Link](https://github.com/alibaba/ROCK/issues/1161))
    *   *Context:* Addressed a critical deployment friction point. Previously, when applying an internal image registry mirror, the system aggressively overwrote both the registry URL and the namespace (e.g., `gcr.io/foo/python:3.11` to `mirror.com/rock-public/python:3.11`). This caused pull failures if the mirror relied on original organizational namespaces. The resolution ensures a more robust fallback mechanism.

**4. Key PR Progress**
*   **[CLOSED] #1162: feat(admin): probe original namespace before mirror namespace** ([Link](https://github.com/alibaba/ROCK/pull/1162))
    *   *Author:* jake11-oho
    *   *Progress:* Successfully closed. Implements a two-step probing strategy for registry mirrors: it now tries registry-only replacement first (preserving the original namespace) before falling back to full namespace replacement. 
*   **[OPEN] #1175: feat: job sdk support tracking** ([Link](https://github.com/alibaba/ROCK/pull/1175))
    *   *Author:* FangwenDave
    *   *Progress:* Newly opened/updated. Resolves issue #1103, bringing native job tracking capabilities directly into the ROCK Job SDK. This is a vital addition for monitoring long-running RL training loops.
*   **[OPEN] #867: feat(fc): add FC Operator for Alibaba Cloud Function Compute sandbox support** ([Link](https://github.com/alibaba/ROCK/pull/867))
    *   *Author:* insight-bit
    *   *Progress:* Active since April, updated today. Introduces a Function Compute (FC) Operator (`rock/sandbox/operator/fc/`), allowing RL sandbox environments to be deployed serverlessly via Alibaba Cloud FC rather than relying strictly on local Docker instances.

**5. Why This Project Matters in Today's RL Landscape**
In modern Reinforcement Learning, the bottleneck has shifted from model architecture to compute and infrastructure orchestration. ROCK is solving the exact pain points experienced by RL engineers today:
*   **Serverless Sandboxing:** By integrating Function Compute (PR #867), ROCK allows researchers to burst-scale RL environment interactions (rollouts) into serverless cloud infrastructures, drastically reducing the idle time and cost associated with maintaining massive static Kubernetes/Docker clusters.
*   **Training Observability:** RL training is notoriously unstable. Adding native job tracking to the SDK (PR #1175) provides engineers with the necessary telemetry to monitor reward curves, debug stalled agents, and manage distributed experiments efficiently.
*   **Enterprise-Grade Reliability:** Updates like the two-step image registry probe (Issue #1161) demonstrate a maturing ecosystem that prioritizes the infrastructural resilience required to run thousands of parallel RL agents across complex, mirrored enterprise networks without crashing.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL ecosystem daily digest for **slime** (THUDM/slime) on 2026-06-30.

### 1. Today's Highlights
*   **Algorithmic Expansions:** The repository saw major updates to its core RL estimators, introducing a pure REINFORCE advantage estimator and off-policy Importance Sampling (IS) correction hooks.
*   **Architectural RFCs:** New proposals aim to optimize non-colocated RLHF training, specifically targeting shard-level P2P weight synchronization and a specialized data plane (`TransferQueue`) for rollout-to-training transfers.
*   **Infrastructure Hardening:** A massive sweep of bug fixes and optimizations led by contributor `EazyReal` addresses Ray actor transients, KV-cache memory management, and ragged data handling in GRPO.

### 2. Releases
*   **No new releases** pushed in the last 24 hours. The project continues development on its main branch. 

### 3. Important Issues
*   **[RFC] Shard-level P2P weight sync for non-colocate training** ([#2147](https://github.com/THUDM/slime/issues/2147)): Proposes a new weight transfer mode where each training TP rank sends only its local shard via `dist.send/recv`. This could drastically reduce network bottlenecks in disaggregated RLHF training.
*   **[RFC] Integrate TransferQueue into slime** ([#1971](https://github.com/THUDM/slime/issues/1971)): Outlines a plan to use `TransferQueue` as an optional data plane to optimize the exchange of rollout data and intermediate fields between generation and training clusters.
*   **Consider using `megatron.bridge`?** ([#865](https://github.com/THUDM/slime/issues/865)): An older, active discussion questioning whether to migrate from `mbridge` to NVIDIA's official `Megatron-Bridge` for HF-to-Megatron conversions. 
*   **Actor unavailable error** ([#1739](https://github.com/THUDM/slime/issues/1739)): A persistent bug report regarding Ray `ActorUnavailableError` during training, which recent PRs (see below) are actively targeting.

### 4. Key PR Progress
**Algorithm & Loss Enhancements:**
*   [PR #2083](https://github.com/THUDM/slime/pull/2083): Added a `reinforce` advantage estimator utilizing GRPO group-normalized advantages with an additive surrogate loss.
*   [PR #2084](https://github.com/THUDM/slime/pull/2084): Introduced an off-policy IS correction hook to compute ratios between current policy and rollout policy.
*   [PR #2062](https://github.com/THUDM/slime/pull/2062): Fixed GRPO per-prompt baseline calculations to properly handle uneven/fanned rollouts.
*   [PR #2144](https://github.com/THUDM/slime/pull/2144) (CLOSED): Fused PPO logprob and entropy computation into a single autograd helper for performance gains.

**Rollout & Distributed Infra:**
*   [PR #2015](https://github.com/THUDM/slime/pull/2015): Refactored `RolloutServer.offload()` into a three-phase quiescence transition (pause, flush, release) to fix KV-cache memory issues.
*   [PR #2059](https://github.com/THUDM/slime/pull/2059): Added retry logic for transient Ray `ActorUnavailableError` during SGLang engine startup (directly addresses issue #1739).
*   [PR #2149](https://github.com/THUDM/slime/pull/2149): Upgraded CI/CD Docker images to support `sglang v0.5.14`.
*   [PR #2069](https://github.com/THUDM/slime/pull/2069): Optimized agent rollout HTTP traffic by pooling SGLang `aiohttp.ClientSession` across turns rather than opening fresh connections.

### 5. Why This Project Matters in Today's RL Landscape
As LLM scaling shifts toward complex reasoning and agentic tasks, Reinforcement Learning from Human Feedback (RLHF) frameworks face massive distributed systems bottlenecks. **slime** represents the cutting edge of solving these infrastructural challenges. 

Today's updates highlight the two biggest frontiers in RL training:
1.  **Disaggregated Compute Management:** By integrating inference engines like SGLang with Megatron-backed training via Ray, slime navigates the incredibly difficult problem of memory management (KV-cache offloading) and transient hardware failures in collocated setups.
2.  **Flexible RL Math:** Moving beyond standard PPO, the addition of REINFORCE variants, off-policy corrections, and robust On-Policy Distillation (OPD) gives researchers the granular control needed to stabilize training for long-context, multi-turn agent rollouts.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily RL ecosystem digest for AReaL. 

# 🧠 AReaL RL Ecosystem Daily Digest — 2026-06-30

## 1. Today's Highlights
AReaL is aggressively expanding its system architecture and developer tooling. The ecosystem saw a massive push toward standardizing service-based interfaces, culminating in the introduction of dedicated Command Line Interfaces (CLIs) for inference, training, and agent environments. Additionally, the project is making structural preparations for its upcoming 2.0 release and expanding training capabilities to support advanced vLLM backends and Multi-Token Prediction (MTP).

## 2. Releases
* **No new releases** were cut in the last 24 hours. However, PR #1448 indicates that active engineering prep is underway for a major **v2.0 release**.

## 3. Important Issues
* **[OPEN] #1366: Qwen models crash with DTensor dispatch error under TP > 1** (Created: 2026-05-25)
  * **Status:** Marked as `[stale]` but remains a critical bottleneck. The community has verified that the Qwen model architecture consistently crashes during Tensor Parallelism (>1) due to a `DTensor` dispatch error. This is a key interoperability issue for distributed RL training that requires upstream attention.
  * 🔗 [areal-project/AReaL Issue #1366](https://github.com/areal-project/AReaL/issues/1366)

## 4. Key PR Progress
**CLI & Infrastructure Overhaul**
* **[CLOSED] #1448: refactor: move 5 experimental modules into `areal/v2`** — Graduates core subsystems (`agent_service`, `inference_service`, `training_service`, `weight_update`, `cli`) into a top-level v2 package, prepping the codebase for the 2.0 release. ([PR #1448](https://github.com/areal-project/AReaL/pull/1448))
* **[CLOSED] #1440: feat(cli): add experimental cli scaffold** — Merged the foundational CLI plumbing using `click`, setting the stage for the new service subcommands. ([PR #1440](https://github.com/areal-project/AReaL/pull/1440))
* **[OPEN] #1447, #1446, #1434: CLIs for Agent, Training, and Inference** — Introduced `areal agent`, `areal train run`, and `areal inf` to allow developers to locally launch and manage service stacks (gateways, routers, rollout health) via a single command line interface. ([PR #1447](https://github.com/areal-project/AReaL/pull/1447), [PR #1446](https://github.com/areal-project/AReaL/pull/1446), [PR #1434](https://github.com/areal-project/AReaL/pull/1434))

**Training & Inference Algorithms**
* **[OPEN] #1445: feat(megatron): add MTP-augmented SFT/RL training** — Implements training for a Multi-Token-Prediction head as an auxiliary objective, aligning label rolls with Megatron-Core 0.17.0. ([PR #1445](https://github.com/areal-project/AReaL/pull/1445))
* **[OPEN] #1389: feat: [R3] support R3 for vllm backend** — Adds Rollout Routing Replay (R3) support for vLLM backends (requires vLLM v0.22.0+), optimizing rollout generation efficiency. ([PR #1389](https://github.com/areal-project/AReaL/pull/1389))

**Agentic RL**
* **[OPEN] #1383: feat(agent_service): add agent service with OpenClaw** — Integrates OpenClaw as an agent runtime, spawning isolated gateway subprocesses per RL session for multi-turn, attributable agentic RL. ([PR #1383](https://github.com/areal-project/AReaL/pull/1383))

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning transitions from isolated environments to complex, LLM-driven workflows, AReaL is solving critical infrastructure bottlenecks. 

By breaking the RL pipeline down into decoupled **microservices** (Inference, Training, and Agent gateways) and exposing them via unified **CLIs**, AReaL lowers the barrier to entry for running massive distributed RL. Furthermore, its early adoption of next-gen optimization techniques—such as **Multi-Token Prediction (MTP)** auxiliary losses and **Rollout Routing Replay (R3)** for vLLM—positions it as a cutting-edge framework for researchers and engineers aiming to push the boundaries of post-training and agentic RL efficiency.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the TRL (Transformer Reinforcement Learning) daily digest for 2026-06-30. 

### 1. Today's Highlights
Today's TRL ecosystem activity (13 issues, 46 PRs updated) is heavily focused on **trainer architecture unification, hardware efficiency, and deep integration with inference/quantization engines**. There is a massive pipeline of pull requests led by Hugging Face engineers to align trainer implementations (like KTO and TPO) with the DPO baseline, alongside critical fixes for distributed vLLM generation and new feature rollouts for GRPO and QLoRA.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
The community continues to push the boundaries of scaling RL workflows and requesting support for novel algorithms:
*   **Scaling vLLM in GRPO ([#2922](https://github.com/huggingface/trl/issues/2922)):** A highly upvoted (👍 8) ongoing discussion regarding the single-GPU bottleneck in `GRPOTrainer`'s vLLM rollout. Multi-GPU vLLM inference remains a critical need for large-scale RL.
*   **Multimodal Rollout Pipeline ([#5120](https://github.com/huggingface/trl/issues/5120)):** Closed after addressing a bug where chat templating flattened structured multimodal messages (text + images) before the GRPO rollout phase. 
*   **New Algorithm Requests:** The community is actively requesting implementations of cutting-edge research, including LPO (Linguistic-unit Policy Optimization) ([#4443](https://github.com/huggingface/trl/issues/4443)) and hierarchical reward conditioning from the GDPO paper ([#4853](https://github.com/huggingface/trl/issues/4853)).
*   **Dataset Mixing Feature ([#2112](https://github.com/huggingface/trl/issues/2112)):** An open enhancement request to port the Alignment Handbook's dataset mixer directly into TRL for proportional dataset combination.

### 4. Key PR Progress
Today's PRs reflect a massive codebase maturation and optimization effort:
*   **Feature: MoE Load-Balancing in DPO ([#6208](https://github.com/huggingface/trl/pull/6208)):** Adds Mixture-of-Experts (MoE) auxiliary loss to `DPOTrainer`, bringing DPO to feature parity with GRPO/RLOO/SFT.
*   **Feature: GRPO Entropy Regularization ([#6140](https://github.com/huggingface/trl/pull/6140)):** Introduces static and adaptive entropy control to `GRPOTrainer` to prevent policy collapse and encourage exploration.
*   **Feature: Streamlined QLoRA ([#6157](https://github.com/huggingface/trl/pull/6157)):** Adds a native `quantization_config` argument across SFT, DPO, GRPO, RLOO, and Reward trainers, eliminating the need for hacky `model_init_kwargs` manipulations for QLoRA.
*   **Infrastructure: Dropping vLLM 0.14 ([#6209](https://github.com/huggingface/trl/pull/6209)):** Officially sunsetting support for vLLM 0.14 to streamline the generation backend.
*   **Distributed Training Fixes:** Multiple PRs ([#6187](https://github.com/huggingface/trl/pull/6187), [#6197](https://github.com/huggingface/trl/pull/6197)) fixed PyTorch `torch.distributed.barrier()` warnings and potential deadlocks in GRPO + vLLM colocation with PEFT/Tensor Parallelism.
*   **Codebase Unification & Liger Integration:** Refactoring continues to align KTO with DPO ([#6204](https://github.com/huggingface/trl/pull/6204)), alongside PRs to enable Liger Kernel support for PEFT models in DPO ([#6159](https://github.com/huggingface/trl/pull/6159)). 
*   **Experimental Fixes:** The experimental GOLD trainer received a critical mathematical fix for its merged-probability computation to properly follow Bayes' rule ([#5905](https://github.com/huggingface/trl/pull/5905)).

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward RLHF/RLAIF for aligning Large Language Models (and increasingly Multimodal/Vision-Language Models), TRL serves as the de facto open-source standard. Today's commit history perfectly captures the current meta-challenges in the RL landscape:
1.  **Inference-Training Discrepancy:** Moving generation workloads to highly optimized engines like vLLM during RL rollouts (as seen in GRPO fixes) is the biggest lever for reducing RL training costs.
2.  **Memory Optimization:** The push for native Liger Kernel and QLoRA integrations reflects the necessity of fitting massive 70B+ models (especially MoEs) on limited compute.
3.  **Algorithmic Stability:** Entropy regularization and MoE load-balancing losses show that the field is actively solving mode collapse and routing instabilities inherent to RL fine-tuning.

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

Here is the daily reinforcement learning ecosystem digest for **verl** (github.com/volcengine/verl) for June 30, 2026.

### 1. Today's Highlights
verl shows massive momentum in two key areas: **next-gen hardware adaptation** (specifically Huawei Ascend NPUs) and **advanced RL algorithms** (OPD, GSPO, and asynchronous training). The community merged critical stability fixes for Qwen3 MoE architectures across both FSDP and Megatron backends.

- **Activity Volume:** 22 Issues updated, 39 PRs updated.
- **Releases:** 0 new releases today.

### 2. Releases
No new releases were published in the last 24 hours. The project appears to be actively maintaining its main, release/v0.7.1, and releases/v0.8.0 branches.

### 3. Important Issues
**Hardware & Backend Compatibility (Ascend Focus)**
*   **FSDP2 Instability:** [#6894](https://github.com/volcengine/verl/issues/6894) reports a reproducible crash on Atlas 800T A3 (Ascend) during step 11 of GRPO training using FSDP2 (device-side AIV MTE out-of-range). FSDP1 remains stable, isolating the issue to the new sharding logic.
*   **Ascend Backward Pass Crash:** [#6885](https://github.com/volcengine/verl/issues/6885) notes an `aclnnConvolution` crash during backward passes on Ascend CANN 8.5.0.
*   **FP8 Clarification:** [#6893](https://github.com/volcengine/verl/issues/6893) requests documentation on storage dtypes for Megatron actor-side parameter weights in FP8 E2E recipes.

**Model & Training Bugs**
*   **FlashInfer MoE Corruption:** [#6847](https://github.com/volcengine/verl/issues/6847) highlights FP16 MoE rollout corruption in Qwen3-Coder-30B-A3B during multi-node colocate-async setups on NVIDIA H20s.
*   **Batch Size Scaling:** [#606](https://github.com/volcengine/verl/issues/606) (reopened) shows errors when `train_batch_size` is smaller than the total GPU count across multi-node setups (e.g., 128 GPUs, batch size 32).

### 4. Key PR Progress
**Architecture & Trainer Fixes**
*   **Transformers 5 MoE Sync:** PR [#6879](https://github.com/volcengine/verl/pull/6879) fixes live FSDP-to-vLLM rollout weight syncing for Qwen3 MoE architectures in Transformers 5, properly mapping packed 3D `gate_up_proj` tensors.
*   **Megatron FP8 Padding:** PRs [#6887](https://github.com/volcengine/verl/pull/6887) and [#6869](https://github.com/volcengine/verl/pull/6869) enable BSHD FP8 padding for Megatron actor forward passes and fix sequence splitting for Context Parallelism (`dynamic_cp_split_batch`).

**Advanced RL & Async Workloads**
*   **Online Policy Distillation (OPD):** PR [#6848](https://github.com/volcengine/verl/pull/6848) significantly reduces VRAM/compute for OPD by skipping redundant PPO-loss calculations when top-k distillation is the only target. PR [#6870](https://github.com/volcengine/verl/pull/6870) prevents OPD crashes when task rewards are disabled.
*   **Pluggable Rollout & Routing:** PR [#6895](https://github.com/volcengine/verl/pull/6895) introduces hooks for external rollout resource warmup (ideal for agentic RL sandboxes). PR [#6712](https://github.com/volcengine/verl/pull/6712) refactors load balancing into a pluggable router module.

**Ascend NPU Ecosystem Support**
*   PR [#6892](https://github.com/volcengine/verl/pull/6892) adds A2G3 device compatibility for MFU/FLOPs estimation. 
*   PRs [#6890](https://github.com/volcengine/verl/pull/6890) and [#6889](https://github.com/volcengine/verl/pull/6889) merge canonical Ascend NPU GSPO scripts for Qwen3-32B and update CI images.

### 5. Why This Project Matters in Today's RL Landscape
The RL ecosystem is rapidly shifting from foundational PPO to complex, agentic, and asynchronous paradigms. **verl** is establishing itself as the production-ready bridge for this transition. 

Today's data shows verl successfully tackling the hardest engineering challenges in modern RL:
1.  **Hardware Agnosticism:** By deeply integrating Ascend NPUs alongside NVIDIA GPUs, verl is becoming the go-to framework for developers navigating global AI hardware export constraints.
2.  **Next-Gen Model Stability:** As MoE models (like Qwen3) become standard, verl maintainers are aggressively patching the underlying tensor parallelism (Megatron BSHD, FSDP2) and inference engine (vLLM/FlashInfer) incompatibilities that break lesser frameworks.
3.  **Beyond Standard PPO:** The active merging of OPD (Online Policy Distillation) memory optimizations and pluggable rollout routers shows verl is actively shaping the infrastructure required for **Agentic RL**, where managing external environment sandboxes and asyncrollout lifecycles is the new bottleneck.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# 🔁 Reinforcement Learning Ecosystem Daily Digest: `torchtune`
**Date:** 2026-06-30
**Repository:** [pytorch/torchtune](https://github.com/pytorch/torchtune)

---

### 1. Today's Highlights
Torchtune experienced a quiet development cycle over the last 24 hours with zero new pull requests or releases. The primary focus was on **CI/CD security maintenance**, specifically addressing supply chain vulnerabilities across older release branches. 

### 2. Releases
*   **None.** No new versions or tags were published in the last 24 hours. The library continues to stabilize on its existing release cycle.

### 3. Important Issues
*   **[OPEN] #2968: Backport workflow-hardening fix (unpinned-uses) to 5 release branches**
    *   **Author:** CharlieMCY
    *   **URL:** [meta-pytorch/torchtune Issue #2968](https://github.com/meta-pytorch/torchtune/issues/2968)
    *   **Summary:** A security maintenance proposal to backport a hardening patch for `.github/workflows/lint.yaml`. The default branch has already been patched, but 5 active release branches remain exposed to `unpinned-uses` vulnerabilities flagged by the [zizmor](https://github.com/woodruffw/zizmor) GitHub Actions security scanner. 
    *   **Action Required:** Reviewers needed to merge the minimal, scanner-verified fixes to secure the CI pipelines for older supported versions.

### 4. Key PR Progress
*   **None.** No active pull requests were updated, reviewed, or merged within the last 24 hours. The project's codebase remains stable with engineering efforts temporarily paused or operating strictly behind the scenes.

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning—particularly with the dominance of RLHF (Reinforcement Learning from Human Feedback) and DPO (Direct Preference Optimization) for aligning Large Language Models—reliable, native-PyTorch fine-tuning infrastructure is critical. `torchtune` provides high-performance, memory-efficient, and easily hackable recipes for LLM fine-tuning. 

While today's digest highlights routine CI/CD security hygiene rather than novel algorithmic features, this maintenance is vital. Securing GitHub Actions (`unpinned-uses`) ensures that the distributed training pipelines and artifact distributions RL researchers rely on remain immune to supply-chain attacks, preserving the integrity of RL alignment workflows.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

No activity in the last 24 hours.

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

# 📊 RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-06-30 | **Repository:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on ongoing development, with zero new issues or releases. Two significant open Pull Requests received updates, indicating active backend maintenance and environment refactoring. 

### 2. Releases
* **No new releases** were published in the last 24 hours.

### 3. Important Issues
* **No new or updated issues** were reported in the last 24 hours. The project is currently experiencing a quiet period regarding user-reported bugs or feature requests.

### 4. Key PR Progress
Two open PRs were actively updated, both touching on critical architectural components of the library:

* **[PR #1602: Port lunar lander to pymunk](https://github.com/Farama-Foundation/Gymnasium/pull/1602)** (by Lonny154)
  * **Status:** Updated (Draft)
  * **Summary:** This PR proposes a major physics engine shift for the classic `LunarLander` environment, replacing Box2D with [Pymunk](http://www.pymunk.org/). The proof-of-concept currently demonstrates seeded terrain generation, a Pymunk-based lander hull, and constrained landing mechanics.
* **[PR #1577: Generic vector env and vector wrapper types](https://github.com/Farama-Foundation/Gymnasium/pull/1577)** (by jorenham)
  * **Status:** Updated
  * **Summary:** This PR refactors `VectorEnv` and its subclasses into generic types with optional type parameters. This addresses `TypeVar` limitations discussed in [PR #1575](https://github.com/Farama-Foundation/Gymnasium/pull/1575), significantly improving static type checking and IDE auto-completion for developers building vectorized training loops.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the foundational API standard for single-agent reinforcement learning. Today's PR updates highlight the ecosystem's ongoing maturation: 
* **Dependency Modernization:** Porting classic environments like `LunarLander` to modern physics engines like Pymunk ensures long-term maintainability and cross-platform consistency, mitigating the legacy technical debt associated with Box2D.
* **Type Safety & Scalability:** Introducing generic types for vectorized environments reflects the industry's shift toward robust, statically typed Python. This allows researchers to build large-scale, multi-environment training pipelines with fewer runtime errors, solidifying Gymnasium's role as the reliable bridge between RL algorithms and environment interfaces.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-06-30  
**Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. Today's Highlights
Activity over the last 24 hours has been exclusively focused on repository health and documentation, with zero new issues or releases. Two existing pull requests by contributor `mfornet` received updates, signaling an ongoing push to harden code quality (via stricter linting) and patch environment documentation using AI-assisted workflows.

### 2. Releases
*   **No new releases.** The repository remains on its current stable version.

### 3. Important Issues
*   **No active issues.** There were 0 issues updated or created in the last 24 hours, indicating a stable period for bug reporting or a backlog awaiting triage.

### 4. Key PR Progress
Two open PRs saw updates today, both spearheaded by developer `mfornet`:

*   **[PR #1376: Increase ruff strictness and apply mechanical autofixes](https://github.com/Farama-Foundation/PettingZoo/pull/1376)**
    *   *Focus:* Codebase Health / CI Pipeline.
    *   *Details:* Builds on previous diagnostic updates by significantly expanding the `ruff` lint configuration. By enabling additional rulesets beyond the default pyflakes (`F`) and pycodestyle (`E4/E7/E9`), this PR enforces stricter static typing and code style standards across the library.
*   **[PR #1368: Fix Hanabi observation layout documentation (#1301)](https://github.com/Farama-Foundation/PettingZoo/pull/1368)**
    *   *Focus:* Environment Documentation.
    *   *Details:* Resolves issue #1301 regarding the Hanabi environment. Notably, the author highlights the use of AI coding assistants (Codex and Claude) to review and verify the complex observation space documentation, reflecting a growing trend of LLM-assisted contributions in open-source RL.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the industry-standard API for multi-agent reinforcement learning (MARL). In today's RL landscape, where research is rapidly shifting from single-agent to multi-agent systems (e.g., cooperative LLM agents, complex strategic games), having a standardized, reliable environment suite is critical. By continuously tightening static analysis (like `ruff`) and ensuring precise documentation for complex environments like Hanabi, the maintainers ensure that the library remains robust, deterministic, and accessible for cutting-edge MARL researchers and practitioners.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Ecosystem Daily Digest: Stable Baselines3
**Date:** 2026-06-30

### 1. Today's Highlights
Activity in the Stable Baselines3 (SB3) repository over the past 24 hours has been minimal, with no new merges, releases, or active pull requests. The sole update involves a recently closed bug report regarding PyTorch tensor dtype handling during observation preprocessing. 

### 2. Releases
*   **No new releases** or version tags were published in the last 24 hours.

### 3. Important Issues
*   **[#2265](https://github.com/DLR-RM/stable-baselines3/issues/2265) [CLOSED] [Bug]: preprocessing module casts tensor to float**
    *   **Author:** NIvo172
    *   **Summary:** A user attempting to reproduce an academic paper requiring high numerical precision (`torch.float64`) discovered that SB3's internal `preprocessing_obs` function automatically casts observation tensors to standard 32-bit floats (`torch.float32`). This resulted in a PyTorch `dtype` mismatch error during forward passes. 
    *   **Note:** While the issue is currently marked as closed, this highlights a recurring friction point in deep RL frameworks: strict default type-casting. Researchers requiring high-precision numerics (e.g., for robotics or physics simulations) often have to bypass or monkey-patch standard preprocessing pipelines.

### 4. Key PR Progress
*   **No active pull requests.** There were 0 PRs updated, reviewed, or merged in the last 24 hours. The codebase remains stable, likely indicating a maintenance phase or a quiet period leading into the next major update (potentially aligning with recent PyTorch ecosystem shifts).

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for accessible, reliable, and properly implemented Deep RL algorithms. While cutting-edge research often moves toward massive distributed frameworks or highly customized JAX implementations, SB3 serves as a critical baseline. Projects that ensure robust preprocessing, standardized action spaces, and reproducible algorithm implementations—like SB3—allow applied RL engineers and researchers to benchmark new architectures against proven methods (PPO, SAC, A2C) without getting bogged down in low-level boilerplate.

</details>