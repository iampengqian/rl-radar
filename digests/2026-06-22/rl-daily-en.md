# RL Open Source Daily Digest 2026-06-22

> Generated: 2026-06-21 22:22 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-06-22 shows a clear bifurcation: massive, rapid iteration on LLM/VLM post-training frameworks, contrasting with complete dormancy in traditional, single-node RL environments. 

Active projects (TRL, AReaL, slime, verl, ROCK, CleanRL) are overwhelmingly focused on scaling Reinforcement Learning from Human Feedback (RLHF) and reasoning-oriented RL. Development friction has entirely shifted from basic algorithm implementation to distributed execution realities, asynchronous inference integration (vLLM/SGLang), and multi-turn agentic stability.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **TRL** | 4 | 9 | 0 | High friction in async LLM inference (vLLM) and multi-turn environments; rapid community patching. |
| **AReaL** | 0 | 11 | 0 | Focus on PPO mechanics, tokenization parity, and distributed optimizer support. |
| **verl** | 3 | 6 | 0 | Architectural push towards multimodal agentic rollouts and off-policy corrections. |
| **slime** | 0 | 5 (2 closed) | 0 | Maturing distributed PPO infrastructure (Megatron) and metric integrity. |
| **ROCK** | 1 | 2 | 0 (Docs) | Hardening cluster resilience and log archiving against ungraceful exits. |
| **CleanRL** | 0 | 1 | 0 | Stable; slow but steady community additions of canonical RL algorithms. |
| *Inactive Projects* | *0* | *0* | *0* | Gymnasium, OpenRLHF, Stable Baselines3, Tianshou, and 6 others saw zero activity. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Advanced Off-Policy & PPO Corrections:** Frameworks are actively fixing PPO stability constraints. AReaL implemented the CISPO loss surrogate (MiniMax-M1) and granular loss aggregation (ScaleRL), while verl introduced KPop (bidirectional KL rejection sampling).
*   **Multi-Turn & Multimodal Agentic RL:** There is a definitive pivot from static, single-turn datasets. TRL is rebuilding its `environment_factory` for multi-turn generation, and verl established a Continuous Token (CT) mechanism for Vision-Language (VL) model agentic rollouts.
*   **Alignment Math & Distributional RL:** TRL introduced Adaptive Beta-DPO for alignment stability, while CleanRL pushed updates for ES-C51, proving theoretical RL research remains active alongside applied LLM training.

**Engineering & Infrastructure Signals**
*   **Async Inference Engine Integration:** Tightly coupling RL trainers with high-throughput inference engines (vLLM, SGLang) remains brittle. TRL and AReaL spent significant PRs fixing token flattening bugs, vLLM engine initialization crashes, and `stop_token_ids` parity issues.
*   **Distributed Compute & Metric Integrity:** Large-scale distributed execution is generating silent bugs. `slime` fixed corrupted approximate KL divergence metrics and SGLang multi-model routing fails, while `verl` tackled numerical precision loss during micro-batch processing.
*   **Cluster Volatility & Resiliency:** Running massive RL workloads on preemptible compute requires extreme fault tolerance. ROCK's focus on self-healing disk cleanup and robust signal trapping for killed sandbox processes highlights the operational reality of modern RL ops.

## Differentiation Analysis
*   **Applied vs. Foundational:** TRL acts as the application bridge, rapidly iterating to support the newest LLM architectures (VLM distillation) and user-facing agentic environments. CleanRL remains purely foundational, prioritizing legible, single-file implementations of canonical algorithms for educational and benchmarking purposes.
*   **Algorithmic vs. Infrastructure:** AReaL and slime are hyper-focused on the low-level mechanics of distributed PPO across FSDP2 and Megatron backends (e.g., Muon optimizer support, gradient syncing). Conversely, ROCK is entirely an infrastructure/operations layer, treating the RL algorithm as a black box while solving cluster hygiene and data logging on volatile node pools.
*   **Agentic Architectures:** `verl` is aggressively differentiating by building stateful, multi-modal rollout infrastructure (Continuous Tokens) designed specifically to pass tool outputs and environment states back and forth without breaking context windows.

## Community Momentum & Maturity
The ecosystem is currently highly stable for end-users but heavily taxed for maintainers. Active issues across the board are extremely low (mostly zero), indicating that frameworks have matured past the stage of basic user-misconfiguration bugs. 

Instead, development is driven by core maintainers and advanced contributors pushing the limits of distributed systems. AReaL's surge of 11 PRs by a single contributor (`EazyReal`) and TRL's rapid turnaround on AsyncGRPO crashes show a highly responsive, engineering-first culture. The complete dormancy of 9 major projects (including OpenRLHF, Stable Baselines3, and Tianshou) suggests either a consolidation of community focus toward LLM-centric frameworks, or a general stabilization period for classic RL tools.

## Trend Signals
*   **The Agentic Standard is Forming:** The consistent, simultaneous push across TRL, verl, and slime for multi-turn environments and tool-augmented rollouts signals that "static dataset RLHF" is obsolete; dynamic, tool-calling RL is the new baseline.
*   **Inference-Training Parity is the Main Bottleneck:** As RL scales, the interface between the training cluster (Megatron/FSDP) and the inference engine (vLLM/SGLang) is the weakest link. Token boundary errors, engine init failures, and routing mismanagement are the primary blockers to stable RLHF pipelines.
*   **Heterogeneous Compute Management:** The necessity of advanced signal handling (ROCK) and worker GPU system metric logging (AReaL) indicates that multi-billion parameter RL workloads are permanently moving to distributed, heterogeneous, and highly volatile cloud infrastructure.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for June 22, 2026, based on the latest GitHub activities in the alibaba/ROCK repository.

### 1. Today's Highlights
The past 24 hours in the ROCK ecosystem focused heavily on **infrastructure stability and cluster hygiene**. Community contributor `jinbai340997` identified a critical disk pressure vulnerability caused by orphaned sandbox archive processes and immediately submitted a self-healing patch. Additionally, minor documentation maintenance was performed to finalize the V1.9.0 release notes.

### 2. Releases
*   **No new releases** in the last 24 hours. Documentation is actively being polished for the existing **v1.9.0** release.

### 3. Important Issues
*   🐛 **[Bug] `/tmp/sb-archive-*` temp dirs leaked by killed archive processes cause disk pressure on workers** ([alibaba/ROCK #1141](https://github.com/alibaba/ROCK/issues/1141))
    *   **Status:** Open | **Author:** `jinbai340977`
    *   **Summary:** The `SandboxLogArchiveTask` creates temporary staging directories for tarballs before pushing to Alibaba Cloud OSS. While normal terminations trigger a bash `trap ... EXIT` cleanup, hard kills (e.g., `SIGKILL` from deployments, OOM killers, or node drift) bypass this trap. This results in severe disk exhaustion on RL worker nodes over time, threatening cluster stability.

### 4. Key PR Progress
*   🔧 **fix(archive): self-healing cleanup for stale temp dirs and soft-signal trap** ([alibaba/ROCK #1142](https://github.com/alibaba/ROCK/pull/1142))
    *   **Status:** Open | **Author:** `jinbai340977`
    *   **Summary:** A direct mitigation for Issue #1141. The PR implements a robust defense-in-depth strategy: 
        1) Adds a periodic cleanup task to purge any `sb-archive-*` directories older than 2 hours.
        2) Expands the bash signal trap to catch `SIGTERM`, `SIGINT`, and `SIGHUP`, ensuring the `EXIT` handler fires during soft kills (like Kubernetes shutdowns or SSH disconnects), preventing future leakage.
*   📝 **docs: fix v1.9.0 release date from TBD to June 11, 2026** ([alibaba/ROCK #1140](https://github.com/alibaba/ROCK/pull/1140))
    *   **Status:** Open | **Author:** `jinbai340977`
    *   **Summary:** Routine documentation update correcting the V1.9.0 release timeline in both English and Simplified Chinese (`zh-Hans`) Markdown files.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning (RL) relies on distributed, highly volatile compute environments—frequently utilizing massive fleets of preemptible/spot instances. When nodes are abruptly terminated to save costs or scale down, data logging and checkpointing pipelines are the first to break. 

The bug addressed in [#1141](https://github.com/alibaba/ROCK/issues/1141) and fixed in [#1142](https://github.com/alibaba/ROCK/pull/1142) perfectly highlights a classic distributed systems pain point in RL ops: **resiliency against ungraceful exits**. By implementing self-healing cleanup mechanisms and robust signal handling, ROCK ensures that large-scale RL training runs don't silently succumb to "No space left on device" errors. This allows researchers to confidently run long-horizon RLHF or continuous learning tasks without requiring constant manual babysitting of node storage states.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 🧠 RL Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-06-22

## 1. Today's Highlights
Activity in the `slime` ecosystem over the past 24 hours has been exclusively focused on engineering robustness and metric accuracy. With zero new issues or releases, core maintainers and contributors pushed **9 active PRs**, primarily targeting stability in PPO metric logging, reward hub safety checks, multi-model routing, and Megatron backend synchronization.

## 2. Releases
* **No new releases** in the last 24 hours.

## 3. Important Issues
* **None:** Zero new issues or bug reports were opened or updated in the last 24 hours, indicating a stable front-end user experience or a period of heads-down development.

## 4. Key PR Progress
Today's PRs heavily target distributed training stability and silent failure prevention:

* **RLHF Metric Integrity:** [PR #2114](https://github.com/THUDM/slime/pull/2114) fixes a critical flaw in the PPO estimator where the approximate KL divergence metric was being corrupted in place during reward computation, ensuring `rollout/kl` is logged accurately.
* **Reward Hub Safety:** [PR #2115](https://github.com/THUDM/slime/pull/2115) adds a missing guard in `get_deepscaler_rule_based_reward` to prevent crashes when a response string is absent, hardening the asynchronous reward dispatch.
* **Routing Safeties:** [PR #2112](https://github.com/THUDM/slime/pull/2112) makes SGLang fail securely on unknown model names. This prevents multi-model setups (e.g., separating reference, reward, or judge models) from silently routing to a default endpoint.
* **Megatron & Distributed Syncing:**
  * [PR #2066](https://github.com/THUDM/slime/pull/2066) optimizes Megatron's `overlap_grad_reduce` by preventing the model config from redundantly re-asserting `no_sync_func` on every training step.
  * [PR #2113](https://github.com/THUDM/slime/pull/2113) fixes a crash during GPT-OSS colocated weight syncing by updating a monkey-patch to match the latest 4-argument `Megatron-Bridge` API.
* **Ecosystem Growth:** [PR #2111](https://github.com/THUDM/slime/pull/2111) (Closed) and [PR #2108](https://github.com/THUDM/slime/pull/2108) (Closed) reflect ongoing iterative updates, noting the attempted addition of *Dressage* (an agentic RL framework) to the slime ecosystem.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and reasoning-oriented RL (via rule-based rewards like DeepScaler) become the default for post-training LLMs, the underlying infrastructure must handle complex, distributed setups. `slime` continues to act as a critical RL substrate. Today's commits highlight exactly where the friction lies in modern LLM training: safely managing async reward dispatching across distributed nodes, preventing silent routing failures in multi-model inference engines (like SGLang), and maintaining strict compatibility with heavy-weight distributed execution engines (like Megatron). By solving asynchronous hardware syncing and metric corruption, `slime` enables flawless, large-scale PPO training loops.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the structured daily digest for the AReaL project.

# AReaL RL Open-Source Ecosystem Daily Digest — 2026-06-22

## 1. Today's Highlights
AReaL experienced a highly active day in pull request activity, driven entirely by contributor `EazyReal`, who submitted a flurry of critical bug fixes and architectural feature enhancements. The focus was heavily centered on edge-case robustness in reward modeling and data preprocessing, alongside introducing cutting-edge PPO loss mechanics and handling partial rollout groups. Two stale but high-impact backend PRs (Muon optimizer and Qwen TP fixes) also saw fresh activity. 

## 2. Releases
**None.** No new releases were published in the last 24 hours.

## 3. Important Issues
**None.** There were 0 active issues updated in the last 24 hours, indicating that active development friction is currently being handled directly through rapid PR iterations rather than issue tracking.

## 4. Key PR Progress
### Reward & Rollout Robustness
*   **[PR #1430](https://github.com/areal-project/AReaL/pull/1430)**: Fixed an `AttributeError` in `clevr_count_70k_reward_fn` by enforcing string coercion, aligning it with sibling math reward functions.
*   **[PR #1426](https://github.com/areal-project/AReaL/pull/1426)**: Patched a wall-clock timeout leak in `MathVerifyWorker.verify` where the `ThreadPoolExecutor` context manager blocked instead of respecting the intended timeout.
*   **[PR #1416](https://github.com/areal-project/AReaL/pull/1416)**: Added `min_valid_group_size` to cleanly drop under-filled rollout groups, preventing noise from partial data.

### PPO & Training Mechanics
*   **[PR #1412](https://github.com/areal-project/AReaL/pull/1412)**: Implemented the **CISPO loss surrogate** from MiniMax-M1, addressing the zero-gradient problem in PPO/GRPO when importance-sampling ratios fall outside the clip band.
*   **[PR #1417](https://github.com/areal-project/AReaL/pull/1417)**: Introduced configurable loss aggregation (token / seq / prompt mean) inspired by ScaleRL §3.2, decoupling AReaL from hardcoded policy-gradient loss reductions.
*   **[PR #1415](https://github.com/areal-project/AReaL/pull/1415)** & **[PR #1413](https://github.com/areal-project/AReaL/pull/1413)**: Refactored group-normalization to calculate baselines based on *actual* group sizes rather than fixed strides, and optimized ergonomics by deriving `group_size` automatically from `gconfig.n_samples`.

### Inference & Tokenization Fixes
*   **[PR #1429](https://github.com/areal-project/AReaL/pull/1429)**: Bridged parity gaps by forwarding `frequency_penalty` and `stop` arguments to vLLM generation requests, matching SGLang backend behavior.
*   **[PR #1425](https://github.com/areal-project/AReaL/pull/1425)**: Fixed a crash where `None` values (from base-Llama tokenizers) were injected into SGLang/vLLM `stop_token_ids`.
*   **[PR #1427](https://github.com/areal-project/AReaL/pull/1427)**: Corrected the GSM8K SFT loss-mask boundary, fixing an assumption that failed for byte-level/BPE tokenizers that merge prompt and answer tokens.
*   **[PR #1428](https://github.com/areal-project/AReaL/pull/1428)**: Reopened the effort (superseding stale #1338) to log worker GPU system metrics in W&B, a crucial fix for single-controller setups.

### Stale PR Revivals
*   **[PR #1270](https://github.com/areal-project/AReaL/pull/1270)**: Activity on adding native **Muon optimizer** support (Newton-Schulz orthogonalization) across FSDP2 and Megatron backends.
*   **[PR #1365](https://github.com/areal-project/AReaL/pull/1365)**: Activity on fixing DTensor dispatch breakdowns in Tensor Parallelism for Qwen models.

## 5. Why This Project Matters in Today's RL Landscape
The latest activity on AReaL demonstrates a maturation of RLHF/RLAIF infrastructure to handle modern LLM constraints. 
1. **Algorithmic Agility:** Implementing modern surrogates like CISPO (MiniMax-M1) and granular loss aggregation (ScaleRL) shows AReaL is keeping pace with the rapid evolution of post-training techniques needed to stabilize RL for reasoning models.
2. **Tokenizer & Inference Parity:** Fixing BPE boundary logic and handling `None` pad tokens reflects the unglamorous but critical reality of deploying RL across diverse model families (Llama vs. Qwen) and inference engines (vLLM vs. SGLang).
3. **Distributed Execution Realities:** Updates around W&B GPU worker metrics and Muon optimizer integration for FSDP2/Megatron highlight the project's focus on the observability and distributed systems optimization required to scale multi-billion parameter RL workloads efficiently.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# 📊 RL Open-Source Daily Digest: 2026-06-22
**Project:** TRL (Transformer Reinforcement Learning) by HuggingFace

### 1. Today's Highlights
Today's TRL ecosystem activity is heavily dominated by **AsyncGRPO** and **GRPO environment integration** stability. We observed a rapid turnaround on newly discovered AsyncGRPO crashes, multiple dependency bumps extending vLLM support up to `0.22.1`, and community contributions pushing advanced algorithmic features like Adaptive Beta-DPO and faithful PPO critic checkpointing.

### 2. Releases
- **No new releases** tracked in the last 24 hours.

### 3. Important Issues
Community and maintainers reported several critical breaks in the newer GRPO/vLLM pipelines:
*   **AsyncGRPO Crashes with Valid Reward Callables ([#6133](https://github.com/huggingface/trl/issues/6133)):** AsyncGRPO fails to initialize when reward functions are passed as documented `functools.partial` or callable class instances, incorrectly assuming the presence of `__name__`.
*   **`GRPOTrainer.evaluate()` Crashes on Partial Batches ([#6129](https://github.com/huggingface/trl/issues/6129)):** Reported by maintainer @qgallouedec, multi-turn environment generation crashes during evaluation due to strict zipping on `generation_batch_size`.
*   **OnlineDPO vLLM Token Flattening Bug ([#5514](https://github.com/huggingface/trl/issues/5514)):** `OnlineDPOTrainer._generate_vllm_server()` flattens `completion_ids` twice, corrupting token sequences.
*   **vLLM Engine Core Initialization Failure ([#3632](https://github.com/huggingface/trl/issues/3632)):** A highly-trafficked issue (👍 3) tracking `RuntimeError: Engine core initialization failed` when interfacing with recent vLLM versions.

### 4. Key PR Progress
Development is moving extremely fast to patch today's issues, alongside significant feature rollouts:
*   **AsyncGRPO & GRPO Fixes:**
    *   PR [#6136](https://github.com/huggingface/trl/pull/6136) & PR [#6134](https://github.com/huggingface/trl/pull/6134): Immediately address the `partial` reward callable bug (#6133). (A duplicate fix in [#6135](https://github.com/huggingface/trl/pull/6135) was closed).
    *   PR [#6137](https://github.com/huggingface/trl/pull/6137): Resolves the `environment_factory` partial batch crash.
    *   PR [#5911](https://github.com/huggingface/trl/pull/5911): Fixes a massive inefficiency where AsyncGRPO triggered unnecessary vLLM rollouts on already-seen data during checkpoint resumes.
*   **Algorithm & Trainer Enhancements:**
    *   PR [#6123](https://github.com/huggingface/trl/pull/6123): Implements **Adaptive Beta-DPO** (arXiv:2407.08639), allowing per-batch adjustment of the $\beta$ penalty to improve alignment stability.
    *   PR [#6120](https://github.com/huggingface/trl/pull/6120): Introduces `save_value_model` to `PPOConfig`, allowing proper RLHF run resumption by persisting the critic network. 
    *   PR [#5969](https://github.com/huggingface/trl/pull/5969): Brings Vision-Language Model (VLM) distillation support to `GOLDTrainer` using JSD loss.
*   **Dependency & Logging Alignment:**
    *   PR [#6119](https://github.com/huggingface/trl/pull/6119): Officially bumps vLLM compatibility range up to `0.22.1`.
    *   PR [#6021](https://github.com/huggingface/trl/pull/6021): Standardizes `clip_ratio` logging metrics (e.g., `low_mean`, `high_mean`) between AsyncGRPO and synchronous GRPO.

### 5. Why This Project Matters in Today's RL Landscape
TRL is the defacto bridge between modern LLM/VLM architectures and applied RL algorithms (DPO, PPO, GRPO). Today's metrics highlight two important trends: First, TRL is aggressively adapting to **agentic and multi-turn environments** (seen in the `environment_factory` PRs), moving beyond standard static-preference datasets. Second, the integration with **async inference engines like vLLM** is highly active but brittle, requiring rapid community iteration to ensure metric logging, checkpoint resumption, and token formatting remain stable during distributed RLHF rollouts.

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

Here is the RL open-source ecosystem daily digest for `verl` (volcengine/verl) on 2026-06-22.

### 1. Today's Highlights
The verl ecosystem is experiencing a massive push towards **multimodal agentic frameworks** and **advanced off-policy correction algorithms**. Out of 6 active PRs, 4 are dedicated to extending Continuous Token (CT) mechanisms to Vision-Language (VL) models and AgentLoops. Simultaneously, core algorithm contributors are actively merging robust mathematical improvements, including a new bidirectional KL rejection sampling technique (KPop) and several cleanups in advantage estimation and rollout metrics.

### 2. Releases
No new releases were published in the last 24 hours. The project remains on its latest stable commit, with active development consolidated in the PR pipeline.

### 3. Important Issues
*   **Algorithmic Discrepancies in On-Policy Settings:** [Issue #6280](https://github.com/verl-project/verl/issues/6280) reports a notable technical bug where `log_prob` and `old_log_prob` diverge in strict on-policy settings (1 PPO epoch) when following the official recommendation of `rollout.log_prob_micro_batch_size_per_gpu = 2 * actor.ppo_micro_batch_size_per_gpu`. This indicates potential numerical instability or precision loss during batch processing.
*   **AgentLoop Configuration Constraints:** [Issue #6801](https://github.com/verl-project/verl/issues/6801) highlights a hard failure in the experimental `agent_loop.py`. Users are encountering tensor chunking errors (`chunk=8`) when hardware constraints (e.g., 2 GPUs) don't evenly divide the default worker chunks.
*   **Evaluation Determinism:** [Issue #6802](https://github.com/verl-project/verl/issues/6802) raises a common RLHF pain point: non-deterministic evaluation outputs despite setting the temperature to 0, pointing to potential non-determinism in underlying inference kernels or dropout states during model eval.

### 4. Key PR Progress
*   **Advanced Off-Policy Correction & Algo Fixes:** 
    *   [PR #6800](https://github.com/verl-project/verl/pull/6800) introduces **KPop** (`binary_kl`), a new rejection-sampling option applying a hard trust region using bidirectional Bernoulli KL divergence between training and behavior policies. 
    *   [PR #6806](https://github.com/verl-project/verl/pull/6806) fixes a dead metric in Importance Sampling (IS) metrics by computing `rollout_is_seq_fraction` from raw, unclamped weights.
    *   [PR #6803](https://github.com/verl-project/verl/pull/6803) cleans up the GPG advantage estimator by removing dead code (`id2std`) and fixing an adjacent device-mismatch bug.
*   **Multimodal Continuous Token (CT) Expansion:** A major architectural milestone is being merged. [PR #6779](https://github.com/verl-project/verl/pull/6779) establishes the base CT mechanism for multi-turn agentic rollouts. Building on this, [PR #6799](https://github.com/verl-project/verl/pull/6799) (closed/merged) and [PR #6804](https://github.com/verl-project/verl/pull/6804) extend this framework from text-only to Vision-Language (VL) model families (QwenVL, MiMoVL), tightly integrating it with `ToolAgentLoop`.

### 5. Why This Project Matters in Today's RL Landscape
As the RL community pivots from static single-turn RLHF towards dynamic, multi-turn Tool-augmented LLMs, infrastructure constraints are the primary bottleneck. `verl` is directly solving the hardest engineering challenges in this transition. 

Today's influx of Continuous Token (CT) PRs proves that `verl` is establishing the standardized infrastructure for **stateful, multi-modal agentic rollouts**—allowing frameworks to seamlessly pass environment states (images, tool outputs) back and forth without breaking context windows. Furthermore, their rapid implementation of advanced off-policy corrections (like KPop bidirectional KL divergence) ensures that researchers can safely and efficiently reuse rollout buffers (critical for expensive agent environments) without suffering from policy collapse.

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

**RL Ecosystem Daily Digest: CleanRL**
**Date:** 2026-06-22

**1. Today's Highlights**
The CleanRL repository experienced a low-volume, high-specificity day. There were no newly reported issues or framework releases within the last 24 hours. Activity was isolated to a single, long-standing Pull Request focused on algorithmic expansion, which saw an update today after being initially opened in late 2025.

**2. Releases**
*   **Status:** No new releases in the last 24 hours.
*   **Context:** The repository continues to maintain its current stable version without immediate patch deployments or version bumps.

**3. Important Issues**
*   **Status:** 0 issues updated.
*   **Context:** The absence of new issues suggests a period of ecosystem stability for current users, with no urgent bug reports or configuration roadblocks flagged by the community over the past day.

**4. Key PR Progress**
*   **PR #529: Add ES-C51 (Expected Sarsa based C51)** ([vwxyzjn/cleanrl PR #529](https://github.com/vwxyzjn/cleanrl/pull/529))
    *   **Author:** Rijul-Tandon
    *   **Status:** [OPEN] (Updated: 2026-06-21)
    *   **Summary:** This PR introduces ES-C51, a value-based reinforcement learning algorithm that integrates Expected Sarsa updates with the C51 distributional reinforcement learning architecture. Categorized under "New algorithm" and "Documentation," this update represents ongoing community efforts to expand CleanRL's suite of benchmarked canonical RL algorithms. The update today indicates the PR is being prepped for further review or final merging.

**5. Why This Project Matters in Today's RL Landscape**
CleanRL remains a cornerstone of the open-source reinforcement learning ecosystem due to its strict adherence to single-file implementations. While modern RL engineering increasingly relies on heavily abstracted, distributed frameworks (e.g., Seed Rodan, RLlib), CleanRL provides an essential service: transparent, highly legible code for standard algorithms (like PPO, SAC, and DQN variants). 

PRs like ES-C51 highlight the project's ongoing value as a research and educational standard. By providing clean, dependency-light implementations of distributional and expected-update algorithms, CleanRL allows researchers to rigorously benchmark new ideas and students to understand the underlying mathematics without wading through boilerplate engineering code.

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