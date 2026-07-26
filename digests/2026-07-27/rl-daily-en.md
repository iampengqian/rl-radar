# RL Open Source Daily Digest 2026-07-27

> Generated: 2026-07-26 22:16 UTC | Projects covered: 15

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
The 2026-07-27 RL open-source digest reveals a heavily bifurcated ecosystem. The vast majority of architectural momentum is concentrated on Large Language Model (LLM) alignment, specifically solving bottlenecks in distributed execution, numerical stability, and low-precision computation. Frameworks like TRL, verl, and slime are operating at the absolute frontier of hardware and scaling limitations, pushing next-gen silicon and memory optimizations. Meanwhile, traditional foundational APIs (Gymnasium, PettingZoo) and continuous control engines (rl_games) are focusing on dependency modernization and strict mathematical correctness for highly parallelized simulators.

## Activity Comparison
Today's development was concentrated in a few major hubs. LLM alignment frameworks dominated the PR and issue volume, while several major libraries experienced complete dormancy.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 3 | 6 | 1 (v1.9.1) | Maturing into a production-grade engine; heavy focus on GRPO stability and VLM support. |
| **slime** | 1 | 7+ | 0 | Massive stabilization push for distributed RL and async rollouts (GLM5.2 prep). |
| **verl** | 3 | 5 | 0 | Pushing hardware limits via low-precision (MXFP4) compute and next-gen optimizers. |
| **Gymnasium** | 2 | 2 | 0 | Maintaining API standards via dependency migration (Box2D to pymunk) and benchmarking. |
| **PettingZoo** | 2 | 1 | 0 | API consolidation; internalizing wrappers to reduce integration friction. |
| **rl_games** | 0 | 1 | 0 | Ensuring mathematical correctness in auto-reset vectorized environments. |
| **AReaL** | 1 (closed) | 0 | 0 | Triaging critical framework-level normalization bugs. |
| **torchtune** | 1 | 0 | 0 | Addressing tokenization parity to prevent silent RLHF pipeline failures. |
| *Others* | *0* | *0* | *0* | *CleanRL, OpenRLHF, ROCK, ROLL, SB3, Tianshou, Open Instruct showed zero activity.* |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals:**
*   **The GRPO Era is Here, but Unstable:** Multiple projects (TRL, slime, AReaL) are actively fighting numerical and architectural bugs related to Group Relative Policy Optimization (GRPO). Specifically, teams are fixing silent data corruption in group normalization and FP32 overflow in KL divergence estimators.
*   **Alternative Optimizers:** verl's integration of the Muon optimizer into Megatron backends signals an industry pivot away from strict AdamW reliance for massive RLHF workloads.

**Engineering & Infrastructure Signals:**
*   **The Sub-FP4 Frontier:** Memory bandwidth is the primary bottleneck for LLM alignment. verl's implementation of MXFP4 rollout weight syncing (packing BF16 to E2M1 with E8M0 scales) is a major step toward memory-efficient RLHF.
*   **Asynchronous & Distributed Execution:** Frameworks are racing to unblock distributed training topologies without dropping data. slime and verl are heavily focused on Context Parallelism (CP) advantage whitening and fixing frozen event loops in fully async rollouts.
*   **Vectorized Data Integrity:** Whether dealing with text or physics engines, silent data pollution during auto-resets is a recurring theme. rl_games and TRL are actively patching "garbage data" ingestion (e.g., masking non-physical PPO transition states, silent truncation in SimPO).

## Differentiation Analysis
*   **RLHF/LLMOps Orchestrators (verl, slime):** These projects are differentiated by their approach to distributed scaling. verl focuses heavily on hardware-level optimizations (B300/GB300 compatibility, MXFP4, Megatron integration), while slime is hyper-focused on the orchestration layer (fixing async event loops, speculative decoding metrics, and multi-node advantage normalization).
*   **The HuggingFace Ecosystem (TRL):** TRL acts as the accessible bridge for the broader community. Unlike verl's deep dive into low-level hardware, TRL focuses on framework extensibility (e.g., decoupling text-only processing from VLMs to unlock sequence packing) and high-level integrations (bitsandbytes 0.50.0, vLLM).
*   **API Standards & Classic RL (Gymnasium, PettingZoo, rl_games):** Unconstrained by the LLM inference bottleneck, these projects focus on maximizing throughput in simulated environments. Their differentiation lies in pure physics and multi-agent API standardization, driving toward frictionless interoperability and dependency modernization.

## Community Momentum & Maturity
The ecosystem shows clear signs of maturation past the "prototype" phase into production-grade reliability. 
*   **Bug-Hunting over Feature-Bloat:** Massive refactoring and stabilization pushes (e.g., slime's 10-PR debugging barrage by a single developer, TRL's rapid v1.9.1 hotfix) indicate that maintainers prioritize execution fidelity over new algorithms.
*   **The Danger of Silent Failures:** The community is highly attuned to "silent" bugs—such as AReaL's GRPO group corruption, TRL's NaN-producing CPO/SimPO truncations, and rl_games' auto-reset data pollution. These issues waste thousands of GPU hours, making their resolution a top priority for technical decision-makers.
*   **Targeted Onboarding:** Foundational projects (torchtune, Gymnasium) are utilizing "good first issue" tags to fix low-level parity bugs (e.g., Gemma tokenizer EOS tokens) without sacrificing core development velocity.

## Trend Signals
*   **Inference-Compute & Speculative Decoding:** RL training loops are now fundamentally bottlenecked by inference. Projects like slime integrating precise metrics for speculative decoding accept rates signal that RL pipelines must aggressively adopt inference-time acceleration techniques.
*   **Agentic RL Demand:** verl's open feature request for Agentic RL scaffolding reflects the industry's rapid pivot from static, single-turn alignment toward dynamic, multi-step tool-use training.
*   **Ecosystem Consolidation:** PettingZoo’s migration away from `supersuit` to internalize wrappers mirrors a broader open-source trend: reducing fragmented third-party dependencies to create frictionless, standardized end-to-end pipelines.

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

Here is the RL open-source ecosystem daily digest for `THUDM/slime`.

# 🧠 RL Open-Source Daily Digest: July 27, 2026

## 1. Today's Highlights
The `slime` ecosystem experienced a massive debugging push, led almost entirely by developer `keepkeen`. In the last 24 hours, 10 substantial PRs were opened, targeting critical flaws in asynchronous rollouts, distributed advantage normalization, speculative decoding metrics, and context parallelism (CP). The project currently has no new releases, indicating a focused integration and stabilization phase before the next iteration.

## 2. Releases
*   **New Releases:** None
*   **Latest Stable:** No new tags cut in the last 24h. The focus remains on merging foundational fixes into the `main` branch.

## 3. Important Issues
*   **#2215 [bug] [Bug] GLM5.2 模型转换的时候报错** | [Link](https://github.com/THUDM/slime/issues/2215)
    *   **Status:** Open (Updated 2026-07-26)
    *   **Summary:** An ongoing compatibility issue where users experience model conversion errors when aligning the `main` branch (specifically updated for GLM5.2 support post-0.3.0) with other ecosystem components pinned to the `0.3.0` release. 

## 4. Key PR Progress
Developer `keepkeen` submitted a barrage of high-impact PRs addressing edge cases in distributed RL training and inference:

*   **Asynchronous Rollout Fixes:**
    *   [PR #2238](https://github.com/THUDM/slime/pull/2238): Fixes a critical bug in fully-async rollouts where the worker's event loop would freeze and drop completed trajectory groups.
*   **Distributed Training & CP (Context Parallelism):**
    *   [PR #2235](https://github.com/THUDM/slime/pull/2235): Fixes advantage whitening (`--normalize-advantages`) to ensure global statistics are used across the DP group, rather than incorrectly relying on per-CP-rank statistics.
    *   [PR #2234](https://github.com/THUDM/slime/pull/2234): Resolves an `IndexError` when logging correct samples (`--log-correct-samples`) on DP > 1 by ensuring rewards map correctly to DP-local samples.
*   **Inference & Metrics:**
    *   [PR #2240](https://github.com/THUDM/slime/pull/2240): Corrects the speculative decoding dashboard metrics (`rollout/spec_accept_rate`, `rollout/spec_accept_length`) to use pooled batch statistics rather than biased per-sample ratios.
*   **Data Pipeline & Config Resolution:**
    *   [PR #2242](https://github.com/THUDM/slime/pull/2242): Plugs leaks in the `eval.defaults` YAML configuration resolution, ensuring per-dataset `stop` tokens and `min_new_tokens` are properly honored.
    *   [PR #2241](https://github.com/THUDM/slime/pull/2241): Restores support for negative dataset slice bounds (e.g., `--prompt-data data.jsonl@[-100:]`), fixing a crash in the pandas-based slicing logic.
    *   [PR #2237](https://github.com/THUDM/slime/pull/2237): Fixes a silent dataset reordering bug in `filter_long_prompt` that occurs when processing mixed multimodal data. 

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning becomes the definitive bottleneck for aligning Large Language Models (especially multimodal and reasoning models), frameworks like `slime` are proving indispensable. Today's PR activity highlights the exact engineering hurdles the industry faces in 2026: **scaling stability** and **metric accuracy**. 

Fixes targeting context-parallel advantage normalization (PR #2235) and asynchronous rollout dropping (PR #2238) show that `slime` is actively maturing to support massive, multi-node distributed training required by next-gen base models (like GLM5.2). Furthermore, precise metric tracking for advanced inference techniques like speculative decoding (PR #2240) ensures that RL teams can trust their reward signals and rollout throughputs. `slime` is clearly positioning itself as a robust, production-ready framework for high-scale RLHF/RLAIF.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**RL Open-Source Ecosystem Daily Digest: 2026-07-27**
**Focus Project:** AReaL (`github.com/inclusionAI/AReaL`)

### 1. Today's Highlights
Activity in the AReaL repository over the last 24 hours was minimal but highly targeted, characterized by issue triage rather than code integration. The primary event was the closure of a critical, longstanding bug report regarding numerical stability in Group Relative Policy Optimization (GRPO). No new pull requests were submitted, and no new releases were cut.

### 2. Releases
*   **Status:** Quiet
*   **Details:** No new releases or version tags were published in the last 24 hours. The project remains on its latest stable version.

### 3. Important Issues
*   **[#1419] [CLOSED] [stale] [BUG] Partial rollout groups silently corrupt GRPO group normalization** (Author: @EazyReal)
    *   **Summary:** This recently closed issue addressed a severe framework-level bug where partial rollout groups silently corrupted the group normalization process in GRPO. The bug was deterministic and reproducible purely on CPU without relying on specific Docker environments, pointing to flaws in the underlying numerical logic rather than deployment configurations.
    *   **Significance:** Normalization is critical for the stability of RLHF/RLAIF pipelines. Silent corruption in GRPO group rollouts can lead to catastrophic forgetting or unstable reward scaling during LLM training. The closure of this issue suggests that maintainers have either resolved the underlying logic or officially deprecated the conflicting execution path.

### 4. Key PR Progress
*   **Status:** Stalled
*   **Details:** Zero pull requests were created, updated, or merged in the last 24 hours. The engineering pipeline appears to be in a holding pattern, likely pending a larger architectural refactor or a synchronized internal development sprint.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community shifts heavily toward reinforcement learning with human feedback (RLHF) and group-based optimization techniques (like GRPO and PPO) for Large Language Models, frameworks like AReaL serve as critical infrastructure. 

The specific nature of Issue #1419 highlights the exact frontier of challenges in modern RL engineering: ensuring strict mathematical integrity during distributed rollouts. In today's highly competitive RL landscape, a "silent" numerical bug is vastly more dangerous than a crash, as it can waste thousands of GPU hours generating degraded model weights before researchers notice. AReaL's focus on identifying and triaging these deep framework-level normalization bugs underscores its necessity as a robust tool for serious, large-scale RL research.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL 
**Date:** 2026-07-27

## 1. Today's Highlights
- **New Release:** TRL [v1.9.1](https://github.com/huggingface/trl/releases) shipped today, featuring critical hotfixes for AsyncGRPOTrainer metrics and vLLM server-mode initialization.
- **Stability Focus:** Multiple pull requests today targeted numerical stability (KL divergence overflow) and dependency alignment (clearing technical debt around the new `bitsandbytes` 0.50.0 release).
- **VLM Refinements:** Active development to decouple text-only data processing from Vision-Language Model (VLM) architectures, unlocking sequence packing for VLMs.

## 2. Releases
- **[v1.9.1](https://github.com/huggingface/trl/releases)**
  - **vLLM Fix:** Resolved server-mode communicator initialization issues ([PR #6417](https://github.com/huggingface/trl/pull/6417)).
  - **Metrics:** Fixed queue wait time metrics for `AsyncGRPOTrainer` ([PR #6489](https://github.com/huggingface/trl/pull/6489)).
  - **CI Hotfix:** Temporarily pinned `lige` and addressed CI bottlenecks.

## 3. Important Issues
- **Numerical Stability in GRPO:** Ongoing investigations into RLHF math precision. [Issue #6550](https://github.com/huggingface/trl/pull/6550) highlights that the native K3 KL estimator suffers from overflow (`exp(log(pi_ref) - log(pi_theta))`), producing non-finite losses.
- **VLM Data Handling:** [Issue #6545](https://github.com/huggingface/trl/issues/6545) points out that `SFTTrainer` unnecessarily gates sequence packing based on the model being a VLM, even when operating on text-only conversational datasets.
- **Silent Failures in CPO/SimPO:** [Issue #6548](https://github.com/huggingface/trl/issues/6548) reports a silent truncation bug in `CPOTrainer` where pairing responses truncates both to the length of the longer one, occasionally producing empty completions and `NaN` losses when using `loss_type="simpo"`.

## 4. Key PR Progress
- **[PR #6550](https://github.com/huggingface/trl/pull/6550):** Fixes the aforementioned GRPO KL divergence numerical overflow by enforcing FP32 computation for reference-to-model log-ratios.
- **[PR #6547](https://github.com/huggingface/trl/pull/6547):** Enables `packing`, `padding_free`, and `assistant_only_loss` for VLMs when the underlying dataset contains no images.
- **[PR #6546](https://github.com/huggingface/trl/pull/6546) & [PR #6538](https://github.com/huggingface/trl/pull/6538):** Unblocks the library for `bitsandbytes` 0.50.0 by updating quantization tests and fixing a latent bug where only pre-training parameters were cast to float32 for comparison.
- **[PR #6475](https://github.com/huggingface/trl/pull/6475):** Resolves an `apo_down` loss inconsistency in DPO by ensuring both terms apply `f_divergence_type` correctly.
- **[PR #6280](https://github.com/huggingface/trl/pull/6280):** Implements Selective Activation Checkpointing (SAC) for SFT and clarifies stream-only dedupe checks, optimizing memory overhead.

## 5. Why This Project Matters in Today's RL Landscape
As the open-source community pivots heavily towards inference-time compute and reasoning models (e.g., Open-R1, DeepSeek-R1), efficient generation and rollout synchronization are critical bottlenecks. TRL is actively bridging this gap with features like `AsyncGRPOTrainer` and colocated `vLLM` integration. Today's focus on fixing numerical instabilities in KL divergence estimators and enabling memory-efficient techniques like sequence packing and activation checkpointing for billion-scale models proves TRL's trajectory: it is evolving from a standard RLHF library into a highly performant, production-grade engine for complex alignment tasks.

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

Here is the daily reinforcement learning ecosystem digest for **verl** (volcengine/verl) for July 27, 2026.

### 1. Today's Highlights
*   **Hardware & Precision Push:** Significant focus on next-gen hardware compatibility and low-precision execution. A critical bug blocking the official Docker container on NVIDIA B300/GB300 (sm_103) GPUs remains open, while a closed PR successfully introduces dynamic MXFP4 rollout weight syncing for Megatron and vLLM.
*   **Algorithm & Optimizer Expansion:** The community is actively expanding verl’s algorithmic toolkit. A new PR wires the Muon optimizer into the native Megatron backend, alongside crucial parity fixes for vectorized RLOO advantage computations. 
*   **Agentic RL Demand:** Users are actively requesting better documentation and scaffolding for Agentic RL training workflows.

### 2. Releases
*   **No new releases** in the last 24 hours. The project remains on its current trunk state.

### 3. Important Issues
*   **[Bug] FP32 Precision Degradation ([#7092](https://github.com/volcengine/verl/issues/7092))**
    Model loading is silently ignoring the `_keep_in_fp32_modules` flag. This causes unintended precision degradation for models (like Inkling and Qwen3-Next) that require specific layers to remain in FP32 for stable training or inference.
*   **[Bug] Next-Gen Hardware Container Break ([#6949](https://github.com/volcengine/verl/issues/6949))**
    The official `verlai/verl:vllm023.dev1` Docker image is failing on NVIDIA B300/GB300 architectures (sm_103). This highlights the ongoing friction points in adopting the newest accelerator silicon.
*   **[Feature Request] Agentic RL Documentation ([#7152](https://github.com/volcengine/verl/issues/7152))**
    A user opened a request for detailed documentation on how to implement and train custom Agentic RL workflows, indicating a strong user appetite for multi-turn/tool-using RL setups.

### 4. Key PR Progress
*   **[Closed] MXFP4 Rollout Weight Updates ([#7149](https://github.com/volcengine/verl/pull/7149))**
    Extends the Megatron QAT weight-sync path from NVFP4 to **MXFP4**. It packs BF16 master weights into OCP E2M1 values with E8M0 scales, seamlessly integrating with vLLM's compressed-tensors paths. This is a major step forward for memory-efficient RLHF.
*   **[Open] Muon Optimizer Support for Megatron ([#7120](https://github.com/volcengine/verl/pull/7120))**
    Exposes Megatron-Core's `TensorParallelMuon` (via the `emerging_optimizers` package) within verl's native backend, breaking the framework's reliance on strictly AdamW-type optimizers.
*   **[Open] MoE R2 Router Replay Fix ([#7106](https://github.com/volcengine/verl/pull/7106))**
    Preserves Megatron Mixture-of-Experts (MoE) routing decisions across THD-packed batches. This ensures consistent expert selection during RECORD/REPLAY phases and handles nested multimodal configs more safely.
*   **[Open] RLOO Vectorized Parity Fix ([#7150](https://github.com/volcengine/verl/pull/7150))**
    Fixes a defect in `as_torch_index` that caused vectorized group-wise advantage estimators (RLOO) to diverge from their loop-based reference implementations.
*   **[Open] Reward Loop Batch Assembly Fix ([#7151](https://github.com/volcengine/verl/pull/7151))**
    Patches the `RewardLoopManager` where sparse `reward_extra_info` keys were inferring schemas from sample 0 only, resulting in dropped variables or crashes during RM scoring.

### 5. Why This Project Matters in Today's RL Landscape
verl is establishing itself as the premier orchestration layer for large-scale distributed RLHF/RLAIF. Today's update perfectly encapsulates the current frontier of the open-source RL landscape: **scaling laws are colliding with hardware limits**. The community's active integration of advanced low-precision formats (MXFP4, NVFP4), next-gen optimizers (Muon), and complex routing topologies (THD-packed MoE batches) shows that modern LLM training is fundamentally bottlenecked by memory and inter-device bandwidth. Furthermore, the push for Agentic RL workflows reflects the industry's rapid pivot from static, single-turn alignment toward dynamic, multi-step tool-use training.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

**RL Ecosystem Daily Digest: torchtune**
**Date:** 2026-07-27

### 1. Today's Highlights
Activity in the `torchtune` repository over the last 24 hours was minimal, with zero new pull requests, zero new releases, and a single issue update. The focus remained on maintenance and community onboarding, specifically regarding tokenizer standardization across supported model architectures. 

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **[Issue #2478](https://github.com/meta-pytorch/torchtune/issues/2478): Add `add_end_token` to the Gemma Tokenizer**
    *   **Status:** Open | **Tags:** `bug`, `good first issue`, `community help wanted`
    *   **Details:** Updated yesterday, this issue highlights a feature disparity in tokenization. The `Llama3` tokenizer was previously updated to support `add_end_token` during generation (via [PR #1494](https://github.com/pytorch/torchtune/pull/1494)), but the Gemma tokenizer lacks this implementation. Given the critical importance of end-of-sequence (EOS) token handling during autoregressive generation, patching this ensures consistent multi-modal RLHF and inference pipelines across different base models.

### 4. Key PR Progress
*   **No active PR updates** in the last 24 hours. Code integration remains static, pending new community contributions for outstanding "help wanted" issues like #2478.

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning ecosystem (heavily focused on RLHF, DPO, and PPO for LLM alignment), data fidelity is paramount. While `torchtune` is primarily recognized as a fine-tuning library, it acts as the foundational data and model preparation layer for downstream RL training loops. 

Issues like the Gemma tokenizer's missing `add_end_token` flag are highly consequential: if an RL agent's environment or reward model processes trajectories with improperly formatted EOS tokens, it can lead to degenerate generation behavior, runaway context lengths, or incorrect reward signals. Maintaining strict parity for low-level utilities like tokenization across architectures (e.g., Llama vs. Gemma) ensures that RL researchers can swap base models in their alignment pipelines without introducing silent tokenization bugs.

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

**RL Ecosystem Daily Digest: `rl_games`**
**Date:** 2026-07-27

### 1. Today's Highlights
Activity in the `rl_games` repository over the last 24 hours was exclusively focused on core algorithm correctness. No new issues or releases were recorded. The single notable update is the continued progress on a critical Pull Request addressing data pollution in Proximal Policy Optimization (PPO) rollouts during environment auto-resets.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **No new issues or issue updates** in the last 24 hours.

### 4. Key PR Progress
*   **[OPEN] PR #362: PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization** ([Link](https://github.com/Denys88/rl_games/pull/362))
    *   **Author:** ViktorM (Created: 2026-07-12 | Last Updated: 2026-07-26)
    *   **Summary:** This PR is the PPO-focused half of a broader auto-reset correctness initiative (complementing the previously merged SAC commit `b1ed755`). It targets a silent training data bug occurring in `next_step-autoreset` environments (such as EnvPool and native Gymnasium 1.x vector envs). Previously, the transition step during auto-reset—where the action is ignored by the environment, rewards are filler values, and observations consist of terminal data from the previous episode—was being ingested into PPO rollouts as real training data. The PR implements masking for these "garbage rows" and introduces scalar sigma parameterization. 

### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains one of the most highly optimized and widely adopted RL libraries for high-throughput, GPU-accelerated policy training. The specific focus of PR #362 highlights the industry-wide maturation of the RL toolchain: as simulation environments scale to massive parallelism (via tools like EnvPool and Gymnasium vectorization), edge cases in environment lifecycle management (like auto-reset mechanics) can severely degrade learning stability. By rigorously isolating and masking non-physical transition states, `rl_games` ensures that high-frequency, vectorized training pipelines remain mathematically sound, solidifying its utility as a production-grade library for complex continuous and discrete control tasks.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-27
**Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity over the last 24 hours has been primarily focused on maintenance, third-party environment cataloging, and performance testing. The ecosystem saw a new domain-specific environment integration (Ignis) and continued progress on a core vector environment benchmarking tool. 

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **[OPEN] [#1597: Port all environments from box2d to pymunk](https://github.com/Farama-Foundation/Gymnasium/issues/1597)**
    *   **Context:** This is an ongoing, high-priority architectural migration. The current Box2D Python bindings have been unmaintained for ~6 years. The proposal targets `pymunk` due to its active maintenance and superior documentation.
    *   **Update:** Discussion continues (9 comments as of July 26), highlighting the community's focus on stabilizing 2D physics environment dependencies.
*   **[CLOSED] [#1649: Add REFUTE scientific critique + calibration benchmark](https://github.com/Farama-Foundation/Gymnasium/issues/1649)**
    *   **Context:** A proposal to add a scientific AI evaluation tool to the documentation. Closed by maintainers, likely deemed out of scope for the core Gymnasium documentation.

### 4. Key PR Progress
*   **[CLOSED] [#1650: Add external environment Ignis](https://github.com/Farama-Foundation/Gymnasium/pull/1650)**
    *   **Context:** Submitted and closed on the same day. This PR successfully cataloged **Ignis**, a 3D indoor/structural fire suppression environment (`Ignis-Indoor-v0`), under the Environmental/Climate third-party environments list.
*   **[OPEN] [#1640: Add vector environment step benchmark](https://github.com/Farama-Foundation/Gymnasium/pull/1640)**
    *   **Context:** A highly technical utility PR by `Kallinteris-Andreas`. It introduces `benchmark_step_vector` to measure individual vector-environment steps per second (originally tested for MJX environments). The PR is actively passing `ruff` formatting and linting checks, pending final maintainer review and merge.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto API standard for RL environments. Today's updates reflect two major currents in the modern RL landscape:
1.  **Dependency Modernization:** The push to migrate from legacy engines like Box2D to actively maintained ones like `pymunk` is critical for the long-term stability of RL benchmarks.
2.  **Domain-Specific & Specialized RL:** The rapid approval and closure of PRs like Ignis demonstrate how Gymnasium acts as a central hub for specialized, real-world RL applications (e.g., wildfire and structural fire suppression). Furthermore, the addition of vector environment benchmarks is essential for today's highly parallelized, GPU-accelerated (e.g., MJX) RL training pipelines.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🧠 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-27  
**Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. Today's Highlights
- **0 New Releases**: The repository remains stable with no new version deployments in the last 24 hours.
- **Active Development**: Low-volume but high-signal activity, with 2 issues and 1 PR updated.
- **Structural Shifts**: The core maintainers are actively pushing a major architectural migration to internalize environment wrappers.

### 2. Releases
**None.** No new stable or nightly releases were pushed for 2026-07-27.

### 3. Important Issues
*   **[OPEN] #1365: Migration to `pettingzoo.wrappers`** | *[jkterry1]*  
    *Summary:* A significant architectural refactor is underway. PettingZoo aims to deprecate its reliance on the external `supersuit` package by natively porting wrappers directly into `pettingzoo.wrappers` (aligning its API with standard `gymnasium.wrappers`). The maintainer is actively soliciting community PRs, requesting one PR per wrapper.  
    *Link:* [Farama-Foundation/PettingZoo Issue #1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)  

*   **[CLOSED] #1405: Add REFUTE scientific critique benchmark** | *[connerlambden]*  
    *Summary:* A proposal to add the "REFUTE" calibration benchmark (focusing on scientific AI tooling and Brier/ECE scoring) to the documentation. Closed by maintainers, likely due to being out of scope for a multi-agent RL environment API.  
    *Link:* [Farama-Foundation/PettingZoo Issue #1405](https://github.com/Farama-Foundation/PettingZoo/issues/1405)  

### 4. Key PR Progress
*   **[OPEN] #1406: Add Drone Swarm RL to third-party environments** | *[Lauqz]*  
    *Summary:* A community contribution that expands PettingZoo's ecosystem reach. The PR adds a vision-based quadrotor swarm navigation environment (`Drone-Swarm-RL-airsim-sb3`) to the docs. It integrates AirSim and Unreal Engine 4 as a native PettingZoo Parallel environment, utilizing SB3 for algorithm training.  
    *Link:* [Farama-Foundation/PettingZoo PR #1406](https://github.com/Farama-Foundation/PettingZoo/pull/1406)  

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo has cemented itself as the industry standard API for Multi-Agent Reinforcement Learning (MARL), serving as the multi-agent counterpart to Gymnasium. Today's updates highlight two core reasons for its sustained relevance:
1. **API Standardization & Consolidation:** The push in Issue #1365 to internalize wrappers and phase out `supersuit` mirrors the broader Farama Foundation ecosystem trend. By unifying wrapper APIs under a standard architecture, PettingZoo drastically reduces integration friction for researchers using frameworks like SB3, Tianshou, or RLlib.
2. **Bridging Simulators and MARL:** PR #1406 demonstrates the library's versatility as a wrapper layer for complex, photorealistic 3D simulators (AirSim/Unreal). As MARL research increasingly moves from grid-worlds into continuous control and autonomous swarms (like drone navigation), PettingZoo provides the crucial, standardized abstraction layer needed for reproducible research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>