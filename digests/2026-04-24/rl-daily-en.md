# RL Open Source Daily Digest 2026-04-24

> Generated: 2026-04-23 22:11 UTC | Projects covered: 15

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
The RL open-source ecosystem on April 24, 2026, is defined by a stark bifurcation of effort. While classic foundational libraries (Gymnasium, PettingZoo, CleanRL, Stable Baselines3) experience low to zero activity, the application-layer ecosystem for Large Language Models (LLMs) is undergoing massive, hyper-active infrastructure overhauls. The dominant theme across all active projects (AReaL, verl, ROCK, TRL, slime, Open Instruct) is surviving the compute and memory bottlenecks of post-training massive models (specifically MoE architectures like Qwen3.5 and GLM5) and enabling heterogeneous, distributed execution at scale.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **AReaL** | 5 | 43 | 0 | Aggressive infrastructure scaling; focused on cross-engine weight syncing and distributed LoRA. |
| **verl** | 8 | 29 | 0 | Hardware-agnostic expansion (Intel, Ascend) and rollout disaggregation for massive models. |
| **TRL** | 1 | 15 | 0 | Memory optimization (chunked CE) and standardizing multimodal (VLM) data pipelines. |
| **slime** | 6 | 1 | 0 | Stabilizing large-scale MoE rollouts (160+ GPUs) and addressing VLM multi-turn blindness. |
| **ROCK** | 5 | 12 | 0 | Enterprise resilience; dynamic config reloading and proxy security for Kubernetes orchestration. |
| **Open Instruct** | 0 | 4 | 0 | High-throughput data I/O; 9.4x tokenization speedups and memory-mapped datasets. |
| **ROLL** | 0 | 1 | 0 | Ecosystem expansion via modular reward bridging (Atropos integration). |
| **torchtune** | 0 | 1 | 0 | Project sunsetted; maintainers officially winding down the library. |
| **Gymnasium** | 0 | 1 | 0 | Maintenance mode; fixing legacy documentation 404s. |
| **PettingZoo** | 0 | 1 | 0 | Dependency modernization (Python 3.13+, `pygame-ce`). |
| **CleanRL, OpenRLHF, rl_games, SB3, Tianshou** | 0 | 0 | 0 | Dormant. |

*Note: Issue and PR counts reflect daily volume based on provided digests.*

## Shared Research & Engineering Directions

**Research Signals**
*   **Massive MoE & VLM Alignment:** The frontier of RL research has shifted from dense 7B-70B models to Colossal MoEs (Qwen3.5-397B, GLM5-744B) and Vision-Language Models. Projects like `slime` and `verl` are actively mapping the failure points of these architectures in distributed GRPO/PPO training.
*   **Distillation & Offline Methods:** There is a distinct push toward on-policy and asynchronous distillation (`verl`, `TRL`), as well as stabilizing off-policy methods like Retool (`slime`), to reduce the computational burden of RLHF.

**Engineering & Infrastructure Signals**
*   **The Weight Sync Bottleneck:** The most pressing infrastructure challenge is synchronizing weights between distributed training engines (Megatron, FSDP) and inference servers (vLLM, SGLang). Projects are deploying overlapping solutions: delta weight compression (`slime`), IPC/Ray RDT optimizations (`AReaL`), and shifting quantization to trainer GPUs (`verl`).
*   **Rollout Disaggregation:** To optimize VRAM and compute, frameworks are decoupling prefill and decode phases during RL rollouts. `verl` is actively implementing 1:N Prefill-Decode disaggregation.
*   **Hardware Heterogeneity:** Breaking NVIDIA's monopoly is a priority. `verl` is building abstraction layers for Intel XPU, Ascend NPU, and Cambricon MLU, while `AReaL` ensures compatibility across FSDP and Megatron backends.
*   **Data I/O Optimizations:** Preprocessing is a critical bottleneck. `Open Instruct` achieved a ~9.4x speedup by shifting to NumPy memory-mapped formats and incremental binary checkpointing.

## Differentiation Analysis
*   **The Full-Stack Orchestrators (`verl`, `AReaL`):** These projects are competing to become the default distributed execution engines for LLM reasoning. They focus on deep systems-level engineering—routing, weight syncing, and multi-backend support. `verl` differentiates with its aggressive multi-hardware plugin layer, while `AReaL` focuses heavily on cross-engine synchronization protocols (Awex, NCCL P2P).
*   **The Cloud-Native Schedulers (`ROCK`, `ROLL`):** These frameworks abstract away the Kubernetes and distributed cluster management. `ROCK` focuses on enterprise-grade resilience (Nacos, serverless operator support), whereas `ROLL` is differentiating via agentic interoperability, building "Universal Reward Bridges" to connect training loops with external environments.
*   **The Accessible Workbenches (`TRL`, `Open Instruct`):** Targeting a broader audience, `TRL` focuses on the algorithmic layer (DPO, KTO, GRPO) and Hugging Face ecosystem integration, optimizing memory and templates for VLMs. `Open Instruct` specializes in the unglamorous but critical foundational layer of high-throughput SFT data ingestion and tokenization.

## Community Momentum & Maturity
*   **Maturation and Sunsetting:** The ecosystem is experiencing a consolidation phase. The wind-down of Meta's `torchtune` indicates that standard post-training techniques are becoming sufficiently mature to be absorbed into broader platforms like Hugging Face `TRL` or core PyTorch. Similarly, classic RL environments (Gymnasium, PettingZoo) are highly mature, requiring only minor maintenance.
*   **Frontier Friction:** Conversely, the LLM post-training frameworks are experiencing extreme growth friction. The issue trackers for `slime` and `verl` reveal that the community is actively doing battle with distributed system gremlins—TCPStore race conditions, HCCL memory leaks, and garbled MoE token outputs across 100+ GPU clusters. 

## Trend Signals
*   **Impending Shift to Serverless RL:** `ROCK`'s integration of Alibaba Function Compute hints at a near future where distributed RL workloads are run on auto-scaling, event-driven serverless infrastructure to mitigate the massive idle costs of large GPU clusters.
*   **Inference-Training Hybrids:** The boundary between "training" and "inference" is blurring. Moving FP8 quantization to the trainer GPUs (`verl`) and executing chunked cross-entropy (`AReaL`, `TRL`) indicates that future RL frameworks will treat inference engines and training engines as a single, fluidly composed memory pool.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-04-24
**Focus Project:** Alibaba/ROLL

## 1. Today's Highlights
The ROLL (Reinforcement Learning for Large Language Models) framework saw a quiet day regarding issue tracking and releases, but continues to foster significant architectural discussions. The primary focus is on ecosystem expansion, specifically through a pending integration with NousResearch's Atropos environments. 

## 2. Releases
* **No new releases** were published in the last 24 hours.

## 3. Important Issues
* **No new or updated issues** were reported in the last 24 hours.

## 4. Key PR Progress
While only one pull request saw activity recently, it represents a notable feature addition for the framework:
* **[#426 [OPEN] ROLL with Atropos environments](https://github.com/alibaba/ROLL/pull/426)**
  * **Author:** RUFFY-369
  * **Details:** This PR introduces a modular agentic adapter for the [Atropos](https://github.com/NousResearch/atropos) environment within the ROLL framework. The core implementation features a "Universal Reward Bridge" that acts as a configurable adapter, enabling ROLL to natively process and interact with Atropos environments. 
  * **Status:** Open (Created on 2026-04-21, last updated 2026-04-23).

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, the focus has heavily shifted toward Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning from AI Feedback (RLAIF) for aligning and training Large Language Models (LLMs). 

ROLL provides a scalable, production-ready infrastructure specifically designed for these complex LLM workloads. The ongoing integration in PR #426 with Atropos—a modern environment designed for RL agents—highlights a broader industry trend: **interoperability**. By implementing a "Universal Reward Bridge," ROLL is positioning itself not just as a standalone training loop, but as a flexible, agentic orchestration layer capable of plugging into diverse, third-party reward and environment systems. This drastically reduces the engineering overhead required to test new RL environments against large-scale foundation models.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for alibaba/ROCK on 2026-04-24:

### 1. Today's Highlights
Activity on the ROCK (RL with Outsourced Computation to Kubernetes) repository saw a significant spike over the last 24 hours with 12 updated Pull Requests and 5 active Issues. The development focus is heavily centered on **infrastructure resilience and observability**. Key themes include dynamic configuration reloading for schedulers, expanding metrics tracking, tightening WebSocket proxy security, and patching HTTP request handling bugs. 

### 2. Releases
*   **None** (0 new releases). Note: PR [#893](https://github.com/alibaba/ROCK/pull/893) suggests an upcoming version bump is currently in the PR review stage.

### 3. Important Issues
*   **Dynamic Scheduler Config via Nacos ([#888](https://github.com/alibaba/ROCK/issues/888))**: *Open*. Requested by `zhongwen666`. Currently, the ROCK scheduler loads its YAML configuration only at startup. This issue proposes integrating Nacos to allow runtime dynamic reloading, which is critical for long-running RL training jobs that require scaling or parameter tuning without service restarts.
*   **Tracking Config in SDK ([#890](https://github.com/alibaba/ROCK/issues/890))**: *Open*. Requested by `FangwenDave`. A feature request to natively incorporate tracking configurations into the SDK's `job config`, streamlining the setup for ML experiment tracking (e.g., TensorBoard, Weights & Biases).
*   **Meta Store & DB Metrics ([#886](https://github.com/alibaba/ROCK/issues/886))**: *Open*. Requested by `zhangjaycee`. Proposes adding operational metrics for meta store and database interactions to improve system observability.
*   **HTTP Proxy Bug ([#880](https://github.com/alibaba/ROCK/issues/880))**: *Closed*. Reported by `Dengsheng-wzh`. Identified a bug where non-JSON HTTP requests lost their bodies when routed through the `http_proxy` endpoint. 

### 4. Key PR Progress
*   **Dynamic Scheduler Reloading ([#889](https://github.com/alibaba/ROCK/pull/889))**: *Open*. Implements the Nacos-based configuration reloading requested in #888. It introduces admin startup overrides and enhances `NacosConfigProvider` with custom listener callbacks.
*   **Security & Proxy Fixes**:
    *   [#894](https://github.com/alibaba/ROCK/pull/894) (*Open*): Blocks oversized cookie headers containing SSO tokens from upstream gateways to prevent `502 Bad Gateway` errors on downstream WebSocket services.
    *   [#891](https://github.com/alibaba/ROCK/pull/891) (*Closed/Merged*): Resolved the non-JSON body loss bug (#880) in the HTTP proxy endpoint.
*   **Sandbox Environment Enhancements**: 
    *   [#885](https://github.com/alibaba/ROCK/pull/885) (*Open*): Mounts local time configuration to containers.
    *   [#864](https://github.com/alibaba/ROCK/pull/864) (*Closed/Merged*): Passed the POSIX `TZ` environment variable to sandbox containers to fix an 8-hour time discrepancy for CST users, ensuring system command times align with frontend logs.
*   **Serverless RL Integration ([#867](https://github.com/alibaba/ROCK/pull/867))**: *Open*. Adds support for Alibaba Function Compute (serverless runtime) as an operator, hinting at future capabilities for highly elastic, event-driven RL workloads.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning workloads mature from local prototyping to distributed, cloud-native production systems, **infrastructure orchestration** becomes the primary bottleneck. ROCK bridges the gap between complex RL algorithms and scalable Kubernetes infrastructure. 

Today's updates highlight the project's focus on **enterprise-grade resilience**. By addressing dynamic configuration reloading (Nacos), enhancing experiment tracking within the SDK, and fixing proxy/time-sync issues, ROCK is actively reducing the operational friction of distributed RL. Furthermore, the introduction of serverless operator support (#867) signals a forward leap in cost-efficient, auto-scaling compute for RL environments—allowing practitioners to spin up and tear down massive simulation environments dynamically without incurring idle cluster costs.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: slime
**Date:** 2026-04-24 | **Project:** [THUDM/slime](https://github.com/THUDM/slime)

## 1. Today's Highlights
Activity in the `slime` framework over the past 24 hours is heavily focused on **large-scale deployment scalability** and **multi-modal rollout stability**. The community is actively pushing the boundaries of massive MoE models (like Qwen3.5-397B and GLM5-744B) and encountering edge cases with Vision-Language Models (VLMs) during inference. Concurrently, a highly anticipated PR for delta weight synchronization promises significant cost reductions for RLHF training.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
**Large-Scale MoE Rollouts & Token Corruption**
*   **Qwen3.5-397B-A17B Garbled Output:** Users scaling up to 160 H20 GPUs (96 Actor, 64 Rollout) in fully asynchronous mode are experiencing garbled/non-sensical outputs from the Rollout phase, despite the training loop running without error. ([Issue #1852](https://github.com/THUDM/slime/issues/1852))
*   **GLM5-744B First-Token Issues:** Similarly, during RL training for GLM5-A40B, the SGLang rollout phase occasionally produces corrupted or irrelevant first tokens. ([Issue #1853](https://github.com/THUDM/slime/issues/1853))

**Vision-Language Model (VLM) Inference Bugs**
*   **VLM Multi-turn Blindness:** Users report that during multi-turn rollouts, the model loses the ability to "see" images, often hallucinating that the image is blank. ([Issue #1847](https://github.com/THUDM/slime/issues/1847))
*   **Qwen3-VL Misinterpretation:** When using the built-in SGLang docker server for Qwen3-VL-4B-instruct, the model fails to process images correctly, outputting `????` or incorrect analyses. ([Issue #1850](https://github.com/THUDM/slime/issues/1850))

**Memory Leaks & New Model Support**
*   **Retool OOM:** Users are experiencing mid-training Out Of Memory (OOM) crashes after 37 steps when running Qwen3-4B with off-policy Retool. ([Issue #1767](https://github.com/THUDM/slime/issues/1767))
*   **Gemma 4 Integration:** There is strong community interest (4 👍) in wrapping Gemma 4 models for RL training utilizing existing SGLang support. ([Issue #1811](https://github.com/THUDM/slime/issues/1811))

## 4. Key PR Progress
*   **[OPEN] Delta Compression for Weight Sync:** PR [#1806](https://github.com/THUDM/slime/pull/1806) introduces optional delta-compression for trainer → rollout-engine weight synchronization. Inspired by recent literature (Composer 2, Fireworks AI), this optimization is a critical architectural enhancement for large-scale distributed RL, significantly reducing the network bottleneck during actor-weight updates.

## 5. Why This Project Matters in Today's RL Landscape
The current issue tracker perfectly illustrates the evolving growing pains of post-training LLMs at the frontier. A year ago, the community was focused on stabilizing 7B-70B dense models. Today, the primary bottlenecks in open-source RL are **distributed infrastructure orchestration** (managing 96+ training GPUs alongside 64+ rollout GPUs) and **framework integration** (ensuring training frameworks communicate flawlessly with high-throughput inference engines like SGLang). 

The `slime` project is positioning itself at the vanguard of this shift. By actively addressing memory optimizations for off-policy methods and pioneering weight-sync compression (PR #1806), the project is tackling the exact computational ceilings that make frontier RL training prohibitively expensive.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Daily Digest: AReaL
**Date:** 2026-04-24 | **Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

## 1. Today's Highlights
AReaL experienced a highly active day with **43 PRs updated** and **5 issues raised**. The primary focus of the community and maintainers is heavily centered on **scaling and optimizing cross-engine weight synchronization**, expanding **LoRA training capabilities**, and stabilizing the distributed RLHF training infrastructures (Megatron, FSDP, vLLM, SGLang).

## 2. Releases
*   **No new releases** were cut today.

## 3. Important Issues
*   **[Bug] TCPStore Race on Shutdown:** Issue [#1245](https://github.com/inclusionAI/AReaL/issues/1245) reports a clean shutdown failure with `TCPStore.recvValue` when using the local scheduler, which was swiftly addressed in PR [#1244](https://github.com/inclusionAI/AReaL/pull/1244).
*   **[Bug] CP-Local Metric Under-reporting:** Issue [#1242](https://github.com/inclusionAI/AReaL/issues/1242) highlights a regression from a recent Megatron Context Parallelism (CP) PR where SFT token-count metrics are being under-reported by the CP factor.
*   **[Feature] Adapter-Only LoRA Bootstrap:** Issue [#1240](https://github.com/inclusionAI/AReaL/issues/1240) proposes the ability to initialize FSDP LoRA training directly from adapter-only checkpoints.
*   **[RFC] Ray Core RDT for Weight Syncing:** Issue [#1243](https://github.com/inclusionAI/AReaL/issues/1243) proposes integrating Ray Core RDT to optimize weight synchronization between training and inference engines.

## 4. Key PR Progress
*   **Weight Sync & Infrastructure Overhauls:**
    *   **Awex Backend Integration:** PRs [#1214](https://github.com/inclusionAI/AReaL/pull/1214) (Closed/Merged) and [#1239](https://github.com/inclusionAI/AReaL/pull/1239) introduce Awex-backed NCCL P2P weight updates via an HTTP gateway for FSDP and Megatron engines.
    *   **Colocated Weight Sync:** PR [#1164](https://github.com/inclusionAI/AReaL/pull/1164) adds backend-aware dispatching for vLLM's native `IPCWeightTransferEngine`.
*   **LoRA Enhancements:**
    *   PR [#1241](https://github.com/inclusionAI/AReaL/pull/1241) implements the requested adapter-only checkpoint bootstrapping for FSDP.
    *   PR [#1233](https://github.com/inclusionAI/AReaL/pull/1233) implements disk-based incremental LoRA delta weight syncing for FSDP/SGLang.
    *   PR [#1238](https://github.com/inclusionAI/AReaL/pull/1238) stabilizes vLLM versioned LoRA routing to prevent crashes during in-flight requests.
*   **Scalability & Examples:**
    *   PR [#1224](https://github.com/inclusionAI/AReaL/pull/1224) adds a new training example for Terminal Bench 1.0 tasks.
    *   PR [#1223](https://github.com/inclusionAI/AReaL/pull/1223) (Closed/Merged) introduces CP-local cross-entropy loss to avoid logits OOM errors in Megatron CP training.

## 5. Why This Project Matters in Today's RL Landscape
In the modern RLHF/Open-Source RL landscape, the bottleneck has shifted from algorithmic design to **systems-level infrastructure**. AReaL’s current development velocity proves that state-of-the-art post-training requires seamless interoperability between distributed training engines (FSDP, Megatron) and high-throughput inference servers (vLLM, SGLang). 

Today's activity demonstrates exactly why projects like AReaL are critical: pushing the boundaries of memory-efficient training (CP-local loss), enabling fast weight-sharing across heterogeneous hardware (Awex, IPC, Ray RDT), and supporting agile fine-tuning paradigms (Delta LoRA syncing). For any organization scaling LLM reasoning models, AReaL is becoming an essential reference architecture.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-04-24

Here is the daily overview of the Hugging Face `trl` repository, tracking the latest developments in post-training and RLHF tooling.

## 1. Today's Highlights
Activity in the TRL ecosystem over the last 24 hours has been heavily focused on **memory optimization for SFT** and **infrastructure standardization**. Fifteen pull requests saw updates, highlighting an active push by maintainers (especially `@qgallouedec` and `@albertvillanova`) to refactor data pipelines, correct metric calculations, and streamline CI/CD pipelines.

## 2. Releases
* **No new releases** were published in the last 24 hours.

## 3. Important Issues
* **[OPEN #5361] Multimodal generation hangs in vLLM server mode with large images:** A significant usability blocker where running multimodal RL training (e.g., GRPO with Qwen-VL) using TRL and `vllm-mode="server"` causes the generation to hang if high-resolution images are passed. Manual resizing is currently required, whereas "colocate" mode handles it fine. 
  * **Link:** [huggingface/trl Issue #5361](https://github.com/huggingface/trl/issues/5361)

## 4. Key PR Progress

### Memory & Training Optimization
* **[OPEN #5575] Chunked cross-entropy loss for SFT:** A major performance PR introducing chunked CE to reduce peak VRAM usage by up to **50%** during Supervised Fine-Tuning.
  * **Link:** [huggingface/trl PR #5575](https://github.com/huggingface/trl/pull/5575)
* **[OPEN #5620] Fix entropy calculation in SFT:** Fixes a bug where the SFT entropy metric was being averaged over the wrong tokens instead of positions where `label != -100`.
  * **Link:** [huggingface/trl PR #5620](https://github.com/huggingface/trl/pull/5620)

### Architecture & Data Pipeline Refactoring
* **[OPEN #5632] Align KTO with DPO:** Moves completion assembly from `_prepare_dataset` to the `DataCollatorForUnpairedPreference`, standardizing how prompts and completions are handled across preference optimization trainers.
  * **Link:** [huggingface/trl PR #5632](https://github.com/huggingface/trl/pull/5632)
* **[OPEN #5560] Accept processor in `get_training_chat_template`:** Fixes type hints and docstrings to properly acknowledge that the function supports both `PreTrainedTokenizer` and `ProcessorMixin` (crucial for VLMs). *(Note: Related merged/closed PR #5629 also enforced `PreTrainedTokenizerBase` for proper fast-tokenizer support).*
  * **Link:** [huggingface/trl PR #5560](https://github.com/huggingface/trl/pull/5560)
* **[CLOSED #5626] Remove `forward_masked_logits`:** Cleans up a public utility function that was superseded by the new chunked NLL approach in PR #5575.
  * **Link:** [huggingface/trl PR #5626](https://github.com/huggingface/trl/pull/5626)

### Expanding Modalities, Templates & Testing
* **[OPEN #5586] Add tiny Qwen3-4B-Instruct-2507:** Adds testing/support for a Qwen3 variant that utilizes a distinct chat template. 
  * **Link:** [huggingface/trl PR #5586](https://github.com/huggingface/trl/pull/5586)
* **[OPEN #5627] Add Cohere training chat template:** Registers a training-variant chat template for the Cohere Command model family to ensure correct masks when using `assistant_only_loss=True`.
  * **Link:** [huggingface/trl PR #5627](https://github.com/huggingface/trl/pull/5627)
* **[OPEN #5615] Upload testing suite for `DistillationTrainer`:** Introduces a complete test bed for the relatively new Distillation trainer.
  * **Link:** [huggingface/trl PR #5615](https://github.com/huggingface/trl/pull/5615)
* **[OPEN #5550] Fix GRPO VLM tests:** Resolves an error where multimodal training was failing because it was receiving non-conversational prompts.
  * **Link:** [huggingface/trl PR #5550](https://github.com/huggingface/trl/pull/5550)

## 5. Why This Project Matters in Today's RL Landscape
In the current AI landscape, post-training (RLHF, DPO, KTO) and GRPO are the dominant techniques for aligning LLMs and VLMs with human preferences. TRL remains the premier open-source library for these workflows. Today's digest highlights a crucial maturation step for the framework: **optimizing hardware constraints and standardizing multimodal support.** 

By aggressively pursuing VRAM reductions (PR #5575) and fixing VLM-specific server hangups and prompt structures (#5361, #5550), TRL is actively breaking down the hardware and engineering barriers that previously made multimodal RL fine-tuning cost-prohibitive and difficult to scale.

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

# RL Open-Source Daily Digest: verl
**Date:** 2026-04-24 | **Project:** [verl-project/verl](https://github.com/volcengine/verl)

Here is the daily briefing covering the latest developments in the verl reinforcement learning ecosystem.

---

### 1. Today's Highlights
The verl ecosystem saw massive activity today with **29 Pull Requests** updated and **8 Issues** processed. The core themes for the day are **hardware heterogeneity**, **advanced rollout architectures**, and **system-level memory/speed optimizations**. The community is making aggressive pushes to support diverse hardware (Intel XPU, Ascend NPU) and cutting-edge serving techniques like Prefill-Decode (PD) disaggregation.

### 2. Releases
*   **No new releases** were cut in the last 24 hours. The project is actively iterating on its `26Q2` roadmap ([Issue #5836](https://github.com/verl-project/verl/issues/5836)).

### 3. Important Issues
Developers are actively testing large-scale and distributed configurations, surfacing critical bugs and architectural questions:
*   **OOM in Fully Async Megatron:** Users reported random Out-Of-Memory (OOM) errors in `hccl_checkpoint_engine.py` when training Qwen3-32B (8K+8K seq length) using Megatron and fully asynchronous modes, pointing to potential memory leaks ([Issue #6125](https://github.com/verl-project/verl/issues/6125)).
*   **Massive MoE Models:** A discussion was opened regarding GRPO training support for the colossal Qwen3.5-397B-A17B MoE model ([Issue #6123](https://github.com/verl-project/verl/issues/6123)).
*   **FSDP + EP for LLMs:** A notable question was raised about the lack of FSDP scripts for models >235B parameters (like Qwen), which currently only feature Megatron backend support ([Issue #6124](https://github.com/verl-project/verl/issues/6124)).
*   **VLM SFT Crash:** A critical bug was identified where VLM SFT crashes if micro-batch samples share an identical `seq_len`, due to a nested tensor jagged dimension flip in RoPE ([Issue #6073](https://github.com/verl-project/verl/issues/6073)).

### 4. Key PR Progress
Today's PRs reflect heavy infrastructure development, particularly in inference rollouts, multi-hardware support, and asynchronous training:
*   **Hardware & Multi-Chip Support:**
    *   End-to-end Intel XPU support for GRPO/PPO/SFT via FSDP + vLLM was introduced ([PR #6119](https://github.com/verl-project/verl/pull/6119)).
    *   A platform abstraction layer and plugin-based engine system was proposed to unify support for NVIDIA, Ascend NPU, Cambricon MLU, and Moore Threads MUSA ([PR #6086](https://github.com/verl-project/verl/pull/6086)).
*   **Rollout Engine Enhancements:**
    *   Introduction of SGLang Prefill-Decode (PD) disaggregated rollout using a 1 prefill : N decode layout to keep CUDA IPC handles local ([PR #6117](https://github.com/verl-project/verl/pull/6117)).
    *   Implementation of Phase 2 of the routing roadmap: adding group-level sticky routing to the global load balancer ([PR #6122](https://github.com/verl-project/verl/pull/6122)).
*   **Training & Memory Optimizations:**
    *   Moving FP8 blockwise weight quantization from rollout to trainer GPUs, halving transfer bandwidth in disaggregated mode ([PR #5976](https://github.com/verl-project/verl/pull/5976)).
    *   Adding SGLang support for on-policy distillation teachers ([PR #6120](https://github.com/verl-project/verl/pull/6120)) and enabling online policy distillation in fully async training ([PR #6056](https://github.com/verl-project/verl/pull/6056)).
*   **Architecture Refactoring:**
    *   `LLMServerManager` was successfully decoupled from `AgentLoopManager` to allow integration with third-party agent frameworks like NVIDIA NeMo-Gym ([PR #6129](https://github.com/verl-project/verl/pull/6129)).
    *   The Megatron checkpoint manager is undergoing a major refactor to simplify backend logic ([PR #6014](https://github.com/verl-project/verl/pull/6014)).

### 5. Why This Project Matters in Today's RL Landscape
verl is evolving from a pure RLHF training framework into a **full-stack, hardware-agnostic RL infrastructure**. Today's updates prove that the ecosystem is directly tackling the three largest bottlenecks in post-training large language models: **inference cost, memory limits, and vendor lock-in**. 
By disaggregating prefill/decode rollouts (saving VRAM and compute), shifting quantization to the trainer (saving network bandwidth), and building a robust plugin layer for non-NVIDIA silicon (Intel, Ascend, Cambricon), verl is positioning itself as the go-to distributed execution engine for training next-generation, tool-using reasoning agents (like Qwen3.5 and DeepSeek-R1) at scale.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

### RL Open-Source Ecosystem Daily Digest: `torchtune`
**Date:** 2026-04-24

#### 1. Today's Highlights
The most significant event in the `torchtune` repository is its official wind-down. A recently merged pull request indicates that the maintainers are sunsetting the project, advising users to migrate to alternative toolchains. Activity on the repository has naturally slowed to a halt, with zero new issues opened and zero new releases cut in the last 24 hours.

#### 2. Releases
No new releases were recorded today. Given the project's current transitional status, future releases are unlikely.

#### 3. Important Issues
**Total activity:** 0 items
There were no active or newly created issues in the past 24 hours. The stabilization of issue tracking aligns with the project entering maintenance/sunset mode.

#### 4. Key PR Progress
*   **[#2961 [CLOSED] docs: note torchtune wind-down in README](https://github.com/meta-pytorch/torchtune/pull/2961)** 
    *   **Author:** felipemello1
    *   **Details:** Closed on 2026-04-23. This PR officially updates the repository's `README.md` to include a notice regarding the wind-down of the `torchtune` project. 

#### 5. Why This Project Matters in Today's RL Landscape
Torchtune has historically played a crucial role in the reinforcement learning and fine-tuning ecosystem by providing high-quality, memory-efficient, and easy-to-modify PyTorch-native implementations for LLM post-training (including RLHF, DPO, and PPO-based alignment techniques). 

While the repository itself is being wound down, its retirement signals a maturation shift in the broader RL/LLM ecosystem. Usually, sunset announcements of foundational PyTorch libraries indicate that core post-training and RL alignment algorithms have been upstreamed into broader frameworks (like the core PyTorch library, Hugging Face `TRL`, or new Meta-released platforms) or have become standardized enough to no longer require a standalone library. Researchers and engineers relying on `torchtune` should monitor Meta's official PyTorch blogs for the recommended migration paths and successor tools for RLHF and model alignment.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-04-24 | **Project:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on data processing infrastructure and package stability. Four pull requests were updated—three of which were merged—highlighting a major engineering effort by the community to optimize Supervised Fine-Tuning (SFT) tokenization and resolve critical dependency packaging bugs. 

## 2. Releases
No new releases were cut today.

## 3. Important Issues
Zero issues were opened or updated in the last 24 hours. The current development focus appears to be strictly on merging foundational data-handling improvements.

## 4. Key PR Progress
The primary focus of recent development is drastically optimizing the SFT data ingestion pipeline and ensuring the library is pip-installable for downstream users.

*   **[OPEN] [#1631 - SFT Tokenization 9.4x Speedup](https://github.com/allenai/open-instruct/pull/1631)** (Author: `finbarrtimbers`)
    *   **Details:** Replaces default iteration with `.with_format("numpy")` in `convert_hf_to_numpy_sft`. The previous path was bottlenecked by Python's `_getitem` and `format_table` calls on every sample due to shuffled indices. This change accelerates the collection loop by ~9-10x, a critical improvement for processing massive RLHF/SFT datasets.
*   **[CLOSED] [#1633 - Incremental Binary Checkpoints](https://github.com/allenai/open-instruct/pull/1633)** (Author: `finbarrtimbers`)
    *   **Details:** Replaces an inefficient single-file JSON checkpoint system with an incremental binary format (`.bin` for array data like token IDs and label masks, `.json` for scalar metadata). This enables robust resumption of large-scale tokenization jobs.
*   **[CLOSED] [#1622 - Extract Numpy SFT Conversion Module](https://github.com/allenai/open-instruct/pull/1622)** (Author: `finbarrtimbers`)
    *   **Details:** Refactors the HuggingFace-to-OLMo-core `numpy mmap` conversion logic into a standalone library module (`open_instruct/numpy_dataset_conversion.py`). This successfully unblocks downstream callers, specifically the upcoming OLMo-core SFT main pipeline.
*   **[CLOSED] [#1634 - Fix Dependency Import Error](https://github.com/allenai/open-instruct/pull/1634)** (Author: `BrownianNotion`)
    *   **Details:** Fixed a `ModuleNotFoundError` that occurred when installing `open-instruct` as a third-party dependency (e.g., via `uv pip install`). The fix corrects the `[tool.setuptools]` configuration, allowing researchers to seamlessly integrate the repo into custom RL environments.

## 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning from Human Feedback (RLHF) and post-training pipelines, data preprocessing and I/O bottlenecks often consume more wall-clock time than the reinforcement learning steps themselves. By shifting to memory-mapped numpy formats, implementing incremental binary checkpointing, and achieving a 9.4x speedup in tokenization collection ([#1631](https://github.com/allenai/open-instruct/pull/1631)), Open Instruct is building the high-throughput data infrastructure required to iterate rapidly on large Language Models. Furthermore, fixing third-party installation bugs ([#1634](https://github.com/allenai/open-instruct/pull/1634)) lowers the barrier to entry, enabling RL researchers to easily pull Ai2's robust tooling into distributed training environments without hacking `PYTHONPATH`.

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

**RL Open-Source Daily Digest: Gymnasium**
**Date:** 2026-04-24

### 1. Today's Highlights
The Gymnasium repository experienced a low-activity day with no newly opened or updated issues and no new software releases. The only observed movement was a single pull request aimed at improving documentation integrity by resolving a 404 error. 

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **None.** There were 0 issues created or updated within the last 24 hours.

### 4. Key PR Progress
*   **PR [#1562](https://github.com/Farama-Foundation/Gymnasium/pull/1562) [OPEN]: Fix link to Gym compatibility documentation**
    *   **Author:** LonelyGuy-SE1
    *   **Summary:** This PR addresses a broken hyperlink in the documentation that currently returns a `404 Not Found` error. The fix updates the reference to correctly point to the legacy Gym compatibility guide. 
    *   **Context:** While a minor patch, maintaining accurate cross-references between Gymnasium and legacy OpenAI Gym is critical for developer onboarding and migration.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium serves as the foundational standard API for single-agent reinforcement learning (RL) environments. Following the deprecation of OpenAI's original Gym library, Gymnasium (maintained by the Farama Foundation) has become the de facto dependency for modern RL frameworks (e.g., Stable-Baselines3, CleanRL, Ray RLlib). Patches like PR #1562 highlight the ongoing, meticulous work required to maintain backward compatibility and documentation accuracy. Seamless migration paths and reliable documentation remain essential for reproducibility and rapid prototyping in today's fast-evolving RL research landscape.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL open-source ecosystem daily digest for PettingZoo based on the provided data.

### 1. Today's Highlights
Activity on the PettingZoo repository was quiet over the past 24 hours, with zero new issues and no new releases. The primary focus remains on project maintenance, specifically the preparation for the upcoming `v1.26.0` release, which aims to modernize the library's Python environment support and overhaul legacy dependencies. 

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Important Issues
**None.** There were 0 issues opened or updated within the last 24 hours.

### 4. Key PR Progress
The only notable repository activity is centered around the next maintenance release:
*   **[#1327 [OPEN] Changes for release v1.26.0](https://github.com/Farama-Foundation/PettingZoo/pull/1327)**: Authored by `mwydmann` and last updated on 2026-04-22, this PR outlines critical compatibility updates. 
    *   *Technical Details:* The PR bumps the library to version 1.26.0, officially introduces support for **Python 3.13 and 3.14** (via `pyproject.toml`), and transitions the project's dependency from the deprecated vanilla `pygame` build to the actively maintained community edition fork, **`pygame-ce`**. 

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo (a Farama Foundation sibling project to Gymnasium) is the de facto standard library for multi-agent reinforcement learning (MARL) environments. 

While today's updates are strictly maintenance-based, they are vital for the broader RL ecosystem. Cutting-edge MARL research is increasingly computationally demanding and relies on the latest Python iterations for performance boosts (e.g., free-threading capabilities introduced in Python 3.13+). Furthermore, migrating away from unmaintained dependencies like `pygame` to `pygame-ce` ensures that custom MARL environment rendering remains stable, secure, and aligned with modern development pipelines, preventing technical debt from stalling ongoing multi-agent research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>