# RL Open Source Daily Digest 2026-05-18

> Generated: 2026-05-17 22:40 UTC | Projects covered: 15

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
The May 18, 2026 digest reflects a highly bifurcated Reinforcement Learning (RL) open-source ecosystem. Development activity is intensely concentrated in the LLM post-training and alignment layer (verl, AReaL, TRL, OpenRLHF, ROCK), while foundational Deep RL libraries (SB3, CleanRL, Tianshou, Gymnasium) experienced zero to minimal activity. The primary theme of the day was a rigorous, ecosystem-wide push to eradicate "quiet bugs"—subtle numerical and masking errors in advantage calculations and loss reductions that silently degrade model performance during large-scale RLHF and GRPO training.

## Activity Comparison

*Note: Projects with zero activity over the last 24 hours (CleanRL, Gymnasium, Open Instruct, PettingZoo, rl_games, ROLL, slime, Tianshou, torchtune) have been omitted for brevity.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 2 (closed/open) | 9 | 0 | Hardening multi-turn agentic workflows and fixing rollout rejection sampling math. |
| **AReaL** | 2 (closed/stale) | 2 | 0 | Fixing critical PPO loss masking bugs and advancing K8s-native orchestration. |
| **TRL** | 0 | 4 | 0 | Expanding Visual-Language Model (VLM) support across GRPO/RLOO/GOLD trainers. |
| **OpenRLHF** | 0 | 2 | 0 | Resolving silent edge-case bugs in token masking and group reward baselines. |
| **ROCK** | 1 (closed) | 1 (merged) | 0 | Improving cluster management DevEx with localized admin scheduler documentation. |
| **Stable Baselines3**| 1 (updated) | 0 | 0 | Maintaining long-tail API compatibility with Gymnasium's preprocessing wrappers. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Mathematical Rigor in Token Masking:** Multiple projects (verl, AReaL, OpenRLHF) dedicated R&D efforts today to fixing how `loss_mask`, `action_mask`, and tool-observation tokens are handled. As RL scales to multi-turn reasoning, excluding untrainable padding or tool outputs from reward-to-go and advantage calculations is critical to prevent silent gradient corruption.
*   **Multimodal RLHF Expansion:** TRL's active development indicates a clear research trend of migrating complex RL algorithms (GRPO, RLOO, GOLD) to support Vision-Language Models (VLMs), pushing beyond text-only post-training constraints.

**Engineering & Infrastructure Signals**
*   **Robust Distributed Rollouts:** There is a distinct focus on stabilizing asynchronous and distributed rollout workers. Verl and TRL both merged/updated fixes for async worker initialization and multi-trajectory generation, which are vital for scaling compute-heavy GRPO workloads.
*   **Cloud-Native Orchestration:** AReaL and ROCK are pushing the boundaries of deployment infrastructure. AReaL's introduction of a Kubernetes StatefulSet scheduler and ROCK's localized primary pod forcing (`ROCK_FORCE_PRIMARY_POD`) reflect the industry's pivot toward scalable, cloud-native scheduling for massive RL experiments.

## Differentiation Analysis

*   **verl** acts as the high-performance architectural bridge, uniquely focusing on integrating inference engines (vLLM/SGLang) and advanced hardware quantization (NVFP4 via FSDPEngine) to squeeze compute efficiency out of massive models.
*   **OpenRLHF** and **AReaL** operate as the algorithmic stabilizers, prioritizing the mathematical purity of core estimators (GSPO, Dr. GRPO, PPO) by relentlessly hunting down edge-case padding and zero-action bugs.
*   **TRL** serves as the highly accessible, framework-agnostic toolkit. Its current differentiation lies in democratizing cutting-edge algorithms (like GOLD) and multimodal training for the broader Hugging Face community.
*   **ROCK** differentiates itself entirely from the model-centric frameworks by focusing exclusively on enterprise cluster hygiene, specifically the automated cleanup of thousands of ephemeral containers spawned during agentic RL.
*   **Stable Baselines3 (SB3)** remains isolated in the traditional Deep RL space, acting as a highly vetted, stable dependency rather than chasing the LLM alignment wave.

## Community Momentum & Maturity
The ecosystem is demonstrating distinct signs of late-stage maturity in LLM alignment tooling, alongside clear resource stratification. 
*   **Hunting Silent Bugs:** The community has moved past simply building functional RLHF training loops. Contributors are now submitting highly technical PRs (e.g., `haoyang9804` across both OpenRLHF and AReaL) to address silent baseline skews and loss reduction errors, indicating a mature understanding of policy gradient math at scale.
*   **VLM Memory Constraints:** TRL's batch size downgrades in CI/CD pipelines to avoid OOM errors highlight the heavy memory footprint of VLMs and the community's practical, adaptive responses.
*   **Maintenance vs. Active R&D:** A clear demarcation exists between actively iterated projects (averaging 2-9 PRs/day) and long-term maintenance libraries (SB3, Gymnasium), which rely on long-standing contributor bases to slowly resolve API deprecations.

## Trend Signals
*   **The Rise of Agentic Post-Training:** Verl's focus on asynchronous agent loops and tool-usage tokens indicates that the industry is aggressively pivoting from single-turn preference tuning to training models to navigate multi-step, multi-trajectory agentic workflows.
*   **Compute Democratization via QAT:** The integration of Quantization-Aware Training (QAT) into verl's FSDPEngine suggests a coming trend of embedding low-precision training directly into the RLHF loop to mitigate massive GPU compute costs.
*   **Bifurcation of the RL Stack:** The zero-activity days across traditional RL environments (Gymnasium, PettingZoo) and classic algorithm suites (CleanRL, Tianshou) suggest that open-source momentum and venture/enterprise compute are currently monopolized by the LLM post-training stack.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for 2026-05-18, based on activity from the Alibaba/ROCK repository.

# RL Open-Source Daily Digest: ROCK 
**Date:** 2026-05-18 | **Project:** Alibaba/ROCK

### 1. Today's Highlights
Activity over the past 24 hours was focused on documentation and developer experience (DevEx) for version `1.7.x`. A closed issue and corresponding PR indicate the successful rollout of a comprehensive user guide for the ROCK admin scheduler, alongside a new environmental variable tailored for local, single-node testing environments.

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **[Feature/Enhancement] [#974](https://github.com/alibaba/ROCK/issues/974) - Add scheduler user guide for v1.7.x and `ROCK_FORCE_PRIMARY_POD` env var**
    *   **Status:** Closed
    *   **Author:** zhongwen666
    *   **Summary:** Requested robust documentation for the ROCK admin scheduler—a periodic task framework used for routine maintenance (image, file, and container cleanup)—specifically targeting the `v1.7.x` ecosystem. The issue also proposed introducing `ROCK_FORCE_PRIMARY_POD` to force the scheduler to run on a single node, vastly simplifying local development and testing workflows. 

### 4. Key PR Progress
*   **[Documentation] [#975](https://github.com/alibaba/ROCK/pull/975) - docs(scheduler): add scheduler user guide for v1.7.x (#974)**
    *   **Status:** Closed (Merged)
    *   **Author:** zhongwen666
    *   **Summary:** Implemented the enhancements requested in Issue #974. The PR commits include comprehensive scheduler user guides for `version-1.7.x` in both English and Simplified Chinese (`zh-Hans`). Furthermore, it introduces the `ROCK_FORCE_PRIMARY_POD` environment variable and expands the `rock-conf/rock-local.yml` file with a complete scheduler configuration, bridging the gap between distributed production environments and local RL debugging.

### 5. Why This Project Matters in Today's RL Landscape
In modern reinforcement learning research and deployment, infrastructure maintenance is a critical bottleneck. Large-scale RL experiments spawn thousands of ephemeral containers and sandbox environments, which can quickly overwhelm node storage if not properly managed. 

ROCK’s focus on documenting and streamlining its **admin scheduler** highlights a maturation in the open-source RL ecosystem: moving beyond just training algorithms to providing enterprise-grade, distributed cluster management. By introducing features like `ROCK_FORCE_PRIMARY_POD`, ROCK significantly lowers the barrier to entry, allowing RL researchers to test cluster-level configurations and periodic cleanup scripts locally before deploying to large-scale, multi-node compute grids.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-18

## 1. Today's Highlights
Activity on AReaL over the last 24 hours focused on core training stability and infrastructure scalability. A critical bug fix addressing silent loss calculation errors in sequence-level PPO was submitted, alongside continued development on a Kubernetes-native scheduler to support enterprise-level distributed training. Meanwhile, dependency-related feature requests and documentation audits were marked closed.

## 2. Releases
**None.** No new releases were published in the past 24 hours.

## 3. Important Issues
Two issues were updated and subsequently closed due to inactivity/staleness:
*   **[Doc] Docs/code alignment questions across config, workflows, LoRA, and metrics ([#1165](https://github.com/inclusionAI/AReaL/issues/1165))**: An automated documentation audit flagging divergences between implementation and documentation was closed after remaining stale.
*   **[Feature] Update megatron-bridge deps to the latest main and upgrade sglang to 0.5.10+ ([#1189](https://github.com/inclusionAI/AReaL/issues/1189))**: A feature request to resolve dependency conflicts between `megatron-bridge` (which lacked support for `transformers 5.3+`) and `SGLang` was also marked stale and closed. 

## 4. Key PR Progress
*   **[OPEN] Fix silent loss bug in 2D padded sequences ([#1346](https://github.com/inclusionAI/AReaL/pull/1346))**: Submitted by `haoyang9804`, this PR addresses a subtle but critical bug in AReaL's PPO/GSPO loss computation. Previously, `loss_mask=False` padding positions were incorrectly included when averaging token advantages into sequence-level advantages, silently corrupting gradients and one-step updates. 
*   **[OPEN] Refined Kubernetes scheduler implementation ([#1316](https://github.com/inclusionAI/AReaL/pull/1316))**: Authored by `senseipri`, this PR introduces a `KubernetesScheduler` using StatefulSet-based worker orchestration. It integrates the Kubernetes Python client, adds pod health diagnostics, and implements rollback handling—crucial steps for deploying AReaL on shared enterprise clusters.

## 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and advanced reasoning algorithms (like GSPO), low-level computational bugs can silently degrade model performance. AReaL's focus on rigorously masking 2D sequence advantages ([PR #1346](https://github.com/inclusionAI/AReaL/pull/1346)) demonstrates the exact kind of mathematical precision required in modern RL pipelines. Furthermore, transitioning to Kubernetes-native scheduling ([PR #1316](https://github.com/inclusionAI/AReaL/pull/1316)) reflects the RL ecosystem's broader shift away from rigid HPC environments toward scalable, cloud-native distributed training infrastructure.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (huggingface/trl)
**Date:** 2026-05-18

## 1. Today's Highlights
Activity over the last 24 hours shows a strong focus on Visual-Language Models (VLMs) and stabilizing distributed training infrastructure within TRL. Four pull requests received updates, highlighting active community efforts to expand VLM compatibility across multiple trainer architectures (GRPO, RLOO, GOLD), resolve asynchronous rollout initialization bugs, and fix ongoing CI memory bottlenecks. No new releases or active issues were logged for the day.

## 2. Releases
* **No new releases** recorded in the last 24 hours.

## 3. Important Issues
* **0 issues updated.** There are no new or recently active bug reports or feature requests to flag for this cycle.

## 4. Key PR Progress
* **[AsyncGRPO] Fix missing tool gates in worker init** ([PR #5748](https://github.com/huggingface/trl/pull/5748))
  * *Status:* Open
  * *Summary:* Fixes a `ValueError` during initialization for non-bundled tokenizers by mirroring tool-related gates from `GRPOTrainer` to `AsyncRolloutWorker`. This is a critical fix for users leveraging asynchronous distributed rollouts with tool-calling agents.
* **Add Qwen3-VL training chat template with generation markers** ([PR #5764](https://github.com/huggingface/trl/pull/5764))
  * *Status:* Open
  * *Summary:* Introduces a `&#123;&#37; generation &#37;&#125;`-marked training template for Qwen3-VL. This enables `return_assistant_tokens_mask=True`, ensuring correct loss masking for assistant-only tokens during SFT—a vital component for preparing VL models for downstream RLHF.
* **Fix OOM in CI by reducing batch size in GRPO/RLOO VLM tests** ([PR #5767](https://github.com/huggingface/trl/pull/5767))
  * *Status:* Open | Author: *albertvillanova*
  * *Summary:* Lowers `per_device_train_batch_size` from 3 to 1 in GRPO and RLOO VLM test configs. This reflects the heavy memory footprint of modern VL models and stabilizes the CI pipeline for RL trainers.
* **GOLDTrainer VLM support** ([PR #5461](https://github.com/huggingface/trl/pull/5461))
  * *Status:* Open
  * *Summary:* Extends TRL's `GOLDTrainer` (Goal-conditioned Offline Learning via Diffusion) to support Vision-Language Models, further expanding TRL's catalog of RL algorithms compatible with multimodal inputs.

## 5. Why This Project Matters in Today's RL Landscape
Hugging Face's TRL remains the foundational library for fine-tuning Large Language Models (LLMs) and Vision-Language Models (VLMs) with Reinforcement Learning. Today's digest reveals a clear industry trend: **the rapid convergence of multimodal AI and advanced RL techniques**. 

The ongoing PRs to integrate Qwen3-VL templates, scale down batch sizes for VLM memory constraints, and adapt complex algorithms like GOLD for multimodal inputs demonstrate that TRL is actively bridging the gap between text-only post-training and multimodal reasoning. Furthermore, fixes to `AsyncRolloutWorker` tool-gating highlight the library's continuous maturation toward robust, distributed RL workloads required for modern RLHF/GRPO pipelines at scale.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-05-18

### 1. Today's Highlights
Activity on the OpenRLHF repository over the last 24 hours was strictly focused on hardening core training logic. Contributor `haoyang9804` opened two targeted pull requests addressing "quiet" numerical and masking bugs in group reward baselines and PPO policy loss reduction. No new releases or issues were reported.

### 2. Releases
*   **None** (No new version tags published in the last 24 hours).

### 3. Important Issues
*   **None** (0 issues created or updated in the last 24 hours).

### 4. Key PR Progress
Two critical bug-fix PRs were introduced to correct edge-case behaviors in token masking and reward computation:
*   **[PR #1239](https://github.com/OpenRLHF/OpenRLHF/pull/1239) - `fix: ignore zero-action samples in group reward baselines`**
    *   *Details:* Fixes an edge case in `RemoteExperienceMaker.compute_advantages_and_returns` affecting group-style estimators like `dr_grpo`. When response truncation results in a rollout sibling with an empty action mask (`action_mask.sum() == 0`), the current implementation incorrectly includes these zero-action samples in group reward centering, skewing the advantage baseline.
*   **[PR #1240](https://github.com/OpenRLHF/OpenRLHF/pull/1240) - `fix: ignore masked invalid values in policy loss reductions`**
    *   *Details:* Fixes a silent training-signal bug in `PolicyLoss.forward`. Previously, positions marked with `action_mask=0` (which contain padding, tool-use, or rejected tokens) were still used to calculate `log_probs - old_log_probs` during loss reduction. This fix ensures semantically ignored tokens are properly excluded from the final loss calculation.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and its derivatives (GRPO, DPO) remain the gold standard for aligning and post-training Large Language Models (LLMs), framework stability is critical. These PRs highlight the maturation of the open-source RL ecosystem: the community is moving beyond building foundational training loops to aggressively hunting down "quiet" numerical bugs related to sequence padding and token masking. For enterprises and researchers running large-scale distributed RLHF, resolving these subtle padding bugs prevents silent model degradation and ensures mathematically accurate policy gradients—making OpenRLHF an increasingly robust choice for production-level LLM training.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL open-source ecosystem daily digest for `verl` based on the provided GitHub data.

---

# RL Open-Source Daily Digest: `verl`
**Date:** 2026-05-18 | **Project:** [verl-project/verl](https://github.com/volcengine/verl)

### 1. Today's Highlights
Today's development activity heavily focuses on **hardening Post-Training GRPO/RLHF algorithms and fixing multi-turn/agent workflows**. Three significant "quiet bug" fixes were submitted today regarding rollout rejection sampling and multi-turn reward calculations, indicating a rigorous push towards mathematical and architectural stability. Additionally, a critical user pain point was identified regarding LoRA checkpoint merging, which was quickly addressed by the community.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
*   **LoRA Checkpoint Confusion:** In [#3087](https://github.com/verl-project/verl/issues/3087), a user flagged confusion over whether the `.pt` files saved alongside `lora_adapter` directories post-GRPO training contain pre-merged or raw weights. 
*   **Multi-Turn & Export Bugs:** In [#6380](https://github.com/verl-project/verl/issues/6380), a user training `Qwen3-8b-sft` with GRPO encountered unexpected trainer exits at final steps and `adapter` folder artifacts when using `.pt` to `safetensors` conversion scripts.

### 4. Key PR Progress
*   **Algorithm & Advantage Fixes (High Impact):** 
    *   [#6375](https://github.com/verl-project/verl/pull/6375): Fixes a quiet advantage leak where rollout-rejected samples contaminated GRPO/Dr. GRPO baselines.
    *   [#6376](https://github.com/verl-project/verl/pull/6376): Fixes multi-turn/tool-usage training signals by correctly skipping untrainable tool observation tokens in Reinforce++ (RF++) reward-to-go calculations.
    *   [#6377](https://github.com/verl-project/verl/pull/6377): Corrects the rejection ratio bounds in K1 rollout rejection sampling.
*   **Checkpoint & Merging:** [#6381](https://github.com/verl-project/verl/pull/6381) directly addresses issue #3087 by saving LoRA rank/alpha metadata (`lora_train_meta.json`) next to checkpoints, ensuring legacy and new model mergers preserve `lora_alpha` correctly.
*   **Agent & Async Pipelines:** 
    *   [#6271](https://github.com/verl-project/verl/pull/6271) introduces multi-trajectory generation in a single rollout for the fully-async agent loop.
    *   [#6378](https://github.com/verl-project/verl/pull/6378) fixes a missing `request_id` argument in the experimental Atropos loop.
*   **Backend & Architecture Refactoring:** 
    *   [#6335](https://github.com/verl-project/verl/pull/6335) refactors the Megatron-Bridge to utilize new NVIDIA helper APIs.
    *   [#5411](https://github.com/verl-project/verl/pull/5411) closed today, having successfully integrated QAT (NVFP4 W4A16 quantization-aware training) into the `FSDPEngine`.
*   **Housekeeping:** [#6379](https://github.com/verl-project/verl/pull/6379) removed stale documentation references to the deprecated `examples/sglang_multiturn/` directory.

### 5. Why This Project Matters in Today's RL Landscape
In the modern LLM lifecycle, Reinforcement Learning from Human Feedback (RLHF) and Post-Training (e.g., GRPO) have become the primary bottlenecks for scaling reasoning models. `verl` remains a critical open-source infrastructure project because it bridges the gap between raw modeling (FSDP/Megatron) and inference engines (vLLM/SGLang). 

Today's commits highlight exactly *why* `verl` is important: as the industry shifts from simple single-turn preference tuning toward complex, multi-turn tool-using agents, calculating advantages accurately over multiple trajectories and rejected samples is notoriously difficult. By actively patching "quiet bugs" in Reinforce++ and rollout rejection sampling, `verl` provides the community with mathematically robust building blocks needed to train reliable reasoning models (like Qwen3) at scale.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

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

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3
**Date:** 2026-05-18 | **Repository:** [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)

## 1. Today's Highlights
Activity in the Stable Baselines3 (SB3) repository over the past 24 hours was minimal, with zero active pull requests, no new releases, and only one long-standing issue receiving an update. The focus remains on long-tail compatibility between SB3's internal preprocessing utilities and the modern Gymnasium API.

## 2. Releases
**No new releases.** The repository has not tagged a new version in the recent window. Users should continue to pin their dependencies to the latest stable release until a new patch or minor version is announced.

## 3. Important Issues
The only issue updated in the past 24 hours highlights a notable edge case when integrating SB3 with modern Gymnasium environments:
*   **[#2090 [Bug]: `is_image_space` works poorly with Gymnasium's `FrameStackObservation`](https://github.com/DLR-RM/stable-baselines3/issues/2090)**
    *   **Status:** Open
    *   **Context:** Originally reported in Feb 2025, this issue tracks a flaw in `stable_baselines3.common.preprocessing.is_image_space`. When a standard RGB image space `(3, 64, 64)` is wrapped by Gymnasium's native `FrameStackObservation`, it alters the shape to `(k*3, 64, 64)`. SB3's `is_image_space` fails to correctly identify this stacked output as an image space. 
    *   **Impact:** This can lead to incorrect feature extraction (e.g., failing to utilize CNNs properly) when using standard Gymnasium wrappers. The issue is tagged with `help wanted`, representing a low-barrier entry point for open-source contributors looking to improve Gymnasium-compatibility.

## 4. Key PR Progress
**No active updates.** There are currently no pull requests with new commits, reviews, or merges in the last 24 hours. 

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, accessible, and heavily vetted implementations of core Deep Reinforcement Learning algorithms (like PPO, SAC, and TD3). While newer frameworks focus on massive distributed training or offline RL, SB3 is critical to the ecosystem because it provides a stable, modular, and highly readable codebase for academic research and applied RL. 

Issues like #2090 demonstrate the ongoing, subtle friction involved in maintaining foundational libraries as dependencies evolve (specifically, the community's ongoing transition from OpenAI Gym to Gymnasium). Keeping SB3 perfectly aligned with modern Gymnasium wrappers is essential, as even minor preprocessing bugs in image spaces can silently degrade agent performance, leading to invalid research conclusions or wasted compute.

</details>