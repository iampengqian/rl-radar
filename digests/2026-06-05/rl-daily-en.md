# RL Open Source Daily Digest 2026-06-05

> Generated: 2026-06-04 22:27 UTC | Projects covered: 15

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
The June 5, 2026, daily digest reveals a starkly bifurcated Reinforcement Learning (RL) open-source ecosystem. The vast majority of architectural momentum is concentrated on post-training infrastructure for Large Language Models (LLMs) and Vision-Language Models (VLMs), driven by the immense compute demands of GRPO, PPO, and RLHF. Meanwhile, classical and foundational RL libraries remain largely dormant, with activity strictly limited to routine maintenance or high-level conceptual discussions (e.g., robotic safety layers). 

The day's development was entirely dominated by heavy engineering commits across LLM alignment frameworks (TRL, verl, slime, AReaL, Open Instruct) and orchestration layers (ROCK, ROLL), with zero new version releases cut across the entire tracked ecosystem.

## Activity Comparison

*Note: The following projects recorded zero activity in the last 24 hours: OpenRLHF, PettingZoo, Stable Baselines3, Tianshou, and torchtune.*

| Project | Issues | PRs | Releases | Signal |
|---|:---:|:---:|:---:|---|
| **TRL** | 11 (4 closed) | 26 (4 closed) | 0 | Mainstream LLM alignment; aggressive push into async infra and VLM support. |
| **verl** | 4 | 10 | 0 | Hardware fragmentation and auto-parallelization for massive MoE models. |
| **slime** | 4 | 10 | 0 | Distributed memory optimization and FLOPs-aware batching for Megatron. |
| **AReaL** | 0 | 10 | 0 | Kubernetes-native operations, custom optimizers, and multi-backend support. |
| **ROCK** | 4 | 5 | 0 | Stabilizing sandbox environments and optimizing CLI/Dataset APIs. |
| **Open Instruct** | 0 | 4 | 0 | Resolving critical distributed PG deadlocks and memory-optimized SFT. |
| **ROLL** | 0 | 3 | 0 | Expanding CI pipelines for Huawei Ascend NPUs. |
| **CleanRL** | 0 | 2 | 0 | Essential maintenance: fixing JAX pins and vectorized env shapes. |
| **Gymnasium** | 1 (closed) | 0 | 0 | Conceptual discussion on bridging robot intent languages with `step()`. |
| **rl_games** | 1 | 0 | 0 | Theoretical discussion on sim-to-real safety envelopes. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Advanced Post-Training Algorithms:** The ecosystem is iterating heavily beyond standard RLHF. TRL introduced A\*PO (Optimal Advantage Regression) for LLM reasoning, while Open Instruct and verl are actively patching GRPO for modern frontier models.
*   **Multimodal & Agentic Workloads:** text-to-text RL is no longer sufficient. TRL expanded VLM support to DPO and KTO, slime is tackling tool-calling (ReTool) OOMs, and AReaL integrated the OpenClaw agent runtime for complex benchmarks.
*   **Memory-Efficient Compute:** To avoid OOM errors on massive vocabularies, projects are converging on fused compute. Open Instruct adopted Liger's Fused Linear Cross Entropy, while AReaL implemented custom Triton kernels for similar memory savings.

**Engineering & Infrastructure Signals**
*   **The Shift to Asynchronous Architectures:** Synchronous RL pipelines are a bottleneck. TRL and verl are heavily investing in decoupled, async rollout generation and weight syncing (integrating native vLLM and SGLang APIs) to prevent GPU idling.
*   **Hardware Fragmentation:** Reliance on NVIDIA CUDA is fading. verl introduced Intel XPU support and AMD ROCm roadmaps; ROLL integrated Ascend NPU CI pipelines; and AReaL ensures multi-backend flexibility (FSDP2, Megatron).
*   **Production Orchestration:** RL is moving from notebooks to enterprise clusters. AReaL introduced a Kubernetes scheduler, while ROCK stabilized Kubernetes and Ray sandbox operators for ephemeral compute tasks.

## Differentiation Analysis

*   **The HuggingFace Standard (TRL):** TRL remains the most accessible and feature-rich alignment library. It differentiates itself by rapidly standardizing new algorithms (A\*PO) and modalities (VLMs) for the broader community, relying on the broader open-source community to solve extreme-scale distributed bottlenecks.
*   **Hyper-Scale Distributed RL (verl, slime, AReaL):** These three projects target teams training 100B+ parameter models. **verl** differentiates via its auto-parallelization search formulas and hardware vendor parity; **slime** focuses intensely on bridging Megatron-LM with SGLang for memory optimization; and **AReaL** stands out by wrapping these distributed backends in production-grade Kubernetes operators and custom optimizers (Muon).
*   **RL Infrastructure & Sandboxing (ROCK, ROLL):** Rather than training algorithms, these alibaba-backed projects focus on the execution layer. **ROCK** differentiates by providing robust multi-environment sandboxing (critical for agentic tool-use), while **ROLL** focuses on unifying heterogeneous hardware clusters.
*   **Foundational & Accessible RL (CleanRL, Open Instruct):** **CleanRL** serves pure educational and benchmarking needs via single-file implementations. **Open Instruct** serves a hybrid role, offering a highly stable, low-level training scaffolding for researchers experimenting with post-training techniques on OLMo and Qwen architectures.

## Community Momentum & Maturity
The LLM post-training ecosystem is exhibiting strong enterprise maturity. Projects like AReaL, verl, and ROCK show signs of corporate backing and structured engineering (formal roadmaps, K8s orchestration, CLI optimizations). Meanwhile, foundational libraries like Gymnasium, CleanRL, and rl_games are in stable maintenance phases; their community momentum has shifted from intense code commits to high-level architectural discussions about safety (URML) and standardization.

## Trend Signals
*   **Optimizers tailored for LLM RL:** The introduction of the Muon optimizer in AReaL signals that standard AdamW is no longer assumed to be optimal for distributed RL fine-tuning.
*   **Quadratic Batching:** slime's introduction of FLOPs-aware micro-batching (accounting for the $L^2$ attention cost) signals a trend toward dynamic, compute-aware resource allocation rather than naive token-count batching.
*   **Sovereign Compute Stacks:** The sudden influx of CI pipelines for Ascend NPUs, Intel GPUs, and AMD ROCm indicates that the global industry is urgently future-proofing RL infrastructure against geopolitical hardware constraints and GPU shortages.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for June 5, 2026, based on the ROLL repository activity.

### 1. Today's Highlights
ROLL (Rapid Open-source Online Learning) is actively expanding its hardware ecosystem and backend compatibility. Over the last 24 hours, the project saw three significant pull requests focused on integrating Huawei Ascend NPU CI pipelines and resolving environment variable conflicts in newer vLLM releases.

### 2. Releases
No new releases were recorded in the past 24 hours. The project remains on its current stable version as development focuses on backend enhancements and testing infrastructure.

### 3. Important Issues
No new issues or bug reports were opened or updated in the last 24 hours, indicating a stable current user base or a development focus shifting toward feature expansion and CI robustness.

### 4. Key PR Progress
*   **NPU CI and Runtime Compatibility** ([alibaba/ROLL PR #454](https://github.com/alibaba/ROLL/pull/454))
    Opened by *UsernameFull*, this PR introduces a new GitHub Actions workflow (`ci-npu-test.yml`) designed to execute CPU unit tests and NPU execution checks. It reflects ROLL's ongoing effort to validate distributed RL workloads on heterogeneous hardware beyond standard NVIDIA GPUs.
*   **Ascend MindSpeed & Megatron Support** ([alibaba/ROLL PR #456](https://github.com/alibaba/ROLL/pull/456))
    Opened by *shun001*, this PR builds upon previous NPU work (PR #380). It adds MindSpeed-based NPU initialization patches, fixes platform detection, updates optimizer/offload compatibility for Megatron, and handles NPU-specific attention masks. It also introduces a Qwen3 DPO Megatron example config.
*   **vLLM Ray Executor Env Var Fix** ([alibaba/ROLL PR #455](https://github.com/alibaba/ROLL/pull/455))
    Opened by *shun001*, this addresses breaking changes in newer vLLM versions. The code is updated to import `WORKER_SPECIFIC_ENV_VARS` from `vllm.v1.executor.ray_utils` (rather than `RayDistributedExecutor`) while maintaining backward compatibility for older vLLM deployments.

### 5. Why This Project Matters in Today's RL Landscape
In the modern RL ecosystem—particularly post-RLHF and DPO for LLMs—inference and training infrastructure must be highly scalable and hardware-agnostic. ROLL remains a critical project to watch because it bridges high-level RL abstractions with cutting-edge distributed execution frameworks (Ray, Megatron, vLLM). Today’s focus on **Ascend NPU compatibility** highlights a broader industry trend: teams are actively future-proofing their RLHF/DPO pipelines to run on alternative AI accelerators, moving away from absolute GPU dependency. Furthermore, actively patching vLLM compatibility ensures that ROLL maintains high-performance, distributed serving capabilities across rapidly iterating open-source LLM toolchains.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for ROCK (alibaba/ROCK) on 2026-06-05.

### 1. Today's Highlights
Activity over the last 24 hours was focused on infrastructure stability and CLI performance. The maintainers addressed a critical regression in the sandbox creation workflow caused by a recent `NonBlankStr` validation update. Additionally, there is active development to harden error handling across different compute operators (Ray and Kubernetes) and significantly optimize the dataset task fetching API. 

### 2. Releases
**None.** No new releases were cut in the past 24 hours.

### 3. Important Issues
*   **Sandbox Creation Regression (FIXED):** [Issue #1065](https://github.com/alibaba/ROCK/issues/1065) reported a critical 422 Unprocessable Entity error during sandbox creation. An earlier PR introduced `NonBlankStr` validation but missed passing the `sandbox_id` in the request body for internal Ray operator calls to rocklet `/execute` and `/read_file`.
*   **K8s Operator Error Leakage:** [Issue #1067](https://github.com/alibaba/ROCK/issues/1067) highlighted that `K8sOperator.get_status()` leaks raw K8s 404 `ApiException` errors to end-users when a CRD resource is deleted, rather than returning a clean "not found" API response.
*   **API Response Validation Mismatch:** [Issue #1057](https://github.com/alibaba/ROCK/issues/1057) uncovered a design flaw in the global `handle_exceptions` wrapper. Its default error payload structure bypasses FastAPI's strict Pydantic response model validation, causing unexpected API behavior.
*   **Datasets CLI Performance & UX:** [Issue #1063](https://github.com/alibaba/ROCK/issues/1063) proposed server-side pagination, `continuation_token` caching, and `--filter` support for `datasets tasks` to eliminate redundant backend HTTP sessions.

### 4. Key PR Progress
*   **Merged:** [PR #1066](https://github.com/alibaba/ROCK/pull/1066) Resolved the #1065 sandbox creation regression by ensuring `sandbox_id` is correctly passed in the body to `/execute` and `/read_file`.
*   **Open:** [PR #1068](https://github.com/alibaba/ROCK/pull/1068) Addresses K8s error leakage by catching 404 `ApiException` exceptions in `K8sOperator.get_status()`, bringing its error handling parity with the Ray operator.
*   **Merged:** [PR #1062](https://github.com/alibaba/ROCK/pull/1062) Fixed a crash in `RayOperator.get_status()` that occurred when checking the status of a stopped sandbox with a killed actor.
*   **Open:** [PR #1064](https://github.com/alibaba/ROCK/pull/1064) Implements the dataset optimizations from #1063, introducing `oss2.Bucket` caching (reducing `datasets list` execution time from 5.0s to 2.7s) and server-side pagination.
*   **Open:** [PR #1058](https://github.com/alibaba/ROCK/pull/1058) Refactors `handle_exceptions` to properly align error envelopes with endpoint-specific FastAPI response models.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning requires robust, multi-environment sandboxing to train and evaluate agents safely at scale. ROCK acts as a critical layer bridging RL compute with infrastructure orchestration (via Ray and Kubernetes). 

Today's updates reflect a maturing infrastructure: fixing edge cases in `RayOperator` and `K8sOperator` ensures that ephemeral training sandboxes are tracked reliably without crashing pipelines due to stale states or raw K8s errors. Furthermore, optimizing the CLI's dataset fetching time by nearly 50% shows a strong commitment to the developer experience for RL researchers who routinely iterate over massive datasets.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime — 2026-06-05

Here is today's technical digest for the **slime** (Scalable Language model reinforcement learning Infrastructure with Megatron) open-source ecosystem.

## 1. Today's Highlights
Activity on `THUDM/slime` remains highly focused on **scalability, memory optimization, and rollout infrastructure**. Today's development cycle features 10 active PRs, with a strong emphasis on optimizing PPO memory footprints, refining SGLang engine rollout management, and introducing FLOPs-aware micro-batching. User issues highlight growing adoption around tool-calling (ReTool) and multimodal (Qwen3-VL) workloads, alongside environment setup hurdles with `torch_memory_saver`.

## 2. Releases
**No new releases** were cut in the last 24 hours. The core maintainers appear to be actively merging infrastructure fixes and staging larger feature PRs (like the trajectory manager refactor) for a future release.

## 3. Important Issues
Developers are pushing the boundaries of multi-GPU setups, resulting in several notable environment and configuration discussions:
*   **ReTool OOM on H200s:** A user reported a critical `torch.OutOfMemoryError` (trying to allocate 58.15 GiB) during `compute_log_probs` when running the ReTool example on 4x H200 GPUs. This highlights the immense VRAM demands of long-context tool-calling trajectories. ([Issue #1951](https://github.com/THUDM/slime/issues/1951))
*   **VLM Adaptation Bottleneck:** Users are looking for official pathways to convert Vision-Language Models (like Qwen3-VL) into Megatron format, noting a current lack of VLM configuration parameters in `slime/scripts/models`. ([Issue #1863](https://github.com/THUDM/slime/issues/1863))
*   **Tool Parsing & Memory Saver Bugs:** New issues were opened regarding unsupported `qwen3` tool call parsers ([Issue #2019](https://github.com/THUDM/slime/issues/2019)) and build/hook-mode errors in `torch_memory_saver` via `build_conda.sh` ([Issue #2018](https://github.com/THUDM/slime/issues/2018)).

## 4. Key PR Progress
Significant engineering effort is being directed toward rollout execution and memory efficiency:
*   **`perf(ppo): reduce log-prob + entropy cross-entropy peak memory`** ([PR #2011](https://github.com/THUDM/slime/pull/2011)): A major memory optimization that fuses log-prob and entropy computation into a single autograd Function. It reduces peak memory by keeping one working copy of logits instead of two, while reusing Megatron's context for backward passes.
*   **`feat: add --balance-by-flops for FLOPs-balanced micro-batching`** ([PR #2017](https://github.com/THUDM/slime/pull/2017)): Introduces dynamic batching that accounts for the quadratic cost of attention (`coeff * L + L²`) rather than balancing strictly by token count.
*   **Rollout Infrastructure Fixes:** Two critical PRs by EazyReal address SGLang engine management. [PR #2015](https://github.com/THUDM/slime/pull/2015) fixes a race condition where memory was released before generation draining completed. [PR #2014](https://github.com/THUDM/slime/pull/2014) ensures sample filters are consistently applied to custom rollout functions.
*   **Refactoring and Reverts:** A large-scale "Refactor trajectory manager" PR is currently under review ([PR #2005](https://github.com/THUDM/slime/pull/2005)). Meanwhile, maintainers reverted a recent renaming of `rollout_ids` to `group_ids` due to internal tool conflicts ([PR #2013](https://github.com/THUDM/slime/pull/2013)).

## 5. Why This Project Matters in Today's RL Landscape
As LLMs scale past the 100B parameter mark, out-of-the-box RLHF libraries (like TRL) often hit distributed bottlenecks. **Slime** fills a critical gap in the modern RL landscape by bridging **Megatron-LM's tensor/pipeline parallelism** with high-throughput inference engines like **SGLang**. 

Today's digest perfectly illustrates the project's value proposition: the community is actively optimizing the exact pain points of large-scale distributed RL—managing activation memory during PPO loss computation, mitigating GPU idling via FLOPs-aware batch partitioning, and stabilizing asynchronous rollout engines. Furthermore, the early friction around Qwen3-VL and ReTool adaptation shows that the ecosystem is rapidly expanding beyond standard text-to-text RL into complex, agentic tool-use and multimodal reasoning.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL Daily Digest — 2026-06-05

## 1. Today's Highlights
Activity in the last 24 hours shows **0 new issues, 0 new releases, and 10 active pull requests**. The focus is squarely on training-backend performance and Kubernetes-scale operations: a Muon optimizer for distributed backends, fused Linear Cross Entropy for Megatron, disk-based LoRA sync, and a Kubernetes scheduler.

## 2. Releases
**None.** No new releases were published on 2026-06-05.

## 3. Important Issues
**None.** No issues were created or updated in the last 24 hours.

## 4. Key PR Progress

| Theme | PR | Highlights |
|---|---|---|
| **Agent Runtime** | [#1383](https://github.com/inclusionAI/AReaL/pull/1383) | Integrates **OpenClaw** as an `agent_service` runtime; spawns one gateway subprocess per RL session with unique per-episode keys (`sk-sess-*`). |
| **Optimizers** | [#1270](https://github.com/inclusionAI/AReaL/pull/1270) | Adds **Muon optimizer** (Momentum Orthogonalized by Newton-Schulz) with native distributed support on **FSDP2** and **Megatron** backends. |
| **LoRA & SGLang** | [#1233](https://github.com/inclusionAI/AReaL/pull/1233), [#1385](https://github.com/inclusionAI/AReaL/pull/1385) | Disk-based **LoRA incremental weight sync** for FSDP & SGLang (#1233); fixes stale adapter unload and offload bugs blocking single-GPU LoRA RL training (#1385). |
| **Megatron Performance** | [#1322](https://github.com/inclusionAI/AReaL/pull/1322), [#1384](https://github.com/inclusionAI/AReaL/pull/1384) | Fused **Linear Cross Entropy** kernel via Triton to avoid materializing full logits (#1322); adds **Qwen3.5 dense + MoE** support via megatron-bridge (#1384). |
| **Platform / Ops** | [#1375](https://github.com/inclusionAI/AReaL/pull/1375), [#1316](https://github.com/inclusionAI/AReaL/pull/1316) | v2 **microservice operator CLI** scaffold with four namespaces (#1375); **Kubernetes scheduler** using StatefulSet orchestration with health diagnostics (#1316). |
| **Benchmarks** | [#1175](https://github.com/inclusionAI/AReaL/pull/1175) | E2E inference benchmark with OpenClaw agent on **TAU²-bench**. |
| **Bug Fix** | [#1347](https://github.com/inclusionAI/AReaL/pull/1347) | Fixes silent `NaN` corruption in reward/advantage normalization from masked-out tokens. |

## 5. Why This Project Matters in Today's RL Landscape

AReaL is building the **systems layer that makes large-scale RL for LLMs actually run**. Today's PRs reflect three priorities that separate production RL frameworks from research toys:

1.  **Training efficiency at scale:** The Muon optimizer (#1270) and fused Linear Cross Entropy kernel (#1322) are not incremental tweaks—they directly target the memory and compute bottlenecks that appear when training on large vocab models across distributed backends.
2.  **Multi-backend flexibility:** By supporting **FSDP2, Megatron, and SGLang** (#1233, #1270, #1322) with features like disk-based LoRA sync, AReaL lets practitioners choose the right backend for their scale without rewriting their RL pipeline.
3.  **Kubernetes-native operations:** The K8s scheduler (#1316) and microservice CLI (#1375) signal that AReaL is designed for **deployment**, not just experimentation—critical as RLHF/RLAIF workflows move from notebooks to production clusters.

In a landscape where most RL tooling is still single-node or tightly coupled to one framework, AReaL's multi-backend, Kubernetes-ready approach positions it as a **foundational infrastructure choice** for teams doing RL on LLMs at scale.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-06-05  
**Activity:** 11 Issues (4 closed) | 26 PRs (4 closed) | 0 New Releases  

---

## 1. Today's Highlights
* **Next-Gen RL Infrastructure:** Significant progress on `AsyncGRPO` infrastructure, with new PRs focusing on native vLLM weight syncing, sparse delta weight patches, and optimizing `aiohttp` connection limits for high-throughput rollout generation.
* **Expanding Multimodal Support:** Major pushes to enable Vision-Language Models (VLMs) across preference tuning trainers, with new VLM support and Liger kernel integrations specifically targeting DPO ([#5943](https://github.com/huggingface/trl/pull/5943)) and KTO ([#5939](https://github.com/huggingface/trl/pull/5939)).
* **New Experimental Algorithms:** Introduction of **A\*PO** (Optimal Advantage Regression) as an experimental trainer, offering a new approach to KL-regularized RL for LLM reasoning.

---

## 2. Releases
* **No new releases** were published today. 

---

## 3. Important Issues
* **New Feature Request: A\*PO** ([#5935](https://github.com/huggingface/trl/issues/5935)): Opened by `raghulchandramouli`, proposing the integration of A\*PO (Accelerating RL for LLM Reasoning with Optimal Advantage Regression) for binary verifiable rewards. 
* **Silent Data Loss in Reward Modeling** ([#5539](https://github.com/huggingface/trl/issues/5539)): A notable bug where `DataCollatorForRewardModelingDataset` checks for the `"margin"` key only on `examples[0]`, causing margins to be silently dropped if the dataset is shuffled.
* **KL Divergence Spikes in GRPO** ([#2933](https://github.com/huggingface/trl/issues/2933)): An open enhancement request to allow specifying tokens/strings to be ignored in KL divergence calculations to prevent artificial metric spiking.
* **CI Minimum Version Regression** ([#5874](https://github.com/huggingface/trl/issues/5874)): CI pipelines are currently failing on minimum dependency versions due to `AssertionError: gradient mismatch on model.embed_tokens.weight`.

---

## 4. Key PR Progress

**Asynchronous GRPO & Infrastructure**
* **[#5937](https://github.com/huggingface/trl/pull/5937):** Implements sparse delta weight sync over an HF Bucket for `AsyncGRPO`, drastically reducing network overhead by only sending updated bf16 weights.
* **[#5892](https://github.com/huggingface/trl/pull/5892):** Wires `AsyncGRPO` to vLLM's native 4-phase RL weight-transfer API (introduced in vLLM `>=0.22.0`).
* **[#5911](https://github.com/huggingface/trl/pull/5911):** Fixes an efficiency bug where resuming `AsyncGRPO` from a checkpoint triggered completely unnecessary vLLM inference computations.
* **[#5946](https://github.com/huggingface/trl/pull/5946) / [#5861](https://github.com/huggingface/trl/pull/5861):** Scales the `aiohttp` connection limit to match `max_inflight_tasks` for heavy async rollout scheduling.

**Algorithm & Trainer Updates**
* **[#5940](https://github.com/huggingface/trl/pull/5940):** Lays the codebase groundwork for A\*PO ([Issue #5935](https://github.com/huggingface/trl/issues/5935)).
* **[#5790](https://github.com/huggingface/trl/pull/5790):** Adds `compute_metrics` support to `GRPOTrainer`, allowing users to pass custom evaluation metrics.
* **[#5883](https://github.com/huggingface/trl/pull/5883):** Refactors self-distillation trainers (SDPO) to align with the paper's convex combination loss calculation.

**Model Support & Alignment (VLMs & Chat Templates)**
* **[#5943](https://github.com/huggingface/trl/pull/5943) / [#5941](https://github.com/huggingface/trl/pull/5941):** Adds, then explicitly blocks, Liger kernel support for VLM datasets in DPO.
* **[#5939](https://github.com/huggingface/trl/pull/5939):** Extends VLM support to the `KTOTrainer` via a new unpaired vision preference data collator.
* **[#5942](https://github.com/huggingface/trl/pull/5942) / [#5944](https://github.com/huggingface/trl/pull/5944):** Introduces chat templates and SFT gradient checkpointing support for the new **Nemotron 3** family.

---

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to be the de facto open-source standard for aligning Large Language Models via Reinforcement Learning. Today's digest highlights a critical maturation point in the RLHF ecosystem: **infrastructure bottlenecking**. 

The rapid succession of PRs addressing `AsyncGRPO`—specifically sparse delta syncing ([#5937](https://github.com/huggingface/trl/pull/5937)) and native vLLM API integrations ([#5892](https://github.com/huggingface/trl/pull/5892))—shows that the community's focus has shifted beyond theoretical loss functions. State-of-the-art LLM reasoning (like DeepSeek-R1 or OpenAI o1) requires massive, distributed rollout generation. TRL is actively bridging the gap between isolated RL algorithms and distributed inference engines, ensuring that open-source practitioners can run high-throughput, GRPO-based reasoning workloads without hitting network or memory walls. Furthermore, the standardization of multimodal alignment (VLM support in DPO/KTO) solidifies TRL's position as a comprehensive, production-ready library for modern AI development.

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

# RL Open-Source Daily Digest: verl
**Date:** 2026-06-05

Here is the daily digest for the `volcengine/verl` project, tracking the latest advancements in the RLHF/GRPO training ecosystem.

## 1. Today's Highlights
The verl ecosystem saw a massive surge in cross-platform expansion and auto-parallelization features today. Key developments include a new analytical auto-parallelization utility for Megatron, initial Intel GPU (XPU) support, and continued heavy investment in Ascend NPU and AMD ROCm compatibility. Additionally, architectural improvements were proposed to decouple rollout weight syncing and log-probability computation.

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **FSDP2 CPU Offload Crash:** A critical bug ([#5995](https://github.com/verl-project/verl/issues/5995)) causing device mismatches during `update_weights` with FSDP2 CPUOffloadPolicy (non-LoRA) was officially closed after extensive debugging.
*   **Megatron Context Parallelism + MoE Bug:** Users reported gradient norm explosions when training MoE models with context parallelism (`CP > 1`) on the Megatron backend ([#6609](https://github.com/verl-project/verl/issues/6609)). 
*   **AMD/ROCm Roadmap Proposed:** A formal Q2/Q3 roadmap ([#6590](https://github.com/verl-project/verl/issues/6590)) was opened to close parity gaps for verl on AMD hardware, signaling a push for broader hardware vendor support.
*   **Ascend Community Tasks:** Tracking of the Ascend NPU open-source tasks was updated ([#6439](https://github.com/verl-project/verl/issues/6439)), inviting community contributions for FAPO training recipes using Megatron + vllm_ascend.

## 4. Key PR Progress
### Architecture & Performance
*   **Auto-Parallelization for Megatron:** PR [#6611](https://github.com/verl-project/verl/pull/6611) introduced an analytical auto-parallel search formula (TP/PP/CP/EP/DP) with memory gating to simplify Megatron-based PPO setup.
*   **Rack-Aware Placement:** PR [#6610](https://github.com/verl-project/verl/pull/6610) added rack-aware node placement heuristics for Ray resource pools, optimizing multi-node network traffic.
*   **Fully Async Decoupling:** PR [#5990](https://github.com/verl-project/verl/pull/5990) proposed a standalone `Model Engine Server` for the fully async pipeline, computing `old_log_probs` without saving/restoring actor weights.
*   **SkipManager Merged:** PR [#6097](https://github.com/verl-project/verl/pull/6097) was merged, introducing a unified managed skipping system to improve RL debugging efficiency.

### Hardware & Backend Expansion
*   **Intel GPU Support:** PR [#6607](https://github.com/verl-project/verl/pull/6607) added comprehensive support for Intel Arc/Battlemage GPUs, including Docker infra and GRPO/PPO/SFT workflows.
*   **Platform Abstraction Layer:** PR [#6086](https://github.com/verl-project/verl/pull/6086) moved towards a plugin-based engine system to natively support Cambricon MLU and Moore Threads MUSA.
*   **Ascend MXFP8 Fixes:** PR [#6591](https://github.com/verl-project/verl/pull/6591) fixed mxfp8 training context resets on Ascend NPUs.

### Model & Training Features
*   **DeepSeek-V4 SFT:** PR [#6603](https://github.com/verl-project/verl/pull/6603) added a GSM8K SFT example for DeepSeek-V4-Flash using the Megatron-Bridge backend.
*   **FSDP Buffer Sync Fix:** PR [#5801](https://github.com/verl-project/verl/pull/5801) fixed a critical mismatch where registered buffers were missed during FSDP-to-rollout weight syncing.
*   **Per-Sample Temperatures:** PR [#6110](https://github.com/verl-project/verl/pull/6110) updated fused linear cross-entropy to accept 1-D per-token temperature tensors, enabling distillation and mixed-data RL.

## 5. Why This Project Matters in Today's RL Landscape
As post-training techniques (GRPO, PPO, RLHF) become the dominant compute bottleneck for frontier model development, the RL infrastructure layer is undergoing rapid maturation. Today's verl activity highlights three macro-trends:
1.  **Hardware Fragmentation is Real:** With AMD ROCm roadmaps and Intel/Cambricon/Moore Threads PRs, the industry is urgently decoupling RL frameworks from pure NVIDIA/CUDA reliance to leverage diverse sovereign compute clusters.
2.  **The Shift to Async Architectures:** Decoupling rollout, training, and log-probability engines (seen in PR [#5990](https://github.com/verl-project/verl/pull/5990)) is critical for eliminating idle GPU time in large-scale distributed RL.
3.  **Next-Gen Model Adaptation:** The rapid addition of DeepSeek-V4 SFT ([#6603](https://github.com/verl-project/verl/pull/6603)) and fixes for MoE context parallelism ([#6609](https://github.com/verl-project/verl/issues/6609)) show that open-source RL ecosystems are aggressively keeping pace with the memory and compute demands of massive sparse Mixture-of-Experts models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-06-05
**Focus:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on Pull Requests (4 updated), with no new releases or active issues. The primary themes for today are deep infrastructure improvements: resolving critical distributed training deadlocks in Group Relative Policy Optimization (GRPO), expanding model architecture support to hybrid models, and introducing memory-optimized loss functions for SFT via Liger integration.

## 2. Releases
*   **None.** No new versions or tags were cut in the past 24 hours.

## 3. Important Issues
*   **None.** 0 issues were created or updated today. 

## 4. Key PR Progress
*   **[CLOSED] Fix GRPO OLMo-core bookkeeping PG deadlock:** [PR #1708](https://github.com/allenai/open-instruct/pull/1708) (Author: `finbarrtimings`)
    *   *Significance:* Resolves a high-impact distributed training bug where OLMo-core's `_log_metrics` skipped submission on empty metrics, causing a Process Group (PG) deadlock in GRPO training loops. Also includes parity tweaks for Qwen3.
*   **[OPEN] Expose olmo-core's `lm_head` loss_implementation:** [PR #1714](https://github.com/allenai/open-instruct/pull/1714) (Author: `ReinforcedKnowledge`)
    *   *Significance:* Introduces support for Liger's Fused Linear Cross Entropy (`fused_linear`). This is highly relevant for SFT workflows, as computing the loss directly inside the model's `lm_head` rather than externally drastically reduces peak GPU memory footprint.
*   **[OPEN] Hybrid Model Support in Olmo-core:** [PR #1713](https://github.com/allenai/open-instruct/pull/1713) (Author: `finbarrtimbers`)
    *   *Significance:* Paves the way for hybrid model architectures (likely merging attention mechanisms with state-space models or MoE layers) within the OLMo-core training framework. 
*   **[OPEN] Fix CSV header handling in `benchmark_generators`:** [PR #1684](https://github.com/allenai/open-instruct/pull/1684) (Author: `finbarrtimbers`)
    *   *Significance:* Engineering cleanup fixing duplicate/missing CSV headers in benchmarking scripts and migrating OS path interactions to modern `pathlib`. 

## 5. Why This Project Matters in Today's RL Landscape
While Open Instruct is widely recognized as a premier open-source library for Supervised Fine-Tuning (SFT) and Alignment, today's activity highlights its crucial role as an infrastructure backbone for advanced **Post-RL / RLHF training**. 

Projects like Qwen and OLMo are pushing the boundaries of post-training techniques like GRPO. However, scaling these RL algorithms efficiently requires surviving harsh distributed computing environments. By actively patching PG deadlocks ([PR #1708](https://github.com/allenai/open-instruct/pull/1708)) and adopting memory-saving techniques like Liger FLCE ([PR #1714](https://github.com/allenai/open-instruct/pull/1714)), Open Instruct provides the open-source community with the robust, low-level training scaffolding necessary to experiment with and deploy cutting-edge RL algorithms at scale without running into silent hangs or Out-Of-Memory (OOM) errors.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# RL Daily Digest: CleanRL
**Date:** 2026-06-05 | **Project:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

## 1. Today's Highlights
Activity over the last 24 hours was focused entirely on maintenance and bug-fixing, with two open Pull Requests receiving updates. A recurring contributor, Mr-Neutr0n, is driving efforts to fix critical environment shape mismatches in DDPG and resolve blocking CI issues related to deprecated JAX dependencies. No new issues or releases were published today.

## 2. Releases
**No new releases.**

## 3. Important Issues
**No new or updated issues in the last 24 hours.** 

## 4. Key PR Progress
*   **[#554 fix: refresh jax extra dependency pins](https://github.com/vwxyzjn/cleanrl/pull/554)** (Created & Updated: 2026-06-04)
    *   *Context:* The current `jax` extras are pinned to outdated versions (`jaxlib==0.4.7`), which no longer resolve on standard Python package indexes. This completely breaks continuous integration (CI) pipelines before JAX-based tests can even execute. 
    *   *Action:* This PR refreshes the dependency pins to modern, resolvable versions to unblock JAX development and testing.
*   **[#538 fix: use single_action_space in DDPG for vectorized envs](https://github.com/vwxyzjn/cleanrl/pull/538)** (Created: 2026-02-11 | Updated: 2026-06-04)
    *   *Context:* In vectorized environments, utilizing `envs.action_space` incorrectly batches action dimensions, resulting in malformed network architectures for DDPG.
    *   *Action:* Refactors the DDPG implementation to utilize `envs.single_action_space`, ensuring correct per-environment action dimensions are passed to the actor and critic networks.

## 5. Why This Project Matters in Today's RL Landscape
CleanRL fulfills a vital niche in the reinforcement learning ecosystem by providing high-quality, single-file, and "readable" implementations of complex RL algorithms. Unlike heavily modularized libraries that abstract away algorithmic mechanics, CleanRL is designed for research transparency, reproducibility, and learning. 

Today's PR updates highlight a common, ongoing challenge in the RL ecosystem: software dependency volatility. Fixing shape mismatches in vectorized environments (PR #538) and aggressively updating pinned deep learning frameworks like JAX (PR #554) are necessary maintenance tasks that prevent library bit-rot. By addressing these, CleanRL ensures that its educational and benchmark-grade implementations remain functional and reliable for both emerging researchers and production engineers.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

### RL Ecosystem Daily Digest: `rl_games`
**Date:** 2026-06-05

#### 1. Today's Highlights
Activity in the `rl_games` repository over the past 24 hours was minimal, consisting entirely of conceptual community discussions rather than code changes. No new releases were published, and no active pull requests were updated. The sole update was an exploratory issue regarding the integration of trained RL policies with an emerging open-source robot intent language.

#### 2. Releases
**No new releases.** 
There were no updates to the codebase or version tags in the last 24 hours.

#### 3. Important Issues
A single issue was created, introducing a high-level discussion regarding the deployment and safety validation of Isaac-based policies trained via `rl_games`.

*   **[#352 URML (open robot intent language): could a trained policy carry its capability envelope? a boundary check](https://github.com/Denys88/rl_games/issues/352)**
    *   **Author:** idoco2003
    *   **Summary:** The author introduces [URML (urml.dev)](http://urml.dev/), an Apache-2.0 licensed domain-specific language designed to validate robot intents against capability manifests and safety envelopes before dispatching actions. The issue poses a theoretical question: Can a trained `rl_games` policy inherently "carry" its capability envelope and boundary checks? This touches directly on the ongoing RL challenge of bridging high-performance sim-to-real locomotion/manipulation training with deterministic safety constraints in production environments.

#### 4. Key PR Progress
**No PR activity.** 
There are no open pull requests to report on for this period.

#### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a foundational, highly optimized library for training reinforcement learning agents, particularly known for its tight integration with NVIDIA's Isaac Sim/Gym ecosystem. While today's digest shows low volume in code commits, Issue #352 highlights a critical maturation step for the broader RL ecosystem: moving beyond mere reward-maximization toward certifiable, safe deployment. As sim-to-real transfer becomes standard for locomotion and manipulation, the ability for neural network policies to interface natively with safety envelope validators (like URML) will be crucial for deploying autonomous robots in human-centric environments.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-06-05 | **Focus:** Farama-Foundation/Gymnasium

### 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours was minimal, characterized by zero new pull requests and no active code development. The primary focus was on architectural discussions, specifically a recently closed proposal exploring how to bridge standard RL environment APIs with intent-based robotic control languages. 

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **[CLOSED] #1588: URML (Open Robot Intent Language) - Request for Comment**
    *   **Author:** idoco2003
    *   **Summary:** This issue proposed the integration of URML (`urml.dev`), an Apache-2.0 licensed language designed to translate natural language into typed robot intents. The core proposal suggested layering URML on top of the standard Gymnasium environment API to handle static validation against capability manifests and safety envelopes before dispatching actions. 
    *   **Analysis:** The issue was closed after a brief discussion. While the proposal is highly relevant to the ongoing industry trend of applying LLMs to robotics, it appears the maintainers concluded that URML operates as a high-level orchestration layer rather than a direct replacement or native component of the standard `step()` API. 
    *   **Link:** [Farama-Foundation/Gymnasium Issue #1588](https://github.com/Farama-Foundation/Gymnasium/issues/1588)

### 4. Key PR Progress
*   **No updates.** There were 0 pull requests updated, merged, or opened in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium has cemented its position as the de facto standard API for single-agent reinforcement learning in Python. Today's ecosystem is heavily shifting toward "Decision Making via Foundation Models" (such as Language-Actor RL). Because Gymnasium defines the standard `env.step(action)` interface, it serves as the critical bridge connecting novel high-level planners (like LLMs or intent languages such as URML) with low-level physics simulators and real-world robot drivers. Monitoring how external projects attempt to interface with Gymnasium provides a strong leading indicator of emerging architectural patterns in the broader Embodied AI space.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>