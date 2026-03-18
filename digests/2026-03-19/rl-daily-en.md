# RL Open Source Daily Digest 2026-03-19

> Generated: 2026-03-18 22:05 UTC | Projects covered: 15

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
The RL ecosystem on 2026-03-19 shows a clear bifurcation between high-velocity LLM post-training frameworks and stable, maintenance-mode general-purpose RL libraries. The center of gravity has shifted entirely toward LLM-centric RLHF/RL infrastructures (verl, TRL, AReaL, ROLL, Open Instruct), which are aggressively solving scaling bottlenecks, while traditional RL projects (SB3, PettingZoo) focus on governance and stability.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (Qwen3.5, MoE, Deadlocks) | High (47 PRs, FlashAttn, CPU Offload) | 0 | **Dominant**. Leading the charge in MoE support and hardware heterogeneity. |
| **TRL** | Medium (vLLM Crashes, DPO OOM) | High (Async GRPO, DPO Fixes) | 0 | **High**. Rapidly maturing RLHF algorithms and infrastructure robustness. |
| **AReaL** | Low (Rejection Sampling) | High (Async Gateway, Agents, VLM) | 0 | **High**. Architectural pivot toward asynchronous, agentic systems. |
| **Open Instruct** | None | Medium (32k Context, Distillation) | 0 | **Medium**. Critical engineering fixes for long-context training bottlenecks. |
| **ROLL** | Medium (Ascend NPU, VL Packing) | Medium (Vision DP, Type Hints) | 0 | **Medium**. Focused on hardware diversity (NPU) and multimodal efficiency. |
| **slime** | High (Megatron Hangs, OOM) | Low (Megatron/GLM Bridges) | 0 | **Medium**. Fighting stability battles at the inference/training interface. |
| **ROCK** | Low (Sandbox Config) | Low (Serverless Runtime) | 0 | **Low**. Iterating on serverless infrastructure capabilities. |
| **Stable Baselines3** | None | Low (Governance, MPS) | 0 | **Low**. Administrative focus on contribution quality standards. |
| **PettingZoo** | None | Low (Env Refactor) | 0 | **Low**. Long-term maintenance of specific environments. |
| **OpenRLHF** | None | Minimal (Logging/Profiling) | 0 | **Quiet**. Focus on observability tooling. |
| **Others** | None | None | 0 | **Inactive**. CleanRL, Gymnasium, Tianshou, rl_games, torchtune recorded no activity. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
-   **Asynchronous RL paradigms:** Both TRL (`AsyncGRPO` with staleness control) and AReaL (Async Rollout Gateway) are moving away from synchronous training loops to enable continuous, large-scale learning.
-   **Advanced Policy Optimization:** The ecosystem is iterating beyond standard PPO, with TRL implementing GRPO/GSPO and Open Inject integrating PPO/GAE support into GRPO workflows.
-   **Reasoning & Agentic Workflows:** Frameworks are adapting to support "thinking" chains (verl) and tool-calling agents (AReaL), reflecting the industry shift toward reasoning models.

**Engineering & Infrastructure Signals**
-   **Memory & Context Scaling:** Projects are hitting hardware walls and innovating around them: Open Instruct optimized RPC batching for 32k contexts, verl introduced CPU offloading for large models, and slime focused on sequence parallelism to mitigate OOM errors.
-   **Hardware Heterogeneity:** There is a concerted push to decouple from pure NVIDIA ecosystems, with ROLL stabilizing Huawei Ascend NPU support and verl bridging vLLM, SGLang, and TensorRT-LLM.
-   **Backend Decoupling:** Frameworks like AReaL and slime are refactoring to separate inference (rollout) and training backends (Megatron-LM, vLLM) into distinct, scalable services.

## Differentiation Analysis

-   **verl vs. TRL:** `verl` positions itself as the low-level "hardware plumber" for RL, focusing on granular support for MoE architectures (Qwen3.5) and multi-modal memory optimization. In contrast, `TRL` acts as the higher-level "algorithm hub," prioritizing the user experience of new algorithms (GRPO, DPPO) and integration with Hugging Face transformers.
-   **AReaL vs. slime:** Both target high-performance distributed RL, but `AReaL` is pivoting toward an "Agent OS" architecture (RPC gateways, tool calling), whereas `slime` is deeply entrenched in the mechanics of specific backend bridges (SGLang to Megatron), focusing on resolving low-level deadlocks and hangs.
-   **Open Instruct vs. The Field:** `Open Instruct` distinguishes itself by solving "extreme scale" problems—specifically long-context (32k) synchronization and offline distillation—targeting users who need to squeeze maximum MFU (Model FLOPS Utilization) out of large clusters.
-   **General RL (SB3/PettingZoo):** These projects have settled into a "maintenance & governance" phase, focusing on API stability and code quality (e.g., SB3's LLM contribution ban) rather than the rapid feature iteration seen in the LLM-RL sector.

## Community Momentum & Maturity

-   **The LLM-RL Wave is Peaking:** With over 47 PRs in a single day on `verl` alone, the momentum is overwhelmingly concentrated in LLM post-training. The community is rapidly commoditizing complex techniques like GRPO and MoE fine-tuning.
-   **Stabilization Phase:** The lack of releases across the board (0 releases for all tracked projects) suggests the ecosystem is in a collective "integration and stabilization" phase, prioritizing bug fixes for new model families (Qwen3) over new version bumps.
-   **Governance Friction:** The explicit ban on LLM-generated contributions in SB3 signals a maturity threshold where maintenance burden outweighs raw volume of pull requests—a trend likely to spread to larger frameworks as they age.

## Trend Signals

-   **The Rise of "Staleness" Management:** The specific focus on "staleness control" (TRL) and "rejection sampling" (AReaL) in async settings indicates that distributed RL is solving the theoretical problems of delayed gradients that were previously academic but are now practical bottlenecks.
-   **Vision RL Scaling Up:** The appearance of "Vision Data Parallelism" (ROLL) and specific VLM training fixes (verl, AReaL) signals that multi-modal RL is moving from "support" to "optimization," requiring the same parallelism strategies previously reserved for LLMs.
-   **Sandboxing for Reliability:** The work in `ROCK` on serverless runtimes and `SB3` on code quality reflects a broader trend toward reliable, reproducible RL environments, essential for the "Agent" ecosystems being built on top.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL
**Date:** 2026-03-19

Here is the daily analysis for the **ROLL (RL Open League)** framework based on repository activity.

## 1. Today's Highlights
The ecosystem is witnessing significant advancements in hardware compatibility and multimodal capabilities. Key focus areas include:
*   **Hardware Expansion:** Stabilization of Huawei Ascend NPU support and ongoing discussions for async training features.
*   **Multimodal Performance:** Introduction of Vision Data Parallelism (DP) for ViT computation and community requests for packing support in Vision-Language (VL) models.
*   **Code Quality:** A dedicated initiative to add strict type hinting to utility functions.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Hardware & Architecture (#282):** User inquiry regarding **Huawei Ascend** support scope, specifically asking if *async rollout* and *async training* are currently supported on NPU architectures.
*   **Multimodal Capabilities (#386):** Request for **packing support** in mcore-adapter Vision-Language models. Currently lacking, this feature is critical for training efficiency in VL tasks.
*   **Bug Reports:**
    *   **#379 (Closed):** `TypeError` regarding `linear_attention_type` in Qwen3.5-4B RLVR workflows (Resolved).
    *   **#390:** Logic bug in `MultipleChoiceBoxedRuleRewardWorker` regarding `response_level_rewards` assignment.

## 4. Key PR Progress
*   **Multimodal Scaling (#357):** [Open] Implements **Vision Data Parallelism** to distribute ViT computation across Ulysses Sequence Parallel ranks. This addresses computational bottlenecks when scaling Vision Transformers.
*   **NPU Support (#374, #385):** [Closed] Merged critical fixes for **Huawei Ascend NPU** bugs and updated documentation, ensuring basic configuration stability on non-GPU hardware.
*   **Refactoring (#388, #389):** [Open] Systematic addition of type hints to `roll/utils/functionals.py` to improve code maintainability and developer experience.

## 5. Why This Project Matters in Today's RL Landscape
**ROLL** continues to position itself as a production-grade, scalable RL framework by addressing the two biggest challenges in modern RL: **Hardware Diversity** and **Multimodal Scaling**.
*   **Breaking NVIDIA's Monopoly:** By actively fixing bugs and documenting flows for Huawei Ascend (#385, #374), ROLL is lowering the barrier to entry for large-scale RL training on alternative hardware.
*   **Optimizing Multimodal RL:** The Vision DP PR (#357) highlights a shift from simply "supporting" VL models to "optimizing" them via tensor and sequence parallelism, a necessity for training Foundation Models with RL.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK (alibaba/ROCK)
**Date:** 2026-03-19

### 1. Today's Highlights
Activity on 2026-03-19 focused on rapid bug remediation in the `SandboxManager` and continued progress in expanding serverless runtime capabilities. A bug regarding variable configuration was reported and resolved within 24 hours, while a significant feature PR for Alibaba Function Compute remains under review.

### 2. Releases
*   **None** recorded in the last 24 hours.

### 3. Important Issues
*   **[#647] [Bug] `_config` variable missing in `SandboxManager`**
    *   **Status:** Open
    *   **Context:** Reported by @FangwenDave, this issue involves a missing `_config` variable within the `SandboxManager` class, affecting environment initialization.
    *   **Link:** [alibaba/ROCK Issue #647](https://github.com/alibaba/ROCK/issues/647)

### 4. Key PR Progress
*   **[#648] [Bugfix] Correct memory size error message in sandbox manager**
    *   **Status:** **Closed** (Merged)
    *   **Impact:** Direct fix for Issue #647. Resolves the configuration variable error to restore stability to the Sandbox Manager.
    *   **Link:** [alibaba/ROCK PR #648](https://github.com/alibaba/ROCK/pull/648)
*   **[#643] [Feat] Add Alibaba Function Compute serverless runtime provider support**
    *   **Status:** Open
    *   **Details:** Introduces Alibaba Cloud Function Compute 3.0 (FC3) as a sandbox runtime provider. Key implementations include thread-safe CircuitBreakers for fault tolerance and WebSocket reconnection mechanisms.
    *   **Link:** [alibaba/ROCK PR #643](https://github.com/alibaba/ROCK/pull/643)

### 5. Why This Project Matters in Today's RL Landscape
ROCK is establishing itself as a critical infrastructure for **Scalable and Serverless RL**. The rapid resolution of sandbox configuration bugs (#647/#648) demonstrates a commitment to the stability required for long-horizon RL training. Furthermore, the integration of Function Compute (#643) signals a shift towards **elastic, event-driven RL** environments, allowing researchers to decouple simulation logic from fixed infrastructure constraints and reduce computational overhead during idle sampling phases.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-19

## 1. Today's Highlights
Activity in the `slime` repository focused heavily on maintenance and backend compatibility. The core team closed **5 PRs**, largely addressing integration points with **Megatron-LM** and **Docker** environments. Conversely, the issue tracker saw continued reports of critical runtime failures, specifically concerning training hangs and **OOM (Out of Memory)** errors during long-context training.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Megatron Backend Hangs (#1484):** A persistent issue where training freezes immediately after SGLang CUDA graph capture and Uvicorn server startup. This suggests a potential deadlock in the handoff between the SGLang inference engine and the Megatron training backend.
*   **Long-Context OOM (#1522):** Users are hitting memory walls training 4B models at 64K context length on H200s, despite enabling `sequence-parallel` and `dynamic-batch-size`.
*   **Instability Reports:** Additional reports include memory leaks in `colocate` mode during rollout (#1105) and actor unavailability errors (#1739).

## 4. Key PR Progress
*   **Megatron & MoE Compatibility:**
    *   [OPEN] **PR #1737**: Fixes a `ValueError` regarding token dispatcher types by propagating `moe_token_dispatcher_type` to the bridge provider, ensuring compatibility with newer Megatron versions.
    *   [CLOSED] **PR #1738**: Fixes for the GLM-4V Megatron bridge.
*   **Infrastructure Updates:**
    *   [CLOSED] **PR #1735**: Updated the slime-router to support PD (Prompt/Decode?) disaggregation and removed radix tree middleware.
    *   [CLOSED] **PR #1736**: Fixed `IndexCache` handling for MLA (Multi-Head Latent Attention) models in Docker environments.

## 5. Why This Project Matters
The `slime` framework serves as a critical bridge in the RL ecosystem, connecting high-performance inference engines (like SGLang) with distributed training backends (like Megatron-LM). Today's activity highlights the engineering challenges of maintaining this bridge—specifically managing memory pressure in long-context RL scenarios and synchronizing with rapid upstream changes in Megatron's MoE (Mixture of Experts) architecture.

---
*Data Source: [github.com/THUDM/slime](https://github.com/THUDM/slime)*

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-03-19

## 1. Today's Highlights
Activity on the AReaL repository remains high with significant architectural advancements. The community is pushing heavily toward **asynchronous system scaling** and **agentic capabilities**. Key focus areas include decoupling inference/training backends, introducing RPC-based gateways, and expanding multi-turn training support for Vision-Language Models (VLMs). There is also notable activity in enhancing determinism via KL divergence estimators.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Feature] Sequence/token level rejection sampling on async training** ([#1052](https://github.com/inclusionAI/AReaL/issues/1052))
    *   **Context:** Raised by @huaiyizhao, this issue proposes enhancing asynchronous training by implementing rejection sampling to handle staleness in data.
    *   **Significance:** This links to theoretical discussions on preventing "RL collapse" in delayed settings, which is critical for stabilizing large-scale distributed RL.

## 4. Key PR Progress
**Infrastructure & Architecture**
*   **Async Rollout Gateway ([#1043](https://github.com/inclusionAI/AReaL/pull/1043)):** Introduces a complete rollout gateway infrastructure (`areal/experimental/gateway/`) with RPC-based serving and OpenAI-compatible APIs.
*   **Backend Config Refactor ([#1044](https://github.com/inclusionAI/AReaL/pull/1044)):** Replaces the monolithic `allocation_mode` with granular `backend` fields per engine (Actor, Critic, Ref, etc.), allowing flexible parallelism configurations.
*   **Rollout Scale-Up ([#592](https://github.com/inclusionAI/AReaL/pull/592)):** Enables dynamic addition of rollout engines to running training jobs, moving away from static resource allocation.

**Agentic & Multi-Turn Training**
*   **Agent Service Microservice ([#1048](https://github.com/inclusionAI/AReaL/pull/1048)):** Adds infrastructure for multi-turn conversation agents with tool-calling support and a PydanticAI demo.
*   **VLM Multi-Turn Support ([#931](https://github.com/inclusionAI/AReaL/pull/931)):** Extends multi-turn training capabilities to Vision-Language Models, including automatic error recovery mechanisms.

**Stability & Tooling**
*   **KL Divergence Estimators ([#1054](https://github.com/inclusionAI/AReaL/pull/1054)):** Implements estimators to detect log prob divergence between inference and training phases, addressing nondeterminism in LLM inference.
*   **Streaming Fix ([#1053](https://github.com/inclusionAI/AReaL/pull/1053)):** Fixes `ResponseValidationError` in the `/chat/completions` endpoint when handling streaming responses.
*   **Docker Runtime Expansion ([#1051](https://github.com/inclusionAI/AReaL/pull/1051)) [CLOSED]:** Merged new AI coding tools (openclaw, ironclaw, etc.) into the runtime environment.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a production-grade framework for **post-training and agentic RL**. Unlike traditional static RL loops, today's updates highlight a shift toward **asynchronous, heterogeneous computing**—where inference (rollout) and training can scale independently. By standardizing OpenAI-compatible gateways and addressing VLM-specific training loops, AReaL is bridging the gap between research prototypes and scalable, service-oriented RL architectures required for modern "Reasoning" and "Agent" models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-19

## 1. Today's Highlights
The TRL ecosystem is seeing significant activity in **Advanced Policy Optimization** and **Infrastructure Robustness**. The main focus is on stabilizing the new **Group Relative Policy Optimization (GRPO)** implementations—specifically integrating **vLLM** for acceleration—and refining data handling in **DPO** to prevent memory issues. There is also a notable push toward **Asynchronous RL** workflows.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **vLLM Integration Crash in GRPO ([#5301](https://github.com/huggingface/trl/issues/5301)):**
    Users report that running `GRPO` with vLLM co-locate mode results in a crash due to a missing attribute in the model config. This impacts users trying to accelerate training with `Qwen/Qwen3-1.7B`.
    *   *Status:* Open
*   **DPO Memory Over-allocation ([#5304](https://github.com/huggingface/trl/issues/5304)):**
    A critical issue where `DPOTrainer` truncates sequences *after* padding, causing potential OOM errors. The data collator currently lacks awareness of `max_length`.
    *   *Status:* Closed (Likely addressed by PR #5305)
*   **GSPO Accuracy Stagnation ([#5298](https://github.com/huggingface/trl/issues/5298)):**
    Users executing the `gspo.py` example script report that while format rewards improve, accuracy rewards remain near zero.
    *   *Status:* Open

## 4. Key PR Progress
*   **Asynchronous GRPO MVP ([#5293](https://github.com/huggingface/trl/pull/5293)):**
    A major feature drop introducing `AsyncGRPOTrainer`. This MVP includes "staleness control" (`max_staleness`) to cancel rollouts from outdated model versions, moving TRL toward production-grade distributed RL.
*   **Fix: DPO Collation & Truncation ([#5305](https://github.com/huggingface/trl/pull/5305)):**
    Directly addresses Issue #5304 by updating `DPOTrainer` collators to truncate sequences *before* padding, optimizing memory usage for long-context preferences.
*   **Fix: GRPO vLLM Config Access ([#5302](https://github.com/huggingface/trl/pull/5302)):**
    A targeted patch fixing the attribute error in GRPO when accessing vLLM model configurations (fixing Issue #5301).
*   **Experimental: Divergence Proximal Policy Optimization ([#5117](https://github.com/huggingface/trl/pull/5117)):**
    Implementation of "Rethinking the Trust Region in LLM RL," aiming to improve off-policy regulation.
*   **Enhanced Reward Logging ([#5233](https://github.com/huggingface/trl/pull/5233)):**
    Introduces `log_extra` and `log_metric` hooks in GRPO/RLOO, allowing custom reward functions to log detailed metrics without hacking trainer states.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to bridge the gap between cutting-edge RL research and practical LLM fine-tuning. Today's activity highlights a maturing ecosystem:
1.  **Moving beyond Sync:** The push for **AsyncGRPO** and "staleness control" reflects the industry trend toward decentralized, large-scale model training where rollout generation and policy updates occur concurrently.
2.  **Hardware-Aware Optimization:** The focus on fixing vLLM integration bugs and memory allocation issues (DPO truncation) shows that TRL is prioritizing *efficiency* and *hardware utilization*—critical factors as model sizes (e.g., Qwen3) continue to grow.
3.  **Algorithmic Diversity:** By implementing variants like **DPPO** and fixing **GSPO**, TRL solidifies its position as the central hub for comparing and deploying the rapidly evolving landscape of RLHF algorithms.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL Daily Digest for OpenRLHF based on the provided data.

### 📅 RL Daily Digest: OpenRLHF
**Date:** 2026-03-19

#### 1. Today's Highlights
Activity on the OpenRLHF repository was minimal over the last 24 hours, with zero new issues raised and no new releases. The focus remains on iterative tooling improvements, specifically regarding training observability and performance profiling.

#### 2. Releases
*   **None.** No new stable versions or tags were published recently.

#### 3. Important Issues
*   **None.** No new community issues or bug reports were filed in the last 24 hours.

#### 4. Key PR Progress
*   **[OPEN] [PR #1195](https://github.com/OpenRLHF/OpenRLHF/pull/1195): Add grad norm logging and per-phase timing breakdown**
    *   **Author:** @yxs
    *   **Status:** Active (Updated 2026-03-18)
    *   **Summary:** This PR implements critical observability features by addressing roadmap item #568. It introduces logging for gradient norms (`grad norm`) and adds a breakdown of timing metrics for different training phases, which is essential for debugging convergence and optimizing throughput in distributed RLHF workloads.

#### 5. Why This Project Matters in Today's RL Landscape
As the standard for aligning Large Language Models (LLMs) shifts towards Reinforcement Learning from Human Feedback (RLHF), OpenRLHF remains a pivotal open-source infrastructure. While today’s updates are quiet, the progress in PR #1195 reflects the ecosystem's maturing needs: moving beyond basic implementation to **high-performance training diagnostics**, allowing researchers to fine-tune massive models with greater stability and efficiency.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-19

## 1. Today's Highlights
The verl ecosystem is witnessing a surge in activity surrounding **Qwen3.x model support** and **hardware heterogeneity**. With 47 PRs updated in the last 24 hours, the community is aggressively patching compatibility issues for Qwen3.5 MoE and dense models across vLLM and Megatron backends. A significant trend is the push towards **memory optimization** (CPU offloading) and **multi-modal RL** (Vision DP, Video processing), alongside efforts to stabilize asynchronous training workflows.

## 2. Releases
*   **No new releases** were cut in this window. The ecosystem appears focused on stabilizing the `v1.0.0-rc` candidates and integrating new model architectures.

## 3. Important Issues
*   **Qwen3.5 & MoE Instability:** Multiple high-priority reports indicate growing pains with the latest Qwen models.
    *   **[#5656]** Users report shape mismatches when training **Qwen3.5-A17B** using the Megatron-Bridge backend.
    *   **[#5633]** `RuntimeError` encountered during GRPO + FSDP2 training of **Qwen3-30B-A3B**.
    *   **[#5654]** Loading weights for **Qwen3.5** in vLLM is failing, prompting patch PRs.
*   **Multi-Turn Training Logic:** A crucial discussion in **[#5576]** highlights a "train/serve mismatch" where accumulated "thinking" content in multi-turn examples may be hurting model performance, suggesting a need for data preprocessing adjustments.
*   **Multi-GPU Deadlock:** **[#3350]** reports persistent initialization deadlocks in multi-GPU setups, contrasting with stable single-GPU performance.
*   **Roadmap Updates:**
    *   **Vision DP Roadmap [#5480]:** Proposes distributing whole images across Ulysses Sequence Parallelism ranks to reduce redundant ViT computation.
    *   **TensorRT-LLM Rollout [#5042]:** Continued focus on stabilizing TRT-LLM for RL rollout with a focus on Qwen3 support.

## 4. Key PR Progress
*   **Performance & Memory Optimization:**
    *   **[#5662]** integrates `flash_attn` cross-entropy loss into `FusedLinearForPPO` to boost throughput.
    *   **[#5651]** introduces optimizer parameter offloading to CPU for the Megatron engine, potentially doubling effective GPU memory for large models.
*   **Ecosystem & Model Support:**
    *   **[#5520]** integrates **Atropos** RL environments with verl's GRPO pipeline.
    *   **[#5652]** adds critical support for **Qwen3_5MoeForCausalLM** in vLLM patches.
    *   **[#5564]** implements dual-mode **LoRA support** for SGLang rollouts.
*   **Bug Fixes:**
    *   **[#5658]** (Closed/High Priority) fixed CI stability for DeepSeek models using Megatron.
    *   **[#5661]** patched FP8 utility compatibility for vLLM 0.15+ MoE models.

## 5. Why This Project Matters in Today's RL Landscape
Verl is establishing itself as the **"Swiss Army Knife" for LLM Post-Training**, bridging the gap between disparate inference engines (vLLM, SGLang, TensorRT-LLM) and training backends (FSDP2, Megatron-LM). Today's digest highlights its critical role in **commoditizing complex MoE training** (specifically Qwen3.5) and pushing the boundaries of **multi-modal RL**. By solving low-level distributed deadlocks and memory bottlenecks (CPU offloading), verl enables the open-source community to replicate and iterate on "reasoning" models (like thinking/chain-of-thought chains) and agentic workflows at scale.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-19

### 1. Today's Highlights
The Open Instruct ecosystem saw a surge in optimization and infrastructure activity, specifically targeting **long-context RL training** and **offline distillation**. Key developments include critical fixes for vLLM weight synchronization timeouts at 32k context lengths and the introduction of new distillation utilities. Additionally, the team has merged several performance improvements pushing DPO training efficiency (MFU) to new highs.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **No active issues** were updated in the last 24 hours.

### 4. Key PR Progress
*   **Scaling to 32k Context with vLLM** ([#1535](https://github.com/allenai/open-instruct/pull/1535))
    *   **Status:** Open
    *   **Details:** Addressed a critical bottleneck where weight syncs timed out (>120s) during 32k response length training. The fix consolidates ~200 per-parameter Ray RPCs into a single batched RPC per engine, significantly reducing event loop overhead.
*   **Offline Distillation Pipeline** ([#1534](https://github.com/allenai/open-instruct/pull/1534))
    *   **Status:** Open
    *   **Details:** "Part Two" of the distillation effort introduces a script for capturing teacher logits, expanding the repo's capabilities beyond standard RL fine-tuning.
*   **PPO/GAE Support in GRPO** ([#1462](https://github.com/allenai/open-instruct/pull/1462))
    *   **Status:** Open (Updated)
    *   **Details:** Ongoing work to integrate PPO-style training with a learned value model (GAE) directly into `grpo_fast.py`, offering an alternative to group-normalized rewards.
*   **vLLM Timeout Robustness** ([#1532](https://github.com/allenai/open-instruct/pull/1532))
    *   **Status:** Open
    *   **Details:** Proposed improvements to handle `TimeoutError` in actor health checks and weight sync threads, preventing training hangs on slower networks (e.g., RunPod).
*   **Merged: DPO Performance & Optimizers**
    *   **Muon Optimizer** ([#1533](https://github.com/allenai/open-instruct/pull/1533)): Integrated the Muon optimizer via `olmo_core` and `microsoft/dion`.
    *   **40% MFU Improvements** ([#1430](https://github.com/allenai/open-instruct/pull/1430), [#1440](https://github.com/allenai/open-instruct/pull/1440), [#1443](https://github.com/allenai/open-instruct/pull/1443)): A series of merges optimized data loading (non-blocking CUDA transfers) and added OLMo-core callbacks, solidifying DPO training efficiency.

### 5. Why This Project Matters in Today's RL Landscape
As RL fine-tuning shifts toward increasingly long context windows (32k+ tokens), infrastructure overhead often becomes the primary training bottleneck. Open Instruct’s latest updates are **critical signals for the industry**: they demonstrate that scaling RL to long contexts requires re-architecting communication primitives (batching RPCs) rather than just increasing hardware. Furthermore, the integration of PPO/GAE and offline distillation signals a convergence of RL methods, allowing practitioners to toggle between online RL (PPO/GRPO) and offline distillation within a single unified codebase.

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

# RL Daily Digest: PettingZoo
**Date:** 2026-03-19

### 1. Today's Highlights
Activity on the PettingZoo repository was minimal over the last 24 hours, with zero new issues or releases recorded. The primary focus was a significant update to the **Knights, Archers, and Zombies** environment, marking the first activity on this Pull Request since late 2025.

### 2. Releases
*   **None:** No new stable versions were tagged in the last 24 hours.

### 3. Important Issues
*   **None:** No new community issues or bug reports were filed yesterday.

### 4. Key PR Progress
*   **[OPEN] [Update knights_archers_zombies to v11](https://github.com/Farama-Foundation/PettingZoo/pull/1297)**
    *   **Author:** @dm-ackerman
    *   **Status:** Updated on 2026-03-18 (previously opened April 2025).
    *   **Summary:** This PR introduces a major refactor of the `knights_archers_zombies` environment.
        *   **API Changes:** Consolidates `vector_state`, `use_typemasks`, and `sequence_space` parameters into a single `obs_method` configuration to prevent invalid parameter combinations.
        *   **Fixes:** Resolves bugs related to initial agent spawning and other unstated logic errors.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains a critical infrastructure project for the **Multi-Agent Reinforcement Learning (MARL)** community. As an API standard akin to Gymnasium, it lowers the barrier to entry for complex multi-agent scenarios. Updates like PR #1297 are essential for maintaining usability; by simplifying observation space configurations (moving to `obs_method`), the library reduces the likelihood of user error during environment initialization, ensuring cleaner benchmarks for modern MARL algorithms.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (2026-03-19)

## 1. Today's Highlights
The Stable Baselines3 (SB3) repository saw low activity in terms of code merging but significant administrative updates. The primary focus was on repository governance, specifically addressing the role of AI coding assistants in contributions. Additionally, a long-standing proposal for Apple Silicon (MPS) support resurfaced in the activity logs.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Important Issues
*   **No active issues** were updated within the window.

## 4. Key PR Progress
Two Pull Requests recorded activity:

*   **[Governance] Update contribution guidelines regarding LLM usage ([#2231](https://github.com/DLR-RM/stable-baselines3/pull/2231))**
    *   **Status:** Closed
    *   **Author:** @araffin
    *   **Summary:** A significant policy update defining the boundaries for LLM/code assistant usage. The new guidelines explicitly prohibit contributions generated by LLMs unless initiated by a project maintainer. This move aims to manage maintenance burden and ensure code reliability/intent.
*   **[Feature] Use MPS device when available ([#951](https://github.com/DLR-RM/stable-baselines3/pull/951))**
    *   **Status:** Open
    *   **Author:** @araffin
    *   **Summary:** A long-running PR (originally opened in 2022) aiming to enable Metal Performance Shaders (MPS) for GPU acceleration on Apple Silicon. The PR also includes utility updates for logging `cloudpickle` versions to aid debugging.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the industry standard for reliable, beginner-friendly implementations of core Deep RL algorithms (PPO, SAC, TD3, etc.). While newer frameworks focus on massive scaling, SB3 is critical for the "long tail" of research and industrial applications that require pytorch simplicity without the overhead of complex distributed systems. The recent policy update on LLMs highlights a growing maintenance challenge in the open-source community: vetting AI-generated code that often looks correct but lacks nuance.

</details>