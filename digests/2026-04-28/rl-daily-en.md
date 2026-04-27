# RL Open Source Daily Digest 2026-04-28

> Generated: 2026-04-27 22:14 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem on April 28, 2026, shows a distinct two-tier structure. A highly active upper tier—composed of LLM post-training frameworks (verl, AReaL, TRL, OpenRLHF, slime, Open Instruct) and orchestration platforms (ROCK, ROLL)—is driving rapid iteration to support massive MoE models, Vision-Language Models (VLMs), and agentic workflows. Meanwhile, the lower tier, consisting of traditional foundational RL libraries (Gymnasium, PettingZoo, torchtune, CleanRL, rl_games, Stable Baselines3, Tianshou), experienced minimal to zero feature activity, focusing instead on minor maintenance, static typing, or dependency bumps.

## Activity Comparison
Activity was dominated by large-scale RLHF/GRPO training frameworks. Traditional RL environments and algorithms remained mostly stable or inactive.

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 33 | 54 | 0 | Architectural refactors for multi-turn agents; Ascend NPU unification. |
| **AReaL** | 8 | 20 | 0 | VLM memory fixes; Next-gen inference integration (SGLang/Megatron). |
| **TRL** | 4 | 19 | 0 | GRPO robustness; PEFT API standardization; VLM tool-calling support. |
| **ROCK** | 4 | 6 | 0 | Production hardening; Ray cluster stability and OOM fixes. |
| **slime** | 3 | 6 | 0 | Distributed RL efficiency; LoRA + GRPO support in Megatron. |
| **OpenRLHF** | 0 | 5 | 0 | Potential migration away from DeepSpeed to HuggingFace AutoModel. |
| **Open Instruct**| 1 | 5 | 0 | FSDP2/vLLM memory sync fixes for GRPO pipelines. |
| **Gymnasium** | 0 | 6 | 0 | Codebase maturation; enforcing strict 100% static typing. |
| **ROLL** | 0 | 2 | 0 | Hardware diversification (Ascend NPU) and Atropos env integration. |
| **torchtune** | 0 | 1 | 0 | Adding local-first, wandb-compatible telemetry (Trackio). |
| **PettingZoo** | 0 | 0 | 1 | Dependency maintenance (Ray 2.7 -> 2.55 bump). |
| **CleanRL** | 0 | 0 | 0 | *No activity.* |
| **rl_games** | 0 | 0 | 0 | *No activity.* |
| **Stable Baselines3**| 0 | 0 | 0 | *No activity.* |
| **Tianshou** | 0 | 0 | 0 | *No activity.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Agentic & Multi-turn RL:** Frameworks are rapidly evolving beyond single-turn prompt-response pairs. verl is isolating agent loop managers, TRL is patching GRPO for multimodal tool-calling, and OpenRLHF is implementing SFT masking for multi-turn "thinking" templates.
*   **Advanced Policy Optimizations:** To handle complex reasoning and scale, new algorithms are being integrated directly into training stacks, such as SAPO policy loss in slime and the Muon optimizer in AReaL.
*   **VLM-Centric RLHF:** Post-training is shifting from text-only to multimodal. AReaL and TRL prioritized fixing critical CPU OOM bugs and gradient errors associated with Vision-Language Models (VLMs).

**Engineering & Infrastructure Signals**
*   **Hardware Diversification & Agnosticism:** To mitigate GPU compute constraints, verl, ROLL, and AReaL are heavily pushing Ascend NPU compatibility. Simultaneously, verl is resolving critical failures on NVIDIA's new Blackwell FP8 architecture.
*   **Democratization of Distributed Compute:** Projects are actively reducing VRAM bottlenecks to enable large-scale training on fewer GPUs. Notable efforts include TRL's 50% VRAM reduction via chunked cross-entropy, slime's integration of Megatron-Bridge LoRA for GRPO, and OpenRLHF's potential shift away from a monolithic DeepSpeed backend to standard AutoModels.
*   **Local-First Telemetry:** A shared push towards data sovereignty and cost control is emerging, highlighted by simultaneous PRs in OpenRLHF and torchtune to integrate Trackio, a local-first, SQLite-based alternative to cloud-only telemetry tools like Weights & Biases.

## Differentiation Analysis
The ecosystem is splitting into highly specialized domains:
*   **The Post-Training Heavyweights (verl, AReaL, slime):** These projects compete on extreme scale and deep distributed systems engineering. They are differentiated by their tight coupling with high-throughput inference backends (SGLang, vLLM, Megatron) and aggressive memory management (FSDP2 chunking) required to RLHF-tune 100B+ parameter MoE models.
*   **The Accessible Stack (TRL, OpenRLHF, Open Instruct):** Differentiated by their deep integration with the HuggingFace ecosystem. They prioritize modular APIs, ease of use, and rapid adoption of the latest open-weight models (e.g., Qwen3, GLM-5), relying on standard wrappers like PEFT and Accelerate rather than writing custom distributed kernels.
*   **Orchestration & Abstraction Layers (ROCK, ROLL, Gymnasium):** Rather than focusing on training algorithms, these platforms differentiate by abstracting the underlying cluster management. ROCK focuses on enterprise-grade fault tolerance (Ray cluster stability), while Gymnasium and PettingZoo serve as the immutable foundational APIs for environment standardization.

## Community Momentum & Maturity
*   **Enterprise Maturation:** The rapid patching of OOM errors, Ray reconnection bugs, and FSDP deadlocks across verl, AReaL, and ROCK indicates that these frameworks are transitioning from research playgrounds to enterprise-grade production infrastructure.
*   **Ecosystem Stability:** The lack of activity in foundational algorithm libraries (Stable Baselines3, CleanRL, Tianshou) signals that core single-agent and traditional multi-agent RL algorithms are a "solved" engineering problem, with momentum entirely shifting toward LLM post-training.
*   **Maintainer Burden:** Key ecosystems are highly reliant on a small cohort of prolific contributors driving massive PR volumes (e.g., `finbarrtimbers` in Open Instruct, `jorenham` in Gymnasium, `albertvillanova` in TRL, `hijkzzz` in OpenRLHF).

## Trend Signals
*   **Inference-Training Convergence:** The boundary between inference and training is blurring. Efficient RLHF now relies as heavily on inference engine throughput (vLLM/SGLang integrations, P/P support) as it does on training dynamics, dictating future architectural overhauls.
*   **Post-Blackwell Optimization:** Infrastructure teams are actively grappling with the architectural nuances of next-gen hardware (e.g., Blackwell FP8 E2E failures), signaling an impending wave of framework updates required to unlock next-generation cluster efficiencies.
*   **Rise of Fault-Tolerant RL:** As models require massive distributed clusters to train, ephemeral compute failures are becoming standard. Proposals like DeepSeek-V4 fault tolerance (AReaL) and improved weight-sync chunking (verl) show that system resilience is the next competitive frontier.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROLL 
**Date:** 2026-04-28 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

## 1. Today's Highlights
The ROLL framework is showing active infrastructure and ecosystem expansion. Over the last 24 hours, activity has centered on hardware compatibility and environment integration. Two significant open PRs were updated: one introducing native support for Huawei Ascend NPUs, and another integrating NousResearch's Atropos environments. No new releases or issues were reported.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Important Issues
*   **No new or updated issues** were filed in the last 24 hours. 

## 4. Key PR Progress
*   **[PR #428](https://github.com/alibaba/ROLL/pull/428) [WIP]: Ascend NPU Dockerfiles & Documentation**
    *   *Author:* UsernameFull | *Updated:* 2026-04-27
    *   *Details:* This work-in-progress PR adds Docker image build files and usage documentation for the Ascend NPU architecture (specifically targeting the Atlas 900 A2/A3 PODc). It also includes synchronized Chinese documentation (`ascend_usage`), indicating a push for broader hardware accessibility in the AI chip ecosystem.
*   **[PR #426](https://github.com/alibaba/ROLL/pull/426): Atropos Environment Integration**
    *   *Author:* RUFFY-369 | *Updated:* 2026-04-27
    *   *Details:* This PR proposes the integration of [Atropos](https://github.com/NousResearch/atropos) as a modular agentic adapter within ROLL. It introduces a "Universal Reward Bridge" that acts as a configurable adapter for Atropos environments, allowing ROLL to natively process diverse agentic RL tasks.

## 5. Why This Project Matters in Today's RL Landscape
In the current reinforcement learning landscape—especially for training Large Language Models (LLMs) via RLHF/RLAIF—infrastructure must be scalable, hardware-agnostic, and highly composable. Today's PR activity for ROLL highlights two major industry trends:
1.  **Hardware Diversification:** By adding support for Ascend NPUs ([PR #428](https://github.com/alibaba/ROLL/pull/428)), ROLL is positioning itself as a vendor-agnostic framework, which is critical for global AI teams navigating GPU compute constraints and diversifying their hardware supply chains.
2.  **Modular Agentic Environments:** The integration of Atropos ([PR #426](https://github.com/alibaba/ROLL/pull/426)) reflects the shift toward agentic RL workflows. Standardizing how environments and reward signals communicate (via the proposed Universal Reward Bridge) reduces friction for researchers testing novel LLM agent behaviors.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for Alibaba's ROCK project.

# ROCK (Reinforcement Learning Open-Source Ecosystem) Daily Digest
**Date:** 2026-04-28

### 1. Today's Highlights
Activity on the ROCK repository over the last 24 hours was heavily focused on platform stability and infrastructure expansion. There were **0 new releases**, but developers merged critical bug fixes addressing Ray cluster instabilities and BashJob execution workflows, while advancing support for Windows environments and Alibaba Cloud Function Compute. 

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
Infrastructure reliability was the primary theme in today's issue tracker, alongside a notable fix request for BashJob artifact handling:
*   **Ray Cluster OOM & Init Failures:** Two related bugs were reported highlighting critical failure modes during Ray reconnections. 
    *   Issue [#904](https://github.com/alibaba/ROCK/issues/904): `ray.init()` failures during background job reconnections can take down the admin-write pod.
    *   Issue [#902](https://github.com/alibaba/ROCK/issues/902): Failed Ray re-inits spawn multiple local Ray instances, resulting in Out-Of-Memory (OOM) errors in the admin process.
*   **BashJob OSS Artifacts Lost in Submit-Only Mode:** Issue [#898](https://github.com/alibaba/ROCK/issues/898) pointed out that artifacts are not uploaded and OSS credentials from `environment.env` fail to apply if users execute `Job.submit()` without subsequently calling `Job.collect()`. 
*   **Housekeeping:** Issue [#900](https://github.com/alibaba/ROCK/issues/900) was opened to remove the unused `need_database` test marker.

### 4. Key PR Progress
Rapid response from maintainers resulted in immediate patches for the above issues, alongside progress on long-awaited features:
*   **Ray Stability Patches:** 
    *   PR [#905](https://github.com/alibaba/ROCK/pull/905) introduces exception handling for `ray.init()` to resolve the crashing admin pod (Closes [#904](https://github.com/alibaba/ROCK/issues/904)).
    *   PR [#903](https://github.com/alibaba/ROCK/pull/903) fixes the multi-instance spawn causing OOM (Closes [#902](https://github.com/alibaba/ROCK/issues/902)).
*   **BashJob Execution Overhaul:** PR [#899](https://github.com/alibaba/ROCK/pull/899) was merged, shifting OSS uploads to script injections (prologue/epilogue wrappers) to ensure artifacts are captured even in `submit-only` workflows (Closes [#898](https://github.com/alibaba/ROCK/issues/898)).
*   **Observability:** PR [#742](https://github.com/alibaba/ROCK/pull/742) was merged, adding rocklet support for worker-level Docker root directory and log directory usage reporting via OTLP metrics (Closes [#741](https://github.com/alibaba/ROCK/issues/741)).
*   **New Feature Progress:** 
    *   PR [#867](https://github.com/alibaba/ROCK/pull/867): Opened support for Alibaba Function Compute serverless runtime operators.
    *   PR [#861](https://github.com/alibaba/ROCK/pull/861): Continued development towards native Windows PowerShell support.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning (RL) research is often bottlenecked by infrastructure—specifically, the complexity of reliably managing distributed compute, cluster networking (like Ray), and storage. 

Today's activity in the ROCK repository perfectly illustrates the critical engineering required to productionalize RL. The resolution of the Ray re-initialization bugs and the clever script-injection fix for BashJob artifacts show a maturing focus on **fault tolerance and state management**. By mitigating OOM crashes and ensuring artifact persistence during asymmetric job executions, ROCK is solidifying its position as a robust, enterprise-grade orchestration platform, enabling RL researchers to run large-scale, distributed training jobs without getting bogged down by underlying system administration.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: slime (THUDM)
**Date:** 2026-04-28

Here is your daily briefing on the `slime` reinforcement learning framework ecosystem.

## 1. Today's Highlights
The `slime` ecosystem saw significant activity today, driven largely by backend enhancements for large-scale models. Key developments include critical bug fixes for Context Parallelism (CP) and Vision-Language Models (VLMs), alongside major feature expansions. Notably, the community is actively extending the framework's algorithmic capabilities with the addition of the **SAPO policy loss** and pushing forward **Megatron-Bridge LoRA** support for GRPO, signaling a strong push toward highly efficient, distributed RLHF/GRPO training.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **CP Layout Mismatch Scrambling Tokens:** Issue [#1871](https://github.com/THUDM/slime/issues/1871) reports a silent, critical bug where enabling `--allgather-cp` with `context_parallel_size > 1` causes a mismatch between the legacy zigzag CP layout and the newer contiguous CP layout in `hf_attention.py`.
*   **Qwen3 Pipeline Parallelism Error:** Issue [#1713](https://github.com/THUDM/slime/issues/1713) highlights a persistent training failure when running Qwen3-5 with Pipeline Parallelism (PP) in the Megatron backend.
*   **GLM-5 MTP Training Inquiry:** A user queried support for jointly training Multi-Token Prediction (MTP) layers for GLM-5 in Issue [#1870](https://github.com/THUDM/slime/issues/1870), noting current incompatibilities with the `allgather_cp` configuration.

## 4. Key PR Progress
*   **Algorithm Expansion (SAPO):** PR [#1864](https://github.com/THUDM/slime/pull/1864) implements the SAPO policy-loss objective, introducing configurable positive/negative advantage gates (`--sapo-tau-pos`, `--sapo-tau-neg`) as an alternative to clipped PPO.
*   **Scalable GRPO (LoRA Integration):** PR [#1865](https://github.com/THUDM/slime/pull/1865) introduces Megatron-Bridge LoRA support for dense GRPO actor training. This allows for highly memory-efficient PEFT directly within the Megatron backend.
*   **VLM CI & Bug Fixes:** PR [#1814](https://github.com/THUDM/slime/pull/1814) adds permanent CI smoke-testing for the Qwen3.5-4B VLM. Concurrently, PR [#1727](https://github.com/THUDM/slime/pull/1727) backports an `sglang` fix to resolve visual weight loading map failures for Qwen3-VL. 
*   **Infrastructure Updates:** PR [#1867](https://github.com/THUDM/slime/pull/1867) upgrades the core Megatron dependency to the latest commit, and PR [#1866](https://github.com/THUDM/slime/pull/1866) refactored the critic config naming convention to a generalized Megatron config.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs scale exponentially, memory and compute efficiency during post-training (RLHF/GRPO) become the primary bottlenecks. `slime` is solving this at the systems level by bridging the gap between high-level RL algorithms and aggressive distributed backends like Megatron. Today's focus on integrating **LoRA with GRPO** and resolving complex Context Parallelism layout bugs demonstrates that `slime` is actively providing the infrastructure necessary to RLHF-tune massive, 100B+ parameter models (like GLM-5 and Qwen3) efficiently across massive GPU clusters.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-04-28

## 1. Today's Highlights
The AReaL ecosystem saw a massive surge in activity today with **20 PRs updated** and **8 issues touched**, signaling rapid iteration toward production-grade, large-scale RLHF infrastructure. The focus is squarely on three fronts: **Vision-Language Model (VLM) scalability**, **next-generation model compatibility (Qwen3.5 & DeepSeek-V4)**, and **foundational inference/training infrastructure refactoring**.

## 2. Releases
*   **New Releases:** None. The project is currently in an active development/refactoring phase, likely building toward the next major stability milestone.

## 3. Important Issues
*   **Qwen3.5 Environment Fragility** ([#1155](https://github.com/inclusionAI/AReaL/issues/1155), [#1261](https://github.com/inclusionAI/AReaL/issues/1261)): Users are reporting friction in finding compatible dependency versions for `transformers`, `vLLM`, and `SGLang` when running Qwen3.5. This highlights the ongoing integration challenges in the fast-moving open-weight LLM ecosystem.
*   **VLM CPU OOM & Unbounded Memory Leaks** ([#1271](https://github.com/inclusionAI/AReaL/issues/1271), [#1209](https://github.com/inclusionAI/AReaL/issues/1209)): Critical memory management bugs were flagged for multimodal training. Issue [#1271](https://github.com/inclusionAI/AReaL/issues/1271) specifically notes CPU Out-Of-Memory errors caused by duplicated image tensors in FSDP, while [#1209](https://github.com/inclusionAI/AReaL/issues/1209) identifies an unbounded leak in `RTensor._fetch_buffer` during long-running VLM training.
*   **DeepSeek-V4 Fault Tolerance RFC** ([#1279](https://github.com/inclusionAI/AReaL/issues/1279)): A proposal to implement preemptible inference logic inspired by the DeepSeek-V4 infrastructure. This is a crucial step for AReaL to reliably run RL at scale on ephemeral/cloud compute.
*   **Ray Core RDT Integration** ([#1243](https://github.com/inclusionAI/AReaL/issues/1243)): An RFC to integrate Ray Core RDT for distributed weight syncing, pointing to aggressive performance optimizations for large-scale actor/weight updates.

## 4. Key PR Progress
*   **Advanced VLM & Parallelism Support:** PR [#1281](https://github.com/inclusionAI/AReaL/pull/1281) introduces Megatron support for **Qwen2.5-VL** (validated on H100s with TP/PP/CP), while [#1162](https://github.com/inclusionAI/AReaL/pull/1162) pushes the envelope by bringing **Pipeline Parallelism (PP)** to the SGLang inference backend.
*   **Inference Service Overhaul:** Continuing the "v2" architectural refactoring, PRs [#1265](https://github.com/inclusionAI/AReaL/pull/1265) (unifying controller configs) and [#1253](https://github.com/inclusionAI/AReaL/pull/1253) (parallelizing HTTP clients) landed today. Additionally, PR [#1276](https://github.com/inclusionAI/AReaL/pull/1276) added `offload/onload` endpoints to help shared GPUs efficiently swap memory between training and inference.
*   **Critical Bug Fixes:** The CPU OOM issue for multimodal models was swiftly resolved via PR [#1272](https://github.com/inclusionAI/AReaL/pull/1272) by avoiding the duplication of `pixel_values`. A breaking API change in `transformers>=5.0` (where `apply_chat_template` returns a dict instead of a list) was patched centrally in PR [#1280](https://github.com/inclusionAI/AReaL/pull/1280).
*   **New Optimizer & Sandbox Integrations:** Support for the **Muon optimizer** ([#1270](https://github.com/inclusionAI/AReaL/pull/1270)) is now in progress. Support for **Daytona cloud sandbox** environments for safe tool-use rollouts ([#1231](https://github.com/inclusionAI/AReaL/pull/1231)) is under active review.

## 5. Why This Project Matters in Today's RL Landscape
As RLHF and post-training shift from text-only to multimodal paradigms (VLMs), the underlying infrastructure bottlenecks are shifting from pure FLOPs to **memory management, dependency orchestration, and inference-engine throughput**. 

AReaL's current development cycle ([#1281](https://github.com/inclusionAI/AReaL/pull/1281), [#1272](https://github.com/inclusionAI/AReaL/pull/1272)) proves that the project is aggressively targeting exactly these bottlenecks. By deepening integration with high-throughput engines like Megatron and SGLang ([#1162](https://github.com/inclusionAI/AReaL/pull/1162)), preempting infra failures via DeepSeek-V4-style fault tolerance ([#1279](https://github.com/inclusionAI/AReaL/issues/1279)), and exploring next-gen optimizers like Muon ([#1270](https://github.com/inclusionAI/AReaL/pull/1270)), AReaL is cementing itself as a bleeding-edge, distributed systems answer to the scaling requirements of modern foundation model post-training.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL 
**Date:** 2026-04-28 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Activity on TRL today focused heavily on **infrastructure hardening, bug squashing for multimodal models, and API alignment across core trainers**. Significant effort was directed toward standardizing PEFT integration, resolving edge-case gradient bugs in GRPO, and improving VRAM efficiency for SFT. The volume of updates (19 PRs, 4 Issues) indicates active maintenance and feature iteration. 

## 2. Releases
*   **None.** No new stable versions were cut in the last 24 hours. 

## 3. Important Issues
*   **Multimodal Tool Calling Crashes in GRPOTrainer ([#5663](https://github.com/huggingface/trl/issues/5663)):** A new issue reports that `GRPOTrainer` crashes during the model forward pass when environment tools return multimodal content (e.g., PIL images). This highlights a current limitation in TRL's agentic RL pipelines for Vision-Language Models (VLMs).
*   **TPOTrainer NaN Eval Loss ([#5662](https://github.com/huggingface/trl/issues/5662)):** The experimental `TPOTrainer` is returning `NaN` for `eval_loss` despite normal, finite `train_loss`. 
*   **PPOTrainer Parameter Update Clarification ([#5645](https://github.com/huggingface/trl/issues/5645)):** A user raised a technical query regarding whether `PPOTrainer` (experimental) utilizes `mini_batch_size` or `local_batch_size` for `optimizer.step()`, pointing directly to the core RL optimization loop (Lines 804-882).
*   **CI Ruff Check Failure ([#5633](https://github.com/huggingface/trl/issues/5633)):** Resolved/Closed. CI code quality checks were failing due to a missing `ruff` directory error.

## 4. Key PR Progress
*   **VRAM Optimization & Agentic RL:**
    *   **[#5575](https://github.com/huggingface/trl/pull/5575) (Closed):** Introduced chunked cross-entropy loss for SFT, achieving up to a 50% reduction in peak VRAM usage.
    *   **[#5655](https://github.com/huggingface/trl/pull/5655) (Closed) & [#5656](https://github.com/huggingface/trl/pull/5656) (Closed):** Hardened the `AsyncGRPOTrainer` for robust async rollouts and added sentence-level importance sampling for Ling 2.0 / LPO training paths.
*   **GRPO Algorithm & VLM Fixes:**
    *   **[#5640](https://github.com/huggingface/trl/pull/5640) (Open):** Resolves spurious KL gradients in `GRPOTrainer` that occurred when reward groups had zero standard deviation.
    *   **[#5644](https://github.com/huggingface/trl/pull/5644) (Open):** Fixes a `ValueError` crash in `GRPOTrainer` for text-only Gemma-3 models that strictly require `token_type_ids`.
    *   **[#5473](https://github.com/huggingface/trl/pull/5473) (Open):** Fixed VLM training tests and added XPU support for Flash Attention 2.
*   **API Standardization & Developer Experience:**
    *   **PEFT & KTO Alignment ([#5664](https://github.com/huggingface/trl/pull/5664), [#5665](https://github.com/huggingface/trl/pull/5665), [#5666](https://github.com/huggingface/trl/pull/5666), [#5661](https://github.com/huggingface/trl/pull/5661)):** Four PRs by `albertvillanova` systematically refactored core and experimental trainers. They removed legacy parameters (`model_init` ([#5659](https://github.com/huggingface/trl/pull/5659)), `preprocess_logits_for_metrics` ([#5660](https://github.com/huggingface/trl/pull/5660))), fixed type hints, and enforced standard `ImportError` raises if `peft_config` is passed without the `peft` library installed.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) become standard post-training steps for state-of-the-art open-source LLMs, TRL remains the industry's de-facto execution framework. 

Today's digest reveals two major industry trends: 
1. **The Rise of Multimodal & Agentic RL:** As models evolve from text-only generators to VLMs capable of using tools (e.g., browser automation, code execution), TRL is actively patching infrastructure (VLM GRPO rollouts, Flash Attention tests) to support complex, multi-step environments.
2. **Hardware-Aware Scaling:** Algorithmic implementations like chunked cross-entropy loss (PR [#5575](https://github.com/huggingface/trl/pull/5575)) prove that the community is aggressively optimizing RL fine-tuning for GPU memory constraints, democratizing massive-scale training for researchers and enterprise alike.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-04-28 | **Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

## 1. Today's Highlights
Activity over the last 24 hours shows no new releases or issues, but reveals a highly active development cycle focused on **SFT data flexibility**, **reward function clarity**, and **architectural overhauls**. Five open PRs were updated, signaling steady progress toward a more robust and modular RLHF pipeline.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
**No new issues** were opened or updated in the last 24 hours. 

## 4. Key PR Progress
The development focus is currently divided between improving experiment tracking, foundational architecture changes, and refining SFT/RLHF data preprocessing.

*   **[Architectural Shift] [OPEN] Replace Deepspeed backend with Automodel** ([PR #1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226))
    *   *Author:* hijkzzz 
    *   *Summary:* A major structural proposal to replace the DeepSpeed backend with HuggingFace `AutoModel`. This points toward a potential simplification of the distributed training stack, possibly leveraging DeepSpeed's ZeRO implicitly via HF Accelerate or similar wrappers.
*   **[Experiment Tracking] [OPEN] Add Trackio logger backend** ([PR #1230](https://github.com/OpenRLHF/OpenRLHF/pull/1230))
    *   *Author:* abidlabs
    *   *Summary:* Introduces [Trackio](https://github.com/gradio-app/trackio) as an experiment tracking backend alongside Weights & Biases and TensorBoard. Trackio offers a local-first, free, wandb-compatible API utilizing local SQLite, providing a frictionless tracking alternative for local RLHF runs.
*   **[RLHF Training] [OPEN] Clarify reward normalization behavior for custom reward sources** ([PR #1229](https://github.com/OpenRLHF/OpenRLHF/pull/1229))
    *   *Author:* taivu1998
    *   *Summary:* Adds explicit documentation and a CLI warning to clarify that `--reward.normalize_enable` applies *only* to local reward-model/critic outputs, not precomputed custom reward sources. A crucial clarification for practitioners using programmatic or API-based custom reward functions.
*   **[SFT Preprocessing] [OPEN] Add SFT tools field support for chat templates** ([PR #1228](https://github.com/OpenRLHF/OpenRLHF/pull/1228))
    *   *Author:* taivu1998
    *   *Summary:* Forwards an optional row-level `tools` field during SFT chat-template rendering (`--data.apply_chat_template`). This enables native tool-use/agent fine-tuning across various preprocessing paths (split, full-conversation, and multiturn).
*   **[Bug Fix] [OPEN] Fix multi-turn SFT masks for Qwen3 thinking templates** ([PR #1227](https://github.com/OpenRLHF/OpenRLHF/pull/1227))
    *   *Author:* taivu1998
    *   *Summary:* Resolves an issue where multi-turn SFT assistant masking failed for Qwen3/DeepSeek-style "thinking" templates. The previous prefix-based masking implementation failed to align with the final full chat-template rendering, potentially causing catastrophic forgetting of reasoning tokens.

## 5. Why This Project Matters in Today's RL Landscape
As open-source Language Models (like Llama, Qwen, and DeepSeek) push the boundaries of reasoning and agentic capabilities, aligning these models accurately using RLHF/PPO is more critical than ever. OpenRLHF remains the bleeding-edge open-source stack for production-level RLHF. 

Today's digest highlights a maturing ecosystem: maintainers are doing the heavy lifting to ensure complex multi-turn reasoning templates (like Qwen3's thinking tokens) are masked correctly, and that tool-calling is natively supported in SFT stages. Furthermore, the potential migration away from a monolithic DeepSpeed backend (PR #1226) towards `AutoModel` reflects a broader industry trend of standardizing LLM training infrastructure around flexible, modular HuggingFace ecosystems.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl-project/verl
**Date:** 2026-04-28

Here is the daily briefing for the `verl` (Volcano Engine Reinforcement Learning) open-source ecosystem, summarizing the top 54 pull requests and 33 issues updated over the past 24 hours.

---

### 1. Today's Highlights
Activity in the `verl` ecosystem is currently dominated by major architectural refactors and a strong push to unify compute backends. 
* **Multi-turn Agent Capabilities:** A new PR introduces per-turn `routed_experts` concatenation for multi-turn agent loops ([PR #6177](https://github.com/verl-project/verl/pull/6177)), preventing the loss of earlier routing states during tool-calling. A breaking refactor is also underway to decouple `LLMServerManager` from `AgentLoopManager` to allow drop-in replacements like NVIDIA NeMo-Gym ([PR #6129](https://github.com/verl-project/verl/pull/6129)).
* **Ascend NPU Unification:** Huawei's Ascend community has opened a meta-issue ([Issue #6164](https://github.com/verl-project/verl/issues/6164)) to unify scattered GPU and NPU training scripts, directly addressing recent user complaints about inconsistent documentation and mixed script directories (e.g., [Issue #6143](https://github.com/verl-project/verl/issues/6143), [Issue #6139](https://github.com/verl-project/verl/issues/6139)).
* **Dynamic Batching Fixes:** A critical bug causing FSDP deadlocks due to unpassed `dp_group` in `prepare_dynamic_batch` has been identified and documented by the community ([Issue #6176](https://github.com/verl-project/verl/issues/6176), [Issue #6178](https://github.com/verl-project/verl/issues/6178)).

---

### 2. Releases
* **No new releases** were cut in the last 24 hours. The project is likely stabilizing for its 26Q2 roadmap milestones ([Issue #5836](https://github.com/verl-project/verl/issues/5836)).

---

### 3. Important Issues
**Critical Bugs & Performance:**
* **FSDP Deadlock on Dynamic Batching:** `dp_actor.py` fails to pass `dp_group`, causing massive synchronization mismatches ([Issue #6176](https://github.com/verl-project/verl/issues/6176)).
* **Slow GRPO Training on Ascend 910B:** `update_actor` is taking ~800 seconds per step with Qwen3-4B + FSDP2 ([Issue #6010](https://github.com/verl-project/verl/issues/6010)).
* **Blackwell FP8 E2E Training Failure:** Users are hitting bugs running end-to-end FP8 training on the new Blackwell architecture ([Issue #6172](https://github.com/verl-project/verl/issues/6172)).
* **Multi-modal Dataset Filter Slowdown:** A recent change from `.pop()` to `.get()` in `_build_messages` has severely degraded performance during the multimodal data filtering phase ([Issue #6145](https://github.com/verl-project/verl/issues/6145)).
* **Distillation Nested Tensor Crash:** A hardcoding in `nested_tensor_from_tensor_list` assumes the ragged dimension is always last, breaking teacher `logprobs` in distillation workflows ([Issue #6152](https://github.com/verl-project/verl/issues/6152)).

**Feature Requests & Roadmap:**
* **Architecture Planning:** Users are requesting support for FSDP+EP (Expert Parallelism) for massive 235B+ models like Qwen ([Issue #6124](https://github.com/verl-project/verl/issues/6124)) and requesting accelerated timeline for Qwen3.6 support ([Issue #6130](https://github.com/verl-project/verl/issues/6130)).
* **Unified Skipping System:** An RFC proposes a managed skipping system for the RL workflow to speed up debugging ([Issue #5998](https://github.com/verl-project/verl/issues/5998)).

---

### 4. Key PR Progress
* **[Megatron-FSDP]** The highly anticipated support for using Megatron-FSDP as a training backend is making steady progress ([PR #5423](https://github.com/verl-project/verl/pull/5423)).
* **[Precision/Training Utils]** Fixed `torch.autocast` hardcoding to properly respect user-configured `param_dtype` in FSDP forward steps ([PR #6150](https://github.com/verl-project/verl/pull/6150)). Additionally, support for per-sample temperatures with fused linear cross-entropy has been added ([PR #6110](https://github.com/verl-project/verl/pull/6110)).
* **[Rollout/Checkpointing]** Implemented chunking for large weights in the NCCL/NIXL checkpoint engine, significantly reducing CUDA IPC peak memory usage during weight synchronization ([PR #6091](https://github.com/verl-project/verl/pull/6091)).
* **[Async Training]** Asynchronous training now supports Online Policy Distillation (OPD) ([PR #6056](https://github.com/verl-project/verl/pull/6056)).
* **[Project Setup]** A draft PR is exploring an opt-in `uv setup` for managing dependencies, tackling long-standing environment installation complexities ([PR #6179](https://github.com/verl-project/verl/pull/6179)).

---

### 5. Why This Project Matters in Today's RL Landscape
The current activity in `verl` perfectly illustrates the maturation of open-source post-training infrastructure. While early LLM training ecosystems focused solely on GPU-based SFT or basic PPO, `verl` is actively solving next-generation RL bottlenecks:
1. **Hardware Agnosticism:** By heavily iterating on Ascend NPU compatibility alongside NVIDIA Grace/Blackwell architectures, `verl` is positioning itself as the premier hardware-agnostic RL framework, crucial for global AI infrastructures facing GPU export constraints.
2. **Agent Loops vs. Standard RL:** The architectural refactor to isolate `LLMServerManager` ([PR #6129](https://github.com/verl-project/verl/pull/6129)) and fixes to routed experts ([PR #6177](https://github.com/verl-project/verl/pull/6177)) show a necessary shift from traditional prompt-response pairs toward complex, multi-turn tool-calling environments required for training true Agents. 
3. **Memory/Sequence Optimization:** Dealing with 235B+ MoE models requires advanced memory management (Megatron-FSDP, chunked NCCL weight syncing), pushing the boundaries of what is mathematically possible to fit in active VRAM during the highly memory-intensive RLHF/GRPO phases.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL Open-Source Ecosystem Daily Digest: torchtune
**Date:** 2026-04-28

Here is the daily brief for the PyTorch `torchtune` repository.

### 1. Today's Highlights
Activity in `torchtune` over the last 24 hours was minimal but highly focused, characterized by a single pull request aimed at expanding the framework's experiment tracking capabilities. There were no new releases, issues, or bug reports.

### 2. Releases
**None.** 
No new versions or tags were published on 2026-04-28.

### 3. Important Issues
**None.** 
Zero issues were opened or updated in the last 24 hours, indicating a period of stability or low user-friction following the latest release cycle.

### 4. Key PR Progress
*   **[OPEN] [Add TrackioLogger metric backend (PR #2963)](https://github.com/pytorch/torchtune/pull/2963)**
    *   **Author:** abidlabs
    *   **Summary:** This PR introduces a new `TrackioLogger` to `torchtune/training/metric_logging.py`, acting as a drop-in mirror for the existing `WandBLogger`. Trackio is pitched as a lightweight, local-first experiment tracker built on SQLite. It features a Weights & Biases (wandb)-compatible API with an optional sync feature to a Hugging Face Space.

### 5. Why This Project Matters in Today's RL Landscape
While `torchtune` is primarily recognized for fine-tuning Large Language Models (LLMs), its underlying infrastructure is increasingly critical to the modern Reinforcement Learning ecosystem, particularly in the era of **Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO)**. 

Today's PR highlights a growing trend in the open-source AI community: **data sovereignty and cost control**. By integrating a local-first, SQLite-based tracker like Trackio with a wandb-compatible API, the ecosystem is actively pushing back against the necessity of expensive, cloud-dependent telemetry tools. For independent researchers and startups training RL loops and reward models, having a free, lightweight, and local metric backend ensures that sensitive training dynamics and proprietary reward trajectories remain strictly on-premise, while still allowing seamless integration with remote portfolios (like Hugging Face Spaces) when chosen.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL daily digest for **2026-04-28** focusing on the `allenai/open-instruct` repository.

### 1. Today's Highlights
The Allen AI `open-instruct` ecosystem saw a high-velocity day of maintenance and debugging, driven almost entirely by developer `finbarrtimbers`. The primary focus was on hardening the infrastructure for Reinforcement Learning from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) workflows. Notable activities include fixing critical memory sync bugs in FSDP2/vLLM integrations and managing a complex revert chain to fix Python packaging. 

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **Spam/Misdirected Issue Activity:** The only open issue, **[#1639](https://github.com/allenai/open-instruct/issues/1639)**, appears to be bot spam or a misdirected cross-post regarding `.github/workflows/webpack.yml` (referencing the TON blockchain). This indicates a temporary lull in substantive user-reported feature requests or bug reports.

### 4. Key PR Progress
*   **🚀 Critical RL Training Fix:** **[#1642](https://github.com/allenai/open-instruct/pull/1642) [OPEN]** addresses a triad of bugs in `grpo.py` that prevented the OLMo-core / FSDP2 GRPO path from interfacing correctly with vLLM's native weight transfer API. This includes fixing FSDP2 root-module parameters that were causing illegal memory access during NCCL sends—a crucial patch for practitioners running distributed RL workloads.
*   **🔄 Packaging Revert Chaos Resolved:** PR **[#1637](https://github.com/allenai/open-instruct/pull/1637)**, which reapplied a necessary `pyproject.toml` packaging fix (migrating from `py-modules` to `[tool.setuptools.packages.find]`), was subsequently reverted by **[#1640](https://github.com/allenai/open-instruct/pull/1640)** to resolve a `CHANGELOG.md` conflict. 
*   **📊 Evaluation Infrastructure:** **[#1638](https://github.com/allenai/open-instruct/pull/1638) [OPEN]** introduced a new script (`submit_eval_jobs_new.py`) to submit Beaker evaluation jobs directly, supporting Hugging Face repos, Weka paths, and v2 spec YAML generation.
*   **🧪 SFT Parity Achieved:** **[#1620](https://github.com/allenai/open-instruct/pull/1620) [CLOSED]** successfully validated that `olmo_core_finetune.py` achieves step-by-step parity with a pure olmo-core Supervised Fine-Tuning (SFT) loop, resolving prior metric divergence issues.
*   **🛠️ Minor Update:** Experiment scripts were updated and merged via **[#1641](https://github.com/allenai/open-instruct/pull/1641)**.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community pushes towards efficient, distributed post-training paradigms, projects like `open-instruct` serve as the critical bridge between raw model architectures and deployable conversational agents. 

Today's activity highlights the exact growing pains the RL ecosystem faces: orchestrating vLLM inference engines with FSDP2 distributed training frameworks seamlessly. The bug fixes merged today (e.g., ironing out NCCL memory transfers during weight syncing in GRPO) represent the foundational "plumbing" required to train frontier open-source models without hitting Out-Of-Memory (OOM) errors or gradient synchronization deadlocks. Establishing robust SFT parity (PR #1620) and streamlining automated eval job submissions (PR #1638) further solidifies the reproducibility and reliability demanded by modern RLHF/GRPO research.

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

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-04-28 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
The Gymnasium ecosystem experienced a quiet day regarding releases and user-reported issues. However, repository activity was notably focused on **codebase hardening and static typing**, driven almost entirely by developer `jorenham` and Dependabot. The community also saw a recent contribution to add a novel 6-DoF aerospace environment to the official documentation.

### 2. Releases
*   **No new releases** were published today. 

### 3. Important Issues
*   **0 issues updated** in the last 24 hours. The issue tracker remains quiet, indicating a stable period for the core API.

### 4. Key PR Progress
A total of 6 pull requests saw updates. The dominant theme is strict type-hinting to improve developer experience and static analysis:

*   **[OPEN] Core Typing:** [PR #1566](https://github.com/Farama-Foundation/Gymnasium/pull/1566) fills in missing type annotations in `gymnasium.core`.
*   **[OPEN] Utils Typing:** [PR #1569](https://github.com/Farama-Foundation/Gymnasium/pull/1569) resolves 11 typing errors and achieves 100% type coverage in `gymnasium.utils`.
*   **[OPEN] Error Typing:** [PR #1567](https://github.com/Farama-Foundation/Gymnasium/pull/1567) explicitly annotates attributes within the `gymnasium.error` classes.
*   **[OPEN] Logger Typing:** [PR #1568](https://github.com/Farama-Foundation/Gymnasium/pull/1568) adds explicit `-> None` return annotations to `gymnasium.logger` functions to prevent type-checkers from defaulting to `Any`.
*   **[CLOSED] New Environment Docs:** [PR #1563](https://github.com/Farama-Foundation/Gymnasium/pull/1563) updated the third-party environments list to include the *Balloon Popping Challenge* (a 6-DoF rocket GNC simulation).
*   **[CLOSED] CI/CD Updates:** [PR #1565](https://github.com/Farama-Foundation/Gymnasium/pull/1565) bumped `actions/upload-artifact` from v4 to v7.

### 5. Why This Project Matters in Today's RL Landscape
While adding type hints (PRs #1566-#1569) might seem like a minor maintenance task, it represents a critical maturation step for the RL ecosystem. Gymnasium remains the *de facto* standard API for environment interaction in reinforcement learning. 

By enforcing strict, 100% type coverage across `core`, `utils`, and `error` modules, the Farama Foundation ensures that downstream frameworks (like Stable-Baselines3, Ray RLlib, and CleanRL) and enterprise users can integrate custom environments with absolute confidence. Proper static typing enables intelligent IDE autocompletion and catches integration bugs before runtime, which is vital for the notoriously brittle training pipelines common in modern RL research and deployment.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-04-28
**Project:** [PettingZoo](https://github.com/Farama-Foundation/PettingZoo) (Farama Foundation)

### 1. Today's Highlights
The PettingZoo repository experienced a quiet day in terms of community engagement, with zero new or updated Issues and Pull Requests. However, maintainers pushed a targeted patch release focused on modernizing external library dependencies within the project's educational tutorials.

### 2. Releases
*   **[PettingZoo 1.26.1](https://github.com/Farama-Foundation/PettingZoo/releases/tag/1.26.1)**
    *   **Summary:** A minor patch release aimed exclusively at dependency maintenance. 
    *   **Update:** Bumped the Ray dependency in tutorials from `2.7.0` to `2.55.0` ([PR #1329](https://github.com/Farama-Foundation/PettingZoo/pull/1329)). This is a significant version leap that ensures example code remains compatible with modern Ray/RLLib APIs.

### 3. Important Issues
*   **None.** (0 issues opened, closed, or updated in the last 24 hours).

### 4. Key PR Progress
*   **None.** (0 PRs opened, merged, or updated in the last 24 hours outside of the release).

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the industry-standard API and environment library for **Multi-Agent Reinforcement Learning (MARL)**, maintaining the same standardized Gymnasium API structure that researchers rely on for single-agent tasks. While today's update is minor from a feature standpoint, the massive jump in Ray compatibility (v2.7 to v2.55) is critical. It reflects the project's ongoing commitment to lowering the barrier to entry for distributed MARL research, ensuring that newcomers and researchers alike can seamlessly scale their multi-agent algorithms using modern distributed computing frameworks without breaking changes.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>