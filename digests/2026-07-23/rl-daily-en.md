# RL Open Source Daily Digest 2026-07-23

> Generated: 2026-07-22 22:18 UTC | Projects covered: 15

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
Today's RL open-source ecosystem is sharply divided between two major fronts: the **LLM Post-Training/RLHF surge** and **Foundational RL Environments**. Projects like verl, TRL, AReaL, and slime are driving hyper-optimized, distributed infrastructure to support massive reasoning models (DeepSeek, Qwen3) and agentic workloads. The focus here has shifted from raw algorithmic implementation to memory management, hardware agility, and trainer-rollout orchestration. Meanwhile, foundational MARL/Environment projects like PettingZoo and Gymnasium are making targeted improvements in environment determinism, observability, and simulation scaling, ensuring reliable evaluation pipelines for both traditional RL and LLM agents.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 5 | 6 | 0 | High infrastructure momentum; focusing on zero-overhead weight syncing and next-gen hardware (B200/NPU). |
| **TRL** | 4 | 11 | 0 | Maturation of `AsyncGRPOTrainer` and massive refactoring to stabilize the distillation API. |
| **ROCK** | 4 | 5 | 0 | Hardening containerized RL control planes; fixing state machine bugs and GPU observability. |
| **AReaL** | 3 | 8 | 0 | Security patching and engine optimizations; expanding MoE support (R3) and cross-tokenizer distillation. |
| **PettingZoo**| 1 | 5 | 0 | Improving environment determinism (physics fixes) and visual observability (video recording/rendering). |
| **slime** | 2 | 4 | 0 | Pushing for hardware versatility (MUSA) and NVFP4 quantized RL. |
| **Open Instruct** | 0 | 4 | 0 | Future-proofing infrastructure for next-gen B300 GPUs (CUDA 13) and optimizing checkpoint I/O. |
| **ROLL** | 1 | 3 | 0 | Critical RLVR advantage computation fixes and Mooncake RDMA transfer integration. |
| **torchtune** | 0 | 1 | 0 | Architectural shift towards streaming/iterable datasets to support massive replay buffers. |
| **Gymnasium** | 1 | 0 | 0 | Quiet cycle; discussing async vectorized environment process limits for large-scale simulation. |
| **Others* | 0 | 0 | 0 | No activity. |

*\*Note: CleanRL, OpenRLHF, rl_games, Stable Baselines3, and Tianshou reported zero activity in the last 24 hours.*

## Shared Research & Engineering Directions

**Research & Algorithmic Signals:**
*   **Verifiable Rewards & Distillation:** With the industry's shift toward reasoning models (o1/R1 style), frameworks are rapidly adopting RLVR (ROLL) and cross-tokenizer on-policy distillation (AReaL, TRL) to transfer knowledge efficiently between varying architectures.
*   **Advanced GRPO & RLHF Stability:** There is a strong focus on making GRPO mathematically robust. TRL is debating unbiased K1 KL estimators, while ROLL and AReaL are fixing edge cases in advantage whitening and non-finite sampling evidence to prevent silent training crashes.
*   **Evaluating Agentic Dynamics:** As multi-agent LLM workflows grow, PettingZoo is actively fixing physics collision artifacts (to prevent skewed policy gradients) and adding video recording for better qualitative metric collection.

**Engineering & Infrastructure Signals:**
*   **Zero-Copy Rollouts & RDMA:** Transferring massive amounts of rollout data between inference and training nodes is a primary bottleneck. Both verl and slime are actively integrating Mooncake RDMA to enable direct, P2P weight syncing and data transfers.
*   **Next-Gen Hardware Diversification:** The ecosystem is aggressively preparing for post-Hopper architectures and non-NVIDIA silicon. verl, Open Instruct, and slime are adding support for NVIDIA Blackwell (B200/B300, NVFP4, CUDA 13), while verl, AReaL, and slime are integrating Huawei Ascend NPUs and Moore Threads MUSA.
*   **Memory & Storage Efficiency:** To fit massive MoE models into VRAM, projects are deferring gradient syncs (verl), fusing vocab-parallel logprobs (AReaL), and implementing centralized checkpoint management (Open Instruct).

## Differentiation Analysis
*   **Heavy-Duty RL Orchestration vs. Accessible APIs:** Projects like verl, AReaL, and slime are differentiating themselves as highly distributed, production-grade orchestrators handling complex Megatron/vLLM/SGLang integrations. In contrast, TRL acts as the accessible, Hugging Face-native bridge for researchers, focusing heavily on clean APIs (`GRPOTrainer`) and distillation layouts.
*   **Sandbox & Control Planes:** ROCK isolates itself completely from the model-training loop, focusing instead on the underlying compute plane—specifically Docker sandbox reliability, state machine consistency, and GPU observability for multi-tenant clusters.
*   **Hardware Agnosticism:** While Open Instruct standardizes CI/CD for specific future NVIDIA architectures (CUDA 13), slime and verl are explicitly targeting supply-chain constraints by porting their backends to domestic Chinese hardware (Moore Threads) and Huawei Ascend NPUs.
*   **Traditional RL Foundations:** PettingZoo, Gymnasium, and torchtune operate outside the LLM hype cycle, ensuring the baseline data collection (environment stepping, video logging) and streaming replay buffers are stable for fundamental RL and Sim2Real pipelines.

## Community Momentum & Maturity
The active projects show clear signs of maturation, transitioning from feature-delivery to infrastructure hardening and stability. 
*   **Proactive Security & Safety:** AReaL and ROCK actively patched SSRF vulnerabilities and AES key rotation risks. ROLL and TRL are heavily focused on mathematical safety (preventing divide-by-zero errors in masked whitening) and silent context truncations.
*   **Deep Optimizations:** Communities are tackling highly complex, low-level systems engineering. For instance, the verl community is debugging TMA descriptor initialization on Blackwell GPUs, and AReaL is pre-warming NCCL communicators to prevent distributed recovery hangs. 
*   **Academic & Enterprise Cross-Pollination:** Discussions like TRL's K1-in-Reward KL estimator and AReaL's evidence-grounded memory RFC show tight alignment with the latest 2026 academic literature and enterprise roadmaps.

## Trend Signals
*   **Decoupling Training and Inference:** The clear trend is treating the training engine (e.g., Megatron/FSDP) and the rollout engine (e.g., vLLM/SGLang) as entirely separate, asynchronously communicating clusters, heavily optimized by RDMA.
*   **The Rise of Massive MoE Post-Training:** As models scale to 20B-70B+ parameters with MoE architectures (e.g., Qwen3.5/3.6), frameworks are rushing to build native Rollout Routing Replay (R3) and multimodal MoE support.
*   **Preparation for the Blackwell Era:** The ecosystem is not waiting for widespread hardware availability to push CUDA 13, B200/B300, and NVFP4 precision integrations into their main branches, signaling an imminent compute paradigm shift.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the daily digest for the ROLL (Reinforcement Open-Source Logic) ecosystem. 

### 1. Today's Highlights
*   **RLVR Stability Fix:** A critical edge case in advantage whitening for RL with Verifiable Rewards (RLVR) and Agentic workflows was identified and patched when response filtering leaves fewer than two valid tokens ([Issue #475](https://github.com/alibaba/ROLL/issues/475), [PR #476](https://github.com/alibaba/ROLL/pull/476)).
*   **Hardware & Infra Expansion:** Ongoing development indicates a strong push towards hardware diversification and high-speed data transfer, specifically with Ascend NPU/MindSpeed support and the integration of the Mooncake transfer backend.

### 2. Releases
*   **No new releases** were published in the last 24 hours. The project currently has zero new tags or version updates.

### 3. Important Issues
*   **[Bug] Advantage whitening fails with a single valid response token ([#475](https://github.com/alibaba/ROLL/issues/475))**
    *   **Author:** Jackie2049
    *   **Impact:** High. In RLVR scenarios, aggressive response filtering (e.g., ignoring padded or irrelevant tokens) can reduce the valid sequence length to 0 or 1. ROLL's `compute_advantage` and `agentic_compute_advantage` functions previously disabled whitening only when `response_mask.sum() == 0`. If exactly one valid token remained, the unbiased variance calculation in `masked_whiten` resulted in a divide-by-zero (or NaN) error, breaking the training loop.

### 4. Key PR Progress
*   **[PR #476](https://github.com/alibaba/ROLL/pull/476): fix(advantage): skip whitening for short responses**
    *   *Status:* Open
    *   *Details:* Directly resolves Issue #475. It adjusts the safety guard to trigger when fewer than two valid response tokens are present, applying this fix uniformly across both standard and agentic advantage computation paths. Adds targeted regression tests.
*   **[PR #456](https://github.com/alibaba/ROLL/pull/456): [feat] Support ascend mindspeed&megatron and add CI tests**
    *   *Status:* Open (Updated)
    *   *Details:* A major infrastructure PR bringing Huawei Ascend NPU compatibility to ROLL. It introduces MindSpeed-based initialization, optimizer offloading, and NPU-specific attention masks, alongside a new Qwen3 DPO Megatron config and Ascend CI pipeline.
*   **[PR #469](https://github.com/alibaba/ROLL/pull/469): Add Mooncake DataProto transfer backend**
    *   *Status:* Open (Updated)
    *   *Details:* Integrates Mooncake as an optional, high-performance transfer backend for structured `DataProto`, maintaining ROLL's existing `RemoteBatch` and `put/get/delete` semantics to optimize distributed RL training communications.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward reasoning models (e.g., DeepSeek-R1, OpenAI o1), training infrastructure must handle complex, multi-step trajectories. ROLL addresses a critical gap by providing a scalable, open-source framework specifically optimized for **RL with Verifiable Rewards (RLVR)** and agentic workloads. 

Today's updates perfectly illustrate the current demands of the RL ecosystem:
1.  **Mathematical Robustness:** As seen in [PR #476](https://github.com/alibaba/ROLL/pull/476), RLVR requires precise masking and advantage computation across highly variable, often short LLM generations. Minor tensor dimension oversights can easily derail days of training.
2.  **Hardware Agility:** With global GPU supply constraints, projects like ROLL are paving the way for heterogeneous compute support (e.g., [PR #456](https://github.com/alibaba/ROLL/pull/456) for Ascend NPUs) and high-throughput data transfer (e.g., [PR #469](https://github.com/alibaba/ROLL/pull/469) for Mooncake), which are essential for democratizing large-scale RL training.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK (Alibaba) open-source ecosystem.

### 1. Today's Highlights
*   **Sandbox Reliability & Observability Boost:** Heavy focus today on improving the ROCK sandbox environment. Key updates include exposing GPU resource allocation in status APIs, fixing `start_time` state machine bugs upon restart, and resolving Docker port scanning race conditions.
*   **Configuration Security:** Reinforced security boundaries by migrating AES encryption key loading exclusively to local YAML, intentionally dropping dynamic Nacos configuration fallbacks to prevent runtime key rotation.
*   **CI/CD Enhancements:** Introduction of asynchronous image commits for sandboxes, alongside active debugging of the Python CI runner to streamline contributor workflows.

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **[OPEN] [Bug] Sandbox `start_time` not refreshed after restart ([#1287](https://github.com/alibaba/ROCK/issues/1287))**
    *   *Insight:* A critical state machine flaw where restarting a stopped sandbox left stale `start_time` data, breaking accurate runtime tracking.
*   **[OPEN] Expose GPU resources in sandbox status responses ([#1285](https://github.com/alibaba/ROCK/issues/1285))**
    *   *Insight:* Clients previously lacked visibility into GPU assignments. This enhancement requests `num_gpus` and `accelerator_type` to be passed consistently through all status paths.
*   **[CLOSED] Load AES encryption key exclusively from YAML ([#1265](https://github.com/alibaba/ROCK/issues/1265))**
    *   *Insight:* Sourcing the AES key dynamically from Nacos was identified as a risk for silent deployment misconfigurations. This enforces a strict, fail-fast startup policy.
*   **[CLOSED] Docker port scan race discards valid container port bindings ([#1281](https://github.com/alibaba/ROCK/issues/1281))**
    *   *Insight:* A race condition during multi-step Docker `inspect` calls was causing valid port bindings to be dropped, destabilizing container networking.

### 4. Key PR Progress
*   **[OPEN] Expose GPU resources in sandbox status responses ([#1286](https://github.com/alibaba/ROCK/pull/1286))**
    *   *Progress:* Implements issue #1285, adding necessary fields to metadata and adding unit coverage for response conversions.
*   **[OPEN] Make sandbox image commits asynchronous ([#1280](https://github.com/alibaba/ROCK/pull/1280))**
    *   *Progress:* Unblocks UI freezing by dispatching commit/push operations asynchronously via the Rocklet execute API, persisting state locally in the worker.
*   **[OPEN] feat(proxy): support persistent OpenSandbox sessions ([#1262](https://github.com/alibaba/ROCK/pull/1262))**
    *   *Progress:* Implements persistent sessions via the official SDK, utilizing Redis with owner-checked reservations to handle concurrency across Admin workers.
*   **[OPEN] fix(sandbox): refresh start time after restart ([#1289](https://github.com/alibaba/ROCK/pull/1289))**
    *   *Progress:* Resolves issue #1287, fixing the state machine to correctly initialize `start_time` during the `PENDING` to `RUNNING` transition.
*   **[OPEN] feat: support max allowed spec from Nacos ([#1291](https://github.com/alibaba/ROCK/pull/1291))**
    *   *Progress:* Allows dynamic configuration of `runtime.max_allowed_spec` through Nacos, contrasting with the recent strictness applied to AES keys.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning (RL) research and production deployments scale, infrastructure limitations—specifically compute scheduling, distributed orchestration, and environment reproducibility—become the primary bottleneck. ROCK acts as a highly robust, containerized control plane for RL. 

Today's updates are highly representative of the broader industry's needs: **GPU observability (#1286)** is crucial for tracking scarce and expensive accelerator allocation across multi-tenant RL workloads. **Ray scheduling resilience (#1283, #1288)** ensures that distributed compute graphs remain stable during long-running training epochs, while **sandbox state consistency (#1289)** and **asynchronous image management (#1280)** guarantee that complex RL environments can be easily snapshotted, restarted, and reproduced without state corruption. By hardening its sandbox and proxy layers, ROCK is positioning itself as an enterprise-grade backbone for complex RL operations.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📊 RL Open-Source Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-07-23

### 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours signals a strong push towards hardware adaptability and rollout infrastructure optimization. Key updates include expanded GPU backend support (Moore Threads MUSA), integration of high-speed RDMA transport for rollout data, and critical backend version bumps. 

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
Developers are actively discussing compatibility and deployment quirks, particularly regarding distributed inference:
*   **[Issue #1910](https://github.com/THUDM/slime/issues/1910) [Question] Support for DeepSeek V4?**
    *   **Summary:** A prolonged discussion (opened in May, updated yesterday) where users are inquiring about the framework's capability to support fine-tuning the newly released DeepSeek V4 architectures. 
*   **[Issue #2222](https://github.com/THUDM/slime/issues/2222) [Bug] SGLang deployment breaks at TP=4/8 after torch dist conversion**
    *   **Summary:** A critical deployment issue where a Qwen3.5-27B model outputs only repeated "!" characters when deployed with SGLang using Tensor Parallelism (TP=4/8) after being converted to and from `torch dist` format. The bug disappears at TP=1/2, pointing toward potential weight sharding or long-context tool-handling issues during distributed inference.

### 4. Key PR Progress
The development pipeline is currently focused on infrastructure, quantization, and cross-platform support:
*   **[PR #2228](https://github.com/THUDM/slime/pull/2228) [docker] Upgrade SGLang to v0.5.15.post1**
    *   *Insight:* Maintains strict alignment with the latest SGLang inference engine patches, likely related to resolving deployment issues like those seen in Issue #2222.
*   **[PR #2216](https://github.com/THUDM/slime/pull/2216) feat: Add backend-aware MUSA support**
    *   *Insight:* Expands Slime's hardware execution path beyond standard NVIDIA CUDA to support Moore Threads GPUs (MUSA) alongside Megatron-LM and SGLang integrations.
*   **[PR #1505](https://github.com/THUDM/slime/pull/1505) [Feature] Support nvfp4 RL**
    *   *Insight:* Ongoing work (WIP) to integrate NVFP4 (NVIDIA Blackwell native 4-bit floating point) precision into the RL training process, paving the way for memory-efficient, large-scale RL.
*   **[PR #1709](https://github.com/THUDM/slime/pull/1709) feat: Add Mooncake RDMA transport for rollout data**
    *   *Insight:* A massive infrastructure enhancement. Integrates Mooncake RDMA to accelerate the transfer of rollout data between inference and training nodes, a known bottleneck in large-scale distributed RLHF/GRPO.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community races to stabilize post-training pipelines for massive models (like DeepSeek V4 and Qwen3.5), `slime` is positioning itself as a highly versatile, hardware-agnostic orchestrator. Today's PR activity highlights exactly what the RL ecosystem needs most right now: 
1. **Hardware Adaptability:** Supporting AMD and domestic Chinese GPUs (via MUSA) gives developers alternatives to severe NVIDIA supply constraints.
2. **Next-Gen Quantization:** Pushing for NVFP4 support reflects the necessity to fit massive LLMs into VRAM during rollout generation without sacrificing critical RL reward signals. 
3. **Zero-Copy Rollouts:** Integrating Mooncake RDMA tackles the I/O bottleneck of transferring petabytes of generated tokens between inference and training clusters—a core scalability limit in modern GRPO/PPO workloads.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for **AReaL (github.com/inclusionAI/AReaL)** on 2026-07-23.

### 1. Today's Highlights
* **Security & Stability:** A critical Server-Side Request Forgery (SSRF) vulnerability in the data proxy was officially resolved and closed today, tightening unauthenticated model registration endpoints.
* **Engine Optimizations:** Significant progress in training efficiency, including reducing Megatron memory peaks, fixing FSDP packed attention masks, and adding native Rollout Routing Replay (R3) for MoE architectures.
* **Expanded Model Support:** Active pushes to enable LoRA-based GRPO training for next-gen models like Qwen3.6, alongside advanced cross-tokenizer distillation capabilities.

### 2. Releases
* **None.** No new releases were recorded in the last 24 hours.

### 3. Important Issues
* **[Bug] FSDP Packed SFT Attention Mask Error** ([#1557](https://github.com/inclusionAI/AReaL/issues/1557)): User `wm19999` reported a critical bug where FSDP packed SFT passes a dictionary attention mask to Llama models, causing runtime inconsistencies across multiple seeds. 
* **[Security] Unauthenticated SSRF in Data Proxy** ([#1549](https://github.com/inclusionAI/AReaL/issues/1549) - CLOSED): Reported by `sebastiondev`, this issue highlighted that `POST /register_model` accepted arbitrary upstream URLs without authentication, risking SSRF. This was swiftly addressed and closed.
* **[RFC] Evidence-grounded Memory Service** ([#1490](https://github.com/inclusionAI/AReaL/issues/1490)): A proactive proposal by `jszzr` to implement a memory service for self-evolving agents, aligning with the project's 2026 H2 roadmap to push beyond traditional RL pipelines.

### 4. Key PR Progress
* **Security & Testing:**
  * [PR #1550](https://github.com/inclusionAI/AReaL/pull/1550) (CLOSED) & [PR #1556](https://github.com/inclusionAI/AReaL/pull/1556) (CLOSED): Resolved the aforementioned SSRF vulnerability by requiring admin keys for model registration, and updated the corresponding unit tests to reflect the auth changes.
* **Training & Inference Engine:**
  * [PR #1558](https://github.com/inclusionAI/AReaL/pull/1558) (OPEN): Fixes the Llama attention mask bug (#1557) by removing the hard-coded allowlist and letting Transformers build backend-specific masks dynamically.
  * [PR #1555](https://github.com/inclusionAI/AReaL/pull/1555) (OPEN): Reduces Megatron training memory peaks by fusing FP32 vocab-parallel logprob storage with LM Head backward passes—crucial for large-scale LLM training.
  * [PR #1496](https://github.com/inclusionAI/AReaL/pull/1496) (OPEN): Implements native R3 (Rollout Routing Replay) for SGLang rollout + Megatron MoE actor training, enabling highly efficient MoE expert choice tracking.
  * [PR #1548](https://github.com/inclusionAI/AReaL/pull/1548) (OPEN): Fixes a distributed recovery edge case by pre-warming NCCL communicators before the first post-recover step, preventing device peak-occupancy hangs.
* **New Features & Validations:**
  * [PR #1444](https://github.com/inclusionAI/AReaL/pull/1444) (OPEN): Introduces LoRA-based GRPO training support for Qwen3.6 (27B dense and 35B-A3B MoE) utilizing the SGLang backend.
  * [PR #1452](https://github.com/inclusionAI/AReaL/pull/1452) (OPEN): Adds cross-tokenizer on-policy distillation, allowing knowledge transfer between structurally different model families (e.g., DeepSeek → Qwen).
  * [PR #1554](https://github.com/inclusionAI/AReaL/pull/1554) (OPEN): Hardens PPO rollout tensors by actively rejecting incomplete or non-finite sampling evidence from vLLM/SGLang providers.

### 5. Why This Project Matters in Today's RL Landscape
AReaL continues to establish itself as a production-grade, highly distributed RL framework. Today's update trajectory highlights exactly what the broader RL ecosystem demands in 2026: **safe and efficient training at scale**. 

While foundational algorithm research often dominates academic literature, the engineering breakthroughs seen in AReaL's PRs—such as reducing Megatron memory peaks, stabilizing fault-tolerance via NCCL communicator warm-ups, and ensuring precise MoE rollout routing (R3)—are the actual bottlenecks for training billion-parameter agents. Furthermore, by proactively securing its inference data proxies and expanding capabilities to cover modern architectures (Qwen3.6, cross-tokenizer distillation), AReaL is positioning itself as an indispensable, enterprise-ready toolset for self-evolving AI research and deployment.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily digest for the TRL (Transformer Reinforcement Learning) ecosystem. 

### 1. Today's Highlights
* **The Push for Stable Distillation:** A massive refactoring effort is underway to promote `DistillationTrainer` to a stable API, aligning its tensor layouts and data processing pipelines with `GRPOTrainer`.
* **Async RL Observability Boost:** A series of PRs significantly improves metric tracking and rollout logging for `AsyncGRPOTrainer`, signaling a maturation of asynchronous RLHF pipelines.
* **Multimodal RL Fixes:** Critical patches are in progress to resolve VLM (Vision-Language Model) token expansion bugs and weight-sync mismatches during GRPO training.

### 2. Releases
**No new releases** were shipped in the last 24 hours. The repository remains on its current commit baseline as development focuses on major architectural refactors.

### 3. Important Issues
* **[OPEN] #6028: AsyncGRPO VLM Checkpoint Mismatch:** A critical blocker for multimodal RL. Users cannot train VLMs (`*ForConditionalGeneration`) using `AsyncGRPOTrainer` due to weight-sync key mismatches when integrating with `vllm` 0.22.0. ([huggingface/trl#6028](https://github.com/huggingface/trl/issues/6028))
* **[OPEN] #4967: K1-in-Reward KL Estimator:** An academic proposal to refine GRPO's reward calculation by replacing the current K3 estimator with an unbiased K1 KL estimator, referencing the recent paper *"A Comedy of Estimators"*. ([huggingface/trl#4967](https://github.com/huggingface/trl/issues/4967))
* **[OPEN] #3549: GRPO Sequence Packing:** Feature request to implement sequence packing for preference learning/GRPO to share prefixes and drastically reduce memory footprints for large completion batches. ([huggingface/trl#3549](https://github.com/huggingface/trl/issues/3549))
* **[OPEN] #3910: SFT max_length Regression:** A lingering bug where using `max_length` in versions >= 0.20.0 causes training loss stagnation, breaking standard fine-tuning routines. ([huggingface/trl#3910](https://github.com/huggingface/trl/issues/3910))

### 4. Key PR Progress
* **Distillation API Overhaul:** 7 PRs (#[6481](https://github.com/huggingface/trl/pull/6481), #[6482](https://github.com/huggingface/trl/pull/6482), #[6484](https://github.com/huggingface/trl/pull/6484), #[6487](https://github.com/huggingface/trl/pull/6487), #[6497](https://github.com/huggingface/trl/pull/6497), #[6508](https://github.com/huggingface/trl/pull/6508), #[6509](https://github.com/huggingface/trl/pull/6509)) by `qgallouedec` systematically execute a "add → switch → delete" migration. They are unifying the internal tensor layouts (shifting to `prompt_ids`/`completion_ids` from legacy `input_ids`/`labels`) to make `DistillationTrainer` self-contained and stable.
* **Async RL Observability:** `AmineDiro` shipped several crucial enhancements to `AsyncGRPOTrainer`, including accurate `step_time_s` metrics ([#6490](https://github.com/huggingface/trl/pull/6490)), fixed queue idle-time tracking ([#6489](https://github.com/huggingface/trl/pull/6489)), and native integration with `trackio` to log rollout traces, advantages, and rewards ([#6491](https://github.com/huggingface/trl/pull/6491)).
* **VLM Token Expansion Fix:** PR [#6300](https://github.com/huggingface/trl/pull/6300) addresses a bug where vLLM receives incorrectly pre-expanded `<image>` tokens during multimodal GRPO, breaking generation.
* **Default Context Lengths:** PR [#6264](https://github.com/huggingface/trl/pull/6264) intelligently bumps the default `max_completion_length` from 256 to 512, preventing silent context truncation in reasoning tasks.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community shifts heavily toward Reasoning LLMs (o1/R1-style architectures), GRPO and on-policy distillation have become the dominant training paradigms. TRL is currently acting as the foundational infrastructure bridging Hugging Face `transformers` with high-throughput inference engines like vLLM. 

Today's development log perfectly illustrates the current industry bottlenecks: **scaling asynchronous RL pipelines** (handling weight-syncs and metric logging without blocking GPU compute) and **optimizing memory for long generation sequences** (sequence packing and distillation unification). By solving the `AsyncGRPOTrainer` VLM mismatch and stabilizing the `DistillationTrainer`, TRL is paving the way for the next generation of highly efficient, multi-modal reasoning models.

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

Here is the RL open-source ecosystem daily digest for `verl` (Volcengine's RLHF/post-training framework) for July 23, 2026.

# 🪐 verl RL Daily Digest: 2026-07-23

## 1. Today's Highlights
The verl ecosystem shows heavy active development focused on **next-gen infrastructure optimization**, specifically targeting memory efficiency, weight synchronization latency, and hardware backend expansion (NPU/Blackwell). The community is actively debugging complex multimodal MoE setups (like Qwen3-VL) and advancing new optimizer integrations (Muon).

## 2. Releases
* **None** (No new releases in the last 24 hours). The community continues to iterate on the latest stable branches.

## 3. Important Issues
Developers are navigating intricate infrastructure and architectural challenges. Key discussions include:
* **Multimodal MoE & Architecture Support:** A highly upvoted community guide for [training Qwen3-VL MOE](https://github.com/verl-project/verl/issues/3906) (29 comments) highlights the ongoing need for robust VLM recipes. Meanwhile, users report significant structural bugs when applying LoRA to Qwen3-VL ([#3922](https://github.com/verl-project/verl/issues/3922)).
* **Training Stability & Precision:** Training `gpt-oss-20B` is triggering anomalously high actor probability Pearson correlations ([#3894](https://github.com/verl-project/verl/issues/3894)), a known symptom of rollout-training numerical mismatch. 
* **Hardware & Rollout Edge Cases:** Blackwell (B200/RTX 6000 Pro) compatibility is being heavily requested ([#3973](https://github.com/verl-project/verl/issues/3973)), and intermittent TMA descriptor initialization failures are disrupting Qwen3-VL training on standard GPUs ([#4006](https://github.com/verl-project/verl/issues/4006)).
* **Next-Gen Engine Integrations:** An RFC to integrate [VeOmni](https://github.com/verl-project/verl/issues/3920) as a distributed training backend is under community review, aiming to push the boundaries of verl's scalability.

## 4. Key PR Progress
Today’s PRs reflect a mature framework shifting from basic functionality to hyper-optimized distributed execution.
* **Optimizer & Routing Expansions:** 
  * [PR #7120](https://github.com/verl-project/verl/pull/7120) introduces **Muon optimizer** support to the native Megatron backend, exposing `TensorParallelMuon` for advanced exploration.
  * [PR #7115](https://github.com/verl-project/verl/pull/7115) adds a **KV-cache-aware request load balancer** for vLLM rollouts, optimizing inference routing based on live GPU/CPU/SSD tier metrics.
* **Zero-Overhead Weight Sync:** 
  * [PR #7108](https://github.com/verl-project/verl/pull/7108) implements a **P2P checkpoint engine via Mooncake RDMA**, directly pushing Megatron weights into SGLang rollout engines without building NCCL groups.
  * [PR #7085](https://github.com/verl-project/verl/pull/7085) wires sharded delta weight syncing for VeOmni FSDP2+EP, minimizing trainer-to-rollout transfer bottlenecks.
* **Memory & Gradient Efficiency:** 
  * [PR #7095](https://github.com/verl-project/verl/pull/7095) (FSDP performance) defers gradient sync until the final micro-batch during accumulation, drastically reducing network overhead.
* **Hardware Backend Fixes:** 
  * Ascend NPU support saw critical bug fixes, including resolving MoE communication state bugs after L2 sleep ([PR #7086](https://github.com/verl-project/verl/pull/7086)) and enforcing `strict=False` for Megatron HF checkpoint saving ([PR #7114](https://github.com/verl-project/verl/pull/7114)).

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—dominated by test-time compute, agentic workflows, and massive MoE architectures—the bottleneck has shifted from raw FLOPs to **rollout-trainer orchestration and memory management**. `verl` is establishing itself as a critical bridge for production-grade RLHF by natively addressing these exact bottlenecks. 

Today's updates demonstrate that verl is not just tracking standard PPO/GRPO implementations; it is pushing the envelope on **heterogeneous compute support** (NPU + Blackwell), **RDMA-based weight syncing**, and **KV-cache-aware rollouts**. As the industry trains larger reasoning models (like 20B+ parameters), verl's emphasis on deferred gradient syncing, delta sharded checkpoints, and fast inference integration (vLLM/SGLang) makes it an indispensable blueprint for high-throughput post-training.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

**Reinforcement Learning Ecosystem Daily Digest: torchtune**
**Date:** 2026-07-23

### 1. Today's Highlights
Activity in the `torchtune` repository over the past 24 hours was focused entirely on architectural enhancements rather than bug fixes or releases. The sole update involves a significant Request for Comments (RFC) regarding a foundational shift in how training data is handled. 

### 2. Releases
* **No new releases** in the last 24 hours.

### 3. Important Issues
* **None updated.** There were 0 issues opened or updated in the last 24 hours, indicating a temporary stabilization in bug reporting or feature requests outside of the active PR pipeline.

### 4. Key PR Progress
* **[PR #2785](https://github.com/meta-pytorch/torchtune/pull/2785) [OPEN] [RFC] Iterable Dataset**
  * **Author:** felipemello1
  * **Updated:** 2026-07-22
  * **Summary:** This ongoing RFC addresses critical memory and scalability bottlenecks in torchtune's data pipelines. The PR proposes moving away from traditional map-style datasets to introduce support for **iterable, streaming, and weighted datasets**. 
  * **Technical Impact:** Successfully merging this PR would allow practitioners to train models on datasets that exceed available RAM, provide finer-grained control over multi-sample operations (like packing/skipping), and yield performance gains during data loading.

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning—particularly in RLHF (Reinforcement Learning from Human Feedback) and fine-tuning Large Language Models—the volume of preference and trajectory data frequently exceeds local memory constraints. 

`torchtune` remains a critical library in the PyTorch ecosystem for high-performance model tuning. The architectural shift proposed in [PR #2785](https://github.com/meta-pytorch/torchtune/pull/2785) is highly relevant to the RL community because:
1. **Memory Efficiency:** Enabling streaming/iterable datasets means RL researchers can run continuous offline RL or fine-tuning loops on massive, continuously generated experience replay buffers without crashing local machines.
2. **Data Control:** Fine-grained control over packing and weighted sampling is essential for RL, where prioritizing high-reward trajectories is standard practice.
3. **Throughput:** Faster map-style alternatives translate directly to shorter training cycles, which is vital given the iterative nature of RL reward optimization.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the daily digest for the Open Instruct project. 

# 🧠 RL Open-Source Ecosystem Daily Digest: 2026-07-23
**Project Focus:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 1. Today's Highlights
*   **Next-Gen Hardware Acceleration:** The ecosystem is officially preparing for NVIDIA B300 GPUs with the successful merge of CUDA 13.0 compatibility ([PR #1758](https://github.com/allenai/open-instruct/pull/1758)).
*   **Infrastructure Maturation:** CI/CD pipelines are being upgraded to autonomously publish parallel CUDA 12 and CUDA 13 Docker images ([PR #1783](https://github.com/allenai/open-instruct/pull/1783)).
*   **RL Training Optimization:** Centralized checkpoint management has been merged across all core training paths (SFT, DPO, GRPO) to optimize storage overhead during long RL runs ([PR #1701](https://github.com/allenai/open-instruct/pull/1701)).

### 2. Releases
*   **No new releases** cut in the last 24 hours. The repository remains on its latest stable version while infrastructure updates merge into `main`.

### 3. Important Issues
*   **None.** The issue tracker saw zero activity in the last 24 hours, indicating a stable community feedback loop or a focus shift toward core development and infrastructure scaling. 

### 4. Key PR Progress
A total of 4 PRs saw updates today, heavily focused on backend infrastructure and training optimizations:
*   🔀 **[CLOSED] [PR #1758](https://github.com/allenai/open-instruct/pull/1758): Upgrade to CUDA 13.0 for B300 support on ai2/holmes**
    *   *Insight:* Implements selectable Docker bases (`CUDA_VERSION=12` vs `13`) to support next-gen B300 clusters via `nvidia/cuda:13.0.3` while maintaining backward compatibility with older clusters.
*   🔀 **[CLOSED] [PR #1701](https://github.com/allenai/open-instruct/pull/1701): Wire max_checkpoints through SFT, DPO, and GRPO paths**
    *   *Insight:* Authored by TimDettmers. Implements a `CheckpointConfig` (`keep_last_n_checkpoints`) across OLMo-core training paths. This is critical for RLHF/GRPO workflows where intermediate policy checkpoints consume massive amounts of storage.
*   🛠️ **[OPEN] [PR #1783](https://github.com/allenai/open-instruct/pull/1783): Publish automatic CUDA 13 Beaker image**
    *   *Insight:* Streamlines the deployment pipeline by introducing a dedicated CI job to build and publish a CUDA 13 Beaker image (`open_instruct_auto_cuda13`), utilizing an isolated BuildKit cache.
*   🛠️ **[OPEN] [PR #1741](https://github.com/allenai/open-instruct/pull/1741): Checking main's conflicts with the Tmax branch**
    *   *Insight:* Routine branch maintenance by `shatu` to ensure experimental RL branches (Tmax) remain mergeable as core infrastructure updates land on `main`.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct continues to be a foundational "bellwether" repository for the open-source RL community (specifically DPO and GRPO methodologies). Today's updates highlight a critical shift in the broader RL landscape: **the race for hardware readiness and training efficiency.** 

By future-proofing its Docker infrastructure for NVIDIA B300 GPUs via CUDA 13 ([PR #1758](https://github.com/allenai/open-instruct/pull/1758)), the project ensures that researchers can immediately leverage next-gen compute for scaling GRPO without dependency conflicts. Furthermore, the centralization of checkpoint management for GRPO paths ([PR #1701](https://github.com/allenai/open-instruct/pull/1701)) solves a ubiquitous pain point in Reinforcement Learning from Human Feedback (RLHF)—managing the I/O and storage burden of high-frequency policy weight snapshots.

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

**RL Open-Source Ecosystem Daily Digest: Gymnasium**
**Date:** 2026-07-23

### 1. Today's Highlights
The Gymnasium repository experienced a quiet development cycle over the last 24 hours with no new pull requests, issues, or releases. The primary activity revolves around ongoing community discussions regarding resource management in vectorized environments.

### 2. Releases
No new releases were published in the last 24 hours. 

### 3. Important Issues
*   **[Proposal] Limit number of processes used by AsyncVectorEnv ([Issue #1641](https://github.com/Farama-Foundation/Gymnasium/issues/1641))**
    *   **Status:** Open (Updated: 2026-07-22 | Comments: 2)
    *   **Summary:** Author @gkoundry proposes adding an execution-limiting feature to `AsyncVectorEnv`. The motivation stems from simulator workloads (e.g., MuJoCo robot policy evaluation), where spinning up hundreds of parallel randomized environments simultaneously can overwhelm system memory and CPU resources. Allowing a bounded rolling execution (or maximum active worker count) would optimize hardware utilization during massive metric collection runs.

### 4. Key PR Progress
There have been no updates to Pull Requests in the last 24 hours. The codebase remains stable with no new merges or active reviews recorded today.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium serves as the de facto standard API for environment interactions in modern Reinforcement Learning. While deep learning frameworks handle the *learning* side (policy optimization and gradient updates), Gymnasium standardizes the *deployment and data collection* side. 

Issues like #1641 highlight a critical scaling bottleneck in contemporary RL research: distributed simulation. As RL practitioners move toward highly parallelized setups (using tools like Isaac Gym, Brax, or massive CPU clusters) to evaluate thousands of randomized physics environments simultaneously, efficient concurrency management becomes vital. Features that allow fine-grained control over process spawning are essential to prevent resource exhaustion, ensuring that Gymnasium remains robust enough for industrial-scale Sim2Real pipelines and large-scale benchmarking.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🧠 RL Open-Source Daily Digest: July 23, 2026
**Focus:** Farama-Foundation/PettingZoo

## 1. Today's Highlights
PettingZoo is seeing a major wave of activity focused on **environment rendering and physics engine accuracy**. The community successfully integrated custom pixel-art rendering for Hanabi, while simultaneously addressing long-standing collision physics bugs in Cooperative Pong and visual quirks in the Pursuit environment. 

## 2. Releases
*   **No new releases** pushed in the last 24 hours.

## 3. Important Issues
*   **[#1379] [CLOSED] Hanabi Rendering** 
    *   **Author:** jkterry1
    *   **Summary:** Resolved. The maintainer provided commissioned pixel-art assets for Hanabi cards, requesting community help to implement graphical rendering for the environment, which previously relied solely on text/console output via OpenSpiel. 
    *   🔗 [View Issue](https://github.com/Farama-Foundation/PettingZoo/issues/1379)

## 4. Key PR Progress
*   **[#1380] [CLOSED] Add pygame rendering to Hanabi** *(by RewardGuard)*
    *   **Summary:** Closes issue #1379. Replaces the outdated `ansi` text rendering with fully functional PyGame rendering, parsing the OpenSpiel state string to map the custom pixel-art cards onto a graphical board.
    *   🔗 [View PR](https://github.com/Farama-Foundation/PettingZoo/pull/1380)
*   **[#1306] [CLOSED] Add `RecordVideo` wrappers** *(by nightly)*
    *   **Summary:** A highly anticipated merge that directly ports Gymnasium's `RecordVideo` wrapper to PettingZoo. This natively supports both AEC and parallel environments, eliminating the need for researchers to rely on external library wrappers (like SB3 or TorchRL) for video logging.
    *   🔗 [View PR](https://github.com/Farama-Foundation/PettingZoo/pull/1306)
*   **[#1398] [OPEN] Fix cooperative_pong ball bounce physics (v7)** *(by RewardGuard)*
    *   **Summary:** Fixes a fundamental collision bug (#1289) where the ball's position was snap-aligned to surfaces during collisions. The new implementation preserves the ball's continuous sub-step distance, heavily impacting the fidelity of MARL environment dynamics.
    *   🔗 [View PR](https://github.com/Farama-Foundation/PettingZoo/pull/1398)
*   **[#1393] [OPEN] Add configurable center obstacle size to Pursuit** *(by paranoa233)*
    *   **Summary:** Introduces `center_box_size=(width, height)` to the Pursuit environment, allowing researchers to dynamically scale or remove the central obstacle for custom curriculum learning setups.
    *   🔗 [View PR](https://github.com/Farama-Foundation/PettingZoo/pull/1393)
*   **[#1399] [OPEN] pursuit: render agents as squares instead of circles** *(by RewardGuard)*
    *   **Summary:** Restores the visual style of the Pursuit environment to its pre-PyGame era by rendering agents as filled squares rather than circles, aligning visual feedback with grid coordinates.
    *   🔗 [View PR](https://github.com/Farama-Foundation/PettingZoo/pull/1399)

## 5. Why This Project Matters in Today's RL Landscape
As Multi-Agent Reinforcement Learning (MARL) continues to dominate research (particularly in cooperative AI and LLM-agent evaluation), standardized environments are critical. Today's updates highlight PettingZoo's dual focus: **observability** and **determinism**. 

By porting the `RecordVideo` wrapper and adding bespoke graphical rendering (like the Hanabi pixel art), PettingZoo is drastically lowering the barrier for qualitative evaluation and dataset collection. Meanwhile, granular fixes to physics engines (like Cooperative Pong's bounce mechanics) ensure that policy gradients aren't skewed by discretization artifacts—guaranteeing that algorithmic breakthroughs are based on true multi-agent dynamics rather than environment bugs.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>