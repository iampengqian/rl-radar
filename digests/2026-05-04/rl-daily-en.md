# RL Open Source Daily Digest 2026-05-04

> Generated: 2026-05-03 22:10 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem is currently experiencing a clear bifurcation. Activity is heavily concentrated on post-training and RLHF frameworks designed for Large Language Models (LLMs) and Vision-Language Models (VLMs). Traditional deep RL libraries (Stable Baselines3, CleanRL, Tianshou) and core environment interfaces (Gymnasium, PettingZoo) are experiencing dormancy. The dominant technical challenges across the active projects revolve around distributed systems orchestration, hardware memory constraints, and adapting to the rapid release cadence of frontier multimodal models.

## Activity Comparison
| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 1 (ORS proposal) | 11 | 0 | Standardizing reward infrastructure and aggressively optimizing VRAM for VLMs. |
| **verl** | 1 (NCCL bug) | 4 | 0 | Advancing omni-modal rollouts and optimizing distributed data fetching. |
| **AReaL** | 1 (TP/PP crash) | 2 | 0 | Stabilizing large-scale distributed training and rolling out dependency upgrades. |
| **OpenRLHF** | 1 (Qwen 3.5 fix, closed) | 0 | 1 (v0.10.3) | Rapid response to frontier model compatibility and loss aggregation bugs. |
| **Open Instruct** | 0 | 1 | 0 | Democratizing RL fine-tuning via CPU offloading for consumer hardware. |
| **ROCK** | 0 | 1 | 0 | Hardening distributed environment SDKs via strict type validation. |
| *Others* | *0* | *0* | *0* | *CleanRL, Gymnasium, PettingZoo, rl_games, ROLL, slime, SB3, Tianshou, torchtune saw no activity.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Transition to Omni-modal RL:** The ecosystem is rapidly moving beyond text-only LLMs. Both `verl` and `TRL` are heavily focused on Vision-Language Models (VLMs), with `verl` actively merging support for complex omni-modal architectures like BAGEL (Thinker + DiT).
*   **Standardization of Verifiable Rewards:** `TRL`'s introduction of the Open Reward Standard (ORS) adapter highlights an industry shift towards microservice-style, verifiable reward servers (RLVR) to replace monolithic reward models.

**Engineering & Infrastructure Signals**
*   **VRAM Optimization is Mandatory:** As model size grows, memory efficiency dictates viability. `TRL` implemented chunked NLL losses, `Open Instruct` introduced CPU-Adam offloading, and `AReaL` is integrating Speculative Decoding to accelerate the rollout loop.
*   **Distributed Systems Complexity:** Scaling RL across massive GPU clusters remains the primary engineering bottleneck. Projects are actively fixing complex distributed bugs, such as `AReaL`'s TP/PP regression, `verl`'s NCCL backend configuration errors, and inflated PPO metrics across mini-batches.
*   **Frontier Model Synchronization:** Post-training frameworks are in a constant race to patch weight-loading and tensor-parallelism bugs introduced by cutting-edge foundation models (e.g., `OpenRLHF`'s immediate patch for Qwen 3.5).

## Differentiation Analysis
Active projects in the ecosystem currently fall into two distinct operational categories:

*   **Algorithmic & Workflow Hubs (`TRL`, `Open Instruct`):** These frameworks focus on broad accessibility, rapid integration of the latest alignment algorithms (GRPO, DPO), and tight coupling with the Hugging Face ecosystem. Their primary differentiator is lowering the barrier to entry for both researchers and developers.
*   **High-Throughput Distributed Engines (`verl`, `AReaL`, `OpenRLHF`):** These frameworks treat RL as a massive distributed systems challenge. They differentiate by focusing on raw training throughput, tight integration with high-performance inference engines (vLLM, SGLang), and orchestrating hybrid GPU clusters using frameworks like Ray and Megatron.

## Community Momentum & Maturity
The ecosystem displays clear signs of maturation in how maintainers handle infrastructure velocity. `OpenRLHF` demonstrated highly responsive maturity by closing a critical Qwen 3.5 regression within the same day via a patch release (v0.10.3). `verl` showed similar maturity by closing a longstanding, complex bug regarding inflated PPO loss metrics. Conversely, `AReaL` is currently shouldering the growing pains of scaling, facing critical open regressions in tensor/pipeline parallelism as they bump core dependencies. Meanwhile, foundational libraries like Gymnasium and Stable Baselines3 have reached a state of feature-completeness, resulting in community dormancy.

## Trend Signals
*   **Microservice Reward Architectures:** The integration of HTTP-based reward servers (ORS) indicates that future RL pipelines will treat reward computation as decoupled, scalable API endpoints rather than local Python classes.
*   **Consumer-Hardware Alignment:** The push for CPU-offloading optimizations (e.g., in `Open Instruct`) signals a market expansion attempt, bringing 7B+ parameter GRPO training out of exclusive cloud clusters and onto consumer workstations.
*   **Inference-Bound Training Loops:** The integration of inference-acceleration techniques like Speculative Decoding (`AReaL`) directly into RL frameworks signals that environment rollouts, rather than backward passes, are becoming the primary compute bottleneck in post-training.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL daily digest for Alibaba/ROCK based on the provided GitHub data.

### 1. Today's Highlights
Activity on the `alibaba/ROCK` repository for 2026-05-04 was minimal, characterized by zero new releases, zero newly opened issues, and only one lingering Pull Request receiving a minor update. The focus of the day traces back to a specific bug fix regarding environment configuration type validation.

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **No active issues.** The issue tracker saw no new submissions or updates within the last 24 hours. 

### 4. Key PR Progress
*   **[OPEN] [fix(sdk): add runtime config type validation in PythonRuntimeEnv (#652)](https://github.com/alibaba/ROCK/pull/652)**
    *   **Author:** KunWuLuan
    *   **Status:** Open (Last updated: 2026-05-03)
    *   **Context:** This PR addresses a silent failure or crash during environment initialization. Based on the error logs, when spawning an `EnvironmentWorker` (specifically `train_env-0`), an unvalidated configuration type causes a hard crash (`ERROR`) during the initialization of the `ModelService` inside the ROCK SDK's sandboxed `rock_agent`. The proposed fix implements strict type validation for runtime configurations within `PythonRuntimeEnv`, ensuring that environment workers fail predictably before spawning rather than throwing deep sandbox errors. 

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning (RL) is increasingly dominated by distributed, highly scalable architectures capable of handling complex environments. **ROCK** (an RL infrastructure framework) is critical in this ecosystem because it bridges the gap between RL algorithm research and large-scale industrial deployment. 

Projects like ROCK solve the "last mile" problems of distributed RL—such as efficient sampling, resource isolation (via sandboxes), and distributed environment execution. The ongoing bug fix in PR [#652](https://github.com/alibaba/ROCK/pull/652) perfectly illustrates a common, real-world RL engineering bottleneck: debugging cryptic `pid` crashes across thousands of parallel remote environment workers. By enforcing strict type validation at the SDK level, the project continues to mature, offering the reliability needed to train next-generation RL agents without infrastructure friction.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**RL Open-Source Ecosystem Daily Digest: AReaL**
**Date:** 2026-05-04

### 1. Today's Highlights
Activity on the inclusionAI/AReaL repository over the past 24 hours indicates active stabilization and performance optimization. A critical distributed training regression was reported regarding Tensor/Pipeline Parallelism, while maintainers continue to push forward on dependency upgrades and inference speed enhancements.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **Distributed Training Crash on TP/PP > 1:** Issue [#1298](https://github.com/inclusionAI/AReaL/issues/1298) reports a crash triggered by `clear_batches()` on non-DP-head ranks. The author notes this is a regression stemming from PR #1282. The bug is highly reproducible in the project's Docker environment and poses a critical blocker for large-scale distributed RL training.
    *   *Author:* Adiactive | *Status:* Open

### 4. Key PR Progress
*   **[High Priority] Dependency Upgrades:** PR [#1206](https://github.com/inclusionAI/AReaL/issues/1206) is actively being updated to bump major dependencies (`megatron-core`, `sglang`, `vllm`, `transformers`) for the April 2026 release cycle. This reflects a rigorous effort to adapt AReaL's codebase to recent breaking API changes across the rapidly evolving LLM inference and training stacks.
    *   *Author:* garrett4wade | *Status:* Open
*   **Inference Throughput Expansion:** PR [#1176](https://github.com/inclusionAI/AReaL/issues/1176) introduces support for Speculative Decoding using the `Sglang Eagle` algorithm. Implementing speculative decoding is a crucial step for RLHF/post-training frameworks to reduce generation latency and speed up the reward/rollout loop. 
    *   *Author:* TaoZex | *Status:* Open (WIP)

### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF and post-training ecosystem, the bottleneck is shifting heavily toward inference speed and distributed orchestration. AReaL’s ongoing developments perfectly highlight the core challenges of modern LLM training:
1.  **System-Level Efficiency:** The integration of Speculative Decoding (#1176) shows a direct push to accelerate environment rollouts, which is notoriously compute-bound in RL fine-tuning.
2.  **Complex Distributed Orchestration:** The TP/PP regression (#1298) underscores the engineering complexity of scaling RL across massive GPU clusters while integrating with high-performance inference engines like `vllm` and `sglang`. 
3.  **Ecosystem Synchronization:** By continuously upgrading core dependencies like `megatron-core` and `transformers` (#1206), AReaL is actively working to maintain compatibility with the frontier of open-source distributed training architectures.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-05-04

## 1. Today's Highlights
Activity in the TRL repository over the last 24 hours signals a strong push toward infrastructure flexibility and training optimization. The standout development is the introduction of an adapter for the **Open Reward Standard (ORS)**, which aims to standardize environment-to-trainer communication. Concurrently, core maintainers are heavily focused on optimizing memory usage via chunked NLL losses for SFT and refining Visual Language Model (VLM) pipelines.

## 2. Releases
**None.** No new releases were cut in the past 24 hours.

## 3. Important Issues
*   **[Experimental] OpenReward Standard Environment Adapter ([#5695](https://github.com/huggingface/trl/issues/5695))**
    *   **Author:** `adithya-s-k`
    *   **Summary:** A proposal to introduce `trl.experimental.openreward.OpenRewardEnv`. This thin adapter would enable any TRL trainer with an `environment_factory` slot (e.g., GRPO, AsyncGRPO, RLOO) to train against environments communicating via HTTP using the Open Reward Standard (ORS). This marks a significant step toward modular, standardized RL environment integration.

## 4. Key PR Progress
Eleven PRs saw updates today, with core maintainer `qgallouedec` driving massive structural and efficiency improvements:

*   **SFT Memory & Efficiency Improvements:**
    *   **[#5676](https://github.com/huggingface/trl/pull/5676) & [#5684](https://github.com/huggingface/trl/pull/5684):** Enables chunked NLL loss for SFT, first for PEFT (with benchmarks attached) and subsequently extending support to VLMs. This is crucial for memory management when training large sequence models.
*   **VLM and Processor Refinements:**
    *   **[#5560](https://github.com/huggingface/trl/pull/5560) & [#5561](https://github.com/huggingface/trl/pull/5561):** Streamlines VLM handling by properly accepting `processor` in `get_training_chat_template` and removing VLM support from `parse_response` to enforce strict tokenizer-only inputs, tightening the type hierarchy.
    *   **[#5675](https://github.com/huggingface/trl/pull/5675):** Adds `&#123;&#37; generation &#37;&#125;` markers for the Cohere2 chat template to ensure proper assistant-loss masking.
*   **GRPO & Optimizer Updates:**
    *   **[#5690](https://github.com/huggingface/trl/pull/5690):** Updates GRPO loss computation to leverage Liger Kernel v0.8.0, introducing support for two-sided clipping (delta), bias correction for KL, and Vespo configurations. 
*   **Infrastructure & Bug Fixes:**
    *   **[#5637](https://github.com/huggingface/trl/pull/5637) & [#5638](https://github.com/huggingface/trl/pull/5638):** Refactors the monolithic tiny-model generation scripts into per-model layouts and aligns tiny-Glm4MoeForCausalLM with the GLM-4.5 reference config.
    *   **[#5696](https://github.com/huggingface/trl/pull/5696):** The implementation PR for the OpenReward Standard adapter mentioned above.
    *   **[#5694](https://github.com/huggingface/trl/pull/5694):** Fixes a `RuntimeError` crash during activation offloading caused by non-contiguous tensors.
    *   **[#5678](https://github.com/huggingface/trl/pull/5678):** Housekeeping PR that standardizes test file naming conventions and removes redundant comments.

## 5. Why This Project Matters in Today's RL Landscape
TRL (Transformer Reinforcement Learning) remains the de facto open-source library for aligning and fine-tuning Large Language Models (LLMs) and Vision-Language Models (VLMs) using RL algorithms like PPO, GRPO, and DPO. 

Today's updates highlight two dominant trends in the modern RL landscape:
1.  **Standardized RLHF Environments:** The integration of the Open Reward Standard (ORS) reflects an industry moving away from monolithic, tightly coupled reward/model setups toward scalable, microservice-style HTTP reward servers. 
2.  **Compute Efficiency over Raw Scale:** As models get larger, techniques like *chunked NLL loss* and kernel-level optimizations (like *Liger Kernel v0.8.0* integration) are no longer optional—they are required to fit LLM fine-tuning within feasible VRAM budgets. By actively refactoring VLM support and memory offloading, TRL is ensuring that multi-modal RL training remains accessible to the open-source community.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-05-04  
**Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

### 1. Today's Highlights
OpenRLHF rolls out version `v0.10.3`, addressing a critical regression with loading Qwen 3.5 multimodal weights and fixing token-level loss aggregation. A recent bug report confirming the Qwen 3.5 issue has been officially resolved and closed following this release. 

### 2. Releases
*   **[v0.10.3](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.10.3)**
    *   **Fix token level loss aggregation:** Corrects how losses are computed and aggregated at the token level, ensuring stable and accurate gradient updates during RLHF fine-tuning (Commit `df78645` by @xiaoxigua999).
    *   **Fix Qwen 3.5 weights loading:** Resolves a `missing weight` error when initializing the newly released Qwen 3.5 models, which was previously causing degraded/wrong sample generation during vLLM policy updates (Commit `cb621db` by @xiaoxigua999).
    *   **Dependency Update:** Bumped Ray version to improve distributed training stability.

### 3. Important Issues
*   **[#1232 missing weight when loading from Qwen3.5](https://github.com/OpenRLHF/OpenRLHF/issues/1232)** [CLOSED]
    *   *Author:* RushDon
    *   *Summary:* The user reported that using the hybrid engine training script (`train_vlm_math_hybrid_engine.sh`) with Qwen 3.5 resulted in missing weights. This caused the ReferenceModelActor and PolicyModelActor to fall back incorrectly, leading to totally wrong generated samples after vLLM weight updates. Resolved directly by the fixes introduced in today's `v0.10.3` release.

### 4. Key PR Progress
*   No new or updated Pull Requests were recorded in the last 24 hours. The latest bug fixes were pushed directly via commits linked to the new release.

### 5. Why This Project Matters in Today's RL Landscape
In the modern RLHF landscape, models are evolving rapidly toward complex multimodal architectures (like Qwen 3.5 Vision-Language Models). OpenRLHF remains a critical open-source infrastructure layer because it bridges the gap between cutting-edge LLM serving engines (vLLM) and distributed RL training frameworks (Ray). By actively maintaining fast patches for model-specific weight-loading and strict token-level loss aggregations, OpenRLHF ensures that practitioners can safely scale hybrid-engine RL training without encountering silent generation degradation.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-05-04 | **Project:** [volcengine/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
Activity over the past 24 hours shows a strong focus on performance optimization and expanding multimodal/agentic RL capabilities. A longstanding bug related to PPO metric logging was officially closed, while active PRs are pushing forward native support for omnimodal models (VeOmni, BAGEL) and optimizing distributed data handling. A new runtime issue regarding NCCL/CPU backend configuration was flagged by the community.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **[OPEN] NCCL Backend Configuration Error ([#6237](https://github.com/volcengine/verl/issues/6237))**
    *   **Context:** A user reported a crash during PPO training (`main_ppo.py`) caused by a duplicate device type string: `"cpu:gloo,cpu:nccl"`. This suggests a recent change or edge case in distributed backend initialization is passing invalid custom process group backend strings.
    *   **Author:** chenyunsai

## 4. Key PR Progress
*   **[CLOSED] Fix Inflated PPO Loss Metrics ([#5766](https://github.com/volcengine/verl/pull/5766))**
    *   **Context:** Resolved a significant logging bug where `actor/pg_loss`, `actor/kl_loss`, and `critic/vf_loss` were inflated by a factor of `num_mini_batches × ppo_epochs`. The root cause was traced back to PR #4711, which shifted metric accumulation from list-based appending to float-scalar addition. 
    *   **Author:** dubin555
*   **[OPEN] VeOmni Native Log Probabilities ([#6184](https://github.com/volcengine/verl/pull/6184))**
    *   **Context:** Removes the need for a forward monkey-patch by utilizing VeOmni's native `return_log_probs` path. This fixes an `AttributeError` crash in `FSDPEngine` when using fused kernels (`use_fused_kernels=True`) where `log_probs` and `entropy` were missing from model outputs.
    *   **Author:** Luosuu
*   **[OPEN] Fractional Lazy Fetching for DataProtoFuture ([#6234](https://github.com/volcengine/verl/pull/6234))**
    *   **Context:** A major performance refactor replacing brittle `collect_fn` and `dispatch_fn` mechanisms with native chunking logic using `start_fraction` and `end_fraction`. This optimizes how futures are fetched lazily across the distributed pipeline.
    *   **Author:** yurun00
*   **[OPEN] BAGEL RL Rollout Support ([#5947](https://github.com/volcengine/verl/pull/5947))**
    *   **Context:** Introduces multi-stage BAGEL (Thinker + DiT) RL rollout support via `vLLMOmniHttpServer`. Following the Qwen-Image pattern, this PR enables RL fine-tuning for complex BAGEL image generation models.
    *   **Author:** timzsu

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with Verifiable Rewards (RLVR) become the de facto standards for aligning Large Language Models (LLMs), **verl** has established itself as a critical, high-throughput infrastructure layer. 

Today's digest highlights exactly what modern RL engineers need: **scaling to multimodal architectures and optimizing distributed communication overhead.** The integration of BAGEL and VeOmni (#5947, #6184) proves that verl is actively keeping pace with the industry's rapid pivot from text-only LLMs to complex omni-modal models (combining text, vision, and diffusion). Meanwhile, PRs like the fractional lazy fetching of futures (#6234) demonstrate a mature focus on the underlying distributed systems engineering required to make RL training on massive parameter models both viable and cost-effective.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL daily digest for Open Instruct based on the provided data.

### 1. Today's Highlights
Activity for `allenai/open-instruct` on 2026-05-04 was minimal but highly focused. The ecosystem saw zero new releases and no new issue updates. The primary event is an open pull request aimed at significantly lowering the hardware barrier to entry for running Group Relative Policy Optimization (GRPO) by introducing flexible CPU offloading optimizations.

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Important Issues
**No issues** were created or updated in the last 24 hours.

### 4. Key PR Progress
*   **[PR #1654](https://github.com/allenai/open-instruct/pull/1654) [OPEN] Add use_cpu_adam CLI toggle and offload validation for GRPO**
    *   **Author:** Bhavyashah20 (Created: 2026-05-03)
    *   **Summary:** This PR addresses a significant hardware bottleneck for fine-tuning RL models. Previously, running GRPO on a 7B parameter model required 40–80 GB of VRAM. While DeepSpeed supports CPU offloading to alleviate this, the optimizer was hardcoded to `torch.optim.AdamW`, preventing users from utilizing `DeepSpeedCPUAdam` without manually editing the source code. This PR introduces a CLI toggle for the CPU Adam optimizer and implements offload validation, allowing researchers to run large-scale RLHF/GRPO alignment tasks on consumer-grade or smaller hardware setups seamlessly. 

### 5. Why This Project Matters in Today's RL Landscape
Open-Instruct remains a foundational toolkit for the open-source Reinforcement Learning from Human Feedback (RLHF) and LLM alignment community. As post-training techniques like GRPO become the standard for aligning 7B+ parameter models, hardware constraints (like the 40-80GB VRAM requirement) become a severe bottleneck for academic and independent researchers. PRs like #1654 represent a critical step in democratizing RL by ensuring that state-of-the-art DeepSpeed optimizations are easily accessible via CLI, bridging the gap between industrial-scale RL infrastructure and consumer hardware capabilities.

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

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>