# RL Open Source Daily Digest 2026-03-18

> Generated: 2026-03-17 22:06 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-18 is characterized by a clear bifurcation: **LLM/Agentic RL frameworks** are seeing intense development activity focused on scaling, multimodal support, and hardware adaptation, while **classical Deep RL libraries** remain largely dormant or in maintenance mode.

The dominant themes across active projects (verl, AReaL, OpenRLHF, TRL, etc.) are:
1.  **The shift to Agentic RL:** Moving beyond single-turn chat to multi-turn tool use and context management.
2.  **GRPO Dominance:** Group Relative Policy Optimization is becoming the default algorithm for post-training, replacing or augmenting traditional PPO.
3.  **Hardware Fragmentation:** Intense focus on supporting alternative accelerators (Huawei Ascend/NPU) and optimizing GPU resource usage via colocation and FSDP2.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High | High | 0 | **Critical**. Leading edge of Agentic RL & GRPO stability. |
| **AReaL** | Moderate | High | 1 (v1.0.2) | **High**. Major release + infrastructure push (colocation/RPC). |
| **ROCK** | High (Cleanup) | Moderate | 1 (v1.4.2) | **High**. Pivot to serverless RL architectures. |
| **slime** | High | Moderate | 0 | **High**. Focus on distributed training memory hygiene. |
| **Open Instruct** | Low | High | 0 | **High**. Active GRPO/PPO unification and Ray orchestration. |
| **TRL** | Moderate | Moderate | 0 | **Moderate**. Stabilizing VLM support and Async GRPO. |
| **ROLL** | Low | Moderate | 0 | **Moderate**. Heavy focus on NPU/Ascend adaptation. |
| **OpenRLHF** | Low | Low | 0 | **Moderate**. Architectural migration to FSDP2. |
| **torchtune** | Low | Low | 0 | **Low**. Documentation and model support updates. |
| **Stable Baselines3** | None | 2 | 0 | **Low**. Minor hyperparameter feature additions. |
| **rl_games** | Low | None | 0 | **Low**. Debugging numerical stability. |
| **CleanRL / Gymnasium** | None | None | 0 | **Dormant**. No activity. |

## Shared Research & Engineering Directions

### Research & Algorithms
*   **GRPO as the New Standard:** Three major frameworks (**verl**, **Open Instruct**, **AReaL**) are heavily prioritizing *Group Relative Policy Optimization* (GRPO). **Open Instruct** (PR #1462) is even unifying PPO and GRPO to allow seamless switching between value-based and group-normalized advantage estimation.
*   **Agentic Context Management:** As models like *Kimi Researcher* and *Qwen3.5* push for long-horizon reasoning, **verl** (Issue #5375) and **AReaL** (PR #1048) are tackling context compression and session-level memory, acknowledging that current infra fails on multi-turn tool-use trajectories.
*   **Multimodal RL:** Support for Vision-Language Models (VLMs) and "Omni" models (text/image/audio/video) is a priority for **TRL** (VLM DPO fixes) and **AReaL** (Issue #922).

### Engineering & Infrastructure
*   **GPU Colocation & Efficiency:** To reduce VRAM overhead, frameworks are moving to share GPUs between inference and training engines. **AReaL** (PR #999) and **verl** are leading this "time-sharing" approach.
*   **Hardware Abstraction (NPU/Ascend):** A distinct trend in Chinese-developed frameworks (**verl**, **ROLL**, **slime**) is the aggressive fixing of support for Huawei Ascend NPUs, breaking the NVIDIA monopoly on large-scale RL training.
*   **Distributed Backend Migration:** The ecosystem is shifting away from DeepSpeed. **OpenRLHF** (PR #1176) and **AReaL** are stripping out DeepSpeed in favor of native PyTorch **FSDP2** and DTensor for better stability and compiler integration.
*   **Serverless RL:** **ROCK** (PR #643) is pioneering "Serverless RL" by integrating Alibaba Cloud Function Compute, abstracting away cluster management for environment simulation.

## Differentiation Analysis

*   **verl vs. OpenRLHF vs. TRL:**
    *   **verl** is positioning itself as the high-performance engine for *reasoning* models (Math/Code) and agents, optimizing specifically for throughput (R3 Router Replay) and hardware diversity.
    *   **OpenRLHF** serves as the stable, "classic" bridge for applying RLHF to new models (like Qwen3.5) but is currently undergoing a heavy backend refactor to FSDP2.
    *   **TRL** focuses on the *HuggingFace* ecosystem integration, prioritizing accessibility, VLM support, and developer experience over raw distributed scale.

*   **The "Full Stack" vs. "Algorithm" Libraries:**
    *   **AReaL** and **ROCK** are evolving into "Full Stack" platforms, handling RPC gateways, microservices, and serverless deployment.
    *   **Stable Baselines3** and **rl_games** remain "Algorithm" libraries for specific use cases (classical control/simulation), showing that the center of gravity in the RL community has shifted decisively toward LLM post-training.

## Community Momentum & Maturity
*   **Post-Training Dominance:** The volume of activity in LLM post-training (verl, AReaL) vastly outweighs classical RL (SB3, CleanRL). The "RL" label now effectively implies "LLM Alignment/Reasoning" in the open-source mainstream.
*   **Stability vs. Velocity:** **TRL** and **Open Instruct** are in a maturation phase, fixing edge cases (VLM truncation, API rate limits) and documenting behaviors. **verl** and **slime** are in a high-velocity phase, tackling bleeding-edge instabilities like entropy spikes in GRPO and IPC memory leaks in distributed settings.
*   **Hardware Lock-in Reduction:** The concerted effort to support **Ascend/NPU** across multiple repositories (ROLL, verl, slime) signals a community-driven push to decouple large-scale RL infrastructure from strictly NVIDIA hardware.

## Trend Signals
1.  **Rise of Asynchronous RL:** The appearance of "Async GRPO" in **TRL** and "Serverless" runtimes in **ROCK** signals a move away from tightly coupled synchronous training loops, aiming to decouple generation from optimization for better hardware utilization.
2.  **DeepSpeed Deprecation:** The migration to FSDP2 in **OpenRLHF** and **AReaL** confirms a broader industry trend: the distributed training stack is consolidating around native PyTorch primitives rather than third-party optimization libraries.
3.  **Context Management as a Feature:** With **verl** explicitly proposing "Context Compression" for agents, expect other frameworks to follow suit in optimizing KV cache and context windows for multi-turn RL training.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Daily Digest for **2026-03-18**.

### 📊 ROLL Daily Digest (2026-03-18)

#### 1. Today's Highlights
The primary focus for the ROLL ecosystem today is **Hardware Adaptation and Interoperability**. The community and core team are actively consolidating support for **Huawei Ascend NPUs**, with multiple PRs addressing Megatron compatibility and bug fixes. Additionally, significant strides were made in framework flexibility with the merging of support for Rock native environments and PEFT model saving strategies.

#### 2. Releases
*   **No new releases** recorded in the last 24 hours.

#### 3. Important Issues
*   **[Compatibility] Megatron `linear_attn` Parameter Deprecation** (Issue [#370](https://github.com/alibaba/ROLL/issues/370) - CLOSED):
    *   **Summary:** Resolved a breaking change where the `linear_attn` parameter in ROLL's Qwen3.5 adapter conflicted with the latest Megatron-LM release (which replaced it with `experimental_attention_variant`).
    *   **Impact:** Critical for users running Qwen models on the latest Megatron backbone.
*   **[Feature] Huawei Ascend Support Status** (Issue [#282](https://github.com/alibaba/ROLL/issues/282) - OPEN):
    *   **Summary:** Ongoing discussion regarding the depth of support for Huawei Ascend series, specifically querying the availability of async rollout and async training capabilities.

#### 4. Key PR Progress
*   **[NPU] Ascend Bug Fixes & Megatron Integration** (Open):
    *   PR [#385](https://github.com/alibaba/ROLL/pull/385): Fixes basic configuration bugs to ensure stability on Ascend NPUs.
    *   PR [#380](https://github.com/alibaba/ROLL/pull/380) (WIP): Integrates `mindspeed` to enable Megatron support specifically for NPU architectures.
*   **[Feature] Training Strategy Enhancements** (Merged):
    *   PR [#383](https://github.com/alibaba/ROLL/pull/383): Added support for PEFT (Parameter-Efficient Fine-Tuning) model saving within `MegatronTrainStrategy`, optimizing storage for large-scale RL fine-tuning.
    *   PR [#384](https://github.com/alibaba/ROLL/pull/384): Introduced support for "Rock" native environments, including a demo for agent rollout and training loops.
*   **[Docs] Hardware Documentation** (Open):
    *   PR [#374](https://github.com/alibaba/ROLL/pull/374): Updated documentation for Huawei Ascend support and bumped dependencies (e.g., `vllm.lora`).

#### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) for alignment, the bottleneck shifts to training infrastructure costs and hardware lock-in. ROLL is positioning itself as a **hardware-agnostic, scalable RL framework**. By aggressively integrating support for alternative hardware like Huawei Ascend alongside standard NVIDIA stacks, ROLL lowers the barrier to entry for large-scale RL experiments, democratizing access to state-of-the-art model alignment techniques.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem (2026-03-18)

## 1. Today's Highlights
The ROCK (Alibaba) ecosystem saw significant activity today, headlined by the release of **v1.4.2** and a major community contribution proposing **Alibaba Cloud Function Compute (FC3) serverless runtime support**. The team also executed a massive backlog cleanup, resolving over 15+ historical issues focused on SDK robustness and performance optimization.

## 2. Releases
*   **[v1.4.2](https://github.com/alibaba/ROCK/releases/tag/v1.4.2)**
    *   **Focus:** Infrastructure & Deployment.
    *   **Change:** Integrated OSS (Object Storage Service) upload capabilities (PR [#641](https://github.com/alibaba/ROCK/pull/641)).

## 3. Important Issues
*   **Serverless Runtime Proposal ([#644](https://github.com/alibaba/ROCK/issues/644)):** A new proposal aims to introduce Alibaba Cloud Function Compute 3.0 as a sandbox runtime provider, marking a potential shift towards hybrid/serverless RL architectures.
*   **Performance & Architecture Cleanup:** The team closed a significant backlog of optimization issues, including:
    *   **SDK Optimizations:** Reusing SSL contexts to reduce overhead in multi-threaded scenarios ([#250](https://github.com/alibaba/ROCK/issues/250)) and decoupling SDK/Deployment modules ([#263](https://github.com/alibaba/ROCK/issues/263)).
    *   **Cluster Efficiency:** Migrating `get_status` API logic from read to write clusters to reduce Ray head pressure ([#267](https://github.com/alibaba/ROCK/issues/267), [#116](https://github.com/alibaba/ROCK/issues/116)).

## 4. Key PR Progress
*   **[OPEN] feat: add Alibaba Function Compute serverless runtime provider support ([#643](https://github.com/alibaba/ROCK/pull/643)):**
    *   **Author:** @insight-bit
    *   **Significance:** This is the most critical active PR. It implements FC3 support, a CircuitBreaker for fault tolerance, and WebSocket reconnection logic. If merged, this significantly lowers the barrier for running RL environments in the cloud.
*   **[CLOSED] upload by oss ([#641](https://github.com/alibaba/ROCK/pull/641)) & upload to specified oss ([#642](https://github.com/alibaba/ROCK/pull/642)):**
    *   Merged to enable flexible artifact storage, addressing the immediate needs of v1.4.2.

## 5. Why This Project Matters in Today's RL Landscape
As RL systems scale from single workstations to distributed clusters, **infrastructure overhead** becomes the primary bottleneck. ROCK continues to distinguish itself by solving the "plumbing" of distributed RL. By optimizing Ray cluster interactions (Issue #116, #237) and now potentially integrating **Serverless/FC3 runtimes** (PR #643), ROCK is moving towards a "Serverless RL" paradigm. This allows researchers to scale training and environment simulation without managing persistent underlying compute infrastructure, a key trend for 2026.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-18

## 1. Today's Highlights
Activity on the `slime` repository (an advanced RL training framework) remains high with **12 issues updated** and **2 critical PRs**. The focus is heavily on **stability for large-scale training** (fixing memory leaks and IPC issues) and **expanding model support** (DeepSeek-V3 and Qwen3.5 integration). Several users reported friction in resuming training from checkpoints and handling long-context multimodal workloads.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **CUDA IPC Memory Leaks:** Issue [#1391](https://github.com/THUDM/slime/issue/1391) highlights persistent `503 Service Unavailable` errors during long-time RL training, potentially linked to resource exhaustion (addressed by PR #1731 below).
*   **Qwen3.5 Integration Failures:** Users report initialization and training errors with the new Qwen3.5-27B model ([#1730](https://github.com/THUDM/slime/issue/1730), [#1732](https://github.com/THUDM/slime/issue/1732)), indicating breaking changes in model configurations or compatibility layers.
*   **Long-Sequence OOM:** Issue [#1523](https://github.com/THUDM/slime/issue/1523) discusses Out-Of-Memory errors during long-sequence training (>30k tokens) specifically caused by entropy backward tensors accumulating on the final pipeline stage.
*   **Multimodal Limitations:** Users are noting a lack of support for Video modal inputs in the current Megatron-Bridge ([#1583](https://github.com/THUDM/slime/issue/1583)) and requesting conversion tools for Qwen3-VL MoE models ([#1510](https://github.com/THUDM/slime/issue/1510)).

## 4. Key PR Progress
*   **[MERGED/CLOSED] Fix CUDA IPC Cache Leaks:** PR [#1731](https://github.com/THUDM/slime/pull/1731) by @zhuzilin addresses a critical memory leak where `ForkingPickler` created permanent CUDA IPC cache entries during weight updates. This is a key stability fix for distributed training.
    *   *Evidence:* "Fix (in `update_weights`) explicitly calls `torch.cuda.ipc_collect()`..."
*   **[OPEN] DeepSeek-V3 Compatibility:** PR [#1734](https://github.com/THUDM/slime/pull/1734) fixes `rope_theta` resolution for DeepSeek-V3 bridges to accommodate changes in Transformers 5.x `RotaryEmbeddingConfigMixin`.

## 5. Why This Project Matters in Today's RL Landscape
The `slime` framework appears to be pushing the boundaries of **high-throughput LLM post-training**. The volume of issues related to **long-context sequences** (30k+ tokens), **multimodal bridges**, and **complex distributed architectures** (MoE, Pipeline Parallelism) suggests it is a cutting-edge testbed for scaling RL on massive models (e.g., Qwen, DeepSeek). Today's focus on IPC memory hygiene and observability hooks ([#1728](https://github.com/THUDM/slime/issue/1728)) underscores the maturity required to move from experimental RL loops to production-grade persistent training clusters.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL Daily Digest: 2026-03-18

## 1. Today's Highlights
The AReaL ecosystem shows significant momentum with the release of **v1.0.2**, officially introducing **Qwen3.5 support**. The development focus is heavily split between **infrastructure hardening** (LoRA, GPU colocation, RPC gateways) and **agentic capabilities** (new Agent Service microservices).

## 2. Releases
### **v1.0.2**
*   **Key Feature:** Official support for **Qwen3.5** model architecture.
*   **Notes:** A community-focused release acknowledging new contributors.
*   [View Release](https://github.com/inclusionAI/AReaL/releases/tag/v1.0.2)

## 3. Important Issues
*   **Multimodal RL Roadmap:** Issue **#922** proposes RL support (GRPO) for **Omni multimodal models** (Qwen3-Omni, Qwen2.5-Omni), targeting text, image, audio, and video inputs.
*   **Gateway Integration Bug:** Issue **#1046** reports a `ResponseValidationError` when the AReaL gateway processes responses from the `openclaw` tool, marked as a *good first issue*.
*   **Synchronous RL Clarification:** Issue **#1034** (Closed) confirmed that setting `rollout.max_head_offpolicyness=0` effectively switches AReaL to synchronous mode, clarifying partial rollout capabilities.

## 4. Key PR Progress
*   **Architecture & Colocation:**
    *   **PR #999** & **PR #1035**: Implementing **colocated on-policy training** where training and inference engines share GPUs (time-sharing), bypassing NCCL limitations via direct tensor passing.
    *   **PR #1044**: Refactoring API allocation modes for granular backend control per engine (actor, rollout, critic).
*   **LoRA Infrastructure:**
    *   **PR #1000** & **PR #1015**: Massive push for LoRA support on the Archon engine, integrating FSDP2/DTensor compatibility and PEFT checkpointing.
*   **Agentic & RPC Services:**
    *   **PR #1048**: Introduces a complete **Agent Service microservice** infrastructure for multi-turn conversations and tool calling.
    *   **PR #1043**: Adds a **Rollout Gateway** with OpenAI-compatible APIs and RPC-based inference serving.
    *   **PR #1051**: Expansion of the Docker runtime to include AI coding tools (openclaw, ironclaw, etc.).

## 5. Why This Project Matters in Today's RL Landscape
AReaL is evolving beyond a standard RL training framework into a **full-stack RL infrastructure**. By solving critical engineering challenges like **GPU colocation** (sharing resources between inference and training to reduce VRAM overhead) and standardizing **RPC-based gateways**, AReaL is positioning itself as the backend of choice for scaling complex RL workflows (like GRPO) on modern large language and multimodal models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Transformer Reinforcement Learning)
**Date:** 2026-03-18

## 1. Today's Highlights
The TRL ecosystem is currently pivoting toward two major frontiers: **Agent Reliability** and **Advanced Policy Optimization (GRPO)**. Activity over the last 24 hours reveals a concentrated effort by maintainers to stabilize Vision-Language Model (VLM) support within DPO and lay the groundwork for asynchronous generation in Group Relative Policy Optimization (GRPO).

## 2. Releases
**No new releases** were recorded in the last 24 hours. The project appears to be in a development phase, likely accumulating features for the targeted **v1.0** milestone (tracked in Issue #4374).

## 3. Important Issues
*   **VLM DPO Regressions Resolved:** Two critical issues regarding DPOTrainer's handling of Vision-Language Models have been closed.
    *   [Issue #5285](https://github.com/huggingface/trl/issues/5285): Fixed silent data corruption where `truncation_mode="keep_end"` dropped image tokens.
    *   [Issue #5283](https://github.com/huggingface/trl/issues/5283): Fixed `IndexError` crashes when `max_length` was set for VLMs.
*   **GSPO Training Instability:** A new open issue reports that the GSPO (Group Shannon Policy Optimization) example script fails to converge on accuracy rewards.
    *   [Issue #5298](https://github.com/huggingface/trl/issues/5298)

## 4. Key PR Progress
*   **Async GRPO Implementation ([PR #5293](https://github.com/huggingface/trl/pull/5293)):** Maintainer @qgallouedec opened a significant PR introducing asynchronous capabilities to GRPO. This suggests a move toward more efficient, non-blocking generation loops for online RL.
*   **VLM DPO Stabilization:** Following the issue reports, PRs [ #5286](https://github.com/huggingface/trl/pull/5286) (Prevent corruption) and [ #5284](https://github.com/huggingface/trl/pull/5284) (Support max_length) were merged, ensuring robust VLM training in DPO workflows.
*   **Distillation Buffer for GOLD ([PR #5137](https://github.com/huggingface/trl/pull/5137)):** Merged implementation of a generation buffer for `GOLDTrainer`, enabling efficient distillation by decoupling generation from optimization steps.
*   **Agent Guidelines ([PR #5294](https://github.com/huggingface/trl/pull/5294)):** A cultural shift in the repo involves adding explicit guidelines to `AGENTS.md` discouraging the use of `hasattr`/`getattr`, aiming to reduce technical debt often introduced by AI-generated code.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to be the bridge between generative LLM capabilities and rigorous RL algorithms. Today's activity highlights the library's maturation from text-only preference tuning (DPO) to **multi-modal RL (VLMs)** and **agentic workflows**. The specific focus on fixing truncation logic for images and implementing asynchronous GRPO signals that TRL is optimizing for the heavy compute loads and complex state spaces required by modern Agentic RL systems.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-18

## 1. Today's Highlights
Activity on the OpenRLHF repository was moderate but technically significant. The community is actively engaging with the latest model releases, specifically **Qwen3.5**, while a major architectural overhaul to **FSDP2** continues to progress through the PR pipeline.

## 2. Releases
*   **None.** No new stable versions were tagged in the last 24 hours.

## 3. Important Issues
*   **Compatibility Alert: Qwen3.5 Training Failure** ([#1194](https://github.com/OpenRLHF/OpenRLHF/issues/1194))
    *   **Context:** A user encountered a runtime crash while training `qwen3.5-4b` using `openrlhf-0.9.5` via the `train_ppo_ray.py` workflow.
    *   **Implication:** This suggests potential incompatibilities or configuration gaps in the current stable release (`0.9.5`) regarding the newer Qwen3.5 architecture. This is a critical watch point for users adopting the latest LLMs.

## 4. Key PR Progress
*   **Architectural Shift: FSDP2 Support & DeepSpeed Deprecation** ([#1176](https://github.com/OpenRLHF/OpenRLHF/pull/1176))
    *   **Status:** Updated (Open)
    *   **Summary:** This PR (superseding #1115) introduces support for native PyTorch FSDP2 and removes legacy DeepSpeed dependencies.
    *   **Significance:** This marks a strategic pivot away from DeepSpeed, likely aiming to reduce overhead and improve stability with native PyTorch sharding, a growing trend in the distributed RL ecosystem.

## 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a cornerstone of the open-source RLHF (Reinforcement Learning from Human Feedback) ecosystem. As LLMs evolve rapidly (e.g., Qwen3.5), the project serves as the bridge for applying advanced PPO/Reward Model training to state-of-the-art architectures. The migration toward **FSDP2** highlights the community's current shift toward native, compiler-friendly distributed backends, moving away from the fragmentation caused by custom DeepSpeed configurations.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-18

## 1. Today's Highlights
The verl ecosystem is seeing intense activity around **Agentic RL** and **Next-Gen Model Support (Qwen3.5/Qwen3-VL)**. A significant new Pull Request was opened today to support context management for agentic training, directly addressing recent SOTA methodologies like *Kimi Researcher*. Additionally, the community is actively debugging performance bottlenecks in GRPO training and addressing hardware compatibility issues on NPUs (Ascend) and newer vLLM versions.

## 2. Releases
*   **No new releases** detected in the last 24 hours.
*   *Note:* Users are currently pinning specific nightly builds (e.g., `verlai/verl:vllm017.latest`) to access bleeding-edge features like Router Replay (R3).

## 3. Important Issues
*   **Roadmap & Strategy:** Issue #4880 outlines the **verl 26Q1 Roadmap**, highlighting the transition to a new default model engine and deprecation of the legacy engine.
*   **Agentic Training RFC:** Issue #5375 proposes **Context Compression for Agentic Training**. The author notes that context management is critical for modern reasoning models (e.g., *Kimi Researcher*, *Qwen3.5*), and current frameworks lack this infra.
*   **GRPO Training Instability:** Issue #2738 reports a persistent issue where **entropy spikes unexpectedly** during GRPO training on math tasks, causing training crashes. This remains a key discussion point for algorithm stability.
*   **Hardware Compatibility:**
    *   Issue #5586 highlights version conflicts preventing the use of **Router Replay (R3)** with stable verl versions due to vLLM constraints.
    *   Issue #5479 reports shape mismatch errors when training **Qwen3 MoE** on NPU (Ascend) hardware.

## 4. Key PR Progress
*   **Agentic RL (Context Management):** PR #5636 initiated work on **supporting agentic RL with context management**, implementing multi-trajectory and session-level GRPO.
*   **Performance Optimizations:**
    *   PR #5632 optimized the text filter process for **Qwen3.5 + AIME data**, significantly speeding up data preprocessing on newer transformers versions.
    *   PR #5635 fixed a silent scoring failure in Ray workers caused by `signal.alarm()` usage in `math_verify`.
*   **New Features & Engines:**
    *   PR #5592 introduced **On-Policy Distillation** for the FSDP engine, allowing knowledge transfer from a vLLM teacher server.
    *   PR #5520 is integrating the **Atropos RL environment** with verl's GRPO pipeline.
    *   PR #5407 is adding **NeMo-Automodel** as an alternative training engine.
*   **Model Support:** PR #5599 and closed PR #5381 focus on stabilizing **Qwen3.5 support** (LoRA/MTP) via Megatron-Bridge and fixing conversion issues (Issue #5603).

## 5. Why This Project Matters in Today's RL Landscape
verl is establishing itself as a critical infrastructure for **post-training and reasoning models**. Unlike general-purpose ML libraries, verl is aggressively optimizing for the specific constraints of modern RLHF/RLVR (Reinforcement Learning from Verifiable Rewards):
1.  **Agentic Capabilities:** By tackling context management and tool use (Issue #5375, PR #5636), verl is moving beyond simple chat models to complex, long-horizon agents.
2.  **Hardware Agility:** The simultaneous focus on NVIDIA (NVFP4 QAT, PR #5254) and NPU/Ascend support (PR #5560) positions it as a cross-platform standard for large-scale RL.
3.  **Algorithmic Diversity:** Native support for GRPO, R3 (Router Replay), and distinct architectures like Qwen3-MoE demonstrates a commitment to the cutting edge of efficient RL training techniques.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL Daily Digest: torchtune
**Date:** 2026-03-18

## 1. Today's Highlights
The torchtune ecosystem saw quiet but focused activity, primarily centered on **usability and documentation**. Key developments include the closure of a community-driven initiative to clarify custom dataset creation and ongoing work to expand model support for the upcoming **Gemma3** architecture.

## 2. Releases
*   **None** recorded in the last 24 hours.

## 3. Important Issues
*   **[#2012 [CLOSED] Add custom dataset section in Basics](https://meta-pytorch/torchtune/issue/2012)**
    *   **Context:** This issue highlighted a gap in the "Basics" documentation regarding the integration of custom message transforms with `SFTDataset`.
    *   **Significance:** Closing this issue marks an improvement in the developer experience (DX), reducing the friction for practitioners looking to fine-tune models on niche, proprietary data formats—a common requirement in applied RLHF pipelines.

## 4. Key PR Progress
*   **[#2956 [CLOSED] docs: add custom datasets section in basics](https://meta-pytorch/torchtune/pr/2956)**
    *   **Author:** @biefan
    *   **Status:** Closed (merged).
    *   **Details:** Directly addresses Issue #2012. This PR introduces an end-to-end guide for building custom datasets, specifically demonstrating how to pair custom message transforms with the standard `SFTDataset`.
*   **[#2485 [OPEN] [WIP] Gemma3 support](https://meta-pytorch/torchtune/pr/2485)**
    *   **Author:** @krammnic
    *   **Status:** Open / Work In Progress.
    *   **Details:** Active development continues on integrating the **Gemma3** model into the library. This feature support is critical for keeping the tune ecosystem compatible with the latest open-weights model releases.

## 5. Why This Project Matters in Today's RL Landscape
While **torchtune** is primarily a fine-tuning library, it serves as a foundational layer for the modern **Reinforcement Learning from Human Feedback (RLHF)** stack. The updates today emphasize the project's maturity:
1.  **Data Pipeline Flexibility:** The new documentation on custom datasets empowers researchers to move beyond standard benchmarks (like Alpaca) to RL-specific datasets involving complex reward modeling and preference pairs.
2.  **Model Agility:** The ongoing work on Gemma3 ensures that practitioners have immediate access to state-of-the-art (SOTA) architectures for policy and value networks immediately upon release.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-18

## 1. Today's Highlights
Activity in the last 24 hours indicates a strong push towards stabilizing **Group Relative Policy Optimization (GRPO)** and enhancing **PPO** capabilities. The team merged critical fixes for distributed training reliability (handling HuggingFace API rate limits) and merged quality-of-life improvements for monitoring via Slack alerts. There is also notable activity in benchmarking hybrid models and fixing evaluation edge cases.

## 2. Releases
No new releases detected.

## 3. Important Issues
*   **[OPEN] #1296:** A request for **OLMo-2 1B post-training data** (loss curves and training time estimates on 8xH100s).
    *   *Context:* While created in Dec 2025, this issue saw activity yesterday. It highlights community demand for transparency regarding the computational efficiency of post-training stages (SFT/RLHF) on specific hardware clusters.
    *   [Link](https://github.com/allenai/open-instruct/issues/1296)

## 4. Key PR Progress

### Core Algorithms & Training Mechanics
*   **PPO & GRPO Unification (#1462):** Progress is ongoing on adding **PPO-style training with a learned value model** (GAE) to `grpo_fast.py`. This allows switching between GRPO (group-normalized rewards) and PPO (value-based advantage estimation), offering flexibility in RLHF strategies.
    *   [Link](https://github.com/allenai/open-instruct/pull/1462)
*   **GRPO Orchestration (#1399):** Continued work on the main entry point for GRPO using OLMo-core's Trainer and Ray actors. This PR is part of a larger refactor (5 of 5) to solidify the GRPO pipeline.
    *   [Link](https://github.com/allenai/open-instruct/pull/1399)
*   **GPU Test Reliability (#1531):** A fix was opened to correct a regex in `detect_gpu_tests_skip.sh` that previously failed to match brackets correctly due to Extended Regular Expression (ERE) handling.
    *   [Link](https://github.com/allenai/open-instruct/pull/1531)

### Infrastructure & Reliability
*   **Distributed Training Fix (#1528) [CLOSED]:** Resolved a critical race condition where multiple Ray actors and the main process exhausted HuggingFace API rate limits. The fix implements a `snapshot_download` step in the main process to cache the model locally before actors spawn.
    *   [Link](https://github.com/allenai/open-instruct/pull/1528)
*   **Notification Systems (#1527, #1529) [CLOSED]:** Merged support for `SLACK_EMAIL_ADDRESS` and unified the alert interface (`--send_slack_alerts`) across DPO and GRPO scripts to improve experiment monitoring.
    *   [Links](https://github.com/allenai/open-instruct/pull/1527) | [1529](https://github.com/allenai/open-instruct/pull/1529)

### Evaluation & Rewards
*   **Reward Parsing (#1530):** A fix was opened to ensure GSM8K reward verification preserves explicit **plus/minus signs** in answers, preventing misclassification of signed numerics.
    *   [Link](https://github.com/allenai/open-instruct/pull/1530)
*   **Hybrid Model Benchmarking (#1425):** Experiments are running with a hybrid model using `flash-linear-attention`, pending an upstream merge in `vllm`.
    *   [Link](https://github.com/allenai/open-instruct/pull/1425)

## 5. Why This Project Matters in Today's RL Landscape
As the field moves beyond standard RLHF, **Open Instruct** serves as a critical bridge between research and production-grade infrastructure. By actively integrating **GRPO** (an algorithm popularized by DeepSeekMath and similar architectures) alongside traditional **PPO**, the project is democratizing access to diverse optimization strategies.

Furthermore, today's focus on **Ray orchestration** and **HuggingFace integration** fixes addresses the exact pain points currently facing RL engineers: managing distributed compute clusters effectively while maintaining stable data pipelines. This repository remains a bellwether for how major open-source model developers (like AllenAI) structure reproducible post-training pipelines.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-03-18
**Repository:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

### 1. Today's Highlights
Activity on the `rl_games` repository was minimal over the last 24 hours, with no new code changes or releases. The focus remains on stability troubleshooting, specifically regarding a long-standing issue with numerical instability that saw a brief update today.

### 2. Releases
*   **None:** No new tags or releases were published in the last 24 hours.

### 3. Important Issues
*   **Numerical Instability (NaNs) in Continuous Control:**
    Issue [#333](https://github.com/Denys88/rl_games/issues/333) remains open and was updated today. The author reports frequent `NaN` values in `info/kl`, losses, and shaped rewards when using the `a2c_continuous` algorithm.
    *   **Key Detail:** The instability persists even with `fixed_sigma` enabled; using learned sigma results in immediate failure.
    *   **Implication:** This suggests potential edge cases in variance initialization or gradient clipping handling within the continuous action distribution, critical for users training robotic control tasks.

### 4. Key PR Progress
*   **None:** No pull requests were opened, updated, or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Despite the current low activity, `rl_games` remains a foundational library in the Deep Reinforcement Learning ecosystem. It serves as a primary benchmark for **Isaac Gym** and **Isaac Lab** workflows, offering highly optimized PyTorch implementations of PPO and A2C for massive parallel simulation. Issues like #333 are vital indicators of the numerical sensitivity inherent in high-throughput, GPU-accelerated RL training pipelines.

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
**Date:** 2026-03-18

### 1. Today's Highlights
Activity on Stable Baselines3 (SB3) was limited to two new Pull Requests. Both submissions originate from the same contributor and aim to enhance algorithm flexibility and environment compliance. No new releases or issues were logged in the last 24 hours.

### 2. Releases
*   **None** for 2026-03-18.

### 3. Important Issues
*   **None** updated in the last 24 hours.

### 4. Key PR Progress
Two structural improvement PRs were opened, though both lack filled templates and appear LLM-generated.

*   **[PR #2230](https://github.com/DLR-RM/stable-baselines3/pull/2230) | feat: add qf_learning_rate for independent actor/critic LRs**
    *   **Context:** Targets TD3, SAC, and DDPG.
    *   **Proposal:** Introduces a distinct `qf_learning_rate` parameter for the critic optimizer. Currently, SB3 uses a single `learning_rate` for both actor and critic.
    *   **Significance:** Decoupling learning rates is a common fine-tuning technique. This feature aligns SB3 with patterns seen in [SBX (Stable Baselines Jax)](https://github.com/araffin/sbx) and remains fully backward compatible.

*   **[PR #2229](https://github.com/DLR-RM/stable-baselines3/pull/2229) | fix: pass reset options/seeds during auto-reset**
    *   **Context:** Addresses handling of `options` and `seed` arguments.
    *   **Proposal:** Ensures that `set_options()` and `seed()` values are correctly propagated to `env.reset()` during automatic resets triggered by termination/truncation.
    *   **Significance:** Critical for reproducibility and environments utilizing specific reset options, ensuring behavior in `DummyVecEnv` and `SubprocVecEnv` remains consistent with user intent.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 (SB3) remains the industry standard for reliable, PyTorch-based implementations of core deep reinforcement learning algorithms. While newer frameworks focus on massive scaling or JAX/Flax implementations, SB3 acts as the critical baseline for research reproducibility and educational purposes. PRs like **#2230** highlight the project's continued maturation, moving beyond "one-size-fits-all" hyperparameters to offer the granularity required by modern practitioners, solidifying its role as the "scikit-learn" of reinforcement learning.

</details>