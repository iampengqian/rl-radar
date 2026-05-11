# RL Open Source Daily Digest 2026-05-12

> Generated: 2026-05-11 22:19 UTC | Projects covered: 15

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
The open-source reinforcement learning ecosystem on 2026-05-12 exhibits a clear bifurcation between a highly active cohort of LLM post-training frameworks and a quieter cohort of traditional, foundational RL libraries. The dominant narrative across the active projects (verl, AReaL, TRL, Open Instruct, slime, ROCK, ROLL) is the aggressive scaling of Reinforcement Learning from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) infrastructure. Development is overwhelmingly concentrated on solving distributed systems bottlenecks: disaggregating inference and training compute, enabling multi-turn agentic environments, and supporting massive Mixture-of-Experts (MoE) architectures across diverse hardware backends. Meanwhile, traditional RL staples like Stable Baselines3 and Gymnasium are focused on maintenance, type safety, and mathematical rigor, while several other foundational libraries experienced zero activity.

## Activity Comparison
*Note: The following table reflects tracked activity from the provided daily digests.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 8 | 33 | 0 | Extreme infra velocity: Multi-turn agents, Ascend NPUs, async pipelines. |
| **Open Instruct** | 0 | 14 | 0 | Algorithmic iteration: GRPO parity, curriculum learning, vLLM fixes. |
| **AReaL** | 18 | 11 | 0 | Performance & Security: Fused kernels, LoRA syncing, v2 controllers. |
| **slime** | 1 | 9 | 0 | Compute optimization: Zero-advantage skipping, MoE memory management. |
| **TRL** | 4 | 6 | 0 | Architecture scaling: GIL evasion via process decoupling, tool-use patches. |
| **ROCK** | 5 | 10 | 0 | Platform maturity: Windows support, async CLI, observability. |
| **ROLL** | 0 | 2 | 0 | Ecosystem expansion: Atropos integration, Huawei NPU support. |
| **Stable Baselines3** | 2 | 3 | 0 | Maintenance: PyTorch security bumps, doc hygiene. |
| **Gymnasium** | 0 | 1 | 0 | QoL improvement: Generic type refactoring for VectorEnvs. |
| **CleanRL, OpenRLHF, PettingZoo, rl_games, Tianshou, torchtune** | 0 | 0 | 0 | Dormant. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Agentic RL and Tool Use:** There is a massive industry shift from static, single-turn text generation to dynamic, multi-turn tool-using agents. Projects are rapidly standardizing "trajectories" over single responses (verl, TRL) and integrating environment reward bridges like Atropos (ROLL) and OSWorld (AReaL).
*   **Curriculum Learning & Algorithmic Refinement:** Frameworks are moving beyond standard PPO/GRPO. Open Instruct introduced difficulty-aware curriculum learning and the novel "toggle" mechanism from Kimi K2.5, while slime is optimizing throughput by neutralizing zero-advantage samples.
*   **Asymmetric / Multi-turn Distillation:** Requests and patches for distillation (GOLD trainer) now support privileged context for teachers (TRL), reflecting how models are trained to reason in multi-turn settings.

**Engineering & Infrastructure Signals**
*   **Bypassing Python's GIL:** To prevent generation/scoring from blocking autograd, frameworks are decoupling rollout generation from the main training process. TRL is spawning child processes, while verl is heavily optimizing its `fully_async` pipelines and MQ prefetching.
*   **Hardware & Backend Heterogeneity:** Teams are preparing for a post-NVIDIA landscape. Verl, AReaL, and ROLL simultaneously pushed support for Huawei Ascend NPUs and alternative sharding/quantization techniques like Megatron-FSDP and MXFP8.
*   **Optimizing the MoE Memory Footprint:** As frontier models shift to Mixture-of-Experts (e.g., Qwen3.5, Gemma4), infrastructure is adapting to prevent host OOMs. This includes chunked All-Reduce for Tensor Parallelism (slime) and fused Linear Cross Entropy kernels (AReaL) to avoid materializing massive logits.

## Differentiation Analysis
*   **verl vs. TRL vs. slime (The Scaling Race):** While all three target massive LLM post-training, their architectural philosophies diverge. **verl** is positioning itself as the ultimate distributed orchestration layer (emphasizing gateway runtimes and async disaggregation). **TRL** acts as the accessible, tightly-coupled Hugging Face ecosystem workhorse, currently focused on stabilizing `AsyncGRPO` and external tool bindings. **slime** differentiates via raw, low-level Megatron-Core compute optimizations and memory management for massive MoEs.
*   **ROCK vs. ROLL (Alibaba's Dual Approach):** Alibaba maintains two distinct RL infrastructure plays. **ROCK** focuses on the *environmental layer*—sandboxing, security, Windows/PowerShell support, and enterprise-grade deployment. **ROLL** focuses on the *training layer*, specifically distributed GRPO/RLHF scaling and hardware backends. 
*   **Open Instruct (The Research Barometer):** Unlike verl or TRL, which are building generalized frameworks, Open Instruct's development is tightly coupled to AllenAI's specific OLMo-core architecture, focusing heavily on exact logprob parity, vLLM internals, and fast iteration on GRPO loss functions.
*   **Stable Baselines3 & Gymnasium (The Foundational Layer):** Sitting entirely outside the LLM scaling race, these projects focus on applied, mathematically rigorous standard RL. They differentiate through extreme stability—enforcing strict type hinting, rejecting LLM-generated PRs, and focusing on fundamental algorithmic correctness (e.g., Beta distributions for bounded action spaces).

## Community Momentum & Maturity
*   **High-Velocity Maturation:** Projects like verl (33 PRs) and AReaL (18 issues) show the intense momentum of frameworks trying to become the standard infrastructure for LLM agents. However, they are also exposing critical edge cases (e.g., silent optimizer dtype breakdowns in AReaL, FSDP crashes in verl), indicating the tech is still stabilizing.
*   **Security & Enterprise Readiness:** The ecosystem is maturing beyond academic sandboxes. AReaL patched admin key exposures to prevent public API leaks, and SB3 is proactively bumping PyTorch versions to squash CVEs. 
*   **Strict Maintenance Standards:** The Farama Foundation (Gymnasium, SB3) continues to demonstrate elite open-source maintenance, prioritizing backwards-compatible type refactoring and actively rejecting poorly structured, LLM-generated community contributions.

## Trend Signals
*   **MoE Readiness is Table Stakes:** Frameworks that do not natively support chunked gradient All-Reduces, fused LCE, and sequence parallelism for massive MoE architectures (Qwen, Gemma) will rapidly lose relevance.
*   **The Rise of "Agentic RLVR":** The transition from single-turn RLHF to Reinforcement Learning with Verifiable Rewards (RLVR) in multi-turn, sandboxed tool-using environments is the defining infra challenge of 2026. 
*   **Compute Disaggregation:** The physical separation of Prefill/Decode (rollout generation) from training backends is becoming mandatory. Projects are scrambling to solve the IPC/GIL bottlenecks required to keep training GPUs fed with rollout data without blocking.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROLL
**Date:** 2026-05-12 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

## 1. Today's Highlights
ROLL framework saw continued momentum in hardware and environment extensibility over the past 24 hours. While no new issues or releases were published, two significant feature PRs were actively updated, highlighting the community's focus on agentic RL environments and multi-hardware backend support.

## 2. Releases
No new releases were recorded for 2026-05-12.

## 3. Important Issues
No new issues or issue updates in the last 24 hours.

## 4. Key PR Progress
Two open PRs received updates, signaling active development in platform compatibility and environment integration:
*   **[PR #426](https://github.com/alibaba/ROLL/pull/426) ROLL with Atropos environments**
    *   *Author:* RUFFY-369
    *   *Focus:* Agentic RL Environments
    *   *Details:* This PR proposes integrating [Atropos](https://github.com/NousResearch/atropos) (by NousResearch) into ROLL. It introduces a "Universal Reward Bridge" acting as a configurable adapter. This allows ROLL to natively process and interface with Atropos-based environments, a crucial step for scaling LLM agent training.
*   **[PR #380](https://github.com/alibaba/ROLL/pull/380) feat: Add npu megatron support**
    *   *Author:* UsernameFull
    *   *Focus:* Hardware Acceleration / Backend
    *   *Details:* This PR implements support for Huawei Ascend NPU devices via the Megatron-Core backend. Key changes include refactoring platform detection priority in `roll/platforms/__init__.py`, enabling ROLL to execute distributed RL workloads on alternative, non-NVIDIA AI accelerators.

## 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/RLAIF landscape, flexibility is the primary bottleneck for scaling LLM post-training. Today's activity in the ROLL ecosystem perfectly reflects the two most critical needs in modern RL infrastructure:
1.  **Agentic Workflows:** Integrating environments like Atropos allows developers to move beyond static preference tuning toward dynamic, environment-interaction-based reward bridges required for autonomous LLM agents.
2.  **Hardware Agnosticism:** As global demand for AI compute outpaces GPU supply, framework-level support for alternative silicon (like Huawei NPUs) ensures that large-scale distributed RL training remains resilient and cost-effective.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for ROCK:

# RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-05-12  
**Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

### 1. Today's Highlights
Activity on ROCK was highly focused on developer experience and platform stability over the last 24 hours, featuring 10 updated PRs and 5 active issues. Key themes include a major push for CLI flexibility with the introduction of non-blocking job execution, significant Windows OS expansion via PowerShell support, and critical performance hotfixes for the v1.7.x release cycle. 

### 2. Releases
*   **No new releases** were cut in the last 24 hours. However, recent activity heavily targets the stabilization of the **v1.7.x** release branch.

### 3. Important Issues
*   **[Performance/Metrics Regression]([#918](https://github.com/alibaba/ROCK/issues/918))**: Addressed a critical metrics performance issue in v1.7.x, resulting in an immediate hotfix (PR [#927](https://github.com/alibaba/ROCK/pull/927)).
*   **[CLI Enhancement] Non-blocking job submission ([#929](https://github.com/alibaba/ROCK/issues/929))**: Users currently experience blocking CLI execution when running `rock job run`. A new proposal aims to introduce an `--async` flag to detach CLI execution from the job lifecycle.
*   **[Deployments/Bug] Nix Sandbox Failure ([#928](https://github.com/alibaba/ROCK/issues/928))**: A startup failure was reported for Nix-based sandboxes when the Kata containers runtime is enabled.
*   **[Performance] Sandbox Startup Observability ([#923](https://github.com/alibaba/ROCK/issues/923))**: Request for timing instrumentation to identify bottlenecks during sandbox initialization stages.

### 4. Key PR Progress
*   **Merged: Hotfix v1.7.x Metrics ([#927](https://github.com/alibaba/ROCK/pull/927))**: Reverted recent metrics changes to resolve the aforementioned v1.7.x performance regression.
*   **Merged: Clarify Agent vs. Job Docs ([#926](https://github.com/alibaba/ROCK/pull/926))**: Resolves [#925](https://github.com/alibaba/ROCK/issues/925) by clearly documenting the difference between single sandbox `install-agent` workflows and scalable `rock.sdk.job.Job` workflows.
*   **Open: Windows PowerShell Support ([#922](https://github.com/alibaba/ROCK/pull/922))**: A major architectural refactor introducing a `PowerShellSession` driver to enable Windows-based sandbox orchestration.
*   **Open: Dockerfile SDK Integration ([#931](https://github.com/alibaba/ROCK/pull/931))**: Introduces `Image.from_dockerfile` to the SDK, allowing declarative environment builds directly from Dockerfiles.
*   **Open: Async CLI Job Execution ([#930](https://github.com/alibaba/ROCK/pull/930))**: Implements the `--async` flag for `rock job run`, exposing `Job.submit()` functionality to the CLI.
*   **Open: Startup Timing Instrumentation ([#924](https://github.com/alibaba/ROCK/pull/924))**: Adds a `StageTimer` context manager to log elapsed time for granular sandbox startup stages.

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, training environments and agents require robust, highly scalable, and sandboxed infrastructure. ROCK serves as a critical abstraction layer for this exact need. Today's updates highlight the project's maturation: adding observability (`StageTimer`), cross-platform execution (Windows/PowerShell support), and asynchronous CLI job management. By distinguishing between lightweight local agent installations and distributed, containerized Jobs (evident in their ongoing doc refactor), ROCK is positioning itself as an enterprise-grade orchestration framework capable of handling complex, distributed RL workloads safely and efficiently.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: slime
**Date:** 2026-05-12  
**Project:** [THUDM/slime](https://github.com/THUDM/slime)

---

### 1. Today's Highlights
Activity on May 11 saw 9 Pull Requests updated alongside continued troubleshooting on a critical model-support bug. The day's development was dominated by infrastructure scaling, compute efficiency, and hardware-level data transfer optimizations. Two quick CI fixes were successfully merged, while the community pushed new integrations for experiment tracking (SwanLab) and support for cutting-edge MoE architectures (Gemma4 26B).

### 2. Releases
No new releases were cut in the last 24 hours.

### 3. Important Issues
*   **[Bug] `NoneType` error on Qwen3.5-9B initialization** ([#1894](https://github.com/THUDM/slime/issues/1894))
    *   **Status:** Open | **Comments:** 6
    *   **Summary:** Users are encountering a `'NoneType' object has no attribute 'megatron_module'` crash when attempting to initialize training for the `qwen3_5-9b` model. Active discussion is ongoing to resolve the distributed model initialization pipeline.

### 4. Key PR Progress

**Compute & Scaling Optimizations**
*   **Neutralize zero-advantage samples** ([#1901](https://github.com/THUDM/slime/pull/1901)): Proposes replacing tokens of zero-reward samples with a 2-token pad sequence and zeroing the loss mask. This skips wasted forward compute passes during training, acting as a direct optimization to throughput.
*   **Safer `torch.profiler` defaults for MoE** ([#1879](https://github.com/THUDM/slime/pull/1879)): Prevents host Out-of-Memory (OOM) errors by adjusting profiler settings for massive MoE models (26B+ parameters), introducing per-grad-step trace capturing.
*   **Chunked All-Reduce for Megatron TP grads** ([#1899](https://github.com/THUDM/slime/pull/1899) - *Closed/Merged*): Patches Megatron-Core to coalesce Tensor Parallel gradients in size-bounded chunks rather than flattening them into one massive buffer, mitigating peak memory spikes.

**Infrastructure & Data Transfer**
*   **Mooncake Backend for Rollout Data** ([#1709](https://github.com/THUDM/slime/pull/1709)): Introduces Mooncake Store as an optional transfer backend for disaggregated rollout/training deployments, moving away from default Ray for more efficient cross-node data movement.
*   **Reward / DP-Length Alignment** ([#1900](https://github.com/THUDM/slime/pull/1900)): A fix to ensure correct-sample rewards are properly aligned with Data Parallel (DP) local lengths.
*   **CI Plugin Contract Fix** ([#1902](https://github.com/THUDM/slime/pull/1902) - *Closed/Merged*): Rapid patch fixing a broken test on main following a recent change to the `rollout_data_postprocess` hook call site in the actor loop.

**Integrations & Architectures**
*   **Gemma4 26B-A4B MoE Support** ([#1855](https://github.com/THUDM/slime/pull/1855)): Adds comprehensive RL training support for the Gemma4 26B-A4B MoE and 31B dense models, including HF↔Megatron weight conversion and retool integration.
*   **SwanLab Tracking Support** ([#1898](https://github.com/THUDM/slime/pull/1898)): Wires SwanLab into the framework as an optional metrics/tracking backend alongside Weights & Biases (W&B).
*   **Harden Retool Rollout** ([#1861](https://github.com/THUDM/slime/pull/1861) - *Closed/Merged*): Fixes multi-turn tool-calling rollouts in Retool by enforcing length synchronization between `rollout_log_probs`, `loss_masks`, and tokens.

### 5. Why This Project Matters in Today's RL Landscape
As RL post-training (like RLHF/GRPO) scales from standard LLMs to massive Mixture-of-Experts (MoE) architectures, infrastructure bottlenecks have become the primary blocker for the open-source community. Today's activity in `slime` proves the project is aggressively tackling the exact pain points of 2026's RL landscape: shrinking the wasted compute on zero-advantage samples ([#1901](https://github.com/THUDM/slime/pull/1901)), preventing host OOMs during distributed profiling ([#1879](https://github.com/THUDM/slime/pull/1879)), and optimizing cross-node data transfers via store backends like Mooncake ([#1709](https://github.com/THUDM/slime/pull/1709)). Paired with rapid integration of frontier models like Qwen3.5 and Gemma4, `slime` is solidifying itself as a highly optimized, production-ready framework for large-scale RL.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-12

## 1. Today's Highlights
The AReaL ecosystem (now transitioning to the `areal-project` org) saw significant activity focused on **performance optimization, architectural refactoring, and robust security hardening**. 18 issues were updated alongside 11 active PRs. The focus is squarely on enabling next-generation training pipelines (v2 controllers, PD disaggregation) while fixing critical edge-case bugs in distributed setups.

## 2. Releases
**None** (0 new releases in the last 24 hours).

## 3. Important Issues

*   **Critical Bug: FSDP Optimizer dtype silently breaks convergence**
    Issue [#1292](https://github.com/areal-project/AReaL/issues/1292) (Open) reports that `torch.optim.AdamW` silently inherits `bf16` dtypes for optimizer states under the FSDP backend, causing late-stage convergence to plateau ~3× higher compared to DeepSpeed ZeRO-3 or Megatron. (Tagged `good first issue`, `call-for-contribution`).
*   **Architecture Requests: PD Disaggregation & Colab Support**
    Users are pushing for production and edge capabilities. Issue [#1329](https://github.com/areal-project/AReaL/issues/1329) requests **Prefill-Decode (PD) Disaggregation** to optimize rollout resource management, while [#1331](https://github.com/areal-project/AReaL/issues/1331) requests Google Colab A100/base GPU examples for constrained environments.
*   **Robustness & Documentation Fixes**
    A newly opened bug, [#1333](https://github.com/areal-project/AReaL/issues/1333), highlights that unhandled `ZeroDivisionError`s in agent tool code cause `AsyncTaskRunner` crashes. Meanwhile, [#1330](https://github.com/areal-project/AReaL/issues/1330) points out that missing scheduler documentation leads to runtime errors for first-time users.

## 4. Key PR Progress

*   **Repo Migration & Security Hardening:**
    PR [#1325](https://github.com/areal-project/AReaL/pull/1325) (Closed/Merged) completed the URL and org reference migration from `InclusionAI` to `areal-project`. Simultaneously, PR [#1328](https://github.com/areal-project/AReaL/pull/1328) refactored admin key validation to prevent users from accidentally exposing services using default API keys on non-loopback interfaces.
*   **Megatron Performance & FSDP LoRA:**
    PR [#1322](https://github.com/areal-project/AReaL/pull/1322) introduced a **fused Linear Cross Entropy (LCE) Triton kernel** for the Megatron backend to avoid materializing massive `[tokens, vocab]` logits. For FSDP, PR [#1233](https://github.com/areal-project/AReaL/pull/1233) adds disk-based incremental LoRA weight synchronization with SGLang.
*   **v2 Pipeline & Ecosystem Examples:**
    PR [#1327](https://github.com/areal-project/AReaL/pull/1327) brings the v2 training pipeline controllers to full parity with v1. PR [#1326](https://github.com/areal-project/AReaL/pull/1326) contributes a highly anticipated `OSWorld` GRPO training example for desktop-control tasks using `Qwen3-VL-4B-Instruct`.

## 5. Why This Project Matters in Today's RL Landscape
As RL post-training (like GRPO and PPO) becomes the primary bottleneck for advancing LLM reasoning, frameworks must efficiently distribute inference (rollouts) and gradient updates across massive GPU clusters. Today's activity in AReaL proves that the community is actively solving the hardest infrastructural barriers: managing VRAM constraints via fused kernels and LoRA syncing, disaggregating compute (PD separation), and preventing silent performance degradation (bf16 optimizer states). Furthermore, the addition of OSWorld examples bridges the gap between text-based RLHF and complex, multi-modal agentic environments.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL Ecosystem
**Date:** 2026-05-12 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Activity in the TRL repository over the last 24 hours was heavily focused on scaling infrastructure and expanding tool-use capabilities. The most significant architectural shift is a move to decouple rollout generation from the trainer's main process to bypass Python's Global Interpreter Lock (GIL). Simultaneously, the community is actively patching the newly introduced `AsyncGRPO` and `OpenReward` integrations to ensure robust support for diverse model architectures and complex tool environments. 

## 2. Releases
No new releases were recorded in the past 24 hours.

## 3. Important Issues
*   **AsyncGRPO Init Crash with Non-Bundled Tokenizers** ([#5742](https://github.com/huggingface/trl/issues/5742)): User `aazizyan` identified that `AsyncRolloutWorker.__init__` unconditionally calls `add_response_schema`. Unlike the base `GRPOTrainer`, it lacks a `self.tools` gate, causing instant crashes for models lacking natively bundled TRL chat templates (e.g., Mistral, Gemma).
*   **OpenReward Tool Discovery Omission** ([#5727](https://github.com/huggingface/trl/issues/5727)): User `rycerzes` reported that `OpenRewardSpec.environment_factory` only discovers shared `/tools` during rollout binding, completely missing task-specific `/task_tools`, which breaks environments with dynamic tool surfaces.
*   **Request for Privileged Context in GOLD** ([#5741](https://github.com/huggingface/trl/issues/5741)): A feature request to upgrade `gold_trainer` (distillation) to support asymmetric inputs, allowing the teacher model to utilize privileged context not available to the student model.
*   **GRPO Docs Inconsistency** ([#5611](https://github.com/huggingface/trl/issues/5611)): Closed after identifying mismatches in model nomenclature (`Qwen2` vs `Qwen2.5`) and a missing OOM troubleshooting tab in the GRPE quickstart.

## 4. Key PR Progress
*   **Process-Decoupled Async Rollouts** ([#5749](https://github.com/huggingface/trl/pull/5749)): The flagship PR of the day. It moves rollout generation and scoring loops into a spawned child process. This prevents `recursive_parse` and reward functions from competing for the GIL against the trainer's autograd engine.
*   **Fix AsyncGRPO Tool Gates** ([#5748](https://github.com/huggingface/trl/pull/5748)): Directly patches issue #5742 by mirroring the `GRPOTrainer.__init__` tool gates into `AsyncRolloutWorker`, preventing `ValueError` on initialization.
*   **Fix OpenReward Task-Tool Binding** ([#5729](https://github.com/huggingface/trl/pull/5729)): Resolves #5727 by updating `_spec.py` to correctly discover and bind task-specific tools prior to the `reset()` call.
*   **End-to-End GRPO + OpenReward Notebook** ([#5747](https://github.com/huggingface/trl/pull/5747)): Introduces a new tutorial notebook demonstrating an end-to-end GRPO training loop using `OpenRewardSpec`, a local ORS server, and `Qwen3.5-4B`.
*   **DDP Invariant Test Suite Expansion** ([#5736](https://github.com/huggingface/trl/pull/5736)): Bolsters CI robustness by extending invariant tests to cover 2-GPU Distributed Data Parallel (DDP) for SFT and DPO equivalence classes.
*   **Nested `vocab_size` Fix for Distillation/GOLD** ([#5592](https://github.com/huggingface/trl/pull/5592)): Resolved an `AttributeError` in `DistillationTrainer` where `resize_token_embeddings` failed on architectures with nested configs (like `Qwen3_5Config`).

## 5. Why This Project Matters in Today's RL Landscape
Modern post-training pipelines are hitting hard infrastructure limits. TRL's latest development cycles—specifically moving rollouts to child processes ([#5749](https://github.com/huggingface/trl/pull/5749))—highlight the industry's push to bypass Python's GIL for true concurrent RLHF/GRPO workloads. Furthermore, today's focus on `OpenReward` and granular tool-gating reflects a broader shift in the RL landscape: moving beyond static text generation toward highly interactive, agentic RL environments where models must dynamically interface with external environments and task-specific tools during training.

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
**Date:** 2026-05-12

Here is the daily open-source reinforcement learning ecosystem update for **verl** (Volcengine's distributed RL training framework).

## 1. Today's Highlights
The verl ecosystem saw high velocity today with **33 updated Pull Requests** and **8 active Issues**, indicating intense development focus on multi-modal support (audio), hardware backends (Ascend NPU, Megatron-FSDP), and critical bug fixes in the `fully_async` training pipelines. Agent abstractions and multi-turn rollout orchestration continue to be the dominant architectural theme.

## 2. Releases
*   **No new releases** were cut today. The development momentum remains concentrated on merging feature branches and stabilizing recent architectural overhauls.

## 3. Important Issues
*   **Pacing Agent Architectures:** [Issue #5790](https://github.com/verl-project/verl/issues/5790) *(20 upvotes)* remains a focal point. This RFC proposes standardizing `AgentFramework` and a `TrajectoryGateway` to replace tightly coupled agent/reward logic. The superseding PR was just merged today (see below).
*   **FSDP Wrap Policy Bug:** [Issue #6289](https://github.com/verl-project/verl/issues/6289) reports that FSDP wrapping crashes on partially resolved `_no_split_modules`. This is a blocking issue for users attempting to train next-gen MoE models like Qwen3.5/Qwen3-Next.
*   **Async Rollout Bottleneck:** [Issue #6306](https://github.com/verl-project/verl/issues/6306) questions why `fully_async` hardcodes a limit of 16 active samples per rollout server, highlighting a potential throughput ceiling for highly concurrent RL workloads.

## 4. Key PR Progress
**Agent Framework & Orchestration**
*   **Merged:** [PR #5931](https://github.com/verl-project/verl/pull/5931) introduced the experimental agent framework and gateway runtime, laying the foundation for complex multi-turn tool-using RL agents.
*   **Open:** [PR #6271](https://github.com/verl-project/verl/pull/6271) builds on this by adding support for multiple trajectories within a single rollout during the agent loop in the `fully_async` pipeline.

**Critical Bug Fixes**
*   **Merged:** [PR #6310](https://github.com/verl-project/verl/pull/6310) fixes a quiet but critical reward/advantage corruption bug where zero-length responses caused scalars to be written to index `-1`. 
*   **Merged:** [PR #6308](https://github.com/verl-project/verl/pull/6308) resolves a REMAX crash in multi-turn agent loops by correctly combining sampled and greedy baseline samples into a single async rollout request.
*   **Open:** [PR #6212](https://github.com/verl-project/verl/pull/6212) fixes a `SIGSEGV`/tensor contiguity bug preventing Ulysses Sequence Parallelism (SP > 1) from running on Qwen3.5/Qwen3.5-MoE models.

**Performance, Hardware & Infrastructure**
*   **Open:** [PR #6315](https://github.com/verl-project/verl/pull/6315) introduces MQ batched fetching and a background prefetch thread to decouple message queue deserialization from the main training event loop, optimizing `fully_async` throughput.
*   **Merged:** [PR #5423](https://github.com/verl-project/verl/pull/5423) brings Megatron-FSDP support to the Megatron backend, allowing distributed SFT and RL (GRPO) training to leverage FSDP sharding.
*   **Merged:** [PR #6307](https://github.com/verl-project/verl/pull/6307) & [PR #6311](https://github.com/verl-project/verl/pull/6311) continue to expand Ascend NPU support, specifically fixing MXFP8 quantization and adding the `mindspeedmm` backend engine.
*   **Open:** [PR #6276](https://github.com/verl-project/verl/pull/6276) expands verl into multi-modal RL by adding generic audio data plumbing throughout the dataset, agent loop, and rollout phases.

## 5. Why This Project Matters in Today's RL Landscape
As the AI community shifts from standard Supervised Fine-Tuning (SFT) to complex Reinforcement Learning with Verifiable Rewards (RLVR) and tool-using agents, training frameworks must evolve. 

verl is establishing itself as a critical piece of infrastructure by solving the exact bottlenecks the industry faces today: 
1. **Multi-turn Agent Scheduling:** Transitioning from static single-turn RL to dynamic, multi-turn agentic rollouts requires sophisticated distributed orchestration (as seen in the new gateway runtimes).
2. **Hardware Maximization:** Implementing features like *Megatron-FSDP* and *Ulysses Sequence Parallelism* allows labs to push the absolute limits of GPU/NPU memory bandwidth when training massive MoE architectures.
3. **Asynchronous Decoupling:** The heavy iteration on `fully_async` pipelines and MQ prefetching shows verl actively solving the throughput bottleneck where training throughput is typically forced to wait on generation rollouts.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-05-12 | **Repository:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity in the last 24 hours was heavily dominated by backend infrastructure and training optimizations for **GRPO** (Group Relative Policy Optimization) and **OLMo-core** integration. Key themes include refactoring the GRPO loss computation, introducing a difficulty-based curriculum learning dataloader, implementing the "toggle" mechanism from Kimi K2.5, and fixing vLLM logprob handling. 

## 2. Releases
No new releases were published today.

## 3. Important Issues
There are **0** new or updated issues. All current development tracking is happening directly through Pull Requests.

## 4. Key PR Progress
A total of **14 PRs** saw updates today. Here are the most significant movements:

### Algorithm & Loss Advancements
*   **[PR #1679](https://github.com/allenai/open-instruct/pull/1679) [OPEN]:** Simplifies the `compute_grpo_loss` function to output `clipfrac`, streamlining the codebase and paving the way for easier implementation of future GRPO-like losses.
*   **[PR #1661](https://github.com/allenai/open-instruct/pull/1661) [OPEN]:** Introduces a difficulty-map generation pipeline and a difficulty-aware prompt sampling path for RLVR/GRPO, enabling curriculum learning based on pass-count aggregates.
*   **[PR #1676](https://github.com/allenai/open-instruct/pull/1676) [OPEN]:** Implements the "toggle" mechanism recently introduced in the Kimi K2.5 model.

### Inference & vLLM Integration
*   **[PR #1678](https://github.com/allenai/open-instruct/pull/1678) [OPEN]:** Resolves a critical discrepancy between rollout and learner logprobs by utilizing processed vLLM logprobs (accounting for sampling transforms like temperature) for GRPO scoring.
*   **[PR #1675](https://github.com/allenai/open-instruct/pull/1675) [OPEN]:** Fixes a `NameError` (`streaming_config/vllm_config` scope leak) that occurred when calling `grpo_fast.py:main` from external scripts.

### OLMo-core Feature Parity & Refactoring
*   **[PR #1672](https://github.com/allenai/open-instruct/pull/1672) [OPEN]:** Brings the OLMo-core GRPO trainer (`grpo.py`) up to feature parity with `grpo_fast.py` by adding a new `EvalCallback`, checkpointing, and schedulers.
*   **[PR #1671](https://github.com/allenai/open-instruct/pull/1671) [OPEN]:** Rewrites HF (Hugging Face) export to ensure safe, verified state-dict conversions at startup.
*   **[PR #1670](https://github.com/allenai/open-instruct/pull/1670) [OPEN]:** Fixes intra-document attention for packed sequences in OLMo-core by correctly passing `doc_lens` instead of relying on standard HF `attention_mask` arguments.
*   **[PR #1669](https://github.com/allenai/open-instruct/pull/1669) [OPEN]:** Refactoring PR that extracts `maybe_evaluate` to `grpo_utils` to unify the eval flow between `grpo.py` and `grpo_fast.py`.

### Merged & Closed PRs
*   **[PR #1677](https://github.com/allenai/open-instruct/pull/1677) [CLOSED]:** Superseded/merged approach for adding a GRPO vLLM config knob for processed logprobs.
*   **[PR #1668](https://github.com/allenai/open-instruct/pull/1668) [CLOSED]:** Refactored `DataPreparationActor` to emit boolean `response_masks` for cleaner downstream processing.
*   **[PR #1667](https://github.com/allenai/open-instruct/pull/1667) [CLOSED]:** Optimized Beaker dataset copying by skipping `/output` transfers when the output directory is already located on shared Weka storage.
*   **[PR #1666](https://github.com/allenai/open-instruct/pull/1666) [CLOSED]:** Patched `mason.py` to correctly replace or append checkpoint and output directory flags.
*   **[PR #1673](https://github.com/allenai/open-instruct/pull/1673) [CLOSED]:** Made the `--budget` flag optional in `mason.py`, cleaning up redundant flags across 64 launch scripts.

## 5. Why This Project Matters in Today's RL Landscape
Open-Instruct continues to serve as a leading open-source barometer for production-level Reinforcement Learning from Human Feedback (RLHF) and post-training workflows. Today's PRs highlight a broader industry trend: moving away from monolithic RL scripts toward highly optimized, distributed training setups. 

The active integration of **curriculum learning** ([PR #1661](https://github.com/allenai/open-instruct/pull/1661)) and adoption of novel reinforcement techniques like **Kimi's "toggle"** ([PR #1676](https://github.com/allenai/open-instruct/pull/1676)) show that the framework is rapidly iterating on cutting-edge algorithmic research. Furthermore, the deep focus on **OLMo-core parity** and **vLLM logprob handling** underscores a critical technical necessity in modern RL—minimizing reward-hacking and ensuring exact mathematical parity between the inference rollouts (actor) and the training learner.

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

**RL Daily Digest: Gymnasium Ecosystem – 2026-05-12**

**1. Today's Highlights**
The Gymnasium repository experienced a quiet day on May 12, 2026, with no newly opened issues, closed tickets, or software releases. The sole focus was on ongoing internal improvements to the library's type-hinting architecture, specifically a dedicated effort to refactor vectorized environment typing to support modern Python generic types.

**2. Releases**
*   **None.** No new versions or patch updates were released in the past 24 hours.

**3. Important Issues**
*   **None.** Zero issue activity was recorded over the last 24 hours. 

**4. Key PR Progress**
*   **[#1577 [OPEN] Generic vector env and vector wrapper types](https://github.com/Farama-Foundation/Gymnasium/pull/1577)**
    *   **Author:** `jorenham`
    *   **Activity:** Updated recently (2026-05-11).
    *   **Summary:** This PR proposes a significant refactoring of `VectorEnv` and its subclasses by converting them into generic types. Originating from discussions in PR #1575, this change resolves complex `TypeVar` issues. Crucially, the type parameters are being implemented as optional to ensure strict backwards compatibility. This is a vital under-the-hood update that will significantly improve static type checking and IDE autocompletion for users utilizing complex, custom vectorized environments.

**5. Why This Project Matters in Today's RL Landscape**
Gymnasium (the direct successor to OpenAI Gym) remains the foundational API standard for single-agent reinforcement learning. In today's RL landscape, where complex algorithms are often chained together using `ray[rllib]`, `Stable-Baselines3`, or custom training loops, strict type hinting is critical for developer velocity. PRs like #1577 highlight the Farama Foundation's ongoing commitment to code quality and robustness. By making vectorized environments generic and statically verifiable, Gymnasium ensures that large-scale RL pipelines remain modular, predictable, and less prone to runtime type errors.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the RL ecosystem daily digest for Stable Baselines3:

### 1. Today's Highlights
Activity on the Stable Baselines3 (SB3) repository for 2026-05-11 was primarily focused on security patches, documentation hygiene, and community feature requests. Core maintainers (including `araffin`) are actively merging doc fixes, while a critical dependency security alert has triggered a minimum version bump for PyTorch. 

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **[OPEN] Beta Distribution Policy for Bounded Action Spaces ([#2142](https://github.com/DLR-RM/stable-baselines3/issues/2142)):** A continued discussion on implementing a `BetaDistribution` policy. Citing Petrazzini & Antonelo (2021), the community is advocating for this feature to replace Gaussian distributions in bounded continuous spaces, thereby eliminating clipping bias and improve training stability.
*   **[CLOSED] Environment Convergence Question ([#2240](https://github.com/DLR-RM/stable-baselines3/issues/2240)):** A standard user query regarding PPO convergence in `sumo-rl` environments was closed by the maintainers.

### 4. Key PR Progress
*   **🔥 Security Patch: Bump PyTorch Minimum Version ([#2252](https://github.com/DLR-RM/stable-baselines3/pull/2252)):** To address a transitive dependency vulnerability ([GHSA-887c-mr87-cxwp](https://github.com/advisories/GHSA-887c-mr87-cxwp)) flagged by Dependabot, this open PR proposes bumping the minimum required `torch` version from 2.3 to 2.8. Note: Merge is on hold as maintainers are currently on vacation.
*   **Docs Fix: HTTP to HTTPS ([#2254](https://github.com/DLR-RM/stable-baselines3/pull/2254)):** Maintainer `araffin` merged a pull request updating broken documentation links and migrating remaining HTTP links to HTTPS. This effectively replaces a closed, LLM-generated community PR ([#2253](https://github.com/DLR-RM/stable-baselines3/pull/2253)) that attempted the same without following PR templates.
*   **Ecosystem Update: SBX Changelog ([#2251](https://github.com/DLR-RM/stable-baselines3/pull/2251)):** A closed PR adding changelog support for custom rollout buffer classes in the sister project, [SBX (Stable Baselines JAX)](https://github.com/araffin/sbx/pull/90).

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, accessible, and modular Reinforcement Learning implementations. Today's activity perfectly illustrates the project's overarching philosophy: 
1. **Mathematical Rigor:** The ongoing Beta distribution discussion ([#2142](https://github.com/DLR-RM/stable-baselines3/issues/2142)) highlights the community's demand for mathematically sound action sampling over naive clipping in continuous control.
2. **Enterprise Readiness:** The proactive patching of security vulnerabilities (via the PyTorch 2.8 bump in [#2252](https://github.com/DLR-RM/stable-baselines3/pull/2252)) ensures SB3 remains a safe dependency for enterprise and applied RL pipelines.
3. **Quality Control:** The rejection of automated LLM PRs in favor of careful, human-reviewed documentation fixes ([#2254](https://github.com/DLR-RM/stable-baselines3/pull/2254)) showcases a strict commitment to long-term maintainability.

</details>