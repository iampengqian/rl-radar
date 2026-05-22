# RL Open Source Daily Digest 2026-05-23

> Generated: 2026-05-22 22:17 UTC | Projects covered: 15

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
The open-source reinforcement learning (RL) ecosystem on May 23, 2026, is sharply divided between the rapid, infrastructure-heavy evolution of LLM post-training frameworks and the stabilization of traditional RL environments. Activity is overwhelmingly concentrated in frameworks designed for Reinforcement Learning from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) at scale. Projects like `verl`, `AReaL`, and `slime` are tackling immense distributed systems challenges—specifically managing disaggregated training/inference and massive Mixture-of-Experts (MoE) models. Meanwhile, foundational RL tools like `CleanRL` and `Gymnasium` remain in mature, maintenance phases, focusing on philosophical rigor and documentation rather than feature expansion.

## Activity Comparison

*Note: AReaL, slime, Open Instruct, ROLL, torchtune, CleanRL, and Gymnasium showed activity but no releases.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 6 | 23 | 0 | Rapid iteration on agentic RL, MoE stability, and hardware abstractions. |
| **TRL** | 13 | 20 | 0 | Aggressive bug fixing and stabilization for GRPO and vLLM integrations. |
| **AReaL** | 2 | 7 | 0 | Deep infrastructure work on FSDP2/Megatron backends and MoE routing. |
| **slime** | 1 | 7 | 0 | Scaling distributed systems via disaggregated weight sync and Gemma 4 MoE. |
| **ROCK** | 3 | 6 | 1 | Productionizing RL ops via YAML inheritance and K8s resource management. |
| **ROLL** | 1 | 1 | 0 | Exploring observability and scaling pipelines for Qwen MoE models. |
| **Open Instruct** | 0 | 3 | 0 | Enhancing RL observability via rollout tracing and automated evals. |
| **torchtune** | 0 | 1 | 0 | Refining distributed logging prior to process group initialization. |
| **CleanRL** | 1 | 0 | 0 | Debating the tradeoff between code purity and optimized dependencies. |
| **Gymnasium** | 1 | 0 | 0 | Steady focus on documentation for MuJoCo-v5 continuous control tasks. |
| **Others*** | 0 | 0 | 0 | Dormant. |

*\*OpenRLHF, PettingZoo, rl\_games, Stable Baselines3, and Tianshou reported zero activity.*

## Shared Research & Engineering Directions

**Research Directions**
*   **Mixture-of-Experts (MoE) Focus:** A dominant theme across `verl`, `slime`, `AReaL`, and `ROLL` is stabilizing RL training for sparse MoE architectures (e.g., Qwen 3.5/3.6, Gemma 4). This involves solving complex routing discrepancies during asynchronous rollouts.
*   **Agentic RL & Multi-turn Rollouts:** The field is moving explicitly from single-turn chat alignment to multi-turn tool-use. `verl` is leading this with multi-trajectory rollouts and integrations for complex agentic trials.
*   **Advanced Optimizers:** Frameworks are exploring faster convergence rates for massive models, evidenced by `AReaL` integrating the Muon (MomentUm Orthogonalized by Newton-Schulz) optimizer.

**Engineering & Infrastructure Directions**
*   **Disaggregated Training/Inference:** Separating inference rollouts from training is critical for scale. Projects like `slime` (delta weight sync) and `AReaL` (FSDP weight co-location via CUDA IPC) are actively optimizing weight synchronization across disaggregated clusters.
*   **Continuous Batching & vLLM Integration:** `TRL` and `verl` are heavily investing in high-throughput inference backends, specifically continuous batching for asynchronous GRPO and resolving edge cases in vLLM importance sampling.
*   **Observability (Rollout Traces):** Debugging reward hacking is a priority. `Open Instruct` and `ROLL` both integrated "Trackio" for local-first, granular tracing of RL rollout trajectories.

## Differentiation Analysis
*   **LLM Alignment Frameworks (`TRL` vs. `verl` vs. `AReaL`/`slime`):** `TRL` serves as the accessible, foundational layer, currently focused on ensuring algorithmic robustness (fixing KL gradients) for mainstream users. In contrast, `verl` and `AReaL` are targeting frontier labs needing deep systems-level scaling (e.g., multi-turn Agent RL, FSDP2/Megatron backend orchestration). `slime` differentiates by acting as a "glue" framework for highly efficient, cross-datacenter disaggregated compute.
*   **RL Infrastructure & MLOps (`ROCK`):** While most frameworks focus on the algorithmic/model layer, `ROCK` targets enterprise deployment. Its focus on YAML base-inheritance and Kubernetes disk quotas solves operational hurdles for large-scale simulators.
*   **Traditional RL (`CleanRL` vs. `Gymnasium`):** These projects maintain their distinct, educational/foundational niches. They are shielded from the LLM-scaling madness, prioritizing API stability (`Gymnasium`) and interpretability (`CleanRL`).

## Community Momentum & Maturity
The ecosystem displays a clear bifurcation in maturity. High-velocity projects (`verl`, `TRL`, `AReaL`) show healthy, collaborative momentum, actively merging community PRs to solve bleeding-edge distributed computing bugs. Conversely, classic RL libraries (`Gymnasium`, `CleanRL`, `Stable Baselines3`) have plateaued into mature maintenance phases, with community discussions revolving around philosophical boundaries (like `CleanRL`'s single-file ethos) or documentation expansions. The widespread integration of open-source telemetry tools (like Hugging Face's Trackio across `Open Instruct`, `ROLL`, and `AReaL`) indicates a maturing ecosystem standardizing around improved developer observability.

## Trend Signals
1.  **The MoE Routing Bottleneck:** As MoE models become the default for open-weight LLMs, expect a surge in specialized infrastructure to handle expert routing replay during asynchronous weight updates.
2.  **Shift to "Agent RL":** Single-turn RLHF is commoditized. The next frontier for post-training frameworks is robust, multi-turn reinforcement learning capable of handling tool-call failures and malformed generations without crashing.
3.  **Hardware Agnosticism:** Spurred by GPU supply constraints, frameworks like `verl` are building platform abstraction layers, signaling a future where large-scale RL workloads seamlessly port to domestic and alternative AI accelerators (NPUs, MLUs).

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Daily Digest for May 23, 2026, based on the ROLL repository activity:

# RL Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-05-23

### 1. Today's Highlights
Activity on the ROLL framework over the past 24 hours indicates a dual focus: scaling up to next-generation Mixture-of-Experts (MoE) architectures and enhancing experiment observability. The community is actively inquiring about advanced GRPO training for new flagship models, while upstream contributors are integrating localized tracing tools to better monitor RL rollout generations.

### 2. Releases
No new releases were recorded in the last 24 hours. 

### 3. Important Issues
*   **Inquiry on Qwen 3.6 MoE Support for GRPO** | [Issue #449](https://github.com/alibaba/ROLL/issues/449)
    *   **Context:** A community user requested confirmation on whether ROLL currently supports GRPO (Group Relative Policy Optimization) for the newly released Qwen 3.6 MoE model, specifically asking for reference training scripts.
    *   **Analysis:** This highlights a critical user need for out-of-the-box support for frontier sparse architectures. As MoE models become the standard for efficient, high-parameter RLHF, framework adoption relies heavily on seamless integration and robust documentation for models like Qwen 3.6. 

### 4. Key PR Progress
*   **Add Trackio Rollout Trace Logging** | [PR #450](https://github.com/alibaba/ROLL/pull/450) (Author: `abidlabs`)
    *   **Context:** This open PR introduces trace logging via *Trackio*, Hugging Face’s free, local-first experiment tracking library. It builds upon ROLL's existing tracker abstraction by adding specific telemetry for RLVR (Reinforcement Learning from Verifiable Rewards) rollout generations.
    *   **Analysis:** Debugging RL rollouts is notoriously difficult. By integrating Trackio directly into the rollout tracing system, this PR significantly improves the developer experience, allowing engineers to inspect token-level generation trajectories locally without relying on cloud-based telemetry.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, applying RLHF/GRPO to massive foundation models requires distributed systems capable of handling immense memory and compute loads. ROLL (an RLHF/RL training framework) serves as a critical bridge between state-of-the-art open-source models (like the Qwen series) and production-level scaling. 

Today's logs perfectly capture the primary challenges of the modern RL ecosystem: 
1. **Architectural Scaling:** Keeping pace with rapid model releases (e.g., adapting MoE routing to GRPO pipelines).
2. **Observability:** The necessity of granular, local-first tracing (Trackio) to debug complex, verifiable reward loops (RLVR) without incurring massive cloud logging overhead.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

### RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-05-23
**Project:** alibaba/ROCK

---

#### 1. Today's Highlights
The ROCK (Robust Open Continuous Knowledge) development team is doubling down on configuration management and infrastructure resilience. The past 24 hours saw the release of **v1.8.1**, which introduces powerful new YAML inheritance capabilities for multi-region deployments. Concurrently, the open issues and PRs reveal a strong strategic push toward enhanced Kubernetes resource management (disk quotas) and robust RL experimentation tracking.

#### 2. Releases
*   **[v1.8.1](https://github.com/alibaba/ROCK/releases/tag/v1.8.1)**
    *   *Focus:* Configuration Management.
    *   *Changes:* Introduced `_base` inheritance and deep merging in `RockConfig` ([PR #1003](https://github.com/alibaba/ROCK/pull/1003)). This significantly streamlines multi-region RL deployment configurations by allowing region-specific YAMLs to cleanly inherit from a base configuration.

#### 3. Important Issues
*   **[Issue #1000](https://github.com/alibaba/ROCK/issues/1000) [OPEN]: Support sandbox restart**
    *   Submitted by *zhangjaycee*. Requests the ability to restart existing sandboxes rather than tearing them down and recreating them, which is critical for long-running, complex RL training pipelines.
*   **[Issue #998](https://github.com/alibaba/ROCK/issues/998) [OPEN]: Add tracking config in SDK**
    *   Submitted by *Dengsheng-wzh*. Proposes adding experiment tracking configurations directly into the SDK job configs, aiming to standardize how metrics and RL training states are logged and monitored.
*   **[Issue #986](https://github.com/alibaba/ROCK/issues/986) [CLOSED]: Admin service "connection is closed" after DB restart**
    *   Resolved a critical stability bug where intermittent PostgreSQL restarts caused SQLAlchemy async connection pools to stale out, crashing the admin service.

#### 4. Key PR Progress
*   **Configuration & Docs:**
    *   **[PR #1003](https://github.com/alibaba/ROCK/pull/1003) [CLOSED]:** Implemented the `_base` inheritance logic (shipped in v1.8.1).
    *   **[PR #996](https://github.com/alibaba/ROCK/pull/996) [CLOSED]:** Housekeeping PR that sanitized the v1.8.0 release notes by removing internal DingTalk links to ensure a clean public GitHub footprint.
*   **Infrastructure & Database Resilience:**
    *   **[PR #997](https://github.com/alibaba/ROCK/pull/997) [CLOSED] & [PR #987](https://github.com/alibaba/ROCK/pull/987) [CLOSED]:** Both PRs targeted the DB connection staleness issue ([#986](https://github.com/alibaba/ROCK/issues/986)) by implementing a single retry mechanism for `SandboxTable` operations upon detecting a stale connection.
    *   **[PR #994](https://github.com/alibaba/ROCK/pull/994) [CLOSED]:** Added disk quota limits for K8s operator sandboxes in both pool and template modes, preventing run-away RL environment simulators from consuming excessive node storage.
*   **Currently Under Review:**
    *   **[PR #1001](https://github.com/alibaba/ROCK/pull/1001) [OPEN]:** Active development on adding the sandbox restart capability.
    *   **[PR #999](https://github.com/alibaba/ROCK/pull/999) [OPEN]:** Active development on integrating tracking configs into the SDK.

#### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, moving from single-node Python scripts to distributed, scalable training pipelines remains a massive engineering hurdle. ROCK acts as a bridge, providing enterprise-grade infrastructure for RL. 

Today's updates highlight exactly what production RL teams need: **reliability and resource control**. Features like K8s disk quotas and DB connection resilience ensure that massive parallel environment simulations can run without disrupting the cluster. Furthermore, the introduction of `_base` YAML inheritance solves a notorious pain point in RL ops—managing hyperparameter and environment configurations across multiple cloud regions. By actively integrating experiment tracking directly into the SDK, ROCK is positioning itself as a comprehensive, robust framework for deploying RL in real-world, production environments.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: slime (THUDM)
**Date:** 2026-05-23

Here is your daily briefing on the `slime` reinforcement learning framework, an open-source ecosystem focused on scalable RLHF and post-training for Large Language Models. 

## 1. Today's Highlights
Activity over the past 24 hours shows a strong focus on system robustness and infrastructure scaling. The community merged 1 new issue and tracked 7 active pull requests. Key themes include expanding model architecture support to Google's latest Gemma 4 models, optimizing weight synchronization for disaggregated training/inference setups, and patching several critical debug and memory management bugs.

## 2. Releases
No new releases were recorded today.

## 3. Important Issues
*   **Memory Saver Bug under Specific Configurations**
    *   **Issue:** [#1936 [Bug] TorchMemorySaver observes invalid LD_PRELOAD when adding --disable-weights-backuper](https://github.com/THUDM/slime/issues/1936) 
    *   **Context:** Opened by `zyfzjsc988`, this issue reports a crash during the initialization of training models (`train.py`). The `TorchMemorySaver` throws an invalid `LD_PRELOAD` error specifically when the `--disable-weights-backuper` flag is passed, interrupting the training pipeline.

## 4. Key PR Progress
Several substantial contributions are currently in review:

*   **New Model Support:** [PR #1855 feat(gemma4): add Gemma4 26B-A4B MoE and 31B dense support](https://github.com/THUDM/slime/pull/1855) by `leofan-lab`. This PR introduces comprehensive support for Gemma 4 architectures, covering both Mixture-of-Experts (26B-A4B) and dense (31B) variants, including HuggingFace↔Megatron weight conversions and passing parity tests across TP/PP/DP/CP/EP configurations.
*   **Disaggregated Infrastructure:** [PR #1806 feat: delta weight sync (disk + nccl transports)](https://github.com/THUDM/slime/pull/1806) by `nanjiangwill`. A crucial infrastructure PR for training/inference disaggregation (e.g., placing trainers and rollout engines in different datacenters). It optimizes network I/O by syncing only delta weights rather than full parameters.
*   **Megatron Scaling:** [PR #1933 [2/N] Support training with variable global batch size](https://github.com/THUDM/slime/pull/1933) by `zhuzilin`. Part of an ongoing series (`run-ci-megatron`) to allow dynamic global batch sizing during training.
*   **Debug Tooling Fixes:** [PR #1922 fix(debug): auto-append rollout_id/rank in save_debug_train_data path template](https://github.com/THUDM/slime/pull/1922) by `wlf-darkmatter`. Resolves a multi-GPU file overwrite issue where distributed ranks would accidentally overwrite the same debug data file. 
*   **Memory Backuper Patch:** [PR #1937 fix: TorchMemorySaver observes invalid LD_PRELOAD. when add --disable-weights-backuper](https://github.com/THUDM/slime/pull/1937) by `zyfzjsc988`. Directly addresses Issue #1936.
*   **Build System Patch:** [PR #1927 fix: quote nvidia-modelopt requirement in build_conda.sh](https://github.com/THUDM/slime/pull/1927) by `zhiminwei551`. A shell-scripting fix where an unquoted `>` in the version constraint was mistakenly interpreted as a stdout redirection.
*   **Argparse Patch:** [PR #1938 fix: guard sglang_speculative_algorithm read in --debug-train-only mode](https://github.com/THUDM/slime/pull/1938) by `leofan-lab`. Fixes an `AttributeError` that occurs when SGLang arguments are skipped during specific debug modes.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs push past the limits of single-node training, RL post-training (like GRPO or PPO) is becoming heavily constrained by distributed system bottlenecks. The `slime` repository is actively solving the most pressing hardware/software co-design challenges in the RL landscape:
1.  **Disaggregated Compute:** PRs like #1806 reflect an industry shift away from co-located training and inference, moving toward high-efficiency delta-syncing over constrained inter-datacenter networks.
2.  **Diverse Architectures:** Adding support for MoE models like Gemma 4 (PR #1855) shows a commitment to enabling RL tuning on sparse architectures, which are quickly becoming the standard for efficient frontier models. 
3.  **Multi-Engine Interoperability:** Fixes surrounding SGLang integration (#1938) and Megatron parallelism (#1933) highlight Slime's role as a glue framework connecting high-speed inference engines with massive distributed training backends.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-23

Here is today's breakdown of the latest developments in the AReaL (github.com/inclusionAI/AReaL) open-source ecosystem.

## 1. Today's Highlights
Activity remains high with **7 pull requests** updated in the last 24 hours. The core maintainers and community are heavily focused on advancing AReaL's distributed training backends (specifically FSDP2 and Megatron) and optimizing asynchronous RL workloads. Major feature additions include FSDP weight co-location via CUDA IPC, MoE routing stabilization, and the introduction of the Muon optimizer.

## 2. Releases
**No new releases** were recorded today. The project appears to be in an active feature-development phase, likely building towards their next Q2 milestone.

## 3. Important Issues
*   **[Roadmap] 2026 Q2 Milestones** ([#1302](https://github.com/areal-project/AReaL/issues/1302)): This ongoing tracker defines AReaL's target enhancements through July 31, 2026. It serves as the primary north star for open-source contributors looking to make a high-impact contribution.
*   **[Feature] Migrate the primary megatron integration lib from `mbridge` to `megatron-bridge`** ([#1260](https://github.com/areal-project/AReaL/issues/1260)): A significant architectural shift to align with the official and de-facto Megatron model registry. This migration ensures long-term API compatibility and better upstream support. 

## 4. Key PR Progress
*   **FSDP Weight Co-location via CUDA IPC** ([#1361](https://github.com/areal-project/AReaL/pull/1361)): A critical infrastructure update. It enables FSDP-trained models to seamlessly update SGLang inference weights via CUDA IPC on shared GPUs, mirroring the existing Megatron path and massively speeding up asynchronous training-inference cycles.
*   **Muon Optimizer Support** ([#1270](https://github.com/areal-project/AReaL/pull/1270)): Introduces the **Muon (MomentUm Orthogonalized by Newton-Schulz)** optimizer to AReaL. This includes native distributed implementations for both FSDP2 and Megatron backends, potentially yielding faster convergence rates. 
*   **Rollout Routing Replay (R3) for MoE** ([#1207](https://github.com/areal-project/AReaL/pull/1207)): Tackles training instability in asynchronous RL by recording expert routing indices during MoE inference and forcing the training engine to replay them, bridging the train-test routing discrepancy.
*   **Controller v2 Refactor** ([#1354](https://github.com/areal-project/AReaL/pull/1354)): A structural overhaul of the AReaL controller to streamline orchestration workflows.
*   **Megatron Async Save** ([#1356](https://github.com/areal-project/AReaL/pull/1356)): Wires up `AsyncCallsQueue` for Megatron checkpointing, finally implementing the `async_save` feature to prevent I/O bottlenecks during massive training runs.
*   **ZERO1 + Dynamic Tree Attention (DTA)** ([#1287](https://github.com/areal-project/AReaL/pull/1287)): Adds a consolidated ZERO1 data parallelism and DTA path tailored for Archon tree-search RL workloads.
*   **Trackio Trace Logging** ([#1360](https://github.com/areal-project/AReaL/pull/1360)): Extends AReaL's existing Trackio integration to support detailed trace logging for better local-first experiment tracking.

## 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/post-training landscape, the bottleneck has shifted from algorithmic design to **systems-level infrastructure**. Training large LLMs and MoE models with RL requires orchestrating massive inference and training clusters asynchronously. 

AReaL's current PR pipeline perfectly reflects the needs of modern frontier labs: stabilizing MoE expert routing during asynchronous rollouts (R3), minimizing memory overhead and latency during weight updates (FSDP/SGLang CUDA IPC co-location), and exploring cutting-edge optimizers like Muon. By providing distributed backends (Megatron and FSDP2) that tightly couple training with high-throughput inference engines like SGLang, AReaL is establishing itself as an essential, scalable framework for production-grade LLM reinforcement learning.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL
**Date:** 2026-05-23

Here is the daily digest for Hugging Face's `trl` library, summarizing the latest activity across reinforcement learning (RL) and alignment fine-tuning tooling.

## 1. Today's Highlights
The TRL repository saw high maintenance activity today, with **20 PRs updated** and **13 issues active**, but **0 new releases**. The core themes for May 22 were:
*   **Algorithmic Robustness:** Several critical bug fixes were merged to stabilize `GRPOTrainer` (fixing KL gradients, vLLM importance sampling, and generation deadlocks).
*   **Infrastructure & Scale:** Major forward strides in Asynchronous GRPO (vLLM continuous batching) and CI/testing modernization for Qwen3.5 architectures. 
*   **Codebase Alignment:** A massive push to synchronize `KTOTrainer` underflow/metrics with `DPOTrainer` standards.

## 2. Releases
*   **None** (No new version tags were published in the last 24 hours).

## 3. Important Issues
*   **Spurious KL Gradients in GRPO/RLOO ([#5588](https://github.com/huggingface/trl/issues/5588)):** A notable algorithmic bug where zero-standard-deviation reward groups produced unexpected KL gradients if `beta > 0`. *Status: Closed via PR [#5777].*
*   **Importance Sampling Aggregation Error ([#5814](https://github.com/huggingface/trl/issues/5814)):** Discovered that the sequence-level vLLM importance sampling correction was aggregating per-token log-ratios using `sum` instead of `mean`, artificially inflating variance based on completion length. *Status: Closed via PR [#5815].*
*   **CI Deadlock due to Inference Mode ([#5817](https://github.com/huggingface/trl/issues/5817)):** Slow tests failing because background generation threads blocked inplace ops under `torch.inference_mode()`. *Status: Closed via PR [#5818].*
*   **Evaluation Metric KeyErrors ([#5800](https://github.com/huggingface/trl/issues/5800)):** `SFTTrainer` crashed upon evaluation when trying to log `eval_mean_token_accuracy` due to improper metric dictionary updates. *Status: Closed via PR [#5811].*
*   **Request for GRPO Special Token Control ([#3026](https://github.com/huggingface/trl/issues/3026)):** A highly requested feature (👍 7) asking for a toggle to prevent GRPO from hard-coding `skip_special_tokens=True` (crucial for custom reward functions relying on structural tokens). 

## 4. Key PR Progress
### Merged / Closed
*   **[Bug Fix] Stabilize GRPO Training ([#5777](https://github.com/huggingface/trl/pull/5777)):** Resolved issue #5588 by correctly handling zero-std reward groups to prevent spurious KL gradients.
*   **[Bug Fix] Fix vLLM Importance Sampling ([#5815](https://github.com/huggingface/trl/pull/5815)):** Corrected the sequence-level aggregation logic from `sum` to `mean`.
*   **[Bug Fix] Fix Generation Thread Deadlock ([#5818](https://github.com/huggingface/trl/pull/5818)):** Removed `torch.inference_mode()` from `generate_batch` to allow necessary inplace ops in background threads.
*   **[Refactor] Align KTO with DPO ([#5810](https://github.com/huggingface/trl/pull/5810), [#5816](https://github.com/huggingface/trl/pull/5816), [#5820](https://github.com/huggingface/trl/pull/5820)):** A comprehensive 3-part refactor of `KTOTrainer` to streamline metric tracking, Liger kernel flow, and direct metric averaging.
*   **[CI/Testing] Qwen 3.5 Think/NoThink Fixtures ([#5819](https://github.com/huggingface/trl/pull/5819), [#5821](https://github.com/huggingface/trl/pull/5821)):** Future-proofed the test suite by migrating to tiny Qwen3.5 models to test both standard and "Think" chat templates.

### Open / In Progress
*   **[Feature] Continuous Batching for AsyncGRPO ([#5781](https://github.com/huggingface/trl/pull/5781)):** Adding continuous batching support to asynchronous GRPO, a critical update for high-throughput RLHF.
*   **[Feature] OpenAI-Compatible vLLM Server ([#5803](https://github.com/huggingface/trl/pull/5803)):** An exploratory PR to make the internal `trl vllm-serve` script fully OpenAI-compatible, capitalizing on vLLM 0.17+'s new weight-sync capabilities.
*   **[Feature] DPO Sample Weighting / MADPO ([#5804](https://github.com/huggingface/trl/pull/5804)):** Introduces optional per-pair sample weighting to `DPOTrainer` via a dataset `"weight"` column. Currently a draft seeking community feedback.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to be the foundational framework for LLM alignment. Today's commit log proves that as the field shifts entirely toward **online RL algorithms (like GRPO)** and **inference-heavy RL scaling**, infrastructure is the main bottleneck. By fixing vLLM importance sampling bugs, enabling continuous batching for Async GRPO, and standardizing Qwen3.5 testing pipelines, TRL is doing the unglamorous but critical work required to make stable, distributed RLHF accessible to the open-source community.

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

# RL Daily Digest: verl-project/verl
**Date:** 2026-05-23

Here is the daily breakdown of activity for the `verl` reinforcement learning framework.

## 1. Today's Highlights
The verl ecosystem saw a robust 23 Pull Requests updated alongside 6 active Issues, signaling rapid iteration across the framework. Key focal points for the day include major advancements in **Agentic RL** (new multi-trajectory and agent-loop integrations), critical **memory leak fixes** for the Megatron backend, and continued **hardware extensibility** efforts via a new platform abstraction layer. 

## 2. Releases
No new releases were cut today. The community continues to iterate on the `main` branch, with recent Docker environment updates merging support for **vLLM 0.20.2** ([PR #6393](https://github.com/volcengine/verl/pull/6393)) and **SGLang 0.5.12** ([PR #6435](https://github.com/volcengine/verl/pull/6435)).

## 3. Important Issues
*   **Agent RL Instability in Qwen MoE Models:** A highly critical discussion ([Issue #6252](https://github.com/volcengine/verl/issues/6252)) reports that GRPO training for the Qwen3.5/Qwen3.6 35B-A3B models crashes after ~100 steps due to malformed tool calls during multi-turn agentic tasks. This highlights the growing pains of aligning large MoE models for tool-use.
*   **Silent Training Failures in Sync PPO:** Issue [#6437](https://github.com/volcengine/verl/issues/6437) points out a dangerous edge case where `main_ppo_sync` silently trains on partial rollout batches if an agent-loop fails midway, potentially leading to degraded model performance without throwing a hard error.
*   **OOM and Crash Stabilization:** Users continue to report OOM errors on high-end hardware (8x80GB GPUs) ([Issue #6449](https://github.com/volcengine/verl/issues/6449)) and crashes involving FSDP2 CPU offloading during weight updates ([Issue #5995](https://github.com/volcengine/verl/issues/5995) - 👍 7).

## 4. Key PR Progress

### Agentic & RL Algorithms
*   **Harbor Agentic RL Integration:** [PR #6444](https://github.com/volcengine/verl/pull/6444) introduces an experimental recipe bridging verl's `AgentLoopBase` with the Harbor framework for complex, multi-turn agentic trials.
*   **Multi-Trajectory Rollouts:** [PR #6271](https://github.com/volcengine/verl/pull/6271) adds support for multi-trajectory outputs within a single rollout step in the fully-async pipeline.
*   **Generic Remote Backend:** [PR #6422](https://github.com/volcengine/verl/pull/6422) abstracts a generic remote backend for RL training, kicking off with an ArcticRL implementation.

### Backend & Infrastructure Fixes
*   **Megatron Memory Leak:** [PR #6447](https://github.com/volcengine/verl/pull/6447) explicitly releases storage during ref model offloading, fixing a notable GPU memory leak in the non-DDP Megatron path.
*   **Async Pipeline Bug Fixes:** [PR #6438](https://github.com/volcengine/verl/pull/6438) resolves an `AttributeError` in `FullyAsyncTrainer` by correctly initializing the `_dump_executor`.
*   **SGLang Port Conflicts:** [PR #6448](https://github.com/volcengine/verl/pull/6448) fixes `EADDRINUSE` crashes by assigning unique ports per SGLang replica on multi-GPU nodes. 
*   **LoRA Checkpointing:** [PR #6409](https://github.com/volcengine/verl/pull/6409) ensures `lora_train_meta.json` is properly persisted for PPO actor checkpoints, fixing export crashes.

### Hardware & Model Support
*   **Platform Abstraction Layer:** [PR #6086](https://github.com/volcengine/verl/pull/6086) introduces a plugin-based engine system to natively support diverse AI accelerators (Ascend NPU, Cambricon MLU, Moore Threads MUSA) out of the box.
*   **Multimodal & MoE Upgrades:** Support for Megatron chunk entropy was added ([PR #6446](https://github.com/volcengine/verl/pull/6446)), alongside a launch script for Qwen3-VL-30B on Ascend ([PR #6443](https://github.com/volcengine/verl/pull/6443)). Additionally, MoE router replay (R2/R3) is now supported in the VeOmni pipeline ([PR #6325](https://github.com/volcengine/verl/pull/6325)).

## 5. Why This Project Matters in Today's RL Landscape
verl has solidified its position as a premier post-training framework for frontier models. Today's activity demonstrates exactly *why* it remains critical to the open-source RL landscape:
1.  **Solving for Agents, not just Chat:** The shift from single-turn RLHF to multi-turn "Agent RL" (evidenced by the Harbor integration and multi-trajectory PRs) shows verl is actively building the infrastructure required to train autonomous tool-calling models.
2.  **Surviving the MoE Era:** As the industry pivots heavily to Mixture-of-Experts (MoE) architectures like Qwen-A3B and DeepSeek, memory efficiency and distributed compute become monumental hurdles. verl's continuous deep-dive fixes into Megatron memory leaks and MoE router replays make training these architectures viable.
3.  **Hardware Agnosticism:** With GPU supply constraints and the rise of domestic AI chips, verl's investment in a Platform Abstraction Layer ensures the open-source community isn't permanently locked into a single hardware vendor for RL workloads.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL Ecosystem Daily Digest: torchtune
**Date:** 2026-05-23

### 1. Today's Highlights
Activity in the `torchtune` repository over the last 24 hours was minimal but highly targeted, consisting of a single bug-fix Pull Request aimed at improving distributed training logging reliability. No new releases or issues were recorded.

### 2. Releases
*   **None** for 2026-05-23.

### 3. Important Issues
*   **None** updated in the last 24 hours. 

### 4. Key PR Progress
*   **[#2964 fix(logging): use RANK env var in log_rank_zero before dist init](https://github.com/pytorch/torchtune/pull/2964)** by `kratos0718` (Status: OPEN)
    *   **Summary:** This PR addresses a flaw in the `log_rank_zero` utility (fixing Issue #2700). Previously, if `dist.is_initialized()` was `False` (typically before the `setup()` method calls `init_process_group`), the function defaulted to `rank=0` for all processes. This caused redundant logging where every process printed the full configuration during `config.log_config`. The fix ensures the function checks the `RANK` environment variable directly before the distributed backend is fully initialized.

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning from Human Feedback (RLHF) and post-training workloads, managing distributed compute is a primary bottleneck. While `torchtune` is broadly recognized for LLM fine-tuning, its robust recipe-based architecture makes it a foundational tool for RL practitioners adapting open-weight models. 

Fixing pre-initialization logging bugs—like the one addressed in PR #2964—might seem minor, but it is critical for debugging complex, multi-node RL training loops. Accurate, rank-aware logging before `init_process_group` is essential for diagnosing cluster configuration errors and resource deadlocks without flooding stdout, ensuring that RL engineers can iterate on reward models and policy optimization without unnecessary infrastructure friction.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-05-23 | **Project:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on repository tooling and evaluation integrations, highlighted by a new integration for GRPO evaluations and enhanced trace logging for RL rollouts.

## 2. Releases
No new releases were cut in the last 24 hours.

## 3. Important Issues
Zero issues were created or updated today, indicating a stable development cycle regarding bug tracking and feature requests.

## 4. Key PR Progress
Three pull requests saw updates, focusing heavily on evaluation workflows and local debugging infrastructure:

*   **[OPEN] [#1698 - Add olmo-eval Beaker launch integration for GRPO](https://github.com/allenai/open-instruct/pull/1698)** by `mnoukhov`
    *   **Summary:** Introduces `OlmoEvalLaunchConfig` and `launch_olmo_evals_on_weka()` to automatically trigger evaluations via `olmo-eval beaker launch` after GRPO checkpoints. This is wired into `grpo.py` and `grpo_fast.py` behind a new CLI flag, streamlining post-training evaluation workflows on Weka.
*   **[CLOSED] [#1696 - Export setuptools-scm pretend version in debug launch scripts](https://github.com/allenai/open-instruct/pull/1696)** by `mnoukhov`
    *   **Summary:** Fixes an environment variable issue that blocked local Ray debug runs. By exporting `SETUPTOOLS_SCM_PRETEND_VERSION_FOR_OPEN_INSTRUCT=0.0.0+debug` across 45 debug launch scripts, local environments now accurately mirror the Docker image’s behavior.
*   **[OPEN] [#1697 - Add Trackio rollout trace logging](https://github.com/allenai/open-instruct/pull/1697)** by `abidlabs`
    *   **Summary:** Integrates Trackio (Hugging Face's free, local-first experiment tracking library) into Open-Instruct's existing rollout trace-saving architecture. Adds `StreamingDataLoaderConfig.trackio_project` to allow developers to seamlessly log and monitor RL rollout trajectories.

## 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/RLAIF landscape, the bottleneck has shifted from basic algorithmic implementation to observability and robust evaluation pipelines. **Open-Instruct** remains a critical open-source barometer for AI2's OLMo stack. Today's updates perfectly reflect industry trends:
1.  **Eval-Driven RL:** Integrating evaluation launches directly into GRPO checkpointing ([PR #1698](https://github.com/allenai/open-instruct/pull/1698)) highlights the shift toward continuous, automated evaluation during reinforcement learning rather than treating it as a post-training afterthought.
2.  **Rollout Observability:** Adding dedicated trace logging via Trackio ([PR #1697](https://github.com/allenai/open-instruct/pull/1697)) emphasizes the growing need to inspect granular rollout data, which is vital for debugging reward hacking and reward model alignment in complex reasoning tasks.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# RL Daily Digest: CleanRL
**Date:** 2026-05-23 | **Project:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

## 1. Today's Highlights
CleanRL experienced minimal activity over the past 24 hours, with zero new releases, no new or updated Pull Requests, and a single updated Issue. The primary focus of the community revolves around a continuing discussion regarding the project's foundational philosophy: maintaining true single-file algorithmic implementations.

## 2. Releases
**No new releases.** There has been no deployment activity or version bumping in the last 24 hours.

## 3. Important Issues
*   **[#518 DQN is no longer a single-file script](https://github.com/vwxyzjn/cleanrl/issues/518)** `[OPEN]`
    *   **Author:** mshaocong (Updated: 2026-05-22)
    *   **Context:** The author notes that recent modifications to the DQN implementation introduced a dependency on `from cleanrl_utils.buffers import ReplayBuffer`, moving away from CleanRL's core value proposition of strictly single-file, dependency-lite algorithms. 
    *   **Impact:** This poses ecosystem friction for environments like Google Colab. Users can no longer simply `pip install cleanrl` and run a self-contained script without navigating internal package structures. This remains a key architectural discussion point for the maintainers.

## 4. Key PR Progress
**No active updates.** Zero Pull Requests were created, merged, or updated in the last 24 hours. Project contributions appear to be in a dormant or planning phase.

## 5. Why This Project Matters in Today's RL Landscape
CleanRL holds a unique and critical niche in the reinforcement learning ecosystem. As RL algorithms become increasingly complex and obfuscated behind massive, heavily abstracted frameworks (e.g., Stable Baselines3, Ray RLlib), CleanRL provides transparent, "single-file" implementations. This makes it an invaluable educational tool and a reliable baseline for researchers. However, as Issue #518 highlights, scaling these single-file scripts to handle complex environments (like utilizing optimized Replay Buffers for DQN) creates a natural tension between code purity and performance. How CleanRL balances modularity with its single-file philosophy will dictate its future usability in cloud-based research environments.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

Here is the RL open-source ecosystem daily digest for May 23, 2026, based on the provided Gymnasium repository data.

### 1. Today's Highlights
Activity in the Farama-Foundation/Gymnasium repository over the last 24 hours has been minimal, characterized by ongoing discussions rather than active code merges. The primary focus remains on ecosystem documentation and preparing for the highly anticipated, albeit long-gestating, Gymnasium 1.0.0 release. 

### 2. Releases
*   **No new releases** detected in the last 24 hours. The ecosystem remains on a stable track, presumably awaiting the major 1.0.0 milestone.

### 3. Important Issues
*   **Issue [#846](https://github.com/Farama-Foundation/Gymnasium/issues/846): [Proposal] Add Tutorials for MuJoCo based environments**
    *   **Status:** Open (Updated 2026-05-22)
    *   **Context:** Authored by `Kallinteris-Andreas`, this issue tracking the need for comprehensive `MuJoCo-v5` tutorials continues to be a focal point. The issue outlines the necessity for guides on loading custom robot models (e.g., quadrupeds and humanoids) into the new environment architecture. 
    *   **Community Engagement:** The issue has accumulated 9 comments since its creation in late 2023, indicating sustained community interest in advanced continuous control documentation.

### 4. Key PR Progress
*   **No active PR updates** in the last 24 hours.
*   **Background:** While no new commits were made today, Issue #846 references an ongoing pull request, [#838](https://github.com/Farama-Foundation/Gymnasium/pull/838), which is currently a Work In Progress (WIP) for the "loading a quadruped custom robot model" tutorial. Contributions to the remaining tutorial topics (humanoid models, etc.) are still open for community contributors.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent reinforcement learning in Python. As the RL community shifts toward more complex continuous control tasks and sim-to-real transfer, the transition to `MuJoCo-v5` is critical. 

Today’s data highlights a mature phase for the project: core API changes have stabilized, and maintainers are focused on robust documentation to lower the barrier to entry for robotics and RL research. Furthermore, the open call for contributors on "good first issues" ensures that the project maintains a healthy open-source pipeline, allowing new researchers to participate in building the foundational tools for the next generation of RL agents.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>