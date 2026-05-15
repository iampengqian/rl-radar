# RL Open Source Daily Digest 2026-05-16

> Generated: 2026-05-15 22:16 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-05-16 is defined by a clear bifurcation between the rapid, infrastructure-heavy evolution of LLM/VLM post-training frameworks and the quiet stability of classical, foundational RL libraries. 

Projects like TRL, verl, AReaL, and OpenRLHF are operating at the bleeding edge of systems engineering, aggressively tackling memory bottlenecks, distributed orchestration, and hardware heterogeneity to support trillion-parameter Mixture-of-Experts (MoE) models. Meanwhile, classical algorithm libraries (CleanRL, SB3, rl_games, Gymnasium) experienced minimal to zero activity, indicating a mature, stable phase for foundational single-agent and policy-optimization tools, with updates limited to minor type-hinting and community-driven algorithm proposals.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 3 | 28 | 0 | Hardening CI/CD and core math (GRPO/DPPO) for VLMs and MoE models. |
| **verl** | 8 | 19 | 0 | Rapid hardware expansion (Cambricon, Ascend) and MoE infrastructure debugging. |
| **ROCK** | 9 | 11 | 0 | Cloud governance, observability, and sandbox lifecycle management. |
| **AReaL** | 4 | 4+ | 0 | GPU memory optimization via fused kernels and collocated training/inference. |
| **Open Instruct** | 0 | 7 | 0 | Maintenance; squashing silent NaN corruptions and achieving GRPO parity. |
| **ROLL** | 1 | 3 | 0 | Hardware diversification (Ascend NPU enablement for Qwen3-30B). |
| **slime** | 1 | 3 | 0 | Inference backend stabilization (sglang) and custom RLHF reward hooks. |
| **OpenRLHF** | 1 | 1 | 0 | Bug fixes for LR schedulers and tokenization regressions in Qwen3. |
| **rl_games** | 2 | 0 | 0 | Troubleshooting cross-library benchmarking parity (SAC vs. SB3). |
| **CleanRL** | 1 | 0 | 0 | Proposal to add QR-DQN to expand distributional RL offerings. |
| **Gymnasium** | 0 | 1 | 0 | Minor maintenance patching vectorized environment type annotations. |
| **SB3** | 1 | 0 | 0 | Deep-dive community question regarding Atari environment wrapper mechanics. |
| **PettingZoo**, **Tianshou**, **torchtune** | 0 | 0 | 0 | No activity. |

## Shared Research & Engineering Directions

**Research Signals**
*   **GRPO Algorithmic Maturation:** GRPO (Group Relative Policy Optimization) is dominating the post-training space as a preferred alternative to PPO. Projects like TRL, verl, Open Instruct, and slime are actively refining advantage computations, masking invalid values, and syncing rollout log-probs to stabilize policy updates.
*   **Advanced Distillation & Multi-Agent Orchestration:** The ecosystem is moving beyond standard RLHF. verl introduced Multi-Teacher On-Policy Distillation (OPD) and multi-trajectory async rollouts, while slime implemented custom Training-Inference-Synchronization (TIS) hooks for granular reward loop control.

**Engineering & Infrastructure Signals**
*   **Silicon Diversification (The "Ascend" Era):** A massive engineering push is underway to break NVIDIA's monopoly. verl, ROLL, and TRL are concurrently integrating Huawei Ascend NPUs and Cambricon MLUs, adapting FSDP2 and Megatron backends for alternative accelerators.
*   **Crushing the VRAM/Memory Bottleneck:** Memory optimization is critical for 30B+ parameter MoE models. AReaL introduced Triton-based fused cross-entropy kernels to bypass massive logit tensors, while TRL focused heavily on clearing exception tracebacks and reducing batch sizes to survive CUDA OOM errors in CI.
*   **Colocation over Orchestration:** To avoid network-bound weight-sync delays, frameworks are moving toward same-device training/inference cycles. AReaL is leading this via zero-copy CUDA IPC weight transfers between Megatron and SGLang on the exact same GPUs.

## Differentiation Analysis

*   **Foundation vs. Post-Training Frameworks:** There is a strict separation of concerns. Gymnasium, SB3, and CleanRL provide standardized environments and mathematically transparent classical algorithms (QR-DQN, SAC). In contrast, TRL, verl, and AReaL function as hyperscale distributed systems orchestration layers where the RL algorithm is secondary to GPU memory management and distributed tensor parallelism.
*   **Cloud Orchestration vs. Algorithmic Execution:** Alibaba's ROCK differentiates itself by ignoring the RL math entirely to focus on cluster-level stability—specifically cgroup CPU metrics, XFS disk governance, and sandbox lifecycles. This is complementary to frameworks like ROLL or TRL, which assume the underlying cloud infrastructure just works.
*   **Inference-Training Coupling:** While OpenRLHF and TRL interface with inference engines like vLLM, AReaL and slime are deeply coupling their training loops with specific backends (SGLang, Megatron) using low-level hardware transfers (CUDA IPC) and custom routing proxies to squeeze out maximum MFU.

## Community Momentum & Maturity
*   **Maturing LLM Infra:** The nature of issues in TRL, verl, and OpenRLHF (e.g., Megatron checkpoint compatibility, FSDP2 deadlocks, LR scheduler regressions) indicates that post-training RL frameworks are exiting the "prototype" phase. They are currently paying down steep technical debt to achieve enterprise-grade reliability.
*   **Classical RL Stagnation/Stability:** Libraries like SB3, Gymnasium, and rl_games require very little core maintenance now. Their community momentum has shifted from feature development to cross-library benchmarking, standardization, and highly specific edge-case troubleshooting.
*   **Open-Source Commoditization:** verl and TRL are moving fast to open-source infrastructure capabilities (like multi-teacher distillation and 1M-context SFT) that were strictly proprietary to top-tier AI labs just a year ago, indicating a highly active and competitive contributor base.

## Trend Signals
*   **MoE Dominance:** The Qwen3-30B and Gemma4 MoE architectures are currently the primary stress-test for open-source RL frameworks. Failing to support heterogeneous buffer sizes and dynamic expert routing is now a critical framework liability.
*   **The Silent NaN Threat:** Multiple projects (TRL, Open Instruct, verl) are explicitly patching silent NaN corruptions in log-probabilities and advantage computations. This highlights a systemic vulnerability in current DPO/GRPO implementations when handling masked tokens or zero-std reward groups.
*   **Transition to Text-in/Token-in:** Tokenization regressions (as seen in OpenRLHF) suggest the ecosystem is undergoing a widespread architectural shift from text-based pipeline interactions to direct token-ID passing to optimize end-to-end throughput.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-05-16

### 1. Today's Highlights
The ROLL (Robust Open-source Learning League) framework is experiencing a significant push towards hardware diversification. Activity over the last 24 hours is heavily dominated by integrating and documenting support for Huawei Ascend NPUs. Simultaneously, a critical edge-case bug regarding learning rate scheduling in distributed Megatron actor training was flagged and updated. 

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **LR Scheduler Inconsistency in Megatron Actor (#442)** [OPEN]
    *   **Details:** A bug has been identified where the learning rate (LR) scheduler budget falls out of sync with its consumption when dynamic batching is enabled in the Megatron actor training path. The core issue stems from the scheduler calculating its budget based on nominal/static batch semantics rather than the dynamically adjusted batch sizes.
    *   **Link:** [alibaba/ROLL Issue #442](https://github.com/alibaba/ROLL/issues/442)

### 4. Key PR Progress
Development activity (3 PRs updated) is entirely focused on Ascend NPU enablement:
*   **docs: Add comprehensive Huawei Ascend NPU documentation and examples (#443)** [CLOSED]
    *   Merged documentation providing a complete suite for NPU support, including environment setup, RLVR pipeline walkthroughs, and troubleshooting FAQs in both English and Chinese.
    *   **Link:** [alibaba/ROLL PR #443](https://github.com/alibaba/ROLL/pull/443)
*   **fsdp2 & vllm adapt ascend for qwen3-30b model (#441)** [CLOSED]
    *   Merged adapter layer enabling ROLL to run the Qwen3-30B model using FSDP2 and vLLM specifically tailored for Ascend hardware.
    *   **Link:** [alibaba/ROLL PR #441](https://github.com/alibaba/ROLL/pull/441)
*   **feat: Add npu megatron support (#380)** [OPEN]
    *   An ongoing, older PR (since March) that adds support for Huawei Ascend NPU devices with the Megatron-Core backend, including updates to platform detection logic. 
    *   **Link:** [alibaba/ROLL PR #380](https://github.com/alibaba/ROLL/pull/380)

### 5. Why This Project Matters in Today's RL Landscape
As reinforcement learning from human feedback (RLHF) and post-training become the primary bottlenecks and competitive moats for Large Language Models (LLMs), the underlying infrastructure must scale efficiently. 

The recent activity in ROLL highlights two major macro-trends in the AI ecosystem:
1.  **Hardware Diversification (The "Ascend" Push):** With global GPU supply constraints and the rise of alternative AI accelerators, frameworks must be hardware-agnostic. ROLL's active integration of Huawei Ascend NPUs, FSDP2, vLLM, and Megatron-Core demonstrates a commitment to cross-platform RL training, allowing users to bypass traditional GPU clusters for massive models like Qwen3-30B.
2.  **Complexity in Distributed RL:** Issue #442 perfectly illustrates the hidden technical debt in modern RL. As frameworks mix dynamic batching (crucial for variable-length sequences in LLM rollouts) with massive distributed tensor parallelism (like Megatron), traditional static training assumptions (like LR warmup steps) break down. Solving these low-level distributed orchestration bugs is critical for stabilizing RL training runs that often cost thousands of dollars in compute time.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for ROCK based on the provided GitHub data.

# RL Open-Source Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-05-16

### 1. Today's Highlights
Activity on the ROCK (RL based on Cloud Computing Kernel) repository spiked yesterday with **11 active PRs and 9 updated Issues**, focusing heavily on sandbox stability, infrastructure observability, and SDK decoupling. 
Key themes include:
*   **Infrastructure Governance:** Automated cleanup mechanisms for sandbox logs and XFS disk quotas.
*   **Observability Fixes:** Correcting container-level CPU metrics and metastore endpoint routing.
*   **SDK Flexibility:** Decoupling hard-coded configurations (like OSS buckets and cluster defaults) from client-side environment variables to server-driven configs.

### 2. Releases
*   **No new releases** were published on 2026-05-15.

### 3. Important Issues
*   **[Bug] `LinuxRocklet` CPU Misreporting ([alibaba/ROCK Issue #945](https://github.com/alibaba/ROCK/issues/945)):** Raised by `jake11-oho`, this critical bug identifies that `psutil.cpu_percent()` captures host-level CPU usage rather than cgroup-constrained container resources, skewing RL training environment metrics.
*   **[Feature] Sandbox Log Disk Governance ([alibaba/ROCK Issue #954](https://github.com/alibaba/ROCK/issues/954)):** Proposed by `jinbai340997`, this enhancement aims to prevent disk exhaustion on worker nodes by implementing a 3-day deferred archive system for sandbox logs to OSS, featuring a fail-safe retention policy.
*   **[Feature] Dual-Account OSS STS Migration ([alibaba/ROCK Issue #952](https://github.com/alibaba/ROCK/issues/954)):** Addresses technical debt by migrating the legacy single-account file transfer pipeline to a dual-account setup via a new `/get_token_v2` endpoint, ensuring backward compatibility with older SDKs.
*   **[Feature] Full-Lifecycle State Queries ([alibaba/ROCK Issue #950](https://github.com/alibaba/ROCK/issues/950)):** Enhancement requested by `zhangjaycee` to upgrade the `get_status` API interface to support querying across all sandbox lifecycle states.

### 4. Key PR Progress
*   **PR #946 - Container CPU Fix:** Directly addressing Issue #945, this PR refactors the Rocklet to read metrics from cgroups instead of `/proc/stat` for accurate container CPU reporting. ([alibaba/ROCK PR #946](https://github.com/alibaba/ROCK/pull/946))
*   **PR #955 - Log Archival System:** Implements the fail-safe log disk governance proposed in Issue #954, ensuring logs are never force-deleted if OSS archiving fails. ([alibaba/ROCK PR #955](https://github.com/alibaba/ROCK/pull/955))
*   **PR #949 (Merged) - OSS Configuration Decoupling:** Resolves Issue #943. OSS uploads/downloads are no longer strictly bound to client-side `ROCK_OSS_*` env vars. The server now pushes bucket configurations, utilizing a 3-layer resolution mechanism (Env > Server > Unavailable) for smoother deployments. ([alibaba/ROCK PR #949](https://github.com/alibaba/ROCK/pull/949))
*   **PR #931 - Dockerfile Sandboxing:** An ongoing feature allowing `SandboxConfig` to accept an `Image` declarative type, enabling direct initialization from a Dockerfile. ([alibaba/ROCK PR #931](https://github.com/alibaba/ROCK/pull/931))
*   **PRs #941 & #905 (Merged):** Closed out critical stability issues by properly cleaning up XFS project quotas upon container stop ([alibaba/ROCK PR #941](https://github.com/alibaba/ROCK/pull/941)) and handling `ray.init()` exceptions during background reconnections ([alibaba/ROCK PR #905](https://github.com/alibaba/ROCK/pull/905)).

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, scaling from single-node prototyping to massive, distributed training runs relies entirely on the reliability of the underlying compute orchestration. ROCK acts as a critical bridge between RL algorithms and scalable cloud infrastructure. 

Today's updates highlight a maturing ecosystem: fixing cgroup-level CPU metric reporting ensures that RL resource allocation algorithms operate on accurate ground-truth data rather than host-level illusions. Furthermore, implementing automated disk governance and decoupling storage endpoints (OSS) allows researchers and engineers to spin up and tear down thousands of ephemeral training sandboxes without risking node failure due to disk exhaustion or being blocked by rigid storage configurations. By stabilizing these infrastructure layers, ROCK allows RL practitioners to focus purely on policy optimization and environment design.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL ecosystem daily digest for **2026-05-16**.

### 1. Today's Highlights
The `THUDM/slime` ecosystem saw steady maintenance and feature expansion over the past 24 hours. Activity is currently focused on improving backend stability for inference engines (specifically `sglang`), extending Training-Inference-Synchronization (TIS) customization, and hardening SFT data pipelines. No new releases were cut today.

### 2. Releases
*   **None** – No new official releases were published on 2026-05-16.

### 3. Important Issues
*   **R3/Routing Replay Crash Resolved** ([#1909](https://github.com/THUDM/slime/issues/1909)): A critical bug was recently closed regarding the R3 (Rollout Routing Replay) configuration. Users attempting to enable `--use-rollout-routing-replay` alongside `--sglang-enable-return-routed-experts` encountered a `ValueError` due to missing `rollout_routed_experts` in the rollout data dictionary. The issue highlights active edge-case challenges when integrating distributed inference engines with advanced RL routing techniques.

### 4. Key PR Progress
*   **Custom Rollout-Proxy TIS Hooks ([#1912](https://github.com/THUDM/slime/pull/1912)):** This PR introduces bypass mode for Training-Inference-Synchronization (TIS) via custom hooks. It enforces a `custom_tis_function_path` when combining `use_rollout_logprobs` and `use_tis`, passing `current_log_probs` and `advantages` directly to the hook. This is a crucial abstraction for researchers running highly customized RLHF/PPO reward loops.
*   **`sglang` Speculative Metric Bug Fix ([#1913](https://github.com/THUDM/slime/pull/1913)):** Resolves an `AttributeError` thrown during `_compute_spec_metrics`. When running in isolated modes like `debug_train_only`, the `sglang` arguments are unparsed, crashing the metrics tracker. The fix safely defaults `sglang_speculative_algorithm` to `None` using `getattr`. 
*   **SFT Token Budget Overflow Fix ([#1841](https://github.com/THUDM/slime/pull/1841)):** Updated after a month of inactivity, this PR extends max-length filtering to `messages`-style (conversational) datasets. By applying chat-template tokenization early, it prevents overlong sequences from bypassing dynamic batching and violating `max_tokens_per_gpu` budgets during Supervised Fine-Tuning.

### 5. Why This Project Matters in Today's RL Landscape
As post-training scales from standard Supervised Fine-Tuning (SFT) into complex on-policy Reinforcement Learning (like PPO and GRPO), the bottleneck shifts from model computation to inference-backend orchestration. **Slime** acts as a critical bridge between distributed LLM serving engines (like `sglang`) and RL training loops. 

Today's digest reflects the bleeding-edge challenges of this ecosystem:
1.  **Hardware-Memory-Routing Tradeoffs:** Tracking routed experts for techniques like R3 is vital for optimizing compute vs. performance, but requires flawless state management between the rollout engine and the trainer.
2.  **Customizable Reward Loops:** The push for custom TIS hooks shows that off-the-shelf RLHF is no longer enough for state-of-the-art reasoning models; researchers need deep, granular control over advantage calculations and proxy log-probs. 
3.  **Pipeline Resilience:** Handling edge cases in argument parsing (`debug_only` modes) and multi-modal sequence lengths ensures that large-scale RL training runs don't crash mid-job over trivial data-routing errors.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-16

## 1. Today's Highlights
Activity on AReaL (`github.com/inclusionAI/AReaL`) over the last 24 hours indicates a strong push toward **system-level optimization and infrastructural robustness**. With no new releases, core maintainers and contributors are actively merging bug fixes for checkpointing and debugging several high-impact, performance-enhancing feature PRs. Key themes include optimizing GPU memory via fused CUDA kernels and introducing novel weight-syncing mechanisms for collocated training/inference workloads.

## 2. Releases
*   **No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **Trajectory Dumping Bugs:** Maintainer `daihaowz` reported two critical bugs regarding the newly introduced trajectory dump feature. [#1342](https://github.com/inclusionAI/AReaL/issues/1342) highlights an issue where dumps write to the wrong version directory after checkpoint recovery, and [#1341](https://github.com/inclusionAI/AReaL/issues/1341) notes that the Megatron engine fails to save optimizer checkpoints entirely.
*   **Megatron Checkpointing Compatibility:** Tied to the above checkpoint issues, a new bug was identified where `megatron-core >=0.11` breaks standard checkpoint save/load flows due to `flattened_range` metadata validation.
*   **Request for Offline Debugging Tools:** A new feature request ([#1343](https://github.com/inclusionAI/AReaL/issues/1343)) proposes trajectory dump/replay capabilities. Given that the rollout phase dominates wall-clock time and compute, offline replay would be a highly efficient paradigm for RL debugging.
*   **Ongoing vLLM Instability:** The open bug [#1290](https://github.com/inclusionAI/AReaL/issues/1290) regarding GRPO instability and collapsing on GSM8K when using vLLM (vs. stable performance on SGLang) received further community engagement.

## 4. Key PR Progress
*   **Fused Linear Cross Entropy (LCE):** [PR #1322](https://github.com/inclusionAI/AReaL/pull/1322) introduces a Triton-based fused LCE path for Megatron training. This avoids materializing the massive `[tokens, vocab]` logits tensor, representing a critical memory/performance optimization for large-scale LLM RL. 
*   **Colocated CUDA IPC Weight Transfer:** [PR #1310](https://github.com/inclusionAI/AReaL/pull/1310) pushes the `awex-colocate` branch forward by enabling Megatron training and SGLang inference to share the exact same GPUs. It utilizes CUDA IPC for zero-copy weight transfers, bypassing standard NCCL P2P overhead.
*   **Ray RDT Integration:** [PR #1305](https://github.com/inclusionAI/AReaL/pull/1305) implements the Ray Direct Transport (RDT) backend for weight syncing, fulfilling the proposal in [#1243](https://github.com/inclusionAI/AReaL/issues/1243) to modernize synchronization away from legacy `xccl` bottlenecks.
*   **Megatron Checkpoint Fix:** [PR #1344](https://github.com/inclusionAI/AReaL/pull/1344) directly addresses the breaking changes in `megatron-core >=0.11` by switching the sharding type to `dp_reshardable` to fix metadata integrity failures.

## 5. Why This Project Matters in Today's RL Landscape
In the current landscape of Reinforcement Learning from Human Feedback (RLHF) and reasoning model training (e.g., GRPO), the primary bottleneck is no longer just the mathematical algorithms—it is **systems infrastructure**. AReaL's latest PRs perfectly exemplify the next evolution of RL frameworks: 

1.  **Crushing the Memory Bottleneck:** By fusing the cross-entropy loss directly with the LM head (PR #1322), AReaL tackles the out-of-memory errors that frequently plague RL fine-tuning of 100B+ parameter models. 
2.  **Colocation over Orchestration:** Historically, RL frameworks separate inference and training workers across different GPU pools, leading to massive network-bound weight-sync delays. AReaL's aggressive pursuit of CUDA IPC colocation (PR #1310) and Ray RDT (PR #1305) signals a shift toward hyper-efficient, same-device training/inference cycles. 

These systems-level advancements are critical for keeping compute costs sustainable as the industry shifts toward iterative, long-horizon RL training strategies.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Ecosystem Daily Digest: TRL
**Date:** 2026-05-16 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Activity on TRL over the last 24 hours has been heavily focused on **stabilizing CI/CD pipelines** and **hardening core RL training math**. With 28 PRs updated (and 3 issues), maintainers and contributors are actively patching Out-Of-Memory (OOM) errors in GPU tests and fixing subtle gradient/advantage computation bugs in GRPO and DPPO trainers. Frontend scaling efforts for frontier MoE models also saw continued tracking. 

## 2. Releases
No new releases were cut in the last 24 hours.

## 3. Important Issues
*   **[🏋 SFT, ⚡accelerate] 🛣️ Path to 30B MoE long-context SFT training** ([#5713](https://github.com/huggingface/trl/issues/5713)): A major tracking issue for scaling TRL's `SFTTrainer` to frontier-scale Mixture-of-Experts (Qwen3-30B-A3B and 235B-A22B). The goal is end-to-end training at long contexts (16k → 1M) with competitive MFU on 8×H100 nodes.
*   **CI CUDA Out-Of-Memory Errors** ([#5750](https://github.com/huggingface/trl/issues/5750)): CI tests (specifically for VLMs like Gemma4) are frequently crashing due to VRAM limitations. This has spawned several hotfix PRs today.
*   **Transformers v5.0.0 Upstream Breakage** ([#5754](https://github.com/huggingface/trl/issues/5754)): CI is failing due to a missing `num_experts` attribute in `GptOssConfig`. Though the issue was closed, it highlights ongoing API volatility between TRL and the new `transformers` v5 release.

## 4. Key PR Progress

**Core Algorithm & Gradient Fixes:**
*   **Fix NaN-poisoned group mean/std** ([#5775](https://github.com/huggingface/trl/pull/5775), supersedes [#5773](https://github.com/huggingface/trl/pull/5773)): Fixes `sum_then_normalize` advantage computation in `GRPOTrainer` and `DPPOTrainer`. Previously, `nansum` was silently poisoning the group mean/std when reward functions returned `None`.
*   **Fix spurious KL gradients** ([#5777](https://github.com/huggingface/trl/pull/5777)): Resolves a subtle bug where zero-std reward groups produced spurious KL gradients if `beta > 0`, stabilizing policy updates.
*   **Fix Liger kernel crash with `device_map="auto"`** ([#5340](https://github.com/huggingface/trl/pull/5340)): Ongoing fix for multi-GPU crashes in `GRPOTrainer` when using Liger kernels.

**VLM Testing & CI Stabilization:**
*   **Clearing chained exception tracebacks** ([#5776](https://github.com/huggingface/trl/pull/5776)): A clever memory leak patch that clears chained exception tracebacks to prevent CUDA OOM during test runs.
*   **Fix OOM by reducing batch size** ([#5767](https://github.com/huggingface/trl/pull/5767)): Directly addresses the VLM OOM CI issue by dropping `per_device_train_batch_size` from 3 to 1.
*   **XPU Cache Memory Cleanup** ([#5771](https://github.com/huggingface/trl/pull/5771)): Refines test fixtures to automatically clear XPU cached memory, broadening hardware support stability.
*   **Aligning tiny VLM models:** Drops obsolete test guards and aligns architectures for tiny Qwen2.5-VL ([#5739](https://github.com/huggingface/trl/pull/5739)), Qwen3-VL ([#5779](https://github.com/huggingface/trl/pull/5779)), LLaVA ([#5778](https://github.com/huggingface/trl/pull/5778)), and Gemma3 ([#5772](https://github.com/huggingface/trl/pull/5772)) to ensure parameter updates execute correctly.

**Architectural Enhancements:**
*   **Move async rollout worker to separate process** ([#5749](https://github.com/huggingface/trl/pull/5749)): Moves rollout generation/scoring to a spawned child process, preventing the autograd engine from competing for the GIL (a significant performance bottleneck).
*   **Add telemetry to trainers** ([#5758](https://github.com/huggingface/trl/pull/5758)): Introduces a single anonymous ping per trainer instantiation to help maintainers track usage of `SFTTrainer`, `GRPOTrainer`, etc.
*   **Add support for MaxRL** ([#5026](https://github.com/huggingface/trl/pull/5026)): Long-running PR expanding TRL's algorithmic offerings.

## 5. Why This Project Matters in Today's RL Landscape
TRL serves as the open-source foundation for post-training and alignment of frontier models. Today's digest reveals a project in a mature, hardening phase. By aggressively patching advantage/gradient math (NaN poisoning, zero-std KL spurious gradients) and ensuring test suites accurately reflect modern Vision-Language Models (Qwen, LLaVA, Gemma) and MoE architectures, TRL is cementing its reliability for enterprise-scale RLHF and GRPO. Furthermore, architectural shifts like moving async rollouts out of the GIL ([#5749](https://github.com/huggingface/trl/pull/5749)) show that the team is actively optimizing throughput for large-scale distributed training on modern GPU/XPU clusters.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL daily digest for OpenRLHF based on the provided data.

# RL Daily Digest: OpenRLHF
**Date:** 2026-05-16 | **Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

### 1. Today's Highlights
Activity over the last 24 hours was low but highly targeted, featuring the closure of one significant bug fix regarding learning rate schedulers and the resolution of a tokenization compatibility issue with Qwen models. No new releases were published.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
*   **[CLOSED] [#1117 vLLM token id out of vocabulary](https://github.com/OpenRLHF/OpenRLHF/issues/1117)**
    *   **Context:** A user reported encountering a persistent `"Token id xx out of vocabulary"` error during sampling when training Qwen3 models after upgrading OpenRLHF (from v0.8.5 to v0.8.10).
    *   **Analysis:** The root cause is suspected to be a regression related to the framework's transition from a text-in/text-out pipeline to a token-in/token-out pipeline. This highlights the ongoing integration challenges between rapidly evolving LLM backends (like vLLM) and RLHF training loops. 

### 4. Key PR Progress
*   **[CLOSED] [#1238 fix: only pass min_lr_rate to schedulers that accept it](https://github.com/OpenRLHF/OpenRLHF/pull/1238)**
    *   **Context:** Authored by `matteolippi`, this PR addresses a bug introduced in a recent refactor (PR #1221).
    *   **Analysis:** The `DeepspeedStrategy` was unconditionally passing `min_lr_rate` to `transformers.get_scheduler` via `scheduler_specific_kwargs`. Because not all schedulers support this parameter, this caused failures. The fix introduces conditional logic to ensure `min_lr_rate` is only passed to compatible schedulers, stabilizing DeepSpeed integration.

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF serves as a critical bridge in the RL open-source ecosystem, connecting high-performance inference engines (vLLM) with distributed training frameworks (DeepSpeed). Today's updates perfectly illustrate its core challenges: maintaining stable training infrastructure (PR #1238) while managing the strict tokenization and architectural constraints required by state-of-the-art models like Qwen3 during RLHF alignment.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-05-16  
**Project:** [verl-project/verl](https://github.com/volcengine/verl)  
**Activity:** 8 Issues | 19 PRs | 0 Releases

---

## 1. Today's Highlights
The verl ecosystem is rapidly expanding beyond its core NVIDIA GPU/AMD ecosystem into new hardware frontiers and cutting-edge model support. Key themes for today include **hardware diversification** (Cambricon MLU, Ascend NPUs), advanced **multi-agent/training paradigms** (Multi-Teacher OPD, multi-trajectory async rollouts), and critical **bug squashing for SOTA MoE models** (Qwen3.5, Gemma4) involving memory overheads and NCCL deadlocks.

## 2. Releases
No new releases were recorded in the last 24 hours. The community remains focused on merging feature branches and stabilizing the main branch for the upcoming 26Q2 roadmap milestones ([Issue #5836](https://github.com/verl-project/verl/issues/5836)).

## 3. Important Issues
*   **Gemma 4 & FSDP2 Deadlocks:** A critical bug was reported where heterogeneous buffer sizes in `fsdp2_load_state_dict` cause an NCCL deadlock when loading `google/gemma-4-26B-A4B-it`. ([Issue #6365](https://github.com/verl-project/verl/issues/6365))
*   **Qwen3 MoE Memory & Offloading Overheads:** Two interconnected bugs highlight performance bottlenecks when post-training `Qwen3-30B-A3B` on DGX H100s, noting ~10-13 GiB of unexplained extra VRAM usage and severe host offloading overheads. ([Issue #6366](https://github.com/verl-project/verl/issues/6366), [Issue #6367](https://github.com/verl-project/verl/issues/6367))
*   **Multimodal Expansion Requests:** The community is actively requesting native processor loading and multimodal training support for the Gemma 3/4 model families. ([Issue #6341](https://github.com/verl-project/verl/issues/6341))

## 4. Key PR Progress
*   **Hardware Expansion:** 
    *   [PR #6327](https://github.com/verl-project/verl/pull/6327) introduces native support for **Cambricon MLU** accelerators.
    *   [PR #6316](https://github.com/verl-project/verl/pull/6316) and [PR #6359](https://github.com/verl-project/verl/pull/6359) continue to fix and document the Ascend NPU backend.
    *   [PR #6363](https://github.com/verl-project/verl/pull/6363) adds flop calculation support for DT hardware, aiding accurate MFU tracking.
*   **Training Paradigms & Algorithms:**
    *   [PR #6271](https://github.com/verl-project/verl/pull/6271) implements multi-trajectory generation within a single rollout for the fully-async agent loop pipeline.
    *   [PR #6051](https://github.com/verl-project/verl/pull/6051) (Closed/Merged) adds **Multi-Teacher On-Policy Distillation (OPD)**, allowing distillation from multiple teacher models simultaneously.
*   **Algorithm & Tensor Robustness:** Developer *haoyang9804* submitted a series of crucial patches to mask invalid values and prevent silent correctness bugs in GRPO/KL computations ([PR #6361](https://github.com/verl-project/verl/pull/6361), [PR #6362](https://github.com/verl-project/verl/pull/6362), [PR #6349](https://github.com/verl-project/verl/pull/6349)).
*   **Megatron-FSDP Convergence:** [PR #6352](https://github.com/verl-project/verl/pull/6352) adds a dedicated SFT example for `Qwen3.5-35B-A3B` utilizing the advanced Megatron-FSDP hybrid backend.

## 5. Why This Project Matters in Today's RL Landscape
As RL post-training (like GRPO and PPO) becomes the definitive step for unlocking reasoning capabilities in LLMs/VLMs, verl has positioned itself as the industry's most versatile execution framework. Today's data shows verl acting as the critical abstraction layer solving the infrastructure crisis in modern AI: running trillion-parameter MoEs (Qwen 3.5) over heterogeneous distributed backends (FSDP2, Megatron) across diverse silicon (NVIDIA, Ascend, Cambricon). By open-sourcing optimizations for async agent loops and multi-teacher distillation, verl is actively commoditizing advanced RL paradigms that were previously proprietary to top-tier AI labs.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL open-source ecosystem daily digest for 2026-05-16, focusing on the AllenAI `open-instruct` repository.

### 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on repository maintenance and core infrastructure improvements, driven heavily by contributor `finbarrtimbers`. The repository saw zero new releases and zero new issues, but 7 pull requests received updates. The primary themes for the day were **GRPO (Group Relative Policy Optimization) feature parity** and **critical training pipeline bug fixes** (specifically addressing silent NaN corruptions and data-logging errors in DPO and benchmarking utilities).

### 2. Releases
No new releases were recorded in the past 24 hours. 

### 3. Important Issues
There were no active or newly created issues within the tracking window. However, it is worth noting that several recently closed PRs served as direct resolutions to latent, critical bugs in the codebase (e.g., silent NaN gradients in DPO loss computation).

### 4. Key PR Progress
*   **GRPO Trainer Upgrades:**
    *   [PR #1672](https://github.com/allenai/open-instruct/pull/1672) [CLOSED]: Achieved feature parity between the foundational OLMo-core GRPO trainer (`grpo.py`) and the optimized `grpo_fast.py`. This introduces an `EvalCallback` for prompt queuing and actor RPCs for evaluation setups.
    *   [PR #1671](https://github.com/allenai/open-instruct/pull/1671) [CLOSED]: Refactored the HuggingFace export flow. Replaced the legacy `save_hf_model` with a direct `convert_state_to_hf` pipeline and introduced a startup verifier (`verify_can_save_as_hf`) to ensure weight alignment on meta devices before training begins.
*   **Critical RL Training & Logging Bug Fixes:**
    *   [PR #1625](https://github.com/allenai/open-instruct/pull/1625) [CLOSED]: Patched a vulnerability in [`dpo_utils.py`](https://github.com/allenai/open-instruct/blob/main/open_instruct/dpo_utils.py) where `_get_batch_logps` would output NaN/Inf if all labels were masked (`-100`) with `average_log_prob=True`. This prevented silent gradient corruption during DPO training.
    *   [PR #1684](https://github.com/allenai/open-instruct/pull/1684) [OPEN]: Consolidated CSV header handling in `benchmark_generators.py` (fixing issues where headers were duplicated or never written) and migrated the module to `pathlib`.
    *   [PR #1619](https://github.com/allenai/open-instruct/pull/1619) [CLOSED] & [PR #1623](https://github.com/allenai/open-instruct/pull/1623) [CLOSED]: The two prior PRs addressing individual CSV benchmark writing bugs, now superseded/combined by PR #1684.
*   **Technical Debt:**
    *   [PR #1689](https://github.com/allenai/open-instruct/pull/1689) [CLOSED]: Cleaned up residual import references to the deleted `ppo_vllm_thread_ray_gtrl.py` script.

### 5. Why This Project Matters in Today's RL Landscape
In the current post-training and RLHF ecosystem, stability is just as critical as algorithmic innovation. `open-instruct` remains a foundational toolkit for the RL community because it bridges the gap between cutting-edge research implementations and production-grade reliability. 

Today's updates reflect a necessary maturation of RL infrastructure:
1.  **Standardizing GRPO:** GRPO has become a highly favored alternative to traditional PPO for LLM alignment (eliminating the need for a separate value/critic model). By ensuring OLMo-core parity, AllenAI is making GRPO more modular and scalable.
2.  **Silent Failure Mitigation:** DPO and RL training runs are notoriously expensive and prone to catastrophic loss divergences. Fixing silent NaN/Inf gradient bugs (like the one in `dpo_utils.py`) and standardizing model export verification saves researchers thousands of compute hours. 
3.  **Observability:** Fixing the benchmark generators ensures that RL reward tracking and evaluation metrics are accurately logged, which is vital for interpreting complex RL training dynamics.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

Here is the RL Open-Source Daily Digest for CleanRL based on the provided data.

### 1. Today's Highlights
Activity on the CleanRL repository was minimal over the past 24 hours, with zero pull requests, zero releases, and a single new issue. The highlight of the day is a community-driven proposal to expand the library's algorithmic repertoire by adding Quantile Regression Deep Q-Network (QR-DQN). 

### 2. Releases
No new releases were published on 2026-05-16. 

### 3. Important Issues
*   **Proposal to Add QR-DQN Algorithm ([Issue #553](https://github.com/vwxyzjn/cleanrl/issues/553))**
    *   **Author:** FelineAlloy
    *   **Summary:** A community member has requested to implement QR-DQN (based on the 2017 paper *Distributional Reinforcement Learning with Quantile Regression*). The author has already completed a working implementation in their fork, noting that it successfully replicates the benchmark performance outlined in the original paper. They are currently awaiting maintainer approval to submit a formal Pull Request.
    *   **Context:** Adding QR-DQN would significantly bolster CleanRL's distributional reinforcement learning offerings, following their single-file, hyper-transparent code philosophy. 

### 4. Key PR Progress
There were no active or updated Pull Requests in the last 24 hours. However, the open issue (#553) indicates that a well-progressed, benchmark-matching PR for QR-DQN is likely pending submission and review in the near future.

### 5. Why This Project Matters in Today's RL Landscape
In a modern RL landscape dominated by heavily abstracted, object-oriented frameworks (which can obscure the underlying mechanics of new algorithms), [CleanRL](https://github.com/vwxyzjn/cleanrl) remains a critical resource. It provides single-file, highly readable implementations of complex algorithms without relying on steep learning curves or buried abstractions. 

The proposal in Issue #553 perfectly illustrates CleanRL's value proposition: researchers and developers can confidently write, debug, and benchmark advanced techniques like distributional RL in a transparent environment. By lowering the barrier to understanding the exact mathematical implementations of algorithms like QR-DQN, CleanRL continues to serve as an indispensable bridge between theoretical research and practical, reproducible coding.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

**RL Ecosystem Daily Digest: rl_games**
**Date:** 2026-05-16

### 1. Today's Highlights
Activity for `Denys88/rl_games` over the past 24 hours has been entirely concentrated on issue discussions, with zero new pull requests, merged code, or releases. The focus remains on cross-library benchmarking and enhancing training control flexibility. 

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
Two long-standing issues saw updates yesterday, highlighting active user troubleshooting and feature requests:

*   **Algorithm Performance Discrepancy (#341):** [Issue #341](https://github.com/Denys88/rl_games/issues/341) remains open. The author reports a lack of convergence when using the Soft Actor-Critic (SAC) algorithm for a continuous control drone simulation, noting that the same environment converges successfully using Stable Baselines3 (SB3). This ongoing discussion (33 comments) points to potential discrepancies in SAC default hyperparameters, network initialization, or action scaling between major RL libraries.
*   **Training Control Feature Request (#348):** [Issue #348](https://github.com/Denys88/rl_games/issues/348) was recently closed after a brief discussion. The user proposed decoupling the training interruption process from standard metrics (reward thresholds, max epochs) to allow for custom termination criteria (e.g., achieving a highly specific, non-reward-based environmental state).

### 4. Key PR Progress
*   **No updates.** Zero pull requests were updated, opened, or merged in the last 24 hours, suggesting a currently passive development cycle or a temporary hiatus from the core maintainer.

### 5. Why This Project Matters in Today's RL Landscape
`rl_games` has historically established itself as a high-performance, TensorRT-friendly reinforcement learning library heavily utilized for robotics simulation (e.g., NVIDIA Isaac Gym) and continuous control. However, the friction highlighted in [Issue #341](https://github.com/Denys88/rl_games/issues/341) underscores a critical dynamic in today's RL landscape: **usability vs. benchmarking parity**. As frameworks like Stable Baselines3 (SB3) become the de facto standard for rapid prototyping due to out-of-the-box stability, high-speed libraries like `rl_games` are under increasing pressure to ensure algorithmic parity and seamless cross-library benchmarking to maintain their edge in high-throughput, GPU-accelerated training environments.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-05-16

## 1. Today's Highlights
The Gymnasium repository experienced an extremely quiet 24 hours with zero active issue reports and no new releases. Activity was limited entirely to ongoing maintenance, specifically a closed pull request addressing static type-checking annotations within the vectorized environment wrappers. 

## 2. Releases
**No new releases.**

## 3. Important Issues
**No new or updated issues.**

## 4. Key PR Progress
*   **[CLOSED] [fix(wrappers): correct RecordVideo vector step return type annotation](https://github.com/Farama-Foundation/Gymnasium/pull/1581)**
    *   **Author:** voidborne-d
    *   **Details:** This PR successfully resolved an underlying type-hinting bug (closes #1580). Previously, the `RecordVideo` wrapper for vectorized environments annotated the `step` function's return type with standard Python floats and booleans (`tuple[ObsType, SupportsFloat, bool, bool, dict]`). The fix corrects this to match the canonical `VectorEnv` signature (`tuple[ObsType, ArrayType, ArrayType, ...]`), ensuring static type checkers (like `mypy` or `pyright`) accurately recognize that vectorized environments return n-dimensional arrays (e.g., NumPy arrays) rather than scalar values.

## 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for environment interaction in Reinforcement Learning, Gymnasium's reliability is critical for the entire open-source RL stack. While today's update is a minor maintenance patch, accurate type annotations are highly important for modern RL engineering. Vectorized environments are the backbone of modern sample-efficient algorithms (like PPO or SAC using vectorized rollouts), and strict type-checking prevents subtle runtime bugs when passing large batched tensors between environment wrappers, replay buffers, and neural network training loops.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3
**Date:** 2026-05-16 | **Analyst:** RL Ecosystem Tracker

Here is your daily brief on the Stable Baselines3 (SB3) repository.

### 1. Today's Highlights
The SB3 repository experienced a quiet day on May 16, 2026, with zero pull requests updated and no new code releases. Activity was limited to a single, newly opened issue from a user diving deep into the internal mechanics of SB3's Atari environment wrappers. 

### 2. Releases
*   **No new releases.** 
*   *Analyst Note:* The last stable release remains the standard benchmark for the community. No hotfixes or patch updates were issued in the last 24 hours.

### 3. Important Issues
A highly specific architectural question was raised regarding environment initialization:
*   **[#2256] [Question] Discrepancy in `obs` returns from `self.env.reset()` within Atari Wrappers**
    *   **Author:** RongpingZhou
    *   **Summary:** The user identified an inconsistency in `stable_baselines3/common/atari_wrappers.py`. Specifically, `self.env.reset()` does not appear to return an observation variable in the `FireResetEnv` wrapper, whereas similar wrappers like `EpisodicLifeEnv` and `NoopResetEnv` do return the `obs`. 
    *   **Assessment:** While categorized as a question, this points to a potential code oversight or a deep quirk in how SB3 handles Atari environments that require the "FIRE" action to start the game. It is an excellent catch for anyone debugging custom Atari environments.
    *   **Link:** [DLR-RM/stable-baselines3 Issue #2256](https://github.com/DLR-RM/stable-baselines3/issues/2256)

### 4. Key PR Progress
*   **No active updates.** Zero pull requests were opened, closed, or updated within the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Even on quiet days, Stable Baselines3 remains a foundational pillar in the Reinforcement Learning open-source ecosystem. While newer frameworks are shifting toward JAX or highly distributed cloud-native architectures, SB3 maintains its dominance as the gold standard for **PyTorch-based, single-agent RL**. 

Its strict adherence to clean software engineering principles, unified API, and comprehensive documentation (via its companion library, SB3-Contrib) makes it the primary entry point for RL researchers and practitioners. Issues like today's Atari wrapper deep-dive (#2256) highlight the project's maturity; the community is no longer struggling with fundamental algorithm implementations, but rather iterating on edge cases and ensuring bulletproof environment compatibility.

</details>