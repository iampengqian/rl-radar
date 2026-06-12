# RL Open Source Daily Digest 2026-06-13

> Generated: 2026-06-12 22:27 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem on 2026-06-13 is undergoing a massive paradigm shift from single-turn RLHF towards distributed, asynchronous, and agentic workflows. The bottleneck for post-training frontier models (e.g., DeepSeek-V4, 100B+ parameter LLMs) has definitively moved from algorithmic design to **orchestration overhead and memory efficiency**. Consequently, there is a pronounced bifurcation in the ecosystem: LLM-focused frameworks (verl, TRL, slime, AReaL) are aggressively refactoring into decoupled, microservice-driven architectures to survive massive scaling demands, while applied robotics and gaming RL frameworks (SB3, rl_games) are prioritizing production readiness, safety verification, and dependency stability. 

## Activity Comparison
Activity is heavily concentrated in the LLM alignment layer, with the top four repositories dominating the day's PRs and Issues. Projects with zero activity are omitted from the narrative but listed below for completeness.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 14 | 41 | 0 | Hyper-scaling distributed RL across diverse hardware (AMD, Huawei) and complex MoE/VLM architectures. |
| **TRL** | 17 | 29 | 0 | Hardening Vision-Language Model (VLM) support and maturing async agentic RL integrations. |
| **slime** | 1 | 19 | 0 | Tackling inference-training handshakes (ramp-down latency) and integrating SOTA advantage estimators. |
| **AReaL** | 4 | 6 | 0 | Deep system-level optimization (FP8, Triton kernels) and transitioning to v2 microservices. |
| **ROCK** | 2 | 3 | 0 | Improving developer experience with seamless container onboarding and decoupled cloud SDKs. |
| **Open Instruct** | 1 | 4 | 0 | Post-release maintenance; focusing on DPO metric parity and cluster abstraction. |
| **Stable Baselines3** | 2 | 2 | 0 | Advancing safe sim-to-real deployment (URML) and supply chain security. |
| **rl_games** | 0 | 1 | 0 | Resolving dependency drift and ensuring Python 3.12 / PyTorch 2.12 compatibility. |
| **ROLL** | 0 | 1 | 0 | Expanding hardware support to include Ascend NPUs via new CI pipelines. |
| *Others* | 0 | 0 | 0 | *CleanRL, Gymnasium, OpenRLHF, PettingZoo, Tianshou, torchtune (No activity).* |

## Shared Research & Engineering Directions

**Research Signals:**
*   **Next-Gen Advantage & Loss Formulations:** To combat training instabilities like length bias and gradient clipping, frameworks are rapidly integrating SOTA algorithms. `slime` added CISPO (MiniMax-M1) and Dr.GRPO, `AReaL` introduced IcePop and KPop for off-policy correction, and `TRL` fixed DAPO loss normalization.
*   **Multimodal & MoE Alignment:** RL is adapting to complex architectures. `verl` and `TRL` are heavily focused on Vision-Language Model (VLM) support in GRPO/PPO, while `verl` and `AReaL` are building plumbing for DeepSeek-V4-style Multi-Teacher On-Policy Distillation (OPD).
*   **Multi-Turn Agentic RL:** Moving beyond single-turn prompt completion, frameworks are building out support for tool-using agents. `TRL` is experimenting with the Harbor framework, while `slime` and `AReaL` are fixing socket churn and adding agent runtimes for multi-step rollouts.

**Engineering & Infrastructure Signals:**
*   **Decoupled, Async Architectures:** Monolithic PPO loops are being replaced. `AReaL` is transitioning to v2 microservices (separating inference, agent, and training), `verl` is decoupling optimizer steps and rollout routers, and `slime` is building endpoints for externally managed elastic inference fleets.
*   **Hardware & Memory Optimization:** To avoid Out-of-Memory (OOM) errors at scale, `AReaL` merged direct FP8 weight transfers and Triton-fused Linear Cross Entropy, while `verl` and `ROLL` actively patched support for AMD ROCm and Huawei Ascend NPUs.
*   **Infra Abstraction & Sandbox Management:** Simplifying the DevOps of RL is in focus. `ROCK` introduced Docker-in-Docker (DinD) sandbox onboarding, and `Open Instruct` discussed decoupling from vendor-specific (AI2) clusters.

## Differentiation Analysis
*   **Target Scale and Domain:** Projects like `verl`, `slime`, and `AReaL` are specifically battling the trillion-parameter, distributed inference bottlenecks of modern LLMs (e.g., hiding SGLang weight-sync latency). Conversely, `Stable Baselines3` and `rl_games` remain focused on the applied, single-agent/gaming RL stack, where priorities are formal safety validation (URML) and dependency determinism.
*   **Abstraction Layers:** `AReaL` and `slime` are doubling down on deep systems engineering (FP8 memory transfers, Megatron backend optimizations). Meanwhile, `TRL` and `ROCK` are focusing on higher-level API ergonomics—standardizing VLM preprocessing pipelines and streamlining cloud sandbox deployments. 
*   **Ecosystem Lock-in:** `verl` actively prevents hardware lock-in (NVIDIA, AMD, Huawei). In contrast, Alibaba's `ROCK` and AI2's `Open Instruct` are actively working to abstract away their own corporate cloud infrastructures to attract broader open-source adoption.

## Community Momentum & Maturity
The ecosystem is currently in a "hardening phase." High-velocity projects like `TRL` and `verl` are stamping out edge cases in VLM weight syncing and async parameter synchronization, indicating that their core asynchronous training loops are maturing past initial experimental phases. Meanwhile, there is a strong community push for infrastructure decoupling: users are explicitly requesting that frameworks move away from hardcoded cloud environments (as seen in `Open Instruct` Issue #1717) and monolithic trainers. Maintainer responsiveness remains exceptionally high, particularly in `TRL`, where critical VLM/Environment bugs were immediately met with corresponding fix PRs on the same day.

## Trend Signals
*   **The Microservice-First RL Era:** Expect a surge in disaggregated RL architectures where the training engine, inference rollout engine, and agentic environments operate as entirely decoupled, independently scaling services.
*   **FP8 and Triton as Default RL Stack:** As context lengths and vocab sizes explode, implicit dequantization and massive logits materialization will become unsustainable. Direct FP8 transfers and fused cross-entropy will become baseline requirements for any serious LLM RL framework.
*   **The Hardware Diversification Imperative:** The ongoing integration of AMD ROCm and Huawei Ascend NPUs across multiple frameworks signals that the AI community is aggressively preparing for a post-NVIDIA-dominance compute landscape, driven by the immense cost of large-scale RL post-training.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for ROLL based on the provided GitHub data.

### 📅 RL Ecosystem Daily Digest: June 13, 2026
**Project:** ROLL (Reinforcement Open Open Loop) | **Repository:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

---

#### 1. Today's Highlights
Activity in the ROLL repository over the last 24 hours has been highly focused on infrastructure and continuous integration (CI). The primary event is the closure of a significant PR aimed at expanding the framework's hardware compatibility to include Ascend NPUs (Neural Processing Units). No new issues or releases were recorded.

#### 2. Releases
*   **None.** No new versions or tags were published in the last 24 hours.

#### 3. Important Issues
*   **None.** There is no active issue activity to report today (0 items updated/created). 

#### 4. Key PR Progress
*   [PR #454: [CLOSED] feat: add npu ci yaml and fix tests](https://github.com/alibaba/ROLL/pull/454)
    *   **Author:** UsernameFull (Merged/Closed on 2026-06-12)
    *   **Summary:** This PR successfully introduces dedicated CI pipelines for Ascend NPU hardware via a new GitHub Actions workflow (`.github/workflows/ci-npu-test.yml`). Beyond CI, it includes necessary fixes to ensure tests and runtime compatibility execute correctly on NPU architectures. 

#### 5. Why This Project Matters in Today's RL Landscape
In the current large-scale Reinforcement Learning (RL) landscape—dominated by the massive compute requirements of RLHF (Reinforcement Learning from Human Feedback) and LLM alignment—hardware diversification is a critical bottleneck. ROLL remains a vital open-source framework because it actively bridges the gap between traditional GPU-centric RL pipelines and emerging AI accelerators. 

The completion of [PR #454](https://github.com/alibaba/ROLL/pull/454) demonstrates the project's commitment to enabling multi-architecture RL workflows. By officially integrating Ascend NPU support and automated testing, ROLL provides the ecosystem with a much-needed, vendor-agnostic tool to scale distributed RL training cost-effectively and reduce reliance on monolithic GPU clusters.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK reinforcement learning ecosystem. 

# 📊 ROCK RL Ecosystem Daily Digest
**Date:** 2026-06-13
**Repository:** `alibaba/ROCK`

### 1. Today's Highlights
*   **SDK & Infrastructure Decoupling:** A major architectural push is underway to decouple ROCK's Python SDK (`rl-rock`) from hardcoded backend configurations. Two new proposals/PRs introduce unified endpoints for SDK clients and automated ACR (Alibaba Cloud Container Registry) token generation.
*   **Seamless Container Onboarding:** Significant progress on allowing RL practitioners to spin up sandboxes directly from local Dockerfiles, drastically reducing the DevOps friction traditionally associated with RL environments.
*   **Documentation Expansions:** The v1.8.x user guides have been updated with comprehensive instructions for utilizing ROCK's HTTP and WebSocket sandbox proxies.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **[OPEN] #1102: Unified backend config endpoint for SDK clients**
    *   **Author:** Issac-Newton
    *   **Summary:** Addresses a critical infrastructural fragility where SDK clients previously relied on hardcoded environment variables (image registry URLs, OSS endpoints). This issue proposes a unified configuration endpoint to dynamically provide these values, streamlining deployments across different environments.
    *   **Link:** [alibaba/ROCK #1102](https://github.com/alibaba/ROCK/issues/1102)
*   **[CLOSED] #1083: User guide for sandbox HTTP/WebSocket proxy**
    *   **Author:** zhongwenwen666
    *   **Summary:** Feature request to document the `/sandboxes/{sandbox_id}/proxy/...` endpoints. This allows users to easily route external traffic into isolated RL training sandboxes.
    *   **Link:** [alibaba/ROCK #1083](https://github.com/alibaba/ROCK/issues/1083)

### 4. Key PR Progress
*   **[OPEN] #1101: Centralized image config with ACR temporary token support**
    *   **Summary:** Implements `ImageRegistryConfig` and `ImageBuilderConfig` dataclasses in YAML files. Adds a `get_client_config()` aggregator to `SandboxProxyService`, enabling dynamic, secure interactions with ACR without long-lived credentials.
    *   **Link:** [alibaba/ROCK #1101](https://github.com/alibaba/ROCK/pull/1101)
*   **[OPEN] #1043: Start sandbox from Dockerfile via `Image.from_dockerfile`**
    *   **Summary:** Highly anticipated feature (fixes #531). Allows users to pass a local Dockerfile or build context to the SDK. `Sandbox.start()` will now transparently handle the Docker-in-Docker (DinD) build, push to the registry, and sandbox initialization in one cohesive step.
    *   **Link:** [alibaba/ROCK #1043](https://github.com/alibaba/ROCK/pull/1043)
*   **[CLOSED] #1084: Add sandbox proxy user guide**
    *   **Summary:** Resolves Issue #1083 by adding official documentation for target-port selection (path/header/query), port restrictions, and proxy usage in the v1.8.x docs.
    *   **Link:** [alibaba/ROCK #1084](https://github.com/alibaba/ROCK/pull/1084)

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, managing the distributed infrastructure—building environment images, scaling sandboxes, and routing network traffic securely—is often a larger bottleneck than designing the RL algorithms themselves. 

Today's updates to ROCK highlight a crucial evolution in RL platforms: **developer experience and infrastructural security**. By introducing `Image.from_dockerfile` (PR #1043) and decoupling SDKs from hardcoded cloud credentials via unified config endpoints (Issues #1102, PR #1101), ROCK is drastically lowering the barrier to entry for distributed RL. It allows researchers to focus purely on environment logic (using standard Dockerfiles) and algorithmic tuning, while the platform seamlessly handles the underlying DinD builds, ACR token rotation, and proxy routing required to run massive RL workloads.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for `THUDM/slime` on 2026-06-13.

### 1. Today's Highlights
* **Massive Infrastructure & Algorithm Push:** 19 PRs updated today, heavily focused on enhancing distributed rollout reliability, adding state-of-the-art (SOTA) RLHF algorithms, and optimizing large-scale inference backends (SGLang).
* **New Algorithm Integrations:** Introduction of the CISPO advantage estimator (MiniMax-M1) and Dr.GRPO loss normalization to address training instabilities like gradient clipping and length bias.
* **Elastic Fleet Management:** A new feature PR proposes decoupling slime's training loop from externally managed inference fleets, paving the way for massive, elastic RL deployments.

### 2. Releases
* **None.** No new stable or pre-releases were published in the last 24 hours.

### 3. Important Issues
* **[#2007](https://github.com/THUDM/slime/issues/2007) [OPEN] Mitigating ramp-down time during weight updates in SGLang**
  *Author: abhanshugpt | Updated: 2026-06-12*
  A highly relevant architectural question for large-scale RL: training a 397B parameter model reveals significant latency during weight synchronization. Specifically, SGLang servers experience "ramp down" delays when draining active requests to accept new weights. The community is inquiring about pipeline RL approaches to hide this latency, a critical bottleneck for trillion-scale RL throughput.

### 4. Key PR Progress
Today's PRs reflect a matureing framework hardening its distributed execution, expanding algorithmic flexibility, and fixing subtle bugs in custom agentic rollouts.

**Algorithm & Loss Upgrades:**
* **[#2067](https://github.com/THUDM/slime/pull/2067):** Adds the **CISPO advantage estimator** (MiniMax-M1). This prevents tokens that fall outside the PPO/GRPO importance-sampling clip band from contributing zero gradient, solving a major stagnation issue in LLM RLHF.
* **[#2060](https://github.com/THUDM/slime/pull/2060):** Implements **Dr.GRPO** (`--pg-loss-divisor`). Replaces data-dependent, per-sample token denominators with a constant divisor to eliminate length bias in policy gradient normalization.

**Distributed Rollout & Infrastructure (SGLang & Megatron):**
* **[#2071](https://github.com/THUDM/slime/pull/2071):** Introduces an external rollouts endpoint with publish-only weight sync, allowing `slime` to train against an **elastic, externally managed inference fleet** rather than strictly owning the backend engines.
* **[#2059](https://github.com/THUDM/slime/pull/2059):** Adds retries for transient Ray `ActorUnavailableError` during multi-node resource saturation.
* **[#2015](https://github.com/THUDM/slime/pull/2015):** Fixes a memory release race condition by draining generation before calling SGLang's `release_memory_occupation()` during engine offloading.
* **[#2066](https://github.com/THUDM/slime/pull/2066):** Megatron backend optimization to stop re-asserting `no_sync_func` every step when using `--overlap-grad-reduce`, removing per-step overhead.
* **[#2057](https://github.com/THUDM/slime/pull/2057) [CLOSED]:** Introduced zero-GPU router-only startup mode for custom rollouts, skipping local engine launching and weight syncs.

**Agentic Tooling & Multi-turn Fixes (by EazyReal):**
* **[#2069](https://github.com/THUDM/slime/pull/2069):** Pools `aiohttp.ClientSession` across agent turns to prevent TCP socket churn (TIME_WAIT accumulation) during concurrent multi-turn rollouts.
* **[#2063](https://github.com/THUDM/slime/pull/2063):** Fixes OpenAI tool-call argument rendering to properly map to chat templates.
* **[#2062](https://github.com/THUDM/slime/pull/2062):** Corrects GRPO reward attribution for fanned rollouts, ensuring each attempt is counted exactly once.

### 5. Why This Project Matters in Today's RL Landscape
As LLMs scale beyond 100B parameters (e.g., Qwen 397B mentioned in #2007), the bottleneck in RLHF has shifted from GPU FLOPs to **orchestration overhead**—specifically, how training frameworks manage inference engines (rollouts), memory transfers, and distributed state. 

`slime` is tackling the exact edge-cases that define production-grade LLM reinforcement learning today:
1. **Inference-Training Handshakes:** By deeply integrating with SGLang (API auth #2068, memory ramp-down #2007, in-flight detail exposure #2070), slime is leading the charge in making weight syncing and generation draining non-blocking.
2. **Multi-turn Agentic RL:** The influx of fixes around OpenAI adapters, socket pooling, and custom rollout sampling (#2061, #2069) shows a targeted push to support complex, multi-step tool-using agents rather than just single-turn prompt-completion RLHF.
3. **SOTA Algorithmic Inclusion:** Rapidly integrating papers like MiniMax-M1 (CISPO) and Dr.GRPO ensures that researchers don't have to write custom hacks to avoid length bias or gradient clipping issues, making `slime` a highly competitive testbed for algorithmic research.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning ecosystem digest for AReaL.

# 🧠 AReaL RL Ecosystem Daily Digest — 2026-06-13

## 1. Today's Highlights
AReaL is showing massive momentum in system-level optimization and v2 architectural refactoring. The community is aggressively pushing the boundaries of RLHF/RLAIF efficiency with new PRs focusing on FP8 weight transfers, fused Triton kernels, and advanced PPO masking strategies. Meanwhile, the roadmap for the second half of 2026 is actively taking shape.

## 2. Releases
**No new releases** were pushed in the last 24 hours. The project appears to be in a heavy, active-development phase, likely building towards their next major iteration.

## 3. Important Issues
*   **[Roadmap] 2026 H2 Milestones** ([#1381](https://github.com/areal-project/AReaL/issues/1381)): The maintainers have laid out the H2 2026 roadmap. Contributions are highly encouraged in ongoing system enhancements and next-gen features. 
*   **[Feature] Operator CLI for v2 Microservices** ([#1374](https://github.com/areal-project/AReaL/issues/1374)): Transitioning AReaL into decoupled microservices (inference, agent, weight-update, training). The initial CLI scaffold for this architecture was recently submitted and marked as ready for contribution.
*   **DeepSeek-V4 Infra Fault Tolerance** ([#1279](https://github.com/areal-project/AReaL/issues/1279)): A `good first issue` calling for the implementation of preemptible inference services (as described in the DeepSeek-V4 paper) has been successfully **closed**.
*   *Note: A stale bug regarding Qwen3.5 + Megatron integration ([#1317](https://github.com/areal-project/AReaL/issues/1317)) was also closed.*

## 4. Key PR Progress
Today's PRs reflect a deep focus on compute efficiency, memory optimization, and architectural scaling:

*   **Memory & Compute Efficiency:**
    *   [PR #1322](https://github.com/areal-project/AReaL/pull/1322): Introduces a fused Linear Cross Entropy (LCE) path using Triton for Megatron training, successfully bypassing the materialization of massive `[tokens, vocab]` logits tensors.
    *   [PR #1406](https://github.com/areal-project/AReaL/pull/1406): Implements direct FP8 weight transfer in AWEX colocate mode, eliminating expensive implicit dequantization to BF16 and matching SGLang's FP8 linear specifications.
*   **Advanced PPO & RL Algorithms:**
    *   [PR #1405](https://github.com/areal-project/AReaL/pull/1405): Adds supporting features for **IcePop** (Double-Sided Masking) and **KPop** (Bidirectional Binary KL Divergence Masking) for off-policy correction in decoupled PPO loss.
    *   [PR #1392](https://github.com/areal-project/AReaL/pull/1392): Fixes a silent advantage normalization bug in Online GRPO when `group_size > 1` by appending a `group_id` to session requests.
*   **Debugging & Ecosystem Support:**
    *   [PR #1407](https://github.com/areal-project/AReaL/pull/1407): Adds trajectory dump/replay, allowing developers to serialize rollout batches to disk for offline training-loop debugging without needing to spin up an inference engine.
    *   [PR #1373](https://github.com/areal-project/AReaL/pull/1373): Expands model support to include **GLM-5.1, DeepSeek-V3, and GLM-4.7-Flash** across both `mbridge` and `megatron-bridge` paths.
    *   [PR #1383](https://github.com/areal-project/AReaL/pull/1383): Integrates **OpenClaw** as a new `agent_service` runtime, spawning dedicated gateway subprocesses per RL session.

## 5. Why This Project Matters in Today's RL Landscape
As foundation models scale to trillions of parameters and utilize hyper-long contexts (e.g., DeepSeek-V3/V4, Qwen3.5, GLM-5), the bottleneck in RLHF has shifted entirely from the algorithm to the **distributed infrastructure**. 

AReaL is solving the exact bottlenecks hindering large-scale post-training today:
1.  **Overcoming the Logits Memory Wall:** By fusing Linear Cross Entropy and supporting FP8 direct memory transfers, AReaL allows training massive vocabulary LLMs without OOM (Out of Memory) errors.
2.  **Microservice Decoupling:** RL training loops are traditionally monolithic and brittle. AReaL's pivot to a microservice architecture (splitting inference, training, and weight updates) combined with offline trajectory replay makes large-scale RL pipelines highly fault-tolerant and debuggable.
3.  **Agentic RL Readiness:** The integration of per-session agent runtimes (like OpenClaw) shows forward momentum toward training complex, multi-turn agentic models rather than just single-turn reward models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL Ecosystem
**Date:** 2026-06-13

## 1. Today's Highlights
TRL experienced high community engagement today with 29 active Pull Requests and 17 updated Issues. The primary focus is heavily divided between expanding Vision-Language Model (VLM) support across all major trainers (SFT, DPO, KTO, GRPO) and maturing the `AsyncGRPOTrainer` to support padding-free training and external agentic environments. 

## 2. Releases
**No new releases** were cut in the last 24 hours.

## 3. Important Issues
- **AsyncGRPO VLM & Environment Bugs:** Two bugs opened by `adithya-s-k` highlight that `AsyncGRPOTrainer` currently fails on VLM checkpoints due to weight-sync key mismatches ([#6028](https://github.com/huggingface/trl/issues/6028)), and drops environment-derived rewards when using `environment_factory` ([#6027](https://github.com/huggingface/trl/issues/6027)).
- **SFT Quality Regression on Llama 3.2:** The ongoing critical bug regarding improper SFT training of Llama-3.2-3B-Instruct ([#5138](https://github.com/huggingface/trl/issues/5138)) saw continued discussion. This appears driven by a silent precision mismatch where string model paths default to `float32` under mixed-precision setups.
- **DAPO Loss Normalization:** Issue [#5619](https://github.com/huggingface/trl/issues/5619) notes that DAPO loss is incorrectly normalized by micro-batches rather than global batch size, miscalculating gradient accumulation steps.

## 4. Key PR Progress
- **SFT Overhaul (Label Building & Masking):** `0xadvait` submitted two crucial PRs to fix silent SFT training failures. PR [#6037](https://github.com/huggingface/trl/pull/6037) refactors the pipeline to build labels during dataset preparation instead of collation, while PR [#6025](https://github.com/huggingface/trl/pull/6025) drops examples with zero trainable tokens following max-length truncation.
- **Aligning KTO with DPO:** `albertvillanova` opened/merged 6 PRs today standardizing VLM handling in `KTOTrainer`. Key additions include VLM-specific test classes ([#6033](https://github.com/huggingface/trl/pull/6033)), text-collator tests ([#6034](https://github.com/huggingface/trl/pull/6034)), and multimodal message preprocessing to fix batch dimension mismatches ([#6029](https://github.com/huggingface/trl/pull/6029)).
- **Maturing AsyncGRPO:** `qgallouedec` pushed to make padding-free training the default in `AsyncGRPOTrainer` ([#5854](https://github.com/huggingface/trl/pull/5854)) and aligned its clip-ratio metrics with the standard `GRPOTrainer` ([#6021](https://github.com/huggingface/trl/pull/6021)). Fixes for the VLM and environment reward bugs were immediately proposed by `he-yufeng` ([#6032](https://github.com/huggingface/trl/pull/6032), [#6031](https://github.com/huggingface/trl/pull/6031)).
- **Agentic RL via Harbor:** An experimental integration allowing `GRPOTrainer` to train on sandboxed agentic tasks via the Harbor framework was proposed ([#6018](https://github.com/huggingface/trl/pull/6018)).
- **Distillation & Precision Fixes:** PR [#6006](https://github.com/huggingface/trl/pull/6006) correctly normalizes JSD distillation loss for gradient accumulation across `GKD`, `GOLD`, and `Distillation` trainers. Additionally, a safeguard warning for `bf16/fp16` precision mismatches was added ([#6005](https://github.com/huggingface/trl/pull/6005)).

## 5. Why This Project Matters in Today's RL Landscape
As open-source post-training evolves past text-only Reinforcement Learning from Human Feedback (RLHF), TRL is aggressively adapting to support multimodal and agentic workflows. Today's activity demonstrates a codebase in a "hardening phase": developers are systematically stamping out VLM edge-cases across preference pipelines (DPO, KTO, GRPO) and optimizing distributed RL infrastructure (`AsyncGRPOTrainer`'s padding-free sequence packing and vLLM weight syncing). Furthermore, integrations like the Harbor framework highlight TRL's trajectory toward enabling RL on live, tool-using agents—a crucial stepping stone for developing complex reasoning models.

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

Here is the RL ecosystem daily digest for `verl` based on the provided GitHub data.

# 🪐 verl RL Daily Digest — 2026-06-13

**Repository:** [verl-project/verl](https://github.com/verl-project/verl)  
**Activity (Last 24h):** 14 Issues Updated | 41 PRs Updated | 0 New Releases  

---

### 1. Today's Highlights
*   **Expanding Multimodal & Hardware Horizons:** Major PRs landed today adding native RL/SFT support for **Google Gemma4** (PR [#6715](https://github.com/verl-project/verl/pull/6715), [#6030](https://github.com/verl-project/verl/pull/6030)), as well as out-of-the-box support for **AMD ROCm GPUs** via SGLang (PR [#6664](https://github.com/verl-project/verl/pull/6664)) and continued patches for **Huawei Ascend NPUs** (PRs [#6708](https://github.com/verl-project/verl/pull/6708), [#6711](https://github.com/verl-project/verl/pull/6711)).
*   **Async Training & Rollout Scaling:** The team is aggressively refactoring core engine loops. A unified abstraction for sync/async training was merged/closed (PR [#6710](https://github.com/verl-project/verl/pull/6710)), alongside new architectures for dynamic resource allocation (PR [#6556](https://github.com/verl-project/verl/pull/6556)) and pluggable load balancing routers (PR [#6712](https://github.com/verl-project/verl/pull/6712)).
*   **DeepSeek-V4 Architectures Take Shape:** An RFC for a DeepSeek-V4-style On-Policy Distillation (OPD) path using a multi-teacher hidden-state pool was proposed (Issue [#6705](https://github.com/verl-project/verl/issues/6705)), complementing a new Megatron-Bridge SFT example for DeepSeek-V4-Flash (PR [#6603](https://github.com/verl-project/verl/pull/6603)).

### 2. Releases
❌ **No new releases** in the last 24 hours.

### 3. Important Issues
*   **RFC: Single-Pool Multi-Teacher OPD ([#6705](https://github.com/verl-project/verl/issues/6705))**  
    *Context:* Proposes a DeepSeek-V4-style On-Policy Distillation path. It suggests using a shared teacher pool that exports hidden states via `TransferQueue` so students can reconstruct full-vocabulary logits for KL divergence.
*   **Severe Memory Leak in Engine Actor Update ([#6698](https://github.com/verl-project/verl/issues/6698))**  
    *Context:* A critical bug where tensors returned in `model_output` and metrics retain the autograd graph until the entire batch finishes. This causes OOM errors during LoRA training with long sequences.
*   **DAPORewardManager Assertion Error ([#5858](https://github.com/verl-project/verl/issues/5858))**  
    *Context:* `max_resp_len` assertions fire even when the overlong penalty buffer is disabled by the user. *(Note: A fix is already in-flight via PR [#6709](https://github.com/verl-project/verl/pull/6709))*.
*   **Missing Colocate Reward Model in new PPO entrypoint ([#6700](https://github.com/verl-project/verl/issues/6700))**  
    *Context:* As `main_ppo.py` is deprecated, users note that `main_ppo_sync.py` is currently missing the implementation for colocate mode reward models.

### 4. Key PR Progress
*   **Engine & Async Architecture:**  
    *   [PR #6717](https://github.com/verl-project/verl/pull/6717): Decouples the optimizer step from `train_batch()`, allowing multiple forward/backward passes before applying weight updates.  
    *   [PR #6716](https://github.com/verl-project/verl/pull/6716) (Closed/Handled): Integrates `FullyAsyncLLMServerClient` into the async trainer to automatically resume on rollout aborts.  
*   **Model & Rollout Compatibility:**  
    *   [PR #6715](https://github.com/verl-project/verl/pull/6715): Implements Gemma4 multimodal support in GRPO/PPO, bypassing the Qwen-VL specific processor assumptions (M-RoPE, image grids).  
    *   [PR #6713](https://github.com/verl-project/verl/pull/6713): Adds Megatron LoRA adapter export support specifically tailored for syncing Qwen3-Omni 3D MoE tensors with vLLM.  
*   **Stability & Bug Fixes:**  
    *   [PR #6675](https://github.com/verl-project/verl/pull/6675): Fixes silent crashes caused by empty token sequences during async parameter synchronization.  
    *   [PR #6666](https://github.com/verl-project/verl/pull/6666): Adds a debug checker to verify weight synchronization integrity between the FSDP trainer and the vLLM rollout engine.  

### 5. Why This Project Matters in Today's RL Landscape
As RLHF/RLAIF becomes the primary bottleneck for aligning frontier LLMs and multimodal models, **verl** has positioned itself as the industry's most flexible distributed RL framework. Today's development activity clearly highlights the immediate needs of the open-source AI community:
1.  **Hardware Agnosticism:** By actively supporting NVIDIA, AMD (ROCm), and Huawei (Ascend), verl prevents ecosystem lock-in, which is crucial as AI compute diversifies globally. 
2.  **Decoupled Async Workloads:** The shift from monolithic PPO loops to highly decoupled, asynchronous rollout routers and unified trainer abstractions reflects the field's move toward disaggregated, high-throughput inference engines (like SGLang and vLLM).
3.  **Next-Gen Model Support:** Rapid integration of complex MoE architectures (DeepSeek-V4) and diverse multimodal processors (Gemma4, Qwen3-Omni) proves verl is successfully abstracting the painful low-level plumbing required for modern post-training.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL ecosystem daily digest for Open Instruct based on the specified date.

### 1. Today's Highlights
Activity in the last 24 hours has been focused on post-release maintenance, dependency synchronization, and DPO (Direct Preference Alignment) metric parity. The repository saw 4 PR updates and 1 ongoing community discussion regarding infrastructure abstraction. 

### 2. Releases
No new releases were published today. The maintainers recently finalized **v0.3.0**, and today's PRs reflect standard post-release housekeeping (such as CHANGELOG management).

### 3. Important Issues
*   **[Issue #1717](https://github.com/allenai/open-instruct/issues/1717) [PR welcome!] Repo is heavily dependent on AI2's cluster**
    *   **Author:** owos
    *   **Context:** An open discussion highlighting a significant friction point for external researchers. The current codebase is tightly coupled with AI2's infrastructure (Beaker, Jupiter, Ceres, Titan). The community is requesting a cluster-agnostic refactor to lower the barrier to entry for non-AI2 users. 

### 4. Key PR Progress
*   **[PR #1723](https://github.com/allenai/open-instruct/pull/1723) Bump OLMo-core to latest main commit** `[OPEN]`
    *   **Author:** mnoukhov
    *   **Summary:** Updates the `ai2-olmo-core` dependency to the latest commit (`9aa3280f`) and refreshes the `uv.lock`. This ensures the repo tracks the latest developments in the OLMo architecture without impacting transitive dependencies.
*   **[PR #1719](https://github.com/allenai/open-instruct/pull/1719) Now, `dpo.py` metrics match `dpo_tune_cache.py`** `[CLOSED]`
    *   **Author:** finbarrtimbers
    *   **Summary:** A crucial alignment fix that ensures metric parity between standard DPO execution and cached datasets. It also introduces tracking for padding percentage and sequence counts (global/per-rank), which is highly valuable for distributed RL and alignment compute optimization.
*   **[PR #1724](https://github.com/allenai/open-instruct/pull/1724) & [PR #1722](https://github.com/allenai/open-instruct/pull/1722)** `[CLOSED]`
    *   **Summary:** Housekeeping PRs focusing on CHANGELOG management following the v0.3.0 release. PR #1722 clears old entries to reset the log, while PR #1724 restores a specific entry for #1719 that was accidentally wiped during the merge.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a vital reference implementation for the open-source community working on LLM alignment (RLHF/DPO). Today's updates emphasize two highly relevant themes in the current RL landscape:
1.  **Infrastructure Bottlenecks:** As highlighted in Issue #1717, scaling RL and preference tuning requires immense compute. Researchers are actively seeking modular, cluster-agnostic codebases rather than vendor-locked solutions.
2.  **Precision in Alignment Metrics:** PR #1719 demonstrates the nuanced engineering required for DPO. Tracking padding percentages and ensuring metric parity across caching mechanisms is critical for accurate scaling laws and efficient distributed training—key priorities for any serious RL research team today.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

### RL Ecosystem Daily Digest: `rl_games`
**Date:** 2026-06-13 | **Project:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

#### 1. Today's Highlights
Activity over the last 24 hours was minimal but highly focused, characterized by a complete absence of new issues and a single, recently closed critical maintenance Pull Request. The repository is currently in a stabilization phase, prioritizing compatibility with the modern Python/PyTorch ecosystem.

#### 2. Releases
*   **No new releases** were published today. The last version remains unchanged. 

#### 3. Important Issues
*   **None.** Zero new issues were opened or updated in the past 24 hours, indicating a period of high stability or pending the merging of ongoing maintenance work.

#### 4. Key PR Progress
The only repository movement comes from a recently closed PR that acts as a major overhaul for modern library compatibility:
*   **PR [#355](https://github.com/Denys88/rl_games/pull/355) [CLOSED] `Fix/critical batch 2026 06`** (Authored by *ViktorM*)
    *   **Summary:** This PR is a critical patch addressing several legacy and dependency-related bugs. Key fixes include:
        1.  **Dependency Locking:** Resolved unimportable library conflicts with `gymnasium 1.3`, `torch 2.12`, and `numpy 2.4.6` by committing a `uv.lock` file, ensuring deterministic environments.
        2.  **Python 3.12 Compatibility:** Fixed the deprecated `strtobool` issue common in legacy codebases adapting to Python 3.12+.
        3.  **Numerical Stability:** Resolved an `np.max` axis crash (restoring `max_steps` functionality) and patched multi-GPU learning rate (LR) divergence.
        4.  **Scheduler Accuracy:** Corrected frame-based LR schedules to anneal correctly, now accurately tracking frames across all distributed ranks.

#### 5. Why This Project Matters in Today's RL Landscape
As we progress into 2026, the RL tooling ecosystem is highly fragmented. `rl_games` remains a cornerstone for researchers and engineers requiring highly optimized, scalable, and reliable PPO/SAC implementations. 

Today's digest highlights a common, critical friction point in open-source ML: **dependency drift**. PR #355 demonstrates the vital, ongoing maintenance required to keep foundational RL baselines functioning smoothly alongside breaking updates in Python (3.12 deprecations), PyTorch (2.12), NumPy (2.4.6), and the transition from OpenAI Gym to the Gymnasium standard (1.3). By ensuring multi-GPU LR divergence is fixed and `uv.lock` dependency locking is standard, `rl_games` continues to provide a robust, drop-in baseline for high-throughput reinforcement learning research and production agents.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the daily digest for the Stable Baselines3 (SB3) open-source ecosystem.

### 1. Today's Highlights
*   **Security & Dependency Management:** The repository has finalized discussions and closed out attempts to bump the minimum PyTorch version to 2.8 to mitigate the `GHSA-887c-mr87-cxwp` vulnerability (CVE-2025-3730). 
*   **Safe Deployment Standardization:** A new, open proposal seeks community feedback on bridging trained SB3 policies with formal robot safety frameworks using the URML specification.
*   **Action Space Constraints:** Ongoing development continues on expanding PPO/A2C capabilities, specifically regarding bounded continuous action spaces via squashing functions.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **[CLOSED] CVE-2025-3730 Vulnerability Mitigation** ([#2250](https://github.com/DLR-RM/stable-baselines3/issues/2250)): The maintainers have closed the inquiry regarding whether to bump SB3's minimum Torch requirement from 2.3 to 2.8. The associated alert was triggered by an "Improper Resource Shutdown" vulnerability in older PyTorch versions.
*   **[OPEN] RFC: URML for Policy Deployment Envelopes** ([#2259](https://github.com/DLR-RM/stable-baselines3/issues/2259)): Author *idoco2003* introduced a Request for Comment (RFC) for integrating SB3 policies with URML (open robot intent language). The proposal outlines turning an SB3 trained policy into a typed primitive that is validated against a robot's declared capabilities and safety envelope before dispatch. This highlights a growing industry trend toward formal safety verification in RL deployments.

### 4. Key PR Progress
*   **[CLOSED] PyTorch Minimum Version Bump** ([#2252](https://github.com/DLR-RM/stable-baselines3/pull/2252)): The PR designed to bump the PyTorch dependency to >2.8 to resolve Dependabot transitive alerts has been closed. This resolves the corresponding issue #2250, indicating maintainers have chosen a specific resolution path for the security advisory.
*   **[OPEN] Opt-in Tanh Squashing for DiagGaussianDistribution** ([#2249](https://github.com/DLR-RM/stable-baselines3/pull/2249)): An ongoing (LLM-assisted) PR proposing an opt-in `squash_mean_actions` policy argument for A2C and PPO. By wrapping the Gaussian mean action network in `nn.Tanh()`, this feature allows developers to strictly constrain continuous action outputs without relying entirely on underlying action clipping logic. 

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains a foundational pillar in the applied Reinforcement Learning ecosystem. Today's digest perfectly illustrates its dual role in the modern RL stack: 
1. **Supply Chain Security:** As RL transitions from research to production, transitive vulnerabilities in heavy dependencies like PyTorch pose significant roadblocks. The maintainers' active triage of CVEs ensures that enterprise pipelines don't break due to unaddressed security advisories.
2. **Safe Sim-to-Real Deployment:** The introduction of URML integration discussions (#2259) showcases that SB3 is not just a training wrapper, but an inference engine (via `model.predict()`) deeply embedded in real-world robotics. Bridging SB3 policies with formal safety envelopes is critical for deploying reliable robotic intent systems.

</details>