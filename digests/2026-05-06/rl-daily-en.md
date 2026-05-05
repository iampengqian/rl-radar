# RL Open Source Daily Digest 2026-05-06

> Generated: 2026-05-05 22:17 UTC | Projects covered: 15

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
The RL open-source ecosystem on May 6, 2026, is defined by a sharp divide between post-training LLM infrastructure (TRL, verl, AReaL, slime, Open Instruct) and classical applied RL frameworks (CleanRL, Stable Baselines3). The day's activity is overwhelmingly concentrated on scaling Reinforcement Learning from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) to massive Mixture-of-Experts (MoE) and Vision-Language Models (VLMs). Meanwhile, 11 out of 18 tracked projects recorded zero activity, indicating either high stability or development hibernation depending on the project's lifecycle stage.

## Activity Comparison
Activity was heavily clustered among LLM post-training frameworks, with multiple critical PR merges and architectural refactors. 

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 1 open | 14 active/closed | 0 | Enterprise-grade refactoring (KTO/DPO), VLM memory optimization. |
| **verl** | 2 active | 6 active | 0 | Hardware extensibility (Ascend NPUs) and disaggregated rollout wiring. |
| **AReaL** | 3 active | 4 active | 0 | Deep infrastructure focus: Megatron VLM support and MoE routing. |
| **slime** | 5 active | 2 active | 0 | Stress-testing extreme scale (160+ GPU) MoE distributed setups. |
| **Open Instruct** | 0 active | 4 active | 0 | Hardening GRPO convergence and off-policy asynchronous metrics. |
| **CleanRL** | 0 active | 1 active | 0 | Performance tuning at the Python/C++ (EnvPool) boundary. |
| **Stable Baselines3** | 0 active | 1 active | 0 | Incremental continuous control flexibility (Tanh squashing). |
| **11 Others*** | 0 | 0 | 0 | Dormant. Includes Gymnasium, OpenRLHF, ROCK, Tianshou, etc. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Knowledge Distillation & Self-Distillation:** Explicit shifts toward distillation in RL pipelines. TRL implemented *Self-Distillation Zero* for dense binary rewards, while `slime` integrated online/offline KD via Top-K forward KL.
*   **Off-Policy Corrections:** Asynchronous generation creates off-policy drift. Open Instruct introduced the "IcePop" algorithm for unified off-policy corrections to maintain training stability.
*   **Advanced Action Exploration:** In classical RL, Stable Baselines3 introduced opt-in Tanh squashing for Gaussian action means to prevent extreme outlier exploration in continuous control.

**Engineering & Infrastructure Signals**
*   **Disaggregated & Async Inference:** The most competitive frameworks (verl, AReaL) are heavily optimizing the RL rollout phase via disaggregated prefill/decode and speculative decoding (Sglang Eagle).
*   **Native VLM & MoE Handling:** Frameworks are bypassing standard processor APIs to feed multimodal tensors directly to inference engines, while actively solving MoE routing drift (e.g., AReaL's Rollout Routing Replay).
*   **Hardware & Backend Abstraction:** The ecosystem is moving aggressively beyond NVIDIA GPUs. verl expanded to Ascend NPUs via Liger-Kernel and integrated TRT-LLM.
*   **Memory-Efficient Loss Computation:** TRL introduced chunked NLL for PEFT and VLMs, and CleanRL optimized memory mapping at the environment-to-torch boundary, highlighting that VRAM/RAM management remains a primary bottleneck.

## Differentiation Analysis
*   **The LLM Orchestration Layer (verl, AReaL, slime):** These projects act as distributed systems orchestrators for massive models. They are differentiated by their hardware targets (verl pushing hardware agnosticism, AReaL tied to Megatron) and their specific scaling fixes (slime handling 160+ GPU memory edge-cases).
*   **The Algorithm & Alignment Layer (TRL, Open Instruct):** These projects focus on plugging cutting-edge mathematical alignment techniques into accessible APIs. TRL dominates ecosystem standardization (e.g., standardizing environment adapters for reward models), while Open Instruct provides deep telemetry fixes for large-scale asynchronous GRPO.
*   **The Classical RL Layer (CleanRL, SB3):** Remaining firmly outside the LLM hype cycle, these frameworks focus on readable, single-algorithm implementations for traditional environments (MuJoCo, Atari). Their differentiator is educational transparency and hyper-parameter stability over distributed throughput.

## Community Momentum & Maturity
TRL and verl currently possess the strongest momentum, acting as the primary sinks for enterprise and open-source RLHF contributions. The high volume of structural refactors in TRL (aligning KTO to DPO) points to a project maturing for long-term enterprise maintenance. Conversely, the issues in `slime` (gibberish outputs at 160-GPU scale) highlight the bleeding edge of community stress-testing. OpenRLHF, a historical powerhouse in the space, showed zero activity today, suggesting either a stabilization phase or a potential pivot in community preference toward verl/AReaL.

## Trend Signals
1.  **Hardware Diversification is Here:** RL post-training is no longer an NVIDIA-exclusive domain. The integration of Ascend NPUs and various inference backends (TRT-LLM, vLLM, SGLang) signals a shift toward hardware-agnostic RL pipelines.
2.  **MoE Routing is the New Bottleneck:** The transition to massive MoE models (Qwen3.5-397B) is breaking traditional RL training loops due to inference-training routing discrepancies. Solving this routing drift is the current most critical engineering challenge.
3.  **Observability Over Blind Scaling:** Open Instruct’s focus on highly granular wall-clock timing and active-sampling diagnostics indicates that the industry is moving past "just make it run" to "diagnose exactly where the asynchronous loop is failing."

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-05-06

## 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours focused heavily on distributed infrastructure stability and framework extensibility. Key discussions centered around large-scale deployment (160+ GPUs) for massive MoE models (Qwen3.5-397B-A17B) and critical bugs in `colocate` checkpointing. A feature PR for Knowledge Distillation (KD) also saw renewed activity. 

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **Large-Scale Rollout Corruption (#1852):** Users scaling to 160 H20 GPUs (96 Actor, 64 Rollout) for the Qwen3.5-397B-A17B MoE model are experiencing corrupted/gibberish outputs during Rollout, despite the training loop running normally. This highlights potential memory or synchronization edge-cases in `slime`'s distributed asynchronous generation.
*   **Checkpoint Crash on `main` (#1886):** A critical regression was identified when running GRPO with `--colocate` and `--save-interval`. The save operation fails with a `CUDA error: invalid argument`. 
*   **VLM Support Requests (#1863):** With the rise of multimodal RL, users are currently blocked from training Qwen3-VL models due to missing conversion scripts and configuration parameters for Megatron format in the repository.
*   **High Demand for LoRA (#416):** The community continues to push for native LoRA support (17 upvotes), emphasizing the need for parameter-efficient fine-tuning in RL workloads.
*   **Reward Normalization Patched (#1414):** A bug in `_post_process_rewards` causing incorrect cross-batch group normalization during unequal sample counts was closed.

## 4. Key PR Progress
*   **Fix(checkpoint): Resume/pause for offload_train (#1888):** Submitted by `Procrastinatorrrr`, this PR directly addresses Issue #1886 by fixing the `torch.distributed` CUDA crash during model saving. It implements proper resume/pause hooks for `offload_train` in colocated environments.
*   **Add Knowledge Distillation Example (#1654):** PR by `tourzhao` introduces a KD example supporting both online (external teacher server) and offline (JSONL) modes. It implements Top-K forward KL and sampled KL losses, tested via distilling Qwen3-4B into a Qwen3-1.7B student model. 

## 5. Why This Project Matters in Today's RL Landscape
As the RL landscape shifts aggressively toward Reinforcement Learning from Human Feedback (RLHF) and GRPO for massive Mixture-of-Experts (MoE) models, infrastructure is the primary bottleneck. `slime` provides critical optimizations for these exact workloads. Today's activity (troubleshooting 160-GPU async rollout setups and integrating offline/online Knowledge Distillation) proves that `slime` is actively positioning itself as a robust, high-throughput orchestration framework capable of bridging standard LLM post-training with cutting-edge RL and distillation techniques at scale.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Daily Digest: AReaL
**Date:** 2026-05-06 | **Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

## 1. Today's Highlights
AReaL shows sustained momentum in optimizing infrastructure for large-scale reinforcement learning. Today's activity centers on expanding multimodal model support and advanced inference optimizations. The community saw the successful merge of Qwen3-VL integration into the Megatron backend, while two critical "high priority" and "WIP" pull requests saw active updates, signaling an impending major dependency bump for the April 2026 release cycle.

## 2. Releases
*   **No new releases** recorded in the last 24 hours. The ecosystem appears to be in a feature-integration phase ahead of a stable release.

## 3. Important Issues
*(3 issues updated in the last 24h)*

*   **[Roadmap] 2026 Q1 Milestones** ([#907](https://github.com/inclusionAI/AReaL/issues/907)): A long-standing roadmap issue (tagged `help wanted`, `call-for-contribution`) that continues to attract community engagement with 24 comments. It serves as the primary tracker for ongoing development.
*   **Agent Service Auto-Recovery** ([#1211](https://github.com/inclusionAI/AReaL/issues/1211)): Proposes adding automatic `scale_down` + `scale_up` mechanisms to the `agent_service` controller during sustained failures, maintaining backward API compatibility.
*   **Router State Recovery** ([#1212](https://github.com/inclusionAI/AReaL/issues/1212)): Highlights a critical infrastructure gap: the Router service currently relies purely on in-memory routing state, which is lost on restart. The issue requests state persistence/recovery capabilities.

## 4. Key PR Progress
*(4 PRs updated in the last 24h)*

*   **Merged: Qwen3-VL Megatron Support** ([#1299](https://github.com/inclusionAI/AReaL/pull/1299)): Successfully closed and merged. This PR unblocks GRPO/PPO training for any Qwen3-VL model on the Megatron backend by adding a dedicated `convert_qwen3_vl_to_hf` conversion pathway via mbridge.
*   **High Priority: April 2026 Dependency Bump** ([#1206](https://github.com/inclusionAI/AReaL/pull/1206)): An ongoing infrastructure overhaul upgrading core dependencies (`megatron-core`, `sglang`, `vllm`, `transformers`). This PR adapts the AReaL codebase to recent breaking API changes in these libraries.
*   **WIP: Rollout Routing Replay (R3) for MoE** ([#1207](https://github.com/inclusionAI/AReaL/pull/1207)): Addresses training instability caused by inference-training routing discrepancies in asynchronous RL. R3 records expert routing indices during inference and forces replay during training to ensure consistency for Mixture-of-Experts (MoE) models.
*   **WIP: Sglang Eagle Speculative Decoding** ([#1176](https://github.com/inclusionAI/AReaL/pull/1176)): Continues development on integrating Sglang's Eagle algorithm for speculative decoding, a crucial optimization for speeding up RL rollout generation.

## 5. Why This Project Matters in Today's RL Landscape
As post-training paradigms (like RLHF and GRPO) scale to massive parameter counts and multimodal architectures, infrastructure bottlenecks become the primary constraint. AReaL's current PR pipeline directly targets the most pressing bottlenecks in modern RL: 
1. **Inference-Training Discrepancy:** PR [#1207](https://github.com/inclusionAI/AReaL/pull/1207) tackles MoE routing drift, a notoriously difficult problem in asynchronous RL that can lead to catastrophic training collapse.
2. **Rollout Throughput:** Integrating speculative decoding ([#1176](https://github.com/inclusionAI/AReaL/pull/1176)) significantly accelerates token generation, which is historically the slowest phase of the RL loop.
3. **Multimodal Scaling:** The newly merged Qwen3-VL support ([#1299](https://github.com/inclusionAI/AReaL/pull/1299)) ensures the framework remains compatible with state-of-the-art vision-language models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-05-06

## 1. Today's Highlights
Activity on `huggingface/trl` is currently dominated by two major internal initiatives: expanding Multimodal/VLM (Vision-Language Model) training capabilities and a massive structural alignment of the `KTOTrainer` to match `DPOTrainer`. Additionally, the community is actively implementing cutting-edge techniques from recent literature, including Self-Distillation Zero and a standardized environment adapter for reward models.

## 2. Releases
No new releases were published on 2026-05-06. The project remains on its current stable version.

## 3. Important Issues
*   **Tracking: Add `&#123;&#37; generation &#37;&#125;` chat templates for common model families** [#5471](https://github.com/huggingface/trl/issues/5471)
    *   *Context:* SFT with `assistant_only_loss=True` requires `&#123;&#37; generation &#37;&#125;` markers to correctly produce assistant token masks. Because very few models ship these natively, this open issue tracks the effort to build training chat templates directly into TRL for common model families.

## 4. Key PR Progress

### Architectural Refactoring & Alignment
*   **KTO-to-DPO Alignment (Closed):** A rapid series of 5 PRs by `albertvillanova` merged today to structurally align `KTOTrainer` with `DPOTrainer`. Changes include centralizing the `_metrics` attribute ([#5705](https://github.com/huggingface/trl/pull/5705)), grouping training arguments ([#5704](https://github.com/huggingface/trl/pull/5704)), simplifying `max_length` init logic ([#5703](https://github.com/huggingface/trl/pull/5703)), cleaning up imports ([#5702](https://github.com/huggingface/trl/pull/5702)), and dropping strict causal LM enforcement ([#5701](https://github.com/huggingface/trl/pull/5701)).
*   **Processor Disambiguation (Open/Closed):** PRs [#5560](https://github.com/huggingface/trl/pull/5560) (Accept processor in `get_training_chat_template`) and [#5561](https://github.com/huggingface/trl/pull/5561) (Revert VLM support in `parse_response`) refactor how TRL handles tokenizers vs. multimodal processors, ensuring cleaner boundaries.

### Advanced Features & Training Optimizations
*   **DeepSeek v4 Support (Open):** Initial groundwork for DeepSeek v4 models is actively being tracked and developed in PR [#5641](https://github.com/huggingface/trl/pull/5641).
*   **Chunked NLL for VLMs & PEFT (Open/Closed):** PR [#5676](https://github.com/huggingface/trl/pull/5676) introduced chunked NLL loss for PEFT, paving the way for PR [#5684](https://github.com/huggingface/trl/pull/5684), which extends this memory-efficient loss computation to VLMs and MoE aux-loss handling.
*   **Self-Distillation Zero (Open):** PR [#5609](https://github.com/huggingface/trl/pull/5609) implements *Self-Distillation Zero* (arXiv: 2604.12002), a method converting binary rewards into dense supervision via self-revision.
*   **OpenReward Standard Adapter (Closed):** PR [#5696](https://github.com/huggingface/trl/pull/5696) added `trl.experimental.openreward`, an adapter allowing any environment speaking the Open Reward Standard (ORS) to seamlessly plug into GRPO, AsyncGRPO, or RLOO trainers.
*   **MFU Helpers (Open):** PR [#5698](https://github.com/huggingface/trl/pull/5698) introduces pure helpers to calculate Model FLOPs Utilization (MFU) for dense and MoE causal LMs.

### Testing & Tooling
*   **GRPO VLM Tests (Closed):** A critical bug preventing VLM training in GRPO due to non-conversational prompts was fixed in PR [#5550](https://github.com/huggingface/trl/pull/5550).
*   **Tiny-Model Scripts Refactor (Closed):** Monolithic model generation scripts were split into per-model layouts for better maintainability ([#5637](https://github.com/huggingface/trl/pull/5637)). Configs are being aligned for GLM-4.5 ([#5638](https://github.com/huggingface/trl/pull/5638)), Cohere ([#5706](https://github.com/huggingface/trl/pull/5706)), and Cohere2 ([#5707](https://github.com/huggingface/trl/pull/5707)).

## 5. Why This Project Matters in Today's RL Landscape
In today's rapidly evolving RLHF/post-training landscape, training infrastructure must support heterogeneous architectures (MoEs, VLMs) and complex reward pipelines. TRL's current trajectory—optimizing chunked loss computation for memory efficiency, standardizing reward environments via ORS, and natively supporting SFT masking for multimodal models—cements its position as the industry-standard framework for production-level LLM alignment. By aggressively refactoring core trainers (like KTO) and introducing highly cited theoretical methods (like Self-Distillation Zero), TRL bridges the gap between cutting-edge AI research and stable, scalable enterprise deployment.

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

# RL Daily Digest: verl
**Date:** 2026-05-06  
**Project:** [verl-project/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
May 5th was a highly active day for the verl ecosystem, specifically focusing on **inference scalability (disaggregated rollout)** and **hardware extensibility**. The community saw a major push to expand inference backend options (NIXL, Mooncake, TRT-LLM) and hardware support (Ascend NPUs), alongside critical refactors to handle complex, multi-modal reward models. 

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
Developers are actively tracking compatibility issues with cutting-edge model architectures:
*   **Qwen3.5 Sequence Parallelism Bug:** An [open issue (#5762)](https://github.com/verl-project/verl Issue #5762) reports a tensor size mismatch (`RuntimeError`) when attempting to train Qwen3.5 with sequence parallelism (`sp=2`). This indicates active development stress in distributed multi-GPU setups for next-gen models.
*   **Qwen3-VL Training Fix Closed:** A previous bug regarding Qwen3-VL SFT training failures ([Issue #4483](https://github.com/verl-project/verl Issue #4483)) was officially closed after resolving a 4-comment discussion, affirmirming verl's stabilizing support for multimodal LLMs.

## 4. Key PR Progress
The PR pipeline is booming with architectural upgrades, totaling 6 active pull requests:

*   **Disaggregated Prefill/Decode Rollout:** PR [#6243](https://github.com/verl-project/verl/pull/6243) introduces prefill-decode disaggregated rollout wiring via NIXL and Mooncake for vLLM. Building on prior SGLang work, this is a massive performance optimization for inference throughput in RLHF.
*   **Native Multimodal Rollout Bridge:** PR [#6245](https://github.com/verl-project/verl/pull/6245) optimizes multimodal inference by bypassing vLLM's in-engine MM processor, directly feeding preprocessed Qwen image/video tensors.
*   **Ascend NPU Support via Liger-Kernel:** PR [#6244](https://github.com/verl-project/verl/pull/6244) brings Liger-Kernel support to Ascend NPUs, complete with a Qwen3-8B GSM8K SFT example. This significantly broadens verl's hardware footprint beyond NVIDIA GPUs.
*   **TRT-LLM Async RL:** PR [#5631](https://github.com/verl-project/verl/pull/5631) enables end-to-end asynchronous RL functionalities using TRT-LLM as the rollout backend.
*   **Reward Manager Refactor:** PR [#6242](https://github.com/verl-project/verl/pull/6242) extracts Reward Model (RM) score assembly into an overridable hook (`RewardManagerBase.assemble_rm_scores`), granting downstream packages greater flexibility for multimodal reward signals.
*   **VeOmni Engine Fix:** PR [#6184](https://github.com/verl-project/verl/pull/6184) drops forward monkey patches in favor of VeOmni's native `return_log_probs` path, fixing an `AttributeError` crash when using fused kernels.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and post-training become the dominant cost centers in LLM development, the efficiency of the rollout (inference) phase is critical. 

Today's activity in verl highlights where the broader RL open-source community is heading: **decoupling compute and hardware abstraction**. By aggressively merging support for disaggregated prefill/decode (vLLM, SGLang, TRT-LLM) and expanding to alternative silicon (Ascend NPUs), verl is positioning itself as a hardware-agnostic, highly performant orchestration layer. Furthermore, architectural refactors to seamlessly handle multimodal tensors (Qwen3-VL) and modular reward scoring demonstrate that verl is rapidly maturing to support complex, multi-modal reasoning tasks (like visual-agentic RL) rather than just text-based alignment.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**RL Open-Source Ecosystem Daily Digest — 2026-05-06**  
**Project:** [Open Instruct (allenai/open-instruct)](https://github.com/allenai/open-instruct)

### 1. Today's Highlights
Activity over the past 24 hours was dominated by backend performance tuning and critical bug fixes for the GRPO (Group Relative Policy Optimization) implementation. There were no new releases or open issues, but contributor **finbarrtimbers** pushed forward four significant PRs aimed at improving metric observability, active-sampling diagnostics, and training stability for RLHF/RLAIF workloads.

### 2. Releases
**None.** 
No new versions or tags were cut in the last 24 hours.

### 3. Important Issues
**None.** 
Zero issues were opened or updated today, indicating a current focus on in-flight code contributions rather than community bug-tripping or feature requests.

### 4. Key PR Progress
All activity centers around hardening the RL training loops and vLLM integrations:

*   **[PR #1642](https://github.com/allenai/open-instruct/pull/1642) [OPEN]: Convergence fix for `grpo.py` vs `grpo_fast.py`**  
    *Details:* A critical patch resolving a 570x inflation in `val/tis_clipfrac` caused by a mismatch between vLLM (intra-doc) and the per-step logprob recompute (cross-doc attention). It also patches a broken step-0 weight sync in the olmo-core/FSDP2 GRPO path, ensuring mathematical equivalence with the Hugging Face reference script.
*   **[PR #1650](https://github.com/allenai/open-instruct/pull/1650) [OPEN]: Unified interface for off-policy correction + IcePop**  
    *Details:* Introduces the "IcePop" algorithm and creates a unified interface for off-policy corrections, a vital component for maintaining on-policy stability in asynchronous, high-throughput LLM generation environments.
*   **[PR #1656](https://github.com/allenai/open-instruct/pull/1656) [OPEN]: `time/per_group_wall_time` metric**  
    *Details:* Replaces the tail-inflated `time/getting_response` metric (previously calculated as the *max* group time) with a *mean* group generation time, giving engineers a much more accurate picture of true wall-clock throughput.
*   **[PR #1657](https://github.com/allenai/open-instruct/pull/1657) [OPEN]: Active-sampling diagnostics**  
    *Details:* Upgrades filtered-prompt logging from `DEBUG` to `INFO` and introduces a `batch/filtered_prompts_pct` metric. This makes it significantly easier to detect and diagnose active-sampling failure modes during training runs.

### 5. Why This Project Matters in Today's RL Landscape
As AI2's flagship LLM training framework, Open Instruct sits at the critical intersection of scalable distributed systems (FSDP2) and cutting-edge post-training alignment (GRPO/RLHF). Today's updates highlight a maturing RL ecosystem grappling with the realities of large-scale asynchronous generation—specifically, the need for precise off-policy corrections, exact attention matching between weight-synced training loops and inference engines (vLLM), and granular telemetry to prevent silent performance degradation. By stabilizing these under-the-hood metrics and math checks, Open Instruct continues to provide the open-source community with a reliable blueprint for reproducible, production-grade LLM reinforcement learning.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# RL Open-Source Ecosystem Daily Digest: CleanRL
**Date:** 2026-05-06 | **Project:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

## 1. Today's Highlights
Cleanrl experienced a quiet day with no newly opened issues, closed tickets, or software releases. The only observable activity centers on continued refinements to performance and memory management, specifically regarding a pull request aimed at optimizing the Atari/EnvPool training pipeline.

## 2. Releases
**No new releases.** The repository remains on its latest stable version with no new tags or version bumps published in the last 24 hours.

## 3. Important Issues
**None.** There were 0 issues opened, closed, or updated within the last 24 hours. 

## 4. Key PR Progress
*   **Memory Optimization for EnvPool:** PR [#552 perf: avoid tensor memory copy in ppo_atari_envpool](https://github.com/vwxyzjn/cleanrl/pull/552) received an update.
    *   **Author:** srygaard
    *   **Technical Context:** The author identifies a critical memory bottleneck in the standard `ppo_atari_envpool.py` pipeline. The current implementation utilizes `torch.tensor()`, which inherently performs a deep memory copy upon instantiation. The PR aims to refactor this data ingestion step—likely utilizing `torch.as_tensor()` or direct memory mapping—to transfer `envs.step()` outputs to the GPU without allocating redundant system memory, significantly improving throughput.

## 5. Why This Project Matters in Today's RL Landscape
While high-level libraries (e.g., Stable Baselines3, Ray RLlib) abstract away algorithmic complexities, CleanRL serves as the industry standard for transparent, single-file reinforcement learning implementations. 

PR #552 perfectly encapsulates the project's dual value proposition: it provides educational, readable code while remaining viable for serious empirical research. As modern RL workflows increasingly rely on massively parallelized environment execution (like EnvPool), the overhead of Python-to-C++ data transfers becomes a primary bottleneck. Optimizing tensor instantiation at the RL loop's edge allows researchers to push hardware limits (e.g., maximizing Atari FPS) without sacrificing the readable, "clean" codebase structure that makes CleanRL indispensable to the RL community.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

### 1. Today's Highlights
For May 6, 2026, the Stable Baselines3 (SB3) repository experienced a quiet 24 hours with no new releases, no newly opened issues, and only one active Pull Request. The sole focus of the day's activity centers on extending action distribution flexibility for continuous control policies.

### 2. Releases
**No new releases.**

### 3. Important Issues
**No new or updated issues.** The issue tracker remained dormant over the past 24 hours.

### 4. Key PR Progress
The only repository movement comes from a recently opened feature PR aimed at continuous action space refinement:
*   **[OPEN] [#2249 Add opt-in tanh squashing for DiagGaussianDistribution mean actions](https://github.com/DLR-RM/stable-baselines3/pull/2249)** (Authored by `cgliner`)
    *   **Summary:** This PR introduces a `squash_mean_actions` argument to `policy_kwargs` for A2C and PPO agents utilizing the `DiagGaussianDistribution`. When set to `True`, the policy wraps the Gaussian mean action network in an `nn.Tanh()` module. 
    *   **Technical Significance:** Constraining unbounded Gaussian outputs to a $[-1, 1]$ range prevents extreme outlier actions during the exploration phase, a common requirement for simulated robotics and continuous control environments (e.g., MuJoCo). Making this *opt-in* ensures strict backward compatibility with existing SB3 benchmarks while giving practitioners the flexibility to align behavior closer to algorithms like SAC, which natively uses Tanh-squashed policies.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains a foundational pillar of the open-source reinforcement learning ecosystem. While the broader RL community frequently shifts focus toward Large Language Model (LLM) alignment, offline RL, and massive distributed architectures, SB3 provides clean, heavily documented, and reliable implementations of on-policy classics (PPO, A2C) and off-policy workhorses (SAC, TD3). 

PRs like #2249 demonstrate the project's continued commitment to serving applied researchers and engineers. By providing modular, "lego-block" adjustments like `squash_mean_actions`, SB3 allows users to easily tweak action distributions for highly specific simulation environments without having to rewrite core algorithmic boilerplate.

</details>