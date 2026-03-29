# RL Open Source Daily Digest 2026-03-30

> Generated: 2026-03-29 22:03 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-30 displays a distinct "two-tier" velocity. The top tier—comprising **slime**, **verl**, **Open Instruct**, and **ROLL**—is aggressively iterating on infrastructure for Large Language Model (LLM) and Vision-Language Model (VLM) alignment. These projects are tackling distributed systems challenges (weight synchronization, multi-node scaling) and adapting to rapid model releases (Qwen3.5). The second tier—**AReaL**, **ROCK**, **rl_games**, **CleanRL**, and **OpenRLHF**—is in a maintenance or strategic planning phase, focusing on internal refactoring and architectural proposals. Traditional RL libraries (Gymnasium, Stable Baselines3, Tianshou) showed minimal to no activity, reflecting a divergence where the center of gravity has shifted toward LLM-specific RL frameworks.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **slime** | High (Critical bugs, VLM focus) | High (Merged FP8, W&B) | **v0.2.4** | **High**: Released new observability tools; critical VLM bugs identified. |
| **verl** | High (Scaling bottlenecks) | High (Ascend support, Tools) | None | **High**: Rapidly expanding hardware & inference support (NPU, FP8, Tool calling). |
| **Open Instruct** | Low | Medium (VLM & PPO WIP) | None | **Medium**: Actively integrating Qwen3.5 VLM and hybrid PPO/GRPO logic. |
| **ROLL** | Medium (Agentic formulation) | Medium (CoreX hardware) | None | **Medium**: Advancing "Agentic" workflows and non-NVIDIA hardware support. |
| **AReaL** | Medium (Roadmap & Arch) | None | None | **Planning**: Strategic discussions on elastic weight updates; no code merged. |
| **Tianshou** | Low (Bug confirmations) | Low (Legacy cleanup) | None | **Low**: Maintenance mode; closing legacy PRs. |
| **ROCK** | Low (Timeout configs) | Medium (TypeScript SDK) | None | **Medium**: Infrastructure hardening and SDK expansion. |
| **rl_games** | None | Low (UV migration) | None | **Low**: Internal tooling migration (Poetry -> UV). |
| **CleanRL** | None | Low (Minor refactors) | None | **Low**: Administrative updates only. |
| **OpenRLHF** | None | Low (Eval fixes) | None | **Low**: Minor pipeline improvements. |
| **Others** | None | None | None | **Dormant**: No activity for Gymnasium, PettingZoo, SB3, torchtune, TRL. |

## Shared Research & Engineering Directions

### Research Directions
*   **Hybridization of PPO and GRPO:** Projects like **Open Instruct** are blurring the lines between GRPO (Group Relative Policy Optimization) and PPO by adding value model support to GRPO trainers. This indicates a search for a "best-of-both-worlds" algorithm that balances GRPO's memory efficiency with PPO's stability.
*   **Agentic Credit Assignment:** **ROLL** is actively debating "Trajectory-level formulation," highlighting a research shift from single-turn prompts to managing long-horizon, multi-turn agent interactions where credit assignment is complex.

### Engineering & Infrastructure Directions
*   **Observability & Debugging:** **slime** (v0.2.4) released a rollout trace timeline viewer, and **verl** added numeric reward logging. This signals a maturity transition: the problem is no longer just "making it train" but "debugging why it failed" in complex, distributed rollout loops.
*   **Hardware Fragmentation:** There is a concerted push away from CUDA-monopoly. **verl** is integrating Ascend (NPU) support, and **ROLL** is adding CoreX BI-V150 compatibility.
*   **Weight Synchronization Bottlenecks:** Both **slime** (Issue #1673) and **AReaL** (Issue #1101) are focused on the mechanics of moving weights between distributed actors and rollout engines, identifying this as the primary throughput bottleneck in large-scale RLHF.

## Differentiation Analysis
*   **slime vs. verl (The LLM RL Leaders):** **slime** is distinguishing itself through tight integration with the *Megatron* ecosystem and advanced observability tools (timeline viewers), making it suitable for massive, complex debugging tasks. **verl** is differentiating via *vendor agnosticism* and inference optimization, supporting alternative hardware (Ascend) and tool-use sandboxes (Daytona), positioning it as a flexible production backbone.
*   **Open Instruct vs. TRL:** While TRL remained dormant, **Open Instruct** captured the niche of "frontier model alignment," rapidly patching in support for Qwen3.5 VLMs and experimental training stacks (FlashAttention 3, Liger-Kernel), serving users who need day-zero compatibility with the newest models.
*   **Agentic vs. Static RL:** **ROLL** is specifically tailoring its architecture for "Agentic" workflows (environment managers for multi-step tool use), whereas **OpenRLHF** and **Tianshou** remain focused on more static or traditional training loops.

## Community Momentum & Maturity
*   **High Momentum (The Builders):** **slime** and **verl** show the highest signal-to-noise ratio with merged features, critical bug discoveries, and version releases. They are the current centers of gravity for LLM RL.
*   **Strategic/Mature (The Planners):** **AReaL**, **ROCK**, and **OpenRLHF** show lower commit volume but high-value architectural discussions (roadmaps, elastic updates, eval correctness). This suggests a mature, production-focused phase rather than a prototyping phase.
*   **Maintenance (The Stewards):** **Tianshou**, **rl_games**, and **CleanRL** are performing necessary upkeep (closing old PRs, updating build tools). They remain reliable but are not currently driving the bleeding-edge LLM-RL narrative.

## Trend Signals
*   **The Rise of FP8:** The emergence of FP8 support in **slime** (#1769) and **verl** (#4435) indicates that memory bandwidth optimization has become critical for RL fine-tuning of 30B+ parameter models.
*   **Post-Training Stability as a Feature:** The closure of GRPO+LoRA instability issues in **verl** and the focus on "best checkpoint selection" in **OpenRLHF** signal that the field is moving from "getting RL to work" to "making RL reliable and robust."
*   **The Great Convergence:** The line between RL frameworks and Inference frameworks is blurring. Projects are increasingly managing rollout engines, KV caches (**verl**), and sandboxes (**verl**), effectively becoming full-stack orchestration layers rather than just algorithm libraries.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Daily Digest for **2026-03-30**.

### 📊 ROLL Daily Digest: March 30, 2026

#### 1. Today's Highlights
Activity on the ROLL repository over the last 24 hours indicates a continued focus on **Agentic RL workflows** and **hardware adaptability**. While no new releases were cut, the community is actively discussing architectural improvements for trajectory management, and maintainers are progressing on backend compatibility for specialized inference hardware.

#### 2. Releases
*   **No new releases** recorded in the last 24 hours.

#### 3. Important Issues
*   **Feature Request: Trajectory-level formulation mode for `AgentNativeStepEnvManager`** ([#409](https://github.com/alibaba/ROLL/issues/409))
    *   **Context:** Opened by `shamanez`, this issue addresses the current limitation in the `AgentNativeStepEnvManager` (specifically within the `run_agentic_pipeline_rock_swe_qwen35_2b.sh` demo).
    *   **Technical Insight:** Currently, the manager creates **one training sample per interaction chunk** (agent turn). The author proposes a "Trajectory-level formulation mode" to handle full trajectories more effectively rather than isolated interaction steps. This is critical for advanced credit assignment in long-horizon agentic tasks.

#### 4. Key PR Progress
*   **Add CoreX BI-V150 compatibility support** ([#393](https://github.com/alibaba/ROLL/pull/393))
    *   **Status:** Open (Updated recently).
    *   **Significance:** This PR introduces compatibility for the **CoreX BI-V150** hardware. This suggests ROLL is expanding its backend support beyond standard NVIDIA CUDA architectures, likely targeting edge AI accelerators or specialized inference chips for RL deployment.

#### 5. Why This Project Matters in Today's RL Landscape
As the field shifts from static RL benchmarks to dynamic **Agentic workflows**, ROLL is positioning itself as a critical infrastructure for training large language models (LLMs) via RL.
*   **Agentic Architecture:** The discussion in Issue #409 highlights the complexity of managing state and training samples in multi-turn agent interactions (like code generation or SWE tasks), moving away from single-turn prompts to complex "trajectories."
*   **Hardware Heterogeneity:** PR #393 reflects a growing trend in 2026: the need for RL frameworks to be hardware-agnostic, supporting a diverse ecosystem of AI accelerators (like CoreX) to reduce costs and improve inference latency.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem (2026-03-30)

Here is the analysis of the ROCK (Reinforcement Learning Cloud Kit) ecosystem activity for the past 24 hours.

## 1. Today's Highlights
Activity on the ROCK repository remains focused on SDK extensibility and infrastructure robustness. The highlight of the day is a new feature request aimed at stabilizing large file transfers for Alibaba Cloud OSS, alongside continued progress on the TypeScript SDK integration.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Feature] OSS Upload/Download Timeout Configuration** ([#698](https://github.com/alibaba/ROCK/issues/698))
    *   **Category:** SDK & API
    *   **Context:** Contributor **Timandes** identified a critical bottleneck in the current `_setup_oss()` method. When handling large files or operating on slow networks, the default timeout settings of the `oss2` SDK cause transfers to fail.
    *   **Significance:** This is a key infrastructure fix for production environments. Explicitly configuring timeout parameters is essential for ensuring reliable checkpoint saving and model weight synchronization in cloud-based RL training loops.

## 4. Key PR Progress
*   **Added TypeScript SDK** ([#492](https://github.com/alibaba/ROCK/pull/492))
    *   **Status:** Open (Updated)
    *   **Author:** Timandes
    *   **Details:** This PR introduces a comprehensive TypeScript client (`rl-rock`), linking to Issue #495. It significantly broadens the ROCK ecosystem beyond Python.
    *   **Capabilities:** The SDK implements a full suite of management features, including Sandbox lifecycle control, File System operations (upload/download), and synchronous/asynchronous command execution. It supports both ESM and CommonJS builds.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from local experiments to scalable cloud production, **ROCK** serves as a critical bridge for infrastructure management. Today's updates highlight two major trends:
1.  **Polyglot RL Ecosystems:** The introduction of a TypeScript SDK reflects the growing demand to integrate RL agents (typically Python) with broader production web services and DevOps tools (Node.js/TypeScript).
2.  **Reliability at Scale:** The focus on OSS timeout configuration underscores the challenges of handling massive datasets and model checkpoints in distributed training scenarios, where network stability is as crucial as algorithm design.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-30

## 1. Today's Highlights
The **slime** framework released version **v0.2.4**, focusing on enhanced observability for large-scale training. Key updates include the introduction of a rollout trace timeline viewer and integration with Weights & Biases (W&B). The day also saw significant activity in Vision-Language Model (VLM) support, with a critical bug identified regarding non-colocated training modes and new FP8 conversion support for Qwen3.5.

## 2. Releases
*   **[v0.2.4](https://github.com/THUDM/slime/releases/tag/v0.2.4)**: This release emphasizes **profiling and observability**. It introduces a **rollout trace timeline viewer** for debugging RL trajectories and adds native reporting for **W&B**.

## 3. Important Issues
*   **[Bug] VLM Weight Corruption in Non-Colocate Mode ([#1673](https://github.com/THUDM/slime/issues/1673))**
    *   **Impact:** Critical. `UpdateWeightFromDistributed` corrupts weights during VLM training when running without `--colocate`, causing the SGLang backend to crash upon generation requests.
*   **[Question] Missing Script for Qwen3-VL-8B ([#1778](https://github.com/THUDM/slime/issues/1778))**
    *   **Impact:** Users attempting to reproduce `geo3k_vlm` benchmarks cannot find `scripts/models/qwen3-vl-8B-Instruct.sh`.
*   **[Closed] Reproduction of geo3k_vlm Results ([#1160](https://github.com/THUDM/slime/issues/1160))**
    *   **Update:** Discussion continued regarding a performance gap (0.55 vs 0.6 eval score) on `Qwen3-VL-2B-Instruct`.

## 4. Key PR Progress
*   **[Feature] FP8 Support for Qwen3.5 ([#1769](https://github.com/THUDM/slime/pull/1769))** (Merged): Enables FP8 conversion, optimizing memory usage for next-gen models.
*   **[Fix] Megatron LR Scheduler Resume ([#1775](https://github.com/THUDM/slime/pull/1775))** (Merged): Prevents duplicate fast-forwarding of the LR scheduler when optimizer states are loaded, fixing potential training stability issues.
*   **[Fix] Grad Norm Initialization ([#1762](https://github.com/THUDM/slime/pull/1762))** (Open): Addresses a bug where `grad_norm` is uninitialized when `found_inf` skip paths are triggered in Megatron.
*   **[Feat] Host Memory Metrics ([#1764](https://github.com/THUDM/slime/pull/1764))** (Open): Adds host memory tracking to the `available_memory` function to improve resource management.

## 5. Why This Project Matters in Today's RL Landscape
Slime represents the cutting edge of **post-training and RLHF (Reinforcement Learning from Human Feedback)** infrastructure for Large Language Models (LLMs) and Vision-Language Models (VLMs). By integrating tightly with **Megatron** and **SGLang**, it addresses the "systems" bottleneck in modern RL, specifically tackling distributed weight updates and memory management. The v0.2.4 focus on **observability** (trace timelines) indicates a maturing ecosystem where debugging complex multi-turn rollout trajectories is becoming a primary engineering challenge, distinct from traditional algorithmic research.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-03-30

## 1. Today's Highlights
Activity on the AReaL repository over the last 24 hours focused on strategic planning and infrastructure optimization. While no code was merged, the community engaged with the **2026 Q1 Roadmap** and discussed architectural improvements for **Elastic Weight Updates** to enhance training efficiency.

## 2. Releases
**Status:** No new releases detected in the last 24 hours.

## 3. Important Issues
*   **[Roadmap] 2026 Q1 Milestones** ([#907](https://github.com/inclusionAI/AReaL/issues/907))
    *   **Context:** This active tracker outlines enhancements through April 2026.
    *   **Update:** Received community engagement (17 total comments). This issue serves as the primary coordination point for contributors looking to align with the project's near-term goals.
*   **[Feature] Elastic Weight Update Setup and Acceleration** ([#1101](https://github.com/inclusionAI/AReaL/issues/1101))
    *   **Context:** Addresses latency in synchronizing Actor weights to the Rollout Engine during RL training.
    *   **Technical Detail:** The proposal aims to upgrade the current architecture—which relies on `disk` and standard update modes—by introducing elastic weight update mechanisms to reduce synchronization overhead and accelerate the training loop.

## 4. Key PR Progress
**Status:** No Pull Requests were created or updated in the last 24 hours. Development activity appears to be in the planning/discussion phase regarding the issues listed above.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a critical infrastructure for scalable Reinforcement Learning. The focus on **elastic weight synchronization** (Issue #1101) highlights a major bottleneck in modern Large Language Model (LLM) alignment: the communication cost between training and inference engines. By optimizing how Actor weights are pushed to Rollout Engines, AReaL addresses the "throughput vs. latency" trade-off that is essential for high-performance, distributed RLHF (Reinforcement Learning from Human Feedback) pipelines.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-03-30

### 1. Today's Highlights
Activity on 2026-03-29 was characterized by repository maintenance and the closure of legacy Pull Requests. No new code was merged, and no new releases were published. The primary focus was on resolving older contributions and confirming bug fixes in the high-level API.

### 2. Releases
*   **None:** No new stable or beta releases were recorded in the last 24 hours.

### 3. Important Issues
*   **[Bug Confirmation] `ExperimentResult.trainer_result` returning `None`:**
    Issue [#1288](https://github.com/thu-ml/tianshou/issues/1288) regarding the `Experiment.run()` API was closed. The author reported that `trainer_result` remains `None` post-training, suggesting a missing assignment in the v2.0 high-level API. This closure indicates the issue has likely been resolved or addressed in recent maintenance efforts.

### 4. Key PR Progress
*   **Optimization in High-Level Interfaces:**
    PR [#1208](https://github.com/thu-ml/tianshou/pull/1208) was closed. This PR introduced a fix to prevent the instantiation of train-test collectors when the `Experiment` is set to a non-training mode (inference only), optimizing resource usage.
*   **Legacy Clean-up:**
    Two long-standing development PRs were closed:
    *   [#779](https://github.com/thu-ml/tianshou/pull/779): Update to MuJoCo benchmark URLs and logs.
    *   [#523](https://github.com/thu-ml/tianshou/pull/523): Addition of an Atari PPO example.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou continues to be a pivotal framework for Reinforcement Learning practitioners due to its **modular design** and **high-level API abstraction** (as noted in the user feedback for Issue #1288). Unlike monolithic RL libraries, Tianshou offers fast, vectorized environment support and distinct separation between policy and trainer logic, making it a preferred choice for reproducing benchmarks (MuJoCo/Atari) and prototyping new algorithms efficiently.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-30

### 1. Today's Highlights
Activity in the OpenRLHF repository was minimal over the last 24 hours, with no new issues reported and no new releases. The primary focus was on finalizing a specific enhancement to the PPO evaluation pipeline.

### 2. Releases
*   **None** scheduled or released in the last 24 hours.

### 3. Important Issues
*   **None** updated or created in the last 24 hours.

### 4. Key PR Progress
*   **[CLOSED] feat: add best-checkpoint selection based on PPO eval metrics** ([#1206](https://github.com/OpenRLHF/OpenRLHF/pull/1206))
    *   **Author:** nathon-lee
    *   **Summary:** This PR addressed a correctness bug regarding `pass@k` aggregation logic. It also introduced an opt-in feature allowing users to automatically persist the "best" checkpoint based on specific evaluation metrics, rather than just the final training step.
    *   **Status:** Closed (Updated 2026-03-29).

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a critical infrastructure project in the Reinforcement Learning from Human Feedback (RLHF) ecosystem. As Large Language Models (LLMs) increasingly rely on RL for alignment and fine-tuning, robust evaluation pipelines are essential. The merged fix for `pass@k` aggregation and the new "best checkpoint" feature highlight the community's shift toward **rigorous correctness** and **metric-driven model selection**, moving beyond simple loss-based checkpoints to ensure higher quality model outputs.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-30

## 1. Today's Highlights
The **verl** ecosystem saw significant activity focused on **hardware compatibility** and **inference optimization**. Key developments include expanded support for NPU (Ascend) hardware and new backends for tool calling. Additionally, the community is actively debugging GRPO training stability with LoRA and addressing multi-node scaling inefficiencies.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **GRPO + LoRA Training Instability (#3159 [CLOSED]):**
    A persistent issue where Qwen2.5-3B-Instruct degenerates into outputting `"!!!!!!"` when trained with GRPO and LoRA was closed. This highlights potential fragility in adapter configurations during RL fine-tuning.
    *   **Link:** [verl-project/verl Issue #3159](https://github.com/volcengine/verl/issues/3159)

*   **Multi-Node Scaling Bottleneck (#5448 [OPEN]):**
    Users report that scaling from single-node (8x GPUs) to multi-node setups does not improve training speed for PPO/RLOO, suggesting potential communication overheads or configuration limits in the distributed rollout/Actor engine.
    *   **Link:** [verl-project/verl Issue #5448](https://github.com/volcengine/verl/issues/5448)

## 4. Key PR Progress
*   **Hardware Expansion (Ascend/NPU):**
    *   **#5795:** Introduced expandable segment support for NPU, optimizing memory handling on Ascend chips.
    *   **#5786:** Added environment configuration `moonlight_ascend.yml`, further cementing Ascend support.

*   **Model Support & Optimization:**
    *   **#5682:** Added FSDP GRPO training support for **Qwen3.5** (27B/35B), including necessary transformer adapters and monkey patches.
    *   **#4435:** Implemented KV cache FP8 support for vLLM rollouts, aiming for significant memory reduction during inference.
    *   **#5794:** Fixed rollout truncation logic to align `max_tokens` with `max_response_length` config to prevent wasted compute.

*   **Ecosystem & Tooling:**
    *   **#5796:** Integrated **Daytona** as a cloud sandbox backend for secure rollout-time tool calling.
    *   **#5520:** Proposed integration with **Atropos** RL environments, enhancing verl's GRPO pipeline with external environment hooks.
    *   **#5793:** Enhanced observability by logging numeric `reward_extra_info` in training metrics.

## 5. Why This Project Matters in Today's RL Landscape
As RL fine-tuning (specifically GRPO/PPO) becomes the standard for boosting LLM reasoning capabilities, **verl** distinguishes itself by addressing the "infrastructure gap." By simultaneously supporting cutting-edge model families (Qwen3.5), alternative hardware (Ascend/NPU), and complex inference workloads (FP8 KV Cache, Tool Calling), verl is positioning itself as a production-grade, vendor-agnostic backbone for the next generation of reasoning models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-30

## 1. Today's Highlights
Activity in the Open Instruct repository over the last 24 hours focused on expanding model compatibility and refining Reinforcement Learning algorithms. Key updates include initial support for **Qwen 3.5 Vision-Language Models (VLM)** and updates to a significant refactoring of the GRPO trainer to support **PPO with learned value models**.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
No issues were updated in the last 24 hours.

## 4. Key PR Progress

*   **[Feature] Qwen3.5 VLM Support** ([#1568](https://github.com/allenai/open-instruct/pull/1568))
    *   **Status:** Open
    *   **Summary:** Author `hamishivi` has submitted a pull request to integrate support for the Qwen 3.5 Vision-Language Model.
    *   **Technical Details:**
        *   Resolves tokenizer errors specific to Qwen 3.5 regarding mandatory user messages during SFT token masking.
        *   Addresses backend incompatibilities: FlashAttention 3 (FA3) is currently non-functional for this model; switched to SPDA.
        *   Bumped `Liger-Kernel` dependency for compatibility with newer `transformers` versions.
        *   Notes specific issues with DeepSpeed Ulysses.

*   **[Enhancement] Add PPO with Value Model Support to grpo_fast.py** ([#1462](https://github.com/allenai/open-instruct/pull/1462))
    *   **Status:** Open (WIP)
    *   **Summary:** This PR advances the `grpo_fast.py` trainer by adding PPO-style capabilities using a learned value model for Generalized Advantage Estimation (GAE), moving beyond standard group-normalized rewards (GRPO).
    *   **Technical Details:** Introduces configurations for `use_value_model`, `gamma`, `gae_lambda`, and value function clipping.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a critical infrastructure project in the AI alignment ecosystem, specifically for the **post-training** of Large Language Models (LLMs). As the field shifts in 2026 from pure Supervised Fine-Tuning (SFT) towards robust reasoning and alignment via RL, the project serves as a bridge between cutting-edge research (like GRPO/PPO variations) and production-ready implementations. By rapidly integrating support for frontier models like Qwen 3.5 VLM and refining the trade-offs between GRPO (group-relative rewards) and PPO (value-based advantages), Open Instruct enables the open-source community to replicate and improve upon "reasoning model" training recipes.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 📅 RL Daily Digest: CleanRL
**Date:** 2026-03-30

### 1. Today's Highlights
Activity in the CleanRL repository was minimal over the last 24 hours, with no new issues, releases, or active PR discussions. The sole update involves the administrative closure of a minor refactoring Pull Request.

### 2. Releases
**None.**
No new version tags or releases were published recently.

### 3. Important Issues
**None.**
Zero issues were created or updated in the last 24 hours.

### 4. Key PR Progress
*   **[#537 Simpler indexing in JAX DQN](https://github.com/vwxyzjn/cleanrl/pull/537)**
    *   **Status:** Closed
    *   **Author:** joelberkeley
    *   **Analysis:** This PR proposed readability improvements for JAX DQN indexing. While the intent aligned with the "clean" philosophy of the repo, the PR was closed without merging (likely deemed too granular or superseded by other structural changes).

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a critical infrastructure project for the Reinforcement Learning community. As RL algorithms become more complex and entangled with distributed systems (e.g., in Large Language Models), CleanRL provides a necessary "ground truth" by offering single-file, dependency-minimal implementations of standard algorithms (like DQN, PPO). It serves as the primary educational bridge for researchers moving from theory to functional JAX/PyTorch code.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-03-30

### 1. Today's Highlights
Activity in the `rl_games` repository was minimal regarding new issues and releases, but significant progress was observed in project infrastructure. The primary focus was on modernizing the build and dependency management system.

### 2. Releases
*   **None.** No new versions were tagged in the last 24 hours.

### 3. Important Issues
*   **None.** No new community concerns or bug reports were filed recently.

### 4. Key PR Progress
The repository is actively updating its toolchain to improve developer experience.

*   **[PR #343](https://github.com/Denys88/rl_games/pull/343) UV migration**
    *   **Status:** Open
    *   **Summary:** This Pull Request proposes a significant shift in dependency management by removing **Poetry** in favor of **UV**, a faster Python package installer and resolver. Additionally, the PR tidies up the codebase by updating the README and fixing training configurations that relied on obsolete `envpool` support.

### 5. Why This Project Matters in Today's RL Landscape
**rl_games** remains a critical repository for the Reinforcement Learning community, particularly for practitioners working with **Isaac Gym**, **Isaac Lab**, and other high-throughput physics simulators.

*   **Performance:** It is renowned for optimized implementations of PPO and other algorithms capable of scaling to thousands of parallel environments.
*   **Adoption:** It serves as a foundational baseline for locomotion and manipulation tasks in both academic research and industrial robotics simulations.
*   **Relevance:** The current migration to **UV** (PR #343) indicates a commitment to reducing iteration latency, aligning the tooling with the rapid iteration speeds required by modern GPU-accelerated simulation workflows.

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

No activity in the last 24 hours.

</details>