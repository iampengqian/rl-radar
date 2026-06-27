# RL Open Source Daily Digest 2026-06-28

> Generated: 2026-06-27 22:19 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem is currently bifurcated into two high-velocity domains: **Large Language/Vision Model Alignment (RLHF/GRPO)** and **Foundational RL APIs/Environments**. 

In the LLM alignment space, frameworks are aggressively optimizing distributed infrastructure to handle the massive compute and memory demands of 30B+ parameter models, Mixture-of-Experts (MoE), and asynchronous training pipelines. Meanwhile, foundational RL environment libraries (Gymnasium, PettingZoo) are in a maturation and stabilization phase, focusing on long-term API stability, CI/CD hardening, and migrating away from deprecated physics engines.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 17 | 11 | 0 | High-velocity scaling. Pushing fully async PPO and next-gen hardware (B200/H200) compatibility. |
| **AReaL** | 0 | 9 | 0 | Heavy R&D pipeline. Expanding RL into Diffusion models and massive MoE VLMs. |
| **TRL** | 1 | 5 | 0 | Stabilization focus. Resolving edge-case bugs (NaN losses) and integrating new alignment algorithms. |
| **Open Instruct** | 0 | 4 | 0 | Pipeline maturation. Fixing async rollout staleness and extending limits for agentic environments. |
| **slime** | 0 | 5 | 0 | Niche stability. Fixing multi-turn rollout budgets for Vision-Language Models (VLMs). |
| **Gymnasium** | 1 | 2 | 0 | Infrastructure maintenance. Migrating physics backends and expanding Graph space support. |
| **PettingZoo** | 1 | 2 | 0 | Codebase health. Enforcing strict linting and restoring broken CI pipelines. |
| **ROLL** | 0 | 1 | 0 | Low activity. Quietly documenting experiment tracking integrations (Trackio). |
| **CleanRL, OpenRLHF, rl_games, ROCK, Stable Baselines3, Tianshou, torchtune** | 0 | 0 | 0 | *No activity in the last 24h.* |

## Shared Research & Engineering Directions

**Research & Algorithm Signals:**
*   **Expansion Beyond Text LLMs:** RL algorithms (specifically GRPO and REINFORCE) are being adapted for non-text domains. AReaL is pioneering Diffusion RL, while both AReaL and slime are heavily optimizing for Vision-Language Models (VLMs) and multi-modal architectures.
*   **Sample Efficiency & New Objectives:** TRL is integrating advanced algorithms like ReMax (for compute-efficient alignment) and IW-OPD (Importance-Weighted Optimal Policy Distillation), pushing the frontier of hybrid on/off-policy training.

**Engineering & Infrastructure Signals:**
*   **Decoupling and Asynchronous Pipelines:** Breaking the synchronous lock-step of PPO/GRPO is a massive priority. Verl is introducing streaming rollouters and TransferQueues, AReaL is building HTTP-based Ray schedulers, and Open Instruct is implementing strict `max_result_age_steps` to drop stale, off-policy rollouts.
*   **Memory-Efficient Distributed Compute:** To prevent Out-Of-Memory (OOM) errors on massive models, frameworks are introducing memory optimizations. AReaL is utilizing Triton-fused Linear Cross Entropy to avoid materializing full logits, while TRL is fixing mixed-dtype bugs in ZeRO-3 + PEFT setups.
*   **MoE and Hardware Adaptability:** The ecosystem is rapidly adapting to complex architectures like Qwen3 MoE and DeepSeek-V4. This includes unpacking 3D MoE expert weights for vLLM rollouts (verl) and building Dockerfiles for next-gen Nvidia B200/H200 clusters.

## Differentiation Analysis
*   **vs. Classic RL (Gymnasium, PettingZoo):** Classic environment frameworks are entirely decoupled from the current LLM/MoE scaling boom. Their focus remains on pure API standardization (e.g., heterogeneous graph support, Box2D to pymunk migrations) rather than distributed GPU orchestration.
*   **Within the RLHF/LLM Space:** Frameworks are strategically differentiating their scopes. **TRL** acts as the accessible bridge for standard HuggingFace workflows (focusing on broad algorithm variety and single-node stability). **verl** and **AReaL** are competing directly at the frontier labs level, battling to provide the highest-throughput distributed compute for massive MoE models. **Open Instruct** and **slime** are carving out niches in long-horizon agentic execution and multi-turn VLM budgeting, respectively.

## Community Momentum & Maturity
The ecosystem is showing clear signs of maturation, transitioning from rapid prototyping to production-grade stability. 
*   **Issue Triage over Feature Requests:** Projects like AReaL, Open Instruct, and slime saw zero new issues today, indicating that active development is highly focused on merging existing engineering pipelines rather than fielding community bugs.
*   **Robust Operations:** There is a strong emphasis on observability and CI/CD health. PettingZoo fixed failing CI pipelines and enforced strict ruff linting, ROLL focused heavily on tracking integrations (Trackio), and verl added telemetry for MoE load balancing.
*   **Compute Economics:** Fixing infrastructure costs has become a community priority, evidenced by Open Instruct patching its Beaker cluster deployment to properly support preemptible compute nodes.

## Trend Signals
*   **The Triumph of Async Rollouts:** Asynchronous generation is no longer optional for frontier models. The overhead of pausing training to wait for vLLM rollouts is being eliminated across the board (verl, Open Instruct, AReaL).
*   **The Rise of Long-Horizon Agents:** RL is moving away from single-shot math reasoning toward deep, multi-step tool-use. Open Instruct extending its environment timeout to 2 hours, alongside slime enforcing strict multi-turn VLM context budgets, signals that complex sandbox execution is the next major frontier.
*   **Mixture-of-Experts (MoE) as the Default:** The technical friction of synchronizing MoE weights between training and inference engines is being solved, cementing MoE as the standard architecture for future RL post-training.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# 🧠 RL Open-Source Ecosystem Daily Digest: 2026-06-28
**Project Focus:** ROLL (github.com/alibaba/ROLL)

### 1. Today's Highlights
*   **Quiet Bug & Release Cycle:** No new issues reported, and no new version releases cut in the last 24 hours.
*   **Documentation Focus:** The sole repository activity centers on expanding tooling integration documentation, specifically for **Trackio**. 

### 2. Releases
*   **None.** No new releases or version tags were published in the last 24 hours.

### 3. Important Issues
*   **None.** No active issues were updated or created within the last 24 hours, indicating either high current stability or a lull in community bug reporting.

### 4. Key PR Progress
*   **[OPEN] PR #467: `docs: update Docs about Trackio`** (Author: ParagEkbote | Updated: 2026-06-27)
    *   **Summary:** As a direct follow-up to PR #404, this pull request addresses an oversight by adding essential documentation for the project's recent Trackio integration. 
    *   **Status:** Currently open and awaiting review (cc: @PanAndy).
    *   **Link:** [alibaba/ROLL PR #467](https://github.com/alibaba/ROLL/pull/467)

### 5. Why This Project Matters in Today's RL Landscape
While today's update is micro-focused on documentation, the introduction and formal documentation of **Trackio** highlights a critical trend in the modern Reinforcement Learning (RL) ecosystem: **observability and metrics tracking at scale**. 

As RL frameworks are increasingly used to train massive models (like RLHF for LLMs), tightly integrating experiment trackers (like Trackio) directly into the training pipeline is essential. ROLL's continuous refinement of its documentation and tooling integrations ensures that AI engineers can seamlessly monitor reward hacking, gradient updates, and policy convergence without wrestling with disjointed third-party setups. Maintaining robust, well-documented integrations reduces friction for researchers pushing the boundaries of applied RL.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the structured RL ecosystem digest for June 28, 2026.

### 1. Today's Highlights
The past 24 hours in the **slime** (THUDM/slime) ecosystem were characterized by active maintenance and a strong focus on Vision-Language Model (VLM) stability. The community saw no new issues or releases, but 5 pull requests were updated—primarily focusing on fixing budget constraints for multi-turn VLM rollouts and cleaning up documentation. 

### 2. Releases
*   **No new releases** were published in the last 24 hours. The project continues to rely on its current stable iteration.

### 3. Important Issues
*   **No new issues or active discussions** were logged in the past 24 hours, indicating a period of stability or a shift of active user discussions to ongoing PRs.

### 4. Key PR Progress
All activity surrounded existing PRs, with a heavy emphasis on the `geo3k` VLM example:
*   **[OPEN] [PR #2140](https://github.com/THUDM/slime/pull/2140):** A critical fix for VLM multi-turn rollout budgeting. Author `zhangdw156` patched the `max_new_tokens` configuration to strictly enforce a response budget rather than total prompt+response budget, integrating `rollout_max_context_len` for tighter context management. 
*   **[OPEN] [PR #2139](https://github.com/THUDM/slime/pull/2139):** A structural fix correcting the `geo3k` VLM default environment module path, accompanied by a lightweight static regression test.
*   **[OPEN] [PR #2137](https://github.com/THUDM/slime/pull/2137):** Documentation maintenance by `CalvinXKY`, fixing broken relative markdown links in `rollout_buffer` to align with prior fixes made in the `vllm-project/vime` fork.
*   **[OPEN] [PR #2138](https://github.com/THUDM/slime/pull/2138):** Documentation expansion adding the "Dressage" framework to the Chinese README ecosystem section.
*   **[CLOSED] [PR #2136](https://github.com/THUDM/slime/pull/2136):** An "Opd reproduction" PR submitted by `suryathecreator` was closed.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and execution-based RL expand into multi-modal and multi-turn agentic workflows, strict context management is becoming the primary bottleneck for open-source adoption. 

Slime's latest activity (specifically PRs [#2139](https://github.com/THUDM/slime/pull/2139) and [#2140](https://github.com/THUDM/slime/pull/2140)) highlights a crucial, ongoing battle in the RL ecosystem: **multi-turn rollout budgeting**. As RL agents iteratively execute environments (like the `geo3k` VLM tasks), unoptimized prompt accumulation easily leads to out-of-memory (OOM) errors or truncated reasoning. 

By implementing precise calculations for remaining response budgets (`max_new_tokens` vs. total context length), slime is solving fundamental infrastructure problems that allow practitioners to safely train Vision-Language Agents (VLAs) using local compute. This solidifies slime's position as a highly practical, production-ready framework for complex RL fine-tuning.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL based on the provided GitHub data.

# 📊 AReaL RL Ecosystem Daily Digest
**Date:** 2026-06-28
**Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

---

### 1. Today's Highlights
Activity over the last 24 hours has been entirely focused on Pull Request updates, with 9 active PRs and 0 new issues or releases. The current development velocity highlights two major macro-trends in the RL ecosystem: **Multimodal/MoE scaling** (VLM GRPO support) and **cross-domain RL expansion** (Diffusion RL). There is also a notable push towards infrastructure flexibility, evidenced by new Ray scheduling and multi-teacher distillation capabilities.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **No new or updated issues** were reported in the last 24 hours. Community interactions and feature requests appear to be channeled directly into active PR development at this time.

### 4. Key PR Progress
Development activity (9 updated PRs) is heavily focused on algorithm expansion, backend enhancements, and infrastructure optimization:

*   **Multimodal & MoE Scaling:**
    *   [PR #1444](https://github.com/areal-project/AReaL/pull/1444): Introduces LoRA-based GRPO training support for Qwen3.6 models (27B dense and 35B-A3B MoE) utilizing the SGLang backend and FSDP.
*   **Cross-Domain & Advanced RL Algorithms:**
    *   [PR #1410](https://github.com/areal-project/AReaL/pull/1410): Unveils Phase 1 PoC for Diffusion RL post-training (SD1.5 + LoRA + REINFORCE), expanding AReaL beyond standard LLM text generation. 
    *   [PR #1400](https://github.com/areal-project/AReaL/pull/1400): Implements multi-teacher weighted mixture distillation for on-policy knowledge transfer.
    *   [PR #1443](https://github.com/areal-project/AReaL/pull/1443): Refines PPO actor loss aggregation modes, making the distributed reduction contract explicit in the training-engine API.
*   **Inference Backend & Infra Optimization:**
    *   [PR #1441](https://github.com/areal-project/AReaL/pull/1441): Adds an HTTP-based Ray Scheduler using subprocess-managed RPC workers with HTTP tensor serialization to enable proxy working.
    *   [PR #1322](https://github.com/areal-project/AReaL/pull/1322): *[Stale]* Adds a Triton-based fused Linear Cross Entropy (LCE) path for Megatron to avoid materializing full `[tokens, vocab]` logits, heavily reducing memory footprints.
    *   [PR #1389](https://github.com/areal-project/AReaL/pull/1389): Supports rollout routing replay (R3) for the vLLM backend (requires vLLM v0.22.0+).
*   **Bug Fixes:**
    *   [PR #1392](https://github.com/areal-project/AReaL/pull/1392): *[Stale]* Fixes a silent advantage normalization bug in online GRPO with `group_size > 1` by introducing a `group_id` to isolate unrelated user conversations.

### 5. Why This Project Matters in Today's RL Landscape
AReaL is establishing itself as a critical, high-throughput distributed RL framework precisely when the open-source AI community is tackling the hardest scaling challenges. Today's PR pipeline demonstrates exactly what modern RL researchers need:
1.  **Memory-Efficient Distributed Compute:** Features like the Triton-fused Linear Cross Entropy kernel ([PR #1322](https://github.com/areal-project/AReaL/pull/1322)) and explicit distributed loss aggregation ([PR #1443](https://github.com/areal-project/AReaL/pull/1443)) are essential for training 30B+ parameter models without Out-Of-Memory (OOM) errors.
2.  **Decoupled Inference & Training Synchronization:** Supporting advanced routing replays (R3) for vLLM ([PR #1389](https://github.com/areal-project/AReaL/pull/1389)) and HTTP-based Ray scheduling ([PR #1441](https://github.com/areal-project/AReaL/pull/1441)) allows for highly asynchronous, heterogeneous compute utilization—drastically lowering GPU idling times.
3.  **Expanding the RL Frontier:** By integrating RL directly into Diffusion models ([PR #1410](https://github.com/areal-project/AReaL/pull/1410)) and massive MoE VLMs ([PR #1444](https://github.com/areal-project/AReaL/pull/1444)), AReaL is proving that paradigms like GRPO and REINFORCE are universally applicable architectural backbones, not just text-LLM optimizers.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# 🧠 RL Open-Source Ecosystem Daily Digest: TRL 
**Date:** 2026-06-28 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
*   **Stability & Distribution Focus:** The past 24 hours saw significant maintenance, specifically targeting `NaN` losses during evaluation and resolving dtype mismatches in ZeRO-3 + PEFT setups across preference and experimental trainers.
*   **Advanced Alignment Algorithms:** Activity points toward expanding TRL's capabilities with **ReMax** (simplifying LLM alignment) and **IW-OPD** (importance-weighted distillation).
*   **Zero New Releases:** A quiet day on the release front, with ongoing development consolidated into 5 active pull requests.

## 2. Releases
*   **None** (Last 24h)

## 3. Important Issues
*   **[CLOSED] [❓ question, 🏋 GRPO] How to dynamically adjust params during grpo training?** ([#2941](https://github.com/huggingface/trl/issues/2941))
    *   **Context:** Authored by Tomsawyerhu, this discussion explored dynamically scaling hyperparameters (e.g., shifting `num_generations` from 8 to 32, and increasing temperature at step 50) during Group Relative Policy Optimization (GRPO). Though created earlier, its update/closure today indicates a resolution or provided workaround for adaptive sampling strategies in RLHF.

## 4. Key PR Progress
*   **[OPEN] Fix NaN eval_loss when completions are fully truncated** ([#5826](https://github.com/huggingface/trl/pull/5826))
    *   **Analysis:** Fixes a critical edge case ([#5662](https://github.com/huggingface/trl/issues/5662)) where `max_length` < prompt length causes an entirely `False` completion mask. This previously resulted in `F.cross_entropy` operating on an empty tensor and returning a `NaN` loss, which silently breaks RL evaluation.
*   **[OPEN] Align CPO/ORPO/BCO/Distillation/TPO with DPO: fix ZeRO-3 + PEFT mixed-dtype error** ([#6192](https://github.com/huggingface/trl/pull/6192))
    *   **Analysis:** Extends critical infrastructure fixes from core DPO/GRPO trainers to experimental preference optimization algorithms. It introduces a guard for `get_peft_model()` to prevent `TypeErrors` in non-quantized ZeRO-3 mixed-dtype environments.
*   **[OPEN] add iw-opd distillation** ([#6191](https://github.com/huggingface/trl/pull/6191))
    *   **Analysis:** Introduces Importance-Weighted Optimal Policy Distillation (IW-OPD) as an optional objective. Leverages sampled-token teacher logprobs and vLLM rollout logprobs to build detached advantages—pushing the frontier of offline/online RL hybridization.
*   **[CLOSED] Support ReMax Algorithm** ([#2955](https://github.com/huggingface/trl/pull/2955))
    *   **Analysis:** Merges/ finalizes integration of the ReMax algorithm (ICML 2024). Provides a highly efficient, simple RL alternative for aligning LLMs without the computational overhead of standard PPO/RLHF rollouts.
*   **[OPEN] [dependencies, github_actions] Bump the actions group** ([#6190](https://github.com/huggingface/trl/pull/6190))
    *   **Analysis:** Routine security/CI maintenance bumping `actions/checkout` and `trufflesecurity/trufflehog`.

## 5. Why This Project Matters in Today's RL Landscape
As Language Models increasingly rely on Reinforcement Learning (via PPO, GRPO, and DPO variants) for alignment and complex reasoning, TRL serves as the de facto open-source bridge between cutting-edge RL research and production HuggingFace `transformers` infrastructure. 

Today's updates perfectly reflect the current maturation phase of the open-source RL ecosystem: shifting beyond baseline algorithm implementation to solve massive distributed training bottlenecks (ZeRO-3 + PEFT integration) and numerical instabilities (`NaN` prevention in truncated sequences). Furthermore, the integration of algorithms like ReMax and IW-OPD highlights the field's rapid trajectory toward making LLM alignment computationally cheaper and more sample-efficient.

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

Here is the daily digest for the verl project.

# 🧠 RL Open-Source Daily Digest: verl
**Date:** 2026-06-28  
**Repository:** [verl-project/verl](https://github.com/volcengine/verl)  
**Activity (Last 24h):** 17 Issues Updated | 11 PRs Updated | 0 New Releases

---

### 1. Today's Highlights
- **Next-Gen Training Architectures:** Significant momentum is building around fully asynchronous RL. Two major PRs landed today introducing streaming rollouters and TransferQueue (TQ) support to decouple rollout generation from PPO training steps.
- **Next-Gen Hardware & Models:** The community is actively pushing verl to support bleeding-edge setups. Discussions and patches today target **DeepSeek-V4** on B200/H200 clusters via Megatron-Lite, as well as critical FSDP-to-vLLM weight sync fixes for **Transformers 5** and **Qwen3 MoE** architectures.
- **Rollout Granularity:** New hooks were added to support per-request aborting in `LLMServerClient`, providing fine-grained control over rollout generation.

### 2. Releases
**None.** (No new releases or tags published in the last 24 hours. The ecosystem appears to be stabilizing recent merges rather than cutting a new version).

### 3. Important Issues
- **[Feature Request] Dockerfile for DeepSeek-V4 + DSA on Megatron-Lite** ([#6864](https://github.com/volcengine/verl/issues/6864)): A strong signal of enterprise/scaling adoption. Users are requesting official Dockerfiles and launchers for DeepSeek-V4 training on Nvidia B200/H200 setups using the newly integrated `mlite` backend.
- **[Bug] vLLM Multi-Node Profiling Crashes** ([#6861](https://github.com/volcengine/verl/issues/6861) - *Tracked via PR*): Exposed a bug where vLLM's `start_profile`/`stop_profile` crashes on `nnodes > 1` setups because headless nodes lack an initialized engine.
- **[Feature Request] Per-Request Abort for Rollouts** ([#6866](https://github.com/volcengine/verl/issues/6866)): Highlighted the operational need to interrupt specific in-flight rollout requests dynamically without aborting the entire replica batch. 
- **[Discussion] Actor and Rollout Decoupling** ([#537](https://github.com/volcengine/verl/issues/537)): Continued community interest in cleanly decoupling actor training nodes from rollout inference nodes, specifically regarding parameter synchronization mechanisms.

### 4. Key PR Progress
- **[trainer, fully_async] feat: add streaming rollouter mode to the V1 PPO trainer** ([PR #6868](https://github.com/volcengine/verl/pull/6868)): Decouples generation from training steps, allowing them to overlap asynchronously. This is a massive architectural upgrade for PPO throughput.
- **[fully_async] feat: Fully Async Policy with TransferQueue** ([PR #6628](https://github.com/volcengine/verl/pull/6628)): Migrates the async policy transport channel from Ray MessageQueue to TransferQueue (TQ), optimizing cross-node data transfer.
- **[fsdp] fix: Qwen3 MoE FSDP weight sync for vLLM rollout in Transformers 5** ([PR #6863](https://github.com/volcengine/verl/pull/6863)): Crucial compatibility fix. Unpacks 3D MoE expert weights (`gate_up_proj` / `down_proj`) so vLLM can correctly ingest them during live training rollouts under the new Transformers 5 format.
- **[trainer, rollout] feat: log rollout MoE load-balance metrics** ([PR #6853](https://github.com/volcengine/verl/pull/6853)): Adds vital telemetry for Mixture-of-Experts (MoE) models by reporting routed expert counts and load-balancing metrics from the rollout engine.

### 5. Why This Project Matters in Today's RL Landscape
As the LLM space pivots heavily toward reasoning models (OpenAI o1 / DeepSeek-R1 style architectures), **verl** has solidified its position as a premier open-source RLHF/RL post-training framework. Today's activity proves that the project is successfully tackling the three hardest scaling challenges in modern RL:
1. **Breaking the compute bottleneck:** Moving away from lock-step synchronous PPO to fully async, streaming architectures (PR #6868, #6628).
2. **MoE & Multimodal compatibility:** Seamlessly bridging the gap between heavy training frameworks (FSDP/Megatron) and high-throughput inference engines (vLLM) for complex MoE structures like Qwen3 and DeepSeek architectures.
3. **Hardware Agility:** Quickly adapting to new hardware (Ascend NPU in PR #6831) and next-gen GPU clusters (B200/H200 discussions), ensuring the framework remains future-proof for frontier model labs.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL ecosystem daily digest for Open Instruct.

# 🧠 RL Open-Source Daily Digest: Open Instruct
**Date:** 2026-06-28

### 1. Today's Highlights
Activity in the last 24 hours is exclusively focused on Pull Requests (4 updated), highlighting active stabilization and optimization of Reinforcement Learning (RL) workloads. Key focus areas include refining asynchronous GRPO (Group Relative Policy Optimization), extending timeout limits for agentic environments, and fixing infrastructure deployment flags for Beaker clusters.

### 2. Releases
*   **No new releases** in the last 24 hours. The project continues to operate on its latest main branch state.

### 3. Important Issues
*   **None.** There were 0 issues opened or updated in the last 24 hours, indicating a period of stable feature development rather than active bug-triage from the community.

### 4. Key PR Progress
The maintainers are actively merging infrastructure and RL pipeline improvements:
*   **[CLOSED] Drop stale async rollout results** ([PR #1738](https://github.com/allenai/open-instruct/pull/1738) by `hamishivi`): A critical update for asynchronous GRPO. It introduces `max_result_age_steps` to drop training data if the generating policy is too many steps behind the current trainer step. This prevents "off-policy" degradation during async rollouts, ensuring data quality and training stability.
*   **[CLOSED] Increase default environment pool acquire timeout to 7200s** ([PR #1729](https://github.com/allenai/open-instruct/pull/1729) by `hamishivi`): Bumps the actor acquire timeout from 10 minutes to 2 hours. This directly supports **long-horizon RL tasks** and complex agentic sandbox rollouts that require extended execution times before yielding results.
*   **[OPEN] fix: parse --preemptible flag in Beaker submit scripts** ([PR #1742](https://github.com/allenai/open-instruct/pull/1742) by `Chessing234`): Resolves a critical cluster-cost bug where `type=bool` in argparse evaluated `--preemptible False` as `True`, preventing users from avoiding expensive, non-preemptible compute nodes.
*   **[OPEN] Checking main's conflicts with the Tmax branch** ([PR #1741](https://github.com/allenai/open-instruct/pull/1741) by `shatu`): Routine branch synchronization and conflict resolution.

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct is a foundational repository for the open-source community, particularly as the focus shifts from standard Supervised Fine-Tuning (SFT) to complex, agentic, and tool-using models. 

Today's updates perfectly illustrate the current bottlenecks in applied RL:
1.  **Asynchronous Pipeline Stability:** Async GRPO is notoriously difficult because rollouts generated by older policy versions can destabilize training. PR #1738 shows the ecosystem maturing by implementing strict staleness thresholds.
2.  **Long-Horizon Agentic Rollouts:** Extending timeouts to 2 hours (PR #1729) signals that the community is moving beyond simple math reasoning into deep, multi-step sandbox environments where environment interactions take significant time.
3.  **Compute Economics:** As RL training loops demand massive GPU hours, infrastructure fixes like the preemptible flag (PR #1742) are vital for researchers operating under strict academic or independent budget constraints.

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
**Date:** 2026-06-28

### 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours has been focused on infrastructure stabilization and core API extensibility. While there are no new releases, maintainers and contributors are actively addressing backend physics engine dependencies and expanding support for complex observation spaces.

### 2. Releases
No new releases were published today. The repository currently shows 0 new releases, indicating a period of consolidation and upstream development rather than feature deployment.

### 3. Important Issues
*   **[Issue #1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597) [OPEN] [help wanted]: Port all environments from box2d to pymunk**
    *   **Author:** jkterry1
    *   **Analysis:** This is a critical infrastructure initiative. The Python bindings for `box2d` have been effectively unmaintained for ~6 years, posing a long-term stability risk to 2D physics environments. The proposal is to migrate entirely to `pymunk`, which boasts active maintenance and superior documentation. This issue is flagged as `help wanted`, representing a major open-source contribution opportunity for the RL community.

### 4. Key PR Progress
*   **[PR #1606](https://github.com/Farama-Foundation/Gymnasium/pull/1606) [WIP]: Correct NumPy version constraints & fix PyTest Dockerfile**
    *   **Author:** Trenza1ore
    *   **Analysis:** Addresses crucial CI/CD and dependency management bugs. Specifically, it fixes a Dockerfile flaw where `ARG NUMPY_VERSION` was misplaced, causing PyTest constraints to fail silently. This ensures future automated testing accurately validates backward/forward compatibility with NumPy versions.
*   **[PR #1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514) [OPEN]: Update Graph to accept arbitrary node and edge spaces**
    *   **Author:** 2ToTheNthPower
    *   **Analysis:** A long-standing, highly technical PR (open since January) that significantly expands Gymnasium's `Graph` space. By allowing arbitrary `Dict` and `Tuple` spaces for nodes and edges, this update brings native support for heterogeneous graphs to the environment, a vital requirement for modern Graph Neural Network (GNN) RL applications.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto interface standard for single-agent reinforcement learning. Today's updates highlight the project's ongoing maturity phase: hardening CI pipelines against shifting numerical library dependencies (NumPy) and evolving the API to support advanced, non-Euclidean data structures (Heterogeneous Graphs). Furthermore, the proactive push to migrate away from deprecated physics engines (`box2d` to `pymunk`) underscores Farama Foundation's commitment to long-term environmental stability, ensuring that RL baselines remain reproducible and low-friction for researchers in 2026 and beyond.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🥚 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-06-28 | **Repository:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. Today's Highlights
PettingZoo experienced a quiet day regarding feature development, with **zero new releases** and only **1 active issue**. However, repository maintainers made significant backend progress by closing a critical CI restoration PR and advancing codebase quality through a major linter expansion. 

### 2. Releases
* **No new releases** were published in the last 24 hours.

### 3. Important Issues
* **[#1253](https://github.com/Farama-Foundation/PettingZoo/issues/1253) [enhancement] Proper initialization of the custom CNN model in the RLlib tutorial**
  * **Author:** `jangroter` (Created: 2024-12-18, Last Active: 2026-06-26)
  * **Summary:** This long-standing issue points out a flaw in the Ray/RLib tutorial (`rllib_pistonball.py`), where a custom `CNNModel` is defined but never actually initialized in the configuration. The author proposes either updating the config to explicitly utilize the custom model or removing the dead code entirely to prevent user confusion.

### 4. Key PR Progress
* **[#1377](https://github.com/Farama-Foundation/PettingZoo/pull/1377) [CLOSED] Restore CI on main**
  * **Author:** `virgilt`
  * **Summary:** This crucial maintenance PR was closed yesterday. It successfully resolved failing Continuous Integration (CI) jobs across the `main` branch—specifically addressing breakdowns in typing, documentation, testing, and tutorial workflows, bringing the repository back to a healthy passing state.
* **[#1376](https://github.com/Farama-Foundation/PettingZoo/pull/1376) [OPEN] Increase ruff strictness and apply mechanical autofixes**
  * **Author:** `mfornet`
  * **Summary:** Building on recent diagnostic improvements, this open PR significantly increases the strictness of the `ruff` linter. It activates additional rule sets beyond the defaults and applies mechanical autofixes to ensure the codebase adheres to the highest modern Python formatting and import standards.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo serves as the industry-standard API for multi-agent reinforcement learning (MARL) within the Farama Foundation ecosystem. By standardizing environment interactions (similar to what Gymnasius does for single-agent RL), PettingZoo allows researchers to seamlessly benchmark complex multi-agent algorithms—from cooperative to competitive tasks. Today's focus on aggressive linting (`ruff`) and strict CI maintenance ensures the library remains robust, readable, and highly stable for downstream integration. Furthermore, addressing tutorial bugs (like the RLlib CNN initialization in Issue #1253) is vital for onboarding new researchers into the rapidly growing MARL space, where frameworks like Ray/RLlib are heavily utilized.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>