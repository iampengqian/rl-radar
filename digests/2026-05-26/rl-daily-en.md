# RL Open Source Daily Digest 2026-05-26

> Generated: 2026-05-25 22:19 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem on 2026-05-26 is characterized by a clear architectural divide. At the highest tier of activity, the ecosystem is aggressively pivoting toward large-scale post-training infrastructure for LLMs and multimodal models. Meanwhile, foundational libraries focused on traditional, single-agent, and multi-agent RL algorithms are in maintenance phases, emphasizing stability, security, and bug resolution over new feature development.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 3 | 30 | 0 | Rapid expansion of hardware backends and algorithmic support (DPO) for massive scale RLHF. |
| **slime** | 1 | 14 | 0 | Pushing the envelope on training/inference disaggregation and massive MoE support. |
| **AReaL** | 3 | 14 | 0 | Deep systems-level optimization: PD separation and CUDA IPC weight syncing. |
| **TRL** | 4 | 20 | 1 | Expanding modality (Vision/Audio) and maturing tool-calling/GRPO integrations. |
| **ROCK** | 1 | 5 | 0 | Hardening distributed RL infrastructure with SRE tooling and CLI optimizations. |
| **PettingZoo** | 0 | 5 | 0 | Prioritizing security patches and environment reproducibility for MARL. |
| **rl_games** | 0 | 2 | 0 | Upgrading hardware compatibility (Apple MPS) and custom training callbacks. |
| **ROLL** | 1 | 0 | 0 | Investigating critical vLLM OOM bottlenecks in large-scale MoE clusters. |
| **Gymnasium** | 1 | 1 | 0 | Preparing foundational documentation for the 1.0.0 release. |
| **Stable Baselines3** | 1 | 0 | 0 | Maintaining core algorithms; tracking a critical bug in Hindsight Experience Replay. |
| **Others*** | 0 | 0 | 0 | No activity recorded. |

*\*Others include: CleanRL, Open Instruct, OpenRLHF, Tianshou, and torchtune.*

## Shared Research & Engineering Directions

**Research Signals**
*   **Algorithmic Diversification:** Post-training is moving beyond standard PPO and GRPO. Frameworks are actively integrating Direct Preference Optimization (verl), Tool-calling/Agentic RL with observation prediction losses (TRL, slime), and rule-based NP-reasoning (verl).
*   **Mixture-of-Experts (MoE) Focus:** Training massive sparse models is a shared frontier. Verl, AReaL, and slime are all developing dedicated weight bridges and routing replay mechanisms for cutting-edge architectures (Gemma4, MiniMax-M2.5, Bailing-MoE).
*   **Expanding Modalities:** Post-training alignment is moving from text-only to Vision-Language Models and Audio. TRL is leading this with new `assistant_only_loss` templates for Phi-3.5 and Qwen2.5-VL.

**Engineering & Infrastructure Signals**
*   **Training/Inference Disaggregation:** The industry is shifting away from co-located training and generation. AReaL and slime are implementing Prompt/Decode (PD) separation and delta weight synchronization to allow inference engines and training clusters to scale independently across datacenters.
*   **Hardware Abstraction and Scale:** Multi-GPU and cross-platform support is critical. Verl and AReaL are aggressively patching FSDP2 sequence parallelism bugs, while verl is building unified abstraction layers to support NVIDIA, Ascend NPU, and Cambricon.
*   **Memory & Weight Sync Optimization:** Low-latency weight updates are the primary bottleneck in distributed RL. AReaL is pioneering CUDA Inter-Process Communication (IPC) and Ray Direct Transport for near-instantaneous weight syncing between trainers and inference engines (vLLM/SGLang).

## Differentiation Analysis

*   **TRL vs. The Distributed Infrastructures (verl, AReaL, slime):** TRL operates as the accessible, "plug-and-play" alignment layer, focusing heavily on seamless Hugging Face `transformers` integration, multi-modality, and algorithm breadth. Conversely, verl, AReaL, and slime operate lower in the stack, acting as high-throughput orchestration layers designed to solve systems-level bottlenecks (FSDP, vLLM/SGLang memory management, disaggregated weight syncing) for 30B+ parameter models.
*   **Alibaba's Dual Strategy (ROCK vs. ROLL):** Both target enterprise RL infrastructure but approach it differently. ROLL focuses tightly on the training loop optimization for massive MoE models using Ray. ROCK acts as the surrounding ecosystem and scheduler, prioritizing cluster resilience, sandbox execution management, and global data pipelines.
*   **The Farama Foundation (Gymnasium & PettingZoo) vs. LLM-Aligners:** While the LLM alignment frameworks race toward distributed trillion-parameter training, Gymnasium and PettingZoo remain firmly grounded in standardizing APIs and ensuring the mathematical reproducibility and security of foundational traditional RL environments.

## Community Momentum & Maturity
*   **High Momentum, High Growth:** **verl** (30 PRs) and **AReaL** (14 PRs) show intense momentum, driven by strong industry and lab backing to solve immediate scaling roadblocks. **slime** (14 PRs) follows closely, driven by elite academic lab engineering (THUDM).
*   **Mature and Stable:** **TRL** maintains a massive, highly active community balancing new features with rigorous bug triage. **Stable Baselines3** and **Gymnasium** represent extreme maturity; their low PR/Issue counts reflect a stable, "finished" core codebase requiring only intermittent maintenance.
*   **Operational Maturity:** **ROCK** demonstrates a shift toward enterprise operational maturity, where PRs are dominated by SRE-focused features like emergency disk cleanup and log archival pipelines rather than novel ML algorithms.

## Trend Signals
1.  **Sandboxed Agentic Workflows are Here:** The integration of code-execution sandboxes (e.g., E2B in slime) and advanced tool-calling tracking (TRL) signals that RL post-training is rapidly shifting toward interactive, agentic environments rather than static prompt-completion datasets.
2.  **The Death of Co-location:** The architectural push for disaggregated PD (Prompt/Decode) resources and delta weight syncing (AReaL, slime) indicates that future frontier RL training will physically separate generation from parameter updates to optimize cloud resource utilization.
3.  **Hardware Fragmentation is Accelerating:** NVIDIA dominance in the RL training stack is being actively challenged. The proliferation of patches for Ascend NPUs (verl, AReaL) and Apple Silicon MPS (rl_games) signals an ecosystem preparing for a highly heterogeneous hardware future.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROLL
**Date:** 2026-05-26 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

### 1. Today's Highlights
*   **Traction on Critical Scaling Bug:** The only updated issue in the past 24 hours highlights a significant memory management hurdle when scaling ROLL for massive models across distributed clusters.
*   **Development Calm:** No new pull requests, merges, or software releases were recorded over the last 24 hours.

### 2. Releases
*   **No new releases** were published today. 

### 3. Important Issues
*   **[OPEN] Distributed vLLM Initialization OOM on Large-Scale Clusters** ([#234](https://github.com/alibaba/ROLL/issues/234))
    *   **Author:** yasu-nishi
    *   **Context:** When deploying a `qwen3-next-80B-A3B` model on an 8-node cluster (64 total GPUs, 1.5TB RAM/node), Ray's Out-Of-Memory (OOM) prevention mechanism aggressively kills freshly scheduled vLLM actors during engine initialization (specifically during `collective_rpc` → `offload_states`). 
    *   **Complications:** The issue persists even when NVMe object spilling is properly configured. 
    *   **Workaround:** The initialization only succeeds if `GRPO_GROUP=1`, severely limiting distributed training throughput and rendering standard multi-node GRPO scaling ineffective. This is a critical bottleneck for practitioners looking to train ultra-large LLMs using ROLL.

### 4. Key PR Progress
*   **No activity.** Zero pull requests were opened, updated, or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
ROLL (RL Optimized Large-scale Learning) represents a critical piece of infrastructure in the modern RLHF/RLAIF pipeline. As the AI industry shifts toward training massive Mixture-of-Experts (MoE) and dense models (like the 80B parameter model mentioned in Issue #234) using advanced algorithms like Group Relative Policy Optimization (GRPO), infrastructure limitations frequently bottleneck research. 

Projects like ROLL bridge the gap between distributed computation frameworks (Ray) and high-performance inference engines (vLLM). How the ROLL maintainers resolve memory synchronization bottlenecks (`offload_states` during `collective_rpc`) will heavily dictate how efficiently the open-source community can perform distributed post-training at scale without hitting crippling hardware memory walls.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for ROCK:

# RL Open-Source Ecosystem Daily Digest: 2026-05-26
**Project:** alibaba/ROCK

### 1. Today's Highlights
Activity over the last 24 hours focused on **infrastructure resilience and CLI performance tuning**. The core maintainers have landed a robust pipeline for deferred sandbox log archival and emergency disk cleanup—crucial for keeping large-scale RL training clusters healthy. Concurrently, a new open PR addresses a critical performance bottleneck in cross-region dataset listing, alongside a highly anticipated feature to support sandbox restarts.

### 2. Releases
*   **None** (0 new releases recorded today).

### 3. Important Issues
*   **[#1010](https://github.com/alibaba/ROCK/issues/1010) [Feature] Make `rock datasets list` fast on cross-region OSS**
    *   *Author:* `xdlkc`
    *   *Summary:* The `rock datasets list` CLI command currently suffers massive latency (>30 seconds) when querying cross-region Object Storage Service (OSS) buckets (e.g., querying a US bucket from a Chinese cluster). This creates a significant usability blocker for teams operating globally distributed RL training data registries. 

### 4. Key PR Progress
**Closed (Merged) PRs: 3**
*   **[#960](https://github.com/alibaba/ROCK/pull/960) [scheduler] SandboxLogArchiveTask for deferred archival:** Implements a 3-day deferred log archival mechanism. It automatically scans workers for stopped sandboxes, compresses logs, and pushes them to OSS without adding new endpoints (reusing `/execute` and securely injecting AK/SK via environment variables).
*   **[#963](https://github.com/alibaba/ROCK/pull/963) [deployments] Sentinel for docker stop:** Adds atomic state tracking (`.rock_stopped_at` sentinel file) upon stopping a Docker deployment, providing the necessary triggers for the deferred archival pipeline established in PR #960.
*   **[#973](https://github.com/alibaba/ROCK/pull/973) [admin] Emergency disk cleanup API:** Introduces a targeted SRE endpoint (`/admin/internal/disk_emergency_cleanup`) with built-in rate limiting and task whitelisting, bypassing the 24-hour scheduler wait to immediately resolve disk capacity spikes.

**Open PRs: 2**
*   **[#1011](https://github.com/alibaba/ROCK/pull/1011) [datasets] Optimize cross-region OSS listing:** Directly resolves Issue #1010. It replaces the deep recursive walk with a two-step OSS prefix listing strategy (`delimiter='/'`), drastically reducing cross-region query time from 30s+ down to a few seconds. It also introduces `--depth` and `--org` filtering flags.
*   **[#1001](https://github.com/alibaba/ROCK/pull/1001) [sandbox] Support sandbox restart:** Proposes the ability to restart an existing sandbox environment (closes #1000), a critical feature for RL workflow efficiency that allows environments to reset without completely tearing down the underlying container infrastructure.

### 5. Why This Project Matters in Today's RL Landscape
Scalable Reinforcement Learning (RL) requires not just advanced algorithms, but industrial-grade infrastructure capable of handling millions of ephemeral environments and petabytes of trajectory data. 

Today's updates to Alibaba's ROCK highlight a maturing RL infrastructure ecosystem. By solving cross-region data latency (PR [#1011](https://github.com/alibaba/ROCK/pull/1011)) and introducing graceful sandbox restarts (PR [#1001](https://github.com/alibaba/ROCK/pull/1001)), ROCK is lowering the friction for globally distributed model training. Furthermore, the merged suite of log archival and SRE emergency cleanup tools (PRs [#960](https://github.com/alibaba/ROCK/pull/960), [#963](https://github.com/alibaba/ROCK/pull/963), [#973](https://github.com/alibaba/ROCK/pull/973)) demonstrates a strong commitment to the day-to-day operational stability required for enterprise-level, long-running RL training loops.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: slime
**Date:** 2026-05-26 | **Project:** [THUDM/slime](https://github.com/THUDM/slime)

## 1. Today's Highlights
The slime project saw a highly active day with 14 updated Pull Requests focused on infrastructure robustness, expanding LLM support for RL training, and advanced deployment topologies. Key themes include training/inference disaggregation, integration of cutting-edge MoE models (Gemma4, MiniMax-M2.5), and sandbox-based coding agents. 

## 2. Releases
No new releases were recorded today.

## 3. Important Issues
*   **[CLOSED] GPU Placement IndexError in Multi-node Setup ([#1896](https://github.com/THUDM/slime/issues/1896)):** A bug causing `start_engines` to crash with an `IndexError` due to inconsistent placement group GPU slots and SGLang configs was resolved today via PR [#1934](https://github.com/THUDM/slime/pull/1934).

## 4. Key PR Progress

**Model & Architecture Expansions:**
*   **[#1929](https://github.com/THUDM/slime/pull/1929) [OPEN]:** Added full integration for **MiniMax-M2.5** (256 experts, top-8 routing), including a custom `SelfAttention` plugin and Megatron weight bridge.
*   **[#1855](https://github.com/THUDM/slime/pull/1855) [OPEN]:** Introduced support for **Gemma4** architectures (26B-A4B MoE and 31B dense), complete with HF↔Megatron weight conversion, retool integration, and passing parity tests across TP/PP/DP/CP/EP dimensions.

**Advanced RL Infra & Training Features:**
*   **[#1806](https://github.com/THUDM/slime/pull/1806) [OPEN]:** Implemented **delta weight sync** (disk + NCCL transports). This enables non-colocated weight synchronization—shipping only changed parameters instead of full tensors—crucial for training/inference disaggregation across different datacenters.
*   **[#1923](https://github.com/THUDM/slime/pull/1923) [OPEN]:** Added a minimal end-to-end demo for "coding agent + sandbox execution + test reward" using E2B sandboxes and Claude Code CLI.
*   **[#1933](https://github.com/THUDM/slime/pull/1933) [CLOSED]:** Merged support for training with a **variable global batch size**, a critical feature for dynamic RL workloads.
*   **[#1934](https://github.com/THUDM/slime/pull/1934) [CLOSED]:** Added explicit GPU placement boundary checks in `ServerGroup.start_engines()` to prevent mismatched SGLang actor initialization.

**CI/CD & Dependency Upgrades:**
*   **[#1945](https://github.com/THUDM/slime/pull/1945) [OPEN]:** Proposed Docker upgrade to **sglang v0.5.12.post1**.
*   **[#1892](https://github.com/THUDM/slime/pull/1892) [CLOSED]:** Merged Docker upgrade to **v0.5.11**.
*   Multiple CI cleanups and expansions were merged today by `@zhuzilin`, including running CPU tests on the main branch ([#1940](https://github.com/THUDM/slime/pull/1940), [#1939](https://github.com/THUDM/slime/pull/1939)), adding multi-sample tests ([#1941](https://github.com/THUDM/slime/pull/1941)), and validating server group GPU indices ([#1944](https://github.com/THUDM/slime/pull/1944)).

## 5. Why This Project Matters in Today's RL Landscape
As post-training and RLHF become the dominant cost centers for frontier AI labs, the architecture of RL frameworks is rapidly evolving. Slime’s latest activity highlights three major industry trends:
1.  **Training/Inference Disaggregation:** PR [#1806](https://github.com/THUDM/slime/pull/1806) reflects a shift away from tightly coupled colocation, allowing rollout engines and trainers to scale independently across datacenters using delta syncing to save bandwidth.
2.  **Complex MoE Support:** The seamless integration of massive MoE architectures (Gemma4, MiniMax-M2.5) with complex parallelism (TP/PP/CP/EP) indicates that Slime is positioning itself as a production-grade framework for tuning modern, highly sparse models.
3.  **Agentic RL:** PR [#1923](https://github.com/THUDM/slime/pull/1923) demonstrates a push beyond standard text-generation RLHF into tool-use and coding agents, where the environment reward is derived from live sandbox executions rather than static preference datasets.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Daily Digest: AReaL
**Date:** 2026-05-26  
**Focus:** inclusionAI/AReaL (Large-Scale RLHF Infrastructure)

## 1. Today's Highlights
Activity in the AReaL ecosystem over the last 24 hours indicates a massive push toward hardware-level optimization and next-generation system architecture. Key themes include compute/memory disaggregation (PD separation), deep optimizations for popular open-weight MoE and dense LLMs (Qwen, DeepSeek-V3, GLM-5), and fast weight-syncing mechanisms for distributed training. 

## 2. Releases
No new releases were cut in the last 24 hours.

## 3. Important Issues
*   **[Feature] Support PD Disaggregation ([#1329](https://github.com/inclusionAI/AReaL/issues/1329)):** A highly requested feature (👍 1) to separate Prompt/Decode (PD) resources during rollout. Since rollout dominates RLHF training time, disaggregation is critical for production-level resource management and throughput optimization.
*   **[Feature] Distillation via RolloutEngine ([#1367](https://github.com/inclusionAI/AReaL/issues/1367)):** Proposes using a dedicated inference engine for on-policy distillation (scoring `teacher_logp`) instead of a training engine. This is a direct attack on reducing the massive GPU memory overhead typically required for teacher-student RL workflows.
*   **[Bug] Qwen models crash with DTensor under TP > 1 ([#1366](https://github.com/inclusionAI/AReaL/issues/1366)):** A critical bug report noting that Qwen architectures crash due to `DTensor` dispatch errors during Tensor Parallelism, blocking multi-GPU scaling for this highly popular model family.

## 4. Key PR Progress
Fourteen PRs saw updates today. The most impactful architectural and performance updates include:

*   **System Architecture & Rollout:**
    *   **PD Disaggregation Implementation ([#1364](https://github.com/inclusionAI/AReaL/issues/1364)):** The companion PR to Issue #1329, initiating PD disaggregation support for DP=2 (1P1D) & TP=1.
    *   **Controller v2 Refactor & Pipeline ([#1354](https://github.com/inclusionAI/AReaL/pull/1354), [#1363](https://github.com/inclusionAI/AReaL/pull/1363)):** Merging a major refactor of the training controller, adding version management, unified HTTP sessions, and enabling the v2 training pipeline.
    *   **Rollout Trace Logging ([#1360](https://github.com/inclusionAI/AReaL/pull/1360)):** Integrates Hugging Face's `trackio` for local-first experiment trace logging, expanding on AReaL's existing metrics backend.

*   **Hardware & Distributed Communication:**
    *   **FSDP Weight Update via CUDA IPC ([#1361](https://github.com/inclusionAI/AReaL/pull/1361)):** Enables FSDP-trained models to update SGLang inference weights via CUDA Inter-Process Communication on shared GPUs, significantly reducing weight-sync latency. 
    *   **Ray RDT Weight Syncing ([#1305](https://github.com/inclusionAI/AReaL/pull/1305)):** Implements Ray Direct Transport (RDT) as a new weight syncing backend, further optimizing distributed engine communication.

*   **Model Support & Optimizations:**
    *   **Qwen DTensor Fix ([#1365](https://github.com/inclusionAI/AReaL/pull/1365)):** Resolves Issue #1366 by registering a forward hook on the final norm layer to redistribute intermediate tensors broken by Qwen's `aten.alias` and `aten.slice` operations.
    *   **GLM-5, DeepSeek-V3, and Bailing-MoE Support ([#1362](https://github.com/inclusionAI/AReaL/pull/1362)):** Introduces Megatron-bridge adapters for the latest cutting-edge dense and MoE architectures.
    *   **Muon Optimizer ([#1270](https://github.com/inclusionAI/AReaL/pull/1270)):** Adds native distributed support for the momentum orthogonalized (Newton-Schulz) Muon optimizer on FSDP2 and Megatron backends.

*   **Advanced RL/MoE Features:**
    *   **Rollout Routing Replay (R3) for MoE ([#1207](https://github.com/inclusionAI/AReaL/pull/1207)):** Addresses MoE training instability caused by inference-training routing discrepancies in async RL by recording and replaying expert routing indices.

## 5. Why This Project Matters in Today's RL Landscape
In the current post-training landscape, aligning LLMs via RL (like GRPO or PPO) is heavily bottlenecked by infrastructure—specifically, the latency between rollout generation and weight updating, and the massive VRAM requirements for large-scale models (like DeepSeek-V3 or Qwen MoEs). 

AReaL's current development cycle (evidenced by today's DTensor fixes, CUDA IPC weight updates, and PD Disaggregation) proves that the project is tackling the hardest infrastructure problems in open-source RL. By bridging the gap between training frameworks (FSDP2/Megatron) and high-throughput inference engines (SGLang/vLLM), AReaL is establishing itself as a critical, production-grade "glue" framework necessary to train the next generation of reasoning models efficiently.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL
**Date:** 2026-05-26 | **Repository:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Hugging Face's TRL library rolls out a massive **v1.5.0 release** focused heavily on expanding model compatibility for fine-tuning and pioneering new modalities. The community is highly active, with 20 PRs updated and 12 issues processed in the last 24 hours. Key themes include:
*   **Broadened Training Templates:** Native `assistant_only_loss` support for popular vision-language and reasoning models (Phi-3.5, Qwen2.5-VL, Qwen3-VL).
*   **GRPO Maturation:** Significant patching of GRPOTrainer bugs (async features, reward schema binding, VLLM server multi-rank errors) and a push toward tool-calling integration.
*   **New Modalities:** Active development (WIP) to support Audio modality and a major refactor of the CPOTrainer.

## 2. Releases
### 🚀 [v1.5.0](https://github.com/huggingface/trl/releases/tag/v1.5.0)
The primary release for today, introducing expanded training chat templates equipped with `&#123;&#37; generation &#37;&#125;` markers. This allows `assistant_only_loss=True` to function out-of-the-box for SFT across three major model families: **Phi-3.5**, **Qwen3-VL**, and **Qwen2-VL**.

## 3. Important Issues
*   **[Feature] Async GRPO Feature Gaps** ([#5831](https://github.com/huggingface/trl/issues/5831)): User `rycerzes` pointed out that `AsyncGRPOTrainer` lacks several features present in the synchronous version, hindering the adoption of asynchronous GRPO training.
*   **[Feature] Tool Calling Support Tracking** ([#5460](https://github.com/huggingface/trl/issues/5460)): Maintainer `qgallouedec` is tracking the complex requirements for end-to-end tool-calling during training, a critical frontier for RLHF.
*   **[Bug] VLLM + Accelerate Deterioration** ([#3881](https://github.com/huggingface/trl/issues/3881)): Closed but highly relevant; highlighted severe model performance degradation when combining GRPOTrainer with VLLM and Accelerate on multi-GPU setups. 
*   **[Bug] Reward Schema Fingerprinting** ([#5724](https://github.com/huggingface/trl/issues/5724)): Request to expose a `response_schema` argument in GRPOTrainer to bypass strict template fingerprinting.

## 4. Key PR Progress
*   **Multimodal Expansion:**
    *   [**#5830**](https://github.com/huggingface/trl/pull/5830) **(WIP)**: Core maintainer `qgallouedec` initiated support for **Audio** modality in TRL trainers.
    *   [**#5461**](https://github.com/huggingface/trl/pull/5461): Adds Vision-Language Model (VLM) support to `GOLDTrainer`.
*   **GRPO & Tool-Calling Enhancements:**
    *   [**#5832**](https://github.com/huggingface/trl/pull/5832): Introduces an optional tool observation prediction loss, allowing GRPO to supervise next-token cross-entropy on textual feedback returned by tool calls.
    *   [**#5833**](https://github.com/huggingface/trl/pull/5833) & [**#5729**](https://github.com/huggingface/trl/pull/5729): Fixes GRPO response schema overrides and patches `OpenRewardSpec` to properly discover task-scoped tools during rollouts.
    *   [**#5841**](https://github.com/huggingface/trl/pull/5841): Fixes a critical `AttributeError` in `vllm_mode="server"` where non-main data-parallel ranks failed to generate rollouts.
*   **Stability & Refactoring:**
    *   [**#5826**](https://github.com/huggingface/trl/pull/5826): Resolves `NaN` eval loss bugs that occurred when completion tokens were entirely truncated by prompt length.
    *   [**#5837**](https://github.com/huggingface/trl/pull/5837) **(WIP)**: A high-risk, one-shot refactor of `CPOTrainer` to modernize preference training paths.

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, the focus has shifted from basic PPO text-generation to complex, agentic workflows involving tool-calling, multimodal reasoning (Vision/Audio), and highly distributed asynchronous training (VLLM + Accelerate). TRL is actively bridging the gap between static open-source models and these production-grade requirements. By continually expanding precise training templates (`assistant_only_loss`) and rolling out robust environments for tool usage (`OpenRewardSpec`, observation losses), TRL remains the de facto open-source standard for aligning LLMs and VLMs using reinforcement learning.

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

# RL Daily Digest: verl
**Date:** 2026-05-26 | **Project:** [verl](https://github.com/volcengine/verl) | **Activity:** 3 Issues | 30 PRs

## 1. Today's Highlights
Today's development cycle heavily focused on **hardware acceleration and multi-backend compatibility**, alongside significant feature expansions for new **RL training algorithms** and **NP reasoning capabilities**. The community is actively fortifying verl’s infrastructure to reliably support large-scale, multi-GPU/NPU training across diverse frameworks (vLLM, Megatron, SGLang).

## 2. Releases
*   **None** recorded in the last 24 hours.

## 3. Important Issues
*   **GRPO Entropy Explosion ([#2738](https://github.com/verl-project/verl/issues/2738)):** A highly upvoted ongoing discussion (👍 2, 12 comments) regarding sudden entropy spikes that crash mathematical task training using GRPO, despite dataset and hyperparameter adjustments.
*   **Sequence Parallelism Instability with Qwen3.6-35B ([#6431](https://github.com/verl-project/verl/issues/6431)):** A newly opened bug reporting `NaN` gradient norms during the first training step when sequence parallelism is enabled. 
*   **Ascend NPU CI Failure ([#6458](https://github.com/verl-project/verl/issues/6458)):** Reported incompatibility between vllm018 and CANN versions triggering execution errors in the Ascend e2e CI pipeline.

## 4. Key PR Progress
**Algorithmic & Feature Expansions:**
*   **DPO Support ([#6441](https://github.com/verl-project/verl/pull/6441)):** The first PR (1/n) introducing a Direct Preference Optimization (DPO) dataset pipeline and collator.
*   **NP Reasoning Rewards ([#6465](https://github.com/verl-project/verl/pull/6465)):** Adds 10 Bootcamp NP data sources and rule-based validators for complex algorithmic tasks (e.g., graph coloring, Hamiltonian paths).
*   **MoE Router Replay ([#6325](https://github.com/verl-project/verl/pull/6325)):** Integrates VeOmni hooks for R2/R3 replay of Mixture-of-Experts routing decisions, optimizing actor updates.
*   **Agent Loop Reasoning Fix ([#6434](https://github.com/verl-project/verl/pull/6434)):** Adds a parser to strip `<think` blocks before tool extraction, fixing tool-call errors in reasoning models like Qwen3.

**Infrastructure, Scaling & Bug Fixes:**
*   **vLLM OOM Fix ([#6456](https://github.com/verl-project/verl/pull/6456)):** Resolves CUDA OOM during FSDP backward passes in HYBRID rollout mode by properly propagating `engine.sleep()` across `data_parallel_size > 1`.
*   **FSDP2 Offload Fix ([#6463](https://github.com/verl-project/verl/pull/6463)):** Fixes a critical device mismatch between FSDP2 offloading and weight transfers.
*   **Ascend NPU Upgrades ([#6374](https://github.com/verl-project/verl/pull/6374), [#6466](https://github.com/verl-project/verl/pull/6466), [#6462](https://github.com/verl-project/verl/pull/6462)):** Major bumps to CANN 9.0.0, Megatron 016, and updated NPU transformers to stabilize Ascend integrations.
*   **Multi-Hardware Abstraction Layer ([#6086](https://github.com/verl-project/verl/pull/6086)):** Introduces a unified platform abstraction layer for seamless plugin-based deployment across NVIDIA, Ascend, Cambricon, and Moore Threads hardware.
*   **Prefix KV Caching ([#6373](https://github.com/verl-project/verl/pull/6373)):** Enables `MooncakeStoreConnector` for pooling prefix KV with hard-reset on weight updates.

## 5. Why This Project Matters in Today's RL Landscape
In the rapidly evolving RLHF landscape (particularly post-GRPO), verl has become a critical open-source bridge for scaling complex RL paradigms (like DPO and MoE routing) to massive LLMs (e.g., 35B+ parameters). Today’s activity demonstrates verl's defining strength: **cross-platform, high-throughput orchestration**. By aggressively patching FSDP2 sequence parallelism bugs, streamlining multi-GPU/NPU memory management (`engine.sleep`), and abstracting hardware discrepancies (ROCm, Ascend, CUDA), verl is lowering the barrier to entry for researchers and engineers running billion-parameter RL training loops without compromising speed or stability.

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

### RL Daily Digest: `rl_games`
**Date:** 2026-05-26 | **Project:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

#### 1. Today's Highlights
Activity over the past 24 hours was exclusively focused on Pull Requests, with no new issues reported and zero new releases. The core maintainer (Denys88) pushed two significant PRs—merging long-awaited custom training callbacks and introducing out-of-the-box Apple Silicon GPU acceleration. 

#### 2. Releases
**None.** No new versions or tags were published on 2026-05-26.

#### 3. Important Issues
**None.** Zero new issues were created or updated in the last 24 hours, indicating a stable codebase or a period of feature-focused development over bug triage.

#### 4. Key PR Progress
*   **[#351 OPEN] Apple MPS Support & Envpool 1.2.5:** A major hardware compatibility update. The PR patches `rl_games` to support Apple's Metal Performance Shaders (MPS) by fixing hardcoded `float64` ops (which MPS doesn't support) in running mean/std calculations. It also bumps `envpool` to version 1.2.5, ensuring compatibility with NumPy 2.x.
    *   Link: [Denys88/rl_games/pull/351](https://github.com/Denys88/rl_games/pull/351)
*   **[#350 CLOSED] Custom Stop Callbacks:** This PR introduces an optional `stop_fn(algo) -> bool` callback, giving users programmatic control to halt training based on custom logic rather than rigid `score_to_win` or `max_epochs` thresholds. The feature is wired into PPO (continuous/discrete) and SAC, and functions correctly under multi-GPU setups. 
    *   Link: [Denys88/rl_games/pull/350](https://github.com/Denys88/rl_games/pull/350)

#### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a critical high-performance benchmark and training engine in the Reinforcement Learning ecosystem. Today's updates highlight two ongoing macro-trends in the RL landscape:
1.  **Hardware Democratization:** By actively patching Apple MPS compatibility, the project acknowledges the growing market share of Apple Silicon for local model prototyping and research.
2.  **Modern Python Ecosystems:** Updating dependencies for NumPy 2.x ensures the library avoids legacy dependency bottlenecks that frequently plague older scientific computing repos.
3.  **Flexible Training Loops:** The addition of granular stop callbacks allows researchers to build more complex, automated training pipelines (e.g., early stopping based on custom evaluation metrics without manual hacking of the core algorithms).

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

**RL Open-Source Ecosystem Daily Digest: Gymnasium** 
**Date:** 2026-05-26

Here is your daily brief on the Farama-Foundation/Gymnasium repository.

### 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours has been highly focused, driven by a single objective: advancing documentation and tutorials for the upcoming `MuJoCo-v5` environments. With one issue and one pull request receiving updates, community efforts remain locked into preparing accessible, beginner-friendly onboarding materials ahead of the highly anticipated Gymnasium 1.0.0 release.

### 2. Releases
*   **No new releases** were cut in the last 24 hours. The ecosystem remains in an active development and documentation phase.

### 3. Important Issues
*   **[#846 [OPEN] Proposal: Add Tutorials for MuJoCo based environments](https://github.com/Farama-Foundation/Gymnasium/issues/846)**
    *   **Context:** Opened in late 2023, this `good first issue` tracks the need for comprehensive MuJoCo tutorials. It outlines specific goals, including how to load custom quadruped robot models. 
    *   **Update:** Received fresh engagement yesterday (May 25), indicating sustained community momentum toward finalizing these educational resources, which are strictly tied to the timeline of Gymnasium 1.0.0.

### 4. Key PR Progress
*   **[#1584 [OPEN] docs: add MuJoCo parameter customization tutorial](https://github.com/Farama-Foundation/Gymnasium/pull/1584)**
    *   **Context:** Authored by `Lonny154`, this PR directly addresses part of Issue #846. 
    *   **Update:** Updated yesterday, this PR introduces a beginner-friendly tutorial for parameterizing MuJoCo environments. It uses `HalfCheetah-v5` to demonstrate how modifying `ctrl_cost_weight` via `gym.make` kwargs impacts reward shaping, maintaining strict reproducibility via fixed random seeds.

### 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for single-agent reinforcement learning in Python, Gymnasium's transition to version 1.0.0 is a critical milestone for the entire ML ecosystem. While developing new algorithms often takes the spotlight, the current PR and Issue activity prove that **infrastructure usability remains a top priority.** 

In today's RL landscape, where rapid prototyping and experiment reproducibility are paramount, lowering the barrier to entry for complex physics simulations like MuJoCo is vital. By stabilizing the `MuJoCo-v5` integration and providing robust, easy-to-follow tutorials on reward customization and model loading, Gymnasium ensures that both researchers and hobbyists can seamlessly transition from theoretical design to applied, continuous-control RL.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-05-26

### 1. Today's Highlights
PettingZoo experienced a quiet day regarding new releases and community issue submissions (0 new issues), but maintained steady momentum under the hood with 5 active Pull Requests. Today's focus was heavily skewed toward stability and security, featuring critical bug fixes for action masking tutorials, environment seeding reproducibility, and a patched path-traversal vulnerability. 

### 2. Releases
*   **None.** No new versions or tags were published in the last 24 hours.

### 3. Important Issues
*   **None.** There were 0 new or updated issues within the last 24 hours. 

### 4. Key PR Progress
Five pull requests saw updates today, with two being closed:

*   **[CLOSED] Tutorial CI & Action Masking Fix:** [PR #1339](https://github.com/Farama-Foundation/PettingZoo/pull/1339) resolves a failure in the `tutorial-test` CI pipeline. The `CustomEnvironment` tutorial was failing across all Python versions (3.11–3.14) due to a data type mismatch in `tutorial3_action_masking.py` (`step()` returned `np.int8` arrays, while `reset()` returned standard Python lists).
*   **[OPEN] Reproducibility Bug in `gin_rummy`:** [PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335) addresses a critical bug where `reset(seed=...)` silently overrode custom `knock_reward` / `gin_reward` configurations, reverting them to RLCard defaults and breaking reproducible RL experiments.
*   **[OPEN] Cooperative Pong Physics:** [PR #1336](https://github.com/Farama-Foundation/PettingZoo/pull/1336) introduces a patch for the butterfly `coop_pong` environment to fix faulty wall-bounce physics mechanics.
*   **[OPEN] Path Traversal Vulnerability:** [PR #1338](https://github.com/Farama-Foundation/PettingZoo/pull/1338) fixes a medium-severity path traversal exploit in `get_image()` (located in `knights_archers_zombies/src/img.py`), improving the library's supply chain and local security posture.
*   **[CLOSED] Documentation Refactor:** [PR #1337](https://github.com/Farama-Foundation/PettingZoo/pull/1337) cleaned up the documentation by rewriting the third-party "PettingZoo Dilemma Envs" to make the codebase simpler and more accessible.

### 5. Why This Project Matters in Today's RL Landscape
As the standard API for multi-agent reinforcement learning (MARL) environments, PettingZoo's reliability is foundational for RL researchers. Today's PRs highlight exactly why meticulous maintenance of such libraries is crucial: silent reward overriding during seeded resets ([PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335)) can invalidate weeks of MARL benchmarking by introducing irreproducible results. Similarly, patching path traversal vulnerabilities ([PR #1338](https://github.com/Farama-Foundation/PettingZoo/pull/1338)) ensures that the library remains secure for cloud-deployed training environments. By standardizing API behaviors (like enforcing uniform `np.int8` action masking, as in [PR #1339](https://github.com/Farama-Foundation/PettingZoo/pull/1339)), PettingZoo allows researchers to focus on developing cooperative and competitive agent architectures rather than debugging environment-level idiosyncrasies.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the RL open-source ecosystem daily digest for Stable Baselines3 based on the provided data.

### 1. Today's Highlights
Stable Baselines3 (SB3) experienced an extremely quiet day on 2026-05-26, with zero new pull requests, zero new issues, and no new releases. The only recorded activity was an update to a long-standing, critical bug report regarding Hindsight Experience Replay (HER).

### 2. Releases
* **None.** No new versions or patches were released in the last 24 hours.

### 3. Important Issues
* **Active Investigation:** [Bug] HER is not updating the done flag of HER transitions ([#627](https://github.com/DLR-RM/stable-baselines3/issues/627))
  * **Context:** Originally opened in Oct 2021, this issue highlights a flaw in SB3's Hindsight Experience Replay implementation. When HER resamples goals to create artificial "successful" trajectories, it correctly computes the new reward but fails to update the episode termination (`done`) flag. 
  * **Significance:** This is a critical algorithmic bug. In sparse reward environments, an incorrect `done` flag prevents Q-learning or advantage estimates from correctly bootstrapping state values, which can destabilize training or completely break the policy convergence for goal-oriented tasks. The issue saw renewed activity yesterday (May 25, 2026).

### 4. Key PR Progress
* **None.** No open or merged pull requests were updated in the past 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains a foundational cornerstone of the applied reinforcement learning ecosystem. While newer frameworks may focus on distributed training or novel architectures, SB3 is heavily relied upon for its clean, readable, and strictly standardized implementations of core algorithms (PPO, SAC, TD3, etc.). 

Issues like **#627** demonstrate the importance of long-term maintenance in open-source RL libraries. Because SB3 is heavily utilized by researchers and practitioners to establish baselines, subtle bugs in mathematical implementations—such as improperly handling termination states in off-policy replay buffers—can cascade into skewed benchmark results across the entire scientific community. Consistent maintenance of this repository is vital for ensuring reproducible and reliable RL research.

</details>