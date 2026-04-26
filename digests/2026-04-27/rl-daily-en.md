# RL Open Source Daily Digest 2026-04-27

> Generated: 2026-04-26 22:07 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem is currently bifurcated into two highly distinct tiers of activity. The top tier—comprising post-training and LLM alignment frameworks (verl, TRL, OpenRLHF, AReaL, slime, Open Instruct)—is experiencing hyper-growth and high-velocity development. These projects are actively racing to support complex reasoning models, agentic workflows, and massive distributed compute backends. 

Conversely, the foundational, classic RL environments and single-agent algorithm libraries (Gymnasium, PettingZoo, CleanRL, Stable Baselines3, Tianshou, torchtune, rl_games, ROCK, ROLL) are in a mature, stable maintenance phase. While Gymnasium and PettingZoo see ongoing infrastructural upkeep, the majority of classic RL projects saw zero activity, highlighting an industry-wide pivot in open-source RL bandwidth toward LLM post-training alignment (RLHF/GRPO) rather than traditional single or multi-agent algorithm research.

## Activity Comparison

*Note: The following projects recorded zero activity in the last 24 hours and are excluded from the table for brevity: CleanRL, rl_games, ROCK, ROLL, Stable Baselines3, Tianshou, torchtune.*

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 2 | 19 | 0 | Expanding fully async RLHF, advanced DAPO/GRPO sampling, and broad hardware compatibility. |
| **TRL** | 3 | 16 | 1 | v1.3.0 release for Qwen 3.6; aggressive refinement of GRPO math and async rollouts. |
| **AReaL** | 2 closed | 10 | 0 | Pivoting to multi-step agent APIs (Tau2) and hardening Ascend NPU/Megatron infra. |
| **OpenRLHF** | 0 | 4 | 0 | Modernizing tool-use SFT and proposing a major shift away from DeepSpeed to AutoModel. |
| **slime** | 1 | 2 | 0 | Adding PEFT/LoRA support for Megatron and testing novel SAPO policy losses. |
| **PettingZoo** | 1 | 3 | 1 | v1.26.0 release drops legacy environments and adds Python 3.13/3.14 support. |
| **Open Instruct** | 0 | 2 | 0 | Focus on deterministic SFT parity and decoupling evaluation from git workflows. |
| **Gymnasium** | 0 | 3 | 0 | Routine maintenance; adding automated link checking and cataloging 3rd-party envs. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Advanced Policy Optimization:** There is a concentrated effort to move beyond standard PPO. Projects are implementing novel reward filtering (verl's DAPO "band-pass" filtering), alternative policy losses (slime's SAPO), and dynamic reward weighting (TRL).
*   **Granular Importance Sampling & Credit Assignment:** TRL introduced sentence-level importance sampling specifically for LPO/Ling 2.0, while verl tightened GDPO and DrGRPO loss aggregation. 
*   **Calibrated & Reasoning Models:** TRL introduced Brier score calibration rewards for Reinforcement Learning from Calibrated Reasoning (RLCR), reflecting a need for models to better gauge their own confidence.

**Engineering & Infrastructure Signals**
*   **Agentic Workflows & Multi-turn Alignment:** Frameworks are rapidly adapting to tool-using agents. OpenRLHF and TRL fixed multi-turn/chat template masking for "thinking" models, AReaL introduced session-based runtime agent APIs, and OpenRLHF added tool-field support for SFT.
*   **Distributed Training Backend Shifts:** OpenRLHF proposed a major migration away from DeepSpeed to HuggingFace `AutoModel`. Concurrently, verl patched FSDP autocasting, and AReaL integrated Expert Parallelism (EP) with Megatron.
*   **Memory & Hardware Efficiency:** Scaling alignment is pushing frameworks toward Parameter-Efficient Fine-Tuning (PEFT) like LoRA (slime) and ensuring operation across diverse hardware like Ascend NPUs (AReaL) and older non-Ampere NVIDIA GPUs (verl).

## Differentiation Analysis

*   **verl vs. TRL (The RLHF Leaders):** Both are competing heavily in the GRPO/RLHF space, but verl is currently differentiating through complex distributed systems engineering (fully asynchronous pipelines, GenRM) and granulated reward sampling. TRL acts as the highly agile, accessible counterpart, rapidly shipping support for cutting-edge proprietary architectures (Qwen 3.6) and iterating heavily on the underlying mathematics of GRPO.
*   **AReaL vs. OpenRLHF (Full-Stack vs. Modular):** AReaL is distinctively positioning itself as an end-to-end agent-training ecosystem with its new runtime agent service APIs. OpenRLHF remains heavily focused on the core training loop and modernizing its underlying distributed engine abstractions.
*   **slime vs. Open Instruct (Scale vs. Rigor):** slime is focusing on enabling massive scale via Megatron-LM integrations and LoRA for dense actors. Open Instruct contrasts by focusing on bit-for-bit deterministic parity and cloud-agnostic evaluation automation, appealing to highly rigorous, reproducible research pipelines.

## Community Momentum & Maturity

*   **Hyper-Active Post-Training Ecosystem:** TRL and verl dominate raw throughput, utilizing massive community and maintainer bases to ship critical bug fixes (e.g., TRL's spurious KL gradient fix) and hardware compatibility patches at high velocity.
*   **Cross-Pollination of Contributors:** A notable trend is the appearance of power contributors (e.g., `taivu1998`) submitting substantial PRs across multiple ecosystem projects (TRL, OpenRLHF, slime) within the same 24-hour period, accelerating the standardization of tool-use and masking fixes across the open-source landscape.
*   **Mature Maintenance Standards:** The Farama Foundation projects (Gymnasium, PettingZoo) continue to set the gold standard for sustainable open-source maintenance. The transition from spotting a broken link to merging a `sphinx linkcheck` GitHub Action in Gymnasium exemplifies the operational maturity of these foundational libraries.

## Trend Signals

1.  **The Shift to Multi-Turn Agents:** The clear industry direction is single-turn RLHF evolving into multi-turn, tool-using agent training. Frameworks are rapidly building out session management, step-based environments, and multi-turn loss masking to accommodate this.
2.  **Diversification of Compute Backends:** The heavy reliance on DeepSpeed is waning. The ecosystem is actively building abstractions around native HuggingFace `AutoModel`, Megatron-LM, and alternative hardware accelerators (Ascend NPUs) to avoid vendor lock-in and overcome memory limitations.
3.  **Alignment of "Thinking" Models:** As models adopt DeepSeek-R1 and Qwen3 style interleaved "thinking" tokens, infrastructure teams are expending massive effort to ensure chat templates, SFT masks, and token type IDs are accurately rendered without breaking traditional RL pipelines.

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

Here is the RL open-source ecosystem daily digest for April 27, 2026.

### 1. Today's Highlights
Activity in the **slime** repository over the last 24 hours was defined by significant functional expansions for RL fine-tuning. The community is actively pushing to expand the framework's algorithmic portfolio and architectural compatibility, specifically through the introduction of a novel policy-loss objective (SAPO) and critical infrastructure for Parameter-Efficient Fine-Tuning (PEFT) via Megatron-Bridge LoRA.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
*   **VLM Integration Roadblock for Qwen3-VL:** 
    *   **Issue:** [#1863 [question] qwen3-vl转化](https://github.com/THUDM/slime/issues/1863)
    *   **Context:** A user flagged a gap in the current tooling, noting that there are no configuration parameters in `slime/scripts/models` for Vision-Language Models (VLMs). The user is seeking a standardized pipeline to convert the Qwen3-VL model series from Hugging Face into Megatron format for RL training. This highlights a growing community demand for native multimodal agent support within the framework.

### 4. Key PR Progress
*   **Megatron-Bridge LoRA Support for GRPO ([#1865](https://github.com/THUDM/slime/pull/1865))**
    *   *Author:* taivu1998
    *   *Summary:* Addresses #1202 by introducing the first supported Megatron-Bridge LoRA path for dense GRPO (Group Relative Policy Optimization) actor training. The PR implements necessary CLI flags, restricts the PEFT application strictly to the actor model, and ensures correct export of the effective weights. This is a critical update for scaling large RLHF runs without prohibitive VRAM requirements.
*   **SAPO Policy Loss Objective ([#1864](https://github.com/THUDM/slime/pull/1864))**
    *   *Author:* taivu1998
    *   *Summary:* Implements SAPO as an alternative policy-loss objective alongside the standard clipped PPO. It introduces configurable hyperparameters (`--sapo-tau-pos` and `--sapo-tau-neg`) to handle positive and negative advantage gates, routing the objective through the shared policy-loss helper. 

### 5. Why This Project Matters in Today's RL Landscape
In the modern RL landscape, post-training alignment (like RLHF/GRPO) is heavily constrained by GPU memory and the rigid architectures of massive LLMs and VLMs. Today's activity in the slime ecosystem perfectly reflects the industry's current technical priorities:
1.  **Memory-Efficient Scaling:** PR [#1865] demonstrates a push toward enabling massive distributed RL training using LoRA via Megatron-Bridge, a necessity for open-source teams looking to train frontier models on consumer or cloud GPU clusters efficiently.
2.  **Algorithmic Diversification:** Integrating alternative loss functions like SAPO alongside standard PPO ([#1864]) shows that slime is actively serving researchers looking to solve reward-hacking and training instability—common pain points in current RL alignment.
3.  **Multimodal Alignment:** Issue [#1863] underscores the immediate, practical demand to extend text-only RL pipelines to Vision-Language Models like Qwen3-VL, which remains a frontier challenge in building capable, generalized AI agents.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-04-27

## 1. Today's Highlights
- **10 PRs updated**, 2 new open; **2 issues closed** (NPU training bug, data gateway timeout).
- New **runtime agent service APIs** and **Tau2 agent rollout example** open for review—signals growing focus on multi-step agent training workflows.
- Two infrastructure hardening merges: **HCCL subgroup eager init** for Ascend NPU and **configurable data-service timeout** for large dataset loading.

## 2. Releases
No new releases.

## 3. Important Issues
| # | Title | Status | Significance |
|---|-------|--------|--------------|
| [#1099](https://github.com/inclusionAI/AReaL/issues/1099) | `[BUG] kl_ctl > 0` crashes training on NPU | **CLOSED** | Root-cause traced to lazy HCCL communicator init during `ref.compute_logp()`. Fixed by PR [#1254](https://github.com/inclusionAI/AReaL/pull/1254). Critical for anyone using reference models on Ascend hardware. |
| [#1264](https://github.com/inclusionAI/AReaL/issues/1264) | Data service gateway `--forward-timeout` hardcoded to 60 s causes timeout on large datasets | **CLOSED** | Quickly resolved via PR [#1263](https://github.com/inclusionAI/AReaL/pull/1263), which exposes a configurable `setup_timeout` (default 120 s). |

## 4. Key PR Progress

### Agent Service & Tau2 Rollout
- **[#1266](https://github.com/inclusionAI/AReaL/pull/1266) (OPEN)** — Adds runtime-oriented agent service APIs (`new_session`, `step`, `set_reward`) plus experimental Claude and **Tau2** examples, including an async Tau2 rollout driver validated against a local SGLang-served **Qwen3-0.6B**. Expands AReaL from single-turn RLHF toward multi-turn agent training.
- **[#1226](https://github.com/inclusionAI/AReaL/pull/1226) (CLOSED → merged base)** — Introduced `Tau2InferenceWorkflow` (lightweight) and `Tau2AgentServiceWorkflow` (full agent-service integration). Foundation for [#1266].

### Infrastructure & Reliability
- **[#1254](https://github.com/inclusionAI/AReaL/pull/1254) (CLOSED)** — Eagerly initialize HCCL subgroups to fix `ref.compute_logp()` crash on Ascend NPU. Resolves [#1099].
- **[#1263](https://github.com/inclusionAI/AReaL/pull/1263) (CLOSED)** — Adds configurable `setup_timeout` to the data-service gateway, preventing timeouts when downloading/preprocessing large HuggingFace datasets.
- **[#1268](https://github.com/inclusionAI/AReaL/pull/1268) (OPEN)** — Stale session cleanup for inference data proxy: moves dump and RTensor shard cleanup into `SessionStore.cleanup_stale`. Supersedes [#1267].

### Metrics & Engine
- **[#1249](https://github.com/inclusionAI/AReaL/pull/1249) (OPEN, reviewed)** — Fixes SFT token-count stats (`sft/n_tokens`, `sft/n_valid_tokens`, `sft/prompt_tokens`) that were under-reported by `context_parallel_world_size` after CP-local loss changes in #1223.
- **[#1252](https://github.com/inclusionAI/AReaL/pull/1252) (CLOSED)** — Adds Megatron engine **awex weight-update adapter with Expert Parallelism (EP)**, implementing a full connect → update_weights → disconnect lifecycle via an HTTP gateway.

### Community
- **[#1262](https://github.com/inclusionAI/AReaL/pull/1262) (CLOSED)** — Corrects next community meeting date to **2026-05-02** (Saturday).

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **full-stack RL training framework** that spans SFT, RLHF, and now **multi-turn agent RL**—the direction the field is rapidly moving post-RLHF. Three signals from today's activity reinforce this:

1. **Agent-native APIs** ([#1266](https://github.com/inclusionAI/AReaL/pull/1266)): Session-based `step`/`set_reward` primitives and Tau2 workflows reflect the shift from single-turn reward models to multi-step tool-using agent training.
2. **Cross-vendor hardware support**: The HCCL fix ([#1254](https://github.com/inclusionAI/AReaL/pull/1254)) and Megatron+EP adapter ([#1252](https://github.com/inclusionAI/AReaL/pull/1252)) show active investment in running on **Ascend NPU** and scaling with **Expert Parallelism**, broadening deployability beyond NVIDIA.
3. **Production-grade data infra**: Configurable timeouts ([#1263](https://github.com/inclusionAI/AReaL/pull/1263)) and stale-session cleanup ([#1268](https://github.com/inclusionAI/AReaL/pull/1268)) indicate operational maturity needed for large-scale, long-running RL jobs.

Together, these moves make AReaL a project to watch for teams training reasoning models and tool-using agents at scale.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-04-27

## 1. Today's Highlights
TRL experiences a high-velocity development day, culminating in the **v1.3.0 release** which introduces training support for the new **Qwen 3.6** model family. The day's PR pipeline (16 PRs updated) is heavily focused on refining GRPO optimization, specifically targeting importance sampling, async rollouts, and edge-case gradient fixes. 

## 2. Releases
- **[v1.3.0](https://github.com/huggingface/trl/releases/tag/v1.3.0):** Shipped by maintainer *qgallouedec*. The flagship feature is the integration of the **Qwen 3.6** architecture (e.g., `Qwen/Qwen3.6-27B`). Because Qwen 3.6 reuses the `Qwen3_5Moe*` architecture but utilizes a distinct chat template (adding a `preserve_thinking` flag and tweaking tool-arg stringification), exact-string template matching was updated to ensure seamless RLHF/PPO fine-tuning.

## 3. Important Issues
- **Multimodal Alignment Bottleneck ([#5646](https://github.com/huggingface/trl/issues/5646)):** User *dgawlik* reported that `DPOTrainer` crashes during padding for multimodal Gemma 4. This highlights ongoing friction in aligning state-of-the-art multimodal LLMs.
- **PPO Optimization Clarification ([#5645](https://github.com/huggingface/trl/issues/5645)):** User *zhiang28* sparked a technical review of `PPOTrainer`'s execution logic, questioning whether `optimizer.step()` is correctly bound to `local_batch_size` rather than `mini_batch_size` between lines 804 and 882 of the trainer.
- **CI Instability ([#5633](https://github.com/huggingface/trl/issues/5633)):** Quality checks are failing due to a missing `ruff` directory, currently stalling CI runs.

## 4. Key PR Progress
*Several significant optimization and bugfix PRs were pushed today, heavily spearheaded by contributor taivu1998:*

- **GRPO Robustness & Advanced Techniques:** 
  - **Sentence-Level Importance Sampling ([#5651](https://github.com/huggingface/trl/pull/5651), [#5655](https://github.com/huggingface/trl/pull/5655)):** Introduced an intermediate sentence-level granularity for importance sampling in GRPO, explicitly requested for the new **LPO / Ling 2.0** training path.
  - **Async Rollout Hardening ([#5650](https://github.com/huggingface/trl/pull/5650), [#5656](https://github.com/huggingface/trl/pull/5656)):** Scoped improvements to `AsyncGRPOTrainer` to better handle async rollout/training requests without disrupting stable `GRPOTrainer` semantics.
- **Algorithmic Enhancements:**
  - **Calibration Rewards ([#5649](https://github.com/huggingface/trl/pull/5649)):** Added Brier score calibration reward (`1 - (confidence - correctness) ** 2`) and format rewards for Reinforcement Learning from Calibrated Reasoning (RLCR).
  - **Dynamic Reward Weights ([#5657](https://github.com/huggingface/trl/pull/5657)):** Proposed a Python API hook (`reward_weights_scheduler`) for dynamic reward-function weighting during online GRPO/RLOO training.
  - **Adaptive Beta-DPO ([#5654](https://github.com/huggingface/trl/pull/5654)):** Introduced dynamic batch scaling capabilities to `DPOTrainer`.
- **Critical Bug Fixes:**
  - **Spurious KL Gradients ([#5640](https://github.com/huggingface/trl/pull/5640)):** Fixed a mathematical edge-case where zero-std reward groups caused the KL penalty term to generate non-zero gradients in GRPO.
  - **GKD Loss Scaling ([#5653](https://github.com/huggingface/trl/pull/5653)):** Corrected loss scaling under gradient accumulation for Generalized Knowledge Distillation.
  - **Gemma 3 Architecture Compatibility ([#5643](https://github.com/huggingface/trl/pull/5643), [#5644](https://github.com/huggingface/trl/pull/5644)):** Resolved a `ValueError` by injecting required `token_type_ids` for text-only Gemma 3 training in `GRPOTrainer`.

## 5. Why This Project Matters in Today's RL Landscape
As the LLM ecosystem shifts from standard supervised fine-tuning (SFT) to complex, reasoning-heavy post-training paradigms (like OpenAI's o1/o3 and DeepSeek-R1), TRL serves as the open-source engine making these techniques accessible. Today's updates perfectly illustrate the bleeding edge of RLHF: managing GPU scheduling via **async rollouts**, exploring granular **sentence-level importance sampling** for nuanced credit assignment, and ensuring mathematically sound **KL divergence/gradient behavior**. Combined with rapid integrations of novel architectures like Qwen 3.6 and specialized reasoning formats (RLCR), TRL continues to be fundamental in bridging the gap between theoretical RL research and production-ready LLM alignment.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

### RL Daily Digest: OpenRLHF — 2026-04-27

**1. Today's Highlights**
Activity in the OpenRLHF repository over the last 24 hours was heavily focused on enhancing Supervised Fine-Tuning (SFT) flexibility and modernizing the training backend. Contributors opened four new Pull Requests with zero new issues or releases, indicating a phase of active, forward-driving feature development. Key themes include agentic tool-use integration, fixing complex multi-turn masking for reasoning models, and a major proposed shift away from DeepSpeed.

**2. Releases**
No new releases were recorded in the past 24 hours.

**3. Important Issues**
No new issues were opened or updated in the past 24 hours. 

**4. Key PR Progress**
*   **[Major Architecture] Replace Deepspeed backend with Automodel** ([PR #1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226))
    *Author: hijkzzz* | The most notable PR of the day. This proposes replacing the DeepSpeed integration with HuggingFace's native `AutoModel` abstractions. If merged, this represents a major architectural shift, likely aiming to reduce framework overhead and improve compatibility with newer distributed training engines.
*   **[Bug Fix] Fix multi-turn SFT masks for Qwen3 thinking templates** ([PR #1227](https://github.com/OpenRLHF/OpenRLHF/pull/1227))
    *Author: taivu1998* | Addresses Issue #1080. The PR resolves a discrepancy where multi-turn SFT assistant masks were computed from partial conversation prefixes rather than the final full chat-template rendering. This is critical for accurately training on the complex reasoning traces of Qwen3 and DeepSeek-style "thinking" models.
*   **[Feature] Add SFT tools field support for chat templates** ([PR #1228](https://github.com/OpenRLHF/OpenRLHF/pull/1228))
    *Author: taivu1998* | Introduces the ability to forward a row-level `tools` field during SFT chat-template rendering. This update supports modern agentic workflows by ensuring tool definitions are correctly formatted across split, full-conversation, and multiturn preprocessing paths.
*   **[UX/Docs] Clarify reward normalization behavior for custom reward sources** ([PR #1229](https://github.com/OpenRLHF/OpenRLHF/pull/1229))
    *Author: taivu1998* | Improves transparency around PPO reward normalization. It explicitly clarifies that `--reward.normalize_enable` acts on local reward-model and critic value-head outputs, rather than precomputed custom rewards. The PR adds a one-time CLI warning to prevent user confusion when utilizing custom Python reward functions or HTTP reward APIs.

**5. Why This Project Matters in Today's RL Landscape**
As the RL landscape shifts heavily toward complex reasoning models (e.g., Qwen3, DeepSeek-R1) and tool-using agents, training infrastructure must adapt rapidly. OpenRLHF is demonstrating exactly this evolution. By fixing masking for interleaved "thinking" tokens ([PR #1227](https://github.com/OpenRLHF/OpenRLHF/pull/1227)) and adding native SFT tool-field support ([PR #1228](https://github.com/OpenRLHF/OpenRLHF/pull/1228)), the project is positioning itself as an essential stack for post-training modern LLMs. Furthermore, the potential pivot away from DeepSpeed toward standard `AutoModel` paradigms ([PR #1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226)) reflects a broader industry trend of moving toward more modular, user-friendly distributed training backends.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-04-27 | **Project:** [volcengine/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
Activity on the `verl` repository remains highly focused on architectural expansion and stability, with 19 pull requests updated and 2 issues tracked in the last 24 hours. Key themes include major feature expansions for fully asynchronous training (GenRM and online policy distillation), critical bug fixes for tensor processing in distillation paths, and enhanced compatibility for older vLLM versions and non-Ampere GPUs. 

## 2. Releases
No new releases were cut today.

## 3. Important Issues
*   **Distillation Tensor Bug ([#6152](https://github.com/verl-project/verl/issues/6152)):** A newly opened critical issue reveals that a recent change (`#6127`) breaks the distillation pipeline. The hardcoded assumption that the ragged dimension is always the last dimension causes a crash for `teacher_logprobs`. 
*   **GenRM in Fully Async Pipelines ([#5949](https://github.com/verl-project/verl/issues/5949)):** This feature request (now closed) highlighted that `FullyAsyncRollouter` hardcodes `self.use_rm = False`, previously blocking the use of GPU-based Generative Reward Models (GenRM) in async workflows.

## 4. Key PR Progress
*   **Fully Async Expansions:**
    *   **GenRM/DisRM Support ([#6044](https://github.com/verl-project/verl/pull/6044)):** Closed/merged today. Enables GPU-based reward models for fully async training, directly resolving the limitation highlighted in Issue #5949. Validation for this is also being added ([#6151](https://github.com/verl-project/verl/pull/6151)).
    *   **Online Policy Distillation ([#6056](https://github.com/verl-project/verl/pull/6056)):** Enables online policy distillation (OPD) for fully asynchronous training.
*   **Critical Bug Fixes:**
    *   **Nested Tensor Rebuild ([#6149](https://github.com/verl-project/verl/pull/6149)):** Fixes the newly reported distillation crash (#6152) by correcting the ragged dimension indexing in `nested_tensor_from_tensor_list`.
    *   **FSDP Autocast Dtype ([#6150](https://github.com/verl-project/verl/pull/6150), [#5933](https://github.com/verl-project/verl/pull/5933)):** Resolves an issue where `forward_step` hardcoded `torch.autocast` to `bfloat16`, silently breaking user configurations for `fp32` or `fp16`.
*   **Advanced RL Algorithms & Modifiers:**
    *   **DAPO Dynamic Sampling ([#6160](https://github.com/verl-project/verl/pull/6160)):** Restores opt-in DAPO-style dynamic sampling for the one-step-off policy trainer.
    *   **Band-pass Filter for Sampling ([#6155](https://github.com/verl-project/verl/pull/6155)):** Introduces soft-threshold interval filtering for DAPO/GRPO (e.g., `0.2 <= seq_reward <= 0.8`) to discard trivial prompts instead of relying solely on hard binary outcomes.
    *   **Algorithm Hardening:** Updates include tightening GDPO multi-reward component support ([#6159](https://github.com/verl-project/verl/pull/6159)), locking down DrGRPO loss aggregation semantics ([#6157](https://github.com/verl-project/verl/pull/6157)), and fixing the `optimal_token_baseline` estimator by wiring up `sum_pi_squared` ([#6153](https://github.com/verl-project/verl/pull/6153)).
*   **Hardware & Environment Compatibility:**
    *   **Non-Ampere GPU Support ([#6148](https://github.com/verl-project/verl/pull/6148)):** Adds `attn_implementation` to `HFModelConfig`, allowing users to override attention backends for older GPUs via Hydra configs.
    *   **vLLM Version Fix ([#6147](https://github.com/verl-project/verl/pull/6147)):** Wraps the `run_headless` import to prevent fatal `ImportError` crashes on vLLM <= 0.8.2.
*   **Multimodality:** A WIP PR adds audio data pathways and Qwen3-Omni model support ([#6118](https://github.com/verl-project/verl/pull/6118)).

## 5. Why This Project Matters in Today's RL Landscape
`verl` is establishing itself as a highly robust, production-grade framework for complex Reinforcement Learning from Human Feedback (RLHF) and post-training workloads. Today's activity demonstrates a mature ecosystem actively pushing beyond standard single-model PPO:
1.  **Scalable Async Workloads:** By integrating GenRM and OPD into fully async pipelines, `verl` is directly tackling the massive compute bottlenecks associated with LLM alignment and synthetic data generation.
2.  **Granular Algorithmic Control:** PRs like the DAPO "band-pass" reward filtering and the precise fixes to tensor dimensions show a shift from proving algorithmic concepts to making them stable and tunable for enterprise-scale distributed training.
3.  **Lowering Hardware Barriers:** Explicit patches for non-Ampere GPUs and legacy vLLM versions ensure that the framework remains accessible for diverse research clusters, not just top-tier compute clusters.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL Ecosystem Daily Digest for Open Instruct on 2026-04-27.

# RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-04-27
**Repository:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

### 1. Today's Highlights
Activity on April 27, 2026, was characterized by **infrastructure hardening and evaluation automation**. The repository saw zero new issues and zero new releases, but two focused Pull Requests from contributor `finbarrtimbers` highlight ongoing, critical work under the hood: achieving exact bit-for-bit parity in core training loops and decoupling evaluation submissions from legacy git-dependencies.

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **No new or updated issues** were logged in the last 24 hours. 

### 4. Key PR Progress
*   **[Training Parity] [OPEN] Match reference SFT run: olmo_core_finetune parity with pure olmo-core** ([PR #1620](https://github.com/allenai/open-instruct/pull/1620))
    *   *Context:* Updated yesterday, this PR addresses a divergence observed between `open_instruct/olmo_core_finetune.py` and a pure `olmo-core` Supervised Fine-Tuning (SFT) loop (tracked via Beaker experiment `01KNMEJKEZNJKZH9QWQW8CS0JW`). 
    *   *Significance:* Achieving exact step-by-step parity is critical for RL researchers. Before optimizing RLHF/DPO pipelines, engineers must be absolutely certain that the underlying SFT initialization wrapper (`open_instruct`) behaves identically to the base framework.
*   **[Eval Automation] [OPEN] Add scripts/submit_eval_jobs_new.py** ([PR #1638](https://github.com/allenai/open-instruct/pull/1638))
    *   *Context:* Created yesterday, this PR introduces a new script to submit evaluation jobs directly via `beaker experiment create`, bypassing `gantry` and `git ref` requirements. It supports Beaker datasets, Hugging Face repositories, Weka paths, and Google Cloud Storage (`gs://`) model locations.
    *   *Significance:* Streamlining the eval submission pipeline removes significant DevOps friction. Supporting direct HF/weka/cloud reads allows RL researchers to iterate and evaluate newly tuned policies much faster without re-structuring repository states.

### 5. Why This Project Matters in Today's RL Landscape
In the modern RLHF landscape (dominated by post-training alignment techniques like DPO, PPO, and their variants), the reproducibility and reliability of the underlying fine-tuning infrastructure are just as important as the RL algorithms themselves. Open Instruct acts as AI2's robust scaffolding for these post-training experiments. 

Today's PR updates underscore a mature phase in the open-source RL ecosystem: moving beyond "just making it work" to achieving deterministic framework parity and highly automated, cloud-agnostic evaluation pipelines. By ensuring that wrappers do not introduce unintended training divergences ([PR #1620](https://github.com/allenai/open-instruct/pull/1620)) and decoupling evaluation from rigid git-checkout workflows ([PR #1638](https://github.com/allenai/open-instruct/pull/1638)), Open Instruct continues to lower the operational overhead required for rigorous open-source reinforcement learning research.

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

**RL Ecosystem Daily Digest: Gymnasium**  
**Date:** 2026-04-27  

### 1. Today's Highlights  
The Gymnasium repository experienced a quiet day with **no new issues, releases, or updates on existing issues**. Activity was entirely focused on repository maintenance and documentation, specifically regarding automated URL validation and the cataloging of third-party environments. 

### 2. Releases  
* **None.** No new versions or patches were released in the past 24 hours.

### 3. Important Issues  
* **None.** Zero issues were created or updated within the last 24 hours.

### 4. Key PR Progress  
While new feature development was static, three Pull Requests saw updates, heavily focused on documentation robustness and community ecosystem expansion:

* **Automated Linkchecking Introduced:** [PR #1564](https://github.com/Farama-Foundation/Gymnasium/pull/1564) (Closed/Merged) by core maintainer `pseudo-rnd-thoughts` implements `sphinx linkcheck` via a new GitHub Action. This ensures automated validation of documentation URLs to prevent future 404 errors.
* **404 Link Hotfix:** [PR #1562](https://github.com/Farama-Foundation/Gymnasium/pull/1562) (Closed) by `LonelyGuy-SE1` directly inspired the above automation by identifying and fixing a broken link in the Gym compatibility documentation.
* **New 6-DoF Environment Proposal:** [PR #1563](https://github.com/Farama-Foundation/Gymnasium/pull/1563) (Open) by `zuorenchen` proposes adding the *Balloon Popping Challenge* to the official third-party environments list. This environment introduces a 6-Degree-of-Freedom (6-DoF) Rocket Guidance, Navigation, and Control (GNC) simulation to the Gymnasium API.

### 5. Why This Project Matters in Today's RL Landscape  
Gymnasium (the spiritual successor to OpenAI Gym) remains the foundational API standard for single-agent reinforcement learning. Today's digest highlights two critical aspects of modern open-source RL infrastructure:
1. **Ecosystem Expansion:** The continuous submission of third-party environments (like the 6-DoF GNC rocket simulation) demonstrates the community's reliance on Gymnasium as the universal adapter for diverse physics and robotics engines.
2. **Maintainer Resilience:** The rapid transition from spotting a broken link ([PR #1562](https://github.com/Farama-Foundation/Gymnasium/pull/1562)) to deploying an automated CI pipeline to prevent future link rot ([PR #1564](https://github.com/Farama-Foundation/Gymnasium/pull/1564)) showcases the high engineering standards of the Farama Foundation. Reliable documentation is what keeps simulated RL environments reproducible and accessible for researchers worldwide.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for PettingZoo on 2026-04-27.

### 1. Today's Highlights
PettingZoo kicks off the week with a significant maintenance milestone, officially releasing **version 1.26.0**. This update modernizes the multi-agent library's infrastructure by extending support to Python 3.13 and 3.14, and completely offloading the deprecated Multi-Agent Particle Environments (MPE) to their dedicated new package, MPE2. Post-release, the team has already initiated version bumps to `1.26.1`.

### 2. Releases
*   **PettingZoo 1.26.0** ([GitHub Release](https://github.com/Farama-Foundation/PettingZoo/releases/tag/1.26.0))
    *   **Python Support:** Added compatibility for Python 3.13 and 3.14.
    *   **Environment Restructuring:** Removed the legacy MPE (Multi-Agent Particle Environment) environments from the core library. These are now actively maintained as a standalone package via [MPE2](http://mpe2.farama.org/). 

### 3. Important Issues
*   **[#1331](https://github.com/Farama-Foundation/PettingZoo/issues/1331) [OPEN]: Compatibility of MaskablePPO with Multiple Agents**
    *   **Author:** unleex
    *   **Summary:** A user opened an inquiry regarding the compatibility of Maskable PPO (a popular variant of Proximal Policy Optimization that handles invalid action masking) with multi-agent environments in PettingZoo. This highlights a continuous demand from practitioners looking to integrate advanced, single-agent masking techniques into multi-agent setups.

### 4. Key PR Progress
*   **[#1327](https://github.com/Farama-Foundation/PettingZoo/pull/1327) [CLOSED]: Changes for release v1.26.0**
    *   **Author:** mwydmuch
    *   **Summary:** The primary pull request for today's release. In addition to Python version bumps, this PR notes a backend shift from the unmaintained `pygame` dependency to the community-driven `pygame-ce` fork, ensuring future build stability.
*   **[#1330](https://github.com/Farama-Foundation/PettingZoo/pull/1330) [CLOSED]: Bump version from 1.26.0 to 1.26.1**
    *   **Author:** virgilt
    *   **Summary:** A post-release housekeeping PR to bump the development version to 1.26.1, preparing the `main` branch for subsequent merges.
*   **[#1329](https://github.com/Farama-Foundation/PettingZoo/pull/1329) [CLOSED]: Bump `ray` from 2.7.0 to 2.55.0 in `/tutorials/Ray`**
    *   **Author:** dependabot[bot]
    *   **Summary:** A massive version jump for the Ray dependency in the project's tutorial notebooks, keeping the distributed computing examples up-to-date with Ray's 2.55.0 API.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains a foundational API standard for multi-agent reinforcement learning (MARL), serving as the multi-agent equivalent of Gymnasium. Today's updates demonstrate the Farama Foundation's continued commitment to sustainability and modularity. By decoupling MPE into MPE2 and upgrading to `pygame-ce`, the core library becomes significantly lighter and easier to maintain. Furthermore, the community questions surrounding MaskablePPO (Issue #1331) reflect the library's highly active user base and the current industry trend of pushing the boundaries of action masking in complex, discrete multi-agent environments.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>