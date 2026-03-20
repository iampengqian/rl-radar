# RL Open Source Daily Digest 2026-03-21

> Generated: 2026-03-20 22:02 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-21 shows clear stratification. **LLM-focused RLHF/GRPO frameworks** (verl, TRL, OpenRLHF, Open Instruct, AReaL, slime) dominate activity, aggressively integrating new model architectures (Qwen3.5, DeepSeek V3) and optimizing for distributed training. **General-purpose RL libraries** (Stable Baselines3) remain in maintenance mode, focusing on stability. **Infrastructure projects** (ROLL, ROCK) are iterating on hardware compatibility and backend scaling, while educational/minimalist repositories (CleanRL, Gymnasium) saw no activity.

The primary vector of innovation is the convergence of **asynchronous distributed training**, **multimodal tool-calling agents**, and **memory-efficient backend migrations** (FSDP2, vLLM).

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 4 | 5+ | 0 | 🔥 High momentum on new model support (Qwen3.5/DeepSeek) and agentic examples (2048 game). |
| **TRL** | 3 | 7+ | 1 (v0.29.1) | 🚀 Major architectural refactoring for AsyncGRPO and multimodal tool support. |
| **Open Instruct** | 0 | 16 | 0 | 🏗️ Infrastructure heavy; migration to OLMo-core and vLLM optimization. |
| **AReaL** | 2 | 4 | 0 | 🔀 Decoupling backends (Megatron/FSDP) and unifying data serialization layers. |
| **OpenRLHF** | 1 | 2 | 0 | ✅ Stabilization via FSDP2 merge and Ray serialization fixes. |
| **slime** | 1 (closed) | 2 | 0 | 🛠️ Maintenance; Docker patches and loss masking for Qwen3.5. |
| **ROLL** | 0 | 2 | 0 | 🔌 Hardware expansion (CoreX BI-V150) and doc improvements. |
| **Stable Baselines3**| 1 | 3 | 0 | 🛡️ Strict maintenance; quality control on contributions. |
| **ROCK** | 0 | 1 | 0 | 🔇 Low activity; proxy interface merge. |
| **Others*** | 0 | 0 | 0 | 💤 No activity. |

*\*Others include: CleanRL, Gymnasium, PettingZoo, rl_games, Tianshou, torchtune.*

## Shared Research & Engineering Directions

### Research Directions
*   **Agentic Reasoning & Tool Use:** There is a unified shift from static NLP tasks to agentic workflows. **TRL** introduced image-returning tools for Vision-Language-Action models; **verl** added examples for game-playing (2048) and scientific equation discovery (LLM-SR).
*   **Algorithmic Staleness Handling:** As training scales, "stale" data in asynchronous loops is a recognized problem. **AReaL** (Issue #1052) and **TRL** (PR #5320) are both implementing mechanisms to cancel or reject outdated rollouts/tasks to prevent "RL collapse."
*   **Group Relative Policy Optimization (GRPO):** GRPO is solidifying as the standard algorithm for complex reasoning tasks, with explicit implementations or examples popping up across **verl**, **TRL**, **Open Instruct**, and **slime**.

### Engineering & Infrastructure Directions
*   **Backend Decoupling & Flexibility:** Projects are moving away from monolithic backends. **AReaL** (PR #1044) is explicitly separating allocation modes (FSDP vs. SGLang), while **OpenRLHF** merged FSDP2 support to improve memory sharding strategies.
*   **Weight Sync Optimization:** Efficiently transferring weights between training and inference engines is a critical bottleneck. **Open Instruct** optimized vLLM broadcasting for 32k contexts, and **verl** is addressing buffer transfers for DeepSeek V3.
*   **Precision & Hardware Diversity:** FP16 instability on large models is driving fixes in **verl**, while **ROLL** and **AReaL** are expanding support for non-NVIDIA hardware (CoreX, NPU/Ascend) and specialized architectures (Megatron-Bridge).

## Differentiation Analysis
*   **verl vs. Open Instruct:** **verl** is positioning itself as the "agentic innovator," rapidly integrating experimental examples (2048, LLM-SR) and new model architectures. **Open Instruct** acts as the "production testbed," focusing on rigorous documentation, OLMo-core integration, and long-context stability.
*   **TRL vs. OpenRLHF:** **TRL** is evolving into a comprehensive framework for *multimodal* and *asynchronous* agents, heavily refactoring core trainers. **OpenRLHF** focuses on being a lean, stable "infrastructure layer," prioritizing FSDP2 integration and distributed serialization fixes over feature breadth.
*   **AReaL vs. ROLL/ROCK:** **AReaL** is pursuing a "heterogeneous systems" approach, allowing granular mixing of backends (Megatron + SGLang). **ROLL** and **ROCK** appear more focused on enterprise/hardware-specific scaling (CoreX support, cluster proxies).

## Community Momentum & Maturity
*   **High Momentum (Growth Phase):** **verl** and **TRL** show the highest velocity, driven by the rapid release of new model families (Qwen3.5) and the demand for agentic training loops.
*   **High Maturity (Stabilization Phase):** **OpenRLHF** and **Open Instruct** are in a refinement stage, closing complex infrastructure PRs (FSDP2, OLMo-core) rather than opening exploratory issues.
*   **Maintenance Phase:** **Stable Baselines3**, **ROCK**, and **slime** show lower volume but high specificity in updates, indicating they serve stable user bases with targeted fixes rather than chasing every new model release.

## Trend Signals
1.  **The Rise of "Async-First" Architectures:** The synchronous training loop is dying for LLMs. The concurrent development of `AsyncGRPO` in TRL and rejection sampling in AReaL signals that 2026 is the year of fault-tolerant, asynchronous distributed RL.
2.  **SFT is Merging into RL:** The line between Supervised Fine-Tuning and RL is blurring. Projects like **slime** and **Open Instruct** are deeply integrating SFT optimizations (loss masking, OLMo-core SFT) directly into RL pipelines.
3.  **Hardware Fragmentation:** The ecosystem is preparing for a post-NVIDIA-dominant landscape. Support for Ascend NPU (verl), CoreX (ROLL), and generic Megatron bridges (AReaL) indicates that RL infrastructure is becoming hardware-agnostic out of necessity.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL Ecosystem
**Date:** 2026-03-21 | **Focus:** Alibaba ROLL (Reinforcement Learning Open Opportunity League)

Here is the technical digest based on the last 24 hours of activity.

## 1. Today's Highlights
Activity in the ROLL repository over the last 24 hours focused on **hardware expansion and documentation refinement**. The community saw a push for new backend compatibility with **CoreX BI-V150**, alongside a closed effort to better articulate the value proposition of the **RLix** job management layer.

*   **Activity Summary:** 0 Issues, 2 PRs (1 Open, 1 Closed), 0 Releases.

## 2. Releases
*   **None recorded** for 2026-03-21.

## 3. Important Issues
*   **No updates** in the last 24 hours.

## 4. Key PR Progress

### 🟢 New Feature Support
*   **[PR #393] Add CoreX BI-V150 compatibility support**
    *   **Status:** OPEN
    *   **Author:** @lxzlxzliuxuzhao
    *   **Analysis:** This PR introduces support for the **CoreX BI-V150** architecture. This suggests an expansion of ROLL's hardware acceleration capabilities beyond standard NVIDIA/AMD stacks, aiming for heterogeneous computing compatibility in RL training clusters.
    *   **Link:** [alibaba/ROLL #393](https://github.com/alibaba/ROLL/pull/393)

### 📝 Documentation & Utility
*   **[PR #392] Revise RLix description for clarity and detail**
    *   **Status:** CLOSED
    *   **Author:** @taoluo
    *   **Analysis:** This merged PR improves the documentation for **RLix**, specifically focusing on its functionality for managing RL jobs and optimizing GPU utilization. This reflects a maturation of the project's user interface layer.
    *   **Link:** [alibaba/ROLL #392](https://github.com/alibaba/ROLL/pull/392)

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, the bottleneck has shifted from algorithm availability to **resource efficiency and hardware diversity**.

1.  **Heterogeneous Infrastructure:** The move to support CoreX BI-V150 ([PR #393](https://github.com/alibaba/ROLL/pull/393)) signals that ROLL is positioning itself as a hardware-agnostic framework, critical for organizations looking to optimize costs by mixing different accelerator types.
2.  **GPU Orchestration:** As RL models scale, GPU utilization becomes the primary cost driver. The focus on clarifying **RLix** ([PR #392](https://github.com/alibaba/ROLL/pull/392)) underscores the project's maturity in handling distributed job scheduling and resource fragmentation—key differentiators against less mature open-source baselines.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK
**Date:** 2026-03-21 | **Project:** Alibaba/ROCK

Here is the reinforcement learning open-source ecosystem update for the last 24 hours.

### 1. Today's Highlights
Activity on the **alibaba/ROCK** repository remains in a maintenance phase with **0 active issues** and **0 new releases** in the last 24 hours. The repository saw the closure of a single Pull Request related to infrastructure enhancement, indicating backend hardening rather than feature expansion.

### 2. Releases
*   **None** (No new tags or releases published on 2026-03-21).

### 3. Important Issues
*   **None** (No open issues updated in the last 24 hours).

### 4. Key PR Progress
The development focus was on codebase maintainability and interface management:

*   **[CLOSED] [PR #650](https://github.com/alibaba/ROCK/pull/650) - `add proxy interface`**
    *   **Author:** zhongwen666
    *   **Status:** Merged/Closed (Updated 2026-03-20)
    *   **Analysis:** This PR, referencing Issue #649, introduces a proxy interface. While not a direct algorithmic update, this enhancement suggests an architectural improvement for distributed communication or data routing within the ROCK framework.

### 5. Why This Project Matters in Today's RL Landscape
**ROCK (Reinforcement Learning on Cluster Knowledge)** is a critical infrastructure piece in the modern RL ecosystem, particularly for industrial-scale applications. As RL moves from isolated experiments to massive, distributed decision-making systems (e.g., recommendation engines and automated logistics), the efficiency of cluster communication becomes the bottleneck. Although daily activity appears low, maintenance updates like the **proxy interface (#650)** are essential for ensuring scalability and stability in high-throughput environments.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-03-21

## 1. Today's Highlights
Activity in the last 24 hours focused on **infrastructure maintenance** and **expanding model support**. The team merged a critical Docker patch for SGLang and advanced a Pull Request to support Qwen3.5 multi-turn Supervised Fine-Tuning (SFT). A legacy issue regarding FP8 training on Nvidia B200 hardware was also cleaned up.

## 2. Releases
*   **No new releases** recorded for 2026-03-21.

## 3. Important Issues
*   **[#953 [CLOSED] [BUG] Qwen3-30B-A3B RL Training with FP8 rolling encountered an error on B200](https://github.com/THUDM/slime/issues/953)**
    *   **Context:** An error occurred during FP8 inference/training workflows on Nvidia B200 GPUs using the `run-qwen3-30b-a3b-fp8-two-nodes.sh` script.
    *   **Status:** Issue closed by author after approx. 4 months.

## 4. Key PR Progress
*   **[#1743 [CLOSED] [docker] update sglang patch](https://github.com/THUDM/slime/pull/1743)**
    *   **Summary:** Updates the Docker environment patch for SGLang, likely ensuring compatibility with the latest inference backends.
    *   **Status:** Merged (Created and Closed on 2026-03-20).

*   **[#1742 [OPEN] Support qwen3.5 loss mask for multi-turn SFT](https://github.com/THUDM/slime/pull/1742)**
    *   **Summary:** Introduces support for `qwen3.5` specific loss masking. This fixes a `jinja2.exceptions.TemplateError` caused by the default legacy `qwen` mask type, which is incompatible with Qwen3.5's multi-turn chat templates.
    *   **Status:** Active review (Updated 2026-03-20).

## 5. Why This Project Matters in Today's RL Landscape
The `slime` repository remains a critical infrastructure hub for Large Language Model (LLM) alignment. Today's updates highlight the project's agility in adapting to the rapidly evolving model ecosystem—specifically **Qwen3.5**. The focus on **loss masking for multi-turn SFT** indicates a maturation of RL workflows beyond single-turn prompts, while the updates to **SGLang** and **FP8** on next-gen hardware (B200) reinforce slime's role as a high-performance framework for production-level Reinforcement Learning from Human Feedback (RLHF).

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-21

## 1. Today's Highlights
Activity in the AReaL ecosystem remains high with a focus on **infrastructure robustness** and **backend flexibility**. The community is actively refactoring the distributed execution layer (PRs #1067, #1044) while integrating support for third-party high-performance backends like Megatron (PR #1056). A new "good first issue" regarding rejection sampling (Issue #1052) signals a push toward more sophisticated asynchronous training stability mechanisms.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Feature] Sequence/token level rejection sampling (Issue #1052)**
    *   **Status:** Open | **Labels:** `enhancement`, `good first issue`
    *   **Context:** Authored by huaiyizhao, this issue proposes implementing rejection sampling to handle staleness in asynchronous training. It cites external research on "RL collapse" regarding stale data handling, indicating a theoretical pivot to stabilize async RL loops.
    *   **Link:** [inclusionAI/AReaL #1052](https://github.com/inclusionAI/AReaL/issues/1052)
*   **[Bug] OpenAI Endpoint Streaming Failure (Issue #1065)**
    *   Users reported crashes when initiating online RL training with `stream=true`. This correlates directly with the fix proposed in PR #1053 (see below).
    *   **Link:** [inclusionAI/AReaL #1065](https://github.com/inclusionAI/AReaL/issues/1065)

## 4. Key PR Progress
*   **[Refactor] Decoupling Backend Allocation (PR #1044)**
    *   **Priority:** High | **Status:** Open
    *   **Significance:** A major architectural shift. It replaces the centralized `allocation_mode` string with explicit per-engine `backend` fields (e.g., separating FSDP for training and SGLang for inference). This removes implicit logic, allowing users to mix parallelism strategies (like `fsdp:d4` + `sglang:d4t2`) within a single workflow.
    *   **Link:** [inclusionAI/AReaL #1044](https://github.com/inclusionAI/AReaL/pull/1044)
*   **[Infra] Unified Serialization in Data Proxy (PR #1067)**
    *   **Priority:** High | **Status:** Open
    *   **Significance:** Simplifies the RPC data layer by replacing dual-path serialization logic with a unified `serialize_value` approach. This cleanup reduces technical debt in the data proxy and likely improves throughput for RTensor transport.
    *   **Link:** [inclusionAI/AReaL #1067](https://github.com/inclusionAI/AReaL/pull/1067)
*   **[Feature] Megatron-Bridge Adaptation (PR #1056)**
    *   **Status:** Open
    *   **Significance:** Initial integration of **Megatron-Bridge**, offering an alternative to the standard backends. This is critical for scaling LLM post-training to models with billions of parameters where tensor parallelism efficiency is paramount.
    *   **Link:** [inclusionAI/AReaL #1056](https://github.com/inclusionAI/AReaL/pull/1056)
*   **[Fix] Streaming in Chat/Completions Endpoint (PR #1053)**
    *   **Status:** Open
    *   **Significance:** Resolves a `ResponseValidationError` where the API failed to handle `AsyncGenerator` streams properly. This fix is essential for compatibility with clients expecting OpenAI-compatible streaming behavior.
    *   **Link:** [inclusionAI/AReaL #1053](https://github.com/inclusionAI/AReaL/pull/1053)

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself not just as a training loop library, but as a **heterogeneous distributed systems framework** for LLM post-training. Today’s updates—specifically the move to explicit backend fields (#1044) and Megatron integration (#1056)—demonstrate a maturity shift away from "magic" auto-allocation toward transparent, configurable, and scalable infrastructure. This allows researchers to optimize the "goodput" of RLHF by mixing distinct parallelism strategies (e.g., SGLang for fast rollout, Megatron/FSDP for stable gradient updates) within a single experiment.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-03-21

## 1. Today's Highlights
The TRL ecosystem is witnessing a significant architectural shift toward **asynchronous reinforcement learning** and **multimodal tool integration**. Activity today is dominated by a series of PRs (5 interconnected patches) refactoring the `AsyncGRPO` (Group Relative Policy Optimization) trainer to support stale task cancellation and structured rollout dataclasses. Concurrently, the release of **v0.29.1** addresses critical multimodal indexing errors and tool-calling support for SFT and GRPO workflows.

## 2. Releases
### **v0.29.1**
*   **Key Fixes:** Resolved an `IndexError` related to `mm_token_type_ids` across SFT, GRPO, and RLOO trainers ([PR #5178](https://github.com/huggingface/trl/pull/5178)). It also patched `prepare_multimodal_messages` to correctly handle `tool_calls` and `tool` roles ([PR #5212](https://github.com/huggingface/trl/pull/5212)).
*   **Impact:** Essential update for users fine-tuning Vision-Language Models (VLMs) or agents with tool-calling capabilities.

## 3. Important Issues
*   **VLM & GRPO Incompatibility ([#5269](https://github.com/huggingface/trl/issues/5269)):** A "High Importance" bug reports that `Qwen3.5-0.8` fails during GRPO training with `vllm 0.17.0` due to missing parameter mapping. This highlights integration friction between TRL and the latest vLLM engines.
*   **Llama-3.2 SFT Regression ([#5138](https://github.com/huggingface/trl/issues/5138)):** Users report improper training dynamics on `Llama-3.2-3B-Instruct` following the removal of `DataCollatorForCompletionOnly`, suggesting recent changes to loss masking may have introduced regressions.
*   **Tool Suffix Formatting ([#5317](https://github.com/huggingface/trl/issues/5317)):** A specific formatting bug was identified where `GRPOTrainer` misses newline tokens between completion EOS and tool suffixes for Qwen3/3.5 models.

## 4. Key PR Progress
*   **Async GRPO Refactoring (The "5/5" Series):**
    *   Author **@AmineDiro** pushed a major overhaul of the `AsyncGRPOTrainer`.
    *   **Structural Refactor ([PR #5318](https://github.com/huggingface/trl/pull/5318)):** Introduced `RolloutCompletion` dataclasses to replace parallel arrays, improving code maintainability.
    *   **Staleness Control ([PR #5320](https://github.com/huggingface/trl/pull/5320)):** Added logic to cancel "stale" in-flight tasks where the rollout worker lags behind the current model version.
    *   **Metrics & Tooling ([PR #5322](https://github.com/huggingface/trl/pull/5322), [PR #5321](https://github.com/huggingface/trl/pull/5321)):** Separated tool metrics computation and added dynamic `is_done` inspection for generation loops.
*   **Multimodal Tool Support ([PR #5323](https://github.com/huggingface/trl/pull/5323)):**
    *   Author **@sergiopaniego** extended `environment_factory` to allow tools to return image content blocks, moving beyond text-only tool responses. This is a critical step toward agentic VLA (Vision-Language-Action) models.
*   **New Algorithm: SDPO ([PR #4935](https://github.com/huggingface/trl/pull/4935)):**
    *   Open PR adds **Self-Distillation Policy Optimization (SDPO)**, utilizing high-reward trajectories from the model's own history to create dense learning signals.

## 5. Why This Project Matters in Today's RL Landscape
TRL is bridging the gap between static supervised fine-tuning and dynamic, agentic RL. Today's activity underscores two major trends in the open-source RL landscape:
1.  **Asynchronous Rollouts:** As models and context windows grow, synchronous training loops are becoming bottlenecks. The `AsyncGRPO` updates reflect a move toward decoupled, fault-tolerant distributed training architectures similar to production-level systems like SEER or RLHF pipelines at scale.
2.  **Agentic Multimodality:** By fixing `mm_token_type_ids` and enabling image-returning tools, TRL is evolving from a text-only RLHF library into a framework for training **Visual Agents**—models that can see, reason, and execute tools based on visual feedback.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-21

### 1. Today's Highlights
OpenRLHF shows continued momentum in stabilizing distributed training architectures and expanding model compatibility. The last 24 hours saw the closure of two significant Pull Requests focused on **FSDP2 integration** and **Ray serialization robustness**. Meanwhile, community attention remains focused on compatibility with the latest Qwen3.5 model series.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.
*   *Context:* The latest stable version remains `openrlhf-0.9.5` (referenced in Issue #1194).

### 3. Important Issues
*   **[Compatibility] Support for Qwen3.5 Training (#1194)**
    *   **Status:** Open
    *   **Summary:** Users are encountering fatal errors when attempting to train **Qwen3.5-4B** using the current PPO/Ray implementation.
    *   **Technical Detail:** The execution fails during the `forward` pass in `train_ppo_ray.py`, suggesting potential breaking changes in the Qwen3.5 architecture or tokenizer that are currently unhandled by the standard OpenRLHF pipeline.
    *   **Link:** [Issue #1194](https://github.com/OpenRLHF/OpenRLHF/issues/1194)

### 4. Key PR Progress
*   **[Architecture] FSDP2 SFT/RL/RM Implementation (#1197)**
    *   **Status:** Closed (Merged)
    *   **Impact:** A major structural update replacing the backend with FSDP2 (Fully Sharded Data Parallel 2). This PR modernizes the trainer's ability to handle Sharding Strategies for SFT, RL, and Reward Models, improving memory efficiency for large-scale training.
    *   **Link:** [PR #1197](https://github.com/OpenRLHF/OpenRLHF/pull/1197)

*   **[Bug Fix] Ray Serialization in Colocate Mode (#1199)**
    *   **Status:** Closed (Merged)
    *   **Impact:** Resolves a `RuntimeError` caused by DeepSpeed's `get_global_grad_norm()` returning non-serializable objects.
    *   **Technical Detail:** In colocate mode, moving gradient norms from a GPU actor to a CPU PPOTrainer triggered Ray's pickle serialization failure (attempting to deserialize CUDA objects on CPU). The fix wraps values with `float()` to ensure plain Python types are passed.
    *   **Link:** [PR #1199](https://github.com/OpenRLHF/OpenRLHF/pull/1199)

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) becomes the standard for aligning Large Language Models (LLMs), OpenRLHF remains a critical open-source infrastructure layer. While proprietary APIs dominate headlines, OpenRLHF provides the granular control needed for custom fine-tuning loops. The recent merge of **FSDP2 support** signals a shift toward more memory-efficient, high-availability training necessary for the next generation of 100B+ parameter models, ensuring the open community can compete with closed-source RL pipelines.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-21

## 1. Today's Highlights
The verl ecosystem is seeing significant activity in expanding model support and training paradigms. Key trends include:
*   **Model Expansion:** Rapid integration of **Qwen3.5** (LoRA, MTP, GRPO) and **DeepSeek V3** architectures.
*   **New Training Scenarios:** Community members are pushing verl into agentic RL with examples for the **2048 game** (GRPO) and scientific equation discovery (**LLM-SR**).
*   **Hardware & Precision:** Active fixes for **FP16** instabilities on large models and **NPU** (Ascend) backend support.

## 2. Releases
*   **No new releases** recorded in the last 24 hours. The community remains focused on development branches.

## 3. Important Issues
*   **FP16 Training Instability:** Users report errors when training **Qwen3.5-35B-A3B** in FP16, while BF16 works fine ([#5671](https://github.com/verl-project/verl/issues/5671)).
*   **Checkpointing Memory Spikes:** High CPU memory usage/OOM during checkpointing with the default `fully_reshardable` optimizer setting. Users suggest switching defaults to `dp_reshardable` ([#5670](https://github.com/verl-project/verl/issues/5670)).
*   **Tool Calling Latency:** Abnormal latency observed in tool-calling scenarios during fully async training on MI308 platforms ([#5646](https://github.com/verl-project/verl/issues/5646)).
*   **DeepSeek V3 Buffer Transfer:** Feature request to include buffers (e.g., `e_score_correction_bias`) in weight transfers to rollout engines to prevent mismatches ([#5688](https://github.com/verl-project/verl/issues/5688)).

## 4. Key PR Progress
*   **[Feat] Qwen3.5 & GRPO Support:** Added FSDP training support for Qwen3.5-27B/35B models ([#5682](https://github.com/verl-project/verl/pull/5682)) and patches for Qwen3.5 LoRA/MTP with Megatron ([#5599](https://github.com/verl-project/verl/pull/5599)).
*   **[Feat] 2048 Game Example:** Implementation of a GRPO training example for the classic 2048 game, inspired by recent OpenAI demonstrations ([#5687](https://github.com/verl-project/verl/pull/5687)).
*   **[Feat] Scientific Discovery (LLM-SR):** A new example using multi-turn GRPO to train LLMs for scientific equation discovery ([#5685](https://github.com/verl-project/verl/pull/5685)).
*   **[Fix] FSDP & NestedTensor:** Resolved shape mismatch errors in VLM SFT training caused by `NestedTensor` jagged dimension ambiguity ([#5689](https://github.com/verl-project/verl/pull/5689)).
*   **[Feat] SGLang LoRA:** Introduction of dual-mode LoRA support (merge vs. native adapter) for SGLang rollouts ([#5564](https://github.com/verl-project/verl/pull/5564)).

## 5. Why This Project Matters in Today's RL Landscape
Verl is establishing itself as a critical bridge between advanced LLM architectures and production-grade RL fine-tuning. By rapidly integrating support for MoE architectures (like Qwen3.5-A3B) and experimental backends (SGLang, vLLM, NPU), it lowers the barrier to entry for complex RLHF/GRPO workflows. The recent addition of "fun" yet technically rigorous examples like the 2048 game agent demonstrates verl's versatility beyond standard NLP tasks, positioning it as a framework for general-purpose agentic reasoning.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-21

## 1. Today's Highlights
Activity in the last 24 hours was dominated by significant infrastructure upgrades and documentation efforts. Key developments include the integration of **OLMo-core** implementations for SFT, DPO, and GRPO, alongside critical performance optimizations for **vLLM weight syncing** in long-context scenarios (32k tokens). There is a clear strategic shift toward consolidating internal tooling and rubric-based RL environments.

## 2. Releases
**None** recorded in the last 24 hours.

## 3. Important Issues
**No new issues** were opened. The development pipeline remains entirely PR-focused, suggesting a stabilization phase for current feature sets rather than new bug discovery.

## 4. Key PR Progress
A total of **16 PRs** were updated. Key movements include:

*   **GRPO & OLMo-Core Migration:**
    *   **[#1548](https://github.com/allenai/open-instruct/pull/1548)**: Major documentation update adding `OLMo-core` sections for DPO, GRPO, and SFT, including debug scripts for local and multi-node setups.
    *   **[#1543](https://github.com/allenai/open-instruct/pull/1543) (OPEN)**: Demonstrates working GRPO with OLMo-core via a local debug script, simplifying setup by removing Ray dependencies.
    *   **[#1327](https://github.com/allenai/open-instruct/pull/1327) (OPEN)**: Long-running effort to replace existing SFT with the OLMo-core version; currently under active verification.

*   **vLLM & Long-Context Optimization:**
    *   **[#1535](https://github.com/allenai/open-instruct/pull/1535) (OPEN)**: Solves critical 32k context length timeouts by batching vLLM weight sync broadcasts.
    *   **[#1515](https://github.com/allenai/open-instruct/pull/1515) (OPEN)**: Migrates to vLLM 0.16.0 native weight transfer APIs, deleting ~200 lines of manual syncing code.
    *   **[#1540](https://github.com/allenai/open-instruct/pull/1540) (OPEN)**: Enhances observability in `grpo_fast` by logging DeepSpeed gradient norms (including non-finite values).

*   **Tool Use & Training:**
    *   **[#1546](https://github.com/allenai/open-instruct/pull/1546) (OPEN)**: Introduces new documentation for tool training and DR-Tulu replication (rubric-based evaluation).
    *   **[#1534](https://github.com/allenai/open-instruct/pull/1534) (OPEN)**: "Part Two" of offline distillation support, adding scripts for capturing teacher logits.

*   **Merges & Fixes (Closed):**
    *   **[#1547](https://github.com/allenai/open-instruct/pull/1547)**: Updated DPO/GRPO defaults to align with successful Olmo 3 experiments.
    *   **[#1545](https://github.com/allenai/open-instruct/pull/1545)**: Refactored `collate_fn` to ensure 2D tensor output, removing scattered `ndim` guards.
    *   **[#1530](https://github.com/allenai/open-instruct/pull/1530)**: Fixed GSM8K reward parsing to handle explicit +/- signs in answers.
    *   **[#1539](https://github.com/allenai/open-instruct/pull/1539)**: Added Sequence Parallelism (SP) support to legacy DeepSpeed SFT code.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct is establishing itself as a production-grade testbed for **high-performance RLHF (Reinforcement Learning from Human Feedback)**. The current flurry of updates—specifically the migration to **OLMo-core** and the optimization of **vLLM weight syncing**—highlights a maturing ecosystem focused on stability and efficiency at scale.

The inclusion of **offline distillation** and **tool-use environments** positions Open Instruct as a critical bridge between traditional SFT and complex, agentic RL loops. For researchers and engineers, these updates reduce the friction of experimenting with long-context training (32k+) and advanced Group Relative Policy Optimization (GRPO).

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

# RL Daily Digest: Stable Baselines3 (2026-03-21)

## 1. Today's Highlights
Activity on Stable Baselines3 (SB3) was moderate over the last 24 hours, dominated by repository maintenance. Two low-quality pull requests were closed, while a significant long-term feature PR saw renewed activity. The team continues to enforce strict contribution standards regarding AI-generated content.

## 2. Releases
No new releases were recorded.

## 3. Important Issues
*   **Feature Request: Dataclass Transition for Buffers**
    *   **Issue:** [#2202](https://github.com/DLR-RM/stable-baselines3/issues/2202)
    *   **Details:** A proposal to convert buffer data structures (`ReplayBufferSamples`, `RolloutBufferSamples`, etc.) from `NamedTuple` to Python `dataclass`.
    *   **Significance:** This change would facilitate subclassing, allowing researchers to extend buffer functionalities more easily for custom RL experiments.

## 4. Key PR Progress
*   **Implemented: Prioritized Experience Replay (PER)**
    *   **PR:** [#1622](https://github.com/DLR-RM/stable-baselines3/pull/1622) (Open)
    *   **Status:** Saw activity today.
    *   **Context:** This is a long-standing contribution adding Prioritized Experience Replay for DQN. Its continued presence indicates ongoing efforts to integrate advanced sampling techniques into the core library.
*   **Maintenance: Quality Control**
    *   **Closed PRs:** Two PRs ([#2229](https://github.com/DLR-RM/stable-baselines3/pull/2229) and [#2230](https://github.com/DLR-RM/stable-baselines3/pull/2230)) were closed.
    *   **Reason:** Both were flagged for lacking filled templates and appearing to be LLM-generated. This highlights the maintainers' active stance against low-effort automated contributions.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the industry standard for reliable, PyTorch-based reinforcement learning implementations. While newer libraries like SB3-Xtend or CleanRL experiment with bleeding-edge features, SB3 focuses on stability and reproducibility. The current discussions around buffer subclassing and PER implementation demonstrate the project's careful evolution—balancing strict code quality with high-demand feature requests.

</details>