# RL Open Source Daily Digest 2026-07-17

> Generated: 2026-07-16 22:18 UTC | Projects covered: 15

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
Today's RL open-source ecosystem is sharply divided between the heavy-duty infrastructure required for Large Language Model (LLM) alignment and the API/algorithm refinements needed for traditional vectorized environments. Projects like `verl`, `TRL`, `slime`, and `AReaL` are tackling massive distributed compute bottlenecks, focusing on Mixture-of-Experts (MoE) weight synchronization, multi-turn agentic rollouts, and hardware heterogeneity (e.g., Nvidia B300s vs. Huawei Ascend NPUs). Meanwhile, classical RL environments and trainers (`Gymnasium`, `CleanRL`, `rl_games`) are focused on cleanly adapting to modern API standards (Gymnasium 1.0) and rectifying subtle data pipeline bugs introduced by high-throughput `AsyncVectorEnv` and `autoreset` mechanics. 

## Activity Comparison
*Note: Data reflects GitHub events from the 2026-07-17 daily window. Inactive projects are grouped below.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 3+ | 8+ | 0 | High-scale distributed sync, compute ROI, hardware expansion |
| **TRL** | 4+ | 6+ | 0 | Algorithmic precision (GRPO), agentic tool-calling, data scaling |
| **ROCK** | 3 | 5 | 0 | Ray scheduling observability, connection failover, v1.10.0 prep |
| **slime** | 3 | 5 | 0 | Prefix-cache locality, hybrid SSM/Mamba architecture support |
| **AReaL** | 2 | 4 | 0 | Cross-modal RL (Diffusion), next-gen sparse MoE bridge adapters |
| **Gymnasium**| 3 | 3 | 0 | Vector environment benchmarking, CPU oversubscription limits |
| **Open Instruct** | 0 | 2 | 0 | Next-gen GPU prep (B300/CUDA 13), silent reward hacking fixes |
| **ROLL** | 1 | 1 | 0 | Huawei Ascend NPU integration, multi-GPU inference deadlocks |
| **CleanRL** | 0 | 1 | 0 | Patching Gymnasium 1.0 terminal observation API churn |
| **rl_games** | 0 | 1 | 0 | Fixing PPO data corruption from vectorized autoresets |
| **No Activity** | 0 | 0 | 0 | *OpenRLHF, PettingZoo, Stable Baselines3, Tianshou, torchtune* |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Multi-Turn Agentic RL:** There is a clear, ecosystem-wide push to move beyond single-turn prompt-response pairs. `TRL` (GOLD/AsyncGRPO tool-calling) and `slime` (multi-turn rollout routing) are actively building frameworks to support complex, multi-step environment interactions.
*   **Algorithmic & Reward Precision:** Subtle tensor masking bugs are being hunted down to prevent model collapse. `TRL` is fixing "advantage poisoning" and zero-variance group loss masking in GRPO, while `Open Instruct` is patching logic flaws where OOM crashes in sandbox environments were incorrectly scored as training successes (silent reward hacking).
*   **Cross-Modal Alignment:** `AReaL` is proving that RL mechanics (REINFORCE/PPO) traditionally reserved for text are generalizing to other modalities, specifically introducing Diffusion RL post-training for image generation.

**Engineering & Infrastructure Signals**
*   **Hardware Heterogeneity:** Escaping Nvidia's CUDA monopoly is a major priority. `verl`, `ROLL`, and `Open Instruct` are all actively merging support for Huawei Ascend NPUs (MindSpeed) and next-gen Nvidia architectures (B300 via CUDA 13.0).
*   **Disaggregated Rollout Bottlenecks:** Synchronizing weights between trainers and inference engines without stalling GPUs is a primary pain point. `verl` (sharded delta weight sync via NCCL) and `slime` (MoE layout restoration during BF16 hot-updates) are pioneering memory-bandwidth solutions here.
*   **Vectorized Data Correctness:** As standard environments shift to Gymnasium 1.0, high-throughput autoreset mechanics are generating "garbage rows" (invalid transition states). `rl_games` and `CleanRL` are both expending core engineering effort to mask these corrupt data points from PPO and off-policy rollouts.

## Differentiation Analysis
*   **Scale and Scope:** Projects like `verl` and `slime` are differentiating by tackling monolithic, multi-node orchestration and MoE architecture support. In contrast, `Gymnasium` and `CleanRL` maintain their value by standardizing low-level APIs and providing transparent, readable algorithmic baselines for smaller-scale research.
*   **Infrastructure vs. Algorithms:** `ROCK` and `OpenRLHF` (historically) focus purely on distributed systems engineering—abstracting away Ray scheduler failovers and telemetry blind spots. Meanwhile, `TRL` and `rl_games` differentiate by obsessing over algorithmic fidelity, ensuring tensor masks, advantage calculations, and environment observations are mathematically perfectly aligned.
*   **Framework Agnosticism:** `AReaL` and `ROLL` are positioning themselves as bridge-agnostic hubs, deliberately abstracting Megatron and vLLM integrations to support rapidly evolving architectures like DeepSeek-V3, GLM-5, and Bailing-MoE.

## Community Momentum & Maturity
*   **Maturation of LLM Post-Training:** The ecosystem is shifting from "just making it run" to optimizing Compute ROI. This is evidenced by `verl` implementing early-stopping for PPO and tiny LoRA-only checkpoints (54 GiB ➔ 150 MiB), and `Gymnasium` introducing vectorized step benchmarking to profile hardware bottlenecks.
*   **Production Observability:** ML engineering is adopting SRE practices. `ROCK` is deeply integrating OpenTelemetry for Ray scheduler metrics and HTTP connection pool monitoring, while `Open Instruct` is actively uncoupling infra failures from model failures in Weights & Biases.
*   **API Churn Friction:** The ongoing transition to Gymnasium ≥ 1.0 is creating real friction for downstream dependency maintainers. `CleanRL` and `rl_games` both had to push updates today just to keep their baselines from crashing due to shifted dictionary keys and autoreset behaviors.

## Trend Signals
*   **Prefix-Cache Locality:** As agentic workloads increase, routing shared-prefix requests to different inference engines is destroying KV-cache utilization. `slime`'s introduction of group-scoped session affinity (consistent hashing) signals a major architectural shift in how rollout engines will manage memory.
*   **Hybrid Architecture Adoption:** Pure transformer architectures are making way for hybrid models. `slime`'s support for NemotronH (Mamba+Attention+MoE) indicates a coming wave of RL frameworks adapted specifically for State Space Models (SSMs).
*   **Silent Reward Hacking Mitigation:** As RL frameworks interact with external sandboxes and tool-calling APIs, infrastructure crashes are increasingly masquerading as model successes. Expect a surge in telemetry features explicitly designed to validate `done=True` signals.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

### RL Ecosystem Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-07-17

#### 1. Today's Highlights
Activity in the ROLL repository over the last 24 hours has been focused on infrastructure scalability and backend stability. The team and community are actively addressing distributed inference deadlocks and broadening hardware support to include Huawei Ascend NPUs. 

#### 2. Releases
* **No new releases** were published in the last 24 hours. The project remains on its latest stable baseline.

#### 3. Important Issues
* **[Issue #329](https://github.com/alibaba/ROLL/issues/329) [CLOSED] - Training hangs at actor-infer step with Qwen3-8B on an 8-GPU node**
  * **Status:** Closed (Last updated: 2026-07-16)
  * **Summary:** Resolved an issue where RL training loops hung indefinitely during the actor inference step while using a Qwen3-8B model on an 8-GPU node. Debug traces (`pystack`) pointed to a deadlock in `vllm`'s `uniproc_executor.py` during `collective_rpc` execution. 
  * **Analyst Takeaway:** This highlights the ongoing integration friction between cutting-edge LLM inference engines (vLLM) and RL training loops. Resolving this ensures better multi-GPU stability for medium-scale models in ROLL.

#### 4. Key PR Progress
* **[PR #456](https://github.com/alibaba/ROLL/pull/456) [OPEN] - [feat] Support ascend mindspeed&megatron and add CI tests**
  * **Author:** shun001 (Last updated: 2026-07-16)
  * **Summary:** A massive feature PR that introduces out-of-the-box support for Huawei Ascend NPUs. Key additions include MindSpeed-based NPU initialization patches, platform detection fixes, NPU-specific attention mask handling, and Megatron optimizer/offload compatibility. It also introduces an Ascend CI workflow and a Qwen3 DPO Megatron config.
  * **Analyst Takeaway:** This is a critical infrastructure expansion. By merging MindSpeed, Megatron, and Ascend compatibility, ROLL is positioning itself as a hardware-agnostic, enterprise-grade RL framework, reducing reliance on purely NVIDIA/CUDA ecosystems.

#### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO) become standard requirements for fine-tuning large language models (like Qwen3), the bottleneck has shifted from algorithmic design to distributed systems engineering. 

ROLL is highly relevant in the 2026 RL landscape because it directly addresses **distributed execution and hardware heterogeneity**. By heavily integrating with high-throughput inference engines (vLLM) and massive distributed training frameworks (Megatron), while simultaneously supporting alternative silicon (Huawei Ascend NPUs), ROLL provides the scalable infrastructure necessary to train and align increasingly massive state-of-the-art models cost-effectively.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK (alibaba/ROCK) project. 

***

# 📊 RL Open-Source Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-07-17  
**Activity (Last 24h):** 5 Issues Updated | 7 PRs Updated | 0 New Releases

---

### 1. Today's Highlights
The ROCK ecosystem activity over the last 24 hours is heavily focused on **infrastructure observability and connection reliability**. Core maintainers have merged comprehensive OpenTelemetry metrics for the Ray admin scheduler and wrapped up localized documentation for the highly anticipated v1.10.0 release. Simultaneously, new critical fixes and features are in the pipeline to stabilize Ray Client connections under load and expand HTTP connection pool visibility.

### 2. Releases
*   **No new releases cut in the last 24h.** 
*   *Note:* Documentation and prep for **ROCK v1.10.0** were finalized today ([PR #1222](https://github.com/alibaba/ROCK/pull/1222), [PR #1259](https://github.com/alibaba/ROCK/pull/1259)), indicating an official v1.10.0 code release is imminent.

### 3. Important Issues
*   **[Bug] Sandbox Disk Quota not reported:** ([Issue #1257](https://github.com/alibaba/ROCK/issues/1257)) 
    Starting a sandbox with a disk quota succeeds at the metadata level, but `SandboxStartResponse.disk` and the legacy `disk_limit_rootfs` return empty. This blocks users from programmatically verifying storage allocations.
*   **[Feature] Ray Client Connection Recovery:** ([Issue #1255](https://github.com/alibaba/ROCK/issues/1255)) 
    ROCK Admin's long-lived Ray Client connection fails to recover automatically if the Ray Head/GCS restarts, causing deployment pipeline hangups.
*   **[Feature] Proxy HTTP Connection Pool Monitoring:** ([Issue #1251](https://github.com/alibaba/ROCK/issues/1251)) 
    The `SandboxProxyService` connection pool silently queues requests when saturated, creating severe debugging blind spots for data-plane SSE requests.

### 4. Key PR Progress
*   **[MERGED] PR #1254:** Adds vital OpenTelemetry monitoring for automatic scheduler lifecycle, worker discovery, and task registration, surfacing data via Grafana.
*   **[MERGED] PR #1222:** Successfully lands v1.10.0 versioned documentation (English & Simplified Chinese) and updates README release entries.
*   **[OPEN] PR #1258:** Direct fix for Issue #1257, correctly populating the disk size in the `SandboxStartResponse`.
*   **[OPEN] PR #1256:** Implements active health probing (every 60s) and recovery for unhealthy Ray Client connections by reusing the serialized shutdown/init retry path.
*   **[OPEN] PR #1252:** Injects periodic metrics (every 10s) for the proxy httpx connection pool and aggressively scales limits (`max_connections` 100 ➔ 2000, `max_keepalive` 50 ➔ 100) to prevent queue bottlenecks.

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning relies heavily on distributed compute clusters, with Ray becoming the de facto standard for RL backends. However, operating Ray in production—especially for stateful RL workloads like sandbox environments and large-scale deployments—introduces immense reliability and observability challenges. 

ROCK continues to prove its value by abstracting away these distributed systems complexities. By actively fixing Ray Client failover states, exposing deep OpenTelemetry scheduler metrics, and preventing silent network pool saturations, ROCK allows ML engineers to focus strictly on reward optimization and policy training rather than fighting infrastructure networking drops or silent compute bottlenecks.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL ecosystem daily digest for **slime** (THUDM/slime) on July 17, 2026.

### 1. Today's Highlights
*   **System Bottleneck Fixes:** Addressed critical pipeline stalls during over-sampling termination ([#2176](https://github.com/THUDM/slime/issues/2176)) and patched reasoning-template token delta tracking for `tau-bench` ([#2213](https://github.com/THUDM/slime/pull/2213)).
*   **Advanced Routing & Architectures:** Major PR progress on group-scoped session affinity for multi-turn rollouts ([#2206](https://github.com/THUDM/slime/pull/2206)) and foundational support for hybrid Mamba-Attention-MoE architectures like NemotronH ([#2211](https://github.com/THUDM/slime/pull/2211)).
*   **Weight Update Optimizations:** Robust fixes submitted for grouped MoE expert axis preservation and FlashInfer MoE layout restoration during BF16 hot-updates ([#2193](https://github.com/THUDM/slime/pull/2193), [#2192](https://github.com/THUDM/slime/pull/2192)).

### 2. Releases
*   **No new releases** in the last 24 hours. 

### 3. Important Issues
*   **Prefix-Cache Thrashing in Multi-Turn Rollouts ([#1469](https://github.com/THUDM/slime/issues/1469)):** User *zchuz* highlights a critical throughput bottleneck where the `sglang_router` uses per-request load balancing. In multi-turn agent rollouts, this routes shared-prefix requests to different inference engines, destroying prefix-cache locality and causing massive redundant prefill overheads.
*   **Training Pipeline Deadlock ([#2176](https://github.com/THUDM/slime/issues/2176)):** Bug report indicating that when over-sampling concludes, the system fails to kill pending judge processes. This causes the training pipeline to hang until the judge timeout is reached, severely wasting GPU time.
*   **GLM-5.2 RL Algorithms Inquiry ([#2212](https://github.com/THUDM/slime/issues/2212)):** Community interest in whether `slime` will open-source the SAO (Self-Aligned Optimization) and CompactionRL methods utilized in the training of the newly released GLM-5.2 model.

### 4. Key PR Progress
*   **[Rollout] Opt-in group-scoped session affinity ([#2206](https://github.com/THUDM/slime/pull/2206)):** Directly targets Issue #1469 by introducing group-scoped routing keys. This ensures that a multi-turn rollout trajectory is consistently routed to the same inference engine via consistent-hashing, maximizing KV-cache utilization.
*   **Support NemotronH hybrid Mamba+Attention+MoE training ([#2211](https://github.com/THUDM/slime/pull/2211)):** Expands `slime`'s architecture boundaries beyond pure `GPTModel` transformers, enabling checkpoint alignment for hybrid SSM/Mamba models like Nemotron Nano-30B-A3B.
*   **Fix tau-bench token deltas for reasoning templates ([#2213](https://github.com/THUDM/slime/pull/2213)):** Ensures complete user-message token deltas are preserved when reasoning-aware chat templates rewrite earlier assistant history—a crucial fix for accurate RL reward calculation.
*   **MoE Weight Hot-Update Fixes ([#2193](https://github.com/THUDM/slime/pull/2193), [#2192](https://github.com/THUDM/slime/pull/2192)):** Two critical PRs by *LLMShark* that fix MoE tensor axis dropping during GLU rechunking and restore proper FlashInfer MoE layouts for Qwen3.5/3.6 35B-A3B models during online RL weight synchronization.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning shifts from static sequence prediction to dynamic, multi-turn Agentic RL, the infrastructure bottlenecks are moving from compute to inference-engine memory management. `slime`'s current active development perfectly reflects this industry trend: the community is aggressively solving **prefix-cache locality** (PR #2206) and **rollout pipeline deadlocks** (Issue #2176). Furthermore, as evidenced by today's MoE layout fixes (PRs #2193, #2192) and questions regarding GLM-5.2's RL stack (Issue #2212), `slime` is establishing itself as a high-throughput, production-grade framework capable of handling highly optimized hybrid architectures and complex reward-model judging pipelines.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning ecosystem digest for AReaL. 

# 🧠 AReaL RL Ecosystem Daily Digest
**Date:** 2026-07-17
**Repository:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

---

### 1. Today's Highlights
* **Expansion into Multi-Modal RL:** The spotlight is on [PR #1410](https://github.com/areal-project/AReaL/pull/1410), an experimental proof-of-concept bringing Diffusion RL post-training (SD1.5 + LoRA + REINFORCE) to the framework.
* **Next-Gen LLM Integration:** Significant progress in bridging architectures via `megatron-bridge`, with stale checks triggering on highly anticipated support for Bailing-MoE V2.5, GLM-5.1, and DeepSeek-V3 ([PR #1372](https://github.com/areal-project/AReaL/pull/1372), [PR #1373](https://github.com/areal-project/AReaL/pull/1373)).
* **Dev Experience (DX) Improvements:** Core maintainers are refining static analysis compatibility for trainers ([PR #1542](https://github.com/areal-project/AReaL/pull/1542)) and addressing edge cases in PPO critic initialization ([Issue #1543](https://github.com/areal-project/AReaL/issues/1543)).

### 2. Releases
* **No new releases** in the last 24 hours. The last stable release remains the baseline for production use.

### 3. Important Issues
* **[OPEN] [Question] online RL-Hermes PPO critic model training** — [Issue #1543](https://github.com/areal-project/AReaL/issues/1543)
  * *Summary:* A user has flagged a conceptual gap regarding `RL-Hermes`. Given that the current pipeline records only one trajectory per sample before PPO execution, the user is asking how the critic model is initialized and effectively trained without multiple trajectory baselines. Needs maintainers' clarification on single-trajectory value function estimation.
* **[CLOSED] [Bug] Qwen models crash with DTensor dispatch error under TP > 1** — [Issue #1366](https://github.com/areal-project/AReaL/issues/1366)
  * *Summary:* A previously identified critical bug causing crashes during Qwen tensor parallelism (>1) has been resolved and closed after a 2-month lifecycle.

### 4. Key PR Progress
* **[OPEN] feat(experimental): Diffusion RL post-training — Phase 1 PoC (SD1.5 + LoRA + REINFORCE)** — [PR #1410](https://github.com/areal-project/AReaL/pull/1410) by `Fyrgo8`
  * *Summary:* Introduces a self-contained, single-GPU PoC for RL post-training of diffusion models. Uses REINFORCE with LoRA on Stable Diffusion 1.5. A major architectural pivot for AReaL, extending its utility beyond standard LLM alignment.
* **[OPEN] feat(mcore): add GLM-5/DeepSeek-V3 model support** — [PR #1373](https://github.com/areal-project/AReaL/pull/1373) by `dingzhiqiang`
  * *Summary:* Adds native support for GLM-5.1, DeepSeek-V3, and GLM-4.7-Flash architectures. Fleshes out coverage for both `mbridge` and `megatron-bridge` pathways. 
* **[OPEN] feat(mcore): add Bailing-MoE V2.5 megatron-bridge adapter** — [PR #1372](https://github.com/areal-project/AReaL/pull/1372) by `dingzhiqiang`
  * *Summary:* Successfully abstracts Bailing-MoE V2.5 families from `mbridge`-only to a dual-bridge system, allowing native NVIDIA `megatron-bridge` adapter usage. 
* **[OPEN] refactor: add TYPE_CHECKING guard for LSP visibility** — [PR #1542](https://github.com/areal-project/AReaL/pull/1542) by `nil0x9`
  * *Summary:* Fixes a Developer Experience (DX) issue where Language Server Protocols (pyright, pylance) failed to resolve lazy-loaded trainer classes (`PPOTrainer`, `DPOTrainer`, etc.) in `areal/__init__.py`.

### 5. Why This Project Matters in Today's RL Landscape
As large language models (LLMs) increasingly shift toward Sparse Mixture-of-Experts (MoE) architectures (like DeepSeek-V3 and Bailing-MoE), RL frameworks must solve the complex distributed training bottlenecks associated with them. AReaL is positioning itself as a highly flexible, bridge-agnostic hub for cutting-edge LLM post-training.

Furthermore, today's update on [Diffusion RL (PR #1410)](https://github.com/areal-project/AReaL/pull/1410) highlights a critical industry trend: **the convergence of RL alignment techniques across modalities**. By utilizing the same underlying RL mechanics (like REINFORCE/PPO) traditionally reserved for text generation to align image diffusion models, AReaL is proving that robust, generalized post-training infrastructure is becoming the standard for next-generation AI development.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (huggingface/trl)
**Date:** 2026-07-17

## 1. Today's Highlights
TRL shows no signs of slowing down its iterative refinement of RL algorithms and infrastructure. Yesterday’s activity (36 updated PRs, 15 updated issues) was heavily dominated by **enhancing GRPO robustness** (loss masking, async environments), **fixing chat template generation masks**, and expanding **agentic tool-calling** capabilities across trainers like GOLD. 

## 2. Releases
- **None.** No new official releases were cut in the last 24 hours. Development remains focused on merging fixes and features into the `main` branch.

## 3. Important Issues
The community and maintainers are actively addressing core RL mechanics and template bugs:
- **Feature: UP Loss for GRPO** ([#6407](https://github.com/huggingface/trl/issues/6407)): Proposal to add Unbounded Positive (UP) objective routing to `GRPOTrainer`, showcasing the community's drive to push past standard PPO/GRPO baselines.
- **Bug: Critical Qwen3.5 Chat Template Bug** ([#6361](https://github.com/huggingface/trl/issues/6361)): Addressed a critical issue where TRL's prefix-preserving templates corrupted reasoning blocks (`<think>` tags) during self-generation.
- **Bug: AsyncGRPO Reward Leakage** ([#6027](https://github.com/huggingface/trl/issues/6027)): Identified that environment rewards in the experimental `AsyncGRPOTrainer` were not being correctly passed to reward functions, a critical fix for agentic RL workflows.
- **Enhancement: MoE Expert Logging** ([#4611](https://github.com/huggingface/trl/issues/4611)): Request to expose per-expert token throughput statistics during SFT/PEFT when `output_router_logits=True`.

## 4. Key PR Progress
Several crucial PRs were closed or updated, tackling reward mechanics, loss accuracy, and trainer reliability:
- **Reward Masking & Advantage Poisoning:** 
  - [#6427](https://github.com/huggingface/trl/pull/6427) prevents default `0.0` rewards from poisoning advantage calculations in OpenReward rollouts.
  - [#6426](https://github.com/huggingface/trl/pull/6426) ports `unscorable-mask` reward defenses from GRPO to SDPO (Self-Play DPO).
- **GRPO Loss Accuracy:** [#6368](https://github.com/huggingface/trl/pull/6368) introduces a `dapo_zv` loss type to `GRPOConfig`, excluding zero-variance groups (where all completions get the same reward) from the loss denominator, preventing dead gradients.
- **Tool Calling Support for GOLD:** [#6328](https://github.com/huggingface/trl/pull/6328) adds multi-turn tool-calling support to `GOLDTrainer` for same-family VLM distillation.
- **Streaming Datasets in RL:** [#6351](https://github.com/huggingface/trl/pull/6351) finally brings iterable dataset support to `GRPOTrainer` and `RLOOTrainer`, crucial for training on massive, web-scale RL datasets without OOM errors.
- **Alignment & Fixes:** Fixed corrupted reasoning blocks for Qwen3 models ([#6363](https://github.com/huggingface/trl/pull/6363)) and aligned KTO logits computation with DPO standards ([#6424](https://github.com/huggingface/trl/pull/6424)).

## 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward Reinforcement Learning with Human Feedback (RLHF) and Reinforcement Learning from Verifiable Rewards (RLVR) for reasoning models, **TRL acts as the de facto execution layer.** 

The issues and PRs from today highlight exactly what matters in modern RL:
1. **Multi-turn Agentic RL:** Tool-calling support in GOLD/Async GRPO shows TRL is moving beyond single-turn prompt-response pairs into complex, multi-step environment interactions.
2. **Reward Precision:** PRs fixing "advantage poisoning" and "zero-variance groups" prove that at the frontier of RL, subtle tensor masking bugs are the difference between a reasoning model that generalizes and one that collapses. 
3. **Infrastructure Scaling:** Async GRPO clients, VLLM integrations, and streaming dataset support demonstrate that TRL is bridging the gap between math-heavy RL theory and the distributed computing infrastructure required to actually train these models.

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

Here is the RL open-source ecosystem digest for `verl` on 2026-07-17.

### 1. Today's Highlights
Activity in the `verl` ecosystem remains exceptionally high, driven by optimizations for large-scale distributed RL, hardware interoperability (Nvidia/Ascend), and checkpoint efficiency. The most impactful updates today include the rollout of sharded delta weight synchronization to reduce engine bottlenecks, the introduction of lightweight GPU stall diagnostics, and substantial fixes for FSDP2 CPU offloading and LoRA state management.

### 2. Releases
**None.** 
No new stable releases were published in the last 24 hours. The community continues to push against the active Q3 roadmap (Tracking issue [#6985](https://github.com/volcengine/verl/issues/6985)), which focuses on dropping legacy Megatron bridge support and adding low-precision (MXFP8/NVFP4) training capabilities.

### 3. Important Issues
*   **Engine Bottlenecks & Hangs:** A historical but highly active issue ([#3114](https://github.com/volcengine/verl/issues/3114)) reports 0% GPU utilization hangs during `sglang` async agent loops. Today's PR #7073 directly addresses the need for better rollout diagnostics.
*   **MoE Rollout Metrics Bias:** Systematic bias in rollout MoE load-balance metrics was identified, where the final generated token (EOS) lacked a routing record. This was addressed in PR [#7075](https://github.com/volcengine/verl/pull/7075).
*   **Hardware & Environment Compatibility:** Ascend NPU users are facing issues with Python pickling for custom reward functions and `megatron.bridge` missing from Docker environments ([#7071](https://github.com/volcengine/verl/issues/7071), [#6931](https://github.com/volcengine/verl/issues/6931)). 

### 4. Key PR Progress
*   **Checkpoint & Weight Sync Optimizations:** 
    *   [#7060](https://github.com/volcengine/verl/issues/7060) / [#7080](https://github.com/volcengine/verl/pull/7080): Merged and extended sharded delta weight sync (`delta_sharded`) via NCCL for disaggregated rollouts. This now supports block placements and Automodel (nemo_automodel) with Expert Parallelism (EP).
    *   [#7061](https://github.com/volcengine/verl/pull/7061): Added `save_lora_only` checkpointing, drastically reducing checkpoint sizes (e.g., from 54 GiB to 150 MiB for a 27B model).
*   **Trainer & Reward Enhancements:**
    *   [#7082](https://github.com/volcengine/verl/pull/7082): Unified V1 ReplayBuffer eviction/refill handling for stale, DAPO-filtered, and failed rollout groups.
    *   [#7069](https://github.com/volcengine/verl/pull/7069): Introduced `early_stop_patience` for `RayPPOTrainer` to save compute once reward convergence plateaus.
    *   [#7027](https://github.com/volcengine/verl/pull/7027): Implemented deterministic rewards for user-defined Generative Reward Models (GRM).
*   **Distributed Bug Fixes:**
    *   [#7083](https://github.com/volcengine/verl/pull/7083): Fixed NCCL broadcast stream synchronization in the checkpoint engine.
    *   [#7072](https://github.com/volcengine/verl/pull/7072) / [#7077](https://github.com/volcengine/verl/pull/7077): Patched FSDP2 `CPUOffloadPolicy` crashes, preventing device mismatch errors during checkpoint saves.

### 5. Why This Project Matters in Today's RL Landscape
As post-training (RLHF/GRPO) becomes the dominant paradigm for aligning frontier models, frameworks are hitting severe infrastructure bottlenecks—specifically regarding memory bandwidth, rollout-trainer synchronization, and multi-node orchestration. `verl` is solving the exact pain points currently hindering large-scale RL pipelines:

1.  **Decoupling Rollouts via Disaggregation:** By pioneering delta weight sync over NCCL (#7080), `verl` allows disaggregated rollout engines (using vLLM/SGLang) to update weights without grinding training to a halt.
2.  **Democratizing Multi-Hardware Support:** While most frameworks remain rigidly tied to Nvidia's ecosystem, `verl`'s active resolution of Ascend NPU and Megatron-bridge issues (#7081, #7072) makes it a rare, truly hardware-agnostic RL engine.
3.  **Algorithmic & Compute Efficiency:** Features like early-stopping for PPO (#7069), DAPO replay buffer filtering (#7082), and tiny LoRA-only checkpoints (#7061) represent the next maturity phase of RL tooling—shifting from "just making it run" to optimizing compute ROI and token throughput.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL Ecosystem Daily Digest: July 17, 2026**
**Project Focus:** Open Instruct (`allenai/open-instruct`)

---

### 1. Today's Highlights
Activity over the last 24 hours was entirely development-focused, with zero new issues or releases. The maintainers are actively pushing infrastructure improvements, specifically targeting next-generation hardware support (NVIDIA B300) and fixing critical telemetry blind spots for agentic RL workloads.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **Nothing new to report.** No issues were created or updated in the last 24 hours.

### 4. Key PR Progress
Two open PRs were updated, both heavily focused on stabilizing and scaling RL training infrastructure:

*   **PR [#1758](https://github.com/allenai/open-instruct/pull/1758): Upgrade to CUDA 13.0 for B300 support on `ai2/holmes`** (Authored by `mnoukhov`)
    *   *Summary:* Introduces environment parametrization to support the upcoming NVIDIA B300 architecture via CUDA 13.0 (`nvidia/cuda:13.0.3-d...`), while maintaining backward compatibility with existing CUDA 12.8.1 clusters using a single Dockerfile and `uv` lock.
*   **PR [#1759](https://github.com/allenai/open-instruct/pull/1759): Surface sandbox infra failures in wandb; fix OOM scored as success** (Authored by `pdasigi`)
    *   *Summary:* A critical observability fix for tool-use/agentic RL. The PR uncouples infrastructure failures (Podman/sandbox crashes) from model failures in Weights & Biases. Crucially, it patches a logic flaw where Out-Of-Memory (OOM) killed episodes were incorrectly scored as training successes because they returned `done=True` without an explicit error flag.

### 5. Why This Project Matters in Today's RL Landscape
As we push into late 2026, post-training and RLHF/RLAIF are heavily bottlenecked by two factors: transitioning to next-gen hardware and executing reliable agentic tool-calling. 

Today's PRs perfectly illustrate Open Instruct's role in solving these exact bottlenecks. By future-proofing the stack for NVIDIA B300 GPUs ([#1758](https://github.com/allenai/open-instruct/pull/1758)), the project ensures researchers can leverage the latest compute without fracturing their deployment environments. Furthermore, PR [#1759](https://github.com/allenai/open-instruct/pull/1759) addresses a notoriously difficult problem in RL engineering: silent reward hacking. When infrastructure crashes (like OOMs in sandboxed environments) are conflated with successful agent completions, RL reward models learn the wrong behavior. Fixing this telemetry ensures that signal noise doesn't corrupt policy optimization.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

Here is the RL open-source ecosystem digest for CleanRL.

### 1. Today's Highlights
*   **Quiet Day Overall:** CleanRL experienced minimal activity over the last 24 hours with no new issues, comments, or releases. 
*   **Critical Bug Fix Proposed:** A new Pull Request addresses a breaking compatibility issue between CleanRL's off-policy algorithms and next-generation environment APIs (Gymnasium ≥ 1.0 / MuJoCo v5).

### 2. Releases
No new releases were published in the last 24 hours. 

### 3. Important Issues
No new or updated issues were reported today. 

### 4. Key PR Progress
*   **PR [#567](https://github.com/vwxyzjn/cleanrl/pull/567) `[OPEN]`: Fix KeyError on Gymnasium final_obs for off-policy scripts**
    *   **Author:** Fstarnb
    *   **Summary:** This PR addresses a `KeyError` triggered during environment autoresetting in off-policy scripts. Gymnasium ≥ 1.0 (which is mandated for MuJoCo v5 integration) shifted its `SAME_STEP` autoreset terminal observation keys from the legacy `infos["final_observation"]` to `infos["final_obs"]` / `infos["_final_obs"]`. This PR updates the indexing logic, ensuring off-policy algorithms (like DQN, SAC, TD3) can correctly buffer terminal states without crashing under the new Gymnasium standard.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a foundational project for the reinforcement learning community because it provides high-quality, single-file implementations of complex RL algorithms. In an era where monolithic RL frameworks can obscure algorithmic internals, CleanRL's transparent, readable code is vital for both pedagogical use and rapid prototyping. 

Today's PR #567 highlights a broader, ongoing friction point in the RL ecosystem: **API churn in environment standards**. As the community transitions from legacy OpenAI Gym APIs to Farama Foundation's Gymnasium (and newer demanding integrations like MuJoCo v5), underlying data structures (like `info` dictionaries) are actively shifting. CleanRL's prompt adaptation to these granular changes is crucial; it ensures that researchers relying on transparent benchmarking code aren't bottlenecked by deprecated environment wrappers.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# 🤖 RL Ecosystem Daily Digest: 2026-07-17
**Focus Project:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

### 1. Today's Highlights
Activity in the `rl_games` repository over the last 24 hours was exclusively focused on core algorithmic enhancements, with a single Pull Request seeing movement. There were no new issues reported, no new releases, and no other active PRs. The sole focus is on rectifying data pipeline correctness in Proximal Policy Optimization (PPO) when interacting with modern vectorized environments.

### 2. Releases
* **No new releases** in the last 24 hours.

### 3. Important Issues
* **No active issues** updated or created in the last 24 hours.

### 4. Key PR Progress
* **[PR #362](https://github.com/Denys88/rl_games/pull/362) [OPEN]: PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization** (by ViktorM)
  * **Context:** Created on 2026-07-12, this PR addresses the PPO component of a broader "autoreset correctness work" (noting the SAC counterpart was addressed in commit `b1ed755`). 
  * **Technical Breakdown:** The PR fixes a silent training data corruption issue occurring in `next_step-autoreset` environments (specifically `envpool` and native Gymnasium 1.x vector envs). Previously, when an episode terminated and the environment automatically reset, the transition row (containing a filler reward, ignored actions, and the *previous* terminal observation) was incorrectly ingested into PPO rollouts as valid training data. This PR implements masking for these "garbage rows." Additionally, it introduces scalar sigma parameterization for policy distributions.
  * *Status:* Updated recently, signaling active review or ongoing technical iterations.

### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a cornerstone of the open-source Reinforcement Learning ecosystem due to its highly optimized, tensorized PyTorch implementation of algorithms like PPO and SAC. 

PR #362 perfectly illustrates why this library is critical: as the RL community standardizes around high-throughput vectorized simulators (like `envpool`) and new API standards (Gymnasium 1.x), subtle implementation mismatches can introduce silent performance degradation. By explicitly masking invalid transition data generated by automatic environment resets, `rl_games` ensures that policy gradients are computed strictly on valid episode transitions. This level of low-level scrutiny is essential for maintaining reliable, reproducible baselines in modern, high-throughput RL research and deployment.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-07-17
**Repository:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity in the last 24 hours has been primarily focused on **vector environment performance** and **rendering stability**. The community is actively pushing for better compute resource management in parallelized environments and successfully triaging visual bugs. The repository saw 3 updated issues and 3 updated PRs.

### 2. Releases
* **No new releases** were published in the last 24 hours. 

### 3. Important Issues
* **[Enhancement] Limit `AsyncVectorEnv` Processes ([#1641](https://github.com/Farama-Foundation/Gymnasium/issues/1641))**
  * *Context:* User `gkoundry` proposed adding an option to limit the number of concurrently executing environments in `AsyncVectorEnv`. This is a critical operational need for researchers running highly parallelized, compute-heavy simulators (like MuJoCo) to prevent CPU oversubscription and manage evaluation metrics efficiently.
* **[Bug] CarRacing v3 HUD Overflow ([#1638](https://github.com/Farama-Foundation/Gymnasium/issues/1638)) - CLOSED**
  * *Context:* Fixed a UI bug where the bottom-left HUD score in CarRacing v3 overflowed due to unformatted float decimal precision (e.g., rendering as `23.59090...` instead of an integer).
* **[Question] MujocoEnv Renderer Overrides XML ([#1607](https://github.com/Farama-Foundation/Gymnasium/issues/1607))**
  * *Context:* Ongoing discussion (updated today) regarding custom MuJoCo environment cameras. The creator notes that `MujocoEnv` currently ignores `offwidth` and `offheight` parameters defined in the environment's XML file, requiring programmatic renderer instantiation. 

### 4. Key PR Progress
* **[Feature] Add Vector Environment Step Benchmark ([#1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640))**
  * *Context:* Opened by `Kallinteris-Andreas`, this PR introduces `benchmark_step_vector` to measure individual vector-environment steps per second. This is a vital developer tool for profiling bottleneck propagation in parallelized RL pipelines.
* **[Fix] CarRacing HUD Score Formatting ([#1639](https://github.com/Farama-Foundation/Gymnasium/pull/1639)) - CLOSED**
  * *Context:* The accompanying fix for Issue #1638. It successfully patches the HUD rendering format from `f"{self.reward:04}"` to `f"{self.reward:04.0f}"`, constraining the output to a fixed-width integer field.
* **[RFC] `MJX` Environment Prototype ([#834](https://github.com/Farama-Foundation/Gymnasium/pull/834))**
  * *Context:* Long-running Request for Comments regarding the integration of `MJX` (MuJoCo XLA). Development remains paused by the author pending the release of `mjx==3.2` and necessary upstream updates to Gymnasium's `FuncEnv`. 

### 5. Why This Project Matters in Today's RL Landscape
Today's updates perfectly illustrate Gymnasium's dual role in the modern RL stack: **API standardization** and **scaling efficiency**. As RL research increasingly relies on massive dataset generation and parallel evaluation (e.g., Robot Learning), features like `AsyncVectorEnv` process limiting (#1641) and vector benchmarking (#1640) are essential for hardware optimization. Furthermore, the ongoing groundwork to integrate JAX-based simulators like MJX (#834) proves Gymnasium is actively evolving to support next-generation, GPU-accelerated environment architectures.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>