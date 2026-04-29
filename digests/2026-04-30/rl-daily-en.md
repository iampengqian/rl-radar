# RL Open Source Daily Digest 2026-04-30

> Generated: 2026-04-29 22:15 UTC | Projects covered: 15

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
The RL open-source ecosystem on April 30, 2026, is defined by a clear bifurcation between the rapid, heavy engineering required for Large Language Model (LLM) alignment and the mature, stable maintenance of classical RL foundations. 

Projects in the LLM post-training space (`verl`, `TRL`, `AReaL`, `slime`, `OpenRLHF`, `ROCK`, `ROLL`, `open-instruct`) are experiencing high-velocity development cycles. The dominant themes across these repositories include aggressive memory optimization for massive MoE and Vision-Language Models (VLMs), hardware diversification (specifically integrating Huawei Ascend NPUs), and streamlining distributed training-to-inference weight synchronization. Meanwhile, classical RL environments and baselines (`Gymnasium`, `CleanRL`, `Stable Baselines3`, etc.) are in a mature, largely maintenance phase, with activity focused on code quality rather than architectural pivots.

## Activity Comparison
The vast majority of ecosystem momentum is concentrated in the LLM post-training infrastructure. Projects like Gymnasium show targeted maintenance, while other classical RL libraries saw zero activity.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 12 | 36 | 0 | High-velocity feature expansion (NPUs, Megatron-FSDP, new distillation algos). |
| **TRL** | 4 | 8 | 0 | Focus on VLM memory optimization and PEFT stability for GRPO/DPO. |
| **AReaL** | 3 | 5 | 0 | Core dependency upgrades (`transformers 5.0`) and Megatron pipeline parallelism. |
| **slime** | 3 | 5 | 0 | Scaling massive MoE training (Gemma4) and fixing host OOM profiling bugs. |
| **ROCK** | 4 | 3 | 0 | Hardening observability (telemetry data loss fixes) and moving to persistent storage. |
| **open-instruct** | 0 | 5 | 0 | FSDP2-to-vLLM weight sync fixes and evaluation logic patches. |
| **OpenRLHF** | 1 | 1 | 0 | Architectural debate on migrating away from DeepSpeed to HuggingFace AutoModel. |
| **ROLL** | 1 | 2 | 0 | Strategic hardware extensibility (Ascend NPUs) and executor telemetry. |
| **Gymnasium** | 0 | 4 | 0 | Strict static typing enforcement (`ty` warnings reduction). |
| **Others*** | 0 | 0 | 0 | Dormant / stable maintenance phase. |

*\*Excluding active projects: CleanRL, PettingZoo, rl_games, Stable Baselines3, Tianshou, torchtune.*

## Shared Research & Engineering Directions

**Research Signals**
*   **Algorithmic Distillation:** Projects are actively reducing the VRAM footprint of RL fine-tuning. `verl` introduced "Nitrobrew" to compute KL divergence without materializing massive logit tensors, while `TRL` patched nested vocab size bugs in `DistillationTrainer`.
*   **VLM and MoE Focus:** RL is rapidly adapting to multi-modal and sparse architectures. `slime` added native Gemma4 26B MoE support, `AReaL` integrated Qwen2.5-VL, and `TRL` merged chunked NLL losses specifically to prevent VLMs from hitting VRAM walls during GRPO.
*   **Granular Reward Modeling:** As seen in `open-instruct`, there is a persistent research focus on strict, rule-based evaluation (e.g., exact formatting constraints) necessary to guide modern reasoning models before applying complex RL algorithms.

**Engineering & Infrastructure Signals**
*   **Hardware Diversification (Ascend NPUs):** Escaping NVIDIA hardware lock-in is a top-of-mind infrastructure goal. `verl`, `slime`, and `ROLL` all dedicated significant engineering bandwidth today to supporting Huawei Ascend NPU clusters.
*   **Training-to-Inference Weight Syncing:** Bridging distributed training frameworks (PyTorch FSDP2, Megatron) with high-throughput inference engines (vLLM, SGLang) remains a critical bottleneck. `open-instruct` and `AReaL` are actively patching bugs related to vLLM sleep hooks and FSDP2 root-module memory access.
*   **Telemetry and Observability at Scale:** Distributed RL training runs are extremely expensive, making debugging and monitoring paramount. `ROCK` transitioned from in-memory state tracking to Redis, and `slime` fixed host OOM errors related to profiling massive MoEs.

## Differentiation Analysis

*   **Full-Stack vs. Modular Frameworks:** `verl` and `OpenRLHF` act as highly opinionated, full-stack distributed orchestration layers. Conversely, `TRL` differentiates itself by remaining tightly integrated into the modular HuggingFace ecosystem, relying on standard `transformers` and `peft` APIs rather than taking over distributed orchestration.
*   **Serving Engine Preferences:** While `AReaL` and `slime` are heavily invested in integrating **SGLang** for high-throughput rollouts alongside vLLM, `open-instruct` is doubling down exclusively on the **vLLM** native weight transfer API. 
*   **Backend vs. Sandbox Specialization:** `AReaL`, `slime`, and `verl` focus on low-level distributed tensor manipulation and scaling (Megatron/FSDP). In contrast, Alibaba's `ROCK` differentiates by focusing entirely on the top-level observability and deterministic lifecycle management (state machines) of the RL sandbox environments themselves.

## Community Momentum & Maturity

The ecosystem is experiencing a massive influx of enterprise-scale engineering effort, largely driven by the AI industry's post-training demands. `verl` is showing the highest raw momentum with 36 active PRs in a single day. Contributor activity in `open-instruct` and `OpenRLHF` shows that top-tier AI labs (like AI2) and independent researchers are heavily prioritizing the stabilization of distributed training loops. 

Conversely, the foundational elements of RL are showing signs of extreme maturity. `Gymnasium` is undergoing strict static typing refactoring, a hallmark of a project entering a stable, enterprise-grade maintenance phase. The total silence from legacy staples like `Stable Baselines3`, `CleanRL`, and `Tianshou` highlights how the center of gravity in the open-source RL community has shifted decisively from classic RL benchmarks toward LLM alignment infrastructure.

## Trend Signals

1.  **The Decline of DeepSpeed:** `OpenRLHF`'s structural PR to replace DeepSpeed with native HuggingFace AutoModels and PyTorch distributed strategies signals a broader ecosystem migration away from DeepSpeed toward FSDP2 and framework-agnostic scaling.
2.  **VLMs as First-Class Citizens:** The sheer volume of bug fixes and memory optimizations for Vision-Language Models across `TRL`, `AReaL`, and `verl` indicates that multi-modal RL is no longer an experimental feature—it is a core production requirement.
3.  **The `transformers 5.0` Pivot:** With `AReaL` actively upgrading core dependencies to accommodate `transformers 5.0` breaking changes, expect the wider ecosystem to face a domino effect of migration PRs across all major RL frameworks in Q2-Q3 2026.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for April 30, 2026.

### 1. Today's Highlights
Activity on the ROLL (RLHF/RL training framework) repository over the past 24 hours indicates a strong strategic push towards hardware extensibility and observability. Key focal points include expanding support for heterogeneous compute architectures (specifically Huawei Ascend NPUs) and improving tooling integrations (TensorBoard) in ROLL's updated execution engine.

### 2. Releases
*   **No new releases** were cut in the last 24 hours.

### 3. Important Issues
*   **[RFC] Integrate Ray Core RDT for Weight Synchronization** ([#431](https://github.com/alibaba/ROLL/issues/431))
    *   **Context:** This open Request for Comments proposes overhauling how ROLL handles weight synchronization between training and inference engines. 
    *   **Technical Details:** The current legacy Intel `ccl` broadcast method bottlenecks at a single-GPU source (trainer rank 0). The RFC suggests integrating Ray Core RDT to modernize and scale the synchronization process, which is critical for distributed RLHF workloads.

### 4. Key PR Progress
*   **[OPEN] feat: add npu dockerfile and usage** ([#428](https://github.com/alibaba/ROLL/pull/428))
    *   **Summary:** Introduces a `Dockerfile.A2` and associated documentation to deploy ROLL on Huawei Ascend NPU architectures (Atlas 900 A2/A3 PODc). This is a significant hardware-enabling PR, allowing users to natively run RLVR and related pipelines on non-NVIDIA silicon.
*   **[CLOSED] (feat): tensorboard log in new executor** ([#432](https://github.com/alibaba/ROLL/pull/432))
    *   **Summary:** Authored by *PanAndy*, this recently closed PR successfully ports TensorBoard logging capabilities into ROLL's new executor environment, ensuring training metrics remain observable during the transition to the new system architecture.

### 5. Why This Project Matters in Today's RL Landscape
In the current reinforcement learning landscape—dominated by massive LLM alignment (RLHF/RLAIF) and complex reasoning tasks (RLVR)—infrastructure bottlenecking is the primary barrier to iteration speed. ROLL addresses this by providing a highly scalable, distributed training-inference framework. Today's updates perfectly illustrate the project's relevance: 
1. **Breaking Hardware Silos:** PR #428 reflects a broader industry trend of moving away from strict GPU reliance, offering alternatives for teams facing compute scarcity by supporting Ascend NPUs.
2. **Optimizing Distributed Bottlenecks:** Issue #431 highlights the meticulous low-level optimization required for RL workflows. By addressing the single-rank broadcast limits in weight synchronization, ROLL is actively working to reduce latency overheads in large-scale actor/instructor model deployments.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

### RL Ecosystem Daily Digest: ROCK 
**Date:** 2026-04-30
**Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

---

#### 1. Today's Highlights
Activity over the last 24 hours was exclusively driven by maintainer `zhangjaycee`, focusing heavily on stabilizing the platform's observability and telemetry layer. The primary theme of the day is **hardening the SandboxManager metrics pipeline** by transitioning from stateful, in-memory data tracking to reliable persistent storage (Redis). Additionally, ground was laid for version `1.7.1` and future state-machine architectures.

#### 2. Releases
*   **No new releases published today.** 
*   *Note:* Version `1.7.1` is currently being staged, as evidenced by recent version-bump chores.

#### 3. Important Issues
Three issues were opened (and one closed), highlighting a targeted effort to fix telemetry blind spots:
*   🐛 **[Bug] Telemetry Data Loss:** In [#912](https://github.com/alibaba/ROCK/issues/912), it was identified that `sandbox.count.image` always defaults because the current asynchronous main loop bypasses populating the legacy in-memory `_sandbox_meta` dictionary. 
*   🐛 **[Bug] Missing User Context:** In [#910](https://github.com/alibaba/ROCK/issues/910), sandbox metrics were found to be dropping `user_info` (user/experiment ID) because the monitoring decorator queries a non-existent `_redis_provider` attribute instead of the actual `_meta_store`.
*   🚀 **[Feature] State-Machine Architecture:** In [#914](https://github.com/alibaba/ROCK/issues/914), a proposal was opened to support a sandbox state-machine within `SandboxManager` to future-proof state extensions.
*   🔄 **[Chore] Closed:** [#908](https://github.com/alibaba/ROCK/issues/908) (Version bump to 1.7.1) was successfully closed.

#### 4. Key PR Progress
All active PRs directly map to the identified observability bugs and versioning chores:
*   🔀 **[OPEN] PR [#913](https://github.com/alibaba/ROCK/pull/913):** Fixes the image metrics bug by completely deprecating the fault-prone, in-memory `_sandbox_meta` dict and migrating lookups directly to `self._meta_store.get()` (Redis-backed).
*   🔀 **[OPEN] PR [#911](https://github.com/alibaba/ROCK/pull/911):** Resolves the `user_info` metrics bug (#910) by correcting the data source for user context in the `monitor_sandbox_operation` decorator.
*   ✅ **[CLOSED] PR [#909](https://github.com/alibaba/ROCK/pull/909):** Merged the `1.7.1` version bump.

#### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning (RL) is fundamentally constrained by infrastructure reliability—training runs are computationally expensive, and a crashed sandbox can invalidate hours of training. Today's activity in the ROCK ecosystem highlights a maturing RL infrastructure tool. By eliminating ephemeral in-memory state in favor of persistent metadata stores for telemetry ([#912](https://github.com/alibaba/ROCK/issues/912), [#910](https://github.com/alibaba/ROCK/issues/910)), ROCK is ensuring that distributed RL environments remain observable and debuggable at scale. Furthermore, the proposed introduction of a state-machine ([#914](https://github.com/alibaba/ROCK/issues/914)) indicates a push toward more deterministic lifecycle management for RL environments, which is critical for complex, multi-agent training paradigms.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for April 29, 2026 / April 30, 2026, focusing on the THUDM/slime repository.

# RL Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-04-30

### 1. Today's Highlights
The past 24 hours show active infrastructure scaling and model expansion for the `slime` RL framework. The community and core developers are focused on enabling large-scale Mixture-of-Experts (MoE) training—specifically optimizing profiling and adding support for Google's latest Gemma4 architectures. Meanwhile, users are actively troubleshooting policy collapses and hardware portability (Ascend NPUs). 

### 2. Releases
*   **No new releases** were cut in the last 24 hours.

### 3. Important Issues
*   **Policy Collapse with TIS on 3B Models ([#1533](https://github.com/THUDM/slime/issues/1533)):**
    A user reported early-training policy collapse and gibberish rollouts when reproducing *Search-R1* with a 3B model while Token Importance Sampling (TIS) is enabled. This is a critical signal for researchers using Slime for search-based RL pipelines.
*   **Megatron Bridge Installation Error for Qwen-35 ([#1711](https://github.com/THUDM/slime/issues/1711)):**
    An import error (`ModuleNotFoundError`) has been flagged regarding the `megatron.bridge.models.conversion.peft_bridge` dependency.
*   **Hardware Expansion: Ascend NPU Compatibility ([#1821](https://github.com/THUDM/slime/issues/1821)):**
    A user inquired about porting post-training for Qwen3.5 series models to Huawei Ascend NPU910B cards, highlighting a growing community need for hardware-agnostic RL training outside of standard NVIDIA clusters.

### 4. Key PR Progress
*   **Gemma4 26B-A4B MoE & 31B Dense Support ([#1855](https://github.com/THUDM/slime/pull/1855)):**
    A massive architectural addition. This PR introduces full Gemma4 support for RL training, covering HF↔Megatron weight conversion, PEFT/retool integration, and comprehensive testing across TP/PP/DP/CP/EP/Sliding Window configurations.
*   **Safer `torch.profiler` for Massive MoEs ([#1879](https://github.com/THUDM/slime/pull/1879)):**
    Fixes host Out-Of-Memory (OOM) errors that occur when attempting to flush traces for 26B+ parameter MoE models. It introduces safer defaults and per-gradient-step capture, making debugging at scale actually viable.
*   **Infrastructure & Bug Fixes:**
    *   SGLang has been upgraded to `v0.5.10.post1` in the CI Docker image ([#1874](https://github.com/THUDM/slime/pull/1874)).
    *   Fixed an installation script location error ([#1877](https://github.com/THUDM/slime/pull/1877)).
    *   Closed a PR fixing PPO value head loading bugs ([#1878](https://github.com/THUDM/slime/pull/1878)).

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, the bottleneck has shifted from algorithmic design to systems-level engineering—specifically, how to efficiently conduct RLHF/GRPO on dense models and MoEs exceeding 20-30 billion parameters. `Slime` sits at the critical intersection of high-throughput LLM serving (via SGLang) and massive distributed training (via Megatron). 

Today's digest reveals that the project is successfully maturing to meet industry demands: adding native support for cutting-edge sparse architectures (Gemma4 26B-A4B), solving system-level profiling OOMs on massive MoEs, and exploring hardware diversification (Ascend NPUs). For RL researchers, `slime` is rapidly becoming a necessary infrastructure layer for frontier post-training experiments.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for **2026-04-30**, focused on **AReaL (inclusionAI/AReaL)**.

### 1. Today's Highlights
Activity on April 29, 2026, was dominated by critical infrastructure upgrades and backend stabilization. The maintainers are aggressively preparing the framework for the next generation of LLM tooling, evidenced by a high-priority push to support `transformers>=5.0` and an expanding focus on complex, multi-modal distributed training (Megatron). Significant progress was also made in patching learning rate scheduling and pipeline parallelism bugs.

### 2. Releases
**No new releases** were cut today. The volume of core dependency upgrades and bug fixes currently in the PR pipeline suggests the ecosystem is gearing up for a major tagged release in the near future.

### 3. Important Issues
*   **Dependency Bottlenecks & Upgrades:** In [Issue #1260](https://github.com/inclusionAI/AReaL/issues/1260), a proposal was raised to migrate the primary Megatron integration library from `mbridge` to `megatron-bridge`. This is a necessary move to unlock support for the latest SGLang/vLLM versions, which now mandate `transformers 5.0+`.
*   **Backend Discrepancies in Rollouts:** [Issue #1290](https://github.com/inclusionAI/AReaL/issues/1290) reports a critical reproducibility bug: GRPO on GSM8K is stable using SGLang but suffers from instability and collapses under vLLM. This highlights ongoing challenges in ensuring feature parity and numerical stability across different distributed inference backends.
*   **Distributed Weight Syncing:** [Issue #1243](https://github.com/inclusionAI/AReaL/issues/1243) (an RFC) continues to see traction regarding the integration of Ray Core RDT for distributed weight syncing, scoped safely within the experimental API.

### 4. Key PR Progress
*   **April 2026 Dependency Upgrade:** The high-priority [PR #1206](https://github.com/inclusionAI/AReaL/pull/1206) remains open. It bumps core dependencies (megatron-core, sglang, vllm, transformers) to adapt AReaL to breaking API changes across the RLHF stack. 
*   **Transformers 5.0 Compatibility:** Supporting the dependency upgrade, [PR #1280](https://github.com/inclusionAI/AReaL/pull/1280) was closed after introducing a centralized `apply_chat_template` wrapper to handle `transformers>=5.0` changing its output format from `list[int]` to a dictionary.
*   **Megatron Core Bug Fixes:** Two significant fixes were merged/closed today:
    *   [PR #1289](https://github.com/inclusionAI/AReaL/pull/1289): Fixed a double warmup subtraction bug in `OptimizerParamScheduler` by correctly passing absolute `total_train_steps` as `lr_decay_steps` for cosine scheduling.
    *   [PR #1273](https://github.com/inclusionAI/AReaL/pull/1273): Added gradient compensation for Megatron Core's internal `_forward_step_helper` division by `num_microbatches`.
*   **Multi-modal & Advanced Architectures:** [PR #1281](https://github.com/inclusionAI/AReaL/pull/1281) successfully introduced Megatron training support for the **Qwen2.5-VL** Vision-Language Model. Meanwhile, open WIP PRs like [PR #1176](https://github.com/inclusionAI/AReaL/pull/1176) are pushing the envelope by adding SGLang Eagle speculative decoding support.

### 5. Why This Project Matters in Today's RL Landscape
AReaL is establishing itself as a highly robust, production-grade framework for large-scale Reinforcement Learning from Human Feedback (RLHF) and post-training. Today's activity demonstrates a critical maturation step for the RL open-source community: **bridging the gap between rapid LLM architecture releases and stable, distributed training infrastructure**. By actively tackling pipeline parallelism scaling (Megatron), supporting multi-modal VLMs (Qwen2.5-VL), and ensuring strict cross-compatibility with state-of-the-art inference engines (SGLang/vLLM), AReaL is providing the low-level reliability needed to train next-generation reasoning models at scale.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-04-30

Here is the daily breakdown of the reinforcement learning and post-training ecosystem activity for `huggingface/trl`.

## 1. Today's Highlights
The TRL ecosystem is experiencing a surge in improvements surrounding **Vision-Language Models (VLMs)** and **PEFT (Parameter-Efficient Fine-Tuning)** integrations. Key activity today centers on optimizing memory usage for SFT via "chunked NLL loss," resolving critical VLM tokenization bugs for GRPO, and refactoring the backend of experimental trainers for better modularity. 

## 2. Releases
No new releases were cut today.

## 3. Important Issues
*   **GRPO + PEFT + Gradient Checkpointing Crash:** A long-standing bug ([Issue #3089](https://github.com/huggingface/trl/issues/3089)) reports that combining GRPOTrainer with PEFT and gradient checkpointing causes failures, highlighting stability challenges in multi-method RL tuning.
*   **CI Instability:** Tests for `TestDPOTrainer::test_train_toolcall_data` are frequently crashing due to CUDA Out of Memory errors ([Issue #5207](https://github.com/huggingface/trl/issues/5207)).
*   **VLM `mm_token_type_ids` Error:** The newest `transformers` update (v5.3.0) is throwing a `ValueError` for VLMs (like Qwen2/3-VL and GLM4V) when using `liger-kernel` ([Issue #5216](https://github.com/huggingface/trl/issues/5216)).
*   **SFT & `assistant_only_loss` limitation:** A tracking issue ([Issue #5471](https://github.com/huggingface/trl/issues/5471)) points out the difficulty of using `assistant_only_loss=True` due to the lack of native `&#123;&#37; generation &#37;&#125;` markers in most model tokenizers.

## 4. Key PR Progress
*   **SFT Memory Optimization:** PR [#5676](https://github.com/huggingface/trl/pull/5676) enables chunked NLL loss for PEFT, and PR [#5684](https://github.com/huggingface/trl/pull/5684) extends this to VLMs—a crucial step for training large multimodal models on consumer hardware.
*   **VLM & GRPO Fixes:** PR [#5064](https://github.com/huggingface/trl/pull/5064) (merged) fixes prompt handling for GRPO VLM string prompts, while PR [#5561](https://github.com/huggingface/trl/pull/5561) reverts VLM support in `parse_response` to strictly enforce tokenizer-only inputs.
*   **Distillation Bugfix:** PR [#5592](https://github.com/huggingface/trl/pull/5592) fixes an `AttributeError` in `DistillationTrainer` caused by nested `vocab_size` configs (e.g., Qwen3.5).
*   **Code Quality & Refactoring:** 
    *   PR [#5683](https://github.com/huggingface/trl/pull/5683) (merged) standardizes PEFT detection using `is_peft_model` across experimental trainers.
    *   PR [#5637](https://github.com/huggingface/trl/pull/5637) breaks down the monolithic tiny-model generation script into a modular per-model layout.
    *   PR [#5678](https://github.com/huggingface/trl/pull/5678) standardizes test file naming conventions across DPO, GRPO, and RLOO experimental scripts.

## 5. Why This Project Matters in Today's RL Landscape
As the industry shifts heavily toward Reinforcement Learning from Human Feedback (RLHF) and advanced post-training techniques (like GRPO and Online DPO) to align reasoning models, TRL serves as the foundational infrastructure. Today's focus on **chunked NLL loss** and **PEFT integrations** reflects the ecosystem's pressing need to train increasingly massive VLMs efficiently without hitting immediate VRAM walls. Furthermore, ongoing refactors to unify GRPO and Online DPO ([PR #4659](https://github.com/huggingface/trl/pull/4659)) demonstrate TRL's role in standardizing complex RL algorithms into accessible, production-ready APIs.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is your RL daily digest for OpenRLHF based on the provided GitHub data.

### 1. Today's Highlights
Activity on the OpenRLHF repository over the last 24 hours (2026-04-29) was primarily characterized by ongoing architectural discussions and infrastructure troubleshooting. A highly significant structural Pull Request is currently under review, and a persistent vLLM initialization bug continues to draw community attention.

### 2. Releases
*   **No new releases** were published in the last 24 hours. The team and community remain focused on upstream contributions and resolving active PRs.

### 3. Important Issues
*   **vLLM Sleep Hook Failure During Initialization:** 
    *   **Issue:** [#1162 [BUG] vllm failed to call `sleep` while initialization](https://github.com/OpenRLHF/OpenRLHF/issues/1162)
    *   **Context:** Users running distributed PPO training via Ray (`openrlhf.cli.train_ppo_ray`) are experiencing initialization crashes related to vLLM's sleep/wake mechanisms (often used for sequence packing or weight syncing). 
    *   **Status:** Open since Dec 2025, with 2 recent comments (updated 2026-04-29), indicating this is a recurring pain point for users spinning up multi-GPU actor/reward nodes.

### 4. Key PR Progress
*   **Architectural Shift: DeepSpeed to Native HuggingFace Automodel:**
    *   **PR:** [#1226 Replace Deepspeed backend with Automodel](https://github.com/OpenRLHF/OpenRLHF/pull/1226)
    *   **Context:** Opened by contributor `hijkzzz`, this is a substantial structural PR. Historically, OpenRLHF has relied heavily on DeepSpeed for distributed training. Migrating the backend to HuggingFace’s native `AutoModel` paradigms suggests a strategic shift toward more flexible, framework-agnostic distributed orchestration (potentially leaning closer to FSDP or native PyTorch distributed strategies).
    *   **Status:** Open (updated 2026-04-29). This PR is actively being tracked and represents a major infrastructural pivot for the project.

### 5. Why This Project Matters in Today's RL Landscape
In the post-ChatGPT era, Reinforcement Learning from Human Feedback (RLHF) and its extensions (RLAIF, DPO) have become the de facto standards for aligning Large Language Models (LLMs). 

OpenRLHF serves as a critical open-source pillar in this landscape because it demystifies and democratizes distributed RLHF training. While basic RL can be done on a single node, training state-of-the-art LLMs requires orchestrating Actor, Reward, Critic, and Reference models across massive GPU clusters. By providing a production-ready, Ray-based distributed framework, OpenRLHF bridges the gap between theoretical RL algorithms (like PPO) and enterprise-scale LLM deployment, making it an essential barometer for the open-source community's engineering direction—as evidenced by today's potential phase-out of DeepSpeed in PR #1226.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl (2026-04-30)

## 1. Today's Highlights
The verl ecosystem saw a high-velocity day with **36 active PRs** and **12 updated issues**, signaling aggressive development toward Q2 roadmap goals. Key themes include **Ascend NPU hardware support**, major **memory optimization and profiling features**, and the introduction of a novel on-policy distillation algorithm (**Nitrobrew**). Megatron-backend FSDP integration and Qwen 3.5 model compatibility continue to be the primary focus for core infrastructure.

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **Q2 Roadmaps & RFCs:** The community is actively discussing the [verl 26Q2 roadmap](https://github.com/verl-project/verl/issues/5836) and the [Multi-modal Generation RL Roadmap](https://github.com/verl-project/verl/issues/5755) (now migrated to `verl-omni`), both receiving significant upvotes (👍 15).
*   **Ascend NPU Profiling Bugs:** Users on Ascend A2 clusters are experiencing NPU synchronization timeouts during MoE routing ([#6211](https://github.com/verl-project/verl/issues/6211)) and missing `enable_trace` adaptations for memory snapshots ([#6207](https://github.com/verl-project/verl/issues/6207)).
*   **CPU Memory Leaks:** Users reported abnormal CPU memory inflation when running Qwen3.5-2B via the Megatron backend ([#6201](https://github.com/verl-project/verl/issues/6201)).
*   **Feature Request - Memory Profiler:** A request was opened to allow parameterized deletion of historical data during memory snapshot collection to prevent data bloat ([#6208](https://github.com/verl-project/verl/issues/6208)).

## 4. Key PR Progress
*   **Algorithm & Training Features:**
    *   **[fsdp, megatron, ...] feat: Nitrobrew on-policy distillation:** Introduces a novel distillation loss mode that computes forward/reverse KL divergence without materializing the massive `[N, V]` logit tensor ([#6194](https://github.com/verl-project/verl/pull/6194)).
    *   **[fully_async, rollout] feat: Online policy distillation:** Extends OPD support for fully asynchronous training paradigms ([#6056](https://github.com/verl-project/verl/pull/6056)).
    *   **[tool] feat: Function-based tool registration:** Adds a lightweight Python decorator `@function_tool` to simplify agent tool creation ([#6189](https://github.com/verl-project/verl/pull/6189)).
*   **Backend & Hardware Optimizations:**
    *   **[megatron] feat: Support Megatron-FSDP mode:** A major architectural PR enabling FSDP as a training backend for the Megatron engine ([#5423](https://github.com/verl-project/verl/pull/5423)).
    *   **[npu] feat: NPU train-infer consistency patch:** Adds a runtime patch package gated by `TRAIN_INFER_CONSIST=1` specifically for Ascend NPUs ([#6204](https://github.com/verl-project/verl/pull/6204)).
    *   **[megatron] fix: Avoid 2x peak host memory:** Fixes a critical OOMKill regression on large Megatron models by optimizing host-memory reallocation during CPU offloading ([#6193](https://github.com/verl-project/verl/pull/6193)).
    *   **[model] fix: Ulysses SP for Qwen3.5:** Resolves non-contiguous tensor crashes when applying Ulysses Sequence Parallelism to Qwen3.5 models ([#6212](https://github.com/verl-project/verl/pull/6212)).
*   **Refactoring & CI:**
    *   **[rollout] refactor: Move LLMServerManager:** A breaking change extracting `LLMServerManager` from `AgentLoopManager` to allow alternative agent frameworks (e.g., NeMo-Gym) ([#6129](https://github.com/verl-project/verl/pull/6129)).

## 5. Why This Project Matters in Today's RL Landscape
verl is establishing itself as the premier heterogeneous compute framework for RLHF/GRPO at scale. Today's activity highlights a critical industry pivot: **hardware diversification and memory efficiency**. By aggressively merging support for Ascend NPUs alongside traditional NVIDIA setups, and implementing memory-safe offloading for massive MoE architectures like Qwen 3.5, verl is solving the exact bottlenecks preventing enterprise-scale LLM deployment. Furthermore, algorithmic innovations like Nitrobrew demonstrate a commitment to reducing the VRAM/communication overhead of RL fine-tuning, making verl an essential infrastructure layer for the next generation of multimodal and agentic models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: Open Instruct
**Date:** 2026-04-30
**Project:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on pull requests, with no new issues, comments, or releases. The day's development was driven heavily by AI2 researcher `finbarrtimbers`, who concentrated on hardening the pipeline's distributed training infrastructure—specifically FSDP2/vLLM weight synchronization and evaluation job submissions. Concurrently, contributor `Chessing234` submitted targeted bug fixes to the instruction-following validation logic. 

### 2. Releases
No new releases were cut today.

### 3. Important Issues
There are no new or updated issues to report. The maintenance cycle currently appears to be entirely PR-driven.

### 4. Key PR Progress
Five PRs saw updates in the last 24 hours, highlighting active maintenance of core RL training loops and evaluation tooling:

*   **[PR #1647](https://github.com/allenai/open-instruct/pull/1647) [OPEN]: Make checkpointing better**
    *   *Author:* finbarrtimbers
    *   *Summary:* Aims to improve the reliability and structure of model checkpointing during training runs.
*   **[PR #1642](https://github.com/allenai/open-instruct/pull/1642) [OPEN]: Fixes `grpo.py` so it runs with the native weight sync**
    *   *Author:* finbarrtimbers
    *   *Summary:* A critical fix for the olmo-core / FSDP2 GRPO (Group Relative Policy Optimization) path. It resolves three independent bugs occurring at step-0 of vLLM's native weight transfer API, including illegal memory access caused by FSDP2 root-module parameters during NCCL sends.
*   **[PR #1644](https://github.com/allenai/open-instruct/pull/1644) [OPEN]: Fix submit_eval_jobs.py for olmo-eval-internal runs**
    *   *Author:* finbarrtimbers
    *   *Summary:* Fixes evaluation submission scripts by resolving a CUDA driver mismatch (cu12.8 vs. cu13 wheels) and patching slurm/gpu configuration logic.
*   **[PR #1645](https://github.com/allenai/open-instruct/pull/1645) [OPEN]: Fix validate_frequency_capital_words treating "around" as exact equality**
    *   *Author:* Chessing234
    *   *Summary:* Fixes a logical bug in `open_instruct/if_functions.py` where the "around" quantifier was enforcing strict equality on the count of capital words, causing false negatives in instruction-following evaluations.
*   **[PR #1646](https://github.com/allenai/open-instruct/pull/1646) [OPEN]: fix(if_functions): fix validate_choice operand direction**
    *   *Author:* Chessing234
    *   *Summary:* Reverses the operand direction in the `validate_choice` function. Previously, it checked if the entire model response was a substring of the option, rather than checking if the option was present in the response.

### 5. Why This Project Matters in Today's RL Landscape
Open-Instruct remains a foundational repository for the open-source RLHF (Reinforcement Learning from Human Feedback) and post-training ecosystem. Today's updates perfectly illustrate the current challenges of scaling open-source RL models:

1.  **Bridging Training and Inference Engines:** PR #1642's focus on fixing FSDP2-to-vLLM native weight syncs highlights the broader ecosystem's shift away from monolithic training scripts. Modern RL pipelines require seamless, high-throughput tensor sharing between distributed training frameworks (like PyTorch FSDP2) and optimized inference servers (vLLM) to execute algorithms like GRPO efficiently.
2.  **Granular Reward Modeling:** The fixes to `if_functions` (PRs #1645 and #1646) underscore the importance of strict, rule-based reward functions. In modern post-training, exact verification (e.g., "did the model use *around* N capital words?") is crucial for teaching models to follow formatting constraints perfectly before applying nuanced RL algorithms.

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

Here is the daily RL open-source ecosystem digest for April 30, 2026.

### 1. Today's Highlights
Gymnasium sees a highly focused, single-author effort to harden its codebase via static typing. Over the last 24 hours, contributor `jorenham` drove 100% of the repository's activity (4 PRs), systematically resolving typing errors, fixing `TypeVar` variance, and adding missing annotations across core modules like vector environments and registration. The PR activity signals an underlying initiative to reduce the project's `ty` warning footprint significantly.

### 2. Releases
No new releases were published today. 

### 3. Important Issues
There were no active issues updated in the last 24 hours, indicating a stable period for bug tracking and feature requests.

### 4. Key PR Progress
All recent activity is centered around improving static typing and linting compliance:
*   **[OPEN] [PR #1575](https://github.com/Farama-Foundation/Gymnasium/pull/1575):** Fixes `TypeVar` usage patterns (unbound use, incorrect variance, missing bounds) and adds missing annotations in `wrappers.vector.*`.
*   **[OPEN] [PR #1574](https://github.com/Farama-Foundation/Gymnasium/pull/1574):** Fills in missing return type annotations (mostly `-> None`) in the `envs.registration` submodule.
*   **[OPEN] **[PR #1573](https://github.com/Farama-Foundation/Gymnasium/pull/1573):** Adds type annotations and resolves typing errors in `vector.**` and `vector.utils.*`.
*   **[CLOSED] [PR #1571](https://github.com/Farama-Foundation/Gymnasium/pull/1571):** Resolved `invalid-parameter-default` ty errors, successfully reducing the codebase's total `ty` warnings down to 368.

### 5. Why This Project Matters in Today's RL Landscape
As the spiritual successor to OpenAI Gym, Farama-Foundation’s Gymnasium remains the foundational API standard for environment interactions in Reinforcement Learning. While new RL research often focuses on novel architectures or simulation environments, the health of the underlying API is critical for the broader open-source ecosystem. Today's influx of strict static-typing PRs ensures better IDE support, fewer runtime bugs, and safer integrations for downstream libraries (like Stable-Baselines3 or CleanRL), ultimately reflecting a mature, enterprise-grade maintenance phase for the RL community's most critical infrastructure.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>