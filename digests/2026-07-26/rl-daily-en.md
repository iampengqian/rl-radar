# RL Open Source Daily Digest 2026-07-26

> Generated: 2026-07-25 22:15 UTC | Projects covered: 15

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
The July 26, 2026 digest reveals an open-source Reinforcement Learning (RL) ecosystem deeply divided between massive-scale LLM infrastructure and foundational algorithmic refinement. Activity is overwhelmingly concentrated on post-training orchestration for Large Language Models (LLMs) and Vision-Language Models (VLMs), specifically tackling memory bottlenecks and hardware portability. Meanwhile, traditional RL environments and applied libraries are in maintenance or evaluation-refinement phases, reflecting a maturing focus on security, throughput benchmarking, and scientific rigor.

## Activity Comparison
The development landscape is currently dominated by heavy infrastructure lifting in LLM-centric frameworks (`verl`, `TRL`, `OpenRLHF`), while core algorithmic environments experience quiet or highly targeted update cycles.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 31 | 12 | 0 | Enterprise-scale hardware adaptation (Ascend NPU, GH200) and MoE memory optimization. |
| **TRL** | ~5+ | 7 | 0 | Stabilizing CI/dependency friction and patching loss normalization (GRPO/DAPO) & vLLM integrations. |
| **Open Instruct** | 1 | 10 | 0 | Democratizing GRPO via CPU offloading and hardening agentic Docker sandboxes. |
| **OpenRLHF** | 1 | 1 | 0 | Algorithmic rigor: shifting from mean-based to variance-aware GRPO sample filtering. |
| **AReaL** | 0 | 2 | 0 | Expanding horizons: experimental Diffusion RL and proxy tool-use interoperability. |
| **Gymnasium** | 1 | 1 | 0 | Performance benchmarking for vectorized environments (MuJoCo MJX). |
| **SB3** | 1 | 1 | 0 | Maturing core infrastructure via secure model deserialization. |
| **slime** | 0 | 1 | 0 | Unblocking native Megatron-Core support for Qwen3.5-VL multimodal training. |
| **PettingZoo** | 1 | 1 | 0 | Environment extensibility (configurable MARL Pursuit maps). |
| **CleanRL, rl_games, ROCK, ROLL, Tianshou** | 0 | 0 | 0 | No active updates (dormant or heads-down development). |

## Shared Research & Engineering Directions

**Research Signals**
*   **Algorithmic Nuances in GRPO:** As GRPO surpasses PPO in popularity for LLM alignment, researchers are uncovering microscopic flaws. Frameworks like `TRL` (DAPO/CISPO loss scaling) and `OpenRLHF` (variance-aware filtering) are actively patching gradient and advantage calculation bugs to stabilize non-binary reward distributions.
*   **Beyond Text & Standard Rewards:** `AReaL` is pushing RL into generative vision via Diffusion RL (REINFORCE for Stable Diffusion). Simultaneously, a massive cross-ecosystem push for the **REFUTE** benchmark (proposed across `SB3`, `Gymnasium`, `PettingZoo`, `Open Instruct`, and `torchtune`) signals a paradigm shift toward evaluating model calibration, self-correction, and Brier scores over raw cumulative rewards.
*   **Agentic Tool-Use:** Frameworks are rapidly adopting tool-calling configurations (`verl`) and fixing proxy schemas (`AReaL`) to enable reliable, multi-step tool-use rollouts.

**Engineering & Infrastructure Signals**
*   **Memory & Compute Optimization:** Making trillion-parameter and MoE models viable is the top engineering priority. Solutions include tiled lm-head losses (`Open Instruct`), CPU-Adam offloading (`Open Instruct`), and drastic GPU memory reductions during vLLM MoE weight reloads (`verl`).
*   **Inference Engine Interoperability:** Deep coupling with high-throughput inference engines like `vLLM` (addressing sleep modes and colocate weights in `TRL` and `verl`) and `sglang` (in `AReaL`) is critical for generation-heavy RL workloads.
*   **Hardware & Framework Portability:** Projects are aggressively decoupling from pure NVIDIA stacks. `verl` is expanding to Ascend NPUs and GH200, while `slime` is removing forked dependencies to align natively with `megatron-core`.

## Differentiation Analysis
*   **Scale & Target Architecture:** `verl` and `slime` are explicitly targeting hyperscaler and enterprise bottlenecks—handling 128+ GPU clusters, Ascend NPUs, and massive MoE architectures. In contrast, `Open Instruct` focuses on democratizing RL, explicitly optimizing GRPO to run on accessible 40-80GB consumer/small-cluster setups.
*   **RL Sub-Disciplines:** There is a stark split between LLM post-training frameworks (`verl`, `TRL`, `OpenRLHF`) and classical RL environments. While LLM frameworks deal with Docker orchestration for tool-use and sequence packing, foundational APIs (`Gymnasium`, `PettingZoo`) are iterating on physics simulator throughput (MuJoCo MJX) and multi-agent geometry.
*   **Security vs. Performance:** `Stable Baselines3` differentiates by prioritizing long-term project security (preventing arbitrary code execution via `.load()`), whereas LLM frameworks are sacrificing compute overhead to find any possible memory savings for training.

## Community Momentum & Maturity
The ecosystem is currently in a stabilization phase, with zero new releases across the board. However, `verl` shows explosive momentum with 31 issues and 12 PRs in a single day, proving it is absorbing the brunt of real-world, large-scale deployment friction. `TRL` and `Open Instruct` also show high PR velocity, focused heavily on CI/CD stabilization and dependency management. Interestingly, traditional RL tools (`CleanRL`, `Tianshou`, `rl_games`) show absolute zero activity, suggesting that the open-source developer mindshare has aggressively pivoted toward LLM post-training infrastructure over the last few development cycles.

## Trend Signals
*   **Sandboxed Agentic RL:** The hardening of Docker backends with OOM detection and concurrency semaphores (`Open Instruct`) indicates that reliable code-execution and tool-use rollouts are becoming the next major infrastructure standard.
*   **Cross-Architecture Portability:** The heavy PR activity around Ascend NPU and GH200 support (`verl`) signals that the NVIDIA monopoly on LLM post-training is weakening as international and alternative hardware ecosystems mature.
*   **The Calibration Era:** The synchronized, multi-repository proposal of the REFUTE benchmark indicates a coordinated community demand to move beyond raw accuracy/reward metrics toward statistically rigorous, scientifically grounded model evaluation.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL Open-Source Ecosystem Daily Digest for July 26, 2026.

### 1. Today's Highlights
*   **Quiet Bug-Squashing Day:** The `THUDM/slime` repository saw a low-activity day with zero new issues and zero new releases. 
*   **Infrastructure Improvement:** A single, highly technical PR was submitted, focusing on eliminating reliance on a forked version of Megatron Bridge for Qwen3.5-VL models.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **No active issues** were created or updated in the last 24 hours, indicating a period of stability or focused development rather than active community troubleshooting.

### 4. Key PR Progress
*   **[PR #2233](https://github.com/THUDM/slime/pull/2233) [Multimodal][Model] Make Qwen3.5-VL work with packed sequences**
    *   **Author:** `TobyYang7`
    *   **Status:** Open (Created on 2026-07-25)
    *   **Summary:** This PR addresses a critical architectural blocker where Qwen3.5-VL providers could not run natively through the Megatron Bridge path. Previously, the example scripts relied on a forked version of Megatron Bridge to function. This PR fixes the construction of Gated DeltaNet layers (building from `megatron-core`'s experimental paths) and aligns the model to run seamlessly against the official Megatron package. 

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning (RL) workflows heavily pivot toward complex multimodal LLMs (Large Language Models), efficient sequence packing and native framework compatibility become massive bottlenecks. `slime` serves as a vital bridge for training these architectures. PRs like #2233 are essential ecosystem maintenance: by removing dependency on forked libraries and enabling native Qwen3.5-VL support within `megatron-core`, the project ensures that distributed RL training and inference for next-generation vision-language models remains stable, reproducible, and highly optimized.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL ecosystem daily digest for AReaL based on the provided GitHub data.

### 1. Today’s Highlights
*   **Zero Community Noise, Focused Development:** AReaL experienced zero new issues and zero new releases in the last 24 hours, indicating a stable codebase or a community focused on heads-down development.
*   **Experimental Diffusion RL:** Sustained progress on PR [#1410](https://github.com/areal-project/AReaL/pull/1410), pushing the boundaries of RL post-training for diffusion models.
*   **Inference Engine Interoperability:** Ongoing maintenance (PR [#1499](https://github.com/areal-project/AReaL/pull/1499)) to align OpenAI-compatible proxy schemas with `sglang`'s native rendering.

### 2. Releases
*   **No new releases** were published today. The project is currently maintaining its existing stable version.

### 3. Important Issues
*   **None:** There were 0 issues updated or created in the last 24 hours. The issue tracker remains quiet.

### 4. Key PR Progress
Two PRs saw updates today, both reflecting deep technical work on framework extensibility and interoperability:

*   **[PR #1410](https://github.com/areal-project/AReaL/pull/1410): `feat(experimental): Diffusion RL post-training — Phase 1 PoC (SD1.5 + LoRA + REINFORCE)`** (by Fyrgo8)
    *   *Status:* Open (Created June 15, updated July 25)
    *   *Summary:* This is a highly significant architectural addition. It introduces a self-contained, single-GPU proof-of-concept for applying RL post-training directly to diffusion models (specifically Stable Diffusion 1.5) using LoRA and the REINFORCE algorithm. This bridges AReaL's RL infrastructure with the rapidly growing field of generative AI alignment.
*   **[PR #1499](https://github.com/areal-project/AReaL/pull/1499): `[stale] fix(openai): align proxy tool schemas with sglang chat-completions rendering`** (by Le8r0nJames)
    *   *Status:* Open/Stale (Created July 10, updated July 25)
    *   *Summary:* A vital bug fix for agentic RL workflows. It resolves discrepancies between how AReaL's OpenAI-compatible proxy renders `tools` as plain dicts versus how `sglang` processes them through its pydantic `Tool` model. Ensuring field order and default-field presence match is critical for stable tool-use/function-calling during RL rollouts.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL ecosystem, the frontier has moved beyond simple chatbots into two major domains: **Agentic Tool-Use** and **Multimodal/Generative Alignment**. AReaL's daily activity perfectly reflects this industry shift. 

By actively maintaining strict compatibility with high-performance inference engines like `sglang` (PR #1499), AReaL ensures that RL engineers can run high-throughput, tool-augmented rollouts without hitting serialization bottlenecks. Furthermore, the experimental work on Diffusion RL (PR #1410) positions AReaL at the cutting edge of post-training, acknowledging that algorithms like REINFORCE are no longer just for LLMs, but are becoming standard for aligning diffusion-based image and video generation models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL open-source ecosystem daily digest for TRL based on the provided GitHub data.

# 📊 RL Daily Digest: HuggingFace TRL 
**Date:** 2026-07-26

## 1. Today's Highlights
- **CI Stabilization:** Significant engineering effort today focused on fixing Continuous Integration (CI) pipeline breaks caused by upstream updates in `transformers` (dev builds) and `bitsandbytes` (0.50.0).
- **GRPO & vLLM Integration:** Active patching continues to stabilize vLLM weight synchronization and loss normalization for the heavily utilized GRPO trainer.
- **Ecosystem Expansion:** New capabilities are being threaded into the library, including MoE (Mixture of Experts) diagnostics for SFT and robust handling of environment rollouts to prevent silent advantage poisoning.

## 2. Releases
- **New Releases:** None (0)
- The repository is currently in a patch/stabilization phase, with multiple hotfixes being merged to maintain compatibility with the broader Hugging Face ecosystem.

## 3. Important Issues
- **vLLM Colocate Sleep Mode Bug ([#5312](https://github.com/huggingface/trl/issues/5312)):** An ongoing issue where vLLM weights are not properly synchronized when `vllm_enable_sleep_mode=True` is used with `vllm_mode="colocate"`, breaking GRPO training workflows.
- **DAPO Loss Normalization ([#5619](https://github.com/huggingface/trl/issues/5619)):** Identified that DAPO (and related CISPO/VESPO) loss types were not correctly normalized by `gradient_accumulation_steps`, leading to silently mis-scaled gradients during GRPO.
- **CI Failures & Dependency Friction ([#6541](https://github.com/huggingface/trl/issues/6541), [#6543](https://github.com/huggingface/trl/issues/6543)):** Upstream updates in `transformers` (NemotronH kernel expansions) and `bitsandbytes` 0.50.0 (removal of `_check_is_size` and bias casting) broke existing trainer assertions and quantized PEFT tests.

## 4. Key PR Progress
- **[Closed] Hotfixes & Dependency Patches:**
  - [PR #6542](https://github.com/huggingface/trl/pull/6542): Xfailed NemotronH GRPO/RLOO tests against broken `transformers` dev builds.
  - [PR #6544](https://github.com/huggingface/trl/pull/6544): Temporarily pinned `bitsandbytes < 0.50.0` to fix quantization assertion errors.
  - [PR #6024](https://github.com/huggingface/trl/pull/6024): Corrected GRPO/DAPO/CISPO/VESPO loss normalization scaling when `steps_per_generation != gradient_accumulation_steps`.
- **[Open] Core Trainer Enhancements:**
  - [PR #5313](https://github.com/huggingface/trl/pull/5313): Submitted a direct patch to fix the vLLM sleep mode weight synchronization bug (#5312).
  - [PR #6514](https://github.com/huggingface/trl/pull/6514): Adds bounded Mixture-of-Experts (MoE) expert usage metrics to `SFTTrainer`.
  - [PR #6538](https://github.com/huggingface/trl/pull/6538): Updates quantization tests and warning filters for the new `bitsandbytes` 0.50.0 release.
  - [PR #6430](https://github.com/huggingface/trl/pull/6430): Prevents default-0.0 advantage poisoning in OpenReward rollouts by returning `None` for unrewarded tool calls.
  - [PR #6539](https://github.com/huggingface/trl/pull/6539): Fixes a chunked Cross-Entropy crash in `SFTTrainer` affecting models like Qwen3.5 where `forward` isn't a strictly bound method.

## 5. Why This Project Matters in Today's RL Landscape
TRL remains the de facto standard framework for applied Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) in the open-source community. Today's development log perfectly reflects the current frontier of AI engineering: 
1. **Infrastructure Scaling:** The ongoing work to seamlessly integrate GRPO with vLLM (e.g., sleep modes, colocate weights) showcases the field's aggressive shift toward high-throughput, GPU-efficient inference during generation phases. 
2. **Algorithmic Nuances:** The discovery of loss normalization bugs (DAPO/CISPO) proves that as the community adopts complex Group Relative Policy Optimization variants, microscopic gradient scaling details drastically impact training stability.
3. **Modern Architectures:** Efforts to add MoE diagnostics and update PEFT/Quantization pipelines highlight TRL's role in bridging the gap between novel architectures (MoEs, Qwen-class LLMs) and stable fine-tuning paradigms.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL ecosystem daily digest for OpenRLHF.

# 📊 OpenRLHF Ecosystem Daily Digest (2026-07-26)

### 1. Today's Highlights
The OpenRLHF community is actively advancing the robustness of dynamic experience filtering in Group Relative Policy Optimization (GRPO). Today’s activity centers on a proposed paradigm shift from mean-based filtering to variance-aware filtering to better handle non-binary reward distributions. 

### 2. Releases
* **No new releases** in the last 24 hours. The project is currently in an active development and proposal phase.

### 3. Important Issues
* **[#1270] [OPEN] Dropping experiences should also consider standard deviation when using non-binary rewards** | [Link](https://github.com/OpenRLHF/OpenRLHF/issues/1270)
  * **Summary:** Author `@oaimli` identifies a limitation in the current dynamic filtering strategy located in `trainer/ppo_utils/samples_generator.py`. The current logic drops training samples based solely on the reward average. The issue proposes incorporating standard deviation to prevent dropping mathematically sound variance when dealing with non-binary (continuous/sparse) rewards. 

### 4. Key PR Progress
* **[#1272] [OPEN] Add variance-aware dynamic filtering for GRPO groups** | [Link](https://github.com/OpenRLHF/OpenRLHF/pull/1272)
  * **Progress:** Opened by `@mentaltraffic` to directly resolve Issue #1270. 
  * **Technical Context:** The PR addresses a fundamental flaw in mean-based filtering for GRPO. Because GRPO normalizes advantages within a group using the formula `A_i = (r_i - mean) / (std + eps)`, dropping groups based purely on their mean reward range (`--algo.dynamic_filtering_range`) fails to account for intra-group variance. This PR ensures groups are filtered based on their actual learning signal utility rather than absolute mean scores.

*(Note: Issue [#1271](https://github.com/OpenRLHF/OpenRLHF/issues/1271) proposed adding the REFUTE scientific critique/calibration benchmark to the docs, but remains inactive since its creation).*

### 5. Why This Project Matters in Today's RL Landscape
As the open-source AI community shifts heavily toward GRPO (popularized by DeepSeek-R1 and similar architectures) for reasoning tasks, OpenRLHF serves as a critical, highly transparent training framework. Today's PR is a perfect microcosm of the broader RL landscape's evolution: moving away from naive, mean-based metric filtering toward mathematically rigorous, variance-aware advantage normalization. Ensuring that dynamic filtering respects standard deviation is essential for preventing the accidental dropping of high-value edge-case reasoning traces, which ultimately stabilizes policy updates for complex, non-binary reward models.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL open-source ecosystem digest for `verl` (volcengine/verl) on 2026-07-26.

### 1. Today's Highlights
Activity remains highly focused on hardware adaptability (specifically Ascend NPUs) and memory optimization for complex architectures (MoE and VL models). The community is actively addressing edge cases in vLLM integration, FSDP sharding, and Megatron checkpoints. There were **31 issues** updated and **12 PRs** updated in the last 24 hours.

### 2. Releases
**No new releases** were published in this reporting window. The ecosystem appears to be in a stabilization and patching phase, likely building towards the next minor/major version bump.

### 3. Important Issues
Several critical bug reports highlight the challenges of scaling RL training across diverse hardware and complex model structures:
*   **Hardware & OOM Constraints:** 
    *   [Issue #7145](https://github.com/volcengine/verl/issues/7145): Out-of-Memory (OOM) errors during extended DAPO training on `qwen3-4b-instruct`. 
    *   [Issue #4467](https://github.com/volcengine/verl/issues/4467): Persistent training failures when scaling to 128 GPUs for the massive `Qwen3-VL-235B-A22B` MoE model.
    *   [Issue #4512](https://github.com/volcengine/verl/issues/4512): Requests for stable environment builds on GH200+arch architectures.
*   **Training & Rollout Discrepancies:**
    *   [Issue #4476](https://github.com/volcengine/verl/issues/4476): Reported discrepancies between `verl`'s rollout generation and direct vLLM outputs, a crucial issue for policy evaluation consistency.
    *   [Issue #4495](https://github.com/volcengine/verl/issues/4495): Feature request to retain sync mode for rollouts, pointing to potential friction with the framework's async rollout pipeline.
    *   [Issue #7146](https://github.com/volcengine/verl/issues/7146): Gradient checkpointing failure for Nemotron-H actors under FSDP.
*   **Feature Requests:** Continued demand for comprehensive multimodal support, including full audio/text/image I/O for Qwen-Omni ([Issue #4440](https://github.com/volcengine/verl/issues/4440)) and multiple LoRA adapter training ([Issue #4421](https://github.com/volcengine/verl/issues/4421)).

### 4. Key PR Progress
Today's PRs showcase heavy backend engineering, particularly optimizing weight syncing and expanding hardware support:
*   **Ascend NPU Ecosystem Expansion:** 
    *   [PR #7142](https://github.com/volcengine/verl/pull/7142) introduces a new `megatron_adaptor+te-npu` backend for Ascend NPU as an alternative to MindSpeed.
    *   [PR #7134](https://github.com/volcengine/verl/pull/7134) and [PR #7148](https://github.com/volcengine/verl/pull/7148) harden NPU availability checks and fix nightly CI specifically for Ascend environments.
*   **Memory & MoE Optimizations:**
    *   [PR #7143](https://github.com/volcengine/verl/pull/7143) drastically reduces GPU memory usage during vLLM layerwise MoE weight reloads by filtering non-local expert weights before CUDA-IPC buffer cloning.
    *   [PR #7085](https://github.com/volcengine/verl/pull/7085) and [PR #7144](https://github.com/volcengine/verl/pull/7144) implement EP-aware sharded delta exports and block placements for FSDP2/veomni, streamlining HuggingFace format exports.
*   **vLLM Integration & Tooling:**
    *   [PR #6560](https://github.com/volcengine/verl/pull/6560) exposes vLLM tool-calling configurations (`tool_call_parser`, `enable_auto_tool_choice`), a crucial step for RL in agentic workflows.
    *   [PR #7147](https://github.com/volcengine/verl/pull/7147) patches legacy `FusedMoE` loader incompatibilities with the latest modular vLLM versions.

### 5. Why This Project Matters in Today's RL Landscape
As RLHF/GRPO transitions from research scripts to production-scale infrastructure, `verl` is cementing itself as a critical orchestration layer. Today's commit history proves that the project is tackling the actual bottlenecks of large-scale post-training: expert parallelism (EP) memory management, cross-hardware portability (bridging NVIDIA, Ascend, and GH200 architectures), and seamless rollout-engine interoperability (vLLM, Megatron). By actively solving weight-syncing complexities across distributed backends, `verl` is significantly lowering the barrier to training trillion-parameter, multimodal "agentic" models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

### 🔬 RL Open-Source Ecosystem Daily Digest: July 26, 2026

**1. Today's Highlights**
Activity in `torchtune` over the last 24 hours has been quiet on the development front, with zero PR updates and no new releases. The sole activity consists of three newly opened issues by a community member advocating for the integration of **REFUTE**, a scientific critique and calibration benchmark, into the library's evaluation and AI tooling ecosystem.

**2. Releases**
*   **Status:** No new releases or tags in the last 24 hours. 

**3. Important Issues**
The latest issues center on expanding LLM evaluation capabilities, specifically regarding model calibration and self-correction—a critical component for aligning RL models in specialized domains like scientific research.
*   **[#2974](https://github.com/meta-pytorch/torchtune/issues/2974) & [#2975](https://github.com/meta-pytorch/torchtune/issues/2975): Add REFUTE benchmark** 
    *   **Author:** connerlambden
    *   **Summary:** Proposes adding **REFUTE** to `torchtune`'s related evaluation tooling. REFUTE evaluates paper-grounded claims through predictions and judge scores to output calibration metrics like Brier score and Expected Calibration Error (ECE). 
*   **[#2976](https://github.com/meta-pytorch/torchtune/issues/2976): Related eval: REFUTE scientific critique + calibration**
    *   **Author:** connerlambden
    *   **Summary:** Highlights a specific gap in current eval suites: the observation that "critique skill and calibration often come apart." The author proposes REFUTE as a judge-free solution to measure these traits independently.

**4. Key PR Progress**
*   **Status:** **0 PRs updated.** 
    *   Development velocity appears to be on pause or operating behind the scenes, with no public code contributions, reviews, or merges in the past day.

**5. Why This Project Matters in Today's RL Landscape**
As a core component of the PyTorch ecosystem, `torchtune` is widely utilized for fine-tuning Large Language Models using techniques like RLHF (Reinforcement Learning from Human Feedback) and DPO (Direct Preference Optimization). Today's influx of issues regarding the **REFUTE** benchmark underscores a broader trend in the RL landscape: the limits of standard accuracy metrics. 

In advanced RL pipelines, reward models and value functions rely heavily on a model's ability to recognize its own uncertainty (calibration) and self-correct (critique). If models lack calibration—often measured by metrics like Brier scores or ECE—RLHF pipelines suffer from reward hacking and hallucination. Integrating rigorous, domain-specific evaluation tools like REFUTE into training frameworks like `torchtune` represents the next step toward building reliable, truth-seeking agentic systems.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the daily reinforcement learning ecosystem digest for Open Instruct.

# 🗓️ RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-07-26 | **Repository:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
The past 24 hours show active infrastructure hardening for RL post-training, specifically targeting GRPO (Group Relative Policy Optimization) memory management and the reliability of sandboxed RL environments. There is a clear push to optimize Docker orchestration and broaden compute compatibility (CPU offloading, CUDA 13 support).

## 2. Releases
*   **No new releases** in the last 24 hours. 

## 3. Important Issues
*   **[#1787](https://github.com/allenai/open-instruct/issues/1787) [OPEN] Add REFUTE scientific critique + calibration benchmark**
    *   *Author:* connerlambden
    *   *Summary:* A proposal to integrate **REFUTE**, a scientific critique and calibration benchmark. It evaluates models by mapping paper-grounded claims to predictions, judge scores, and finally computing Brier/ECE metrics. This represents growing interest in highly specialized, domain-specific evaluation tooling for scientific AI.

## 4. Key PR Progress
A total of 10 PRs saw updates today. Key themes include memory optimization and evaluation environment stability:

**Memory & Compute Optimization:**
*   **[#1654](https://github.com/allenai/open-instruct/pull/1654) [OPEN] Add use_cpu_adam CLI toggle for GRPO:** Addresses a critical hardware bottleneck by allowing `DeepSpeedCPUAdam` offloading via CLI. This enables GRPO training on 7B models with 40–80 GB VRAM without requiring researchers to hardcode optimizer states.
*   **[#1785](https://github.com/allenai/open-instruct/pull/1785) [OPEN] Add tiled GRPO lm-head loss:** Reopened/rebased by `farhatkevin` (taking over from `hamishivi`). Introduces a memory-efficient GRPO loss path (`--use_liger_grpo_loss`) using DeepSpeed's `TiledFusedLogitsLoss` pattern to chunk lm-head projections.
*   **[#1783](https://github.com/allenai/open-instruct/pull/1783) [CLOSED] Publish automatic CUDA 13 Beaker image:** Merged logic to publish a dedicated `open_instruct_auto_cuda13` build alongside the default CUDA 12 build, ensuring next-gen hardware acceleration compatibility.

**RL Infrastructure & Sandboxing:**
*   **[#1784](https://github.com/allenai/open-instruct/pull/1784) [OPEN] Harden DockerBackend:** Rebased replacement for #1744. Implements cross-process concurrency semaphores and OOM detection to prevent Docker daemon crashes during massive concurrent RL rollouts (tool-use/agentic RL).
*   **[#1786](https://github.com/allenai/open-instruct/pull/1786) [OPEN] Exclude nested virtualenvs in Docker:** Fixes a `.dockerignore` bug where nested virtualenvs (e.g., `oe-eval-internal/.venv/`) were bloating Docker build contexts.

**Evaluation Strictness (IFEvalG):**
*   **[#1770](https://github.com/allenai/open-instruct/pull/1770) & [#1766](https://github.com/allenai/open-instruct/pull/1766) [OPEN]:** Minor but crucial fixes to `validate_end` (case-insensitive whitespace stripping) and `validate_highlighted_sections` (ignoring empty star spans `****`), ensuring instruction-following evals are parsed correctly.

## 5. Why This Project Matters in Today's RL Landscape
As the open-source community pivots heavily toward RLHF/RLAIF for LLM alignment, **GRPO** has emerged as a highly popular, critic-free alternative to traditional PPO. However, GRPO is notoriously memory-intensive. 

Today's PR activity in Open Instruct perfectly highlights the current bottlenecks in the open-source RL landscape: 
1.  **Memory ceilings:** Innovations like tiled lm-head losses and CPU-adam offloading are democratizing GRPO, making 7B+ scale RL training accessible to researchers without massive 8x80GB GPU clusters.
2.  **Agentic Stability:** The Docker backend hardening proves that as RL expands into tool-use and code-generation (SWERL), the underlying orchestration infrastructure must be resilient to OOM errors and thousands of concurrent container executions. Open Instruct continues to provide the critical low-level plumbing required to run stable, scalable open-source post-training.

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

Here is the RL open-source ecosystem digest for Gymnasium based on the last 24 hours of repository activity.

### 📊 RL Daily Digest: Gymnasium 
**Date:** 2026-07-26

#### 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours was highly focused on **performance benchmarking** and **evaluation methodologies**. While there were no new releases, maintainers and contributors are actively refining the library's core performance tracking utilities and discussing new paradigms for evaluating scientific AI claims.

#### 2. Releases
* **No new releases** were published in the last 24 hours. 

#### 3. Important Issues
* **[OPEN] Add REFUTE scientific critique + calibration benchmark** ([#1649](https://github.com/Farama-Foundation/Gymnasium/issues/1649))
  * **Author:** connerlambden
  * **Summary:** A proposal to integrate **REFUTE** into Gymnasium's evaluation and scientific AI tooling documentation. REFUTE is an evaluation benchmark designed to assess scientific AI by mapping paper-grounded claims to predictions, scoring them via a judge, and calculating reliability metrics like Brier scores and Expected Calibration Error (ECE). This highlights a growing ecosystem need for rigorous, statistically sound evaluation of RL and AI agents.

#### 4. Key PR Progress
* **[OPEN] Add vector environment step benchmark** ([#1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640))
  * **Author:** Kallinteris-Andreas
  * **Update:** Received activity on 2026-07-25. 
  * **Summary:** This PR introduces `benchmark_step_vector`, a utility to measure the steps-per-second (throughput) of individual vector environments. Driven by MuJoCo MJX testing, this addition is crucial for modern RL workflows where CPU/GPU vectorization bottlenecks heavily impact training wall-clock time. The code has passed `ruff` formatting and basic CartPole smoke tests.

#### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for single-agent reinforcement learning, Gymnasium’s daily updates reflect the broader currents of the RL landscape. Today's digest underscores two critical pain points in modern RL research:
1. **Vectorized Throughput:** As physics simulators (like MuJoCo's MJX) and models become massively parallelized, measuring and optimizing vector environment step speeds (PR #1640) is essential for reducing experiment iteration times.
2. **Trustworthy Evaluation:** With the rise of LLMs and complex generative agents, standard RL metrics (like cumulative reward) are no longer sufficient. The proposal to include calibration metrics like Brier scores and ECE (Issue #1649) signals a maturation of the field toward scientific rigor and claim verification.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-26 | **Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. Today's Highlights
Activity in the PettingZoo repository over the last 24 hours has been low but highly targeted, with 1 issue update and 1 PR update. The maintainers and community are focusing on environment extensibility and exploring integrations with advanced evaluation tooling. No new releases were cut today.

### 2. Releases
* **None.** There are 0 new releases within the past 24 hours. The ecosystem remains stable on its current version.

### 3. Important Issues
* **[#1405] [OPEN] Add REFUTE scientific critique + calibration benchmark** | *Author: connerlambden*
  * **Summary:** A proposal to integrate **REFUTE**—a scientific critique and calibration benchmark tool—into PettingZoo's evaluation and scientific AI documentation. REFUTE focuses on translating paper-grounded claims into testable predictions, scoring them via a judge, and evaluating them using calibration metrics like Brier scores and Expected Calibration Error (ECE).
  * **Link:** [Farama-Foundation/PettingZoo Issue #1405](https://github.com/Farama-Foundation/PettingZoo/issues/1405)

### 4. Key PR Progress
* **[#1393] [OPEN] Add configurable center obstacle size to Pursuit** | *Author: paranoa233*
  * **Summary:** Actively updated yesterday, this PR significantly enhances the `Pursuit` environment by introducing a `center_box_size=(width, height)` argument. This allows researchers to define exact grid-cell dimensions for the center obstacle. It maintains backward compatibility (`None` preserves the default proportional obstacle) and enables obstacle-free maps (`0, 0`), complete with built-in dimension validation.
  * **Link:** [Farama-Foundation/PettingZoo PR #1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393)

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains the industry standard for Multi-Agent Reinforcement Learning (MARL) research. Today's updates reflect two critical needs in the modern RL landscape:
1. **Environment Extensibility:** PR #1393's granular control over environment geometry is essential for MARL researchers running ablation studies on cooperative vs. competitive agent dynamics. 
2. **Rigorous Evaluation:** Issue #1405 highlights a growing paradigm shift in AI research toward mechanistic credibility. As multi-agent systems grow more complex, integrating robust evaluation layers for model calibration and claim verification (via tools like REFUTE) is becoming just as important as the training environments themselves.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the daily digest for the Stable Baselines3 (SB3) ecosystem. 

### 1. Today's Highlights
Activity over the last 24 hours was highly focused on long-term project security and evaluation methodology. A major security-enhancing Pull Request by a core maintainer received an update, signaling progress toward safer model deployment. Meanwhile, the community proposed integrating a new scientific evaluation benchmark (REFUTE) into the documentation.

### 2. Releases
**No new releases** were published in the last 24 hours. The project remains on its latest stable version.

### 3. Important Issues
- **#2273 [OPEN] Add REFUTE scientific critique + calibration benchmark**
  - **Author:** connerlambden
  - **Summary:** A proposal to add **REFUTE**—a scientific critique and calibration benchmark tool—to SB3's evaluation and scientific AI tooling documentation. REFUTE operates by mapping paper-grounded claims to predictions, using judge scores to calculate Brier scores and Expected Calibration Error (ECE). 
  - **Link:** [DLR-RM/stable-baselines3#2273](https://github.com/DLR-RM/stable-baselines3/issues/2273)

### 4. Key PR Progress
- **#2264 [OPEN] Secure deserialization (`.load()`) by default**
  - **Author:** araffin (Core Maintainer)
  - **Summary:** This is a critical security update that modifies the default behavior of the model loading function (`.load()`) to prevent arbitrary code execution vulnerabilities (often associated with Python's `pickle`). By shifting to secure deserialization defaults, this PR fundamentally changes how SB3 models are shared and deployed. It directly addresses issues #1831 and #1852.
  - **Link:** [DLR-RM/stable-baselines3#2264](https://github.com/DLR-RM/stable-baselines3/pull/2264)

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 continues to be the bedrock of applied Reinforcement Learning, and today's updates reflect its maturation in two key areas:
1. **Supply Chain Security:** As RL models are increasingly shared across organizations and research institutions, default-secure deserialization (PR #2264) is a vital step. It protects practitioners from malicious model files, establishing SB3 as an enterprise-ready framework.
2. **Reproducibility and Evaluation:** The community's interest in tools like REFUTE (Issue #2273) highlights a broader shift in the RL landscape. Moving beyond raw mean episode rewards to evaluate models based on statistical rigor, calibration (Brier/ECE), and grounded scientific claims is essential for bridging the gap between RL research and reliable real-world deployment.

</details>