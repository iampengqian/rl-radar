# RL Open Source Daily Digest 2026-07-15

> Generated: 2026-07-14 22:17 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-07-15 is sharply bifurcated between large-scale LLM/VLM post-training infrastructure and classical algorithmic/environmental foundations. 
* **LLM/VLM RLHF Frameworks:** Projects like AReaL, TRL, verl, ROLL, and slime are driving aggressive innovation in distributed rollout orchestration, multimodal training, and next-gen model support (e.g., DeepSeek V4, Qwen3.5).
* **Environment APIs:** Gymnasium and PettingZoo are undergoing rigorous structural hardening, focusing on API standardization, strict typing, and deterministic behavior for complex spaces.
* **Orchestration & Tooling:** ROCK is maturing as a sandbox execution layer for agentic RL, while CleanRL and Open Instruct represent niche, high-transparency tools experiencing maintenance lulls.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **AReaL** | 0 | 46 | 0 | High-velocity execution on agentic infrastructure, memory services, and VLM bug fixes. |
| **TRL** | 4 | 15 | 0 | Heavy push on GOLDTrainer distillation, async GRPO, and agentic environment loop stability. |
| **verl** | 4 | 7 | 0 | Enterprise-scale async RL, heterogeneous hardware expansion (AMD/Ascend), and low-precision training. |
| **Gymnasium** | 3 | 8 | 0 | Foundational structural hardening; Graph spaces generalized, strict typing added, determinism bugs fixed. |
| **PettingZoo** | 1 | 9 | 0 | API robustness for MARL; physics fixes, native video recording, and dead environment pruning. |
| **ROCK** | 3 | 4 | 0 | Scaling sandbox orchestration; fixing concurrent state tracking and garbage collection bottlenecks. |
| **ROLL** | 4 | 2 | 0 | Hardware diversification (Ascend NPU) and resolving multi-modal/inference weight-sync bottlenecks. |
| **slime** | 1 | 6 | 0 | Algorithmic correctness (GRPO/DAPO reward fixes) and MoE quantization support. |
| **CleanRL** | 0 | 1 | 0 | Low activity; optimizing tensor memory copies for high-throughput Atari Envpool pipelines. |
| **Open Instruct** | 1 | 0 | 0 | Minimal activity; community inquiry regarding OLMo 3 SFT reproduction. |
| **OpenRLHF, rl_games, SB3, Tianshou, torchtune** | 0 | 0 | 0 | Inactive (no updates in the last 24 hours). |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
* **Group-Relative Algorithms:** GRPO and DAPO are the dominant focus. TRL, AReaL, and slime are actively patching reward normalization, sampling variance, and type validation to prevent reward hacking and ensure mathematical correctness.
* **Distillation & Reasoning:** Massive emphasis on knowledge distillation to compress reasoning capabilities from teacher to student models (e.g., TRL's `GOLDTrainer` with cross-tokenizer support and vLLM native weight syncing).
* **Multimodal RL:** The shift from text-only to Vision-Language Model (VLM) training is ubiquitous. AReaL, verl, and ROLL are fixing context-parallel routing, vision token generation, and multimodal data collation.
* **Agentic Multi-Turn RL:** Frameworks are rapidly integrating environment feedback loops and multi-turn rollout capabilities without breaking attention masks (visible in TRL's `GRPOTrainer` and AReaL's new session lifecycles).

**Engineering & Infrastructure Signals**
* **Async Rollouts & Resource Decoupling:** Eliminating GPU idle time between trainer and rollout nodes is a top priority. verl and AReaL are pioneering fully async PPO with dynamic resource scaling and streaming dataloaders.
* **Hardware Diversification:** Escaping NVIDIA walled gardens via native support for AMD MI250X (verl) and Huawei Ascend NPUs (verl, ROLL) is accelerating due to global hardware supply constraints.
* **Weight Synchronization Bottlenecks:** Transferring updated weights to inference engines (like vLLM/SGLang) is a universal pain point. TRL and verl are replacing HTTP syncs with NCCL/Megatron-Bridge native transfers, while ROLL is actively battling 20-minute GPU starvation issues.
* **Sandbox & Session Orchestration:** For tool-using agents, secure and stateful execution environments are critical. AReaL is hardening DataProxy session protocols, while ROCK is scaling concurrent sandbox garbage collection.

## Differentiation Analysis
* **Scale vs. Accessibility:** TRL serves as the accessible bridge for the broader open-source community (fixing default prompt lengths, warning on truncations), whereas verl and AReaL operate at the bleeding edge of enterprise scale (async distributed schedulers, Megatron integration, FP8/MXFP4 precision).
* **Algorithmic Scope:** slime is heavily differentiated by its focus on mathematical edge-cases in modern algorithms (REINFORCE++, GRPO, DAPO) and MoE quantization (Qwen3.5 INT4-QAT), acting as a bridge between research math and infrastructure.
* **Hardware Agnosticism:** verl and ROLL are uniquely positioning themselves as multi-arch platforms, explicitly catering to non-NVIDIA clusters, whereas TRL and AReaL remain more tightly coupled to the PyTorch/CUDA ecosystem.
* **Application Layer vs. Training Layer:** Gymnasium and PettingZoo differentiate entirely by focusing on the environment API layer (Graph spaces, MARL). ROCK sits in the middleware, specifically orchestrating the execution sandboxes that connect agents to environments.

## Community Momentum & Maturity
* **AReaL** shows explosive momentum, merging 46 PRs in a single day with zero new issues, indicating a highly disciplined, internal-team-driven development sprint.
* **TRL** remains the ecosystem hub for open-source contributors, actively closing user-facing issues around FSDP2 and AsyncGRPO while pushing high-impact community PRs.
* **Gymnasium & PettingZoo** demonstrate high structural maturity. They are shifting from feature development to maintenance and standardization (strict typing, CI hardening, pruning dead environments like Gin Rummy).
* **verl & ROLL** show signs of enterprise maturation, heavily focused on Q3 roadmapping, cross-hardware CI, and resolving massive distributed scaling pains (multi-node bottlenecks, GPU starvation).

## Trend Signals
* **Async is the New Standard:** The shift from synchronous PPO to Fully Async RL with decoupled trainer-rollout resources is solidifying. Projects not investing in async topologies will rapidly lose relevance for large-scale LLM alignment.
* **Agentic Infrastructure Gold Rush:** The ecosystem is pivoting from static prompt-response RLHF to long-horizon, tool-using agentic RL. Secure session lifecycles (AReaL) and scalable code-execution sandboxes (ROCK) are becoming critical infrastructure layers.
* **Precision & Quantization in RL:** The integration of FP8/MXFP4 (verl) and INT4-QAT (slime) into RL pipelines signals that low-precision training is no longer just for pre-training; it is a requirement for economically viable post-training.
* **Distillation as a Post-Training Step:** The heavy iteration on On-Policy Distillation (OPD) and GOLDTrainer indicates that RL is increasingly being used not just to optimize policy, but to distill reasoning capabilities into smaller, deployable models.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Ecosystem Daily Digest for **2026-07-15**.

### 1. Today's Highlights
ROLL (by Alibaba) shows active hardware adaptation and framework compatibility efforts. A significant new PR introduces native support for Huawei Ascend NPUs via MindSpeed and Megatron, while another addresses RoPE configurations for Transformers v5+. Conversely, the issue tracker reveals persistent bottlenecks in multi-modal model (Qwen-VL series) training and inference, alongside performance bottlenecks in weight updates. 

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Important Issues
*   **Multi-Modal & Agentic Failures:** Users are experiencing crashes when training Qwen2/3-VL models due to missing `mm_token_type_ids` in the data Collator ([Issue #435](https://github.com/alibaba/ROLL/issues/435)). Additionally, Agentic tasks using `code_dapo` face out-of-bounds errors during generation scheduling ([Issue #309](https://github.com/alibaba/ROLL/issues/309)).
*   **Performance & Hanging Bottlenecks:** Large-scale inference remains a pain point, with training hanging at the actor-infer step when deploying Qwen3-8B on 8-GPU nodes ([Issue #329](https://github.com/alibaba/ROLL/issues/329)). Furthermore, users report severe GPU starvation during weight updates, taking up to 20 minutes for a 7B model ([Issue #279](https://github.com/alibaba/ROLL/issues/279)).
*   **Hardware Configuration Constraints:** The resource manager currently fails to parse discontinuous GPU mappings (e.g., `device_mapping: list([1, 3])`), limiting flexible hardware allocation ([Issue #205](https://github.com/alibaba/ROLL/issues/205)).

### 4. Key PR Progress
*   **[OPEN] Ascend NPU & Megatron Integration:** [PR #456](https://github.com/alibaba/ROLL/pull/456) brings major platform diversification by adding MindSpeed-based NPU initialization, Megatron optimizer compatibility, and specific Ascend CI workflows. 
*   **[CLOSED] Transformers v5+ Compatibility:** [PR #473](https://github.com/alibaba/ROLL/pull/473) successfully added first-class support for `rope_parameters` to the MCore Adapter, ensuring stability for models utilizing newer RoPE configurations in Transformers v5+.

### 5. Why This Project Matters in Today's RL Landscape
In the rapidly evolving RL post-training landscape (especially for LLMs and VLMs), infrastructure bottlenecks often outpace algorithmic innovations. ROLL is tackling the exact pain points currently dominating the field: 
1.  **Inference-Training Disconnect:** Managing vLLM inference engines (as seen in Issue #329) and weight synchronization (Issue #279) without starving GPUs is a universal challenge in modern RLHF/RLVR pipelines. ROLL provides a battle-tested sandbox for these operations.
2.  **Hardware Agility:** With GPU supply constraints, PRs like #456 (Ascend NPU support) are critical. Expanding beyond Nvidia ecosystems ensures that large-scale distributed RL remains accessible and cost-effective globally.
3.  **Multi-Modal RL:** As the industry shifts from text-only RLHF to complex multi-modal and agentic RL, frameworks like ROLL are surfacing—and systematically resolving—low-level data collection issues (Issue #435), paving the way for the next generation of reasoning models.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-07-15

### 1. Today's Highlights
ROCK's development activity today is heavily focused on **sandbox lifecycle stability and orchestration scalability**. Three new bug reports and their corresponding fixes highlight edge cases in concurrent status monitoring and garbage collection for RL evaluation environments. Additionally, new feature PRs introduce a unified CLI for dataset task orchestration and a new OpenSandbox runtime backend, significantly expanding the project's execution capabilities.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Important Issues
Three open issues were updated, primarily concerning sandbox management robustness under load:
*   **#1246** [Bug] `SandboxManager.get_status` fails during concurrent status refreshes. When multiple callers update a sandbox from `Pending` to `Running` simultaneously, the state transition logic crashes. ([alibaba/ROCK #1246](https://github.com/alibaba/ROCK/issues/1246))
*   **#1242** [Bug] `auto_delete` scanner misses expired sandboxes. By ordering queries via `stop_time DESC`, the scanner gets stuck reading the newest 1000 records and never reaches older, expired stopped sandboxes. ([alibaba/ROCK #1242](https://github.com/alibaba/ROCK/issues/1242))
*   **#1248** [Maintenance] Proposal to relax the `ScaffoldHub` dependency constraint in `pyproject.toml` from a pinned version to `>=0.1.6` to improve downstream compatibility. ([alibaba/ROCK #1248](https://github.com/alibaba/ROCK/issues/1248))

### 4. Key PR Progress
Developers moved quickly to address the reported bugs, while advancing major architectural features:
*   **#1233** [feat(proxy)] Introduces the OpenSandbox runtime backend. This extracts the existing Rocklet HTTP path behind a backend interface and routes operations through the OpenSandbox SDK, failing closed on metadata conflicts. ([alibaba/ROCK #1233](https://github.com/alibaba/ROCK/pull/1233))
*   **#1235** [feat(cli)] Unifies job run orchestration for dataset tasks. Extends `rock job run` to support `--task`, `--tasks`, and `--all` flags, adding CLI-level concurrency control and JSONL progress event tracking. ([alibaba/ROCK #1235](https://github.com/alibaba/ROCK/pull/1235))
*   **#1247** [fix] Guards the pending status alive transition to resolve the concurrent state refresh crash outlined in Issue #1246. ([alibaba/ROCK #1247](https://github.com/alibaba/ROCK/pull/1247))
*   **#1243** [fix] Corrects the auto-delete stopped sandbox ordering to resolve the garbage collection bottleneck from Issue #1242. (Note: PR #1245 was closed in favor of this approach). ([alibaba/ROCK #1243](https://github.com/alibaba/ROCK/pull/1243))

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning pipelines scale—particularly with agentic workloads requiring complex tool-use and code execution—infrastructure reliability becomes the primary bottleneck. ROCK's current development cycle demonstrates a mature focus on **environment orchestration at scale**. Fixing concurrency bugs in sandbox status tracking (#1246) and scaling garbage collection past 1,000+ instances (#1242) proves that ROCK is actively being hardened for high-throughput, distributed RL evaluation. Furthermore, abstracting runtime backends (#1233) and unifying dataset task execution (#1235) allow researchers to seamlessly swap execution environments and manage large-scale rollouts, positioning ROCK as a critical piece of infrastructure for modern RL training and evaluation.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# 📊 RL Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-07-15

## 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours is heavily focused on **algorithmic correctness and infrastructure performance**. Community contributor `morluto` submitted a rapid-fire series of PRs addressing critical bugs in reward calculation (GRPO/DAPO) and performance bottlenecks in REINFORCE++. Concurrently, core maintainers are pushing updates to rollout session management and MoE (Mixture of Experts) quantization support.

## 2. Releases
*   **New Releases:** None (0)
*   **Latest Stable:** N/A

## 3. Important Issues
*   **[Question] General On-Policy Distillation (OPD) Support** | [Issue #2202](https://github.com/THUDM/slime/issues/2202)
  *   **Author:** `HelloWorldLTY`
  *   **Summary:** A user has inquired whether `slime` currently supports General On-Policy Distillation (referencing the HuggingFace OPD framework). This remains unanswered and highlights a potential area for ecosystem expansion, as distillation is becoming a standard practice for efficient RLHF model deployment.

## 4. Key PR Progress
Six PRs saw activity today, showcasing strong maintenance of core RL mechanisms:

*   **[perf] Vectorize REINFORCE++ discounted returns** | [PR #2205](https://github.com/THUDM/slime/pull/2205) by `morluto`
  *   Replaces a slow Python reverse-loop with an existing chunked discounted scan (from `ppo_utils.py`) for `get_reinforce_plus_plus_returns`. A crucial optimization for host-side bottlenecks when dealing with batched, long-context responses.
*   **[fix] Normalize rewards by explicit sample groups** | [PR #2204](https://github.com/THUDM/slime/pull/2204) by `morluto`
  *   Fixes a critical GRPO bug in `RolloutManager._post_process_rewards` where custom rollouts returning uneven samples per prompt caused rewards to be incorrectly centered across the entire batch.
*   **[fix] Validate DAPO integer labels without float coercion** | [PR #2203](https://github.com/THUDM/slime/pull/2203) by `morluto`
  *   Removes `int(float(gt))` from the DAPO scorer, fixing an edge-case reward hacking bug where decimals (e.g., `"0.5"`) were floored to `0`, and large integers were rounded due to binary64 precision limits.
*   **[Rollout] Add opt-in group-scoped session affinity** | [PR #2206](https://github.com/THUDM/slime/pull/2206) by `chengcuiping`
  *   Introduces an opt-in group scope for rollout session IDs using consistent-hashing routing. This improves multi-turn RLHF by preserving session affinity across specific groups.
*   **Fix partial rollout off-policy loss mask alignment** | [PR #2207](https://github.com/THUDM/slime/pull/2207) by `chengcuiping`
  *   Adds a `Sample.mask_response_tokens()` helper to ensure `loss_mask` length invariants are preserved during partial rollouts of previous off-policy tokens.
*   **Support Qwen3.5 MoE INT4-QAT** | [PR #2156](https://github.com/THUDM/slime/pull/2156) by `ShuZihan`
  *   Extends hardware/software interoperability by adding fused 3D routed expert support and runtime Megatron-to-HF weight mapping for Qwen3.5 INT4-QAT.

## 5. Why This Project Matters in Today's RL Landscape
As the LLM alignment field pivots increasingly toward complex, group-relative algorithms (like GRPO) and offline/post-training methods (like DAPO), the mathematical correctness of token-level reward shaping and loss masking becomes paramount. 

Today's PRs demonstrate that `slime` is actively maturing to handle **production-scale RLHF edge cases**: preventing reward-hacking via strict type validation (DAPO), ensuring accurate variance reduction in uneven sampling batches (GRPO), and optimizing token loops via vectorization. Combined with advanced infrastructure support for next-gen MoE architectures (Qwen3.5 INT4), `slime` is positioning itself as a highly robust, scalable framework for both RL research and industrial deployment.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL based on the provided GitHub data.

# 🧠 AReaL RL Ecosystem Daily Digest — 2026-07-15

## 1. Today's Highlights
* **High Velocity, Focused Execution:** AReaL processed **46 pull requests** in the last 24 hours with **zero new issues**, indicating a highly streamlined development and code-review pipeline.
* **Agent & Memory Architecture Overhaul:** A massive cluster of merged PRs ([#1540](https://github.com/areal-project/AReaL/pull/1540), [#1535](https://github.com/areal-project/AReaL/pull/1535), [#1534](https://github.com/areal-project/AReaL/pull/1534)) establishes a strict, secure wire protocol and lifecycle for Agent sessions and immutable Memory services.
* **VLM & RLHF Training Fixes:** Critical bugs affecting Vision-Language Models (VLMs) and reward normalization in PPO/online RL workflows were resolved today.

## 2. Releases
* **None.** No new version tags or releases were published in the last 24 hours. The repository remains in an active development merge phase.

## 3. Important Issues
* **None.** The issue tracker had 0 updates in the last 24 hours. The engineering team is entirely focused on clearing the PR backlog.

## 4. Key PR Progress

**Agent, Memory, & Security Infrastructure (via `[codex]` scope)**
* **[#1540](https://github.com/areal-project/AReaL/pull/1540) [CLOSED]:** Defined the exact Agent session lifecycle wire protocol (`exact_session_lifecycle_v1`), binding every operation to a Worker-minted identity.
* **[#1520](https://github.com/areal-project/AReaL/pull/1520) [CLOSED]:** Hardened DataProxy security by authenticating Worker pair hops with distinct random Bearer credentials for side effects.
* **[#1531](https://github.com/areal-project/AReaL/pull/1531) & [#1532](https://github.com/areal-project/AReaL/pull/1532) [CLOSED]:** Enforced strict security modes per session incarnation and ensured transient broker pins are cleared after integrity failures.
* **[#1535](https://github.com/areal-project/AReaL/pull/1535) [CLOSED]:** Optimized resource management by reaping idle Agent sessions concurrently, preventing head-of-line blocking.

**Online RL & Evaluation**
* **[#1516](https://github.com/areal-project/AReaL/pull/1516) [OPEN]:** Introduced grouped reward normalization controls, allowing developers to normalize rewards across `n_samples` rollouts from the same prompt and drop incomplete groups—crucial for GRPO/PPO variants.
* **[#1480](https://github.com/areal-project/AReaL/pull/1480) [CLOSED]:** Added a version-checked online held-out evaluation topology, allowing experiments to measure fixed task distributions while external agents produce PPO samples.
* **[#1541](https://github.com/areal-project/AReaL/pull/1541) [OPEN]:** Patched an API bug where async reward timeouts returned `0` (int) instead of `0.0` (float), breaking v1 OpenAI proxy workflows. 

**Inference & VLM Support**
* **[#1529](https://github.com/areal-project/AReaL/pull/1529) [CLOSED]:** Fixed a context-parallel bug where text-only VLM microbatches were incorrectly routed, optimizing the THD (variable length) forward pass.
* **[#1472](https://github.com/areal-project/AReaL/pull/1472) [CLOSED]:** Enabled explicit disk weight updates for full-parameter RL actors during non-colocated local SGLang rollouts.
* **[#1483](https://github.com/areal-project/AReaL/pull/1483) [CLOSED]:** Standardized the V2 rollout gateway addresses, ensuring robust readiness and retry semantics before traffic begins.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is quickly establishing itself as a premier open-source framework for **distributed, large-scale Reinforcement Learning from Human Feedback (RLHF) and Agentic training**. 

Today's updates prove the project is tackling the hardest engineering bottlenecks in modern RL:
1. **Agentic Infrastructure:** The new Memory Service and strict DataProxy session lifecycles show AReaL is building first-class support for training *long-horizon, tool-using AI agents*, not just static LLMs. Ensuring secure, concurrent, and stateful sessions is critical for reliable rollout generation.
2. **Complex Reward & Inference Topologies:** Features like grouped reward normalization ([#1516](https://github.com/areal-project/AReaL/pull/1516)) and async held-out evaluation ([#1480](https://github.com/areal-project/AReaL/pull/1480)) directly support cutting-edge algorithms (like Group Relative Policy Optimization) and scalable inference engines (like SGLang).
3. **Multimodal RL:** Bug fixes around VLM bin-packing ([#1529](https://github.com/areal-project/AReaL/pull/1529)) highlight active development to ensure vision-language models can be trained efficiently using sequence packing without breaking context parallelism.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL daily digest for TRL based on the provided GitHub data.

# 📊 TRL RL Daily Digest — 2026-07-15

## 1. Today's Highlights
* **The GOLD standard for Knowledge Distillation:** A massive push today focused on the `GOLDTrainer`, including cross-tokenizer distillation (X-Token), vLLM native weight syncing, and fixes for on-policy prompt truncation and EOS masking.
* **Stabilizing Async & Agentic RL:** Heavy activity around `AsyncGRPOTrainer` to fix epoch counting and add missing sampling parameters. Critical environment loop bugs were also patched across `GRPOTrainer` and `DPPOTrainer`.
* **Optimizing Compute:** Multiple PRs aim to prevent wasted training cycles by dropping zero-learning-signal examples in DPO/KTO and warning users when `max_completion_length` silently truncates all generations.

## 2. Releases
* **No new releases** in the last 24 hours.

## 3. Important Issues
* **AsyncGRPO Pickling Crash ([#6133](https://github.com/huggingface/trl/issues/6133)):** A critical bug where documented picklable reward callables crash `_AsyncRolloutLoop` during metric naming. *(Status: Closed)*
* **Multi-Turn GRPO ([#4974](https://github.com/huggingface/trl/issues/4974)):** Feature integration tracking for multi-turn training (agentic tool use/environment feedback) without breaking attention masking for NeMo-Gym. *(Status: Closed)*
* **FSDP2 Precision Errors ([#4867](https://github.com/huggingface/trl/issues/4867), [#3581](https://github.com/huggingface/trl/issues/3581)):** Recurring friction points for users combining FSDP 2 configurations with `GRPOTrainer` and `DPOTrainer`. *(Status: Closed)*

## 4. Key PR Progress
* **GOLD & Distillation Upgrades:**
  * [#6126](https://github.com/huggingface/trl/pull/6126): Introduces X-Token cross-tokenizer knowledge distillation to `GOLDTrainer`.
  * [#6387](https://github.com/huggingface/trl/pull/6387): Replaces HTTP-based syncing with vLLM's native, packed NCCL weight transfer engine for massive speedups.
  * [#6357](https://github.com/huggingface/trl/pull/6357) & [#6359](https://github.com/huggingface/trl/pull/6359): Fix EOS masking when pad/eos tokens match, and fix prompt truncation dropping critical prompt tails.
* **AsyncGRPO Enhancements:**
  * [#6385](https://github.com/huggingface/trl/pull/6385): Fixes fork-independent epoch counting that previously caused training to stop prematurely at `~E/F` epochs.
  * [#5894](https://github.com/huggingface/trl/pull/5894): Plumbs `top_p`, `top_k`, and `min_p` sampling parameters into the vLLM rollout workers.
* **Agentic RL Bug Fixes:**
  * [#6364](https://github.com/huggingface/trl/pull/6364) & [#6366](https://github.com/huggingface/trl/pull/6366): Stop `GRPOTrainer` and `DPPOTrainer` from dangerously mutating input prompt messages in place during environment interactions.
  * [#6382](https://github.com/huggingface/trl/pull/6382): Fixes missing `environment.reset()` injection in `GRPOWithReplayBufferTrainer`.
* **Compute Efficiency & Usability:**
  * [#6321](https://github.com/huggingface/trl/pull/6321): Drops DPO/KTO examples where truncation wipes out the completion (mask becomes all zeros).
  * [#6264](https://github.com/huggingface/trl/pull/6264): Increases default `max_completion_length` from 256 to 512 to prevent silent reasoning truncation.
  * [#6220](https://github.com/huggingface/trl/pull/6220): Adds explicit warnings when all completions in a step are clipped.

## 5. Why This Project Matters in Today's RL Landscape
TRL remains the undisputed backbone of the open-source alignment and post-training ecosystem. Today's commit log perfectly mirrors the current frontier of AI research: **Agentic RL** and **Reasoning distillation**. 

The rapid iteration on environment-loop integrations (preventing prompt mutation, fixing replay resets) shows TRL is positioning itself as the default trainer for tool-using LLM agents. Meanwhile, the heavy optimization of the `GOLDTrainer`—specifically by utilizing vLLM's native weight transfer engine—highlights the industry's desperate need to compress massive teacher models (like Qwen3-4B) into efficient student models (like LFM2.5 and Gemma 4) without losing reasoning capabilities. By solving compute bottlenecks (dropping zero-signal batches, fixing async rollout scaling), TRL is making cutting-edge RL mathematically and computationally viable for the broader open-source community.

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

Here is the daily reinforcement learning open-source ecosystem digest for **verl** (volcengine/verl) on **2026-07-15**.

### 1. Today's Highlights
*   **Async RL & Resource Scaling:** Major engineering momentum is focused on Fully Async RL. A significant new PR introduces dynamic resource scheduling to eliminate GPU idle time between trainer and rollout nodes.
*   **Hardware Expansion:** Deep collaboration is evident across hardware stacks, with critical fixes for AMD (MI250X) multi-node deployment and a surge in Ascend (NPU) CI and documentation updates.
*   **Next-Gen Model Support:** The community is actively merging support for cutting-edge architectures, including DeepSeek V4 GRPO, Qwen3.5 linear attention, and multi-modal vision token handling.

### 2. Releases
*   **No new releases** in the last 24 hours. The project is currently on `0.8.0.dev0` based on active issue reports. 

### 3. Important Issues
*   **Multi-Node Rollout Bottleneck on AMD** ([Issue #6856](https://github.com/verl-project/verl/issues/6856)): A critical bug prevents vLLM rollout (`DP>1`) from functioning when a `RolloutReplica` spans multiple nodes (tested on LUMI-G AMD MI250X). This highlights the ongoing distributed scaling pains in heterogeneous clusters.
*   **Hardware-Specific Throughput Degradation** ([Issue #7029](https://github.com/verl-project/verl/issues/7029) - CLOSED): Reported severe degradation in rollout decode throughput during pre-rollout weight syncs (`update_weights`) on H100/H800s compared to H20-3e. Cross-hardware performance profiling like this is actively shaping backend weight synchronization.
*   **verl 26Q3 Roadmap** ([Issue #6985](https://github.com/verl-project/verl/issues/6985)): The team has outlined Q3 2026 goals, notably including the dropping of legacy `mbridge` support in favor of `mlite` for Megatron, and low-precision MXFP8/NVFP4 training support.
*   **Ascend Ecosystem Tasks** ([Issue #6439](https://github.com/verl-project/verl/issues/6439)): Ongoing tracking of community tasks for native Ascend NPU compatibility, providing open-source compute hours for contributors.

### 4. Key PR Progress
**Async RL & Orchestration**
*   [PR #6556](https://github.com/verl-project/verl/pull/6556): Introduces hybrid inference resource **dynamic scaling** for fully-async PPO, fixing the classic RL bottleneck where training GPUs wait idly during rollout generation.
*   [PR #7037](https://github.com/verl-project/verl/pull/7037) (CLOSED): Implements an asynchronous streaming dataloader and a stale prompt-drop/refill strategy for the v1 async trainer, alongside allowing arbitrary prompt scaling beyond strict batch sizes.
*   [PR #7010](https://github.com/verl-project/verl/pull/7010): Fixes a state-lock contention in `FullyAsyncRollouter` that was serializing training behind rollout completion.

**Model Engines & Precision**
*   [PR #6473](https://github.com/verl-project/verl/pull/6473) (CLOSED): Adds **DeepSeek V4 Flash GRPO** support using Megatron-Bridge, including complex FP8/MXFP4 weight transfers and checkpoint exports. 
*   [PR #5594](https://github.com/verl-project/verl/pull/5594): Integrates Context Parallelism (CP) alongside EP and TP for the Torchtitan Engine.
*   [PR #5599](https://github.com/verl-project/verl/pull/5599): Brings Qwen3.5 LoRA and Multi-Token Prediction (MTP) support to the Megatron backend.

**Bug Fixes & Stability**
*   [PR #7038](https://github.com/verl-project/verl/pull/7038) (CLOSED): Fixes multimodal RL rollouts by explicitly stopping the policy from sampling vision placeholder tokens (`<|image_pad|>`).
*   [PR #7014](https://github.com/verl-project/verl/pull/7014): Resolves a stale-weight synchronization bug in FSDP LoRA rollouts.
*   [PR #7041](https://github.com/verl-project/verl/pull/7041): Fixes an Out-Of-Memory (OOM) error in Qwen2.5-0.5b fully async weight sync buffer allocation.

### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/RLAIF landscape, the bottleneck has shifted from base model execution to **rollout orchestration and memory management**. verl’s latest development cycle proves it is solving the exact problems blocking enterprise-scale agentic RL. 

By prioritizing **Fully Async PPO** (addressing trainer/rollout GPU idleness with dynamic scheduling) and pushing the boundaries of **low-precision distributed training** (FP8/MXFP4 weight syncing across Megatron and vLLM), verl is functioning as the critical bridge between research frameworks and production infrastructure. Furthermore, its agnostic approach—simultaneously patching CI and data loaders for AMD, NVIDIA, and Ascend NPU architectures—cements it as the most hardware-inclusive post-training platform in the open-source ecosystem.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# 🤖 Open Instruct RL Daily Digest 
**Date:** 2026-07-15

### 1. Today's Highlights
Activity in the `allenai/open-instruct` repository over the last 24 hours has been minimal, reflecting a stabilization period following recent development cycles. No new code was merged, and no new releases were cut. The sole focus of the day was community engagement, specifically addressing inquiries regarding the reproduction of AI2's latest SFT models. 

### 2. Releases
* **No new releases** in the last 24 hours.
* **Latest stable version:** N/A (No recent updates to report).

### 3. Important Issues
* **[#1756] [OPEN] How to reproduce the OLMo 3 SFT stage and obtain OLMo-3-7B-Instruct?**
  * **Author:** JaydencoolCC | **Updated:** 2026-07-14
  * **Summary:** A community member has initiated a thread seeking exact reproducibility steps for the OLMo-3-7B-Instruct model. The user is specifically asking for clarification on base checkpoint (`BASE_CKPT`) configurations when utilizing the repository's SFT scripts. 
  * **Link:** [allenai/open-instruct#1756](https://github.com/allenai/open-instruct/issues/1756)

### 4. Key PR Progress
* **No active PR updates** in the last 24 hours. Development pull requests remain quiet, with no merges, closures, or new submissions.

### 5. Why This Project Matters in Today's RL Landscape
While today's specific update focuses on Supervised Fine-Tuning (SFT), the `open-instruct` ecosystem remains a critical open-source bridge in the modern Reinforcement Learning from Human Feedback (RLHF) pipeline. As the broader AI industry increasingly relies on complex post-training recipes (RLHF, Direct Preference Optimization, and Proximal Policy Optimization), reproducible pipelines are essential. 

`open-instruct` provides the exact scripts, distributed training configurations, and environment setups required to transition a base foundation model into an RL-ready state. In an era where proprietary post-training methodologies dominate, projects like Open Instruct provide the transparent, evidence-based architectures necessary for open-source researchers to audit, replicate, and iterate on RL paradigms using state-of-the-art architectures like OLMo 3.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 🧠 RL Ecosystem Daily Digest: CleanRL
**Date:** 2026-07-15 | **Repository:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

### 1. Today's Highlights
CleanRL experienced a quiet day in terms of community submissions (0 new issues, 0 new releases) but saw a crucial under-the-hood performance optimization advance in its pull request backlog. 

### 2. Releases
*   **None.** No new stable releases or version bumps were published in the last 24 hours.

### 3. Important Issues
*   **None.** The issue tracker currently shows 0 items updated in the last 24 hours, indicating stable usage or a temporary lull in bug reporting.

### 4. Key PR Progress
The only notable repository activity involves a highly technical performance enhancement for environment-stepping pipelines:

*   **[PR #552](https://github.com/vwxyzjn/cleanrl/pull/552) [OPEN]: perf: avoid tensor memory copy in ppo_atari_envpool, pqn_atari_envpool, ppo_procgen**
    *   **Author:** srygaard
    *   **Activity:** Updated yesterday (2026-07-14) after originally being opened in May.
    *   **Technical Focus:** The PR addresses an implicit memory bottleneck. It removes unnecessary memory copies generated during environment stepping (`envs.step()`). Specifically, it targets the overhead caused by `torch.tensor()` which inherently duplicates data upon object creation.
    *   **Impact:** Once merged, this will yield significant throughput and VRAM efficiency improvements for Environment Pool (`envpool`) and `procgen` implementations, which are critical for high-throughput Atari benchmarking.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains an indispensable piece of infrastructure in the modern RL ecosystem because of its strict adherence to single-file implementations. While monolithic libraries like RLlib or Stable-Baselines3 offer broad modularity, CleanRL provides unparalleled readability and exact reproducibility for standard algorithms (like PPO, PQN). 

PRs like #552 highlight why researchers and engineers continue to rely on CleanRL: the codebase is transparent enough to easily profile, identify low-level PyTorch bottlenecks (such as unnecessary tensor memory allocation), and optimize them directly. As RL hardware scaling increasingly leans on vectorized environments (e.g., Envpool), low-latency data pipelines like those improved in this PR are vital for pushing the boundaries of sample-efficient training.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# 📖 RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-15 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

## 1. Today's Highlights
- **Graph Space Evolution:** The long-standing effort to generalize `Graph` spaces (to support heterogeneous nodes, edges, and complex types like `Dict`) has successfully culminated, closing out issues #706 and #1501.
- **Bug Squashing Marathon:** A massive sweep of vector environment and space containment bugs were resolved today, heavily improving determinism and autoreset logic reliability. 
- **CI Hardening:** Automated code scanning alerts triggered rapid fixes to GitHub workflow permissions, tightening the project's security posture.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Important Issues
- **Render Window Freezes on MacOS:** [#543](https://github.com/Farama-Foundation/Gymnasium/issues/543) remains open. Users report that the cursor pinwheels/freezes when closing the `pygame` rendering window for `LunarLander` in Jupyter notebooks.
- **Graph Spaces Generalization (Closed):** [#706](https://github.com/Farama-Foundation/Gymnasium/issues/706) and [#1501](https://github.com/Farama-Foundation/Gymnasium/issues/1501) were closed. This paves the way for supporting multiple node/edge types and dictionary-based features in graph environments.
- **MuJoCo Camera Config (Closed):** [#1141](https://github.com/Farama-Foundation/Gymnasium/issues/1141) was closed. The bug causing `default_camera_config` adjustments (like `distance` and `elevation`) to be ignored during rendering has been addressed.

## 4. Key PR Progress
**Graph & Environment Upgrades**
- **[#1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514)**: Updated Graph spaces to accept arbitrary node and edge spaces (including `Dict` and `Tuple`).
- **[#1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602)**: Ongoing work to port `LunarLander` from Box2D to Pymunk. 

**API & Typing Enhancements**
- **[#1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577)**: Converted `VectorEnv` and subclasses into generic types with optional parameters for backward compatibility.
- **[#1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620)**: Added strict type hints for core, space, and box modules (passes `mypy --strict`).
- **[#1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617)**: Removed `torch` from the `[all]` extra dependency to prevent massive unnecessary `nvidia-cuda-*` downloads on CPU-only machines. 

**Critical Bug Fixes**
- **Autoreset & Vector Env Fixes:**
  - **[#1624](https://github.com/Farama-Foundation/Gymnasium/pull/1624)**: Fixed `RecordEpisodeStatistics` returning wrong stats when using `SAME_STEP` autoreset mode.
  - **[#1623](https://github.com/Farama-Foundation/Gymnasium/pull/1623)**: Patched a leak where vector envs mutated the sub-environment's class-level `metadata` dict.
- **Determinism & Spaces Fixes:**
  - **[#1626](https://github.com/Farama-Foundation/Gymnasium/pull/1626)**: Fixed non-deterministic `Text` space character ordering caused by Python hash randomization (`PYTHONHASHSEED`).
  - **[#1622](https://github.com/Farama-Foundation/Gymnasium/pull/1622)**: Resolved an integer overflow in `MultiDiscrete.contains` for negative bounds and small dtypes.
  - **[#1632](https://github.com/Farama-Foundation/Gymnasium/pull/1632)**: Fixed `create_shared_memory` for dtypes lacking an array module typecode (e.g., `float16`).
- **Rendering Fixes:**
  - **[#1618](https://github.com/Farama-Foundation/Gymnasium/pull/1618)**: Fixed `MujocoRenderer` overriding custom `default_camera_config`s.
  - **[#1633](https://github.com/Farama-Foundation/Gymnasium/pull/1633)**: Patched aspect-ratio scaling drift, type violations, and KEYUP crash risks in the interactive Pygame utility.

## 5. Why This Project Matters in Today's RL Landscape
Today's development activity highlights exactly why Gymnasium remains the undisputed API standard in modern Reinforcement Learning. The project is currently undergoing rigorous structural hardening—shifting toward strict typing ([#1620](https://github.com/Farama-Foundation/Gymnasium/pull/1620)), generic vectorization ([#1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577)), and next-gen structural spaces ([#1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514)). 

In the 2026 RL landscape—where Graph Neural Networks (GNNs) and multi-agent systems are ubiquitous—the ability to natively support heterogeneous graphs and nested dictionaries without breaking core API contracts is vital. Furthermore, by aggressively patching deep-rooted determinism bugs (like hash-randomization in Text spaces and subtle integer overflows in Discrete bounds), Gymnasium ensures that empirical RL research remains exactly reproducible, cementing its role as the foundational bedrock for both researchers and production-level RL pipelines.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 🧠 RL Daily Digest: PettingZoo
**Date:** 2026-07-15

### 1. Today's Highlights
PettingZoo is seeing a highly active maintenance cycle, with **9 PRs updated** and no new releases. The core themes for the day are **API robustness** (fixing `AgentSelector` memory reference bugs and false-positive test warnings), **physics/rendering bug fixes** for classic environments, and **environment deprecation** (the formal removal of Gin Rummy) ahead of the next major release.

### 2. Releases
* **None** (0 new releases in the last 24h).

### 3. Important Issues
* **[#1383] [CLOSED] Removing Unused Environments** | *Author: jkterry1* | [Link](https://github.com/Farama-Foundation/PettingZoo/issues/1383)
  * **Summary:** A strategic cleanup initiative before the next package cut. Based on ecosystem usage metrics, it was proposed to remove virtually unused environments. The outcome: TicTacToe will be kept, but Gin Rummy is slated for complete removal (docs, tests, and registry entries). 

### 4. Key PR Progress
* **API & Core Logic Fixes**
  * **[#1400](https://github.com/Farama-Foundation/PettingZoo/pull/1400):** Fixes a `AgentSelector.reinit()` bug where the caller's list was stored by reference rather than copied, leading to unintended state mutations. 
  * **[#1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391):** Cleans up spurious `api_test` warnings that fired false positives for environments utilizing `Dict`, `Tuple`, or `MultiDiscrete` observation spaces instead of standard `Box`/`Discrete`.
* **Environment Maintenance & Enhancements**
  * **[#1397](https://github.com/Farama-Foundation/PettingZoo/pull/1397) [CLOSED]:** Executes the removal of the `gin_rummy_v5` environment as resolved in Issue #1383.
  * **[#1398](https://github.com/Farama-Foundation/PettingZoo/pull/1398):** Overhauls `cooperative_pong` ball bounce physics (v7) by calculating remaining travel distance after collision, rather than snapping to surfaces and losing kinetic state. 
  * **[#1399](https://github.com/Farama-Foundation/PettingZoo/pull/1399):** Restores the classic visual style of the `pursuit` environment by rendering agents as squares rather than circles.
* **Tooling & Benchmarks**
  * **[#1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306):** Ports the widely used Gymnasium `RecordVideo` wrapper to multi-agent AEC and parallel environments, removing the need for external library dependencies (like SB3) for basic rendering.
  * **[#1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395) & [#1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384):** Introduces predictive and evolved benchmark policies for the Knights-Archers-Zombies (KAZ) environment, complete with reproducible evaluation scripts and parameter sweeps.
* **Security**
  * **[#1401](https://github.com/Farama-Foundation/PettingZoo/pull/1401) [CLOSED]:** Adds explicit minimum-required `permissions` blocks to the `build-publish.yml` GitHub workflow to resolve code scanning security alerts.

### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard API for multi-agent reinforcement learning (MARL) in Python, PettingZoo acts as the crucial multi-agent counterpart to Gymnasium. The updates today highlight exactly why the project is essential: 
1. **Rigorous API Standardization:** Fixing `AgentSelector` state bugs and expanding `api_test` compatibility to complex observation spaces (like `Dict` and `Tuple`) ensures that researchers can build and plug in complex MARL environments without hitting hidden Python reference bugs.
2. **Lowering the Barrier to Entry:** Porting the `RecordVideo` wrapper directly into PettingZoo streamlines the evaluation pipeline, making it significantly easier for researchers to visualize and share multi-agent behavior without writing custom rendering wrappers. 
3. **Quality over Quantity:** Actively pruning dead environments (like Gin Rummy) while polishing core physics engines (like Cooperative Pong) ensures the library remains lightweight, maintainable, and reliable for production-level MARL research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>