# RL Open Source Daily Digest 2026-07-29

> Generated: 2026-07-28 22:19 UTC | Projects covered: 15

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
The July 29, 2026 snapshot reveals a Reinforcement Learning (RL) ecosystem sharply divided between two frontiers: **Large Language Model (LLM) alignment** and **high-performance traditional control/MARL**. 

The LLM RLHF/GRPO stack is dominated by intense infrastructure engineering. Frameworks like `verl`, `TRL`, and `AReaL` are aggressively tackling the "trainer-to-rollout" bottleneck, focusing on synchronizing weights across distributed training backends (Megatron/FSDP) and high-throughput inference engines (vLLM/SGLang). Meanwhile, classical RL environments and algorithms (`Gymnasium`, `CleanRL`, `rl_games`) are in a maintenance and stabilization phase, absorbing breaking API changes (e.g., Gymnasium 1.0 autoreset behaviors) to ensure mathematical correctness in massively parallelized simulations.

## Activity Comparison
Development velocity is highly concentrated. `verl` commands the highest velocity for LLM infrastructure, while `TRL` leads in feature expansion for multimodal and async RL. 

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 5 | 10 | 0 | Intense focus on MoE scaling, NPU hardware support, and RDMA weight sync. |
| **TRL** | 4 | 8 | 1 (v1.9.2) | Expanding VLM support to AsyncGRPO; patching vLLM 0.26.0 compatibility. |
| **ROCK** | 1 | 4 | 0 | Finalizing secure sandbox backends (OpenSandbox) for agentic RL execution. |
| **AReaL** | 2 | 3 | 0 | Decoupling train/infer pipeline parallelism; advancing deterministic sampling. |
| **CleanRL** | 1 | 3 | 0 | Fixing critical environment API breaks (Gymnasium 1.0) and JAX pins. |
| **Open Instruct**| 0 | 3 | 0 | Pushing memory efficiency (tiled GRPO) and Qwen3-MoE live weight syncing. |
| **Gymnasium** | 0 | 2 | 0 | Formalizing vector environment benchmarking and throughput guardrails. |
| **PettingZoo** | 1 | 1 | 0 | Architectural shift: migrating wrappers natively to core, deprecating SuperSuit. |
| **rl_games** | 0 | 1 | 0 | Masking autoreset garbage data in PPO pipelines to ensure training correctness. |
| **slime** | 1 | 0 | 0 | Stalled by hard-to-debug NCCL/CUDA routing errors on multi-GPU clusters. |
| *Others* | *0* | *0* | *0* | *No activity: OpenRLHF, ROLL, Stable Baselines3, Tianshou, torchtune.* |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Mixture-of-Experts (MoE) Adaptability:** MoE is firmly the default architecture for frontier models, forcing frameworks to fundamentally rethink memory management and tensor routing. Projects are actively building Expert Parallelism (EP) support and sharded delta exports (`verl`, `Open Instruct`).
*   **Algorithmic Consolidation:** The proliferation of RLHF algorithms is driving codebase unification. `Open Instruct` is refactoring DPPO to share GRPO's underlying masking machinery, while `TRL` is standardizing normalizers across DAPO/CISPO/GRPO variants.
*   **Multimodal and Agentic RL:** The transition from text-only to Vision-Language Models (VLM) in RL is concrete, with `TRL` fixing multi-image misalignment in GRPO. For action-driven agents, safe execution is maturing, evidenced by `ROCK` integrating gVisor/Kata-level isolation via OpenSandbox.

**Engineering & Infrastructure Signals**
*   **Eradicating the Trainer-Rollout Latency Tax:** The most dominant engineering theme is bypassing NCCL for weight synchronization. `verl` is pioneering P2P checkpointing via Mooncake RDMA and IPC weight syncing, while `AReaL` is allowing decoupled pipeline parallelism (PP) sizes between Megatron and vLLM.
*   **Memory-Bound Compute Hacks:** To fit massive RL workflows into constrained VRAM, projects are deploying memory-efficient techniques. `Open Instruct` introduced tiled GRPO lm-head loss, while `verl` is skipping non-local experts during MoE reloads.
*   **Correctness in Autoreset Pipelines:** As simulation environments scale via vectorization, handling terminal states has become a critical bug class. Both `rl_games` and `CleanRL` are actively patching data poisoning caused by Gymnasium 1.0's `SAME_STEP` autoreset behaviors.

## Differentiation Analysis
*   **Vendor-agnostic vs. Ecosystem-bound:** `verl` is aggressively expanding its hardware footprint, optimizing for Huawei Ascend NPUs alongside standard GPUs. In contrast, `TRL` and `Open Instruct` remain deeply entangled with the HuggingFace/vLLM ecosystem, focusing on API stabilization for specific transformer versions.
*   **Abstraction vs. Readability:** In the traditional RL space, `Gymnasium` and `rl_games` represent the highly abstracted, black-box production standard. `CleanRL` actively differentiates itself by maintaining single-file, highly readable implementations that require direct interaction with environment API churn, making it more susceptible to dependency breaking changes.
*   **Orchestration Strategies:** `ROCK` and `AReaL` represent two different approaches to massive RL scale. `ROCK` is focusing on secure, isolated execution (lifecycle management via sandboxes), whereas `AReaL` is hyper-focused on asynchronous pipeline resilience (e.g., masking incomplete rollout groups to prevent pipeline stalls).

## Community Momentum & Maturity
*   **Frontier RLHF Scaling (`verl`, `TRL`):** These communities are experiencing massive momentum, characterized by heavy PR traffic. However, they are hitting the limits of distributed systems reliability, evidenced by `verl` users reporting FSDP memory leaks and multi-turn generation hangs, and `slime` users hitting hard NCCL routing walls.
*   **Foundational RL Maturation (`Gymnasium`, `PettingZoo`):** These projects show signs of high maturity, focusing on long-term architectural health rather than rapid feature iteration. `PettingZoo`’s intentional deprecation of `SuperSuit` in favor of native wrappers mirrors a broader ecosystem trend toward consolidating dependencies to reduce onboarding friction.
*   **Stalled vs. Active Projects:** A noticeable portion of the traditional RL ecosystem (`Stable Baselines3`, `Tianshou`, `torchtune`) saw zero activity, suggesting that open-source momentum and venture/research focus have almost entirely pivoted to the LLM/MoE RLHF stack.

## Trend Signals
*   **Inference-Training Decoupling:** The industry is moving away from monolithic RL training loops. Expect to see P2P RDMA and IPC to become standard protocols for pushing weight updates from Megatron to vLLM/SGLang without bottlenecking GPUs.
*   **VRAM-Aligned Algorithm Design:** The tight coupling of algorithmic design and hardware constraints is evident. Techniques like "tiled GRPO" signal a future where RL algorithms will be designed specifically to avoid materializing full logits to fit within 80GB VRAM limits.
*   **Simulation API Churn Stabilizing:** The transition from OpenAI Gym to Farama Gymnasium is finally reaching equilibrium. The current patches to autoreset mechanics in `rl_games` and `CleanRL` signal that the foundational API for vectorized, massively parallel environments is locking in, allowing researchers to rely on its mathematical correctness.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for alibaba/ROCK.

### 1. Today's Highlights
* **OpenSandbox Backend Reaches Milestone:** The integration of OpenSandbox as a highly-isolated backend operator for ROCK has officially concluded its core development phase, with the tracking issue closed today.
* **CI & Performance Focus:** Today’s activity is heavily skewed towards testing and infrastructure scaling, specifically through the addition of TypeScript SDK integration tests and optimizing garbage collection via bounded concurrency.
* **Release Cadence:** No new version releases were recorded today.

### 2. Releases
* **None.** (No new tags or releases published in the last 24 hours).

### 3. Important Issues
* **[#1202 [CLOSED] [FEATURE] 新增 OpenSandboxOperator](https://github.com/alibaba/ROCK/issues/1202)** | *Author: zpzjzj*
  * **Context:** This issue proposed integrating OpenSandbox (a production-grade Agent sandbox runtime) as a new backend for ROCK, sitting alongside existing `ray` and `k8s` operators. 
  * **Resolution:** Closed on 2026-07-28. By delegating lifecycle management, command execution, and file operations to OpenSandbox (utilizing gVisor/Kata for strong isolation), ROCK significantly upgrades its capability to safely execute RL agents in untrusted or highly-contained environments. 

### 4. Key PR Progress
* **Backend Integration Finalized:**
  * **[#1301 [CLOSED] feat(opensandbox): complete admin integration](https://github.com/alibaba/ROCK/pull/1301)**: The final piece of the OpenSandbox integration. It successfully implements logic to bypass the default Ray/Rocklet worker scheduler when OpenSandbox is selected, and introduces a real Admin lifespan startup regression test.
* **Infrastructure & CI Testing:**
  * **[#1305 [OPEN] feat(ts-sdk): add CI integration test](https://github.com/alibaba/ROCK/pull/1305)** & **[#1302 [CLOSED]](https://github.com/alibaba/ROCK/pull/1302)**: Active engineering effort to robustly test the TypeScript SDK pipeline. Additionally, older PR [#876](https://github.com/alibaba/ROCK/pull/876) (from April) was finally closed, indicating a cleanup of legacy testing branches.
* **Performance Optimization:**
  * **[#1303 [OPEN]](https://github.com/alibaba/ROCK/pull/1303) & [#1304 [OPEN]](https://github.com/alibaba/ROCK/pull/1304) perf: run auto-delete with bounded concurrency**: Both target issue #1263, aiming to optimize ROCK's garbage collection (auto-deletion of old runs/resources) by applying bounded concurrency, preventing resource exhaustion during massive RL workload scaling.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning increasingly intersects with LLM agents and autonomous coding tools, **infrastructure isolation and safe execution** have become critical bottlenecks. By integrating Apache 2.0 OpenSandbox (featuring gVisor/Kata-level isolation), ROCK is positioning itself as a premier, secure orchestration framework for RL workflows. It allows researchers and engineers to safely scale RL tasks involving code execution or tool-use without compromising the host system. Furthermore, today's focus on bounded concurrency for auto-deletion highlights ROCK's maturity—it is actively building the scaling safeguards required for the massive data throughput typical of modern, distributed RLHF and Agentic training pipelines.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

**RL Ecosystem Daily Digest: THUDM/slime**
**Date:** 2026-07-29

Here is the daily analytical breakdown of the `slime` (THUDM/slime) repository activity.

### 1. Today's Highlights
Activity in the `slime` repository over the past 24 hours has been strictly maintenance and troubleshooting-focused. There were zero structural updates to the codebase (no new PRs or releases). The sole activity is a continuation of troubleshooting on a critical, long-running distributed training issue reported by the community.

### 2. Releases
*   **Status:** No new releases.
*   The repository has published **0** new versions in the last 24 hours. 

### 3. Important Issues
The only notable activity revolves around distributed hardware communication errors, a common pain point in large-scale RLHF/RL training:

*   **Issue [#1305](https://github.com/THUDM/slime/issues/1305): `ncclUnhandledCudaError: Call to CUDA function failed. Cuda failure 999 'unknown error'`**
    *   **Author:** Ita-sp
    *   **Status:** OPEN (Updated: 2026-07-28 | Comments: 6)
    *   **Summary:** A user attempting to run the official Qwen3-30B-A3B example script on an 8xH800 GPU cluster experiences hard crashes (CUDA error 999) via `torch.distributed` NCCL backend after fewer than 10 training steps. This error typically indicates low-level NCCL routing problems, PCIe/NVLink topology mismatches, or host-container CUDA isolation issues when spinning up large parameter models across multiple nodes/GPUs.

### 4. Key PR Progress
*   **Status:** No active PRs.
*   There are **0** pull requests currently open or updated. The core engineering team appears to be in a holding or post-release stabilization phase, with no new community contributions merged today.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—where aligning massive Mixture-of-Experts (MoE) models like Qwen3 requires immense compute—frameworks like `slime` are critical infrastructure. Issue #1305 perfectly highlights the exact bottleneck the industry faces today: the algorithmic theory of large-scale RLHF is outpacing the hardware/distributed systems reliability. 

When training 30B+ parameter models on high-end 8xH800 setups, engineers spend a disproportionate amount of time debugging low-level NCCL and PyTorch distributed errors rather than optimizing reward models or PPO hyperparameters. `slime` remains a vital project to watch because it provides the exact scripts and abstractions needed to run these frontier models, but the ecosystem desperately needs better default fault-tolerance for distributed multi-GPU communication.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

### 📊 RL Open-Source Daily Digest: AReaL (2026-07-29)

**1. Today's Highlights**
- **Hybrid Engine Flexibility:** A critical bottleneck preventing mismatched pipeline-parallel (PP) sizes between Megatron (training) and vLLM (rollout) backends has been resolved (Issue #1560, PR #1564).
- **Async Pipeline Refinement:** New logic (PR #1563) has been introduced to gracefully handle incomplete or unusable rollout groups without wasting compute on retries.
- **Advancing Reproducibility:** Continued momentum on plumbing per-request deterministic sampling seeds through the SGLang backend infrastructure (Issue #1523, PR #1524).

**2. Releases**
- **No new releases** in the last 24 hours.

**3. Important Issues**
- **[CLOSED] #1560: [BUG] Megatron–vLLM weight sync incorrectly requires matching pipeline-parallel sizes**
  - **Impact:** High. Resolves a critical architectural constraint that aborted experiments when training PP sizes differed from inference PP sizes (e.g., `megatron:d1p4t2` combined with `vllm:d1p2t4`).
- **[OPEN] #1523: [Feature] Keyed (replayable) rollout sampling, plumb SGLang's per-request `sampling_seed`**
  - **Impact:** Medium. Proposes an opt-in mechanism for deterministic, replayable rollouts by exposing SGLang's `sampling_seed` via the `GenerationHyperparameters` API. Essential for rigorous debugging and exact reproduction of RL trajectories.

**4. Key PR Progress**
- **[CLOSED] #1564: fix(engine): gate per-PP weight sync on SGLang backend**
  - Directly resolves Issue #1560. The PR successfully removes the hard equality check (`train_pp_size == gen_pp_size`) that previously aborted the weight-update-group initialization, allowing true decoupled parallelism strategies between training and generation.
- **[OPEN] #1563: feat(rollout): mask untrainable incomplete groups**
  - Optimizes the fully-decoupled async design. Instead of duplicating or retrying incomplete grouped rollout slots, this PR treats them as `None`. It preserves ragged prompt boundaries through reward and advantage normalization, maximizing hardware utilization by keeping usable siblings.
- **[OPEN] #1524: feat(sglang): plumb per-request sampling_seed for replayable sampling**
  - The engineering counterpart to Issue #1523. Adds default-off flags (`sampling_seed` and `enable_deterministic_inference`) forwarded into the request builders for both v1 (`SGLangBackend`) and v2 (`SGLangBridgeBackend`).

**5. Why This Project Matters in Today's RL Landscape**
Modern large-scale RL—especially for reasoning models—demands massive compute orchestration, typically relying on fully decoupled, asynchronous training and inference loops. AReaL sits at the critical intersection of distributed training (Megatron) and high-throughput inference (vLLM, SGLang). 

Today's updates highlight exactly why this architecture is necessary: 
1) **Decoupled Scaling:** By allowing training and inference engines to utilize independent parallelism strategies (e.g., different Pipeline Parallel sizes), practitioners can maximize GPU utilization without bottlenecking the rollout engine.
2) **Ragged Asynchronous Resilience:** The ability to gracefully mask incomplete rollout groups prevents pipeline stalls in asynchronous environments.
3) **Debuggability at Scale:** Deterministic, replayable inference seeds are foundational for debugging complex RLHF/PPO reward signals, ensuring AReaL remains an enterprise-grade framework for reproducible AI research.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# 📊 TRL Ecosystem Daily Digest (2026-07-29)

## 1. Today's Highlights
* **New Release:** TRL [v1.9.2](https://github.com/huggingface/trl/releases) dropped, bringing critical compatibility fixes for `bitsandbytes` 0.50.0 and NemotronH kernels.
* **vLLM 0.26.0 Support:** A major push across three separate PRs to integrate vLLM 0.26.0 without breaking TRL's experimental async GRPO weight transfer paths.
* **Vision-Language Models (VLMs) in the Spotlight:** Heavy focus on fixing multi-image misalignment in standard GRPO and expanding VLM support into `AsyncGRPO`. 
* **Tooling & Metrics:** Proposals to add Quantization-Aware Training (QAT) and MoE expert usage metrics, alongside an effort to optimize SFT logging overhead.

## 2. Releases
* **[v1.9.2](https://github.com/huggingface/trl/pull/6558):** A patch release featuring:
  * Reversion of the `xfail` marker for NemotronH GRPO/RLOO tests, as upstream kernel bugs in `transformers` are now fixed.
  * Fixes for `test_peft_with_quantization` tests to ensure compatibility with `bitsandbytes` 0.50.0.

## 3. Important Issues
* **[Issue #6567](https://github.com/huggingface/trl/issues/6567): Explore QAT support:** Maintainers are evaluating the addition of Quantization-Aware Training (fake-quant during forward passes) to move beyond standard post-training quantization (QLoRA).
* **[Issue #6561](https://github.com/huggingface/trl/issues/6561): Add support for vLLM 0.26.0:** Version upper-bounds need bumping, requiring careful checks against vLLM's new stateful RLHF weight transfer abstractions.
* **[Issue #6548](https://github.com/huggingface/trl/issues/6548): Silent NaN loss in SimPO:** A truncation bug in the experimental `CPOTrainer` where using the longer response length causes empty completions and subsequent `NaN` losses for `loss_type="simpo"`.
* **[Issue #6441](https://github.com/huggingface/trl/issues/6441): DPO `apo_down` bug:** `DPOTrainer` has been found to inconsistently apply `f_divergence_type` across its two loss terms.

## 4. Key PR Progress
* **VLM & GRPO Enhancements:**
  * **[PR #6570](https://github.com/huggingface/trl/pull/6570):** Fixes a critical VLM bug in GRPO/RLOO where multi-image batches without grid metadata misaligned images and samples (e.g., LLaVA, Idefics).
  * **[PR #6515](https://github.com/huggingface/trl/pull/6515):** Brings end-to-end Vision-Language Model support to the experimental `AsyncGRPOTrainer`.
  * **[PR #5890](https://github.com/huggingface/trl/pull/5890):** Standardizes the dapo/cispo/vespo loss normalizers between Liger and non-Liger GRPO paths to ensure accurate gradient accumulation.
* **Performance & Overhead Fixes:**
  * **[PR #6571](https://github.com/huggingface/trl/pull/6571):** Adds the ability to skip expensive entropy and mean token accuracy computations in `SFTTrainer` by disabling full-logit materialization.
  * **[PR #6564](https://github.com/huggingface/trl/pull/6564):** Optimizes `AsyncGRPO` remote sandbox shutdown by closing orphan-sandbox sessions concurrently rather than sequentially.
* **Experiment Tracking & Diagnostics:**
  * **[PR #6568](https://github.com/huggingface/trl/pull/6568):** Fixes W&B logging by allowing per-step completion tables, preventing GRPO/RLOO/PPO from overwriting previous RL completion logs.
  * **[PR #6514](https://github.com/huggingface/trl/pull/6514):** Introduces opt-in, evaluation-only MoE expert usage metrics to `SFTTrainer`.

## 5. Why This Project Matters in Today's RL Landscape
The Reinforcement Learning ecosystem is rapidly shifting from text-only PPO to complex, multimodal, and tool-using paradigms. TRL’s daily development trajectory perfectly encapsulates this transition. The integration of asynchronous GRPO with remote sandboxing (`AsyncGRPOTrainer`) and the aggressive pursuit of robust Vision-Language Model support demonstrate TRL's focus on scaling RLHF/RLAIF beyond standard text boundaries. Furthermore, by addressing compute bottlenecks (e.g., Liger kernel normalizations, skipping full-logit materialization) and tracking vLLM's breaking changes, TRL remains the most critical open-source bridge between cutting-edge RL research and production-ready, distributed model training.

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

Here is the RL daily digest for `verl` based on the provided GitHub data.

# 📊 verl RL Ecosystem Daily Digest (2026-07-29)

## 1. Today's Highlights
- **Active Development:** `verl` showed high velocity over the last 24 hours with **22 issues updated** and **33 PRs updated**.
- **Focus Areas:** The community and core devs are heavily focused on **weight synchronization efficiency** (especially for SGLang/vLLM rollouts), **MoE (Mixture of Experts) support** across different backends, and **Ascend NPU compatibility**. 
- **Bug Bashing:** Several critical hang/deadlock issues during generation and PPO sampling were reported and addressed.

## 2. Releases
- **New Releases:** None. 

## 3. Important Issues
Developers are actively reporting structural bugs and bottlenecks in distributed RL training:
*   **Critical Memory Leak in FSDP:** Issue [#7166](https://github.com/verl-project/verl/issues/7166) reports that `FSDPEngineWithLMHead.forward_step` stores `model_output` undetached, pinning autograd graphs across micro-batches and causing a multi-GB memory leak.
*   **Training & Rollout Hangs:** Users continue to report intermittent deadlocks in multi-turn and async settings. Issue [#7155](https://github.com/verl-project/verl/issues/7155) flags an infinite `while True` loop in `ReplayBuffer.sample()` during sync PPO, while issue [#7180](https://github.com/verl-project/verl/issues/7180) notes random hangs during rollout generation.
*   **Algorithm Reproducibility:** Issue [#4719](https://github.com/verl-project/verl/issues/4719) highlights an inability to reproduce `easyr1` training curves under identical parameters, while issue [#4710](https://github.com/verl-project/verl/issues/4710) points out significant `grad_norm` discrepancies between FSDP and Megatron backends.
*   **Feature Request - Speculative Decoding:** Issue [#4791](https://github.com/verl-project/verl/issues/4791) proposes a combination of Suffix Decoding and LSTM draft models to accelerate token generation.

## 4. Key PR Progress
Today's PRs demonstrate a massive push towards optimizing large-scale MoE training and rollout engine synchronization:

*   **Next-Gen Weight Sync:** 
    *   PR [#7108](https://github.com/verl-project/verl/pull/7108) introduces a P2P checkpoint engine using Mooncake RDMA to push Megatron weights directly to SGLang, bypassing NCCL.
    *   PR [#7179](https://github.com/verl-project/verl/pull/7179) and [#7136](https://github.com/verl-project/verl/pull/7136) clean up IPC weight sync and fix FP8 weight resync for vLLM 0.20.x.
*   **MoE & Expert Parallelism:**
    *   PR [#7143](https://github.com/verl-project/verl/pull/7143) optimizes GPU memory by skipping non-local experts before vLLM MoE reload cloning.
    *   PR [#7181](https://github.com/verl-project/verl/pull/7181) and [#7085](https://github.com/verl-project/verl/pull/7085) bring EP-aware sharded delta export to Megatron-Bridge and veomni.
*   **Sequence Packing:** PR [#7135](https://github.com/verl-project/verl/pull/7135) adds packed `cu_seqlens` support to the Megatron backend, enabling proper attention boundaries for THUD/remove-padding forwards.
*   **Hardware Ecosystem (Ascend NPU):** PR [#7134](https://github.com/verl-project/verl/pull/7134) makes NPU availability checks robust for hybrid Ray clusters (CPU head + NPU workers), and PR [#7105](https://github.com/verl-project/verl/pull/7105) adds mstx profiler support for Ascend.

## 5. Why This Project Matters in Today's RL Landscape
As post-training (especially RLHF/GRPO) becomes the primary bottleneck for advancing LLM reasoning, `verl` is cementing itself as a critical, hardware-agnostic orchestration layer. Today's commit activity perfectly illustrates the frontier challenges of RL scaling: 
1. **Orchestrating Heterogeneous Inference:** The sheer volume of PRs related to `vLLM` and `SGLang` weight synchronization (via IPC, RDMA, and P2P) shows that `verl` is actively solving the "trainer-to-rollout" latency tax.
2. **Native MoE Scaling:** By heavily iterating on Expert Parallelism (EP) and sharded deltas, `verl` ensures that RL workflows can efficiently scale to modern MoE architectures without memory blowouts. 
3. **Hardware Agility:** Deep integration with non-NVIDIA hardware (like Huawei Ascend NPUs) proves `verl` is positioning itself as a universal, vendor-agnostic standard for large-scale RL research and production.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: Open Instruct
**Date:** 2026-07-29

### 1. Today's Highlights
Activity in the last 24 hours focused heavily on architectural scalability and memory efficiency for Reinforcement Learning from Human Feedback (RLHF). Key updates include a major CUDA stack upgrade enabling Qwen3-MoE training, a memory-efficient tiled loss computation for GRPO, and a refactored, mathematically robust approach to DPPO.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Important Issues
No issues were updated or opened in the last 24 hours, indicating a stable backlog or a current focus on code contributions over bug reporting.

### 4. Key PR Progress
Three open PRs saw updates today, pushing the boundaries of memory management and MoE support in RL pipelines:

*   **[PR #1791](https://github.com/allenai/open-instruct/pull/1791) Add Qwen3-MoE training and live weight synchronization support**
    *   **Author:** undfined
    *   **Summary:** Upgrades the core CUDA stack to PyTorch 2.11, Transformers 5.5.3, and vLLM 0.25.1. Crucially, it introduces Qwen3-Mixture-of-Experts (MoE) weight export, expanding fused expert tensors into vLLM-compatible gate, up, and down projections, alongside live weight syncing.
*   **[PR #1785](https://github.com/allenai/open-instruct/pull/1785) Add tiled GRPO lm-head loss**
    *   **Author:** farhatkevin
    *   **Summary:** Rebased onto current `main`, this PR introduces an opt-in, memory-efficient tiled computation for the Group Relative Policy Optimization (GRPO) language model head loss. This is critical for fitting large-scale RL workflows into constrained GPU environments.
*   **[PR #1790](https://github.com/allenai/open-instruct/pull/1790) WIP: Add DPPO via the unified rho-divergence masking paradigm + refactor APIs**
    *   **Author:** undfined
    *   **Summary:** Implements Distributional Policy Preference Optimization (DPPO) by leveraging the existing GRPO ratio, correction, and masking machinery. This avoids trainer-specific loss paths, resulting in a more composable, explicit, and numerically robust API.

### 5. Why This Project Matters in Today's RL Landscape
As RLHF and Preference Fine-Tuning become the default for aligning frontier Large Language Models, memory bottlenecks and framework incompatibilities remain the biggest blockers for open-source researchers. 

Today's PR progress in Open Instruct directly addresses these systemic bottlenecks:
1.  **Hardware Efficiency:** The tiled GRPO lm-head loss ([#1785](https://github.com/allenai/open-instruct/pull/1785)) democratizes RL training by allowing researchers to compute complex policy gradients with a significantly smaller VRAM footprint.
2.  **MoE Adaptability:** By solving live weight synchronization and tensor expansion for Qwen3-MoE ([#1791](https://github.com/allenai/open-instruct/pull/1791)), the project ensures that state-of-the-art sparse architectures can be seamlessly integrated into modern RL pipelines (like vLLM) without requiring custom inference hacks.
3.  **Algorithmic Consolidation:** Refactoring DPPO to share GRPO's underlying masking machinery ([#1790](https://github.com/allenai/open-instruct/pull/1790)) matures the codebase. It moves away from fragmented, trainer-specific loss paths toward a unified, numerically robust API—an essential step as the ecosystem multiplies the number of RL alignment algorithms.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

Here is your RL open-source ecosystem daily digest for CleanRL.

### 1. Today's Highlights
Activity in the CleanRL repository over the last 24 hours is entirely focused on **maintenance, dependency resolution, and compatibility with the broader Gymnasium ecosystem**. There were no new releases or newly created issues, but maintainers and contributors are actively addressing friction points with Gymnasium $\geq$ 1.0 (MuJoCo v5) autoreset behaviors, vectorized environment action spaces, and outdated JAX dependency pins.

### 2. Releases
*   **No new releases** in the last 24 hours. 
*   *Analyst Note:* The current dependency issues being debated in the PRs (specifically regarding JAX and Gymnasium) will likely need to be merged and stabilized before a new versioned tag is cut.

### 3. Important Issues
*   **[OPEN] Misleading TensorBoard Command** ([Issue #568](https://github.com/vwxyzjn/cleanrl/issues/568))
    *   **Author:** `itsmartinoliver`
    *   **Summary:** A documentation bug in the README. The instructions for launching TensorBoard (`tensorboard --logdir runs`) incorrectly imply that the `runs` directory is located inside `cleanrl/cleanrl/`, when it is actually located at the root `cleanrl/` directory. Although created on July 27, it remains unresolved and un-commented on.

### 4. Key PR Progress
Three pull requests saw updates today, focusing heavily on compatibility and environment plumbing:

*   **[OPEN] Fix KeyError on Gymnasium final_obs for off-policy scripts** ([PR #567](https://github.com/vwxyzjn/cleanrl/pull/567))
    *   **Author:** `Fstarnb`
    *   **Summary:** Critical compatibility fix for off-policy algorithms (like DQN, DDPG, SAC, TD3). Gymnasium $\geq$ 1.0 (required for MuJoCo v5) uses `SAME_STEP` autoreset, which shifted terminal observation data from `infos["final_observation"]` to `infos["final_obs"]`. Without this, off-policy scripts utilizing newer Gymnasium versions will crash.
*   **[CLOSED] Fix DDPG vectorized action space shape** ([PR #538](https://github.com/vwxyzjn/cleanrl/pull/538))
    *   **Author:** `Mr-Neutr0n`
    *   **Summary:** Resolves a shape mismatch bug in DDPG where `envs.action_space` was being used instead of `envs.single_action_space` during network construction. This caused incorrect tensor dimensions when utilizing vectorized environments. 
*   **[OPEN] Refresh JAX extra dependency pins** ([PR #554](https://github.com/vwxyzjn/cleanrl/pull/554))
    *   **Author:** `Mr-Neutr0n`
    *   **Summary:** Unblocks JAX-based CI pipelines. The previous rigid pins (e.g., `jaxlib==0.4.7`) no longer resolve on package indexes, completely breaking installation and testing. This PR updates the JAX/Flax/Optax/Chex stack to compatible modern versions.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL occupies a crucial niche in the RL ecosystem by providing **high-quality, single-file, highly readable implementations** of standard algorithms (PPO, SAC, DQN, etc.). Unlike heavily abstracted "black box" libraries (like Stable-Baselines3 or RLlib), CleanRL is the go-to standard for researchers and engineers who need to quickly audit, modify, and understand the mathematical mechanics of an algorithm without navigating a labyrinth of boilerplate code.

However, today's digest highlights CleanRL's primary ecosystem vulnerability: **API churn in foundational dependencies**. Because RL algorithm implementations interact directly with environment stepping logic (unlike higher-level wrappers), projects like CleanRL bear the brunt of breaking changes when libraries like Gymnasium update their core mechanics (e.g., autoreset behaviors) or when strict deep learning pins (like JAX) fall out of index support. The active maintenance seen in today's PRs is vital to keeping the RL research community unblocked.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# 🤖 RL Ecosystem Daily Digest: `rl_games`
**Date:** 2026-07-29  
**Repository:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

## 1. Today's Highlights
Activity in the last 24 hours was exclusively focused on core algorithmic maintenance, with no new issues, comments, or releases. The sole update is the continued technical review of a critical PPO data-pipeline fix ([PR #362](https://github.com/Denys88/rl_games/pull/362)), which was updated yesterday. 

## 2. Releases
**None.** 
There have been no new tags or releases pushed to the repository in the last 24 hours.

## 3. Important Issues
**None.** 
Zero new issues were reported or updated in the trailing 24-hour window, indicating a period of stable usage or a shift of user troubleshooting to other channels.

## 4. Key PR Progress
- **[OPEN] [PR #362: PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization](https://github.com/Denys88/rl_games/pull/362)** by `ViktorM`
  - **Status:** Updated on 2026-07-28 (active iteration).
  - **Technical Focus:** This PR addresses a subtle but impactful data leakage/corruption bug in vectorized environments using `next_step-autoreset` (e.g., Envpool, native Gymnasium 1.x). Currently, the "reset step" (which contains filler rewards, ignored actions, and terminal observations from the previous episode) is being incorrectly ingested into PPO rollouts as valid training data.
  - **Solution:** The PR implements masking for these garbage rows, completing the PPO side of an ongoing autoreset correctness initiative (the SAC counterpart was handled in commit `b1ed755`). Additionally, it introduces scalar sigma parameterization for policy exploration.

## 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a gold standard for high-performance, GPU-accelerated Proximal Policy Optimization (PPO) implementations. It is the foundational library behind numerous state-of-the-art results in continuous control and character animation (e.g., Isaac Gym/Lab locomotion tasks). 

The progress in [PR #362](https://github.com/Denys88/rl_games/pull/362) highlights the exact kind of ecosystem maintenance required as RL infrastructure scales. As the community shifts heavily towards massively parallel, auto-resetting environments like Envpool and Gymnasium 1.x vector APIs to maximize GPU throughput, ensuring strict mathematical correctness in rollout trajectories is critical. Unmasking autoreset boundary states can silently poison value estimates and policy gradients, leading to brittle convergence—a subtle bug class that this PR systematically eliminates.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-29
**Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours has been exclusively focused on expanding performance testing and benchmarking infrastructure. Contributor Kallinteris-Andreas drove today's updates, pushing forward on tooling critical for environment throughput analysis.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **No issues** were created or updated in the last 24 hours. The issue tracker remains quiet.

### 4. Key PR Progress
Development momentum is currently concentrated on performance testing utilities, specifically regarding step and initialization benchmarks.

*   **[PR #1651](https://github.com/Farama-Foundation/Gymnasium/pull/1651): Add tests for performance utilities** *(Updated 2026-07-28)*
    *   **Author:** Kallinteris-Andreas
    *   **Summary:** Introduces deterministic tests for existing performance utilities, specifically `benchmark_step`, `benchmark_init`, and `benchmark_render`. The PR explicitly notes the code was partially generated via LLM ("GPT slop"), but provides vital guardrails to prevent regressions in throughput counting, seed propagation, and helper call counts.
*   **[PR #1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640): Add vector environment step benchmark** *(Updated 2026-28)*
    *   **Author:** Kallinteris-Andreas
    *   **Summary:** Adds a new `benchmark_step_vector` function to measure individual vector-environment steps per second. This utility was practically validated during MuJoCo MJX environment testing and successfully passes standard `ruff` linting/formatting checks.

### 5. Why This Project Matters in Today's RL Landscape
In the modern RL landscape, training compute is heavily bottlenecked by environment stepping. As the community shifts toward massively parallel simulation (e.g., MJX, Isaac Gym, Jax), the overhead of standard environment APIs becomes a critical performance factor. 

Gymnasium remains the gold-standard API for single and vectorized environment interactions. By formalizing vector benchmarking ([PR #1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640)) and rigorously testing these benchmarking utilities ([PR #1651](https://github.com/Farama-Foundation/Gymnasium/pull/1651)), the maintainers are ensuring that future API updates will not silently introduce step-throughput regressions, keeping the library aligned with the high-performance demands of contemporary RL research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-29

### 1. Today's Highlights
Activity in the PettingZoo repository over the last 24 hours has been focused on routine maintenance and ongoing architectural refactoring. The ecosystem is currently stable, with no new releases, but active preparation is underway to consolidate environment wrappers directly into the core library. 

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **[OPEN] #1365: Migration to `pettingzoo.wrappers`** 
    *   **Author:** jkterry1 | **Comments:** 6
    *   **Summary:** The core maintainers are initiating a major architectural shift. Currently relying on the external `supersuit` package for environment wrappers, the goal is to refactor these directly into `pettingzoo.wrappers` (mirroring the standard `gymnasium.wrappers` architecture). Once ported, `supersuit` will be deprecated. The maintainers are actively requesting community contributions, asking for individual PRs per wrapper to execute this migration securely.
    *   **Link:** [Farama-Foundation/PettingZoo Issue #1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)

### 4. Key PR Progress
*   **[OPEN] #1408: Bump `ray` from 2.55.0 to 2.56.0 in `/tutorials/Ray`**
    *   **Author:** dependabot[bot]
    *   **Summary:** Automated dependency management keeping the distributed computing tutorials current. Dependabot has successfully issued a pull request to bump the `ray` library minor version in the pip group, ensuring that PettingZoo's distributed multi-agent tutorials remain compatible with the latest Ray RLlib updates.
    *   **Link:** [Farama-Foundation/PettingZoo PR #1408](https://github.com/Farama-Foundation/PettingZoo/pull/1408)

### 5. Why This Project Matters in Today's RL Landscape
As the Farama Foundation's standard API for multi-agent reinforcement learning (MARL), PettingZoo serves as the foundational layer for modern, cooperative/competitive agent training. The architectural decision highlighted in Issue #1365 to deprecate `SuperSuit` in favor of native `pettingzoo.wrappers` is highly significant. By aligning its wrapper API with single-agent Gymnasium standards, PettingZoo is drastically reducing the onboarding friction for researchers. Consolidating the ecosystem reduces dependency bloat and bridges the gap between single-agent and multi-agent development pipelines, a crucial step as the RL landscape shifts heavily toward complex, multi-agent LLM and robotics simulations in 2026.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>