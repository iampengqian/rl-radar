# RL Open Source Daily Digest 2026-07-03

> Generated: 2026-07-02 22:19 UTC | Projects covered: 15

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
The July 3, 2026 digest reveals a stark bifurcation in the RL open-source ecosystem. Activity is heavily concentrated in two domains: **LLM/Hardware Infrastructure** (TRL, verl, slime, AReaL, ROCK) and **Foundational Algorithm Libraries** (Gymnasium, PettingZoo, rl_games). 

The LLM RL frameworks are battling severe systems-level bottlenecks, focusing their engineering efforts on asynchronous pipelines, disaggregated weight synchronization, and agentic sandboxes. Meanwhile, the traditional single and multi-agent RL libraries are focusing on core codebase modernization (e.g., NumPy 2.0 adoption, strict typing) and resolving edge cases in highly parallelized, auto-resetting environments.

## Activity Comparison
*Note: Groups with no activity (CleanRL, Open Instruct, OpenRLHF, ROLL, Stable Baselines3, torchtune) are omitted from the table to prioritize actionable signal.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **TRL** | 3 | 9 | 0 | Pivoting towards agentic RL (environment-owned rewards) and standardizing DPO/KTO trainers. |
| **verl** | 4 | 8 | 0 | Solving the RL rollout bottleneck via async log-prob servers and aggressive Huawei NPU hardware expansion. |
| **slime** | 2 | 4 | 0 | Pioneering cross-cluster, non-colocated training via P2P and disk-level delta weight synchronization. |
| **AReaL** | 1 | 6 | 0 | Stabilizing Megatron-Core v0.14+ distributed checkpointing and expanding next-gen MoE/VLM support. |
| **ROCK** | 2 | 5 | 0 | Hardening infrastructure for agentic RL via OpenSandbox integration and high-throughput event loops. |
| **Gymnasium** | 2 | 3 | 0 | Enforcing algorithmic integrity (proper PRNG seeding) and modernizing the stack (NumPy 2.0, Py 3.14). |
| **PettingZoo** | 1 | 1 | 0 | Upgrading MARL user experience (Hanabi rendering) and enforcing strict backend static analysis. |
| **rl_games** | 0 | 1 | 0 | Fixing silent training failures in SAC regarding vectorized environment auto-reset boundaries. |
| **Tianshou** | 1 | 0 | 0 | Dormant code cycle; focusing on documentation overhaul ahead of a major release. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals:**
*   **The Rise of Agentic RL & Tool Use:** There is a massive ecosystem push toward multi-step, tool-using agents. TRL is introducing environment-owned rewards and KTO tool-calling support, while slime is upgrading its SWE coding-agent runtime.
*   **On-Policy Distillation (OPD) & Teacher-Student RL:** To offset the massive compute costs of online generation, hybrid approaches are trending. verl introduced reverse-KL OPD with FSDP teachers, and TRL added Importance Weighted Optimized Policy Distillation (IW-OPD).
*   **MTP and Advanced Architecture Losses:** Frameworks are rapidly adapting to next-gen base model designs. slime fixed Multi-Token Prediction (MTP) loss logging, and TRL integrated Mixture-of-Experts (MoE) load-balancing auxiliary losses into DPO.

**Engineering & Infrastructure Signals:**
*   **Disaggregated & Async Weight Synchronization:** The "RL rollout bottleneck" is being attacked from multiple angles. verl decoupled actor weight updates using a standalone log prob server, AReaL fixed disk-mode weight updates for non-colocated SGLang rollouts, and slime introduced P2P shard broadcasting to bypass heavy NCCL `all_gather` operations.
*   **Hardware Diversification (Escaping NVIDIA Lock-in):** verl and AReaL showcased heavy development for alternative compute, specifically verl's custom Triton kernels and vLLM adaptations for Huawei Ascend NPUs.
*   **Sandbox Isolation & Control Plane Throughput:** For agentic code execution, ROCK integrated OpenSandbox (gVisor/Kata isolation) and optimized async I/O using `uvloop` and shared HTTPX clients to manage thousands of concurrent environments.

## Differentiation Analysis
*   **TRL vs. verl/slime/AReaL:** TRL continues to act as the bridge between cutting-edge research and accessible HuggingFace-style post-training. Conversely, verl, slime, and AReaL are battling as heavy-duty, hardware-agnostic orchestration layers optimized for massive, distributed frontier model clusters (e.g., Megatron-Core, FSDP2, Ascend NPUs).
*   **ROCK's Niche:** While TRL and verl focus on the model/training loop, ROCK is differentiating itself entirely as an infrastructure/control-plane layer, solving the exact sandbox execution and fault-tolerance problems generated by the agentic RL boom.
*   **Classical RL vs. LLM RL:** Libraries like Gymnasium, PettingZoo, and rl_games are untouched by the LLM/Megatron scaling wars. Their differentiation lies in algorithmic purity, vectorized environment mechanics, and low-level continuous control/discrete state spaces. 

## Community Momentum & Maturity
*   **Enterprise-Grade Maintenance:** Foundational libraries are aggressively modernizing. Gymnasium dropping NumPy 1.x and enforcing strict type hinting (resolving a 4-year-old issue) signals high maturity. PettingZoo is similarly tightening its `ruff` static analysis rules.
*   **Solving Silent Failures:** A hallmark of mature RL engineering is addressing "silent training failures." Both TRL (fixing a Liger Kernel + GRPO/PEFT conflict) and rl_games (fixing SAC bootstrap mechanics on truncated auto-resets) demonstrate deep, battle-tested community maintenance.
*   **Dormancy in Adjacent Projects:** Total silence from CleanRL, OpenRLHF, ROLL, Stable Baselines3, and torchtune indicates either stable release cycles or a consolidation of developer mindshare toward the heavily active LLM post-training frameworks.

## Trend Signals
1.  **Multi-Token Prediction (MTP) is becoming a standard RL target:** The need to explicitly log and train on MTP losses (as seen in slime) indicates that next-generation base models (e.g., Qwen3.6, Gemma 4) are shipping with native MTP architectures that RL frameworks must support.
2.  **Non-Colocated Training is the Future:** The intense focus on disk-level delta syncing, P2P weight transfers, and decoupled log-prob servers strongly signals that the industry is moving away from single-cluster, colocated training/inference setups toward globally distributed, asynchronous RL.
3.  **Convergence on Modern Inference Engines:** Legacy inference paths are being aggressively pruned. TRL dropping vLLM 0.15 and AReaL requiring vLLM 0.22.0+ for Rollout Routing Replay (R3) shows that high-throughput inference engines are now the undisputed standard for RL rollouts.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for ROCK.

# 📊 ROCK RL Daily Digest — 2026-07-03

## 1. Today's Highlights
The past 24 hours show heavy active development in scaling ROCK's backend infrastructure. Key activities include integrating **OpenSandbox** as a new highly-isolated execution backend, optimizing async I/O for the control plane, and adding automated self-healing for worker nodes. 

## 2. Releases
* **No new releases** were published in the last 24 hours.

## 3. Important Issues
* **[FEATURE] Add OpenSandbox Backend ([#1202](https://github.com/alibaba/ROCK/issues/1202))**: Proposed adding `OpenSandboxOperator` to support OpenSandbox (a production-grade Agent sandbox runtime) as a new backend alongside existing `ray` and `k8s` operators. This will bring gVisor/Kata strong isolation capabilities for ROCK's sandbox environments.
* **[PERF] Reuse Shared HTTPX Client ([#1204](https://github.com/alibaba/ROCK/issues/1204))**: Identified an I/O bottleneck where `_http_probe_manifest` creates a new `httpx.AsyncClient` on every call. The proposal aims to replace this with a process-lifetime shared client to prevent TCP/TLS handshake overhead during concurrent sandbox startup.

## 4. Key PR Progress
* **New Backend Integration - OpenSandbox Phase 1 ([#1203](https://github.com/alibaba/ROCK/pull/1203))**: Opened the first phase of the OpenSandbox integration, delivering the sandbox lifecycle seam via OpenSandbox's official Python SDK. Command and file execution proxies are slated for a follow-up PR.
* **Admin Service I/O Optimization ([#1205](https://github.com/alibaba/ROCK/pull/1205) & [#1201](https://github.com/alibaba/ROCK/pull/1201))**: Submitted a fix to reuse a shared `httpx` client for registry probes. Concurrently, the effort to migrate the FastAPI admin service to `uvloop` and `httptools` was merged/closed, significantly boosting async throughput.
* **Worker Auto-Healing ([#1190](https://github.com/alibaba/ROCK/pull/1190))**: Introduced `DockerHealthTask` to the scheduler, allowing the system to automatically probe and restart exited Docker daemons on workers.
* **Sandbox Archiving Lifecycle ([#1095](https://github.com/alibaba/ROCK/pull/1095))**: Ongoing work to integrate the archive lifecycle into the sandbox state machine, adding new states (`archiving`, `archived`) to the operator and reconciler.
* **Job SDK Tracking ([#1175](https://github.com/alibaba/ROCK/pull/1175))**: Added tracking capabilities to the Job SDK.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning increasingly shifts toward autonomous agents, LLM alignment, and complex multi-agent environments, the underlying compute infrastructure requires highly scalable, strictly isolated, and fault-tolerant sandbox runtimes. 

ROCK's current trajectory directly addresses the core infrastructure demands of modern RL:
1. **Security & Isolation:** Integrating gVisor/Kata-backed OpenSandbox provides the hardware-level isolation necessary for safely executing untrusted or exploratory agent code.
2. **High-Throughput Control Planes:** By adopting `uvloop` and optimizing HTTP connection pooling, ROCK is actively solving the event-loop bottlenecks required to manage thousands of concurrent RL environment simulators.
3. **Resilience & State Management:** The addition of automated Docker daemon recovery and complex sandbox archiving state machines ensures that long-running, distributed RL training jobs can survive node-level failures without manual intervention.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for **2026-07-03**, focused on `THUDM/slime`.

### 1. Today’s Highlights
Today’s activity in the slime ecosystem (9 PR updates, 2 issues) is heavily centered on **high-performance distributed weight synchronization** and **hardening the RL training loop for complex agentic tasks**. The community is actively pushing optimizations for cross-cluster and non-colocated training, alongside crucial fixes for Next-N/MTP (Multi-Token Prediction) loss logging.

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **Async Rollout Connection Instability ([#2168](https://github.com/THUDM/slime/issues/2168))**
    *   *Context:* A user reported a connection failure during the rollout phase immediately following an async weight update. The user noted that synchronous mode operates flawlessly, isolating the bug to the fully async architecture.
*   **Frontier Model Support: Gemma 4 ([#1811](https://github.com/THUDM/slime/issues/1811))**
    *   *Context:* With SGLang recently adding rollout support for Gemma 4 (dense 31B and 26B A4B MoE), users are now exploring black-box HuggingFace wrapping approaches to train these models via RL in slime.

### 4. Key PR Progress
*   **Distributed Weight Sync Optimizations:** 
    *   [PR #2089](https://github.com/THUDM/slime/pull/2089) (Closed) introduced *disk-level delta weight sync*, shipping only changed bytes between checkpoints to optimize non-colocated training.
    *   [PR #2146](https://github.com/THUDM/slime/pull/2146) (Open) adds an opt-in P2P shard weight update via `dist.send/recv`, bypassing the heavier default `all_gather` + NCCL broadcast.
*   **Agentic RL Hardening:** 
    *   [PR #2161](https://github.com/THUDM/slime/pull/2161) (Closed) significantly upgrades the SWE coding-agent RL runtime (`slime/agent/`) by introducing environment-selectable grading protocols and improving sandbox RPC robustness.
*   **Algorithm & Architecture Fixes:**
    *   [PR #2132](https://github.com/THUDM/slime/pull/2132) (Open) fixes Multi-Token Prediction (MTP) loss logging for `mtp-num-layers > 1`.
    *   [PR #2164](https://github.com/THUDM/slime/pull/2164) (Open) adds multimodal SFT support for Qwen36.

### 5. Why This Project Matters in Today's RL Landscape
As RL scales from standard chat models to complex coding agents and multimodal architectures, system bottlenecks shift from pure FLOPs to **inter-component communication** (e.g., trainer-to-rollout weight transfers) and **environment interaction reliability**. Slime’s latest PR pipeline directly addresses these 2026-era RL challenges:
1.  **Solving the Rollout Bottleneck:** By experimenting with disk-level delta syncing (#2089) and P2P shard broadcasting (#2146), slime is pioneering ultra-efficient weight updates for disaggregated, non-colocated RL setups across massive GPU clusters.
2.  **Native Agentic RL Support:** Upgrades to the SWE coding-agent runtime (#2161) show a shift toward robust, sandboxed tool-use training, which is critical for training下一代 (next-gen) autonomous coding models. 
3.  **Next-Gen Architectures:** Fast-tracking support for advanced inference features like Multi-Token Prediction (#2132) ensures the framework remains compatible with the latest base model designs.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL ecosystem daily digest for AReaL.

### 1. Today's Highlights
*   **Mega-Core & Checkpointing Overhaul:** A massive focus today was on fixing distributed checkpointing (DCP) and optimizer sharding for Megatron-Core v0.14+, preventing silent data drops and TP-shard failures.
*   **Rollout Throughput Fixes:** Contributors identified and patched critical bottlenecks in rollout capacity calculations that caused effective generation throughput to artificially shrink by a factor of N (worker count).
*   **Expanded VLM/MoE Support:** Significant feature progress was made on enabling LoRA GRPO training for next-gen Qwen3.6 models and adding Rollout Routing Replay (R3) for vLLM.

### 2. Releases
*   **None** (No new releases or version bumps in the last 24 hours).

### 3. Important Issues
*   **[bug] NCCL timeout during weight synchronization on A800** ([Issue #1439](https://github.com/inclusionAI/AReaL/issues/1439))
    *   **Status:** Open (Updated 2026-07-02)
    *   **Summary:** A reproducible bug occurring in AReaL `ControllerV2` on A800 GPUs where weight synchronization triggers an NCCL timeout. The issue author has confirmed via checklist that this happens in the official Docker image and is a root-cause failure, highlighting a potential distributed communication deadlock in the v2 controller architecture.

### 4. Key PR Progress
*A total of 8 PRs saw activity today, heavily focused on distributed training stability and inference engine compatibility.*

**Inference & Rollout Optimization:**
*   **[PR #1472](https://github.com/inclusionAI/AReaL/pull/1472) [OPEN]:** Fixes v2 dispatch to honor `actor.weight_update_mode=disk` for non-colocated SGLang rollouts instead of force-defaulting to AWEX.
*   **[PR #1471](https://github.com/inclusionAI/AReaL/pull/1471) [OPEN]:** Fixes a scaling flaw where controller-managed workers divided rollout capacity by `dist.get_world_size()`, which previously caused generation stalls in distributed setups.
*   **[PR #1389](https://github.com/inclusionAI/AReaL/pull/1389) [OPEN]:** Adds Rollout Routing Replay (R3) support for the vLLM backend (requiring vLLM 0.22.0+).

**Checkpointing & Megatron-Core Fixes (Contributor: Le8r0nJames):**
*   **[PR #1468](https://github.com/inclusionAI/AReaL/pull/1468) [CLOSED]:** Fixes Megatron distributed optimizer checkpointing on mcore 0.17.0, patching a bug where loading silently dropped optimizer moments.
*   **[PR #1470](https://github.com/inclusionAI/AReaL/pull/1470) [OPEN]:** Patches `GroupRMSNorm` in lightning attention so DCP checkpointing correctly handles TP-shards instead of falling back to replicated weight states.

**Feature Integration & Maintenance:**
*   **[PR #1444](https://github.com/inclusionAI/AReaL/pull/1444) [OPEN]:** Introduces LoRA-based GRPO training support for Qwen3.6 models (27B dense and 35B-A3B MoE) using SGLang and FSDP.
*   **[PR #1467](https://github.com/inclusionAI/AReaL/pull/1467) [CLOSED]:** Removes ~2,500 lines of dead code by dropping the unused `swe_sft.py` dataset loader.

### 5. Why This Project Matters in Today's RL Landscape
AReaL is actively solving the most pressing infrastructure bottlenecks in Large Language Model (LLM) and Vision-Language Model (VLM) reinforcement learning. As the industry shifts heavily towards GRPO and complex distributed RL, projects require flawless coordination between massive training clusters (Megatron, FSDP) and high-throughput inference engines (vLLM, SGLang). 

Today's PR pipeline demonstrates exactly why AReaL is critical to this ecosystem: it is bridging the gap between next-generation model architectures (e.g., Qwen3.6 MoEs) and low-level distributed constraints (e.g., mcore DCP checkpointing, TP-shard weight syncing, and global rollout routing). By eliminating silent training crashes and optimizing cross-engine weight updates, AReaL provides the deterministic, scalable foundation necessary to train tomorrow's frontier models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL ecosystem daily digest for TRL based on the July 2-3, 2026 activity.

# 📊 RL Open-Source Daily Digest: Hugging Face TRL
**Date:** 2026-07-03 | **Repository:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
- **KTO Alignment Sprint:** Massive push by @qgallouedec to structurally align `KTOTrainer` with `DPOTrainer`, introducing tool-calling support, MoE load-balancing, and standardizing internal APIs.
- **Agentic RL Enhancements:** A new PR introduces environment-owned rewards, a crucial step toward native multi-turn agent training where environments define the reward signals. 
- **Ecosystem Maintenance:** Dropping legacy `vLLM 0.15` support and streamlining QLoRA initialization across all major trainers.

## 2. Releases
**None.** (0 new releases in the last 24h).

## 3. Important Issues
- **[OPEN] Multimodal RL Expansion:** [#5373](https://github.com/huggingface/trl/issues/5373) requests separate handling for video inputs in multimodal LLM training (e.g., Qwen3-VL). Currently, the trainer restricts multimodal data to a single `"images"` key.
- **[CLOSED] Online DPO & vLLM Bug:** [#5514](https://github.com/huggingface/trl/issues/5514) identified a critical bug where `OnlineDPOTrainer` flattened vLLM `completion_ids` twice, breaking the block layout assumption for chosen/rejected pairs. *(Resolved via PR #6228)*.
- **[CLOSED] Liger Kernel + GRPO Incompatibility:** [#4612](https://github.com/huggingface/trl/issues/4612) highlighted that `use_liger_loss=True` in GRPO completely ignored PEFT/LoRA adapters on the `lm_head`, causing silent training failures. 

## 4. Key PR Progress
- **Agentic Environments & Distillation**
  - [#6238](https://github.com/huggingface/trl/pull/6238): Implements environment-owned rewards. Environments can now natively define `get_reward()`, bypassing the need for external `reward_funcs`.
  - [#6191](https://github.com/huggingface/trl/pull/6191): Adds Importance Weighted Optimized Policy Distillation (IW-OPD) to the experimental distillation trainer.
- **KTO & DPO Parity (by @qgallouedec)**
  - [#6259](https://github.com/huggingface/trl/pull/6259): Adds tool-calling support to KTO, allowing models to parse tool schemas properly.
  - [#6208](https://github.com/huggingface/trl/pull/6208): Restores Mixture-of-Experts (MoE) load-balancing auxiliary loss to DPO via `router_aux_loss_coef`.
  - [#6257](https://github.com/huggingface/trl/pull/6257) & [#6256](https://github.com/huggingface/trl/pull/6256): Brings token-weighted `entropy` and `num_tokens` metric logging to KTO to match DPO.
- **UX and Infrastructure**
  - [#6157](https://github.com/huggingface/trl/pull/6157): Streamlines QLoRA by adding a top-level `quantization_config` argument to SFT, DPO, GRPO, RLOO, and Reward trainers.
  - [#6239](https://github.com/huggingface/trl/pull/6239): Officially drops support for vLLM 0.15, keeping the repo aligned with modern inference engine capabilities.
  - [#6252](https://github.com/huggingface/trl/pull/6252): Improves DX for Knowledge Distillation (GKD) by failing early with a clear error if student and teacher vocab sizes mismatch.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to act as the definitive bridge between cutting-edge RL research and production-ready LLM post-training. Today's update highlights two massive current trends in the AI ecosystem:
1. **The Rise of Agentic RL:** Moving beyond static datasets, the shift toward "environment-owned rewards" (#6238) proves that TRL is pivoting to support multi-step, tool-using agents (a la R1-Zero style training). 
2. **Hardware & Inference Optimization:** Resolving bugs around Liger Kernel and dropping legacy vLLM versions shows a relentless focus on keeping RLHF/PPO loops natively compatible with high-throughput inference engines, which is vital given the massive compute cost of online generation.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

**RL Ecosystem Daily Digest: Tianshou**
**Date:** 2026-07-03

**1. Today's Highlights**
Activity in the Tianshou repository over the past 24 hours has been minimal, with zero new pull requests, no new releases, and only one issue update. The single tracked event is an update to a long-standing, community-facing documentation issue (#1056). 

**2. Releases**
*   **Status:** No new releases in the last 24 hours.
*   **Context:** While the project is actively preparing for a "next major release" (as noted in issue tracking), no official version increments or deployment artifacts have been pushed today.

**3. Important Issues**
*   **[#1056] Improve and extend Documentation Content** `[OPEN]` `[good first issue]` `[documentation]`
    *   **Author:** MischaPanch
    *   **Updated:** 2026-07-02
    *   **Summary:** This ongoing issue highlights the strategic push to overhaul Tianshou's documentation ahead of its next major release. The overarching goal is to lower the barrier to entry for industry practitioners and researchers, capitalizing on recent community outreach such as the 2024 PyData Berlin talk. 
    *   **Link:** [thu-ml/tianshou Issue #1056](https://github.com/thu-ml/tianshou/issues/1056)

**4. Key PR Progress**
*   **Status:** No active PR progress.
*   **Summary:** Zero pull requests were opened, merged, or updated within the last 24 hours. Core development and community code contributions appear to be in a dormant or low-activity phase for this specific window.

**5. Why This Project Matters in Today's RL Landscape**
Tianshou remains a highly relevant, lightweight, and highly modular reinforcement learning library built on PyTorch. While newer frameworks may dominate general deep learning news, Tianshou's architecture—which heavily emphasizes clean algorithm implementations, reproducibility, and high-throughput execution (I/O and GPU utilization)—makes it an essential tool for dedicated RL researchers. The ongoing push to revamp its documentation (Issue #1056) underscores a critical industry pivot: bridging the gap between academic RL research and production deployment by making state-of-the-art algorithms (PPO, SAC, etc.) more accessible to applied data scientists.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL daily digest for **verl** based on GitHub activities up to 2026-07-03.

### 1. Today's Highlights
* **Distillation & Async Pipelines**: Significant work is being poured into On-Policy Distillation (OPD) and fully asynchronous RL. New PRs introduce reverse-KL OPD with FSDP teachers and a standalone log prob server to decouple actor weight updates.
* **Hardware Expansion (Ascend NPUs)**: A massive push for Huawei Ascend NPU compatibility is underway, including custom Triton Gated Delta Net (GDN) kernels for Qwen3.5 and vLLM 0.19+ adaptations.
* **Engine & Rollout Optimizations**: Developers are integrating advanced memory and compute optimizations, notably the MAGI attention mechanism for prefix-tree deduplication, alongside critical bug fixes for vLLM and SGLang rollouts.

### 2. Releases
* **No new releases** were published in the last 24 hours. The project appears to remain on the `0.9.0.dev` version.

### 3. Important Issues
* **FSDP2 Instability on Ascend ([#6894](https://github.com/volcengine/verl/issues/6894))**: A reproducible crash at step 11 during GRPO training on Atlas 800T A3 (device-side AIV MTE out-of-range) was reported. FSDP1 remains stable, pointing to specific FSDP2 edge-case bugs on NPU hardware.
* **On-Policy Distillation (OPD) Accuracy ([#6904](https://github.com/volcengine/verl/issues/6904))**: A user reported that `use_task_rewards=true` does not seem to improve accuracy when running OPD using Qwen3.5 4B on the geo3k dataset.
* **FP8 Training Clarifications ([#6893](https://github.com/volcengine/verl/issues/6893))**: Developers are requesting clearer documentation on training-side model parameter storage dtypes in the Megatron FP8 end-to-end training path.
* **Legacy Infra Issues**: Multiple older issues (e.g., [#693](https://github.com/volcengine/verl/issues/693) on system/kernel profiling and [#668](https://github.com/volcengine/verl/issues/668) on checkpoint loading bottlenecks) were swept up in the daily automated issue processing.

### 4. Key PR Progress
* **Algorithms & Trainers**:
  * [#6920](https://github.com/volcengine/verl/pull/6920): Added reverse-KL on-policy distillation with student-top-K support and an FSDP teacher.
  * [#6916](https://github.com/volcengine/verl/pull/6916): Fixed API compatibility for the latest TorchtitanEngine.
  * [#6689](https://github.com/volcengine/verl/pull/6689) (Draft): Introduced prefix-tree MAGI attention for SFT and GRPO to deduplicate shared prefixes across rollouts.
* **Async RL Infrastructure**:
  * [#5990](https://github.com/volcengine/verl/pull/5990): Introduced a standalone `Model Engine Server` for fully async pipelines, removing the need to save/restore actor weights for `old_log_probs` computation.
* **Rollouts & Inference Engines**:
  * [#6919](https://github.com/volcengine/verl/pull/6919): Fixed a crash in vLLM weight updates caused by non-contiguous, strided tensors during bucketed transfers.
  * [#6906](https://github.com/volcengine/verl/pull/6906) (Closed/Merged): Added SGLang FP8 support for skipping selected modules (like Qwen3.x GatedDeltaNet) during rollout weight quantization.
  * [#6712](https://github.com/volcengine/verl/pull/6712): Refactored load balancing into a pluggable router module for rollouts.
* **Ascend NPU Support**:
  * [#6907](https://github.com/volcengine/verl/pull/6907) & [#6908](https://github.com/volcengine/verl/pull/6908): Injected custom Triton Gated Delta Net (GDN) kernels for Qwen3.5 to accelerate NPU inference.
  * [#6881](https://github.com/volcengine/verl/pull/6881): Adapted the framework for vLLM 0.19+ on Ascend NPUs.

### 5. Why This Project Matters in Today's RL Landscape
As post-training and RLHF become the dominant compute sinks for frontier LLMs (e.g., DeepSeek, Qwen), frameworks are battling severe hardware bottlenecks. **verl** continues to establish itself as a premier, hardware-agnostic RL orchestration layer. 

Today's updates highlight exactly where the industry is heading:
1. **Beyond Standard PPO**: The integration of advanced On-Policy Distillation (OPD) proves the ecosystem is moving toward hybrid teacher-student RL to reduce compute costs.
2. **Inference/Training Overlap**: Decoupling log-prob servers and async pipelines (#5990) shows verl solving the deadly "RL rollout bottleneck"—maximizing GPU utilization by overlapping generation and training.
3. **Hardware Diversification**: The heavy iteration on Ascend NPU support and alternative inference engines (SGLang/vLLM) proves verl is positioning itself as the go-to framework for teams trying to escape NVIDIA hardware lock-in and optimize total cost of ownership.

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

**RL Ecosystem Daily Digest: July 3, 2026**

**Target Repository:** [`Denys88/rl_games`](https://github.com/Denys88/rl_games)

### 1. Today's Highlights
Activity in the `rl_games` repository over the last 24 hours was exclusively focused on code finalization. The primary event is the closure of a significant Pull Request ([#356](https://github.com/Denys88/rl_games/pull/356)) detailing core fixes to the Soft Actor-Critic (SAC) algorithm. No new issues, comments, or releases were recorded.

### 2. Releases
*   **Status:** No new releases in the last 24 hours.
*   **Context:** The merging/closing of the SAC fixes indicates that a new patch release may be on the horizon to formally package these buffer and normalization corrections.

### 3. Important Issues
*   **Status:** Quiet (0 items updated).
*   **Context:** No new bug reports or feature requests were raised in the last 24 hours, suggesting a period of overall library stability.

### 4. Key PR Progress
*   [PR #356: [CLOSED] SAC fixes and improvements](https://github.com/Denys88/rl_games/pull/356) by *ViktorM*
    *   **Replay Correctness:** Resolved a critical bug for next-step-autoreset environments. The update ensures the buffer skips the action-ignored reset-step row, stores the true final observation at truncation, correctly flags `done = terminated`, and introduces a `truncated` column to ensure proper bootstrapping.
    *   **Observation Normalization:** Fixed a bug to guarantee that observation normalization updates exactly once per fresh environment frame, preventing miscalculations during autoresets. 

### 5. Why This Project Matters in Today's RL Landscape
As a highly optimized, TensorRL-based engine, `rl_games` remains a staple for high-throughput reinforcement learning research and deployment. Today’s closed PR #356 highlights a crucial, often-overlooked technical challenge in modern RL: **correct buffer mechanics in vectorized, auto-resetting environments**. 

In today's landscape, where massive parallelization (via APIs like Gymnasium's `AsyncVectorEnv`) is the standard for accelerating sample collection, mishandling truncation states and observation normalization at episode boundaries can silently destroy SAC training stability. By rigorously addressing these edge cases, `rl_games` maintains its reputation as a robust, production-ready framework capable of handling the strict data integrity requirements of continuous control algorithms.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium 
**Date:** 2026-07-03

### 1. Today's Highlights
Activity in the last 24 hours focused heavily on documentation accuracy and future-proofing the library's tech stack. The community merged crucial fixes to environment seeding practices in tutorials and officially closed a proposal to enforce strict type hinting across the core API. 

### 2. Releases
* **No new releases** were published in the last 24 hours.

### 3. Important Issues
* **[CLOSED] Issue #1468: Inconsistency Between `reset()` Docstring and REINFORCE Tutorial:** Addressed a common point of confusion for practitioners. The documentation previously contradicted tutorial code regarding whether the PRNG should be reset via `env.reset(seed=...)` every episode. The community confirmed that continuous reseeding reduces training data variety and violates Gymnasium's standard environment lifecycle. ([View Issue](https://github.com/Farama-Foundation/Gymnasium/issues/1468))
* **[CLOSED] Issue #9: Add strict type hinting for `core.py` and spaces:** A long-standing `good first issue` from 2022. The push to implement strict type checking (resolving Pyright conflicts like overwriting variables with properties) has concluded, marking a maturation of the Gymnasium core codebase. ([View Issue](https://github.com/Farama-Foundation/Gymnasium/issues/9))

### 4. Key PR Progress
* **[MERGED/CLOSED] PR #1608 & PR #1609: Tutorial Seeding & Frozenlake Fixes:** Submitted by `Trenza1ore`, these dual PRs successfully overhauled the environment tutorials. They removed the anti-pattern of passing a static seed to `env.reset()` during training loops, aligning the tutorials with optimal RL training mechanics. ([PR #1608](https://github.com/Farama-Foundation/Gymnasium/pull/1608) | [PR #1609](https://github.com/Farama-Foundation/Gymnasium/pull/1609))
* **[MERGED/CLOSED] PR #1603: Require numpy >= 2.0:** A significant architectural update by `RewardGuard`. This PR drops support for NumPy 1.x, sets the minimum requirement to NumPy 2.0, and officially introduces Python 3.14 support into the CI matrix. ([View PR](https://github.com/Farama-Foundation/Gymnasium/pull/1603))

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the undisputed foundational interface for Reinforcement Learning research and development. Today's updates highlight two critical industry needs:
1. **Algorithmic Integrity:** Correct PRNG seeding is paramount in RL. Anti-patterns like reseeding every episode artificially collapse environment variance, destroying the stochastic nature required for robust policy training. By rigorously updating tutorials to reflect best practices, Gymnasium prevents silent training failures for thousands of developers.
2. **Ecosystem Modernization:** By enforcing strict type hinting and aggressively adopting NumPy 2.0+ and Python 3.14+, Gymnasium ensures that the broader RL ecosystem (custom environments, vectorized wrappers, and deep learning frameworks) remains compatible with modern Python data science standards.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🤖 RL Ecosystem Daily Digest: 2026-07-03
**Project Focus:** PettingZoo (Farama-Foundation)

### 1. Today's Highlights
*   **Artwork Integration:** Core maintainer `jkterry1` kicked off an initiative to integrate custom pixel art rendering into the Hanabi environment.
*   **Codebase Hardening:** A significant pull request aimed at tightening static analysis and enforcing stricter linting standards was recently closed.

### 2. Releases
*   **No new releases** tracked in the last 24 hours. The project continues to stabilize from its previous version baseline.

### 3. Important Issues
*   **#1379 [OPEN] Hanabi Rendering** | *Author: jkterry1*
    *   **Summary:** Custom pixel art assets for the classic multi-agent benchmark Hanabi have been commissioned and delivered. The issue is a call to action for open-source contributors to build the rendering pipeline and submit a PR to integrate the visual assets. 
    *   **Link:** [Farama-Foundation/PettingZoo Issue #1379](https://github.com/Farama-Foundation/PettingZoo/issues/1379)

### 4. Key PR Progress
*   **#1376 [CLOSED] Increase ruff strictness and apply mechanical autofixes** | *Author: mfornet*
    *   **Summary:** This PR focused on backend code quality, expanding the strictness of the `ruff` linter beyond default Pyflakes (F) and Pycodestyle (E4/E7/E9) rules. This aligns with ongoing efforts to modernize the codebase and promote diagnostics to hard errors (building on baseline #1350). Though closed without merge in this iteration, it represents active, rigorous maintenance of the library's underlying code health.
    *   **Link:** [Farama-Foundation/PettingZoo PR #1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376)

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains an indispensable infrastructure layer for the Multi-Agent Reinforcement Learning (MARL) community. While standard single-agent libraries focus solely on state-action spaces, PettingZoo's standardized API for diverse agent observation/action spaces (AEC and Parallel APIs) allows researchers to benchmark algorithms seamlessly across heterogeneous environments. The push for custom visual rendering in complex partially observable games like Hanabi, coupled with aggressive backend static typing (`ruff` strictness), highlights the ecosystem's dual focus on user experience (visual debugging) and enterprise-grade code reliability.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>