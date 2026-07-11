# RL Open Source Daily Digest 2026-07-12

> Generated: 2026-07-11 22:13 UTC | Projects covered: 15

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
The reinforcement learning ecosystem as of mid-2026 is sharply divided into two tiers: highly active post-training/infrastructure frameworks (TRL, verl, AReaL, Open Instruct) and standardizing environment/API layers (Gymnasium, PettingZoo). The industry-wide focus has decisively shifted from foundational PPO implementations to solving the massive I/O, memory, and orchestration bottlenecks of Reinforcement Learning with Verifiable Rewards (RLVR), multi-agent workflows, and RLHF at scale. 

## Activity Comparison
The ecosystem's active development is concentrated in large language model (LLM) alignment and distributed orchestration. Traditional RL algorithm libraries (CleanRL, Stable Baselines3, Tianshou) experienced zero activity, indicating feature maturity in that subfield.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 4 | 16 | 0 | Agentic VLMs, streaming datasets, GOLD/distillation. |
| **verl** | 3 | 5 | 0 | Asynchronous pipelines, NCCL weight sync, MoE support. |
| **Gymnasium** | 2 | 9 | 0 | API stabilization, strict typing, vector env bug squashing. |
| **AReaL** | 1 | 7 | 0 | Inference bridges, rollout tracing, OpenAI tool-calling API. |
| **PettingZoo** | 1 | 5 | 0 | API standardization (`make` registry), native video tooling. |
| **Open Instruct** | 0 | 2 | 0 | RLVR benchmark integration, GRPO checkpoint management. |
| **slime** | 0 | 1 | 0 | Fixing async rollout state persistence (global singletons). |
| **Others** | 0 | 0 | 0 | *CleanRL, OpenRLHF, rl_games, ROCK, ROLL, SB3, Tianshou, torchtune saw no activity.* |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Distillation & RLVR Integration:** Frameworks are blending techniques to align reasoning models. TRL is heavily expanding GOLD/GKD distillation, while Open Instruct is integrating SLR-Bench to provide granular, partial-credit verifiable rewards for logical reasoning.
*   **Complex Agentic Workflows:** The field is moving past static text. TRL is battling to support multi-turn tool-calling with multimodal (VLM) inputs, and Open Instruct/AReaL are standardizing structured logic and tool-call arguments in generated traces.

**Engineering & Infrastructure Signals**
*   **Memory-Bound Rollout Optimization:** Distributed inference is the primary bottleneck. verl and AReaL are pioneering disaggregated rollouts (Prefill-Decode separation) and NCCL delta weight synchronization to bypass memory constraints.
*   **Hardware & Architecture Agnosticism:** Next-gen infrastructure must natively support complex distributed paradigms. verl is tackling Qwen3-MoE and DeepSeek V4 (with FP8/MXFP4 weight transfers), while AReaL is bridging Megatron for Bailing-MoE on both NVIDIA and Ascend NPUs.
*   **Resilient Orchestration & State Management:** Long-running RL jobs require fault tolerance. Open Instruct is adding strict checkpoint management to prevent disk exhaustion, while slime is patching critical async rollout state bugs to allow dynamic hyperparameter scaling.

## Differentiation Analysis
*   **LLM Post-Training:** **verl** and **AReaL** differentiate themselves as heavy-duty, hardware-level orchestration layers focused on raw throughput (NCCL optimizations, Megatron integration). Conversely, **TRL** and **Open Instruct** operate closer to the algorithmic and data layers, focusing on rapid implementation of new techniques (GOLD trainer, RLVR benchmarks) and HuggingFace ecosystem compatibility.
*   **Classic vs. Multi-Agent Environments:** **Gymnasium** and **PettingZoo** operate entirely outside the LLM alignment hype. Gymnasium is in a mature "stabilization" phase (strict typing, deterministic vectorized spaces), whereas PettingZoo is actively modernizing its API (`make` registry) to unify single-agent and MARL workflows, making them easily swappable.

## Community Momentum & Maturity
The ecosystem displays clear signs of maturation. Library maintainers are prioritizing developer experience and system stability over shipping novel algorithms. This is evidenced by Gymnasium dropping heavy dependencies (like `torch`) for CPU-only users, Open Instruct implementing disk-space safeguards, and verl aggressively patching race conditions in NCCL hanging. High-friction, enterprise-level concerns—such as reward auditing (proposed in Gymnasium) and multi-turn tool-calling state persistence—are driving the current open-source roadmap.

## Trend Signals
*   **The Death of the Static Dataset:** Across TRL, AReaL, and verl, there is a massive infra push toward streaming/iterable datasets and disaggregated, async rollouts. Future RL frameworks must treat data generation as a continuous, memory-efficient stream.
*   **Precision & MoE as Default:** Support for Mixture-of-Experts (MoE) architectures and sub-16-bit precision (FP8/MXFP4) is becoming table-stakes for any framework aiming to train or align frontier models.
*   **Consolidation of MARL APIs:** PettingZoo's transition to a Gymnasium-style `make` registry signals an upcoming industry standard where multi-agent environments are invoked with the exact same idioms as single-agent environments.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM/slime)
**Date:** 2026-07-12

### 1. Today's Highlights
The `slime` repository experienced a low-activity day with zero new releases and no newly created or updated issues. The primary activity revolves around a critical architectural bug fix proposed in the pull request pipeline, addressing state management in asynchronous rollout generation.

### 2. Releases
*   **None:** No new versions or tags were published in the last 24 hours.

### 3. Important Issues
*   **None:** There were no active issues updated or created within the last 24 hours. 

### 4. Key PR Progress
*   **[OPEN] [PR #2196](https://github.com/THUDM/slime/pull/2196): fix(rollout): honor per-call args in generate_rollout_async (GenerateState caches first args)** by `sdc17`
  *   **Technical Summary:** This PR addresses a subtle but critical state-persistence bug in the asynchronous rollout pipeline. Currently, `generate_rollout_async(args, ...)` ignores per-call argument overrides for task dispatch. This occurs because `GenerateState` is constructed as a global singleton (via `SingletonMeta`), causing it to cache the arguments from the very first initialization and ignoring subsequent parameters in later calls. The PR refines the argument handling to ensure that per-call arguments are properly honored, which is essential for dynamic hyperparameter scaling and multi-variant model testing during RL training.

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning from Human Feedback (RLHF) and Large Language Model (LLM) alignment, distributed rollout generation and inference are primary bottlenecks. `slime` provides critical infrastructure for managing these complex, async RL workloads. 

The bug targeted by PR #2196 highlights a classic distributed systems challenge: the danger of global singleton states in highly parallelized environments. As RL frameworks scale to handle thousands of concurrent async inference calls, ensuring robust, stateless (or properly state-managed) argument passing is vital. Fixing this `GenerateState` caching behavior allows researchers and engineers to safely dispatch multiple rollout configurations dynamically, making `slime` a more reliable tool for large-scale LLM alignment and RL research.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-07-12

## 1. Today's Highlights
Activity over the last 24 hours focused heavily on inference infrastructure and training engine contracts. The team merged/refined efforts to stabilize OpenAI-compatible tool-calling for HuggingFace chat templates, advanced auditable rollout traces for inference bridges, and continued iterating on PPO actor loss aggregation. 

## 2. Releases
**No new releases** were published in the last 24 hours.

## 3. Important Issues
- **#1442 [OPEN] [bug, stale]**: `[BUG] attn_impl=sdpa silently produces wrong logp with packed sequences on FSDP+HF backend`
  - **Author**: BaidenAyane | **Updated**: 2026-07-11
  - **Summary**: A critical silent computation bug where using `sdpa` attention implementation with packed sequences on the FSDP+HuggingFace backend produces incorrect log probabilities. This can severely corrupt RL training signals if not caught, though the issue is currently marked stale.
  - **Link**: [areal-project/AReaL Issue #1442](https://github.com/areal-project/AReaL/issues/1442)

## 4. Key PR Progress
Several pivotal PRs saw updates today, spanning inference rollout, core PPO mechanics, and hardware compatibility:

- **Inference & Rollout Infrastructure:**
  - **#1503 [OPEN]**: Introduces `InfBridge.agenerate_with_trace()`, providing opt-in, immutable schema-v2 client-local traces for every physical inference attempt (including abort/resubmit history and effective token budgets) without altering the async generation protocol. ([PR #1503](https://github.com/areal-project/AReaL/pull/1503))
  - **#1364 [OPEN, stale]**: Continues development of Prefill-Decode (PD) Disaggregation (DP=2, TP=n) to address memory-bound decoding bottlenecks and improve GPU utilization during rollout. ([PR #1364](https://github.com/areal-project/AReaL/pull/1364))
- **PPO & Training Mechanics:**
  - **#1443 [OPEN]**: Implements explicit `LossReduction` / `LossTerm` API contracts for actor loss aggregation modes, giving the trainer finer control over local means vs. numerators. This follows the closure of the stacked alternative approach in **#1417**. ([PR #1443](https://github.com/areal-project/AReaL/pull/1443), [PR #1417](https://github.com/areal-project/AReaL/pull/1417))
- **OpenAI API & Tool-Calling Compatibility:**
  - **#1501 [OPEN]**: Fixes a bug where non-object JSON (arrays, scalars, null) in tool-call arguments broke HuggingFace chat templates expecting a mapping. This is the successor to the merged **#1411**. ([PR #1501](https://github.com/areal-project/AReaL/pull/1501), [PR #1411](https://github.com/areal-project/AReaL/pull/1411))
- **Hardware & Model Support:**
  - **#1502 [OPEN]**: Updates the Ascend NPU installation guide for `ascend-v1.0.4`, removing stale information regarding CANN 8.5.0 and the "experimental" status of the `megatron` engine. ([PR #1502](https://github.com/areal-project/AReaL/pull/1502))
  - **#1372 [OPEN, stale]**: Adds a NVIDIA `megatron-bridge` adapter for the Bailing-MoE V2.5 family, moving from `mbridge`-only to a dual-bridge architecture. ([PR #1372](https://github.com/areal-project/AReaL/pull/1372))

## 5. Why This Project Matters in Today's RL Landscape
As RLHF/RLAIF scales to massive models, the bottleneck shifts from the training algorithm to the orchestration of distributed inference and precise gradient contracts. AReaL is directly tackling the most pressing operational challenges in modern RL post-training:
1. **Rollout Efficiency**: Efforts like PD Disaggregation (#1364) and auditable inference traces (#1503) reflect a mature approach to the memory-bound, high-latency autoregressive decoding phases that typically throttle RL throughput.
2. **Numerical Integrity**: Issues like #1442 highlight the fragility of current FSDP+HF integrations; ensuring accurate log-prob computation under packed sequences is table-stakes for reliable policy gradients.
3. **Hardware & Architecture Agnosticism**: By simultaneously supporting Ascend NPUs (#1502) and bridging complex MoE architectures to Megatron (#1372), AReaL is positioning itself as a versatile, scalable orchestration layer for next-generation foundation models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily reinforcement learning ecosystem digest for TRL.

# 📊 TRL Ecosystem Daily Digest (2026-07-12)

## 1. Today's Highlights
The TRL repository saw a flurry of activity over the last 24 hours with **0 new releases**, **8 updated issues**, and **16 active PRs**. The focus is heavily split between two domains: **expanding the GOLD trainer** (seq_kd, tool-calling, prompt truncation) and a **massive infrastructure push for streaming/iterable datasets** across DPO, KTO, GRPO, and RLOO trainers. Additionally, new structural changes are being introduced via a dedicated `trl.environments` submodule. 

## 2. Releases
*   **None.** No new stable or patch versions were cut in the last 24 hours. Development remains active on the `main` branch.

## 3. Important Issues
**Agent & Multi-turn VLM Crashes in GRPO**
*   [Issue #6274](https://github.com/huggingface/trl/issues/6274): Multi-turn tool calling in GRPO crashes Qwen VLM training. The root cause is a wrong `pixel_values` slice in `_tool_call_loop` when an environment returns an image. 
*   [Issue #5663](https://github.com/huggingface/trl/issues/5663): `GRPOTrainer` `environment_factory` throws a `RuntimeError` for tools returning multimodal content (images), highlighting friction in agentic VLM training.

**Generation & Training Stability**
*   [Issue #6166](https://github.com/huggingface/trl/issues/6166): GRPO crashes with vLLM colocation (`vllm_mode="colocate"`) when vLLM returns a NaN logprob for a sampled token, passing a `NoneType` into `torch.tensor()`.
*   [Issue #6361](https://github.com/huggingface/trl/issues/6361): Critical training bug for Qwen3.5 models where TRL's prefix-preserving chat templates cause catastrophic chat-template failures during training.

## 4. Key PR Progress

**GOLD & Distillation Enhancements**
*   [PR #6328](https://github.com/huggingface/trl/pull/6328): Adds multi-turn tool-calling support to `GOLDTrainer` for same-family (shared-tokenizer) distillation.
*   [PR #5725](https://github.com/huggingface/trl/pull/5725): Finally implements `seq_kd` (Sequence Knowledge Distillation) in `GOLDTrainer`, separating on-policy and sequential KD generation paths.
*   [PR #6359](https://github.com/huggingface/trl/pull/6359): Fixes GOLD behavior to truncate on-policy prompts from the *start* (rather than the end) so the student trains on the exact prompt suffix the generator saw.
*   [PR #6357](https://github.com/huggingface/trl/pull/6357): Fixes an edge case in GKD and GOLD where EOS tokens are masked out when `pad_token_id == eos_token_id`.

**Iterable Dataset & Evaluation Overhaul (By @albertvillanova)**
*   [PR #6351](https://github.com/huggingface/trl/pull/6351): Introduces support for iterable (streaming) datasets in `GRPOTrainer` and `RLOOTrainer`.
*   [PRs #6335, #6325, #6324](https://github.com/huggingface/trl/pull/6335): Simplifies KTO KL completion construction for iterable datasets and patches crashes when evaluating unpaired-preference streaming data.

**Core Architecture & Experiments**
*   [PR #6358](https://github.com/huggingface/trl/pull/6358): Introduces a new `trl.environments` submodule alongside `trl.rewards`, launching with a ready-to-use `SandboxEnvironment`. 
*   [PR #6237](https://github.com/huggingface/trl/pull/6237): Integrates DOPD (Dual On-Policy Distillation) advantage-gap routing directly into the experimental `SDFTTrainer`.
*   [PR #3743](https://github.com/huggingface/trl/pull/3743) [CLOSED]: Merged support for diffusion LLMs (dLLMs like DiffuCoder) in GRPO reference model creation, swapping `AutoModelForCausalLM` for `AutoModel` under DeepSpeed Zero3.

## 5. Why This Project Matters in Today's RL Landscape
As we push further into 2026, Reinforcement Learning is moving away from static, single-turn text generation toward **complex, agentic workflows involving multi-modal inputs and tool-calling**. TRL is actively adapting to this paradigm. The current struggle to smoothly process tool-returned images in VLMs (Issues #6274, #5663) perfectly illustrates the growing pains of building reliable RL agents. 

Moreover, training frontier models requires massive compute, making **memory optimization and on-policy distillation** critical. TRL's rapid deployment of iterable datasets (enabling streaming to save VRAM) and iterative refinements to distillation trainers (GOLD/GKD) show that the open-source community is successfully lowering the hardware floor for advanced RLHF and agentic post-training.

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

Here is the RL ecosystem daily digest for **verl** based on GitHub activity up to 2026-07-12.

### 1. Today's Highlights
verl is seeing substantial momentum in asynchronous RL pipelines, advanced checkpointing, and MoE support. Key discussions center around FSDP2 compatibility with Qwen3-MoE architectures, while major contributions focus on optimizing weight synchronization (via NCCL delta updates and LoRA merging) and expanding state-of-the-art model support (DeepSeek V4). 

### 2. Releases
*   **No new releases** in the last 24 hours. 
*   *Community note:* Issue [#7006](https://github.com/volcengine/verl/issues/7006) requests an official Dockerfile and dependency matrix for the recently discussed `verl-0.8.0` to run Qwen3.6 + vLLM/Megatron.

### 3. Important Issues
Developers are uncovering critical edge cases in distributed RL training:
*   **FSDP2 & Qwen3-MoE Incompatibility ([#7016](https://github.com/volcengine/verl/issues/7016)):** Training `Qwen3-30B-A3B` using the FSDP2 engine fails during the first actor backward pass due to `CheckpointError` (with gradient checkpointing) or native worker crashes (without it). Dense models work fine on FSDP2, isolating this to MoE architectures.
*   **Fully Async NCCL Hangs ([#6967](https://github.com/volcengine/verl/issues/6967)):** A timing race condition is causing the first NCCL checkpoint-engine group initialization to hang before weight sync/generation, specifically in single-turn setups without tools.
*   **vLLM LoRA EOS Bug ([#6782](https://github.com/volcengine/verl/issues/6782)):** During Qwen3.5-27B LoRA GRPO training, vLLM fails to emit EOS tokens when using LoRA rank=64/alpha=128 (truncating all responses), though it operates normally at rank=32/alpha=64.

### 4. Key PR Progress
This week's PRs heavily target network I/O efficiency and state persistence:
*   **Optimized Weight Sync ([#6974](https://github.com/volcengine/verl/pull/6974)):** Implements delta weight sync over NCCL for disaggregated rollouts. By broadcasting only the parameters changed during RL updates (leaving >99% of BF16 bytes untouched), this massively cuts weight-sync traffic.
*   **DeepSeek V4 Support ([#6473](https://github.com/volcengine/verl/pull/6473)):** Introduces DeepSeek V4 Flash GRPO via Megatron-Bridge, including FP8/MXFP4 weight transfer and checkpoint verification.
*   **Adaptive KL Checkpointing ([#7013](https://github.com/volcengine/verl/pull/7013)):** Fixes a PPO training state bug where the evolved `AdaptiveKLController.value` was lost during checkpoint resumes, accidentally resetting to the initial coefficient.
*   **FSDP LoRA Fix ([#7014](https://github.com/volcengine/verl/pull/7014)):** Resolves a stale-weight bug in FSDP LoRA rollouts where lazy iterators consumed merged weights *after* the `merged_lora_context()` had already exited.
*   **V1 Trainer Enhancements ([#7020](https://github.com/volcengine/verl/pull/7020)):** Enables `SkipManager` in the sync trainer CI and adapts `param_sync_step` for better rollout generation handling.

### 5. Why This Project Matters in Today's RL Landscape
As RLHF/GRPO becomes the bottleneck for aligning large language models, verl is establishing itself as a critical, production-grade orchestration layer. Today's commit and issue traffic proves that the frontier of RL has moved past simple PPO loops. Ecosystem tools must now natively handle complex distributed paradigms—such as disaggregated rollouts, asynchronous NCCL delta syncing, FP8/MXFP4 precision handling, and DeepSeek/MoE-specific backward passes. By aggressively integrating these optimizations, verl provides the infrastructure necessary to scale post-training for next-generation foundation models efficiently.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the daily digest for the Open Instruct project.

### 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on pull request maintenance, with zero new releases or issue updates. The spotlight is on infrastructure resilience for Reinforcement Learning (RL) training pipelines and the closure of a significant dataset integration for verifiable rewards.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **No issues updated** in the last 24 hours.

### 4. Key PR Progress
*   **[INFRA] PR #1701: Checkpoint Management for SFT, DPO, and GRPO** ([OPEN](https://github.com/allenai/open-instruct/pull/1701))
    *   *Author:* TimDettmers
    *   *Update:* Continues active development (originally created May 2026). This PR introduces a centralized `keep_last_n_checkpoint` parameter (defaulting to 3) across all OLMo-core training paths, including GRPO. 
    *   *Significance:* Crucial for RL practitioners, as GRPO is heavily resource-intensive. Limiting checkpoint storage prevents disk space exhaustion during long-running RL runs.
*   **[DATA] PR #1511: SLR-Bench Integration for RLVR** ([CLOSED](https://github.com/allenai/open-instruct/pull/1511))
    *   *Author:* lukashelff
    *   *Update:* Officially closed after months of iteration. 
    *   *Significance:* Integrates the Scalable Logical Reasoning benchmark (SLR-Bench) into the ecosystem. This provides a structured curriculum with increasing difficulty and executes verifiable rewards via logic programs. It enables fine-grained, partial credit scoring—pushing the boundaries of Reinforcement Learning with Verifiable Rewards (RLVR).

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward Reinforcement Learning with Verifiable Rewards (RLVR) for aligning reasoning models, **Open Instruct** (backed by AI2) serves as a critical open-source alternative to proprietary stacks like those used by OpenAI or Anthropic. 

Today's updates perfectly encapsulate the current needs of the open-source RL community: 
1. **Accessible Algorithms:** By supporting GRPO alongside DPO and SFT directly on OLMo-core, it democratizes advanced alignment techniques.
2. **Robust Verifiable Rewards:** The merging of SLR-Bench highlights a broader industry trend of moving beyond binary code/math execution, using structured logic programs to teach models complex, multi-step logical reasoning.
3. **Training Viability:** TimDettmers' work on checkpoint management addresses the unglamorous but vital bottleneck of distributed RL training—ensuring long-running alignment jobs don't crash due to storage limits.

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

Here is the RL open-source ecosystem digest for Gymnasium.

# 🧠 RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-07-12

### 1. Today's Highlights
Gymnasium is experiencing a surge in high-quality, core-level maintenance. The past 24 hours feature **9 updated PRs and 0 new releases**. The development focus is heavily skewed toward hardening API contracts (strict typing, flexible rewards) and squashing deep-seated bugs in vectorized environments and space definitions. Notably, the community is actively collaborating to replace random-action documentation GIFs with trained policies (e.g., Stable-Baselines3).

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **[Proposal] Reward-hacking / reward-audit monitoring wrappers** ([Issue #1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619))
    *   *Insight:* A proposal to introduce opt-in wrappers for auditing reward signals (tracking drift, entropy collapse, and versioning). As RL models are increasingly deployed in complex, misalignment-prone environments, native tools for reward auditing become essential for researcher visibility.
*   **Doc Site Gifs Showing Real Policies** ([Issue #1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610)) *[help wanted]*
    *   *Insight:* Maintainers are requesting community submissions of trained-policy GIFs for Classic Control, Box2D, and MuJoCo environments. This aims to replace outdated "random behavior" visuals on the official documentation site with solved-state behaviors.

### 4. Key PR Progress
**Documentation & Usability**
*   [PR #1627](https://github.com/Farama-Foundation/Gymnasium/pull/1627) **[CLOSED]:** Submitted trained SB3 policy GIFs for LunarLander and BipedalWalker (Box2D) to fulfill Issue #1610. 
*   [PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617): Removes `torch` from the `[all]` installation extra. This prevents pip from aggressively pulling massive `nvidia-cuda-*` packages, significantly streamlining CPU-only environments.

**Core Typing & API Checks**
*   [PR #1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620): Introduces `mypy --strict` compliance for `core.py`, `space.py`, and `box.py`.
*   [PR #1621](https://github.com/Farama-Foundation/Gymnasium/pull/1621): Updates the passive environment checker to accept any `SupportsFloat` type for rewards, rather than strictly warning non-NumPy scalar dtypes.

**Critical Bug Fixes (Space & Vector Environments)**
*   *Developer `teddytennant` submitted a barrage of critical fixes:*
*   [PR #1624](https://github.com/Farama-Foundation/Gymnasium/pull/1624): Fixes `RecordEpisodeStatistics` calculating wrong returns when vector envs use `SAME_STEP` autoreset semantics.
*   [PR #1623](https://github.com/Farama-Foundation/Gymnasium/pull/1623): Prevents `SyncVectorEnv`/`AsyncVectorEnv` from dangerously mutating class-level environment `metadata` when applying autoreset modes.
*   [PR #1626](https://github.com/Farama-Foundation/Gymnasium/pull/1626): Fixes non-deterministic `Text` space character ordering caused by Python's hash randomization (`PYTHONHASHSEED`).
*   [PR #1625](https://github.com/Farama-Foundation/Gymnasium/pull/1625): Fixes `create_shared_memory` failures for dtypes lacking an `array` module typecode (e.g., `np.float16`).
*   [PR #1622](https://github.com/Farama-Foundation/Gymnasium/pull/1622): Resolves an integer overflow bug in `MultiDiscrete.contains` when using negative starts or small dtypes (like `int8`).

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard environment interface for Reinforcement Learning. Today's commit digest perfectly illustrates the project's current lifecycle stage: transitioning from building new features to **enterprise-level stabilization and standardization**. 

By aggressively tackling strict type hinting ([PR #1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620)), shared memory constraints ([PR #1625](https://github.com/Farama-Foundation/Gymnasium/pull/1625)), and vectorized environment determinism ([PR #1624](https://github.com/Farama-Foundation/Gymnasium/pull/1624)), Gymnasium ensures that high-throughput, multi-process RL training pipelines (used by frameworks like SB3, CleanRL, and Tianshou) can run safely and reproducibly. Furthermore, discussions around lightweight installation footprints ([PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617)) and reward auditing ([Issue #1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619)) show a mature responsiveness to the modern ML engineer's workflow, where cloud compute costs and reward-hacking visibility are top priorities.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the daily digest for the PettingZoo project. 

# 🪐 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-12

### 1. Today's Highlights
PettingZoo is currently undergoing a significant architectural modernization. The primary focus is migrating environment instantiation to a Gymnasium-like standard via a new `make` registry. Concurrently, there is a massive community push to expand tooling and environment complexity, evidenced by three major PRs addressing video recording and advanced heuristic policies for the Knights-Archers-Zombies (KAZ) environment. 

### 2. Releases
**None.** No new stable releases were cut in the last 24 hours. The repository activity remains entirely focused on merging feature branches and refining the core API.

### 3. Important Issues
*   **[Issue #1392](https://github.com/Farama-Foundation/PettingZoo/issues/1392) - Deprecation Notice: Transition to Gymnasium-like `make`**
    *   **Author:** Trenza1ore 
    *   **Summary:** Official notice that legacy direct-instantiation (e.g., `from pettingzoo.butterfly import pistonball_v6; env = pistonball_v6.env()`) is being deprecated. Moving forward, users will use a unified API: `from pettingzoo import make; env = make("aec", "butterfly/pistonball")`. This is a breaking change that will require users to update their training scripts.

### 4. Key PR Progress
*   **[PR #1390](https://github.com/Farama-Foundation/PettingZoo/pull/1390) [CLOSED] - Registry normalization:** Closed a gap in the new environment registry (#1388) by properly normalizing environment IDs to strictly use the `-v[version]` format (e.g., standardizing `atari/basketball_pong_v3`), improving code quality and strict typing.
*   **[PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306) - Add `RecordVideo` wrappers:** A highly anticipated port of Gymnasium’s `RecordVideo` wrapper for both AEC and base multi-agent environments. This removes the dependency on external libraries (like SB3 or TorchRL) simply to render multi-agent gameplay GIFs or videos.
*   **[PR #1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384) & [PR #1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395) - KAZ Policy Demos:** Two separate community contributions adding deterministic, predictive vector-policies for the Knights-Archers-Zombies (KAZ) environment. Both PRs feature projectile interception logic for archers and include reproducible evaluation scripts with rendered GIFs. 
*   **[PR #1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393) - Pursuit Environment Map Customization:** Introduces a `center_box_size=(width, height)` argument to the Pursuit environment, allowing researchers to dynamically resize or remove the center obstacle for custom curriculum learning setups.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo is the de facto standard library for Multi-Agent Reinforcement Learning (MARL) within the Farama Foundation ecosystem. The current shift to a Gymnasium-style `make` registry is crucial—it bridges the gap between single-agent and multi-agent workflows, allowing researchers to swap standard Gymnasium environments with PettingZoo environments with minimal code refactoring. Furthermore, community additions like native video recording and customizable environment parameters (like obstacle sizing) lower the barrier to entry for MARL research, enabling faster benchmarking, debugging, and algorithmic iteration.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>