# RL Open Source Daily Digest 2026-06-23

> Generated: 2026-06-22 22:30 UTC | Projects covered: 15

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
The June 23, 2026 digest data reveals an RL open-source landscape heavily pivoting toward large-scale, agentic, and reasoning-oriented post-training. The ecosystem's active development is concentrated almost entirely on frameworks capable of distributed LLM training (verl, TRL, AReaL, slime, OpenRLHF). The primary technical challenges being solved are no longer basic algorithm implementations, but rather the infrastructural bottlenecks of distributed training: synchronizing massive model weights efficiently, managing memory during rollout colocation, and supporting multi-turn tool-calling agent workflows. Meanwhile, traditional API-level RL environments (Gymnasium) and classical RL libraries (CleanRL, Stable Baselines3) remain dormant, indicating a clear industry-wide focus shift toward LLM infrastructure.

## Activity Comparison
*Note: Projects with zero activity (CleanRL, PettingZoo, rl_games, ROLL, Stable Baselines3, Tianshou, torchtune) have been grouped at the bottom.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 19 | 24 | 0 | High momentum; dominating async RL, hardware expansion (Ascend), and agentic tooling. |
| **AReaL** | 0 | 19 | 0 | Enterprise focus; zero issue backlog, pushing cutting-edge memory (FP8) and algorithms (CISPO, Muon). |
| **TRL** | 4 | 6 | 0 | Maturing AsyncGRPO; solving critical PEFT/deadlock and tool-calling unification bottlenecks. |
| **slime** | 0 | 6 | 0 | Stability and bug-squashing phase; hardening PPO metric integrity and distributed weight syncs. |
| **ROCK** | 2 | 4 | 0 | Infrastructure maturity; aligning TS/Python SDKs and fixing cloud storage/sandbox lifecycles. |
| **OpenRLHF** | 0 | 1 | 0 | Targeted refinement; fixing token masking for multi-turn agentic training. |
| **open-instruct** | 1 | 0 | 0 | Maintenance; identifying silent SFT loss reduction regressions affecting LR calibration. |
| **Gymnasium** | 0 | 1 | 0 | Low activity; routine CI/CD dependency bumping. API remains highly stable. |
| **Others** | 0 | 0 | 0 | No activity across CleanRL, PettingZoo, rl_games, ROLL, SB3, Tianshou, torchtune. |

## Shared Research & Engineering Directions

**Research Directions**
*   **Advanced Policy & Loss Optimization:** Teams are moving beyond standard PPO/GRPO to stabilize training. AReaL is integrating the CISPO loss surrogate (MiniMax-M1) to solve zero-gradient problems in PPO clipping, while TRL is adding adaptive entropy regularization to GRPO to prevent policy collapse. verl is adding CPPO for tighter trust regions.
*   **Next-Generation Optimizers:** AReaL has implemented native support for the Muon optimizer (MomentUm Orthogonalized by Newton-Schulz) for both FSDP2 and Megatron backends, pushing for faster convergence on massive LLMs.
*   **Agentic Multi-Turn Rollouts:** Developing reliable pipelines for tool-calling (user → assistant → tool). verl, TRL, and OpenRLHF are heavily focused on proper token masking, action isolation, and reward extraction during multi-step agent interactions.

**Engineering & Infrastructure Directions**
*   **Optimized Weight Synchronization:** A major shared goal is reducing network I/O during distributed rollouts. TRL (sparse delta weight syncing) and slime (surfacing silent delta-sync failures in SGLang) are actively fixing bottlenecks in broadcasting policy updates to inference engines.
*   **Hardware Tiering & Memory Efficiency:** Frameworks are aggressively optimizing physical hardware layers to prevent VRAM/Host-memory OOM. AReaL is pioneering FP8 direct transfers for Megatron and disabling CPU gradient backups, while TRL is optimizing NLL calculation memory for huge vocabularies.
*   **Alternative Silicon Support:** Breaking Nvidia monopolies is a visible trend. Both verl and TRL have explicitly highlighted massive engineering pushes to ensure CI and training pipelines operate natively on Huawei Ascend NPU clusters (e.g., 910B).

## Differentiation Analysis
*   **The Distributed Heavyweights (verl, AReaL, TRL):** These projects are competing directly to be the default enterprise LLM-RLHF framework. **verl** differentiates via its massive scale (122B+ models) and hardware-agnostic adaptability. **AReaL** is setting itself apart by rapidly integrating bleeding-edge 2026 research (Muon, CISPO) and aggressive FP8 memory optimization. **TRL** focuses on developer accessibility, dominating the Hugging Face ecosystem and streamlining PEFT/vLLM integrations.
*   **The Tooling & Stability Players (slime, OpenRLHF, Open-Instruct):** Instead of competing on raw scale, these projects are closing technical debt. **slime** and **OpenRLHF** are tackling the nitty-gritty reliability of PPO logging and token masking for SWE-agents, ensuring that RL math remains mathematically sound during complex rollouts. **Open-Instruct** acts as the transparent baseline, ensuring foundational SFT reproducibility.
*   **The Platform Orchestrator (ROCK):** ROCK differentiates itself entirely by operating *beneath* the algorithms. It provides the cloud-native backbone—sandbox state machines, OSS data logging, and SDK parity—allowing researchers to ignore Kubernetes and disk-pressure issues entirely.

## Community Momentum & Maturity
*   **Reactive, High-Volume Triage (verl, TRL):** These projects show classic signs of explosive growth. verl processed 19 issues and 24 PRs in 24 hours, while TRL actively addresses scaling deadlocks. They have the momentum but carry heavy community support burdens.
*   **Proactive, Zero-Backlog Maintenance (AReaL, slime):** Both projects reached today's digest with 0 open issues. This indicates either a highly proactive triage system or a shift toward closed/internal corporate contribution models (inclusionAI, THUDM) where bugs are fixed via rapid PRs rather than public issue discussions.
*   **Academic & API Stagnation (Gymnasium, Open-Instruct):** Traditional RL environments and academic pipelines show extreme stability (or stagnation). Gymnasium relies on automated dependency bots, while Open-Instruct moves slowly, highlighting how the community's focus has shifted irreversibly toward applied LLM post-training.

## Trend Signals
*   **The Death of Synchronous RL:** The standard synchronous PPO loop is being replaced. verl, TRL, and others are aggressively building Asynchronous RL (AsyncGRPO, fully_async_policy) to decouple inference from training, solving the GPU idle-time bottleneck.
*   **Memory over Compute:** As context windows expand for reasoning models (DeepScaler, SWE-agents), the new infrastructure bottleneck is memory bandwidth. Innovations like sparse delta syncing (TRL), FP8 direct transfers (AReaL), and CPU gradient offloading mark a shift from compute-optimization to memory-optimization.
*   **Rise of the "Agent Loop":** Single-turn text generation is no longer the default training paradigm. Frameworks are natively building "AgentLoops" (verl) and multi-environment tool dictionaries (TRL) that expect models to call external APIs, wait for environment feedback, and resume generation within a single training step.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for ROCK based on the provided GitHub data. 

# 📊 ROCK RL Ecosystem Daily Digest — 2026-06-23

## 1. Today's Highlights
Today's focus is on **SDK parity and robust infrastructure management**. The community is actively addressing infrastructure reliability bottlenecks, specifically regarding Object Storage Service (OSS) configurations and sandbox resource management. A massive push to align the TypeScript SDK with the Python SDK highlights a strategic move toward full-stack, language-agnostic RL experimentation.

## 2. Releases
**No new releases** were published in the last 24 hours. The latest ongoing work targets the post-v1.9.0 cycle. 

## 3. Important Issues
*   **[#1143](https://github.com/alibaba/ROCK/issues/1143) [OPEN]: SDK OSS upload/download fails with 403 AccessDenied.**
    *   *Context:* Affects ROCK SDK ≥ 1.8 (both Python and TypeScript). Valid STS credentials are being undermined by a two-layer mismatch between SDK operations and primary account prefix configurations, blocking data logging.
*   **[#1141](https://github.com/alibaba/ROCK/issues/1141) [CLOSED]: `/tmp/sb-archive-*` temp dirs leaked by killed processes.**
    *   *Context:* Resolved an infrastructure issue where `SIGKILL` signals (from k8s/OOM) bypassed bash trap handlers, leaking tarball staging directories and causing severe worker disk pressure.

## 4. Key PR Progress
*   **[#1137](https://github.com/alibaba/ROCK/pull/1137) [OPEN]: feat(ts-sdk): align TypeScript SDK with Python SDK**
    *   *Impact:* Achieves feature parity across 8 modules. Adds 50+ new files and 400+ tests covering Harbor benchmark configurations and job/trial execution systems.
*   **[#1144](https://github.com/alibaba/ROCK/pull/1144) [OPEN]: fix(sdk): server-first OSS config resolution**
    *   *Impact:* Directly addresses Issue #1143. Enforces server-first OSS resolution and prefix-aware object keys on the primary OSS account without requiring backend/admin changes.
*   **[#1142](https://github.com/alibaba/ROCK/pull/1142) [CLOSED]: fix(archive): self-healing cleanup**
    *   *Impact:* Implements defense-in-depth against SIGKILL residuals by adding periodic stale-dir cleanup (>2h old) and trapping soft-kill signals (SIGTERM/SIGINT) to ensure safe exits.
*   **[#1095](https://github.com/alibaba/ROCK/pull/1095) [OPEN]: feat(archive): integrate archive lifecycle into state machine**
    *   *Impact:* A major architectural update expanding the sandbox state machine to 6 states (`pending` / `running` / `stopped` / `archiving` / `archived` / `deleted`), tightly coupling archival lifecycles with the reconciler.
*   **[#1058](https://github.com/alibaba/ROCK/pull/1058) [OPEN]: fix(common): surface error code on RockResponse envelope**
    *   *Impact:* Fixes a FastAPI/Pydantic coercion bug that corrupted error envelopes on typed response models, greatly improving API debugging for RL workloads.

## 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, large-scale distributed training is frequently bottlenecked by infrastructure orchestration—specifically, sandbox lifecycle management and the reliable ingestion of massive model checkpoints/logs to cloud storage (OSS). 

ROCK's current development trajectory directly targets these operational pain points. By evolving a robust sandbox state machine (PR #1095), implementing self-healing worker cleanup (PR #1142), and standardizing SDK behavior across both Python and TypeScript (PR #1137), ROCK is positioning itself as a highly resilient backbone for RL research. It enables engineers to spend less time debugging cluster disk pressure or API schema coercions, and more time iterating on agent architectures.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL ecosystem daily digest for **2026-06-23**. 

***

# 📊 RL Open-Source Daily Digest: THUDM/slime
**Date:** 2026-06-23 | **Focus:** Algorithm Reliability, Reward Engineering, and Infrastructure

### 1. Today's Highlights
The slime ecosystem saw no new issues or releases in the last 24 hours, but maintainers and contributors submitted a flurry of critical bugfixes (6 updated PRs). Today's focus is squarely on **training stability and metric integrity**. Key fixes target corrupted PPO logs, silent distributed weight-sync failures, reward segmentation edge cases, and memory management in agentic rollouts.

### 2. Releases
*   **None.** No new version tags or releases were published in the last 24 hours. The project continues to push fixes to its main branch and CI pipeline.

### 3. Important Issues
*   **None.** There is a 24-hour backlog of 0 open issues. The project appears to be in a proactive bug-squashing phase, with contributors addressing underlying systems flaws directly via Pull Requests.

### 4. Key PR Progress
Developers closed a CI loop and opened several vital technical patches:

*   **[OPEN] [PR #2114](https://github.com/THUDM/slime/pull/2114) | fix(ppo): stop corrupting the logged rollout/kl metric**
    *   *Author:* EazyReal
    *   *Analysis:* A critical fix for PPO training visibility. The previous implementation mutated the `rollout_data["kl"]` array in-place when computing the KL-penalty reward signal (`-kl_coef * kl`). This side-effect corrupted the historical rollout data, causing the `log_rollout_data` function to record inaccurate KL divergence metrics.
*   **[OPEN] [PR #2119](https://github.com/THUDM/slime/pull/2119) | fix(delta-sync): surface failed engine apply results**
    *   *Author:* tanishkasinghhh
    *   *Analysis:* Addresses a major infra blind spot in distributed RL. The `_finalize_sync()` function was silently discarding the `(success, msg)` tuples from SGLang receiver engines during delta weight updates. This PR surfaces load failures, preventing training runs from continuing silently on corrupted or unsynchronized inference engines.
*   **[OPEN] [PR #2117](https://github.com/THUDM/slime/pull/2117) | fix(agent): add drop_session for cleanup paths; require base_sample in finish_session**
    *   *Author:* jingshenghang
    *   *Analysis:* Improves memory/resource management for agentic RL frameworks. It prevents `base_sample=None` edge cases in `finally` blocks during SWE coding-agent rollouts and adds a `drop_session` hook for deterministic resource cleanup. 
*   **[OPEN] [PR #2116](https://github.com/THUDM/slime/pull/2116) | fix(rm_hub): grade the final ###Response segment in deepscaler reward**
    *   *Author:* SuperMarioYL
    *   *Analysis:* Ensures robust reward signal extraction. Fixes an inconsistency in `get_deepscaler_rule_based_reward` where varying answer markers (`</think>` vs `###Response`) could result in grading the wrong text segment.
*   **[CLOSED] [PR #2118](https://github.com/THUDM/slime/pull/2118) | [run-ci-megatron] sync from internal**
    *   *Author:* zhuzilin
    *   *Analysis:* A synchronization PR used to push internal updates to the public repo, triggering Megatron backend CI. (See also companion CI runner [PR #2053](https://github.com/THUDM/slime/pull/2053)).

### 5. Why This Project Matters in Today's RL Landscape
As post-training and RLHF transition from standard chat models to complex agentic workflows (like SWE agents) and DeepScaler-style reasoning, the underlying training infrastructure is fracturing under technical debt. 

Today's PRs in `slime` highlight the exact growing pains the open-source RL ecosystem faces in 2026:
1.  **Engine-Inference Cohesion:** As seen in [PR #2119](https://github.com/THUDM/slime/pull/2119), coordinating distributed weight deltas (e.g., via Ray/SGLang) without silent failures is a massive pain point. 
2.  **Metric Reliability under Concurrency:** [PR #2114](https://github.com/THUDM/slime/pull/2114) shows how easily in-place memory mutations in PPO advantage calculations can blind researchers to actual KL divergence spirals. 
3.  **Agent Rollout Cleanup:** Multi-turn tool-using agents require strict memory lifecycle management (e.g., [PR #2117](https://github.com/THUDM/slime/pull/2117)) to prevent VRAM leaks across thousands of rollouts. 

By hardening the reward hubs (`rm_hub`), fixing metric logging, and ensuring synchronous distributed weight updates, slime is actively providing the fault-tolerant infrastructure required to train next-generation reasoning models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL ecosystem daily digest for AReaL based on the provided GitHub data.

# 📊 AReaL RL Ecosystem Daily Digest (2026-06-23)

## 1. Today's Highlights
- **Surge in Development Activity:** The AReaL ecosystem saw a massive push in the last 24 hours with **19 PRs** updated, while issues remained completely clear at **0 open items**, indicating highly proactive maintainer triage.
- **Tooling & UX Expansion:** AReaL is aggressively expanding its developer and operational tooling, highlighted by new experimental CLIs (`areal train`, `areal inf`) and offline trajectory replay mechanisms.
- **Cutting-Edge RL Algorithms:** Integration of state-of-the-art (2026) research is actively underway, including the MiniMax-M1 CISPO loss surrogate and native Muon optimizer support.
- **Infrastructure Optimization:** Significant strides in distributed memory efficiency, notably FP8 direct transfers for Megatron and host-memory savings via disabled CPU gradient backups.

## 2. Releases
- **No new releases** were published in the last 24 hours. 

## 3. Important Issues
- **None (0 items).** The issue backlog is entirely clear. The project maintainers are doing an excellent job of immediately routing bugs, feature requests, and patches directly into Pull Requests.

## 4. Key PR Progress
The 19 active PRs represent critical architectural, algorithmic, and infrastructural updates to the framework:

**Algorithm & Optimizer Innovations:**
*   **[PR #1412](https://github.com/areal-project/AReaL/pull/1412):** Implements the **CISPO loss surrogate** (MiniMax-M1). This solves the zero-gradient problem in PPO/GRPO clipping, ensuring learning continues even when the importance-sampling ratio leaves the clip band.
*   **[PR #1270](https://github.com/areal-project/AReaL/pull/1270):** Adds highly anticipated native **Muon optimizer** support (MomentUm Orthogonalized by Newton-Schulz) for both FSDP2 and Megatron backends. 
*   **[PR #1413](https://github.com/areal-project/AReaL/pull/1413):** Refactors PPO group normalization to derive `group_size` dynamically from `gconfig.n_samples`, reducing configuration redundancy.

**Distributed Training & Memory Efficiency:**
*   **[PR #1406](https://github.com/areal-project/AReaL/pull/1406):** Enables **FP8 weight transfer** in AWEX colocate mode via the Megatron adapter, preventing implicit dequantization to BF16 and significantly accelerating transfers. 
*   **[PR #1393](https://github.com/areal-project/AReaL/pull/1393):** Reduces host memory usage (~4x) in colocated training by disabling CPU backups for Megatron gradient buffers during offload.
*   **[PR #1365](https://github.com/areal-project/AReaL/pull/1365):** Patches DTensor norm output localization specifically for **Qwen models** under Tensor Parallelism (TP), fixing broken dispatches caused by intermediate ops.
*   **[PR #1372](https://github.com/areal-project/AReaL/pull/1372):** Adds a dual-bridge NVIDIA Megatron adapter for the Bailing-MoE V2.5 model family.

**Developer Tooling & Operations:**
*   **[PR #1434](https://github.com/areal-project/AReaL/pull/1434) & [PR #1435](https://github.com/areal-project/AReaL/pull/1435):** Introduces highly requested ergonomic CLIs (`areal inf` and `areal train`) to simplify local inference gateway stacks and training job execution.
*   **[PR #1407](https://github.com/areal-project/AReaL/pull/1407):** Adds **trajectory dump and replay** functionality, allowing researchers to serialize rollout batches to disk for offline training loop debugging without relying on a live inference engine.
*   **[PR #1305](https://github.com/areal-project/AReaL/pull/1305) (Stale):** Experimental integration of Ray Direct Transport (RDT) for high-speed weight syncing.

**Backend & Bug Fixes:**
*   **[PR #1433](https://github.com/areal-project/AReaL/pull/1433):** Fixes critical stop-token handling for **Multi-EOS models** (e.g., Gemma 4) in the IO struct.
*   **[PR #1429](https://github.com/areal-project/AReaL/pull/1429):** Aligns `vLLMBackend` with `SGLangBackend` by forwarding `frequency_penalty` and `stop` args.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **"batteries-included," enterprise-grade RLHF post-training framework** tailored for modern Large Language Models. In the 2026 RL landscape, three massive bottlenecks dominate: massive VRAM/Host-memory overheads during rollout colocation, strict support for modern architectures (MoE, Multi-EOS models like Gemma), and the need for faster orthogonalized optimizers. 

AReaL is directly solving these ecosystem headaches. By implementing bleeding-edge research (like MiniMax's CISPO loss and the Muon optimizer) while simultaneously optimizing the physical hardware layer (FP8 weight transfers, skipping CPU grad backups), AReaL bridges the gap between theoretical RL research and highly scalable, production-ready distributed training.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the TRL (Transformer Reinforcement Learning) daily digest for June 23, 2026.

### 1. Today's Highlights
*   **GRPO & PEFT Stability:** A critical deadlock causing GRPO + vLLM colocate + PEFT to hang on multi-GPU setups has been addressed ([PR #6139](https://github.com/huggingface/trl/pull/6139)).
*   **Algorithmic Enhancements:** Static and adaptive entropy regularization is being introduced to GRPO to prevent policy collapse ([PR #6140](https://github.com/huggingface/trl/pull/6140)).
*   **AsyncGRPO Maturation:** Major performance and architectural updates for AsyncGRPO, including sparse delta weight syncing and multi-environment tool support.
*   **Hardware Ecosystem:** Confirmed successful integration of TRL v026.2 with vllm-ascend for GRPO training on Huawei 910B NPU clusters ([Issue #4790](https://github.com/huggingface/trl/issues/4790)).

### 2. Releases
*   **None** (0 new releases in the last 24 hours).

### 3. Important Issues
*   **[Infrastructure/Scaling] GRPO + vLLM + PEFT Deadlock:** ([Issue #3671](https://github.com/huggingface/trl/issues/3671)) Users reported frequent hanging on multi-GPU setups using PEFT with the vLLM colocate backend. 
*   **[Scaling] FSDP 2 + DPO Incompatibility:** ([Issue #3581](https://github.com/huggingface/trl/issues/3581)) Users attempting DPO on 8 GPUs are hitting a hard `MixedPrecisionPolicy` attribute error when applying FSDP 2 configurations.
*   **[Hardware Expansion] vllm-ascend Support:** ([Issue #4790](https://github.com/huggingface/trl/issues/4790)) Community feedback confirms that TRL (v0.26.2) now successfully executes GRPO training on Huawei 910B NPUs using vllm-ascend (0.11.0rc1).
*   **[Feature Request] Tool Calling Unification:** ([Issue #5460](https://github.com/huggingface/trl/issues/5460)) Ongoing tracking issue to standardize end-to-end tool calling (user → assistant → tool) across varying chat templates in RLHF.

### 4. Key PR Progress
**GRPO & Core RLHF Updates:**
*   **[PR #6139](https://github.com/huggingface/trl/pull/6139):** Solves the colocate PEFT hanging issue by introducing a process group barrier before `llm.generate`, ensuring compatibility across non-NVLink hardware.
*   **[PR #6140](https://github.com/huggingface/trl/pull/6140):** Adds entropy regularization to GRPO to encourage exploration and prevent deterministic policy collapse. 
*   **[PR #6125](https://github.com/huggingface/trl/pull/6125):** Fixes misleading docstrings in the GRPO train sampler regarding `num_iterations > 1` behavior.

**AsyncGRPO & Agentic RL Push:**
*   **[PR #5937](https://github.com/huggingface/trl/pull/5937):** Implements **sparse delta weight synchronization**. Instead of broadcasting the full policy, it only encodes changed bf16 weights to vLLM, massively optimizing network I/O.
*   **[PR #6001](https://github.com/huggingface/trl/pull/6001) & [PR #6002](https://github.com/huggingface/trl/pull/6002):** Introduces multi-environment support, allowing batch-time tool dict pooling and per-example environment selection.
*   **[PR #6136](https://github.com/huggingface/trl/pull/6136):** Fixes a bug where async rollout workers failed to initialize `functools.partial` reward functions lacking a `__name__` attribute.

**General Enhancements:**
*   **[PR #5829](https://github.com/huggingface/trl/pull/5829):** SFT memory optimization. Replaces a hardcoded chunk size in the NLL (Negative Log-Likelihood) calculation with a configurable parameter, significantly reducing memory spikes for large-vocabulary models (e.g., Qwen ≥64k vocab).

### 5. Why This Project Matters in Today's RL Landscape
The TRL ecosystem is rapidly evolving from standard PPO/DPO pipelines into the definitive open-source standard for **Agentic RLVR (Reinforcement Learning with Verifiable Rewards)**. The current development focus on **AsyncGRPO**, lightweight weight synchronization (sparse delta patches), and native tool-calling/environment switching demonstrates a clear pivot toward training large language models to interact with external tools efficiently. Furthermore, by actively solving scaling bottlenecks across diverse hardware architectures—ranging from standard NVLink clusters and FSDP2 to alternative NPU silicon like Ascend 910B—TRL is solidifying its position as the most accessible, production-ready framework for enterprise-scale reinforcement learning.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL daily digest for OpenRLHF based on the provided GitHub data.

### 1. Today's Highlights
*   **Quiet Issue Tracker:** Zero new issues or updates in the last 24 hours, indicating a period of stability or a shift of active discussions to other channels.
*   **Tool-Use Refinement:** The primary activity centers around a technical bug fix for multi-turn reinforcement learning and tool-integration training, addressing how response lengths are calculated.

### 2. Releases
*   **No New Releases:** No new versions were published in the last 24 hours. The project is currently in a development or stabilization phase.

### 3. Important Issues
*   **None:** The issue tracker saw no activity. However, it is worth noting that PR [#1255](https://github.com/OpenRLHF/OpenRLHF/pull/1255) actively resolves issue #1243, bringing a long-standing multi-turn training bug to a close.

### 4. Key PR Progress
*   **[OPEN] [PR #1255](https://github.com/OpenRLHF/OpenRLHF/pull/1255): fix: use action_mask.sum() for response_length to exclude tool-call tokens in multi-turn training**
    *   **Author:** KamayaniR
    *   **Activity:** Updated on 2026-06-22.
    *   **Technical Impact:** This PR fixes a critical calculation flaw in the `_process_response_into_experience` pipeline. Previously, `response_length` was computed as the absolute span between the first and last action tokens. In multi-turn scenarios, this span erroneously included intermediate tool-call tokens. The fix replaces the span calculation with `action_mask.sum()`, ensuring that only actual model action tokens contribute to the response length. This is vital for accurate Advantage/Return normalization and advantage estimation in PPO/Ray-based RL pipelines.

### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF (Reinforcement Learning from Human Feedback) landscape—increasingly dominated by reasoning models and complex Agentic workflows—training pipelines must support multi-turn interactions with external tools. 

Historically, standard RL frameworks struggled with sparse rewards and context length explosions when models call external APIs (e.g., Python interpreters or search engines). OpenRLHF remains a critical open-source infrastructure because it directly addresses these distributed training bottlenecks. The technical refinement in PR [#1255](https://github.com/OpenRLHF/OpenRLHF/pull/1255) perfectly exemplifies this: precise token masking is foundational for correct credit assignment. By properly isolating model actions from system/tool tokens during the experience collection phase, OpenRLHF enables accurate policy gradient updates, solidifying its position as an enterprise-grade framework for modern, tool-augmented LLMs.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the daily reinforcement learning ecosystem digest for **verl** (github.com/volcengine/verl) on 2026-06-23.

### 1. Today's Highlights
* **Asynchronous RL & Agentic Tooling Take Center Stage:** The majority of today's updates target `fully_async_policy` optimizations (fixing idle ratios and replay queues) and extending support for complex agent loops, including multimodal continuous tokens.
* **Hardware & Infrastructure Expansion:** Significant progress in expanding hardware compatibility, notably a massive push for Ascend NPU CI baselines, alongside large-scale training scripts (e.g., Qwen3.5-122B).
* **Community Engagement:** High active maintenance with 24 PRs updated and 19 Issues processed in the last 24 hours, continuing the project's rapid iteration cycle.

### 2. Releases
* **No new releases** were published in the last 24 hours. The ecosystem remains focused on merging upstream feature branches into `main`.

### 3. Important Issues
* **Asynchronous Training Bottlenecks:** 
  * Issue [#6693](https://github.com/volcengine/verl/issues/6693) reports that `fully_async` idle ratios are misleadingly close to 0, resulting in worse performance than synchronous setups.
  * Issue [#6780](https://github.com/volcengine/verl/issues/6780) notes that on-policy mode in `fully_async_policy` converges differently (much faster) than standard `main_ppo`, raising questions about baseline parity.
* **Agentic Rollouts & Tool Calling Hangs:** 
  * Issue [#340](https://github.com/volcengine/verl/issues/340) details a critical hang (GPU stuck at 100% utilization) when attempting to implement tool calling with vLLM logits processors.
  * Issue [#6801](https://github.com/volcengine/verl/issues/6801) reports chunk division errors when configuring multi-worker agent loops.
* **Algorithmic & Scaling Struggles:** 
  * Issues [#6810](https://github.com/volcengine/verl/issues/6810) and [#6811](https://github.com/volcengine/verl/issues/6811) highlight OOM errors and accuracy collapse (dropping to 0) during late-stage OPD (On-Policy Distillation) using Megatron.
  * Issue [#311](https://github.com/volcengine/verl/issues/311) reports NaN occurrences specifically during multi-node training setups.

### 4. Key PR Progress
* **Advanced Agentic Rollouts:** 
  * [PR #6804](https://github.com/volcengine/verl/pull/6804) introduces Multimodal Continuous Tokens for `AgentLoop`, enabling vision-language encoding within multi-turn tool calls. 
  * [PR #6779](https://github.com/volcengine/verl/pull/6779) (recently closed/merged) laid the foundation for this by adding the base Continuous Token architecture.
* **Asynchronous RL Fixes:** 
  * [PR #6798](https://github.com/volcengine/verl/pull/6798) directly addresses the idle ratio bug (Issue #6693) by introducing `accumulated_idle_time`.
  * [PR #6684](https://github.com/volcengine/verl/pull/6684) fixes a bug where learning rates were artificially set to 0 in async trainer initialization. [PR #6809](https://github.com/volcengine/verl/pull/6809) adds replay buffer backpressure.
* **New Algorithms & Determinism:** 
  * [PR #6731](https://github.com/volcengine/verl/pull/6731) adds official support for **CPPO** (Cumulative Prefix-divergence Policy Optimization) for tighter trust regions in autoregressive RL.
  * [PR #6572](https://github.com/volcengine/verl/pull/6572) brings full bitwise determinism to vLLM rollouts and reward model inference.
* **Hardware Specifics (Ascend NPU):** Heavy CI and refactoring work for Ascend chips, including fault isolation patches ([PR #6777](https://github.com/volcengine/verl/pull/6777)) and massive model scaling ([PR #6807](https://github.com/volcengine/verl/pull/6807) for Qwen3.5-122B).

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily from static pre-training to reasoning and agentic workflows, **verl** has positioned itself as a critical open-source bridge between research algorithms and production-scale infrastructure. Today's digest reveals two major strategic advantages of the project:

1. **Solving the Agentic Bottleneck:** By actively implementing features like multimodal continuous tokens and asynchronous rollout queues, verl is solving the distributed systems challenges of multi-turn tool-calling (e.g., dealing with environment latency and variable response lengths), which standard RLHF libraries struggle to support.
2. **Hardware Agnosticism at Scale:** The continuous addition of Ascend NPU patches, fault isolation, and optimized distributed training (Megatron/FSDP) proves verl is not just an Nvidia-centric tool. It provides a unified abstraction layer for training 100B+ parameter models efficiently across diverse hardware clusters.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# 🧠 Open-Instruct RL Daily Digest
**Date:** 2026-06-23

### 1. Today's Highlights
Activity in the `open-instruct` repository over the past 24 hours has been minimal but highly technical. The sole update is a newly opened issue investigating a silent regression in SFT loss reduction that is causing severe learning rate (LR) miscalibration and gradient accumulation errors. No new pull requests, releases, or code merges were recorded.

### 2. Releases
*   **No new releases** in the last 24 hours.
*   *Latest stable versions remain unchanged.*

### 3. Important Issues
*   🚨 **#1728 [OPEN]** [`reduce_loss=sum` removed in #1024 without deprecation warning: LR miscalibration and mean-of-microbatch-means under gradient accumulation](https://github.com/allenai/open-instruct/issues/1728)
    *   **Author:** llabat
    *   **Summary:** A reproducibility deep-dive into Tulu 3 SFT (Llama-3.1-8B). The author identifies that PR #1024 silently removed the `reduce_loss=sum` parameter. This change causes the training pipeline to incorrectly normalize loss as a "mean of microbatch means" when scaling gradient accumulation steps. Consequently, reported hyperparameters from the Tulu 3 paper (Section 4.3.2) result in actual learning rates that are miscalibrated, leading to significant performance degradation. 
    *   **Impact:** High. Accurate gradient accumulation and LR scaling are foundational for reproducible SFT/RL pipelines. This issue warrants immediate attention from repository maintainers.

### 4. Key PR Progress
*   **No active PR updates** in the last 24 hours. 
*   *Note:* Issue #1728 explicitly references historical PR #1024 as the root cause of the current calibration regression. A patch PR addressing the loss normalization logic is anticipated.

### 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO) landscape, Supervised Fine-Tuning (SFT) remains the critical foundational step before preference alignment. `open-instruct` (the engine behind AI2's Tulu models) is a flagship open-source ecosystem for transparent, reproducible post-training. 

However, Issue #1728 perfectly illustrates a systemic challenge in the modern open-source RL stack: **silent infrastructure regressions**. As models scale to 8B+ parameters and compute is parallelized, subtle changes to tensor operations (like shifting from `sum` to `mean` loss reduction) drastically alter gradient signals. In RL workflows, where reward signal calibration is already notoriously brittle, compounding these silent errors during the initial SFT phase invalidates downstream alignment benchmarks. Maintaining strict, version-controlled integrity over hyperparameter scaling is essential for the community to continue pushing the boundaries of open-weight models.

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

# 📖 RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-06-23

### 1. Today's Highlights
The Gymnasium repository experienced a highly quiet day, with zero new user-reported issues and no new core library releases. The sole repository activity consists of routine CI/CD maintenance, specifically automated dependency bumping. This low-activity period indicates architectural stability for the standard RL API.

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **None.** There were 0 issues created or updated within the last 24 hours, suggesting no immediate community-reported bugs or breaking changes requiring triage.

### 4. Key PR Progress
*   **[OPEN] PR #1591: [dependencies, github_actions] Bump actions/checkout from 6 to 7** 
    *   **Author:** `dependabot[bot]`
    *   **Summary:** An automated pull request to upgrade the repository's GitHub Actions `checkout` workflow dependency from version 6 to the newly released v7.0.0. 
    *   **Link:** [Farama-Foundation/Gymnasium PR #1591](https://github.com/Farama-Foundation/Gymnasium/pull/1591)

### 5. Why This Project Matters in Today's RL Landscape
Developed by the Farama Foundation, Gymnasium remains the de facto standard API for environment interactions in modern Reinforcement Learning. By maintaining a unified, strictly versioned interface between agents and environments, it prevents API fragmentation across the ecosystem. Even on uneventful days like today, routine infrastructure maintenance—such as keeping CI/CD pipelines (via GitHub Actions) perfectly up to date—ensures that the library's massive testing matrix remains reliable for thousands of downstream RL projects, from academic research to applied deep RL.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>