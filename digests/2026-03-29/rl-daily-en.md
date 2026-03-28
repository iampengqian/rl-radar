# RL Open Source Daily Digest 2026-03-29

> Generated: 2026-03-28 22:03 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-29 shows a clear bifurcation between high-velocity "LLM Agent" frameworks and stable "Classic Deep RL" libraries. The dominant trend is the aggressive integration of new model families (specifically **Qwen3.5**) and heterogeneous hardware support (**NPUs/Ascend**), driven by the scaling requirements of post-training alignment.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (RFCs & Bugs) | High (8+) | 0 | **Leading**. Dominating agentic abstractions and NPU backend integration. |
| **ROCK** | Medium | Medium | 0 | **Scaling**. Focus on "RL as a Service" infra (Ray stability) and SDK expansion. |
| **TRL** | Low (0 new) | Medium (5) | 0 | **Maturing**. Refining GRPO for tool use; shift from bug-fixing to feature enrichment. |
| **Open Instruct** | Low | Medium | 0 | **Optimizing**. Decoupling CI and refining GRPO/DPO performance metrics. |
| **rl_games** | High (21 comments) | Low | 0 | **Investigating**. Active community debugging of SAC convergence; modernizing stack (UV). |
| **slime** | Medium | Medium | 0 | **Engineering**. Solving distributed training bottlenecks (Context Parallelism). |
| **ROLL** | Medium | Low | 0 | **Deploying**. Addressing CUDA kernel compatibility and NPU support. |
| **SB3** | Low | Low | 0 | **Updating**. Integrating `torch.compile` for PyTorch 2.0 performance. |
| **AReaL** | Low | None | 0 | **Planning**. Active roadmap discussion; no code movement. |
| **CleanRL** | Low | None | 0 | **Fixing**. Tracking breaking changes in Gymnasium/MuJoCo APIs. |
| **Others** | Minimal | Minimal | 0 | **Dormant**. (OpenRLHF, Tianshou, Gymnasium, torchtune, PettingZoo). |

## Shared Research & Engineering Directions

### Research & Algorithms
*   **GRPO Dominance:** There is a ecosystem-wide shift toward **Group Relative Policy Optimization (GRPO)** (seen in `verl`, `TRL`, `Open Instruct`) as the preferred method for LLM alignment, moving away from complex critic-based PPO implementations.
*   **Agentic RL:** Frameworks are standardizing "agent loops." `verl` introduced `AgentFramework` RFCs, `TRL` added granular tool filtering, and `ROCK` is expanding toward "HarborStyle" agents.
*   **Beyond Text:** `verl` is pushing boundaries with Diffusion Agent Loops (FlowGRPO) for image/video generation, indicating RL is rapidly expanding into multimodal foundation models.

### Engineering & Infrastructure
*   **NPU & Heterogeneous Compute:** A concerted effort to break NVIDIA's monopoly is visible. `verl` and `ROLL` both have active PRs for **Ascend NPU** and Mindspeedllm backends.
*   **Qwen3.5 Integration:** The "model of the month" is clearly Qwen3.5. `verl`, `slime`, and `OpenRLHF` are all simultaneously debugging initialization and RoPE utility issues related to this specific architecture.
*   **CI & Build Modernization:** `Open Instruct` and `rl_games` are decoupling CI from external networks and migrating to modern build tools (UV) to reduce flakiness and improve speed.

## Differentiation Analysis
*   **LLM Alignment vs. Classic RL:** The ecosystem is splitting. Libraries like **TRL**, **verl**, and **OpenRLHF** are effectively becoming "LLM Post-Training Infra," dealing with distributed inference and sequence generation. In contrast, **SB3**, **rl_games**, and **CleanRL** remain focused on "Classic RL" (control tasks, MuJoCo), where the focus is on algorithm convergence (SAC issues) and physics simulation integration (NVIDIA Warp).
*   **Abstraction Levels:**
    *   **verl** is targeting the lowest hardware abstraction layer (custom backends, KV cache quantization).
    *   **ROCK** targets the platform layer (Ray orchestration, SDKs).
    *   **CleanRL** targets the educational/single-GPU layer, prioritizing readability over scale.

## Community Momentum & Maturity
*   **High Momentum:** **verl** shows the highest velocity, acting as the bleeding edge for hardware support and architectural RFCs.
*   **Maturing Stability:** **TRL** shows signs of a maturing codebase (zero new issues, focused PRs), suggesting it is stabilizing for production use.
*   **Active Debugging:** **rl_games** is currently in a high-engagement debugging phase regarding SAC, which contrasts with the "feature-push" seen in LLM libraries.
*   **Planning Phase:** **AReaL** has paused code commits to focus on strategic roadmap planning (Q1 2026 milestones).

## Trend Signals
1.  **Hardware Fragmentation:** The deep integration of NPU support in major frameworks suggests that by Q2 2026, "NVIDIA-only" RL training stacks will be considered legacy in open-source.
2.  **Reward-Model-Free Alignment:** The prevalence of GRPO implementations signals a research consensus that value networks (critics) are too expensive/unstable for LLMs, favoring group-relative rewards.
3.  **CI as a Bottleneck:** As models grow, CI pipelines are breaking. Projects are moving to store large binaries (tokenizers) in LFS and remove network dependencies to maintain stability.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL Ecosystem (2026-03-29)

Here is the analysis of the ROLL (RL On Light-weight-architecture) repository activity for the past 24 hours.

## 1. Today's Highlights
Activity in the ROLL ecosystem remains focused on hardware extensibility and deployment stability. The past 24 hours saw continued work on **NPU (Neural Processing Unit) support** via Megatron integration and a critical bug report regarding **CUDA memory allocation compatibility** on older Linux kernels.

## 2. Releases
**Status:** No new releases detected.

## 3. Important Issues
### ⚠️ Compatibility Alert: CUDA Allocation on Older Kernels
*   **Issue:** [#408 [OPEN] `expandable_segments:True` hardcoded in CUDA platform files causes error on older kernel; PYTORCH_CUDA_ALLOC_CONF ignored`](https://github.com/alibaba/ROLL/issues/408)
*   **Context:** A user following the "Single-Node Deployment Guide" encountered a runtime crash on Linux Kernel 5.4.0 (Ubuntu).
*   **Technical Detail:** The error stems from `pidfd_getfd` system call unavailability on older kernels, potentially triggered by hardcoded `expandable_segments:True` in the CUDA platform configuration overriding user environment variables.
*   **Impact:** This may block deployment for users running ROLL on legacy infrastructure or standard LTS environments prior to 2025.

## 4. Key PR Progress
### 🔧 Feature Expansion: NPU Megatron Support
*   **Pull Request:** [#380 [OPEN] [WIP] Add npu megatron support`](https://github.com/alibaba/ROLL/pull/380)
*   **Author:** UsernameFull
*   **Update:** Active development continues (updated Mar 28).
*   **Summary:** This PR integrates `mindspeed` to introduce Megatron-style parallelism support for NPUs. It includes the addition of specific NPU example YAML configurations, signaling a move towards heterogeneous hardware support beyond standard NVIDIA GPUs.

## 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) increasingly rely on Reinforcement Learning from Human Feedback (RLHF) for alignment, the underlying infrastructure must handle massive scale and heterogeneous compute.
*   **Hardware Agnosticism:** PR #380 highlights a crucial trend in 2026: moving RL training workloads off proprietary GPU silos onto diverse NPU architectures to reduce costs and increase availability.
*   **Production Readiness:** Issue #408 underscores the friction involved in deploying cutting-edge RL systems (ROLL) on stable but older enterprise kernels, highlighting the ongoing tension between "latest features" (like advanced CUDA memory management) and "enterprise stability."

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open Source Daily Digest: ROCK
**Date:** 2026-03-29
**Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

## 1. Today's Highlights
The ROCK ecosystem saw significant activity focused on **infrastructure stability** and **SDK extensibility**. Key developments include the merging of configurable Ray temporary directories to solve disk space bottlenecks, a fix for OpenTelemetry metrics in testing environments, and the introduction of a TypeScript SDK, broadening the accessibility of the platform beyond Python.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Ray Disk Space Management (Issue [#693](https://github.com/alibaba/ROCK/issues/693)):** Addressed critical `Errno 28: No space left on device` errors by proposing configurable Ray temp directories, moving away from the limited `/tmp` default.
*   **Test Infra Telemetry Bug (Issue [#72](https://github.com/alibaba/ROCK/issues/72)):** An open bug regarding OpenTelemetry export errors during GitHub CI runs. This affects metric export stability in test environments.
*   **Feature Expansion:** Issues [#691](https://github.com/alibaba/ROCK/issues/691) and [#690](https://github.com/alibaba/ROCK/issues/690) were opened to refactor Agent jobs and support "HarborStyle" agents, indicating a push toward more complex agent orchestration.

## 4. Key PR Progress
*   **Merged - Infrastructure:**
    *   [PR #694](https://github.com/alibaba/ROCK/pull/694): Implemented `temp_dir` support in `RayConfig`, allowing Ray session data to be redirected to avoid root partition overflow.
    *   [PR #696](https://github.com/alibaba/ROCK/pull/696): Standardized the temp path to `.tmp/ray` to align with project dotfile conventions.
*   **Merged - Features:**
    *   [PR #681](https://github.com/alibaba/ROCK/pull/681): Implemented support for Agent Run capabilities.
    *   [PR #692](https://github.com/alibaba/ROCK/pull/692): Refactored constants and removed unused config fields.
*   **Open - SDKs & Bugs:**
    *   [PR #492](https://github.com/alibaba/ROCK/pull/492): Introduced a **TypeScript SDK** (`rl-rock`), enabling Node.js developers to manage sandboxes, file systems, and agents.
    *   [PR #697](https://github.com/alibaba/ROCK/pull/697): Proposed fix for the telemetry bug by switching to `InMemoryMetricReader` in test cases.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from isolated research scripts to scalable, containerized production systems, **ROCK** provides essential infrastructure for "RL as a Service." By solving low-level infrastructure issues like Ray disk management and expanding language support (TypeScript SDK), ROCK lowers the barrier to entry for deploying complex RL agents (like the newly supported HarborStyle agents). This reflects a maturing trend in the industry where RL environments must be as robust and manageable as standard microservices.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-29

## 1. Today's Highlights
Activity in the last 24 hours focused on **infrastructure robustness** and **debugging tooling**. A new visualization tool for rollout tracing was merged, and a fix was proposed for Megatron-LM learning rate scheduler resumption. The community continues to track optimization efforts for Context Parallelism (CP) in distributed training.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Performance] Context Parallelism Optimization ([#1062](https://github.com/THUDM/slime/issues/1062))**
    *   **Context:** An ongoing "good first issue" regarding the inefficiency of context parallelism (`cp=2` vs `cp=1`).
    *   **Technical Detail:** The bottleneck appears to be high communication overhead from `all gather` operations during entropy and log probability calculation. The proposed direction involves calculating local losses to minimize communication.
*   **[Bug] Qwen3.5 Model Initialization ([#1730](https://github.com/THUDM/slime/issues/1730))**
    *   **Context:** Users are reporting initialization failures with the `qwen3.5` model on the nightly-dev build.
    *   **Status:** Active debugging phase; currently 2 comments discussing the traceback in `arguments.py`.

## 4. Key PR Progress
*   **[Merged] Rollout Trace Timeline Viewer ([#1776](https://github.com/THUDM/slime/pull/1776))**
    *   Introduces a tracer and visualizer for rollout data. This is a significant UX improvement for debugging agent behavior during training.
*   **[Open] Fix Duplicate LR Scheduler Resume ([#1775](https://github.com/THUDM/slime/pull/1775))**
    *   Addresses a redundancy where the LR scheduler state was being fast-forwarded despite `load_checkpoint` already restoring it via `opt_param_scheduler.load_state_dict`. This prevents potential state corruption when optimizer states are not loaded.
*   **[Open] Hook Proposal ([#1774](https://github.com/THUDM/slime/pull/1774))**
    *   Architectural proposal to inject callbacks into the training loop, increasing extensibility for custom training logic.

## 5. Why This Project Matters in Today's RL Landscape
As RL frameworks scale to handle Large Language Models (LLMs), the complexity shifts from algorithm design to **systems engineering**. The `slime` repository is actively solving critical bottlenecks in this space:
1.  **Distributed Efficiency:** The work on Context Parallelism (Issue #1062) is essential for training on long-context windows, a key requirement for modern reasoning agents.
2.  **Observability:** The addition of a Rollout Trace Viewer (PR #1776) moves beyond scalar metrics, allowing researchers to inspect the temporal dynamics of agent decisions—a necessity for debugging complex reward models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-29

### 1. Today's Highlights
Activity on the **inclusionAI/AReaL** repository was minimal regarding code commits over the last 24 hours, with zero updated Pull Requests. However, community engagement remains focused on strategic planning. The primary spotlight is on the continued discussion surrounding the **2026 Q1 Roadmap**, indicating active maintenance and future feature planning despite the lack of new code merges today.

### 2. Releases
*   **Status:** No new releases detected in the last 24 hours.
*   **Context:** The project appears to be in a development or planning phase relative to the milestones outlined in its roadmap.

### 3. Important Issues
*   **[Roadmap] 2026 Q1 Milestones (#907)**
    *   **Status:** Open | **Tags:** `help wanted`, `call-for-contribution`, `roadmap`
    *   **Activity:** Updated as of 2026-03-28 (16 comments total).
    *   **Summary:** This issue serves as the central tracker for major enhancements planned through April 2026. It categorizes development into "On-going" features and future goals. The presence of `call-for-contribution` tags suggests the maintainers are actively soliciting external developers to assist with specific roadmap items.
    *   **Link:** [inclusionAI/AReaL Issue #907](https://github.com/inclusionAI/AReaL/issues/907)

### 4. Key PR Progress
*   **Status:** No Pull Requests were updated in the last 24 hours.
*   **Analysis:** The absence of PR updates, combined with an active Roadmap issue, suggests the project may be in a specification or architectural review phase rather than an active integration phase.

### 5. Why This Project Matters in Today's RL Landscape
AReaL (presumably **A**gents for **Rea**l-world **L**earning or similar) positions itself as a significant player in the open-source Reinforcement Learning ecosystem by focusing on scalable infrastructure. The explicit "2026 Q1 Milestones" and "Roadmap" tags indicate a long-term commitment to expanding RL capabilities, likely targeting large-scale training or environment integration. By flagging items as `call-for-contribution`, AReaL is attempting to decentralize the development burden, fostering a community-driven approach to solving complex RL engineering challenges common in modern Agent frameworks.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Transformer Reinforcement Learning)
**Date:** 2026-03-29

## 1. Today's Highlights
Activity in the TRL repository over the last 24 hours focused exclusively on Pull Requests, with **5 updates** and **zero new issues**. The development velocity indicates a maturing codebase focusing on feature enrichment and CI stability. Key areas of activity include expanding `GRPOTrainer` capabilities with advanced tool filtering and trust region methods, alongside critical CI infrastructure improvements.

## 2. Releases
**None.** No new stable or pre-release versions were published on 2026-03-29.

## 3. Important Issues
**None.** There was no activity on the issue tracker in the last 24 hours. This suggests that recent PRs are addressing existing backlogs or introducing enhancements without corresponding new user-reported bugs.

## 4. Key PR Progress
Developers pushed significant updates to the `GRPOTrainer` and maintenance workflows:

*   **Feature: Granular Tool Use in GRPO**
    *   **PR [#5398](https://github.com/huggingface/trl/pull/5398):** Introduced `tools_column_name` to `GRPOTrainer`. This enables **per-sample tool filtering**, allowing datasets to define specific subsets of the global tool pool for individual training examples. This is crucial for complex agentic workflows where tool availability must be context-dependent.
    *   **Status:** Open

*   **Algorithm: PSPO Integration**
    *   **PR [#4548](https://github.com/huggingface/trl/pull/4548):** Proposed adding **PSPO (Probability Smoothing Policy Optimisation)** as an alternative to standard ratio clipping in `GRPOTrainer`. This implements a trust-region method that smooths probabilities toward the behavior policy, potentially offering more stable updates.
    *   **Status:** Open (Updated)

*   **Maintenance: CI/CD Stability & Test Coverage**
    *   **PR [#5397](https://github.com/huggingface/trl/pull/5397):** Added `HF_TOKEN` to workflow files to resolve severe CI slowdowns caused by unauthenticated requests to the Hugging Face Hub.
    *   **PR [#5383](https://github.com/huggingface/trl/pull/5383):** Removed `xfail` markers for ZeRO 2/3 + SFT + PEFT tests following the fix in `transformers 5.1.0` (Issue #4884).
    *   **PR [#5384](https://github.com/huggingface/trl/pull/5384) [CLOSED]:** Merged/Moved logic for `disable_config=True` from `generate` to `GenerationConfig`.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to bridge the gap between Large Language Models (LLMs) and Reinforcement Learning (RL). Today's updates to `GRPOTrainer` (specifically PSPO and tool filtering) highlight the ecosystem's shift from basic RLHF (Reinforcement Learning from Human Feedback) toward **Agentic RL**. By refining how models handle external tools and stabilizing policy updates via trust regions, TRL is laying the groundwork for more reliable, tool-using AI agents capable of complex, multi-step reasoning.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-03-29
**Project:** [thu-ml/tianshou](https://github.com/thu-ml/tianshou)

### 1. Today's Highlights
Activity on the Tianshou repository was minimal over the last 24 hours, with zero new issues or releases. The sole activity involved administrative maintenance on an older Pull Request, specifically the closure of a bug fix related to network architecture.

### 2. Releases
*   **No new releases** recorded for this date.

### 3. Important Issues
*   **No active issues** were created or updated in the last 24 hours.

### 4. Key PR Progress
The repository processed one administrative update:
*   **PR [#1128](https://github.com/thu-ml/tianshou/pull/1128)** `[CLOSED]`
    *   **Topic:** High-Level API bug fix regarding Actor preprocessing network reuse in continuous action spaces and DQN network corrections.
    *   **Status:** Originally authored in April 2024, this PR was closed today. The closure suggests a clean-up of stale proposals or a resolution via alternative implementation, specifically targeting the modular reuse of preprocessing networks.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a critical framework in the Reinforcement Learning ecosystem due to its focus on **modularity** and **reproducibility**. Unlike monolithic RL libraries, Tianshou provides a "Lego-like" architecture using PyTorch, allowing researchers to decouple agents, policies, and collectors efficiently. Today's maintenance on PR #1128, while minor, highlights the project's ongoing structural discipline—specifically ensuring that network preprocessing layers are reusable and correctly implemented across both continuous and discrete (DQN) domains. This architectural hygiene is essential for modern RL research where complex observation spaces often require shared feature extractors.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# 🚀 RL Daily Digest: OpenRLHF
**Date:** 2026-03-29

Here is the daily analysis for the **OpenRLHF** repository based on the last 24 hours of activity.

## 1. Today's Highlights
Activity on the OpenRLHF repository was limited to ongoing discussion in existing threads. No new code changes, pull requests, or releases were recorded. The primary focus was on compatibility with the latest model architectures, specifically **Qwen3.5**.

## 2. Releases
*   **Status:** No new releases.
*   **Context:** The last identified version in recent logs is `v0.9.5`.

## 3. Important Issues
*   **[Issue #1194] Compatibility with Qwen3.5-4b Training**
    *   **Status:** Open
    *   **Author:** YSQ-boop
    *   **Activity:** Updated on 2026-03-28 (active discussion with 5 comments).
    *   **Summary:** Users are encountering critical runtime errors when attempting to fine-tune **Qwen3.5-4b** using `train_ppo_ray.py`. The traceback indicates a failure during the forward pass initialization.
    *   **Significance:** As Qwen models dominate the open-source LLM landscape, lack of support or unresolved bugs in Qwen3.5 training pipelines could block adoption for RLHF workflows.
    *   **Link:** [OpenRLHF/OpenRLHF Issue #1194](https://github.com/OpenRLHF/OpenRLHF/issues/1194)

## 4. Key PR Progress
*   **Status:** No activity.
*   **Summary:** Zero pull requests were created or updated in the last 24 hours.

## 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a critical infrastructure project in the Reinforcement Learning ecosystem, specifically for **Large Language Models (LLMs)**. As model architectures evolve rapidly (e.g., Qwen3.5, Llama-4), OpenRLHF serves as the bridge between static pre-training and dynamic alignment. Issues like #1194 highlight the constant challenge of maintaining compatibility with new model architectures in high-performance PPO/Ray distributed training environments.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-29

## 1. Today's Highlights
The verl ecosystem is actively expanding its hardware and model support. Key trends from the last 24 hours include:
*   **Hardware Expansion:** Significant progress on **NPU (Ascend) support**, with new patches for Mindspeedllm and ongoing bug fixes for specific models like Qwen2.5-VL.
*   **Model Support:** Accelerated development for **Qwen3.5**, with new FSDP GRPO training scripts and fixes for RoPE utilities.
*   **Architecture RFC:** A new proposal introduces **Agent Abstractions**, signaling a move toward more structured agent-based RL pipelines.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[RFC] Agent Abstractions (#5790):** A proposal to introduce `AgentFramework` and `TrajectoryGateway` to standardize agent lifecycles and reward computation, moving away from tightly coupled implementations.
*   **Qwen3.5 + Megatron Integration Issues (#5659, #5772):** Users report `IndexError` in `rope_utils` and general errors when running GRPO on Qwen3.5 2B with Megatron/vLLM, indicating growing pains with new model integration.
*   **Performance Bottleneck (#5365):** Reports of slow training speeds for `grpo + lora` on Qwen3-VL-8B.

## 4. Key PR Progress
*   **NPU & Hardware Backends:**
    *   [#5680](https://github.com/verl-project/verl/pull/5680): Adds **Mindspeedllm backend engine support** for NPU.
    *   [#5768](https://github.com/verl-project/verl/pull/5768) (Merged): Fixed bugs related to `use_remove_padding=False` for the Mindspeed backend ([Issue #5704](https://github.com/verl-project/verl/issues/5704)).
*   **Model & Algorithm Support:**
    *   [#5682](https://github.com/verl-project/verl/pull/5682): Implements **FSDP GRPO training support for Qwen3.5** (27B/35B).
    *   [#5716](https://github.com/verl-project/verl/pull/5716): Introduces **Diffusion Agent Loop** support for FlowGRPO (targeting image/video generation).
    *   [#4435](https://github.com/verl-project/verl/pull/4435): Ongoing work to support **KV Cache FP8** quantization in vLLM rollout.
*   **Infrastructure & Tooling:**
    *   [#5556](https://github.com/verl-project/verl/pull/5556) (Merged): Upgraded "skip rollout" capability to V2, supporting multi-step inference data handling.
    *   [#5769](https://github.com/verl-project/verl/pull/5769): Fixes LoRA adapter path bugs for SGLang rollouts.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves beyond text-only LLMs into multimodal and agentic workflows, **verl** is positioning itself as a critical infrastructure layer by:
1.  **Democratizing Hardware:** By robustly supporting **NPUs (Ascend)** alongside NVIDIA GPUs, verl reduces vendor lock-in and broadens access to large-scale RL training.
2.  **Enabling Complex Modalities:** The integration of **Diffusion Agent Loops** and **FlowGRPO** represents the cutting edge of using RL to fine-tune image/video generation models, not just language models.
3.  **Scalable Abstractions:** The new RFC for **Agent Abstractions** addresses the industry-wide need for standardized ways to manage trajectories and agent lifecycles in complex, multi-turn environments.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-29

### 1. Today's Highlights
Activity in the last 24 hours focused on infrastructure robustness and training efficiency. Key updates include decoupling CI from external networks and a significant refactor to auto-configure attention mechanisms for GRPO (Group Relative Policy Optimization) and DPO workflows.

### 2. Releases
*   **No new releases** detected for 2026-03-29.

### 3. Important Issues
*   **No active issues** were updated in the last 24 hours.

### 4. Key PR Progress

*   **[INFRA] CI Network Decoupling ([#1563](https://github.com/allenai/open-instruct/pull/1563)) [CLOSED]**
    *   **Focus:** Reliability & Security.
    *   **Details:** Merged changes to store Hugging Face tokenizers as binary blobs via Git LFS. This removes the requirement for external network access during CI runs, eliminating flakiness caused by network latency or external API rate limits.

*   **[FEATURE] Auto-Configuration of Flash Attention ([#1567](https://github.com/allenai/open-instruct/pull/1567)) [OPEN]**
    *   **Focus:** Usability & Optimization.
    *   **Details:** Refactors attention handling by removing manual `use_flash_attn` flags. The system now auto-detects `attn_implementation` from the model config, unifying the backend detection logic across SFT, DPO, and GRPO codepaths. Also addresses a GPU test deadlock issue with vLLM engines.

*   **[REFACOR] GRPO Metrics Alignment ([#1552](https://github.com/allenai/open-instruct/pull/1552)) [OPEN]**
    *   **Focus:** Observability.
    *   **Details:** Aims to synchronize metric reporting between the standard `grpo.py` and the optimized `grpo_fast.py`. Ensures consistent logging for critical RL signals, including policy loss, clip fraction, KL divergence (4 estimators), and entropy.

*   **[WIP] General Development ([#1555](https://github.com/allenai/open-instruct/pull/1555)) [OPEN]**
    *   **Details:** Ongoing work by `mnoukhov`; specifics pending update.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a critical barometer for the convergence of LLM fine-tuning and classical Deep RL. The specific focus on **GRPO (Group Relative Policy Optimization)** in recent PRs highlights the field's shift away from complex value networks (critics) toward simpler, reward-model-free approaches for aligning LLMs. Furthermore, the push to abstract away hardware-specific flags (PR #1567) signals a maturing ecosystem where RL libraries must seamlessly handle flash attention and vLLM integration to maintain throughput on frontier models.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 📰 RL Open-Source Daily Digest: CleanRL
**Date:** 2026-03-29

### 1. Today's Highlights
Activity in the CleanRL repository (vwxyzjn/cleanrl) was minimal over the last 24 hours, with **zero pull requests** and **no new releases**. The primary focus remains on a specific compatibility issue arising from recent updates in the Gymnasium dependency, specifically regarding MuJoCo v5 environments.

### 2. Releases
*   **None.** No new version tags or releases were published in the last 24 hours.

### 3. Important Issues
A critical compatibility issue was updated today, highlighting breaking changes in the upstream Gymnasium API.

*   **[OPEN] #545 KeyError: 'final_observation' in MuJoCo v5 environments**
    *   **Author:** thanhtnguyen10
    *   **Summary:** Users attempting to leverage MuJoCo v5 environments are encountering a `KeyError: 'final_observation'` following an update to Gymnasium v1.2.3. The issue stems from a structural change in the return value of `envs.step(actions)`, specifically modifying the `infos` dictionary structure. This represents a breaking change for existing CleanRL implementations relying on the previous Gymnasium API standard.
    *   **Link:** [vwxyzjn/cleanrl Issue #545](https://github.com/vwxyzjn/cleanrl/issues/545)

### 4. Key PR Progress
*   **None.** No pull requests were created or updated within the tracking period.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL serves as a critical infrastructure layer in the Reinforcement Learning ecosystem by providing **single-file, readable implementations** of complex algorithms. While production-grade RL libraries prioritize optimization and modularity, CleanRL prioritizes transparency, making it the go-to resource for researchers and students who need to understand the core mechanics of algorithms like PPO, DQN, and TD3 without navigating complex codebases. Issues like #545 are vital indicators of how the standardization efforts of **Gymnasium** (the maintained fork of OpenAI Gym) continue to ripple through the ecosystem, forcing even educational libraries to adapt to shifting API contracts.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-03-29

### 1. Today's Highlights
The **rl_games** repository saw significant activity regarding infrastructure and environment support. The maintainers are modernizing the tech stack with a migration to **UV** (via PR #343) while simultaneously expanding hardware acceleration capabilities through the introduction of **NVIDIA Warp** support (PR #342). Meanwhile, the community is actively debugging potential discrepancies in the Soft Actor-Critic (SAC) implementation compared to other libraries.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **[Potential Bug] SAC Algorithm Convergence (#341)**
    *   **Status:** Open
    *   **Context:** User `ASDAlexander77` reported that the SAC implementation fails to converge on a custom drone navigation task, whereas an equivalent setup in SB3 (Stable Baselines3) succeeds within 1M iterations.
    *   **Relevance:** With 21 comments generated in 3 days, this indicates a high-engagement investigation into potential algorithmic divergences or default hyperparameter sensitivities in `rl_games`' SAC implementation.
    *   **Link:** [Denys88/rl_games Issue #341](https://github.com/Denys88/rl_games/issues/341)

### 4. Key PR Progress
*   **Add NVIDIA Warp environment support (#342)**
    *   **Author:** Denys88
    *   **Details:** Introduces `WarpVecEnv` adapter for GPU-accelerated environments (`vecenv_type: WARP`), includes a `WarpCartPole` example, and fixes a specific `has_cnn` attribute bug in `SACBuilder`.
    *   **Link:** [Denys88/rl_games PR #342](https://github.com/Denys88/rl_games/pull/342)
*   **UV migration (#343)**
    *   **Author:** ViktorM
    *   **Details:** Removes Poetry in favor of UV for package management, updates the README, and fixes obsolete `envpool` training configurations.
    *   **Link:** [Denys88/rl_games PR #343](https://github.com/Denys88/rl_games/pull/343)

### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a critical high-performance library often used as a benchmark for large-scale training (e.g., Isaac Gym). Today's updates highlight two major trends in the RL ecosystem for 2026:
1.  **GPU Simulation Integration:** The addition of NVIDIA Warp support positions the library at the forefront of **GPU-accelerated vectorized environments**, reducing the simulation bottleneck.
2.  **Build System Modernization:** The shift from Poetry to UV reflects the broader Python community's move toward faster, Rust-based dependency resolvers, streamlining the developer experience for complex ML projects.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-03-29

### 1. Today's Highlights
Activity on the Gymnasium repository was minimal over the last 24 hours, with no new issues or releases. The primary event was the recent closure of a Pull Request aimed at expanding the ecosystem's third-party environment documentation.

### 2. Releases
No new releases were recorded.

### 3. Important Issues
No issues were updated or created in the last 24 hours.

### 4. Key PR Progress
*   **[CLOSED] Add external environment firecastrl (wildfire env) (#1551)**
    *   **Author:** Shreyas-bellary
    *   **Details:** This PR proposed adding **Fircastrl** to the documentation under a new "Environmental / Climate environments" category. The environment features gymnasium-compatible wildfire simulation with physics-informed spread dynamics and helicopter-based firefighting strategies.
    *   **Status:** The PR was closed on 2026-03-28.
    *   **Link:** [Farama-Foundation/Gymnasium PR #1551](https://github.com/Farama-Foundation/Gymnasium/pull/1551)

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the standard API specification for single-agent reinforcement learning. While the core library maintains stability, the ecosystem continues to grow through third-party extensions. The introduction of environments like **Fircastrl** highlights a growing trend in 2026: the application of RL to **climate and environmental simulation**, moving beyond traditional gaming benchmarks to solve complex, physics-informed real-world problems.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (2026-03-29)

## 1. Today's Highlights
Activity in the Stable Baselines3 (SB3) repository over the last 24 hours focuses on **performance optimization via `torch.compile`**. A new Pull Request has been opened to implement examples for PyTorch 2.0 compilation, directly addressing a long-standing feature request regarding Intel hardware optimizations. The repository saw 1 issue update and 1 PR update with no new releases.

## 2. Releases
*   **None:** No new version tags were published in the last 24 hours.

## 3. Important Issues
*   **[Feature Request] torch compile / integrating intel extension for pytorch** [#1564](https://github.com/DLR-RM/stable-baselines3/issues/1564)
    *   **Status:** Open
    *   **Context:** Originally created in June 2023, this issue continues to solicit community input on integrating the **Intel Extension for PyTorch (IPEX)**. The goal is to enhance computational efficiency for users running RL training on Intel architectures.
    *   **Activity:** Updated on 2026-03-28, maintaining its status as a "help wanted" and "good first issue" for contributors looking to improve training throughput.

## 4. Key PR Progress
*   **Added example for torch.compile** [#2234](https://github.com/DLR-RM/stable-baselines3/pull/2234)
    *   **Author:** sdace9719
    *   **Status:** Open
    *   **Summary:** This draft proposes the integration of `torch.compile` into SB3 workflows. The author motivates this change by citing the potential for significant speed gains in training loops, referencing Issue #1564. This represents a move towards adopting native PyTorch 2.0 compilation features rather than relying solely on hardware-specific extensions.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for **reliable, modular implementations** of classic Deep RL algorithms (PPO, SAC, TD3, DQN). While the field moves rapidly towards Large Foundation Models and offline RL, SB3 continues to serve as the critical infrastructure for:
1.  **Educational Baselines:** Providing the "stable" baseline against which new research is measured.
2.  **Applied RL:** Offering a user-friendly API for deploying RL in production environments.
3.  **Hardware Optimization:** The current activity around `torch.compile` and IPEX highlights the ecosystem's shift from optimizing *algorithms* to optimizing *inference/training throughput* on specialized hardware (CPUs/GPUs).

</details>