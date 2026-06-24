# RL Open Source Daily Digest 2026-06-25

> Generated: 2026-06-24 22:25 UTC | Projects covered: 15

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
The June 25, 2026 digest reveals a heavily bifurcated Reinforcement Learning ecosystem. Activity is intensely concentrated in two domains: **Large Language Model (LLM) alignment frameworks** (TRL, verl, slime, AReaL, Open Instruct) and **foundational environment APIs** (Gymnasium, PettingZoo). 

Meanwhile, traditional general-purpose RL libraries (Stable Baselines3, Tianshou, CleanRL, rl_games) are experiencing a quiet period, reflecting an industry-wide pivot where "RL" has practically become synonymous with "post-training and policy optimization for generative models." The overarching narrative across active projects is a desperate push for memory efficiency, hardware heterogeneity (e.g., Ascend NPUs), and stabilizing massive distributed rollout loops.

## Activity Comparison
The table below summarizes the quantitative push across the ecosystem over the last 24 hours. Inactive projects have been aggregated to maintain focus on active development.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 15 | 36 | 0 | Massive architectural refactors; shifting to vLLM-native sync and agentic GRPO. |
| **verl** | 4+ | 6+ | 0 | Distributed scale stabilization; V1 trainer default; resolving Megatron CP>1 bugs. |
| **slime** | 1+ | 17 | 0 | High technical focus on distributed systems; adding PG variants and fixing SGLang memory. |
| **AReaL** | 3+ | 10+ | 0 | Aggressive memory optimization (FP8); modular CLI architecture. |
| **PettingZoo** | 5 | 7 | 0 | Infrastructure modernization; migrating to `ruff`/`ty` and PyMunk. |
| **Gymnasium** | 4 | 4 | 0 | Community roadmap alignment; porting Box2D to PyMunk; Python 3.14 push. |
| **ROCK** | 3 | 4 | 1 (v1.9.4) | Production hardening; enforcing disk quotas and sandbox isolation. |
| **Open Instruct** | 1 | 4 | 0 | Demystifying low-VRAM bottlenecks for local GRPO and fixing SFT loss bugs. |
| **CleanRL** | 0 | 3 | 0 | Quality assurance; adding GAE unit tests and fixing evaluation scripts. |
| **ROLL** | 0 | 1 | 0 | Hardware expansion; bringing FSDP2 + vLLM to Huawei Ascend NPUs. |
| *Inactive* | 0 | 0 | 0 | *OpenRLHF, rl_games, Stable Baselines3, Tianshou, torchtune reported no activity.* |

## Shared Research & Engineering Directions

**Research Directions:**
*   **The Rise of GRPO & Pluralistic PG Methods:** Vanilla PPO is being heavily supplemented. TRL is advancing GRPO with entropy regularization and STARE (Surprisal-guided Token-Level Advantage Reweighting). Concurrently, slime is integrating REINFORCE estimators and off-policy Importance Sampling (IS) corrections.
*   **Hybrid Distillation & Teacher-Student Dynamics:** Multiple frameworks are blending RL with distillation for better sample efficiency. verl is integrating On-Policy Self-Distillation (OPSD), slime is fixing OPD reverse-KL computations, and TRL is adding cross-tokenizer KD to experimental trainers.

**Engineering & Infrastructure Directions:**
*   **Aggressive Memory & Compute Optimization:** To fit massive models into fixed VRAM budgets, frameworks are implementing deeply technical workarounds. Open Instruct introduced tiled GRPO lm-head losses and CPU AdamW; AReaL enabled FP8 direct transfers for Megatron and bf16 Kahan summation; and TRL is advancing FP8/QLoRA support.
*   **Inference Engine & Rollout Synchronization:** Seamless integration with high-throughput inference engines (vLLM, SGLang) is a primary bottleneck. Projects are solving this by migrating to native weight sync APIs (TRL) and implementing defensive rollout memory management (slime’s three-phase quiescence transition).
*   **Hardware Vendor Diversification:** To bypass NVIDIA GPU supply constraints, multi-vendor compute is a priority. verl and ROLL are aggressively upgrading CI pipelines and documentation for Huawei Ascend NPUs (A3/A5), specifically bridging FSDP2 and vLLM to non-CUDA hardware.

## Differentiation Analysis
*   **Scale vs. Accessibility:** Frameworks like `verl`, `slime`, and `AReaL` target enterprise-scale, distributed orchestration (Megatron, Ray, FSDP2). Conversely, `Open Instruct` and `TRL` focus on democratizing these techniques for wider use—evidenced by Open Instruct's focus on local, low-VRAM GRPO hacks and TRL's streamlined QLoRA workflows.
*   **RL Environments vs. RL Training:** While LLM trainers focus on distributed policy updates, the Farama Foundation projects (`Gymnasium`, `PettingZoo`) are focusing on physics engine longevity and API standardization. Their shift from Box2D to PyMunk is critical for preserving the reproducibility of classical and multi-agent RL baselines.
*   **System Architecture:** `AReaL` and `ROCK` differentiate by treating RL as a microservices architecture. AReaL is modularizing inference and agent execution via a CLI (`areal inf`), while ROCK acts as an orchestration control plane managing ephemeral sandboxes, enforcing strict XFS disk quotas, and bridging Python/TypeScript SDKs.

## Community Momentum & Maturity
*   **Maturation of Monolithic Codebases:** verl officially switching to its V1 PPO trainer and TRL doing massive refactors before versioning show these platforms are solidifying their APIs for production use.
*   **Modernizing Tooling:** The Farama ecosystem projects (Gymnasium, PettingZoo) are aggressively modernizing their dev stacks—dropping `black`/`isort` for `ruff`, adopting `ty` for type checking, and preparing for Python 3.14. 
*   **Community-DrivenVRAM Hacks:** The Open Instruct community actively identifying and patching loss-calibration bugs under gradient accumulation highlights the collaborative, high-stakes nature of getting LLM alignment mathematically precise.
*   **Rigorous Testing in Research Code:** CleanRL’s pivot from black-box smoke tests to white-box unit tests for GAE computation marks a positive trend toward much-needed mathematical rigor in open-source RL implementations.

## Trend Signals
*   **Agentic RL is Here:** The transition from static RLHF to dynamic, tool-using agentic RL is verifiably underway. TRL’s multi-environment support for GRPO, slime's agent turn pooling, and verl's multimodal agent loops signal that training models to *use tools* via RL is the current frontier.
*   **Loss & Reward Precision is Fragile:** Multiple teams uncovered silent numerical bugs today: Open Instruct found a microbatch loss scaling bug, slime found an in-place KL coefficient mutation bug, and AReaL fixed a partial rollout group corruption bug in GRPO. This signals that as RL algorithms become more complex, silent training failures are a systemic ecosystem risk.
*   **Alternative Silicon Reaching Parity:** The simultaneous push across multiple independent Chinese frameworks (verl, AReaL, ROLL) to support Huawei Ascend NPUs alongside PyTorch 2.9/FSDP2 indicates that alternative hardware accelerators are finally achieving first-class citizen status in the RL training stack.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL Open-Source Ecosystem Daily Digest: 2026-06-25**
**Focus Project:** ROLL (alibaba/ROLL)

### 1. Today's Highlights
Activity in the ROLL repository over the last 24 hours has been highly focused on hardware backend expansion. The sole update is a significant documentation and infrastructure pull request aimed at integrating and updating support for Huawei Ascend NPUs, aligning the framework with modern PyTorch and vLLM roadmaps. There were no new issues reported or software releases published today.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **No active issues** updated or created in the last 24 hours. The project currently has zero pending community issues, suggesting a stable codebase or a period of quiet following previous patches.

### 4. Key PR Progress
*   **[PR #466] docs: update Ascend NPU documentation** ([Link](https://github.com/alibaba/ROLL/pull/466))
    *   **Author:** UsernameFull
    *   **Status:** Open (Created 2026-06-23, Updated 2026-06-24)
    *   **Summary:** This PR represents a major architectural alignment for non-NVIDIA hardware. It updates Dockerfiles, CI, and documentation for Ascend NPU (A2/A3/A5 instances) to officially support the **FSDP2 + vLLM-Ascend** training and inference path.
    *   **Key Dependency Bumps:** Upgrades environments to CANN 9.0.0, PyTorch 2.9.0, vLLM/vLLM-Ascend 0.18.0, and triton-ascend 3.2.1. 

### 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning landscape—particularly for Large Language Models (RLHF/PPO)—compute bottlenecks and GPU vendor lock-in (NVIDIA CUDA) remain massive pain points. ROLL's active development around Ascend NPU support (as seen in PR #466) highlights a critical industry trend: **hardware diversification**. 

By explicitly aligning with **PyTorch's FSDP2** (the next-gen Fully Sharded Data Parallel) and **vLLM** (the industry-standard for high-throughput LLM inference), ROLL is ensuring that massive-scale RL workloads can be offloaded to alternative accelerators like Huawei's Ascend chips. This not only alleviates global GPU supply constraints but also pushes the open-source ecosystem toward more flexible, cost-effective, and distributed RL training architectures.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for alibaba/ROCK. 

# 📊 ROCK RL Ecosystem Daily Digest
**Date:** 2026-06-25
**Repository:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

---

### 1. Today's Highlights
*   **Version 1.9.4 Released:** ROCK rolls out a new patch for the `v1.9` release line, introducing highly requested sandbox deployment configurations and porting 6 critical commits from `master` to ensure production correctness.
*   **Sandbox & Deployment Hardening:** Issues regarding runtime environment profiles and XFS disk quotas for anonymous volumes have been successfully resolved and merged.
*   **Major SDK Alignment Underway:** An ongoing effort ([PR #1137](https://github.com/alibaba/ROCK/pull/1137)) to achieve strict feature parity between the TypeScript and Python SDKs shows massive progress, adding 50+ files and 400+ tests.

### 2. Releases
*   **[v1.9.4](https://github.com/alibaba/ROCK/releases/tag/v1.9.4)**
    *   **Configurability:** `startup_timeout` is now configurable via YAML, Nacos, or the SDK ([PR #1156](https://github.com/alibaba/ROCK/pull/1156)).
    *   **Backports:** Cherry-picked 6 commits from `master`, including critical archive cleanup (preventing self-corruption), admin guards, fiber overcut fixes, and server-first OSS SDK migration.

### 3. Important Issues
*   *Closed:* [**#1148 - Configurable Runtime Environment Profiles**](https://github.com/alibaba/ROCK/issues/1148)
    Previously, sandbox environments were rigidly tied to a single process-level variable. This enhancement allows per-image sandbox deployment profiles, vastly improving environment isolation for diverse RL workloads.
*   *Closed:* [**#1145 - Anonymous local volume disk quota & cleanup**](https://github.com/alibaba/ROCK/issues/1145)
    Addressed a crucial infrastructure gap where XFS project quotas bypassed anonymous container volumes. Disk quotas are now strictly enforced, and volumes are safely cleaned upon container removal.
*   *Open:* [**#1157 - v1.9 Backport Tracking**](https://github.com/alibaba/ROCK/issues/1157)
    Currently tracking the successful migration of production correctness fixes (archive cleanup, runtime fixes) from `master` to the `v1.9` stable branch.

### 4. Key PR Progress
*   *Merged:* [**PR #1158**](https://github.com/alibaba/ROCK/pull/1158) - Successfully executed the 6-commit backport from `master` to `release/v1.9`, preserving patch IDs to ensure version stability.
*   *Merged:* [**PR #1149**](https://github.com/alibaba/ROCK/pull/1149) - Implements the configurable runtime environments requested in Issue #1148.
*   *Merged:* [**PR #1159**](https://github.com/alibaba/ROCK/pull/1159) - Backports the anonymous volume disk quota enforcement and cleanup logic to `v1.9`.
*   *Open:* [**PR #1137**](https://github.com/alibaba/ROCK/pull/1137) - Massive infrastructure uplift for the TS SDK. Introduces execution modules (`bench/`, `job/`) aligning TypeScript capabilities with the Python SDK. Adds 400+ tests to ensure stability.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning requires orchestrating hundreds or thousands of parallel, ephemeral sandbox environments, which generates immense I/O and state-management overhead. The updates in ROCK `v1.9.4` directly tackle the infrastructure bottlenecks of large-scale RL:

1.  **Resource Containment:** By enforcing XFS disk quotas on *anonymous* volumes and ensuring deterministic cleanup, ROCK prevents "silent" storage leaks that typically crash long-running distributed RL training loops.
2.  **Sandbox Flexibility:** Moving to per-image runtime profiles allows researchers to securely deploy heterogeneous environments (e.g., varying OS-level dependencies or drivers) within the same training job.
3.  **Cross-Platform SDK Parity:** The aggressive alignment of the TypeScript and Python SDKs signals a push towards full-stack RL orchestration—enabling web-based visualization, dashboarding, and Node.js-based control planes to interact natively with Python-based RL training backends.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for **2026-06-25**, focused on **THUDM/slime**.

### 1. Today's Highlights
Today's development in slime is heavily focused on **algorithmic flexibility** and **rollout infrastructure stability**. We are seeing a major push to support diverse Policy Gradient (PG) variants—such as REINFORCE, Off-Policy IS correction, and customizable loss aggregations—alongside critical bug fixes for PPO metric corruption and SGLang memory management. There were no new releases today, but 17 PR updates indicate active merging/staging for the next version.

### 2. Releases
* **None.** (0 new releases in the last 24 hours).

### 3. Important Issues
* **[#2129 [bug] [Bug] When making minimax m2.7 hf checkpoint to torch_dist format, ran into error](https://github.com/THUDM/slime/issues/2129)**
  *Author: Lynnzake | Updated: 2026-06-24*
  **Summary:** Users are encountering conversion errors when attempting to translate MiniMax M2.7 HuggingFace checkpoints into `torch_dist` format for distributed training. This friction point highlights the ongoing challenges in the RL ecosystem regarding cross-format weight loading for ultra-large, expert MoE models.

### 4. Key PR Progress
The 17 PR updates today showcase a highly technical roadmap divided into three main categories:

* **Algorithm & Loss Expansions (`feat`):**
  * **[#2083](https://github.com/THUDM/slime/pull/2083):** Adds the `REINFORCE` advantage estimator, utilizing GRPO group-normalized advantages with a plain additive surrogate (`-A * log pi_theta`).
  * **[#2084](https://github.com/THUDM/slime/pull/2084):** Introduces an off-policy Importance Sampling (IS) correction hook, passing grad-carrying `cur_log_probs` alongside frozen rollout log-probs.
  * **[#2090](https://github.com/THUDM/slime/pull/2090):** Adds `--loss-aggregation` to ScaleRL PG loss, supporting `sample_mean`, `prompt_mean`, `token_mean`, and `constant` divisor modes. 

* **Rollout & Memory Optimization (`fix(rollout)`):**
  * **[#2015](https://github.com/THUDM/slime/pull/2015):** Implements a three-phase quiescence transition for `RolloutServer.offload()` (pause -> flush -> release memory), preventing errors during KV-cache restoration.
  * **[#2059](https://github.com/THUDM/slime/pull/2059):** Adds retry logic for transient Ray `ActorUnavailableError` during SGLang engine bringup.
  * **[#2085](https://github.com/THUDM/slime/pull/2085):** Fixes On-Policy Distillation (OPD) by forcing teacher log-prob scoring to use `rollout_temperature` rather than a hardcoded `0`, ensuring accurate reverse-KL computation.

* **Critical Bug Fixes (`fix`):**
  * **[#2114](https://github.com/THUDM/slime/pull/2114):** Fixes a data corruption bug in PPO where in-place KL coefficient multiplication (`k *= kl_coef`) mutated logged KL tensors. Changed to out-of-place operations (`k = k * kl_coef`).
  * **[#2068](https://github.com/THUDM/slime/pull/2068) & [#2069](https://github.com/THUDM/slime/pull/2069):** Secures SGLang control-plane calls with Bearer auth and pools aiohttp ClientSessions across agent turns, respectively.
  * **[#2109](https://github.com/THUDM/slime/pull/2109):** Fixes LR/WD scheduler derivation for eval-only runs (`--num-rollout 0`).

### 5. Why This Project Matters in Today's RL Landscape
As LLMs scale, post-training (RLHF/PPO) has shifted from a pure algorithmic challenge to a **distributed systems and memory engineering** bottleneck. Slime is directly addressing the hardest parts of modern RL scaling: 
1. **SGLang/Ray Integration:** The PRs around memory offloading, transient error retries, and pooled clients show that orchestrating massive inference engines during online rollout generation requires defensive, production-grade engineering.
2. **Algorithmic Plurality:** The integration of REINFORCE, IS-corrections, and various loss aggregations proves slime is adapting to the rapid theoretical deprecation of vanilla PPO in favor of GRPO and off-policy methods.
3. **Ragged Data Handling:** Fixes for ragged pass-rate computations (#2064) and per-prompt baselines for uneven rollouts (#2062) acknowledge that real-world RL data is messy, especially with MoE architectures like MiniMax M2.7.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily digest for the AReaL project.

# 🧠 AReaL RL Ecosystem Daily Digest
**Date:** 2026-06-25

### 1. Today's Highlights
Activity in the last 24 hours has been heavily focused on **system stability, memory optimization, and CLI architecture**. There is a major push to modularize AReaL into service-oriented components via a new CLI scaffold, alongside critical framework-level fixes for GRPO/PPO group normalization and rollout scheduling. Memory constraints were also addressed, specifically getting FP8 weight transfers working and fixing CI OOM errors on 40GB GPUs.

### 2. Releases
*   **No new releases** in the last 24 hours. The team and community are actively merging feature branches ahead of the 2026 H2 milestones. 

### 3. Important Issues
Developers running distributed RL workloads should note two critical, reproducible bugs currently being tracked:
*   **NCCL Timeout during Weight Sync (#1439):** A consistently reproducible timeout occurring during weight synchronization on A800 GPUs when using `ControllerV2`. This impacts distributed training pipelines. ([areal-project/AReaL Issue #1439](https://github.com/inclusionAI/AReaL/issues/1439))
*   **Silent GRPO Group Corruption (#1419):** A framework-level numerical logic bug where partial rollout groups silently corrupt GRPO group normalization. This affects algorithmic accuracy and needs attention from anyone using GRPO. ([areal-project/AReaL Issue #1419](https://github.com/inclusionAI/AReaL/issues/1419))
*   *Note:* The community continues to discuss and refine the [2026 H2 Roadmap (#1381)](https://github.com/inclusionAI/AReaL/issues/1381).

### 4. Key PR Progress
Several significant foundational improvements were updated today:

**Architecture & Tooling:**
*   **CLI Scaffolding (#1440, #1434):** Introduction of an experimental CLI scaffold (`areal inf`) to manage local inference gateway/router stacks, register internal models, and inspect service health. 
*   **Agent Service Runtime (#1383):** Integration of **OpenClaw** as an `agent_service` runtime. It spawns a dedicated gateway subprocess per RL session, ensuring per-episode API key (`sk-sess-*) attributability.

**Algorithmic & Core Bug Fixes:**
*   **GRPO/PPO Normalization (#1419, #1415, #1416):** Directly addressing Issue #1419, PR #1415 fixes group normalization by actual group sizes for partial groups. Follow-up PR #1416 adds `min_valid_group_size` to safely drop under-filled rollout groups.
*   **Rollout Hanging Fix (#1396):** Prevents workers from applying dp-scaled staleness, fixing rollout hangs caused by zero local capacity by defaulting `train_data_parallel_size` to 1.
*   **Multi-EOS Support (#1433):** Fixes `io_struct` to support modern models with multiple EOS tokens (like Gemma 4), preventing the erroneous stripping of legitimate trailing tokens.

**Performance & Compute Optimization:**
*   **Megatron FP8 Transfer (#1406):** Enabled FP8 direct transfer in AWEX colocate mode, avoiding implicit dequantization to BF16. This saves memory and bandwidth during Megatron transfers.
*   **CI OOM Fix (#1438):** Adjusted CI tests to use `adam_bf16` (Kahan summation) instead of fp32 master weights, allowing Qwen2.5-VL-3B tests to run safely on A100-40G runners.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source Reinforcement Learning ecosystem moves heavily toward RLHF/GRPO for massive LLMs, the bottleneck is no longer just GPU compute—it's the orchestration of distributed rollout generation, memory optimization, and weight synchronization. 

AReaL is tackling the exact friction points facing production RL teams today:
1.  **Memory Efficiency:** PRs like FP8 direct transfer (#1406) and bf16 AdamW (#1438) reflect the ecosystem's desperate need to fit ever-larger models into fixed VRAM budgets.
2.  **Algorithmic Rigor:** The discovery and patching of GRPO partial group corruption (#1419) highlights how complex multi-turn rollout workflows can silently destroy training signals.
3.  **Service-Oriented RL:** By abstracting inference, training, and agent execution into CLI-managed services (#1440, #1383), AReaL is bridging the gap between research scripts and production-grade RL infrastructure.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# 🧠 TRL Daily Digest: 2026-06-25

**Repository:** [huggingface/trl](https://github.com/huggingface/trl)  
**Activity (Last 24h):** 🟢 15 Issues Updated | 🔵 36 PRs Updated | 📦 0 New Releases

---

### 1. Today's Highlights
- **GRPO Maturation:** Major pushes for GRPO robustness, including entropy regularization, AsyncGRPO fixes for non-deterministic environments, and vLLM integration updates.
- **Ecosystem Alignment:** Significant refactoring to streamline QLoRA workflows and align TRL with the upcoming native weight-sync APIs in vLLM 0.22+.
- **Advanced SFT & Distillation:** Introduction of per-sample loss scaling (`weighted_nll`) for SFT and cross-tokenizer Knowledge Distillation (KD) for the GOLD trainer.

### 2. Releases
**None.** No new stable or pre-releases were published in the last 24 hours. The team appears focused on merging substantial architectural refactors before tagging a new version.

### 3. Important Issues
- **[GRPO / vLLM] NaN Logprob Crash** ([#6166](https://github.com/huggingface/trl/issues/6166)): A critical runtime bug was reported where `GRPOTrainer` crashes in vLLM colocate mode if vLLM returns a NaN logprob. `None` types are being passed directly into `torch.tensor()`, highlighting a need for stricter tensor validation in the generation pipeline.
- **[Enhancement] FP8 Training Support** ([#3399](https://github.com/huggingface/trl/issues/3399)): Ongoing discussion (updated today) regarding native FP8 training support via 🤗 Accelerate to optimize memory bandwidth for large-scale RLHF.
- **[Enhancement] Dataset Mixer Integration** ([#2112](https://github.com/huggingface/trl/issues/2112)): Long-standing request to natively support proportional dataset mixing (similar to the alignment-handbook) was updated today, directly tied to a new incoming PR.
- **[Bug] Outdated Notebooks** ([#3059](https://github.com/huggingface/trl/issues/3059)): Closed today after addressing community complaints regarding deprecated code in `examples/notebooks`. 

### 4. Key PR Progress
**GRPO & Reinforcement Learning Core**
- **Entropy Regularization** ([#6140](https://github.com/huggingface/trl/pull/6140)): Adds both static and adaptive entropy regularization to GRPO to encourage exploration and prevent policy collapse.
- **STARE Policy Loss** ([#6167](https://github.com/huggingface/trl/pull/6167)): Introduces Surprisal-guided Token-Level Advantage Reweighting as a new `loss_type` in `GRPOTrainer`.
- **Multi-Environment Support** ([#6001](https://github.com/huggingface/trl/pull/6001), [#6002](https://github.com/huggingface/trl/pull/6002)): Refactors GRPO and AsyncGRPO to support per-example environment selection, allowing different toolsets/prompts to be exposed dynamically during generation.
- **AsyncGRPO Stochasticity Fix** ([#6072](https://github.com/huggingface/trl/pull/6072)): Fixes an edge case where stochastic `reset()` observations in agentic RL were improperly shared across generation groups.

**Infrastructure & Integrations (vLLM, SFT, QLoRA)**
- **Native vLLM Weight Sync Migration** ([#6110](https://github.com/huggingface/trl/pull/6110), [#6128](https://github.com/huggingface/trl/pull/6128)): Prepares TRL to deprecate its custom vLLM server, routing weight updates through vLLM 0.22+'s native bulk `update_weights` API.
- **QLoRA API Streamlining** ([#6157](https://github.com/huggingface/trl/pull/6157)): Adds a top-level `quantization_config` argument to `SFTTrainer`, `DPOTrainer`, and `GRPOTrainer`, removing the need to manually override `model_init_kwargs`.
- **SFT Data Handling** ([#6155](https://github.com/huggingface/trl/pull/6155)): Optimizes sequence truncation by moving it from the data collator to the cached dataset preparation step.
- **Dataset Mixtures** ([#6171](https://github.com/huggingface/trl/pull/6171)): Implements per-dataset fractions, resolving issue #2112.

**Experimental Trainers**
- **Cross-Tokenizers KD** ([#6126](https://github.com/huggingface/trl/pull/6126)): Adds X-Token cross-tokenizer knowledge distillation to the experimental `GOLDTrainer`.

### 5. Why This Project Matters in Today's RL Landscape
As we move further into 2026, Reinforcement Learning (particularly methods like GRPO) has become the definitive bottleneck for aligning large language models. TRL remains the de facto open-source standard by solving the hardest engineering challenges: **vLLM integration, distributed orchestration (FSDP2), and agentic environment execution.** 

Today's digest reveals a highly active, maturing ecosystem. The transition to native vLLM weight syncing ([#6110](https://github.com/huggingface/trl/pull/6110)) and the implementation of multi-environment support for GRPO ([#6001](https://github.com/huggingface/trl/pull/6001)) prove that TRL is successfully bridging the gap between offline RLHF and dynamic, tool-using agentic RL. By continuously stabilizing memory-intensive workflows (e.g., QLoRA streamlining, FP8 discussions) and integrating state-of-the-art research (STARE, entropy regularization), TRL democratizes frontier alignment techniques that were previously locked behind proprietary codebases.

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

Here is the RL open-source ecosystem daily digest for `verl` (volcengine/verl) on 2026-06-25.

### 1. Today's Highlights
*   **Default Trainer Shift:** The V1 PPO trainer (`verl/trainer/ppo/v1`) has been merged and is now enabled by default ([PR #6823](https://github.com/volcengine/verl/pull/6823)).
*   **Advanced Distillation Landing:** On-Policy Self-Distillation (OPSD) is actively being integrated, bringing privileged-context teacher scoring to the framework ([Issue #6827](https://github.com/volcengine/verl/issues/6827), [PR #6833](https://github.com/volcengine/verl/pull/6833)).
*   **Megatron & CP>1 Stabilization:** A critical `grad_norm` explosion bug occurring in MoE models under Context Parallelism (CP>1) has been identified and swiftly patched ([Issue #6609](https://github.com/volcengine/verl/issues/6609), [PR #6836](https://github.com/volcengine/verl/pull/6836)).

### 2. Releases
*   **None** (0 new releases in the last 24 hours).

### 3. Important Issues
*   **[Megatron][MoE] CP>1 Grad Norm Explosion:** [Issue #6609](https://github.com/volcengine/verl/issues/6609) reports that running MoE models with Context Parallelism (`CP > 1`) and `use_remove_padding=True` causes the `actor/grad_norm` to explode and validation scores to degrade. 
*   **Checkpoint Shard Inference Divergence:** [Issue #6821](https://github.com/volcengine/verl/issues/6821) highlights a race condition/config write ordering bug in the Megatron bridge path where checkpoint-time shard inference diverges from the runtime model state.
*   **Async Policy Convergence Discrepancy:** [Issue #6780](https://github.com/volcengine/verl/issues/6780) notes that the fully async policy mode (trigger=1, staleness=0) converges much faster than the standard `main_ppo` baseline, prompting an investigation into mathematical/performance parity. 
*   **Validation Metrics Crash:** [Issue #6830](https://github.com/volcengine/verl/issues/6830) identifies a `None`-handling bug in `process_validation_metrics()` when sparse `reward_extra_info` keys are emitted for only a subset of samples.

### 4. Key PR Progress
*   **[BREAKING] V1 Trainer Default:** [PR #6823](https://github.com/volcengine/verl/pull/6823) officially switches the framework's default trainer to the V1 PPO trainer.
*   **Megatron CP>1 Loss Fix:** [PR #6836](https://github.com/volcengine/verl/pull/6836) resolves the MoE grad blowup (Issue #6609) by ensuring the loss function returns a 3-tuple when `calculate_per_token_loss=True` is implicitly enabled by Megatron-Bridge at CP>1.
*   **Checkpoint Config Ordering:** [PR #6842](https://github.com/volcengine/verl/pull/6842) fixes the shard inference bug (Issue #6821) by moving `_save_hf_config_and_tokenizer` to execute *before* bridge weight saving.
*   **Multimodal Agent Loops:** [PR #6804](https://github.com/volcengine/verl/pull/6804) introduces `VLContinuouTokenBuilder`, extending continuous token infrastructure to handle multimodal inputs within ToolAgentLoop.
*   **Ascend (NPU) CI & Infrastructure:** Multiple PRs ([#6840](https://github.com/volcengine/verl/pull/6840), [#6841](https://github.com/volcengine/verl/pull/6841), [#6838](https://github.com/volcengine/verl/pull/6838)) focus on upgrading the Ascend E2E RayJob workflows to A3 and expanding CI container shared memory to prevent OOM kills. 

### 5. Why This Project Matters in Today's RL Landscape
As post-training paradigms (like RLHF and GRPO) demand increasingly massive compute for large reasoning models, `verl` has established itself as a critical orchestration layer bridging high-level RL algorithms with distributed training backends (Ray, FSDP, Megatron) and high-throughput inference engines (vLLM, SGLang). 

Today's digest underscores two major industry trends reflected in `verl`'s development:
1.  **Hardware Agnosticism & Scale:** The continuous resolution of CP/MoE bugs and the aggressive tuning of Ascend NPU CI pipelines demonstrate that the ecosystem is pushing hard for multi-vendor hardware support and extreme context length scaling (Context Parallelism). 
2.  **Beyond PPO:** The rapid integration of On-Policy Self-Distillation (OPSD) and flexible KL-direction top-k distillation highlights a broader shift in the RL landscape toward hybrid Teacher-Student dynamics and self-play to achieve better sample efficiency and reasoning capabilities.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

### RL Daily Digest: Open Instruct Ecosystem
**Date:** 2026-06-25

#### 1. Today's Highlights
Activity in the last 24 hours is heavily focused on **training stability and memory optimization**. Core contributors and community members are actively patching a critical token-weighting bug in Supervised Fine-Tuning (SFT) and pushing critical memory optimizations for GRPO (Group Relative Policy Optimization) to enable low-VRAM local RL training.

#### 2. Releases
* **No new releases** reported in the last 24 hours. The ecosystem remains on the latest stable track while core training loop upgrades are vetted.

#### 3. Important Issues
* **[Issue #1728](https://github.com/allenai/open-instruct/issues/1728)**: `reduce_loss=sum` removed without deprecation warning
  * **Impact:** High. A user attempting to reproduce Tulu 3 SFT results uncovered a significant LR miscalibration. The silent removal of `reduce_loss=sum` caused a "mean-of-microbatch-means" bug under gradient accumulation (`gradient_accumulation_steps > 1`), causing supervised tokens to be weighted incorrectly. This highlights the fragility of distributed RL/SFT loss scaling.

#### 4. Key PR Progress
* **[PR #1736](https://github.com/allenai/open-instruct/pull/1736)** by *Chessing234*: Fixes the token-weighted loss under gradient accumulation in `finetune.py`. Directly resolves Issue #1728 by properly scaling microbatch loss by supervised token count and renormalizing accumulated gradients.
* **[PR #1737](https://github.com/allenai/open-instruct/pull/1737)** by *Chessing234*: Introduces `--use_cpu_adam` to `grpo_fast.py`. Swapping fused `AdamW` for `DeepSpeedCPUAdam` compliments existing optimizer/parameter offloading, dramatically lowering the VRAM barrier for local GRPO training.
* **[PR #1735](https://github.com/allenai/open-instruct/pull/1735)** by *hamishivi*: Adds a memory-efficient tiled GRPO lm-head loss. Using a custom autograd function following DeepSpeed's `TiledFusedLogitsLoss` pattern, the PR recomputes logits tile-by-tile, preventing Out-Of-Memory (OOMM) errors during full-vocabulary projections.
* **[PR #1734](https://github.com/allenai/open-instruct/pull/1734)** by *hamishivi*: Expands agentic capabilities by passing tool schemas to `apply_chat_template` during SFT tokenization, allowing models to properly parse JSON-formatted tool schemas.

#### 5. Why This Project Matters in Today's RL Landscape
As the open-source community races to replicate the success of reasoning models like DeepSeek-R1 and OpenAI's o1, **Open Instruct serves as a critical reference implementation for post-training.** Today's commits reflect the exact bottlenecks facing the broader RL landscape: exact loss calibration under distributed gradient accumulation (Issue #1728), and the massive VRAM overhead of full-vocabulary logit projection during policy updates (PR #1735). By merging low-VRAM GRPO optimizations and robust tool-calling tokenization, Open Instruct continues to democratize state-of-the-art RLHF/RLVR (Reinforcement Learning with Verifiable Rewards) for the community.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

### RL Ecosystem Daily Digest: CleanRL 
**Date:** 2026-06-25

#### 1. Today's Highlights
CleanRL experienced a quiet but highly productive day focused on stability and testing. There were no new releases or active issue reports, but contributor **@YangNuoCheng** submitted three targeted Pull Requests. The contributions address a critical crash in the evaluation script and significantly expand the repo's unit test coverage for PPO (Proximal Policy Optimization) advantage estimation.

#### 2. Releases
*   **New Releases:** None
*   **Latest Issues:** None updated in the last 24 hours.

#### 3. Important Issues
*   No new issues or bug reports were filed in the last 24 hours. 

#### 4. Key PR Progress
*   **[BUG FIX] [PR #561](https://github.com/vwxyzjn/cleanrl/pull/561): Fix `enjoy.py` crash: re-add missing `--capture_video` argument**
  *   *Context:* Resolves a silent regression where the `--capture_video` flag was removed from `parse_args()`. This caused any invocation of the evaluation script (`cleanrl_utils/enjoy.py`) to crash immediately with an `AttributeError`.
*   **[TESTING] [PR #559](https://github.com/vwxyzjn/cleanrl/pull/559): Add unit tests for PPO GAE computation**
  *   *Context:* Adds white-box logic unit tests for the Generalized Advantage Estimation (GAE) in `cleanrl/ppo.py`, moving away from purely indirect black-box smoke tests. 
*   **[TESTING] [PR #560](https://github.com/vwxyzjn/cleanrl/pull/560): Add unit tests for `ppo_continuous_action` GAE computation**
  *   *Context:* A follow-up to #559. Cross-checks the reverse in-place GAE recurrence specifically for continuous action spaces in `cleanrl/ppo_continuous_action.py`.

#### 5. Why This Project Matters in Today's RL Landscape
CleanRL lives up to its name by providing high-quality, single-file implementations of modern Reinforcement Learning algorithms. In an era where monolithic RL frameworks (like RLlib or Stable-Baselines3) introduce immense abstraction overhead, CleanRL remains the gold standard for researchers and engineers who need readable, easily hackable code to test new architectural ideas. 

Today's PRs perfectly illustrate the project's core value proposition: by moving from "black-box smoke tests" to transparent logic tests for critical math like GAE (and ensuring evaluation scripts run flawlessly), CleanRL continues to prioritize the exact kind of mathematical rigor and reproducibility that RL researchers rely on.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

Here is the RL open-source ecosystem daily digest for Gymnasium based on the provided GitHub data.

# 📊 RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-06-25 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

## 1. Today's Highlights
Gymnasium is undergoing significant maintenance and architectural planning. The lead maintainer (jkterry1) has opened community calls for action regarding future-proofing the library, specifically requesting **Python 3.14 support** and a massive architectural shift to **port Box2D environments to PyMunk**. Additionally, CI stability has been restored after a dependency parsing issue.

## 2. Releases
*   **No new releases in the last 24 hours.**

## 3. Important Issues
**Community Call-to-Action & Roadmap:**
*   **[#1594](https://github.com/Farama-Foundation/Gymnasium/issues/1594) [OPEN] Python 3.14 Support:** Now that the last release unblocked Py3.14, maintainers are actively requesting community PRs to implement and verify full compatibility.
*   **[#1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597) [OPEN] Port Box2D to PyMunk:** A major proposal to abandon unmaintained Box2D Python bindings in favor of PyMunk (Chipmunk). PyMunk is actively maintained, better documented, and ensures the longevity of classic physics-based RL environments.

**Environment Enhancements:**
*   **[#1559](https://github.com/Farama-Foundation/Gymnasium/issues/1559) [OPEN] Tunable LunarLander Dynamics:** Proposal to add explicit kwargs for transition dynamics and stochasticity in `LunarLander`, reducing the need for researchers to maintain custom forks.
*   **[#9](https://github.com/Farama-Foundation/Gymnasium/issues/9) [OPEN] Strict Type Hinting:** A long-standing `good first issue` to enforce strict type hinting in `core.py` and spaces.

## 4. Key PR Progress
**CI/Stability Fixes:**
*   **[#1595](https://github.com/Farama-Foundation/Gymnasium/pull/1595) [CLOSED] Fix duplicate classic control extra:** Resolved a critical CI failure ([Issue #1593](https://github.com/Farama-Foundation/Gymnasium/issues/1593)) where duplicate `classic-control` / `classic_control` tags in `pyproject.toml` broke `uv` parsing.
*   **[#1591](https://github.com/Farama-Foundation/Gymnasium/pull/1591) [CLOSED] Bump actions/checkout from 6 to 7:** Routine Dependabot CI upgrade.

**Core API & Tooling:**
*   **[#1592](https://github.com/Farama-Foundation/Gymnasium/pull/1592) [CLOSED] Code quality fixes:** Integrated 3/3 AI-generated code quality suggestions from GitHub's security/quality findings.
*   **[#1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556) [OPEN] Wrapper Checker Utility:** Introduces a highly requested `check_wrapper()` utility to validate custom Wrapper API implementations, acting as a much-needed sister-function to the existing `check_env()`. 

## 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for Reinforcement Learning environments, Gymnasium's health directly impacts the entire RL ecosystem. Today's data highlights two crucial aspects of modern open-source maintenance: **dependency hygiene** and **backward/forward compatibility**. 

The proposed shift from Box2D to PyMunk ([#1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597)) is particularly critical; in the RL landscape, deprecated physics engines break reproducibility for thousands of older papers and baselines. Furthermore, the push for Python 3.14 support and strict type hinting ([#9](https://github.com/Farama-Foundation/Gymnasium/issues/9)) ensures that Gymnasium remains seamlessly compatible with modern MLOps pipelines, CI/CD frameworks, and emerging AI IDEs that rely heavily on static analysis.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL Ecosystem Daily Digest for PettingZoo.

# 🛰️ RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-06-25
**Repository:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. Today's Highlights
PettingZoo is undergoing a massive infrastructure and cleanup phase. Over the last 24 hours, maintainers closed a critical CI/CD failure on `main`, completely overhauled the linting/type-checking stack (migrating to `ty` and `ruff`), and merged several long-awaited performance optimizations. The team also laid out the roadmap for dropping Python 3.9 support and migrating physics engines to align with upstream Gymnasium changes.

### 2. Releases
**No new releases** were cut in the last 24 hours.

### 3. Important Issues
*   **Python Version Support & Environment Overhauls:** [Issue #1358](https://github.com/Farama-Foundation/PettingZoo/issues/1358) was opened to officially remove Python 3.9 support. Meanwhile, [Issue #1364](https://github.com/Farama-Foundation/PettingZoo/issues/1364) proposes porting the `multiwalker` environment from `box2d` to `pymunk` to mirror Gymnasium's physics engine migrations.
*   **Rendering & Asset Cleanup:** [Issue #1360](https://github.com/Farama-Foundation/PettingZoo/issues/1360) suggests reverting `pursuit` agents from circles to squares to match pre-PyGame aesthetics. [Issue #1359](https://github.com/Farama-Foundation/PettingZoo/issues/1359) initiated a successful hunt to purge orphaned pixel-art assets for deprecated environments from the documentation site.
*   **Dependency & Linting Strategy:** [Issue #1356](https://github.com/Farama-Foundation/PettingZoo/issues/1356) proposes dropping `black` and `isort` in favor of using `ruff` for all formatting to streamline development.

### 4. Key PR Progress
*   **Tooling & CI Stabilization:** After a bad merge broke CI ([Issue #1346](https://github.com/Farama-Foundation/PettingZoo/issues/1346)), [PR #1351](https://github.com/Farama-Foundation/PettingZoo/pull/1351) quickly fixed `isort` import ordering. The project formally migrated its type-checker from `pyright` to `ty` ([PR #1344](https://github.com/Farama-Foundation/PettingZoo/pull/1344)) and promoted `ruff` linting from warnings to errors ([PR #1350](https://github.com/Farama-Foundation/PettingZoo/pull/1350)).
*   **Performance Optimization:** [PR #1343](https://github.com/Farama-Foundation/PettingZoo/pull/1343) solved a major Windows debugging pain point by replacing `pygame.init()` with targeted subsystem initialization, drastically accelerating environment startup times by bypassing unnecessary audio device enumeration.
*   **Environment Fixes & State Extracts:** 
    *   [PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335) fixed a critical reproducibility bug where `gin_rummy` silently reverted custom rewards to RLCard defaults when seeded.
    *   [PR #1355](https://github.com/Farama-Foundation/PettingZoo/pull/1355) finished the cleanup for the Hanabi migration, officially shifting dependencies to OpenSpiel via Shimmy.
    *   [PR #1342](https://github.com/Farama-Foundation/PettingZoo/pull/1342) (Open) adds global `state()` and `state_space` support to the `pursuit` environment, bringing it closer to compliance with modern centralized training requirements.
*   **Security Patch:** [PR #1338](https://github.com/Farama-Foundation/PettingZoo/pull/1338) patched a medium-severity path traversal vulnerability in the image loading utilities (`get_image()`).

### 5. Why This Project Matters in Today's RL Landscape
As the definitive standard for Multi-Agent Reinforcement Learning (MARL) environments in Python, PettingZoo acts as the central hub connecting agent algorithms to simulations. Today's digest highlights the unseen but critical work required to maintain Open Source ML infrastructure: standardizing toolchains (adopting `ruff`/`ty`), ensuring reproducible seeded evaluations (fixing RLCard reward drops), and optimizing boot times (`pygame` initialization). By actively synchronizing its underlying physics engines (moving to `pymunk` alongside Gymnasium) and sunsetting legacy Python versions, PettingZoo is ensuring that the next generation of MARL research remains computationally efficient, secure, and tightly integrated with the broader Farama Foundation ecosystem.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>