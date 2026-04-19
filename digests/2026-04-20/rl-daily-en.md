# RL Open Source Daily Digest 2026-04-20

> Generated: 2026-04-19 22:05 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem on 2026-04-20 is defined by a sharp bifurcation. A cohort of post-training and RLHF frameworks—verl, TRL, AReaL, OpenRLHF, Open Instruct, and slime—is experiencing hyper-active development. This activity is driven by the massive industry demand for aligning Large Language Models (LLMs) and Vision-Language Models (VLMs), pushing these libraries to constantly integrate cutting-edge algorithms (GRPO, TPO, Muon) and scale distributed infrastructure. Conversely, foundational RL tools and classic single-agent/multi-agent libraries (Gymnasium, SB3, CleanRL, PettingZoo) are in mature maintenance phases, focusing on dependency management, API compliance, and CI hygiene rather than feature expansion.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 5 | 8 | 0 | Hardware/engine agnosticism; advancing multi-modal medical recipes. |
| **TRL** | 2 | 8 | 0 | Rapid adoption of new GRPO-variants (TPO); fixing nested VLM configs. |
| **AReaL** | 1 | 7 | 0 | Hardening distributed VLM training; fixing critical memory leaks. |
| **OpenRLHF** | 2 | 1 | 1 (v0.10.2) | Production stability; integrating advanced optimizers (Muon). |
| **Stable Baselines3** | 3 | 4 | 0 | Dependency reduction; aggressive CI optimization. |
| **slime** | 3 | 0 | 0 | Reactive troubleshooting of large-scale (64x H100) distributed NaN/OOM bugs. |
| **Open Instruct** | 0 | 3 | 0 | Hardening distributed Ray clusters; fixing LLM judge API reliability. |
| **Gymnasium** | 0 | 2 | 0 | Administrative cleanup; minor environment bug squashes. |
| **ROCK** | 0 | 2 | 0 | Expanding TS SDK testing; resolving test flakiness. |
| *Inactives* | *0* | *0* | *0* | *No activity for: CleanRL, PettingZoo, rl_games, ROLL, Tianshou, torchtune.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Successors to PPO/DPO:** There is a pronounced shift toward more stable, sequence-level policy optimization. TRL is actively integrating Target Policy Optimization (TPO), while GRPO (Group Relative Policy Optimization) has become the default baseline across verl, TRL, and Open Instruct.
*   **Agentic RL & Tool Use:** Interest is moving beyond single-turn alignment toward interactive agents. TRL users are actively requesting GRPO + tool-use integration (e.g., Python REPL), highlighting a push toward agentic fine-tuning workflows.
*   **Domain-Specific Alignment:** RL is penetrating specialized domains. verl merged a pipeline for medical Vision-Language models (chest radiology), demonstrating real-world, multi-modal applications over standard text benchmarks.
*   **Model Distillation:** Efficient knowledge transfer is a priority. TRL is heavily patching `DistillationTrainer` to support modern nested configurations (Qwen3.5) and reverse-KL computations for sequence padding.

**Engineering & Infrastructure Signals**
*   **Distributed Systems Bottlenecks:** Scaling RL to 100B+ parameters requires systems-level engineering. Projects like slime are battling micro-batching edge-cases and tensor-partitioning crashes across massive clusters (64x H100s), while AReaL is patching unbounded memory leaks in VLM workers.
*   **Inference Engine Diversification:** Frameworks are actively shedding single-engine dependencies to remain hardware-agnostic. verl is patching Ascend NPU support and proposing NeMo-AutoModel integration, while AReaL is upgrading Megatron, SGLang, and vLLM backends.
*   **Optimizer Innovation:** Standard AdamW is no longer sufficient for frontier RL. OpenRLHF formally introduced support for the **Muon** optimizer via DeepSpeed, signaling a shift toward novel distributed optimization strategies.
*   **Infrastructure Resilience:** Tooling is maturing beyond "just working" to failing gracefully. Open Instruct is replacing indefinite Ray cluster deadlocks with actionable diagnostics, and routing LLM-as-a-judge calls via semaphore-guarded async paths to prevent API rate-limit crashes.

## Differentiation Analysis
*   **verl vs. TRL (The Post-Training Leaders):** verl differentiates via deep hardware/platform engineering (Ascend NPUs, global load balancing, B200 smoke tests), targeting elite labs running massive distributed workloads. TRL differentiates via rapid algorithm integration (TPO) and seamless Hugging Face ecosystem synergy, targeting researchers and practitioners adopting the latest transformer architectures.
*   **AReaL vs. slime (The High-Scale Systems):** Both tackle massive distributed RLHF, but AReaL focuses on proactive decoupling and upgrading core backends (Megatron/SGLang). slime is currently deeply entrenched in solving complex memory-partitioning mathematics for variable-length RL rollouts.
*   **Stable Baselines3 vs. Gymnasium (The Classic RL Stack):** SB3 remains focused on performance and portability (cutting dependencies like `pandas` for edge devices like Jetson). Gymnasium serves as the static, foundational API layer, requiring minimal maintenance but providing essential standardization.

## Community Momentum & Maturity
*   **Hyper-growth & Reactive Scaling:** TRL and verl show massive momentum, absorbing new research papers (TPO, GRPO) into codebases within days. However, this pace introduces bugs (OOMs, NaN losses, nested config crashes) that dominate their issue trackers.
*   **High Maturity & Hygiene:** Stable Baselines3 and OpenRLHF demonstrate high project maturity. SB3 maintainers are aggressively optimizing CI times (from 10 to 6 minutes) and cutting bloat. OpenRLHF is systematically refactoring optimizer strategies to ensure clean, production-grade architecture. 
*   **Enterprise Maintenance:** Alibaba’s ROCK is showing maturity through purely backend-focused CI hardening (leaked timers, SDK integration) without chasing algorithmic trends, indicating stable enterprise usage.

## Trend Signals
*   **VLMs are the New Frontier:** Text-only RLHF is baseline; the bleeding edge has shifted to Vision-Language Model alignment, driving complex infrastructure needs (memory leak patching, nested config handling, mp4 decoding).
*   **Distributed Training Reliability over Algorithmic Tweaks:** For frontier models, the primary bottleneck is no longer designing the RL algorithm, but preventing distributed training runs from crashing, deadlocking, or running out of memory.
*   **Edge & Hardware Fragmentation:** The GPU monopoly is weakening. Frameworks are future-proofing by explicitly supporting alternative hardware (Ascend NPUs) and highly optimized DTensor-native SPMD libraries.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

**RL Open-Source Ecosystem Daily Digest: ROCK**
**Date:** 2026-04-20
**Project:** alibaba/ROCK

### 1. Today's Highlights
Activity over the past 24 hours indicates steady, targeted maintenance and quality assurance for ROCK. Two open Pull Requests were recently updated—both authored by developer `guoj14`—focusing on enhancing CI capabilities for the TypeScript SDK and resolving test infrastructure flakiness. No new issues were reported, and no new versions were released.

### 2. Releases
* **No new releases** recorded for 2026-04-20. 

### 3. Important Issues
* **No new or updated issues** in the last 24 hours. The project currently appears to be in a stable state with no outstanding blocking bugs or feature requests from the community over the past day.

### 4. Key PR Progress
Both active PRs focus on hardening the testing infrastructure, contributing to overall system reliability:
* **[PR #842](https://github.com/alibaba/ROCK/pull/842) `[OPEN]` feat(ci): add integration test workflow for TS SDK**
  * **Author:** guoj14
  * **Context:** Introduced on 04-17, updated 04-19. References issue [#735](https://github.com/alibaba/ROCK/issues/735). This PR expands the project's automated testing matrix to include integration tests specifically for the TypeScript SDK, ensuring smoother cross-language compatibility and robust API interactions.
* **[PR #839](https://github.com/alibaba/ROCK/pull/839) `[OPEN]` fix(test): clean up leaked timers in model client tests**
  * **Author:** guoj14
  * **Context:** Introduced on 04-17, updated 04-19. References issue [#838](https://github.com/alibaba/ROCK/issues/838). A crucial maintenance PR that resolves resource leaks (specifically lingering timers) during model client testing, which is essential for preventing flaky CI pipelines and ensuring deterministic test execution.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning workloads scale from research environments to enterprise-grade production, the maturity of the surrounding infrastructure becomes a critical differentiator. ROCK (RL Optimization and Computation Kernel) provides scalable, distributed infrastructure tailored for modern RL workloads. 

Today's focus on TypeScript SDK integration tests and fixing resource leaks in model clients highlights a broader industry trend: bridging the gap between high-performance backend RL training (often in Python/C++) and production frontend ecosystems (JavaScript/TypeScript). By actively hardening its CI pipeline and eliminating test flakiness, ROCK demonstrates a commitment to the reliability required to deploy complex, distributed RL systems in real-world applications.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-04-20

Here is your daily briefing on the `slime` reinforcement learning framework, focusing on distributed training stability and large-scale LLM alignment.

### 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on troubleshooting distributed training stability, with **0 new Pull Requests** and **3 active Issues** (1 long-standing scaling issue, 2 newly reported edge-case bugs). The core focus for the community right now is fixing micro-batching logic and tensor-partitioning errors that occur when scaling RL workloads across multiple nodes.

### 2. Releases
*   **No new releases** were cut in the last 24 hours. The project appears to be in an active bug-fixing phase, likely stabilizing the codebase for a future release.

### 3. Important Issues
*   **Long-Standing Scaling Bug (NaN Loss):** 
    *   **Issue:** [#795 [Bug] `Unexpected result nan` on 64x H100, Qwen3 235B](https://github.com/THUDM/slime/issues/795)
    *   **Analysis:** A highly active, long-running issue where users scaling up to massive models (Qwen3 235B) on large clusters (64x H100s) are encountering `NaN` losses. With 11 comments to date, this remains a critical blocker for users attempting large-scale distributed RLHF.
*   **Micro-batch Partitioning Edge-Cases:**
    *   **Issue:** [#1838 `_get_capped_partitions` produces empty partitions...](https://github.com/THUDM/slime/issues/1838)
    *   **Analysis:** An edge-case bug introduced in a recent PR (#1823) where all-reducing `num_microbatches` across DP (Data Parallel) ranks results in empty tensor lists during `torch.cat()`. 
    *   **Issue:** [#1839 `_get_capped_partitions` crashes when a single sample exceeds...](https://github.com/THUDM/slime/issues/1839)
    *   **Analysis:** A related bug tied to sequence length limits. When a single RL rollout exceeds the `max_tokens_per_gpu` limit, the partitioning algorithm fails to isolate the oversized sample correctly, leading to a crash.

### 4. Key PR Progress
*   **No updates.** There are no new pull requests or updates to existing PRs to report in the last 24 hours. The maintainers are currently in a reactive, issue-triaging phase regarding the partition logic introduced in PR #1823.

### 5. Why This Project Matters in Today's RL Landscape
As LLMs scale past the 100B parameter mark (e.g., Qwen3 235B), the bottleneck in Reinforcement Learning from Human Feedback (RLHF) shifts from algorithm design to **distributed systems engineering**. 

The current issues in `slime` perfectly illustrate the frontier challenges of modern RL: balancing sequence lengths across micro-batches, preventing Out-of-Memory (OOM) errors on individual GPUs, and avoiding silent `NaN` failures during massive multi-node all-reductions. Fixing `_get_capped_partitions` is critical because RL rollout lengths can be highly variable; dynamic, memory-safe batching is required to maintain high GPU utilization without crashing. Projects like `slime` provide the open-source community with the infrastructure necessary to train next-generation reasoning models without relying on proprietary black-box APIs.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL daily digest for AReaL based on the provided data.

# AReaL RL Daily Digest — 2026-04-20

## 1. Today's Highlights
Activity in the AReaL ecosystem over the last 24 hours has been primarily focused on **infrastructure hardening, dependency upgrades, and engine decoupling**. The repository saw 7 pull requests updated and 1 significant bug report. Key themes include addressing memory leaks in VLM training, upgrading critical runtime backends (Megatron, SGLang, vLLM), and improving distributed data loading reliability.

## 2. Releases
No new releases were published today.

## 3. Important Issues
*   **Critical Memory Leak in VLM Training:** Issue [#1209](https://github.com/inclusionAI/AReaL/issues/1209) reports that `RTensor._fetch_buffer` leaks unboundedly on worker processes. This is a critical bug as it crashes long-running reinforcement learning training workflows, specifically for Vision-Language Models (VLMs). The bug is confirmed to be reproducible and tied to the project's provided Docker image.

## 4. Key PR Progress
*   **Dependency Upgrades:** PR [#1206](https://github.com/inclusionAI/AReaL/pull/1206) proposes a major bump to AReaL's core inference and training dependencies. This includes upgrading `megatron-core` (0.16.0 → 0.17.0), `megatron-bridge` (0.3.0 → 0.4.0), `sglang` (0.5.9 → 0.5.10.post1), and `vllm`. 
*   **Engine Decoupling & Abstraction:** PR [#1140](https://github.com/inclusionAI/AReaL/pull/1140) introduces a `from_pretrained` method directly into the `FSDPEngine` class. This effectively decouples the engine initialization from the configuration dataclass, allowing for more flexible, direct engine construction.
*   **Data Service Reliability:** 
    *   PR [#1210](https://github.com/inclusionAI/AReaL/pull/1210) fixes data shuffling bugs by moving the random seed from a per-request parameter (re-initialized every epoch/load) to a stable, worker-level configuration.
    *   PR [#1208](https://github.com/inclusionAI/AReaL/pull/1208) `[CLOSED]` successfully patched distributed data loading failures in IPv6-only environments using HTTP proxies, completing the migration from `httpx` to `aiohttp`.
*   **Inference & Rollout Enhancements (WIP):** Development continues on expanding rollout capabilities. PR [#1064](https://github.com/inclusionAI/AReaL/pull/1064) adds scaffolding rollout workflows, PR [#1176](https://github.com/inclusionAI/AReaL/pull/1176) is working on Sglang Eagle speculative decoding, and PR [#1207](https://github.com/inclusionAI/AReaL/pull/1207) introduces router replay for the Megatron engine.

## 5. Why This Project Matters in Today's RL Landscape
As reinforcement learning expands beyond text-only LLMs into complex domains like Vision-Language Models (VLMs), the ability to execute stable, multi-week distributed training runs without worker crashes is the primary bottleneck for AI labs. AReaL's current development focus—evidenced by the patching of unbounded memory leaks ([#1209](https://github.com/inclusionAI/AReaL/issues/1209)) and fixing of distributed seed re-initialization ([#1210](https://github.com/inclusionAI/AReaL/pull/1210))—highlights a mature open-source ecosystem tackling the gritty realities of large-scale RLHF/RLAIF. Furthermore, their rapid integration of cutting-edge inference optimizations like SGLang speculative decoding ([#1176](https://github.com/inclusionAI/AReaL/pull/1176)) ensures the infrastructure remains highly competitive for high-throughput LLM/VLM rollout generation.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face) 
**Date:** 2026-04-20

Here is your daily briefing on the reinforcement learning and post-training open-source ecosystem, focusing on the Hugging Face `trl` repository.

## 1. Today's Highlights
Activity over the last 24 hours was highlighted by the rapid community response to emerging bugs in newly introduced trainers. The spotlight is on **Target Policy Optimization (TPO)**, a new GRPO-variant loss function, alongside critical patches for `DistillationTrainer` handling nested model configurations (specifically for the new Qwen3.5 architecture) and variable-length sequence padding. There were 8 active PRs and 2 active issues, with 0 new releases.

## 2. Releases
No new releases were published today.

## 3. Important Issues
*   **Nested Config Bug in Qwen3.5 Distillation:** Issue [#5585](https://github.com/huggingface/trl/issues/5585) reports that `DistillationTrainer` crashes when initializing Qwen3.5 models. The failure occurs because `vocab_size` is nested under `config.text_config` rather than at the root `config` level.
*   **GRPO + Tool Use Integration:** Issue [#5366](https://github.com/huggingface/trl/issues/5366) remains active as a user attempts to fine-tune `Qwen3-0.6B` using GRPO in conjunction with a Python REPL tool. This highlights a growing demand for agentic RL fine-tuning workflows.

## 4. Key PR Progress
*   **Algorithm Expansion (TPO):** PR [#5591](https://github.com/huggingface/trl/pull/5591) introduces Target Policy Optimization (TPO) as a sequence-level GRPO-family loss (`loss_type="tpo"`). An alternative, experimental implementation of TPO is also being tracked in PR [#5506](https://github.com/huggingface/trl/pull/5506).
*   **Distillation & Bug Fixes:** 
    *   PR [#5592](https://github.com/huggingface/trl/pull/5592) directly addresses Issue #5585 by implementing robust extraction of `vocab_size` to support nested configurations for `DistillationTrainer` and `GOLDTrainer`.
    *   PR [#5594](https://github.com/huggingface/trl/pull/5594) fixes a critical NaN-gradient bug in `DistillationTrainer` caused by per-sample padding in teacher logprob tensors during reverse-KL computation.
*   **Reward Training Data Quality:** PR [#5564](https://github.com/huggingface/trl/pull/5564) fixes a silent failure in `DataCollatorForRewardModelingDataset` by checking for the `margin` key across all batch examples, rather than just `examples[0]`.
*   **Broadening Model Support:** PR [#5574](https://github.com/huggingface/trl/pull/5574) and PR [#5526](https://github.com/huggingface/trl/pull/5526) update training chat templates for the simplified `Qwen3-2507` series and `Phi-3` models, respectively.
*   **Dependency Management:** PR [#5593](https://github.com/huggingface/trl/pull/5593) updates the `vllm` version constraint to allow minor package bumps (e.g., v0.18.1), ensuring compatibility for faster RLHF generation loops.

## 5. Why This Project Matters in Today's RL Landscape
The current updates in `trl` perfectly illustrate the rapid maturation of the post-training landscape. The swift addition of **TPO** demonstrates the ecosystem's pivot beyond standard PPO and DPO toward more stable, sequence-level policy optimization methods. Furthermore, the focus on `DistillationTrainer` and agentic GRPO tool-use shows that the frontier of RL is no longer just about aligning chat models—it is about distilling reasoning capabilities efficiently into smaller models (like Qwen3.5) and training models to interact with external environments. `trl` continues to act as the central, open-source bridge connecting cutting-edge RL research with production-ready transformer architectures.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**RL Open-Source Ecosystem Daily Digest: 2026-04-20**
**Focus:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

### 1. Today's Highlights
The OpenRLHF ecosystem saw targeted maintenance and structural improvements over the past 24 hours. The core maintainers shipped a bug-fix release (**v0.10.2**) to address CLI stability following recent refactoring efforts. Simultaneously, community contributors are actively patching edge cases in agent generation workflows, while a significant internal restructuring PR was merged to streamline optimizer/scheduler integrations—specifically enhancing Muon optimizer support.

### 2. Releases
*   **[v0.10.2](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.10.2)** 
    *   **Focus:** Stability and bug fixes.
    *   **Key Changes:** Resolved CLI bugs caused by recent refactoring, patched DPO execution `.sh` scripts, and added a crucial warning mechanism for Muon gradient norms.

### 3. Important Issues
Two community-reported bugs were identified and swiftly closed, highlighting active community triaging:
*   **[#1222](https://github.com/OpenRLHF/OpenRLHF/issues/1222) `ring_flash_attn` Compatibility Break:** Upstream `transformers` library updates were causing import failures in `ring_attn_utils.py` (filed by @allen-dc). 
*   **[#1223](https://github.com/OpenRLHF/OpenRLHF/issues/1223) `max_token` Agent Crash:** A `TypeError` (int vs. None) in `openrlhf/utils/agent.py`. The logic relied on `hasattr()`, which returned `True` even when the `max_tokens` value was `None`, bypassing the fallback mechanism and crashing the generation pipeline.

### 4. Key PR Progress
*   **[#1221](https://github.com/OpenRLHF/OpenRLHF/pull/1221) [CLOSED/MERGED] Refactor optimizer/scheduler creation into DeepSpeed strategy:** 
    *   *Overview:* Submitted by core contributor @hijkzzz, this architectural PR extracts optimizer and scheduler initialization from individual trainer classes directly into `DeepspeedStrategy.prepare()`.
    *   *Significance:* It enables config-based optimizer creation and officially introduces support for the **Muon optimizer** (requiring DeepSpeed >= 0.18.2 via the `--optim muon` flag). This lays the groundwork for cleaner trainer code and more flexible distributed optimization strategies.

### 5. Why This Project Matters in Today's RL Landscape
As LLMs increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and advanced post-training alignment (like DPO and GRPO), infrastructure scalability is the primary bottleneck. OpenRLHF has established itself as a critical production-grade framework by natively integrating with DeepSpeed and advanced memory-saving techniques like Ring Attention. 

Today's updates reflect the project's current trajectory: hardening the toolkit for production reliability (fixing agent edge cases and CLI bugs) while rapidly adopting cutting-edge optimization algorithms like Muon. This makes OpenRLHF an essential bellwether for how the open-source community bridges the gap between experimental RL research and enterprise-scale distributed training.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Ecosystem Daily Digest: verl-project/verl
**Date:** 2026-04-20

## 1. Today's Highlights
The verl project is experiencing a highly active maintenance phase, with **8 pull requests updated and 5 issues revisited** in the past 24 hours. The primary focus of the community is on project-wide namespace migration, critical algorithmic bug fixes in FSDP and KL penalties, expanding hardware compatibility for Ascend NPUs, and introducing domain-specific RL recipes (Medical Vision-Language models).

## 2. Releases
*   **None** (No new releases cut in the last 24 hours).

## 3. Important Issues
*   **Namespace Migration Wrap-up:** The good-first-issue [[#5852] Migrate volcengine/verl references to verl-project/verl](https://github.com/verl-project/verl/issues/5852) was officially closed today. This marks the completion of a major repo transition, moving 242 occurrences of the legacy `volcengine` namespace to the new `verl-project` organization.
*   **FSDP Gradient Accumulation Fixed:** [[#5625] Incorrect loss_scale_factor for token-mean mode in gradient accumulation in legacy FSDP](https://github.com/verl-project/verl/issues/5625) was closed. The issue highlighted a severe mismatch in gradient scaling where `agg_loss` normalized by local token count but the FSDP engine scaled by sample-count ratio, leading to gradient divergence.
*   **Ongoing OOM Instability:** The highly-upvoted (👍 4) [[#3453] Out Of Memory](https://github.com/verl-project/verl/issues/3453) saw continued discussion today, highlighting persistent memory management challenges for users deploying large models.
*   **Backend Expansion RFC:** [[#5245] [RFC] support Nemo-AutoModel as an alternative training backend](https://github.com/verl-project/verl/issues/5245) is actively being discussed, proposing the integration of NVIDIA's PyTorch DTensor-native SPMD training library to diversify verl's backend engine support.

## 4. Key PR Progress
*   **Algorithm Fixes:** 
    *   [[PR #5626] fix: fix loss scale factor in fsdp when use token-mean mode](https://github.com/verl-project/verl/pull/5626) was merged, resolving the aforementioned FSDP divergence issue by implementing a global batch token count via `allreduce` before mini-batch updates.
    *   [[PR #6058] fix: strip '+' suffix in kl_penalty](https://github.com/verl-project/verl/pull/6058) (Open) addresses a long-standing `NotImplementedError` crash when using `+`-suffixed KL estimators (e.g., `k3+`, `low_var_kl+`) in reward/loss calculations.
*   **Infrastructure & Rollout:** 
    *   [[PR #6059] feat: enhancing global load balancer](https://github.com/verl-project/verl/pull/6059) (Open) continues Phase 2 of the rollout routing roadmap, advancing the `GlobalRequestLoadBalancer` for better distributed inference scaling.
    *   [[PR #5967] fix: Add Mindspeed Patch for Async Training on Ascend NPUs](https://github.com/verl-project/verl/pull/5967) (Open) brings critical `torch_npu` fixes for fully asynchronous RL training on Ascend hardware.
*   **Domain-Specific Recipes:**
    *   [[PR #6060] xr_chest: first GRPO recipe for Qwen3-VL on chest radiology reports](https://github.com/verl-project/verl/pull/6060) (Closed/Merged) introduces a medical-domain pipeline, complete with RAVE mp4 decoding and placeholder ROUGE-L rewards, successfully smoke-tested on an 8xB200 node. 
*   **Repo Chores:** Two namespace migration PRs, [[PR #6008]](https://github.com/verl-project/verl/pull/6008) and [[PR #6053]](https://github.com/verl-project/verl/pull/6053), were successfully merged to finalize the `verl-project` transition.

## 5. Why This Project Matters in Today's RL Landscape
verl has firmly established itself as a critical infrastructure layer for post-training and RLHF on frontier models. Today's digest underscores two major strengths keeping verl relevant in a rapidly evolving RL landscape:
1.  **Hardware & Engine Agnosticism:** By actively fixing integration for Ascend NPUs ([[PR #5967]]) and discussing the addition of NVIDIA NeMo-AutoModel ([[Issue #5245]]), verl is future-proofing its architecture against proprietary hardware lock-ins and single-backend limitations.
2.  **Real-World Multi-Modal Alignment:** The merging of the Qwen3-VL chest radiology GRPO recipe ([[PR #6060]]) demonstrates that verl is no longer just a framework for text-based benchmarks; it is actively being deployed for highly complex, domain-specific multi-modal alignment tasks using cutting-edge hardware (B200s) and advanced algorithms (GRPO).

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: Open Instruct
**Date:** 2026-04-20 | **Project:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on Pull Requests, with three active PRs updated and zero new issues or releases. The ongoing development efforts highlight a strong community focus on infrastructure resilience and tooling reliability, specifically hardening distributed resource management for GRPO (Group Relative Policy Optimization) and fixing benchmark utilities. 

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Important Issues
*   **No new or updated issues** were logged in the last 24 hours. The contributor pipeline remains solely PR-driven at the moment.

## 4. Key PR Progress
The latest updates focus heavily on distributed execution stability and evaluation tooling:

*   **[PR #1586](https://github.com/allenai/open-instruct/pull/1586) [OPEN]** *grpo_fast: harden single-node startup resource checks and diagnostics*
    *   **Author:** taivu1998 (Updated: 2026-04-19)
    *   **Summary:** Introduces a preflight-check module for `grpo_fast` that validates Ray-visible CPU/GPU resources before initializing the learner placement group. It bounds wait times and replaces indefinite hangs with actionable diagnostics. Includes new focused unit tests.
*   **[PR #1587](https://github.com/allenai/open-instruct/pull/1587) [OPEN]** *Stabilize GRPO LLM judge calls by routing them through the guarded LiteLLM helper*
    *   **Author:** taivu1998 (Updated: 2026-04-19)
    *   **Summary:** Refactors the `LMJudgeVerifier` to route calls through a shared semaphore-guarded LiteLLM async path, removing direct `litellm.acompletion(...)` calls. This update preserves exception-driven retries and improves usage-based cost accounting for LLM-as-a-judge evaluation pipelines.
*   **[PR #1623](https://github.com/allenai/open-instruct/pull/1623) [OPEN]** *Fix save_completion_lengths writing CSV header on every batch call*
    *   **Author:** Chessing234 (Updated: 2026-04-19)
    *   **Summary:** Resolves a data-logging bug in `benchmark_generators.py` where the CSV header was being written to disk on every batch iteration due to unconditional `writer.writeheader()` calls during append mode.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and its successors (like GRPO) become the default for post-training large language models, infrastructure is the primary bottleneck. The current PRs in Open Instruct perfectly illustrate the maturation of the RL ecosystem: the focus has shifted from simply implementing RL algorithms to making them **production-ready and stable at scale**. 

PRs #1586 and #1587 are solving critical distributed compute pain points—preventing cluster deadlocks (hangs) and managing API rate limits/costs during model-based judging. For researchers and engineers training models via Ray clusters, these infrastructure hardening efforts are essential for running multi-node RL workloads reliably without burning through compute budgets on silent failures.

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

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-04-20 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

## 1. Today's Highlights
The Gymnasium repository experienced a low-activity day with zero new issues opened and no new releases. Activity was restricted to administrative updates and minor environment patches, specifically the merging of an outdated sponsorship removal request and a fix for the classic "Taxi" environment. 

## 2. Releases
No new releases were published today. The repository remains on its latest stable version.

## 3. Important Issues
No new issues were opened, and no existing issues were updated within the last 24 hours. 

## 4. Key PR Progress
Two Pull Requests saw updates in the last 24 hours, though both are currently marked as closed:
*   **[Environment Fix] [#1558 Fix Taxi(is_rainy)](https://github.com/Farama-Foundation/Gymnasium/pull/1558)** by `pseudo-rnd-thoughts`
    *   *Details:* Created and closed rapidly on April 19. This PR addresses a bug related to the `is_rainy` condition in the classic Taxi environment. 
*   **[Administrative] [#1541 Remove Sponsorship](https://github.com/Farama-Foundation/Gymnasium/pull/1541)** by `jkterry1`
    *   *Details:* Opened initially in early March, this administrative PR removes sponsorship assets following the conclusion of a partnership with Wispr.

## 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent reinforcement learning in Python. While today's digest highlights minor maintenance (environment bug squashing and administrative cleanup), it underscores a critical phase for foundational open-source RL tools. In the modern RL landscape—increasingly dominated by massive foundation models and complex simulators—projects like Gymnasium provide the essential, standardized plumbing (API compliance, environment vectorization, and wrapper utilities) that allow researchers to benchmark new algorithms reliably. Consistent maintenance of even classic environments like Taxi is vital for backward compatibility and reproducible research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the RL Open-Source Daily Digest for Stable Baselines3 for 2026-04-20.

# RL Daily Digest: Stable Baselines3 (2026-04-20)

## 1. Today's Highlights
Stable Baselines3 (SB3) experienced a flurry of maintenance and optimization activity in the last 24 hours, driven largely by core maintainer `araffin`. The focus has been on significantly reducing the library's dependency footprint and speeding up continuous integration (CI) pipelines. Additionally, recent community bug reports regarding Gymnasium environment compatibility (`Discrete` action space offsets) and documentation have been addressed and closed out.

## 2. Releases
*   **None.** No new stable or pre-releases were published today.

## 3. Important Issues
*   **Bug Fixed - Discrete Action Space Offsets:** Issue [#2241](https://github.com/DLR-RM/stable-baselines3/issues/2241) reported that SB3 ignored the `start` parameter in `gym.spaces.Discrete`, causing agents to output invalid actions outside the configured space. This was rapidly resolved and closed.
*   **Dependency Reduction:** Issue [#680](https://github.com/DLR-RM/stable-baselines3/issues/680), a long-standing feature request dating back to 2021, was finally closed. It successfully advocated for moving heavy dependencies like `pandas` to optional extras to streamline installations on edge devices (e.g., Nvidia Jetson). 
*   **Documentation UI Bug:** A newly opened issue, [#2245](https://github.com/DLR-RM/stable-baselines3/issues/2245), notes a minor UI bug where the left navigation shifts when scrolling through right-panel content. The author has already volunteered to submit a fix.

## 4. Key PR Progress
*   **CI Optimization (~1.8x Faster):** PR [#2243](https://github.com/DLR-RM/stable-baselines3/pull/2243) (by `araffin`) was merged, successfully reducing test suite execution time from ~10 minutes to ~6 minutes while maintaining identical code coverage.
*   **Lightweight Core Library:** PR [#2244](https://github.com/DLR-RM/stable-baselines3/pull/2244) (by `araffin`) was merged, officially moving `pandas` and `matplotlib` to optional extras. 
*   **Gymnasium Alignment:** PR [#2242](https://github.com/DLR-RM/stable-baselines3/pull/2242) was closed after successfully implementing the fix for the `start` offset bug in discrete action spaces.
*   **Closed Without Merging:** PR [#2223](https://github.com/DLR-RM/stable-baselines3/pull/2223) (adding `infos` to `VecEnv.reset()`) and PR [#2234](https://github.com/DLR-RM/stable-baselines3/pull/2234) (adding `torch.compile` and updating RL tips) were both closed without merging. The latter PR also included a maintainer note flagging "LLM generated" content and incomplete checklists.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, accessible, and well-documented Reinforcement Learning implementations. Today's digest highlights a crucial, often unseen aspect of successful open-source ML projects: **active maintenance and architectural hygiene**. By aggressively cutting heavy dependencies like `pandas` and optimizing CI pipelines, SB3 ensures it remains highly portable for modern edge-AI hardware (like Jetson robotics kits) and maintains a rapid development cycle. Furthermore, prompt patching of Gymnasium API nuances (like `Discrete` space offsets) ensures that researchers and practitioners using modern environment wrappers don't encounter silent training bugs.

</details>