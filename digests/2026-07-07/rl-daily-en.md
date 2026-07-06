# RL Open Source Daily Digest 2026-07-07

> Generated: 2026-07-06 22:23 UTC | Projects covered: 15

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
The July 7, 2026 digest paints a picture of a highly bifurcated Reinforcement Learning (RL) open-source ecosystem. Activity is heavily concentrated in two major domains: **Large Language Model (LLM) alignment infrastructure** and **Environment API standardization**. 

Frameworks like verl, TRL, AReaL, and slime are operating at breakneck speeds, solving complex distributed systems bottlenecks related to disaggregated training and multi-turn agentic workloads. Meanwhile, foundational API libraries like Gymnasium and PettingZoo are in a phase of aggressive maintenance, cleaning up technical debt, and improving developer onboarding via visual documentation. Traditional deep RL frameworks (CleanRL, SB3, rl_games) and specialized platforms (Open Instruct, torchtune) experienced zero activity, highlighting a consolidation of community momentum around LLM-centric and highly scalable distributed RL platforms.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 81 | 33 | 0 | Intense focus on hardware expansion (AMD, Ascend) and disaggregated routing. |
| **TRL** | 15 | 34 | 0 | Maturation of GRPO and agentic workflows; aggressive pruning of legacy code. |
| **ROCK** | 4 | 16 | 0 | Enterprise-scale infrastructure reliability (sandboxing, auto-recovery). |
| **AReaL** | 0 | 11 | 0 | Deep distributed backend optimizations (Megatron, FSDP, memory capping). |
| **Gymnasium** | 2 | 7 | 0 | API modernization (type hinting, physics engine migrations). |
| **slime** | 1 | 9 | 0 | Cross-datacenter rollout disaggregation and multimodal support. |
| **PettingZoo** | 5 | 3 | 0 | Ecosystem cleanup and backend migration to OpenSpiel. |
| **OpenRLHF** | 0 | 2 | 0 | Integration of advanced reward shaping (MRPO) for PPO. |
| **Tianshou** | 0 | 2 | 0 | Codebase refinement and strict `mypy` type enforcement. |
| **ROLL** | 0 | 1 | 0 | Hardware compatibility (Ascend) for multimodal video reading. |
| **Others*** | 0 | 0 | 0 | No notable activity. |

*\*Note: CleanRL, Open Instruct, rl_games, Stable Baselines3, and torchtune reported zero activity in the last 24 hours.*

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Agentic and Multi-Turn RL Maturation:** The ecosystem is rapidly moving beyond single-turn generation. TRL is standardizing environment-owned rewards, verl is optimizing multi-turn tool integration, and AReaL/slime are fixing Multi-Token Prediction (MTP) loss aggregation.
*   **Granular Reward Shaping:** To combat reward hacking and verbosity in reasoning models, projects are implementing process-level rewards. OpenRLHF added step-level MRPO penalties, while TRL introduced length-scaled accuracy and graduated format rewards for GRPO.

**Engineering & Infrastructure Signals**
*   **Disaggregated Rollouts & Delta Weight Syncing:** Training and inference engines are physically decoupling. Both verl and slime are championing "delta weight synchronization" (shipping only changed bytes via disk/NCCL or HTTP endpoints) to eliminate GPU idle time during trainer↔rollout handoffs.
*   **Hardware Diversification (AMD & Ascend):** Breaking NVIDIA's monopoly is a top priority. verl implemented CI/CD for Huawei Ascend NPUs and fixed AMD MI350X MFU tracking, while ROLL transitioned video reading pipelines to be Ascend-compatible.
*   **Extreme Memory & Distributed Optimization:** Frameworks are pushing hardware limits. AReaL capped GPU peak memory during checkpoint saves via CPU offloading, and verl introduced KV-cache-aware routing to prevent starvation in long-tail conversations.

## Differentiation Analysis

*   **Heavy-Scale LLM Alignment vs. Environment APIs:** There is a stark divide between LLM post-training frameworks (verl, TRL, slime, AReaL) battling distributed systems bottlenecks, and traditional RL environment libraries (Gymnasium, PettingZoo) focusing on API parity, physics migrations (Box2D to Pymunk), and user onboarding.
*   **Architecture and Vendor Lock-in:** While TRL and OpenRLHF act as accessible bridges for HF and general PPO/GRPO algorithms, verl and AReaL are positioning themselves as vendor-agnostic, hyper-scalable infrastructure backends. Meanwhile, Alibaba’s ecosystem (ROCK, ROLL) is hyper-specialized in enterprise cloud orchestration (sandbox lifecycle management) and specific hardware optimizations (Ascend A2/A3).
*   **Orchestration vs. Algorithmics:** Projects like Tianshou and Gymnasium represent the classical RL approach—refining API ergonomics and standard Python type enforcement—whereas verl and slime represent the new wave of RL, where the primary engineering challenge is gluing together high-throughput inference engines with distributed training clusters (Megatron/FSDP).

## Community Momentum & Maturity

*   **Aggressive Codebase Pruning:** Multiple projects (TRL, PettingZoo, slime) are demonstrating engineering discipline through ruthless deprecation. TRL removed underutilized trainers (GFPO, PAPO), and PettingZoo is pruning dead environments (TicTacToe, Gin Rummy) to ensure long-term maintainability.
*   **Shifting from Bug Triage to Feature Hardening:** AReaL, slime, and OpenRLHF processed near-zero user issues today. This indicates these projects are operating in highly focused, internal development phases, prioritizing deep backend optimizations over triaging community bugs.
*   **Proactive Ecosystem Revitalization:** Farama-Foundation (Gymnasium, PettingZoo) is actively leveraging community bounties (e.g., $200 for a KAZ policy) and UI overhauls to lower the barrier to entry for new practitioners, ensuring foundational tools remain accessible despite the industry's pivot to complex LLM RL.

## Trend Signals

*   **The Era of Cross-Datacenter RL:** The monolithic RL training cluster is becoming obsolete. Delta weight syncing across physically disaggregated trainer/rollout clusters (as seen in verl and slime) is now a baseline requirement for frontier-scale agentic RL.
*   **Reasoning-Specific Incentives:** As models adopt DeepSeek-style reasoning, standard RLHF is insufficient. The rapid emergence of length-penalty rewards, step-level decay, and multi-token prediction (MTP) targets shows frameworks are directly tailoring algorithms to optimize chain-of-thought trajectories.
*   **Non-NVIDIA Compute Pipelines:** The continuous merging of AMD and Ascend-specific optimizations (FLOPS counters, Docker ulimits, CUDAGraph tuning) signals that enterprise RL pipelines in 2026 are being explicitly designed for heterogeneous, globally diversified compute clusters.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**Reinforcement Learning Open-Source Digest: ROLL (alibaba/ROLL)**
**Date:** 2026-07-07

Here is the daily analytical breakdown of the ROLL (Reinforcement Open Loop Logic) ecosystem activity over the past 24 hours.

### 1. Today's Highlights
*   **Quiet Day for Core Code:** Zero new issues, zero new pull requests, and zero new releases in the last 24 hours.
*   **Recent Infrastructure Maturation:** The most recent significant activity (PR #471, closed yesterday) highlights the project's ongoing push to stabilize hardware compatibility, specifically optimizing video reading pipelines for Huawei Ascend architectures.

### 2. Releases
*   **No new releases.** The repository has not published new version tags in the recent tracking period. 

### 3. Important Issues
*   **None.** The issue tracker saw no updates or new submissions in the last 24 hours. The project currently has no outstanding publicly tracked bugs or feature requests being actively discussed today.

### 4. Key PR Progress
While no new PRs were opened today, one notable PR was closed yesterday, marking an important step for diverse hardware support in RL training:
*   **[PR #471](https://github.com/alibaba/ROLL/pull/471) [CLOSED]** by `UsernameFull`
    *   **Focus:** Ascend A2/A3 Docker environment compatibility.
    *   **Technical Changes:** Replaced the incompatible `decord` dependency with `torchvision` as the video reader backend. Updated Docker run commands to include `nofile` ulimit settings and expanded device mappings (`/dev/davinci8` to `/dev/davinci15`) for Ascend A3 environments.
    *   *Analyst Takeaway:* Video-language alignment in RL is computationally heavy. Transitioning away from `decord` to the more broadly supported `torchvision` backend reduces dependency bottlenecks and ensures seamless operation on non-NVIDIA silicon (Ascend).

### 5. Why This Project Matters in Today's RL Landscape
In 2026, the bottleneck of Reinforcement Learning has shifted from basic algorithmic implementation to large-scale infrastructure orchestration—particularly for training multimodal and Video-LLM models. 

ROLL matters because it provides a highly scalable, open-source infrastructure specifically designed for RLHF (Reinforcement Learning from Human Feedback) and complex agent training. The recent merge of [PR #471](https://github.com/alibaba/ROLL/pull/471) is a prime example of the project's strategic value: by rigorously optimizing Docker environments and ensuring compatibility with alternative AI accelerators like Huawei Ascend A2/A3, ROLL is actively future-proofing the RL ecosystem against single-vendor hardware lock-in and enabling more cost-effective, distributed RL training pipelines.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-07-07

## 1. Today's Highlights
The ROCK ecosystem experienced a burst of maintenance and architectural updates today, logging **16 updated PRs and 4 Issues**. Development heavily focused on stabilizing the sandbox lifecycle (specifically archiving workflows) and maturing SDK capabilities (reward parsing, metadata management, and image resolution). A massive cleanup of older PRs (from Q1/Q2) also occurred, indicating a major merge window and version stabilization effort.

## 2. Releases
* **No new releases** were cut in the last 24 hours. 

## 3. Important Issues
* **`[BUG] Sandbox stuck in ARCHIVING state`** ([#1216](https://github.com/alibaba/ROCK/issues/1216)): A critical lifecycle bug where the sandbox hangs indefinitely during archiving because the remote status query returns empty. 
* **`[BUG] BashJob SDK ignores reward protocol trial results`** ([#1214](https://github.com/alibaba/ROCK/issues/1214)): A notable evaluation pipeline bug where `BashTrial.collect()` fails to parse standard reward protocol artifacts (`result.json`, `reward.txt`), defaulting the RL reward `trial.score` to `0.0`.
* **`Proxy get_status endpoint and lazy state machine init`** ([#1212](https://github.com/alibaba/ROCK/issues/1212) - Closed): Addressed performance bottlenecks by removing unnecessary state machine initialization overhead on running sandboxes.
* **`Docker daemon auto-recovery`** ([#1189](https://github.com/alibaba/ROCK/issues/1189) - Closed): Resolved an infrastructure reliability issue where worker node crashes/OOMs caused persistent sandbox scheduling failures.

## 4. Key PR Progress
* **Sandbox Lifecycle & Reliability:**
  * [PR #1095](https://github.com/alibaba/ROCK/pull/1095) and [PR #1096](https://github.com/alibaba/ROCK/pull/1096) (Closed): Major merges integrating the archive lifecycle (`pending` -> `running` -> `stopped` -> `archiving` -> `archived` -> `deleted`) into the state machine, alongside configurable auto-archive/auto-delete thresholds.
  * [PR #1217](https://github.com/alibaba/ROCK/pull/1217) & [PR #1218](https://github.com/alibaba/ROCK/pull/1218) (Open): Hotfixes for Issue #1216, adding `RayOperator.get_remote_status` overrides to advance stuck archives.
  * [PR #1190](https://github.com/alibaba/ROCK/pull/1190) (Closed): Introduced `DockerHealthTask` to automatically probe and restart exited Docker daemons on workers.
  * [PR #1203](https://github.com/alibaba/ROCK/pull/1203) (Open): Phase 1 of the `OpenSandboxOperator` lifecycle backend, delegating lifecycle and command execution to OpenSandbox.
* **SDK & Tooling Enhancements:**
  * [PR #1215](https://github.com/alibaba/ROCK/pull/1215) (Open): Fixes the BashJob reward parsing bug (#1214) by introducing `RewardTrialResult` to map `verifier_result.rewards.reward` directly to `trial.score`.
  * [PR #1173](https://github.com/alibaba/ROCK/pull/1173) (Open): Migrated `RockRegistryResolver` to a regionless image resolver in `envhub SDK`, adding robust compose file support.
  * [PR #1171](https://github.com/alibaba/ROCK/pull/1171) (Open): Decoupled metadata from OSS file operations by adding a pure DB-backed `DatasetMetadataClient` (PostgreSQL/SQLite support).
  * [PR #1181](https://github.com/alibaba/ROCK/pull/1181) (Open): Added `JobViewer` SDK to read job artifacts, results, and logs from OSS post-teardown via `rock_meta.json`.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from isolated research scripts to massive, distributed production pipelines (especially for LLM alignment), **infrastructure reliability** becomes the primary bottleneck. ROCK’s latest updates directly solve these enterprise-scale pain points. 

By implementing automated worker recovery (Docker daemon restarts), state-machine-driven garbage collection (auto-archiving/deletion), and standardizing reward extraction (`BashJob` reward parsing), ROCK is providing the critical "plumbing" required to run multi-day RLHF/Agent training jobs without manual intervention. Furthermore, the introduction of regionless image resolvers and DB-backed dataset clients shows a maturation toward cloud-native, multi-region deployment—solidifying ROCK's position as a critical orchestration layer for heavy-duty RL workloads in 2026.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily digest for the `slime` project.

# 🧠 slime RL Daily Digest — 2026-07-07

**Repository:** [THUDM/slime](https://github.com/THUDM/slime)

### 1. Today's Highlights
*   **Cross-Datacenter RL Architecture Maturing:** The core maintainers are finalizing a massive 3-part architectural overhaul to support disaggregated rollouts, enabling training and inference engines to operate across different datacenters via delta weight synchronization.
*   **Multimodal & Advanced Architecture Support:** The community is actively contributing support for next-gen models, including a new PR for Multimodal Qwen-3.6 SFT and bug fixes for Multi-Token Prediction (MTP) loss aggregation.
*   **High Churn/Maintenance:** Out of 9 updated PRs, 5 were marked closed by core maintainers, indicating aggressive branch cleanup and CI stabilization ahead of future releases.

### 2. Releases
*   **None** (No new releases in the last 24 hours). 

### 3. Important Issues
*   **[Question] PT/CPT Support for GLM 5.2** | [Issue #2179](https://github.com/THUDM/slime/Issue/2179)
    *   **Context:** A user inquired whether `slime` supports Pre-Training (PT) or Continued Pre-Training (CPT) for the new GLM 5.2 model. 
    *   **Takeaway:** The issue was quickly closed by maintainers, confirming that `slime` remains strictly focused on post-training/RL workflows rather than foundational pre-training.

### 4. Key PR Progress
*   **[3/n] Disaggregated rollout: engine-side /pull_weights** | [PR #2181](https://github.com/THUDM/slime/Pull/2181) (Open)
    *   The final stage of a major architectural series. It moves delta weight pulling directly into the engine via an HTTP endpoint, preventing engine topology leaks into Ray and ensuring compatibility with external/custom engines.
*   **[2/n] Disaggregated rollout: disk-level delta weight sync** | [PR #2089](https://github.com/THUDM/slime/Pull/2089) (Closed/Merged)
    *   Optimizes bandwidth for disaggregated infrastructure by shipping only changed bytes (per-tensor delta) to canonical HF checkpoint directories, rather than transferring full model checkpoints.
*   **[1/n] Disaggregated rollout: delta weight sync (disk + NCCL transports)** | [PR #1806](https://github.com/THUDM/slime/Pull/1806) (Closed/Merged)
    *   The foundational PR for the disaggregated rollout series, enabling trainers and rollout engines to exist in physically separate clusters over a shared filesystem.
*   **Fix: Multi-element MTP loss tensor crash** | [PR #2182](https://github.com/THUDM/slime/Pull/2182) (Open)
    *   Community contributor fixed a `.item()` crash on Multi-Token Prediction (MTP) tensors by introducing a `cp_utils.compute_mtp_losses` helper, also catching a regression in aggregate `train_loss` tracking.
*   **Feature: Support multimodal qwen36 sft** | [PR #2164](https://github.com/THUDM/slime/Pull/2164) (Open)
    *   Expands `slime`'s capabilities to natively handle Supervised Fine-Tuning (SFT) for multimodal variants of Qwen 3.6.

### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models scale, monolithic Reinforcement Learning from Human Feedback (RLHF) pipelines are breaking at the infrastructure level. `slime` is directly solving the most pressing bottleneck in modern AI RL: **cross-datacenter resource disaggregation**. 

By heavily investing in delta-weight synchronization (shipping only changed parameters over disk and NCCL), `slime` allows organizations to decouple massive GPU training clusters from memory-optimized inference/rollout clusters. Combined with agile adoption of next-gen paradigms like Multi-Token Prediction (MTP) and multimodal SFT, `slime` is positioning itself as a highly scalable, hardware-aware framework built for the next generation of frontier model post-training.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL.

# 🧠 AReaL RL Ecosystem Daily Digest — 2026-07-07

## 1. Today's Highlights
* **Active Development Cycle**: AReaL shows intensive maintenance and architectural evolution, with **11 PRs updated** in the last 24 hours and zero new issues. This ratio indicates a mature, highly active codebase currently focused on deep backend optimizations and performance tuning rather than triaging user bugs.
* **Backend & Infrastructure**: Significant engineering effort is being poured into memory management (GPU peak memory capping), distributed orchestration (FSDP/Megatron fixes), and vLLM integrations.

## 2. Releases
* **None** (No new releases in the last 24 hours).

## 3. Important Issues
* **None** (0 issues open or updated in the last 24 hours). The project is currently operating in a feature-hardening or internal development phase.

## 4. Key PR Progress
The latest development activity centers around advanced memory optimization, backend integration, and distributed training stability:

* **Memory & Concurrency Optimization:**
  * **[PR #1489](https://github.com/areal-project/AReaL/pull/1489) [OPEN]**: Caps GPU peak memory during HF-format saves by stashing buffers to the CPU and eagerly releasing gather outputs. Crucial for preventing OOM errors on large-scale models.
  * **[PR #1485](https://github.com/areal-project/AReaL/pull/1485) [OPEN]**: Fixes an `httpx.AsyncClient` bug in V2 rollout/training controllers where clients were opened and closed on different asyncio event loops via synchronous wrappers.
* **Backend Integrations & Features:**
  * **[PR #1389](https://github.com/areal-project/AReaL/pull/1389) [OPEN]**: Adds R3 (Rollout Routing Replay) support for the vLLM backend (requires vLLM >= 0.22.0), enhancing generation fault tolerance.
  * **[PR #1445](https://github.com/areal-project/AReaL/pull/1445) [OPEN]**: Introduces Multi-Token-Prediction (MTP) augmented SFT/RL training as an auxiliary objective for Megatron-core 0.17.0.
* **Distributed Training Fixes (Megatron & FSDP):**
  * **[PR #1488](https://github.com/areal-project/AReaL/pull/1488) [OPEN]**: Fixes a data type mismatch in the `awex` FSDP adapter, correctly casting fp32 master weights to the compute dtype (bf16) during weight synchronization.
  * **[PR #1470](https://github.com/areal-project/AReaL/pull/1470) [CLOSED]**: Fixes TP-sharding for `GroupRMSNorm` weights during Distributed Checkpointing (DCP), which previously defaulted to replication and caused shape mismatches under Tensor Parallelism > 1.
  * **[PR #1471](https://github.com/areal-project/AReaL/pull/1471) [CLOSED]**: Resolves a critical rollout stall where controller-managed workers inadvertently divided effective rollout capacity by the DP world size.
* **API & Documentation:**
  * **[PR #1425](https://github.com/areal-project/AReaL/pull/1425) [OPEN]**: Normalizes tokenizer-derived stop token IDs to robustly handle base-Llama `None` pad IDs and Llama-3 multiple EOS IDs.
  * **[PR #1431](https://github.com/areal-project/AReaL/pull/1431) [OPEN]**: Migrates core documentation to the dedicated project website repository.

## 5. Why This Project Matters in Today's RL Landscape
In the current Large Language Model (LLM) landscape, post-training via Reinforcement Learning (e.g., RLHF, PPO, GRPO) is the defining step for creating capable reasoning and agentic models. However, RL training is notoriously hardware-inefficient and architecturally brittle.

AReaL (by inclusionAI) is solving the hardest infrastructure bottlenecks in this space. Today's PR activity demonstrates exactly what it takes to build a state-of-the-art RL framework:
1. **Heterogeneous Backend Orchestration**: Seamlessly gluing together high-throughput inference engines (vLLM) with distributed training engines (Megatron-Core, FSDP).
2. **Hardware Utilization**: Aggressively optimizing GPU memory footprint (e.g., CPU offloading during weight saves) to allow larger models to fit RL workloads within compute budgets.
3. **Next-Gen Architectures**: Supporting modern paradigms like Multi-Token-Prediction (MTP), which are becoming standard in frontier model pre-training and are now bleeding into post-training. 

By tackling low-level distributed checks (DCP sharding, async event loops) and high-level feature integrations simultaneously, AReaL provides the critical infrastructural glue necessary to scale LLM alignment on modern clusters.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily reinforcement learning ecosystem digest for TRL.

# 📊 TRL RL Daily Digest: 2026-07-07

**Activity Summary:** 15 Issues updated (3 new) | 34 PRs updated | 0 Releases

---

### 1. Today's Highlights
*   **Major Codebase Cleanup:** TRL is aggressively pruning low-usage and high-maintenance modules. PRs were opened today to remove the **GFPO trainer** ([#6309](https://github.com/huggingface/trl/pull/6309)), the **PAPO trainer** ([#6235](https://github.com/huggingface/trl/pull/6235)), and the unmaintained **post-training-toolkit integration** ([#6308](https://github.com/huggingface/trl/pull/6308)).
*   **RL-Specific Reward Utilities:** A new proposal ([#6221](https://github.com/huggingface/trl/issues/6221)) and corresponding PR ([#6222](https://github.com/huggingface/trl/pull/6222)) introduce group-relative length-scaled accuracy (GRPO-LEAD) and graduated format rewards, specifically targeting reasoning model training.
*   **AsyncGRPO Stability Fixes:** A flurry of PRs ([#6136](https://github.com/huggingface/trl/pull/6136), [#6134](https://github.com/huggingface/trl/pull/6134), [#6313](https://github.com/huggingface/trl/pull/6313)) were merged/opened to fix `AsyncGRPO` crashes when using `functools.partial` or callable classes as reward functions. 

### 2. Releases
❌ **No new releases** in the last 24 hours.

### 3. Important Issues
*   **[BUG] Multimodal RL Breakage in vLLM ([#6294](https://github.com/huggingface/trl/issues/6294)):** A critical bug was reported where `GRPOTrainer` with `use_vllm=True` and `vllm_mode="colocate"` corrupts SmolVLM multimodal prompts. The issue stems from pre-expanded image tokens being passed directly to vLLM.
*   **[FEATURE] Reasoning Reward Functions ([#6221](https://github.com/huggingface/trl/issues/6221)):** Feature request to add length-scaled accuracy rewards (penalizing unnecessary verbosity) and graduated formatting rewards to `trl.rewards` to better steer GRPO for reasoning models.
*   **[BUG] ChatML Collator Drop ([#6310](https://github.com/huggingface/trl/pull/6310)):** (Closed via PR) Resolved a silent failure where `DataCollatorForChatML` would drop the entire prompt if a long completion (e.g., reasoning traces from OpenThoughts3-1.2M) filled the max token window.

### 4. Key PR Progress
*   **Unified Cross-Entropy for GPU/Neuron ([#6262](https://github.com/huggingface/trl/pull/6262) & [#6314](https://github.com/huggingface/trl/pull/6314)):** Progress on unifying the `chunked_nll` loss implementation to be XLA-safe, allowing a single codebase to serve both GPU and AWS Trainium (Neuron) backends.
*   **Standardizing QLoRA for Preference Optimization ([#6276](https://github.com/huggingface/trl/pull/6276) & [#6312](https://github.com/huggingface/trl/pull/6312)):** Ported the streamlined `quantization_config` argument from `DPOTrainer` over to `KTOTrainer`, while adding strict error raising if a user passes an already-instantiated quantized model.
*   **Environment-Owned Rewards ([#6238](https://github.com/huggingface/trl/pull/6238)):** Implements a new RFC allowing tool environments to define their own `get_reward()` methods, making static `reward_funcs` optional and streamlining agentic RL workflows.
*   **Experimental Distillation ([#6237](https://github.com/huggingface/trl/pull/6237)):** Adds Dual On-Policy Distillation (DOPD) advantage-gap routing directly into the experimental `SDFTTrainer`.

### 5. Why This Project Matters in Today's RL Landscape
Today's commit and issue activity perfectly illustrates TRL's dual mandate in the modern RL landscape: **stability at scale** and **agentic RL maturation**. 

The resolution of AsyncGRPO pickling bugs, the patching of multimodal-vLLM integration mismatches, and the addition of reasoning-specific length penalties highlight the ecosystem's aggressive pivot toward complex, multi-turn inference workloads (like DeepSeek-style GRPO and tool-use). Furthermore, the introduction of "environment-owned rewards" and per-example environment selections shows TRL bridging the gap between traditional LLM alignment and true agentic RL. Meanwhile, the ruthless deprecation of experimental trainers (GFPO, PAPO) demonstrates the engineering discipline required to keep the library maintainable as core GRPO logic evolves weekly.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

**RL Ecosystem Daily Digest: Tianshou**
**Date:** 2026-07-07

### 1. Today's Highlights
Tianshou experienced a quiet day in terms of community engagement, with 0 new issues, 0 new pull requests, and 0 new releases. However, repository maintenance was active, with two older PRs receiving updates yesterday, focusing on codebase refinement and strict type checking.

### 2. Releases
*   **None.** There have been no new releases or version bumps in the last 24 hours.

### 3. Important Issues
*   **None.** No active issues were created or updated within the last 24 hours. 

### 4. Key PR Progress
Two existing PRs were updated on 2026-07-06, both indicating ongoing backend maintenance and code cleanup:
*   **[PR #1066](https://github.com/thu-ml/tianshou/pull/1066) [CLOSED]: Refactor deterministic action selection.**
    *   *Author:* arnaujc91
    *   *Summary:* Replaced direct `logits.argmax` (raw network outputs) with PyTorch's `dist.mode` for deterministic action picking. Agreed upon with core maintainer @MischaPanch, this makes the action selection logic significantly more compact and aligned with standard distribution APIs.
*   **[PR #1077](https://github.com/thu-ml/tianshou/pull/1077) [CLOSED]: Strict typing and mypy enforcement.**
    *   *Author:* dantp-ai
    *   *Summary:* A major quality-of-life update that resolves issue #952. It enforces `mypy` across tests and examples, allows `batch_size=None` in `SamplingConfig`, and improves the architecture by making `NetBase` generic. Additionally, it optimizes recurrent networks by shifting `utils.net.common.Recurrent` to pass/return a `RecurrentStateBatch` rather than untyped dictionaries.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a highly valued asset in the Reinforcement Learning open-source community due to its commitment to clean, highly modular, and performant PyTorch implementations. While deep RL frameworks frequently suffer from bloated, monolithic codebases, Tianshou's continuous backend updates—such as enforcing strict `mypy` typing and standardizing PyTorch distribution handling (as seen in PR #1077 and #1066)—ensure long-term stability and developer ergonomics. This strict architectural discipline makes Tianshou a premier choice for RL researchers who need reliable, easily modifiable baselines for complex, custom algorithm design.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL Ecosystem Daily Digest for OpenRLHF.

# 🔄 RL Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-07-07  
**Repository:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

---

### 1. Today's Highlights
Development activity over the last 24 hours was exclusively focused on codebase enhancements and algorithmic expansions, with zero new issues or releases reported. The core updates revolve around introducing advanced reward-shaping techniques for Proximal Policy Optimization (PPO) and maintaining strict adherence to modern Python formatting standards.

### 2. Releases
*   **None.** No new stable or pre-release versions were published in the last 24 hours.

### 3. Important Issues
*   **None.** No active issues were created or updated within the last 24 hours, indicating a stable immediate backlog for maintainers.

### 4. Key PR Progress
*   **[PR #1260](https://github.com/OpenRLHF/OpenRLHF/pull/1260) feat(reward): add opt-in step-level reward penalty (MRPO) for PPO training** *(by smellslikeml)*
    *   *Summary:* Introduces an exponentially-decaying per-step reward penalty (MRPO) directly into the PPO reward-computation path. 
    *   *Architectural Impact:* This is implemented as an opt-in, default-off feature exported from `openrlhf.trainer.ppo_utils`. It ensures zero behavior change for existing training jobs unless `args.reward.mrpo_step_decay` is explicitly configured, showcasing a clean, backward-compatible integration of advanced RL research.
*   **[PR #1259](https://github.com/OpenRLHF/OpenRLHF/pull/1259) [pre-commit.ci] pre-commit suggestions** *(by pre-commit-ci[bot])*
    *   *Summary:* Automated dependency bumps for code quality tooling. 
    *   *Updates:* Bumps `isort` (8.0.1 → 9.0.0a3) and `black-pre-commit-mirror` (26.3.1 → 26.5.1).

### 5. Why This Project Matters in Today's RL Landscape
In the current landscape of Reinforcement Learning from Human Feedback (RLHF) and Large Language Model (LLM) alignment, OpenRLHF serves as a critical, highly scalable bridge between theoretical RL algorithms and production-grade distributed training. 

The integration of step-level reward penalties (as seen in PR #1260) highlights the project's ongoing relevance: researchers are increasingly moving beyond simple outcome-based rewards toward granular, process-level reward models (PRM) and localized reward shaping to combat reward hacking and improve convergence stability. By modularizing these cutting-edge adaptations as zero-overhead, opt-in flags within standard PPO utilities, OpenRLHF allows applied ML engineers to safely experiment with state-of-the-art RL research (like MRPO) without disrupting highly expensive, distributed baseline training pipelines.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL open-source ecosystem daily digest for **verl** (volcengine/verl) on 2026-07-07.

### 1. Today's Highlights
verl is showing massive momentum in scaling distributed RL, particularly optimizing multi-turn agentic workloads and expanding hardware backend support. The ecosystem saw **81 issue updates** and **33 PR updates** in the last 24 hours. Key themes include resolving multi-turn rollout instability (SGLang/vLLM), architectural overhauls in load balancing for disaggregated rollout servers, and deep performance optimizations for both AMD and Ascend hardware. 

### 2. Releases
*   **No new releases** in the last 24 hours. The project appears to be in an active development/stabilization phase, possibly building towards a next minor version (as hinted by PRs targeting `release/v0.8.0`).

### 3. Important Issues
**Rollout & Stability Bottlenecks:**
*   **[SGLang Async Rollout] CUDA error** ([#1611](https://github.com/volcengine/verl/issues/1611)): A high-activity issue (42 comments) detailing illegal memory accesses during multiturn GRPO using async SGLang.
*   **Multiturn SGLang NaN Crashes** ([#1581](https://github.com/volcengine/verl/issues/1581)): Reports of `grad_norm` and `kl loss` skyrocketing to NaN during the official GSM8K multi-turn tool example.
*   **Checkpoint Race Conditions** ([#1657](https://github.com/volcengine/verl/issues/1657)): `RuntimeError` when creating checkpoint directories during DaPo training, highlighting a need for better distributed file handling.

**Feature Requests & Architecture:**
*   **Generative Reward Models (GenRM)** ([#1459](https://github.com/volcengine/verl/issues/1459)): Continued community demand for native GenRM/LLM-as-a-judge support beyond rule-based and sequence classification models.
*   **Async Reward Pipelining** ([#1584](https://github.com/volcengine/verl/issues/1584)): Discussion on optimizing the pipeline by parallelizing async reward calculations with old_log_prob/value computation.

### 4. Key PR Progress
**Distributed Rollout & Routing Overhauls:**
*   **Pluggable Load Balancers** ([#6712](https://github.com/volcengine/verl/pull/6712), [#6940](https://github.com/volcengine/verl/pull/6940), [#6533](https://github.com/volcengine/verl/pull/6533)): Major architectural push to extract load balancing into a pluggable router module. Includes new KV-cache-aware routing and dynamic rebalancing to prevent starvation during long-tail multi-turn conversations.
*   **Delta Weight Sync** ([#6794](https://github.com/volcengine/verl/pull/6794)): Massive optimization for disaggregated trainer→rollout wire. Instead of broadcasting full BF16 weights, it only ships changed parameters, saving >99% of weight sync bytes.

**Hardware & Backend Compatibility:**
*   **Megatron Bridge & FP8 Offloading** ([#6951](https://github.com/volcengine/verl/pull/6951), [#6952](https://github.com/volcengine/verl/pull/6952)): Deprecation of the vanilla mBridge in favor of Megatron Bridge, and critical fixes to free Transformer-Engine FP8 weight workspaces during CPU offload.
*   **Ascend Ecosystem Expansion** ([#6585](https://github.com/volcengine/verl/pull/6585), [#6680](https://github.com/volcengine/verl/pull/6680), [#6938](https://github.com/volcengine/verl/pull/6938)): Introduction of RL Insight tools, nightly CI for Qwen3-30b-moe-r3, and full decode CUDAGraph mode tuning specifically for Huawei Ascend NPUs.
*   **AMD MFU Corrections** ([#6942](https://github.com/volcengine/verl/pull/6942)): Updated FLOPS counters to accurately reflect AMD MI350X/MI355X peak dense matrix capabilities for accurate MFU tracking.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward reasoning models and agentic workflows, **verl** has positioned itself as a premier, production-grade framework for large-scale LLM reinforcement learning. 

Unlike basic RLHF wrappers, verl solves the most painful systems-level challenges in modern RL: 
1. **Disaggregated Infrastructure:** By actively developing delta weight synchronization and pluggable rollout routing, verl is solving the massive GPU idle-time problem inherent in generation-training handoffs.
2. **Agentic RL Readiness:** The framework's focused development on multi-turn rollouts, tool-integration, and async reward computation provides the exact toolkit needed to train agents.
3. **Hardware Agnosticism:** While many frameworks remain strictly Nvidia-centric, verl’s active merging of AMD and Ascend CI/CD pipelines makes it a critical piece of infrastructure for global AI labs looking to diversify compute clusters.

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

Here is the RL open-source ecosystem daily digest for Gymnasium based on the provided GitHub data.

# 📊 RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-07  
**Focus:** Farama-Foundation/Gymnasium

---

### 1. Today's Highlights
Gymnasium shows active maintenance focused on **API standardization** and **developer experience**. The community is stepping up to replace outdated documentation assets (like random-policy GIFs) with trained baseline models. Under the hood, there is a strong push toward modernizing Python standards, specifically migrating `assert` statements to robust exception handling and expanding static type hinting.

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **[#1610] [OPEN] Doc Site Gifs Showing Real Policies**
  *   *Author:* jkterry1
  *   *Insight:* A community-driven initiative to update the documentation. The goal is to replace the current "flailing" random behaviors in Classic Control, Box2D, and MuJoCo environments with actual trained policies (e.g., Stable-Baselines3). This significantly lowers the barrier to entry for new practitioners by visually demonstrating what a "solved" environment looks like.
*   **[#1614] [CLOSED] Proposal: Replace validation assertions with standard exceptions**
  *   *Author:* Ankush0077
  *   *Insight:* A proposal to replace `assert` statements with `TypeError`/`ValueError` exceptions for cold-path input validation. This is a crucial Python best practice, as `assert` statements are globally stripped when running the interpreter in optimized mode (`-O`). 

### 4. Key PR Progress
*   **API & Type System Enhancements:**
  *   [#1615] [CLOSED] Implements the changes from issue #1614, successfully replacing assertions with standard exceptions and providing helpful error messages.
  *   [#1537] [OPEN] Introduces generic type hinting for the `Tuple` space (e.g., `spaces.Tuple[spaces.MultiDiscrete, spaces.Box]`), fixing #1476.
  *   [#1514] [OPEN] Updates Graph spaces to accept arbitrary node and edge spaces (supporting `Dict` and `Tuple` spaces for heterogeneous graphs).
  *   [#1502] [OPEN] Adds `options` support in `reset()` for functional JAX environments, bringing JAX env API parity with standard Gymnasium environments.
*   **Environment & Physics Overhauls:**
  *   [#1602] [OPEN] An exciting draft PR porting the `LunarLander` environment physics engine from Box2D to **Pymunk**.
  *   [#1323] [OPEN] Modifies the `CarRacing` environment to trigger `terminated=True` based on a percentage of visited tiles, fixing premature environment endings.
*   **Documentation Updates:**
  *   [#1612] [CLOSED] Directly addresses issue #1610 by swapping out GIFs for the 5 Classic Control environments with trained SB3 policies.
  *   [#1584] [OPEN] Adds a highly requested beginner tutorial for customizing MuJoCo environment parameters via `gym.make` kwargs.

### 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for single-agent Reinforcement Learning environments, Gymnasium acts as the critical interface between environment design and RL algorithm research. Today's updates highlight a maturing ecosystem. By enforcing strict API parity across diverse backends (JAX, Box2D, Pymunk) and adopting modern Python features (generic type hinting, robust exception handling), Gymnasium ensures that algorithmic researchers can seamlessly plug-and-play next-generation environments without hitting library-specific friction.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is your RL open-source ecosystem daily digest for PettingZoo.

# 🐾 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-07  
**Repository:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. Today's Highlights
The past 24 hours show highly active maintenance and ecosystem standardization led primarily by core Farama maintainers. Key developments include a $200 bounty for solving a notoriously difficult environment, a major push to revamp documentation visuals, and a proposal to deprecate underutilized environments ahead of the next release.

### 2. Releases
*   **No new releases** were cut in the last 24 hours. Current development appears focused on merging feature branches and finalizing environment rosters before tagging the next version.

### 3. Important Issues
*   🏆 **[Bounty] $200 Prize for KAZ Policy** ([#1381](https://github.com/Farama-Foundation/PettingZoo/issues/1381)): Maintainer `jkterry1` is offering a $200 bounty for a robust, non-random policy for the Knockout Animal Zoo (KAZ) environment to generate high-quality demonstration GIFs. *A community submission has already been proposed (see PR #1384).*
*   🧹 **Removing Unused Environments** ([#1383](https://github.com/Farama-Foundation/PettingZoo/issues/1383)): To reduce maintenance overhead, there is a proposal to deprecate and remove **TicTacToe** and **Gin Rummy** from the library, citing negligible GitHub search usage compared to staples like Connect Four.
*   🎨 **Documentation Gifs Overhaul** ([#1385](https://github.com/Farama-Foundation/PettingZoo/issues/1385)): A focused initiative to improve the visual documentation (GIFs) for classic environments, specifically targeting Multiwalker, Cooperative Pong, and Pursuit.
*   🔧 **Backend Migration to OpenSpiel** ([#1366](https://github.com/Farama-Foundation/PettingZoo/issues/1366)) *[Help Wanted]*: A strategic move to migrate classic environment backends away from unmaintained libraries (like `rlcard`) and internal logic over to **OpenSpiel** via the `shimmy` API wrapper.
*   📏 **Configurable Pursuit Environment** ([#1382](https://github.com/Farama-Foundation/PettingZoo/issues/1382)) *[Help Wanted]*: Requesting community contributions to add an argument to the Pursuit environment allowing control over the center box size.

### 4. Key PR Progress
*   🎮 **Add evolved KAZ policy demo** ([PR #1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384) by `tzh476`): A rapid response to Issue #1381. This PR introduces a lightweight, evolved vector-policy script for KAZ, achieves a baseline against seeded random actions, and successfully renders the GIF for the SB3 tutorial documentation.
*   🃏 **Pygame rendering for Hanabi** ([PR #1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380) by `RewardGuard`): A significant UI upgrade that introduces graphical rendering (using commissioned pixel-art) for Hanabi. Previously, this environment only supported raw console output via its OpenSpiel state.
*   📝 **Docs edit button fix** ([PR #1386](https://github.com/Farama-Foundation/PettingZoo/pull/1386) by `Trenza1ore`): A minor but necessary bug fix to align the documentation's "edit" button with the correct source branch.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains the canonical standard API for Multi-Agent Reinforcement Learning (MARL) in Python. Today's digest highlights a maturing ecosystem: maintainers are aggressively pruning dead code (removing unused envs) and offloading environment logic to highly specialized, robust engines (migrating to DeepMind's OpenSpiel via Shimmy). By standardizing API interfaces and improving visual onboarding (bounties for demos, better rendering for Hanabi), PettingZoo is actively lowering the barrier to entry for MARL researchers and practitioners, solidifying its role as the foundational layer for modern multi-agent research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>