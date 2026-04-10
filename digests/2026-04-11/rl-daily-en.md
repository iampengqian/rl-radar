# RL Open Source Daily Digest 2026-04-11

> Generated: 2026-04-10 22:07 UTC | Projects covered: 15

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
The April 11, 2026 daily digest reveals a rapidly maturing RL open-source ecosystem heavily dominated by the infrastructure demands of post-training large language models (LLMs) and vision-language models (VLMs). Active development is concentrated in a handful of highly active frameworks—led by TRL, verl, and AReaL—which are racing to support next-generation Mixture-of-Experts (MoE) architectures, agentic workflows, and distributed scaling on heterogeneous hardware (NPUs and GPUs). Meanwhile, traditional, single-file, and classic Deep RL libraries (CleanRL, Stable Baselines3, Gymnasium) experienced zero to minimal activity, highlighting a stark divide in the open-source community between industrial LLM alignment infrastructure and foundational algorithmic research.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 24 | 29 | 0 | Rapid expansion into Diffusion RL, multimodal rollouts, and advanced distributed backends (Megatron-FSDP). |
| **TRL** | 11 | 30 | 0 | Heavy focus on agentic tool-calling expansion and bleeding-edge alignment algorithms (SSD, TPO). |
| **AReaL** | 4 | 5+ | 0 | Scaling massive MoEs via parameter offloading and laying pipes for Multi-Agent RL (MARL). |
| **ROCK** | 4 | 8 | 0* | Post-v1.5.0 stabilization; prioritizing K8s orchestration, CI/CD hardening, and metric memory leaks. |
| **Open Instruct** | 0 | 9 | 0 | Deep infrastructure hardening: native vLLM weight sync and agentic Docker sandboxes. |
| **slime** | 4+ | 3 | 0 | Next-gen MoE support (GLM-5, Gemma-3) and resolving massive-scale distributed NaN losses. |
| **OpenRLHF** | 0 | 2 | 0 | Upcoming native VLM RLHF support and crucial math fixes for distributed loss aggregation. |
| **ROLL** | 0 | 1 | 0 | Resolving low-level NPU networking bottlenecks for colocated RL training. |
| **rl_games** | 0 | 1 | 0 | Modernizing tooling (UV migration) and restoring `envpool` for robotics simulators. |
| **CleanRL** | 2 (Legacy) | 0 | 0 | Conceptual discussions on adding Double DQN and rigorous unit testing. |
| **Others*** | 0 | 0 | 0 | N/A (Dormant for the day) |

*\*ROCK is staging v1.5.1. \*\*Others include Gymnasium, PettingZoo, Stable Baselines3, Tianshou, and torchtune (zero activity).*

## Shared Research & Engineering Directions

**Research Signals**
*   **Expansion to Multimodality & Diffusion:** RL is moving beyond text. `verl` is actively integrating Diffusion RL (FlowGRPO) and multimodal thinkers (BAGEL), while `OpenRLHF` and `TRL` are forging robust pipelines for Vision-Language Model (VLM) alignment.
*   **Agentic Workflows & Tool Calling:** Training models to use tools is a top priority. `TRL` aggressively rolled out tool-calling support for Llama 3.x, GLM, and Qwen, while `Open Instruct` introduced isolated Docker sandbox environments (`SWERLSandboxEnv`) to safely train and evaluate autonomous coding agents.
*   **Novel Alignment Algorithms:** The ecosystem is formalizing new post-training paradigms beyond standard PPO. `TRL` added experimental trainers for SSD (Summarization from System Details), TPO (Training via Preference Optimization), and distillation, while `AReaL` initiated Phase 1 merging for Multi-Agent RL (MARL) data pipelines.

**Engineering & Infrastructure Signals**
*   **Massive MoE Stability:** Handling enormous Mixture-of-Experts architectures (e.g., Qwen3.5, GLM-5) is a universal engineering challenge. Projects like `slime`, `AReaL`, and `verl` are battling dimension mismatches, entropy collapse, and NaN losses when scaling up to 64x H100 clusters.
*   **Heterogeneous Hardware (Ascend NPUs):** Escaping NVIDIA's GPU monopoly is a shared infrastructure goal. `verl`, `TRL`, `AReaL`, and `ROLL` all dedicated engineering effort today to fixing distributed training hangs, vLLM weight bucketing errors, and HCCL port conflicts specifically for Huawei Ascend NPUs.
*   **Inference-Training Colocation & Weight Syncing:** To prevent GPU starvation, frameworks are tightly coupling inference and training loops. `Open Instruct` and `verl` are adopting native vLLM weight transfer APIs and speculative decoding (EAGLE), while `AReaL` and `ROLL` are optimizing parameter offloading to maximize memory efficiency during colocated execution.

## Differentiation Analysis
*   **verl & OpenRLHF:** Positioning themselves as the heavy-duty, third-generation distributed engines. They differentiate by integrating high-performance computing (HPC) paradigms like Megatron-FSDP, Sequence Parallelism, and correcting complex distributed math (e.g., global mean loss calculations).
*   **TRL:** Serves as the applied, bleeding-edge hub for the Hugging Face community. Its differentiation lies in rapid-fire support for frontier model architectures, chat template refinements (`assistant_only_loss`), and rapid prototyping of experimental post-training algorithms.
*   **ROCK & ROLL (Alibaba):** These frameworks act as the orchestration and DevOps layers. They are differentiated by their enterprise focus on Kubernetes scaling, distributed sandbox lifecycle management, and maximizing node utilization via colocated training.
*   **CleanRL & rl_games:** Standing apart from the LLM-RLHF frenzy, these libraries maintain their focus on traditional Deep RL and robotics, prioritizing dependency-light, high-throughput reference implementations.

## Community Momentum & Maturity
Momentum in the RL ecosystem is entirely asymmetrical, polarized toward LLM infrastructure. Projects like `verl` (53 interactions) and `TRL` (41 interactions) have massive, highly active contributor bases pushing daily commits. Conversely, projects like `Gymnasium`, `Stable Baselines3`, and `torchtune` act as stable, finished utilities requiring no daily maintenance, while `CleanRL` maintains a slower, deliberate pace focused on educational integrity. Maturity is highly evident in frameworks like `ROCK` and `Open Instruct`, where the community is spending less time proposing new algorithms and more time eliminating technical debt (upgrading CI pipelines, fixing memory leaks, and deleting hundreds of lines of legacy code).

## Trend Signals
1.  **The Ascend NPU Ecosystem is Reaching Critical Mass:** Across at least four major RL frameworks, resolving NPU-specific bugs was a primary engineering focus today, signaling a viable, maturing alternative hardware ecosystem for post-training.
2.  **The Shift from RLHF to "Agentic RL":** The infrastructure is moving from static preference optimization to dynamic environments. The introduction of tool-calling loss masking, multi-agent pipelines, and isolated execution sandboxes indicates that training autonomous agents is the next major compute sink.
3.  **Mixture-of-Experts (MoE) Require Specialized RL Infra:** Standard distributed RL is breaking on MoEs. The frequency of bugs related to entropy collapse, sequence parallelism mismatches, and dict-based attention masks indicates that seamlessly training sparse MoE models is the current frontier for RL systems engineers.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROLL 
**Date:** 2026-04-11 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

## 1. Today's Highlights
Activity on the ROLL repository over the past 24 hours was highly focused on system stability and hardware compatibility. The team is actively addressing networking and resource allocation bottlenecks for Ascend NPUs in multi-process, colocated training environments.

## 2. Releases
* **No new releases** were published today.

## 3. Important Issues
* **0 issues updated.** There are no new bug reports or feature requests from the community in the last 24 hours, allowing the core team to focus on existing system-level pull requests.

## 4. Key PR Progress
* **[#421 [OPEN] fix: resolve HCCL port conflict in colocate mode for NPU](https://github.com/alibaba/ROLL/pull/421)** (Author: Ginray)
  * **The Problem:** In single-NPU multi-process scenarios (specifically when `actor_train`, `actor_infer`, and `reference` clusters share the same GPUs in colocate mode), static port assignments cause `Bind_Failed` errors due to port collisions.
  * **The Fix:** The PR modifies the network configuration to set `HCCL_HOST_SOCKET_PORT_RANGE` and `HCCL_NPU_SOCKET_PORT_RANGE` to `'auto'`. This delegates port allocation to the operating system, dynamically preventing conflicts. 
  * **Significance:** A critical patch for users running large-scale RL training workloads on Huawei Ascend NPU clusters, ensuring reliable distributed execution.

## 5. Why This Project Matters in Today's RL Landscape
As post-training and Reinforcement Learning from Human Feedback (RLHF) become the dominant compute sinks for frontier AI models (e.g., reasoning models like OpenAI o1 or DeepSeek-R1), efficient cluster resource utilization is paramount. 

Projects like ROLL enable large-scale distributed RL, but the growing global demand for compute is pushing training workloads beyond Nvidia GPUs onto diverse accelerators like Ascend NPUs. PRs like **#421** demonstrate ROLL's commitment to the high-level system orchestration required for *colocated training*—running multiple distinct RL phases (inference, training, reference) on shared hardware to maximize resource utilization. Solving low-level distributed networking bugs (like HCCL port binding) is exactly the kind of invisible, foundational engineering required to scale complex reasoning models globally across heterogeneous hardware.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for April 11, 2026, focusing on Alibaba's ROCK framework.

### 1. Today's Highlights
Activity on the ROCK framework saw a noticeable uptick over the last 24 hours, with 8 pull requests updated and 4 issues processed. The core development team is currently focused on post-v1.5.0 release maintenance, addressing critical Kubernetes deployment bugs, and fortifying the codebase with dedicated CI pipelines. Memory management for high-cardinality RL metrics also saw a long-awaited update. 

### 2. Releases
*   **No New Releases:** While no new versions were published today, activity suggests a patch is imminent. PR [#762 (Bump version to 1.5.1)](https://github.com/alibaba/ROCK/pull/762) was closed today, indicating that version 1.5.1 is currently being staged or has just been tagged.

### 3. Important Issues
Bug fixes and DevOps enhancements dominate today's issue tracker:
*   **K8s Provider Bug:** Issue [#764](https://github.com/alibaba/ROCK/issues/764) reports a missing Redis provider during Kubernetes deployments due to inconsistent code modifications, directly impacting distributed RL environment synchronization.
*   **Async Runtime Error:** Issue [#767](https://github.com/alibaba/ROCK/issues/767) highlights an exception raised during `arun` normal mode if the session is not explicitly pointed, affecting standard asynchronous RL training loops.
*   **New CI Pipeline Proposal:** Issue [#761](https://github.com/alibaba/ROCK/issues/761) proposes a new GitHub Actions workflow (`test-ci.yml`) designed to split testing into distinct unit and integration jobs using a dual-dimension directory/marker strategy.

### 4. Key PR Progress
Developers actively merged fixes and reviewed infrastructure PRs:
*   **Infrastructure Updates:** The release notes for v1.5.0 were merged via [PR #760](https://github.com/alibaba/ROCK/pull/760) (closing Issue #758).
*   **Bug Fixes Submitted:** [PR #768](https://github.com/alibaba/ROCK/pull/768) addresses the `arun` async bug, while [PR #765](https://github.com/alibaba/ROCK/pull/765) and [PR #766](https://github.com/alibaba/ROCK/pull/766) both tackle the missing K8s Redis provider.
*   **CI Pipeline Implementation:** [PR #763](https://github.com/alibaba/ROCK/pull/763) was opened to implement the new dual-phase CI testing framework proposed in Issue #761.
*   **Long-Term stale PRs Revived:** [PR #599](https://github.com/alibaba/ROCK/pull/599) (adding `auto_delete_seconds` to SandboxConfig) and [PR #129](https://github.com/alibaba/ROCK/pull/129) (adding garbage collection for idle OpenTelemetry metric series) were both updated/closed today. PR #129 is particularly notable as it prevents memory leaks during high-cardinality metric tracking—a common pain point in large-scale distributed RL. 

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning ecosystem, the bottleneck has shifted from algorithmic computation to infrastructure orchestration—specifically, managing sandbox environments, distributed evaluations, and compute clusters efficiently. ROCK (RL Orchestration and Computation Kernel) serves as a critical bridge for scaling RL workloads. 

Today's updates highlight ROCK's maturation as an enterprise-grade tool. The focus on Kubernetes providers (Redis) ensures reliable distributed communication for multi-node RL training. Furthermore, the implementation of strict CI workflows and the patching of OpenTelemetry memory leaks (PR #129) demonstrate a commitment to long-term stability. For RL engineers, automated sandbox lifecycle management (`auto_delete_seconds`) and robust K8s integrations mean less time spent on DevOps and more time iterating on agent policies.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: THUDM/slime
**Date:** 2026-04-11

## 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours highlights active development toward supporting next-generation Mixture-of-Experts (MoE) and base models (GLM-5, Gemma-3) for Reinforcement Learning (RL) and SFT workloads. The community continues to push for better infrastructure flexibility, including non-Docker installations and LoRA adaptations for GRPO. 

## 2. Releases
* **No new releases** detected in the last 24 hours.

## 3. Important Issues
* **Hardware / Large-Scale Training Instability:** Long-standing issue [#795](https://github.com/THUDM/slime/issues/795) regarding `NaN` losses when training Qwen3 235B on 64x H100s continues to draw attention, highlighting the inherent challenges of distributed RLHF at scale.
* **Next-Gen Model Support:** Users report breaking bugs when attempting to convert the newly released GLM-5 architecture to Megatron format ([#1820](https://github.com/THUDM/slime/issues/1820)). Additionally, a configuration mismatch in parallelism sizes is causing initialization crashes for GLM4.7-30B-A3B MoE training ([#1818](https://github.com/THUDM/slime/issues/1818)).
* **Ecosystem Accessibility:** A highly requested issue ([#1793](https://github.com/THUDM/slime/issues/1793), 👍 4) was recently closed, requesting streamlined, non-Docker installation flows for environments where containerization is restricted. 
* **Feature Requests:** The community is actively requesting LoRA support specifically tailored for GRPO training ([#1202](https://github.com/THUDM/slime/issues/1202)).

## 4. Key PR Progress
* **GLM-5 SFT Loss Masking:** PR [#1824](https://github.com/THUDM/slime/pull/1824) introduces `--loss-mask-type glm5` to correctly handle multi-turn SFT, mapping specific role-token delimiters for both thinking and non-thinking modes.
* **Rollout Sampling Masks:** PR [#1795](https://github.com/THUDM/slime/pull/1795) adds sampling-mask support during the RL rollout phase, a crucial feature for preventing reward hacking and constraining action spaces in GRPO/PPO.
* **Gemma-3 Architecture Fix:** PR [#1825](https://github.com/THUDM/slime/pull/1825) corrects an upstream activation function mismatch by replacing SwiGLU with GeGLU for Gemma-3 models. 

## 5. Why This Project Matters in Today's RL Landscape
As the RL landscape shifts heavily toward complex Mixture-of-Experts (MoE) architectures (e.g., GLM-5, Qwen3) and reasoning models, infrastructure projects like `slime` serve as the critical bridge between static LLMs and dynamic, scalable RL training. Today’s digest illustrates the growing pains of this transition: managing massive distributed parallelism across hundreds of GPUs, implementing granular loss masking for "thinking" tokens, and integrating new architectures. Furthermore, the push for GRPO-specific LoRA and sampling masks emphasizes the ecosystem's demand for highly efficient, fine-grained RL fine-tuning methods.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL based on the provided data.

# AReaL RL Daily Digest — 2026-04-11

## 1. Today's Highlights
Activity in the AReaL ecosystem remains highly focused on **scalable infrastructure and next-generation model compatibility**. The community is actively extending Multi-Agent Reinforcement Learning (MARL) capabilities, optimizing distributed training via parameter offloading, and resolving critical integration hurdles for **Qwen3.5** and **Mixture-of-Experts (MoE)** architectures. Zero new releases were cut today, indicating ongoing stabilization efforts across active feature branches. 

## 2. Releases
*   **None** (0 new releases in the last 24 hours).

## 3. Important Issues
Developers are currently tackling hardware-specific edge cases and seeking guidance for emerging LLM integrations:
*   **Ascend NPU Training Hang ([#1160](https://github.com/inclusionAI/AReaL/issues/1160)):** A critical bug report highlights that vLLM generation permanently pauses after disk weight updates on Ascend NPUs. This is a key blocker for users running distributed RL on non-NVIDIA hardware.
*   **Qwen3.5 Version Compatibility ([#1155](https://github.com/inclusionAI/AReaL/issues/1155)):** Users are requesting official dependency matrices for running Qwen3.5. Conflicts between `transformers` 5.3 and `sglang` 0.5.9 are currently causing runtime errors in AReaL 1.0.2. 
*   **Decoupled Loss CLI Warning ([#1156](https://github.com/inclusionAI/AReaL/issues/1156)):** Users report a persistent warning regarding `use_decoupled_loss` arguments, suggesting a possible CLI parsing or config initialization bug.
*   **Call for Contribution: Offload Optimization ([#1158](https://github.com/inclusionAI/AReaL/issues/1158)):** Following a recently merged colocation feature, contributors are sought to reduce redundant GPU offload/onload transitions during the train/save/eval cycles. 

## 4. Key PR Progress
Infrastructure scaling and engine compatibility dominate today's pull request activity:
*   **MARL Phase 1 Merging ([#1129](https://github.com/inclusionAI/AReaL/issues/1129)):** Implements data pipelines and specialized verifiers for math reasoning tasks, laying the foundation for Multi-Agent RL workflows.
*   **Qwen3.5 MoE & FSDP Fix ([#1153](https://github.com/inclusionAI/AReaL/issues/1153)):** Resolves compute log-probability failures by correctly handling dict-based `attention_mask`s and registering Qwen3.5 MoE variants in FSDP.
*   **Cross-Node LoRA for MoE ([#1159](https://github.com/inclusionAI/AReaL/issues/1159)):** Introduces LoRA support for Megatron MoE models, updating distributed weight updates to allow cross-node training with Megatron + vLLM.
*   **Ray Proxy Server Support ([#1161](https://github.com/inclusionAI/AReaL/issues/1161)):** Unlocks multi-node vLLM instances via a new `RayHTTPLauncher` actor, addressing the highly requested Issue #963.
*   **Colocation with Disk Weight Updates ([#1157](https://github.com/inclusionAI/AReaL/issues/1157)) [CLOSED]:** Successfully merged infrastructure to allow colocated trainer/engine execution with GPU offloading to reduce memory pressure.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is establishing itself as a frontier RL post-training framework by solving the exact bottlenecks currently facing the AI industry: **GPU memory constraints and multi-agent orchestration**. 

By aggressively optimizing disk-based weight updates and parameter offloading (as seen in PRs #1157 and #1159), AReaL is making it economically viable to train massive MoE architectures (like Qwen3.5) without requiring exorbitant multi-node GPU clusters. Furthermore, the systematic rollout of MARL support (PR #1129) aligns with the industry's shift away from single-agent RLHF toward complex, multi-agent environments for advanced reasoning. Combined with expanding hardware support to Ascend NPUs and distributed schedulers like Ray, AReaL is positioning itself as a highly scalable, hardware-agnostic substrate for next-generation LLM alignment.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-04-11

## 1. Today's Highlights
The TRL (Transformer Reinforcement Learning) repository experienced high community and maintainer activity today, with **30 Pull Requests** and **11 Issues** updated. The focus is heavily split between expanding **tool-calling and agentic training capabilities** across major model families (Llama, GLM, Qwen) and introducing brand-new experimental trainers. Maintainers also made significant strides in fixing VLM (Vision-Language Model) edge cases and refining infrastructure for asynchronous RL workflows.

## 2. Releases
*   **No new releases** were published today.

## 3. Important Issues
*   **VLM Training CI Failures:** Issue [#5497](https://github.com/huggingface/trl/issues/5497) reports that CI is failing for `Llava` models due to parameters not being updated during DPO training. 
*   **AsyncGRPO Rollout Bug:** In [#5498](https://github.com/huggingface/trl/issues/5498), a user reported that `AsyncGRPOTrainer` ignores the provided `processing_class` when initializing `AsyncRolloutWorker`, causing unnecessary reloading from `model_name`.
*   **vLLM Server Flattening Error:** Issue [#5514](https://github.com/huggingface/trl/issues/5514) flags a double-flattening bug in `OnlineDPOTrainer._generate_vllm_server()` that corrupts `completion_ids` returned by the vLLM server.
*   **Hardware Compatibility:** Users are encountering errors running GRPO on Ascend NPUs using CANN 8.5.0 ([#5495](https://github.com/huggingface/trl/issues/5495)).
*   **Feature Request - Trainer Metadata:** Issue [#5511](https://github.com/huggingface/trl/issues/5511) proposes programmatically exposing dataset type metadata for trainers, saving downstream libraries from hardcoding trainer-specific checks.

## 4. Key PR Progress
*   **Expanding Tool Calling & Agent Training:**
    *   Added tool-calling support for **LLaMA 3.1 and 3.2** ([PR #5518](https://github.com/huggingface/trl/pull/5518)).
    *   Closed PRs for **Qwen3-VL** ([PR #5469](https://github.com/huggingface/trl/pull/5469)) and **GLM-4-MoE** ([PR #5463](https://github.com/huggingface/trl/pull/5463)) tool calling.
    *   Fixed a bug where `supports_tool_calling` falsely accepted templates that dropped assistant `tool_calls` ([PR #5517](https://github.com/huggingface/trl/pull/5517)).
*   **New Training Algorithms & Paradigms:**
    *   **SSD (Summarization from System Details):** Introduced an experimental SSD trainer ([PR #5505](https://github.com/huggingface/trl/pull/5505)).
    *   **TPO (Training via Preference Optimization):** Added an experimental TPO trainer ([PR #5506](https://github.com/huggingface/trl/pull/5506)).
    *   **Distillation:** Added documentation and improved defaults for the `DistillationTrainer` ([PR #5500](https://github.com/huggingface/trl/pull/5500)).
*   **Chat Templates & SFT Enhancements:**
    *   Added training chat templates with `&#123;&#37; generation &#37;&#125;` markers for **GLM-4-MoE** ([PR #5519](https://github.com/huggingface/trl/pull/5519)) and **Llama 3** ([PR #5493](https://github.com/huggingface/trl/pull/5493)), enabling robust `assistant_only_loss` masking.
    *   Clarified documentation for `completion_only_loss` to resolve user confusion ([PR #5494](https://github.com/huggingface/trl/pull/5494)).
*   **Bug Fixes & CI:**
    *   Fixed the `OnlineDPO` vLLM server completion handling double-flattening bug ([PR #5516](https://github.com/huggingface/trl/pull/5516)).
    *   Fixed `prepare_multimodal_messages` crashing on empty string content for VLM processors like Idefics and Llava ([PR #5496](https://github.com/huggingface/trl/pull/5496)).

## 5. Why This Project Matters in Today's RL Landscape
Today's updates in TRL highlight the library's role as the bleeding-edge hub for applied post-training. The aggressive rollout of tool-calling support for frontier models (Llama 3.x, Qwen, GLM) paired with the introduction of new algorithms (SSD, TPO, Distillation) shows that the open-source community is rapidly formalizing the infrastructure needed to train AI agents. By solving low-level distributed bottlenecks (e.g., AsyncGRPO and vLLM server handling) and perfecting granular loss masking (`assistant_only_loss`, `completion_only_loss`), TRL is actively bridging the gap between experimental reinforcement learning research and production-grade LLM alignment.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF — 2026-04-11

## 1. Today's Highlights
The OpenRLHF ecosystem is showing no activity in issues or releases today, but significant architectural strides are being made in the PR pipeline. Key focus areas include the introduction of native Vision-Language Model (VLM) support for RLHF and a critical mathematical patch to loss aggregation in distributed training.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
**No new or updated issues** were filed in the last 24 hours.

## 4. Key PR Progress
Two open Pull Requests hint at major upcoming capabilities and optimizations for version `v0.10`:

*   **[PR #1217](https://github.com/OpenRLHF/OpenRLHF/pull/1217) Native VLM RLHF Support (`v0.10`):** 
    Authored by `hijkzzz`. This PR introduces end-to-end RLHF training for Vision-Language Models, tested specifically on the `geometry3k` dataset using Qwen3.5. From an implementation standpoint, it intelligently auto-detects VLMs via `vision_config`, loads the architecture using `AutoModelForImageTextToText`, and optimizes compute by freezing the vision encoder while only training and syncing the language model weights. 
*   **[PR #1216](https://github.com/OpenRLHF/OpenRLHF/pull/1216) Fix: Loss Aggregation across DP Ranks:**
    Authored by `alek6kun`. A critical bug fix for distributed training. Previously, global loss across data parallel (DP) ranks was calculated as a "mean of means," resulting in a biased gradient estimate. This PR corrects the math by aggregating the sum of losses and token counts per rank, executing an `all-reduce`, and computing the true global mean. 

## 5. Why This Project Matters in Today's RL Landscape
OpenRLHF continues to solidify its position as an indispensable, production-grade library for aligning Large Language Models. Today's PR activity highlights two major currents in the modern RL/Post-training landscape:
1.  **The Shift to Multimodality:** As the field moves beyond text-only models, adding seamless VLM RLHF support (PR #1217) ensures that alignment techniques can be directly applied to complex multimodal tasks without clunky workarounds.
2.  **Distributed Compute Precision:** As models scale across hundreds of GPUs, exact mathematical correctness in distributed environments is non-negotiable. Fixing the "mean of means" bias in DP ranks (PR #1216) demonstrates the project's rigorous attention to the low-level performance and stability details required for enterprise-scale RLHF.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Ecosystem Daily Digest: `verl`
**Date:** 2026-04-11 | **Project:** [verl-project/verl](https://github.com/verl-project/verl) | **Activity:** 24 Issues, 29 PRs

## 1. Today's Highlights
The verl ecosystem is seeing rapid expansion into new model paradigms and hardware backends. The community is highly focused on stability for newly released Qwen3/3.5 models (especially MoEs like Qwen3.5-35B-A3B) and fixing dimension mismatches in Sequence Parallelism (Ulysses SP). There is also a notable push to migrate legacy `volcengine/verl` references to the new `verl-project` namespace. 

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **Entropy Collapse in MoE Models:** Users are reporting severe entropy collapse when training `Qwen3.5-35B-A3B` using GRPO ([#5953](https://github.com/verl-project/verl/issues/5953)).
*   **vLLM & NPU Stability:** Several critical bugs affect multimodal NPU users, including vLLM 0.13.0 breaking changes (`disable_mm_preprocessor_cache` removed, [#5959](https://github.com/verl-project/verl/issues/5959)) and weight bucket assertion errors during Qwen3-VL-8B rollouts ([#5952](https://github.com/verl-project/verl/issues/5952)).
*   **Sequence Parallelism Flaws:** Ulysses SP is causing `logits_rmpad` dimension mismatches on Ascend NPUs ([#5957](https://github.com/verl-project/verl/issues/5957)). 
*   **Feature Requests:** Community members are actively requesting GenRM (Generative Reward Models) support for the fully async pipeline ([#5949](https://github.com/verl-project/verl/issues/5949)) and an open/public Slack channel ([#5882](https://github.com/verl-project/verl/issues/5882)).

## 4. Key PR Progress
*   **Diffusion RL & Multimodal Rollouts:** 
    *   [#5951](https://github.com/verl-project/verl/pull/5951) introduces the **FlowGRPO trainer**, bringing diffusion-based RL algorithms to verl.
    *   [#5947](https://github.com/verl-project/verl/pull/5947) adds RL rollout support for **BAGEL** (thinker + DiT) image generation models.
*   **Performance & Memory Optimizations:**
    *   [#5423](https://github.com/verl-project/verl/pull/5423) & [#5854](https://github.com/verl-project/verl/pull/5854) implement **Megatron-FSDP** backend support for both RLHF and SFT, enabling ZeRO-style memory sharding.
    *   [#5925](https://github.com/verl-project/verl/pull/5925) brings **EAGLE/EAGLE3 speculative decoding** to vLLM rollouts to significantly accelerate inference.
*   **Critical Bug Fixes:**
    *   [#5963](https://github.com/verl-project/verl/pull/5963) and [#5961](https://github.com/verl-project/verl/pull/5961) resolve the aforementioned vLLM bucket size and preprocessor cache bugs.
    *   [#5895](https://github.com/verl-project/verl/pull/5895) fixes a deadlock occurring when Multi-Token Prediction (MTP) is used with Context Parallelism.
*   **Repo Maintenance:** 
    *   [#5955](https://github.com/verl-project/verl/pull/5955) resolves the "good first issue" ([#5852](https://github.com/verl-project/verl/issues/5852)) by migrating legacy `volcengine` paths to `verl-project`.

## 5. Why This Project Matters in Today's RL Landscape
As post-training becomes the defining moat for frontier AI models, the underlying RL infrastructure must support heterogeneous hardware (NPUs/GPUs), massive MoE architectures, and complex reward signals. `verl` is establishing itself as a highly adaptable, third-generation RL framework. By natively supporting advanced distributed training paradigms (Megatron-FSDP, Context Parallelism), integrating fast inference tricks (EAGLE speculative decoding), and expanding beyond LLMs into diffusion-based visual generation (FlowGRPO, BAGEL), `verl` is aggressively lowering the barrier to entry for complex RL scaling.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-04-11 | **Project:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity in the last 24 hours was exclusively focused on codebase hardening and infrastructure scalability, with 9 Pull Requests updated and 0 new issues or releases. The primary themes for the day were improving vLLM weight-sync efficiency, resolving GRPO training bottlenecks, and expanding sandbox environments for agentic RL. 

## 2. Releases
**None.** No new versions or tags were published today.

## 3. Important Issues
**None.** Zero new bugs or feature requests were raised in the past 24 hours, indicating a period of focused development and stabilization rather than feature discovery.

## 4. Key PR Progress
Several significant PRs saw updates today, highlighting active infrastructure improvements:

*   **vLLM Integration Upgrade:** [PR #1515](https://github.com/allenai/open-instruct/pull/1515) is progressing, replacing custom, manual per-parameter broadcast loops with the new native weight transfer APIs introduced in vLLM 0.16.0. This results in a net deletion of ~200 lines of code, which should significantly streamline weight syncing during RL training.
*   **GRPO Training & Eval Pipelines:** Work continues on stabilizing GRPO (Group Relative Policy Optimization). [PR #1551](https://github.com/allenai/open-instruct/pull/1551) addresses a script hang for 2-GPU Olmo-core GRPO setups. Additionally, [PR #1553](https://github.com/allenai/open-instruct/pull/1553) adds priority queuing to `grpo_fast` to prevent local evaluation prompts from starving behind training backlogs.
*   **SWE-Agent RL Environments:** [PR #1492](https://github.com/allenai/open-instruct/pull/1492) expands agentic RL capabilities by introducing `SWERLSandboxEnv`, a new Docker-based environment extending `GenericSandboxEnv` with a `submit` tool for running per-task test suites.
*   **Data Processing & Script Fixes:** 
    *   [PR #1597](https://github.com/allenai/open-instruct/pull/1597) fixes a logic bug in `PreferenceDatasetProcessor.filter` that failed to properly validate `rejected` sequence lengths against max token constraints.
    *   [PR #1598](https://github.com/allenai/open-instruct/pull/1598) applies miscellaneous fixes to DPO and GRPO training scripts, including optimizer parameter group patches.
*   **Checkpoint & Type Safety:** [PR #1588](https://github.com/allenai/open-instruct/pull/1588) (closed) fixed a directory replacement bug for `no_auto_dataset_cache` configurations. [PR #1600](https://github.com/allenai/open-instruct/pull/1600) refines default checkpoint frequencies in `mason.py`, and [PR #1599](https://github.com/allenai/open-instruct/pull/1599) adds strict type checking to the script.

## 5. Why This Project Matters in Today's RL Landscape
In the current RL for LLMs ecosystem, stability and compute efficiency are just as critical as algorithmic novelty. Today's activity in Open Instruct perfectly reflects this maturation. By natively integrating vLLM's weight transfer APIs and prioritizing eval queues (preventing GPU starvation during GRPO training), AI2 is actively solving the distributed systems bottlenecks that plague large-scale RLHF/RLAIF deployments. Furthermore, the introduction of isolated, Dockerized sandbox environments (`SWERLSandboxEnv`) positions this repo as a critical open-source testbed for training and evaluating autonomous coding agents safely.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL Daily Digest: 2026-04-11

Here is your daily brief on the CleanRL (`vwxyzjn/cleanrl`) repository ecosystem. 

## 1. Today's Highlights
Activity in the last 24 hours has been limited to slow-burning, foundational discussions. No new code was merged, and no new releases were cut. However, two long-standing issues saw renewed interaction, indicating that the community is still actively evaluating architectural improvements and code reliability. 

## 2. Releases
**None.** There have been no new releases or version tags in the past 24 hours.

## 3. Important Issues
Two legacy issues saw updates today, highlighting ongoing community interests in expanding algorithms and improving code robustness:

*   **[OPEN] Adding Double DQN (#250):** Originally opened in Aug 2022, this issue features a request by `AshwinSankar17` to implement Double DQN to mitigate overestimation bias in standard DQN. The recent update suggests renewed interest in expanding CleanRL's value-based algorithm offerings.
    *   *Link:* [vwxyzjn/cleanrl/issues/250](https://github.com/vwxyzjn/cleanrl/issues/250)
*   **[OPEN] [help wanted] Adding unit tests (#252):** Opened by maintainer `vwxyzjn`, this issue emphasizes the need to evolve the library beyond simple "black box" checks (e.g., "does the loss go down?"). It requests community contributions for unit tests to mathematically and logically verify algorithm implementations. 
    *   *Link:* [vwxyzjn/cleanrl/issues/252](https://github.com/vwxyzjn/cleanrl/issues/252)

## 4. Key PR Progress
**None.** There are 0 pull requests updated or opened in the last 24 hours. 

## 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a cornerstone of the modern Reinforcement Learning ecosystem because it provides **single-file, dependency-light implementations** of complex Deep RL algorithms. 

While industrial RL frameworks like Ray RLlib or Stable Baselines3 rely heavily on complex abstractions and class inheritance for scalable deployment, CleanRL prioritizes **readability and educational value**. The ongoing discussion in Issue #252 perfectly encapsulates the project's core philosophy: moving away from trusting black-box outputs toward rigorous, transparent validation of algorithmic logic. As the RL landscape pushes toward productionizing Large Language Model (LLM) alignment (RLHF) and advanced robotic control, high-quality, easy-to-audit reference implementations like CleanRL are critical for researchers and engineers prototyping new ideas.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-04-11
**Project:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

### 1. Today's Highlights
The past 24 hours showed quiet release and issue activity for `rl_games`, but significant background development concluded with the closing of a major infrastructure and bug-fixing Pull Request. The ecosystem is currently stable, with developers focusing on modernizing build tools and maintaining compatibility with modern Python environments (3.11-3.14).

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **None.** There were 0 issues opened, closed, or updated in the past 24 hours, indicating a stable period for user-facing bugs and feature requests.

### 4. Key PR Progress
*   **[CLOSED] UV migration** ([PR #343](https://github.com/Denys88/rl_games/pull/343))
    *   **Author:** ViktorM
    *   **Summary:** This recently closed PR represents a significant housekeeping and optimization effort. It transitions the project's package management away from Poetry in favor of **UV**. Furthermore, it resolves several critical backend bugs:
        *   Restored `envpool` integration, leveraging its new update that supports Python 3.11-3.14 and resolves previous NumPy compatibility issues.
        *   Fixed a critical SAC (Soft Actor-Critic) bug where `log_alpha` was not being properly saved and restored.
        *   Patched network builder bugs affecting normalization layers.
        *   Updated project README to reflect the new UV workflow.

### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a highly regarded, lightweight, and blazingly fast reinforcement learning library, widely utilized as a standard baseline by NVIDIA (Isaac Gym/Omniverse) and the broader robotics simulation community. Today's digest highlights why it remains relevant: active maintenance. The migration to **UV** in [PR #343](https://github.com/Denys88/rl_games/pull/343) demonstrates a commitment to modern, high-speed Python dependency resolution, while the restoration of **envpool** support ensures that researchers continue to have access to state-of-the-art, vectorized environment throughput for massive parallel training on modern Python versions.

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