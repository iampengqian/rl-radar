# RL Open Source Daily Digest 2026-03-12

> Generated: 2026-03-12 04:14 UTC | Projects covered: 15

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

# RL Open-Source Ecosystem Cross-Project Report
**Date:** 2026-03-12

## 1. Ecosystem Overview
The RL open-source landscape on March 12, 2026, is defined by a sharp bifurcation between **scalable LLM post-training infrastructure** and **stable, modular research frameworks**. The most active projects (AReaL, verl, ROCK, Open-Instruct) are aggressively solving engineering challenges related to **heterogeneous hardware (NPUs), distributed inference/training disaggregation, and multimodal support**. Meanwhile, traditional RL libraries (Tianshou, PettingZoo) are in maintenance or minor refinement modes, focusing on API stability (Tianshou v2.0) and environment compatibility (Python 3.13). The ecosystem is effectively maturing into an "MLOps for Agents" phase, where the primary challenges are resource contention and observability rather than algorithmic novelty.

## 2. Activity Comparison

| Project | Issues (Activity) | PRs (Activity) | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **AReaL** | High (3 active) | Very High (12 updated) | Imminent (v1.0.1) | VLMs, Ascend NPU, LoRA/FSDP2 |
| **verl** | High (4 active) | High (6 active) | None | Async Rollouts, Multimodal (Flow-GRPO) |
| **ROCK** | Low (1 new) | Medium (3 active) | **v1.3.1** | Resource Mgmt, TypeScript SDK |
| **Open-Instruct**| Low (0 new) | Medium (5 active) | None | PPO/GRPO Hybrid, Offline Distillation |
| **slime** | Medium (3 active) | Medium (3 active) | **v0.2.3** | SGLang Integration, GLM-4.7 |
| **TRL** | Medium (2 active) | Medium (4 active) | None | vLLM Colocate, GRPO Fixes |
| **Tianshou** | Low (1 new) | None | None | API Bug (Experiment Result) |
| **PettingZoo** | Low (1 updated) | None | None | Python 3.13 Roadmap |
| **ROLL** | None | None | None | Dormant |
| **Others** | None | None | None | N/A |

## 3. Shared Research & Engineering Directions

*   **Algorithmic Hybridization & Efficiency:**
    There is a convergence toward hybrid training methods. **Open-Instruct** is integrating PPO with GAE into its GRPO stack ([#1462](https://github.com/allenai/open-instruct/pull/1462)), while **TRL** is refining GRPO with `colocate` modes to reduce overhead. This suggests the industry is moving past "pure" PPO toward group-relative or decoupled methods (like **verl's** GDPO [#5503](https://github.com/volcengine/verl/pull/5503)) that offer better stability profiles for large models.

*   **Hardware Heterogeneity (The Rise of NPUs):**
    Support for non-NVIDIA hardware is becoming standard. **AReaL** is aggressively updating its "Ascend" branch ([#1022](https://github.com/inclusionAI/AReaL/pull/1022)), and **verl** is fixing critical bugs for Ascend NPUs in async rollouts ([#5563](https://github.com/volcengine/verl/issues/5563)). This reflects a strategic push to diversify compute supply chains in large-scale RL.

*   **Inference-Training Disaggregation:**
    Projects are decoupling rollout generation from training to optimize throughput. **slime** proposes the **Mooncake** backend to replace Ray Object Store for RDMA transfers ([#1709](https://github.com/THUDM/slime/pull/1709)), and **Open-Instruct** is building dedicated Ray actors for distributed policy training ([#1398](https://github.com/allenai/open-instruct/pull/1398)).

*   **Multimodality is Now Standard:**
    RL is no longer text-only. **AReaL** merged multi-turn agentic training for VLMs ([#972](https://github.com/inclusionAI/AReaL/pull/972)), and **verl** is implementing Flow-GRPO for diffusion models ([#5297](https://github.com/volcengine/verl/pull/5297)).

## 4. Differentiation Analysis

*   **RLHF / Post-Training Leaders (TRL, Open-Instruct, verl, slime):**
    These projects focus on the "Last Mile" of model development. **TRL** positions itself as the accessible entry point (improving `colocate` defaults), whereas **verl** and **AReaL** target industrial-scale distributed training (FSDP2, Megatron, Async Rollouts). **slime** differentiates by optimizing specifically for the **GLM** ecosystem and SGLang engine.

*   **Infrastructure & Platform Engineers (ROCK):**
    **ROCK** stands apart by focusing on the *operating system* for RL rather than the algorithms. Its updates (Sandbox CPU Preemption, Model Service Metrics) target DevOps/SREs managing multi-tenant clusters, bridging RL with general cloud-native infrastructure (TypeScript SDKs).

*   **The "Long-Horizon" & Agent Focus (AReaL, verl):**
    While TRL focuses on chat/preference optimization, **AReaL** and **verl** are explicitly targeting **Agentic** workflows (multi-turn error recovery, complex environment integration like Atropos). They are building for "System 2" reasoning tasks rather than single-turn alignment.

## 5. Community Momentum & Maturity

*   **Accelerating Maturity (AReaL & verl):** These two projects showed the highest complexity in updates today. The nature of their PRs (fixing deadlocks in FSDP2, RDMA backends, async rollouts) indicates they are pushing the boundaries of current distributed systems capabilities.
*   **Stabilizing (TRL & slime):** Both projects are refining existing features. TRL is fixing vLLM compatibility and defaults, while slime is cleaning up configs and addressing specific bugs (SGLang TP), signaling a "smoothing out" phase after rapid feature additions.
*   **Maintenance Mode (PettingZoo & Tianshou):** Activity is minimal, focused on version compatibility (Python 3.13) or fixing high-level API returns. These projects are stable "utilities" rather than evolving platforms.
*   **Enterprise Pivot (ROCK):** The move toward "Metrics" and "Preemption" suggests Alibaba is hardening ROCK for internal or external enterprise cloud deployment.

## 6. Trend Signals

1.  **The "Free Lunch" of Colocated Inference:** TRL’s potential shift to default `colocate` mode ([#5255](https://github.com/huggingface/trl/pull/5255)) signals that separating inference servers for <30B parameter models is becoming an anti-pattern for single-node training due to communication overhead.
2.  **Data Transfer as the New Bottleneck:** The proposal of **Mooncake** in slime and the focus on disaggregated architectures in verl/AReaL indicate that moving weights/activations between nodes is now a primary optimization target, surpassing pure FLOPS optimization.
3.  **VLM "Agent" Readiness:** The ability to handle multi-turn recovery and specific VLM loading optimizations (AReaL) suggests that Vision-Language Models are ready to move from static perception tasks to dynamic, long-horizon control agents.
4.  **Ascend Ecosystem Readiness:** The frequency of "Ascend" (Huawei NPU) patches in top-tier RL frameworks suggests the open-source ecosystem is preparing for (or reacting to) a significant shift in hardware availability, reducing reliance on CUDA-only infrastructure.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem (2026-03-12)

## 1. Today's Highlights
The Alibaba ROCK project released **v1.3.1**, focusing on infrastructure stability and resource management (sandbox preemption and cleanup). Concurrently, the development team is advancing observability features, with a newly opened issue and a closed PR specifically addressing **Model Service Metrics**. There is also continued activity in expanding SDK support, notably regarding TypeScript integration and Docker image building within sandboxes.

## 2. Releases
*   **[v1.3.1](https://github.com/alibaba/ROCK/releases/tag/v1.3.1)**
    *   **Resource Management:** Introduced **Sandbox CPU Preemption Support** ([PR #597](https://github.com/alibaba/ROCK/pull/597)), a critical update for managing resource contention in multi-tenant RL environments.
    *   **Maintenance:** Added file cleanup tasks ([PR #584](https://github.com/alibaba/ROCK/pull/584)) to manage storage overhead.
    *   **Specs:** Enabled creation of standard spec sandboxes ([PR #571](https://github.com/alibaba/ROCK/pull/571)).

## 3. Important Issues
*   **[#614 [OPEN] [Feature] model service add metrics](https://github.com/alibaba/ROCK/issues/614)**
    *   *Author:* @FangwenDave
    *   *Context:* Categorized under **Observation**, this issue proposes adding metrics to model services. This is a key step toward production-grade monitoring of RL inference endpoints.

## 4. Key PR Progress
*   **Closed (Merged):**
    *   **[#613 feat: add model service metrics #614](https://github.com/alibaba/ROCK/pull/613):** Immediately addresses Issue #614, enabling observability for model serving.
*   **Open (In Review):**
    *   **[#615 feat(sdk): add ImageBuilder for env_dir Docker build](https://github.com/alibaba/ROCK/pull/615):** Streamlines the creation of Docker environments directly from environment directories, resolving [#531](https://github.com/alibaba/ROCK/issues/531).
    *   **[#492 Added TypeScript SDK](https://github.com/alibaba/ROCK/pull/492):** A significant expansion of the ecosystem, offering a full-featured TypeScript/Node.js SDK including Sandbox management, File system ops, and EnvHub integration.
    *   **[#575 feat: support multi operator #574](https://github.com/alibaba/ROCK/pull/575):** Expands operational capabilities within the platform.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from research to production, **observability** and **resource isolation** become paramount. Today's updates (v1.3.1 and the new metrics features) indicate that ROCK is maturing into an enterprise-ready platform capable of handling complex RL workloads where CPU contention must be managed and model performance must be monitored. The introduction of the TypeScript SDK further bridges the gap between RL backends and modern web-based control interfaces or Node.js-based agent frameworks.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-12

## 1. Today's Highlights
The **slime** ecosystem today shipped a significant **v0.2.3 release**, introducing YAML-based configuration for engine groups and critical stability fixes. Development momentum remains high with the integration of GLM-4.7 MTP training support and a proposal for a high-performance **Mooncake** backend to optimize disaggregated RL data transfer.

## 2. Releases
*   **[v0.2.3](https://github.com/THUDM/slime/releases/tag/v0.2.3)**: This release focuses on usability and stability.
    *   **Features:** Introduced YAML-based `sglang_config` support for simplified rollout engine group configuration.
    *   **Fixes:** General bug fixes and stability improvements.

## 3. Important Issues
*   **SGLang Tensor Parallelism Bug ([#1671](https://github.com/THUDM/slime/issues/1671)):** A confirmed bug causes garbled/repetitive output in Qwen3.5-27B when using `gen_tp > 1` (Tensor Parallelism > 1) due to the current SGLang version. Users requiring multi-GPU inference should proceed with caution.
*   **Megatron Bridge Gaps:** Users reported missing modules (`peft_bridge.py`) for Qwen-35 setup ([#1711](https://github.com/THUDM/slime/issues/1711)) and pipeline parallelism errors ([#1713](https://github.com/THUDM/slime/issues/1713)), indicating potential friction in complex distributed setups.
*   **FSDP Removal Inquiry ([#1703](https://github.com/THUDM/slime/issues/1703)):** A user questioned the removal of FSDP support, suggesting a strategic shift in the backend architecture.

## 4. Key PR Progress
*   **GLM-4.7 MTP Support ([#1712](https://github.com/THUDM/slime/pull/1712)):** Closed/merged. Enables GLM-4.7-Flash MTP training by rewriting the `GLM4MoELiteBridge` for dynamic layer counts and compatibility with `transformers >= 5.0`.
*   **Mooncake Backend Integration ([#1709](https://github.com/THUDM/slime/pull/1709)):** An open proposal to add **Mooncake** as an alternative data transfer backend. This aims to replace Ray Object Store for cross-node transfers in disaggregated training/rollout setups, leveraging RDMA for significant performance gains.
*   **Release Merge ([#1682](https://github.com/THUDM/slime/pull/1682)):** Bumped the core version to v0.2.3.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs evolve into complex reasoning agents, the bottleneck shifts from pure compute to **infrastructure orchestration**. Today’s updates in **slime** highlight a maturing ecosystem tackling two critical challenges:
1.  **Disaggregation:** The Mooncake backend proposal addresses the high cost of moving rollout data between inference and training nodes, a prerequisite for scaling RL on massive models.
2.  **Complex Model Support:** Rapid integration of GLM-4.7 and fixes for Qwen architectures demonstrate slime's position as a cutting-edge framework for the latest generation of open-source LLMs.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-12

## 1. Today's Highlights
The AReaL ecosystem saw significant activity today, with **12 updated PRs** and a sharp focus on expanding model support and infrastructure robustness. The standout themes were the integration of **LoRA (Low-Rank Adaptation)** into the Archon engine with FSDP2 compatibility and a series of aggressive updates to support **Vision-Language Models (VLMs)** and **Ascend NPU** hardware. A critical bug regarding LoRA versioning in distributed serving was also identified and patched.

## 2. Releases
*   **No new official releases** tagged in the last 24 hours.
*   *Note:* PR [#1022](https://github.com/inclusionAI/AReaL/pull/1022) updates documentation for a **v1.0.1** release specifically for Ascend NPUs, suggesting a patch release may be imminent for that hardware branch.

## 3. Important Issues
*   **Model Family Expansion:** The community is actively asking for broader model support. Issue [#945](https://github.com/inclusionAI/AReaL/issues/945) (Updated today) discusses adding RL training support for **GPT-OSS, Kimi K2, and GLM4.5**, signaling a demand to move beyond current default architectures.
*   **Critical Serving Bug:** Issue [#1020](https://github.com/inclusionAI/AReaL/issues/1020) reports a bug in `update_weights_lora_xccl` where `OpenAIServingModels` fails to track versioned LoRA names during weight updates, potentially causing inference inconsistencies in distributed setups.
*   **Documentation Maintenance:** Issue [#1016](https://github.com/inclusionAI/AReaL/issues/1016) notes that the WeChat group QR code has expired, highlighting a need for community channel maintenance.

## 4. Key PR Progress
*   **LoRA Infrastructure (Archon Engine):**
    *   PR [#1015](https://github.com/inclusionAI/AReaL/pull/1015) & PR [#1000](https://github.com/inclusionAI/AReaL/pull/1000): Implemented Phase 1 & 2 of LoRA infrastructure. Crucially, this resolves a known **deadlock issue between FSDP2 and Tensor Parallelism**, enabling efficient parameter-efficient fine-tuning at scale.
    *   PR [#1021](https://github.com/inclusionAI/AReaL/pull/1021): Fixes the corresponding LoRA versioning bug in `OpenAIServingModels` identified in Issue #1020.

*   **VLM & Hardware Support (Ascend NPUs):**
    *   PR [#972](https://github.com/inclusionAI/AReaL/pull/972): Introduced **multi-turn agentic training for VLMs** (Vision-Language Models), including automatic error recovery mechanisms.
    *   PR [#965](https://github.com/inclusionAI/AReaL/pull/965): Optimized VLM loading for large models (specifically citing **Qwen3-VL-32B**) to prevent OOM errors during initialization.

*   **Performance & Architecture:**
    *   PR [#983](https://github.com/inclusionAI/AReaL/pull/983) [CLOSED]: Proposed a `PerLayerOptimWrapper` to speed up CPU Adam steps via async H2D/D2H streaming.
    *   PR [#1017](https://github.com/inclusionAI/AReaL/pull/1017): Refactored `RTensor` to a lightweight single-shard reference, improving code modularity by removing circular dependencies.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **hardware-agnostic, high-throughput RL infrastructure** capable of handling the next generation of large-scale models. By simultaneously solving complex distributed training challenges (FSDP2 + LoRA deadlocks) and extending support to VLMs and Ascend NPUs, the project is lowering the barrier to entry for advanced "Agent" training. The focus on efficient loading for massive models (32B+ parameters) and multi-turn recovery mechanisms aligns with the industry shift toward **complex, long-horizon agentic workflows** rather than simple single-turn preference optimization.

---
*Data Source: github.com/inclusionAI/AReaL*

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-03-12

## 1. Today's Highlights
The TRL ecosystem is actively refining its support for **Group Relative Policy Optimization (GRPO)** and integration with **vLLM**. Key activity today focuses on smoothing the user experience for vLLM deployment modes and fixing compatibility with the latest Qwen models. Additionally, significant improvements are being merged for configuration handling and data packing efficiency.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **vLLM Compatibility with Qwen3.5:** Issue **#5269** reports a `ValueError` when using GRPO with Qwen3.5-0.8B and vLLM 0.17.0. The error suggests a parameter mapping failure within the model architecture, indicating a breaking change in either the model class or the vLLM integration layer.
    *   *Link:* [huggingface/trl Issue #5269](https://github.com/huggingface/trl/issues/5269)
*   **Hardware Backend Conflicts:** Issue **#5271** (Closed) highlighted environment friction where `ms-swift` GRPO training failed due to missing `vllm_ascend` modules, pointing to complex dependencies when targeting specific hardware accelerators.
    *   *Link:* [huggingface/trl Issue #5271](https://github.com/huggingface/trl/issues/5271)

## 4. Key PR Progress
*   **Default vLLM Mode Shift:** PR **#5255** proposes changing the default `vllm_mode` from `"server"` to **`"colocate"`**. This shift aims to reduce setup friction by eliminating the need for a separate vLLM server process, streamlining the training loop for GRPO and Online DPO.
    *   *Link:* [huggingface/trl PR #5255](https://github.com/huggingface/trl/pull/5255)
*   **Enhanced Reward Functions:** PR **#5233** introduces `log_extra` and `log_metric` hooks. This allows custom reward functions in GRPO/RLOO to log detailed metrics without hacking trainer states, a crucial update for fine-grained experiment tracking.
    *   *Link:* [huggingface/trl PR #5233](https://github.com/huggingface/trl/pull/5233)
*   **New Algorithms & Efficiency:** PR **#4935** continues development on the **SDPO (Self-Distillation Policy Optimization)** trainer, while PR **#5189** merges improvements to packing logic with a vectorized implementation, promising faster data processing.
    *   *Links:* [huggingface/trl PR #4935](https://github.com/huggingface/trl/pull/4935), [huggingface/trl PR #5189](https://github.com/huggingface/trl/pull/5189)
*   **Configuration Fixes:** Merged PRs (**#5266**, **#5258**) fixed how `model_init_kwargs` and `teacher_model_init_kwargs` are parsed when passed as CLI JSON strings, resolving a common pain point for command-line launch scripts.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to bridge the gap between cutting-edge RL research and production-ready LLM alignment. Today's focus on **vLLM integration** and **GRPO stability** underscores the industry's shift toward efficient, on-policy fine-tuning methods that leverage optimized inference engines (vLLM) to handle the massive computational cost of generation. By standardizing `colocate` modes and fixing dtype issues for VLMs (PR **#5073**), TRL is lowering the barrier to entry for high-performance RLHF, making it accessible without complex infrastructure orchestration.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-03-12

## 1. Today's Highlights
Activity on the Tianshou repository was minimal over the last 24 hours, with no code changes or releases. The focus was on a single new bug report regarding the high-level API introduced in v2.0. The issue highlights a potential gap in the return values of the `Experiment` class, which may affect users managing automated training pipelines.

## 2. Releases
No new releases were recorded for 2026-03-12.

## 3. Important Issues
*   **Potential Data Loss in `Experiment.run()` API:**
    *   **Issue:** [#1288](https://github.com/thu-ml/tianshou/issues/1288)
    *   **Context:** User @Shaocheng-Liu reported that `ExperimentResult.trainer_result` consistently returns `None` after execution.
    *   **Technical Details:** The issue suggests a missing assignment within the `Experiment.run()` method. This prevents users from programmatically accessing the final trainer metrics (return values) when using the high-level v2.0 API, forcing them to rely on side effects (logs/checkpoints) rather than function returns.
    *   **Status:** Open (0 comments).

## 4. Key PR Progress
No pull requests were opened, updated, or merged in the last 24 hours.

## 5. Why This Project Matters in Today's RL Landscape
Tianshou has established itself as a highly modular, PyTorch-based reinforcement learning library. Unlike monolithic frameworks, Tianshou excels in providing fast, vectorized environment wrappers and standardized interfaces (Collector, ReplayBuffer) that bridge the gap between research prototyping and production deployment. With its v2.0 high-level API, it aims to simplify complex experiment orchestration; therefore, resolving return-value bugs like Issue #1288 is critical for maintaining the reliability that enterprise and advanced research users depend on.

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
The **verl** ecosystem is actively expanding its model and hardware support boundaries. Today's activity highlights a strong push towards **multimodal RL** with the integration of Flow-GRPO for diffusion models and **NPU (Ascend) compatibility**. Significant engineering efforts are also visible in optimizing asynchronous rollouts and enhancing the developer experience through better environment integrations (Atropos) and Docker support.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The community remains focused on integrating features into the main branch, specifically regarding vLLM 0.17.0 and SGLang 0.5.9 updates via Docker PRs.

## 3. Important Issues
*   **Performance & Stability in Async Rollouts:** Users report critical performance and quality issues in the experimental `fully_async_policy` mode. Issue [#5458](https://github.com/verl-project/verl/issues/5458) notes high resource idle times despite low efficiency, while [#5563](https://github.com/verl-project/verl/issues/5563) reports "garbled" (incoherent) outputs on Ascend NPU, suggesting potential weight synchronization or dtype handling bugs in async GRPO.
*   **Memory Leak Suspicions:** Issue [#2504](https://github.com/verl-project/verl/issues/2504) indicates a steady increase in step times during DeepSeek 16B training, specifically pinpointing `update_policy` as the bottleneck.
*   **Configuration Friction:** Users are encountering setup friction regarding disk usage (Ray logs filling `/tmp` in [#5555](https://github.com/verl-project/verl/issues/5555)) and missing reward function implementations for standard datasets like GSM8K ([#5558](https://github.com/verl-project/verl/issues/5558)).

## 4. Key PR Progress
*   **Multimodal & Algorithm Expansion:**
    *   **[#5297](https://github.com/verl-project/verl/pull/5297):** Implements **Flow-GRPO** training for Qwen-Image, integrating `vLLM-Omni` for rollout and `Diffusers` for training. This aligns with the RFC to support diffusion models.
    *   **[#5503](https://github.com/verl-project/verl/pull/5503):** Introduces **GDPO** (Group reward-Decoupled Normalization Policy Optimization), aiming to improve upon standard group-relative reward calculations.
*   **Infrastructure & Hardware:**
    *   **[#5564](https://github.com/verl-project/verl/pull/5564):** Adds dual-mode **LoRA support** for SGLang rollouts, offering both weight merging and native adapter paths.
    *   **[#5526](https://github.com/verl-project/verl/issues/5526) & [#5560](https://github.com/verl-project/verl/pull/5560):** Significant strides in **Ascend NPU** support, including Q2 roadmap planning and fixes for vLLM-Ascend on A2 chips.
    *   **[#5520](https://github.com/verl-project/verl/pull/5520):** Integrates **Atropos** RL environments, enhancing verl's capability for complex agent training loops.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is solidifying its position as a **scalable, multi-backend RL infrastructure** for the post-training era. By bridging the gap between disparate acceleration frameworks (Megatron, vLLM, SGLang, Diffusers) and hardware platforms (NVIDIA, Ascend), it lowers the barrier to entry for fine-tuning Large Language Models (LLMs) and emerging Diffusion models.

Today's activity underscores a shift in the open-source RL landscape: moving beyond simple PPO text-tuning toward **heterogeneous execution** (async rollouts, NPUs) and **multimodal optimization** (Flow-GRPO). verl serves as the critical "glue" code allowing researchers to reproduce techniques like DeepSeek-R1's GRPO across different hardware stacks without rewriting the training loop.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

## 1. Today's Highlights
**Open-Instruct expands RL horizons: PPO integration and Offline Distillation**
The digest for 2026-03-12 indicates a significant expansion of the Open-Instruct reinforcement learning toolkit. While maintenance and cleanup were prominent (removing legacy cluster references and fixing GPU tests), the ecosystem saw major feature proposals integrating **PPO with GAE** support into the GRPO stack and introducing a complete **offline distillation** pipeline.

## 2. Releases
*   **No new releases** recorded for 2026-03-12.

## 3. Important Issues
*   **No new issues** were opened in the last 24 hours.

## 4. Key PR Progress

### Feature Integrations & Algorithm Expansion
*   **[PPO Support]** PR [#1462](https://github.com/allenai/open-instruct/pull/1462) (Open): Introduces PPO-style training to `grpo_fast.py` using a learned value model for Generalized Advantage Estimation (GAE). This bridges the gap between GRPO (group-normalized rewards) and traditional PPO, offering new hyperparameters like `gamma`, `gae_lambda`, and `vf_clip_range`.
*   **[Offline Distillation]** PR [#1520](https://github.com/allenai/open-instruct/pull/1520) (Open): Proposes a complete "DistillKit" integration. It includes `sample_logits_vllm.py` for capturing compressed top-k teacher logits and `offline_distill.py` for student training, enabling efficient knowledge transfer without online teacher inference overhead.

### Infrastructure & Stability (OLMo-core)
*   **[Distributed GRPO]** PRs [#1398](https://github.com/allenai/open-instruct/pull/1398) and [#1397](https://github.com/allenai/open-instruct/pull/1397) (Open): Continued progress on the "GRPO olmo-core" series (PRs 3 & 4 of 5).
    *   #1398 adds the `PolicyTrainerOLMoCoreProcess` Ray actor for distributed multi-node training.
    *   #1397 adds callbacks for vLLM weight synchronization and Polyak averaging for reference policies.
*   **[Checkpoint Resilience]** PR [#1523](https://github.com/allenai/open-instruct/pull/1523) (Open): Fixes a critical bug in the GRPO data prep actor where resuming from checkpoints failed to restore `_last_consumed_step`, causing data replay or skipping issues.

### Maintenance & Documentation
*   **[Bug Fixes]** PR [#1514](https://github.com/allenai/open-instruct/pull/1514) (Closed): Resolved GPU test failures related to `padding_free_collator.py` handling of DPO attention masks.
*   **[Cleanup]** PR [#1522](https://github.com/allenai/open-instruct/pull/1522) (Closed): Removed all references to the decommissioned "Augusta" cluster.
*   **[Docs]** PR [#1521](https://github.com/allenai/open-instruct/pull/1521) (Closed): Expanded `CONTRIBUTING.md` with details on GPU tests, CI workflows, and Beaker experiment launches.

## 5. Why This Project Matters in Today's RL Landscape
Open-Instruct is evolving from a pure instruction-tuning toolkit into a comprehensive **post-training platform**. Today's updates highlight three critical trends in the RL ecosystem:
1.  **Hybrid RL Algorithms:** The integration of PPO/GAE into a GRPO codebase (#1462) reflects a growing industry trend toward hybrid models that combine the stability of PPO with the efficiency of GRPO.
2.  **Compute Efficiency:** The introduction of offline distillation (#1520) and optimizations for OLMo-core distributed training (#1398) signal a shift toward more cost-effective, scalable training methods essential for frontier-level models.
3.  **Enterprise Reliability:** The focus on robust checkpointing (#1523) and detailed CI/CD documentation (#1521) indicates that these open-source tools are maturing to meet production-grade reliability standards.

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

Here is the RL Daily Digest for **2026-03-12**.

### 1. Today's Highlights
Activity on the PettingZoo repository was minimal over the last 24 hours, with no new code changes or releases. The focus remains on a single active discussion regarding future environment compatibility. The ecosystem is currently monitoring the project's roadmap concerning Python 3.13 support.

### 2. Releases
*   **No new releases** reported in the last 24 hours.

### 3. Important Issues
*   **Python 3.13 Compatibility Roadmap** ([#1303](https://github.com/Farama-Foundation/PettingZoo/issues/1303))
    *   **Status:** Open
    *   **Context:** Updated yesterday (2026-03-11), this issue highlights user demand for Python 3.13 support.
    *   **Details:** The author (@steveyuwono), representing the **MLPractices** (MLP) project, inquired about the timeline for Python 3.13 compatibility. As Python versions advance, maintaining support is critical for dependent libraries to leverage performance improvements and new features.
    *   **Community Engagement:** The issue has received 1 upvote and 2 comments, indicating moderate but specific interest from the downstream RL community.

### 4. Key PR Progress
*   **No active updates** in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
**PettingZoo** serves as the standard API for multi-agent reinforcement learning (MARL), analogous to Gymnasium/Gym for single-agent tasks.
*   **Standardization:** As MARL grows in popularity for researching emergent behavior and game theory, PettingZoo provides a unified interface for diverse environments.
*   **Ecosystem Integration:** It is a critical dependency for many higher-level libraries (e.g., Tianshou, RLlib). Issues like **#1303** are vital indicators of the library's maintenance health; lagging Python version support can become a bottleneck for the entire MARL toolchain, preventing users from utilizing the latest CPython speed optimizations.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>