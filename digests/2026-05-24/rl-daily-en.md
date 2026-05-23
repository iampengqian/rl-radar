# RL Open Source Daily Digest 2026-05-24

> Generated: 2026-05-23 22:14 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-05-24 demonstrates a distinct bifurcation between active LLM post-training infrastructure and quieter traditional RL environments. Advanced frameworks like `verl`, `TRL`, `AReaL`, `slime`, and `ROCK` are driving heavy engineering efforts to optimize the RLHF/GRPO training-inference lifecycle. Meanwhile, classical RL libraries (e.g., `CleanRL`, `OpenRLHF`, `Tianshou`) experienced zero activity, and foundational APIs (`Gymnasium`, `SB3`) saw only minimal documentation updates or upstream dependency troubleshooting. 

## Activity Comparison
The vast majority of ecosystem momentum is currently consolidated within LLM-focused post-training frameworks, while classical algorithm and environment libraries remain static.

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 2 | 9 | 0 | Scaling hardware backends (Ascend, TRT-LLM) and stabilizing GRPO/Agent RL. |
| **TRL** | 3 | 5 | 0 | Expanding SFT/RL algorithms (EAFT) and fixing critical DAPO/distillation bugs. |
| **AReaL** | 1 | 5 | 0 | High-throughput system architecture (CUDA IPC, Async checkpointing). |
| **ROCK** | 0 | 6 | 0 | Hardening CI/CD pipelines and adding asynchronous CLI job execution. |
| **slime** | 0 | 4 | 0 | Megatron scaling (variable batch sizes) and custom inference rollout hooks. |
| **SB3** | 1 | 0 | 0 | Upstream rendering dependency troubleshooting (SDL/Pygame). |
| **Gymnasium** | 0 | 1 | 0 | Improving MuJoCo onboarding and environment customization docs. |
| *Others* | *0* | *0* | *0* | *No activity: CleanRL, Open Instruct, OpenRLHF, PettingZoo, rl_games, ROLL, Tianshou, torchtune.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Entropy & Reasoning Control:** The ecosystem is heavily focused on managing model uncertainty and reasoning stability. `verl` is debugging sudden GRPO entropy spikes to prevent model collapse, while `TRL` introduced Entropy Adaptive Fine Tuning (EAFT) for SFT.
*   **Advanced Group-Relative Policy Gradients:** Work continues on refining GRPO and DAPO. `verl` patched a silent advantage leak in GRPO rejection sampling, and `TRL` addressed a token-level loss miscalculation in DAPO implementations.
*   **Agentic RL:** Fine-tuning models for multi-turn tool-calling is actively being stress-tested, as seen in `verl`'s troubleshooting of Qwen 35B tool-calling crashes.

**Engineering & Infrastructure Signals**
*   **Training-Inference Colocation:** The most dominant engineering theme is eliminating the synchronization bottleneck between training weights and inference engines. `AReaL` introduced CUDA IPC for direct FSDP-to-SGLang memory sharing, while `slime` implemented custom Triton Inference Server (TIS) hooks.
*   **Distributed Inference Rollouts:** Efficiently managing multi-GPU inference engines remains critical. `verl` resolved port conflicts (`EADDRINUSE`) for multi-replica SGLang nodes, and `slime` enabled variable global batch sizes for Megatron scaling.
*   **Cloud & Cluster Orchestration:** RL workflow management is maturing. `ROCK` is implementing non-blocking CLI job submissions (`--async`), and `AReaL` optimized disk-based LoRA adapter syncing to accelerate RLHF pipelines.

## Differentiation Analysis
*   **Full-Stack vs. Modular Abstractions:** `TRL` continues to differentiate as the accessible, tightly-integrated Hugging Face ecosystem bridge (e.g., adding Qwen3.5 templates and VLM support). Conversely, `verl` and `AReaL` operate at a lower systems level, competing on sheer hardware throughput, multi-node memory efficiency, and backend extensibility (e.g., Ascend NPUs, ArcticRL).
*   **Cloud-Hosted vs. Bare-Metal:** `ROCK` occupies a unique niche by abstracting distributed Kubernetes infrastructure, focusing on DevOps UX and CI reliability. `slime` focuses strictly on maximizing bare-metal distributed efficiency via Megatron and TRT-LLM integrations.
*   **Systems vs. APIs:** A clear line separates the LLM post-training frameworks (competing on FSDP/Megatron scaling and weight-transfer latency) from traditional RL environments. `Gymnasium` and `SB3` act as mature, stable APIs where current work is limited to edge-case dependency management and basic documentation.

## Community Momentum & Maturity
*   **Production Maturation:** The LLM post-training sector is showing clear signs of enterprise maturity. Projects like `AReaL` and `ROCK` are prioritizing robustness over feature bloat—focusing on CI pipelines, async checkpointing, and observability (e.g., Trackio trace logging).
*   **Algorithmic Stabilization:** Frameworks are moving past the hype of new algorithms and doing the unglamorous work of fixing foundational bugs. `TRL`'s resolution of cross-tokenizer knowledge distillation issues and `verl`'s patching of GRPO advantage leaks indicate that libraries are actively being battle-tested in large-scale production runs.
*   **Classical RL Stagnation:** The lack of activity across `CleanRL`, `Tianshou`, `PettingZoo`, and `rl_games` suggests that traditional deep RL tooling has reached a stable, mature plateau, with community momentum almost entirely absorbed by LLM reasoning and alignment.

## Trend Signals
*   **The Rise of "Vibe/Thinking" Maintenance:** As models adopt explicit reasoning steps (e.g., Qwen3.5's Think/NoThink templates), libraries are being forced to natively support granular control over generation markers and token-level entropy adjustments.
*   **Hybrid Memory Architectures:** The standard separation of training and inference compute is converging. CUDA IPC for colocated training/inference weights (seen in `AReaL`) signals a trend toward hybrid architectures designed to drastically reduce rollout latency.
*   **Hardware Fragmentation:** The ecosystem is rapidly expanding beyond NVIDIA dependencies. Active PRs integrating Huawei Ascend NPUs, TRT-LLM, and various distributed backends in `verl` indicate an industry-wide mandate for hardware-agnostic RL frameworks.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-05-24 | **Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

## 1. Today's Highlights
Activity over the past 24 hours has been entirely focused on DevOps and CLI UX. There were no new releases or user-reported issues. Instead, repository maintainers merged a series of Continuous Integration (CI) environment and network verification tests to harden the testing pipeline, while a highly anticipated community feature request for asynchronous job execution received an update.

## 2. Releases
* **No new releases** were published today.

## 3. Important Issues
* **0 issues updated.** 
* *Analyst Note:* While no issues were active in the last 24 hours, it is worth noting that PR #930 explicitly references closing Issue #929. This implies recent or ongoing community demand for more flexible, non-blocking training job submissions.

## 4. Key PR Progress
Six pull requests saw updates in the last 24 hours, highlighting a two-pronged development effort: robust CI pipelines and CLI enhancements.

* **CLI Asynchronous Execution:** [PR #930](https://github.com/alibaba/ROCK/pull/930) `[OPEN]` by *berstpander*. Updated after 12 days, this feature PR introduces the `--async` flag to `rock job run`. When enabled, it calls `Job.submit()` instead of blocking via `Job.run()`, returning vital execution metadata (`experiment_id`, `job_name`, `sandbox_ids`) immediately. This is a critical UX upgrade for researchers managing large-scale distributed RL workloads.
* **CI Network Reachability:** [PR #1009](https://github.com/alibaba/ROCK/pull/1009) `[OPEN]` and [PR #1008](https://github.com/alibaba/ROCK/pull/1008) `[CLOSED]` by *4ek0*. These PRs add network connectivity tests to verify internal service reachability specifically for ROCK's self-hosted CI runners.
* **CI Environment Verification:** [PR #1007](https://github.com/alibaba/ROCK/pull/1007) `[CLOSED]` and [PR #1006](https://github.com/alibaba/ROCK/pull/1006) `[CLOSED]` by *4ek0*. Merged to ensure the CI environment is properly configured by verifying system variables like date, hostname, and workspace paths.
* **CI Triggers:** [PR #1005](https://github.com/alibaba/ROCK/pull/1005) `[CLOSED]` by *4ek0*. A standard test PR to validate CI trigger configurations.

## 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, infrastructure overhead is a massive bottleneck. ROCK (RL On Cloud Kubernetes) aims to abstract this complexity. Today's digest perfectly illustrates the project's core value proposition. 

The progression of PR #1005 through #1009 shows a maturing, enterprise-grade effort to stabilize self-hosted Kubernetes and cloud runners. Simultaneously, the introduction of asynchronous job submission (PR #930) reflects a deep understanding of RL researcher workflows, where launching hyperparameter sweeps or distributed training jobs must be non-blocking to keep iteration cycles fast. By actively polishing both its backend CI reliability and frontend CLI flexibility, ROCK is positioning itself as a robust, production-ready framework for large-scale RL training.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: THUDM/slime
**Date:** 2026-05-24

## 1. Today's Highlights
Activity in the `slime` repository over the past 24 hours has been entirely focused on Pull Request updates, with no new releases or active issues. The core development focus is currently split between robust infrastructure enhancements—specifically supporting variable global batch sizes for Megatron—and targeted bug fixes for training environments and inference configurations. 

## 2. Releases
**None.** No new versions or tags were published today.

## 3. Important Issues
**None.** Zero issues were created or updated in the last 24 hours, indicating a stable bug-reporting baseline or a development phase heavily focused on ongoing PR reviews.

## 4. Key PR Progress
Four pull requests saw updates today:

*   **[Megatron Integration] [run-ci-megatron] [2/N] Support training with variable global batch size** ([PR #1933](https://github.com/THUDM/slime/pull/1933), `OPEN`): Authored by `zhuzilin`. A crucial infrastructure PR enabling dynamic global batch sizes during training, a feature highly desirable for efficient scaling and memory management in large-scale distributed RL.
*   **[Inference Customization] Support custom rollout-proxy TIS hooks in bypass mode** ([PR #1912](https://github.com/THUDM/slime/pull/1912), `OPEN`): Authored by `sjtushenhai`. Introduces the ability to use custom Triton Inference Server (TIS) hooks combined with rollout logprobs, allowing advanced users to bypass standard inference bottlenecks while retaining necessary logprob/advantage data flow.
*   **[Training Bug Fix] Guard sglang_speculative_algorithm read in --debug-train-only mode** ([PR #1938](https://github.com/THUDM/slime/pull/1938), `CLOSED`): Authored by `leofan-lab`. Fixed an `AttributeError` where `_compute_spec_metrics` attempted to access uninitialized `sglang` arguments when running in debug-train-only mode.
*   **[Build Fix] Fix: quote nvidia-modelopt requirement in build_conda.sh** ([PR #1927](https://github.com/THUDM/slime/pull/1927), `CLOSED`): Authored by `zhiminwei551`. Resolved a shell parsing issue where `>=` in the `pip install` command was incorrectly interpreted as a bash stdout redirection operator.

## 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning ecosystem, the bottleneck for training LLM-based agents (like RLHF/RLAIF pipelines) has shifted from traditional policy gradients to the underlying systems architecture—specifically, orchestrating distributed training clusters and high-throughput inference engines. 

The recent PR activity in `slime` highlights why this project is a critical piece of the RL infrastructure puzzle:
1.  **System-Level Resilience:** Fixes like [PR #1938](https://github.com/THUDM/slime/pull/1938) demonstrate a rigorous approach to hybrid training/inference frameworks, ensuring that debug modes run seamlessly even when heavy argument parsing for inference backends (like SGLang) is intentionally skipped.
2.  **Scalable Megatron Support:** [PR #1933](https://github.com/THUDM/slime/pull/1933) shows an active push toward supporting *variable global batch sizes*. In large-scale RL, the ability to dynamically adjust batch sizes on the fly is a massive advantage for maximizing GPU utilization and dealing with variable-length sequence generation without crashing.
3.  **Flexible Rollout Generation:** The push for custom Triton Inference Server hooks in bypass mode ([PR #1912](https://github.com/THUDM/slime/pull/1912)) indicates that `slime` is evolving to accommodate highly customized, enterprise-grade RL loops where inference deployment needs to be decoupled but still strictly logged for advantage computation.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Ecosystem Daily Digest: AReaL
**Date:** 2026-05-24 | **Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

## 1. Today's Highlights
The AReaL ecosystem saw no new releases today, but the contributor community remains highly active on the infrastructure front. The primary focus is heavily centered on **inference-training co-location optimization** and **checkpointing efficiencies**. Key developments include the introduction of CUDA IPC for FSDP weight updates and the integration of disk-based LoRA adapter syncing, both critical for reducing the hardware bottleneck in high-throughput RLHF pipelines.

## 2. Releases
No new releases were recorded in the last 24 hours. 

## 3. Important Issues
*   **[CLOSED] [bug, stale] [BUG] Single-controller SFT duplicates training tokens** ([#1202](https://github.com/areal-project/AReaL/issues/1202))
    *   *Summary:* An issue regarding duplicated training tokens during single-controller Supervised Fine-Tuning (SFT), consistently reproducible by the author. The issue was closed today after remaining stale for a brief period. Resolving this is crucial for ensuring data integrity in pre-RLHF training phases.

## 4. Key PR Progress
Infrastructure scaling and training-inference synchronization dominated today's PR updates:

*   **FSDP Weight Update via CUDA IPC** ([#1361](https://github.com/areal-project/AReaL/pull/1361))
    *   *Highlight:* Implements FSDP colocated weight transfer in `AwexFSDPAdapter`. It enables FSDP-trained models to directly update SGLang inference weights via CUDA IPC on shared GPUs, mirroring the existing Megatron path. This is a massive win for RL architecture memory efficiency and latency reduction.
*   **Disk-based LoRA Sync for FSDP & SGLang** ([#1233](https://github.com/areal-project/AReaL/pull/1233))
    *   *Highlight:* Introduces disk-based LoRA adapter synchronization. When `use_lora=True`, FSDP now intelligently writes adapter-only PEFT artifacts rather than saving the entire HuggingFace model, significantly speeding up incremental RL weight synchronization.
*   **Megatron Async Checkpointing** ([#1356](https://github.com/areal-project/AReaL/pull/1356))
    *   *Highlight:* Wires up `MegatronEngineConfig.async_save` using Megatron-core's `AsyncCallsQueue`. Overriding the previous `NotImplementedError`, this allows `save_checkpoint` to execute asynchronously, minimizing training pipeline stalls during massive model saves.
*   **Rollout Trace Logging with Trackio** ([#1360](https://github.com/areal-project/AReaL/pull/1360))
    *   *Highlight:* Extends AReaL's existing Trackio metrics backend to support granular Trace logging, enhancing local-first observability for complex RL rollout trajectories.
*   **RL Infra Cleanup Backport** ([#1353](https://github.com/areal-project/AReaL/pull/1353))
    *   *Highlight:* A merged maintenance PR that cleans up RL infrastructure, including unifying `httpx` clients, optimizing aiohttp timeouts, and adding asynchronous retry logic/CAS recreation for `AsyncRewardWrapper`.

## 5. Why This Project Matters in Today's RL Landscape
In modern post-training and RLHF landscapes, the most significant engineering bottleneck is the synchronization overhead between the training compute (generating weight updates) and the inference compute (generating rollouts). AReaL is tackling this exact chokepoint. Today's updates—specifically the **FSDP-SGLang CUDA IPC weight sharing** and **disk-based LoRA adapter syncing**—represent state-of-the-art optimizations. By enabling rapid, memory-efficient weight propagation directly to inference engines, AReaL is actively building the open-source infrastructure necessary to train and iterate on massive-scale LLMs efficiently.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-05-24

Here is the daily overview of the Reinforcement Learning open-source ecosystem, focusing on the latest activities, bug fixes, and feature integrations in the Hugging Face `trl` repository.

## 1. Today's Highlights
Activity over the last 24 hours shows a strong community focus on expanding fine-tuning techniques and polishing core RL trainers. Key developments include the introduction of **Entropy Adaptive Fine Tuning (EAFT)** for the `SFTTrainer`, new **chat templates for Qwen3.5**, and critical bug patches for DAPO token-level loss calculations and cross-tokenizer knowledge distillation.

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **[Potential Bug] DAPO Token-Level Loss Implementation ([#5375](https://github.com/huggingface/trl/issues/5375)):** User `jiosephlee` flagged that the current implementation of token-level loss for DAPO treats all tokens equally in a batch, which diverges from the expected behavior. *Status: Open.*
*   **[Fixed] Cross-Tokenizer Distillation in GKD/MiniLLM ([#4562](https://github.com/huggingface/trl/issues/4562)):** A bug causing incorrect training results when using student and teacher models with different tokenizers was officially marked as closed.
*   **[Fixed] Multi-GPU Saving Logic ([#3233](https://github.com/huggingface/trl/issues/3233)):** An older, highly specific bug regarding checkpoint collisions in variable output directories during DeepSpeed/multi-GPU setups has been resolved and closed.

## 4. Key PR Progress
*   **Add Entropy Adaptive Fine Tuning ([#5823](https://github.com/huggingface/trl/pull/5823)):** A new PR was opened to integrate EAFT (from paper [2601.02151](https://huggingface.co/papers/2601.02151)) directly into the `SFTTrainer`. This effectively supersedes the previous closed attempt ([#4802](https://github.com/huggingface/trl/pull/4802)), porting the implementation originally from LlamaFactory. 
*   **Qwen3.5 Think/NoThink Templates ([#5824](https://github.com/huggingface/trl/pull/5824)):** Adds new training chat templates supporting generation markers for the latest Qwen3.5 models, wiring them into `get_training_chat_template`.
*   **Fix `metric_for_best_model` KeyError ([#5811](https://github.com/huggingface/trl/pull/5811)):** Merged/Closed. Fixed a frustrating `KeyError` that occurred during evaluation when using trainer-specific metrics like `eval_mean_token_accuracy` by changing the log update logic to an in-place mutation.
*   **GKD and MiniLLM Cross-tokenizer Fix ([#4561](https://github.com/huggingface/trl/pull/4561)):** Closed/Merged. Resolved Issue #4562 by ensuring teacher models properly re-tokenize student rollouts when distinct tokenizers are used.
*   **GOLDTrainer VLM Support ([#5461](https://github.com/huggingface/trl/pull/5461)):** Still seeing active updates; this PR aims to extend the GOLD (Goal-conditioned Reinforcement Learning) Trainer to support Vision-Language Models.

## 5. Why This Project Matters in Today's RL Landscape
As the RL landscape rapidly shifts beyond standard PPO and DPO, post-training techniques are becoming highly specialized. Today's digest perfectly illustrates `trl`'s crucial role as the centralized, agnostic framework for these cutting-edge shifts:
1.  **Granular Control over Reasoning & Accuracy:** The Qwen3.5 templates and the EAFT PR highlight the ecosystem's pivot toward "thinking" models, where granular control over entropy and generation markers (like `<think />` tags) is required to train models efficiently without catastrophic forgetting.
2.  **Complex Model Interactions:** The resolution of the cross-tokenizer distillation bug proves that `trl` is successfully maturing beyond single-model training. As the industry leans heavily on knowledge distillation to compress large models into smaller, cost-effective ones, robust cross-tokenizer support is a critical infrastructure requirement.

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

# RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-05-24 | **Project:** [verl-project/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
The verl ecosystem saw steady infrastructure and debugging activity over the past 24 hours, with 9 Pull Requests updated and 2 key Issues receiving community attention. The focus remains heavily on hardware/backend compatibility (Ascend, FSDP, TRT-LLM) and stabilizing complex training scenarios like multi-turn Agent RL and GRPO.

## 2. Releases
*   **New Releases:** None.

## 3. Important Issues
Two significant training stability issues were updated today, highlighting ongoing challenges in advanced RL fine-tuning:
*   **Agent RL Tool-Calling Crash ([#6252](https://github.com/verl-project/verl/issues/6252)):** Users are experiencing training crashes around 80-130 steps when fine-tuning Qwen3.5/3.6 35B-A3B models for multi-turn tool calling. The crashes are preceded by a spike in malformed tool calls.
*   **GRPO Entropy Spike ([#2738](https://github.com/verl-project/verl/issues/2738)):** A long-standing issue (👍 2) regarding sudden, unexpected increases in entropy during mathematical task training using GRPO, which ultimately leads to model collapse. 

## 4. Key PR Progress
Today's PRs reflect active maintenance in distributed rollout scaling, algorithm patching, and hardware support:
*   **Algorithm Fix:** PR [#6452](https://github.com/verl-project/verl/pull/6452) patches a silent GRPO advantage leak that occurs when rollout rejection sampling fully rejects a response within a same-prompt group.
*   **Rollout Scaling & Fixes:** 
    *   PR [#6448](https://github.com/verl-project/verl/pull/6448) fixes `EADDRINUSE` port conflicts when launching multiple SGLang rollout replicas on a single node (e.g., 4 replicas on 8×H100s).
    *   PR [#6344](https://github.com/verl-project/verl/pull/6344) (Closed/Merged) patched FP8 configuration paths for async RL and multinode rollouts using TRT-LLM.
*   **Hardware & Backend Expansion:**
    *   PR [#6422](https://github.com/verl-project/verl/pull/6422) introduces a generic Remote Backend abstraction (featuring ArcticRL) for RL training.
    *   PR [#6316](https://github.com/verl-project/verl/pull/6316) continues to push fixes for the Huawei Ascend `mindspeedllm` backend.
*   **Model Support & CI:** PR [#5920](https://github.com/verl-project/verl/pull/5920) adds Sequence Parallelism (SP) for Qwen3.5 FSDP GRPO training, while PR [#6445](https://github.com/verl-project/verl/pull/6445) cleans up outdated Qwen2.5-VL code. PR [#6451](https://github.com/verl-project/verl/pull/6451) addresses test OOM errors in the CI pipeline.

## 5. Why This Project Matters in Today's RL Landscape
As the RL landscape shifts toward complex reasoning models (like GRPO) and autonomous agents, verl has positioned itself as a critical production-grade framework. Today's digest underscores exactly why: the community is actively solving the exact bottlenecks required for next-gen AI. Patching GRPO advantage leaks and taming model entropy (Issue #2738) are vital for stabilizing reasoning models, while port allocation for multi-GPU SGLang rollouts and Ascend NPU compatibility ensure that these massive models can be trained efficiently across diverse, large-scale hardware clusters.

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

# RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-05-24 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

## 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours was minimal but highly focused on documentation and developer onboarding. No new issues were reported, and no new software releases were published. The sole activity centers on an open Pull Request aimed at expanding environment customization tutorials.

## 2. Releases
* **No new releases** recorded in the last 24 hours. 

## 3. Important Issues
* **No new or updated issues** in the last 24 hours. The tracker remains quiet, indicating a stable codebase or a lull in community bug reporting.

## 4. Key PR Progress
* **[OPEN] [#1584 docs: add MuJoCo parameter customization tutorial](https://github.com/Farama-Foundation/Gymnasium/pull/1584)**
  * **Author:** Lonny154
  * **Summary:** This PR introduces a beginner-friendly tutorial demonstrating how to customize MuJoCo environment parameters via `gym.make` keyword arguments. Using `HalfCheetah-v5` as the primary example, the guide illustrates the mechanical impact of altering the `ctrl_cost_weight` parameter on the reward structure, while maintaining a fixed random seed for reproducibility.

## 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for single-agent reinforcement learning, Gymnasium's primary value proposition in the modern RL landscape is stability and standardization. While today's digest lacks code changes, PR #1584 highlights a critical ongoing need in the field: lowering the barrier to entry for environment mechanics. MuJoCo remains a premier benchmark for continuous control; empowering researchers to easily manipulate and understand reward hyper-parameters (like `ctrl_cost_weight`) directly accelerates reproducible reward-shaping and hyper-parameter tuning experiments.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (SB3)
**Date:** 2026-05-24 | **Project:** DLR-RM/stable-baselines3

## 1. Today's Highlights
Activity on the Stable Baselines3 repository was minimal over the past 24 hours, with zero new pull requests, zero new releases, and only one existing issue receiving an update. The sole activity revolves around an ongoing environmental/testing bug related to SDL dependencies.

## 2. Releases
*   **New Releases:** None.
*   **Latest Release Status:** The repository has not issued a new patch or feature update in the last 24 hours.

## 3. Important Issues
*   **#2255 [OPEN] [Bug]: Render Tests Failure (SDL_RumbleMotor Deps Duplicate)**
    *   **Author:** jvoids
    *   **Context:** Updated yesterday (2026-05-23), this issue reports a sudden failure in `tests/test_vec_envs.py::test_render`. The root cause appears to be linked to duplicate or conflicting `SDL_RumbleMotor` dependencies. 
    *   **Significance:** The author notes that the test previously passed silently, suggesting a breaking change in an underlying upstream dependency (likely Pygame or SDL2) rather than a recent commit to the SB3 codebase itself. CI pipelines relying on the latest environment builds may catch this failure.
    *   **Link:** [DLR-RM/stable-baselines3 Issue #2255](https://github.com/DLR-RM/stable-baselines3/issues/2255)

## 4. Key PR Progress
*   **Active PRs:** None (0 pull requests updated or created in the last 24 hours).

## 5. Why This Project Matters in Today's RL Landscape
Even on quiet days, Stable Baselines3 (SB3) remains a foundational pillar in the Reinforcement Learning open-source ecosystem. Built on PyTorch, it provides accessible, standardized, and rigorously tested implementations of core deep RL algorithms (e.g., PPO, SAC, TD3). 

The persistence of Issue #2255 highlights a common, critical challenge in RL engineering: **environmental reproducibility**. Because RL setups depend heavily on complex rendering engines (like SDL2) and rapid-updating simulator backends (like Pygame), "silent" breaking changes in underlying system dependencies frequently disrupt testing pipelines. Maintaining robust CI/CD workflows against these external shifts is a key operational focus for all open-source RL framework maintainers today.

</details>