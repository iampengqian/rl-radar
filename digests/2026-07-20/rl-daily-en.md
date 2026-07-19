# RL Open Source Daily Digest 2026-07-20

> Generated: 2026-07-19 22:14 UTC | Projects covered: 15

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
The reinforcement learning (RL) open-source ecosystem on 2026-07-20 shows a clear bifurcation between the intense, fast-paced development of Large Language Model (LLM) alignment frameworks and the stable, foundational maintenance of traditional RL environments. LLM-focused post-training frameworks (verl, TRL, slime, AReaL, ROCK) are dominating the activity, driving aggressive optimizations in distributed compute, multimodal integration, and agentic rollouts. Meanwhile, standard single and multi-agent environment interfaces (Gymnasium, PettingZoo) are focusing on API standardization and backend documentation, serving as stable foundations for the broader RL research community.

## Activity Comparison
Activity is concentrated heavily within the LLM post-training ecosystem. Traditional RL environments saw targeted but minor maintenance updates.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 47 | 5 | 0 | Scaling throughput, multimodal constraints, hardware dispatch unification |
| **TRL** | 11 | 8 | 0 | GRPO stabilization, distillation enhancements, DPO math hotfixes |
| **Gymnasium** | 1 | 6 | 0 | Core API stability, vector typing, JAX functional environments |
| **slime** | 2 | 4 | 0 | Massive weight init updates, GLM-5 MLA numerical stability |
| **AReaL** | 0 | 5 | 0 | Production resilience, SWE-backed agentic rollouts, fault recovery |
| **ROCK** | 1 | 1 | 0 | Enterprise observability and distributed logging enhancements |
| **PettingZoo** | 0 | 1 | 0 | Minor documentation pipeline maintenance |
| *Inactive Projects* | *0* | *0* | *0* | *CleanRL, Open Instruct, OpenRLHF, rl_games, ROLL, Stable Baselines3, Tianshou, torchtune* |

## Shared Research & Engineering Directions

**Research Signals**
- **Inference & RL Distillation Convergence:** Frameworks are actively merging RL with privileged-context distillation. Both TRL (`GOLDTrainer`) and verl (OPSD) are exploring teacher-student setups where the teacher accesses ground-truth or hidden reasoning traces to guide student rollouts.
- **Multimodal RL & Complex Tool Use:** Vision-Language Models (VLMs) are rapidly transitioning into RL pipelines. verl and TRL are troubleshooting multi-turn tool-call loops with VLMs, while AReaL and verl are pushing out Qwen3/3.5-VL integrations. 
- **Agentic RL Workflows:** A clear pivot from static preference optimization to multi-step, environment-based rollouts, highlighted by AReaL's integration of SWE-bench style Arena Stream environments and OpenAI-compatible proxy workers.

**Engineering & Infrastructure Signals**
- **Distributed Communication & System Resilience:** Communication overhead is the primary bottleneck for 30B+ parameter models. verl is deferring device-to-host syncs and gradient `reduce-scatter` operations, while AReaL is pre-warming NCCL communicators to prevent Out-of-Memory (OOM) errors during fault recovery.
- **Compute Efficiency in Training Loops:** Slashing VRAM and compute overhead is a top priority. Key efforts include slime's optimizations for synchronous RL weight updates, TRL's DeepSpeed ZeRO-3/Liger kernel integrations, and AReaL's efficient tensor-parallel loading for dense models.
- **Cluster Observability & Debugging:** As RL jobs span massive GPU clusters, deterministic debugging and traceability are maturing. AReaL introduced trajectory dump/replay for offline debugging, while ROCK added granular exception traceback configurations for distributed nodes.

## Differentiation Analysis
- **Abstraction Levels:** Gymnasium and PettingZoo serve as the low-level interfaces (APIs, state stepping, action spaces). TRL acts as the highly accessible bridge for Hugging Face users. verl, slime, and AReaL operate at the deep-metal infrastructure level, heavily modifying FSDP, Megatron-Core, and NCCL operations.
- **Hardware Scope:** verl is differentiating by actively unifying hardware dispatch to support both GPUs and NPUs natively, and cleaning up Docker environments for next-gen architectures (like Nvidia GB200). slime is highly specialized in Megatron and DeepSeek Sparse Attention (DSA). 
- **Algorithmic vs. Operational Focus:** TRL and verl are heavily focused on expanding algorithmic variety (GRPO, DPO variants, OPSD). Conversely, AReaL and ROCK are prioritizing operational maturity—focusing on fault recovery, HTTP proxy workers, and logging rather than novel RL math.

## Community Momentum & Maturity
- **High Throughput & Active Triaging:** verl (47 issues, 5 PRs) and TRL (11 issues, 8 PRs) are experiencing massive community usage, resulting in rapid bug discovery and immediate maintenance responses (e.g., TRL closing 9 older issues and immediately patching DPO math).
- **Stability in Silence:** AReaL pushed 5 complex infrastructure PRs with exactly 0 new issues, suggesting a highly stable mainline or a development team heavily gating quality via feature branches before production rollouts.
- **Foundational Settling:** Gymnasium and PettingZoo are maturing into highly stable standards. Updates are largely restricted to strict typing enhancements (`TypeVar` fixes) and functional backend support (JAX), indicating their core APIs are production-locked.

## Trend Signals
- **The Rise of Asynchronous & Deferred RL:** The technical pain points of synchronous PPO steps are actively being solved by deferring gradient syncs (verl) and trajectory serialization (AReaL), indicating a shift toward highly asynchronous RL pipelines.
- **JAX as a First-Class Citizen:** Gymnasium's continued work on JIT-compiled, functional JAX environments indicates that hardware-accelerated environment stepping is becoming a strict requirement for modern RL, catching up to the JAX-heavy LLM training stacks.
- **RL for SWE & Tool-Use:** AReaL's integration of SWE-bench style rollouts and proxy workers signals that RL is no longer just for formatting responses, but is actively being structured to train complex coding and tool-use agents in live environments.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

### 📊 RL Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-07-20

#### 1. Today's Highlights
Activity in the ROCK repository over the last 24 hours was highly focused on observability and debugging infrastructure. A new bug report regarding missing exception tracebacks in the system's custom logging formatter was swiftly followed by a corresponding fix, highlighting active, responsive maintenance of the framework's core operational tooling.

#### 2. Releases
* **No new releases** were published in the last 24 hours.

#### 3. Important Issues
* **[#1260] [BUG] Preserve exception tracebacks in custom log formatter** (Created by @Timandes)
  * **Summary:** The current `StandardFormatter.format()` strips away crucial debugging context. By relying solely on `record.getMessage()` and failing to process `record.exc_info`, the formatter drops complete stack traces when `logger.exception(...)` or `exc_info=True` is utilized. This renders runtime errors—especially those involving empty string representations from HTTP or network exceptions—incredibly difficult to trace.
  * **Link:** [alibaba/ROCK Issue #1260](https://github.com/alibaba/ROCK/issues/1260)

#### 4. Key PR Progress
* **[#1261] fix: preserve exception tracebacks in logs** (Opened by @Timandes)
  * **Summary:** Directly addresses Issue #1260. This PR refactors the `StandardFormatter` to ensure exception types and full tracebacks are rendered when `exc_info` is active. Crucially for the RL ecosystem, it introduces granular, environment-agnostic configuration via a new YAML setting (`logging.exception_traceback_enabled`) and an environment-variable override (`ROCK_LOGGING_EXCEPTION_TRACEBACK_ENABLE`), making it highly adaptable for distributed training environments. 
  * **Link:** [alibaba/ROCK PR #1261](https://github.com/alibaba/ROCK/pull/1261)

#### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning (RL), researchers and engineers scale workloads across massive, distributed compute clusters. When an RL pipeline crashes—often due to transient network timeouts, environment sampling errors, or silent node failures—root cause analysis can be a nightmare without robust logging. By systematically addressing how tracebacks are captured and exposed via configurable flags (Issue #1260 & PR #1261), ROCK is maturing its operational foundation. For production RL teams, observable and debuggable training loops are just as critical as the core algorithmic implementations, ensuring that multi-day training runs aren't compromised by inscrutable logging blind spots.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily digest for the slime ecosystem. 

# 📊 RL Open-Source Daily Digest: THUDM/slime
**Date:** 2026-07-20

### 1. Today's Highlights
Activity over the last 24 hours centered on architectural optimizations and CI testing for large-scale model training. Maintainers merged weight update optimizations, while the community pushed forward integration for vision-language models (VLMs). 

### 2. Releases
**No new releases** in the last 24 hours. 

### 3. Important Issues
*   **[Bug] MLA Indexer Discrepancy in GLM-5 ([#2165](https://github.com/THUDM/slime/issues/2165))**
    A technical discrepancy was highlighted in Megatron's DeepSeek Sparse Attention (DSA) Multi-Latent Attention (MLA) indexer for GLM-5 models. The current implementation uses the raw `q_a_proj` output, skipping the required `q_a_layernorm` (RMSNorm) applied in reference implementations (Hugging Face `transformers` and vLLM). Addressing this is critical for maintaining numerical stability and parity in distributed RL/RLHF training loops.
*   **[Outreach] StackMap Listing ([#2214](https://github.com/THUDM/slime/issues/2214))**
    A non-technical proposal to include slime in StackMap, a curated knowledge graph for open-source AI tools. 

### 4. Key PR Progress
*   **[MERGED] `[run-ci-megatron] Optimize update weight` ([#2220](https://github.com/THUDM/slime/pull/2220))**
    Closed by maintainer `zhuzilin`. This indicates a successful rollout of performance improvements to the weight updating mechanism—a critical bottleneck in synchronous RL training pipelines.
*   **[OPEN] `Support Qwen3.5-VL (dense + MoE) via Megatron-Bridge` ([#2075](https://github.com/THUDM/slime/pull/2075))**
    Ongoing work by `demouo` to integrate dense and Mixture-of-Experts (MoE) Qwen3.5-VL models using standard Megatron-Bridge registration. This expands the framework's multimodal RL capabilities.
*   **[CLOSED] Documentation Typos ([#2210](https://github.com/THUDM/slime/pull/2210))**
    Routine documentation cleanup for the `qwen3-4B` guides.
*   **[INTERNAL] CI Maintenance ([#2053](https://github.com/THUDM/slime/pull/2053))**
    Maintainer `zhuzilin` continues to use long-running, do-not-merge branches to stress-test the Megatron CI pipeline.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and self-play scale to models exceeding hundreds of billions of parameters, standard training loops break down due to memory constraints and communication overhead. **slime** operates at the bleeding edge of this problem, providing a highly efficient bridge between RL algorithms and NVIDIA's Megatron-Core. 

Today's updates—specifically the optimization of weight updates and the debugging of advanced mechanisms like DSA MLA—highlight the project's focus on bridging the gap between inference optimizations (like vLLM) and distributed training (Megatron). Furthermore, the active integration of complex MoE and VLM architectures (like Qwen3.5-VL) demonstrates that slime is actively preparing for the next generation of RL: multimodal and sparse-architecture reasoning.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

### AReaL RL Open-Source Ecosystem Daily Digest
**Date:** 2026-07-20

#### 1. Today's Highlights
Activity in the AReaL ecosystem over the past 24 hours has been entirely focused on feature expansion and infrastructure stability, with **5 active PRs** and **0 new issues**. The development velocity highlights a strong push toward integrating agentic workflows (Arena Stream), improving fault tolerance (NCCL communicator warm-ups), and enabling deterministic offline debugging. 

#### 2. Releases
*   **No new releases** in the last 24 hours.

#### 3. Important Issues
*   **No active issues** were updated in the last 24 hours. The lack of bug reports alongside heavy infra PRs suggests a currently stable mainline while development pushes forward in feature branches.

#### 4. Key PR Progress
All 5 PRs updated on 2026-07-19 are currently `[OPEN]`:

*   **[Infrastructure & Fault Tolerance]** [PR #1548](https://github.com/areal-project/AReaL/pull/1548) by @Le8r0nJames: *fix(recover): warm up NCCL communicators before the first post-recover step.* 
    *   **Context:** Fixes an Out-of-Memory (OOM) risk during fault recovery. PyTorch lazily builds NCCL communicators, which previously triggered transport buffer connects (~10MB) during peak device occupancy inside `ppo_update`. The fix pre-warms these communicators.
*   **[Agentic RL & Rollouts]** [PR #1547](https://github.com/areal-project/AReaL/pull/1547) by @yulangz: *feat: add Arena Stream rollout integration.*
    *   **Context:** Introduces a SWE-backed rollout mode that discovers online datasets, registers AReaL rollout proxies with an Arena LLM gateway, manages task polling, and handles cleanup. A major step toward automated, agent-based RL environments.
*   **[Model Scaling & Multimodal]** [PR #965](https://github.com/areal-project/AReaL/pull/965) by @HwVanICI: *add vlm tensor-parallelism with efficient loading.*
    *   **Context:** Revived after 4 months. Modifies the FSDP engine for memory-efficient initialization of massive dense models (e.g., Qwen3-VL-32B) to prevent initialization OOM, alongside proper VLLM tensor-parallelism configurations.
*   **[Developer Tooling]** [PR #1407](https://github.com/areal-project/AReaL/pull/1407) by @Fyrgo8: *feat: trajectory dump/replay for offline training-loop debugging.*
    *   **Context:** Implements trajectory serialization to disk, allowing developers to replay rollout batches without an active inference engine. Completely decouples rollout generation from gradient updates for deterministic debugging.
*   **[Networking & Scheduling]** [PR #1486](https://github.com/areal-project/AReaL/pull/1486) by @HughLLiu: *[stale] feat(infra): support Ray-managed HTTP proxy workers.*
    *   **Context:** Resolves an issue where `RayScheduler.fork_workers(...)` ignored command arguments, enabling `RolloutController.start_proxy()` to successfully launch real proxy workers for OpenAI-compatible rollout workflows. Marked as potentially stale.

#### 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a highly robust, production-ready framework for large-scale RLHF and agentic LLM training. Today's development activity highlights three core industry trends:
1.  **Scaling Multimodality:** Supporting massive dense models like Qwen3-VL-32B via FSDP/VLLM optimizations addresses the immediate need for efficient multimodal RL (PR #965).
2.  **Agentic Workflows:** Integrating SWE-bench style Arena Stream rollouts (PR #1547) and HTTP proxy workers (PR #1486) proves AReaL is pivoting toward complex, multi-turn tool-use environments, moving beyond static preference optimization. 
3.  **System Resilience:** As RL jobs increasingly span thousands of GPUs, handling NCCL communicator state post-recovery (PR #1548) and enabling offline trajectory debugging (PR #1407) become critical requirements for minimizing downtime and iteration speed.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily digest for the TRL (Transformer Reinforcement Learning) ecosystem. 

# 📊 RL Open-Source Daily Digest: TRL 
**Date:** 2026-07-20

### 1. Today's Highlights
The TRL repository saw high maintenance activity today, with **8 PRs updated** and **11 issues processed**. The development focus is heavily centered on stabilizing GRPO (Group Relative Policy Optimization), advancing the experimental `GOLDTrainer` (likely for RL distillation), and suppressing CI noise from upstream dependencies like `bitsandbytes` and `peft`. 

### 2. Releases
🚫 **No new releases** were published in the last 24 hours.

### 3. Important Issues
- **[Bug] Inconsistent DPO Loss Math ([#6441](https://github.com/huggingface/trl/issues/6441)):** A critical open issue was raised regarding `DPOTrainer`'s `apo_down` loss type. The function fails to apply `f_divergence_type` consistently across its two mathematical terms, causing divergence from the original APO paper (Eq. 8) when not using the default `reverse_kl`. 
- **[Bug] Multimodal GRPO Crashes in Tool-Call Loops ([#6286](https://github.com/huggingface/trl/issues/6286)):** Identified a tensor shape mismatch in `GRPOTrainer` when processing multi-turn tool calls with Vision-Language Models (VLMs) like Qwen3.5. Directly indexing multimodal fields (e.g., `pixel_values`) by batch index breaks under sequence aggregation.
- **[Maintenance] Upstream Dependency Warnings ([#6447](https://github.com/huggingface/trl/issues/6447)):** `bitsandbytes` is emitting a benign `_check_is_size` `FutureWarning` during quantization tests, requiring a temporary CI filter until the upstream fix ships.
- *Note: 9 older issues (spanning OOM errors on GRPO/DPO, DeepSpeed ZeRO-3 bugs, and vLLM integrations) were closed in today's batch triage.*

### 4. Key PR Progress
- **DPO Loss Math Correction ([PR #6444](https://github.com/huggingface/trl/pull/6444) - CLOSED):** An immediate hotfix was submitted to resolve Issue #6441, ensuring both terms in `apo_down` use raw log-ratios correctly.
- **GOLD Trainer Enhancements ([PR #6437](https://github.com/huggingface/trl/pull/6437) & [PR #6391](https://github.com/huggingface/trl/pull/6391)):** 
  - Introduction of privileged-context distillation for `GOLDTrainer`, allowing teachers to leverage hidden reasoning traces while the student trains on standard prompts.
  - Fixed a critical crash where `GOLDTrainer`'s `prediction_step` failed to gather the sharded `lm_head` under DeepSpeed ZeRO-3 when using the Liger kernel.
- **Advanced Distillation Formats ([PR #5555](https://github.com/huggingface/trl/pull/5555)):** Expanded `DistillationTrainer` capabilities to natively support conversational prompt-completion formats alongside standard language modeling.
- **CI Noise Suppression ([PR #6445](https://github.com/huggingface/trl/pull/6445), [PR #6446](https://github.com/huggingface/trl/pull/6446), [PR #6448](https://github.com/huggingface/trl/pull/6448)):** Three dedicated PRs by maintainers to silence experimental API warnings (e.g., `environment_factory`, `ensure_weight_tying`, `bitsandbytes`) to keep core GRPO and SFT CI logs readable.

### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF era, TRL serves as the bridge between theoretical RL research and production-scale LLM training. Today's updates perfectly illustrate the ecosystem's current bottlenecks and maturation: 
1. **Algorithmic Rigor:** Catching math inconsistencies like the `apo_down` divergence bug shows the community's strict demand for mathematical fidelity to foundational papers.
2. **Multi-modal RL:** Fixing multimodal fields in GRPO tool-call loops highlights the industry's aggressive push past text-only RLHF into complex VLM agentic workflows.
3. **Compute Efficiency:** The introduction of distillation techniques (via the `GOLDTrainer` and `DistillationTrainer`) and seamless DeepSpeed ZeRO-3/Liger integrations proves that optimizing VRAM and compute overhead remains the primary engineering frontier for RL practitioners.

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

Here is the RL open-source ecosystem daily digest for `verl` (volcengine/verl) on 2026-07-20.

# 📊 RL Ecosystem Daily Digest: verl
**Date:** 2026-07-20 | **Project:** [verl](https://github.com/volcengine/verl) | **Activity Window:** Last 24h

## 1. Today's Highlights
- **Performance & Architecture Push:** A massive focus on training and inference performance optimization, specifically deferring device-to-host synchronization (PR [#7096](https://github.com/volcengine/verl/pull/7096)) and gradient synchronization (PR [#7095](https://github.com/volcengine/verl/pull/7095)).
- **Hardware Unification:** Cleanup of hardware-specific dispatch logic (PR [#7098](https://github.com/volcengine/verl/pull/7098)) signals a maturing of the codebase to seamlessly support both standard GPUs and NPUs.
- **Algorithmic Expansion:** Active development of On-Policy Self-Distillation (OPSD) via privileged-context teacher scoring (PR [#6833](https://github.com/volcengine/verl/pull/6833)).
- **High Issue Throughput:** 47 issues saw activity, indicating heavy community usage. Bottlenecks remain in multimodal RL integrations and vLLM version compatibility.

## 2. Releases
**No new releases** in the last 24 hours. (Current environment remains on standard nightly/main commits).

## 3. Important Issues
The community is actively troubleshooting hardware compatibilities and distributed training bugs.
- **Multimodal & Vision RL:** 
  - [#3469](https://github.com/volcengine/verl/issues/3469) (OPEN): Critical mismatch between image features and tokens (`tokens: XXX, features YYY`) continues to frustrate VLM training.
  - [#3428](https://github.com/volcengine/verl/issues/3428) (CLOSED): Resolved a nasty bug where LoRA training for `Qwen2_5_vl-7b` assigned incorrect multimodal token placeholders.
- **Hardware & Infrastructure:**
  - [#3468](https://github.com/volcengine/verl/issues/3468) (OPEN): Growing demand for Nvidia GB200 (aarch64) architecture support.
  - [#7071](https://github.com/volcengine/verl/issues/7071) (OPEN): The official Docker environment is missing `Megatron.bridge`.
- **Integration Compatibility:**
  - [#5517](https://github.com/volcengine/verl/issues/5517) (OPEN): Conflicts caused by pinning `numpy < 2.0`, which breaks compatibility with recent `vllm` releases.
  - [#3399](https://github.com/volcengine/verl/issues/3399) (CLOSED): Requests for `vllm 0.10.1.1` support to enable Seed-OSS RL training.

## 4. Key PR Progress
Today's PRs reflect a highly sophisticated engineering effort to scale RL training efficiently.

- **[perf] Defer gradient sync during accumulation** ([PR #7095](https://github.com/volcengine/verl/pull/7095))
  *Impact:* Modifies FSDP to delay `reduce-scatter` operations until the final micro-batch, drastically cutting communication overhead during PPO steps.
- **[perf] Defer scalar metric materialization** ([PR #7096](https://github.com/volcengine/verl/pull/7096))
  *Impact:* Removes unnecessary `.item()` calls (device-to-host sync points) inside Actor/Critic loss loops, keeping GPU/accelerator execution unblocked.
- **[feat] Reuse jagged rows across dynamic batches** ([PR #7097](https://github.com/volcengine/verl/pull/7097))
  *Impact:* Optimizes `index_select_tensor_dict()` to prevent redundant unbinding of NestedTensors, significantly speeding up dynamic batching.
- **[feat] OPSD: Privileged-context teacher scoring** ([PR #6833](https://github.com/volcengine/verl/pull/6833))
  *Impact:* Introduces On-Policy Self-Distillation. The teacher model views the ground-truth (privileged context) while scoring the student's on-policy rollout, bridging RL and inference scaling.
- **[utils] Remove hardware dispatch from attention helpers** ([PR #7098](https://github.com/volcengine/verl/pull/7098))
  *Impact:* Generalizes PyTorch/einops attention padding, officially deprecating redundant `npu_flash_attn_utils.py` files for cleaner cross-hardware support.

## 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts from standard Supervised Fine-Tuning (SFT) to complex post-training (RLHF, GRPO, Multi-turn Tool-use), **verl** has positioned itself as one of the most critical open-source infrastructures. 

Today's development log proves *why*: building an RL pipeline isn't just about the PPO algorithm—it's about surviving the hardware and systems engineering bottlenecks. By aggressively optimizing gradient syncs ([#7095](https://github.com/volcengine/verl/pull/7095)) and reducing host-device synchronizations ([#7096](https://github.com/volcengine/verl/pull/7096)), `verl` is solving the exact throughput barriers that prevent researchers from training 30B+ parameter models (like Qwen3) on massive clusters. Furthermore, their rapid integration of specialized algorithms like OPSD ([#6833](https://github.com/volcengine/verl/pull/6833)) ensures the framework remains at the bleeding edge of alignment research.

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

# 🧠 RL Ecosystem Daily Digest: Gymnasium 
**Date:** 2026-07-20

### 1. Today's Highlights
Activity in the last 24 hours has been primarily focused on **vector environment stability** and **JAX functional env improvements**. A critical bug causing NumPy stacking errors in `AsyncVectorEnv` has been identified and patched via PR. Additionally, long-standing feature requests for generic vector typing and JAX reset options saw active updates.

### 2. Releases
*   **No new releases** were published in this reporting window. 

### 3. Important Issues
*   **[#1645](https://github.com/Farama-Foundation/Gymnasium/issues/1645) [CLOSED] [question] Question**
    *   **Author:** ElOuarary
    *   **Summary:** A user inquired about extracting raw data passed to Space objects, noting that standard wrappers only intercept observation/action values, not the space definitions themselves. The issue was resolved and closed without comment.

### 4. Key PR Progress
*   **[#1643](https://github.com/Farama-Foundation/Gymnasium/pull/1643) [OPEN] Fix AsyncVectorEnv NEXT_STEP autoreset reward/done dtypes**
    *   **Focus:** Bugfix. Resolves an `inhomogeneous sequence error` in `step_wait` caused by `AsyncVectorEnv` returning native Python types (`0`, `False`) instead of NumPy dtypes during the `AutoresetMode.NEXT_STEP` worker path.
*   **[#1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577) [OPEN] Generic vector env and vector wrapper types**
    *   **Focus:** API/Typing. Upgrades `VectorEnv` and its subclasses to generic types with optional parameters, fixing `TypeVar` issues while maintaining backwards compatibility.
*   **[#1502](https://github.com/Farama-Foundation/Gymnasium/pull/1502) [OPEN] feat(functional_jax): support reset options for JAX envs**
    *   **Focus:** Feature. Brings `FunctionalJaxEnv` and `FunctionalJaxVectorEnv` into full API compliance by processing `options` in `reset()` rather than silently ignoring them.
*   **[#1323](https://github.com/Farama-Foundation/Gymnasium/pull/1323) [OPEN] Add termination condition based on percentage of visited tiles for Car Racing**
    *   **Focus:** Feature. Updates `Car Racing` to terminate (`terminated = True`) upon lap completion based on a configurable percentage of visited tiles.
*   **[#1644](https://github.com/Farama-Foundation/Gymnasium/pull/1644) [CLOSED] chore(docs): replace furo with celshast**
    *   **Focus:** Documentation infrastructure transition.
*   **[#1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584) [OPEN] docs: add MuJoCo parameter customization tutorial**
    *   **Focus:** Onboarding. Adds a beginner tutorial demonstrating how to modify environment parameters (like `ctrl_cost_weight`) via `gym.make` kwargs using `HalfCheetah-v5`.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto interface standard for single and multi-agent reinforcement learning. Today's development pipeline highlights exactly why standardization matters: 
1. **Hardware Acceleration:** The ongoing work to support `options` in functional JAX environments (#1502) reflects the ecosystem's necessary transition towards hardware-accelerated, JIT-compiled environment stepping.
2. **Scaling Compute:** Fixing dtype edge cases in `AsyncVectorEnv` (#1643) ensures that researchers scaling baseline algorithms across thousands of parallel workers don't fail due to brittle Python-to-NumPy type casting.
3. **API Strictness:** By enforcing strict typing (#1577) and consistent API behavior (handling `reset` options everywhere), Gymnasium reduces friction for researchers plugging custom policies into complex environments, securing its position as the backbone of RL research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL open-source ecosystem daily digest for PettingZoo based on the provided GitHub data.

### 📅 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-20

---

#### 1. Today's Highlights
Activity in the PettingZoo repository over the last 24 hours has been minimal but focused on backend infrastructure. The ecosystem saw a quiet day with zero new issues reported, zero new releases, and exactly one closed Pull Request aimed at documentation dependency management.

#### 2. Releases
No new releases were published today. The project remains on its current stable version.

#### 3. Important Issues
**Total Issues Updated (24h):** 0
There are no new or updated issues to report. The issue tracker is currently quiet, indicating stable usage or a temporary lull in community bug reporting.

#### 4. Key PR Progress
**Total PRs Updated (24h):** 1

*   **[PR #1402] [CLOSED] chore(docs): replace Furo dependency with Celshast** 
    *   **Author:** Trenza1ore
    *   **Timeline:** Created and updated on 2026-07-19.
    *   **Summary:** This pull request addressed a maintenance update to the project's documentation build pipeline. Specifically, it successfully swapped out the `Furo` Sphinx theme in favor of `Celshast` (likely a successor or alternative theme, potentially a typo for the popular `Celery`/`Shasta` or an internal Farama-Foundation theme). Maintaining up-to-date doc infrastructure is critical for reducing build warnings and ensuring API references render correctly.
    *   **Link:** [Farama-Foundation/PettingZoo PR #1402](https://github.com/Farama-Foundation/PettingZoo/pull/1402)

#### 5. Why This Project Matters in Today's RL Landscape
PettingZoo, as part of the Farama-Foundation suite, is the industry standard for Multi-Agent Reinforcement Learning (MARL) environments. While today's update is a minor documentation tweak, the project's underlying role is critical. As MARL research accelerates—driven by advancements in LLM-based multi-agent systems, autonomous swarms, and complex game theory—standardized APIs like PettingZoo are essential. They allow researchers to benchmark algorithms consistently across diverse environments (from cooperative tasks to competitive adversarial games), making infrastructure maintenance—even minor dependency swaps—vital for the long-term reproducibility of RL research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>