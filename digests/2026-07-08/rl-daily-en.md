# RL Open Source Daily Digest 2026-07-08

> Generated: 2026-07-07 22:21 UTC | Projects covered: 15

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
The July 8, 2026 digest reveals a clear bifurcation in the RL open-source ecosystem. Activity is heavily concentrated in large-scale LLM alignment frameworks (verl, TRL, AReaL, slime, ROCK) and standard multi-agent/environment APIs (PettingZoo). Meanwhile, traditional RL libraries (CleanRL, Stable Baselines3, Tianshou, rl_games) and some alignment frameworks (OpenRLHF, torchtune) experienced zero activity. The active projects are overwhelmingly focused on solving distributed systems bottlenecks: heterogeneous hardware support, disaggregated rollouts, and memory-efficient colocated training.

## Activity Comparison
| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 54 | 38 | 0 | Preparing v0.8.0; scaling DeepSeek V4/Qwen3.5; Ascend NPU maturation. |
| **TRL** | 3 | 7 | 0 | Architectural cleanup; async GRPO & distillation; VLM token bugs. |
| **AReaL** | 3 | 11 | 0 | Colocated training (AWEX); self-evolving agent memory; FP8 weight sync. |
| **slime** | 1 | 15 | 0 | CUDA 13 fixes; Mooncake RDMA; disaggregated rollouts & REINFORCE. |
| **ROCK** | 3 | 5 | 0 (v1.10.0 imminent) | Sandbox lifecycle stability; OpenSandboxOperator; Harbor integration. |
| **PettingZoo** | 1 | 3 | 0 | API alignment with Gymnasium; Python 3.14 prep; video wrappers. |
| **Open Instruct**| 1 | 1 | 0 | SFT loss calibration debate; CPU-Adam offloading for GRPO. |
| **Gymnasium** | 0 | 1 | 0 | Quiet period; documentation UX improvements. |
| **ROLL** | 1 | 0 | 0 | RFC for Ascend NPU / MindSpeed CI pipeline. |
| **Others** | 0 | 0 | 0 | *CleanRL, OpenRLHF, rl_games, SB3, Tianshou, torchtune* reported no activity. |

## Shared Research & Engineering Directions
**Research Signals:**
*   **Algorithmic Diversification in LLM RL:** Frameworks are expanding beyond PPO/GRPO. `slime` reintroduced classic REINFORCE, while `TRL` and `AReaL` are pushing On-Policy Distillation (OPD) and cross-tokenizer knowledge transfer.
*   **Self-Evolving & Agentic RL:** `AReaL` introduced RFCs for evidence-grounded memory ledgers for self-evolution, while `TRL` is standardizing environment-owned reward logic to support complex, multi-tool agentic workflows.

**Engineering & Infrastructure Signals:**
*   **Disaggregated & Async Rollouts:** Decoupling inference from training is a top priority. `verl` (NIXL/Mooncake), `slime` (`/pull_weights`), and `AReaL` (AWEX) are all independently implementing architectures to eliminate phase-change bubbles and yield GPU control dynamically.
*   **Heterogeneous Hardware & Alt-Compute:** Escaping NVIDIA vendor lock-in is accelerating. `verl` and `ROLL` are heavily targeting Huawei Ascend NPUs, while `slime` and `Open Instruct` are fixing memory/CPU offloading to broaden hardware accessibility.
*   **Memory & VRAM Optimization:** High-throughput RL is hitting VRAM ceilings. `verl` fixed CUDA-IPC VRAM leaks, `AReaL` enabled direct FP8 weight transfers, and `TRL` implemented sparse delta-weight synchronization.

## Differentiation Analysis
*   **Scale & Hardware Abstraction (`verl`, `ROLL`):** These projects differentiate by targeting massive, hyperscale deployments. Their focus on alt-hardware (Ascend NPUs) and deep integration with Megatron-Core positions them as orchestration layers for frontier models.
*   **Applied Alignment & Ecosystem Integration (`TRL`, `Open Instruct`):** TRL focuses on developer experience and HuggingFace ecosystem unification (e.g., shared tokenization, AsyncGRPO via HF Buckets), whereas Open Instruct prioritizes strict academic reproducibility (Tulu 3) and accessible compute (CPU-Adam).
*   **Colocation & Systems Innovation (`AReaL`, `slime`):** Both are acting as production testbeds for cutting-edge infra. `AReaL` is carving a niche in self-evolving agent infrastructure and AWEX colocation, while `slime` focuses on high-throughput interconnects (Mooncake RDMA) and engine topology decoupling.
*   **Environment & Sandbox Orchestration (`ROCK`, `PettingZoo`, `Gymnasium`):** While LLM frameworks handle model training, ROCK focuses on the massive, ephemeral container orchestration required for agentic tool-use evaluation. PettingZoo and Gymnasium maintain the foundational APIs for both traditional and multi-agent RL.

## Community Momentum & Maturity
*   **Maturation via Cleanup:** `TRL` and `Gymnasium` show signs of maturity by prioritizing architectural debt (removing `GFPOTrainer`, consolidating tokenizers) and UX documentation over raw feature accumulation.
*   **Release Cadence & Stability:** `verl` (v0.8.0) and `ROCK` (v1.10.0) are actively stabilizing their codebases. `ROCK`’s focus on fixing sandbox lifecycle hangups highlights that distributed RL reliability now hinges on DevOps and container orchestration as much as algorithmic correctness.
*   **Standardization Push:** `PettingZoo`’s push for a Gymnasium-like registry underscores a community demand for unified APIs, lowering the barrier for cross-library MARL research.

## Trend Signals
*   **Disaggregated Inference is Becoming Default:** The transition from colocated training/rollout to disaggregated, KV-cache-aware architectures (NIXL, Mooncake, TransferQueue) is rapidly moving from research to standard implementation.
*   **The Rise of Alt-Hardware in RL:** The explicit targeting of Huawei Ascend NPUs across multiple major frameworks (`verl`, `ROLL`) signals a concrete shift toward heterogeneous compute clusters in response to GPU shortages.
*   **RL Moving Upstack to Agents:** Frameworks are beginning to natively support agentic paradigms—managing external tool environments, evidence-based memory, and environment-owned rewards—signaling that RL is pivoting from alignment tuning toward autonomous agent self-improvement.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**Reinforcement Learning Open-Source Digest: ROLL (alibaba/ROLL)**
**Date:** 2026-07-08

Here is the daily analytical brief for the ROLL ecosystem based on the last 24 hours of GitHub activity.

### 1. Today's Highlights
The ROLL ecosystem is currently in an architectural maturation phase, specifically targeting hardware and framework interoperability. The sole update in the past 24 hours is a strategic Request for Comments (RFC) to establish a Continuous Integration (CI) pipeline for Ascend NPU and MindSpeed/Megatron integrations. No new code was merged or released today, indicating a focus on developer discussion and infrastructure hardening.

### 2. Releases
**None.** 
There have been 0 new releases in the last 24 hours. The project is currently maintaining its existing version baseline.

### 3. Important Issues
*   **[RFC] Add MindSpeed/Megatron Unit Test CI Pipeline** ([alibaba/ROLL #472](https://github.com/alibaba/ROLL/issues/472))
    *   **Author:** UsernameFull
    *   **Status:** Open (Created/Updated: 2026-07-07)
    *   **Analysis:** As ROLL expands its compatibility with Huawei's Ascend NPU ecosystem (via `torch-npu`) and heavily adopts Megatron-Core/MindSpeed for large-scale model training (handling offloading, state updates, and checkpointing), the complexity of the codebase is increasing. This RFC is a critical step toward ensuring CI/CD stability and preventing regressions when operating across heterogeneous hardware environments (NVIDIA vs. Ascend). 

### 4. Key PR Progress
**None.** 
There were 0 pull requests updated or merged in the last 24 hours. The engineering focus currently appears to be on design discussions and infrastructure planning rather than feature merging.

### 5. Why This Project Matters in Today's RL Landscape
In the contemporary Reinforcement Learning from Human Feedback (RLHF) and Large Language Model (LLM) training landscape, reliance on a single hardware vendor creates severe scaling bottlenecks. ROLL (Rethinking Open-scaling LLMs) represents a vital shift toward **hardware-agnostic RL frameworks**. 

By actively integrating Ascend NPU runtimes and Megatron-Core adapters into its architecture, ROLL provides the RL community with a viable path to train massive models on heterogeneous and alternative compute clusters. As RL workloads become increasingly compute-bound during the alignment phase of LLMs, projects that seamlessly bridge high-level RL algorithms with low-level hardware optimizations (like checkpoint handling and layer offloading) are fundamental to the sustainability of open-source AI development.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for ROCK.

# ROCK RL Daily Digest — 2026-07-08

## 1. Today's Highlights
Yesterday's development was heavily focused on **infrastructure stability and backend scalability**. The team successfully resolved critical blockers related to sandbox lifecycle management (including archiving halts and Alpine OS compatibility) and merged support for Harbor verifier environments. Additionally, steps were finalized to tag the upcoming `v1.10.0` release.

## 2. Releases
No official releases were published in the last 24 hours. However, PR [#1222](https://github.com/alibaba/ROCK/pull/1222) was opened to add the release notes for `v1.10.0`, indicating an official tag is imminent.

## 3. Important Issues
Three notable issues were closed, clearing the path for the new release:
*   **[CLOSED] Sandbox stuck in ARCHIVING state (#1216):** A critical bug where sandboxes hung indefinitely during the archiving lifecycle phase due to empty remote status queries from the Ray backend. ([Source](https://github.com/alibaba/ROCK/issues/1216))
*   **[CLOSED] Alpine/musl sandbox startup failure (#1206):** Sandboxes failed to boot on customized Alpine images with inconsistent APK databases because `set -o errexit` forcefully terminated the entrypoint script. ([Source](https://github.com/alibaba/ROCK/issues/1206))
*   **[CLOSED] Missing Harbor verifier env config (#1221):** ROCK's job YAML lacked the `verifier.env` field, preventing users from passing environment variables via Harbor's native configuration structure. ([Source](https://github.com/alibaba/ROCK/issues/1221))

## 4. Key PR Progress
*   **[MERGED/CLOSED] feat: support Harbor verifier env config ([#1220](https://github.com/alibaba/ROCK/pull/1220)):** Adds the `verifier.env` field to the Harbor verifier config mirror and ensures TypeScript and Python SDK schemas remain aligned. 
*   **[MERGED/CLOSED] fix(archive): RayOperator archiving state ([#1218](https://github.com/alibaba/ROCK/pull/1218), [#1217](https://github.com/alibaba/ROCK/pull/1217)):** Adds the `get_remote_status` override to `RayOperator` so the ARCHIVING lifecycle can successfully advance.
*   **[MERGED/CLOSED] fix(rocklet): bash installation in musl containers ([#1219](https://github.com/alibaba/ROCK/pull/1219), [#1207](https://github.com/alibaba/ROCK/pull/1207)):** Implements logic to skip `apk add bash` if bash is already present, bypassing corrupted APK database errors.
*   **[OPEN] feat(operator): add OpenSandboxOperator lifecycle backend Phase 1 ([#1203](https://github.com/alibaba/ROCK/pull/1203)):** A major architectural step that introduces OpenSandbox as a new ROCK backend via its official Python SDK. Phase 1 specifically delivers the lifecycle management seam.
*   **[OPEN] fix(sdk): parse BashJob reward results ([#1215](https://github.com/alibaba/ROCK/pull/1215)):** Refactors the SDK to discover and parse `result.json` from Bash job artifacts, establishing a shared reward-protocol result model.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from isolated research scripts into scalable, production-grade pipelines (especially for training LLMs), **infrastructure reliability** becomes the primary bottleneck. 

ROCK’s latest updates highlight exactly what RL engineers are currently prioritizing:
1.  **Distributed Backend Scalability:** The introduction of the `OpenSandboxOperator` and fixes to Ray archiving states show a strong push toward decoupled, resilient compute backends. RL training loops require spawning thousands of ephemeral environments; lifecycle hangups can waste massive amounts of GPU hours.
2.  **Cross-Platform Container Compatibility:** Fixing Alpine/musl image support acknowledges the RL community's need for minimal-footprint Docker images to reduce overhead during massive parallel rollouts. 
3.  **Unified Tooling:** Aligning ROCK's internal job definitions with ecosystem tools like Harbor (and unifying SDK schemas) reduces engineering friction, allowing practitioners to focus on reward design and policy optimization rather than DevOps and YAML configuration management.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily reinforcement learning ecosystem digest for **slime** (THUDM/slime) on 2026-07-08.

### 1. Today's Highlights
The slime repository saw high maintenance and feature development activity today, with 21 pull requests updated. Key themes include resolving a critical CUDA 13 memory offload crash, introducing foundational RL algorithms (REINFORCE), hardening off-policy distillation, and significant infrastructure scaling improvements (RDMA transport, disaggregated weight pulling, and HTTP connection pooling). 

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **[#2186](https://github.com/THUDM/slime/issues/2186) [bug] `offload_train` train worker dies on CUDA 13**
    *   **Context:** When using `--offload-train` with the Megatron backend on CUDA 13, the `torch_memory_saver` `LD_PRELOAD` crashes while trying to load `libcudart.so.12`. The bug stems from `actor_group.py` selecting the `.so` file based on a hardcoded filename list rather than detecting the actual active CUDA runtime.

### 4. Key PR Progress
**Memory & Infrastructure Scaling**
*   **[#2187](https://github.com/THUDM/slime/pull/2187):** Fixes the aforementioned CUDA 13 crash by dynamically selecting the `torch_memory_saver` `LD_PRELOAD` library based on the runtime CUDA version instead of filename precedence.
*   **[#1709](https://github.com/THUDM/slime/pull/1709):** Adds Mooncake RDMA transport support for transferring rollout data, a critical step for scaling multi-node inference bandwidth.
*   **[#2181](https://github.com/THUDM/slime/pull/2181) [CLOSED]:** Implements engine-side `/pull_weights` for disaggregated rollout architectures, successfully removing engine topology leaks from the slime core.
*   **[#2068](https://github.com/THUDM/slime/pull/2068):** Secures rollout engine and router HTTP calls with bearer `Authorization` headers.
*   **[#2069](https://github.com/THUDM/slime/pull/2069):** Optimizes agentic rollout stability by pooling the SGLang `aiohttp.ClientSession` across turns rather than opening fresh connections.

**RL Algorithms, Loss & Metrics**
*   **[#2083](https://github.com/THUDM/slime/pull/2083):** Adds the classic `REINFORCE` advantage estimator, utilizing GRPO group-normalized advantages with an additive surrogate (`-A * log pi_theta`) and no clipping.
*   **[#2084](https://github.com/THUDM/slime/pull/2084):** Introduces an off-policy Importance Sampling (IS) correction hook, feeding the current grad-carrying log-probs alongside frozen rollout log-probs into the TIS correction.
*   **[#2085](https://github.com/THUDM/slime/pull/2085):** Fixes On-Policy Distillation (OPD) by scoring teacher log-probs at `rollout_temperature` instead of a hardcoded `0`, aligning the reverse-KL math with student temperature scaling.
*   **[#2090](https://github.com/THUDM/slime/pull/2090):** Refactors policy gradient (`pg_loss`) normalization to natively support prompt-group and fixed-divisor aggregation modes.
*   **[#2062](https://github.com/THUDM/slime/pull/2062):** Fixes GRPO baseline calculations to evaluate the rollout as a single unit, correctly handling fanned/uneven rollout group structures.
*   **[#2114](https://github.com/THUDM/slime/pull/2114):** Cleans up PPO reward tensor construction to be out-of-place, preserving raw KL divergence data for accurate rollout logging.

**Rollout & Training Scheduling**
*   **[#2015](https://github.com/THUDM/slime/pull/2015):** Redesigns `RolloutServer.offload()` as a three-phase transition (pause, flush, release) to prevent memory faults before KV-cache restoration. 
*   **[#2059](https://github.com/THUDM/slime/pull/2059):** Adds retry logic for transient Ray `ActorUnavailableError`s during SGLang engine bringup.
*   **[#2065](https://github.com/THUDM/slime/pull/2065):** Improves DP scheduling by gracefully dropping trailing rollouts when aligned micro-batch targets exceed actual sample counts.
*   **[#2109](https://github.com/THUDM/slime/pull/2109):** Adds support for an eval-only mode (`--num-rollout 0`) by clamping Megatron scheduler steps to a minimum of 1.

### 5. Why This Project Matters in Today's RL Landscape
As large language models push toward complex reasoning and agentic capabilities, frameworks must bridge the gap between traditional Deep Learning training and dynamic inference. **slime** serves as a critical production-grade testbed for cutting-edge post-training infrastructure. 

Today's PR activity demonstrates exactly what modern RL engineering requires: 
1. **Algorithmic Flexibility:** Supporting everything from REINFORCE to GRPO, PPO, and On-Policy Distillation within a single codebase.
2. **Hardware Resiliency:** Grappling with the realities of next-gen hardware (e.g., hotfixing CUDA 13 memory management issues).
3. **Decoupled Scaling:** Pushing toward disaggregated rollout architectures (separating inference engines from training nodes) and leveraging high-throughput interconnects like Mooncake RDMA.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily digest for the AReaL project.

### 1. Today's Highlights
Activity in the last 24 hours focused heavily on **colocated training optimizations** and **infrastructure stability**. We are seeing a strong push towards efficient GPU memory management (especially for Megatron and FP8), SGLang inference server protocol enhancements, and the initial architectural groundwork for self-evolving agents. 

### 2. Releases
**None.** 
No new releases were published in the last 24 hours. The project continues to iterate on its `main` branch via 24 active PRs.

### 3. Important Issues
*   **[Roadmap] 2026 H2 Milestones** ([Issue #1381](https://github.com/areal-project/AReaL/issues/1381)): The official H2 2026 roadmap tracker remains a hub for community discussion, specifically calling for contributions on upcoming engine and workflow enhancements.
*   **Evidence-grounded Memory Service for self-evolving agents** ([Issue #1490](https://github.com/areal-project/AReaL/issues/1490)): A newly opened RFC proposing a backward-compatible memory service. This aims to give RL agents an immutable evidence ledger to ground their self-evolution, addressing a planned but unstarted item from the H2 roadmap.
*   **RolloutControllerV2 drops workflow statistics during export** ([Issue #1477](https://github.com/areal-project/AReaL/issues/1477)): Closed. A consistently reproducible bug where `export_stats()` returned an empty dictionary, causing metrics like reward to be lost during logging, has been resolved.

### 4. Key PR Progress
*   **Self-Evolving Agent Infrastructure:** [PR #1491](https://github.com/areal-project/AReaL/pull/1491) introduces the first primitive for the aforementioned Memory Service—an immutable evidence value object and deterministic in-memory reference store.
*   **Colocated Training & Weight Syncing:** Significant progress in shared-GPU actor/rollout architectures:
    *   [PR #1492](https://github.com/areal-project/AReaL/pull/1492) adds SGLang `abort-all` and tagged offload protocol primitives to allow inference servers to fully yield GPU control during weight updates.
    *   [PR #1493](https://github.com/areal-project/AReaL/pull/1493) implements the API allocation grammar needed for AWEX-based colocated training.
    *   [PR #1406](https://github.com/areal-project/AReaL/pull/1406) enables direct FP8 weight transfer in AWEX colocate mode for Megatron, bypassing costly BF16 dequantization.
*   **GPU Memory & Hardware Utilization:** 
    *   [PR #1489](https://github.com/areal-project/AReaL/pull/1489) caps GPU peak memory usage during HuggingFace format saves by stashing weights on CPU and eagerly releasing gather buffers.
    *   [PR #1428](https://github.com/areal-project/AReaL/pull/1428) introduces opt-in W&B logging for worker-side GPU system metrics, fixing a blind spot in single-controller setups.
*   **Bug Fixes & Robustness:** 
    *   [PR #1478](https://github.com/areal-project/AReaL/pull/1478) (Closed) fixes the local workflow statistics export bug from Issue #1477.
    *   [PR #1488](https://github.com/areal-project/AReaL/pull/1488) patches an FSDP bug to properly cast fp32 master weights to compute dtype during AWEX weight sync.
    *   [PR #1427](https://github.com/areal-project/AReaL/pull/1427) fixes a subtle but critical SFT loss-mask boundary error for merged tokens in BPE tokenizers (e.g., GSM8K).
*   **Distillation & Scheduling:** [PR #1452](https://github.com/areal-project/AReaL/pull/1452) adds cross-tokenizer on-policy distillation (e.g., LLaMA $\rightarrow$ Qwen), and [PR #1441](https://github.com/areal-project/AReaL/pull/1441) introduces a new HTTP-based Ray scheduler utilizing subprocess-managed RPC workers.

### 5. Why This Project Matters in Today's RL Landscape
As RLHF and self-play fine-tuning scale to massive parameter sizes, the bottleneck has shifted from pure compute to **distributed systems orchestration**. AReaL is directly solving the most pressing infrastructural pain points in modern Large Language Model (LLM) reinforcement learning:

1.  **Agentic Memory & Self-Evolution:** By designing evidence-grounded memory ledgers, AReaL is moving beyond standard RLHF into the realm of continual, self-evolving agents—currently a frontier research area.
2.  **Colocation & Resource Yielding:** Training and inference (rollout) traditionally compete for VRAM. AReaL's focus on AWEX colocated weight syncing, SGLang abort/offload protocols, and FP8 direct transfers places it at the cutting edge of resource-efficient distributed RL.
3.  **Engine-Agnostic Syncing:** PRs targeting FSDP, Megatron, and cross-tokenizer distillation highlight AReaL's commitment to a flexible, heterogeneous training ecosystem, allowing researchers to mix and match architectures (like DeepSeek $\rightarrow$ Qwen) without hardware deadlocks.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the TRL (Transformer Reinforcement Learning) daily digest for July 8, 2026.

### 1. Today's Highlights
*   **Codebase Cleanup & Refactoring:** Major architectural refactoring was merged today, most notably the consolidation of separate tokenization functions across DPO, KTO, SFT, and Reward trainers into a single shared utility. Additionally, the underutilized `GFPOTrainer` has been entirely removed.
*   **RL Environments & Tooling:** Significant progress in agentic RL workflows, including closed PRs for multi-environment routing and an open RFC allowing environments to natively own the reward logic. 
*   **Multimodal Gaps:** Several open issues highlight ongoing struggles with Vision-Language Models (VLMs), specifically token corruption in GRPO+vLLM and the lack of sequence packing support for VLMs in SFT.

### 2. Releases
*   **None** (No new releases in the last 24 hours).

### 3. Important Issues
*   **[OPEN] GRPO + vLLM Multimodal Token Corruption ([#6294](https://github.com/huggingface/trl/issues/6294)):** A critical bug report notes that using `GRPOTrainer` with `use_vllm=True` (colocate mode) and `SmolVLM-Instruct` breaks completions. The root cause is identified as TRL passing processor-expanded multimodal `prompt_token_ids` directly to vLLM.
*   **[OPEN] SFT Packing for VLMs ([#4339](https://github.com/huggingface/trl/issues/4339)):** A feature request to enable sequence packing for Vision-Language Models in `SFTTrainer`, which is currently hardcoded to be disabled based on the processor class. Enabling this would drastically reduce memory overhead for VLM fine-tuning.
*   **[CLOSED] SFTTrainer + Deepspeed Zero3 Empty Adapter Bug ([#4416](https://github.com/huggingface/trl/issues/4416)):** Resolved an issue where training with PEFT/LoRA and Deepspeed Zero3 resulted in an empty (40-byte) `adapter_model.safetensors` file, whereas Zero2 saved it correctly. 

### 4. Key PR Progress
*   **Architectural Cleanup & Unification:**
    *   [PR #6302](https://github.com/huggingface/trl/pull/6302) **(CLOSED):** Factored out four identical `_tokenize` functions from the DPO, KTO, SFT, and Reward trainers into a single shared helper in `data_utils`.
    *   [PR #6309](https://github.com/huggingface/trl/pull/6309) **(CLOSED):** Removed `GFPOTrainer` entirely due to low telemetry usage and high maintenance costs caused by GRPO rewrites. 
*   **Smart Truncation Handling:**
    *   [PR #6320](https://github.com/huggingface/trl/pull/6320) (SFT) & [PR #6321](https://github.com/huggingface/trl/pull/6321) (DPO/KTO) **(OPEN):** Introduced logic to drop examples where truncation removes all completion tokens/labels (e.g., `-100`), preventing zero-loss micro-batches from wasting compute during DDP/FSDP training.
*   **Advanced RL & Agentic Features:**
    *   [PR #6238](https://github.com/huggingface/trl/pull/6238) **(OPEN):** Implements an "environment-owned reward" system, allowing the environment factory to define a `get_reward()` method, making hardcoded `reward_funcs` optional.
    *   [PR #6002](https://github.com/huggingface/trl/pull/6002) **(CLOSED):** Adds per-example environment selection, allowing datasets to route specific examples to specific agentic tool environments.
    *   [PR #5937](https://github.com/huggingface/trl/pull/5937) **(OPEN):** Optimizes `AsyncGRPO` by implementing sparse delta-weight synchronization via HF Buckets, broadcasting only changed bf16 weights to vLLM instead of the full policy.
*   **Experimental Distillation:**
    *   [PR #6237](https://github.com/huggingface/trl/pull/6237) **(OPEN):** Integrates DOPD (Dual On-Policy Distillation) directly into the existing `SDFTTrainer`.
    *   [PR #6191](https://github.com/huggingface/trl/pull/6191) **(OPEN):** Adds IW-OPD (Importance Weighted On-Policy Distillation) as an optional objective, utilizing cached vLLM rollout logprobs.

### 5. Why This Project Matters in Today's RL Landscape
TRL remains the central nervous system for applied LLM alignment. Today's commit activity perfectly reflects the current frontier of Reinforcement Learning: **agentic multi-environment routing**, **async distributed execution (AsyncGRPO)**, and **online distillation**. 

However, the open issues also highlight a major industry bottleneck: **multimodal RL**. As the community shifts toward reasoning in VLMs (like SmolVLM), frameworks are struggling to bridge the gap between Hugging Face text processors and high-throughput inference engines like vLLM. TRL's ongoing work to stabilize VLM token handling and packing will be foundational for the next generation of multimodal reasoning models.

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

Here is the RL daily digest for the `verl` (volcengine/verl) ecosystem.

# 📊 RL Daily Digest: verl Ecosystem
**Date:** 2026-07-08  
**Activity (Last 24h):** 🟢 54 Issues Updated | 🔀 38 PRs Updated | 📦 0 New Releases

---

### 1. Today's Highlights
* **Next-Gen Model Support:** Major PR progress for DeepSeek V4 (#6473) and Qwen3.5 397B (#6970) training, pushing the boundaries of large-scale GRPO.
* **Ascend Ecosystem Maturation:** A massive influx of PRs targeting Huawei Ascend NPU support, including FSDP2 nightly CI tests (#6956) and environment stabilization for the upcoming verl 0.8.0 release (#6955, #6970).
* **Rollout & Async Optimization:** Introduction of TransferQueue for fully asynchronous training (#6628) and pluggable, KV-cache-aware routing for disaggregated rollouts (#6712).

### 2. Releases
No new releases were recorded in the last 24 hours. However, PRs indicate active preparation for the **v0.8.0 release**, particularly regarding Docker container adaptations (#6955).

### 3. Important Issues
**Performance & Resource Bottlenecks**
* [**Issue #3114**](https://github.com/volcengine/verl/issues/3114) **[OPEN]:** A critical performance issue where GPU utilization drops to 0% during async generation with `SingleTurnAgentLoop` and sglang. This highlights ongoing friction in multi-turn agent deployment.
* [**Issue #1865**](https://github.com/volcengine/verl/issues/1865): Poor multi-node scaling acceleration ratios (140h on 1 node vs 90h on 3 nodes) during Qwen3-32B GRPO training, likely related to Ray's underlying networking support.
* [**Issue #1684**](https://github.com/volcengine/verl/issues/1684): Sudden Ray OOM (Out of Memory) crashes after days of training, pointing to potential memory leaks in long-running distributed tasks.

**Architecture & Training Paradigms**
* [**Issue #6383**](https://github.com/volcengine/verl/issues/6383) **[OPEN]:** An RFC proposing a **KV-cache-aware request load balancer** for rollout servers, shifting away from pure in-flight request counting to optimize prefix-cache hit rates.
* [**Issue #1825**](https://github.com/volcengine/verl/issues/1825): Community inquiry into supporting **StreamRL** (disaggregated asynchronous generation) to minimize RLHF phase-change bubbles—a paradigm verl is actively exploring.
* [**Issue #1863**](https://github.com/volcengine/verl/issues/1863): Questions regarding the integration of memory-efficient GRPO techniques (similar to Unsloth's EfficientGRPO) to bypass large logits memory footprints.

### 4. Key PR Progress
**Advanced Algorithm & Rollout Implementations**
* [**PR #6473**](https://github.com/volcengine/verl/pull/6473) **[OPEN]:** Adds **DeepSeek V4 Flash GRPO** support, including FP8/MXFP4 weight transfer handling via Megatron-Bridge.
* [**PR #6243**](https://github.com/volcengine/verl/pull/6243) **[OPEN]:** Implements vLLM Prefill-Decode disaggregated rollout using **NIXL + Mooncake** wiring, enabling highly scalable heterogeneous inference for RL.
* [**PR #6712**](https://github.com/volcengine/verl/pull/6712) **[OPEN]:** Extracts rollout load balancing into a pluggable router module, executing the vision laid out in Issue #6383.
* [**PR #6628**](https://github.com/volcengine/verl/pull/6628) **[CLOSED]:** Migrates fully async policy data transport from Ray MessageQueue to **TransferQueue (TQ)**, significantly enhancing async training stability.

**Bug Fixes & System Stability**
* [**PR #6958**](https://github.com/volcengine/verl/pull/6958) **[CLOSED]:** Fixes a per-sync VRAM leak in CUDA-IPC bucketed weight transfers by reusing a persistent bucket.
* [**PR #6960**](https://github.com/volcengine/verl/pull/6960) **[CLOSED]:** Resolves a gradient computation flaw in the fused linear-cross-entropy backward pass by enforcing contiguous memory buffers.
* [**PR #6813**](https://github.com/volcengine/verl/pull/6813) **[CLOSED]:** Fixes silent weight corruption in `MooncakeCheckpointEngine` where a daisy-chain completion marker overwrote actual weight data.
* [**PR #6951**](https://github.com/volcengine/verl/pull/6951) **[OPEN]:** Deprecates the vanilla mBridge in favor of standardizing Megatron Bridge as the default backend.

### 5. Why This Project Matters in Today's RL Landscape
As LLM training pivots heavily toward reasoning and agentic capabilities (e.g., GRPO, tool-integrated RLHF), **verl** has established itself as a critical open-source bridge between raw research and production-scale deployment. 

Today's activity perfectly illustrates verl's strategic moat: **deep hardware and inference-backend abstraction**. While the broader ecosystem struggles with inference-training bubbles and hardware vendor lock-in, verl is aggressively merging support for cutting-edge optimization paradigms (like Prefill-Decode disaggregation with NIXL/Mooncake, and TransferQueue-based async pipelines). Furthermore, its simultaneous, robust integration with both top-tier NVIDIA GPUs (DeepSeek V4 FP8/MXFP4) and Huawei Ascend NPUs makes verl the go-to orchestration layer for global, large-scale reinforcement learning in 2026.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is your RL ecosystem daily digest for Open Instruct.

### 1. Today's Highlights
*   **Ecosystem Activity:** Minimal activity in the last 24 hours, with 0 new releases, 0 new issues, and 0 new PRs. 
*   **Sustained Engineering Focus:** Discussions and updates on July 7th centered on two ongoing, highly technical threads: resolving a critical SFT loss-reduction miscalibration ([#1728](https://github.com/allenai/open-instruct/issues/1728)) and expanding hardware accessibility for GRPO via CPU offloading ([#1654](https://github.com/allenai/open-instruct/pull/1654)).

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **[#1728](https://github.com/allenai/open-instruct/issues/1728) [OPEN]** `reduce_loss=sum` removed in #1024 without deprecation warning: LR miscalibration and mean-of-microbatch-means under gradient accumulation
    *   **Author:** llabat (Updated: 2026-07-07 | 👍: 1)
    *   **Analysis:** This is a critical issue for post-training reproducibility. The silent removal of `reduce_loss=sum` in a prior PR breaks strict replications of Tulu 3 SFT. It highlights a common, easily overlooked pitfall in LLM training pipelines: changing loss reduction strategies without adjusting the base Learning Rate leads to severe miscalibration, especially when calculating the mean-of-microbatch-means during gradient accumulation.

### 4. Key PR Progress
*   **[#1654](https://github.com/allenai/open-instruct/pull/1654) [OPEN]** Add use_cpu_adam CLI toggle and offload validation for GRPO
    *   **Author:** Bhavyashah20 (Updated: 2026-07-07)
    *   **Analysis:** This PR addresses a major hardware bottleneck in RL post-training. Running GRPO (Group Relative Policy Optimization) on 7B models typically demands 40–80 GB of VRAM. By introducing a CLI toggle to seamlessly switch from `torch.optim.AdamW` to `DeepSpeedCPUAdam`, this PR democratizes access to advanced RLHF/GRPO workflows, allowing researchers operating on consumer-grade or smaller cluster hardware to participate without hacking the source code.

### 5. Why This Project Matters in Today's RL Landscape
As the foundational framework behind AI2's Tulu models, `open-instruct` serves as a gold standard for reproducible Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF). The current issue tracker reflects the broader realities of the open-source RL landscape in 2026. On one hand, exact reproducibility remains incredibly fragile due to low-level training mechanics like gradient accumulation and loss normalization ([#1728](https://github.com/allenai/open-instruct/issues/1728)). On the other hand, memory-efficient algorithms and aggressive CPU-offloading for compute-heavy RL methods like GRPO ([#1654](https://github.com/allenai/open-instruct/pull/1654)) are vital bridges enabling the wider community to train competitive models outside of massive corporate labs.

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
**Date:** 2026-07-08

### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours was minimal but highly focused on documentation quality. A single PR was updated, which aims to significantly improve the visual onboarding experience for the core Classic Control environments. No new issues or releases were recorded.

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **None:** There were 0 issues opened or updated in the last 24 hours. The project is currently experiencing a quiet period in community troubleshooting and feature requests.

### 4. Key PR Progress
*   **[CLOSED] [PR #1612: Use trained-policy GIFs for classic control environments](https://github.com/Farama-Foundation/Gymnasium/pull/1612)**
    *   **Author:** @aminehd
    *   **Updated:** 2026-07-07
    *   **Summary:** As part of a broader documentation effort (#1610), this PR replaces the existing random-agent GIFs for the five Classic Control environments (e.g., CartPole, MountainCar). The new renders utilize simple policies trained via Stable-Baselines3 (SB3), generated over 300 steps using `docs/_scripts/gen_gifs.py`. 
    *   **Analyst Takeaway:** While only modifying `.gif` assets, this is a high-impact UX improvement. Demonstrating environments being "solved" rather than showing random flailing provides a much clearer baseline of expected RL performance for new practitioners reading the official documentation.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for environment interactions in modern reinforcement learning. While algorithm libraries like Stable-Baselines3, CleanRL, and Ray RLlib iterate rapidly on performance, Gymnasium provides the standardized interface (`step`, `reset`, `observation_space`) that allows these algorithms to be benchmarked apples-to-apples. Documentation updates like PR #1612 are vital for ecosystem health, ensuring that the entry point for RL education—classic control problems—is visually intuitive and seamlessly integrated with major training frameworks like SB3.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL Ecosystem Daily Digest for PettingZoo. 

# 📊 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-08
**Repository:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. Today's Highlights
The past 24 hours show active community contributions focused on aligning PettingZoo’s architecture with its single-agent counterpart, Gymnasium. The spotlight is on user *Trenza1ore*, who submitted a comprehensive proposal and immediate implementation for a Gymnasium-like environment registry, alongside necessary dependency updates for future Python versions.

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **[Proposal] A Gymnasium-like PettingZoo Registry** | [Issue #1387](https://github.com/Farama-Foundation/PettingZoo/issues/1387)
    *   **Author:** Trenza1ore
    *   **Summary:** Proposes the implementation of a Gymnasium-style registry (`make`, `register`, and `spec` functions) without performing a massive underlying refactor. 
    *   **Significance:** Lowering the barrier to entry for MARL (Multi-Agent Reinforcement Learning) practitioners. Aligning PettingZoo's API with Gymnasium's widely adopted standard will significantly improve usability and cross-library compatibility.

### 4. Key PR Progress
*   **feat: add gymnasium-like registry feature** | [PR #1388](https://github.com/Farama-Foundation/PettingZoo/pull/1388)
    *   **Author:** Trenza1ore
    *   **Status:** Updated 2026-07-07
    *   **Summary:** The direct implementation for Issue #1387. It includes the registry feature and accompanying unit tests, with documentation intentionally deferred to a separate PR.
*   **chore: update dependencies in pyproject.toml** | [PR #1389](https://github.com/Farama-Foundation/PettingZoo/pull/1389)
    *   **Author:** Trenza1ore
    *   **Status:** Updated 2026-07-07
    *   **Summary:** Mirrors recent Gymnasium dependency changes, notably switching to `box2d-py` for Python 3.14 (which has source distribution) while keeping `box2d` for Python 3.10–3.13. Ensures the library remains stable for upcoming Python releases.
*   **Add `RecordVideo` wrappers** | [PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306)
    *   **Author:** nightly
    *   **Status:** Updated 2026-07-07
    *   **Summary:** A long-running PR (created Aug 2025) that directly ports the `RecordVideo` wrapper from Gymnasium to both Base and AEC (Agent Environment Cycle) multi-agent environments. This removes the need for users to build custom video recording solutions or rely on third-party wrappers (e.g., SB3, TorchRL).

### 5. Why This Project Matters in Today's RL Landscape
As the Farama Foundation's standard API for Multi-Agent Reinforcement Learning (MARL), PettingZoo serves as the critical multi-agent counterpart to Gymnasium. In today's RL landscape—where algorithmic research is rapidly shifting toward complex, decentralized, and multi-agent systems (like autonomous swarms or LLM-driven agents)—having a unified, standardized API is essential. Today's push for a Gymnasium-like registry and native video recording wrappers highlights the ecosystem's ongoing maturation, prioritizing reproducible research, seamless developer experience (DX), and strict API alignment with single-agent standards.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>