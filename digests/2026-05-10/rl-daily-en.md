# RL Open Source Daily Digest 2026-05-10

> Generated: 2026-05-09 22:11 UTC | Projects covered: 15

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
The RL open-source ecosystem is currently bifurcated into two main tiers. The high-activity tier is dominated by large-scale LLM post-training frameworks (verl, TRL, AReaL, slime, ROLL, ROCK) and foundational libraries (Tianshou). These projects are aggressively iterating to support next-generation agentic workflows, massive Mixture-of-Experts (MoE) architectures, and alternative hardware accelerators. Meanwhile, the traditional general-purpose and classic RL libraries (Gymnasium, CleanRL, Stable Baselines3, PettingZoo) are experiencing periods of low activity, signaling either stabilization or a shift in community focus toward LLM-specific infrastructure.

## Activity Comparison
The table below summarizes repository velocity for the 2026-05-10 cycle. Projects with zero activity are grouped at the end.

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 13 | 32 | 0 | Aggressive pivot to async multi-turn agents and Alt hardware (Ascend). |
| **TRL** | 2+ | 11+ | 1 (v1.4.0) | VRAM optimization (chunked NLL) and maturing async rollout stability. |
| **AReaL** | 4+ | 6+ | 0 | Inference/serving stack hardening; multi-backend unification. |
| **slime** | 3 | 4 | 0 | Scaling complex MoE distributed execution (Gemma 4, Qwen 3.5). |
| **Tianshou** | 4+ | 2 | 0 | Core API refactoring and modernization for upcoming v3 release. |
| **ROLL** | 1 | 2 | 0 | Stabilizing agentic multi-turn training; expanding to Huawei NPUs. |
| **ROCK** | 2 | 3 | 0 | Cloud-native orchestration and cross-platform sandboxing. |
| **Gymnasium** | 0 | 1 | 0 | Upgrading core environment APIs for heterogeneous graph support. |
| **Open Instruct** | 0 | 1 | 0 | Minor bug fix in dataset mixing/loading utilities. |
| **CleanRL** | 0 | 0 | 0 | *No activity.* |
| **OpenRLHF** | 0 | 0 | 0 | *No activity.* |
| **torchtune** | 0 | 0 | 0 | *No activity.* |
| **Stable Baselines3** | 0 | 0 | 0 | *No activity.* |
| **PettingZoo** | 0 | 0 | 0 | *No activity.* |
| **rl_games** | 0 | 0 | 0 | *No activity.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Agentic Workflows & Multi-Turn RL:** The most prominent research shift is the move from single-turn RLHF to complex, multi-turn tool-calling agents. Frameworks like verl, ROLL, and AReaL are actively building runtimes to support asynchronous multi-turn rollouts, multi-trajectory scoring, and step-level budgeting for agentic environments.
*   **Frontier MoE & VLM Support:** Ecosystem-wide efforts are targeting the newest massive Mixture-of-Experts (MoE) and Vision-Language Models (VLMs). Projects are scrambling to patch memory planners and distributed configs to reliably train Qwen 3.5, Gemma 4, and LLaVA architectures.
*   **Advanced Distillation:** Projects like TRL are exploring ways to improve knowledge distillation, specifically investigating how to provide "privileged context" to teacher models (GoldTrainer/sdft_trainer) to improve student model performance.

**Engineering & Infrastructure Signals**
*   **Hardware Diversification & Ascend NPUs:** Driven by global GPU compute constraints, major frameworks (verl, ROLL, AReaL) are heavily investing in backend-agnosticism, specifically adding support for Huawei Ascend NPUs and automating their environment setups.
*   **VRAM & Memory Optimization:** GPU memory walls remain the primary bottleneck for open-source RL. TRL's release of a chunked cross-entropy loss (cutting VRAM by up to 50%) and multiple fixes for CUDA memory leaks and offloading regressions (slime, TRL) highlight the ongoing war against OOM errors.
*   **Cloud-Native Orchestration & CI Velocity:** RL training is becoming highly distributed. ROLL and AReaL are refining Kubernetes scheduling, while ROCK implemented dynamic Nacos configuration reloading. Additionally, projects like TRL and verl are migrating CI pipelines to `uv` for faster dependency resolution.

## Differentiation Analysis
*   **TRL** remains the accessible, HuggingFace-ecosystem champion, focusing on algorithmic correctness, SFT memory reduction, and single-node/consumer-grade hardware viability.
*   **verl & slime** are targeting the extreme high-end of distributed compute. Slime acts as a deep bridge between Ray and Megatron for 30B+ parameter models, focusing heavily on distributed parallelism (TP/PP/DP/EP). verl is differentiating via its "agent gateway runtime," treating asynchronous tool interactions as a first-class distributed systems problem.
*   **AReaL** is positioning itself as the ultimate backend-agnostic unifier (FSDP, Megatron, DeepSpeed), focusing heavily on the inference/serving control plane (connection pooling, routing) to maximize rollout throughput.
*   **ROLL & ROCK** differentiate by focusing heavily on the underlying infrastructure and orchestration layer, dealing with cluster scheduling, sandbox standardization, and cross-platform adapters, rather than just the RL algorithms.

## Community Momentum & Maturity
*   **High Velocity & Systemic Maturation:** The LLM post-training frameworks are exhibiting signs of rapid enterprise maturation. This is evidenced by AReaL replacing dummy tests with real FSDP/Megatron GSM8K training runs in CI, TRL enforcing strict DDP invariant testing across multiple GPU configurations, and heavy refactors of legacy tooling (e.g., verl deprecating old MCP tool implementations).
*   **Foundational Steadiness:** Foundational libraries are either highly stable or quietly preparing for major iterations. Gymnasium is making methodical, structural API updates (Graph spaces), while Tianshou is doing the necessary community housekeeping for a v3 release (roadmap revival, terminology standardization). 
*   **The Classic RL Lull:** The total inactivity across standard-bearers like CleanRL, Stable Baselines3, and rl_games suggests that the current wave of open-source contributor momentum is almost exclusively captured by LLM post-training infrastructure.

## Trend Signals
1.  **The Qwen 3.5 Integration Crunch:** The simultaneous emergence of Qwen 3.5 bugs across verl, AReaL, and slime indicates that base model architectural changes (like MTP layers) are breaking downstream RL frameworks. Frameworks must become more adaptive to base-model churn to survive.
2.  **Offloading is a Fragile Art:** Multiple high-priority bugs (slime's `actor.sleep()` CUresult crash, AReaL's uncontrolled VRAM spike) prove that CPU offloading and memory management in distributed RL remain highly unstable, requiring cautious deployment.
3.  **The Rise of the RL Sandbox:** With ROCK introducing cross-platform platform adapters, there is a growing trend of treating the RL execution environment (the sandbox where agents interact) as a distinct, hardened cloud-native infrastructure component, rather than just a Python script.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for May 10, 2026:

# RL Open-Source Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-05-10

### 1. Today's Highlights
Activity on the ROLL (Reinforcement Learning for LLMs) framework over the past 24 hours signals strong ongoing development in hardware heterogeneity and agentic RL training stability. The community and maintainers are actively addressing edge cases in Multi-turn/Agentic workflows and expanding hardware support beyond standard NVIDIA GPUs. 

### 2. Releases
No new releases were recorded in the past 24 hours.

### 3. Important Issues
*   **[Bug] Checkpointing LoRA with MCore-Adapter:** 
    [Issue #411](https://github.com/alibaba/ROLL/issues/411) (Open)
    **Summary:** A persistent issue reported by `Unofish` details a checkpoint failure when saving states during LoRA Supervised Fine-Tuning (SFT) of a Qwen3.5-35B-A3B model using the Megatron-Core adapter. The error occurs in a multi-node distributed setup ($WORLD\_SIZE=4$, $EXPERT\_MODEL\_PARALLEL\_SIZE=4$). With 10 comments to date, this highlights the complexities ROLL engineers face when integrating large Mixture-of-Experts (MoE) architectures with advanced distributed checkpointing mechanisms.

### 4. Key PR Progress
*   **[Feature] Huawei Ascend NPU Megatron Support:** 
    [PR #380](https://github.com/alibaba/ROLL/pull/380) (Open)
    **Summary:** Opened by `UsernameFull`, this PR introduces Megatron-Core backend compatibility for Huawei Ascend NPU devices. The changes include updates to platform detection priority (`roll/platforms/__init__.py`), effectively decoupling ROLL's advanced RL training capabilities from a GPU-only ecosystem. 
*   **[Fix] Agentic LR Scheduler Step Budget:** 
    [PR #439](https://github.com/alibaba/ROLL/pull/439) (Open)
    **Summary:** Opened by `dashitongzhi`, this PR resolves a critical mid-training failure in step-level agentic environments. When using `AgentNativeStepEnvManager`, the Learning Rate (LR) scheduler exhausted its step budget prematurely because `PPOConfig.set_max_steps()` did not account for multi-turn chunking. This fix ensures the learning rate remains stable throughout complex agentic rollouts.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts from static foundation models to dynamic, tool-using agents, ROLL has positioned itself as a critical production-grade framework for post-training and RLHF. The issues and PRs updated today perfectly illustrate the current frontier of RL engineering:
1.  **Agentic Workloads:** Standard RLHF assumes single-turn interactions. Fixes like PR #439 show that ROLL is actively maturing to handle long-horizon, multi-turn "agentic" budgeting and scheduling, which is essential for training modern autonomous AI.
2.  **Hardware Diversification:** With global constraints on GPU supply, PR #380 reflects a broader industry trend toward hardware agility. Bringing Megatron-scale RL training to Huawei NPUs gives organizations leverage to run massive LLM post-training pipelines on diverse infrastructure.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-05-10 | **Project:** alibaba/ROCK

Here is your daily brief on the latest developments in the ROCK reinforcement learning ecosystem.

### 1. Today's Highlights
Activity over the last 24 hours indicates a strong, dual-pronged focus on **infrastructure robustness** and **platform extensibility**. Core maintainers have successfully merged a highly requested feature for dynamic configuration reloading, while simultaneously opening new architectural improvements to support Windows environments via PowerShell and patching a critical metrics pipeline bug.

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **Cross-Platform Sandbox Architecture ([#921](https://github.com/alibaba/ROCK/issues/921)):** Opened by `zhongwen666`, this enhancement proposes refactoring the monolithic OS-switched `rock/rocklet/local_sandbox.py` into modular "platform adapters." This is a crucial step for reliably extending RL training sandboxes across different operating systems.
*   **Metrics Endpoint ConnectTimeout ([#918](https://github.com/alibaba/ROCK/issues/918)):** Opened by `zhangjaycee`, this bug report highlights that the MetaStore is exporting metrics to the wrong endpoint following a previous update (`#887`), resulting in `ConnectTimeout` errors and blind spots in RL experiment monitoring.

### 4. Key PR Progress
*   **[MERGED] Dynamic Scheduler Config Reloading via Nacos ([#889](https://github.com/alibaba/ROCK/pull/889)):** Closed and merged today. Author `zhongwen666` implemented runtime dynamic reloading of scheduler configurations using Nacos. This allows RL infrastructure to scale and adjust resource allocation on the fly without requiring disruptive service restarts.
*   **[OPEN] Windows PowerShell Platform Adapter ([#922](https://github.com/alibaba/ROCK/pull/922)):** A direct follow-up to Issue `#921`. This PR introduces a `PowerShellSession` driver utilizing a threaded reader and marker-based output framing, cleanly decoupling Windows support from the core Linux-based sandbox logic.
*   **[OPEN/CLOSED] Metrics Endpoint Hotfix ([#919](https://github.com/alibaba/ROCK/pull/919), [#920](https://github.com/alibaba/ROCK/pull/920)):** Author `zhangjaycee` patched the MetaStore bug (Issue `#918`) by ensuring `rock_config` is correctly passed to `SandboxTable` and `SandboxMetaStore`. PR `#919` was closed in favor of the updated `#920`, which is currently under review.

### 5. Why This Project Matters in Today's RL Landscape
In modern reinforcement learning research and deployment, the training environment and orchestration infrastructure are just as critical as the algorithm itself. Today's updates to the ROCK ecosystem highlight a maturing RL infrastructure:
1.  **Seamless Distributed Training:** The integration of Nacos for dynamic config reloading (`#889`) reflects the industry's shift toward cloud-native, distributed RL. It allows infrastructure teams to tweak scheduling parameters in real-time, maximizing GPU/CPU utilization without interrupting long-running RL workloads.
2.  **Ecosystem Flexibility:** By abstracting local sandboxes into platform adapters (`#922`), ROCK is lowering the barrier to entry for applied RL developers who prototype locally on heterogeneous machines (like Windows workstations) before scaling out to massive Linux clusters.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for May 10, 2026, focusing on the `THUDM/slime` repository.

### 1. Today's Highlights
Activity on THUDM/slime continues to emphasize scalability and broad LLM compatibility for post-training. The community is actively pushing to support the newest Mixture-of-Experts (MoE) and dense architectures, notably Gemma 4 and Qwen 3.5. Under the hood, development is focused on fixing critical distributed execution edge-cases (like actor concurrency and memory offloading) and integrating new experiment-tracking tools to support large-scale distributed RL workflows. 

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **Critical Offloading Regression ([#1895](https://github.com/THUDM/slime/issues/1895)):** A `CUresult error 1 (invalid argument)` crash is occurring in `actor.sleep()` during CPU offloading (`offload_train`). This appears to be a regression introduced by a prior memory-management PR (#1856), highlighting the complexities of GPU memory management in distributed RL.
*   **Qwen 3.5 Initialization Bug ([#1894](https://github.com/THUDM/slime/issues/1894)):** Users are reporting a `'NoneType' object has no attribute 'megatron_module'` error when attempting to initialize the `qwen3_5-9b` model, indicating a potential mismatch in the model-wrapping logic for newer architectures.
*   **Qwen 3.5 MoE Support Inquiry ([#1831](https://github.com/THUDM/slime/issues/1831)):** A closed discussion confirming community interest in running RL fine-tuning on MoE models like `Qwen3.5-35B-A3B`.

### 4. Key PR Progress
*   **Adding Gemma 4 Architecture Support ([#1855](https://github.com/THUDM/slime/pull/1855))**: [Open] A massive feature addition by `leofan-lab` introducing support for Gemma 4 (26B-A4B MoE & 31B dense). The PR includes HuggingFace ↔ Megatron weight conversions and passing parity tests across complex distributed parallelism configurations (TP/PP/DP/CP/EP).
*   **Fixing Distributed POST Actor Concurrency ([#1880](https://github.com/THUDM/slime/pull/1880))**: [Closed/Merged] A crucial bug fix by `kaysonyu` that corrects per-actor concurrency calculations in distributed POST mode. The previous implementation incorrectly divided `_client_concurrency` by total nodes rather than total active Ray actors.
*   **SwanLab Tracking Integration ([#1898](https://github.com/THUDM/slime/pull/1898))**: [Open] Adds `SwanLab` as an optional metric/tracking backend, providing an alternative to Weights & Biases (W&B) for RL experiment monitoring.
*   **CI & Performance Migration ([#1897](https://github.com/THUDM/slime/pull/1897))**: [Closed/Merged] Upstreamed internal optimizations, including adding `tqdm` to training loops and skipping redundant `logprob` calculations during on-policy training, which should slightly reduce compute overhead.

### 5. Why This Project Matters in Today's RL Landscape
Post-training large language models (LLMs) using Reinforcement Learning (RL) is the primary driver of current reasoning capabilities (e.g., GRPO, PPO). However, scaling RL to models exceeding 30B parameters—especially compute-efficient MoE architectures like Qwen 3.5 and Gemma 4—remains a massive systems engineering challenge. 

`Slime` acts as a bridge between high-level RL algorithms and low-level distributed systems (Megatron/Ray). Today’s digest shows the project tackling the exact bottlenecks that plague the industry: optimizing actor concurrency during rollout generation, resolving memory-offloading crashes, and avoiding redundant log-probability computations. By lowering the hardware and engineering barriers to train 30B+ MoE models, `slime` represents a critical piece of infrastructure for democratizing advanced post-training research.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-10

## 1. Today's Highlights
- **No new releases** cut in the last 24 hours.
- **Qwen 3.5 pains surfaced quickly**: Two fresh issues (#1317, #1319) report abnormally high VRAM and Megatron compatibility errors when switching to Qwen3.5, suggesting the new model's architecture (MTP layers, embedding sizing) isn't yet fully accounted for in AReaL's memory planner.
- **Inference stack hardening dominates PR activity**: Three merged PRs from @garrett4wade refactor router session pinning, remove redundant capacity-grant logic, and add connection pooling with retry decorators—collectively tightening the HTTP serving layer.
- **Community interest in multimodal & scale-up features**: Long-running PRs for VLM multi-turn training (#931), Qwen-Omni support (#957), and rollout scale-up (#592) saw renewed activity.

## 2. Releases
**None.** No new tags or releases were published.

## 3. Important Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#1292](https://github.com/inclusionAI/AReaL/issues/1292) | **FSDP engine: AdamW optimizer state created in bf16 instead of fp32** | 🟢 Open | Labeled `bug` + `good first issue`. FSDP's `AdamW` silently inherits the model's bf16 dtype for `exp_avg` / `exp_avg_sq`, causing convergence to plateau ~3× higher than DeepSpeed ZeRO-3 or Megatron. A clear correctness fix with low entry barrier. |
| [#1319](https://github.com/inclusionAI/AReaL/issues/1319) | **Qwen3.5 training: abnormally high VRAM (OOM on H100)** | 🟢 Open | Reports that `ref` model memory stays at peak (~50 GB per model) despite `offload_params: true`, suggesting offload may not execute for Qwen3.5-4B. Could indicate a model-size-dependent code path bug. |
| [#1317](https://github.com/inclusionAI/AReaL/issues/1317) | **Error training Qwen3.5 with Megatron** | 🟢 Open | Megatron-core 0.17 + mbridge 0.15.1 fails on Qwen3.5's MTP args (`mtp_num_layers: 1`). May require mbridge or Megatron config patches. |
| [#1028](https://github.com/inclusionAI/AReaL/issues/1028) | **Support LLaVA-OneVision-1.5 RL Training** | 🔴 Closed (stale) | Feature request for a strong open multimodal model. Closed after 2 months without a PR. Leaves a gap in AReaL's VLM coverage. |

## 4. Key PR Progress

### Merged (3)
| PR | Title | Impact |
|----|-------|--------|
| [#1320](https://github.com/inclusionAI/AReaL/pull/1320) | **Unify session pinning with model context** | Replaces bare-string worker lookups with model-aware routing, reducing the `/route` path from a 5-step cascade to a single unified flow. |
| [#1318](https://github.com/inclusionAI/AReaL/pull/1318) | **Remove redundant capacity grant from inference service** | Eliminates the `CapacityManager` middle layer; the controller's `StalenessManager` already enforces concurrency + staleness. Cleaner control plane. |
| [#1315](https://github.com/inclusionAI/AReaL/pull/1315) | **Improve HTTP client reliability, reduce log verbosity** | Adds shared `httpx` factory (4 k max connections, 3 transport retries), plus `async_http_retry` decorators across gateway/router/workflow. |

### Open & Noteworthy
| PR | Title | Significance |
|----|-------|--------------|
| [#1313](https://github.com/inclusionAI/AReaL/pull/1313) | **Nightly CI: real gsm8k GRPO training jobs** | Replaces dummy tests with actual FSDP/Megatron/Archon training runs in Docker, rotating backend by day-of-year. Major CI quality leap. |
| [#1316](https://github.com/inclusionAI/AReaL/pull/1316) | **Kubernetes scheduler via StatefulSets** | Adds `KubernetesScheduler` with pod health diagnostics + rollback—critical for production cluster deployments. |
| [#592](https://github.com/inclusionAI/AReaL/pull/592) | **Rollout scale-up (dynamic engine addition)** | Moves AReaL from static to elastic resource allocation for rollouts; stale but still open. |
| [#931](https://github.com/inclusionAI/AReaL/pull/931) | **Multi-turn training with VLMs** | Extends agentic multi-turn RL from LLMs to Vision-Language Models. |
| [#1176](https://github.com/inclusionAI/AReaL/pull/1176) | **Speculative decoding via SGLang Eagle** | WIP to speed up rollouts, directly reducing the sampling wall-clock bottleneck in GRPO/PPO loops. |

### Stale / Closed
- [#955](https://github.com/inclusionAI/AReaL/pull/955) — Least-request rollout routing. Closed (stale), though the use-case (reducing long-tail blocking in multi-instance rollout) remains relevant.
- [#1028](https://github.com/inclusionAI/AReaL/issues/1028) — LLaVA-OneVision-1.5 support closed without implementation.

## 5. Why This Project Matters in Today's RL Landscape

AReaL (by inclusionAI/Ant Group) is positioning itself as a **full-stack, backend-agnostic RL training framework** for frontier LLMs and VLMs. Three signals from today's activity reinforce this:

1. **Backend breadth is a differentiator.** Issues reference FSDP, DeepSpeed ZeRO-3, Megatron, and an "Archon" backend in a single breath. The nightly CI PR (#1313) tests all of them. This matters because the RL community is fragmented across training backends, and AReaL is aiming to be the unifying layer.

2. **Inference-serving co-design.** The trio of merged router/serving PRs (#1315, #1318, #1320) shows the project treats rollout serving as a first-class component, not an afterthought. Connection pooling, staleness-aware scheduling, and session-aware routing are exactly the plumbing needed for stable, high-throughput GRPO/PPO at scale.

3. **Adapting to new model families quickly is the current challenge.** The two Qwen3.5 issues (#1317, #1319) reveal that architectural changes (MTP layers, different embedding sizes) break assumptions in memory planning and Megatron config generation. How fast AReaL patches these will test its agility as a framework layer on top of rapidly evolving base models.

**Bottom line:** AReaL is maturing past the "single-GPU demo" phase into multi-backend, Kubernetes-deployable, inference-optimized RL infrastructure. The open question is whether it can keep pace with model-family churn (Qwen 3.5, LLaVA-OV 1.5, Qwen-Omni) fast enough to retain contributors.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (huggingface/trl) — 2026-05-10

## 1. Today's Highlights
- **v1.4.0 released**, featuring a chunked cross-entropy loss for SFT that cuts peak VRAM by up to 50%.
- **VRAM leak fixes** took center stage, with three PRs targeting `OffloadActivations` stale state across forward/backward passes.
- **Async GRPO** received attention: logits softcapping support for models like Gemma 2 and a bug report around unconditional `add_response_schema` calls.
- **CI/infra hardening**: `uv` installation migrated to a pinned GitHub Action, and DDP-2 added to the invariant test suite.

## 2. Releases

### [v1.4.0](https://github.com/huggingface/trl/pull/5732)
- **Chunked cross-entropy loss (`loss_type="chunked_nll"`)** for SFT: drastically reduces peak activation memory by processing the loss in chunks, enabling larger batch sizes or longer sequences on the same hardware.

## 3. Important Issues

| # | Title | Key Detail |
|---|-------|-----------|
| [#5742](https://github.com/huggingface/trl/issues/5742) | `[AsyncGRPO] add_response_schema not gated on self.tools` | `AsyncRolloutWorker` calls `add_response_schema` unconditionally (unlike `GRPOTrainer`), causing errors with tokenizers whose chat templates aren't in TRL's dispatch (Mistral, Gemma). |
| [#5741](https://github.com/huggingface/trl/issues/5741) | `Can gold_trainer support privileged context?` | Request to extend `GoldTrainer` (distillation) to support teacher models with privileged context, as in `sdft_trainer`. |

## 4. Key PR Progress

### VRAM / Memory Reliability
- **[#5738](https://github.com/huggingface/trl/pull/5738)** [OPEN] — Comprehensive cleanup of `OffloadActivations` mutable state (`tracker`, `fwd_stash`, `bwd_tensor_stash`, etc.) to prevent cross-step VRAM leaks.
- **[#5737](https://github.com/huggingface/trl/pull/5737)** [CLOSED] — Earlier attempt at the same `OffloadActivations` state reset issue; superseded by #5738.
- **[#5730](https://github.com/huggingface/trl/pull/5730)** [CLOSED] — Fix for CUDA memory leak via BNB dequantization buffer release and stale state cleanup.

### Async GRPO
- **[#5691](https://github.com/huggingface/trl/pull/5691)** [OPEN] — Adds `final_logits_softcapping` support (Gemma 2–style) in the async GRPO chunked log-prob path. Fixes [#5692](https://github.com/huggingface/trl/issues/5692).

### Training Correctness
- **[#5731](https://github.com/huggingface/trl/pull/5731)** [CLOSED] — Fixes `GKDTrainer` producing wrong loss when `use_liger_kernel=True`: `LigerFusedLinearJSDLoss` defaulted to equal hard/soft weighting (0.5/0.5), silently diverging from the reference objective.

### Docs & Quickstart
- **[#5740](https://github.com/huggingface/trl/pull/5740)** [OPEN] — Aligns GRPO quickstart docs to `Qwen2.5` and adds an OOM troubleshooting tab.

### Test Infrastructure
- **[#5736](https://github.com/huggingface/trl/pull/5736)** [OPEN] — Extends invariant test suite to cover 2-GPU DDP for SFT and DPO equivalence classes.
- **[#5735](https://github.com/huggingface/trl/pull/5735)** [OPEN] — Replaces `curl | sh` uv install with `astral-sh/setup-uv@v8` across CI workflows (pinned, cached, no pipe-shell).

### Tiny Model Alignment (testing fidelity)
- **[#5739](https://github.com/huggingface/trl/pull/5739)** [OPEN] — Aligns tiny `Qwen2.5-VL` with `Qwen2.5-VL-3B-Instruct`.
- **[#5706](https://github.com/huggingface/trl/pull/5706)** [OPEN] — Aligns tiny Cohere config with `aya-expanse-8b` (`logit_scale`, `vocab_size`).
- **[#5707](https://github.com/huggingface/trl/pull/5707)** [OPEN] — Aligns tiny Cohere2 config with `tiny-aya-earth`.
- **[#5638](https://github.com/huggingface/trl/pull/5638)** [OPEN] — Aligns tiny `Glm4MoeForCausalLM` with GLM-4.5 reference.

### API Cleanup
- **[#5717](https://github.com/huggingface/trl/pull/5717)** [OPEN] — Removes deprecated `torch_dtype` in favor of `dtype`. Medium risk (may break downstream scripts still using the old kwarg).

## 5. Why This Project Matters in Today's RL Landscape

TRL remains the **de facto open-source library for post-training and alignment** of large language models. Today's activity highlights three strategic priorities:

1. **VRAM is the bottleneck.** The v1.4.0 chunked NLL loss and the flurry of `OffloadActivations` fixes reflect that the community is pushing against GPU memory walls—making GRPO and SFT viable on consumer-grade hardware.

2. **Asynchronous rollouts are maturing.** Async GRPO is getting production-quality attention (softcapping, schema gating bugs), signaling that decoupled, scalable rollout generation is becoming a first-class feature rather than an experiment.

3. **Test infrastructure is deepening.** DDP invariant tests, tiny-model config alignment across a growing family of architectures (Qwen2.5-VL, Cohere2, GLM-4.5 MoE), and CI hardening show the project investing in **reliability at scale**—critical as enterprise adoption grows.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Open-Source Daily Digest: Tianshou
**Date:** 2026-05-10  
**Project:** [thu-ml/tianshou](https://github.com/thu-ml/tianshou)

### 1. Today's Highlights
Tianshou is seeing renewed activity focused on its next major iteration (Tianshou v3). The community and maintainers are actively consolidating past architectural discussions—specifically regarding API modernization, the Gymnasium v1.0 update, and resolving ambiguous terminology. Additionally, a crucial numerical stability patch was recently merged to align NPG's behavior with PPO.

### 2. Releases
* **No new releases** recorded in the last 24 hours. The library continues to iterate toward its next major milestone (v3), as tracked in the [Tianshou Roadmap Milestone](https://github.com/thu-ml/tianshou/milestone/1).

### 3. Important Issues
* **Roadmap Revival for v3:** A new issue was opened today ([#1299](https://github.com/thu-ml/tianshou/issues/1299)) by `opcode81` to re-evaluate previously closed tickets for the upcoming Tianshou v3 release.
* **Long-Term Architectural Planning:** Several major, high-impact discussions were updated today, indicating ongoing background work for the next major release:
  * **[Major] Tianshou Roadmap** ([#1215](https://github.com/thu-ml/tianshou/issues/1215)): Tracking the path to a "mature and stable" library release.
  * **Gymnasium v1.0.0a1 Compatibility** ([#1053](https://github.com/thu-ml/tianshou/issues/1053)): Addressing breaking changes required to support the latest Gymnasium alpha release.
  * **Trainer/Algorithm Separation** ([#1034](https://github.com/thu-ml/tianshou/issues/1034)): A major design request to refactor policy classes and clearly decouple the training loop from the algorithm logic.

### 4. Key PR Progress
* **API Consistency (`state_shape` to `obs_shape`):** PR [#1292](https://github.com/thu-ml/tianshou/pull/1292) (linked to Issue [#1036](https://github.com/thu-ml/tianshou/issues/1036)) was updated. It successfully resolves confusing terminology where `state_shape` was previously used to denote observation shape, aligning the API with standard `obs` conventions used in `Batch` instances and modern Gymnasium environments. 
* **Numerical Stability in NPG:** PR [#1298](https://github.com/thu-ml/tianshou/pull/1298) closed after addressing a division-by-zero bug in NPG (`_preprocess_batch`). The fix adds an epsilon guard to advantage normalization (matching the existing safety mechanism in PPO), preventing `NaN` losses when batch advantages have a standard deviation of zero.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a highly modular, PyTorch-based benchmark in the reinforcement learning ecosystem. Today's digest highlights a project actively maturing: maintainers are doing the necessary "dirty work" of refactoring complex APIs (decoupling trainers from algorithms), fixing edge-case numerical bugs (NPG stability), and aligning with modern standard libraries (Gymnasium v1.0). This strict emphasis on architectural clarity and robustness is exactly what keeps an RL framework relevant and production-ready for researchers and engineers navigating an increasingly complex PyTorch RL landscape.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl-project/verl
**Date:** 2026-05-10 | **Issues Updated:** 13 | **PRs Updated:** 32 | **New Releases:** 0

## 1. Today's Highlights
The verl ecosystem experienced high activity focused on **multi-turn agent rollouts**, **Ascend NPU hardware compatibility**, and stability for the **Qwen 3.5 model series**. Key architectural shifts include the introduction of an experimental agent gateway runtime and the deprecation of legacy tool implementations.

## 2. Releases
**No new releases** were cut in the last 24 hours. Development remains focused on merging feature branches and stabilizing recent additions for the next version bump.

## 3. Important Issues
*   **Hardware & Training Bottlenecks on Ascend:** Users are consistently reporting performance and compute issues on Ascend hardware. A critical issue highlights extremely slow `update_actor` times (~800s/step) when training Qwen3-4B with FSDP2 on 8× Ascend 910B ([#6010](https://github.com/verl-project/verl/issues/6010)).
*   **Qwen 3.5 Stability:** The integration of Qwen 3.5 models is triggering multiple low-level bugs, including crashes with Ulysses Sequence Parallelism + FlashAttention varlen due to memory access and shape mismatch errors ([#6284](https://github.com/verl-project/verl/issues/6284)). Additionally, FSDP wrap policies are failing on Qwen 3.5's partially resolved `_no_split_modules` ([#6289](https://github.com/verl-project/verl/issues/6289)).
*   **Distillation Bug:** Disabling `use_remove_padding` causes a missing `distillation_losses` key due to skipped top-k processing ([#6293](https://github.com/verl-project/verl/issues/6293)).

## 4. Key PR Progress
*   **New Agent Framework Merged:** The most notable merge today is the experimental agent framework and gateway runtime for multi-turn agent-style rollouts ([#5931](https://github.com/verl-project/verl/pull/5931), superseded by updates in [#6299](https://github.com/verl-project/verl/pull/6299)). This allows asynchronous, multi-turn tool interactions.
*   **Multi-Trajectory Rollouts:** To support complex agent loops, a new feature was introduced to score multiple output trajectories in a single rollout in the fully-async pipeline ([#6271](https://github.com/verl-project/verl/pull/6271), [#6228](https://github.com/verl-project/verl/pull/6228)).
*   **Ascend NPU Ecosystem Expansion:** Several PRs aim to smooth the Ascend NPU experience, including adding Ascend "skills" for automated environment setup ([#6301](https://github.com/verl-project/verl/pull/6301)), doc refactoring ([#6298](https://github.com/verl-project/verl/pull/6298)), and veomni engine script bumps for Qwen3 models on NPUs ([#6297](https://github.com/verl-project/verl/pull/6297)).
*   **Tool Ecosystem Refactor:** A significant PR removed 5 dormant tool implementations and migrated tool initialization logic from `ToolAgentLoop` directly into `AgentLoopWorker`, dropping deprecated MCP tool support ([#6300](https://github.com/verl-project/verl/pull/6300), [#6302](https://github.com/verl-project/verl/pull/6302)).
*   **CI Velocity:** The CI pipeline is being upgraded to use `uv` to replace standard `pip install` for faster dependency resolution ([#6295](https://github.com/verl-project/verl/pull/6295)).

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) scale towards complex, multi-turn agentic workflows, verl is positioning itself as a highly distributed, hardware-agnostic execution engine. By explicitly supporting alternative accelerators like Ascend NPUs and pioneering asynchronous multi-turn agent rollouts via a dedicated gateway runtime, verl provides the open-source community with a scalable alternative to proprietary post-training infrastructure, crucial for training the next generation of reasoning and tool-calling models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-05-10
**Focus:** [Open Instruct (allenai/open-instruct)](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity on the AllenAI Open Instruct repository over the past 24 hours was light regarding releases and issue filings. However, a highly targeted community contribution was submitted to fix a data preprocessing pipeline bug that impacts how training datasets are mixed and loaded. 

## 2. Releases
No new releases were recorded on 2026-05-10.

## 3. Important Issues
No new or updated issues were filed in the last 24 hours. 

## 4. Key PR Progress
*   **[#1674 Fix combine_dataset asserting splits count before list-to-dict conversion](https://github.com/allenai/open-instruct/pull/1674)** 
    *   **Author:** Chessing234 | **Status:** Open | **Created:** 2026-05-09
    *   **Summary:** This PR addresses a preprocessing bug in the `combine_dataset` utility. The function accepts `dataset_mixer` parameters as either a dictionary or a list (e.g., `['d1', '0.5', 'd2', '0.5']`). Currently, the code validates the number of splits *before* converting the list into a dictionary. This PR correctly reorders the execution logic, ensuring list-to-dict conversion occurs prior to the splits count assertion, thereby preventing false error throws during data loading.

## 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning from Human Feedback (RLHF) and post-training workflows, model performance is deeply intertwined with the quality and composition of the underlying training data. Utilities like `combine_dataset` are critical infrastructure for RL researchers, allowing them to precisely weight and interleave various preference datasets. Fixing bugs in these foundational data loaders—such as the one identified in [PR #1674](https://github.com/allenai/open-instruct/pull/1674)—ensures that the RL open-source community can seamlessly conduct reproducible ablation studies and multi-domain alignment training runs without stumbling on silent data pipeline failures.

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

### RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-05-10
**Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

---

#### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours was minimal, with zero new issues opened and zero new releases. However, a single, highly significant Pull Request saw renewed activity today. The focus remains on expanding the library's structural capabilities, specifically advancing its graph representation APIs to accommodate more complex, real-world RL environments. 

#### 2. Releases
*   **No new releases** recorded in the last 24 hours.

#### 3. Important Issues
*   **Zero new or updated issues** in the last 24 hours. The issue tracker remains quiet, suggesting a period of stability or ongoing background development.

#### 4. Key PR Progress
*   **[#1514 Update Graph to accept arbitrary node and edge spaces](https://github.com/Farama-Foundation/Gymnasium/pull/1514)**
    *   **Author:** 2ToTheNthPower
    *   **Status:** Open (Updated: 2026-05-09)
    *   **Summary:** This PR significantly upgrades Gymnasium's native `Graph` space. By allowing nodes and edges to accept arbitrary `Dict` and `Tuple` spaces, the PR lays the groundwork for representing heterogeneous graphs. This is crucial for environments requiring named feature dictionaries or varying data types. The author notes that future updates will be required to support `Text`, `Sequence`, and nested `Graph` spaces.

#### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for environment interaction in reinforcement learning, Gymnasium's roadmap dictates how researchers design and interact with new RL algorithms. PR #1514 is a prime example of keeping the library aligned with modern AI trends. While traditional RL heavily relies on grid, box, or discrete spaces, cutting-edge research—particularly in combinatorial optimization, multi-agent systems, and neural network routing—relies heavily on **complex, heterogeneous graphs**. By officially supporting dictionary-based node/edge features, Gymnasium is removing a major friction point for researchers, eliminating the need to write custom environment wrappers for graph-based RL tasks.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>