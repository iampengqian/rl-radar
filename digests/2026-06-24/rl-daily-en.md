# RL Open Source Daily Digest 2026-06-24

> Generated: 2026-06-23 22:22 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem is currently bifurcated into two distinct domains: **LLM Alignment Infrastructure** (verl, TRL, AReaL, OpenRLHF, Open Instruct, ROLL, slime) and **Traditional Core RL** (PettingZoo, CleanRL, Gymnasium, Stable Baselines3). 

Today’s activity is entirely dominated by LLM post-training frameworks. The industry's focus has decisively shifted from theoretical algorithmic exploration to solving massive distributed systems bottlenecks. Key themes include extreme hardware optimization (FP8, alternative NPUs), taming memory bottlenecks for massive MoE models, and building resilient infrastructure for agentic RL workflows (tool-use, coding agents, and multimodal environments). Meanwhile, traditional RL environments and single-file implementations are in a maintenance phase, focusing strictly on developer experience (DX) and CI modernization.

## Activity Comparison
Activity is heavily concentrated in the LLM post-training layer. Projects like verl, slime, and TRL are seeing massive PR throughput focused on distributed systems and algorithmic scaling, while traditional RL libraries are quiet.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 3 | 4+ | 0 | Scaling architecture (V1 PPO default) and hardware agility (Ascend NPU). |
| **slime** | 1 | 8 | 0 | Agent RL rollouts (SWE tools) and massive memory/context optimizations. |
| **TRL** | 4 | 8+ | 0 | AsyncGRPO distributed systems scaling and VLM/multimodal maturation. |
| **Open Instruct** | 0 | 7 | 0 | Agentic RL infrastructure stability and memory-efficient GRPO (tiled loss). |
| **AReaL** | 3 | 6 | 0 | Advanced loss functions (CISPO) and FP8/host memory optimizations. |
| **ROCK** | 4 | 6 | 0 | Sandbox resilience, resource quotas, and SDK parity for RL environments. |
| **PettingZoo** | 0 | 2 | 0 | CI modernization; leveraging AI for boilerplate refactoring. |
| **OpenRLHF** | 0 | 2 | 0 | Multimodal testing and modular constraint-based reward utilities. |
| **ROLL** | 0 | 1 | 0 | Hardware diversification; aligning FSDP2 with vLLM for Ascend NPUs. |
| **CleanRL** | 0 | 1 | 0 | DX improvements; integrating fast CI linters (`ruff`). |
| **Gymnasium, SB3, Tianshou, etc.**| 0 | 0 | 0 | *No activity.* Stable/maintenance phase. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Beyond Standard PPO/GRPO:** Frameworks are rapidly integrating state-of-the-art policy optimizations to address gradient loss on clipped tokens and trust-region collapse. AReaL added the **CISPO** loss surrogate, Open Instruct implemented **DPPO**, and verl introduced **SDPO** (Self-Distillation Policy Optimization).
*   **Agentic & Tool-Using RL:** A massive pivot toward training models that interact with external environments. Slime and Open Instruct are building robust harnesses for Software Engineering (SWE) coding agents, while OpenRLHF and TRL are refining tokenization and reward paths for multi-turn tool usage and Vision-Language Models (VLMs).
*   **Knowledge Distillation (KD):** Compressing massive teacher models into efficient student models is a top priority. TRL is advancing X-Token cross-tokenizer KD and Multi-Teacher routing, while verl and slime are pushing Online Policy Distillation (OPD).

**Engineering & Infrastructure Signals**
*   **Hardware Diversification & Memory Efficiency:** Escaping NVIDIA walled gardens is a shared goal. Verl and ROLL aggressively pushed Ascend NPU CI/CD and Docker support. Concurrently, frameworks are adopting FP8 weight transfers (AReaL) and tiled GRPO lm-head losses (Open Instruct) to fit massive MoE models on constrained VRAM.
*   **Asynchronous & Colocated Backends:** Decoupling generation (vLLM/SGLang) from training (FSDP/Megatron) via colocated weights is standardizing. TRL and AReaL both submitted PRs for sparse delta weight broadcasting and CUDA IPC to eliminate network bottlenecks during gradient syncing.
*   **Sandbox Resilience & Resource Quotas:** As RL rollouts spin up thousands of ephemeral containers, disk exhaustion and daemon timeouts are crashing clusters. ROCK and Open Instruct heavily focused on XFS disk quotas, Docker concurrency limits, and extended sandbox timeouts.

## Differentiation Analysis
*   **The Distributed Heavyweights (verl, TRL, AReaL):** These projects are competing directly to be the foundational infrastructure for enterprise-scale RLHF. **verl** differentiates via its aggressive multi-hardware support (Ascend) and Megatron backend scaling. **TRL** leans on its native HF ecosystem integration, dominating the open-source community mind-share for AsyncGRPO and PEFT integrations. **AReaL** isolates itself by targeting extreme raw systems performance (AWEX FP8, CUDA IPC).
*   **The Agent & Sandbox Engineers (slime, Open Instruct, ROCK):** While the heavyweights focus on parameter scaling, these projects are solving the interaction layer. **slime** is explicitly optimizing memory for long-context aborted rollouts (SWE agents). **Open Instruct** is hardening the Docker backend to prevent daemon exhaustion during concurrent code execution. **ROCK** acts purely as the orchestration layer, ensuring the physical storage and container networking don't collapse under the weight of agent telemetry logs.
*   **The Modular Facilitators (OpenRLHF, ROLL):** These frameworks are maintaining highly flexible, low-opinionated baselines. **OpenRLHF** actively avoids invasive core trainer changes, opting instead for modular, opt-in reward utilities. **ROLL** is differentiating purely through its fast adoption of the FSDP2 + vLLM stack tailored for alternative hardware.

## Community Momentum & Maturity
*   **LLM RL is in the "Trough of Systems Engineering":** The frantic algorithmic experimentation of 2023-2024 has matured. The open-source community now realizes that scaling RL is purely a systems problem. Issue trackers across TRL and verl are dominated by OOM errors, Megatron offloading bugs, and async vs. sync convergence discrepancies, rather than theoretical RL math.
*   **Agentic Execution Driving Tight Contributor Loops:** Projects like Open Instruct and slime show high PR throughput with virtually zero open issues. This indicates tight, highly active core contributor teams rapidly merging infrastructure fixes required to keep up with agentic workflows.
*   **Traditional RL is "Solved" Infrastructure:** PettingZoo and CleanRL are leveraging AI assistants (Claude Code) and Rust-based linters (`ruff`) to clear technical debt. Their maturity allows researchers to treat them purely as reliable, stable dependencies rather than active areas of development.

## Trend Signals
*   **The Rise of Tier-2 Hardware in AI Training:** The simultaneous push for Huawei Ascend NPU support (verl, ROLL) alongside native FP8 implementations indicates the open-source community is actively preparing for a post-NVIDIA-dominated compute supply chain.
*   **Convergence on LLM Inference Engines:** vLLM is solidifying its position as the default generation engine for RL loops. Frameworks are no longer building custom inference loops; they are tightly coupling PyTorch FSDP/FSDP2 directly to vLLM and SGLang via colocated memory architectures.
*   **Agentic RL is the New Chatbot:** The rapid engineering effort directed at SWE coding agents, tool-use tokenization, and sandbox resource quotas signals that the industry's next frontier is training autonomous, long-horizon agents rather than static conversational models.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Open-Source Ecosystem Daily Digest for June 24, 2026.

### 1. Today's Highlights
*   **Quiet on Issues, Active on Hardware:** The ROLL repository saw zero new issues or releases in the last 24 hours, but submitted a crucial infrastructure Pull Request focused on expanding Ascend NPU hardware support.
*   **FSDP2 & vLLM Integration:** The project continues to aggressively align its backend with modern optimization frameworks, specifically coupling PyTorch FSDP2 with vLLM for accelerated RLHF training.

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **None.** There were 0 issues updated, created, or closed within the last 24 hours, indicating stable current usage or a lull in community bug reporting.

### 4. Key PR Progress
*   **[OPEN] [PR #466: docs: update Ascend NPU documentation](https://github.com/alibaba/ROLL/pull/466)** by `UsernameFull`
    *   **Summary:** This PR comprehensively overhauls the Ascend NPU Docker environments, CI pipelines, and documentation. 
    *   **Technical Updates:** Upgrades core dependencies to align with the current `FSDP2 + vLLM-Ascend` architecture. Key version bumps include:
        *   **CANN:** 9.0.0
        *   **PyTorch:** 2.9.0
        *   **vLLM / vLLM-Ascend:** 0.18.0
        *   **triton-ascend:** 3.2.1
    *   Adds new configurations for the Atlas A5 hardware series.

### 5. Why This Project Matters in Today's RL Landscape
In today's RLHF/RLAIF landscape, compute bottleneck management is the primary obstacle to scaling LLM training. ROLL (RL Open-source) remains highly relevant by directly addressing the infrastructural pain points of modern Large Language Model alignment. 

PR #466 highlights a critical industry trend: **Hardware Diversification**. By optimizing for Huawei Ascend NPUs (Atlas A5) and integrating the highly efficient `vLLM + FSDP2` stack, ROLL is ensuring that the open-source community is not locked into NVIDIA-only ecosystems. This allows developers running RL loops to leverage alternative AI accelerators with native, containerized support, ultimately driving down the cost of iterative policy gradient updates and PPO training at scale.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK (alibaba/ROCK) project.

# 📊 RL Open-Source Ecosystem Daily Digest: 2026-06-24

## 1. Today's Highlights
Today's development on ROCK was heavily focused on **infrastructure resilience, storage security, and SDK reliability**. The team successfully merged critical fixes for XFS disk quotas and unified Object Storage Service (OSS) configurations across both Python and TypeScript SDKs. Additionally, several new proposals aim to make sandbox deployments more configurable and observable for RL workloads.

**Activity Snapshot:** 6 Issues updated, 11 PRs updated, 0 New Releases.

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **Sandbox Disk Quota Enforcement ([#1145](https://github.com/alibaba/ROCK/issues/1145))**: Opened by `zhangjaycee`. Currently, XFS project quotas only restrict the overlay2 rootfs. This issue proposes enforcing disk quotas on anonymous local volumes and cleaning them up upon container removal, preventing runaway storage consumption from RL data logging.
*   **Configurable Runtime Environments ([#1148](https://github.com/alibaba/ROCK/issues/1148))**: Opened by `zhangjaycee`. Proposes allowing per-image runtime environment profiles rather than relying solely on the global `ROCK_WORKER_ENV_TYPE`. This is crucial for running diverse RL environments (e.g., different dependency bases) on the same cluster.
*   **Configurable Startup Timeout ([#1155](https://github.com/alibaba/ROCK/issues/1155))**: Opened by `zhangjaycee`. Requests making `startup_timeout` (covering `docker pull` + container initialization) configurable via SDK, YAML, or Nacos to accommodate larger RL environment images.
*   **XFS Quota Fallback for containerd ([#1123](https://github.com/alibaba/ROCK/issues/1123))**: *Closed*. Resolved the issue where Docker's containerd image store ignored `--storage-opt size=`, bypassing `disk_limit_rootfs` limits. 

## 4. Key PR Progress
*   **[Merged] Python & TypeScript SDK Server-First OSS Migration ([#1151](https://github.com/alibaba/ROCK/pull/1151), [#1153](https://github.com/alibaba/ROCK/pull/1153))**: Closed by `jinbai340997`. Drops legacy environment-variable fallbacks (`ROCK_OSS_BUCKET_*`) in favor of server-pushed configurations. This fixes `403 AccessDenied` errors and ensures objects land in the correct lifecycle-managed prefixes. 
*   **[Merged] Anonymous Volume Disk Quota & Cleanup ([#1154](https://github.com/alibaba/ROCK/pull/1154))**: Closed by `zhangjaycee`. Implements the quota enforcement requested in Issue #1145.
*   **[Merged] XFS Project Quota Fallback ([#1124](https://github.com/alibaba/ROCK/pull/1124))**: Closed by `jake11-oho`. Implements the fallback mechanism to apply `xfs_quota` project limits directly to the container's overlay `UpperDir` when using containerd image stores.
*   **[Open] TS & Python SDK Feature Parity ([#1137](https://github.com/alibaba/ROCK/pull/1137))**: Opened by `xdlkc`. A massive PR (50+ files, 400+ tests) aligning the TypeScript SDK with the Python SDK, introducing benchmark configurations (Harbor) and robust Job/Trial execution systems.
*   **[Open] K8s Image Auth Transport ([#1130](https://github.com/alibaba/ROCK/pull/1130))**: Opened by `Generalwin`. Implements the secure transport of custom image registry authentication to the Kubernetes orchestration layer via encrypted annotations.
*   **[Open] Job SDK Observability ([#1146](https://github.com/alibaba/ROCK/pull/1146))**: Opened by `FangwenDave`. Adds necessary telemetry and observability hooks into the RL Job execution SDK.

## 5. Why This Project Matters in Today's RL Landscape
Reinforcement learning workflows are fundamentally bottlenecked by infrastructure reliability—specifically how efficiently a system can spin up, securely manage, and tear down thousands of ephemeral, compute-heavy sandboxes. 

Today's updates to ROCK highlight exactly why it is critical to the modern RL stack:
1.  **Resource Control & Multi-tenancy:** RL environments (especially those generating visual data or detailed telemetry logs) can easily exhaust node disk space. By enforcing strict XFS quotas on both rootfs and anonymous local volumes ([#1145](https://github.com/alibaba/ROCK/issues/1145), [#1123](https://github.com/alibaba/ROCK/issues/1123)), ROCK prevents "noisy neighbor" problems and node crashes in shared compute clusters.
2.  **Data Pipeline Integrity:** RL relies on millions of discrete artifact transfers (model weights, replay buffers, logs). Standardizing OSS storage configurations via a server-first approach ([#1151](https://github.com/alibaba/ROCK/pull/1151)) eliminates silent data drops and authentication drift, ensuring reproducible RL training runs.
3.  **Polyglot Flexibility:** Achieving true parity between Python and TypeScript SDKs ([#1137](https://github.com/alibaba/ROCK/pull/1137)) allows research teams (typically Python-native) and platform/web-engineering teams (typically TS-native) to interact with the exact same execution backend seamlessly.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the structured daily digest for the `slime` ecosystem based on the provided GitHub data. 

***

# 📊 RL Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-06-24  
**Focus:** Agent RL stability, memory optimization, and multimodal data handling.

### 1. Today's Highlights
* **Agent RL & SWE Stability Surge:** Significant progress in making Software Engineering (SWE) agent rollouts robust. Multiple PRs were merged/closed to fix abort handling, memory management, and agent harness selection.
* **Memory & Compute Optimizations:** Active fixes to reduce memory bloat during generation and logging, specifically targeting partial rollouts and entropy computation. 
* **Multimodal & Tooling Fixes:** Critical bug fixes for Visual Language Models (VLMs) and tool-using RL (ReTool) when `apply_chat_template` is enabled.

### 2. Releases
* **No new releases** in the last 24 hours. Development remains focused on incremental bug fixing and CI improvements.

### 3. Important Issues
* **[Issue #1829](https://github.com/THUDM/slime/issues/1829) [bug] [Bug] solution_str = sample.prompt + sample.response**
  * **Author:** yangninghua
  * **Status:** Remains OPEN (Updated Jun 23).
  * **Summary:** Users running the `examples/retool/retool_qwen3_4b_rl.sh` script encountered a `TypeError` when concatenating the prompt and response. This occurs because `sample.prompt` becomes a `list[dict]` when `--apply-chat-template` is utilized. 
  * *Note: This is directly addressed by [PR #2120](https://github.com/THUDM/slime/pull/2120) submitted today.*

### 4. Key PR Progress
**Agentic RL & Rollout Stability**
* **[PR #2124](https://github.com/THUDM/slime/pull/2124) [CLOSED]** Fixed SWE coding-agent RL stability bugs. Aborted samples are now correctly excluded from the GRPO/GSPO group baseline, and proper session cleanup (`drop_session`) is enforced.
* **[PR #2125](https://github.com/THUDM/slime/pull/2125) [CLOSED]** Made SWE rollouts agent-agnostic. The `(harness, adapter)` pair can now be dynamically selected via the `SWE_AGENT` env var instead of hardcoding Claude Code/Anthropic.
* **[PR #2128](https://github.com/THUDM/slime/pull/2128) [OPEN]** Added partial rollout resume for Search-R1 examples, preserving partial responses, loss masks, and log probs to prevent wasted compute on aborted rollouts.
* **[PR #2117](https://github.com/THUDM/slime/pull/2117) [CLOSED]** Patched cleanup paths in agent generate loops to require `base_sample`, preventing silent trajectory failures.

**Memory & Token Optimization**
* **[PR #2122](https://github.com/THUDM/slime/pull/2122) [OPEN]** Fixed a partial rollout issue where aborted samples could generate up to 2x the `rollout_max_response_len` by failing to cap `max_new_tokens` based on prior generated tokens.
* **[PR #2127](https://github.com/THUDM/slime/pull/2127) [OPEN]** Major memory optimization: wraps entropy computation in `torch.no_grad()` when `entropy_coef == 0`, preventing the retention of unnecessary autograd graphs during logging.

**Data & Reward Pipeline Fixes**
* **[PR #2126](https://github.com/THUDM/slime/pull/2126) [OPEN]** Fixed a crash in prompt-length filtering for VLM datasets (e.g., geo3k) when using `--apply-chat-template`.
* **[PR #2120](https://github.com/THUDM/slime/pull/2120) [OPEN]** Resolves [Issue #1829] by coercing list-based chat templates to strings before string concatenation in ReTool reward functions.
* **[PR #2121](https://github.com/THUDM/slime/pull/2121) [CLOSED]** Fixed a bug related to non-float reward handling.
* **[PR #1903](https://github.com/THUDM/slime/pull/1903) [OPEN]** Fixed a Megatron-based OPD (Online Policy Distillation) bug where loading a teacher checkpoint without `--offload-train` failed to restore the original actor weights.

### 5. Why This Project Matters in Today's RL Landscape
The recent traction in `slime` highlights a broader shift in the Reinforcement Learning ecosystem: **the bottleneck has moved from standard PPO/GRPO math benchmarks to complex, tool-using, and multimodal Agentic RL.** 

Today's PRs show that training LLMs to use tools (like Claude Code, Codex, or Search APIs) requires entirely new rollout engineering. Handling aborted sessions, preserving partial context windows, and cleanly dropping temporary environments are now critical infrastructure requirements. Furthermore, optimizations like capping `max_new_tokens` dynamically and dropping autograd graphs for logging reflect the intense memory and compute pressure of long-context agentic rollouts. `slime` is actively providing the open-source community with the robust infrastructure needed to train next-generation coding and multimodal agents.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning ecosystem digest for AReaL.

# 🧠 AReaL RL Daily Digest — 2026-06-24

### 1. Today's Highlights
* **Algorithm Advancements:** The community successfully merged initial support for the **CISPO loss surrogate** (MiniMax-M1 / ScaleRL), solving the zero-gradient problem on clipped PPO/GRPO tokens.
* **Infrastructure & Memory:** Significant progress in memory optimization and FP8 weight transfer, including critical fixes for CI OOM bugs on A100-40G runners and host memory savings during Megatron offloading.
* **New Architectures:** Qwen3.6 MoE RL training is now fully supported by making the Multi-Token-Prediction (MTP) head opt-in, defaulting off for RL workloads.

### 2. Releases
* **No new releases** cut in the last 24 hours. The project continues active trunk-based development towards their H2 milestones.

### 3. Important Issues
* **Roadmap Tracking ([#1381](https://github.com/areal-project/AReaL/issues/1381)):** The *[call-for-contribution]* 2026 H2 Milestones tracker was active, serving as the central hub for ongoing feature developments and contributor guidance.
* **Technical Debt Cleanup ([#1397](https://github.com/areal-project/AReaL/issues/1397)):** An open issue to remove `megatron_bridge_patches.py` once the upstream `megatron-bridge` ships PR #3143. This highlights AReaL's commitment to maintaining a clean upstream dependency graph.
* **AWEX FP8 Transfer ([#1359](https://github.com/areal-project/AReaL/issues/1359)):** Ongoing discussion on supporting FP8 weight transfers in the colocated CUDA-IPC path to prevent implicit BF16 dequantization.

### 4. Key PR Progress
* **Advanced RL Algorithms:**
  * [PR #1412](https://github.com/areal-project/AReaL/pull/1412) (Closed/Merged): Added the **CISPO loss surrogate** for MiniMax-M1, maintaining gradients on clipped tokens. *(Closes Issue #1421)*
  * [PR #1413](https://github.com/areal-project/AReaL/pull/1413): Refactored PPO group-norm to automatically derive `group_size` from `gconfig.n_samples`, reducing configuration boilerplate.
* **Backend & Architecture Support:**
  * [PR #1403](https://github.com/areal-project/AReaL/pull/1403) (Closed/Merged): Enabled **Qwen3.6 MoE** RL training on the Megatron backend by dropping the MTP head by default. *(Closes Issue #1398)*
  * [PR #1361](https://github.com/areal-project/AReaL/pull/1361): Added FSDP colocate weight updates via CUDA IPC for SGLang.
  * [PR #1406](https://github.com/areal-project/AReaL/pull/1406): Enabled FP8 direct transfer in AWEX colocate mode.
* **Memory & Scaling Optimizations:**
  * [PR #1393](https://github.com/areal-project/AReaL/pull/1393) (Closed/Merged): Disabled Megatron grad buffers CPU backup, saving ~4x host memory during offloading.
  * [PR #1438](https://github.com/areal-project/AReaL/pull/1438): Pinned `vlm_grpo` CI tests to `adam_bf16` to prevent OOM errors on A100-40G instances.
* **Tooling & DX (Developer Experience):**
  * [PR #1434](https://github.com/areal-project/AReaL/pull/1434): Introduced `areal inf`, an experimental CLI for managing local inference gateway/router stacks.
  * [PR #1383](https://github.com/areal-project/AReaL/pull/1383): Integrated **OpenClaw** as an `agent_service` runtime, spawning per-session agent gateways.

### 5. Why This Project Matters in Today's RL Landscape
As RL scales from benchmark environments to training trillion-parameter LLMs and Mixture-of-Experts (MoE) models, the system bottleneck shifts from algorithmic design to **distributed systems engineering**. 

Today's AReaL digest perfectly illustrates the cutting-edge challenges of modern LLM alignment:
1. **Hardware Utilization:** The push towards FP8 weight transfers via CUDA IPC ([PR #1406](https://github.com/areal-project/AReaL/pull/1406)) and aggressive host memory reduction ([PR #1393](https://github.com/areal-project/AReaL/pull/1393)) reflects the intense compute pressure of RLHF/GRPO. AReaL is actively building the infrastructure to train larger models on fixed GPU clusters.
2. **Algorithmic Fidelity:** Implementing advanced loss surrogates like CISPO ([PR #1412](https://github.com/areal-project/AReaL/pull/1412)) shows that AReaL is tracking state-of-the-art research (e.g., MiniMax-M1), ensuring that infrastructure improvements translate directly to better model stability and convergence. 
3. **Ecosystem Agility:** Rapidly supporting new architectures like Qwen3.6 MoE ([PR #1403](https://github.com/areal-project/AReaL/pull/1403)) is critical. Frameworks that require weeks of patching to support new model architectures stall RL pipelines; AReaL is building modular bridges (Megatron/FSDP) to isolate these complexities.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for TRL.

# 🥅 RL Daily Digest: Hugging Face TRL 
**Date:** 2026-06-24

## 1. Today's Highlights
* **Massive KTO Alignment:** A focused initiative by `@albertvillanova` to refactor and align `KTOTrainer` with `DPOTrainer` dominated today's PRs, introducing reference model syncing and standardized metrics computation.
* **VLM & Multimodal RL Maturation:** Significant progress in extending RL capabilities to Vision-Language Models, with new PRs supporting LFM2-VL in GRPO/RLOO and general VLM support in GOLDTrainer.
* **AsyncGRPO Performance Push:** Continued optimization of experimental asynchronous GRPO, introducing packing-aware dynamic batching and sparse delta weight synchronization over HF Bucket to reduce overhead. 

## 2. Releases
* **No new releases** in the last 24 hours. The repository currently shows 0 new tags or version bumps. 

## 3. Important Issues
* **Accelerate & GRPO OOM Crashes ([#3842](https://github.com/huggingface/trl/issues/3842)):** A long-standing bug where `accelerate`'s `find_executable_batch_size` OOM recovery dynamically reduces batch size, breaking GRPO's strict `num_generations` constraint.
* **GSPO Loss Miscalculation ([#3823](https://github.com/huggingface/trl/issues/3823)):** Closed today. Addressed the silent length-weighting error when combining sequence-level importance sampling with token-summed loss types.
* **PPO Reward Implementation Queries ([#3750](https://github.com/huggingface/trl/issues/3750)):** An open, highly technical discussion regarding reward assignment to PAD tokens vs. EOS tokens, and missing EOS penalties in `PPOTrainer`.
* **Multi-Teacher Distillation Request ([#6151](https://github.com/huggingface/trl/issues/6151)):** Feature request to add router-based multi-teacher (MOPD) distillation, routing examples to specific domain/task expert models.

## 4. Key PR Progress
**Knowledge Distillation & Alignment (KTO/DPO/GOLD)**
* **[OPEN] [Align KTO with DPO](https://github.com/huggingface/trl/pull/6152):** A 5-part PR series (#[6148](https://github.com/huggingface/trl/pull/6148), #[6149](https://github.com/huggingface/trl/pull/6149), #[6150](https://github.com/huggingface/trl/pull/6150)) standardizing KTO by adding `sync_ref_model`, an `evaluate()` override, and shifting reward margin tracking into `_compute_loss`.
* **[OPEN] [VLM support for GOLDTrainer](https://github.com/huggingface/trl/pull/5969):** Extends `GOLDTrainer` for same-family VLM distillation using JSD loss.
* **[OPEN] [X-Token cross-tokenizer KD](https://github.com/huggingface/trl/pull/6126):** Implements Projection KL and Cross-Attention KL for cross-tokenizer knowledge distillation in the GOLD trainer.

**Core RL Training & Inference Scaling**
* **[OPEN] [Delta weight sync for AsyncGRPO](https://github.com/huggingface/trl/pull/5937):** Replaces full policy broadcasts to vLLM with sparse bf16 safetensors patches, drastically cutting weight sync latency.
* **[OPEN] [Packing-aware dynamic batching for AsyncGRPO](https://github.com/huggingface/trl/pull/6092):** Introduces packing-aware, token-bounded micro-batching that seamlessly integrates with HF Trainer's gradient accumulation.
* **[CLOSED] [Drop vLLM 0.13 / Add vLLM 0.23.0](https://github.com/huggingface/trl/pull/6153):** Shifts the baseline inference engine support forward 6 months with zero breaking changes found in TRL's surface area.
* **[OPEN] [Fix GRPO + vLLM colocate + PEFT hang](https://github.com/huggingface/trl/pull/6139):** Resolves a deadlock issue on non-NVLink hardware when combining PEFT with tensor parallelism by adding a process group barrier before generation.

**SFT & Base Trainer Improvements**
* **[OPEN] [SFT Truncation Refactor](https://github.com/huggingface/trl/pull/6155):** Moves sequence truncation from the data collator to cached dataset preparation for cleaner, faster execution.
* **[OPEN] [Drop zero-token examples](https://github.com/huggingface/trl/pull/6025):** Fixes a silent training failure where `assistant_only_loss=True` combined with truncation resulted in all-zero masks.

## 5. Why This Project Matters in Today's RL Landscape
TRL remains the bedrock of the open-source RLHF/DPO ecosystem. Today's commit activity perfectly reflects the bleeding-edge needs of the AI community: **distributed scaling** and **multimodal adaptability**. 

While DeepSeek's GRPO/GSPO algorithmic variants continue to dominate applied RL, the actual bottleneck has shifted to systems engineering—specifically, keeping vLLM generation clusters in lockstep with optimizing training nodes across massive FSDP/DeepSpeed clusters. TRL's aggressive push into `AsyncGRPO` (via sparse weight syncing and dynamic batching) and PEFT+vLLM stability fixes proves that open-source RL is currently tackling distributed system bottlenecks rather than purely algorithmic ones. Furthermore, the rapid addition of VLM support and advanced Knowledge Distillation (X-Token, multi-teacher) across trainers shows TRL bridging the gap between text-only preference alignment and complex, multimodal reasoning.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL ecosystem daily digest for OpenRLHF.

### 1. Today’s Highlights
Activity in the OpenRLHF repository over the last 24 hours has been entirely focused on code contributions, with two new Pull Requests opened on 2026-06-23. The ecosystem is actively expanding its testing infrastructure for multimodal RLHF and introducing flexible, opt-in utilities for constrained reward modeling. No new issues or releases were reported.

### 2. Releases
No new releases were published in the last 24 hours. 

### 3. Important Issues
There have been no new issues or bug reports in the last 24 hours, indicating a period of development stability.

### 4. Key PR Progress
*   **[PR #1257](https://github.com/OpenRLHF/OpenRLHF/pull/1257) Add CGPO-style constrained reward utilities**
    *   **Author:** githubshaurya
    *   **Focus:** RL Safety / Reward Engineering
    *   **Details:** Introduces an opt-in utility layer for calibrated, constrained rewards (inspired by CGPO). Importantly, this is a non-invasive addition; it does not alter core PPO/GRPO trainer internals. Instead, it provides utilities designed to be executed inside custom Python reward functions via `--reward.remote_url`.
*   **[PR #1256](https://github.com/OpenRLHF/OpenRLHF/pull/1256) Add tests for VLM utility functions**
    *   **Author:** githubshaurya
    *   **Focus:** Multimodal RLHF / Testing
    *   **Details:** Adds targeted regression tests for core multimodal utility functions (`dedup_media_tokens` and `accumulate_mm_inputs`). As OpenRLHF expands its support for Vision-Language Models (VLMs) and multi-turn multimodal agent rollouts, ensuring accurate token and tensor alignment is critical.

### 5. Why This Project Matters in Today’s RL Landscape
OpenRLHF continues to be a critical barometer for trends in the applied Reinforcement Learning from Human Feedback (RLHF) ecosystem. Today's PRs highlight two major industry trajectories:
1.  **The Rise of Multimodal RL:** By reinforcing the testing of media token alignment for VLMs, OpenRLHF is solidifying the infrastructure needed to reliably train complex, multi-turn vision-language agents.
2.  **Constraint-Based Alignment:** The introduction of CGPO-style constrained rewards points to a broader industry shift away from monolithic reward models toward nuanced, multi-objective reward calibration (e.g., balancing helpfulness with strict safety/integrity constraints). By keeping these utilities modular and external to the core PPO/GRPO trainers, OpenRLHF maintains its position as a highly flexible, production-ready framework for complex alignment pipelines.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Daily Digest: verl 
**Date:** 2026-06-24

## 1. Today's Highlights
- **V1 Trainer Becomes Default:** A new breaking PR ([#6823](https://github.com/volcengine/verl/pull/6823)) proposes enabling the V1 PPO trainer by default, signaling a major architectural shift for the framework.
- **Algorithm Expansions:** Introduction of Self-Distillation Policy Optimization (SDPO) ([#5499](https://github.com/volcengine/verl/pull/5499)) and enhanced Colocated Reward Models ([#6818](https://github.com/volcengine/verl/pull/6818)).
- **Hardware & Precision Push:** Major strides in Ascend NPU CI/CD and Docker support, alongside crucial fixes for memory efficiency in Megatron backend (FP16/BF16 optimizer states).

## 2. Releases
- **No new releases** in the last 24 hours. The ecosystem appears to be stabilizing following the recent v0.8.0 release, with a heavy focus on refining CI, docs, and hardware compatibility.

## 3. Important Issues
- **Multi-Modal & Large Model OOMs:** Users are reporting persistent OOM and training crashes when scaling up OPD (Online Policy Distillation) on Ascend 910b3 hardware ([#6792](https://github.com/volcengine/verl/issues/6792)) and running distillation on massive models like Qwen3-235B ([#6811](https://github.com/volcengine/verl/issues/6811)). 
- **Export Bugs:** Missing parameters identified in exported weights following GRPO training on Qwen3.5-35B-A3B (MoE) ([#6821](https://github.com/volcengine/verl/issues/6821)).
- **Async vs. Sync Discrepancies:** Developers noted that the fully async policy in on-policy mode converges much faster than the standard `main_ppo` trainer, warranting further investigation into potential implementation leaks ([#6780](https://github.com/volcengine/verl/issues/6780)).

## 4. Key PR Progress
- **[Trainer]** [PR #6823](https://github.com/volcengine/verl/pull/6823): Implements the V1 PPO trainer (`verl/trainer/ppo/v1`) as the default execution path.
- **[Algo/Reward]** [PR #6818](https://github.com/volcengine/verl/pull/6818) (Merged) & [PR #5499](https://github.com/volcengine/verl/pull/5499): Adds colocated reward model scoring for V1 sync/colocate_async modes, and introduces SDPO as a new policy loss mode.
- **[Megatron]** [PR #6526](https://github.com/volcengine/verl/pull/6526) (Merged): Refactors optimizer states and DDP grad buckets to align with model precision, reducing memory overhead by 3x for Adam moments in BF16 training.
- **[Hardware/Ascend]** A massive batch of Ascend-related PRs were processed, including fault isolation for NPU patches ([#6777](https://github.com/volcengine/verl/pull/6777)) and establishing the 0.8.0 Docker image for Ascend ([#6820](https://github.com/volcengine/verl/pull/6820)).

## 5. Why This Project Matters in Today's RL Landscape
As the RLHF/RLAIF landscape matures in 2026, **verl** has solidified its position as a critical infrastructure layer for post-training large language models. Today's digest highlights exactly why: 
1. **Advanced Distillation:** The integration of OPD (Online Policy Distillation) and SDPO shows verl is moving beyond standard PPO, addressing the industry's need to compress massive teacher models (e.g., Qwen3-235B) into efficient student models.
2. **Multi-Hardware Agility:** While NVIDIA dominates GPU compute, verl's aggressive iteration on Ascend NPU compatibility (fixing bugs, refactoring docs, and deploying CI workflows) proves it is one of the few frameworks truly ready for a globally diversified hardware supply chain.
3. **Resource Optimization:** By enabling colocated reward models and aligning Megatron precision states, verl is actively solving the exact GPU/OOM bottlenecks that currently plague enterprise-scale multi-node reinforcement learning.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL Open-Source Ecosystem Daily Digest: 2026-06-24**
**Project Focus:** Open Instruct (allenai/open-instruct)

---

### 1. Today's Highlights
The OpenAI Open Instruct repository saw a highly active day focused on expanding algorithmic capabilities and hardening RL infrastructure. Developer `hamishivi` merged or updated 7 pull requests targeting memory efficiency, agent-environment interactions, and advanced RL loss functions. Notable updates include the integration of DPPO and tiled GRPO loss mechanisms, alongside robust tooling for LLM agents.

### 2. Releases
*   **None.** No new versioned releases were published in the last 24 hours. Development remains focused on merging feature branches into the main branch.

### 3. Important Issues
*   **None.** There are currently 0 open or recently updated issues. The maintainers and community interactions appear to be heavily streamlined through direct PR contributions.

### 4. Key PR Progress
All following PRs were updated on 2026-06-23/24, driven primarily by contributor `hamishivi`:

*   **[OPEN] #1735: Add tiled GRPO lm-head loss**
    Introduces a memory-efficient GRPO loss path (`--use_liger_grpo_loss`). By adopting DeepSpeed's `TiledFusedLogitsLoss` pattern, the lm-head projection and scalar loss are recomputed tile-by-tile, drastically reducing VRAM footprint for large-vocabulary models. ([PR #1735](https://github.com/allenai/open-instruct/pull/1735))
*   **[OPEN] #1733: Add DPPO loss function**
    Implements the DPPO policy-loss function (`--loss_fn dppo`) based on recent literature. It enforces a trust region using a per-token Bernoulli divergence, actively preventing updates that push the trainer policy too far from the rollout policy. ([PR #1733](https://github.com/allenai/open-instruct/pull/1733))
*   **[OPEN] #1732: Harden DockerBackend with retries, OOM detection, and concurrency limits**
    A critical infrastructure update for agentic RL (cited as `SWERL`). Adds concurrency semaphores to prevent daemon exhaustion and retry logic for transient Docker `APIError`s during massive concurrent code rollouts. ([PR #1732](https://github.com/allenai/open-instruct/pull/1732))
*   **[OPEN] #1734: Add tool-schema support to SFT tokenization**
    Passes a dataset's `tools` column directly to `apply_chat_template`. This ensures tool schemas are correctly rendered in the prompt, vital for training function-calling RL agents. ([PR #1734](https://github.com/allenai/open-instruct/pull/1734))
*   **[CLOSED] #1730: Guard process_tool_tokens against None tool outputs**
    Fixes a serialization edge case where `None`/non-string tool outputs from Ray could crash the tokenization pipeline, coercing them cleanly to strings. ([PR #1730](https://github.com/allenai/open-instruct/pull/1730))
*   **[OPEN] #1729: Increase default environment pool acquire timeout**
    Bumps the actor acquisition timeout from 600s to 7200s. This is a practical fix for long-running sandbox rollouts (e.g., multi-step coding tasks) that previously triggered spurious timeouts. ([PR #1729](https://github.com/allenai/open-instruct/pull/1729))
*   **[OPEN] #1731: Make ModelDims.from_hf_config robust to explicit head_dim**
    Improves HF config parsing to honor explicit `head_dim` values instead of strict derivation formulas. Essential for training non-standard architectures, such as Vision-Language Models (VLMs). ([PR #1731](https://github.com/allenai/open-instruct/pull/1731))

### 5. Why This Project Matters in Today's RL Landscape
As the AI community shifts heavily toward Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) for reasoning and agentic tasks, Open Instruct serves as a critical, production-grade testbed. 

Today's updates perfectly illustrate the current bottlenecks in RL training: **memory constraints and environment stability**. The introduction of memory-efficient (tiled) GRPO loss and trust-region-enforced DPPO shows a push toward training larger models on standard hardware. Meanwhile, the Docker backend hardening and timeout adjustments reveal the engineering realities of deploying agentic RL (like tool-use and software engineering RL) where models must interact with long-running sandbox environments. Open Instruct continues to bridge the gap between theoretical RL papers and deployable, robust training infrastructure.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

**RL Open-Source Ecosystem Daily Digest: CleanRL**
**Date:** 2026-06-24

### 1. Today's Highlights
Activity in the CleanRL repository over the past 24 hours has been minimal, characterized by a quiet issue tracker and a single ongoing focus on developer experience (DX) and code quality infrastructure. No new releases or bug reports were logged.

### 2. Releases
*   **None.** There have been no new version tags or releases in the last 24 hours.

### 3. Important Issues
*   **None.** The issue tracker saw zero updates yesterday, indicating a period of stability for current users or a lull in new bug reporting.

### 4. Key PR Progress
*   **[OPEN] PR #558: ci: add dedicated ruff lint workflow** by `dashitongzhi` ([Link](https://github.com/vwxyzjn/cleanrl/pull/558))
    *   **Progress:** Updated yesterday (2026-06-23) after being initially opened on June 14.
    *   **Summary:** This PR introduces a dedicated GitHub Actions workflow (`.github/workflows/lint.yml`) utilizing `ruff`. It executes `ruff check` and `ruff format --check` on pushes to `master`, pull requests, and manual dispatches. 
    *   **Analyst Takeaway:** While CleanRL already utilizes `pre-commit` and general `tests` workflows, this PR aims to implement a "fail-fast" linting signal. Shifting to a dedicated `ruff` workflow reflects a modern Python best practice, ensuring formatting and linting checks are isolated, highly visible, and execute rapidly in the CI pipeline before heavier unit tests run.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL occupies a critical niche in the reinforcement learning ecosystem by providing high-quality, single-file implementations of popular RL algorithms. In an era where many RL libraries (like RLlib or Stable-Baselines3) rely on deeply abstracted, complex class hierarchies that obfuscate the underlying math, CleanRL prioritizes readability and educational value. 

However, because RL research code is notoriously difficult to maintain and scale, robust Continuous Integration (CI) is vital. PRs like #558 demonstrate the project's ongoing commitment to code quality and maintainability. By adopting next-generation tooling like `ruff`, CleanRL ensures its implementation references remain reliable, easily auditable, and standardized for both researchers and practitioners navigating the fast-paced RL landscape.

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

# 📊 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-06-24
**Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. Today's Highlights
PettingZoo is undergoing a significant developer tooling and CI modernization. In the last 24 hours, contributor `mfornet` opened two structural PRs focused on code quality assurance. Both pull requests highlight an increasing trend in the open-source ecosystem: leveraging LLMs (specifically Claude Code) to automate boilerplate refactoring while maintaining human-in-the-loop review for non-invasive, incremental integrations.

### 2. Releases
**None.** 
No new stable or nightly releases were published in the last 24 hours. The project's latest public release remains unchanged.

### 3. Important Issues
**None.** 
There were 0 issues created or updated in the last 24 hours. *Note: The new PRs directly address modernization discussions stemming from [Issue #1318](https://github.com/Farama-Foundation/PettingZoo/issues/1318).*

### 4. Key PR Progress
Activity today was strictly focused on repository maintenance and tooling integration:

*   **[PR #1345](https://github.com/Farama-Foundation/PettingZoo/pull/1345) [OPEN]: Add ruff linter (forgiving mode) and fix all findings**
    *   **Author:** `mfornet`
    *   **Summary:** Introduces the highly efficient `ruff` linter to the codebase in a "forgiving mode" to avoid overwhelming reviewers. This establishes a baseline CI check without immediately enforcing all strict rules. Code refactoring was AI-generated via Claude Code but fully audited by the author.
*   **[PR #1344](https://github.com/Farama-Foundation/PettingZoo/pull/1344) [OPEN]: Migrate type checking from pyright to ty**
    *   **Author:** `mfornet`
    *   **Summary:** Shifts the project's static type checking infrastructure to `ty`. The migration is intentionally non-invasive to keep the review footprint small, paving the way for a smooth transition once `ty` and `ruff` are established in the CI pipeline.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the de facto standard API for Multi-Agent Reinforcement Learning (MARL) within the Farama Foundation ecosystem. Just as Gymnasium standardizes single-agent environments, PettingZoo provides crucial interoperability for researchers developing algorithms where multiple agents interact within shared environments. 

By migrating its CI pipeline to next-generation, Rust-based developer tools like `ruff` and `ty`—and utilizing AI coding assistants to reduce manual refactoring overhead—the maintainers are minimizing technical debt. This ensures that PettingZoo remains highly maintainable, performant, and stable, allowing researchers to focus purely on MARL algorithmic advancements rather than infrastructure friction.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>