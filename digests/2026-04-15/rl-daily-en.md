# RL Open Source Daily Digest 2026-04-15

> Generated: 2026-04-14 22:12 UTC | Projects covered: 15

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
The RL open-source ecosystem is currently undergoing a massive infrastructural shift, driven by the demands of Post-Training and alignment for Large Language Models (LLMs) and Vision-Language Models (VLMs). The active projects today are dominated by distributed systems challenges: scaling Mixture-of-Experts (MoE) architectures, orchestrating disaggregated asynchronous training/inference clusters, and expanding hardware support beyond NVIDIA to AMD, Intel, and Ascend. Meanwhile, classic RL environments and algorithms are in a mature, mostly dormant maintenance phase.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 10 | 38 | 0 | Extreme infra velocity; multi-backend hardware & async disaggregation. |
| **TRL** | 4 | 32 | 0 | Ecosystem modernization; dropping legacy support for native weight sync. |
| **AReaL** | 4 | 19 | 0 | Enterprise scaling; microservices & massive MoE memory optimizations. |
| **Open Instruct** | 1 | 18 | 0 | Stabilizing GRPO; fixing critical vLLM weight sync and hangs. |
| **slime** | 4 | 3 | 0 | Bleeding-edge MoE; context parallelism & A100 enablement. |
| **ROCK** | 4 | 5 | 0 | Architectural overhaul; generic job abstractions for Agent eval. |
| **OpenRLHF** | 2 | 0 | 1 | Feature release; pioneering multi-turn VLM RL. |
| **ROLL** | 3 | 0 | 0 | Pipeline gap analysis; scaling multimodal RL schedulers. |
| **PettingZoo** | 1 | 0 | 0 | API design debate; rigid state representations for CTDE. |
| **Tianshou** | 1 | 0 | 0 | High-level API friction; experiment checkpointing bugs. |
| **Others*** | 0 | 0 | 0 | *Dormant.* |

*(Note: CleanRL, Gymnasium, rl_games, Stable Baselines3, and torchtune saw zero activity).*

## Shared Research & Engineering Directions

**Research Signals**
*   **The Shift to Multi-Modal & Multi-Turn RL:** Post-training is moving beyond single-turn text. OpenRLHF released native Multi-turn VLM RL capabilities, TRL expanded VLM tool-calling support, and AReaL is building dedicated data pipelines for Multi-Agent RL (MARL) and reasoning verifiers.
*   **Conquering MoE Architectures:** Training RL on Mixture-of-Experts (MoE) is a top priority. Slime and ROLL are tackling memory bottlenecks and context parallelism for massive models like `Qwen3.5` and `DeepSeekV3`, while AReaL is extending LoRA support specifically for MoE architectures.
*   **Agentic RL Workflows:** RL is increasingly used to train tool-using agents. Open Instruct introduced `SWERLSandboxEnv` for per-sample Docker tasks, and AReaL abstracted RL workloads into microservices for production-grade tool-calling.

**Engineering & Infrastructure Signals**
*   **Asynchronous & Disaggregated Compute:** The industry is decoupling inference rollout from training to maximize GPU utilization. VeRL introduced a standalone log-prob server and trainer-side FP8 quantization to save bandwidth. AReaL is optimizing GPU↔CPU offload cycles, and TRL is aggressively updating to vLLM 0.18 for native weight synchronization.
*   **Multi-Hardware Expansion:** Escaping NVIDIA lock-in is a critical push. VeRL is leading the charge with major PRs for AMD ROCm, Intel XPU, and Ascend NPU compatibility.
*   **Extreme Memory Optimization:** As model sizes explode, so do RAM requirements. AReaL implemented `meta` device mapping to drop CPU RAM usage from ~512 GiB to ~64 GiB for 32B models, and Slime patched activation checkpointing bugs to preserve VRAM.

## Differentiation Analysis

*   **Alignment Scaling Frameworks (VeRL, TRL, OpenRLHF, AReaL, ROLL):** These frameworks are competing to be the infrastructure backbone for RLHF/GRPO. 
    *   **TRL** leverages its tight HuggingFace integration to rapidly support new models (e.g., Phi-3, GLM-4-MoE).
    *   **VeRL** differentiates via extreme cross-platform hardware support and disaggregated async architectures.
    *   **AReaL** is carving out an enterprise niche with high-level microservice controllers and advanced scheduling algorithms (Karmarkar-Karp partitioning).
    *   **OpenRLHF** is leading the pack specifically in native Multi-turn multimodal support.
*   **Reference Implementations (Open Instruct, slime):** These projects serve as vital, practical guides for the community. Open Instruct provides a highly stable baseline for GRPO on frontier models like OLMo-2, while Slime acts as a necessary bridge for deploying complex next-gen MoE architectures on distributed Megatron setups.
*   **Evaluation & Orchestration (ROCK):** While others focus on training, ROCK is positioning itself as a cloud-native orchestrator for evaluating agents, abstracting execution logic into robust `Job/Trial` microarchitectures.
*   **Classic RL (PettingZoo, Tianshou):** Operating in a different paradigm, these libraries focus on traditional algorithmic RL and MARL. They are currently in maintenance phases, tackling API rigidity and persistence bugs rather than LLM scaling.

## Community Momentum & Maturity
The divide between "Post-training LLM infrastructure" and "Classic RL" has never been wider. Projects like TRL, VeRL, and Open Instruct show high maturity, characterized by aggressive deprecation of legacy systems (like TRL dropping vLLM 0.11) and closing complex distributed race conditions (Open Instruct resolving hanging Ray actors). 

Conversely, the MoE/VLM integration space is experiencing growing pains. ROLL, Slime, and VeRL are fielding numerous bug reports from users pushing the boundaries with `Qwen3.5` and large Vision Models, indicating that the ecosystem is outpacing its current documentation and architecture. PettingZoo and Tianshou remain stable but largely stagnant.

## Trend Signals
1.  **The Era of Agentic Post-Training:** The introduction of SWE-bench style sandbox environments (Open Instruct) and tool-calling controllers (AReaL) signals that RL is pivoting from static preference optimization to dynamic, interactive agent training.
2.  **Hardware Fracturing:** The heavy investments in AMD ROCm and Intel XPU (VeRL) suggest that large-scale RL clusters will soon rely heavily on heterogeneous accelerators due to NVIDIA supply constraints.
3.  **vLLM as the De Facto Rollout Engine:** The synchronization between training frameworks and vLLM (updating to native weight sync APIs in TRL and Open Instruct) highlights vLLM's cemented status as the standard inference backend for GRPO/RLHF.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**ROLL (Reinforcement Learning Open Loop) Ecosystem Daily Digest: 2026-04-15**

Here is today's technical summary for the Alibaba ROLL repository.

### 1. Today's Highlights
Activity over the last 24 hours indicates a strong user focus on **Multimodal RL (LVLM)** and **LoRA integrations** within the ROLL framework. While no new code was merged today, developers are actively troubleshooting scaling configurations for large MoE models (Qwen3.5-35B-A3B) and identifying missing operational flags in ROLL's vision-language pipelines.

### 2. Releases
*   **No new releases** were published today. The ecosystem remains stable on the existing version baseline.

### 3. Important Issues
Three issues saw updates today, highlighting active edge-case testing by the community:

*   **MoE Checkpointing Error with MCore-Adapter:** ([#411](https://github.com/alibaba/ROLL/issues/411))
    A persistent issue (7 comments) regarding LoRA SFT with the `Qwen3.5-35B-A3B` Mixture-of-Experts model. Users are encountering errors during checkpoint saves when utilizing the Megatron-Core adapter, pointing to potential friction in ROLL's deep distributed checkpointing logic for highly sharded MoE architectures.
*   **Incomplete LoRA Support in VLM Pipelines:** ([#420](https://github.com/alibaba/ROLL/issues/420))
    A user compared the standard text pipeline (`rlvr_pipeline.py`) with the vision-language pipeline (`rlvr_vlm_pipeline.py`) and noted that LoRA-specific implementation is incomplete. Specifically, the `self.use_ref_model` flag and related reference model controls are currently missing from the LVLM pipeline.
*   **IndexError in Multimodal Data Scheduling:** ([#423](https://github.com/alibaba/ROLL/issues/423))
    A newly opened bug reports an `IndexError: list index out of range` related to `image_grid_thw`. The author suggests a specific patch in `roll/distributed/scheduler/generate_scheduler.py` to correctly handle the `multi_modal_data` keys during batch generation popping.

### 4. Key PR Progress
*   **Zero PR activity.** No pull requests were opened, updated, or merged in the last 24 hours. Maintainers may want to track the suggested fix in Issue [#423](https://github.com/alibaba/ROLL/issues/423) for a potential incoming community PR.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) become the default for post-training foundation models, open-source infrastructure must scale efficiently. **ROLL** provides critical distributed scheduling (as seen in the generate schedulers discussed today) that bridges standard RL training loops with massive inference workloads. 

Today's issues reflect the bleeding edge of the AI community's needs: **scaling RL to Mixture-of-Experts (MoE) architectures** and **extending text-only RL alignment to Large Vision-Language Models (LVLMs)**. How ROLL resolves the current MoE checkpointing and multimodal batch-scheduling bottlenecks will be highly indicative of the framework's readiness for the next generation of foundation model post-training.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROCK 
**Date:** 2026-04-15 | **Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

## 1. Today's Highlights
The past 24 hours marked a massive architectural milestone for the ROCK framework. The development team successfully merged a foundational refactor of the `Job` module, transitioning the system from a hardcoded Harbor-specific benchmark runner to a highly extensible `Job/Operator/Executor/Trial` abstraction. This allows ROCK to seamlessly support diverse RL and Agent evaluation tasks (including generic Bash scripts) under a unified SDK. Additionally, critical CI/CD robustness improvements were merged to fix parallel test execution race conditions.

## 2. Releases
* **No new releases** were cut in the last 24 hours. The current focus remains on merging foundational architectural refactors ahead of the next version bump.

## 3. Important Issues
* **[Major Refactor Completed]** [[FEATURE] Refactor Job module: extract Job/Trial/Operator/Executor abstraction #779](https://github.com/alibaba/ROCK/issues/779): The legacy `rock.sdk.bench.Job` hardcoded Harbor execution logic and bypassed the SDK via CLI. This issue tracked the creation of a new modular architecture to decouple these components. *(Status: Closed)*
* **[Gap Analysis Closed]** [[FEATURE] Close bench→job architecture replacement gaps (G1-G7) #783](https://github.com/alibaba/ROCK/issues/783): Tracked 7 specific regressions where the new `rock.sdk.job.*` architecture lost behavioral parity with the legacy system. All gaps have now been resolved, paving the way to deprecate the old `bench` API. *(Status: Closed)*
* **[CI/CD Bug Fixed]** [[Bug] Unit test cases based on the pg_container fixture fail under parallel pytest execution #777](https://github.com/alibaba/ROCK/issues/777): `pg_isready` was successfully passing before the DB fully accepted connections, causing `CannotConnectNowError` during concurrent `pytest-xdist` runs. *(Status: Closed)*
* **[New Feature Request]** [[Feature] (bench) add TemplateConfig and template field to NativeConfig #787](https://github.com/alibaba/ROCK/issues/787): Proposed adding `TemplateConfig` model support for referencing Agent-Bench templates. *(Status: Open)*

## 4. Key PR Progress
* **[MERGED] Architectural Overhaul:** [[FEATURE] Refactor Job module... #780](https://github.com/alibaba/ROCK/pull/780): Introduces the `rock/sdk/job/` module featuring a `Job` Facade, `JobExecutor`, `Operator`, and `Trial` abstraction layers. The CLI now supports `rock job run --type bash|harbor`. 
* **[MERGED] Parity Fixes:** [fix(job): close G1-G7 gaps between bench/job.py and rock.sdk.job #784](https://github.com/alibaba/ROCK/pull/784): Resolves the 7 regression gaps, ensuring the new SDK outputs an equivalent `JobResult` to the legacy system and adds `DeprecationWarning` to the old path.
* **[MERGED] Base Class Hoisting:** [refactor(job): hoist on_sandbox_ready backfill to AbstractTrial #789](https://github.com/alibaba/ROCK/pull/789): Moved `namespace` and `experiment_id` validation up from `HarborTrial` to `AbstractTrial`, ensuring all subclasses (like `BashTrial`) automatically inherit correct runtime backfill behavior.
* **[MERGED] DB Readiness Fix:** [fix: add SELECT 1 readiness check to pg_container fixture #778](https://github.com/alibaba/ROCK/pull/778): Closed the race condition window by implementing a real SQL query (`SELECT 1`) to guarantee Postgres is fully live before test workers begin.
* **[OPEN] Evaluation & Templates:** [Feature/xinshi/claw eval bashjob #782](https://github.com/alibaba/ROCK/pull/782) & [feat: add TemplateConfig... #786](https://github.com/alibaba/ROCK/pull/786): Active PRs pushing new ClawEval examples and NativeConfig template support.

## 5. Why This Project Matters in Today's RL Landscape
As the Reinforcement Learning field shifts increasingly towards complex, tool-using Agents and LLM-based workflows, evaluation environments must scale beyond single-node scripts. By decoupling its execution logic into `JobExecutor` and `Trial` abstractions, ROCK is positioning itself as a highly scalable, cloud-native orchestrator for RL/Agent benchmarks. Today's updates—specifically native `bash` job support and robust Postgres-backed testing—demonstrate a clear trajectory: transforming ROCK from a niche Harbor-specific tool into a universal, CI/CD-friendly framework capable of managing diverse, large-scale agent evaluations.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-04-15

### 1. Today's Highlights
Activity in the `slime` framework over the last 24 hours highlights a strong community push towards hardware accessibility and architecture compatibility. The focus is heavily on enabling efficient RL training for emerging Mixture-of-Experts (MoE) models—specifically the Qwen3.5 series—while resolving critical memory bottlenecks and broadening support for NVIDIA A100 clusters.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
*   **Qwen3.5 & MoE Memory Bottlenecks:** Users are actively attempting to run RL training on next-gen MoE architectures. Issue [#1831](https://github.com/THUDM/slime/issues/1831) requests support for the `Qwen3.5-35B-A3B` model. Concurrently, Issue [#1744](https://github.com/THUDM/slime/issues/1744) raises a critical concern regarding Out-of-Memory (OOM) errors during backpropagation on long-context training for `Qwen3.5-27B`, asking for Context Parallelism (CP) support for GDN layers.
*   **Architecture Conversion Errors:** Issue [#1820](https://github.com/THUDM/slime/issues/1820) reports a conversion failure when attempting to port `GLM5` from HuggingFace to Megatron (`torch_dist`), pointing to missing architecture support in the current Megatron core version. 
*   **Hardware Support Clarification:** Issue [#305](https://github.com/THUDM/slime/issues/305) was recently closed after confirming the framework's capability to perform DeepSeekV3-style RL training on NVIDIA A100s, specifically for smaller MoE debugging models like `Moonlight16B-A3B`.

### 4. Key PR Progress
*   **A100 Ecosystem Support:** PR [#1832](https://github.com/THUDM/slime/pull/1832) introduces a comprehensive patch set, offline-friendly conda builds, and Docker images specifically tailored to enable and optimize slime on A100 environments.
*   **Memory Optimization Fix:** PR [#1833](https://github.com/THUDM/slime/pull/1833) fixes a bug in `megatron_to_hf_mode == "bridge"` where activation checkpointing (recompute) parameters were being ignored, a crucial fix for VRAM management during large-scale training.
*   **Ecosystem Expansion:** PR [#1834](https://github.com/THUDM/slime/pull/1834) updates the documentation to feature "Relax," an asynchronous RL engine designed for omni-modal agentic training.

### 5. Why This Project Matters in Today's RL Landscape
As RL methodologies (such as GRPO and PPO) increasingly shift from dense LLMs to highly efficient MoE architectures (like Qwen3.5 and DeepSeekV3), memory optimization and distributed compute become the primary bottlenecks. The `slime` framework is establishing itself as a vital bridge for deploying these massive models in distributed environments. Today's updates directly reflect the RL community's immediate needs: resolving distributed parallelism (CP for GDN layers), ensuring compatibility with fast-evolving architectures (GLM5, Qwen3.5), and democratizing access to high-end hardware (offline A100 patch sets).

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Ecosystem Daily Digest: AReaL
**Date:** 2026-04-15 | **Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

## 1. Today's Highlights
Activity on AReaL remains highly focused on scaling distributed RL infrastructure and expanding inference/training service capabilities. Over the last 24 hours, the project saw **19 updated pull requests** and **4 active issues**. Key themes include significant strides in multi-agent RL (MARL) infrastructure, advanced MoE support, memory optimization for large models, and robust microservice architecture design. Two duplicate PRs addressing a critical weight-update hanging bug were also submitted by the community.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **Elastic Weight Update Setup ([#1101](https://github.com/inclusionAI/AReaL/issues/1101)):** A feature request to streamline and accelerate the synchronization of Actor weights to the Rollout Engine during RL training. This is a critical bottleneck for large-scale distributed training.
*   **Async Tensor Parallelism for Archon Engine ([#1110](https://github.com/inclusionAI/AReaL/issues/1110)):** Proposing the integration of async TP into the Archon engine to optimize inference compute throughput. 
*   **NPU Reference Model Bug ([#1099](https://github.com/inclusionAI/AReaL/issues/1099)):** A confirmed, reproducible bug where training aborts when `kl_ctl > 0` (utilizing a reference model) on NPU hardware.
*   **Engine Factory Refactoring ([#1168](https://github.com/inclusionAI/AReaL/issues/1168)):** Proposes the addition of factory classmethods for `FSDPEngine` and `RemoteSGLangEngine` to replace YAML-based initialization.

## 4. Key PR Progress
### Infrastructure & Performance Scaling
*   **MARL Phase 1 ([#1129](https://github.com/inclusionAI/AReaL/pull/1129)):** Implements the first phase of the Reasoning & Multi-Agent RL roadmap, introducing data pipelines, math reasoning verifiers, and per-agent reward grouping.
*   **CPU Memory Optimization ([#1182](https://github.com/inclusionAI/AReaL/pull/1182)):** Resolves CPU Out-Of-Memory (OOM) errors when using FSDP with multiple workers per node by mapping non-rank-0 processes to `meta` device. Drops CPU RAM footprint from ~512 GiB to ~64 GiB for 32B models.
*   **Offload/Onload Churn Reduction ([#1163](https://github.com/inclusionAI/AReaL/pull/1163)):** Batches GPU↔CPU memory transitions in the training loop, merging separate cycles for value computation and PPO updates.
*   **Karmarkar-Karp Partitioning ([#1151](https://github.com/inclusionAI/AReaL/pull/1151)):** Introduces the KK algorithm as an alternative to First Fit Decreasing for micro-batch allocation, ensuring more balanced sequence packing.

### Engine & Hardware Support
*   **MoE LoRA Support ([#1159](https://github.com/inclusionAI/AReaL/pull/1159)):** Extends LoRA support to Megatron Mixture-of-Experts (MoE) models and enables cross-node distributed training with Megatron + vLLM.
*   **SGLang PP & Speculative Decoding ([#1162](https://github.com/inclusionAI/AReaL/pull/1162), [#1176](https://github.com/inclusionAI/AReaL/pull/1176)):** Work-in-progress PRs adding Pipeline Parallelism (PP) and Speculative Decoding (via Eagle algo) for SGLang integration.

### Microservices & Tooling
*   **Training & Inference Controllers ([#1169](https://github.com/inclusionAI/AReaL/pull/1169), [#1178](https://github.com/inclusionAI/AReaL/pull/1178)):** Introduction of `GatewayTrainController` and multi-node inference support in the gateway controller, decomposing orchestration into HTTP microservices (router, guard, worker, data proxy).
*   **Agent Service & External APIs ([#1177](https://github.com/inclusionAI/AReaL/pull/1177), [#1183](https://github.com/inclusionAI/AReaL/pull/1183)):** Adding an `AgentServiceController` for production-grade tool-calling orchestration, and routing support for external OpenAI-compatible APIs to cache interactions and assign rewards.

### Critical Bug Fixes
*   **Fix Disk Weight Update Stalling ([#1181](https://github.com/inclusionAI/AReaL/pull/1181), [#1180](https://github.com/inclusionAI/AReaL/pull/1180)):** Two identical community submissions resolving a fatal bug where the vLLM rollout engine remained paused indefinitely after the first FSDP disk weight update.

## 5. Why This Project Matters in Today's RL Landscape
As RL shifts from research to production-scale alignment for LLMs, the underlying infrastructure must handle extreme compute, memory, and distributed coordination constraints. AReaL’s current development cycle directly addresses these bottlenecks. By aggressively optimizing CPU/GPU memory footprints (e.g., FSDP `meta` device mapping), expanding MoE capabilities, and abstracting RL workloads into scalable microservices, AReaL is positioning itself as a highly performant, enterprise-grade framework for training next-generation reasoning and multi-agent models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Ecosystem Daily Digest: TRL
**Date:** 2026-04-15 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
The TRL repository saw high maintenance activity today with 32 updated Pull Requests and 4 Issues. The focus was heavily on **infrastructure modernization** and **broadening model support**. Key themes include dropping legacy vLLM support to pave the way for native weight synchronization in v0.18, introducing new experimental trainers (TPO/SSD), and expanding tool-calling and chat template support for newer architectures like LLaMA 3.x, Phi-3, and GLM-4-MoE. 

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **Distributed Training Bug (ZeRO3):** [Issue #4899](https://github.com/huggingface/trl/issues/4899) details an `IndexError: pop from an empty deque` when running RLOO and GRPO with DeepSpeed ZeRO3. 
*   **Silent Data Loss in Reward Modeling:** [Issue #5539](https://github.com/huggingface/trl/issues/5539) highlights a critical bug in `DataCollatorForRewardModelingDataset` where checking the `"margin"` key only on `examples[0]` causes silent data loss if the dataset is shuffled.
*   **Async GRPO Bug:** [Issue #5498](https://github.com/huggingface/trl/issues/5498) points out that `AsyncGRPOTrainer` ignores the user-provided `processing_class` during `AsyncRolloutWorker` initialization, unnecessarily forcing a model reload.
*   **Processor Kwargs Warning:** [Issue #5502](https://github.com/huggingface/trl/issues/5502) tracks a massive spam of warning logs related to `processor_kwargs` introduced in `transformers` v5.4.0.

## 4. Key PR Progress
*   **vLLM Infrastructure Overhaul:** Two major PRs by `qgallouedec` update TRL's inference backend. [PR #5549](https://github.com/huggingface/trl/pull/5549) drops support for vLLM 0.11, while [PR #5547](https://github.com/huggingface/trl/pull/5547) updates the target support to vLLM 0.18.0, taking advantage of its native weight synchronization capabilities.
*   **New Trainers & Optimizations:** 
    *   [PR #5506](https://github.com/huggingface/trl/pull/5506) introduces an experimental **TPO (Training via Preference Optimization)** trainer.
    *   [PR #5542](https://github.com/huggingface/trl/pull/5542) optimizes memory usage in DPO/KTO by preventing the unnecessary loading of `ref_model` when `precompute_ref_log_probs=True`.
*   **Expanding Model Support (Templates & VLMs):**
    *   [PR #5518](https://github.com/huggingface/trl/pull/5518) & [PR #5520](https://github.com/huggingface/trl/pull/5520) add tool calling support for LLaMA 3.1/3.2 and fix `add_response_schema` for Vision Language Models (VLMs) in GRPO.
    *   [PR #5526](https://github.com/huggingface/trl/pull/5526) and [PR #5519](https://github.com/huggingface/trl/pull/5519) add training chat templates with `&#123;&#37; generation &#37;&#125;` markers for Phi-3 and GLM-4-MoE, respectively.
*   **API Cleanup:** [PR #5544](https://github.com/huggingface/trl/pull/5544) deprecates the `use_transformers_paged` config flag across GRPO, RLOO, and OnlineDPO configs due to lack of usage.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and alternative preference alignment techniques (DPO, KTO, GRPO) become the de facto standard for post-training LLMs, TRL remains the central open-source engine for these workflows. Today's digest demonstrates a maturing ecosystem: maintainers are aggressively iterating on asynchronous distributed training (AsyncGRPO) and third-party inference server integrations (vLLM v0.18), which are critical bottlenecks in large-scale RLHF. Furthermore, the rapid addition of model-specific tool-calling and training templates (Phi-3, LLaMA 3.x) proves that TRL is keeping pace with the fast release cadences of modern frontier models.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Open-Source Daily Digest: Tianshou
**Date:** 2026-04-15 | **Project:** [thu-ml/tianshou](https://github.com/thu-ml/tianshou)

Here is the daily activity briefing for the Tianshou repository.

### 1. Today's Highlights
Tianshou experienced a low-activity day with no new code merges, pull requests, or software releases. The sole focus of the past 24 hours was a newly opened support request regarding experiment checkpointing and policy restoration. 

### 2. Releases
**None.**
There have been no new official releases or version tags in the last 24 hours.

### 3. Important Issues
*   **[#1297 [OPEN] Loading policy from persistence dir](https://github.com/thu-ml/tianshou/issues/1297)**
    *   **Author:** AnsgarKasselmannTUM
    *   **Summary:** A user reported friction in the checkpoint loading workflow. When utilizing `Experiment.from_directory(..., restore_policy=True)` followed by `create_experiment_world()`, the user encounters an unspecified error or exception. This indicates a potential gap in the documentation or an underlying bug in Tianshou's high-level experiment management API when resuming training or deploying saved agents.

### 4. Key PR Progress
**None.** 
There were no active or updated Pull Requests within the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a highly relevant library in the Reinforcement Learning ecosystem due to its modular, "building-block" approach to RL algorithms. While many modern RL frameworks are monolithic, Tianshou provides researchers with clean abstractions (e.g., distinct modularization of Policies, Collectors, and Trainers) that make it uniquely suited for rapid prototyping and algorithmic customization. 

However, as seen in Issue #1297, the complexity of managing high-level APIs for experiment persistence is a common pain point in RL infrastructure. How Tianshou manages these edge cases directly impacts its usability for production-level continuous training pipelines and reproducible research workflows.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL Daily Digest for OpenRLHF based on the provided data. 

### 1. Today's Highlights
The primary focus for OpenRLHF on 2026-04-15 is the rollout of **version 0.10.1**, which officially introduces **Multi-turn Reinforcement Learning capabilities for Vision-Language Models (VLMs)**. Alongside this feature release, active bug tracking continues regarding VLM rollout edge cases in the repository's issues.

### 2. Releases
*   **[v0.10.1](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.10.1)** 
    *   **Key Feature:** Implemented support for Multi-turn RL specifically tailored for VLMs (authored by `@xiaoxigua999` in [commit `98dc14f`](https://github.com/OpenRLHF/OpenRLHF/commit/98dc14f)).
    *   **Bug Fixes:** Addressed minor bugs and resolved a critical logic flaw where the single-turn reward path incorrectly treated a valid score of `0.0` as a missing value ([commit `c1ba971`](https://github.com/OpenRLHF/OpenRLHF/commit/c1ba971)).

### 3. Important Issues
*   **[OPEN #1220](https://github.com/OpenRLHF/OpenRLHF/issues/1220) - VLM rollout prompt length inflation:** 
    Raised by `benluwang`. The current `SingleTurnAgentExecutor` expands prompts with multimodal placeholders via `process_prompt_with_images(...)`. However, it then passes these already-expanded `prompt_token_ids` to vLLM, resulting in artificially inflated prompt lengths.
*   **[CLOSED #1219](https://github.com/OpenRLHF/OpenRLHF/issues/1219) - Single-turn reward `scores=0.0` bug:** 
    Authored by `benluwang` and subsequently patched in v0.10.1. The issue highlighted a Python truthiness bug in `openrlhf/utils/agent.py` where `scores=rewards_info.get("scores") or rewards_info.get("rewards")` evaluated a legitimate `0.0` score as `False`, defaulting to alternative reward metrics.

### 4. Key PR Progress
*   No Pull Requests were updated or merged in the last 24 hours outside of the direct commits integrated into the v0.10.1 release.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source Reinforcement Learning from Human Feedback (RLHF) ecosystem matures, the frontier has shifted from standard text-based LLM post-training to complex, multimodal, and multi-turn agentic interactions. **OpenRLHF** remains at the cutting edge of this transition. By actively merging infrastructure for **Multi-turn VLM RL**, the project is providing the open-source community with the critical tools needed to train next-generation visual-AI agents that can maintain context and optimize rewards over complex, multi-step task execution.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Daily Digest: verl
**Date:** 2026-04-15  
**Project:** [verl-project/verl](https://github.com/verl-project/verl)  
**Activity:** 10 Issues | 38 PRs | 0 Releases

---

### 1. Today's Highlights
The verl ecosystem is experiencing aggressive expansion in multi-backend hardware support and fully asynchronous training architectures. Today's activity is dominated by critical compatibility fixes for next-generation VLMs (Qwen3.5, Gemma-4) and significant infrastructure pushes for AMD ROCm and Intel XPU. Notably, performance optimizations like trainer-side FP8 quantization and standalone log-prob servers indicate the framework is heavily focused on scaling RLHF/GRPO workloads efficiently across disaggregated GPU clusters.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Important Issues
*   **Architectural RFC: Unified Skip Systems ([#5998](https://github.com/verl-project/verl/issues/5998))**
    A feature request to implement a unified, managed skipping system for key RL workflow functions (expanding on `RolloutSkip`). This aims to significantly improve debugging efficiency and save compute/space during training iterations.
*   **Next-Gen VLM & Hardware Bugs:**
    *   **Gemma-4 FSDP:** Exploding gradients (Norm > 10.0) on the 4B model and FQN mismatch loading failures on the 31B model using FSDP ([#5999](https://github.com/verl-project/verl/issues/5999)).
    *   **Qwen3-VL & vLLM:** Training failures on vLLM 0.13.0 due to a removed parameter (`disable_mm_preprocessor_cache`) ([#5959](https://github.com/verl-project/verl/issues/5959)).
    *   **Feature Request:** Integrating Generative Reward Models (GenRM) into the fully async pipeline, which currently hardcodes `use_rm = False` ([#5949](https://github.com/verl-project/verl/issues/5949)).

### 4. Key PR Progress
*   **Multi-Hardware & Backend Expansion:**
    *   **AMD ROCm:** Massive compatibility fix for fully async FSDP2 training on AMD MI300X/MI308X clusters ([#6002](https://github.com/verl-project/verl/pull/6002)).
    *   **Intel XPU:** Introduction of Intel XPU device detection alongside CUDA/NPU ([#5943](https://github.com/verl-project/verl/pull/5943)).
    *   **Ascend NPU:** Fixes for checkpoint saving/resuming in async training on Ascend NPUs ([#5968](https://github.com/verl-project/verl/pull/5968)).
*   **Async Architectures & Performance:**
    *   **Standalone Log Prob Server:** Decouples `old_log_probs` computation from the actor training engine, saving weight-restoration overhead in fully async pipelines ([#5990](https://github.com/verl-project/verl/pull/5990)).
    *   **Trainer-Side FP8 Quantization:** Moves FP8 blockwise weight quantization to the trainer GPU, halving transfer bandwidth in disaggregated modes ([#5976](https://github.com/verl-project/verl/pull/5976)).
*   **Model & Engine Fixes:**
    *   Fixed critical FSDP2 runtime failures for Qwen2.5/3/3.5-VL models caused by malformed 3D `position_ids` ([#6000](https://github.com/verl-project/verl/pull/6000)).
    *   Updated the Megatron-Core MLA flash attention forward patch for versions >= 0.16.2 ([#6005](https://github.com/verl-project/verl/pull/6005)).

### 5. Why This Project Matters in Today's RL Landscape
As the RL community shifts toward complex Vision-Language Models (VLMs) and multi-turn agent workflows, training throughput and hardware lock-in remain massive bottlenecks. VeRL is positioning itself as the premier cross-platform RL scaling framework. By simultaneously stabilizing FSDP2 for high-parameter models (like Gemma-4 and Qwen-3.5), decoupling rollout/training servers via "fully async" architectures, and extending robust support to AMD and Intel accelerators, VeRL is actively solving the distributed systems challenges inherent in next-generation Post-training and RLHF.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct (allenai/open-instruct)
**Date:** 2026-04-15

## 1. Today's Highlights
The Open Instruct repository saw a massive surge in maintenance and feature integration over the last 24 hours, characterized by **18 updated Pull Requests** (with 10 officially closing). Key themes for the day include hardening the GRPO training loop (improving vLLM weight syncing, timeouts, and evolving rubric support) and a massive sweep of bug fixes across math evaluation utilities, context checkers, and dataset processors by the community. 

## 2. Releases
No new releases were cut today.

## 3. Important Issues
*   **OLMo-2 1B GRPO Training Instability:** Issue [#1610](https://github.com/allenai/open-instruct/issues/1610) (Closed) reported strange behavior and large sustained fluctuations in loss and gradient norms at ~2.3k steps during stage 1 RLVR. This appears to be directly addressed by recent merges, specifically the updated OLMo-2 1B training configs ([PR #1318](https://github.com/allenai/open-instruct/pull/1318)) and GRPO timeout handling fixes ([PR #1532](https://github.com/allenai/open-instruct/pull/1532)).

## 4. Key PR Progress

### Core RL & GRPO Training
*   **vLLM Integration:** Major progress on migrating to vLLM 0.16.0's native weight transfer API ([PR #1515](https://github.com/allenai/open-instruct/pull/1515)), which deletes ~200 lines of manual parameter broadcasting. Additionally, a critical bug causing `DataPreparationActor` to hang indefinitely on shutdown was fixed ([PR #1611](https://github.com/allenai/open-instruct/pull/1611)).
*   **Evolving Rubrics & Replications:** Config flags for evolving rubric rewards were successfully wired into the GRPO training loop ([PR #1581](https://github.com/allenai/open-instruct/pull/1581), Closed). A new script for DR Tulu training with Qwen 3.5 + evolving rubrics was also introduced ([PR #1609](https://github.com/allenai/open-instruct/pull/1609)).
*   **SWE-Agent RL:** An open PR adds `SWERLSandboxEnv`, extending RL to per-sample Docker tasks with submit-based test suites ([PR #1492](https://github.com/allenai/open-instruct/pull/1492)).
*   **UX & Reliability:** Disk space warnings in GRPO are now scoped to only warn on the first checkpoint ([PR #1608](https://github.com/allenai/open-instruct/pull/1608)), and deterministic downsampling for debugging was fixed ([PR #1603](https://github.com/allenai/open-instruct/pull/1603)).

### Utility & Infrastructure Bug Fixes
*   **Context & Tokenization:** Fixed a bug where `truncate_messages_to_fit_context` double-counted system tokens ([PR #1601](https://github.com/allenai/open-instruct/pull/1601), Closed). 
*   **Math Evaluation:** Corrected `is_equiv()` returning `None` instead of `False` on `ValueError` ([PR #1605](https://github.com/allenai/open-instruct/pull/1605), Closed), and fixed an off-by-one error in `find_shared_text` ([PR #1604](https://github.com/allenai/open-instruct/pull/1604), Closed).
*   **Data Processing:** Resolved a logic error in dataset selection validation that made `--dataset_name` unusable ([PR #1595](https://github.com/allenai/open-instruct/pull/1595), Closed), and fixed a bug ignoring rejected sequence lengths in preference filtering ([PR #1597](https://github.com/allenai/open-instruct/pull/1597), Closed).

### Tooling & Evaluations
*   **Judge Models:** Added MiniMax (M2.7) provider support for judge/evaluation models ([PR #1602](https://github.com/allenai/open-instruct/pull/1602), Closed).
*   **CI/CD:** Proposed an automated workflow to generate `CHANGELOG.md` from PR descriptions upon merge ([PR #1596](https://github.com/allenai/open-instruct/pull/1596)). `mason.py` was also brought under type checking ([PR #1599](https://github.com/allenai/open-instruct/pull/1599), Closed).

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct continues to serve as a critical reference implementation for applying RL from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) to frontier open-weight models (like OLMo-2 and Qwen 3.5). Today's activity highlights the ecosystem's current maturation phase: shifting from initial model launches to solving complex distributed systems bottlenecks (e.g., vLLM weight synchronization, Ray actor hangs) and exploring advanced RL paradigms like tool-use / code-execution environments (`SWERLSandboxEnv`) and dynamic rubric-based reward modeling.

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

**RL Open-Source Daily Digest: PettingZoo**
**Date:** 2026-04-15

Here is your daily brief on the PettingZoo (Multi-Agent Reinforcement Learning) ecosystem.

### 1. Today's Highlights
PettingZoo experienced a low-activity day with zero new releases and no active pull request updates. Activity was limited to a single ongoing discussion regarding API design constraints, specifically addressing the rigidity of environment state representations in multi-agent paradigms.

### 2. Releases
*   **None.** No new versions or patches were released in the last 24 hours.

### 3. Important Issues
*   **API Inflexibility in `.state()` for Centralized Training:** 
    *   **Issue [#1326](https://github.com/Farama-Foundation/PettingZoo/issues/1326)** (Open)
    *   **Context:** A user questioned why the `.state()` function strictly enforces an `ndarray` output, noting that it limits their ability to pass ground-truth dictionaries required for a Centralized Training Decentralized Execution (CTDE) setup. They highlighted a discrepancy in API flexibility, asking why `state_space` is more restrictive than `observation_space`.
    *   **Significance:** This is a highly relevant architectural question for MARL researchers. CTDE algorithms (like QMIX or MADDPG) frequently rely on complex, mixed-type global states (e.g., combining graphs, text, and continuous arrays). If the API restricts global states to standard arrays, it may deter researchers building complex CTDE environments from utilizing the standard PettingZoo API.

### 4. Key PR Progress
*   **None.** No open pull requests were updated or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo (maintained under the Farama Foundation) serves as the de facto standard library for Multi-Agent Reinforcement Learning (MARL) environment standardization, acting as the multi-agent counterpart to Gymnasium. As the MARL field shifts heavily toward heterogeneous agents and complex CTDE paradigms, the library's API constraints become critical bottlenecks. Issue [#1326](https://github.com/Farama-Foundation/PettingZoo/issues/1326) underscores a current tension in the ecosystem: the need for strict, standardized environment outputs (`ndarray`) to ensure algorithmic stability versus the demand for flexible data structures (`Dict`, `Graph`) required by modern, complex multi-agent architectures. How maintainers resolve this will impact the future design of ground-truth state handling in MARL benchmarks.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>