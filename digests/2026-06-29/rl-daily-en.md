# RL Open Source Daily Digest 2026-06-29

> Generated: 2026-06-28 22:18 UTC | Projects covered: 15

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
The Reinforcement Learning (RL) open-source ecosystem on 2026-06-29 is highly bifurcated, with intense development concentrated in large-scale LLM alignment frameworks (verl, TRL, Open Instruct) and structural modernization in foundational RL environments (Gymnasium, PettingZoo). Meanwhile, traditional single-agent and general RL libraries (CleanRL, Stable Baselines3, Tianshou, rl_games, and several Alibaba/volcengine alternatives) experienced zero activity. The overarching narrative is a decisive ecosystem shift from static text generation toward agentic execution, tool-use, and massive distributed systems engineering to support long-context reasoning.

## Activity Comparison
Development momentum today was dominated by LLM/VLM post-training and environment standardization projects. 

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 15 | 11 | 0 | High-frequency iteration on distributed fault tolerance and novel RL algorithms (CPPO, OPSD). |
| **TRL** | 10 | 15 | 0 | Aggressive stabilization of GRPO + vLLM + PEFT integrations and multi-tokenizer support. |
| **Open Instruct** | 0 | 6 | 0 | Major architectural refactor for SWERL, agentic tool-use, and memory-efficient losses. |
| **Gymnasium** | 7 | 4 | 0 | Core infrastructure modernization (Python 3.14, NumPy 2.0+) and Box2D migration. |
| **PettingZoo** | 1 | 3 | 0 | CI/CD hardening, strict linting, and deterministic physics fixes for MARL. |
| **slime** | 1 | 2 | 0 | Scaling long-context RL (>30k tokens) and resolving pipeline parallel OOM errors. |
| **torchtune** | 0 | 1 | 0 | Critical SFT tokenizer fixes to ensure proper EOS masking for subsequent RL phases. |
| **Others*** | 0 | 0 | 0 | Stagnation or quiet maintenance cycle. |

*\*Note: AReaL, CleanRL, OpenRLHF, rl_games, ROCK, ROLL, Stable Baselines3, and Tianshou reported no activity in the last 24 hours.*

## Shared Research & Engineering Directions

**Research & Algorithm Signals:**
*   **Beyond Standard PPO:** Multiple projects are merging advanced policy optimization techniques. verl is implementing CPPO (non-uniform trust regions) and OPSD (on-policy self-distillation), Open Instruct is integrating DPPO (trust-region policy loss), and TRL is advancing token-level variance reduction (GSPO) and DGPO.
*   **Agentic and Tool-Augmented RL:** The shift from static outputs to actionable agents is highly visible. Open Instruct introduced a persistent bash sandbox environment (`SWERLVanilluxSandboxEnv`) for Software Engineering RL (SWERL) and native tool-schema parsing.
*   **Knowledge Distillation:** Cross-model teaching is scaling, seen in verl’s privileged-context teacher scoring and TRL’s cross-tokenizer knowledge distillation for GOLDTrainer.

**Engineering & Infrastructure Signals:**
*   **Memory-Efficient Scaling at Extreme Contexts:** Handling >30k token sequences is a primary bottleneck. Open Instruct implemented a tiled GRPO lm-head loss to save VRAM, while slime is actively debugging pipeline-parallel OOM errors caused by entropy backward tensors.
*   **vLLM & PEFT Integration:** perfectly synchronizing small LoRA adapters to vLLM rollout engines without weight merging (TRL) and preventing distributed deadlocks on non-NVLink hardware are top infrastructure priorities.
*   **Ecosystem Dependency Modernization:** Foundational API libraries are aggressively dropping legacy tech. Gymnasium now mandates NumPy 2.0+ and Python 3.14, actively deprecating unmaintained physics engines (Box2D) in favor of Pymunk.

## Differentiation Analysis
*   **Scale and Distributed Computing:** Projects like **verl** and **slime** are differentiating by tackling low-level, cluster-scale engineering challenges (context parallelism, pipeline stage OOMs, vLLM FP8 integration), explicitly targeting massive GPU clusters for 30B+ parameter models. 
*   **Usability vs. Cutting-Edge:** **TRL** positions itself as the highly modular, production-ready bridge for the broader Hugging Face ecosystem (focusing on adapter syncing and multi-tokenizer support). In contrast, **Open Instruct** is heavily optimized for specific emerging niches like interactive coding agents and tool-use.
*   **Base RL vs. LLM RL:** There is a stark contrast between the LLM alignment frameworks (verl, TRL, slime) and classical RL environments (**Gymnasium**, **PettingZoo**). The former are solving high-level distributed orchestration and tokenization masks, while the latter are securing the foundational simulation environments (fixing physics bugs, adopting Rust-based linters like `ruff`) required for deterministic, traditional MARL and single-agent benchmarks.

## Community Momentum & Maturity
*   **Maturity through Housekeeping:** Several projects are exiting the "move fast and break things" phase. **Gymnasium** and **PettingZoo** show maturity through strict type-checking (`ty`), rigid linting (`ruff`), and resolving long-standing technical debt. 
*   **Tightened Feedback Loops:** **Open Instruct** submitted 6 coordinated PRs with zero open issues, indicating a highly disciplined internal development cycle currently driving the roadmap.
*   **AI-Assisted Contribution:** Open-source maintenance is actively being augmented by LLMs; **PettingZoo** contributors explicitly noted using Codex and Claude to review and document the massive, complex observation layouts of the Hanabi environment.

## Trend Signals
*   **SFT is the Silent RL Bottleneck:** The **torchtune** EOS masking bug reveals a critical ecosystem vulnerability: if base SFT models are not taught to terminate generation properly, downstream RL alignment pipelines will fail silently due to non-terminating rollouts and skewed reward signals.
*   **The Rise of SWERL:** Reinforcement Learning is rapidly expanding from mathematical reasoning into software engineering. The creation of resilient, persistent sandbox environments (Docker concurrency limits, OOM detection) signals that training autonomous coding agents is becoming a primary use case.
*   **Consolidation of the Distributed Stack:** The "plumbing" of RL (vLLM rollouts, ZeRO-3, DeepSpeed/Megatron integrations) dictates the pace of research more than novel algorithms right now. Frameworks that solve distributed deadlocks and adapter syncing (like TRL and verl) will dominate enterprise adoption.

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

Here is the structured RL open-source ecosystem digest for June 29, 2026.

### 1. Today's Highlights
Activity in the `THUDM/slime` repository over the last 24 hours has been primarily focused on **training stability at scale** and **observability**. The community is actively addressing Out-Of-Memory (OOM) errors associated with long-sequence RL training, alongside ongoing refinements to reward logging and rollout data partitioning.

### 2. Releases
*   **No new releases** were published in the last 24 hours. 

### 3. Important Issues
*   **[#1523](https://github.com/THUDM/slime/issues/1523) [OPEN] OOM during long-sequence RL training caused by entropy backward tensors**
    *   **Author:** `huanglei-lpd`
    *   **Details:** A critical discussion regarding CUDA OOM errors occurring during training loops with extensive sample lengths (>30k tokens). The memory bottleneck is isolated to the last pipeline parallel stage during the calculation of entropy backward tensors. The issue has garnered 5 comments since its creation, indicating active community troubleshooting for high-context RL workloads.

### 4. Key PR Progress
*   **[#1996](https://github.com/THUDM/slime/pull/1996) [OPEN] fix(logging): partition raw rewards for correct samples**
    *   **Author:** `Jiang020609`
    *   **Details:** This PR addresses issue #1784 by partitioning `raw_reward` alongside `total_lengths` in `process_rollout_data`. This ensures that the `--log-correct-samples` feature properly sees per-rank lists. It also preserves `global_raw_reward` for `--log-passrate` and includes CPU tests for partitioning and passrate preservation.
*   **[#2141](https://github.com/THUDM/slime/pull/2141) [CLOSED] Opd reproduction**
    *   **Author:** `suryathecreator`
    *   **Details:** A recently closed PR related to reproduction efforts (likely for a specific RL algorithm or benchmark). 

### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) increasingly rely on Reinforcement Learning from Human Feedback (RLHF) and advanced reasoning techniques (like PPO and GRPO), handling extreme context lengths is becoming the primary engineering bottleneck. 

The ongoing work in `slime` perfectly reflects the current frontier of RL infrastructure: 
1. **Memory Efficiency over Long Contexts:** Issue #1523 highlights the massive memory overhead imposed by entropy backward tensors when processing sequences over 30k tokens across pipeline parallel stages. Solving this is crucial for training next-generation models capable of long-form reasoning or agentic tasks.
2. **Precision Reward Tracking:** PR #1996's focus on accurately partitioning raw rewards across distributed ranks underscores the necessity of granular telemetry. In modern distributed RL, accurately tracking rollout metrics without introducing host-device bottlenecks is vital for debugging reward hacking and ensuring training alignment.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL daily digest for the TRL repository.

# 📊 Hugging Face TRL Daily Digest (2026-06-29)

## 1. Today's Highlights
Today's TRL ecosystem activity is heavily focused on **infrastructure stability** and **alignment across preference trainers**. We are seeing a massive push to stabilize `GRPOTrainer` + `vLLM` + `PEFT` integrations, specifically targeting deadlocks on non-NVLink hardware and syncing efficiency. Additionally, maintainers are actively standardizing behavior across the `experimental` suite (CPO, ORPO, BCO, TPO) to match DPO's robustness with ZeRO-3 and PEFT. 
- **Activity:** 10 Issues updated, 15 PRs updated.
- **Releases:** 0 new releases.

## 2. Releases
❌ **None.** No new versions were cut in the last 24 hours.

## 3. Important Issues
Several multi-month discussions reached resolution today, highlighting key shifts in TRL's architecture:
*   **Multi-Tokenizer Support (Resolved):** [Issue #1979](https://github.com/huggingface/trl/issues/1979) was closed. This removes the rigid assumption that `PPOv2Trainer` and `RLOOTrainer` require the reward model and policy model to share the exact same tokenizer—a major win for modular RLHF pipelines.
*   **Critic Checkpointing in PPO (Resolved):** [Issue #3293](https://github.com/huggingface/trl/issues/3293) concluded with the approval of a feature to explicitly save the PPO value model (critic), enabling faithful RL training run resumability.
*   **GSPO-Token Integration (Resolved):** [Issue #3811](https://github.com/huggingface/trl/issues/3811) was closed, making way for token-level variance reduction in GSPO.
*   **Bug Hunts:** A nasty OOM bug with Gemma 3 Vision SFT ([Issue #3481](https://github.com/huggingface/trl/issues/3481)) and an OpenEnv async-coroutine error ([Issue #4952](https://github.com/huggingface/trl/issues/4952)) are currently active troubleshooting targets.

## 4. Key PR Progress
Today's Pull Requests reflect a highly active QA and optimization cycle:

**vLLM & PEFT Integration Enhancements:**
*   [PR #6007](https://github.com/huggingface/trl/pull/6007): Introduces a zero-config, adapter-only LoRA weight-sync path for GRPO/RLOO. Instead of merging weights, TRL will now sync just the small LoRA adapter to vLLM, drastically saving time and compute.
*   [PR #6139](https://github.com/huggingface/trl/pull/6139) & [PR #6197](https://github.com/huggingface/trl/pull/6197): Fixes a critical `GRPO + vLLM + PEFT` deadlock (hang) on non-NVLink tensor-parallel hardware by adding precise `torch.distributed.barrier` calls with explicit `device_ids`.

**Algorithm & Trainer Expansions:**
*   [PR #6126](https://github.com/huggingface/trl/pull/6126): Adds X-Token cross-tokenizer Knowledge Distillation to the `GOLDTrainer`.
*   [PR #5102](https://github.com/huggingface/trl/pull/5102): Advances support for DGPO (ICLR 2026) directly within GRPO.
*   [PR #6120](https://github.com/huggingface/trl/pull/6120): Implements the `save_value_model` flag in `PPOConfig`.

**Bug Fixes & Housekeeping:**
*   [PR #6192](https://github.com/huggingface/trl/pull/6192): Squashes a `TypeError` caused by ZeRO-3 + PEFT mixed-dtype mismatches across all experimental trainers (CPO/ORPO/BCO/TPO). 
*   [PR #6194](https://github.com/huggingface/trl/pull/6194): Patches TRL's OpenEnv examples to handle the new async-first client API.
*   [PR #6193](https://github.com/huggingface/trl/pull/6193): Removes the deprecated `sft_video_llm.py` script due to broken underlying dataset links.

## 5. Why This Project Matters in Today's RL Landscape
As we push the boundaries of LLM reasoning with Reinforcement Learning, compute efficiency and infrastructure bottlenecks have become the primary blockers for researchers. Today's TRL digest proves that the open-source community isn't just chasing novel RL algorithms (though DGPO/GSPO integrations are ongoing); it is aggressively solving the "plumbing" of large-scale RL. 

By enabling cross-tokenizer reward models, perfecting vLLM colocate weight syncing for PEFT, and preventing distributed deadlocks, TRL is cementing its position as the most reliable, production-ready framework for training complex reasoning models (like Qwen3vl) without hitting silent system hangs or VRAM ceilings.

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

# RL Daily Digest: verl (volcengine/verl)
**Date:** 2026-06-29

## 1. Today's Highlights
- **Algorithm Expansion:** Implementation of novel RL algorithms like **CPPO** (Cumulative Prefix-divergence Policy Optimization) and **OPSD** (On-Policy Self-Distillation) are currently dominating the development cycle.
- **Infrastructure Robustness:** Significant engineering effort is being directed toward distributed rollout fault-tolerance, including per-request abort mechanisms and balanced sequence splitting for DeepSpeed/Megatron integrations.
- **Activity:** 15 issues and 11 PRs saw updates in the last 24 hours, indicating highly active maintenance and feature iteration. 

## 2. Releases
- **No new releases** were published in the last 24 hours. The project appears to be in an active development/cutting-edge merge phase, particularly regarding asynchronous RL and multimodal support.

## 3. Important Issues
**Bug Fixes & Troubleshooting:**
- **vLLM & FP8 Integration ([#540](https://github.com/volcengine/verl/issues/540)):** An `AttributeError` in `load_dtensor_weights` is causing failures when initializing models with vLLM FP8 quantization. 
- **Multimodal/LoRA Training ([#6851](https://github.com/volcengine/verl/issues/6851)):** Reported crashes when attempting GRPO training with LoRA using the `qwen2.5-7b-vl` vision-language model.
- **Distributed Port Conflicts ([#6677](https://github.com/volcengine/verl/issues/6677)):** Multiple vLLM instances on a single node are colliding on distributed init ports, resulting in `EADDRINUSE` errors.

**Core Technical Discussions:**
- **Sequence Parallelism ([#571](https://github.com/volcengine/verl/issues/571)):** High community interest (10+ 👍) in clarifying the exact parameter configurations for `ulysses_sequence_parallel_size` alongside dynamic batching.
- **Training Plateaus ([#538](https://github.com/volcengine/verl/issues/538)):** Ongoing discussion regarding reward stagnation during GRPO reproduction for 32B parameter models.

## 4. Key PR Progress
**Advanced RL Algorithms & Workflows:**
- **[PR #6833](https://github.com/volcengine/verl/pull/6833):** Introduces teacher scoring with privileged context for OPSD (On-Policy Self-Distillation), allowing a teacher to condition on ground-truth solutions while scoring student rollouts.
- **[PR #6731](https://github.com/volcengine/verl/pull/6731):** Adds official support for **CPPO** (position-weighted cumulative-prefix-divergence token mask), moving beyond uniform token-level trust regions in LLM RL.

**Training Engine & Bug Fixes:**
- **[PR #6865](https://github.com/volcengine/verl/pull/6865):** Adds crucial infrastructure for selective (per-request) aborts in the rollout client path via an `AbortableLLMServerClient`.
- **[PR #6869](https://github.com/volcengine/verl/pull/6869):** Fixes dynamic context-parallel splitting (`dynamic_cp_split_batch`) to use balanced sequence splitting rather than ceil-based sizing, preventing out-of-bounds errors.
- **[PR #6873](https://github.com/volcengine/verl/pull/6873):** Resolves a breaking bug for GLM-4V multimodal models where the wrong processor class name was matched in `hf_processor`.
- **[PR #5641](https://github.com/volcengine/verl/pull/5641) [CLOSED]:** Addressed a critical gradient mismatch in `token-mean` loss aggregation by correcting the `loss_scale_factor` logic.

## 5. Why This Project Matters in Today's RL Landscape
verl is establishing itself as a premier open-source framework for large-scale, distributed RLHF and post-training of LLMs/VLMs. While many frameworks focus purely on algorithmic implementation, today's digest highlights verl's critical focus on **distributed systems engineering**—tackling low-level integration bugs across vLLM, Megatron, DeepSpeed, and context-parallelism toolkits. 

Furthermore, the rapid merging of advanced techniques like OPSD (distillation) and non-uniform trust region optimizations (CPPO) proves that verl is tightly tracking state-of-the-art research, providing developers with the exact tools needed to scale complex reasoning models (like DeepSeek R1 architectures) efficiently across massive GPU clusters.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

Here is the daily digest for the RL open-source ecosystem, focusing on today's `torchtune` activity.

### 1. Today's Highlights
*   **Slow Day for Tunes:** The `torchtune` repository saw minimal activity over the last 24 hours, with 0 new issues, 0 closed issues, and 0 new releases.
*   **Tokenizer Bug Fix:** The sole update is a new Pull Request addressing a critical tokenization bug affecting Qwen models during supervised fine-tuning (SFT), which directly impacts RLHF preparation pipelines.

### 2. Releases
*   **No new releases** published in the last 24 hours. 

### 3. Important Issues
*   **No issues** were created or updated in the last 24 hours. 

### 4. Key PR Progress
*   **[OPEN] [Fix] Qwen tokenizers mask trained EOS out of loss when max_seq_len is set (#2792)** | [PR #2967](https://github.com/meta-pytorch/torchtune/pull/2967)
    *   **Author:** yushyosun
    *   **Summary:** This PR addresses a silent but severe training failure in Qwen2, 2.5, and 3 architectures. When `max_seq_len` is applied, the tokenizer's `tokenize_messages` function dynamically truncates sequences and inadvertently masks the trailing End-Of-Sequence (EOS) token from the loss calculation. 
    *   **Impact:** If the model is never penalized for missing the EOS token during SFT, it fails to learn when to stop generating. This results in runaway generation or "rambling" behaviors—effectively breaking chat models before they even enter a Reinforcement Learning (RL) alignment phase. The PR ensures the EOS token is properly retained and calculated into the loss.

### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning from Human Feedback (RLHF) or AI feedback (RLAIF) pipelines, the quality of the base Supervised Fine-Tuned (SFT) model dictates the ceiling of the final RL-aligned model. `torchtune` serves as a critical infrastructure layer for high-performance, distributed SFT using PyTorch native tools.

Today's highlighted PR underscores a fundamental RL challenge: **credit assignment and termination**. An RL agent (in this case, an LLM) must reliably emit an EOS token to terminate an episode and trigger reward calculation. If the preceding SFT phase fails to teach EOS generation due to a masking bug, the RL training phase will suffer from non-terminating rollouts, wasted compute on infinitely generated sequences, and skewed reward signals. Fixing low-level tokenization edge cases ensures that models stepping into RL loops are already structurally sound conversational agents.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the daily digest for the Open Instruct ecosystem.

### 1. Today's Highlights
Today's development is entirely focused on a massive structural refactor and feature integration led by developer `hamishivi`. A batch of 6 active pull requests (#1743–#1749) were opened as rebased replacements for older drafts (#1731–#1739), streamlining the merge path into `main`. The updates introduce advanced RL loss functions, memory-efficient training mechanisms, and critical infrastructure for tool-augmented and sandboxed RL agents.

### 2. Releases
*   **No new releases** published in the last 24 hours.

### 3. Important Issues
*   **None.** There are 0 active or updated issues reported in the last 24 hours, indicating that the current development cycle is progressing smoothly without blocking user-reported bugs.

### 4. Key PR Progress
All PRs below were updated on 2026-06-28, reflecting a coordinated rebase push:
*   **[OPEN] [PR #1745](https://github.com/allenai/open-instruct/pull/1745) - Add DPPO loss function:** Implements the DPPO (Trust-Region Policy Optimization) policy-loss function. It enforces a per-token binary (Bernoulli) divergence to prevent the trainer policy from deviating too far from the rollout policy.
*   **[OPEN] [PR #1747](https://github.com/allenai/open-instruct/pull/1747) - Add tiled GRPO lm-head loss:** Introduces a memory-efficient loss path for GRPO (`--use_liger_grpo_loss`). Using DeepSpeed's `TiledFusedLogitsLoss` pattern, it recomputes the lm-head projection tile-by-tile, significantly reducing VRAM footprint for large vocabulary models.
*   **[OPEN] [PR #1746](https://github.com/allenai/open-instruct/pull/1746) - Add tool-schema support to SFT tokenization:** Enhances Supervised Fine-Tuning (SFT) by passing dataset `tools` columns to `apply_chat_template`, allowing models to natively parse tool schemas during the tokenization phase.
*   **[OPEN] [PR #1748](https://github.com/allenai/open-instruct/pull/1748) - Add SWERLVanilluxSandboxEnv:** Introduces a self-contained, bash-only sandbox RL environment (`swerl_vanillux_sandbox`) that maintains persistent shell states (cwd/env) across bash calls, simulating a real coding agent environment. 
*   **[OPEN] [PR #1744](https://github.com/allenai/open-instruct/pull/1744) - Harden DockerBackend:** Adds resilience to the SWERL Docker backend, including cross-process concurrency semaphores to prevent daemon overload, OOM detection, and automated retries for transient `APIError`s.
*   **[OPEN] [PR #1743](https://github.com/allenai/open-instruct/pull/1743) - VLM ModelDims Robustness:** Fixes `ModelDims.from_hf_config` to explicitly honor `head_dim` in HF configs, a necessary patch for training composite/Vision-Language Models (VLMs).
*   *Note: PRs #1731, #1732, #1733, #1734, #1735, and #1739 were **closed** as they were superseded by the newly rebased PRs above.*

### 5. Why This Project Matters in Today's RL Landscape
As the RL landscape shifts from static text generation toward agentic and tool-using models, Open Instruct is actively laying the groundwork for the next generation of RLHF and RLAIF. Today's PRs highlight three pivotal trends:
1.  **Agentic Execution Environments:** The addition of the `SWERLVanilluxSandboxEnv` and Docker concurrency limits shows a strong pivot toward Software Engineering RL (SWERL), where models learn by interacting with live, persistent terminal environments.
2.  **Memory-Efficient Scaling:** Techniques like the tiled GRPO lm-head loss address the massive memory bottlenecks associated with large-vocabulary LLMs, enabling longer context lengths and larger batch sizes during RL fine-tuning.
3.  **Algorithmic Diversity:** Integrating specialized loss functions like DPPO allows researchers to easily enforce trust regions, moving beyond standard PPO to explore more stable policy-update paradigms directly within a production-ready codebase.

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

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-06-29
**Repository:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

## 1. Today's Highlights
Gymnasium is undergoing a significant infrastructure and dependencies modernization phase. The community has successfully closed several critical issues regarding broken Continuous Integration (CI), strict pre-commit typing (`ty`), and Docker configurations. Additionally, major architectural shifts are in progress, including the deprecationation of legacy physics engines (Box2D) and the official adoption of modern numerical foundations (NumPy 2.0+ and Python 3.14). 

## 2. Releases
**None.** There were no new releases pushed in the last 24 hours (Current latest: v1.0.0). 

## 3. Important Issues
*   **Physics Engine Migration:** [Issue #1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597) is highly active. The project is seeking community contributions to port all Box2D environments to Pymunk, citing that Box2D's Python bindings have been unmaintained for ~6 years. Pymunk offers active maintenance and better documentation.
*   **Python 3.14 Support:** [Issue #1594](https://github.com/Farama-Foundation/Gymnasium/issues/1594) (Closed) highlights the push to officially add full Python 3.14 support across the library.
*   **CI & Typing Cleanups:** 
    *   [Issue #1593](https://github.com/Farama-Foundation/Gymnasium/issues/1593) (Closed) resolved broken CI on the `main` branch caused by an upgraded GitHub Actions version.
    *   [Issue #1599](https://github.com/Farama-Foundation/Gymnasium/issues/1599) and [Issue #1600](https://github.com/Farama-Foundation/Gymnasium/issues/1600) (Closed) addressed strict `ty` (type checker) warnings failing pre-commit hooks and module resolution errors.
*   **Pending Bug Reports:** 
    *   [Issue #1605](https://github.com/Farama-Foundation/Gymnasium/issues/1605) (Closed) fixed a workflow bug where "Run PyTest" was pulling the latest NumPy for all setups, completely bypassing NumPy 1.x support testing.
    *   [Issue #1607](https://github.com/Farama-Foundation/Gymnasium/issues/1607) (Open) reported that `MujocoEnv` ignores `offwidth` and `offheight` parameters from XML files, causing issues for custom renderer instantiation (e.g., drone cameras).

## 4. Key PR Progress
*   **Modernizing the Dependency Stack:** [PR #1603](https://github.com/Farama-Foundation/Gymnasium/pull/1603) (Closed) successfully tackled Python 3.14 support by officially dropping NumPy 1.x support. The minimum requirement is now `numpy >= 2.0.0`. 
*   **Box2D to Pymunk Proof of Concept:** [PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602) (Open) introduces a standalone prototype of `LunarLander` using Pymunk, demonstrating reproducible seeded terrain generation and constrained landing leg physics. 
*   **Type System Enhancements:** [PR #1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577) (Open) is actively being discussed. It turns `VectorEnv` and its subclasses into generic types to resolve `TypeVar` issues while maintaining backward compatibility.
*   **Pre-commit & Pytest Fixes:** [PR #1604](https://github.com/Farama-Foundation/Gymnasium/pull/1604) (Closed) fixed `ty` typing errors (specifically annotating `valid_action_mask` as `NDArray[np.bool_]`) and added a `box2d-py` fallback for Python 3.14. [PR #1606](https://github.com/Farama-Foundation/Gymnasium/pull/1606) (Closed) corrected the NumPy version constraints in the PyTest Dockerfile.

## 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for Reinforcement Learning environments, Gymnasium's current maintenance work goes beyond simple bug fixing—it is actively securing the foundation of the modern RL stack. The aggressive push to support Python 3.14 and mandate NumPy 2.0+ ensures that downstream RL algorithms (e.g., Stable-Baselines3, CleanRL) can leverage the latest numerical computing optimizations without legacy bottlenecks. Furthermore, migrating legacy physics simulators from Box2D to Pymunk demonstrates a proactive approach to technical debt, ensuring that classic RL benchmark environments (like LunarLander) remain reliable, reproducible, and easily installable for researchers in the years to come.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🧠 RL Ecosystem Daily Digest: 2026-06-29
**Focus:** Farama-Foundation/PettingZoo

## 1. Today's Highlights
Activity in the PettingZoo repository over the past 24 hours has been entirely focused on maintenance, environment bug fixing, and code quality improvements. With no new releases, maintainers appear to be in a phase of tightening CI/CD pipelines and addressing technical debt, specifically standardizing Python linting and resolving long-standing environment physics bugs.

## 2. Releases
*   **No new releases** were published in the last 24 hours.
*   The repository is currently in a stabilization phase, likely preparing the codebase for a future tag.

## 3. Important Issues
*   **[CLOSED] #1354: Fix CI on Main** ([Link](https://github.com/Farama-Foundation/PettingZoo/issues/1354))
    *   **Author:** jkterry1
    *   **Summary:** An administrative/maintenance issue created on 2026-06-24 and recently updated (closed) to track and resolve failing Continuous Integration (CI) pipelines on the `main` branch. Restoring a green CI is critical for validating incoming contributions.

## 4. Key PR Progress
*   **[OPEN] #1336: fixed ball bouncing physics in pong(#1289)** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1336))
    *   **Author:** sdace9719
    *   **Progress:** A targeted bug fix (dating back to late May) addressing wall bounce physics in the Cooperative Pong environment. Ensuring deterministic, mathematically correct physics is vital for MARL evaluation.
*   **[OPEN] #1368: Fix Hanabi observation layout documentation (#1301)** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1368))
    *   **Author:** mfornet
    *   **Progress:** Updates documentation for the notoriously complex Hanabi environment. Notably, the author highlights the use of AI coding assistants (Codex and Claude) to help review the massive observation layout, showcasing modern LLM-assisted development in open-source RL.
*   **[OPEN] #1376: Increase ruff strictness and apply mechanical autofixes** ([Link](https://github.com/Farama-Foundation/PettingZoo/pull/1376))
    *   **Author:** mfornet
    *   **Progress:** Expands the project's `ruff` lint configuration (building on PR #1350) to enforce stricter Python style guidelines (pyflakes, pycodestyle) and automatically formats the codebase to comply. This reflects a broader ecosystem trend of adopting Rust-based linters for faster, stricter CI checks.

## 5. Why This Project Matters in Today's RL Landscape
PettingZoo is the industry-standard API and environment library for Multi-Agent Reinforcement Learning (MARL), acting as the multi-agent counterpart to Gymnasium. In today's RL landscape, where research is rapidly shifting from single-agent to multi-agent systems (e.g., decentralized control, multi-agent game theory, and LLM-agent interactions), having a standardized, reliable environment suite is non-negotiable. 

The PRs from today prove the project's ongoing commitment to **research reproducibility**—fixing physics bugs in Pong ensures eval metrics remain consistent, while tightening CI and documentation (like the Hanabi PR) lowers the barrier to entry for new researchers deploying complex MARL algorithms.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>