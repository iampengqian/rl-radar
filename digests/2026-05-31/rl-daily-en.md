# RL Open Source Daily Digest 2026-05-31

> Generated: 2026-05-30 22:17 UTC | Projects covered: 15

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
The Reinforcement Learning open-source ecosystem on 2026-05-31 was dominated by the ongoing architectural shift from traditional synchronous RL to high-throughput, distributed LLM post-training workloads. The day's development was entirely concentrated in five major distributed RLHF frameworks—`slime`, `TRL`, `verl`, `AReaL`, and `OpenRLHF`—while classic foundational RL and smaller alignment libraries experienced zero activity. The focus across the board has definitively moved from algorithmic novelty to systems-level engineering, specifically targeting hybrid GPU placement, inference-training disaggregation, memory optimization, and multi-accelerator compatibility at massive scales (e.g., 64x H100 clusters and 200B+ parameter models).

## Activity Comparison
Development activity was highly polarized, with only five projects showing commits or discussions. The remaining tracked projects (CleanRL, Gymnasium, PettingZoo, Open Instruct, rl_games, ROCK, ROLL, Stable Baselines3, Tianshou, and torchtune) saw no activity.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **slime** | 1 | 21 (14 closed, 7 open) | 0 | Stabilizing distributed colocated training and SGLang integrations for 200B+ models. |
| **TRL** | 3 | 6+ active/closed | 0 | Pivoting to async RLHF (`AsyncGRPO`), vLLM sync, and DPO memory optimizations. |
| **verl** | 1 | 10 active | 0 | Hardening PPO/GRPO numerical stability and expanding hardware support (Ascend NPUs). |
| **AReaL** | 2 | 6 active | 0 | Pushing inference-training boundaries via FP8 rollouts and Prefill-Decode disaggregation. |
| **OpenRLHF** | 0 | 1 open | 0 | Refining agentic tool-use accuracy via targeted reward/penalty masking. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Agentic RL and Tool-Use Accuracy:** Frameworks are rapidly adapting to complex, multi-step agent loops. `verl` introduced multi-trajectory rollouts for agent loops, while `OpenRLHF` fixed token-length accounting to properly mask tool/API responses from model generations.
*   **Advanced Alignment Algorithms:** Standard PPO is being heavily optimized or replaced. `verl` and `slime` focused on GRPO numerical stability, while `TRL` saw active proposals for RDPO (Reward Distribution Policy Optimization) and refactored Self-Distillation (SDPO/SDFT) loss formulations.

**Engineering & Infrastructure Signals**
*   **Inference-Training Disaggregation:** The ecosystem is aggressively solving the compute bottleneck of generating rollouts. `AReaL` implemented Prefill-Decode (PD) disaggregation, while `TRL` and `slime` heavily iterated on seamless integrations with high-performance inference engines like vLLM and SGLang.
*   **Heterogeneous Precision & Memory Optimization:** Memory bandwidth is a critical bottleneck. `AReaL` implemented automatic BF16-to-FP8 quantization for SGLang rollouts, `verl` introduced NCCL memory suspension and per-unit LoRA summoning, and `TRL` optimized VRAM via eager tensor deletion in DPO.
*   **Multi-Hardware Compatibility:** Post-training frameworks are decoupling from pure Nvidia ecosystems. `verl` aggressively patched compatibility for Ascend NPUs (CANN 9.0.0) alongside bleeding-edge upstream libraries (`transformers v5`, `trl 0.29`).

## Differentiation Analysis
*   **TRL** continues to position itself as the accessible, canonical alignment layer for the Hugging Face ecosystem. It differentiates by rapidly democratizing cutting-edge techniques (like `AsyncGRPO` and native vLLM weight-transfer APIs) for the broader community.
*   **slime** and **AReaL** represent the bleeding edge of pure distributed systems architecture for RLHF. `AReaL` focuses heavily on custom kernel-level optimizations (FP8, PD disaggregation), whereas `slime` specializes in hybrid GPU placement and orchestration for extreme scales (e.g., resolving 64x H100 crashes).
*   **verl** is carving out a niche as the highly resilient, hardware-agnostic production engine. Its focus on fixing subtle static-analysis bugs in core PPO/GRPO math, combined with deep support for alternative accelerators (Ascend) and massive distributed frameworks (Megatron, FSDP1/2), makes it suited for enterprise infrastructure.
*   **OpenRLHF** maintains a lean, highly focused profile, acting as a robust, scalable backend for specific distributed PPO/DPO tasks and addressing granular production bugs (like action masking) required for functional tool-using models.

## Community Momentum & Maturity
The day's activity signals a distinct maturation of the open-source RL ecosystem. The high volume of PRs in `slime` and `verl` indicates robust, active maintainer cycles dedicated to clearing technical debt and stabilizing main branches for future releases. Meanwhile, the zero activity across foundational libraries (like Gymnasium and Stable Baselines3) suggests these tools are functionally complete or currently in maintenance mode, having ceded the innovation spotlight to LLM post-training frameworks. 

## Trend Signals
1.  **The Asynchronous RL Era:** The transition from synchronous PPO to Asynchronous GRPO (as seen in TRL) and remote execution backends (verl) is accelerating to mitigate the massive GPU idle times inherent in generating rollouts.
2.  **Shift to AI Feedback (RLAIF) and Tooling:** The precise accounting of environment tokens (OpenRLHF) and complex multi-trajectory agent loops (verl) indicate that the industry is actively building infrastructure for RLAIF and autonomous tool-calling models, moving beyond simple text-generation RLHF.
3.  **Hardware Diversification:** The push to support Ascend NPUs alongside Nvidia GPUs (verl) and implement heterogeneous precision (AReaL) reflects a broader industry trend to bypass GPU compute bottlenecks and navigate global hardware supply constraints.

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

# RL Open-Source Ecosystem Daily Digest: slime
**Date:** 2026-05-31 | **Project:** [THUDM/slime](https://github.com/THUDM/slime)

## 1. Today's Highlights
The slime repository experienced an exceptionally high-velocity day of development, processing **21 Pull Requests** (14 closed, 7 open). The focus was heavily concentrated on hardening the framework for production-scale Reinforcement Learning workloads, specifically addressing colocated GPU placement, refining SFT/RLHF loss masking, stabilizing integrations with [SGLang](https://github.com/sgl-project/sglang), and expanding model support to include MiniMax-M2.5. Core maintainers (`zhuzilin`, `Jiang0209`, `shinytang6`) were highly active in clearing the backlog and merging critical bug fixes.

## 2. Releases
No new releases were cut today. However, the rapid merging of CI and structural fixes suggests that maintainers are actively stabilizing the `main` branch for a future release.

## 3. Important Issues
*   **[Bug] Unexpected `NaN` results on massive scale (64x H100, Qwen3 235B) — [#795](https://github.com/THUDM/slime/issues/795)**
    *   *Summary:* A user reported recurring `NaN` loss issues when running slime v0.1.0 at an extreme scale. This issue remains open and is a critical tracker for numerical stability in large-scale distributed RLHF training.

## 4. Key PR Progress
### Infrastructure & Distributed Orchestration
*   **[OPEN] Rollout-External GPU Fix — [PR #1997](https://github.com/THUDM/slime/pull/1997):** Fixes bugs in `rollout-external` mode where the training job communicates with a pre-launched SGLang server on a different machine.
*   **[CLOSED] Colocate Mode GPU Allocation — [PR #1950](https://github.com/THUDM/slime/pull/1950):** Resolves an over-allocation bug in placement groups where critic GPUs were incorrectly added to the rollout pool during colocated training.
*   **[CLOSED] MiniMax-M2.5 Support — [PR #1929](https://github.com/THUDM/slime/pull/1929):** Adds full integration for the 256-expert MiniMax-M2.5 model, featuring custom QK Norm and Tensor Parallel gather/scatter logic.
*   **[CLOSED] PYTHONBUFFERED Typo — [PR #1967](https://github.com/THUDM/slime/pull/1967):** Fixed a misspelled environment variable that was silently failing to disable Python stdout buffering during Ray training.

### Algorithm & RL-Specific Fixes
*   **[CLOSED] Critic Temperature Scaling — [PR #1928](https://github.com/THUDM/slime/pull/1928):** Fixed a dangerous bug where `rollout_temperature` was incorrectly applied to scalar critic value-head outputs instead of just policy logits.
*   **[OPEN] Rollout Logprobs for Multi-Agent — [PR #1995](https://github.com/THUDM/slime/pull/1995):** Ensures token-level rollout logprobs returned by SGLang are preserved for multi-agent GRPO training.
*   **[OPEN] Reward Partitioning — [PR #1996](https://github.com/THUDM/slime/pull/1996):** Fixes per-rank logging for `--log-correct-samples` by partitioning `raw_reward` alongside `total_lengths`.

### CI/CD & SFT Refactoring
*   **[OPEN] SFT Loss Mask Rebuild — [PR #1994](https://github.com/THUDM/slime/pull/1994):** Rebuilds the Supervised Fine-Tuning loss mask generator and adds accompanying CI tests.
*   **[CLOSED] E2E Delta Weight Update — [PR #1991](https://github.com/THUDM/slime/pull/1991):** Added end-to-end CI tests for delta weight synchronization, ensuring parameter updates don't degrade rollout performance.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs push past the 200B parameter mark (e.g., Qwen3 235B), deploying Post-Training RL algorithms like GRPO at scale has become a massive distributed systems challenge. Slime is establishing itself as a critical bridge between training frameworks and high-throughput inference engines like SGLang. 

Today's activity highlights the exact bottlenecks the RL ecosystem is currently solving: **hybrid GPU placement** for critics vs. rollout actors, **weight synchronization** between training and inference nodes, and **numerical stability** at 64-node H100 scales. By stabilizing integrations and introducing robust SFT loss masking, slime is lowering the barrier to entry for enterprise-scale RLHF.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL.

# AReaL RL Ecosystem Daily Digest — 2026-05-31

## 1. Today's Highlights
Activity on the AReaL repository remains highly focused on systems-level performance and hardware optimization for RLHF (Reinforcement Learning from Human Feedback). The community and maintainers are actively pushing to optimize inference-training pipelines, specifically prioritizing **FP8 quantization for rollouts**, **Prefill-Decode (PD) disaggregation**, and resolving **DTensor dispatch errors under Tensor Parallelism (TP)**.

## 2. Releases
**None.** No new releases were recorded in the last 24 hours.

## 3. Important Issues
- **Qwen Model Instability under Tensor Parallelism:** Issue [#1366](https://github.com/areal-project/AReaL/issues/1366) reports that Qwen models consistently crash with a DTensor dispatch error when utilizing TP > 1. The error is reproducible via Docker, indicating a systems-level friction point in distributed training for specific model architectures.
- **FSDP BF16 Training + SGLang FP8 Rollout Proposal:** Issue [#1378](https://github.com/areal-project/AReaL/issues/1378) proposes a mixed-precision architecture: maintaining FSDP training in BF16 while enabling block-wise FP8 quantization for SGLang rollouts, broadcasting the quantized weights via NCCL to save memory and bandwidth.

## 4. Key PR Progress
- **Feat/fsdp sglang fp8 rollout:** PR [#1379](https://github.com/areal-project/AReaL/pull/1379) implements the aforementioned FP8 rollout proposal. It introduces a custom FP8 kernel that auto-detects GPU availability and performs online BF16-to-FP8 quantization prior to the NCCL broadcast to SGLang.
- **Muon Optimizer Support:** PR [#1270](https://github.com/areal-project/AReaL/pull/1270) continues development. It integrates the Muon optimizer (MomentUm Orthogonalized by Newton-Schulz) with native distributed implementations for both FSDP2 and Megatron backends to potentially accelerate convergence.
- **Support PD Disaggregation:** PR [#1364](https://github.com/areal-project/AReaL/pull/1364) introduces Prefill-Decode disaggregation (DP=2, TP=n). By splitting inference into specialized roles, this PR aims to resolve GPU compute idling during memory-bound autoregressive decoding phases.
- **Fix DTensor Norm Output for Qwen:** Directly addressing Issue #1366, PR [#1365](https://github.com/areal-project/AReaL/pull/1365) adds a forward hook on the final norm to localize DTensor output, bypassing the breaking intermediate ops (`aten.alias`, `aten.slice`) specific to the Qwen family.
- **Rollout Trace Logging with Trackio:** PR [#1360](https://github.com/areal-project/AReaL/pull/1360) expands AReaL's integration with Hugging Face's Trackio, extending the existing metrics backend to include granular rollout trace logging.
- **Skip Controller-side CUDA Sync:** PR [#1377](https://github.com/areal-project/AReaL/pull/1377) optimizes single-controller mode by removing unnecessary `synchronize()` calls on the pure-orchestrator process, streamlining RPC issuance and CPU-side barriers.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs scale, the bottleneck in post-training RL (like PPO or GRPO) has shifted from pure compute to **inference-engine-to-trainer communication overhead and memory bandwidth**. AReaL is tackling the most critical systems-level bottlenecks in the current RL landscape. By aggressively integrating techniques like PD disaggregation (#1364) and heterogeneous precision (#1379), AReaL serves as a vital open-source testbed for running high-throughput, memory-efficient RL workloads at scale on modern GPU clusters.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-05-31 | **Repository:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Activity in TRL over the last 24 hours focused heavily on stabilizing the **GRPOTrainer** for distributed setups and advancing next-generation, high-throughput alignment techniques. Key themes include critical bug fixes for DeepSpeed ZeRO-3 compatibility, memory optimizations for alignment trainers (DPO), and the merging of vLLM's native weight-transfer API into the new `AsyncGRPO` architecture.

## 2. Releases
* **No new releases** detected in the last 24 hours.

## 3. Important Issues
* **ZeRO-3 + Liger Kernel Size Mismatch:** A long-standing bug ([#3368](https://github.com/huggingface/trl/issues/3368)) causing tensor size mismatches when using `use_liger_loss=true` with DeepSpeed ZeRO-3 in GRPO has sparked active fix attempts (see PR [#5891](https://github.com/huggingface/trl/pull/5891)).
* **KL Penalty Inconsistency in RLOO:** Issue [#5889](https://github.com/huggingface/trl/issues/5889) highlights that `RLOOTrainer` uses a first-order log ratio for KL penalties, whereas `GRPOTrainer` uses Schulman's second-order approximation. This architectural discrepancy can lead to negative per-token KL penalties and higher variance in RLOO.
* **Request for RDPO Integration:** A new proposal ([#5886](https://github.com/huggingface/trl/issues/5886)) suggests implementing RDPO (Reward Distribution Policy Optimization) in GRPO to address failure modes in prompt-level advantage domination and skewed reward distributions. 

## 4. Key PR Progress
* **AsyncGRPO & vLLM Integration:** PR [#5892](https://github.com/huggingface/trl/pull/5892) introduces native weight synchronization for `AsyncGRPO` using vLLM's 4-phase RL weight-transfer API (vLLM >= 0.22.0). Additionally, PR [#5854](https://github.com/huggingface/trl/pull/5854) makes padding-free training the default for `AsyncGRPO`, unpacking padded slices into a single concatenated sequence to optimize memory.
* **DeepSpeed & Liger Fixes:** Directly addressing Issue #3368, PR [#5891](https://github.com/huggingface/trl/pull/5891) fixes a weight gathering bug that caused crashes under ZeRO-3. 
* **DPO Memory Optimization:** PR [#5882](https://github.com/huggingface/trl/pull/5882) adds eager deletion (`del`) of intermediate logit tensors in `DPOTrainer._compute_loss`, significantly reducing VRAM peak usage during training.
* **Generation Config Bug Fix:** PR [#5888](https://github.com/huggingface/trl/pull/5888) corrects a missing `generation_kwargs` override in the paged generation path for both GRPO and RLOO trainers, fixing compatibility issues on `transformers < 5.0`.
* **Refactoring Self-Distillation Trainers:** A two-part refactoring effort ([1/2: #5862](https://github.com/huggingface/trl/pull/5862), [2/2: #5883](https://github.com/huggingface/trl/pull/5883)) decouples self-distillation trainers (SDFT, SDPO). Part 2 notably aligns the SDPO loss formula with its original paper, switching to a convex combination `(1 - w)·policy + w·distillation`.

## 5. Why This Project Matters in Today's RL Landscape
TRL remains the canonical framework for production-level LLM alignment. Today's activity demonstrates a clear shift in the open-source RL ecosystem: moving beyond standard synchronous PPO/DPO towards **high-throughput, asynchronous RLHF**. The heavy iteration on `AsyncGRPO` and seamless integrations with high-performance inference engines like vLLM highlight the community's focus on reducing the massive computational overhead of rollout generation. Furthermore, targeted memory optimizations (e.g., in DPO and padding-free GRPO) reflect the continuous push to fit larger policy models into fixed GPU budgets, bridging the gap between theoretical RL research and practical, distributed training.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-05-31

### 1. Today's Highlights
OpenRLHF maintains its focus on framework stability and RLHF training accuracy. Over the last 24 hours, activity was exclusively concentrated on a targeted bug fix in the PPO utility pipeline. A new pull request addresses a token-length accounting edge case during overlong penalty calculations, ensuring accurate reward shaping for tool-using models. No new releases or issue reports were filed today.

### 2. Releases
*   **None.** No new versions or patches were released on 2026-05-31.

### 3. Important Issues
*   **None.** Zero issues were opened or updated in the last 24 hours. 

### 4. Key PR Progress
*   **[#1246 [OPEN] Fix overlong penalty action token length](https://github.com/OpenRLHF/OpenRLHF/pull/1246)**
    *   **Author:** Jiang020609
    *   **Summary:** This PR fixes a token accounting bug (linked to Issue #1243) in the `length_penalty` module. Previously, overlong sequence penalties could incorrectly include tool response tokens in the trainable response length. The update introduces logic to utilize the `action_mask` when available, properly excluding tool response tokens from the penalty calculation. 

### 5. Why This Project Matters in Today's RL Landscape
As production-grade LLMs increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning from AI Feedback (RLAIF), OpenRLHF serves as a critical, scalable open-source backend for distributed PPO and DPO training. 

Today's PR #1246 highlights a maturing ecosystem necessity: **Agentic RL accuracy**. As models are trained to use external tools (tool-calling/API interactions), accurately segmenting and masking environment responses from the model's internal generation is vital. Proper `action_mask` implementation ensures that reward signals and length penalties are applied strictly to the agent's autonomous generations, preventing catastrophic forgetting or skewed reward trajectories during complex, multi-step RL tasks.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-05-31

## 1. Today's Highlights
The `verl` ecosystem saw high activity over the last 24 hours with 10 active pull requests and no new releases. The focus is heavily split between hardening core RL algorithms (specifically PPO/GRPO numerical stability) and expanding infrastructure capabilities for Ascend NPUs, Megatron, and FSDP. Notably, community and core contributors are actively patching compatibility breaks for upstream dependencies like `transformers v5` and `trl>=0.29`.

## 2. Releases
None. 

## 3. Important Issues
*   **Algorithmic Inconsistencies in Core PPO/GRPO:** Issue [#6478](https://github.com/verl-project/verl/issues/6478) highlights critical bugs found via static analysis in `core_algos.py`. Discrepancies include missing `negative_approx_kl` clamps in variants like `clip_cov`/`kl_cov`, silent `alpha` overrides in GPG, and single-sample standard deviation mismatches in GRPO. This has already prompted a targeted fix in today's PRs.

## 4. Key PR Progress

**Algorithm & Training Stability**
*   **[#6538](https://github.com/verl-project/verl/pull/6538) [algo] fix: stabilize PPO policy-loss ratio computation:** Directly addresses the aforementioned Issue #6478 by clamping `negative_approx_kl` in affected PPO policy-loss variants to prevent extreme-ratio instability and ensure finite losses. Includes new regression tests.
*   **[#6271](https://github.com/verl-project/verl/pull/6271) [trainer, fully_async] feat: multi-trajectory rollout:** Introduces support for multiple trajectories within a single rollout during agent loops in the fully-async pipeline, a key evolution for complex agentic RL.

**Scaling & Infrastructure (FSDP & Megatron)**
*   **[#6408](https://github.com/verl-project/verl/pull/6408) [megatron] feat: NCCL communicator suspend/resume:** Implements native NCCL memory suspension for Megatron in colocated modes, dynamically freeing vital GPU memory during rollout phases.
*   **[#6512](https://github.com/verl-project/verl/pull/6512) [fsdp, model] feat: per-unit LoRA summon:** Unblocks RL fine-tuning for massive multi-stage models (e.g., Qwen3-Omni-30B) with a model-agnostic rewrite of `layered_summon_lora_params` supporting FSDP1/2. 
*   **[#6422](https://github.com/verl-project/verl/pull/6422) [trainer] feat: generic remote backend abstraction:** Refactors the trainer backend to support generic remote execution, introducing an `ArcticRL` backend instance.

**Dependency Compatibility & Hardware (Ascend NPUs)**
*   **[#6539](https://github.com/verl-project/verl/pull/6539) [model] fix: trl>=0.29 support:** Updates monkey-patching to successfully import `AutoModelForCausalLMWithValueHead` from newer `trl.experimental.ppo` namespaces.
*   **[#6540](https://github.com/verl-project/verl/pull/6540) [veomni] fix: transformers v5 support:** Fixes a critical `TypeError` crash on init caused by `_LazyAutoMapping.get()` changes in `transformers v5`.
*   **[#6535](https://github.com/verl-project/verl/pull/6535) & [#6520](https://github.com/verl-project/verl/pull/6520) [Ascend]:** Migrates 8 Ascend CI workflows from `pip` to `uv` for faster dependency resolution and upgrades NPU CI to CANN 9.0.0.
*   **[#5968](https://github.com/verl-project/verl/pull/5968) [ckpt]:** Resolves a `NotImplementedError` that blocked checkpoint saving/resuming during fully async training on Ascend NPUs.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and agentic training loops become standard post-training steps for LLMs and multimodal models, frameworks must handle extreme scale and hardware diversity. `verl` is aggressively tackling the actual production bottlenecks of RL: 
1. **Numerical Stability:** Fixing subtle bugs like unclamped KL divergences ([#6478](https://github.com/verl-project/verl/issues/6478)) prevents silent model degradation during long training runs.
2. **Resource Optimization:** Implementing NCCL suspend/resume ([#6408](https://github.com/verl-project/verl/pull/6408)) and advanced FSDP LoRA summoning ([#6512](https://github.com/verl-project/verl/pull/6512)) maximizes VRAM efficiency, which is the primary limiting factor for large-scale RL.
3. **Ecosystem Interoperability:** By maintaining strict compatibility with the bleeding-edge upstream libraries (`transformers v5`, `trl 0.29`) and alt-accelerators (Ascend NPUs), `verl` is positioning itself as a resilient, hardware-agnostic, production-ready RL engine.

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

No activity in the last 24 hours.

</details>