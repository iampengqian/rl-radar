# RL Open Source Daily Digest 2026-03-12

> Generated: 2026-03-12 03:19 UTC | Projects covered: 15

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

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem
**Date:** 2026-03-12 | **Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

## 1. Today's Highlights
The ROCK ecosystem saw the release of **v1.3.1**, introducing critical infrastructure updates for sandbox management, specifically CPU preemption and cleanup tasks. Simultaneously, the community is pushing for expanded observability and language support, evidenced by a merged feature for model service metrics and ongoing work on a TypeScript SDK.

## 2. Releases
### **[v1.3.1](https://github.com/alibaba/ROCK/releases/tag/v1.3.1)**
This release focuses on resource management and stability within the sandbox environment:
*   **Resource Optimization:** Added support for **Sandbox CPU Preemption**, allowing for more granular resource control.
*   **Spec Standardization:** Introduced features to create **standard spec sandboxes** (#571).
*   **Maintenance:** Implemented a file cleanup task to manage storage overhead.

## 3. Important Issues
*   **[OPEN] [[Feature] model service add metrics #614](https://github.com/alibaba/ROCK/issues/614)**
    *   **Author:** @FangwenDave
    *   **Context:** Proposes adding metrics to model services under the **Observation** category. This suggests a move towards better MLOps integration, allowing users to monitor RL model performance and latency in real-time.

## 4. Key PR Progress
*   **[CLOSED] [feat: add model service metrics #613](https://github.com/alibaba/ROCK/pull/613)**: Rapidly addressing the need for observability, this PR implements the metrics feature for model services, closing the loop on Issue #614 immediately after its creation.
*   **[OPEN] [feat(sdk): add ImageBuilder #615](https://github.com/alibaba/ROCK/pull/615)**: Proposes adding an `ImageBuilder` to the SDK to handle Docker builds for environment directories directly within the builder sandbox. This aims to streamline environment setup workflows.
*   **[OPEN] [Added TypeScript SDK #492](https://github.com/alibaba/ROCK/pull/492)**: A significant expansion of the ecosystem, this PR introduces a TypeScript SDK (`rl-rock`). It supports remote sandbox management, file system operations, and ESM/CommonJS builds, potentially bridging the gap between web-based agents and ROCK environments.

## 5. Why This Project Matters in Today's RL Landscape
ROCK (Resources and Orchestrations for Cloud Knowledge) is positioning itself as a robust infrastructure layer for RL, moving beyond simple algorithm implementation to **Production RL**.
*   **Infrastructure as Code:** By focusing on sandbox preemption and standard specs (v1.3.1), ROCK addresses the "dependency hell" often associated with deploying RL agents in diverse cloud environments.
*   **Observability:** The new metrics features reflect a maturing ecosystem where monitoring model inference performance is as critical as the training algorithm itself.
*   **Cross-Platform Accessibility:** The introduction of a TypeScript SDK signals a trend towards **Web-Based RL**, enabling developers to control complex cloud-native RL environments via Node.js and browser interfaces.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-12

## 1. Today's Highlights
The slime ecosystem released **v0.2.3**, introducing YAML-based engine configuration for complex rollouts. The development focus is heavily shifting toward specialized backend integrations (Mooncake, SGLang) and extending support for the latest model architectures (GLM-4.7-Flash, Qwen3.5).

## 2. Releases
*   **[v0.2.3](https://github.com/THUDM/slime/releases/tag/v0.2.3)**
    *   **Core Feature:** Introduced `sglang_config` support via YAML for engine group configuration, significantly simplifying rollout setup.
    *   **Improvements:** General bug fixes and stability enhancements.

## 3. Important Issues
*   **SGLang Tensor Parallelism Bug ([#1671](https://github.com/THUDM/slime/issues/1671)):**
    *   *Impact:* Users running `Qwen3.5-27B` with `gen_tp > 1` (multiple GPUs per engine) are experiencing garbled/repetitive inference outputs. This appears isolated to the specific SGLang version currently in use.
    *   *Status:* Closed, but indicates stability challenges with high-parallelism rollout generation.
*   **Architecture Support Gaps:**
    *   **Qwen3.5 & Megatron:** Users report missing modules (`peft_bridge`) and Pipeline Parallelism (PP) errors ([#1711](https://github.com/THUDM/slime/issues/1711), [#1713](https://github.com/THUDM/slime/issues/1713)).
    *   **GLM-4.7:** Environment setup friction regarding `transformers` version requirements ([#1706](https://github.com/THUDM/slime/issues/1706)).

## 4. Key PR Progress
*   **Performance Optimization:** PR [#1709](https://github.com/THUDM/slime/pull/1709) proposes integrating **Mooncake** as a backend for rollout data transfer.
    *   *Significance:* Addresses network bottlenecks in disaggregated RLHF setups (separate rollout and training nodes) by utilizing RDMA, potentially outperforming Ray Object Store.
*   **Model Support:**
    *   **GLM-4.7-Flash MTP:** Merged support for Multi-Token Prediction (MTP) training ([#1712](https://github.com/THUDM/slime/pull/1712)), including dynamic layer handling.
    *   **Qwen3.5 MTP:** Fixes for HF/Megatron bridge conversion errors ([#1702](https://github.com/THUDM/slime/pull/1702)).

## 5. Why This Project Matters in Today's RL Landscape
As LLMs evolve into complex reasoning agents, the infrastructure for **Reinforcement Learning on Language Models (RLHF/RLAIF)** is fracturing from standard NLP pipelines into distributed systems challenges. **Slime** is positioning itself as a high-performance bridge between massive model backends (like Megatron-LM/SGLang) and RL training loops. Today's updates—specifically the **Mooncake backend** and **MTP training support**—highlight the ecosystem's shift toward **disaggregated infrastructure** (separating inference from training) and **speculative decoding** techniques (MTP) to maintain throughput efficiency for 100B+ parameter models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest | 2026-03-12

Here is the analytical overview of today's activity for the **AReaL** (inclusionAI/AReaL) repository.

## 1. Today's Highlights
The ecosystem saw significant activity today with **12 updated PRs** and **3 active issues**. The primary focus is on **hardware extensibility and architecture**, specifically:
*   **NPU & VLM Expansion:** Major pushes for Ascend NPU support and Vision-Language Model (VLM) training capabilities.
*   **Infrastructure Modernization:** Introduction of LoRA infrastructures for the "Archon" engine and performance optimizations for FSDP2 training.

## 2. Releases
*   **Status:** No new official releases tagged today.
*   **Note:** PR [#1022](https://github.com/inclusionAI/AReaL/pull/1022) references documentation updates for a **v1.0.1 release** specifically for Ascend NPUs, suggesting a patch release may be imminent or restricted to that branch.

## 3. Important Issues
*   **LoRA Versioning Bug ([#1020](https://github.com/inclusionAI/AReaL/issues/1020)):** A reproducible bug was reported where `update_weights_lora_xccl` fails to correctly update LoRA names in `OpenAIServingModels`. This impacts version control for serving adapters.
*   **Model Family Support Inquiry ([#945](https://github.com/inclusionAI/AReaL/issues/945)):** High community interest in expanding RL training support to GPT-OSS, Kimi K2, and GLM4.5. The issue links back to the 2025 Q3 roadmap, indicating users are eager for broader model compatibility.
*   **Documentation Maintenance ([#1016](https://github.com/inclusionAI/AReaL/issues/1016)):** The WeChat group QR code in the documentation has expired.

## 4. Key PR Progress

### A. Hardware & Model Support (Ascend & VLMs)
*   **Ascend VLM Multi-Turn Training ([#972](https://github.com/inclusionAI/AReaL/pull/972)):** Adds support for multi-turn agentic training of VLMs on Ascend NPUs, including error recovery mechanisms.
*   **VLM Tensor Parallelism ([#965](https://github.com/inclusionAI/AReaL/pull/965)):** Optimizes the FSDP engine to prevent OOM errors when initializing large models (e.g., Qwen3-VL-32B) and integrates vLLM tensor parallelism.
*   **NPU v1.0.1 Update ([#1022](https://github.com/inclusionAI/AReaL/pull/1022)):** Updates documentation and container images for the Ascend NPU v1.0.1 release.

### B. Core Infrastructure & Optimizations
*   **Archon LoRA Infrastructure ([#1015](https://github.com/inclusionAI/AReaL/pull/1015) & [#1000](https://github.com/inclusionAI/AReaL/pull/1000)):** Two competing/complementary PRs introduce LoRA support for the new Archon engine, focusing on FSDP2/DTensor compatibility and PEFT checkpointing.
*   **FSDP Optimizer Streaming ([#983](https://github.com/inclusionAI/AReaL/pull/983)):** **[CLOSED/Merged]** Added `PerLayerOptimWrapper` to stream optimizer states between Host and Device, significantly accelerating FSDP2 training by offloading Adam steps to the device.

### C. Bug Fixes & Refactors
*   **RTensor Refactor ([#1017](https://github.com/inclusionAI/AReaL/pull/1017)):** Simplifies the `RTensor` abstraction to a single-shard reference to reduce dependency complexity.
*   **LoRA/XCCL Fix ([#1021](https://github.com/inclusionAI/AReaL/pull/1021)):** Directly addresses Issue #1020, fixing the LoRA name registry mismatch in vLLM engines.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **hardware-agnostic, high-performance RL training framework**. Today's activity highlights two critical trends in the RL ecosystem:
1.  **Beyond GPU:** The extensive work on Ascend NPU support signals a shift toward heterogenous computing environments for LLM/RL training, essential for reducing costs and dependency on specific hardware vendors.
2.  **Memory Efficiency:** The focus on Per-Layer Optimizer Streaming and efficient VLM loading addresses the biggest bottleneck in modern RLHF: the memory wall. By optimizing CPU-GPU transfer for optimizer states, AReaL enables larger batch sizes on the same hardware.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-03-12

## 1. Today's Highlights
The TRL ecosystem is seeing significant activity around **vLLM integration** and **Qwen 3.5 compatibility**. Key developments include a strategic shift in how TRL handles vLLM serving (moving toward colocation) and ongoing efforts to support advanced VLM training stability. Additionally, the community is expanding TRL's algorithmic toolkit with Self-Distillation Policy Optimization (SDPO).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Qwen 3.5 & vLLM 0.17.0 Incompatibility** [[#5269](https://github.com/huggingface/trl/issues/5269)]
    *   **Status:** Open
    *   **Summary:** Users report that the latest TRL main branch fails during GRPO training with `Qwen3.5-0.8B` on `vllm 0.17.0`. The error indicates missing parameters (`'model'`) in `Qwen3_5ForConditionalGeneration`, suggesting potential breaking changes in the model architecture support or vLLM mapping.
*   **Hardware Backend Support (Ascend)** [[#5271](https://github.com/huggingface/trl/issues/5271)]
    *   **Status:** Closed
    *   **Summary:** A user attempted GRPO training using `ms-swift` on Ascend accelerators but encountered a missing module error (`No module named 'vllm_ascend'`), highlighting the friction in deploying TRL across diverse hardware backends.

## 4. Key PR Progress

### Feature Enhancements & Algorithm Expansion
*   **Change Default `vllm_mode` to "colocate"** [[#5255](https://github.com/huggingface/trl/pull/5255)] (Open)
    *   Aims to simplify the user experience by changing the default vLLM mode from `"server"` to `"colocate"`. This removes the friction of managing a separate server process, which is currently a major stumbling block for new users.
*   **SDPO Trainer Implementation** [[#4935](https://github.com/huggingface/trl/pull/4935)] (Open)
    *   Introduces Self-Distillation Policy Optimization (from arXiv:2601.20802). This adds a trainer that utilizes high-reward trajectories for self-distillation, offering a denser learning signal.
*   **Reward Function Logging Hooks** [[#5233](https://github.com/huggingface/trl/pull/5233)] (Open)
    *   Proposes `log_extra` and `log_metric` hooks for GRPO and RLOO reward functions, allowing developers to log custom metrics without hacking into private trainer states.

### Stability & Bug Fixes
*   **Multimodal dtype Casting** [[#5073](https://github.com/huggingface/trl/pull/5073)] (Open)
    *   Critical fix for Vision-Language Models (VLMs). Ensures `pixel_values` are cast to `bf16`/`fp16` correctly during DeepSpeed training to prevent `torch.layer_norm` runtime errors.
*   **CLI Argument Handling** [[#5266](https://github.com/huggingface/trl/pull/5266)] & [[#5258](https://github.com/huggingface/trl/pull/5258)] (Merged)
    *   Fixed parsing of JSON strings for `model_init_kwargs` and `teacher_model_init_kwargs` in configurations like GKD and GOLD, improving CLI robustness.

### Documentation & Examples
*   **Nemotron 3 Examples** [[#5272](https://github.com/huggingface/trl/pull/5272)] (Merged)
    *   Added specific examples for NVIDIA's Nemotron 3 models.
*   **Light/Dark Mode Banner** [[#5270](https://github.com/huggingface/trl/pull/5270)] (Merged)
    *   UI polish for documentation to support theme preferences.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to serve as the bridge between state-of-the-art LLM research and production-ready tooling.
1.  **Reducing Infrastructure Friction:** The move to default to `"colocate"` mode for vLLM ([#5255](https://github.com/huggingface/trl/pull/5255)) is a strategic improvement. By abstracting away the complexity of inference server management, TRL lowers the barrier to entry for Online RL, allowing researchers to focus on reward design rather than DevOps.
2.  **Multimodal RL Readiness:** With VLMs becoming the norm, fixes like the dtype casting for `pixel_values` ([#5073](https://github.com/huggingface/trl/pull/5073)) are essential to ensure that RL techniques (like GRPO) can be reliably applied to vision-encoders without crashing on mixed-precision hardware.
3.  **Algorithmic Diversity:** The inclusion of SDPO ([#4935](https://github.com/huggingface/trl/pull/4935)) demonstrates TRL's commitment to "beyond-PPO" optimization, integrating methods that leverage self-generated data to stabilize training—a critical trend for 2026's focus on sample-efficient alignment.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-03-12

## 1. Today's Highlights
Activity on the Tianshou repository was minimal over the last 24 hours, with **no new code merges, pull requests, or releases**. The sole activity involved a new bug report regarding the high-level API introduced in Tianshou v2.0.

## 2. Releases
**None.** No new stable or beta versions were tagged in the last 24 hours.

## 3. Important Issues
A specific bug was reported concerning the return values of the `Experiment` workflow. This is relevant for users relying on automated result aggregation.

*   **[#1288](https://github.com/thu-ml/tianshou/issues/1288) `ExperimentResult.trainer_result` appears to always be `None`**
    *   **Context:** The user reports that the `trainer_result` attribute within `ExperimentResult` remains `None` after executing `Experiment.run()`.
    *   **Implication:** This suggests a potential missing assignment in the `Experiment` class logic, preventing users from programmatically accessing the outcome of the training run (e.g., final metrics) via the result object.

## 4. Key PR Progress
**None.** No open or merged Pull Requests were updated during this period.

## 5. Why This Project Matters in Today's RL Landscape
Tianshou distinguishes itself in the Reinforcement Learning ecosystem by offering a **highly modular, type-checked library** built on PyTorch. Unlike monolithic frameworks, Tianshou provides fast, vectorized environment wrappers and supports a vast array of algorithms (from Model-Free to Model-Based) with a consistent interface. The focus on its **v2.0 High-Level API** (as referenced in today's issue) indicates the project's ongoing maturation, aiming to lower the barrier to entry for complex RL experiments while maintaining the flexibility required by researchers.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-12

## 1. Today's Highlights
The **verl** ecosystem is aggressively expanding beyond text-based LLMs into **multimodal RL** and **diverse hardware acceleration**.
- **Multimodal & Algorithms:** Significant pushes for **Qwen-Image** support via Flow-GRPO (Issue #4639, PR #5297) and the introduction of new algorithms like GDPO (PR #5503).
- **Hardware Roadmap:** A clear 2026 Q2 roadmap for **Ascend NPU** support (Issue #5526) accompanies fixes for MC2/NPU environments (PR #5560).
- **Infrastructure:** Heavy focus on **SGLang** integration (LoRA support in PR #5564, Speculation in Issue #5559) and resolving resource allocation bugs in async rollouts.

## 2. Releases
*   **Status:** No new official releases recorded for 2026-03-12.
*   **Note:** PR #5542 proposes updating the stable Docker images to `vllm==0.17.0` and `sglang==0.5.9`.

## 3. Important Issues
*   **[Ascend/Q2 Roadmap] [Issue #5526](https://github.com/volcengine/verl/issues/5526):** Published the technical roadmap for Q2 2026, targeting native NPU support for large-scale MoE, VLM, and Agent workloads.
*   **[Multimodal/Flow-GRPO] [Issue #4639](https://github.com/volcengine/verl/issues/4639):** RFC to support online DPO-like training for diffusion models (Qwen-Image, Wan2.2) using Flow-GRPO.
*   **[Critical Bug/Async] [Issue #5563](https://github.com/volcengine/verl/issues/5563):** Reports of garbled output (Russian/Korean/special chars) during Rollout on Ascend NPU using `fully_async_policy`.
*   **[Bug/Video] [Issue #5554](https://github.com/volcengine/verl/issues/5554):** `RuntimeError: position_ids` dimension mismatch when batching video samples of varying durations in Qwen3-VL.
*   **[Feature/Speculation] [Issue #5559](https://github.com/volcengine/verl/issues/5559):** Proposal to integrate Decoupled Speculation to accelerate rollout phases.

## 4. Key PR Progress
*   **[Algorithm] PR #5503:** Implements **GDPO** (Group reward-Decoupled Normalization Policy Optimization).
*   **[Multimodal] PR #5297:** Integrates **FlowGRPO** for Qwen-Image training and adds `vLLM-Omni` support.
*   **[Integration] PR #5520:** Integrates **Atropos** RL environments with verl's GRPO pipeline.
*   **[Rollout/SGLang] PR #5564:** Adds dual-mode **LoRA support** for SGLang rollouts (merge and native adapter paths).
*   **[Infra/Megatron] PR #5381:** Adds example support for **Qwen3.5** via Megatron-Bridge.
*   **[CI/Fix] PR #5562:** Fixed breakage in `sft_trainer_ray` CI.

## 5. Why This Project Matters in Today's RL Landscape
As the field moves from single-modality fine-tuning to complex, multi-modal reasoning and agent-based workflows, **verl** is positioning itself as a hardware-agnostic, high-throughput orchestration layer. Today's activity highlights a strategic shift from pure text PPO to **Flow-GRPO for images** and **Atropos for agents**, while simultaneously locking down compatibility across **NVIDIA (TensorRT-LLM)**, **Ascend (NPU)**, and diverse inference engines (**vLLM & SGLang**). It is becoming the "Android" of RLHF frameworks—providing a unified backend for heterogeneous hardware and rapidly evolving model architectures.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-12

## 1. Today's Highlights
Activity on **Open Instruct** (AllenAI) is surging around **Post-Training methodologies**, specifically the convergence of GRPO (Group Relative Policy Optimization) and PPO. Today’s update reveals a significant architectural expansion to support OLMo-core distributed training and the introduction of a dedicated **offline distillation** pipeline. The team also finalized the removal of legacy infrastructure (the "Augusta" cluster), signaling a full migration to current Beaker workflows.

## 2. Releases
*   **No new releases** recorded for 2026-03-12.

## 3. Important Issues
*   **No active issues** were updated in the last 24 hours. The focus remains entirely on merging current feature branches.

## 4. Key PR Progress
The repository saw 8 updated PRs, focusing on infrastructure hardening and new RL capabilities:

*   **GRPO & PPO Convergence:** PR [#1462](https://github.com/allenai/open-instruct/pull/1462) (Open) introduces PPO-style training with a learned value model (GAE) alongside standard GRPO, offering flexibility between value-based and value-free optimization.
*   **OLMo-core Distributed Integration:** PR [#1398](https://github.com/allenai/open-instruct/pull/1398) and PR [#1397](https://github.com/allenai/open-instruct/pull/1397) implement the Ray actors and callbacks required to run GRPO on OLMo-core, including vLLM weight syncing and Polyak averaging.
*   **Offline Distillation Stack:** PR [#1520](https://github.com/allenai/open-instruct/pull/1520) adds a complete pipeline for offline knowledge distillation using vLLM for teacher logit sampling and a separate student training module.
*   **Checkpoint Stability:** PR [#1523](https://github.com/allenai/open-instruct/pull/1523) fixes critical bugs in GRPO data prep actor resumption, ensuring runs continue correctly from the last unseen learner step.
*   **Maintenance & Docs:** The team closed PRs fixing GPU test failures ([#1514](https://github.com/allenai/open-instruct/pull/1514)), removing decommissioned cluster references ([#1522](https://github.com/allenai/open-instruct/pull/1522)), and expanding contribution guidelines ([#1521](https://github.com/allenai/open-instruct/pull/1521)).

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct has evolved from a simple instruction-tuning toolkit into a **blueprint for scalable, distributed post-training**. By integrating OLMo-core with Ray for multi-node GRPO and adding support for PPO and offline distillation, AllenAI is bridging the gap between research algorithms and production-grade infrastructure. The explicit support for **vLLM weight synchronization** within the training loop highlights a growing trend in RLHF: tightly coupling inference engines with training actors to maximize hardware efficiency.

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

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL Daily Digest for PettingZoo based on the provided data.

# RL Daily Digest: PettingZoo
**Date:** 2026-03-12

### 1. Today's Highlights
Activity in the PettingZoo repository was minimal over the last 24 hours, with no new code deployments or pull request updates. The primary focus remains on future ecosystem compatibility, specifically regarding Python 3.13 support.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **Python 3.13 Compatibility Inquiry**
    *   **Issue:** [#1303 [OPEN] [Question] Compatibility with Python 3.13](https://github.com/Farama-Foundation/PettingZoo/issues/1303)
    *   **Context:** Updated yesterday (2026-03-11), this issue highlights user demand for support of the Python 3.13 toolchain.
    *   **Significance:** With a +1 reaction and active discussion, this is a critical roadmap item for downstream projects (like MLPractices) that require the latest Python features. Maintainers have yet to confirm a timeline.

### 4. Key PR Progress
*   **No active updates** in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the standard API for multi-agent reinforcement learning (MARL), akin to OpenAI Gym for single-agent tasks. Its maintenance is vital for the standardization of MARL research. As Python evolves (e.g., v3.13+), keeping PettingZoo compatible ensures that modern RL frameworks can leverage performance improvements and new language features without fragmenting the ecosystem.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>