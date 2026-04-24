# RL Open Source Daily Digest 2026-04-25

> Generated: 2026-04-24 22:11 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem on 2026-04-25 exhibits a clear bifurcation. The majority of activity is concentrated in a highly active tier of LLM post-training frameworks (`verl`, `AReaL`, `TRL`, `slime`, `Open Instruct`, `ROCK`), which are aggressively tackling systems engineering bottlenecks for massive, multi-modal models. Meanwhile, traditional RL and foundational libraries (`Stable Baselines3`, `PettingZoo`, `torchtune`, etc.) are in maintenance or quiet phases. The dominant paradigm has decisively shifted from algorithmic theory to distributed systems orchestration, hardware heterogeneity, and agentic infrastructure.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 5 | 6 | 0 | Expanding multi-modal, asynchronous, and heterogeneous XPU/NPU support. |
| **AReaL** | 4 | 8+ | 0 | High-velocity infra hardening; distributed weight syncing and Ascend NPU fixes. |
| **TRL** | 3 | 7 | 0 | Major resource optimization (50% VRAM reduction) and CI stabilization. |
| **slime** | 2 | 8 | 0 | Stabilizing multi-turn VLM rollouts and adding Gemma 4 MoE support. |
| **Open Instruct** | 0 | 7 | 0 | 10x SFT tokenization speedup and novel algorithmic research (Delightful PG). |
| **ROCK** | 2 | 5 | 0 (v1.7.0 finalized) | Production MLOps focus: observability, security, and sandbox parity. |
| **PettingZoo** | 0 | 1 | 0 (Prepping v1.26.0) | Dependency modernization (Python 3.14, `pygame-ce`). |
| **Stable Baselines3**| 1 (Closed) | 0 | 0 | Declining standalone hardware extensions in favor of native PyTorch compilers. |
| **torchtune** | 1 (NewProposal)| 0 | 0 | Proposing 2nd-order optimizers for memory-bound QLoRA. |

*Note: `CleanRL`, `Gymnasium`, `OpenRLHF`, `rl_games`, `ROLL`, and `Tianshou` recorded zero activity in the last 24 hours.*

## Shared Research & Engineering Directions

**Research Signals**
*   **Algorithmic Diversification beyond PPO:** Projects are integrating nuanced alignment methods. `AReaL` added DPO, `Open Instruct` introduced Delightful Policy Gradient (action surprisal gating), and `verl` enabled Generative Reward Models and Online Policy Distillation.
*   **Expanding Multi-modal & Agentic RL:** The frontier is moving past single-turn text. `verl` laid the foundation for audio models (Qwen3-Omni), while `slime` and `AReaL` are actively solving complex multi-turn, tool-calling, and sandboxed environment rollouts for autonomous agents.
*   **Scaling Mixture of Experts (MoE):** Frameworks are rapidly adapting to massive sparse architectures (e.g., Qwen 397B, Gemma 4), requiring complex combinations of Expert Parallelism (EP), Context Parallelism (CP), and Pipeline Parallelism (PP).

**Engineering & Infrastructure Signals**
*   **Heterogeneous Hardware Acceleration:** Escaping NVIDIA's monopoly is a top priority. `verl` and `AReaL` dedicated significant engineering resources to integrating Intel XPU and Ascend NPU (HCCL) backends.
*   **Asynchronous & Elastic Resource Orchestration:** RL workloads feature severe compute imbalances between generation and training. `AReaL` implemented dynamic rollout scaling, while `TRL` and `verl` refined fully asynchronous training loops and HTTP-based weight syncing.
*   **Memory & I/O Optimization:** As models scale, VRAM and disk I/O become critical chokepoints. `TRL` achieved a 50% VRAM reduction via chunked cross-entropy, `Open Instruct` achieved a 10x tokenization speedup via disk streaming, and `torchtune` explored memory-efficient 2nd-order optimizers.

## Differentiation Analysis

*   **`verl` vs. `AReaL` (The Distributed Runtime Battle):** Both target trillion-parameter, heterogeneous clusters. `verl` differentiates via its "universal runtime" approach—decoupling agent frameworks to integrate with third-party runtimes like NVIDIA NeMo-Gym. `AReaL` is currently more focused on the internal mechanics of elastic resource allocation and specific inference accelerations (e.g., Sglang Eagle speculative decoding).
*   **`TRL` vs. `torchtune` (Democratized Fine-Tuning):** Both focus on accessible training. `TRL` remains the standard for applied post-training (RLHF/DPO), pushing hardware efficiency (VRAM savings) to democratize alignment. `torchtune` acts as a pure PyTorch modular recipe book, focusing on low-level parameter-efficient (QLoRA) optimizations.
*   **`slime` vs. `Open Instruct` (Research Velocity vs. Pipeline Velocity):** `slime` is heavily differentiated by its focus on cutting-edge Megatron-Core stability and complex tool-calling state management for large MoEs. Conversely, `Open Instruct` acts as an algorithmic testbed (implementing novel math/reasoning gradients) while aggressively optimizing fundamental data pipelines (streaming tokenization).
*   **`ROCK` (The MLOps Layer):** Unlike the training frameworks, `ROCK` differentiates by focusing entirely on the production deployment layer—sandbox standardization, proxy security, and database observability.

## Community Momentum & Maturity
*   **High-Velocity Maturation:** `TRL`, `AReaL`, and `verl` show high issue/PR turnover, driven by maintainers pushing massive infrastructure refactors. The nature of their issues (e.g., `transformers 5.0` compatibility in `verl`, CI pipeline fixes in `TRL`) indicates fast-moving, sometimes breaking, development cycles.
*   **Enterprise vs. Research Backing:** Projects like `ROCK` (Alibaba) and `AReaL` (inclusionAI) show enterprise-grade maturity, focusing on production observability and Docker environments. `Open Instruct` (AI2) and `slime` (THUDM) maintain strong academic/research flavors, rapidly pushing experimental architectures (Gemma 4, Delightful PG) into their codebases.
*   **Stable Foundations:** Foundational tools like `PettingZoo` and `Stable Baselines3` show extreme maturity (near-zero activity). Their communities are currently focused on dependency hygiene (`pygame-ce` migration, dropping IPEX for native PyTorch support) rather than feature development.

## Trend Signals
1.  **The Rise of "Systems RL":** Algorithmic research is taking a backseat to distributed systems engineering. The ability to train LLMs with RL is now bottlenecked by I/O, network syncing (HTTP vs. NCCL), and cluster orchestration, not loss function design.
2.  **Hardware Fragmentation is Real:** The dependency on alternative hardware stacks (Intel XPU, Ascend NPU) is a defining trend of 2026, driven by GPU shortages and cost optimization. Frameworks that abstract hardware cleanly will win enterprise adoption.
3.  **Agentic RL is the Next Frontier:** The presence of sandboxed environments, multi-turn rollout fixes, and decoupled agent loops across multiple repositories signals that the industry is pivoting from static RLHF alignment toward training persistent, tool-using AI agents.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL open-source ecosystem daily digest for April 25, 2026, focusing on the Alibaba ROCK repository.

### 📊 ROCK (Reinforcement Learning Open Source) Daily Digest: 2026-04-25

**1. Today's Highlights**
Activity on the ROCK repository over the last 24 hours has been entirely focused on stabilization, proxy security, and documentation. The engineering team closed out 5 Pull Requests and 2 Issues, officially finalizing the **v1.7.0** iteration. Key themes include backend observability (MetaStore/database metrics), security hardening (WebSocket header handling), and sandbox environment parity (timezone support).

**2. Releases**
*   **v1.7.0 Finalization:** While no *new* release tag was dropped today, PRs [#897](https://github.com/alibaba/ROCK/pull/897) and [#893](https://github.com/alibaba/ROCK/pull/893) officially merged the v1.7.0 release notes and version updates, indicating an imminent tag push.

**3. Important Issues**
*   **[Feature] Support meta store and database operation metrics ([#886](https://github.com/alibaba/ROCK/issues/886)):** A critical enhancement for production RL environments. Tracking database operations and meta-store metrics allows engineers to identify bottlenecks in data pipelines and state management during large-scale distributed training runs. 
*   **Docs: add v1.7.0 release notes ([#896](https://github.com/alibaba/ROCK/issues/886)):** Successfully closed after adding comprehensive EN/ZH documentation for the v1.7.0 cycle.

**4. Key PR Progress**
*   **Observability & Metrics:** [PR #887](https://github.com/alibaba/ROCK/pull/887) implemented the MetaStore and database metrics requested in Issue #886.
*   **Security & Proxy Fixes:** [PR #894](https://github.com/alibaba/ROCK/pull/894) resolved a significant bug where oversized SSO tokens in upstream `Cookie` headers caused 502 errors during WebSocket forwarding. The proxy logic was updated to block these headers for downstream services.
*   **Sandbox Environments:** [PR #885](https://github.com/alibaba/ROCK/pull/885) introduced support for mounting `localtime` into sandboxes. This ensures consistent timezone awareness across host machines and isolated RL environments, which is vital for precise temporal reward engineering and logging.
*   **Documentation & Versioning:** [PR #897](https://github.com/alibaba/ROCK/pull/897) merged the official bilingual (EN/ZH) documentation for SDK references, CLI usage, and datasets, paired with the version bump in [PR #893](https://github.com/alibaba/ROCK/pull/893).

**5. Why This Project Matters in Today's RL Landscape**
Modern Reinforcement Learning is no longer just about algorithmic research (e.g., PPO or SAC implementations); the bottleneck has shifted to infrastructure. ROCK provides the "MLOps" layer necessary for RL at scale. Today's updates perfectly illustrate this: 
*   **Observability:** Large-scale RL requires massive data throughput. Adding DB and MetaStore metrics gives practitioners the visibility needed to prevent data starvation during training.
*   **Secure Scalability:** Fixing the WebSocket proxy token issue highlights the complexities of deploying RL agents behind enterprise gateways (often used in web-based agent environments). 
*   **Deterministic Environments:** Standardizing sandbox timezones eliminates a notorious class of silent, environment-host mismatch bugs that can skew episode data and ruin training runs. 

By actively maintaining its infrastructure, SDK, and sandboxing tools, ROCK continues to bridge the gap between experimental RL algorithms and reliable, production-grade AI deployment.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily reinforcement learning ecosystem digest for **THUDM/slime** on **2026-04-25**.

### 1. Today's Highlights
Activity on **2026-04-24** was heavily focused on hardening **slime** for complex, multi-modal, and multi-turn RL workloads. A significant milestone was the introduction of native support for **Gemma 4** (both 31B dense and 26B MoE variants). Concurrently, maintainers submitted a series of critical patches to resolve edge cases in dynamic batching, asyncio loop desyncs, and Megatron-Core integration idempotency. 

### 2. Releases
* **No new releases** were published today.

### 3. Important Issues
Developers are actively pushing the boundaries of multi-modal and diverse model integrations in slime:
* **VLM Multi-turn Rollout Bug ([#1847](https://github.com/THUDM/slime/issues/1847)):** A critical bug was reported where models go "blind" to images during multi-turn conversations, causing the model to hallucinate blank images. This highlights the engineering challenges of maintaining state in multi-turn RL rollouts.
* **Gemma 4 Support Inquiry ([#1811](https://github.com/THUDM/slime/issues/1811)):** A user-initiated discussion regarding integrating Gemma 4 via a black-box HuggingFace wrapping approach. This issue directly catalyzed today's major Gemma 4 feature PR.

### 4. Key PR Progress
The development pipeline saw 8 updated PRs, with prolific contributor `leofan-lab` driving major infrastructure and feature updates:
* **New Model Architecture:** [PR #1855](https://github.com/THUDM/slime/pull/1855) introduces native support for Gemma 4 (26B-A4B MoE and 31B dense), including HF↔Megatron weight conversion, retool integration, and passing parity tests across TP/PP/DP/CP/EP.
* **Multi-turn & Dynamic Batching Fixes:** 
  * [PR #1861](https://github.com/THUDM/slime/pull/1861) fixes invariant length syncing in multi-turn tool-calling rollouts, preventing crashes in `slice_log_prob`.
  * [PR #1860](https://github.com/THUDM/slime/pull/1860) guards against empty micro-batches in DP-imbalance scenarios, a common failure point when using `--use-dynamic-batch-size` with variable-length multi-turn outputs.
* **Megatron-Core Stability:** [PR #1857](https://github.com/THUDM/slime/pull/1857) makes `no_sync_func` installation idempotent across repeated `train()` calls, patching an upstream Megatron assertion designed for one-shot trainers.
* **Async Infrastructure:** [PR #1858](https://github.com/THUDM/slime/pull/1858) resolves a `RuntimeError` with Ray actors by rebinding asyncio Semaphores and HTTP clients on event-loop changes.
* **SGLang Preparation:** [PR #1859](https://github.com/THUDM/slime/pull/1859) cleans up SGLang patches in anticipation of a future rollout engine upgrade.
* **Debuggability:** [PR #1862](https://github.com/THUDM/slime/pull/1862) improves error messaging in `slice_log_prob_with_cp`.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and tool-use agents scale, frameworks must move beyond simple single-turn text generation. **slime** is actively solving the "next tier" of RL infrastructure problems: 
1. **Scaling Mixture of Experts (MoE):** Supporting Gemma 4 and its Expert Parallelism (EP) requirements alongside Megatron-Core demonstrates a commitment to scaling RL training to highly efficient, massive sparse models.
2. **Robust Tool-Calling Agents:** Training agents to use tools requires navigating complex, variable-length trajectories. Today's focus on dynamic batching, SGLang patching, and strict log-probability invariant syncing proves slime is maturing into a production-grade framework for agentic RL.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL on 2026-04-25:

# AReaL Daily Digest: 2026-04-25

## 1. Today's Highlights
AReaL experienced high engineering velocity today with 27 updated Pull Requests and 5 active Issues. The focus is heavily on infrastructure reliability and expanding alignment capabilities. Key themes include robust distributed weight syncing via HTTP gateways (Awex), expanding post-training algorithms (DPO), and hardening hardware support for Ascend NPUs. 

## 2. Releases
*   **No new releases** were cut today. The ecosystem remains on the latest stable baseline.

## 3. Important Issues
*   **Hardware & Compatibility Bottlenecks:** A recurring pain point is dependency management for new models. Issue [#1155](https://github.com/inclusionAI/AReaL/issues/1155) reports versioning conflicts between `transformers` and `sglang` (v0.5.9) when attempting to run Qwen3.5.
*   **DPO Demand:** Issue [#1137](https://github.com/inclusionAI/AReaL/issues/1137) (now closed) confirms strong community demand for Direct Preference Optimization (DPO) alongside standard RLHF, highlighting a shift toward diverse alignment strategies.
*   **Architectural Refactors:** Issue [#1243](https://github.com/inclusionAI/AReaL/issues/1243) proposes integrating Ray Core RDT for distributed weight synchronization, aiming to replace or augment current NCCL/XCCL broadcast and disk-based methods. 
*   **Developer Experience (DevX):** Issue [#1247](https://github.com/inclusionAI/AReaL/issues/1247) highlights a Docker mounting bug where external code overrides the virtual environment at `/AReaL/.venv`, prompting a quick infrastructure fix.

## 4. Key PR Progress
*   **Alignment & Algorithms:** PR [#1190](https://github.com/inclusionAI/AReaL/issues/1190) introduces **DPO training** as a first-class alignment method alongside Reward Model (RM) training on `Anthropic/hh-rlhf`. 
*   **Distributed Weight Syncing:** Building on previous work, PR [#1246](https://github.com/inclusionAI/AReaL/issues/1246) (closed/merged) and PR [#1252](https://github.com/inclusionAI/AReaL/issues/1252) implement an HTTP-gateway orchestrated lifecycle for Megatron Engine updates using Awex, specifically tackling Pipeline Parallelism (PP), Context Parallelism (CP), and Expert Parallelism (EP).
*   **Ascend NPU Support:** PR [#1254](https://github.com/inclusionAI/AReaL/issues/1254) fixes a critical HCCL crash during `ref.compute_logp()` on Ascend NPUs by eagerly initializing HCCL subgroups.
*   **Inference & Rollouts:** 
    *   PR [#1176](https://github.com/inclusionAI/AReaL/issues/1176): [WIP] Adding Sglang Eagle speculative decoding support to speed up generation.
    *   PR [#592](https://github.com/inclusionAI/AReaL/issues/592): [WIP] Implementing dynamic rollout scale-up to allow adding rollout engines to running training jobs on the fly, moving away from static resource allocation.
    *   PR [#1256](https://github.com/inclusionAI/AReaL/issues/1256): [WIP] Adding sandbox support for secure environment interactions.
*   **SFT & Metrics Fix:** PR [#1249](https://github.com/inclusionAI/AReaL/issues/1249) resolves a metric undercounting bug in SFT token-count stats (`sft/n_tokens`) caused by Context Parallelism (CP) local loss.

## 5. Why This Project Matters in Today's RL Landscape
In the current RLHF landscape, the bottleneck has shifted from algorithmic theory to systems engineering—specifically, orchestrating massive distributed clusters for generation (rollout) and training. AReaL’s activity today demonstrates exactly where the frontier is moving:
1.  **Heterogeneous Hardware:** The focus on HCCL/Awex fixes and Ascend NPUs shows the ecosystem's push beyond NVIDIA GPUs to ensure scalable, multi-vendor RL infrastructure.
2.  **Dynamic Resource Allocation:** The rollout scale-up (PR [#592](https://github.com/inclusionAI/AReaL/issues/592)) and least-request routing (PR [#955](https://github.com/inclusionAI/AReaL/issues/955)) are critical. In post-training, generation workloads have vastly different compute profiles than training workloads; elastic scaling is mandatory for economic viability at LLM scales.
3.  **Beyond Standard RLHF:** The integration of DPO, sandbox environments for agentic RL, and support for VLMs/omni-models (PR [#931](https://github.com/inclusionAI/AReaL/issues/931), PR [#957](https://github.com/inclusionAI/AReaL/issues/957)) reflect the industry's rapid transition toward multi-modal, multi-turn agentic alignment.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL 
**Date:** 2026-04-25 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
TRL experienced a high volume of maintenance and architectural refactoring today, with 15 PRs updated. The core focus was on **infrastructure reliability** (fixing broken CI pipelines) and **resource optimization** (significant VRAM reductions for SFT). Activity was largely driven by maintainers `qgallouedec` and `albertvillanova`, signaling an active stabilization and code-quality sprint. 

## 2. Releases
* **No new releases** were cut in the last 24 hours.

## 3. Important Issues
* **CI Pipeline Failures ([#5633](https://github.com/huggingface/trl/issues/5633), [#5636](https://github.com/huggingface/trl/issues/5636)):** Maintainer `albertvillanova` flagged two broken CI workflows. The code quality check failed due to a missing `ruff` dependency, and the docs deployment failed because of an unclosed Liquid `if` tag introduced in PR #5581.
* **Training Instability with QLoRA/DPO ([#5608](https://github.com/huggingface/trl/issues/5608)):** User `Xxxxsir` reported that training corrupts the model when using the `DPOTrainer` with QLoRA on Llama 3 8B if token embeddings are not padded to a multiple of 64. This is a notable edge-case bug for practitioners using quantized preference alignment.

## 4. Key PR Progress
* **Massive VRAM Reduction for SFT ([#5575](https://github.com/huggingface/trl/pull/5575)):** `qgallouedec` introduced a chunked cross-entropy loss for `SFTTrainer` that reduces peak VRAM usage by up to **50%** by optimizing the chunk size to 256. 
* **LoRA Support for AsyncGRPO ([#5610](https://github.com/huggingface/trl/pull/5610)):** `jonahsamost` opened a PR to enable LoRA fine-tuning for `AsyncGRPO`. Crucially, it implements HTTP reloading instead of NCCL syncing to bypass current vLLM internal naming constraints.
* **SFT Metric Fix ([#5620](https://github.com/huggingface/trl/pull/5620)):** Closed by `qgallouedec`, this PR fixes an entropy calculation bug where SFT uncertainty metrics were being averaged over the wrong tokens.
* **KTO-DPO Pipeline Alignment ([#5635](https://github.com/huggingface/trl/pull/5635), [#5632](https://github.com/huggingface/trl/pull/5632)):** `albertvillanova` submitted two PRs to standardize `KTOTrainer` with `DPOTrainer` by moving completion assembly to the data collator and removing explicit, redundant BOS/EOS token handling.
* **Architectural Refactoring ([#5637](https://github.com/huggingface/trl/pull/5637)):** The monolithic 437-line `generate_tiny_models.py` script is being split into per-model scripts, making the testing infrastructure more modular.
* **Expanded Attention Support ([#5316](https://github.com/huggingface/trl/pull/5316)):** `mariosasko` expanded packing compatibility in `SFTTrainer` to include `eager`, `sdpa`, `flex_attention`, and `flash_attention_4`.

## 5. Why This Project Matters in Today's RL Landscape
As post-training paradigms (like RLHF, DPO, and GRPO) become the primary differentiator in LLM quality, TRL remains the open-source standard for applying these techniques. Today's updates highlight the ecosystem's current maturation phase: moving beyond naive implementations to tackle **hardware efficiency** (chunked loss for 50% VRAM savings) and **inference-accelerator integration** (integrating LoRA with AsyncGRPO over HTTP). These under-the-hood optimizations are exactly what allow the open-source community to compete with proprietary pipelines on limited hardware budgets.

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

# RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-04-25

## 1. Today's Highlights
The `verl` ecosystem continues to see aggressive expansion into multi-modal and heterogeneous hardware support. The most prominent themes today are the introduction of **Intel XPU support**, new capabilities for **audio models (Qwen3-Omni)**, and significant strides in **fully asynchronous training** for massive MoE models. Under the hood, major refactoring is underway to streamline checkpointing and agent rollouts.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **Hardware Acceleration Demands (#6119 / #6128):** Following recent NPU discussions, the community is pushing for broader hardware support. Intel XPU integration is actively being addressed in PR [#6119](https://github.com/verl-project/verl/pull/6119).
*   **Scalability for 400B+ MoE Models (#6123, #6124):** Users are actively inquiring about GRPO training support for massive sparse models like Qwen3.5-397B-A17B, and questioning if FSDP can be combined with Expert Parallelism (EP), as current examples default to Megatron for these scales.
*   **Upcoming Qwen3.6 Support (#6130):** The community is already requesting official support plans for the anticipated Qwen3.6 model lineup.
*   **Critical Bug: Transformers 5.0 Incompatibility (#6080):** *Now closed.* A silent training failure was patched where `critic/rewards/mean` remained stuck at `0.0` when using `transformers>=5.0` with GRPO. 
*   **Dependency Upgrades (#5517):** With 14 thumbs-up on the Q2 roadmap (#5836), the push to upgrade `numpy>2.0` (currently pinned `<2.0` to resolve conflicts with modern `vllm`) remains a high-priority friction point for users.

## 4. Key PR Progress
*   **[Hardware] Intel XPU E2E Support ([#6119](https://github.com/verl-project/verl/pull/6119)):** Introduces end-to-end GRPO, PPO, and SFT training compatibility for Intel Arc Pro / Data Center GPU Max using FSDP + vLLM rollouts.
*   **[Model] Qwen3-Omni Audio Support ([#6118](https://github.com/verl-project/verl/pull/6118)):** Lays the foundation for RLHF/RL training on audio data with the new Qwen3-Omni thinker model.
*   **[Fully Async] GenRM & Policy Distillation ([#6044](https://github.com/verl-project/verl/pull/6044), [#6056](https://github.com/verl-project/verl/pull/6056)):** PR #6044 removes the hardcoded `use_rm = False` limitation, enabling GPU-based Generative/Discriminative Reward Models in async mode. PR #6056 brings Online Policy Distillation (OPD) to the fully async training loop.
*   **[Architecture] Decoupling Agent Frameworks ([#6129](https://github.com/verl-project/verl/pull/6129)):** A breaking refactor that moves `LLMServerManager` out of `AgentLoopManager` to allow seamless integration with third-party agent runtimes (like NVIDIA NeMo-Gym).
*   **[Megatron-FSDP] Backend Integration ([#5423](https://github.com/verl-project/verl/pull/5423)):** Continues development on integrating Megatron-FSDP as a standalone training backend for both SFT and RL workflows.
*   **[VLM] Qwen3-VL Async Fixes ([#6131](https://github.com/verl-project/verl/pull/6131)):** Solves a critical issue where `ppo-kl` metrics were scaling incorrectly for Qwen3-VL-30B-A3B during fully async GRPO training. 

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and post-training paradigms (like GRPO) become the defacto standard for maximizing LLM intelligence, the underlying infrastructure must support trillion-parameter MoEs, multi-modal data, and distributed compute. 

`verl` is establishing itself as a highly agnostic, hardware-agnostic orchestration layer. By actively refactoring its core to support decoupled agent frameworks, asynchronous reward models, and new accelerators (Intel XPU, Ascend NPU), `verl` is positioning itself not just as a training script, but as a universal, highly scalable distributed runtime for next-generation reinforcement learning.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL Open-Source Ecosystem Daily Digest: torchtune
**Date:** 2026-04-25

## 1. Today's Highlights
Activity in the `torchtune` repository over the past 24 hours was minimal, characterized by zero new pull requests, zero releases, and a single new architectural proposal. The focus of the day was strictly on future optimization capabilities for memory-bound training pipelines. 

## 2. Releases
No new releases were recorded in the past 24 hours.

## 3. Important Issues
A notable new proposal was submitted regarding the expansion of torchtune's optimizer ecosystem:
*   **[OPEN] [Proposal] Native support for SCAO (2nd-Order Optimizer) for memory-bound QLoRA recipes ([#2962](https://github.com/pytorch/torchtune/issues/2962))**
    *   **Author:** whispering3
    *   **Summary:** The author proposes integrating **SCAO (Sparse Curvature-Aware Adaptive Optimizer)** as a native alternative to the standard AdamW optimizer. The proposal aligns with torchtune’s modular, "hack-free" philosophy, specifically targeting memory-constrained QLoRA fine-tuning recipes. Given the computational overhead traditionally associated with 2nd-order optimization methods, this issue initiates a discussion on how to efficiently scale these techniques within native PyTorch architectures.

## 4. Key PR Progress
There were no updates, merges, or newly opened pull requests in the past 24 hours.

## 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning (RL)—particularly in post-training paradigms like RLHF/RLAIF for Large Language Models—compute and VRAM constraints dictate the feasibility of experiments. `torchtune` is a critical piece of the PyTorch ecosystem because it provides modular, easily hackable recipes for fine-tuning LLMs using parameter-efficient methods like QLoRA. 

While yesterday's issue regarding the SCAO optimizer is framed around supervised fine-tuning, it is highly relevant to the RL landscape. Replacing memory-heavy optimizers like AdamW with curvature-aware, memory-efficient alternatives frees up crucial VRAM. In an RL pipeline (e.g., PPO), this recovered VRAM can be reallocated to maintain larger batch sizes for rollout generation, run multiple Reward Models simultaneously, or scale the Actor-Critic architecture, thereby increasing the efficiency of the entire RLHF loop.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the daily reinforcement learning ecosystem digest for Open Instruct.

# RL Daily Digest: Open Instruct
**Date:** 2026-04-25

### 1. Today's Highlights
Activity on `allenai/open-instruct` over the last 24 hours has been entirely focused on engineering velocity and repository maintenance, with zero new issues raised and seven pull requests updated. The core highlights include a massive 9.4x speedup for SFT tokenization, the introduction of novel RL mechanics (Delightful Policy Gradient) into GRPO training, and critical patches to the build/packaging system that enable third-party usage. 

### 2. Releases
*   **No new releases** were published today.

### 3. Important Issues
*   **Zero new or updated issues** in the last 24 hours. The lack of bug reports alongside heavy PR merging suggests a stable, albeit actively iterated, codebase.

### 4. Key PR Progress
*   **Engine Performance:** [PR #1631](https://github.com/allenai/open-instruct/pull/1631) (Closed) delivers a major infrastructure win. SFT tokenization now streams directly to disk instead of holding data in memory arrays. This removes the need for explicit checkpointing and accelerates the collection loop by roughly 10x.
*   **Novel RL Algorithms:** [PR #1628](https://github.com/allenai/open-instruct/pull/1628) (Open) introduces "Delightful Policy Gradient" and a "Kondo Gate" to the GRPO module. Based on Osband 2026, it gates per-token policy gradient terms using `sigmoid(advantage * (-new_logprobs.detach()))` to weight updates via action surprisal.
*   **Framework Parity:** [PR #1620](https://github.com/allenai/open-instruct/pull/1620) (Open) is working to ensure `olmo_core_finetune.py` achieves exact parity with a pure `olmo-core` SFT loop, mitigating divergence observed in a recent Beaker reference experiment.
*   **Code Cleanup:** [PR #1635](https://github.com/allenai/open-instruct/pull/1635) (Closed) optimized `GRPOTrainModule` by dropping unused imports and inlining `batch.to(device)`.
*   **Build & Packaging (Crucial for Open Source):** Two PRs fixed the library for external users. [PR #1634](https://github.com/allenai/open-instruct/pull/1634) and [PR #1637](https://github.com/allenai/open-instruct/pull/1637) (Both Closed) corrected a broken `pyproject.toml` declaration that prevented `open_instruct` from being imported when installed as a third-party dependency. Separately, [PR #1636](https://github.com/allenai/open-instruct/pull/1636) (Open) transitions the project away from hardcoded `0.1.0` versioning to dynamic versioning based on git tags.

### 5. Why This Project Matters in Today's RL Landscape
The Open Instruct repository remains a premier open-source hub for post-training and alignment research. Today's updates highlight two primary macro-trends in the RL for LLMs space:
1. **Data Bottlenecks:** As RLHF/GRPO scales, disk I/O and memory constraints during tokenization become critical chokepoints. The 10x speedup in PR #1631 reflects an industry-wide push to optimize data streaming pipelines to keep pace with GPU compute throughput.
2. **Algorithmic Diversification:** The integration of the Delightful Policy Gradient (PR #1628) demonstrates that while GRPO has become a foundational baseline for reasoning models (like DeepSeek-R1), researchers are actively developing nuanced modifications—such as action surprisal gating—to improve policy optimization stability. Furthermore, the push for third-party packaging (PRs #1634, #1636, #1637) indicates that AI2 is lowering the barrier to entry, making it easier for external RL engineers to integrate Open Instruct as a foundational library rather than just a standalone research repo.

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

# RL Open-Source Daily Digest: PettingZoo
**Date:** 2026-04-25 | **Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. Today's Highlights
Activity in the PettingZoo repository over the last 24 hours has been minimal, with zero new or updated issues and no new releases. The sole focus is on project maintenance, specifically an open pull request preparing the codebase for the upcoming `v1.26.0` release. 

### 2. Releases
*   **New Releases:** None for 2026-04-25.

### 3. Important Issues
*   **Updated Issues:** 0
*   *Analyst Note:* The complete lack of active bug reports or feature requests suggests a highly stable codebase or a cycle of feature freezing as the maintainers prepare for the next release.

### 4. Key PR Progress
*   **[PR #1327](https://github.com/Farama-Foundation/PettingZoo/pull/1327) [OPEN]: Changes for release v1.26.0**
    *   **Author:** mwydmuch
    *   **Updated:** 2026-04-23
    *   **Summary:** This is a crucial maintenance PR preparing the library for the `v1.26.0` release. It focuses on modernizing the library's dependencies and environment compatibility.
    *   **Key Changes:** Bumping the version to `1.26.0`; adding official support for Python 3.13 and 3.14 in `pyproject.toml`; and phasing out the legacy `pygame` dependency in favor of the community-driven `pygame-ce`.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo remains a foundational library for Multi-Agent Reinforcement Learning (MARL), serving as the multi-agent counterpart to Gymnasium. While today's digest shows low volume, the underlying technical updates in PR #1327 are vital for the broader RL ecosystem. 
*   **Ecosystem Alignment:** By officially supporting Python 3.13 and 3.14, PettingZoo ensures that new MARL research and downstream training pipelines can safely adopt the latest Python performance optimizations without dependency conflicts.
*   **Dependency Health:** Migrating from unmaintained `pygame` to `pygame-ce` demonstrates proactive stewardship by the Farama Foundation. This prevents future technical debt and ensures that environments requiring graphical rendering (crucial for MARL visual tasks and baseline testing) remain stable and performant.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the RL daily digest for Stable Baselines3 based on the provided data.

# RL Daily Digest: Stable Baselines3 (2026-04-25)

## 1. Today's Highlights
Stable Baselines3 (SB3) experienced an extremely quiet cycle over the last 24 hours, with zero new pull requests, zero new releases, and no newly opened issues. The only recorded activity was a status update on a long-standing feature request regarding hardware-level optimization. 

## 2. Releases
**None.** 
There have been no new releases or version bumps in the repository recently. The library continues to rely on its current stable build.

## 3. Important Issues
While no *new* issues were opened, one historically significant issue saw recent activity:

*   **[Issue #1564](https://github.com/DLR-RM/stable-baselines3/issues/1564) - `[CLOSED]` Request for `torch.compile` / Intel Extension for PyTorch Integration**
    *   **Author:** george-adams1
    *   **Context:** Originally opened in June 2023, this documentation and enhancement request (tagged as a `good first issue` and `help wanted`) asked for the integration of the Intel Extension for PyTorch (IPEX). 
    *   **Analysis:** The goal of IPEX integration is to optimize SB3's underlying PyTorch operations to better utilize Intel CPUs, potentially yielding significant training speedups for users without GPU access. Though tagged for community help, the issue remained open for nearly three years before finally being closed in the last 24 hours. This closure suggests the maintainers may have officially declined the standalone IPEX integration, possibly in favor of native PyTorch 2.x compiler optimizations (`torch.compile`), or due to a lack of community bandwidth to maintain it.

## 4. Key PR Progress
**None.** 
There was no pull request activity, no merge commits, and no pending code reviews recorded in the last 24 hours. 

## 5. Why This Project Matters in Today's RL Landscape
As the gold standard for accessible, reliable, and well-documented Reinforcement Learning APIs, Stable Baselines3 remains a foundational tool for both RL researchers and practitioners. 

While today's digest is remarkably quiet, the context of **[Issue #1564](https://github.com/DLR-RM/stable-baselines3/issues/1564)** highlights a critical, ongoing narrative in the modern RL ecosystem: **hardware optimization and backend abstraction**. As PyTorch consolidates its backend with technologies like `torch.compile`, dedicated hardware-specific extensions (like IPEX) face diminishing returns or increased maintenance burdens. SB3's handling of such integrations is highly indicative of how the broader RL open-source community will balance raw compute performance against long-term codebase stability.

</details>